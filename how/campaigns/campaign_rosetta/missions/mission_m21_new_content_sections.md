---
mission_id: m21
type: mission
title: "New Content Sections"
campaign: campaign_rosetta
status: completed
priority: high
created: 2026-04-14
updated: 2026-04-14
last_edited_by: agent_stanley
tags: [mission, rosetta, website, content, phase-4.5]
---

# M21 — New Content Sections

## Mission Brief

Add Phase 4 content (glossary, community, adopters) to the Astro documentation site as navigable sections with proper routing, sidebar navigation, and index pages.

## Objectives

### O1: Glossary Section (25 entries + index)

- [x] Transform 25 `what/glossary/glossary_*.md` vault files → `site/src/content/docs/glossary-*.mdx`
- [x] Convert wikilinks to site-relative markdown links
- [x] Categorized index page at `/glossary/` (Core Architecture, Governance & Metadata, Operations, Knowledge & Coordination)
- [x] Dynamic route at `/glossary/[...slug].astro`
- [x] Sidebar nav with 4 subgroups matching glossary categories

### O2: Community Section (4 pages + index)

- [x] Transform 3 `who/community/community_*.md` + 1 `who/governance/governance_contribution_standards.md` → 4 MDX files
- [x] Index page at `/community/` with card grid
- [x] Dynamic route at `/community/[...slug].astro`
- [x] Sidebar nav group with Adopter Personas subgroup

### O3: Adopter Personas (5 pages + index)

- [x] Transform 5 `who/adopters/adopter_*.md` → `site/src/content/docs/adopter-*.mdx`
- [x] Index page at `/adopters/` with card grid
- [x] Dynamic route at `/adopters/[...slug].astro`
- [x] Nested under Community nav group as subgroup

### O4: Navigation Updates

- [x] Header: added Glossary and Community to top nav bar (6 items total)
- [x] Sidebar: added Glossary group (4 subgroups, 25 entries) + Community group (4 items + Adopter Personas subgroup with 5 entries)

## Build Verification

- Build: 97 pages (up from 60), 2.21s, zero errors
- All routes verified returning HTTP 200: `/glossary/`, `/glossary/glossary-triad`, `/community/`, `/community/community-roles`, `/adopters/`, `/adopters/adopter-solo-developer`

## Dependencies

- **Depends on**: M12 (site live), M15 (glossary content), M13 (community content), M14 (adopter content)

## AAR (After Action Review)

- **Worked**: Reusing the existing `docs` collection with `section` field routing avoided schema changes — all 34 new content files fit the same `docs` schema with different `section` values. Build went from 60 → 97 pages with zero config changes to `content.config.ts`.
- **Didn't**: Wikilink transformation across 25 glossary files was mechanical and repetitive — a script would have been faster. Delegated to a subagent which handled it well.
- **Finding**: The `section` field pattern scales well — adding new content types doesn't require new collections, just new section values and route directories. The existing `getDocsBySection()` helper handled all 3 new sections without modification.
- **Change**: Added Contribution Standards as a 4th community page (derived from `governance_contribution_standards.md`) since it's community-facing content that belongs in the community section rather than a governance-only reference.
- **Follow-up**: M22 (component polish) — enhanced card grid with icons for persona cards, media placeholders as standalone component.
