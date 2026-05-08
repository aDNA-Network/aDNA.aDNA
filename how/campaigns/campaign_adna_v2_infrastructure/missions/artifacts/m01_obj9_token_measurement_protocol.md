---
type: artifact
artifact_type: measurement_protocol
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_planning_01
objective: 9
target_missions:
  - M09  # context/token audit execution; runs the protocol against 19-vault baseline
  - M10  # LatticeScope.aDNA — schema design consumes this protocol via the Obj 9 → Obj 10 gate
created: 2026-05-08
updated: 2026-05-08
status: complete
last_edited_by: agent_stanley
tags: [artifact, mission_deliverable, m01, obj9, measurement_protocol, token_audit, claude_code_hooks, post_tool_use, sqlite, convergence_model, latticescope_input, dual_audience]
related_artifacts:
  - m01_obj0_ecosystem_matrix.md           # source: 19-vault inventory — defines the baseline measurement population
  - m01_obj1_current_state.md              # source: current state baseline (~75K tokens of context library)
  - m01_obj3_node_adna_design.md           # source: node.aDNA/what/context/ is the canonical destination for token_baselines.md
  - m01_obj8_upgrade_guide_v6_to_v7.md     # sibling — upgrade guide §4 mentions LatticeScope which consumes this protocol
related_decisions:
  - adr_004_campaign_home_stays_in_adna_adna.md  # campaign home = aDNA.aDNA; Obj 9 protocol authored here
  - adr_005_three_way_vault_boundary.md
  # ADR-008 (airlock stub, M03) — forward-reference for measurement of cross-vault airlock entry costs
  # M10 will likely produce ADR-001 (LatticeScope language choice) consuming this protocol
---

# M01 Obj 9 — Context/Token Measurement Protocol

> **Deliverable 14 of M01** (per [[../mission_adna_infra_planning_01.md|mission_adna_infra_planning_01]] §Deliverables row 14). The methodology M09 runs to produce the actual 19-vault token baseline + optimization opportunity catalog. The protocol is the *measurement plan*; the data lives at `node.aDNA/what/context/token_baselines.md` once M09 executes.
>
> **Gate**: This protocol's design output feeds [[../mission_adna_infra_planning_01.md|mission spec]] Obj 9 → Obj 10 gate (lines 633–639). Before the LatticeScope.aDNA schema design lands at M10, the operator reviews token-baseline findings and confirms that the proposed schema captures the metrics this protocol identifies. If the baseline surfaces metrics the schema can't capture (e.g., context-graph traversal depth, per-AGENTS.md load cost, recipe-vs-manual cost differential), Obj 10's schema design adjusts before the LatticeScope sub-campaign doc is drafted.

---

## §0 Why this protocol exists

Standing Order #3 (CLAUDE.md) declares: *"Context budget is doctrine."* Sessions are designed around the convergence model (Campaign → Mission → Objective) on the assumption that hierarchical decomposition reduces token cost faster than flat exploration. Missions estimate effort in "sessions" — a count, not a measurement.

**The doctrine has never been measured.** No vault tracks actual token consumption per session, mission, or campaign type. We don't know whether the convergence model holds or whether the hierarchical navigation overhead cancels its supposed token savings. We don't know which read patterns are expensive vs cheap. We don't know what fraction of a typical session's tokens are spent on startup vs work vs handoff. Without this data, "fits in one session" is a guess; "this campaign will take 5–6 sessions" is folklore.

This protocol changes that. It defines:

1. A **cold-start baseline** for three representative session types — establishes what a clean session actually costs.
2. **High-cost pattern identification** — which read/load behaviors burn tokens fastest.
3. A **convergence model validation** — does the Campaign → Mission → Objective hierarchy actually reduce token cost, and by how much?
4. An **instrumentation spec** — Claude Code `PostToolUse` hook → local SQLite store; what to capture, what to exclude.
5. A **calibration output** — revised effort-estimate formula + per-mission-type token profile + top-3 optimization opportunities.

All five outputs are self-contained measurements producible by M09. The protocol does not require LatticeScope to exist — LatticeScope (M10) consumes the protocol's output to design its collector schema.

---

## §1 Cold-start baseline

Run three representative session types, instrument from t=0 to session close, record cumulative input/output tokens at five checkpoints per session.

### Three session-type definitions

| Type | Name | Description | Representative example |
|---|---|---|---|
| **A** | Startup-only | Cold start; load CLAUDE.md + STATE.md + active mission file; greet operator; receive task; **do no work**. Session ends after Q&A clarification. | Operator says "what's the state?" — agent responds with SITREP and waits |
| **B** | P3 sub-group | Cold start + load reference excerpt + Q&A round + record one decision in a coord memo / governance file | A typical Operation Rosetta P3 session that reads an ADR + writes a 1-paragraph follow-up |
| **C** | Planning mission | Cold start + read 8–12 files + author 2–3 design documents (e.g., this campaign's S2 S5) | Stage 2 Sessions of `mission_adna_infra_planning_01` (this session) |

### Five measurement checkpoints (per session)

| CP | When | What is recorded |
|---|---|---|
| **CP-0** | Immediately after CLAUDE.md auto-load | Tokens consumed by CLAUDE.md alone |
| **CP-1** | After STATE.md + active-mission file load | Tokens consumed by orientation set |
| **CP-2** | After first user task statement | Cumulative input tokens through opening exchange |
| **CP-3** | After last `Read` / `Bash` / `Edit` tool call but before final SITREP | Cumulative tokens during work phase |
| **CP-4** | At session close | Total session tokens (input + output, separately) |

### Instrumentation source

| Source | Use it for | Trade-off |
|---|---|---|
| Claude Code's built-in context display (`/context` slash command, status line) | Quick checks during a live session | Approximate; not machine-readable in v6.0 |
| Anthropic API `usage` field | Authoritative per-call counts (input / output / cache_creation / cache_read) | Requires API-mode session OR PostToolUse hook scraping |
| `PostToolUse` hook + local file logger | Per-tool-call append log; replay-able | Requires hook configuration (per §4) |
| Manual checkpoint snapshot | Type A baseline runs (small N) | Operator labor; not scalable |

**Recommended**: For the M09 baseline pass, use the API `usage` field via the `PostToolUse` hook (per §4) — produces canonical machine-readable data. Manual checkpoints are acceptable for the smallest Type A runs.

### Type A baseline acquisition plan

Run Type A across **all 19 active vaults** (per [[m01_obj0_ecosystem_matrix.md|ecosystem matrix §1]]). The Type A measurement reveals each vault's *startup overhead* — the cost of orientation before any work. Vaults with bloated CLAUDE.md, oversized active-mission files, or deeply nested AGENTS.md trees will show as outliers.

Output table (filled in M09):

| Vault | CLAUDE.md tokens | STATE.md tokens | Active mission tokens | CP-0 | CP-1 | CP-2 | Total Type A (CP-4) |
|---|---|---|---|---|---|---|---|
| `aDNA.aDNA` | _ | _ | _ | _ | _ | _ | _ |
| `Spacemacs.aDNA` | _ | _ | _ | _ | _ | _ | _ |
| ... (17 more rows) | | | | | | | |

### Type B + C baseline acquisition plan

Type B + C are run **once per representative campaign** rather than per vault, because campaign type is the dominant variable (planning campaigns cost more than execution campaigns). Recommended runs:

| Type | Campaign source | Rationale |
|---|---|---|
| B | Operation Rosetta Phase 7 D-cycle | Many sessions, well-bounded scope (read references + record decisions) |
| B | Wilhelm AI Initiative MW2 voice mapping | Cross-vault Q&A pattern; tests that handoff cost |
| C | This campaign's S2 S1 (Obj 0 + Obj 1) | Heavy planning session; large file production |
| C | This campaign's S2 S5 (this session — Obj 8 + Obj 9) | Re-run with instrumentation; calibrates planning cost |
| C | RareHarness P1 closeout MP1-11 | Platform-category planning mission; cross-domain reads |

Five runs total; ~25 hours of instrumented sessions (~5 hours each) — produces enough variance data to fit a per-mission-type token-profile distribution.

---

## §2 High-cost pattern identification

Four patterns are *suspected* high-cost; M09 measures and ranks them.

### Pattern α — Full file load when only an excerpt is needed

**Hypothesis**: Reading a 2000-line file when only one section is referenced costs ~5–10× more tokens than reading the relevant section via `offset` + `limit`.

**Measurement**:

1. For each `Read` tool call in the M09 baseline runs, record: total file LOC, lines actually read (offset/limit if any), and tokens consumed.
2. Compute the *excerpt ratio*: `(lines_read / total_LOC) × token_cost`. A ratio < 0.3 means significant savings.
3. Rank file types by mean excerpt ratio: which files are read fully when partial would suffice?

**Expected outliers**:

- `adna_standard.md` (1483 lines, often loaded fully for footer-version checks) — should be excerpt-loadable.
- Mission spec files (300–800 lines, often loaded fully for §Obj X reads) — should be excerpt-loadable per-section.
- AGENTS.md files (50–300 lines, usually fine to load fully) — likely not an outlier.

### Pattern β — Re-reading files already in context

**Hypothesis**: Within a session, agents re-read files because they've forgotten the file is in context (or because compaction has truncated it).

**Measurement**:

1. Hash each `Read` tool call's file path. Track file → first-read timestamp.
2. Count re-reads (same path, second+ time within the same session).
3. For each re-read, measure: was the previous read excerpt or full? Was compaction recent?

**Expected outliers**:

- STATE.md re-reads when sessions span hours (compaction-driven; legitimate).
- CLAUDE.md re-reads (rarely justified — it's auto-loaded).
- Mission file re-reads after intermediate Edit calls (often unnecessary; the Edit tool's file-state tracking should suffice per `<edited_file_state_is_current>` system reminder).

### Pattern γ — Redundant Q&A rounds

**Hypothesis**: Multiple back-and-forth Q&A cycles consume more tokens than a single batch-presentation followed by approval.

**Measurement**:

1. Per session, count `AskUserQuestion` invocations.
2. For sessions with > 1 invocation, measure: were the questions independent (legitimate batching) or sequential (where the second question's information was answerable from the same context as the first)?
3. Estimate the "what could have been one question" reduction: if the questions could have been single-shot, the redundant round-trip cost ≈ 5K–15K tokens per redundant round (CLAUDE.md re-render + user message + tool result).

**Expected outliers**: Planning sessions early in a mission, where unfamiliarity with the spec causes successive clarification rounds. Mature sessions in execution phase rarely show this.

### Pattern δ — Handoff reload cost

**Hypothesis**: Session continuations (Next-Session-Prompt-driven cold starts) reload state that the previous session had warm. The Next-Session-Prompt is meant to bootstrap fast — but if it triggers re-reading of files the previous session already produced, the prompt isn't doing its job.

**Measurement**:

1. Compare: tokens consumed in the first 10 minutes of a continuation session vs the first 10 minutes of a same-mission cold-start.
2. The difference is the *Next-Session-Prompt premium*: positive = the prompt saved time; negative = the prompt added overhead.
3. Per-mission analysis: which Next-Session-Prompts produce positive premiums? Negative ones are rewrite candidates.

**Expected outliers**: Verbose Next-Session-Prompts (>500 words) that cite many file paths the new session re-reads anyway. The S2 S4 → S2 S5 prompt (this session's source) is ~600 words and cites 6 file paths; M09 measures whether the prompt premium is positive.

---

## §3 Convergence model validation

The convergence model claims (CLAUDE.md *Convergence Model* section, [[../../../../what/context/prompt_engineering/context_prompt_engineering_convergence_model.md|context_prompt_engineering_convergence_model.md]]):

> *"The execution hierarchy (Campaign → Mission → Objective) is a convergent decomposition: each level narrows context, reducing token count while increasing signal density."*

This claim has never been measured. M09 measures it.

### Measurement design

For one fully-instrumented end-to-end campaign (recommended: Operation Rosetta Phase 7 D8–D10, since it just closed and has 100% of its sessions, missions, and AARs available):

1. **Campaign-level cost**: Sum total tokens across all D8 + D9 + D10 sessions (M32 + M33 + M34). Divide by number of sessions to get per-session mean.
2. **Mission-level cost**: For one mission (e.g., M33, D9 Narrative Onboarding), sum tokens; divide by number of sessions in that mission to get per-session mean. Compare to campaign-level mean.
3. **Objective-level cost**: For one objective within a mission (e.g., M33's "Pain statement above fold" objective), measure tokens spent specifically on that objective. Compare to mission-level mean.

The hypothesis predicts: **objective-level mean ≪ mission-level mean ≪ campaign-level mean** (i.e., narrower scopes converge fast).

**If the prediction holds** (token cost falls > 30% per level): convergence model validated; encourage further decomposition.

**If the prediction fails** (token cost stays flat or rises with deeper hierarchy): navigation overhead is canceling savings; consider flatter session designs and / or merging redundant intermediate AGENTS.md.

**Expected result**: Mid-magnitude validation — token cost falls somewhat per level, but with significant overhead at every transition (each session must reload its level's CLAUDE.md, mission file, etc.). The protocol's job is to quantify the overhead, not to confirm or deny the model whole-cloth.

### Per-AGENTS.md load cost (sub-question)

Each directory's AGENTS.md is auto-loaded when an agent enters that directory. With 11 entity types in this vault and ~20 AGENTS.md files in the workspace at-large, the per-load cost is non-trivial.

Measurement: per-session, count AGENTS.md loads + sum their tokens. Compare to "would CLAUDE.md alone have been sufficient?" (judgment call by the operator reviewing the session).

Output: a per-AGENTS.md heat map showing load frequency × per-load cost. AGENTS.md files with high load × low information density are simplification candidates.

---

## §4 Claude Code hook spec — `PostToolUse` instrumentation

The measurement infrastructure is a `PostToolUse` hook in `~/.claude/settings.json` that logs to a local SQLite database. The hook is **read-only** (does not modify tool behavior), append-only (does not delete past logs), and operator-controllable (operators can toggle on / off without modifying any vault).

Reference: `update-config` skill (per CLAUDE.md "Skills" section) for hook configuration mechanics.

### Hook spec (`measurement_hook.sh` outline)

```bash
#!/usr/bin/env bash
# measurement_hook.sh — PostToolUse hook for the aDNA token-measurement protocol.
# Configured in ~/.claude/settings.json under hooks.PostToolUse.
# Append-only logger; does not modify tool input or output.
# Reads the JSON-encoded tool result from stdin (Claude Code v6.0 hook contract).

set -euo pipefail

DB="${ADNA_MEASUREMENT_DB:-${HOME}/.adna/measurement/measurement.sqlite}"
SESSION_ID="${ADNA_SESSION_ID:-$(date -u +%Y%m%dT%H%M%SZ)}"

mkdir -p "$(dirname "$DB")"

# Initialize schema on first run (idempotent).
sqlite3 "$DB" <<'SQL'
CREATE TABLE IF NOT EXISTS sessions (
  session_id TEXT PRIMARY KEY,
  started_at TEXT NOT NULL,
  vault TEXT,
  campaign TEXT,
  mission TEXT,
  session_type TEXT  -- A | B | C | other
);
CREATE TABLE IF NOT EXISTS tool_calls (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  session_id TEXT NOT NULL,
  ts TEXT NOT NULL,
  tool TEXT NOT NULL,        -- Read | Bash | Edit | Write | AskUserQuestion | etc.
  input_tokens INTEGER,
  output_tokens INTEGER,
  cache_creation_tokens INTEGER,
  cache_read_tokens INTEGER,
  -- Optional per-tool fields:
  file_path TEXT,            -- for Read / Edit / Write
  file_loc INTEGER,          -- file lines for Read (when known)
  read_offset INTEGER,
  read_limit INTEGER,
  re_read INTEGER DEFAULT 0  -- 1 if same file_path was read earlier in session
);
CREATE INDEX IF NOT EXISTS idx_tool_calls_session ON tool_calls(session_id);
CREATE INDEX IF NOT EXISTS idx_tool_calls_file ON tool_calls(file_path);
SQL

# Read JSON tool-result from stdin
PAYLOAD=$(cat)

# Extract fields with jq (require jq in PATH)
TOOL=$(echo "$PAYLOAD" | jq -r '.tool // ""')
USAGE_INPUT=$(echo "$PAYLOAD" | jq -r '.usage.input_tokens // 0')
USAGE_OUTPUT=$(echo "$PAYLOAD" | jq -r '.usage.output_tokens // 0')
USAGE_CACHE_CREATE=$(echo "$PAYLOAD" | jq -r '.usage.cache_creation_input_tokens // 0')
USAGE_CACHE_READ=$(echo "$PAYLOAD" | jq -r '.usage.cache_read_input_tokens // 0')
FILE_PATH=$(echo "$PAYLOAD" | jq -r '.input.file_path // ""')
READ_OFFSET=$(echo "$PAYLOAD" | jq -r '.input.offset // 0')
READ_LIMIT=$(echo "$PAYLOAD" | jq -r '.input.limit // 0')

# Detect re-read by querying prior calls on same file_path within session
RE_READ=0
if [[ -n "$FILE_PATH" ]]; then
  COUNT=$(sqlite3 "$DB" "SELECT COUNT(*) FROM tool_calls WHERE session_id='$SESSION_ID' AND file_path='$FILE_PATH';")
  if [[ "$COUNT" -gt 0 ]]; then RE_READ=1; fi
fi

# Compute file LOC if it's a Read call
FILE_LOC=""
if [[ "$TOOL" == "Read" && -f "$FILE_PATH" ]]; then
  FILE_LOC=$(wc -l < "$FILE_PATH" | tr -d ' ')
fi

# Insert row
sqlite3 "$DB" <<SQL
INSERT INTO tool_calls (
  session_id, ts, tool,
  input_tokens, output_tokens,
  cache_creation_tokens, cache_read_tokens,
  file_path, file_loc, read_offset, read_limit, re_read
) VALUES (
  '$SESSION_ID', '$(date -u +%Y-%m-%dT%H:%M:%SZ)', '$TOOL',
  $USAGE_INPUT, $USAGE_OUTPUT,
  $USAGE_CACHE_CREATE, $USAGE_CACHE_READ,
  '$FILE_PATH', ${FILE_LOC:-NULL}, $READ_OFFSET, $READ_LIMIT, $RE_READ
);
SQL

exit 0
```

### Configuration in `~/.claude/settings.json`

```jsonc
{
  "hooks": {
    "PostToolUse": [
      {
        "command": "/absolute/path/to/measurement_hook.sh",
        "tools": ["Read", "Bash", "Edit", "Write", "AskUserQuestion", "Glob", "Grep"]
      }
    ]
  }
}
```

The hook fires after each listed tool call. Tools not listed (e.g., `TaskCreate`, `WebFetch`) can be added later if M09 finds blind spots.

### Privacy + safety notes

- **No file content is captured** — only metadata (path, LOC, offset, limit). The file body is not logged.
- **Database lives outside vaults** — `~/.adna/measurement/measurement.sqlite` (default) is workspace-root-private; per-vault `.gitignore` does not need to know about it.
- **Per-session isolation** — `ADNA_SESSION_ID` env var distinguishes sessions; defaults to UTC timestamp if unset.
- **Operator-toggleable** — to disable measurement, remove the hook entry from `settings.json`. No vault changes required.
- **No federation** — M09 baseline lives locally only. Federation is an Obj 10 / LatticeScope concern; see §6.

### `--self-test` mode

The hook script SHOULD support a `--self-test` flag that runs against a synthetic JSON payload (e.g., a dummy `Read` call) and verifies the SQLite schema initialization + insert without depending on a live Claude Code session. M09 includes the self-test in its acceptance gate.

---

## §5 Calibration outputs (M09 produces)

After running §1–§4, M09 produces:

### 5.a Revised effort-estimate formula

Replace "X sessions" with "X sessions ≈ Y kT (kilotokens)" budgets per mission type.

Format (filled in M09):

```
Type A startup-only      ≈ ___ kT (μ ± σ across 19 vaults)
Type B P3 sub-group       ≈ ___ kT
Type C planning mission   ≈ ___ kT
Type D execution mission  ≈ ___ kT (additional baseline)
Type E AAR session        ≈ ___ kT (additional baseline)
```

### 5.b Per-mission-type token profile distributions

For each of the five session types, record:
- Median, mean, stdev across the baseline runs
- Decomposition: startup % / work % / handoff % / SITREP %

A typical M09 finding (predicted): planning missions are ~30% startup + ~50% work + ~10% handoff + ~10% SITREP. Execution missions are ~20% startup + ~70% work + ~5% handoff + ~5% SITREP. AAR sessions are mostly handoff (~40%) + decision recording (~40%) + minimal startup (~20%).

### 5.c Top-3 optimization opportunities

Ranked by estimated token-savings impact × ease of implementation. Format:

| # | Opportunity | Estimated savings per session | Effort | Implementation locus |
|---|---|---|---|---|
| 1 | _ | _ kT | _ | _ |
| 2 | _ | _ kT | _ | _ |
| 3 | _ | _ kT | _ | _ |

Likely candidates (M09 confirms or refutes):

- **Excerpt loading for `adna_standard.md`** — full-file reads cost ~30 kT; per-section reads cost ~3–5 kT. Probable Top-1.
- **Replace Next-Session-Prompts > 500 words** — measured premium negative for verbose prompts; rewrite to < 250 words with explicit file-pointer-not-content discipline.
- **Cap AGENTS.md per-directory at 200 lines** — AL-2-style overload (per [[m01_obj7_repo_review_audit_findings.md|Obj 7 audit]] §6.f) repeats every session.
- **Single-shot `AskUserQuestion`** — multi-select + 4-option discipline reduces clarification rounds.

### 5.d Convergence model verdict

Either:
- **Validated** — Campaign → Mission → Objective levels show > 30% per-level token-cost reduction. Encourage finer decomposition.
- **Refuted** — token cost flat or rising. Recommend flatter session design + AGENTS.md consolidation.
- **Mid-magnitude** — partial reduction with overhead canceling some savings. Measure-target each transition layer's overhead and prioritize the worst.

### 5.e Per-AGENTS.md heat map

Table form: AGENTS.md path × load count × mean token cost × judgment-call (necessary/redundant). Redundant AGENTS.md files are M07 simplification candidates.

---

## §6 Inter-objective gate — feeds Obj 10 schema design

Per [[../mission_adna_infra_planning_01.md|mission spec]] lines 633–639, this protocol's findings feed the Obj 10 LatticeScope schema design through an explicit operator gate:

1. M09 runs the protocol (§1–§4) and produces calibration outputs (§5).
2. **Operator review checkpoint**: The operator reads the §5 outputs and confirms that the LatticeScope schema-as-proposed (per mission spec §Obj 10 lines 666–683) captures every metric §5 surfaces.
3. If §5 surfaces metrics the schema can't capture (likely candidates: per-AGENTS.md load cost, recipe-vs-manual cost differential, context-graph traversal depth across vault boundaries, prompt-cache hit ratio per session type), Obj 10's schema design adjusts **before** the LatticeScope sub-campaign doc is drafted.
4. Adjustment is captured in M10's ADRs (likely ADR-002 of LatticeScope.aDNA — schema design).

### Schema-fit checklist (M09 walks through with operator)

| §5 output | LatticeScope schema captures? (Y/N) | Adjustment if N |
|---|---|---|
| Per-mission-type token profile distribution | Y (sessions table + tool_calls aggregation) | n/a |
| Per-AGENTS.md load cost heat map | ? (depends on whether `context_file` table tracks AGENTS.md as a category) | Add `file_category` column to context_file table |
| Re-read frequency per file path | Y (re_read column on tool_calls — exists in §4 hook schema) | n/a |
| Excerpt ratio (LOC read vs total LOC) | Y (file_loc + read_offset + read_limit columns) | n/a |
| Cache hit ratio per session type | ? (cache_creation_tokens + cache_read_tokens columns exist; aggregation must support per-session-type rollup) | Add session_type as queryable index |
| Convergence-model per-level-mean cost | Y (sessions table joined to tool_calls, group by mission level) | n/a |
| Cross-vault context-graph traversal depth | **N** (current schema is single-vault; cross-vault hops not tracked) | Add `cross_vault_hops` column or separate `context_traversal` table — Obj 10 design call |
| Recipe-vs-manual cost differential | **N** (current schema doesn't tag whether a context-load came from a recipe) | Add `recipe_id` column to tool_calls table — Obj 10 design call |

The two items currently marked **N** are the gate's likely action items.

---

## §7 Self-reference + dual-audience (Standing Orders #7 + #8)

**Self-reference**: The protocol is itself a planning artifact authored in a Type C session (the very session this protocol is being designed within — S2 S5 of mission_adna_infra_planning_01). When M09 runs the protocol, it can use this session's session-file (`session_stanley_20260508_221629_adna_v2_m01_s2_s5.md`) as one of the Type C measurements — the protocol designed itself, then measures itself. Standing Order #8 satisfied recursively: the protocol's first instance-of-application is itself.

The protocol also demonstrates Standing Order #2 (data integrity → never corrupt or lose existing data) by being **read-only** at instrumentation level (per §4 privacy notes). It tracks; it does not modify.

**Dual-audience**:

- **Developer reads** §1 (cold-start checkpoints), §4 (hook bash + JSON schema + settings.json snippet), §5 (output formats), §6 (schema-fit checklist). Direct, executable, reproducible.
- **Newcomer reads** §0 (why the doctrine has never been measured), §2 (which patterns are suspected expensive), §3 (does the convergence model actually work), §5.d (verdict). Plain language; the *why* before the *how*.

Both audiences land at the same conclusion: **doctrine without measurement is folklore; this protocol replaces folklore with data.**

---

## §8 Cross-references

| Reference | Used by | Direction |
|---|---|---|
| [[../mission_adna_infra_planning_01.md|mission_adna_infra_planning_01.md]] §Obj 9 + §Obj 10 + lines 633–639 (Obj 9→Obj 10 gate) | Source spec | spec → this doc |
| [[m01_obj0_ecosystem_matrix.md|m01_obj0_ecosystem_matrix.md]] §1 (19-vault inventory) | Type A baseline population | upstream |
| [[m01_obj1_current_state.md|m01_obj1_current_state.md]] | Current-state token-density baseline | upstream |
| [[m01_obj3_node_adna_design.md|m01_obj3_node_adna_design.md]] | `node.aDNA/what/context/token_baselines.md` destination | upstream |
| [[m01_obj7_repo_review_audit_findings.md|m01_obj7_repo_review_audit_findings.md]] | §6.f local audit AGENTS.md/skills inventory; AL-2 finding feeds §3 per-AGENTS.md sub-question | upstream |
| [[m01_obj8_upgrade_guide_v6_to_v7.md|m01_obj8_upgrade_guide_v6_to_v7.md]] | Companion artifact in this session | sibling |
| [[../../../../what/context/prompt_engineering/context_prompt_engineering_convergence_model.md|context_prompt_engineering_convergence_model.md]] | The model §3 validates | upstream (the article's claim under test) |
| [[../../../../CLAUDE.md|CLAUDE.md]] (this vault) | Standing Order #3 — "Context budget is doctrine" — the claim this protocol measures | upstream |
| `~/.claude/settings.json` | Hook configuration | downstream (per §4) |
| Anthropic API `usage` field documentation | Token-counting source | upstream (external) |
| `update-config` skill | Hook configuration mechanics | upstream (skill) |
| Mission spec §Obj 10 lines 666–683 (LatticeScope schema) | The schema this protocol gates | downstream (M10 consumes) |

---

## §9 Status

**Complete.** Ready for M09 execution. M09 runs §1–§4 against the 19-vault baseline + 5 representative campaigns, produces the §5 calibration outputs, and walks the §6 schema-fit checklist with the operator before M10 begins.

**Forward-references**: M09 + M10 consume this protocol. M09 produces the actual data at `node.aDNA/what/context/token_baselines.md` (per mission spec line 605). The Obj 9 → Obj 10 gate fires after §6 is walked. Findings cited in M01 AAR (S2 S6 or S2 S7).

**Out of scope for this protocol** (deferred to LatticeScope sub-campaign):

- Federation aggregation (cross-node anonymized metric sharing)
- Community benchmark submission API
- Per-session real-time budget warnings
- Web dashboard for visualizing measurement data

These are LatticeScope.aDNA features, not measurement-protocol features. The protocol is the measurement layer; LatticeScope is the platform that grows on top of it.
