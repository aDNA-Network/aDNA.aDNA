---
type: mission_artifact
mission: mission_adna_str_p2_m24_agents_md_heatmap
campaign: campaign_adna_serious_tool_readiness
session: session_stanley_20260520T214915Z_v8_m24_s2
artifact_kind: pattern_beta_final_verdict
objective: 3
created: 2026-05-20
updated: 2026-05-20
last_edited_by: agent_stanley
status: complete
corpus_snapshot:
  measurement_sqlite_path: ~/.adna/measurement/measurement.sqlite
  schema_version: v0.1.1 (M1.4 LIVE 2026-05-19)
  sessions: 11
  sessions_with_read_activity: 14   # exceeds sessions table count — hook captured Read activity before all sessions-INSERT rows landed (consistent with S1 Obj 2 §6 caveat 2)
  tool_calls: 1107
  context_traversal: 107
  snapshot_taken_at: 2026-05-20T21:49Z (M2.4 S2 entry)
verdict: HOLD_at_14   # 27.44% aggregate re-read rate satisfies 20-28% HOLD band; CV 0.353 < 0.4 threshold; correlation r=0.142 < 0.4 threshold rules out PROMOTE
tags: [artifact, m24, obj3, pattern_beta_final_verdict, hold_at_14, re_read_rate_27_44_pct, cv_0_353, correlation_r_0_142, evidence_decides_d3, m23_candidate_text_resolved, sustains_directional_claim, p2_exit_gate_4th_brick]
---

# M2.4 Obj 3 — Pattern β Final Verdict at ≥ 10-Session Sample

> **Verdict: HOLD pattern β at rank 14.** The M2.3 candidate-promotion text (12 → 14, conditional on M2.4 confirmation) is **ratified at the conservative end**. β stabilizes at 14; no further promotion to 15-16 is warranted at this corpus size.
>
> **Evidence summary**: aggregate Read re-read rate **27.44%** across 14 distinct sessions with Read activity (266 reads / 73 re-reads); per-session CV **0.353** (< 0.4 stability threshold); Pearson correlation r between session turn count and per-session re-read rate **0.142** (well below 0.4 PROMOTE threshold). Per-mission-class binning unavailable in current corpus (`sessions.session_type` column NULL for all 11 rows; manual UUID → mission mapping deferred to M3.x when n ≥ 20 enables ≥ 3-per-class binning).

## §1 — Method

All measurements run via `sqlite3 -readonly ~/.adna/measurement/measurement.sqlite` (zero-mutation invariant per M2.4 Hard Constraint #8). Snapshot at M2.4 S2 entry 2026-05-20T21:49Z; +1 session (= 11) + +139 tool_calls (= 1107) + +35 context_traversal (= 107) versus S1 Obj 2 snapshot at 19:33Z. The corpus grew by one fresh session between S1 close and S2 entry (this session's predecessor traffic; consistent with hook-active capture cadence).

**Re-read rate methodology** (inherited from `m23_obj2_corpus_extraction.md` §7):

A Read tool_call is flagged `re_read = 1` if a prior Read of the same `file_path` exists for the same `claude_session_id` earlier in the session timeline. Aggregate rate = `SUM(re_read) / COUNT(*)` for `tool_calls WHERE tool = 'Read'`. Per-session rate computed analogously, grouped by `claude_session_id`.

**Coefficient of Variation (CV)** = std_dev(per_session_re_read_rate) / mean(per_session_re_read_rate). Stability threshold ≤ 0.4 per the verdict tree at `mission_adna_str_p2_m24_agents_md_heatmap.md` §Mission scope.

**Pearson correlation r** between session turn count (proxy: `COUNT(*) FROM tool_calls WHERE claude_session_id = ?`) and per-session Read re-read rate. PROMOTE threshold r > 0.4 per the verdict tree.

**Per-mission-class binning gate**: requires `sessions.session_type` populated (M1.4 schema column EXISTS but currently NULL for all rows). Manual mapping by session-start-time alignment with known mission timeline would be possible but introduces classification subjectivity; reserved for M3.x when ≥ 20-session corpus enables higher-confidence per-class statistics.

## §2 — Measurements

### Aggregate (Q1)

```sql
SELECT COUNT(DISTINCT claude_session_id) AS n_sessions, COUNT(*) AS n_reads,
       SUM(CASE WHEN re_read=1 THEN 1 ELSE 0 END) AS n_rereads,
       ROUND(100.0 * SUM(CASE WHEN re_read=1 THEN 1 ELSE 0 END) / COUNT(*), 2) AS re_read_pct
FROM tool_calls WHERE tool='Read';
```

| n_sessions (with Read activity) | n_reads | n_rereads | **Aggregate re-read %** |
|---:|---:|---:|---:|
| 14 | 266 | 73 | **27.44** |

### Per-session distribution (Q2 — for CV)

```sql
SELECT claude_session_id, COUNT(*) AS n_reads,
       SUM(CASE WHEN re_read=1 THEN 1 ELSE 0 END) AS n_rereads,
       ROUND(100.0 * SUM(CASE WHEN re_read=1 THEN 1 ELSE 0 END) / COUNT(*), 2) AS re_read_pct
FROM tool_calls WHERE tool='Read' GROUP BY claude_session_id ORDER BY n_reads DESC;
```

| Session UUID (truncated) | n_reads | n_rereads | re_read % |
|---|---:|---:|---:|
| c76247b2… | 53 | 19 | 35.85 |
| 548dc261… | 30 | 5 | 16.67 |
| deef944d… | 28 | 4 | 14.29 |
| 0bd70031… | 23 | 8 | 34.78 |
| 2bf8c7c2… | 21 | 10 | 47.62 |
| 5ece92dc… | 19 | 4 | 21.05 |
| bbc3c84c… | 18 | 4 | 22.22 |
| 30a5c0d8… | 16 | 5 | 31.25 |
| ac89ca99… | 15 | 4 | 26.67 |
| a9705560… | 11 | 3 | 27.27 |
| a3f74763… | 10 | 2 | 20.00 |
| fe2f11ad… | 8 | 2 | 25.00 |
| c3f79313… | 8 | 1 | 12.50 |
| 13c9758c… | 6 | 2 | 33.33 |

**Per-session stats**:
- Mean per-session re-read rate: **26.32%** (sum 368.5 / 14 sessions)
- Standard deviation: **9.28** (variance 86.12 / 14)
- **CV = 9.28 / 26.32 = 0.353** ← below 0.4 stability threshold

Aggregate (27.44%) and mean-of-per-session (26.32%) differ slightly because session-weighting differs (aggregate weights by reads-per-session; mean-of-per-session weights sessions equally). Both land in the same HOLD band; aggregate is the canonical measure per `m23_obj2` §7 methodology.

### Correlation with turn count (Q3 — for PROMOTE gate)

```sql
SELECT claude_session_id, COUNT(*) AS n_tool_calls,
       COUNT(CASE WHEN tool='Read' THEN 1 END) AS n_reads,
       SUM(CASE WHEN tool='Read' AND re_read=1 THEN 1 ELSE 0 END) AS n_rereads
FROM tool_calls GROUP BY claude_session_id;
```

| Turn count (tool_calls) | Re-read % |
|---:|---:|
| 197 | 35.85 |
| 130 | 34.78 |
| 125 | 14.29 |
| 102 | 16.67 |
| 93 | 31.25 |
| 77 | 26.67 |
| 73 | 22.22 |
| 71 | 21.05 |
| 56 | 27.27 |
| 51 | 47.62 |
| 47 | 25.00 |
| 46 | 20.00 |
| 26 | 12.50 |
| 17 | 33.33 |

**Pearson r computation**:
- Mean turn count x̄ = 79.36
- Mean re-read ȳ = 26.32
- Σ((x-x̄)(y-ȳ)) = 846.16
- Σ(x-x̄)² = 29547.22
- Σ(y-ȳ)² = 1205.63
- **r = 846.16 / sqrt(29547.22 × 1205.63) = 846.16 / 5969.0 = 0.142**

Correlation is weak-positive; far below the r > 0.4 threshold required for PROMOTE per the verdict tree. Re-read rate does NOT scale meaningfully with turn count.

### Per-mission-class binning (Q4 — for REFINE gate)

```sql
SELECT session_type, COUNT(*) FROM sessions GROUP BY session_type;
-- result: (NULL, 11)  — all rows NULL on session_type
```

`sessions.session_type` column EXISTS (M1.4 schema v0.1.1 Amendment B added it with comment `-- A | B | C | D | E | other`) but is NOT POPULATED by the M1.4 hook implementation. Manual mission-class mapping by UUID-to-session-file alignment is technically possible but introduces classification subjectivity that would obscure rather than illuminate.

**Conclusion for REFINE gate**: insufficient evidence to declare per-mission-class divergence at this corpus. The S1 Obj 2 finding (AGENTS.md 0% re-read vs deep-content 40-67%) IS structural evidence of bimodality, but bimodality at the *file-type* layer rather than at the *mission-class* layer; the verdict tree's REFINE branch specifically calls for per-mission-class divergence, which is not the same phenomenon.

## §3 — Verdict (D3 evidence-decides; Rosetta-default applied at S2 plan ratification)

### Verdict tree evaluation

| Branch | Trigger condition | Evidence | Met? |
|---|---|---|:---:|
| **HOLD at 14** | Re-read rate 20-28% across ≥ 10 sessions AND CV < 0.4 | 27.44% (in band); CV 0.353 (< 0.4) | ✅ |
| **PROMOTE to 15-16** | Re-read rate ≥ 25% AND scales with turn count (r > 0.4) | 27.44% (≥ 25%) ✓; r = 0.142 (< 0.4) ✗ | ❌ |
| **REFINE per-mission-class** | Re-read rate bimodal — planning-class < 15% AND impl-class > 30% (divergence > 2×) | `session_type` NULL; manual binning subjective; structural bimodality exists at file-type layer (not mission-class) | ❌ (insufficient data) |

### Declared verdict: **HOLD pattern β at rank 14**

- M2.3's CANDIDATE PROMOTION 12 → 14 is ratified at the conservative end.
- Pattern β rank in `node.aDNA/what/context/token_baselines.md` §4 settles at **14** (no further movement).
- `node.aDNA/what/context/token_baselines.md` v0.1.3 at S3 will fold this verdict into §4 + record the cross-corpus arc (M1.3 11% → M2.3 26.8% → M2.4 27.44%) in the revision history.

### Calibration correction to M2.3 forward statement

M2.3's `aar_m23_convergence_validation.md` §(b) point 2 explicitly noted: *"M2.4 may shift to 15-16 if re-read rate stabilizes ≥ 25%"*. M2.4 evidence:

- ✅ Re-read rate IS ≥ 25% (27.44%, both at aggregate and per-session mean 26.32%).
- ❌ But the correlation gate is what disambiguates "stable above 25%" from "scales with complexity → promotable to 15-16". The correlation is weak (r = 0.142), so the stabilization is at-band-not-above-band.

**The β = 14 rank reflects a stable mid-band re-read pattern, not a scaling-with-complexity pattern.** PROMOTE-to-15-16 would have required evidence that as sessions get more complex (more turns), re-reads get proportionally more expensive. The data shows the opposite: 197-turn and 130-turn sessions vary widely (14% to 36%), with no consistent upward trend. Sessions self-regulate via heavy-file Read convention (M2.1's Op 2 + ADR-016 Clause B), which caps the re-read tax even as turn count grows.

## §4 — Cross-corpus consistency arc

| Measurement | Corpus n | Re-read rate | Method | Source |
|---|---:|---:|---|---|
| M1.3 §6 | small-n (pre-M1.4 schema) | **~ 11%** | Session-file scan; pre-Amendment-E hook | `m13_obj7_calibration_output.md` §6 |
| M2.3 obj2 | n=7 | **26.8%** | SQLite live-hook + `re_read` column (post-M1.4) | `m23_obj2_corpus_extraction.md` §7 |
| **M2.4 obj3** (this artifact) | **n=14** | **27.44%** | SQLite live-hook; doubled corpus | this §2 |

**Arc interpretation**:

1. **M1.3 → M2.3 jump (11% → 26.8%)** is a methodology effect, not a behavioral shift. The M1.3 session-file scan under-counted re-reads (transcript-based parsing missed mid-session repeated Reads that didn't surface in session-file artifacts). The M1.4 Amendment B live-hook captures every Read with `re_read` flagging, eliminating the under-count. M2.3 §(b) note 2 anticipated this: *"live-hook captures re-reads more reliably than M1.3's session-file scan"*.
2. **M2.3 → M2.4 (26.8% → 27.44%)** is stability evidence. With the corpus DOUBLED (7 → 14 sessions, +100%), the re-read rate moved only +0.64 percentage points. Within sampling noise. The true population re-read rate is converging on ~27% in this campaign.
3. **M2.3 NOT upward-biased after all**: The HOLD branch's mission-action text named in the verdict tree said *"Document M2.3's 26.8% was small-n upward bias"*. M2.4 corrects this expectation — M2.3 was if anything *slightly downward-biased* (26.8% vs 27.44% true rate). Small-n noise can swing either direction; M2.3's measurement was approximately accurate.
4. **HOLD ratifies the M1.4 Amendment B + Project SO #11 + ADR-016 Clause B chain.** The methodology shift (from session-file scan to live-hook capture) was the load-bearing change; the underlying re-read behavior is stable.

## §5 — Forward refresh trigger

Per the mission spec §Mission scope: M3.x at ≥ 20-session corpus + per-mission-class binning ≥ 3-per-class.

**Refresh conditions** (any one triggers re-evaluation):

1. **Corpus growth**: SQLite sessions count reaches ≥ 20 (currently 11; ~ 9 sessions until trigger). At ≥ 20, CV bounds tighten and PROMOTE/REFINE branches gain statistical power.
2. **`sessions.session_type` population**: if a future M-track populates `session_type` column (manually backfilled OR hook upgrade), per-mission-class binning becomes possible. Threshold: ≥ 3 sessions per class enables REFINE branch evaluation.
3. **Drift detection**: if a future M3.x sample at ≥ 20 sessions shows aggregate re-read rate moves OUTSIDE 22-32% band (current 27% ± 5%), re-run verdict tree. Within-band drift does not trigger.
4. **Methodology change**: if Read tool semantics change (e.g., `re_read` flagging logic upgraded to fuzzy-match similar offsets in same file), invalidate this verdict and re-baseline.

**Refresh artifact**: M3.x track produces `m3x_objY_pattern_beta_refresh.md` (template: this artifact) reading the refreshed corpus through the same 5-section shape.

**`token_baselines.md` v0.1.3 fold-in (at S3)**: pattern β row updates to `rank: 14 (M2.4 RATIFIED 2026-05-20)`; revision history adds a row noting the M2.3 candidate-promotion was ratified at the conservative end; §7 Appendix A n-band gets a +1 row at `n=11-14` corpus snapshot.

## §6 — Acceptance check (M2.4 mission spec §Acceptance Criteria item 3)

| # | Criterion | Status |
|---|---|---|
| 1 | Verdict declared explicitly (HOLD / PROMOTE / REFINE) with evidence threshold | ✅ HOLD at 14; 27.44% in 20-28% band + CV 0.353 < 0.4 |
| 2 | Cross-corpus consistency check vs M1.3 + M2.3 | ✅ §4 arc: 11% → 26.8% → 27.44%; methodology shift explains M1.3 jump; M2.3 → M2.4 confirms convergence |
| 3 | `node.aDNA/what/context/token_baselines.md` v0.1.2 → v0.1.3 §4 pattern-ranking row update queued (S3) | ✅ §5 forward refresh trigger names S3 fold-in target |
| 4 | Zero `measurement.sqlite` mutations | ✅ sqlite3 -readonly throughout |
| 5 | Self-reference per Standing Order #8 | ✅ §3 verdict ratifies M2.3's forward statement using the very methodology (live-hook capture) that M1.4 Amendment B ratified; 6th tactical invocation in v8 P2 |

## §7 — Cross-references

- `how/campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p2_m24_agents_md_heatmap.md` — parent mission spec §Objective 3 + §Mission scope verdict tree + D3 evidence-decides default
- `how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m24_obj2_heatmap_query_suite.md` — S1 sibling artifact; §3 Q2 AGENTS.md re-read rate + §5 Q4 vault-wide top-N + load-bearing under-use finding
- `how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_m23_convergence_validation.md` — §(b) point 2 CANDIDATE PROMOTION text + §(b) point 4 final pattern ranking + acceptance scorecard
- `how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m23_obj2_corpus_extraction.md` — §7 re-read methodology baseline (26.8% on n=7)
- `how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m23_obj3_initial_findings.md` — §2 β candidate text source
- `how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m13_obj7_calibration_output.md` — §6 M1.3 11% baseline + pattern α/β/γ/δ definitions
- `what/decisions/adr_016_per_mission_context_budget.md` — Clause A threshold table + Clause B heavy-file Read convention + Clause C empirical constants + Appendix A per-mission-type calibration
- `node.aDNA/what/context/token_baselines.md` v0.1.2 — current canonical baseline (v0.1.3 fold-in at S3 includes β = 14 RATIFIED row)
- `/Users/stanley/.claude/plans/please-read-the-claude-md-zazzy-kazoo.md` — approved S2 plan
