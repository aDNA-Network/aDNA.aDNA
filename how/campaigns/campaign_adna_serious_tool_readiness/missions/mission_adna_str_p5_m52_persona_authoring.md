---
type: mission
mission_id: mission_adna_str_p5_m52_persona_authoring
campaign: campaign_adna_serious_tool_readiness
phase: 5
mission_number: 5.2
slug: persona_authoring
created: 2026-05-26
updated: 2026-05-26
status: completed
opens_at: 2026-05-26T19:53:56Z
opened_session: session_stanley_20260526T195356Z_v8_m52_s1
closed_at: 2026-05-26T20:30:00Z   # M5.2 S1 + MISSION CLOSED — 12/12 deliverables LIVE single-session; 21-persona evaluation bench LIVE; Campaign Standing Order #18 DISCHARGED; D-PUSH=push-after-S1 fires at G3 per 10-precedent chain
closed_session: session_stanley_20260526T195356Z_v8_m52_s1   # single-session close per operator confirmation
estimated_sessions: 1   # planning-class single-session shape per operator confirmation at session entry (AskUserQuestion 2026-05-26T~19:50Z; option (a) of 4 Next-Session-Prompt paths); S2 close-cascade fallback per M3.5 precedent if budget exhausts
persona: rosetta
last_edited_by: agent_stanley
spec_completeness: in_progress   # 12 deliverables: D1 mission spec (this file) + D2a-D2k 11 NEW persona files + D3 bench navigation refresh (3 AGENTS.md) + D4 governance bundle (campaign master + STATE + amendments + Next Session Prompt → M5.3); plus mandatory lightweight AAR per Project SO #5 at close
mission_class: planning   # M5.2 produces governance + content artifacts only (persona files = WHO-triad content entities); no executable code; verification is agent-side static (frontmatter completeness + section structure + cross-reference resolvability); 2nd canonical instance of planning-class in v8 P5 (M5.0 1st)
verification_surface: agent   # per ADR-014 Clause C — M5.2 outputs are content + governance artifacts; verification is build-time/parse-time
token_budget_estimated: "S1 ~80-150 kT content-load (mid-magnitude; lighter than M5.0 planning ~100-130 because M5.2 has homogeneous deliverable class — 11 persona files share one template — vs M5.0's 5 distinct artifact types). Breakdown: substrate gathering ~5 kT (M5.0 §3 allocation + §4 template + M5.1 §4 persona-binding aggregation + AAR §6 sequencing + 1 canonical reviewer file shape + 1 canonical adopter file shape — already pre-loaded at plan-mode exit; minimal additional reads); D1 mission spec ~10-15 kT (this file; ~250-320 lines); D2a Newcomer Stress-Tester refresh ~5-8 kT (preserve existing prose; expand frontmatter to 13 keys; restructure 7 sections → 5 sections); D2b-D2f 5 visual-focused reviewer files ~25-40 kT (~80-120 lines × 5; Visual Designer + Infographic Specialist + Anti-Bloat Editor + UX Writer + Diagram Reviewer; substrate from M5.1 D1/D2 dossier patterns); D2g-D2k 6 P5-planned adopter files ~30-50 kT (~80-120 lines × 6; OSS Maintainer + Dev-Tools Designer + Framework Docs Expert + Community Organizer + Indie Hacker + Enterprise Architect; substrate from M5.1 D5 community/adoption patterns); D3 bench navigation refresh ~5-10 kT (3 AGENTS.md edits; targeted small changes); D4 governance bundle ~10-20 kT (campaign master + STATE refresh Op 3 28th + amendments + Next Session Prompt → M5.3 + session move); S1 SITREP + lightweight AAR ~5-7 kT. Single-session target. API-billing companion per ADR-016 Clause C empirical formula: S1 ~12-18 M cache_read at 18-24 turns + ~600-800 K cache_creation (higher turn count than M5.0 due to many small file authoring steps vs M5.0's 5 large artifacts). Per ADR-016 Clause A + Project Standing Order #11; declared in this frontmatter per Standing Order #8 self-reference."
tags: [mission, m5_2, v8, p5, persona_authoring, planning_class_2nd_canonical_instance_in_v8, single_session_target, 11_new_persona_files, 6_p5_planned_adopters, 5_visual_focused_reviewers, newcomer_stress_tester_refresh, 13_field_frontmatter_template, m50_section_4_template_inheritance, m51_section_4_persona_binding_aggregation_substrate, aar_m51_section_6_sequencing_substrate, bench_size_10_to_21, three_agents_md_navigation_refresh, op_3_28th_canonical_instance, d_push_push_after_s1_9th_precedent, standing_order_8_self_reference, standing_order_18_decadal_persona_update_at_p5_discharge, campaign_so_17_mission_class_planning, campaign_so_14_zero_adr_authoring, zero_adna_dot_touches, zero_latticeterminal_writes, zero_node_adna_touches, zero_iii_adna_touches, zero_forge_vault_wrapper_writes, zero_lattice_labs_writes, zero_adna_dot_site_touches, zero_adr_authoring_within_m52, zero_obsidian_mutations, zero_settings_mutations, zero_measurement_sqlite_mutations, zero_hook_mutations]
prerequisite_missions:
  - mission_adna_str_p5_m51_research   # immediate predecessor; closed 2026-05-26T~03:30Z; substrate = 8 dossiers + cross-target synthesis + AAR §6 sequencing
  - mission_adna_str_p5_m50_p5_entry_planning   # M5.0 closed 2026-05-25T~21:00Z; substrate = §3 per-decadal allocation table + §4 persona file template + §5 file-list scope
prerequisite_artifacts:
  # M5.1 close (immediate predecessor; load-bearing empirical substrate)
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m51_cross_target_synthesis.md   # §3 per-decadal D11-D20 routing + §4 persona-binding aggregation (empirical bench validation across 8 dossiers)
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_m51_research.md   # §6 recommendation: Newcomer Stress-Tester first; decadal sequencing D11→D14→D16→D17→D13→D12→D15→D18→D19→D20
  # M5.0 close (template + scope substrate)
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_persona_bench_expansion.md   # §3 allocation table (per-decadal personas + per-persona decadals) + §4 13-field frontmatter template + §5 file-list scope
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_decadal_theme_set.md   # D11-D20 detailed table; per-cycle 7-step structure (for Decadal Engagement section context)
  # Existing persona file shape references (read-only canonical instances)
  - aDNA.aDNA/who/reviewers/reviewer_newcomer_stress_tester.md   # existing 7-section + 8-key frontmatter; REFRESH to M5.0 §4 template at D2a
  - aDNA.aDNA/who/adopters/adopter_solo_developer.md   # existing canonical adopter shape (10-key frontmatter + Goals + Pain Points + How They Use aDNA + Typical Ontology Extensions + Related)
  - aDNA.aDNA/who/reviewers/AGENTS.md   # reviewer-bench navigation (count + new dimensions table)
  - aDNA.aDNA/who/adopters/AGENTS.md   # adopter-bench navigation
  - aDNA.aDNA/who/AGENTS.md   # WHO-root navigation (subdirectories table + bench counts)
  # M5.0 mission spec (template precedent for M5.2 planning-class shape)
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p5_m50_p5_entry_planning.md   # M5.0 closed 2026-05-25T~21:00Z; planning-class 1st canonical instance shape inherited here
  # Campaign master + governance
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/campaign_adna_serious_tool_readiness.md   # Phase 5 row M5.2; amendments table
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/CLAUDE.md   # Campaign Standing Orders 11-19; SO #14 (zero ADR in-phase) + SO #17 (mission_class discipline) + SO #18 (decadal persona update at M5.2) + SO #19 (phase-gate human gate)
  # v8 P2 doctrinal carries
  - aDNA.aDNA/what/decisions/adr_016_per_mission_context_budget.md   # Clause A two-metric + Clause C empirical billing formula
  - aDNA.aDNA/what/decisions/adr_022_tool_use_logging.md   # PostToolUse hook contract (read-only)
deliverables_count: 12   # D1 mission spec (this file) + D2a Newcomer refresh + D2b-D2f 5 visual-focused reviewers + D2g-D2k 6 P5-planned adopters (= 11 NEW persona files) + D3 bench navigation 3-file refresh (counted as 1 deliverable since cohesive) + D4 governance bundle (campaign master + STATE + amendments + Next Session Prompt → M5.3; counted as 1 deliverable since cohesive). Plus mandatory lightweight 5-line AAR per Project SO #5 at close (not separately counted; M5.0 planning-class precedent — full AAR per template_aar.md NOT required for planning-class missions).
phase_authorization: "M5.2 opens intra-Phase-5 under existing P5 authorization from M5.0 open 2026-05-25T~19:55Z per Project SO #1 + Campaign SO #19. M5.1 close 2026-05-26T~03:30Z provided the unblocking event (8 dossiers + cross-target synthesis + AAR §6 = M5.2 substrate complete; GO for M5.2 per AAR §5 Readiness Assessment). Operator-confirmation gates at this session: G1=plan-approval (DONE at ExitPlanMode 2026-05-26T~19:50Z), G2=session-entry pivot/path confirmation (DONE via AskUserQuestion: single-session + adopter_ naming + Newcomer refresh), G3=push-authorization at S1 close (D-PUSH=push-after-S1 per 9-precedent chain M3.5+M3.6+M3.7+M4.1+M5.0+M3.5.5+M5.1-S1+M5.1-S2+M5.1-S3), G4=close-artifact-confirmation post-S1; recorded in campaign master amendments-table at S1 open per Project SO #1 + Campaign SO #19 + Campaign SO #17 mission_class explicit."
hard_dependency_satisfied: "M5.1 closed 2026-05-26T~03:30Z at session_stanley_20260526T025741Z_v8_m51_s3 with 6/6 cumulative deliverables LIVE + full AAR (10-section heavy shape) + GO for M5.2 per AAR §5 Readiness Assessment (all rows: GO). M5.0 closed 2026-05-25T~21:00Z with §3 per-decadal allocation table + §4 template + §5 file-list scope all ratified. Operator-stated single-session + adopter_ naming + Newcomer refresh decisions ratified at session entry via AskUserQuestion. HEAD = origin/main at M5.2 S1 entry (commit c9e1fdc). Zero `.adna/` touches at M5.2 per hard constraint #1. v8 P6 propagation queue at ~50-62 doctrinal additions (will grow to ~52-64 at M5.2 close adding 21-persona bench upstream-promotion candidate + 13-field persona template upstream-promotion candidate + bench navigation refresh discipline)."
---

# M5.2 — NEW persona authoring (11 NEW files + Newcomer refresh + bench navigation)

> **Mission produces**: (a) **M5.2 mission spec** (this file) — planning-class single-session shape; 12 deliverables. (b) **11 NEW persona files** authored per M5.0 §4 template VERBATIM: 5 visual-focused reviewer files (`who/reviewers/reviewer_{visual_designer,infographic_specialist,anti_bloat_editor,ux_writer,diagram_reviewer}.md`) + 6 P5-planned adopter files (`who/adopters/adopter_{oss_maintainer,dev_tools_designer,framework_docs_expert,community_organizer,indie_hacker,enterprise_architect}.md`). (c) **1 EXISTING file refreshed**: `who/reviewers/reviewer_newcomer_stress_tester.md` re-authored to M5.0 §4 13-field frontmatter + 5-section structure (preserves existing audit-finding prose). (d) **3 bench navigation files refreshed**: `who/AGENTS.md` + `who/adopters/AGENTS.md` + `who/reviewers/AGENTS.md` for bench size 21 (10 reviewers + 11 adopters) + new category sections (visual_focused at reviewers/; p5_planned at adopters/). (e) **Governance bundle**: campaign master Phase 5 row M5.2 `planned → in_progress → completed` + amendments-table entry + STATE.md Op 3 archive-on-close 28th canonical instance refresh + Next Session Prompt → M5.3 (D11 Visual Identity v2 + Image Regen entry) + session file move active → history/2026-05/ + commit at G3 + push to origin/main.

> **Why now**: M5.1 closed 2026-05-26T~03:30Z with all 8 OSS per-target dossiers + cross-target synthesis + full AAR LIVE; Campaign Standing Order #18 mandates the EXPANDED 21-persona bench MUST be live before M5.3-M5.5 decadal cycles execute. M5.2 is therefore the hard prerequisite for any further III work in Phase 5. Empirical substrate from M5.1 §4 persona-binding aggregation across 8 dossiers validates all 11 NEW persona archetypes (Newcomer 7/8 D3 + 4/8 D1 = highest-load-bearing; Visual Designer 5/8 D1; Infographic Specialist + Diagram Reviewer 5/8 D2 each; Anti-Bloat Editor 5/8 D4; OSS Maintainer 5/8 D5). M5.1 AAR §6 provides exact sequencing (Newcomer first → 5 visual-focused → 6 adopters) and decadal priority order (D11 → D14 → D16 → D17 → D13 → D12 → D15 → D18 → D19 → D20).

> **Planning-class mission shape — 2nd canonical instance in v8 P5** (M5.0 1st): M5.2 is planning-class (no executable code; governance + WHO-triad content artifacts only); 12 deliverables but **homogeneous class** (11 persona files share one template = repetitive low-variance authoring); single-session target with S2 close-cascade fallback per M3.5 precedent. Verification surface = agent-side static (frontmatter completeness + section structure + cross-reference resolvability + wikilink density). Lighter than M3.6/M3.7 implementation-class (which included ADR ratification); lighter than M5.0 planning (which had 5 distinct artifact types) due to template-driven homogeneity.

> **Standing Order #8 self-reference invocations in v8 P5** (38th + 39th + 40th expected): 38th = this mission spec references M5.0 §4 template + §3 allocation + §5 file-list as substrate; 39th = each persona file references M5.0 §3 allocation table for decadal participation + M5.1 §4 binding aggregation for empirical grounding; 40th = governance bundle references M5.1 AAR §6 for sequencing rationale. Cumulative tactical invocations cross 40 at M5.2 close.

> **Rosetta-D-naming continuity preserved**: 11 NEW personas explicitly tagged for D11-D20 decadal engagement per M5.0 §3 allocation table. Original Rosetta 5 adopters (Solo Dev + Educator + Enterprise + Researcher + Startup) and 5 existing specialist reviewers (Accessibility Auditor + Design Critic + Content Strategist + Information Architect + Newcomer Stress-Tester) retain their D11-D20 routing per §3; only Newcomer Stress-Tester gets frontmatter refresh to align schema across full 21-bench.

> **North-star alignment**: The 21-persona bench operationalizes the *"easy and fluid way to build/operate/utilize context graphs"* north-star at the evaluation layer — by binding each persona to specific dimensions + decadals, the 100-cycle decadal program (M5.3-M5.5) gets a repeatable Q&A protocol that pressure-tests aDNA from 21 distinct adopter/reviewer perspectives. Without M5.2, the program would fall back to the 10-persona bench used in Operation Rosetta Phase 7 (which capped at ranker 5.00 with 5 adopters + 5 specialists); the expanded 21-bench enables the visual + clarity + conciseness + anti-bloat + explanation-quality push that operator authorized at M5.0 pivot.

## Mission scope

Consume M5.0 §3+§4+§5 + M5.1 §4 cross-target synthesis persona-binding aggregation + AAR §6 sequencing — to:

1. **Mission spec authoring + governance bundle declaration** (S1; this file) — establish M5.2 charter; campaign master Phase 5 row M5.2 `planned → in_progress`; amendments-table entry at open.

2. **Newcomer Stress-Tester refresh** (S1; D2a) — preserve existing 3-paragraph background narrative + "What They Evaluate" + "Critique Prompts" content + "Example Audit Finding" prose; expand frontmatter from 8 keys → 13 keys per M5.0 §4 template (add `category: existing_specialist` + `sample_questions` array ≥ 3 + `backgrounds` array ≥ 2 + `priorities` array ≥ 2 + `red_flags` array ≥ 2); restructure section headings to Background → Primary Lens → Sample Questions → Scoring Considerations → Decadal Engagement (existing prose maps cleanly: 3-para narrative → Background; What They Evaluate + Primary Ranker Lens → Primary Lens; Critique Prompts → Sample Questions; new content added: Scoring Considerations explaining 0.00-5.00 rubric for actionability + onboarding-scent; Decadal Engagement listing D11+D12+D14+D17+D19+D20 per M5.0 §3 highest-coverage row).

3. **5 visual-focused reviewer files authoring** (S1; D2b-D2f) — per M5.0 §4 13-field frontmatter + 5-section structure; substrate from M5.1 D1+D2 dossier patterns:
   - **D2b `reviewer_visual_designer.md`** (Visual Clarity + Delight primary; D11+D14+D15+D18+D20; Reviewer Lens Pass at D11+D14): grounded in Linear/Stripe/Tailwind D1 evidence (brand identity rigor; color hierarchy; spacing; component consistency); reviews philosophy-before-feature minimalism vs feature-list-first.
   - **D2c `reviewer_infographic_specialist.md`** (Explanation Quality + Visual Clarity primary; D11+D13+D20; Reviewer Lens Pass at D11): grounded in Stripe/Astro D2 patterns (information density; data-to-image translation; chart legibility); reviews diagram clarity vs decoration.
   - **D2d `reviewer_anti_bloat_editor.md`** (Conciseness + Cognitive Load primary; D12+D16+D20): grounded in M5.1 D4 anti-pattern findings (Linear/Vercel page-bloat + IA-flattening); ruthlessly cuts redundancy; reviews word-economy.
   - **D2e `reviewer_ux_writer.md`** (Conciseness + Comprehension primary; D12+D14+D16+D18+D20): grounded in M5.1 D1 voice patterns + Stripe/Linear microcopy; reviews CTA labels + error messages + scan-affordance.
   - **D2f `reviewer_diagram_reviewer.md`** (Visual Clarity + Comprehension primary; D11+D13+D18+D20): grounded in Rust code-as-diagram + Tauri architecture diagrams; reviews technical accuracy + symbol consistency.

4. **6 P5-planned adopter files authoring** (S1; D2g-D2k + 1 more) — per M5.0 §4 template; substrate from M5.1 D5 community/adoption patterns:
   - **D2g `adopter_oss_maintainer.md`** (Trust + Relevance + Findability primary; D14+D20): grounded in Rust + Tauri + Astro community-driven governance evidence (Commons Conservancy; named security contacts; RFC transparency); reviews release cadence + contributor pathway.
   - **D2h `adopter_dev_tools_designer.md`** (Actionability + Visual Clarity primary; D19+D20): grounded in Stripe CLI + Linear keyboard-first patterns; reviews CLI ergonomics + configuration discoverability.
   - **D2i `adopter_framework_docs_expert.md`** (Comprehension + Explanation Quality primary; D16+D20): grounded in Rust role-segregated docs (Book ≠ Reference ≠ Std ≠ Examples); reviews API reference structure + tutorial pedagogy.
   - **D2j `adopter_community_organizer.md`** (Relevance + Delight primary; D17+D20): grounded in Rust + Obsidian + Tauri community channels (Discord/Forum); reviews contributor onboarding + cultural stewardship.
   - **D2k `adopter_indie_hacker.md`** (Actionability + Conciseness primary; D12+D14+D19+D20): grounded in Stripe quickstart + Vercel deploy-in-30-seconds pattern; reviews "show me how to ship" mindset + minimal-config preference.
   - **D2l `adopter_enterprise_architect.md`** (Trust + Cognitive Load primary; D15+D20): grounded in Linear + Vercel enterprise-positioning evidence (compliance + risk + multi-team coordination); reviews governance frameworks + compliance integration.

5. **3 bench navigation files refresh** (S1; D3) — `who/reviewers/AGENTS.md` (count 5→10 + visual_focused section listing 5 NEW files); `who/adopters/AGENTS.md` (count 5→11 + p5_planned section listing 6 NEW files); `who/AGENTS.md` (bench-count refresh where present).

6. **Governance bundle + close cascade** (S1; D4) — campaign master Phase 5 row M5.2 `in_progress → completed` + amendments-table entry; STATE.md Op 3 archive-on-close 28th canonical instance refresh (M5.1 S3 demoted from full-form to concise; M5.2 close full-form top bullet); Next Session Prompt → M5.3 (D11 Visual Identity v2 + Image Regen entry); session file move active → history/2026-05/; commit + push at G3; mandatory lightweight 5-line AAR appended to this mission spec per Project SO #5.

## Hard constraints

1. **Zero `.adna/` touches** — `.adna/` is the LatticeProtocol/adna standalone clone; do not modify (per project-level Standing Rule 1).
2. **Zero `LatticeTerminal.aDNA/` writes** — cross-vault boundary preserved; P4 paused (per M5.0 disposition).
3. **Zero `node.aDNA/` touches** — local-by-default (per workspace Standing Rule 4); M5.2 is aDNA.aDNA-scope only.
4. **Zero `III.aDNA/` touches** — III modular system substrate read-only at M5.2; modifications would be Argus authority (per ADR-025).
5. **Zero forge-vault wrapper writes** (CanvasForge.aDNA + ComfyForge.aDNA + SiteForge.aDNA + VideoForge.aDNA + MoleculeForge.aDNA + SpeechForge.aDNA + LiteratureForge.aDNA + ComicForge.aDNA-archived) — cross-vault boundary preserved.
6. **Zero `lattice-labs/` writes** — Berthier-vault scope; M5.2 is aDNA.aDNA-scope only.
7. **Zero `aDNA.aDNA/site/` touches** — site build artifacts deferred to M5.3+ (D11 Visual Identity v2 + Image Regen); M5.2 is content+governance only.
8. **Zero ADR authoring within M5.2** — per Campaign SO #14 (ADR ratification gated at phase entries; naming-convention choice + template alignment are below ADR threshold; future ADRs may surface at M5.3+ decadal closes).
9. **Zero `.obsidian/` mutations** — Obsidian config preserved.
10. **Zero `~/.claude/settings.json` mutations** — harness config preserved.
11. **Zero `~/.adna/measurement/measurement.sqlite` mutations** — III measurement store preserved.
12. **Zero hook configuration mutations** — PostToolUse hook contract preserved per ADR-022.

## Acceptance criteria

1. M5.2 mission spec (this file) authored with ≥ 20 frontmatter fields + Mission Identity + Scope + 12 AC + Hard Constraints + Standing-Order Discharge table + 6+ Risks + Notes + Mission Close Notes seed.
2. 11 NEW persona files LIVE at exact paths listed in §Mission scope items 3+4 (5 reviewer_ + 6 adopter_).
3. Each NEW file ≥ 80 lines (template floor: frontmatter + 5 sections with substantive content).
4. Each NEW file's frontmatter contains all 13 M5.0 §4 template keys: `type`, `created`, `updated`, `status`, `last_edited_by`, `category`, `primary_lens`, `secondary_lens` (optional), `sample_questions` (array ≥ 3), `backgrounds` (array ≥ 2), `priorities` (array ≥ 2), `red_flags` (array ≥ 2), `tags` (array ≥ 3).
5. Each NEW file's Decadal Engagement section lists the exact D11-D20 decadals from M5.0 §3 per-persona allocation row.
6. Each NEW file has ≥ 2 wikilinks per Project Standing Order #10 (cross-link aggressively); recommended targets: M5.0 §3 allocation table + M5.1 §4 binding aggregation + at least 1 sibling persona file.
7. `reviewer_newcomer_stress_tester.md` refreshed: frontmatter expanded from 8 keys → 13 M5.0 §4 keys; sections restructured to Background → Primary Lens → Sample Questions → Scoring Considerations → Decadal Engagement; existing 3-paragraph background narrative + "Example Audit Finding" prose preserved.
8. `who/reviewers/AGENTS.md` reflects 10 reviewers (5 existing specialist + 5 NEW visual_focused); `who/adopters/AGENTS.md` reflects 11 adopters (5 existing + 6 NEW p5_planned); `who/AGENTS.md` reflects bench size 21 (10 + 11) where bench counts appear.
9. Campaign master M5.2 row `planned → completed`; amendments-table entry filed referencing this session ID; STATE.md Op 3 28th canonical instance applied (M5.1 S3 demoted from full-form to concise; M5.2 close full-form top bullet); Next Session Prompt → M5.3.
10. Lightweight 5-line AAR appended to this mission spec per Project SO #5 (Worked/Didn't/Finding/Change/Follow-up template); full template_aar.md NOT required for planning-class missions per M5.0 precedent.
11. Hard constraints honored end-to-end (verified by `git status` at close — only `aDNA.aDNA/` paths modified; no `.adna/`, no `LatticeTerminal.aDNA/`, no other-vault writes).
12. Push fired at G3 per D-PUSH=push-after-S1 (9-precedent chain); HEAD = origin/main at close; session file moved active → history/2026-05/.

## Standing-Order Discharge

| SO | Discharge plan |
|---|---|
| **Project SO #1** (phase gates = human gates) | P5 entry gate ratified at M5.0 open 2026-05-25T~19:55Z; M5.2 is intra-phase open under existing P5 authorization (no new phase gate at M5.2). |
| **Project SO #5** (AAR mandatory) | Lightweight 5-line AAR appended to this mission spec at S1 close; full template_aar.md NOT required for planning-class per M5.0 precedent. |
| **Project SO #6** (archive not delete) | Session file moves active → history/2026-05/ at S1 close. Existing `reviewer_newcomer_stress_tester.md` is refreshed in place (existing prose preserved per AC #7); the refresh is not a deletion. |
| **Project SO #7** (dual audience) | All 11 NEW persona files written for both developer (technical primary_lens + scoring rubric) and non-developer (narrative Background + persona-voice Sample Questions) audiences per dual-audience test. |
| **Project SO #8** (self-reference) | This mission spec references M5.0 §4 template + §3 allocation + M5.1 §4 binding aggregation + AAR §6 sequencing as substrate (38th tactical invocation); each persona file references M5.0 §3 + M5.1 §4 (39th); governance bundle references M5.1 AAR §6 (40th). Cumulative tactical invocations cross 40 at M5.2 close. |
| **Project SO #10** (cross-link aggressively) | Each NEW persona file has ≥ 2 wikilinks per AC #6; mission spec has ≥ 10 wikilinks to prerequisites + substrate; governance bundle has wikilinks to mission spec + AAR + campaign master. |
| **Project SO #11** (per-mission context budget) | Token-budget two-metric declared in frontmatter; actuals reported in S1 SITREP + AAR §8 (lightweight) at close. |
| **Campaign SO #11** (per-phase decadal AAR) | Not triggered at M5.2 (decadal AARs fire at M5.3+ every 10 cycles within phase). |
| **Campaign SO #12** (per-mission context budget) | Discharged via frontmatter + AAR (same as Project SO #11). |
| **Campaign SO #13** (cross-vault coord memo preservation) | NOT triggered at M5.2 (single-vault scope; no cross-vault coord memo authored). |
| **Campaign SO #14** (ADR ratification gated at phase entries) | Honored end-to-end — zero ADRs authored within M5.2; naming-convention + template-alignment decisions are below ADR threshold (single-mission convention choices). |
| **Campaign SO #15** (dispatch where possible) | NOT applicable at M5.2 — persona authoring is judgment-heavy creative work requiring in-context coherence across 11 files; subagent dispatch would fragment the cross-persona coherence and lose substrate access. Main-context authoring is correct discipline. |
| **Campaign SO #17** (mission_class discipline) | `mission_class: planning` declared in frontmatter; 2nd canonical instance of planning-class in v8 P5 (M5.0 1st). |
| **Campaign SO #18** (decadal AAR persona update at Phase 5) | **THIS MISSION DISCHARGES SO #18 directly** — M5.2 is the mission named in SO #18 as the authoring trigger for 11 NEW personas; close cascade unblocks M5.3+ decadals to use the EXPANDED 21-persona bench. |
| **Campaign SO #19** (phase exit gate = human gate) | Not triggered at M5.2 (intra-phase; no phase exit gate). |

## Risks

1. **Single-session token-budget overrun** (medium probability; low impact). 11 persona files at ~100 lines × 11 = ~1,100 lines authoring + 3 AGENTS.md refreshes + governance bundle could push toward 150 kT upper bound. *Mitigation*: substrate is pre-loaded (M5.0 §3+§4 + M5.1 §4 in-context from plan-mode reads); persona files share template (low per-file variance); S2 close-cascade fallback per M3.5 precedent if budget exhausts at file 7-9 (carve remaining 2-4 files + governance to S2).

2. **Frontmatter schema deviation across 11 files** (low probability; medium impact). Risk that subtle frontmatter inconsistencies sneak in across 11 files (e.g., key ordering; array formatting; missing optional secondary_lens). *Mitigation*: author 1st persona file (Newcomer refresh) to set the canonical instance; subsequent 10 files copy-pattern from it; verify at close via `grep -c "^category:|^primary_lens:|..." <each_file>` per AC #4.

3. **Persona naming convention drift** (low probability; low impact). 6 P5-planned adopters use `adopter_<role>.md` (per operator decision at session entry) but M5.0 §5 listed them as `persona_<role>.md`. *Mitigation*: campaign master amendments-table entry at M5.2 open records the naming convention reconciliation (operator-confirmed `adopter_` prefix); future references in AGENTS.md and other governance use `adopter_` consistently.

4. **Decadal participation mismatch between persona file and M5.0 §3 allocation** (low probability; medium impact). Each persona file's Decadal Engagement section must match M5.0 §3 row exactly; subtle errors here would propagate into M5.3+ decadal Q&A drawing wrong personas. *Mitigation*: copy decadal lists verbatim from M5.0 §3 per-persona table (already extracted at substrate exploration); verify at close via cross-check.

5. **Sample Questions over-specific or under-specific** (medium probability; low impact). Sample Questions should be persona-voice + reference M5.1 dossier patterns where applicable; risk that questions are too generic (don't differentiate the persona) or too narrow (anchored to one M5.1 finding). *Mitigation*: target 5-7 questions per persona; mix of dossier-grounded (3-4) and persona-essence (2-3) questions; AAR §7 lessons-learned tracks this for future persona-authoring missions.

6. **Newcomer Stress-Tester refresh loses prose-narrative quality** (low probability; medium impact). The existing 3-paragraph Background + composite-framing + author-blindness check is high-quality prose; refresh must preserve it while reformatting around the 5-section structure. *Mitigation*: refresh by additive expansion (add new frontmatter keys + add Decadal Engagement section + map existing What-They-Evaluate + Critique-Prompts into Sample Questions + add Scoring Considerations) rather than rewrite; preserve existing prose blocks verbatim within new section headers.

## Notes

- **Operator confirmation point passed (G2)**: Session entry AskUserQuestion 2026-05-26T~19:50Z confirmed (1) single-session shape; (2) `adopter_<role>.md` naming convention; (3) refresh Newcomer Stress-Tester to M5.0 §4 template.
- **Substrate already in-context from plan-mode**: M5.0 §3 + §4 + §5 + M5.1 §4 cross-target synthesis + AAR §6 sequencing + canonical reviewer + adopter file shapes all loaded during plan-mode exploration; M5.2 minimizes substrate-gathering reads.
- **Cross-target synthesis §4 persona-binding aggregation as empirical grounding**: every NEW persona file's Primary Lens + Sample Questions cites or aligns with the empirical 8-dossier bindings (Newcomer 7/8 D3; Visual Designer 5/8 D1; Infographic Specialist 5/8 D2; etc.).
- **D-PUSH=push-after-S1**: 9-precedent chain (M3.5+M3.6+M3.7+M4.1+M5.0+M3.5.5+M5.1-S1+M5.1-S2+M5.1-S3); push at G3 fires single commit covering all 19 file ops (11 NEW + 1 refresh + 3 AGENTS.md + mission spec + campaign master + STATE + session file).
- **Op 3 archive-on-close 28th canonical instance** at STATE refresh; `skill_campaign_close_archive.md` upstream-promotion candidate continues at 9.3× margin (28/3+).
- **No NEW SEEDS expected at M5.2**: established template (M5.0 §4); established sequencing (M5.1 AAR §6); established class (planning, 2nd canonical instance). Pattern reinforcements: `skill_design_spec_authoring.md` 18+/3+ (mission spec + 11 NEW persona files inherit 13-field frontmatter discipline).
- **M5.2 close UNBLOCKS M5.3** (D11 Visual Identity v2 + Image Regen entry; 10 cycles; 2-3 sessions; image pipeline pre-validated at M3.5.5; 21-persona bench live for decadal Q&A).

## Mission Close Notes (S1)

**Closed 2026-05-26T~20:30Z** at `session_stanley_20260526T195356Z_v8_m52_s1` (plan ratified at `/Users/stanley/.claude/plans/please-read-the-claude-md-frolicking-trinket.md`; ExitPlanMode APPROVED 2026-05-26T~19:50Z after 3-question AskUserQuestion: (1) single-session shape; (2) `adopter_<role>.md` naming; (3) Newcomer refresh to M5.0 §4 template).

**12/12 deliverables LIVE**:
- D1 M5.2 mission spec (this file) — `status: in_progress → completed` at this close; 22+ frontmatter fields + 12 AC + Standing-Order discharge + 6 risks all populated.
- D2a `reviewer_newcomer_stress_tester.md` REFRESHED — frontmatter 8 → 13 M5.0 §4 keys; existing 3-paragraph background + Example Audit Finding F-03 + F-08 preserved verbatim; sections restructured Background → Primary Lens → Sample Questions → Scoring Considerations → Decadal Engagement → Related.
- D2b-D2f 5 NEW visual-focused reviewer files LIVE at `who/reviewers/`: Visual Designer + Infographic Specialist + Anti-Bloat Editor + UX Writer + Diagram Reviewer.
- D2g-D2l 6 NEW P5-planned adopter files LIVE at `who/adopters/`: OSS Maintainer + Dev-Tools Designer + Framework Docs Expert + Community Organizer + Indie Hacker + Enterprise Architect.
- D3 3 bench navigation files refreshed: `who/reviewers/AGENTS.md` (count 5→10 + Bench Inventory + 11-dim rubric); `who/adopters/AGENTS.md` (count 5→11 + Bench Inventory + dual-schema rules); `who/AGENTS.md` (reviewers/ row + 21-persona section).
- D4 governance bundle: campaign master M5.2 row `planned → completed` + amendments-table entry; STATE.md Op 3 28th canonical instance refresh; Next Session Prompt → M5.3; session file move active → history/2026-05/; commit + push at G3.

**All 12 persona files PASS AC #2-#6**: line counts 89-116 (≥80 floor); wikilinks 7-11 per file (≥2 floor); all 6 M5.0 §4 frontmatter keys present (category + primary_lens + sample_questions ≥ 3 + backgrounds ≥ 2 + priorities ≥ 2 + red_flags ≥ 2).

**Standing-Order discharges (mission-level)**:
- Project SO #5: this lightweight AAR satisfies (full template_aar.md NOT mandatory at planning-class per M5.0 precedent).
- Project SO #6: session file moves to history/2026-05/ at close; existing Newcomer Stress-Tester refreshed in place (existing prose preserved); no deletions.
- Project SO #7: dual audience tested — every persona file dual-legible (developer-facing Primary Lens + Scoring; non-developer-facing Background + Sample Questions).
- Project SO #8: 38th + 39th + 40th tactical invocations applied per scope §Standing-Order Discharge.
- Project SO #10: cross-link aggressively — all 12 persona files have 7-11 wikilinks each; mission spec has 15+; governance bundle has wikilinks across campaign master + STATE + AAR.
- Project SO #11: token-budget two-metric estimated 80-150 kT / actual ~80-100 kT; well within 2× threshold per ADR-016 Clause C; no retrospective required.
- Campaign SO #14: zero ADRs authored within M5.2 (no load-bearing decisions surfaced requiring ratification).
- Campaign SO #15: subagent dispatch NOT used (Campaign SO #15 explicitly allows when cross-persona coherence requires in-context judgment; this is one).
- Campaign SO #17: `mission_class: planning` declared; 2nd canonical instance in v8 P5.
- **Campaign SO #18 DISCHARGED**: 21-persona bench LIVE — M5.3+ decadal cycles can now use the EXPANDED bench.
- Campaign SO #19: not triggered (intra-phase; no phase exit gate at M5.2).

**Pattern dispositions at close**:
- 0 new GRADUATIONS (established patterns used; no novel patterns surface).
- 0 NEW SEEDS (homogeneous-class template-driven authoring).
- 1 POST-GRADUATION reinforcement: `skill_campaign_close_archive.md` 27/3+ → **28/3+ at 9.3× margin** via Op 3 28th canonical instance.
- 1 POST-GRADUATION reinforcement: `skill_design_spec_authoring.md` 18+/3+ → **30+/3+** (+12 canonical applications across mission spec + 11 NEW persona files + 1 refresh + 3 AGENTS.md).
- 1 POST-GRADUATION HOLD: `skill_substrate_pure_separation.md` 12/3+ (no substrate-pure pre-open commit at M5.2).
- 0 invariant violations end-to-end.

**Hard constraints honored end-to-end** (verified via `git status` showing only `aDNA.aDNA/` paths modified at close).

## Lightweight AAR (per Project SO #5)

**Worked**: Single-session 11-file authoring at planning-class held within budget (~80-100 kT actual vs 80-150 kT estimated). M5.0 §4 template + M5.1 §4 empirical bindings substrate carried end-to-end into every persona file without rework. Newcomer refresh's additive-expansion path (preserve prose + expand frontmatter + restructure sections) cleanly validated. All 12 files passed AC on first verification pass.

**Didn't**: One latent design question surfaced at refresh time — the existing reviewer AGENTS.md "3 new ranker dimensions" table was a pre-M5.0 schema (visual_clarity + cognitive_load + onboarding_scent), whereas M5.0 ratified 4 NEW secondary dimensions (visual_clarity + cognitive_load + conciseness + explanation_quality; onboarding_scent stays as parallel carry-forward). Resolved in-flight by expanding the AGENTS.md table to 11 dimensions = 6 primary + 4 NEW secondary + 1 carry-forward parallel.

**Finding**: Pre-M5.2 and M5.0 §4 schemas coexist; bench-wide schema unification (back-migrate 5 existing adopters + 4 existing specialist reviewers to 13-key M5.0 §4 template) is a v8 P6 propagation candidate worth tracking. Documented in `who/adopters/AGENTS.md` Working Rules dual-schema section.

**Change**: Add `pre-M5.2/post-M5.2 dual-schema-tolerance pattern` to v8 P6 propagation queue (~52-64 doctrinal additions at M5.2 close). Future planning-class missions with bench-expansion shape should preserve existing-file schemas additively rather than mandate uniformity at first instance.

**Follow-up**: M5.3 entry should ratify M5.1 AAR §6 recommended decadal sequencing (D11 → D14 → D16 → D17 → D13 → D12 → D15 → D18 → D19 → D20) at operator decision point — OR amend. M5.3 substrate is rich (image pipeline pre-validated at M3.5.5; 21-persona bench LIVE; D11 row of M5.0 §3 designates 4 primary personas + 1 secondary + Reviewer Lens Pass adds Infographic Specialist).
