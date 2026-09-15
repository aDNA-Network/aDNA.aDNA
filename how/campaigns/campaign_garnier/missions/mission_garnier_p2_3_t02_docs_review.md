---
plan_id: mission_garnier_p2_3_t02_docs_review
type: plan
title: Review documentation tranche T02
owner: stanley
status: queued
campaign_id: campaign_garnier
campaign: campaign_garnier
campaign_phase: 2
campaign_mission_number: 10
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
token_budget_estimated: 66
token_budget_unit: kT_content_load
estimated_sessions: 1
calibrated_sessions: null
estimation_class: content-novel
decade_status: scope_approved_phase_budgeted
vitruvius_dimensions:
- D4
- D6
- D7
webforge_patterns:
- how/federation/webforge/
patterns_to_author: []
depends_on:
- mission_garnier_p2_3_t01_docs_review
blocks:
- mission_garnier_p2_3_t03_docs_review
acceptance_criteria:
- 'C1: Read every assigned source and rendered article in T02; record each claim/instruction finding and reviewed
  disposition, with no uninspected row marked reviewed.'
- 'C2: Every correction in T02 survives source regeneration and safe build, agrees with its twin and has an executed
  local example or explicitly held external step.'
- 'C3: mission_garnier_p2_3_t02_docs_review closes with a scoped diff, cited evidence and five-line AAR; DP4 remains
  a human gate and no reserved path/outward action is inferred.'
verification_method:
- id: V1
  surface: docs_population T02; exact source/HTML/twin rows; source_fidelity_ledger
  method: Read every assigned source and rendered article in T02; record each claim/instruction finding and reviewed
    disposition, with no uninspected row marked reviewed.
  command: R-SOURCE for exactly /learn/tutorials/design-a-mission,/learn/tutorials/exchange-adoption-path,/learn/tutorials/extend-the-ontology,/learn/tutorials/federate-a-vault,/learn/tutorials/first-claude-md,/learn/tutorials/navigate-a-vault,/learn/tutorials/question-test,/learn/tutorials/run-a-campaign,/learn/tutorials/write-a-context-file,/community/proposals/aep-1,/community/proposals/aep-2,/reference/specification/1-introduction-scope,/reference/specification/10-context-library,/reference/specification/11-coordination-protocol,/reference/specification/12-template-system;
    manually follow every normative/lineage citation and record reached sections.
  red_test: 'Remove one T02 route from the review ledger or preserve only its title: coverage/read-evidence reconciliation
    must fail.'
- id: V2
  surface: docs_t02_review_ledger.md; docs_t02_correction_evidence.md
  method: Every correction in T02 survives source regeneration and safe build, agrees with its twin and has an executed
    local example or explicitly held external step.
  command: R-SITE; R-SOURCE execution/fidelity protocol; R-CAPTURE all changed routes in T02.
  red_test: 'Seed an obsolete local command and stale twin in disposable copies: execution or fidelity checks must
    identify both by route.'
- id: V3
  surface: mission_garnier_p2_3_t02_docs_review base-to-final diff, evidence manifest and AAR
  method: mission_garnier_p2_3_t02_docs_review closes with a scoped diff, cited evidence and five-line AAR; DP4
    remains a human gate and no reserved path/outward action is inferred.
  command: R-CLOSE; inspect docs_t02_review_ledger.md; docs_t02_correction_evidence.md and the DP4 disposition.
  red_test: Place a registry/predecessor write or an unsigned DP4 approval in a disposable mission_garnier_p2_3_t02_docs_review
    closure record; scope/authority review must reject it.
human_gate: DP3 phase entry/budget; DP4 phase exit. DP1 accepted with amendments on 2026-09-15.
verification_surface: agent
verification_check_set: custom
calibration_status: uncalibrated
calibration_basis: Judgment estimate with stated workload; no measured GARNIER execution calibration.
budget_breakdown_kT:
  transition: 23
  source_read_proxy: 20
  page_review: 15
  verification_and_close: 8
budget_status: provisional_until_DP3
human_elapsed_time: phase-gate response time excluded
input_manifest: docs_population T02; exact source/HTML/twin rows; source_fidelity_ledger
output_artifacts:
- docs_t02_review_ledger.md
- docs_t02_correction_evidence.md
contract_version: garnier_amendment_20260915
---
# Review documentation tranche T02

> **Read cold.** Act as Rosetta's executor for Stanley through Berthier. Read root and [[../CLAUDE|campaign governance]], [[campaign_garnier]], [[charter_ratification_20260915]], [[verification_recipes]] and this mission. DP1 is accepted; verify the named later phase gate before execution.

## Why

[I] Read every assigned source and rendered article in T02; record each claim/instruction finding and reviewed disposition, with no uninspected row marked reviewed. Every correction in T02 survives source regeneration and safe build, agrees with its twin and has an executed local example or explicitly held external step.

## Where we are

[D] This is a specification amended on 2026-09-15 against the genesis packet at 5a0849a. The existing local build and source inventory are dated inputs; no new site behavior or human evidence was verified by this amendment. Read [[verification_report]] for genesis limitations and [[docs_review_scope]] for the assigned population. Refresh source/build identity at mission open.

## Scope

[I] Inputs: docs_population T02; exact source/HTML/twin rows; source_fidelity_ledger. Outputs: docs_t02_review_ledger.md; docs_t02_correction_evidence.md. Use the command contexts and output-path precautions in [[verification_recipes]]. No future verification is claimed passed by authoring this specification.

### Exact tranche population

[D] Assigned on 2026-09-15 from source and existing built paths; these are queued reads, not completed review.

- `/learn/tutorials/design-a-mission` — `site/src/content/guides/design-a-mission.mdx`; source, HTML and twin hashes/paths are in docs_population.json.
- `/learn/tutorials/exchange-adoption-path` — `site/src/content/guides/exchange-adoption-path.mdx`; source, HTML and twin hashes/paths are in docs_population.json.
- `/learn/tutorials/extend-the-ontology` — `site/src/content/guides/extend-the-ontology.mdx`; source, HTML and twin hashes/paths are in docs_population.json.
- `/learn/tutorials/federate-a-vault` — `site/src/content/guides/federate-a-vault.mdx`; source, HTML and twin hashes/paths are in docs_population.json.
- `/learn/tutorials/first-claude-md` — `site/src/content/guides/first-claude-md.mdx`; source, HTML and twin hashes/paths are in docs_population.json.
- `/learn/tutorials/navigate-a-vault` — `site/src/content/guides/navigate-a-vault.mdx`; source, HTML and twin hashes/paths are in docs_population.json.
- `/learn/tutorials/question-test` — `site/src/content/guides/question-test.mdx`; source, HTML and twin hashes/paths are in docs_population.json.
- `/learn/tutorials/run-a-campaign` — `site/src/content/guides/run-a-campaign.mdx`; source, HTML and twin hashes/paths are in docs_population.json.
- `/learn/tutorials/write-a-context-file` — `site/src/content/guides/write-a-context-file.mdx`; source, HTML and twin hashes/paths are in docs_population.json.
- `/community/proposals/aep-1` — `site/src/content/proposals/aep-0001-proposal-process.md`; source, HTML and twin hashes/paths are in docs_population.json.
- `/community/proposals/aep-2` — `site/src/content/proposals/aep-0002-canonical-url-law.md`; source, HTML and twin hashes/paths are in docs_population.json.
- `/reference/specification/1-introduction-scope` — `site/src/content/spec/01-introduction-scope.mdx`; source, HTML and twin hashes/paths are in docs_population.json.
- `/reference/specification/10-context-library` — `site/src/content/spec/10-context-library.mdx`; source, HTML and twin hashes/paths are in docs_population.json.
- `/reference/specification/11-coordination-protocol` — `site/src/content/spec/11-coordination-protocol.mdx`; source, HTML and twin hashes/paths are in docs_population.json.
- `/reference/specification/12-template-system` — `site/src/content/spec/12-template-system.mdx`; source, HTML and twin hashes/paths are in docs_population.json.

## Objectives

| # | Objective | Output | Gate |
|---|-----------|--------|------|
| 1 | Read every assigned source and rendered article in T02; record each claim/instruction finding and reviewed disposition, with no uninspected row marked reviewed. | docs_t02_review_ledger.md | ⛩ DP3 entry and C1 |
| 2 | Every correction in T02 survives source regeneration and safe build, agrees with its twin and has an executed local example or explicitly held external step. | docs_t02_review_ledger.md; docs_t02_correction_evidence.md | C2 reached-surface evidence |
| 3 | Reconcile the actual diff, limitations and AAR | Mission evidence manifest and five-line AAR | ⛩ DP4 remains human |

## Constraints & gates

[I] Every hierarchy, typography, art or motion change must preserve semantic reading order, readable body text, focus, reduced-motion parity and equivalent text, checked on the actual affected routes in both themes; record not-applicable when no aesthetic change occurs. The storyboard and formative human review precede visual production. Word targets are advisory with written overage reasons; unsupported claims remain blocking.

[D] No edits to site/src/data/vaults.json, .adna, HAUSSMANN/VITRINE records or peer vaults. Registry asks are staged to Hestia. Provider pattern gaps are staged through the WebForge wrapper. Claim deltas stay GARNIER-owned for GR-7; read the predecessor register without editing it. No push, deploy or memo delivery is authorized here. Preserve ADR-048/049/053/057/059, Operations ADR-025 §D5, conditional H1/G4, counsel and the predecessor evidence freeze. Site changes are authorized for P1–P4 within the named mission scope after phase entry, including scoped hardening repairs; P0 and record-only closure work do not rewrite public copy.

## Goal and exit gate

[I] C1: Read every assigned source and rendered article in T02; record each claim/instruction finding and reviewed disposition, with no uninspected row marked reviewed. C2: Every correction in T02 survives source regeneration and safe build, agrees with its twin and has an executed local example or explicitly held external step. C3: mission_garnier_p2_3_t02_docs_review closes with a scoped diff, cited evidence and five-line AAR; DP4 remains a human gate and no reserved path/outward action is inferred.

## Verification and convention-13 pair audit

[I] This is a method-feasibility assessment, not executed acceptance. V1 and V2 are defined in frontmatter with concrete command/protocol references and controls; V3 uses R-CLOSE on this mission's actual diff. All nine pairs were assessed for the amended scope:

- V1×C1: covers the input/population contract by R-SOURCE for exactly /learn/tutorials/design-a-mission,/learn/tutorials/exchange-adoption-path,/learn/tutorials/extend-the-ontology,/learn/tutorials/federate-a-vault,/learn/tutorials/first-claude-md,/learn/tutorials/navigate-a-vault,/learn/tutorials/question-test,/learn/tutorials/run-a-campaign,/learn/tutorials/write-a-context-file,/community/proposals/aep-1,/community/proposals/aep-2,/reference/specification/1-introduction-scope,/reference/specification/10-context-library,/reference/specification/11-coordination-protocol,/reference/specification/12-template-system; manually follow every normative/lineage citation and record reached sections.
- V1×C2: insufficient; inspecting docs_population T02; exact source/HTML/twin rows; source_fidelity_ledger cannot establish the behavior in C2; V2 must reach its named output.
- V1×C3: insufficient; input inspection does not prove the actual mission_garnier_p2_3_t02_docs_review diff or a human gate event.
- V2×C1: supplementary; producing docs_t02_review_ledger.md; docs_t02_correction_evidence.md does not prove the original input set was complete; retain V1.
- V2×C2: covers the behavior through R-SITE; R-SOURCE execution/fidelity protocol; R-CAPTURE all changed routes in T02.
- V2×C3: supplies behavioral evidence for mission_garnier_p2_3_t02_docs_review, but V3 must independently inspect scope and closure authority.
- V3×C1: checks that docs_t02_review_ledger.md; docs_t02_correction_evidence.md are present in the delivered set, not the truth or coverage of their contents.
- V3×C2: cannot replace R-SITE; R-SOURCE execution/fidelity protocol; R-CAPTURE all changed routes in T02.; a clean diff is not a runtime, reader or measurement result.
- V3×C3: covers the mission_garnier_p2_3_t02_docs_review changed paths, linked evidence, AAR and explicitly separate DP4 event via R-CLOSE.

The three methods jointly cover the three criteria; no individual method proves all three. Run controls before trusting their verdicts. V1 negative control: Remove one T02 route from the review ledger or preserve only its title: coverage/read-evidence reconciliation must fail. V2 negative control: Seed an obsolete local command and stale twin in disposable copies: execution or fidelity checks must identify both by route. V3 negative control: reject a disposable reserved-path change or unsigned phase acceptance. Controls are isolated, never planted into production or peer files. New reusable checkers are provider contributions, authored early with their red-tests in the same commit.

## Budget

[I] ADR-016 content-load estimate: {"transition": 23, "source_read_proxy": 20, "page_review": 15, "verification_and_close": 8} = **66 kT**. Estimated agent sittings: **1**; calibration is **unmeasured**, not a repeated estimate presented as measured data. The work allowance is a judgment forecast, not a limit on honest reporting. Human recruitment/response time is excluded. Independent scoring work must be included in actuals rather than disappearing from the coordinator's accounting. See [[budget_basis]] for uncertainty and phase commitment. Re-scope at the next gate if projected work exceeds the bounded contract; do not silently skip routes. Billing is separately measured or reported unavailable.

## Definition of done

C1/C2/C3 are satisfied on their stated surfaces with evidence and controls, every output is linked, changed claims and accessibility consequences are documented, scope stays within authority, and the SITREP, next prompt and AAR are filed. A manual or human item remains owed until performed. Append this mission's objective/finding/budget evidence to the rolling closure ledger during work; P6 reconciles it rather than reconstructing the campaign at the end. A human phase gate remains pending until the operator rules.

## Campaign context

Previous: [[mission_garnier_p2_3_t01_docs_review]]. Next: [[mission_garnier_p2_3_t03_docs_review]]. [[campaign_architecture]] and [[charter_ratification_20260915]] govern scope/budgets.

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
