---
type: coordination
title: "Cross-Graph Coordination: aDNA.aDNA → RareArchive.aDNA — aDNA v7.0 Adoption"
status: draft  # external-org canonical owner; delivery held for WilhelmAI ADR 010 publication-timing window
direction: outbound (aDNA.aDNA initiates)
requesting_vault: aDNA.aDNA
requesting_persona: rosetta
receiving_vault: RareArchive.aDNA
receiving_persona: mnemosyne
requesting_agent: agent_stanley
created: 2026-05-09
updated: 2026-05-09
last_edited_by: agent_stanley
priority: medium
deadline: pre-RareArchive.aDNA-v7-migration-AND-pre-WilhelmAI-ADR-010-public-announcement
audit_id: adna_v2_m08a_rarearchive_v7_coord
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_p1_08a_upgrade_guide_and_coord_memos
objective: 1
target_mission: M08a
mirror: /Users/stanley/lattice/RareArchive.aDNA/who/coordination/coord_2026_05_09_v7_aDNA_adoption.md
wilhelm_foundation_mirror_path: (TBD per WilhelmAI ADR 010 publication-timing rules)
airlock_pattern: true
operator_class: external-org
external_party: Wilhelm Foundation (Helene & Mikk Cederroth)
delivery_held_until: ADR-010-window  # WilhelmAI ADR 010 governs public-announcement timing for WF-affiliated material
ecosystem_validated_on: 2026-05-09
licensing: Apache-2.0 + CC-BY-4.0  # per WilhelmAI ADR 002
attribution_discipline: per-surface attribution + first-mention discipline + governance-non-over-commit (per WilhelmAI/who/coordination/partner_ecosystem.md)
tags: [coordination, cross_graph, v7_0_adoption, rosetta, mnemosyne, rarearchive, m08a, m08b, airlock_pattern, external_org_canonical_owner, wilhelm_foundation, adr_010_embargo, apache_2_0, cc_by_4_0, per_surface_attribution]
---

# RareArchive.aDNA — aDNA v7.0 Coordination Memo (DRAFT — held for ADR-010 window)

> **Multilateral airlock instance** (16 of 17). **External-org canonical owner variant** — RareArchive.aDNA's GitHub canonical home is `Wilhelm-Foundation/rare-archive` (per RareArchive ADR 001). License + attribution + embargo discipline per WilhelmAI ADR 002 + ADR 010 + governance-non-over-commit pattern.
>
> **Status: DRAFT, delivery held**. Per WilhelmAI ADR 010, public-announcement timing for Wilhelm-Foundation-affiliated material is embargo-coordinated. This memo stays in `draft` until the ADR-010 publication-timing window opens; mirroring into the partner vault (and, separately, into the WF Foundation-side of the relationship) is **not done in this M08a session**. Operator approves per-memo before delivery.

---

## §1 Airlock entry

**aDNA.aDNA** governs aDNA standard evolution. Persona: Rosetta.

**RareArchive.aDNA** is an **Org-Vault** in the lattice ecosystem — Rare Archive open-source rare-disease AI project (diagnosis-acceleration pillar of AI4U). Persona: Mnemosyne (mother of the Muses; pairs with Asclepius/RareHarness — memory supplies, healing applies). Anchor partner: Wilhelm Foundation. Steward Council 5 seats (Chief / Wilhelm / Clinical / Research / Community).

This memo crosses from aDNA.aDNA (standard producer) to RareArchive.aDNA (a standard consumer under Wilhelm Foundation canonical ownership) with **partner-coordination** considerations: licensing, per-surface attribution, governance-non-over-commit discipline, and ADR 010 publication-timing.

---

## §2 What's changing in v7.0

aDNA v7.0 is a Major Governance bump (Standard track unchanged at v2.2). For RareArchive.aDNA: the **vault's** v7.0 adoption is independent of the **canonical code repo** (`Wilhelm-Foundation/rare-archive`, governed per RareArchive ADR 001). The vault adopts v7.0 governance; the code repo follows its own conventions. Public-announcement timing per WilhelmAI ADR 010. Full guide: [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]].

---

## §3 What RareArchive.aDNA specifically needs to do

### Current state of RareArchive.aDNA (validated 2026-05-09)

| Property | Value |
|---|---|
| Vault category | Org-Vault |
| Persona | Mnemosyne |
| Operator class | external-org (Wilhelm Foundation canonical owner) |
| External party | **Wilhelm Foundation** (Helene & Mikk Cederroth) |
| Current vault git remote | `github.com/Wilhelm-Foundation/rare-archive-vault.git` (external-org-origin) |
| Canonical code repo | `github.com/Wilhelm-Foundation/rare-archive` (per RareArchive ADR 001 — separate from the vault remote) |
| Has `skill_lattice_publish.md` | Y |
| Has `.publish-clone/` workaround | N |
| Naming conforms to ADR-009 | n/a (external-partner namespaced; ADR-009 §1 does not constrain partner-org choices; ADR-009 §2 note documents partner-namespaced as a permanent class) |
| Airlock-eligible | **Y** (Org-Vault under partner canonical ownership; cross-graph traffic with sibling RareHarness rod-serpent + AI4U umbrella) |
| Maturity | Genesis planning (P0 paused for AI4U repositioning side-campaign 2026-04-30) |

### Required actions

| # | Action | When | Where |
|---|---|---|---|
| 1 | Workspace flatten (vault only — code repo separate) | M03 ships AND ADR-010 window allows. | [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]] §2 |
| 2 | Publish-skill adoption: vault remote already configured under `Wilhelm-Foundation/`; **no first-time setup required**. Run `skill_deploy` to install the pre-push sanitization hook. **License + attribution unchanged**: Apache-2.0 + CC-BY-4.0 + per-surface attribution per WilhelmAI ADR 002 + first-mention discipline. | M05 ships AND ADR-010 window allows. | upgrade guide §3 + WilhelmAI ADR 002 |

### Optional actions

| # | Action | Why you might want it | Why you might skip |
|---|---|---|---|
| 3 | Airlock | Cross-graph rod-serpent coupling with RareHarness + AI4U umbrella relationship with WilhelmAI = airlock-natural use case. Mnemosyne (memory) maps naturally. **Suggested**. | Defer until R2 reflect-back of repositioning side-campaign closes. |
| 4 | `node.aDNA/` | Useful as RareArchive's deployment topology stabilizes. | Skip until topology stabilizes. |
| 5 | n/a | External-partner namespaced (not constrained by ADR-009). | n/a |

### RareArchive.aDNA-specific notes

- **Wilhelm Foundation canonical ownership**: `Wilhelm-Foundation/rare-archive` is the canonical code repo home per RareArchive ADR 001. The vault and the code repo coordinate via cross-org publishing contracts; v7.0 adoption affects the vault only.
- **License + attribution discipline**:
  - **License bundle**: Apache-2.0 + CC-BY-4.0 (per WilhelmAI ADR 002). v7.0 adoption preserves the existing license bundle unchanged. Any new content authored at v7.0 adoption stays under this bundle.
  - **Per-surface attribution**: Each surface (vault, code repo, docs site, marketplace listing) carries the canonical attribution string per WilhelmAI ADR 002 §2.2. v7.0 adoption does not modify these strings.
  - **First-mention discipline**: First mention of Wilhelm Foundation in any v7.0-adjacent communication uses the canonical attribution form.
  - **Governance-non-over-commit**: Per `WilhelmAI.aDNA/who/coordination/partner_ecosystem.md` — describe the relationship in its actual engagement state (Confirmed / Engaged / Proposed / etc.), not in inflated terms. v7.0 communication does not re-frame the relationship.
- **AI4U umbrella**: RareArchive is the diagnosis-acceleration pillar under WilhelmAI (AI4U) umbrella. Cross-graph coord memo `coord_2026_04_30_ai4u_launch.md` (lattice-labs) coordinated the recent repositioning. v7.0 adoption is invisible to AI4U umbrella relationship.
- **Rod-serpent coupling with RareHarness.aDNA** (Mnemosyne ↔ Asclepius): separate v7.0 memo at [[coord_2026_05_09_v7_rareharness.md|`coord_2026_05_09_v7_rareharness.md`]]. The two memos coordinate but each adoption is independent.
- **ADR 010 embargo**: Public-announcement timing per WilhelmAI ADR 010. This memo's delivery (mirroring into RareArchive `who/coordination/`) AND any wider public communication about RareArchive's v7.0 adoption is embargo-gated. Operator approves per-memo and per-channel.
- **R2 reflect-back pending**: Repositioning side-campaign (campaign_rare_archive_repositioning) needs R2 reflect-back to close before main genesis P0 resumes. v7.0 adoption can sequence around the resume.

---

## §4 Suggested sequence + timing

| Step | Wait until | Action | Effort |
|---|---|---|---|
| Pre-flatten | M03 ships + ADR-010 window opens | Read memo + upgrade guide; coordinate with WF Steward Council per ADR-010. | 10 min + WF coordination cycle |
| 1 | M03 announcement + ADR-010 window | Workspace flatten (vault only). | 5–15 min |
| 2 | M05 announcement + ADR-010 window | skill_deploy (origin already configured); license + attribution unchanged. | 5 min |
| 3 (optional, suggested) | R2 reflect-back closes | Airlock adoption. | 30–60 min |
| 4 (optional) | Topology stabilizes | `node.aDNA/`. | 10 min |
| 5 | n/a | External-partner namespaced. | n/a |

---

## §5 Acknowledgment + close-out trigger

`draft` (this memo's current state — held for ADR-010 window) → `ready` (ADR-010 window opens; operator approves delivery) → `acknowledged` (Mnemosyne reads + commits + WF Steward Council reviews) → `in_progress` → `completed` (M08b verifies; ledger entry in `WilhelmAI.aDNA/who/governance/coord_ledger.md`).

For **external-org canonical-owner** operators (Wilhelm-affiliated): Mnemosyne persona reviews + co-signs; **also** WF Steward Council representative reviews per WilhelmAI ADR 010. Public announcement timing is embargo-coordinated.

---

## §6 Co-sign

### Rosetta — aDNA.aDNA

Rosetta confirms (2026-05-09):

- v7.0 changes affecting RareArchive.aDNA accurately captured in §3.
- License bundle (Apache-2.0 + CC-BY-4.0) per WilhelmAI ADR 002 **preserved unchanged**.
- Per-surface attribution + first-mention discipline + governance-non-over-commit attribution discipline preserved unchanged.
- Public-announcement timing per WilhelmAI ADR 010 honored — this memo stays in draft until the ADR-010 window opens.
- Cross-graph rod-serpent coupling with RareHarness preserved unchanged.

**Signed**: Rosetta (`agent_stanley` acting in `aDNA.aDNA/` context), 2026-05-09T05:30:00Z. **Held for delivery** per ADR-010.

### Mnemosyne — RareArchive.aDNA

Mnemosyne confirms (mirror artifact pending — embargo-held):

- §3 actions match RareArchive's genesis-planning state.
- §4 sequencing respects R2 reflect-back of repositioning side-campaign.
- License + attribution + first-mention discipline preserved.
- WF Steward Council review per ADR 010.

**Signed**: Mnemosyne (pending — flips when ADR-010 window opens, operator approves delivery, and target vault session signs; co-signed by WF Steward Council representative per ADR 010).

---

## §7 Airlock-pattern self-reference

Inherits from [[../../who/coordination/coord_2026_05_08_publish_rewrite.md|publish-rewrite ancestor]]. Cross-links: [[../../../III.aDNA/how/airlock/AIRLOCK.md|III canonical]] · [[../../../VideoForge.aDNA/how/airlock/AIRLOCK.md|VideoForge reference]] · [[../../who/coordination/coord_2026_05_08_publish_rewrite.md|publish-rewrite ancestor]] · [[coord_2026_05_09_v7_rareharness.md|sibling rod-serpent memo (RareHarness)]] · [[coord_2026_05_09_v7_wilhelmai.md|umbrella memo (WilhelmAI)]].

1 of 17 multilateral instances; **external-org canonical-owner + Wilhelm-Foundation variant**. The most-complex airlock instance — cross-graph rod-serpent coupling + AI4U umbrella relationship + ADR-010 embargo + per-surface attribution + first-mention discipline + governance-non-over-commit + WF Steward Council co-sign requirement.

---

## §8 Standing Order discharges

| SO | Discharge |
|---|---|
| #2 / #8 | Memo IS the airlock pattern; documents the most-complex variant explicitly. |
| #6 | Persists permanently. |
| #7 | Dual-audience legible; partner-relationship norms explained. |
| #9 | Governance-track only; License + attribution norms preserved unchanged. |
| #10 | 20+ wikilinks; rod-serpent + umbrella + ADR-010 + ADR-002 + governance-non-over-commit cross-references. |

---

## §9 Status

**DRAFT — DELIVERY HELD.** Held for WilhelmAI ADR 010 publication-timing window. Operator approves per-memo before delivery. Wilhelm Foundation Steward Council co-sign required at delivery per ADR 010.

**M08a closes this draft**. Mirroring into RareArchive.aDNA (and separately, into the WF Foundation-side of the relationship per ADR 010) is **not** done in M08a Session 1 of this campaign. Delivery is operator-discretionary post-ADR-010-window-open.

**Forward-references**: M08b verifies post-flatten propagation post-delivery; WF Steward Council ledger entry in `WilhelmAI.aDNA/who/governance/coord_ledger.md`.
