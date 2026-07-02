---
type: backlog_idea
idea_id: idea_upstream_inventory_entity_type
title: "Add `inventory` entity type to v8.0+ aDNA standard ontology (under WHAT)"
category: governance
status: resolved
priority: medium
effort: plan
proposed_by: agent_stanley
proposed_date: 2026-05-11
updated: 2026-07-02
upstream: true
target_version: "v8.0"
last_edited_by: agent_rosetta
tags: [backlog, upstream, ontology, inventory, node_adna]
created: 2026-05-11
---

# Idea: Add `inventory` entity type to v8.0+ aDNA standard ontology

> **Ratified 2026-06-18** — accepted at Operation Hearthstone P0 (Operator Decision 1); the inventory+identity promotion to base entity types is decided in [[adr_035_inventory_identity_base_entity_types]]; lands in `.adna/` at Hearthstone P5 via skill_template_release.

## Problem / Opportunity

M04 of `campaign_adna_v2_infrastructure` bootstrapped `node.aDNA/` as a new Org-Vault category instance with a per-node operational scope. It introduced two **new entity types** under WHAT and WHO that are not in the v6.0/v7.0 base ontology:

- `inventory` (WHAT) — installed vaults, system state, network memberships
- `identity` (WHO) — node identity records (see sibling proposal: `idea_upstream_identity_entity_type.md`)

Currently these live as **node-local extensions** in `node.aDNA/what/inventory/` and `node.aDNA/who/identity/`. They are well-formed (with paired YAML companions per D9 + federation block in `inventory_memberships.yaml` per D7), but they are **not in the standard ontology**, so they score 4/5 on D5 (Type vocabulary) instead of 5/5.

The `inventory` entity type is structurally distinct from the existing WHAT entities (`context`, `decisions`, `modules`, `lattices`). It captures **point-in-time state** of what's installed/configured rather than knowledge artifacts or design records. Other vaults could benefit from the same pattern (e.g., Spacemacs.aDNA inventorying installed layers + packages; RareHarness.aDNA inventorying clinical-context-set installations on a partner node).

## Proposed Solution

Add `inventory` to the WHAT triad leg in the v8.0+ aDNA standard ontology:

| Triad Leg | Entity | Purpose |
|---|---|---|
| **WHAT** (5) | `context`, `decisions`, `modules`, `lattices`, **`inventory`** | What you know, what you've decided, what you build, how you compose, **what's installed/configured** |

Required changes to the template:
- Add to `.adna/CLAUDE.md` § Base Ontology table (14 → 15 base entity types)
- Add to `.adna/MANIFEST.md` ontology description
- Author a template `template_inventory_entry.md` in `.adna/how/templates/`
- Author a generic `.adna/what/inventory/AGENTS.md` describing the entity type (subtypes pattern: `vaults` / `system` / `memberships` / domain-specific extensions)
- Optionally: a starter ADR codifying the addition (parallel to ADR-009 for naming convention)

## Concrete Example (canonical reference)

`node.aDNA/what/inventory/` (bootstrapped by `mission_adna_infra_p1_04_node_adna_bootstrap` in `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/`):

- `inventory_vaults.md` + `.yaml` — 21 .aDNA vaults + 11 grandfathered named projects + drift section
- `inventory_system.md` + `.yaml` — machine class + 8 tool versions + env-var NAMES + PATH/disk summary
- `inventory_memberships.md` + `.yaml` — LP network membership placeholders + **federation block** (D7)

YAML companion pattern (D9) verified working; federation discipline (D7) verified working.

## Impact

- **Low blast radius**: additive entity type; no existing vault breaks
- **Wins for other vaults**: any vault that wants to track its installed components gains a canonical entity type instead of inventing one ad-hoc
- **Wins for D5 scoring**: node.aDNA goes from D5=4 to D5=5 once `inventory` is canonical; future `<X>.aDNA/what/inventory/` users get D5=5 from day 1
- **Cascade**: enables a future `LatticeScope.aDNA` (Prometheus) observability vault to consume node.aDNA `inventory_*` files as canonical data sources

## Origin

`campaign_adna_v2_infrastructure` M04 Session 2 (2026-05-11) — bootstrapped `node.aDNA/` with `inventory` as a node-local entity. Filed per `how/skills/skill_upstream_contribution.md` and per `m01_obj3_node_adna_design.md` §8 D5 rationale + M04 mission spec §Hard constraints (entity-type upstream-contribution discipline).

Companion idea: `idea_upstream_identity_entity_type.md` (proposes the parallel WHO addition).

## Related

- `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj3_node_adna_design.md` §4 + §8 D5 — authoritative design source
- `aDNA.aDNA/how/skills/skill_upstream_contribution.md` — the upstream-contribution skill protocol
- `node.aDNA/what/inventory/` — the canonical reference implementation (on host Mac)
- `node.aDNA/what/inventory/AGENTS.md` — entity-type protocol document


## Champollion G0 disposition — D (M1.1, 2026-07-02)

**ALREADY-DISCHARGED.** Evidence: ADR-035 accepted; inventory (WHAT) materialized to the public template at Hearthstone P5. Status set to `resolved`; ratified at Champollion G0 (D2).
