---
type: state
created: 2026-04-13
updated: 2026-04-21
status: active
last_edited_by: agent_stanley
tags: [state, governance]
---

# Operational State

Dynamic operational snapshot for cold-start orientation. Updated each session.

## Current Phase

**Phase 7 active — M27 (D3: Navigation & IA) 4/10 cycles complete; cycle 25 next.** Phases 0-6 complete (89 vault content files + 116-page live site). Phase 6 deployed to Vercel 2026-04-16. Phase 7 executing: 100-cycle III loop across 10 themed decadals. D1 + D2 closed 2026-04-17 — persona ranker 4.0 → 4.70 across D2 (Δ +0.70, first pre/post delta in Phase 7). D3 kickoff 2026-04-18: breadcrumb trail shipped site-wide and D3 ranker baseline recorded (4.70 = D2 close, by construction). Cycle 22 (2026-04-19): pattern-page `## Next Steps` CardGrids (parallel to cycle 16's concept+tutorial rollout). Cycle 23 (2026-04-19): global `## Related Elsewhere` CardGrid rolled below Next Steps on all 29 content pages (12 concepts + 8 patterns + 9 tutorials) — 116 new lateral scent edges, operationalizing project CLAUDE.md rule #10 (connected web, not islands). Cycle 24 (2026-04-21): `← Back to {section}` back-to-index link added as in-component extension of `Breadcrumb.astro` (shared 12-route map, shared suppression) + sidebar nav audit closed 5 dead hrefs (4 Lattice Examples slugs, 1 stale Dual Audience concept entry) and 2 true 0-inbound orphans (`/how/` → Header nav, `/changelog/` → Footer); 115/115 content pages now reachable within ≤2 hops from homepage. Lighthouse held 100/100/100/100 on all 5 sample pages across all four cycles.

## Active Campaign

**Operation Rosetta** (`how/campaigns/campaign_rosetta/`) — build the self-referential aDNA context graph.

| Phase | Status | Missions | Content |
|-------|--------|----------|---------|
| Phase 0: Scaffold | Complete | M00 | 0 content, 10 AGENTS.md, 10 templates, 2 skills |
| Phase 1: Core Content | **Complete** | M01-M05 | 26/26 (13 concepts, 8 patterns, 5 comparisons) |
| Phase 2: Human Path | **Complete** | M06-M08 | 15/15 (9 tutorials, 6 use cases) |
| Phase 3: Website v1 | **Complete** | M09-M12 | 60-page site live on Vercel |
| Phase 4: The Who | **Complete** | M13-M15 | 37/37 (25 glossary + 1 index, 3 governance, 3 community, 5 adopters) |
| Phase 4.5: III Site Improvements | **Complete** | M20-M23 | Hero redesign, 37 new pages, components, OG images |
| Phase 5: The How | **Complete** | M16-M18 | 11/11 (3 publishing, 4 workshops, 4 lattice YAMLs) |
| Phase 6: Website v2 | **Complete** | M19 | How section live: 11 new pages + 4 index pages, MDX escaping fixes |
| Phase 7: 100-Cycle III Loop | **Active** | M24-M35 | D1 + D2 complete (cycles 1-20); D3 in progress (cycles 21-24 complete, 25-30 pending); D4-D10 pending |

## Phase 7 Progress

- **M24: Baseline** — Complete (97.4/98.4/100/100 average across 5 sample pages).
- **M25: D1 Accessibility Perfection** — **Complete** (cycles 1-10). All 5 sample pages 100/100/100/100. Extended axe-core across 15 additional pages: 0 violations. AAR: [aar_phase7_d1.md](how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d1.md).
- **M26: D2 Content Clarity Sprint** — **Complete** (cycles 11-20). Persona ranker 4.0 → **4.70** (Δ +0.70 — first pre/post delta). 4 new persona landings (`/educators`, `/enterprise`, `/compliance`, `/startup-first-hour`) — every D1 persona-gap item closed. 21 content files (13 concepts + 8 patterns) brought to rule-#6 compliance; 21 files (12 concepts + 9 tutorials) converted to `## Next Steps` CardGrid. AAR: [aar_phase7_d2.md](how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d2.md).
- **M27: D3 Navigation & IA** — **Active** (cycles 21-30; 4/10 complete). Mission scaffolded 2026-04-18 ([mission_m27_d3_navigation_ia.md](how/campaigns/campaign_rosetta/missions/mission_m27_d3_navigation_ia.md)); 10 objectives mapped from D2 AAR priority queue. **Cycle 21 ✅ 2026-04-18** — D3 ranker baseline (4.70) recorded; `Breadcrumb.astro` component shipped site-wide via `DocumentationLayout` (12-entry route map; semantic `nav/ol` with `aria-current="page"`; suppresses on roots/indexes). **Cycle 22 ✅ 2026-04-19** — `## Next Steps` + `<CardGrid columns={2}>` rolled onto all 8 pattern MDX files with 4 scent-carrying cards per page. **Cycle 23 ✅ 2026-04-19** — `## Related Elsewhere` CardGrids rolled below Next Steps on all 29 content pages (12 concepts + 8 patterns + 9 tutorials) with 4 cards per page split 2+2 across the other two sections — 116 new lateral scent edges operationalizing project CLAUDE.md rule #10 (connected web, not islands). **Cycle 24 ✅ 2026-04-21** — `← Back to {section}` back-to-index link extension in `Breadcrumb.astro` (shared 12-route map, shared suppression; renders on all 12 detail page types, suppresses on all 10 root/index/404 pages); sidebar nav audit closed 5 dead hrefs (4 Lattice Examples slugs needing `lattice-` prefix, 1 stale Dual Audience concept entry) + 2 true 0-inbound orphans (`/how/` added to Header nav, `/changelog/` added to Footer); `.footer-links` gained `flex-wrap: wrap` to hold G9 responsive-320 gate. Lighthouse held 100/100/100/100 on all 5 sample pages across all four cycles; 30/30 gates pass (incl. axe-core WCAG 2.1 AA + G9 responsive).

### Persona Ranker (D2 close, 2026-04-17)

| Dimension | D1 close | D2 start | D2 close | Δ (D2 start→close) |
|-----------|----------|----------|----------|---------------------|
| Findability | 4.0 | 4.0 | 4.6 | +0.6 |
| Comprehension | 3.8 | 3.8 | 4.8 | +1.0 |
| Actionability | 3.6 | 3.6 | 5.0 | +1.4 |
| Trust | 4.8 | 4.8 | 5.0 | +0.2 |
| Relevance | 3.6 | 3.6 | 4.8 | +1.2 |
| Delight | 4.0 | 4.0 | 4.0 | 0 |
| **Overall** | **4.0** | **4.0** | **4.70** | **+0.70** |

## What's Working

- Full documentation site live at https://adna-docs.vercel.app — 116 pages
- Homepage: branded aDNA banner, plain-language lede, Operational Ontology section, Context Engineering section, all with sub-glosses (D2 cycle 11)
- All three triad legs on site plus 4 persona-targeted landings: `/educators`, `/enterprise`, `/compliance`, `/startup-first-hour`
- 89 vault content files + 116 site pages
- Rule #6 (plain-language opening) satisfied on all 13 concepts and 8 patterns
- `## Next Steps` CardGrid standard on all 12 concept pages + 9 tutorial pages (D2 cycle 16)
- `GlossaryTooltip.astro` component built and demo-wired in 2 pages (rollout parked for D3)
- `scripts/reading_level.mjs` available for ongoing FKGL measurement
- Full keyboard accessibility + WCAG 2.1 AA across the site — 20+ pages tested, zero violations
- Lighthouse 100/100/100/100 on all 5 sample pages held through D2 close (no regression across 10 cycles of content work)

## Active Blockers

None. D3 open; cycle 25 is the next execution step.

## Next Steps

1. **Cycle 25 (D3 O5 — Glossary tooltip rollout on concepts)** — wire `GlossaryTooltip.astro` on first-mention of every glossary-defined term across all 12 concept MDX files (1-3 terms per file, top 5-8 most-linked canonical terms from the 25-entry glossary). Validate: Lighthouse held; axe-core confirms `aria-describedby` + focus behavior clean.
2. **Cycles 26-30** — follow the 10-objective plan in M27: tooltip rollout on tutorials (O6), Researcher persona landing (O7), tutorial-ordering + adopter decision tree (O8), reference-section linkage (O9), D3 ranker close + decadal AAR (O10).

## Pending Manual Actions

- **GitHub social preview**: Upload `site/public/images/og-default.png` at github.com/LatticeProtocol/aDNA.aDNA > Settings > Social preview
- **Vercel Git integration**: Connect repo at vercel.com > adna-docs > Settings > Git for auto-deploy (currently manual via `vercel --prod`)

## Last Session (2026-04-21 — cycle 24)

Phase 7 D3 O4 executed. Extended `site/src/components/sections/Breadcrumb.astro` to emit a subtle `← Back to {sectionLabel.toLowerCase()}` link above the existing breadcrumb `<nav>` — single component, shared 12-entry route map, shared suppression on roots/indexes/404. Pattern chosen over the mission-spec `← All X` because mass-noun section labels (Glossary, Reference, Community, Publishing, Workshops) don't pluralize cleanly; "Back to" reads naturally across all 11 sections and matches MDN/Stripe/Vercel conventions. Sidebar audit closed 5 true dead nav hrefs in `utils/navigation.ts`: 4 Lattice Examples entries missing the `lattice-` slug prefix (e.g., `/how/lattice-examples/content-pipeline` → `/how/lattice-examples/lattice-content-pipeline`) and 1 stale "Dual Audience" concept entry that duplicated the Patterns section page. Closed 2 true 0-inbound orphans: `/how/` added to `Header.astro` top nav (now on every-page chrome) and `/changelog/` added to `Footer.astro` (ditto). `.footer-links` gained `flex-wrap: wrap` + `gap: var(--space-3) var(--space-6)` to keep G9 responsive-320 green with 4 links (initial regression caught by gates and fixed before recording). Validation: `npm run build` 116 pages/2.32s/0 errors; `npm run test:gates` 30/30 pass (incl. G4 axe-core WCAG 2.1 AA + G9 responsive-320/768/1024/1440); Lighthouse 100/100/100/100 on all 5 sample pages (desktop preset — matches cycles 21+22+23 methodology); nav audit post-fix 94 hrefs / 0 dead; automated 2-hop reachability walk reaches 115/115 content pages from homepage; back-link renders on all 12 detail page types and suppresses on all 10 root/index/404 pages. Evidence: `site/evidence/cycle24/lh_{homepage,concept,tutorial,glossary,adopter}.json`. Files touched: `Breadcrumb.astro` + `navigation.ts` + `Header.astro` + `Footer.astro` + `iii_cycle_tracker.md` (cycle 24 entry + D3 schedule row 4/10) + `mission_m27_d3_navigation_ia.md` (O4 checkboxes + progress 4/10) + `STATE.md` + 5 new Lighthouse JSON artifacts.

## Next Session Prompt

> Resume Operation Rosetta in `aDNA.aDNA/`. Phase 7 D3 active — cycles 21-24 ✅ complete (breadcrumb trail + pattern-page Next Steps CardGrid + global Related Elsewhere cross-section CardGrid + back-to-index link + sidebar nav audit with 5 dead hrefs and 2 orphans closed). **Cycle 25 next** per `mission_m27_d3_navigation_ia.md` O5: wire `GlossaryTooltip.astro` on first-mention of every glossary-defined term across all 12 concept MDX files in `site/src/content/docs/` (1-3 terms per file, prioritize the 5-8 most-linked canonical terms from the 25-entry glossary). Execute per `how/skills/skill_iii_cycle.md` 7-step protocol. Validation gate: 116 pages hold; Lighthouse 100/100/100/100 on the 5 sample pages; axe-core 0 violations on tooltip `aria-describedby` + focus behavior; Playwright 30/30 pass. Commit at cycle 25 close; do not batch.
