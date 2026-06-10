---
type: coordination
title: "Cross-Graph Coordination: aDNA.aDNA → science_stanley.aDNA — aDNA v7.0 Adoption"
status: ready
direction: outbound (aDNA.aDNA initiates)
requesting_vault: aDNA.aDNA
requesting_persona: rosetta
receiving_vault: science_stanley.aDNA
receiving_persona: (none — single-operator brand vault)
requesting_agent: agent_stanley
created: 2026-05-09
updated: 2026-05-09
last_edited_by: agent_stanley
priority: medium
deadline: pre-science_stanley.aDNA-v7-migration
audit_id: adna_v2_m08a_science_stanley_v7_coord
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_p1_08a_upgrade_guide_and_coord_memos
objective: 1
target_mission: M08a
mirror: /Users/stanley/aDNA/science_stanley.aDNA/who/coordination/coord_2026_05_09_v7_aDNA_adoption.md
airlock_pattern: true
operator_class: LatticeProtocol-internal
external_party: (none)
delivery_held_until: operator-approval
ecosystem_validated_on: 2026-05-09
tags: [coordination, cross_graph, v7_0_adoption, rosetta, science_stanley, m08a, m08b, airlock_pattern, lp_internal_grandfathered_hyphen_flat]
---

# science_stanley.aDNA — aDNA v7.0 Coordination Memo

> **Multilateral airlock instance** (5 of 17). Hyphen-flat naming variant — vault directory `science_stanley.aDNA` paired with grandfathered-hyphen-flat repo `science-stanley-adna`. Inherits airlock structure from [[../../who/coordination/coord_2026_05_08_publish_rewrite.md|publish-rewrite ancestor]].

---

## §1 Airlock entry — what graph this is, why you're reading

> *Airlock convention*: external agents entering `science_stanley.aDNA` from another context graph start at `who/coordination/` for cross-graph operational state.

**aDNA.aDNA** is the self-referential aDNA documentation vault (Operation Rosetta). Persona: Rosetta.

**science_stanley.aDNA** is an **Org-Vault** in the lattice ecosystem — Science Stanley brand vault, single source of truth for all SS content generation. Single-operator org-vault. Publishes via SiteForge / ComfyForge / CanvasForge consumer wrappers.

This memo crosses from aDNA.aDNA (standard producer) to science_stanley.aDNA (standard consumer) because v7.0 lands two breaking changes affecting every vault.

---

## §2 What's changing in v7.0 (one-paragraph version)

aDNA v7.0 is a Major Governance bump (Standard track unchanged at v2.2). Two breaking: (1) repo flatten (M03); (2) publish-skill rewrite (M05). Three pull-based: v7.0 tag, repo rename, deploy_manifest.yaml move. Four opt-in: `node.aDNA/`, `LatticeScope.aDNA`, airlock stub, naming convention codification (per ADR-009; this vault is grandfathered-hyphen-flat — no rename forced). Full guide: [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]].

---

## §3 What science_stanley.aDNA specifically needs to do

### Current state of science_stanley.aDNA (validated 2026-05-09)

| Property | Value |
|---|---|
| Vault category | Org-Vault |
| Persona | (none — single-operator brand vault) |
| Operator class | LatticeProtocol-internal |
| Current git remote | `github.com/LatticeProtocol/science-stanley-adna.git` (LatticeProtocol-origin, **grandfathered hyphen-flat**) |
| Has `skill_lattice_publish.md` | Y |
| Has `.publish-clone/` workaround | N |
| Naming conforms to ADR-009 | **N** (grandfathered hyphen-flat per ADR-009 §3.1; rename optional) |
| Airlock-eligible | N (single-operator brand vault; no cross-vault traffic by design — content flows out via Forge wrappers, not in via cross-graph requests) |
| Maturity | Active |

### Required actions (breaking changes — one-time)

| # | Action | When | Where |
|---|---|---|---|
| 1 | **Workspace flatten**: clone the new `.adna/` directly. | M03 ships. | [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]] §2 |
| 2 | **Publish-skill adoption**: Your origin is already configured — run `~/.adna/how/skills/skill_deploy.md` to install the pre-push sanitization hook. | M05 ships. | [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]] §3 |

### Optional actions (additive — at your discretion)

| # | Action | Why you might want it | Why you might skip |
|---|---|---|---|
| 3 | **Adopt the airlock pattern** | Single-operator vault — typically not needed. | Skip; airlock benefits cross-vault traffic, not single-operator content. |
| 4 | **Bootstrap a `node.aDNA/`** | Useful if SS content production crosses multiple machines (e.g., GPU node for ComfyForge generation + edit machine for prose). | Single-machine setup. |
| 5 | **Rename to ADR-009 conformant form** (`science-stanley-adna` → `science_stanley.aDNA`) | Aligns with the new naming convention; cleaner cross-references; canonical isomorphism. | **Operator-discretionary** per ADR-009 §3 — grandfathered hyphen-flat is a permanent legitimate exception class. Rename has zero functional benefit; tracked in v3 successor `M04-EC` if elected. |

### science_stanley.aDNA-specific notes

- **Brand vault discipline**: SS is the single source of truth for all SS content. v7.0 adoption is operational (workspace + publish skill) and does not affect content authority or voice register.
- **Three Forge consumers**: SS uses `siteforge/`, `presentationforge/` (CanvasForge), `graphicnovelforge/` (CanvasForge), `comfyforge/` wrappers — each follows its parent Forge's version policy independently of v7.0.
- **Hyphen-flat naming**: ADR-009 §3.1 grandfathers the existing `science-stanley-adna` repo name. Rename to `science_stanley.aDNA` is operator-discretionary; v3-EC `M04-EC` is the channel for a coordinated rename if elected. **No rename forced or recommended**; the grandfathered name remains a permanent legitimate exception.

---

## §4 Suggested sequence + timing

| Step | Wait until | Action | Effort |
|---|---|---|---|
| Pre-flatten | M03 ships | Read this memo + upgrade guide. | 10 min |
| 1 | M03 announcement | Workspace flatten. | 5–15 min |
| 2 | M05 announcement | Publish-skill adoption. | 5 min |
| Verification | After Steps 1–2 | Run validation runbook. | 5 min |
| 3 (optional) | n/a | Skip airlock — single-operator vault. | n/a |
| 4 (optional) | Operator-decided | `node.aDNA/` bootstrap. | 10 min |
| 5 (optional) | M07 close ratifies ADR-009 | Rename consideration (operator-discretionary; v3-EC `M04-EC` channel). | Operator-discretionary. |

---

## §5 Acknowledgment + close-out trigger

`ready` → `acknowledged` (Stanley reads + commits) → `in_progress` (Step 1 begins) → `completed` (M08b verifies). Trigger is §6 co-sign.

LP-internal: vault-side persona reviews + co-signs.

---

## §6 Co-sign

### Rosetta — aDNA.aDNA (this vault)

Rosetta confirms (2026-05-09):

- v7.0 changes accurately captured in §3.
- Migration sequence reflects M03 + M05 ship order.
- Hyphen-flat name `science-stanley-adna` permanently grandfathered (ADR-009 §3.1); no rename forced.
- Forge wrapper consumers unaffected; each tracks its parent Forge's version policy.

**Signed**: Rosetta (`agent_stanley` acting in `aDNA.aDNA/` context), 2026-05-09T05:30:00Z.

### science_stanley.aDNA operator (target vault)

Operator confirms (mirror artifact pending):

- §3 actions match SS's brand-vault state.
- §4 sequencing accommodates SS content production cadence.

**Signed**: SS operator (pending).

---

## §7 Airlock-pattern self-reference

Inherits 5-section airlock pattern from [[../../who/coordination/coord_2026_05_08_publish_rewrite.md|publish-rewrite ancestor]].

Cross-links: [[../../../III.aDNA/how/airlock/AIRLOCK.md|III canonical]] · [[../../../VideoForge.aDNA/how/airlock/AIRLOCK.md|VideoForge reference]] · [[../../who/coordination/coord_2026_05_08_publish_rewrite.md|publish-rewrite ancestor]].

1 of 17 multilateral instances; hyphen-flat-grandfathered variant. Successor [[../../how/campaigns/campaign_adna_v3_ecosystem_compliance/campaign_adna_v3_ecosystem_compliance.md|`campaign_adna_v3_ecosystem_compliance`]] M04-EC tracks rename consideration if elected.

---

## §8 Standing Order discharges

| SO | Discharge |
|---|---|
| #2 / #8 | Memo IS the airlock pattern. |
| #6 | Persists permanently. |
| #7 | Developer reads §3 + §4; newcomer reads §1 + §2. |
| #9 | Governance-track only. |
| #10 | 15+ wikilinks. |

---

## §9 Status

**Ready for delivery.** LP-internal operator-discretionary delivery. ADR-009 §3.1 grandfathered hyphen-flat name preserved.
