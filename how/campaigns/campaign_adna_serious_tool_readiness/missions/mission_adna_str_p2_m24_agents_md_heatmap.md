---
type: mission
mission_id: mission_adna_str_p2_m24_agents_md_heatmap
campaign: campaign_adna_serious_tool_readiness
phase: 2
mission_number: 2.4
slug: agents_md_heatmap
created: 2026-05-20
updated: 2026-05-20
status: in_progress
opens_at: 2026-05-20T19:33:04Z
opened_session: session_stanley_20260520T193304Z_v8_m24_s1
closed_at:
closed_session:
estimated_sessions: 3   # canonical 3-session shape — 5th instance after M1.3 + M1.4 + M2.1 + M2.3; overrides campaign-master pre-empirical 2-session forecast (ADR-016 Appendix A measurement+implementation hybrid)
actual_sessions: 2   # S1 + S2 complete; S3 pending — populates fully at S3 close per M2.3 convention
s2_session: session_stanley_20260520T214915Z_v8_m24_s2   # destructive governance entry; Obj 3+4+5 landed; ADR-007 → ADR-019 → ADR-022 two-step slot reassignment chain documented at S2
adr_007_slot_reassigned_to: ADR-022   # iterative slot reassignment: ADR-007 occupied by 2026-05-08 v2 M01 outer-CLAUDE.md disposition (1st collision at S2 entry); ADR-019 forecast-reserved at campaign master row 310 for Modular III for Obsidian (2nd collision mid-S2); ADR-022 final = next clear unreserved slot beyond all forecast reservations (ADR-014/015/018/019/020 all forecast-reserved); M1.5 ADR-017 reassignment precedent extended to two-step chain
persona: rosetta
last_edited_by: agent_stanley
spec_completeness: in_progress   # S1 lands Obj 1 + Obj 2 = 2/6; S2 lands Obj 3 + Obj 4 + Obj 5 = 5/6; S3 lands Obj 6 = 6/6
mission_class: hybrid   # measurement (4 SQL queries against ≥10-session corpus + pattern-β re-rank) + implementation (AGENTS.md invariants codification + ADR-007 elevation) — lives at intersection of ADR-016 Appendix A measurement-row + implementation-row
token_budget_estimated: "S1 ~60-100 kT content-load / ~10-15 M API-billing cache_read / ~60-100 turns (mission spec + heat-map query suite + Mermaid digraph; non-destructive); S2 ~90-150 kT / ~15-22 M / ~90-140 turns (β verdict + AGENTS.md audit-only + ADR-007 elevation; destructive); S3 ~60-90 kT / ~10-13 M / ~60-90 turns (AAR + obj7 + node.aDNA refresh + STATE.md Op-3 6th canonical instance + campaign master close + session moves). Aggregate ~210-340 kT / ~35-50 M / ~210-330 turns across 3 sessions. Two-metric form per ADR-016 Clause A refined columns + Clause C ratified formula (`cache_creation ≈ 328 K + turns × 1 K`; `cache_read ≈ 4.1 M + turns × 126 K`); Project SO #11 (refined at M2.3 S2) drift > 2× retrospective trigger."
tags: [mission, m2_4, v8, p2, agents_md_per_directory_hardening, context_graph_traversal_heat_map, pattern_beta_re_rank_final_verdict, adr_007_elevation_armed, adr_016_consumer, m23_consumer, m23_5_template_consumer, m1_3_consumer, m1_4_consumer, m2_1_consumer, hybrid_class, canonical_3_session_shape_5th_instance, p2_exit_gate_closing_brick, m2_x_terminal_mission, audit_only_d5_b]
prerequisite_missions:
  - mission_adna_str_p1_m13_token_audit              # M1.3 §6 — content-load formula + pattern α/β/γ/δ initial ranking (25/12/6/6) + initial Mid-magnitude verdict + AGENTS.md heat-map sketch (deferred to M2.4 per `m13_obj7_calibration_output.md` §6)
  - mission_adna_str_p1_m14_latticescope_schema      # M1.4 — LatticeScope.aDNA v0.1.1 schema activation (Amendments A-E LIVE; `tool_calls.traversal_id` + `tool_calls.recipe_id` columns added; `sessions.transcript_path` LOAD-BEARING; `context_traversal` table operational)
  - mission_adna_str_p2_m21_context_audit_split      # M2.1 — STATE.md split + Op 1/2/3 + heavy-file Read convention (ADR-016 Clause B); per-AGENTS.md hint design at `m21_obj3` deferred to M2.4 hardening pass
  - mission_adna_str_p2_m22_per_mission_budget       # M2.2 — ADR-016 LIVE with 3 clauses (A content-load + B heavy-file + C two-metric forecast); per-mission budget Standing Order ratified
  - mission_adna_str_p2_m23_convergence_validation   # M2.3 — convergence-model validated at 49-session corpus + Mid-magnitude SUSTAIN; ADR-016 Clause C ratified empirical constants; pattern β CANDIDATE PROMOTION 12 → 14 (conditional on M2.4 ≥10-session confirmation); ADR-007 elevation arming
  - mission_adna_str_p2_m23_5_push_readiness_review  # M2.3.5 — 3 templates inherited (per-vault blast-radius matrix obj1 §3 + 5-phase upgrade-cycle model obj2 §3 + 12-item push-readiness checklist obj3)
prerequisite_artifacts:
  - how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m23_obj2_corpus_extraction.md     # §6 heavy-file Read partial-read compliance + §7 Read tool re-read rate 26.8% (small-n pattern-β candidate evidence)
  - how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m23_obj5_adr_007_deferral_memo.md # §2 SQLite session count gap + §3 forward contract for ADR-007 elevation at M2.4 entry IF ≥ 10 sessions
  - how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m23_obj3_initial_findings.md      # §2 pattern β candidate promotion text + §3 API-billing companion formula candidate (later ratified at M2.3 S2)
  - how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_m23_convergence_validation.md # line 62-65 4-pattern re-rank verdict (α=25 stays / β=14 candidate-promotion / γ=6 stays / δ=10 stays)
  - how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m23_5_obj1_push_readiness_review.md # §3 per-vault blast-radius matrix template (36-vault inventory pattern adapted to 40-AGENTS.md)
  - how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m23_5_obj2_upgrade_cycle_doctrine.md # §2 5-anchor topology + §3 5-phase model
  - how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m23_5_obj3_push_readiness_checklist.md # 12-item checklist template adapted from M06 10-check
  - how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m13_obj7_calibration_output.md     # §6 AGENTS.md heat-map sketch deferred to M2.4 + provisional file frequency ranking
  - how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m21_obj3_agents_md_hint_design.md  # Op 2 Heavy-File Read Convention reference (invariant item 4 source)
  - how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m21_obj4_archive_convention_design.md  # 3-rotation skill graduation threshold (rubric source for "≥ 3 reads in corpus" Obj 4 §4 priority cutoff)
  - what/decisions/adr_016_per_mission_context_budget.md     # Clauses A/B/C ratified + Appendix A per-mission-type calibration (M2.4 inherits two-metric discipline)
  - what/decisions/adr_017_network_adna_pattern_category_and_namespace_ratification.md   # `network_` namespace ratification at M1.5 + 2 entity-types parallel-discharged (cross-vault read-only context for forge-ecosystem forward signal)
  - "~/.adna/measurement/measurement.sqlite"      # 10 sessions + 968 tool_calls + 72 context_traversal at M2.4 S1 entry (live-hook subset; v0.1.1 schema with `sessions.transcript_path` + `tool_calls.traversal_id` + `tool_calls.recipe_id` + `tool_calls.re_read` LIVE since M1.4 2026-05-19)
  - "~/.adna/measurement/reports/session_*.json"  # 49 per-session API-billing aggregates (used at M2.3; M2.4 reads informationally for context-graph traversal)
target_adr:
  - elevate_adr_007_tool_use_logging   # S2 — IF SQLite sessions count ≥ 10 at S2 plan ratification (gate-check via `sqlite3 -readonly`); 3 clauses A=PostToolUse-hook-payload-capture + B=SQLite-store-schema-retention + C=analysis-dispatch-contract (Clause C names `m24_obj2_heatmap_query_suite.md` as first consumer; same construction pattern as ADR-016 Clause C citing `m23_obj2` §3 empirical constants)
adr_007_elevation_status: armed   # threshold met (10 sessions at M2.4 S1 entry per session preconditions); D2 gates whether to elevate at S2 OPEN
pattern_beta_re_rank_final_verdict_status: pending   # M2.3 measured 26.8% on 7 sessions (candidate-promotion 12→14); M2.4 ratifies at ≥ 10-session sample per D3 evidence-decides Rosetta-default
agents_md_hardening_scope: audit_only   # D5=B Rosetta-default — produce top-12 priority list + 7-item per-directory invariants spec at Obj 4; defer bulk-edit execution to named M2.4.5 OR M3.1 absorption slot
unblocks_missions:
  - mission_adna_str_p2_m21_5_retroactive_op3    # M2.1.5 (parallel) — Op 3 skill graduation rubric already satisfied at M2.3 close (5th instance); M2.4 close is 6th instance and may operator-discretionarily fold the skill graduation
  - mission_adna_str_p3_*                        # all P3 forge-ecosystem hardening missions inherit ratified pattern-β + AGENTS.md invariants spec + ADR-007 dispatch contract
  - mission_adna_str_p2_p3_phase_exit_gate       # M2.4 close satisfies the 4th brick of Standing Order #19 P2 → P3 exit gate criteria
deliverables_count: 6
hard_dependency_satisfied: "M1.3 + M1.4 + M2.1 + M2.2 + M2.3 + M2.3.5 all closed; ADR-016 LIVE (Clauses A/B/C + Appendix A); ADR-007 elevation trigger armed (10 SQLite sessions at S1 entry); 3 M2.3.5 templates inherited; M2.3 4-pattern verdict + β CANDIDATE PROMOTION text; measurement.sqlite v0.1.1 schema operational; 968 tool_calls + 72 context_traversal rows + 125 JSONL transcripts in corpus"
---

# M2.4 — AGENTS.md per-directory hardening + context-graph traversal heat map

> **Mission produces** the operational AGENTS.md heat map that the v8 P2 exit gate names explicitly as the 4th and final exit-criterion (Campaign Standing Order #19: *"Token-efficiency baseline established; per-mission budget Standing Order ratified; convergence model validated; **AGENTS.md heat map operational**."*).
>
> **Five predecessor missions, one closing brick**:
> - M1.3 §6 (`m13_obj7_calibration_output.md`) — content-load formula + pattern α/β/γ/δ initial ranking + AGENTS.md heat-map sketch explicitly deferred to M2.4.
> - M1.4 (Amendments A-E) — measurement substrate operational: `traversal_id` + `recipe_id` + `re_read` + `transcript_path` columns LIVE since 2026-05-19.
> - M2.1 — STATE.md split + heavy-file Read convention (ADR-016 Clause B); per-AGENTS.md hint design (`m21_obj3`) — M2.4 ratifies what M2.1 sketched at per-directory level.
> - M2.3 (aar_m23 line 62-65) — pattern β CANDIDATE PROMOTION 12 → 14 conditional on M2.4 confirmation at ≥ 10-session sample; ADR-007 deferral memo §3 forward contract → ratified-trigger at M2.4 entry.
> - M2.3.5 (3 templates) — per-vault blast-radius matrix (obj1 §3) + 5-phase upgrade-cycle model (obj2 §3) + 12-item push-readiness checklist (obj3); M2.4 reuses all three.
>
> **Self-reference (Standing Order #8)**: M2.4 is the **2nd implementation-class mission** under the ratified ADR-016 Clause A + Clause C two-metric discipline (M2.3 was the 1st). Its own estimate-vs-actual data point feeds the very calibration table that will refine through M3.x. M2.4 also self-references at a deeper level: the AGENTS.md hardening invariants it ratifies for 40 files apply to AGENTS.md files *in this campaign directory* — including the campaign CLAUDE.md and mission specs. The discipline being ratified is the discipline being applied.
>
> **North-star alignment**: aDNA + lattice strategic UX goal — *"easy and fluid way to build/operate/utilize context graphs"* — depends on agent-side AGENTS.md routing being efficient and predictable. M2.4 makes that surface measurable (heat map) and codified (invariants spec). Without M2.4, the per-directory routing layer stays informal; with M2.4, it becomes governed.

## Mission scope

Consume the ≥ 10-session SQLite corpus (`~/.adna/measurement/measurement.sqlite` v0.1.1: 10 sessions + 968 tool_calls + 72 context_traversal at S1 entry) plus 3 M2.3.5 templates + 4 M2.3 pattern verdicts + ADR-016 Clauses A/B/C + Appendix A to:

1. **Produce the operational AGENTS.md heat map** — 4 SQL queries against the live-hook corpus rendering per-directory load frequency, per-AGENTS.md re-read cost, cross-vault traversal edge weights, and top-N most-read files vault-wide. Mermaid digraph for cross-vault traversal patterns.
2. **Ratify the pattern-β re-rank final verdict** — M2.3 measured 26.8% Read re-read rate on 7 sessions (CANDIDATE PROMOTION 12→14). M2.4 confirms at ≥ 10-session sample. Three-branch verdict tree: HOLD 14 / PROMOTE 15-16 / REFINE per-mission-class.
3. **Audit 40 active AGENTS.md files** for per-directory hardening — produce 5-criterion quality verdict + 7-item per-directory invariants spec + deterministic top-12 priority list (load_freq × re_read_rate / canonical_quality_score, bounded by ≥ 3-reads-in-corpus threshold per `m21_obj4` 3-rotation rubric).
4. **Elevate ADR-007 (tool-use logging)** — IF SQLite ≥ 10 sessions at S2 plan ratification (gate-check via `sqlite3 -readonly`); 3 clauses A/B/C with Clause C explicitly naming `m24_obj2_heatmap_query_suite.md` as first analysis-dispatch consumer.
5. **Forward signals to M3.x + v3-EC + v8 P6** — pattern-β refresh trigger; AGENTS.md invariants for per-vault application; ADR-007 dispatch contract for cross-vault analysis.

Hybrid measurement+implementation class; canonical 3-session shape (S1 spec + heat-map queries non-destructive / S2 destructive governance entry / S3 close + AAR + node.aDNA refresh + STATE.md Op-3). Inherits M2.3's 3-session shape AND M2.3.5's audit-only deferral discipline (premature-codification protection for the bulk-edit cycle).

**3 candidate verdicts for pattern β at M2.4 sample** (D3 evidence-decides at S2 ratification):

| Branch | Trigger condition | Resulting β rank | Mission action |
|---|---|---|---|
| **HOLD at 14** | Re-read rate stabilizes 20-28% across ≥ 10 sessions AND CV < 0.4 | β = 14 | Document M2.3's 26.8% was small-n upward bias |
| **PROMOTE to 15-16** | Re-read rate stabilizes ≥ 25% AND scales with turn count (r > 0.4) | β = 15 (light) or 16 (strong if r > 0.6) | Ratify; fold into `token_baselines.md` §4 at S3 |
| **REFINE BOUNDS** | Re-read rate bimodal — planning-class < 15% AND implementation-class > 30% (per-mission-class divergence > 2×) | β → β_p (planning) + β_i (implementation) | node.aDNA §4 gains 2-row sub-table at S3 |

**D3 default**: evidence-decides at S2 plan ratification — operator override available.

## Objectives

### 1. Author this mission spec (S1)

- **Status**: completed (S1; this file)
- **Session**: S1
- **Read**: M2.3 mission spec (template shape, 7-objective 3-session canonical implementation form); ADR-016 (Clauses A/B/C + Appendix A — two-metric discipline); `m23_obj5_adr_007_deferral_memo.md` §3 (ADR-007 forward contract); 3 M2.3.5 obj artifacts (templates inherited); `aar_m23_convergence_validation.md` line 62-65 (4-pattern re-rank verdict).
- **Produce**: this file.
- **Depends on**: M2.3 close (done); M2.3.5 close (done); operator plan ratification at `/Users/stanley/.claude/plans/please-read-the-claude-md-curious-whistle.md` (done).

### 2. Heat-map SQL query suite + artifact export (S1)

- **Status**: in_progress (S1)
- **Session**: S1
- **Read**: `~/.adna/measurement/measurement.sqlite` schema (v0.1.1; 7 columns of interest: `file_path` + `tool` + `re_read` + `claude_session_id` + `traversal_id` + `from_vault` + `to_vault`); `m23_obj2_corpus_extraction.md` §6-§8 (re-read rate methodology baseline); `m13_obj7_calibration_output.md` AGENTS.md heat-map sketch (provisional ranking deferred from M1.3 to M2.4).
- **Produce**: `missions/artifacts/m24_obj2_heatmap_query_suite.md` — 7 §sections:
  - §1 Method (`sqlite3 -readonly`; corpus snapshot timestamp; gate verification ≥ 10 sessions)
  - §2 Q1 — Directory-load frequency (Read calls × file_path × session_type; top-50)
  - §3 Q2 — AGENTS.md re-read cost (file_path matches `%AGENTS.md`; N_reads_per_session > 2; pattern-β waste signal)
  - §4 Q3 — Cross-vault traversal edge weights (`from_vault → to_vault` from `context_traversal`)
  - §5 Q4 — Top-N most-read files vault-wide (feeds Obj 4 hardening prioritization)
  - §6 Caveats (`context_traversal` ~7.7% join-rate with `tool_calls`; live-hook session-count gate; small-n bands per ADR-016 Appendix A)
  - §7 Mermaid digraph rendering Q3 (validated via `mcp__claude_ai_Mermaid_Chart__validate_and_render_mermaid_diagram`)
- **Acceptance**: all 4 queries non-empty result sets; Mermaid digraph validates and renders; ≥ 10 sessions confirmed at §1 Method.
- **Inherits**: `m23_obj2_corpus_extraction.md` re-read methodology + 7-session baseline.

### 3. Pattern β final verdict at ≥ 10-session sample (S2)

- **Status**: completed (S2; this session 2026-05-20T214915Z) — HOLD at 14 ratified; 27.44% aggregate re-read on n=14 (in 20-28% band); CV 0.353 (< 0.4); correlation r=0.142 (< 0.4 PROMOTE threshold); per-mission-class binning unavailable (`session_type` NULL); forward refresh trigger M3.x ≥ 20 sessions
- **Session**: S2
- **Read**: Obj 2 §3 + §5 (Q2 + Q4 results); `aar_m23_convergence_validation.md` line 62-65 (CANDIDATE PROMOTION text); `m13_obj7_calibration_output.md` §6 pattern α/β/γ/δ definitions; `m23_obj3_initial_findings.md` §2 β candidate text.
- **Produce**: `missions/artifacts/m24_obj3_pattern_beta_final_verdict.md` — 5 §sections:
  - §1 Method (re-read rate computation on ≥ 10-session snapshot; CV calculation; per-mission-class binning if data permits)
  - §2 Measurements (re-read rate aggregate + per-mission-class breakdown if available; correlation with turn count r value)
  - §3 Verdict tree decision with explicit evidence (one of HOLD 14 / PROMOTE 15-16 / REFINE per-mission-class per the §Mission scope table)
  - §4 Cross-corpus consistency check (M1.3 11% on smaller corpus vs M2.3 26.8% on 7 vs M2.4 N% on ≥ 10 — narrative arc; small-n caveat at M2.3 retroactively reframed)
  - §5 Forward refresh trigger (M3.x at ≥ 20 sessions + per-mission-class binning ≥ 3-per-class)
- **Acceptance**: verdict declared explicitly with evidence threshold satisfied; `node.aDNA/what/context/token_baselines.md` §4 pattern-ranking row update queued (S3 owns the file edit).
- **Inherits**: M2.3 candidate-promotion text verbatim + ADR-016 Clause C ratified formula.

### 4. AGENTS.md per-directory hardening audit (S2 — audit only per D5=B)

- **Status**: completed (S2; this session 2026-05-20T214915Z) — 44-row inventory scored (8 canonical / 13 domain-OK / 22 procedural / 1 stale / 0 missing-invariant); 7-item per-directory invariants spec ratified (5 mandatory + 2 conditional); deterministic top-12 priority list from subtree-frequency proxy; 5 bulk-edit gap codes mapped; M2.4.5 OR M3.1 absorption dispatched at §7
- **Session**: S2
- **Read**: All 40 active AGENTS.md files (path inventory from Obj 2 Q1+Q4 deterministic sort); `m21_obj3_agents_md_hint_design.md` (Op 2 Heavy-File Read Convention reference for invariant item 4); `how/AGENTS.md` (canonical operations router shape); `what/context/AGENTS.md` (excellent-quality reference with 6-axis quality rubric).
- **Produce**: `missions/artifacts/m24_obj4_agents_md_hardening_audit.md` — 7 §sections:
  - §1 Method (5-criterion rubric: canonical / domain-OK / procedural / stale / missing-invariant; load-frequency + re-read-frequency joins from Obj 2)
  - §2 40-row inventory table (path / depth / load_freq / re_read_rate / quality_verdict)
  - §3 7-item per-directory invariants spec (entry-tier descriptor / safety hints / load-order discipline / archive cross-link / heavy-file warning / dual-audience pass / cross-link density — adapted from `what/context/AGENTS.md` 6-axis rubric + ADR-016 Clause B Heavy-File convention)
  - §4 Top-12 hardening priority list (deterministic rank function `load_freq × re_read_rate / canonical_quality_score`, bounded by Q4 ≥ 3-reads-in-corpus threshold mirroring `m21_obj4` 3-rotation skill-graduation rubric)
  - §5 Bulk-edit recommendations by gap code (per-AGENTS.md remediation type — frontmatter / load-skip / token-budget / convergence-model-ref / heavy-file-warning)
  - §6 Audit-only justification (D5=B Rosetta-default rationale — premature-codification protection; M2.3 + M2.2 + M1.4 precedents; token-budget protection for S2)
  - §7 Forward dispatch contract (M2.4.5 OR M3.1 absorption slot — operator decides at M2.4 close)
- **Acceptance**: all 40 files audited; top-12 deterministic from Q4 data; invariants spec dual-audience legible per Standing Order #7; audit-only verdict explicit with named follow-up slot.
- **Inherits**: `m23_5_obj1_push_readiness_review.md` §3 per-vault blast-radius matrix template (36-vault inventory pattern → 40-AGENTS.md inventory pattern); `m21_obj3_agents_md_hint_design.md` Op 2 reference.

### 5. ADR-007 elevation (S2 — operator-gated; armed per M2.3 forward contract)

- **Status**: completed (S2; this session 2026-05-20T214915Z) — **ADR-007 slot collision discovered at S2 entry → initial reassignment attempt ADR-019 → second collision discovered mid-S2 (ADR-019 forecast-reserved for Modular III for Obsidian at campaign master row 310) → final reassignment to ADR-022** (next clear unreserved slot beyond all forecast reservations); ADR-022 LIVE at `what/decisions/adr_022_tool_use_logging.md` with `status: accepted` + 3 clauses A (PostToolUse hook payload capture) + B (SQLite store schema + retention; v0.1.1) + C (analysis dispatch contract names `m24_obj2_heatmap_query_suite.md` as first consumer per `m23_obj5` §3 verbatim); elevation chain: provisional (M1.3) → queued-forecast (M2.2) → deferred (M2.3 S2) → accepted (M2.4 S2); slot reassignment chain ADR-007 → ADR-019 → ADR-022 documented at the ADR's `slot_reassignment_history` frontmatter block + §Status (M1.5 ADR-017 forward-only precedent extended to two-step chain)
- **Session**: S2
- **Read**: `m23_obj5_adr_007_deferral_memo.md` §2-3 (threshold + forward contract verbatim); `adr_016_per_mission_context_budget.md` (amendment shape; 3-clause + appendix structure as elevation pattern); current `m13_obj7_calibration_output.md` §6 ADR-007 candidate paragraph (provisional source); current campaign master ADR roadmap row (`adr_007` line).
- **Verify trigger**: at S2 plan ratification, run `sqlite3 -readonly ~/.adna/measurement/measurement.sqlite "SELECT COUNT(*) FROM sessions;"`. Expected ≥ 10 (12+ with M2.3 S3 + M2.3.5 S1 + M2.4 S1 cumulative). If MET: produce ADR; if NOT MET: refresh deferral memo.
- **Produce (if trigger met)**: `what/decisions/adr_007_tool_use_logging.md` (NEW; `status: accepted`) with 3 clauses:
  - **Clause A**: PostToolUse hook payload capture (LIVE since M1.3 S2 2026-05-18; ratifies what's running)
  - **Clause B**: SQLite store schema + retention (M1.4 v0.1.1 schema with `sessions` + `tool_calls` + `context_traversal`; backups + migrations)
  - **Clause C**: Analysis dispatch contract — names `m24_obj2_heatmap_query_suite.md` as first analysis-dispatch consumer; reads `re_read` + `traversal_id` + `recipe_id` columns at scale; same construction pattern as ADR-016 Clause C citing `m23_obj2` §3 empirical constants
- **Acceptance**: ADR `status: accepted`; elevation chain in §Status: *provisional* (M1.3) → *queued-forecast* (M2.2) → *deferred* (M2.3 S2 `m23_obj5`) → *accepted* (M2.4 S2). Clause C names `m24_obj2_heatmap_query_suite.md` as first consumer.
- **Inherits**: `m23_obj5` §3 forward-contract literal text; ADR-016 amendment shape.

### 6. Mission close (S3)

- **Status**: pending S3
- **Session**: S3
- **Produce**:
  - `missions/artifacts/aar_m24_agents_md_heatmap.md` — lightweight 5-line + 4-category extended findings; load-bearing tag if hardening invariants spec is operationally adopted; 12+ acceptance scorecard; 14+ row Standing-Order discharge table; two-metric token-budget table (estimate vs actual all 3 sessions).
  - `missions/artifacts/m24_obj7_validation_output.md` — 8-section M1.4 obj7 template (results + verdict + δ-upgrade-or-stay).
  - `node.aDNA/what/context/token_baselines.md` v0.1.2 → v0.1.3 (§4 pattern β row final-rank update; §7 Appendix A `n in corpus` bumps; §NEW heat-map summary section).
  - `node.aDNA/what/context/token_baselines.yaml` companion FAIR + `node.aDNA/what/inventory/inventory_vaults.yaml` token_baselines row version-bump (0.1.2 → 0.1.3).
  - Campaign master M2.4 row `in_progress → completed` + ADR-007 roadmap update + amendments-table entry.
  - STATE.md router refresh per Op 3 archive-on-close **6th canonical instance** (skill graduation rubric ≥ 3 satisfied at M2.3 close already; this reinforces).
  - 3 session files (S1 + S2 + S3) `active/` → `history/2026-05/`.
- **Acceptance**: AAR 12+ scorecard rows; 14+ Standing-Order discharge table; token-budget table (estimate vs actual all 3 sessions, two-metric form); load-bearing finding propagation map if applicable; node.aDNA bounded to 3 files; M2.4 row `in_progress → completed`; STATE.md demotes M2.3.5 (already done at S1) AND folds M2.4 to concise form after close.
- **Inherits**: `aar_m23_convergence_validation.md` full shape; `m23_obj7_validation_output.md` 8-section template.

## Acceptance Criteria (12 items)

1. All 6 deliverables landed at S3 close (Obj 1:S1 / Obj 2:S1 / Obj 3:S2 / Obj 4:S2 / Obj 5:S2 if trigger met / Obj 6:S3).
2. `m24_obj2_heatmap_query_suite.md` contains ≥ 4 SQL query §sections + Mermaid digraph for Q3 + caveats for 7.7% join-rate; all 4 queries produce non-empty result sets.
3. `m24_obj3_pattern_beta_final_verdict.md` declares verdict explicitly (HOLD/PROMOTE/REFINE) with evidence threshold; cross-corpus check vs M1.3 + M2.3.
4. `m24_obj4_agents_md_hardening_audit.md` audits all 40 active AGENTS.md files + ratifies 7-item per-directory invariants spec + produces deterministic top-12 priority list.
5. ADR-007 elevation decision recorded — `adr_007_tool_use_logging.md` LIVE with `status: accepted` IF SQLite session ≥ 10 at S2; OTHERWISE refreshed deferral memo.
6. ADR-007 Clause C names `m24_obj2_heatmap_query_suite.md` as first analysis-dispatch consumer (if elevation fired).
7. `aar_m24_agents_md_heatmap.md` follows lightweight 5-line + 4-category extended findings shape (SO #5); load-bearing tag if hardening invariants spec adopted.
8. `m24_obj7_validation_output.md` follows 8-section M1.4 obj7 template.
9. `node.aDNA/what/context/token_baselines.md` v0.1.2 → v0.1.3 (or +M24 addendum); companion `.yaml` + `inventory_vaults.yaml` row bumped.
10. Campaign master M2.4 row `in_progress → completed`; ADR-007 roadmap updated; amendments-table entry appended.
11. STATE.md router refresh per Op 3 archive-on-close 6th canonical instance (≤ 20 kT router cap).
12. Hard constraints honored end-to-end (zero `.adna/` touches; zero partner-vault contact; zero `~/.claude/settings.json` mods; zero SQLite mutations via `-readonly`; zero hook mods; zero schema migrations; each session declares `token_budget_estimated` two-metric; estimate-vs-actual within band).

## Operator-Decision Gates (D1-D5, Rosetta-defaults applied at S2 plan ratification)

| Gate | Question | Rosetta default | Override path |
|---|---|---|---|
| **D1** | Heat-map query granularity | **A**: 4 queries (Q1-Q4 as specified) | B: 6 queries (add per-AGENTS-file traversal correlation + per-session_type bin) |
| **D2** | ADR-007 elevation trigger threshold | **A**: elevate-if-≥-10-sessions (literal `m23_obj5` §3 contract) | B: defer to ≥ 12 sessions for safety buffer |
| **D3** | Pattern β verdict tree branch | **evidence-decides**: PROMOTE if rate ≥ 25% AND CV < 0.4 (data-driven) | A: force HOLD at 14 / B: force PROMOTE to 15 / C: force REFINE per-mission-class |
| **D4** | Invariants spec codification target | **B**: appendix to `node.aDNA/what/context/token_baselines.md` v0.1.3 (premature-codification protection; matches M2.3 D4=B) | A: standalone artifact `what/context/governance/agents_md_invariants_v0_1.md` |
| **D5** | AGENTS.md hardening scope | **B**: audit-only with top-12 priority list + 7-item invariants spec (defer bulk-edit to M2.4.5 OR M3.1) | A: include top-12 bulk-edit at S2 / C: full-sweep 40-file bulk-edit at S2 |

## Hard Constraints (11 items)

Campaign-level (inherited):
1. **Zero `.adna/` upstream touches** — v7.0 frozen at `LatticeProtocol/aDNA@27e6395`.
2. **Zero partner-vault contact** — 4 embargo memos preserved (Wilhelm × 2 + SuperLeague + SIP).
3. **Zero `~/.claude/settings.json` modifications**.
4. **Zero hook modifications** — `measurement_hook.sh` + `ingest_transcript.py` frozen at M1.4 v0.1.1.
5. **Zero ADR drafts at S1** per Campaign SO #14 (ADR-007 elevates at S2 if trigger met).
6. **Zero `node.aDNA/` mutations at S1 or S2** — `token_baselines.md` v0.1.3 lands at S3 only.
7. **No M2.1.5 / M3.x work** — M2.4 stays in lane; Op-3 skill graduation candidate for M2.1.5 OR v8 P6 backlog.

M2.4-specific:
8. **Zero `~/.adna/measurement/measurement.sqlite` mutations** — read-only via `sqlite3 -readonly`; never writes; never alters schema (already at v0.1.1).
9. **Zero bulk-edit AGENTS.md mutations at S2** — Obj 4 is audit-only per D5=B Rosetta-default; bulk-edit deferred.
10. **Zero new ADR work outside Obj 5** — no ADR-016 amendment; no new ADRs beyond ADR-007 elevation.
11. **No file content captured** — heat-map queries use token-metadata only (file_path + counts + timestamps; no body text).

## Standing-Order Discharge Plan (14 rows)

| # | Standing Order | Discharge at M2.4 |
|---|---|---|
| 1 (Project) | Phase gates are human gates | S2 entry + S3 close are operator-gated; ADR-007 elevation operator-gated at S2 |
| 2 (Project) | Destructive actions require confirmation | S2 destructive (β verdict + ADR-007 + AGENTS.md audit artifact) — operator confirms at S2 plan ratification |
| 3 (Project) | Context budget is doctrine | `token_budget_estimated` declared two-metric per S1/S2/S3 in this frontmatter; estimate-vs-actual reported at SITREP + AAR |
| 4 (Project) | Local context over global | `how/campaigns/.../CLAUDE.md` auto-loaded; M2.3 mission spec as template; ADR-016 referenced directly |
| 5 (Project) | Every mission gets an AAR | Obj 6 produces lightweight 5-line + extended findings AAR per `template_aar_lightweight.md` |
| 6 (Project) | Archive, never delete | Session files move `active/` → `history/2026-05/`; M2.3.5 stays as committed evidence |
| 7 (Project) | Dual audience test | Mission spec + all 5 deliverable artifacts written dual-audience legible (developer + non-developer) |
| 8 (Project) | Self-reference mandatory | M2.4 ratifies discipline (β + invariants + ADR-007) IT applies to itself — 5th self-reference instance in v8 P2 |
| 9 (Project) | Upstream spec source of truth | ADR-016 referenced verbatim; no spec contradictions; `network_` namespace honored read-only |
| 10 (Project) | Cross-link aggressively | Mission spec + all artifacts wikilink to ≥ 2 related files (M2.3 + M2.3.5 + ADR-016 + M1.3 + node.aDNA token_baselines.md) |
| 11 (Project, refined M2.3 S2) | Per-mission context budget two-metric | This frontmatter declares both content-load kT + API-billing cache_read M; AAR reports both |
| 12 (Campaign) | Per-mission context budget | discharged via SO #11 above |
| 13 (Campaign) | Cross-vault coord memo preservation | No new coord memos at M2.4 (audit-only scope; no partner contact per HC #2) |
| 14 (Campaign) | ADR ratification gated at phase entries | ADR-007 elevates mid-phase per Campaign SO #14 *exception* (load-bearing decision: blocks ADR-007 dispatch contract for M3.x) — explicit operator-override path at D2 |

## Cross-vault Impact

| Vault | Impact at M2.4 | Action |
|---|---|---|
| `.adna/` (LatticeProtocol/aDNA upstream) | None at M2.4 (read-only inheritance) | No-op; v7.0 frozen |
| `node.aDNA/` | `token_baselines.md` v0.1.3 update at S3 (3 files: .md + .yaml + inventory row) | S3-only; zero touches at S1+S2 |
| `LatticeNetwork.aDNA/` (formerly AlphaLattice) | Informational only — `network_` namespace + 2 entity-types (M1.5 ratified) provide forward-signal context for cross-vault traversal patterns | Read-only context |
| `lattice-labs/` | None at M2.4 | No coord memos |
| 4 partner-vault embargo memos | None at M2.4 (preserved per HC #2) | No-op |
| Other 17 ecosystem vaults | None at M2.4 (v7.0 migration cadence operator-discretionary; v8 P6 future contract) | No-op |

## Risks + Mitigations (top 5)

| # | Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|---|
| 1 | `context_traversal` sparseness (7.7% of tool_calls join-rate) makes Q3 Mermaid digraph thin / non-diagnostic | medium | low-medium | Q3 §6 caveats note + "M3.x re-runs at richer corpus"; Q1+Q2+Q4 carry the heat-map weight |
| 2 | ADR-007 elevation premature even at n ≥ 10 (Clause C analysis dispatch hasn't seen a refresh cycle) | low | medium | D2 default = A elevate-if-trigger; fallback = refresh deferral with new gate ("amends at first Clause C consumer flagging schema gap") |
| 3 | Bulk-edit AGENTS.md regressions if S2 D5 flips from B (audit-only) to A (full-sweep) under operator pressure | medium | high | D5 default = B; if override to A, AAR flags drift > 2× retrospective; top-12 list provides staged-execution fallback |
| 4 | Pattern β verdict bimodal at M3.x but locked at M2.4 — premature codification | low-medium | medium | REFINE branch explicit in §Mission scope table; D3 default favors PROMOTE-if-evidence; per-mission-class refine path documented; M3.x can amend via ADR-016 Appendix A precedent |
| 5 | S2 governance scope creep — β + audit + ADR-007 + 40-file pass in one session pushes past 150 kT | medium | medium | D5=B fallback (audit-only); D2=B fallback (defer ADR-007 if trigger not met); D4=B fallback (appendix-to-baselines vs standalone) |

## Forward Contracts

- **M2.1.5 retroactive Op 3**: unaffected; stays `planned-optional`. M2.4 close is 6th canonical instance; skill graduation rubric (≥ 3 rotations) satisfied; M2.1.5 OR v8 P6 graduates `skill_campaign_close_archive.md`.
- **M3.x forge-ecosystem cohort**: inherits final β rank + ADR-007 (if elevated) + AGENTS.md invariants spec + 5-anchor topology + 5-phase upgrade-cycle model. Pattern β refreshes at ≥ 20-session corpus (≥ 3-per-class binning if REFINE verdict).
- **M2.4.5 OR M3.1 absorption (AGENTS.md bulk-edit)**: Obj 4 §7 names the dispatch contract; top-12 list is input, invariants spec is rubric. Operator decides at M2.4 close.
- **v3-EC ecosystem-compliance successor**: inherits AGENTS.md invariants for per-vault application of v8.0; v3-EC mission tree finalization at v8 P6 close.
- **P2 → P3 phase exit gate**: M2.4 close satisfies the 4th brick of Campaign SO #19 (AGENTS.md heat map operational). Combined with M1.3 (token-efficiency baseline) + M2.2 (per-mission budget SO ratified) + M2.3 (convergence model validated), the P2 → P3 transition becomes operator-gate-ready.
- **v8 P6 propagation queue**: ADR-007 (if elevated) joins ADR-016 + SO #11 refinement + Heavy-File Read Convention + AGENTS.md invariants in the v8 P6 ecosystem propagation lift queue. Backlog placeholder `how/backlog/idea_upstream_agents_md_invariants.md` candidate-filed at S3 (operator-discretionary).

## Cross-references

- `how/campaigns/campaign_adna_serious_tool_readiness/campaign_adna_serious_tool_readiness.md` — campaign master (M2.4 row + Phase 2 exit gate definition)
- `how/campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p2_m23_convergence_validation.md` — predecessor; spec shape template
- `how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m23_obj5_adr_007_deferral_memo.md` — ADR-007 elevation forward contract source
- `how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m23_5_obj1_push_readiness_review.md` — per-vault matrix template inheritance source
- `how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m23_5_obj2_upgrade_cycle_doctrine.md` — 5-phase model template inheritance source
- `how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m23_5_obj3_push_readiness_checklist.md` — 12-item checklist template inheritance source
- `what/decisions/adr_016_per_mission_context_budget.md` — two-metric discipline + Appendix A per-mission-type calibration
- `what/decisions/adr_017_network_adna_pattern_category_and_namespace_ratification.md` — read-only cross-vault context
- `node.aDNA/what/context/token_baselines.md` v0.1.2 — current pattern β baseline (M2.4 updates to v0.1.3 at S3)
- `/Users/stanley/.claude/plans/please-read-the-claude-md-curious-whistle.md` — approved plan for M2.4 S1 (Obj 1 + Obj 2)
