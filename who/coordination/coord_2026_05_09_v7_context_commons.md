---
type: coordination
title: "Cross-Graph Coordination: aDNA.aDNA → context_commons.aDNA — aDNA v7.0 Adoption"
status: ready
direction: outbound (aDNA.aDNA initiates)
requesting_vault: aDNA.aDNA
requesting_persona: rosetta
receiving_vault: context_commons.aDNA
receiving_persona: (none — community Org-Vault)
requesting_agent: agent_stanley
created: 2026-05-09
updated: 2026-05-09
last_edited_by: agent_stanley
priority: medium
deadline: pre-context_commons.aDNA-v7-migration
audit_id: adna_v2_m08a_context_commons_v7_coord
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_p1_08a_upgrade_guide_and_coord_memos
objective: 1
target_mission: M08a
mirror: /Users/stanley/lattice/context_commons.aDNA/who/coordination/coord_2026_05_09_v7_aDNA_adoption.md
airlock_pattern: true
operator_class: LatticeProtocol-internal
external_party: (none)
delivery_held_until: operator-approval
ecosystem_validated_on: 2026-05-09
tags: [coordination, cross_graph, v7_0_adoption, rosetta, context_commons, m08a, m08b, airlock_pattern, lp_internal_grandfathered_hyphen_flat]
---

# context_commons.aDNA — aDNA v7.0 Coordination Memo

> **Multilateral airlock instance** (6 of 17). Hyphen-flat naming variant — `context-commons-adna` grandfathered per ADR-009 §3.1.

---

## §1 Airlock entry

**aDNA.aDNA** governs aDNA standard evolution; campaign produces v7.0. Persona: Rosetta.

**context_commons.aDNA** is an **Org-Vault** — community-driven agentic literacy, enablement & support program. Curriculum Council (7-11) + Community Stewards governance.

This memo crosses from standard producer to standard consumer because v7.0 lands two breaking changes.

---

## §2 What's changing in v7.0 (one-paragraph version)

aDNA v7.0 is a Major Governance bump. Two breaking (repo flatten + publish-skill rewrite); three pull-based (tag, repo rename, deploy manifest); four opt-in (`node.aDNA/`, `LatticeScope.aDNA`, airlock stub, naming codification). CC's `context-commons-adna` repo name is grandfathered-hyphen-flat per ADR-009 §3.1 — no rename forced. Full guide: [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]].

---

## §3 What context_commons.aDNA specifically needs to do

### Current state of context_commons.aDNA (validated 2026-05-09)

| Property | Value |
|---|---|
| Vault category | Org-Vault |
| Persona | (none — community vault) |
| Operator class | LatticeProtocol-internal |
| Current git remote | `github.com/LatticeProtocol/context-commons-adna.git` (LatticeProtocol-origin, **grandfathered hyphen-flat**) |
| Has `skill_lattice_publish.md` | Y |
| Has `.publish-clone/` workaround | N |
| Naming conforms to ADR-009 | **N** (grandfathered hyphen-flat per ADR-009 §3.1) |
| Airlock-eligible | N (community vault; cross-community traffic flows via curriculum + steward channels, not airlock) |
| Maturity | Operational |

### Required actions (breaking changes — one-time)

| # | Action | When | Where |
|---|---|---|---|
| 1 | **Workspace flatten** | M03 ships. | [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]] §2 |
| 2 | **Publish-skill adoption**: origin already configured — run `skill_deploy`. | M05 ships. | [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]] §3 |

### Optional actions

| # | Action | Why you might want it | Why you might skip |
|---|---|---|---|
| 3 | Airlock | Cross-vault community traffic (curriculum updates flowing inward from contributors). | Defer — community channels already structured. |
| 4 | `node.aDNA/` | Per-machine inventory if community ops span multiple machines. | Skip if single-machine. |
| 5 | Rename to ADR-009 conformant | Cleaner naming. | Grandfathered per ADR-009 §3.1; v3-EC `M04-EC` channel if elected. |

### context_commons.aDNA-specific notes

- **Curriculum + Stewards**: Community governance flows via Curriculum Council (7-11 seats) + Community Stewards. v7.0 adoption is operational scope only; council decisions remain unchanged.
- **PresentationForge wrapper**: CC uses `presentationforge/` (CanvasForge consumer wrapper). Wrapper follows CanvasForge version policy.
- **Hyphen-flat permanent**: `context-commons-adna` repo name grandfathered per ADR-009 §3.1.

---

## §4 Suggested sequence + timing

| Step | Wait until | Action | Effort |
|---|---|---|---|
| Pre-flatten | M03 ships | Read memo + upgrade guide. | 10 min |
| 1 | M03 announcement | Workspace flatten. | 5–15 min |
| 2 | M05 announcement | Publish-skill adoption. | 5 min |
| Verification | After 1–2 | Validation runbook. | 5 min |
| 3 (optional) | Operator-decided | Airlock (defer). | 30–60 min |
| 4 (optional) | Operator-decided | `node.aDNA/` bootstrap. | 10 min |
| 5 (optional) | M07 close | Rename (operator-discretionary). | n/a (grandfathered) |

---

## §5 Acknowledgment + close-out trigger

`ready` → `acknowledged` → `in_progress` → `completed` (M08b verifies). Trigger: §6 co-sign.

---

## §6 Co-sign

### Rosetta — aDNA.aDNA

Rosetta confirms (2026-05-09): v7.0 changes captured in §3; hyphen-flat permanently grandfathered; no rename forced. **Signed**: Rosetta, 2026-05-09T05:30:00Z.

### context_commons.aDNA operator

Operator confirms (mirror pending). **Signed**: pending.

---

## §7 Airlock-pattern self-reference

Inherits from [[../../who/coordination/coord_2026_05_08_publish_rewrite.md|publish-rewrite ancestor]]. Cross-links: [[../../../III.aDNA/how/airlock/AIRLOCK.md|III canonical]] · [[../../../VideoForge.aDNA/how/airlock/AIRLOCK.md|VideoForge reference]]. 1 of 17 instances. Successor [[../../how/campaigns/campaign_adna_v3_ecosystem_compliance/campaign_adna_v3_ecosystem_compliance.md|v3-EC]] adopts.

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

**Ready for delivery.** LP-internal operator-discretionary. ADR-009 §3.1 grandfathered.
