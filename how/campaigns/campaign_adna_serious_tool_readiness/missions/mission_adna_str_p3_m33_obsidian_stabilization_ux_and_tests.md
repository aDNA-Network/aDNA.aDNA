---
type: mission
mission_id: mission_adna_str_p3_m33_obsidian_stabilization_ux_and_tests
campaign: campaign_adna_serious_tool_readiness
phase: 3
mission_number: 3.3
slug: obsidian_stabilization_ux_and_tests
created: 2026-05-23
updated: 2026-05-23
status: in_progress
opens_at: 2026-05-23T04:17:39Z
opened_session: session_stanley_20260523T041739Z_v8_m33_s1
estimated_sessions: 3   # canonical 3-session implementation-class shape — 8th instance candidate after M1.3 + M1.4 + M2.1 + M2.3 + M2.4 + M3.1 + M3.2
persona: rosetta
last_edited_by: agent_stanley
spec_completeness: in_progress   # S1 authored spec; S2 will land T5+T6 design specs + new skill; S3 close lands AAR + close cascade (S3-with-carry sub-mode available per M3.2 PRIMARY 5-criteria gate)
mission_class: implementation   # T5+T6 design specs + proposed-patch artifacts + NEW skill_obsidian_integration_test.md authoring; design at P3, propagation at P6; S3-with-carry sub-mode available
token_budget_estimated: "S1 ~85-115 kT content-load (M3.2 spec template digestion + absorbed-campaign Tracks 5+6 sections + LWX M-LWX-03 mission spec + AAR reads for O1-O7 source content + mission spec auth + campaign master amendments + STATE router refresh + session file) + S2 ~145-185 kT (T5 design spec + T6 design spec + NEW skill_obsidian_integration_test.md authoring; slightly heavier than M3.2 S2 ~140-180 due to LWX O1-O7 generalization scope) + S3 ~75-110 kT (AAR + STATE Op 3 13th canonical instance + campaign master close + 3 session moves; +10-15 kT if S3-with-carry triggers per M3.2 actual). Three-session total ~305-410 kT (~5% above M3.2 ~295-400 due to extra LWX reads at S1). API-billing companion per ADR-016 Clause C empirical formula (`cache_creation ≈ 328 K + turns × 1 K`; `cache_read ≈ 4.1 M + turns × 126 K`): S1 ~11-15 M cache_read at 6 turns; S2 ~13-18 M cache_read at 7-8 turns; S3 ~10-14 M cache_read at 6-7 turns; total ~34-47 M cache_read across the 3-session arc; ~1.0 M cache_creation total. Per ADR-016 Clause A + Project Standing Order #11; declared in mission frontmatter per Standing Order #8 self-reference (M3.3 declares its own budget per the field ADR-016 Clause A ratified)."
tags: [mission, m3_3, v8, p3, obsidian_stabilization, ux_and_tests, t5_first_open_ux_standardization, t6_integration_test_framework, canonical_3_session_implementation_shape_8th_instance_candidate, obsidian_stab_absorbed_t5_t6, north_star_easy_fluid_context_graphs, design_at_p3_propagation_at_p6_pattern, s3_with_carry_sub_mode_available, new_skill_obsidian_integration_test, rosetta]
prerequisite_missions:
  - mission_adna_str_p2_m21_context_audit_split             # closed; STATE.md split + Heavy-File Read Convention
  - mission_adna_str_p2_m22_per_mission_budget              # closed; ADR-016 LIVE
  - mission_adna_str_p2_m23_convergence_validation          # closed; ADR-016 Clause C empirical
  - mission_adna_str_p2_m23_5_push_readiness_review         # closed; planning-class single-session shape 3rd instance + 12-item checklist template
  - mission_adna_str_p2_m24_agents_md_heatmap               # closed; 7-item invariants spec + AGENTS.md UNDER-LOADED finding
  - mission_adna_str_p2_m245_agents_md_bulk_edit            # closed; 12-file AGENTS.md hardened + measurement-cycle contract
  - mission_adna_str_p3_m31_obsidian_stabilization_core     # closed; T1+T2 design specs + design-at-P3-propagation-at-P6 pattern ratified + 6-section design-spec structure ratified
  - mission_adna_str_p3_m32_obsidian_stabilization_extension # closed; T3+T4 design specs + skill_obsidian_canonicalize.md + S3-with-carry sub-mode ratified (5-criteria gate)
prerequisite_artifacts:
  # M3.2-ratified pattern + structure + new skill (immediate predecessor; verbatim inheritance)
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p3_m32_obsidian_stabilization_extension.md  # template + closed predecessor
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_m32_obsidian_stabilization_extension.md  # PRIMARY S3-with-carry sub-mode + STRONG-EXTENDED first-contact-polish ecosystem signal
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m32_obj3_t3_design_spec.md  # 6-section design-spec structure (9 H2 sections; T3 reference for T5)
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m32_obj4_t4_design_spec.md  # 6-section design-spec structure (13 H2 sections; T4 reference for T6 — combined-source precedent inverted at M3.3 D1=B)
  - aDNA.aDNA/how/skills/skill_obsidian_canonicalize.md  # M3.2 skill drop; T6 skill DELEGATES `--verify` mode for binary-presence checks (cross-skill primitive consumption)
  # M3.1-ratified pattern (verbatim inheritance via M3.2)
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p3_m31_obsidian_stabilization_core.md  # M3.1 spec (penultimate predecessor)
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_m31_obsidian_stabilization_core.md  # PRIMARY design-at-P3-propagation-at-P6 + STRONG-EXTENDED 6-section design-spec structure
  # absorbed-campaign substrate (read at S1 recon)
  - aDNA.aDNA/how/campaigns/campaign_obsidian_deployment_stabilization/campaign_obsidian_deployment_stabilization.md  # 8-track scope T1-T8 (Tracks 5+6 = this mission, lines 56-62)
  - aDNA.aDNA/how/campaigns/campaign_obsidian_deployment_stabilization/CLAUDE.md                                      # campaign-specific standing orders
  # LWX predecessor mini-campaign — T6 O1-O7 generalization source
  - aDNA.aDNA/how/campaigns/campaign_lattice_workspace_ux/missions/                                                # M-LWX-03 mission spec + AAR (O1-O7 verbatim source)
  - aDNA.aDNA/how/campaigns/campaign_lattice_workspace_ux/missions/artifacts/aar_campaign_lattice_workspace_ux.md  # mini-campaign AAR
  # v8 P2 doctrinal carries (same as M3.1+M3.2)
  - aDNA.aDNA/what/decisions/adr_016_per_mission_context_budget.md                                                  # Clause A two-metric budget + Clause B Heavy-File + Clause C empirical
  - aDNA.aDNA/what/decisions/adr_022_tool_use_logging.md                                                            # PostToolUse hook contract
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m245_obj3_measurement_contract.md # M3.x re-measurement trigger conditions (≥ 20-session corpus)
  - "/Users/stanley/lattice/node.aDNA/what/context/token_baselines.md v0.1.3 Appendix B"                              # AGENTS.md invariants spec
deliverables_count: 6   # 1 mission spec + 1 governance bundle (S1) + 1 T5 design spec + 1 T6 design spec + 1 NEW skill_obsidian_integration_test.md (S2) + 1 close cascade (AAR + STATE + campaign master + session moves) at S3. 7th deliverable possible if S3-with-carry sub-mode triggers (5-criteria gate: small-scope + reversible + operator-prepared + verifiable + parallel-substrate per M3.2 AAR PRIMARY load-bearing finding).
phase_authorization: "P3 already open via M3.1 S1 entry 2026-05-21T02:34:03Z; M3.3 inherits P3 status. Operator-authorized M3.3 opening at this session 2026-05-23T04:17:39Z (via plan ratification at `/Users/stanley/.claude/plans/please-read-the-claude-md-cozy-lemur.md` + operator AskUserQuestion answer 'Open M3.3 (T5+T6)'); recorded in campaign master amendments-table at S1 open per Project SO #1 + Campaign SO #19 (mission opens are operator-decision under phase-gates-are-human-gates doctrine even within an open phase)"
hard_dependency_satisfied: "M3.2 closed 2026-05-22T19:31:32Z at session_stanley_20260522T193132Z_v8_m32_s3 (HEAD `81670fc`; addendum at `ac89251`); M3.2 close UNBLOCKS M3.3 per campaign master Phase 3 table line 165 (M3.3 dependency = M3.2). 7/7 M3.2 deliverables LIVE (mission spec + governance bundle + T3 + T4 design specs + NEW skill_obsidian_canonicalize.md + AAR/close cascade + banner propagation S3 carry as Deliverable 7). Design-at-P3-propagation-at-P6 pattern survives 2nd test (M3.2). 6-section design-spec structure survives 3rd + 4th canonical instances (M3.2 T3 + T4). S3-with-carry sub-mode 5-criteria gate RATIFIED at M3.2 close (PRIMARY load-bearing finding). v7.0 frozen at `LatticeProtocol/aDNA@27e6395` (annotated `3681f76`); post-M3.2-close addendum at `LatticeProtocol/aDNA@5861133` operator-override-authorized — exception not precedent. HEAD post-SiteForge-rename-absorption = `410c6bc` at M3.3 S1 entry (1 commit ahead of M3.2 close HEAD `ac89251`). M2.1.5 retroactive Op 3 stays `planned-optional`; M3.0.5 stays `planned-stub`."
---

# M3.3 — Obsidian Deployment Stabilization UX-and-Tests (T5 + T6)

> **Mission produces**: (a) **T5 design spec** — first-open UX standardization runbook + integration-patch artifacts for `.adna/how/skills/skill_onboarding.md` (standalone-project case) + `.adna/how/skills/skill_project_fork.md` (post-fork message) per F-O1-1 + F-S2-4; (b) **T6 design spec** — integration test framework vault-agnostic checklist + per-vault customization slots + T8 forward-reference stub per F-Obj2-1 + F-Obj2-3 (LWX M-LWX-03 Obj 2 O1-O7 generalization); (c) **NEW skill** `aDNA.aDNA/how/skills/skill_obsidian_integration_test.md` — full skill authoring (vault-agnostic O1-O7 checklist + `--vault <path>` + `--profile <profile>` slots + DELEGATES binary-presence verification to `skill_obsidian_canonicalize.md --verify`); (d) **AAR + close cascade** — campaign master M3.3 row + amendments entry + STATE.md Op 3 13th canonical instance refresh + session moves.
>
> **Why now**: M3.2 closed 2026-05-22T19:31:32Z with the S3-with-carry sub-mode RATIFIED + skill_obsidian_canonicalize.md LIVE + design-at-P3-propagation-at-P6 pattern survived 2nd test. M3.3 is the natural P3 next mission per campaign master Phase 3 table line 165 (`M3.3 | First-open UX standardization (T5) + integration test framework (T6) | 2-3 | M3.2 | planned`). M3.3 close becomes the **3rd of 4 P3 phase-exit bricks** (M3.4 + M3.5 remain before P3 → P4 phase-exit per Campaign SO #19; exit-gate text: *"Agent can drive Obsidian autonomously; node.aDNA HOME polished; airlock workflow streamlined; modular III operational."*).
>
> **Design at P3, propagation at P6 — pattern inherited verbatim from M3.1+M3.2** (2nd survival test PASSED at M3.2 close): T5+T6 finding texts call for `.adna/` upstream changes (T5 = integration patches into upstream `skill_onboarding.md` + `skill_project_fork.md`; T6 = potential `skill_obsidian_integration_test.md` upstream-promotion + setup.sh test-invocation hook). v8 P2-P5 hard constraint forbids `.adna/` touches. **Resolution** (inherited): M3.3 produces design specs + proposed-patch artifacts as aDNA.aDNA-resident files (under `missions/artifacts/`); the NEW skill `skill_obsidian_integration_test.md` itself lives in `aDNA.aDNA/how/skills/` (not upstream — per F-S2-5 backlog §Critical files precedent followed by M3.2's `skill_obsidian_canonicalize.md`); v8 P6 owns the upstream cycle that lands those patches as the v8.0 ecosystem propagation. **v8 P6 propagation queue grows from 10-11 → 12-14 at M3.3 close** (adding T5 first-open-UX-doc-integration patches + T6 integration-test framework patches + T6 skill upstream-promotion candidate).
>
> **Self-reference (Standing Order #8 — 15th tactical invocation candidate in v8)**: M3.3's new `skill_obsidian_integration_test.md` IS the SECOND behavioral test of the M2.4.5-hardened `how/skills/AGENTS.md` routing layer for new-skill discoverability (first behavioral test was M3.2's `skill_obsidian_canonicalize.md`). Pattern across 14 prior v8 instances: each governance-synthesis mission folds its own measurement / verification / artifact into the doctrine it produces. M3.3 also continues M3.1+M3.2's design-spec mission lineage: M3.3 design specs follow the 6-section structure that M3.1 AAR ratified as canonical (now 4th + 5th canonical instances after M3.2's 3rd + 4th). The T6 integration-test skill DELEGATES binary-presence check to the M3.2 skill's `--verify` mode — the spec ratifies its own predecessor's deliverable as operational primitive.
>
> **North-star alignment**: The v8 campaign's strategic intent — *"easy and fluid way to build/operate/utilize context graphs"* — is operator-stated 2026-05-13 + saved to memory (`project_adna_lattice_ux_goal.md`). M3.3 directly serves this goal: T5 closes the "first 5 minutes" problem (operators run setup.sh in the wrong order, hit URL-scheme-needs-registration silent error, give up before discovering the vault works); T6 closes the "did my fork actually work" problem (operators can't tell broken from working post-fork without manual inspection). Both serve the day-1 forked-vault UX trustworthiness — T5 = arrival; T6 = arrival verification.

## Mission scope

Consume the M3.2 design-spec template + ratified design-at-P3-propagation-at-P6 pattern + 6-section structure + S3-with-carry sub-mode + absorbed-campaign Tracks 5+6 (lines 56-62) + LWX mini-campaign M-LWX-03 Obj 2 O1-O7 source content to:

1. **Mission spec authoring + design-spec template digestion** (S1) — read M3.2 mission spec verbatim as structural template; read M3.2 T3+T4 design specs as 6-section template references; read M3.2 AAR for S3-with-carry sub-mode + load-bearing findings; read absorbed-campaign Tracks 5+6 sections (lines 56-62) for T5+T6 verbatim source; read M-LWX-03 mission spec + AAR for O1-O7 verbatim source content; distill into mission spec frontmatter + Objectives + Scope + Acceptance + Hard constraints + Standing-Order discharges. **No fresh Obsidian recon-audit at M3.3** — M3.1 captured the recon at 2026-05-21T02:34Z; M3.2 inherited; M3.3 inherits via M3.2 and only deltas the T5+T6 substrate.

2. **Author T5 design spec** (S2; D1=B SEPARATE per plan) — first-open UX standardization documentation + integration-patch artifacts; proposed-patch artifact at `missions/artifacts/m33_obj3_t5_design_spec.md` containing 6 sections per ratified structure: (a) finding statement (F-O1-1 + F-S2-4 sub-findings: setup.sh-ordering pitfall — operators run from wrong directory or before quitting Obsidian; URL-scheme-needs-prior-registration silent error — File → Open Vault works but `obsidian://open?vault=...` URL scheme requires the vault to have been opened at least once via File → Open Vault first; documentation gap — these UX hazards are not in `skill_onboarding.md` or `skill_project_fork.md` operator-facing prose), (b) root-cause analysis (Obsidian's design: URL-scheme registration is per-vault and lazy — only registered after first-open via UI; setup.sh assumes operator quit Obsidian but does not enforce; skill_project_fork.md post-fork message currently does not warn about the order-of-operations pitfall), (c) ≥ 3 option matrix (Option 1: doc-integration into existing upstream skills [recommended per absorbed-source verbatim]; Option 2: NEW dedicated `skill_first_open_walkthrough.md` [rejected — duplicates onboarding skill]; Option 3: setup.sh `--first-open-check` mode [rejected — runtime detection of "did operator quit Obsidian" is unreliable]; Option 4: layered — doc + skill cross-link [hybrid; consider if operator overrides]), (d) recommended option + rationale (Option 1 doc-integration per absorbed-source verbatim — "Integrate into skill_onboarding.md for the standalone-project case + skill_project_fork.md post-fork message"; minimizes skill-surface bloat; reuses operator's existing mental model of those two skills), (e) literal patch text for `.adna/how/skills/skill_onboarding.md` (standalone-project §First open section addition: ~40 LOC markdown) + `.adna/how/skills/skill_project_fork.md` (post-fork message addition: ~20 LOC markdown), (f) v8 P6 propagation contract (additive-non-breaking text-only patches; bundle-or-separate choice operator-discretionary; single-commit-per-patch OR bundled with T3+T4 patches).

3. **Author T6 design spec** (S2; D1=B SEPARATE per plan) — integration test framework, vault-agnostic checklist + per-vault customization slots + T8 forward-reference stub; proposed-patch artifact at `missions/artifacts/m33_obj4_t6_design_spec.md` containing 6 sections per ratified structure: (a) finding statement (F-Obj2-1 + F-Obj2-3 carried from M-LWX-03 S1: operator-side O1-O7 validation checklist was ad-hoc per mission; no reusable skill exists; new vault forks have no post-fork integration-test recipe), (b) root-cause analysis (mini-campaign LWX produced O1-O7 inline within M-LWX-03 Obj 2 verification scope; never generalized; vault-agnostic generalization needs `<vault>` slot + profile system for per-vault test customization), (c) ≥ 4 option matrix (Option 1: skill-only [recommended for M3.3 scope]; Option 2: skill + setup.sh test-invocation hook [partially deferred to v8 P6]; Option 3: skill + CI integration [deferred to M3.4+ verification-handoff topology]; Option 4: split agent-side skill vs operator-side skill [deferred — adds surface]), (d) recommended option + rationale (Option 1 skill-only at M3.3; ratifies new-skill drop as M3.3 implementation deliverable; setup.sh test-invocation hook is the T6→v8 P6 propagation candidate), (e) literal patch text for `aDNA.aDNA/how/skills/skill_obsidian_integration_test.md` (NEW skill spec — see Objective 5) + optional `.adna/setup.sh` (test-invocation hook for `setup.sh --test` mode at v8 P6) + cross-link patches to `.adna/how/skills/skill_obsidian_canonicalize.md` cross-reference if `--verify` mode is consumed via this skill's binary-presence checks, (f) v8 P6 propagation contract (skill-as-aDNA.aDNA-resident is the M3.2 precedent; upstream-promotion candidacy assessed; setup.sh hook is the additive-upstream candidate).

4. **Author NEW skill `skill_obsidian_integration_test.md`** (S2) — full skill authoring (not stub) at `aDNA.aDNA/how/skills/skill_obsidian_integration_test.md` per F-S2-5 §Critical files precedent (skill lives in `aDNA.aDNA/how/skills/`, not `.adna/`; mirrors M3.2's `skill_obsidian_canonicalize.md` placement). Skill API: vault-agnostic O1-O7 checklist (generalized from M-LWX-03 Obj 2 operator-side verification) + per-vault profile customization slots (`--vault <path>` + `--profile <profile>`; profiles live at `<vault>/.obsidian/integration-test-profile.json` opt-in; default profile is `default`) + DELEGATES binary-presence verification to `skill_obsidian_canonicalize.md --verify` (cross-skill primitive composition; mirrors M3.2 D3 absorbed-mode pattern but inverted — M3.3 skill COMPOSES rather than absorbs). Skill modeled on `skill_obsidian_canonicalize.md` API surface + LWX M-LWX-03 Obj 2 O1-O7 substantive content. **`## Forward integration with T8 (M3.4)` section** as stub — names Local REST API + MCP touch points without implementing. Self-reference Standing Order #8 15th tactical invocation candidate.

5. **Apply minimal docs-drift carry-over if needed** (S2; optional) — if M3.3 S2 reads of `.obsidian/OBSIDIAN_CLAUDE.md` (post-M3.1 docs-drift fix at v8 HEAD `b82b542`) surface any drift specifically related to T5+T6 forecast (e.g., first-open URL-scheme note absence, integration-test invocation reference), apply minimal Edit. **Probable scope**: ZERO additional edits — M3.1 S2 docs-drift fix bundle was comprehensive for D1+D2+D3+frontmatter+Settings Search row; M3.2 S2 did not surface fresh drift. **Discovery treatment** if drift surfaces: flag as M3.4+ scope; do not expand M3.3 scope mid-mission.

6. **Close mission + refresh governance** (S3) — AAR at `missions/artifacts/aar_m33_obsidian_stabilization_ux_and_tests.md` (lightweight 5-line + extended findings + acceptance scorecard ≥ 16 rows + Standing-Order discharge + token-budget two-metric table); campaign master M3.3 row `in_progress → completed` + amendments-table entry; STATE.md router Op 3 archive-on-close 13th canonical instance refresh; 3 session files `active/` → `history/2026-05/`. S3-with-carry sub-mode AVAILABLE if 5-criteria gate satisfied at close window (per M3.2 PRIMARY load-bearing finding; ≥ 3-instance threshold for `skill_s3_with_carry_eligibility.md` graduation — current count 1 of 3 post-M3.2).

Canonical 3-session implementation-class shape — **8th instance candidate** after M1.3 + M1.4 + M2.1 + M2.3 + M2.4 + M3.1 + M3.2 (7 prior instances ratified at M3.2 close with new S3-with-carry sub-mode). S1 non-destructive (mission spec auth + STATE refresh) → S2 destructive within aDNA.aDNA (T5+T6 design specs + NEW skill authoring) → S3 non-destructive consolidation (AAR + campaign master close + session moves, optionally with S3-with-carry sub-mode absorption). Sub-pattern: M3.3 inherits M3.2's mixed-class S2 (design specs + new skill) — 2nd test of the substrate-inversion narrative (spec-only S2 at M3.1 → spec+skill S2 at M3.2 → spec+skill S2 at M3.3 stabilizes the mix).

## Objectives

### 1. Mission spec authoring + design-spec template digestion (S1)

- **Status**: in_progress (S1; this file)
- **Session**: S1
- **Read**: M3.2 mission spec (template; ~318 lines); M3.2 T3+T4 design specs (6-section reference); M3.2 AAR (PRIMARY S3-with-carry + STRONG-EXTENDED first-contact-polish findings); absorbed campaign `campaign_obsidian_deployment_stabilization.md` Tracks 5+6 sections (lines 56-62 verbatim); LWX M-LWX-03 mission spec + AAR (O1-O7 source content); plan file (`please-read-the-claude-md-cozy-lemur.md`); campaign-specific CLAUDE.md (Standing Orders 11-19).
- **Produce**: this file (frontmatter + Objectives + Scope + Acceptance + Hard constraints + Standing-Order discharges + §Improvements classification table + Cross-vault impact + Cross-Mission Dependencies + Self-reference + Risks + Notes).
- **Depends on**: M3.2 close (done); operator M3.3 opening authorization (done at plan ratification).

### 2. Campaign master M3.3 row flip + amendments entry + STATE refresh (S1)

- **Status**: pending S1
- **Session**: S1
- **Read**: campaign master `campaign_adna_serious_tool_readiness.md` Phase 3 table (current line 165 row state + amendments-table tail).
- **Produce**:
  1. M3.3 row flipped `planned → in_progress` at line 165 with opens_at + opened_session fields
  2. Amendments-table 2026-05-23 entry capturing M3.3 S1 OPENED + canonical 8th-instance candidate + design-at-P3-propagation-at-P6 inheritance + S3-with-carry sub-mode availability + Standing Order #8 15th invocation candidate + Op 3 12th canonical instance applied at STATE refresh
  3. STATE.md router Op 3 archive-on-close 12th canonical instance — demote M3.2 CLOSED bullet to concise single-line form; add new M3.3 S1 OPENED top bullet; refresh Next Steps + Last Session + Next Session Prompt; maintain ≤ 20 kT cap per ADR-016 Clause B
- **Depends on**: 1.
- **Acceptance**: campaign master M3.3 row visible as `in_progress`; amendments-table has fresh 2026-05-23 entry coherent with M3.2 S1 OPENED entry format; STATE.md ≤ 20 kT post-refresh; M3.2 demoted to concise form.

### 3. T5 design spec — first-open UX standardization (S2)

- **Status**: pending S2
- **Session**: S2
- **Read**: absorbed-campaign Tracks 5 (line 56-58 verbatim); F-O1-1 + F-S2-4 backlog files if present (else absorbed-campaign source is authoritative); `.adna/how/skills/skill_onboarding.md` (integration point — standalone-project case); `.adna/how/skills/skill_project_fork.md` (integration point — post-fork message); M3.2 T3 design spec (6-section template).
- **Produce**: `missions/artifacts/m33_obj3_t5_design_spec.md` with 6 sections per Mission scope §2.
- **Depends on**: 1, 2.
- **Acceptance**: design spec contains literal patch-style diff for `.adna/how/skills/skill_onboarding.md` + `.adna/how/skills/skill_project_fork.md`; option-matrix table with ≥ 3 options; v8 P6 propagation contract names exact upstream-cycle entry condition + verification expectation; cross-links to absorbed-campaign Track 5 source + M3.2 T3 design spec template.

### 4. T6 design spec — integration test framework (S2)

- **Status**: pending S2
- **Session**: S2
- **Read**: absorbed-campaign Track 6 (line 60-62 verbatim); LWX M-LWX-03 mission spec + AAR (O1-O7 source content); M3.2 T4 design spec (6-section template — combined-source precedent inverted at M3.3 D1=B separate); `aDNA.aDNA/how/skills/skill_obsidian_canonicalize.md` (cross-skill primitive `--verify` mode for delegation).
- **Produce**: `missions/artifacts/m33_obj4_t6_design_spec.md` with 6 sections per Mission scope §3.
- **Depends on**: 1, 2, 3 (T5 design spec sets the 6-section template that T6 follows).
- **Acceptance**: design spec contains literal patch-style diff for `aDNA.aDNA/how/skills/skill_obsidian_integration_test.md` (NEW skill content forward-reference to Obj 5) + optional `.adna/setup.sh` (test-invocation hook for v8 P6 candidate); option-matrix with ≥ 4 options; T8 forward-reference stub explicitly cross-cut hooked; cross-skill DELEGATION to `skill_obsidian_canonicalize.md --verify` explicitly named.

### 5. NEW skill `skill_obsidian_integration_test.md` authoring (S2)

- **Status**: pending S2
- **Session**: S2
- **Read**: F-S2-5 backlog §Critical files (skill location precedent at `aDNA.aDNA/how/skills/`); M3.2 `skill_obsidian_canonicalize.md` (mode-system pattern; vault-slot pattern); LWX M-LWX-03 Obj 2 O1-O7 (substantive content source); `aDNA.aDNA/how/skills/AGENTS.md` (M2.4.5-hardened routing layer for skills); `aDNA.aDNA/how/skills/skill_node_health_check.md` (similar pattern — health-check primitive).
- **Produce**: NEW `aDNA.aDNA/how/skills/skill_obsidian_integration_test.md` — full skill spec with frontmatter (type/created/updated/last_edited_by/tags) + skill API (vault-agnostic O1-O7 checklist generalized from M-LWX-03 + `--vault <path>` + `--profile <profile>` slots) + invocation contract + safety preconditions + per-profile test customization slot + DELEGATION block citing `skill_obsidian_canonicalize.md --verify` for binary-presence checks + acceptance per check + consumer expectations + cross-references to T5+T6 design specs + `## Forward integration with T8 (M3.4)` stub section.
- **Depends on**: 3, 4 (T5+T6 design specs define the skill API surface).
- **Acceptance**: skill file has full frontmatter; vault-agnostic O1-O7 checks documented; per-vault profile slot explicitly addressed; cross-skill delegation to `skill_obsidian_canonicalize.md --verify` explicitly named; cross-links to ≥ 2 prior skills (`skill_obsidian_canonicalize.md` + `skill_node_health_check.md`) + 2 design specs (T5 + T6); T8 forward-reference stub section present (≥ 1 paragraph; names Local REST API + MCP touch points).

### 6. AAR + close cascade (S3)

- **Status**: pending S3
- **Session**: S3
- **Read**: this mission file (S3 final state); S1 + S2 session files (SITREP synthesis); 3 S2 artifact files (T5 + T6 design specs + new integration-test skill).
- **Produce**:
  1. `missions/artifacts/aar_m33_obsidian_stabilization_ux_and_tests.md` — lightweight 5-line + extended findings (load-bearing? — TBD at S3; PRIMARY candidates: *3-session implementation-class shape 8th instance with continued spec+skill S2 mix stabilizes the substrate-inversion narrative* OR *2nd behavioral test of M2.4.5-hardened routing layer confirms or refutes new-skill discoverability* OR *T6 cross-skill delegation pattern is a reusable primitive-composition discipline for cross-mission skill consumption*; STRONG-EXTENDED candidates: *S3-with-carry sub-mode survives 2nd instance if triggered* OR *operator-side validation checklist generalization is a load-bearing UX deliverable* OR *T8 forward-reference-stub discipline ratifies as design-spec convention for cross-mission forward integration*) + ≥ 16-row acceptance scorecard + Standing-Order discharge table + token-budget two-metric table with API-billing companion per Project SO #11
  2. This mission file frontmatter `in_progress → completed` + `closed_at` + `closed_session` + `actual_sessions` + deliverables marked landed
  3. Campaign master M3.3 row `in_progress → completed` + amendments-table entry at S3 close (per M3.2 / M3.1 / M2.4.5 / M2.4 / M2.1 / M2.2 / M1.5 / M2.3 / M2.3.5 amendments-at-close precedent)
  4. STATE.md (router) Op 3 archive-on-close 13th canonical instance refresh — demote M3.2 CLOSED bullet to further concise form (M3.2 was demoted to single bullet at M3.3 S1 open per Op 3 12th); new M3.3 CLOSED top bullet; refresh Next Steps + Last Session block + Next Session Prompt; maintain ≤ 20 kT cap
  5. 3 session files (S1 + S2 + S3) moved `active/` → `history/2026-05/` at S3 commit
  6. **OPTIONAL S3-with-carry sub-mode invocation** if 5-criteria gate satisfied (small-scope + reversible + operator-prepared + verifiable + parallel-substrate per M3.2 AAR PRIMARY load-bearing finding); if triggered, document as Deliverable 7 in AAR with explicit gate-evidence row
- **Depends on**: 2 + 3 + 4 + 5.
- **Acceptance**: AAR has all required sections; campaign master state coherent; STATE.md router ≤ 20 kT; 3 session files in history/.

## Deliverables

| # | Deliverable | Session | Status |
|---|---|---|---|
| 1 | M3.3 mission spec (this file) | S1 | in_progress S1 |
| 2 | Campaign master M3.3 row flip + amendments entry + STATE.md router refresh (governance bundle) | S1 | pending S1 |
| 3 | `m33_obj3_t5_design_spec.md` — T5 first-open UX standardization | S2 | pending S2 |
| 4 | `m33_obj4_t6_design_spec.md` — T6 integration test framework | S2 | pending S2 |
| 5 | NEW `aDNA.aDNA/how/skills/skill_obsidian_integration_test.md` — full skill (vault-agnostic O1-O7 + `--vault` + `--profile` + cross-skill delegation) | S2 | pending S2 |
| 6 | AAR + campaign master close + STATE.md refresh + session moves | S3 | pending S3 |
| 7 | **OPTIONAL S3-with-carry sub-mode absorption** if 5-criteria gate satisfied at close window | S3 | conditional S3 |

## Current State — inherited from M3.1 recon-audit + M3.2 substrate (no fresh recon at M3.3)

M3.1 captured the `.obsidian/` recon-audit at 2026-05-21T02:34Z (10 parallel reads; .obsidian/* inventory; 3 documentation drift findings D1+D2+D3 resolved at M3.1 S2). M3.2 inherited that recon and extended it with `community-plugins.json` + plugin binary state knowledge. M3.3 inherits both via the M3.2 spec and notes only T5+T6-specific deltas. Last `.obsidian/` mutation: M3.1 S2 docs-drift fix bundle 2026-05-21T~05:04Z (HEAD `b82b542`).

### T5+T6 substrate deltas (additive to M3.1+M3.2 recon)

| Sub-area | M3.1/M3.2 finding | T5/T6 delta needed |
|---|---|---|
| **First-open ordering** (T5) | M3.1/M3.2 didn't address operator's first-5-minute UX — both assumed working invocation context | T5 design spec documents the canonical first-open runbook in 2 upstream skills |
| **URL-scheme registration** (T5) | M3.1/M3.2 didn't address `obsidian://open?vault=...` silent-failure-pre-registration | T5 design spec adds operator-facing note about URL-scheme lazy registration |
| **Vault-agnostic test framework** (T6) | M3.2 `skill_obsidian_canonicalize.md --verify` handles binary-presence per-vault; no broader integration-test framework exists | T6 design spec defines a vault-agnostic O1-O7 checklist + per-vault profile system that DELEGATES `--verify` to M3.2 skill |
| **Per-vault customization** (T6) | M3.2 skill uses `--vault <path>` slot; no profile system | T6 skill adds `--profile <profile>` slot (default `default`); per-vault profiles at `<vault>/.obsidian/integration-test-profile.json` (opt-in) |
| **T8 forward integration** (T6) | M3.4 absorbs T7 verification-handoff + T8 agent-driven inspection (Local REST API + MCP) | T6 skill includes `## Forward integration with T8` stub section (not implementation) |

### Bonus observations from M3.1+M3.2 already routed to M3.3 / future

Per M3.1+M3.2 spec §Bonus observations / cumulative discovery:
- Canonical hotkey set — M3.4+ scope (not M3.3).
- Style Settings default preset — M3.4+ scope (not M3.3).
- Templater folder mappings recheck against `plugins/templater-obsidian/data.json` — landed at M3.2 T4 scope; no M3.3 delta.
- LWX M-LWX-03 Obj 2 O1-O7 generalization — **THIS MISSION** (T6 scope).

## Improvements classification

| Class | Items | Treatment |
|---|---|---|
| **Additive non-breaking** (M3.3 S2 scope; aDNA.aDNA-resident) | NEW `skill_obsidian_integration_test.md` (new skill file in `aDNA.aDNA/how/skills/`); cross-link updates if any | Apply at S2 Obj 5 (aDNA.aDNA only; no `.adna/` touch) |
| **Breaking — deferred to v8 P6 propagation** | T5 doc-integration patches into `.adna/how/skills/skill_onboarding.md` + `.adna/how/skills/skill_project_fork.md`; T6 optional `.adna/setup.sh` `--test` mode hook; T6 skill upstream-promotion candidate (if operator decides upstream is the better home post-stabilization) | M3.3 S2 produces proposed-patch artifacts; v8 P6 lands at upstream commits |
| **Discovery required** (M3.4+ scope) | Canonical hotkey set + Style Settings default preset + T8 Local REST API + MCP wiring + any drift surfaced at S2 reads beyond T5+T6 scope | Flag in S2 SITREP; route to M3.4 backlog as appropriate |

## Acceptance criteria

- [ ] All 6 deliverables landed at S3 close (cumulative; 7 if S3-with-carry triggers)
- [ ] T5 + T6 design specs each contain literal patch-style diff text for upstream files (no actual `.adna/` mutation); both follow ratified 6-section structure
- [ ] NEW `skill_obsidian_integration_test.md` lives at `aDNA.aDNA/how/skills/`; vault-agnostic O1-O7 checklist documented; `--vault <path>` + `--profile <profile>` slots explicit; cross-skill delegation to `skill_obsidian_canonicalize.md --verify` explicitly named; T8 forward-reference stub present
- [ ] Campaign master M3.3 row flips `planned → in_progress` at S1 open + `in_progress → completed` at S3 close
- [ ] Campaign master amendments-table entry for M3.3 S1 open at S1
- [ ] Campaign master amendments-table entry for M3.3 close at S3
- [ ] `aar_m33_obsidian_stabilization_ux_and_tests.md` — lightweight 5-line + extended findings + ≥ 16-row acceptance scorecard + Standing-Order discharge table + token-budget two-metric table with API-billing companion
- [ ] STATE.md router Op 3 archive-on-close 13th canonical instance refresh at S3; stays ≤ 20 kT cap (also Op 3 12th canonical instance at S1 open)
- [ ] Zero `.adna/` upstream touches end-to-end (v7.0 frozen at `27e6395`; addendum at `5861133` is operator-override exception not precedent)
- [ ] Zero partner-vault contact (17 embargo memos preserved)
- [ ] Zero `~/.adna/measurement/measurement.sqlite` deliberate mutations
- [ ] Zero new ADRs at M3.3 unless load-bearing (Campaign SO #14 — ADR-014 verification-handoff stays forecast-scoped to M3.4)
- [ ] Zero `node.aDNA/` mutations (token_baselines.md v0.1.3 stays as-published; M3.x re-measurement contract per `m245_obj3` triggers at ≥ 20-session corpus and is OPERATOR-decisioned)
- [ ] Zero `.obsidian/` config or plugin file mutations (M3.3 is design-spec class + new skill drop; no on-disk Obsidian changes)
- [ ] Mission file declares `token_budget_estimated` per ADR-016 Clause A two-metric (Standing Order #8 self-reference 15th tactical invocation candidate)
- [ ] 3 session files moved `active/` → `history/2026-05/` at S3 commit

## Operator decision gates

| # | Question | Resolution | Resolved at |
|---|---|---|---|
| D1 | T5+T6 design-spec granularity: combined OR separate | **B: Separate** (one spec per track) — distinct finding sources (T5=F-O1-1+F-S2-4; T6=F-Obj2-1+F-Obj2-3) + distinct deliverable types (T5=doc-integration; T6=new skill + framework); M3.2 D1=A combined applies when sub-findings share narrative (F-S2-5/6/7 canonicalization) — not applicable here | Plan-default at S1 plan ratification; operator can override at plan ratification (no override given) |
| D2 | NEW `skill_obsidian_integration_test.md` at M3.3 S2 OR forecast to M3.4+ | **A: Author at S2 (full skill, not stub)** — mirrors M3.2 D2; skill is operational consumer of T6 design spec (ratifies design's coherence end-to-end); absorbed-source verbatim names this skill | Plan-default at S1 plan ratification; operator can override at plan ratification (no override given) |
| D3 | T6 scope: Obsidian-only validation OR full vault validation | **A: Obsidian-only at M3.3; full-vault deferred** — absorbed-source scopes to "validate deployment integrity" of Obsidian layer; full-vault validation is M3.4+ scope adjacent to T7 + ADR-014 | Plan-default at S1 plan ratification; operator can override at plan ratification (no override given) |
| D4 | T8 agent-driven inspection: stub-only references at M3.3 OR defer entirely to M3.4 | **A: Stub-only references** — absorbed-source: "integration with T8 agent-driven inspection where possible"; skill includes `## Forward integration with T8 (M3.4)` section as forecast stub; actual T8 wiring (Local REST API + MCP) belongs to M3.4 | Plan-default at S1 plan ratification; operator can override at plan ratification (no override given) |
| D5 | Sibling backlog artifact at S1 (like M3.1's decision-surface idea)? | **A: None — no operator enrichments visible from absorbed-source** | Plan-default at S1 plan ratification; operator can introduce at plan ratification (no introduction given) |
| D6 | Token budget per session | **S1 ~85-115 / S2 ~145-185 / S3 ~75-110; total ~305-410 kT** | Plan-default per ADR-016 Clause A two-metric; ratifies at AAR via estimate-vs-actual delta |

## Hard constraints

End-to-end constraints inherited from M3.1+M3.2; honored in all 3 sessions of M3.3:

- **Zero `.adna/` upstream touches** — v7.0 frozen at `LatticeProtocol/aDNA@27e6395`; post-M3.2-close addendum at `5861133` is operator-override exception per Campaign SO #14, NOT precedent. v8 P6 owns upstream propagation per Campaign SO #14 + ADR-005 rule 3. T5+T6 design specs CITE `.adna/` files (e.g., `skill_onboarding.md`, `skill_project_fork.md`, `setup.sh`) but DO NOT mutate them.
- **Zero partner-vault contact** — 17 partner-affiliated embargo memos preserved (Wilhelm × 2 + SuperLeague + SIP + 13 others); M3.3 does not trigger partner outreach.
- **Zero `~/.claude/settings.json` modifications**.
- **Zero `~/.adna/measurement/measurement.sqlite` deliberate mutations** — hook firing during session is normal; deliberate writes prohibited.
- **Zero hook modifications** — T6 integration-test framework defines tests as manual operator invocation OR setup.sh sub-mode delegation (deferred to v8 P6); no post-install hook firing introduced.
- **Zero new ADRs at M3.3 unless load-bearing** — Campaign SO #14 (ADR ratification gated at phase entries; M3.3 is intra-P3). ADR-014 (verification-handoff topology) is forecast-scoped to M3.4 per ADR roadmap; M3.3 does not draft it. If T5/T6 design work surfaces an unanticipated load-bearing decision, operator override per Campaign SO #14 exception clause may apply (escalate via SITREP).
- **Zero `node.aDNA/` mutations** — token_baselines.md v0.1.3 published at M2.4 close; M3.x re-measurement contract (per `m245_obj3_measurement_contract.md`) triggers only at ≥ 20-session corpus and is OPERATOR-decisioned, not auto-applied here.
- **Zero `.obsidian/` config or plugin file mutations** — M3.3 is design-spec class for upstream patches; NEW skill drops to `aDNA.aDNA/how/skills/`, not `.obsidian/`. No on-disk Obsidian changes.
- **Push to origin operator-discretionary** — push deferred post-AAR per M2.3.5 push-readiness checklist precedent. HEAD = `410c6bc` at S1 entry (1 commit ahead of M3.2 close `ac89251` post-SiteForge-rename-absorption). Operator authorizes push separately.
- **Zero M2.1.5 / M3.0.5 / M3.4-M3.7 scope creep** — M3.3 stays in T5+T6 lane; M3.0.5 stays `planned-stub`; M3.4-M3.7 untouched; M2.1.5 stays `planned-optional`.
- **Zero scope expansion mid-mission** — D1-D5 ratified at plan-time per recommended defaults; further mid-mission scope expansion requires operator-override per Standing Order #14.

## Standing Order discharges (preview — fills at AAR)

| # | Order | M3.3 discharge plan |
|---|---|---|
| Project SO #1 | Phase gates are human gates | ✅ P3 already open (M3.1 S1 entry 2026-05-21T02:34:03Z); M3.3 opening operator-authorized at this session 2026-05-23T04:17:39Z via plan ratification + AskUserQuestion answer; recorded in campaign master amendments-table |
| Project SO #3 | Context budget is doctrine | `token_budget_estimated` declared in frontmatter per ratified ADR-016 Clause A two-metric (content-load + API-billing companion); AAR reports estimate-vs-actual + API-billing per Project SO #11 |
| Project SO #5 | Every mission gets an AAR | `aar_m33_obsidian_stabilization_ux_and_tests.md` at Obj 6 (S3) |
| Project SO #6 | Archive never delete | M3.3 adds (T5+T6 design specs + new skill) + edits (campaign master + STATE); deletes nothing |
| Project SO #7 | Dual-audience test | Each touched artifact verified — design specs accessible to both developer (literal patch text) + newcomer (option-matrix tables with explanatory rationale); new skill accessible to both (skill API + invocation examples for developer; check descriptions + use cases for newcomer) |
| Project SO #8 | Self-reference mandatory | M3.3's new `skill_obsidian_integration_test.md` is the 2nd behavioral test of the M2.4.5-hardened skills routing layer (first was M3.2's `skill_obsidian_canonicalize.md`). T6 design spec DELEGATES binary-presence check to M3.2 skill — the spec ratifies its own predecessor's deliverable as operational primitive. M3.3 design specs follow 6-section structure ratified at M3.1 close (4th + 5th canonical instances). **15th tactical invocation candidate in v8** (after 14 prior in P2+M3.1+M3.2) |
| Project SO #9 | Upstream spec is source of truth | T5+T6 design specs CITE upstream `.adna/how/skills/skill_onboarding.md` + `skill_project_fork.md` + `setup.sh` as source-of-truth + DEFER ratification of patches to v8 P6 cycle; never contradict the spec |
| Project SO #10 | Cross-link aggressively | Each artifact has ≥ 2 wikilinks; design specs cross-link absorbed-campaign Tracks 5+6 + M3.2 T3+T4 design specs + M-LWX-03 mission + `skill_obsidian_canonicalize.md` + ADR-016 + this mission spec; new skill cross-links ≥ 2 prior skills (`skill_obsidian_canonicalize.md` + `skill_node_health_check.md`) + 2 design specs (T5 + T6) |
| Project SO #11 | Per-mission context budget mandatory | Mission frontmatter `token_budget_estimated` two-metric; AAR reports actual + delta + API-billing companion |
| Campaign SO #12 | Per-mission context budget | Same as Project #11; two-metric reporting |
| Campaign SO #14 | ADR ratification gated at phase entries | ✅ NO new ADRs at M3.3 expected; if surfaced, operator-override exception clause applies (escalate via SITREP) |
| Campaign SO #17 | Mission_class discipline | ✅ `mission_class: implementation` declared (T5+T6 design specs + new skill drop are executable artifacts even though `.adna/` patches deferred-to-P6 for upstream propagation) |
| Campaign SO #19 | Phase exit = human gate | ✅ applies at P3 → P4; M3.3 close does NOT auto-open M3.4 OR P4; both stay operator-decision (M3.3 close = 3 of 4 P3 phase-exit bricks; M3.4 + M3.5 remain) |
| Campaign SO #5 (absorbed-campaign) | 5th + 6th-instance additive-upstream candidates explicit | ✅ T5 doc-integration patches are additive-non-breaking (not instance-counting candidate); T6 setup.sh test-invocation hook is a v8 P6 additive candidate evaluated at T6 spec §3 option matrix |

## Cross-vault impact

- **`.adna/` upstream** — zero touches at M3.3; T5+T6 design specs join the **v8 P6 propagation queue** (grows from 10-11 → 12-14 at M3.3 close: 10-11 from M3.2 close + T5 doc-integration patches for `skill_onboarding.md` + `skill_project_fork.md` + T6 optional `.adna/setup.sh` `--test` mode hook + T6 skill upstream-promotion candidate).
- **Partner vaults** — zero contact; 17 embargo memos preserved.
- **`node.aDNA/`** — zero mutations at M3.3 (token_baselines.md v0.1.3 stays as-published).
- **`lattice-labs/`** — zero contact; absorbed-campaign sibling `campaign_validation_node_adna_lwx_outputs` lives there and is not consumed at M3.3 (verification-dispatch comes at M3.4 per ADR-014 forecast).
- **`SiteForge.aDNA/`** — zero contact at M3.3 substrate; 9 untracked carry-forward items (7 SiteForge cross-vault coord drops + prototype skill + backlog idea) from M3.2 S3 close commit + post-M3.2-close SiteForge-rename absorption at HEAD `410c6bc` are NOT triaged at M3.3 substrate; cross-vault persona triage remains operator-discretionary per Campaign SO #13.
- **GitHub `LatticeProtocol/aDNA.aDNA`** — push deferred to operator-discretionary post-M3.3 close; HEAD = `410c6bc` at S1 entry (1 commit ahead of M3.2 close `ac89251`); further extension across S1+S2+S3.
- **All future M3.4-M3.7 missions** — inherit T5+T6 substrate; M3.4 (T7+T8) consumes T6 integration-test framework as the agent-side baseline before T7 verification-handoff topology codifies + T8 wires Local REST API + MCP.
- **All future M4.x-M6.x missions** — M6.x propagation phase lands T5+T6 patches at upstream.

## Cross-Mission Dependencies

- **Backward dep on M3.2** (immediate predecessor; S3-with-carry sub-mode + skill_obsidian_canonicalize.md + 6-section design-spec structure 3rd+4th canonical instances). M3.3 inherits all three verbatim. M3.3's T6 skill DELEGATES to M3.2 skill `--verify` mode — explicit cross-skill primitive composition.
- **Backward dep on M3.1** (penultimate predecessor; design-at-P3-propagation-at-P6 pattern + 6-section structure ratified). Inherited via M3.2.
- **Backward dep on M2.4.5** (AGENTS.md hardening). M3.3's new `skill_obsidian_integration_test.md` drop is the 2nd behavioral test of whether the M2.4.5-hardened `how/skills/AGENTS.md` routing layer succeeds in discoverability for new-skill drops (first was M3.2's `skill_obsidian_canonicalize.md`). Captured at M3.3 S2+S3 session SITREPs as informal observation; formal Q2 SQL re-measurement happens at M3.x ≥ 20-session corpus per `m245_obj3` measurement contract.
- **Backward dep on LWX M-LWX-03** (S1 substrate source; O1-O7 verbatim content for T6 generalization). M3.3 reads M-LWX-03 mission spec + AAR at S1 to extract O1-O7.
- **Forward dep on M3.0.5** (decision-surface capability mission; forecast row added at M3.1 S1). M3.3 does NOT consume the decision-surface pattern (T5+T6 are too narrow to warrant a heavy decision surface). M3.0.5 stays `planned-stub`.
- **Forward dep on M3.4** (T7 verification handoff + T8 agent-driven inspection + ADR-014). M3.4 codifies the verification-handoff topology as `skill_verification_handoff.md` + wires T8 Local REST API + MCP; M3.3 T6 integration-test framework provides the agent-side baseline that M3.4 builds atop.
- **Forward dep on M6.x P6 propagation phase**. M3.3 design specs + their proposed patches join the v8 P6 queue (now growing 10-11 → 12-14); M6.x consumes M2.3.5 push-readiness checklist template + the cumulative queue at v8 P6 entry.

## Self-reference + dual-audience

This mission is the third mission in P3 — its session entries are the THIRD behavioral evidence of whether the M2.4.5 discoverability re-frame succeeds for the M3.x cohort. The mission file itself sits in `how/campaigns/campaign_adna_serious_tool_readiness/missions/` — a directory whose AGENTS.md was top-12 hardened at M2.4.5. The NEW skill drop at `aDNA.aDNA/how/skills/skill_obsidian_integration_test.md` is the 2nd M3.x skill drop to test the skills routing layer (after M3.2's `skill_obsidian_canonicalize.md`). **Standing Order #8 self-reference 15th tactical invocation candidate in v8**.

The mission also self-applies its own substrate: M3.3's T6 design spec DELEGATES binary-presence check to M3.2's `skill_obsidian_canonicalize.md --verify` mode — the spec ratifies its own predecessor's deliverable as a reusable operational primitive. T6 skill in turn is consumed by M3.4's T7 verification-handoff topology as the agent-side baseline. The chain of inheritance is explicitly intra-mission-class: T1→T2→T3→T4→T5→T6→T7→T8 forms the canonical Obsidian-stabilization cascade.

**Dual-audience test**:
- **Developer**: each design spec contains literal patch-style diff text + option-matrix tables + v8 P6 propagation contract — directly executable when v8 P6 cycle opens. New skill includes invocation contract + safety preconditions + per-vault profile slot + cross-skill delegation semantics.
- **Newcomer**: each design spec opens with a plain-language problem statement (T5 = "operators give up in the first 5 minutes when setup ordering is wrong"; T6 = "I can't tell whether my forked vault actually works"); option-matrix tables include explanatory rationale; new skill includes use cases + check-by-check descriptions ("when to use --profile" etc.).

## Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| T5 surfaces need for `.obsidian/` writes (e.g., URL-scheme pre-registration via runtime detection) | Low-Medium | Medium | Hard constraint forbids `.obsidian/` mutations. T5 spec scoped to **documentation** + skill-integration patches; zero `.obsidian/` writes. If `.obsidian/` write surfaces as load-bearing, escalate via SITREP + Campaign SO #14 exception clause. |
| T6 framework surfaces need for hooks (e.g., post-install hook firing tests automatically) | Medium | Medium | Hard constraint forbids hook mods. T6 skill defines tests as **manual operator invocation OR setup.sh sub-mode delegation** (mirrors `skill_obsidian_canonicalize.md --verify` pattern). Hook integration deferred to M3.4 (verification-handoff topology + ADR-014). |
| T6 overlaps `skill_obsidian_canonicalize.md --verify` (M3.2) creating skill collision | Medium | Low | T6 skill explicitly **DELEGATES** binary-presence check to `skill_obsidian_canonicalize.md --verify`; adds vault-agnostic O1-O7 checklist *on top* of the verify primitive. Design spec §3 option matrix evaluates delegate-vs-reimplement explicitly. |
| Vault-agnostic test framework conflicts with per-vault customization | Medium | Low | T6 skill API specifies `--vault <path>` + `--profile <profile>` slots; profiles live in `<vault>/.obsidian/integration-test-profile.json` (opt-in; defaults to `default` profile). Same pattern as `skill_obsidian_canonicalize.md` `--vault` + `.local-overrides.json`. |
| M-LWX-03 O1-O7 source-of-truth ambiguous (LWX mini-campaign closed 2026-05-13) | Low | Medium | Read LWX M-LWX-03 mission spec + AAR at S1 (or early S2) to extract O1-O7 verbatim. If unclear, escalate at S1 SITREP and propose Rosetta-default O1-O7 set based on `skill_obsidian_canonicalize.md --verify` + absorbed-campaign T6 narrative. |
| T5 spec needs operator-facing tone unfamiliar to design-spec class (runbook ≠ design spec) | Medium | Low | T5 design spec follows 6-section structure (finding/cause/options/recommendation/literal patch text/v8 P6 contract); the **literal patch text section §5** carries the runbook prose as patch text destined for `skill_onboarding.md` + `skill_project_fork.md`. Spec ratifies the patch; runbook prose lives inside the patch text. |
| S2 token budget overflow due to combined T5+T6+skill scope | Low-Medium | Medium | Per ADR-016 Clause A budgets are estimates; > 2× overflow triggers retrospective per Project SO #11; S2 may compress T6 spec to skill-only-scope (defer per-vault customization framework to M3.4) if needed. |
| Operator overrides D2 (skill at M3.3 S2) and requests stub-only with skill deferred to M3.4 | Low | Medium | Operator override is explicit at S1 spec ratification; if operator requests stub-only, M3.3 deliverable count drops to 5 (drop skill drop) and 3-session shape may compress to 2 sessions — escalate via SITREP. |
| Operator carry-forward triage of 9 SiteForge items mid-mission disrupts M3.3 flow | Low | Low | Triage stays Campaign SO #13 operator-discretionary; M3.3 substrate stays virgin. If operator requests triage absorption into M3.3, evaluate against S3-with-carry 5-criteria gate at S3 close. |

## Notes

- This is the **third mission in P3** after M3.2 close ratified the S3-with-carry sub-mode + skill_obsidian_canonicalize.md + survived 2nd test of design-at-P3-propagation-at-P6 pattern. M3.3 is the 2nd test of whether the substrate-inversion narrative (spec-only S2 at M3.1 → spec+skill S2 at M3.2 → spec+skill S2 at M3.3) stabilizes — if M3.3 S2 lands cleanly with spec+skill, the substrate inversion is confirmed.
- **Canonical 3-session implementation-class shape — 8th instance candidate** after M1.3 + M1.4 + M2.1 + M2.3 + M2.4 + M3.1 + M3.2 (7 prior instances ratified; M3.2 added S3-with-carry sub-mode). If S1+S2 compress to 2 sessions for whatever reason, the shape stays valid (canonical implementation-class is 2-3 sessions per `m21_obj4` rubric).
- **Op 3 archive-on-close pattern 12th canonical instance** applied at this S1 STATE refresh (M2.1 + M2.2 + M1.5 + M2.3 + M2.3.5 + M2.4 + M2.4.5 + M3.1 S1 + M3.1 close + M3.2 S1 + M3.2 close + M3.3 S1 = 12). 13th canonical instance applies at M3.3 close.
- **No new 5th/6th-instance additive-upstream candidate at M3.3** — T5 doc-integration patches are additive-non-breaking text-only patches (not instance-counting); T6 setup.sh `--test` mode hook is an additive candidate but deferred to v8 P6 entry decision. M3.2 NN data.json 6th-instance assessment stands.
- **`skill_s3_with_carry_eligibility.md` graduation candidate** advances to 2 of 3 use instances if M3.3 close triggers S3-with-carry (current count: 1 of 3 post-M3.2). Operator window for plausible carries: SiteForge cross-vault coord triage absorption, doc patch, MEMORY.md refresh, backlog idea filing — evaluate 5-criteria gate at close.
- **`skill_design_spec_authoring.md` graduation RATIFIED** at 3 of 3 use instances at M3.2 close (T1 + T2 + M3.2 T3 + T4 = ≥ 3); M3.3 T5 + T6 add 4th + 5th canonical instances (further ratification).
- **`skill_first_contact_polish.md` graduation candidate** advances to 2 of 3 use instances if operator does another first-contact-polish-class drop during M3.3 close window (current count: 2 of 3 post-M3.2-close addendum at `.adna/` upstream banner work; SiteForge or another ecosystem vault as 3rd instance triggers graduation).
- **Cross-references** for routing (≥ 2 wikilinks per Project SO #10): [[how/campaigns/campaign_adna_serious_tool_readiness/campaign_adna_serious_tool_readiness.md|campaign master]] + [[how/campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p3_m32_obsidian_stabilization_extension.md|M3.2 mission spec]] (immediate predecessor; S3-with-carry sub-mode source) + [[how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_m32_obsidian_stabilization_extension.md|M3.2 AAR]] (PRIMARY S3-with-carry + STRONG-EXTENDED first-contact-polish findings) + [[how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m32_obj3_t3_design_spec.md|M3.2 T3 design spec]] (6-section template) + [[how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m32_obj4_t4_design_spec.md|M3.2 T4 design spec]] (6-section combined-source precedent) + [[how/skills/skill_obsidian_canonicalize.md|`skill_obsidian_canonicalize.md`]] (cross-skill `--verify` delegation target) + [[how/campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p3_m31_obsidian_stabilization_core.md|M3.1 mission spec]] (penultimate predecessor) + [[how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_m31_obsidian_stabilization_core.md|M3.1 AAR]] (design-at-P3 pattern source) + [[how/campaigns/campaign_obsidian_deployment_stabilization/campaign_obsidian_deployment_stabilization.md|absorbed campaign master]] (Tracks 5+6 verbatim at lines 56-62) + [[how/campaigns/campaign_lattice_workspace_ux/missions/artifacts/aar_campaign_lattice_workspace_ux.md|LWX mini-campaign AAR]] (M-LWX-03 O1-O7 source content) + [[what/decisions/adr_016_per_mission_context_budget.md|ADR-016 per-mission context budget]] + [[STATE.md|STATE router]].

## Completion Summary

*Filled when status flips to `completed` at S3 close.*
