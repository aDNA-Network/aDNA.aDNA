---
type: artifact
created: 2026-09-24
updated: 2026-09-24
status: active
last_edited_by: agent_rosetta
tags: [garnier, p1, dp3, so11, adr_016, retrospective, estimation]
---
# P1 estimate-versus-actual retrospective (SO-11 / ADR-016)

> **What this is, in one breath:** P1 was committed at 320 kT and has spent about 625 kT. The
> ADR-016 rule says any miss beyond 2× gets a written look-back before the next gate. This is that
> look-back, written *before* DP3 so the operator can rule on it there rather than discover it.
> It follows the shape of its predecessor, [[p0_estimation_retrospective]], and it is **presented
> for a ruling, not absorbed** ([[artifacts/p1/phase_exit|phase_exit]] 2026-09-24 addendum).

**Units.** Content-load kT per ADR-016 (rough, mixed measured/estimated basis — the same caveat
every figure below carries). Billing is unavailable for every GARNIER sitting and is not inferred.
No figure here is a token meter, an invoice or a confidence interval.

## 1. The numbers, re-derived at the object

[D] Re-derived 2026-09-24 from mission frontmatter (`token_budget_estimated` / `token_budget_actual`,
via `evidence/genesis/derive_campaign.py` + a read-only frontmatter pass) and cross-checked against
[[rolling_closure_ledger]] and [[local_model_continuation]] §Workload. The two sources agree.

| Mission | Original | Committed (DP2) | Actual (central ±) | Ratio vs committed | Ledger basis |
|---|---:|---:|---:|---:|---|
| P1.1 homepage voice | 62 | 150 | **145** ±55 | 0.97× | ledger §P1 execution |
| P1.2 quickstart voice | 61 | 90 | **430** ±85 | **4.8×** | 75 + 60 (continuation) + 295 (local-model sitting) |
| P1.3 mission voice | 63 | 80 | **50** ±20 *(C2 open; +10–20 forecast after records)* | 0.63× → ~0.8× | 40 + 10 (continuation) |
| **P1 total** | 186 | **320** | **625** ±155 | **1.95×** *(2.0× at +15 remaining)* | [[local_model_continuation]] :55 |

[I] Strictly, 625/320 = 1.95×, and the P1.3 remainder brings the phase to ~2.0×. The ">2×" trigger
sits on the boundary; **the mission-level trigger is unambiguous** (P1.2 at 4.8×). This retrospective
treats either as sufficient and does not argue the threshold.

**Booked separately — not in the 625, listed so nothing is hidden:**

| Line | Forecast | Actual | Ratio | Record |
|---|---:|---:|---:|---|
| Records-only wind-down (09-15) | — | 30 ±15 | — | ledger §Records-only wind-down |
| Design-context research (09-15) | 55 | 65 ±25 | 1.18× | ledger §Design-context research |
| Next-build preparation (09-15) | — | 20 ±10 | — | [[local_model_continuation]] :55 |
| Bounded homepage design pass `0c77b61` (09-16) | 60 | 65 ±25 | 1.08× | ledger §Bounded homepage exception |
| Clean-homepage expansion `e745990` (09-16) | 120 | 160 ±50 | 1.33× | ledger §Clean-homepage expansion |
| Minimal gateway `6487444` (09-16) | 110 | 95 ±30 | 0.86× | session `…065915_garnier_homepage_gateway` |
| Runtime-handoff adaptation (09-16) | — | 130 ±45 | — | same session, `adaptation_workload_separate` |
| Re-orientation sitting (09-24) | 220 | 260 ±60 | 1.18× | session `…083249_garnier_reorientation` |
| gate-49 re-baseline (09-25 stamp) | 40 | 45 ±15 | 1.13× | ledger §gate-49 re-baseline |
| This pre-assembly sitting (09-24) | 70 | 80 ±20 | 1.14× | [[session_stanley_20260924_145532_garnier_dp3_preassembly]] |

[I] Everything GARNIER spent since DP2, summed at central values: 625 + 870 ≈ **1,495 kT** against
the 320 kT authorization. About 58% of that (870 kT) is separately booked lines: the three design increments, the handoff
and the re-orientation make up 710 kT of it. Each exception had its own forecast and operator ruling. So the
operator did not authorize 320 and receive 1,495. They authorized 320 plus a sequence of separately
ruled increments. The combined figure still has to be visible at DP3, which is why this table exists.

## 2. Why P1.2 missed: the causes are recorded, not reconstructed

- [D] **Subject-model runtime tokens were booked in the executor's unit.** Of the 315 kT
  local-model sitting, **237.3 kT was the reproduced agent's own non-cached runtime I/O** (Qwen3.6
  running the copied Claude Code command). Executor work was about 78±45 kT
  ([[local_model_continuation]] :55). The DP2 forecast (`orientation 30 · source_and_clean_reproduction 35 · copy_checks 25`)
  priced the *executor* running a reproduction. It did not price the *subject* model's context.
  [I] **P1.2 executor-only ≈ 430 − 237 ≈ 193 kT (2.1×). P1 executor-only ≈ 388 kT (1.21×).**
  The larger part of the headline overrun is a mismatch between what the forecast measured and what
  the actual measured. It is not a spending failure. It is still a real cost, and the fix is to
  book it on its own line, not to drop it.
- [D] **External-dependency failures, each retained as evidence:**
  - the Claude API route failed for insufficient credit (ledger §P1 evidence continuation);
  - Qwen2.5-7B rejected the thinking parameter, then failed the triad/history checks;
  - a runtime-setup mistake needed recovery;
  - two full CLI reproductions ran where the 25 kT preparation forecast assumed one short one
    ([[local_model_continuation]] :57).
- [D] **Cached input disclosed separately, not added:** 735.4 kT reported in
  `runtime_token_usage.json`. It is repeated context. It is not in the 625, per the P0
  retrospective's rule that cached input is a subset, not an addend.

[I] P1.1 (0.97×) and P1.3 (~0.8×) landed on their forecasts. **P1.1 is the first GARNIER mission
forecast under the P0 retrospective's changed method**: each independent reader and grader was
priced explicitly (`coordinator 70 · three fresh prescreens 60 · two keyed graders 20`). It hit.

## 3. What the whole campaign's record says about forecasting

[I] Eleven forecast→actual pairs now exist. They split cleanly into two classes, and the split is
the finding:

| Class | Pairs | Ratios | What they share |
|---|---|---|---|
| **Known method, bounded scope** | P1.1 · P1.3 · research · design pass · clean homepage · gateway · re-orientation · gate-49 | 0.63–1.33× (median ≈1.1×) | The method existed before the sitting and every independent context was priced |
| **First contact or external runtime** | P0.1 · P0.2 · P1.2 | 4.0–5.4× (P1.2 executor-only 2.1×) | A new instrument, first use of two isolated scorers, or a second model/runtime the executor could not predict |

[I] A single campaign-wide multiplier would misprice both classes. At the observed mean of about
2× it would overfund the eight known-method sittings and still underfund the three risk sittings.
**The ADR-016 formula (23 kT transition + bounded work) holds for the first class. It does not hold
for the second.** The evidence is one campaign, n = 11. Calibration stays `uncalibrated` in the
`derive_campaign.py` sense: no `calibrated_sessions` field is written by this retrospective.

## 4. Applying it to P2 (presented for DP3; nothing committed here)

[D] P2 provisional envelope re-derived today: **17 missions, 18 sittings, 991 kT**, all
`provisional_until_DP3`, all `opus`. It is a strict chain:
P2.1 → P2.2 → P2.3 → T01 → … → T12 → P2.4 → P2.5. [D] The documentation population was re-derived
read-only against the vault `site/` build on `vitrine/design` @ `09c0349` (dist dated 2026-09-24
14:16). It shows **118/118 routes, 0 added, 0 removed, 0 source-hash changes, 0 tranche moves**
since the 2026-09-15 snapshot. The tranche structure and its byte-derived budgets still hold.

[I] Mission classification by the §3 split:

| Class | Missions | Provisional kT | Why |
|---|---|---:|---|
| **Risk** (first contact or external runtime) | P2.1 (65) · P2.2 (68) · T01 (65) · P2.5 (74) | **272** | P2.1 executes a documented example (external runtime, the P1.2 analog). P2.2 is the first R-SOURCE fidelity run on an isolated copy. T01 is the first tranche, and its tutorials require command reproduction or an explicit hold. P2.5 is a two-scorer midpoint pack, the P0.1 analog: two scorers alone cost ~140 kT at P0 |
| **Known** | P2.3 (37) · T02–T12 (620) · P2.4 (62) | **719** | Coordinator re-derivation is script-driven. T02–T12 repeat T01's procedure on byte-sized inputs. P2.4 is bounded editorial work |

[I] **Calibrated alternative** (known ×1.15, band 0.85–1.35; risk ×3, band 2–5 — the risk
factor is a judgment midpoint between the method-changed P1.2 executor-only 2.1× and the pre-change
P0 4–5.4×):

| | Provisional | Calibrated central | Band |
|---|---:|---:|---:|
| Risk (272) | 272 | 816 | 544–1,360 |
| Known (719) | 719 | 827 | 611–971 |
| **P2** | **991** | **≈1,640** | **≈1,155–2,330** |

## 5. Changes to the estimation method (proposed; operator rules at DP3)

1. [I] **Book subject-model runtime on its own line**, as cached input already is. When a mission
   runs another agent (reproductions, R-SOURCE command execution, disposable-project creation),
   that agent's runtime tokens are a separate booked line with their own forecast. They are not
   folded into executor content-load. This change alone would have put P1.2 at 2.1×, not 4.8×.
2. [I] **Flag risk-class missions in the forecast itself.** Each such mission names its first-contact
   or external-runtime exposure and carries a band, not a point figure.
3. [I] **Calibrate on the first repeat.** T01 is the first of twelve byte-proxied tranches. Its
   measured actual should re-forecast T02–T12 before T02 opens, which converts 620 kT of
   `uncalibrated` into calibrated.
4. [D] Retained from P0 and working (P1.1 is the evidence): price every independent context
   explicitly; isolate before expensive reads; reuse frozen artifacts instead of re-collecting.

## AAR (lightweight)

- **Worked:** the P0 retrospective's method change held. Every known-method sitting since landed at 0.63–1.33×.
- **Didn't:** P1.2's forecast priced the executor and not the model it drove. The 25 kT reproduction preparation forecast ignored runtime failure.
- **Finding:** GARNIER's misses come in two classes, not a drift. Most of the P1 headline overrun (237 of 305 kT excess) is subject-model runtime booked in the executor's unit.
- **Change:** subject-runtime gets its own booked line. Risk-class missions carry bands. T01's actual re-forecasts T02–T12.
- **Follow-up:** DP3 rulings (c) and (g) in [[artifacts/p1/phase_exit|phase_exit]] §DP3 packet. Rosetta applies whatever is ruled to the P2 mission frontmatter in the DP3 sitting, not before.

Related: [[p0_estimation_retrospective]] · [[budget_basis]] · [[local_model_continuation]] ·
[[rolling_closure_ledger]] · [[artifacts/p1/phase_exit|phase_exit]] · [[campaign_garnier]].
