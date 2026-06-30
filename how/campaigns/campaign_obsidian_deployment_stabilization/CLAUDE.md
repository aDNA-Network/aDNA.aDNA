---
type: governance
created: 2026-05-13
updated: 2026-06-09
status: active
last_edited_by: agent_stanley
tags: [governance, campaign_obsidian_deployment_stabilization]
---

# CLAUDE.md — Campaign: Obsidian Deployment Stabilization

> **Status: planned.** Mission tree TBD at the campaign's own planning mission. Campaign opens at operator authorization per Standing Order #1. Predecessor `campaign_lattice_workspace_ux` mini-campaign closed 2026-05-13T07:00Z+.

## Campaign Identity

| Field | Value |
|-------|-------|
| Campaign | `campaign_obsidian_deployment_stabilization` |
| Owner | Rosetta |
| Status | **planned** (opens at operator authorization) |
| Current Phase | -1 (not yet open) |
| Predecessor | `campaign_lattice_workspace_ux` (mini-campaign closed 2026-05-13T07:00Z+) |
| Sibling | `campaign_validation_node_adna_lwx_outputs` (in `lattice-labs/`; Berthier + Carly + Herb; ships in parallel) |
| Persona | Rosetta (same as project) |
| North-star metric | "easy and fluid way to build/operate/utilize context graphs" (operator-stated 2026-05-13; saved to memory) |

## Quick Start (for the agent that opens the planning mission)

1. Confirm predecessor close:
   - `aDNA.aDNA/how/campaigns/campaign_lattice_workspace_ux/campaign_lattice_workspace_ux.md` has `status: completed`
   - `aDNA.aDNA/how/campaigns/campaign_lattice_workspace_ux/missions/artifacts/aar_campaign_lattice_workspace_ux.md` exists
   - Operator authorizes opening this campaign per Standing Order #1
2. Read this CLAUDE.md, then read `campaign_obsidian_deployment_stabilization.md`
3. Read the source findings:
   - `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/cross_graph_findings_to_v2_from_lattice_workspace_ux.md` §7 (F-S2-1..8 catalog)
   - `aDNA.aDNA/how/backlog/backlog_F_S2_1..8_*.md` (8 files with finding-specific routing notes)
4. Read the mini-campaign AAR + M-LWX-03 mission AAR for cross-mission context
5. Read the strategic UX goal memory: `~/.claude/projects/-Users-stanley-lattice-aDNA-aDNA/memory/project_adna_lattice_ux_goal.md`
6. Open the planning mission first — finalize mission tree + decision points + estimation calibration (pattern: v2 M01 / M04b)
7. Plan-mode-first execution per the inherited discipline from `campaign_lattice_workspace_ux` (operator pushback as quality gate; multi-detour re-entry as audit-quality multiplier)

## Key Files

| File | Purpose |
|------|---------|
| `campaign_obsidian_deployment_stabilization.md` | Master campaign document (this directory); status: planned |
| `missions/mission_<NN>_<slug>.md` | Individual mission files; tree finalized at planning mission |
| `missions/artifacts/` | Mission deliverables + AARs |

## Standing Orders (campaign-specific)

These supplement the project-level standing orders in `aDNA.aDNA/CLAUDE.md`:

1. **The "easy/fluid context graphs" goal is the north star.** Every track + mission should be evaluable against this. If a proposed change doesn't make the operator-facing UX easier or more fluid, question whether it belongs in scope.
2. **Implementation here; validation in `campaign_validation_node_adna_lwx_outputs/`** (in `lattice-labs/`). Don't recreate validation tooling — dispatch to the sibling campaign instead.
3. **Federation discipline for shared concerns.** If a finding's fix would benefit other forge vaults (`SiteForge.aDNA`, `CanvasForge.aDNA`, etc.), implement once at upstream `.adna/` or as a federated skill, not duplicated per-vault.
4. **Plan-mode-first inherited from predecessor.** Same execution model as the LWX mini-campaign — architectural decisions in plan-mode before any vault mutation; operator pushback welcome.
5. **5th + 6th-instance additive-upstream candidates explicit.** T1 (setup.sh fork propagation) is 5th-instance; T8a (obsidian-local-rest-api to setup.sh PLUGIN_IDS) is 6th-instance. Pattern is now stable; either commits should be small + cited.

## Context Loading

| Resource | When |
|----------|------|
| `aDNA.aDNA/CLAUDE.md` | Always — project standing orders + persona |
| `campaign_lattice_workspace_ux/missions/artifacts/aar_campaign_lattice_workspace_ux.md` | Always — predecessor full context |
| `campaign_adna_v2_infrastructure/missions/artifacts/cross_graph_findings_to_v2_from_lattice_workspace_ux.md` | Always — F-S2-1..8 specs |
| `aDNA.aDNA/how/backlog/backlog_F_S2_*.md` (8 files) | Per-finding deep dive |
| `~/aDNA/.adna/setup.sh` | Required for T1/T2/T3/T8 work — the upstream installer being extended |
| `~/aDNA/.adna/how/skills/skill_project_fork.md` | Required for T1 + T5 work |
| `~/aDNA/.adna/how/skills/skill_node_health_check.md` | Required for T3 work |
| `~/aDNA/.adna/how/skills/skill_workspace_upgrade.md` | Required for T5 work |
| `~/aDNA/.adna/how/skills/skill_onboarding.md` | Required for T5 work |
| `~/aDNA/node.aDNA/.obsidian/OBSIDIAN_CLAUDE.md` | Useful reference for plugin loadout expectations |
| `lattice-labs/how/campaigns/campaign_validation_node_adna_lwx_outputs/CLAUDE.md` | Sibling validation campaign for dispatch coordination |

## Delegation Notes

This campaign was stubbed by Rosetta at M-LWX-03 S2 Phase L (2026-05-13). Mission tree is **not finalized** — that's the planning mission's job (Phase 0). The 8 tracks (T1-T8) are the anticipated scope; missions may bundle multiple tracks (e.g., T1 + T5 + T6 all touch fork-time UX could be one mission).

If you are the agent opening this campaign for the first time:
- The 8 F-S2-* findings are the source-of-truth for what needs fixing; the tracks are organizational hooks
- The validation campaign (in lattice-labs) ships in parallel and provides operational dispatch — don't duplicate
- T7 (verification handoff documentation) is the load-bearing architectural deliverable; consider opening that mission early so its skill drives other tracks' design
- T8 (agent-driven Obsidian inspection) is the most architecturally interesting — addressing it well may compress the rest of the work

## Pattern Note

This campaign is the **successor to the first explicit mini-campaign of `aDNA.aDNA`** and serves a **load-bearing architectural primitive** (verification-handoff topology) saved to operator-stated strategic priority (easy/fluid context graphs). The pattern that emerges here may apply to other Obsidian-deploying vaults across the forge ecosystem.
