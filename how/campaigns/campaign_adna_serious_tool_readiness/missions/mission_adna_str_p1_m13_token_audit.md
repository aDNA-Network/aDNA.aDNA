---
type: mission
mission_id: mission_adna_str_p1_m13_token_audit
campaign: campaign_adna_serious_tool_readiness
phase: 1
mission_number: 1.3
slug: token_audit
created: 2026-05-18
updated: 2026-05-18
status: in_progress
opens_at: 2026-05-18T19:33:55Z
opened_session: session_stanley_20260518_193355_v8_m13_s1
closed_at: TBD
closed_session: TBD
estimated_sessions: 2-3
actual_sessions: TBD
persona: rosetta
last_edited_by: agent_stanley
spec_completeness: complete
mission_class: implementation  # canonical 3-session shape per S.O. #17
token_budget_estimated: "S1 ~80-120 kT (Type C planning + ADR + hook spec); S2 ~120-160 kT (live instrumented runs + retrospective analysis); S3 ~60-80 kT (calibration + AAR + close)"  # per S.O. #12; self-measured at session close for calibration
tags: [mission, m1_3, v8, p1, token_audit, measurement_protocol, post_tool_use_hook, sqlite, convergence_model, adr_016, type_c_self_referential]
prerequisite_missions:
  - mission_adna_str_p0_planning            # P0 — campaign opened 2026-05-17
  - mission_adna_infra_p1_05_publish_skill_rewrite  # v2 M05 ship-before (closed 2026-05-18T15:19Z+)
  - mission_adna_infra_p1_06_v7_governance_tag      # v2 M06 v7.0 tag (closed 2026-05-18T19:10Z+)
prerequisite_artifacts:
  - how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj9_token_measurement_protocol.md   # verbatim input
  - how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m02_obj5_ecosystem_baseline_locked.md    # 19-vault Type A population
  - how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj0_ecosystem_matrix.md            # source ecosystem matrix
  - what/context/prompt_engineering/context_prompt_engineering_convergence_model.md  # the model §3 validates
target_adr: none (ADR-016 deferred to M2.2 per master ADR roadmap + Standing Order #14)
fires_v8_checkpoint: none (P1 internal mission)
unblocks_missions:
  - mission_adna_str_p1_m14_latticescope_schema     # M1.4 LatticeScope v0.1 schema activation (depends on M1.3 baseline)
deliverables_count: 7
hard_dependency_satisfied: "v7.0 tag exists at LatticeProtocol/aDNA commit 27e6395 (tag SHA 3681f76) — per Standing Order #16"
---

# M1.3 — Token Audit + Measurement Protocol Activation

> **Mission executes** [[../../campaign_adna_v2_infrastructure/missions/artifacts/m01_obj9_token_measurement_protocol.md|M01 Obj 9 (v2 campaign)]] — the *measurement plan*. Obj 9 = plan; M1.3 = execution. The 466-line protocol is consumed verbatim; this mission produces the **baseline data** at `node.aDNA/what/context/token_baselines.md` (S3 destination) plus the supporting infrastructure (PostToolUse hook + SQLite store + calibration outputs + per-mission budget ADR-016).
>
> **Self-reference (Standing Order #8)**: M1.3 is itself a Type C planning + implementation session series. This S1 measures itself as one of the calibration inputs at S2 retrospective analysis. *The protocol designed itself; M1.3 measures itself measuring itself.* Standing Order #3 ("Context budget is doctrine") becomes measurable here, not aspirational.
>
> **North-star alignment**: M1.3 is the first measurement infrastructure that lets v8 evaluate the operator-stated UX goal *"easy and fluid way to build/operate/utilize context graphs"* with hard numbers instead of folklore.

## Mission scope

Execute Obj 9 §1–§5 against the live 19-vault ecosystem + 5 representative campaign sources. Produce baseline data + optimization opportunity catalog + ADR-016 ratification + LatticeScope schema-fit re-walk feeding M1.4. Implementation-class; canonical 3-session shape (S1 non-destructive spec + ADR draft / S2 destructive execution + verification / S3 mission close + AAR).

**5 canonical outputs** (per Obj 9 §1–§5):

1. Cold-start baseline — Type A × 19 vaults + Type B × 2 + Type C × 3
2. High-cost pattern identification — α/β/γ/δ measured + ranked
3. Convergence model validation — Rosetta P7 D8–D10 retrospective
4. PostToolUse hook + SQLite store activation
5. Calibration output — effort-estimate formula + per-mission-type token-profile distributions + top-3 optimization opportunities + AGENTS.md heat map + convergence-model verdict

## Objectives

### 1. Author this mission spec (S1)

- **Status**: in_progress (this file)
- **Session**: S1
- **Read**: Obj 9 full text (466 lines); v2 mission spec exemplars (M03 + M05); campaign master §Phase 1
- **Produce**: this file (`mission_adna_str_p1_m13_token_audit.md`)
- **Depends on**: P0 close (done); v7.0 tag (done)

### 2. Draft PostToolUse hook implementation spec (S1)

- **Status**: pending
- **Session**: S1
- **Read**: Obj 9 §4 (bash + SQLite schema + settings.json snippet); Claude Code `update-config` skill (offline reference)
- **Produce**: `missions/artifacts/m13_obj2_post_tool_use_hook_spec.md` — full bash outline + SQLite schema (sessions + tool_calls tables) + `settings.json` snippet + privacy/safety notes + `--self-test` mode + per-payload field extraction (`jq` lookups) + idempotent schema init + per-session isolation + JSON payload schema validation steps
- **Depends on**: 1
- **Self-test gate**: Spec must include `--self-test` invocation example that runs against a synthetic JSON payload (dummy Read call) and verifies schema init + insert without a live Claude Code session.

### 3. Produce Type A static measurement across 19 vaults (S1)

- **Status**: pending
- **Session**: S1
- **Read**: `m02_obj5_ecosystem_baseline_locked.md` (19-vault inventory); per-vault CLAUDE.md + STATE.md + active mission file (lightweight reads)
- **Produce**: `missions/artifacts/m13_obj3_type_a_baseline.md` — table with 19 rows: vault name × CLAUDE.md tokens × STATE.md tokens × active-mission-file tokens × CP-0 (CLAUDE.md alone) × CP-1 (orientation set total). **Method per D3 default**: Python tokenizer (tiktoken `cl100k_base` approximation) over file content; line counts via `wc -l`; cross-check 2-3 vault values against live cold-start CP-0 estimate at S2.
- **Method limitation**: tiktoken approximates Anthropic's tokenizer; expected drift ≤ 5%. Documented as known calibration error.
- **Depends on**: 1

### 4. Install PostToolUse hook + SQLite logger + `--self-test` PASS (S2)

- **Status**: pending — **S2 destructive entry**
- **Session**: S2
- **Requires**: explicit operator approval per Standing Order #1
- **Read**: hook spec from Obj 2 (this mission); current `.claude/settings.local.json` (project-local target per D2 default — safer than `~/.claude/settings.json` workspace-wide)
- **Produce**: working hook at `<TBD path>/measurement_hook.sh` + chmod +x + settings.local.json entry + initial SQLite schema at `~/.adna/measurement/measurement.sqlite` + `--self-test` PASS evidence
- **Depends on**: 2 + 3 (S1 closure)
- **Rollback path**: delete settings.local.json hooks entry (single-file delete); SQLite database can be wiped or preserved per operator preference.

### 5. Execute live Type B + C instrumented runs (S2)

- **Status**: pending
- **Session**: S2
- **Read**: hook output stream (live SQLite logs)
- **Produce**: 5 instrumented session runs at `missions/artifacts/m13_obj6_type_bc_runs.md` — Type B × 2 (Operation Rosetta P7 D-cycle re-run + Wilhelm AI MW2 voice-mapping re-run) + Type C × 3 (this S1 retrospective replay if cache permits + v2 M01 S2 S1 retrospective + RareHarness P1 closeout retrospective).
- **Constraint**: prefer retrospective analysis over live re-run where logged sessions exist (D4 default).
- **Depends on**: 4

### 6. Pattern α/β/γ/δ ranking + convergence model validation (S2)

- **Status**: pending
- **Session**: S2
- **Read**: SQLite tool_calls table (post Obj 6); Rosetta P7 D8–D10 session-history files (16 sessions M32+M33+M34); convergence model article
- **Produce**: `missions/artifacts/m13_obj6_pattern_ranking.md` — patterns α/β/γ/δ ranked by token-savings impact × ease of implementation; convergence model verdict (Validated / Refuted / Mid-magnitude).
- **Depends on**: 5

### 7. Calibration output + token_baselines.md + AAR + mission close (S3)

- **Status**: pending
- **Session**: S3
- **Read**: all S1 + S2 outputs; M01 Obj 10 LatticeScope schema design (`m01_obj10_latticescope_vault_design.md` v0.1 schema); campaign master §Decision Points D8+
- **Produce**:
  - `missions/artifacts/m13_obj7_calibration_output.md` — revised effort-estimate formula + per-mission-type token-profile distributions + top-3 optimization opportunities + AGENTS.md heat map per Obj 9 §5
  - `node.aDNA/what/context/token_baselines.md` (canonical baseline; companion `.yaml` for FAIR metadata) + `node.aDNA/what/inventory/inventory_*.yaml` row registering the new content entity
  - `missions/artifacts/aar_m13_token_audit.md` — lightweight 5-line + 4-category extended findings; load-bearing finding likely: empirical Validated/Refuted/Mid-magnitude verdict on convergence model
  - Obj 9 → Obj 10 schema-fit re-walk per Obj 9 §6 (8-row matrix; new "N" rows surface as M1.4 schema amendments)
  - ADR-016 (Per-mission context budget) seeded as M2.2 entry (input for P2; not drafted at M1.3 per master ADR roadmap + Standing Order #14)
  - Campaign master M1.3 row `in_progress → completed`; M1.4 row marked `next`
- **Depends on**: 6

## Deliverables

| # | Deliverable | Session | Status |
|---|---|---|---|
| 1 | M1.3 mission spec | S1 | in_progress (this file) |
| 2 | PostToolUse hook spec | S1 | pending |
| 3 | Type A baseline (19 vaults) | S1 | pending |
| 4 | PostToolUse hook installed + `--self-test` PASS | S2 | pending |
| 5 | Type B + C runs (5 sources) | S2 | pending |
| 6 | Pattern ranking + convergence-model verdict | S2 | pending |
| 7 | Calibration output + token_baselines.md + AAR + Obj 9 → Obj 10 schema-fit re-walk + M1.4 unblocked | S3 | pending |

## Acceptance criteria

- [ ] All 7 deliverables landed (S1: 1-3; S2: 4-6; S3: 7)
- [ ] PostToolUse hook `--self-test` PASS (synthetic Read payload → schema init + insert)
- [ ] SQLite database populated with ≥ 1 live session of real tool_calls
- [ ] 19-vault Type A table populated (all rows filled; CP-0 + CP-1 columns)
- [ ] 5 Type B + C runs recorded (Type B × 2 + Type C × 3)
- [ ] Patterns α/β/γ/δ each have a quantified rank + savings estimate
- [ ] Convergence model verdict explicit: Validated / Refuted / Mid-magnitude
- [ ] `node.aDNA/what/context/token_baselines.md` exists with companion YAML
- [ ] ADR-016 prep notes seeded for M2.2 entry (descope-from-M1.3 rationale documented in this mission's AAR)
- [ ] Obj 9 → Obj 10 schema-fit re-walk produces 8-row matrix with any new "N" rows flagged for M1.4
- [ ] M1.3 AAR lightweight 5-line + 4-category extended findings landed
- [ ] Campaign master M1.3 row `completed`; M1.4 row `next`

## Operator decision gates (D1-D5)

| # | Question | Rosetta default | Resolved at |
|---|---|---|---|
| D1 | M1.3 mission_class — implementation OR hybrid? | **A: Implementation** (canonical 3-session shape; matches M03/M04/M05/M06) | S1 entry (this file) — RESOLVED A |
| D2 | PostToolUse hook install target — `~/.claude/settings.json` (workspace-wide) OR `.claude/settings.local.json` (project-local)? | **A: Project-local first** (safer; rollback is single-file delete; scoped to aDNA.aDNA) | S2 entry |
| D3 | Type A measurement method — Python tokenizer (static) OR live cold-start sessions? | **A: Python tokenizer** (Obj 9 §1 acceptable for Type A; live runs reserved for Type B + C) | S1 (Obj 3) — RESOLVED A |
| D4 | Convergence model validation source — Rosetta P7 D8–D10 retrospective OR live re-instrumentation? | **A: Retrospective** (sessions already in `history/`; live re-run wastes Type C tokens) | S2 entry |
| D5 | ~~ADR-016 scope~~ — moved to M2.2 per master ADR roadmap (P2) + Standing Order #14 (no cross-mission ADR overhang). M1.3 produces inputs feeding the M2.2 decision; M1.3 itself does not draft ADR-016. | n/a (deferred) | M2.2 entry |

## Hard constraints

- **No `settings.json` modifications at S1** — PostToolUse hook install is S2-only (operator-gated per S.O. #1).
- **No `node.aDNA/` mutations until S3** — `token_baselines.md` lands at S3, not S1/S2.
- **No upstream `.adna/` repo touches** — v7.0 tag is frozen; any template-level findings route through `skill_upstream_contribution.md` at S3 close.
- **No partner-vault contact** — 4 partner-affiliated embargo memos stay `status: draft` per D5 passive (v2 close).
- **Operation Rosetta Phase 8 stays absorbed-by-v8** — no separate Rosetta P8 mission opens here.
- **Per S.O. #14** — ADR-016 (per-mission context budget) NOT drafted at M1.3; deferred to M2.2 per master ADR roadmap (P2 M2.2 forecast). Standing Order #14 (no in-flight ADR ratifications mid-phase) honored.
- **No file content captured by the hook** — only metadata (path, LOC, offset, limit, token usage). Standing Order #2 (data integrity) preserved.
- **Database lives outside vaults** — `~/.adna/measurement/measurement.sqlite` (workspace-root-private; not in any `.aDNA/` directory; no `.gitignore` rule needed).

## Standing Order discharges

| # | Order | M1.3 discharge |
|---|---|---|
| 1 | Phase gates are human gates | S2 destructive entry (hook install) requires explicit operator approval; M1.3 → M1.4 handoff at S3 close requires operator approval |
| 3 | Context budget is doctrine | This mission *measures* the doctrine; produces ADR-016 to *enforce* it |
| 5 | Every mission gets an AAR | AAR at S3 close (`aar_m13_token_audit.md`) |
| 6 | Archive, never delete | Obj 9 spec stays at v2 location; M1.3 references via wikilink |
| 8 | Self-reference mandatory | This S1 IS a Type C session; M1.3 measures itself measuring itself; spec cites Obj 9 as planning-vs-execution mirror |
| 10 | Cross-link aggressively | This spec has ≥ 10 wikilinks: Obj 9 + Obj 10 + node.aDNA + campaign master + 4 prereq artifacts + convergence model + Standing Orders |
| Campaign #12 | Per-mission context budget | Frontmatter `token_budget_estimated` populated; ADR-016 hardening to project-level Standing Order DEFERRED to M2.2 per master ADR roadmap |
| Campaign #14 | ADR ratification gated at phase entries | Honored — ADR-016 NOT drafted at M1.3; deferred to M2.2 per master forecast |
| Campaign #16 | v7.0 tag dependency | Satisfied at v2 M06 S2 close 2026-05-18T19:10Z+ |
| Campaign #17 | Mission_class discipline | `mission_class: implementation` |
| Campaign #19 | Phase exit = human gate | Applies at M1.3 → M1.4 handoff (S3 close), not S1 |

## Cross-vault impact

- **`node.aDNA/`** — receives `what/context/token_baselines.md` at S3 + `what/inventory/inventory_*.yaml` row. Local-only by default per workspace router Standing Rule 4.
- **`LatticeScope.aDNA/`** — does NOT exist yet; M1.4 bootstraps using v2 M01 Obj 10 design. M1.3 output is M1.4's primary input.
- **`III.aDNA/`** — coord memo at Phase 5 (M5.5); not affected at M1.3.
- **`LatticeTerminal.aDNA/`** — Phase 4 partner; not affected at M1.3.
- **`lattice-labs/`** — Berthier monitors via existing dispatch channel; no new coord memo for M1.3.
- **17 partner-vault v7.0 migrations** — unfrozen but operator-discretionary; M1.3 does not own.

## Self-reference + dual-audience

**Self-reference** (Standing Order #8): This mission is itself a Type C planning + implementation session series. The S1 session is one of the calibration inputs to S2's pattern ranking. Recursive measurement: the protocol designed itself (Obj 9 in S2 S5 of v2 M01), then M1.3 measures itself (this session). Standing Order #3 becomes operational here.

**Dual-audience** (Standing Order #7):

- **Developer reads**: Obj 9 §4 (bash + SQLite + settings.json), this spec §Acceptance criteria + §Operator decisions, ADR-016 narrow scope. Direct, executable, reproducible.
- **Newcomer reads**: Obj 9 §0 ("doctrine has never been measured; folklore vs data") + this spec mission scope opening paragraph + AAR §load-bearing finding (Validated/Refuted/Mid-magnitude verdict). Plain language; why before how.

Both audiences land at the same conclusion: **doctrine without measurement is folklore; this mission replaces folklore with data.**

## Risks

| Risk | Severity | Mitigation |
|---|---|---|
| PostToolUse hook spec drifts from Claude Code actual JSON payload schema | Medium | S1 spec spot-validation against Claude Code docs; S2 `--self-test` mode before live use |
| Type A static measurement undercounts (tiktoken ≠ Anthropic tokenizer) | Low-Medium | Cross-check 2-3 vault static counts against live cold-start CP-0 at S2; recalibrate if drift > 5% |
| Convergence-model retrospective lacks per-checkpoint granularity | Medium | Document approximation method; recommend live re-run as M1.3 follow-up if data insufficient |
| ADR-016 broadens mid-mission (scope creep) | Low | D5 default narrow; broader scope deferred to ADR-017+ |
| 19-vault Type A surfaces inventory drift since 2026-05-09 lock | Low | Reconcile against current `node.aDNA/what/inventory/inventory_vaults.yaml`; flag drift |

## Status

**S1 in progress.** Mission file authored; Objs 2-3 next this session (hook spec + Type A baseline; ADR-016 descoped from S1 per Standing Order #14). S2 destructive entry operator-gated. S3 mission close pre-allocated.

**Forward-references**: M1.3 unblocks M1.4 (LatticeScope.aDNA v0.1 schema activation) at S3 close. M1.3 outputs feed v8 P2 missions (M2.1 context file audit + M2.2 per-mission context budget Standing Order ratification + M2.3 convergence model validation cross-campaign retrospective + M2.4 AGENTS.md heat map).

## Cross-references

- [[../../campaign_adna_v2_infrastructure/missions/artifacts/m01_obj9_token_measurement_protocol.md|m01_obj9_token_measurement_protocol.md]] — verbatim input (the *plan*)
- [[../../campaign_adna_v2_infrastructure/missions/artifacts/m01_obj10_latticescope_vault_design.md|m01_obj10_latticescope_vault_design.md]] — schema-fit re-walk target (S3)
- [[../../campaign_adna_v2_infrastructure/missions/artifacts/m02_obj5_ecosystem_baseline_locked.md|m02_obj5_ecosystem_baseline_locked.md]] — 19-vault Type A population
- [[../../campaign_adna_v2_infrastructure/missions/artifacts/m01_obj0_ecosystem_matrix.md|m01_obj0_ecosystem_matrix.md]] — source ecosystem matrix
- [[../../../what/context/prompt_engineering/context_prompt_engineering_convergence_model.md|context_prompt_engineering_convergence_model.md]] — the model §3 validates
- [[../campaign_adna_serious_tool_readiness.md|campaign_adna_serious_tool_readiness.md]] — campaign master §Phase 1
- [[../CLAUDE.md|campaign CLAUDE.md]] — Standing Orders 11-19
- [[../../../../CLAUDE.md|project CLAUDE.md]] — Standing Order #3 (Context budget is doctrine)
- `~/.claude/settings.local.json` — hook configuration target (D2 default; S2)
- `~/.adna/measurement/measurement.sqlite` — measurement database (workspace-root-private; outside all vaults)

## Completion summary

*Filled at S3 close.*

### Deliverables

- TBD (8 deliverables enumerated above)

### Descoped

- TBD

### Key findings

- TBD (load-bearing finding likely: convergence model verdict)

### Scope changes

- TBD

## AAR

*Lightweight 5-line + 4-category extended findings at S3 close. See `missions/artifacts/aar_m13_token_audit.md`.*

- **Worked**: TBD
- **Didn't**: TBD
- **Finding**: TBD
- **Change**: TBD
- **Follow-up**: TBD
