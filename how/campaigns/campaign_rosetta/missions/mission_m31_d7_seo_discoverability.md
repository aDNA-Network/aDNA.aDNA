---
plan_id: mission_m31
type: plan
title: "M31 — D7: SEO & Discoverability (Cycles 61-70)"
owner: stanley
status: completed
mission_class: implementation
created: 2026-04-24
updated: 2026-04-24
last_edited_by: agent_rosetta
tags: [mission, rosetta, phase-7, d7, seo, discoverability, json-ld, structured-data]
campaign: campaign_rosetta
decadal: D7
cycles: 61-70
ranker_baseline: 4.96
ranker_target: "≥4.97"
ranker_close: 4.97
---

# M31 — D7: SEO & Discoverability (Cycles 61-70)

## Goal

Improve the aDNA docs site's SEO and search discoverability through structured data, heading hierarchy correctness, sitemap completeness, meta description quality, and internal linking density. Primary levers: JSON-LD coverage (currently 55% — 20/36 pages), BreadcrumbList schema for content hierarchy, HowTo schema for tutorials, and the pre-existing Patterns a11y 98 gap.

Ranker baseline: **4.96** (D6 close). Target: **≥4.97**.

## Priority Queue (seeded from aar_phase7_d6.md)

| ID | Cycle | Item | Status |
|----|-------|------|--------|
| S-01 | 61 | JSON-LD for 16 missing index/utility pages (CollectionPage + WebPage schemas) | ✅ complete |
| S-02 | 62 | HowTo schema for tutorial pages — update `seo.ts` builder, wire up tutorial route | ✅ complete |
| S-03 | 63 | BreadcrumbList schema on content hierarchy pages (patterns/slug, learn/concepts/slug, etc.) | ✅ complete |
| S-04 | 64 | Heading hierarchy audit — H1→H2→H3 scan across all 117 pages, fix violations | ✅ complete |
| S-05 | 65 | Sitemap completeness — verify 120 URLs vs 117 pages, resolve discrepancies | ✅ complete |
| S-06 | 66 | Meta description audit — find missing or duplicate descriptions, write fixes | ✅ complete |
| S-07 | 67 | Internal linking density — add 2-3 cross-links per concept/pattern page | ✅ complete |
| S-08 | 68 | Patterns a11y 98 investigation + fix (pre-existing gap from D6) | ✅ resolved (Cycle 64 fix) |
| S-09 | 69 | Verification meta tags (Google Search Console, Bing) + pre-close ranker measurement | ✅ ranker done; tags deferred (user action) |
| S-10 | 70 | D7 decadal close: full Playwright suite, 5-persona ranker, AAR | ✅ complete |

## Tasks

### 1. Cycle 61 — JSON-LD index/utility pages (S-01)
- **Status**: in_progress
- **Description**: Add `buildCollectionPageJsonLD()` to `seo.ts`. Wire up to all 16 missing pages: learn/index, patterns/index, glossary/index, community/index, reference/index, use-cases/index, adopters/index, how/index, changelog. Use WebPage for utility pages (changelog, 404), CollectionPage for section index pages.
- **Files**: `site/src/utils/seo.ts`, 9 index/utility pages
- **Gate**: build 117 pages, 0 errors. Playwright 47/47.

### 2. Cycle 62 — HowTo schema for tutorials (S-02)
- **Status**: pending
- **Description**: Add `buildHowToJsonLD()` builder to `seo.ts`. Tutorial pages currently use TechArticle — swap for HowTo where content is step-by-step instructional. Wire up in `learn/tutorials/[...slug].astro`.
- **Files**: `site/src/utils/seo.ts`, `site/src/pages/learn/tutorials/[...slug].astro`

### 3. Cycle 63 — BreadcrumbList schema (S-03)
- **Status**: pending
- **Description**: Add `buildBreadcrumbListJsonLD()` builder to `seo.ts`. Add to content hierarchy pages: patterns/[slug], learn/concepts/[slug], learn/tutorials/[slug], learn/comparisons/[slug], use-cases/[slug], adopters/[slug]. The Breadcrumb component already renders visual breadcrumbs — this adds the machine-readable counterpart.
- **Files**: `site/src/utils/seo.ts`, content slug pages

### 4. Cycle 64 — Heading hierarchy audit (S-04)
- **Status**: pending
- **Description**: Scan all 117 built HTML pages for H1→H2→H3 violations (skipped levels, multiple H1s, H3 without H2 parent). Fix any found in page templates or layouts.
- **Files**: varies by finding

### 5. Cycle 65 — Sitemap completeness (S-05)
- **Status**: pending
- **Description**: Build site, compare sitemap-0.xml URL count vs expected page count. Verify no missing pages, no duplicate canonical URLs, `lastmod` dates populated.
- **Files**: `site/astro.config.mjs` if sitemap config needs adjustment

### 6. Cycle 66 — Meta description audit (S-06)
- **Status**: pending
- **Description**: Audit all pages for missing or duplicate meta descriptions. Fix top 5 offenders (shortest/emptiest descriptions on high-traffic pages).
- **Files**: page `.astro` files, content frontmatter

### 7. Cycle 67 — Internal linking density (S-07)
- **Status**: pending
- **Description**: Add 2-3 cross-links per concept and pattern page. Target: concept pages linking to related patterns, tutorials linking to concepts they use, pattern pages linking to use-cases.
- **Files**: `what/` content markdown files, re-run transform-content.mjs if needed

### 8. Cycle 68 — Patterns a11y 98 fix (S-08)
- **Status**: pending
- **Description**: Pre-existing Patterns index a11y 98 (all other pages 100). Identify the specific audit failure and fix.
- **Files**: `site/src/pages/patterns/index.astro` and related components

### 9. Cycle 69 — Verification meta tags + pre-close ranker (S-09)
- **Status**: pending
- **Description**: Add Google Search Console and Bing Webmaster verification meta tags to BaseLayout (if appropriate). Run 5-persona D7 ranker measurement.
- **Files**: `site/src/layouts/BaseLayout.astro`

### 10. Cycle 70 — Decadal close + AAR (S-10)
- **Status**: pending
- **Description**: Full decadal AAR per `skill_decadal_aar.md`. 5-persona ranker final scores. File `aar_phase7_d7.md`. Seed D8 priority queue (Interaction Depth). Update campaign doc and STATE.md.
- **Files**: `how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d7.md`, campaign doc, STATE.md

## Notes

- Desktop Lighthouse 100/100/100/100 must be maintained throughout D7. Mobile 98-100 performance likewise.
- D7 does NOT include a Reviewer Lens Pass — mandatory at D4, D8, D9.
- JSON-LD additions are purely in `<head>` — no visual change, no layout risk.
- Every cycle follows `skill_iii_cycle.md` (7-step: Measure → Orient → Select → Implement → Re-measure → Validate → Record).
- Cycle 70 runs `skill_decadal_aar.md` for full persona ranker review.

## Completion Summary

D7 closed 2026-04-24. Ranker 4.96→**4.97** (+0.01). All 10 cycles complete. Playwright 47/47. Build 117 pages, 0 errors.

**Biggest wins**: JSON-LD coverage 55%→97% via @graph bundle pattern (SEOHead renders array of schemas as single `<script>` tag); heading hierarchy 45 violations→0 via dual fix (CardGrid tag + 33 Pathway-2 MDX H1 strips); Patterns a11y 98→100.

**Carry-forward**: Verification tags (Google Search Console + Bing — user action); nav duplicate link text differentiation (D9 candidate).

**AAR**: `how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d7.md`

### Mission AAR

- **Worked**: @graph bundle pattern handled the "two schemas, one tag" gate constraint elegantly — SEOHead now supports single or array of schemas without any gate regressions.
- **Didn't**: Heading hierarchy had two independent root causes that required separate fixes; the dual-pathway architecture (transform script vs. direct Pathway-2) creates ongoing maintenance asymmetry.
- **Finding**: Lighthouse Accessibility 98 on Patterns was a heading-level issue (H1→H3 skip), not flagged by axe-core — coverage gap in gate-4-a11y. D8 should add a heading-hierarchy gate.
- **Change**: For D8, add a gate tracking media placeholder count before implementing interactive content, so progress is measurable and regression-proof.
- **Follow-up**: Nav duplicate link text (Solo Developer / Startup / Enterprise Team / Educator / Context Commons) — D9 candidate for label differentiation.
