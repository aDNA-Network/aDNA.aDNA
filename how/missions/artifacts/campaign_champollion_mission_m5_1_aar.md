---
type: aar
artifact_id: campaign_champollion_mission_m5_1_aar
title: "AAR — Champollion M5.1 (joint base-layer memo filled + T1 cleared-formal)"
campaign_id: campaign_champollion
mission_id: mission_champollion_m5_1_joint_base_layer_memo
executor_tier: opus
token_budget_estimated: "~35 kT (30 charter + Mode-B allowance)"
token_budget_actual: "~62 kT (opus builder ~55 self-reported + fable bookends ~7) — +77%"
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
status: active
tags: [aar, champollion, p5, m5_1, noether, seam, t1, countersign, mode_b]
---

# AAR — Mission M5.1: Joint base-layer memo

**Session**: `session_stanley_20260702T224717Z_champollion_p5_sweep` · **Executor: opus subagent** at-tier, **fable-orchestrated** (Mode B) · integration-class · Ring 1.

## Five lines

- **Worked**: planning-time fact-pinning left the builder zero ambiguity — the T1 answer was already sitting in the alignment memo §4 (cleared-preliminary), so "formalize with citations" was a hunt, not an interpretation; the builder's two honesty upgrades improved on the dispatch (the codepin pattern's real filename `pattern_cross_graph_codepin.md`, and reframing the advanced LP pin `47935b6→8cb6e1e` as *the codepin mechanism visibly working* rather than hiding or chasing it). **First clean-on-first-review builder output of the campaign** — zero fable completions needed; quiescence check (TaskStop) confirmed the agent dead pre-review, no twin.
- **Didn't**: budget — ~62 vs ~35 (**+77%**, the campaign's worst integration delta; inside the ADR-016 band at 1.77×). The M5.7 primary-record hunt (a 46 KB grep result) and the citation-grade evidence reads were the cost.
- **Finding**: **outward-facing integration memos price like verification, not authoring** — when a memo releases publicly and every claim needs a receipt, the cost center is the evidence corpus, not the prose. Calibration cousin of the G2 class-split rule; rides datapoint #5.
- **Change**: none in-place (the deliverables shipped as-built); the memo's §3/§5 pointer stubs are an orchestrator-owed back-fill at M5.2/M5.3 closes so the memo releases complete.
- **Follow-up**: countersign = pending-with-owner (Noether's cadence; G5-D4 carries the seam-state acceptance); Carnot's T1 tracker resolves on her countersign; the §3 joint-Prometheus posture ask is restated and still open.

## Estimate vs actual

~35 → ~62 (+77%). Attribution: builder self-report weights the input-read surface (17K sweep artifact + campaign records + the M5.7 hunt); harness-side signals (18 tool uses) suggest the self-estimate is conservative-high, but the corpus convention is self-report + bookend share, so it stands. Integration-class calibration note emitted for P6+ briefs.

## Evidence chain

`who/coordination/coord_2026_07_02_rosetta_to_noether_joint_base_layer_memo_v1.md` (the deliverable) · [[../../campaigns/campaign_champollion/artifacts/t1_context_democracy_clearance|t1_context_democracy_clearance]] · fable re-verification: `campaign_adna_serious_tool_readiness.md:455` (M5.7 record) + `site/src/pages/index.astro:70-77` (live framing) + `grep "aDNA Protocol"` = 0 + `git -C LatticeProtocol.aDNA status` untouched.
