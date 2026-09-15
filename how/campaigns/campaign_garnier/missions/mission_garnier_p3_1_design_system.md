---
plan_id: mission_garnier_p3_1_design_system
type: plan
title: Enforce the evolved visual system
owner: stanley
status: queued
campaign_id: campaign_garnier
campaign: campaign_garnier
campaign_phase: 3
campaign_mission_number: 23
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
token_budget_estimated: 69
token_budget_unit: kT_content_load
estimated_sessions: 1
calibrated_sessions: null
estimation_class: content-novel
decade_status: provisional_until_DP4
vitruvius_dimensions:
- D5
- D11
webforge_patterns:
- how/federation/webforge/
patterns_to_author:
- semantic type roles and five-slot VisualDNA bundle
depends_on:
- mission_garnier_p2_5_midpoint
blocks:
- mission_garnier_p3_2_hero_slots
acceptance_criteria:
- 'C1: Component/type/token census covers the full declared tracked population and assigns every exception to a
  semantic reason; provider validators consume existing light/dark tokens.'
- 'C2: Design-system page and one of each touched template show a consistent type/space hierarchy in both themes,
  with preserved contrast and focus.'
- 'C3: mission_garnier_p3_1_design_system closes with a scoped diff, cited evidence and five-line AAR; DP5 remains
  a human gate and no reserved path/outward action is inferred.'
verification_method:
- id: V1
  surface: ADR-053/059; WebForge wrapper; full tracked component/layout/page/style set; P1 storyboard
  method: Component/type/token census covers the full declared tracked population and assigns every exception to
    a semantic reason; provider validators consume existing light/dark tokens.
  command: 'R-TOKENS; manual: validate bundle against pinned provider schema and compare population with git ls-files;
    record schema argv at execution.'
  red_test: 'Omit a TSX island or bypass a semantic color token in a disposable component: population/token controls
    must fail.'
- id: V2
  surface: design_system_contract.md; component_exception_ledger.md; consumer_bundle_manifest.json
  method: Design-system page and one of each touched template show a consistent type/space hierarchy in both themes,
    with preserved contrast and focus.
  command: R-SITE; R-CAPTURE on /design-system plus each changed template; python3 site/scripts/token_aa_check.py
    --json.
  red_test: 'Remove a focus treatment or use a failing theme token pair: keyboard/contrast checks must fail.'
- id: V3
  surface: mission_garnier_p3_1_design_system base-to-final diff, evidence manifest and AAR
  method: mission_garnier_p3_1_design_system closes with a scoped diff, cited evidence and five-line AAR; DP5 remains
    a human gate and no reserved path/outward action is inferred.
  command: R-CLOSE; inspect design_system_contract.md; component_exception_ledger.md; consumer_bundle_manifest.json
    and the DP5 disposition.
  red_test: Place a registry/predecessor write or an unsigned DP5 approval in a disposable mission_garnier_p3_1_design_system
    closure record; scope/authority review must reject it.
human_gate: DP4 phase entry/budget; DP5 phase exit. DP1 accepted with amendments on 2026-09-15.
verification_surface: agent
verification_check_set: custom
calibration_status: uncalibrated
calibration_basis: Judgment estimate with stated workload; no measured GARNIER execution calibration.
budget_breakdown_kT:
  transition: 23
  bounded_objective_work: 46
budget_status: provisional_until_DP4
human_elapsed_time: phase-gate response time excluded
input_manifest: ADR-053/059; WebForge wrapper; full tracked component/layout/page/style set; P1 storyboard
output_artifacts:
- design_system_contract.md
- component_exception_ledger.md
- consumer_bundle_manifest.json
contract_version: garnier_amendment_20260915
---
# Enforce the evolved visual system

> **Read cold.** Act as Rosetta's executor for Stanley through Berthier. Read root and [[../CLAUDE|campaign governance]], [[campaign_garnier]], [[charter_ratification_20260915]], [[verification_recipes]] and this mission. DP1 is accepted; verify the named later phase gate before execution.

## Why

[I] Component/type/token census covers the full declared tracked population and assigns every exception to a semantic reason; provider validators consume existing light/dark tokens. Design-system page and one of each touched template show a consistent type/space hierarchy in both themes, with preserved contrast and focus.

## Where we are

[D] This is a specification amended on 2026-09-15 against the genesis packet at 5a0849a. The existing local build and source inventory are dated inputs; no new site behavior or human evidence was verified by this amendment. Read [[verification_report]] for genesis limitations and [[docs_review_scope]] for the assigned population. Refresh source/build identity at mission open.

## Scope

[I] Inputs: ADR-053/059; WebForge wrapper; full tracked component/layout/page/style set; P1 storyboard. Outputs: design_system_contract.md; component_exception_ledger.md; consumer_bundle_manifest.json. Use the command contexts and output-path precautions in [[verification_recipes]]. No future verification is claimed passed by authoring this specification.

## Objectives

| # | Objective | Output | Gate |
|---|-----------|--------|------|
| 1 | Component/type/token census covers the full declared tracked population and assigns every exception to a semantic reason; provider validators consume existing light/dark tokens. | design_system_contract.md | ⛩ DP4 entry and C1 |
| 2 | Design-system page and one of each touched template show a consistent type/space hierarchy in both themes, with preserved contrast and focus. | design_system_contract.md; component_exception_ledger.md; consumer_bundle_manifest.json | C2 reached-surface evidence |
| 3 | Reconcile the actual diff, limitations and AAR | Mission evidence manifest and five-line AAR | ⛩ DP5 remains human |

## Constraints & gates

[I] Every hierarchy, typography, art or motion change must preserve semantic reading order, readable body text, focus, reduced-motion parity and equivalent text, checked on the actual affected routes in both themes; record not-applicable when no aesthetic change occurs. The storyboard and formative human review precede visual production. Word targets are advisory with written overage reasons; unsupported claims remain blocking.

[D] No edits to site/src/data/vaults.json, .adna, HAUSSMANN/VITRINE records or peer vaults. Registry asks are staged to Hestia. Provider pattern gaps are staged through the WebForge wrapper. Claim deltas stay GARNIER-owned for GR-7; read the predecessor register without editing it. No push, deploy or memo delivery is authorized here. Preserve ADR-048/049/053/057/059, Operations ADR-025 §D5, conditional H1/G4, counsel and the predecessor evidence freeze. Site changes are authorized for P1–P4 within the named mission scope after phase entry, including scoped hardening repairs; P0 and record-only closure work do not rewrite public copy.

## Goal and exit gate

[I] C1: Component/type/token census covers the full declared tracked population and assigns every exception to a semantic reason; provider validators consume existing light/dark tokens. C2: Design-system page and one of each touched template show a consistent type/space hierarchy in both themes, with preserved contrast and focus. C3: mission_garnier_p3_1_design_system closes with a scoped diff, cited evidence and five-line AAR; DP5 remains a human gate and no reserved path/outward action is inferred.

## Verification and convention-13 pair audit

[I] This is a method-feasibility assessment, not executed acceptance. V1 and V2 are defined in frontmatter with concrete command/protocol references and controls; V3 uses R-CLOSE on this mission's actual diff. All nine pairs were assessed for the amended scope:

- V1×C1: covers the input/population contract by R-TOKENS; manual: validate bundle against pinned provider schema and compare population with git ls-files; record schema argv at execution.
- V1×C2: insufficient; inspecting ADR-053/059; WebForge wrapper; full tracked component/layout/page/style set; P1 storyboard cannot establish the behavior in C2; V2 must reach its named output.
- V1×C3: insufficient; input inspection does not prove the actual mission_garnier_p3_1_design_system diff or a human gate event.
- V2×C1: supplementary; producing design_system_contract.md; component_exception_ledger.md; consumer_bundle_manifest.json does not prove the original input set was complete; retain V1.
- V2×C2: covers the behavior through R-SITE; R-CAPTURE on /design-system plus each changed template; python3 site/scripts/token_aa_check.py --json.
- V2×C3: supplies behavioral evidence for mission_garnier_p3_1_design_system, but V3 must independently inspect scope and closure authority.
- V3×C1: checks that design_system_contract.md; component_exception_ledger.md; consumer_bundle_manifest.json are present in the delivered set, not the truth or coverage of their contents.
- V3×C2: cannot replace R-SITE; R-CAPTURE on /design-system plus each changed template; python3 site/scripts/token_aa_check.py --json.; a clean diff is not a runtime, reader or measurement result.
- V3×C3: covers the mission_garnier_p3_1_design_system changed paths, linked evidence, AAR and explicitly separate DP5 event via R-CLOSE.

The three methods jointly cover the three criteria; no individual method proves all three. Run controls before trusting their verdicts. V1 negative control: Omit a TSX island or bypass a semantic color token in a disposable component: population/token controls must fail. V2 negative control: Remove a focus treatment or use a failing theme token pair: keyboard/contrast checks must fail. V3 negative control: reject a disposable reserved-path change or unsigned phase acceptance. Controls are isolated, never planted into production or peer files. New reusable checkers are provider contributions, authored early with their red-tests in the same commit.

## Budget

[I] ADR-016 content-load estimate: {"transition": 23, "bounded_objective_work": 46} = **69 kT**. Estimated agent sittings: **1**; calibration is **unmeasured**, not a repeated estimate presented as measured data. The work allowance is a judgment forecast, not a limit on honest reporting. Human recruitment/response time is excluded. Independent scoring work must be included in actuals rather than disappearing from the coordinator's accounting. See [[budget_basis]] for uncertainty and phase commitment. Re-scope at the next gate if projected work exceeds the bounded contract; do not silently skip routes. Billing is separately measured or reported unavailable.

## Definition of done

C1/C2/C3 are satisfied on their stated surfaces with evidence and controls, every output is linked, changed claims and accessibility consequences are documented, scope stays within authority, and the SITREP, next prompt and AAR are filed. A manual or human item remains owed until performed. Append this mission's objective/finding/budget evidence to the rolling closure ledger during work; P6 reconciles it rather than reconstructing the campaign at the end. A human phase gate remains pending until the operator rules.

## Campaign context

Previous: [[mission_garnier_p2_5_midpoint]]. Next: [[mission_garnier_p3_2_hero_slots]]. [[campaign_architecture]] and [[charter_ratification_20260915]] govern scope/budgets.

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
