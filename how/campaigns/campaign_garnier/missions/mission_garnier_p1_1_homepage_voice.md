---
plan_id: mission_garnier_p1_1_homepage_voice
type: plan
title: Make the homepage demonstrate the mechanism
owner: stanley
status: queued
campaign_id: campaign_garnier
campaign: campaign_garnier
campaign_phase: 1
campaign_mission_number: 3
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
token_budget_estimated: 150
token_budget_original: 62
token_budget_unit: kT_content_load
token_budget_reforecast_proposed: 150
reforecast_status: accepted_DP2
reforecast_basis: {"coordinator_copy_storyboard_checks": 70, "three_fresh_prescreens": 60, "two_keyed_graders": 20}
estimated_sessions: 1
calibrated_sessions: null
estimation_class: content-novel
decade_status: scope_approved_phase_budgeted
vitruvius_dimensions:
- D1
- D3
- D6
webforge_patterns:
- how/federation/webforge/
patterns_to_author: []
depends_on:
- mission_garnier_p0_2_instruments
blocks:
- mission_garnier_p1_2_quickstart_voice
acceptance_criteria:
- 'C1: Low-fidelity storyboard orders mechanism, working example, shared-cultural-heritage rationale and participation
  before visual production, with text/DOM reading order preserved.'
- 'C2: Rendered home/twin agree, claims cite evidence, word-target exceptions are justified, and fresh-context synthetic
  reads record confusions before DP3 formative humans.'
- 'C3: mission_garnier_p1_1_homepage_voice closes with a scoped diff, cited evidence and five-line AAR; DP3 remains
  a human gate and no reserved path/outward action is inferred.'
- 'C4: Experimental checks used as approval gates reject empty/incomplete/duplicate capture populations and actual blocking vocabulary violations with nonzero exit; positive controls pass and frozen P0 evidence is preserved.'
verification_method:
- id: V1
  surface: home source/twin; front_page_doctrine; existing primitive; word_budgets; reader_protocol
  method: Low-fidelity storyboard orders mechanism, working example, shared-cultural-heritage rationale and participation
    before visual production, with text/DOM reading order preserved.
  command: 'Manual: annotate four storyboard sections with source artifact and action; R-VOICE on /; R-CAPTURE on
    /.'
  red_test: 'Remove the primitive or put an unsupported frontier-model claim in the storyboard: editorial review
    must reject it.'
- id: V2
  surface: homepage_storyboard.md; homepage_copy_diff.md; homepage_claim_map.md
  method: Rendered home/twin agree, claims cite evidence, word-target exceptions are justified, and fresh-context
    synthetic reads record confusions before DP3 formative humans.
  command: R-SITE; R-VOICE /; reader_protocol synthetic prescreen; R-CAPTURE / including art-disabled reading.
  red_test: 'Conceal a required explanation in art or change only the HTML copy: text-equivalence/twin review must
    fail.'
- id: V3
  surface: mission_garnier_p1_1_homepage_voice base-to-final diff, evidence manifest and AAR
  method: mission_garnier_p1_1_homepage_voice closes with a scoped diff, cited evidence and five-line AAR; DP3 remains
    a human gate and no reserved path/outward action is inferred.
  command: R-CLOSE; inspect homepage_storyboard.md; homepage_copy_diff.md; homepage_claim_map.md and the DP3 disposition.
  red_test: Place a registry/predecessor write or an unsigned DP3 approval in a disposable mission_garnier_p1_1_homepage_voice
    closure record; scope/authority review must reject it.
- id: V4
  surface: candidate capture matrix and rendered-prose population; consuming runner process exits; instrument_adoption_controls.md
  method: Demonstrate the adopted blocking checks reject incomplete populations and actual prohibited prose, while clean input passes.
  command: 'Run C4 adoption protocol from this mission in disposable fixtures; record expected population, argv, stdout/stderr and exit status; preserve frozen P0.'
  red_test: 'Empty/missing/duplicate matrix cells and a real banned-prose candidate must exit nonzero; a complete clean candidate must exit zero.'
human_gate: DP2 accepted with six amendments on 2026-09-15; DP3 remains a human phase exit.
verification_surface: agent
verification_check_set: custom
calibration_status: uncalibrated
calibration_basis: Judgment estimate with stated workload; no measured GARNIER execution calibration.
budget_breakdown_original_kT:
  transition: 23
  bounded_objective_work: 39
budget_breakdown_kT: {"coordinator_copy_storyboard_checks": 70, "three_fresh_prescreens": 60, "two_keyed_graders": 20}
budget_status: committed_DP2
human_elapsed_time: phase-gate response time excluded
input_manifest: home source/twin; front_page_doctrine; existing primitive; word_budgets; reader_protocol
output_artifacts:
- instrument_adoption_controls.md
- homepage_storyboard.md
- homepage_copy_diff.md
- homepage_claim_map.md
contract_version: garnier_amendment_20260915
---
# Make the homepage demonstrate the mechanism

> **Read cold.** Act as Rosetta's executor for Stanley through Berthier. Read root and [[../CLAUDE|campaign governance]], [[campaign_garnier]], [[charter_ratification_20260915]], [[verification_recipes]] and this mission. DP1 and DP2 are accepted; read [[dp2_ratification_20260915]] and verify dependencies before execution. DP3 remains human.

## Why

[I] Low-fidelity storyboard orders mechanism, working example, shared-cultural-heritage rationale and participation before visual production, with text/DOM reading order preserved. Rendered home/twin agree, claims cite evidence, word-target exceptions are justified, and fresh-context synthetic reads record confusions before DP3 formative humans.

## Where we are

[D] This is a specification amended on 2026-09-15 against the genesis packet at 5a0849a. The existing local build and source inventory are dated inputs; no new site behavior or human evidence was verified by this amendment. Read [[verification_report]] for genesis limitations and [[docs_review_scope]] for the assigned population. Refresh source/build identity at mission open.

## Scope

[I] Inputs: home source/twin; front_page_doctrine; existing primitive; word_budgets; reader_protocol. Outputs: homepage_storyboard.md; homepage_copy_diff.md; homepage_claim_map.md. Use the command contexts and output-path precautions in [[verification_recipes]]. No future verification is claimed passed by authoring this specification.

## Objectives

| # | Objective | Output | Gate |
|---|-----------|--------|------|
| 1 | Low-fidelity storyboard orders mechanism, working example, shared-cultural-heritage rationale and participation before visual production, with text/DOM reading order preserved. | homepage_storyboard.md | ⛩ DP2 entry and C1 |
| 2 | Rendered home/twin agree, claims cite evidence, word-target exceptions are justified, and fresh-context synthetic reads record confusions before DP3 formative humans. | homepage_storyboard.md; homepage_copy_diff.md; homepage_claim_map.md | C2 reached-surface evidence |
| 3 | Reconcile the actual diff, limitations and AAR | Mission evidence manifest and five-line AAR | ⛩ DP3 remains human |

| 4 | Prove blocking behavior before experimental gate adoption; preserve P0 evidence | instrument_adoption_controls.md | C4 before approval use |

## Constraints & gates

[I] Every hierarchy, typography, art or motion change must preserve semantic reading order, readable body text, focus, reduced-motion parity and equivalent text, checked on the actual affected routes in both themes; record not-applicable when no aesthetic change occurs. The storyboard and formative human review precede visual production. Word targets are advisory with written overage reasons; unsupported claims remain blocking.

[D] No edits to site/src/data/vaults.json, .adna, HAUSSMANN/VITRINE records or peer vaults. Registry asks are staged to Hestia. Provider pattern gaps are staged through the WebForge wrapper. Claim deltas stay GARNIER-owned for GR-7; read the predecessor register without editing it. No push, deploy or memo delivery is authorized here. Preserve ADR-048/049/053/057/059, Operations ADR-025 §D5, conditional H1/G4, counsel and the predecessor evidence freeze. Site changes are authorized for P1–P4 within the named mission scope after phase entry, including scoped hardening repairs; P0 and record-only closure work do not rewrite public copy.

## Goal and exit gate

[I] C1: Low-fidelity storyboard orders mechanism, working example, shared-cultural-heritage rationale and participation before visual production, with text/DOM reading order preserved. C2: Rendered home/twin agree, claims cite evidence, word-target exceptions are justified, and fresh-context synthetic reads record confusions before DP3 formative humans. C3: mission_garnier_p1_1_homepage_voice closes with a scoped diff, cited evidence and five-line AAR; DP3 remains a human gate and no reserved path/outward action is inferred.

## Verification and convention-13 pair audit

[I] This is a method-feasibility assessment, not executed acceptance. V1 and V2 are defined in frontmatter with concrete command/protocol references and controls; V3 uses R-CLOSE on this mission's actual diff. All nine pairs were assessed for the amended scope:

- V1×C1: covers the input/population contract by Manual: annotate four storyboard sections with source artifact and action; R-VOICE on /; R-CAPTURE on /.
- V1×C2: insufficient; inspecting home source/twin; front_page_doctrine; existing primitive; word_budgets; reader_protocol cannot establish the behavior in C2; V2 must reach its named output.
- V1×C3: insufficient; input inspection does not prove the actual mission_garnier_p1_1_homepage_voice diff or a human gate event.
- V2×C1: supplementary; producing homepage_storyboard.md; homepage_copy_diff.md; homepage_claim_map.md does not prove the original input set was complete; retain V1.
- V2×C2: covers the behavior through R-SITE; R-VOICE /; reader_protocol synthetic prescreen; R-CAPTURE / including art-disabled reading.
- V2×C3: supplies behavioral evidence for mission_garnier_p1_1_homepage_voice, but V3 must independently inspect scope and closure authority.
- V3×C1: checks that homepage_storyboard.md; homepage_copy_diff.md; homepage_claim_map.md are present in the delivered set, not the truth or coverage of their contents.
- V3×C2: cannot replace R-SITE; R-VOICE /; reader_protocol synthetic prescreen; R-CAPTURE / including art-disabled reading.; a clean diff is not a runtime, reader or measurement result.
- V3×C3: covers the mission_garnier_p1_1_homepage_voice changed paths, linked evidence, AAR and explicitly separate DP3 event via R-CLOSE.

The three methods jointly cover the three criteria; no individual method proves all three. Run controls before trusting their verdicts. V1 negative control: Remove the primitive or put an unsupported frontier-model claim in the storyboard: editorial review must reject it. V2 negative control: Conceal a required explanation in art or change only the HTML copy: text-equivalence/twin review must fail. V3 negative control: reject a disposable reserved-path change or unsigned phase acceptance. Controls are isolated, never planted into production or peer files. New reusable checkers are provider contributions, authored early with their red-tests in the same commit.

## Budget

[D] DP2 accepted the working forecast of **150 kT** on 2026-09-15; see [[dp2_ratification_20260915]]. Current breakdown: {"coordinator_copy_storyboard_checks": 70, "three_fresh_prescreens": 60, "two_keyed_graders": 20}. The original estimate below is preserved as history. Report actuals and remaining phase forecast at close; bounded work within the approved envelope needs no repeat permission.


[I] ADR-016 content-load estimate: {"transition": 23, "bounded_objective_work": 39} = **62 kT**. Estimated agent sittings: **1**; calibration is **unmeasured**, not a repeated estimate presented as measured data. The work allowance is a judgment forecast, not a limit on honest reporting. Human recruitment/response time is excluded. Independent scoring work must be included in actuals rather than disappearing from the coordinator's accounting. See [[budget_basis]] for uncertainty and phase commitment. Re-scope at the next gate if projected work exceeds the bounded contract; do not silently skip routes. Billing is separately measured or reported unavailable.

## Definition of done

C1/C2/C3/C4 are satisfied on their stated surfaces with evidence and controls, every output is linked, changed claims and accessibility consequences are documented, scope stays within authority, and the SITREP, next prompt and AAR are filed. A manual or human item remains owed until performed. Append this mission's objective/finding/budget evidence to the rolling closure ledger during work; P6 reconciles it rather than reconstructing the campaign at the end. A human phase gate remains pending until the operator rules.

## Campaign context

Previous: [[mission_garnier_p0_2_instruments]]. Next: [[mission_garnier_p1_2_quickstart_voice]]. [[campaign_architecture]] and [[charter_ratification_20260915]] govern scope/budgets.

## Progress

Queued. Specification amended; no campaign acceptance criterion has been executed by this records-only sitting.

## Completion Summary

Deliverables: pending execution. Descoped: none. Key findings: pending. Scope changes: approved charter amendments; exact tranche assignment where applicable.

## AAR

- **Worked:** pending execution.
- **Did not:** pending execution.
- **Finding:** pending execution.
- **Change:** pending execution.
- **Follow-up:** pending execution.

## P0-derived budget proposal — historical, accepted at DP2

[I] The original estimate remains above. Proposed reforecast 150 kT includes {"coordinator_copy_storyboard_checks": 70, "three_fresh_prescreens": 60, "two_keyed_graders": 20}. This proposal was accepted at DP2 with six amendments; human waiting time and billing currency are excluded. See [[p0_estimation_retrospective]].

## DP2 execution discipline

[D] [[dp2_ratification_20260915]] governs this scope. Reuse the frozen P0 findings; bound and record reviewer inputs, linked-page allowance and stop conditions before any prescreen. Account for independent work and reruns once. Report actual workload and remaining phase forecast at each close. Keep human, synthetic, local and deployed evidence distinct.

## DP2 first deliverable and instrument adoption

[D] First deliver a reviewable homepage/storyboard with the mechanism, actual file/code example and next action, before further broad research. Use “AI DNA” as an explanatory bridge while retaining Agentic DNA; show the shared-cultural-heritage rationale and voluntary participation in accessible text after the example. Preserve semantic reading order, clear labels and equivalent text.

[I] C4 supplements V1/V2 before their verdicts can approve this mission. V1 inventories the expected route × viewport × theme cells and the exact candidate HTML/twin population. V2 runs positive controls plus empty, missing-cell, duplicate-cell, wrong-theme, missing-capture and actual banned-prose failures through the proposed consuming runner; assert nonzero exit for blocking failures and zero for clean input. Preserve output/argv/exit receipts in instrument_adoption_controls.md. An advisory report alone cannot satisfy a blocking criterion. Version new receipts outside frozen evidence/p0; provider contributions remain staged via the wrapper and receive red-tests in the same early commit.

[I] Convention-13 additions: V1×C4 establishes expected nonempty population but cannot prove process failure; V2×C4 reaches the consuming process and its exit status for each positive/negative fixture; V3×C4 checks receipt linkage and frozen-pack preservation without substituting for execution. Existing nine pairs retain their roles. C4 is pending execution, not claimed passed at ratification.

[I] Dedicated V4 pair audit: V4×C1 supplements the changed-surface population but does not establish the storyboard; V4×C2 supplies instrument trust but cannot replace content/twin review or readers; V4×C3 supplies receipts but cannot authorize closure; V4×C4 directly reaches positive/negative consuming-process exits. Together with the original nine and V1–V3×C4 supplement, all sixteen method/criterion pairs are assessed for feasibility; no execution pass is claimed.
