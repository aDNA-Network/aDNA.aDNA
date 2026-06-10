---
type: mission
mission_id: mission_adna_str_p2_m23_convergence_validation
campaign: campaign_adna_serious_tool_readiness
phase: 2
mission_number: 2.3
slug: convergence_validation
created: 2026-05-20
updated: 2026-05-20
status: completed
opens_at: 2026-05-20T04:32:48Z
opened_session: session_stanley_20260520T043248Z_v8_m23_s1
closed_at: 2026-05-20T10:24:16Z
closed_session: session_stanley_20260520T102416Z_v8_m23_s3
estimated_sessions: 3   # canonical implementation-class shape (4th instance after M1.3 + M1.4 + M2.1)
actual_sessions: 3
persona: rosetta
last_edited_by: agent_stanley
spec_completeness: complete   # 7/7 deliverables landed: S1 (1-3) + S2 (4-6) + S3 (7)
mission_class: implementation   # heavy NEW data analysis (per-mission-type cache distributions across 49-session corpus); produces measurement artifacts + governance synthesis input; distinct from M2.2/M1.5 planning-class
token_budget_estimated: "S1 ~60-90 kT (mission spec + corpus extraction + initial findings) / S2 ~80-150 kT (synthesis + ADR amendment or ADR-018 draft) / S3 ~60-90 kT (AAR + status flips + STATE.md router refresh + node.aDNA token_baselines.md v0.1.1+M23 addendum)"   # per ADR-016 Clause A + Project Standing Order #11
tags: [mission, m2_3, v8, p2, adr_016_consumer, adr_007_candidate, convergence_model_validation, cross_campaign_retrospective, api_billing_formula_ratification, per_mission_type_distributions, pattern_re_rank, m13_obj7_consumer, m14_obj7_consumer, m21_obj7_consumer, ingest_transcript_corpus, 49_session_corpus, implementation_class, canonical_3_session_shape]
prerequisite_missions:
  - mission_adna_str_p1_m13_token_audit              # M1.3 §6 — content-load formula + pattern α/β/γ/δ initial ranking + Mid-magnitude verdict
  - mission_adna_str_p1_m14_latticescope_schema      # M1.4 §6 — API-billing companion forecast + two-metric reality framing + δ-upgrade
  - mission_adna_str_p2_m21_context_audit_split      # M2.1 §5 — STATE.md split delta + Op 1/2/3 pattern + heavy-file Read convention
  - mission_adna_str_p2_m22_per_mission_budget       # M2.2 — ADR-016 ratified (Clause A content-load + Clause B heavy-file + Clause C two-metric forecast); first-instance estimate-vs-actual data point
prerequisite_artifacts:
  - how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m13_obj7_calibration_output.md     # §6 source — content-load formula + α/β/γ/δ
  - how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m14_obj7_validation_output.md      # §3-§6 — authoritative API-billing aggregate + δ upgrade + companion forecast
  - how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m21_obj7_validation_output.md      # §1-§5 — STATE.md split delta + Op pattern
  - what/decisions/adr_016_per_mission_context_budget.md     # Clause C forecast → M2.3 ratifies
  - "~/.adna/measurement/reports/session_*.json (49 files)"  # authoritative per-session API-billing aggregates (M1.4 backfill)
  - "~/.adna/measurement/measurement.sqlite"                 # 7 sessions + 708 tool_calls + 55 cross-vault traversals (live-hook subset; M1.4 Amendment E LIVE since 2026-05-19)
  - "/Users/stanley/aDNA/node.aDNA/what/context/token_baselines.md"   # v0.1.1+addendum — current Mid-magnitude baseline + split-as-pattern doctrine
  - how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_m13_token_audit.md             # estimate-vs-actual narrative
  - how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_m14_latticescope_schema.md     # token-budget table format
  - how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_m21_context_audit_split.md     # 3-session shape calibration data
  - how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_m22_per_mission_budget.md      # 1-session planning-class calibration data
target_adr_options:
  - amend_adr_016_clause_c   # preferred — keeps consolidation tidy; Clause C upgrades from "forecast" to "ratified"
  - new_adr_018_api_billing_companion_formula   # alternative if M2.3 surfaces enough new doctrine to warrant standalone ADR
  # D1 operator-decision gates the choice at S2 plan ratification
adr_007_elevation_candidate: true   # 708 tool_calls captured; functional re_read field; SQLite operational; M2.3 S2 may elevate ADR-007 from queued-forecast (campaign master roadmap line) — D2 operator-decision gates
unblocks_missions:
  - mission_adna_str_p2_m24_agents_md_heatmap        # M2.4 heat map consumes M2.3 per-mission-type distributions + ratified API-billing formula
  - mission_adna_str_p2_m21_5_retroactive_op3        # M2.1.5 (parallel) can ratify auto-archive convention if 2nd instance lands during M2.3 work
  - mission_adna_str_p3_*                            # all P3 forge-ecosystem hardening missions inherit ratified per-mission-type budget bands
deliverables_count: 7
hard_dependency_satisfied: "M1.3 + M1.4 + M2.1 + M2.2 all closed; ADR-016 LIVE (Clause C declares 'API-billing formula stays forecast until M2.3 ratifies it'); ingest_transcript.py LIVE (645+ M cache_read corpus across 49 sessions); ~/.adna/measurement/measurement.sqlite operational (708 tool_calls + cross-vault traversals); 49 per-session JSON reports populated at `~/.adna/measurement/reports/`"
---

# M2.3 — Convergence-Model Validation Cross-Campaign Retrospective (API-billing companion formula ratification + per-mission-type cache distributions)

> **Mission consolidates** the 49-session cross-campaign corpus (M01-M35 Rosetta + v2 M01-M04 + LWX M-LWX-01-03 + v8 M0-M2.2) into the ratified API-billing companion formula. M1.4 §6 left it as forecast; ADR-016 Clause C declared the deferral explicitly; M2.3 closes the loop with authoritative numbers.
>
> **Four predecessor missions, one cross-campaign ratification**:
> - M1.3 §6 (`m13_obj7_calibration_output.md`) — content-load formula `session_cost ≈ transition_tax + Σ per_objective_work`; pattern α/β/γ/δ initial ranking (25/12/6/6); Mid-magnitude verdict; CP-1 23 kT content-load proxy.
> - M1.4 §6 (`m14_obj7_validation_output.md`) — 645 M cache_read across 48 sessions; two-metric reality framing; cache_creation floor 109-1247 kT (mean 403K); pattern δ upgraded 6 → 10; API-billing companion forecast.
> - M2.1 §5 (`m21_obj7_validation_output.md`) — STATE.md split 841% reduction; Op 1/2/3 pattern; heavy-file Read convention (now ADR-016 Clause B + AGENTS.md live).
> - M2.2 (`aar_m22_per_mission_budget.md`) — ADR-016 ratified with 3 clauses; first-instance estimate-vs-actual (S1 est 60-90 kT / actual ~55-75 kT, within band).
>
> **Self-reference (Standing Order #8)**: M2.3 is the FIRST mission of class implementation under the ratified ADR-016 Clause A discipline. Its own estimate-vs-actual data point feeds the very calibration table it produces. M2.2 set the precedent (planning-class); M2.3 establishes it (implementation-class).
>
> **North-star alignment**: ADR-016 Clause C states "API-billing formula stays forecast until M2.3 cross-campaign retrospective ratifies it." M2.3 closes that explicit forecast. Without M2.3, the per-mission budget discipline runs on content-load only and the API-billing measurement (most of the actual cost) stays informal. M2.3 turns the second metric from forecast to operational rule.

## Mission scope

Consume the 49-session API-billing corpus (`~/.adna/measurement/reports/session_*.json`) + SQLite live-hook subset (7 sessions + 708 tool_calls + 55 cross-vault traversals) + the 4 predecessor missions' obj7/AAR artifacts to:

1. **Validate or refine** the Mid-magnitude convergence-model verdict against the extended corpus (M1.4 set verdict on 48 sessions; M2.3 adds M1.5 + M2.1 + M2.2 sessions + intra-corpus time-trend analysis).
2. **Ratify the API-billing companion formula** as ADR-016 Clause C amendment (D1=A preferred) OR new ADR-018 (D1=B alternative). Concrete numbers from 49-session aggregate; per-mission-type distributions; turn-snowball cap.
3. **Re-rank pattern α/β/γ/δ** with empirical evidence from extended corpus (time-trend in cache_read per turn; re-read rate from SQLite; STATE.md attribution from file_path frequency; cross-vault traversal patterns).
4. **Decide ADR-007 elevation** (tool-use logging) from queued-forecast — operational data available; SQLite functional with re_read + traversal_id + recipe_id fields populated.
5. **Establish per-mission-type cache distributions** for ADR-016 calibration discipline (planning vs implementation vs measurement vs single-session-planning).
6. **Refine decomposition threshold rule** if data warrants (M1.4 §6 forecast: turn-count cap ~60-80 turns; per-session cache_read forecast >10M triggers split candidate).

Implementation-class; canonical 3-session shape (S1 design + initial extraction / S2 destructive governance / S3 close + AAR). Distinct from M2.2's planning-class single-session shape — M2.3 has new measurement work to do (not just consolidation).

**3 ADR-016 amendment candidates** (S2 ratifies — operator-decision gated):

1. **Clause C upgrade** — "forecast" → "ratified"; concrete API-billing formula `session_cost_api_billing ≈ cache_creation_floor + turn_count × mean_per_turn_cache_read`; floor 300-500 kT; per-turn mean 150-250 kT (49-session empirical band).
2. **Clause A refinement** — add API-billing companion threshold table alongside content-load thresholds (turn-count cap recommendation; per-session cache_read soft cap).
3. **Clause D (new)** — per-mission-type calibration table (planning / implementation / measurement / single-session-planning) with empirical mean ± band for content-load + API-billing.

**D1=A**: prefer ADR-016 amendment over new ADR-018 unless M2.3 surfaces enough new doctrine to warrant standalone ADR (rubric: ≥ 3 new clauses + new concept category).

## Objectives

### 1. Author this mission spec (S1)

- **Status**: in_progress (S1; this file)
- **Session**: S1
- **Read**: M2.2 mission spec (template shape); M1.3 + M1.4 + M2.1 obj7 (predecessor §reference verbatim); ADR-016 (Clause C forecast text to amend); aar_m13/14/21/22 (token-budget table format).
- **Produce**: this file.
- **Depends on**: M2.2 close (done); operator menu pick (M2.3 selected at session entry).

### 2. Corpus extraction (S1)

- **Status**: pending S1
- **Session**: S1
- **Read** (read-only): 49 files `~/.adna/measurement/reports/session_*.json`; `~/.adna/measurement/measurement.sqlite` (sessions + tool_calls + context_traversal); M1.4 obj7 §1-§2 (authoritative numbers); M1.3 obj7 §1.1 (CP-1 23 kT baseline).
- **Produce**: `missions/artifacts/m23_obj2_corpus_extraction.md` — 8 sections covering:
  - §1 49-session aggregate table (cache_read / cache_creation / output / input — sum / mean / median / min / max)
  - §2 per-turn averages (intra-session signal — 49 rows; vault-complexity time-trend)
  - §3 top-10 outliers (cache_read + cache_creation + output)
  - §4 per-vault attribution (file_path frequency from SQLite; STATE.md + CLAUDE.md + campaign master Reads)
  - §5 cross-vault traversal patterns (38 aDNA.aDNA → node.aDNA + 13 → LatticeNetwork.aDNA + 3 → LatticeLabs.aDNA + 1 → LatticeAgent.aDNA)
  - §6 re-read rate analysis (516 first-reads / 194 re-reads = 27.3% — vs M1.3's 11% on smaller corpus — pattern β re-rank candidate)
  - §7 per-mission-type rough binning (planning vs implementation vs measurement vs single-session-planning — corpus-level approximation; precise binning requires session_type field populated which is gap from SQLite)
  - §8 fresh data points: M2.1 (3-session impl), M2.2 (1-session planning), M1.5 (1-session planning) — measured against pre-existing corpus
- **Depends on**: 1
- **Standing Order #14 alignment**: M2.3 corpus-extraction is NON-DESTRUCTIVE — pure read-only consumption of M1.4 backfill output; no SQLite mutations; no measurement.sqlite schema changes.

### 3. Initial findings memo (S1)

- **Status**: pending S1
- **Session**: S1
- **Read**: m23_obj2 corpus extraction (this S1's prior output); M1.4 §3-§6 (verdict + pattern re-rank + companion formula); M1.3 §6 (Mid-magnitude original); ADR-016 §Decision (current clause text to amend).
- **Produce**: `missions/artifacts/m23_obj3_initial_findings.md` — preliminary (S2 ratifies):
  - §1 Convergence-model verdict status — does Mid-magnitude sustain post-49-session corpus? Numerical bounds from §2 + §3 outlier analysis.
  - §2 Pattern α/β/γ/δ re-rank candidates with evidence — α STATE.md attribution; β re-read rate jump; δ cache_creation floor confirmation; γ position.
  - §3 API-billing companion formula candidate (concrete) — `session_cost_api_billing ≈ floor(transition_tax_cache_creation) + turn_count × mean_cache_read_per_turn`; numbers from §2.
  - §4 Per-mission-type decomposition threshold table candidate — turn-count cap; per-session cache_read soft cap; band recommendations.
  - §5 D-decision flags for S2 operator gate: D1 (ADR-016 amend vs ADR-018 new); D2 (ADR-007 elevation candidacy); D3 (Standing Order #11 refinement); D4 (per-mission-type sub-clause new); D5 (decomposition threshold rule confirm-or-refine).
  - §6 Forward refs to M2.4 (β re-read rate measurement focus; gating threshold confirmation) + M3.x (forge-ecosystem missions inherit API-billing companion budgets).
- **Depends on**: 2

### 4. ADR amendment or new ADR draft (S2 — operator-gated)

- **Status**: pending S2
- **Session**: S2 (operator-gated per Project Standing Order #1 destructive entry)
- **Read**: m23_obj2 + m23_obj3 (S1 outputs); ADR-016 (target file); m22 mission spec (single-commit additive pattern reference).
- **Produce**: EITHER (D1=A) ADR-016 amendment — Clause C "forecast → ratified" + optional Clause D per-mission-type calibration table; OR (D1=B) new `adr_018_api_billing_companion_formula.md` standalone ADR.
- **Depends on**: 3; operator D1 ratification at S2 plan.

### 5. ADR-007 elevation decision (S2 — operator-gated)

- **Status**: pending S2
- **Session**: S2
- **Read**: m23_obj2 §4-§6 (SQLite tool_call evidence); campaign master ADR roadmap line for ADR-007 forecast status; M1.4 amendment B (cross-vault traversal field LIVE) + amendment C (recipe_id field LIVE).
- **Produce**: D2 decision recorded in S2 session file: (D2=A) elevate ADR-007 at S2; (D2=B) defer to M2.4 when ≥10-session live-hook corpus is ready. If D2=A, draft `adr_007_tool_use_logging.md` skeleton (status: accepted); if D2=B, document why deferral makes sense (gap analysis: 7 sessions today vs ≥10 needed).
- **Depends on**: 4; operator D2 gate.

### 6. Per-mission-type distribution table for ADR-016 Clause A (S2)

- **Status**: pending S2
- **Session**: S2
- **Read**: m23_obj2 §7 (rough per-type binning); M2.2 single-session planning data; M1.3/M1.4/M2.1 3-session implementation data.
- **Produce**: appendix to S2 governance artifact (whichever D1=A/B path) — per-mission-type calibration table with `n_sessions`, `mean_content_load_kT`, `mean_api_billing_kT`, `mean_turn_count`, `recommended_session_shape`.
- **Depends on**: 5

### 7. Mission close (S3 — operator-gated)

- **Status**: pending S3
- **Session**: S3 (operator-gated per Project Standing Order #1; canonical close session)
- **Read**: m23_obj2 + m23_obj3 + ADR-016 amendment OR ADR-018 draft (S2 outputs); all 4 predecessor AARs for shape reference.
- **Produce**:
  1. `missions/artifacts/aar_m23_convergence_validation.md` — implementation-class AAR (lightweight 5-line + 4-category extended findings per M2.1 precedent); 11+ acceptance scorecard; 13+ row Standing-Order discharge table; token-budget table (estimate-vs-actual all 3 sessions).
  2. `missions/artifacts/m23_obj7_validation_output.md` — final consolidated output (8-section M1.4 obj7 template; closes the loop from S1 design through S2 ratification to S3 validation).
  3. `node.aDNA/what/context/token_baselines.md` v0.1.1 → v0.1.2 (or v0.1.1+M23 addendum) — fold in M2.3 per-mission-type distributions + ratified API-billing formula + extended-corpus verdict refinement.
  4. `node.aDNA/what/context/token_baselines.yaml` companion FAIR update.
  5. `node.aDNA/what/inventory/inventory_vaults.yaml` token_baselines row version-bump.
  6. This mission file frontmatter `in_progress → completed`; `closed_at`; `closed_session`; `actual_sessions`; deliverables table all marked landed.
  7. Campaign master `campaign_adna_serious_tool_readiness.md` — M2.3 row `in_progress → completed`; ADR roadmap row(s) updated (ADR-016 amended OR ADR-018 added); amendments-table entry appended.
  8. STATE.md (router) Current Phase + Next Steps refresh (Op 3 archive-on-close pattern; M2.3-CLOSED bullet replaces/demotes M2.2 + M1.5 entries).
  9. Session file SITREP + Next Session Prompt + move `active/` → `history/2026-05/`.
- **Depends on**: 6; operator S3 gate.

## Deliverables

| # | Deliverable | Session | Status |
|---|---|---|---|
| 1 | M2.3 mission spec | S1 | ✅ **landed at S1** (this file) |
| 2 | `missions/artifacts/m23_obj2_corpus_extraction.md` | S1 | ✅ **landed at S1** (14 §sections; 49-session aggregate + linear regression + time-trend + heavy-file compliance + re-read + traversal + per-mission-type) |
| 3 | `missions/artifacts/m23_obj3_initial_findings.md` | S1 | ✅ **landed at S1** (8 §sections; verdict + pattern re-rank + API-billing formula candidate + per-mission-type table + D1-D5 flags + forward refs) |
| 4 | ADR-016 amendment OR new `adr_018_api_billing_companion_formula.md` | S2 | ✅ **landed at S2 — D1=A path** (ADR-016 amendment in place; Clause C ratified + Clause A threshold dual columns + Appendix A per-mission-type; line count 146 → 200) |
| 5 | ADR-007 elevation decision (+ optional draft) | S2 | ✅ **landed at S2 — D2=B path** (`m23_obj5_adr_007_deferral_memo.md` 6-section memo with gap analysis n=7 < ≥10 + M2.4 dispatch contract + alternative-considered rejection) |
| 6 | Per-mission-type distribution table (appendix to governance artifact) | S2 | ✅ **landed at S2 — D4=B path** (ADR-016 §Appendix A 5 mission-class rows; n=2-9 caveats explicit; v8 baseline; codification deferred to future cumulative ADR at n ≥ 5 per class) |
| 7 | AAR + obj7 validation + node.aDNA token_baselines update + campaign master + STATE.md refresh + session close | S3 | ✅ **landed at S3** (this session; `aar_m23_convergence_validation.md` + `m23_obj7_validation_output.md` + node.aDNA `token_baselines.md` v0.1.1 → v0.1.2 + companion `.yaml` + `inventory_vaults.yaml` row + this mission frontmatter flip + campaign master M2.3 row + STATE.md router Op-3 4th canonical instance refresh + 3 session moves) |

## Acceptance criteria

- [ ] All 7 deliverables landed at S3 close
- [ ] `missions/artifacts/m23_obj2_corpus_extraction.md` contains 8 §sections; per-mission-type aggregate table with `n ≥ 4` rows (one per mission class); 49-session aggregate numbers consistent with M1.4 obj7 §1-§2 within rounding
- [ ] `missions/artifacts/m23_obj3_initial_findings.md` lists explicit D1/D2/D3/D4/D5 decision flags for S2 operator gate; preliminary convergence-model verdict declared (sustain / refine / shift)
- [ ] ADR-016 amendment OR ADR-018 has `status: accepted` post-S2 (D1 path determines which)
- [ ] ADR-007 elevation decision recorded (D2=A elevation + draft OR D2=B explicit deferral with gap analysis)
- [ ] Per-mission-type calibration table appendix has `n_sessions`, `mean_content_load_kT`, `mean_api_billing_kT`, `mean_turn_count`, `recommended_session_shape` columns
- [ ] `aar_m23_convergence_validation.md` lightweight 5-line + 4-category extended findings (Standing Order #5; implementation-class AAR shape per M2.1 precedent)
- [ ] `m23_obj7_validation_output.md` follows 8-section M1.4 obj7 template (final consolidated output)
- [ ] `node.aDNA/what/context/token_baselines.md` updated to v0.1.2 (or v0.1.1+M23 addendum); companion YAML + inventory_vaults.yaml row updated
- [ ] Campaign master M2.3 row shows `completed`; ADR roadmap updated; amendments-table entry appended
- [ ] STATE.md router refresh per Op 3 archive-on-close pattern (3rd canonical instance after M2.1 + M2.2)
- [ ] Zero `.adna/` upstream touches end-to-end (v7.0 frozen at `27e6395`)
- [ ] Zero `~/.adna/measurement/measurement.sqlite` mutations (M2.3 consumes; never writes)
- [ ] Each mission file declares `token_budget_estimated` per ADR-016 Clause A (M2.3 itself first; this spec self-references)
- [ ] Token budget estimate-vs-actual reported in S1/S2/S3 SITREPs (within band per Campaign Standing Order #12)

## Operator decision gates (D1-D5)

| # | Question | Default | Resolved at |
|---|---|---|---|
| D1 | ADR-016 Clause C amendment in place (Option A) vs new ADR-018 standalone (Option B)? | **A: amend ADR-016 in place** unless M2.3 surfaces ≥ 3 new clauses + new concept category; consolidation tidy; preserves single-ADR governance | S2 plan ratification |
| D2 | Elevate ADR-007 (tool-use logging) at S2 (Option A) vs defer to M2.4 (Option B)? | **A: elevate at S2** if SQLite has functional re_read + traversal_id + recipe_id fields populated AND 49-session JSON corpus supplies sufficient tool-use signal; OTHERWISE B: defer to M2.4 with explicit gap analysis | S2 plan ratification |
| D3 | Standing Order #11 wording refinement at S2 (add API-billing companion bullet) vs keep current Clause-A-only text? | **A: refine** to mention both content-load (canonical) + API-billing (companion) once formula ratifies; preserves the two-metric reporting variant from Clause C | S2 plan ratification |
| D4 | Add new ADR-016 Clause D per-mission-type calibration table (Option A) vs keep table as appendix to governance artifact only (Option B)? | **A: new Clause D** if data shows ≥ 4 distinct mission classes with material distribution differences; otherwise B (appendix-only — premature codification) | S2 plan ratification |
| D5 | Refine decomposition threshold rule (Option A) vs keep current ADR-016 Clause A bands (Option B)? | **A: refine** if 49-session data shows different empirical bands than ADR-016 Clause A < 50 / 50-80 / 80-200 / ≥ 200 kT; otherwise B | S2 plan ratification |

## Hard constraints

- **Zero `.adna/` upstream touches** — v7.0 frozen at `LatticeProtocol/aDNA@27e6395`; M2.3 stays aDNA.aDNA-internal. v8 P6 owns upstream propagation per Campaign Standing Order #14 + ADR-005 rule 3.
- **Zero partner-vault contact** — 4 embargo memos preserved; no coord memos to LatticeNetwork / LatticeAgent / Spock / Hestia at M2.3.
- **Zero `~/.claude/settings.json` modifications**.
- **Zero `~/.adna/measurement/measurement.sqlite` mutations** — M2.3 reads SQLite via `sqlite3 -readonly`; never writes; never alters schema.
- **Zero hook modifications** — `measurement_hook.sh` + `ingest_transcript.py` stay frozen at M1.4 v0.1.1 state.
- **Zero ADR drafts at S1** per Campaign Standing Order #14 — all ADR work (amend or new) lands at S2 only; S1 produces decision flags + evidence, not governance text.
- **Zero `node.aDNA/` mutations at S1 or S2** — `token_baselines.md` v0.1.2 update belongs at S3 per M2.1/M2.2 precedent.
- **Standing Order #14 alignment** — ADR-016 Clause C explicitly declares M2.3 as the ratification point ("API-billing formula stays forecast until M2.3 cross-campaign retrospective ratifies it"); M2.3's ratification work is therefore IN-SCOPE for phase-2 mid-phase ADR amendment without invoking the load-bearing-decision exception clause separately — the ratification was pre-scheduled at M2.2.
- **No M1.5 / M2.1.5 / M2.4 work** — M2.3 stays in its own lane; M2.1.5 retroactive Op 3 + M2.4 heat map remain operator-discretionary parallel slots.
- **No file content captured** — corpus aggregation uses token-metadata only (per-session JSON sums; SQLite metadata); no agent-generated file content stored from transcripts.

## Standing Order discharges

| # | Order | M2.3 discharge plan |
|---|---|---|
| Project SO #1 | Phase gates are human gates | S2 + S3 entries operator-gated per current campaign practice; S1 non-destructive entry covered by plan ratification |
| Project SO #3 | Context budget is doctrine | M2.3 is the operational ratification of the API-billing companion dimension; turns the two-metric reporting variant from forecast to operational rule |
| Project SO #5 | Every mission gets an AAR | S3 produces `aar_m23_convergence_validation.md` (lightweight 5-line + 4-category extended findings) |
| Project SO #6 | Archive never delete | M2.3 adds; deletes nothing (49 JSON reports + SQLite + predecessor obj7 + ADRs all preserved verbatim) |
| Project SO #7 | Dual-audience test | ADR amendment / new ADR authored for developer (formula + threshold table + per-mission-type table) + newcomer (why two metrics matter; what API-billing snowball looks like) |
| Project SO #8 | Self-reference mandatory | M2.3 is the FIRST mission of class implementation under ADR-016 Clause A; its own 3-session estimate-vs-actual data feeds the calibration table it produces |
| Project SO #10 | Cross-link aggressively | All M2.3 artifacts wikilink M1.3 + M1.4 + M2.1 + M2.2 obj7/AAR; ADR amendment cross-links M1.3 §6 + M1.4 §6; cross-vault references for `node.aDNA/what/context/token_baselines.md` |
| Project SO #11 | Per-mission context budget is mandatory | M2.3 declares `token_budget_estimated: "S1 ~60-90 kT / S2 ~80-150 kT / S3 ~60-90 kT"`; AARs at S1/S2/S3 close report estimate-vs-actual delta |
| Campaign SO #11 | Per-phase decadal AAR | N/A at mission close (decadal AAR triggers at P2 exit gate per Campaign Standing Order #11) |
| Campaign SO #12 | Per-mission context budget | ✅ honored — frontmatter `token_budget_estimated` declared; estimate-vs-actual at SITREPs |
| Campaign SO #14 | ADR ratification gated at phase entries | M2.3 ratification work was PRE-SCHEDULED at M2.2 (ADR-016 Clause C declared M2.3 as ratifier); no separate operator-override invocation needed |
| Campaign SO #16 | v7.0 tag dependency hard | ✅ satisfied (v2 M06 closed 2026-05-18) |
| Campaign SO #17 | Mission_class discipline | ✅ `mission_class: implementation` declared; canonical 3-session shape (4th instance after M1.3 + M1.4 + M2.1) |
| Campaign SO #19 | Phase exit = human gate | Applies at P2 → P3; M2.3 close does NOT auto-advance to P3 |

## Cross-vault impact

- **`node.aDNA/`** — S3 mutations bounded to exactly 3 files (`what/context/token_baselines.md` + `.yaml` companion + `what/inventory/inventory_vaults.yaml` row); S1 + S2 zero touches per hard constraint.
- **`.adna/` upstream** — zero touches at M2.3 (v7.0 frozen); ADR amendment / ADR-018 propagation to base template queued for v8 P6 per Campaign Standing Order #14 + ADR-005 rule 3.
- **Partner vaults** — zero contact; 4 embargo memos preserved.
- **All future M3.x + M4.x + M5.x missions** — inherit ratified API-billing companion formula + per-mission-type calibration table; estimate `token_budget_estimated` with two-column form (content-load kT / API-billing kT) once ADR-016 amendment lands.
- **M2.4 AGENTS.md heat map** — consumes M2.3 §6 re-read analysis (pattern β re-rank candidate); M2.4 ≥ 10 live-hook session gate still applies (M2.3 contributes 3+ live-hook sessions toward threshold).
- **M2.1.5 retroactive Op 3** — independent operator-discretionary slot; M2.3 doesn't block.

## Self-reference + dual-audience

This mission is the first implementation-class mission to *practice* the Standing Order #11 rule that M2.2 *ratified*. Its 3-session token-budget table (`S1 ~60-90 kT / S2 ~80-150 kT / S3 ~60-90 kT`) is the canonical implementation-class precedent. M2.2 set the planning-class single-session precedent (≤ 90 kT compresses to S1); M2.3 sets the implementation-class 3-session precedent (3 × 60-150 kT; transition tax dominates the S1/S3 ends; destructive work dominates S2).

Dual-audience test:
- **Developer**: ADR-016 amendment (D1=A) or ADR-018 (D1=B) specifies the API-billing companion formula `session_cost_api_billing ≈ floor + turn_count × mean_per_turn_cache_read`; per-mission-type calibration table; decomposition threshold rule with turn-count cap. Operational and enforceable.
- **Newcomer**: the two-metric reality matters because the visible "what I'm reading" measure (content-load) is 5-17× smaller than the actual billed cost (API-billing snowball). Without ratifying the second metric, budget discipline misses where most of the cost lives.

## Risks

| # | Risk | Mitigation |
|---|---|---|
| 1 | M2.3 finds Mid-magnitude verdict shifts to Large-magnitude (e.g., cache_read per turn exceeds forecast band by > 2×) | Acceptable outcome — the retrospective's purpose is empirical refinement; verdict shift triggers ADR-016 amendment with revised thresholds; no campaign rework needed |
| 2 | 49 sessions still insufficient n for reliable per-mission-type binning (some classes have < 5 sessions) | Document gap in m23_obj3 §4; sub-clause D recommends "≥ 5 sessions per class" maturity rubric; M2.4 + M3.x missions contribute more data over time |
| 3 | ADR-016 amendment introduces backward-incompatible field name (e.g., renames `token_budget_estimated`) | D3 default: KEEP field name; add `token_budget_estimated_api_billing` as optional companion field. Preserves M2.2 + all future missions that already declared the original field |
| 4 | ADR-007 elevation premature (only 7 SQLite sessions captured vs ≥10 desired) | D2 default = B (defer) when SQLite < 10; document gap analysis; M2.4 elevates when threshold crossed |
| 5 | Per-mission-type calibration table over-fits the campaign-specific corpus (e.g., M1.3/M1.4/M2.1 all-Rosetta-vault) | Acceptable for v8 baseline; v8 P6 + future Lattice Network campaigns refresh with broader corpus. M2.3 calibration table marked "v8 baseline; refresh at network-scale corpus" |
| 6 | S2 governance scope creep — ADR amendment + ADR-007 + new Clause D + per-mission-type table all in one session pushes S2 budget past 150 kT | D4=B fallback (keep per-mission-type as appendix); D2=B fallback (defer ADR-007 to M2.4); ensure S2 budget within Standing Order #11 band; if exceeded, AAR flags drift > 2× retrospective per Clause A |

## Status

**S1 OPENED 2026-05-20T04:32:48Z** (`session_stanley_20260520T043248Z_v8_m23_s1`). Mission spec authoring in progress per plan `/Users/stanley/.claude/plans/please-read-the-claude-md-delegated-seahorse.md`.

Plan covers S1 only (non-destructive: mission spec + corpus extraction + initial findings). S2 + S3 operator-gated per Project Standing Order #1.

**S2 LANDED 2026-05-20T~06:25Z+** (`session_stanley_20260520T060143Z_v8_m23_s2`). Plan ratified at `/Users/stanley/.claude/plans/please-read-the-claude-md-majestic-pie.md`. All 5 D-decisions (D1-D5) ratified with Rosetta defaults: D1=A in-place ADR-016 Clause C amendment / D2=B ADR-007 deferral to M2.4 via memo / D3=A Project SO #11 single-sentence refinement / D4=B per-mission-type as ADR-016 Appendix A / D5=A Clause A threshold table API-billing companion columns. 6/7 cumulative deliverables landed; ADR-016 line count 146 → 200; Project Standing Order #11 refined at `aDNA.aDNA/CLAUDE.md` line 151; `m23_obj5_adr_007_deferral_memo.md` filed.

**S3 + MISSION CLOSED 2026-05-20T10:24:16Z** (`session_stanley_20260520T102416Z_v8_m23_s3`). Plan ratified at `/Users/stanley/.claude/plans/please-read-the-claude-md-fuzzy-newell.md`. 7/7 cumulative deliverables landed; canonical 3-session implementation-class shape **4th instance** after M1.3 + M1.4 + M2.1. Final deliverable 7 produced: (a) `missions/artifacts/aar_m23_convergence_validation.md` — implementation-class AAR with lightweight 5-line + 4-category extended findings + 15/15 acceptance scorecard PASS + 14-row Standing-Order discharge table + 3-session token-budget table (S1+S2+S3 all within band) + load-bearing-finding propagation map; load-bearing finding **"the calibration formula was ratified on the very session it was designed to predict"** (Standing Order #8 self-reference 3rd canonical instance after M2.2 + M1.5; M2.3 S2 own estimate-vs-actual data point fed Clause A threshold table). (b) `missions/artifacts/m23_obj7_validation_output.md` — 8-section post-ratification consolidation (verdict + pattern re-rank + ratified API-billing formula + per-mission-type calibration + threshold rule + ADR-007 deferral rationale + forward references + 15/15 acceptance scorecard final). (c) `node.aDNA/what/context/token_baselines.md` v0.1.1 → v0.1.2 — fold-in: §2.2 RATIFIED API-billing formula + §3 corpus-extended verdict with Clause A dual columns + §4 corpus-extended pattern ranking (β=14 candidate promotion) + §5 ratified Clause C constants + §7 NEW per-mission-type calibration table (5 mission classes). (d) Companion `node.aDNA/what/context/token_baselines.yaml` — content_entity.version + revision.current_version 0.1.1 → 0.1.2 + v0_1_2 revision row + provenance + dependencies + sources + tags extended. (e) `node.aDNA/what/inventory/inventory_vaults.yaml` token_baselines row — version 0.1.1 → 0.1.2 + v0_1_2_mission/session lineage fields + extended note. (f) Campaign master M2.3 row `in_progress → completed` + ADR-016 roadmap row final state + amendments-table 2026-05-20 entry appended. (g) STATE.md (router) Op-3 archive-on-close pattern **4th canonical instance** refresh — M2.3-CLOSED bullet replaces M1.5-CLOSED at top; M1.5 demoted to concise form; Next Steps surfaces M2.4 unblock at SQLite session ≥ 10 threshold (per `m23_obj5` §2 closing-the-gap forecast). (h) All 3 M2.3 session files (S1 + S2 + S3) moved `active/` → `history/2026-05/` per M2.3 mission convention. **Hard constraints honored end-to-end**: zero `.adna/` upstream touches (v7.0 frozen at `27e6395`); zero partner-vault contact (4 embargo memos preserved); zero `~/.claude/settings.json` modifications; zero `~/.adna/measurement/measurement.sqlite` mutations (read-only throughout); zero hook modifications; node.aDNA writes bounded to exactly 3 files (`token_baselines.md` + `.yaml` + `inventory_vaults.yaml` row); zero new ADR work at S3 (ADR-016 amendment landed at S2; ADR-007 stays deferred per `m23_obj5`; ADR-018 slot preserved for validation-as-dispatched-campaign). **M2.3 close UNBLOCKS** M2.4 AGENTS.md heat map (SQLite session count crosses 7 → 10 at this S3 close per `m23_obj5` §2; M2.4 entry adds 1 for one-session buffer); M2.1.5 retroactive Op 3 stays `planned-optional` (operator-discretionary parallel; D4=A default to M3.x); v8 P6 ecosystem propagation queue inherits ADR-016 amendment + Standing Order #11 refinement at v8.0 tag firing.

**Forward references**:
- **M2.4 AGENTS.md heat map** — consumes M2.3 §6 re-read rate analysis; gates on ≥ 10 live-hook sessions (M2.3 contributes 3 sessions: S1 + S2 + S3); pre-threshold post-M2.3 close (would need ~7 more sessions).
- **M3.x forge-ecosystem hardening missions** — inherit ratified API-billing companion budgets; estimate two-column form.
- **v8 P6 ecosystem propagation** — ADR-016 amendment (or ADR-018) lifts to `.adna/` upstream; backlog placeholder mechanism per ADR-005 rule 3.

## Cross-references

- [[mission_adna_str_p1_m13_token_audit.md|mission_adna_str_p1_m13_token_audit.md]] — predecessor (M1.3 §6 content-load formula + pattern ranking)
- [[mission_adna_str_p1_m14_latticescope_schema.md|mission_adna_str_p1_m14_latticescope_schema.md]] — predecessor (M1.4 §6 API-billing forecast + δ upgrade)
- [[mission_adna_str_p2_m21_context_audit_split.md|mission_adna_str_p2_m21_context_audit_split.md]] — predecessor (M2.1 §5 split delta + Op pattern)
- [[mission_adna_str_p2_m22_per_mission_budget.md|mission_adna_str_p2_m22_per_mission_budget.md]] — immediate predecessor (M2.2 ADR-016 ratification; defines forecast Clause C that M2.3 ratifies)
- [[artifacts/m13_obj7_calibration_output.md|m13_obj7_calibration_output.md]] §6 — Clause A source verbatim
- [[artifacts/m14_obj7_validation_output.md|m14_obj7_validation_output.md]] §6 — API-billing companion forecast source (M2.3 ratifies)
- [[artifacts/m21_obj7_validation_output.md|m21_obj7_validation_output.md]] §5 — heavy-file Read convention + STATE.md split delta
- [[artifacts/aar_m13_token_audit.md|aar_m13_token_audit.md]] — token-budget table format reference
- [[artifacts/aar_m14_latticescope_schema.md|aar_m14_latticescope_schema.md]] — 3-session implementation-class AAR shape reference
- [[artifacts/aar_m21_context_audit_split.md|aar_m21_context_audit_split.md]] — 3-session implementation-class AAR shape (most-recent precedent)
- [[artifacts/aar_m22_per_mission_budget.md|aar_m22_per_mission_budget.md]] — 1-session planning-class AAR (complement shape)
- [[../../../what/decisions/adr_016_per_mission_context_budget.md|adr_016_per_mission_context_budget.md]] — target ADR for D1=A amendment (Clause C "forecast" → "ratified")
- [[../campaign_adna_serious_tool_readiness.md|campaign_adna_serious_tool_readiness.md]] — campaign master §Phase 2 row M2.3 + ADR roadmap row(s)
- [[../CLAUDE.md|campaign CLAUDE.md]] — Campaign Standing Orders 11-19
- [[../../../CLAUDE.md|project CLAUDE.md]] — Project Standing Orders 1-11 (M2.3 honors all)
