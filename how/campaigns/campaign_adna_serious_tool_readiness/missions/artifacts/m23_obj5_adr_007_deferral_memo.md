---
type: artifact
artifact_type: decision_deferral_memo
mission: mission_adna_str_p2_m23_convergence_validation
campaign: campaign_adna_serious_tool_readiness
phase: 2
objective: 5
session: session_stanley_20260520T060143Z_v8_m23_s2
created: 2026-05-20
updated: 2026-05-20
status: complete
last_edited_by: agent_stanley
purpose: "Record D2=B operator-ratified decision to DEFER ADR-007 (tool-use logging) elevation to M2.4; document gap analysis (n=7 < threshold 10 SQLite captured sessions) + trigger condition + M2.4 dispatch contract"
decision: D2_B_defer_to_M24
sources:
  - ../mission_adna_str_p2_m23_convergence_validation.md   # §Operator decision gates D2 row + §Objectives 5
  - m23_obj2_corpus_extraction.md   # §6-§8 SQLite tool-call + re-read + traversal evidence (7 sessions, 714 tool_calls, 55 traversals)
  - m23_obj3_initial_findings.md   # §5 D2 recommendation language with rationale
  - ../../../../what/decisions/adr_016_per_mission_context_budget.md   # cross-reference §Status M2.3 amendment + §Sources
  - "~/.adna/measurement/measurement.sqlite (M1.4 Amendment E LIVE since 2026-05-19; sessions=7; tool_calls=714; context_traversal=55)"
tags: [artifact, m23, adr_007_deferral, d2_b, gap_analysis, m24_dispatch, sqlite_session_threshold, tool_use_logging]
related_artifacts:
  - ../mission_adna_str_p2_m23_convergence_validation.md
  - m23_obj2_corpus_extraction.md
  - m23_obj3_initial_findings.md
related_decisions:
  - adr_016_per_mission_context_budget   # M2.3 S2 amendment (D1=A path) sibling to this deferral (D2=B path)
unblocks: []   # deferral; nothing unblocked at this artifact
blocks:
  - adr_007_tool_use_logging_elevation   # blocked until SQLite session count ≥ 10
ratifies_at: M24   # M2.4 ratifies the elevation (if threshold met) OR refreshes this deferral
---

# M2.3 Obj 5 — ADR-007 Elevation Deferral Memo (D2=B)

> **Deliverable 5 of M2.3** (S2; D2 operator-ratified path B). Records the explicit decision to defer ADR-007 (tool-use logging) elevation from queued-forecast to ratified until M2.4 AGENTS.md heat map mission has at least the same SQLite captured-session corpus as M2.3 itself worked from.
>
> **NOT an ADR**. This is a doctrine-as-design-memo deferral artifact (same shape as `m21_obj4_archive_convention_design.md`). ADR-007 itself remains queued in the campaign master ADR roadmap; this memo records WHY M2.3 chose deferral over ratification at S2.

## §1 — Decision summary

**D2 = B: DEFER ADR-007 elevation to M2.4** (operator-ratified at M2.3 S2 plan approval 2026-05-20).

ADR-007 (`tool_use_logging`) stays in `provisional → queued-forecast` status in the campaign master ADR roadmap. No `what/decisions/adr_007_tool_use_logging.md` file is created at M2.3. M2.4 ratifies the elevation (`accepted`) **only if** the SQLite captured-session threshold (≥ 10) is crossed by M2.4 entry.

## §2 — Gap analysis (n=7 vs threshold ≥ 10)

### Captured today (as of M2.3 S2 entry 2026-05-20T06:01Z)

| Source | Captured | Available data |
|---|---|---|
| SQLite `sessions` table | **7** | Distinct sessions since M1.4 Amendment E went LIVE 2026-05-19 |
| SQLite `tool_calls` table | 714 | Per-tool calls with `claude_session_id` + `transcript_path` populated; subset has `re_read`, `traversal_id`, `recipe_id` |
| SQLite `context_traversal` table | 55 | Cross-vault traversal events (38 aDNA.aDNA→node.aDNA + 13 →LatticeNetwork.aDNA + 3 →LatticeLabs.aDNA + 1 →LatticeAgent.aDNA) |
| Per-session JSON reports | 49 | `~/.adna/measurement/reports/session_*.json` — M1.4 `ingest_transcript.py` backfill (3,646 turns total) |

### Threshold for ratification

| Threshold | Where set | Rationale |
|---|---|---|
| **≥ 10 SQLite captured sessions** | M1.3 §6 + ADR-016 prep notes + M2.4 mission spec deliverable gate | Empirical n for confident pattern detection above SQLite live-hook noise floor; matches small-sample statistical convention (n ≥ 10 for distribution-shape inference); preserves the doctrinal separation between *capture mechanism ratified* (already LIVE since M1.4 Amendment E) vs *capture analysis ratified* (requires sufficient n) |

### Why n=714 tool_calls alone is insufficient

- **Per-session distribution shape unmeasured**: 7 sessions is too few to characterize the distribution of tool_calls per session. Means/medians have wide confidence intervals.
- **Tool-use pattern stability unverified**: 7 sessions covers 1 implementation-class S2 destructive (M1.4 S2) + 2 single-session planning (M2.2 + M1.5) + 1 implementation-class S1 (M2.1 S1) + 1 implementation-class S2 (M2.1 S2) + 1 implementation-class S3 (M2.1 S3) + 1 implementation-class S1 (M2.3 S1 itself). Diversity is good; volume is not.
- **Re-read rate observed at 26.8%** (m23_obj2 §7) but small-n caveat: 168 reads / 7 sessions = 24 reads/session mean. M2.4 needs ≥ 24 × 10 ≈ 240 reads to confirm the rate stabilizes.
- **Cross-vault traversal patterns** (55 events) skew toward early M1.5 (aDNA.aDNA→node.aDNA dominant); M2.x patterns under-represented.

### Closing-the-gap forecast

| Event | Sessions added | Cumulative |
|---|---|---|
| M2.3 S1 (this session's predecessor) | 1 | 8 |
| M2.3 S2 (current session — counts post-close) | 1 | 9 |
| M2.3 S3 (mission close) | 1 | **10** ✅ threshold crossed |
| M2.4 entry session | 1 | 11 (one-session buffer) |

**Trigger condition**: M2.4 elevates ADR-007 at its S1 entry IF SQLite `sessions` table count ≥ 10 at M2.4 plan ratification. If parallel pre-M2.3 sessions intervene (e.g., M2.1.5 retroactive Op 3 + any M1.5 follow-ups), the threshold is crossed earlier — M2.4 still ratifies at its entry without re-counting.

## §3 — What ADR-007 elevation looks like at M2.4 (forward contract)

Per M2.3 mission spec §Objective 5 ("if D2=A operator-override, draft `adr_007_tool_use_logging.md` skeleton") — M2.4 produces the skeleton when threshold is crossed. The forward contract:

### M2.4 entry deliverables (if threshold crossed)

1. **`what/decisions/adr_007_tool_use_logging.md`** with `status: accepted` — Status + Context + Decision (3 clauses):
   - Clause A: PostToolUse hook payload capture (LIVE since M1.3 S2; ratifies what's running).
   - Clause B: SQLite store schema + retention (M1.4 v0.1.1 schema; sessions + tool_calls + context_traversal tables).
   - Clause C: Analysis dispatch contract (M2.4 heat-map produces pattern-β re-rank if applicable + reads `re_read`, `traversal_id`, `recipe_id` columns at scale).

2. **Citations from M2.4 heat map data** (not from M2.3 corpus — M2.4 uses post-threshold SQLite snapshot for confidence).

3. **§Status entry** recording the elevation chain: ADR-007 *provisional* at M1.3 → *queued-forecast* at M2.2 → *deferred* at M2.3 S2 (this memo) → *accepted* at M2.4 (target).

### M2.4 deliverables (if threshold NOT crossed)

If parallel sessions decrement the count somehow (highly unlikely — SQLite is additive-only at the sessions table), or if M2.4 surfaces evidence that doctrine refinement is needed before ratification, M2.4 produces a **refresh** of this memo (incrementing the n threshold or adding a new gate) and ADR-007 stays `queued-forecast`.

## §4 — Why a memo and not a draft ADR-007 with `status: provisional`

Alternative considered at D2=A: draft `adr_007_tool_use_logging.md` with `status: provisional` and a "ratifies at M2.4 once n ≥ 10" forward-looking §Status note.

**Rejected at M2.3 S2** because:

1. **Doctrinal-cleanliness**: ADR `status: accepted` should mean *accepted*; `status: provisional` should be reserved for ADRs that are *partially* accepted (e.g., one clause ratified, one deferred), not for ADRs that are *not yet drafted*. The current `provisional → queued-forecast → accepted` track in the campaign master roadmap is sufficient signaling.
2. **Avoid premature lock-in**: Drafting the ADR text at M2.3 risks pre-committing to phrasing that M2.4 evidence would refine. M2.4 owns the authorship.
3. **Precedent matches M2.2 D1 auto-archive deferral**: M2.2 chose D1 deferral via the §D1 deferral section *inside* ADR-016 (one section, no separate file). M2.3 chose to externalize the deferral rationale because it touches a *different* ADR (ADR-007, not ADR-016), so a separate artifact is the cleanest place to record it. Cross-reference both at ADR-016 §Sources and §Sibling/related.

## §5 — Cross-references

- [[../mission_adna_str_p2_m23_convergence_validation.md|M2.3 mission spec]] §Operator decision gates D2 + §Objectives 5
- [[../../../../what/decisions/adr_016_per_mission_context_budget.md|adr_016_per_mission_context_budget.md]] §Status (M2.3 amendment line); §Sources (this memo cross-referenced); §Consequences §4 (M2.3 resolution)
- [[m23_obj2_corpus_extraction.md|m23_obj2_corpus_extraction.md]] §6-§8 — SQLite tool-call + re-read + traversal evidence
- [[m23_obj3_initial_findings.md|m23_obj3_initial_findings.md]] §5 (D2 recommendation rationale)
- [[../campaign_adna_serious_tool_readiness.md|campaign master]] §ADR roadmap row for ADR-007 (`queued-forecast` status preserved post-D2=B)

## §6 — Acceptance check (mission spec §Acceptance criteria item)

- [x] §1 D2=B decision explicitly recorded with operator ratification reference
- [x] §2 gap analysis: n=7 SQLite captured sessions today vs ≥ 10 threshold; quantitative breakdown of why n=714 tool_calls is insufficient on its own
- [x] §2 closing-the-gap forecast names M2.3 S3 close as the threshold-crossing event (sessions 7 → 10)
- [x] §3 forward contract names M2.4 entry as the elevation point with skeleton ADR deliverable list
- [x] §4 alternative considered (D2=A draft skeleton at M2.3) rejected with explicit doctrinal rationale
- [x] §5 cross-references to mission spec + ADR-016 + S1 sibling artifacts + campaign master
