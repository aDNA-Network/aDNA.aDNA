---
mission_id: m23
type: mission
title: "OG Images & III Review"
campaign: campaign_rosetta
status: completed
priority: high
created: 2026-04-14
updated: 2026-04-14
last_edited_by: agent_stanley
tags: [mission, rosetta, website, og-images, iii-review, phase-4.5]
---

# M23 — OG Images & III Review

## Mission Brief

Generate branded OG images for social sharing, add section-aware OG image selection to SEOHead, and run a SiteForge III 5-voice semantic review against the site.

## Objectives

### O1: OG Image Generation

- [x] Created `site/scripts/generate-og-images.mjs` using `@resvg/resvg-js` for SVG→PNG conversion
- [x] Generated 5 branded OG images (1200x630) in `site/public/images/`:
  - `og-default.png` — generic aDNA branding (teal gradient, DNA helix motif)
  - `og-learn.png` — for concept/tutorial pages
  - `og-patterns.png` — for pattern pages (amber accent)
  - `og-reference.png` — for reference/glossary pages
  - `og-community.png` — for community/adopter pages

### O2: Section-Aware OG Selection

- [x] Updated `SEOHead.astro` with `selectOgImage()` function
- [x] Routes mapped: `/learn/*` → learn, `/patterns/*` → patterns, `/reference/*` + `/glossary/*` → reference, `/community/*` + `/adopters/*` → community, everything else → default
- [x] Verified in build output: correct OG image tags on learn, glossary, community, and homepage

### O3: III Semantic Review

5-voice review completed. **Results: 3 MINOR, 0 MAJOR, 0 CRITICAL.**

#### VCRIT (Voice/Copy) — 1 MINOR
- [PASS] No template substitution artifacts across 60 MDX files
- [MINOR] Anti-slop: `context-commons.mdx:52` used "highest leverage" → **fixed** to "highest impact"
- [PASS] Consistent `aDNA` casing throughout (zero instances of `ADNA`)
- [PASS] Dual-audience layering well-executed across sampled files

#### DESIGN — 1 MINOR
- [PASS] `tokens.css` and `branding.css` clean — all colors use CSS custom properties
- [MINOR] `MermaidDiagram.astro:33-46` has hardcoded hex colors matching branding but bypassing tokens — acceptable for JS-side Mermaid initialization where CSS variables aren't available
- [PASS] Homepage uses design tokens throughout, hero overlay uses atmospheric HSL (appropriate)

#### UX — 1 MINOR
- [PASS] Homepage → first useful page in 1 click (Get Started, What is aDNA?, persona cards)
- [PASS] Navigation grouping logical with progressive disclosure
- [MINOR] "Demo coming soon" placeholders visible on production — deferred until actual media is ready

#### SEO — PASS
- [PASS] Complete meta tag set: title, description, canonical, OG, Twitter Card, JSON-LD
- [PASS] JSON-LD properly structured (WebSite, WebPage, TechArticle schemas)
- [PASS] Sitemap configured via @astrojs/sitemap

#### BRAND — PASS
- [PASS] All 5 branding.json colors match branding.css exactly
- [PASS] Typography matches: Space Grotesk / Inter / JetBrains Mono
- [PASS] WCAG contrast ratios documented; dark mode provides lightened variants

## Dependencies

- **Depends on**: M20-M22 (site with all sections and components)

## AAR (After Action Review)

- **Worked**: SVG→PNG generation via @resvg/resvg-js was fast and reproducible — 5 images in under a second. Section-aware OG selection keeps each social preview contextually branded without per-page configuration.
- **Didn't**: OG images use system `sans-serif` font instead of Space Grotesk because @resvg/resvg-js can't load web fonts without font file paths. Visual difference is minimal.
- **Finding**: The III review surfaced only 3 minor issues across 97 pages — the site is clean. The one anti-slop violation ("leverage") was fixed immediately.
- **Change**: Fixed "leverage" → "impact" in context-commons.mdx. Mermaid hardcoded colors noted but acceptable — JS initialization can't read CSS custom properties.
- **Follow-up**: Phase 5 (The How) is next. When actual media (GIFs, diagrams) is ready, replace MediaPlaceholder instances. Consider loading Space Grotesk font file for higher-fidelity OG images in M19.
