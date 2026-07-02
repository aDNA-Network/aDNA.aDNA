---
type: backlog_idea
status: resolved
priority: high  # architectural-load-bearing finding
routes_to_campaign: campaign_obsidian_deployment_stabilization
routes_to_track: T7  # verification handoff documentation
finding_id: F-S2-3
also_routes_to: campaign_validation_node_adna_lwx_outputs  # dispatch model is the first instance of the handoff
source_session: session_stanley_20260513_043947_mlwx03_s2
created: 2026-05-13
updated: 2026-07-02
last_edited_by: agent_rosetta
tags: [backlog, f_s2_3, verification_handoff_topology, agent_side_smoke, operator_side_smoke, dispatch_model, architectural_load_bearing, lwx_s2_surfaced]
---

# F-S2-3 — Agent-side smoke ≠ runtime smoke; verification-handoff design needed

## Summary

M-LWX-02's 25/25 agent-side smoke PASSED while the vault was functionally incomplete (no plugin binaries, no theme files, no `setup.sh`). Agent-side smoke verifies STRUCTURAL fields (file presence + JSON validity + frontmatter correctness); cannot verify RUNTIME properties (plugin loads + theme renders + layout preserved + clicks resolve). Two distinct verification layers were conflated as one. Result: false-positive "complete" state at M-LWX-02 close; gap surfaced only at M-LWX-03 S2 when Obsidian actually launched against the configured-but-uninstalled plugin set.

## Architectural significance

This is the **load-bearing architectural finding of the LWX mini-campaign**. It applies to any aDNA work that requires operator-side runtime verification (Obsidian-touching work, deployment work, partner-vault integration work, etc.). The fix is explicit verification-handoff: define agent-side surface + operator-side surface + their connector (dispatch coord, agent-driven inspection via REST API + MCP, or both).

## Routes to

**Successor campaign**: `campaign_obsidian_deployment_stabilization` Track T7 — Verification handoff documentation (`skill_verification_handoff.md`). Also routes to `campaign_validation_node_adna_lwx_outputs` (in lattice-labs) — the dispatch model is the FIRST INSTANCE of the handoff in practice; T7 documents what B implements.

## Proposed approaches

1. **`skill_verification_handoff.md`** — canonical skill describing agent-side smoke + operator-side runtime smoke + dispatch connector vs agent-driven branch. Defines when to choose which. Cross-references T6 (integration test framework) for agent-side; T8 (agent-driven inspection) for one branch of operator-side closure.
2. **ADR-014** (forecast slot) — architectural decision: verification-handoff topology as the canonical pattern for aDNA features requiring operator-side runtime smoke. Ratifies at successor campaign A's relevant mission close.
3. **Cross-reference into existing skills** — `skill_project_fork.md` post-fork section, `skill_node_health_check.md`, `skill_onboarding.md` all cross-link the new verification-handoff skill where appropriate.

## Critical files

- NEW: `aDNA.aDNA/how/skills/skill_verification_handoff.md` (TBD)
- NEW (optional): `aDNA.aDNA/what/decisions/adr_014_verification_handoff_topology.md`
- Cross-refs: skills above + `aDNA.aDNA/CLAUDE.md` standing orders update if pattern formalizes

## Source references

- M-LWX-03 mission AAR Load-bearing finding section
- M-LWX-03 S2 cross-graph memo §7 F-S2-3 + §8 dispatch model
- LWX campaign AAR §"Successful patterns" + §"Conceptual contributions"
- Operator strategic UX goal memory: `~/.claude/projects/-Users-stanley-lattice-aDNA-aDNA/memory/project_adna_lattice_ux_goal.md`


## Champollion G0 disposition — D (M1.1, 2026-07-02)

**ALREADY-DISCHARGED.** Evidence: skill_verification_handoff exists in the skills inventory (the ADR-014 slot was its forecast). Status set to `resolved`; ratified at Champollion G0 (D2).
