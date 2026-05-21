---
type: mission
mission_id: mission_adna_str_p3_m31_obsidian_stabilization_core
campaign: campaign_adna_serious_tool_readiness
phase: 3
mission_number: 3.1
slug: obsidian_stabilization_core
created: 2026-05-21
updated: 2026-05-21
status: completed
opens_at: 2026-05-21T02:34:03Z
opened_session: session_stanley_20260521T023403Z_v8_m31_s1
closed_at: 2026-05-21T07:28:03Z
closed_session: session_stanley_20260521T072803Z_v8_m31_s3
estimated_sessions: 3   # canonical 3-session implementation-class shape — 6th instance after M1.3 + M1.4 + M2.1 + M2.3 + M2.4
actual_sessions: 3   # ratified at S3 close — 6th instance of canonical 3-session implementation-class shape
persona: rosetta
last_edited_by: agent_stanley
spec_completeness: complete   # S1 authors spec; S2 fills in T1/T2 design-spec content tables; S3 close fills deliverables landed + Completion Summary populated
mission_class: implementation   # T1+T2 design specs + proposed-patch artifacts + aDNA.aDNA docs-drift fixes; design at P3, propagation at P6
token_budget_estimated: "S1 ~110-150 kT content-load (recon reads digested + mission spec auth + decision-surface backlog idea + campaign master amendments + STATE router refresh + session file) + S2 ~120-150 kT (T1 design spec + T2 design spec + proposed-patch artifacts + aDNA.aDNA docs-drift fixes) + S3 ~70-100 kT (AAR + STATE Op 3 8th canonical instance + campaign master close + 3 session moves). Three-session total ~300-400 kT. API-billing companion per ADR-016 Clause C empirical formula (`cache_creation ≈ 328 K + turns × 1 K`; `cache_read ≈ 4.1 M + turns × 126 K`): S1 ~14-18 M cache_read at 8 turns; S2 ~13-17 M cache_read at 7 turns; S3 ~10-14 M cache_read at 5 turns; total ~37-49 M cache_read across the 3-session arc. Per ADR-016 Clause A + Project Standing Order #11; declared in mission frontmatter per Standing Order #8 self-reference (M3.1 declares its own budget per the field ADR-016 Clause A ratified)."
tags: [mission, m3_1, v8, p3, obsidian_stabilization, core, t1_fork_propagation, t2_workspace_idempotency, canonical_3_session_implementation_shape_6th_instance_candidate, obsidian_stab_absorbed_t1_t2, north_star_easy_fluid_context_graphs, design_at_p3_propagation_at_p6_pattern, adna_aDNA_docs_drift_fix, rosetta]
prerequisite_missions:
  - mission_adna_str_p2_m21_context_audit_split             # closed; STATE.md split + Heavy-File Read Convention
  - mission_adna_str_p2_m22_per_mission_budget              # closed; ADR-016 LIVE
  - mission_adna_str_p2_m23_convergence_validation          # closed; ADR-016 Clause C empirical
  - mission_adna_str_p2_m23_5_push_readiness_review         # closed; planning-class single-session shape 3rd instance + 12-item checklist template
  - mission_adna_str_p2_m24_agents_md_heatmap               # closed; 7-item invariants spec + AGENTS.md UNDER-LOADED finding
  - mission_adna_str_p2_m245_agents_md_bulk_edit            # closed; 12-file AGENTS.md hardened + measurement-cycle contract
prerequisite_artifacts:
  # absorbed-campaign substrate (read at S1 recon)
  - aDNA.aDNA/how/campaigns/campaign_obsidian_deployment_stabilization/campaign_obsidian_deployment_stabilization.md  # 8-track scope T1-T8
  - aDNA.aDNA/how/campaigns/campaign_obsidian_deployment_stabilization/CLAUDE.md                                      # campaign-specific standing orders
  - aDNA.aDNA/how/backlog/backlog_F_S2_1_setup_sh_fork_propagation.md                                                # T1 finding-specific routing
  - aDNA.aDNA/how/backlog/backlog_F_S2_4_obsidian_workspace_clobber.md                                               # T2 finding-specific routing
  # v8 P2 doctrinal carries
  - aDNA.aDNA/what/decisions/adr_016_per_mission_context_budget.md                                                   # Clause A two-metric budget + Clause B Heavy-File + Clause C empirical
  - aDNA.aDNA/what/decisions/adr_022_tool_use_logging.md                                                            # PostToolUse hook contract
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m245_obj3_measurement_contract.md # M3.x re-measurement trigger conditions
  - "/Users/stanley/lattice/node.aDNA/what/context/token_baselines.md v0.1.3 Appendix B"                              # AGENTS.md invariants spec
deliverables_count: 6   # 1 mission spec + 1 backlog idea + 2 design specs + 1 docs-drift fix bundle + 1 close (AAR + STATE + campaign master)
phase_authorization: "P2 → P3 phase exit gate operator-authorized at this session 2026-05-21T02:34:03Z (via plan ratification at `/Users/stanley/.claude/plans/please-read-the-claude-md-silly-haven.md` + operator AskUserQuestion answer); recorded in campaign master amendments-table at S1 open per Project SO #1 + Campaign SO #19 (phase gates = human gates; explicit operator approval required)"
hard_dependency_satisfied: "M2.4.5 closed 2026-05-21T01:15:50Z+ at session_stanley_20260521T010359Z_v8_m245_s1 (HEAD `01f0302`); P2 → P3 phase exit gate READY at M2.4.5 close (4 bricks per Campaign SO #19: M1.3 token-efficiency baseline + M2.2 per-mission budget ADR-016 LIVE + M2.3 convergence model validated ADR-016 Clause C ratified + M2.4 AGENTS.md heat map operational + 7-item invariants spec + ADR-022); STATE.md router ≤ 20 kT cap; v7.0 frozen at `LatticeProtocol/aDNA@27e6395`; HEAD 8 commits ahead of origin/main pending operator push decision; M2.1.5 retroactive Op 3 stays `planned-optional`."
---

# M3.1 — Obsidian Deployment Stabilization Core (T1 + T2)

> **Mission produces**: (a) **T1 design spec** — `skill_project_fork.md` + `setup.sh` proposed-patch artifacts for the 5th-instance additive-upstream pattern (fork propagation); (b) **T2 design spec** — `setup.sh --reset-layout` proposed-patch artifact for workspace.json idempotency (preventing Obsidian's destructive first-open clobber); (c) **aDNA.aDNA docs-drift fix bundle** — `.obsidian/README.md` + `.obsidian/OBSIDIAN_CLAUDE.md` plugin lists aligned with `community-plugins.json` ground-truth (15 active plugins); (d) **decision-surface planning stub** (sibling artifact at `how/backlog/`) — `idea_interactive_decision_surface.md` with SiteForge-vs-aDNA-core opinion memo + future-mission-slot forecast; (e) **AAR + close cascade** — campaign master M3.1 row + M3.0.5 forecast row + amendments entry + STATE.md Op 3 8th canonical instance refresh + session moves.
>
> **Why now**: P2 → P3 phase exit gate is operator-authorized at this session (4 bricks per Campaign SO #19 satisfied at M2.4.5 close 2026-05-21T01:15:50Z+). M3.1 is the canonical first-mission-after-phase-entry per Campaign SO #1+19 + the absorbed `campaign_obsidian_deployment_stabilization` 8-track scope (`M3.1 + M3.2 + M3.3 + M3.4 (4 missions covering T1-T8)` per master line 116). T1+T2 are the deepest-impact + lowest-coupling pair (both substrate-stabilization; T3-T6 build on stabilized substrate; T7-T8 add agent-driven capability).
>
> **Design at P3, propagation at P6 — critical hard-constraint resolution**: T1+T2 finding texts call for `.adna/` upstream commits (5th-instance additive-upstream pattern after ADR-008 + e3b3bcc + 8673383 + 202c9ec). v8 P2-P5 hard constraint forbids `.adna/` touches (v7.0 frozen at `27e6395`). **Resolution**: M3.1 produces **design specs + proposed-patch artifacts** as aDNA.aDNA-resident files (under `missions/artifacts/`); v8 P6 owns the upstream cycle that lands those patches as the v8.0 ecosystem propagation (single-commit-per-patch). This matches Campaign SO #14 (ADR ratification + upstream propagation gated at phase entries) + ADR-005 rule 3 (upstream cycle = P6) + the v8 P6 doctrinal-additions queue precedent (5 prior additions queued at M2.4 close: AGENTS.md invariants + ADR-022 + ADR-016 amendment + Project SO #11 + Heavy-File Read Convention).
>
> **Self-reference (Standing Order #8 — 9th tactical invocation candidate in v8)**: M3.1 mission file lives at `how/campaigns/campaign_adna_serious_tool_readiness/missions/` — the routing layer M2.4.5 just hardened (Inv 5 heavy-file warning applied to `how/missions/AGENTS.md` per the 7-item invariants spec). The Obsidian-stabilization design specs produced here are themselves the gate for whether the M2.4.5-hardened AGENTS.md routing layer succeeds in its discoverability re-frame for the M3.x cohort. Pattern across 9 v8 instances: each governance-synthesis mission folds its own measurement / verification / artifact into the doctrine it produces.
>
> **North-star alignment**: The v8 campaign's strategic intent — *"easy and fluid way to build/operate/utilize context graphs"* — is operator-stated 2026-05-13 + saved to memory (`project_adna_lattice_ux_goal.md`). M3.1 + the whole P3 forge-ecosystem-hardening phase directly serves this goal: Obsidian is the operator-facing UI for the context graphs every aDNA vault produces; if the UX is fragile, the strategic goal is blocked from day-one for every newly-forked vault.

## Mission scope

Consume the absorbed-campaign T1+T2 finding catalog + 5-week-stale Obsidian state recon + v8 P2 doctrinal carries (ADR-016 budget discipline + AGENTS.md invariants spec + Heavy-File Read Convention) + operator-added scope (decision-surface planning stubs + core Obsidian setup review) to:

1. **Recon-audit current Obsidian state** (S1) — read `.obsidian/*` (9 config files + 2 CSS bundles + snippets/archive), distill into §Current State table, identify documentation drift (OBSIDIAN_CLAUDE.md + README.md vs community-plugins.json), classify improvements as additive-non-breaking / breaking / discovery-required.
2. **Author T1 design spec** (S2) — `setup.sh` fork-propagation pattern (5th-instance additive-upstream candidate); proposed-patch artifact at `missions/artifacts/m31_obj3_t1_design_spec.md` containing: (a) finding statement, (b) root-cause analysis, (c) 3 option matrix (Option 1 single-commit additive / Option 2 self-locating refactor / Option 3 hybrid), (d) recommended option + rationale (Option 1 by default per F-S2-1 backlog §Proposed approaches), (e) literal patch text for `skill_project_fork.md` + `setup.sh` (in patch-style diff format), (f) v8 P6 propagation contract.
3. **Author T2 design spec** (S2) — `setup.sh --reset-layout` pattern for workspace.json idempotency; proposed-patch artifact at `missions/artifacts/m31_obj4_t2_design_spec.md` containing: (a) finding statement + root cause (Obsidian save-on-close vs setup.sh's conditional-copy block at .adna/setup.sh:175-184), (b) 4 option matrix (--reset-layout flag / --force extension / first-open runbook docs / T4 canonicalize cross-cut), (c) recommended option + rationale (Option 1 + Option 3 per F-S2-4 backlog §Proposed approaches), (d) literal patch text for `setup.sh` + `skill_onboarding.md` + `skill_project_fork.md` post-fork message, (e) v8 P6 propagation contract, (f) cross-cut hook for T4 `skill_obsidian_canonicalize.md` (forecast slot in M3.2 scope).
4. **Apply aDNA.aDNA docs-drift fix** (S2) — read + diff `.obsidian/README.md` (lists "Omnisearch / Terminal / Folder Notes" — NOT in current `community-plugins.json`) and `.obsidian/OBSIDIAN_CLAUDE.md` (says "14 community plugins" — JSON has 15; uses wrong ID `advanced-canvas` — should be `obsidian-advanced-canvas`). Apply minimal Edit to align both files with the 15-plugin ground-truth from `community-plugins.json`. Frontmatter updates per Project Safety Rule #3 (where present; OBSIDIAN_CLAUDE.md has no frontmatter — discovery item). This is the only mutation INSIDE `.obsidian/` allowed at M3.1 (additive-non-breaking documentation alignment; not config or plugin changes).
5. **File decision-surface backlog idea** (S1; sibling artifact) — `how/backlog/idea_interactive_decision_surface.md` with 6 sections: (a) problem statement, (b) proposed pattern, (c) opinion memo (SiteForge vs aDNA-core analysis + recommendation), (d) memorialization plan (skill + template + ADR slots + M3.0.5 forecast), (e) best-practices stub, (f) open questions for operator ratification.
6. **Close mission + refresh governance** (S3) — AAR at `missions/artifacts/aar_m31_obsidian_stabilization_core.md` (lightweight 5-line + extended findings + acceptance scorecard + Standing-Order discharge + token-budget two-metric table); campaign master M3.1 row `in_progress → completed` + M3.0.5 forecast row + amendments-table entry; STATE.md router Op 3 archive-on-close 8th canonical instance refresh; 3 session files `active/` → `history/2026-05/`.

Canonical 3-session implementation-class shape — **6th instance candidate** after M1.3 + M1.4 + M2.1 + M2.3 + M2.4. S1 non-destructive (recon + spec + sibling artifact + STATE refresh) → S2 destructive within aDNA.aDNA (design specs + proposed patches + docs-drift fix) → S3 non-destructive consolidation (AAR + campaign master close + session moves).

## Objectives

### 1. Mission spec authoring + Obsidian recon-audit (S1)

- **Status**: in_progress (S1; this file)
- **Session**: S1
- **Read**: M2.4 + M2.4.5 mission specs (canonical 3-session structure model); absorbed campaign `campaign_obsidian_deployment_stabilization.md` (8-track scope; T1+T2 are this mission); F-S2-1 + F-S2-4 backlog files (finding-specific routing notes); `.obsidian/*` (9 config files + snippets); `who/coordination/` (no urgent memos); plan file (`please-read-the-claude-md-silly-haven.md`).
- **Produce**: this file (frontmatter + Objectives + Scope + Acceptance + Hard constraints + Standing-Order discharges + §Current State recon table + §Improvements classification table).
- **Depends on**: M2.4.5 close (done); operator P2 → P3 phase entry authorization (done at plan ratification); operator-added enrichments E + F (mission spec absorbs both — F into recon + spec scope, E into Obj 2).

### 2. Decision-surface backlog idea + M3.0.5 forecast row (S1)

- **Status**: pending S1
- **Session**: S1
- **Read**: `how/backlog/` directory listing (25 ideas; none cover decision-surface pattern — confirmed); ~/.claude/projects/.../memory/MEMORY.md (north-star UX goal); SiteForge governance summary (CLAUDE.md root project map).
- **Produce**:
  1. `how/backlog/idea_interactive_decision_surface.md` (6 sections per Mission scope §5)
  2. Campaign master M3.0.5 forecast row at Phase 3 table (planned-stub status; opens at operator ratification; default slot = before M3.5/M3.7 which need the pattern most)
- **Depends on**: 1.
- **Acceptance**: backlog idea has 6 sections + frontmatter + cross-links ≥ 2 (per Project SO #10); campaign master has M3.0.5 row visible in Phase 3 table.

### 3. T1 design spec — fork-propagation pattern (S2)

- **Status**: pending S2
- **Session**: S2
- **Read**: F-S2-1 backlog (finding statement + 3-option matrix); `.adna/setup.sh` (230 lines; conditional-copy block; PLUGIN_IDS list); `.adna/how/skills/skill_project_fork.md` (R2-R7 exclusion list); ADR-008 + commits e3b3bcc + 8673383 + 202c9ec (prior 4-instance additive-upstream pattern — for citation in §5 of proposed-patch artifact).
- **Produce**: `missions/artifacts/m31_obj3_t1_design_spec.md` with 6 sections per Mission scope §2.
- **Depends on**: 1.
- **Acceptance**: design spec contains literal patch-style diff for `skill_project_fork.md` + `setup.sh`; option-matrix table with ≥ 3 options; v8 P6 propagation contract names exact upstream-cycle entry condition + verification expectation.

### 4. T2 design spec — workspace.json idempotency (S2)

- **Status**: pending S2
- **Session**: S2
- **Read**: F-S2-4 backlog (root-cause + 4-option matrix); `.adna/setup.sh` lines 175-184 (workspace-copy block); `.adna/how/skills/skill_onboarding.md` + `.adna/how/skills/skill_project_fork.md` (post-fork-message integration points).
- **Produce**: `missions/artifacts/m31_obj4_t2_design_spec.md` with 6 sections per Mission scope §3.
- **Depends on**: 3 (T1 design spec sets the proposed-patch artifact template that T2 follows).
- **Acceptance**: design spec contains literal patch-style diff for `setup.sh` + `skill_onboarding.md` + `skill_project_fork.md`; option-matrix with ≥ 4 options; T4 cross-cut hook clearly identified for M3.2 absorption.

### 5. aDNA.aDNA docs-drift fix bundle (S2)

- **Status**: pending S2
- **Session**: S2
- **Read**: `.obsidian/README.md` (current 15-plugin list with drift); `.obsidian/OBSIDIAN_CLAUDE.md` (plugin tables with drift + wrong plugin ID); `.obsidian/community-plugins.json` (ground-truth: 15 plugin IDs).
- **Produce**: minimal Edit to both files aligning plugin lists with JSON ground-truth; OBSIDIAN_CLAUDE.md frontmatter added (currently absent — discovery item per Inv 1 + Project SO §Metadata standard).
- **Depends on**: 1 (recon-audit findings table cites these drift items).
- **Acceptance**: plugin lists match `community-plugins.json` exactly (15 IDs); `obsidian-advanced-canvas` (not `advanced-canvas`) used consistently; OBSIDIAN_CLAUDE.md has frontmatter with type/created/updated/last_edited_by; both files cross-link to `community-plugins.json` as authoritative source.

### 6. AAR + close cascade (S3)

- **Status**: pending S3
- **Session**: S3
- **Read**: this mission file (S3 final state); S1 + S2 session files (SITREP synthesis); 4 artifact files (T1 + T2 design specs + docs-drift fix + decision-surface backlog idea).
- **Produce**:
  1. `missions/artifacts/aar_m31_obsidian_stabilization_core.md` — lightweight 5-line + extended findings (load-bearing? — TBD at S3; primary candidate: *design-at-P3-propagation-at-P6 is the canonical pattern for absorbed-upstream-work*; STRONG-EXTENDED candidate: *proposed-patch artifact format ratifies as `aDNA.aDNA/missions/artifacts/` first-class deliverable type*) + 6/6 acceptance scorecard + Standing-Order discharge table + token-budget two-metric table with API-billing companion per Project SO #11
  2. This mission file frontmatter `in_progress → completed` + `closed_at` + `closed_session` + `actual_sessions` + deliverables marked landed
  3. Campaign master M3.1 row `in_progress → completed` + M3.0.5 row remains `planned-stub` + amendments-table entry at S3 close (per M2.4 / M2.1 / M2.2 / M1.5 / M2.3 / M2.3.5 / M2.4.5 amendments-at-close precedent)
  4. STATE.md (router) Op 3 archive-on-close 8th canonical instance refresh — demote M2.4.5 CLOSED bullet to concise form; new M3.1 CLOSED top bullet; refresh Next Steps + Last Session block + Next Session Prompt; maintain ≤ 20 kT cap
  5. 3 session files (S1 + S2 + S3) moved `active/` → `history/2026-05/` at S3 commit
- **Depends on**: 2 + 3 + 4 + 5.
- **Acceptance**: AAR has all required sections; campaign master state coherent; STATE.md router ≤ 20 kT; 3 session files in history/.

## Deliverables

| # | Deliverable | Session | Status |
|---|---|---|---|
| 1 | M3.1 mission spec (this file) | S1 | ✅ landed S1 |
| 2 | `idea_interactive_decision_surface.md` + M3.0.5 forecast row | S1 | ✅ landed S1 |
| 3 | `m31_obj3_t1_design_spec.md` — T1 fork-propagation patches | S2 | ✅ landed S2 |
| 4 | `m31_obj4_t2_design_spec.md` — T2 workspace-idempotency patches | S2 | ✅ landed S2 |
| 5 | aDNA.aDNA docs-drift fix bundle (`.obsidian/README.md` + `.obsidian/OBSIDIAN_CLAUDE.md`) | S2 | ✅ landed S2 |
| 6 | AAR + campaign master close + STATE.md refresh + session moves | S3 | ✅ landed S3 |

## Current State — Obsidian recon-audit findings (S1)

Recon completed 2026-05-21T02:34Z via 10 parallel reads. Last `.obsidian/` touch: 2026-04-13 (5+ weeks stale).

### Configuration inventory

| File | Size | Purpose | State |
|---|---:|---|---|
| `OBSIDIAN_CLAUDE.md` | 7.1 KB | AI agent interaction guide | **Has drift** — see Documentation Drift below |
| `README.md` | 3.7 KB | Human getting-started | **Has drift** — see Documentation Drift below |
| `app.json` | 545 B | Core app settings (vim, monospace font, ignore filters) | Clean |
| `appearance.json` | 152 B | Tokyo Night theme + Rebecca Purple (`#663399`) + 2 snippets | Clean |
| `community-plugins.json` | 357 B | **Ground truth: 15 plugin IDs** | Clean |
| `core-plugins.json` | 694 B | 33 core plugins (file-explorer + templates DISABLED; bases ENABLED) | Clean — confirms Bases is on (concern #6 prereq) |
| `hotkeys.json` | 465 B | 7 custom hotkeys (sidebar toggles + fold + graph + nav) | Clean |
| `types.json` | 97 B | 3 type mappings (aliases / cssclasses / tags) | Clean |
| `workspace.default.json` | 4.3 KB | Default layout (Home.md pinned + NN/Search/Bookmarks left + Outline/Backlinks right) | Clean — but vulnerable to T2 clobber |
| `snippets/core_theme.css` | 13 KB | Tokyo Night accent + headings + links + code blocks (Style Settings) | Clean |
| `snippets/editor_polish.css` | 6.6 KB | Tables + mermaid + popover + NN + callouts (Style Settings) | Clean |
| `snippets/archive/` | — | Original individual snippets preserved | Clean |

### Documentation Drift (3 findings)

| # | File | Issue | Severity |
|---|---|---|---|
| D1 | `.obsidian/README.md` | Lists "Omnisearch / Terminal / Folder Notes" in plugin table — NOT in current `community-plugins.json` ground-truth. Missing: `obsidian42-brat` / `termy` / `settings-search` / `obsidian-style-settings`. | Medium (operator/agent following README will install plugins that aren't ratified) |
| D2 | `.obsidian/OBSIDIAN_CLAUDE.md` | Plugin count claims "14 community plugins" — `community-plugins.json` has **15** (missing `settings-search` from text). | Low (count-only mismatch; plugin list otherwise aligned with JSON) |
| D3 | `.obsidian/OBSIDIAN_CLAUDE.md` | Uses plugin ID `advanced-canvas` in plugin table — actual JSON ID is `obsidian-advanced-canvas`. | Medium (agent following the wrong ID will get plugin-lookup failures) |

### Bonus observations (out of M3.1 scope — for M3.2+/backlog)

- `.obsidianignore` file should exist at vault root per `OBSIDIAN_CLAUDE.md` — needs verification at M3.1 S2.
- 7 custom hotkeys are sparse; M3.2+ may want a canonical hotkey set per OBSIDIAN_CLAUDE.md mention of "agent CLI presets" via Termy.
- Style Settings GUI controls (10 + 4 = 14 across 2 bundles) — may benefit from documented default preset for new operators.
- `bases` core plugin is ENABLED — M3.5 (Bases-driven HOME.md per campaign master) has substrate ready.
- Templater folder mappings (10) are documented in OBSIDIAN_CLAUDE.md — recheck against actual `plugins/templater-obsidian/data.json` at M3.2 (T4 canonicalization scope).

## Improvements classification

| Class | Items | Treatment |
|---|---|---|
| **Additive non-breaking** (M3.1 S2 scope) | D1 + D2 + D3 docs-drift fixes; OBSIDIAN_CLAUDE.md frontmatter addition | Apply minimal Edit at S2 Obj 5 (aDNA.aDNA only; no `.adna/` touch) |
| **Breaking** (deferred to v8 P6 propagation) | T1 setup.sh fork-propagation; T2 setup.sh --reset-layout flag | M3.1 S2 produces proposed-patch artifacts; v8 P6 lands at upstream commits |
| **Discovery required** (M3.2+ scope) | `.obsidianignore` verification; canonical hotkey set; Style Settings default preset; Templater data.json reconciliation | Folded into M3.2 T3+T4 scope per campaign master |

## Acceptance criteria

- [ ] All 6 deliverables landed at S3 close (cumulative)
- [ ] T1 + T2 design specs each contain literal patch-style diff text for upstream files (no actual `.adna/` mutation)
- [ ] Decision-surface backlog idea has 6 sections + frontmatter + cross-links ≥ 2 wikilinks per Project SO #10
- [ ] Campaign master M3.1 row flips `planned → in_progress` at S1 open + `in_progress → completed` at S3 close
- [ ] Campaign master M3.0.5 forecast row added at S1 (planned-stub; opens at operator ratification)
- [ ] Campaign master amendments-table entry for P2 → P3 phase exit gate operator-authorization at S1
- [ ] Campaign master amendments-table entry for M3.1 close at S3
- [ ] `.obsidian/README.md` plugin list aligned with `community-plugins.json` 15-ID ground truth (D1 fix)
- [ ] `.obsidian/OBSIDIAN_CLAUDE.md` plugin count + plugin IDs aligned with JSON ground truth (D2 + D3 fix)
- [ ] `.obsidian/OBSIDIAN_CLAUDE.md` has frontmatter (type/created/updated/last_edited_by/tags) per Project SO §Metadata standard
- [ ] `aar_m31_obsidian_stabilization_core.md` — lightweight 5-line + extended findings + 6/6 acceptance scorecard + Standing-Order discharge table + token-budget two-metric table with API-billing companion
- [ ] STATE.md router Op 3 archive-on-close 8th canonical instance refresh at S3; stays ≤ 20 kT cap
- [ ] Zero `.adna/` upstream touches end-to-end (v7.0 frozen at `27e6395`)
- [ ] Zero partner-vault contact (17 embargo memos preserved)
- [ ] Zero `~/.adna/measurement/measurement.sqlite` deliberate mutations
- [ ] Zero new ADRs at M3.1 unless load-bearing (Campaign SO #14 — phase-entry-gated; M3.1 may surface ADR-014 verification-handoff candidate at S2 but ADR-014 is forecast-scoped for M3.4 per ADR roadmap row 306)
- [ ] Zero `node.aDNA/` mutations (no token_baselines refresh required at M3.1; M3.x re-measurement contract per `m245_obj3` triggers at ≥ 20-session corpus)
- [ ] Mission file declares `token_budget_estimated` per ADR-016 Clause A two-metric (Standing Order #8 self-reference 9th tactical invocation candidate)
- [ ] 3 session files moved `active/` → `history/2026-05/` at S3 commit

## Operator decision gates

| # | Question | Resolution | Resolved at |
|---|---|---|---|
| D1 | Next mission: M3.1 / push first / M2.1.5 / spot-walk | **M3.1 (open + go)** | Plan ratification (AskUserQuestion 1 at `please-read-the-claude-md-silly-haven.md`) |
| D2 | M3.1 scope: T1+T2 only / T1+T2 + decision-surface stub / T1+T2 + Obsidian review fold / all three | **All three** (T1+T2 + decision-surface stub + Obsidian-review fold) per operator enrichment E + F at AskUserQuestion 1 follow-up text | Plan ratification |
| D3 | Decision-surface pattern home: SiteForge wrapper / aDNA-core skill / both | **aDNA-core skill + optional SiteForge premium skin** (Rosetta opinion per plan §My opinion on (E); operator-confirmable at decision-surface backlog idea §6 open questions) | Plan ratification (operator picked Recommended option) |
| D4 | Design-vs-implementation balance for T1+T2: ratify upstream patches now / produce design specs only / hybrid | **Design specs only at M3.1; v8 P6 owns upstream propagation** (per hard constraint resolution + Campaign SO #14 + ADR-005 rule 3) | Rosetta-default at S1 spec authoring; ratifies at S2 if operator does not override |
| D5 | aDNA.aDNA docs-drift fix scope at M3.1: README + OBSIDIAN_CLAUDE.md only / extend to .obsidianignore + hotkeys / full Obsidian canonicalization | **README + OBSIDIAN_CLAUDE.md only** (additive-non-breaking; the only `.obsidian/` mutation allowed at M3.1; broader canonicalization deferred to M3.2 T4) | Rosetta-default at S1 spec authoring; ratifies at S2 if operator does not override |

## Hard constraints

- **Zero `.adna/` upstream touches** — v7.0 frozen at `LatticeProtocol/aDNA@27e6395`; v8 P6 owns upstream propagation per Campaign Standing Order #14 + ADR-005 rule 3. T1+T2 design specs CITE `.adna/` files (e.g., `setup.sh:175-184`, `skill_project_fork.md`) but DO NOT mutate them.
- **Zero partner-vault contact** — 17 partner-affiliated embargo memos preserved (Wilhelm × 2 + SuperLeague + SIP + 13 others); P3 entry does not trigger partner outreach.
- **Zero `~/.claude/settings.json` modifications**.
- **Zero `~/.adna/measurement/measurement.sqlite` deliberate mutations** — hook firing during session is normal; deliberate writes prohibited.
- **Zero hook modifications**.
- **Zero new ADRs at M3.1 unless load-bearing** — Campaign Standing Order #14 (ADR ratification gated at phase entries); M3.1 phase-entry already authorized at session open. ADR-014 (verification-handoff topology) is forecast-scoped to M3.4 per ADR roadmap row 306; M3.1 does not draft it. If T1/T2 design work surfaces an unanticipated load-bearing decision, operator override per Campaign SO #14 exception clause may apply (escalate via SITREP).
- **Zero `node.aDNA/` mutations** — token_baselines.md v0.1.3 already published at M2.4 close; M3.x re-measurement contract (per `m245_obj3_measurement_contract.md`) triggers only at ≥ 20-session corpus and is OPERATOR-decisioned, not auto-applied here.
- **Zero M2.1.5 / M3.0.5 / M3.2-M3.7 scope creep** — M3.1 stays in T1+T2 lane; M3.0.5 forecast row only (no spec authoring); M3.2-M3.7 untouched.
- **Zero push to origin** — push is operator-discretionary post-AAR per M2.3.5 push-readiness checklist precedent. HEAD is 8 commits ahead of origin/main at S1 open; M3.1 S3 close may further extend this; operator authorizes push separately.
- **Zero scope expansion mid-mission** — operator enrichments E (decision-surface stub) + F (Obsidian-review fold) are folded into M3.1 at S1 spec authoring per D2; further mid-mission scope expansion requires operator-override per Standing Order #14.
- **Zero `.obsidian/` config or plugin mutations at M3.1** — Obj 5 docs-drift fix touches only README.md + OBSIDIAN_CLAUDE.md (documentation), NOT JSON config files or plugin folders. Broader canonicalization deferred to M3.2 T4 per D5.

## Standing Order discharges (preview — fills at AAR)

| # | Order | M3.1 discharge plan |
|---|---|---|
| Project SO #1 | Phase gates are human gates | ✅ P2 → P3 phase exit gate operator-authorized at S1 open 2026-05-21T02:34:03Z via plan ratification; recorded in campaign master amendments-table |
| Project SO #3 | Context budget is doctrine | `token_budget_estimated` declared in frontmatter per ratified ADR-016 Clause A two-metric (content-load + API-billing companion); AAR reports estimate-vs-actual + API-billing per Project SO #11 |
| Project SO #5 | Every mission gets an AAR | `aar_m31_obsidian_stabilization_core.md` at Obj 6 (S3) |
| Project SO #6 | Archive never delete | M3.1 adds + edits; deletes nothing (docs-drift fix is additive Edit; absorbed-campaign reference preserved) |
| Project SO #7 | Dual-audience test | Each touched artifact verified — design specs accessible to both developer (literal patch text) + newcomer (option-matrix tables with explanatory rationale); backlog idea accessible to both (problem statement plain-language + technical pattern detail) |
| Project SO #8 | Self-reference mandatory | M3.1 mission lives in the routing layer M2.4.5 just hardened. M3.1 produces design specs that gate whether the M2.4.5-hardened AGENTS.md discoverability re-frame succeeds for the M3.x cohort. **9th tactical invocation candidate in v8** (after 8 in v8 P2) |
| Project SO #9 | Upstream spec is source of truth | T1+T2 design specs CITE upstream `.adna/setup.sh` + `skill_project_fork.md` as source-of-truth + DEFER ratification of patches to v8 P6 cycle; never contradict the spec (the spec is what M3.1 documents and proposes amending) |
| Project SO #10 | Cross-link aggressively | Each artifact has ≥ 2 wikilinks; design specs cross-link F-S2-1 + F-S2-4 backlog files + absorbed-campaign master + ADR-016 + this mission spec; AAR cross-links 4 prior mission AARs (M1.3 + M2.1 + M2.3 + M2.4 canonical 3-session instances) |
| Project SO #11 | Per-mission context budget mandatory | Mission frontmatter `token_budget_estimated` two-metric; AAR reports actual + delta + API-billing companion |
| Campaign SO #12 | Per-mission context budget | Same as Project #11; two-metric reporting |
| Campaign SO #14 | ADR ratification gated at phase entries | ✅ NO new ADRs at M3.1 expected; if surfaced, operator-override exception clause applies (escalate via SITREP) |
| Campaign SO #17 | Mission_class discipline | ✅ `mission_class: implementation` declared (T1+T2 design specs + docs-drift fix are executable artifacts even though deferred-to-P6 for upstream propagation) |
| Campaign SO #19 | Phase exit = human gate | ✅ applies at P3 → P4; M3.1 close does NOT auto-open M3.2 OR P4; both stay operator-decision |
| Campaign SO #5 (absorbed-campaign) | 5th + 6th-instance additive-upstream candidates explicit | ✅ T1 design spec calls out 5th-instance pattern explicitly; T8 (M3.4 scope) will call out 6th-instance |

## Cross-vault impact

- **`.adna/` upstream** — zero touches at M3.1; T1+T2 design specs join the **v8 P6 propagation queue** (now 7 doctrinal additions: 5 from M2.4 close + AGENTS.md invariants/ADR-022/ADR-016 amendment/Project SO #11/Heavy-File Read Convention + T1 fork-propagation patch + T2 workspace-idempotency patch).
- **Partner vaults** — zero contact; 17 embargo memos preserved.
- **`node.aDNA/`** — zero mutations at M3.1 (token_baselines.md v0.1.3 stays as-published at M2.4 close).
- **`lattice-labs/`** — zero contact; absorbed-campaign sibling `campaign_validation_node_adna_lwx_outputs` lives there and is not consumed at M3.1 (verification-dispatch comes at M3.4 per ADR-014 forecast).
- **GitHub `LatticeProtocol/aDNA.aDNA`** — push deferred to operator-discretionary post-M3.1 close; HEAD 8 + commits-at-M3.1-close ahead of origin/main.
- **All future M3.2-M3.7 missions** — inherit T1+T2 stabilization design; M3.2 (T3+T4) consumes T2's `--reset-layout` flag forecast as a `skill_obsidian_canonicalize.md` substrate.
- **All future M4.x-M6.x missions** — M6.x propagation phase lands T1+T2 patches at upstream.

## Cross-Mission Dependencies

- **Forward dep on M3.0.5** (decision-surface capability mission; forecast row added at this session). M3.x missions hitting heavy gates (e.g., M3.3 first-open UX standardization; M3.5 Bases-driven HOME.md; M3.7 Modular III for Obsidian) SHOULD consume the decision-surface pattern once M3.0.5 lands. M3.1 itself does not consume the pattern (T1+T2 are too narrow to warrant a heavy decision surface); but the pattern is forecast-available for downstream missions.
- **Forward dep on M3.4** (T7 verification handoff + ADR-014). M3.1 design specs reference v8 P6 propagation contract as the deferred-implementation phase; M3.4 codifies the verification-handoff topology as `skill_verification_handoff.md`; M6.x P6 missions consume both T1+T2 patches + the verification-handoff skill to land safely at upstream.
- **Backward dep on M2.4.5** (AGENTS.md hardening). M3.1 is the first mission AFTER the M2.4.5-hardened routing layer; whether M3.1's session prompts re-read the hardened AGENTS.md (vs cold-load deep files) is the FIRST behavioral test of the discoverability re-frame. Captured at M3.1 S1+S2+S3 session SITREPs as informal observation; formal Q2 SQL re-measurement happens at M3.x ≥ 20-session corpus per `m245_obj3` measurement contract.
- **Backward dep on absorbed `campaign_obsidian_deployment_stabilization`** — M3.1 consumes the absorbed campaign's master file as substrate (8-track scope + T1+T2 specifics + persona inheritance); the absorbed campaign master + CLAUDE.md stay as read-only reference; no further work at the absorbed campaign's directory.

## Self-reference + dual-audience

This mission is the first mission after the AGENTS.md routing-layer hardening — its session entries are the FIRST behavioral evidence of whether the M2.4.5 discoverability re-frame succeeds. The mission file itself sits in `how/campaigns/campaign_adna_serious_tool_readiness/missions/` — a directory whose AGENTS.md was top-12 hardened at M2.4.5. **Standing Order #8 self-reference 9th tactical invocation candidate in v8**.

The mission also self-applies its own substrate: M3.1's docs-drift fix to `OBSIDIAN_CLAUDE.md` aligns the AI-agent interaction guide with the actual `community-plugins.json` ground-truth — using the very Obsidian config the mission is auditing. The audit produces the fix that the audit was needed to produce.

**Dual-audience test**:
- **Developer**: each design spec contains literal patch-style diff text + option-matrix tables + v8 P6 propagation contract — directly executable when v8 P6 cycle opens.
- **Newcomer**: each design spec opens with a plain-language problem statement (F-S2-1 + F-S2-4 backlog files provide newcomer-accessible framing); option-matrix tables include explanatory rationale; recon-audit findings table is human-readable inventory; docs-drift fix uses concrete examples (which plugin is mis-IDed; what the JSON says vs what the docs say).

## Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| T1 patch design conflicts with `.adna/` HEAD when v8 P6 cycle opens | Low-Medium | Medium | T1 design spec includes "patch verification against upstream HEAD at v8 P6 entry" as Phase-1 step; expect ≥ 1 round of patch refresh at P6 |
| T2 `--reset-layout` flag conflicts with future `--force` semantics | Low | Low | T2 design spec explicitly defines `--reset-layout` vs `--force` orthogonality; option-matrix evaluates the conflict |
| Operator overrides D4 (design-only) and requests immediate upstream commits at M3.1 | Low | High | Operator override is explicit at S1 spec ratification; if operator requests upstream, M3.1 mission_class flips to integration and v8 P6 propagation cycle opens early — escalate via SITREP |
| aDNA.aDNA docs-drift fix at Obj 5 surfaces additional drift beyond D1-D3 | Medium | Low | Mitigation: discovery-class items get flagged for M3.2 T4 absorption; M3.1 S2 scope stays at D1-D3 only |
| S2 token budget overflow due to recon + design spec scope | Low-Medium | Medium | Per ADR-016 Clause A budgets are estimates; > 2× overflow triggers retrospective per Project SO #11; S2 may compress aDNA.aDNA docs-drift fix to a smaller scope (D1+D3 only; D2 to follow-up) if needed |
| `.obsidian/` config recon surfaces stale plugin install (binary present but JSON says disabled, or vice versa) | Medium | Low | M3.1 recon-audit doesn't verify plugin binaries (that's T3 scope at M3.2); discovery items only |

## Notes

- This is the **first mission after the P2 → P3 phase-gate authorization** at this session — the campaign-master amendments-table at S1 records the authorization explicitly (per Project SO #1 + Campaign SO #19 phase-gate-is-human-gate doctrine).
- **Operator enrichment E** (decision-surface planning stubs) lands at Obj 2 as a sibling artifact + M3.0.5 forecast row in the campaign master. Operator opinion-request answered in the backlog idea §3 opinion memo (aDNA-core skill + optional SiteForge premium skin); operator ratifies in §6 open questions when M3.0.5 mission opens. **Cross-reference**: this overlaps with two pre-existing backlog ideas seeded 2026-05-20 (the day before M3.1 opened) — [[how/backlog/idea_operator_web_gate_ui_pattern.md|B-aDNA-2026-05-20-WebGate]] (MoleculeForge P3 gate live demonstration `gate_decision_p3.html`; OIP-Web sub-pattern; was untracked at M3.1 S1 open) and [[how/backlog/idea_campaign_operator_interaction_patterns_unification.md|B-aDNA-2026-05-20-OIP]] (broader P1 campaign-planning idea — "Operation Concord" — covering Canvas + LatticeTerminal + LatticeAgent + AskUserQuestion + osascript + custom HTML; 6-7 phases / 20-30 missions). M3.0.5 may either (a) absorb into the OIP unification campaign as the web-decision-surface sub-pattern, or (b) stay narrower as a single-purpose capability mission with the OIP campaign opening separately. Operator decides at next-session reconciliation; recommended path = the M3.0.5 forecast row is provisional and the OIP-unification campaign may supersede it when scoped.
- **Operator enrichment F** (Obsidian setup/standard review) lands at Obj 1 §Current State recon + Obj 5 docs-drift fix; broader canonicalization deferred to M3.2 T4 per D5.
- **5th + 6th-instance additive-upstream candidates** are explicitly called out per Campaign SO #5 (absorbed-campaign) — T1 is the 5th instance (single-commit additive-upstream pattern); T8a (M3.4 scope) will be the 6th.
- **Canonical 3-session implementation-class shape — 6th instance candidate** after M1.3 + M1.4 + M2.1 + M2.3 + M2.4 (5 prior instances ratified at M2.4 close). If S1+S2 compress to 2 sessions for whatever reason, the shape stays valid (canonical implementation-class is 2-3 sessions per `m21_obj4` rubric).
- **Cross-references** for routing (≥ 2 wikilinks per Project SO #10): [[how/campaigns/campaign_adna_serious_tool_readiness/campaign_adna_serious_tool_readiness.md|campaign master]] + [[how/campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p2_m245_agents_md_bulk_edit.md|M2.4.5 mission spec]] (immediate predecessor; canonical 3-session shape model) + [[how/campaigns/campaign_obsidian_deployment_stabilization/campaign_obsidian_deployment_stabilization.md|absorbed campaign master]] (T1+T2 substrate) + [[how/backlog/backlog_F_S2_1_setup_sh_fork_propagation.md|F-S2-1 backlog (T1 finding)]] + [[how/backlog/backlog_F_S2_4_obsidian_workspace_clobber.md|F-S2-4 backlog (T2 finding)]] + [[what/decisions/adr_016_per_mission_context_budget.md|ADR-016 per-mission context budget]] + [[how/backlog/idea_interactive_decision_surface.md|decision-surface backlog idea (this S1)]] + [[STATE.md|STATE router]].

## Completion Summary

**Closed 2026-05-21T07:28:03Z** at `session_stanley_20260521T072803Z_v8_m31_s3`. Canonical 3-session implementation-class shape **6th instance ratified** (after M1.3 + M1.4 + M2.1 + M2.3 + M2.4). 6/6 cumulative deliverables LIVE. Zero scope expansion mid-mission. All 11 hard constraints honored end-to-end (zero `.adna/` touches; zero partner contact; zero new ADRs; zero `node.aDNA/` writes; zero push to origin). **Design-at-P3-propagation-at-P6 pattern ratified** as canonical for absorbed-upstream-work; v8 P6 propagation queue grows from 5 → 7 doctrinal additions (adding T1 fork-propagation patch + T2 workspace-idempotency patch). **Proposed-patch artifact ratifies as `aDNA.aDNA/missions/artifacts/` first-class deliverable type** (STRONG-EXTENDED finding).

### Deliverables landed

1. ✅ M3.1 mission spec (this file) — S1
2. ✅ `how/backlog/idea_interactive_decision_surface.md` (decision-surface backlog idea; 6 sections + opinion memo; M3.0.5 forecast row in campaign master Phase 3 table) — S1
3. ✅ `missions/artifacts/m31_obj3_t1_design_spec.md` — T1 fork-propagation pattern (5th-instance additive-upstream candidate; ~17 KB; 9 H2 sections; 7 wikilinks; literal patch-style diff for `.adna/skill_project_fork.md`; v8 P6 propagation contract) — S2
4. ✅ `missions/artifacts/m31_obj4_t2_design_spec.md` — T2 workspace-idempotency pattern (`setup.sh --reset-layout` flag; ~20 KB; 8 H2 sections; 6 wikilinks; literal patch-style diff for `.adna/setup.sh:173-184` + `skill_project_fork.md` Step 5 + `skill_onboarding.md` Step 10; T4 cross-cut hook for M3.2) — S2
5. ✅ aDNA.aDNA docs-drift fix bundle: `.obsidian/README.md` D1 fix (Omnisearch→BRAT / Terminal→Termy / Folder Notes→Settings Search; 15-row plugin table aligned with `community-plugins.json` JSON ground truth) + `.obsidian/OBSIDIAN_CLAUDE.md` D2 fix (14→15 plugin count) + D3 fix (`advanced-canvas` → `obsidian-advanced-canvas`) + Settings Search row appended + frontmatter added (`type: governance` + dates + `status: active` + `last_edited_by` + tags including `m31_obj5_docs_drift_fix`) — S2
6. ✅ Obj 6 close cascade — S3:
   - `missions/artifacts/aar_m31_obsidian_stabilization_core.md` (lightweight 5-line + 19/19 acceptance scorecard PASS + 14-row Standing-Order discharge + 3-category extended findings × 4 each = 12 + token-budget two-metric table + 2 load-bearing findings + 20 cross-references)
   - This mission file frontmatter `in_progress → completed` + `closed_at` + `closed_session` + `actual_sessions: 3` + `spec_completeness: complete` + §Deliverables table all 6 marked landed + §Completion Summary populated (this section)
   - Campaign master M3.1 row `in_progress → completed` + amendments-table 2026-05-21 entry (M3.1 close + 6/6 deliverables + canonical 3-session 6th-instance ratification + design-at-P3-propagation-at-P6 pattern ratified + v8 P6 propagation queue grows to 7)
   - STATE.md router **Op 3 archive-on-close 9th canonical instance** refresh (demote M3.1 S1 OPENED bullet to concise form; new M3.1 CLOSED top bullet; refresh Next Steps + Last Session + Next Session Prompt; ≤ 20 kT cap maintained)
   - 3 session files (S1 + S2 + S3) moved `active/` → `history/2026-05/` at S3 commit

### Key findings

- **PRIMARY (campaign-strategic)**: *Design-at-P3-propagation-at-P6 is the canonical pattern for absorbed-upstream-work.* When P3+ phase missions surface upstream-pointed findings under the v8 hard constraint forbidding `.adna/` touches (v7.0 frozen at `27e6395`), the resolution = design specs + proposed-patch artifacts land at P3 (mutable inside `aDNA.aDNA/`); v8 P6 owns the upstream propagation cycle (single-commit-per-patch). Doctrinal framework: ADR-005 rule 3 + Campaign SO #14 + ADR-005 rule 6 + ADR-008 §f. Skill graduation candidate `skill_aDNA_upgrade_cycle.md` triggered (3 of 3 instances per `m21_obj4` rubric — M2.3.5 + M2.4 close inheritance + M3.1 = 3).
- **STRONG-EXTENDED (procedural)**: *Proposed-patch artifact ratifies as `aDNA.aDNA/missions/artifacts/` first-class deliverable type.* The 6-section structure (finding / root cause / option matrix ≥ 3 / recommended option + rationale / literal patch text / v8 P6 propagation contract) is canonical for design-spec class. T1 (~17 KB; 9 H2 sections) + T2 (~20 KB; 8 H2 sections) demonstrate both minimum and extended shapes. Skill graduation candidate `skill_design_spec_authoring.md` at ≥ 3 use instances (current 2 of 3; M3.2 T3 or T4 spec triggers graduation).
- **Standing Order #8 self-reference 12th tactical invocation candidate in v8** (8 prior in P2 + 4 at M3.1 S1+S2+S3 progression). M3.1's design specs cite the M2.4.5-hardened routing layer that gates the directory M3.1's mission file lives in. The docs-drift fix to `OBSIDIAN_CLAUDE.md` aligns the AI-agent interaction guide using the very Obsidian config the mission is auditing. Candidate skill `skill_self_reference_design.md` at v8 P6.
- **Op 3 archive-on-close pattern 9th canonical instance** at this S3 close (after M2.1 + M2.2 + M1.5 + M2.3 + M2.3.5 + M2.4 + M2.4.5 + M3.1 S1 = 8 prior). `skill_campaign_close_archive.md` graduation now satisfied by 3× margin.

## Mission AAR

See [[artifacts/aar_m31_obsidian_stabilization_core.md|aar_m31_obsidian_stabilization_core.md]] — lightweight 5-line + 19/19 acceptance scorecard + 14-row Standing-Order discharge + 12 extended findings + token-budget two-metric table + 2 load-bearing findings (PRIMARY + STRONG-EXTENDED) + 20 cross-references. Authored at this S3 close per `how/templates/template_aar_lightweight.md`.
