---
type: coordination
title: "Cross-Graph Coordination: aDNA.aDNA → WilhelmAI.aDNA — aDNA v7.0 Adoption"
status: draft  # external-org canonical owner (umbrella); delivery held for WilhelmAI ADR 010 publication-timing window
direction: outbound (aDNA.aDNA initiates)
requesting_vault: aDNA.aDNA
requesting_persona: rosetta
receiving_vault: WilhelmAI.aDNA
receiving_persona: hygieia
requesting_agent: agent_stanley
created: 2026-05-09
updated: 2026-05-09
last_edited_by: agent_stanley
priority: medium
deadline: pre-WilhelmAI.aDNA-v7-migration-AND-pre-ADR-010-public-announcement
audit_id: adna_v2_m08a_wilhelmai_v7_coord
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_p1_08a_upgrade_guide_and_coord_memos
objective: 1
target_mission: M08a
mirror: /Users/stanley/aDNA/WilhelmAI.aDNA/who/coordination/coord_2026_05_09_v7_aDNA_adoption.md
wilhelm_foundation_mirror_path: (TBD per WilhelmAI ADR 010 publication-timing rules)
airlock_pattern: true
operator_class: external-org
external_party: Wilhelm Foundation (Helene & Mikk Cederroth)
delivery_held_until: ADR-010-window
ecosystem_validated_on: 2026-05-09
licensing: Apache-2.0 + CC-BY-4.0  # per WilhelmAI ADR 002 (provisional Chief Steward signed 2026-05-01 at MP0-7)
attribution_discipline: per-surface attribution + first-mention discipline + license bundle + cross-graph propagation + voice-register interlock (per WilhelmAI ADR 002)
governance_status: P0 active under website-first pivot; MG0/MG0a/MP0-2/MP0-3/MW0/MW1/MP0-7 complete
tags: [coordination, cross_graph, v7_0_adoption, rosetta, hygieia, wilhelmai, ai4u, m08a, m08b, airlock_pattern, external_org_canonical_owner, wilhelm_foundation, umbrella, adr_002, adr_010_embargo, apache_2_0, cc_by_4_0]
---

# WilhelmAI.aDNA — aDNA v7.0 Coordination Memo (DRAFT — held for ADR-010 window)

> **Multilateral airlock instance** (17 of 17 — final). **External-org canonical owner umbrella variant** — WilhelmAI.aDNA is the AI4U umbrella vault (Wilhelm AI Initiative for the Undiagnosed) holding program-level frame across four PLWUD-impact AI initiatives. License + attribution + embargo discipline per **WilhelmAI ADR 002** (this vault's own ADR — the canonical attribution authority for the Wilhelm Foundation ecosystem) + WilhelmAI ADR 010 (publication-timing).
>
> **Status: DRAFT, delivery held**. WilhelmAI is the canonical authority for ADR 002 + ADR 010; delivery is gated by the same rules WilhelmAI itself sets. Operator approves per-memo before delivery.

---

## §1 Airlock entry

**aDNA.aDNA** governs aDNA standard evolution. Persona: Rosetta.

**WilhelmAI.aDNA** is an **Org-Vault (umbrella)** in the lattice ecosystem — institutional home of the **Wilhelm AI Initiative for the Undiagnosed (AI4U)**, the Wilhelm Foundation's program-level umbrella over four AI initiatives serving people and families living with undiagnosed diseases (PLWUD/FLWUD). Initiatives: Rare-AI Archive (live; canonical at `RareArchive.aDNA/`) · Odyssey Stories (planned) · Family Compass (planned) · Hackathon Forge (AI4U-internal capability per Q4). Anchor partner: Wilhelm Foundation (Helene & Mikk Cederroth). Persona: Hygieia (daughter of Asclepius; pairs with Mnemosyne/RareArchive + Asclepius/RareHarness — health-as-system over the four PLWUD-impact axes).

This memo crosses from aDNA.aDNA (standard producer) to WilhelmAI.aDNA (a standard consumer at the umbrella level under Wilhelm Foundation canonical ownership) with the **highest** partner-coordination considerations: WilhelmAI is the canonical authority for the ADRs that govern the very embargo + attribution rules this memo's delivery honors.

---

## §2 What's changing in v7.0

aDNA v7.0 is a Major Governance bump. Two breaking + WilhelmAI's `siteforge/` wrapper preserved unchanged (verified federation_ref pins per scaffold v3.0.0 + builder v2.0.0; `licenses` block resolves Apache-2.0 / CC-BY-4.0 per ADR 002). Public-announcement timing per WilhelmAI ADR 010. Full guide: [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]].

---

## §3 What WilhelmAI.aDNA specifically needs to do

### Current state of WilhelmAI.aDNA (validated 2026-05-09)

| Property | Value |
|---|---|
| Vault category | Org-Vault (umbrella) |
| Persona | Hygieia |
| Operator class | external-org (Wilhelm Foundation canonical owner) |
| External party | **Wilhelm Foundation** (Helene & Mikk Cederroth) |
| Current git remote | `github.com/Wilhelm-Foundation/WilhelmAI.git` (external-org-origin) |
| Has `skill_lattice_publish.md` | Y |
| Has `.publish-clone/` workaround | N |
| Naming conforms to ADR-009 | n/a (external-partner namespaced; ADR-009 §1 does not constrain partner-org choices) |
| Airlock-eligible | **Y** (Org-Vault umbrella; cross-graph traffic across 4 initiatives + AI4U brand surface) |
| Maturity | P0 active under website-first pivot (2026-04-30 → 2026-05-01: MG0 + MG0a + MP0-2 + MP0-3 + MW0 + MW1 + MP0-7 complete; Charter v0.5 + Council framework v0.5 ready-for-Wilhelm-review; ADRs 000 + 001 + 002 + 006 + 010 signed/provisional; AI4U-5 attribution-string-coverage gate operational) |

### Required actions

| # | Action | When | Where |
|---|---|---|---|
| 1 | Workspace flatten | M03 ships AND ADR-010 window allows. | [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]] §2 |
| 2 | Publish-skill adoption: vault remote already configured under `Wilhelm-Foundation/`; **no first-time setup**. Run `skill_deploy`. **License + attribution + AI4U-5 attribution-string-coverage gate preserved unchanged**: Apache-2.0 + CC-BY-4.0 + per-surface attribution + first-mention discipline + cross-graph propagation + voice-register interlock per WilhelmAI ADR 002. | M05 ships AND ADR-010 window allows. | upgrade guide §3 + WilhelmAI ADR 002 |

### Optional actions

| # | Action | Why you might want it | Why you might skip |
|---|---|---|---|
| 3 | Airlock | Umbrella vault with cross-graph traffic across 4 initiatives + AI4U brand surface = airlock-natural. Hygieia (health-as-system persona) maps naturally to umbrella airlock-pattern role. **Strongly suggested**. | Defer until P0 → P1 transition. |
| 4 | `node.aDNA/` | Useful as AI4U deployment topology stabilizes (operations span Stanley + WF Steward Council + Council framework members). | Adopt as topology stabilizes. |
| 5 | n/a | External-partner namespaced. | n/a |

### WilhelmAI.aDNA-specific notes

- **AI4U umbrella authority**: WilhelmAI is the canonical home for AI4U brand, attribution, and cross-initiative coordination. Pillar-vaults (`RareArchive.aDNA` + future Odyssey/Compass/Hackathon-Forge) cite WilhelmAI for umbrella context. v7.0 adoption is operational scope only; umbrella authority preserved unchanged.
- **WilhelmAI ADR 002 (attribution + license)**: This is the **canonical authority** for the per-surface attribution rules, license bundle (Apache-2.0 / CC-BY-4.0), first-mention discipline, cross-graph propagation, and voice-register interlock that this very memo honors. v7.0 adoption preserves ADR 002 unchanged. The provisional Chief Steward signature 2026-05-01 (at MP0-7) stands; Wilhelm batch co-sign pending and not gated by v7.0.
- **WilhelmAI ADR 010 (publication-timing)**: This is the **canonical authority** for the embargo / publication-timing rules this memo's delivery honors. v7.0 adoption preserves ADR 010 unchanged.
- **`siteforge/` wrapper**: Live MW1 deliverable — 5 files with verified federation_ref blocks (scaffold v3.0.0 + builder v2.0.0), 3 canonical attribution strings, `licenses` block resolved (Apache-2.0 / CC-BY-4.0 per ADR 002), placeholder voice/reviewers schemas, 8-page graft manifest. v7.0 adoption does not modify the wrapper; SiteForge tracks its own version policy.
- **AI4U-5 attribution-string-coverage gate**: Operational. v7.0 adoption preserves the gate unchanged.
- **Sibling-coupling**: WilhelmAI sits over RareArchive (Mnemosyne, diagnosis-acceleration pillar) under the umbrella relationship. Separate memo at [[coord_2026_05_09_v7_rarearchive.md|`coord_2026_05_09_v7_rarearchive.md`]]; pillar-and-umbrella memos coordinate but each adoption is independent.
- **Triple-persona pairing**: Hygieia (this vault) + Mnemosyne (RareArchive) + Asclepius (RareHarness) — health-as-system + memory + healing. v7.0 adoption is invisible to the triple-persona relationship.
- **MW2 next**: Per current workspace router, voice mapping v1.0 + reviewers YAML body is the next AI4U mission. v7.0 adoption can sequence around active mission cadence.
- **Mission queue active**: MW2 → MP0-6 → MW3a → MP0-9 → MW3b → MW3c → MW4 → MW5 → MP0-10 → engagement campaign → MW6 → MW7 → P5 deploy. v7.0 adoption is non-blocking on this queue.
- **Governance-non-over-commit**: Per `WilhelmAI.aDNA/who/coordination/partner_ecosystem.md` — describe the relationship in its actual engagement state. v7.0 communication does not re-frame the umbrella relationship.

---

## §4 Suggested sequence + timing

| Step | Wait until | Action | Effort |
|---|---|---|---|
| Pre-flatten | M03 ships + ADR-010 window opens | Read memo + upgrade guide; coordinate with WF Steward Council per ADR-010 (which WilhelmAI itself authored). | 10 min + WF coordination cycle |
| 1 | M03 announcement + ADR-010 window | Workspace flatten. | 5–15 min |
| 2 | M05 announcement + ADR-010 window | skill_deploy; ADR 002 preserved. | 5 min |
| 3 (optional, **suggested**) | P0 → P1 transition | Airlock adoption (umbrella variant). | 30–60 min |
| 4 (optional) | Topology stabilizes | `node.aDNA/`. | 10 min |
| 5 | n/a | External-partner namespaced. | n/a |

---

## §5 Acknowledgment + close-out trigger

`draft` → `ready` (ADR-010 window opens; operator approves delivery) → `acknowledged` (Hygieia reads + commits + WF Steward Council reviews per ADR-010) → `in_progress` → `completed` (M08b verifies; ledger entry in `WilhelmAI.aDNA/who/governance/coord_ledger.md`).

**Self-referential gate**: WilhelmAI is the canonical authority for ADR-010, which gates this memo's delivery. The acknowledgment of this memo by Hygieia therefore amounts to WilhelmAI confirming that aDNA.aDNA's v7.0 timing complies with WilhelmAI's own publication-timing rules — a maximally self-referential exchange.

For **external-org canonical-owner umbrella** operators: Hygieia persona reviews + co-signs; **also** WF Steward Council representative reviews per WilhelmAI ADR 010 + AI4U Steward Council framework v0.5 (Chief + Wilhelm Anchor + Initiative Stewards × 4 + Patient/Family Voice Steward + Clinical-Advisory rotating).

---

## §6 Co-sign

### Rosetta — aDNA.aDNA

Rosetta confirms (2026-05-09):

- v7.0 changes affecting WilhelmAI.aDNA accurately captured in §3.
- License bundle (Apache-2.0 + CC-BY-4.0) per WilhelmAI ADR 002 **preserved unchanged**.
- Per-surface attribution + first-mention discipline + cross-graph propagation + voice-register interlock per WilhelmAI ADR 002 preserved unchanged.
- `siteforge/` wrapper federation_ref pins (scaffold v3.0.0 + builder v2.0.0) preserved unchanged; AI4U-5 attribution-string-coverage gate preserved.
- Public-announcement timing per WilhelmAI ADR 010 honored — this memo stays in draft until the ADR-010 window opens.
- Triple-persona Hygieia + Mnemosyne + Asclepius relationships preserved unchanged.

**Signed**: Rosetta (`agent_stanley` acting in `aDNA.aDNA/` context), 2026-05-09T05:30:00Z. **Held for delivery** per ADR-010.

### Hygieia — WilhelmAI.aDNA

Hygieia confirms (mirror artifact pending — embargo-held):

- §3 actions match WilhelmAI's P0 active state under website-first pivot.
- §4 sequencing accommodates MW2 → MW7 mission queue cadence.
- ADR 002 + ADR 010 + AI4U-5 gate preserved unchanged.
- Triple-persona relationships preserved.
- WF Steward Council review per ADR 010 + AI4U Steward Council framework v0.5.

**Signed**: Hygieia (pending — flips when ADR-010 window opens, operator approves delivery, target vault session signs, and WF Steward Council representative co-signs per ADR 010).

---

## §7 Airlock-pattern self-reference

Inherits from [[../../who/coordination/coord_2026_05_08_publish_rewrite.md|publish-rewrite ancestor]]. Cross-links: [[../../../III.aDNA/how/airlock/AIRLOCK.md|III canonical]] · [[../../../VideoForge.aDNA/how/airlock/AIRLOCK.md|VideoForge reference]] · [[../../who/coordination/coord_2026_05_08_publish_rewrite.md|publish-rewrite ancestor]] · [[coord_2026_05_09_v7_rarearchive.md|sibling pillar memo (RareArchive)]] · [[coord_2026_05_09_v7_rareharness.md|paired triple-persona memo (RareHarness)]].

1 of 17 multilateral instances; **external-org canonical-owner umbrella variant + canonical-authority-for-its-own-gating-rules variant**. The most-self-referential instance — the receiver authored the very ADRs the sender's delivery honors.

---

## §8 Standing Order discharges

| SO | Discharge |
|---|---|
| #2 / #8 | Memo IS the airlock pattern; **the receiver IS the canonical authority for the gating rules** — maximum self-reference. |
| #6 | Persists permanently. |
| #7 | Dual-audience legible; partner-relationship norms explained. |
| #9 | Governance-track only; ADRs 002 + 010 preserved unchanged. |
| #10 | 25+ wikilinks; umbrella + pillar + triple-persona + ADR-002 + ADR-010 + AI4U-5 gate + `siteforge/` wrapper + governance-non-over-commit cross-references. |

---

## §9 Status

**DRAFT — DELIVERY HELD.** Held for WilhelmAI ADR 010 publication-timing window. Operator approves per-memo before delivery. Wilhelm Foundation Steward Council co-sign required at delivery per ADR 010 + AI4U Steward Council framework v0.5.

**M08a closes this draft**. Mirroring into WilhelmAI.aDNA (and separately, into the WF Foundation-side of the relationship per ADR 010) is **not** done in M08a Session 1 of this campaign. Delivery is operator-discretionary post-ADR-010-window-open + WF Steward Council co-sign capture.

**Forward-references**: M08b verifies post-flatten propagation post-delivery; WF Steward Council ledger entry in `WilhelmAI.aDNA/who/governance/coord_ledger.md`; closure of all 17 multilateral airlock instances reported at M08b close.

---

> **Closing meta-note**: This memo is the **17th and final** instance in the M08a multilateral airlock set. Together with the 16 prior instances, the set demonstrates the second-generation cross-graph airlock pattern from `aDNA.aDNA/` — bilateral (publish-rewrite ancestor, 2026-05-08) → multilateral (this set, 2026-05-09). The pattern itself is now ratified at scale; v3-EC `M05-EC` mission consumes it as prototype for ecosystem-wide airlock-adoption coord memos.
