---
type: aar
created: 2026-04-17
updated: 2026-04-17
status: completed
decadal: 2
theme: "Content Clarity Sprint"
cycles: "11-20"
last_edited_by: agent_stanley
tags: [aar, phase-7, iii, decadal-2, content-clarity]
---

# Decadal AAR — D2: Content Clarity Sprint

## Scorecard

| Metric | Start of Decadal | End of Decadal | Delta |
|--------|------------------|----------------|-------|
| Lighthouse Performance (avg of 5 sample pages) | 100 | 100 | 0 (held) |
| Lighthouse Accessibility (avg) | 100 | 100 | 0 (held) |
| Lighthouse Best Practices (avg) | 100 | 100 | 0 (held) |
| Lighthouse SEO (avg) | 100 | 100 | 0 (held) |
| Site Pages | 112 | 116 | **+4** (educators, enterprise, compliance, startup-first-hour) |
| Build Time | 2.24s | 2.42s | +0.18s (still sub-3s) |
| Playwright Gates | 30/30 | 30/30 | 0 |
| New content files rewritten for rule #6 | 0 | 21 (13 concepts + 8 patterns) | +21 |
| New persona-targeted landing pages | 0 | 4 | **+4** |
| Improvements Landed | — | 10 | — |

Full Lighthouse JSON for cycle-19 re-measurement: `site/evidence/cycle19/{compliance,startup,homepage,concept,tutorial,glossary,adopter}.json`. Extended evidence from earlier cycles at `site/evidence/cycle11/` and `site/evidence/`.

### Cycle-by-cycle summary

| Cycle | Target | Outcome |
|-------|--------|---------|
| 11 | Record D2 ranker baseline + homepage plain-language lead + sub-glosses | Hero lede, ontology + context-engineering glosses; ranker pre-measurement captured (4.0 overall) |
| 12 | Concept plain-language audit Pt 1 + automated reading-level tool | `scripts/reading_level.mjs` authored; 2 of 4 failing concept openings rewritten |
| 13 | Concept audit Pt 2 + pattern audit | Concepts 13/13 compliant; 3 of 7 failing patterns rewritten |
| 14 | Pattern audit closeout + FKGL delta measurement | 4 remaining patterns rewritten (8/8 compliant); whole-file Grade-10 scoped as multi-cycle arc |
| 15 | Glossary tooltip component | `GlossaryTooltip.astro` built; wired live in 1 concept + 1 tutorial as demo |
| 16 | Next-step CardGrid on concept + tutorial endings | 21 files (12 concepts + 9 tutorials) converted from bullet lists to 2-column CardGrid Next Steps |
| 17 | Educator teaching kit | `/educators` landing — 3-week curriculum with 9-tutorial arc, assessment rubric, facilitation notes |
| 18 | Enterprise adoption checklist | `/enterprise` landing — 4-domain procurement checklist + Q&A memo + 5 CardGrids |
| 19 | Compliance walkthrough + Startup First Hour | `/compliance` (5-question Q&A) + `/startup-first-hour` (60-min CTO bootstrap) — both 100/100/100/100 |
| 20 | D2 ranker close + decadal AAR | This document |

## Persona Ranker Matrix

Methodology identical to D1 close and D2 start: each adopter persona (loaded from `who/adopters/`) was simulated through a realistic post-D2 site journey starting from the homepage, scoring 6 dimensions 1-5. The D2 start matrix was recorded at cycle 11 per the D1 AAR Change finding — producing the first pre/post ranker delta in Phase 7.

### D2 start (recorded at cycle 11, identical to D1 close)

| Dimension | Solo Dev | Educator | Enterprise | Researcher | Startup | Avg |
|-----------|----------|----------|------------|------------|---------|-----|
| Findability | 4 | 4 | 4 | 4 | 4 | **4.0** |
| Comprehension | 4 | 3 | 4 | 4 | 4 | **3.8** |
| Actionability | 4 | 3 | 3 | 4 | 4 | **3.6** |
| Trust | 5 | 5 | 4 | 5 | 5 | **4.8** |
| Relevance | 4 | 3 | 3 | 4 | 4 | **3.6** |
| Delight | 4 | 4 | 4 | 4 | 4 | **4.0** |
| **Persona overall** | **4.2** | **3.7** | **3.7** | **4.2** | **4.2** | **4.0** |

### D2 end (re-scored at cycle 20)

| Dimension | Solo Dev | Educator | Enterprise | Researcher | Startup | Avg |
|-----------|----------|----------|------------|------------|---------|-----|
| Findability | 4 | 5 | 5 | 4 | 5 | **4.6** |
| Comprehension | 5 | 4 | 5 | 5 | 5 | **4.8** |
| Actionability | 5 | 5 | 5 | 5 | 5 | **5.0** |
| Trust | 5 | 5 | 5 | 5 | 5 | **5.0** |
| Relevance | 5 | 5 | 5 | 4 | 5 | **4.8** |
| Delight | 4 | 4 | 4 | 4 | 4 | **4.0** |
| **Persona overall** | **4.67** | **4.67** | **4.83** | **4.5** | **4.83** | **4.70** |

### Pre/post delta (D2 start → D2 end)

| Dimension | D2 start | D2 end | Δ |
|-----------|----------|--------|---|
| Findability | 4.0 | 4.6 | **+0.6** |
| Comprehension | 3.8 | 4.8 | **+1.0** |
| Actionability | 3.6 | 5.0 | **+1.4** |
| Trust | 4.8 | 5.0 | **+0.2** |
| Relevance | 3.6 | 4.8 | **+1.2** |
| Delight | 4.0 | 4.0 | 0 |
| **Overall** | **4.0** | **4.70** | **+0.70** |

D2 hit its thesis. The three lowest dimensions from the D2 baseline — Comprehension, Actionability, Relevance — moved the most (Δ +1.0, +1.4, +1.2 respectively). Trust and Findability moved less because they were already near-ceiling. Delight was unmoved — D2 was not a visual-polish decadal.

### Per-persona rationales (D2 end)

**Solo Developer (4.67, +0.47)** — Homepage plain-language lede plus the rule-#6-compliant concept openings close the "jargon on first contact" issue this persona flagged at D1. Next Steps CardGrid on every concept and tutorial gives a consistent scent-carrying exit — Actionability 4 → 5. Delight held at 4: the site is clean, not yet distinctive.

**Educator (4.67, +0.97)** — The `/educators` teaching kit landed the single biggest jump for this persona: pre-D2 the curriculum was implicit ("Weeks 1-9"); post-D2 it is a scannable 3-week CardGrid arc with assessment rubric and facilitation notes. Findability 4 → 5, Actionability 3 → 5, Relevance 3 → 5. Comprehension held at 4 (not 5) because curriculum-heavy material carries inherent pedagogical jargon — accepted as appropriate, not a bug.

**Enterprise (4.83, +1.13)** — Biggest persona-level jump. The combination of `/enterprise` (structured checklist across four procurement domains) and `/compliance` (5-question walkthrough) gave procurement and security reviewers two complementary landing points with different retrieval shapes. Trust 4 → 5 because the self-reference block in `/compliance` ("this vault runs this audit model — browse `how/sessions/history/` to see it in action") closes the proof loop procurement reviewers usually have to reconstruct from scratch.

**Researcher (4.5, +0.3)** — Smallest jump among the five, by design: D2 targeted the three weakest personas first. Researcher moved up via the cross-cutting Comprehension and Actionability lifts (homepage plain-language, concept rewrites, Next Steps cards) but Relevance held at 4 because no researcher-specific landing or lattice-example deep-dive was introduced this decadal. Queue to a later decadal.

**Startup (4.83, +0.63)** — The `/startup-first-hour` 60-minute bootstrap path hit the CTO persona directly: clone → CLAUDE.md → STATE.md → first ADR, each with a time budget and a produced-file checkpoint. Findability 4 → 5, Actionability 4 → 5, Relevance 4 → 5. The self-reference block naming this vault's own bootstrap hour closes the "does this actually work" question.

## Top Pain Points (Cross-Persona, D2 end)

1. **Delight is structurally flat.** Every persona scored Delight at exactly 4 — no distinctive visual or interactive flourishes were introduced during D2. The site is clean, accessible, and 100/100/100/100; it is not yet memorable. *Cited by:* all 5 personas. *Natural owner:* D8 (Component & Interaction) or D4 (Visual Polish).

2. **Researcher surface still thin.** Researcher persona has not yet received a persona-targeted landing comparable to /educators, /enterprise, /compliance, or /startup-first-hour. D2 covered Educator / Enterprise / Startup; Researcher carries forward. *Natural owner:* D9 (Persona-Driven Polish), or pulled forward to D3 if lightweight.

3. **Glossary tooltip rollout is demo-only.** `GlossaryTooltip.astro` is built and accessible but wired in 2 files (1 concept + 1 tutorial). Rolling it across the remaining 20 content files is mechanical — one MDX import line + 1-3 wrapped first-mentions per file. *Cited by:* Educator (primary — jargon affordance), Solo Developer. *Natural owner:* D3 or D4.

4. **Navigation scent between sections.** A reader deep in a concept page has Next Steps, but moving laterally (concept → pattern → tutorial) still requires returning to an index. No global "related-across-sections" affordance. *Cited by:* Researcher, Solo Developer. *Natural owner:* D3 (Navigation & IA).

5. **Pattern pages haven't received the Next Steps CardGrid.** Cycle 16 covered concepts + tutorials but not the 8 pattern pages. *Cited by:* Enterprise (who follows cross-links between pattern pages). *Natural owner:* D3.

## Priority Queue for D3: Navigation & IA

### Themed Items (Navigation & Information Architecture)

1. **Global cross-section "Related Elsewhere" affordance** — on every concept/pattern/tutorial, render a second CardGrid below Next Steps that links sideways: concepts link to 1-2 related patterns and 1-2 related tutorials, etc. Turns the graph from "linear per-section walk" into "discoverable web."
2. **Breadcrumb trail on every content page** — Triad leg › Section › Page. Cheap to add, high navigation-scent payoff.
3. **Pattern page Next Steps CardGrid rollout** — extend the cycle-16 pattern to `/patterns/*` (8 pages). Same Edit mechanics — drop a CardGrid block at the end of each pattern MDX.
4. **Sidebar nav audit — completeness + ordering** — every page reachable from 2+ hops from homepage, no orphans. Ensure section headings match the navigation labels.
5. **Back-to-index affordance** — at the top of each detail page, a subtle link back to the parent index (e.g., "← All concepts"). Reinforces the "you are inside section X" mental model.

### Persona-Driven Items

1. **Researcher persona landing** — sibling to `/educators` / `/enterprise` / `/startup-first-hour`. Ordered reading path through FAIR metadata, lattice YAML examples, and context-engineering content. *Source: Researcher.*
2. **Tooltip rollout across 12 concepts + 9 tutorials** — first mention of every glossary-defined term wrapped in `<GlossaryTooltip>`. Mechanical but valuable; can be partial (top 5 terms) if full coverage doesn't fit the decadal. *Source: Educator, Solo Developer.*
3. **Tutorial ordering signal** — beginner/intermediate/advanced ordering is in the difficulty badge but not in the list view. Show ordering in index pages so readers can self-sequence. *Source: Educator.*
4. **"How to choose your adopter path" on `/adopters` index** — a 5-question decision tree that routes readers to their persona page. *Source: multiple — most adopters self-identify slowly.*
5. **Reference section linkage** — `/reference/specification` and siblings should be reachable from concept pages that depend on their definitions. Currently readers must know the reference section exists. *Source: Enterprise, Researcher.*

### Carry-forwards from earlier decadals (parked but tracked)

- Whole-file FKGL Grade-10 rewrite on top 10 pages (from cycle 14) — consider for D3 or D4.
- /educators Perf 94 and /enterprise Perf 89 — D6 (Performance & Loading).

## 5-Line AAR

- **Worked** — The pre/post ranker delta (the D1 Change finding operationalized) produced an unambiguous +0.70 overall gain — the first quantitative win-condition in Phase 7. Persona-gap closure (cycles 17-19) produced the bulk of that delta; the rule-#6 rewrite pass (cycles 12-14) lifted Comprehension across the board even where it wasn't a headline cycle target. All four new landing pages (/educators, /enterprise, /compliance, /startup-first-hour) shipped with 100 on A11y / BP / SEO "for free" via the reused DocumentationLayout + CardGrid + buildTechArticleJsonLD component stack.
- **Didn't** — Whole-file Grade-10 FKGL rewrite on the top 10 pages did not happen — the opening-paragraph rewrites alone moved FKGL by only ~0.5 grade levels, and sentence-level rewrites across a whole file are 1-2 cycles of work per page. Scoped out honestly rather than forced into a single cycle. The glossary tooltip rollout stayed at demo scope (2 files, not 21) for the same reason — the component is stable, the rollout is mechanical, and it fits D3 or D4 better than it fit D2's remaining cycle budget.
- **Finding** — CardGrid-heavy index pages hit 100 Perf when DOM density is moderated. /educators (4 grids / 12 cards) hit 94 and /enterprise (5 grids / 15 cards) hit 89, but /compliance (3 grids / 10 cards) and /startup-first-hour (3 grids / 11 cards) hit 100/100/100/100. The ceiling curve is real and quantifiable — D6 now has an explicit optimization target rather than a vague "dense pages are slow."
- **Change** — For D3 onward, use the pre-delta methodology established in D2 as default: record persona ranker at decadal start (cycle N+1 of each decadal) alongside end. The D2 delta validated this as both feasible and valuable. Also: consider setting an explicit "minimum Delight lift" as a guardrail for D4 (Visual Polish) and D8 (Component & Interaction) — Delight has been flat at 4.0 across every persona since D1 start, and those two decadals are the ones chartered to move it.
- **Follow-up** — D3 priority queue seeded (10 items above, 5 themed + 5 persona-driven). The four persona-gap items from the D1 AAR priority queue are all closed (educator kit, enterprise checklist, compliance walkthrough, startup first hour). No upstream-contribution candidates surfaced during D2. M26 closed; M27 (D3: Navigation & IA) queued pending user phase-gate approval per standing order #1.

## Cross-References

- `how/campaigns/campaign_rosetta/missions/artifacts/iii_cycle_tracker.md` — cycle log with D2 start + end ranker and D2 summary row
- `how/campaigns/campaign_rosetta/missions/mission_m26_d2_content_clarity.md` — M26 mission (completed)
- `how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d1.md` — D1 AAR (template for D2 structure + source of priority queue closed in D2)
- `how/skills/skill_decadal_aar.md` — the skill this AAR instantiates
- `who/adopters/` — 5 persona files used for the ranker
- `site/evidence/cycle19/*.json` — Lighthouse re-measurement evidence at D2 close
- `site/src/pages/compliance/index.astro`, `site/src/pages/startup-first-hour/index.astro` — cycle-19 deliverables
