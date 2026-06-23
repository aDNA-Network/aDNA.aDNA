---
type: spec
kind: ecosystem_spec
name: framework_ecosystem
created: 2026-05-20
updated: 2026-06-10
version: "0.1"
status: active
last_edited_by: agent_stanley
tags: [spec, ecosystem, framework, aDNA_pattern]
extraction_source: ~/aDNA/CLAUDE.md lines 192-202 (extracted at compliance campaign M01)
co_signed_adr: aDNA.aDNA/what/decisions/adr_012_ecosystem_spec_extraction.md
---

# Framework Ecosystem

Authoritative reference for the **Framework.aDNA** aDNA pattern category. Workspace router (`~/aDNA/CLAUDE.md`) carries only a pointer to this spec.

## Definition

**Frameworks** are a new aDNA category (new as of 2026-05-07 per `III.aDNA/what/decisions/adr_000_project_identity.md`). A Framework.aDNA project defines a **protocol, methodology, or operational standard** that other vaults federate against. Unlike Forges (artifact producers) or Platforms (runtime producers), frameworks produce no primary artifact and deploy no runtime — they provide a consumable methodology that any agent session can invoke. Consumers create lightweight `<framework>/` wrapper directories with `federation_ref` blocks.

## Consumer Integration Pattern

Consumer vaults create a `<framework_name>/` wrapper directory with `CLAUDE.md` (federation_ref + pack declarations) and optional `what/context/` extensions. The wrapper pins a version; consumers review on minor bumps. See ADR-002 in the framework vault for the canonical consumer contract.

> **Umbrella:** a Framework is the *build-with → conform* face of the [[pattern_software_element_context_graph|software-element context graph]] lens ([[../decisions/adr_039_software_element_context_graph_umbrella|ADR-039]]) — the same `<software>/` wrapper + `federation_ref` access mechanism Forges and deployment graphs use; consumers compose several at once (e.g. `Astro.aDNA` + `TypeScript.aDNA` for a site).

For III specifically, run `III.aDNA/how/skills/skill_iii_setup.md` (also published to `.adna/how/skills/`) to bootstrap an `iii/` wrapper in a new consumer vault — covers `federation_ref` skeleton, `kind:` enum walkthrough (5 values per ADR-002 §1a), minimal vs full-extension shapes, and downstream-safety check.

## Active Frameworks

| Framework | Persona | Methodology | Vault | Consumers | Maturity |
|-----------|---------|-------------|-------|-----------|----------|
| `III.aDNA` | Argus Panoptes | Inspect / Introspect / Improve — modular quality improvement loop for text, code, visual, data artifacts; 8 composable modules, 7 domain packs, graduated learning store | `III.aDNA/` | lattice-labs, SiteForge, Videos (was VideoForge; renamed 2026-06-10), CanvasForge, wga, LatticeProtocol (was LPWhitepaper; merged 2026-06-16 PT pt10) (all 6 live via `iii/`) | **Production** (Campaign A DG-A closed 9/9 2026-05-08; v0.1.0 + v0.2.0 tags shipped; Campaign B P2 ✅ 2026-05-11 — 5 wrappers live; P3 ✅ 2026-05-12 — MB-6 ✅ skill_iii_setup.md published, MB-7 ✅ vault hygiene, MB-8 ✅ LPWhitepaper wrapper (first 6/7-pack wrapper; first wrapper-managed consumer of `whitepaper_communication`); **DG-B ✅ CLOSED 9/9 2026-05-12** — Campaign B Federation complete end-to-end; 6 consumer wrappers live; airlock-spec consumers register live at MANIFEST.md (5 downstream airlock adopters: aDNA.aDNA ADR-008 + VideoForge + CanvasForge + M08a + node.aDNA). Campaign C P2 partial — MC-3 ✅ AIRLOCK.md v0.2.0; MC-4 next) |

## Category Promotion Criterion

**VAASLattice.aDNA** is a candidate second Framework.aDNA instance (verification-as-a-service methodology). Category promotes from provisional to ratified once a second instance is formally accepted.

## Provenance

Extracted from `~/aDNA/CLAUDE.md` at `campaign_lattice_compliance_upgrade` M01 (2026-05-20). Pre-extraction location: workspace-router §Framework Ecosystem (lines 192-202). Co-signed ADR: `aDNA.aDNA/what/decisions/adr_009_ecosystem_spec_extraction.md`.
