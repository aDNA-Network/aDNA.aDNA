---
type: mission
mission_id: mission_adna_str_p1_m14_latticescope_schema
campaign: campaign_adna_serious_tool_readiness
phase: 1
mission_number: 1.4
slug: latticescope_schema
created: 2026-05-18
updated: 2026-05-18
status: in_progress
opens_at: 2026-05-19T04:47:14Z
opened_session: session_stanley_20260518_214714_v8_m14_s1
closed_at:
closed_session:
estimated_sessions: 2-3
actual_sessions:
persona: rosetta
last_edited_by: agent_stanley
spec_completeness: complete  # S1 authoring complete; S2 + S3 execution pending
mission_class: implementation  # canonical 3-session shape per Campaign S.O. #17
token_budget_estimated: "S1 ~60-90 kT (Type C planning; amendments pre-specified by M1.3 Obj 7); S2 ~120-180 kT (destructive: ALTER TABLE + hook edits + ingest_transcript.py impl + backfill + live test); S3 ~60-80 kT (validation + AAR + token_baselines refresh)"  # per Campaign S.O. #12; self-measured at session close for calibration
tags: [mission, m1_4, v8, p1, latticescope_schema, schema_bump, transcript_ingestion, amendment_d_load_bearing, post_tool_use_hook, sqlite_v0_1_1, ingest_transcript_py, type_c_self_referential]
prerequisite_missions:
  - mission_adna_str_p0_planning                     # P0 — campaign open 2026-05-17
  - mission_adna_infra_p1_05_publish_skill_rewrite   # v2 M05 (closed 2026-05-18T15:19Z+)
  - mission_adna_infra_p1_06_v7_governance_tag       # v2 M06 v7.0 tag (closed 2026-05-18T19:10Z+)
  - mission_adna_str_p1_m13_token_audit              # M1.3 (closed 2026-05-18T21:00Z+)
prerequisite_artifacts:
  - how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m13_obj7_calibration_output.md  # §5.2 Amendments A-E verbatim; §6 ADR-016 prep notes
  - how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_m13_token_audit.md          # load-bearing findings (M1.4 Amendment D = LOAD-BEARING)
  - how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj10_latticescope_vault_design.md  # §6 v0.1 schema DDL (gate-resolved 2026-05-08)
  - how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj10_latticescope_sub_campaign.md   # §3 MLS-0..MLS-9 tree + §4 ADR roadmap (ADR-007 schema-bump at MLS-2)
  - how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj9_token_measurement_protocol.md   # §6 schema-fit gate (source of the 8+2-row matrix at M1.3 §5.1)
target_adr: none (ADR-007 schema-bump policy deferred to LatticeScope sub-campaign MLS-2 per Campaign Standing Order #14)
fires_v8_checkpoint: P1 → P2 unblock at M1.4 close  # last P1 mission; no v7.0-style hard external precondition for P1 exit (per M1.3 AAR Campaign-level signal #2)
unblocks_missions:
  - mission_adna_str_p2_m21_context_audit            # M2.1 top-3 optimization queue execution
  - mission_adna_str_p2_m22_per_mission_budget       # M2.2 ADR-016 ratification (consumes M1.3 §6 prep notes)
  - mission_adna_str_p2_m23_convergence_validation   # M2.3 cross-campaign retrospective with CP-2..CP-4 measurement (requires Amendment D)
  - mission_adna_str_p2_m24_agents_md_heatmap        # M2.4 AGENTS.md heat map (≥10 distinct sessions; can run parallel to M2.1/M2.2/M2.3)
deliverables_count: 7
hard_dependency_satisfied: "v7.0 tag exists at LatticeProtocol/aDNA commit 27e6395 (tag SHA 3681f76) — per Campaign Standing Order #16; M1.3 closed 2026-05-18T21:00Z+"
---

# M1.4 — LatticeScope.aDNA v0.1.1 Schema Activation

> **Mission executes** the **5 schema amendments queued by [[../missions/artifacts/m13_obj7_calibration_output.md|M1.3 Obj 7]] §5.2** against the v0.1 schema spec'd in [[../../campaign_adna_v2_infrastructure/missions/artifacts/m01_obj10_latticescope_vault_design.md|m01_obj10_latticescope_vault_design.md §6]]. Amendment D (`transcript_path` on `sessions` table) is **LOAD-BEARING** — without it the convergence-model verdict stays [[../missions/artifacts/aar_m13_token_audit.md|Mid-magnitude]] and CP-2..CP-4 measurement remains unreachable. This mission is the unlock for v8 P2 measurement work (M2.1/M2.2/M2.3/M2.4).
>
> **Self-reference (Standing Order #8)**: M1.4 is itself a Type C planning + implementation series. Its S2 backfill ingests this S1's own transcript and writes the authoritative per-turn cost back to SQLite — *the mission measures itself measuring its own measurement infrastructure*. M1.3 approximated; M1.4 corrects.
>
> **North-star alignment**: Authoritative per-turn data turns the convergence model from folklore-validated-by-approximation into folklore-validated-by-fact. The operator-stated UX goal *"easy and fluid way to build/operate/utilize context graphs"* requires honest cost data; M1.4 ships it.

## Mission scope

Implement [[../missions/artifacts/m13_obj7_calibration_output.md|M1.3 Obj 7 §5.2]] Amendments A–E against the v0.1 schema. **Primary**: Amendment D (transcript_path ingestion, LOAD-BEARING for CP-2..CP-4 measurement) + Amendment E (sessions-table population, load-bearing for per-session-type aggregations). **Secondary**: Amendments A (payload-usage detection), B (cross-vault traversal detection + `context_traversal` INSERTs), C (recipe_id propagation contract). **New deliverable**: `ingest_transcript.py` — post-hoc script that reads Claude Code `.jsonl` transcripts and back-fills authoritative per-turn token costs into `tool_calls`.

Implementation-class; canonical 3-session shape (S1 non-destructive spec authoring / S2 destructive schema migration + hook edits + Python implementation + backfill / S3 validation + AAR + node.aDNA refresh + mission close).

**5 canonical outputs** (mapped from M1.3 Obj 7 §5.2 + the M1.3 AAR load-bearing finding #1):

1. **Amendment D live** — `transcript_path TEXT` on `sessions`; hook resolves `~/.claude/projects/<sanitized-cwd>/<session_id>.jsonl` at session-init.
2. **Amendment E live** — Hook detects first-call-of-session and `INSERT OR IGNORE`s into `sessions` (no longer empty).
3. **Amendments A + B + C live** (or explicitly deferred per D1) — payload-usage detection · cross-vault traversal INSERTs · recipe_id propagation contract.
4. **`ingest_transcript.py` operational** — parses jsonl turn-by-turn; emits authoritative `input_tokens` / `cache_*_tokens`; upserts into `tool_calls` (idempotent).
5. **Validation report** — pre/post backfill calibration delta; convergence-model verdict status (Mid-magnitude → Validated / refined Mid-magnitude); top-3 M2.1 queue sequencing confirmation.

## Objectives

### 1. Author this mission spec (S1)

- **Status**: in_progress (S1; this file)
- **Session**: S1
- **Read**: [[../missions/artifacts/m13_obj7_calibration_output.md|M1.3 Obj 7]] §5.2 (amendments verbatim); [[../missions/artifacts/aar_m13_token_audit.md|M1.3 AAR]] §(d) campaign-level signals; [[../missions/mission_adna_str_p1_m13_token_audit.md|M1.3 mission spec]] (structural template); [[../../campaign_adna_v2_infrastructure/missions/artifacts/m01_obj10_latticescope_vault_design.md|m01_obj10 vault design]] §6 (v0.1 schema); [[../../campaign_adna_v2_infrastructure/missions/artifacts/m01_obj10_latticescope_sub_campaign.md|m01_obj10 sub-campaign]] §3-4 (MLS tree + ADR roadmap)
- **Produce**: this file (`mission_adna_str_p1_m14_latticescope_schema.md`)
- **Depends on**: M1.3 close (done); v7.0 tag (live)

### 2. v0.1.1 schema bump DDL spec (S1)

- **Status**: pending S1
- **Session**: S1
- **Read**: [[../../campaign_adna_v2_infrastructure/missions/artifacts/m01_obj10_latticescope_vault_design.md|m01_obj10 vault design]] §6 (v0.1 schema verbatim — sessions / tool_calls / context_traversal); current hook source at `~/.adna/measurement/measurement_hook.sh` (CREATE TABLE statements; idempotent init pattern)
- **Produce**: `missions/artifacts/m14_obj2_schema_v011_ddl.md` — full v0.1.1 DDL (ALTER TABLE statements + new indexes + `PRAGMA user_version = 101` advance — semver-encoded) + `migrate_v01_to_v011.sh` shell-script outline (idempotent; safe-to-rerun; preserves existing tool_calls data) + rollback plan (drop columns + restore user_version) + CHANGELOG v0.1.0 → v0.1.1 entry (per D4 default B — CHANGELOG-only; ADR-007 schema-bump policy deferred to MLS-2 per Campaign S.O. #14) + acceptance test (run migration on a copy of `~/.adna/measurement/measurement.sqlite` at `/tmp/measurement_v01.sqlite`; verify schema diff + zero data loss)
- **Depends on**: 1
- **Migration-safety gate**: Spec must include `migrate_v01_to_v011.sh --dry-run` mode that produces SQL diff without executing; S2 runs `--dry-run` first, operator inspects, only then `--apply`.

### 3. Transcript resolver + `ingest_transcript.py` design spec (S1)

- **Status**: pending S1
- **Session**: S1
- **Read**: Anthropic Claude Code transcript-location convention (`~/.claude/projects/<sanitized-cwd>/<session_id>.jsonl`); current hook source at `~/.adna/measurement/measurement_hook.sh` lines 134 (CLAUDE_SESSION_ID extraction); [[../missions/artifacts/m13_obj6_pattern_ranking.md|M1.3 Obj 6 pattern ranking]] (β re-read pattern; cache-token attribution)
- **Produce**: `missions/artifacts/m14_obj3_transcript_resolver_spec.md` — (a) sanitized-cwd resolver: `~/lattice/aDNA.aDNA` → `-Users-stanley-lattice-aDNA-aDNA` rule + fallback patterns + edge cases (symlinks, capitalized paths); (b) `transcript_path` resolution algorithm at session-init (hook-side bash; resolves and INSERTs into `sessions.transcript_path` at first-call-of-session); (c) `ingest_transcript.py` Python design — CLI invocation (`./ingest_transcript.py [--session SESSION_ID | --all | --since YYYY-MM-DD]`); parses jsonl turn-by-turn; extracts `usage` blocks from assistant turns; emits per-tool-call `input_tokens` / `output_tokens` / `cache_creation_tokens` / `cache_read_tokens`; upsert key = `(claude_session_id, ts, tool, file_path)` (preserves M1.3 approximation rows; overwrites tokens only when authoritative value > 0); idempotent re-runs; (d) Turn-vs-tool-call alignment — Claude Code transcripts emit `assistant` turns containing tool calls + `tool_result` turns containing usage from the *previous* assistant turn; resolver maps usage to the assistant turn's tool calls; (e) Privacy notes — script reads jsonl but writes ONLY token metadata to SQLite; no content captured (Standing Order #2 — data integrity invariant from M1.3 hard constraints); (f) Backfill scope per D3 default A — process all `~/.claude/projects/-Users-stanley-lattice-aDNA-aDNA/*.jsonl` files; (g) Output sanity — emit summary table at end (rows updated / rows skipped / new authoritative kT total / diff vs approximation).
- **Depends on**: 1, 2 (schema spec needed to know which columns to upsert)
- **Self-test gate**: Spec includes `--self-test` mode that synthesizes a 3-turn jsonl fixture + runs ingestion + verifies SQLite delta (no live transcripts touched in self-test).

### 4. Schema migration + hook edits live; `--self-test` PASS post-migration (S2)

- **Status**: pending S2
- **Session**: S2
- **Requires**: explicit operator approval per Standing Order #1 (destructive: SQLite schema bump + hook source edit)
- **Read**: Obj 2 + Obj 3 design specs; current hook + SQLite state
- **Produce**: (a) `migrate_v01_to_v011.sh --apply` executed against `~/.adna/measurement/measurement.sqlite`; `PRAGMA user_version` advances 0 → 101 (semver-encoded `MAJOR*10000 + MINOR*100 + PATCH`); (b) hook source updated with Amendment D (sanitized-cwd + transcript_path resolver) + Amendment E (sessions-table `INSERT OR IGNORE` on first-call-of-session); existing `--self-test` PASSes against updated schema (sessions row created; transcript_path populated); (c) one live session captured post-edit with sessions row + transcript_path + tool_calls all populated
- **Depends on**: 2 + 3 (S1 closure); operator approval
- **Rollback path**: `migrate_v01_to_v011.sh --rollback` (drops new columns; restores user_version 100); revert hook to S2-pre-edit version (git history preserved). Single-file delete + single-script invocation; <1 min.

### 5. `ingest_transcript.py` implementation + backfill execution (S2)

- **Status**: pending S2
- **Session**: S2
- **Read**: Obj 3 design spec; existing 54+ tool_calls in SQLite from M1.3 S2/S3 (`SELECT COUNT(*), MIN(ts), MAX(ts) FROM tool_calls;`)
- **Produce**: `~/.adna/measurement/ingest_transcript.py` (Python 3.11+; stdlib only — no `pip install` dependencies) + execution log showing (i) M1.3 S2's 14 calls reconciled to authoritative input_tokens from `.jsonl` transcripts, (ii) M1.3 S3's ~40 calls reconciled, (iii) any post-M1.3 sessions captured by hook between M1.3 close + M1.4 S2 also reconciled (per D3 default A — all existing); summary table at completion (`Updated N rows; Approximation→Authoritative delta = +X.X kT; Mean cache_read uplift = +Y.Y kT/call`).
- **Depends on**: 4 (Amendment D live so transcript_path column exists)
- **Idempotency gate**: Script must be safe to re-run; second invocation produces 0 row updates + summary table identical to first.

### 6. Amendments A + B + C live (or documented deferral to M1.5 per D1) (S2)

- **Status**: pending S2
- **Session**: S2
- **Read**: M1.3 Obj 7 §5.2 Amendment A/B/C definitions; current hook source
- **Produce** (if D1 = default A "All 5"): (a) Amendment A — hook reads `.tool_input.usage.cache_*` (if PostToolUse payload carries usage; verify against new Claude Code version); (b) Amendment B — collector enhancement: detect when `file_path` crosses vault boundaries (path prefix `/Users/stanley/lattice/<vault>.aDNA/` extracted; compared against `ADNA_CURRENT_VAULT` env var or session's `vault` column); INSERTs row into `context_traversal` (session_id + ts + from_vault + to_vault + edge_type='manual' + hop_depth=1); (c) Amendment C — recipe propagation contract: hook reads `ADNA_RECIPE_ID` env var (or scans first-line-of-Read for `# recipe:<id>`); writes to `tool_calls.recipe_id`; documents the contract at `~/.adna/measurement/RECIPE_PROTOCOL.md` (1-page memo).
- **OR (if D1 = override B)**: documented deferral memo at `missions/artifacts/m14_obj6_amendments_abc_deferral.md` (rationale; M1.5 scope; load-bearing-priority justification)
- **Depends on**: 4 (hook source ready for edits)

### 7. Validation output + AAR + token_baselines refresh + mission close (S3)

- **Status**: pending S3
- **Session**: S3
- **Read**: all S1 + S2 outputs; M1.3 Obj 7 calibration formula + thresholds; `node.aDNA/what/context/token_baselines.md` v0.1.0 (M1.3 S3 output)
- **Produce**:
  - `missions/artifacts/m14_obj7_validation_output.md` — pre/post backfill calibration delta (approximation kT vs authoritative kT per session-type); convergence-model verdict status update (Mid-magnitude → Validated / refined Mid-magnitude / still Mid-magnitude with new data); pattern α/β/γ/δ re-rank with authoritative data; top-3 M2.1 queue sequencing confirmation (unchanged or re-prioritized); decomposition-threshold rule (50/80/200 kT) confirmed-or-refined; ADR-016 prep notes addendum if data shifts the formula.
  - `node.aDNA/what/context/token_baselines.md` v0.1.0 → v0.1.1 refresh (authoritative numbers replace M1.3 approximations; CHANGELOG entry inline; FAIR companion `.yaml` updated `version` field); `node.aDNA/what/inventory/inventory_vaults.yaml` content_entities row `token_baselines` version field updated `0.1.0` → `0.1.1`.
  - `missions/artifacts/aar_m14_latticescope_schema.md` — lightweight 5-line + 4-category extended findings; load-bearing finding likely: empirical post-backfill convergence-model verdict refinement; Standing-Order discharge table; token-budget estimate-vs-actual table.
  - Campaign master M1.4 row `in_progress → completed`; M2.1/M2.2/M2.3/M2.4 rows marked `next` (operator-discretionary parallel entry); new amendments entry appended.
  - STATE.md "Current Phase" block updated (M1.4 closed; P1 phase exit gate ready for operator approval per Campaign S.O. #19).
- **Depends on**: 5 + 6

## Deliverables

| # | Deliverable | Session | Status |
|---|---|---|---|
| 1 | M1.4 mission spec | S1 | 🟡 in_progress (this file) |
| 2 | v0.1.1 schema bump DDL spec | S1 | pending |
| 3 | Transcript resolver + `ingest_transcript.py` design spec | S1 | pending |
| 4 | Schema migration applied + Amendments D+E live; `--self-test` PASS post-migration | S2 | pending |
| 5 | `ingest_transcript.py` implementation + backfill execution (per D3 default A: all existing transcripts) | S2 | pending |
| 6 | Amendments A + B + C live (per D1 default A) OR documented deferral to M1.5 | S2 | pending |
| 7 | Validation output + AAR + token_baselines.md v0.1.1 refresh + mission close | S3 | pending |

## Acceptance criteria

- [ ] All 7 deliverables landed (S1: 1-3; S2: 4-6; S3: 7)
- [ ] `migrate_v01_to_v011.sh --apply` executed cleanly against `~/.adna/measurement/measurement.sqlite`; `PRAGMA user_version = 110`
- [ ] Hook `--self-test` PASS post-migration (sessions row created with transcript_path populated)
- [ ] Sessions table populating on first-call-of-session (≥ 1 sessions row exists per Claude Code session UUID captured post-Amendment-E)
- [ ] `ingest_transcript.py --self-test` PASS (synthetic 3-turn jsonl fixture; no live transcripts touched)
- [ ] `ingest_transcript.py --all` executed end-to-end against `~/.claude/projects/-Users-stanley-lattice-aDNA-aDNA/*.jsonl`; ≥ 14 rows reconciled (M1.3 S2 baseline) + however many M1.3 S3 + post-S3 calls accumulated
- [ ] Idempotency confirmed: second `ingest_transcript.py --all` invocation produces 0 row updates
- [ ] Amendments A + B + C live (per D1 default A) OR documented deferral memo at `m14_obj6_amendments_abc_deferral.md` (per D1 override B)
- [ ] `node.aDNA/what/context/token_baselines.md` v0.1.0 → v0.1.1 refresh published with authoritative post-backfill numbers; companion YAML version bumped
- [ ] M1.4 AAR lightweight 5-line + 4-category extended findings landed
- [ ] Convergence-model verdict status reported (Validated / Mid-magnitude refined / unchanged); pattern α/β/γ/δ re-rank reported
- [ ] Campaign master M1.4 row `completed`; M2.1/M2.2/M2.3/M2.4 rows marked `next`; STATE.md updated

## Operator decision gates (D1-D5)

| # | Question | Rosetta default | Resolved at |
|---|---|---|---|
| D1 | Amendment scope at S2 — ALL 5 (D+E+A+B+C) OR just LOAD-BEARING (D+E) with A/B/C deferred to M1.5? | **A: All 5** (A/B/C are small additive hook-jq edits + one new table-INSERT + a 1-page recipe-protocol memo; bounded cost; deferring fragments work without saving meaningful S2 budget) | S2 entry |
| D2 | `LatticeScope.aDNA/` sub-vault bootstrap timing — NOW (absorb MLS-0 into M1.4 S3) OR DEFER to MLS-0 at v8 P6 close per original sub-campaign plan? | **B: Defer** (M1.4 is schema-activation; the SQLite + scripts live at `~/.adna/measurement/` already; bootstrap-now adds 1 session of vault scaffolding without unlocking measurement; defer keeps M1.4 focused on LOAD-BEARING Amendment D) | S2 entry |
| D3 | Backfill scope for `ingest_transcript.py` — ALL existing project transcripts (`~/.claude/projects/-Users-stanley-lattice-aDNA-aDNA/*.jsonl`) OR only M1.3-S2-forward sessions OR only M1.3 S2's 14 captured calls? | **A: All existing** (idempotent upsert keyed on `(claude_session_id, ts, tool, file_path)`; single-pass file walk; unlocks cross-session retrospective for M2.3 immediately) | S2 entry |
| D4 | Schema bump policy — codify v0.1 → v0.1.1 as a proto-ADR (forward-reference to LatticeScope sub-campaign's planned ADR-007) OR ship as CHANGELOG-only? | **B: CHANGELOG-only** (Campaign Standing Order #14 — no in-flight ADR ratification mid-phase; ADR-007 (schema-bump policy) properly ratifies at MLS-2 close per sub-campaign roadmap; M1.4 produces a CHANGELOG entry + prep notes for the future ADR-007) | S1 entry — RESOLVED B |
| D5 | S2/S3 compression — canonical 3-session OR S3-absorb-into-S2 per M06 Rosetta-defaults compression? | **A: Canonical 3-session** (M1.4 has more moving parts than M06's tag-execution mission — schema migration + new Python script + backfill + validation; S3 buffer is honest scope; S3 also produces `token_baselines.md` v0.1.1 refresh which needs post-backfill data settled before AAR) | S2 entry |

## Hard constraints

- **Zero `.adna/` upstream touches** — v7.0 frozen at `LatticeProtocol/aDNA@27e6395`; CHANGELOG v7.0 entry locked; any template-level findings route through `skill_upstream_contribution.md` at S3 close (not at S1 or S2).
- **Zero partner-vault contact** — 4 embargo memos preserved (2 Wilhelm ADR-010 + 1 SuperLeague + 1 SIP; per v2 M06 D5 passive).
- **Zero `~/.claude/settings.json` modifications** — M1.3 S2's `.claude/settings.local.json` project-local hook config preserved as-is; hook source at `~/.adna/measurement/measurement_hook.sh` is the *only* destructive target for S2.
- **No ADR drafts at M1.4** — ADR-007 (LatticeScope.aDNA schema-bump policy) ratifies at MLS-2 per sub-campaign roadmap (Campaign S.O. #14); ADR-016 (per-mission context budget) ratifies at M2.2; M1.4 produces NO ADR text.
- **`node.aDNA/` stays local-only** — Standing Rule #4 (workspace router); S3 refreshes `token_baselines.md` v0.1.0 → v0.1.1 in place; companion `token_baselines.yaml` `federation_visibility` stays `opt_in_anonymized`.
- **`LatticeScope.aDNA/` NOT bootstrapped at M1.4** — per D2 default B; SQLite + Python scripts live at `~/.adna/measurement/` (workspace-root-private; outside all vaults); MLS-0 bootstrap stays at v2 P3 phase gate (now v8 P6 post-absorption).
- **No file content captured** — `ingest_transcript.py` reads jsonl but writes ONLY token-usage metadata to SQLite; conversation content stays in the transcript (Standing Order #2 data-integrity invariant from M1.3).
- **S1 is non-destructive** — mission spec + 2 design artifacts only; no SQLite migrations; no hook edits; no Python execution; no transcript ingestion.
- **S2 destructive entry requires explicit operator approval** per Standing Order #1 — phase gate is a human gate.

## Standing Order discharges

| # | Order | M1.4 discharge |
|---|---|---|
| Project SO #1 | Phase gates are human gates | S2 destructive entry (schema migration + hook edits + Python execution + backfill) requires explicit operator approval; M1.4 → P2 transition (M2.x cohort) at S3 close requires operator approval |
| Project SO #3 | Context budget is doctrine | M1.4 produces the authoritative measurement that doctrine v2 (M2.2 ADR-016) ratifies |
| Project SO #5 | Every mission gets an AAR | S3 produces `aar_m14_latticescope_schema.md` (lightweight 5-line + 4-category extended findings) |
| Project SO #6 | Archive never delete | Pre-migration SQLite preserved at `/tmp/measurement_v01_backup.sqlite` for the S2 migration window; existing tool_calls rows preserved through ALTER TABLE (additive-only schema change) |
| Project SO #7 | Dual-audience test | Spec authored for developer (DDL + Python + jq) + newcomer (why authoritative > approximation; what convergence-model verdict means) |
| Project SO #8 | Self-reference mandatory | M1.4 measures itself; S2 backfill ingests this S1 session's own transcript; the protocol corrects its own approximation with its own backfill |
| Project SO #10 | Cross-link aggressively | This spec wikilinks: M1.3 mission spec + M1.3 Obj 7 calibration output + M1.3 AAR + m01_obj10 vault design + m01_obj10 sub-campaign + m01_obj9 protocol + campaign master + campaign CLAUDE.md + project CLAUDE.md + workspace router (10+ wikilinks) |
| Campaign SO #11 | Per-phase decadal AAR | M1.4 = mission #4 in P1; decadal AAR triggers at P1 exit gate (separate session post-M1.4 close) per Campaign Standing Order #11 |
| Campaign SO #12 | Per-mission context budget | Frontmatter declares `token_budget_estimated: "S1 60-90 kT / S2 120-180 kT / S3 60-80 kT"`; M1.4 self-measures and reports estimate-vs-actual in S3 AAR |
| Campaign SO #14 | ADR ratification gated at phase entries | Honored — ADR-007 schema-bump policy NOT drafted at M1.4 (deferred to MLS-2); ADR-016 NOT drafted at M1.4 (deferred to M2.2); CHANGELOG entry only at v0.1.1 schema bump |
| Campaign SO #16 | v7.0 tag dependency | Satisfied at v2 M06 S2 close 2026-05-18T19:10Z+; M1.4 runs after the tag fired |
| Campaign SO #17 | Mission_class discipline | Frontmatter declares `mission_class: implementation`; canonical 3-session shape per M1.3 ratification |
| Campaign SO #19 | Phase exit = human gate | Applies at P1 → P2 (M1.4 close); operator approves M2.x cohort entry; M1.3 → M1.4 transition was also operator-gated (this session is its execution) |

## Cross-vault impact

- **`node.aDNA/`** — receives `what/context/token_baselines.md` v0.1.0 → v0.1.1 refresh at S3 + `what/inventory/inventory_vaults.yaml` content_entities row version-bump. Local-only by default per workspace router Standing Rule 4.
- **`LatticeScope.aDNA/`** — does NOT bootstrap at M1.4 per D2 default B; MLS-0 (vault scaffold + ADRs 000-003) stays at v8 P6 (was v2 P3 pre-absorption). M1.4's SQLite + scripts live at `~/.adna/measurement/` (workspace-root-private).
- **`III.aDNA/`** — no contact at M1.4; Phase 5 partner.
- **`LatticeTerminal.aDNA/`** — no contact at M1.4; Phase 4 partner.
- **`lattice-labs/`** — Berthier monitors via existing dispatch channel; no new coord memo for M1.4 (informational status only at v8 P1 → P2 phase gate, separate session).
- **17 partner-vault v7.0 migrations** — unfrozen; M1.4 does not own these.

## Self-reference + dual-audience

**Self-reference** (Standing Order #8): M1.4 is itself a Type C planning + implementation session series. S1 (this session) writes the mission spec. S2 ingests this session's own `.jsonl` transcript and writes authoritative per-turn token costs back to SQLite — overwriting the approximation rows that M1.3's hook produced for *this very session*. The recursive depth is now three: Obj 9 in v2 designed the protocol (S2 S5 of v2 M01); M1.3 S2 implemented + approximated; M1.4 S2 corrects with authoritative data. The protocol designed itself, then measured itself, then now corrects itself.

**Dual-audience** (Standing Order #7):

- **Developer reads**: Obj 2 DDL spec (ALTER TABLE statements + migration script), Obj 3 design (Python CLI + jsonl parsing + upsert keys), Obj 4 acceptance (hook `--self-test` PASS post-migration), Obj 5 acceptance (idempotency + summary table format). Direct, executable, reproducible.
- **Newcomer reads**: Mission scope opening paragraph (LOAD-BEARING for v8 P2; why the convergence model needs authoritative data); §Self-reference (the recursive measurement story); AAR §load-bearing finding at S3 close (post-backfill verdict status). Plain language; *why authoritative beats approximation* before *how the script parses jsonl*.

Both audiences land at the same conclusion: **approximation got us a directionally-correct verdict; authoritative data lets us tune the policy. M1.4 closes the gap.**

## Risks

| Risk | Severity | Mitigation |
|---|---|---|
| ALTER TABLE on a populated SQLite locks the database mid-operation | Low | `migrate_v01_to_v011.sh --dry-run` first; ALTER TABLE ADD COLUMN is fast on SQLite (metadata-only operation); pre-migration backup at `/tmp/measurement_v01_backup.sqlite` |
| Sanitized-cwd path encoding for Claude Code transcript location differs across versions | Medium | Spec includes 2+ fallback path patterns (`<sanitized-cwd>/<session_id>.jsonl` and potential alternatives); resolver short-circuits to first existing match; logs warning when no transcript found |
| Backfill upsert key conflicts when multiple tool_calls share `(claude_session_id, ts, tool, file_path)` | Low-Medium | Key tuple sufficient for Read/Edit/Write; Bash/Glob/Grep may collide on `file_path=NULL`; spec includes secondary key candidate (tool_input fingerprint) for non-file tools |
| Cross-vault traversal (Amendment B) needs deterministic "current session vault" detection | Medium | Hook reads `ADNA_CURRENT_VAULT` env var; falls back to first-tool-call's vault-prefix-extracted-from-cwd; documented in spec; M2.4 may refine |
| Recipe propagation (Amendment C) requires agent-side opt-in; no agents currently emit `# recipe:<id>` | Low (no regression) | Contract defined at `RECIPE_PROTOCOL.md`; agents adopt over time; SQLite `recipe_id` column NULLABLE; manual sessions stay NULL (no false attribution) |
| Authoritative backfill changes convergence-model verdict from Mid-magnitude to something different | Low (this is the win) | If verdict refines: report it; if it shifts substantially (>2× delta on transition_tax) trigger M2.3 cross-campaign retrospective per ADR-016 prep notes |
| `ingest_transcript.py` runtime exceeds session budget on full backfill | Low | Stdlib jsonl streaming (`for line in open(...)`); benchmark in Obj 3 spec; expected <30 sec for 10 sessions × <100 turns; S2 budget includes 30-60 sec amortized |

## Status

**S1 IN-PROGRESS** (this session — `session_stanley_20260518_214714_v8_m14_s1`; opened 2026-05-19T04:47:14Z). Spec authoring + 2 design-artifact authoring (Obj 2 + Obj 3). S2 + S3 destructive + close-out operator-gated per Standing Order #1.

**Forward-references**: M1.4 close unblocks the v8 P2 mission cohort (M2.1 context audit + M2.2 ADR-016 ratification + M2.3 convergence model validation + M2.4 AGENTS.md heat map). M2.3 specifically requires Amendment D (transcript_path) for CP-2..CP-4 measurement — M1.4 is M2.3's hard precondition.

## Cross-references

- [[../missions/mission_adna_str_p1_m13_token_audit.md|mission_adna_str_p1_m13_token_audit.md]] — predecessor (closed 2026-05-18T21:00Z+); structural template
- [[../missions/artifacts/m13_obj7_calibration_output.md|m13_obj7_calibration_output.md]] §5.2 — Amendments A-E verbatim (primary input)
- [[../missions/artifacts/aar_m13_token_audit.md|aar_m13_token_audit.md]] — load-bearing finding #1 (M1.4 Amendment D = LOAD-BEARING)
- [[../../campaign_adna_v2_infrastructure/missions/artifacts/m01_obj10_latticescope_vault_design.md|m01_obj10_latticescope_vault_design.md]] §6 — v0.1 schema DDL (gate-resolved 2026-05-08)
- [[../../campaign_adna_v2_infrastructure/missions/artifacts/m01_obj10_latticescope_sub_campaign.md|m01_obj10_latticescope_sub_campaign.md]] §3-4 — MLS-0..MLS-9 tree + ADR roadmap (ADR-007 schema-bump policy at MLS-2)
- [[../../campaign_adna_v2_infrastructure/missions/artifacts/m01_obj9_token_measurement_protocol.md|m01_obj9_token_measurement_protocol.md]] §6 — parent doctrine (Obj 9 → Obj 10 schema-fit gate origin)
- [[../campaign_adna_serious_tool_readiness.md|campaign_adna_serious_tool_readiness.md]] — campaign master §Phase 1 row M1.4
- [[../CLAUDE.md|campaign CLAUDE.md]] — Standing Orders 11-19
- [[../../../CLAUDE.md|project CLAUDE.md]] — Standing Orders 1-10
- `~/.claude/settings.local.json` — hook configuration (D2 project-local; preserved from M1.3 S2)
- `~/.adna/measurement/measurement.sqlite` — measurement database (v0.1 → v0.1.1 migration target)
- `~/.adna/measurement/measurement_hook.sh` — current hook source (Amendments D + E + A + B + C edit target at S2)
- `~/.adna/measurement/ingest_transcript.py` — new Python script (Obj 5 production target at S2)
- `~/.claude/projects/-Users-stanley-lattice-aDNA-aDNA/*.jsonl` — Claude Code transcript directory (authoritative per-turn token source; read-only)
- `node.aDNA/what/context/token_baselines.md` v0.1.0 → v0.1.1 — canonical baseline (S3 refresh target)

## Completion summary

Filled at S3 close.

### Deliverables
[S3 will populate]

### Descoped
[S3 will populate if anything descoped]

### Key findings
[S3 will populate]

### Scope changes
[S3 will populate]

## AAR

Filled at S3 close. See [[../missions/artifacts/aar_m14_latticescope_schema.md|aar_m14_latticescope_schema.md]] (S3 deliverable).
