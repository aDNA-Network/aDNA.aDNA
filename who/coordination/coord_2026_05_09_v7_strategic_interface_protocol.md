---
type: coordination
title: "Cross-Graph Coordination: aDNA.aDNA → strategic_interface_protocol.aDNA — aDNA v7.0 Adoption"
status: draft  # joint-venture variant; delivery operator-gated; coordinate with TAPP Strategic Intelligence
direction: outbound (aDNA.aDNA initiates)
requesting_vault: aDNA.aDNA
requesting_persona: rosetta
receiving_vault: strategic_interface_protocol.aDNA
receiving_persona: strategos
requesting_agent: agent_stanley
created: 2026-05-09
updated: 2026-05-09
last_edited_by: agent_stanley
priority: medium
deadline: pre-strategic_interface_protocol.aDNA-v7-migration-and-pre-cross-federation-publish
audit_id: adna_v2_m08a_sip_v7_coord
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_p1_08a_upgrade_guide_and_coord_memos
objective: 1
target_mission: M08a
mirror: /Users/stanley/aDNA/strategic_interface_protocol.aDNA/who/coordination/coord_2026_05_09_v7_aDNA_adoption.md
airlock_pattern: true
operator_class: joint-venture
external_party: TAPP Strategic Intelligence
delivery_held_until: operator-approval  # JV partner coordination required before delivery
ecosystem_validated_on: 2026-05-09
tags: [coordination, cross_graph, v7_0_adoption, rosetta, strategos, sip, m08a, m08b, airlock_pattern, joint_venture, tapp, cross_federation_attribution, first_time_remote_setup]
---

# strategic_interface_protocol.aDNA — aDNA v7.0 Coordination Memo

> **Multilateral airlock instance** (15 of 17). **Joint-venture variant** — Strategic Interface Lattice (SIL) collaboration with TAPP Strategic Intelligence. Cross-federation attribution requirements per Strategos identity. First-time remote setup at canonical `strategic_interface_protocol.aDNA.git` (snake_case already conformant).

---

## §1 Airlock entry

**aDNA.aDNA** governs aDNA standard evolution. Persona: Rosetta.

**strategic_interface_protocol.aDNA** is a **Cross-org JV** in the lattice ecosystem — joint-venture vault for Strategic Interface Lattice (SIL) collaboration between Lattice Protocol and TAPP Strategic Intelligence. Persona: Strategos (the strategic-information role; pairs naturally with cross-federation attribution).

This memo crosses from aDNA.aDNA (standard producer) to strategic_interface_protocol.aDNA (a JV consumer) with the additional consideration of **cross-federation attribution requirements** — the SIL collaboration carries attribution norms governed by the JV partnership.

---

## §2 What's changing in v7.0

aDNA v7.0 is a Major Governance bump. Two breaking + first-time remote setup at canonical name. Full guide: [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]].

---

## §3 What strategic_interface_protocol.aDNA specifically needs to do

### Current state of strategic_interface_protocol.aDNA (validated 2026-05-09)

| Property | Value |
|---|---|
| Vault category | Cross-org JV (not yet routed in workspace router) |
| Persona | Strategos |
| Operator class | joint-venture |
| External party | **TAPP Strategic Intelligence** |
| Current git remote | **(none)** |
| Has `skill_lattice_publish.md` | Y |
| Has `.publish-clone/` workaround | N |
| Naming conforms to ADR-009 | n/a (no remote yet; canonical `strategic_interface_protocol.aDNA.git` per ADR-009 §1 — **snake_case already** so naming auto-conformant when remote added) |
| Airlock-eligible | Y (cross-org JV; cross-federation traffic is exactly the airlock use case) |
| Maturity | Active (v6.0-sip — fork from v6.0) |

### Required actions

| # | Action | When | Where |
|---|---|---|---|
| 1 | Workspace flatten | M03 ships AND TAPP coordination window permits. | [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]] §2 |
| 2 | **First-time remote setup**: Run `skill_git_remote_setup` (canonical `strategic_interface_protocol.aDNA.git`). Per ADR-009 §3, JV-vault remote-naming is operator-discretionary if partner-side prefers a different namespace; canonical pattern is the default. **TAPP coordination required** before remote creation: confirm whether the GitHub repo lives under `LatticeProtocol`, `TAPP`, or a JV-specific GitHub organization. Then run `skill_deploy`. | M05 ships AND TAPP-side namespace decision made. | upgrade guide §3 + [[../../what/decisions/adr_009_aDNA_naming_convention.md|ADR-009]] |

### Optional actions

| # | Action | Why you might want it | Why you might skip |
|---|---|---|---|
| 3 | **Adopt the airlock pattern** | JV vault with cross-org traffic = exactly the airlock use case. Strategos persona maps naturally to airlock-pattern role. **Strongly recommended**. | n/a — strongly recommended. |
| 4 | `node.aDNA/` | Useful if JV operations cross multiple machines/sites. | Skip if single-machine. |
| 5 | n/a | Naming auto-conformant (snake_case). | n/a |

### strategic_interface_protocol.aDNA-specific notes

- **Cross-federation attribution**: SIL collaboration carries attribution norms governed by the JV partnership (Lattice Protocol × TAPP Strategic Intelligence). v7.0 adoption is operational scope only; attribution norms preserved unchanged. Strategos persona reviews attribution-discipline implications of any v7.0-adjacent communications.
- **TAPP coordination required**: Before first-time remote setup, the TAPP-side namespace decision must be made (LatticeProtocol / TAPP / JV-org). Until that decision, this memo stays in `draft` status.
- **v6.0-sip fork**: SIP runs a fork of v6.0 (`v6.0-sip`); v7.0 adoption flows through the fork's reconciliation cadence rather than a direct upstream pull. Coordinate with TAPP on how the fork tracks v7.0 changes (full adoption / selective / hold).
- **Marketplace-publishable lattice**: SIL has marketplace-publishable lattice scope; v7.0 publish-skill rewrite enables clean `git push` to whichever GitHub remote namespace is ultimately chosen.

---

## §4 Suggested sequence + timing

| Step | Wait until | Action | Effort |
|---|---|---|---|
| Pre-flatten | TAPP coordination open | Read memo + upgrade guide; coordinate with TAPP on namespace + fork-reconciliation strategy. | 10 min + TAPP cycle |
| 1 | M03 announcement + TAPP-side window | Workspace flatten. | 5–15 min |
| 2 | M05 announcement + TAPP namespace decision | First-time remote setup at chosen namespace + skill_deploy. | 10–15 min + TAPP coordination cycle |
| 3 (optional, **recommended**) | Operator-decided | Airlock adoption (Strategos persona airlock-mediated cross-federation). | 30–60 min |
| 4 (optional) | Operator-decided | `node.aDNA/`. | 10 min |
| 5 | n/a | Canonical name. | n/a |

---

## §5 Acknowledgment + close-out trigger

`draft` → `ready` (TAPP coordination established) → `acknowledged` (Strategos reads + commits) → `in_progress` → `completed` (M08b verifies).

For **joint-venture** operators: Strategos persona reviews + co-signs; **also** TAPP-side review per cross-federation attribution norms (no embargo coordination required, but courtesy review per JV norms).

---

## §6 Co-sign

### Rosetta — aDNA.aDNA

Rosetta confirms (2026-05-09): v7.0 captured; cross-federation attribution preserved; TAPP coordination required before delivery; canonical name auto-conformant. **Signed**: Rosetta, 2026-05-09T05:30:00Z.

### Strategos — strategic_interface_protocol.aDNA

Strategos confirms (mirror artifact pending — TAPP coordination cycle required first):

- §3 actions match SIL's JV state.
- §4 sequencing accommodates TAPP coordination cycle.
- Cross-federation attribution norms preserved unchanged.

**Signed**: Strategos (pending — flips when TAPP coordination established and target vault session signs).

---

## §7 Airlock-pattern self-reference

Inherits from [[../../who/coordination/coord_2026_05_08_publish_rewrite.md|publish-rewrite ancestor]]. Cross-links: [[../../../III.aDNA/how/airlock/AIRLOCK.md|III canonical]] · [[../../../VideoForge.aDNA/how/airlock/AIRLOCK.md|VideoForge reference]]. 1 of 17; **joint-venture variant**.

The JV variant is the second-most-complex airlock instance after the partner-namespaced (Wilhelm) instances — cross-federation attribution requirements + TAPP coordination cycle add a coordination layer absent in single-org instances.

---

## §8 Standing Order discharges

| SO | Discharge |
|---|---|
| #2 / #8 | Memo IS the airlock pattern. |
| #6 | Persists permanently. |
| #7 | Dual-audience legible; JV scope explained. |
| #9 | Governance-track only; cross-federation attribution norms preserved. |
| #10 | 15+ wikilinks; TAPP coordination flag. |

---

## §9 Status

**Draft.** Held pending TAPP coordination cycle (namespace decision + fork-reconciliation strategy). M08a closes this draft; delivery is operator-discretionary post-TAPP-coordination.
