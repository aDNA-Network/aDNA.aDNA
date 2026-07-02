---
type: artifact
artifact_id: telemetry_corpus_p2
title: "Champollion P2 telemetry corpus — datapoint #2 (per-tier estimate-vs-actual, first fable-orchestrated phase)"
campaign_id: campaign_champollion
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
status: active
emitted_at: "G2 (P2 close), 2026-07-02"
consumer: "Context.aDNA (Prometheus) — coord_2026_07_02_rosetta_to_prometheus_model_tier_pattern (Ask 3)"
tags: [artifact, champollion, p2, telemetry, model_tiering, prometheus, corpus, adr_016, fable_orchestration]
---

# Champollion P2 telemetry corpus — datapoint #2

**Second per-campaign export in the [[telemetry_corpus_p1|datapoint #1]] shape** (cumulative-append model: same join-key table + rollup + verdict + signals, per phase close). Emitted at the **G2** phase close (2026-07-02), accepted by the operator as **corpus datapoint #2** (G2 D4). Join keys per [[../../../../what/patterns/pattern_model_tiered_campaign_execution|pattern §3]]: **`tier_planned × model_actual × budget_estimated × budget_actual`**.

**Structural novelty vs datapoint #1**: P2 is the **first fable-orchestrated phase** — the operator ran the main session at fable (`/model fable`), so the orchestration tier sits *above* the P1 shape (which was opus-orchestrated). Opus missions executed as opus subagents; the fable mission ran at-tier direct in the main session (M1.5 precedent). At G2 the operator formalized this as the standing role model: **fable = strategy/planner/brainstormer/reviewer · opus = builder/executor** (see the G2 output record).

## Per-mission records (P2: M2.1–M2.3)

| mission | mission_class | tier_planned | model_actual | budget_est (kT) | budget_actual (kT) | Δ | at_tier | commit |
|---|---|---|---|---|---|---|---|---|
| M2.1 standard currency audit | verification | opus | opus (subagent) / fable orch | 50 | ~18 | **−64%** | ✅ | `9b32fa2` |
| M2.2 version-cut ADR-046 | integration | fable | fable (direct, main session) | 30 | ~20 | −33% | ✅ | `3f2a898` |
| M2.3 glossary/concepts currency | implementation | opus | opus (subagent) / fable orch | 35 | ~26 | −26% | ✅ | `7d0b19b` |

> `model_actual` note: same separation discipline as datapoint #1 — recorded `budget_actual` is the **tier-matched executor spend** (subagent self-reported output + orchestrator's verify/write share attributed per mission); fable orchestration overhead outside mission scope is not folded in.

## Per-tier rollup

| tier_planned | missions | est (kT) | actual (kT) | Δ | ADR-016 band (drift < 2×) |
|---|---|---|---|---|---|
| fable | M2.2 | 30 | 20 | −33% | ✅ 1.50× |
| opus | M2.1, M2.3 | 85 | 44 | −48% | M2.3 ✅ 1.35× · **M2.1 ~2.8×** |
| **total** | **3** | **115** | **64** | **−44%** | 2/3 clear |

## Routing-quality verdict (G2 = second routing-quality checkpoint → PASS)

- **3/3 missions at planned tier**; 0 tier-changing escalations (the one escalation, E1, arrived at the gate as ADR-046's C4 arms — the designed path).
- **The fable-orchestration shape held**: verify-before-dispatch caught nothing defective in the P2 briefs (they were authored at the same tier that verified them — a self-consistency win the P1 opus-orchestrated shape couldn't have), and the independent output verify caught 1 mislabeled wikilink + 5 out-of-scope stale sites in M2.3.
- **M2.1 (−64%, ~2.8× under) is the second verification-class breach of the 2× line** (M1.4 was the first) — accepted in lieu of an ADR-016 retrospective (G2 D4), cause now **class-confirmed**, not mission-idiosyncratic.

## Signals for the corpus (what Prometheus can verify/refute)

1. **Class-split calibration (adopted for P3+, G2 D4)** — the two mission classes drift differently: **verification** missions run ≥2× under estimate when the orchestrator pre-resolves anchors (M1.4 −53%, M2.1 −64%) because estimates budget corpus-size while the real cost is the *judgment surface* (items to classify/verify); **implementation/integration** estimates land inside the band (M1.2 −9% · M2.2 −33% · M2.3 −26% · M1.1/M1.5 −25%). Rule: budget verification missions net of orchestrator pre-resolution.
2. **Orchestrator tier is fungible upward without routing damage** — flipping orchestration opus→fable changed no `at_tier` outcomes and reduced total spend (−44% vs P1's −25%, partly the calibration effect); the bookend roles (plan/verify/review) transfer cleanly across orchestrator tiers.
3. **Sweep-plus-adjudicate boundary discipline works** — M2.3's executor reported out-of-scope findings instead of fixing them; the orchestrator adjudicated keep/strip same-session (4 fixed · 1 kept-historical · 1 → new finding). Candidate standing brief clause for content sweeps.
4. **Role formalization (G2)** — from P3 the campaign runs the two-role model (fable bookends every mission: brief → verify-before-dispatch → independent review; opus builds). `executor_tier` on mission cards now denotes the **build** tier; review-substance missions (M6.3, M7.2) stay fable-led. Prometheus can watch whether the bookend overhead (unrecorded in the per-mission rows) stays proportionate.
