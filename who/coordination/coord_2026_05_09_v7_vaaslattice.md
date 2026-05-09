---
type: coordination
title: "Cross-Graph Coordination: aDNA.aDNA → VAASLattice.aDNA — aDNA v7.0 Adoption"
status: ready
direction: outbound (aDNA.aDNA initiates)
requesting_vault: aDNA.aDNA
requesting_persona: rosetta
receiving_vault: VAASLattice.aDNA
receiving_persona: (none — Framework candidate)
requesting_agent: agent_stanley
created: 2026-05-09
updated: 2026-05-09
last_edited_by: agent_stanley
priority: medium
deadline: pre-VAASLattice.aDNA-v7-migration
audit_id: adna_v2_m08a_vaaslattice_v7_coord
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_p1_08a_upgrade_guide_and_coord_memos
objective: 1
target_mission: M08a
mirror: /Users/stanley/lattice/VAASLattice.aDNA/who/coordination/coord_2026_05_09_v7_aDNA_adoption.md
airlock_pattern: true
operator_class: LatticeProtocol-internal
external_party: (none)
delivery_held_until: operator-approval
ecosystem_validated_on: 2026-05-09
tags: [coordination, cross_graph, v7_0_adoption, rosetta, vaaslattice, m08a, m08b, airlock_pattern, lp_internal_no_remote, framework_candidate, first_time_remote_setup]
---

# VAASLattice.aDNA — aDNA v7.0 Coordination Memo

> **Multilateral airlock instance** (12 of 17). **No-remote variant** + **Framework candidate** — second Framework.aDNA candidate (the Framework category promotes to workspace-canonical when VAASLattice is formally ratified per current workspace router).

---

## §1 Airlock entry

**aDNA.aDNA** governs aDNA standard evolution. Persona: Rosetta.

**VAASLattice.aDNA** is a **Framework (candidate)** — Verification-as-a-Service multi-layer hallucination reduction, cross-lattice verification federation. Active.

---

## §2 What's changing in v7.0

aDNA v7.0 is a Major Governance bump. Two breaking + first-time remote (no remote yet). Full guide: [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]].

---

## §3 What VAASLattice.aDNA specifically needs to do

### Current state of VAASLattice.aDNA (validated 2026-05-09)

| Property | Value |
|---|---|
| Vault category | Framework (candidate) |
| Persona | (none — Framework persona TBD on category promotion) |
| Operator class | LatticeProtocol-internal |
| Current git remote | **(none)** |
| Has `skill_lattice_publish.md` | Y |
| Has `.publish-clone/` workaround | N |
| Naming conforms to ADR-009 | n/a (no remote yet; canonical `VAASLattice.aDNA.git` when added) |
| Airlock-eligible | Y (Framework candidate; cross-lattice verification federation) |
| Maturity | Active |

### Required actions

| # | Action | When | Where |
|---|---|---|---|
| 1 | Workspace flatten | M03 ships. | [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]] §2 |
| 2 | First-time remote setup + skill_deploy | M05 ships. | upgrade guide §3 |

### Optional actions

| # | Action | Why you might want it | Why you might skip |
|---|---|---|---|
| 3 | Airlock | Cross-lattice verification federation = exactly the airlock use case. | Adopt at Framework promotion. |
| 4 | `node.aDNA/` | Per-machine inventory. | Skip if single-machine. |

### VAASLattice.aDNA-specific notes

- **Framework promotion pending**: Once VAASLattice is formally ratified as a Framework.aDNA, the workspace-router Framework category section gets a second instance and the persona is assigned. v7.0 adoption is independent of Framework promotion.
- **Cross-lattice verification federation**: VAASLattice's federation pattern has cross-graph traffic by design — airlock pattern is a natural fit at promotion time.
- **First-time remote**: canonical `VAASLattice.aDNA.git` per ADR-009.

---

## §4 Suggested sequence + timing

| Step | Wait until | Action | Effort |
|---|---|---|---|
| Pre-flatten | M03 ships | Read memo + upgrade guide. | 10 min |
| 1 | M03 announcement | Workspace flatten. | 5–15 min |
| 2 | M05 announcement | First-time remote + skill_deploy. | 10–15 min |
| 3 (optional) | Framework promotion | Airlock adoption. | 30–60 min |
| 4 (optional) | Operator-decided | `node.aDNA/`. | 10 min |

---

## §5 Acknowledgment + close-out trigger

`ready` → `acknowledged` → `in_progress` → `completed`.

---

## §6 Co-sign

### Rosetta — aDNA.aDNA

Rosetta confirms (2026-05-09): v7.0 captured; first-time remote; canonical name. **Signed**: Rosetta, 2026-05-09T05:30:00Z.

### VAASLattice operator

Operator confirms (mirror pending). **Signed**: pending.

---

## §7 Airlock-pattern self-reference

Inherits from [[../../who/coordination/coord_2026_05_08_publish_rewrite.md|publish-rewrite ancestor]]. Cross-links: [[../../../III.aDNA/how/airlock/AIRLOCK.md|III canonical]] · [[../../../VideoForge.aDNA/how/airlock/AIRLOCK.md|VideoForge reference]]. 1 of 17; first-time-remote + Framework-candidate variant.

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

**Ready for delivery.** First-time remote setup; Framework promotion independent of v7.0.
