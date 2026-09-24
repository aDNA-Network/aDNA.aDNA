---
plan_id: mission_garnier_p3_3_diagram_code
type: plan
title: Unify diagrams and code treatment
owner: stanley
status: queued
campaign_id: campaign_garnier
campaign: campaign_garnier
campaign_phase: 3
campaign_mission_number: 25
mission_class: implementation
created: '2026-09-14'
updated: '2026-09-15'
last_edited_by: agent_codex
tags:
- plan
- campaign
- garnier
executor_tier: opus
executor_runtime: claude   # was codex; runtime handoff 2026-09-16 (runtime_handoff_20260916); flipped on queued/in_progress missions 2026-09-24
token_budget_estimated: 78
token_budget_unit: kT_content_load
estimated_sessions: 2
calibrated_sessions: null
estimation_class: content-novel
decade_status: provisional_until_DP4
vitruvius_dimensions:
- D5
- D10
- D11
webforge_patterns:
- how/federation/webforge/
patterns_to_author:
- diagram semantic grammar and clipboard recovery
depends_on:
- mission_garnier_p3_2_hero_slots
blocks:
- mission_garnier_p3_4_motion_social
acceptance_criteria:
- 'C1: Diagram semantics have a text/keyboard equivalent matching source nodes/edges; registry template labels are
  reviewed read-only, data corrections staged to Hestia.'
- 'C2: Every executable code action copies the displayed runnable string; clipboard denial has accessible recovery,
  and code remains readable without page overflow.'
- 'C3: mission_garnier_p3_3_diagram_code closes with a scoped diff, cited evidence and five-line AAR; DP5 remains
  a human gate and no reserved path/outward action is inferred.'
- 'C4: FG-P0-003 is resolved on /learn/concepts/triad: diagram labels remain legible on fresh mobile loads in both themes, with equivalent text/keyboard access and no page overflow.'
verification_method:
- id: V1
  surface: /learn/concepts/triad; graph/keyboard twin; code components; all /vaults routes assigned by docs_population; diagram source
    data
  method: Diagram semantics have a text/keyboard equivalent matching source nodes/edges; registry template labels
    are reviewed read-only, data corrections staged to Hestia.
  command: 'Manual: compare source graph IDs/edges with visible keyboard twin; derive diagram/code instances from
    tracked source imports.'
  red_test: 'Drop a node from the keyboard twin: node-set comparison must fail.'
- id: V2
  surface: diagram_grammar.md; code_state_pack.md; registry_template_review.md
  method: Every executable code action copies the displayed runnable string; clipboard denial has accessible recovery,
    and code remains readable without page overflow.
  command: R-SITE; R-CAPTURE /learn/concepts/triad, /vaults/graph and code-bearing templates; manual keyboard traversal and clipboard success/rejection
    using disposable Playwright permissions.
  red_test: 'Reject clipboard permission and inject an overlong unbroken command: absence of recovery or page-wide
    overflow must fail.'
- id: V3
  surface: mission_garnier_p3_3_diagram_code base-to-final diff, evidence manifest and AAR
  method: mission_garnier_p3_3_diagram_code closes with a scoped diff, cited evidence and five-line AAR; DP5 remains
    a human gate and no reserved path/outward action is inferred.
  command: R-CLOSE; inspect diagram_grammar.md; code_state_pack.md; registry_template_review.md and the DP5 disposition.
  red_test: Place a registry/predecessor write or an unsigned DP5 approval in a disposable mission_garnier_p3_3_diagram_code
    closure record; scope/authority review must reject it.
- id: V4
  surface: /learn/concepts/triad fresh mobile loads in both observed themes; diagram_grammar.md captures and text/keyboard equivalent
  method: Verify readable labels at default zoom, reflow and equivalent text/keyboard access for FG-P0-003.
  command: 'Run C4 fresh-context capture protocol at 390px and canonical mobile widths in both observed themes; inspect labels, computed sizes and keyboard/text equivalence.'
  red_test: 'A disposable reproduction of P0 tiny-label scaling must fail visual inspection even when axe reports zero.'
human_gate: DP4 phase entry/budget; DP5 phase exit. DP1 accepted with amendments on 2026-09-15.
verification_surface: agent
verification_check_set: custom
calibration_status: uncalibrated
calibration_basis: Judgment estimate with stated workload; no measured GARNIER execution calibration.
budget_breakdown_kT:
  transition: 46
  bounded_objective_work: 32
budget_status: provisional_until_DP4
human_elapsed_time: phase-gate response time excluded
input_manifest: /learn/concepts/triad; graph/keyboard twin; code components; all /vaults routes assigned by docs_population; diagram source
  data
output_artifacts:
- diagram_grammar.md
- code_state_pack.md
- registry_template_review.md
contract_version: garnier_amendment_20260915
---
# Unify diagrams and code treatment

> **Read cold.** Act as Rosetta's executor for Stanley through Berthier. Read root and [[../CLAUDE|campaign governance]], [[campaign_garnier]], [[charter_ratification_20260915]], [[verification_recipes]] and this mission. DP1 is accepted; verify the named later phase gate before execution.

## Why

[I] Diagram semantics have a text/keyboard equivalent matching source nodes/edges; registry template labels are reviewed read-only, data corrections staged to Hestia. Every executable code action copies the displayed runnable string; clipboard denial has accessible recovery, and code remains readable without page overflow.

## Where we are

[D] This is a specification amended on 2026-09-15 against the genesis packet at 5a0849a. The existing local build and source inventory are dated inputs; no new site behavior or human evidence was verified by this amendment. Read [[verification_report]] for genesis limitations and [[docs_review_scope]] for the assigned population. Refresh source/build identity at mission open.

## Scope

[I] Inputs: /learn/concepts/triad; graph/keyboard twin; code components; all /vaults routes assigned by docs_population; diagram source data. Outputs: diagram_grammar.md; code_state_pack.md; registry_template_review.md. Use the command contexts and output-path precautions in [[verification_recipes]]. No future verification is claimed passed by authoring this specification.

## Objectives

| # | Objective | Output | Gate |
|---|-----------|--------|------|
| 1 | Diagram semantics have a text/keyboard equivalent matching source nodes/edges; registry template labels are reviewed read-only, data corrections staged to Hestia. | diagram_grammar.md | ⛩ DP4 entry and C1 |
| 2 | Every executable code action copies the displayed runnable string; clipboard denial has accessible recovery, and code remains readable without page overflow. | diagram_grammar.md; code_state_pack.md; registry_template_review.md | C2 reached-surface evidence |
| 3 | Reconcile the actual diff, limitations and AAR | Mission evidence manifest and five-line AAR | ⛩ DP5 remains human |
| 4 | Resolve FG-P0-003 with legible fresh-mobile labels and text/keyboard equivalence | diagram_grammar.md | C4 at DP5 |

## Constraints & gates

[I] Every hierarchy, typography, art or motion change must preserve semantic reading order, readable body text, focus, reduced-motion parity and equivalent text, checked on the actual affected routes in both themes; record not-applicable when no aesthetic change occurs. The storyboard and formative human review precede visual production. Word targets are advisory with written overage reasons; unsupported claims remain blocking.

[D] No edits to site/src/data/vaults.json, .adna, HAUSSMANN/VITRINE records or peer vaults. Registry asks are staged to Hestia. Provider pattern gaps are staged through the WebForge wrapper. Claim deltas stay GARNIER-owned for GR-7; read the predecessor register without editing it. No push, deploy or memo delivery is authorized here. Preserve ADR-048/049/053/057/059, Operations ADR-025 §D5, conditional H1/G4, counsel and the predecessor evidence freeze. Site changes are authorized for P1–P4 within the named mission scope after phase entry, including scoped hardening repairs; P0 and record-only closure work do not rewrite public copy.

## Goal and exit gate

[I] C1: Diagram semantics have a text/keyboard equivalent matching source nodes/edges; registry template labels are reviewed read-only, data corrections staged to Hestia. C2: Every executable code action copies the displayed runnable string; clipboard denial has accessible recovery, and code remains readable without page overflow. C3: mission_garnier_p3_3_diagram_code closes with a scoped diff, cited evidence and five-line AAR; DP5 remains a human gate and no reserved path/outward action is inferred.

## Verification and convention-13 pair audit

[I] This is a method-feasibility assessment, not executed acceptance. V1 and V2 are defined in frontmatter with concrete command/protocol references and controls; V3 uses R-CLOSE on this mission's actual diff. All nine pairs were assessed for the amended scope:

- V1×C1: covers the input/population contract by Manual: compare source graph IDs/edges with visible keyboard twin; derive diagram/code instances from tracked source imports.
- V1×C2: insufficient; inspecting /learn/concepts/triad; graph/keyboard twin; code components; all /vaults routes assigned by docs_population; diagram source data cannot establish the behavior in C2; V2 must reach its named output.
- V1×C3: insufficient; input inspection does not prove the actual mission_garnier_p3_3_diagram_code diff or a human gate event.
- V2×C1: supplementary; producing diagram_grammar.md; code_state_pack.md; registry_template_review.md does not prove the original input set was complete; retain V1.
- V2×C2: covers the behavior through R-SITE; R-CAPTURE /learn/concepts/triad, /vaults/graph and code-bearing templates; manual keyboard traversal and clipboard success/rejection using disposable Playwright permissions.
- V2×C3: supplies behavioral evidence for mission_garnier_p3_3_diagram_code, but V3 must independently inspect scope and closure authority.
- V3×C1: checks that diagram_grammar.md; code_state_pack.md; registry_template_review.md are present in the delivered set, not the truth or coverage of their contents.
- V3×C2: cannot replace R-SITE; R-CAPTURE /learn/concepts/triad, /vaults/graph and code-bearing templates; manual keyboard traversal and clipboard success/rejection using disposable Playwright permissions.; a clean diff is not a runtime, reader or measurement result.
- V3×C3: covers the mission_garnier_p3_3_diagram_code changed paths, linked evidence, AAR and explicitly separate DP5 event via R-CLOSE.

The three methods jointly cover the three criteria; no individual method proves all three. Run controls before trusting their verdicts. V1 negative control: Drop a node from the keyboard twin: node-set comparison must fail. V2 negative control: Reject clipboard permission and inject an overlong unbroken command: absence of recovery or page-wide overflow must fail. V3 negative control: reject a disposable reserved-path change or unsigned phase acceptance. Controls are isolated, never planted into production or peer files. New reusable checkers are provider contributions, authored early with their red-tests in the same commit.

## Budget

[I] ADR-016 content-load estimate: {"transition": 46, "bounded_objective_work": 32} = **78 kT**. Estimated agent sittings: **2**; calibration is **unmeasured**, not a repeated estimate presented as measured data. The work allowance is a judgment forecast, not a limit on honest reporting. Human recruitment/response time is excluded. Independent scoring work must be included in actuals rather than disappearing from the coordinator's accounting. See [[budget_basis]] for uncertainty and phase commitment. Re-scope at the next gate if projected work exceeds the bounded contract; do not silently skip routes. Billing is separately measured or reported unavailable.

## Definition of done

C1/C2/C3/C4 are satisfied on their stated surfaces with evidence and controls, every output is linked, changed claims and accessibility consequences are documented, scope stays within authority, and the SITREP, next prompt and AAR are filed. A manual or human item remains owed until performed. Append this mission's objective/finding/budget evidence to the rolling closure ledger during work; P6 reconciles it rather than reconstructing the campaign at the end. A human phase gate remains pending until the operator rules.

## Campaign context

Previous: [[mission_garnier_p3_2_hero_slots]]. Next: [[mission_garnier_p3_4_motion_social]]. [[campaign_architecture]] and [[charter_ratification_20260915]] govern scope/budgets.

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

## DP2 finding assignment — execution remains gated by DP4

[D] [[dp2_ratification_20260915]] assigns FG-P0-003 to this mission. Include /learn/concepts/triad in the diagram inventory and capture pack; the approved readability correction must preserve text/keyboard equivalence and meaningful reading order.

[I] C4 verification: V1×C4 identifies each source label and its text equivalent; V2×C4 directly loads the route in a fresh browser context at 390px and every canonical mobile width in both observed themes, inspects labels at default zoom and checks reflow/keyboard access. A disposable reproduction of the P0 tiny-label scaling must be rejected by visual inspection even if axe reports zero. V3×C4 checks these exact-route receipts and finding disposition, not readability itself. Record actual computed label sizes and captures; no axe-only closure. The three new pairs supplement the existing nine, without claiming execution. P3 scope/budget remains provisional until DP4.

[I] Dedicated V4 pair audit: V4×C1 supplements semantic/text-equivalence review on the triad route; V4×C2 cannot establish clipboard behavior; V4×C3 supplies route receipts but cannot authorize closure; V4×C4 directly tests fresh-mobile readability, reflow and accessible equivalents. Together with the original nine and V1–V3×C4 supplement, all sixteen method/criterion pairs are assessed for feasibility; no execution pass is claimed.
