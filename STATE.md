---
type: state
created: 2026-04-13
updated: 2026-04-14
status: active
last_edited_by: agent_stanley
tags: [state, governance]
---

# Operational State

Dynamic operational snapshot for cold-start orientation. Updated each session.

## Current Phase

**Phase 3 — Website v1 IN PROGRESS.** Phases 0-2 complete (41 content files). M09 (Website Architecture & Branding) complete. M10 (Site Scaffold & Content Collections) complete — Astro 6 project at `site/` builds cleanly with 14 static pages. Next: M11 (Content Integration).

## Active Campaign

**Operation Rosetta** (`how/campaigns/campaign_rosetta/`) — build the self-referential aDNA context graph.

| Phase | Status | Missions | Content |
|-------|--------|----------|---------|
| Phase 0: Scaffold | Complete | M00 | 0 content, 10 AGENTS.md, 10 templates, 2 skills |
| Phase 1: Core Content | **Complete** | M01-M05 | 26/26 (13 concepts, 8 patterns, 5 comparisons) |
| Phase 2: Human Path | **Complete** | M06-M08 | 15/15 (9 tutorials, 6 use cases) |
| Phase 3: Website v1 | **Active** | M09-M12 | M09-M10 complete, M11-M12 pending |
| Phase 4: The Who | Planned | M13-M15 | Community, adopters, glossary |
| Phase 5: The How | Planned | M16-M18 | Publishing, workshops, lattices |
| Phase 6: Website v2 | Planned | M19 | Final content sync + quality pass |

## M10 Deliverables

- **Astro 6 project**: `aDNA.aDNA/site/` — complete scaffold with documentation archetype layout
- **4 content collections**: docs (MDX), guides (MDX), reference (MDX), changelog (MD) — all with Zod schemas
- **3-column layout**: sidebar nav (16rem) + main content (65ch) + TOC panel (14rem), responsive breakpoints
- **18 page routes**: matching M09 sitemap — homepage, get-started, 7 section indexes, 6 dynamic collection routes, changelog, 404
- **Design system**: two-layer CSS tokens (tokens.css + branding.css), Tailwind v4, Space Grotesk/Inter/JetBrains Mono
- **Components**: SidebarNav with 4 groups and collapsible subgroups, TOCPanel with scroll spy, Callout, CodeBlock, CardGrid, PrevNextNav
- **Build**: 14 pages built in 793ms, sitemap generated, Vercel adapter configured

## What's Working

- Complete learning path: beginner → intermediate → advanced tutorials (9 files)
- 6 domain-specific use cases with named personas
- All tutorials are executable — readers produce concrete outcomes
- Dense cross-linking: tutorials → concepts → patterns, use cases → concepts → comparisons
- 41 total content files across Phases 1-2, all quality-gated
- Site architecture designed with clear collection mapping and navigation ordering
- Clean Astro 6 build with documentation archetype layout, branded design tokens, responsive sidebar

## Active Blockers

None. M11 ready to execute.

## Last Session (2026-04-14)

Executed M10 (Site Scaffold & Content Collections) — all 8 objectives complete. Created ~45 files in `site/` directory: Astro 6 project config, CSS design system (tokens + branding), 4 content collections with Zod schemas, BaseLayout + DocumentationLayout (3-column grid), 6 documentation components (SidebarNav, TOCPanel, CodeBlock, PrevNextNav, Callout, CardGrid), 18 page routes, 3 utility modules, static assets. Build produces 14 static pages. Two Astro 6 API issues fixed during build verification: `render(entry)` from `astro:content` replaces `entry.render()`, Astro components cannot use `client:load`.

## Next Steps

1. **M11: Content Integration** — transform 49 vault content files to site pages, rewrite wikilinks to site URLs, author P0 gap pages (homepage copy, what-is-adna, get-started), frontmatter mapping per content mapping table
2. **M12: Quality Gates & Launch** — run quality gates, verify all links, deploy to Vercel
3. After Phase 3: Phase 4 (Community, Adopters, Glossary)

## Next Session Prompt

> Resume Operation Rosetta in `aDNA.aDNA/`. Phase 3 (Website v1) is active. Execute M11 (Content Integration). The Astro 6 site scaffold is complete at `aDNA.aDNA/site/` — it builds cleanly with empty collections. Content mapping is at `how/campaigns/campaign_rosetta/missions/artifacts/m09_content_mapping.md` — 49 files mapped (13 concepts, 8 patterns, 5 comparisons, 9 tutorials, 6 use cases, 8 reference docs). Transform vault Markdown files to site MDX using the frontmatter mapping rules in the content mapping doc. Key transformations: (1) rewrite `[[wikilinks]]` to `[text](/site/url)` links, (2) map vault frontmatter to collection schemas (concept → doc with section field, tutorial → guide with difficulty enum, etc.), (3) strip vault-only fields (last_edited_by, _migration_version), (4) add SEO fields (title, description). Also author 3 P0 gap pages: enhanced homepage hero copy, fleshed-out "What is aDNA?" overview, fleshed-out "Get Started" quickstart. The placeholder content files can be removed once real content is in place. Target: `npm run build` produces all 57 pages with zero broken links.
