---
campaign_id: campaign_hearthstone
type: campaign
title: "Operation Hearthstone — ship a complete, polished base Home.aDNA into the public template"
owner: stanley
status: planning
phase_count: 6
mission_count: 12
estimated_sessions: "8-14"
calibrated_sessions: "8-14"
estimation_class: "governance-broad"
priority: high
created: 2026-06-18
updated: 2026-06-18
last_edited_by: agent_hestia
tags: [campaign, hearthstone, home_adna, base_template, node_bootstrap, ontology_v8, upstream, cross_vault_authored]
---

# Campaign: Operation Hearthstone — ship a complete, polished base Home.aDNA into the public template

> **Cross-vault genesis (2026-06-18, status: planning).** Chartered by **Hestia** from a `Home.aDNA` session after the operator chose **"full polished base"** in response to *"does `Home.aDNA/` have a public base on GitHub usable to seed new nodes, or can the base system bootstrap its own home graph?"* Authored here as a **landing pad** — **Rosetta + operator own activation and every gated decision** (idea ratification, the v8.0 ADR, the public release). Handoff memo: [[who/coordination/coord_2026_06_18_hestia_to_rosetta_hearthstone_charter_handoff]]. Origin plan: `~/.claude/plans/does-the-home-dir-adaptive-fern.md`. Home-side record: `Home.aDNA/how/sessions/history/2026-06/session_2026_06_18_hearthstone_upstream_prep.md`.

## Goal

A fresh `git clone https://github.com/aDNA-Network/aDNA.git ~/aDNA && cd ~/aDNA && claude` **detects the absence of a node vault, offers to bootstrap it, and produces a complete, correct, _polished_ Hestia `Home.aDNA/`** out of the box — canonical `inventory`/`identity` entity types, the Hestia governance `CLAUDE.md`, and the themed gallery/topology home — shipped via the gate-fired `skill_template_release` to `.adna/` and the public `aDNA-Network/aDNA` image at standard **v8.0**.

## Context

The base template today is **partial** for the per-node `Home.aDNA/` vault. Verified against `.adna/` (= the public image source): it **ships** the `HOME.md` landing-page template and all 6 node-skills (`project_fork`, `node_bootstrap_interview`, `inventory_refresh`, `node_health_check`, `update_all_vaults`, `node_credentials_audit`), so it can *generate* a functional home on the fly (the ADR-034 "generate, don't ship a fat skeleton" posture). It is **missing**: the `what/inventory/` + `who/identity/` entity-type scaffolds (proposed, not canonical); a Hestia governance `CLAUDE.md` template (a Home fork inherits the generic **Berthier** `.adna/CLAUDE.md`); the Step-0 router "offer to bootstrap Home" flow (public `workspace_claude_md.template` Step 0 = legacy-root detection only); and the polished exemplar bundle. Net: a fresh node never gets *offered* a proper Home, and what it could assemble is plain and Berthier-governed.

This is standard-evolution work → it runs here (Rosetta), authored in the dev graph and released to `.adna/` + public via `skill_template_release` (Standing Rule 1: never hand-edit `.adna/`). `Home.aDNA` (Hestia) supplies the reference artifacts that already exist on the node and validates via `skill_node_health_check`.

**Feeds this campaign — 6 upstream ideas** (`how/backlog/`, all `proposed`): `idea_upstream_inventory_entity_type`, `idea_upstream_identity_entity_type`, `idea_upstream_node_exemplar_template`, `idea_upstream_project_fork_exemplar_invocation`, `idea_upstream_home_claude_template` (filed 2026-06-18), `idea_upstream_router_node_vault_detection` (filed 2026-06-18).

## Scope

### In Scope
- Promote `inventory` (WHAT) + `identity` (WHO) to **base** entity types at standard **v8.0** (un-namespaced, `merge: invariant`) — ontology + `.adna/CLAUDE.md` table + `MANIFEST.md` + entry templates + scaffold `AGENTS.md`.
- Ship **`template_home_claude.md`** (genericized Hestia/Home governance CLAUDE.md; persona-portable) + wire `skill_project_fork.md` to install it for Home-class forks.
- Add the **Step-0 "Node Vault Detection / offer to bootstrap Home"** flow to the workspace-router template.
- Upstream the **exemplar bundle** (`template_node_adna_exemplar/`) + fix the **CanvasForge→Canvas.aDNA** drift; document plugin prereqs.
- Wire the **exemplar invocation** (interview theming vars + the callout-fold `>`-prefix profile in Step 9 + `--exemplar-home` post-fork overlay; opt-in).
- **Release** at v8.0 via `skill_template_release` + end-to-end verification.

### Out of Scope
- Non-Home vault CLAUDE.md templates / other personas' governance files.
- The terminal cold-start ASCII splash (separate `idea_upstream_lattice_home_pattern`).
- Retroactive re-bootstrap of existing nodes (forks inherit at fork-time only).
- Multi-node / partner rollout of the new bootstrap (a Network/Venus concern).

### Subsumes

| Backlog idea | Status at charter | Lands in |
|---|---|---|
| [[idea_upstream_inventory_entity_type]] | proposed | P1 |
| [[idea_upstream_identity_entity_type]] | proposed | P1 |
| [[idea_upstream_home_claude_template]] | proposed | P2 |
| [[idea_upstream_router_node_vault_detection]] | proposed | P2 |
| [[idea_upstream_node_exemplar_template]] | proposed | P3 |
| [[idea_upstream_project_fork_exemplar_invocation]] | proposed | P4 |

## Phases & Missions

> Mission rows are planned anchors; concrete mission files are created in `missions/` at **activation** (lifecycle §Activation). Only the P0 mission stub exists at charter.

### Phase 0: Charter, ratify, source-map
| Mission | Title | Sessions | Dependencies | Status |
|---|---|---|---|---|
| 0 | Ratify the 6 ideas (`proposed→accepted`) · draft the inventory+identity→base-v8.0 ADR · establish the `skill_template_release` source-map · confirm router source-of-truth path | 1-2 | — | planned |

**Phase exit gate**: operator approves scope/phases/mission-sequence; the v8.0 ADR is ratified; the source-map (dev path → `.adna/` path) is recorded.

### Phase 1: Entity-type foundations (inventory + identity)
| Mission | Title | Sessions | Dependencies | Status |
|---|---|---|---|---|
| 1 | Promote `inventory` + `identity` to base types — genericized scaffold `AGENTS.md`, `template_inventory_entry.md`/`template_identity_entry.md`, `ontology.md` rows 15/16, `.adna/CLAUDE.md` table + `MANIFEST.md` | 1-2 | P0 | planned |

**Phase exit gate**: both entity types declared canonical (un-namespaced, invariant); D9 companion + D7 federation patterns verified; ADR ratified.

### Phase 2: Base Home self-sufficiency (minimal-correct core)
| Mission | Title | Sessions | Dependencies | Status |
|---|---|---|---|---|
| 2 | `template_home_claude.md` (genericized Hestia CLAUDE.md) | 1-2 | P1 | planned |
| 3 | Step-0 router "offer to bootstrap Home" + wire `skill_project_fork.md` Home-class install | 1 | P1 | planned |

**Phase exit gate**: a fresh Home-class fork yields a complete, correct (plain) Hestia Home, and the router *offers* it unprompted.

### Phase 3: Exemplar template bundle
| Mission | Title | Sessions | Dependencies | Status |
|---|---|---|---|---|
| 4 | Upstream `template_node_adna_exemplar/`; **fix CanvasForge→Canvas.aDNA drift**; decide ship-with-dep vs optional-degrade; document plugin prereqs | 2 | P1 | planned |

**Phase exit gate**: `smoke_render.py --parity` passes; no leftover `{{`; topology dependency resolves to Canvas.aDNA (or degrades cleanly).

### Phase 4: Exemplar invocation wiring
| Mission | Title | Sessions | Dependencies | Status |
|---|---|---|---|---|
| 5 | Interview theming vars + **callout-fold `>`-prefix profile in Step 9** + `--exemplar-home` post-fork overlay (opt-in) | 2 | P3 | planned |

**Phase exit gate**: opt-in exemplar fork renders the themed home (Bases §Gallery · §Topology · 4 folds); decline → plain base HOME.

### Phase 5: Release & verify (outward publish)
| Mission | Title | Sessions | Dependencies | Status |
|---|---|---|---|---|
| 6 | `skill_template_release` (assemble · embed-note · v8.0 two-track bump · tag · **push**) + fresh-clone smoke + real bootstrap dry-run | 1-2 | P2,P4 | planned |

**Phase exit gate**: 7-gate fresh-clone smoke + end-to-end bootstrap dry-run pass; `skill_node_health_check` exits 0; operator approves the public push.

## Decision Points

| # | When | Decision | Status |
|---|---|---|---|
| 1 | P0 | Approve campaign scope/phases/mission-sequence; activate (`planning→active`) | pending |
| 2 | P0/P1 | Ratify the inventory+identity→base **v8.0** ADR (+ batching with `network_node_mirror`/`permission_edge`) | pending |
| 3 | P3 | CanvasForge→Canvas exemplar dependency: ship-with-dep vs optional-degrade | pending |
| 4 | each phase | Phase exit gate (human gate — never auto-advance) | pending |
| 5 | P5 | **Approve the public push** to `aDNA-Network/aDNA` (outward release) | pending |

## Risk Register

| Risk | Severity | Mitigation |
|---|---|---|
| Exemplar bundle references merged-away **CanvasForge** (pt09, 2026-06-17) | High | Repoint `CANVASFORGE_CODE` / `what/canvasforge/CLAUDE.md.template` / topology generator to Canvas.aDNA before release (P3) |
| **Callout-fold `>`-prefix profile** not taught to interview Step 9 (load-bearing) | High | Joint P3↔P4 requirement; `SUBSTITUTIONS.md` parity test gates it |
| v8.0 ontology cut not coordinated with the other proposed base promotions | Medium | Batch inventory/identity with `network_node_mirror`/`permission_edge` into one clean major (P0 ADR) |
| Template parity drift vs the evolving `Home.aDNA` reference | Medium | Skeleton-parity invariant + check (the bundle's `SUBSTITUTIONS.md` discipline) |
| Persona hard-coding (Hestia) in the CLAUDE template | Medium | Parametrize `{{persona}}`; persona-accent/greeting lookup |
| Public push is irreversible/outward | High | Explicit operator gate at P5; gate-fired `skill_template_release` only |

## Verification Strategy

Per-mission / per-phase / campaign checks per `template_campaign.md` defaults (SITREP · AAR · deliverables validated · git clean · all-AARs-GO · exit-criteria · STATE updated). Campaign-specific end-to-end (P5):
1. `python smoke_render.py --parity` on the upstreamed bundle → reference-node byte-parity; grep clean of leftover `{{`.
2. `skill_template_release` fresh-clone smoke (7 gates: router present · `role: template` · skills resolve · `*.aDNA/` ignored but `.adna/` tracked · embed-note · old-URL redirect · 1-command flow).
3. Real bootstrap dry-run — clone the public image to a scratch dir → `claude` → assert: (a) Step 0 *offers* Home; (b) `Home.aDNA/{what/inventory,who/identity}` present with `AGENTS.md`; (c) CLAUDE.md is **Hestia** (not Berthier); (d) exemplar HOME renders with no leftover `{{`; (e) `skill_node_health_check` exits 0.

## Timeline

| Phase | Missions | Sessions |
|---|---|---|
| P0 Charter | 0 | 1-2 |
| P1 Entity types | 1 | 1-2 |
| P2 Self-sufficiency | 2-3 | 2-3 |
| P3 Exemplar bundle | 4 | 2 |
| P4 Invocation wiring | 5 | 2 |
| P5 Release & verify | 6 | 1-2 |
| **Total** | **~7 anchor missions** | **8-14 sessions** |

## Notes

- **Cross-vault authorship**: scaffolded by Hestia from `Home.aDNA`; the substantive build is Rosetta's. Coordinate alongside the active `campaign_website_adna` (both can be active per lifecycle; operator gates phase advancement).
- **Reference artifacts to genericize** live in `Home.aDNA/`: `what/inventory/*`, `who/identity/*`, `CLAUDE.md`, `HOME.md`, `how/templates/template_node_adna_exemplar/*`, `how/skills/skill_project_fork.md` (worked `--exemplar-home` Step 4.5).
- **Router source-of-truth**: dev = `what/docs/templates/workspace_claude_md.template`; released = `.adna/how/templates/template_workspace_claude.md` (confirm at P0).

## Completion Summary

*Fill out when setting `status: completed`.*

### Deliverables
### Descoped
### Key Findings
### Scope Changes
### Follow-Up Campaigns

## Campaign AAR

*Mandatory before setting `status: completed`. See `how/templates/template_aar_lightweight.md`.*

- **Worked**:
- **Didn't**:
- **Finding**:
- **Change**:
- **Follow-up**:
