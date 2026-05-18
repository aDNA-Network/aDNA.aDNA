---
type: artifact
artifact_type: calibration_output
campaign: campaign_adna_serious_tool_readiness
mission: mission_adna_str_p1_m13_token_audit
objective: 7
session: S3
created: 2026-05-18
updated: 2026-05-18
status: complete
last_edited_by: agent_stanley
tags: [artifact, mission_deliverable, m13, obj7, calibration, effort_estimate, per_mission_token_profile, optimization_queue, agents_md_heat_map, schema_fit_rewalk, adr_016_prep, m22_input, m21_input, m24_input, m14_input]
related_artifacts:
  - m13_obj3_type_a_baseline.md          # Type A 25-vault static input
  - m13_obj6_type_bc_runs.md             # Type B/C/D 6-row retrospective + LIVE input
  - m13_obj6_pattern_ranking.md          # α/β/γ/δ ranking + Mid-magnitude verdict input
  - m13_obj2_post_tool_use_hook_spec.md  # collector spec (S2 install target)
  - ../../../campaign_adna_v2_infrastructure/missions/artifacts/m01_obj9_token_measurement_protocol.md  # §5 calibration outputs + §6 gate
  - ../../../campaign_adna_v2_infrastructure/missions/artifacts/m01_obj10_latticescope_vault_design.md  # §6 v0.1 schema (gate-resolved 2026-05-08)
downstream_consumers:
  - mission_adna_str_p1_m14_latticescope_schema  # §5 schema-fit re-walk + transcript_path addendum drives v0.1.1
  - mission_adna_str_p2_m21_context_audit        # §3 top-3 optimization queue
  - mission_adna_str_p2_m22_per_mission_budget   # §6 ADR-016 prep notes + §1 effort formula
  - mission_adna_str_p2_m23_convergence_validation # §2 per-mission-type distributions + Mid-magnitude verdict
  - mission_adna_str_p2_m24_agents_md_heatmap    # §4 AGENTS.md heat-map sketch
---

# M1.3 Obj 7 — Calibration output, schema-fit re-walk, ADR-016 prep notes

> **Deliverable 7 of M1.3** (S3). The mission's *consolidated usable output*. Lifts the raw datasets from Obj 3 / Obj 5 / Obj 6 into the four downstream forms that v8 P2 missions consume: (1) effort-estimate formula, (2) per-mission-type token-profile distributions, (3) top-3 optimization queue, (4) AGENTS.md heat-map sketch. Plus the two M1.4-side outputs: (5) Obj 9 → Obj 10 schema-fit re-walk, (6) ADR-016 prep notes (M2.2 input — no draft per Standing Order #14).
>
> **Standing Order #8 (self-reference)**: This calibration output is itself one of the live Type C sessions in the data it calibrates. The S3 SQLite snapshot at §4.2 includes this session's tool calls as they execute. *The protocol designed itself (v2 M01 S2 S5), then measured itself (M1.3 S2), then calibrates itself (M1.3 S3).* The terminal recursion is complete: ADR-016 (when ratified at M2.2) will *bound* the doctrine that this artifact *measures*.
>
> **Standing Order #14 honored**: ADR-016 prep notes only (§6); no full ADR draft at M1.3. M2.2 (P2) consumes these notes verbatim.

---

## §1 Revised effort-estimate formula

Replaces folklore ("planning sessions take ~2-3 sessions") with measurement-grounded ranges. Calibrated against the 6-row Type B/C/D dataset + 25-vault Type A baseline + S3 live capture.

### 1.1 Per-session token cost = transition tax + per-objective work

```
session_cost (kT) ≈ transition_tax + Σ per_objective_work
where:
  transition_tax  = CP-1 mean = 22.99 kT  (one-time per session-entry)
  per_objective_work ∈ [5, 60] kT depending on objective class:
    - read-and-summarize         :  5-15 kT
    - spec authoring (planning)  : 15-40 kT
    - implementation + verify    : 20-60 kT
    - destructive-with-rollback  : 30-80 kT  (S2-class)
    - close + AAR                : 15-30 kT  (S3-class; this session)
```

### 1.2 Per-mission session-count heuristic

```
estimated_sessions = ceil( total_real_work_kT / (session_budget_kT - transition_tax) )
where:
  session_budget_kT = 100 kT  (calibrated cap — Type C upper bound)
  transition_tax    = 23 kT   (CP-1 mean from Obj 3)
  effective_work_budget_per_session = 100 - 23 = 77 kT
```

**Worked example (M1.3 itself)**:
- S1 spec authoring + Type A baseline + hook spec: ~25-40 kT real work → fit in 1 session ✓ (actual: closed 2026-05-18T20:00Z, ~80-120 kT total including transition)
- S2 hook install + verify + 6-row dataset + α/β/γ/δ rank: ~50-80 kT real work → fit in 1 session ✓ (actual: closed 2026-05-18T20:10Z, ~120-160 kT total)
- S3 calibration + node.aDNA writes + AAR + schema-fit + master updates: ~25-40 kT real work → fit in 1 session ✓ (this session)

3-session decomposition was **correctly sized**. Total mission real work ~100-160 kT; with 3× transition tax = ~170-230 kT cumulative; 3-session arc justified at >50 kT per-session work threshold.

### 1.3 When *not* to decompose into multiple sessions

**Threshold rule** (seeds ADR-016 §6.2):
- If `total_real_work_kT < 50`: single session — transition tax dominates, decomposition is net-negative.
- If `total_real_work_kT in [50, 80]`: 1-2 sessions (operator preference; second session valuable only when verification benefits from cache-clear boundary).
- If `total_real_work_kT in [80, 200]`: 2-3 sessions (canonical implementation-class shape).
- If `total_real_work_kT > 200`: ≥3 sessions AND consider further mission decomposition (the mission is too large; M2.2 should add a §rule for mission-splitting).

### 1.4 Sources of estimation error (calibration honesty)

1. **tiktoken approximation drift** (~5%) — Type A baseline uses chars/4; actual Anthropic tokenizer differs slightly. Documented in `m13_obj3_type_a_baseline.md` frontmatter.
2. **PostToolUse payload lacks per-tool token usage** — Read tokens approximated via file_size÷4; Bash/Edit/Write tokens stay 0 in SQLite. Live data systematically under-counts Bash + write costs.
3. **Retrospective method has no per-checkpoint resolution** — CP-0..CP-4 sub-aggregates only reconstructible for live runs; pre-2026-05-18 sessions estimated from file-size proxies.
4. **Session-file size under-represents reads by 5-10×** — the artifact is the *output* of the session, not the *context* loaded. Read-heavy Type C sessions look small on disk.

---

## §2 Per-mission-type token-profile distributions

Source: Obj 3 (Type A) + Obj 5 (Type B/C/D) + S3 live capture. Spec-vs-revised B/C/D classification per `m13_obj6_type_bc_runs.md` §2.

| Type | Definition | n (M1.3 dataset) | Estimate range (kT) | Median (kT) | Notes |
|---|---|---|---|---|---|
| **A** | Startup-only / orientation read (CLAUDE.md + STATE.md + active mission) | **25 vaults** | 3–87 | **CP-0 5.85 / CP-1 22.99** | Type-A entry-cost dominates Type-B sessions |
| **B** | Light P3-style (reference + Q&A + 1-paragraph follow-up) | 2 (Rosetta D9/D10 starts) | 5–10 | **~7** | Single-session by construction — decomposition is net-negative |
| **C** | Planning mission (heavy reads + design docs; specs + ADRs + governance) | 2 (M1.3 S1, v2 M01 S2 S1) | 80–120 | **~100** | Canonical 1-2 session size; 3-session only when destructive S2 splits off |
| **D** | Execution mission (modest reads + heavy writes + verification) | 2 (MW2, MP1-8.5) | 40–180 | **~80-100** | 3-session canonical when implementation is multi-file with operator gates |
| **E** | Reserved — destructive infrastructure / batch migration | 0 (none observed in M1.3 dataset) | — | — | Forecast: 100-200 kT per session; ≥2 sessions; first instance likely v2 M03 retrospective at M2.3 |
| **S3-class** | Mission close (consolidation + AAR + master updates) | 1 (this S3) | 25-60 | **~40** | First measured instance; revise at M2.3 with multi-session-corpus data |

### 2.1 Distribution highlights

- **A:B ratio**: Type A's mean CP-1 (22.99 kT) is **~3× higher than Type B's median (7 kT)**. A session-entry-only baseline costs more than a complete P3-class working session. This is the convergence-model's transition tax made concrete (§2.3 of `m13_obj6_pattern_ranking.md`).
- **C:D parity**: Planning (C) and execution (D) cluster at similar per-session totals (~80-120 kT vs ~80-100 kT). Type-D's writes balance Type-C's reads.
- **B:C 10× gap**: Type B is one order of magnitude cheaper than Type C. The empirical case for *not* opening a campaign just to ask a quick question.
- **C-class spec-vs-real**: M1.3 S1 (Type C planning, 9.8 kB session file) read substantially more context than its artifact volume suggests. Read-heavy planning sessions are systematically under-represented in session-file proxies.

---

## §3 Top-3 optimization queue (M2.1 entry-point)

Lifted from `m13_obj6_pattern_ranking.md` §3; consolidated here with execution-readiness annotations.

### Opportunity 1 — Split `aDNA.aDNA/STATE.md` (75.8 kT → router + archive)

- **Current**: 75.8 kT single file; loaded at every aDNA.aDNA session entry.
- **Target**: 5–10 kT "current state" router (Current Phase + Active Campaigns + Next Session Prompt — top 60 lines); 60+ kT legacy descriptive block → `STATE_history_2026.md` or `STATE.md.archive`.
- **Savings**: ~65 kT per aDNA.aDNA session entry; ~13× CP-0 reduction.
- **Cost**: ~1 hour authoring (M2.1 sub-mission scope).
- **Risk**: low — archive is non-destructive; router preserves the load-bearing block (Next Session Prompt).
- **Prerequisite**: M2.1 mission spec authors a `template_state_md_router.md` so this pattern propagates to the 5 other vaults with STATE.md >30 kT (aDNA.aDNA, RareHarness, CanvasForge, RareArchive, III).
- **Sequencing**: do FIRST in M2.1 — highest savings × highest frequency × lowest risk.

### Opportunity 2 — Default `offset`+`limit` on STATE.md across ecosystem

- **Current**: agents Read full STATE.md by default; CP-1 mean 22.99 kT per session.
- **Target**: each vault's root AGENTS.md (or CLAUDE.md startup checklist) hints `Read(STATE.md, limit=80)` for orientation; full read only when grep/search hits a deeper section.
- **Savings**: ~10-17 kT per session × every active-vault session.
- **Affected vaults**: 25 (Type A baseline).
- **Cost**: AGENTS.md edit per vault (~5 min each; can be templated via `.adna/` upgrade).
- **Risk**: low — agents already understand `offset`/`limit`; this is a *hint*, not a constraint.
- **Sequencing**: do SECOND in M2.1 — composable with Opportunity 1 (router-first-then-limit-default).

### Opportunity 3 — Auto-archive completed-campaign rows at campaign close

- **Current**: campaign masters grow with every amendments entry; closed campaigns retain full audit trail inline (e.g., `campaign_adna_v2_infrastructure.md` was ~36 kT at v2 close).
- **Target**: at campaign-close mission, move legacy descriptive content to `campaign_<name>_archive.md`; master retains 1-paragraph executive summary + pointer to archive.
- **Savings**: ~25-35 kT per closed-campaign reference (mission-spec authoring often re-reads predecessor campaign masters).
- **Affected sessions**: ~30% of M1.3 S1 reads (retrospective estimate); higher for cross-campaign mission spec authoring.
- **Cost**: 1 mission-close step addition to `template_aar.md` + `template_campaign.md`.
- **Risk**: low — archive is non-destructive; audit trail preserved.
- **Sequencing**: do THIRD in M2.1 — depends on Opportunity 1's `STATE_history_*.md` pattern.

### 3.1 Out-of-scope opportunities (deferred)

- **Pattern β (re-reads within session)** — rank 12, but 6 observed re-reads in 54 calls (~11%) on M1.3 SQLite is *higher than expected*. Defer measurement-driven mitigation to M2.4 once 10+ sessions accumulate. The Claude Code `<edited_file_state_is_current>` reminder already handles Edit→Read; re-read driver may be cross-tool (Read→Bash-grep→Read same file). M2.4 quantifies.
- **Pattern δ (handoff reload)** — rank 6, but unmeasured without cross-session continuation pairs. Wait for M1.4 LatticeScope schema (`transcript_path` column — see §5) and 5+ continuation-pair samples.
- **Pattern γ (redundant Q&A)** — rank 6; 0 occurrences in M1.3 S3 (single AskUserQuestion in plan-mode pre-execution). Pattern not dominant in 2026-05 corpus; deprioritized.

---

## §4 AGENTS.md heat-map sketch (M2.4 entry-point)

S2 deferred full heat-map to S3+ pending more live data. S3 adds this session's calls — but the corpus is still small (n=2 distinct Claude Code session UUIDs at S3 mid-execution; n=54 tool_calls).

### 4.1 S3 live-data refresh (snapshot at S3 mid-execution)

| Metric | S2 close | S3 mid-execution | Delta |
|---|---|---|---|
| Total tool_calls | 14 | 54 | +40 |
| Distinct Claude Code session UUIDs | 1 | 2 | +1 |
| Bash | 7 | 25 | +18 |
| Read | 5 | 20 | +15 |
| Write | 2 | 5 | +3 |
| Edit | 0 | 4 | +4 |
| Re-reads (β instances) | 0 | 6 | +6 |
| Re-read rate | 0% | ~11% | — |
| `sessions` table rows | 0 | 0 | 0 (hook gap — see §5 finding) |

### 4.2 Top-loaded files (S3 snapshot)

| Rank | File path | Loads (n) | File category |
|---|---|---|---|
| 1 | `campaign_adna_serious_tool_readiness.md` | 5 | mission/campaign-master |
| 2 | `STATE.md` (aDNA.aDNA) | 3 | state_md |
| 3 | `m13_obj6_pattern_ranking.md` | 2 | artifact |
| 3 | `m13_obj6_type_bc_runs.md` | 2 | artifact |
| 3 | `m01_obj10_latticescope_vault_design.md` | 2 | artifact |
| 3 | `m01_obj9_token_measurement_protocol.md` | 2 | artifact |
| 7+ | (one each — README.md, CLAUDE.md (campaign), plan file, others) | 1 | various |

### 4.3 Provisional AGENTS.md ranking (defer full to M2.4)

| AGENTS.md candidate | Provisional rank | Notes |
|---|---|---|
| `aDNA.aDNA/who/coordination/AGENTS.md` | (defer) | 24 coord memos in 2026-05; likely-loaded on partner-vault sessions |
| `aDNA.aDNA/how/sessions/AGENTS.md` | (defer) | Loaded on every session-tracking interaction |
| `aDNA.aDNA/how/campaigns/AGENTS.md` | (defer) | Loaded on every campaign-touching session |

**S3 conclusion**: AGENTS.md files were NOT loaded in this S3 session at all (0 hits in `tool_calls` for path matching `%AGENTS.md`). Suggests agents are *not* defaulting to AGENTS.md reads on session entry — they read the directly-referenced files from CLAUDE.md startup checklist. **This is a finding**: if AGENTS.md files exist to guide agents but agents skip them, the cost of authoring them needs to justify the (currently small) load rate. M2.4 should measure across ≥10 distinct sessions before recommending changes.

### 4.4 M2.4 method (refined from `m13_obj6_pattern_ranking.md` §4)

```sql
-- After 10+ live sessions accumulate:
SELECT
  file_path,
  COUNT(*) AS load_count,
  AVG(COALESCE(input_tokens, file_loc * 50)) AS mean_load_tokens,  -- 50 chars/line approx
  (COUNT(*) * AVG(COALESCE(input_tokens, file_loc * 50))) / NULLIF(file_loc, 0) AS load_density_score
FROM tool_calls
WHERE file_path LIKE '%AGENTS.md'
GROUP BY file_path
ORDER BY load_density_score DESC;
```

Information-density proxy = inverse of file size (smaller AGENTS.md = denser per token). High `load_density_score` = high-frequency × low-information AGENTS.md → simplification candidate.

---

## §5 Obj 9 → Obj 10 schema-fit re-walk (M1.4 input)

Re-walks the 8-row gate matrix from `m01_obj9_token_measurement_protocol.md` §6 against the v0.1 schema in `m01_obj10_latticescope_vault_design.md` §6. **Surfaces three new "N" rows for M1.4 schema v0.1.1 amendment** — the load-bearing M1.4 input.

### 5.1 Re-walked 8-row matrix (+ 2 new rows from M1.3 findings)

| Gate row | §5 output | Captured by v0.1? | Status at M1.3 close | Adjustment for M1.4 |
|---|---|---|---|---|
| 1 | Per-mission-type token profile distribution | Y | confirmed (§2 demonstrates) | n/a |
| 2 | Per-AGENTS.md load cost heat map | Y (file_category enum has 'agents_md') | confirmed; corpus too small for ranking — defer to M2.4 | n/a |
| 3 | Re-read frequency per file path | Y (re_read column) | confirmed (6/54 = 11% live) | n/a |
| 4 | Excerpt ratio (LOC read vs total LOC) | Y (file_loc + read_offset + read_limit) | confirmed (hook captures all three) | n/a |
| 5 | Cache hit ratio per session type | Partial (columns exist; no data) | **PostToolUse payload omits cache_*_tokens** — empty in 54-row sample | **Amendment A**: extend hook to also read `cache_creation_tokens` + `cache_read_tokens` from `tool_input.usage` if/when present; else accept empty + document gap |
| 6 | Convergence-model per-level mean cost | Y (sessions JOIN tool_calls GROUP BY mission level) | partial — `sessions` table empty (see row 9 below) | (see row 9) |
| 7 | Cross-vault context-graph traversal depth | Y (`context_traversal` table + indexes) | partial — table created at schema init but no rows inserted (collector doesn't yet detect cross-vault hops) | **Amendment B**: collector enhancement at M1.4 — detect when `file_path` crosses vault boundaries vs current session's primary vault; INSERT into `context_traversal` |
| 8 | Recipe vs manual cost differential | Y (recipe_id column on tool_calls) | partial — column NULLABLE; no `recipe_id` propagation mechanism from agent to hook | **Amendment C**: define recipe propagation contract — agent prefixes Read with `# recipe:<id>` comment (or env var); collector parses + writes `recipe_id`. M1.4 v0.1.1 schema amendment |
| **9 (NEW)** | **Per-session token attribution via Claude Code transcript** | **N — column missing** | **load-bearing M1.3 finding**: PostToolUse payload lacks per-tool `usage` block; SQLite `input_tokens` is approximation only | **Amendment D (LOAD-BEARING)**: Add `transcript_path TEXT` column to `sessions` table. The .jsonl transcript (Claude Code v1 `--resume` reads this) is the authoritative per-turn token source. SQLite becomes a derived index over the transcript |
| **10 (NEW)** | **Sessions table population** | **N — collector doesn't INSERT into sessions** | M1.3 S2 hook only INSERTs into `tool_calls`; `sessions` table sits empty | **Amendment E**: Hook detects new `session_id` and inserts a row into `sessions` with `started_at = now()`, `session_type = NULL` (defer classification to a post-hoc script that reads `~/.claude/projects/<sanitized-cwd>/<session_id>.jsonl`) |

### 5.2 Three M1.4 v0.1.1 schema amendments (consolidated)

1. **Amendment D (LOAD-BEARING)**: Add `transcript_path TEXT` to `sessions` table. Hook resolves transcript path from `~/.claude/projects/<sanitized-cwd>/<session_id>.jsonl` at session-init time.
2. **Amendment E**: Hook INSERTs into `sessions` on first-call-of-session pattern. Adds `IF NOT EXISTS` guard.
3. **Amendments B + C** (defer to M1.4 P1 sub-mission): cross-vault traversal detection + recipe propagation contract. Lower priority than D + E; not load-bearing for M2.x consumers.

**Amendment A** is an upstream-Claude-Code question (does PostToolUse payload carry `tool_input.usage`?). M1.4 verifies via newer Claude Code version; if still absent, document as upstream-deficit + use transcript-derived counts (Amendment D path).

### 5.3 M1.4 mission spec entry-point

M1.4 (`mission_adna_str_p1_m14_latticescope_schema`) opens with §5.2 as the primary scope. The mission renders schema v0.1.1 SQL, drafts a post-hoc `~/.adna/measurement/ingest_transcript.py` script that reads the JSONL transcript and back-fills accurate per-turn token costs, and adds a tiny `MIGRATION_v0_1_to_v0_1_1.sql` for existing SQLite stores.

---

## §6 ADR-016 prep notes (M2.2 entry-point — no draft per Standing Order #14)

ADR-016 is forecast at master ADR roadmap row 3. M1.3 produces *inputs*; M2.2 produces the *draft* and ratifies at P2 phase entry. Per Standing Order #14, no draft text at M1.3.

### 6.1 ADR-016 scope (provisional title)

**ADR-016**: Per-mission context budget as project-level Standing Order #11 (extension of campaign-CLAUDE.md Standing Order #12).

### 6.2 Candidate Standing Order text (input only)

> **Standing Order #11 (proposed for ADR-016 ratification at M2.2)**: Every mission's frontmatter declares `token_budget_estimated: "<S1-spec> | <S2-spec> | <S3-spec>"` (or `"<single-session>"` for non-decomposed missions). Estimates use the Obj 7 calibration formula (`transition_tax + Σ per_objective_work`). Sessions log `token_budget_actual` at SITREP. Mission AARs report estimate-vs-actual delta as a calibration signal. Calibration drift > 2× triggers M2.3-style cross-campaign retrospective.

### 6.3 Decomposition-threshold candidate (from §1.3)

```
single-session       : total_real_work_kT < 50
1-2 sessions         : 50 ≤ kT < 80   (operator preference)
2-3 sessions         : 80 ≤ kT < 200  (canonical)
≥3 sessions + split  : kT ≥ 200       (consider mission-splitting)
```

### 6.4 Input artifacts for M2.2 (verbatim consumers)

- This document §1 (effort-estimate formula)
- This document §2 (per-mission-type distributions)
- This document §1.3 (decomposition threshold)
- `m13_obj6_pattern_ranking.md` §2 (convergence-model verdict + transition-tax doctrine)

### 6.5 Out-of-scope for ADR-016 (defer to ADR-017+)

- Single-commit additive-upstream pattern (now 4 instances) — forecast as ADR-017
- Validation-as-dispatched-campaign pattern — forecast as ADR-018
- Modular III for Obsidian — forecast as ADR-019
- Schema-evolution discipline (schema_migrations/, PRAGMA user_version) — likely ADR-002 of LatticeScope.aDNA, not aDNA.aDNA-side

### 6.6 ADR-016 narrowness (anti-scope-creep)

The ADR codifies *one* doctrine: per-mission token budget tracking + estimate-vs-actual calibration. It does NOT:
- Set hard kT caps (operator-discretionary per Standing Order #1)
- Enforce mission splitting (recommendation only; operator gates)
- Modify the campaign-CLAUDE.md Standing Order #12 (which already exists at campaign-scope)
- Introduce hook-side enforcement (Standing Order: *measurement does not modify behavior* — `m01_obj9_token_measurement_protocol.md` §4)

---

## §7 Acceptance-criteria discharges (M1.3 close-side)

This artifact discharges 4 of the 11 M1.3 acceptance criteria; the remaining 7 are discharged by Obj 3 / Obj 5 / Obj 6 (already complete) + AAR + node.aDNA writes (this S3).

| Acceptance criterion | Discharged here? | Source |
|---|---|---|
| Effort-estimate formula | ✓ | §1 |
| Per-mission-type token-profile distributions | ✓ | §2 |
| Top-3 optimization opportunities | ✓ | §3 |
| AGENTS.md heat map (sketch — full at M2.4) | ✓ (sketch) | §4 |
| Obj 9 → Obj 10 schema-fit re-walk (8-row matrix) | ✓ | §5 |
| ADR-016 prep notes seeded | ✓ | §6 |
| `node.aDNA/.../token_baselines.md` | (S3 separate file; cross-link below) | — |
| AAR landed | (S3 separate file; cross-link below) | — |

---

## §8 Forward references

- **M1.4** consumes §5 (schema v0.1.1 amendments — load-bearing Amendment D `transcript_path`) + opens with a 2-objective scope: SQL DDL + ingest_transcript.py script.
- **M2.1** consumes §3 (top-3 optimization queue) as its mission-open agenda.
- **M2.2** consumes §6 (ADR-016 prep notes) verbatim as draft input; §1 (formula) + §1.3 (threshold) become the ADR's normative body.
- **M2.3** consumes §2 (per-mission-type distributions) as the cross-campaign retrospective baseline; refines §2 verdict (Mid-magnitude) with CP-2..CP-4 measurements.
- **M2.4** consumes §4.4 (AGENTS.md SQL method) once ≥10 distinct live sessions accumulate.

## §9 Cross-references

- [[m13_obj3_type_a_baseline.md|m13_obj3_type_a_baseline.md]] — Type A 25-vault static (CP-0/CP-1 means)
- [[m13_obj6_type_bc_runs.md|m13_obj6_type_bc_runs.md]] — Type B/C/D 6-row dataset
- [[m13_obj6_pattern_ranking.md|m13_obj6_pattern_ranking.md]] — α/β/γ/δ rank + Mid-magnitude verdict
- [[m13_obj2_post_tool_use_hook_spec.md|m13_obj2_post_tool_use_hook_spec.md]] — collector spec (S2 install target)
- [[aar_m13_token_audit.md|aar_m13_token_audit.md]] — M1.3 lightweight AAR (S3 close)
- [[../../../campaign_adna_v2_infrastructure/missions/artifacts/m01_obj9_token_measurement_protocol.md|m01_obj9_token_measurement_protocol.md]] §5 (calibration outputs) + §6 (gate)
- [[../../../campaign_adna_v2_infrastructure/missions/artifacts/m01_obj10_latticescope_vault_design.md|m01_obj10_latticescope_vault_design.md]] §6 (v0.1 schema)
- [[../mission_adna_str_p1_m13_token_audit.md|mission_adna_str_p1_m13_token_audit.md]] — M1.3 mission spec
- [[../campaign_adna_serious_tool_readiness.md|campaign master]] §Phase 1 + §ADR roadmap (row ADR-016)
- [[../../../../what/context/prompt_engineering/context_prompt_engineering_convergence_model.md|context_prompt_engineering_convergence_model.md]] — model under test
- `~/.adna/measurement/measurement.sqlite` — live store (S3 mid-execution: 54 calls / 2 Claude Code session UUIDs)
- `node.aDNA/what/context/token_baselines.md` — canonical baseline (S3 published)
