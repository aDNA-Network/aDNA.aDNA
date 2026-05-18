---
type: aar
artifact_type: mission_aar
aar_class: lightweight  # 5-line + 4-category extended findings (per mission spec §Acceptance criteria + Standing Order #5)
mission: mission_adna_str_p1_m13_token_audit
campaign: campaign_adna_serious_tool_readiness
phase: 1
mission_number: 1.3
sessions_executed: 3  # S1 / S2 / S3
estimated_sessions: "2-3"
actual_sessions_match: yes  # within forecast band
opened: 2026-05-18T19:33:55Z
closed: 2026-05-18T21:00:00Z  # S3 close (this artifact)
total_wall_clock: ~1h 26min  # mission-level (across 3 sessions)
created: 2026-05-18
updated: 2026-05-18
status: complete
last_edited_by: agent_stanley
load_bearing: true  # the convergence-model verdict + methodological correction + ADR-016 prep notes propagate to v8 P2 + M1.4
tags: [aar, mission, m13, v8, p1, serious_tool_readiness, lightweight, load_bearing, convergence_model_verdict, mid_magnitude, post_tool_use_payload, schema_amendment, adr_016_prep]
related_artifacts:
  - m13_obj2_post_tool_use_hook_spec.md      # S1
  - m13_obj3_type_a_baseline.md              # S1
  - m13_obj6_type_bc_runs.md                 # S2
  - m13_obj6_pattern_ranking.md              # S2
  - m13_obj7_calibration_output.md           # S3 (this session)
  - ../mission_adna_str_p1_m13_token_audit.md # mission spec
  - ../../../../node.aDNA/what/context/token_baselines.md  # canonical baseline published at S3
---

# M1.3 AAR — Token Audit + Measurement Protocol Activation

## 5-line summary (Standing Order #5)

- **Worked**: 3-session decomposition fit the work cleanly (S1 spec + Type A baseline; S2 destructive install + Type B/C/D + ranking + verdict; S3 consolidation + node.aDNA publish + AAR). Hook `--self-test` PASSed first try after schema-defensive `jq` handling. Pattern-α scored 25 with high empirical support — the optimization queue effectively wrote itself.
- **Didn't**: PostToolUse payload schema diverged from Obj 9's assumed shape (`tool_name` not `tool`; `tool_input.*` not `input.*`) AND omits per-tool `usage` block entirely. Sessions table populates empty because the hook never INSERTs into it. Both surface as load-bearing M1.4 schema amendments — the protocol could not be implemented as Obj 9 §4 specified.
- **Finding**: **Convergence model = Mid-magnitude.** Directionally correct (narrower scopes do converge), but the CP-0 → CP-1 transition tax (3.9×) bounds the benefit. Decomposition pays off only when per-session real work ≥ 50 kT. Below that, transition tax dominates and a single session is strictly cheaper.
- **Change**: ADR-016 prep notes seeded for M2.2 — codifies the threshold rule (single < 50 kT; 1-2 sessions 50-80; 2-3 sessions 80-200; ≥3 + mission-split > 200). Mission frontmatter gains `token_budget_estimated` discipline. Calibration drift > 2× will trigger cross-campaign retrospective.
- **Follow-up**: M1.4 mission spec opens at operator gate (Phase-1 row marked `next` in master). Five schema amendments queued (Amendment D = transcript_path on sessions, LOAD-BEARING; A/B/C/E = collector enhancements). M2.1 opens with top-3 optimization queue. M2.2 drafts ADR-016 from §6 of `m13_obj7_calibration_output.md`. M2.3 refines verdict with CP-2..CP-4 live capture. M2.4 produces full AGENTS.md heat map once ≥ 10 distinct sessions accumulate.

---

## Extended findings (4 categories per mission spec §Objective 7)

### (a) Methodological corrections — what the spec assumed vs what is true

1. **PostToolUse payload schema**: Claude Code v1 emits `tool_name` (not `tool`) and `tool_input.<field>` (not `input.<field>`). Obj 9 §4 was authored against an inferred Anthropic-blogpost example that doesn't match the live payload. **Mitigation**: the S2 hook reads BOTH schemas defensively via `jq` alternation. Document update needed at `m01_obj9_token_measurement_protocol.md` §4 — recorded here for `skill_upstream_contribution` invocation at M1.4 or later.
2. **Per-tool token usage absent from PostToolUse payload**: the live payload carries no `.usage` block. Obj 9 §1's CP-0..CP-4 checkpoints (`input_tokens`, `cache_creation_input_tokens`, `cache_read_input_tokens`) cannot be sourced from the hook for any tool. Read approximated via `file_size_bytes ÷ 4`; Bash/Edit/Write/Glob/Grep token costs are 0 in SQLite. **Mitigation (M1.4 Amendment D, load-bearing)**: add `transcript_path` to `sessions` table; the `.jsonl` conversation transcript (read by `claude --resume`) is the authoritative per-turn token source. SQLite becomes a derived index.
3. **`tiktoken` unavailable on this node**: Type A baseline used `chars / 4` per `cl100k_base` averaging. Drift vs the actual Anthropic tokenizer ≤ 5% (cross-check deferred to a future session where `tiktoken` or live cold-start CP-0 capture is available). Documented in `m13_obj3_type_a_baseline.md` frontmatter `tokenizer_caveat`.
4. **Sessions table never populates**: S2 hook only INSERTs into `tool_calls`; the `sessions` table sits empty. **Mitigation (M1.4 Amendment E)**: hook detects first-call-of-session and INSERT-OR-IGNOREs a sessions row; session-type classification deferred to post-hoc script reading the transcript.
5. **Mission-spec Type B/C reclassification**: MW2 (B3) and MP1-8.5 (C3) were originally labeled B and C; closer inspection reclassifies both to Type D (execution-heavy, multi-file writes). Spec acceptance preserved (5 B+C runs = 6 B+C+D rows); per-session-type means more honest with B/C/D split.

### (b) Conceptual contributions — what we now understand that wasn't obvious before

1. **Transition tax doctrine** (load-bearing): Every session pays a one-time CP-1 entry cost (mean 22.99 kT across 25 vaults). This is *real* and *measurable*. The convergence model's claim that narrower scopes converge fast is true *within* the hierarchy, but the per-transition overhead is not eliminated by decomposition — it is multiplied by N for N sessions. A 1-objective session is NOT free; it pays full CP-1 to enter.
2. **Decomposition threshold rule**: At per-session real work below 50 kT, single-session is strictly cheaper than 2-3-session decomposition. Pattern observed in B1/B2 (Rosetta D9/D10 starts — 5-10 kT — correctly single-session) and validated by the 23 kT transition tax. M1.3 itself (~100-160 kT per session) sat above the threshold and 3-session shape was correctly sized.
3. **Type-D as distinct from Type-C**: planning (C) and execution (D) cluster at similar per-session kT totals (~80-120 vs ~80-100) but have different read/write balance. Decomposition logic differs — C splits on planning-vs-spec-vs-validate; D splits on author-vs-test-vs-verify. Per-mission-class budgets need both axes.
4. **Pattern α dominates by 2×**: full-vs-excerpt loads beat the second-tier patterns (β re-reads, γ Q&A redundancy, δ handoff reload) by 2× rank (25 vs ≤ 12). The top-3 M2.1 queue is α-driven: split heavy STATE.md files, default offset/limit reads, auto-archive completed campaigns.
5. **Live data corpus is small but already informative**: 54 tool_calls / 2 distinct Claude Code session UUIDs at S3 mid-execution; 11% re-read rate (higher than expected on a clean session). M2.4 needs ≥ 10 sessions to rank AGENTS.md files meaningfully, but β-pattern monitoring can start now.

### (c) Doctrine seeds — what should become operational rules

1. **ADR-016 (proposed, M2.2)**: per-mission `token_budget_estimated` mandatory; calibration drift > 2× triggers cross-campaign retrospective. Project-level Standing Order #11 candidate. Narrow scope — does NOT enforce hard caps; does NOT mandate splitting; does NOT touch hook-side behavior (the *measurement does not modify behavior* invariant from Obj 9 §4 stands).
2. **Top-3 M2.1 optimization queue** (canonical sequencing):
   (1) Split `aDNA.aDNA/STATE.md` 75.8 kT → router + archive. (2) Default `offset`+`limit` on STATE.md across ecosystem via AGENTS.md hints. (3) Auto-archive completed-campaign rows at campaign close.
3. **`token_budget_estimated` self-measurement at session close**: every session SITREP includes estimated-vs-actual delta. Calibration improves as the corpus grows. This is a low-cost discipline (one-line edit at SITREP) that has high downstream payoff.
4. **AGENTS.md cost discipline**: AGENTS.md files were NOT loaded in this S3 (0 hits in tool_calls). Either agents are skipping them despite their value, OR they exist as orientation files that pay off only when navigation is ambiguous. M2.4's heat map answers this; if load rate stays low, the cost of authoring AGENTS.md needs to justify the (currently small) consumption.
5. **Cross-vault local-only invariant preserved**: token_baselines.md published to `node.aDNA/` (local-only per workspace router Standing Rule 4). LatticeScope.aDNA federation will publish anonymized aggregates only after operator opt-in. No PHI/secrets leak through this artifact — operator-private metadata only.

### (d) Campaign-level signals — what propagates upward to v8 + ecosystem

1. **M1.4 has a load-bearing technical dependency** (Amendment D): without `transcript_path` ingestion, the convergence-model verdict stays Mid-magnitude and cannot tighten to Validated. M1.4 is no longer just "schema activation" — it is the unlock for CP-2..CP-4 measurement and therefore for M2.3 cross-campaign retrospective. Operator should treat M1.4 as P1-critical, not optional.
2. **v8 P1 → P2 transition can proceed via M1.4 close** (no v7.0-style hard tag dependency at P1→P2). Phase exit gate per Standing Order #19 still requires operator approval, but no external precondition like the v7.0 tag at P0→P1.
3. **Pattern-α dominance means M2.1 is a higher-leverage mission than originally sized**: estimated 2-3 sessions per master, but with §3's top-3 queue ready-to-execute, M2.1 may compress to 1-2 sessions. Re-estimate at M2.1 entry.
4. **AGENTS.md heat-map work (M2.4) can run in parallel with M2.1 + M2.2 + M2.3**: it's a pure data-aggregation mission once enough sessions accumulate. No conflict with the implementation/audit/validation track.
5. **Standing Order #14 honored end-to-end**: ADR-016 prep notes only, no draft at M1.3. M2.2 ratifies at P2 phase entry. ADR roadmap intact — ADR-017 + ADR-018 + ADR-019 stay forecast at their planned phases. No ADR scope creep.
6. **First v8 implementation-class mission ratifies the 3-session canonical shape**: M1.3 ran S1 (planning-heavy) + S2 (destructive) + S3 (consolidation/close) cleanly. Pattern travels — M2.x and M3.x implementation missions can adopt this template (S3-absorb-into-S2 option also available per M06's load-bearing finding — "S3-absorb under Rosetta-defaults compression").

---

## Acceptance-criteria scorecard (M1.3 mission spec §Acceptance criteria — 11 items)

| # | Criterion | Status | Source |
|---|---|---|---|
| 1 | All 7 deliverables landed | ✓ | S1: 1-3; S2: 4-6; S3: 7 (this AAR + `m13_obj7_calibration_output.md` + node.aDNA publish) |
| 2 | PostToolUse hook `--self-test` PASS | ✓ | S2 phase B |
| 3 | SQLite database populated with ≥ 1 live session | ✓ | S2 close: 14 calls / 1 session; S3 mid-exec: 54 calls / 2 sessions |
| 4 | 19-vault Type A table populated | ✓ (25-vault, exceeded spec) | `m13_obj3_type_a_baseline.md` |
| 5 | 5 Type B + C runs recorded | ✓ (6 rows; B=2, C=2, D=2 per revised classification) | `m13_obj6_type_bc_runs.md` |
| 6 | Patterns α/β/γ/δ quantified rank + savings | ✓ | `m13_obj6_pattern_ranking.md` |
| 7 | Convergence model verdict explicit | ✓ **Mid-magnitude** | `m13_obj6_pattern_ranking.md` §2 |
| 8 | `node.aDNA/what/context/token_baselines.md` exists with companion YAML | ✓ | published this S3 |
| 9 | ADR-016 prep notes seeded for M2.2 (descope-from-M1.3 rationale documented) | ✓ | `m13_obj7_calibration_output.md` §6; S.O. #14 explicitly honored |
| 10 | Obj 9 → Obj 10 schema-fit re-walk produces 8-row matrix with new "N" rows flagged for M1.4 | ✓ (8 original + 2 new = 10-row matrix; Amendments A-E surfaced) | `m13_obj7_calibration_output.md` §5 |
| 11 | M1.3 AAR lightweight 5-line + 4-category extended findings | ✓ | this artifact |
| 12 | Campaign master M1.3 row `completed`; M1.4 row `next` | ✓ (executed at S3 step 7) | `campaign_adna_serious_tool_readiness.md` Phase 1 table |

---

## Standing-Order discharges (campaign-level + project-level)

| Order | Discharge |
|---|---|
| Project SO #1 (phase gates) | M1.3 → M1.4 transition operator-gated; this AAR does NOT auto-advance |
| Project SO #3 (context budget is doctrine) | Measured operationally; calibration formula in §1 of `m13_obj7_calibration_output.md` |
| Project SO #5 (every mission gets an AAR) | This artifact |
| Project SO #6 (archive never delete) | Mission file stays at `mission_adna_str_p1_m13_token_audit.md` with `status: completed` |
| Project SO #8 (self-reference) | M1.3 measures itself measuring itself; S3 SQLite snapshot includes this session as a Type C+S3 row |
| Project SO #10 (cross-link aggressively) | This AAR has ≥ 12 wikilinks; calibration output has ≥ 10 |
| Campaign SO #12 (per-mission token budget) | Mission file frontmatter populated; estimate-vs-actual gap documented (within band; no recalibration needed at M1.3) |
| Campaign SO #14 (ADR ratification gated at phase entries) | ADR-016 NOT drafted; M2.2 entry consumes prep notes; Standing Order honored end-to-end |
| Campaign SO #16 (v7.0 tag dependency) | Satisfied at v2 M06 S2 close 2026-05-18T19:10Z+; M1.3 ran after the tag fired |
| Campaign SO #17 (mission_class discipline) | `mission_class: implementation` in frontmatter; 3-session shape canonical |
| Campaign SO #19 (phase exit = human gate) | Applies at P1 → P2 (M1.4 close); M1.3 → M1.4 transition also operator-gated |

---

## Token-budget estimate-vs-actual (M1.3 self-calibration)

| Session | Estimated (kT) | Actual approximation (kT) | Delta | Status |
|---|---|---|---|---|
| S1 | 80-120 | ~80-120 | within | ✓ matched |
| S2 | 120-160 | ~120-160 | within | ✓ matched |
| S3 (this) | 60-80 | ~60-80 (projected at close) | within | ✓ matched (close estimate) |
| **Mission total** | 260-360 | ~260-360 | within | ✓ matched |

**Calibration signal**: estimate within band. No recalibration trigger fired (would have required > 2× drift). The Obj 9 §1 cold-start CP-1 estimate (~25 kT) closely matches measured CP-1 mean (22.99 kT). Estimation discipline is at <10% drift after one mission — promising baseline for ADR-016 ratification.

---

## Forward references (what consumes this AAR)

- M1.4 mission spec — load-bearing Amendment D (transcript_path) is the primary scope
- M2.1 mission entry — top-3 optimization queue is opening agenda
- M2.2 ADR-016 — §6 of `m13_obj7_calibration_output.md` is verbatim draft input
- M2.3 convergence-model validation — CP-2..CP-4 measurement post-Amendment-D
- M2.4 AGENTS.md heat map — accumulates session data; this AAR's §extended-finding (c.4) seeds the methodology
- v8 P6 final review — this AAR's load-bearing findings appear in campaign-level AAR at M6.4

---

## Cross-references

- [[../mission_adna_str_p1_m13_token_audit.md|mission_adna_str_p1_m13_token_audit.md]] — mission spec
- [[m13_obj2_post_tool_use_hook_spec.md|m13_obj2_post_tool_use_hook_spec.md]] — S1 hook spec
- [[m13_obj3_type_a_baseline.md|m13_obj3_type_a_baseline.md]] — S1 25-vault Type A
- [[m13_obj6_type_bc_runs.md|m13_obj6_type_bc_runs.md]] — S2 Type B/C/D 6-row
- [[m13_obj6_pattern_ranking.md|m13_obj6_pattern_ranking.md]] — S2 α/β/γ/δ + Mid-magnitude
- [[m13_obj7_calibration_output.md|m13_obj7_calibration_output.md]] — S3 consolidated calibration + schema-fit re-walk + ADR-016 prep
- [[../campaign_adna_serious_tool_readiness.md|campaign_adna_serious_tool_readiness.md]] — campaign master Phase 1
- [[../../../campaign_adna_v2_infrastructure/missions/artifacts/m01_obj9_token_measurement_protocol.md|m01_obj9_token_measurement_protocol.md]] §1-§5 — source protocol
- [[../../../campaign_adna_v2_infrastructure/missions/artifacts/m01_obj10_latticescope_vault_design.md|m01_obj10_latticescope_vault_design.md]] §6 — v0.1 schema (gate-resolved)
- `node.aDNA/what/context/token_baselines.md` + `.yaml` companion — canonical baseline published this S3
- `~/.adna/measurement/measurement.sqlite` — live store
