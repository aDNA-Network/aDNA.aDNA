---
type: coordination
title: "Cross-Graph Coordination: aDNA.aDNA → CanvasForge.aDNA — aDNA v7.0 Adoption"
status: ready
direction: outbound (aDNA.aDNA initiates)
requesting_vault: aDNA.aDNA
requesting_persona: rosetta
receiving_vault: CanvasForge.aDNA
receiving_persona: hermes
requesting_agent: agent_stanley
created: 2026-05-09
updated: 2026-05-09
last_edited_by: agent_stanley
priority: medium
deadline: pre-CanvasForge.aDNA-v7-migration
audit_id: adna_v2_m08a_canvasforge_v7_coord
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_p1_08a_upgrade_guide_and_coord_memos
objective: 1
target_mission: M08a
mirror: /Users/stanley/aDNA/CanvasForge.aDNA/who/coordination/coord_2026_05_09_v7_aDNA_adoption.md
airlock_pattern: true
operator_class: LatticeProtocol-internal
external_party: (none)
delivery_held_until: operator-approval
ecosystem_validated_on: 2026-05-09
tags: [coordination, cross_graph, v7_0_adoption, rosetta, hermes, canvasforge, m08a, m08b, airlock_pattern, lp_internal_conformant]
---

# CanvasForge.aDNA — aDNA v7.0 Coordination Memo

> **Multilateral airlock instance** (3 of 17). Inherits structure from [[../../who/coordination/coord_2026_05_08_publish_rewrite.md|`coord_2026_05_08_publish_rewrite.md`]].

---

## §1 Airlock entry — what graph this is, why you're reading

> *Airlock convention*: external agents entering `CanvasForge.aDNA` from another context graph start at `who/coordination/` for cross-graph operational state.

**aDNA.aDNA** is the self-referential aDNA documentation vault (Operation Rosetta). Persona: Rosetta.

**CanvasForge.aDNA** is a **Forge** in the lattice ecosystem — context graph over the Obsidian-Canvas JSON standard; canvas as substrate, deck + comic applications riding on it. Voice-register compliance, VR1-VR5 scoring, character invariance, print CMYK export. Production v1.0 (Phase 7 closed 2026-05-04). Persona: Hermes (messenger; carries presentations across boundaries — slide decks, graphic novels, federated consumer wrappers).

This memo crosses from aDNA.aDNA (standard producer) to CanvasForge.aDNA (standard consumer) because v7.0 lands two breaking changes affecting every vault.

---

## §2 What's changing in v7.0 (one-paragraph version)

aDNA v7.0 is a Major Governance bump (Standard track unchanged at v2.2). Two breaking: (1) `~/aDNA/.adna -> adna/.adna` symlink retires (M03 repo flatten); (2) publish-skill family rewrite replaces rsync with `git push` (M05). Three pull-based: v7.0 tag, repo rename, `deploy_manifest.yaml` move. Four opt-in patterns: `node.aDNA/`, `LatticeScope.aDNA`, airlock stub, naming convention codification. Full guide: [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]].

---

## §3 What CanvasForge.aDNA specifically needs to do

### Current state of CanvasForge.aDNA (validated 2026-05-09)

| Property | Value |
|---|---|
| Vault category | Forge |
| Persona | Hermes |
| Operator class | LatticeProtocol-internal |
| Current git remote | `github.com/LatticeProtocol/CanvasForge.aDNA.git` (LatticeProtocol-origin) |
| Has `skill_lattice_publish.md` | Y |
| Has `.publish-clone/` workaround | N |
| Naming conforms to ADR-009 | **Y** (canonical) |
| Airlock-eligible | **Y** (Forge with active cross-vault traffic — SS `presentationforge/` + SS `graphicnovelforge/` + CC `presentationforge/`) |
| Maturity | Production v1.0 (Phase 7 closed 2026-05-04) |

### Required actions (breaking changes — one-time)

| # | Action | When | Where |
|---|---|---|---|
| 1 | **Workspace flatten**: clone the new `.adna/` directly. | M03 ships. | [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]] §2 |
| 2 | **Publish-skill adoption**: Your origin is already configured — run `~/.adna/how/skills/skill_deploy.md` to install the pre-push sanitization hook. | M05 ships. | [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]] §3 |

### Optional actions (additive — at your discretion)

| # | Action | Why you might want it | Why you might skip |
|---|---|---|---|
| 3 | **Adopt the airlock pattern** — `~/.adna/how/airlock/AIRLOCK.md` → `CanvasForge.aDNA/how/airlock/AIRLOCK.md`. | CanvasForge has the highest cross-vault traffic in the ecosystem (3 active consumer wrappers + III federation). Hermes (messenger persona) maps naturally to airlock-pattern role. **Strongly suggested.** | Defer if Phase 7 wind-down still has open backlog items. |
| 4 | **Bootstrap a `node.aDNA/`** at workspace root | Useful for content-production operators (slide deck + graphic novel pipelines). | One-machine setup. |
| 5 | **Rename to ADR-009 conformant form** | n/a — already conformant. | No rename required. |

### CanvasForge.aDNA-specific notes

- **Three live consumer wrappers**: `science_stanley.aDNA/presentationforge/`, `science_stanley.aDNA/graphicnovelforge/`, `context_commons.aDNA/presentationforge/`. v7.0 adoption in CanvasForge does not require wrapper updates; consumer vaults adopt v7.0 independently.
- **Wilhelm 8.80 + Issue 01 8.43 parity baselines**: locked at Phase 7 close 2026-05-04; v7.0 adoption does not perturb baseline content. Re-baselining (if any) is consumer-side scope.
- **Production v1.0 with successor staged**: `campaign_canvasforge_v1_1_hardening` opens on Stanley command. v7.0 adoption can sequence into the v1.1 campaign rather than running standalone if Stanley prefers.
- **III federation**: CanvasForge consumes III for VR1-VR5 voice-register scoring; `iii/` wrapper directory follows III's own version policy independently of v7.0.

---

## §4 Suggested sequence + timing

| Step | Wait until | Action | Effort |
|---|---|---|---|
| Pre-flatten | M03 ships | Read this memo + upgrade guide. | 10 min |
| 1 | M03 announcement | Workspace flatten. | 5–15 min |
| 2 | M05 announcement | Publish-skill adoption. | 5 min |
| Verification | After Steps 1–2 | Run validation runbook. | 5 min |
| 3 (optional) | Operator-decided | Airlock adoption (Y eligible — strongly suggested). | 30–60 min |
| 4 (optional) | Operator-decided | `node.aDNA/` bootstrap. | 10 min |
| 5 (optional) | n/a | No rename required. | n/a |

---

## §5 Acknowledgment + close-out trigger

`ready` → `acknowledged` (Hermes reads + commits) → `in_progress` (Step 1 begins) → `completed` (M08b verifies). Trigger is §6 co-sign.

LP-internal: vault-side persona reviews + co-signs; no embargo coordination.

---

## §6 Co-sign

### Rosetta — aDNA.aDNA (this vault)

Rosetta confirms (2026-05-09):

- v7.0 changes accurately captured in §3.
- Migration sequence reflects M03 + M05 ship order.
- Optional adoptions non-coercive; airlock adoption strongly suggested given cross-vault traffic.
- Naming-convention conformance already met.

**Signed**: Rosetta (`agent_stanley` acting in `aDNA.aDNA/` context), 2026-05-09T05:30:00Z.

### Hermes — CanvasForge.aDNA (target vault)

Hermes confirms (mirror artifact pending):

- §3 actions match CanvasForge's Production v1.0 state.
- §4 sequencing accommodates v1.1 hardening campaign sequencing if Stanley elects.
- Airlock adoption considered for cross-forge consumer traffic management.

**Signed**: Hermes (pending).

---

## §7 Airlock-pattern self-reference

Inherits 5-section airlock pattern from [[../../who/coordination/coord_2026_05_08_publish_rewrite.md|publish-rewrite ancestor]].

Cross-links: [[../../../III.aDNA/how/airlock/AIRLOCK.md|III canonical airlock]] · [[../../../VideoForge.aDNA/how/airlock/AIRLOCK.md|VideoForge reference]] · [[../../who/coordination/coord_2026_05_08_publish_rewrite.md|publish-rewrite ancestor]] · [[../../../CanvasForge.aDNA/who/coordination/coord_2026_05_08_videoforge_requests_carly_herb_deck.md|CanvasForge ↔ VideoForge worked example]] (the latter is itself a CanvasForge airlock instance).

1 of 17 multilateral instances rendered by M08a. Successor [[../../how/campaigns/campaign_adna_v3_ecosystem_compliance/campaign_adna_v3_ecosystem_compliance.md|`campaign_adna_v3_ecosystem_compliance`]] M05-EC consumes this template as prototype.

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

**Ready for delivery.** LP-internal operator-discretionary. M08b verifies post-flatten.
