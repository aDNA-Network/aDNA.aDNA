---
plan_id: mission_champollion_m5_1_joint_base_layer_memo
type: plan
title: "M5.1 — Joint base-layer alignment memo: fill the skeleton, refresh the Noether countersign, T1 'context democracy' clearance"
owner: stanley
status: completed
campaign_id: campaign_champollion
campaign_phase: 5
campaign_mission_number: 1
mission_class: integration
executor_tier: opus
token_budget_estimated: "30 kT + Mode-B bookend allowance (~35; G3 D4 — integration is outward-facing, fable sets positions/asks per the G2 re-tier)"
token_budget_actual: "~62 kT (opus builder ~55 self-reported + fable bookends ~7) vs ~35 — +77%, worst integration delta of the campaign (inside the ADR-016 2× band at 1.77×). Driver: citation-grade evidence reads — the memo releases publicly at G5, so every claim needed receipts (17K sweep artifact + campaign records + the M5.7 primary-record hunt). Calibration note → datapoint #5: outward-facing integration memos price like verification — the cost center is the evidence corpus, not the prose."
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
tags: [plan, campaign, champollion, p5, lp_seam, noether, countersign, base_layer, context_democracy, m5_1]
---

# Mission M5.1 — Joint base-layer alignment memo

**Campaign**: [[../campaign_champollion|campaign_champollion]] · **Executor: opus (build) with fable bookends** — fable sets the positions/asks and reviews before anything stages (cross-graph = outward-facing; G2 re-tier note on the charter row) · **Ring 1** · **Mode B**.

## Objective

Fill the **joint base-layer alignment memo skeleton** — proposed to Noether in [[../../../../who/coordination/coord_2026_07_02_rosetta_to_noether_champollion_carnot_alignment|the G0-D7 released memo]] §2 — with this vault's side of the content (shared invariants · seam contracts · truth ownership), refresh the countersign ask, and record the formal **"context democracy" T1 clearance** (charter §6.H names the obligation; pin its exact meaning from §6.H + the skeleton at verify-before-dispatch — do not improvise the tier semantics).

**Countersign state at brief time (2026-07-02 22:30Z): PENDING** — no inbound Noether countersign in `who/coordination/`. The charter's P5 exit row makes **"pending-with-owner" a legitimate terminal state**: fill our side, stage, nudge at their cadence, close honestly. Do NOT block on Noether.

## Work

1. **Verify-before-dispatch inputs** (fable): re-check `who/coordination/` for an inbound Noether countersign (it may land mid-phase — the P2/G2 concurrency-burst precedent); refresh the LP STATE pin (was `carnot_active_cp1_open_two_tier`, CP1 8/8, at M4.4); read charter §6.H for the T1-clearance semantics.
2. **Fill the skeleton our-side**: shared invariants, seam contracts, truth-ownership boundaries — one section per campaign phase where each lands, per the skeleton's own structure. Our positions are drawn from what is already ratified (v2.5 standard · ADR-046 · the tiering pattern at `active` · Mode-B/Mode-A divergence recorded at pattern §2.5) — **cite at pin, never re-specify LP content** (codepin discipline, pattern_codepin).
3. **Stage the filled memo** as a new coordination artifact in OUR tree (`who/coordination/coord_2026_07_0X_rosetta_to_noether_joint_base_layer_memo_v1.md`, `status: staged` releasing at the next push batch, `countersign_requested: true`) — Rule 10: nothing writes into LatticeProtocol.aDNA. Fable rules the final shape at review.
4. **T1 clearance record**: one dated block (in the filled memo + a campaign-artifact note) recording that the "context democracy" framing is formally cleared at T1 for base-layer use, with the evidence trail (aDNA-network ethos ratified M5.7 2026-06-03; M4.4 product-story pass verified the live framing).
5. Standing sweep clause: out-of-scope hits → manifest.

## Acceptance criteria

- [x] Skeleton filled our-side, staged in OUR tree, `countersign_requested: true`, releases with the next push batch. *(`coord_2026_07_02_rosetta_to_noether_joint_base_layer_memo_v1.md` — 5 rows filled w/ truth-owner + `LP side:` markers; §3/§5 = scheduled-with-pointer, back-fill at M5.2/M5.3 closes pre-release.)*
- [x] Countersign state honestly recorded: COUNTERSIGNED (if Noether answered) or **PENDING-WITH-OWNER** (legitimate close per charter P5 row). *(PENDING-WITH-OWNER — zero 2026-07 inbound at 22:47Z re-check; memo refreshes the ask, does not block.)*
- [x] T1 clearance block recorded with evidence trail; every LP claim cite-at-pin. *(cleared-FORMAL: M5.7 gate 2026-06-03 primary record found at `campaign_adna_serious_tool_readiness.md:455` + live landing L70–77 + M4.4 re-verify; standalone artifact `artifacts/t1_context_democracy_clearance.md`; fable independently re-verified all three citations. Bonus honesty: the LP-pin-advanced note [47935b6→8cb6e1e] renders the codepin gap as mechanism-working, not defect.)*
- [x] Fable review passed; `adna_validate` FULL PASS + `--governance` zero drift; explicit-path commit (no push — batches at G5). *(PASS, zero completions needed — first clean-on-first-review builder output of the campaign; quiescence check confirmed agent dead pre-review.)*

## Guardrails

Rule 10 absolute (no LatticeProtocol.aDNA writes — the memo IS the seam) · NAMES-ONLY · cite-at-pin, never re-specify another graph's content · pending-with-owner ≠ failure · P4-learned: rider-shaped items verified-before-estimate; after any builder completion notification, **TaskStop the dispatch's agent-id + verify tree quiescence before review-fixes** (twin-builder hazard, M4.4).

## Verification surface

`python3.13 what/lattices/tools/adna_validate.py .` + `--governance`; the staged memo's frontmatter complete (F-CHM-001 class); grep confirms no writes outside this vault; countersign-state claim matches `who/coordination/` reality.

## Escalation triggers

- T1/§6.H semantics ambiguous after reading the sources → fable rules at review; if still ambiguous → G5 input, do not improvise.
- Noether countersign arrives mid-mission **with edits** → fable adjudicates the deltas (bilateral content is judgment work).
- Budget > 45 kT → halt and report.
