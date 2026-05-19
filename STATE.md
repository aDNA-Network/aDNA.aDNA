---
type: state
created: 2026-04-13
updated: 2026-05-19
status: active
last_edited_by: agent_stanley
_state_router_version: "1.0"
tags: [state, governance, router]
---
<!-- Router shape — split from monolithic STATE.md at M2.1 S2 2026-05-19. Historical session prose at STATE_archive.md. -->


# Operational State

Dynamic operational snapshot for cold-start orientation. Updated each session.

> **State router** (split from monolithic STATE.md at M2.1 S2 2026-05-19; pre-split SHA `1e337db`). For historical session prose (19 DEPRECATED-marker `## Last Session` blocks + retired Next Session Prompts) see [[STATE_archive.md|STATE_archive.md]]. Most-recent live session block + most-recent Next Session Prompt stay here.

## Current Phase

**As of 2026-05-19 (v8 P2 — M2.2 mission CLOSED + ADR-016 RATIFIED + Project Standing Order #11 ADDED; planning-class single-session shape 1st instance; M2.3/M2.4/M1.5 operator-discretionary parallel next slots)**:

- **FILED**: `aDNA.aDNA/who/coordination/coord_2026_05_19_v8_cross_vault_disruption_assessment.md` — internal posture memo (informational; not countersign-required) answering operator's strategic question "are we going to be able to make these changes to the aDNA standard without disrupting those vaults? Do we need to create/enact an upgrade or refactor campaign?" **Short answer**: v8 work is mostly additive; ecosystem propagation gates at v8 P6 close; existing `campaign_adna_v3_ecosystem_compliance` seed (per-vault application at v8 P6 close) + M1.5 coord-network (network-arch slice) are sufficient coverage — **NO new proactive campaign needed**. **Per-vault risk matrix (§4)**: LatticeNetwork.aDNA HIGH (2 entity types in flight; M1.5 timing-critical) · LatticeLabs.aDNA MEDIUM (Phase-3 extraction may surface late upstream contributions; ADR-002 ratified; LIP-0007 RETRACTED) · LatticeAgent.aDNA + LatticeTerminal.aDNA + 5 minor vaults all LOW. **Critical-timing action**: OPEN M1.5 within 1-2 sessions (target ≤ 2026-05-26) to maintain 1-week buffer before assumed v8 P3 entry (~2026-06-02). 5 coordination touchpoints inventoried (M1.5 + v3-EC seed + 17 partner v7.0 memos + v8 P4 LatticeTerminal co-design + LatticeLabs/LatticeNetwork Phase-6 cutover seam). **Session**: `session_stanley_20260519T205033Z_v8_post_m21s1_xvault_assessment` (interstitial; light coord/posture; Tier 1; non-destructive; precedent M1.5 seeding session).

- **CLOSED 2026-05-19T~23:55Z+**: `campaign_adna_serious_tool_readiness` (v8) M2.2 Per-Mission Context Budget Ratification **S1 + MISSION + ADR-016** at `session_stanley_20260519T233620Z_v8_m22_s1` (plan ratified at `/Users/stanley/.claude/plans/please-read-the-claude-md-fizzy-alpaca.md`). Non-destructive planning-class single-session shape (**1st instance of single-session shape — complement to canonical 3-session implementation shape**); 5/5 deliverables landed. **ADR-016 LIVE** at `what/decisions/adr_016_per_mission_context_budget.md` with `status: accepted` + co-signed deciders [agent_stanley, operator_stanley]; **3 clauses + D1 deferral**: Clause A content-load budget per mission (formula + 4-band thresholds + required `token_budget_estimated` frontmatter + drift > 2× retrospective trigger); Clause B heavy-file Read convention (default `offset+limit` Reads ≥ 50 kT or ≥ 200 KB; STATE.md canonical instance; live in `aDNA.aDNA/AGENTS.md`); Clause C two-metric reporting variant (content-load canonical; API-billing companion stays forecast until M2.3); D1=A defer auto-archive convention to separate ADR (≥ 3 instances rubric). **Project Standing Order #11 ADDED** to `aDNA.aDNA/CLAUDE.md` (single new numbered entry; items 1-10 preserved verbatim). **Standing Order #14 operator-override invoked** at plan ratification per load-bearing-decision exception clause (precedent recorded in ADR-016 §Status). M2.2 is the **FIRST mission to follow the rule it ratifies** — frontmatter `token_budget_estimated: "S1 ~60-90 kT"` declared at S1 entry BEFORE ADR-016 ratified the field at S1 close (S.O. #8 self-reference invoked deliberately; chicken-and-egg resolved via single-commit pattern). **Load-bearing finding**: doctrine that 3 measurement missions seeded compresses cleanly to 1 ADR + 1 Project SO at ~ 1-session cost vs 6+ sessions measuring; 6:1 ratio confirms implementation→planning handoff pattern. **Hard constraints honored**: zero `.adna/` touches (v7.0 frozen); zero partner-vault contact; zero `~/.claude/settings.json` modifications; zero `node.aDNA/` mutations (M2.2 = aDNA.aDNA-only governance); zero new ADRs beyond ADR-016; zero M1.5 work. **Forward references**: M2.3 cross-campaign retrospective (operator-discretionary parallel; may amend Clause C with ratified API-billing formula OR draft separate ADR) + M2.4 AGENTS.md heat map (still gated on ≥ 10 live-hook sessions; M2.2 contributes 1) + M1.5 (timing-critical ≤ 2026-05-26). See [[how/campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p2_m22_per_mission_budget.md|M2.2 mission file]] + [[how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_m22_per_mission_budget.md|M2.2 AAR]] + [[what/decisions/adr_016_per_mission_context_budget.md|ADR-016]] for full detail.

- **CLOSED earlier 2026-05-19T~23:30Z+**: `campaign_adna_serious_tool_readiness` (v8) M2.1 Context File Audit + STATE.md Split S3 + MISSION at `session_stanley_20260519T223400Z_v8_m21_s3` (7/7 deliverables; **8.41× / 841% router reduction**; Op 1/2/3 LIVE; canonical 3-session shape 3rd instance; load-bearing finding *the protocol that designs the split also pays the splitting tax mid-execution* per S.O. #8 recursive self-reference) → see [[how/campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p2_m21_context_audit_split.md|M2.1 mission file]] + [[how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_m21_context_audit_split.md|M2.1 AAR]] + [[STATE_archive.md|STATE_archive.md]] for full detail.

- **CLOSED**: `campaign_adna_serious_tool_readiness` (v8) M1.4 LatticeScope.aDNA v0.1.1 Schema Activation **S3 + MISSION** at 2026-05-19T19:00Z+ (`session_stanley_20260519T185248Z_v8_m14_s3`; plan at `/Users/stanley/.claude/plans/please-read-the-claude-md-noble-hartmanis.md`). Non-destructive consolidation. **Final deliverable 7 landed (7 of 7 cumulative)**: (a) `missions/artifacts/m14_obj7_validation_output.md` — 8-section authoritative-backfill validation; **convergence-model verdict Mid-magnitude (refined)** (directional claim survives; transition tax in API-billing units 300–500 kT cache_creation per session entry — ~ 17× M1.3 content-load CP-1 estimate; per-session cache_read snowball scales `turn_count × mean_cached_context_per_turn`); **pattern α/β/γ/δ re-rank**: α=25 (top, unchanged) · β=12 (unchanged) · **δ=10 (UPGRADED from 6)** (cache_creation floor ~ 400 kT per fresh session, M1.3 under-counted by ~17×) · γ=6 (unchanged); **top-3 M2.1 queue CONFIRMED unchanged** (Op 1 split aDNA.aDNA STATE.md · Op 2 default offset/limit ecosystem · Op 3 auto-archive completed campaigns); ADR-016 prep notes addendum (one Standing-Order-#11 bullet for two-metric reporting; API-billing companion formula forecast — M2.3 ratifies). (b) `missions/artifacts/aar_m14_latticescope_schema.md` — lightweight 5-line + 4-category extended findings (load-bearing: **two-metric reality** — content-load M1.3 metric vs API-billing M1.4 metric measure DIFFERENT phenomena; M1.3 under-counted total session API cost by 5-134× depending on metric but directional verdict survives) + 12-row acceptance-criteria scorecard (12/12 PASS) + S.O. discharge table + token-budget table. (c) `node.aDNA/what/context/token_baselines.md` v0.1.0 → v0.1.1 refresh (added §2.1 API-billing aggregate; refined Mid-magnitude paragraph; pattern δ-upgrade note; API-billing companion formula forecast; revision history v0.1.1 row). (d) `node.aDNA/what/context/token_baselines.yaml` companion FAIR — content_entity.version + revision.current_version 0.1.0 → 0.1.1; provenance + dependencies + caveats extended for v0.1.1 lineage. (e) `node.aDNA/what/inventory/inventory_vaults.yaml` token_baselines content_entities row version-bump 0.1.0 → 0.1.1 + v0_1_1 lineage fields. Campaign master M1.4 row `in_progress → completed` + M2.1/M2.2/M2.3/M2.4 marked `next` (operator-discretionary parallel entry per Campaign S.O. #19) + amendments entry appended. **Hard constraints honored**: zero `.adna/` touches (v7.0 frozen at `27e6395`); zero partner-vault contact (4 embargo memos preserved); zero `~/.claude/settings.json` modifications; zero ADR drafts at M1.4 (S.O. #14 — ADR-007 ratifies at MLS-2; ADR-016 ratifies at M2.2); `LatticeScope.aDNA/` NOT bootstrapped (D2=B preserved); `node.aDNA/` stays local-only (Standing Rule #4); no file content captured; no M1.5 work this session. **Forward references**: P1 → P2 phase exit gate READY (operator approval per Campaign S.O. #19); M2.1 entry consumes top-3 confirmed queue; M2.2 ADR-016 consumes M1.3 §6 + M1.4 §6 verbatim; M2.3 consumes authoritative 48-session distributions + ratifies API-billing companion formula; M2.4 consumes δ-upgrade signal + ≥ 10-session corpus (TBD); M1.5 coord-network discharge (LIP-0006 + entity-types + 5 open Qs) operator-discretionary parallel/next slot — still queued.

- **SEEDED earlier 2026-05-19**: M1.5 coord-network row in v8 master + cross-vault coord memo at `aDNA.aDNA/who/coordination/coord_2026_05_19_v8_cross_vault_network_coordination.md` (filed in same session as M1.4 S2; commit reference `69807f4`). **Captures aDNA.aDNA's posture toward 4 in-flight workstreams**: (1) `AlphaLattice.aDNA → LatticeNetwork.aDNA` transition (`campaign_alphalattice_genesis` Constellation Phase 2 CLOSED 2026-05-19; 4 architect specs + 11 ADRs accepted); (2) `lattice-labs → LatticeLabs.aDNA` transition (`campaign_latticelabs_genesis` Continuity Phase 2 CLOSED 2026-05-19; 7 architect specs + Phase-6 coupling defined); (3) node-transmission protocol canonical at `LatticeNetwork.aDNA/what/specs/spec_node_adna_transmission_registration.md` (arch_02; 710 ln; ADR-004 + ADR-005 binding); (4) existing-node upgrade (stanley L1 master + Carly L1 + Herb L1 + exxact3 L2 + KINN/SwS/MP/Percy/WGA L1s + L0 tier). **3 outbound carries received and ACK'd** (C1 LIP-0006 + C2 entity-types parallel-discharge + 2026-05-19 Phase-2 close register memo); **C3 lattice-protocol-EPs noted informationally** (not aDNA-standard scope). **6 touch points mapped**: TP-1 = M1.5 coord-network discharge (this seed; 0-1 sessions; opens after M1.4 S3 close); TP-2 = node.aDNA M-NODE-TRANSMISSION (light backlog idea seeded at `node.aDNA/how/backlog/idea_node_transmission_implementation.md`; 2-3 sessions estimated; consumes arch_02 spec; gated on LatticeNetwork.aDNA Phase 3 Skeleton E2E for live transmission); TP-3 = Carly + Herb L1 bootstrap dispatch via Berthier (gated on TP-2 dry-run-PASS + LatticeNetwork.aDNA Phase 3 close); TP-4 = partner L1s + exxact3 (DEFERRED to LatticeNetwork.aDNA Phase 4 + embargo lift); TP-5 = L0 tier (DEFERRED to v8 P5 / LatticeNetwork.aDNA Phase 7 per spec_migration_cutover §8 L0 onboarding contract); TP-6 = v8 P6 ↔ LatticeNetwork.aDNA Phase 6 ↔ LatticeLabs.aDNA Phase 6 cutover seam. **Pre-discharge filings both at `how/backlog/`**: `idea_upstream_permission_edge_entity_type.md` (committed 5644db5 2026-05-18 at arch_03 close) + `idea_upstream_network_node_mirror_entity_type.md` (committed at `8308096` 2026-05-19 by peer-vault write per ADR-005 rule 3; retroactive from LatticeNetwork.aDNA Session 15 / arch_04 pre-flight per F-S13-02 cleanup). Parallel-discharge invariant per ADR-005 rule 6 + ADR-008 §f — both ratify together OR both counter-propose together. **5 open Qs queued for M1.5**: (Q1) `context_traversal` (M1.4 Amendment B) ↔ `permission_edge` (Carry 2) semantic overlap; (Q2) per-extension vs rolled-up registry artifact (asked by Venus C2 §5 Q-S1); (Q3) v8.0 batch-vs-per-extension promotion cadence (asked by Venus C2 §5 Q-S2); (Q4) standalone-mission vs small-campaign housing for node.aDNA TP-2 work; (Q5) v8.0 base-ontology vs extensions-registry destination at v8 P6. **Hard constraints honored**: zero `.adna/` touches (v7.0 frozen at `27e6395`); zero partner-vault contact (4 embargo memos preserved); zero writes into LatticeNetwork.aDNA / LatticeLabs.aDNA / lattice-labs (cross-vault coord lives in aDNA.aDNA-side memo only); LIGHT Hestia write (1 backlog idea file in node.aDNA; no governance edits); no new ADR drafts at this filing (M1.5 drafts + ratifies when it opens). **Plan**: `/Users/stanley/.claude/plans/please-read-the-claude-md-cheerful-sunrise.md` Stage A (light scope per operator approval). **Next**: M1.4 S3 close (operator-discretionary non-destructive) → M1.5 coord-network opens (operator-discretionary; 0-1 session) → P1 → P2 phase gate. Same session continuation: `session_stanley_20260519T174844Z_v8_m14_s2`.

- **CLOSED earlier 2026-05-19**: `campaign_adna_serious_tool_readiness` (v8) M1.4 S2 destructive execution (schema migration LIVE; PostToolUse hook v0.1.1 LIVE; `ingest_transcript.py` LIVE backfilling 48 transcripts; 645 MT cache_read aggregate) → see [[how/campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p1_m14_latticescope_schema.md|M1.4 mission file]] + [[STATE_archive.md|STATE_archive.md]] for full detail.

- **OPENED earlier 2026-05-19**: `campaign_adna_serious_tool_readiness` (v8) M1.4 S1 non-destructive mission-spec authoring → see [[STATE_archive.md|STATE_archive.md]] for full detail.

**Earlier today**:

- **CLOSED 2026-05-18**: `campaign_adna_serious_tool_readiness` (v8) M1.3 Token Audit S2 + S3 + MISSION CLOSED (7/7 deliverables; Mid-magnitude convergence verdict; canonical `node.aDNA/what/context/token_baselines.md` v0.1.0 published; ADR-016 prep notes seeded; M2.x cohort unblocked) → see [[how/campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p1_m13_token_audit.md|M1.3 mission file]] + [[STATE_archive.md|STATE_archive.md]] for full detail.

- **CLOSED**: `campaign_adna_v2_infrastructure` (final v2 mission M06 closed at 2-session arc; campaign master `status: executing → completed`; closed_at 2026-05-18T19:10Z+; `session_stanley_20260518_183851_adna_v2_m06_s2`). 7 missions total (M02→M08a→M03→M04→M04b→LWX-mini→M05→M06); 6 ADRs ratified (006 amended/007/008/009/010/011); 1 GitHub repo rename (auto-canonicalized to mixed-case `aDNA` per ADR-006 amendment D1) + 1 annotated v7.0 tag + 1 GitHub release. **v7.0 LIVE at `LatticeProtocol/aDNA` commit `27e6395`**; release at `https://github.com/LatticeProtocol/aDNA/releases/tag/v7.0`; 10/10 post-tag verification PASS.
- **RATIFIED**: v8 P0 → P1 transition — Standing Order #16 hard dependency satisfied (v7.0 tag exists); Standing Order #19 satisfied (operator explicit authorization 2026-05-18T19:33Z); M1.1 + M1.2 coord checkpoints flipped `planned → completed` in v8 master.
- **In-flight v8 work**: P0 closed 2026-05-17; **M1.3 S1 in-progress** (this session); M1.4 LatticeScope.aDNA planning + 4 deferred-from-M06 sub-mission candidates (doc grep deeper sweep + MANIFEST.md Project Identity + token estimate re-measurement + skills inventory comprehensive review) open at M1.3 close.
- **17 partner-vault v7.0 migrations UNFROZEN** at this tag firing per D5 passive: all `coord_2026_05_09_v7_*.md` memos unfreeze; partner pull-cadence operator-discretionary. **4 partner-affiliated embargo memos** stay `status: draft` per D5 passive (Wilhelm × 2 ADR-010-window + SuperLeague + SIP operator-approval).
- **6 announcement/coord artifacts flipped**: 3 public-announcement drafts (`m08a_github_release_notes_v7.md` `draft → delivered` with `published_url` filled + `m08a_readme_badge_spec.md` `draft → delivered` + `m08a_social_comms_post_draft.md` `draft → ready` for operator 24h social publication per D4); Daedalus shipped-memo (`coord_2026_05_18_publish_rewrite_shipped_daedalus.md` `draft → delivered` per D3 pre-tag).
- **3 new ADRs/amendments landed**: ADR-011 (semver discipline) NEW + `accepted` at M06 S2 phase gate; ADR-006 AMENDED for mixed-case canonicalization (D1=A); ADR drift-reconciliation artifact at `missions/artifacts/m06_obj2_changelog_drift_reconciliation.md` reconciles 11 CHANGELOG candidates (vs spec's 9 — `skill_iii_setup.md` + D1 URL sweep newly surfaced).
- **M08b** (post-flatten ecosystem propagation receipts + Wilhelm post-co-sign acknowledgment add) parallel-runs informationally; F3 fold-in absorbed M08b's primary upgrade-guide-copy responsibility at M06 pre-tag commit (`.adna/how/docs/upgrade_v6_to_v7.md` lands at v7.0 tag).
- **Mini-campaign LWX**: closed 2026-05-13; 2 successor campaigns seeded (`campaign_obsidian_deployment_stabilization` absorbed-by-v8; `campaign_validation_node_adna_lwx_outputs` in lattice-labs).
- **Operation Rosetta**: Phases 0-7 complete (5.00 ranker); Phase 8 absorbed-by-v8 Phase 5.
- **node.aDNA/**: bootstrapped at M04 (HEAD `411660e` v0.1; local-only); inventory + identity scaffolds + 5 node-skills (after M-H.1.5 graduation) + Hestia persona inline.
- **`.adna/` upstream HEAD**: `27e6395` (M06 S2 pre-tag commit); v7.0 tag SHA `3681f76`; canonical URL `https://github.com/LatticeProtocol/aDNA.git` (mixed-case per ADR-006 amendment).
- **Next**: **M1.4 LatticeScope.aDNA v0.1.1 schema activation** (operator-gated entry per Standing Order #1; M1.3 close UNBLOCKED M1.4). Primary scope: Amendment D `transcript_path` column on `sessions` table (LOAD-BEARING — unlocks CP-2..CP-4 measurement via .jsonl transcript ingestion) + Amendment E sessions-table population (hook INSERT-OR-IGNORE on first call). Secondary scope: Amendments A (payload-usage detect) + B (cross-vault traversal detection) + C (recipe_id propagation contract). Estimated 2-3 sessions per campaign master forecast; canonical implementation shape candidate. Bootstraps `LatticeScope.aDNA/` sub-vault if needed (per `m01_obj10_latticescope_vault_design.md`). **M2.x P2 missions also unblocked** (operator-discretionary parallel): M2.1 (context file audit; opens with top-3 optimization queue) + M2.2 (ADR-016 ratification) + M2.3 (convergence-model validation cross-campaign retrospective) + M2.4 (AGENTS.md heat map; awaits ≥10 live sessions).

## Active Campaigns

### `campaign_adna_serious_tool_readiness` (P0 → P1 transition; **PRIMARY 2026-05-17 onward**)

`how/campaigns/campaign_adna_serious_tool_readiness/` — comprehensive aDNA upgrade cycle toward v8.0 (Major Governance bump). Persona: Rosetta. Strategic intent: make aDNA a *"serious tool for developers/companies/communities of many types."* 6 operator-specified scope areas: (1) context/token efficiency · (2) context management/logic/tracking · (3) airlock system AAR + streamline · (4) Terminal.aDNA / LatticeTerminal.aDNA integration · (5) III research missions + 100 III loops on aDNA website + readme · (6) node.aDNA Obsidian home page (Bases-driven + per-vault info pages + agent-inspectable + modular III for Obsidian). 7 phases (P0 Planning + P1 Foundation + P2 Context optimization + P3 Forge hardening + P4 Installer + P5 Public readiness + P6 Tag v8.0); 29 missions; estimated 43-100 sessions / calibrated 60-80 mid-band. **P0 opened + closed 2026-05-17** at `session_stanley_20260517_200510_v8_p0_planning` (P0 first-execution-session combined with campaign open per M04b precedent). D1-D7 ratified at P0 (campaign name version-less; tag v8.0 Major; default v2 absorption; D9+D10 Rosetta + 80 new on readme = 100 III loops; single aDNA.aDNA + coord memos; per-phase decadal + planning-session adversarial; next fresh session opens v2 M05 ship-before). 5-persona ranker review average 4.16/5 (GO; 4 amendments queued to specific phases). Master at `how/campaigns/campaign_adna_serious_tool_readiness/campaign_adna_serious_tool_readiness.md`; CLAUDE.md adds Standing Orders 11-19; P0 AAR at `missions/artifacts/aar_adna_str_p0_planning.md`. **Absorbs**: v2 M08c/M09/M10/M11 + `campaign_obsidian_deployment_stabilization` 8 tracks T1-T8 + Operation Rosetta Phase 8 + Rosetta Phase 7 D9+D10 (20 cycles). Cross-vault Phase 4 co-design with `LatticeTerminal.aDNA/` (Spock) — coord stub at `who/coordination/coord_2026_05_17_v8_campaign_open_latticeterminal.md`. **Phase 1 opens at next fresh session** (operator-approved D7): critical path = v2 M05 publish-skill ship → v2 M06 v7.0 tag → v8 P1 M1.3 token audit + M1.4 LatticeScope schema activation.
### `campaign_adna_v2_infrastructure` (P1, **COMPLETED 2026-05-18 — v7.0 tag LIVE; final v2 mission M06 closed; campaign retired**)

**As of 2026-05-18 (M06 S2 close + campaign close)**: Campaign master `status: executing → completed` at 2026-05-18T19:10Z+ (`closed_session: session_stanley_20260518_183851_adna_v2_m06_s2`). All 8 mission slots resolved: ✅ M02 + ✅ M08a + ✅ M03 + ✅ M04 + ✅ M04b + ✅ LWX-mini + ✅ M05 + ✅ M06; M07 partial-absorbed-by-v8; M08c/M09/M10/M11 fully absorbed-by-v8; M08b parallel-runs informationally. **v7.0 tag LIVE at `LatticeProtocol/aDNA` commit `27e6395`** (tag SHA `3681f76`); GitHub release at `https://github.com/LatticeProtocol/aDNA/releases/tag/v7.0`; 10/10 post-tag verification PASS. **ADR-011 (semver discipline) ratified** at S2 phase gate (file at `what/decisions/adr_011_aDNA_semver_discipline.md`); **ADR-006 amended** to canonicalize mixed-case `aDNA` URL slug per D1=A operator decision. 6 ADRs ratified at the v7.0 tag (006 amended/007/008/009/010/011). M06 AAR at [[how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/aar_m06_v7_governance_tag.md|`aar_m06_v7_governance_tag.md`]] with load-bearing finding **campaign-close-as-distinct-mission-class** (first instance of mission that doubles as campaign close via single-trigger event). 19th amendments entry appended to campaign master frontmatter capturing the close. **v8 P0 → P1 transition UNBLOCKED** at M06 S2 close per Standing Order #16; v8 M1.2 amendments fired at this S2 close (vs S3 per M05 S3 M1.1 precedent — S2 absorbed S3 under Rosetta-defaults compression). **17 partner-vault v7.0 migrations UNFROZEN** at the tag firing per D5 passive; partner pull-cadence operator-discretionary. **6 announcement/coord artifacts flipped** at delivery cascade (3 public-announcement drafts + Daedalus memo flipped; 4 partner-affiliated embargo memos stay `status: draft` per D5).
> Pre-M05-close historical session-by-session record at [[how/campaigns/campaign_adna_v2_infrastructure/campaign_adna_v2_infrastructure.md|campaign_adna_v2_infrastructure.md]] §Amendments (M01-M06 + LWX mini-campaign details preserved at master). Earlier STATE.md descriptive prose migrated out of router at M2.1 S2 2026-05-19 to keep router shape ≤ 20 kT.

### Completed Mini-Campaigns

#### `campaign_lattice_workspace_ux` (mini-campaign — **CLOSED 2026-05-13**)

`how/campaigns/campaign_lattice_workspace_ux/` — interstitial mini-campaign that ran between v2 M04b close and v2 M05 open. **Closed 2026-05-13T07:00Z+ at M-LWX-03 S2 Phase K**; 3/3 missions completed (M-LWX-01 + M-LWX-02 + M-LWX-03); 5 sessions actual (within 5-7 estimate). Outcomes: 4-instance single-commit additive-upstream pattern settled (ADR-008 + e3b3bcc + 8673383 + 202c9ec); scope-vs-role naming codified at ADR-001 (node-scope) + ADR-013 (workspace-scope, 4-sub-rule design test); mirror-this-node verification fidelity established; **verification-handoff topology codified** as load-bearing architectural primitive (agent-side smoke + operator-side runtime smoke + dispatch connector OR agent-driven inspection). 21 findings routed to 2 successor campaigns. Validation disposition for M-LWX-03 Obj 2 operator-side checks: dispatched to Carly+Herb. Campaign AAR at `how/campaigns/campaign_lattice_workspace_ux/missions/artifacts/aar_campaign_lattice_workspace_ux.md`. **Successor campaigns seeded at M-LWX-03 S2 Phase L** — see Pending Campaigns below.

### Pending Campaigns (seeded but not yet open)

#### `campaign_obsidian_deployment_stabilization` (NEW successor — seeded 2026-05-13 at M-LWX-03 S2 Phase L; **ABSORBED by `campaign_adna_serious_tool_readiness` 2026-05-17**)

`how/campaigns/campaign_obsidian_deployment_stabilization/` — implementation-focused successor to `campaign_lattice_workspace_ux`. Owner: Rosetta. Strategic intent: make the Obsidian deployment of every aDNA vault stable, standard, and self-stabilizing. **ABSORBED into `campaign_adna_serious_tool_readiness` Phase 3** (Forge Ecosystem Hardening) 2026-05-17 — 8 tracks T1-T8 distributed across v8 missions M3.1-M3.4. Stub directory preserved for audit (per Standing Order #6 archive-not-delete); status `planned` stays in stub frontmatter; effective status `absorbed_by: campaign_adna_serious_tool_readiness`. 7 backlog files F-S2-1..8 (in `aDNA.aDNA/how/backlog/`) source the v8 Phase 3 work directly.

#### `campaign_validation_node_adna_lwx_outputs` (NEW successor — seeded 2026-05-13 at M-LWX-03 S2 Phase L; lives in `lattice-labs/`)

`lattice-labs/how/campaigns/campaign_validation_node_adna_lwx_outputs/` — validation-focused successor; dispatched to Carly + Herb. Owner: Berthier (lattice-labs). Strategic intent: validate M-LWX-01/02/03 outputs on operator-owned machines via Carly+Herb dispatch. Phase 1 narrow: M-VNAL-01 covers outstanding O4 (wikilinks), O5 (cross-vault links), O6 (marketplace), O3-extended (full vault tables). Phase 2+ broader: recurring "Carly+Herb validate-all-aDNA-features" pattern — the FIRST instance of an explicit validation-dispatch campaign for aDNA work. Coord memo at `lattice-labs/who/coordination/coord_2026_05_13_carly_herb_node_adna_validation_dispatch.md`. Status: `planned`; opens when Carly + Herb each acknowledge the coord memo.

#### `campaign_adna_v3_ecosystem_compliance` (planned successor — seeded 2026-05-08)

`how/campaigns/campaign_adna_v3_ecosystem_compliance/` — applies v7.0 changes per-vault to the 19 active aDNA ecosystem vaults. Strategic intent: bring the lattice into full v7.0 compliance after the standard codifies it. Preliminary phase structure: P0 planning + P1 audit + P2 bulk skill upgrade + P3 git remote setup + GitHub naming standardization + P4 airlock adoption + workspace router resync + P5 final ecosystem audit + AAR. Preliminary mission outline: M01-EC (per-vault audit) → M02-EC (bulk skill upgrade) → M03-EC (git remote setup) → M04-EC (GitHub repo rename) → M05-EC (airlock adoption) → M06-EC (workspace router resync) → M07-EC (final audit + AAR). Estimated 12–20 sessions (recalibrated by M01-EC). Persona: Rosetta continues. **Opens at v2 P3 phase gate** (post-M03 flatten + M08a/M08b shipped); M11 of v2 finalizes the mission tree before this campaign opens.

### Operation Rosetta (Phase 7 D9+D10 + Phase 8 — **ABSORBED by `campaign_adna_serious_tool_readiness` 2026-05-17**)

`how/campaigns/campaign_rosetta/` — build the self-referential aDNA context graph. **Phase 7 D9+D10 (20 cycles) + Phase 8 (MDX + interactive demo + workshop kit) ABSORBED into `campaign_adna_serious_tool_readiness` Phase 5** (Public Readiness) 2026-05-17. The 100 III loops target now means D9+D10 (20 cycles) + 80 new cycles on github readme (per D4 ratification). Rosetta status `active` stays for audit; effective forward work routes through v8.

| Phase | Status | Missions | Content |
|-------|--------|----------|---------|
| Phase 0: Scaffold | Complete | M00 | 0 content, 10 AGENTS.md, 10 templates, 2 skills |
| Phase 1: Core Content | **Complete** | M01-M05 | 26/26 (13 concepts, 8 patterns, 5 comparisons) |
| Phase 2: Human Path | **Complete** | M06-M08 | 15/15 (9 tutorials, 6 use cases) |
| Phase 3: Website v1 | **Complete** | M09-M12 | 60-page site live on Vercel |
| Phase 4: The Who | **Complete** | M13-M15 | 37/37 (25 glossary + 1 index, 3 governance, 3 community, 5 adopters) |
| Phase 4.5: III Site Improvements | **Complete** | M20-M23 | Hero redesign, 37 new pages, components, OG images |
| Phase 5: The How | **Complete** | M16-M18 | 11/11 (3 publishing, 4 workshops, 4 lattice YAMLs) |
| Phase 6: Website v2 | **Complete** | M19 | How section live: 11 new pages + 4 index pages |
| Phase 7: 100-Cycle III Loop | **Active** | M24-M35 | D1-D7 complete (cycles 1-70, ranker 4.97); D8 pending phase gate (cycles 71-80) |
## Phase 7 Progress

- **M24: Baseline** — Complete.
- **M25: D1 Accessibility Perfection** — **Complete** (cycles 1-10). Ranker close: 4.35. AAR: [aar_phase7_d1.md](how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d1.md).
- **M26: D2 Content Clarity Sprint** — **Complete** (cycles 11-20). Ranker 4.35→**4.70** (Δ +0.35). AAR: [aar_phase7_d2.md](how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d2.md).
- **M27: D3 Navigation & IA** — **Complete** (cycles 21-30). Ranker 4.70→**4.83** (Δ +0.13). AAR: [aar_phase7_d3.md](how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d3.md).
- **M28: D4 Visual Identity & First-Contact** — **Complete** (cycles 31-40). Ranker 4.83→**4.91** (Δ +0.08). AAR: [aar_phase7_d4.md](how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d4.md).
- **M29: D5 Mobile Experience** — **Complete** (cycles 41-50). Ranker 4.91→**4.94** (Δ +0.03). Delight 4.50→4.71 (+0.21). AAR: [aar_phase7_d5.md](how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d5.md).

- **M30: D6 Performance & Loading** — **Complete** (cycles 51-60). Ranker 4.94→**4.96** (Δ +0.02). Delight 4.71→4.81 (+0.10). Mobile LH 98-100. AAR: [aar_phase7_d6.md](how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d6.md).

- **M31: D7 SEO & Discoverability** — **Complete** (cycles 61-70, 2026-04-24). Ranker 4.96→**4.97** (Δ +0.01). JSON-LD 55%→97%, heading hierarchy 45 violations→0, Patterns a11y 98→100, 6 concept→tutorial cross-links. AAR: [aar_phase7_d7.md](how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d7.md).

- **M32: D8 Interaction Depth** — **Complete** (cycles 71-80, 2026-04-24). Ranker 4.97→**4.99** (Δ +0.02). Delight 4.83→4.99 (+0.16). All 9 priority items done. AAR: [aar_phase7_d8.md](how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d8.md).

- **M33: D9 Narrative Onboarding** — **Complete** (cycles 81-90, 2026-04-24). Ranker 4.99→**5.00** (Δ +0.01). Pain statement above fold, `/get-started` callouts, trust links in hero, problem-first steps. Educator Actionability 4.93→4.98. AAR: [aar_phase7_d9.md](how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d9.md).

- **M34: D10 Teach-by-Example** — **Complete** (cycles 91-100, 2026-04-26). Ranker 5.00→**5.00** (ceiling held). `.hero-problem` restyle, `what-is-adna` ~1000 words (F-02+F-06 resolved), get-started terminal output, nav "How"→"Guides", hero parenthetical. Educator Actionability 4.98→4.99, Delight 4.98→4.99. AAR: [aar_phase7_d10.md](how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d10.md).

- **M35: Phase 7 Campaign AAR** — **Complete** (2026-04-26). Campaign-level AAR synthesizing 100 cycles, 10 decadals, 4.35→5.00 (+0.65). Phase arc Phases 0-7 documented. Phase 8 seeded. AAR: [aar_phase7_campaign_closeout.md](how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_campaign_closeout.md).

### Persona Ranker Summary

| Decadal | Close Score | Delta |
|---------|------------|-------|
| D1 (Accessibility) | 4.35 | +0.35 |
| D2 (Content Clarity) | 4.70 | +0.35 |
| D3 (Navigation & IA) | 4.83 | +0.13 |
| D4 (Visual Identity) | 4.91 | +0.08 |
| D5 (Mobile Experience) | 4.94 | +0.03 |
| D6 (Performance & Loading) | 4.96 | +0.02 |
| D7 (SEO & Discoverability) | 4.97 | +0.01 |
| D8 (Interaction Depth) | 4.99 | +0.02 |
| D9 (Narrative Onboarding) | 5.00 | +0.01 |
| D10 (Teach-by-Example) | **5.00** | **0.00** |

**D10 dimension breakdown**: Findability 4.99 (0) · Comprehension 5.00 (0) · Actionability 5.00 (0) · Trust 5.00 (0) · Relevance 5.00 (0) · Delight 5.00 (0) · **Phase 7 total: 4.35→5.00 (+0.65)**

## What's Working

- Full documentation site live at https://adna-docs.vercel.app — **117 pages**
- Lighthouse 100/100/100/100 desktop + **98-100 mobile Performance** across all tested pages (target ≥90 exceeded)
- Playwright **47/47** gates pass (gate-10-perf.spec.ts added D6)
- Homepage: plain-language hero-lead ("the genome of your project (a structured, persistent context layer)"), pain statement as plain hero text (no box), Problem→Shape→Win How it Works arc, dual-audience hero-subtitle
- `/learn/what-is-adna` expanded to ~1000 words — triad diagram, 14-entity table, CLAUDE.md snippet, "This site IS an aDNA vault" self-reference with 4 GitHub links (F-02 + F-06 resolved)
- 6 persona landings: `/educators`, `/enterprise`, `/compliance`, `/startup-first-hour`, `/researchers` (new D3), `/adopters` (with decision tree)
- Breadcrumbs site-wide + Related Elsewhere CardGrids on all 29 content pages + Back-to-index links + tooltip rollout (39 tooltips total)
- Tutorial index: difficulty-tiered with time estimates and per-tier guidance
- Reference section: inbound links from 4 most spec-adjacent concept pages
- Reviewer bench live: 5 reviewer personas (`who/reviewers/`) + `skill_decadal_aar.md` Step 4b wired
- 89 vault content files + 117 site pages
- Light/dark theme: no FOUC, persists across `ClientRouter` navigation
- Hero banner: AVIF format (110kB→10kB at 480px, 91% compression), WebP fallback
- Prefetch: hover strategy on all nav links, PrevNextNav, and homepage CTAs
- Font preloads: Inter 400 + Space Grotesk 400+700 latin in every page `<head>`
- JSON-LD structured data: 97% coverage (35/36 Astro pages) — CollectionPage, TechArticle, HowTo, BreadcrumbList, WebPage, WebSite schemas
- Heading hierarchy: 0 violations (CardGrid `<h3>`→`<p>`, 33 Pathway-2 MDX files H1-stripped)
- Patterns a11y: 100/100 Lighthouse (was 98 pre-D7)
- Concept→tutorial cross-links: 6 targeted cross-links added (concepts and patterns link to their hands-on tutorials)

## Active Blockers

None.


## Next Steps

**As of 2026-05-19 (v8 P2 — M2.2 CLOSED + ADR-016 RATIFIED + SO #11 ADDED; M2.3/M2.4/M1.5 next operator-discretionary parallel) — Primary track: `campaign_adna_serious_tool_readiness`**

### v8 P2 status + parallel-discretionary slate

1. **M1.5 coord-network discharge** — `status: planned`; operator-discretionary parallel slot. **Timing target ≤ 2026-05-26** per [[who/coordination/coord_2026_05_19_v8_cross_vault_disruption_assessment.md|cross-vault disruption assessment memo]] §6 (preserves 1-week buffer before assumed v8 P3 entry ~2026-06-02). Discharges LIP-0006 ratification + 2 entity-types parallel-discharge + 5 open Qs at [[who/coordination/coord_2026_05_19_v8_cross_vault_network_coordination.md|M1.5 coord memo]]. 0-1 sessions; non-destructive.

2. **M2.3 Convergence-model validation cross-campaign retrospective** — `status: planned`; operator-discretionary parallel slot. Consumes `ingest_transcript.py` corpus (645 MT cache_read across 48 sessions) + M2.1 post-split data point + M2.2 ratification session as new data points. Publishes empirical Δ on M2.1 §2 forecast; may amend ADR-016 Clause C with ratified API-billing formula OR draft separate ADR.

3. **M2.4 AGENTS.md heat map** — `status: planned`; awaits ≥ 10 live-hook sessions of corpus accumulation. M2.1 + M2.2 contribute 2 fresh post-hint sessions; live-hook corpus still pre-threshold. Defer to late P2.

### Operator next-session options

- Authorize M1.5 coord-network discharge (timing-critical ≤ 2026-05-26; non-destructive; 0-1 sessions).
- Authorize M2.3 convergence-model retrospective (consumes 48-session corpus + M2.1 split + M2.2 ratification as data points; reports calibration accuracy under ratified Clause A; may ratify API-billing companion formula).
- Spot-walk M2.2 outputs (`grep -c "^[0-9]\+\." aDNA.aDNA/CLAUDE.md` returns 11+ for the SO #11 addition; verify ADR-016 at `what/decisions/adr_016_per_mission_context_budget.md`; verify `aar_m22_per_mission_budget.md` + mission spec).
- Open M2.1.5 interstitial for retroactive Op 3 application to v2 + LWX masters (D4=A defaults to M3.x; operator override available).

### Carry-forward items (deferred)

- M07 cleanup items (doc grep deeper sweep + MANIFEST.md Project Identity + token estimate re-measurement + skills inventory comprehensive review) — operator-discretionary.
- 4 partner-affiliated embargo memos still `status: draft` (Wilhelm × 2 ADR-010-window + SuperLeague + SIP).
- 17 partner-vault v7.0 migrations unfrozen but operator-discretionary per partner; partner pull-cadence not v8-blocking.
- Operation Rosetta Phase 8 absorbed-by-v8 P5.

## Pending Manual Actions

- **GitHub social preview**: Upload `site/public/images/og-default.png` at github.com/LatticeProtocol/aDNA.aDNA > Settings > Social preview
- **Vercel Git integration**: Connect repo at vercel.com > adna-docs > Settings > Git for auto-deploy (currently manual via `vercel --prod`)
- **Vercel deploy**: D7+D8 deployed to production 2026-04-24 ✅
- **Vercel deploy**: D9 deployed to production 2026-04-26 ✅
- **Vercel deploy**: D10 deployed to production 2026-04-26 ✅
- **Vercel deploy**: Wind-down (M35 AAR, campaign closeout) deployed to production 2026-04-26 ✅
- **Google Search Console**: Register adna-docs.vercel.app, obtain verification code, add `<meta name="google-site-verification" content="...">` to `SEOHead.astro`
- **Bing Webmaster Tools**: Register adna-docs.vercel.app, obtain verification code, add `<meta name="msvalidate.01" content="...">` to `SEOHead.astro`
- **Delete M05 S2 scratch GitHub repo**: `github.com/ScienceStanley/m05-test` (private; ~10KB; verification scratch from 2026-05-18). Delete via GitHub UI > Settings > Delete, or refresh gh auth scope with `gh auth refresh -h github.com -s delete_repo` then `gh repo delete ScienceStanley/m05-test --yes`. Repo lingers because gh token at S2 only had `repo` scope (not `delete_repo`).


## Last Session (2026-05-19 — M2.1 S2 destructive **in flight**; Op 1 STATE.md split phase A landed; phase B router rewrite this commit)

M2.1 S2 opened 2026-05-19T21:12:29Z+ (`session_stanley_20260519T211229Z_v8_m21_s2`; plan ratified at `/Users/stanley/.claude/plans/please-read-the-claude-md-lexical-scott.md`). Pre-split STATE.md was 598 lines / 351,783 bytes / ~88 kT content-load; pre-split SHA `1e337db`. **Phase A landed at SHA `95332df`**: `STATE_archive.md` created (197,228 bytes; 283 lines; 19 DEPRECATED-marker headers + 1 superseded `## Last Session (2026-05-17)` block + 1 historic `## Next Session Prompt` section) — sed-extracted lines 338-598 of pre-split verbatim. **Phase B (this commit)**: STATE.md rewritten to router shape (frontmatter cleaned of legacy HTML comment; Current Phase top-4 bullets verbatim + 3 older bullets compressed to one-liners + 12 ecosystem bullets verbatim; Active Campaigns v2 Legacy descriptive block dropped with cross-link to campaign master; Phase 7 Progress + What's Working + Active Blockers + Pending Manual Actions verbatim; Next Steps rewritten for v8 P2; this Last Session block NEW). **Phases C-F pending in this same session**: phase C cross-link audit + 5-wikilink sample → phase D verification snapshot → phase E Op 2 AGENTS.md hint + MEMORY.md + memory file + backlog placeholder → phase F mission/master amendment + session close. **S3 (mission close + AAR + node.aDNA token_baselines.md v0.1.1 addendum + validation output)** stays operator-gated per project Standing Order #1 at next session entry.

## Next Session Prompt

> Resume `campaign_adna_serious_tool_readiness` (v8) at **M2.1 S3 close** (or M1.5 / M2.2 / M2.3 operator-discretionary parallel) in `aDNA.aDNA/`. **M2.1 S2 closed at `session_stanley_20260519T211229Z_v8_m21_s2`** with Op 1 (STATE.md → router + archive split) + Op 2 (AGENTS.md Heavy-File Read Convention + MEMORY.md companion + memory feedback file + upstream backlog placeholder) both LIVE. Router shape verified ≤ 80 KB / ≤ 20 kT; archive at 197 KB approaches quarterly-rotation threshold (M3.x re-evaluation per Op 3 design). **M2.1 S3 scope** (non-destructive; canonical 3-session shape; estimated 60-80 kT): `missions/artifacts/m21_obj7_validation_output.md` (pre/post split content-load delta + API-billing forecast + 5-wikilink resolution sample + ADR-016 prep notes addendum) + `missions/artifacts/aar_m21_context_audit_split.md` (lightweight 5-line + 4-category extended findings + 11+ acceptance scorecard + Standing-Order discharge + token-budget estimate-vs-actual) + `node.aDNA/what/context/token_baselines.md` light addendum (split-as-pattern note; v0.1.1 → v0.1.2 or v0.1.1-addendum) + companion YAML version field bump + campaign master M2.1 row `in_progress → completed` + STATE.md (router) Current Phase block updated. **M2.1 S3 unblocks** M2.2 ADR-016 ratification + M2.3 convergence-model retrospective + M2.4 AGENTS.md heat map (parallel-discretionary). **M1.5 coord-network discharge** stays operator-discretionary parallel; timing target ≤ 2026-05-26 per [[who/coordination/coord_2026_05_19_v8_cross_vault_disruption_assessment.md|cross-vault disruption assessment memo]] §6. **Hard constraints carried forward**: zero `.adna/` upstream touches (v7.0 frozen at `27e6395`); zero partner-vault contact (4 embargo memos preserved); zero `~/.claude/settings.json` modifications; `node.aDNA/` stays local-only. **Operator pre-S3 review options**: (a) authorize S3 entry immediately; (b) spot-walk router shape with cold-start Read; (c) authorize M1.5 in parallel; (d) authorize M2.2 ADR-016 in parallel; (e) pause to operator-validate router/archive byte counts. **Greet operator, confirm S2 close outputs landed** (STATE.md router ≤ 80 KB; STATE_archive.md ≤ 200 KB; 5-wikilink resolution PASS; AGENTS.md hint live; MEMORY.md companion live; memory feedback file live; backlog placeholder live; mission file deliverables 5+6 marked landed; campaign master amendments entry appended), **then ask**: "Authorize M2.1 S3 mission-close entry, or open M1.5 / M2.2 / M2.3 in parallel, or pause to review S2 split outputs?"

