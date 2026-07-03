---
type: artifact
artifact_id: telemetry_corpus_champollion_export
title: "Operation Champollion — consolidated telemetry corpus export (datapoints #1–#7, per-campaign shape for Context.aDNA)"
campaign_id: campaign_champollion
mission_id: mission_champollion_m7_2_campaign_close_retro
created: 2026-07-03
updated: 2026-07-03
last_edited_by: agent_rosetta
status: active
tags: [artifact, champollion, telemetry, corpus_export, model_tiering, adr_016, prometheus]
---

# Operation Champollion — consolidated telemetry corpus

> The per-campaign export shape offered to Context.aDNA (Prometheus) at datapoint #1, now complete for all 8
> phases. Join keys per [[../../../what/patterns/pattern_model_tiered_campaign_execution|pattern §3]]:
> **`tier_planned × model_actual × budget_est × budget_actual`**, per mission, per phase.
> `budget_*` are content-load kT (ADR-016 units; "rough is fine" per SO-11) — the SHAPE and trend are the signal, not false precision.

## 1. Per-phase datapoints (#1–#7)

| # | Phase | Focus | Est (kT) | Actual (kT) | Δ | At-tier | Signal |
|---|-------|-------|----------|-------------|---|---------|--------|
| 1 | P1 | adjudication & governance | 160 | 120 | **−25%** | 5/5 | mechanical/verification estimates ran high |
| 2 | P2 | standard & spec (v2.5 cut) | 115 | 64 | **−44%** | 3/3 | first fable-orchestrated phase; verification class-split calibration born |
| 3 | P3 | pattern harvest & self-application | 115 | ~136 | **+18%** | 3/3 | first over-estimate phase — bookend-side, *bought* 7 corrected census claims |
| 4 | P4 | docs, site & first-contact UX | 189 | ~203 | **+7%** | 4/4 | one Mode-B sweep; twin-builder hazard contained |
| 5 | P5 | LP seam & Exchange story | 126 | ~191 | **+52%** | 3/3 | **cross-graph read surface** underpriced; M5.3 pre-pinning countermeasure −9% |
| 6 | P6 | release candidate & readiness | 127 | ~153 | **+20%** | 3/3 | **per-row RC pricing** (27-row batch); aggregate-halt surfaced |
| 7 | P7 | ship-verify & close | 65 | ~90* | **~+38%** | 2/2 | M7.1 ~45/30 (+50%, walk+review dispatches); M7.2 ~45/35* (closeout) |

\* M7.2's actual is provisional at export time (this mission); finalized in the M7.2 AAR.

## 2. Cumulative

- **Through 6 phases**: est ~832 / actual ~867 ≈ **+4%**.
- **All 8 phases (P0 excluded from budget-tracking; P1–P7)**: est ~897 / actual **~957 ≈ +7%**.
- **vs the charter's 700–850 planning band**: actual ~957 is **~13% over the 850 ceiling**. Honest final number — the campaign delivered its full scope (24 missions, a shipped release, a bilateral LP conformance pass) but overran the band, concentrated in two estimator classes (below).

## 3. The load-bearing signal — it's an estimator-class problem, not a tier problem

The routing was sound: **62 mission-tier assignments ran at their planned tier (24/24 missions at-tier across the phases; 0 tier-changing escalations all campaign).** The drift lived entirely in *sizing*, and split cleanly:

- **Mechanical (sonnet) was over-estimated** — M1.3 (14/15), M1.4 (14/30, −53%): mechanical sweeps priced high. *Downtier estimates can shrink.*
- **The overruns were opus verification/integration missions with a per-unit cost structure hidden inside a mission-shaped estimate**:
  - **cross-graph read surface** — M5.1 (+77%), M5.2 (+93%): pricing a foreign corpus read as one integration number.
  - **N-row fold batches** — M6.1 (+63%): a 27-row RC priced as one integration.
  - **multi-dispatch verification** — M7.1 (+50%): walk + review dispatches summing past the halt.
- **Fable (judgment) held** — M1.2 (−9%), M2.2 (−33%), M6.3 (−25%): judgment-tier work estimated well or under.

**The fix is an estimator, not a re-tiering**: price per-unit (~2.5–3 kT/row for fold batches; the read-surface size for cross-graph; per-dispatch × N for multi-dispatch verification). Folded to [[../../../what/patterns/pattern_model_tiered_campaign_execution|pattern §2.6 rule 5]]. Countermeasure validated in-campaign: pre-pinning boundary facts at dispatch flipped M5.3 to −9% and held 2-for-2 (G5-D3 adopted it standing).

## 4. Prometheus handoff

This corpus answers the questions the [[../../../who/coordination/coord_2026_07_02_rosetta_to_prometheus_model_tier_pattern|staged Context.aDNA memo]] posed: *was the mid-judgment tier good enough for class X?* (yes — 24/24 at-tier, 0 escalations) and *what did routing save?* (the −25%/−44% early phases; the drift was sizing, not routing). The join-key shape (§1) is the proposed per-campaign export contract. **Sibling corpus**: Operation Carnot (LatticeProtocol.aDNA) emits the same shape — two feeding campaigns, one contract. Handoff: annotate the Prometheus memo with this export + the estimator-class finding; release rides the campaign's G7 push batch.

*Per-phase detail: [[telemetry_corpus_p1]]…[[telemetry_corpus_p6]] + the M7.1/M7.2 AARs. Retro of the orchestration itself: [[ops_retro_champollion]].*
