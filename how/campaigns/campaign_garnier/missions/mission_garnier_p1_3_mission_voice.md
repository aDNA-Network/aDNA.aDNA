---
plan_id: mission_garnier_p1_3_mission_voice
type: plan
title: Make the public-good invitation concise
owner: stanley
status: in_progress
campaign_id: campaign_garnier
campaign: campaign_garnier
campaign_phase: 1
campaign_mission_number: 5
mission_class: implementation
created: '2026-09-14'
updated: '2026-09-15'
last_edited_by: agent_codex
tags:
- plan
- campaign
- garnier
executor_tier: opus
executor_runtime: codex
token_budget_estimated: 80
token_budget_original: 63
token_budget_unit: kT_content_load
token_budget_actual: 50
token_budget_actual_uncertainty: 25
token_budget_actual_basis: rough_content_load_including_reviews_planning_and_evidence_continuation
actual_sessions: 2
token_budget_reforecast_proposed: 80
reforecast_status: accepted_DP2
reforecast_basis: {"orientation": 20, "four_surface_editorial_work": 35, "evidence_and_formative_feedback_disposition": 25}
estimated_sessions: 1
calibrated_sessions: null
estimation_class: content-novel
decade_status: scope_approved_phase_budgeted
vitruvius_dimensions:
- D1
- D6
- D7
- D8
webforge_patterns:
- how/federation/webforge/
patterns_to_author: []
depends_on:
- mission_garnier_p1_2_quickstart_voice
blocks:
- mission_garnier_p2_1_proof_lineage
acceptance_criteria:
- 'C1: All six mission surfaces preserve Agentic DNA, opt-in sharing, current stewardship and aspiration/fact distinctions,
  with accessible heading order and evidence adjacency. Resolve FG-P0-002 privacy/state disclosure contradictions using observed telemetry evidence and matching HTML/twins.'
- 'C2: Operator-supplied formative humans (at least one per decisive class) test the P1 candidate before DP3; every
  material confusion has correction or explicit gate disposition.'
- 'C3: mission_garnier_p1_3_mission_voice closes with a scoped diff, cited evidence and five-line AAR; DP3 remains
  a human gate and no reserved path/outward action is inferred.'
verification_method:
- id: V1
  surface: /about,/community,/commons,/network,/privacy,/state-of-the-network; public-good doctrine; existing consent/embargo records; P1 storyboard
  method: All six mission surfaces preserve Agentic DNA, opt-in sharing, current stewardship and aspiration/fact
    distinctions, with accessible heading order and evidence adjacency. Resolve FG-P0-002 privacy/state disclosure contradictions using observed telemetry evidence and matching HTML/twins.
  command: 'R-VOICE on /about,/community,/commons,/network,/privacy,/state-of-the-network; manual: map every revised institutional assertion to
    its exact clearance or held disposition; compare privacy/state HTML and twins with transport evidence, preserving collection-unverified status.'
  red_test: 'Insert a false endorsement, mandatory-sharing claim, or contradictory privacy/telemetry assertion into a disposable page or twin: claim review must fail.'
- id: V2
  surface: mission_copy_diff.md; claim_evidence_map.md; formative_reader_pack.md
  method: Operator-supplied formative humans (at least one per decisive class) test the P1 candidate before DP3;
    every material confusion has correction or explicit gate disposition.
  command: reader_protocol formative protocol; R-CAPTURE on the six routes; report each individual observation
    without an aggregate success percentage.
  red_test: 'Relabel a synthetic response as human or omit a reader class: formative pack completeness review must
    reject it.'
- id: V3
  surface: mission_garnier_p1_3_mission_voice base-to-final diff, evidence manifest and AAR
  method: mission_garnier_p1_3_mission_voice closes with a scoped diff, cited evidence and five-line AAR; DP3 remains
    a human gate and no reserved path/outward action is inferred.
  command: R-CLOSE; inspect mission_copy_diff.md; claim_evidence_map.md; formative_reader_pack.md and the DP3 disposition.
  red_test: Place a registry/predecessor write or an unsigned DP3 approval in a disposable mission_garnier_p1_3_mission_voice
    closure record; scope/authority review must reject it.
human_gate: DP2 accepted with six amendments on 2026-09-15; DP3 remains a human phase exit.
verification_surface: agent
verification_check_set: custom
calibration_status: uncalibrated
calibration_basis: Judgment estimate with stated workload; no measured GARNIER execution calibration.
budget_breakdown_original_kT:
  transition: 23
  bounded_objective_work: 40
budget_breakdown_kT: {"orientation": 20, "four_surface_editorial_work": 35, "evidence_and_formative_feedback_disposition": 25}
budget_status: committed_DP2
human_elapsed_time: operator recruitment and scheduling; not estimated as agent sessions
input_manifest: /about,/community,/commons,/network,/privacy,/state-of-the-network; public-good doctrine; existing consent/embargo records; P1
  storyboard
output_artifacts:
- mission_copy_diff.md
- claim_evidence_map.md
- formative_reader_pack.md
contract_version: garnier_amendment_20260915
---
# Make the public-good invitation concise

> **Read cold.** Act as Rosetta's executor for Stanley through Berthier. Read root and [[../CLAUDE|campaign governance]], [[campaign_garnier]], [[charter_ratification_20260915]], [[verification_recipes]] and this mission. DP1 and DP2 are accepted; read [[dp2_ratification_20260915]] and verify dependencies before execution. DP3 remains human.

## Why

[I] All six mission surfaces preserve Agentic DNA, opt-in sharing, current stewardship and aspiration/fact distinctions, with accessible heading order and evidence adjacency. Resolve FG-P0-002 privacy/state disclosure contradictions using observed telemetry evidence and matching HTML/twins. Operator-supplied formative humans (at least one per decisive class) test the P1 candidate before DP3; every material confusion has correction or explicit gate disposition.

## Where we are

[D] This is a specification amended on 2026-09-15 against the genesis packet at 5a0849a. The existing local build and source inventory are dated inputs; no new site behavior or human evidence was verified by this amendment. Read [[verification_report]] for genesis limitations and [[docs_review_scope]] for the assigned population. Refresh source/build identity at mission open.

## Scope

[I] Inputs: /about,/community,/commons,/network,/privacy,/state-of-the-network; public-good doctrine; existing consent/embargo records; P1 storyboard. Outputs: mission_copy_diff.md; claim_evidence_map.md; formative_reader_pack.md. Use the command contexts and output-path precautions in [[verification_recipes]]. No future verification is claimed passed by authoring this specification.

## Objectives

| # | Objective | Output | Gate |
|---|-----------|--------|------|
| 1 | All six mission surfaces preserve Agentic DNA, opt-in sharing, current stewardship and aspiration/fact distinctions, with accessible heading order and evidence adjacency. Resolve FG-P0-002 privacy/state disclosure contradictions using observed telemetry evidence and matching HTML/twins. | mission_copy_diff.md | ⛩ DP2 entry and C1 |
| 2 | Operator-supplied formative humans (at least one per decisive class) test the P1 candidate before DP3; every material confusion has correction or explicit gate disposition. | mission_copy_diff.md; claim_evidence_map.md; formative_reader_pack.md | C2 reached-surface evidence |
| 3 | Reconcile the actual diff, limitations and AAR | Mission evidence manifest and five-line AAR | ⛩ DP3 remains human |

## Constraints & gates

[I] Every hierarchy, typography, art or motion change must preserve semantic reading order, readable body text, focus, reduced-motion parity and equivalent text, checked on the actual affected routes in both themes; record not-applicable when no aesthetic change occurs. The storyboard and formative human review precede visual production. Word targets are advisory with written overage reasons; unsupported claims remain blocking.

[D] No edits to site/src/data/vaults.json, .adna, HAUSSMANN/VITRINE records or peer vaults. Registry asks are staged to Hestia. Provider pattern gaps are staged through the WebForge wrapper. Claim deltas stay GARNIER-owned for GR-7; read the predecessor register without editing it. No push, deploy or memo delivery is authorized here. Preserve ADR-048/049/053/057/059, Operations ADR-025 §D5, conditional H1/G4, counsel and the predecessor evidence freeze. Site changes are authorized for P1–P4 within the named mission scope after phase entry, including scoped hardening repairs; P0 and record-only closure work do not rewrite public copy.

## Goal and exit gate

[I] C1: All six mission surfaces preserve Agentic DNA, opt-in sharing, current stewardship and aspiration/fact distinctions, with accessible heading order and evidence adjacency. Resolve FG-P0-002 privacy/state disclosure contradictions using observed telemetry evidence and matching HTML/twins. C2: Operator-supplied formative humans (at least one per decisive class) test the P1 candidate before DP3; every material confusion has correction or explicit gate disposition. C3: mission_garnier_p1_3_mission_voice closes with a scoped diff, cited evidence and five-line AAR; DP3 remains a human gate and no reserved path/outward action is inferred.

## Verification and convention-13 pair audit

[I] This is a method-feasibility assessment, not executed acceptance. V1 and V2 are defined in frontmatter with concrete command/protocol references and controls; V3 uses R-CLOSE on this mission's actual diff. All nine pairs were assessed for the amended scope:

- V1×C1: covers the input/population contract by R-VOICE on /about,/community,/commons,/network,/privacy,/state-of-the-network; manual: map every revised institutional assertion to its exact clearance or held disposition.
- V1×C2: insufficient; inspecting /about,/community,/commons,/network,/privacy,/state-of-the-network; public-good doctrine; existing consent/embargo records; P1 storyboard cannot establish the behavior in C2; V2 must reach its named output.
- V1×C3: insufficient; input inspection does not prove the actual mission_garnier_p1_3_mission_voice diff or a human gate event.
- V2×C1: supplementary; producing mission_copy_diff.md; claim_evidence_map.md; formative_reader_pack.md does not prove the original input set was complete; retain V1.
- V2×C2: covers the behavior through reader_protocol formative protocol; R-CAPTURE on the six routes; report each individual observation without an aggregate success percentage.
- V2×C3: supplies behavioral evidence for mission_garnier_p1_3_mission_voice, but V3 must independently inspect scope and closure authority.
- V3×C1: checks that mission_copy_diff.md; claim_evidence_map.md; formative_reader_pack.md are present in the delivered set, not the truth or coverage of their contents.
- V3×C2: cannot replace reader_protocol formative protocol; R-CAPTURE on the six routes; report each individual observation without an aggregate success percentage.; a clean diff is not a runtime, reader or measurement result.
- V3×C3: covers the mission_garnier_p1_3_mission_voice changed paths, linked evidence, AAR and explicitly separate DP3 event via R-CLOSE.

The three methods jointly cover the three criteria; no individual method proves all three. Run controls before trusting their verdicts. V1 negative control: Insert a false endorsement or imply mandatory sharing: claim review must fail. V2 negative control: Relabel a synthetic response as human or omit a reader class: formative pack completeness review must reject it. V3 negative control: reject a disposable reserved-path change or unsigned phase acceptance. Controls are isolated, never planted into production or peer files. New reusable checkers are provider contributions, authored early with their red-tests in the same commit.

## Budget

[D] DP2 accepted the working forecast of **80 kT** on 2026-09-15; see [[dp2_ratification_20260915]]. Current breakdown: {"orientation": 20, "four_surface_editorial_work": 35, "evidence_and_formative_feedback_disposition": 25}. The original estimate below is preserved as history. Report actuals and remaining phase forecast at close; bounded work within the approved envelope needs no repeat permission.


[I] ADR-016 content-load estimate: {"transition": 23, "bounded_objective_work": 40} = **63 kT**. Estimated agent sittings: **1**; calibration is **unmeasured**, not a repeated estimate presented as measured data. The work allowance is a judgment forecast, not a limit on honest reporting. Human recruitment/response time is excluded. Independent scoring work must be included in actuals rather than disappearing from the coordinator's accounting. See [[budget_basis]] for uncertainty and phase commitment. Re-scope at the next gate if projected work exceeds the bounded contract; do not silently skip routes. Billing is separately measured or reported unavailable.

## Definition of done

C1/C2/C3 are satisfied on their stated surfaces with evidence and controls, every output is linked, changed claims and accessibility consequences are documented, scope stays within authority, and the SITREP, next prompt and AAR are filed. A manual or human item remains owed until performed. Append this mission's objective/finding/budget evidence to the rolling closure ledger during work; P6 reconciles it rather than reconstructing the campaign at the end. A human phase gate remains pending until the operator rules.

## Campaign context

Previous: [[mission_garnier_p1_2_quickstart_voice]]. Next: [[mission_garnier_p2_1_proof_lineage]]. [[campaign_architecture]] and [[charter_ratification_20260915]] govern scope/budgets.

## Progress

[D] C1 six-route copy/disclosure corrections and source/twin checks delivered. C2 owes operator-supplied consenting formative humans; synthetic reads do not satisfy it. C3 sitting evidence is filed, mission closure pending. See [[mission_copy_diff]], [[claim_evidence_map]] and [[formative_reader_pack]].

## Completion Summary

[D] Source candidate b1cf040. Evidence: [[how/campaigns/campaign_garnier/artifacts/p1/verification_report]]. Implementation delivered; the named evidence gap above prevents completion. No publication, predecessor mutation or peer delivery. [I] Rough actual 40±20kT; API billing unavailable. Remaining P1 follow-up estimate25–50kT across the phase, excluding human waiting.

## AAR

- **Worked:** [D] Concrete file mechanisms, scoped disclosures and complete local checks retained the honest boundaries.
- **Did not:** [D] Early build/selector/theme defects and a missing clean-container agent prerequisite prevented treating the first attempts as complete evidence.
- **Finding:** [D] Synthetic comprehension, rendered source correctness and authenticated task completion are separate surfaces.
- **Change:** [D] Corrected source/copy, process controls and explicit evidence populations; preserved failed attempts.
- **Follow-up:** [I] Supply the owed first-task/human evidence, correct observations and close only when the stated criteria hold.

## P0-derived budget proposal — historical, accepted at DP2

[I] The original estimate remains above. Proposed reforecast 80 kT includes {"orientation": 20, "four_surface_editorial_work": 35, "evidence_and_formative_feedback_disposition": 25}. This proposal was accepted at DP2 with six amendments; human waiting time and billing currency are excluded. See [[p0_estimation_retrospective]].

## DP2 execution discipline

[D] [[dp2_ratification_20260915]] governs this scope. Reuse the frozen P0 findings; bound and record reviewer inputs, linked-page allowance and stop conditions before any prescreen. Account for independent work and reruns once. Report actual workload and remaining phase forecast at each close. Keep human, synthetic, local and deployed evidence distinct.

[D] DP2 pair-audit supplement: V1×C1 now reaches all six routes and their twins, including privacy/state assertions against transport evidence; it rejects unsupported collection or non-collection claims. V2×C1 adds captures for those routes but cannot prove collector receipt. V3×C1 checks the six-route disposition ledger. V1×C2/C3, V2×C2/C3 and V3×C2/C3 retain their recorded roles. P4.1 owns collector/field verification; no collection success is inferred from script delivery. The 80 kT working envelope includes this bounded disclosure correction; report forecast drift before expanding.

## Evidence continuation — 2026-09-15

[D] The local preview and de-identified worksheet are ready; Stanley chose local collection under the existing protocol. No human observation or consent record has arrived, so C2 remains owed. Calibration/scoring will run only when actual records exist. See [[first_task_continuation]] and [[session_stanley_20260915_112428_garnier_p1_evidence]]. Status remains in_progress; historical implementation and AAR above are preserved.

[I] Allocated continuation workload 10 kT; cumulative mission rough actual 50±25 kT. The shared sitting is counted once in phase totals. Remaining phase estimate 20–35 kT after inputs arrive; billing unavailable. Latest phase actuals and limitations are in [[first_task_continuation]].
