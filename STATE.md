---
type: state
created: 2026-04-13
updated: 2026-04-21
status: active
last_edited_by: agent_rosetta
tags: [state, governance]
---

# Operational State

Dynamic operational snapshot for cold-start orientation. Updated each session.

## Current Phase

**Phase 7 active — M27 (D3: Navigation & IA) 5/10 cycles complete; cycle 26 next.** Phases 0-6 complete (89 vault content files + 116-page live site). Phase 6 deployed to Vercel 2026-04-16. Phase 7 executing: 100-cycle III loop across 10 themed decadals. D1 + D2 closed 2026-04-17 — persona ranker 4.0 → 4.70 across D2 (Δ +0.70, first pre/post delta in Phase 7). D3 kickoff 2026-04-18: breadcrumb trail shipped site-wide and D3 ranker baseline recorded (4.70 = D2 close, by construction). Cycle 22 (2026-04-19): pattern-page `## Next Steps` CardGrids. Cycle 23 (2026-04-19): global `## Related Elsewhere` CardGrid rolled below Next Steps on all 29 content pages — 116 new lateral scent edges. Cycle 24 (2026-04-21): `← Back to {section}` back-to-index link + sidebar nav audit (5 dead hrefs closed, 2 orphans closed; 115/115 content pages reachable in ≤2 hops). **Cycle 25 (2026-04-21): `GlossaryTooltip.astro` rollout across all 12 concept MDX files — 23 new tooltips across 11 previously-unwired files (average 2.1 per file, per-file cap of 3 respected). Every wrap uses prose first-mention only — zero inside headings, tables, code blocks, or `CardGrid` card-descriptions. 9 canonical glossary slugs covered (`question-test`, `bare-triad`, `embedded-triad`, `governance-file`, `agents-md`, `context-library`, `frontmatter`, `mission`, `skill`, `ontology-extension`, `triad`) — every wrap → real `/glossary/glossary-{slug}` target.** Lighthouse held 100/100/100/100 on all 5 sample pages across all five cycles.

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
| Phase 7: 100-Cycle III Loop | **Active** | M24-M35 | D1 + D2 complete (cycles 1-20); D3 in progress (cycles 21-25 complete, 26-30 pending); D4-D10 pending |

## Phase 7 Progress

- **M24: Baseline** — Complete (97.4/98.4/100/100 average across 5 sample pages).
- **M25: D1 Accessibility Perfection** — **Complete** (cycles 1-10). All 5 sample pages 100/100/100/100. Extended axe-core across 15 additional pages: 0 violations. AAR: [aar_phase7_d1.md](how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d1.md).
- **M26: D2 Content Clarity Sprint** — **Complete** (cycles 11-20). Persona ranker 4.0 → **4.70** (Δ +0.70 — first pre/post delta). 4 new persona landings (`/educators`, `/enterprise`, `/compliance`, `/startup-first-hour`) — every D1 persona-gap item closed. 21 content files (13 concepts + 8 patterns) brought to rule-#6 compliance; 21 files (12 concepts + 9 tutorials) converted to `## Next Steps` CardGrid. AAR: [aar_phase7_d2.md](how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d2.md).
- **M27: D3 Navigation & IA** — **Active** (cycles 21-30; 5/10 complete). Mission scaffolded 2026-04-18 ([mission_m27_d3_navigation_ia.md](how/campaigns/campaign_rosetta/missions/mission_m27_d3_navigation_ia.md)); 10 objectives mapped from D2 AAR priority queue. **Cycle 21 ✅ 2026-04-18** — D3 ranker baseline (4.70); `Breadcrumb.astro` shipped site-wide. **Cycle 22 ✅ 2026-04-19** — `## Next Steps` + `<CardGrid columns={2}>` on all 8 pattern MDX files. **Cycle 23 ✅ 2026-04-19** — `## Related Elsewhere` CardGrids on all 29 content pages (116 lateral edges). **Cycle 24 ✅ 2026-04-21** — `← Back to {section}` link + sidebar audit (5 dead hrefs + 2 orphans closed). **Cycle 25 ✅ 2026-04-21** — `GlossaryTooltip.astro` rollout across 11 new concept MDX files (12th retained as pre-wired demo); 23 new tooltips on first-mention of 10 canonical terms from the 25-entry `/glossary/`; per-file range 1-3, average 2.1. Every wrap lands in prose only (no headings, tables, code blocks, or `CardGrid` descriptions — the one shape that breaks axe-core). Lighthouse held 100/100/100/100 on all 5 sample pages across all five cycles; 30/30 gates pass (incl. G4 axe-core WCAG 2.1 AA on tooltip-bearing concept page, G9 responsive).

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
- `GlossaryTooltip.astro` component rolled across all 12 concept pages (24 tooltips total) — concept jargon now self-defines inline with `aria-describedby` + keyboard focus; tutorial rollout is next (cycle 26)
- `scripts/reading_level.mjs` available for ongoing FKGL measurement
- Full keyboard accessibility + WCAG 2.1 AA across the site — 20+ pages tested, zero violations
- Lighthouse 100/100/100/100 on all 5 sample pages held through D2 close (no regression across 10 cycles of content work)

## Active Blockers

None. D3 open; cycle 26 is the next execution step.

## Next Steps

1. **Cycle 26 (D3 O6 — Glossary tooltip rollout on tutorials)** — wire `GlossaryTooltip.astro` on first-mention canonical terms across the 9 tutorial MDX files in `site/src/content/guides/` (1-3 terms per file; `first-claude-md.mdx` already demo-wired). Same mechanics as cycle 25: prose-only first-mentions, per-file cap of 3, no wraps in `CardGrid` card-descriptions. Validate: Lighthouse held; axe-core clean.
2. **Cycles 27-30** — follow the 10-objective plan in M27: Researcher persona landing (O7), tutorial-ordering + adopter decision tree (O8), reference-section linkage (O9), D3 ranker close + decadal AAR (O10).

## Pending Manual Actions

- **GitHub social preview**: Upload `site/public/images/og-default.png` at github.com/LatticeProtocol/aDNA.aDNA > Settings > Social preview
- **Vercel Git integration**: Connect repo at vercel.com > adna-docs > Settings > Git for auto-deploy (currently manual via `vercel --prod`)

## Last Session (2026-04-21 — cycle 25)

Phase 7 D3 O5 executed. Rolled `site/src/components/sections/GlossaryTooltip.astro` across all 11 previously-unwired concept MDX files (convergence.mdx = pre-wired demo, retained): `triad.mdx`, `agentic-literacy.mdx`, `context-commons.mdx`, `context-optimization.mdx`, `fair-metadata.mdx`, `governance-files.mdx`, `knowledge-graph.mdx`, `lattice-composition.mdx`, `ontology.mdx`, `open-standard.mdx`, `token-selection.mdx`. 23 new tooltips land in first-mention positions; average 2.1 per file (range 1-3; per-file cap of 3 respected). 10 canonical glossary slugs mapped from 25-entry glossary: `question-test`, `bare-triad`, `embedded-triad`, `governance-file`, `agents-md`, `frontmatter`, `mission`, `context-library`, `skill`, `ontology-extension`, `triad`. Every wrap points to a real `/glossary/glossary-{slug}` target; definitions ≤160 chars extracted from canonical entries' opening lines. Every wrap lands in prose-only — zero inside headings, tables, code blocks, or `<CardGrid>` card-descriptions (the one shape that breaks axe-core since `description` is a plain-text prop, not MDX). Skipped self-referential wraps on defining pages (e.g., `governance-files.mdx` wraps AGENTS.md but not CLAUDE.md). Validation: `npm run build` 116 pages / 0 errors; `npm run test:gates` 30/30 pass (incl. G4 axe-core WCAG 2.1 AA on homepage, concept (tooltip-bearing), tutorial, pattern, 404 — all zero violations); Lighthouse 100/100/100/100 on all 5 sample pages after cache warm-up (desktop preset — matches cycles 21+22+23+24 methodology; cold preview runs initially dipped to 84-99 Perf on homepage/tutorial/glossary/adopter — known preview-server variance, resolved with 2x warm-up requests before each measurement). Evidence: `site/evidence/cycle25/lh_{homepage,concept,tutorial,glossary,adopter}.json`. Files touched: 11 concept MDX files + `iii_cycle_tracker.md` (cycle 25 entry + D3 schedule row 5/10) + `mission_m27_d3_navigation_ia.md` (O5 checkboxes + progress 5/10) + `STATE.md` + 5 new Lighthouse JSON artifacts + session file.

## Next Session Prompt

> Resume Operation Rosetta in `aDNA.aDNA/`. Phase 7 D3 active — cycles 21-25 ✅ complete (breadcrumb trail + pattern-page Next Steps CardGrid + global Related Elsewhere cross-section CardGrid + back-to-index link + sidebar nav audit + glossary tooltip rollout across all 12 concept MDX files). **Cycle 26 next** per `mission_m27_d3_navigation_ia.md` O6: wire `GlossaryTooltip.astro` on first-mention canonical terms across the 9 tutorial MDX files in `site/src/content/guides/` (1-3 terms per file; `first-claude-md.mdx` already demo-wired). Same mechanics as cycle 25 — prose-only first-mentions, per-file cap of 3, zero wraps in `<CardGrid>` card-descriptions (axe-core breaks on those). Canonical term map from cycle 25 tracker entry is reusable. Execute per `how/skills/skill_iii_cycle.md` 7-step protocol. Validation gate: 116 pages hold; Lighthouse 100/100/100/100 on the 5 sample pages (warm preview); Playwright 30/30 pass (G4 axe-core WCAG 2.1 AA on tooltip-bearing pages). Commit at cycle 26 close; do not batch.
