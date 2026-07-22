---
plan_id: mission_refit_1_disposition_sweep
type: plan
title: "Refit M1 — Disposition sweep: settle the inbound docket (deadline-bound)"
owner: stanley
status: planned            # activates post-G1; if G1 slips past 07-24, the DP2 micro-ratification fires this mission's B1 objective standalone
campaign_id: campaign_refit
campaign_phase: 1
campaign_mission_number: 1
mission_class: integration
executor_tier: opus        # governance edits + outbound rulings = judgment-heavy
token_budget_estimated: "~80 kT (read 4 memos + 2 patterns deep · author 3-4 outbound/disposition artifacts · 6 governance edits · validate)"
created: 2026-07-21
updated: 2026-07-21
last_edited_by: agent_rosetta
tags: [plan, campaign, refit, disposition, coordination, berthier, deadline]
---

# Mission: Refit M1 — Disposition sweep

**Campaign**: [[campaign_refit]] · **Phase**: P1 — Settle · **Mission**: 1 of 6

## Goal

Settle the entire inbound docket in one sweep: transmit the G1-ruled answers outbound (the deadline-bearing B1
first), execute the adopted D-DP2 governance items, adopt the launch-acceptance-contract pattern, and park-note
the two held memos — so no inbound item remains un-dispositioned and Operations' calendar unblocks.

## Exit Gate

B1 answer memo committed for delivery **≤07-24** (hard 07-31) + all four B-rows dispositioned with artifacts +
`adna_validate --governance` zero drift + every new/edited pattern passes dual-audience (SO-7), self-reference
(SO-8), ≥2 wikilinks (SO-10).

## Objectives

### 1. B1+B2 — Transmit the vNext task-slot answer + ADR-022 pointer
- **Status**: planned
- **Description**: Finalize `artifacts/draft_coord_rosetta_to_berthier_vnext_task_slot_and_adr022.md` with the
  DP2-ratified one-liner ("candidate for the v2.6 standard window, evaluated in M5's G2-ratified roadmap; NOT in
  motion for v8.9 — re-card M44") + the DP3 pointer re-affirming the existing 2026-07-03 ADR-022 co-sign reply
  (`coord_2026_07_03_rosetta_to_berthier_adr022_cosign_reply.md`). Move to `who/coordination/` as
  `coord_2026_07_2x_rosetta_to_berthier_vnext_task_slot_and_adr022.md`; frontmatter names the delivery
  dependency (operator-granted batch / next push election).
- **Files**: `who/coordination/coord_*_rosetta_to_berthier_vnext_task_slot_and_adr022.md`
- **Depends on**: G1 (DP2, DP3) — or the DP2 micro-ratification if G1 slips

### 2. B3 — Execute the D-DP2 six-item ruling
- **Status**: planned
- **Description**: Per the G1 DP6 ruling: (1) refine `pattern_state_queued_banner` with the integrity-verified
  STATE-roll discipline (fixed newest-N blocks · per-block md5/char-count · method-validation vs ≥2 known prior
  hashes · round-trip re-read); (2) extend `pattern_model_tiered_campaign_execution` §2.6 with
  adversary-born-PENDING + resume-not-respawn — **and ratify our own §2.7** (proposed since 07-14) at the same
  stroke per the DP6 rider; (3) add the "token-optimization at the process layer" paragraph + cross-links to
  `concept_context_optimization` + `concept_token_selection`; (4) run the Plan-Approve-Execute consolidation
  pass on existing surfaces (no new pattern); (5) promote the single-writer general form within the doctrine §8
  surface, linking [[idea_upstream_single_writer_lease_for_inventory]] (standalone pattern → M5 triage); (6)
  author `pattern_decision_queue` (3-band A/B/C operator-decision queue), requesting Berthier's reference
  implementation as instance seed. Then send the per-item disposition reply memo.
- **Files**: `what/patterns/pattern_state_queued_banner.md` · `what/patterns/pattern_model_tiered_campaign_execution.md` ·
  `what/patterns/pattern_decision_queue.md` (new) · `what/concepts/concept_context_optimization.md` ·
  `what/concepts/concept_token_selection.md` · doctrine §8 surface · `who/coordination/coord_*_rosetta_to_berthier_ddp2_dispositions.md`
- **Depends on**: G1 (DP6)

### 3. B4 — Adopt the launch-acceptance-contract pattern
- **Status**: planned
- **Description**: Per DP7: author `what/patterns/pattern_launch_acceptance_contract.md` (the A#-row
  gate-binding launch-acceptance instrument, sibling to [[pattern_iss_operator_gate]]), from the Berthier
  graduation proposal (`coord_2026_07_17_berthier_to_rosetta_launch_acceptance_contract_graduation.md`);
  request the A#-row instance seed in the reply.
- **Files**: `what/patterns/pattern_launch_acceptance_contract.md` (new)
- **Depends on**: G1 (DP7)

### 4. B6 — Park-notes for the held memos
- **Status**: planned
- **Description**: Acknowledge-as-parked (one-line disposition stamp each, owner + trigger named): the Exchange
  conformance-spec-placement memo (2026-07-11; the draft reply
  `coord_2026_07_11_rosetta_to_berthier_exchange_graph_spec_placement` is operator-held) and the Vitruvius ISS
  wrapper-repoint fleet memo (2026-07-06). No build.
- **Files**: the two memos' disposition stamps (frontmatter `status`/note only)
- **Depends on**: none

## Campaign Context

**Previous mission outputs**: P0 staged the B1 draft + the DP packet; session-0 committed all 8 inbound memos.
**Next mission inputs**: M5 consumes the B1 ruling as the roadmap's first fixed fact; G3 lists this mission's
outbound memos in the push election.

## Notes

Risks: outbound delivery is operator-gated (the reason ADR-022 went silent) — frontmatter delivery-dependency
is mandatory; 6 governance edits can sprawl — the ruling is already made at G1, this mission only executes.

## Completion Summary

*Fill out when setting `status: completed`.*

## AAR

*Mandatory before `status: completed` (SO-5). Include `token_budget_actual` (SO-11).*

- **Worked**:
- **Didn't**:
- **Finding**:
- **Change**:
- **Follow-up**:
