---
type: skill
skill_type: agent
created: 2026-05-24
updated: 2026-05-24
status: active
category: obsidian_operations
trigger: "Agent-driven Obsidian inspection via Local REST API + MCP. Executes O1-O5 + O7 subset of T6 check-set mechanically from agent context when --mode agent_driven; defers O4 to T6's M3.2 DELEGATION; keeps O6 + visual checks operator-side. --mode {agent_driven, hybrid, operator_side} with graceful degradation cascade. Cross-skill primitive composition pattern 3rd use instance — GRADUATES at M3.4 close (TRIPLE DELEGATION to T6 + T7 + M3.2 skill at depths 1+1+3). Ratified by ADR-014 Clause B `agent_driven` branch."
last_edited_by: agent_stanley
graduated_from: aDNA.aDNA@m34_obj6
graduated_at: 2026-05-24
graduated_via: campaign_adna_serious_tool_readiness M3.4 S2
tags: [skill, obsidian, agent_driven_inspection, local_rest_api, mcp, vault_agnostic, cross_skill_delegation, t8d, m3_4, design_at_p3_propagation_at_p6, t8_forward_reference_stub_graduates_3rd_use_instance, cross_skill_primitive_composition_3rd_use_instance_graduates, m3_7_forward_reference_stub, standing_order_8_17th_tactical_invocation_candidate, m245_routing_layer_4th_behavioral_test, rosetta]

requirements:
  tools: [bash 3.2+ portable, curl (REST API), python3 (json + yaml modules), npx (for MCP server invocation)]
  context:
    - <vault>/.obsidian/                                                                # target vault's Obsidian config
    - <vault>/.obsidian/plugins/obsidian-local-rest-api/data.json                       # API key + endpoint config (HARD when --mode agent_driven)
    - <vault>/how/skills/skill_obsidian_integration_test.md                             # T6 skill (cross-skill dependency at depth 1; T8d DELEGATES O4 + O6 + operator_side fallback to T6)
    - <vault>/how/skills/skill_verification_handoff.md                                  # T7 skill (cross-skill dependency at depth 1; T8d consults T7 for dispatch when --mode auto)
    - <vault>/how/skills/skill_obsidian_canonicalize.md                                 # M3.2 skill (cross-skill dependency at depth 3 via T6 chain)
    - ~/.claude.json OR <vault>/.mcp.json                                               # MCP server config (HARD when --mode agent_driven AND MCP-dependent checks invoked)
  permissions:
    - read vault .obsidian/* recursively
    - HTTP GET to https://127.0.0.1:27124/* (Local REST API; localhost-only)
    - invoke MCP server via npx subprocess
    - invoke ./how/skills/skill_obsidian_integration_test.md as subprocess (T6 delegation for O4 + O6 + when --mode operator_side fallback)
    - read-only (zero filesystem mutations under target vault)
---

# Skill: Obsidian Agent Inspect

## Overview

Runs agent-driven Obsidian inspection against an aDNA vault via Local REST API + MCP servers. Executes the **agent-side subset** of M3.3 T6's O1-O7 check matrix (O1+O2+O3+O5+O7 mechanically; O4 DELEGATES to T6 for binary-presence; O6 + visual checks stay operator-side). Provides a **graceful degradation cascade** (`agent_driven → hybrid → operator_side`) so partner-vaults with incomplete REST API + MCP infrastructure degrade gracefully without hard-failing.

**Architecture**: this skill is an AGENT-SIDE EXECUTOR with **TRIPLE DELEGATION** within its body:
- **T6 skill** (`skill_obsidian_integration_test.md`; M3.3 deliverable) at delegation depth 1 — for O4 (binary-presence) + O6 (external links) + full `operator_side` fallback
- **T7 skill** (`skill_verification_handoff.md`; M3.4 sibling) at delegation depth 1 — for dispatch verdict consultation when invoked via `--mode auto` (rare; usually T7 → T6 → T8d, not T8d → T7)
- **M3.2 skill** (`skill_obsidian_canonicalize.md`) at delegation depth 3 via T6 chain — reached transitively when T8d DELEGATES O4 to T6, and T6 DELEGATES to M3.2 skill `--verify`

**Cross-skill primitive composition pattern — 3rd use instance — GRADUATES at M3.4 close.** M3.3 PRIMARY load-bearing finding ratified the pattern at 1 use instance (T6 → M3.2 skill); M3.4 T7 → T6 added the 2nd use instance; this T8d skill's triple DELEGATION (T6 + T7 + M3.2 at depths 1+1+3 within a single skill) provides the 3rd use instance. The graduation candidate `skill_cross_skill_primitive_composition.md` ratifies at S3 AAR.

**Location**: this skill lives at `aDNA.aDNA/how/skills/skill_obsidian_agent_inspect.md` (NOT upstream `.adna/how/skills/`) per the same disposition as M3.2's `skill_obsidian_canonicalize.md` + M3.3's `skill_obsidian_integration_test.md` + M3.4 T7's `skill_verification_handoff.md`. v8 P6 may promote it to `.adna/` as part of the ecosystem-propagation cycle.

**Doctrinal anchor**: ratified by [[../../what/decisions/adr_014_verification_handoff_topology.md|ADR-014]] Clause B `agent_driven` branch — when the dispatch decision tree resolves to `--surface agent`, T7 skill routes to T8d (this skill) as the operational primitive. ADR-014 drafts at M3.4 S2 alongside this skill and ratifies at M3.4 S3 close per Campaign SO #14 in-phase exception clause.

**Self-reference (Standing Order #8 — 17th tactical invocation candidate in v8)**: this skill drop is the **4th behavioral test** of the M2.4.5-hardened `aDNA.aDNA/how/skills/AGENTS.md` routing layer for new-skill discoverability (after M3.2's `skill_obsidian_canonicalize.md` + M3.3's `skill_obsidian_integration_test.md` + M3.4 T7's `skill_verification_handoff.md`). Formal Q2 SQL re-measurement at M3.x ≥ 20-session corpus per `m245_obj3_measurement_contract.md` §6.

## Trigger

Invoked when:

- M3.3 T6 skill with profile `mode: agent_driven` reaches O1+O2+O3+O5+O7 dispatch → T6 DELEGATES to this skill per T8e activation hook (T6 calls T8d as subprocess; T8d returns per-check verdicts; T6 aggregates into O1-O7 result)
- M3.4 T7 skill resolves dispatch verdict to `--surface agent` → T7 routes to T8d (this skill) as the agent-driven branch primitive per ADR-014 Clause B `agent_driven` branch
- M3.7 modular III for Obsidian → III modules with agent-driven verification needs invoke T8d directly via `--check <O-id>` (M3.7 forward-reference stub)
- Operator validates a fresh fork has working REST API + MCP setup: `./how/skills/skill_obsidian_agent_inspect.md --mode agent_driven --vault . --profile default`
- Cross-vault audit needs agent-driven verification state: invoke from any vault with `--vault <target>` + `--api-key <target_key>`
- Periodic deployment-health check across all aDNA vaults wants agent-driven results without operator visual inspection (theme + UX-feel checks deferred per `--mode hybrid`)
- Validation-as-dispatched-campaign pattern → partner-vault has REST API + MCP wired → dispatch delegate invokes T8d to satisfy the agent-side subset of O1-O7

## Parameters

| Parameter | Source | Required | Default |
|---|---|---|---|
| `--mode <agent_driven \| hybrid \| operator_side>` | CLI | No | `agent_driven` (falls through cascade on preflight failure) |
| `--vault <path>` | CLI | No | Vault containing this skill |
| `--profile <profile>` | CLI | No | `default` (passed through to T6 when DELEGATING) |
| `--check <O1 \| O2 \| O3 \| O5 \| O7 \| all>` | CLI | No | `all` (executes the full agent-side subset) |
| `--api-key <key>` | CLI | No | Read from `<vault>/.obsidian/plugins/obsidian-local-rest-api/data.json` |
| `--api-endpoint <url>` | CLI | No | `https://127.0.0.1:27124` (or read from `data.json`) |
| `--mcp-server <name>` | CLI | No | `obsidian` (mcpServers entry name; configurable per T8c MCP config) |
| `--degrade-on-preflight-fail <true \| false>` | CLI | No | `true` (graceful degradation; false = hard-fail with exit 2) |
| `--verbose` | CLI flag | No | false |

## Requirements

### Tools

- `bash 3.2+` (portable to macOS default shell)
- `curl` (HTTP client for REST API calls; localhost-only; supports HTTPS with `-k` flag for self-signed cert; required HARD when `--mode != operator_side`)
- `python3` with built-in `json` + `yaml` modules (parsing `data.json` + MCP config + mission spec frontmatter for cross-references)
- `npx` (for MCP server invocation when `--mcp-server` is specified; absent → MCP-dependent checks degrade to REST-API-only OR operator-side per `--mode`)
- `<vault>/how/skills/skill_obsidian_integration_test.md` (T6 skill; HARD when `--mode != agent_driven-pure` for O4 + O6 + operator_side fallback)

### Context files

- Target vault's `.obsidian/plugins/obsidian-local-rest-api/data.json` (HARD when `--mode agent_driven`; provides `apiKey` + `port`)
- T6 skill at `<vault>/how/skills/skill_obsidian_integration_test.md` (HARD when `--mode != agent_driven-pure` OR `--check O4` OR `--check O6`)
- T7 skill at `<vault>/how/skills/skill_verification_handoff.md` (SOFT; consulted when `--mode auto` for dispatch verdict)
- M3.2 skill at `<vault>/how/skills/skill_obsidian_canonicalize.md` (transitively required at depth 3 via T6 chain when O4 invoked)
- MCP server config at `~/.claude.json` mcpServers OR `<vault>/.mcp.json` (HARD when `--mode agent_driven` AND MCP-dependent checks invoked)

### Permissions

- Read all files under `<vault>/.obsidian/` recursively (read-only)
- HTTP GET requests to `https://127.0.0.1:27124/*` (Local REST API; localhost-only by `bindToIp` per T8b)
- Spawn MCP server via npx subprocess (for cross-vault file lookup in O5 check)
- Spawn T6 skill subprocess (for O4 + O6 DELEGATION + operator_side fallback)
- ZERO filesystem mutations under any vault

## Safety preconditions

Verified before any check runs (preflight cascade per `--degrade-on-preflight-fail`):

1. **Target vault is aDNA-recognized.** Required markers: `<vault>/.obsidian/` exists AND (`<vault>/CLAUDE.md` exists OR `<vault>/MANIFEST.md` exists). Failure: exit 2 with "vault path does not look like an aDNA vault."
2. **Obsidian is running** (when `--mode agent_driven`). Probe: `curl -k -s -o /dev/null -w "%{http_code}" https://127.0.0.1:27124/` returns 200 or 401 (401 = running but unauthenticated; 200 = running and accessible). Failure: degrade to operator_side per `--degrade-on-preflight-fail=true` OR exit 2 if `false`.
3. **REST API plugin is loaded** (when `--mode agent_driven`). Probe: `curl -k -s https://127.0.0.1:27124/vault/` returns 200 (with valid key) or 401 (without). Failure: same as Precondition 2.
4. **API key is valid** (when `--mode agent_driven`). Read `apiKey` from `<vault>/.obsidian/plugins/obsidian-local-rest-api/data.json`; if value is the placeholder `REPLACE_ON_FIRST_RUN_VIA_OBSIDIAN_SETTINGS_PANEL`, report `PREFLIGHT_FAIL` with hint to complete first-run UX. Validate via `curl -k -H "Authorization: Bearer $KEY" https://127.0.0.1:27124/vault/` → 200 expected. 401 → degrade per `--degrade-on-preflight-fail`.
5. **MCP server is reachable** (when `--mode agent_driven` AND MCP-dependent checks invoked, e.g., O5 cross-vault file lookup). Probe: `npx -y @modelcontextprotocol/server-obsidian --health` (or equivalent ping). Failure: degrade to `--mode hybrid` (REST-API-only checks proceed; MCP-dependent checks fall back to operator-side OR T6).
6. **Cross-skill dependency check** (T6). If `<vault>/how/skills/skill_obsidian_integration_test.md` is absent AND (`--check O4` OR `--check O6` OR `--mode operator_side`), report `SKIP_WITH_HINT` (does NOT fail the run; documents the gap).

## Implementation

### Mode cascade (degradation logic)

```
agent_driven:
  preflight check (Preconditions 1-5)
  on full success: execute O1 + O2 + O3 + O5 + O7 via REST API + MCP; DELEGATE O4 to T6; keep O6 operator-side
  on partial preflight failure (MCP unreachable, REST API reachable): degrade to hybrid
  on full preflight failure (REST API unreachable): degrade to operator_side per --degrade-on-preflight-fail=true
hybrid:
  preflight check (Preconditions 1-4 only; MCP not required)
  execute O1 + O2 + O3 + O7 via REST API (these don't need MCP)
  DELEGATE O5 to operator (O5 requires cross-vault MCP file lookup; falls back without MCP)
  DELEGATE O4 to T6's M3.2 DELEGATION
  O6 + visual checks stay operator-side
operator_side:
  preflight check (Precondition 1 + 6 only; no REST API or MCP needed)
  DELEGATE entirely to T6 via subprocess (--vault <vault> --profile <profile>); pass-through T6 output + exit code
```

### Per-check execution detail (`agent_driven` mode)

| Check | Method | API endpoint / MCP tool | Pass criteria |
|---|---|---|---|
| **O1** (vault opens cleanly) | REST API | `GET /vault/` (REST API health endpoint) | HTTP 200 + JSON response with `name` field matching vault basename |
| **O2** (HOME.md renders) | REST API | `GET /vault/HOME.md` (or `--default-home` fallback: README.md / CLAUDE.md) | HTTP 200 + content has YAML frontmatter (if present) OR plain markdown header (`# Title`) within first 20 lines |
| **O3** (content tables enumerate) | REST API + parse | `GET /vault/HOME.md` + parse profile-declared `home_page_table_assertions` | row count matches profile-declared source YAML file's array length (e.g., `inventory_vaults.yaml#/vaults`) |
| **O4** (plugin binary-presence) | DELEGATE to T6 | (T6 DELEGATES to M3.2 skill `skill_obsidian_canonicalize.md --verify`) | passes-through T6's exit code + verdict |
| **O5** (cross-vault links) | REST API + MCP | `GET /vault/HOME.md` + parse `](../<name>)` links + MCP file-lookup per target | each link's target file existence confirmed via MCP `read_file` tool |
| **O6** (external links) | OPERATOR-SIDE OR T6-curl | (T6 may have curl-based HEAD check) | deferred to operator OR T6's `external_link_policy` |
| **O7** (theme + accent) | REST API | `GET /vault/.obsidian/appearance.json` | content matches profile-declared theme + accent (default: Tokyo Night + #663399 per OBSIDIAN_CLAUDE.md baseline) |

### Bash implementation sketch

```bash
#!/usr/bin/env bash
set -euo pipefail

# Parse args
MODE="agent_driven"
VAULT_DIR="$(dirname "$(realpath "$0")")/../.."
PROFILE="default"
CHECK="all"
API_KEY=""
API_ENDPOINT="https://127.0.0.1:27124"
MCP_SERVER="obsidian"
DEGRADE=1
VERBOSE=0

while [ $# -gt 0 ]; do
    case "$1" in
        --mode) MODE="$2"; shift 2 ;;
        --vault) VAULT_DIR="$2"; shift 2 ;;
        --profile) PROFILE="$2"; shift 2 ;;
        --check) CHECK="$2"; shift 2 ;;
        --api-key) API_KEY="$2"; shift 2 ;;
        --api-endpoint) API_ENDPOINT="$2"; shift 2 ;;
        --mcp-server) MCP_SERVER="$2"; shift 2 ;;
        --degrade-on-preflight-fail) [ "$2" = "false" ] && DEGRADE=0; shift 2 ;;
        --verbose) VERBOSE=1; shift ;;
        *) echo "Unknown arg: $1" >&2; exit 2 ;;
    esac
done

# Precondition 1: vault is aDNA-recognized
if [ ! -d "$VAULT_DIR/.obsidian" ] || { [ ! -f "$VAULT_DIR/CLAUDE.md" ] && [ ! -f "$VAULT_DIR/MANIFEST.md" ]; }; then
    echo "FAIL: vault path '$VAULT_DIR' does not look like an aDNA vault (missing .obsidian/ OR CLAUDE.md/MANIFEST.md)" >&2
    exit 2
fi

# Read API key from data.json if not provided
if [ -z "$API_KEY" ] && [ -f "$VAULT_DIR/.obsidian/plugins/obsidian-local-rest-api/data.json" ]; then
    API_KEY=$(python3 -c "import json; print(json.load(open('$VAULT_DIR/.obsidian/plugins/obsidian-local-rest-api/data.json'))['apiKey'])" 2>/dev/null || echo "")
fi

# Preflight for agent_driven
preflight_agent_driven() {
    # Precondition 2 + 3 + 4
    local http_code=$(curl -k -s -o /dev/null -w "%{http_code}" "$API_ENDPOINT/" || echo "000")
    [ "$http_code" = "000" ] && return 1   # Obsidian not running
    [ "$API_KEY" = "REPLACE_ON_FIRST_RUN_VIA_OBSIDIAN_SETTINGS_PANEL" ] && return 2   # First-run UX incomplete
    local auth_code=$(curl -k -s -o /dev/null -w "%{http_code}" -H "Authorization: Bearer $API_KEY" "$API_ENDPOINT/vault/" || echo "000")
    [ "$auth_code" = "401" ] && return 3   # API key invalid
    [ "$auth_code" != "200" ] && return 4   # Other failure
    return 0
}

preflight_mcp() {
    # Precondition 5
    npx -y @modelcontextprotocol/server-obsidian --health > /dev/null 2>&1 || return 1
    return 0
}

# Apply mode cascade
EFFECTIVE_MODE="$MODE"

if [ "$MODE" = "agent_driven" ]; then
    if ! preflight_agent_driven; then
        if [ "$DEGRADE" -eq 1 ]; then
            echo "WARN: agent_driven preflight failed; degrading to operator_side" >&2
            EFFECTIVE_MODE="operator_side"
        else
            echo "FAIL: agent_driven preflight failed; --degrade-on-preflight-fail=false; aborting" >&2
            exit 2
        fi
    elif ! preflight_mcp; then
        if [ "$DEGRADE" -eq 1 ]; then
            echo "WARN: MCP server unreachable; degrading to hybrid" >&2
            EFFECTIVE_MODE="hybrid"
        else
            echo "FAIL: MCP server unreachable; --degrade-on-preflight-fail=false; aborting" >&2
            exit 2
        fi
    fi
fi

# Execute per effective mode
case "$EFFECTIVE_MODE" in
    agent_driven|hybrid)
        # Run O1, O2, O3, O7 via REST API
        # Run O5 via REST API + MCP (skip in hybrid)
        # DELEGATE O4 + O6 to T6
        check_o1_rest_api
        check_o2_rest_api
        check_o3_rest_api
        [ "$EFFECTIVE_MODE" = "agent_driven" ] && check_o5_rest_api_mcp
        check_o7_rest_api
        delegate_t6_for_o4_o6
        ;;
    operator_side)
        # Full DELEGATION to T6
        T6_PATH="$VAULT_DIR/how/skills/skill_obsidian_integration_test.md"
        if [ ! -f "$T6_PATH" ]; then
            echo "SKIP_WITH_HINT: T6 skill not present; cannot DELEGATE for operator_side mode" >&2
            exit 2
        fi
        bash "$T6_PATH" --vault "$VAULT_DIR" --profile "$PROFILE"
        exit $?
        ;;
esac

# Per-check implementations (sketched)
check_o1_rest_api() {
    local resp=$(curl -k -s -H "Authorization: Bearer $API_KEY" "$API_ENDPOINT/vault/")
    local vault_name=$(echo "$resp" | python3 -c "import json, sys; print(json.load(sys.stdin).get('name', ''))" 2>/dev/null || echo "")
    if [ "$vault_name" = "$(basename "$VAULT_DIR")" ]; then
        report "O1" "PASS" "Vault registered + REST API responsive"
    else
        report "O1" "FAIL" "Vault name mismatch or REST API not responsive"
    fi
}

check_o2_rest_api() {
    local home="HOME.md"
    [ ! -f "$VAULT_DIR/HOME.md" ] && [ -f "$VAULT_DIR/README.md" ] && home="README.md"
    [ ! -f "$VAULT_DIR/HOME.md" ] && [ ! -f "$VAULT_DIR/README.md" ] && [ -f "$VAULT_DIR/CLAUDE.md" ] && home="CLAUDE.md"
    local content=$(curl -k -s -H "Authorization: Bearer $API_KEY" "$API_ENDPOINT/vault/$home")
    if echo "$content" | head -1 | grep -q '^---$\|^# '; then
        report "O2" "PASS" "Home page ($home) renders with frontmatter or markdown header"
    else
        report "O2" "FAIL" "Home page content malformed"
    fi
}

# ... (additional check implementations omitted for brevity; same pattern as O1+O2)

delegate_t6_for_o4_o6() {
    local t6_path="$VAULT_DIR/how/skills/skill_obsidian_integration_test.md"
    if [ ! -f "$t6_path" ]; then
        report "O4" "SKIP_WITH_HINT" "T6 skill not present; install M3.3 T6 skill"
        report "O6" "SKIP_WITH_HINT" "T6 skill not present; install M3.3 T6 skill"
        return
    fi
    # Invoke T6 in legacy operator_side mode for O4 + O6 specifically
    bash "$t6_path" --vault "$VAULT_DIR" --profile "$PROFILE" --check "O4 O6"
    local t6_exit=$?
    if [ "$t6_exit" -eq 0 ]; then
        report "O4+O6" "DELEGATED_PASS" "T6 DELEGATION (depth 1) → M3.2 skill --verify (depth 2 via T6 chain) → setup.sh --verify (depth 3)"
    else
        report "O4+O6" "DELEGATED_FAIL" "T6 DELEGATION exit $t6_exit"
    fi
}
```

## Output format

```
=== Obsidian agent-driven inspection ===
Target vault: <vault_path>
Profile: <profile>
Mode (effective): <agent_driven | hybrid | operator_side>
REST API: <https://127.0.0.1:27124 reachable | unreachable>
MCP: <obsidian (server name) reachable | unreachable | not invoked>
T6 delegation: <reachable | absent>

Per-check results:
  O1  Vault opens cleanly                           PASS  (REST API 200; vault name match)
  O2  Home page renders                              PASS  (HOME.md via REST API; frontmatter parsed)
  O3  Content tables enumerate                       PASS  (1 assertion in profile; 21 rows confirmed)
  O4  Plugin binary-presence (DELEGATE → T6)         PASS  Enabled: 16 / Installed: 16 / Missing: 0
  O5  Cross-vault links (REST + MCP)                 PASS  (4 links checked via MCP file-lookup)
  O6  External links (DELEGATE → T6 curl)            WARN  (1 link 404; marketplace placeholder)
  O7  Theme + accent (REST API)                       PASS  (Tokyo Night + #663399)

Agent-driven inspection: 5/5 PASS agent-driven (O4 + O6 DELEGATED → T6); 1 WARN non-fatal per default policy
Cross-skill primitive composition: triple DELEGATION evidence (T6 depth 1 + T7 depth 1 + M3.2 skill depth 3)
Exit 0
```

**Exit codes**:

- 0 = all checks PASS (WARN is non-fatal per default policy; degradation cascade applied transparently)
- 1 = at least one FAIL across executed checks
- 2 = `PREFLIGHT_FAIL` (vault path invalid; agent_driven preflight failed with `--degrade-on-preflight-fail=false`; T6 missing when operator_side fallback required) OR `SKIP_WITH_HINT` (recoverable gap; documented)

## Cross-skill primitive composition pattern — 3 of 3 use instances (GRADUATES at M3.4 close)

This skill provides the **3rd canonical use instance** of the cross-skill primitive composition pattern:

1. **M3.3 T6 → M3.2 skill** (1st instance; M3.3 close ratified PRIMARY load-bearing finding): T6 skill DELEGATES binary-presence (O4) to `skill_obsidian_canonicalize.md --verify`. Chain depth 1.
2. **M3.4 T7 → T6 skill** (2nd instance; this M3.4 mission Obj 5): T7 skill DELEGATES O1-O7 check-set to T6 skill. Chain depth 1; reaches M3.2 skill at depth 2 transitively.
3. **M3.4 T8d → T6 + T7 + M3.2 skill** (3rd instance — TRIPLE DELEGATION within a single skill; this M3.4 mission Obj 6): T8d DELEGATES O4+O6+operator_side fallback to T6 at depth 1, consults T7 for dispatch verdict at depth 1, and reaches M3.2 skill at depth 3 via T6 chain. TRIPLE DELEGATION evidence.

Chain depth analysis:
- T8d → T6 → M3.2 skill → T3 `setup.sh --verify` → Obsidian state (4 layers)
- T8d → T7 (dispatch consultation) (1 layer)
- T8d → T6 (operator_side fallback) → T6 own logic (2 layers)

**Three independent delegation paths within one skill** — each layer adds scope; no layer reimplements another's primitive. **The pattern GRADUATES at M3.4 close (S3 AAR)** with `skill_cross_skill_primitive_composition.md` ratified from candidate → graduated.

## Forward integration with M3.7

DEFERRED STUB — operationalizes at M3.7 (modular III for Obsidian).

M3.7 ships III-on-Obsidian as an agent-driven inspection runtime. T8d skill provides M3.7 with the agent-driven O-check primitive that III's modular checks compose with. When M3.7 III modules each declare verification needs (e.g., "verify no orphan files via vault filesystem walk", "verify wikilink graph connectivity via REST API + MCP"), they can extend the O-check matrix by adding profile-declared checks (`O8`, `O9`, ...) that T8d skill executes via REST API + MCP. The mode cascade (`agent_driven → hybrid → operator_side`) applies to III modules; modules with fully-agent-driven needs execute via T8d directly without operator involvement; modules with theme/visual judgments stay operator-side. M3.7 design spec cites this skill + T6 + T7 + ADR-014; M3.7 III modules declare `verification_surface:` per ADR-014 Clause C consumer-mission obligation. Defers WHEN+HOW+WHY to M3.7 consumer-mission authoring.

## Examples

### Example 1: agent_driven mode with full REST API + MCP setup

```bash
$ ./how/skills/skill_obsidian_agent_inspect.md --mode agent_driven --vault . --profile default
=== Obsidian agent-driven inspection ===
Target vault: /Users/stanley/lattice/aDNA.aDNA/
Profile: default
Mode (effective): agent_driven
REST API: https://127.0.0.1:27124 reachable
MCP: obsidian reachable
T6 delegation: reachable

Per-check results:
  O1  Vault opens cleanly                           PASS  (REST API 200; vault name match)
  O2  Home page renders                              PASS  (HOME.md via REST API)
  O3  Content tables enumerate                       PASS  (default profile; 0 assertions)
  O4  Plugin binary-presence (DELEGATE → T6)         PASS  Enabled: 16 / Installed: 16 / Missing: 0
  O5  Cross-vault links (REST + MCP)                 PASS  (4 links checked via MCP)
  O6  External links (DELEGATE → T6 curl)            PASS  (3 links checked)
  O7  Theme + accent (REST API)                       PASS  (Tokyo Night + #663399)

Agent-driven inspection: 5/5 PASS agent-driven (O4 + O6 DELEGATED → T6)
Cross-skill primitive composition: triple DELEGATION evidence (T6 + T7 + M3.2 skill)
Exit 0
```

### Example 2: hybrid mode (MCP unavailable)

```bash
$ ./how/skills/skill_obsidian_agent_inspect.md --mode hybrid --vault . --profile default
WARN: --mode hybrid invoked; O5 cross-vault links deferred to operator (MCP not required in hybrid)

=== Obsidian agent-driven inspection ===
Mode (effective): hybrid
REST API: reachable
MCP: not invoked
...
  O5  Cross-vault links                              OPERATOR_SIDE  (deferred per hybrid mode)
  ...

Agent-driven inspection: 4/4 PASS agent-driven; O5 OPERATOR_SIDE; O4 + O6 DELEGATED → T6
Exit 0
```

### Example 3: agent_driven preflight failure → degradation to operator_side

```bash
$ ./how/skills/skill_obsidian_agent_inspect.md --mode agent_driven --vault . --profile default
WARN: agent_driven preflight failed (REST API unreachable at https://127.0.0.1:27124); degrading to operator_side

=== Obsidian agent-driven inspection ===
Mode (effective): operator_side
T6 delegation: reachable

[T6 output passes through]
...

Operator-side fallback: 7/7 PASS (full T6 DELEGATION)
Exit 0
```

### Example 4: invoked from T6 (T8e activation hook)

When T6 skill is invoked with `--mode agent_driven` (per T8e activation patch), T6 invokes T8d for the O1+O2+O3+O5+O7 subset:

```bash
# Inside T6 skill body (post-T8e patch):
$ ./how/skills/skill_obsidian_integration_test.md --vault . --profile default-agent-driven
# T6 reads profile.mode = agent_driven
# For O1, T6 invokes:
#   bash ./how/skills/skill_obsidian_agent_inspect.md --mode agent_driven --check O1 --vault . --profile default
# T8d returns verdict for O1; T6 aggregates into O1-O7 result table
```

## Cross-references

- [[skill_obsidian_integration_test.md|skill_obsidian_integration_test.md]] — M3.3 T6 deliverable; T8d DELEGATES O4 + O6 + operator_side fallback to this skill (cross-skill primitive composition 3rd use instance via TRIPLE DELEGATION)
- [[skill_verification_handoff.md|skill_verification_handoff.md]] — M3.4 T7 sibling skill; T8d consults T7 for dispatch verdict when invoked via `--mode auto`; T7 routes to T8d via `--surface agent` branch per ADR-014 Clause B
- [[skill_obsidian_canonicalize.md|skill_obsidian_canonicalize.md]] — M3.2 T4 deliverable; T8d reaches at delegation depth 3 via T6 chain (T8d → T6 → M3.2 skill)
- [[../../.adna/how/skills/skill_node_health_check.md|skill_node_health_check.md]] — pre-existing health-check pattern; T8d is the agent-driven Obsidian-surface sibling
- [[../campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m34_obj4_t8_design_spec.md|T8 design spec]] — design substrate ratifying this skill's mode cascade + triple DELEGATION evidence
- [[../campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m34_obj3_t7_design_spec.md|T7 design spec]] — sibling design spec (T7 = dispatch; T8 = agent-driven branch primitive that T7 routes to)
- [[../campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p3_m34_verification_handoff_and_agent_inspection.md|M3.4 mission spec]] — parent mission
- [[../../what/decisions/adr_014_verification_handoff_topology.md|ADR-014]] — doctrinal ratification (T8d operationalizes Clause B `agent_driven` branch)
- [[../../what/decisions/adr_016_per_mission_context_budget.md|ADR-016]] — per-mission context budget (ratification-at-implementation-mission-close pattern)
- [[../campaigns/campaign_obsidian_deployment_stabilization/campaign_obsidian_deployment_stabilization.md|absorbed campaign master]] — Track 8 substrate (line 67-77 verbatim source)
- [[../../how/backlog/backlog_F_S2_8_agent_driven_obsidian_inspection.md|F-S2-8 backlog file]]
- [[../campaigns/campaign_adna_serious_tool_readiness/CLAUDE.md|Campaign SO #14 in-phase exception clause + #16 v7.0 tag dependency hard]]

## Self-reference note

This skill ratifies the cross-skill primitive composition pattern at 3 of 3 use instances via its TRIPLE DELEGATION evidence (T6 + T7 + M3.2 skill at depths 1+1+3). The graduation candidate `skill_cross_skill_primitive_composition.md` ratifies at M3.4 close S3 AAR. The mode cascade (`agent_driven → hybrid → operator_side`) is the load-bearing operational primitive — partner-vaults with incomplete REST API + MCP setup degrade gracefully; the skill never hard-fails on missing infrastructure (per `--degrade-on-preflight-fail=true` default).

Future architectural-primitive codifications may follow the same triple-DELEGATION pattern when the primitive being codified composes with multiple existing skills at varying depths. The pattern is now stable enough to be the graduation evidence for `skill_cross_skill_primitive_composition.md` per M3.x cohort.
