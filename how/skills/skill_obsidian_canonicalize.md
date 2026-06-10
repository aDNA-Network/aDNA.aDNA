---
type: skill
skill_type: agent
created: 2026-05-21
updated: 2026-05-21
status: active
category: obsidian_operations
trigger: "Rehydrate vault Obsidian state to canonical aDNA defaults. Three modes: --canonicalize (diff vs. upstream + 3-way operator-local-override merge), --reset-layout (T2 absorption — restore workspace.json from workspace.default.json), --verify (T3 absorption — cross-check community-plugins.json against installed binaries)."
last_edited_by: agent_stanley
graduated_from: aDNA.aDNA@m32_obj5  # authored at M3.2 Obj 5 of campaign_adna_serious_tool_readiness
graduated_at: 2026-05-21
graduated_via: campaign_adna_serious_tool_readiness M3.2 S2
tags: [skill, obsidian, canonicalize, t4, m3_2, design_at_p3_propagation_at_p6, t2_reset_layout_absorption, t3_verify_absorption, three_way_merge, operator_local_override_preservation, rosetta, m245_routing_layer_first_behavioral_test, standing_order_8_13th_tactical_invocation_candidate]

requirements:
  tools: [bash 3.2+ portable, python3 (json module), diff]
  context:
    - <vault>/.obsidian/  # target vault's Obsidian config (the vault containing this skill OR specified via --vault)
    - .adna/.obsidian/    # upstream canonical config at ~/aDNA/.adna/.obsidian/
    - <vault>/.obsidian/.local-overrides.json  # opt-in operator-local override layer (optional)
  permissions:
    - read upstream .adna/.obsidian/* recursively
    - read vault .obsidian/* recursively
    - write vault .obsidian/*.json (canonicalize mode + reset-layout mode)
    - invoke ./setup.sh as subprocess (reset-layout + verify modes)
---

# Skill: Obsidian Canonicalize

## Overview

Rehydrates a vault's Obsidian state to canonical aDNA defaults. Three modes that share one mental model — "fix Obsidian config":

| Mode | What it does | Upstream primitive |
|---|---|---|
| `--canonicalize` | Diff vault `.obsidian/*` against `.adna/.obsidian/*`; offer to apply with 3-way operator-local-override merge | NEW (T4 primitive per M3.2) |
| `--reset-layout` | Restore curated workspace layout (force-copy `workspace.default.json` over `workspace.json`) | `setup.sh --reset-layout` (T2 per M3.1) |
| `--verify` | Cross-check `community-plugins.json` enabled list against `.obsidian/plugins/<id>/main.js` binaries | `setup.sh --verify` (T3 per M3.2) |

**Architecture**: this skill is the ORCHESTRATOR; `.adna/setup.sh` provides the primitives. The skill does NOT re-implement workspace reset or plugin-binary verify — it delegates to setup.sh. The `--canonicalize` mode is the only mode where the skill itself implements the substantive logic (3-way merge).

**Location**: this skill lives at `aDNA.aDNA/how/skills/skill_obsidian_canonicalize.md` (NOT upstream `.adna/how/skills/`) per F-S2-5 §Critical files. v8 P6 may promote it to `.adna/` as part of the ecosystem-propagation cycle; until then, operators wanting to use it in other vaults fork the skill into the target vault first, OR invoke from this canonical location with `--vault <target>`.

## Trigger

Invoked when:

- F-S2-5 drift detected — `.obsidian/*.json` has diverged from `.adna/.obsidian/*.json` and operator wants to re-canonicalize (use `--canonicalize`)
- F-S2-6 closure desired — operator wants the curated triad-color palette (purple `who/`, cyan `what/`, green `how/`) applied to a vault that already exists (use `--canonicalize`)
- Operator opened the vault in Obsidian BEFORE running `./setup.sh` and the curated NN-pinned layout was clobbered (use `--reset-layout`)
- Cross-vault audit needs plugin-binary state for a vault (use `--verify`)
- Periodic health check across all aDNA vaults wants to surface drift (use `--canonicalize` with `--report-only` to inspect without applying)
- Operator request: "rehydrate this vault to canonical state" → `--canonicalize` (default mode)

## Parameters

| Parameter | Source | Required | Default |
|---|---|---|---|
| Mode flag | CLI: one of `--canonicalize`, `--reset-layout`, `--verify` | Yes (exactly one) | N/A |
| `--vault <path>` | CLI | No | Vault containing this skill file |
| `--upstream <path>` | CLI | No | `~/aDNA/.adna/.obsidian/` (auto-discover) |
| `--report-only` | CLI flag | No | false (canonicalize mode: report deltas without applying) |
| `--force` | CLI flag | No | false (canonicalize mode: skip operator-confirm gate) |
| `--local-overrides <path>` | CLI | No | `<vault>/.obsidian/.local-overrides.json` |

## Requirements

### Tools

- `bash 3.2+` (portable to macOS default shell)
- `python3` with built-in `json` module (no external deps)
- `diff` (BSD or GNU; for `--report-only` summarization)
- `./setup.sh` available in target vault (T1 fix preserves it; required for `--reset-layout` + `--verify` mode delegation)

### Context files

- Target vault's `.obsidian/` directory (canonical structure: `app.json`, `appearance.json`, `core-plugins.json`, `community-plugins.json`, `workspace.default.json`, `plugins/<id>/`)
- Upstream `.adna/.obsidian/` for `--canonicalize` mode (diff source)
- Optional `<vault>/.obsidian/.local-overrides.json` for operator-discretionary override layer

### Permissions

- Read all files under target `<vault>/.obsidian/` recursively
- Read all files under `~/aDNA/.adna/.obsidian/` recursively
- Write to `<vault>/.obsidian/*.json` files (canonicalize + reset-layout modes)
- Spawn `./setup.sh` as subprocess

## Safety preconditions

Verified before any mode runs:

1. **No Obsidian process running on target vault.** File-lock contention risk: Obsidian writes config on shutdown; concurrent writes would corrupt. Check: `pgrep -f "Obsidian.*<vault>"` returns empty.
2. **Vault is a recognized aDNA vault.** Required markers: `<vault>/.obsidian/` exists AND (`<vault>/CLAUDE.md` exists OR `<vault>/MANIFEST.md` exists).
3. **Git working tree state** (canonicalize + reset-layout modes only): `<vault>/.obsidian/` is either (a) clean OR (b) operator explicitly opts in to canonicalize-with-dirty-tree via `--force`. Reason: canonicalize WILL overwrite operator-edited files; pre-canonicalize commit gives a clean rollback point.
4. **Upstream path resolvable** (canonicalize mode only): `~/aDNA/.adna/.obsidian/` is a directory AND readable. Failure: fail fast with a clear "upstream not found at <path>; use --upstream to specify" message.

## Implementation

### Common: argument parser + preflight

```bash
MODE=""
VAULT_DIR="$(cd "$(dirname "$0")/../.." && pwd)"  # default: vault containing this skill
UPSTREAM_DIR="$HOME/aDNA/.adna/.obsidian"
REPORT_ONLY=0
FORCE=0
LOCAL_OVERRIDES=""

for arg in "$@"; do
    case "$arg" in
        --canonicalize|--reset-layout|--verify) MODE="$arg" ;;
        --vault)                                shift; VAULT_DIR="$1" ;;
        --upstream)                             shift; UPSTREAM_DIR="$1" ;;
        --report-only)                          REPORT_ONLY=1 ;;
        --force)                                FORCE=1 ;;
        --local-overrides)                      shift; LOCAL_OVERRIDES="$1" ;;
        --help|-h)                              show_help; exit 0 ;;
        *)                                      echo "Unknown flag: $arg"; exit 1 ;;
    esac
done

[ -z "$MODE" ] && { echo "Mode required: --canonicalize | --reset-layout | --verify"; exit 1; }
[ -z "$LOCAL_OVERRIDES" ] && LOCAL_OVERRIDES="$VAULT_DIR/.obsidian/.local-overrides.json"
```

Preflight (run before mode dispatch):

1. Check Obsidian not running on target vault (`pgrep -f "Obsidian.*$(basename $VAULT_DIR)"`).
2. Check vault is aDNA-recognized (`-d $VAULT_DIR/.obsidian` AND (`-f $VAULT_DIR/CLAUDE.md` OR `-f $VAULT_DIR/MANIFEST.md`)).
3. Check upstream resolvable (`-d $UPSTREAM_DIR` AND readable) — only required for canonicalize mode.
4. Check git working tree state if canonicalize/reset-layout — abort if dirty AND not `--force`.

### Mode 1: `--canonicalize` (NEW T4 primitive)

The substantive mode. Implements the 3-way merge described in `m32_obj4_t4_design_spec.md` §5 Patch A.

**Step 1 — Enumerate canonical files**:

Identify which files under `<vault>/.obsidian/` are subject to canonicalization. Default set:

```
app.json
appearance.json
core-plugins.json
community-plugins.json
hotkeys.json
graph.json
.obsidianignore   # special; not JSON, but tracked
```

Plus per-plugin data.json files where upstream ships a template:

```
plugins/notebook-navigator/data.json  # T4 Patch B' shipping
# (extensible: future plugin templates added here)
```

**Step 2 — Load 3 sources**:

For each file in the canonical set:

```python
import json
def load_json(path):
    if not path.exists():
        return {}
    try:
        return json.loads(path.read_text())
    except json.JSONDecodeError:
        return None  # report as failure; do not canonicalize

upstream = load_json(UPSTREAM_DIR / file)
vault    = load_json(VAULT_DIR / ".obsidian" / file)
local    = load_json(LOCAL_OVERRIDES).get(file, {})  # operator overrides indexed by filename
```

**Step 3 — Flatten + 3-way merge**:

Flatten nested dicts to dotted-key maps for diffability:

```python
def flatten(d, prefix=""):
    out = {}
    for k, v in d.items():
        key = f"{prefix}.{k}" if prefix else k
        if isinstance(v, dict):
            out.update(flatten(v, key))
        else:
            out[key] = v  # arrays + scalars treated as leaf values
    return out
```

Merge algorithm (operator overrides win; upstream applies where vault diverges + no override):

```python
merged = dict(vault)  # start from vault
for key, up_val in flatten(upstream).items():
    if key in flatten(local):
        merged[key] = flatten(local)[key]   # override wins
    elif merged.get(key) != up_val:
        merged[key] = up_val                # canonicalize
# Keys in vault not in upstream: keep (preserve vault-only customization)
# Local overrides for keys not in upstream: still apply (defensive override layer)
for key, ov_val in flatten(local).items():
    merged[key] = ov_val
```

**Step 4 — Reconstruct + report**:

Reconstruct nested JSON from flattened map (inverse of `flatten`). Compute deltas:

- `canonicalized`: keys where vault → upstream value applied
- `preserved_from_local`: keys where local override prevented canonicalize
- `vault_only_kept`: keys in vault but not upstream; kept
- `no_change`: keys identical across all 3 sources

Per-file report:

```
app.json
  3 canonicalized: monospaceFontFamily (moved to appearance.json), spellcheckDictionary, …
  1 preserved-from-local: fontSize (operator override)
  2 vault-only kept
  12 no-change
```

**Step 5 — Apply (or skip if `--report-only`)**:

If `--report-only`: print full per-file report; exit 0.

Else: prompt operator unless `--force`:

```
Canonicalize would apply 14 changes across 5 files.
2 files have operator-local overrides that will be preserved.
Proceed? [y/N]
```

On confirm: write merged JSON back to `<vault>/.obsidian/<file>` for each changed file. Use `json.dumps(merged, indent=2)` to match Obsidian's serialization (2-space indent, trailing newline stripped to match Obsidian's normalization).

**Step 6 — Special-case `.obsidianignore`**:

Not JSON. Treat as line-set:

- Upstream lines = canonical set
- Vault lines = current set
- Local-override block (operator-discretionary; sentinel-delimited):

```
# === local overrides (preserve across canonicalize) ===
custom-pattern/
# === end local overrides ===
```

Merge = `upstream ∪ vault-lines-inside-local-block`. Write back; report deltas.

### Mode 2: `--reset-layout` (T2 absorption)

Pure delegation to `setup.sh --reset-layout` (T2 primitive per M3.1 T2 design spec):

```bash
cd "$VAULT_DIR"
if [ ! -x ./setup.sh ]; then
    echo "FAIL: ./setup.sh not found in $VAULT_DIR (T1 fix not landed yet? See m31_obj3_t1_design_spec.md)"
    exit 2
fi
./setup.sh --reset-layout
```

Skill adds no logic beyond the preflight checks + subprocess invocation. Exit code passes through from setup.sh.

### Mode 3: `--verify` (T3 absorption)

Pure delegation to `setup.sh --verify` (T3 primitive per M3.2 T3 design spec):

```bash
cd "$VAULT_DIR"
if [ ! -x ./setup.sh ]; then
    echo "FAIL: ./setup.sh not found in $VAULT_DIR (T1 fix not landed yet? See m31_obj3_t1_design_spec.md)"
    exit 2
fi
./setup.sh --verify
```

Exit code passes through from setup.sh (0 = all installed; 1 = mismatch).

## Output

### Canonicalize mode — success (exit 0)

```
=== Obsidian canonicalize ===
Target: /Users/stanley/aDNA/<vault>.aDNA/.obsidian/
Upstream: /Users/stanley/aDNA/.adna/.obsidian/
Local overrides: /Users/stanley/aDNA/<vault>.aDNA/.obsidian/.local-overrides.json (3 keys)

Per-file deltas:
  app.json                   3 canonicalized, 1 preserved-from-local, 2 vault-only, 12 no-change
  appearance.json            2 canonicalized, 0 preserved, 1 vault-only, 8 no-change
  core-plugins.json          1 canonicalized (trailing newline strip), 0 preserved, 0 vault-only, 15 no-change
  community-plugins.json     0 canonicalized, 0 preserved, 0 vault-only, 15 no-change (already matches upstream)
  hotkeys.json               4 canonicalized, 2 preserved-from-local, 0 vault-only, 6 no-change
  .obsidianignore            1 line added (how/templates/; F-S2-7 closure)
  plugins/notebook-navigator/data.json  1 file created (F-S2-6 closure; triad colors applied)

Canonicalize applied 14 changes across 6 files; 6 keys preserved from local overrides.
Exit 0.
```

### Reset-layout mode — success (exit 0)

```
[OK]    Workspace layout (reset to default)
```

(Pass-through from setup.sh's existing output.)

### Verify mode — success (exit 0) / mismatch (exit 1)

```
Verify summary
--------------
Enabled plugins:   15
Installed:         15
Missing binaries:  0
Exit 0.
```

(Pass-through from setup.sh --verify per T3 design spec §5 Patch B.)

## Error handling

| Exit Code | Cause | Resolution |
|---|---|---|
| 0 | Mode completed successfully | No action |
| 1 | Mode-specific failure (verify mismatch; canonicalize unable to write; reset-layout copy failed) | Inspect per-mode error message; commonly missing upstream OR file permissions |
| 2 | Preflight failure (Obsidian process running on target vault; vault not aDNA-recognized; setup.sh missing) | Stop Obsidian; verify vault path; ensure T1 fix landed (preserves setup.sh in forked vault) |
| 3 | Git working tree dirty + `--force` not passed (canonicalize / reset-layout modes) | Commit or stash existing changes; OR pass `--force` to proceed |
| 4 | Upstream not found at default path (canonicalize mode) | Pass `--upstream <path>` OR clone `.adna/` into `~/aDNA/.adna/` |
| 5 | JSON parse failure on upstream or vault file | Inspect failing file; fix syntax; re-run |

## Rollback

| Mode | Rollback path |
|---|---|
| `--canonicalize` | Pre-canonicalize git commit (or stash) is the rollback point. `git checkout HEAD -- .obsidian/` restores pre-canonicalize state. If `--force` was used over a dirty tree, the dirty state is permanently mixed into the apply — DO NOT use `--force` over uncommitted important work. |
| `--reset-layout` | `cp .obsidian/workspace.json /tmp/workspace.pre-reset.json` BEFORE reset (manual operator-discipline); `cp /tmp/workspace.pre-reset.json .obsidian/workspace.json` to restore. Future enhancement: skill auto-archives previous workspace.json to `.obsidian/.canonicalize-history/`. |
| `--verify` | N/A (read-only). |

## Examples

### Example 1: First-time use on a fresh fork

```bash
# Operator just forked a new vault + ran setup.sh
cd ~/aDNA/my-new-vault.aDNA/

# Open in Obsidian; first-open clobbers workspace layout
open -a Obsidian .

# Notice NN tab is missing; recover via reset-layout mode
./how/skills/skill_obsidian_canonicalize --reset-layout

# Verify plugin binaries installed
./how/skills/skill_obsidian_canonicalize --verify
```

### Example 2: Re-canonicalize after upstream change

```bash
# Operator pulled latest .adna/ template (which now ships NN data.json triad colors)
cd ~/aDNA/my-existing-vault.aDNA/
git status .obsidian/  # clean

# Dry-run first to see what would change
./how/skills/skill_obsidian_canonicalize --canonicalize --report-only

# Apply
./how/skills/skill_obsidian_canonicalize --canonicalize
```

### Example 3: Operator wants to preserve a customization across canonicalize

```bash
# Operator likes fontSize=18 (not the upstream default of 16)
# Author override:
cat > .obsidian/.local-overrides.json <<'EOF'
{
  "app.json": {
    "fontSize": 18
  }
}
EOF

# Future canonicalize runs preserve fontSize=18 while canonicalizing other fields
./how/skills/skill_obsidian_canonicalize --canonicalize
```

### Example 4: Cross-vault audit (operator iterates over all aDNA vaults)

```bash
cd ~/aDNA/
for vault in *.aDNA/; do
    echo "=== $vault ==="
    ~/aDNA/aDNA.aDNA/how/skills/skill_obsidian_canonicalize --vault "$PWD/$vault" --verify
done
```

## Related

### Companion skills (≥ 3 prior skills cross-linked per Project SO #10)

- [[../../../.adna/how/skills/skill_node_health_check.md|skill_node_health_check.md]] — D10 reproducibility gate; Step 5b extension consumes T3's `--verify` (this skill's `--verify` mode reaches the same primitive)
- [[../../../.adna/how/skills/skill_workspace_upgrade.md|skill_workspace_upgrade.md]] — workspace-level upgrade skill; complementary to this skill's vault-level canonicalize
- [[../../../.adna/how/skills/skill_project_fork.md|skill_project_fork.md]] — fork procedure; consumes T1 (setup.sh preservation) + T3 (Step 5 fork-time verify gate); this skill operates POST-fork on existing vaults

### Design specs (≥ 2 design specs cross-linked per Project SO #10)

- [[../campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m32_obj3_t3_design_spec.md|T3 design spec]] — `setup.sh --verify` primitive; absorbed as this skill's `--verify` mode
- [[../campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m32_obj4_t4_design_spec.md|T4 design spec]] — combined canonicalization spec (F-S2-5/6/7); §5 Patch A defines this skill's `--canonicalize` 3-way merge contract
- [[../campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m31_obj4_t2_design_spec.md|T2 design spec]] — `setup.sh --reset-layout` primitive; absorbed as this skill's `--reset-layout` mode
- [[../campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m31_obj3_t1_design_spec.md|T1 design spec]] — preserves setup.sh in forked vault; precondition for this skill's reset-layout + verify modes (both delegate to setup.sh)

### Backlog findings

- [[../backlog/backlog_F_S2_5_obsidian_json_normalization.md|F-S2-5 backlog]] — `.obsidian/*.json` normalization drift (closed by `--canonicalize` mode)
- [[../backlog/backlog_F_S2_6_nn_data_json_not_shipped.md|F-S2-6 backlog]] — NN plugin data.json triad colors (closed by setup.sh post-install + `--canonicalize` mode)
- [[../backlog/backlog_F_S2_7_template_placeholder_tags.md|F-S2-7 backlog]] — template-tag pollution (closed by `.obsidianignore` extension via Patch C; this skill re-applies on `--canonicalize`)
- [[../backlog/backlog_F_S2_2_config_binary_asymmetry.md|F-S2-2 backlog]] — silent-failure mode for plugin binaries (closed by T3 `setup.sh --verify`; this skill's `--verify` mode is the consumer)

### Mission + campaign context

- [[../campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p3_m32_obsidian_stabilization_extension.md|M3.2 mission spec]] — parent mission (this skill is Obj 5)
- [[../campaigns/campaign_adna_serious_tool_readiness/campaign_adna_serious_tool_readiness.md|campaign master]] — v8 campaign roadmap; v8 P6 owns upstream propagation of T1+T2+T3+T4 patches
- [[../campaigns/campaign_obsidian_deployment_stabilization/campaign_obsidian_deployment_stabilization.md|absorbed campaign master]] — T3 + T4 track substrate

## Notes

- **This skill is the orchestrator; `.adna/setup.sh` provides primitives.** The skill-vs-script separation is intentional: the skill is testable in isolation, can be invoked without re-installing plugins, and can be extended (e.g., add a `--diff <file>` sub-flag) without bloating setup.sh.
- **Operator-local-override layer (`.local-overrides.json`)** is opt-in and operator-discretionary. Vaults without a local-overrides.json file have all canonicalize deltas applied as-is. Operators who want surgical control author this file.
- **3-way merge edge cases**: nested arrays are treated as opaque (replace-or-keep) by default. Field-relocation drift (e.g., F-S2-5's `monospaceFontFamily` migration from app.json to appearance.json) is handled by the natural mechanics: upstream removed key from app.json → apply removal; upstream added key to appearance.json → apply addition. Operator-local overrides anchored to the OLD path may need operator-attention; this is reported in the per-file delta.
- **Dual-audience note**: a newcomer reading this skill finds three modes with clear use-cases via Examples 1-4. A developer reads the Implementation section for the substantive 3-way merge contract. Both audiences land on the same operator-facing surface.
- **Self-reference (Standing Order #8 — 13th tactical invocation candidate in v8)**: this skill drop tests whether the M2.4.5-hardened `aDNA.aDNA/how/skills/AGENTS.md` routing layer succeeds in discoverability for new-skill drops in `aDNA.aDNA/how/skills/`. Formal Q2 SQL re-measurement at M3.x ≥ 20-session corpus per `m245_obj3_measurement_contract.md` §6.
- **v8 P6 promotion forecast**: at v8 P6 entry, this skill is a candidate for promotion from `aDNA.aDNA/how/skills/` → `.adna/how/skills/` (so that fresh forks inherit it via `cp -r .adna/`). Operator decision at P6; the skill's portability (vault-agnostic via `--vault <path>`) supports either disposition.
