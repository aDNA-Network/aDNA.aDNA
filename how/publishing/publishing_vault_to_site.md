---
type: publishing
created: 2026-04-16
updated: 2026-04-16
status: active
target: website
last_edited_by: agent_stanley
tags: [publishing, pipeline, transform, website]
---

# publishing_vault_to_site

## Overview

This document describes how aDNA.aDNA vault content becomes a live documentation website. The pipeline transforms Markdown files from vault directories into Astro content collections, then deploys to Vercel. You are reading a file that was produced by the same vault this pipeline publishes — the process described here built the site at adna-docs.vercel.app.

## The Pipeline

The publishing pipeline has four stages:

```
Vault Markdown → transform-content.mjs → Astro MDX → Vercel
```

### Stage 1: Source Content

Content lives in vault directories organized by the [[concept_triad|Triad]] — `what/concepts/`, `what/patterns/`, `what/tutorials/`, `what/comparisons/`, `what/use_cases/`, and `what/docs/`. Each file follows its entity template with YAML frontmatter and wikilink cross-references.

### Stage 2: Transform

The core script is `site/scripts/transform-content.mjs`. Run it with:

```bash
node site/scripts/transform-content.mjs
```

It performs four transformations on each source file:

1. **Frontmatter rewriting** — strips vault frontmatter (`type`, `created`, `tags`, etc.) and replaces it with Astro-specific fields (`title`, `description`, `section`, `order`). The vault metadata serves agents; the site metadata serves browsers.

2. **Wikilink rewriting** — converts Obsidian-style `[[target|alias]]` and `[[target]]` links into standard Markdown `[label](url)` using a 48-entry wikilink map. Every content entity has a registered URL. Unresolved wikilinks pass through unchanged.

3. **H1 stripping** — removes the first `# heading` from each file. Astro layouts render the title from frontmatter, so the vault's H1 would duplicate it.

4. **Description generation** — extracts the first non-heading, non-table, non-list paragraph and truncates to 155 characters for SEO meta descriptions.

### Stage 3: Astro Build

Transformed files land in `site/src/content/` as `.mdx` files, organized into Astro content collections:

- `content/docs/` — concepts, patterns, comparisons, use cases
- `content/guides/` — tutorials
- `content/reference/` — specification documents

Astro 6 builds the site with `npm run build` from the `site/` directory. Dynamic routes (`[...slug].astro`) render each collection entry using shared layouts.

### Stage 4: Deploy

Deploy to Vercel with:

```bash
cd site && vercel --prod
```

Currently manual. A Vercel Git integration would enable auto-deploy on push (see [[publishing_content_mapping|Content Mapping]] for the planned improvement).

## Self-Reference

This pipeline is the mechanism that published 65+ documentation pages from Phase 1-4 content. The [[concept_convergence|Convergence Model]] describes why vault content is structured for token selection — this pipeline is where that structure pays off on the web side. Every concept, tutorial, and pattern page on adna-docs.vercel.app passed through these four stages.

## Related

- [[publishing_content_mapping|Content Mapping]] — how vault entities map to site sections
- [[publishing_social_sharing|Social Sharing]] — OG images and social preview configuration
- [[concept_knowledge_graph|The Knowledge Graph]] — the interconnected content this pipeline publishes
- [[pattern_agents_md|AGENTS.md Routing]] — the vault-side routing that parallels site navigation
