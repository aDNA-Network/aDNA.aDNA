---
type: artifact
artifact_id: champollion_adoption_story_record
title: "M5.3 — Exchange/Lighthouse adoption story walked honest (pull→build→memorialize): tutorial + use_case walk log + shipped-vs-horizon boundary table"
campaign_id: campaign_champollion
mission_id: mission_champollion_m5_3_exchange_lighthouse_story
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
status: active
tags: [artifact, champollion, p5, m5_3, exchange, lighthouse, adoption_story, walk_log, boundary_table]
---

# M5.3 — Exchange/Lighthouse adoption story record

> Mode B build: opus-tier BUILDER authored the tutorial + use_case and walked the tutorial's executable steps under fable orchestration. The walk is **honest** — every step is labeled `PASS` (ran it, evidence recorded) or `TAUGHT-AS-DESIGN` (boundary named, nothing narrated as running when it doesn't). See [[../missions/mission_champollion_m5_3_exchange_lighthouse_story|M5.3 brief]]; tone precedent [[content_currency_sweep|M4.4 product-story pass]] and honesty discipline [[newcomer_stress_test|M4.1]] / [[learning_path_walk|M4.3]].

---

## Section 1 — Provenance + build lineage

**Build lineage.** opus-tier BUILDER, dispatched Mode B for campaign_champollion P5/M5.3 (Ring 2 — compressible). Corpus is **in-vault**; boundary facts about Exchange.aDNA / Lighthouse.aDNA / LatticeProtocol are **pre-pinned by the orchestrator** (cited, not re-derived — budget discipline per the P5 foreign-corpus overrun lesson).

**Deliverables written (paths, vault-relative):**

| File | Type | Role |
|------|------|------|
| `what/tutorials/tutorial_exchange_adoption_path.md` | tutorial (`level: advanced`) | The runnable pull→build→memorialize arc, per-step PASS/TAUGHT-AS-DESIGN labeled |
| `what/use_cases/use_case_exchange_lighthouse_adoption.md` | use_case (persona: Priya Nair) | Same arc at story scale via the Lighthouse path; zero forward-promises |
| `how/campaigns/campaign_champollion/artifacts/adoption_story_record.md` | artifact | This walk log |

**Environment observations (evidence the mutate/run steps were real, not from memory):**

| Observation | Evidence | Consequence for labeling |
|-------------|----------|--------------------------|
| Validator runs offline | `python3.13` (3.13.5) import of `lattice_validate` succeeds | validate + readiness steps = `PASS` |
| `latlab` CLI non-operational here | `/opt/anaconda3/bin/latlab` → `ModuleNotFoundError: No module named 'cli'` | pull/publish/compose CLI = `TAUGHT-AS-DESIGN` |
| No registry store on node | no `~/.adna/registry` / `~/.lattice/registry` | nothing to `pull`; matches G3-D6.5 OoB defer (never published from this vault) |

> The `latlab` CLI brokenness is an **environment** observation recorded here as supporting evidence; the newcomer-facing tutorial does **not** editorialize about it — it labels pull/compose `TAUGHT-AS-DESIGN` on the durable grounds (nothing published from this vault + cross-node = horizon), which hold regardless of local CLI health.

---

## Section 2 — Per-step walk log (the honest walk)

Three beats. Each step: label · evidence line.

### Beat 1 — Pull

| Step | Label | Evidence |
|------|-------|----------|
| 1.1 Pull from registry (`latlab lattice pull`) | **TAUGHT-AS-DESIGN** | Documented surface (CLAUDE.md §Registry Awareness, `skill_lattice_publish`); nothing published from this vault (OoB-deferred); cross-node = horizon (membership substrate still building). CLI also non-operational locally. |
| 1.2 Start from a shipped example (runnable stand-in) | **PASS** | `cp what/lattices/examples/knowledge_base.lattice.yaml …` — real 5-node `context_graph` file; 19 example lattices confirmed present (`ls *.lattice.yaml` = 19). |

### Beat 2 — Build-to-spec

| Step | Label | Evidence |
|------|-------|----------|
| 2.1 Validate the lattice | **PASS** | `validate_lattice_file` → `valid=True errors=0 warnings=2` (real output in §3). **This is the mission's executable outcome.** |
| 2.2 Walk the FAIR block | **PASS** | Quoted verbatim from `knowledge_base.lattice.yaml` `fair:` (MIT · 5 keywords · provenance string). |
| 2.3 Check publish-readiness | **PASS** | `check_federation_readiness` → `ready=True errors=0`; cites `skill_lattice_publish` as authoritative (F-CHM-214, §6). |
| 2.4 Compose (external vs inline) | **TAUGHT-AS-DESIGN** | `latlab lattice compose` is same CLI surface (non-operational here; no registry to compose against). Composition *rules* fully specified in `concept_lattice_composition` — design-taught; file-level mechanics deferred to `tutorial_build_a_lattice` / `tutorial_federate_a_vault`. |

### Beat 3 — Memorialize

| Step | Label | Evidence |
|------|-------|----------|
| 3.1 Inspect real extraction provenance | **PASS** | `docking_assessment.lattice.yaml` `federation:` quoted verbatim — `parent_lattice: protein_binder_design` + `extracted_nodes: [structure_prediction, interface_analysis, ranking]`, `version_policy: locked`. Validator enforces the parent/extracted pairing. |
| 3.2 Readiness verdict as memorial | **PASS** | The `ready=True` line from 2.1/2.3 is a capturable machine-checked memorial. |
| 3.3 Memorialize to Protocol ledger (DLT) | **TAUGHT-AS-DESIGN** | Draft `lattice-ledger` spec (LP layer); Protocol repo pre-public-launch. Shipped stand-in = FAIR `provenance` + checked `federation` block. |

**Per-beat tally:** Beat 1 = 1 PASS / 1 TAUGHT · Beat 2 = 3 PASS / 1 TAUGHT · Beat 3 = 2 PASS / 1 TAUGHT.
**Total: 6 PASS / 3 TAUGHT-AS-DESIGN.** Zero steps narrated-as-working that do not run. The executable spine (pull-a-real-artifact → validate → readiness → provenance inspection) is real end-to-end; the network layer (cross-node pull, Lighthouse deploy, DLT ledger) is design-taught and named.

---

## Section 3 — The real validate run (verbatim)

Command (from `what/lattices/tools/`, python 3.13.5, 2026-07-02):

```
validate_lattice_file: valid=True  errors=0  warnings=2
  WARN: Node 'document_corpus': dataset node without 'ref' field
  WARN: Node 'query_input': dataset node without 'ref' field
check_federation_readiness: ready=True  errors=0
```

The two warnings are non-fatal (unbound dataset placeholders) — reproduced in the tutorial as the teaching moment that the validator separates advisory from fatal.

---

## Section 4 — Shipped-vs-horizon boundary table

Pinned to the orchestrator-verified boundary facts (2026-07-02). This table is mirrored into the tutorial.

| Capability | Status | Real today | Horizon |
|------------|--------|-----------|---------|
| Validate a lattice (`lattice_validate.py`) | **SHIPPED · PASS** | Offline, in-vault; ran it | — |
| Publish-readiness check | **SHIPPED · PASS** | Offline; `ready=True` | — |
| FAIR + federation provenance blocks | **SHIPPED · PASS** | In every federation-ready example; validator-enforced | — |
| Registry composition *within a node* | **SHIPPED (Exchange tier-0 / Agora I)** | Local-first `MarketplaceRegistry`; not exercised from this vault | — |
| `latlab pull/publish/compose` from *this* vault | **HORIZON · TAUGHT-AS-DESIGN** | Documented surface; nothing published (OoB-deferred) | First publish pending operator ratification |
| Cross-node Exchange | **HORIZON · TAUGHT-AS-DESIGN** | — | Opt-in membership substrate, still building (Exchange `status: hardening_phase2`, Agora-II at gate) |
| Adopt via **Lighthouse** (node scale) | **HORIZON · TAUGHT-AS-DESIGN** | P0 closed 2026-07-01; composition manifest v1 shipped (7/7 vs HQ floor; profiles core/collab/inference/ops) | Deploys gate on **Git.aDNA P7 + integration ADR — P7 not yet chartered** |
| Protocol **ledger** (DLT provenance) | **HORIZON · TAUGHT-AS-DESIGN** | FAIR `provenance` + checked `federation` = stand-in | Draft `lattice-ledger` spec; LP repo pre-public-launch (Carnot CP1) |

Pinned status lines cited (not re-derived): Exchange.aDNA `status: hardening_phase2` · Lighthouse.aDNA `status: p0_closed` · LP teaching pin `8cb6e1e`.

---

## Section 5 — Cross-link census (SO-10)

All wikilink targets verified to resolve to real files (0 broken).

| File | Wikilinks (total) | Unique targets | SO-10 (≥2)? |
|------|-------------------|----------------|-------------|
| `tutorial_exchange_adoption_path.md` | 19 | 8 (skill_lattice_publish, concept_context_commons, concept_fair_metadata, concept_lattice_composition, tutorial_build_a_lattice, tutorial_federate_a_vault, tutorial_navigate_a_vault, use_case_exchange_lighthouse_adoption) | **PASS** |
| `use_case_exchange_lighthouse_adoption.md` | 7 | 6 (skill_lattice_publish, concept_context_commons, concept_fair_metadata, concept_lattice_composition, tutorial_exchange_adoption_path, tutorial_federate_a_vault) | **PASS** |

The two new files also cross-link **each other** (tutorial ⇄ use_case), so the pair is a connected sub-web, not two islands. Tutorial additionally carries one relative markdown link to `use_case_educator.md` (the tone precedent), not counted above.

**Prerequisite wiring (ordering intact):** tutorial `prerequisites: [concept_lattice_composition, concept_fair_metadata, tutorial_build_a_lattice, tutorial_federate_a_vault]` — slots *after* the two existing advanced lattice tutorials, does not disturb the designated-first beginner tutorial (`tutorial_navigate_a_vault`, which the new tutorial links as the newcomer entry point).

---

## Section 6 — F-CHM-214 handling

The vault's two "publish-readiness checks" enumerations disagree (CLAUDE.md §Registry Awareness lists `version_policy` + `valid lattice_type`; `concept_lattice_composition` lists `schema valid` + `references resolve` instead). Per dispatch, the tutorial **does not mint a third list** — it cites [[../../../how/skills/skill_lattice_publish|skill_lattice_publish]] as the single authoritative recipe, references "the publish-readiness checks" generically, and names the harmonization as tracked finding **F-CHM-214**. A third internal source (the code's `check_federation_readiness`, which cites `lattice_federation.md §4.1`) was observed but **not** surfaced to the newcomer — noted here for the harmonization owner: any F-CHM-214 fix should reconcile all three (CLAUDE.md · concept_lattice_composition · the code docstring) against `skill_lattice_publish`.

---

## Section 7 — Site-mirror decision + out-of-scope manifest

**Site-mirror decision: SKIPPED (→ M6.1 site-currency rider).** Investigated, not a straight add. The site (`site/`) does **not** glob the vault's `what/tutorials/`; it renders its own content collections (`docs`/`guides`/`reference`, `glob` over `./src/content/*`) requiring `.mdx` files with the site's `seoSchema` + a `section` frontmatter field, plus wikilink→site-route conversion. That is genuine site machinery, not a mirror-add — exactly the case the M5.3 brief §4 routes to the M6.1 site-currency rider. Vault-side tutorial is canonical; site mirror deferred. (`npx astro build` therefore not required — site untouched.)

**Out-of-scope manifest:**

| Item | Disposition |
|------|-------------|
| Site mirror of the tutorial (learn/tutorials collection page + `section` frontmatter + MDX + wikilink→route) | → **M6.1 site-currency rider** (not a straight add) |
| First registry publish from this vault (`latlab lattice publish`) | **FORBIDDEN** here (G3-D6.5 OoB defer; outward-facing) — remains post-launch OoB row |
| F-CHM-214 three-way readiness-list harmonization | Tracked finding; owner reconciles at a docs-currency pass (not this mission) |
| `latlab` CLI non-operational locally (`ModuleNotFoundError`) | Environment note only; not a content defect, not fixed here |
| M5.1 joint-memo §3 pointer back-fill | Orchestrator's at review (per dispatch — builder did not touch it) |

---

## Section 8 — Acceptance check

- [x] Tutorial + use_case exist; dual-audience (plain-language open → why → technical → see-it-in-action self-reference → related); SO-8 self-reference (both point at `what/lattices/` + "the vault is a context_graph"); SO-10 (both ≥2 wikilinks, all resolve).
- [x] Executable steps walked honest — per-step PASS/TAUGHT-AS-DESIGN log above; 6 PASS / 3 TAUGHT; zero false-runnable.
- [x] Every Exchange/Lighthouse/LP claim cite-at-pin against the pre-pinned facts; zero roadmap forward-promises (use_case explicitly gates Lighthouse deploy on Git.aDNA P7).
- [x] Site untouched → no `astro build` needed; `.adna/` untouched; NAMES-ONLY.
- [ ] `adna_validate.py .` + `--governance` — run at mission finish (§ below in report).
