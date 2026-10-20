---
type: spec
kind: ecosystem_spec
name: framework_ecosystem
created: 2026-05-20
updated: 2026-10-20
version: "0.2"
status: active
last_edited_by: agent_rosetta
tags: [spec, ecosystem, framework, aDNA_pattern]
extraction_source: ~/aDNA/CLAUDE.md lines 192-202 (extracted at compliance campaign M01)
co_signed_adr: aDNA.aDNA/what/decisions/adr_012_ecosystem_spec_extraction.md
---

# Framework Ecosystem

Authoritative reference for the **Framework.aDNA** aDNA pattern category. Workspace router (`~/aDNA/CLAUDE.md`) carries only a pointer to this spec.

## Definition

**Frameworks** are a new aDNA category (new as of 2026-05-07 per `III.aDNA/what/decisions/adr_000_project_identity.md`). A Framework.aDNA project defines a **protocol, methodology, or operational standard** that other vaults federate against. Unlike Forges (artifact producers) or Platforms (runtime producers), frameworks produce no primary artifact and deploy no runtime — they provide a consumable methodology that any agent session can invoke. Consumers create lightweight `how/federation/<framework>/` wrapper directories with `federation_ref` blocks.

## Consumer Integration Pattern

Consumer vaults create a `how/federation/<framework_name>/` wrapper directory with `CLAUDE.md` (federation_ref + pack declarations) and optional `what/context/` extensions. The wrapper pins a version; consumers review on minor bumps. See ADR-002 in the framework vault for the canonical consumer contract.

> **Wrapper location (pinned — [[../decisions/adr_045_wrapper_placement_in_triad|ADR-045]]):** the wrapper lives at `<consumer>.aDNA/how/federation/<framework_name>/`, not at graph root — it is an operation the consumer *invokes*, so it belongs under `how/`. ("Federation" here = the `federation_ref` consumer-wrapper layer; distinct from network/node federation, owned by `Network.aDNA` / Venus.)

> **Umbrella:** a Framework is the *build-with → conform* face of the [[pattern_software_element_context_graph|software-element context graph]] lens ([[../decisions/adr_039_software_element_context_graph_umbrella|ADR-039]]) — the same `how/federation/<software>/` wrapper + `federation_ref` access mechanism Forges and deployment graphs use; consumers compose several at once (e.g. `Astro.aDNA` + `TypeScript.aDNA` for a site).

For III specifically, run `III.aDNA/how/skills/skill_iii_setup.md` (also published to `.adna/how/skills/`) to bootstrap a `how/federation/iii/` wrapper in a new consumer vault — covers `federation_ref` skeleton, `kind:` enum walkthrough (5 values per ADR-002 §1a), minimal vs full-extension shapes, and downstream-safety check.

## Active Frameworks

| Framework | Persona | Methodology | Vault | Consumers | Maturity |
|-----------|---------|-------------|-------|-----------|----------|
| `III.aDNA` | Argus Panoptes | Inspect / Introspect / Improve — modular quality improvement loop for text, code, visual, data artifacts; 8 composable modules, 7 domain packs, graduated learning store | `III.aDNA/` | lattice-labs, SiteForge, Videos (was VideoForge; renamed 2026-06-10), CanvasForge, wga, LatticeProtocol (was LPWhitepaper; merged 2026-06-16 PT pt10) (all 6 live via `iii/`) | **Production** (Campaign A DG-A closed 9/9 2026-05-08; v0.1.0 + v0.2.0 tags shipped; Campaign B P2 ✅ 2026-05-11 — 5 wrappers live; P3 ✅ 2026-05-12 — MB-6 ✅ skill_iii_setup.md published, MB-7 ✅ vault hygiene, MB-8 ✅ LPWhitepaper wrapper (first 6/7-pack wrapper; first wrapper-managed consumer of `whitepaper_communication`); **DG-B ✅ CLOSED 9/9 2026-05-12** — Campaign B Federation complete end-to-end; 6 consumer wrappers live; airlock-spec consumers register live at MANIFEST.md (5 downstream airlock adopters: aDNA.aDNA ADR-008 + VideoForge + CanvasForge + M08a + node.aDNA). Campaign C P2 partial — MC-3 ✅ AIRLOCK.md v0.2.0; MC-4 next) |
| `Git.aDNA` | Grace Hopper | Platform-agnostic git / forge / CI-CD standard (Path B provider abstraction; GitHub · Codeberg · Forgejo); deployable lighthouse → `Lighthouse.aDNA` | `Git.aDNA/` | 91 live `how/federation/git/` wrappers [D] | Genesis (category ⛩ ruled Framework at its P0, 2026-08-28, ADR-000) |
| `Documents.aDNA` | Aldus | **Framework (composer)**: the fleet's document-production method (stages · the block · the desk · passes · craft · register), that also houses the fleet's client-side document system by the founders' hand-over, under their licence line (ADR-005, proposed) — *[D] ADR-005 read `accepted` at the object 2026-10-20 (Documents.aDNA M17, `06e1a67`); the clause is kept as the P0 ruling worded it* | `Documents.aDNA/` | 0 yet (`how/federation/documents/`) | Genesis (⛩ P0 ruled 2026-10-20) |
| `OnWriting.aDNA` | Le Guin | Anti-slop writing as a consumable system: the brief · a three-layer context schema (voice · audience · topic · form · taste) · craft · the composing loop | `OnWriting.aDNA/` | 2 (Documents, ScienceStanley) | Genesis |
| `LinkML.aDNA` | Pāṇini | The aDNA LinkML Profile + the hash-locked LinkML toolchain (aDNA.aDNA ADR-062 clause 1) | `LinkML.aDNA/` | 2 (LatticeProtocol, QuantumProteins) | Genesis |
| `TypeScript.aDNA` | Milner | Context substrate for authoring and operating TypeScript | `TypeScript.aDNA/` | 3 (Astro, Dashboards, WebForge) | Genesis |
| `Organization.aDNA` | Mintzberg | Org-context-graph methodology — the standard Org-Graph vaults conform to | `Organization.aDNA/` | 3 (Dashboards, LAVentureGraph, SuperLeague) | Chartered |
| `VisualDNA.aDNA` | Pygmalion | Visual-DNA-per-entity standard (prompt + refs + palette + composition + LoRA) | `VisualDNA.aDNA/` | 6 (Bearly, City, ComfyUI, GOTFN, Videos, WebForge) | Active (v1.0 schema locked; MANIFEST `family: Framework.aDNA`) |
| `Atlantis.aDNA` | Proteus | Framework **+ reference implementation**: a drop-in agentic method for region-specific ecosystem early-warning models | `Atlantis.aDNA/` | 1 instance (FloridaKeysCoral) | P3 open (`pattern_category: framework`, ADR-001) |
| `React.aDNA` | Heraclitus | Build-face context for React (web-stack cohort) | `React.aDNA/` | 2 (Dashboards, WebForge) | Genesis-planning stub |
| `Tailwind.aDNA` | Josef Albers | Build-face context for Tailwind CSS (web-stack cohort) | `Tailwind.aDNA/` | 1 (WebForge) | Genesis-planning stub |
| `Hardware.aDNA` | Babbage | Fleet hardware ontology — vocabulary, never facts (Dynamo cohort) | `Hardware.aDNA/` | 1 (Inference) | Genesis-planning stub (`category: framework`; `tbd_at_p0`) |

> **Derived 2026-10-20, not typed** (`session_stanley_20261020_221216_garnier_inbox_framework_rows`; Aldus's ask,
> `who/coordination/inbox/coord_2026_10_19_aldus_to_rosetta_framework_spec_row.md`). [D] Membership read **four fields**
> across every root `*.aDNA/MANIFEST.md`: `category: framework_adna` / `framework` (Documents · LinkML · OnWriting ·
> TypeScript · Organization · React · Tailwind · Hardware), `family: Framework.aDNA` (VisualDNA), `pattern_category:
> framework` (Atlantis), and the MANIFEST body's **Category** line (Git). III carries none of these and stays on its
> long-standing row and its router line. Consumers = distinct `how/federation/<name>/` directories by real path
> (shims folded, the vault's own self-wrapper excluded, archived vaults excluded — III has 79 live by that count, against
> the 6 in its row's text). **Blind to:** a Framework whose MANIFEST names its category in none of those four fields, and
> to legacy root-level `<name>/` wrappers. **Not rows, by reading:** `VAAS.aDNA` (router: *Framework candidate*; its
> MANIFEST names no category) · `Scheduler.aDNA` (`platform_adna`, ⚠ proposed, its P0 tests platform vs framework) · `FastAPI.aDNA`
> (framework-vs-platform flagged for its P0) · `Context.aDNA` and `Commonplay.aDNA` (a Platform / an Org-Vault that
> *expose* a framework face) · `ThreeJS.aDNA` and `D3.aDNA` (`forge_adna`, though the router groups the web-stack cohort
> as "Framework / Forge").

## Category Promotion Criterion

**VAASLattice.aDNA** is a candidate second Framework.aDNA instance (verification-as-a-service methodology). Category promotes from provisional to ratified once a second instance is formally accepted.

> [D] **2026-10-20:** the criterion's condition is met on disk — eleven further instances above, several with the
> category ruled at their own P0 (Git 2026-08-28; Documents 2026-10-20). Whether that **ratifies the category** is an
> operator §7.7 call, not this table's; the paragraph stands until it is signed. (VAAS, its named candidate, is still a
> candidate.)

## Provenance

Extracted from `~/aDNA/CLAUDE.md` at `campaign_lattice_compliance_upgrade` M01 (2026-05-20). Pre-extraction location: workspace-router §Framework Ecosystem (lines 192-202). Active table derived and widened 2026-10-20 (v0.2; see the note under the table). Co-signed ADR: `aDNA.aDNA/what/decisions/adr_009_ecosystem_spec_extraction.md`.
