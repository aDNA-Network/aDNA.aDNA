---
type: mission
mission_id: mission_adna_str_p3_m32_obsidian_stabilization_extension
campaign: campaign_adna_serious_tool_readiness
phase: 3
mission_number: 3.2
slug: obsidian_stabilization_extension
created: 2026-05-21
updated: 2026-05-22
status: completed
opens_at: 2026-05-21T13:52:58Z
opened_session: session_stanley_20260521T135258Z_v8_m32_s1
closed_at: 2026-05-22T19:31:32Z
closed_session: session_stanley_20260522T193132Z_v8_m32_s3
estimated_sessions: 3   # canonical 3-session implementation-class shape — 7th instance candidate after M1.3 + M1.4 + M2.1 + M2.3 + M2.4 + M3.1
actual_sessions: 3   # canonical 3-session implementation-class shape — 7th instance RATIFIED at S3 close with S3-with-carry sub-mode (banner Deliverable 7 absorbed)
persona: rosetta
last_edited_by: agent_stanley
spec_completeness: complete   # S1 authored spec; S2 landed T3+T4 design-spec content + new skill; S3 close landed AAR + close cascade + banner propagation S3 carry as Deliverable 7
mission_class: implementation   # T3+T4 design specs + proposed-patch artifacts + NEW skill_obsidian_canonicalize.md authoring; design at P3, propagation at P6; S3-with-carry sub-mode for banner Deliverable 7
token_budget_estimated: "S1 ~80-110 kT content-load (M3.1 spec template digestion + 4 backlog reads F-S2-2/5/6/7 + absorbed-campaign tracks 3+4 + mission spec auth + campaign master amendments + STATE router refresh + session file) + S2 ~140-180 kT (T3 design spec + T4 combined design spec covering F-S2-5+6+7 + NEW skill_obsidian_canonicalize.md authoring + possibly minimal docs-drift carry-over) + S3 ~70-100 kT (AAR + STATE Op 3 11th canonical instance + campaign master close + 3 session moves). Three-session total ~290-390 kT (lighter than M3.1 ~300-400 because no Obsidian recon-audit at M3.2 — M3.1 captured that; S2 heavier because 3 deliverables incl. new skill vs M3.1 S2's 3 design-spec-only deliverables). API-billing companion per ADR-016 Clause C empirical formula (`cache_creation ≈ 328 K + turns × 1 K`; `cache_read ≈ 4.1 M + turns × 126 K`): S1 ~11-15 M cache_read at 6 turns; S2 ~13-17 M cache_read at 7 turns; S3 ~10-14 M cache_read at 5 turns; total ~34-46 M cache_read across the 3-session arc. Per ADR-016 Clause A + Project Standing Order #11; declared in mission frontmatter per Standing Order #8 self-reference (M3.2 declares its own budget per the field ADR-016 Clause A ratified)."
tags: [mission, m3_2, v8, p3, obsidian_stabilization, extension, t3_plugin_binary_install_validation, t4_obsidian_config_canonicalization, canonical_3_session_implementation_shape_7th_instance_candidate, obsidian_stab_absorbed_t3_t4, north_star_easy_fluid_context_graphs, design_at_p3_propagation_at_p6_pattern, new_skill_obsidian_canonicalize, rosetta]
prerequisite_missions:
  - mission_adna_str_p2_m21_context_audit_split             # closed; STATE.md split + Heavy-File Read Convention
  - mission_adna_str_p2_m22_per_mission_budget              # closed; ADR-016 LIVE
  - mission_adna_str_p2_m23_convergence_validation          # closed; ADR-016 Clause C empirical
  - mission_adna_str_p2_m23_5_push_readiness_review         # closed; planning-class single-session shape 3rd instance + 12-item checklist template
  - mission_adna_str_p2_m24_agents_md_heatmap               # closed; 7-item invariants spec + AGENTS.md UNDER-LOADED finding
  - mission_adna_str_p2_m245_agents_md_bulk_edit            # closed; 12-file AGENTS.md hardened + measurement-cycle contract
  - mission_adna_str_p3_m31_obsidian_stabilization_core     # closed; T1+T2 design specs + design-at-P3-propagation-at-P6 pattern ratified + 6-section design-spec structure ratified
prerequisite_artifacts:
  # M3.1-ratified pattern + structure (verbatim inheritance)
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p3_m31_obsidian_stabilization_core.md  # template + closed predecessor
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m31_obj3_t1_design_spec.md  # 6-section design-spec structure (minimum shape ~17 KB)
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m31_obj4_t2_design_spec.md  # 6-section design-spec structure (extended shape ~20 KB) + `--reset-layout` forecast for T4 absorption
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_m31_obsidian_stabilization_core.md  # PRIMARY load-bearing finding (design-at-P3) + STRONG-EXTENDED finding (proposed-patch artifact format)
  # absorbed-campaign substrate (read at S1 recon)
  - aDNA.aDNA/how/campaigns/campaign_obsidian_deployment_stabilization/campaign_obsidian_deployment_stabilization.md  # 8-track scope T1-T8 (Tracks 3+4 = this mission)
  - aDNA.aDNA/how/campaigns/campaign_obsidian_deployment_stabilization/CLAUDE.md                                      # campaign-specific standing orders
  - aDNA.aDNA/how/backlog/backlog_F_S2_2_config_binary_asymmetry.md                                                # T3 finding-specific routing (config-binary asymmetry; silent failure)
  - aDNA.aDNA/how/backlog/backlog_F_S2_5_obsidian_json_normalization.md                                            # T4 sub-finding: Obsidian normalizes tracked .obsidian/*.json on open
  - aDNA.aDNA/how/backlog/backlog_F_S2_6_nn_data_json_not_shipped.md                                                # T4 sub-finding: NN plugin data.json (triad colors) not shipped
  - aDNA.aDNA/how/backlog/backlog_F_S2_7_template_placeholder_tags.md                                              # T4 sub-finding: template-tag pollution (.obsidianignore extension)
  # v8 P2 doctrinal carries (same as M3.1)
  - aDNA.aDNA/what/decisions/adr_016_per_mission_context_budget.md                                                  # Clause A two-metric budget + Clause B Heavy-File + Clause C empirical
  - aDNA.aDNA/what/decisions/adr_022_tool_use_logging.md                                                            # PostToolUse hook contract
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m245_obj3_measurement_contract.md # M3.x re-measurement trigger conditions (≥ 20-session corpus)
  - "/Users/stanley/lattice/node.aDNA/what/context/token_baselines.md v0.1.3 Appendix B"                              # AGENTS.md invariants spec
deliverables_count: 7   # 1 mission spec + 1 governance bundle (S1) + 1 T3 design spec + 1 T4 design spec + 1 NEW skill_obsidian_canonicalize.md (S2) + 1 close cascade (AAR + STATE + campaign master + session moves) + 1 BANNER PROPAGATION S3 CARRY (Deliverable 7 absorbed per S3-with-carry sub-mode — aDNABanner.png across Astro hero + README + canonical mirror + Playwright Gate 11)
phase_authorization: "P3 already open via M3.1 S1 entry 2026-05-21T02:34:03Z; M3.2 inherits P3 status. Operator-authorized M3.2 opening at this session 2026-05-21T13:52:58Z (via plan ratification at `/Users/stanley/.claude/plans/please-read-the-claude-md-jazzy-sifakis.md` + operator AskUserQuestion answer 'Open M3.2 (T3+T4)'); recorded in campaign master amendments-table at S1 open per Project SO #1 + Campaign SO #19 (mission opens are operator-decision under phase-gates-are-human-gates doctrine even within an open phase)"
hard_dependency_satisfied: "M3.1 closed 2026-05-21T07:28:03Z+ at session_stanley_20260521T072803Z_v8_m31_s3 (HEAD `1ed4758`); M3.1 close UNBLOCKS M3.2 per campaign master Phase 3 table line 164 (M3.2 dependency = M3.1). 6/6 M3.1 deliverables LIVE (T1 + T2 design specs + docs-drift fix bundle + decision-surface backlog idea + M3.0.5 forecast row + AAR + close cascade). Design-at-P3-propagation-at-P6 pattern ratified as canonical for absorbed-upstream-work. 6-section design-spec structure ratified as `aDNA.aDNA/missions/artifacts/` first-class deliverable type. v7.0 frozen at `LatticeProtocol/aDNA@27e6395`; HEAD 11 commits ahead of origin/main + this S1 commit = 12 ahead post-S1. M2.1.5 retroactive Op 3 stays `planned-optional`; M3.0.5 stays `planned-stub`."
---

# M3.2 — Obsidian Deployment Stabilization Extension (T3 + T4)

> **Mission produces**: (a) **T3 design spec** — `setup.sh --verify` mode + `skill_node_health_check.md` integration proposed-patch artifacts (plugin-binary install validation; closes silent-failure mode); (b) **T4 design spec** — combined canonicalization spec covering F-S2-5 (Obsidian json normalization drift) + F-S2-6 (NN plugin `data.json` triad colors not shipped) + F-S2-7 (`.obsidianignore` extension for `how/templates/`); proposed-patch artifacts for `.adna/` plugin data.json shipping + `.obsidianignore` extension; (c) **NEW skill** `aDNA.aDNA/how/skills/skill_obsidian_canonicalize.md` — full skill authoring with modes `--canonicalize` / `--reset-layout` / `--verify` (absorbs T2's `--reset-layout` flag forecast as a sub-mode); (d) **AAR + close cascade** — campaign master M3.2 row + amendments entry + STATE.md Op 3 11th canonical instance refresh + session moves.
>
> **Why now**: M3.1 closed 2026-05-21T07:28:03Z with the design-at-P3-propagation-at-P6 pattern ratified + 6-section design-spec structure ratified as first-class deliverable type. M3.2 is the natural P3 next mission per campaign master Phase 3 table line 164 (`M3.2 | Plugin-binary install validation (T3) + Obsidian config canonicalization (T4) | 2-3 | M3.1 | planned`). M3.2 close becomes the 2nd of 4 P3 phase-exit bricks (M3.2 + M3.3 + M3.4 + M3.5 needed before P3 → P4 phase-exit per Campaign SO #19).
>
> **Design at P3, propagation at P6 — pattern inherited verbatim from M3.1**: T3+T4 finding texts call for `.adna/` upstream commits (T3 = `setup.sh --verify` mode; T4 = NN data.json shipping + `.obsidianignore` extension). v8 P2-P5 hard constraint forbids `.adna/` touches. **Resolution** (inherited): M3.2 produces design specs + proposed-patch artifacts as aDNA.aDNA-resident files (under `missions/artifacts/`); the NEW skill `skill_obsidian_canonicalize.md` itself lives in `aDNA.aDNA/how/skills/` (not upstream — per F-S2-5 backlog §Critical files); v8 P6 owns the upstream cycle that lands those patches as the v8.0 ecosystem propagation. **v8 P6 propagation queue grows from 7 → 9-10 at M3.2 close** (adding T3 setup.sh --verify patch + T4 `.adna/` patches; possibly +1 if NN data.json ships as 6th-instance additive-upstream candidate after T1's 5th-instance).
>
> **Self-reference (Standing Order #8 — 13th tactical invocation candidate in v8)**: M3.2's new `skill_obsidian_canonicalize.md` IS the operational consumer of the M2.4.5-hardened `how/skills/AGENTS.md` routing layer — the skill drop is the FIRST behavioral test of whether the M2.4.5 discoverability re-frame works for new-skill drops (vs deep-file cold loads). Pattern across 13 v8 instances: each governance-synthesis mission folds its own measurement / verification / artifact into the doctrine it produces. M3.2 also continues M3.1's design-spec mission lineage: M3.2 design specs follow the 6-section structure that M3.1 AAR ratified as canonical — the spec ratifies its own predecessor's STRONG-EXTENDED finding.
>
> **North-star alignment**: The v8 campaign's strategic intent — *"easy and fluid way to build/operate/utilize context graphs"* — is operator-stated 2026-05-13 + saved to memory (`project_adna_lattice_ux_goal.md`). M3.2 directly serves this goal: T3 closes the silent-failure mode (empty Obsidian navigation without warning when plugin binaries missing — operator can't tell broken from not-installed); T4 closes the drift problem (operator can re-canonicalize against upstream on demand instead of accepting unbounded `.obsidian/*.json` drift). Both serve the day-1 forked-vault UX trustworthiness.

## Mission scope

Consume the M3.1 design-spec template + ratified design-at-P3-propagation-at-P6 pattern + 6-section structure + absorbed-campaign Tracks 3+4 + 4 finding-specific backlog files (F-S2-2 + F-S2-5 + F-S2-6 + F-S2-7) to:

1. **Mission spec authoring + design-spec template digestion** (S1) — read M3.1 mission spec verbatim as structural template; read M3.1 T1+T2 design specs as 6-section template references; read F-S2-2 + F-S2-5 + F-S2-6 + F-S2-7 backlog files (T3+T4 finding-specific routing notes) + absorbed-campaign Tracks 3+4 sections; distill into mission spec frontmatter + Objectives + Scope + Acceptance + Hard constraints + Standing-Order discharges. **No fresh Obsidian recon-audit at M3.2** — M3.1 captured the recon at 2026-05-21T02:34Z (10 parallel reads; .obsidian/* inventory); M3.2 inherits that recon and only deltas the T3+T4 substrate.
2. **Author T3 design spec** (S2) — `setup.sh --verify` mode (5th-instance additive-upstream pattern continued — actually plausibly a 6th instance after T1's 5th, but plausibly compressed with T1 into a single P6 commit; design spec ratifies); proposed-patch artifact at `missions/artifacts/m32_obj3_t3_design_spec.md` containing 6 sections per ratified structure: (a) finding statement (config-binary asymmetry: `community-plugins.json` enables plugins but doesn't auto-download binaries; missing binaries cause silent empty navigation with no warning), (b) root-cause analysis (Obsidian's security-conscious design: no auto-fetch from GitHub releases; setup.sh handles install but failure modes are silent), (c) ≥ 3 option matrix (Option 1: `setup.sh --verify` mode + exit code; Option 2: `skill_node_health_check.md` sub-check; Option 3: fork-time post-fork-message verify gate in `skill_project_fork.md`; Option 4: all 3 layered per F-S2-2 §Proposed approaches recommendation), (d) recommended option + rationale (Option 4 layered per F-S2-2 default; primitive → integration → fork-time gate), (e) literal patch text for `.adna/setup.sh` (`--verify` mode ~30 LOC bash) + `.adna/how/skills/skill_node_health_check.md` (verify sub-check integration) + optional `.adna/how/skills/skill_project_fork.md` (post-fork message), (f) v8 P6 propagation contract (single-commit-per-patch OR bundled with T1+T2; operator-decision at v8 P6 entry).
3. **Author T4 design spec** (S2) — combined canonicalization spec covering F-S2-5 + F-S2-6 + F-S2-7 sub-findings (D1 default per plan §D1 = A combined; alternative B = 3 separate specs deferred to operator override at plan ratification); proposed-patch artifact at `missions/artifacts/m32_obj4_t4_design_spec.md` containing 6 sections per ratified structure: (a) finding statement (3-sub: Obsidian normalizes tracked `.obsidian/*.json` on open + NN plugin `data.json` triad colors not shipped + template tags pollute graph via lack of `.obsidianignore` extension), (b) root-cause analysis (Obsidian's canonical-config serialization differs from on-disk authored form; setup.sh ships `plugins/<id>/` but not all plugins' `data.json` defaults; templater folder is graph-indexed by default), (c) ≥ 4 option matrix (Option 1: skill_obsidian_canonicalize.md unified primitive [recommended per F-S2-5 §Proposed approaches]; Option 2: stop tracking `.obsidian/*.json`; Option 3: split `.obsidian-template/` read-only + `.obsidian/` gitignored; Option 4: per-vault setup.sh post-install custom-canonicalize), (d) recommended option + rationale (Option 1 unified skill per F-S2-5 default; absorbs T2's `--reset-layout` as sub-mode per plan §D3 + §D2; ratifies new-skill drop as M3.2 implementation deliverable), (e) literal patch text for `aDNA.aDNA/how/skills/skill_obsidian_canonicalize.md` (NEW skill spec — see Objective 5) + `.adna/setup.sh` (post-install canonicalize block; plugin-data shipping for NN) + `.adna/.obsidianignore` (template-tag exclusion for `how/templates/`), (f) v8 P6 propagation contract (NN data.json potentially as 6th-instance additive-upstream candidate; `.obsidianignore` as additive-non-breaking upstream patch; setup.sh canonicalize block as feature-flagged opt-in).
4. **Author NEW skill `skill_obsidian_canonicalize.md`** (S2) — full skill authoring (not stub) at `aDNA.aDNA/how/skills/skill_obsidian_canonicalize.md` per F-S2-5 §Critical files (skill lives in `aDNA.aDNA/how/skills/`, not `.adna/`). Skill API: 3 modes (`--canonicalize` reads upstream + diffs + offers re-canonicalize with operator-local-override preservation via delta-aware merge; `--reset-layout` absorbed from T2 forecast — forces `cp workspace.default.json workspace.json`; `--verify` absorbed from T3 design — reads `community-plugins.json` + checks plugin binaries). Skill modeled on `skill_node_health_check.md` + `skill_workspace_upgrade.md` patterns. Self-reference Standing Order #8 13th tactical invocation candidate.
5. **Apply minimal docs-drift carry-over if needed** (S2; optional) — if M3.2 S2 reads of `.obsidian/OBSIDIAN_CLAUDE.md` (post-M3.1 docs-drift fix at v8 HEAD `b82b542`) surface any drift specifically related to T3+T4 forecast (e.g., T3 verify-mode mention, T4 canonicalize mention), apply minimal Edit. **Probable scope**: ZERO additional edits — M3.1 S2 docs-drift fix bundle was comprehensive for D1+D2+D3+ frontmatter+ Settings Search row. **Discovery treatment** if drift surfaces: flag as M3.3+ scope; do not expand M3.2 scope mid-mission.
6. **Close mission + refresh governance** (S3) — AAR at `missions/artifacts/aar_m32_obsidian_stabilization_extension.md` (lightweight 5-line + extended findings + acceptance scorecard + Standing-Order discharge + token-budget two-metric table); campaign master M3.2 row `in_progress → completed` + amendments-table entry; STATE.md router Op 3 archive-on-close 11th canonical instance refresh; 3 session files `active/` → `history/2026-05/`.

Canonical 3-session implementation-class shape — **7th instance candidate** after M1.3 + M1.4 + M2.1 + M2.3 + M2.4 + M3.1. S1 non-destructive (mission spec auth + STATE refresh) → S2 destructive within aDNA.aDNA (T3+T4 design specs + NEW skill authoring) → S3 non-destructive consolidation (AAR + campaign master close + session moves). Sub-pattern: M3.2 extends M3.1's design-spec-only S2 to also include a new-skill drop (3 destructive landings vs M3.1 S2's 3 design-spec-only landings) — testing whether the 3-session shape stays canonical when S2 mixes design specs with implementation artifacts.

## Objectives

### 1. Mission spec authoring + design-spec template digestion (S1)

- **Status**: in_progress (S1; this file)
- **Session**: S1
- **Read**: M3.1 mission spec (template; ~328 lines); M3.1 T1+T2 design specs (6-section reference); M3.1 AAR (PRIMARY + STRONG-EXTENDED findings); F-S2-2 + F-S2-5 + F-S2-6 + F-S2-7 backlog files (finding-specific routing); absorbed campaign `campaign_obsidian_deployment_stabilization.md` Tracks 3+4 sections; plan file (`please-read-the-claude-md-jazzy-sifakis.md`).
- **Produce**: this file (frontmatter + Objectives + Scope + Acceptance + Hard constraints + Standing-Order discharges + §Improvements classification table + Cross-vault impact + Cross-Mission Dependencies + Self-reference + Risks + Notes).
- **Depends on**: M3.1 close (done); operator M3.2 opening authorization (done at plan ratification).

### 2. Campaign master M3.2 row flip + amendments entry (S1)

- **Status**: pending S1
- **Session**: S1
- **Read**: campaign master `campaign_adna_serious_tool_readiness.md` Phase 3 table (current line 164 row state + amendments-table tail).
- **Produce**:
  1. M3.2 row flipped `planned → in_progress` at line 164 with opened_at + opened_session fields
  2. Amendments-table 2026-05-21 entry capturing M3.2 S1 OPENED + canonical 7th-instance candidate + design-at-P3-propagation-at-P6 inheritance + Standing Order #8 13th invocation candidate + Op 3 10th canonical instance applied at STATE refresh
- **Depends on**: 1.
- **Acceptance**: campaign master M3.2 row visible as `in_progress`; amendments-table has fresh 2026-05-21 entry coherent with M3.1 S1 OPENED entry format.

### 3. T3 design spec — plugin-binary install validation (S2)

- **Status**: pending S2
- **Session**: S2
- **Read**: F-S2-2 backlog (finding statement + 3-option matrix); `.adna/setup.sh` (230 lines); `.adna/how/skills/skill_node_health_check.md` (verify sub-check integration point); `.adna/how/skills/skill_project_fork.md` (optional fork-time gate at end-of-fork message); M3.1 T1 design spec (6-section template).
- **Produce**: `missions/artifacts/m32_obj3_t3_design_spec.md` with 6 sections per Mission scope §2.
- **Depends on**: 1, 2.
- **Acceptance**: design spec contains literal patch-style diff for `setup.sh` + `skill_node_health_check.md` + optional `skill_project_fork.md`; option-matrix table with ≥ 3 options; v8 P6 propagation contract names exact upstream-cycle entry condition + verification expectation; cross-links to F-S2-2 backlog + M3.1 T1 design spec template.

### 4. T4 design spec — Obsidian config canonicalization (combined F-S2-5+6+7) (S2)

- **Status**: pending S2
- **Session**: S2
- **Read**: F-S2-5 + F-S2-6 + F-S2-7 backlog files; `.adna/setup.sh:175-184` (workspace-copy block; reference for canonicalize block placement); `.adna/.obsidianignore` if exists (else propose creation); current `.obsidian/*.json` (ground-truth for canonicalization deltas); M3.1 T2 design spec (extended 6-section template).
- **Produce**: `missions/artifacts/m32_obj4_t4_design_spec.md` with 6 sections per Mission scope §3 (combined coverage of F-S2-5+6+7 sub-findings; D1 default).
- **Depends on**: 1, 2, 3 (T3 design spec sets the 6-section template that T4 follows).
- **Acceptance**: design spec contains literal patch-style diff for `aDNA.aDNA/how/skills/skill_obsidian_canonicalize.md` (NEW skill content forward-reference to Obj 5) + `.adna/setup.sh` (post-install canonicalize block) + `.adna/.obsidianignore` (template-tag exclusion); option-matrix with ≥ 4 options; T2 `--reset-layout` absorption explicitly cross-cut hooked; 6th-instance additive-upstream candidacy assessed for NN data.json shipping.

### 5. NEW skill `skill_obsidian_canonicalize.md` authoring (S2)

- **Status**: pending S2
- **Session**: S2
- **Read**: F-S2-5 backlog §Critical files (skill location = `aDNA.aDNA/how/skills/skill_obsidian_canonicalize.md`); `.adna/how/skills/skill_node_health_check.md` (similar pattern; node-health primitive); `.adna/how/skills/skill_workspace_upgrade.md` (workspace upgrade primitive; similar invocation pattern); `aDNA.aDNA/how/skills/AGENTS.md` (M2.4.5-hardened routing layer for skills).
- **Produce**: NEW `aDNA.aDNA/how/skills/skill_obsidian_canonicalize.md` — full skill spec with frontmatter (type/created/updated/last_edited_by/tags) + skill API (3 modes: `--canonicalize` / `--reset-layout` / `--verify`) + invocation contract + safety preconditions + delta-aware merge protocol for canonicalize mode + acceptance per mode + consumer expectations + cross-references to T3+T4 design specs.
- **Depends on**: 3, 4 (T3+T4 design specs define the skill API surface).
- **Acceptance**: skill file has full frontmatter; ≥ 3 modes documented (`--canonicalize`, `--reset-layout`, `--verify`); operator-local-override preservation explicitly addressed in canonicalize mode (delta-aware merge); cross-links to ≥ 3 prior skills + 2 design specs.

### 6. AAR + close cascade (S3)

- **Status**: pending S3
- **Session**: S3
- **Read**: this mission file (S3 final state); S1 + S2 session files (SITREP synthesis); 3 S2 artifact files (T3 + T4 design specs + new canonicalize skill).
- **Produce**:
  1. `missions/artifacts/aar_m32_obsidian_stabilization_extension.md` — lightweight 5-line + extended findings (load-bearing? — TBD at S3; PRIMARY candidate: *3-session shape stays canonical across spec-only AND spec+skill missions*; STRONG-EXTENDED candidate: *new-skill drops are the first behavioral test of M2.4.5 routing-layer discoverability for the M3.x cohort*) + 6/6 acceptance scorecard + Standing-Order discharge table + token-budget two-metric table with API-billing companion per Project SO #11
  2. This mission file frontmatter `in_progress → completed` + `closed_at` + `closed_session` + `actual_sessions` + deliverables marked landed
  3. Campaign master M3.2 row `in_progress → completed` + amendments-table entry at S3 close (per M3.1 / M2.4.5 / M2.4 / M2.1 / M2.2 / M1.5 / M2.3 / M2.3.5 amendments-at-close precedent)
  4. STATE.md (router) Op 3 archive-on-close 11th canonical instance refresh — demote M3.1 CLOSED bullet to concise form (further concise; M3.1 was demoted to single bullet at M3.2 S1 open); new M3.2 CLOSED top bullet; refresh Next Steps + Last Session block + Next Session Prompt; maintain ≤ 20 kT cap
  5. 3 session files (S1 + S2 + S3) moved `active/` → `history/2026-05/` at S3 commit
- **Depends on**: 2 + 3 + 4 + 5.
- **Acceptance**: AAR has all required sections; campaign master state coherent; STATE.md router ≤ 20 kT; 3 session files in history/.

## Deliverables

| # | Deliverable | Session | Status |
|---|---|---|---|
| 1 | M3.2 mission spec (this file) | S1 | ✅ landed S1 |
| 2 | Campaign master M3.2 row flip + amendments entry + STATE.md router refresh (governance bundle) | S1 | ✅ landed S1 |
| 3 | `m32_obj3_t3_design_spec.md` — T3 plugin-binary install validation | S2 | ✅ landed S2 |
| 4 | `m32_obj4_t4_design_spec.md` — T4 combined Obsidian config canonicalization (F-S2-5+6+7) | S2 | ✅ landed S2 |
| 5 | NEW `aDNA.aDNA/how/skills/skill_obsidian_canonicalize.md` — full skill (3 modes: `--canonicalize` / `--reset-layout` / `--verify`) | S2 | ✅ landed S2 |
| 6 | AAR + campaign master close + STATE.md refresh + session moves | S3 | ✅ landed S3 |
| 7 | **BANNER PROPAGATION S3 CARRY** — `aDNABanner.png` across canonical root + `site/src/assets/` + `what/assets/` + Astro `index.astro` import + alt text refresh + README banner image prepend + Playwright Gate 11 (`tests/gates/gate-11-hero-banner.spec.ts`) PASS 4/4 + Astro build (10 image variants generated) + screenshot evidence at `site/evidence/hero_banner/hero_banner.png` + GitHub social-preview manual step documented for operator | S3 | ✅ landed S3 (S3-with-carry sub-mode — 5-criteria gate SATISFIED) |

## Current State — inherited from M3.1 recon-audit (no fresh recon at M3.2)

M3.1 captured the `.obsidian/` recon-audit at 2026-05-21T02:34Z (10 parallel reads; .obsidian/* inventory; 3 documentation drift findings D1+D2+D3 resolved at M3.1 S2). M3.2 inherits that recon and notes only T3+T4-specific deltas. Last `.obsidian/` mutation: M3.1 S2 docs-drift fix bundle 2026-05-21T~05:04Z (HEAD `b82b542`).

### T3+T4 substrate deltas (additive to M3.1 recon)

| Sub-area | M3.1 finding | T3/T4 delta needed |
|---|---|---|
| **Plugin install state** (T3) | 15 plugins listed in `community-plugins.json`; M3.1 didn't verify binaries | T3 design spec defines `setup.sh --verify` mode for binary-vs-enabled cross-check |
| **`.obsidian/*.json` normalization drift** (T4 F-S2-5) | M3.1 noted "vulnerable to T2 clobber" for workspace.json; didn't address other .json normalization | T4 design spec extends canonicalization scope to all tracked `.obsidian/*.json` |
| **Plugin `data.json` defaults** (T4 F-S2-6) | M3.1 didn't address per-plugin data.json shipping | T4 design spec identifies NN plugin `data.json` (triad colors) as a 6th-instance additive-upstream candidate |
| **`.obsidianignore`** (T4 F-S2-7) | M3.1 noted "should exist at vault root per OBSIDIAN_CLAUDE.md — needs verification at M3.1 S2" — bonus observation; verification deferred to M3.2 | T4 design spec evaluates current `.obsidianignore` state + proposes `how/templates/` exclusion patch |

### Bonus observations from M3.1 already routed to M3.2

Per M3.1 mission spec §Bonus observations:
- `.obsidianignore` verification — **M3.2 T4 scope** (F-S2-7).
- Canonical hotkey set — M3.4+ scope (not M3.2).
- Style Settings default preset — M3.4+ scope (not M3.2).
- Templater folder mappings recheck against `plugins/templater-obsidian/data.json` — **M3.2 T4 scope** (overlaps F-S2-6 plugin data.json shipping pattern).

## Improvements classification

| Class | Items | Treatment |
|---|---|---|
| **Additive non-breaking** (M3.2 S2 scope; aDNA.aDNA-resident) | NEW `skill_obsidian_canonicalize.md` (new skill file in `aDNA.aDNA/how/skills/`); cross-link updates if any | Apply at S2 Obj 5 (aDNA.aDNA only; no `.adna/` touch) |
| **Breaking — deferred to v8 P6 propagation** | T3 `setup.sh --verify` patch; T4 `.adna/setup.sh` post-install canonicalize block; T4 `.adna/.obsidianignore` extension; T4 NN plugin `data.json` shipping (6th-instance additive-upstream candidate) | M3.2 S2 produces proposed-patch artifacts; v8 P6 lands at upstream commits |
| **Discovery required** (M3.3+ scope) | Canonical hotkey set + Style Settings default preset + any drift surfaced at S2 reads beyond T3+T4 scope | Flag in S2 SITREP; route to M3.3 or M3.4 backlog as appropriate |

## Acceptance criteria

- [ ] All 6 deliverables landed at S3 close (cumulative)
- [ ] T3 + T4 design specs each contain literal patch-style diff text for upstream files (no actual `.adna/` mutation); both follow ratified 6-section structure
- [ ] NEW `skill_obsidian_canonicalize.md` lives at `aDNA.aDNA/how/skills/`; ≥ 3 modes documented; delta-aware merge protocol explicit for `--canonicalize` mode
- [ ] Campaign master M3.2 row flips `planned → in_progress` at S1 open + `in_progress → completed` at S3 close
- [ ] Campaign master amendments-table entry for M3.2 S1 open at S1
- [ ] Campaign master amendments-table entry for M3.2 close at S3
- [ ] `aar_m32_obsidian_stabilization_extension.md` — lightweight 5-line + extended findings + 6/6 acceptance scorecard + Standing-Order discharge table + token-budget two-metric table with API-billing companion
- [ ] STATE.md router Op 3 archive-on-close 11th canonical instance refresh at S3; stays ≤ 20 kT cap (also Op 3 10th canonical instance at S1 open)
- [ ] Zero `.adna/` upstream touches end-to-end (v7.0 frozen at `27e6395`)
- [ ] Zero partner-vault contact (17 embargo memos preserved)
- [ ] Zero `~/.adna/measurement/measurement.sqlite` deliberate mutations
- [ ] Zero new ADRs at M3.2 unless load-bearing (Campaign SO #14 — ADR-014 verification-handoff stays forecast-scoped to M3.4)
- [ ] Zero `node.aDNA/` mutations (token_baselines.md v0.1.3 stays as-published; M3.x re-measurement contract per `m245_obj3` triggers at ≥ 20-session corpus and is OPERATOR-decisioned)
- [ ] Zero `.obsidian/` config or plugin file mutations (M3.2 is design-spec class + new skill drop; no on-disk Obsidian changes)
- [ ] Mission file declares `token_budget_estimated` per ADR-016 Clause A two-metric (Standing Order #8 self-reference 13th tactical invocation candidate)
- [ ] 3 session files moved `active/` → `history/2026-05/` at S3 commit

## Operator decision gates

| # | Question | Resolution | Resolved at |
|---|---|---|---|
| D1 | T4 design-spec granularity: 1 combined spec OR 3 separate specs per F-S2-5/6/7 | **A: 1 combined spec** (unified canonicalization narrative + 6 deliverables stays canonical; B alternative would push to ≥ 8 deliverables) | Rosetta-default at S1 spec authoring; operator can override at plan ratification (no override given) |
| D2 | NEW `skill_obsidian_canonicalize.md` at M3.2 S2 OR forecast to M3.3+ | **A: Author at S2 (full skill, not stub)** — keeps the skill as the operational consumer of T3+T4 design specs (ratifies the design's coherence end-to-end) | Rosetta-default at S1 spec authoring; operator can override at plan ratification (no override given) |
| D3 | `--reset-layout` absorption (T2 forecast) | **A: Absorb into `skill_obsidian_canonicalize.md` as a sub-mode** — unifies operator's mental model (one skill, multiple modes) | Rosetta-default at S1 spec authoring; operator can override at plan ratification (no override given) |
| D4 | Sibling backlog artifact at S1 (like M3.1's decision-surface idea)? | **A: None — no operator enrichments visible** | Rosetta-default at S1 spec authoring; operator can introduce at plan ratification (no introduction given) |
| D5 | Token budget per session | **S1 ~80-110 / S2 ~140-180 / S3 ~70-100; total ~290-390 kT** | Rosetta-default per ADR-016 Clause A two-metric; ratifies at AAR via estimate-vs-actual delta |

## Hard constraints

End-to-end constraints inherited from M3.1; honored in all 3 sessions of M3.2:

- **Zero `.adna/` upstream touches** — v7.0 frozen at `LatticeProtocol/aDNA@27e6395`; v8 P6 owns upstream propagation per Campaign SO #14 + ADR-005 rule 3. T3+T4 design specs CITE `.adna/` files (e.g., `setup.sh:175-184`, `skill_node_health_check.md`, `.obsidianignore`) but DO NOT mutate them.
- **Zero partner-vault contact** — 17 partner-affiliated embargo memos preserved (Wilhelm × 2 + SuperLeague + SIP + 13 others); M3.2 does not trigger partner outreach.
- **Zero `~/.claude/settings.json` modifications**.
- **Zero `~/.adna/measurement/measurement.sqlite` deliberate mutations** — hook firing during session is normal; deliberate writes prohibited.
- **Zero hook modifications**.
- **Zero new ADRs at M3.2 unless load-bearing** — Campaign SO #14 (ADR ratification gated at phase entries; M3.2 is intra-P3). ADR-014 (verification-handoff topology) is forecast-scoped to M3.4 per ADR roadmap row 306; M3.2 does not draft it. If T3/T4 design work surfaces an unanticipated load-bearing decision, operator override per Campaign SO #14 exception clause may apply (escalate via SITREP).
- **Zero `node.aDNA/` mutations** — token_baselines.md v0.1.3 published at M2.4 close; M3.x re-measurement contract (per `m245_obj3_measurement_contract.md`) triggers only at ≥ 20-session corpus and is OPERATOR-decisioned, not auto-applied here.
- **Zero `.obsidian/` config or plugin file mutations** — M3.2 is design-spec class for upstream patches; NEW skill drops to `aDNA.aDNA/how/skills/`, not `.obsidian/`. No on-disk Obsidian changes.
- **Zero push to origin** — push is operator-discretionary post-AAR per M2.3.5 push-readiness checklist precedent. HEAD is 11 commits ahead of origin/main at S1 open; M3.2 S1 commit will make it 12 ahead. Operator authorizes push separately.
- **Zero M2.1.5 / M3.0.5 / M3.3-M3.7 scope creep** — M3.2 stays in T3+T4 lane; M3.0.5 stays `planned-stub`; M3.3-M3.7 untouched; M2.1.5 stays `planned-optional`.
- **Zero scope expansion mid-mission** — D1-D5 ratified at S1 per Rosetta-defaults; further mid-mission scope expansion requires operator-override per Standing Order #14.
- **Zero mutation to the 4 operator-discretionary untracked files at M3.1 close** — `idea_operator_web_gate_ui_pattern.md` + 3 SiteForge interactive-subsystem coord memos stay untracked unless operator separately commits.

## Standing Order discharges (preview — fills at AAR)

| # | Order | M3.2 discharge plan |
|---|---|---|
| Project SO #1 | Phase gates are human gates | ✅ P3 already open (M3.1 S1 entry 2026-05-21T02:34:03Z); M3.2 opening operator-authorized at this session 2026-05-21T13:52:58Z via plan ratification + AskUserQuestion answer; recorded in campaign master amendments-table |
| Project SO #3 | Context budget is doctrine | `token_budget_estimated` declared in frontmatter per ratified ADR-016 Clause A two-metric (content-load + API-billing companion); AAR reports estimate-vs-actual + API-billing per Project SO #11 |
| Project SO #5 | Every mission gets an AAR | `aar_m32_obsidian_stabilization_extension.md` at Obj 6 (S3) |
| Project SO #6 | Archive never delete | M3.2 adds (T3+T4 design specs + new skill) + edits (campaign master + STATE); deletes nothing |
| Project SO #7 | Dual-audience test | Each touched artifact verified — design specs accessible to both developer (literal patch text) + newcomer (option-matrix tables with explanatory rationale); new skill accessible to both (skill API + invocation examples for developer; mode descriptions + use cases for newcomer) |
| Project SO #8 | Self-reference mandatory | M3.2's new `skill_obsidian_canonicalize.md` is the operational consumer of the M2.4.5-hardened skills routing layer. M3.2 design specs follow the 6-section structure that M3.1 AAR ratified as canonical — the spec ratifies its own predecessor's STRONG-EXTENDED finding. **13th tactical invocation candidate in v8** (after 12 in v8 P2+M3.1) |
| Project SO #9 | Upstream spec is source of truth | T3+T4 design specs CITE upstream `.adna/setup.sh` + `skill_node_health_check.md` + `.obsidianignore` as source-of-truth + DEFER ratification of patches to v8 P6 cycle; never contradict the spec |
| Project SO #10 | Cross-link aggressively | Each artifact has ≥ 2 wikilinks; design specs cross-link F-S2-2 + F-S2-5 + F-S2-6 + F-S2-7 backlog files + absorbed-campaign master + M3.1 T1+T2 design specs + ADR-016 + this mission spec; new skill cross-links ≥ 3 prior skills + 2 design specs |
| Project SO #11 | Per-mission context budget mandatory | Mission frontmatter `token_budget_estimated` two-metric; AAR reports actual + delta + API-billing companion |
| Campaign SO #12 | Per-mission context budget | Same as Project #11; two-metric reporting |
| Campaign SO #14 | ADR ratification gated at phase entries | ✅ NO new ADRs at M3.2 expected; if surfaced, operator-override exception clause applies (escalate via SITREP) |
| Campaign SO #17 | Mission_class discipline | ✅ `mission_class: implementation` declared (T3+T4 design specs + new skill drop are executable artifacts even though `.adna/` patches deferred-to-P6 for upstream propagation) |
| Campaign SO #19 | Phase exit = human gate | ✅ applies at P3 → P4; M3.2 close does NOT auto-open M3.3 OR P4; both stay operator-decision (M3.2 close = 2 of 4 P3 phase-exit bricks) |
| Campaign SO #5 (absorbed-campaign) | 5th + 6th-instance additive-upstream candidates explicit | ✅ T3 design spec evaluates 5th-instance (likely bundled with T1) vs 6th-instance (own commit); T4 NN plugin data.json shipping evaluates 6th-instance additive-upstream candidacy explicitly |

## Cross-vault impact

- **`.adna/` upstream** — zero touches at M3.2; T3+T4 design specs join the **v8 P6 propagation queue** (grows from 7 → 9-10 at M3.2 close: 7 from M3.1 close + T3 `setup.sh --verify` patch + T4 `.adna/setup.sh` canonicalize block + T4 `.adna/.obsidianignore` extension + possibly T4 NN data.json shipping if 6th-instance ratified).
- **Partner vaults** — zero contact; 17 embargo memos preserved.
- **`node.aDNA/`** — zero mutations at M3.2 (token_baselines.md v0.1.3 stays as-published).
- **`lattice-labs/`** — zero contact; absorbed-campaign sibling `campaign_validation_node_adna_lwx_outputs` lives there and is not consumed at M3.2 (verification-dispatch comes at M3.4 per ADR-014 forecast).
- **GitHub `LatticeProtocol/aDNA.aDNA`** — push deferred to operator-discretionary post-M3.2 close; HEAD = 12 commits ahead of origin/main at S1 close; further extension across S2+S3.
- **All future M3.3-M3.7 missions** — inherit T3+T4 substrate; M3.3 (T5+T6) may consume `skill_obsidian_canonicalize.md` as the canonicalize primitive; M3.4 (T7 verification handoff + ADR-014) consumes T3 `--verify` design as part of the verification-handoff topology.
- **All future M4.x-M6.x missions** — M6.x propagation phase lands T3+T4 patches at upstream.

## Cross-Mission Dependencies

- **Backward dep on M3.1** (immediate predecessor; design-at-P3-propagation-at-P6 pattern + 6-section structure ratified). M3.2 inherits both verbatim. M3.2's T3+T4 design specs follow the 6-section structure; M3.2's `--reset-layout` absorption into `skill_obsidian_canonicalize.md` realizes T2's forecast.
- **Backward dep on M2.4.5** (AGENTS.md hardening). M3.2's new `skill_obsidian_canonicalize.md` drop is the FIRST behavioral test of whether the M2.4.5-hardened `how/skills/AGENTS.md` routing layer succeeds in discoverability for new-skill drops (vs cold deep-file loads). Captured at M3.2 S2+S3 session SITREPs as informal observation; formal Q2 SQL re-measurement happens at M3.x ≥ 20-session corpus per `m245_obj3` measurement contract.
- **Forward dep on M3.0.5** (decision-surface capability mission; forecast row added at M3.1 S1). M3.2 does NOT consume the decision-surface pattern (T3+T4 are too narrow to warrant a heavy decision surface). M3.0.5 stays `planned-stub`.
- **Forward dep on M3.3** (T5+T6 first-open UX standardization + integration test framework). M3.3 may consume `skill_obsidian_canonicalize.md` as the canonicalize primitive within `--reset-layout` + post-fork onboarding integration. Forecast only; M3.3 spec authored at M3.3 S1.
- **Forward dep on M3.4** (T7 verification handoff + ADR-014). M3.4 codifies the verification-handoff topology as `skill_verification_handoff.md`; M3.2 T3 `--verify` design ratifies the agent-side verification surface that M3.4 builds atop.
- **Forward dep on M6.x P6 propagation phase**. M3.2 design specs + their proposed patches join the v8 P6 queue (now growing 7 → 9-10); M6.x consumes M2.3.5 push-readiness checklist template + the cumulative queue at v8 P6 entry.

## Self-reference + dual-audience

This mission is the second mission in P3 — its session entries are the SECOND behavioral evidence of whether the M2.4.5 discoverability re-frame succeeds for the M3.x cohort. The mission file itself sits in `how/campaigns/campaign_adna_serious_tool_readiness/missions/` — a directory whose AGENTS.md was top-12 hardened at M2.4.5. The NEW skill drop at `aDNA.aDNA/how/skills/skill_obsidian_canonicalize.md` is the first M3.x skill drop to test the skills routing layer (the M2.4.5 hardening covered 12 AGENTS.md files including `how/skills/AGENTS.md`). **Standing Order #8 self-reference 13th tactical invocation candidate in v8**.

The mission also self-applies its own substrate: M3.2's `skill_obsidian_canonicalize.md` realizes T2's `--reset-layout` flag forecast (ratified at M3.1 close as part of the v8 P6 propagation queue). The skill consumes its own predecessor mission's design spec output and packages it for live operator/agent invocation.

**Dual-audience test**:
- **Developer**: each design spec contains literal patch-style diff text + option-matrix tables + v8 P6 propagation contract — directly executable when v8 P6 cycle opens. New skill includes invocation contract + safety preconditions + delta-aware merge protocol.
- **Newcomer**: each design spec opens with a plain-language problem statement (F-S2-2/5/6/7 backlog files provide newcomer-accessible framing — silent-failure mode for T3; drift/missing/pollution narrative for T4); option-matrix tables include explanatory rationale; new skill includes use cases + mode-by-mode descriptions ("when to use --canonicalize" etc.).

## Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| T3 `--verify` mode design conflicts with T1 fork-propagation if both bundled into single v8 P6 commit | Low-Medium | Medium | T3 design spec explicitly evaluates bundle-vs-separate at §6 (v8 P6 propagation contract); both patches are additive-non-breaking and may compose cleanly |
| T4 combined spec (D1=A default) becomes too large to be discoverable | Medium | Low | T4 spec §1 finding statement enumerates 3 sub-findings (F-S2-5/6/7) with explicit subsection labels; §3 option matrix uses sub-finding-anchored rows; readers can navigate by sub-finding without reading whole spec |
| NEW `skill_obsidian_canonicalize.md` delta-aware merge logic is hard to specify precisely | Medium | Medium | Skill spec defines merge as 3-way: (upstream `.adna/.obsidian/`) ↔ (current vault `.obsidian/`) ↔ (operator-local overrides via `<vault>/.obsidian/.local-overrides.json` opt-in file); operator opts in to per-vault customization layer; M3.3+ may refine if pain surfaces |
| 6th-instance additive-upstream candidacy assessment for NN data.json shipping fails (operator decides NN data.json is not additive-upstream-appropriate) | Low-Medium | Low | T4 §3 option matrix includes "skill_obsidian_canonicalize.md ships data.json on first --canonicalize" as alternative to upstream shipping; either path closes F-S2-6 |
| S2 token budget overflow due to combined T3+T4+skill scope | Low-Medium | Medium | Per ADR-016 Clause A budgets are estimates; > 2× overflow triggers retrospective per Project SO #11; S2 may compress T4 spec to F-S2-5-only (defer F-S2-6+7 to M3.3 backlog) if needed |
| Operator overrides D2 (skill at M3.2 S2) and requests stub-only with skill deferred to M3.3 | Low | Medium | Operator override is explicit at S1 spec ratification; if operator requests stub-only, M3.2 deliverable count drops to 5 (drop skill drop) and 3-session shape may compress to 2 sessions — escalate via SITREP |

## Notes

- This is the **second mission in P3** after M3.1's close ratified design-at-P3-propagation-at-P6 + 6-section structure as canonical. M3.2 is the first test of whether those patterns survive in a mission where the artifact mix includes a new-skill drop (3 design+skill landings at S2) vs M3.1's design-spec-only S2 (3 design-spec landings).
- **6th-instance additive-upstream candidate** explicit per Campaign SO #5 (absorbed-campaign) — NN plugin `data.json` shipping at T4 is the 6th-instance candidate (after T1's 5th-instance at M3.1; absent T1, NN data.json would be 5th).
- **Canonical 3-session implementation-class shape — 7th instance candidate** after M1.3 + M1.4 + M2.1 + M2.3 + M2.4 + M3.1 (6 prior instances ratified at M3.1 close). If S1+S2 compress to 2 sessions for whatever reason, the shape stays valid (canonical implementation-class is 2-3 sessions per `m21_obj4` rubric).
- **Op 3 archive-on-close pattern 10th canonical instance** applied at this S1 STATE refresh (M2.1 + M2.2 + M1.5 + M2.3 + M2.3.5 + M2.4 + M2.4.5 + M3.1 S1 + M3.1 close + M3.2 S1 = 10). 11th canonical instance applies at M3.2 close.
- **Cross-references** for routing (≥ 2 wikilinks per Project SO #10): [[how/campaigns/campaign_adna_serious_tool_readiness/campaign_adna_serious_tool_readiness.md|campaign master]] + [[how/campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p3_m31_obsidian_stabilization_core.md|M3.1 mission spec]] (immediate predecessor; design-at-P3 pattern source) + [[how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m31_obj3_t1_design_spec.md|M3.1 T1 design spec]] (6-section template; 5th-instance additive-upstream pattern) + [[how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m31_obj4_t2_design_spec.md|M3.1 T2 design spec]] (`--reset-layout` forecast for absorption) + [[how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_m31_obsidian_stabilization_core.md|M3.1 AAR]] (PRIMARY + STRONG-EXTENDED findings) + [[how/campaigns/campaign_obsidian_deployment_stabilization/campaign_obsidian_deployment_stabilization.md|absorbed campaign master]] (Tracks 3+4 substrate) + [[how/backlog/backlog_F_S2_2_config_binary_asymmetry.md|F-S2-2 backlog (T3 finding)]] + [[how/backlog/backlog_F_S2_5_obsidian_json_normalization.md|F-S2-5 backlog (T4 sub-finding)]] + [[how/backlog/backlog_F_S2_6_nn_data_json_not_shipped.md|F-S2-6 backlog (T4 sub-finding)]] + [[how/backlog/backlog_F_S2_7_template_placeholder_tags.md|F-S2-7 backlog (T4 sub-finding)]] + [[what/decisions/adr_016_per_mission_context_budget.md|ADR-016 per-mission context budget]] + [[STATE.md|STATE router]].

## Completion Summary

**Closed**: 2026-05-22T19:31:32Z at `session_stanley_20260522T193132Z_v8_m32_s3`. 3-session arc executed canonically with S3-with-carry sub-mode authorized for Deliverable 7 (banner propagation).

### Deliverables landed (7/7)

1. **M3.2 mission spec** (this file) — S1 2026-05-21T13:52:58Z+. Frontmatter + Objectives 1-6 + Scope + Acceptance criteria + Hard constraints + Standing-Order discharges (preview) + Improvements classification + Cross-vault impact + Cross-Mission Dependencies + Self-reference + Risks + Notes + 11 wikilink cross-references.
2. **Governance bundle (S1)** — Campaign master M3.2 row `planned → in_progress` at line 164 + amendments-table 2026-05-21 entry; STATE.md router Op 3 archive-on-close **10th canonical instance** refresh. HEAD `fc80f3a`.
3. **T3 design spec** (`missions/artifacts/m32_obj3_t3_design_spec.md`) — S2 2026-05-21T21:50:14Z+. 6-section structure per ratified template — finding (config-binary asymmetry: silent-failure mode on missing plugin binaries) + root cause (Obsidian security-conscious no-auto-fetch + setup.sh silent failure modes) + 4-option matrix (Option 1 verify mode + Option 2 health-check sub-check + Option 3 fork-time gate + Option 4 layered combo) + recommended Option 4 layered + literal patch text for `.adna/setup.sh` + `.adna/how/skills/skill_node_health_check.md` + optional `.adna/how/skills/skill_project_fork.md` + v8 P6 propagation contract.
4. **T4 design spec** (`missions/artifacts/m32_obj4_t4_design_spec.md`) — S2 2026-05-21T21:50:14Z+. 6-section structure — finding (3-sub: Obsidian normalizes tracked `.obsidian/*.json` on open + NN plugin data.json triad colors not shipped + template tags pollute graph via missing `.obsidianignore` extension) + root cause + 4-option matrix + recommended Option 1 unified canonicalize skill + literal patch text for `skill_obsidian_canonicalize.md` + `.adna/setup.sh` + `.adna/.obsidianignore` + v8 P6 propagation contract. NN data.json **6th-instance additive-upstream candidate evaluated**.
5. **NEW `skill_obsidian_canonicalize.md`** (`aDNA.aDNA/how/skills/`) — S2 2026-05-21T21:50:14Z+. Full skill (not stub): 3 modes (`--canonicalize` reads upstream + diffs + delta-aware merge with operator-local-override preservation; `--reset-layout` absorbs T2 forecast — forces `cp workspace.default.json workspace.json`; `--verify` absorbs T3 design — reads `community-plugins.json` + checks plugin binaries). Modeled on `skill_node_health_check.md` + `skill_workspace_upgrade.md` patterns. **FIRST behavioral test of M2.4.5-hardened `how/skills/AGENTS.md` routing layer for new-skill discoverability**. HEAD `c6eeddc`.
6. **AAR + close cascade** (`missions/artifacts/aar_m32_obsidian_stabilization_extension.md` + this file + campaign master + STATE refresh + 3 session moves) — S3 2026-05-22T19:31:32Z+. Lightweight 5-line + 17-row acceptance scorecard (16 from spec + 1 banner Deliverable 7 expansion) + 15-row Standing-Order discharge (14 standard + 1 carry-specific 5-criteria gate) + 12 extended findings (3 categories × 4) + token-budget two-metric table + **2 load-bearing findings** PRIMARY *S3-with-carry sub-mode* + STRONG-EXTENDED *first-contact-polish v8 P6 ecosystem signal* + 19 cross-references.
7. **Banner propagation S3 carry (Deliverable 7)** — S3 2026-05-22T19:31:32Z+. Operator-driven operational-maintenance drop absorbed per S3-with-carry sub-mode (PRIMARY load-bearing finding from this AAR): 3 asset copies (`aDNABanner.png` at canonical root + `site/src/assets/` + `what/assets/`) + Astro `site/src/pages/index.astro` import path update (banner.jpg → aDNABanner.png) + alt text refresh (matched new pixel-art content) + README banner image prepend + Playwright Gate 11 NEW (`site/tests/gates/gate-11-hero-banner.spec.ts` 4 tests PASS in 4.7s — img-renders + alt-reflects-new-content + Picture-emits-AVIF+WebP + screenshot-evidence) + Astro build clean (10 image variants generated: 3 AVIF + 3 WebP + 4 PNG fallbacks; 744 KB source → 5-839 KB optimized) + screenshot evidence at `site/evidence/hero_banner/hero_banner.png` + GitHub social-preview manual step documented for operator (no API/CLI path) + old `banner.jpg` retained as fallback per [[../../../how/backlog/idea_banner_asset_cleanup.md|`idea_banner_asset_cleanup.md`]] tracking.

### Key findings (load-bearing — propagate to campaign + STATE)

- **PRIMARY (methodology-strategic)**: *S3 close sessions can absorb small-scope, reversible, operator-prepared operational-maintenance drops without violating non-destructive-consolidation discipline — the "S3-with-carry" sub-mode.* 5-criteria gate documented + ratified. Canonical 3-session implementation-class shape **7th instance RATIFIED with S3-with-carry sub-mode**. `skill_s3_with_carry_eligibility.md` graduation candidate at ≥ 3 use instances per `m21_obj4` rubric (current count: 1 of 3). Plausible 8th-instance precedent candidate at M3.3+ close.
- **STRONG-EXTENDED (north-star-UX-strategic)**: *First-contact visual surface (banner) is a north-star UX deliverable — belongs in v8 P6 propagation queue as ecosystem-polish signal.* Banner work is not an `.adna/` patch (lives in `aDNA.aDNA/site/` + `README.md` + asset mirrors) but signals a reusable methodology for ecosystem vaults' own landing-surface polish. v8 P6 propagation queue grows 9-10 → 10-11. `skill_first_contact_polish.md` graduation candidate at ≥ 3 use instances per `m21_obj4` rubric (current count: 1 of 3).
- **Standing Order #8 self-reference 14th tactical invocation candidate in v8** (M3.2's new skill drop is FIRST behavioral test of M2.4.5-hardened routing layer; banner propagation IS an aDNA-doctrine application since public-facing surfaces are governed by the same vault that explains aDNA; the S3-with-carry sub-mode AAR documents its own carry).
- **Op 3 archive-on-close pattern 11th canonical instance** at STATE refresh; ≤ 20 kT cap discipline scales with aggressive demotion of older entries.

### Mission AAR

[[../missions/artifacts/aar_m32_obsidian_stabilization_extension.md|aar_m32_obsidian_stabilization_extension.md]] — load_bearing: true; 17/17 acceptance + 2 load-bearing findings + 19 cross-references + Operator follow-up section.
