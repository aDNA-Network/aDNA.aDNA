---
type: artifact
artifact_id: telemetry_corpus_p3
title: "Champollion P3 telemetry corpus — datapoint #3 (per-tier estimate-vs-actual, first Mode-B full-phase sweep)"
campaign_id: campaign_champollion
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
status: active
emitted_at: "G3 (P3 close), 2026-07-02"
consumer: "Context.aDNA (Prometheus) — coord_2026_07_02_rosetta_to_prometheus_model_tier_pattern (Ask 3)"
tags: [artifact, champollion, p3, telemetry, model_tiering, prometheus, corpus, adr_016, mode_b, bookend_cost]
---

# Champollion P3 telemetry corpus — datapoint #3

**Third per-campaign export in the [[telemetry_corpus_p1|datapoint #1]] shape** (cumulative-append: join-key table + rollup + verdict + signals per phase close). Emitted at the **G3** ring-cut close (2026-07-02), accepted as **corpus datapoint #3** (G3 D4). Join keys per [[../../../../what/patterns/pattern_model_tiered_campaign_execution|pattern §3]]: **`tier_planned × model_actual × budget_estimated × budget_actual`**.

**Structural novelty vs datapoint #2**: P3 is the **first full-phase Mode-B sweep** — one fable orchestrator session ran all three missions (verify-brief → opus-subagent build → independent review, mission by mission) under the operator's P3-open dispatch-shape ruling (pattern §2.5). It is also the **first over-estimate phase** (P1 −25% · P2 −44% · P3 **+18%**) and the first test of the G2 class-split calibration — which **held**.

## Per-mission records (P3: M3.1–M3.3)

| mission | mission_class | tier_planned | model_actual | budget_est (kT) | budget_actual (kT) | Δ | at_tier | commit |
|---|---|---|---|---|---|---|---|---|
| M3.1 pattern harvest I | implementation | opus | opus (subagent) / fable orch | 40 | ~44 | **+10%** | ✅ | `bfd7c1e` |
| M3.2 pattern harvest II | implementation | opus | opus (subagent) / fable orch | 40 | ~56 | **+40%** | ✅ | `da3ec85` |
| M3.3 exemplar self-score | verification | opus | opus (subagent) / fable orch | 35 (G2-calibrated from 45) | ~36 | **+3%** | ✅ | `ad5f227` |

> `budget_actual` note: same separation discipline — subagent self-reported spend + the orchestrator's per-mission verify/review share. The P3 actuals **include** the bookend share explicitly (M3.1 ~10 · M3.2 ~10 · M3.3 ~6 kT of fable verify/census/amendment work) because under Mode B the bookends are per-mission attributable; datapoints #1–#2 left orchestration overhead outside mission scope. This is a *recording refinement*, not drift — flagged so Prometheus doesn't misread the sign-flip as pure executor inflation.

## Per-tier rollup

| tier_planned | missions | est (kT) | actual (kT) | Δ | ADR-016 band (drift < 2×) |
|---|---|---|---|---|---|
| opus | M3.1, M3.2, M3.3 | 115 | ~136 | **+18%** | ✅ all three (worst = M3.2 at 1.40×) |
| **total** | **3** | **115** | **~136** | **+18%** | 3/3 clear — no retrospective triggered |

## Routing-quality verdict (G3 = third routing-quality checkpoint → PASS)

- **3/3 at planned tier · 0 tier-changing escalations** — every escalation that fired was a *declared* trigger (M3.2's "seed counts imply graduation NOW → G3" fired exactly as its brief anticipated).
- **The class-split calibration (G2 D4) held on first contact**: M3.3, the verification-class row, was estimated under the new rule (judgment surface, not corpus → 45 → 35 kT) and landed at **+3%** — against the class's prior form of 2–2.8× *under* (M1.4 −53%, M2.1 −64%). One datapoint, but the sign and magnitude are exactly what the rule predicts.
- **The over-run is bookend-side and bought correctness**: verify-before-dispatch caught a phantom brief input (F-CHM-208: a file cited by 5 documents that never existed) and stale seed counts *before* the builders could inherit them; independent review produced 3 amendments per mission — including two adoption-count corrections in opposite directions (M3.1 over-counted records-as-adoptions; M3.2 under-counted by trusting prose instead of a filesystem census that found ISS at 10 vault adoptions vs the documented 3). **7 corrected claims for ~26 kT of bookend spend.**

## Signals for the corpus (what Prometheus can verify/refute)

1. **Mode-B bookend allowance (adopted for P4+, G3 D4)** — implementation-class estimates gain **+10–15%** for the per-mission bookend share now that Mode B makes it attributable; verification-class keeps the G2 class-split rule (validated at +3%). Prediction: P4 implementation rows land inside the band *with* the allowance.
2. **Bookend spend is defect-yield-positive at this depth** — ~26 kT of fable verify/census/review across 3 missions yielded 1 phantom-input catch, 2 stale-count catches pre-dispatch, and 7 post-build corrections. Prometheus can watch whether yield decays as briefs improve (the self-referential prediction: it should — better briefs, fewer catches).
3. **Stated counts rot fast; censuses don't** — two independent builders inherited wrong counts from governance prose in one phase (ISS "3 live" was stale by 6; seed fractions stale by 5 weeks). The counting standard ("records ≠ adoptions; census-verified") is now a patterns-dir working rule (G3 D2d). Candidate telemetry: count-drift half-life per surface class.
4. **Dispatch shape is charter-level, not global** — the same day Champollion made Mode B its default (operator ruling), Carnot retired Mode B for session-per-mission (their D-C8). Both run the same two-role model and the same brief contract; the variable is subagent-vs-session per build. Two sibling campaigns now emit contrasting dispatch-shape telemetry over the same join keys — a natural A/B for the corpus.
