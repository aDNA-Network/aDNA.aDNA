---
mission_id: m27
type: mission
title: "D3: Navigation & IA"
campaign: campaign_rosetta
status: active
priority: high
created: 2026-04-18
updated: 2026-04-19
last_edited_by: agent_stanley
tags: [mission, rosetta, phase-7, iii, d3, navigation-ia]
progress: 3/10 cycles complete (cycles 21-23)
---

# M27 — D3: Navigation & IA

## Mission Brief

Execute cycles 21-30 of the Phase 7 III loop, themed around **navigation and information architecture**. Attack the four D2-residual pain points that are IA-shaped: (1) lateral navigation scent between sections is missing, (2) pattern pages never received the Next Steps CardGrid, (3) the glossary tooltip rollout is demo-only, (4) the Researcher persona still has no dedicated landing. Hold Lighthouse 100/100/100/100 on the 5 sample pages throughout.

Per the Change finding operationalized in D2, record the persona ranker at **decadal start (cycle 21)** and **decadal end (cycle 30)** so D3 produces its own pre/post delta.

## Baseline (from M26 / D2 close, 2026-04-17)

| Page | Performance | Accessibility | Best Practices | SEO |
|------|-------------|---------------|----------------|-----|
| Homepage | 100 | 100 | 100 | 100 |
| Concept (triad) | 100 | 100 | 100 | 100 |
| Tutorial (first-claude-md) | 100 | 100 | 100 | 100 |
| Glossary (adna) | 100 | 100 | 100 | 100 |
| Adopter (solo-developer) | 100 | 100 | 100 | 100 |
| **Average** | **100** | **100** | **100** | **100** |

Site: 116 pages. Build: ~2.4s. Playwright gates: 30/30.

### Persona Ranker (D2 close)

Findability 4.6 · Comprehension 4.8 · Actionability 5.0 · Trust 5.0 · Relevance 4.8 · Delight 4.0 · **Overall 4.70**

## Root Cause Analysis

Top cross-persona pain points at D2 close (verbatim from `aar_phase7_d2.md`, the subset that is IA-shaped):

1. **Navigation scent between sections.** A reader deep in a concept page has Next Steps, but moving laterally (concept → pattern → tutorial) still requires returning to an index. No global "related-across-sections" affordance. *Cited by:* Researcher, Solo Developer.
2. **Pattern pages haven't received the Next Steps CardGrid.** Cycle 16 covered concepts + tutorials but not the 8 pattern pages. *Cited by:* Enterprise.
3. **Glossary tooltip rollout is demo-only.** `GlossaryTooltip.astro` is built and accessible but wired in 2 files. Rolling it across the remaining 20 content files is mechanical. *Cited by:* Educator, Solo Developer.
4. **Researcher surface still thin.** Researcher has no persona-targeted landing comparable to /educators, /enterprise, /compliance, /startup-first-hour. *Cited by:* Researcher.

(Two D2 pain points — Delight flat, CardGrid-dense Perf — are out of scope for D3; they belong to D4/D8 and D6 respectively.)

## Objectives

Each objective corresponds to one III cycle (`skill_iii_cycle.md`). Hold Lighthouse 100/100/100/100 on all 5 sample pages every cycle.

### O1: D3 ranker baseline + breadcrumb trail rollout (Cycle 21) — ✅ Complete (2026-04-18)

- [x] Record 5-persona ranker at decadal start (matches D2-close rubric for comparability) — recorded as **4.70 overall** (Findability 4.6, Comprehension 4.8, Actionability 5.0, Trust 5.0, Relevance 4.8, Delight 4.0) in `iii_cycle_tracker.md` cycle 21 entry
- [x] Add breadcrumb component / rendering to every content page: Triad leg › Section › Page (e.g., "WHAT › Concepts › Triad") — implemented as `site/src/components/sections/Breadcrumb.astro` with 12-entry route map, wired into `DocumentationLayout.astro` above `<h1>`. Self-suppresses on homepage, 404, section indexes, and persona-landing roots.
- [x] Validate: Lighthouse 100/100/100/100 held on all 5 sample pages; axe-core 0 violations on breadcrumb nav (30/30 Playwright gates pass)
- [x] Commit at cycle close

### O2: Pattern-page Next Steps CardGrid rollout (Cycle 22) — ✅ Complete (2026-04-19)

- [x] Add `## Next Steps` + `<CardGrid columns={2}>` block to all 8 pattern MDX files — parallel to cycle 16's concept+tutorial work. Shipped with 4 scent-carrying cards per page (3 carried from existing Related lists + 1 new lateral-scent target per page).
- [x] Each card: 2-4 cards per page with scent-carrying description — every page received 4 cards; every description earns the click with "what you find after" framing rather than restating the linked title.
- [x] Validate: 116 pages hold; Lighthouse 100/100/100/100 on sample pages; axe-core clean — all gates pass (build 116 pages/2.48s/0 errors, Playwright 30/30, Lighthouse 100/100/100/100 on 5 sample pages, 7 new link targets spot-checked 200). Incidentally removed a pre-existing broken `/learn/concepts/dual-audience` link from `dual-audience.mdx`'s Related list during the rewrite. Evidence: `site/evidence/cycle22/`.

### O3: Global "Related Elsewhere" cross-section affordance (Cycle 23) — ✅ Complete (2026-04-19)

- [x] On every concept/pattern/tutorial, render a second CardGrid below Next Steps that links *sideways*: concepts → 1-2 related patterns + 1-2 related tutorials, patterns → concepts + tutorials, tutorials → concepts + patterns — shipped as **4 cards per page (2+2 across the other two sections)** on all 29 content files; 116 new lateral edges.
- [x] Option: build a small `RelatedElsewhere.astro` component that takes a frontmatter field like `related:` and renders the grid — reduces per-file edit surface — **not taken.** Inline CardGrid blocks per file chosen to preserve cycle 22's "earn the click" description discipline and avoid an Astro content-schema edit. Per-file edges remain reviewable in git diff.
- [x] Validate: graph view becomes a connected web (project CLAUDE.md rule #10); Lighthouse held — **PASS.** Build 116 pages / 2.43s / 0 errors; Playwright 30/30; Lighthouse 100/100/100/100 on 5 sample pages; 19 cross-section href spot-checks 200; two stacked CardGrids confirmed rendering on sample concept page with `next-steps` + `related-elsewhere` anchors. Evidence: `site/evidence/cycle23/`.

### O4: Back-to-index + sidebar nav completeness (Cycle 24)

- [ ] Add subtle "← All concepts" / "← All patterns" / etc. link at top of each detail page
- [ ] Audit sidebar nav: every page reachable in ≤2 hops from homepage, no orphans, section headings match nav labels
- [ ] Validate: Lighthouse held; manual nav walk from homepage reaches all 116 pages within 2 hops

### O5: Tooltip rollout across 12 concepts (Cycle 25)

- [ ] Wire `GlossaryTooltip.astro` on first-mention of every glossary-defined term in each of 12 concept files (import + wrap 1-3 terms per file)
- [ ] Canonicalize term list from `what/glossary/` (25 glossary entries) — cover top 5-8 most-linked terms
- [ ] Validate: Lighthouse held; axe-core confirms `aria-describedby` + focus behavior clean across the rollout

### O6: Tooltip rollout across 9 tutorials (Cycle 26)

- [ ] Same mechanics as O5, applied to all 9 tutorial MDX files
- [ ] Validate: as O5

### O7: Researcher persona landing (Cycle 27)

- [ ] Create `site/src/pages/researchers/index.astro` (or `/researcher-reading-path/`) — sibling to `/educators`, `/enterprise`, `/startup-first-hour`, `/compliance`
- [ ] Ordered reading path through FAIR metadata, lattice YAML examples, context-engineering content, convergence model
- [ ] Cross-link from `adopter-researcher.mdx` Related list
- [ ] Validate: Lighthouse A11y/BP/SEO = 100; Perf in 88-95 band acceptable (DOM-density carry-forward)

### O8: Tutorial ordering signal + adopter decision tree (Cycle 28)

- [ ] Tutorial index pages: show difficulty (beginner/intermediate/advanced) ordering explicitly in the index view, not only in the per-card difficulty badge
- [ ] `/adopters` index: add a 5-question decision tree that routes readers to their persona landing
- [ ] Validate: Lighthouse held; the decision tree is keyboard-navigable

### O9: Reference-section linkage (Cycle 29)

- [ ] Concept pages that depend on reference definitions (spec, lattice schema, type vocabulary) gain a "Reference" sub-link to `/reference/specification` and siblings
- [ ] Validate: Lighthouse held; readers no longer need to know the reference section exists to reach it

### O10: D3 ranker close + decadal AAR (Cycle 30)

- [ ] Re-score 5-persona ranker at decadal end — target: Findability 4.8+, Relevance 5.0, Delight still flat (accepted)
- [ ] File `aar_phase7_d3.md` with pre/post delta, top pain points, D4 priority queue seed
- [ ] Mark M27 `completed`; update STATE.md to queue D4 (Visual Polish) behind a phase gate
- [ ] Commit decadal batch

## Dependencies

- M26 (completed) — D2 close + ranker rubric re-validated
- M25 (completed) — D1 baseline + ranker rubric established
- M24 (completed) — Lighthouse + Playwright gate infrastructure

## Unlocks

- **M28** — D4: Visual Polish (priority queue will be seeded in the D3 AAR)
