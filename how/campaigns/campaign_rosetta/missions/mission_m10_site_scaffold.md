---
mission_id: m10
campaign: campaign_rosetta
type: mission
title: "M10: Site Scaffold & Content Collections"
status: completed
phase: 3
owner: stanley
created: 2026-04-14
updated: 2026-04-14
last_edited_by: agent_stanley
tags: [mission, website, astro6, scaffold, siteforge]
---

# M10: Site Scaffold & Content Collections

## Objective

Generate a complete Astro 6 documentation site scaffold at `aDNA.aDNA/site/` using SiteForge's documentation archetype specification. Produce a clean `npm run build` with empty content collections ready for M11 content integration.

## Dependencies

- M09 (completed) — site IA, branding.json, content mapping, gap list

## Objectives

| # | Objective | Status | Files |
|---|-----------|--------|-------|
| O1 | Project skeleton and config | **completed** | package.json, astro.config.mjs, tsconfig.json, .env.example |
| O2 | Design tokens, branding, global styles | **completed** | tokens.css, branding.css, global.css |
| O3 | Content collections and placeholders | **completed** | content.config.ts, 4 placeholder files |
| O4 | Shared components | **completed** | SEOHead, Header, Footer, SocialLinks, DarkModeToggle |
| O5 | Layouts | **completed** | BaseLayout, DocumentationLayout (3-column) |
| O6 | Documentation-specific components | **completed** | SidebarNav, TOCPanel, CodeBlock, PrevNextNav, Callout, CardGrid |
| O7 | Page routes and index pages | **completed** | 18 page files matching M09 sitemap |
| O8 | Utilities and static assets | **completed** | seo.ts, collections.ts, navigation.ts, favicon, robots.txt, README |

## Design Decisions

1. **Routing follows M09 IA** — `/learn/concepts/[slug]` not generic `/docs/[slug]`. The `docs` collection uses a `section` field to discriminate routing.
2. **SearchBox deferred to v2** — requires search index infrastructure (Pagefind).
3. **VersionSelector + VersionBadge deferred** — only v1 content exists.
4. **Astro 6 `render()` import** — uses `import { render } from 'astro:content'` per Astro 6 API (not `entry.render()`).
5. **DarkModeToggle is an Astro component** — no `client:load` directive; uses inline `<script>` for interactivity.

## Build Verification

- `npm install` — 559 packages, no errors
- `npm run build` — 14 pages built in 793ms, zero errors
- All static pages generated at expected routes
- Sitemap index created by `@astrojs/sitemap`
- Draft placeholders correctly excluded from dynamic routes

## AAR

- **Worked**: SiteForge documentation archetype spec was comprehensive enough to scaffold without a reference implementation directory. Token/branding CSS system clean and well-structured. Astro 6 content collections with glob() loaders work well.
- **Didn't**: Initial build failed on two Astro 6 API changes — `entry.render()` → `render(entry)` from `astro:content`, and Astro components cannot use `client:load` hydration directive. Both fixed quickly.
- **Finding**: The SiteForge reference archetype (`personal_portfolio`) still uses Astro 5 patterns (`entry.render()`). Should be updated to Astro 6 API.
- **Change**: Future SiteForge scaffold work should always use `render(entry)` from `astro:content` and avoid hydration directives on `.astro` components.
- **Follow-up**: M11 (Content Integration) — transform 49 vault content files into site pages.
