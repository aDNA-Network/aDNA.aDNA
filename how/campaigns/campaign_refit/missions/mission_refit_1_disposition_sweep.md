---
plan_id: mission_refit_1_disposition_sweep
type: plan
title: "Refit M1 — Disposition sweep: settle the inbound docket (deadline-bound)"
owner: stanley
status: completed          # all 4 objectives done — obj-1 in the charter session; obj 2–4 executed at Refit M1 (2026-07-22), incl. the operator-approved RareAnthropic fold. adna_validate --governance zero drift; AAR below.
campaign_id: campaign_refit
campaign_phase: 1
campaign_mission_number: 1
mission_class: integration
executor_tier: opus        # governance edits + outbound rulings = judgment-heavy
token_budget_estimated: "~80 kT (read 4 memos + 2 patterns deep · author 3-4 outbound/disposition artifacts · 6 governance edits · validate)"
created: 2026-07-21
updated: 2026-07-22
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
- **Status**: completed (2026-07-21, chartering session — finalized as `coord_2026_07_21_rosetta_to_berthier_vnext_task_slot_and_adr022.md`, ratified text per G1 rows 1–2, committed for delivery 4 days ahead of the 07-25 tracker re-check)
- **Description**: Finalize `artifacts/draft_coord_rosetta_to_berthier_vnext_task_slot_and_adr022.md` with the
  DP2-ratified one-liner ("candidate for the v2.6 standard window, evaluated in M5's G2-ratified roadmap; NOT in
  motion for v8.9 — re-card M44") + the DP3 pointer re-affirming the existing 2026-07-03 ADR-022 co-sign reply
  (`coord_2026_07_03_rosetta_to_berthier_adr022_cosign_reply.md`). Move to `who/coordination/` as
  `coord_2026_07_2x_rosetta_to_berthier_vnext_task_slot_and_adr022.md`; frontmatter names the delivery
  dependency (operator-granted batch / next push election).
- **Files**: `who/coordination/coord_*_rosetta_to_berthier_vnext_task_slot_and_adr022.md`
- **Depends on**: G1 (DP2, DP3) — or the DP2 micro-ratification if G1 slips

### 2. B3 — Execute the D-DP2 six-item ruling
- **Status**: completed (2026-07-22, Refit M1 execution session)
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
- **Status**: completed (2026-07-22, Refit M1 execution session)
- **Description**: Per DP7: author `what/patterns/pattern_launch_acceptance_contract.md` (the A#-row
  gate-binding launch-acceptance instrument, sibling to [[pattern_iss_operator_gate]]), from the Berthier
  graduation proposal (`coord_2026_07_17_berthier_to_rosetta_launch_acceptance_contract_graduation.md`);
  request the A#-row instance seed in the reply.
- **Files**: `what/patterns/pattern_launch_acceptance_contract.md` (new)
- **Depends on**: G1 (DP7)

### 4. B6 — Park-notes for the held memos
- **Status**: completed (2026-07-22, Refit M1 execution session)
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

All four objectives complete; the inbound docket is empty.

- **Obj-1** (B1+B2 — Berthier vNext task-slot + ADR-022 pointer): shipped in the charter session (`coord_2026_07_21_rosetta_to_berthier_vnext_task_slot_and_adr022.md`, `staged_for_delivery`, 4 days ahead of deadline).
- **Obj-2** (B3 — D-DP2 six-item DP6 ruling): **5 edits to existing surfaces** — `pattern_state_queued_banner` §2.1 (integrity-verified roll) · `pattern_model_tiered_campaign_execution` §2.6 items 8–9 (adversary-born-PENDING · resume-not-respawn) **+ §2.7 flipped `proposed→accepted`** (the DP6 rider, G1-ratified) · both concepts' process-layer sections · `context_adna_core_ooda_cascade` Plan→Approve→Execute wrapper (item-4 consolidation, no new pattern) · `doctrine_credential_handling` §8.1 single-writer general form (item-5 amendment; standalone pattern → M5) — **plus new `pattern_decision_queue.md`** (item 6) and the per-item disposition reply (`coord_2026_07_22_rosetta_to_berthier_ddp2_dispositions.md`, seed requested).
- **Obj-3** (B4 — DP7): new `pattern_launch_acceptance_contract.md` (sibling to `pattern_iss_operator_gate`, HQ provenance kept) + adoption reply (`coord_2026_07_22_rosetta_to_berthier_launch_acceptance_adoption.md`, A#-row seed requested).
- **Obj-4** (B6): park-notes stamped on the Exchange (07-11) + Vitruvius ISS-repoint (07-06) memos (owner + resume-trigger named; no build).
- **Folded in (operator-approved)**: `RareAnthropic.aDNA` row added to `spec_org_pattern_ecosystem.md` §Active Org-Graphs (data-currency; version unchanged) + ack (`coord_2026_07_22_rosetta_to_hygeia_org_graph_registration_ack.md`) + codename-collision backlog idea (`idea_upstream_codename_collision_grep_order_templates.md`, → M5).

**Exit gate met**: `adna_validate --governance` **zero drift**; every new/edited pattern passes dual-audience (SO-7) + self-reference (SO-8) + ≥2 wikilinks (SO-10; decision_queue 9, launch_acceptance 10). **3 new outbound memos `staged_for_delivery`** (join the 2 prior → 5 for the G3 undelivered-items list). Commit-no-push. No normative/template surface shipped (standard v2.5 / governance 8.8 hold).

## AAR

`token_budget_actual`: **~55–60 kT** content-load for objectives 2–4 (the 2-agent recon Explore sweep ran as subagents outside this figure). Against the mission's **~80 kT** full-mission estimate — obj-1 consumed its share in the charter session, so obj 2–4 landing at ~55–60 kT is **within band** (no >2× drift; ADR-016 clean).

- **Worked**: The G1 rulings were precise enough to execute cold — all six D-DP2 items + DP7 landed exactly as specced; the sibling `pattern_iss_operator_gate` idiom made both new patterns fast to author against a known shape. `adna_validate --governance` zero-drift on the first run; all SO-7/8/10 gates green.
- **Didn't**: Nothing blocked. Both adopted patterns sit at `n=1 draft` (Berthier's instance seeds requested, not yet in hand — expected, not a miss). **Surfaced but not fixed** (deliberately out of scope): ambient frontmatter lint across ~15 *inbound* coordination memos (missing `updated`/`last_edited_by`) — pre-existing at HEAD, flagged only by `--level standard`, not the exit gate.
- **Finding**: The mission tripped over `pattern_decision_queue`'s **absence in real time** — the 07-22 RareAnthropic inbound arrived *after* the charter's docket was fixed, with no standing home, and had to be hand-caught by an operator fold ruling. That *is* the quiescent-window failure the new pattern names — demonstrated live, and now its own load-bearing self-reference.
- **Change**: When one mission both authors a standing-surface pattern **and** receives an out-of-docket inbound, fold the inbound **as that pattern's first instance** — the self-reference writes itself and the stray inbound gets a principled home instead of a bespoke ruling. (Applied here; candidate teaching for the decision-queue adoption guide.)
- **Follow-up**: (1) Deliver the **5 staged memos** at G3 (2 prior + 3 new). (2) On seed arrival, author the first full in-vault instances (decision-queue rowset · launch-acceptance A#-rows) — the maturation step toward graduation. (3) **M5** dispositions the standalone `pattern_single_writer_lease` + the codename-collision idea. (4) Candidate: a coordination-memo frontmatter currency sweep (~15 files; ambient, own-mission-sized).
