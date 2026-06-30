---
type: backlog_idea
idea_id: idea_upstream_identity_entity_type
title: "Add `identity` entity type to v8.0+ aDNA standard ontology (under WHO)"
category: governance
status: accepted
priority: medium
effort: plan
proposed_by: agent_stanley
proposed_date: 2026-05-11
updated: 2026-06-18
upstream: true
target_version: "v8.0"
last_edited_by: agent_rosetta
tags: [backlog, upstream, ontology, identity, node_adna]
created: 2026-05-11
---

# Idea: Add `identity` entity type to v8.0+ aDNA standard ontology

> **Ratified 2026-06-18** — accepted at Operation Hearthstone P0 (Operator Decision 1); the inventory+identity promotion to base entity types is decided in [[adr_035_inventory_identity_base_entity_types]]; lands in `.adna/` at Hearthstone P5 via skill_template_release.

## Problem / Opportunity

M04 of `campaign_adna_v2_infrastructure` bootstrapped `node.aDNA/` with two new entity types — `inventory` (WHAT) and `identity` (WHO). This idea covers the `identity` proposal; sibling proposal `idea_upstream_inventory_entity_type.md` covers `inventory`.

The `identity` entity type is structurally distinct from the existing WHO entities (`governance`, `team`, `coordination`). It captures **stable identity records** that persist across sessions and validate against external reality (hostname, LP-network peer-id, signing-key references). It is the WHO-leg complement to `inventory` (WHAT-leg): `inventory` says "what's installed"; `identity` says "who/where this node is."

`identity` is particularly useful for:
- Per-node identity records (`identity_node` — host this node is)
- Per-platform-instance identity records (RareHarness deployment ID, SiteForge consumer attribution)
- Per-network identity records (LatticeProtocol peer-id, federation membership)

## Proposed Solution

Add `identity` to the WHO triad leg in the v8.0+ aDNA standard ontology:

| Triad Leg | Entity | Purpose |
|---|---|---|
| **WHO** (4) | `governance`, `team`, `coordination`, **`identity`** | Who decides, who works, how they sync, **who/where this entity is** |

Required changes to the template:
- Add to `.adna/CLAUDE.md` § Base Ontology table (15 → 16 base entity types if `inventory` lands too; 14 → 15 if standalone)
- Add to `.adna/MANIFEST.md` ontology description
- Author a template `template_identity_entry.md` in `.adna/how/templates/`
- Author a generic `.adna/who/identity/AGENTS.md` describing the entity type (subtypes pattern: `node` / `<network>` / `<platform_deployment>` / domain-specific extensions)
- Optionally: a starter ADR codifying the addition

## Concrete Example (canonical reference)

`node.aDNA/who/identity/` (bootstrapped by `mission_adna_infra_p1_04_node_adna_bootstrap` in `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/`):

- `identity_node.md` + `.yaml` — this node's identity (hostname, operator, machine class, persistent UUID)
- `identity_lattice_protocol.md` + `.yaml` — LP-network identity (peer-id placeholder, signing-key path reference)

YAML companion pattern (D9) verified working. Identity drift discipline (per `who/identity/AGENTS.md`) is a new sub-pattern: high-severity flags for hostname/operator/UUID mismatch.

## Impact

- **Low blast radius**: additive entity type; no existing vault breaks
- **Pairs with `inventory`**: the WHAT-WHO complement makes node-level entity types coherent
- **Wins for D5 scoring**: node.aDNA D5 goes 4/5 → 5/5 once `identity` is canonical
- **Wins for partner-vault attribution**: future Forge/Platform consumer vaults can use `<consumer>/who/identity/` to declare consumer identity for federation context (e.g., WilhelmAI `siteforge/who/identity/identity_consumer.md` per AI4U-5 attribution-string-coverage gate)

## Origin

`campaign_adna_v2_infrastructure` M04 Session 2 (2026-05-11) — bootstrapped `node.aDNA/` with `identity` as a node-local entity. Filed per `how/skills/skill_upstream_contribution.md` and per `m01_obj3_node_adna_design.md` §8 D5 rationale + M04 mission spec §Hard constraints.

Companion idea: `idea_upstream_inventory_entity_type.md` (proposes the parallel WHAT addition).

## Related

- `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj3_node_adna_design.md` §4 + §8 D5 — authoritative design source
- `aDNA.aDNA/how/skills/skill_upstream_contribution.md` — the upstream-contribution skill protocol
- `node.aDNA/who/identity/` — the canonical reference implementation (on host Mac)
- `node.aDNA/who/identity/AGENTS.md` — entity-type protocol document + identity drift discipline
