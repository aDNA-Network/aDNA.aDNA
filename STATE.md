---
type: state
created: 2026-04-13
updated: 2026-04-22
status: active
last_edited_by: agent_rosetta
tags: [state, governance]
---

# Operational State

Dynamic operational snapshot for cold-start orientation. Updated each session.

## Current Phase

**Phase 7 active — M27 (D3: Navigation & IA) 6/10 cycles complete; cycle 27 next.** Phases 0-6 complete (89 vault content files + 116-page live site). Phase 6 deployed to Vercel 2026-04-16. Phase 7 executing: 100-cycle III loop across 10 themed decadals. D1 + D2 closed 2026-04-17 — persona ranker 4.0 → 4.70 across D2 (Δ +0.70, first pre/post delta in Phase 7). D3 kickoff 2026-04-18: breadcrumb trail shipped site-wide and D3 ranker baseline recorded (4.70 = D2 close, by construction). Cycle 22 (2026-04-19): pattern-page `## Next Steps` CardGrids. Cycle 23 (2026-04-19): global `## Related Elsewhere` CardGrid rolled below Next Steps on all 29 content pages. Cycle 24 (2026-04-21): `← Back to {section}` back-to-index link + sidebar nav audit. Cycle 25 (2026-04-21): `GlossaryTooltip.astro` rollout across all 12 concept MDX files — 23 new tooltips. **Cycle 26 (2026-04-22, bundled): (a) `GlossaryTooltip.astro` rollout across tutorial MDX files — 13 new tooltips across 6 newly-wired files (7/9 tutorials wired; 2 tutorials intentionally 0-wrap under "do not invent content" rule — `build-a-lattice.mdx` + `federate-a-vault.mdx` have no glossary-backed prose first-mentions). (b) Theme-persistence fix — IIFE moved to `<head>`, idempotent `classList.toggle`, `astro:page-load` + `prefers-color-scheme` listeners; FOUC closed and `ClientRouter` persistence restored. (c) Homepage hero tagline replaced with user-directed "aDNA is an integrated standard for knowledge graph driven context engineering." + plain-language sub-gloss on hero-subtitle (dual-audience posture).** Lighthouse held 100/100/100/100 on all 5 sample pages across all six cycles.

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
| Phase 7: 100-Cycle III Loop | **Active** | M24-M35 | D1 + D2 complete (cycles 1-20); D3 in progress (cycles 21-26 complete, 27-30 pending); D4-D10 pending |

## Phase 7 Progress

- **M24: Baseline** — Complete (97.4/98.4/100/100 average across 5 sample pages).
- **M25: D1 Accessibility Perfection** — **Complete** (cycles 1-10). All 5 sample pages 100/100/100/100. Extended axe-core across 15 additional pages: 0 violations. AAR: [aar_phase7_d1.md](how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d1.md).
- **M26: D2 Content Clarity Sprint** — **Complete** (cycles 11-20). Persona ranker 4.0 → **4.70** (Δ +0.70 — first pre/post delta). 4 new persona landings (`/educators`, `/enterprise`, `/compliance`, `/startup-first-hour`) — every D1 persona-gap item closed. 21 content files (13 concepts + 8 patterns) brought to rule-#6 compliance; 21 files (12 concepts + 9 tutorials) converted to `## Next Steps` CardGrid. AAR: [aar_phase7_d2.md](how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d2.md).
- **M27: D3 Navigation & IA** — **Active** (cycles 21-30; 6/10 complete). Mission scaffolded 2026-04-18 ([mission_m27_d3_navigation_ia.md](how/campaigns/campaign_rosetta/missions/mission_m27_d3_navigation_ia.md)); 10 objectives mapped from D2 AAR priority queue. **Cycle 21 ✅ 2026-04-18** — D3 ranker baseline (4.70); `Breadcrumb.astro` shipped site-wide. **Cycle 22 ✅ 2026-04-19** — `## Next Steps` + `<CardGrid columns={2}>` on all 8 pattern MDX files. **Cycle 23 ✅ 2026-04-19** — `## Related Elsewhere` CardGrids on all 29 content pages (116 lateral edges). **Cycle 24 ✅ 2026-04-21** — `← Back to {section}` link + sidebar audit (5 dead hrefs + 2 orphans closed). **Cycle 25 ✅ 2026-04-21** — `GlossaryTooltip.astro` rollout across 11 new concept MDX files (12th retained as pre-wired demo); 23 new tooltips. **Cycle 26 ✅ 2026-04-22 (bundled)** — (a) `GlossaryTooltip.astro` rollout across tutorial MDX files: 13 new tooltips on 6 newly-wired files (`design-a-mission`, `extend-the-ontology`, `navigate-a-vault`, `question-test`, `run-a-campaign`, `write-a-context-file`); `first-claude-md.mdx` = retained demo; `build-a-lattice.mdx` + `federate-a-vault.mdx` = intentionally 0-wrap (no glossary-backed prose first-mentions, "do not invent content" rule). (b) Theme-persistence fix in `site/src/layouts/BaseLayout.astro`: IIFE moved to `<head>`, idempotent `classList.toggle('dark', dark)`, `astro:page-load` + `prefers-color-scheme change` listeners added; FOUC closed, `ClientRouter` persistence restored — closes `how/backlog/idea_theme_persistence_bug.md`. (c) Homepage hero tagline replaced at user direction with "aDNA is an integrated standard for knowledge graph driven context engineering." + plain-language sub-gloss ("A shared folder layout and metadata spec so AI agents land oriented — no re-learning your project every time.") on `hero-subtitle` to preserve dual-audience on-ramp (Standing Order #7). Lighthouse held 100/100/100/100 on all 5 sample pages across all six cycles; 30/30 gates pass.

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
- `GlossaryTooltip.astro` component rolled across all 12 concept pages + 7 of 9 tutorial pages — 39 tooltips total site-wide (concept jargon + tutorial first-mentions self-define inline with `aria-describedby` + keyboard focus); 2 tutorials intentionally 0-wrap under "do not invent content" rule (`build-a-lattice.mdx`, `federate-a-vault.mdx`)
- Light/dark theme: no FOUC on cold load; `.dark` class persists across `ClientRouter` navigation; `prefers-color-scheme` change tracked live mid-session (cycle 26)
- Homepage hero leads with "aDNA is an integrated standard for knowledge graph driven context engineering." + plain-language sub-gloss (cycle 26)
- `scripts/reading_level.mjs` available for ongoing FKGL measurement
- Full keyboard accessibility + WCAG 2.1 AA across the site — 20+ pages tested, zero violations
- Lighthouse 100/100/100/100 on all 5 sample pages held through D2 close (no regression across 10 cycles of content work)

## Active Blockers

None. The theme-persistence bug flagged for cycle 26 open was fixed in cycle 26 and the backlog idea marked `status: resolved`.

## Next Steps

1. **Cycle 27 (D3 O7 — Researcher persona landing)** — create `site/src/pages/researchers/index.astro` (or `/researcher-reading-path/`) as a sibling to `/educators`, `/enterprise`, `/startup-first-hour`, `/compliance`. Ordered reading path through FAIR metadata, lattice YAML examples, context-engineering content, convergence model. Cross-link from `adopter-researcher.mdx` Related list. Validation gate: Lighthouse A11y/BP/SEO = 100; Perf in 88-95 band acceptable (DOM-density carry-forward).
2. **Cycles 28-30** — follow the remaining 3 objectives in M27: tutorial-ordering + adopter decision tree (O8), reference-section linkage (O9), D3 ranker close + decadal AAR (O10).

## Pending Manual Actions

- **GitHub social preview**: Upload `site/public/images/og-default.png` at github.com/LatticeProtocol/aDNA.aDNA > Settings > Social preview
- **Vercel Git integration**: Connect repo at vercel.com > adna-docs > Settings > Git for auto-deploy (currently manual via `vercel --prod`)

## Last Session (2026-04-22 — cycle 26)

Phase 7 D3 O6 executed plus two bundled polish items at user direction. **(1) Tutorial tooltip rollout**: wrapped `GlossaryTooltip.astro` across 6 newly-wired tutorial MDX files in `site/src/content/guides/` — `design-a-mission.mdx` (1 wrap: session), `extend-the-ontology.mdx` (3: agents-md, question-test, triad), `navigate-a-vault.mdx` (3: agents-md, session, governance-file), `question-test.mdx` (1: triad; self-referential question-test wrap skipped per cycle-25 governance-files precedent), `run-a-campaign.mdx` (2: mission, session), `write-a-context-file.mdx` (3: context-library, frontmatter, agents-md). `first-claude-md.mdx` retained as pre-existing 2-wrap demo. `build-a-lattice.mdx` + `federate-a-vault.mdx` intentionally 0-wrap (no glossary-backed prose first-mentions — "lattice"/"federation"/"FAIR" absent from the 25-entry `/glossary/`; cycle-25 "do not invent content to force a wrap" rule honored). Total: 13 new tooltips on 7/9 tutorials. **(2) Theme-persistence fix** (`site/src/layouts/BaseLayout.astro`): moved the theme-apply IIFE from end-of-`<body>` into `<head>` (same `is:inline` pattern as the `no-js` remove script); rewrote as idempotent `document.documentElement.classList.toggle('dark', dark)` (both add- and remove-dark branches fire); added `document.addEventListener('astro:page-load', applyTheme)` so `ClientRouter` navigation re-evaluates theme; added `matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme)` for live OS-theme tracking. Stale end-of-`<body>` script block removed. Closes `how/backlog/idea_theme_persistence_bug.md`. **(3) Homepage hero tagline** (`site/src/pages/index.astro:89-90`): `hero-lead` replaced with "aDNA is an integrated standard for knowledge graph driven context engineering." (user-directed verbatim); `hero-subtitle` rewritten as "A shared folder layout and metadata spec so AI agents land oriented — no re-learning your project every time." (plain-language sub-gloss, preserves dual-audience on-ramp per Standing Order #7). Validation: `npm run build` 116 pages / 2.44s / 0 errors; `npm run test:gates` 30/30 pass (G4 axe-core WCAG 2.1 AA zero violations on homepage (new hero), concept, tutorial (tooltip-bearing), pattern, 404); Lighthouse 100/100/100/100 on all 5 sample pages after cache warm-up (desktop preset — matches cycles 21-25 methodology); theme-smoke structural check via built `dist/index.html` confirms 4× `applyTheme` references in `<head>`, 0× in `<body>`, all three listeners wired, `ClientRouter` intact. Evidence: `site/evidence/cycle26/lh_{homepage,concept,tutorial,glossary,adopter}.json`. Files touched: 6 tutorial MDX files + `site/src/layouts/BaseLayout.astro` + `site/src/pages/index.astro` + `iii_cycle_tracker.md` (cycle 26 entry + D3 schedule row 6/10) + `mission_m27_d3_navigation_ia.md` (O6 checkboxes + progress 6/10) + `STATE.md` + `how/backlog/idea_theme_persistence_bug.md` (status: resolved) + 5 new Lighthouse JSON artifacts + session file.

## Next Session Prompt

> Resume Operation Rosetta in `aDNA.aDNA/`. Phase 7 D3 active — cycles 21-26 ✅ complete (breadcrumb trail + pattern-page Next Steps CardGrid + global Related Elsewhere cross-section CardGrid + back-to-index link + sidebar nav audit + glossary tooltip rollout across all 12 concept MDX files + 7/9 tutorial MDX files + theme-persistence fix + homepage hero tagline replacement). **Open cycle 27** per `mission_m27_d3_navigation_ia.md` O7: create `site/src/pages/researchers/index.astro` (or `/researcher-reading-path/`) — a sibling to `/educators`, `/enterprise`, `/compliance`, `/startup-first-hour`. Ordered reading path through FAIR metadata, lattice YAML examples, context-engineering content, convergence model. Cross-link from `adopter-researcher.mdx` Related list. Lean on the existing persona-landing templates (cycle-12/13 shape) — section headers → ordered cards → adopter/tutorial handoffs. Execute per `how/skills/skill_iii_cycle.md` 7-step protocol. Validation gate: Lighthouse A11y/BP/SEO = 100 on the new page and 4 existing sample pages; Perf in 88-95 band acceptable on the new page (DOM-density carry-forward from persona-landing shape); Playwright 30/30 pass (G4 axe-core WCAG 2.1 AA). Commit at cycle 27 close; do not batch. Zero-tooltip carry-forward from cycle 26 (`build-a-lattice.mdx`, `federate-a-vault.mdx`) stays open until `/glossary/` grows to cover "lattice" / "federation" / "FAIR" — not blocking.
