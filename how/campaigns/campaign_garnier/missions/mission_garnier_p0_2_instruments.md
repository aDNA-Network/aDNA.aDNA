---
plan_id: mission_garnier_p0_2_instruments
type: plan
title: Calibrate the added instruments
owner: stanley
status: in_progress
campaign_id: campaign_garnier
campaign: campaign_garnier
campaign_phase: 0
campaign_mission_number: 2
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
token_budget_estimated: 53
token_budget_unit: kT_content_load
estimated_sessions: 1
calibrated_sessions: null
estimation_class: governance-tight
decade_status: scope_approved_phase_budgeted
vitruvius_dimensions:
- D5
- D6
- D11
webforge_patterns:
- how/federation/webforge/
patterns_to_author:
- word-budget and complete-capture consumer contract
depends_on:
- mission_garnier_p0_1_baseline
blocks:
- mission_garnier_p1_1_homepage_voice
acceptance_criteria:
- 'C1: Version each census population, exclusions, advisory/blocking semantics and provider hash; word overage is
  advisory, unsupported claims blocking.'
- 'C2: Every added detector rejects its isolated failing fixture and accepts a valid one; fresh-context reader prescreens
  and answer-key calibration are correctly labeled.'
- 'C3: mission_garnier_p0_2_instruments closes with a scoped diff, cited evidence and five-line AAR; DP2 remains
  a human gate and no reserved path/outward action is inferred.'
verification_method:
- id: V1
  surface: genesis census limitations; full tracked component population; reader_protocol; word_budgets; provider
    wrapper
  method: Version each census population, exclusions, advisory/blocking semantics and provider hash; word overage
    is advisory, unsupported claims blocking.
  command: 'R-TOKENS; node site/scripts/reading_census.mjs --selftest; manual: enumerate routes, headings and component
    extensions against the input manifest.'
  red_test: 'Drop a JSX component or omit a required route: coverage reconciliation must fail.'
- id: V2
  surface: instrument_contract.md; instrument_controls.md; consumer_bar_manifest.json; prescreen_pack.md
  method: Every added detector rejects its isolated failing fixture and accepts a valid one; fresh-context reader
    prescreens and answer-key calibration are correctly labeled.
  command: 'Manual protocol: reader_protocol synthetic/calibration sections; R-CAPTURE matrix controls; run each
    recorded instrument argv against positive and negative disposable fixtures.'
  red_test: Plant banned prose, an allowed quoted term, an over-target paragraph, wrong theme and token bypass separately;
    banned prose/bypass/missing matrix fail while word overage warns.
- id: V3
  surface: mission_garnier_p0_2_instruments base-to-final diff, evidence manifest and AAR
  method: mission_garnier_p0_2_instruments closes with a scoped diff, cited evidence and five-line AAR; DP2 remains
    a human gate and no reserved path/outward action is inferred.
  command: R-CLOSE; inspect instrument_contract.md; instrument_controls.md; consumer_bar_manifest.json; prescreen_pack.md
    and the DP2 disposition.
  red_test: Place a registry/predecessor write or an unsigned DP2 approval in a disposable mission_garnier_p0_2_instruments
    closure record; scope/authority review must reject it.
human_gate: DP1 phase entry/budget; DP2 phase exit. DP1 accepted with amendments on 2026-09-15.
verification_surface: agent
verification_check_set: custom
calibration_status: uncalibrated
calibration_basis: Judgment estimate with stated workload; no measured GARNIER execution calibration.
budget_breakdown_kT:
  transition: 23
  bounded_objective_work: 30
budget_status: committed_DP1
human_elapsed_time: phase-gate response time excluded
input_manifest: genesis census limitations; full tracked component population; reader_protocol; word_budgets; provider
  wrapper
output_artifacts:
- instrument_contract.md
- instrument_controls.md
- consumer_bar_manifest.json
- prescreen_pack.md
contract_version: garnier_amendment_20260915
---
# Calibrate the added instruments

> **Read cold.** Act as Rosetta's executor for Stanley through Berthier. Read root and [[../CLAUDE|campaign governance]], [[campaign_garnier]], [[charter_ratification_20260915]], [[verification_recipes]] and this mission. DP1 is accepted; verify the named later phase gate before execution.

## Why

[I] Version each census population, exclusions, advisory/blocking semantics and provider hash; word overage is advisory, unsupported claims blocking. Every added detector rejects its isolated failing fixture and accepts a valid one; fresh-context reader prescreens and answer-key calibration are correctly labeled.

## Where we are

[D] This is a specification amended on 2026-09-15 against the genesis packet at 5a0849a. The existing local build and source inventory are dated inputs; no new site behavior or human evidence was verified by this amendment. Read [[verification_report]] for genesis limitations and [[docs_review_scope]] for the assigned population. Refresh source/build identity at mission open.

## Scope

[I] Inputs: genesis census limitations; full tracked component population; reader_protocol; word_budgets; provider wrapper. Outputs: instrument_contract.md; instrument_controls.md; consumer_bar_manifest.json; prescreen_pack.md. Use the command contexts and output-path precautions in [[verification_recipes]]. No future verification is claimed passed by authoring this specification.

## Objectives

| # | Objective | Output | Gate |
|---|-----------|--------|------|
| 1 | Version each census population, exclusions, advisory/blocking semantics and provider hash; word overage is advisory, unsupported claims blocking. | instrument_contract.md | ⛩ DP1 entry and C1 |
| 2 | Every added detector rejects its isolated failing fixture and accepts a valid one; fresh-context reader prescreens and answer-key calibration are correctly labeled. | instrument_contract.md; instrument_controls.md; consumer_bar_manifest.json; prescreen_pack.md | C2 reached-surface evidence |
| 3 | Reconcile the actual diff, limitations and AAR | Mission evidence manifest and five-line AAR | ⛩ DP2 remains human |

## Constraints & gates

[I] Every hierarchy, typography, art or motion change must preserve semantic reading order, readable body text, focus, reduced-motion parity and equivalent text, checked on the actual affected routes in both themes; record not-applicable when no aesthetic change occurs. The storyboard and formative human review precede visual production. Word targets are advisory with written overage reasons; unsupported claims remain blocking.

[D] No edits to site/src/data/vaults.json, .adna, HAUSSMANN/VITRINE records or peer vaults. Registry asks are staged to Hestia. Provider pattern gaps are staged through the WebForge wrapper. Claim deltas stay GARNIER-owned for GR-7; read the predecessor register without editing it. No push, deploy or memo delivery is authorized here. Preserve ADR-048/049/053/057/059, Operations ADR-025 §D5, conditional H1/G4, counsel and the predecessor evidence freeze. Site changes are authorized for P1–P4 within the named mission scope after phase entry, including scoped hardening repairs; P0 and record-only closure work do not rewrite public copy.

## Goal and exit gate

[I] C1: Version each census population, exclusions, advisory/blocking semantics and provider hash; word overage is advisory, unsupported claims blocking. C2: Every added detector rejects its isolated failing fixture and accepts a valid one; fresh-context reader prescreens and answer-key calibration are correctly labeled. C3: mission_garnier_p0_2_instruments closes with a scoped diff, cited evidence and five-line AAR; DP2 remains a human gate and no reserved path/outward action is inferred.

## Verification and convention-13 pair audit

[I] This is a method-feasibility assessment, not executed acceptance. V1 and V2 are defined in frontmatter with concrete command/protocol references and controls; V3 uses R-CLOSE on this mission's actual diff. All nine pairs were assessed for the amended scope:

- V1×C1: covers the input/population contract by R-TOKENS; node site/scripts/reading_census.mjs --selftest; manual: enumerate routes, headings and component extensions against the input manifest.
- V1×C2: insufficient; inspecting genesis census limitations; full tracked component population; reader_protocol; word_budgets; provider wrapper cannot establish the behavior in C2; V2 must reach its named output.
- V1×C3: insufficient; input inspection does not prove the actual mission_garnier_p0_2_instruments diff or a human gate event.
- V2×C1: supplementary; producing instrument_contract.md; instrument_controls.md; consumer_bar_manifest.json; prescreen_pack.md does not prove the original input set was complete; retain V1.
- V2×C2: covers the behavior through Manual protocol: reader_protocol synthetic/calibration sections; R-CAPTURE matrix controls; run each recorded instrument argv against positive and negative disposable fixtures.
- V2×C3: supplies behavioral evidence for mission_garnier_p0_2_instruments, but V3 must independently inspect scope and closure authority.
- V3×C1: checks that instrument_contract.md; instrument_controls.md; consumer_bar_manifest.json; prescreen_pack.md are present in the delivered set, not the truth or coverage of their contents.
- V3×C2: cannot replace Manual protocol: reader_protocol synthetic/calibration sections; R-CAPTURE matrix controls; run each recorded instrument argv against positive and negative disposable fixtures.; a clean diff is not a runtime, reader or measurement result.
- V3×C3: covers the mission_garnier_p0_2_instruments changed paths, linked evidence, AAR and explicitly separate DP2 event via R-CLOSE.

The three methods jointly cover the three criteria; no individual method proves all three. Run controls before trusting their verdicts. V1 negative control: Drop a JSX component or omit a required route: coverage reconciliation must fail. V2 negative control: Plant banned prose, an allowed quoted term, an over-target paragraph, wrong theme and token bypass separately; banned prose/bypass/missing matrix fail while word overage warns. V3 negative control: reject a disposable reserved-path change or unsigned phase acceptance. Controls are isolated, never planted into production or peer files. New reusable checkers are provider contributions, authored early with their red-tests in the same commit.

## Budget

[I] ADR-016 content-load estimate: {"transition": 23, "bounded_objective_work": 30} = **53 kT**. Estimated agent sittings: **1**; calibration is **unmeasured**, not a repeated estimate presented as measured data. The work allowance is a judgment forecast, not a limit on honest reporting. Human recruitment/response time is excluded. Independent scoring work must be included in actuals rather than disappearing from the coordinator's accounting. See [[budget_basis]] for uncertainty and phase commitment. Re-scope at the next gate if projected work exceeds the bounded contract; do not silently skip routes. Billing is separately measured or reported unavailable.

## Definition of done

C1/C2/C3 are satisfied on their stated surfaces with evidence and controls, every output is linked, changed claims and accessibility consequences are documented, scope stays within authority, and the SITREP, next prompt and AAR are filed. A manual or human item remains owed until performed. Append this mission's objective/finding/budget evidence to the rolling closure ledger during work; P6 reconciles it rather than reconstructing the campaign at the end. A human phase gate remains pending until the operator rules.

## Campaign context

Previous: [[mission_garnier_p0_1_baseline]]. Next: [[mission_garnier_p1_1_homepage_voice]]. [[campaign_architecture]] and [[charter_ratification_20260915]] govern scope/budgets.

## Progress

[D] P0.1 is complete with a paired provisional baseline. Instrument contract and controls were prepared independently while scoring finished, committed before prescreen outcomes. Twenty consumer controls and eighteen existing reading controls pass; complete tracked-source and first-contact censuses are recorded. Two key calibrators have returned; clean synthetic prescreens are running outside the vault after governance priming was detected and excluded.

## Completion Summary

Deliverables: pending execution. Descoped: none. Key findings: pending. Scope changes: approved charter amendments; exact tranche assignment where applicable.

## AAR

- **Worked:** pending execution.
- **Did not:** pending execution.
- **Finding:** pending execution.
- **Change:** pending execution.
- **Follow-up:** pending execution.
