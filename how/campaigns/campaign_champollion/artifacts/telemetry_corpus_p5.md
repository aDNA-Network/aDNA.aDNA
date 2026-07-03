---
type: artifact
artifact_id: telemetry_corpus_p5
title: "Champollion P5 telemetry corpus — datapoint #5 (per-tier estimate-vs-actual, the cross-graph calibration phase)"
campaign_id: campaign_champollion
created: 2026-07-03
updated: 2026-07-03
last_edited_by: agent_rosetta
status: active
emitted_at: "G5 (P5 close), ratified 2026-07-03"
consumer: "Context.aDNA (Prometheus) — coord_2026_07_02_rosetta_to_prometheus_model_tier_pattern (Ask 3)"
tags: [artifact, champollion, p5, telemetry, model_tiering, prometheus, corpus, adr_016, mode_b, cross_graph, calibration]
---

# Champollion P5 telemetry corpus — datapoint #5

**Fifth per-campaign export in the [[telemetry_corpus_p1|datapoint #1]] shape.** Emitted at the **G5** close (ratified 2026-07-03), accepted as **corpus datapoint #5** (G5 D3). Join keys per [[../../../../what/patterns/pattern_model_tiered_campaign_execution|pattern §3]]: **`tier_planned × model_actual × budget_estimated × budget_actual`**.

**Structural novelty vs datapoint #4**: P5 is the campaign's first **cross-graph** phase (two of three missions read/negotiate against LatticeProtocol.aDNA) — and it produced the corpus's clearest **within-phase natural experiment**: two missions dispatched WITHOUT foreign-fact pre-resolution overran ~1.8–1.9×; the one dispatched WITH pre-pinned boundary facts came in under. G5-D3 **adopted the countermeasure as standing practice**.

## Per-mission records (P5: M5.1–M5.3)

| mission | mission_class | tier_planned | model_actual | budget_est (kT) | budget_actual (kT) | Δ | at_tier | commit |
|---|---|---|---|---|---|---|---|---|
| M5.1 joint base-layer memo | integration | opus | opus (subagent) / fable orch | 35 | ~62 | **+77%** | ✅ | `b7a0ef0` |
| M5.2 mutual conformance | verification | opus | opus (subagent) / fable orch | 45 | ~87 | **+93%** | ✅ | `57b71a5` |
| M5.3 Exchange/Lighthouse story | implementation | opus | opus (subagent) / fable orch | 46 | ~42 | **−9%** | ✅ | `49f6657` |
| **Total** | | | | **126** | **~191** | **+52%** | | |

> `budget_actual` convention unchanged (subagent self-report + per-mission fable bookend share: ~7 / ~9 / ~6 kT).

## Per-tier rollup

| tier_planned | missions | est (kT) | actual (kT) | Δ | ADR-016 band (drift < 2×) |
|---|---|---|---|---|---|
| opus | M5.1–M5.3 | 126 | ~191 | **+52%** | ✅ all three (worst = M5.2 at 1.93× — the campaign's closest approach) |

## Verdict

**3/3 at planned tier · 0 tier-changing escalations · no ADR-016 retrospective** (worst 1.93× < 2×). The phase-level +52% has a single attributable cause — **foreign-corpus evidence reads** — demonstrated by the within-phase contrast (see Signals #1). Campaign cumulative through five phases: **705 est → ~714 actual ≈ +1%** (the P1–P4 −10% buffer absorbed P5's overrun; the campaign is on budget).

## Signals for the corpus

1. **The cross-graph read-surface effect, isolated**: M5.1 (+77%) hunted primary records for citation-grade outward claims; M5.2 (+93%) censused a foreign vault + read a foreign spec corpus; M5.3 (−9%) received the same class of foreign facts **pre-pinned by the orchestrator** and cited them instead of re-deriving. **ADOPTED at G5-D3 as standing: every cross-graph dispatch gets its boundary facts pre-resolved at verify-before-dispatch; un-pre-pinned cross-graph missions budget +50–80% on evidence-heavy classes.** (This refines, not replaces, the G2 class-split rule — which held for in-vault verification at M3.3 +3% and breaks specifically on cross-graph corpora.)
2. **Subagent halt-lines are unenforceable mid-flight** (M5.2 passed its ~60 kT line silently, flagging only at completion — subagents lack token introspection). Halt discipline therefore lives in **dispatch sizing**, not runtime self-monitoring. (→ M7.x retro.)
3. **Two clean-first-review builder outputs** (M5.1, M5.3 — zero fable completions), a campaign first, both under the richer-fact-pack dispatch style; M5.2's review still caught 2 unfiled ledger rows (manifest-vs-filesystem, 3rd instance).
4. **Ops note**: plan-mode toggles propagate into running subagents (observed twice; both handled correctly — builders paused writes and resumed/finished cleanly).

## Cumulative campaign picture (datapoints #1–#5)

| phase | est (kT) | actual (kT) | Δ | shape |
|---|---|---|---|---|
| P1 | 160 | ~120 | −25% | per-mission sessions, 3 tiers |
| P2 | 115 | ~64 | −44% | first fable-orchestrated |
| P3 | 115 | ~136 | +18% | first Mode-B full-phase sweep |
| P4 | 189 | ~203 | +7% | second Mode-B sweep |
| P5 | 126 | ~191 | +52% | first cross-graph phase (calibration isolated + adopted) |
| **Σ** | **705** | **~714** | **≈ +1%** | on budget through five gates |
