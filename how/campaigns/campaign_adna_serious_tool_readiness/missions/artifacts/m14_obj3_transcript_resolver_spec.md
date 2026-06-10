---
type: artifact
artifact_type: design_spec
campaign: campaign_adna_serious_tool_readiness
mission: mission_adna_str_p1_m14_latticescope_schema
objective: 3
session: S1
created: 2026-05-18
updated: 2026-05-18
status: complete
last_edited_by: agent_stanley
tags: [artifact, mission_deliverable, m14, obj3, transcript_resolver, ingest_transcript_py, amendment_d_load_bearing, jsonl_parsing, sanitized_cwd, dedup_message_id, python_design, privacy_metadata_only]
related_artifacts:
  - ../mission_adna_str_p1_m14_latticescope_schema.md
  - m14_obj2_schema_v011_ddl.md                        # Obj 2 (sessions.transcript_path column = this script's destination)
  - ../m13_obj7_calibration_output.md                  # §5.2 Amendment D rationale
  - ../m13_obj6_pattern_ranking.md                     # §2 transition tax doctrine (the kT this script will authoritize)
downstream_consumers:
  - mission_adna_str_p2_m23_convergence_validation     # M2.3 consumes session-level usage reports from this script
  - mission_adna_str_p2_m21_context_audit              # M2.1 compares pre/post-backfill kT deltas to refine top-3 queue
---

# M14 Obj 3 — Transcript Resolver + `ingest_transcript.py` Design Spec

> **Deliverable 3 of M1.4** (S1). Specifies (a) the **sanitized-cwd resolver** that converts working-directory paths into Claude Code transcript locations, (b) the **hook-side `transcript_path` resolution** at session-init (Amendment D wiring; Obj 4 implements), and (c) the **`ingest_transcript.py` post-hoc script** that reads `.jsonl` transcripts and emits authoritative per-turn token usage reports.
>
> **Per [[m14_obj2_schema_v011_ddl.md|Obj 2]] §1.3**: v0.1.1 schema bump is minimal — `transcript_path` on `sessions` + Amendments B/C only. **ingest_transcript.py does NOT overwrite `tool_calls.input_tokens` approximation rows** at v0.1.1 — it produces JSON usage reports that downstream consumers (M2.3, M2.1) read alongside SQLite for authoritative aggregates. Per-tool authoritative attribution requires a turn↔tool-call mapping that is best deferred to v0.2 schema (LatticeScope sub-campaign MLS-1 owns).

---

## §1 Sanitized-cwd resolver

### 1.1 The encoding rule (empirically verified)

Claude Code stores per-project transcripts at `~/.claude/projects/<sanitized-cwd>/<session-uuid>.jsonl` where `<sanitized-cwd>` is the current working directory with **`/` AND `.` both replaced by `-`**.

```
Live confirmation (M1.4 S1 inspection):
  cwd: /Users/stanley/aDNA/aDNA.aDNA
  sanitized: -Users-stanley-lattice-aDNA-aDNA
  transcript dir: ~/.claude/projects/-Users-stanley-lattice-aDNA-aDNA/
```

### 1.2 Resolver algorithm (bash, for hook-side use)

```bash
# Resolve sanitized cwd: leading slash + path separators + dots all become hyphens
sanitize_cwd() {
  local cwd="${1:-$PWD}"
  # Real-path resolution handles symlinks (`~/aDNA` → `/Users/stanley/aDNA`)
  cwd=$(cd "$cwd" 2>/dev/null && pwd -P || echo "$cwd")
  # Replace / and . with - (single sed pass)
  printf '%s' "$cwd" | sed 's|[/.]|-|g'
}

resolve_transcript_path() {
  local sanitized session_id transcript_dir transcript_file
  sanitized=$(sanitize_cwd)
  session_id="${1:?session_id required}"
  transcript_dir="${HOME}/.claude/projects/${sanitized}"
  transcript_file="${transcript_dir}/${session_id}.jsonl"
  if [[ -f "$transcript_file" ]]; then
    printf '%s\n' "$transcript_file"
    return 0
  fi
  # Fallback: scan known alternate-encoding patterns
  # (Empirically: none observed at M1.4 S1; reserved for forward compatibility)
  return 1
}
```

### 1.3 Edge cases

| Case | Behavior |
|---|---|
| Symlinked `cwd` | `pwd -P` resolves to real path before sanitization |
| Case-sensitive vs APFS case-insensitive | macOS APFS is case-preserving but case-insensitive by default; sanitization uses the exact case from `pwd` |
| `cwd` with hyphens already | Acceptable; sanitization is non-reversible by design (we don't need to reverse it) |
| Missing transcript file | Resolver returns exit 1; hook logs `transcript_path = NULL` to sessions row |
| Session UUID not yet known at hook entry | Hook reads `.session_id` from PostToolUse JSON payload (line 134 of current hook); falls back to `ADNA_SESSION_ID` env then `date` |

---

## §2 Hook-side `transcript_path` resolution (Amendment D wiring; Obj 4 implements)

### 2.1 Hook insertion point

Current hook (`measurement_hook.sh`) extracts `CLAUDE_SESSION_ID` at line 134:

```bash
CLAUDE_SESSION_ID=$(jget '(.session_id // "")')
```

Amendment E (Obj 4) adds `INSERT OR IGNORE` into `sessions` on first-call-of-session. This is the right place to resolve and store `transcript_path` (it only runs ONCE per session).

### 2.2 Updated hook flow (S2 Obj 4 implementation target)

```bash
# After CLAUDE_SESSION_ID extraction (~line 134)
# Amendment D + E combined: first-call-of-session detection + transcript_path resolution
if [[ -n "$CLAUDE_SESSION_ID" ]]; then
  TRANSCRIPT_PATH=$(resolve_transcript_path "$CLAUDE_SESSION_ID" 2>/dev/null || echo "")
  STARTED_AT=$(date -u +%Y-%m-%dT%H:%M:%SZ)
  # SQL-escape transcript path
  TRANSCRIPT_PATH_SQL=$([[ -n "$TRANSCRIPT_PATH" ]] && printf "'%s'" "$(sql_esc "$TRANSCRIPT_PATH")" || printf "NULL")
  sqlite3 "$DB" <<SQL 2>>"$STDERR_LOG" || true
INSERT OR IGNORE INTO sessions (session_id, started_at, transcript_path)
VALUES ('$(sql_esc "$CLAUDE_SESSION_ID")', '$STARTED_AT', $TRANSCRIPT_PATH_SQL);
SQL
fi
```

### 2.3 Idempotency

`INSERT OR IGNORE` is a no-op when the session_id already exists; safe on every PostToolUse fire. The first call of a session creates the row; subsequent calls leave it intact (resolver re-fires but does no work).

### 2.4 Acceptance test (Obj 4)

```bash
# Post-edit, run synthetic Claude Code payload through the hook:
#   - Payload includes session_id = "test-uuid-12345"
#   - Hook should: (1) INSERT into sessions; (2) populate transcript_path if a matching file exists
# Verify:
sqlite3 "$DB" "SELECT session_id, started_at, transcript_path FROM sessions WHERE session_id='test-uuid-12345';"
```

---

## §3 `ingest_transcript.py` — post-hoc transcript ingestion script

### 3.1 Purpose

Read Claude Code `.jsonl` transcripts and emit **per-session usage reports** containing authoritative per-turn token attribution. Reports live at `~/.adna/measurement/reports/session_<session_id>_usage.json`.

**The script does NOT modify SQLite `tool_calls.input_tokens`** at v0.1.1 — preserving M1.3's approximation provenance. Downstream consumers (M2.3 cross-campaign retrospective, M2.1 context-file audit refinement) read JSON reports alongside SQLite for authoritative aggregates.

### 3.2 CLI invocation

```bash
./ingest_transcript.py --help
./ingest_transcript.py --self-test                          # synthetic fixture; no live data
./ingest_transcript.py --session <session_uuid>             # one specific session
./ingest_transcript.py --since 2026-05-18                   # all sessions modified after this date
./ingest_transcript.py --all                                # all transcripts in project dir (D3 default A)
./ingest_transcript.py --all --dry-run                      # parse + summarize but write no reports
```

### 3.3 Dependencies

- Python 3.11+ (stdlib only — `json`, `os`, `sys`, `argparse`, `pathlib`, `datetime`, `collections`)
- No `pip install` required (single-file script; portable across operator nodes)

### 3.4 Algorithm

```python
#!/usr/bin/env python3
# ingest_transcript.py — post-hoc Claude Code .jsonl transcript ingestion
# Spec: aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/
#        missions/artifacts/m14_obj3_transcript_resolver_spec.md
# Privacy: reads jsonl; writes ONLY token-usage metadata to JSON reports.
# Conversation content is NEVER copied to reports.

from __future__ import annotations
import json, sys, os, argparse, sqlite3
from pathlib import Path
from collections import defaultdict
from datetime import datetime, timezone

HOME = Path.home()
DEFAULT_DB = HOME / ".adna" / "measurement" / "measurement.sqlite"
REPORTS_DIR = HOME / ".adna" / "measurement" / "reports"

def sanitize_cwd(cwd: str | Path) -> str:
    """Encode cwd like Claude Code: / and . both become -."""
    return str(cwd).replace("/", "-").replace(".", "-")

def find_project_transcripts(cwd: str | Path) -> list[Path]:
    """All .jsonl transcripts for a given working directory."""
    sanitized = sanitize_cwd(cwd)
    dir_path = HOME / ".claude" / "projects" / sanitized
    return sorted(dir_path.glob("*.jsonl")) if dir_path.exists() else []

def parse_transcript(path: Path) -> dict:
    """Stream-parse one .jsonl; aggregate turn-level usage.

    Returns:
        {
            "session_id": str (from filename UUID),
            "transcript_path": str,
            "started_at": ISO timestamp (first message timestamp if available, else file mtime),
            "turn_count": int,
            "totals": {
                "input_tokens": int,
                "cache_creation_input_tokens": int,
                "cache_read_input_tokens": int,
                "output_tokens": int,
            },
            "turns": [
                {
                    "messageId": str (dedup key),
                    "input_tokens": int,
                    "cache_creation_input_tokens": int,
                    "cache_read_input_tokens": int,
                    "output_tokens": int,
                    "tool_calls": [list of tool names in this turn, if extractable],
                },
                ...
            ]
        }
    """
    session_id = path.stem
    seen_message_ids = set()  # Dedup: jsonl repeats same usage 3× per iteration
    turns = []
    totals = defaultdict(int)

    with path.open("r", encoding="utf-8") as f:
        for line_num, line in enumerate(f, start=1):
            line = line.strip()
            if not line:
                continue
            try:
                obj = json.loads(line)
            except json.JSONDecodeError as e:
                print(f"WARN: {path.name} line {line_num} parse error: {e}", file=sys.stderr)
                continue

            if obj.get("type") != "assistant":
                continue

            msg = obj.get("message", {})
            message_id = msg.get("id") or obj.get("messageId")
            if not message_id or message_id in seen_message_ids:
                continue  # Skip duplicates (Claude Code logs same usage per iteration)
            seen_message_ids.add(message_id)

            usage = msg.get("usage", {})
            turn_data = {
                "messageId": message_id,
                "input_tokens": usage.get("input_tokens", 0),
                "cache_creation_input_tokens": usage.get("cache_creation_input_tokens", 0),
                "cache_read_input_tokens": usage.get("cache_read_input_tokens", 0),
                "output_tokens": usage.get("output_tokens", 0),
            }

            # Extract tool calls from message.content blocks (if present)
            tool_calls = []
            for block in msg.get("content", []) if isinstance(msg.get("content"), list) else []:
                if isinstance(block, dict) and block.get("type") == "tool_use":
                    tool_calls.append(block.get("name", "?"))
            turn_data["tool_calls"] = tool_calls
            turns.append(turn_data)

            for k in ("input_tokens", "cache_creation_input_tokens",
                      "cache_read_input_tokens", "output_tokens"):
                totals[k] += turn_data[k]

    return {
        "session_id": session_id,
        "transcript_path": str(path),
        "started_at": datetime.fromtimestamp(path.stat().st_mtime, tz=timezone.utc).isoformat(),
        "turn_count": len(turns),
        "totals": dict(totals),
        "turns": turns,
    }

def write_report(parsed: dict, dry_run: bool = False) -> Path | None:
    REPORTS_DIR.mkdir(parents=True, exist_ok=True)
    out = REPORTS_DIR / f"session_{parsed['session_id']}_usage.json"
    if dry_run:
        return None
    out.write_text(json.dumps(parsed, indent=2, sort_keys=True))
    return out

def cmd_self_test() -> int:
    """Synthesize 3-turn jsonl fixture; parse it; verify expected counts."""
    fixture_lines = [
        json.dumps({"type": "file-history-snapshot"}),
        json.dumps({"type": "user", "message": {"content": "test"}}),
        json.dumps({
            "type": "assistant",
            "message": {
                "id": "msg-1",
                "content": [{"type": "tool_use", "name": "Read"}],
                "usage": {"input_tokens": 100, "cache_read_input_tokens": 500, "output_tokens": 50},
            },
        }),
        # Duplicate of msg-1 (iteration log) — must be deduped
        json.dumps({
            "type": "assistant",
            "message": {
                "id": "msg-1",
                "usage": {"input_tokens": 100, "cache_read_input_tokens": 500, "output_tokens": 50},
            },
        }),
        json.dumps({
            "type": "assistant",
            "message": {
                "id": "msg-2",
                "content": [{"type": "tool_use", "name": "Bash"}],
                "usage": {"input_tokens": 200, "cache_read_input_tokens": 1000, "output_tokens": 100},
            },
        }),
    ]
    fixture = Path("/tmp/ingest_transcript_selftest.jsonl")
    fixture.write_text("\n".join(fixture_lines) + "\n")
    parsed = parse_transcript(fixture)
    fixture.unlink()
    expected_turns = 2
    expected_input_total = 300
    expected_cache_read_total = 1500
    if (parsed["turn_count"] == expected_turns
        and parsed["totals"]["input_tokens"] == expected_input_total
        and parsed["totals"]["cache_read_input_tokens"] == expected_cache_read_total):
        print("SELF-TEST PASS")
        return 0
    print(f"SELF-TEST FAIL: {parsed}")
    return 1

def cmd_session(session_id: str, dry_run: bool = False) -> int:
    cwd = Path.cwd()
    transcripts = find_project_transcripts(cwd)
    matches = [t for t in transcripts if t.stem == session_id]
    if not matches:
        print(f"No transcript for session {session_id} under {cwd}", file=sys.stderr)
        return 1
    parsed = parse_transcript(matches[0])
    out = write_report(parsed, dry_run=dry_run)
    print(f"session={session_id} turns={parsed['turn_count']} totals={parsed['totals']} report={out}")
    return 0

def cmd_all(since: str | None = None, dry_run: bool = False) -> int:
    cwd = Path.cwd()
    transcripts = find_project_transcripts(cwd)
    if since:
        cutoff = datetime.fromisoformat(since).replace(tzinfo=timezone.utc)
        transcripts = [t for t in transcripts
                       if datetime.fromtimestamp(t.stat().st_mtime, tz=timezone.utc) >= cutoff]
    summary = {
        "processed": 0,
        "total_turns": 0,
        "total_input_kT": 0.0,
        "total_cache_read_kT": 0.0,
        "total_output_kT": 0.0,
    }
    for t in transcripts:
        parsed = parse_transcript(t)
        if not dry_run:
            write_report(parsed)
        summary["processed"] += 1
        summary["total_turns"] += parsed["turn_count"]
        summary["total_input_kT"] += parsed["totals"]["input_tokens"] / 1000
        summary["total_cache_read_kT"] += parsed["totals"]["cache_read_input_tokens"] / 1000
        summary["total_output_kT"] += parsed["totals"]["output_tokens"] / 1000

    print("=== Ingestion summary ===")
    print(f"Transcripts processed: {summary['processed']}")
    print(f"Total turns:           {summary['total_turns']}")
    print(f"Total input tokens:    {summary['total_input_kT']:.1f} kT")
    print(f"Total cache_read:      {summary['total_cache_read_kT']:.1f} kT")
    print(f"Total output:          {summary['total_output_kT']:.1f} kT")
    print(f"Reports written:       {0 if dry_run else summary['processed']} (at {REPORTS_DIR})")
    return 0

def main():
    p = argparse.ArgumentParser(description=__doc__)
    g = p.add_mutually_exclusive_group(required=True)
    g.add_argument("--self-test", action="store_true")
    g.add_argument("--session", help="One session UUID")
    g.add_argument("--all", action="store_true", help="All transcripts for current cwd")
    p.add_argument("--since", help="Only process transcripts modified after YYYY-MM-DD (used with --all)")
    p.add_argument("--dry-run", action="store_true", help="Parse + summarize but do not write reports")
    args = p.parse_args()

    if args.self_test:
        sys.exit(cmd_self_test())
    if args.session:
        sys.exit(cmd_session(args.session, dry_run=args.dry_run))
    if args.all:
        sys.exit(cmd_all(since=args.since, dry_run=args.dry_run))

if __name__ == "__main__":
    main()
```

### 3.5 Output format — `session_<uuid>_usage.json`

```json
{
  "session_id": "2038afdf-ceb2-4c8c-b066-d526d19b807f",
  "transcript_path": "/Users/stanley/.claude/projects/-Users-stanley-lattice-aDNA-aDNA/2038afdf-ceb2-4c8c-b066-d526d19b807f.jsonl",
  "started_at": "2026-05-18T13:45:00+00:00",
  "turn_count": 47,
  "totals": {
    "input_tokens": 1245,
    "cache_creation_input_tokens": 89234,
    "cache_read_input_tokens": 1487023,
    "output_tokens": 38420
  },
  "turns": [
    {
      "messageId": "msg_abc123",
      "input_tokens": 6,
      "cache_creation_input_tokens": 36768,
      "cache_read_input_tokens": 48702,
      "output_tokens": 2356,
      "tool_calls": ["Read", "Bash"]
    }
  ]
}
```

---

## §4 Turn-vs-tool-call alignment (the architectural finding)

### 4.1 What the jsonl actually contains

Empirical inspection (M1.4 S1, 2026-05-19T04:48Z, transcript `2038afdf-ceb2-4c8c-b066-d526d19b807f.jsonl`):

- **One `usage` block per assistant turn** (not per tool call). A turn that emits 3 tool calls shares ONE `input_tokens` count.
- **Same usage logged 3× per turn** under different `iterations[].input_tokens` entries — but the outer `.message.usage` block is the canonical one. Dedup by `message.id`.
- **`tool_use` content blocks** in `message.content` list the tools called in that turn. Each gets its own ID and parameters but no separate usage attribution.

### 4.2 Implication for per-tool token attribution

Per-tool authoritative tokens require either:
1. **Synthetic allocation rule** — e.g., split the turn's `input_tokens` evenly across its N tool calls. Heuristic; not authoritative.
2. **Differential measurement** — call API with N tools, then N-1 tools; subtract; expensive and only works for synthetic runs.
3. **Architectural change at Claude Code** — request per-tool usage in PostToolUse payload (upstream contribution at Anthropic; out of M1.4 scope).

**M1.4 v0.1.1 choice**: do NEITHER. The script reports turn-level + session-level aggregates; per-tool attribution stays at M1.3 approximation level. The convergence model's level of analysis is per-session (Type A/B/C/D) — turn-level granularity is sufficient.

### 4.3 Future per-tool work (deferred to MLS-1 v0.2)

LatticeScope sub-campaign MLS-1 (collector + schema v0.2) can either:
- Adopt allocation-rule attribution (document the heuristic in ADR-007)
- File upstream contribution with Anthropic for per-tool PostToolUse usage
- Build a `turns` table and join via turn_id on `tool_calls`

Not in M1.4 scope.

---

## §5 Privacy notes (Standing Order #2 — data integrity)

### 5.1 What the script reads vs writes

| Read source | Written destination | Content scope |
|---|---|---|
| `~/.claude/projects/.../*.jsonl` | (in-memory only) | full conversation including user prompts + assistant content + tool inputs |
| Parsed `usage` block per turn | `~/.adna/measurement/reports/session_*.json` | tokens ONLY (input/output/cache_*) + `messageId` + tool names |
| Parsed `content` blocks | (in-memory only; discarded) | NEVER written; only `block.type == 'tool_use'` `.name` is captured for tool-call list |

### 5.2 What the script NEVER does

- ❌ Never writes user prompts to reports or SQLite
- ❌ Never writes assistant text content to reports or SQLite
- ❌ Never writes tool call parameters (file paths, bash commands, edit content) to reports
- ❌ Never transmits data over network (local-only; no federation at v0.1.1)
- ❌ Never modifies the source transcript files (read-only access)

### 5.3 What the report contains

Only token-usage metadata + tool-name list per turn. A leaked report exposes session size + tool-mix shape but not session content.

### 5.4 Standing Order #2 check

This invariant matches the M1.3 hook's posture (file metadata only; no content captured). The script extends the principle to post-hoc ingestion. Standing Order #2 (data integrity) honored end-to-end.

---

## §6 Backfill scope per D3 default A

D3 default = **A: All existing** — process all `~/.claude/projects/-Users-stanley-lattice-aDNA-aDNA/*.jsonl` files at S2 execution.

### 6.1 Expected dataset (as of M1.4 S1)

```
# Live inspection at M1.4 S1 (2026-05-19T04:48Z+):
ls ~/.claude/projects/-Users-stanley-lattice-aDNA-aDNA/ | wc -l
# → ~80+ .jsonl transcripts (M11+ sessions + earlier work)
```

Each transcript is 1-2 MB; ingestion is single-pass + streaming; estimated <60 seconds total for full backfill.

### 6.2 Output volume

- 80+ JSON reports in `~/.adna/measurement/reports/` (each <100 KB)
- Total disk usage: <10 MB
- Reports are append-only (idempotent; second run overwrites identical content)

### 6.3 Cross-vault transcripts (out of scope at v0.1.1)

Each vault has its own sanitized-cwd directory. M1.4 v0.1.1 processes ONLY `aDNA.aDNA` transcripts. Cross-vault ingestion deferred to MLS-1 (when federation/cross-node aggregation is in scope per LatticeScope sub-campaign Phase 1).

---

## §7 Output sanity — summary table format

End-of-run summary printed to stdout (and also written to `~/.adna/measurement/reports/ingestion_log_<YYYYMMDD_HHMMSS>.md` for audit):

```markdown
# Ingestion log — 2026-05-19T05:30:00Z

| Metric | Value |
|---|---|
| Transcripts processed | 87 |
| Total turns | 4,201 |
| Total input tokens | 156.3 kT |
| Total cache_creation_input_tokens | 8,234.5 kT |
| Total cache_read_input_tokens | 142,567.8 kT |
| Total output_tokens | 3,892.1 kT |
| Reports written | 87 |
| Reports location | ~/.adna/measurement/reports/ |
| Wall-clock | 47.3 sec |
| Dedup ratio | 3.0× (raw assistant entries / unique messageIds) |
```

### 7.1 Approximation-vs-authoritative comparison (Obj 7 input)

The validation output at S3 (Obj 7) joins these reports against SQLite tool_calls approximations:

```sql
-- SQLite query (Obj 7 will build this against the JSON reports)
SELECT session_id,
       SUM(input_tokens) AS approx_input_kT
FROM tool_calls
GROUP BY session_id;

-- vs JSON report aggregate (per session)
-- Delta tells us how much the approximation undercounted
```

Expected finding: cache_read_input_tokens dominate by 100×+ over input_tokens (cache hits are massive); approximation severely undercount cache hits → convergence-model verdict refines.

---

## §8 Acceptance criteria (this artifact's contribution)

This artifact discharges 3 of the 11 M1.4 acceptance criteria:

| Mission acceptance criterion | Discharged here? | Source |
|---|---|---|
| `ingest_transcript.py --self-test` PASS (synthetic fixture) | spec → S2 executes | §3.4 `cmd_self_test` |
| `ingest_transcript.py --all` executes; ≥14 rows reconciled | spec → S2 executes | §3.4 `cmd_all` + §6 backfill scope |
| Idempotency: second `--all` invocation = 0 new writes (or content-identical) | spec → S2 verifies | §3.4 (write_report overwrites; content stable given deterministic parsing) |

Remaining 8 criteria discharged by Obj 2 (schema DDL) + Obj 4 (hook edits) + Obj 6 (Amendments A/B/C wiring) + Obj 7 (validation + AAR + token_baselines refresh).

---

## §9 Forward references

- **M2.3** (cross-campaign convergence retrospective) consumes JSON reports at `~/.adna/measurement/reports/` for CP-2..CP-4 measurement — Amendment D LOAD-BEARING unlock realized.
- **M2.1** (context audit) cross-references pre/post-backfill kT deltas to refine top-3 optimization queue prioritization.
- **MLS-1** (LatticeScope sub-campaign first-mission) reconciles v0.1.1 vs v0.2 schema; per-tool attribution policy ratifies as ADR-007 amendment or new ADR.
- **ADR-007** (schema-bump policy, MLS-2) consumes §2.1 PRAGMA-versioning convention + this script's idempotency pattern as prior art.

## §10 Cross-references

- [[../mission_adna_str_p1_m14_latticescope_schema.md|mission_adna_str_p1_m14_latticescope_schema.md]] — parent mission spec
- [[m14_obj2_schema_v011_ddl.md|m14_obj2_schema_v011_ddl.md]] — Obj 2 (sessions.transcript_path schema target)
- [[../m13_obj7_calibration_output.md|m13_obj7_calibration_output.md]] §5.2 — Amendment D rationale (LOAD-BEARING)
- [[../m13_obj6_pattern_ranking.md|m13_obj6_pattern_ranking.md]] §2 — transition tax doctrine (kT this script will authoritize)
- `~/.claude/projects/-Users-stanley-lattice-aDNA-aDNA/*.jsonl` — backfill source (read-only)
- `~/.adna/measurement/reports/` — script output destination (new directory; created on first run)
- `~/.adna/measurement/ingest_transcript.py` — script production target at S2 Obj 5

## §11 Status

**S1 deliverable 3 complete.** Sanitized-cwd resolver algorithm + hook-side wiring + Python script design + privacy invariants + backfill scope + summary format all specified. S2 Obj 5 implements + executes per D3 default A (all existing transcripts).

**Forward path**: Obj 4 (S2) implements hook-side Amendment D using §2.2 wiring. Obj 5 (S2) implements `ingest_transcript.py` from §3.4 algorithm. Obj 7 (S3) joins SQLite approximations against JSON reports to produce convergence-model verdict refinement.
