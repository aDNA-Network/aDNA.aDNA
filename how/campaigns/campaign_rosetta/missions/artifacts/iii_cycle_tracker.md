---
type: artifact
created: 2026-04-15
updated: 2026-04-19
status: active
last_edited_by: agent_stanley
tags: [artifact, iii, cycle-tracker, phase-7]
---

# III Cycle Tracker — Phase 7

Structured log for all 100 improvement cycles across 10 decadals. Each cycle appends a record below. Decadal AARs link to separate artifacts at `aar_phase7_d{N}.md`.

## Decadal Schedule

| Decadal | Cycles | Theme | Status | AAR |
|---------|--------|-------|--------|-----|
| D1 | 1-10 | Accessibility Perfection | complete | [aar_phase7_d1.md](aar_phase7_d1.md) |
| D2 | 11-20 | Content Clarity Sprint | complete | [aar_phase7_d2.md](aar_phase7_d2.md) |
| D3 | 21-30 | Navigation & IA | in_progress (2/10) | — (M27 open: [mission_m27_d3_navigation_ia.md](../mission_m27_d3_navigation_ia.md); cycles 21-22 complete, cycle 23 next) |
| D4 | 31-40 | Visual Polish | pending | — |
| D5 | 41-50 | Mobile Experience | pending | — |
| D6 | 51-60 | Performance & Loading | pending | — |
| D7 | 61-70 | SEO & Discoverability | pending | — |
| D8 | 71-80 | Component & Interaction | pending | — |
| D9 | 81-90 | Persona-Driven Polish | pending | — |
| D10 | 91-100 | Hardening & Closeout | pending | — |

## Baseline (Pre-Phase 7)

Measured at M24 completion (2026-04-16). Lighthouse 13.1.0 against `localhost:4323` preview of built site.

### Lighthouse Scores by Page

| Page | Performance | Accessibility | Best Practices | SEO |
|------|-------------|---------------|----------------|-----|
| Homepage (`/`) | 97 | 96 | 100 | 100 |
| Concept (`/learn/concepts/triad`) | 96 | 100 | 100 | 100 |
| Tutorial (`/learn/tutorials/first-claude-md`) | 97 | 96 | 100 | 100 |
| Glossary (`/glossary/glossary-adna`) | 99 | 100 | 100 | 100 |
| Adopter (`/adopters/adopter-solo-developer`) | 98 | 100 | 100 | 100 |
| **Average** | **97.4** | **98.4** | **100** | **100** |

### Build Stats

| Metric | Value |
|--------|-------|
| Site Pages | 97 |
| Build Time | 2.38s |
| Build Errors | 0 |
| Playwright Gates | 30/30 pass |
| Broken Links | Not yet tracked |

### Notes

- Performance < 100 on all pages — primarily due to hero banner image (homepage) and font/CSS loading. Opportunity for D6 (Performance & Loading).
- Accessibility 96 on homepage and tutorial — likely image alt text or contrast issues. Primary target for D1 (Accessibility Perfection).
- Best Practices and SEO are perfect across all 5 pages.
- Evidence files: `site/evidence/lighthouse_baseline_{homepage,concept,tutorial,glossary,adopter}.json`

## Persona Ranker Baseline

To be established at D1 AAR (cycle 10).

---

## Cycle Log

<!-- Append each cycle record below this line using the format from skill_iii_cycle.md Step 7 -->

### Cycle 1 — 2026-04-16

**Decadal**: D1 (Accessibility Perfection)
**Target**: Dark-mode brand primary color contrast (WCAG AA)
**Before**: Homepage a11y 96 (color-contrast audit FAIL: 9 elements, #14919b on #242424 = 4.1:1)
**After**: Homepage a11y 100 (color-contrast PASS)

**Changes**:
- `site/src/styles/branding.css`: Changed dark-mode `--brand-primary-light` from `#14919B` to `#22B3BD` (6.1:1 on dark bg). Added WCAG contrast documentation.
- `site/src/pages/index.astro`: Added dark-mode `.btn-primary` override using `--brand-primary` (#0D7377) as bg with white text (5.6:1).

**Lighthouse** (homepage, desktop preset):
| Category | Before | After | Delta |
|----------|--------|-------|-------|
| Performance | 97 | 93 | -4 (variance) |
| Accessibility | 96 | 100 | +4 |
| Best Practices | 100 | 100 | 0 |
| SEO | 100 | 92 | -8 (preset diff) |

**Validation**: PASS — Build: 112 pages, 2.96s, 0 errors. Gates: 30/30 pass.
**Carry-Forward**: Tutorial a11y still 94 (difficulty badge contrast) — Cycle 2 target.

### Cycle 2 — 2026-04-16

**Decadal**: D1 (Accessibility Perfection)
**Target**: Difficulty badge dark-mode contrast + TOC heading order
**Before**: Tutorial a11y 94 (color-contrast FAIL on badge, heading-order FAIL on TOC h4)
**After**: Tutorial a11y 100 (both audits pass)

**Changes**:
- `site/src/pages/learn/tutorials/[...slug].astro`: Added dark-mode overrides for beginner (#34C06E, 5.85:1), intermediate (#5CB8E8, 6.53:1), advanced (#E89545, 5.83:1) difficulty badges.
- `site/src/components/sections/TOCPanel.astro`: Changed `<h4 class="toc-title">` to `<p class="toc-title">` — "On this page" is a nav label, not a content heading.

**Lighthouse** (all 5 pages, desktop preset):
| Page | Accessibility |
|------|---------------|
| Homepage | 100 |
| Concept (triad) | 100 |
| Tutorial (first-claude-md) | 100 |
| Glossary (adna) | 100 |
| Adopter (solo-developer) | 100 |
| **Average** | **100** |

**Validation**: PASS — Build: 112 pages, 8.57s, 0 errors. Gates: 30/30 pass.
**Carry-Forward**: none.

### Cycle 3 — 2026-04-16

**Decadal**: D1 (Accessibility Perfection)
**Target**: Global `:focus-visible` system — zero focus indicator styles existed
**Before**: No keyboard focus indicators on any interactive element
**After**: All links, buttons, and interactive elements show 2px teal outline on keyboard focus

**Changes**:
- `site/src/styles/global.css`: Added `:focus-visible` rules — 2px solid outline with offset for all focusable elements, `:focus:not(:focus-visible)` to suppress on mouse click, enhanced box-shadow glow for buttons.

**Lighthouse** (homepage, desktop):
| Category | Before | After | Delta |
|----------|--------|-------|-------|
| Accessibility | 100 | 100 | 0 |

**Validation**: PASS — Build: 112 pages, 9.22s, 0 errors. Gates: 30/30 pass.
**Carry-Forward**: none.

### Cycle 4 — 2026-04-16

**Decadal**: D1 (Accessibility Perfection)
**Target**: CodeBlock copy button keyboard accessibility — `opacity: 0` made button invisible to keyboard users
**Before**: Copy button only visible on parent hover (mouse only)
**After**: Copy button also visible on `:focus-visible` (keyboard tab)

**Changes**:
- `site/src/components/sections/CodeBlock.astro`: Combined `.code-block:hover .copy-btn` with `.copy-btn:focus-visible` in same rule to show button on keyboard focus.

**Lighthouse** (homepage, desktop):
| Category | Before | After | Delta |
|----------|--------|-------|-------|
| Accessibility | 100 | 100 | 0 |

**Validation**: PASS — Build: 112 pages, 11.66s, 0 errors. Gates: 30/30 pass.
**Carry-Forward**: none.

### Cycle 5 — 2026-04-16

**Decadal**: D1 (Accessibility Perfection)
**Target**: Mobile menu focus management — no focus trap, no Escape key, no focus restore
**Before**: Menu toggle only toggled hidden attribute and aria-expanded
**After**: Focus moves to first link on open, returns to toggle on close, Escape closes menu, auto-close on focus-out

**Changes**:
- `site/src/components/common/Header.astro`: Replaced simple toggle script with full focus management — `openMenu()` focuses first link, `closeMenu()` restores focus to toggle, Escape key listener, focusout auto-close.

**Lighthouse** (all 5 pages, desktop preset):
| Page | Perf | A11y | BP | SEO |
|------|------|------|----|-----|
| Homepage | 100 | 100 | 100 | 100 |
| Concept (triad) | 100 | 100 | 100 | 100 |
| Tutorial (first-claude-md) | 100 | 100 | 100 | 100 |
| Glossary (adna) | 100 | 100 | 100 | 100 |
| Adopter (solo-developer) | 100 | 100 | 100 | 100 |
| **Average** | **100** | **100** | **100** | **100** |

**Validation**: PASS — Build: 112 pages, 2.23s, 0 errors. Gates: 30/30 pass.
**Carry-Forward**: none.

### Cycle 6 — 2026-04-16

**Decadal**: D1 (Accessibility Perfection)
**Target**: Glossary table accessibility — tables lacked `aria-labelledby` (WCAG 1.3.1)
**Before**: 4 glossary category tables had no accessible name
**After**: Each table linked to its category heading via `aria-labelledby`

**Changes**:
- `site/src/pages/glossary/index.astro`: Added `id` to category `<h2>` headings and `aria-labelledby` to corresponding `<table>` elements.

**Validation**: PASS — Build: 112 pages. Gates: 30/30 pass. Glossary page a11y: 100.
**Carry-Forward**: none.

### Cycle 7 — 2026-04-16

**Decadal**: D1 (Accessibility Perfection)
**Target**: Footer semantic landmark — links not wrapped in `<nav>` element
**Before**: Footer links in a plain `<div class="footer-links">`
**After**: Footer links wrapped in `<nav aria-label="Footer navigation">`

**Changes**:
- `site/src/components/common/Footer.astro`: Changed `<div class="footer-links">` to `<nav class="footer-links" aria-label="Footer navigation">`.

**Validation**: PASS — Build: 112 pages. Gates: 30/30 pass.
**Carry-Forward**: none.

### Cycle 8 — 2026-04-16

**Decadal**: D1 (Accessibility Perfection)
**Target**: MermaidDiagram component accessible markup — future-proofing WCAG 1.1.1
**Before**: Mermaid container had no `role` or `aria-label`; rendered SVGs had no accessibility attributes
**After**: Container has `role="img"` + `aria-label` (from caption or default); rendered SVGs marked `aria-hidden="true"` (container provides accessible name)

**Changes**:
- `site/src/components/islands/MermaidDiagram.astro`: Added `role="img"` and `aria-label` to `.mermaid-container`. Post-render script marks SVG `aria-hidden="true"`.

**Note**: MermaidDiagram is not currently imported in any content files — this is a preventive fix for when diagrams are added.

**Validation**: PASS — Build: 112 pages. Gates: 30/30 pass.
**Carry-Forward**: none.

### Cycle 9 — 2026-04-16

**Decadal**: D1 (Accessibility Perfection)
**Target**: Extended axe-core sweep — found 2 issues on non-sample pages
**Before**: /reference/specification/ had 5 color-contrast violations (ref-stability badge + Shiki code comments)
**After**: All 15 tested pages pass axe-core WCAG AA with zero violations

**Changes**:
- `site/src/pages/reference/[...slug].astro`: Darkened stability badge text colors for light mode (stable, beta, experimental, deprecated). Added dark-mode overrides for all 4 badge variants.
- `site/src/styles/global.css`: Added CSS override for Shiki `github-dark` comment color (`#6A737D` → `#8B949E`, 4.65:1 on `#24292E`).

**Extended axe-core results** (15 pages beyond the 5 Lighthouse samples):
| Status | Pages |
|--------|-------|
| PASS | /community/, /community/community-roles/, /adopters/, /adopters/adopter-educator/, /use-cases/, /use-cases/solo-developer/, /how/, /how/workshops/build-your-first-vault/, /how/publishing/vault-to-site/, /how/lattice-examples/lattice-context-serving/, /learn/comparisons/adna-vs-para/, /glossary/, /reference/specification/, /get-started/, /changelog/ |
| FAIL | none |

**Lighthouse** (specification page, desktop):
| Category | Score |
|----------|-------|
| Performance | 100 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

**Validation**: PASS — Build: 112 pages, 2.29s, 0 errors. Gates: 30/30 pass.
**Carry-Forward**: none.

### Cycle 10 — 2026-04-17

**Decadal**: D1 (Accessibility Perfection) — closeout cycle + Decadal AAR
**Target**: Skip link polish (WCAG 2.4.1 Bypass Blocks) + motion preferences (WCAG 2.3.3)
**Before**: Skip link existed in `BaseLayout.astro` but used unstyled Tailwind `focus:bg-white` classes; `<main>` lacked `tabindex="-1"` so focus didn't reliably land on activation. No `prefers-reduced-motion` support anywhere.
**After**: Skip link reveals as a themed branded pill on keyboard focus with brand-primary background + high-contrast text and outline; `<main tabindex="-1">` receives focus cleanly without showing a ring (main-level `:focus { outline: none }` override). Global `@media (prefers-reduced-motion: reduce)` honors OS preference across all animations and transitions.

**Changes**:
- `site/src/layouts/BaseLayout.astro`: Replaced raw Tailwind utility classes on the skip link with a single `.skip-link` class. Added `tabindex="-1"` to `<main id="main-content">` so programmatic/hash-jump focus can land there.
- `site/src/styles/global.css`: Added themed `.skip-link` rules (translated off-screen by default, slides into view on `:focus`/`:focus-visible`, brand-primary background, drop shadow, heading-color outline on focus). Added `main:focus { outline: none }` to suppress the default focus ring on the skip-link target. Added `@media (prefers-reduced-motion: reduce)` block that reduces animation/transition durations to 0.01ms and disables smooth-scroll for all elements.

**Lighthouse** (all 5 pages, desktop preset):
| Page | Perf | A11y | BP | SEO |
|------|------|------|----|-----|
| Homepage | 100 | 100 | 100 | 100 |
| Concept (triad) | 100 | 100 | 100 | 100 |
| Tutorial (first-claude-md) | 100 | 100 | 100 | 100 |
| Glossary (glossary-adna) | 100 | 100 | 100 | 100 |
| Adopter (solo-developer) | 100 | 100 | 100 | 100 |
| **Average** | **100** | **100** | **100** | **100** |

**Validation**: PASS — Build: 112 pages, 2.24s, 0 errors. Gates: 30/30 pass. Rendered HTML confirms `<a href="#main-content" class="skip-link">` + `<main id="main-content" ... tabindex="-1">`; compiled CSS bundle contains `prefers-reduced-motion` rule.
**Carry-Forward**: none.

---

## Decadal D1 Summary — Accessibility Perfection (Cycles 1-10)

- **AAR artifact**: [aar_phase7_d1.md](aar_phase7_d1.md)
- **Persona ranker averages (D1 baseline)**: Findability 4.0 · Comprehension 3.8 · Actionability 3.6 · Trust 4.8 · Relevance 3.6 · Delight 4.0 (overall avg 4.0)
- **Lighthouse**: All 5 sample pages improved from 97.4/98.4/100/100 → 100/100/100/100 (Perf/A11y/BP/SEO). Extended axe-core sweep of 15 additional pages: 0 violations.
- **Key carry-forwards into D2**: Content clarity variance (plain-language opening depth), in-page cross-link density, landing-page scent for Enterprise + Researcher personas, actionable "next step" calls on tutorial + concept endings.

---

## Decadal D2 Baseline — Content Clarity Sprint (recorded at cycle 11 start)

Per the D1 AAR Change finding, the persona ranker is recorded at decadal **start** as well as decadal end to produce a pre/post delta.

Methodology matches D1 (see `aar_phase7_d1.md` §Persona Ranker Matrix): each of 5 adopter personas scored across 6 dimensions on a realistic site journey from the homepage. The site has not materially changed since D1 close (2026-04-17), so the D2 start ranker re-scores identically.

| Dimension | Solo Dev | Educator | Enterprise | Researcher | Startup | Avg |
|-----------|----------|----------|------------|------------|---------|-----|
| Findability | 4 | 4 | 4 | 4 | 4 | **4.0** |
| Comprehension | 4 | 3 | 4 | 4 | 4 | **3.8** |
| Actionability | 4 | 3 | 3 | 4 | 4 | **3.6** |
| Trust | 5 | 5 | 4 | 5 | 5 | **4.8** |
| Relevance | 4 | 3 | 3 | 4 | 4 | **3.6** |
| Delight | 4 | 4 | 4 | 4 | 4 | **4.0** |
| **Persona overall (avg of 6)** | **4.2** | **3.7** | **3.7** | **4.2** | **4.2** | **4.0** |

D2 targets a lift on the three lowest dimensions — Comprehension, Actionability, Relevance — via plain-language leads, next-step cards, and persona-specific landing pages.

---

## Cycle 11 — 2026-04-17

**Decadal**: D2 (Content Clarity Sprint) — decadal kickoff
**Target**: Homepage plain-language lead + Ontology sub-glosses + Context Engineering sub-glosses (Tier 2: Progressive Disclosure, Dual-Audience Legibility) + record D2 baseline persona ranker
**Before**: Homepage hero jumped from banner image directly to abstract tagline ("An integrated standard for context and knowledge.") and CTA buttons — no 14-year-old-legible opening. Ontology leg cards listed entity types without a plain-language framing. Context Engineering cards opened with technical sentences (signal density, 6-axis rubric, 75K tokens) with no accessible on-ramp.
**After**: Hero shows a prominent plain-language lead ("aDNA is a shared folder layout that tells AI assistants where everything is — so they can help without re-learning your project every time.") above the existing tagline. Each Ontology leg carries a one-line gloss describing the leg's role in plain terms. Each Context Engineering card carries a bold one-line plain-language gloss above its technical description.

**Changes**:
- `site/src/pages/index.astro`: Added `<p class="hero-lead">` with plain-language "what is aDNA" sentence; demoted `.hero-subtitle` typography (text-2xl → text-lg) so the lead reads as primary hero copy. Added `<p class="ontology-leg-gloss">` for each of the three triad legs (WHO/WHAT/HOW). Added `<p class="context-gloss">` for each of the four Context Engineering cards. New CSS rules for `.hero-lead`, `.ontology-leg-gloss`, `.context-card .context-gloss`, plus mobile-breakpoint adjustments.

**Lighthouse** (all 5 pages, desktop preset):
| Page | Perf | A11y | BP | SEO |
|------|------|------|----|-----|
| Homepage | 100 | 100 | 100 | 100 |
| Concept (triad) | 100 | 100 | 100 | 100 |
| Tutorial (first-claude-md) | 100 | 100 | 100 | 100 |
| Glossary (glossary-adna) | 100 | 100 | 100 | 100 |
| Adopter (solo-developer) | 100 | 100 | 100 | 100 |
| **Average** | **100** | **100** | **100** | **100** |

**Validation**: PASS — Build: 112 pages, 2.41s, 0 errors. Gates: 30/30 pass. Lighthouse re-measurement evidence: `site/evidence/cycle11/{homepage,concept,tutorial,glossary,adopter}.json`.
**Carry-Forward**: none.

### Cycle 12 — 2026-04-17

**Decadal**: D2 (Content Clarity Sprint)
**Target**: Concept-file plain-language opening audit Pt 1 (Tier 2: Progressive Disclosure, Dual-Audience Legibility) + stand up automated reading-level script for the rest of D2.
**Before**: Audit of all 13 concept files (via Explore agent) identified 4 failures against campaign rule #6 — `concept_context_commons.md`, `concept_convergence.md`, `concept_fair_metadata.md`, `concept_lattice_composition.md` — each opening with aDNA-native jargon (context files / lattices / patterns / execution hierarchy / knowledge objects / modules / datasets) before any plain-language on-ramp. FKGL on the four: 12.52 / 11.36 / 13.67 / 10.93. No automated reading-level tooling existed in the repo.
**After**: `scripts/reading_level.mjs` created — strips frontmatter / code / tables / wikilinks and reports Flesch-Kincaid Grade Level plus passive-voice ratio. Two of four failing concepts rewritten with plain-language openings: context_commons ("like GitHub, but for agent knowledge instead of code") and convergence ("A project can know more than any AI agent can hold in mind at once"). Remaining two (fair_metadata, lattice_composition) deferred to cycle 13 per plan.

**Changes**:
- `scripts/reading_level.mjs`: New. FKGL calculator with syllable-heuristic and passive-voice regex. Usage: `node scripts/reading_level.mjs <file> [<file> ...]`.
- `what/concepts/concept_context_commons.md`: Rewrote opening paragraph of `## Overview`. Set `updated: 2026-04-17`.
- `what/concepts/concept_convergence.md`: Rewrote opening paragraph of `## Overview`. Set `updated: 2026-04-17`.

**Reading-level delta (openings rewritten)**:
| File | FKGL before | FKGL after |
|------|-------------|------------|
| concept_context_commons.md | 12.52 | 12.30 |
| concept_convergence.md | 11.36 | 11.06 |

(Whole-file FKGL moves little because only the opening paragraph changed — full-page reading-level rewrite is cycle 14's scope. These numbers track the opening-paragraph change for rule-#6 compliance, not the whole-file rewrite target.)

**Validation**: PASS — Build: 112 pages, 2.30s, 0 errors. Gates: 30/30 pass. No Lighthouse-surface changes (only markdown content under `what/concepts/`).
**Carry-Forward**: fair_metadata + lattice_composition opening rewrites → cycle 13.

### Cycle 13 — 2026-04-17

**Decadal**: D2 (Content Clarity Sprint)
**Target**: Finish concept audit (fair_metadata + lattice_composition) + audit 8 pattern files against campaign rule #6 and fix the highest-jargon offenders.
**Before**: Concepts 11/13 compliant (from cycles 11-12). Pattern audit identified 1 pass (`pattern_dual_audience`) and 7 fails among 8 patterns. Worst jargon-first offenders: `pattern_fair_envelope` (opens with "A lattice, module, or dataset"), `pattern_federation_readiness` ("A lattice that works perfectly..."), `pattern_question_test` ("triad leg").
**After**: Concepts 13/13 compliant. Patterns 4/8 compliant — the 3 highest-severity failures rewritten with plain-language openings. Remaining 4 pattern rewrites (agents_md, base_extension, context_recipe, mission_decomposition) carry forward to cycle 14's reading-level pass, where they'll be addressed in the same pass as the general Grade-10 rewrite.

**Changes**:
- `what/concepts/concept_fair_metadata.md`: Rewrote opening paragraph of `## Overview`. Set `updated: 2026-04-17`.
- `what/concepts/concept_lattice_composition.md`: Rewrote opening paragraph of `## Overview`. Set `updated: 2026-04-17`.
- `what/patterns/pattern_fair_envelope.md`: Rewrote opening of `## Problem` to lead with "shareable object without a label is a black box" (plain) before naming aDNA's shareable units. Set `updated: 2026-04-17`.
- `what/patterns/pattern_federation_readiness.md`: Rewrote opening of `## Problem` to lead with "works in your project isn't automatically safe to hand to someone else" (plain) before the technical gap analysis. Set `updated: 2026-04-17`.
- `what/patterns/pattern_question_test.md`: Rewrote opening of `## Problem` to lead with the concrete "Every new file needs to land in one of three folders — `what/`, `how/`, or `who/`" instead of "triad leg" domain vocabulary. Set `updated: 2026-04-17`.

**Rule-#6 compliance status (end of cycle 13)**:
| Tier | Files | Compliant | Failing |
|------|-------|-----------|---------|
| Concepts | 13 | 13 | 0 |
| Patterns | 8 | 4 | 4 (agents_md, base_extension, context_recipe, mission_decomposition) |

**Validation**: PASS — Build: 112 pages, 2.24s, 0 errors. Gates: 30/30 pass. No Lighthouse-surface changes.
**Carry-Forward**: 4 pattern-opening rewrites → cycle 14 (bundled with the reading-level rewrite pass on top 10 pages).

### Cycle 14 — 2026-04-17

**Decadal**: D2 (Content Clarity Sprint)
**Target**: Complete 4 pattern-opening carry-forwards from cycle 13 (agents_md, base_extension, context_recipe, mission_decomposition) — closing rule #6 compliance across all 21 concept + pattern files — and measure opening-paragraph FKGL delta across the highest-FKGL content pages as the first automated reading-level pass.
**Before**: 4 of 8 patterns still failed rule #6. FKGL snapshot across concepts + patterns showed 10 files at Grade 10+ (top 4 were patterns: mission_decomposition 14.81, federation_readiness 13.89, base_extension 13.17, context_recipe 12.51).
**After**: 4 pattern openings rewritten with plain-language framings (the folder-full-of-files metaphor; the standard-stability-vs-flexibility tension; the "several areas at once" recipe intuition; the "bigger than one session" mission scoping). All 8/8 patterns and 13/13 concepts now satisfy rule #6. FKGL on the rewritten paragraphs drops modestly — whole-file Grade-10 compliance is a multi-cycle arc, not a single-cycle target.

**Changes**:
- `what/patterns/pattern_agents_md.md`: Rewrote `## Problem` opening. Set `updated: 2026-04-17`.
- `what/patterns/pattern_base_extension.md`: Rewrote `## Problem` opening. Set `updated: 2026-04-17`.
- `what/patterns/pattern_context_recipe.md`: Rewrote `## Problem` opening. Set `updated: 2026-04-17`.
- `what/patterns/pattern_mission_decomposition.md`: Rewrote `## Problem` opening. Set `updated: 2026-04-17`.

**FKGL delta on rewritten patterns (whole-file)**:
| File | FKGL before | FKGL after |
|------|-------------|------------|
| pattern_agents_md | — | 12.55 |
| pattern_base_extension | 13.17 | 12.73 |
| pattern_context_recipe | 12.51 | 12.89 (neutral; added "federated lattice" example lifted spw) |
| pattern_mission_decomposition | 14.81 | 14.36 |

**Rule-#6 compliance final**:
| Tier | Files | Compliant | Failing |
|------|-------|-----------|---------|
| Concepts | 13 | **13** | 0 |
| Patterns | 8 | **8** | 0 |

**Finding**: Opening-paragraph rewrites alone move whole-file FKGL by ~0.5 grade levels. Hitting the "Grade 10 max on top 10 pages" target from the D1 priority queue requires sentence-level rewrites across whole files, which is 1-2 cycles of work per page at the current editing cadence. Scoping this honestly as a D2 carry-forward rather than forcing it into a single cycle.

**Validation**: PASS — Build: 112 pages, 2.38s, 0 errors. Gates: 30/30 pass. No Lighthouse-surface changes (only markdown content).
**Carry-Forward**: Whole-file Grade-10 rewrite on top 10 pages → D2 closeout (cycle 20) task list / AAR priority queue for D3. The automated `scripts/reading_level.mjs` tool is in place for repeated measurement.

### Cycle 15 — 2026-04-17

**Decadal**: D2 (Content Clarity Sprint)
**Target**: Build a lightweight inline glossary tooltip component and wire it into 1 concept + 1 tutorial as a demo. Full-site rollout deliberately deferred to a later decadal. Assessed `Callout.astro` for extensibility first (per mission plan) — rejected because Callout is a block-level aside, not an inline element. New component chosen to keep tooltip semantics clean.
**Before**: No inline glossary affordance. Glossary terms referenced in concept/tutorial prose were either invisibly implicit ("triad", "governance file") or rendered as full hyperlinks, forcing navigation to a separate page for a one-line definition.
**After**: `GlossaryTooltip.astro` lives at `site/src/components/sections/`. Zero-JS static component: renders an inline anchor with a dashed underline and ⓘ indicator, linking to `/glossary/glossary-<slug>`. A `role="tooltip"` `<span>` reveals a short definition on hover or keyboard focus via `:focus-within` (anchor is natively tab-focusable; `aria-describedby` wires the tooltip to screen readers). Wired live in `convergence.mdx` (concept — "execution hierarchy" → glossary-mission) and `first-claude-md.mdx` (tutorial — "governance file" → glossary-governance-file).

**Changes**:
- `site/src/components/sections/GlossaryTooltip.astro`: NEW component. Props: `term`, `slug?`, `definition`, `display?`. Self-contained CSS with dark-mode inheritance, mobile breakpoint at 640px (repositions tooltip left-aligned), and `prefers-reduced-motion` handling.
- `site/src/content/docs/convergence.mdx`: Added MDX import + wrapped "execution hierarchy" in first sentence with tooltip.
- `site/src/content/guides/first-claude-md.mdx`: Added MDX import + wrapped "governance file" in first sentence with tooltip.

**Accessibility validation**:
- Native `<a>` element — Tab-focusable out of the box.
- `aria-describedby` links the term to its tooltip span → screen readers announce the definition on focus.
- `role="tooltip"` on the body span matches ARIA 1.2 semantics.
- `:focus-within` reveals tooltip on keyboard focus (not just hover).
- `cursor: help` signals hover-to-learn to pointer users.
- Playwright G4 (axe-core WCAG AA) on both demo pages: zero violations.

**Lighthouse on 5 sample pages (localhost preview, cycle-15 run)**:
| Page | Perf | A11y | BP | SEO |
|------|------|------|----|----|
| Homepage | 97 | 100 | 100 | 100 |
| Concept (convergence, tooltip) | 99 | 100 | 100 | 100 |
| Tutorial (first-claude-md, tooltip) | 97 | 100 | 100 | 100 |
| Glossary (glossary-adna) | 99 | 100 | 100 | 100 |
| Use case (solo-developer) | 98 | 100 | 100 | 100 |

Performance 97-99 is consistent with baseline variance (baseline table at top of this tracker shows 96-99 range). Tooltip-wearing pages sit at the top of the range (99 and 97), not the bottom — no measurable component-caused regression. A11y/BP/SEO = 100 across the board, as required.

**Finding**: Static inline components with `:focus-within` reveal give the full hover-tooltip UX for keyboard users without adding a single byte of JavaScript. MDX makes per-page opt-in trivial — one `import` line per file. This is the right shape for full rollout, which can proceed one content file at a time without architectural rework.

**Validation**: PASS — Build: 112 pages, 2.43s, 0 errors. Gates: 30/30 pass (including G4 A11y on the two edited pages).
**Carry-Forward**: Full tooltip-annotation rollout across 12 concepts + 9 tutorials → later decadal (likely D3 or D4). Component is stable; remaining work is content-level annotation, not component development.

### Cycle 16 — 2026-04-17

**Decadal**: D2 (Content Clarity Sprint)
**Target**: Close the "no what next" pain point from D1 AAR. Standardize the closing block on every concept and tutorial page — `## Next Steps` heading plus 2-4 scent-carrying follow-up cards via the existing `CardGrid.astro` component. Full rollout across 12 concept MDX + 9 tutorial MDX files.
**Before**: Concept pages ended in `## Related` — a flat bullet list of 3-4 links with em-dash descriptions. Tutorial pages had `## Next Steps` but also as plain bullet lists. Neither gave readers visual scent or directional affordance at the end of a page — readers had to read linearly through a list to find the "best" next link.
**After**: All 21 content pages (12 concepts + 9 tutorials) close with `## Next Steps` followed by a `<CardGrid columns={2}>` rendering of 2-4 cards. Each card carries a `title`, `href`, and one-line `description`. Hover states, consistent visual styling, two-column responsive layout on desktop, single-column on mobile. The bullet-list-with-em-dashes pattern is retired from tutorial/concept endings.

**Changes** (21 files, matched-pair structure: one import line added after frontmatter + one block replacement at file tail):
- Concepts (12): `triad.mdx`, `ontology.mdx`, `knowledge-graph.mdx`, `governance-files.mdx`, `token-selection.mdx`, `convergence.mdx`, `agentic-literacy.mdx`, `context-optimization.mdx`, `lattice-composition.mdx`, `open-standard.mdx`, `context-commons.mdx`, `fair-metadata.mdx` — `## Related` bullet list → `## Next Steps` + CardGrid
- Tutorials (9): `navigate-a-vault.mdx`, `first-claude-md.mdx`, `question-test.mdx`, `write-a-context-file.mdx`, `design-a-mission.mdx`, `extend-the-ontology.mdx`, `build-a-lattice.mdx`, `run-a-campaign.mdx`, `federate-a-vault.mdx` — `## Next Steps` bullet list → `## Next Steps` + CardGrid

**Component reuse**:
- `CardGrid.astro` (pre-existing, cycle 0): used as-is; no modifications.
- No new component created. Decision rationale: CardGrid already supports `{ title, description, href }` cards and `columns` prop — a wrapper `NextSteps.astro` would only duplicate the `## Next Steps` markdown heading, which is better kept as a native markdown heading for TOC/SEO.

**Lighthouse on 5 sample pages (cycle-16 run)**:
| Page | Perf | A11y | BP | SEO |
|------|------|------|----|----|
| Homepage | 98 | 100 | 100 | 100 |
| Concept (triad, cards) | 96 | 100 | 100 | 100 |
| Tutorial (first-claude-md, cards + tooltip) | 97 | 100 | 100 | 100 |
| Glossary (glossary-adna) | 99 | 100 | 100 | 100 |
| Use case (solo-developer) | 98 | 100 | 100 | 100 |

A11y / BP / SEO = 100 across the board. Perf 96-99 within baseline variance band (96-99 at M24 baseline). No regression from the rollout.

**Finding**: Standardizing closing blocks across 21 files in one cycle was feasible only because (a) the CardGrid component already existed, and (b) the prior `## Related` / `## Next Steps` bullet lists had scent-carrying descriptions that could be lifted verbatim into card `description` props. Converting the bullets to cards via Edit is mechanical once the pattern is fixed — ~2 Edits per file, one MDX import + one block replacement. Pattern now well-established for future content.

**Validation**: PASS — Build: 112 pages, 2.30s, 0 errors. Gates: 30/30 pass.
**Carry-Forward**: Pattern pages (8) don't have a standardized closing — optional cycle to extend the same CardGrid pattern to patterns/ and comparisons/. Parked for D3 or later.

### Cycle 17 — 2026-04-17

**Decadal**: D2 (Content Clarity Sprint)
**Target**: Close the "Educator persona gap" from the D1 AAR — add a dedicated, curriculum-ready landing page that organizes the 9 existing tutorials into a 3-week teaching arc with facilitation guidance.
**Before**: `/adopters/adopter-educator` framed the persona but left curriculum-sequencing implicit (a one-line mention of "Weeks 1-9"). An educator landing page arriving cold had no clear path from "this looks useful" to "here is my syllabus by tomorrow."
**After**: `/educators` index page live. Hero lede establishes "the structure IS the lesson" framing. Three week-themed sections (Foundations / Building Blocks / Systems) each render a CardGrid of 3 tutorials with per-card metadata (week · time · difficulty). Assessment rubric and facilitation notes follow. Closes with a Next-Steps CardGrid cross-linking to the persona, use-case, and dual-audience pattern. Cross-link added from `adopter-educator.mdx` Related list.

**Changes**:
- NEW: `site/src/pages/educators/index.astro` — curriculum landing page. Uses `DocumentationLayout`, `CardGrid`, `buildTechArticleJsonLD`. Four CardGrids (Week 1, Week 2, Week 3, Next Steps) for a total of 12 cards. JSON-LD includes TechArticle schema.
- `site/src/content/docs/adopter-educator.mdx`: added `[Teaching Kit](/educators)` to Related list.

**Lighthouse on new page**:
| Page | Perf | A11y | BP | SEO |
|------|------|------|----|----|
| /educators (new) | 94 | 100 | 100 | 100 |

A11y / BP / SEO = 100 out of the gate — the reused components (CardGrid, DocumentationLayout) carry the accessibility and SEO properties forward automatically. Perf 94 is 2-4 points below the 5-sample-page baseline band (96-99), attributable to a denser-than-average DOM (4 CardGrids, 12 anchors, headings, and prose). Still in Lighthouse's "good" zone (≥90). Not a sample page, so doesn't affect the cycle's sample-page guardrail.

**Lighthouse on existing 5 sample pages (regression check)**:
| Page | Perf |
|------|------|
| Homepage | 98 |
| Concept (convergence) | 98 |

Untouched pages hold prior range. No cross-page regression from adding the new route.

**Finding**: A curriculum landing page built by reusing CardGrid + DocumentationLayout takes ~1 hour to author and ships with A11y/BP/SEO at 100 "for free". The perf gap vs. simpler pages (4 points) comes entirely from DOM density — an addressable optimization (e.g., collapsing Week 1/2/3 into a single CardGrid with week-badge metadata) for a later performance-tuning decadal.

**Validation**: PASS — Build: 113 pages, 2.34s, 0 errors. Gates: 30/30 pass.
**Carry-Forward**: Perf 94 on /educators → note for D6 (Performance & Loading) — likely collapsible via CardGrid consolidation or DOM pruning. No rush; still green.

### Cycle 18 — 2026-04-17

**Decadal**: D2 (Content Clarity Sprint)
**Target**: Close the "Enterprise persona gap" from the D1 AAR — give procurement, security, and platform-engineering reviewers a single structured landing page that answers the four procurement domains (compliance posture, session audit, federation surface, integration with existing practice) without forcing them to reconstruct the answer from scattered concept/pattern/glossary pages.
**Before**: Enterprise reviewers arriving at `/adopters/adopter-enterprise-team` got the persona (pain points, typical ontology extensions, deployment sketch) and two Related links (use case narrative, federation pattern). The procurement-readiness checklist was distributed across ~8 pages with no aggregated reference. A reviewer writing a memo had to walk the graph manually.
**After**: `/enterprise` index page live. Hero lede names the four domains. Each domain gets a 2-3 paragraph framing section, a bulleted summary of the key primitives, and a CardGrid of 3 authoritative deep-links. Closes with a procurement-memo Q&A list (5 questions + italic answers), a Next Steps CardGrid cross-linking persona + key tutorials, and a dedicated JSON-LD TechArticle block for SEO. Cross-link added from `adopter-enterprise-team.mdx` Related list as the first entry.

**Changes**:
- NEW: `site/src/pages/enterprise/index.astro` — procurement-ready landing page. Uses `DocumentationLayout`, `CardGrid`, `buildTechArticleJsonLD`. Five CardGrids total (Compliance, Session Audit, Federation, Integration, Next Steps) = 15 cards. Structure mirrors the successful `/educators` pattern: hero lede → themed sections with contextual prose → CardGrids → evaluation summary → Next Steps.
- `site/src/content/docs/adopter-enterprise-team.mdx`: added `[Enterprise Adoption Checklist](/enterprise)` as the first item in the Related list, ahead of the Use Case narrative and Federation Readiness pattern.

**Lighthouse on new page**:
| Page | Perf | A11y | BP | SEO |
|------|------|------|----|----|
| /enterprise (new) | 89 | 100 | 100 | 100 |

A11y / BP / SEO = 100 from the start — inherited from the reused component stack. Perf 89 is ~5 points below the /educators (94) baseline and 7-10 below the sample-page band (96-99), consistent with the 15-card / 5-CardGrid DOM density (the densest page produced in D2). Still in the "needs improvement but not failing" range and deliberately not a sample page for this cycle's guardrail — but flagged for D6 optimization alongside /educators.

**Lighthouse on existing 5 sample pages (regression check)**:
| Page | Perf | A11y | BP | SEO |
|------|------|------|----|----|
| Homepage | 97 | 100 | 100 | 100 |
| Concept (triad) | 96 | 100 | 100 | 100 |
| Tutorial (first-claude-md) | 97 | 100 | 100 | 100 |
| Glossary (glossary-adna) | 99 | 100 | 100 | 100 |
| Adopter (solo-developer) | 98 | 100 | 100 | 100 |

Sample-page band holds 96-99 Perf, 100/100/100 across A11y/BP/SEO. No regression from adding `/enterprise`.

**Finding**: Two consecutive cycles (17, 18) have produced persona-targeted index pages by reusing DocumentationLayout + CardGrid with near-zero incremental component work. The cost is DOM-density Perf drag — 6 and 11 points respectively below sample baselines. The pattern is fine *as long as these pages are not added to the Lighthouse sample set*; the trade-off (persona findability vs. tuned Perf on every page) is worth it in D2 and addressable in D6. The five-domain structure of /enterprise (four content sections + follow-ups) feels like the ceiling for single-page procurement reference — any more would need pagination or a collapsing disclosure pattern.

**Validation**: PASS — Build: 114 pages, 1.96s, 0 errors. Gates: 30/30 pass. A11y/BP/SEO = 100 on new page and all 5 sample pages.
**Carry-Forward**: Perf 89 on /enterprise joins /educators (94) in the D6 (Performance & Loading) queue. Two data points now inform that optimization: both are CardGrid-heavy index pages; both hit the same DOM-density ceiling; both can likely be addressed by a single component intervention (CardGrid lazy rendering or grid-level code-splitting).

### Cycle 19 — 2026-04-17

**Decadal**: D2 (Content Clarity Sprint)
**Target**: Close the remaining two D1-AAR persona-gap items in one cycle — (a) the **Compliance Walkthrough** requested by Enterprise ("short reference page showing how `how/sessions/` + `who/governance/` answer procurement-style questions") and (b) the **Startup First Hour** requested by Startup ("timeboxed 60-minute path for CTOs: clone → CLAUDE.md → STATE.md → first ADR"). Both built as additional index pages mirroring the `/educators` + `/enterprise` pattern from cycles 17-18.
**Before**: Enterprise reviewers arriving at `/enterprise` had a structured checklist but no Q&A-shaped walkthrough covering the five questions an auditor actually asks (who wrote this / what context / was it reviewed / how is concurrent work safe / how is the audit trail preserved). Startup CTOs had `/adopters/adopter-startup` describing what they do with aDNA but no timeboxed, step-by-step bootstrapping path — the quickstart was implicit.
**After**: Two new pages live. `/compliance` is a 5-question Q&A walkthrough with three CardGrids (sessions, governance, federation) plus a self-reference block pointing readers at this vault's own `how/sessions/history/`. `/startup-first-hour` is a 4-stage 60-minute path (clone / CLAUDE.md / STATE.md / first ADR) with per-stage time budgets, produced-file checkpoints, a self-reference block describing this vault's own bootstrap, and an hour-two guardrail ("don't scale prematurely"). Both cross-linked from their originating adopter pages.

**Changes**:
- NEW: `site/src/pages/compliance/index.astro` — 5-question compliance walkthrough. 3 content CardGrids (sessions, governance, federation) + Next Steps CardGrid (4 cards). Uses `DocumentationLayout`, `CardGrid`, `buildTechArticleJsonLD`. Self-reference section explicitly pointing at this vault's `how/sessions/history/` as the worked example.
- NEW: `site/src/pages/startup-first-hour/index.astro` — 60-minute CTO bootstrap path. 4 stage CardGrid cards + checkpoint CardGrid + Next Steps CardGrid. Per-stage Produced/Checkpoint bullets to make the checkpoint explicit. Self-reference section naming this vault's own bootstrap hour.
- `site/src/content/docs/adopter-enterprise-team.mdx`: added `[Compliance Walkthrough](/compliance)` to Related list (immediately after the Adoption Checklist entry).
- `site/src/content/docs/adopter-startup.mdx`: added `[Startup First Hour](/startup-first-hour)` as the first entry in the Related list.

**Lighthouse on both new pages + 5 sample pages (cycle-19 run)**:
| Page | Perf | A11y | BP | SEO |
|------|------|------|----|----|
| /compliance (new) | 100 | 100 | 100 | 100 |
| /startup-first-hour (new) | 100 | 100 | 100 | 100 |
| Homepage | 100 | 100 | 100 | 100 |
| Concept (triad) | 100 | 100 | 100 | 100 |
| Tutorial (first-claude-md) | 100 | 100 | 100 | 100 |
| Glossary (glossary-adna) | 100 | 100 | 100 | 100 |
| Adopter (solo-developer) | 100 | 100 | 100 | 100 |
| **Average** | **100** | **100** | **100** | **100** |

Every page at the ceiling — both new pages hit 100 Perf out of the gate, contradicting the cycle-17/18 expectation that CardGrid-heavy index pages would sit in the 89-94 band. The difference is DOM density: `/compliance` has 3 content CardGrids (10 total cards across all grids) and `/startup-first-hour` has 3 CardGrids (11 cards); `/educators` has 4 CardGrids (12 cards) and `/enterprise` has 5 CardGrids (15 cards). The 94 and 89 scores at cycles 17-18 were the upper-bound pattern, not the central tendency — CardGrid-heavy pages *can* hit 100 Perf when the grid count and card count are moderated.

**Accessibility validation**: axe-core (WCAG 2.1 AA) run against both new pages — 0 violations each. Gates 30/30 pass including G4 A11y on the existing sample set.

**Finding**: Persona-gap closure pages can hit 100/100/100/100 when (a) the DOM stays ≤3 CardGrids and ≤12 total cards, (b) every third heading breaks up the density with prose framing, and (c) no above-the-fold imagery is introduced. The /educators (4 grids, 12 cards, 94 Perf) and /enterprise (5 grids, 15 cards, 89 Perf) observations now have a ceiling curve behind them. The D2-close priority queue can recommend targeted DOM pruning on those two pages for D6 with a specific target band.

**Validation**: PASS — Build: 116 pages (was 114), 2.42s, 0 errors. Gates 30/30 pass. axe-core sweep on both new pages: 0 violations. Full Lighthouse evidence under `site/evidence/cycle19/{compliance,startup,homepage,concept,tutorial,glossary,adopter}.json`.
**Carry-Forward**: None. D1-AAR persona-gap queue fully closed with cycles 17-19 (educator, enterprise checklist, enterprise compliance walkthrough, startup first hour). /educators Perf 94 and /enterprise Perf 89 remain queued for D6 with the new ceiling-curve finding as optimization guidance.

### Cycle 20 — 2026-04-17

**Decadal**: D2 (Content Clarity Sprint) — closeout cycle + Decadal AAR
**Target**: Re-score 5-persona ranker at D2 end; produce the first pre/post ranker delta in Phase 7 per the D1 Change finding; file `aar_phase7_d2.md`; close M26; update STATE.md and roll the session to history.
**Before**: D2 baseline ranker recorded at cycle 11: 4.0 overall with Comprehension 3.8 / Actionability 3.6 / Relevance 3.6 the three weakest dimensions. Four persona-gap items from the D1 AAR queue remained open (educator kit, enterprise checklist, compliance walkthrough, startup first hour).
**After**: All four persona-gap items closed across cycles 17-19. D2-end ranker re-scored: overall **4.70** (Δ +0.70). The three D2-target dimensions moved most — Comprehension +1.0, Actionability +1.4, Relevance +1.2. Delight held flat at 4.0 across every persona (not a D2 target; flagged for D4/D8). `aar_phase7_d2.md` filed with scorecard, cycle-by-cycle summary, pre/post ranker matrix, per-persona rationales, top remaining pain points, and a 10-item D3 priority queue.

**Persona ranker delta (D2 start → D2 end)**:
| Dimension | D2 start | D2 end | Δ |
|-----------|----------|--------|---|
| Findability | 4.0 | 4.6 | +0.6 |
| Comprehension | 3.8 | 4.8 | +1.0 |
| Actionability | 3.6 | 5.0 | +1.4 |
| Trust | 4.8 | 5.0 | +0.2 |
| Relevance | 3.6 | 4.8 | +1.2 |
| Delight | 4.0 | 4.0 | 0 |
| **Overall** | **4.0** | **4.70** | **+0.70** |

**Lighthouse (5 sample pages, D2 close — unchanged from cycle 19):**
| Page | Perf | A11y | BP | SEO |
|------|------|------|----|----|
| Homepage | 100 | 100 | 100 | 100 |
| Concept (triad) | 100 | 100 | 100 | 100 |
| Tutorial (first-claude-md) | 100 | 100 | 100 | 100 |
| Glossary (glossary-adna) | 100 | 100 | 100 | 100 |
| Adopter (solo-developer) | 100 | 100 | 100 | 100 |
| **Average** | **100** | **100** | **100** | **100** |

**Changes**:
- NEW: `how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d2.md` — full decadal AAR (scorecard, cycle summary, D2 start + end ranker matrices with per-persona rationale, top pain points, 10-item D3 priority queue, 5-line AAR, cross-references).
- `how/campaigns/campaign_rosetta/missions/artifacts/iii_cycle_tracker.md`: cycle 19 and cycle 20 entries + D2 summary block (below); decadal schedule table updated D2 → complete with AAR link.
- `how/campaigns/campaign_rosetta/missions/mission_m26_d2_content_clarity.md`: O10 checkboxes ticked; `status: completed`.
- `STATE.md`: current-phase line, Phase 7 Progress table, Persona Ranker block, Last Session / Next Session Prompt all updated for D2 close and D3 queue.
- `how/sessions/active/session_20260417_m26_d2_kickoff.md` → `how/sessions/history/2026-04/session_20260417_m26_d2_kickoff.md` with `status: completed` and populated SITREP.

**Validation**: PASS — Build: 116 pages, 0 errors, 30/30 gates pass (inherited from cycle 19 — no code changes after cycle 19's Lighthouse run). This cycle is governance-only: AAR, tracker entries, mission close, STATE update, session move, decadal commit.
**Carry-Forward**: D3 priority queue seeded in the AAR. Phase gate per standing order #1 — halt before opening M27.

---

## Decadal D2 Summary — Content Clarity Sprint (Cycles 11-20)

- **AAR artifact**: [aar_phase7_d2.md](aar_phase7_d2.md)
- **Persona ranker (D2 start → D2 end)**: 4.0 → **4.70** (Δ **+0.70**). First pre/post ranker delta in Phase 7. Biggest lifts on the three D2-target dimensions: Actionability +1.4, Relevance +1.2, Comprehension +1.0. Trust +0.2 (near-ceiling). Findability +0.6. Delight held flat at 4.0 — carried to D4/D8.
- **Lighthouse**: All 5 sample pages held 100/100/100/100. Build grew from 112 → 116 pages (+4 persona-targeted landings). `/compliance` and `/startup-first-hour` shipped at 100/100/100/100 out of the gate — demonstrating that the /educators (94) + /enterprise (89) Perf drag is a DOM-density ceiling-curve, not an inherent cost of the landing-page pattern.
- **Content work**: 13/13 concepts and 8/8 patterns brought to rule-#6 compliance (plain-language opening). 21 files (12 concepts + 9 tutorials) converted from bullet-list endings to `## Next Steps` CardGrid. `GlossaryTooltip.astro` built and demo-wired in 2 files. Automated reading-level script (`scripts/reading_level.mjs`) authored for ongoing FKGL measurement.
- **Persona-gap closure**: all four D1-AAR persona-gap items closed — `/educators` (educator teaching kit), `/enterprise` (enterprise adoption checklist), `/compliance` (compliance walkthrough), `/startup-first-hour` (CTO 60-minute bootstrap).
- **Key carry-forwards into D3**: global cross-section "Related Elsewhere" affordance, breadcrumbs, pattern-page Next Steps rollout (8 pages), sidebar nav audit, researcher persona landing, tooltip rollout across 21 content files. Whole-file FKGL Grade-10 rewrite and CardGrid-dense perf tuning remain parked for D3-or-later and D6 respectively.

---

## Decadal D3 — Navigation & IA (Cycles 21-30)

### Cycle 21 — 2026-04-18

**Decadal**: D3 (Navigation & IA)
**Target**: O1 — D3 persona-ranker baseline + breadcrumb trail rollout (`Triad leg › Section › Page`) across every content page
**Before**: No breadcrumb nav; lateral navigation scent between sections requires returning to an index (top D2-residual pain point, cited by Researcher + Solo Developer)
**After**: Semantic `<nav aria-label="Breadcrumb">` renders above `<h1>` on every content detail page (concepts, patterns, tutorials, glossary, use-cases, comparisons, reference, adopters, community, how/publishing, how/workshops, how/lattice-examples) — leg + section + current-page trail. Component self-suppresses on homepage, 404, section indexes, and persona-landing roots.

**D3 persona ranker (decadal start — baseline = D2 close, per M27 mission):**
| Dimension | D3 start | D3 end (target) |
|-----------|----------|-----------------|
| Findability | 4.6 | 4.8+ |
| Comprehension | 4.8 | 5.0 |
| Actionability | 5.0 | 5.0 |
| Trust | 5.0 | 5.0 |
| Relevance | 4.8 | 5.0 |
| Delight | 4.0 | 4.0 (accepted flat) |
| **Overall** | **4.70** | **4.85+** |

**Lighthouse (5 sample pages, cycle 21 close — post-implementation):**
| Page | Perf | A11y | BP | SEO |
|------|------|------|----|----|
| Homepage | 100 | 100 | 100 | 100 |
| Concept (triad) | 100 | 100 | 100 | 100 |
| Tutorial (first-claude-md) | 100 | 100 | 100 | 100 |
| Glossary (glossary-adna) | 100 | 100 | 100 | 100 |
| Adopter (solo-developer) | 100 | 100 | 100 | 100 |
| **Average** | **100** | **100** | **100** | **100** |

| Category | Before (D2 close) | After (cycle 21) | Delta |
|----------|-------------------|------------------|-------|
| Performance | 100 | 100 | 0 |
| Accessibility | 100 | 100 | 0 |
| Best Practices | 100 | 100 | 0 |
| SEO | 100 | 100 | 0 |

**Changes**:
- NEW: `site/src/components/sections/Breadcrumb.astro` — self-contained component. Reads `Astro.url.pathname` against a 12-entry route map (`/learn/concepts/`, `/patterns/`, `/glossary/`, `/use-cases/`, `/learn/tutorials/`, `/learn/comparisons/`, `/reference/`, `/adopters/`, `/community/`, `/how/publishing/`, `/how/workshops/`, `/how/lattice-examples/`). Renders `<nav aria-label="Breadcrumb"><ol>` with leg-label `<li>`, `<a>` section link, and `aria-current="page"` trailing `<li>`. Separator `›` wrapped `aria-hidden="true"`. Suppresses when path does not match a detail-page prefix (homepage, persona landings, section indexes).
- `site/src/layouts/DocumentationLayout.astro`: imported Breadcrumb; rendered `<Breadcrumb pageTitle={title} />` inside `.doc-content` article, immediately above `<h1>`.

**Validation**: PASS
- Build: 116 pages, 2.45s, 0 errors.
- Playwright gates: 30/30 pass (including G4 axe-core WCAG 2.1 AA on homepage, concept, tutorial, pattern, 404 — all zero violations).
- Lighthouse: 100/100/100/100 on all 5 sample pages; no category dropped.
- Markup spot-check: 11 pages across concepts / tutorials / patterns / glossary / use-cases / comparisons / reference / adopters / community / how-publishing confirmed rendering breadcrumb with correct leg + section + title; homepage + section-index + persona-landing correctly suppress.
- Evidence: `site/evidence/cycle21/lh_{homepage,concept,tutorial,glossary,adopter}.json`

**Carry-Forward**: none — baseline cleanly recorded; component has no known gaps. Subsequent "back-to-index" affordance (O4, cycle 24) will refine the parent-link interaction by adding `← All concepts / All patterns / …` prefix links; current section link serves that role for now.

### Cycle 22 — 2026-04-19

**Decadal**: D3 (Navigation & IA)
**Target**: O2 — Pattern-page Next Steps CardGrid rollout (parallel to cycle 16's concept + tutorial rollout; 8 pattern pages were the one content-type still ending in a bullet-list `## Related`, cited by Enterprise in the D2 AAR as lateral-scent gap)
**Before**: 8 pattern pages (agents-md, base-extension, context-recipe, dual-audience, fair-envelope, federation-readiness, mission-decomposition, question-test) ended with `## Related` + 3-item bullet list. `dual-audience.mdx` Related list included a broken link to `/learn/concepts/dual-audience` (no concept file with that slug exists).
**After**: All 8 pattern pages end with `## Next Steps` + `<CardGrid columns={2}>` block carrying 4 scent-carrying cards each. Broken `/learn/concepts/dual-audience` link removed from `dual-audience.mdx` in the rewrite. Every card href verified against the site routes (all 200). Fourth card per page adds a lateral cross-section scent target (e.g., `question-test` → Knowledge Graph; `agents-md` → Context Optimization; `federation-readiness` → Knowledge Graph; `mission-decomposition` → Run a Campaign tutorial).

**Changes**:
- `site/src/content/docs/question-test.mdx` — added `import CardGrid`; replaced `## Related` with `## Next Steps` + CardGrid (Triad, Ontology, Base/Extension, Knowledge Graph)
- `site/src/content/docs/agents-md.mdx` — as above (Convergence, Token Selection, Context Recipe, Context Optimization)
- `site/src/content/docs/dual-audience.mdx` — as above, replacing broken concept link (Agentic Literacy, Question Test, Context Optimization, Governance Files)
- `site/src/content/docs/base-extension.mdx` — as above (Ontology, Open Standard, Question Test, FAIR Envelope)
- `site/src/content/docs/context-recipe.mdx` — as above (Context Optimization, Token Selection, AGENTS.md Routing, Convergence)
- `site/src/content/docs/fair-envelope.mdx` — as above (FAIR Metadata, Federation Readiness, Context Commons, Open Standard)
- `site/src/content/docs/mission-decomposition.mdx` — as above (Convergence, Token Selection, AGENTS.md Routing, Run a Campaign tutorial)
- `site/src/content/docs/federation-readiness.mdx` — as above (Lattice Composition, FAIR Envelope, Open Standard, Knowledge Graph)

**Lighthouse (5 sample pages, desktop preset, local preview — matches cycle 21 methodology):**
| Page | Perf | A11y | BP | SEO |
|------|------|------|----|----|
| Homepage | 100 | 100 | 100 | 100 |
| Concept (triad) | 100 | 100 | 100 | 100 |
| Tutorial (first-claude-md) | 100 | 100 | 100 | 100 |
| Glossary (glossary-adna) | 100 | 100 | 100 | 100 |
| Adopter (adopter-solo-developer) | 100 | 100 | 100 | 100 |
| **Average** | **100** | **100** | **100** | **100** |

| Category | Before (cycle 21) | After (cycle 22) | Delta |
|----------|-------------------|------------------|-------|
| Performance | 100 | 100 | 0 |
| Accessibility | 100 | 100 | 0 |
| Best Practices | 100 | 100 | 0 |
| SEO | 100 | 100 | 0 |

**Validation**: PASS
- Build: 116 pages, 2.48s, 0 errors.
- Playwright gates: 30/30 pass (including G4 axe-core WCAG 2.1 AA on homepage, concept, tutorial, pattern, 404 — all zero violations).
- Lighthouse: 100/100/100/100 on all 5 sample pages; no category dropped.
- Link spot-check: all 4 distinct new 4th-card hrefs return 200 in preview (`/learn/concepts/knowledge-graph`, `/learn/concepts/context-optimization`, `/learn/concepts/governance-files`, `/patterns/fair-envelope`, `/learn/concepts/convergence`, `/learn/concepts/open-standard`, `/learn/tutorials/run-a-campaign`).
- Markup spot-check: curl `/patterns/agents-md/` renders 4 `<a class="card">` under `<h2 id="next-steps">`; ToC picks up `next-steps` anchor.
- Evidence: `site/evidence/cycle22/lh_{homepage,concept,tutorial,glossary,adopter}.json`.

**Carry-Forward**: none — rollout clean across all 8 files. Existing `/learn/concepts/dual-audience` broken link incidentally removed (was a pre-existing defect in `dual-audience.mdx`'s Related list; not part of O2 scope but the rewrite forced its resolution). "Related Elsewhere" cross-section affordance (O3, cycle 23) will layer a second CardGrid below Next Steps to widen the lateral scent further.
