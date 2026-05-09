---
type: coordination
title: "Cross-Graph Coordination: aDNA.aDNA → ComfyForge.aDNA — aDNA v7.0 Adoption"
status: ready
direction: outbound (aDNA.aDNA initiates)
requesting_vault: aDNA.aDNA
requesting_persona: rosetta
receiving_vault: ComfyForge.aDNA
receiving_persona: vulcan
requesting_agent: agent_stanley
created: 2026-05-09
updated: 2026-05-09
last_edited_by: agent_stanley
priority: medium
deadline: pre-ComfyForge.aDNA-v7-migration
audit_id: adna_v2_m08a_comfyforge_v7_coord
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_p1_08a_upgrade_guide_and_coord_memos
objective: 1
target_mission: M08a
mirror: /Users/stanley/lattice/ComfyForge.aDNA/who/coordination/coord_2026_05_09_v7_aDNA_adoption.md
airlock_pattern: true
operator_class: LatticeProtocol-internal
external_party: (none)
delivery_held_until: operator-approval
ecosystem_validated_on: 2026-05-09
tags: [coordination, cross_graph, v7_0_adoption, rosetta, vulcan, comfyforge, m08a, m08b, airlock_pattern, lp_internal_conformant]
---

# ComfyForge.aDNA — aDNA v7.0 Coordination Memo

> **Multilateral airlock instance** (2 of 17). Inherits structure from [[../../who/coordination/coord_2026_05_08_publish_rewrite.md|`coord_2026_05_08_publish_rewrite.md`]].

---

## §1 Airlock entry — what graph this is, why you're reading

> *Airlock convention*: external agents entering `ComfyForge.aDNA` from another context graph start at `who/coordination/` for cross-graph operational state.

**aDNA.aDNA** is the self-referential aDNA documentation vault (Operation Rosetta). It governs the aDNA standard's evolution; `campaign_adna_v2_infrastructure` produces aDNA Governance v7.0. Persona: Rosetta.

**ComfyForge.aDNA** is a **Forge** in the lattice ecosystem — ComfyUI visual generation forge; workflows, models, LoRA training, III-integrated pipelines. Persona: Vulcan (forger of forms; pairs naturally with the Forge category). As a v6.0 consumer of the aDNA template, ComfyForge.aDNA adopts the v7.0 changes per Vulcan's schedule (v7.0 is non-coercive).

This memo crosses from aDNA.aDNA (the standard producer) to ComfyForge.aDNA (a standard consumer) because v7.0 lands two breaking changes — the repo flatten and the publish-skill family rewrite — that affect every vault.

---

## §2 What's changing in v7.0 (one-paragraph version)

aDNA v7.0 is a Major Governance bump (Standard track unchanged at v2.2). Two things break and need a one-time migration: (1) the `~/lattice/.adna -> adna/.adna` symlink retires — `.adna/` is now a real directory (M03 repo flatten); (2) the publish-skill family rewrite replaces the rsync workaround with `git push` (M05 publish family). Three things are pull-based and need nothing: the v7.0 tag, the GitHub repo rename `Agentic-DNA` → `adna`, the `deploy_manifest.yaml` move into `.github/`. Four things are new opt-in patterns: `node.aDNA/` local node vault, `LatticeScope.aDNA` observability project, the airlock-pattern adoption stub, the `<name>.aDNA/ ↔ <name>.aDNA.git` naming convention codification. Full guide: [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]].

---

## §3 What ComfyForge.aDNA specifically needs to do

### Current state of ComfyForge.aDNA (validated 2026-05-09)

| Property | Value |
|---|---|
| Vault category | Forge |
| Persona | Vulcan |
| Operator class | LatticeProtocol-internal |
| Current git remote | `github.com/LatticeProtocol/ComfyForge.aDNA.git` (LatticeProtocol-origin) |
| Has `skill_lattice_publish.md` | Y |
| Has `.publish-clone/` workaround | N |
| Naming conforms to ADR-009 | **Y** (canonical `<name>.aDNA.git` form) |
| Airlock-eligible | Y (Forge category default) |
| Maturity | Phase 1 (~60%) |

### Required actions (breaking changes — one-time)

| # | Action | When | Where to look |
|---|---|---|---|
| 1 | **Workspace flatten**: from `~/lattice/`, remove the `.adna` symlink + `adna/` outer wrapper, then `git clone https://github.com/LatticeProtocol/adna.git .adna`. | Once M03 ships. | [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]] §2 |
| 2 | **Publish-skill adoption**: Your origin is already configured — run `~/.adna/how/skills/skill_deploy.md` to install the pre-push sanitization hook. | Once M05 ships. | [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]] §3 |

### Optional actions (additive — at your discretion)

| # | Action | Why you might want it | Why you might skip |
|---|---|---|---|
| 3 | **Adopt the airlock pattern** — copy `~/.adna/how/airlock/AIRLOCK.md` into `ComfyForge.aDNA/how/airlock/AIRLOCK.md`. | ComfyForge handles cross-vault generation requests (SS pipelines for content production). Vulcan would benefit from a structured incoming-request protocol. | Defer until v3-EC. |
| 4 | **Bootstrap a `node.aDNA/`** at workspace root | Useful for L1/L2 GPU operators running ComfyUI workflows; per-machine model + LoRA inventory. | One-machine setup. |
| 5 | **Rename to ADR-009 conformant form** | n/a — already conformant (`ComfyForge.aDNA.git`). | No rename required. |

### ComfyForge.aDNA-specific notes

- **III integration**: ComfyForge integrates with III for image-quality measurement; v7.0 adoption does not affect III federation; `iii/` wrapper directory (if present) follows III's own version policy.
- **Phase 1 maturity**: ComfyForge is mid-build (~60%); v7.0 adoption can wait until ComfyForge's Phase 1 close to avoid mid-build infrastructure churn.
- **GPU-resident**: ComfyForge typically lives on a GPU node (L1+ tier); the workspace-flatten migration applies to wherever the operator runs the agent — adopt at the GPU node when convenient.

---

## §4 Suggested sequence + timing

| Step | Wait until | Action | Effort |
|---|---|---|---|
| Pre-flatten | M03 ships | Read this memo + [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]]. | 10 min |
| 1 | M03 announcement | Workspace flatten. | 5–15 min |
| 2 | M05 announcement | Publish-skill adoption. | 5 min |
| Verification | After Steps 1–2 | Run validation runbook. | 5 min |
| 3 (optional) | Operator-decided | Airlock adoption (Y eligible). | 30–60 min |
| 4 (optional) | Operator-decided | `node.aDNA/` bootstrap. | 10 min |
| 5 (optional) | n/a | No rename required. | n/a |

---

## §5 Acknowledgment + close-out trigger

This memo's `status` flips: `ready` → `acknowledged` (Vulcan reads + commits to sequence date) → `in_progress` (Step 1 begins) → `completed` (M08b verifies). Trigger is §6 co-sign.

LP-internal: vault-side persona reviews + co-signs; no embargo coordination.

---

## §6 Co-sign

### Rosetta — aDNA.aDNA (this vault)

Rosetta confirms (2026-05-09):

- v7.0 changes affecting ComfyForge.aDNA accurately captured in §3.
- Migration sequence reflects M03 + M05 ship order; no out-of-band requirements.
- Optional adoptions non-coercive; ComfyForge stays valid v6 vault if it skips.
- Naming-convention conformance already met; no rename required.

**Signed**: Rosetta (`agent_stanley` acting in `aDNA.aDNA/` context), 2026-05-09T05:30:00Z.

### Vulcan — ComfyForge.aDNA (target vault)

Vulcan confirms (mirror artifact pending):

- §3 actions match ComfyForge's current state and Phase 1 capacity.
- §4 sequencing accommodates ComfyForge's Phase 1 build cadence.
- Optional sections acknowledged; airlock adoption considered for III-integration request flow.

**Signed**: Vulcan (pending — flips when target vault's session signs).

---

## §7 Airlock-pattern self-reference

This memo structurally inherits from [[../../who/coordination/coord_2026_05_08_publish_rewrite.md|`coord_2026_05_08_publish_rewrite.md`]] (5-section airlock pattern: header → request → handshake → response → co-sign).

Cross-links: [[../../../III.aDNA/how/airlock/AIRLOCK.md|III canonical airlock]] · [[../../../VideoForge.aDNA/how/airlock/AIRLOCK.md|VideoForge reference Forge airlock]] · [[../../who/coordination/coord_2026_05_08_publish_rewrite.md|publish-rewrite ancestor memo]].

This memo is 1 of 17 multilateral instances rendered by M08a. Successor [[../../how/campaigns/campaign_adna_v3_ecosystem_compliance/campaign_adna_v3_ecosystem_compliance.md|`campaign_adna_v3_ecosystem_compliance`]] M05-EC consumes this template as prototype for per-vault airlock-adoption memos.

---

## §8 Standing Order discharges

| Standing Order | Discharge |
|---|---|
| #2 / #8 (self-reference) | Memo IS the airlock pattern v7.0 codifies. |
| #6 (archive, never delete) | Persists permanently in `who/coordination/`. |
| #7 (dual-audience) | Developer reads §3 + §4; newcomer reads §1 + §2. |
| #9 (upstream spec) | Governance-track only; `adna_standard.md` unchanged. |
| #10 (cross-link) | 15+ wikilinks across artifacts, ADRs, airlocks, successor campaign. |

---

## §9 Status

**Ready for delivery.** LP-internal operator-discretionary delivery. M08b verifies post-flatten propagation.
