---
type: artifact
mission: m09
campaign: campaign_rosetta
title: "Content Gap Identification"
created: 2026-04-14
updated: 2026-04-14
last_edited_by: agent_stanley
tags: [artifact, gaps, website, content]
status: completed
---

# Content Gap Identification

Pages and assets the site requires that do not yet exist in the vault.

## P0 — Content pages (must author in M11)

### Homepage hero copy
- **What**: Hero section with value proposition, problem statement, and CTA
- **Source material**: `README.md` lines 1-53 ("aDNA in 60 Seconds" + "The Problem" sections)
- **Format**: Standalone Astro page (`src/pages/index.astro`) with hardcoded copy
- **Notes**: Distill to ~150 words. Hero headline + 2-3 sentence sub-headline + "Get Started" CTA button

### "What is aDNA?" overview page
- **What**: Comprehensive overview at `/learn/what-is-adna`
- **Source material**: `README.md` "The aDNA Paradigm" section + `concept_triad.md` + `concept_ontology.md`
- **Format**: Standalone Astro page or MDX in docs collection
- **Notes**: This is the first page most visitors will read. Must pass dual-audience test. Covers triad, question test, governance files, deployment forms. Links out to individual concept pages for depth.

### "Get Started" quickstart page
- **What**: Quickstart guide at `/get-started`
- **Source material**: `what/docs/tool_setup_guide.md` + `README.md` Quick Start section + links to beginner tutorials
- **Format**: Standalone Astro page or MDX in docs collection
- **Notes**: 3-step path: (1) clone/fork, (2) open in Obsidian or editor, (3) run first session with AI agent. Links to `tutorial_first_claude_md` as immediate next step.

## P1 — Design assets (create during M10-M11)

### 404 page content
- **What**: Brand-consistent error page at `/404`
- **Format**: Standalone Astro page
- **Notes**: Brief message, link to homepage and Learn section. Can use brand teal color and a subtle DNA/triad motif.

### Favicon SVG
- **What**: Brand-colored favicon in SVG format
- **Format**: `public/favicon.svg`
- **Notes**: Should reference DNA/helix/triad motif in brand teal. Simple enough to render at 16x16.

### Open Graph image
- **What**: Social sharing card (1200x630)
- **Format**: `public/images/og-default.png`
- **Notes**: Brand colors, project name, tagline. Used as default `og:image` for pages without custom images. SiteForge scaffold creates a placeholder but a branded version is needed.

## P2 — Layout pages (addressed in M10 scaffold)

### Section index pages
- **What**: Card-grid landing pages for each section
- **Pages**: `/learn/`, `/learn/concepts/`, `/learn/tutorials/`, `/learn/comparisons/`, `/use-cases/`, `/patterns/`, `/reference/`
- **Format**: Standalone Astro pages with card-grid component
- **Notes**: Each index renders cards for all items in the section. Tutorials index groups cards by difficulty level (beginner/intermediate/advanced). These are layout pages, not content — created during scaffold.

## P3 — Optional for v1

### Changelog initial entry
- **What**: "v1.0.0 — Site launch" placeholder
- **Format**: MDX in changelog collection
- **Notes**: Optional. Can be added at deploy time in M12.

## Summary

| Priority | Count | Owner |
|----------|-------|-------|
| P0 | 3 pages | M11 (Content Integration) |
| P1 | 3 assets | M10-M11 |
| P2 | 7 index pages | M10 (Site Scaffold) |
| P3 | 1 entry | M12 (optional) |
