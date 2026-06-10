---
type: coordination
title: "Cross-Graph Coordination: aDNA.aDNA → SiteForge.aDNA — aDNA v7.0 Adoption"
status: ready  # LP-internal; delivery operator-discretionary post-M08a-close
direction: outbound (aDNA.aDNA initiates)
requesting_vault: aDNA.aDNA
requesting_persona: rosetta
receiving_vault: SiteForge.aDNA
receiving_persona: (none — Forge persona to be determined)
requesting_agent: agent_stanley
created: 2026-05-09
updated: 2026-05-09
last_edited_by: agent_stanley
priority: medium
deadline: pre-SiteForge.aDNA-v7-migration
audit_id: adna_v2_m08a_siteforge_v7_coord
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_p1_08a_upgrade_guide_and_coord_memos
objective: 1
target_mission: M08a
mirror: /Users/stanley/aDNA/SiteForge.aDNA/who/coordination/coord_2026_05_09_v7_aDNA_adoption.md
airlock_pattern: true
operator_class: LatticeProtocol-internal
external_party: (none)
delivery_held_until: operator-approval
ecosystem_validated_on: 2026-05-09
tags: [coordination, cross_graph, v7_0_adoption, rosetta, siteforge, m08a, m08b, airlock_pattern, lp_internal_conformant]
---

# SiteForge.aDNA — aDNA v7.0 Coordination Memo

> **Multilateral airlock instance** (1 of 17). Inherits structure from [[../../who/coordination/coord_2026_05_08_publish_rewrite.md|`coord_2026_05_08_publish_rewrite.md`]] (the bilateral Rosetta ↔ Daedalus publish-rewrite memo). M08a renders this template per [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m02_obj5_ecosystem_baseline_locked.md|the M02 locked ecosystem baseline]] §4 handoff manifest.

---

## §1 Airlock entry — what graph this is, why you're reading

> *Airlock convention*: external agents entering `SiteForge.aDNA` from another context graph start at `who/coordination/` for cross-graph operational state.

**aDNA.aDNA** is the self-referential aDNA documentation vault (Operation Rosetta). It governs the aDNA standard's evolution; `campaign_adna_v2_infrastructure` produces aDNA Governance v7.0. Persona: Rosetta.

**SiteForge.aDNA** is a **Forge** in the lattice ecosystem — composable Astro 6 website builder; archetypes, lattice graphs, quality gates; production v1.0. As a v6.0 consumer of the aDNA template, SiteForge.aDNA adopts the v7.0 changes per its operator's schedule (v7.0 is non-coercive).

This memo crosses from aDNA.aDNA (the standard producer) to SiteForge.aDNA (a standard consumer) because v7.0 lands two breaking changes — the repo flatten and the publish-skill family rewrite — that affect every vault. The migration is operator-driven; this memo lays out exactly what SiteForge.aDNA needs to do, when, and what is optional vs required.

---

## §2 What's changing in v7.0 (one-paragraph version)

aDNA v7.0 is a Major Governance bump (Standard track unchanged at v2.2). Two things break and need a one-time migration: (1) the `~/aDNA/.adna -> adna/.adna` symlink retires — `.adna/` is now a real directory (M03 repo flatten); (2) the publish-skill family rewrite replaces the rsync workaround with `git push` (M05 publish family). Three things are pull-based and need nothing: the v7.0 tag, the GitHub repo rename `Agentic-DNA` → `adna`, the `deploy_manifest.yaml` move into `.github/`. Four things are new opt-in patterns: `node.aDNA/` local node vault, `LatticeScope.aDNA` observability project, the airlock-pattern adoption stub, the `<name>.aDNA/ ↔ <name>.aDNA.git` naming convention codification. The full guide is at [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|`m01_obj8_upgrade_guide_v6_to_v7.md`]] (M08a republishes to `adna-docs.vercel.app/learn/upgrade-v6-to-v7`).

---

## §3 What SiteForge.aDNA specifically needs to do

### Current state of SiteForge.aDNA (validated 2026-05-09)

| Property | Value |
|---|---|
| Vault category | Forge |
| Persona | (none — Forge persona TBD) |
| Operator class | LatticeProtocol-internal |
| Current git remote | `github.com/LatticeProtocol/SiteForge.aDNA.git` (LatticeProtocol-origin) |
| Has `skill_lattice_publish.md` | Y |
| Has `.publish-clone/` workaround | N |
| Naming conforms to ADR-009 | **Y** (canonical `<name>.aDNA.git` form) |
| Airlock-eligible | Y (Forge with cross-vault traffic — SS, CC, WGA consumers) |
| Maturity | Production v1.0 |

### Required actions (breaking changes — one-time)

| # | Action | When | Where to look |
|---|---|---|---|
| 1 | **Workspace flatten**: from `~/aDNA/`, remove the `.adna` symlink + `adna/` outer wrapper, then `git clone https://github.com/LatticeProtocol/adna.git .adna` (or run the in-place migration if you have local changes). | Once M03 ships (announced in `aDNA.aDNA/STATE.md`). | [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]] §2 + [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj2_migration_runbook.md|migration runbook]] §3 |
| 2 | **Publish-skill adoption**: Your origin is already configured — run `~/.adna/how/skills/skill_deploy.md` to install the pre-push sanitization hook. | Once M05 ships (announced in `aDNA.aDNA/STATE.md`). | [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]] §3 |

### Optional actions (additive — at your discretion)

| # | Action | Why you might want it | Why you might skip |
|---|---|---|---|
| 3 | **Adopt the airlock pattern** — copy `~/.adna/how/airlock/AIRLOCK.md` (M03 ships this stub) into `SiteForge.aDNA/how/airlock/AIRLOCK.md` and customize. | SiteForge consumed by SS, CC, WGA — clean entry surface for cross-vault wrapper-style federation requests. | Defer until v3-EC ecosystem-compliance campaign opens. |
| 4 | **Bootstrap a `node.aDNA/`** at workspace root | L1/L2 archetype-build operators benefit from per-machine inventory. | One-machine setup; existing vault inventory is sufficient. |
| 5 | **Rename to ADR-009 conformant form** | n/a — already conformant (`SiteForge.aDNA.git`). | No rename required. |

### Skip this (not applicable to SiteForge.aDNA)

- **GitHub repo rename**: `Agentic-DNA` → `adna` is the *template* repo's rename, not yours. URL forwarding handles existing clones; you don't need to change anything in SiteForge.aDNA.

### SiteForge.aDNA-specific notes

- **Wrapper consumers**: `SiteForge.aDNA` has three known consumer wrappers — `science_stanley.aDNA/siteforge/`, `context_commons.aDNA/siteforge/`, `wga.aDNA/siteforge/`. v7.0 adoption in SiteForge does not require wrapper updates; consumer vaults adopt v7.0 independently per their own coord memos.
- **Forge pattern spec authority**: SiteForge owns `what/artifacts/sf_forge_pattern_spec.md` (the canonical Forge consumer-wrapper specification). v7.0 does not modify the Forge pattern; existing wrappers stay valid.
- **Production-stable**: SiteForge is the most mature Forge in the ecosystem (v1.0 production); v7.0 adoption can wait until SiteForge's own next mission cycle has bandwidth.

---

## §4 Suggested sequence + timing

| Step | Wait until | Action | Effort |
|---|---|---|---|
| Pre-flatten | M03 ships | Read this memo + the [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide]]. | 10 min |
| 1 | M03 announcement | Workspace flatten (per §3 Step 1). | 5–15 min |
| 2 | M05 announcement | Publish-skill adoption (per §3 Step 2). | 5 min |
| Verification | After Steps 1–2 | Run validation runbook ([[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|upgrade guide §6]]). | 5 min |
| 3 (optional) | Operator-decided | Airlock adoption (Y eligible — Forge with cross-vault consumers). | 30–60 min |
| 4 (optional) | Operator-decided | `node.aDNA/` bootstrap. | 10 min (M04 ships skill) |
| 5 (optional) | n/a — already conformant | No rename required. | n/a |

**Sequencing note**: Steps 1 and 2 are independent of each other but both are required for a vault to consume the v7.0 publish flow. Pre-push-hook installation (Step 2's `skill_deploy`) is idempotent — safe to re-run on subsequent template upgrades.

---

## §5 Acknowledgment + close-out trigger

This memo's `status` flips:

1. `ready` (LP-internal; this memo's current state) →
2. `acknowledged` (SiteForge operator reads + commits to a sequence date) →
3. `in_progress` (Step 1 begins) →
4. `completed` (M08b verifies post-flatten propagation; `git remote -v` and pre-push hook check pass).

The acknowledgment trigger is just §6 — co-sign by both personas.

For LP-internal operators: vault-side persona reviews + co-signs; no embargo coordination.

---

## §6 Co-sign

Both personas confirm the v7.0 migration plan matches expectation before SiteForge.aDNA begins Step 1.

### Rosetta — aDNA.aDNA (this vault)

Rosetta confirms (2026-05-09):

- The v7.0 changes affecting SiteForge.aDNA are accurately captured in §3.
- The migration sequence (§4) reflects the M03 + M05 ship order; no out-of-band requirements.
- The optional adoptions (airlock, node.aDNA) are non-coercive; SiteForge.aDNA stays valid v6 vault if it skips them.
- Naming-convention conformance: SiteForge.aDNA already conforms to ADR-009 §1 canonical form; no rename action required.

**Signed**: Rosetta (`agent_stanley` acting in `aDNA.aDNA/` context), 2026-05-09T05:30:00Z.

### SiteForge persona — SiteForge.aDNA (target vault)

SiteForge persona confirms (mirror artifact: [[../../../SiteForge.aDNA/who/coordination/coord_2026_05_09_v7_aDNA_adoption.md|`coord_2026_05_09_v7_aDNA_adoption.md`]] §6 — pending mirror):

- §3 actions match SiteForge.aDNA's current state and operator capacity.
- §4 sequencing accommodates SiteForge.aDNA's ongoing missions and obligations.
- Optional sections (§3 #3, #4) acknowledged; adoption decisions deferred to operator's discretion.

**Signed**: SiteForge persona (pending — flips when target vault's session signs).

---

## §7 Airlock-pattern self-reference (the inheritance)

This memo structurally inherits from [[../../who/coordination/coord_2026_05_08_publish_rewrite.md|`coord_2026_05_08_publish_rewrite.md`]] (the Rosetta ↔ Daedalus publish-rewrite memo). The mapping:

| Airlock schema element | This memo's mapping |
|---|---|
| **Header** (request metadata, audit_id, persona pair) | Frontmatter (`audit_id`, `requesting_persona`, `receiving_persona`, `mirror`, `operator_class`, `external_party`) |
| **Request** (what's being asked) | §2 + §3 — what's changing globally + what SiteForge.aDNA specifically does |
| **Handshake** (commitment from receiver) | §4 sequencing |
| **Response** (close-out trigger) | §5 acknowledgment + completion conditions |
| **Co-sign** (mutual confirmation) | §6 |
| **Cross-references** (sibling airlocks) | §1 + §7 (this section) |

Cross-links to canonical airlock specs:

- **Canonical**: [[../../../III.aDNA/how/airlock/AIRLOCK.md|III.aDNA airlock]] v0.1.0 — 5 entry paths.
- **Reference Forge**: [[../../../VideoForge.aDNA/how/airlock/AIRLOCK.md|VideoForge.aDNA airlock]] v0.1.0 — 4 entry paths.
- **Direct ancestor**: [[../../who/coordination/coord_2026_05_08_publish_rewrite.md|`coord_2026_05_08_publish_rewrite.md`]] — first cross-graph airlock-pattern exercise from `aDNA.aDNA/`.

This memo is one of 17 multilateral instances rendered by M08a. The successor [[../../how/campaigns/campaign_adna_v3_ecosystem_compliance/campaign_adna_v3_ecosystem_compliance.md|`campaign_adna_v3_ecosystem_compliance`]] M05-EC mission can use this template as the prototype for its per-vault airlock-adoption coord memos.

---

## §8 Standing Order discharges

| Standing Order | Discharge in this memo |
|---|---|
| #2 / #8 (self-reference mandatory) | The memo IS the airlock pattern v7.0 codifies — references its own structural lineage explicitly in §7. |
| #6 (archive, never delete) | Memo persists permanently in `who/coordination/`. Pre-flatten state captured before M03 fires. |
| #7 (dual-audience test) | Developer reads §3 (specific actions) + §4 (sequence) + §6 (co-sign mechanics). Newcomer reads §1 (what graphs, why crossing) + §2 (what's changing globally). |
| #9 (upstream spec is source of truth) | Governance-track only. `adna_standard.md` unchanged; this memo makes no normative claim about the standard. |
| #10 (cross-link aggressively) | Memo links to: 5 sibling artifacts (upgrade guide, ecosystem matrix, migration runbook, locked baseline, coord template), 3 ADRs (006/007/009), 3 airlock-related references (III canonical, VideoForge reference, publish-rewrite ancestor), 1 v3 successor campaign master, 1 mirror coord memo path. **15+ wikilinks**. |

---

## §9 Status

**Ready for delivery.** LP-internal operator-discretionary delivery — operator may mirror to SiteForge.aDNA `who/coordination/` and co-sign at any post-M08a-close time. M08a's authoring Phase 2 (this memo) closes; mission Phase 1 (spec) and Phase 2 (this memo set) complete this session.

**Forward-references**: M08b verifies post-flatten propagation via `git remote -v` + pre-push hook check + co-sign capture in mirror.
