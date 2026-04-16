---
mission_id: m16
type: mission
title: "Publishing Pipeline"
campaign: campaign_rosetta
status: completed
priority: high
created: 2026-04-16
updated: 2026-04-16
last_edited_by: agent_stanley
tags: [mission, rosetta, phase-5, publishing]
---

# M16 — Publishing Pipeline

## Mission Brief

Document the vault-to-web publishing pipeline that transforms aDNA.aDNA vault content into the live documentation site at adna-docs.vercel.app. Three files covering the end-to-end pipeline, content mapping architecture, and social sharing infrastructure.

## Objectives

### O1: Vault-to-Site Pipeline Doc (completed 2026-04-16)

- [x] Created `how/publishing/publishing_vault_to_site.md`
- [x] Documented `transform-content.mjs` pipeline stages (frontmatter rewrite, wikilink rewrite, H1 strip, description generation)
- [x] Covered all four transformation stages with code examples
- [x] Self-reference: cites itself as product of the pipeline it describes

### O2: Content Mapping Doc (completed 2026-04-16)

- [x] Created `how/publishing/publishing_content_mapping.md`
- [x] Documented all 6 transform-script mapping tables (49 entries: 13 concepts, 8 patterns, 5 comparisons, 6 use cases, 9 tutorials, 8 reference)
- [x] Documented Phase 4.5 pathway 2: direct Astro pages for glossary (25), community (3), adopters (5)
- [x] Self-reference: identifies two-pathway pattern as Base/Extension pattern in action

### O3: Social Sharing Doc (completed 2026-04-16)

- [x] Created `how/publishing/publishing_social_sharing.md`
- [x] Documented OG image system (5 images, SVG-to-PNG generation via @resvg/resvg-js)
- [x] Documented section-aware selection in SEOHead.astro (5 path prefix rules)
- [x] Self-reference: cites M23 Phase 4.5 deliverables, links to dual-audience concept

## Dependencies

- Depends on: Phase 4.5 complete (site infrastructure exists)
- No blocking dependencies on M17 or M18

## Quality Gates

- [x] Dual audience test on all 3 files — plain-language openings, technical depth after
- [x] Self-reference check on all 3 files — each cites concrete vault examples
- [x] Cross-linking — 4+ wikilinks per file (exceeds 2 minimum)
- [x] Frontmatter complete per template
- [x] Token budget: all files within 1,000-2,000 range

## AAR

- **Worked**: Reading `transform-content.mjs` fully before writing revealed the two-pathway pattern (transform script vs direct Astro pages) — a detail that made `publishing_content_mapping.md` significantly more useful than just listing tables.
- **Didn't**: Nothing blocked. Three short files in a single session was comfortable.
- **Finding**: The HOW triad leg has no site publishing pathway yet — `transform-content.mjs` only handles WHAT content. This is a clear scope item for M19 (Phase 6).
- **Change**: Future publishing docs should note which content is and isn't on the site to avoid confusion about where readers can find things.
- **Follow-up**: M19 should add HOW content (publishing, workshops) to the site. The facilitation guide and workshop kits from M17 are natural candidates for a new site section.
