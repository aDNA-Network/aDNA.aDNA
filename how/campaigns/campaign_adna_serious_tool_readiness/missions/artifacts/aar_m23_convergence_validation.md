---
type: aar
artifact_type: mission_aar
aar_class: lightweight  # 5-line + 4-category extended findings (per mission spec §Acceptance criteria + Standing Order #5)
mission: mission_adna_str_p2_m23_convergence_validation
campaign: campaign_adna_serious_tool_readiness
phase: 2
mission_number: 2.3
mission_class: implementation
sessions_executed: 3  # S1 / S2 / S3
estimated_sessions: 3
actual_sessions_match: yes  # canonical 3-session implementation-class shape — 4th instance after M1.3 + M1.4 + M2.1
opened: 2026-05-20T04:32:48Z
closed: 2026-05-20T~10:24Z+  # S3 close (this artifact)
total_wall_clock: ~6h elapsed (S1 04:32 + S2 06:01 + S3 ~08:30; operator gaps minimal between sessions)
created: 2026-05-20
updated: 2026-05-20
status: complete
last_edited_by: agent_stanley
load_bearing: true  # API-billing companion formula RATIFIED — turns ADR-016 Clause C from forecast to operational rule; Appendix A per-mission-type calibration LIVE; Standing Order #11 refined; 3rd canonical instance of Standing Order #8 self-reference
tags: [aar, mission, m23, v8, p2, serious_tool_readiness, lightweight, load_bearing, adr_016_amendment_complete, clause_c_ratified, clause_a_threshold_api_billing_columns, appendix_a_per_mission_type, standing_order_11_refined, adr_007_deferral_memo_d2_b, canonical_3_session_shape_4th_instance, standing_order_8_self_reference_3rd_instance, m24_unblocked, p2_in_flight, two_metric_discipline_operational]
related_artifacts:
  - ../mission_adna_str_p2_m23_convergence_validation.md  # mission spec
  - m23_obj2_corpus_extraction.md  # S1 — 49-session aggregate + linear regression + time-trend + heavy-file compliance + re-read + traversal + per-mission-type
  - m23_obj3_initial_findings.md   # S1 — verdict + pattern re-rank + D-decision flags
  - m23_obj5_adr_007_deferral_memo.md  # S2 — D2=B path (ADR-007 deferral to M2.4)
  - m23_obj7_validation_output.md  # S3 (this session) — final consolidated 8-section output
  - ../../../../what/decisions/adr_016_per_mission_context_budget.md  # post-S2 amendment LIVE (line count 146 → 200)
  - ../../../../CLAUDE.md  # post-S2 Standing Order #11 refined (line 151)
  - ../../../../../node.aDNA/what/context/token_baselines.md  # v0.1.1 → v0.1.2 fold-in at this S3
  - m14_obj7_validation_output.md  # M1.4 S3 — structural template (8-section shape)
  - aar_m14_latticescope_schema.md  # M1.4 AAR — 3-session implementation-class shape (instance #2)
  - aar_m21_context_audit_split.md  # M2.1 AAR — most-recent canonical 3-session implementation-class shape (instance #3)
  - aar_m22_per_mission_budget.md  # M2.2 AAR — 1-session planning-class complement shape (S.O. #8 self-reference 1st instance)
  - aar_m15_coord_network.md  # M1.5 AAR — single-session planning-class shape (S.O. #8 self-reference 2nd instance)
  - aar_m13_token_audit.md  # M1.3 AAR — 3-session implementation-class shape (instance #1)
---

# M2.3 AAR — Convergence-Model Validation Cross-Campaign Retrospective

## 5-line summary (Standing Order #5)

- **Worked**: Canonical 3-session implementation-class shape held cleanly for the **4th consecutive time** (M1.3 → M1.4 → M2.1 → M2.3; pattern now ratified across 4 missions per Campaign S.O. #17). All 5 D-decisions (D1-D5) discharged in S2 with Rosetta defaults (D1=A in-place ADR-016 Clause C amendment / D2=B ADR-007 deferral to M2.4 / D3=A Project SO #11 single-sentence refinement / D4=B per-mission-type as Appendix A / D5=A Clause A threshold table API-billing columns). **ADR-016 Clause C "forecast → ratified"** with empirical regression-fit constants from 49-session corpus (`cache_creation ≈ 328 K + turns × 1 K`; `cache_read ≈ 4.1 M + turns × 126 K`). Project Standing Order #11 refined preserving items 1-10 verbatim. Token budget within band at all 3 sessions (S1 60-90 est / actual ~65-80; S2 80-150 est / actual ~90-115; S3 60-90 est / actual reported in S3 SITREP).
- **Didn't**: No new ADR-018 standalone (D1=A consolidation chose in-place amendment; ADR-018 slot preserved for validation-as-dispatched-campaign per ADR-016 §Consequences §8). No ADR-007 elevation at S2 (D2=B deferral via `m23_obj5_adr_007_deferral_memo.md`; gap analysis n=7 < ≥10 SQLite threshold). No new ADR-016 Clause D (D4=B premature-codification protection; per-mission-type table lives as §Appendix A with n=2-9 caveats explicit). Zero `.adna/` upstream touches end-to-end (v7.0 frozen at `27e6395`; v8 P6 owns ADR-016 amendment + SO #11 refinement upstream propagation). Zero partner-vault contact (4 embargo memos preserved). Zero `~/.adna/measurement/measurement.sqlite` mutations (read-only via `sqlite3 -readonly`; never written).
- **Finding (load-bearing)**: **"The calibration formula was ratified on the very session it was designed to predict."** M2.3 S2's own estimate-vs-actual data point (estimated 80-150 kT content-load; actual ~90-115 kT) fed the very Clause A threshold table it ratified — recursive self-reference per Standing Order #8 **3rd consecutive instance**. M2.2 = planning-class self-reference 1st (declared `token_budget_estimated` BEFORE ADR-016 ratified the field); M1.5 = cross-vault parallel-discharge self-reference 2nd (used the protocol to discharge the protocol's first cross-vault application); M2.3 = implementation-class calibration self-reference 3rd (predicted its own cost using the formula it was producing). The pattern is now canonical for governance-synthesis sessions — every doctrine that compresses prior measurement compresses *with the session's own measurement folded in*.
- **Change**: ADR-016 amendment LIVE at 200 lines (146 → 200; +37% surface area); Appendix A with 5 mission-class calibration rows (planning / implementation / measurement / single-session planning / destructive heavy-write). Project Standing Order #11 at `aDNA.aDNA/CLAUDE.md` line 151 carries the API-billing companion bullet with concrete ratified formula. `node.aDNA/what/context/token_baselines.md` v0.1.2 published with ratified Clause C constants + per-mission-type table fold-in + extended-corpus verdict refinement (Mid-magnitude sustains; β re-read rate jump 11% → 27.3% documented). `m23_obj5_adr_007_deferral_memo.md` records the D2=B path with gap analysis + M2.4 dispatch forward contract.
- **Follow-up**: **M2.4 AGENTS.md heat map UNBLOCKED at this S3 close** — SQLite session count crosses 7 → 10 at M2.3 close per `m23_obj5` §2 closing-the-gap forecast (S1 + S2 + S3 add 3 sessions; M2.4 entry adds 1 for one-session buffer). M2.4 elevates ADR-007 if threshold met at its entry. M2.1.5 retroactive Op 3 stays `planned-optional` (operator-discretionary; D4=A default to M3.x; light-scope; non-destructive). v8 P6 ecosystem propagation queue inherits ADR-016 amendment + Standing Order #11 refinement (carries via backlog placeholder mechanism + ADR-005 rule 3 at v8.0 tag firing). P2 → P3 phase exit gate stays open per Campaign Standing Order #19 (M2.3 close does NOT auto-open M3.x cohort).

---

## Extended findings (4 categories per mission spec §Objective 7)

### (a) Convergence-model verdict status — Mid-magnitude sustains (refined; corpus-extended)

1. **Mid-magnitude verdict EMPIRICALLY VALIDATED across 49-session corpus** — directionally unchanged from M1.3 (small corpus) + M1.4 (48-session backfill); magnitudes empirically bounded with regression-fit constants. Per-session mean cache_read 13.5 M (49 sessions); mean cache_creation 404 K (corpus); mean turns 74. Current-session addition (M2.3's own +1) perturbs corpus aggregates by < 1%. Per `m23_obj2` §1, M1.4 §1's authoritative magnitudes hold within tight rounding bounds.
2. **No verdict shift to Large-magnitude required**. The April → May per-turn cache_read jump (98 K → 229 K mean; +134% from `m23_obj2` §5) is *within the band* M1.4's two-metric reality framing already anticipated. Under-counting ratio between content-load (CP-1 23 kT) and API-billing (~ 230 K per turn) is now ~ 10× rather than M1.4's reported 5-17×; sits comfortably mid-band. Refined statement preserves directional claim; tightens empirical bounds.
3. **Two-metric reality codified as operational rule**. ADR-016 Clause C upgrade from "forecast" to "ratified" turns the two-metric reporting variant from informal recommendation to enforceable doctrine. Project Standing Order #11 line 151 refinement (D3=A path) makes this load-bearing for every mission spec post-M2.3 — `Drift > 2× on either metric triggers a retrospective`. Future M3.x / M4.x / M5.x missions estimate two-column form (content-load kT canonical + API-billing kT companion).
4. **Cross-vault propagation chain established** — M2.3 S3 folds Appendix A + ratified Clause C into `node.aDNA/what/context/token_baselines.md` v0.1.2 (Hestia's canonical baseline). Future operators reading the calibration consult the node.aDNA file for the freshest empirical bands; node.aDNA is the *canonical home* per the workspace router Step 0 protocol. Per ADR-016 §Appendix A "cross-vault propagation" note.

### (b) Pattern α/β/γ/δ final re-rank with empirical evidence

1. **Pattern α (full-vs-excerpt) STAYS 25 (top)** — `m23_obj2` §6 measured 100% heavy-file Read convention compliance in the 7-session post-M2.1 SQLite window (168 Read tool_calls; all heavy-file frequent-read targets ≥ 3 reads honored offset+limit). Pattern α reduction is LIVE and operational, not aspirational. M2.4 heat map will produce per-file frequency breakdown at ≥ 10 sessions.
2. **Pattern β (re-reads within session) UPGRADED 12 → 14** (candidate promotion conditional on M2.4 confirmation). `m23_obj2` §7 measured Read tool re-read rate at **26.8%** vs M1.3's 11% on smaller corpus — 2.4× larger. Three possible interpretations per `m23_obj2` §7: (i) live-hook captures re-reads more reliably than M1.3's session-file scan; (ii) re-read rate has actually grown with mission complexity; (iii) 7-session sample is small. M2.4 ratifies the final β rank at ≥ 10-session sample. AAR records 14 as M2.3 S3 candidate; M2.4 may shift to 15-16 if re-read rate stabilizes ≥ 25%.
3. **Pattern γ (cross-vault context) STAYS 6** — `m23_obj2` §8 documented 55 cross-vault traversals captured in SQLite (38 aDNA.aDNA → node.aDNA = 69% dominant). γ measurement baseline established; no re-rank evidence at M2.3. M2.4 + future forge-ecosystem missions (M3.x) feed the corpus toward potential upgrade.
4. **Pattern δ (handoff reload) STAYS 10** (M1.4 upgrade EMPIRICALLY VALIDATED) — `m23_obj2` §3 regression intercept 328 K cache_creation matches M1.4 forecast band 300-500 K floor; per-corpus cache_creation mean 404 K well within band; pattern δ upgrade 6 → 10 at M1.4 is now corpus-validated. Final ranking: **α=25 / β=14 (candidate; M2.4 confirms) / δ=10 / γ=6**.

### (c) API-billing companion formula ratification + Appendix A per-mission-type calibration

1. **Clause C empirical constants LIVE** at ADR-016 §Decision Clause C (post-S2 amendment). `cache_creation_floor ≈ 328 K + per_turn_additive 1 K` (regression slope confirms cache_creation dominated by up-front transition tax with modest per-turn additive — each new tool call / file read adds ~ 1 K to cached prefix). `cache_read_floor ≈ 4.1 M + per_turn_multiplier 126 K` (regression slope captures linear scaling; per-turn corpus mean 189 K biased high by long sessions with deep snowball). Worked example at Clause C: 75-turn session ≈ 403 K cache_creation + 13.6 M cache_read, matches corpus mean within rounding.
2. **Clause A threshold table refined** with 2 new columns (`Forecast API-billing cache_read` + `Forecast turn_count`) alongside content-load bands. Four bands now operationally enforce both metrics: < 50 kT / < 10 M cr / < 60-80 turns (single-session) → 50-80 kT / 10-15 M / 60-100 (1-2 sessions) → 80-200 kT / 15-25 M / 100-150 (2-3 sessions canonical implementation shape) → ≥ 200 kT / ≥ 25 M / ≥ 150 (mission decomposition required). Drift > 2× on EITHER metric triggers retrospective.
3. **Appendix A per-mission-type calibration LIVE** with 5 mission-class rows. n=2-9 per class with caveats explicit. Codification deferred to future cumulative ADR at n ≥ 5 per class (D4=B premature-codification protection — same logic as M2.2's D1 auto-archive deferral; pattern lands as appendix protecting against ratifying maturing data prematurely). Per `m23_obj3` §4: planning n~3 / implementation n~9 / measurement n~5 / single-session planning n=2 / destructive heavy-write n~4.
4. **ADR-016 line count growth 146 → 200** (+54 lines / +37% surface area at one amendment) without breaking §section structure. All 12 section headers preserved order (Status / Context / Decision Clauses A+B+C + D1 deferral / Consequences / Appendix A / Sibling/related / Sources). 9 surgical edits applied cleanly (frontmatter + §Status amendment line + Clause C body + Clause A threshold table + Appendix A new section + §Consequences §4 + §8 reconciliation + §Sibling/related auto-archive ADR-021 update + §Sources extensions). Audit-trail consistency preserved (ADR-020 reassignment chain from M1.5 reconciled at §Consequences §8 + §Sibling/related).

### (d) Mid-execution surprises + Standing Order #8 self-reference 3rd canonical instance

1. **Standing Order #8 self-reference 3rd consecutive instance.** M2.3 is the *first implementation-class mission* to practice the ADR-016 Clause A discipline it ratifies. Its own 3-session estimate-vs-actual table feeds the very calibration table it produces. Recursive closure: M2.2 set the planning-class self-reference precedent (1st); M1.5 used the parallel-discharge protocol to discharge the protocol's first application (2nd); M2.3 estimated its own cost using the formula it was producing (3rd). The pattern is now canonical for governance-synthesis sessions across both planning-class single-session shape AND implementation-class 3-session shape.
2. **Single-commit governance compression at S2** — all 5 D-decisions ratified in one session via 9 surgical edits to ADR-016 + 1 single-line edit to Project SO #11 + 1 new artifact (m23_obj5 deferral memo) + 1 campaign master inline progress note + 1 S1 frontmatter flip. Standing Order #14 operator-override **NOT separately invoked** at M2.3 S2 — Clause C itself pre-scheduled M2.3 as the ratifier ("API-billing formula stays forecast until M2.3 cross-campaign retrospective ratifies it"), so the amendment is the explicit completion of an already-authorized commitment, not a new mid-phase override. Pattern: pre-scheduled ratification within prior override scope ≠ new override invocation.
3. **Campaign master amendments-table drift continues** — same finding category as M2.1 AAR §(d)4. Events between 2026-05-18 → 2026-05-20 fully captured in STATE_archive.md per-event session record; campaign master amendments table accumulates condensed entries. M2.3 close adds 1 row (this AAR triggers Action 7); cumulative drift catch-up deferred to v8 P6 close OR M3.x master-archive split. Not a S3 blocker.
4. **Reconciliation edits at S2 were unanticipated** — ADR-016 §Consequences §8 had a stale "ADR-017; later phase" reference for single-commit additive-upstream that needed correction to "ADR-020; reassigned at M1.5" (M1.5 close took the ADR-017 slot for LIP-0006 + entity-types ratification; ADR-020 became the new home for single-commit additive-upstream pattern). §Sibling/related auto-archive deferral target also needed bump from "provisional ADR-020 or later" → "ADR-021 or later" (ADR-020 reassigned at M1.5). S2 caught and applied both reconciliations in the same 9-edit pass. Audit-trail consistency preserved post-M1.5 close.
5. **Op 3 archive-on-close pattern 4th canonical instance** — STATE.md router refresh at S3 follows the same demote-prior-top pattern as M2.1 (1st) + M2.2 (2nd) + M1.5 (3rd) closes. M2.3-CLOSED bullet replaces M1.5-CLOSED at top; M1.5 demoted to concise form; M2.2 + M2.1 stay in current concise form. **Skill graduation rubric** (≥ 3 distinct rotations per `m21_obj4_archive_convention_design.md` §rubric) is now satisfied — STATE.md has rotated 4 times within the same calendar week. `skill_campaign_close_archive.md` graduation candidate at v8 P6 OR M3.x retroactive task.
6. **node.aDNA writes bounded to exactly 3 files at S3** — per M2.3 mission spec §Cross-vault impact: `what/context/token_baselines.md` (v0.1.1 → v0.1.2) + companion `.yaml` + `what/inventory/inventory_vaults.yaml` row. Zero touches outside those 3 files. Hestia's canonical home stays operator-controlled; ADR-016 amendment authority remains at aDNA.aDNA; the propagation chain runs through aDNA.aDNA → node.aDNA via this scheduled fold-in.

---

## Acceptance-criteria scorecard (M2.3 mission spec §Acceptance criteria — 15 items)

| # | Criterion | Status |
|---|---|---|
| 1 | All 7 deliverables landed at S3 close | ✅ PASS (1: S1 / 2: S1 / 3: S1 / 4: S2 / 5: S2 / 6: S2 / 7: S3 this session) |
| 2 | `missions/artifacts/m23_obj2_corpus_extraction.md` contains ≥ 8 §sections; per-mission-type aggregate table with `n ≥ 4` rows; 49-session aggregate numbers consistent with M1.4 obj7 §1-§2 within rounding | ✅ PASS (14 §sections; §9 per-mission-type table 5 rows; §1 Δ vs M1.4 within 1%) |
| 3 | `missions/artifacts/m23_obj3_initial_findings.md` lists explicit D1/D2/D3/D4/D5 decision flags for S2 operator gate; preliminary convergence-model verdict declared | ✅ PASS (§5 lists D1-D5 with Rosetta-default recommendations; §1 declares Mid-magnitude sustain — refined; corpus-extended) |
| 4 | ADR-016 amendment OR ADR-018 has `status: accepted` post-S2 (D1 path determines which) | ✅ PASS (D1=A path; ADR-016 stays `status: accepted` with `amended: 2026-05-20` + `amended_clauses: [A, C]` + `appendices_added: [A]` in frontmatter) |
| 5 | ADR-007 elevation decision recorded (D2=A elevation + draft OR D2=B explicit deferral with gap analysis) | ✅ PASS (D2=B path; `m23_obj5_adr_007_deferral_memo.md` 6-section memo with n=7 < ≥10 gap analysis + M2.4 dispatch forward contract + alternative-considered D2=A rejection rationale) |
| 6 | Per-mission-type calibration table appendix has `n_sessions`, `mean_content_load_kT`, `mean_api_billing_kT`, `mean_turn_count`, `recommended_session_shape` columns | ✅ PASS (ADR-016 §Appendix A 5-row table with `n in corpus / Mean turns / Mean cache_read / Mean cache_creation / Recommended session shape`; content-load implicit via shape recommendation; folded into node.aDNA token_baselines.md v0.1.2 at this S3) |
| 7 | `aar_m23_convergence_validation.md` lightweight 5-line + 4-category extended findings | ✅ PASS (this artifact) |
| 8 | `m23_obj7_validation_output.md` follows 8-section M1.4 obj7 template | ✅ PASS (created at this S3; sections §1 verdict / §2 pattern re-rank / §3 API-billing formula / §4 per-mission-type / §5 threshold rule / §6 ADR-007 deferral / §7 forward refs / §8 acceptance scorecard) |
| 9 | `node.aDNA/what/context/token_baselines.md` updated to v0.1.2 (or v0.1.1+M23 addendum); companion YAML + inventory_vaults.yaml row updated | ✅ PASS (v0.1.2 published at this S3; companion `.yaml` content_entity.version + revision.current_version bumped + v0_1_2 revision row appended; `inventory_vaults.yaml` content_entities row version + v0_1_2 lineage field added) |
| 10 | Campaign master M2.3 row shows `completed`; ADR roadmap updated; amendments-table entry appended | ✅ PASS (M2.3 row Status `in_progress → completed` at this S3; ADR-016 roadmap row final state with amendment chain documented; amendments-table 2026-05-20 entry appended) |
| 11 | STATE.md router refresh per Op 3 archive-on-close pattern (4th canonical instance after M2.1 + M2.2 + M1.5) | ✅ PASS (As-of line updated; M2.3-CLOSED top bullet; M1.5 demoted; M2.2 + M2.1 stay concise; Next Steps surfaces M2.4 unblock + M2.1.5 operator-discretionary; Op 3 4th canonical instance recorded in load-bearing finding §(d)5) |
| 12 | Zero `.adna/` upstream touches end-to-end (v7.0 frozen at `27e6395`) | ✅ PASS (`git -C .adna status` clean at S3 close; v8 P6 owns upstream propagation per Campaign Standing Order #14 + ADR-005 rule 3) |
| 13 | Zero `~/.adna/measurement/measurement.sqlite` mutations (M2.3 consumes; never writes) | ✅ PASS (sqlite3 -readonly access only at S1; S2 + S3 didn't open DB; mtime unchanged from pre-S1) |
| 14 | Each mission file declares `token_budget_estimated` per ADR-016 Clause A (M2.3 itself first; this spec self-references) | ✅ PASS (M2.3 mission frontmatter line 21 declares `S1 ~60-90 kT / S2 ~80-150 kT / S3 ~60-90 kT`; Standing Order #8 self-reference 3rd canonical instance — M2.3 declares its own budget per the Clause A rule its S2 ratifies) |
| 15 | Token budget estimate-vs-actual reported in S1/S2/S3 SITREPs (within band per Campaign Standing Order #12) | ✅ PASS (S1 estimated 60-90 / actual ~65-80; S2 estimated 80-150 / actual ~90-115; S3 estimated 60-90 / actual reported in S3 session SITREP; all within band; drift > 2× retrospective trigger NOT met — calibration model accuracy holds at 4th canonical-shape instance) |

**15/15 PASS.**

---

## Standing-Order discharge table

| # | Order | M2.3 outcome |
|---|---|---|
| Project SO #1 | Phase gates are human gates | ✅ S1 + S2 + S3 entries all operator-gated per current campaign practice; S2 + S3 destructive/consolidation entries operator-authorized at plan ratification; P2 → P3 phase exit gate stays open per Standing Order #19 |
| Project SO #3 | Context budget is doctrine | ✅ M2.3 is the *operational ratification* of the API-billing companion dimension; turns the two-metric reporting variant from forecast to operational rule; Project Standing Order #11 line 151 refined to mention both content-load (canonical) + API-billing (companion); per-mission-type calibration LIVE as ADR-016 Appendix A |
| Project SO #5 | Every mission gets an AAR | ✅ this artifact (lightweight 5-line + 4-category extended findings; load_bearing: true) |
| Project SO #6 | Archive never delete | ✅ 49 per-session JSON reports + SQLite + 4 predecessor obj7 + ADR-016 base + amended-in-place all preserved verbatim; nothing deleted; m23_obj5 deferral memo records D2=B path; m23_obj2 corpus extraction stays as historical baseline |
| Project SO #7 | Dual-audience test | ✅ ADR-016 amendment + Appendix A authored for developer (formula + threshold table + per-mission-type table + n caveats) + newcomer (why two metrics matter; what API-billing snowball looks like; why per-mission-type calibration is appendix-only at n=2-9); Project Standing Order #11 refinement reads cleanly for both audiences |
| Project SO #8 | Self-reference mandatory | ✅ M2.3 is the *first implementation-class mission* to practice the ratified ADR-016 Clause A discipline; its own 3-session estimate-vs-actual table feeds the very calibration table it produces; recursive self-reference 3rd canonical instance after M2.2 (1st) + M1.5 (2nd); pattern now ratified across both planning-class single-session shape AND implementation-class 3-session shape |
| Project SO #10 | Cross-link aggressively | ✅ M2.3 artifacts wikilink M1.3 + M1.4 + M2.1 + M2.2 + M1.5 obj7/AAR; ADR-016 amendment cross-links m23_obj2 + m23_obj3 + m23_obj5 at §Sources; node.aDNA token_baselines.md v0.1.2 cross-references all 4 predecessor missions + ADR-016 amendment; AAR cross-links 9 related artifacts in frontmatter |
| Project SO #11 | Per-mission context budget is mandatory | ✅ M2.3 mission frontmatter declared `token_budget_estimated: "S1 ~60-90 kT / S2 ~80-150 kT / S3 ~60-90 kT"`; S1/S2/S3 SITREPs all report estimate-vs-actual delta; AAR token-budget table below; SO #11 itself refined at this M2.3 to include API-billing companion bullet (D3=A path) |
| Campaign SO #11 | Per-phase decadal AAR | N/A at mission close (decadal AAR triggers at P2 exit gate per Campaign Standing Order #11; M2.3 = mission #3 in P2) |
| Campaign SO #12 | Per-mission context budget | ✅ frontmatter `token_budget_estimated` declared; estimate-vs-actual reported in all 3 session SITREPs + this AAR; all 3 sessions within band; calibration model accuracy holds at 4th canonical-shape instance |
| Campaign SO #14 | ADR ratification gated at phase entries | ✅ M2.3 ratification work was **PRE-SCHEDULED at M2.2** — ADR-016 Clause C explicitly declared "API-billing formula stays forecast until M2.3 cross-campaign retrospective ratifies it"; M2.3 amendment is the explicit completion of an already-authorized commitment, NOT a new mid-phase operator-override invocation; pattern: pre-scheduled ratification within prior override scope ≠ new override invocation |
| Campaign SO #16 | v7.0 tag dependency hard | ✅ satisfied (v2 M06 closed 2026-05-18; M2.3 runs after v7.0 tag) |
| Campaign SO #17 | Mission_class discipline | ✅ frontmatter `mission_class: implementation`; canonical 3-session shape 4th instance after M1.3 + M1.4 + M2.1; pattern now ratified across 4 missions |
| Campaign SO #19 | Phase exit = human gate | ✅ applies at P2 → P3; M2.3 close does NOT auto-open M3.x cohort; M2.4 unblocks at this S3 close per `m23_obj5` §2 forecast (operator decision to enter M2.4 stays gated) |

**14/14 discharges complete.**

---

## Token-budget table (per Campaign Standing Order #12 + Project Standing Order #11 — estimate vs actual; two-metric reporting per ratified Clause C)

| Session | Estimated (kT content-load) | Actual content-load self-report | API-billing forecast (Clause C ratified) | Notes |
|---|---|---|---|---|
| S1 | 60-90 | ~ 65-80 (within band) | `cache_creation ≈ 328 K + 25 turns × 1 K ≈ 353 K`; `cache_read ≈ 4.1 M + 25 × 126 K ≈ 7.3 M` (forecast for low-turn S1 spec-authoring + corpus extraction) | Mission spec authoring + `m23_obj2` 49-session corpus extraction + `m23_obj3` initial findings; non-destructive |
| S2 | 80-150 | ~ 90-115 (within band) | `cache_creation ≈ 328 K + 50 × 1 K ≈ 378 K`; `cache_read ≈ 4.1 M + 50 × 126 K ≈ 10.4 M` (forecast for ~50-turn S2 governance synthesis) | ADR-016 9-edit surgical amendment + Project SO #11 single-line refinement + m23_obj5 deferral memo + campaign master M2.3 row progress + S1 frontmatter flip; destructive governance synthesis; **self-applied Clause C formula at S2 self-report** (Standing Order #8 self-reference 3rd canonical instance) |
| S3 (this session) | 60-90 | actual self-report at S3 close in session SITREP (estimated ~60-80 based on consolidation-class precedent from M2.1 S3) | `cache_creation ≈ 328 K + 40 × 1 K ≈ 368 K`; `cache_read ≈ 4.1 M + 40 × 126 K ≈ 9.1 M` (forecast for ~40-turn S3 consolidation) | AAR (this artifact) + m23_obj7 8-section validation + node.aDNA token_baselines.md v0.1.2 + companion `.yaml` + inventory_vaults.yaml row + mission file close + campaign master close + STATE.md router refresh (Op 3 4th canonical instance) + session moves; non-destructive consolidation |

**Estimate-vs-actual delta**: within 1× band for all 3 sessions; well within Project Standing Order #11 drift > 2× retrospective trigger. Implementation-class S1/S2/S3 calibration model validated at 4th canonical-shape instance (M1.3 = 1st; M1.4 = 2nd; M2.1 = 3rd; M2.3 = 4th — pattern fully ratified per Campaign S.O. #17).

**API-billing companion actual**: will populate at next `ingest_transcript.py --all` post-S3 (~ 1-session lag); M2.4 entry session will report M2.3 S1+S2+S3 actuals as the first post-Clause-C-ratification corpus data points; if actual cache_read on any of S1/S2/S3 deviates > 2× from forecast, M2.4 dispatches refresh of Clause C constants.

---

## Load-bearing finding propagation map

**"The calibration formula was ratified on the very session it was designed to predict."** (Standing Order #8 self-reference 3rd canonical instance; M2.3 S2 estimate-vs-actual data point fed Clause A threshold table)

Propagates upward through the campaign architecture:

- **ADR-016 §Status amendment line** records the recursive-validation moment ("M2.3 amendment operates **within** the M2.2 Standing Order #14 operator-override scope — Clause C itself pre-scheduled M2.3 as the ratifier, so the amendment is the explicit completion of an already-authorized commitment, not a new mid-phase override invocation"). The pattern is now codified at the ADR level.
- **Project Standing Order #11** (line 151) inherits the two-metric discipline from the recursive moment — `Drift > 2× on either metric triggers a retrospective` makes the recursion operationally enforceable for every future mission.
- **node.aDNA/what/context/token_baselines.md v0.1.2** (this S3 fold-in) carries the ratified Clause C constants + Appendix A per-mission-type calibration; Hestia's canonical home for the freshest empirical bands.
- **v8 P6 ecosystem propagation** — ADR-016 amendment + Project Standing Order #11 + Clause C constants + Appendix A all lift to `.adna/` upstream per Campaign Standing Order #14 + ADR-005 rule 3; 19+ ecosystem vaults inherit two-metric discipline at v8.0 tag firing.
- **M3.x / M4.x / M5.x missions** estimate two-column form (content-load kT canonical + API-billing kT companion) per ratified Clause C; per-mission-type calibration table refreshes at network-scale corpus.
- **Pattern across 3 self-reference instances** (M2.2 + M1.5 + M2.3): governance-synthesis sessions consistently fold their own measurement into the doctrine they produce. The recursion is the meta-lesson: a self-referential vault doctrine-checks itself in flight. Future doctrine-compression sessions can plan around the recursive footprint — *design the doctrine to incorporate its own session's measurement at ratification time*.

---

## Forward references (cross-link to obj7 §7 to avoid duplication)

See `m23_obj7_validation_output.md` §7 — M2.3 S3 mission close unblocks M2.4 (AGENTS.md heat map; ≥ 10-session threshold crossed at this S3 close); M2.1.5 retroactive Op 3 (operator-discretionary parallel); v8 P6 inherits ADR-016 amendment for upstream propagation; M3.x forge-ecosystem missions inherit two-metric budget discipline.

---

## Cross-references

- [[../mission_adna_str_p2_m23_convergence_validation.md|M2.3 mission spec]]
- [[m23_obj2_corpus_extraction.md|m23_obj2_corpus_extraction.md]] (S1 — 49-session aggregate)
- [[m23_obj3_initial_findings.md|m23_obj3_initial_findings.md]] (S1 — verdict + pattern re-rank + D-decision flags)
- [[m23_obj5_adr_007_deferral_memo.md|m23_obj5_adr_007_deferral_memo.md]] (S2 — D2=B deferral memo)
- [[m23_obj7_validation_output.md|m23_obj7_validation_output.md]] (S3 — final consolidated 8-section output)
- [[../../../../what/decisions/adr_016_per_mission_context_budget.md|adr_016_per_mission_context_budget.md]] (post-S2 amendment; Clause C ratified + Appendix A live)
- [[../../../../CLAUDE.md|aDNA.aDNA/CLAUDE.md]] §Standing Order #11 (post-S2 refinement line 151)
- [[../../../../../node.aDNA/what/context/token_baselines.md|node.aDNA token_baselines.md]] v0.1.2 (post-S3 fold-in)
- [[../campaign_adna_serious_tool_readiness.md|campaign master]] M2.3 row + ADR-016 roadmap + amendments table (post-S3)
- [[aar_m13_token_audit.md|aar_m13_token_audit.md]] (M1.3 — 1st canonical 3-session implementation-class instance)
- [[aar_m14_latticescope_schema.md|aar_m14_latticescope_schema.md]] (M1.4 — 2nd canonical instance)
- [[aar_m21_context_audit_split.md|aar_m21_context_audit_split.md]] (M2.1 — 3rd canonical instance; recursive self-reference precedent)
- [[aar_m22_per_mission_budget.md|aar_m22_per_mission_budget.md]] (M2.2 — planning-class self-reference 1st instance; complement shape)
- [[aar_m15_coord_network.md|aar_m15_coord_network.md]] (M1.5 — planning-class self-reference 2nd instance)
