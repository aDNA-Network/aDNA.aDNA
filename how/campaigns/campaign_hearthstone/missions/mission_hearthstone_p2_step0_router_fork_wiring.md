---
plan_id: mission_hearthstone_p2_step0_router_fork_wiring
type: plan
title: "P2 M3 — Step-0 Node Vault Detection router block + skill_project_fork Home-class branch (dev graph)"
owner: stanley
status: completed
campaign_id: campaign_hearthstone
campaign_phase: 2
campaign_mission_number: 3
mission_class: implementation
status_note: completed 2026-06-19 on operator P2 phase-exit (Decision 4)
created: 2026-06-19
updated: 2026-06-19
last_edited_by: agent_rosetta
token_budget_estimated: "~25 kT content-load (router-template insert genericized from live root Step 0 + fork-skill Home-class branch + Lab ADR-006 fold-in)"
token_budget_actual: "~55 kT (shared with M2 in one P2 arc)"
tags: [plan, campaign, hearthstone, p2, step0_router, node_vault_detection, project_fork, lab_adr_006, operation_adna_track_b]
---

# Mission: P2 M3 — Step-0 router block + `skill_project_fork` Home-class wiring

**Campaign**: [[how/campaigns/campaign_hearthstone/campaign_hearthstone|campaign_hearthstone]] (Track B under [[how/campaigns/campaign_operation_adna/campaign_operation_adna|campaign_operation_adna]])
**Phase**: 2 — Base Home self-sufficiency · **Mission**: 3 of ~7

> **✅ CLOSED 2026-06-19 — operator approved the P2 phase-exit (Decision 4).** Deliverables complete + verified in the dev graph; `.adna/` materialization is gated to **P5** (`skill_template_release`).

## Goal

Make the base system *offer* a node its hearth out of the box: add the router-side "Node Vault Detection / offer to bootstrap Home" flow to the workspace-router template, and wire `skill_project_fork` so a Home-class fork installs the Hestia template (M2) instead of the generic Berthier base. Together with M2, a fresh clone detects the missing Home, offers it (opt-in), and the offered chain installs a correct Hestia Home.

## Exit Gate (mission-level)

- [x] `## Step 0: Node Vault Detection` inserted into `aDNA.aDNA/what/docs/templates/workspace_claude_md.template` (before Project Discovery): 0.1 check → 0.2 PRESENT/load-STATE → 0.3 MISSING/offer-chain → 0.4 FRESH-INSTALL/skip → 0.5 optional per-node Platform offers.
- [x] **Opt-in + no-nag**; site-specifics stripped (no Step-0a Operations block, no campaign banner, no fleet vault list) — verified 0 leakage.
- [x] **Lab opt-in offer folded in** (Step 0.5) per Lab **ADR-006 D2**; Obsidian/Terminal generalization explicitly deferred to a future ADR.
- [x] `skill_project_fork.md` Step 3.5 Home-class branch added: `project_name = Home` installs `template_home_claude.md` (substituting the vars) as `CLAUDE.md`; generic path untouched; Step 1 recognition note + Home-class onboarding note added.
- [x] Verified: router has all 4 bootstrap-chain skill refs; fork branch installs `template_home_claude.md`; Berthier-swap documented.

## Guardrails

- **No `.adna/` writes** (P5 only) · **no `site/` writes** · surgical; the existing generic-project fork path and the rest of the router template are untouched.

## Objectives

### 1. Step-0 router block — ✅ done
Genericized from this node's live root `~/aDNA/CLAUDE.md` Step 0.1–0.4; base-template paths via `{{adna_folder}}`; `Home.aDNA/` kept literal (canonical node-vault name); persona defaults to Hestia. Folded the **aDNA Lab** opt-in offer into a new Step 0.5 (ADR-006 D2 "after the Home offer"); deferred the fleet-wide per-node-Platform doctrine (Obsidian/Terminal) to a future ADR.
- **Files**: `aDNA.aDNA/what/docs/templates/workspace_claude_md.template`

### 2. `skill_project_fork` Home-class branch — ✅ done
Inserted **Step 3.5** (only when `project_name = Home`): copy `.adna/how/templates/template_home_claude.md` over the forked `Home.aDNA/CLAUDE.md` and substitute `persona`=Hestia / `node_hostname` / `operator` / `workspace_root` / `created_date`; leave persona-accent at Hestia default for interview enrich; note that the base ships the inventory/identity scaffolds and that Home-class onboarding is the bootstrap interview (not generic `skill_onboarding`). Added a Step-1 Home-class recognition note. Frontmatter `last_edited_by`/`updated` refreshed.
- **Files**: `aDNA.aDNA/how/skills/skill_project_fork.md`

## Campaign Context

- **Depends on**: M2 (`template_home_claude.md` must exist for the fork branch to install) — co-landed this P2 arc.
- **Cross-vault**: realizes Lab **ADR-006 D2** (the Galileo→Rosetta "Lab offer into Hearthstone" coordination) on the router side.
- **Next (P5)**: `skill_template_release` ships the router template → `.adna/how/templates/template_workspace_claude.md` and the fork skill → `.adna/how/skills/skill_project_fork.md`.

## Notes

- **`.adna/`-only interview skill (finding/risk for P4/P5):** `skill_node_bootstrap_interview.md` has **no dev-graph copy** (exists only in `.adna/` + campaign artifacts). The optional interview *enrich* (persona-context line + pairings) therefore could not be authored here without breaking the no-`.adna/` guardrail — **deferred to P4** (mission 5, interview theming), which must first establish a dev-graph copy or handle it via the release skill. Flagged so P4/P5 don't assume a dev source exists.
- **Router source-of-truth** confirmed (campaign master, P0): dev = `what/docs/templates/workspace_claude_md.template`; released = `.adna/how/templates/template_workspace_claude.md`.

## Completion Summary

### Deliverables
- `aDNA.aDNA/what/docs/templates/workspace_claude_md.template` — new Step 0 (0.1–0.5) Node Vault Detection / offer-to-bootstrap-Home + Lab opt-in offer.
- `aDNA.aDNA/how/skills/skill_project_fork.md` — Step 3.5 Home-class governance install + Step-1 recognition note + frontmatter refresh.

### Descoped
- No `.adna/` write (P5). Interview persona/pairings enrich + non-Hestia swap = P4. Obsidian/Terminal per-node-Platform doctrine = future ADR (ADR-006 routed it to "the org's call").

### Key Findings
- `skill_node_bootstrap_interview.md` is `.adna/`-only — a dev-graph gap that constrains where the interview enrich can be authored (P4/P5 concern; see Notes).

## AAR

- **Worked**: the live root `~/aDNA/CLAUDE.md` Step 0 was a battle-tested source to genericize from; ADR-006 D2 gave an unambiguous spec for the Lab fold-in (offer after Home, opt-in, no parallel flow).
- **Didn't**: the interview-enrich half of the home_claude_template idea couldn't land — the interview skill has no dev-graph copy, so it would have required an `.adna/` write.
- **Finding**: the dev-graph↔`.adna/` mirror is incomplete — `skill_project_fork` has a dev copy but `skill_node_bootstrap_interview` does not; release-time skills aren't uniformly mirrored.
- **Change**: P5 `skill_template_release` should reconcile the skill mirror (establish dev sources for all node-skills) so future edits never force an `.adna/` write.
- **Follow-up**: operator P2 phase-exit (Decision 4) → then P3 (exemplar bundle, CanvasForge→Canvas repoint). P4 wires the interview enrich once the dev-graph copy exists.
