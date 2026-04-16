---
type: publishing
created: 2026-04-16
updated: 2026-04-16
status: active
target: docs
last_edited_by: agent_stanley
tags: [publishing, content-mapping, architecture, docs]
---

# publishing_content_mapping

## Overview

Every vault entity type maps to a specific site section and URL pattern. This document is the registry of those mappings — the bridge between vault architecture and web architecture. The mapping tables below are extracted from the same `transform-content.mjs` script that builds adna-docs.vercel.app.

## Two Publishing Pathways

Content reaches the site through two distinct mechanisms:

### Pathway 1: Transform Script

The `transform-content.mjs` script handles content from the **WHAT** triad leg. Six mapping tables define source-to-output transformations:

| Vault Directory | Entity Type | Site Collection | URL Pattern | Count |
|----------------|-------------|-----------------|-------------|-------|
| `what/concepts/` | concept | `content/docs/` | `/learn/concepts/{slug}` | 13 |
| `what/patterns/` | pattern | `content/docs/` | `/patterns/{slug}` | 8 |
| `what/comparisons/` | comparison | `content/docs/` | `/learn/comparisons/{slug}` | 5 |
| `what/use_cases/` | use_case | `content/docs/` | `/use-cases/{slug}` | 6 |
| `what/tutorials/` | tutorial | `content/guides/` | `/learn/tutorials/{slug}` | 9 |
| `what/docs/` | reference | `content/reference/` | `/reference/{slug}` | 8 |

Each mapping entry defines: `source` (vault filename), `slug` (URL segment), `title` (display name), and type-specific fields (`order`, `difficulty`, `time`, `stability`, `version`).

### Pathway 2: Direct Astro Pages

Content added during Phase 4.5 (M21) uses direct `.astro` pages with dynamic `[...slug].astro` routes. These bypass the transform script and read content directly:

| Vault Directory | Entity Type | URL Pattern | Count |
|----------------|-------------|-------------|-------|
| `what/glossary/` | glossary_entry | `/glossary/{slug}` | 25 |
| `who/community/` | community | `/community/{slug}` | 3 |
| `who/adopters/` | adopter | `/adopters/{slug}` | 5 |

This second pathway emerged when Phase 4.5 added WHO-triad content that did not fit the original transform script's WHAT-only architecture. Both pathways coexist — the transform script handles bulk content with complex transformations, while direct pages handle smaller collections with simpler needs.

## The Wikilink Registry

The transform script maintains a 48-entry wikilink map that converts Obsidian `[[wikilinks]]` to site URLs. Every content entity gets a registered entry:

```javascript
'concept_triad': { url: '/learn/concepts/triad', label: 'The Triad' },
```

When a vault file references `[[concept_triad]]`, the transform rewrites it to `[The Triad](/learn/concepts/triad)`. Unregistered wikilinks pass through unchanged — this makes missing registrations visible in site builds rather than silently breaking links.

## Adding New Content Types

To publish a new vault entity type on the site:

1. **Choose the pathway.** Use the transform script for large collections needing frontmatter rewriting and wikilink resolution. Use direct Astro pages for small collections with straightforward rendering.

2. **For transform script:** Add a mapping table (source → slug → title → order), add wikilink entries, create a `transformX()` function following the existing pattern, and call it from the main block.

3. **For direct pages:** Create a `[...slug].astro` page under `site/src/pages/`, an index page, and add the route to the site navigation.

4. **Register wikilinks.** Any new entity needs entries in the wikilink map so other content can link to it.

## Current Gaps

The **HOW** triad leg (`how/publishing/`, `how/workshops/`) is not yet published to the site. This content — including the document you are reading — exists in the vault but has no site pathway. Adding HOW content is planned for Phase 6 (M19: Website v2).

## Self-Reference

These mapping tables ARE the vault's own content architecture viewed from the publishing side. The [[concept_ontology|Ontology]] defines entity types; this document shows where each type lands on the web. The two-pathway pattern itself demonstrates the [[pattern_base_extension|Base/Extension]] pattern: the original transform script is the base, and direct Astro pages are the extension added when new entity types outgrew the original design.

## Related

- [[publishing_vault_to_site|Vault-to-Site Pipeline]] — the end-to-end pipeline these mappings feed
- [[publishing_social_sharing|Social Sharing]] — how published pages appear when shared
- [[concept_ontology|The Ontology]] — the entity type system that this mapping reflects
- [[pattern_base_extension|Base/Extension]] — the pattern demonstrated by the two-pathway architecture
