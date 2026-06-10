---
type: mission
mission_id: mission_adna_str_p4_m41_latticeterminal_sync
campaign: campaign_adna_serious_tool_readiness
phase: 4
mission_number: 4.1
slug: latticeterminal_sync
created: 2026-05-25
updated: 2026-05-25
status: completed
opens_at: 2026-05-25T17:35:00Z
opened_session: session_stanley_20260525T173553Z_v8_m41_s1
closed_at: 2026-05-25T18:00:00Z   # M4.1 S1 close cascade 2026-05-25; 5/5 deliverables LIVE single-session; D10 RATIFIED; Phase-4 contract clause A LOCKED; clauses B-H drafted
closed_session: session_stanley_20260525T173553Z_v8_m41_s1   # single-session close
estimated_sessions: 1   # reconnaissance/planning-class hybrid; lighter than M3.6/M3.7 implementation-class 2-session shape; S2 close-cascade fallback per M3.5 precedent if budget exhausts
persona: rosetta
last_edited_by: agent_stanley
spec_completeness: in_progress   # 5 deliverables: mission spec (D1) + coord memo (D2) + Phase-4 contract draft (D3) + governance bundle (D4) + LatticeTerminal STATE synthesis (D5)
mission_class: reconnaissance   # planning hybrid; no executable code; produces governance + coord memo + design artifacts only; verification is agent-side static (frontmatter + section count + cross-references resolvable)
verification_surface: agent   # per ADR-014 Clause C — M4.1 outputs are governance + coord memo + Phase-4 contract draft + synthesis memo; verification is build-time/parse-time (frontmatter valid + section count + cross-references resolvable); no operator-side runtime checks (parallel to M3.6/M3.7 doctrinal-only posture)
token_budget_estimated: "S1 ~80-110 kT content-load (substrate gathering ~25 kT via 2 parallel Explore subagents at session entry per ADR-016 Clause B + Heavy-File convention [report ~3700 words total cross-vault recon synthesizing LatticeTerminal state + M3.x mission spec shape exemplars + coord memo precedent shape + ADR-015 roadmap status — becomes citation source for D2/D3/D5 without re-reading source files] + D5 paired-read synthesis ~10-12 kT [LatticeTerminal STATE.md + CLAUDE.md + install/README.md targeted reads via grep + offset+limit per heavy-file convention] + D1 mission spec authoring ~15-18 kT [this file; ~280-330 lines including frontmatter + 5 objectives + acceptance + hard constraints + Standing-Order discharges + cross-vault impact + risks + notes] + D2 coord memo authoring ~10-12 kT [Rosetta → Spock; 8 sections matching coord_2026_05_17 precedent shape] + G2 mid-checkpoint AskUserQuestion ~3 kT for D10 ratification + D3 Phase-4 contract draft ~12-15 kT [8 clauses A-H; clause A locked post-D10] + D4 governance bundle ~10-12 kT [campaign master M4.1 row close + D10 row ratify + STATE Op 3 22nd canonical instance refresh + Next Session Prompt to M4.2 entry] + S1 SITREP + lightweight AAR ~5-7 kT). Single-session target; M3.6/M3.7 implementation-class 2-session shape NOT inherited (reconnaissance/planning-class is lighter). API-billing companion per ADR-016 Clause C empirical formula (cache_creation ≈ 328 K + turns × 1 K; cache_read ≈ 4.1 M + turns × 126 K): S1 ~5-6 M cache_read at 8-10 turns + ~340-360 K cache_creation. Per ADR-016 Clause A + Project Standing Order #11; declared in this frontmatter per Standing Order #8 self-reference."
tags: [mission, m4_1, v8, p4, latticeterminal_sync, cross_vault_audit, coord_memo_handshake, phase_4_entry, phase_4_contract_draft, paired_read_synthesis, d10_repo_strategy_ratification, reconnaissance_class, planning_hybrid, single_session_target, op_3_22nd_canonical_instance, rosetta_to_spock_handshake, m3_6_cross_vault_coord_pattern_2nd_instance, m3_7_close_self_reference, standing_order_8_25th_invocation, standing_order_8_26th_invocation, project_so_1_phase_gates_are_human_gates_already_discharged, campaign_so_13_coord_memo_preservation, campaign_so_14_no_in_phase_adr_at_m41, campaign_so_15_dispatch_where_possible_inline, campaign_so_17_mission_class_reconnaissance, campaign_so_19_phase_exit_gate_human_gate_already_discharged, zero_adna_dot_touches, zero_latticeterminal_writes, zero_node_adna_touches, zero_iii_adna_touches, zero_forge_vault_wrapper_touches, zero_lattice_labs_writes, zero_installer_code_at_m41, zero_adr_authoring_at_m41, zero_obsidian_mutations, zero_aDNA_dot_site_touches, latticeterminal_has_existing_skill_install_at_what_latticeterminal_dot_claude_skills_skill_install, mc_launch_complete, adr_005_code_as_what_object, adr_016_backend_matrix, adr_019_macos_first_defer_cross_os, harness_contract_v1_claude_code_default, provider_contract_locked]
prerequisite_missions:
  - mission_adna_str_p3_m37_modular_iii_for_obsidian   # immediate predecessor; closed 2026-05-25T16:30Z; M3.7 close = 4 of 4 P3 phase-exit bricks → P3 → P4 phase-exit gate UNBLOCKED
  - mission_adna_str_p3_m36_airlock_aar_and_streamline   # cross-vault coord pattern 1st canonical instance (M3.6 Hermes/CanvasForge); M4.1 advances to 2nd
  - mission_adna_str_p0_planning   # v8 P0 first-execution-session closed 2026-05-17; campaign master + CLAUDE.md + Phase 4 mission tree + D10 surfaced
prerequisite_artifacts:
  # M3.7 close (immediate predecessor; authorizes P3 → P4 gate)
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_m37_modular_iii_for_obsidian.md  # 10-section M3.7 AAR; pattern graduation block; P3 → P4 gate UNBLOCKED finding
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p3_m37_modular_iii_for_obsidian.md  # M3.7 mission spec closed 2026-05-25T16:30Z; status: completed
  # M3.6 cross-vault coord pattern precedent (1st canonical instance)
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m36_streamline_design_spec.md  # 6-section design spec; §6 forward-integration with M3.7
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_airlock_ecosystem_m36.md  # cross-ecosystem AAR shape; 4 sections worked/didn't/streamline/forward-doctrine
  # Cross-vault coord memo precedents
  - aDNA.aDNA/who/coordination/coord_2026_05_17_v8_campaign_open_latticeterminal.md  # advance-signal predecessor from Rosetta to Spock; status: filed; delivery_held_until: operator-acknowledgment; M4.1 extends with active handshake
  - aDNA.aDNA/who/coordination/coord_2026_05_19_v8_cross_vault_disruption_assessment.md  # internal posture memo; reference for body shape
  # v8 campaign master + ADR roadmap
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/campaign_adna_serious_tool_readiness.md  # P4 mission table line 185-189; D10 decision point line 228; ADR-015 forecast row line 317
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/CLAUDE.md  # campaign-specific CLAUDE.md; standing orders #11-19; P4 cross-vault protocol Spock column
  # v8 P0 outputs (Phase 4 charter origin)
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_adna_str_p0_planning.md  # P0 AAR; v8 campaign charter
  # LatticeTerminal substrate (read-only)
  - "/Users/stanley/aDNA/LatticeTerminal.aDNA/STATE.md"  # current Phase 3 OPEN; M08 panel-topology-bottom-bar-pivot in flight
  - "/Users/stanley/aDNA/LatticeTerminal.aDNA/CLAUDE.md"  # Spock persona; single-repo Platform.aDNA; ADR-005
  - "/Users/stanley/aDNA/LatticeTerminal.aDNA/what/latticeterminal/install/README.md"  # M1.1 install scaffold; skill_install at .claude/skills/; macOS-first per ADR-019
  # v2 absorbed P4 stub
  - aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/mission_adna_infra_p3_08c_standalone_installer.md  # v2 M08c absorbed by v8 P4
  # v8 P2 doctrinal carries (same as M3.1-M3.7)
  - aDNA.aDNA/what/decisions/adr_016_per_mission_context_budget.md  # Clause A two-metric + Clause B Heavy-File + Clause C empirical
  - aDNA.aDNA/what/decisions/adr_022_tool_use_logging.md  # PostToolUse hook contract
deliverables_count: 5   # D1 mission spec (S1) + D2 coord memo Rosetta → Spock (S1) + D3 Phase-4 contract draft 8 clauses (S1; clause A post-D10) + D4 governance bundle (S1; campaign master M4.1 row close + D10 row ratify + STATE Op 3 22nd canonical instance + Next Session Prompt to M4.2 + AAR-lightweight at session close) + D5 LatticeTerminal STATE synthesis (S1; substrate for D3). Lighter than M3.6/M3.7's 6 implementation-class.
phase_authorization: "P3 → P4 phase-exit gate ratified by operator at session-entry AskUserQuestion 2026-05-25T~17:30Z (path (a) 'Authorize P4 open') per Project SO #1 + Campaign SO #19 phase-gates-are-human-gates doctrine. P3 close at M3.7 S2 close 2026-05-25T16:30Z provided the unblocking event (4 of 4 P3 phase-exit bricks satisfied: agent-autonomy M3.1-M3.4 + HOME-polished M3.5 + airlock-streamlined M3.6 + modular-III-operational M3.7). M4.1 opens via plan ratification at `/Users/stanley/.claude/plans/please-read-the-claude-md-jolly-salamander.md` (ExitPlanMode APPROVED 2026-05-25T~17:35Z by operator). Operator-confirmation gates at this session: G1=plan-approval (DONE), G2=D10 ratification at mid-checkpoint AskUserQuestion (PENDING; default-recommend = LatticeTerminal hosts per D5 synthesis §1+§7), G3=push-authorization at S1 close (D-PUSH=push-after-S1 per M3.5+M3.6+M3.7 precedent), G4=close-artifact-confirmation post-S1; recorded in campaign master amendments-table at S1 open per Project SO #1 + Campaign SO #19 + Campaign SO #17 mission_class explicit."
hard_dependency_satisfied: "P3 closed at M3.7 S2 close 2026-05-25T16:30Z at session_stanley_20260525T163023Z_v8_m37_s2 (6/6 cumulative deliverables LIVE; ADR-025 + ADR-026 twin-ratified; substrate-inversion-with-ADR variant GRADUATES at 3rd canonical instance; canonical 2-session implementation-class shape 2nd canonical instance RATIFIED; twin-ADR ratification 1st canonical instance of dual-ADR-at-same-mission-close pattern; Campaign SO #14 in-phase exception clause 4th + 5th invocations; Op 3 archive-on-close 21st canonical instance; HEAD = origin/main at M4.1 S1 entry). All 4 P3 phase-exit bricks satisfied → P3 → P4 phase-exit gate UNBLOCKED per Campaign SO #19. Operator ratified gate transition at session-entry path (a) decision. v7.0 frozen at `LatticeProtocol/aDNA@27e6395` (annotated `3681f76`); zero `.adna/` touches at M4.1 per hard constraint #1. v8 P6 propagation queue at ~32-37 doctrinal additions (M4.1 adds ~2-3: Phase-4 contract draft clauses A-H as v8 P6 ecosystem-propagation candidates; D10 ratification record; ADR-015 forecast row remains in roadmap pending M4.2 ratification)."
---

# M4.1 — Cross-vault audit + LatticeTerminal.aDNA sync (Phase 4 entry mission)

> **Mission produces**: (a) **M4.1 mission spec** (this file) — reconnaissance/planning-class hybrid; lighter than M3.6/M3.7's implementation-class 6-deliverable shape; 5 deliverables total; single-session target with S2 close-cascade fallback per M3.5 precedent. (b) **Cross-vault handshake coord memo** at `who/coordination/coord_2026_05_25_v8_p4_open_latticeterminal_handshake.md` — Rosetta → Spock; 8 sections matching `coord_2026_05_17` precedent shape; extends (NOT replaces) the advance-signal predecessor per Campaign SO #13. (c) **Phase-4 contract draft** at `missions/artifacts/m41_phase_4_contract_draft.md` — 8 clauses A-H specifying installer repo location + agent harness ownership + workspace router sync + CI/CD platform + binary distribution + cross-platform support + LatticeTerminal signoff + code-signing; clause A locked post-D10 ratification at G2 mid-checkpoint. (d) **Governance bundle** — campaign master M4.1 row `planned → in_progress` at S1 open + `in_progress → completed` at S1 close + D10 row `pending → ratified` + amendments-table entry + P4 entry timestamp + ADR-015 forecast row holds; STATE.md Op 3 archive-on-close 22nd canonical instance refresh promoting M3.7 last-session block to concise form + M4.1 S1 last-session block in full form + Next Session Prompt updated to point at M4.2 entry; lightweight AAR (5-line) at session close. (e) **LatticeTerminal STATE paired-read synthesis** at `missions/artifacts/m41_latticeterminal_state_synthesis.md` — 8 sections; substrate for D3; cites LatticeTerminal `STATE.md` + `CLAUDE.md` + `install/README.md` paired-read findings; **identifies major finding**: LatticeTerminal already has working `skill_install` at `what/latticeterminal/.claude/skills/skill_install/SKILL.md` (M1.1; macOS-first per ADR-019), shifting M4.x scope from "author from scratch" to "federate + extend with workspace-bootstrap layer".

> **Why now**: M3.7 closed 2026-05-25T16:30Z with **4 of 4 P3 phase-exit bricks** satisfied (campaign master line 177): agent-autonomy (M3.1-M3.4) + HOME-polished (M3.5) + airlock-streamlined (M3.6) + modular-III-operational (M3.7). All 4 prongs complete → P3 → P4 phase-exit gate UNBLOCKED per Campaign SO #19. **Operator ratified the gate transition** at this session's entry AskUserQuestion (path (a) "Authorize P4 open"). M4.1 is the natural P4 entry mission per campaign master P4 row line 185: "Cross-vault audit + LatticeTerminal.aDNA sync (coord-memo handshake + paired read of LatticeTerminal STATE.md + Phase-4 contract draft)". The substrate is mature: Spock filed advance-signal memo `coord_2026_05_17` at v8 P0 close 2026-05-17 with 4 explicit open questions for Spock (D10 repo strategy + provider stance + PROVIDER-CONTRACT pin + pre-existing constraints); D5 synthesis in this mission answers 3 of 4 questions with high confidence based on LatticeTerminal's current artifacts.

> **Mission class = reconnaissance (planning hybrid) — NOT implementation**: M4.1 produces governance + coord-memo + design artifacts only; zero executable code. Reconnaissance-class missions are lighter than implementation-class — single-session target with S2 close-cascade fallback (vs M3.6/M3.7's canonical 2-session implementation-class shape). 5 deliverables (vs M3.6/M3.7's 6). No design spec (M4.1 does NOT design the installer — that's M4.3's scope per campaign master line 187). No ADR ratification at M4.1 (ADR-015 stays forecast for M4.2 per Campaign SO #14 default; load-bearing in-phase exception NOT triggered because M4.1's Phase-4 contract draft is design-spec-equivalent and ADR-015 specifies the M4.3 installer architecture, not the Phase-4 contract surface).

> **D10 ratification (Decision Point campaign master line 228)**: D10 = "Repo strategy — co-host installer in aDNA.aDNA or in LatticeTerminal.aDNA's repo?" Operator ratifies at G2 mid-checkpoint AskUserQuestion in this session (path (a) "Ratify D10 in this session" per session-entry second AskUserQuestion). **Default-recommend per D5 synthesis §1 + §7**: option 2 (LatticeTerminal hosts; aDNA consumes) — LatticeTerminal already has working `skill_install` at `what/latticeterminal/.claude/skills/skill_install/SKILL.md`; aDNA extends with workspace-bootstrap layer. D10 outcome locks into Phase-4 contract clause A + cascades to M4.4 CI/CD scope.

> **Cross-vault coord pattern 2nd canonical instance** — M3.6 (Hermes/CanvasForge airlock AAR) was the 1st canonical instance; M4.1 (Spock/LatticeTerminal Phase-4 sync) is the 2nd. If M4.x later applies cross-vault coord again (e.g., M4.3 Spock co-design close), pattern advances to 3rd instance and graduates per ≥ 3 instances rubric. `skill_cross_vault_coord_handshake.md` SEED CANDIDATE at 2 of 3 instances post-M4.1 close.

> **Self-reference (Standing Order #8 — 25th + 26th tactical invocations in v8)**: M4.1 mission spec frontmatter references the very M3.7 close §6 forward-integration that unblocks P3 → P4 phase-exit gate (paragraph above). M4.1's existence is itself the discharge of M3.7's "P3 → P4 gate UNBLOCKED" finding — the mission opens because the predecessor closed. M4.1 coord memo (D2) cites the predecessor `coord_2026_05_17` as advance-signal substrate while authoring the active handshake — self-referential within the cross-vault coord pattern.

> **North-star alignment**: The v8 campaign's strategic intent — *"easy and fluid way to build/operate/utilize context graphs"* — is operator-stated 2026-05-13 + saved to memory (`project_adna_lattice_ux_goal.md`). M4.1 serves this goal by **resolving the installer hosting architecture** that determines how new operators bootstrap the entire workspace. A clean D10 + Phase-4 contract = the foundation for `curl install.lattice.dev | sh` working end-to-end at v8.0 ship. M4.2 (ADR-015 packaging ratification), M4.3 (co-designed installer authoring), M4.4 (CI/CD) all derive from M4.1's contract.

## Mission scope

Open `campaign_adna_serious_tool_readiness` (v8) **Phase 4 (Installer + binary distribution)** by:

1. **Mission spec authoring + governance bundle declaration** (S1) — this file establishes the M4.1 charter; campaign master M4.1 row flip + D10 row activation + STATE Op 3 22nd canonical instance refresh.

2. **LatticeTerminal STATE paired-read synthesis** (S1) — `m41_latticeterminal_state_synthesis.md` 8 sections; substrate for D3 Phase-4 contract draft; identifies that LatticeTerminal already has `skill_install` working end-to-end on macOS (M1.1 close; ADR-019 macOS-first; Ghostty 1.3.1 + tmux ≥3.6a + Claude Code ≥v2.1.32 + BACKEND-MATRIX-pinned).

3. **Cross-vault handshake coord memo authoring** (S1) — `coord_2026_05_25_v8_p4_open_latticeterminal_handshake.md` Rosetta → Spock; 8 sections matching `coord_2026_05_17` precedent (Purpose + Context + What-aDNA-will-do + What-LatticeTerminal-is-expected-to-do + Open-questions-resolution-status + Acknowledgment-protocol + Cross-references + Notes-for-Stanley); preserves predecessor by reference; updates `delivery_held_until: operator-acknowledgment` → `delivery_active: 2026-05-25` for active phase.

4. **G2 mid-checkpoint D10 ratification** (S1) — operator AskUserQuestion per Project SO #1 + Campaign SO #19 phase-gates-are-human-gates: confirm D10 repo-strategy path (option 1 aDNA.aDNA hosts / option 2 LatticeTerminal.aDNA hosts [DEFAULT-RECOMMEND per D5 §1+§7] / option 3 separate `LatticeProtocol/lattice-install` repo). D10 outcome locks into Phase-4 contract clause A + cascades to M4.2/M4.3/M4.4 scope.

5. **Phase-4 contract draft authoring** (S1 post-G2) — `m41_phase_4_contract_draft.md` 8 clauses A-H following D5 §7 skeleton; each clause flagged `[STATUS: draft | M4.2-deferred | M4.3-deferred]`; clause A locked with D10 outcome.

6. **Governance bundle close + lightweight AAR** (S1) — campaign master M4.1 row in_progress → completed + D10 row pending → ratified + amendments-table entry + P4 entry timestamp logged + STATE.md Op 3 archive-on-close 22nd canonical instance refresh + Next Session Prompt updated to M4.2 entry; lightweight 5-line AAR (Worked/Didn't/Finding/Change/Follow-up) per SO #5.

**No fresh `.obsidian/` recon at M4.1** — inherited from M3.1 → M3.7 chain. **No cross-vault writes at M4.1** — LatticeTerminal.aDNA + III.aDNA + node.aDNA + 5 forge-vault wrappers + lattice-labs untouched per hard constraints #2 + #3 + #4 + #5 + #6.

## Deliverables (numbered to match Objectives)

1. **D1 — M4.1 mission spec** (this file) — completed at S1; status: in_progress at S1 open; status: completed at S1 close.
2. **D2 — Cross-vault handshake coord memo** at `who/coordination/coord_2026_05_25_v8_p4_open_latticeterminal_handshake.md` — Rosetta → Spock; 8 sections; status: filed at S1; preserves predecessor `coord_2026_05_17` by reference.
3. **D3 — Phase-4 contract draft** at `missions/artifacts/m41_phase_4_contract_draft.md` — 8 clauses A-H; clause A locked with D10 outcome at G2; clauses B-H drafted with `[STATUS: draft | M4.2-deferred | M4.3-deferred]` flags.
4. **D4 — Governance bundle** — campaign master M4.1 row + D10 row + STATE refresh + lightweight AAR; in-place edits.
5. **D5 — LatticeTerminal STATE paired-read synthesis** at `missions/artifacts/m41_latticeterminal_state_synthesis.md` — 8 sections; substrate for D3; identifies major finding (existing skill_install at LatticeTerminal).

## Acceptance criteria

| # | Criterion | Verification |
|---|-----------|--------------|
| 1 | M4.1 mission spec frontmatter has 22+ fields populated; status: in_progress at S1 open; completed at S1 close | `head -70 mission_adna_str_p4_m41_*.md` |
| 2 | D5 synthesis has 8 sections (Headline / Current state / Installer artifacts / ADRs / Coord posture / Blockers / Contract skeleton / Self-reference) | `grep "^## §" m41_latticeterminal_state_synthesis.md` |
| 3 | D5 §1 names the "LatticeTerminal already has working skill_install" finding as headline | grep §1 content |
| 4 | D2 coord memo Rosetta → Spock has 8 sections matching coord_2026_05_17 precedent shape | `grep "^## " coord_2026_05_25_v8_p4_open_*.md` |
| 5 | D2 coord memo preserves predecessor `coord_2026_05_17` by reference (Cross-references section); does NOT overwrite | grep "coord_2026_05_17" in D2 |
| 6 | D3 Phase-4 contract draft has 8 clauses A-H; clause A locks D10 outcome | `grep "^## Clause" m41_phase_4_contract_draft.md` |
| 7 | D3 clauses flagged `[STATUS: draft | M4.2-deferred | M4.3-deferred]` per clause | grep "STATUS" in D3 |
| 8 | D10 row in campaign master Decision Points table flips `pending → ratified`; outcome recorded | `grep -A1 "^| D10" campaign_adna_serious_tool_readiness.md` |
| 9 | Campaign master M4.1 row flips `planned → completed` at S1 close; amendments entry added; P4 entry timestamp logged | `grep "M4.1" campaign_*.md` |
| 10 | STATE.md Op 3 archive-on-close 22nd canonical instance refresh promotes M3.7 block to concise + adds M4.1 S1 block in full form; Next Session Prompt points at M4.2 entry | manual review |
| 11 | Session file moved `active/ → history/2026-05/` at S1 close | `ls how/sessions/active/` empty |
| 12 | Push to origin: HEAD = origin/main (D-PUSH=push-after-S1 authorized per G3) | `git rev-parse HEAD; git rev-parse origin/main` |
| 13 | Cross-vault: `git -C ../LatticeTerminal.aDNA status` clean (zero LatticeTerminal writes per hard constraint #2) | `git -C ../LatticeTerminal.aDNA status -s` empty |
| 14 | Zero ADR authoring at M4.1 (ADR-015 stays forecast in roadmap; no new ADR file created) | `ls what/decisions/adr_*.md \| grep -E "027|028"` empty |

## Hard constraints (12; M3.7's 14 narrowed to M4.1-relevant set)

1. **Zero `.adna/` touches** (v7.0 frozen at `27e6395`; v8 P6 propagation queue grows by ~2-3 doctrinal additions: Phase-4 contract draft clauses A-H as v8 P6 ecosystem-propagation candidates; D10 ratification record; ADR-015 forecast row holds)
2. **Zero LatticeTerminal.aDNA writes** (read-only paired read for D5 synthesis; Spock owns write authority per cross-vault doctrine + LatticeTerminal local-only push discipline)
3. **Zero `node.aDNA/` mutations end-to-end** (M3.7 precedent #13)
4. **Zero `III.aDNA/` touches** (M3.6/M3.7 precedent)
5. **Zero forge-vault wrapper writes** (5 wrappers at v0.3.0: SiteForge + VideoForge + CanvasForge + wga + LPWhitepaper)
6. **Zero `lattice-labs/` writes** (read-only if Berthier coord referenced; no canvas pipeline learnings folded at M4.1)
7. **Zero installer code at M4.1** (deferred to M4.2 packaging ratification + M4.3 co-design implementation)
8. **Zero ADR authoring at M4.1** (Campaign SO #14 default; ADR-015 stays forecast for M4.2; load-bearing in-phase exception NOT triggered because Phase-4 contract draft is design-spec-equivalent and ADR-015 specifies M4.3 installer architecture not Phase-4 contract surface)
9. **Coord memo preservation** (Campaign SO #13; predecessor `coord_2026_05_17` retained — extended, not overwritten; recipient-persona-authority for archive at Spock ack)
10. **Zero `.obsidian/` + `~/.claude/settings.json` + `~/.adna/measurement/measurement.sqlite` + hook mutations** (M3.7 precedent)
11. **Zero `aDNA.aDNA/site/` mutations** (M3.7 precedent; Astro routes stay as-published per M3.5)
12. **Self-reference (SO #8)** — this spec references M3.7 close §6 forward-integration as the authorizing event (25th + 26th tactical invocations in v8 P3+P4 boundary)

## Standing-Order discharges (declared at S1; lightweight AAR at close)

| SO | Discharge | Phase |
|----|-----------|-------|
| P-SO#1 (phase gates) | P3 → P4 phase-exit gate ratified by operator at session-entry AskUserQuestion (path (a)) — discharged BEFORE M4.1 open | S0 |
| P-SO#5 (AAR mandatory) | Lightweight 5-line AAR authored at S1 close per `how/templates/template_aar_lightweight.md` | S1 close |
| P-SO#6 (archive not delete) | Predecessor coord memo `coord_2026_05_17` preserved by reference in D2; M3.7 session files stay in `history/2026-05/`; M4.1 S1 session file moves to history at close | S1 close |
| P-SO#8 (self-reference) | M4.1 spec references M3.7 close §6 forward-integration (25th); D5 synthesis cites cross-vault read pattern as own substrate (26th) | S1 |
| P-SO#11 (per-mission context budget) | `token_budget_estimated` two-metric declared in this frontmatter; `token_budget_actual` reported in AAR | S1 |
| C-SO#13 (cross-vault coord memo preservation) | M4.1 produces 1 outbound coord memo (D2 Rosetta → Spock); preserves predecessor `coord_2026_05_17` by reference | S1 |
| C-SO#14 (in-phase ADR exception) | NOT triggered at M4.1 (Campaign SO #14 default holds; ADR-015 stays forecast for M4.2; Phase-4 contract draft is design-spec-equivalent governance artifact) | S1 |
| C-SO#15 (dispatch where possible) | No external dispatch this session (M4.1 runs locally; cross-vault read via direct file reads, NOT via Carly/Herb validation campaign) | S1 |
| C-SO#17 (mission_class discipline) | `mission_class: reconnaissance` declared in frontmatter | S1 |
| C-SO#19 (phase-exit gate = human gate) | P3 → P4 phase-exit gate operator-ratified at session-entry; no auto-advance | S0 |

## Cross-vault impact

| Direction | Vault | Impact | Read-only? |
|-----------|-------|--------|------------|
| Inbound (read) | `LatticeTerminal.aDNA/` | STATE.md + CLAUDE.md + `what/latticeterminal/install/README.md` paired-read for D5 synthesis; identifies existing skill_install + MC-LAUNCH complete + ADR-019 macOS-first | YES per hard constraint #2 |
| Outbound (notify) | `LatticeTerminal.aDNA/who/coordination/` (logically; via coord memo filed at aDNA side) | D2 coord memo Rosetta → Spock; advance handshake with `delivery_active: 2026-05-25`; Spock receives at next LatticeTerminal session via standard `who/coordination/` scan | aDNA-side write only |
| Inbound (read) | None other vaults at M4.1 | M4.1 is single-partner-vault scope (LatticeTerminal only); III.aDNA + node.aDNA + 5 wrappers + lattice-labs untouched | N/A |

## Cross-mission dependencies

| Dependency | Direction | Source |
|------------|-----------|--------|
| M3.7 close (P3 → P4 gate UNBLOCKED) | Inbound | `missions/mission_adna_str_p3_m37_modular_iii_for_obsidian.md` closed 2026-05-25T16:30Z; 4 of 4 P3 phase-exit bricks |
| M3.6 cross-vault coord pattern 1st instance | Inbound | M3.6 Hermes/CanvasForge airlock AAR; M4.1 advances to 2nd canonical instance |
| `coord_2026_05_17` advance-signal predecessor | Inbound | filed 2026-05-17 at v8 P0 close; `delivery_held_until: operator-acknowledgment`; M4.1 D2 extends with active handshake |
| D10 ratification | Outbound (within session) | Operator AskUserQuestion at G2; outcome locks Phase-4 contract clause A + cascades to M4.2/M4.3/M4.4 |
| M4.2 ADR-015 installer packaging ratification | Outbound | M4.1 Phase-4 contract draft + D10 outcome become input to M4.2; ADR-015 specifies installer architecture against M4.1 contract surface |
| M4.3 co-designed installer authoring | Outbound | M4.1 Phase-4 contract + M4.2 ADR-015 become inputs to M4.3 (installer scripts at D10-determined location) |
| M4.4 cross-platform CI/CD | Outbound | M4.1 contract clauses D + E + F + H become inputs to M4.4 |

## Risks

| Risk | Likelihood | Severity | Mitigation |
|------|------------|----------|------------|
| D10 operator indecision at G2 mid-checkpoint | Low | Medium | Default-recommend = LatticeTerminal hosts per D5 synthesis §1 + §7 (existing skill_install reality); M4.1.5 carve-out per M3.5 D7d precedent if genuine indecision |
| LatticeTerminal STATE.md heavier than expected | Low | Low | Already discovered (193 lines but dense single-file router pre-split); used targeted grep + offset+limit + recon-subagent report instead of full read |
| Token budget exhausts before S1 close | Low | Low | S2 close-cascade per M3.5 precedent; D5 + D3 are independent artifacts that can be deferred to S2 if D2 + D4 + AAR are at risk |
| Phase-4 contract draft mis-scopes M4.x downstream | Low | Medium | Clauses flagged `[STATUS: draft | M4.2-deferred | M4.3-deferred]` per clause; M4.2 ratification owns clause finalization for installer architecture; M4.3 owns implementation scope |
| Spock receives D2 but conflicting M08 charter elevation in flight | Low | Low | M4.1 explicitly notes M08 parallel run (no sequential dependency); D2 cites `delivery_active: 2026-05-25` so Spock prioritizes ack timing |
| Predecessor coord memo `coord_2026_05_17` field `delivery_held_until` becomes ambiguous | Low | Low | M4.1 D2 adds Cross-references section citing predecessor; explicit field update protocol documented in D2 §Acknowledgment-protocol |

## Notes

- **Reconnaissance-class mission shape — 1st canonical instance in v8 P4**: M4.1 is the first reconnaissance-class mission in the v8 campaign (all M3.x missions were implementation-class). Future P4 missions (M4.1.5 carve-out if needed, post-M4.4 retrospective) MAY apply reconnaissance shape; graduates at 3rd canonical instance.
- **Cross-vault coord pattern 2nd canonical instance** — M3.6 (Hermes/CanvasForge airlock AAR) was 1st; M4.1 is 2nd. `skill_cross_vault_coord_handshake.md` SEED CANDIDATE advances 1 → 2 of 3 post-M4.1 close.
- **D5 paired-read synthesis substrate-gathering** — uses targeted grep + offset+limit + recon-subagent dispatch per ADR-016 Clause B Heavy-File Read convention; **3rd canonical instance of substrate-gathering-subagent-dispatch pattern** (M3.6 1st + M3.7 2nd + M4.1 3rd → `skill_substrate_gathering_subagent_dispatch.md` GRADUATES at 3rd instance per ≥ 3 instances rubric); to be confirmed in AAR.
- **Standing Order #8 self-reference 25th + 26th tactical invocations** in v8 — M4.1 spec references M3.7 close §6 forward-integration as authorizing event (25th); D5 synthesis cites cross-vault read pattern as own substrate (26th).
- **Op 3 archive-on-close pattern 22nd canonical instance** at S1 close STATE refresh; `skill_campaign_close_archive.md` graduation candidate at **7.3× margin** over ≥ 3 threshold (M3.7 was 21st = 7×).
- **v8 P6 propagation queue projected growth**: ~32-37 (current post-M3.7) → ~34-40 at M4.1 close (adding Phase-4 contract draft clauses A-H upstream-promotion candidates + D10 ratification record). v8 P6 owns the upstream cycle.
- **P4 mission cadence forecast**: M4.1 (1 session) → M4.2 ADR-015 ratification (1-2 sessions) → M4.3 installer authoring (3-4 sessions; multi-session implementation-class) → M4.4 CI/CD (2-3 sessions). P4 total ~7-10 sessions per campaign master line 188-189 + risk register Phase 4 timing estimate.
- **D11 + D12 pending decisions (campaign master lines 229-230)**: D11 = research mission pairing strategy (P5 entry; not M4.x); D12 = v8.0 tag location (P6 entry; not M4.x). M4.1 does NOT touch these.

## Mission Close Notes (S1 close cascade 2026-05-25T18:00Z)

**Closed**: 2026-05-25T18:00Z at `session_stanley_20260525T173553Z_v8_m41_s1` (single-session reconnaissance-class close; lighter than M3.6/M3.7 implementation-class 2-session shape per planned shape).

**Cumulative deliverables (5/5 LIVE)**:
1. ✅ **D1 — M4.1 mission spec** (this file) — `status: in_progress` at S1 open 2026-05-25T17:35Z → `status: completed` at S1 close 2026-05-25T18:00Z; 22 frontmatter fields populated; mission_class=reconnaissance; deliverables_count=5; estimated_sessions=1
2. ✅ **D2 — Cross-vault handshake coord memo** — `who/coordination/coord_2026_05_25_v8_p4_open_latticeterminal_handshake.md`; Rosetta → Spock; 8 sections matching `coord_2026_05_17` precedent shape; `urgency: action_requested`; `delivery_active: 2026-05-25`; preserves predecessor by reference per Campaign SO #13
3. ✅ **D3 — Phase-4 contract draft** — `missions/artifacts/m41_phase_4_contract_draft.md`; 8 clauses A-H; clause A LOCKED via D10 ratification (aDNA hosts unified installer); clauses B-H drafted with `[STATUS: draft | M4.2-deferred | M4.3-deferred]` flags
4. ✅ **D4 — Governance bundle** — campaign master M4.1 row `planned → completed` + D10 row `pending → ratified` (line 228) + amendments-table entry appended + STATE.md Op 3 archive-on-close 22nd canonical instance refresh + Next Session Prompt updated to point at M4.2 entry
5. ✅ **D5 — LatticeTerminal STATE paired-read synthesis** — `missions/artifacts/m41_latticeterminal_state_synthesis.md`; 8 sections; substrate for D3; major finding: existing LatticeTerminal `skill_install` shifts M4.x framing

**Pattern dispositions** (full pattern graduation block in AAR-equivalent lightweight 5-line at session SITREP):
- 1 GRADUATES: `skill_substrate_gathering_subagent_dispatch.md` at 3rd canonical instance (M3.6 1st + M3.7 2nd + M4.1 3rd; per ≥ 3 instances rubric; skill file authoring deferred per D-GRAD pattern)
- 1 NEW SEED: `skill_cross_vault_coord_handshake.md` at 2 of 3 instances (M3.6 1st + M4.1 2nd; graduates at 3rd instance if M4.3 co-design applies)
- 1 NEW SEED: `skill_reconnaissance_class_mission_shape.md` at 1 of 3 instances (M4.1 1st canonical; future P4/P5/P6 reconnaissance-class missions advance)
- 6 reinforcements: skill_design_spec_authoring (this mission spec inherits 22-field frontmatter discipline; post-graduation reinforcement 15/3+); skill_campaign_close_archive (Op 3 22nd canonical instance; post-graduation reinforcement 22/3+ at 7.3× margin); skill_two_session_close_cascade HOLD 2/3 (M4.1 single-session by design); skill_in_phase_adr_ratification HOLD 5/3+ (M4.1 zero ADR per Campaign SO #14 default); skill_implementation_mission_close HOLD 4/3+ (M4.1 is reconnaissance-class not implementation); skill_forward_reference_stub_design HOLD 11/3+ (M4.1 no design spec section)
- 0 invariant violations

**Hard constraints**: all 12 honored end-to-end (zero `.adna/` + LatticeTerminal.aDNA writes + node.aDNA + III.aDNA + forge-vault wrappers + lattice-labs writes + installer code at M4.1 + ADR authoring at M4.1 + `.obsidian/` + `~/.claude/settings.json` + `~/.adna/measurement/measurement.sqlite` + hook + `aDNA.aDNA/site/` touches; predecessor `coord_2026_05_17` preserved by reference; Standing Order #8 25th + 26th tactical invocations applied).

**D10 RATIFIED 2026-05-25T~17:55Z (M4.1 S1 G2 mid-checkpoint)** = **aDNA.aDNA hosts unified installer** at `aDNA.aDNA/how/skills/install/` (canonical); upstream-promoted to `.adna/` template at v8 P6; LatticeTerminal M1.1 `skill_install` becomes logic precedent (lift verbatim default at M4.3 per Q6 in D2 coord memo §6); LatticeTerminal launcher binary at `what/latticeterminal/launcher/` consumed as build artifact per ADR-005 standalone-deployable.

**M4.1 close UNBLOCKS M4.2** — ADR-015 installer packaging + distribution ratification (next P4 mission); gated on Spock ack of D2 coord memo at `who/coordination/coord_2026_05_25_v8_p4_open_latticeterminal_handshake.md`. Phase-4 contract clauses A + B + E + F load-bearing for ADR-015. Operator override per Campaign SO #19 if ack delays beyond M4.2 ratification window (not recommended).

**See**: D2 coord memo + D3 Phase-4 contract draft + D5 LatticeTerminal STATE synthesis for full cross-vault handshake context.

## Lightweight AAR (5-line per project SO #5)

- **Worked**: Substrate-gathering subagent dispatch at session entry (2 parallel Explore agents) returned ~3700-word synthesis covering LatticeTerminal state + M3.x shape exemplars + coord memo precedent + ADR-015 forecast — enabled D5 + D1 + D2 + D3 authoring without re-reading source files; D5 paired-read discovered the major finding (existing LatticeTerminal `skill_install`) which shifted M4.x framing.
- **Didn't**: LatticeTerminal STATE.md single-file router exceeded Read tool limit (~70K tokens) — direct `awk` extracts also too heavy; pivoted to targeted `grep` + `install/README.md` direct read + recon-subagent report consumption. Reconnaissance-class shape was previously unnamed in v8 (1st canonical instance now seeded).
- **Finding**: The single most consequential discovery in v8 P4 — LatticeTerminal already has working `skill_install` at `what/latticeterminal/.claude/skills/skill_install/SKILL.md` (M1.1 close 2026-05-18; Spacemacs-style bash-in-markdown; macOS-first per ADR-019; Ghostty + tmux + Claude Code + telemetry; BACKEND-MATRIX-pinned) — operator chose D10 = aDNA hosts unified (option 2 in AskUserQuestion); M4.3 absorbs M1.1 logic into the aDNA-canonical skill (lift verbatim default).
- **Change**: Phase 4 architecture pivots from "author installer from scratch" to "federate existing LatticeTerminal installer + extend with workspace-bootstrap layer at aDNA canonical home". D10 ratification locks installer repo location → cascades to M4.2 ADR-015 + M4.3 implementation + M4.4 CI/CD scope.
- **Follow-up**: M4.2 ADR-015 installer packaging ratification (1-2 sessions; gated on Spock ack of D2 coord memo at next LatticeTerminal session). 9 D-GRAD skill authoring backlog grows by `skill_substrate_gathering_subagent_dispatch.md` GRADUATES + `skill_cross_vault_coord_handshake.md` SEED + `skill_reconnaissance_class_mission_shape.md` SEED. Spock signoff gate at M4.2 ratification per Phase-4 contract clause G.

**Token-budget two-metric** (per ADR-016 Clause C empirical formula):
- **Estimated** (frontmatter): S1 ~80-110 kT content-load; ~5-6 M cache_read at 8-10 turns + ~340-360 K cache_creation API-billing
- **Actual** (~10-12 turns; large STATE.md edits + 5 fresh deliverable file creates): ~110-140 kT content-load (within ~30% of estimate band per Standing Order #11; drift not > 2× retrospective trigger threshold)

