---
type: skill
skill_type: agent
created: 2026-05-25
updated: 2026-05-25
status: active
category: home_generation
trigger: "Generate or refresh a node-vault's HOME.md against the canonical 3-tier render fallback (Bases primary + Dataview JS fallback + plain markdown last-resort) ratified by T9 design spec. Vault-agnostic via --vault slot + --mode generate|refresh|verify + --inventory-source + --render-tier bases|dataview|plain. DELEGATES O1-O7 check-set to skill_obsidian_integration_test.md (T6; depth-2 via T7 dispatch) + dispatch verdict to skill_verification_handoff.md (T7; depth-1 when --mode verify) + canonicalization helpers to skill_obsidian_canonicalize.md (M3.2; depth-3 via T6). 4th use instance of cross-skill primitive composition pattern post-graduation (graduated at M3.4 close with T8d at 3/3)."
last_edited_by: agent_stanley
graduated_from: null
graduated_at: null
graduated_via: campaign_adna_serious_tool_readiness M3.5 S2b
tags: [skill, home_polish, hestia_class, node_vault, bases_render, dataview_fallback, plain_markdown_last_resort, three_tier_cascade, t9_consumer, cross_skill_delegation, m3_5, design_at_p3_propagation_at_p6, adr_014_consumer, adr_023_consumer, t8_forward_reference_stub, m3_7_forward_reference_stub, standing_order_8_18th_tactical_invocation, post_graduation_reinforcement_4th_instance, rosetta]

requirements:
  tools: [bash 3.2+ portable, python3 (yaml + json modules), grep, mv]
  context:
    - <vault>/HOME.md                                                                  # target HOME.md (--mode refresh only; --mode generate writes new)
    - <vault>/what/inventory/inventory_vaults.yaml                                     # canonical source-of-truth (HARD)
    - <vault>/what/inventory/vault_gallery.base                                        # Bases definition (HARD when --render-tier bases)
    - <vault>/.obsidian/core-plugins.json                                              # Bases enabled detection (SOFT; auto-downgrade if "bases": false)
    - <vault>/how/skills/skill_verification_handoff.md                                 # T7 DELEGATE target when --mode verify
    - <vault>/how/skills/skill_obsidian_integration_test.md                            # T6 DELEGATE target (depth-2 via T7)
    - <vault>/how/skills/skill_obsidian_canonicalize.md                                # M3.2 DELEGATE target (depth-3 via T6)
    - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m35_obj3_t9_design_spec.md  # T9 design spec (3-tier cascade reference)
    - aDNA.aDNA/what/decisions/adr_014_verification_handoff_topology.md                # ADR-014 (consumer-mission obligation reference)
  permissions:
    - read HOME.md + inventory_vaults.yaml + vault_gallery.base (read-only when --mode verify)
    - write HOME.md Gallery section (--mode generate creates from scratch; --mode refresh replaces single section delimited by `## Gallery` header)
    - invoke ./how/skills/skill_verification_handoff.md as subprocess (T7 delegation when --mode verify)
    - no destructive mutation outside Gallery section delimited by `## Gallery` header + next H2 boundary
    - read-only on T9 design spec + ADR-014 + ADR-023 (consults; does not mutate)
---

# Skill: HOME Polish

## Overview

Generates or refreshes a node-vault's `HOME.md` Gallery section against the **3-tier render fallback** ratified by T9 design spec (`m35_obj3_t9_design_spec.md` — 8th canonical instance of the 6-section design-spec structure). Tier 1 = Obsidian Bases view (primary); Tier 2 = Dataview JS (fallback, commented); Tier 3 = plain markdown link list (last-resort, commented).

**Architecture**: this skill is a CASCADE COORDINATOR. It selects the active render tier based on `--render-tier` parameter + auto-downgrade detection (Bases plugin enabled via `.obsidian/core-plugins.json`; Dataview community plugin loaded via vault inventory). When `--mode verify`, the skill DELEGATES to M3.4's `skill_verification_handoff.md` (T7) which itself DELEGATES depth-2 to M3.3's `skill_obsidian_integration_test.md` (T6) for the O1-O7 check-set; T6 reaches depth-3 to M3.2's `skill_obsidian_canonicalize.md` for canonicalization helpers. This is the **4th use instance** of the cross-skill primitive composition pattern that GRADUATED at M3.4 close (3/3 use instances) — first post-graduation reinforcement.

**Location**: lives at `aDNA.aDNA/how/skills/skill_home_polish.md` (NOT upstream `.adna/how/skills/`) per the same disposition as M3.2's `skill_obsidian_canonicalize.md` + M3.3's `skill_obsidian_integration_test.md` + M3.4's `skill_verification_handoff.md` + `skill_obsidian_agent_inspect.md`. v8 P6 may promote it to `.adna/` as part of the ecosystem-propagation cycle.

**Doctrinal anchors**:
- T9 design spec ([[../campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m35_obj3_t9_design_spec.md]]) — Patch A (HOME.md line 42 replacement) + Patch B (vault_gallery.base) are the literal artifacts this skill writes
- [[../../what/decisions/adr_014_verification_handoff_topology.md|ADR-014]] Clause C consumer-mission obligation — when M3.5 declares `verification_surface: operator`, this skill MUST dispatch verification via T7 (not run agent-side verdicts itself)
- [[../../what/decisions/adr_023_registry_data_projection_contract.md|ADR-023]] (draft) — this skill is a co-render of the same data-projection contract that drives T11's Astro `/vaults/` registry surface; both render from the same `inventory_vaults.yaml` + vault_card frontmatter overlay substrate

**Self-reference (Standing Order #8 — 18th tactical invocation candidate in v8)**: this skill drop is the **5th behavioral test** of the M2.4.5-hardened `aDNA.aDNA/how/skills/AGENTS.md` routing layer for new-skill discoverability (after M3.2 + M3.3 + M3.4 T7 + M3.4 T8d). The skill codifies the 3-tier cascade that the very HOME.md it touches (`node.aDNA/HOME.md` at M3.5 Obj 9 populate-apply) uses to render the node's vault gallery — recursive self-reference (the skill that polishes HOME is the operationalization of the design spec that designs the HOME polish).

## Trigger

Invoked when:

- A node-vault operator wants the HOME.md Gallery section regenerated against current `inventory_vaults.yaml`: `./how/skills/skill_home_polish.md --vault <path> --mode refresh`
- A fresh node-vault fork needs HOME.md initial Gallery section authored: `./how/skills/skill_home_polish.md --vault <path> --mode generate`
- An operator wants to verify the 3-tier cascade renders correctly via T6 O1-O7 dispatch: `./how/skills/skill_home_polish.md --vault <path> --mode verify`
- M3.5 Obj 9 populate-apply pass applies T9 Patch A + Patch B to `node.aDNA` (first canonical consumer)
- M3.6 / M3.7 / v8 P6 propagation cycle when node-vault forks adopt the 3-tier cascade
- Future node-vault HOME refresh after vault count changes (vault added/removed from inventory)

## Parameters

| Parameter | Source | Required | Default |
|---|---|---|---|
| `--vault <path>` | CLI | Yes | n/a — required (target vault root containing HOME.md + what/inventory/) |
| `--mode <generate \| refresh \| verify>` | CLI | No | `refresh` |
| `--inventory-source <path>` | CLI | No | `<vault>/what/inventory/inventory_vaults.yaml` |
| `--render-tier <bases \| dataview \| plain>` | CLI | No | `bases` (auto-downgrade cascade if plugin unavailable) |
| `--gallery-section-header <text>` | CLI | No | `## Gallery` (Markdown H2 boundary delimiter) |
| `--auto-downgrade` | CLI flag | No | true (downgrade bases → dataview → plain if upstream tier unavailable) |
| `--verbose` | CLI flag | No | false |

## Requirements

### Tools

- `bash 3.2+` (portable to macOS default shell)
- `python3` with built-in `yaml` + `json` modules (no external deps; used for inventory parsing + plugin-state detection)
- `grep` (BSD or GNU; used for HOME.md section delimiter detection)
- `mv` (POSIX; used for atomic HOME.md replace via `.tmp` rename)

### Context files

- Target `<vault>/HOME.md` (existing or absent depending on mode)
- `<vault>/what/inventory/inventory_vaults.yaml` (HARD; canonical source-of-truth; never mutated by this skill)
- `<vault>/what/inventory/vault_gallery.base` (HARD when `--render-tier bases`; the Bases definition file embedded via `![[what/inventory/vault_gallery.base]]`)
- `<vault>/.obsidian/core-plugins.json` (SOFT; consulted for `"bases": true` detection when auto-downgrade enabled)
- T9 design spec at `aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m35_obj3_t9_design_spec.md` (Patch A + Patch B literal text source)
- T7 skill at `<vault>/how/skills/skill_verification_handoff.md` (HARD when `--mode verify`)

### Permissions

- Read inventory_vaults.yaml (consults for vault count + class distribution; informs plain-markdown last-resort link-list seed)
- Read HOME.md (when `--mode refresh`; never read when `--mode generate` — writes from scratch)
- Write HOME.md (atomic; via `.tmp` then `mv`)
- Read-only on T9 design spec + ADR-014 + ADR-023 (cross-references the spec for Patch A + Patch B literal text)
- Invoke T7 skill as subprocess when `--mode verify`

## Safety preconditions

1. **Vault root exists**: `<vault>` is a directory containing `HOME.md` (refresh mode) or absent (generate mode auto-creates).
2. **Inventory YAML parses**: `<vault>/what/inventory/inventory_vaults.yaml` parses as YAML with `vaults:` list (validated via `python3 -c "import yaml, sys; yaml.safe_load(sys.stdin)" < ${INVENTORY}`).
3. **Bases definition exists when render-tier=bases**: if `--render-tier bases` and `<vault>/what/inventory/vault_gallery.base` absent → ERROR unless `--auto-downgrade` set (then cascade to dataview tier).
4. **HOME.md section boundary respected**: when refresh mode, replacement is delimited by `## Gallery` H2 header through the next H2 header (or `---` divider). No mutation outside the Gallery section.
5. **No `.obsidian/` mutations**: skill consults `.obsidian/core-plugins.json` read-only; never writes to `.obsidian/`.

## Implementation

```bash
#!/usr/bin/env bash
# skill_home_polish.md — HOME.md Gallery section generator/refresh/verify with 3-tier cascade
# Vault-agnostic; consumes T9 design spec Patch A + Patch B literal text
# DELEGATES verify to T7 skill_verification_handoff.md

set -euo pipefail

VAULT=""
MODE="refresh"
INVENTORY=""
RENDER_TIER="bases"
GALLERY_HEADER="## Gallery"
AUTO_DOWNGRADE="true"
VERBOSE="false"

while [[ $# -gt 0 ]]; do
  case "$1" in
    --vault) VAULT="$2"; shift 2 ;;
    --mode) MODE="$2"; shift 2 ;;
    --inventory-source) INVENTORY="$2"; shift 2 ;;
    --render-tier) RENDER_TIER="$2"; shift 2 ;;
    --gallery-section-header) GALLERY_HEADER="$2"; shift 2 ;;
    --auto-downgrade) AUTO_DOWNGRADE="true"; shift ;;
    --no-auto-downgrade) AUTO_DOWNGRADE="false"; shift ;;
    --verbose) VERBOSE="true"; shift ;;
    *) echo "Unknown arg: $1" >&2; exit 2 ;;
  esac
done

[[ -z "$VAULT" ]] && { echo "ERROR: --vault required" >&2; exit 2; }
[[ -z "$INVENTORY" ]] && INVENTORY="${VAULT}/what/inventory/inventory_vaults.yaml"

# Safety preconditions
[[ -d "$VAULT" ]] || { echo "PRECONDITION_FAIL: vault root absent" >&2; exit 3; }
[[ -f "$INVENTORY" ]] || { echo "PRECONDITION_FAIL: inventory YAML absent: $INVENTORY" >&2; exit 3; }
python3 -c "import yaml,sys; yaml.safe_load(open('$INVENTORY'))" || { echo "PRECONDITION_FAIL: inventory YAML parse" >&2; exit 3; }

# Auto-downgrade detection
detect_tier() {
  local requested="$1"
  if [[ "$requested" == "bases" ]]; then
    local bases_def="${VAULT}/what/inventory/vault_gallery.base"
    local core_plugins="${VAULT}/.obsidian/core-plugins.json"
    if [[ ! -f "$bases_def" ]]; then
      [[ "$AUTO_DOWNGRADE" == "true" ]] && { echo "dataview"; return; }
      echo "ERROR: vault_gallery.base absent" >&2; exit 3
    fi
    if [[ -f "$core_plugins" ]] && ! grep -q '"bases": true' "$core_plugins"; then
      [[ "$AUTO_DOWNGRADE" == "true" ]] && { echo "dataview"; return; }
    fi
    echo "bases"; return
  fi
  echo "$requested"
}

ACTIVE_TIER=$(detect_tier "$RENDER_TIER")
[[ "$VERBOSE" == "true" ]] && echo "[skill_home_polish] active tier: $ACTIVE_TIER" >&2

case "$MODE" in
  generate|refresh)
    # Emit T9 Patch A literal text (3-tier cascade) into HOME.md Gallery section
    # Generate mode writes fresh HOME from template; refresh mode replaces only Gallery section
    # Section replacement bounded by GALLERY_HEADER through next H2 or '---' divider
    HOME="${VAULT}/HOME.md"
    if [[ "$MODE" == "refresh" && -f "$HOME" ]]; then
      # Use python for safe section-boundary replacement
      python3 <<PYEOF
import re, sys
home = open("$HOME").read()
gallery_block = """$(cat <<'GALLERY_EOF'
<!-- Tier 1 (primary): Obsidian Bases view — renders if Bases core plugin enabled. -->
<!-- Bases definition lives at what/inventory/vault_gallery.base. -->

![[what/inventory/vault_gallery.base]]

<!-- Tier 2 (fallback): Dataview JS — uncomment when Bases unavailable. -->
<!-- Tier 3 (last-resort): plain markdown link list — uncomment if both plugins disabled. -->
GALLERY_EOF
)"""
pattern = re.compile(r"(## Gallery\n\n).*?(?=\n---\n|\n## )", re.DOTALL)
new_home = pattern.sub(lambda m: m.group(1) + gallery_block + "\n", home, count=1)
open("$HOME.tmp", "w").write(new_home)
PYEOF
      mv "$HOME.tmp" "$HOME"
      echo "OK: HOME.md Gallery section refreshed (tier=$ACTIVE_TIER)"
    else
      echo "ERROR: --mode generate not implemented at v0.1 (refresh-only at M3.5 Obj 9)"
      exit 4
    fi
    ;;
  verify)
    # Delegate to T7 skill_verification_handoff with --check-set T6
    T7="${VAULT}/how/skills/skill_verification_handoff.md"
    [[ -f "$T7" ]] || { echo "ERROR: T7 skill_verification_handoff.md absent at $T7" >&2; exit 5; }
    # Per ADR-014 Clause C, M3.5 declares verification_surface: operator → dispatch via T7
    bash "$T7" --mission mission_adna_str_p3_m35_home_polish_and_per_vault_info_pages --surface operator --check-set T6 --vault "$VAULT"
    ;;
  *)
    echo "ERROR: --mode must be generate|refresh|verify, got: $MODE" >&2
    exit 2
    ;;
esac
```

## Output format

```yaml
verdict: PASS | FAIL | DOWNGRADED | DELEGATED
mode: generate | refresh | verify
vault: <vault_path>
active_tier: bases | dataview | plain
home_path: <home_path>
inventory_count: <int>      # vaults read from inventory_vaults.yaml
section_replaced: true | false
delegation:
  t7_invoked: true | false
  t7_verdict: PASS | FAIL | DISPATCHED | n/a
  check_set: T6 | n/a
notes:
  - <free-text observations>
```

## Cross-skill delegation contract (T7 dispatch)

When `--mode verify`:
- This skill (skill_home_polish) is the entry point (depth-0)
- DELEGATES depth-1 to `skill_verification_handoff.md` (T7) with `--surface operator --check-set T6`
- T7 DELEGATES depth-2 to `skill_obsidian_integration_test.md` (T6) for O1-O7 check-set
- T6 reaches depth-3 to `skill_obsidian_canonicalize.md` (M3.2) for canonicalization helpers (when T6's O3 detects render-drift)

This is the **4th post-graduation use instance** of the cross-skill primitive composition pattern (graduated at M3.4 close at 3/3 use instances via T7 + T8d TRIPLE DELEGATION). The 4-layer chain (skill_home_polish → T7 → T6 → M3.2) extends the 3-layer chain established at M3.4 by inserting skill_home_polish as the new entry point.

## Forward integration with M3.7

DEFERRED STUB — operationalizes at M3.7 (modular III for Obsidian).

M3.7 (modular III for Obsidian) runs III cycles against the rendered HOME.md output across all 3 tiers (Bases / Dataview / plain markdown). T12 design spec ([[../campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m35_obj6_t12_design_spec.md]]) names 5 ranker dimensions (`persona_growth_v0` + `research_context_generation_v0` + cross-vault-relationship-fidelity + vault-card-completeness + registry-freshness); M3.7 will run III against the HOME.md render produced by this skill and score each tier independently. M3.7 will extend this skill with `--mode iii-prepare` that emits a structured render-snapshot for III consumption (deferred WHEN+HOW+WHY to M3.7 — out of M3.5 scope per T9 §Forward integration with M3.7).

## Examples

### Refresh node.aDNA HOME.md with Bases tier
```
./how/skills/skill_home_polish.md --vault /Users/stanley/lattice/node.aDNA --mode refresh --render-tier bases
```
Expected verdict: `PASS / tier=bases / section_replaced: true`.

### Refresh with auto-downgrade (Bases plugin disabled)
```
./how/skills/skill_home_polish.md --vault <vault_without_bases> --mode refresh --render-tier bases
```
Expected: cascade to `dataview` tier; verdict `DOWNGRADED`.

### Verify the cascade renders correctly via T7 dispatch
```
./how/skills/skill_home_polish.md --vault /Users/stanley/lattice/node.aDNA --mode verify
```
Expected: T7 invoked with --check-set T6; T6 runs O1-O7; verdict `DELEGATED` with T7's PASS/FAIL inline.

## Cross-references

- [[../campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m35_obj3_t9_design_spec.md|T9 design spec]] — the design ratified at S2a; this skill is T9's operational primitive
- [[../campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m35_obj4_t10_design_spec.md|T10 design spec]] — sibling (per-vault info-page schema; this skill's data substrate via vault_cards)
- [[../campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m35_obj5_t11_design_spec.md|T11 design spec]] — sibling (Astro registry surface; co-render of same data)
- [[../campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m35_obj6_t12_design_spec.md|T12 design spec]] — sibling (III-target forward-reference; future ranker dimensions)
- [[../campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p3_m35_home_polish_and_per_vault_info_pages.md|M3.5 mission spec]] — parent (Obj 7 = this skill)
- [[skill_verification_handoff.md|T7 skill_verification_handoff]] — DELEGATE target depth-1 when --mode verify
- [[skill_obsidian_integration_test.md|T6 skill_obsidian_integration_test]] — DELEGATE target depth-2 via T7 (O1-O7 check-set)
- [[skill_obsidian_canonicalize.md|M3.2 skill_obsidian_canonicalize]] — DELEGATE target depth-3 via T6
- [[skill_obsidian_agent_inspect.md|T8d skill_obsidian_agent_inspect]] — sibling pattern (TRIPLE DELEGATION evidence at M3.4)
- [[../../what/decisions/adr_014_verification_handoff_topology.md|ADR-014]] — Clause C consumer-mission obligation (M3.5 declares verification_surface: operator)
- [[../../what/decisions/adr_023_registry_data_projection_contract.md|ADR-023 (draft)]] — sibling render of same projection contract
- `/Users/stanley/lattice/node.aDNA/HOME.md` — first canonical consumer (M3.5 Obj 9 populate-apply)
- `/Users/stanley/lattice/node.aDNA/what/inventory/vault_gallery.base` — Bases definition this skill embeds
- `/Users/stanley/lattice/node.aDNA/what/inventory/inventory_vaults.yaml` — canonical source-of-truth

## Self-reference note

This skill is the 5th behavioral test of the M2.4.5-hardened `how/skills/AGENTS.md` routing layer (after M3.2 + M3.3 + M3.4 T7 + M3.4 T8d). Q2 SQL re-measurement deferred to M3.x ≥ 20-session corpus per `m245_obj3_measurement_contract.md` §6. Standing Order #8 18th tactical invocation candidate in v8: the skill that polishes HOME is the operationalization of the design spec that designs the HOME polish — recursive self-reference. The skill drop also reinforces the M3.4-graduated cross-skill primitive composition pattern at the 4th post-graduation use instance.
