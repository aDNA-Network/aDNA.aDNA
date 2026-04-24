---
type: artifact
created: 2026-04-24
updated: 2026-04-24
status: complete
last_edited_by: agent_rosetta
tags: [artifact, aar, phase-7, d7, seo, discoverability]
mission: m31
decadal: D7
---

# AAR — Phase 7 D7: SEO & Discoverability (Cycles 61-70)

## Ranker Scorecard

| Dimension | D6 Baseline | D7 Close | Delta |
|-----------|-------------|----------|-------|
| Findability | 4.98 | **4.99** | **+0.01** |
| Comprehension | 5.00 | 5.00 | 0 |
| Actionability | 4.97 | **4.98** | **+0.01** |
| Trust | 5.00 | 5.00 | 0 |
| Relevance | 5.00 | 5.00 | 0 |
| Delight | 4.81 | **4.83** | **+0.02** |
| **Overall** | **4.96** | **4.97** | **+0.01** |

> Findability +0.01: JSON-LD structured data raised from 55% to 97% coverage (36/36 pages including 16 previously-missing index pages). Researcher Findability +0.05 from near-complete structured data. Actionability +0.01: concept→tutorial cross-links added pathway from every concept/pattern page to its corresponding hands-on tutorial. Delight +0.02: heading hierarchy cleanup (45 violations → 0) improved screen reader navigation and overall coherence.

## Persona Ranker Matrix

| Dimension | Solo Dev | Educator | Enterprise | Researcher | Startup | Avg |
|-----------|----------|----------|------------|------------|---------|-----|
| Findability | 5.00 | 5.00 | 5.00 | 4.95 | 5.00 | **4.99** |
| Comprehension | 5.00 | 5.00 | 5.00 | 5.00 | 5.00 | **5.00** |
| Actionability | 5.00 | 4.90 | 5.00 | 5.00 | 5.00 | **4.98** |
| Trust | 5.00 | 5.00 | 5.00 | 5.00 | 5.00 | **5.00** |
| Relevance | 5.00 | 5.00 | 5.00 | 5.00 | 5.00 | **5.00** |
| Delight | 4.85 | 4.75 | 4.85 | 4.80 | 4.90 | **4.83** |
| **Overall** | **4.98** | **4.94** | **4.98** | **4.96** | **4.98** | **4.97** |

## Cycle Log Summary

| Cycle | Fix | Change | Gate |
|-------|-----|--------|------|
| 61 | S-01 | CollectionPage JSON-LD for 16 missing index/utility pages; WebPage for changelog | PASS 47/47 |
| 62 | S-02 | HowTo schema for tutorial pages — `buildHowToJsonLD()` + ISO 8601 totalTime | PASS 47/47 |
| 63 | S-03 | BreadcrumbList on all 12 content-type slug pages; @graph bundle to satisfy gate count=1 | PASS 47/47 |
| 64 | S-04 | Heading hierarchy — CardGrid `<h3>`→`<p>` + strip H1 from 33 Pathway-2 MDX files | PASS 47/47 |
| 65 | S-05 | Sitemap audit — 116/116 URLs verified complete, 0 duplicates, no action needed | PASS 47/47 |
| 66 | S-06 | Meta descriptions — 2 thin descriptions improved (get-started, changelog) | PASS 47/47 |
| 67 | S-07 | Internal linking — 6 concept/pattern→tutorial cross-links added via vault wikilinks | PASS 47/47 |
| 68 | S-08 | Patterns a11y 98 investigation — ALREADY FIXED by Cycle 64; confirmed 100/100 Lighthouse | PASS 47/47 |
| 69 | S-09 | Ranker pre-close (4.97); verification tags deferred (user action required) | — |
| 70 | S-10 | D7 Decadal AAR | PASS 47/47 |

All 10 cycles passed build gate (117 pages, ≤2.36s, 0 errors) and Playwright 47/47.

## JSON-LD Coverage — D7 Summary

| Schema Type | Before D7 | After D7 |
|-------------|-----------|----------|
| TechArticle | ~20 pages | 11 concept + comparison pages |
| HowTo | 0 | 5 tutorial pages |
| CollectionPage | 0 | 15 index pages |
| WebPage | 0 | 1 (changelog) |
| BreadcrumbList | 0 | 12 slug pages (bundled via @graph) |
| WebSite (root) | 1 | 1 |
| **Coverage** | **55%** | **~97% (35/36 Astro pages)** |

> @graph bundle pattern: when `jsonLD` prop receives an array, SEOHead renders one `<script>` containing `{"@context":"https://schema.org","@graph":[...]}` — two schemas, one tag, gate-6-meta count=1 satisfied.

## Lighthouse Scores (D7 close — mobile)

| Page | Performance | Accessibility | Best Practices | SEO |
|------|------------|---------------|----------------|-----|
| Homepage | 98 | 100 | 100 | 100 |
| Tutorial | 98 | 100 | 100 | 100 |
| Concept (triad) | 98 | 100 | 100 | 100 |
| Glossary | 98 | 100 | 100 | 100 |
| Patterns (index) | 100 | **100** | 100 | 100 |

> Patterns accessibility raised from 98→100 by heading hierarchy fix (CardGrid `<h3>`→`<p>`).

## Infrastructure Changes — D7

Three new `seo.ts` builder functions:
- `buildCollectionPageJsonLD()` — section index pages
- `buildHowToJsonLD()` — step-by-step tutorial pages (with ISO 8601 totalTime)
- `buildBreadcrumbListJsonLD()` — navigation context on content hierarchy pages

`SEOHead.astro` extended with `JsonLDValue = Record<string, unknown> | Record<string, unknown>[]` — supports both single-schema and @graph-bundle patterns without gate regression.

`gate-6-meta.spec.ts` updated to accept both `@type` and `@graph` JSON-LD shapes.

## Top Pain Points (Cross-Persona)

1. **Media placeholders** — Educator Actionability ceiling (4.90). "Demo coming soon" blocks the highest-impact Actionability gain. → **D8** target (Interaction Depth).
2. **Verification tags pending** — Google Search Console + Bing Webmaster require user to register, obtain codes, and add meta tags. No agent can execute this. Recommendation: register, add `<meta name="google-site-verification">` + `<meta name="msvalidate.01">` to `SEOHead.astro` props and `BaseLayout.astro` passthrough.
3. **Nav duplicate link text** — Solo Developer / Startup / Enterprise Team / Educator / Context Commons appear in both use-cases and adopters nav sections. Confusing for screen readers and search engines. → **D9** candidate (Navigation & Onboarding).
4. **Delight ceiling (4.83)** — Educator Delight 4.75 blocked by media placeholders; only substantive fix is D8 interactive content.

## D8 Priority Queue: Interaction Depth (Cycles 71-80)

### Themed Items
1. Replace "Demo coming soon" placeholders with real embedded demos or walkthroughs
2. Add interactive code examples to tutorial pages (runnable or clipboard-copy)
3. Embed architecture diagram (SVG/mermaid) on concept pages for visual learners
4. Add "Try this in Claude Code" deep-link CTAs on tutorial completion
5. Progressive disclosure for glossary entries — show definition, expand for examples

### Carry-Forward From D7
1. Verification meta tags (Google Search Console + Bing) — user registers, adds codes
2. Nav duplicate link text — differentiate labels: "Solo Developer (adopter profile)" vs "Solo Developer (use case)"

### Persona-Driven Items
1. Educator: interactive tutorial steps that validate completion (checkbox or clipboard copy count)
2. Solo Developer: "run this now" CTA at the end of navigate-a-vault tutorial
3. Researcher: embedded structured artifact examples (live .lattice.yaml viewer)

## 5-Line AAR

- **Worked**: The @graph bundle pattern (SEOHead rendering array of schemas as one `<script type="application/ld+json">`) was elegant — two schemas, one tag, no gate regressions. Pattern generalizes to any future schema combinations.
- **Didn't**: The heading hierarchy fix required two separate root causes: CardGrid `<h3>`→`<p>` (Pathway 1 pages) AND Python batch H1-strip on 33 Pathway-2 MDX files. The dual-pathway architecture creates recurring maintenance asymmetry — any future content added via Pathway 2 bypasses `stripH1()` in the transform script.
- **Finding**: Lighthouse Accessibility 98 on Patterns was caused by H1→H3 skip via CardGrid, not by an axe-core violation — which is why gate-4-a11y passed while Lighthouse flagged it. Lighthouse heading-level audit and axe-core heading checks are not equivalent. Gate coverage gap: add a Playwright heading-hierarchy check to catch this class of violation automatically.
- **Change**: For D8, add a gate before implementing interactive content — a gate that checks no `.demo-placeholder` elements remain (or tracks count) so the fix is measurable and regression-proof.
- **Follow-up**: Nav duplicate link text (Solo Developer, Startup, Enterprise Team, Educator, Context Commons appearing in both use-cases and adopters) — low a11y impact but could confuse screen readers and search engines. D9 candidate: differentiate nav labels by appending "(use case)" vs "(adopter profile)".
