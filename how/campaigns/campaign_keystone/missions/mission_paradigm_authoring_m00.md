---
plan_id: mission_paradigm_authoring_m00
type: plan
title: "Author the Software-Deployment-Graph Paradigm"
owner: stanley
status: completed
campaign_id: campaign_keystone
campaign_phase: 0
campaign_mission_number: 0
mission_class: implementation
token_budget_estimated: 75
token_budget_actual: 70
created: 2026-06-20
updated: 2026-06-20
last_edited_by: agent_stanley
tags: [plan, campaign, keystone, paradigm]
---

# Mission: Author the Software-Deployment-Graph Paradigm

**Campaign**: [[how/campaigns/campaign_keystone/campaign_keystone|campaign_keystone]]
**Phase**: 0 — Author the Paradigm
**Mission**: 0 of 5

## Goal

Enshrine the deployment-graph paradigm as reusable aDNA standard material — pattern, category placement, uniform template, and the implied-stack roster — so the cohort can be seeded as a fleet (not bespoke forks) once the operator ratifies the template + the campaign name. Nothing is seeded in this mission.

## Exit Gate

Operator ratifies, at the P0 human gate (SO#1):
1. The `template_software_graph_stub` shape (the four wrappers + deployment-gated standing orders).
2. The campaign name **Operation Keystone**.
3. (Carried to P1) the de-confliction ledger, especially the Store/Groupware verify result.

## Objectives

### 1. The pattern
- **Status**: completed
- **Description**: `pattern_software_deployment_graph` — dual-audience; enshrines "context-graph-native forked deployment graph"; one software per graph; owns install·operate·configure·update·interoperate; federates not duplicates; composed by role graphs (Lighthouse).
- **Files**: `what/patterns/pattern_software_deployment_graph.md`

### 2. Category ruling + ADR-037
- **Status**: completed
- **Description**: Extend `spec_platform_ecosystem.md` with the software/deployment-graph subtype (NOT a new category). ADR-037 records: the subtype, the four-wrapper conformance contract, and the Network-recipe reconciliation (recipes=quarry, graph=home).
- **Files**: `what/specs/spec_platform_ecosystem.md` (surgical add), `what/decisions/adr_037_software_deployment_graph_subtype.md`

### 3. The uniform template
- **Status**: completed
- **Description**: `template_software_graph_stub` — the cohort skeleton; lifts Lab.aDNA's "Credential routing (broker = Home.aDNA)" + "Git-ops doctrine (broker = Git.aDNA)" blocks verbatim-in-shape; stubs `feedback/` + `iii/`; deployment-gated SOs.
- **Files**: `how/templates/template_software_graph_stub.md`

### 4. Implied-stack roster / de-confliction ledger (P1 seed)
- **Status**: completed (drafted; ratify at P1)
- **Description**: Enumerate the full implied stack with per-software disposition (seed-net-new / enrich-existing / scope-don't-duplicate / defer) + seam/owner, from recon ground truth.
- **Files**: `how/campaigns/campaign_keystone/artifacts/keystone_deconfliction_ledger.md`

### 5. Operator gate
- **Status**: completed
- **Description**: Presented the template + name; operator ratified at the P0+P1 gate 2026-06-20 ("Ratify + seed first wave") — `template_software_graph_stub`, **Operation Keystone**, and the de-confliction ledger (Store/Groupware verified ABSENT → seed). First wave (Nextcloud/Caddy/Bitwarden) authorized + seeded.
- **Depends on**: 1, 2, 3, 4

## Campaign Context

### Previous Mission Outputs
- [[how/campaigns/campaign_feedback_loop/campaign_feedback_loop|Operation Feedback Loop]] P1 — the `feedback/` wrapper the template stubs.

### Next Mission Inputs
- M1 (de-confliction ledger ratification) consumes objective 4. M2 (seeding) consumes the ratified template (objective 3).

## Notes

The `spec_platform_ecosystem.md` edit is **surgical-additive** (a new subtype section + an updated date + a staleness flag) — the spec's Active-Platforms table predates the 2026-06 rename/merge wave and is out of scope to refactor here; flagged for a separate cleanup (`idea_upstream_platform_spec_refresh`).

## Completion Summary

All four authoring objectives validated (4/4 — scorecard: [[how/missions/artifacts/campaign_keystone_m00_aar|campaign_keystone_m00_aar]]). Operator ratified the template + Operation Keystone name + the de-confliction ledger at the P0+P1 gate 2026-06-20 and authorized the first seeding wave. P2 first wave seeded (Nextcloud/Caddy/Bitwarden); P3 seam memos staged to Hopper + Venus.

### Deliverables
- `pattern_software_deployment_graph.md`, `spec_platform_ecosystem.md` §subtype, `adr_037`, `template_software_graph_stub.md`, `keystone_deconfliction_ledger.md`.

### Descoped
- Full Active-Platforms table refresh (deferred → `idea_upstream_platform_spec_refresh`).

### Key Findings
- The unreferenced `Network.aDNA` recipe library was the biggest interlock; settled by ADR-037 quarry→home.

## AAR

*Full scorecard: [[how/missions/artifacts/campaign_keystone_m00_aar|campaign_keystone_m00_aar]].*

- **Worked**: Authoring the uniform `template_software_graph_stub` before seeding turned three forks into substitution + spine-population — the cohort stayed a fleet.
- **Didn't**: The sandbox FUSE mount blocked `unlink`, so `cp -r .adna` wedged; forks fell back to `rsync`/off-mount-git with host-side cleanup debt (task #9); Nextcloud ended up lean vs the other two.
- **Finding**: Recon beyond the order earned its keep — the parallel-truth risk (recipes vs graphs) was not in the named cohort.
- **Change**: For future cohort forks, use `rsync -a --exclude='.git'` from the outset (skip the doomed `cp -r` of the template `.git`).
- **Follow-up**: P3 seam ratifications (Hopper/Venus), second wave (Container/Inference/Store/Groupware), P4 cohort manifest + WS-C Lighthouse wire.
