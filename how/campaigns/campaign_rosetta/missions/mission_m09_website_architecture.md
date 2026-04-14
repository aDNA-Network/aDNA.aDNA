---
mission_id: m09
type: mission
title: "Website Architecture & Branding"
campaign: campaign_rosetta
phase: 3
status: active
owner: agent_stanley
created: 2026-04-14
updated: 2026-04-14
last_edited_by: agent_stanley
tags: [mission, website, branding, architecture, siteforge]
---

# M09: Website Architecture & Branding

Plan the aDNA documentation site and create all inputs SiteForge needs before scaffolding.

## Context

Phase 3 (Website v1) builds an AstroJS documentation site from the 41 content files created in Phases 1-2, plus upstream spec documents from the `adna/` repo. The site uses the SiteForge.aDNA build system (`documentation` archetype), deploys to Vercel, and lives at `aDNA.aDNA/site/`.

## Objectives

### O1: Information Architecture ▸ pending

Define the sitemap and navigation structure. Map all vault content + upstream docs to site sections and pages.

**Target IA**:
```
Homepage (hero + value prop + CTA)
├── Learn/
│   ├── What is aDNA? (overview, distilled from README)
│   ├── Concepts/ (13 files)
│   ├── Tutorials/ (9 files, grouped by difficulty)
│   └── Comparisons/ (5 files)
├── Use Cases/ (6 files)
├── Patterns/ (8 files)
├── Reference/
│   ├── Specification (from upstream adna_standard.md)
│   ├── Design Rationale (from upstream adna_design.md)
│   ├── Agent-First Guide (from upstream agent_first_guide.md)
│   └── Migration Guide (from upstream migration_guide.md)
└── Get Started (quickstart, links to beginner tutorials)
```

**Output**: Site IA document with page inventory

### O2: Branding ▸ pending

Design aDNA's visual identity and create `branding.json` per SiteForge schema.

- Entity type: `project`
- Archetype: `documentation`
- Voice register: `direct_instruction`
- Colors: primary, accent, dark/light variants (design from scratch)
- Typography: display, body, mono fonts
- Social links: GitHub repo

**Output**: `branding.json` at `aDNA.aDNA/site/branding.json`

### O3: Content Mapping ▸ pending

Create a mapping document listing every vault file → site page with transformation notes.

- 13 concepts → `/learn/concepts/<slug>`
- 9 tutorials → `/learn/tutorials/<slug>` (grouped by difficulty)
- 8 patterns → `/patterns/<slug>`
- 5 comparisons → `/learn/comparisons/<slug>`
- 6 use cases → `/use-cases/<slug>`
- 4 upstream docs → `/reference/<slug>`

**Output**: Content mapping table

### O4: Gap Identification ▸ pending

Identify content that must be created for the site but doesn't exist yet.

Known gaps:
- Homepage hero copy (distill from README)
- "Get Started" quickstart page
- "What is aDNA?" overview page
- 404 page content

**Output**: Gap list with priority assignments

## Dependencies

- Phase 2 complete (all 41 content files exist)
- SiteForge.aDNA `documentation` archetype available

## Key References

- `SiteForge.aDNA/CLAUDE.md` — build system governance
- `SiteForge.aDNA/how/skills/skill_site_scaffold.md` — scaffold skill (branding.json schema)
- `aDNA.aDNA/README.md` — homepage copy source
- `adna/README.md` — upstream public-facing copy
