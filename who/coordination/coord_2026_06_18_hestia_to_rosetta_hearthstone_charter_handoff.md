---
type: coordination
title: "Handoff — Operation Hearthstone chartered (planning); Rosetta to execute from P0"
from: hestia (Home.aDNA)
to: rosetta (aDNA.aDNA)
created: 2026-06-18
status: open
last_edited_by: agent_hestia
tags: [coordination, handoff, hearthstone, campaign, home_adna, base_template, p0]
---

# Handoff: Operation Hearthstone — chartered (planning), ready for Rosetta to execute from P0

**From:** Hestia (`Home.aDNA`) · **To:** Rosetta (`aDNA.aDNA`) · **Date:** 2026-06-18

## Why this exists

The operator asked whether `Home.aDNA/` has a public base on GitHub usable to seed new nodes — or whether the base system can bootstrap its own home graph. Finding: **partial** (the `.adna/` image ships `HOME.md` + 6 node-skills, but is missing the `inventory`/`identity` entity-type scaffolds, a Hestia governance CLAUDE.md template, the Step-0 router "offer to bootstrap Home" flow, and the polished exemplar bundle). The operator chose **"full polished base."** Because this is standard-evolution work (Standing Rule 1: `.adna/` is yours to release, not Home's to edit), I chartered it **here** as a campaign and am handing the build to you.

## What I set up (this is a landing pad — nothing gated was decided)

- **Campaign master** (`status: planning`): `how/campaigns/campaign_hearthstone/campaign_hearthstone.md` — Goal, Context, Scope, P0–P5 phases + exit gates, Decision Points, Risk Register, Verification, Timeline.
- **P0 mission stub**: `how/campaigns/campaign_hearthstone/missions/mission_hearthstone_p0_charter.md`.
- **6 feeding ideas** (all `proposed`) in `how/backlog/`: `idea_upstream_{inventory_entity_type, identity_entity_type, node_exemplar_template, project_fork_exemplar_invocation, home_claude_template, router_node_vault_detection}`. (The last two I filed 2026-06-18; the first four pre-existed.)
- **STATE.md** `## Current Phase`: a dated Hearthstone bullet (above the `campaign_website_adna` entry, which is untouched).

I did **not** ratify ideas, write the v8.0 ADR, or pick the CanvasForge-dependency option — those are your + the operator's calls at the gates.

## Self-contained P0 kickoff prompt

> Open **aDNA.aDNA** as **Rosetta**. Read `STATE.md` (top Current-Phase bullet = Hearthstone) and `how/campaigns/campaign_hearthstone/campaign_hearthstone.md`. Activate **Operation Hearthstone** at **P0** by executing `missions/mission_hearthstone_p0_charter.md`: (1) ratify the 6 feeding ideas `proposed→accepted`; (2) author the ADR promoting `inventory`+`identity` to **base** entity types at standard **v8.0** (un-namespaced, `merge: invariant`; decide batching with the proposed `network_node_mirror`/`permission_edge`); (3) record the `skill_template_release` source-map (dev path → `.adna/` path) and confirm the router source-of-truth (`what/docs/templates/workspace_claude_md.template` → `.adna/how/templates/template_workspace_claude.md`). Get operator approval on scope/phases (Decision Point 1), then set the campaign + P0 mission `status: active`. **Coordinate alongside the active `campaign_website_adna`** (both can be active; phase gates are human gates). Full plan: `~/.claude/plans/does-the-home-dir-adaptive-fern.md`.

## What Home (Hestia) provides downstream

The reference artifacts to genericize across P1–P4 already exist on this node: `Home.aDNA/what/inventory/*`, `who/identity/*`, `CLAUDE.md`, `HOME.md`, `how/templates/template_node_adna_exemplar/*`, and the worked `--exemplar-home` hook in `Home.aDNA/how/skills/skill_project_fork.md` (Step 4.5). Call Hestia to supply these and to run `skill_node_health_check` on the bootstrap dry-run at P5.

## One watch item

The exemplar bundle (`template_node_adna_exemplar/`, last updated 2026-06-10) still references the merged-away **CanvasForge** (→ Canvas.aDNA at PT pt09, 2026-06-17). Repoint before release (P3).
