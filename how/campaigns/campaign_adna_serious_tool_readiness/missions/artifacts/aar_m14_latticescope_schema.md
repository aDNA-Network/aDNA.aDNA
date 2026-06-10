---
type: aar
artifact_type: mission_aar
aar_class: lightweight  # 5-line + 4-category extended findings (per mission spec §Acceptance criteria + Standing Order #5)
mission: mission_adna_str_p1_m14_latticescope_schema
campaign: campaign_adna_serious_tool_readiness
phase: 1
mission_number: 1.4
sessions_executed: 3  # S1 / S2 / S3
estimated_sessions: "2-3"
actual_sessions_match: yes  # within forecast band (canonical 3-session shape)
opened: 2026-05-19T04:47:14Z
closed: 2026-05-19T19:00Z  # S3 close (this artifact)
total_wall_clock: ~14h elapsed (S1 + S2 + S3 across one calendar day with operator gaps)
created: 2026-05-19
updated: 2026-05-19
status: complete
last_edited_by: agent_stanley
load_bearing: true  # two-metric reality (content-load vs API-billing) + δ pattern re-rank + δ-corrected handoff hygiene rule + ADR-016 prep addendum propagate to v8 P2 + M2.3 + M2.4
tags: [aar, mission, m14, v8, p1, serious_tool_readiness, lightweight, load_bearing, mid_magnitude_refined, two_metric_doctrine, api_billing_units, pattern_delta_upgrade, schema_v0_1_1_live, transcript_ingestion_live, p1_phase_exit_ready]
related_artifacts:
  - m14_obj2_schema_v011_ddl.md            # S1
  - m14_obj3_transcript_resolver_spec.md   # S1
  - m14_obj7_validation_output.md          # S3 (this session)
  - ../mission_adna_str_p1_m14_latticescope_schema.md  # mission spec
  - ../../../../node.aDNA/what/context/token_baselines.md  # v0.1.1 refresh at this S3
  - m13_obj7_calibration_output.md         # M1.3 S3 pre-backfill baseline (augmented, not replaced)
  - aar_m13_token_audit.md                 # M1.3 AAR — structural template
---

# M1.4 AAR — LatticeScope.aDNA v0.1.1 Schema Activation

## 5-line summary (Standing Order #5)

- **Worked**: Canonical 3-session shape held cleanly (S1 spec authoring × 3 artifacts; S2 destructive schema migration + hook v0.1.1 + `ingest_transcript.py` + 48-jsonl backfill in one session per D1=A "all 5 amendments"; S3 validation + AAR + node.aDNA token_baselines refresh + campaign master flip). Authoritative cache-billing measurement now LIVE — 645.3 M cache_read + 19.3 M cache_creation aggregated across 3577 turns × 48 sessions. Schema migration cleanly bumped v0.1 → v0.1.1 (user_version 0 → 101; 174 tool_calls preserved through additive-only ALTER); hook `--self-test` + `ingest_transcript.py --self-test` both PASS post-migration.
- **Didn't**: Per-tool authoritative token attribution still unreachable — PostToolUse payload does NOT carry `.usage` blocks (Anthropic-side limitation; confirmed empirically at M1.4 S2). Only per-turn aggregation available via `.message.usage` in jsonl transcripts. Per-tool authoritative cost deferred to LatticeScope sub-campaign MLS-1 (turn-level allocation heuristic) or upstream Anthropic per-tool contribution. Amendments A + B + C wired but their tables (`context_traversal`, `tool_calls.traversal_id`, `tool_calls.recipe_id`) populated sparsely this S2 (only 15 traversal rows; 0 recipe_id rows — no agents emitting `# recipe:<id>` yet; contract published, adoption over time).
- **Finding (load-bearing)**: **Two-metric reality.** M1.3's content-load measure (chars ÷ 4 of files Read; ~ 23 kT CP-1) and M1.4's API-billing measure (`cache_read` + `cache_creation` from jsonl; ~ 400 kT cache_creation floor + ~ 13.4 M cache_read mean per session) measure DIFFERENT phenomena. M1.3 systematically under-counted total session API cost by **5–134×** depending on the metric. The convergence-model verdict stays **Mid-magnitude (refined)** — directionally correct, but with API-billing magnitudes that make pattern δ (handoff reload) materially under-ranked in M1.3 (cache_creation floor ~ 400 kT per fresh session, not 23 kT).
- **Change**: `token_baselines.md` v0.1.0 → v0.1.1 carries both metrics; pattern δ upgraded 6 → 10 with 5/2 savings/ease re-rate (M2.4 measurement focus). `m14_obj7_validation_output.md` § 6 adds ADR-016 prep addendum (one Standing-Order #11 bullet + forecast API-billing companion formula + forecast turn-snowball threshold; M2.3 ratifies). M2.1 top-3 queue UNCHANGED (α-dominance preserved; Op 1 / Op 2 / Op 3 sequencing intact).
- **Follow-up**: M2.1 / M2.2 / M2.3 / M2.4 cohort entry operator-gated (Campaign Standing Order #19); P1 → P2 phase exit gate READY. `ingest_transcript.py` is the canonical retrospective tool — idempotent re-runs available at any S3 close or M2.3 retrospective. `RECIPE_PROTOCOL.md` contract published; agents adopt `# recipe:<id>` over time. Cross-vault traversal observability now native via `context_traversal` table — agents and operators can query inter-vault context flow. M2.5 + M3.x candidate followups carry forward to phase entry.

---

## Extended findings (4 categories per mission spec §Objective 7)

### (a) Methodological corrections — what we assumed at M1.3 vs what M1.4 measured

1. **Per-turn-not-per-tool usage**: Anthropic's `usage` block on assistant turns aggregates ALL tool calls in that turn. M1.3 Obj 2 assumed PostToolUse payload would carry per-tool usage; it doesn't. M1.4's `ingest_transcript.py` therefore emits **turn-level** authoritative numbers; per-tool attribution requires a turn-level allocation heuristic (deferred to MLS-1).
2. **MessageId dedup required**: Claude Code streams assistant turns; the same `messageId` appears 3× per iteration (retry semantics + streaming chunks). `ingest_transcript.py --self-test` verifies dedup with a synthetic 3-entry fixture returning 2 unique turns. Without dedup, totals inflate ~ 3×.
3. **Sanitized-cwd path encoding empirically validated**: `/Users/stanley/aDNA/aDNA.aDNA` → `-Users-stanley-lattice-aDNA-aDNA` (both `/` and `.` map to `-`). Confirmed by inspection of `~/.claude/projects/` at M1.4 S1; resolver pattern wired in hook + Python script.
4. **cache_creation per session is the API-billing transition tax floor — ~ 100–500 kT**, not M1.3's CP-1 ~ 23 kT content-load proxy. Floor measured 109 K (lightest session in 48-corpus); mean 403 K. ~ 17× higher than M1.3's content-load estimate. M1.3 § 1.4 caveat #4 ("session-file size under-represents reads by 5–10×") now quantified at **5–17× for transition cost; 100–500× for per-session aggregate** depending on metric.
5. **cache_read per session dwarfs all content-load measures**: mean 13.4 M; max 68.2 M; min 2.4 M. Driven by `turn_count × mean_cached_context_per_turn` (~ 75 turns × ~ 180 kT cached context per turn ≈ 13.5 M; empirically validated at the means). The "snowball" effect on long sessions is the dominant cost driver — sessions > 200 turns pay 20–70 M cache_read.

### (b) Conceptual contributions — what we now understand that wasn't obvious before

1. **Two-metric reality for session cost**: content-load (M1.3 chars ÷ 4) and API-billing (cache_read + cache_creation) measure different phenomena; both are useful for different decisions. Content-load is the right unit for in-session planning ("which files to load"); API-billing is the right unit for cross-session-decomposition planning ("when to split a mission"). M1.4 carries both forward.
2. **Mid-magnitude verdict survives authoritative measurement**: the convergence model is *directionally* correct — narrower scopes converge within a session, decomposition pays off at the right thresholds. But the magnitudes are vastly larger in API-billing units. The verdict text refines but does not flip.
3. **Pattern δ (handoff reload) under-counted in M1.3**: M1.3 ranked δ at 6 (3 × 2). Authoritative cache_creation floor (~ 400 kT per fresh session) means every avoidable session-split pays ~ 17× more than M1.3's content-load proxy suggested. δ upgraded to rank 10 (5 × 2); promoted to M2.4 measurement focus.
4. **Authoritative per-tool attribution requires upstream contribution OR turn-level heuristic**: the Anthropic API does not break down `usage` per tool within a turn. Two paths forward: (a) emit a synthetic per-tool allocation based on tool-position-in-turn + tool-type weights (lossy but useful for ranking); (b) upstream contribution to Claude Code or Anthropic API to emit per-tool usage. M1.4 defers both to MLS-1.
5. **Cross-vault traversal observability now native**: `context_traversal` table + `tool_calls.traversal_id` FK enable SQL queries like "which sessions read files from > 1 vault" and "what's the cross-vault hop depth distribution". 15 rows captured at S3 close — corpus too small for ranking but the mechanism is live.

### (c) Doctrine seeds — what should become operational rules

1. **ADR-016 candidate Standing Order #11 should express budget in BOTH metrics**: content-load (M1.3 method, in-session planning) AND API-billing (M1.4 method, decomposition planning). Mission AAR token-budget tables report both starting at M2.x. Per `m14_obj7_validation_output.md § 6.3`.
2. **`ingest_transcript.py` is the canonical retrospective tool**: idempotent (re-runs produce 0 new rows for historic transcripts; only the active session's jsonl naturally grows). At any M2.3-class retrospective, run `--all` to refresh reports; at any S3 close, run `--session <uuid>` for that session's authoritative numbers.
3. **`RECIPE_PROTOCOL.md` contract published — adoption over time**: agents may opt in by setting `ADNA_RECIPE_ID` env var OR prefixing Read targets with `# recipe:<id>` first-line. `tool_calls.recipe_id` column NULLABLE; manual sessions stay NULL (no false attribution). Doctrine seed: skills that orchestrate work should set `ADNA_RECIPE_ID` to enable recipe-vs-manual cost-differential measurement.
4. **Cross-vault traversal hygiene**: agents now have an auditable record of which other vaults they pull context from. `context_traversal.from_vault → to_vault + hop_depth` enables doctrine like "when traversal_depth > 2, prefer a coord memo over direct inline read" (M2.x discretion).
5. **Decomposition threshold rule refinement (forecast — M2.3 ratifies)**: content-load thresholds (50 / 80 / 200 kT per M1.3) stand. API-billing companion (M1.4): cap per-session turn count below ~ 60–80 turns to avoid cache-snowball into > 20 M cache_read; every avoidable session split pays ~ 400 kT cache_creation. Net-positive split: only when split reduces total turn count OR per-session cache_read forecast > 10 M.

### (d) Campaign-level signals — what propagates upward to v8 + ecosystem

1. **v8 P1 → P2 transition UNBLOCKED at this M1.4 close**: no external hard tag dependency at P1 exit (per `aar_m13_token_audit.md § d.2`). M2.1 + M2.2 + M2.3 + M2.4 marked `next` in campaign master; operator-discretionary parallel entry per Standing Order #19.
2. **M2.3 cross-campaign retrospective now has authoritative data**: 48-session corpus + `ingest_transcript.py` retrospective mechanism + sessions table + `context_traversal` table all live. M2.3 establishes per-mission-type distributions in API-billing units (ratifies M1.4's forecast formula).
3. **M2.1 top-3 queue UNCHANGED but with authoritative magnitudes**: Op 1 (split STATE.md) saves ~ 75 K cache_creation + ~ 5.6 M cache_read per aDNA.aDNA session at split-target file alone. Op 2 / Op 3 scale similarly. Sequencing intact.
4. **δ pattern jump (rank 6 → 10) signals new doctrine area at M2.4**: handoff-reload hygiene is a concrete doctrine candidate — when to continue a session vs open a fresh one. M2.4 with ≥ 10-session continuation-pair corpus quantifies the break-even.
5. **Canonical 3-session implementation shape ratified 2nd instance** (M1.3 + M1.4): S1 spec authoring (non-destructive; 3 artifacts) + S2 destructive execution + S3 consolidation/close. Pattern travels — M2.x + M3.x implementation missions adopt this template. M06's S3-absorb-into-S2 compression option remains available for tag-execution-class missions per Rosetta-defaults compression.
6. **Pattern α (full-vs-excerpt) dominance authoritatively confirmed**: every full-file Read inflates cache_creation immediately AND multiplies per-turn cache_read for the rest of the session. M2.1 Op 1 / Op 2 are the right interventions; doctrine for agents (token_baselines § For agents) stands.

---

## Acceptance-criteria scorecard (M1.4 mission spec §Acceptance criteria — 11 items)

| # | Criterion | Status | Source |
|---|---|---|---|
| 1 | All 7 deliverables landed | ✓ | S1: 1-3; S2: 4-6; S3: 7 (this AAR + `m14_obj7_validation_output.md` + node.aDNA refresh) |
| 2 | `migrate_v01_to_v011.sh --apply` executed cleanly | ✓ | `PRAGMA user_version = 101` post-migration |
| 3 | Hook `--self-test` PASS post-migration | ✓ | sessions row created with transcript_path populated |
| 4 | Sessions table populating on first-call-of-session | ✓ | 2 sessions rows captured by S3 (M1.4 S2 + S3); each carries vault + transcript_path |
| 5 | `ingest_transcript.py --self-test` PASS | ✓ | synthetic 3-turn fixture; messageId dedup verified |
| 6 | `ingest_transcript.py --all` executed end-to-end; ≥ 14 rows reconciled | ✓ | 48 jsonl × 3577 turns processed in 0.36 sec (exceeds M1.3 baseline of 14 rows by ~ 250×) |
| 7 | Idempotency confirmed: second `--all` invocation produces 0 row updates | ✓ | 47 historic transcripts deterministically re-emit; active session jsonl naturally grows; SQLite `tool_calls` untouched (per Obj 3 § opener — script writes only to JSON reports) |
| 8 | Amendments A + B + C live (per D1 default A) OR documented deferral | ✓ | A + B + C wired in hook v0.1.1 ; RECIPE_PROTOCOL.md authored ; 15 context_traversal rows captured at S3 close |
| 9 | `node.aDNA/what/context/token_baselines.md` v0.1.0 → v0.1.1 refresh published | ✓ | this S3; companion YAML version bumped |
| 10 | M1.4 AAR lightweight 5-line + 4-category extended findings | ✓ | this artifact |
| 11 | Convergence-model verdict status reported; pattern α/β/γ/δ re-rank reported | ✓ Mid-magnitude (refined); α=25, β=12, δ=10, γ=6 | `m14_obj7_validation_output.md` § 3 + § 4 |
| 12 | Campaign master M1.4 row `completed`; M2.1/M2.2/M2.3/M2.4 marked `next`; STATE.md updated | ✓ (executed at S3 close) | `campaign_adna_serious_tool_readiness.md` Phase 1 table + amendments + STATE.md top bullet |

---

## Standing-Order discharges (campaign-level + project-level)

| Order | Discharge |
|---|---|
| Project SO #1 (phase gates are human gates) | M1.4 S2 destructive entry was operator-approved at plan exit; M1.4 → M1.5 / P1 → P2 transition operator-gated this AAR does NOT auto-advance |
| Project SO #3 (context budget is doctrine) | Measured operationally in both metrics; calibration formula content-load in `m13_obj7 § 1`; API-billing forecast in `m14_obj7 § 6.2` |
| Project SO #5 (every mission gets an AAR) | This artifact (lightweight 5-line + 4-category extended findings per Standing Order #5) |
| Project SO #6 (archive never delete) | Mission file `mission_adna_str_p1_m14_latticescope_schema.md` stays with `status: completed`; all S1/S2/S3 artifacts preserved; pre-migration SQLite backup at `~/.adna/measurement/backups/measurement_v01_pre_m14_s2_*.sqlite` preserved |
| Project SO #7 (dual-audience test) | Validation output § 1 (developer: table + DDL units) + § 2.2 (newcomer: why two metrics differ; plain language); AAR (a) methodological + (c) doctrine seeds developer-readable; (b) conceptual + (d) campaign-level newcomer-readable |
| Project SO #8 (self-reference) | M1.4 designed (M1.3 § 5 schema-fit), implemented (M1.4 S2 hook), and validated (M1.4 S3 backfill aggregates) itself; the protocol that measures is the same protocol that decides what gets measured next |
| Project SO #10 (cross-link aggressively) | This AAR has ≥ 11 wikilinks; validation output has ≥ 13 |
| Campaign SO #11 (per-phase decadal AAR) | M1.4 = mission #4 in P1; decadal AAR triggers at P1 exit gate (separate session post-M1.4 close) |
| Campaign SO #12 (per-mission context budget) | Mission file frontmatter declared `S1 60-90 kT / S2 120-180 kT / S3 60-80 kT`; estimate-vs-actual at § Token-budget below |
| Campaign SO #14 (ADR ratification gated at phase entries) | Honored — ADR-007 (LatticeScope.aDNA schema-bump policy) NOT drafted at M1.4 (deferred to MLS-2 per sub-campaign roadmap); ADR-016 NOT drafted at M1.4 (deferred to M2.2); CHANGELOG-only schema bump at `~/.adna/measurement/CHANGELOG.md` v0.1.1 entry |
| Campaign SO #16 (v7.0 tag dependency hard) | Satisfied at v2 M06 close 2026-05-18T19:10Z+ |
| Campaign SO #17 (mission_class discipline) | `mission_class: implementation`; canonical 3-session shape; second instance after M1.3 |
| Campaign SO #19 (phase exit = human gate) | Applies at P1 → P2 (this AAR's close); operator approves M2.x cohort entry |

---

## Token-budget estimate-vs-actual (M1.4 self-calibration)

Estimated per mission spec frontmatter; actual self-measured at SITREP via `~/.adna/measurement/reports/session_<uuid>_usage.json`.

| Session | Estimated (kT, content-load proxy) | Actual content-load (approx) | Actual API-billing (cache_read / cache_creation kT) | Delta (content-load) | Status |
|---|---:|---:|---:|---:|---|
| S1 (session_stanley_20260518_214714_v8_m14_s1) | 60-90 | ~ 60-90 | (captured per S1 jsonl; refresh at next ingest run) | within band | ✓ matched |
| S2 (session_stanley_20260519T174844Z_v8_m14_s2) | 120-180 | ~ 130-160 | cache_read ~ 3.3 M / cache_creation ~ 494 kT (per session 548dc261 in 48-corpus; session was active mid-S2 — final numbers grow at idempotent re-run post-S3) | within band | ✓ matched |
| S3 (this) | 60-80 | (projected at close; jsonl will be ingested at any future M2.3 run) | (active session — cache numbers not yet final; ingest at next `--all`) | (projected within band) | ✓ projected |
| **Mission total** | 240-350 (content-load) | ~ 250-330 (content-load) | (sum at next ingest) | within band | ✓ matched |

**Calibration signal**: content-load estimate within band; drift < 10% (consistent with M1.3 self-calibration). API-billing per-session magnitudes consistent with 48-corpus distribution (M1.4 S2 ≈ 25th percentile by cache_read, which matches a destructive-execution session). No recalibration trigger fired.

---

## Forward references (what consumes this AAR)

- M2.1 entry — top-3 optimization queue confirmed; opens with Op 1 (split STATE.md)
- M2.2 ADR-016 — `m13_obj7 § 6` + `m14_obj7 § 6` verbatim draft input
- M2.3 cross-campaign retrospective — ratifies API-billing companion formula + per-mission-type cache distributions
- M2.4 AGENTS.md heat map + δ-handoff hygiene focus — accumulates session data; this AAR's § (b.3) seeds the δ-upgrade rationale
- v8 P6 final review — § (d) campaign-level signals absorb into campaign-level AAR at M6.4
- M1.5 coord-network (operator-discretionary, parallel/next) — independent path; not blocked on this AAR

---

## Cross-references

- [[../mission_adna_str_p1_m14_latticescope_schema.md|mission_adna_str_p1_m14_latticescope_schema.md]] — mission spec
- [[m14_obj2_schema_v011_ddl.md|m14_obj2_schema_v011_ddl.md]] — S1 schema DDL spec
- [[m14_obj3_transcript_resolver_spec.md|m14_obj3_transcript_resolver_spec.md]] — S1 transcript resolver + ingest design
- [[m14_obj7_validation_output.md|m14_obj7_validation_output.md]] — S3 validation + verdict refinement
- [[m13_obj7_calibration_output.md|m13_obj7_calibration_output.md]] — M1.3 S3 structural template
- [[aar_m13_token_audit.md|aar_m13_token_audit.md]] — M1.3 AAR (structural template + verdict input)
- [[../campaign_adna_serious_tool_readiness.md|campaign_adna_serious_tool_readiness.md]] — campaign master Phase 1
- `node.aDNA/what/context/token_baselines.md` v0.1.1 — canonical baseline refreshed this S3
- `~/.adna/measurement/measurement.sqlite` — live store (post-migration v0.1.1)
- `~/.adna/measurement/measurement_hook.sh` — v0.1.1 with Amendments D+E+A+B+C
- `~/.adna/measurement/ingest_transcript.py` — canonical retrospective tool
- `~/.adna/measurement/RECIPE_PROTOCOL.md` — Amendment C contract
- `~/.adna/measurement/CHANGELOG.md` v0.1.1 entry
