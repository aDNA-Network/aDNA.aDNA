---
plan_id: mission_garnier_p6_3_graduation
type: plan
title: Graduate reusable context
owner: stanley
status: queued
campaign_id: campaign_garnier
campaign: campaign_garnier
campaign_phase: 6
campaign_mission_number: 35
mission_class: closeout
created: '2026-09-14'
updated: '2026-09-15'
last_edited_by: agent_codex
tags:
- plan
- campaign
- garnier
executor_tier: opus
executor_runtime: codex
token_budget_estimated: 53
token_budget_unit: kT_content_load
estimated_sessions: 1
calibrated_sessions: null
estimation_class: governance-tight
decade_status: provisional_until_DP4
vitruvius_dimensions:
- D4
- D7
webforge_patterns:
- how/federation/webforge/
patterns_to_author: []
depends_on:
- mission_garnier_p6_2_decadal_aar
blocks:
- mission_garnier_p6_4_graph_updates
acceptance_criteria:
- 'C1: Every proposed graduation cites reusable evidence and existing owner/location; provider-owned patterns remain
  staged contributions.'
- 'C2: Local approved additions resolve through their own indices, have metadata and related links; standard/template
  changes remain a separate upstream gate.'
- 'C3: mission_garnier_p6_3_graduation closes with a scoped diff, cited evidence and five-line AAR; DP8 remains
  a human gate and no reserved path/outward action is inferred.'
verification_method:
- id: V1
  surface: rolling learnings; existing context/doctrine/skill inventory; skill_context_graduation
  method: Every proposed graduation cites reusable evidence and existing owner/location; provider-owned patterns
    remain staged contributions.
  command: 'Manual protocol: skill_context_graduation rubric per candidate; inspect target content before writing
    and link supporting missions.'
  red_test: 'Promote a single unexplained anecdote as established doctrine: graduation rubric must reject it.'
- id: V2
  surface: graduation_ledger.md; local_governed_amendments.md
  method: Local approved additions resolve through their own indices, have metadata and related links; standard/template
    changes remain a separate upstream gate.
  command: 'Manual: follow all new index links and review explicit-path diff against Rule 10 and .adna exclusion;
    R-CLOSE.'
  red_test: 'Include a provider file or .adna change in a disposable diff: scope audit must reject it.'
- id: V3
  surface: mission_garnier_p6_3_graduation base-to-final diff, evidence manifest and AAR
  method: mission_garnier_p6_3_graduation closes with a scoped diff, cited evidence and five-line AAR; DP8 remains
    a human gate and no reserved path/outward action is inferred.
  command: R-CLOSE; inspect graduation_ledger.md; local_governed_amendments.md and the DP8 disposition.
  red_test: Place a registry/predecessor write or an unsigned DP8 approval in a disposable mission_garnier_p6_3_graduation
    closure record; scope/authority review must reject it.
human_gate: DP7 phase entry/budget; DP8 phase exit. DP1 accepted with amendments on 2026-09-15.
verification_surface: agent
verification_check_set: custom
calibration_status: uncalibrated
calibration_basis: Judgment estimate with stated workload; no measured GARNIER execution calibration.
budget_breakdown_kT:
  transition: 23
  bounded_objective_work: 30
budget_status: provisional_until_DP7
human_elapsed_time: phase-gate response time excluded
input_manifest: rolling learnings; existing context/doctrine/skill inventory; skill_context_graduation
output_artifacts:
- graduation_ledger.md
- local_governed_amendments.md
contract_version: garnier_amendment_20260915
---
# Graduate reusable context

> **Read cold.** Act as Rosetta's executor for Stanley through Berthier. Read root and [[../CLAUDE|campaign governance]], [[campaign_garnier]], [[charter_ratification_20260915]], [[verification_recipes]] and this mission. DP1 is accepted; verify the named later phase gate before execution.

## Why

[I] Every proposed graduation cites reusable evidence and existing owner/location; provider-owned patterns remain staged contributions. Local approved additions resolve through their own indices, have metadata and related links; standard/template changes remain a separate upstream gate.

## Where we are

[D] This is a specification amended on 2026-09-15 against the genesis packet at 5a0849a. The existing local build and source inventory are dated inputs; no new site behavior or human evidence was verified by this amendment. Read [[verification_report]] for genesis limitations and [[docs_review_scope]] for the assigned population. Refresh source/build identity at mission open.

## Scope

[I] Inputs: rolling learnings; existing context/doctrine/skill inventory; skill_context_graduation. Outputs: graduation_ledger.md; local_governed_amendments.md. Use the command contexts and output-path precautions in [[verification_recipes]]. No future verification is claimed passed by authoring this specification.

## Objectives

| # | Objective | Output | Gate |
|---|-----------|--------|------|
| 1 | Every proposed graduation cites reusable evidence and existing owner/location; provider-owned patterns remain staged contributions. | graduation_ledger.md | ⛩ DP7 entry and C1 |
| 2 | Local approved additions resolve through their own indices, have metadata and related links; standard/template changes remain a separate upstream gate. | graduation_ledger.md; local_governed_amendments.md | C2 reached-surface evidence |
| 3 | Reconcile the actual diff, limitations and AAR | Mission evidence manifest and five-line AAR | ⛩ DP8 remains human |

## Constraints & gates

[I] Every hierarchy, typography, art or motion change must preserve semantic reading order, readable body text, focus, reduced-motion parity and equivalent text, checked on the actual affected routes in both themes; record not-applicable when no aesthetic change occurs. The storyboard and formative human review precede visual production. Word targets are advisory with written overage reasons; unsupported claims remain blocking.

[D] No edits to site/src/data/vaults.json, .adna, HAUSSMANN/VITRINE records or peer vaults. Registry asks are staged to Hestia. Provider pattern gaps are staged through the WebForge wrapper. Claim deltas stay GARNIER-owned for GR-7; read the predecessor register without editing it. No push, deploy or memo delivery is authorized here. Preserve ADR-048/049/053/057/059, Operations ADR-025 §D5, conditional H1/G4, counsel and the predecessor evidence freeze. Site changes are authorized for P1–P4 within the named mission scope after phase entry, including scoped hardening repairs; P0 and record-only closure work do not rewrite public copy.

## Goal and exit gate

[I] C1: Every proposed graduation cites reusable evidence and existing owner/location; provider-owned patterns remain staged contributions. C2: Local approved additions resolve through their own indices, have metadata and related links; standard/template changes remain a separate upstream gate. C3: mission_garnier_p6_3_graduation closes with a scoped diff, cited evidence and five-line AAR; DP8 remains a human gate and no reserved path/outward action is inferred.

## Verification and convention-13 pair audit

[I] This is a method-feasibility assessment, not executed acceptance. V1 and V2 are defined in frontmatter with concrete command/protocol references and controls; V3 uses R-CLOSE on this mission's actual diff. All nine pairs were assessed for the amended scope:

- V1×C1: covers the input/population contract by Manual protocol: skill_context_graduation rubric per candidate; inspect target content before writing and link supporting missions.
- V1×C2: insufficient; inspecting rolling learnings; existing context/doctrine/skill inventory; skill_context_graduation cannot establish the behavior in C2; V2 must reach its named output.
- V1×C3: insufficient; input inspection does not prove the actual mission_garnier_p6_3_graduation diff or a human gate event.
- V2×C1: supplementary; producing graduation_ledger.md; local_governed_amendments.md does not prove the original input set was complete; retain V1.
- V2×C2: covers the behavior through Manual: follow all new index links and review explicit-path diff against Rule 10 and .adna exclusion; R-CLOSE.
- V2×C3: supplies behavioral evidence for mission_garnier_p6_3_graduation, but V3 must independently inspect scope and closure authority.
- V3×C1: checks that graduation_ledger.md; local_governed_amendments.md are present in the delivered set, not the truth or coverage of their contents.
- V3×C2: cannot replace Manual: follow all new index links and review explicit-path diff against Rule 10 and .adna exclusion; R-CLOSE.; a clean diff is not a runtime, reader or measurement result.
- V3×C3: covers the mission_garnier_p6_3_graduation changed paths, linked evidence, AAR and explicitly separate DP8 event via R-CLOSE.

The three methods jointly cover the three criteria; no individual method proves all three. Run controls before trusting their verdicts. V1 negative control: Promote a single unexplained anecdote as established doctrine: graduation rubric must reject it. V2 negative control: Include a provider file or .adna change in a disposable diff: scope audit must reject it. V3 negative control: reject a disposable reserved-path change or unsigned phase acceptance. Controls are isolated, never planted into production or peer files. New reusable checkers are provider contributions, authored early with their red-tests in the same commit.

## Budget

[I] ADR-016 content-load estimate: {"transition": 23, "bounded_objective_work": 30} = **53 kT**. Estimated agent sittings: **1**; calibration is **unmeasured**, not a repeated estimate presented as measured data. The work allowance is a judgment forecast, not a limit on honest reporting. Human recruitment/response time is excluded. Independent scoring work must be included in actuals rather than disappearing from the coordinator's accounting. See [[budget_basis]] for uncertainty and phase commitment. Re-scope at the next gate if projected work exceeds the bounded contract; do not silently skip routes. Billing is separately measured or reported unavailable.

## Definition of done

C1/C2/C3 are satisfied on their stated surfaces with evidence and controls, every output is linked, changed claims and accessibility consequences are documented, scope stays within authority, and the SITREP, next prompt and AAR are filed. A manual or human item remains owed until performed. Append this mission's objective/finding/budget evidence to the rolling closure ledger during work; P6 reconciles it rather than reconstructing the campaign at the end. A human phase gate remains pending until the operator rules.

## Campaign context

Previous: [[mission_garnier_p6_2_decadal_aar]]. Next: [[mission_garnier_p6_4_graph_updates]]. [[campaign_architecture]] and [[charter_ratification_20260915]] govern scope/budgets.

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
