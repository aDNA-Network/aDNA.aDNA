---
plan_id: mission_hearthstone_p0_charter
type: plan
title: "P0 — Charter ratification, v8.0 ontology ADR, and release source-map"
owner: stanley
status: planning
campaign_id: campaign_hearthstone
campaign_phase: 0
campaign_mission_number: 0
mission_class: reconnaissance
created: 2026-06-18
updated: 2026-06-18
last_edited_by: agent_hestia
tags: [plan, campaign, hearthstone, p0, ontology_v8, adr, source_map]
---

# Mission: P0 — Charter ratification, v8.0 ontology ADR, and release source-map

**Campaign**: [[how/campaigns/campaign_hearthstone/campaign_hearthstone|campaign_hearthstone]]
**Phase**: 0 — Charter, ratify, source-map
**Mission**: 0 of ~7

> **Stub authored by Hestia at charter (status: planning).** This is the first thing a Rosetta session executes to activate the campaign. It makes the gated decisions Hestia deliberately did **not** make. Activate by setting `status: active` after the operator approves campaign scope (Decision Point 1).

## Goal

Convert Operation Hearthstone from a planning landing-pad into an executable campaign: ratify the six feeding ideas, ratify the standard-level decision to promote `inventory` + `identity` to base entity types at **v8.0**, and pin the dev→`.adna/` source-map so every later phase knows exactly where it authors and what `skill_template_release` will ship.

## Exit Gate

- Operator has approved campaign scope/phases/mission-sequence (Decision Point 1) → campaign `status: active`.
- An ADR exists (ratified) promoting `inventory` (WHAT) + `identity` (WHO) to **base** entity types at standard **v8.0**, un-namespaced, `merge: invariant`, with the batching decision vs `network_node_mirror`/`permission_edge` recorded.
- The six ideas are `accepted`.
- The release source-map is recorded in the campaign (dev-graph path → `.adna/` path for each artifact class).

## Objectives

### 1. Ratify the six feeding ideas
- **Status**: planned
- **Description**: Move `proposed → accepted` (or `accepted-with-amendments`) on the 6 ideas; reconcile any overlap (confirm `idea_upstream_lattice_home_pattern` = terminal splash, distinct; rename ideas = name-only — already verified at filing).
- **Files**: `how/backlog/idea_upstream_{inventory_entity_type,identity_entity_type,node_exemplar_template,project_fork_exemplar_invocation,home_claude_template,router_node_vault_detection}.md`
- **Depends on**: none

### 2. Author the v8.0 ontology-promotion ADR
- **Status**: planned
- **Description**: Promote `inventory`/`identity` to base entity types; decide whether v8.0 batches the two already-proposed `ontology.md` promotions (`network_node_mirror`, `permission_edge`) into one clean major. Un-namespaced (base types are not namespaced), `merge: invariant`, directory convention `what/inventory/` + `who/identity/`.
- **Files**: `what/decisions/adr_0NN_inventory_identity_base_entity_types.md` (new); ref `what/ontology.md`
- **Depends on**: 1

### 3. Establish the release source-map
- **Status**: planned
- **Description**: Record, per `skill_template_release` step (b), which dev-graph file becomes which `.adna/` path. Confirm the dev home for the new entity-scaffold `AGENTS.md` files and for skill edits; resolve the router source-of-truth (`what/docs/templates/workspace_claude_md.template` → released `.adna/how/templates/template_workspace_claude.md`).
- **Files**: campaign master (Notes/source-map table); ref `how/skills/skill_template_release.md`
- **Depends on**: 1

## Campaign Context

### Previous Mission Outputs
- Charter landing-pad (this campaign master) + 6 filed ideas + the Hestia→Rosetta handoff memo.

### Next Mission Inputs
- P1 (entity-type foundations) needs Objectives 2 + 3 done: the ratified ADR (what to declare) and the source-map (where to author / what ships).

## Notes

Reference artifacts to genericize across P1–P4 live in `Home.aDNA/` (see campaign master §Notes). Hestia (Home.aDNA) is the pair for supplying/validating those + running `skill_node_health_check`.

## Completion Summary

*Fill out when setting `status: completed`.*

### Deliverables
### Descoped
### Key Findings
### Scope Changes

## AAR

*Mandatory before setting `status: completed`. See `how/templates/template_aar_lightweight.md`.*

- **Worked**:
- **Didn't**:
- **Finding**:
- **Change**:
- **Follow-up**:
