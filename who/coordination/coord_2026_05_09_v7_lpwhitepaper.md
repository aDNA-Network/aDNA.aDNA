---
type: coordination
title: "Cross-Graph Coordination: aDNA.aDNA → LPWhitepaper.aDNA — aDNA v7.0 Adoption"
status: ready
direction: outbound (aDNA.aDNA initiates)
requesting_vault: aDNA.aDNA
requesting_persona: rosetta
receiving_vault: LPWhitepaper.aDNA
receiving_persona: (none — Whitepaper-vault)
requesting_agent: agent_stanley
created: 2026-05-09
updated: 2026-05-09
last_edited_by: agent_stanley
priority: medium
deadline: pre-LPWhitepaper.aDNA-v7-migration
audit_id: adna_v2_m08a_lpwhitepaper_v7_coord
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_p1_08a_upgrade_guide_and_coord_memos
objective: 1
target_mission: M08a
mirror: /Users/stanley/lattice/LPWhitepaper.aDNA/who/coordination/coord_2026_05_09_v7_aDNA_adoption.md
airlock_pattern: true
operator_class: LatticeProtocol-internal
external_party: (none)
delivery_held_until: operator-approval
ecosystem_validated_on: 2026-05-09
tags: [coordination, cross_graph, v7_0_adoption, rosetta, lpwhitepaper, m08a, m08b, airlock_pattern, lp_internal_grandfathered_path_style, m05_adr_forward_reference]
---

# LPWhitepaper.aDNA — aDNA v7.0 Coordination Memo

> **Multilateral airlock instance** (9 of 17). **Path-style remote variant** — `origin-whitepaper` named remote points at local LaTeX whitepaper sibling clone. Grandfathered per ADR-009 §3.4.

---

## §1 Airlock entry

**aDNA.aDNA** governs aDNA standard evolution. Persona: Rosetta.

**LPWhitepaper.aDNA** is a **Whitepaper-vault** in the lattice ecosystem — Lattice Protocol whitepaper vault (LaTeX source, III review, partner feedback, release management). Active.

---

## §2 What's changing in v7.0

aDNA v7.0 is a Major Governance bump. Two breaking (repo flatten + publish-skill rewrite) + path-style remote disposition (M05 ADR forward-reference). Full guide: [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]].

---

## §3 What LPWhitepaper.aDNA specifically needs to do

### Current state of LPWhitepaper.aDNA (validated 2026-05-09)

| Property | Value |
|---|---|
| Vault category | Whitepaper-vault |
| Persona | (none) |
| Operator class | LatticeProtocol-internal |
| Current git remote | `origin-whitepaper` → `/Users/stanley/lattice/whitepaper` (local-path remote, **grandfathered path-style**) |
| Has `skill_lattice_publish.md` | Y |
| Has `.publish-clone/` workaround | N |
| Naming conforms to ADR-009 | **Y** (path-style grandfathered per ADR-009 §3.4 — operator-discretionary, single-vault tooling) |
| Airlock-eligible | N (whitepaper-vault; cross-vault traffic via III review channel, not airlock) |
| Maturity | Active (LaTeX + III review) |

### Required actions

| # | Action | When | Where |
|---|---|---|---|
| 1 | Workspace flatten | M03 ships. | [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]] §2 |
| 2 | **Publish-skill adoption — DECISION REQUIRED**: keep `origin-whitepaper` named remote (which serves the LaTeX sibling-clone sync purpose) AND add a proper GitHub `origin` for the publish flow, OR convert (rename `origin-whitepaper` → something else and add GitHub origin as `origin`). Per ADR-009 §3.4, the path-style remote is grandfathered. **Recommendation**: keep both — they serve different purposes (`origin-whitepaper` = LaTeX sibling sync; new GitHub `origin` = standard publish target). M05 ADR-010 (publish-naming) will codify the decision; M05 implementation will support both modes. | M05 ships AND ADR-010 ratifies. | [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj4_publish_naming_adr.md|M01 Obj 4 publish-naming recommendation]] + [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj1_current_state.md|M01 Obj 1 §5]] Issue I-4 |

### Optional actions

| # | Action | Why you might want it | Why you might skip |
|---|---|---|---|
| 3 | Airlock | III review channel could route through airlock. | III review channel already structured. |
| 4 | `node.aDNA/` | Useful if LaTeX builds + III review + release management cross multiple machines. | Skip if single-machine. |
| 5 | Rename | n/a — path-style grandfathered. | No rename. |

### LPWhitepaper.aDNA-specific notes

- **Path-style permanent**: ADR-009 §3.4 grandfathers `origin-whitepaper` → local-path remote as a legitimate exception class for single-vault tooling. The LaTeX whitepaper sibling clone at `/Users/stanley/lattice/whitepaper` is a documented workflow.
- **M05 ADR-010 forward-reference**: M05 will decide whether to support keep-both, convert, or other dispositions. Until M05 ratifies ADR-010, this vault stays at its current path-style state.
- **III review integration**: LPWhitepaper consumes III for whitepaper review pre-release; `iii/` wrapper directory (if present) follows III's own version policy.
- **Release management**: Whitepaper release process is independent of v7.0 adoption.

---

## §4 Suggested sequence + timing

| Step | Wait until | Action | Effort |
|---|---|---|---|
| Pre-flatten | M03 ships | Read memo + upgrade guide. | 10 min |
| 1 | M03 announcement | Workspace flatten. | 5–15 min |
| 2 | M05 ships AND ADR-010 ratifies | Publish-skill adoption with origin disposition decision. | 10–15 min (decision + skill_deploy) |
| 3 (optional) | Operator-decided | Airlock (defer). | n/a |
| 4 (optional) | Operator-decided | `node.aDNA/` bootstrap. | 10 min |
| 5 | n/a | No rename. | n/a |

---

## §5 Acknowledgment + close-out trigger

`ready` → `acknowledged` → `in_progress` → `completed` (M08b verifies). Trigger: §6 co-sign.

---

## §6 Co-sign

### Rosetta — aDNA.aDNA

Rosetta confirms (2026-05-09): v7.0 changes captured; path-style remote permanently grandfathered (ADR-009 §3.4); M05 ADR-010 forward-reference flagged. **Signed**: Rosetta, 2026-05-09T05:30:00Z.

### LPWhitepaper.aDNA operator

Operator confirms (mirror pending; M05 origin-disposition decision deferred to ADR-010 ratification). **Signed**: pending.

---

## §7 Airlock-pattern self-reference

Inherits from [[../../who/coordination/coord_2026_05_08_publish_rewrite.md|publish-rewrite ancestor]]. Cross-links: [[../../../III.aDNA/how/airlock/AIRLOCK.md|III canonical]] · [[../../../VideoForge.aDNA/how/airlock/AIRLOCK.md|VideoForge reference]]. 1 of 17 instances; path-style-grandfathered variant.

---

## §8 Standing Order discharges

| SO | Discharge |
|---|---|
| #2 / #8 | Memo IS the airlock pattern. |
| #6 | Persists permanently. |
| #7 | Dual-audience legible. |
| #9 | Governance-track only. |
| #10 | 15+ wikilinks; M05 ADR-010 forward-reference. |

---

## §9 Status

**Ready for delivery.** Path-style grandfathered; M05 ADR-010 forward-reference for origin disposition.
