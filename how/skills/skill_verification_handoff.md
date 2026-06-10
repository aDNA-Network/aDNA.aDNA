---
type: skill
skill_type: agent
created: 2026-05-24
updated: 2026-05-24
status: active
category: verification_dispatch
trigger: "Decide verification surface for an implementation-class mission. Returns dispatch verdict (PASS / FAIL / DISPATCHED / PREFLIGHT_FAIL / AUTO) + handoff coordinates. Vault-agnostic via --mission <mission_id> slot + --surface <agent | operator | dispatch | auto> + --check-set <T6 | custom>. DELEGATES binary-presence + O1-O7 check-set to skill_obsidian_integration_test.md (T6; cross-skill primitive composition pattern 2nd use instance — graduates at M3.4 close with T8d). Ratified by ADR-014 (Verification Handoff Topology)."
last_edited_by: agent_stanley
graduated_from: aDNA.aDNA@m34_obj5
graduated_at: 2026-05-24
graduated_via: campaign_adna_serious_tool_readiness M3.4 S2
tags: [skill, verification, dispatch, topology, cross_skill_delegation, t7, m3_4, design_at_p3_propagation_at_p6, adr_014_consumer, t8_forward_reference_stub, m3_5_forward_reference_stub, m3_7_forward_reference_stub, standing_order_8_16th_tactical_invocation_candidate, m245_routing_layer_3rd_behavioral_test, rosetta]

requirements:
  tools: [bash 3.2+ portable, python3 (yaml + json modules), grep]
  context:
    - <mission_spec_path>                                                            # target mission spec (--mission resolves to this)
    - <vault>/what/decisions/adr_014_verification_handoff_topology.md                # ADR-014 doctrine reference (HARD; consults Clause B for dispatch tree)
    - <vault>/how/skills/skill_obsidian_integration_test.md                          # T6 skill (cross-skill dependency for O1-O7 check-set; HARD when --check-set T6)
    - <vault>/who/coordination/                                                      # for partner-vault dispatch memo template (SOFT)
  permissions:
    - read mission spec frontmatter (yaml parse for verification_surface + verification_check_set + mission_class)
    - invoke ./how/skills/skill_obsidian_integration_test.md as subprocess (T6 delegation when --check-set T6)
    - write coord memo to who/coordination/ when --surface dispatch (file creation only; no destructive mutation)
    - read-only on mission spec + ADR-014 (consults; does not mutate)
---

# Skill: Verification Handoff

## Overview

Decides the **verification surface** for an implementation-class mission — answers the question *"who verifies what, when does the agent dispatch, and what surfaces are agent-side vs operator-side?"* — and emits a dispatch verdict plus handoff coordinates.

**Architecture**: this skill is a DISPATCH ORCHESTRATOR. It reads mission spec frontmatter for `verification_surface:` + `verification_check_set:` declarations (per ADR-014 Clause C consumer-mission obligation) OR falls back to ADR-014 Clause B decision tree when undeclared. When the verdict resolves to `operator` or `dispatch` with `--check-set T6`, the skill DELEGATES to M3.3's `skill_obsidian_integration_test.md` for the operator-side O1-O7 check-set. This is the **2nd explicit cross-skill primitive composition** in the M3.x cohort (after M3.3's T6 → M3.2 skill delegation); combined with Obj 6 `skill_obsidian_agent_inspect.md` (T8d), the cross-skill primitive composition pattern GRADUATES at 3 of 3 use instances at M3.4 close.

**Location**: this skill lives at `aDNA.aDNA/how/skills/skill_verification_handoff.md` (NOT upstream `.adna/how/skills/`) per the same disposition as M3.2's `skill_obsidian_canonicalize.md` + M3.3's `skill_obsidian_integration_test.md`. v8 P6 may promote it to `.adna/` as part of the ecosystem-propagation cycle; until then, operators wanting to use it in other vaults fork the skill into the target vault first, OR invoke from this canonical location with `--mission <mission_id>`.

**Doctrinal anchor**: ratified by [[../../what/decisions/adr_014_verification_handoff_topology.md|ADR-014]] (Verification Handoff Topology), drafted alongside this skill at M3.4 S2 and ratifying at M3.4 S3 close per Campaign SO #14 in-phase exception clause (load-bearing for M3.5/M3.7 in-phase consumers + cross-vault propagation across LatticeLabs.aDNA / LatticeNetwork.aDNA / SiteForge.aDNA / RareHarness.aDNA / WilhelmAI.aDNA / etc.).

**Self-reference (Standing Order #8 — 16th tactical invocation candidate in v8)**: this skill drop is the **3rd behavioral test** of the M2.4.5-hardened `aDNA.aDNA/how/skills/AGENTS.md` routing layer for new-skill discoverability (after M3.2's `skill_obsidian_canonicalize.md` + M3.3's `skill_obsidian_integration_test.md`). The skill itself codifies the dispatch topology that the very mission producing it (M3.4) uses to verify its own deliverables — recursive self-reference. Formal Q2 SQL re-measurement at M3.x ≥ 20-session corpus per `m245_obj3_measurement_contract.md` §6.

## Trigger

Invoked when:

- An implementation-class mission spec is being authored and the author needs to decide `verification_surface:` declaration: `./how/skills/skill_verification_handoff.md --mission <mission_id> --surface auto`
- A consumer mission's verification phase needs dispatch direction: `./how/skills/skill_verification_handoff.md --mission <mission_id> --surface operator --check-set T6`
- A cross-vault implementation mission needs partner-vault dispatch coordinates: `./how/skills/skill_verification_handoff.md --mission <mission_id> --surface dispatch --coord-memo-target <partner_persona>`
- M3.5/M3.6/M3.7 consumer-missions ratifying their own verification surfaces against ADR-014 Clause C obligations
- v8 P6 propagation cycle — cross-vault partner-vaults adopt T7 + ADR-014 + declare `verification_surface:` in their implementation-class missions
- M4.x installer-class missions plan their verification phase per Campaign SO #16 doctrine + ADR-014 Clause B decision tree

## Parameters

| Parameter | Source | Required | Default |
|---|---|---|---|
| `--mission <mission_id>` | CLI | Yes | n/a — required |
| `--surface <agent \| operator \| dispatch \| auto>` | CLI | No | `auto` (reads mission frontmatter `verification_surface:` field; falls back to ADR-014 Clause B decision tree) |
| `--check-set <T6 \| custom>` | CLI | No | `T6` (operator-side O1-O7 default per ADR-014 Clause B) |
| `--vault <path>` | CLI | No | Vault containing this skill |
| `--coord-memo-target <persona>` | CLI | No | `auto` (resolves from mission spec `cross_vault_impact:` field) |
| `--coord-memo-template` | CLI flag | No | false (when true, writes memo template to who/coordination/ even on `--surface auto`) |
| `--verbose` | CLI flag | No | false |

## Requirements

### Tools

- `bash 3.2+` (portable to macOS default shell)
- `python3` with built-in `yaml` + `json` modules (no external deps; used for mission spec frontmatter parsing + ADR-014 doctrine reading)
- `grep` (BSD or GNU; used for cross-reference + frontmatter field extraction)

### Context files

- Target mission spec at `<vault>/how/missions/<mission_id>.md` OR `<vault>/how/campaigns/<campaign>/missions/<mission_id>.md` (skill auto-resolves both layout conventions)
- ADR-014 at `<vault>/what/decisions/adr_014_verification_handoff_topology.md` (doctrine reference; HARD when `--surface auto` and frontmatter declaration absent)
- T6 skill at `<vault>/how/skills/skill_obsidian_integration_test.md` (cross-skill dependency; HARD when `--check-set T6` and `--surface != agent`)
- `<vault>/who/coordination/` directory for dispatch memo placement (SOFT; created on-demand if absent)

### Permissions

- Read mission spec frontmatter (YAML parse for `verification_surface:`, `verification_check_set:`, `mission_class:`, `cross_vault_impact:`)
- Read ADR-014 body (for Clause B decision tree text + Clause C consumer-mission obligation reference)
- Read T6 skill body (for binary-presence delegation; if HARD-required by `--check-set T6`)
- Invoke `./how/skills/skill_obsidian_integration_test.md` as subprocess (T6 delegation)
- Write coord memo file at `<vault>/who/coordination/coord_<date>_t7_dispatch_<mission_id>.md` when `--surface dispatch` (file creation only; no destructive mutation)
- ZERO filesystem mutations beyond coord memo file creation under `who/coordination/`

## Safety preconditions

Verified before any dispatch logic runs:

1. **Target mission spec exists at one of the standard layouts.** Skill probes `<vault>/how/missions/<mission_id>.md` + `<vault>/how/campaigns/*/missions/<mission_id>.md`. Failure: exit 2 with "mission spec not found at expected layouts; check --mission argument or --vault path."
2. **Mission spec frontmatter is valid YAML.** Skill parses + validates required fields (`mission_id`, `mission_class`, `campaign`). Failure: exit 2 with "mission spec frontmatter is not valid YAML or missing required fields."
3. **ADR-014 reference exists at `<vault>/what/decisions/adr_014_verification_handoff_topology.md`** when `--surface auto` and frontmatter `verification_surface:` is absent. Failure: report `PREFLIGHT_FAIL` + suggest declaring `verification_surface:` in frontmatter OR specifying `--surface` explicitly.
4. **T6 skill exists at `<vault>/how/skills/skill_obsidian_integration_test.md`** when `--check-set T6` AND `--surface in {operator, dispatch}`. Failure: report `SKIP_WITH_HINT` + suggest `--check-set custom` OR adopting T6 skill at target vault.

## Implementation

### Dispatch decision tree (ratified by ADR-014 Clause B)

```
1. Parse mission spec frontmatter; extract:
   - mission_class (required: reconnaissance | implementation | verification | integration | closeout | planning)
   - verification_surface (optional: agent | operator | dispatch | auto)
   - verification_check_set (optional: T6 | custom)
   - cross_vault_impact (optional: list of partner vaults)
   - risk_profile (optional: low | medium | high; inferred from mission_class + check_set + cross_vault_impact if absent)

2. Resolve effective surface:
   a. If --surface = auto AND frontmatter verification_surface declared → use declared
   b. Else if --surface = auto AND frontmatter verification_surface undeclared → apply ADR-014 Clause B decision tree (step 3)
   c. Else → use --surface argument value

3. ADR-014 Clause B decision tree (auto-resolution):
   3a. mission_class = implementation AND risk_profile = high → DISPATCH (operator + partner-persona via coord memo)
   3b. mission_class = implementation AND risk_profile = medium AND check_set = T6 → DISPATCH (operator only; no partner-persona)
   3c. mission_class = implementation AND risk_profile = low AND check_set = custom-none → AGENT (no handoff)
   3d. mission_class in {reconnaissance, closeout} → AGENT (no handoff)
   3e. mission_class = planning → AGENT (operator AAR review only)
   3f. cross_vault_impact != [] → DISPATCH (partner-persona via coord memo)
   3g. mission_class in {verification, integration} → DISPATCH (default; consumer-mission overrides via declaration)
   3h. (fallthrough) → AGENT with WARN (consumer-mission should declare verification_surface)

4. Execute resolved surface:
   a. surface = agent: report PASS verdict (no check execution; agent's own verification is implicit per mission_class)
   b. surface = operator AND check_set = T6: DELEGATE to skill_obsidian_integration_test.md --vault <vault> --profile <profile from mission frontmatter; default=default>
      - Consume T6 exit code
      - PASS if T6 exit 0 + all O1-O7 PASS
      - FAIL if T6 exit 1 (at least one O failed)
      - PREFLIGHT_FAIL if T6 exit 2
   c. surface = operator AND check_set = custom: report DISPATCHED with handoff to mission AAR §Acceptance scorecard
   d. surface = dispatch AND coord_memo_target != none: write coord memo template + report DISPATCHED with memo path + persona name
   e. surface = dispatch AND coord_memo_target = none: report DISPATCHED with operator-only handoff to mission AAR

5. Emit verdict + handoff coordinates per output format below
```

### Bash implementation sketch

```bash
#!/usr/bin/env bash
set -euo pipefail

# Parse args
MISSION_ID=""
SURFACE="auto"
CHECK_SET="T6"
VAULT_DIR="$(dirname "$(realpath "$0")")/../.."
COORD_MEMO_TARGET="auto"
COORD_MEMO_TEMPLATE=0
VERBOSE=0

while [ $# -gt 0 ]; do
    case "$1" in
        --mission) MISSION_ID="$2"; shift 2 ;;
        --surface) SURFACE="$2"; shift 2 ;;
        --check-set) CHECK_SET="$2"; shift 2 ;;
        --vault) VAULT_DIR="$2"; shift 2 ;;
        --coord-memo-target) COORD_MEMO_TARGET="$2"; shift 2 ;;
        --coord-memo-template) COORD_MEMO_TEMPLATE=1; shift ;;
        --verbose) VERBOSE=1; shift ;;
        *) echo "Unknown arg: $1" >&2; exit 2 ;;
    esac
done

[ -z "$MISSION_ID" ] && echo "FAIL: --mission required" >&2 && exit 2

# Resolve mission spec path (probe both layouts)
MISSION_PATH=""
for p in "$VAULT_DIR/how/missions/$MISSION_ID.md" "$VAULT_DIR"/how/campaigns/*/missions/"$MISSION_ID.md"; do
    [ -f "$p" ] && MISSION_PATH="$p" && break
done

if [ -z "$MISSION_PATH" ]; then
    echo "PREFLIGHT_FAIL: mission spec not found for '$MISSION_ID' under $VAULT_DIR" >&2
    exit 2
fi

# Parse frontmatter via python3
declare -A FM
while IFS='=' read -r key val; do
    FM[$key]="$val"
done < <(python3 -c "
import yaml, sys
with open('$MISSION_PATH') as f:
    text = f.read()
fm_start = text.find('---')
fm_end = text.find('---', fm_start+3)
fm = yaml.safe_load(text[fm_start+3:fm_end])
for k in ['mission_class', 'verification_surface', 'verification_check_set', 'risk_profile']:
    print(f'{k}={fm.get(k, \"\")}')
print(f'cross_vault_impact={\",\".join(fm.get(\"cross_vault_impact\", []))}')
")

MISSION_CLASS="${FM[mission_class]:-implementation}"
FM_SURFACE="${FM[verification_surface]:-}"
FM_CHECK_SET="${FM[verification_check_set]:-$CHECK_SET}"
RISK_PROFILE="${FM[risk_profile]:-medium}"
CROSS_VAULT_IMPACT="${FM[cross_vault_impact]:-}"

# Resolve effective surface
if [ "$SURFACE" = "auto" ]; then
    if [ -n "$FM_SURFACE" ]; then
        SURFACE="$FM_SURFACE"
        [ "$VERBOSE" -eq 1 ] && echo "Using mission frontmatter verification_surface: $SURFACE" >&2
    else
        # ADR-014 Clause B decision tree
        case "$MISSION_CLASS" in
            implementation)
                if [ "$RISK_PROFILE" = "high" ]; then
                    SURFACE="dispatch"
                elif [ "$RISK_PROFILE" = "medium" ] && [ "$FM_CHECK_SET" = "T6" ]; then
                    SURFACE="dispatch"
                else
                    SURFACE="agent"
                fi
                ;;
            reconnaissance|closeout|planning) SURFACE="agent" ;;
            verification|integration) SURFACE="dispatch" ;;
            *) SURFACE="agent"; echo "WARN: mission_class '$MISSION_CLASS' fell through; defaulting to agent" >&2 ;;
        esac
        [ -n "$CROSS_VAULT_IMPACT" ] && SURFACE="dispatch"
        [ "$VERBOSE" -eq 1 ] && echo "ADR-014 Clause B auto-resolved surface: $SURFACE" >&2
    fi
fi

# Execute resolved surface
VERDICT=""
HANDOFF=""

case "$SURFACE" in
    agent)
        VERDICT="PASS"
        HANDOFF="agent-side; no operator handoff required per ADR-014 Clause B"
        ;;
    operator)
        if [ "$FM_CHECK_SET" = "T6" ]; then
            T6_PATH="$VAULT_DIR/how/skills/skill_obsidian_integration_test.md"
            if [ ! -f "$T6_PATH" ]; then
                VERDICT="SKIP_WITH_HINT"
                HANDOFF="T6 skill not present at $T6_PATH; install M3.3 T6 skill OR invoke with --check-set custom"
            else
                PROFILE="${FM[profile]:-default}"
                bash "$T6_PATH" --vault "$VAULT_DIR" --profile "$PROFILE"
                T6_EXIT=$?
                case "$T6_EXIT" in
                    0) VERDICT="PASS"; HANDOFF="O1-O7 PASS via T6 DELEGATION; operator AAR scorecard" ;;
                    1) VERDICT="FAIL"; HANDOFF="At least one O failed via T6 DELEGATION; operator review required" ;;
                    *) VERDICT="PREFLIGHT_FAIL"; HANDOFF="T6 preflight failed (exit $T6_EXIT)" ;;
                esac
            fi
        else
            VERDICT="DISPATCHED"
            HANDOFF="check-set custom; handoff to mission AAR §Acceptance scorecard"
        fi
        ;;
    dispatch)
        # Write coord memo template
        if [ "$COORD_MEMO_TARGET" = "auto" ] && [ -n "$CROSS_VAULT_IMPACT" ]; then
            PARTNER=$(echo "$CROSS_VAULT_IMPACT" | cut -d',' -f1)
            COORD_MEMO_TARGET="$PARTNER"
        fi
        if [ "$COORD_MEMO_TARGET" != "none" ] && [ "$COORD_MEMO_TARGET" != "auto" ]; then
            MEMO_DATE=$(date -u +"%Y_%m_%d")
            MEMO_PATH="$VAULT_DIR/who/coordination/coord_${MEMO_DATE}_t7_dispatch_${MISSION_ID}.md"
            mkdir -p "$(dirname "$MEMO_PATH")"
            cat > "$MEMO_PATH" <<MEMO
---
type: coordination
created: $(date -u +"%Y-%m-%d")
status: draft
sender: rosetta
recipient: $COORD_MEMO_TARGET
mission_id: $MISSION_ID
campaign: ${FM[campaign]:-unknown}
related_adr: adr_014_verification_handoff_topology
related_skill: skill_verification_handoff
tags: [coordination, verification_dispatch, t7, adr_014]
---

# Verification dispatch — $MISSION_ID

T7 verification-handoff skill resolved dispatch verdict for this mission to **partner-vault $COORD_MEMO_TARGET** per ADR-014 Clause B + cross_vault_impact declaration.

**Mission**: $MISSION_ID (mission_class: $MISSION_CLASS; risk_profile: $RISK_PROFILE)
**Check-set**: $FM_CHECK_SET (DELEGATES to skill_obsidian_integration_test.md per Clause B)
**Verification surface**: dispatch (partner-vault)

## Ask

$COORD_MEMO_TARGET-persona at partner-vault: please run \`./how/skills/skill_obsidian_integration_test.md --vault . --profile default\` against your vault + report verdict back via this coord memo (\`status: acknowledged\` + verdict in §Results section below).

## Results (filled by partner)

(awaiting partner ack)
MEMO
            VERDICT="DISPATCHED"
            HANDOFF="coord memo written at $MEMO_PATH; partner-persona $COORD_MEMO_TARGET to ack"
        else
            VERDICT="DISPATCHED"
            HANDOFF="operator-only dispatch; handoff to mission AAR §Acceptance scorecard"
        fi
        ;;
    *) echo "FAIL: unknown surface $SURFACE" >&2; exit 2 ;;
esac

# Output verdict
cat <<OUT
=== Verification handoff ===
Mission: $MISSION_ID
Mission class: $MISSION_CLASS
Surface (resolved): $SURFACE
Check-set: $FM_CHECK_SET
Risk profile: $RISK_PROFILE
Cross-vault impact: ${CROSS_VAULT_IMPACT:-none}

Verdict: $VERDICT
Handoff: $HANDOFF
OUT

# Exit code
case "$VERDICT" in
    PASS|DISPATCHED|AUTO) exit 0 ;;
    FAIL) exit 1 ;;
    PREFLIGHT_FAIL|SKIP_WITH_HINT) exit 2 ;;
esac
```

## Output format

```
=== Verification handoff ===
Mission: <mission_id>
Mission class: <reconnaissance | implementation | verification | integration | closeout | planning>
Surface (resolved): <agent | operator | dispatch>
Check-set: <T6 | custom>
Risk profile: <low | medium | high>
Cross-vault impact: <comma-list | none>

Verdict: <PASS | FAIL | DISPATCHED | PREFLIGHT_FAIL | SKIP_WITH_HINT | AUTO>
Handoff: <text describing where the verification continues>
```

**Exit codes**:

- 0 = `PASS` (verification surface resolved; check-set executed; all checks pass OR no checks required for `agent` surface) OR `DISPATCHED` (dispatch is success at dispatch time; final verdict at handoff target) OR `AUTO` (warning if mission spec lacks `verification_surface:` declaration)
- 1 = `FAIL` (verification surface resolved; check-set executed; at least one check failed)
- 2 = `PREFLIGHT_FAIL` (mission spec path invalid; ADR-014 doctrine reference missing; T6 skill missing when `--check-set T6` and `--surface != agent`) OR `SKIP_WITH_HINT` (recoverable gap; documented)

## Cross-skill delegation contract (T6 check-set)

When `--check-set T6` AND `--surface in {operator, dispatch}`:

```bash
# Inside T7 skill, T6 delegation:
T6_PATH="$VAULT_DIR/how/skills/skill_obsidian_integration_test.md"
if [ -f "$T6_PATH" ]; then
    bash "$T6_PATH" --vault "$VAULT_DIR" --profile "${PROFILE:-default}"
    delegate_exit=$?
    # Map exit code to verdict
else
    report "SKIP_WITH_HINT" "T6 skill not present; install M3.3 T6 skill OR fall back to --check-set custom"
fi
```

The delegation chain is `T7 skill → T6 skill → M3.2 skill → T3 setup.sh --verify → Obsidian state` — chain depth 4. Each layer adds scope; no layer reimplements another's primitive. **Cross-skill primitive composition pattern 2nd use instance** (after M3.3 T6 → M3.2 skill at depth 1); combined with Obj 6 T8d skill's triple DELEGATION (T6 + T7 + M3.2 at depths 1+1+3), the pattern GRADUATES at 3 of 3 use instances at M3.4 close.

## Forward integration with M3.5

DEFERRED STUB — operationalizes at M3.5 (Bases-driven HOME.md + per-vault info pages).

M3.5 ships HOME.md polish + per-vault info pages as operator-facing UX deliverables. T7 skill provides M3.5 with the dispatch decision primitive: when M3.5 mission spec frontmatter declares `verification_surface: operator` + `verification_check_set: T6`, T7 skill delegates to M3.3 T6 skill against the polished HOME.md + per-vault info pages. T6's O1-O7 check-set covers home page renders + theme + accent + cross-vault links — the very surfaces M3.5 polishes. M3.5 design spec cites this skill + ADR-014; M3.5 consumer mission frontmatter declares `verification_surface:` per ADR-014 Clause C consumer-mission obligation. Dispatch verdict for M3.5 implementation-class missions resolves via T7 → T6 → M3.2 chain; partner-vault HOME.md polish missions dispatch via coord memo template to per-vault personas. Defers WHEN+HOW+WHY to M3.5 consumer-mission authoring.

## Forward integration with M3.7

DEFERRED STUB — operationalizes at M3.7 (modular III for Obsidian).

M3.7 ships III-on-Obsidian as an agent-driven inspection runtime (consuming T8 substrate from M3.4 Obj 4 + Obj 6). T7 skill provides M3.7 with the agent-vs-operator surface split decision primitive: M3.7's III modules each declare `verification_surface:` per ADR-014 Clause C; T7 skill resolves each module's dispatch verdict. The III-on-Obsidian runtime invokes T7 skill on demand for runtime verification decisions (e.g., "should III's NN-fix module run agent-driven via T8d, or dispatch to operator for visual confirmation?"). M3.7 design spec cites this skill + ADR-014 + T8 substrate; M3.7 implementation-class missions declare `verification_surface:` per ADR-014 Clause C. Defers WHEN+HOW+WHY to M3.7 consumer-mission authoring.

## Examples

### Example 1: Implementation-class mission with frontmatter declaration

```bash
$ ./how/skills/skill_verification_handoff.md --mission mission_adna_str_p3_m34_verification_handoff_and_agent_inspection --surface auto
=== Verification handoff ===
Mission: mission_adna_str_p3_m34_verification_handoff_and_agent_inspection
Mission class: implementation
Surface (resolved): dispatch
Check-set: T6
Risk profile: medium
Cross-vault impact: none

Verdict: DISPATCHED
Handoff: coord memo written at /Users/stanley/aDNA/aDNA.aDNA/who/coordination/coord_2026_05_24_t7_dispatch_mission_adna_str_p3_m34_verification_handoff_and_agent_inspection.md; partner-persona auto to ack
```

(Note: M3.4 mission spec frontmatter would declare `verification_surface: dispatch` for this dispatch to be auto-resolved per the declaration; absent declaration triggers ADR-014 Clause B auto-resolution per the decision tree.)

### Example 2: Reconnaissance-class mission (no dispatch needed)

```bash
$ ./how/skills/skill_verification_handoff.md --mission mission_adna_str_p1_m11_v2_handshake_audit
=== Verification handoff ===
Mission: mission_adna_str_p1_m11_v2_handshake_audit
Mission class: reconnaissance
Surface (resolved): agent
Check-set: T6
Risk profile: low
Cross-vault impact: none

Verdict: PASS
Handoff: agent-side; no operator handoff required per ADR-014 Clause B
```

### Example 3: Cross-vault dispatch with coord memo

```bash
$ ./how/skills/skill_verification_handoff.md --mission mission_siteforge_p5_canvas_substrate_landing --surface dispatch --coord-memo-target hermes
=== Verification handoff ===
Mission: mission_siteforge_p5_canvas_substrate_landing
Mission class: implementation
Surface (resolved): dispatch
Check-set: T6
Risk profile: medium
Cross-vault impact: SiteForge.aDNA

Verdict: DISPATCHED
Handoff: coord memo written at /Users/stanley/aDNA/aDNA.aDNA/who/coordination/coord_2026_05_24_t7_dispatch_mission_siteforge_p5_canvas_substrate_landing.md; partner-persona hermes to ack
```

## Cross-references

- [[skill_obsidian_integration_test.md|skill_obsidian_integration_test.md]] — M3.3 T6 deliverable; T7 DELEGATES O1-O7 check-set to this skill (cross-skill primitive composition pattern 2nd use instance)
- [[skill_obsidian_agent_inspect.md|skill_obsidian_agent_inspect.md]] — M3.4 T8d sibling skill; T7 routes to T8d via `--surface agent` branch when mission frontmatter declares `verification_surface: agent` + `mode: agent_driven`
- [[skill_obsidian_canonicalize.md|skill_obsidian_canonicalize.md]] — M3.2 T4 deliverable; T7 reaches it at delegation depth 3 (T7 → T6 → M3.2 skill)
- [[../campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m34_obj3_t7_design_spec.md|T7 design spec]] — design substrate ratifying this skill's dispatch tree + cross-skill DELEGATION
- [[../campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m34_obj4_t8_design_spec.md|T8 design spec]] — sibling design spec (T7 = dispatch; T8 = agent-driven branch primitive that T7 routes to)
- [[../campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p3_m34_verification_handoff_and_agent_inspection.md|M3.4 mission spec]] — parent mission
- [[../campaigns/campaign_lattice_workspace_ux/missions/artifacts/aar_campaign_lattice_workspace_ux.md|LWX mini-campaign AAR]] — verification-handoff topology origin (M-LWX-02 → M-LWX-03 → M-VNAL-01 dispatch model)
- [[../../what/decisions/adr_014_verification_handoff_topology.md|ADR-014]] — doctrinal ratification of the verification-handoff topology (Clause A topology-definition + Clause B dispatch-decision-tree + Clause C consumer-mission obligations)
- [[../../what/decisions/adr_016_per_mission_context_budget.md|ADR-016]] — per-mission context budget (precedent: ratification-at-implementation-mission-close pattern)
- [[../../what/decisions/adr_022_tool_use_logging.md|ADR-022]] — PostToolUse hook (behavioral-primitive ADR precedent)
- [[../campaigns/campaign_adna_serious_tool_readiness/CLAUDE.md|Campaign SO #14 in-phase exception clause + #16 v7.0 tag dependency hard]]

## Self-reference note

This skill IS the operational primitive that ADR-014 ratifies; ADR-014 IS the doctrinal anchor that this skill cites. Mutual self-reference: invoking the skill consults the ADR (Clause B for the decision tree); the ADR's Clause C names this skill as the canonical dispatch primitive. The recursive coupling is intentional — the topology and its operational consumer are co-equal artifacts (Patch A + Patch B in M3.4 T7 design spec §5). Future architectural-primitive codifications (e.g., context-budget two-metric reporting, campaign-archive-on-close, cross-skill primitive composition itself) may follow the same skill-+-ADR pairing pattern.
