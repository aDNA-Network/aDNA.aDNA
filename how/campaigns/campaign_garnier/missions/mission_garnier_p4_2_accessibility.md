---
plan_id: mission_garnier_p4_2_accessibility
type: plan
title: Verify accessibility beyond automation
owner: stanley
status: queued
campaign_id: campaign_garnier
campaign: campaign_garnier
campaign_phase: 4
campaign_mission_number: 28
mission_class: verification
created: '2026-09-14'
updated: '2026-09-15'
last_edited_by: agent_codex
tags:
- plan
- campaign
- garnier
executor_tier: opus
executor_runtime: codex
token_budget_estimated: 79
token_budget_unit: kT_content_load
estimated_sessions: 2
calibrated_sessions: null
estimation_class: governance-tight
decade_status: provisional_until_DP4
vitruvius_dimensions:
- D5
- D11
webforge_patterns:
- how/federation/webforge/
patterns_to_author: []
depends_on:
- mission_garnier_p4_1_performance
blocks:
- mission_garnier_p4_3_regression
acceptance_criteria:
- 'C1: Every expected route×viewport×theme axe row is reached, with zero violations; missing rows are failures.'
- 'C2: Keyboard, zoom/reflow and manual assistive-tech flows preserve reading order, focus, labels, code recovery
  and equivalent diagram information.'
- 'C3: mission_garnier_p4_2_accessibility closes with a scoped diff, cited evidence and five-line AAR; DP6 remains
  a human gate and no reserved path/outward action is inferred.'
verification_method:
- id: V1
  surface: changed templates and user flows; existing manual AA protocol; assistive-tech coverage
  method: Every expected route×viewport×theme axe row is reached, with zero violations; missing rows are failures.
  command: R-CAPTURE all changed template representatives plus seven first-contact routes; R-SITE.
  red_test: 'Omit mobile dark or inject a missing input label: coverage/axe checks must fail.'
- id: V2
  surface: accessibility_pack.md; manual_flow_record.md
  method: Keyboard, zoom/reflow and manual assistive-tech flows preserve reading order, focus, labels, code recovery
    and equivalent diagram information.
  command: 'Manual protocol from doctrine_web_quality_assessment: navigate home→first task, search/docs, community
    proposal and graph keyboard twin; record AT/browser/version and actual observations.'
  red_test: 'Place a focus trap or remove diagram text equivalent in a disposable page: manual task must identify
    the defect; automation alone cannot close the criterion.'
- id: V3
  surface: mission_garnier_p4_2_accessibility base-to-final diff, evidence manifest and AAR
  method: mission_garnier_p4_2_accessibility closes with a scoped diff, cited evidence and five-line AAR; DP6 remains
    a human gate and no reserved path/outward action is inferred.
  command: R-CLOSE; inspect accessibility_pack.md; manual_flow_record.md and the DP6 disposition.
  red_test: Place a registry/predecessor write or an unsigned DP6 approval in a disposable mission_garnier_p4_2_accessibility
    closure record; scope/authority review must reject it.
human_gate: DP5 phase entry/budget; DP6 phase exit. DP1 accepted with amendments on 2026-09-15.
verification_surface: operator
verification_check_set: custom
calibration_status: uncalibrated
calibration_basis: Judgment estimate with stated workload; no measured GARNIER execution calibration.
budget_breakdown_kT:
  transition: 46
  bounded_objective_work: 33
budget_status: provisional_until_DP5
human_elapsed_time: phase-gate response time excluded
input_manifest: changed templates and user flows; existing manual AA protocol; assistive-tech coverage
output_artifacts:
- accessibility_pack.md
- manual_flow_record.md
contract_version: garnier_amendment_20260915
---
# Verify accessibility beyond automation

> **Read cold.** Act as Rosetta's executor for Stanley through Berthier. Read root and [[../CLAUDE|campaign governance]], [[campaign_garnier]], [[charter_ratification_20260915]], [[verification_recipes]] and this mission. DP1 is accepted; verify the named later phase gate before execution.

## Why

[I] Every expected route×viewport×theme axe row is reached, with zero violations; missing rows are failures. Keyboard, zoom/reflow and manual assistive-tech flows preserve reading order, focus, labels, code recovery and equivalent diagram information.

## Where we are

[D] This is a specification amended on 2026-09-15 against the genesis packet at 5a0849a. The existing local build and source inventory are dated inputs; no new site behavior or human evidence was verified by this amendment. Read [[verification_report]] for genesis limitations and [[docs_review_scope]] for the assigned population. Refresh source/build identity at mission open.

## Scope

[I] Inputs: changed templates and user flows; existing manual AA protocol; assistive-tech coverage. Outputs: accessibility_pack.md; manual_flow_record.md. Use the command contexts and output-path precautions in [[verification_recipes]]. No future verification is claimed passed by authoring this specification.

## Objectives

| # | Objective | Output | Gate |
|---|-----------|--------|------|
| 1 | Every expected route×viewport×theme axe row is reached, with zero violations; missing rows are failures. | accessibility_pack.md | ⛩ DP5 entry and C1 |
| 2 | Keyboard, zoom/reflow and manual assistive-tech flows preserve reading order, focus, labels, code recovery and equivalent diagram information. | accessibility_pack.md; manual_flow_record.md | C2 reached-surface evidence |
| 3 | Reconcile the actual diff, limitations and AAR | Mission evidence manifest and five-line AAR | ⛩ DP6 remains human |

## Constraints & gates

[I] Every hierarchy, typography, art or motion change must preserve semantic reading order, readable body text, focus, reduced-motion parity and equivalent text, checked on the actual affected routes in both themes; record not-applicable when no aesthetic change occurs. The storyboard and formative human review precede visual production. Word targets are advisory with written overage reasons; unsupported claims remain blocking.

[D] No edits to site/src/data/vaults.json, .adna, HAUSSMANN/VITRINE records or peer vaults. Registry asks are staged to Hestia. Provider pattern gaps are staged through the WebForge wrapper. Claim deltas stay GARNIER-owned for GR-7; read the predecessor register without editing it. No push, deploy or memo delivery is authorized here. Preserve ADR-048/049/053/057/059, Operations ADR-025 §D5, conditional H1/G4, counsel and the predecessor evidence freeze. Site changes are authorized for P1–P4 within the named mission scope after phase entry, including scoped hardening repairs; P0 and record-only closure work do not rewrite public copy.

## Goal and exit gate

[I] C1: Every expected route×viewport×theme axe row is reached, with zero violations; missing rows are failures. C2: Keyboard, zoom/reflow and manual assistive-tech flows preserve reading order, focus, labels, code recovery and equivalent diagram information. C3: mission_garnier_p4_2_accessibility closes with a scoped diff, cited evidence and five-line AAR; DP6 remains a human gate and no reserved path/outward action is inferred.

## Verification and convention-13 pair audit

[I] This is a method-feasibility assessment, not executed acceptance. V1 and V2 are defined in frontmatter with concrete command/protocol references and controls; V3 uses R-CLOSE on this mission's actual diff. All nine pairs were assessed for the amended scope:

- V1×C1: covers the input/population contract by R-CAPTURE all changed template representatives plus seven first-contact routes; R-SITE.
- V1×C2: insufficient; inspecting changed templates and user flows; existing manual AA protocol; assistive-tech coverage cannot establish the behavior in C2; V2 must reach its named output.
- V1×C3: insufficient; input inspection does not prove the actual mission_garnier_p4_2_accessibility diff or a human gate event.
- V2×C1: supplementary; producing accessibility_pack.md; manual_flow_record.md does not prove the original input set was complete; retain V1.
- V2×C2: covers the behavior through Manual protocol from doctrine_web_quality_assessment: navigate home→first task, search/docs, community proposal and graph keyboard twin; record AT/browser/version and actual observations.
- V2×C3: supplies behavioral evidence for mission_garnier_p4_2_accessibility, but V3 must independently inspect scope and closure authority.
- V3×C1: checks that accessibility_pack.md; manual_flow_record.md are present in the delivered set, not the truth or coverage of their contents.
- V3×C2: cannot replace Manual protocol from doctrine_web_quality_assessment: navigate home→first task, search/docs, community proposal and graph keyboard twin; record AT/browser/version and actual observations.; a clean diff is not a runtime, reader or measurement result.
- V3×C3: covers the mission_garnier_p4_2_accessibility changed paths, linked evidence, AAR and explicitly separate DP6 event via R-CLOSE.

The three methods jointly cover the three criteria; no individual method proves all three. Run controls before trusting their verdicts. V1 negative control: Omit mobile dark or inject a missing input label: coverage/axe checks must fail. V2 negative control: Place a focus trap or remove diagram text equivalent in a disposable page: manual task must identify the defect; automation alone cannot close the criterion. V3 negative control: reject a disposable reserved-path change or unsigned phase acceptance. Controls are isolated, never planted into production or peer files. New reusable checkers are provider contributions, authored early with their red-tests in the same commit.

## Budget

[I] ADR-016 content-load estimate: {"transition": 46, "bounded_objective_work": 33} = **79 kT**. Estimated agent sittings: **2**; calibration is **unmeasured**, not a repeated estimate presented as measured data. The work allowance is a judgment forecast, not a limit on honest reporting. Human recruitment/response time is excluded. Independent scoring work must be included in actuals rather than disappearing from the coordinator's accounting. See [[budget_basis]] for uncertainty and phase commitment. Re-scope at the next gate if projected work exceeds the bounded contract; do not silently skip routes. Billing is separately measured or reported unavailable.

## Definition of done

C1/C2/C3 are satisfied on their stated surfaces with evidence and controls, every output is linked, changed claims and accessibility consequences are documented, scope stays within authority, and the SITREP, next prompt and AAR are filed. A manual or human item remains owed until performed. Append this mission's objective/finding/budget evidence to the rolling closure ledger during work; P6 reconciles it rather than reconstructing the campaign at the end. A human phase gate remains pending until the operator rules.

## Campaign context

Previous: [[mission_garnier_p4_1_performance]]. Next: [[mission_garnier_p4_3_regression]]. [[campaign_architecture]] and [[charter_ratification_20260915]] govern scope/budgets.

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
