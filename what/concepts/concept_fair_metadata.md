---
type: concept
created: 2026-04-13
updated: 2026-04-17
status: active
difficulty: intermediate
spec_section: "§6 FAIR Metadata, §11 Federation Protocol"
dual_audience: true
last_edited_by: agent_stanley
tags: [concept, fair, metadata, findability, interoperability, reusability, intermediate]
related_concepts: [concept_lattice_composition, concept_ontology, concept_context_commons, concept_open_standard]
related_patterns: [pattern_fair_envelope, pattern_federation_readiness]
---

# FAIR Metadata — Making Knowledge Findable and Reusable

## Overview

FAIR is a simple four-question test: can someone else **F**ind your work, **A**ccess it, **I**nteroperate with it, and **R**euse it? aDNA bakes that test into every piece of project knowledge — from individual tools to whole workflows — by wrapping them in a short metadata envelope. Without it, a piece of work stays trapped inside one project; with it, the same piece becomes discoverable, trustworthy, and composable by anyone who speaks the standard.

## Why This Matters

Imagine a library with no catalog, no call numbers, and no standard format for book titles. The books are there, but nobody can find them, nobody knows if they can borrow them, and nobody knows if a book from one library will make sense in another. That's what a knowledge project looks like without metadata standards.

FAIR fixes this with four simple questions:

- **Findable** — Can someone searching for this knowledge discover it? (keywords, identifiers)
- **Accessible** — Can they get to it once they've found it? (license, access protocol)
- **Interoperable** — Can they use it alongside knowledge from other sources? (standard formats, schemas)
- **Reusable** — Can they build on it for new purposes? (provenance, clear licensing)

These aren't abstract ideals. They're practical requirements with concrete fields in every aDNA object. A lattice without `fair.license` cannot be shared across instances — federation validation will reject it. A module without `fair.keywords` is invisible to search. FAIR metadata isn't documentation overhead; it's the infrastructure of trust.

## How It Works

### Two FAIR Formats

aDNA uses two representations of the same FAIR data, depending on context (§6):

| Format | Where Used | Structure | Example |
|--------|-----------|-----------|---------|
| **Flat FAIR** | `.lattice.yaml`, `.dataset.yaml` | Compact, single-level `fair:` block | `fair.license: "MIT"` |
| **Nested FAIR** | Vault `.md` frontmatter | Hierarchical, grouped by principle | `fair.findable.keywords: [...]` |

The flat form is machine-optimized — compact for YAML transport. The nested form is human-optimized — grouped by the FAIR principle each field serves. Both are round-trip safe for core fields: `flat → nested → flat` produces identical output.

### Field Reference

| Flat FAIR Field | Nested FAIR Path | Required | FAIR Principle |
|----------------|------------------|----------|---------------|
| `fair.keywords` | `fair.findable.keywords` | **Yes** | Findable |
| `fair.license` | `fair.accessible.license` | **Yes** | Accessible |
| `fair.identifier` | `fair.findable.identifier` | No | Findable |
| `fair.creators` | (body section) | No | Accessible |
| `fair.provenance` | `fair.reusable.provenance` | No | Reusable |
| `fair.location` | `fair.accessible.location` | No | Accessible |
| `fair.access_protocol` | `fair.accessible.access_protocol` | No | Accessible |
| `fair.format` | `fair.interoperable.format` | No | Interoperable |
| `fair.schema` | `fair.interoperable.schema` | No | Interoperable |

**Two fields are always required**: `keywords` (at least one) and `license` (SPDX identifier). These are the minimum viable FAIR envelope — enough for basic findability and legal clarity.

### FAIR in Practice: The Federation Gate

FAIR metadata isn't just descriptive — it's a functional gate. When a lattice attempts to federate (share across aDNA instances), six readiness checks must pass (§11). Three are FAIR checks:

| Check | FAIR Field | Why |
|-------|-----------|-----|
| License declared | `fair.license` | No license = no legal basis for sharing |
| Keywords present | `fair.keywords` | No keywords = invisible to search |
| Provenance documented | `fair.provenance` | No provenance = unverifiable origin |

A lattice can be technically perfect — valid schema, clean edges, efficient nodes — and still fail federation because it lacks a two-word license field. FAIR metadata is the difference between "works locally" and "works everywhere."

### Access Protocol Values

The `access_protocol` field uses a controlled vocabulary:

| Value | Meaning | Example |
|-------|---------|---------|
| `direct` | Local filesystem access | Files in vault |
| `api` | REST or gRPC endpoint | Cloud-hosted model |
| `request` | Manual access request required | Restricted dataset |
| `https` | Web-accessible URL | Public resource |
| `container` | Docker/OCI image | Packaged runtime |

### The Type Vocabulary Connection

The `format` field in FAIR metadata uses aDNA's 19-type vocabulary (§7) — the same type system used for module inputs and outputs. This ensures interoperability: a dataset declared as `pdb_structure` format will match a module expecting `pdb_structure` input.

## See It In Action

FAIR metadata is visible throughout this vault:

**Lattice YAML files**: Open any `.lattice.yaml` in `what/lattices/examples/` — every one has a `fair:` block with `license`, `keywords`, `creators`, and `provenance`. This is flat FAIR in its natural habitat.

**Context file frontmatter**: Look at the frontmatter of any context file — e.g., `what/context/adna_core/context_adna_core_paradigm_overview.md`. The `sources` field is provenance. The `tags` field serves the findability role that `keywords` serves in YAML objects.

**Federation examples**: The `docking_assessment` example lattice at `what/lattices/examples/` carries both `fair` and `federation` blocks — showing how FAIR metadata enables a lattice to move from one project to another with trust intact.

**The FAIR mapping guide**: The complete interconversion specification between flat and nested FAIR lives at `what/context/adna_core/context_adna_core_fair_mapping.md` — itself a context file demonstrating the optimization principles described in [[what/concepts/concept_context_optimization|Context Optimization]].

## Related

- [[what/concepts/concept_lattice_composition|Lattice Composition]] — the workflow composition that FAIR metadata makes shareable and trustworthy
- [[what/concepts/concept_ontology|Ontology]] — the entity types (module, dataset, lattice) that carry FAIR envelopes
- [[what/concepts/concept_context_commons|Context Commons]] — the vision of community-shared knowledge that FAIR principles enable
- [[what/concepts/concept_open_standard|Open Standard]] — how FAIR metadata fits into aDNA's broader open governance model
