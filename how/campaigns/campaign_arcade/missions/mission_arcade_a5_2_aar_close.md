---
plan_id: mission_arcade_a5_2_aar_close
type: plan
title: "Campaign AAR, graduation, close splash"
owner: stanley
status: completed   # 2026-10-20, session_stanley_20261020_195614_arcade_a5_2_aar_close; G5 closure on the R65 conditions
campaign_id: campaign_arcade
campaign: campaign_arcade
campaign_phase: 5
campaign_mission_number: 15
mission_class: closeout
created: '2026-10-15'
updated: 2026-10-20
last_edited_by: agent_rosetta
tags: [plan, campaign, arcade]
executor_tier: opus
executor_lane: hosted
executor_runtime: claude
token_budget_estimated: 60
token_budget_unit: kT_content_load
token_budget_actual: 70   # ≈ content-load: open reads + plan ≈20 · derivations (budgets · AARs · rulings · commit range · census) ≈15 · AAR ≈15 · pattern + idea + erratum ≈12 · close cascade ≈8; no subagents
estimated_sessions: 1
calibrated_sessions: null
estimation_class: content-novel
budget_status: actual_recorded
depends_on:
- mission_arcade_a5_1_garnier_amendment
blocks:
[]
gate: "G5 — closure (operator signs)."
verification_method: "Every claim in the Completion Summary cites a path or a command; counts are derived, never typed; the five-line AAR is present before status: completed (Standing Order 5)."
---

# Mission: Campaign AAR, graduation, close splash

**Campaign**: [[campaign_arcade]] (Operation ARCADE — side campaign of [[campaign_garnier]])
**Phase**: P5 — GARNIER adjustment and close
**Mission**: 15 of 15

## Goal

Five-line AARs on every mission verified present; a campaign AAR with estimate-vs-actual per ADR-016 (content-load, subject-runtime booked on its own line per so11_retrospective_p1); reusable context graduated (the four relations as glossary + pattern; the profile fold path); close splash; STATE and MANIFEST re-derived.

## Exit Gate

G5 — closure (operator signs).

## Objectives

### 1. Campaign AAR
- **Status**: completed
- **Session**: session_stanley_20261020_195614_arcade_a5_2_aar_close
- **Description**: template_aar; the decadal 17-lens pass optional at the operator's call.
- **Files**: artifacts/p5/aar_campaign_arcade.md
- **Depends on**: none

### 2. Graduation + close
- **Status**: completed
- **Session**: session_stanley_20261020_195614_arcade_a5_2_aar_close
- **Description**: skill_context_graduation; skill_campaign_sitrep_splash; charter status completed on signature.
- **Files**: what/* · campaign_arcade.md
- **Depends on**: 1

## Campaign Context

### Previous Mission Outputs
- See [[mission_arcade_a5_1_garnier_amendment]].

### Next Mission Inputs
- Closure.

## Notes

- Conventions: `campaign_arcade/CLAUDE.md` (GARNIER's by pointer + the four ARCADE rules: memos-not-edits · SR-6 public naming hold · ADR-number qualification · tense labels).
- Provenance tags on every finding — `[D]` observed · `[I]` inferred · `[R]` peer record (re-verify before citing) · `[A]` assumption.

## Completion Summary

*Fill out when setting `status: completed`.*

### Deliverables
- `artifacts/p5/aar_campaign_arcade.md`: the campaign AAR (template_aar). It contains the 15-row scorecard (13 validated · 2 partial by design), the estimate-vs-actual table re-derived over 14/14 cards (1,055 → 1,135, ×1.08; campaign ≈1,205 vs 1,115), the explorer line (≈713 kT), the carries table (13 next, 13 of 13), lessons, and the close splash.
- `what/patterns/pattern_profile_upstream_fold_path.md` (`proposed`): graduated from `artifacts/p3/lister_fold_path.md`. Name-free, with 1 adoption (this vault).
- `how/backlog/idea_upstream_release_spec_mirror_regen.md` (`proposed`, v8.14 lane, priority high).
- `pattern_ledger_backed_acceptance_tables`: status re-checked, still `draft`. The fleet census found Terminal.aDNA as its only adoption.
- `token_budget_actual:` key normalised on A2.2 · A2.3 · A4.1. Each takes the card's own recorded value; no new numbers.
- Amendment §6: a dated erratum, appended (the ratified rows are kept).

### Descoped
- The decadal 17-lens pass (R64).
- A four-relations pattern. It fails skill_context_graduation's *not redundant* test: aDNA.aDNA ADR-065 is the accepted single source, and A2.1 graduated three glossary entries (`glossary_access_point` · `glossary_commercial_home` · `glossary_graph_product`).

### Key Findings
- `[D]` A2.2 (≈45) and A2.3 (≈55) **did** record budget actuals, in the `budget_status:` comment. A5.1's "never recorded" came from a derivation keyed to one field name. Corrected by erratum; R61 does not move.
- `[D]` All 14 prior cards carry the five AAR lines (python grep at this sitting).
- `[D]` R1–R63 are contiguous across the charter, the cards and the sessions.
- `[D]` Receipts at 19:56Z. **Committed:** LatticeProtocol ×2 (`802d94a` · `f122802`), Network (`58606fb9`), Fluxer (`b73ea5d`). **Untracked:** HarnessOld (Panacea) · Terminal (Vauban) · the Harness.aDNA cc copy.

### Scope Changes
- None. The budget-key normalisation and the erratum are corrections of the record, not scope.

## AAR

*Mandatory before setting `status: completed`. See `how/templates/template_aar_lightweight.md`.*

- **Worked**: Re-deriving every number from the cards rather than from the A5.1 table caught the table's own error before it reached the campaign's permanent record.
- **Didn't**: The plan-time read trusted the amendment's "A2.2 and A2.3 never recorded" for one step. The python pass found otherwise only because it printed per-card rows instead of a total.
- **Finding**: A derivation is only as wide as the field it reads: three cards held actuals under three different keys. Budget is a contract field, not a free-text habit.
- **Change**: `token_budget_actual:` is the one key. Normalised on the three cards; carry the rule into the next mission template revision (v8.14 queue).
- **Follow-up**:
  - GARNIER P1.3 readers → DP3 (item (i) already ruled);
  - v8.14 queue (13 carries, the spec-mirror step first);
  - DP3 item (j) registry deploy (its own GO);
  - three untracked receipts (nothing owed back).
