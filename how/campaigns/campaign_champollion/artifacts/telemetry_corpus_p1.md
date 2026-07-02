---
type: artifact
artifact_id: telemetry_corpus_p1
title: "Champollion P1 telemetry corpus — datapoint #1 (per-tier estimate-vs-actual)"
campaign_id: campaign_champollion
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
status: active
emitted_at: "G1 (P1 close), 2026-07-02"
consumer: "Context.aDNA (Prometheus) — coord_2026_07_02_rosetta_to_prometheus_model_tier_pattern (Ask 3)"
tags: [artifact, champollion, p1, telemetry, model_tiering, prometheus, corpus, adr_016]
---

# Champollion P1 telemetry corpus — datapoint #1

**The first per-campaign export offered against the Prometheus memo's Ask 3** ("name where you'd want the corpus surfaced… if you want a per-campaign export shape, specify it and Champollion will emit it at phase closes"). This is that shape, proposed. Emitted at the **G1** phase close (2026-07-02), accepted by the operator as **corpus datapoint #1** (G1 D2). Join keys per [[../../../../what/patterns/pattern_model_tiered_campaign_execution|pattern §3]]: **`tier_planned × model_actual × budget_estimated × budget_actual`**, per mission, per campaign.

## Per-mission records (P1: M1.1–M1.5)

| mission | mission_class | tier_planned | model_actual | budget_est (kT) | budget_actual (kT) | Δ | at_tier | commit |
|---|---|---|---|---|---|---|---|---|
| M1.1 backlog dispositions | implementation | opus | opus (direct) | 40 | ~30 | −25% | ✅ | `6145c16` |
| M1.2 ADR-045 record repair | implementation | fable | fable (subagent) / opus orch | 35 | ~32 | −9% | ✅ | `23fd294` |
| M1.3 adr_index | implementation | sonnet | sonnet (subagent) / opus orch | 15 | ~14 | −7% | ✅ | `6883ba3` |
| M1.4 currency sweep | implementation | sonnet | sonnet (subagent) / opus orch | 30 | ~14 | −53% | ✅ | `8df393a` |
| M1.5 STATE diet | implementation | opus | opus (direct) | 40 | ~30 | −25% | ✅ | `4e493ce` |

> `model_actual` note (M1.2/M1.3/M1.4): run as an **orchestrated tier** — the tier-matched judgment/mechanical work executed in a subagent of the planned tier (`model_actual == tier_planned`), with opus doing scaffold/verify/commit as separate overhead. Per M1.2's telemetry note, the recorded `budget_actual` is the **tier-matched executor spend**; opus orchestration overhead is not folded in (keeps the join clean for "was tier X good enough for class Y").

## Per-tier rollup

| tier_planned | missions | est (kT) | actual (kT) | Δ | ADR-016 band (drift < 2×) |
|---|---|---|---|---|---|
| fable | M1.2 | 35 | 32 | −9% | ✅ 1.10× |
| opus | M1.1, M1.5 | 80 | 60 | −25% | ✅ 1.33× |
| sonnet | M1.3, M1.4 | 45 | 28 | −38% | M1.3 ✅ 1.08× · **M1.4 ~2.1×** |
| **total** | **5** | **160** | **120** | **−25%** | 4/5 clear |

## Routing-quality verdict (G1 = first routing-quality checkpoint → PASS)

- **5/5 missions ran at their planned tier** — no downtier/uptier deviation; `model_actual == tier_planned` on every record.
- **0 tier-changing escalations** — M1.1's escalations (F-CHM-013 post-ledger items; adr_003/012/027 handed to M1.2) were **scope** hand-offs, not upward-tier escalations.
- **All five under budget** — systematic under-estimation; strongest on mechanical/sonnet work.
- **One drift touches the ADR-016 2× line — M1.4 (−53%, ~2.1× under)** — accepted **in lieu of a formal ADR-016 retrospective** (G1 D2). Cause is understood, not an estimation-model failure: two of five brief items were no-ops (a CHANGELOG version-track conflation + already-resolved base-skills) caught at the planning verify, and the keep/strip + CHANGELOG judgment was pre-resolved at planning tier → spend shifted executor→planner.

## Signals for the corpus (what Prometheus can verify/refute)

1. **Downtiering is safe *behind a fresh verify*, not on faith** — the headline P1 finding: **sonnet-safe ≠ brief-correct**. A mechanical brief authored at the gate can carry a stale premise or a category error; the opus/planning verify-before-dispatch caught 2 such items in M1.4 (0 shipped). Routing safety is a property of the *verify step*, not the tier.
2. **Mechanical estimates should be net of already-resolved/defective items** — the M1.4 −53% is the calibration signal: "mechanical work" budgets over-count when items turn out to be no-ops discovered at planning.
3. **Orchestrated-tier spend is separable and clean** — fable/sonnet judgment/mechanical work runs in a tier-matched subagent while opus orchestrates; recording the two separately keeps the "was tier X enough for class Y" question answerable.
4. **P2 budget-calibration note (adopted, G1 D2)** — carry the observed under-estimation forward: P2's estimates (M2.1 50 / M2.2 30 / M2.3 35 kT) are likely high, especially for mechanical/verification passes with pre-resolved judgment.

## Export-shape proposal (Ask 3)

This file is the proposed **per-campaign export shape**: a per-mission join-key table + per-tier rollup + verdict + signals, emitted at each phase close and appended cumulatively (P2 adds M2.1–M2.3 rows at G2, etc.). If Prometheus prefers a different surface (raw frontmatter scrape, a machine-readable `.yaml`/`.json` sidecar, or a Context.aDNA-side ingest), name it and Champollion will re-emit — the raw join keys live in each mission/session/AAR frontmatter regardless.
