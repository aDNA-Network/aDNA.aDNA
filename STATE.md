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

**Phase 3 — Website v1 IN PROGRESS.** Phases 0-2 complete (41 content files). Campaign restructured: website moved from deferred Phase 5 to active Phase 3. Building AstroJS documentation site via SiteForge at `aDNA.aDNA/site/`, deploying to Vercel.

## Active Campaign

**Operation Rosetta** (`how/campaigns/campaign_rosetta/`) — build the self-referential aDNA context graph.

| Phase | Status | Missions | Content |
|-------|--------|----------|---------|
| Phase 0: Scaffold | Complete | M00 | 0 content, 10 AGENTS.md, 10 templates, 2 skills |
| Phase 1: Core Content | **Complete** | M01-M05 | 26/26 (13 concepts, 8 patterns, 5 comparisons) |
| Phase 2: Human Path | **Complete** | M06-M08 | 15/15 (9 tutorials, 6 use cases) |
| Phase 3: Website v1 | **Active** | M09-M12 | AstroJS docs site (SiteForge, Vercel) |
| Phase 4: The Who | Planned | M13-M15 | Community, adopters, glossary |
| Phase 5: The How | Planned | M16-M18 | Publishing, workshops, lattices |
| Phase 6: Website v2 | Planned | M19 | Final content sync + quality pass |

## Campaign Restructuring (2026-04-14)

Website pulled forward from deferred Phase 5 to active Phase 3. Rationale: a live site turns 41 vault-only files into a public resource immediately, and publishing reveals content gaps that vault-only authoring does not. Old Phases 3-4 renumbered to 4-5. New Phase 6 adds a final website polish pass after all content is complete.

**Key decisions**: Brand designed from scratch, Vercel hosting, site at `aDNA.aDNA/site/`, full content inventory (41 files + upstream spec/guides).

## What's Working

- Complete learning path: beginner → intermediate → advanced tutorials (9 files)
- 6 domain-specific use cases with named personas
- All tutorials are executable — readers produce concrete outcomes
- Dense cross-linking: tutorials → concepts → patterns, use cases → concepts → comparisons
- 41 total content files across Phases 1-2, all quality-gated

## Active Blockers

None. Phase 3 approved and in progress.

## Last Session (2026-04-14)

Restructured campaign: website moved from deferred Phase 5 to active Phase 3 (M09-M12). Old Phases 3-4 renumbered to 4-5, new Phase 6 for final website polish (M19). All governance docs updated. M09 mission file created with 4 objectives. No M09 objectives executed yet — ready for next session.

## Next Steps

1. **M09: Website Architecture & Branding** — design IA, create branding.json, map content to site pages
2. **M10: Site Scaffold** — run SiteForge scaffold, configure content collections
3. **M11: Content Integration** — transform vault content to site pages, create homepage
4. **M12: Quality & Launch** — run 10 quality gates, deploy to Vercel

## Next Session Prompt

> Resume Operation Rosetta in `aDNA.aDNA/`. Phase 3 (Website v1) is active. Execute M09 (Website Architecture & Branding) — mission file at `how/campaigns/campaign_rosetta/missions/mission_m09_website_architecture.md`. Four objectives all pending: (O1) design site information architecture, (O2) create `branding.json` with aDNA visual identity designed from scratch, (O3) build content mapping table (41 vault files + 4 upstream docs → site pages), (O4) identify content gaps (homepage, get-started, what-is-adna overview, 404). Site uses SiteForge.aDNA `documentation` archetype (`direct_instruction` voice register). Read `SiteForge.aDNA/how/skills/skill_site_scaffold.md` for branding.json schema. Site deploys to Vercel at `aDNA.aDNA/site/`. Full content inventory: 41 vault files + upstream spec docs from `adna/.adna/what/docs/`.
