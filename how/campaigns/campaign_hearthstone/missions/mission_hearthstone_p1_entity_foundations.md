---
plan_id: mission_hearthstone_p1_entity_foundations
type: plan
title: "P1 — Entity-type foundations: genericize inventory + identity base scaffolds + templates; promote ontology 14→16 (dev graph)"
owner: stanley
status: in_progress
campaign_id: campaign_hearthstone
campaign_phase: 1
campaign_mission_number: 1
mission_class: implementation
created: 2026-06-18
updated: 2026-06-18
last_edited_by: agent_rosetta
token_budget_estimated: "~70 kT content-load (50–80 class — governance authoring: 4 new files genericized from verified Home.aDNA refs + multi-doc ontology consistency sweep)"
tags: [plan, campaign, hearthstone, p1, ontology, inventory, identity, base_entity_types, operation_adna_track_b]
---

# Mission: P1 — Entity-type foundations (inventory + identity)

**Campaign**: [[how/campaigns/campaign_hearthstone/campaign_hearthstone|campaign_hearthstone]] (Track B under [[how/campaigns/campaign_operation_adna/campaign_operation_adna|campaign_operation_adna]])
**Phase**: 1 — Entity-type foundations
**Mission**: 1 of ~7

> **The next gated arc after P0.** P0 ratified [[adr_035_inventory_identity_base_entity_types|ADR-035]] (`inventory`+`identity` → base entity types 14→16, standard **v2.3**, defer `network_node_mirror`/`permission_edge`). P1 authors the genericized foundations **in the dev graph only** — `.adna/` materialization + the public version bump are gated to **P5** (`skill_template_release`). Selected by the operator over WEBSITE P2 at the Operation aDNA next-arc gate (2026-06-18).
>
> **Update (2026-06-18) — all four objectives complete + verified.** Completion Summary + AAR below. Status held **`in_progress`** pending the operator's P1 phase-exit approval (Standing Order #1 — phase gates are human gates); flip to `completed` + open P2 on that nod.

## Goal

Convert the ratified ADR-035 decision into reusable, vault-agnostic foundations: genericize the two D9+D7-verified `Home.aDNA` reference types (`inventory` WHAT, `identity` WHO) into base-type scaffold `AGENTS.md` + entry templates, and reflect the 14→16 promotion across `aDNA.aDNA`'s own ontology docs — so `skill_template_release` has clean dev sources to ship to `.adna/` + the public image at P5, and a fresh node-bootstrap (Hearthstone P2+) inherits canonical `inventory`/`identity` from day one.

## Exit Gate

Copied from the campaign master (Phase 1 exit gate):
- [x] Both entity types **declared canonical** — un-namespaced (`inventory`/`identity`, not namespaced extensions), `merge: invariant`. *(ontology.md rows 15/16 + all scaffolds/templates.)*
- [x] **D9 companion** pattern (paired `.yaml`) and **D7 federation** pattern (network-facing records carry a `federation` block) verified — represented faithfully in the genericized scaffolds + templates against the `Home.aDNA` reference.
- [x] ADR ratified — **already true** (ADR-035 `accepted` 2026-06-18 at P0).
- [ ] **Operator approves the P1 exit (human gate — never auto-advance to P2).** ⏳ pending.

## Guardrails (hard constraints)

- **No `.adna/` writes** (Standing Rule 1) — author in `aDNA.aDNA/` (dev graph); release to `.adna/` is P5 only.
- **No `site/` writes** — `site/src/data/standard.ts` stays `ENTITY_TYPE_COUNT=14` / `STANDARD_VERSION='v2.2'`; all site "14"/"v2.2" surfaces are WEBSITE-campaign-owned, sequenced at P5/keystone. Verified the live site does not read `what/ontology.md`.
- **No `what/docs/adna_standard.md` header/body bump** — the v2.3 spec bump is a P5 release operation.
- **No deploy, no `sync:vaults`, honor pt19.**
- **Surgical count sweep** — present-tense normative statements only; never rewrite historical records, `adr_035` (its Context quotes the pre-change "14" by design), or dated session/AAR files.

## Objectives

### 1. Genericize the `inventory` scaffold
- **Status**: planned
- **Description**: Author `aDNA.aDNA/what/inventory/AGENTS.md` — vault-agnostic from `Home.aDNA/what/inventory/AGENTS.md`. Sections: Purpose (the `inventory` base type = point-in-time *what is installed/configured*) · Directory Structure (generic subtypes `vaults`/`system`/`memberships` + domain extensions) · Entry Format · Companion discipline (D9) · Federation (D7, default opt-out) · Refresh/validation discipline · Load/Skip · Cross-references. Drop the stale "proposed for v8.0+" framing (now canonical); cite ADR-035 + standard §3.1; state un-namespaced + `merge: invariant`; name `Home.aDNA/what/inventory/` as the canonical reference implementation.
- **Files**: `aDNA.aDNA/what/inventory/AGENTS.md` (new)
- **Depends on**: none

### 2. Genericize the `identity` scaffold
- **Status**: planned
- **Description**: Author `aDNA.aDNA/who/identity/AGENTS.md` — same skeleton as Obj 1 plus the two differentiators: **Identity-Drift Discipline** (hostname/operator/persistent-UUID/peer-id change = high-severity flag) and the **Privacy model** (persist hostname/operator/class; never persist CPU serial / MAC / machine UUID / signing-key *values*). Subtypes `node`/`<network>`/`<platform_deployment>`/`consumer`.
- **Files**: `aDNA.aDNA/who/identity/AGENTS.md` (new)
- **Depends on**: none

### 3. Author the two entry templates
- **Status**: planned
- **Description**: `template_inventory_entry.md` + `template_identity_entry.md` in house style (`{brace}` placeholders + `YYYY-MM-DD` + `agent_{username}`, matching `template_context.md`). Each teaches the **D9 companion pattern inline** — an `.md` skeleton plus a fenced `.yaml` companion skeleton — and the **D7 `federation` block** (default `shareable: false`) for network-facing records. `template_identity_entry.md` adds drift-policy + not-persisted (privacy) sections.
- **Files**: `aDNA.aDNA/how/templates/template_inventory_entry.md` + `template_identity_entry.md` (new); register in `how/templates/AGENTS.md` index.
- **Depends on**: 1, 2

### 4. Promote the base ontology 14 → 16 (dev-graph docs)
- **Status**: planned
- **Description**: `what/ontology.md` — add `inventory` (row 15, WHAT, `what/inventory/`, invariant) + `identity` (row 16, WHO, `who/identity/`, invariant) to the base Summary Table; renumber the Rosetta extension table (15–24 → 17–26) + Network extension table (25–26 → 27–28); `entity_count: 24 → 26`; `base_version v3.0 → v3.1` (additive minor, tied to ADR-035/standard v2.3); update all present-tense "14"/"v3.0 (14 …)" counts + Triad Diagram 1. Then `CLAUDE.md` §"Base Ontology (14 Entity Types)" table → 16 (WHO 3→4, WHAT 4→5); `MANIFEST.md` §"Base Ontology (14 types)" prose → 16; surgical sweep of `what/concepts/concept_ontology.md` + `what/context/adna_core/context_adna_core_entity_definitions.md` + any other normative `rg` hits (excluding `site/`, `.adna/`, `sessions/history/`, `adna_standard.md`, `adr_035`).
- **Files**: `what/ontology.md`, `CLAUDE.md`, `MANIFEST.md`, `what/concepts/concept_ontology.md`, `what/context/adna_core/context_adna_core_entity_definitions.md` (+ sweep hits)
- **Depends on**: 1, 2 (placements must exist/be declared before the ontology cites them)

## Campaign Context

### Previous Mission Outputs
- P0 (`mission_hearthstone_p0_charter`, completed 2026-06-18): ratified ADR-035 (the *what to declare*); pinned the release source-map (the *where to author / what ships at P5*, rows 1–5 = P1's deliverables); ratified the 6 feeding ideas (2 entity-type ideas point at ADR-035).

### Next Mission Inputs
- P2 (`template_home_claude.md` + Step-0 router "offer to bootstrap Home") needs the canonical `inventory`/`identity` scaffolds + templates this mission produces (a base Home's WHAT/WHO substrate). P5 (`skill_template_release`) consumes these dev sources per the source-map.

## Notes

- **Self-reference (Standing Order #8):** by adopting `what/inventory/` + `who/identity/`, `aDNA.aDNA` demonstrates the very base types it is adding — the scaffolds say so.
- **Ontology renumber wrinkle:** `aDNA.aDNA/what/ontology.md` numbers extensions continuously after the base rows (Rosetta 15–24, Network 25–26), so promoting two base types forces an extension renumber. The abstract base ontology (and `.adna/CLAUDE.md`, which has no Rosetta rows) takes them cleanly at rows 15/16.
- **Reference fidelity:** genericize, don't transplant — `Home.aDNA` specifics (Hestia, 41-vault list, `skill_node_*`) become generic patterns with `Home.aDNA` cited as the canonical reference implementation.

## Completion Summary

*Deliverables complete + verified 2026-06-18; flip `status: completed` on operator phase-exit approval.*

### Deliverables
- **2 genericized base-type scaffold `AGENTS.md`**: `what/inventory/AGENTS.md` + `who/identity/AGENTS.md` — un-namespaced, `merge: invariant`, D9 companion + D7 federation patterns; `identity` adds drift-discipline + privacy; cite ADR-035 + standard §3.1; name `Home.aDNA/{what/inventory,who/identity}` as the canonical reference implementation.
- **2 entry templates**: `how/templates/template_inventory_entry.md` + `template_identity_entry.md` — `.md` + paired `.yaml` companion inline (D9); `federation` block default `shareable:false` (D7); `identity` adds drift-policy + not-persisted (privacy) sections. Registered in `how/templates/AGENTS.md` (auto-triggered 10→12).
- **Base ontology 14→16 across the dev graph**: canonical `what/ontology.md` (rows 15 `inventory` / 16 `identity`; extensions renumbered 17–28; `entity_count 24→26`; `base_version v3.0→v3.1`; Triad Diagram 1; §2 semver aligned to §15.4 additive=minor; Network-deferral note per ADR-035 D3) + governance (`CLAUDE.md`, `MANIFEST.md`, root + `what` `AGENTS.md`, `README.md`) + ontology-teaching (`concept_ontology`, `entity_definitions` + its index) + ~10 secondary teaching files (glossary/pattern/comparison/use_case/docs).
- **Bookkeeping**: this mission spec; session `…_hearthstone_p1_entity_foundations`; STATE.md Current-Phase entry; campaign-master P1 row + exit-gate note.

### Descoped
- **No `.adna/` writes** (gated to P5 `skill_template_release`); **no `site/` writes** (count/version surfaces stay 14/v2.2 — WEBSITE-owned, P5/keystone); **no `adna_standard.md` bump** (P5).
- Count-sweep **deliberate leaves**: historical records (sessions/campaigns/AARs/measurement JSON), `adr_017` decision text, other-vault operational examples (`ontology_workshop`), and hypothetical **worked-example arithmetic** (ontology.md convergence downstream rows; ontology_unification.md merge worked example).

### Key Findings
- Two non-obvious wrinkles, both resolved consistently: (1) `ontology.md` numbers extensions continuously after the base rows, so promoting two base types **forced an extension renumber** (now contiguous 1–28); (2) `ontology_unification.md` carried a stale `additions = major` semver rule that contradicted ADR-035's additive/backward-compatible framing — **aligned to §15.4 (additive = minor)**, preserving v3.0↔v3.1 merge-compatibility.
- The ratified-ADR-vs-public-surface split is clean because the **live site reads its count from `site/src/data/standard.ts`, not the vault's `ontology.md`** — which is exactly why the source-map could place `ontology.md` in P1 while gating the public count to P5.

### Scope Changes
- Sweep breadth expanded beyond the source-map's named set (`ontology.md` + `CLAUDE.md` table + `MANIFEST.md`) to the **full standing dev-graph teaching corpus** for internal consistency (Standing Order #9). Secondary single-token count flips did not re-stamp frontmatter (the git commit is the provenance record); core + substantive-edit files were re-stamped.

## AAR

*5-line AAR (`template_aar_lightweight.md`).*

- **Worked**: Genericizing from the already-D9+D7-verified `Home.aDNA` reference (rather than designing fresh) made the scaffolds + templates fast and faithful; the P0 source-map's dev→`.adna/` mapping made "author here now, ship at P5" unambiguous.
- **Didn't**: the count sweep was much larger than the source-map's three named files — the continuous extension numbering forced a renumber, and a stale semver rule surfaced mid-sweep; sizing the blast radius up front would have set expectations better.
- **Finding**: the dev-graph (16) vs public-surface (14/v2.2-until-P5) split holds cleanly *because* the site's count is single-sourced in `standard.ts`, decoupled from the vault's ontology docs.
- **Change**: for any count/version promotion, run the `rg` blast-radius sweep FIRST and declare the "leave historical + worked-example arithmetic" rule before editing.
- **Follow-up**: **P2** (`template_home_claude.md` + Step-0 router) on operator gate approval; **P5** `skill_template_release` ships `.adna/` + bumps `site/src/data/standard.ts` (`16`/`v2.3`) + `adna_standard.md` under the v8.0 milestone; the two entity-type idea files stay `accepted` (public landing = P5).
