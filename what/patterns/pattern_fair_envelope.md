---
type: pattern
created: 2026-04-14
updated: 2026-04-14
status: active
pattern_category: federation
applies_to: [modules, lattices, context]
last_edited_by: agent_stanley
tags: [pattern, fair, metadata, envelope, findability, federation]
---

# FAIR Envelope — Metadata for Findability and Reuse

## Problem

A lattice, module, or dataset that lacks standardized metadata is a black box. Other projects can't discover it, can't assess whether it's trustworthy, can't determine its licensing, and can't integrate it with their own knowledge. Without metadata, sharing is manual — someone emails a file and explains it verbally. That doesn't scale.

## Solution

Wrap every shareable object in a **FAIR envelope** — a standardized metadata block that answers four questions (§6):

| Principle | Question | Key Fields |
|-----------|----------|-----------|
| **Findable** | Can someone discover this? | `keywords` (required), `identifier` (optional DOI) |
| **Accessible** | Can they retrieve it? | `license` (required, SPDX), `access_protocol`, `location` |
| **Interoperable** | Can they use it with other systems? | `format` (type vocabulary), `schema` |
| **Reusable** | Can they build on it? | `provenance`, `creators` |

**Two required fields**: `keywords` (at least one) and `license` (SPDX identifier). Everything else is optional but recommended for shared objects.

**Two representations**:

| Format | Where | Structure |
|--------|-------|-----------|
| **Flat** | `.lattice.yaml`, `.dataset.yaml` | `fair.keywords`, `fair.license`, etc. |
| **Nested** | Vault `.md` frontmatter | `fair.findable.keywords`, `fair.accessible.license`, etc. |

Both are round-trip safe for core fields. Use flat in YAML transport files, nested in markdown documentation.

**The minimum viable envelope**:

```yaml
fair:
  keywords: [knowledge-architecture, documentation]
  license: "MIT"
```

Two fields, two lines. That's the entry cost for making an object findable and legally shareable.

## When to Use

- Every `.lattice.yaml` and `.dataset.yaml` file
- Every module definition intended for sharing
- Context files in a shared context library
- Any object that might be federated, published, or used by another project

## Example: This Vault

**Lattice examples**: Every `.lattice.yaml` in `what/lattices/examples/` carries a FAIR block. The `protein_binder_design` example has:

```yaml
fair:
  license: "MIT"
  keywords: [protein-design, binder, computational-biology]
  creators: ["Lattice Labs"]
  provenance: "Designed for de novo protein binder pipeline"
```

Four lines that make this lattice discoverable, legally clear, attributable, and traceable.

**Context files**: The files in `what/context/adna_core/` use FAIR-aligned metadata in their frontmatter: `sources` (provenance), `tags` (findability), and quality scores (reusability signals). While they use frontmatter fields rather than a formal `fair:` block, the principles are the same — every file carries enough metadata to evaluate before loading.

**The FAIR mapping reference**: `what/context/adna_core/context_adna_core_fair_mapping.md` documents the complete field correspondence between flat and nested FAIR, including anti-patterns (mixing formats, omitting license for shared objects).

## Anti-Pattern

**No metadata at all**: A lattice file with nodes and edges but no `fair:` block. It works locally but can never be shared — federation validation requires license and keywords.

**Keywords as afterthought**: `keywords: [misc]`. Keywords are the primary findability mechanism. They should be specific enough to distinguish this object from others: `[protein-design, binder]` not `[science, data]`.

**Missing license on shared objects**: `federation.shareable: true` without `fair.license`. The federation protocol will reject it — no license means no legal basis for sharing.

**Mixing flat and nested**: Using `fair.findable.keywords` in a `.lattice.yaml` file (should be flat `fair.keywords`) or `fair.keywords` in vault frontmatter (should be nested `fair.findable.keywords`). Pick the format for the file type and be consistent.

## Related

- [[what/concepts/concept_fair_metadata|FAIR Metadata]] — the concept explaining why FAIR matters and how it works
- [[what/patterns/pattern_federation_readiness|Federation Readiness]] — the broader checklist that includes FAIR as a prerequisite
- [[what/concepts/concept_context_commons|Context Commons]] — the community sharing vision FAIR enables
