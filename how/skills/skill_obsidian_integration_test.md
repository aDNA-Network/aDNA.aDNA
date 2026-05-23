---
type: skill
skill_type: agent
created: 2026-05-23
updated: 2026-05-23
status: active
category: obsidian_operations
trigger: "Run vault-agnostic Obsidian deployment integration test (O1-O7) against a target vault. Validates post-fork or post-setup integrity at seven operator-side dimensions. Vault-agnostic checklist + per-vault profile customization slots. Delegates binary-presence (O4) to skill_obsidian_canonicalize.md --verify (cross-skill primitive composition; first explicit instance in M3.x cohort)."
last_edited_by: agent_stanley
graduated_from: aDNA.aDNA@m33_obj5
graduated_at: 2026-05-23
graduated_via: campaign_adna_serious_tool_readiness M3.3 S2
tags: [skill, obsidian, integration_test, vault_agnostic, cross_skill_delegation, t6, m3_3, design_at_p3_propagation_at_p6, t8_forward_reference_stub, per_vault_profile, standing_order_8_15th_tactical_invocation_candidate, m245_routing_layer_2nd_behavioral_test, rosetta]

requirements:
  tools: [bash 3.2+ portable, python3 (json module), grep, sed, curl]
  context:
    - <vault>/.obsidian/                                          # target vault's Obsidian config
    - <vault>/.obsidian/integration-test-profile.json             # opt-in per-vault profile (optional)
    - <vault>/HOME.md OR <vault>/README.md OR <vault>/CLAUDE.md   # default home page (vault-discretionary)
    - <vault>/how/skills/skill_obsidian_canonicalize.md           # cross-skill dependency (HARD; T6 O4 delegates)
    - ~/Library/Application Support/obsidian/obsidian.json        # macOS vault registry (Linux: ~/.config/obsidian/; Windows: %APPDATA%\obsidian\)
  permissions:
    - read vault .obsidian/* recursively
    - read vault home page (HOME.md OR README.md OR CLAUDE.md)
    - invoke ./how/skills/skill_obsidian_canonicalize.md --verify as subprocess (O4 delegation)
    - read Obsidian vault registry (read-only)
    - HEAD request external URLs (O6; 5s timeout per URL; configurable per profile)
    - read-only (zero filesystem mutations under target vault)
---

# Skill: Obsidian Integration Test

## Overview

Runs a vault-agnostic post-deployment integration test against an aDNA vault's Obsidian surface. Verifies seven operator-side dimensions (O1-O7) generalized from M-LWX-03 Obj 2's node.aDNA-specific checklist into a reusable framework. Per-vault customization via `<vault>/.obsidian/integration-test-profile.json` (opt-in; absent = use `default` profile).

**Architecture**: this skill is a CHECK ORCHESTRATOR; M3.2's `skill_obsidian_canonicalize.md --verify` provides the binary-presence primitive (O4). The skill does NOT re-implement plugin-binary checking — it delegates. This is the **first explicit cross-skill primitive composition** in the M3.x cohort; the precedent applies to M3.4+ skill compositions.

**Location**: this skill lives at `aDNA.aDNA/how/skills/skill_obsidian_integration_test.md` (NOT upstream `.adna/how/skills/`) per the same disposition as `skill_obsidian_canonicalize.md` (M3.2 deliverable). v8 P6 may promote it to `.adna/` as part of the ecosystem-propagation cycle; until then, operators wanting to use it in other vaults fork the skill into the target vault first, OR invoke from this canonical location with `--vault <target>`.

**Self-reference (Standing Order #8 — 15th tactical invocation candidate in v8, jointly with T5 design spec)**: this skill drop is the **2nd behavioral test** of the M2.4.5-hardened `aDNA.aDNA/how/skills/AGENTS.md` routing layer for new-skill discoverability. The first was M3.2's `skill_obsidian_canonicalize.md` (2026-05-21). Formal Q2 SQL re-measurement at M3.x ≥ 20-session corpus per `m245_obj3_measurement_contract.md` §6.

## Trigger

Invoked when:

- Operator just forked a new vault and wants post-fork validation (after running `./setup.sh` per T5's first-open runbook): `./how/skills/skill_obsidian_integration_test --vault . --profile default`
- Cross-vault audit needs operator-side surface state for a vault: invoke from any vault with `--vault <target>`
- Periodic deployment-health check across all aDNA vaults wants integration-test results: loop over vaults
- Validation-as-dispatched-campaign pattern (`campaign_validation_node_adna_lwx_outputs` or successor) consumes T6 skill as the standard integration-test surface (replaces ad-hoc per-mission validation prose with a single reusable invocation)
- M3.4+ T7 verification-handoff topology codifies T6 as the agent-side baseline before T7 + T8 wire verification dispatch + agent-driven inspection
- Post-`setup.sh --force` smoke verification (after operator runs setup; before declaring "the vault is ready")

## Parameters

| Parameter | Source | Required | Default |
|---|---|---|---|
| `--vault <path>` | CLI | No | Vault containing this skill file |
| `--profile <profile>` | CLI | No | `default` (built-in; no per-vault customization) |
| `--verbose` | CLI flag | No | false (verbose prints delegation details + per-check sub-steps) |
| `--report-only` | CLI flag | No | false (alias — skill is always read-only; flag included for symmetry with `skill_obsidian_canonicalize.md`) |

## Requirements

### Tools

- `bash 3.2+` (portable to macOS default shell)
- `python3` with built-in `json` module (no external deps; used for JSON parsing of `.obsidian/*.json` + profile)
- `grep` (BSD or GNU; used for markdown link extraction)
- `sed` (BSD or GNU; used for profile parsing)
- `curl` (used for O6 HEAD requests; absent → O6 reports SKIP_WITH_HINT)
- `<vault>/how/skills/skill_obsidian_canonicalize.md` (T6 O4 delegates; absent → O4 reports SKIP_WITH_HINT)

### Context files

- Target vault's `.obsidian/` directory + valid `app.json`
- Target vault's home page — one of (in priority order): `HOME.md`, `README.md`, `CLAUDE.md` — pinned by `default_home` profile field if specified
- Obsidian vault registry at OS-specific path (macOS: `~/Library/Application Support/obsidian/obsidian.json`; Linux: `~/.config/obsidian/obsidian.json`; Windows: `%APPDATA%\obsidian\obsidian.json`)
- Optional `<vault>/.obsidian/integration-test-profile.json` per-vault profile

### Permissions

- Read all files under `<vault>/.obsidian/` recursively (read-only)
- Read `<vault>/HOME.md` (or fallback home page)
- Read Obsidian vault registry (read-only)
- Spawn `./how/skills/skill_obsidian_canonicalize.md --verify` as subprocess (cross-skill delegation)
- HEAD request external URLs via curl (per O6 + per profile `external_link_policy`)
- ZERO filesystem mutations under any vault

## Safety preconditions

Verified before any check runs:

1. **Target vault is aDNA-recognized.** Required markers: `<vault>/.obsidian/` exists AND (`<vault>/CLAUDE.md` exists OR `<vault>/MANIFEST.md` exists). Failure: exit 2 with "vault path does not look like an aDNA vault."
2. **Profile (if specified) is valid JSON.** If `--profile <profile>` is non-`default` AND profile file exists, parse + validate shape (`profile_name` required; `skip_checks`/`add_checks`/`default_home`/`home_page_table_assertions`/`external_link_policy`/`theme_policy` all optional). Failure: exit 2 with "profile <path> is not valid JSON or shape is invalid."
3. **Cross-skill dependency check** (O4 specific). If `<vault>/how/skills/skill_obsidian_canonicalize.md` is absent AND O4 is not skipped by profile, report O4 as `SKIP_WITH_HINT` (does NOT fail the run; documents the gap).

## Implementation

### Argument parser + preflight

```bash
MODE="run"
VAULT_DIR="$(cd "$(dirname "$0")/../.." && pwd)"  # default: vault containing this skill
PROFILE="default"
VERBOSE=0
REPORT_ONLY=0

for arg in "$@"; do
    case "$arg" in
        --vault)        shift; VAULT_DIR="$1" ;;
        --profile)      shift; PROFILE="$1" ;;
        --verbose)      VERBOSE=1 ;;
        --report-only)  REPORT_ONLY=1 ;;
        --help|-h)      show_help; exit 0 ;;
        *)              echo "Unknown flag: $arg"; exit 1 ;;
    esac
done

# Preflight
[ -d "$VAULT_DIR/.obsidian" ] || { echo "FAIL: $VAULT_DIR is not an Obsidian vault"; exit 2; }
[ -f "$VAULT_DIR/CLAUDE.md" ] || [ -f "$VAULT_DIR/MANIFEST.md" ] || \
    { echo "FAIL: $VAULT_DIR does not look like an aDNA vault (no CLAUDE.md or MANIFEST.md at root)"; exit 2; }

# Load profile
if [ "$PROFILE" = "default" ]; then
    PROFILE_JSON='{"profile_name":"default","skip_checks":[],"add_checks":[],"external_link_policy":"warn_only"}'
else
    PROFILE_FILE="$VAULT_DIR/.obsidian/integration-test-profile.json"
    [ -f "$PROFILE_FILE" ] || { echo "FAIL: profile file not found at $PROFILE_FILE"; exit 2; }
    PROFILE_JSON="$(cat "$PROFILE_FILE")"
    python3 -c "import json,sys; json.loads('''$PROFILE_JSON''')" 2>/dev/null || \
        { echo "FAIL: profile JSON invalid at $PROFILE_FILE"; exit 2; }
fi
```

### Check matrix execution

Each check (O1-O7) runs unless `skip_checks` lists it; profile `add_checks` entries run as additional checks (O8+) after the built-in seven.

### O1 — Vault opens in Obsidian cleanly

**What it tests**: `<vault>/.obsidian/` exists + readable; `<vault>/.obsidian/app.json` is valid JSON; vault path is registered in Obsidian's vault registry.

**Source from M-LWX-03**: "Obsidian opens `node.aDNA/` cleanly; HOME.md visible as default open file; no error toasts."

**Vault-agnostic shape**:

```bash
# Check 1a: .obsidian directory readable
[ -r "$VAULT_DIR/.obsidian" ] || { report "O1" "FAIL" "$VAULT_DIR/.obsidian not readable"; return; }

# Check 1b: app.json is valid JSON
APP_JSON="$VAULT_DIR/.obsidian/app.json"
[ -f "$APP_JSON" ] || { report "O1" "FAIL" "app.json missing — vault not initialized in Obsidian"; return; }
python3 -c "import json; json.loads(open('$APP_JSON').read())" 2>/dev/null || \
    { report "O1" "FAIL" "app.json is not valid JSON"; return; }

# Check 1c: vault is registered in Obsidian registry
REGISTRY=""
case "$(uname -s)" in
    Darwin*)  REGISTRY="$HOME/Library/Application Support/obsidian/obsidian.json" ;;
    Linux*)   REGISTRY="$HOME/.config/obsidian/obsidian.json" ;;
    *)        REGISTRY="$APPDATA/obsidian/obsidian.json" ;;
esac
if [ -f "$REGISTRY" ]; then
    if grep -q "\"$VAULT_DIR\"" "$REGISTRY" 2>/dev/null; then
        report "O1" "PASS" "Vault registered in Obsidian + .obsidian/ valid"
    else
        report "O1" "FAIL" "Vault not in Obsidian registry. FIX: open Obsidian → File → Open Vault → select $VAULT_DIR once to register."
    fi
else
    report "O1" "SKIP_WITH_HINT" "Obsidian registry not found at $REGISTRY; Obsidian may never have run on this machine."
fi
```

**Pass criterion**: 1a + 1b + 1c all green. FAIL hint on 1c is operator-actionable: "Open Obsidian → File → Open Vault → select this folder once to register" (matches T5 design spec first-open runbook).

### O2 — Default home page renders

**What it tests**: vault has a designated home page; the file exists; valid markdown (frontmatter parses if present).

**Source from M-LWX-03**: "HOME.md visible in preview mode as the default open file."

**Vault-agnostic shape**:

```bash
# Determine home page from profile or fall-through priority
HOME_PAGE=$(echo "$PROFILE_JSON" | python3 -c "import json,sys; print(json.load(sys.stdin).get('default_home', ''))")
if [ -z "$HOME_PAGE" ]; then
    # Fall-through priority: HOME.md → README.md → CLAUDE.md
    for candidate in "HOME.md" "README.md" "CLAUDE.md"; do
        if [ -f "$VAULT_DIR/$candidate" ]; then
            HOME_PAGE="$candidate"
            break
        fi
    done
fi

if [ -z "$HOME_PAGE" ]; then
    report "O2" "FAIL" "No home page found (looked for HOME.md, README.md, CLAUDE.md). FIX: create one OR set 'default_home' in profile."
elif [ ! -f "$VAULT_DIR/$HOME_PAGE" ]; then
    report "O2" "FAIL" "Profile pins default_home=$HOME_PAGE but file not found at $VAULT_DIR/$HOME_PAGE"
else
    # Validate frontmatter (if present)
    if head -n 1 "$VAULT_DIR/$HOME_PAGE" | grep -q "^---$"; then
        # Frontmatter present; validate it parses
        python3 -c "
import sys, yaml
with open('$VAULT_DIR/$HOME_PAGE') as f:
    content = f.read()
    if content.startswith('---'):
        try:
            fm = content.split('---', 2)[1]
            yaml.safe_load(fm)
        except Exception as e:
            sys.exit(1)
" 2>/dev/null || { report "O2" "FAIL" "Home page $HOME_PAGE has invalid YAML frontmatter"; return; }
    fi
    report "O2" "PASS" "Home page present ($HOME_PAGE; $(wc -l < "$VAULT_DIR/$HOME_PAGE") lines)"
fi
```

**Pass criterion**: home page exists + valid markdown (frontmatter parses if present).

### O3 — Structured content tables enumerate correctly

**What it tests**: if profile names `home_page_table_assertions`, the skill parses the home page + the YAML source + verifies row count matches. Default profile has NO assertions (PASS-with-warning).

**Source from M-LWX-03**: "21 .aDNA vaults + 11 named projects + 3 drift entries — all present" (verified against `inventory_vaults.yaml`).

**Vault-agnostic shape**:

```bash
ASSERTIONS=$(echo "$PROFILE_JSON" | python3 -c "import json,sys; print(json.dumps(json.load(sys.stdin).get('home_page_table_assertions', [])))")

if [ "$ASSERTIONS" = "[]" ]; then
    report "O3" "PASS" "Structured content tables (0 assertions in $PROFILE profile; add 'home_page_table_assertions' to validate)"
else
    # Iterate assertions: for each, parse home page section + YAML source + compare row counts
    FAILS=0
    TOTAL=0
    python3 <<EOF
import json, yaml
profile_assertions = json.loads('''$ASSERTIONS''')
home_path = "$VAULT_DIR/$HOME_PAGE"
home_content = open(home_path).read()
fails = 0
for a in profile_assertions:
    section = a['section']
    row_source = a['row_count_source']  # e.g., 'what/inventory/inventory_vaults.yaml#/vaults'
    file_path, yaml_path = row_source.split('#')
    yaml_data = yaml.safe_load(open(f"$VAULT_DIR/{file_path}"))
    # Navigate yaml_path (simple slash-delimited)
    target = yaml_data
    for segment in yaml_path.strip('/').split('/'):
        target = target.get(segment, {}) if isinstance(target, dict) else target
    expected_count = len(target) if hasattr(target, '__len__') else 0
    # Count markdown rows in section
    section_start = home_content.find(f"## {section}")
    if section_start == -1: fails += 1; continue
    next_section = home_content.find("\n## ", section_start + 1)
    section_text = home_content[section_start:next_section if next_section > 0 else len(home_content)]
    md_rows = section_text.count("\n| ") - 1  # subtract header divider
    if md_rows != expected_count: fails += 1
print(fails)
EOF
    [ "$FAILS" -eq 0 ] && report "O3" "PASS" "Structured content tables ($TOTAL assertions verified)" \
                       || report "O3" "FAIL" "$FAILS of $TOTAL table assertions failed; row count mismatch"
fi
```

**Pass criterion**: all profile assertions verified (default profile has no assertions → unconditional PASS-with-warning).

### O4 — Plugin binary-presence (CROSS-SKILL DELEGATION)

**What it tests**: enabled plugins in `community-plugins.json` have populated binaries at `.obsidian/plugins/<id>/`.

**Source from M-LWX-03**: "16 enabled in JSON, 0 installed → setup.sh --force fix" (the workspace-clobber chain triggered by binary absence).

**Cross-skill delegation contract** (load-bearing architectural primitive — see T6 design spec §3 Option 1 vs Option 2 rejection):

```bash
CANONICALIZE_SKILL="$VAULT_DIR/how/skills/skill_obsidian_canonicalize.md"

if [ -f "$CANONICALIZE_SKILL" ]; then
    # DELEGATE — invoke M3.2 skill's --verify mode; consume exit code + summary
    DELEGATE_OUTPUT=$(bash "$CANONICALIZE_SKILL" --verify --vault "$VAULT_DIR" 2>&1)
    DELEGATE_EXIT=$?

    # Extract summary line from delegate output (Enabled / Installed / Missing per T3 design spec §5 Patch B)
    SUMMARY=$(echo "$DELEGATE_OUTPUT" | grep -E "Enabled plugins:|Installed:|Missing binaries:" | tr '\n' ' ' | sed 's/  */ /g')

    case "$DELEGATE_EXIT" in
        0) report "O4" "PASS"           "Plugin binary-presence (DELEGATE → canonicalize --verify exit 0); $SUMMARY" ;;
        1) report "O4" "FAIL"           "Plugin binary-presence MISMATCH (DELEGATE → canonicalize --verify exit 1); $SUMMARY; FIX: run ./setup.sh from $VAULT_DIR" ;;
        *) report "O4" "PREFLIGHT_FAIL" "DELEGATE preflight failed (exit $DELEGATE_EXIT); see canonicalize --verify output above" ;;
    esac

    [ "$VERBOSE" -eq 1 ] && echo "  [verbose] DELEGATE output:" && echo "$DELEGATE_OUTPUT" | sed 's/^/    /'
else
    report "O4" "SKIP_WITH_HINT" "skill_obsidian_canonicalize.md not present at $VAULT_DIR/how/skills/; install M3.2 skill OR invoke T6 from a vault that has it"
fi
```

**Pass criterion**: delegate exits 0. Non-zero exits report as FAIL (mismatch) or PREFLIGHT_FAIL (delegate could not run). SKIP_WITH_HINT if delegate skill absent (does NOT fail the run; documents the gap).

### O5 — Cross-vault markdown links resolve

**What it tests**: relative markdown links in the home page (e.g., `[CanvasForge.aDNA](../CanvasForge.aDNA/)`) resolve to existing directories.

**Source from M-LWX-03**: "Click `[CanvasForge.aDNA](../CanvasForge.aDNA/)` → opens file manager at `~/lattice/CanvasForge.aDNA/` → right-click 'Open with Obsidian'."

**Vault-agnostic shape**:

```bash
# Grep home page for relative markdown links of shape ](../<name>) or ](../<name>/)
LINKS=$(grep -oE '\]\(\.\./[^)]+\)' "$VAULT_DIR/$HOME_PAGE" | sed 's/](//;s/)$//')

TOTAL=$(echo "$LINKS" | grep -c .)
FAILS=0
WARNS=0
for link in $LINKS; do
    # Resolve relative path
    TARGET="$(cd "$VAULT_DIR" && cd "$(dirname "$link")" 2>/dev/null && pwd)/$(basename "$link")"
    if [ ! -e "$TARGET" ]; then
        FAILS=$((FAILS + 1))
        [ "$VERBOSE" -eq 1 ] && echo "    [O5 fail] $link → $TARGET (not found)"
    fi
done

if [ "$TOTAL" -eq 0 ]; then
    report "O5" "PASS" "Cross-vault markdown links (0 found in $HOME_PAGE)"
elif [ "$FAILS" -eq 0 ]; then
    report "O5" "PASS" "Cross-vault markdown links ($TOTAL checked; all resolve)"
else
    report "O5" "FAIL" "$FAILS of $TOTAL cross-vault links do not resolve; see --verbose for list"
fi
```

**Pass criterion**: all relative links resolve to existing paths (read-only check; does not launch Obsidian per link).

### O6 — External links accessible

**What it tests**: external `https://...` or `http://...` URLs in the home page return non-5xx HTTP status.

**Source from M-LWX-03**: "Marketplace link clickable → browser opens to `https://lattice-protocol.com/marketplace`."

**Per-profile customization** — `external_link_policy`:

- `skip` — skip O6 entirely (PASS unconditionally with note)
- `warn_only` — 4xx reports WARN, not FAIL (default — 404 placeholder on not-yet-ready marketplace is acceptable)
- `fail_on_4xx` — 4xx reports FAIL

**Vault-agnostic shape**:

```bash
POLICY=$(echo "$PROFILE_JSON" | python3 -c "import json,sys; print(json.load(sys.stdin).get('external_link_policy', 'warn_only'))")

if [ "$POLICY" = "skip" ]; then
    report "O6" "PASS" "External links (policy=skip; not checked)"
elif ! command -v curl >/dev/null 2>&1; then
    report "O6" "SKIP_WITH_HINT" "curl not available; install curl to enable O6 external-link checks"
else
    # Grep external URLs
    URLS=$(grep -oE 'https?://[^ )"<]+' "$VAULT_DIR/$HOME_PAGE" | sort -u)
    TOTAL=$(echo "$URLS" | grep -c .)
    FAILS=0
    WARNS=0
    for url in $URLS; do
        STATUS=$(curl -s -o /dev/null -w "%{http_code}" --max-time 5 -I "$url" 2>/dev/null)
        case "$STATUS" in
            2*|3*) : ;; # PASS
            4*)    if [ "$POLICY" = "fail_on_4xx" ]; then FAILS=$((FAILS + 1)); else WARNS=$((WARNS + 1)); fi ;;
            *)     FAILS=$((FAILS + 1)) ;;  # 5xx or timeout
        esac
        [ "$VERBOSE" -eq 1 ] && echo "    [O6] $STATUS $url"
    done

    if [ "$TOTAL" -eq 0 ]; then
        report "O6" "PASS" "External links (0 found)"
    elif [ "$FAILS" -eq 0 ] && [ "$WARNS" -eq 0 ]; then
        report "O6" "PASS" "External links ($TOTAL checked; all reachable)"
    elif [ "$FAILS" -eq 0 ]; then
        report "O6" "WARN" "External links ($TOTAL checked; $WARNS 4xx — non-fatal per warn_only policy)"
    else
        report "O6" "FAIL" "External links ($TOTAL checked; $FAILS failed / $WARNS warned)"
    fi
fi
```

**Pass criterion**: per-policy. Default `warn_only` accepts 4xx as WARN (non-fatal).

### O7 — Theme + accent applied

**What it tests**: `<vault>/.obsidian/appearance.json` sets the expected theme + accent.

**Source from M-LWX-03**: "Tokyo Night theme + Rebecca Purple accent visible on Obsidian launch" (per OBSIDIAN_CLAUDE.md baseline).

**Per-profile customization** — `theme_policy`:

```json
{"theme_policy": {"theme": "Tokyo Night", "accent": "#663399"}}
```

If profile omits `theme_policy`, defaults to `Tokyo Night` + `#663399` (Rebecca Purple) per `node.aDNA/what/context/token_baselines.md` v0.1.3 + OBSIDIAN_CLAUDE.md baseline.

**Vault-agnostic shape**:

```bash
THEME_EXPECTED=$(echo "$PROFILE_JSON" | python3 -c "import json,sys; print(json.load(sys.stdin).get('theme_policy', {}).get('theme', 'Tokyo Night'))")
ACCENT_EXPECTED=$(echo "$PROFILE_JSON" | python3 -c "import json,sys; print(json.load(sys.stdin).get('theme_policy', {}).get('accent', '#663399'))")

APPEARANCE="$VAULT_DIR/.obsidian/appearance.json"
if [ ! -f "$APPEARANCE" ]; then
    report "O7" "FAIL" "appearance.json missing — theme not configured"
else
    THEME_ACTUAL=$(python3 -c "import json; print(json.load(open('$APPEARANCE')).get('cssTheme', ''))")
    ACCENT_ACTUAL=$(python3 -c "import json; print(json.load(open('$APPEARANCE')).get('accentColor', ''))")

    if [ "$THEME_ACTUAL" = "$THEME_EXPECTED" ] && [ "$ACCENT_ACTUAL" = "$ACCENT_EXPECTED" ]; then
        report "O7" "PASS" "Theme + accent ($THEME_ACTUAL + $ACCENT_ACTUAL)"
    elif [ "$THEME_ACTUAL" = "$THEME_EXPECTED" ]; then
        report "O7" "WARN" "Theme matches ($THEME_ACTUAL); accent diverges ($ACCENT_ACTUAL vs expected $ACCENT_EXPECTED)"
    elif [ "$ACCENT_ACTUAL" = "$ACCENT_EXPECTED" ]; then
        report "O7" "WARN" "Accent matches ($ACCENT_ACTUAL); theme diverges ($THEME_ACTUAL vs expected $THEME_EXPECTED)"
    else
        report "O7" "FAIL" "Theme + accent diverge ($THEME_ACTUAL + $ACCENT_ACTUAL vs expected $THEME_EXPECTED + $ACCENT_EXPECTED)"
    fi
fi
```

**Pass criterion**: theme + accent both match profile expectations.

### Profile `add_checks` execution

After O1-O7, iterate any profile-supplied `add_checks` entries (O8+). Each `add_checks` entry has fields:

- `id` — unique identifier (e.g., `O8`, `O9`)
- `description` — human-readable description
- `type` — one of `manual_visual_check` (operator-runs; T6 reports as PASS-with-instruction), `command_exit_code` (runs a command; PASS on exit 0), `file_grep` (greps a file for a pattern; PASS on match)
- `operator_instruction` (for `manual_visual_check`) — text shown to operator
- `command` (for `command_exit_code`) — shell command to run
- `file_path` + `pattern` (for `file_grep`) — file + pattern to grep

T6 runs each `add_checks` entry per its type; reports PASS/FAIL/MANUAL with the entry's `description` + result.

## Per-profile customization

### Profile schema

```json
{
  "profile_name": "<descriptive_name>",
  "skip_checks": ["O3", "O6"],
  "add_checks": [
    {
      "id": "O8",
      "description": "Bases gallery renders without error",
      "type": "manual_visual_check",
      "operator_instruction": "Open HOME.md in preview mode; verify the `BASES` block enumerates expected entries."
    }
  ],
  "default_home": "HOME.md",
  "home_page_table_assertions": [
    {"section": "Vaults", "row_count_source": "what/inventory/inventory_vaults.yaml#/vaults"}
  ],
  "external_link_policy": "warn_only",
  "theme_policy": {"theme": "Tokyo Night", "accent": "#663399"}
}
```

### Built-in `default` profile

Equivalent to:

```json
{
  "profile_name": "default",
  "skip_checks": [],
  "add_checks": [],
  "default_home": null,
  "home_page_table_assertions": [],
  "external_link_policy": "warn_only",
  "theme_policy": {"theme": "Tokyo Night", "accent": "#663399"}
}
```

### Example: node.aDNA profile

A per-vault profile for `node.aDNA/` that asserts the 21-vault home page state from M-LWX-03:

```json
{
  "profile_name": "node-canonical",
  "skip_checks": [],
  "add_checks": [],
  "default_home": "HOME.md",
  "home_page_table_assertions": [
    {"section": "Vaults", "row_count_source": "what/inventory/inventory_vaults.yaml#/vaults"},
    {"section": "Named Projects", "row_count_source": "what/inventory/inventory_vaults.yaml#/named_projects"},
    {"section": "Drift", "row_count_source": "what/inventory/inventory_vaults.yaml#/drift"}
  ],
  "external_link_policy": "warn_only",
  "theme_policy": {"theme": "Tokyo Night", "accent": "#663399"}
}
```

Invocation: `./how/skills/skill_obsidian_integration_test --vault ~/lattice/node.aDNA/ --profile node-canonical`.

## Output

### Default profile — success

```
=== Obsidian integration test ===
Target vault: /Users/stanley/lattice/node.aDNA/
Profile: default (built-in)
Cross-skill delegations: skill_obsidian_canonicalize.md --verify (O4)

Per-check results:
  O1  Vault registered in Obsidian + .obsidian/ valid                    PASS
  O2  Home page present (HOME.md; 162 lines)                              PASS
  O3  Structured content tables (0 assertions in default profile)         PASS
  O4  Plugin binary-presence (DELEGATE → canonicalize --verify exit 0)    PASS  Enabled plugins: 15  Installed: 15  Missing binaries: 0
  O5  Cross-vault markdown links (32 checked; all resolve)                PASS
  O6  External links (3 checked; all reachable)                           PASS
  O7  Theme + accent (Tokyo Night + #663399)                              PASS

Integration test: 7/7 PASS
Exit 0.
```

### With profile + warning

```
=== Obsidian integration test ===
Target vault: /Users/stanley/lattice/aDNA.aDNA/
Profile: aDNA-canonical (loaded from .obsidian/integration-test-profile.json)
Cross-skill delegations: skill_obsidian_canonicalize.md --verify (O4)

Per-check results:
  O1  Vault registered in Obsidian + .obsidian/ valid                    PASS
  O2  Home page present (CLAUDE.md; 287 lines)                            PASS
  O3  Structured content tables (1 assertion verified)                    PASS
  O4  Plugin binary-presence (DELEGATE → canonicalize --verify exit 0)    PASS  Enabled plugins: 15  Installed: 15  Missing binaries: 0
  O5  Cross-vault markdown links (8 checked; all resolve)                 PASS
  O6  External links (5 checked; 1 4xx — non-fatal per warn_only policy)  WARN
  O7  Theme + accent (Tokyo Night + #663399)                              PASS

Integration test: 7/7 PASS (1 WARN — non-fatal per warn_only policy)
Exit 0.
```

### Failure

```
=== Obsidian integration test ===
Target vault: /Users/stanley/lattice/fresh-fork.aDNA/
Profile: default (built-in)
Cross-skill delegations: skill_obsidian_canonicalize.md --verify (O4)

Per-check results:
  O1  Vault not in Obsidian registry                                       FAIL  FIX: open Obsidian → File → Open Vault → select /Users/stanley/lattice/fresh-fork.aDNA/ once to register.
  O2  Home page present (CLAUDE.md; 87 lines)                              PASS
  O3  Structured content tables (0 assertions in default profile)         PASS
  O4  Plugin binary-presence MISMATCH (DELEGATE → canonicalize --verify exit 1)  FAIL  Enabled plugins: 15  Installed: 0  Missing binaries: 15  FIX: run ./setup.sh from /Users/stanley/lattice/fresh-fork.aDNA/
  O5  Cross-vault markdown links (0 found)                                 PASS
  O6  External links (0 found)                                             PASS
  O7  Theme + accent (Tokyo Night + #663399)                               PASS

Integration test: 5/7 PASS — 2 FAIL: O1 + O4
Exit 1.
```

## Error handling

| Exit Code | Cause | Resolution |
|---|---|---|
| 0 | All checks PASS (WARN is non-fatal per default `warn_only` policy) | No action |
| 1 | At least one FAIL (or WARN if profile sets `external_link_policy: "fail_on_4xx"`) | Inspect per-check FAIL messages; per-check FIX hints are operator-actionable |
| 2 | Preflight failure (target vault not found; `--vault` path invalid; profile JSON invalid; cross-skill dependency missing if O4 not SKIPped) | Inspect preflight error; fix vault path / profile syntax / install M3.2 skill |

## Forward integration with T8 (M3.4) — DEFERRED STUB

T8 (per the absorbed `campaign_obsidian_deployment_stabilization` Track 8 + the M3.3 mission's forward dependency on M3.4) brings two agent-driven inspection capabilities to the Obsidian surface: **Local REST API** (via `obsidian-local-rest-api`, coddingtonbear/obsidian-local-rest-api, MIT) and **MCP** (community Obsidian MCP servers, e.g., `MarkusPfundstein/mcp-obsidian`). When T8 wires both, several T6 checks become eligible for agent-driven invocation rather than operator-side visual confirmation:

- **O1 (vault opens cleanly)** — agent can query the Local REST API to confirm the vault is registered + responsive; eliminates the operator-must-launch-Obsidian step (today, O1 only confirms the registry entry; with Local REST API the check confirms runtime availability)
- **O2 + O3 (home page renders + tables enumerate)** — agent can fetch HOME.md content via Local REST API + verify rendered markdown structure; today O2 only confirms file presence + frontmatter validity, O3 confirms structural assertions against YAML — with API the check confirms what Obsidian actually renders
- **O5 (cross-vault links)** — agent can resolve links via API; spot-check by API call rather than manual operator click; today O5 confirms relative-path existence — with API it confirms the link is functional from Obsidian's perspective
- **O7 (theme + accent)** — agent can query `appearance.json` via API; same as today's direct file read but with runtime confirmation that Obsidian is loading what's on disk

**What T8 does NOT change for T6**: O4 (binary-presence DELEGATE → canonicalize `--verify`) stays delegation-based — T3 primitive + M3.2 skill's `--verify` mode are the right architecture; no API benefit. O6 (external links HEAD-check) stays curl-based — network call doesn't benefit from Obsidian API.

**Profile flag (forecast)**: T6 may gain `mode: "operator_side" | "agent_driven" | "hybrid"` profile field at M3.4 when T8 wiring lands:
- `operator_side` (today's default) = current behavior; agent reads files, operator launches Obsidian for visual confirmation
- `agent_driven` = agent fetches via Local REST API + MCP; runtime confirmation via API; no operator visual step
- `hybrid` = agent runs what it can headlessly, operator runs only the visual checks that benefit from human eyes

The profile field is forecast-scoped; M3.3 ships only `operator_side` semantics. M3.4 codifies `agent_driven` + `hybrid` once Local REST API + MCP wire-up lands.

## Cross-skill dependencies

| Dependency | Type | Skill | Mode | Used by | Behavior if absent |
|---|---|---|---|---|---|
| **HARD** | cross-skill primitive composition | `<vault>/how/skills/skill_obsidian_canonicalize.md` | `--verify` (T3 absorption per M3.2 T3 design spec §5 Patch B) | O4 (Plugin binary-presence) | O4 reports `SKIP_WITH_HINT` (does NOT fail the run; documents the gap) |

## Examples

### Example 1: Post-fork validation after running setup.sh

```bash
# Operator just forked a new vault + ran ./setup.sh per T5's first-open runbook
cd ~/lattice/my-new-vault.aDNA/

# After setup completes, verify integration health
./how/skills/skill_obsidian_integration_test --vault . --profile default

# Expect: 7/7 PASS (or 6/7 with O1 FAIL if Obsidian not yet opened — fix by File → Open Vault once)
```

### Example 2: Cross-vault audit (operator iterates over all aDNA vaults)

```bash
cd ~/lattice/
for vault in *.aDNA/; do
    echo "=== $vault ==="
    ~/lattice/aDNA.aDNA/how/skills/skill_obsidian_integration_test --vault "$PWD/$vault" --profile default
done
```

### Example 3: Verbose mode + cross-skill delegation inspection

```bash
./how/skills/skill_obsidian_integration_test --vault . --profile default --verbose

# Expect: per-check details + O4 DELEGATE output captured + per-link results for O5+O6
```

### Example 4: Per-vault profile that pins the canonical home page + table assertions

```bash
# Author profile
cat > .obsidian/integration-test-profile.json <<'EOF'
{
  "profile_name": "node-canonical",
  "skip_checks": [],
  "add_checks": [],
  "default_home": "HOME.md",
  "home_page_table_assertions": [
    {"section": "Vaults", "row_count_source": "what/inventory/inventory_vaults.yaml#/vaults"}
  ],
  "external_link_policy": "warn_only",
  "theme_policy": {"theme": "Tokyo Night", "accent": "#663399"}
}
EOF

# Invoke with profile
./how/skills/skill_obsidian_integration_test --vault . --profile node-canonical
```

## Related

### Companion skills (≥ 2 prior skills cross-linked per Project SO #10)

- [[skill_obsidian_canonicalize.md|skill_obsidian_canonicalize.md]] — M3.2 deliverable; T6 O4 DELEGATES to its `--verify` mode (cross-skill primitive composition; first explicit instance in M3.x cohort)
- [[../../../.adna/how/skills/skill_node_health_check.md|skill_node_health_check.md]] — closest pre-existing primitive (health-check pattern); T6 is its Obsidian-surface sibling — `skill_node_health_check.md` validates `node.aDNA/` governance; T6 validates Obsidian deployment integrity for any vault
- [[../../../.adna/how/skills/skill_project_fork.md|skill_project_fork.md]] — fork procedure consumes T5+T6 (T5 Patch B warns about first-open hazards; T6 is the post-fork validation surface)
- [[../../../.adna/how/skills/skill_onboarding.md|skill_onboarding.md]] — first-run onboarding consumes T5 Patch A; T6 is the verification surface operators reach for after onboarding completes

### Design specs (≥ 2 design specs cross-linked per Project SO #10)

- [[../campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m33_obj4_t6_design_spec.md|T6 design spec]] — this skill's authoring spec; ratifies design + cross-skill delegation contract
- [[../campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m33_obj3_t5_design_spec.md|T5 design spec]] — sibling at same mission (T5 prevents first-open hazards; T6 verifies post-first-open integrity; paired narrative)
- [[../campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m32_obj3_t3_design_spec.md|M3.2 T3 design spec]] — substrate (`setup.sh --verify` primitive that flows through M3.2 skill into T6 O4)
- [[../campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m32_obj4_t4_design_spec.md|M3.2 T4 design spec]] — sibling (T4 ships canonical workspace.default.json + NN data.json triad-color hex; T6 O7 verifies the resulting theme+accent)

### Backlog findings + mission substrate

- [[../campaigns/campaign_lattice_workspace_ux/missions/artifacts/mlwx_03_obj2_outer_vault_test_results.md|M-LWX-03 Obj 2 results]] — F-Obj2-1 + F-Obj2-3 source (the original mission-specific O1-O7 checklist that T6 generalizes to vault-agnostic)
- [[../campaigns/campaign_lattice_workspace_ux/missions/artifacts/aar_mlwx_03_integration_test_and_closeout.md|M-LWX-03 AAR]] — load-bearing rationale (URL-scheme + verification-handoff topology)
- [[../campaigns/campaign_lattice_workspace_ux/missions/artifacts/cross_graph_findings_to_v2_from_lattice_workspace_ux.md|LWX cross-graph findings memo]] — F-Obj2-1 + F-Obj2-3 routing context

### Mission + campaign context

- [[../campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p3_m33_obsidian_stabilization_ux_and_tests.md|M3.3 mission spec]] — parent mission (this skill is Obj 5)
- [[../campaigns/campaign_adna_serious_tool_readiness/campaign_adna_serious_tool_readiness.md|campaign master]] — v8 campaign roadmap; v8 P6 owns upstream propagation
- [[../campaigns/campaign_obsidian_deployment_stabilization/campaign_obsidian_deployment_stabilization.md|absorbed campaign master]] — T6 track substrate (line 60-62)

## Notes

- **This skill is a CHECK ORCHESTRATOR; `skill_obsidian_canonicalize.md --verify` provides the binary-presence primitive.** The skill-vs-skill separation is intentional: each skill has a single architectural concern (canonicalize = config rehydration; integration_test = post-deployment validation). Composition via delegation, not extension. **First explicit cross-skill primitive composition in M3.x cohort**; the precedent applies to M3.4+ skill compositions (T7+T8 may follow the same pattern with skill_verification_handoff.md + skill_obsidian_agent_inspect.md).
- **Per-vault profile** is the bridge between vault-agnostic generalization and per-vault reality. The default profile is the floor; per-vault profiles can skip checks (e.g., a vault intentionally with no HOME.md skips O2) or add custom checks (e.g., a vault with Bases adds an O8 for Bases rendering). The profile schema is extensible.
- **Read-only by design.** No filesystem mutations under any vault. Spawning subprocess (canonicalize `--verify`) is also read-only per M3.2 skill's contract. HEAD requests via curl are network-only.
- **3-way merge edge cases**: T6 does NOT do any merging (canonicalize does). T6 is pure verification; if O4 reports MISMATCH the operator is directed to run `./setup.sh` to fix.
- **Dual-audience note**: a newcomer reading this skill finds the Trigger + Examples sections give them an immediate use-case ("run this after setup.sh"); the Per-check results outputs show what to expect; FIX hints in FAIL messages are operator-actionable. A developer reads the Implementation section for the substantive check logic + cross-skill delegation contract. Both audiences land on the same operator-facing surface.
- **Self-reference (Standing Order #8 — 15th tactical invocation candidate in v8, jointly with T5 design spec)**: this skill drop tests whether the M2.4.5-hardened `aDNA.aDNA/how/skills/AGENTS.md` routing layer succeeds in discoverability for new-skill drops in `aDNA.aDNA/how/skills/`. Combined with M3.2's first behavioral test (`skill_obsidian_canonicalize.md` 2026-05-21), the M3.x cohort produces the first empirical signal on whether new-skill drops surface to fresh-agent invocations via the hardened routing layer. Formal Q2 SQL re-measurement at M3.x ≥ 20-session corpus per `m245_obj3_measurement_contract.md` §6.
- **v8 P6 promotion forecast**: at v8 P6 entry, this skill is a candidate for promotion from `aDNA.aDNA/how/skills/` → `.adna/how/skills/` (so that fresh forks inherit it via `cp -r .adna/`). Operator decision at P6 (T6 design spec §6 propagation contract). The skill's portability (vault-agnostic via `--vault <path>`) supports either disposition.
- **Validation-as-dispatched-campaign pattern reinforcement**: T6 is the natural test surface that `campaign_validation_node_adna_lwx_outputs` (lattice-labs; Berthier + Carly + Herb) and any successor cross-vault validation campaign consumes. The skill replaces ad-hoc per-mission validation prose with a single reusable invocation.
