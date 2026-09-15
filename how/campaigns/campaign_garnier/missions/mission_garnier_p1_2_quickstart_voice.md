---
plan_id: mission_garnier_p1_2_quickstart_voice
type: plan
title: Bring the first task into focus
owner: stanley
status: in_progress
campaign_id: campaign_garnier
campaign: campaign_garnier
campaign_phase: 1
campaign_mission_number: 4
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
token_budget_estimated: 90
token_budget_original: 61
token_budget_unit: kT_content_load
token_budget_actual: 135
token_budget_actual_uncertainty: 50
token_budget_actual_basis: rough_content_load_including_reviews_planning_and_evidence_continuation
actual_sessions: 2
token_budget_reforecast_proposed: 90
reforecast_status: accepted_DP2
reforecast_basis: {"orientation": 30, "source_and_clean_reproduction": 35, "copy_checks": 25}
estimated_sessions: 1
calibrated_sessions: null
estimation_class: content-novel
decade_status: scope_approved_phase_budgeted
vitruvius_dimensions:
- D3
- D6
- D11
webforge_patterns:
- how/federation/webforge/
patterns_to_author: []
depends_on:
- mission_garnier_p1_1_homepage_voice
blocks:
- mission_garnier_p1_3_mission_voice
acceptance_criteria:
- 'C1: Every first task has exact command, prerequisites, expected result and recovery path in its rendered article
  and twin; explanation target overages have reasons.'
- 'C2: Copy the rendered executable string and reproduce the local first task in a disposable environment; distinguish
  automated reproduction from human TTFS.'
- 'C3: mission_garnier_p1_2_quickstart_voice closes with a scoped diff, cited evidence and five-line AAR; DP3 remains
  a human gate and no reserved path/outward action is inferred.'
verification_method:
- id: V1
  surface: /get-started; /learn/what-is-adna; /get-started/what-your-agent-reads subtree; command prerequisites
  method: Every first task has exact command, prerequisites, expected result and recovery path in its rendered article
    and twin; explanation target overages have reasons.
  command: R-VOICE on /get-started,/learn/what-is-adna; R-SOURCE for all tour routes from docs_population other_routes.
  red_test: 'Remove a prerequisite from the rendered page while retaining it in source: instruction review must
    fail.'
- id: V2
  surface: quickstart_copy_diff.md; instruction_ledger.md; command_transcripts.md
  method: Copy the rendered executable string and reproduce the local first task in a disposable environment; distinguish
    automated reproduction from human TTFS.
  command: 'R-SITE; manual: copy each first-task command from the preview and execute exactly in a clean disposable
    directory, recording argv/version/exit/output; never run publishing steps.'
  red_test: 'Alter a copy-button payload to a stale command in a disposable fixture: copied-string comparison must
    fail.'
- id: V3
  surface: mission_garnier_p1_2_quickstart_voice base-to-final diff, evidence manifest and AAR
  method: mission_garnier_p1_2_quickstart_voice closes with a scoped diff, cited evidence and five-line AAR; DP3
    remains a human gate and no reserved path/outward action is inferred.
  command: R-CLOSE; inspect quickstart_copy_diff.md; instruction_ledger.md; command_transcripts.md and the DP3 disposition.
  red_test: Place a registry/predecessor write or an unsigned DP3 approval in a disposable mission_garnier_p1_2_quickstart_voice
    closure record; scope/authority review must reject it.
human_gate: DP2 accepted with six amendments on 2026-09-15; DP3 remains a human phase exit.
verification_surface: agent
verification_check_set: custom
calibration_status: uncalibrated
calibration_basis: Judgment estimate with stated workload; no measured GARNIER execution calibration.
budget_breakdown_original_kT:
  transition: 23
  bounded_objective_work: 38
budget_breakdown_kT: {"orientation": 30, "source_and_clean_reproduction": 35, "copy_checks": 25}
budget_status: committed_DP2
human_elapsed_time: phase-gate response time excluded
input_manifest: /get-started; /learn/what-is-adna; /get-started/what-your-agent-reads subtree; command prerequisites
output_artifacts:
- quickstart_copy_diff.md
- instruction_ledger.md
- command_transcripts.md
contract_version: garnier_amendment_20260915
---
# Bring the first task into focus

> **Read cold.** Act as Rosetta's executor for Stanley through Berthier. Read root and [[../CLAUDE|campaign governance]], [[campaign_garnier]], [[charter_ratification_20260915]], [[verification_recipes]] and this mission. DP1 and DP2 are accepted; read [[dp2_ratification_20260915]] and verify dependencies before execution. DP3 remains human.

## Why

[I] Every first task has exact command, prerequisites, expected result and recovery path in its rendered article and twin; explanation target overages have reasons. Copy the rendered executable string and reproduce the local first task in a disposable environment; distinguish automated reproduction from human TTFS.

## Where we are

[D] This is a specification amended on 2026-09-15 against the genesis packet at 5a0849a. The existing local build and source inventory are dated inputs; no new site behavior or human evidence was verified by this amendment. Read [[verification_report]] for genesis limitations and [[docs_review_scope]] for the assigned population. Refresh source/build identity at mission open.

## Scope

[I] Inputs: /get-started; /learn/what-is-adna; /get-started/what-your-agent-reads subtree; command prerequisites. Outputs: quickstart_copy_diff.md; instruction_ledger.md; command_transcripts.md. Use the command contexts and output-path precautions in [[verification_recipes]]. No future verification is claimed passed by authoring this specification.

## Objectives

| # | Objective | Output | Gate |
|---|-----------|--------|------|
| 1 | Every first task has exact command, prerequisites, expected result and recovery path in its rendered article and twin; explanation target overages have reasons. | quickstart_copy_diff.md | ⛩ DP2 entry and C1 |
| 2 | Copy the rendered executable string and reproduce the local first task in a disposable environment; distinguish automated reproduction from human TTFS. | quickstart_copy_diff.md; instruction_ledger.md; command_transcripts.md | C2 reached-surface evidence |
| 3 | Reconcile the actual diff, limitations and AAR | Mission evidence manifest and five-line AAR | ⛩ DP3 remains human |

## Constraints & gates

[I] Every hierarchy, typography, art or motion change must preserve semantic reading order, readable body text, focus, reduced-motion parity and equivalent text, checked on the actual affected routes in both themes; record not-applicable when no aesthetic change occurs. The storyboard and formative human review precede visual production. Word targets are advisory with written overage reasons; unsupported claims remain blocking.

[D] No edits to site/src/data/vaults.json, .adna, HAUSSMANN/VITRINE records or peer vaults. Registry asks are staged to Hestia. Provider pattern gaps are staged through the WebForge wrapper. Claim deltas stay GARNIER-owned for GR-7; read the predecessor register without editing it. No push, deploy or memo delivery is authorized here. Preserve ADR-048/049/053/057/059, Operations ADR-025 §D5, conditional H1/G4, counsel and the predecessor evidence freeze. Site changes are authorized for P1–P4 within the named mission scope after phase entry, including scoped hardening repairs; P0 and record-only closure work do not rewrite public copy.

## Goal and exit gate

[I] C1: Every first task has exact command, prerequisites, expected result and recovery path in its rendered article and twin; explanation target overages have reasons. C2: Copy the rendered executable string and reproduce the local first task in a disposable environment; distinguish automated reproduction from human TTFS. C3: mission_garnier_p1_2_quickstart_voice closes with a scoped diff, cited evidence and five-line AAR; DP3 remains a human gate and no reserved path/outward action is inferred.

## Verification and convention-13 pair audit

[I] This is a method-feasibility assessment, not executed acceptance. V1 and V2 are defined in frontmatter with concrete command/protocol references and controls; V3 uses R-CLOSE on this mission's actual diff. All nine pairs were assessed for the amended scope:

- V1×C1: covers the input/population contract by R-VOICE on /get-started,/learn/what-is-adna; R-SOURCE for all tour routes from docs_population other_routes.
- V1×C2: insufficient; inspecting /get-started; /learn/what-is-adna; /get-started/what-your-agent-reads subtree; command prerequisites cannot establish the behavior in C2; V2 must reach its named output.
- V1×C3: insufficient; input inspection does not prove the actual mission_garnier_p1_2_quickstart_voice diff or a human gate event.
- V2×C1: supplementary; producing quickstart_copy_diff.md; instruction_ledger.md; command_transcripts.md does not prove the original input set was complete; retain V1.
- V2×C2: covers the behavior through R-SITE; manual: copy each first-task command from the preview and execute exactly in a clean disposable directory, recording argv/version/exit/output; never run publishing steps.
- V2×C3: supplies behavioral evidence for mission_garnier_p1_2_quickstart_voice, but V3 must independently inspect scope and closure authority.
- V3×C1: checks that quickstart_copy_diff.md; instruction_ledger.md; command_transcripts.md are present in the delivered set, not the truth or coverage of their contents.
- V3×C2: cannot replace R-SITE; manual: copy each first-task command from the preview and execute exactly in a clean disposable directory, recording argv/version/exit/output; never run publishing steps.; a clean diff is not a runtime, reader or measurement result.
- V3×C3: covers the mission_garnier_p1_2_quickstart_voice changed paths, linked evidence, AAR and explicitly separate DP3 event via R-CLOSE.

The three methods jointly cover the three criteria; no individual method proves all three. Run controls before trusting their verdicts. V1 negative control: Remove a prerequisite from the rendered page while retaining it in source: instruction review must fail. V2 negative control: Alter a copy-button payload to a stale command in a disposable fixture: copied-string comparison must fail. V3 negative control: reject a disposable reserved-path change or unsigned phase acceptance. Controls are isolated, never planted into production or peer files. New reusable checkers are provider contributions, authored early with their red-tests in the same commit.

## Budget

[D] DP2 accepted the working forecast of **90 kT** on 2026-09-15; see [[dp2_ratification_20260915]]. Current breakdown: {"orientation": 30, "source_and_clean_reproduction": 35, "copy_checks": 25}. The original estimate below is preserved as history. Report actuals and remaining phase forecast at close; bounded work within the approved envelope needs no repeat permission.


[I] ADR-016 content-load estimate: {"transition": 23, "bounded_objective_work": 38} = **61 kT**. Estimated agent sittings: **1**; calibration is **unmeasured**, not a repeated estimate presented as measured data. The work allowance is a judgment forecast, not a limit on honest reporting. Human recruitment/response time is excluded. Independent scoring work must be included in actuals rather than disappearing from the coordinator's accounting. See [[budget_basis]] for uncertainty and phase commitment. Re-scope at the next gate if projected work exceeds the bounded contract; do not silently skip routes. Billing is separately measured or reported unavailable.

## Definition of done

C1/C2/C3 are satisfied on their stated surfaces with evidence and controls, every output is linked, changed claims and accessibility consequences are documented, scope stays within authority, and the SITREP, next prompt and AAR are filed. A manual or human item remains owed until performed. Append this mission's objective/finding/budget evidence to the rolling closure ledger during work; P6 reconciles it rather than reconstructing the campaign at the end. A human phase gate remains pending until the operator rules.

## Campaign context

Previous: [[mission_garnier_p1_1_homepage_voice]]. Next: [[mission_garnier_p1_3_mission_voice]]. [[campaign_architecture]] and [[charter_ratification_20260915]] govern scope/budgets.

## Progress

[D] C1 implemented and verified locally, including source-tour correction and explicit first task. C2 partial: exact rendered command cloned/entered the public image in a disposable container, then exited127 because Claude Code was absent. Authenticated project creation is owed. C3 sitting evidence is filed; mission closure remains pending. See [[instruction_ledger]] and [[command_transcripts]].

## Completion Summary

[D] Source candidate b1cf040. Evidence: [[how/campaigns/campaign_garnier/artifacts/p1/verification_report]]. Implementation delivered; the named evidence gap above prevents completion. No publication, predecessor mutation or peer delivery. [I] Rough actual 75±25kT; API billing unavailable. Remaining P1 follow-up estimate25–50kT across the phase, excluding human waiting.

## AAR

- **Worked:** [D] Concrete file mechanisms, scoped disclosures and complete local checks retained the honest boundaries.
- **Did not:** [D] Early build/selector/theme defects and a missing clean-container agent prerequisite prevented treating the first attempts as complete evidence.
- **Finding:** [D] Synthetic comprehension, rendered source correctness and authenticated task completion are separate surfaces.
- **Change:** [D] Corrected source/copy, process controls and explicit evidence populations; preserved failed attempts.
- **Follow-up:** [I] Supply the owed first-task/human evidence, correct observations and close only when the stated criteria hold.

## P0-derived budget proposal — historical, accepted at DP2

[I] The original estimate remains above. Proposed reforecast 90 kT includes {"orientation": 30, "source_and_clean_reproduction": 35, "copy_checks": 25}. This proposal was accepted at DP2 with six amendments; human waiting time and billing currency are excluded. See [[p0_estimation_retrospective]].

## DP2 execution discipline

[D] [[dp2_ratification_20260915]] governs this scope. Reuse the frozen P0 findings; bound and record reviewer inputs, linked-page allowance and stop conditions before any prescreen. Account for independent work and reruns once. Report actual workload and remaining phase forecast at each close. Keep human, synthetic, local and deployed evidence distinct.

## Evidence continuation — 2026-09-15

[D] C2 reached the installed CLI and first model request, then failed for insufficient API credit. No project was created; the first two file checks pass, the remaining three fail, and fresh-session recognition is untested. A funded broker credential or actual completed transcript is the next input. See [[first_task_continuation]] and [[session_stanley_20260915_112428_garnier_p1_evidence]]. Status remains in_progress; historical implementation and AAR above are preserved.

[I] Allocated continuation workload 60 kT; cumulative mission rough actual 135±50 kT. The shared sitting is counted once in phase totals. Remaining phase estimate 20–35 kT after inputs arrive; billing unavailable. Latest phase actuals and limitations are in [[first_task_continuation]].
