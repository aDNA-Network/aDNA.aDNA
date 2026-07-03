---
type: artifact
artifact_id: telemetry_corpus_p6
campaign_id: campaign_champollion
title: "Telemetry datapoint #6 — P6 (release candidate & readiness)"
status: active
created: 2026-07-03
updated: 2026-07-03
last_edited_by: agent_rosetta
tags: [artifact, champollion, telemetry, p6, datapoint_6]
---

# Datapoint #6 — Phase 6 (release candidate & readiness)

Join keys per `pattern_model_tiered_campaign_execution` §3: `tier_planned × model_actual × budget_est × budget_actual`.

| Mission | Class | Tier planned | Model actual | Est (kT) | Actual (kT) | Δ | Notes |
|---------|-------|--------------|--------------|----------|-------------|---|-------|
| M6.1 RC | integration | opus + fable bookends | opus ×2 (serial dispatches) + fable | 52 (45 + Mode-B allowance) | ~85 | **+63%** | 27-row fold batch; both dispatches individually in-band (A ~30, B ~35), bookends ~20; the aggregate crossed the mission halt-70 discovered at close accounting |
| M6.2 DP4 dossier | verification | opus + fable bookends | opus + fable | 35 | ~38 | +9% | Pre-pinned dispatch, 2nd consecutive under-aim builder run (~28/30) |
| M6.3 adversarial | review | fable at-tier | fable direct | 40 | ~30 | −25% | Surgical python probes; 3 found → fixed via curation amendment; first full-history gitleaks |
| Gate render + sweep close | — | fable | fable | — | ~15 | — | G6 render + splash/STATE/session |
| **Phase** | | | | **~127** | **~153** | **+20%** | |

**Cumulative through 6 phases**: est ~832 / actual ~867 ≈ **+4%** — ~2% above the charter's 700–850 planning-band ceiling with the lightest phase (P7) remaining. The G6 gate carried the note; M7.2 reports the final number.

**Calibrations emitted (standing candidates)**:
1. **Per-curation-row pricing for RC/fold-batch missions** (~2.5–3 kT/row incl. verify) — no per-mission integration estimate prices a 27-row batch; this is the M6.1 driver, same estimator class as the P5 cross-graph miss (both = per-unit cost structures hiding inside a mission-shaped estimate).
2. **Aggregate-halt accounting question → M7.2 retro**: two individually-in-band dispatches summed past the mission halt line; the halt discipline lives in dispatch sizing (P5 lesson), but nothing watches the SUM mid-mission. Candidate: the orchestrator tracks a running mission total at each bookend.
3. **Finding-side verification rule** (M6.3 F1): fold rows sourced from findings get verified against the finding's CITED surface, not the builder's changed files — two clean file-level reviews missed a wrong-surface fold; the route-walk from the finding side caught it. → Mode-B review checklist (M7.2 folds it into the pattern).
4. Pre-pinning holds: 2-for-2 post-adoption (M6.2 ~28/30 builder; M6.1's units were in-vault, n/a).

**Release outcome context** (for the corpus reader): the phase shipped **v8.4** (`aDNA-Network/aDNA` @ `4e3bf38`, tag live, smoke 7/7) at G6 on 2026-07-03 — the campaign's terminal deliverable landed one phase early relative to a naive read of "P7 ship & handoff" (P7 verifies-in-the-wild + closes; the ship itself was G6's firing, by design).
