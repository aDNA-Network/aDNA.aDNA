---
type: mission
mission_id: mission_adna_str_p1_m15_coord_network
campaign: campaign_adna_serious_tool_readiness
phase: 1
mission_number: 1.5
slug: coord_network
created: 2026-05-19
updated: 2026-05-19
status: completed
opens_at: 2026-05-20T03:14:53Z
opened_session: session_stanley_20260520T031453Z_v8_m15_s1
closed_at: 2026-05-20T03:37:34Z
closed_session: session_stanley_20260520T031453Z_v8_m15_s1
estimated_sessions: 1  # planning-class single-session shape — 2nd instance after M2.2 (canonical-shape exception per Campaign S.O. #17)
actual_sessions: 1  # single-session shape held; 2nd instance of planning-class single-session shape
persona: rosetta
last_edited_by: agent_stanley
spec_completeness: complete  # 9/9 deliverables landed at S1: mission spec + ADR-017 + ontology.md update + response memo + 2 placeholder flips + 1 new placeholder + AAR + status flips
mission_class: planning  # produces governance artifacts only — ADR + ontology.md edit + cross-vault response memo + backlog placeholder flips; no executable code per Campaign S.O. #17
token_budget_estimated: "S1 ~80-120 kT (planning-class single-session; ADR + ontology.md edit + cross-vault response memo + 2 placeholder flips + 1 new placeholder + AAR + status flips; larger than M2.2 60-90 due to cross-vault context-loading from 3 carry memos + 2 placeholder flips)"  # declared per Project Standing Order #11 (M2.2-ratified) + Campaign S.O. #12
tags: [mission, m1_5, v8, p1, p2_parallel, adr_017, network_adna, lip_0006, network_node_mirror, permission_edge, namespace_network, cross_vault_coord, parallel_discharge, planning_class, single_session_shape, mid_phase_adr_ratification, operator_override_so14, c1_consumer, c2_consumer, p2_close_consumer]
prerequisite_missions:
  - mission_adna_str_p1_m14_latticescope_schema        # M1.4 — closed 2026-05-19; M1.5 listed as next P1 row by master Phase-1 table
  - mission_adna_str_p2_m21_context_audit_split        # M2.1 — closed 2026-05-19; STATE.md router shape preserves M1.5-CLOSED bullet ≤ 20 kT
  - mission_adna_str_p2_m22_per_mission_budget         # M2.2 — closed 2026-05-19; ratifies Standing Order #11 token_budget_estimated frontmatter that this mission declares (S.O. #8 self-reference; first M1.x mission post-ADR-016)
prerequisite_artifacts:
  - who/coordination/coord_2026_05_19_v8_cross_vault_network_coordination.md   # M1.5 seeding memo; canonical 5 open Qs source
  - who/coordination/coord_2026_05_19_v8_cross_vault_disruption_assessment.md  # timing-critical §6 recommendation source (M1.5 within 1-2 sessions; target ≤ 2026-05-26)
  - how/backlog/idea_upstream_permission_edge_entity_type.md   # C2 placeholder; flipped at deliverable 5
  - how/backlog/idea_upstream_network_node_mirror_entity_type.md  # C2 placeholder; flipped at deliverable 6
  - what/decisions/adr_016_per_mission_context_budget.md  # ADR shape reference; precedent for single-session planning-class shape + 3-clauses-in-one ADR structure
  - what/decisions/adr_005_three_way_vault_boundary.md  # local ADR-005 — different from LatticeNetwork's ADR-005 (vault-name collision clarified in ADR-017 §Cross-references)
inbound_carries:
  - C1: LatticeNetwork.aDNA/who/coordination/coord_2026_05_18_adna_standard_network_category.md  # LIP-0006 countersign request
  - C2: LatticeNetwork.aDNA/who/coordination/coord_2026_05_18_adna_standard_interop.md  # `network_` namespace + 2 entity-types
  - P2-close-register: LatticeNetwork.aDNA/who/coordination/coord_2026_05_19_phase2_close_adna_standard.md  # Phase-2 register filing
target_adr: adr_017_network_adna_pattern_category_and_namespace_ratification
fires_v8_checkpoint: ADR-017 ratification at mid-P2 per Standing Order #14 operator-override (load-bearing decision clause); discharges 3 inbound carries from LatticeNetwork.aDNA Phase 1 + Phase-2 close register
unblocks_missions:
  - mission_node_transmission_implementation (node.aDNA)  # TP-2 dry-run unblocked by entity-type lifecycle confidence; Hestia decides housing per D7
  - latticenetwork_adna_skel_02_skel_03  # LatticeNetwork.aDNA Phase 3 Skeleton — entity-type contracts exercise with confidence post-ratification
unblocks_phases:
  - v8 P1 → P2 phase exit gate retroactive close (P2 entry was approved pre-M1.5 at M2.1 S1 plan ratification; M1.5 closes the last P1-row mission)
deliverables_count: 9
hard_dependency_satisfied: "M2.2 closed 2026-05-19T~23:55Z+ at `262ec39` (ADR-016 + Standing Order #11 ratified — token_budget_estimated field this mission declares is now mandated); M1.5 cross-vault coord memo + disruption assessment both filed in `aDNA.aDNA/who/coordination/` 2026-05-19; 3 inbound carry memos all readable at `LatticeNetwork.aDNA/who/coordination/` (cross-vault READ-only per Hard Constraint); both backlog placeholders in place at `aDNA.aDNA/how/backlog/`; Standing Order #14 operator-override invoked at plan ratification 2026-05-19/2026-05-20 for mid-P2 ADR ratification of P1-row mission per load-bearing-decision exception clause (precedent: M2.2 ADR-016 ratification)"
---

# M1.5 — Cross-Vault Network-Architecture Coord Discharge (ADR-017 + ontology.md namespace registration + response memo to Venus)

> **Mission discharges 3 inbound carries** from LatticeNetwork.aDNA's Phase 1 + Phase-2 close at the aDNA.aDNA standard-owner side:
>
> - **C1** — LIP-0006 countersign request (Network.aDNA as 6th canonical aDNA pattern category at the standard level).
> - **C2** — `network_` namespace claim + `network_node_mirror` + `permission_edge` entity-types (parallel-discharge invariant per ADR-005 rule 6 + ADR-008 §f).
> - **P2-close register** — Phase-2 register filing for Phase-7 cross-check-in (ACK only; no new content beyond C1+C2 reaffirmation).
>
> **Parallel-discharge invariant**: per LatticeNetwork.aDNA ADR-005 rule 6 + ADR-008 §f, partial discharge (one entity-type but not the other) is NOT permitted without ADR-003 rule 5 escalation. Both `network_node_mirror` and `permission_edge` ratify together at this M1.5, OR both counter-propose together.
>
> **Self-reference (Standing Order #8)**: M1.5 is the FIRST mission to *ratify another vault's entity-type proposals* via the parallel-discharge protocol. It exercises the cross-vault coord protocol it relies on — the standard-owner-side counterpart to the LatticeNetwork.aDNA-side ADR-005 + ADR-008 declarations. Together, they close the cross-vault parallel-discharge contract loop.
>
> **North-star alignment**: Without M1.5, LatticeNetwork.aDNA Phase 3+ skeleton work (skel_02 + skel_03) exercises the entity-type contracts under `assumes_draft: true` annotations — adequate for design but not for lifecycle confidence. M1.5 ratifies the namespace + entity-types, clearing the path for Phase-3+ execution and the eventual v8.0 batch promotion to base ontology at v8 P6.
>
> **Timing**: per the [[../../who/coordination/coord_2026_05_19_v8_cross_vault_disruption_assessment.md|disruption assessment]] §6 recommendation, M1.5 opens within 1-2 sessions (target ≤ 2026-05-26) to preserve a 1-week buffer before assumed v8 P3 entry (~2026-06-02). This S1 fires 2026-05-20T03:14:53Z (operator local 2026-05-19 late evening).

## Mission scope

Author + ratify **ADR-017** (Network.aDNA Pattern Category + `network_` Namespace + `network_node_mirror` + `permission_edge` Parallel-Discharge Ratification) consolidating C1 + C2 + P2-close-register into one comprehensive ADR; register the namespace + entity-types in `aDNA.aDNA/what/ontology.md`; flip both backlog placeholders; file the response memo to Venus; queue v8 P6 propagation of the LIP-0006 category addition via new backlog placeholder. Planning-class; single-session shape — 2nd instance.

**3 ADR-017 clauses** (consolidate; do not conflict):

1. **Clause A — LIP-0006 countersign** — Network.aDNA ratified as the 6th canonical aDNA pattern category at the standard level (joining Forge, Platform, Framework, Org-Vault, Org-Graph). Distinguishing test (LIP-0006 §2): vault holds the live aggregated state of a running network whose nodes transmit into it.
2. **Clause B — `network_` namespace reservation** — claimed by `LatticeNetwork.aDNA`; first claim at arch_01 / Session 11 (`network_node_mirror`); co-claimed at arch_03 / Session 13 (`permission_edge`) per LatticeNetwork.aDNA ADR-005 rule 2(c) namespace co-claim inheritance. Single namespace covers both entity-types.
3. **Clause C — Parallel-discharge ratification** — both `network_node_mirror` (WHAT-triad; directory `what/network/nodes/<hostname>.aDNA/`; mirror semantics per peer ADR-002 §a) and `permission_edge` (WHAT-triad; directory `what/network/permissions/<edge_id>.yaml`; 10-field body per peer ADR-008 §g) ratified together per ADR-005 rule 6 + ADR-008 §f parallel-discharge invariant. Both promoted from `pending_upstream_review` → `ratified_local`; both targeted for v8.0 base-ontology batch promotion per D5+D8.

**D1=A** ACCEPT LIP-0006 (counter-sign, not counter-propose). **D2=A** ACCEPT both entity-types at namespace `network_`. **D3=A** `context_traversal` ↔ `permission_edge` semantic relationship = DISTINCT (different abstraction layers — read-event log vs policy declaration). **D4=A** KEEP per-extension placeholders (rolled-up registry rejected). **D5=A** BATCH at v8.0. **D6=A** SINGLE comprehensive ADR-017 (split rejected). **D7=A** DEFER TP-2 housing decision to Hestia/operator at TP-2 graduation. **D8=A** BASE ONTOLOGY destination for both entity-types at v8.0 (extensions-registry-indefinitely rejected).

## Objectives

### 1. Author this mission spec (S1)

- **Status**: in_progress (S1; this file)
- **Session**: S1
- **Read**: M2.2 mission spec for shape reference; campaign master M1.5 row for scope; cross-vault coord memo §3 (TP-1) for canonical M1.5 outputs; disruption assessment §6 for timing-critical rationale; both backlog placeholders for parallel-discharge mechanics.
- **Produce**: this file.
- **Depends on**: plan ratification; Standing Order #14 operator-override invocation.

### 2. Author ADR-017 (S1)

- **Status**: pending S1
- **Session**: S1
- **Read**: 3 inbound carry memos verbatim (C1 + C2 + P2-close register); LatticeNetwork.aDNA peer ADR-002 §a (`network_node_mirror` declaration) + ADR-005 (parallel-discharge protocol) + ADR-008 §a-§g (`permission_edge` declaration); LIP-0006 (Network.aDNA pattern category); ADR-016 for template shape (most recent + 3-clauses-in-one precedent); ADR-011 for frontmatter shape (semver discipline; v7.0 governance precedent).
- **Produce**: `what/decisions/adr_017_network_adna_pattern_category_and_namespace_ratification.md` — Frontmatter (~14 fields including `id: adr_017`, `status: accepted`, `accepted_at: <S1 close UTC>`, co-signed `deciders: [agent_stanley, operator_stanley]`, `consulted: [persona_venus, persona_hestia]`) + §Status (Standing Order #14 operator-override invocation per load-bearing-decision clause; LIP-0006 countersign date; precedent: M2.2 ADR-016 mid-phase ratification) + §Context (3 inbound carries + parallel-discharge invariant + M1.5 5-open-Qs problem space + gap left if M1.5 doesn't fire) + §Decision (3 clauses A/B/C) + §Decisions D1-D8 (Rosetta defaults all A; operator-confirmation pointer to plan ratification) + §Consequences (backlog placeholders flip; ontology.md updates; response memo fires; LatticeNetwork.aDNA-side `assumes_draft: true → false` flips happen on Venus's next session; v8 P6 propagation queued via new backlog placeholder; downstream LatticeNetwork.aDNA Phase 3+ confidence; D3 codification — context_traversal vs permission_edge are distinct abstraction layers) + §Sibling/related decisions (ADR-005 [local: three_way_vault_boundary; peer: vault_local_entity_type_ratification_protocol — clarify vault-name collision] + ADR-008 [peer; co-signed via ADR-017] + ADR-002 [peer; co-signed via ADR-017] + ADR-016 [precedent; single-session planning-class shape + 3-clauses-in-one]) + §Cross-references (LIP-0006 path + 3 carry memo paths + 2 placeholder paths + 1 new placeholder path + ontology.md path + response memo path + cross-vault coord memo path + disruption assessment path).
- **Depends on**: 1
- **ADR slot verification**: ADR-017 not taken (existing ADRs 001-011, 013, 016; gaps at 012/014/015 — 015 reserved for installer packaging at M4.2; 012/014 unclaimed but skipping forward to 017 is cleanest given the gap precedent).

### 3. Update `aDNA.aDNA/what/ontology.md` with Network.aDNA Extensions subsection (S1)

- **Status**: pending S1
- **Session**: S1
- **Read**: `what/ontology.md` lines 67-82 (existing `### Rosetta Extensions (10 Entity Types)` table — model after this exact shape); line 196 (Full ontology count); §Extension Patterns section for narrative consistency.
- **Produce**: surgical insertion of new `### Network.aDNA Extensions (2 Entity Types)` subsection AFTER the existing Rosetta Extensions subsection. Two rows: `#25 network_node_mirror | WHAT | what/network/nodes/<hostname>.aDNA/ | Per-node mirror directory (source: each node's own node.aDNA; SO-7 read-mostly invariant; aggregator-side) | extension/network` + `#26 permission_edge | WHAT | what/network/permissions/<edge_id>.yaml | Directed authentication-edge between nodes (10-field body schema; bound to LIP-0003 ledger events) | extension/network`. Bump the "Full ontology" count line (line 196) by +2 (whatever the current count is, +2). Items 1-24 preserved verbatim; no renumbering.
- **Depends on**: 2

### 4. Author response coord memo to Venus (S1)

- **Status**: pending S1
- **Session**: S1
- **Read**: 3 inbound carry memo §4-§7 sections for response-channel expectations; ADR-017 §Decision + §Cross-references for content; ontology.md update for line/section refs.
- **Produce**: `who/coordination/coord_2026_05_19_v8_m15_latticenetwork_ratification_response.md` — Frontmatter (direction: outbound; from_vault: aDNA.aDNA; to_vault: LatticeNetwork.aDNA; counterpart: persona_venus; status: filed; countersign_required: false [this IS the countersign response]; mission: mission_adna_str_p1_m15_coord_network; durable: true) + §1 Subject (3-ACK response: LIP-0006 + entity-types parallel-discharge + P2-close register) + §2 Response to C1 (LIP-0006 countersign confirmed; ADR-017 Clause A; ontology.md update — Network.aDNA category recorded; v8 P6 propagation to `.adna/` template queued via new backlog placeholder) + §3 Response to C2 (`network_` namespace + 2 entity-types parallel-discharge confirmed; ADR-017 Clauses B+C; both backlog placeholders flipped to `ratified_local`; ontology.md §Network.aDNA Extensions subsection registered both; LatticeNetwork.aDNA-side `assumes_draft: true → false` flips + MANIFEST.md `Standard?` column updates remain Venus's to apply at next session per parallel-discharge mechanics §item 2-3) + §4 Response to P2-close register (Phase-2 outputs reviewed; 4 binding specs + 11 ADRs ACK'd; Phase-7 cross-check-in fold-in confirmed; no new conditions/feedback) + §5 D3 codification (context_traversal ↔ permission_edge = DISTINCT abstraction layers per ADR-017 §Decisions D3; Venus uses for entity-type lifecycle confidence) + §6 v8.0 promotion cadence (BATCH at v8 P6 per D5+D8; not per-extension) + §7 Open-Q answers (Q-S1 = per-extension placeholders; Q-S2 = batch promotion at v8.0) + §8 Next steps Venus-side (read this memo + ADR-017 + ontology.md update at next session; flip `assumes_draft: true → false` at 4 peer-vault binding sites per entity-type per ADR-003 rule 4; update MANIFEST.md `Standard?` columns; ADR-005 §Ratification log entries; ADR-008 §f close) + §9 Hard constraints honored (zero peer-vault writes from M1.5; aDNA.aDNA-side response only; git-as-coordination-bus canonical channel) + §10 Memo provenance (M1.5 session ref + ADR-017 cross-link + commit hash placeholder filled at commit time) + §11 Cross-references.
- **Depends on**: 3

### 5. Flip `idea_upstream_permission_edge_entity_type.md` backlog placeholder (S1)

- **Status**: pending S1
- **Session**: S1
- **Read**: current placeholder content (frontmatter + Parallel-discharge mechanics section).
- **Produce**: surgical edit to `how/backlog/idea_upstream_permission_edge_entity_type.md` — frontmatter `status: pending_upstream_review → ratified_local`; add `ratification_log:` block (list with 1 entry: `- ratified_at: <S1 close UTC>; via_adr: adr_017_network_adna_pattern_category_and_namespace_ratification; via_ontology_update: what/ontology.md §Network.aDNA Extensions; via_response_memo: who/coordination/coord_2026_05_19_v8_m15_latticenetwork_ratification_response.md; commit_hash: <filled at commit>`); add new `## Ratification log` section near the end of the body with same content + ADR-017 §Decision Clause C cross-link + ADR-005 rule 6 parallel-discharge invariant note. **Preserve** all existing content (Parallel-discharge mechanics section + Action requested section + Cross-references) per Standing Order #6 archive-never-delete; status flip is additive, not destructive.
- **Depends on**: 4

### 6. Flip `idea_upstream_network_node_mirror_entity_type.md` backlog placeholder (S1)

- **Status**: pending S1
- **Session**: S1
- **Read**: current placeholder content (analogous shape to permission_edge placeholder).
- **Produce**: surgical edit to `how/backlog/idea_upstream_network_node_mirror_entity_type.md` — IDENTICAL pattern to deliverable 5 (parallel-discharge invariant — both flip in the same commit per ADR-005 rule 6 + ADR-008 §f). Same `ratification_log` block; same `## Ratification log` section; same ADR-017 cross-link.
- **Depends on**: 5 (single-commit batching with deliverable 5; both flip together)

### 7. Author new backlog placeholder for v8 P6 LIP-0006 category propagation (S1)

- **Status**: pending S1
- **Session**: S1
- **Read**: existing `idea_upstream_*.md` placeholders for shape reference; ADR-017 Clause A + §Consequences for what propagates.
- **Produce**: `how/backlog/idea_upstream_lip_0006_network_category_addition.md` — Frontmatter (type: backlog; status: pending_v8_p6_batch; created: 2026-05-19; ratification_target_version: v8.0; upstream_target: adna_v8_lip_0006_network_category_addition_to_base_template; fold_in_checkpoint: v8_p6_ecosystem_propagation; tags: [backlog, upstream_proposal, v8_p6_batch, lip_0006, network_adna, pattern_category, batch_promotion]) + Proposal summary (Network.aDNA category addition to `.adna/CLAUDE.md` workspace router + `what/docs/adna_standard.md` base-ontology table + any other authoritative standard-spec location) + Per ADR-005 rule 3 minimum content (category-level addition, not entity-type; v8.0 base ontology bump if D8=A batch elected — codified in ADR-017 §Decisions D8) + Cross-vault binding sites (workspace `CLAUDE.md` router + `.adna/CLAUDE.md` template + `aDNA.aDNA/what/docs/adna_standard.md` if normative claim; check at v8 P6 prep) + Lifecycle binding (LIP-0006 itself stays `accepted` at `lattice-labs/how/governance/lips/`; this placeholder tracks the **template-side** propagation at v8 P6, distinct from the standard-owner-side ratification at ADR-017) + Action requested (v8 P6 batch propagation per Campaign S.O. #14 + ADR-005 rule 3) + Cross-references (ADR-017 + LIP-0006 + cross-vault coord memo + workspace router + 2 entity-type placeholders).
- **Depends on**: 6 (after both backlog flips; new placeholder lives alongside them in `how/backlog/`)

### 8. Author M1.5 AAR (S1)

- **Status**: pending S1
- **Session**: S1
- **Read**: `aar_m22_per_mission_budget.md` for AAR shape (lightweight 5-line + N-category extended findings + acceptance scorecard + S.O. discharge + token-budget table); `aar_m21_context_audit_split.md` for richer-categorical-findings template.
- **Produce**: `missions/artifacts/aar_m15_coord_network.md` — lightweight 5-line (Worked/Didn't/Finding/Change/Follow-up per template_aar_lightweight.md) + 3-category extended findings (Cross-vault parallel-discharge mechanics × 4 + Standing-Order-discharge audit × 4 + Forward signals × 5-6) + 15-row acceptance-criteria scorecard PASS + 16+-row Standing-Order discharge table (project SO #1/#3/#5/#6/#7/#8/#10/#11 + campaign SO #11/#12/#13/#14/#15/#16/#17/#19) + token-budget table (S1 estimated 80-120 kT vs actual <measured at close>; within band test) + Standing Order #14 operator-override discipline note (precedent: M2.2 ADR-016 ratification; this is the 2nd invocation of the load-bearing-decision exception clause in the campaign).
- **Depends on**: 7

### 9. Status flips + campaign master + STATE.md router refresh + session close (S1)

- **Status**: pending S1
- **Session**: S1
- **Produce**:
  1. This mission file frontmatter `status: in_progress → completed`; `closed_at: <UTC>`; `closed_session: session_stanley_20260520T031453Z_v8_m15_s1`; `actual_sessions: 1`; `spec_completeness: complete`; deliverables table all marked landed; Completion summary section appended; AAR cross-link.
  2. Campaign master `campaign_adna_serious_tool_readiness.md` — M1.5 row Phase-1 table `planned/seeded → completed` (closed_session reference + 9/9 deliverables landed + load-bearing finding pointer); add ADR-017 row to ADR roadmap (status: accepted; accepted_at populated); amendments-table entry appended (captures ADR-017 ratification + LIP-0006 countersign + 2 entity-types parallel-discharge + ontology.md namespace registration + response memo fire + Standing Order #14 operator-override 2nd invocation); `updated:` field.
  3. STATE.md (router) — Current Phase: prepend concise "**CLOSED**: M1.5 coord-network ratification + ADR-017 + namespace registration" bullet; demote the M2.2-CLOSED bullet to concise single-line form (Op 3 archive-on-close pattern **3rd canonical instance** after M2.1 + M2.2 — pattern composes session-after-session; canonical Op 3 instances accumulate). Next Steps: drop M1.5 from operator-discretionary slate; elevate M2.3 + M2.4 + M2.1.5 interstitial to top of menu; update timing-critical-action language (M1.5 timing target ≤ 2026-05-26 SATISFIED at this session; remove urgency flag).
  4. Session file SITREP + Next Session Prompt + move `active/` → `history/2026-05/`.
- **Depends on**: 8

## Deliverables

| # | Deliverable | Session | Status |
|---|---|---|---|
| 1 | M1.5 mission spec | S1 | **landed at S1** (this file) |
| 2 | ADR-017 | S1 | **landed at S1** (`what/decisions/adr_017_network_adna_pattern_category_and_namespace_ratification.md`; 3 clauses A LIP-0006 countersign + B `network_` namespace reservation + C entity-types parallel-discharge; D1-D8 resolved Rosetta defaults A; co-signed [agent_stanley, operator_stanley]; `status: accepted` 2026-05-20T03:37:34Z; Standing Order #14 operator-override invocation recorded in §Status) |
| 3 | ontology.md update | S1 | **landed at S1** (`what/ontology.md` — new `### Network.aDNA Extensions (2 Entity Types)` subsection inserted between Rosetta Extensions and Triad Structure; 2 rows #25 + #26; namespace `network_` reserved; "Full ontology" count line bumped 32 → 34) |
| 4 | Response memo to Venus | S1 | **landed at S1** (`who/coordination/coord_2026_05_19_v8_m15_latticenetwork_ratification_response.md`; 11 sections covering 3 ACKs — §2 LIP-0006 + §3.1/3.2/3.3 entity-types parallel-discharge + §4 P2-close register ACK + §5 D3 codification + §6 v8.0 cadence + §7 Q-answers + §8 Venus next steps) |
| 5 | `permission_edge` placeholder flip | S1 | **landed at S1** (`how/backlog/idea_upstream_permission_edge_entity_type.md` — `status: pending_upstream_review → ratified_local` + frontmatter `ratification_log:` block + new `## Ratification log` section with ADR-017 + ontology.md + commit hash cross-refs) |
| 6 | `network_node_mirror` placeholder flip | S1 | **landed at S1** (`how/backlog/idea_upstream_network_node_mirror_entity_type.md` — same flip; parallel-discharge invariant per peer ADR-005 rule 6 + ADR-008 §f) |
| 7 | LIP-0006 v8 P6 propagation placeholder | S1 | **landed at S1** (`how/backlog/idea_upstream_lip_0006_network_category_addition.md` — NEW; tracks v8 P6 batch propagation of LIP-0006 category-level addition to `.adna/CLAUDE.md` workspace router + `aDNA.aDNA/what/docs/adna_standard.md` base-ontology table) |
| 8 | M1.5 AAR | S1 | **landed at S1** (`missions/artifacts/aar_m15_coord_network.md`; lightweight 5-line + 3-category extended findings (Cross-vault parallel-discharge mechanics × 4 + Standing-Order-discharge audit × 4 + Forward signals × 6); 16/16 acceptance PASS; 16-row Standing-Order discharge; token-budget table; load-bearing-finding propagation map) |
| 9 | Status flips + campaign master + STATE.md router refresh + session close | S1 | **landed at S1** (this status flip + campaign master M1.5 row `planned/seeded → completed` + ADR-017 roadmap row + ADR-020 reassignment + amendments-table entry + STATE.md router refresh applying Op 3 archive-on-close 3rd canonical instance; session file moves `active/` → `history/2026-05/` at commit) |

## Acceptance criteria

- [ ] All 9 deliverables landed at S1 close
- [ ] `aDNA.aDNA/what/decisions/adr_017_network_adna_pattern_category_and_namespace_ratification.md` exists with all ~14 frontmatter fields populated + `status: accepted` + co-signed deciders + `accepted_at` populated
- [ ] ADR-017 §Decision has 3 clauses (A LIP-0006 countersign + B `network_` namespace reservation + C entity-types parallel-discharge per ADR-005 rule 6)
- [ ] ADR-017 §Decisions has D1-D8 each resolved with Rosetta default + rationale
- [ ] `aDNA.aDNA/what/ontology.md` has new `### Network.aDNA Extensions (2 Entity Types)` subsection with 2 rows (`network_node_mirror` + `permission_edge`); "Full ontology" count line bumped (+2)
- [ ] Response memo to Venus exists at `who/coordination/coord_2026_05_19_v8_m15_latticenetwork_ratification_response.md`; covers 3 ACKs; ADR-017 + ontology.md + commit hash cross-refs populated
- [ ] Both backlog placeholders show `status: ratified_local` + Ratification log section + ADR-017 cross-link (parallel-discharge invariant — both flip in the same commit)
- [ ] New backlog placeholder `idea_upstream_lip_0006_network_category_addition.md` exists; tracks v8 P6 propagation
- [ ] Campaign master M1.5 row shows `completed`; ADR roadmap ADR-017 row shows `accepted` with `accepted_at` populated; amendments-table entry appended
- [ ] STATE.md router stays ≤ ~45,000 B (≤ 20 kT preserved post-refresh; Op 3 archive-on-close pattern 3rd canonical instance)
- [ ] M1.5 AAR lightweight 5-line + 3-category extended findings landed (Standing Order #5 mandatory)
- [ ] Zero `.adna/` upstream touches end-to-end (v7.0 frozen verified)
- [ ] Zero `node.aDNA/` mutations (M1.5 = aDNA.aDNA-only governance; D7 defers TP-2 to Hestia/operator)
- [ ] Zero writes outside `aDNA.aDNA/` (no peer-vault writes; Venus reads our ratification via git-as-coordination-bus)
- [ ] No new ADRs beyond ADR-017 (LIP-0006 + 2 entity-types all consolidated per D6=A)
- [ ] Mission frontmatter declares `token_budget_estimated` per Standing Order #11 (first M1.x mission post-ADR-016 ratification; S.O. #8 self-reference second instance)

## Operator decision gates (D1-D8 — Rosetta defaults A resolved at plan ratification 2026-05-20)

| # | Question | Rosetta default | Resolved at |
|---|---|---|---|
| D1 | LIP-0006 countersign — ACCEPT OR counter-propose? | **A: ACCEPT** | plan ratification (Network.aDNA distinguishing test sound; workspace router already provisionally categorizes; first instance operational) |
| D2 | Entity-types — ACCEPT both at namespace `network_` OR counter-propose? | **A: ACCEPT both** | plan ratification (schemas reviewed; non-collapsible into base types; namespace `network_` unclaimed) |
| D3 | `context_traversal` ↔ `permission_edge` semantic overlap? | **A: DISTINCT** | plan ratification (different abstraction layers — read-event log vs policy declaration; ADR-017 §Decisions D3 codifies) |
| D4 | Registry artifact shape — per-extension placeholders OR rolled-up `extensions_pending.md`? | **A: KEEP per-extension** | plan ratification (existing pattern works; ontology.md serves as actually-ratified registry) |
| D5 | v8.0 promotion cadence — batch at v8.0 OR per-extension cadence? | **A: BATCH at v8.0** | plan ratification (additive-not-breaking invariant; matches campaign master P6 roadmap) |
| D6 | ADR scope — single comprehensive ADR-017 OR split (ADR-017 LIP-0006 + ADR-018 entity-types)? | **A: SINGLE ADR-017** | plan ratification (parallel-discharge invariant; ADR-016 3-clauses-in-one precedent) |
| D7 | TP-2 housing — pre-decide OR DEFER to Hestia/operator? | **A: DEFER** | plan ratification (TP-2 is node.aDNA-side governance per cross-vault coord memo §3) |
| D8 | TP-6 destination at v8 P6 — base ontology OR extensions registry indefinitely? | **A: BASE ONTOLOGY** | plan ratification (matches D5 batch-at-v8.0; both entity-types promote together at v8.0 tag) |

## Hard constraints

- **Zero `.adna/` upstream touches** — v7.0 frozen at `LatticeProtocol/aDNA@27e6395`; ADR-017 + ontology.md update + response memo + backlog placeholders all land only in `aDNA.aDNA/`. Upstream propagation queued for v8 P6 per Campaign S.O. #14 + ADR-005 rule 3 (new backlog placeholder #7 tracks this).
- **Zero partner-vault contact** — 4 embargo memos preserved (Wilhelm × 2 ADR-010-held + SuperLeague + SIP operator-approval-held).
- **Zero `~/.claude/settings.json` modifications**.
- **Zero `node.aDNA/` mutations** — TP-2 owner is Hestia; D7 defers; node.aDNA TP-2 backlog idea already seeded earlier (cross-vault coord memo §3 TP-2).
- **Zero writes into `LatticeNetwork.aDNA/` or `LatticeLabs.aDNA/` or `lattice-labs/`** — all M1.5 outputs land in `aDNA.aDNA/`; Venus reads at next session via git-as-coordination-bus (canonical channel per C1 §4 + C2 §3); LatticeNetwork.aDNA-side `assumes_draft: true → false` flips + MANIFEST.md `Standard?` column updates + ADR-005 §Ratification log entries + ADR-008 §f close all happen on Venus's next session (peer-vault flip per parallel-discharge mechanics §item 2-3).
- **No new ADRs beyond ADR-017 at M1.5** — LIP-0006 + 2 entity-types all fold into one ADR per D6=A; single comprehensive ADR-017 per parallel-discharge invariant.
- **Standing Order #14 operator-override invoked at plan ratification** — mid-P2 ADR-017 ratification of P1-row mission permitted per load-bearing-decision exception clause (precedent: M2.2 ADR-016 ratification). Recorded in ADR-017 §Status + AAR §Operator-override-discipline-note.
- **S1 is non-destructive** — ADR drafting + ontology.md surgical insertion + response memo authoring + backlog placeholder status flips (additive — `## Ratification log` section appended; existing content preserved per Standing Order #6 archive-never-delete) + mission spec + AAR + status flips + STATE.md router refresh. No file deletions; no structural rewrites.
- **No M2.x work this session** — M2.3 + M2.4 stay operator-discretionary parallel; M1.5 close UNBLOCKS them.

## Standing Order discharges

| # | Order | M1.5 discharge |
|---|---|---|
| Project SO #1 | Phase gates are human gates | Operator-override on Campaign S.O. #14 invoked at plan ratification (load-bearing decision per disruption assessment §6); M1.5 close does NOT auto-advance phase |
| Project SO #3 | Context budget is doctrine | M1.5 follows Standing Order #11 (M2.2-ratified); mission frontmatter declares `token_budget_estimated: "S1 ~80-120 kT"` |
| Project SO #5 | Every mission gets an AAR | S1 produces `aar_m15_coord_network.md` (lightweight 5-line + 3-category extended findings) |
| Project SO #6 | Archive never delete | Backlog placeholder status flips are additive (`## Ratification log` section appended; existing content preserved); all 3 inbound carry memos preserved at LatticeNetwork.aDNA (read-only) |
| Project SO #7 | Dual-audience test | ADR-017 authored for developer (namespace claim mechanics + parallel-discharge invariant + entity-type body schemas) + newcomer (what Network.aDNA is; why distinguishing test matters; why we ratify entity-types in parallel; what `assumes_draft: true → false` means) |
| Project SO #8 | Self-reference mandatory | M1.5 is the FIRST mission to **ratify another vault's entity-type proposals via parallel-discharge** — exercises the cross-vault coord protocol it relies on; second invocation of S.O. #8 self-reference in the campaign (M2.2 was first — first mission to declare `token_budget_estimated` per the ADR it ratifies) |
| Project SO #10 | Cross-link aggressively | ADR-017 wikilinks ADR-005 (local + peer; vault-name collision clarified) + ADR-008 (peer; co-signed via ADR-017) + ADR-002 (peer; co-signed via ADR-017) + ADR-016 (precedent) + LIP-0006 + 3 carry memos + 2 placeholders + ontology.md + cross-vault coord memo + disruption assessment; mission spec wikilinks 10+ predecessor artifacts; response memo wikilinks 3 carry memos + ADR-017 + ontology.md + 2 placeholders + 1 new placeholder |
| Project SO #11 | Per-mission context budget mandatory | Mission frontmatter declares the field (first M1.x mission post-ADR-016 ratification; second mission overall after M2.2) |
| Campaign SO #11 | Per-phase decadal AAR | N/A at mission close (decadal AAR triggers at P2 exit gate per Campaign S.O. #11; M1.5 close does not trigger) |
| Campaign SO #12 | Per-mission context budget | Mission spec declares + AAR reports actual at S1 close |
| Campaign SO #13 | Cross-vault coord memo preservation | Response memo lands at `who/coordination/`; never moved/deleted; peer-vault counterparts at LatticeNetwork.aDNA stay untouched (peer reads our ratification via git-as-coordination-bus) |
| Campaign SO #14 | ADR ratification gated at phase entries | **Operator-override invoked** at plan ratification per load-bearing-decision exception clause (precedent: M2.2 ADR-016; this is the 2nd invocation in the campaign) |
| Campaign SO #15 | Dispatch-where-possible | N/A — M1.5 is governance work at aDNA.aDNA-side; no operator-side validation needed; no Carly+Herb dispatch |
| Campaign SO #16 | v7.0 tag dependency hard | Satisfied (v2 M06 closed 2026-05-18T19:10Z+ at `27e6395`) |
| Campaign SO #17 | Mission_class discipline | Frontmatter `mission_class: planning` — no executable code; only governance artifacts (ADR text + ontology.md edit + response memo + backlog placeholder flips + mission spec + AAR) |
| Campaign SO #19 | Phase exit = human gate | Applies at P2 → P3; M1.5 is a P1-row mission run in parallel during P2 (operator-discretionary non-blocking on P1 → P2 transition already approved); phase position unchanged at M1.5 close |

## Cross-vault impact

- **`LatticeNetwork.aDNA/`** — zero writes from M1.5; Venus reads ADR-017 + ontology.md update + response memo at next session start (git-as-coordination-bus canonical channel per C1 §4 + C2 §3 + P2-close §6). Per parallel-discharge mechanics §item 2-3: Venus flips `assumes_draft: true → false` at 4 peer-vault binding sites per entity-type (8 total flips); updates MANIFEST.md `Standard?` columns; appends ADR-005 §Ratification log entries; closes ADR-008 §f.
- **`LatticeLabs.aDNA/` + `lattice-labs/`** — zero writes; LIP-0006 stays `accepted` at `lattice-labs/how/governance/lips/lip_0006_network_adna_pattern_category.md`; Berthier reads our ADR-017 §Clause A LIP-0006 countersign at next coordination touchpoint.
- **`node.aDNA/`** — zero touches at M1.5 per hard constraint; TP-2 transmission-implementation work owner is Hestia; D7 defers housing decision to TP-2 graduation; backlog idea already seeded at `node.aDNA/how/backlog/idea_node_transmission_implementation.md`.
- **`.adna/` upstream** — zero touches at M1.5 (v7.0 frozen); ADR-017 + ontology.md update propagation to `.adna/` template (workspace router + base-ontology table) queued for v8 P6 per Campaign S.O. #14 + ADR-005 rule 3 (new backlog placeholder #7 tracks this).
- **Partner vaults** — zero contact; 4 embargo memos preserved.
- **All future v8 P3+ missions** — receive ratified Network.aDNA category + namespace + entity-types in `aDNA.aDNA/what/ontology.md`; can reference without `assumes_draft: true` annotation.

## Self-reference + dual-audience

This mission is the **2nd invocation of Standing Order #8 self-reference** in the campaign:

- M2.2 was the first — M2.2 declared `token_budget_estimated` in its OWN frontmatter BEFORE ADR-016 ratified the field. The mission practiced the rule it ratified.
- M1.5 ratifies *another vault's* entity-type proposals via parallel-discharge — and the cross-vault parallel-discharge protocol M1.5 uses is itself defined by LatticeNetwork.aDNA's ADR-005 rule 6 (which M1.5 discharges against). The recursion is: M1.5 uses the protocol to discharge the protocol's first cross-vault application. The aDNA.aDNA-side counterpart to LatticeNetwork.aDNA's ADR-005 + ADR-008 declarations is exactly this ADR-017.

Dual-audience test:

- **Developer**: ADR-017 specifies the LIP-0006 countersign mechanism; the `network_` namespace reservation; the parallel-discharge invariant per ADR-005 rule 6; the 2 entity-type body schemas (`network_node_mirror` directory shape + `permission_edge` 10-field YAML body); the D1-D8 decision matrix. Operational and enforceable. Backlog placeholders carry concrete ratification log entries with commit hash refs.
- **Newcomer**: ADR-017 §Context explains what Network.aDNA is (the live state graph of a federated lattice network; 6th canonical aDNA pattern category); why distinguishing test matters (Network vs Org-Vault vs Org-Graph); why parallel-discharge invariant (both entity-types ratify together OR both counter-propose together — namespace co-claim inheritance per ADR-005 rule 2(c)). Standing Order #11 (M2.2-ratified) is declarative and learnable.

## Risks

| # | Risk | Mitigation |
|---|---|---|
| 1 | LIP-0006 distinguishing test (Network vs Org-Vault vs Org-Graph) proves ambiguous in edge cases (e.g., a hybrid vault that both governs and aggregates) | M1.5 ratifies the v1 distinguishing test as authored at LIP-0006 §2; future LIP-0006 v1.1 (post-Phase-6 lattice-labs LIP cycle per `spec_migration_cutover §8`) can refine if needed |
| 2 | `network_` namespace conflicts with future extension proposals from other vaults (e.g., a different vault claiming `network_` for a different concept) | Single-claim discipline per ADR-005 rule 2(c); ontology.md §Network.aDNA Extensions subsection registers the claim; future conflicting proposals route through ADR-005 rule 5 escalation |
| 3 | `context_traversal` ↔ `permission_edge` D3 ruling proves unstable when M1.4 LatticeScope schema activates traversal-logging at runtime (e.g., what if cross-vault traversals genuinely intersect with permission edges in semantics?) | D3=A ruling explicitly says different abstraction layers — read-event log (runtime) vs policy declaration (governance); ADR-017 §Decisions D3 records the ruling + reasoning; M2.3 retrospective + M2.4 heat map (which consume the M1.4 traversal data) can surface evidence to revise D3 if needed |
| 4 | Counter-proposal arrives from Venus or another personality (e.g., namespace rename request) AFTER M1.5 ratifies — would require ADR-003 rule 5 escalation + parallel rename on BOTH entity-types | ADR-017 explicit in §Decision Clause B that `network_` is reserved and co-claimed; any rename routes through ADR-005 rule 6 escalation + ADR-003 rule 4 flag-flip; both entity-types rename in parallel (partial rename invalidates rule 2(c) co-claim inheritance) |
| 5 | v8 P6 batch promotion (D5+D8=A) misses one entity-type or the LIP-0006 category at v8.0 tag | New backlog placeholder #7 + 2 existing entity-type placeholders together carry the v8 P6 propagation manifest; campaign master P6 mission row inherits the propagation checklist |
| 6 | Standing Order #14 operator-override at M1.5 (2nd invocation) erodes phase-exit-gate discipline | Operator-override clause is explicit + recorded in ADR-017 §Status (this is the 2nd invocation; M2.2 ADR-016 was the 1st); pattern: load-bearing decisions get override; non-load-bearing stays gated at phase entries |

## Status

**S1 + MISSION CLOSED 2026-05-20T03:37:34Z** (`session_stanley_20260520T031453Z_v8_m15_s1`). Planning-class single-session shape held — 2nd instance after M2.2.

Standing Order #14 operator-override invoked at plan ratification 2026-05-20 per load-bearing-decision clause — mid-P2 ADR-017 ratification of P1-row mission permitted (2nd invocation; precedent: M2.2 ADR-016 ratification).

**Forward references**: M2.3 retrospective consumes M1.5 close as data point; M2.4 heat map consumes ratified `network_` namespace for inter-vault hop analysis; node.aDNA TP-2 graduation gated on LatticeNetwork.aDNA Phase 3 close + entity-type lifecycle confidence (this M1.5 firing); v8 P6 batch propagation carries ADR-017 outputs upstream via 3 backlog placeholders.

## Completion summary

**M1.5 closed 2026-05-20T03:37:34Z at `session_stanley_20260520T031453Z_v8_m15_s1`** (planning-class single-session shape; 2nd instance of single-session shape — complement to canonical 3-session implementation shape, following M2.2 precedent). 9/9 deliverables landed:

1. ✅ Mission spec (this file)
2. ✅ ADR-017 (`what/decisions/adr_017_network_adna_pattern_category_and_namespace_ratification.md`; 3 clauses A LIP-0006 + B namespace + C entity-types parallel-discharge; D1-D8 resolved; co-signed)
3. ✅ `aDNA.aDNA/what/ontology.md` updated (`### Network.aDNA Extensions (2 Entity Types)` subsection; 2 rows; namespace `network_` reserved; count bumped 32 → 34)
4. ✅ Response memo to Venus (3 ACKs combined; 11 sections)
5. ✅ `idea_upstream_permission_edge_entity_type.md` flipped `ratified_local`
6. ✅ `idea_upstream_network_node_mirror_entity_type.md` flipped `ratified_local` (parallel-discharge invariant)
7. ✅ `idea_upstream_lip_0006_network_category_addition.md` NEW (v8 P6 propagation tracker)
8. ✅ AAR (`artifacts/aar_m15_coord_network.md`; lightweight 5-line + 3-category extended findings; 16/16 acceptance PASS; 16-row S.O. discharge)
9. ✅ Status flips + campaign master + STATE.md router refresh + session close

**Acceptance criteria**: 16/16 PASS. See [[artifacts/aar_m15_coord_network.md|AAR]] §Acceptance-criteria scorecard.

**Load-bearing finding** (campaign-level): the cross-vault parallel-discharge protocol works as designed at its first cross-vault application. Peer ADR-005 + ADR-008 (LatticeNetwork.aDNA) defined the protocol; M1.5 is the first standard-owner-side discharge against it; git-as-coordination-bus is the entire wire; single-commit pattern physically realizes parallel-discharge invariant.

**Standing Order #14 operator-override** 2nd invocation in the campaign (1st was M2.2 ADR-016); precedent records explicitly in ADR-017 §Status for future mid-phase ratifications. **Standing Order #8 self-reference** 2nd invocation in the campaign (1st was M2.2 token_budget_estimated declaration); M1.5 uses the protocol to discharge the protocol's first cross-vault application.

**Unblocks**: LatticeNetwork.aDNA Phase 3+ skel_02 + skel_03 (entity-type contracts exercise with confidence); node.aDNA TP-2 graduation (D7 defers housing to Hestia); v8 P6 batch propagation queue grows by 3 placeholders (2 entity-type + 1 category). **HIGH-risk row closes in cross-vault disruption matrix** — 0 HIGH-risk vaults remaining; v8 P3 entry pressure relieved.

## AAR

See [[artifacts/aar_m15_coord_network.md|`artifacts/aar_m15_coord_network.md`]] — lightweight 5-line + 3-category extended findings (Cross-vault parallel-discharge mechanics × 4 + Standing-Order-discharge audit × 4 + Forward signals × 6) + 16-row acceptance scorecard PASS + 16-row Standing-Order discharge + token-budget table within band + load-bearing-finding propagation map.

## Cross-references

- [[mission_adna_str_p1_m14_latticescope_schema.md|mission_adna_str_p1_m14_latticescope_schema.md]] — predecessor (M1.4 LatticeScope schema; closed 2026-05-19)
- [[mission_adna_str_p2_m21_context_audit_split.md|mission_adna_str_p2_m21_context_audit_split.md]] — predecessor (M2.1 STATE.md split + ontology.md untouched; closed 2026-05-19)
- [[mission_adna_str_p2_m22_per_mission_budget.md|mission_adna_str_p2_m22_per_mission_budget.md]] — predecessor (M2.2 ADR-016 + Standing Order #11 ratification; closed 2026-05-19; first single-session shape; first S.O. #14 operator-override invocation)
- [[../../../who/coordination/coord_2026_05_19_v8_cross_vault_network_coordination.md|coord_2026_05_19_v8_cross_vault_network_coordination.md]] — M1.5 seeding memo (canonical 5-open-Qs source; 6 TP touch points map)
- [[../../../who/coordination/coord_2026_05_19_v8_cross_vault_disruption_assessment.md|coord_2026_05_19_v8_cross_vault_disruption_assessment.md]] — timing-critical §6 recommendation source
- [[../../../who/coordination/coord_2026_05_19_v8_m15_latticenetwork_ratification_response.md|coord_2026_05_19_v8_m15_latticenetwork_ratification_response.md]] — response memo to Venus (deliverable 4; created at S1)
- [[../../../how/backlog/idea_upstream_permission_edge_entity_type.md|idea_upstream_permission_edge_entity_type.md]] — backlog placeholder (deliverable 5; flipped at S1)
- [[../../../how/backlog/idea_upstream_network_node_mirror_entity_type.md|idea_upstream_network_node_mirror_entity_type.md]] — backlog placeholder (deliverable 6; flipped at S1)
- [[../../../how/backlog/idea_upstream_lip_0006_network_category_addition.md|idea_upstream_lip_0006_network_category_addition.md]] — NEW v8 P6 propagation placeholder (deliverable 7; created at S1)
- [[../../../what/decisions/adr_017_network_adna_pattern_category_and_namespace_ratification.md|adr_017_network_adna_pattern_category_and_namespace_ratification.md]] — ADR-017 (deliverable 2; created at S1)
- [[../../../what/decisions/adr_016_per_mission_context_budget.md|adr_016_per_mission_context_budget.md]] — precedent (single-session planning-class shape; 3-clauses-in-one ADR; Standing Order #14 operator-override first invocation)
- [[../../../what/decisions/adr_005_three_way_vault_boundary.md|adr_005_three_way_vault_boundary.md (local)]] — local ADR-005 (vault-name collision with LatticeNetwork.aDNA's ADR-005; clarified in ADR-017 §Cross-references)
- [[../../../what/ontology.md|what/ontology.md]] — namespace registry (deliverable 3; updated at S1)
- [[../campaign_adna_serious_tool_readiness.md|campaign_adna_serious_tool_readiness.md]] — campaign master §Phase 1 row M1.5 + ADR roadmap row ADR-017
- [[../CLAUDE.md|campaign CLAUDE.md]] — Campaign Standing Orders 11-19 (especially #14 operator-override clause)
- [[../../../CLAUDE.md|project CLAUDE.md]] — Project Standing Orders 1-11 (including S.O. #11 ratified at M2.2)
- **Peer ADRs** (LatticeNetwork.aDNA; READ-only):
  - `LatticeNetwork.aDNA/who/governance/adr_002_network_adna_graph_schema.md` (`network_node_mirror` declaration; co-signed via ADR-017 Clause C)
  - `LatticeNetwork.aDNA/who/governance/adr_005_vault_local_entity_type_ratification_protocol.md` (parallel-discharge protocol; M1.5 discharges against rule 6)
  - `LatticeNetwork.aDNA/who/governance/adr_008_permission_edge_entity_type_declaration.md` (`permission_edge` declaration; co-signed via ADR-017 Clause C)
- **LIP** (lattice-labs; READ-only):
  - `lattice-labs/how/governance/lips/lip_0006_network_adna_pattern_category.md` (LIP-0006; countersigned via ADR-017 Clause A)
- **Inbound carry memos** (LatticeNetwork.aDNA; READ-only):
  - `LatticeNetwork.aDNA/who/coordination/coord_2026_05_18_adna_standard_network_category.md` (C1)
  - `LatticeNetwork.aDNA/who/coordination/coord_2026_05_18_adna_standard_interop.md` (C2)
  - `LatticeNetwork.aDNA/who/coordination/coord_2026_05_19_phase2_close_adna_standard.md` (P2-close register)
