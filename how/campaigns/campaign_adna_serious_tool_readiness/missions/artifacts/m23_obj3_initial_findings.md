---
type: artifact
artifact_type: initial_findings_memo
mission: mission_adna_str_p2_m23_convergence_validation
campaign: campaign_adna_serious_tool_readiness
phase: 2
objective: 3
created: 2026-05-20
updated: 2026-05-20
status: complete
last_edited_by: agent_stanley
purpose: "Preliminary findings + D-decision flags from S1 corpus extraction; S2 operator-gates the ratification decisions"
sources:
  - m23_obj2_corpus_extraction.md   # S1 sibling artifact — 49-session aggregate + linear regression + time-trend + heavy-file compliance + re-read + traversal + per-mission-type
  - m14_obj7_validation_output.md   # M1.4 §6 — API-billing companion forecast
  - m13_obj7_calibration_output.md   # M1.3 §6 — content-load formula + Standing Order #11 candidate
  - m21_obj7_validation_output.md   # M2.1 §5 — heavy-file Read convention + auto-archive deferral
  - what/decisions/adr_016_per_mission_context_budget.md   # current Clause C forecast text (target of D1)
tags: [artifact, m23, initial_findings, api_billing_formula_ratification_candidate, pattern_re_rank_proposal, mid_magnitude_sustain, d1_d2_d3_d4_d5_decision_flags, m24_forward_ref, m3x_forward_ref]
related_artifacts:
  - ../mission_adna_str_p2_m23_convergence_validation.md
  - m23_obj2_corpus_extraction.md
  - m14_obj7_validation_output.md
  - m13_obj7_calibration_output.md
  - m21_obj7_validation_output.md
ratifies_at: S2   # this memo is preliminary; S2 governance entry ratifies and produces the canonical ADR amendment / new ADR
---

# M2.3 Obj 3 — Initial Findings Memo (S1 closing; S2 ratifies)

> **Deliverable 3 of M2.3** (S1; closing artifact). Synthesizes corpus-extraction evidence (m23_obj2) into preliminary verdicts + concrete API-billing companion formula candidate + per-pattern re-rank proposals + 5 explicit D-decision flags for S2 operator gate.
>
> **Preliminary**. S2 governance entry produces the canonical ADR amendment / new ADR; this memo is the synthesis-input package. Decisions captured here are *recommended defaults* (Rosetta), not ratified — operator approves at S2 plan ratification.

## §1 — Convergence-model verdict status (D5 candidate)

**Recommendation**: **SUSTAIN Mid-magnitude (refined; corpus-extended)** — Option B at D5.

**Evidence**:

- 49-session API-billing aggregate sits in the same band M1.4's 48-session aggregate measured (mean 13.5 M cache_read; 404 K cache_creation; 75 turns; output 110 K). Current-session addition perturbs by < 1%.
- Per-turn cache_read mean 189 K + regression slope 126 K — sits comfortably *inside* M1.4's forecast band "150-250 K mean_cached_context_per_turn"; no shift to Large-magnitude warranted.
- Cache_creation floor (regression intercept 328 K; corpus mean 404 K) lies inside M1.4's forecast band "300-500 K cache_creation_floor" — empirical match.
- Time-trend (per-turn cache_read 98 K → 229 K April → May) is *within the band* — magnitudes refined upward but verdict directionally unchanged.

**Refined statement candidate** (S2 ratifies via D5):

> **Mid-magnitude (refined; corpus-extended).** Directionally correct (transition tax dominates short sessions; snowball compounds long ones). Magnitudes empirically bounded:
>
> - cache_creation floor: 328-405 K per session entry (regression intercept / corpus mean; M1.4 forecast band 300-500 K confirmed)
> - cache_read floor (warm-up): ~ 4.1 M per session (regression intercept; includes cumulative warm-up turns)
> - cache_read per-turn multiplier: 126-189 K (regression slope / corpus per-turn mean)
> - per-mission-type bands: see §3 per-mission-type table
>
> Content-load CP-1 of 23 kT corresponds to ~ 200-400 K in API-billing units (10-17× under-counting; M1.4's two-metric reality framing preserved).

**Alternative considered** (D5=A "refine"): bump bands to reflect April → May time-trend. NOT recommended — the band is already wide enough to contain the trend; explicit time-dimension would over-fit to v8-campaign-era corpus.

## §2 — Pattern α/β/γ/δ re-rank proposals (D2 / D5 supporting)

| Pattern | M1.4 rank | M2.3 recommendation | Evidence |
|---|---|---|---|
| **α** full-vs-excerpt | 25 (top) | **STAY 25** ✅ | m23_obj2 §6 — 100% Clause B compliance in 7-session post-M2.1 SQLite window; α reduction LIVE |
| **β** re-reads within session | 12 | **CANDIDATE PROMOTION** to 15-16 | m23_obj2 §7 — Read re-read rate 26.8% vs M1.3 11%; 2.4× larger; small-n caveat (n=168 reads / 7 sessions); M2.4 confirms or rejects at ≥ 10-session sample |
| **γ** cross-vault context | 6 | **STAY 6** | m23_obj2 §8 — 55 traversals captured; γ measurement baseline established; no re-rank evidence; M2.4 produces |
| **δ** handoff reload | 10 (upgraded from 6 at M1.4) | **STAY 10** ✅ | m23_obj2 §3 — cache_creation regression intercept 328 K matches M1.4 forecast 300-500 K floor; pattern δ upgrade EMPIRICALLY VALIDATED |

**S2 governance implication**: pattern β promotion candidate is *contingent* on M2.4 confirming at ≥ 10-session sample. M2.3 S2 governance artifact should record β as "rerank candidate (provisional; M2.4 ratifies)" rather than ratifying the promotion at M2.3.

## §3 — API-billing companion formula candidate (D1 ratifies)

**Concrete formula** (regression-fit; corpus-validated; M2.3 ratification candidate):

```
session_cost_api_billing (kT) ≈ (cache_creation_floor + turn_count × per_turn_cc_additive)
                              + (cache_read_floor    + turn_count × per_turn_cr_multiplier)

with empirical constants (49-session corpus, M2.3 fit):
  cache_creation_floor       ≈ 328 K    (regression intercept; range 109-1247 observed)
  per_turn_cc_additive       ≈   1 K    (regression slope)
  cache_read_floor           ≈ 4.1 M    (regression intercept; warm-up baseline)
  per_turn_cr_multiplier     ≈ 126 K    (regression slope; per-turn mean 189 K)
```

**Composed examples** (for operator intuition):

| Mission shape | turn_count est. | cache_creation est. | cache_read est. | Notes |
|---|---|---|---|---|
| Light planning (M2.2-class) | 25 | 353 K | 7.3 M | single-session compresses naturally |
| Implementation S1 (M2.3 S1 this session) | 60 | 388 K | 11.7 M | within band |
| Implementation S2 (destructive) | 80 | 408 K | 14.2 M | within band |
| Implementation S3 (close + AAR) | 50 | 378 K | 10.4 M | within band |
| Long measurement (M1.4 S2-class) | 124 | 452 K | 19.7 M | top outlier band; consider further decomposition |
| Deep loop (b00da756 type) | 144 | 472 K | 22.2 M | flag for retrospective; signals scope drift |

**Decomposition rule candidate** (D5 ratifies):

- **Single-session OK** when forecast cache_read < 10 M AND turn_count_estimate < 60-80
- **2-3 session split recommended** when forecast cache_read 10-20 M OR turn_count_estimate 60-150 (canonical implementation 3-session shape)
- **Mission-level decomposition required** when forecast cache_read ≥ 20 M OR turn_count_estimate ≥ 150 (campaign-level decomposition tax cheaper than per-session snowball)

**Two-metric reporting variant** (Clause C continued):

- **Content-load** remains canonical for budget setting (Clause A unchanged)
- **API-billing** companion reported in AAR token-budget table alongside content-load (Clause C amendment: "forecast" → "ratified")
- Drift > 2× on EITHER metric triggers M2.3-class retrospective at next opportunity

## §4 — Per-mission-type decomposition threshold table candidate (D4)

From m23_obj2 §9 rough binning (S2 refines with cleaner classification):

| Mission class | Sessions in corpus | Mean turns | Mean cache_read | Mean cache_creation | Recommended shape |
|---|---|---|---|---|---|
| **planning** (no executable code; pure governance — M0, M2.2, M1.5) | ~ 3 | 25-30 | 3-5 M | 300-500 K | **Single-session** (compresses naturally) |
| **implementation** (multi-objective with executable artifacts — M1.3, M1.4, M2.1, M2.3) | ~ 9 | 65-90 | 13-18 M | 350-1250 K | **Canonical 3-session (S1 / S2 / S3)** |
| **measurement** (data-gathering + analysis — M1.3 obj-runs, M1.4 obj-runs) | ~ 5 | 75-90 | 15-25 M | 400-1000 K | **Canonical 3-session** (often blends with implementation) |
| **single-session planning** (consolidation w/o new measurement — M2.2, M1.5) | 2 | 24-30 | 3-5 M | 400-500 K | **Single-session** (planning-class exception per Campaign SO #17) |
| **destructive heavy-write** (long sessions with many Edits — outlier-band; M1.4 S2, M2.1 S2) | ~ 4 | 80-150 | 20-45 M | 500-1250 K | **2-session preferred** (decompose into design + destructive) |

**D4 recommendation**: **Option B — keep table as governance-artifact appendix only** (not new ADR-016 Clause D). Reason: per-mission-type bands have n=2-9 sessions per class; not enough for ADR codification yet. M3.x + M4.x + M5.x missions populate the corpus further; M2.4 OR a future cumulative ADR ratifies once n ≥ 5 per class.

## §5 — D-decision flags for S2 operator gate

### D1 — ADR-016 Clause C amendment vs new ADR-018

**Recommendation**: **Option A — amend ADR-016 Clause C in place**.

**Rationale**:
- M2.3 ratification produces 1 formula + 1 reporting variant + (optionally) 1 sub-clause for per-mission-type decomposition rule
- That's not enough new doctrine for a standalone ADR (rubric: ≥ 3 new clauses + new concept category)
- Consolidation tidy — single-ADR governance is easier to maintain than ADR-016 + ADR-018 split
- Clause C already declares M2.3 as the ratifier ("API-billing formula stays forecast until M2.3 cross-campaign retrospective ratifies it") — amendment is the pre-scheduled path

**S2 deliverable if D1=A**: edit `what/decisions/adr_016_per_mission_context_budget.md` §Decision Clause C ("forecast" → "ratified"; replace forecast text with §3 formula + constants; add cross-reference to m23_obj2 + m23_obj7); update frontmatter `updated: 2026-05-21` (or S2 date); append §Status entry recording M2.3 ratification.

**S2 deliverable if D1=B**: create `what/decisions/adr_018_api_billing_companion_formula.md` with frontmatter + §Status + §Context (why standalone) + §Decision (formula + constants + reporting variant) + §Consequences + §Sibling/related (ADR-016 cross-reference); leave ADR-016 Clause C as-is (defer amendment to v8 P6).

### D2 — ADR-007 (tool-use logging) elevation

**Recommendation**: **Option B — DEFER to M2.4** (with explicit gap analysis).

**Rationale**:
- SQLite has only 7 captured sessions (M1.4 Amendment E LIVE since 2026-05-19); need ≥ 10 for confident M2.4 heat-map analysis
- 708 tool_calls is enough for *exploratory* analysis but not enough for *ratification* of tool-use logging doctrine
- ADR-007 elevation premature — wait for M2.4 heat map session-count threshold cross + observed patterns
- Gap analysis: 3 more captured sessions needed (M2.3 contributes 3: S1 + S2 + S3 = M2.4 unlocks at M2.3 close if pre-M2.3 captured count stays at 7)

**S2 deliverable if D2=B**: record decision in S2 session file SITREP + flag for M2.4 dispatch; no new ADR work at M2.3.

**S2 alternative if D2=A**: draft `what/decisions/adr_007_tool_use_logging.md` skeleton with `status: accepted`; cite SQLite schema + measurement.sqlite operational state; include "n=7 captured sessions; pre-threshold for full validation but doctrine ratifies the *capture mechanism*, not the analysis" disclaimer.

### D3 — Standing Order #11 wording refinement

**Recommendation**: **Option A — refine SO #11** to mention both content-load (canonical) and API-billing (companion) once Clause C ratifies (D1=A path).

**Rationale**:
- Current SO #11 text is content-load-only (per Clause A); doesn't mention Clause C two-metric reporting variant
- Post-D1=A ratification, AARs will report both metrics — SO #11 should acknowledge this
- Minor textual refinement; no semantic change

**Proposed refined SO #11 text** (S2 ratifies if D3=A):

> **11. Per-mission context budget is mandatory.** Every mission spec declares `token_budget_estimated` per the content-load formula (`session_cost ≈ transition_tax + Σ per_objective_work`; thresholds < 50 / 50-80 / 80-200 / ≥ 200 kT). Sessions log `token_budget_actual` (rough is fine). AARs report estimate-vs-actual delta in content-load units; **API-billing companion units may be reported alongside per ADR-016 Clause C** (formula: `session_cost_api_billing ≈ 328 K + turn_count × (1 K cache_creation_additive + 126 K cache_read_per_turn)`). Drift > 2× on either metric triggers a retrospective. ADR-016 governs.

**S2 deliverable if D3=A**: surgical edit to `aDNA.aDNA/CLAUDE.md` Standing Order #11 entry.

### D4 — Per-mission-type calibration as ADR-016 Clause D

**Recommendation**: **Option B — keep table as governance-artifact appendix only** (NOT new ADR-016 Clause D).

**Rationale**:
- Per-mission-type bands have n=2-9 sessions per class — not enough for ADR codification yet
- Premature codification risks pre-ratifying a maturing pattern (same logic as M2.1 D1=A auto-archive deferral)
- ADR-016 stays focused on per-mission discipline (Clauses A/B/C); per-mission-type calibration is a *reporting refinement* better placed in the M2.3 governance artifact or token_baselines.md

**S2 deliverable if D4=B**: include per-mission-type table as appendix to S2 governance artifact (whichever D1 path) + as new section in node.aDNA/what/context/token_baselines.md v0.1.2 (at S3).

**S2 alternative if D4=A**: add new Clause D to ADR-016 with the per-mission-type table; risk-aware codification (state n caveats explicitly).

### D5 — Decomposition threshold rule refinement

**Recommendation**: **Option A — refine** to include API-billing units (post-D1=A ratification).

**Rationale**:
- Current ADR-016 Clause A thresholds are content-load only: < 50 / 50-80 / 80-200 / ≥ 200 kT
- Post-D1=A ratification, API-billing companion thresholds become operational
- §3 above provides empirical bands: < 10 M cache_read (single-session) / 10-20 M (3-session) / ≥ 20 M (mission decomposition)
- Turn-count cap recommendation: < 60-80 (single-session OK) / 60-150 (3-session) / ≥ 150 (mission decomposition)

**S2 deliverable if D5=A**: amend ADR-016 Clause A threshold table to include API-billing companion columns alongside content-load columns; or add as new sub-clause within Clause A.

**S2 alternative if D5=B**: keep current content-load thresholds; API-billing thresholds stay informal recommendation.

## §6 — Forward refs to M2.4 + M3.x + v8 P6

### M2.4 AGENTS.md heat map

- **Inherits**: §2 pattern re-rank candidates (β especially); §6 heavy-file compliance baseline; §8 cross-vault traversal patterns
- **Gating threshold**: ≥ 10 live-hook sessions; current 7 sessions; M2.3 contributes 3 (S1 + S2 + S3) → unlocks at M2.3 close if no parallel sessions
- **Specific dispatch**: ratify pattern β re-rank (12 → 15-16) once n ≥ 10; produce per-tool heat map of Read patterns by file_path frequency

### M3.x forge-ecosystem hardening missions

- **Inherits**: API-billing companion formula (post-D1=A ratification); per-mission-type calibration table (§4); decomposition threshold rule with API-billing companion (D5=A)
- **Estimate two-column form** when M3.x missions declare `token_budget_estimated`: content-load kT (canonical) + API-billing kT (companion)
- **Forge-pattern specific**: SiteForge / CanvasForge / ComfyForge missions all hit cross-vault traversal patterns; γ rank may upgrade at M3.x corpus expansion

### v8 P6 ecosystem propagation

- **Inherits**: ratified ADR-016 amendment (or ADR-018 if D1=B); refined SO #11 text (if D3=A); per-mission-type calibration framework
- **Propagation path**: `.adna/AGENTS.md` Heavy-File Read Convention already in place (Clause B propagated at M2.1); ADR-016 + SO #11 + Clause C formula propagate at v8 P6 via existing backlog placeholder mechanism + ADR-005 rule 3
- **19+ ecosystem vault inheritance**: every Lattice vault adopts two-metric budget discipline at v8 P6 close

## §7 — Acceptance check (mission spec §Acceptance criteria item)

- [x] §1 preliminary convergence-model verdict declared (Mid-magnitude sustain — refined; corpus-extended)
- [x] §2 pattern α/β/γ/δ re-rank candidates flagged with evidence (β promotion candidate; α/γ/δ stay)
- [x] §3 concrete API-billing companion formula candidate with regression-fit constants
- [x] §4 per-mission-type decomposition threshold table candidate (n-aware caveats)
- [x] §5 D1/D2/D3/D4/D5 decision flags listed explicitly for S2 operator gate
- [x] §6 forward refs to M2.4 (β re-rank dispatch) + M3.x (two-column estimate inheritance) + v8 P6 (upstream propagation)

## §8 — Cross-references

- [[../mission_adna_str_p2_m23_convergence_validation.md|M2.3 mission spec]] §Objectives 3 + §Operator decision gates D1-D5
- [[m23_obj2_corpus_extraction.md|m23_obj2_corpus_extraction.md]] §1-§13 — evidence base
- [[m14_obj7_validation_output.md|m14_obj7_validation_output.md]] §6 — API-billing companion forecast (ratified candidate above)
- [[m13_obj7_calibration_output.md|m13_obj7_calibration_output.md]] §6 — content-load formula (canonical preserved)
- [[m21_obj7_validation_output.md|m21_obj7_validation_output.md]] §5 — heavy-file Read convention (compliance verified at §6 of corpus extraction)
- [[../../../../what/decisions/adr_016_per_mission_context_budget.md|adr_016_per_mission_context_budget.md]] §Decision Clause C — D1=A amendment target
- [[../../../../CLAUDE.md|aDNA.aDNA/CLAUDE.md]] §Standing Orders #11 — D3=A refinement target
