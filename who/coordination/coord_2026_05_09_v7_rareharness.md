---
type: coordination
title: "Cross-Graph Coordination: aDNA.aDNA → RareHarness.aDNA — aDNA v7.0 Adoption"
status: ready
direction: outbound (aDNA.aDNA initiates)
requesting_vault: aDNA.aDNA
requesting_persona: rosetta
receiving_vault: RareHarness.aDNA
receiving_persona: asclepius
requesting_agent: agent_stanley
created: 2026-05-09
updated: 2026-05-09
last_edited_by: agent_stanley
priority: medium
deadline: pre-RareHarness.aDNA-v7-migration
audit_id: adna_v2_m08a_rareharness_v7_coord
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_p1_08a_upgrade_guide_and_coord_memos
objective: 1
target_mission: M08a
mirror: /Users/stanley/lattice/RareHarness.aDNA/who/coordination/coord_2026_05_09_v7_aDNA_adoption.md
airlock_pattern: true
operator_class: LatticeProtocol-internal
external_party: (none — anchor partner Wilhelm Foundation, but vault is LP-internal)
delivery_held_until: operator-approval
ecosystem_validated_on: 2026-05-09
tags: [coordination, cross_graph, v7_0_adoption, rosetta, asclepius, rareharness, m08a, m08b, airlock_pattern, lp_internal_no_remote, platform, first_time_remote_setup]
---

# RareHarness.aDNA — aDNA v7.0 Coordination Memo

> **Multilateral airlock instance** (14 of 17). **Platform.aDNA category** + **no-remote variant** — RareHarness is the canonical Platform.aDNA instance (Asclepius); paired with sibling code repo `~/lattice/rareharness/`.

---

## §1 Airlock entry

**aDNA.aDNA** governs aDNA standard evolution. Persona: Rosetta.

**RareHarness.aDNA** is a **Platform.aDNA** in the lattice ecosystem — clinician-deployed agentic runtime for rare-disease clinical decision support. Anchor partner: Wilhelm Foundation. First-wave: KINN L1, UCLA DOM, WGA. Persona: Asclepius (god of healing; pairs naturally with clinical-decision-support runtime).

---

## §2 What's changing in v7.0

aDNA v7.0 is a Major Governance bump. Two breaking + first-time remote. The vault is LP-internal but pairs with sibling code repo `rareharness/` which has its own conventions. Full guide: [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]].

---

## §3 What RareHarness.aDNA specifically needs to do

### Current state of RareHarness.aDNA (validated 2026-05-09)

| Property | Value |
|---|---|
| Vault category | Platform |
| Persona | Asclepius |
| Operator class | LatticeProtocol-internal (anchor partner: Wilhelm Foundation) |
| Current git remote | **(none)** |
| Has `skill_lattice_publish.md` | Y |
| Has `.publish-clone/` workaround | N |
| Naming conforms to ADR-009 | n/a (no remote yet; canonical `RareHarness.aDNA.git` when added) |
| Airlock-eligible | **Y** (Platform with sibling code repo + partner-deployment topology + cross-graph rod-serpent coupling with RareArchive.aDNA) |
| Maturity | Genesis planning (P0 — but campaign moved P0+P1 closed; P2 active per current workspace router) |

### Required actions

| # | Action | When | Where |
|---|---|---|---|
| 1 | Workspace flatten | M03 ships. | [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]] §2 |
| 2 | First-time remote setup + skill_deploy. | M05 ships. | upgrade guide §3 |

### Optional actions

| # | Action | Why you might want it | Why you might skip |
|---|---|---|---|
| 3 | **Adopt the airlock pattern** | Platform with partner-deployment topology + cross-graph rod-serpent coupling with RareArchive (Mnemosyne supplies, Asclepius applies). **Strongly suggested**. | Defer until P3 close. |
| 4 | `node.aDNA/` | Useful for partner-deployment operators (KINN L1 ops, UCLA DOM ops, WGA ops). | Adopt as deployment topology stabilizes. |
| 5 | n/a | Canonical name. | n/a |

### RareHarness.aDNA-specific notes

- **Sibling code repo**: `~/lattice/rareharness/` at `d06811b` is the runtime implementation; v7.0 affects the **vault** (governance) but not the code repo. Coordinated PRs may sequence the vault and code-repo migrations.
- **Rod-serpent coupling with RareArchive.aDNA** (Mnemosyne ↔ Asclepius — memory supplies, healing applies): cross-graph publishing contracts (ADR 007 in RareHarness, co-signed) govern the coupling. v7.0 adoption is independent of the rod-serpent contract; coupling preserved unchanged.
- **Anchor partner Wilhelm Foundation**: operator-class is LP-internal (Stanley operates); WF anchor partnership is a governance relationship documented in `RareHarness.aDNA/CLAUDE.md`. v7.0 adoption is invisible to the partnership.
- **Active P2**: RareHarness is in active P2 (MP2-0 + MP2-3 + MP2-2 closed 2026-05-08); v7.0 adoption can sequence around active mission cadence.
- **Safety framework v0.2**: RareHarness's safety framework is independent of v7.0; no v7.0 amendment needed.

---

## §4 Suggested sequence + timing

| Step | Wait until | Action | Effort |
|---|---|---|---|
| Pre-flatten | M03 ships + non-blocking P2 mission window | Read memo + upgrade guide. | 10 min |
| 1 | M03 announcement + window | Workspace flatten. | 5–15 min |
| 2 | M05 announcement | First-time remote + skill_deploy. | 10–15 min |
| 3 (optional, **suggested**) | P3 close or earlier | Airlock adoption. | 30–60 min |
| 4 (optional) | As deployment topology stabilizes | `node.aDNA/`. | 10 min |
| 5 | n/a | Canonical name. | n/a |

---

## §5 Acknowledgment + close-out trigger

`ready` → `acknowledged` → `in_progress` → `completed`.

---

## §6 Co-sign

### Rosetta — aDNA.aDNA

Rosetta confirms (2026-05-09): v7.0 captured; vault scope only (sibling code repo separate); rod-serpent coupling preserved; partner relationship invisible to v7.0. **Signed**: Rosetta, 2026-05-09T05:30:00Z.

### Asclepius — RareHarness.aDNA

Asclepius confirms (mirror pending). **Signed**: pending.

---

## §7 Airlock-pattern self-reference

Inherits from [[../../who/coordination/coord_2026_05_08_publish_rewrite.md|publish-rewrite ancestor]]. Cross-links: [[../../../III.aDNA/how/airlock/AIRLOCK.md|III canonical]] · [[../../../VideoForge.aDNA/how/airlock/AIRLOCK.md|VideoForge reference]]. 1 of 17; Platform-with-sibling-code-repo + rod-serpent variant.

Sibling-coupling reference: rod-serpent pair with `RareArchive.aDNA` (Mnemosyne) — separate v7.0 memo at [[coord_2026_05_09_v7_rarearchive.md|`coord_2026_05_09_v7_rarearchive.md`]]. The two memos coordinate (rod-serpent coupling) but each vault's adoption is independent.

---

## §8 Standing Order discharges

| SO | Discharge |
|---|---|
| #2 / #8 | Memo IS the airlock pattern. |
| #6 | Persists permanently. |
| #7 | Dual-audience legible. |
| #9 | Governance-track only. |
| #10 | 15+ wikilinks; sibling code-repo + rod-serpent flags. |

---

## §9 Status

**Ready for delivery.** First-time remote setup; airlock self-adoption suggested.
