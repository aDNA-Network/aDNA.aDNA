---
type: adr
adr_number: 022
title: "Tool-Use Logging — PostToolUse hook payload capture + SQLite store + analysis dispatch contract"
status: accepted
created: 2026-05-20
updated: 2026-05-20
last_edited_by: agent_stanley
supersedes:
superseded_by:
campaign: campaign_adna_serious_tool_readiness
mission: mission_adna_str_p2_m24_agents_md_heatmap
objective: 5
decision_letter: A   # M2.4 D2=A Rosetta-default ratified at S2 plan approval
ratification_phase: M24_S2_mid_P2_per_m23_obj5_§3_pre_scheduled_elevation
ratified: 2026-05-20
ratified_session: session_stanley_20260520T214915Z_v8_m24_s2
slot_reassignment_history:
  originally_named: ADR-007   # M1.3 §6 + M2.2 prep + M2.3 deferral memo all referenced "ADR-007 (tool_use_logging)"
  first_collision_discovered_at: M2.4_S2_entry_2026-05-20T21:49Z
  first_collision_cause: adr_007 slot occupied by 2026-05-08 v2 M01 "outer adna/CLAUDE.md disposition" decision (ratified at campaign_adna_v2_infrastructure)
  initial_reassignment_attempt: ADR-019   # picked at first-collision discovery without checking campaign master ADR roadmap
  second_collision_discovered_at: M2.4_S2_mid_2026-05-20T22:00Z+
  second_collision_cause: ADR-019 forecast-reserved at campaign master ADR roadmap row 310 for "Modular III for Obsidian" (concern #6 capstone, P3 M3.7)
  final_reassignment_to: ADR-022   # next available beyond all forecast reservations (ADR-014/015/018/019/020 all forecast-reserved); ADR-021 also TBD per "ADR-020+" catchall row 311
  precedent: ADR-017 reassigned at M1.5 (from single-commit-additive-upstream to Network.aDNA category) — per ADR-016 §Consequences §8 reconciliation; M2.4 S2 extends the precedent to a two-step reassignment chain (ADR-007 → ADR-019 → ADR-022)
deciders: [agent_stanley, operator_stanley]
related_decisions: [adr_016_per_mission_context_budget]
tags: [adr, decision, campaign_adna_serious_tool_readiness, m24, v8, p2, tool_use_logging, post_tool_use_hook, sqlite_store, analysis_dispatch_contract, m13_consumer, m14_consumer, m23_consumer, m24_obj2_first_consumer, slot_reassigned_from_adr_007, load_bearing, p2_exit_gate_4th_brick]
---

# ADR-022: Tool-Use Logging — PostToolUse hook payload capture + SQLite store + analysis dispatch contract

## Status

**Accepted** at M2.4 S2 close 2026-05-20 (`session_stanley_20260520T214915Z_v8_m24_s2`). Drafted by Rosetta in this same session per the canonical 3-session implementation shape destructive entry. Co-signed by operator stanley at plan ratification.

### Elevation chain

1. **Provisional at M1.3** (`session_stanley_20260518_*_v8_p1_m13_*`; ADR-016 prep notes §6) — initial candidate paragraph in `m13_obj7_calibration_output.md` §6; named "ADR-007 (tool-use logging)" at that time.
2. **Queued-forecast at M2.2** (`session_stanley_20260519T233620Z_v8_m22_s1`; ADR-016 §Consequences §4) — folded into the ADR roadmap as `queued-forecast` pending threshold.
3. **Deferred at M2.3 S2** (`session_stanley_20260520T060143Z_v8_m23_s2`; D2=B operator-ratified) — formalized in `missions/artifacts/m23_obj5_adr_007_deferral_memo.md` with explicit n ≥ 10 SQLite captured-sessions trigger and M2.4 forward contract.
4. **Accepted at M2.4 S2** (this session) — SQLite session count = 11 at S2 entry (≥ 10 threshold MET); D2=A Rosetta-default applied at plan ratification; this ADR ratifies the 3 clauses below.

### Slot reassignment chain: ADR-007 → (initial attempt ADR-019) → ADR-022 (final; audit-trail consistency)

This decision was queued under the working name **"ADR-007 (tool-use logging)"** across M1.3 §6 + M2.2 prep + M2.3 deferral memo. **First collision discovered at M2.4 S2 entry 2026-05-20T21:49Z**: `adr_007_outer_adna_claude_md_disposition.md` was ratified 2026-05-08 under `campaign_adna_v2_infrastructure` M01 with `status: accepted` (outer-CLAUDE.md disposition decision; unrelated topic). The M1.3-era numbering predated awareness of the v2-era slot occupation.

**Initial reassignment attempt: ADR-019**. Picked at first-collision discovery without yet reading the campaign master ADR roadmap (which was buffer-overrun across earlier grep invocations).

**Second collision discovered mid-S2 2026-05-20T22:00Z+**: campaign master ADR roadmap line 310 forecast-reserves ADR-019 for "Modular III for Obsidian" (concern #6 capstone, P3 M3.7). Forecast ADRs are "subject to load-bearing-decision discipline; not all will be authored" (line 300 of the roadmap), but reassigning an *accepted* ADR onto a *named forecast* slot creates the same audit confusion the ADR-007 collision created.

**Final resolution: reassigned to ADR-022** — next available beyond all forecast reservations:
- ADR-014 forecast for verification-handoff topology (P3 M3.4)
- ADR-015 forecast for installer packaging (P4 M4.2)
- ADR-018 forecast for validation-as-dispatched-campaign (P3 M3.4 or P5)
- ADR-019 forecast for Modular III for Obsidian (P3 M3.7)
- ADR-020 forecast for single-commit-additive-upstream (reassigned at M1.5 from ADR-017)
- ADR-021 TBD per the "ADR-020+" catchall row at line 311

ADR-022 sits cleanly past all named forecasts; the next "Modular III for Obsidian" forecast (ADR-019) is preserved intact; the v2 M01 outer-CLAUDE.md ADR-007 stays as-is. Slot reassignment precedent established at M1.5 (ADR-017 originally slated for single-commit-additive-upstream, repurposed for Network.aDNA category + namespace ratification; reconciliation documented at ADR-016 §Consequences §8); M2.4 S2 extends the precedent to a two-step reassignment chain (ADR-007 → ADR-019 → ADR-022). This ADR's `slot_reassignment_history` frontmatter block carries the audit trail; predecessor references in `m23_obj5_adr_007_deferral_memo.md` + M1.3 `m13_obj7_calibration_output.md` §6 + the in-session plan file are NOT retroactively edited (forward-only reassignment per the M1.5 precedent — historical records preserved as committed evidence).

**Standing Order #14 operator-override status**: NOT invoked at M2.4 S2 — this elevation was pre-scheduled at M2.3 S2 via the `m23_obj5_adr_007_deferral_memo.md` §3 forward contract ("M2.4 ratifies at SQLite ≥ 10"). Elevation IS the explicit completion of an already-authorized commitment, not a new mid-phase override (same pattern as ADR-016 Clause C ratification at M2.3 S2 within M2.2's prior override scope).

## Context

The `aDNA.aDNA` vault runs a **PostToolUse hook** that has been quietly capturing tool-call payloads since M1.3 S2 2026-05-18 (`measurement_hook.sh` LIVE; emits JSONL to `~/.adna/measurement/raw/`). At M1.4 (2026-05-19), the `LatticeScope.aDNA v0.1.1` schema activation extended this to a SQLite store at `~/.adna/measurement/measurement.sqlite` (sessions + tool_calls + context_traversal tables; `ingest_transcript.py` LIVE for transcript backfill). The capture mechanism has been operational across 11 SQLite-captured sessions + 1107 tool_calls + 107 context_traversal rows as of M2.4 S2 entry (2026-05-20T21:49Z).

**Operational gap before this ADR**: the *capture* was ratified informally (in hook config + M1.4 schema docs + M2.2/M2.3 amendment notes) but the *analysis dispatch contract* — what data agents and operators may use the capture for, what retention policy applies, what consumer artifacts authorize what kind of access — was never formally consolidated. Three consequences:

1. **No formal access policy**: `tool_calls.input` may contain payload data; without a written rule, future agents could misuse the column for prompt-leak analysis OR retain too long.
2. **No analysis-dispatch contract**: the M2.4 heat-map query suite (`m24_obj2_heatmap_query_suite.md`) is the first formal consumer of the SQLite store; without a written contract, future consumers lack a precedent.
3. **No retention discipline**: SQLite grows monotonically (currently 1107 rows / 11 sessions); without a written retention rule, the store could grow unboundedly OR be naively pruned destroying audit trail.

ADR-022 fills these three gaps by ratifying three composing clauses (A capture + B store + C dispatch) that codify what's been running.

## Decision

Three doctrine clauses ratify together. They compose; none conflicts with the others. All three apply at-current-runtime — no migration or hook upgrade required at ratification.

### Clause A — PostToolUse hook payload capture (ratifies what's running)

The `PostToolUse` hook (located at `~/.adna/measurement/measurement_hook.sh` per workspace-level convention; settings at `~/.claude/settings.json` per node-specific path) **captures tool-call metadata after every tool invocation** and emits a JSONL line to `~/.adna/measurement/raw/{date}.jsonl`. Captured fields:

| Field | Source | Purpose |
|---|---|---|
| `claude_session_id` | Claude Code env | Per-session aggregation key |
| `timestamp` | hook firing time (UTC ISO 8601) | Temporal ordering + per-session timeline |
| `tool` | Tool name (Read/Edit/Write/Bash/Grep/etc.) | Tool-class aggregation |
| `file_path` (where applicable) | Tool input | File-level frequency + re-read detection |
| `input` (truncated; metadata-only) | Tool input parameters | Token-metadata only — NEVER raw user/assistant content (privacy invariant) |
| `re_read` (boolean) | Computed from prior reads in session | Pattern β / waste-detection signal |
| `traversal_id` + `recipe_id` (where applicable) | Tool input or context lookup | Recipe + traversal correlation |

**Privacy invariants** (load-bearing):

1. **Token-metadata only** — no raw user prompts, no assistant generations, no file body content. The `input` field MAY contain file paths + offsets + limits + tool-class flags, but MUST NOT contain prompt text OR generation text OR file body.
2. **Sanitized cwd** — hook resolves session `cwd` via Amendment D `transcript_path` sanitizer (per M1.4 obj3 spec) such that workspace-relative paths are normalized; no absolute user-home paths leak unless they appear in the tool input itself.
3. **Append-only** — hook writes JSONL append-only; no rewriting of prior lines; no in-place edits.

**Runtime status**: **LIVE since 2026-05-18 (M1.3 S2)**. Zero hook modifications since M1.4 v0.1.1 schema activation. This Clause A ratifies the running mechanism.

### Clause B — SQLite store schema + retention (ratifies M1.4 v0.1.1 schema)

The SQLite store at `~/.adna/measurement/measurement.sqlite` carries the M1.4-LIVE v0.1.1 schema:

```sql
CREATE TABLE sessions (
  session_id TEXT PRIMARY KEY,
  started_at TEXT NOT NULL,
  vault TEXT,
  campaign TEXT,
  mission TEXT,
  session_type TEXT,  -- A | B | C | D | E | other (currently NULL — populated by future hook upgrade OR manual backfill)
  transcript_path TEXT
);
CREATE INDEX idx_sessions_type ON sessions(session_type);
CREATE INDEX idx_sessions_transcript ON sessions(transcript_path) WHERE transcript_path IS NOT NULL;

CREATE TABLE tool_calls (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  claude_session_id TEXT,
  timestamp TEXT,
  tool TEXT,
  file_path TEXT,
  input TEXT,        -- token-metadata only per Clause A privacy invariant
  re_read INTEGER,   -- 0 or 1
  traversal_id TEXT,
  recipe_id TEXT
);

CREATE TABLE context_traversal (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  session_id TEXT,
  from_vault TEXT,
  to_vault TEXT,
  edge_type TEXT,
  hop_depth INTEGER,
  timestamp TEXT
);
```

**Schema version**: `v0.1.1` (M1.4 LIVE 2026-05-19; reflects PRAGMA `user_version = 101` per Amendment C semver-encoded convention).

**Schema migration discipline**:

- **Forward-compatible additive only** — new columns/tables added at minor bumps (v0.1.1 → v0.1.2 → v0.2.0). Never drop, never rename existing columns/tables in-place.
- **Migration via `ingest_transcript.py --migrate`** OR equivalent script — never direct DDL on production store.
- **Schema bumps live as new sub-mission within the parent v8.x campaign** — current example: M1.4 was the v0.1.1 schema activation; future M3.x or v8 P5 may introduce v0.1.2 (e.g., to populate `session_type`).
- **PRAGMA `user_version`** must increment on every schema change; reading clients SHOULD verify `user_version` before issuing schema-dependent queries.

**Retention policy** (load-bearing):

- **No automatic deletion** — store accumulates monotonically; estimated growth rate ~ 100 sessions/year (current cadence implies ~ 100K tool_calls/year; SQLite handles this comfortably for decades).
- **Manual archival permitted** — operator MAY archive sessions older than 12 months to `~/.adna/measurement/archive/measurement_archive_{YYYY}.sqlite` if disk pressure surfaces. Archive uses the same schema; readers SHOULD union live + archive when computing historical pattern verdicts.
- **Backups**: SQLite is single-file; operator-discretionary `cp` or `sqlite3 ... .backup` permitted at any time. No agent-side automation for backups at v0.1.1.

**Mutation policy** (Hard Constraint #8 in M2.4):

- **Agent-side queries via `sqlite3 -readonly` ONLY**. Agents NEVER write to the production store.
- Hook is the **single writer**; `ingest_transcript.py` is the **single backfiller** (idempotent INSERT-OR-IGNORE).
- Schema migrations execute via explicit sub-mission with operator approval (e.g., M1.4 ratified v0.1.1; future v0.1.2 follows the same pattern).

### Clause C — Analysis dispatch contract (names first consumer)

The analysis dispatch contract governs **what consumers may do with the SQLite store + what they must declare**. This is the load-bearing clause for the M3.x + v8 P5/P6 forge-ecosystem cohort.

#### First consumer (named explicitly per `m23_obj5_adr_007_deferral_memo.md` §3 forward contract)

**`how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m24_obj2_heatmap_query_suite.md`** is the **first analysis-dispatch consumer of the SQLite store under this ADR**. Same construction pattern as ADR-016 Clause C citing `m23_obj2_corpus_extraction.md` §3 empirical constants as its first consumer.

`m24_obj2` reads:
- `tool_calls.tool` + `file_path` + `re_read` (Q1 directory-load frequency + Q2 AGENTS.md per-file aggregate + Q4 vault-wide top-N)
- `tool_calls.traversal_id` + `recipe_id` (correlation contracts; sparse at v0.1.1 but designed for M3.x cohort growth)
- `sessions.session_id` (Q1/Q2 grouping)
- `context_traversal.from_vault` + `to_vault` + `edge_type` + `hop_depth` (Q3 cross-vault traversal)

`m24_obj2` writes NOTHING to the store (read-only invariant satisfied per Hard Constraint #8).

#### Consumer contract (applies to all future analysis-dispatch artifacts)

Any analysis-dispatch artifact MUST:

1. **Use `sqlite3 -readonly` ONLY** when querying the production store (zero-mutation invariant).
2. **Declare snapshot timestamp** in artifact frontmatter (`corpus_snapshot.snapshot_taken_at: <ISO>`) — corpus is mutating, so reproducibility requires the snapshot pin.
3. **Honor token-metadata privacy** — do NOT attempt to reverse-engineer raw user/assistant content from token counts + tool calls; do NOT capture or include file body content in artifact outputs.
4. **Declare which columns are read** in artifact frontmatter (e.g., `reads_columns: [tool, file_path, re_read]`) — supports future schema-impact analysis.
5. **Caveat sparseness** — for sparsely-populated columns (e.g., `traversal_id`, `recipe_id`, `session_type` currently NULL), the artifact MUST surface the sparseness as a caveat in §Method or §Caveats.
6. **Forward-reference the next consumer trigger** — if the artifact identifies a pattern that needs refresh at a larger corpus, state the refresh-trigger n + columns required.

#### Pre-existing consumers (retroactively bound by this contract at ratification)

- `m23_obj2_corpus_extraction.md` (49-session retrospective; satisfied Clause C invariants implicitly; this ADR formally binds it)
- `m24_obj2_heatmap_query_suite.md` (this campaign; first formal consumer; binds the contract going forward)

#### Future-consumer queue (M3.x and beyond)

- **M3.x pattern β refresh** at ≥ 20-session corpus (per `m24_obj3_pattern_beta_final_verdict.md` §5)
- **AGENTS.md heat-map refresh** at ≥ 20-session corpus (per `m24_obj4_agents_md_hardening_audit.md` §7)
- **Per-mission-class binning** after `sessions.session_type` populated (current NULL → future v0.1.2 schema bump OR manual backfill)
- **Cross-vault traversal saturation** if `context_traversal` join-rate rises above 25% (currently 7.37% per `m24_obj2_heatmap_query_suite.md` §6)

## Consequences

### Positive

1. **Capture mechanism formalized** — Clause A makes the running hook officially policy. No more "informal" or "ambient" status; the hook IS the standard.
2. **Privacy invariants locked** — Clause A privacy invariants (token-metadata only + sanitized cwd + append-only) become enforceable policy. Future agents proposing prompt/generation capture must amend this ADR explicitly.
3. **Analysis access formalized** — Clause C lets the M3.x cohort + v8 P5/P6 propagation queue write analysis artifacts knowing the contract. No more "ad hoc" queries; the contract IS the protocol.
4. **Schema migration discipline** — Clause B's forward-compatible-additive-only rule + PRAGMA `user_version` discipline + sub-mission migration pattern protect against breaking-change accidents.
5. **First consumer named** — Clause C explicitly bootstraps the contract with a working example (m24_obj2). Future consumers have a template to follow.

### Negative

1. **Retention is unbounded by default** — Clause B's "no automatic deletion" rule means disk usage grows monotonically. Mitigation: manual archival permitted; operator monitors disk pressure; SQLite handles decades of typical-cadence growth.
2. **Single writer single-machine** — Clause B's hook-is-the-only-writer rule means cross-machine measurement aggregation requires explicit cross-vault federation (not in scope at v0.1.1). Mitigation: this is the right design for v8 P2; M3.x or v8 P6 may extend.
3. **`session_type` column NULL today** — Clause B preserves the column but acknowledges it's not populated by current hook. Per-mission-class binning (e.g., M2.4 Obj 3 REFINE branch evaluation) is gated on a future v0.1.2 schema activation OR manual backfill. Mitigation: documented as known caveat; M3.x refresh contract names the gap.

### Forward signals

1. **Pattern β rank STAYS 14** (per `m24_obj3_pattern_beta_final_verdict.md` HOLD verdict) using the data this ADR ratifies access to.
2. **AGENTS.md invariants spec ratified** (per `m24_obj4_agents_md_hardening_audit.md` §3) using the heat-map data this ADR ratifies access to.
3. **v8 P6 propagation queue**: this ADR joins ADR-016 + Project SO #11 refinement + Heavy-File Read Convention + AGENTS.md invariants spec in the v8 P6 ecosystem propagation lift queue. Backlog placeholder `how/backlog/idea_upstream_tool_use_logging_pattern.md` candidate-filed at M2.4 S3 close (operator-discretionary).
4. **`node.aDNA/what/context/token_baselines.md` v0.1.3 fold-in at S3** — adds a §NEW section referencing this ADR for the SQLite store + analysis-dispatch contract; lets future operators consult the canonical home for the access discipline.

### M2.4 close (S3) updates

- Campaign master ADR roadmap row for "ADR-007 (tool-use logging)" updated to "ADR-022 (tool-use logging) — slot reassigned at M2.4 S2; original ADR-007 slot occupied by v2 M01 outer-CLAUDE.md disposition".
- `m23_obj5_adr_007_deferral_memo.md` body NOT retroactively edited (forward-only reassignment per M1.5 ADR-017 precedent); audit-trail consistency preserved at this ADR's `slot_reassignment_history` frontmatter + §Status note.
- `how/backlog/idea_upstream_tool_use_logging_pattern.md` candidate-filed at S3 (operator-discretionary) for v8 P6 upstream propagation.

## Sibling/related

- **ADR-016** (Per-Mission Context Budget — same shape; same Clause C construction pattern citing first consumer; this ADR mirrors that template). ADR-016 ratified the *budget discipline*; this ADR ratifies the *measurement substrate that lets you budget*.
- **ADR-007** (Outer adna/CLAUDE.md disposition) — the slot this ADR was originally named for; UNCHANGED in scope; preserved as-is.
- **ADR-017** (Network.aDNA Pattern Category + namespace) — slot-reassignment precedent (originally for single-commit additive-upstream; repurposed at M1.5).
- **ADR-018** (validation-as-dispatched-campaign pattern — slot reserved per ADR-016 §Consequences §8) — pending future ratification.
- **ADR-020** (single-commit additive-upstream — reassigned at M1.5 from ADR-017) — pending future ratification.
- **ADR-021** (auto-archive ADR target — reserved per ADR-016 §Sibling/related) — pending future ratification.

## Sources

- `how/campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p2_m24_agents_md_heatmap.md` — §Objective 5 + D2=A Rosetta-default + forward contract
- `how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m23_obj5_adr_007_deferral_memo.md` — §2 threshold gap analysis (n=7 < 10) + §3 forward contract verbatim (this ADR ratifies that contract)
- `how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m24_obj2_heatmap_query_suite.md` — first analysis-dispatch consumer named in Clause C
- `how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m24_obj3_pattern_beta_final_verdict.md` — sibling S2 artifact; pattern β HOLD verdict using the data this ADR ratifies access to
- `how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m24_obj4_agents_md_hardening_audit.md` — sibling S2 artifact; AGENTS.md invariants spec using the heat-map data
- `how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m13_obj7_calibration_output.md` — §6 original "ADR-007 (tool-use logging)" candidate text (slot-reassignment source; preserved as committed evidence)
- `how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m14_obj7_validation_output.md` — M1.4 schema activation rationale + Two-Metric reality framing (Clause B schema descriptor source)
- `what/decisions/adr_007_outer_adna_claude_md_disposition.md` — slot-collision counterpart; preserved as-is
- `what/decisions/adr_016_per_mission_context_budget.md` — Clause C construction pattern template; §Consequences §8 slot-reassignment precedent (M1.5 ADR-017 reassignment)
- `what/decisions/adr_017_network_adna_pattern_category_and_namespace_ratification.md` — slot-reassignment precedent (originally another ADR)
- `~/.adna/measurement/measurement.sqlite` v0.1.1 — runtime substrate (LIVE since 2026-05-19; M1.4 schema activation)
- `~/.adna/measurement/measurement_hook.sh` — runtime hook (LIVE since 2026-05-18; M1.3 S2 activation; frozen at M1.4 v0.1.1)
- `~/.adna/measurement/ingest_transcript.py` — transcript backfill substrate (LIVE since M1.4 2026-05-19; frozen)
- `/Users/stanley/.claude/plans/please-read-the-claude-md-zazzy-kazoo.md` — approved S2 plan (M2.4 S2 destructive entry; Rosetta-default D2=A elevate-if-≥-10-sessions)
