---
plan_id: mission_garnier_p5_3_publication
type: plan
title: Present the public-launch decision
owner: stanley
status: queued
campaign_id: campaign_garnier
campaign: campaign_garnier
campaign_phase: 5
campaign_mission_number: 32
mission_class: verification
created: '2026-09-14'
updated: '2026-09-15'
last_edited_by: agent_codex
tags:
- plan
- campaign
- garnier
executor_tier: opus
executor_runtime: claude   # was codex; runtime handoff 2026-09-16 (runtime_handoff_20260916); flipped on queued/in_progress missions 2026-09-24
token_budget_estimated: 48
token_budget_unit: kT_content_load
estimated_sessions: 1
calibrated_sessions: null
estimation_class: governance-tight
decade_status: provisional_until_DP4
vitruvius_dimensions:
- D7
- D12
webforge_patterns:
- how/federation/webforge/
patterns_to_author: []
depends_on:
- mission_garnier_p5_2_rescore
blocks:
- mission_garnier_p6_1_campaign_aar
acceptance_criteria:
- 'C1: Release manifest matches exact candidate tree, applicable CI result, frozen evidence and consent/embargo
  dispositions; no unresolved measured field failure.'
- 'C2: Decision artifact separates push, deploy, peer delivery and any insufficient-data exception; exception has
  collector proof and launch+30-day review owner.'
- 'C3: mission_garnier_p5_3_publication closes with a scoped diff, cited evidence and five-line AAR; DP7 remains
  a human gate and no reserved path/outward action is inferred.'
verification_method:
- id: V1
  surface: final candidate/CI/evidence identities; G4/counsel and predecessor holds; field disposition
  method: Release manifest matches exact candidate tree, applicable CI result, frozen evidence and consent/embargo
    dispositions; no unresolved measured field failure.
  command: 'git rev-parse HEAD; gh run list --branch main --limit 1 --json headSha,conclusion; manual: match candidate-specific
    CI, not merely latest green; field_performance_policy.'
  red_test: 'Present green CI from an older tree as candidate verification: release identity review must fail.'
- id: V2
  surface: publication_gate.md; release_manifest.md
  method: Decision artifact separates push, deploy, peer delivery and any insufficient-data exception; exception
    has collector proof and launch+30-day review owner.
  command: 'Manual: render the existing ISS gate with explicit action scopes and read actual operator response;
    this mission prepares the decision and does not deploy.'
  red_test: 'Use DP1 approval as deploy authority or missing collector receipt as low traffic: gate authority/exception
    review must reject it.'
- id: V3
  surface: mission_garnier_p5_3_publication base-to-final diff, evidence manifest and AAR
  method: mission_garnier_p5_3_publication closes with a scoped diff, cited evidence and five-line AAR; DP7 remains
    a human gate and no reserved path/outward action is inferred.
  command: R-CLOSE; inspect publication_gate.md; release_manifest.md and the DP7 disposition.
  red_test: Place a registry/predecessor write or an unsigned DP7 approval in a disposable mission_garnier_p5_3_publication
    closure record; scope/authority review must reject it.
human_gate: DP6 phase entry/budget; DP7 phase exit. DP1 accepted with amendments on 2026-09-15.
verification_surface: operator
verification_check_set: custom
calibration_status: uncalibrated
calibration_basis: Judgment estimate with stated workload; no measured GARNIER execution calibration.
budget_breakdown_kT:
  transition: 23
  bounded_objective_work: 25
budget_status: provisional_until_DP6
human_elapsed_time: phase-gate response time excluded
input_manifest: final candidate/CI/evidence identities; G4/counsel and predecessor holds; field disposition
output_artifacts:
- publication_gate.md
- release_manifest.md
contract_version: garnier_amendment_20260915
---
# Present the public-launch decision

> **Read cold.** Act as Rosetta's executor for Stanley through Berthier. Read root and [[../CLAUDE|campaign governance]], [[campaign_garnier]], [[charter_ratification_20260915]], [[verification_recipes]] and this mission. DP1 is accepted; verify the named later phase gate before execution.

## Why

[I] Release manifest matches exact candidate tree, applicable CI result, frozen evidence and consent/embargo dispositions; no unresolved measured field failure. Decision artifact separates push, deploy, peer delivery and any insufficient-data exception; exception has collector proof and launch+30-day review owner.

## Where we are

[D] This is a specification amended on 2026-09-15 against the genesis packet at 5a0849a. The existing local build and source inventory are dated inputs; no new site behavior or human evidence was verified by this amendment. Read [[verification_report]] for genesis limitations and [[docs_review_scope]] for the assigned population. Refresh source/build identity at mission open.

## Scope

[I] Inputs: final candidate/CI/evidence identities; G4/counsel and predecessor holds; field disposition. Outputs: publication_gate.md; release_manifest.md. Use the command contexts and output-path precautions in [[verification_recipes]]. No future verification is claimed passed by authoring this specification.

## Objectives

| # | Objective | Output | Gate |
|---|-----------|--------|------|
| 1 | Release manifest matches exact candidate tree, applicable CI result, frozen evidence and consent/embargo dispositions; no unresolved measured field failure. | publication_gate.md | ⛩ DP6 entry and C1 |
| 2 | Decision artifact separates push, deploy, peer delivery and any insufficient-data exception; exception has collector proof and launch+30-day review owner. | publication_gate.md; release_manifest.md | C2 reached-surface evidence |
| 3 | Reconcile the actual diff, limitations and AAR | Mission evidence manifest and five-line AAR | ⛩ DP7 remains human |

## Constraints & gates

[I] Every hierarchy, typography, art or motion change must preserve semantic reading order, readable body text, focus, reduced-motion parity and equivalent text, checked on the actual affected routes in both themes; record not-applicable when no aesthetic change occurs. The storyboard and formative human review precede visual production. Word targets are advisory with written overage reasons; unsupported claims remain blocking.

[D] No edits to site/src/data/vaults.json, .adna, HAUSSMANN/VITRINE records or peer vaults. Registry asks are staged to Hestia. Provider pattern gaps are staged through the WebForge wrapper. Claim deltas stay GARNIER-owned for GR-7; read the predecessor register without editing it. No push, deploy or memo delivery is authorized here. Preserve ADR-048/049/053/057/059, Operations ADR-025 §D5, conditional H1/G4, counsel and the predecessor evidence freeze. Site changes are authorized for P1–P4 within the named mission scope after phase entry, including scoped hardening repairs; P0 and record-only closure work do not rewrite public copy.

## Goal and exit gate

[I] C1: Release manifest matches exact candidate tree, applicable CI result, frozen evidence and consent/embargo dispositions; no unresolved measured field failure. C2: Decision artifact separates push, deploy, peer delivery and any insufficient-data exception; exception has collector proof and launch+30-day review owner. C3: mission_garnier_p5_3_publication closes with a scoped diff, cited evidence and five-line AAR; DP7 remains a human gate and no reserved path/outward action is inferred.

## Verification and convention-13 pair audit

[I] This is a method-feasibility assessment, not executed acceptance. V1 and V2 are defined in frontmatter with concrete command/protocol references and controls; V3 uses R-CLOSE on this mission's actual diff. All nine pairs were assessed for the amended scope:

- V1×C1: covers the input/population contract by git rev-parse HEAD; gh run list --branch main --limit 1 --json headSha,conclusion; manual: match candidate-specific CI, not merely latest green; field_performance_policy.
- V1×C2: insufficient; inspecting final candidate/CI/evidence identities; G4/counsel and predecessor holds; field disposition cannot establish the behavior in C2; V2 must reach its named output.
- V1×C3: insufficient; input inspection does not prove the actual mission_garnier_p5_3_publication diff or a human gate event.
- V2×C1: supplementary; producing publication_gate.md; release_manifest.md does not prove the original input set was complete; retain V1.
- V2×C2: covers the behavior through Manual: render the existing ISS gate with explicit action scopes and read actual operator response; this mission prepares the decision and does not deploy.
- V2×C3: supplies behavioral evidence for mission_garnier_p5_3_publication, but V3 must independently inspect scope and closure authority.
- V3×C1: checks that publication_gate.md; release_manifest.md are present in the delivered set, not the truth or coverage of their contents.
- V3×C2: cannot replace Manual: render the existing ISS gate with explicit action scopes and read actual operator response; this mission prepares the decision and does not deploy.; a clean diff is not a runtime, reader or measurement result.
- V3×C3: covers the mission_garnier_p5_3_publication changed paths, linked evidence, AAR and explicitly separate DP7 event via R-CLOSE.

The three methods jointly cover the three criteria; no individual method proves all three. Run controls before trusting their verdicts. V1 negative control: Present green CI from an older tree as candidate verification: release identity review must fail. V2 negative control: Use DP1 approval as deploy authority or missing collector receipt as low traffic: gate authority/exception review must reject it. V3 negative control: reject a disposable reserved-path change or unsigned phase acceptance. Controls are isolated, never planted into production or peer files. New reusable checkers are provider contributions, authored early with their red-tests in the same commit.

## Budget

[I] ADR-016 content-load estimate: {"transition": 23, "bounded_objective_work": 25} = **48 kT**. Estimated agent sittings: **1**; calibration is **unmeasured**, not a repeated estimate presented as measured data. The work allowance is a judgment forecast, not a limit on honest reporting. Human recruitment/response time is excluded. Independent scoring work must be included in actuals rather than disappearing from the coordinator's accounting. See [[budget_basis]] for uncertainty and phase commitment. Re-scope at the next gate if projected work exceeds the bounded contract; do not silently skip routes. Billing is separately measured or reported unavailable.

## Definition of done

C1/C2/C3 are satisfied on their stated surfaces with evidence and controls, every output is linked, changed claims and accessibility consequences are documented, scope stays within authority, and the SITREP, next prompt and AAR are filed. A manual or human item remains owed until performed. Append this mission's objective/finding/budget evidence to the rolling closure ledger during work; P6 reconciles it rather than reconstructing the campaign at the end. A human phase gate remains pending until the operator rules.

## Campaign context

Previous: [[mission_garnier_p5_2_rescore]]. Next: [[mission_garnier_p6_1_campaign_aar]]. [[campaign_architecture]] and [[charter_ratification_20260915]] govern scope/budgets.

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
