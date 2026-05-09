---
type: coordination
title: "Cross-Graph Coordination: aDNA.aDNA → zeta.aDNA — aDNA v7.0 Adoption"
status: ready
direction: outbound (aDNA.aDNA initiates)
requesting_vault: aDNA.aDNA
requesting_persona: rosetta
receiving_vault: zeta.aDNA
receiving_persona: (none — single-operator project)
requesting_agent: agent_stanley
created: 2026-05-09
updated: 2026-05-09
last_edited_by: agent_stanley
priority: low
deadline: pre-zeta.aDNA-v7-migration
audit_id: adna_v2_m08a_zeta_v7_coord
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_p1_08a_upgrade_guide_and_coord_memos
objective: 1
target_mission: M08a
mirror: /Users/stanley/lattice/zeta.aDNA/who/coordination/coord_2026_05_09_v7_aDNA_adoption.md
airlock_pattern: true
operator_class: LatticeProtocol-internal
external_party: (none)
delivery_held_until: operator-approval
ecosystem_validated_on: 2026-05-09
tags: [coordination, cross_graph, v7_0_adoption, rosetta, zeta, m08a, m08b, airlock_pattern, lp_internal_no_remote, single_operator, first_time_remote_setup]
---

# zeta.aDNA — aDNA v7.0 Coordination Memo

> **Multilateral airlock instance** (13 of 17). **Lightweight single-operator no-remote variant** — minimal-overhead path.

---

## §1 Airlock entry

**aDNA.aDNA** governs aDNA standard evolution. Persona: Rosetta.

**zeta.aDNA** is a **Project** vault — Zeta aDNA workspace. Single-operator project.

---

## §2 What's changing in v7.0

aDNA v7.0 is a Major Governance bump. Two breaking + first-time remote (or stay no-remote indefinitely; remote setup is operator-discretionary for projects without publish needs). Full guide: [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]].

---

## §3 What zeta.aDNA specifically needs to do

### Current state of zeta.aDNA (validated 2026-05-09)

| Property | Value |
|---|---|
| Vault category | Project |
| Persona | (none) |
| Operator class | LatticeProtocol-internal |
| Current git remote | **(none)** |
| Has `skill_lattice_publish.md` | Y |
| Has `.publish-clone/` workaround | N |
| Naming conforms to ADR-009 | n/a (no remote yet) |
| Airlock-eligible | **N** (single-operator project) |
| Maturity | Active |

### Required actions

| # | Action | When | Where |
|---|---|---|---|
| 1 | Workspace flatten | M03 ships. | [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]] §2 |
| 2 | First-time remote setup (optional for zeta — only if publish needed) + skill_deploy (optional). | M05 ships AND publish needed. | upgrade guide §3 |

### Optional actions

| # | Action | Why you might want it | Why you might skip |
|---|---|---|---|
| 3 | Airlock | Single-operator — typically not needed. | Skip. |
| 4 | `node.aDNA/` | Skip — single-machine project. | Skip. |
| 5 | n/a | Naming auto-conformant when remote added. | n/a |

### zeta.aDNA-specific notes

- **Lightweight path**: zeta is the most operationally simple LP-internal vault. v7.0 adoption is just Step 1 (flatten); Step 2 is optional unless zeta starts publishing.
- **Low priority**: defer until other migrations stable.

---

## §4 Suggested sequence + timing

| Step | Wait until | Action | Effort |
|---|---|---|---|
| 1 | Convenient post-M03 window | Workspace flatten. | 5–15 min |
| 2 | When publish needed (may be never) | First-time remote setup. | 10–15 min |
| 3-5 | n/a | Skip. | n/a |

---

## §5 Acknowledgment + close-out trigger

`ready` → `acknowledged` → `in_progress` → `completed`.

---

## §6 Co-sign

### Rosetta — aDNA.aDNA

Rosetta confirms (2026-05-09): lightweight path; remote setup operator-discretionary. **Signed**: Rosetta, 2026-05-09T05:30:00Z.

### zeta.aDNA operator

Operator confirms (mirror pending). **Signed**: pending.

---

## §7 Airlock-pattern self-reference

Inherits from [[../../who/coordination/coord_2026_05_08_publish_rewrite.md|publish-rewrite ancestor]]. Cross-links: [[../../../III.aDNA/how/airlock/AIRLOCK.md|III canonical]] · [[../../../VideoForge.aDNA/how/airlock/AIRLOCK.md|VideoForge reference]]. 1 of 17; lightweight single-operator variant.

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

**Ready for delivery.** Lightweight path; remote setup optional.
