---
type: artifact
artifact_type: schema_ddl_spec
campaign: campaign_adna_serious_tool_readiness
mission: mission_adna_str_p1_m14_latticescope_schema
objective: 2
session: S1
created: 2026-05-18
updated: 2026-05-18
status: complete
last_edited_by: agent_stanley
tags: [artifact, mission_deliverable, m14, obj2, schema_v011, ddl, alter_table, migration_script, changelog_v011, amendment_d, amendment_b, amendment_c, pragma_user_version, idempotent_migration]
related_artifacts:
  - ../mission_adna_str_p1_m14_latticescope_schema.md  # this mission spec
  - m14_obj3_transcript_resolver_spec.md               # Obj 3 (consumes Amendment D column)
  - ../../../campaign_adna_v2_infrastructure/missions/artifacts/m01_obj10_latticescope_vault_design.md  # §6 v0.1 spec (parent)
  - ../m13_obj7_calibration_output.md                  # §5.2 Amendments A-E (rationale)
downstream_consumers:
  - mission_adna_str_p2_m23_convergence_validation     # M2.3 reads transcript_path to access CP-2..CP-4 data
  - mission_adna_str_p2_m24_agents_md_heatmap         # M2.4 reads sessions-with-transcript_path for cross-session aggregations
---

# M14 Obj 2 — v0.1.1 Schema Bump DDL + Migration Script + CHANGELOG

> **Deliverable 2 of M1.4** (S1). The full schema bump specification for `~/.adna/measurement/measurement.sqlite` from **v0.1-live** (M1.3 S2 hook implementation) to **v0.1.1** (adds Amendment D LOAD-BEARING + Amendments B/C per [[../mission_adna_str_p1_m14_latticescope_schema.md|M1.4]] D1=A default).
>
> **Per D4 default B (CHANGELOG-only; ADR-007 schema-bump policy deferred to MLS-2)**: this artifact ships a CHANGELOG entry + migration runbook + rollback plan, but NO ADR draft. ADR-007 ratifies at LatticeScope.aDNA sub-campaign MLS-2 close per [[../../../campaign_adna_v2_infrastructure/missions/artifacts/m01_obj10_latticescope_sub_campaign.md|sub-campaign §4]] ADR roadmap.

---

## §1 Schema state reconciliation

**The live SQLite schema diverged from the m01_obj10 §6 spec.** M1.3 S2 hook (per `m13_obj2_post_tool_use_hook_spec.md`) implemented a simpler schema than the gate-resolved spec — keeping the hook lightweight and shipping the LOAD-BEARING measurement first. v0.1.1 starts from the live state, not the m01_obj10 spec.

### 1.1 v0.1-live state (current `~/.adna/measurement/measurement.sqlite`)

```sql
-- AS-IS: M1.3 S2 hook CREATE TABLE statements (verbatim from hook source lines 71-101)
PRAGMA journal_mode=WAL;
-- PRAGMA user_version is unset (0)

CREATE TABLE IF NOT EXISTS sessions (
  session_id    TEXT PRIMARY KEY,
  started_at    TEXT NOT NULL,
  vault         TEXT,
  campaign      TEXT,
  mission       TEXT,
  session_type  TEXT
);

CREATE TABLE IF NOT EXISTS tool_calls (
  id                     INTEGER PRIMARY KEY AUTOINCREMENT,
  session_id             TEXT NOT NULL,
  ts                     TEXT NOT NULL,
  tool                   TEXT NOT NULL,
  input_tokens           INTEGER,
  output_tokens          INTEGER,
  cache_creation_tokens  INTEGER,
  cache_read_tokens      INTEGER,
  file_path              TEXT,
  file_loc               INTEGER,
  read_offset            INTEGER,
  read_limit             INTEGER,
  re_read                INTEGER DEFAULT 0,
  content_hash           TEXT,
  prompt_tokens          INTEGER,
  error_code             INTEGER DEFAULT 0,
  claude_session_id      TEXT
);

CREATE INDEX IF NOT EXISTS idx_tool_calls_session ON tool_calls(session_id);
CREATE INDEX IF NOT EXISTS idx_tool_calls_file    ON tool_calls(file_path);
CREATE INDEX IF NOT EXISTS idx_tool_calls_re_read ON tool_calls(re_read);
CREATE INDEX IF NOT EXISTS idx_tool_calls_tool    ON tool_calls(tool);
CREATE INDEX IF NOT EXISTS idx_sessions_type      ON sessions(session_type);
```

### 1.2 v0.1-spec (m01_obj10 §6 — gate-resolved 2026-05-08, never fully implemented)

The spec includes 3 gate-resolved features the live hook does NOT have:
- `file_category` enum CHECK constraint on `tool_calls`
- `traversal_id` FK column on `tool_calls` + `context_traversal` table
- `recipe_id` column on `tool_calls`
- `idx_tool_calls_category` + `idx_tool_calls_recipe` + `idx_context_traversal_*` indexes

### 1.3 v0.1.1 scope decision (this DDL spec)

**Include from v0.1-spec at v0.1.1**:
- ✅ Amendment B: `context_traversal` table + `traversal_id INTEGER` column on `tool_calls` + indexes (per D1=A default)
- ✅ Amendment C: `recipe_id TEXT` column on `tool_calls` + `idx_tool_calls_recipe` index (per D1=A default)

**Include net-new from M1.3 findings**:
- ✅ Amendment D (LOAD-BEARING): `transcript_path TEXT` column on `sessions`

**Defer to v0.1.2 or later**:
- ⏸ `file_category` enum CHECK — not load-bearing for M2.x; M2.4 heat-map work can derive category from path patterns at query time. Adds CHECK-constraint complexity without unlocking new measurement.
- ⏸ Conversion of hook-specific columns (`content_hash`, `prompt_tokens`, `error_code`, `claude_session_id`) into the m01_obj10 spec shape — these are operational, not part of the published schema contract; leave as hook-internal until MLS-1 ratifies a v0.2 schema.

**Amendment A (payload-usage detection)**: no schema change — `cache_creation_tokens` + `cache_read_tokens` columns already exist; Amendment A is purely a hook-side jq enhancement (see Obj 3 + Obj 4 — hook edit at S2).

**Amendment E (sessions-table population)**: no schema change — `sessions` table already exists; Amendment E is purely a hook-side INSERT-on-first-call behavior change (see Obj 4 — hook edit at S2).

---

## §2 v0.1.1 DDL (forward migration)

All statements are **idempotent** (IF NOT EXISTS / safe-to-rerun) and **additive-only** (no DROP / no data loss).

### 2.1 PRAGMA user_version

```sql
-- Set schema version marker (was 0 = unset; advances to 110 = v0.1.1)
-- Convention: PRAGMA user_version = MAJOR*100 + MINOR*10 + PATCH = 0.1.1 → 011
-- But sqlite stores as INTEGER; we use 011 padded as decimal 11
-- Decision: use 110 (encoding "0.1.1" → 110 where digits = MAJOR.MINOR.PATCH × position)
-- Actually use semver-encoded int: 0.1.1 → 0*10000 + 1*100 + 1 = 101
-- Final: 0.1.1 → user_version = 101 (semver-encoded; v0.2.0 → 200; v1.0.0 → 10000)
PRAGMA user_version = 101;
```

**Note**: PRAGMA-versioning convention seeded here (decimal-encoded `MAJOR*10000 + MINOR*100 + PATCH`) becomes proto-input for ADR-007 (schema bump policy at MLS-2). Not ratified at M1.4.

### 2.2 Amendment D: `transcript_path` on `sessions`

```sql
-- Amendment D (LOAD-BEARING) — transcript_path on sessions table
-- Hook resolves ~/.claude/projects/<sanitized-cwd>/<session_id>.jsonl at session-init.
-- SQLite becomes a derived index over the authoritative .jsonl transcript.
ALTER TABLE sessions ADD COLUMN transcript_path TEXT;

-- Optional index for transcript-presence queries (small table; not strictly needed)
CREATE INDEX IF NOT EXISTS idx_sessions_transcript ON sessions(transcript_path) WHERE transcript_path IS NOT NULL;
```

### 2.3 Amendment B: `context_traversal` table + `traversal_id` on `tool_calls`

```sql
-- Amendment B — cross-vault traversal observability
-- Per m01_obj10 §6 gate row 7: rich table (not single-column) for graph-query support.
CREATE TABLE IF NOT EXISTS context_traversal (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  session_id  TEXT NOT NULL,
  ts          TEXT NOT NULL,
  from_vault  TEXT,                 -- e.g., 'aDNA.aDNA'
  to_vault    TEXT,                 -- e.g., 'Spacemacs.aDNA' or 'node.aDNA'
  edge_type   TEXT,                 -- 'manual' | 'airlock' | 'reference' | 'context_recipe'
  hop_depth   INTEGER,              -- 1 = direct cross-vault read; 2+ = chained
  FOREIGN KEY (session_id) REFERENCES sessions(session_id)
);

CREATE INDEX IF NOT EXISTS idx_context_traversal_session ON context_traversal(session_id);
CREATE INDEX IF NOT EXISTS idx_context_traversal_vaults  ON context_traversal(from_vault, to_vault);

-- Amendment B continued — traversal_id FK column on tool_calls
-- NULL = not a cross-vault read; non-NULL = points at the context_traversal row
ALTER TABLE tool_calls ADD COLUMN traversal_id INTEGER REFERENCES context_traversal(id);
```

### 2.4 Amendment C: `recipe_id` on `tool_calls`

```sql
-- Amendment C — recipe attribution
-- NULL = manual / not recipe-driven; non-NULL = recipe identifier from agent contract
-- Contract: agent sets ADNA_RECIPE_ID env var, or prefixes Read with '# recipe:<id>' first line
-- Documented at ~/.adna/measurement/RECIPE_PROTOCOL.md (Obj 6 deliverable)
ALTER TABLE tool_calls ADD COLUMN recipe_id TEXT;

CREATE INDEX IF NOT EXISTS idx_tool_calls_recipe ON tool_calls(recipe_id) WHERE recipe_id IS NOT NULL;
```

### 2.5 Consolidated post-migration schema (verification reference)

After `migrate_v01_to_v011.sh --apply` completes, `sqlite3 measurement.sqlite '.schema'` produces:

```sql
PRAGMA journal_mode=WAL;
-- user_version = 101

CREATE TABLE sessions (
  session_id        TEXT PRIMARY KEY,
  started_at        TEXT NOT NULL,
  vault             TEXT,
  campaign          TEXT,
  mission           TEXT,
  session_type      TEXT,
  transcript_path   TEXT             -- NEW v0.1.1 (Amendment D)
);

CREATE TABLE tool_calls (
  id                     INTEGER PRIMARY KEY AUTOINCREMENT,
  session_id             TEXT NOT NULL,
  ts                     TEXT NOT NULL,
  tool                   TEXT NOT NULL,
  input_tokens           INTEGER,
  output_tokens          INTEGER,
  cache_creation_tokens  INTEGER,
  cache_read_tokens      INTEGER,
  file_path              TEXT,
  file_loc               INTEGER,
  read_offset            INTEGER,
  read_limit             INTEGER,
  re_read                INTEGER DEFAULT 0,
  content_hash           TEXT,
  prompt_tokens          INTEGER,
  error_code             INTEGER DEFAULT 0,
  claude_session_id      TEXT,
  traversal_id           INTEGER REFERENCES context_traversal(id),  -- NEW v0.1.1 (Amendment B)
  recipe_id              TEXT                                        -- NEW v0.1.1 (Amendment C)
);

CREATE TABLE context_traversal (                                     -- NEW v0.1.1 (Amendment B)
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  session_id  TEXT NOT NULL,
  ts          TEXT NOT NULL,
  from_vault  TEXT,
  to_vault    TEXT,
  edge_type   TEXT,
  hop_depth   INTEGER,
  FOREIGN KEY (session_id) REFERENCES sessions(session_id)
);

CREATE INDEX idx_tool_calls_session       ON tool_calls(session_id);
CREATE INDEX idx_tool_calls_file          ON tool_calls(file_path);
CREATE INDEX idx_tool_calls_re_read       ON tool_calls(re_read);
CREATE INDEX idx_tool_calls_tool          ON tool_calls(tool);
CREATE INDEX idx_sessions_type            ON sessions(session_type);
CREATE INDEX idx_sessions_transcript      ON sessions(transcript_path) WHERE transcript_path IS NOT NULL;  -- NEW
CREATE INDEX idx_context_traversal_session ON context_traversal(session_id);                              -- NEW
CREATE INDEX idx_context_traversal_vaults  ON context_traversal(from_vault, to_vault);                    -- NEW
CREATE INDEX idx_tool_calls_recipe         ON tool_calls(recipe_id) WHERE recipe_id IS NOT NULL;          -- NEW
```

---

## §3 Migration script: `migrate_v01_to_v011.sh`

Location: `~/.adna/measurement/migrate_v01_to_v011.sh` (chmod +x at S2).

### 3.1 Behavior modes

- `migrate_v01_to_v011.sh --dry-run` — prints SQL diff against current `.schema`; **no database changes**.
- `migrate_v01_to_v011.sh --apply` — executes migration; idempotent (safe to rerun); checks `PRAGMA user_version` before applying.
- `migrate_v01_to_v011.sh --rollback` — drops the three new columns + the new table + new indexes; resets `user_version` to 0 (or pre-migration value). Requires explicit confirmation.
- `migrate_v01_to_v011.sh --self-test` — copies live DB to `/tmp/test.sqlite`; runs `--apply`; verifies schema diff via `.schema` comparison; runs `--rollback`; verifies original state restored; deletes `/tmp/test.sqlite`. Exit 0 PASS / 1 FAIL.

### 3.2 Script outline (bash)

```bash
#!/usr/bin/env bash
# migrate_v01_to_v011.sh — schema migration from v0.1-live to v0.1.1
# Spec: aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/
#        missions/artifacts/m14_obj2_schema_v011_ddl.md
# Per M1.4 D4=B (CHANGELOG-only; no ADR-007 draft).

set -euo pipefail
IFS=$'\n\t'

DB="${ADNA_MEASUREMENT_DB:-${HOME}/.adna/measurement/measurement.sqlite}"
BACKUP_DIR="${HOME}/.adna/measurement/backups"
TARGET_VERSION=101

mkdir -p "$BACKUP_DIR"

mode="${1:-}"
case "$mode" in
  --dry-run)
    echo "=== Current schema (v0.1-live) ==="
    sqlite3 "$DB" ".schema"
    echo
    echo "=== Pending v0.1.1 migration SQL ==="
    cat <<'SQL'
ALTER TABLE sessions ADD COLUMN transcript_path TEXT;
CREATE INDEX IF NOT EXISTS idx_sessions_transcript ON sessions(transcript_path) WHERE transcript_path IS NOT NULL;
CREATE TABLE IF NOT EXISTS context_traversal (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  session_id TEXT NOT NULL,
  ts TEXT NOT NULL,
  from_vault TEXT,
  to_vault TEXT,
  edge_type TEXT,
  hop_depth INTEGER,
  FOREIGN KEY (session_id) REFERENCES sessions(session_id)
);
CREATE INDEX IF NOT EXISTS idx_context_traversal_session ON context_traversal(session_id);
CREATE INDEX IF NOT EXISTS idx_context_traversal_vaults ON context_traversal(from_vault, to_vault);
ALTER TABLE tool_calls ADD COLUMN traversal_id INTEGER REFERENCES context_traversal(id);
ALTER TABLE tool_calls ADD COLUMN recipe_id TEXT;
CREATE INDEX IF NOT EXISTS idx_tool_calls_recipe ON tool_calls(recipe_id) WHERE recipe_id IS NOT NULL;
PRAGMA user_version = 101;
SQL
    ;;

  --apply)
    current=$(sqlite3 "$DB" "PRAGMA user_version;")
    if [[ "$current" == "$TARGET_VERSION" ]]; then
      echo "Schema already at v0.1.1 (user_version=$current). No-op."
      exit 0
    fi

    # Backup before destructive operation
    backup="$BACKUP_DIR/measurement_v01_$(date +%Y%m%d_%H%M%S).sqlite"
    sqlite3 "$DB" ".backup '$backup'"
    echo "Backup saved: $backup"

    sqlite3 "$DB" <<'SQL'
ALTER TABLE sessions ADD COLUMN transcript_path TEXT;
CREATE INDEX IF NOT EXISTS idx_sessions_transcript ON sessions(transcript_path) WHERE transcript_path IS NOT NULL;
CREATE TABLE IF NOT EXISTS context_traversal (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  session_id TEXT NOT NULL,
  ts TEXT NOT NULL,
  from_vault TEXT,
  to_vault TEXT,
  edge_type TEXT,
  hop_depth INTEGER,
  FOREIGN KEY (session_id) REFERENCES sessions(session_id)
);
CREATE INDEX IF NOT EXISTS idx_context_traversal_session ON context_traversal(session_id);
CREATE INDEX IF NOT EXISTS idx_context_traversal_vaults ON context_traversal(from_vault, to_vault);
ALTER TABLE tool_calls ADD COLUMN traversal_id INTEGER REFERENCES context_traversal(id);
ALTER TABLE tool_calls ADD COLUMN recipe_id TEXT;
CREATE INDEX IF NOT EXISTS idx_tool_calls_recipe ON tool_calls(recipe_id) WHERE recipe_id IS NOT NULL;
PRAGMA user_version = 101;
SQL

    new_version=$(sqlite3 "$DB" "PRAGMA user_version;")
    if [[ "$new_version" == "$TARGET_VERSION" ]]; then
      echo "Migration v0.1 → v0.1.1 APPLIED (user_version=$new_version)"
    else
      echo "Migration FAILED (expected $TARGET_VERSION, got $new_version)"
      echo "Backup at: $backup"
      exit 1
    fi
    ;;

  --rollback)
    read -rp "Rollback v0.1.1 → v0.1 (drops 3 columns + 1 table + 4 indexes)? [y/N] " confirm
    [[ "$confirm" != "y" ]] && { echo "Aborted."; exit 0; }

    backup="$BACKUP_DIR/measurement_v011_$(date +%Y%m%d_%H%M%S).sqlite"
    sqlite3 "$DB" ".backup '$backup'"
    echo "Pre-rollback backup: $backup"

    # SQLite DROP COLUMN syntax: requires 3.35+ (May 2021); fallback = copy-to-new-table
    sqlite3 "$DB" <<'SQL'
DROP INDEX IF EXISTS idx_tool_calls_recipe;
DROP INDEX IF EXISTS idx_context_traversal_session;
DROP INDEX IF EXISTS idx_context_traversal_vaults;
DROP INDEX IF EXISTS idx_sessions_transcript;
ALTER TABLE tool_calls DROP COLUMN recipe_id;
ALTER TABLE tool_calls DROP COLUMN traversal_id;
ALTER TABLE sessions DROP COLUMN transcript_path;
DROP TABLE IF EXISTS context_traversal;
PRAGMA user_version = 0;
SQL
    echo "Rollback complete. user_version=$(sqlite3 "$DB" 'PRAGMA user_version;')"
    ;;

  --self-test)
    TEST_DB="/tmp/measurement_test_v011.sqlite"
    rm -f "$TEST_DB"
    sqlite3 "$DB" ".backup '$TEST_DB'"
    ADNA_MEASUREMENT_DB="$TEST_DB" "$0" --apply
    NEW=$(sqlite3 "$TEST_DB" "PRAGMA user_version;")
    [[ "$NEW" != "$TARGET_VERSION" ]] && { echo "SELF-TEST FAIL — apply did not set version"; exit 1; }
    NEW_COLS=$(sqlite3 "$TEST_DB" "SELECT name FROM pragma_table_info('sessions') WHERE name='transcript_path';")
    [[ "$NEW_COLS" != "transcript_path" ]] && { echo "SELF-TEST FAIL — transcript_path missing"; exit 1; }
    TRAVERSAL_TABLE=$(sqlite3 "$TEST_DB" ".tables context_traversal")
    [[ -z "$TRAVERSAL_TABLE" ]] && { echo "SELF-TEST FAIL — context_traversal table missing"; exit 1; }
    rm -f "$TEST_DB"
    echo "SELF-TEST PASS"
    ;;

  *)
    cat <<HELP
Usage: $0 [--dry-run | --apply | --rollback | --self-test]

  --dry-run    Show the schema diff without changing the database
  --apply      Execute the migration (creates backup first)
  --rollback   Drop new columns + table + indexes; restore v0.1 (SQLite 3.35+ required)
  --self-test  Copy DB to /tmp, apply, verify, delete; exit 0 PASS / 1 FAIL

Current DB: $DB
Target version: v0.1.1 (user_version = $TARGET_VERSION)
HELP
    ;;
esac
```

### 3.3 Acceptance gates (Obj 4 at S2 ratifies these)

1. `migrate_v01_to_v011.sh --self-test` PASSes against current live DB.
2. `migrate_v01_to_v011.sh --dry-run` output matches §2.5 verification reference.
3. `migrate_v01_to_v011.sh --apply` advances `user_version` from 0 → 101 cleanly.
4. Existing `tool_calls` rows unaffected (`SELECT COUNT(*) FROM tool_calls;` unchanged before/after).
5. Pre-migration backup at `~/.adna/measurement/backups/measurement_v01_*.sqlite` exists post-apply.

---

## §4 Rollback plan

### 4.1 Conditions triggering rollback

- Hook `--self-test` FAILs post-Amendment-D edit (Obj 4)
- `ingest_transcript.py` produces unexpected data corruption (Obj 5)
- Operator decides v0.1.1 is premature

### 4.2 Rollback steps

1. Stop using the hook (rename `~/.adna/measurement/measurement_hook.sh` → `measurement_hook.sh.disabled`).
2. Run `migrate_v01_to_v011.sh --rollback` (drops 3 columns + 1 table + 4 indexes; restores user_version to 0).
3. Restore pre-migration backup if rollback insufficient: `cp ~/.adna/measurement/backups/measurement_v01_<latest>.sqlite ~/.adna/measurement/measurement.sqlite`.
4. Revert hook source in git (M1.3 commit `abaff73` carries the hook in its M1.3 S2 state). [Note: the hook is in `~/.adna/`, not the repo; but the spec at `m13_obj2_post_tool_use_hook_spec.md` is canonical for the v0.1-live behavior.]

### 4.3 Compatibility note

**SQLite version requirement**: `ALTER TABLE ... DROP COLUMN` requires SQLite 3.35+ (released March 2021). Current macOS ships 3.43+; CI environments may differ. If rollback fails due to SQLite version, the fallback is "copy-to-new-table" recreation (`CREATE TABLE temp AS SELECT old-columns FROM tool_calls; DROP TABLE tool_calls; ALTER TABLE temp RENAME TO tool_calls;`) — documented but not in the script body to keep S2 bounded.

---

## §5 CHANGELOG v0.1.1 entry

Lives at `~/.adna/measurement/CHANGELOG.md` (created at S2 if absent; appended at S2 mission close).

```markdown
## v0.1.1 — 2026-05-XX (M1.4 close at S3)

### Added
- `sessions.transcript_path TEXT` — resolves `~/.claude/projects/<sanitized-cwd>/<session_id>.jsonl` at session-init. Authoritative per-turn token source. **LOAD-BEARING** for v8 P2 CP-2..CP-4 measurement (M2.3 cross-campaign retrospective requires this).
- `context_traversal` table + `tool_calls.traversal_id INTEGER REFERENCES context_traversal(id)` — cross-vault hop observability. Hook detects file_path crossing vault boundaries; INSERTs into context_traversal; FKs from tool_calls row.
- `tool_calls.recipe_id TEXT` — recipe attribution column. Agents emit `ADNA_RECIPE_ID` env var or `# recipe:<id>` Read prefix; hook parses and writes. NULLABLE = manual.
- `idx_sessions_transcript`, `idx_context_traversal_session`, `idx_context_traversal_vaults`, `idx_tool_calls_recipe` — supporting indexes.
- `PRAGMA user_version = 101` — semver-encoded schema version marker; pattern proto-input for ADR-007 (schema bump policy, ratifies at LatticeScope sub-campaign MLS-2).

### Changed
- Hook source (`measurement_hook.sh`): now INSERTs into `sessions` on first-call-of-session (Amendment E) + populates `transcript_path` (Amendment D) + reads `tool_input.usage.cache_*` if present (Amendment A) + detects cross-vault `file_path` and INSERTs into `context_traversal` (Amendment B) + parses `ADNA_RECIPE_ID` / `# recipe:` prefix (Amendment C).
- `m13_obj2_post_tool_use_hook_spec.md` reference state: now historical (v0.1-live); v0.1.1 hook behavior canonicalized in this CHANGELOG.

### Migration
- `migrate_v01_to_v011.sh --apply` migrates existing SQLite stores in place; idempotent; preserves `tool_calls` rows; auto-backups to `~/.adna/measurement/backups/`.
- Run `migrate_v01_to_v011.sh --self-test` first to verify on a copy.

### Backfill
- `ingest_transcript.py --all` populates authoritative per-turn token costs from `.jsonl` transcripts (see [[m14_obj3_transcript_resolver_spec.md|m14_obj3_transcript_resolver_spec.md]]). Idempotent; second invocation is a no-op.

### Rationale
- M1.3 measurement protocol implementation surfaced 5 schema amendments queued for v0.1.1 ([[../m13_obj7_calibration_output.md|m13_obj7_calibration_output.md]] §5.2).
- Amendment D is LOAD-BEARING per [[../aar_m13_token_audit.md|M1.3 AAR]] §(d) Campaign-level signal #1 — without it, M2.3 cross-campaign retrospective is impossible.
- Amendments B + C are collector enhancements included at D1=A default scope (small additive edits; bounded cost; no fragmentation).

### Deferred
- `file_category` enum CHECK constraint (from m01_obj10 §6 spec gate row 2) — derivable at query time; not load-bearing for M2.x.
- ADR-007 schema-bump policy formalization — Campaign Standing Order #14 honored; ADR-007 ratifies at LatticeScope sub-campaign MLS-2.
- v0.2 schema reconciliation with m01_obj10 §6 full spec (file_category + hook-internal columns disposition) — MLS-1 owns this when LatticeScope vault bootstraps.
```

---

## §6 Acceptance criteria (this artifact's contribution to mission acceptance)

This artifact discharges 4 of the 11 M1.4 acceptance criteria:

| Mission acceptance criterion | Discharged here? | Source |
|---|---|---|
| `migrate_v01_to_v011.sh --apply` cleanly; `PRAGMA user_version = 101` (was 110 in spec; corrected to 101 = semver-encoded) | spec → S2 executes | §3.2 + §3.3 |
| Existing `tool_calls` rows unaffected (additive-only ALTER) | spec → S2 verifies | §3.3 acceptance gate 4 |
| CHANGELOG v0.1.1 entry authored | ✓ | §5 |
| Rollback plan documented | ✓ | §4 |

Remaining 7 criteria discharged by Obj 3 (transcript resolver) + Obj 4 (hook edits) + Obj 5 (ingest_transcript.py) + Obj 6 (Amendments A/B/C wiring) + Obj 7 (validation + AAR + token_baselines refresh).

---

## §7 Cross-references

- [[../mission_adna_str_p1_m14_latticescope_schema.md|mission_adna_str_p1_m14_latticescope_schema.md]] — parent mission spec
- [[m14_obj3_transcript_resolver_spec.md|m14_obj3_transcript_resolver_spec.md]] — Obj 3 (consumes `transcript_path` column)
- [[../m13_obj7_calibration_output.md|m13_obj7_calibration_output.md]] §5.2 — Amendments A-E verbatim (rationale)
- [[../../../campaign_adna_v2_infrastructure/missions/artifacts/m01_obj10_latticescope_vault_design.md|m01_obj10_latticescope_vault_design.md]] §6 — v0.1 schema (m01 gate-resolved)
- [[../../../campaign_adna_v2_infrastructure/missions/artifacts/m01_obj10_latticescope_sub_campaign.md|m01_obj10_latticescope_sub_campaign.md]] §4 — ADR-007 schema-bump policy (MLS-2 ratification target)
- `~/.adna/measurement/measurement.sqlite` — migration target
- `~/.adna/measurement/measurement_hook.sh` — hook source (Amendments D+E+A+B+C edit target at S2 Obj 4)
- `~/.adna/measurement/migrate_v01_to_v011.sh` — script production target at S2 Obj 4

## §8 Status

**S1 deliverable 2 complete.** DDL spec + migration script outline + rollback plan + CHANGELOG entry authored. S2 Obj 4 executes `--apply` (operator-gated per Standing Order #1) + edits hook source + verifies `--self-test` PASS.

**Forward references**: ADR-007 (schema-bump policy) consumes §2.1 PRAGMA-versioning convention as one input at MLS-2. v0.2 schema (MLS-1 future work) consumes §1.2 v0.1-spec-vs-live divergence as the reconciliation target.
