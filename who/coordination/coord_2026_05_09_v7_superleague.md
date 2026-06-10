---
type: coordination
title: "Cross-Graph Coordination: aDNA.aDNA → SuperLeague.aDNA — aDNA v7.0 Adoption"
status: draft  # engagement-partner; delivery operator-gated; coordinate with Smarter With Science LLC contracting vehicle
direction: outbound (aDNA.aDNA initiates)
requesting_vault: aDNA.aDNA
requesting_persona: rosetta
receiving_vault: SuperLeague.aDNA
receiving_persona: janus
requesting_agent: agent_stanley
created: 2026-05-09
updated: 2026-05-09
last_edited_by: agent_stanley
priority: medium
deadline: pre-SuperLeague.aDNA-v7-migration-and-pre-v1.0-handoff
audit_id: adna_v2_m08a_superleague_v7_coord
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_p1_08a_upgrade_guide_and_coord_memos
objective: 1
target_mission: M08a
mirror: /Users/stanley/aDNA/SuperLeague.aDNA/who/coordination/coord_2026_05_09_v7_aDNA_adoption.md
airlock_pattern: true
operator_class: engagement-partner
external_party: Super League Enterprise via Smarter With Science LLC
delivery_held_until: operator-approval  # engagement-vehicle gating; not ADR-010 (that's Wilhelm-only)
ecosystem_validated_on: 2026-05-09
tags: [coordination, cross_graph, v7_0_adoption, rosetta, janus, superleague, smarter_with_science, m08a, m08b, airlock_pattern, engagement_partner, lp_internal_conformant]
---

# SuperLeague.aDNA — aDNA v7.0 Coordination Memo

> **Multilateral airlock instance** (4 of 17). Engagement-partner variant — coordinates with Super League Enterprise via Smarter With Science LLC contracting vehicle. Inherits airlock structure from [[../../who/coordination/coord_2026_05_08_publish_rewrite.md|publish-rewrite ancestor]].

---

## §1 Airlock entry — what graph this is, why you're reading

> *Airlock convention*: external agents entering `SuperLeague.aDNA` from another context graph start at `who/coordination/` for cross-graph operational state.

**aDNA.aDNA** is the self-referential aDNA documentation vault (Operation Rosetta). Persona: Rosetta.

**SuperLeague.aDNA** is an **Engagement** vault in the lattice ecosystem — Super League Enterprise (Nasdaq: SLE) engagement governed via Smarter With Science LLC contracting vehicle. v0.1 provisional vault; 4-week pilot active. Persona: Janus (two-faced gatekeeper governing cross-boundary engagements — one face inward to Lattice Protocol, one face outward to the partner; pairs naturally with engagement-vehicle pattern).

This memo crosses from aDNA.aDNA (the standard producer) to SuperLeague.aDNA (a standard consumer, currently mid-pilot) because v7.0 lands two breaking changes — the repo flatten and the publish-skill family rewrite — that affect every vault. The **engagement-vehicle** wrinkle: SuperLeague's v0.1 → v1.0 trajectory may sequence ahead of, alongside, or behind v7.0 adoption depending on engagement-team decisions.

---

## §2 What's changing in v7.0 (one-paragraph version)

aDNA v7.0 is a Major Governance bump (Standard track unchanged at v2.2). Two breaking: (1) repo flatten (M03); (2) publish-skill rewrite (M05). Three pull-based: v7.0 tag, repo rename, deploy_manifest.yaml move. Four opt-in: `node.aDNA/`, `LatticeScope.aDNA`, airlock stub, naming convention codification. Full guide: [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]].

---

## §3 What SuperLeague.aDNA specifically needs to do

### Current state of SuperLeague.aDNA (validated 2026-05-09)

| Property | Value |
|---|---|
| Vault category | Engagement (not yet routed in workspace router) |
| Persona | Janus |
| Operator class | engagement-partner |
| External party | Super League Enterprise via Smarter With Science LLC |
| Current git remote | `github.com/LatticeProtocol/SuperLeague.aDNA.git` (LatticeProtocol-origin) |
| Has `skill_lattice_publish.md` | Y |
| Has `.publish-clone/` workaround | N |
| Naming conforms to ADR-009 | **Y** (canonical) |
| Airlock-eligible | Y (engagement vault, cross-org coordination needs structured incoming requests) |
| Maturity | Genesis planning (v0.1 provisional) |

### Required actions (breaking changes — one-time)

| # | Action | When | Where |
|---|---|---|---|
| 1 | **Workspace flatten**: clone the new `.adna/` directly. | M03 ships, AND coordinate with the engagement team to find a non-blocking window in the pilot cadence. | [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]] §2 |
| 2 | **Publish-skill adoption**: Your origin is already configured — run `~/.adna/how/skills/skill_deploy.md` to install the pre-push sanitization hook. | M05 ships. | [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]] §3 |

### Optional actions (additive — at your discretion)

| # | Action | Why you might want it | Why you might skip |
|---|---|---|---|
| 3 | **Adopt the airlock pattern** | Engagement vault with cross-org traffic — Janus persona benefits from a structured incoming-request protocol when Super League / Smarter With Science staff initiate cross-graph operations. | Defer until v1.0 ship. |
| 4 | **Bootstrap a `node.aDNA/`** | If the engagement team operates from multiple machines (Stanley + Herb + Carly currently engaged per `coord_2026_04_27_herb_carly_kickoff.md`), per-machine inventory aids coordination. | Single-machine engagement. |
| 5 | **Rename to ADR-009 conformant form** | n/a — already conformant. | No rename required. |

### SuperLeague.aDNA-specific notes

- **Engagement-vehicle pattern**: Smarter With Science LLC operates as the contracting vehicle between Lattice Protocol and Super League Enterprise. v7.0 adoption is **technical** scope; commercial / contractual scope continues unchanged. No legal-document touchpoints.
- **v0.1 → v1.0 trajectory**: Per M01 Obj 0 §3 + M02 Obj 4: v7.0 adoption may come before SuperLeague's own v1.0 ship; sequencing is engagement-team-decided. Recommended: **adopt v7.0 alongside v1.0 ship** so the engagement vault stabilizes once with both v1.0 deliverables and v7.0 governance simultaneously, avoiding a second migration cycle.
- **Pilot operators**: Stanley, Herb, Carly per `SuperLeague.aDNA/who/coordination/coord_2026_04_27_herb_carly_kickoff.md`. Migration steps run on whichever operator's machine the pilot cadence permits; idempotent across operators.
- **Janus persona**: Both faces of Janus continue to apply — inward face (toward Lattice Protocol) handles v7.0 adoption mechanics; outward face (toward Super League) preserves engagement contracts unchanged. v7.0 adoption is invisible to the partner-facing surface.

---

## §4 Suggested sequence + timing

| Step | Wait until | Action | Effort |
|---|---|---|---|
| Pre-flatten | M03 ships + pilot cadence permits | Read this memo + upgrade guide; coordinate window with engagement team. | 10 min |
| 1 | M03 announcement + non-blocking pilot window | Workspace flatten. | 5–15 min |
| 2 | M05 announcement | Publish-skill adoption. | 5 min |
| Verification | After Steps 1–2 | Run validation runbook. | 5 min |
| 3 (optional) | Operator-decided | Airlock adoption. | 30–60 min |
| 4 (optional) | Operator-decided | `node.aDNA/` bootstrap. | 10 min |
| 5 (optional) | n/a | No rename required. | n/a |

**Sequencing recommendation**: Hold Steps 1-2 until SuperLeague's v0.1 → v1.0 ship lands; bundle v7.0 adoption with v1.0 stabilization to minimize churn.

---

## §5 Acknowledgment + close-out trigger

`draft` → `ready` (engagement-team approval) → `acknowledged` (Janus reads + commits) → `in_progress` (Step 1 begins) → `completed` (M08b verifies).

For **engagement-partner** operators (operator class `engagement-partner` per ADR-009 + M02 Obj 5 §3): Janus persona reviews + co-signs; **also** notify Super League / Smarter With Science engagement leads when delivery is proposed (no embargo coordination required, but courtesy notification per engagement-vehicle norms).

---

## §6 Co-sign

### Rosetta — aDNA.aDNA (this vault)

Rosetta confirms (2026-05-09):

- v7.0 changes affecting SuperLeague.aDNA accurately captured in §3.
- Migration sequence respects engagement-pilot cadence — Step 1 timing operator-controlled.
- Engagement-vehicle (Smarter With Science LLC) commercial scope **unchanged** by v7.0.
- v0.1 → v1.0 sequencing recommendation flagged in §3 vault-specific notes.
- Naming-convention conformance already met.

**Signed**: Rosetta (`agent_stanley` acting in `aDNA.aDNA/` context), 2026-05-09T05:30:00Z.

### Janus — SuperLeague.aDNA (target vault)

Janus confirms (mirror artifact pending — engagement-team approval required before mirror lands):

- §3 actions match SuperLeague's v0.1 pilot state.
- §4 sequencing recommendation (bundle with v1.0) acknowledged.
- Engagement-vehicle scope distinction confirmed (technical only, not commercial).

**Signed**: Janus (pending — flips when engagement-team approval received and target vault session signs).

---

## §7 Airlock-pattern self-reference

Inherits 5-section airlock pattern from [[../../who/coordination/coord_2026_05_08_publish_rewrite.md|publish-rewrite ancestor]].

Cross-links: [[../../../III.aDNA/how/airlock/AIRLOCK.md|III canonical]] · [[../../../VideoForge.aDNA/how/airlock/AIRLOCK.md|VideoForge reference]] · [[../../who/coordination/coord_2026_05_08_publish_rewrite.md|publish-rewrite ancestor]].

1 of 17 multilateral instances; engagement-partner variant. Successor [[../../how/campaigns/campaign_adna_v3_ecosystem_compliance/campaign_adna_v3_ecosystem_compliance.md|`campaign_adna_v3_ecosystem_compliance`]] M05-EC adopts.

---

## §8 Standing Order discharges

| SO | Discharge |
|---|---|
| #2 / #8 | Memo IS the airlock pattern. |
| #6 | Persists permanently. |
| #7 | Developer reads §3 + §4; newcomer reads §1 + §2; partner-readable version describes engagement scope unchanged. |
| #9 | Governance-track only. |
| #10 | 15+ wikilinks. |

---

## §9 Status

**Draft.** Held pending engagement-team approval (Stanley + Herb + Carly + Smarter With Science LLC + Super League leads as needed). M08a closes this draft; delivery is operator-discretionary post-engagement-team review.
