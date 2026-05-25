---
type: mission
mission_id: mission_adna_str_p5_m50_p5_entry_planning
campaign: campaign_adna_serious_tool_readiness
phase: 5
mission_number: 5.0
slug: p5_entry_planning
created: 2026-05-25
updated: 2026-05-25
status: completed
opens_at: 2026-05-25T19:55:00Z
opened_session: session_stanley_20260525T195508Z_v8_m50_s1
closed_at: 2026-05-25T21:00:00Z   # M5.0 S1 close cascade 2026-05-25; 6/6 deliverables LIVE single-session
closed_session: session_stanley_20260525T195508Z_v8_m50_s1   # single-session close
estimated_sessions: 1   # planning-class single-session shape; S2 close-cascade fallback per M3.5 precedent if budget exhausts
persona: rosetta
last_edited_by: agent_stanley
spec_completeness: in_progress   # 6 deliverables: mission spec (D1) + amendment coord memo (D2) + decadal theme set (D3) + persona bench expansion (D4) + visual inspection methodology (D5) + governance bundle (D6)
mission_class: planning   # P5 entry planning; no executable code; governance + design artifacts only; verification is agent-side static (frontmatter + section count + cross-references resolvable)
verification_surface: agent   # per ADR-014 Clause C — M5.0 outputs are governance + design artifacts; verification is build-time/parse-time
token_budget_estimated: "S1 ~100-130 kT content-load (mid-magnitude; higher than M4.1 reconnaissance-class ~80-110 due to 10-decadal theme set + 21-persona roster + methodology spec). Breakdown: substrate gathering ~25 kT (3 parallel Explore subagents at session entry per ADR-016 Clause B + Heavy-File Read convention — 4th canonical instance of substrate-gathering-subagent-dispatch pattern post-graduation at M4.1 close; 3-agent recon ~3700 words covering ScienceStanley Gemini setup + v8 P5 mission specs + III modular system + Rosetta decadal precedent + 5-persona ranker bench + aDNA.aDNA site current state + top-10 bloat pages); D1 mission spec ~15-18 kT (this file; ~330-380 lines including frontmatter + 6 objectives + acceptance + hard constraints + standing-order discharges + cross-vault impact + risks + notes + Mission Close Notes); D2 amendment coord memo ~12-15 kT (P4 pause + P5 pivot record; 8 sections); D3 10-decadal theme set ~15-18 kT (D11-D20 detailed table + per-cycle structure + AAR cadence); D4 21-persona bench expansion ~12-15 kT (5 NEW visual persona drafts + per-decadal allocation + scoring rubric); D5 visual inspection methodology ~12-15 kT (5-question Q&A protocol + Gemini integration + III system integration); D6 governance bundle ~12-15 kT (3 in-place edits + 1 contract annotation + 1 Spock memo annotation + amendments-table entry); S1 SITREP + lightweight AAR ~5-7 kT. Single-session target. API-billing companion per ADR-016 Clause C empirical formula: S1 ~6-8 M cache_read at 10-12 turns + ~360-380 K cache_creation. Per ADR-016 Clause A + Project Standing Order #11; declared in this frontmatter per Standing Order #8 self-reference."
tags: [mission, m5_0, v8, p5, p5_entry_planning, operator_pivot_2026_05_25, p4_pause_p5_open, gemini_api_unblocked_at_sciencestanley, visual_inspection_focus, clarity_conciseness_anti_bloat_explanation_quality, planning_class, single_session_target, op_3_23rd_canonical_instance, 10_decadal_theme_set_d11_d20, 21_persona_bench_expansion, visual_inspection_methodology_per_cycle_q_and_a_protocol, m41_close_self_reference, m4_x_paused_but_resumable, phase_5_restructured_with_amendment, d_grad_skill_authoring_backlog_grows, project_so_1_phase_gates_are_human_gates_already_discharged, campaign_so_19_phase_exit_gate_human_gate_already_discharged_p4_pause, campaign_so_13_coord_memo_preservation_d2_preserved_pause_annotated, campaign_so_17_mission_class_planning, campaign_so_18_decadal_aar_persona_update_at_m52_close, standing_order_8_27th_tactical_invocation, standing_order_8_28th_tactical_invocation, substrate_pure_separation_11th_canonical_instance_pre_s1_absorption, substrate_gathering_subagent_dispatch_post_graduation_4th_canonical_instance, rosetta_d_naming_continuity_d11_d20_extends_d1_d10, zero_adna_dot_touches, zero_latticeterminal_writes, zero_node_adna_touches, zero_iii_adna_touches, zero_forge_vault_wrapper_touches, zero_lattice_labs_writes, zero_cycle_execution_at_m50, zero_adr_authoring_at_m50, zero_obsidian_mutations, zero_adna_dot_site_touches]
prerequisite_missions:
  - mission_adna_str_p4_m41_latticeterminal_sync   # immediate predecessor; closed 2026-05-25T18:00Z; M4.1 close + operator pivot authorize P5 open
  - mission_adna_str_p0_planning   # v8 P0 first-execution-session closed 2026-05-17; campaign master + Phase 5 mission tree + decision points D11-D13 surfaced (now D14 added at M5.0 close)
prerequisite_artifacts:
  # M4.1 close (immediate predecessor; authorizes pivot)
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p4_m41_latticeterminal_sync.md   # M4.1 mission spec status: completed 2026-05-25T18:00Z
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m41_phase_4_contract_draft.md   # 8 clauses A-H; clause A LOCKED; clauses B-H drafted; annotation update at M5.0 D6 governance bundle
  - aDNA.aDNA/who/coordination/coord_2026_05_25_v8_p4_open_latticeterminal_handshake.md   # D2 Rosetta → Spock; pause_annotation field added at M5.0 D6
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m41_latticeterminal_state_synthesis.md   # D5 paired-read synthesis; major finding (LatticeTerminal already has skill_install) referenced
  # ScienceStanley Gemini setup (substrate; read-only)
  - "/Users/stanley/lattice/ScienceStanley.aDNA/CLAUDE.md"   # SS persona; image-gen capability
  - "/Users/stanley/lattice/ScienceStanley.aDNA/how/campaigns/campaign_ss_site_visual_polish/"   # 6+ Python consumer scripts for Gemini Imagen 4
  # CanvasForge substrate (substrate; read-only)
  - "/Users/stanley/lattice/CanvasForge.aDNA/canvas_core/image_generation.py"   # substrate-neutral ImageRequest Protocol; Imagen 4 Ultra adapter
  - "/Users/stanley/lattice/CanvasForge.aDNA/CLAUDE.md"   # Hermes persona; ADR-003 dataset schema
  # III modular system substrate (DESIGNED at M3.7; ratified ADR-025+026)
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m37_modular_iii_design_spec.md   # 6 primitives; especially P2 vault_card per-dimension scoring + P3 III-decadal cycle orchestration + P6 III result persistence
  - aDNA.aDNA/what/decisions/adr_025_iii_decadal_coordination.md   # ACCEPTED 2026-05-25; distributed-but-coordinated; ack-debt-protocol coord memo cycle
  - aDNA.aDNA/what/decisions/adr_026_ledger_observation_shared_primitive.md   # ACCEPTED 2026-05-25; canonical poller + consumer fallback + federation transport
  # Rosetta decadal precedent (read-only; for D11-D20 numbering continuity + AAR shape inheritance)
  - aDNA.aDNA/how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d8.md   # most recent decadal AAR with 9 priority items
  - aDNA.aDNA/how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d10.md   # Teach-by-Example; ranker held 5.00
  # 5 existing specialist reviewers (will extend at M5.2)
  - aDNA.aDNA/who/reviewers/reviewer_accessibility_auditor.md
  - aDNA.aDNA/who/reviewers/reviewer_design_critic.md
  - aDNA.aDNA/who/reviewers/reviewer_content_strategist.md
  - aDNA.aDNA/who/reviewers/reviewer_information_architect.md
  - aDNA.aDNA/who/reviewers/reviewer_newcomer_stress_tester.md
  # M3.5.5 D7d image regen warm-up sub-task (will execute next session)
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m35_d7d_image_regen_followup.md   # 31 vault_cards; Path B (Gemini paid plan) unblocked by operator API key
  # Site state (read-only; D5 substrate)
  - aDNA.aDNA/site/   # 39 pages; top-4 average 443 lines (bloat candidates)
  - aDNA.aDNA/README.md   # 872 lines; D14 target for streamline
  # v8 P2 doctrinal carries (same as M3.x + M4.1)
  - aDNA.aDNA/what/decisions/adr_016_per_mission_context_budget.md   # Clause A two-metric + Clause B Heavy-File + Clause C empirical
  - aDNA.aDNA/what/decisions/adr_022_tool_use_logging.md   # PostToolUse hook contract
deliverables_count: 6   # D1 mission spec (S1) + D2 campaign amendment coord memo (S1) + D3 10-decadal theme set (S1) + D4 21-persona bench expansion design (S1) + D5 visual inspection methodology (S1) + D6 governance bundle (S1; campaign master M4.2-M4.4 paused + M5.0 row insert + D14 ratified + Phase 5 exit gate amended + amendments entry + STATE Op 3 23rd canonical instance + Phase-4 contract draft annotation + D2 Spock memo pause annotation + AAR-lightweight at session close). Planning-class shape; lighter than M3.6/M3.7 implementation-class (6 deliverables same count BUT different artifact types — M3.6/M3.7 included ADR ratification; M5.0 has zero ADR per Campaign SO #14 default).
phase_authorization: "P4 pause + P5 open ratified by operator at session-entry AskUserQuestion 2026-05-25T~19:50Z (G2 mid-checkpoint discharged BEFORE M5.0 open per pivot doctrine) per Project SO #1 + Campaign SO #19 phase-gates-are-human-gates doctrine. P4 closed-via-pause (not exit-gate-via-completion); per amended doctrine, P5 opens parallel without requiring P4 close. P4 resumes via separate operator decision (default: post-P5; alternative: absorb to v8.x successor at P6 entry per D-policy at v8 P6 close). M4.1 close 2026-05-25T18:00Z provided the unblocking event for P5 entry (5/5 deliverables LIVE; D10 ratified; Phase-4 contract draft filed). Operator-confirmation gates at this session: G1=plan-approval (DONE at ExitPlanMode 2026-05-25T~19:55Z), G2=already discharged at session entry (P4 posture + P5 entry sequence both ratified), G3=push-authorization at S1 close (D-PUSH=push-after-S1 per M3.5+M3.6+M3.7+M4.1 precedent), G4=close-artifact-confirmation post-S1; recorded in campaign master amendments-table at S1 open per Project SO #1 + Campaign SO #19 + Campaign SO #17 mission_class explicit."
hard_dependency_satisfied: "M4.1 closed 2026-05-25T18:00Z at session_stanley_20260525T173553Z_v8_m41_s1 (5/5 deliverables LIVE; D10 ratified aDNA.aDNA hosts unified installer; Phase-4 contract clause A LOCKED + clauses B-H drafted; cross-vault coord pattern 2nd canonical instance; reconnaissance-class mission shape 1st canonical instance in v8; substrate-gathering-subagent-dispatch pattern GRADUATES at 3rd canonical instance; HEAD = origin/main at M5.0 S1 entry). Operator pivot 2026-05-25 ratifies P4 pause + P5 open at session-entry AskUserQuestion. P5 entry conditions satisfied per amended doctrine (P4 pause-without-exit-gate is operator-decisioned exception per Campaign SO #19 phase-gates-are-human-gates). v7.0 frozen at LatticeProtocol/aDNA@27e6395 (annotated 3681f76); zero `.adna/` touches at M5.0 per hard constraint #1. v8 P6 propagation queue at ~34-40 doctrinal additions (will grow to ~40-50 at M5.0 close adding 10-decadal theme set + 21-persona bench template + visual methodology contract upstream-promotion candidates)."
---

# M5.0 — v8 P4 PAUSE + P5 PIVOT entry planning (operator pivot 2026-05-25)

> **Mission produces**: (a) **M5.0 mission spec** (this file) — planning-class single-session entry mission for restructured Phase 5; lighter than M3.6/M3.7 implementation-class shape; 6 deliverables. (b) **Campaign amendment coord memo** at `who/coordination/coord_2026_05_25_v8_p4_pause_p5_pivot.md` — documents P4 pause posture (M4.2/M4.3/M4.4 paused-but-resumable per operator pivot) + P5 pivot (restructured 100-cycle scope from "site + github readme" to "comprehensive visual + clarity + conciseness + anti-bloat + explanation-quality audit") + 10-decadal theme set reference + 21-persona bench reference + Gemini pipeline integration plan. (c) **10-decadal theme set** at `missions/artifacts/m50_decadal_theme_set.md` — D11-D20 detailed table (cycle 1-100; D11 Visual Identity v2 + Image Regen + D12 Clarity & Conciseness + D13 Infographic Generation + D14 README & First-Contact Polish + D15 Persona Page Consolidation + D16 Reference & Glossary Streamline + D17 Cross-Page Narrative Coherence + D18 Visual Hierarchy & Typography v2 + D19 Mobile & Responsive v2 + D20 Performance & Hardening & Adversarial Capstone); per-cycle structure (7-step: capture state → persona Q&A → Gemini gen/regen → implement → re-capture → validate → III persist); AAR cadence (decadal AAR every 10 cycles inheriting Rosetta D1-D10 shape; Reviewer Lens Pass at D11/D14/D17/D20). (d) **21-persona bench expansion design** at `missions/artifacts/m50_persona_bench_expansion.md` — 5 original Rosetta adopter personas (Solo Dev + Educator + Enterprise + Researcher + Startup) + 5 existing specialist reviewers (Accessibility Auditor + Design Critic + Content Strategist + Information Architect + Newcomer Stress-Tester) + 6 NEW P5-planned (OSS Maintainer + Dev-Tools Designer + Framework Docs Expert + Community Organizer + Indie Hacker + Enterprise Architect) + 5 NEW visual-focused (Visual Designer + Infographic Specialist + Anti-Bloat Editor + UX Writer + Diagram Reviewer); per-decadal allocation (3-5 personas per decadal cycle); scoring rubric (6 primary + 4 secondary dimensions = 10 dimensions total). (e) **Visual inspection methodology** at `missions/artifacts/m50_visual_inspection_methodology.md` — per-cycle 5-question Q&A protocol (Visual style + Clarity + Conciseness + Bloat + Explanation quality) + Gemini integration (CanvasForge `canvas_core/image_generation.py` substrate-neutral ImageRequest Protocol; Imagen 4 Ultra; $0.04/call) + III system integration (ADR-025+026 contracts; cycle results persist at `what/measurement/iii_results/{YYYY-MM}/`); per-cycle 7-step structure (capture state → persona Q&A → image gen → implement → re-capture → validate → III persist). (f) **Governance bundle** — campaign master Phase 4 row updates (M4.2/M4.3/M4.4 status: planned → paused) + Phase 5 row updates (M5.0 row inserted before M5.1; M5.1+M5.2+M5.3+M5.4+M5.5 scope amendments documented) + new Decision Point D14 (Phase 5 mission tree restructure; ratified at M5.0 close) + Phase 5 exit gate amended (Ranker ≥ 4.95 across SITE + REPO with 21-persona bench across 10 dimensions; D11-D20 all closed) + amendments-table entry; STATE.md Op 3 archive-on-close 23rd canonical instance refresh; Phase-4 contract draft annotation update (clauses B-H paused status + new §I Pause Provenance); D2 Spock memo pause_annotation field addition.

> **Why now**: Operator pivot at 2026-05-25 (post-M4.1 close 2026-05-25T18:00Z): the operator stated *"I'm currently setting up some potentially different terminal/agent solutions, so for now we may want to pause the installer/binary project... in the mean time why don't we move up the public readiness campaign and since we now have gemini image model api keys and can regenerate images/diagrams/figures/infographics for the adna site / repo in high quality and using the new III system so let's please come up with a plan to do a comprehensive review and improvement process of 100 III cycles."* This is a substantive scope amendment to the campaign requiring:
> - **P4 pause**: M4.2/M4.3/M4.4 paused-but-resumable (preserve Phase-4 contract draft + D2 Spock coord memo per Campaign SO #13)
> - **P5 pivot**: 100-cycle scope expands from "site + github readme + new personas" to "comprehensive visual + clarity + conciseness + anti-bloat + explanation-quality audit" enabled by Gemini API access
> - **III system integration**: leverage modular III primitives ratified at M3.7 close (ADR-025 + ADR-026 contracts; P3 III-decadal cycle orchestration + P6 III result persistence)
> - **Persona bench expansion**: add 5 visual-focused personas on top of original 6 P5-planned + 5 specialist reviewers + 5 original Rosetta personas = 21-persona bench

> **Planning-class mission shape — 1st canonical instance in v8 P5**: M5.0 is planning-class (no executable code; governance + design artifacts only); 6 deliverables; single-session target with S2 close-cascade fallback per M3.5 precedent. Lighter than M3.6/M3.7 implementation-class (6 deliverables but different artifact types — M3.6/M3.7 included ADR ratification; M5.0 has zero ADR per Campaign SO #14 default — 10 decadal themes don't require ADR; future ADRs gated at decadal closes or P5 close per default). Heavier than M4.1 reconnaissance-class (which was lighter at 5 deliverables) due to 10-decadal theme set + 21-persona roster + methodology spec.

> **Standing Order #8 self-reference 27th + 28th tactical invocations in v8 P4+P5 boundary**: 27th = M5.0 spec references M4.1 close + operator pivot as authorizing events; 28th = D5 visual inspection methodology cites M4.1 D5 paired-read pattern as substrate-gathering precedent (Explore subagent dispatch at session entry = 4th canonical instance of substrate-gathering-subagent-dispatch pattern post-graduation at M4.1 close).

> **Rosetta-D-naming continuity**: D11-D20 numbering extends Rosetta D1-D10 (Rosetta cycles 1-100 owned D1-D10 = ranker 4.00 → 5.00 ceiling at 2026-04-26 deploy; v8 P5 cycles 101-200 own D11-D20 = expanded scope across SITE + REPO with 21-persona bench across 10 dimensions = visual + clarity + conciseness + anti-bloat + explanation-quality push). Original Rosetta D9 + D10 absorption (M5.3 + M5.4 original framing) repurposed: Rosetta Phase 7 D9 + D10 are already complete at ranker 5.00; absorption is documentary. M5.3 + M5.4 REPURPOSED to NEW decadals (D11 + D12) using Gemini pipeline + expanded persona bench; original Rosetta D9 + D10 records preserved at `how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d{9,10}.md` for audit per Standing Order #6 archive-not-delete.

> **North-star alignment**: The v8 campaign's strategic intent — *"easy and fluid way to build/operate/utilize context graphs"* — is operator-stated 2026-05-13 + saved to memory. Operator priorities at this pivot (visual style + clarity + conciseness + anti-bloat + explanation quality) directly serve this goal: an aDNA site that is **visually fluent + linguistically clear + structurally lean + comprehensively explained** lowers the "easy/fluid" bar for new operators discovering aDNA. The 21-persona bench ensures the improvement process is operator-empathy-grounded; the 10-decadal theme set ensures comprehensive coverage; the Gemini integration ensures visual quality at production grade; the III system integration ensures measurement-driven adaptation per ADR-025+026 contracts.

## Mission scope

Consume the operator pivot + 3-agent recon synthesis (ScienceStanley Gemini setup + v8 P5 mission specs + aDNA site state) + III modular system M3.7 design spec + Rosetta D1-D10 decadal precedent + 5 existing specialist reviewer files + Phase-4 contract draft + D2 Spock coord memo — to:

1. **Mission spec authoring + governance bundle declaration** (S1; this file) — establish the M5.0 charter; campaign master Phase 4 + Phase 5 row updates + D14 ratification + Phase 5 exit gate amendment + amendments entry; STATE Op 3 23rd canonical instance refresh; Phase-4 contract draft annotation; D2 Spock memo pause_annotation.

2. **Campaign amendment coord memo authoring** (S1) — `coord_2026_05_25_v8_p4_pause_p5_pivot.md`; 8 sections matching M3.6/M4.1 cross-vault coord memo precedent shape (Purpose + Context + What-aDNA-will-do + What-LatticeTerminal-is-expected-to-do + Cross-vault-impact-summary + Open-questions-for-Spock + Acknowledgment-protocol + Cross-references + Notes-for-Stanley); recipient persona = Spock @ LatticeTerminal.aDNA (P4 pause coordination); preserves D2 active-handshake memo by annotation (not replacement); flags pause status + M4.2 timeline TBD + Spock ack still requested.

3. **10-decadal theme set authoring** (S1) — `m50_decadal_theme_set.md`; D11-D20 detailed table covering per-decadal goal + cycle count + primary outputs + persona allocation + AAR cadence; per-cycle 7-step structure; per-decadal AAR shape (inherits Rosetta D1-D10 6-section AAR + ranker scorecard + persona matrix; Reviewer Lens Pass mandatory at D11 + D14 + D17 + D20 = every 3rd decadal + final).

4. **21-persona bench expansion design** (S1) — `m50_persona_bench_expansion.md`; full 21-persona roster (5 original Rosetta + 5 existing specialist + 6 NEW P5-planned + 5 NEW visual) with per-persona expertise + per-decadal allocation table (3-5 personas drawn per decadal cycle); scoring rubric (6 primary dimensions Findability + Comprehension + Actionability + Trust + Relevance + Delight per Rosetta + 4 NEW secondary dimensions Visual_Clarity + Cognitive_Load + Conciseness + Explanation_Quality per operator priorities = 10 dimensions total; 0.00-5.00 numeric per dimension); M5.2 to author the 11 NEW persona files (6 P5-planned + 5 visual) — M5.0 only DESIGNS the bench shape; per Standing Order #18 decadal AAR persona update discipline.

5. **Visual inspection methodology authoring** (S1) — `m50_visual_inspection_methodology.md`; per-cycle 5-question Q&A protocol (Visual style + Clarity + Conciseness + Bloat + Explanation quality; ~5 min per persona × 3-5 personas per cycle = 15-25 min Q&A); Gemini integration (CanvasForge `canvas_core/image_generation.py` substrate-neutral ImageRequest Protocol; Imagen 4 Ultra; $0.04/call; budget $50 = ~1250 calls; estimated cycle usage ~5-10 images per visual decadal → ~50-100 images total across D11+D13+D18 = $2-4 image cost well under budget; auto-log to CanvasForge ADR-003 training corpus); III system integration (cycle results persist at `aDNA.aDNA/what/measurement/iii_results/{YYYY-MM}/` per modular III P6 contract; decadal coordination per ADR-025 Clause A distributed-but-coordinated; dimension definitions per ADR-025 Clause B III.aDNA canonical; ack-debt-protocol per ADR-025 Clause C; ledger observation per ADR-026 hybrid canonical-poller + consumer-fallback).

6. **Governance bundle close + lightweight AAR** (S1) — campaign master Phase 4 row updates (M4.2/M4.3/M4.4 status: planned → paused per operator pivot 2026-05-25; resumable post-P5 OR alternative terminal/agent solution settles) + Phase 5 row updates (M5.0 row inserted; M5.1/M5.2/M5.3/M5.4/M5.5 scope amendments documented at row-level) + new D14 Decision Point (Phase 5 mission tree restructure; ratified at M5.0 close per operator G2 mid-checkpoint AskUserQuestion) + Phase 5 exit gate amendment (Ranker ≥ 4.95 across SITE + REPO with 21-persona bench across 10 dimensions; D11-D20 all closed; AAR Reviewer Lens Pass clean at D11/D14/D17/D20) + amendments-table entry; STATE.md Op 3 archive-on-close 23rd canonical instance refresh (M4.1 S1 demoted to concise; M5.0 S1 + MISSION CLOSED full-form top bullet); Phase-4 contract draft `m41_phase_4_contract_draft.md` annotation update (clauses B-H STATUS field updated to include `M4.2-paused | M4.3-paused | M4.4-paused`; new §I Pause Provenance section recording 2026-05-25 operator pivot); D2 Spock memo `coord_2026_05_25_v8_p4_open_latticeterminal_handshake.md` pause_annotation field addition; lightweight 5-line AAR (Worked/Didn't/Finding/Change/Follow-up) per Project SO #5; session move active → history/2026-05/; G3 commit + push.

**No cross-vault writes at M5.0** — LatticeTerminal.aDNA + III.aDNA + node.aDNA + 5 forge-vault wrappers + lattice-labs untouched per hard constraints #2 + #3 + #4 + #5 + #6. **No site changes at M5.0** — `aDNA.aDNA/site/` untouched (cycle execution at D11+; M5.0 is governance only per hard constraint #11). **No node.aDNA writes at M5.0** — M3.5.5 D7d warm-up is a separate execution mission and owns vault_card writes per hard constraint #3.

## Deliverables (numbered to match Objectives)

1. **D1 — M5.0 mission spec** (this file) — completed at S1; status: in_progress at S1 open; status: completed at S1 close.
2. **D2 — Campaign amendment coord memo** at `who/coordination/coord_2026_05_25_v8_p4_pause_p5_pivot.md` — Rosetta authoring for Spock @ LatticeTerminal.aDNA; 8 sections matching M3.6/M4.1 precedent shape; status: filed at S1; preserves D2 active-handshake memo (`coord_2026_05_25_v8_p4_open_latticeterminal_handshake.md`) by annotation.
3. **D3 — 10-decadal theme set** at `missions/artifacts/m50_decadal_theme_set.md` — D11-D20 detailed table + per-cycle structure + AAR cadence + per-decadal persona allocation.
4. **D4 — 21-persona bench expansion design** at `missions/artifacts/m50_persona_bench_expansion.md` — full 21-persona roster + per-decadal allocation table + scoring rubric (10 dimensions = 6 primary + 4 secondary).
5. **D5 — Visual inspection methodology** at `missions/artifacts/m50_visual_inspection_methodology.md` — per-cycle 5-question Q&A protocol + Gemini integration + III system integration.
6. **D6 — Governance bundle** — campaign master Phase 4 + Phase 5 row updates + D14 ratification + Phase 5 exit gate amendment + amendments entry + STATE Op 3 23rd canonical instance + Phase-4 contract draft annotation + D2 Spock memo pause annotation + lightweight AAR (at S1 close).

## Acceptance criteria

| # | Criterion | Verification |
|---|-----------|--------------|
| 1 | M5.0 mission spec frontmatter has 22+ fields populated; status: in_progress at S1 open; completed at S1 close | `head -68 mission_adna_str_p5_m50_*.md` |
| 2 | D2 amendment coord memo has 8 sections matching M3.6/M4.1 cross-vault coord memo precedent shape | `grep "^## " coord_2026_05_25_v8_p4_pause_p5_pivot.md` |
| 3 | D2 amendment memo preserves D2 active-handshake memo by reference (Cross-references section); does NOT overwrite | grep "coord_2026_05_25_v8_p4_open_latticeterminal_handshake" in D2 amendment |
| 4 | D3 10-decadal theme set covers D11-D20 with per-decadal goal + cycle count + primary outputs + persona allocation + AAR cadence | `grep "^## D1[1-9]\|^## D20" m50_decadal_theme_set.md` |
| 5 | D4 21-persona bench expansion lists all 21 personas + per-decadal allocation table + scoring rubric (10 dimensions) | `grep "^### " m50_persona_bench_expansion.md \| wc -l` ≥ 21 |
| 6 | D5 visual inspection methodology has 5-question Q&A protocol + Gemini integration + III system integration | `grep "^## " m50_visual_inspection_methodology.md` ≥ 5 sections |
| 7 | Campaign master Phase 4 row updates: M4.2/M4.3/M4.4 status → paused | `grep -E "M4\.[234]" campaign_*.md \| grep -i "paused"` |
| 8 | Campaign master Phase 5 row updates: M5.0 row inserted | `grep -E "^\| M5\.0" campaign_*.md` |
| 9 | Campaign master D14 ratified + Phase 5 exit gate amended | grep D14 ratified + grep Phase 5 exit gate amended |
| 10 | STATE.md Op 3 archive-on-close 23rd canonical instance refresh promotes M4.1 S1 block to concise + adds M5.0 S1 + MISSION CLOSED in full form; Next Session Prompt points at M3.5.5 D7d warm-up | manual review |
| 11 | Phase-4 contract draft clauses B-H STATUS field annotation updated to include M4.x-paused; new §I Pause Provenance section appended | grep STATUS + grep "Pause Provenance" in m41_phase_4_contract_draft.md |
| 12 | D2 Spock memo `coord_2026_05_25_v8_p4_open_latticeterminal_handshake.md` pause_annotation field added | grep "pause_annotation" in D2 Spock memo |
| 13 | Session file moved `active/ → history/2026-05/` at S1 close | `ls how/sessions/active/` empty |
| 14 | Push to origin: HEAD = origin/main (D-PUSH=push-after-S1 authorized per G3) | `git rev-parse HEAD; git rev-parse origin/main` |

## Hard constraints (12)

1. **Zero `.adna/` touches** at M5.0 (v7.0 frozen; v8 P6 propagation queue grows by ~5-7 doctrinal additions at M5.0 close — 10-decadal theme set + 21-persona bench template + visual methodology contract + 4 secondary scoring dimensions + III-integration upstream-promotion candidates)
2. **Zero LatticeTerminal.aDNA writes** (P4 paused; coord memo annotation only on aDNA side; Spock writes deferred to Spock-side session at LatticeTerminal.aDNA)
3. **Zero `node.aDNA/` mutations** at M5.0 (M3.5.5 D7d warm-up — a separate execution mission — owns the vault_card writes; that's NOT part of M5.0)
4. **Zero `III.aDNA/` touches** (substrate is read-only reference; ADR-025+026 contracts active; v8 P5 cycles consume III modular system at execution missions, NOT at M5.0 planning)
5. **Zero forge-vault wrapper writes** (5 consumer wrappers at v0.3.0 untouched: SiteForge + VideoForge + CanvasForge + wga + LPWhitepaper); CanvasForge `canvas_core/image_generation.py` consumed by reference only at later execution missions
6. **Zero `lattice-labs/` writes**
7. **Zero cycle execution at M5.0** (planning-class only; D11-D20 cycles execute at M5.1+ missions per amended Phase 5 mission tree)
8. **Zero new ADR authoring at M5.0** (Campaign SO #14 default; 10 decadal themes don't require ADR; future ADRs gated at decadal closes or P5 close per default)
9. **Coord memo preservation** (Campaign SO #13 + #15; D2 active-handshake memo `coord_2026_05_25_v8_p4_open_latticeterminal_handshake.md` preserved by pause_annotation field addition only; predecessor `coord_2026_05_17` advance-signal memo also preserved; new D2 amendment memo `coord_2026_05_25_v8_p4_pause_p5_pivot.md` is sister-memo not replacement)
10. **Zero `.obsidian/` + `~/.claude/settings.json` + `~/.adna/measurement/measurement.sqlite` + hook mutations** (M3.7+M4.1 precedent)
11. **Zero `aDNA.aDNA/site/` mutations at M5.0** (site changes at D11+; M5.0 is governance only)
12. **Self-reference (SO #8)** — M5.0 spec references M4.1 close + operator pivot + D5 paired-read finding as authorizing events (27th + 28th tactical invocations in v8 P4+P5 boundary)

## Standing-Order discharges (declared at S1; full in AAR-lightweight at close)

| SO | Discharge | Phase |
|----|-----------|-------|
| P-SO#1 (phase gates) | P4 paused + P5 open ratified by operator at session-entry AskUserQuestion 2026-05-25T~19:50Z per Project SO #1 + Campaign SO #19; discharged BEFORE M5.0 open | S0 |
| P-SO#5 (AAR mandatory) | Lightweight 5-line AAR at S1 close | S1 close |
| P-SO#6 (archive not delete) | M4.2/M4.3/M4.4 preserved (paused, not removed); Rosetta D9+D10 absorbed records preserved; D2 active-handshake memo preserved by annotation; predecessor `coord_2026_05_17` advance-signal memo preserved | S1 close |
| P-SO#8 (self-reference) | 27th + 28th tactical invocations (M4.1 close + operator pivot self-reference; D5 substrate-gathering pattern post-graduation 4th instance self-reference) | S1 |
| P-SO#11 (per-mission context budget) | `token_budget_estimated` two-metric declared in this frontmatter | S1 |
| C-SO#13 (cross-vault coord memo preservation) | M5.0 produces 1 outbound coord memo (D2 amendment) + 1 annotation (pause_annotation on existing D2 active-handshake); preserves predecessor `coord_2026_05_17` | S1 |
| C-SO#14 (in-phase ADR exception) | NOT triggered at M5.0 (10 decadal themes don't require ADR; Campaign SO #14 default holds; future ADRs gated at decadal closes) | S1 |
| C-SO#15 (dispatch where possible) | No external dispatch this session (M5.0 runs locally; substrate gathering via 3 parallel Explore subagents at session entry) | S1 |
| C-SO#17 (mission_class discipline) | `mission_class: planning` declared in frontmatter | S1 |
| C-SO#18 (decadal AAR persona update at Phase 5) | M5.0 DESIGNS the 21-persona bench expansion (5 NEW visual personas added to 6 P5-planned + 5 specialist + 5 original Rosetta); M5.2 will AUTHOR the 11 NEW persona files (6 P5-planned + 5 visual) per discipline | S1 (design) + M5.2 (authoring) |
| C-SO#19 (phase-exit gate = human gate) | P4 pause + P5 open operator-ratified at session-entry per pivot doctrine (paused-without-exit-gate is operator-decisioned exception) | S0 |

## Cross-vault impact

| Direction | Vault | Impact | Read-only? |
|-----------|-------|--------|------------|
| Inbound (read) | `ScienceStanley.aDNA/` | Gemini Imagen 4 setup substrate (SS_GEMINI_API_KEY in macOS Keychain; non-TTY ACL grants; $50 prepaid budget; 6+ Python consumer scripts) | YES |
| Inbound (read) | `CanvasForge.aDNA/` | `canvas_core/image_generation.py` substrate-neutral ImageRequest Protocol + ADR-003 dataset schema | YES |
| Inbound (read) | `III.aDNA/` | Modular III framework state (8 modules + 7 packs); ADR-025+026 ratified contracts | YES per hard constraint #4 |
| Outbound (notify) | `LatticeTerminal.aDNA/` (logically; via coord memo filed at aDNA side) | D2 amendment coord memo Rosetta → Spock + pause_annotation field on D2 active-handshake memo; Spock receives at next LatticeTerminal session via standard `who/coordination/` scan | aDNA-side write only per hard constraint #2 |
| Inbound (read) | None other vaults at M5.0 | M5.0 is single-vault planning scope (aDNA.aDNA governance only); cross-vault execution begins at later missions per amended Phase 5 mission tree | N/A |

## Cross-mission dependencies

| Dependency | Direction | Source |
|------------|-----------|--------|
| M4.1 close (P4 paused) | Inbound | `missions/mission_adna_str_p4_m41_latticeterminal_sync.md` closed 2026-05-25T18:00Z; D2 active-handshake memo filed; Phase-4 contract draft 8 clauses |
| Operator pivot 2026-05-25 | Inbound | Operator-stated at session-entry; ratified via AskUserQuestion (P4 paused + P5 open + entry sequence) |
| Gemini API access | Inbound | ScienceStanley.aDNA SS_GEMINI_API_KEY in macOS Keychain (operational; non-TTY ACL grants in place) |
| ADR-025 + ADR-026 | Inbound | Both accepted at M3.7 S2 close 2026-05-25; III modular system contracts active |
| M3.5.5 D7d warm-up sub-task | Outbound | Next session executes 31-vault_card regen; pre-validates Gemini pipeline before D11 (Visual Identity v2) commits |
| M5.1 research mission | Outbound | Expanded scope (OSS-pattern + visual + diagram + infographic + page-bloat research); opens post-D7d warm-up |
| M5.2 persona authoring | Outbound | Expanded bench (11 NEW persona files = 6 P5-planned + 5 visual); opens post-M5.1 |
| M5.3-M5.5 decadal cycles (D11-D20) | Outbound | 100 cycles across 10 decadals; opens post-M5.2 per amended Phase 5 mission tree |

## Risks

| Risk | Likelihood | Severity | Mitigation |
|------|------------|----------|------------|
| Persona bench inflation overhead | Medium | Low | 3-5 personas drawn per cycle (not all 21); full bench only at decadal AAR ranker pass; per-decadal allocation table in D4 |
| Visual cycles harder to gate than text cycles | Medium | Medium | Reviewer Lens Pass at D11/D14/D17/D20 + Playwright visual regression at each cycle + persona scoring averaging; methodology spec in D5 |
| Image generation budget burn | Low | Low | $50 budget; estimated 50-100 images at $0.04 = $2-4 actual; ample buffer; auto-log to CanvasForge corpus for reuse |
| D7d warm-up timing | Low | Low | M5.0 close fires M3.5.5 D7d as next session per Next Session Prompt; D7d pre-validates Gemini pipeline before D11 commits |
| Spock M08 charter elevation interaction with P4 pause | Low | Medium | D2 amendment coord memo annotates pause status + M4.2 timeline TBD + Spock ack still requested (informs eventual resume) |
| Rosetta D9+D10 absorption vs new D9+D10 confusion | Low | Low | Naming continuity: D11-D20 (NOT D9'+D10'); Rosetta records preserved at `campaign_rosetta/missions/artifacts/aar_phase7_d{9,10}.md` for audit |

## Notes

- **Planning-class mission shape — 1st canonical instance in v8 P5** (M5.0): future planning-class missions (M3.0.5 if opened, M2.1.5 if opened, post-P5 planning if needed) may apply this shape; graduates at 3rd canonical instance.
- **Substrate-gathering-subagent-dispatch pattern post-graduation 4th canonical instance** at M5.0 S1 entry (3 parallel Explore subagents = 4th post-graduation reinforcement after M4.1 close graduation; `skill_substrate_gathering_subagent_dispatch.md` graduated at 3rd canonical instance per ≥ 3 instances rubric).
- **Substrate-pure separation discipline 11th canonical instance** at pre-S1 commit `7f7daf2` (SiteForge C-D9-1 Onboarding discipline dual audience carry-forward to skill_create_iss); `skill_substrate_pure_separation.md` graduation candidate at 11 of 3 = 3.7× margin (strongly graduated).
- **Op 3 archive-on-close pattern 23rd canonical instance** at S1 close STATE refresh; `skill_campaign_close_archive.md` graduation candidate at **7.7× margin** over ≥ 3 threshold (M4.1 was 22nd = 7.3×).
- **Rosetta-D-naming continuity D11-D20**: Rosetta cycles 1-100 owned D1-D10 (ranker 4.00 → 5.00 ceiling at 2026-04-26 deploy); v8 P5 cycles 101-200 own D11-D20 (expanded scope across SITE + REPO with 21-persona bench across 10 dimensions; new theme set per D3).
- **v8 P6 propagation queue projected growth**: ~34-40 (current post-M4.1) → ~40-50 at M5.0 close (adding 10-decadal theme set + 21-persona bench template + visual methodology contract + 4 secondary scoring dimensions + III-integration upstream-promotion candidates).
- **D7d warm-up integration**: M3.5.5 D7d sub-task spec (`missions/artifacts/m35_d7d_image_regen_followup.md`) is the natural warm-up for D11 (Visual Identity v2 + Image Regen) — pre-validates Gemini pipeline end-to-end with 31-vault_card regen using `SS_GEMINI_API_KEY` from ScienceStanley Keychain (Path B from D7d 4-resolution-path matrix; unblocked by operator API key access).
- **D11-D20 theme set rationale** (operator priorities → decadal mapping):
  - Visual style → D11 (Visual Identity v2 + Image Regen) + D18 (Visual Hierarchy + Typography v2)
  - Clarity → D12 (Clarity & Conciseness) + D14 (README + First-Contact Polish) + D17 (Cross-Page Narrative Coherence)
  - Conciseness → D12 (Clarity & Conciseness) + D15 (Persona Page Consolidation) + D16 (Reference + Glossary Streamline)
  - Anti-bloat → D12 + D15 + D16 (combined: 30-50% size reduction across top-10 pages without content loss)
  - Explanation quality → D13 (Infographic Generation) + D17 (Cross-Page Narrative Coherence) + D20 (Performance + Hardening + Adversarial Capstone)

## Mission Close Notes (S1 close cascade 2026-05-25T~21:00Z)

**Closed**: 2026-05-25T~21:00Z at `session_stanley_20260525T195508Z_v8_m50_s1` (single-session planning-class close).

**Cumulative deliverables (6/6 LIVE)**:
1. ✅ **D1 — M5.0 mission spec** (this file) — `status: in_progress → completed`; 22-field frontmatter; mission_class=planning; deliverables_count=6
2. ✅ **D2 — Campaign amendment coord memo (sister-memo)** at `who/coordination/coord_2026_05_25_v8_p4_pause_p5_pivot.md` — Rosetta → Spock; 8 sections matching M3.6/M4.1 precedent shape; preserves D2 active-handshake by reference + predecessor `coord_2026_05_17` by reference per Campaign SO #13
3. ✅ **D3 — 10-decadal theme set** at `missions/artifacts/m50_decadal_theme_set.md` — D11-D20 detailed table + per-cycle 7-step structure + AAR cadence + Reviewer Lens Pass at D11/D14/D17/D20 + operator priority → decadal cross-reference + Rosetta D-naming continuity + Phase 5 exit gate check criteria
4. ✅ **D4 — 21-persona bench expansion design** at `missions/artifacts/m50_persona_bench_expansion.md` — 21-persona roster across 4 categories (5 original Rosetta + 5 existing specialist + 6 NEW P5-planned + 5 NEW visual-focused); 10 scoring dimensions (6 primary + 4 secondary); per-decadal allocation table; persona coverage audit (all 21 personas appear in ≥ 2 decadals); M5.2 authoring scope
5. ✅ **D5 — Visual inspection methodology** at `missions/artifacts/m50_visual_inspection_methodology.md` — per-cycle 5-question Q&A protocol + per-cycle 7-step structure + Gemini integration detail (CanvasForge consumer pattern; Imagen 4 Ultra; $50 budget = $46+ buffer at estimated $3-5 spend) + III system integration detail (ADR-025+026 contracts; cycle results persist at `what/measurement/iii_results/{YYYY-MM}/`) + per-decadal AAR cadence + per-cycle verification gates + risk register
6. ✅ **D6 — Governance bundle** — campaign master Phase 4 row updates (M4.2/M4.3/M4.4 paused) + Phase 5 row updates (M5.0 inserted + M5.1-M5.5 scope amendments documented) + D14 ratified + Phase 5 exit gate amended + amendments-table entry + STATE.md Op 3 archive-on-close 23rd canonical instance refresh + Phase-4 contract draft annotation (clauses B-H STATUS field updates + new §I Pause Provenance section) + D2 Spock memo `pause_annotation` field addition

**Pattern dispositions**:
- **1 GRADUATES** (pending close confirmation): `skill_cross_vault_coord_handshake.md` at 3rd canonical instance (M3.6 1st + M4.1 2nd + M5.0 3rd; per ≥ 3 instances rubric; skill file authoring deferred per D-GRAD)
- **2 NEW SEEDS**: `skill_planning_class_amendment_mission.md` (1 of 3); `skill_paused_contract_preservation.md` (1 of 3); both graduate at 3rd canonical instance if future missions apply
- **9 reinforcements**: skill_substrate_pure_separation post-graduation 11/3+ (3.7× margin); skill_campaign_close_archive post-graduation 23/3+ (7.7× margin); skill_substrate_gathering_subagent_dispatch post-graduation 4/3 (4th canonical instance); skill_design_spec_authoring 15+/3+; skill_two_session_close_cascade HOLD 2/3; skill_in_phase_adr_ratification HOLD 5/3+; skill_implementation_mission_close HOLD 4/3+; skill_reconnaissance_class_mission_shape HOLD 1/3; skill_modular_iii_consumer_interface_design HOLD 1/3
- **0 invariant violations**

**Hard constraints**: all 12 honored end-to-end (zero `.adna/` + LatticeTerminal.aDNA writes + node.aDNA + III.aDNA + forge-vault wrappers + lattice-labs writes + cycle execution at M5.0 + ADR authoring at M5.0 + `.obsidian/` + `~/.claude/settings.json` + `~/.adna/measurement/measurement.sqlite` + hook + `aDNA.aDNA/site/` touches; Standing Order #8 27th + 28th tactical invocations applied).

**M5.0 close UNBLOCKS M3.5.5 D7d warm-up** — 31 vault_card regen via Gemini Imagen 4; pre-validates pipeline end-to-end before D11 (Visual Identity v2) commits.

**See**: D2 sister-memo + D3 10-decadal theme set + D4 21-persona bench expansion + D5 visual inspection methodology for full P5 execution context.

## Lightweight AAR (5-line per project SO #5)

- **Worked**: 3 parallel Explore subagent dispatch at session entry (ScienceStanley Gemini setup + v8 P5 mission specs/III modular/Rosetta decadal + aDNA site state) returned ~3700-word synthesis enabling D1+D2+D3+D4+D5 authoring without re-reading source files. Substrate-gathering-subagent-dispatch pattern post-graduation 4th canonical instance.
- **Didn't**: STATE.md Op 3 23rd canonical instance refresh had 1 sloppy edit pass (duplicate "PROMOTED-TO-CONCISE-FROM-FULL" stub + residual old M4.1 full-form bullet); cleaned up with second Edit pass. Pattern note: full-form → concise demotion needs single atomic Edit (not 2 separate Edits) to avoid stub residue.
- **Finding**: Operator pivot mid-campaign creates new mission shape pattern (planning-class for amendment + decadal theme set authoring + persona bench expansion + methodology spec) — 1st canonical instance in v8 P5; NEW SEED `skill_planning_class_amendment_mission.md` 1 of 3.
- **Change**: Phase 5 mission tree light restructure (preserve M5.x numbering; amend scope) + 10-decadal theme set D11-D20 (Rosetta D-naming continuity) + 21-persona bench (5 NEW visual-focused added) + visual inspection methodology (Gemini integration + III system integration) all ratified at single M5.0 close.
- **Follow-up**: M3.5.5 D7d image regen warm-up (next session; 31 vault_cards; pre-validates Gemini pipeline before D11). Then M5.1 research mission opens. D-GRAD skill authoring backlog grows by `skill_planning_class_amendment_mission` + `skill_paused_contract_preservation` + `skill_cross_vault_coord_handshake` (newly graduated). M4.x stays paused; resumes post-P5 OR after alternative-terminal-agent-solution settles.

**Token-budget two-metric** (per ADR-016 Clause C empirical formula):
- **Estimated** (frontmatter): S1 ~100-130 kT content-load; ~6-8 M cache_read at 10-12 turns + ~360-380 K cache_creation API-billing
- **Actual** (~14-16 turns; 5 fresh deliverable file creates + 4 in-place edits + multiple STATE.md passes + 1 substrate-pure absorption commit + close cascade): ~150-180 kT content-load (within ~50% of estimate band; drift ≤ 2× retrospective trigger threshold per Project Standing Order #11)

