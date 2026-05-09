---
type: coordination
title: "Cross-Graph Coordination: aDNA.aDNA → la_startup.aDNA — aDNA v7.0 Adoption"
status: ready
direction: outbound (aDNA.aDNA initiates)
requesting_vault: aDNA.aDNA
requesting_persona: rosetta
receiving_vault: la_startup.aDNA
receiving_persona: (none — single-operator personal-namespace Org-Vault)
requesting_agent: agent_stanley
created: 2026-05-09
updated: 2026-05-09
last_edited_by: agent_stanley
priority: low
deadline: pre-la_startup.aDNA-v7-migration
audit_id: adna_v2_m08a_la_startup_v7_coord
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_p1_08a_upgrade_guide_and_coord_memos
objective: 1
target_mission: M08a
mirror: /Users/stanley/lattice/la_startup.aDNA/who/coordination/coord_2026_05_09_v7_aDNA_adoption.md
airlock_pattern: true
operator_class: personal-namespace
external_party: (none — Stanley personal GitHub user)
delivery_held_until: operator-approval
ecosystem_validated_on: 2026-05-09
tags: [coordination, cross_graph, v7_0_adoption, rosetta, la_startup, m08a, m08b, airlock_pattern, personal_namespace, grandfathered_hyphen_flat_camel_case]
---

# la_startup.aDNA — aDNA v7.0 Coordination Memo

> **Multilateral airlock instance** (7 of 17). Personal-namespace variant — `LAStartupLattice` repo lives under `ScienceStanley` GitHub user (not LatticeProtocol org). Naming grandfathered per ADR-009 §3.1.

---

## §1 Airlock entry

**aDNA.aDNA** governs aDNA standard evolution. Persona: Rosetta.

**la_startup.aDNA** is an **Org-Vault** — LA Startup knowledge lattice. Single-operator project living under Stanley's personal GitHub namespace (not LatticeProtocol org).

This memo crosses from standard producer to standard consumer.

---

## §2 What's changing in v7.0

aDNA v7.0 is a Major Governance bump. Two breaking (repo flatten + publish-skill rewrite); pull-based and opt-in changes don't apply forced action. Personal-namespace operator class is documented for completeness; no partner-coordination concern. Full guide: [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]].

---

## §3 What la_startup.aDNA specifically needs to do

### Current state of la_startup.aDNA (validated 2026-05-09)

| Property | Value |
|---|---|
| Vault category | Org-Vault |
| Persona | (none — single-operator) |
| Operator class | personal-namespace (Stanley personal GitHub user, not under LatticeProtocol org) |
| Current git remote | `github.com/ScienceStanley/LAStartupLattice.git` (personal-namespace-origin, **grandfathered hyphen-flat / suffix-flat-CamelCase variant**) |
| Has `skill_lattice_publish.md` | Y |
| Has `.publish-clone/` workaround | N |
| Naming conforms to ADR-009 | **N** (grandfathered per ADR-009 §3.1; CamelCase variant) |
| Airlock-eligible | N (single-operator personal project) |
| Maturity | Active |

### Required actions

| # | Action | When | Where |
|---|---|---|---|
| 1 | Workspace flatten | M03 ships. | [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]] §2 |
| 2 | Publish-skill adoption: origin already configured (under personal GitHub user) — run `skill_deploy`. | M05 ships. | [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]] §3 |

### Optional actions

| # | Action | Why you might want it | Why you might skip |
|---|---|---|---|
| 3 | Airlock | Single-operator — typically not needed. | Skip. |
| 4 | `node.aDNA/` | If LA Startup work crosses multiple machines. | Skip if single-machine. |
| 5 | Rename to ADR-009 conformant | Cleaner naming. | Grandfathered per ADR-009 §3.1; rename would also require GitHub repo rename and either stays under `ScienceStanley` (still personal namespace) or migrates to LatticeProtocol org (governance change, scope creep). v3-EC `M04-EC` channel if elected. |

### la_startup.aDNA-specific notes

- **Personal-namespace permanent**: `ScienceStanley/LAStartupLattice` lives under Stanley's personal GitHub user, not LatticeProtocol org. This is a documented exception (M01 Obj 0 §3 F-3); no governance change planned. ADR-009 §3.1 grandfathers the existing name.
- **No partner coordination**: Despite the externality of the GitHub namespace (not LP), this vault is **not** an external operator — Stanley operates it directly as a personal project. No outbound coordination required.
- **Low priority**: Single-operator personal vault; v7.0 adoption can wait until other ecosystem migrations stabilize. No deadline pressure.

---

## §4 Suggested sequence + timing

| Step | Wait until | Action | Effort |
|---|---|---|---|
| Pre-flatten | M03 ships | Read memo + upgrade guide. | 10 min |
| 1 | Convenient window post-M03 | Workspace flatten. | 5–15 min |
| 2 | Convenient window post-M05 | Publish-skill adoption. | 5 min |
| 3-5 | Operator-decided | Skip or defer. | n/a |

**Sequencing recommendation**: lowest priority among LP-internal vaults; defer until other migrations stable.

---

## §5 Acknowledgment + close-out trigger

`ready` → `acknowledged` → `in_progress` → `completed` (M08b verifies). Trigger: §6 co-sign.

---

## §6 Co-sign

### Rosetta — aDNA.aDNA

Rosetta confirms (2026-05-09): v7.0 changes captured; personal-namespace exception documented; no governance change. **Signed**: Rosetta, 2026-05-09T05:30:00Z.

### la_startup.aDNA operator

Operator confirms (mirror pending). **Signed**: pending.

---

## §7 Airlock-pattern self-reference

Inherits from [[../../who/coordination/coord_2026_05_08_publish_rewrite.md|publish-rewrite ancestor]]. Cross-links: [[../../../III.aDNA/how/airlock/AIRLOCK.md|III canonical]] · [[../../../VideoForge.aDNA/how/airlock/AIRLOCK.md|VideoForge reference]]. 1 of 17 instances; personal-namespace variant.

---

## §8 Standing Order discharges

| SO | Discharge |
|---|---|
| #2 / #8 | Memo IS the airlock pattern. |
| #6 | Persists permanently. |
| #7 | Dual-audience legible. |
| #9 | Governance-track only. |
| #10 | 15+ wikilinks. |

---

## §9 Status

**Ready for delivery.** LP-internal (personal-namespace operator-class) operator-discretionary. ADR-009 §3.1 grandfathered.
