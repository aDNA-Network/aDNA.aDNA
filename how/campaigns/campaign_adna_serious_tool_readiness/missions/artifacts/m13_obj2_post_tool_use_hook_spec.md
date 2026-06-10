---
type: artifact
artifact_type: implementation_spec
campaign: campaign_adna_serious_tool_readiness
mission: mission_adna_str_p1_m13_token_audit
objective: 2
created: 2026-05-18
updated: 2026-05-18
status: complete
last_edited_by: agent_stanley
tags: [artifact, mission_deliverable, m13, obj2, post_tool_use, claude_code_hook, sqlite, measurement, instrumentation, self_test, privacy_safe]
related_artifacts:
  - ../../../campaign_adna_v2_infrastructure/missions/artifacts/m01_obj9_token_measurement_protocol.md  # source spec §4
related_decisions:
  - ../../../../what/decisions/adr_016_per_mission_context_budget.md  # forecast for M2.2; not yet drafted
---

# M1.3 Obj 2 — PostToolUse Hook Implementation Spec

> **Deliverable 2 of M1.3.** Expands [[../../../campaign_adna_v2_infrastructure/missions/artifacts/m01_obj9_token_measurement_protocol.md#§4 Claude Code hook spec — `PostToolUse` instrumentation|Obj 9 §4]] into a standalone implementation spec ready for S2 installation. Adds installation steps, JSON payload validation, `--self-test` mode, rollback procedure, and known limitations beyond Obj 9's outline.
>
> **Mission scope alignment**: Obj 9 §4 specifies the *what*; this spec specifies the *how*. S2 (M1.3) installs from this spec.

---

## §0 Purpose

A Claude Code `PostToolUse` hook that captures per-tool-call metadata (file path, LOC, offset/limit, token usage) into a local SQLite store. Read-only at instrumentation level; never modifies tool input/output. Append-only logger; never deletes past data. Operator-toggleable; rollback via single-file delete.

**What this enables**:
- 19-vault Type A cold-start baseline (M1.3 S1 static + S2 live cross-check)
- Type B + C live instrumented runs (M1.3 S2)
- Patterns α/β/γ/δ ranking (Obj 9 §2; M1.3 S2 Obj 6)
- Convergence-model validation (Obj 9 §3; M1.3 S2)
- Per-mission token-budget calibration (M1.3 S3 Obj 7)

**What it does NOT do**:
- No file content capture (privacy invariant; §4)
- No tool input/output modification (idempotent; §3)
- No cross-vault federation (deferred to LatticeScope.aDNA M1.4+)
- No real-time UI feedback (web dashboard deferred to LatticeScope sub-campaign)
- No per-session budget warnings (deferred; see Obj 9 §9 out-of-scope)

---

## §1 Files this spec produces (at S2 install)

| Path | Purpose | Created at |
|---|---|---|
| `~/.adna/measurement/measurement_hook.sh` | Hook script (executable; chmod 755) | S2 step 1 |
| `~/.adna/measurement/measurement.sqlite` | SQLite database (idempotent init on first run) | S2 step 1 first hook fire |
| `~/.adna/measurement/README.md` | Operator-facing toggle + inspection doc | S2 step 1 |
| `.claude/settings.local.json` (project-local; D2 default) | Hook registration entry | S2 step 2 |
| `~/.adna/measurement/self_test.json` | Synthetic payload for `--self-test` mode | S2 step 1 |

---

## §2 Hook script (`measurement_hook.sh`)

Inherits the §4 bash outline from Obj 9 verbatim with additions noted below. See [[../../../campaign_adna_v2_infrastructure/missions/artifacts/m01_obj9_token_measurement_protocol.md#§4 Claude Code hook spec — `PostToolUse` instrumentation|Obj 9 §4]] for the canonical script body.

### 2.1 Additions to Obj 9 outline

| Addition | Rationale |
|---|---|
| `set -euo pipefail` at top (already in Obj 9) | Fail fast on errors |
| `IFS=$'\n\t'` after `set -euo pipefail` | Word-splitting safety for paths with spaces |
| SHA256 hash of file content (optional; truncated to 16 chars) | Detect file rewrites that change content but not path — disambiguates "re-read same file" from "re-read after modification" |
| `claude_session_id` lookup from `CLAUDE_SESSION_ID` env var if set, else `ADNA_SESSION_ID` fallback (already in Obj 9) | Claude Code may expose session ID via env var; capture if present (forward compatibility) |
| `prompt_tokens` field on `tool_calls` table for the user-message turn that triggered the tool call (optional; null if not extractable) | Per-turn cost attribution |
| `error_code` integer field (0 = success, non-zero = tool error) | Captures failed tool calls for error-rate analysis |

### 2.2 Idempotency guarantees

- Schema init via `CREATE TABLE IF NOT EXISTS` — re-runs safe.
- `INSERT` only; no `UPDATE` or `DELETE` from hook script.
- Database file location operator-configurable via `ADNA_MEASUREMENT_DB` env var; defaults to `~/.adna/measurement/measurement.sqlite`.
- Hook returns exit code 0 even on internal errors (logs to stderr but does not break Claude Code session); failures degrade gracefully.

### 2.3 `--self-test` mode

```bash
./measurement_hook.sh --self-test
```

Behaviors:
1. Reads `~/.adna/measurement/self_test.json` (synthetic Read payload baked in §5).
2. Initializes a temp SQLite database at `/tmp/adna_measurement_selftest.sqlite`.
3. Runs the hook against the synthetic payload.
4. Queries the resulting row + asserts: `tool=Read`, `input_tokens=1234`, `file_path=/tmp/synthetic.md`, `re_read=0`, `file_loc=42`.
5. Prints `SELF-TEST PASS` (exit 0) or `SELF-TEST FAIL: <reason>` (exit 1) + lists the diff.
6. Cleans up `/tmp/adna_measurement_selftest.sqlite` on PASS.

Self-test gate per Obj 9 §4 §`--self-test mode`. M1.3 S2 step 1 requires PASS before live use.

---

## §3 SQLite schema (extends Obj 9 §4)

The Obj 9 `sessions` + `tool_calls` schema stays; add the following columns:

```sql
-- tool_calls additions
ALTER TABLE tool_calls ADD COLUMN content_hash TEXT;     -- 16-char SHA256 prefix; nullable
ALTER TABLE tool_calls ADD COLUMN prompt_tokens INTEGER; -- per-turn cost, nullable
ALTER TABLE tool_calls ADD COLUMN error_code INTEGER DEFAULT 0;  -- 0=success
ALTER TABLE tool_calls ADD COLUMN claude_session_id TEXT; -- env var capture if present

-- sessions: extend session_type enum coverage (no schema change; documented values)
-- session_type ∈ { A, B, C, D, E, other }
--   A = startup-only (CP-0..CP-2 only; no work)
--   B = P3 sub-group (reference + Q&A + 1-paragraph follow-up)
--   C = planning mission (heavy reads + design docs)
--   D = execution mission (less reads + more writes; verification harness)
--   E = AAR session (handoff-heavy; decision recording)
--   other = uncategorized

CREATE INDEX IF NOT EXISTS idx_tool_calls_re_read ON tool_calls(re_read);
CREATE INDEX IF NOT EXISTS idx_tool_calls_tool ON tool_calls(tool);
CREATE INDEX IF NOT EXISTS idx_sessions_type ON sessions(session_type);
```

`ALTER TABLE` is idempotent if guarded by a `pragma_table_info` check; init script verifies column presence before adding.

### 3.1 Aggregation queries (canonical examples for §5 calibration)

```sql
-- Per-session-type mean token cost (CP-4 totals)
SELECT s.session_type,
       COUNT(*) AS n,
       ROUND(AVG(SUM(t.input_tokens + t.output_tokens)), 0) AS mean_total_tokens
FROM sessions s JOIN tool_calls t USING (session_id)
GROUP BY s.session_type;

-- Pattern α — full vs excerpt ratio per file
SELECT file_path,
       AVG(read_limit * 1.0 / NULLIF(file_loc, 0)) AS excerpt_ratio,
       SUM(input_tokens) AS total_read_cost
FROM tool_calls
WHERE tool = 'Read' AND file_loc > 0
GROUP BY file_path
ORDER BY total_read_cost DESC
LIMIT 20;

-- Pattern β — re-read frequency per session
SELECT session_id, file_path, COUNT(*) AS reads
FROM tool_calls
WHERE tool = 'Read' AND re_read = 1
GROUP BY session_id, file_path
ORDER BY reads DESC;

-- Convergence model validation (per-level mean; requires sessions enriched with mission + campaign)
SELECT s.campaign, s.mission,
       COUNT(*) AS n_sessions,
       ROUND(AVG(per_session_total), 0) AS mean_session_tokens
FROM (
  SELECT session_id, SUM(input_tokens + output_tokens) AS per_session_total
  FROM tool_calls GROUP BY session_id
) t JOIN sessions s USING (session_id)
GROUP BY s.campaign, s.mission;
```

---

## §4 Privacy + safety

| Invariant | Mechanism |
|---|---|
| No file content captured | Script extracts only metadata fields (path, LOC, offset, limit, tool name, usage); never reads `tool_result.content` |
| Database outside vaults | `~/.adna/measurement/` is under `$HOME/.adna/`, NOT under any `.aDNA/` directory; no `.gitignore` rule needed in any vault |
| Operator-toggleable | Hook registration in `~/.claude/settings.json` OR `.claude/settings.local.json`; remove entry → measurement OFF; no vault changes |
| Per-session isolation | `ADNA_SESSION_ID` distinguishes sessions; database queries always filter on `session_id` |
| No federation | Local-only by default; LatticeScope.aDNA (M1.4+) handles federation as separate opt-in |
| Graceful failure | Hook exit-code 0 even on internal errors; stderr-only logging on failure; never breaks Claude Code session |
| Read-only at tool level | Hook fires AFTER tool call; cannot modify tool input/output |
| Sensitive paths excluded | Optional `.adna_measurement_ignore` file lists paths to skip recording (default: empty); honored by hook before INSERT |

---

## §5 `self_test.json` synthetic payload

```jsonc
{
  "tool": "Read",
  "input": {
    "file_path": "/tmp/synthetic.md",
    "offset": 0,
    "limit": 100
  },
  "usage": {
    "input_tokens": 1234,
    "output_tokens": 567,
    "cache_creation_input_tokens": 0,
    "cache_read_input_tokens": 8910
  },
  "result_truncated": false
}
```

Self-test setup creates a 42-line `/tmp/synthetic.md` file so `file_loc=42` is verifiable.

---

## §6 Settings.json configuration

### 6.1 Project-local (D2 default)

`.claude/settings.local.json` at workspace root (`~/aDNA/.claude/settings.local.json`):

```jsonc
{
  "hooks": {
    "PostToolUse": [
      {
        "command": "${HOME}/.adna/measurement/measurement_hook.sh",
        "tools": ["Read", "Bash", "Edit", "Write", "AskUserQuestion", "Glob", "Grep"]
      }
    ]
  }
}
```

### 6.2 Workspace-wide (D2 alternative)

`~/.claude/settings.json` (NOT recommended for M1.3 S2 default; future option after baseline data exists):

```jsonc
{
  "hooks": {
    "PostToolUse": [
      {
        "command": "${HOME}/.adna/measurement/measurement_hook.sh",
        "tools": ["Read", "Bash", "Edit", "Write", "AskUserQuestion", "Glob", "Grep"]
      }
    ]
  }
}
```

Differences: workspace-wide instruments every Claude Code session across all directories; project-local instruments only sessions starting in `~/aDNA/` and its descendants.

### 6.3 Tool selection rationale

Default tool list = `[Read, Bash, Edit, Write, AskUserQuestion, Glob, Grep]`. Excluded by default:
- `TaskCreate`/`TaskUpdate`/`TaskList`/`TaskGet`/`TaskOutput`/`TaskStop` — internal task-management; low signal
- `WebFetch`/`WebSearch` — separate I/O cost model; deferred to later expansion
- MCP tools (`mcp__*`) — server-specific; deferred
- `ExitPlanMode`/`EnterPlanMode` — control flow only
- `Skill` — skill invocation handled separately
- `PushNotification`/`Monitor`/`ScheduleWakeup` — non-context-affecting

M1.3 baseline expands tool list iteratively if blind spots emerge (per Obj 9 §4 hook spec).

---

## §7 Installation procedure (S2)

| Step | Action | Verification |
|---|---|---|
| 1 | `mkdir -p ~/.adna/measurement` | Directory exists |
| 2 | Write `measurement_hook.sh` from §2 outline; `chmod +x` | Script executable |
| 3 | Write `self_test.json` from §5 | File parses as JSON (`jq . self_test.json`) |
| 4 | Write `README.md` (toggle instructions + inspection examples from §3.1) | File present |
| 5 | Run `./measurement_hook.sh --self-test` | Output `SELF-TEST PASS` |
| 6 | Edit `.claude/settings.local.json` per §6.1 (D2 default) | File parses as JSON; hook entry under `hooks.PostToolUse` |
| 7 | Trigger a single Read in a fresh Claude Code session | Row appears in `~/.adna/measurement/measurement.sqlite` `tool_calls` table |
| 8 | Record S2 setup AAR fragment in mission session file | Activity log entry with hook install timestamp |

### 7.1 Rollback procedure

| Trigger | Action |
|---|---|
| Measurement noise / hook breaking sessions | Remove `hooks.PostToolUse` entry from `.claude/settings.local.json`; re-start Claude Code |
| Database corruption | `rm ~/.adna/measurement/measurement.sqlite` (re-init on next hook fire) |
| Full uninstall | Remove hook entry; `rm -rf ~/.adna/measurement/` |

No vault changes accumulate; rollback is mechanical and bounded.

---

## §8 Known limitations + risks

| Limitation | Impact | Mitigation |
|---|---|---|
| `cl100k_base` (tiktoken) approximates Anthropic tokenizer | Static Type A counts may drift ≤ 5% from live | Cross-check 2-3 vaults at S2; document drift |
| Hook fires after tool — startup-only loads (CLAUDE.md auto-load) not instrumented | CP-0 cannot be captured directly from hook | Approximate via post-startup `Read` of CLAUDE.md from session metadata; OR add `SessionStart` hook (Claude Code feature flag) at S2 if available |
| JSON payload schema undocumented (Obj 9 §4 inferred fields) | Hook may miss new fields in payload | S1 spec spot-validates against Claude Code docs; S2 self-test catches schema mismatches |
| Re-read detection requires `session_id` set | Wrong env var = no re-read tracking | Default `ADNA_SESSION_ID` to deterministic UTC timestamp on first fire per session |
| jq dependency | Not present on all systems | Install gate: `which jq` check at hook start; emit one-time warning if missing |
| SQLite write contention if multiple Claude Code sessions concurrent | Lock contention | SQLite uses WAL mode (`PRAGMA journal_mode=WAL`); high-concurrency safe up to ~100 writes/s |

---

## §9 Forward references

- **M1.3 S2 Obj 4** — installs from this spec.
- **M1.4 LatticeScope.aDNA** — consumes the `measurement.sqlite` schema; may extend with `file_category` + `cross_vault_hops` + `recipe_id` columns per Obj 9 §6 schema-fit checklist.
- **M2.1** (v8 P2) — context file audit consumes pattern α (full-vs-excerpt) rankings to identify split candidates.
- **M2.2** (v8 P2) — per-mission context budget Standing Order ratifies ADR-016 using this baseline as evidence.
- **M2.3** (v8 P2) — convergence-model validation pass extends across multiple campaigns.
- **M2.4** (v8 P2) — AGENTS.md heat map consumes the per-file load-count aggregation.

---

## §10 Self-reference + dual-audience

**Self-reference**: This hook spec is itself a Type C planning artifact authored during M1.3 S1, which is itself a Type C session. When the hook fires on this session's writes (assuming S2 install captures retrospectively from logged Read/Write metadata), it measures the act of authoring its own spec. Standing Order #8 honored recursively.

**Dual-audience**:
- **Developer reads**: §2 (bash + SQLite + JSON), §6 (settings.json), §7 (install steps), §3.1 (canonical queries). Directly executable.
- **Newcomer reads**: §0 (why this hook exists; what it enables vs. doesn't), §4 (privacy invariants in plain language), §7.1 (rollback is mechanical and bounded). Reassures: this is measurement, not surveillance; reversal is trivial.

Both audiences land at: **measurement is opt-in, bounded, read-only, and reversible.**

---

## §11 Status

**Complete.** Ready for S2 installation. Self-test contract specified; rollback procedure bounded; known limitations documented. Cross-link discipline (≥ 2 wikilinks per Standing Order #10): Obj 9 §4 + M2.x forward-refs + ADR-016 forecast.
