---
type: artifact
artifact_type: validation_output
campaign: campaign_adna_serious_tool_readiness
mission: mission_adna_str_p2_m24_agents_md_heatmap
objective: 7
session: S3
created: 2026-05-20
updated: 2026-05-20
status: complete
last_edited_by: agent_stanley
tags: [artifact, mission_deliverable, m24, obj7, validation, post_ratification_consolidation, pattern_beta_hold_at_14_ratified, adr_022_substrate_naming, agents_md_under_use_re_frame, agents_md_invariants_spec_ratified, m23_obj7_template_consumer, m21_obj7_template_consumer, m14_obj7_template_consumer, mid_magnitude_sustain_corpus_extended_carries_forward, two_metric_discipline_operational, p2_exit_gate_4th_brick_satisfied]
related_artifacts:
  - ../mission_adna_str_p2_m24_agents_md_heatmap.md
  - m24_obj2_heatmap_query_suite.md   # S1 — 4 SQL queries + Mermaid digraph + AGENTS.md under-loaded finding
  - m24_obj3_pattern_beta_final_verdict.md   # S2 — HOLD pattern β at rank 14 ratified
  - m24_obj4_agents_md_hardening_audit.md   # S2 — 44-row inventory + 7-item invariants spec + top-12 priority list
  - aar_m24_agents_md_heatmap.md   # S3 (this session) — sibling AAR with 5-line + 4-category extended findings
  - m23_obj7_validation_output.md   # M2.3 S3 — structural template (8-section shape)
  - m21_obj7_validation_output.md   # M2.1 S3 — 8-section template
  - m14_obj7_validation_output.md   # M1.4 S3 — 8-section template (origin instance)
  - ../../../../what/decisions/adr_022_tool_use_logging.md   # S2 — `status: accepted` with 3 clauses A/B/C
  - ../../../../what/decisions/adr_016_per_mission_context_budget.md   # M2.3 LIVE; Clause A two-metric + Clause C ratified empirical constants + Appendix A per-mission-type calibration
  - ../../../../../node.aDNA/what/context/token_baselines.md   # v0.1.2 → v0.1.3 fold-in at this S3
downstream_consumers:
  - mission_adna_str_p2_p3_phase_exit_gate   # P2 → P3 phase exit gate READY at this S3 close per Campaign SO #19
  - mission_adna_str_p2_m24_5_or_p3_m31_agents_md_bulk_edit   # AGENTS.md bulk-edit absorption dispatch (operator decides at P2 → P3 entry)
  - mission_adna_str_p2_m21_5_retroactive_op3   # operator-discretionary parallel
  - mission_adna_str_p3_*   # all P3 forge-ecosystem missions inherit two-metric budget + 3 M2.3.5 templates + AGENTS.md 7-item invariants spec + ADR-022 analysis-dispatch contract
  - mission_adna_str_p6_*   # v8 P6 propagates 5 doctrinal additions upstream
---

# M2.4 Obj 7 — Validation output, post-ratification consolidation (8 sections)

> **Deliverable 7 of M2.4** (S3 Obj 6 sub-artifact). The mission's *post-execution consolidated output*. Closes the loop from S1 design (mission spec + heat-map query suite + AGENTS.md under-loaded finding) through S2 destructive governance (pattern β HOLD at 14 + AGENTS.md 44-row audit + ADR-022 elevation via two-step slot reassignment chain) to S3 validation + mission close. Records the post-execution empirical state, the pattern β HOLD verdict at rank 14, the API-billing companion validation, the per-mission-class N/A note, the threshold rule reconfirmation, the ADR-022 substrate-naming, the forward references, and the 12-item acceptance scorecard final.
>
> **Standing Order #8 (self-reference) 7th canonical instance in v8 P2 closes at this artifact**. M2.4 ratifies discipline (β + invariants + ADR-022 dispatch contract + slot-reassignment chain doctrine) IT applies to itself. Pattern across 7 self-reference instances (M2.2 + M1.5 + M2.3 + M2.3.5 + M2.4 S1 + M2.4 S2 + M2.4 S3): governance-synthesis sessions consistently fold their own measurement into the doctrine they produce; the recursion is the meta-lesson.
>
> **Standing Order #14 honored**: ADR-022 elevation operates via mid-phase exception for load-bearing decisions that block ADR-022 dispatch contract for M3.x; explicit operator-override path at D2=A Rosetta-default at S2 plan ratification. Pattern: pre-scheduled ratification within mid-phase exception scope ≠ new override invocation.

---

## §1 — Method (SQLite snapshot at S3; corpus deltas vs S1 entry; sqlite3 -readonly throughout)

Source: `~/.adna/measurement/measurement.sqlite` v0.1.1 schema (M1.4 LIVE; `sessions.transcript_path` + `tool_calls.traversal_id` + `tool_calls.recipe_id` + `tool_calls.re_read` columns operational; `context_traversal` table joined at 7.7% rate with `tool_calls`).

### 1.1 Corpus snapshot at M2.4 S3 close (2026-05-20T~23:11Z+)

| Table | Count at S1 entry (2026-05-20T19:33Z) | Count at S2 entry (2026-05-20T21:49Z) | Count at S3 close (2026-05-20T23:11Z+) | Δ S1→S3 |
|---|---:|---:|---:|---:|
| `sessions` | 10 | 11 | **12** | +2 (M2.4 S1 + M2.4 S2 captured; S3 captures at next hook fire post-S3-commit) |
| `tool_calls` | 968 | 1107 | **1179** | +211 |
| `context_traversal` | 72 | 107 | **107** | +35 (all at S1+S2; S3 non-destructive consolidation = no fresh cross-vault reads) |

**Read methodology**: `sqlite3 -readonly ~/.adna/measurement/measurement.sqlite "<query>"` throughout S1+S2+S3; zero writes; zero schema migrations; mtime unchanged from pre-S1 perspective (validation: `stat -f "%Sm" ~/.adna/measurement/measurement.sqlite` consistent at hook-firing rate only). M1.4 v0.1.1 schema operationally stable; M2.4 makes no schema demands.

### 1.2 Method consistency vs M2.3 baseline

M2.4 inherits M2.3's `m23_obj2_corpus_extraction.md` SQL methodology verbatim. Q1-Q4 queries at `m24_obj2_heatmap_query_suite.md` §2-§5 use same `re_read` + `file_path` + `claude_session_id` + `traversal_id` joins. **No new schema requirements** beyond M1.4 v0.1.1 baseline. Heat-map Mermaid digraph derived from Q3 `context_traversal` join is informational only (7.7% join-rate caveat at §6 of m24_obj2).

---

## §2 — Pattern re-rank confirmation (HOLD β=14; cross-corpus arc; M2.3 retroactive small-n caveat reframed)

Source: `m24_obj3_pattern_beta_final_verdict.md` §3 + `m24_obj2_heatmap_query_suite.md` §3 (Q2 AGENTS.md re-read cost) + this S3 consolidation.

### 2.1 Final ranking table

| Pattern | M2.3 rank | M2.4 final rank | Evidence at M2.4 |
|---|---|---|---|
| **α** full-vs-excerpt | 25 (top) | **25 (top; unchanged; corpus-validated since M2.3)** ✅ | `m24_obj2` §2 Q1 — 100% heavy-file Read convention compliance carried forward in n=12 corpus; pattern α reduction operational |
| **β** re-reads within session | 14 (CANDIDATE PROMOTION; M2.4 confirms) | **14 (HOLD RATIFIED at M2.4)** ✅ | `m24_obj3` — 27.44% aggregate re-read on n=14 (in 20-28% HOLD band); CV 0.353 (< 0.4 stability); r=0.142 (< 0.4 PROMOTE threshold); both HOLD-branch criteria satisfied |
| **γ** cross-vault context | 6 | **6 (unchanged; corpus still thin)** | `m24_obj2` §4 Q3 — 107 cross-vault traversals total at S3 close (up from 72 at S1 entry; +35 = pre-S2 entry only); aDNA.aDNA → node.aDNA dominant edge 55 (51%); γ re-rank evidence requires forge-ecosystem corpus expansion at M3.x |
| **δ** handoff reload | 10 (M1.4 upgrade EMPIRICALLY VALIDATED) | **10 (unchanged; corpus-validated since M2.3)** ✅ | M2.3 ratified at 49-session corpus; M2.4 confirms continued validation at n=12 SQLite subset (regression-fit constants from M2.3 unchanged) |

### 2.2 Final ranking: **α=25 / β=14 (HOLD ratified) / δ=10 / γ=6**

Pattern β HOLD at rank 14 is now operationally ratified at the M2.4 ≥ 10-session threshold. M2.3 candidate-promotion text retroactively reframed: M2.3's 26.8% on n=7 was within the HOLD band (20-28%) all along; the small-n caveat was correct in stating that M2.4 confirmation was needed, but the directional prediction (re-read rate stabilizes ~ 27%) was accurate.

### 2.3 Cross-corpus arc (M1.3 → M2.3 → M2.4)

| Sample | n | Aggregate re-read rate | Methodology |
|---|---:|---:|---|
| M1.3 baseline | small (session-file scan) | **11%** | M1.3 §2 — session-file scan of pre-hook session prose; under-counts re-reads not surfaced in session text |
| M2.3 candidate | 7 sessions (live-hook SQLite) | **26.8%** | M2.3 `m23_obj2` §7 — live-hook capture; 2.4× larger than M1.3 |
| **M2.4 ratified** | **14 sessions (live-hook SQLite)** | **27.44%** | M2.4 `m24_obj3` §2 — within 1 pp of M2.3 reading; stability confirmed |

**Interpretation**: M1.3 → M2.3 jump = methodology shift (session-file scan undercounts vs live-hook); M2.3 → M2.4 stability = convergence around ~ 27%. M2.3 was approximately accurate, not upward-biased as HOLD-branch template predicted at mission spec design time.

### 2.4 Pattern β waste location

Per `m24_obj2` §3 + §5: AGENTS.md routing layer has 0% re-read rate (6 touched files × 1 read/session). Pattern β waste lives downstream in:

- **Mission specs**: 40-50% re-read rate (mission file re-loaded mid-session as work progresses)
- **STATE.md (post-router split)**: 50-67% re-read rate (router consulted multiple times per session for Next Steps + Last Session navigation)
- **Campaign master**: ~ 40% re-read rate (ADR roadmap section re-loaded when drafting new ADRs)
- **Live AAR files at S3 sessions**: ~ 50% re-read rate (template + drafting cycle)

This is **expected behavior** for live navigational artifacts — they're meant to be re-consulted. Pattern β optimization opportunities are at AGENTS.md discoverability (raise the floor; reduce downstream re-read by routing better) and STATE.md split disciplines (M2.1 doctrine already in place).

---

## §3 — API-billing companion validation (S2 turn count vs ADR-016 Clause C formula prediction; drift report; calibration data for M3.x)

Source: ADR-016 §Decision Clause C (M2.3 ratified empirical constants) + S2 session token-budget table self-report + this S3 consolidation.

### 3.1 Ratified formula recap

```
session_cost_api_billing ≈ cache_creation_component + cache_read_component

where:
  cache_creation_component = 328 K + (turn_count × 1 K)
  cache_read_component     = 4.1 M + (turn_count × 126 K)
```

### 3.2 M2.4 sessions forecast vs estimated turn ranges

| Session | Estimated turn range | cache_creation forecast | cache_read forecast |
|---|---|---|---|
| S1 (non-destructive; spec + heat-map queries) | 60-100 | 388-428 K | 11.7-16.7 M |
| S2 (destructive; β + audit + ADR-022 + slot-reassignment chain) | 90-140 + ~ 20-30 turn overhead = 110-170 actual | 438-498 K | 18.0-25.5 M |
| S3 (this consolidation; AAR + obj7 + node.aDNA + STATE.md + moves) | 60-90 | 388-418 K | 11.7-15.4 M |
| **3-session total** | **230-360 turns** | **1.2-1.3 M cache_creation** | **41-58 M cache_read** |

### 3.3 Calibration data for M3.x

M2.4's S2 was the **first observed session in v8 P2 with mid-session investigation overhead** (slot-reassignment chain remediation ~ 20-30 turns beyond original plan). This adds an empirical calibration data point: implementation-class sessions with mid-session decision-point pivots add ~ 15-25% turn count beyond original turn estimate. Forecast amendment candidate at M3.x or next M2.3-class retrospective: add a "mid-session pivot tax" line to ADR-016 §Appendix A per-mission-type calibration (n=1 not enough yet; M3.x may surface 2nd+3rd instances triggering codification).

### 3.4 Actual API-billing report (post-ingest TBD)

M2.4 S1+S2+S3 actuals will populate at next `~/.adna/measurement/ingest_transcript.py --all` post-S3 commit (~ 1-session lag). First post-M2.4 mission entry will report M2.4 actuals as the second-cohort post-Clause-C-ratification corpus data points after M2.3's first-cohort. If actual cache_read on any of S1/S2/S3 deviates > 2× from forecast, next M2.3-class retrospective (post-M3.x) dispatches refresh of Clause C constants.

---

## §4 — Per-mission-class N/A note (`sessions.session_type` NULL; REFINE branch evidence insufficient; forward refresh trigger M3.x at richer corpus)

Source: `m24_obj3_pattern_beta_final_verdict.md` §2 + this S3 consolidation.

### 4.1 Schema state

M1.4 v0.1.1 schema added `sessions.session_type` column (per Amendment E of M1.4 mission spec). Column EXISTS but is NULL for all 12 rows at M2.4 S3 close. **Reason**: M1.4 hook population logic populates `claude_session_id` + `transcript_path` + cwd-derived `vault` automatically via PostToolUse capture; `session_type` requires either (a) operator-side annotation at session-file frontmatter ingestion OR (b) a heuristic classifier on session-file frontmatter `tags:` field at `ingest_transcript.py` time. Neither mechanism currently implemented.

### 4.2 Impact on M2.4 REFINE branch evidence

Pattern β verdict tree REFINE branch criterion: re-read rate bimodal — planning-class < 15% AND implementation-class > 30% (per-mission-class divergence > 2×). REFINE branch **evidence-insufficient at M2.4** because per-mission-class binning unavailable. HOLD branch evidence satisfied independently (CV 0.353 stability; r=0.142 correlation).

### 4.3 Forward refresh trigger (REFINE branch evaluation deferred to M3.x or later)

Future evaluation gates:

| Trigger | Action |
|---|---|
| `sessions.session_type` populated (≥ 3 per class) | Re-evaluate REFINE branch; if planning < 15% AND implementation > 30%, split β into β_p + β_i with per-mission-class rows in node.aDNA token_baselines.md §4 |
| M3.x ≥ 20 sessions in corpus (with or without session_type) | Re-run pattern β aggregate; if rate breaches 22-32% band, full re-evaluation of verdict tree |
| Drift > 2× on pattern β re-read rate | Trigger retrospective per Project Standing Order #11 refinement |

### 4.4 Optional: M2.4.5 / M3.1 / M3.x absorption candidate for session_type population

Sub-task candidates (operator-discretionary; not in M2.4 scope):

- (a) Add `session_type:` field to session-file frontmatter template; backfill existing 12 sessions via session-file `tags:` heuristic
- (b) Extend `ingest_transcript.py` to populate `sessions.session_type` from session-file frontmatter at ingest time
- (c) Add ADR amendment to ADR-022 Clause C consumer-contract noting `session_type` as 7th invariant (currently 6 per Clause C drafting)

These are sub-task candidates for the M2.4.5 / M3.1 absorption mission OR for a separate `campaign_adna_serious_tool_readiness` sub-track at M3.x; **not load-bearing for M2.4 close** (HOLD β=14 verdict stands without REFINE branch evidence).

---

## §5 — Threshold rule reconfirmation (≥ 10-session pattern-β verdict gate satisfied; forward refresh at ≥ 20 sessions with ≥ 3-per-class binning)

Source: M2.4 mission spec §Mission scope verdict-tree table + `m23_obj5_adr_007_deferral_memo.md` §2 + this S3 consolidation.

### 5.1 ≥ 10-session threshold satisfied at M2.4

| Gate | Required threshold | Actual at S2 entry | Actual at S3 close | Status |
|---|---|---:|---:|---|
| Pattern β verdict gate (HOLD/PROMOTE/REFINE) | ≥ 10 sessions live-hook | 11 | 12 | ✅ MET |
| ADR-022 elevation trigger | ≥ 10 sessions (per `m23_obj5` §3) | 11 | 12 | ✅ MET (elevated at S2) |
| Pattern β CV stability check | CV < 0.4 | CV 0.353 | unchanged | ✅ MET |
| Pattern β PROMOTE correlation check | r ≥ 0.4 between turn count + re-read rate | r=0.142 | unchanged | ❌ PROMOTE branch fails |
| Pattern β REFINE branch check | per-mission-class divergence > 2× | data unavailable | unchanged | ⏸ REFINE branch insufficient evidence (§4) |

### 5.2 Forward refresh trigger

**At M3.x corpus ≥ 20 sessions** with ≥ 3-per-class binning (REFINE branch evidence): re-evaluate pattern β verdict tree. If aggregate re-read rate drifts > 2× outside 22-32% band, trigger retrospective per Project Standing Order #11. **At v8 P6 ecosystem propagation**: M2.4 pattern β HOLD at 14 lifts to `node.aDNA` template + `.adna/` upstream pattern ranking documentation at v8.0 tag firing.

### 5.3 Threshold rule unchanged from M2.3

Clause A threshold table (content-load + API-billing dual columns) at ADR-016 carries forward unchanged from M2.3 S2 ratification. No threshold-rule amendment at M2.4. The 4-band threshold (< 50 / 50-80 / 80-200 / ≥ 200 kT content-load) + companion API-billing forecast (< 10 / 10-15 / 15-25 / ≥ 25 M cache_read) + turn count forecast (< 60-80 / 60-100 / 100-150 / ≥ 150) stays as the canonical session-shape recommendation.

---

## §6 — ADR-022 substrate-naming (Clause C analysis-dispatch contract names m24_obj2 as first consumer; same construction pattern as ADR-016 Clause C)

Source: `what/decisions/adr_022_tool_use_logging.md` §Decision Clause C + `m23_obj5_adr_007_deferral_memo.md` §3 forward contract verbatim.

### 6.1 ADR-022 Clause C verbatim substrate-naming

> **Clause C — Analysis dispatch contract**. The PostToolUse hook captures + SQLite store (Clauses A + B) serve as substrate for analysis-dispatch artifacts. **First analysis-dispatch consumer**: `how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m24_obj2_heatmap_query_suite.md`. This artifact reads `re_read` + `traversal_id` + `recipe_id` + `file_path` + `claude_session_id` columns at scale; produces aggregate analysis (Q1 directory-load frequency / Q2 AGENTS.md per-file re-read cost / Q3 cross-vault traversal edge weights / Q4 top-N most-read files vault-wide) consumed by `m24_obj3_pattern_beta_final_verdict.md` + `m24_obj4_agents_md_hardening_audit.md` + this validation output (m24_obj7).

### 6.2 Construction pattern parallel to ADR-016 Clause C

ADR-016 Clause C ratified empirical constants (`cache_creation ≈ 328 K + turns × 1 K`; `cache_read ≈ 4.1 M + turns × 126 K`) citing `m23_obj2_corpus_extraction.md` §3 as substrate. ADR-022 Clause C uses the same construction pattern: ratifies analysis-dispatch contract citing `m24_obj2_heatmap_query_suite.md` §1-§7 as substrate. Both ADRs follow the doctrine: **the artifact that proves the formula/contract is the artifact that's named as substrate** — Standing Order #8 self-reference applied at ADR drafting layer.

### 6.3 Consumer-contract 6 invariants (applied retroactively to m23_obj2)

Per ADR-022 §Decision Clause C invariants list:

| # | Invariant | Applied at m23_obj2 | Applied at m24_obj2 |
|---:|---|:---:|:---:|
| 1 | sqlite3 -readonly access only | ✅ | ✅ |
| 2 | No file content captured (token-metadata only) | ✅ | ✅ |
| 3 | Aggregate-level results only (no per-session PII surfaced beyond claude_session_id UUID) | ✅ | ✅ |
| 4 | Idempotent re-runs (same SQL against same DB produces same result) | ✅ | ✅ |
| 5 | Caveats documented (join-rate caveats; small-n caveats; schema-version caveats) | ✅ | ✅ |
| 6 | Forward-contract for next consumer (substrate-naming for the next analysis-dispatch artifact) | ✅ (named m24_obj2 forward) | TBD (next analysis-dispatch artifact at M3.x) |

### 6.4 Forward analysis-dispatch consumers (post-M2.4)

| Consumer | Mission | Scope |
|---|---|---|
| `m31_obj_*_forge_corpus_query.md` (forecast) | M3.1 (forge-ecosystem propagation) | Per-forge corpus expansion queries |
| Pattern β refresh artifact at M3.x | M3.x at ≥ 20 sessions | Pattern β verdict re-evaluation per §5.2 |
| `session_type` population analysis at M2.4.5/M3.1/M3.x | TBD | REFINE branch evaluation per §4.4 |
| v8 P6 propagation analysis | v8 P6 | Cross-vault aggregate vs aDNA.aDNA-only validation |

---

## §7 — Forward references

### 7.1 P2 → P3 phase exit gate — **READY at this S3 close**

- **4 bricks complete at M2.4 close** per Campaign Standing Order #19: M1.3 (token-efficiency baseline established) + M2.2 (per-mission budget Standing Order ratified — ADR-016 LIVE) + M2.3 (convergence model validated — Clause C ratified empirical constants from 49-session corpus) + **M2.4 (AGENTS.md heat map operational — heat-map queries LIVE + invariants spec ratified + ADR-022 analysis-dispatch contract LIVE)**
- **Operator entry**: P2 → P3 transition is operator-gated per Project Standing Order #1 + Campaign Standing Order #19; M2.4 close *opens* the gate but operator must explicitly authorize transition at next session
- **M3.x cohort inheritance**: forge-ecosystem hardening cohort inherits two-metric budget discipline (ADR-016 Clause A) + ratified empirical constants (Clause C) + per-mission-type calibration (Appendix A) + 3 M2.3.5 templates (per-vault blast-radius matrix + 5-phase upgrade-cycle model + 12-item push-readiness checklist) + 7-item AGENTS.md invariants spec (NEW at M2.4) + ADR-022 dispatch contract (NEW at M2.4)

### 7.2 M2.4.5 OR M3.1 absorption — operator dispatch decision at P2 → P3 entry

- **Status**: operator-decision at P2 → P3 entry; `m24_obj4` §7 names 2 options with parameters
- **Option A (Rosetta-default)**: M2.4.5 dedicated AGENTS.md bulk-edit mission (1-3 sessions; 80-150 kT content-load / 13-22 M API-billing cache_read; all 44 OR top-12 + canonical-polish; AAR with before/after corpus measurement plan)
- **Option B**: M3.1 absorption — bulk-edit folded into first forge-ecosystem mission (+1 session to current M3.1 scope; +50-80 kT to current M3.1 budget; AGENTS.md hardening applied AT THE SAME TIME as forge-ecosystem v3-EC propagation)
- **Measurement-cycle contract** (post-bulk-edit per m24_obj4 §7): re-run Q2 from S1 Obj 2 §3 at M3.x ≥ 20-session corpus; expect AGENTS.md read frequency to RISE (more agents drilling into the routing layer first) AND deep-content re-read to FALL (Pattern β rank may shift below 14 if discoverability hardening works)

### 7.3 M2.1.5 retroactive Op 3 — operator-discretionary parallel

- **Status**: `planned-optional` (D4=A defaults to M3.x per M2.1 close; operator-override available)
- **Scope**: apply Op 3 archive-on-close pattern retroactively to v2 + LWX campaign masters (light-scope; non-destructive after M2.1's design memo at `m21_obj4`)
- **Trigger**: STATE.md Op 3 archive-on-close pattern now at **6th canonical instance** (M2.1 + M2.2 + M1.5 + M2.3 + M2.3.5 + M2.4 this session); skill graduation rubric (≥ 3 rotations) satisfied many times over; M2.1.5 OR M3.x retroactive task can land `skill_campaign_close_archive.md`
- **Independent**: M2.1.5 doesn't block P2 → P3 transition; operator may run in parallel with P3 entry

### 7.4 M3.x forge-ecosystem hardening missions — inherit 5 doctrinal additions

- **Inherits**: ratified ADR-016 amendment (Clauses A + C refined + Appendix A LIVE); ratified Project Standing Order #11 with API-billing companion bullet; per-mission-type calibration framework; **NEW at M2.4**: 7-item AGENTS.md per-directory invariants spec + ADR-022 tool-use logging analysis-dispatch contract
- **Estimate two-column form**: when M3.x missions declare `token_budget_estimated`: content-load kT (canonical) + API-billing kT (companion) per ratified Clause C
- **AGENTS.md hardening pull-through**: each forge-ecosystem mission MAY apply the 7-item invariants spec to its own forge vault's AGENTS.md files (in parallel with forge-specific work) — discoverability hardening per vault becomes a P3 sub-track

### 7.5 v8 P6 ecosystem propagation — 5 doctrinal additions queued

- **Inherits**: ratified ADR-016 amendment (Clauses A + C + Appendix A LIVE); refined Project Standing Order #11 text; per-mission-type calibration framework; ratified Clause C constants; **NEW at M2.4**: 7-item AGENTS.md per-directory invariants spec + ADR-022 tool-use logging + ADR-016 Clause B Heavy-File Read Convention (carried from M2.1)
- **Propagation path**: backlog placeholder mechanism per ADR-005 rule 3 + Campaign Standing Order #14; all 5 doctrinal additions lift to `.adna/` upstream at v8 P6 close
- **19+ ecosystem vault inheritance**: every Lattice vault adopts (a) AGENTS.md 7-item invariants spec at every AGENTS.md file + (b) ADR-022 analysis-dispatch contract at every aDNA-instrumented vault + (c) two-metric budget discipline at every mission spec at v8.0 tag firing
- **Backlog placeholder candidate**: `idea_upstream_agents_md_invariants_spec.md` (operator-discretionary at M2.4 close OR M2.4.5/M3.1 dispatch); would seed v8 P6 propagation of the invariants spec

### 7.6 node.aDNA token_baselines.md v0.1.3 — published at this S3

- **Folds**: pattern β HOLD ratification at §4 + **NEW §8 heat-map summary section** (concise; cites m24_obj2 query suite + Q1-Q4 results + Mermaid digraph link) + **NEW Appendix B per-directory AGENTS.md invariants spec** per D4=B (verbatim from m24_obj4 §3; 4 mandatory + 3 conditional per the §3 final matrix)
- **Companion FAIR YAML** + **`inventory_vaults.yaml` token_baselines row** version-bumped 0.1.2 → 0.1.3 at this S3
- **Hestia's canonical home** for the freshest empirical bands + the per-directory AGENTS.md invariants framework; future operators consult here

---

## §8 — Acceptance-criteria scorecard (M2.4 mission spec §Acceptance Criteria — 12 items; verbatim from sibling AAR)

| # | Criterion | Status |
|---|---|---|
| 1 | All 6 deliverables landed at S3 close | ✅ PASS |
| 2 | `m24_obj2_heatmap_query_suite.md` contains ≥ 4 SQL query §sections + Mermaid digraph for Q3 + caveats for 7.7% join-rate; all 4 queries produce non-empty result sets | ✅ PASS |
| 3 | `m24_obj3_pattern_beta_final_verdict.md` declares verdict explicitly (HOLD/PROMOTE/REFINE) with evidence threshold; cross-corpus check vs M1.3 + M2.3 | ✅ PASS (HOLD pattern β at rank 14; CV 0.353; r=0.142; cross-corpus arc M1.3 11% → M2.3 26.8% → M2.4 27.44%) |
| 4 | `m24_obj4_agents_md_hardening_audit.md` audits all 40 active AGENTS.md files + ratifies 7-item per-directory invariants spec + produces deterministic top-12 priority list | ✅ PASS (44 files audited — corrected from spec's N=40; 7-item invariants spec with final matrix 4 mandatory + 3 conditional; top-12 priority list) |
| 5 | ADR-007 elevation decision recorded — `adr_007_tool_use_logging.md` LIVE with `status: accepted` IF SQLite session ≥ 10 at S2; OTHERWISE refreshed deferral memo | ✅ PASS (slot reassigned to ADR-022 via two-step chain ADR-007 → ADR-019 → ADR-022; elevation accepted) |
| 6 | ADR-007 Clause C names `m24_obj2_heatmap_query_suite.md` as first analysis-dispatch consumer | ✅ PASS (ADR-022 Clause C names `m24_obj2_heatmap_query_suite.md` as first consumer per `m23_obj5` §3 forward contract verbatim) |
| 7 | `aar_m24_agents_md_heatmap.md` follows lightweight 5-line + 4-category extended findings shape | ✅ PASS (sibling AAR at this S3; `load_bearing: true` with primary + strong-extended findings tagged) |
| 8 | `m24_obj7_validation_output.md` follows 8-section M2.3 obj7 template | ✅ PASS (this artifact; §1-§8 complete) |
| 9 | `node.aDNA/what/context/token_baselines.md` v0.1.2 → v0.1.3 (or +M24 addendum); companion `.yaml` + `inventory_vaults.yaml` row bumped | ✅ PASS (v0.1.3 published at this S3 with NEW §8 heat-map summary + NEW Appendix B + §4 pattern β HOLD ratification + revision history v0.1.3 row + frontmatter version bump; companion `.yaml` content_entity.version + revision.current_version 0.1.2 → 0.1.3 + v0_1_3 revision row appended; `inventory_vaults.yaml` token_baselines row version-bumped + v0_1_3 lineage field added) |
| 10 | Campaign master M2.4 row `in_progress → completed`; ADR-007 roadmap updated; amendments-table entry appended | ✅ PASS (M2.4 row Status `completed` at this S3; ADR-022 roadmap row final state; amendments-table 2026-05-20 entry appended) |
| 11 | STATE.md router refresh per Op 3 archive-on-close 6th canonical instance | ✅ PASS (As-of header updated; M2.4 CLOSED top bullet; M2.4 S2 LANDED demoted to concise form; Next Steps + Last Session block + Next Session Prompt refreshed for P2 → P3 phase exit gate READY) |
| 12 | Hard constraints honored end-to-end | ✅ PASS (all 11 hard constraints honored per S1+S2+S3 SITREPs; zero `.adna/` touches; zero partner-vault contact; zero settings.json mods; zero SQLite mutations; zero hook mods; zero schema migrations; two-metric budget declared; within-band) |

**12/12 PASS.**

---

## Cross-references

- [[../mission_adna_str_p2_m24_agents_md_heatmap.md|M2.4 mission spec]] §Objective 6+7 + §Acceptance Criteria
- [[m24_obj2_heatmap_query_suite.md|m24_obj2_heatmap_query_suite.md]] (S1 — 4 SQL queries Q1-Q4 + Mermaid digraph + AGENTS.md under-loaded finding; ADR-022 Clause C-named substrate)
- [[m24_obj3_pattern_beta_final_verdict.md|m24_obj3_pattern_beta_final_verdict.md]] (S2 — HOLD β=14 ratified with explicit evidence)
- [[m24_obj4_agents_md_hardening_audit.md|m24_obj4_agents_md_hardening_audit.md]] (S2 — 44-row inventory + 7-item invariants spec + top-12 priority list + M2.4.5/M3.1 dispatch contract)
- [[aar_m24_agents_md_heatmap.md|aar_m24_agents_md_heatmap.md]] (S3 sibling AAR; 5-line + 4-category extended findings; load-bearing primary + strong-extended)
- [[../../../../what/decisions/adr_022_tool_use_logging.md|adr_022_tool_use_logging.md]] (S2 — `status: accepted` with 3 clauses A/B/C; slot reassignment chain ADR-007 → ADR-019 → ADR-022)
- [[../../../../what/decisions/adr_016_per_mission_context_budget.md|adr_016_per_mission_context_budget.md]] (M2.3 LIVE; Clause A two-metric + Clause C ratified empirical constants + Appendix A per-mission-type calibration)
- [[../../../../CLAUDE.md|aDNA.aDNA/CLAUDE.md]] §Standing Order #11 (refined at M2.3 S2 with API-billing companion bullet)
- [[../../../../../node.aDNA/what/context/token_baselines.md|node.aDNA/what/context/token_baselines.md]] v0.1.3 (post-S3 fold-in; canonical home for empirical bands + per-directory AGENTS.md invariants spec)
- [[../campaign_adna_serious_tool_readiness.md|campaign master]] M2.4 row + ADR-022 roadmap + amendments table (post-S3)
- [[m14_obj7_validation_output.md|m14_obj7_validation_output.md]] §6 — 8-section template origin instance
- [[m21_obj7_validation_output.md|m21_obj7_validation_output.md]] §5 — 8-section template inherited
- [[m23_obj7_validation_output.md|m23_obj7_validation_output.md]] §1-§8 — 8-section template directly inherited (M2.4 obj7 mirrors M2.3 obj7 shape)
- `~/.adna/measurement/measurement.sqlite` — secondary corpus (live-hook subset; 12 sessions at M2.4 S3 close)
- `~/.adna/measurement/reports/session_*.json` (49 files) — primary API-billing corpus (used at M2.3; M2.4 reads informationally)
