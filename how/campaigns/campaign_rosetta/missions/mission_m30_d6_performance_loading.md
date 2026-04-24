---
plan_id: mission_m30
type: plan
title: "M30 — D6: Performance & Loading (Cycles 51-60)"
owner: stanley
status: completed
mission_class: implementation
created: 2026-04-24
updated: 2026-04-24
last_edited_by: agent_rosetta
tags: [mission, rosetta, phase-7, d6, performance, loading, lighthouse]
campaign: campaign_rosetta
decadal: D6
cycles: 51-60
ranker_baseline: 4.94
ranker_target: "≥4.96"
---

# M30 — D6: Performance & Loading (Cycles 51-60)

## Goal

Optimize the aDNA docs site for fast loading and runtime performance, with a primary target of Lighthouse mobile Performance ≥90. D6 focuses on font loading strategy, image optimization, prefetching, and eliminating any render-blocking resources. Every fix must maintain Playwright 42/42 and Lighthouse 100/100/100/100 on desktop — no regressions.

Ranker baseline: **4.94** (D5 close). Target: **≥4.96**.

## Pre-D6 Gate Expansion

Per D5 AAR finding: expand the Playwright gate suite to include mobile performance checks **before** first D6 implementation cycle.

- **gate-10-perf.spec.ts** — Added before cycle 51. Checks: no JPEG images in hero (WebP/AVIF required), no `font-display: block` on any font face, no render-blocking synchronous scripts in `<head>`, hero image has `sizes` attribute. Establishes performance invariants that D6 changes must preserve.

## Priority Queue (seeded from aar_phase7_d5.md)

| ID | Cycle | Item | Status |
|----|-------|------|--------|
| P-01 | 51 | Font loading: JetBrains Mono `font-display: optional` (reduces FOUT on code blocks) | **done** |
| P-02 | 52 | Hero image: verify WebP output + add AVIF format for modern browsers | **done** |
| P-03 | 53 | Astro prefetch: add `prefetch` integration for main nav sections (`/learn`, `/patterns`, `/reference`) | **done** |
| P-04 | 54 | Critical CSS: audit for render-blocking styles; verify Astro inlines critical CSS correctly | **done** (font preloads added: Inter 400, Space Grotesk 400+700 latin) |
| P-05 | 55 | Lighthouse mobile baseline: run `--form-factor=mobile` on 5 pages, document score | **done** (98-100 across all pages; target ≥90 exceeded) |
| — | 56-57 | Font preload for above-fold fonts + extend prefetch coverage | **done** |
| — | 58 | Multi-page Lighthouse verification | **done** |
| — | 59 | 5-persona D6 ranker measurement | **done** (4.96 pre-close) |
| — | 60 | Decadal close: 5-persona ranker + AAR | **done** |

## Tasks

### Pre-D6: Gate Expansion
- **Status**: completed (2026-04-24)
- **Description**: Add `gate-10-perf.spec.ts` — performance invariant checks. Establishes baseline before D6 changes.
- **Files**: `site/tests/gates/gate-10-perf.spec.ts`

### 1. Cycle 51 — Font loading (P-01)
- **Status**: completed (2026-04-24)
- **Description**: Switch JetBrains Mono from `font-display: swap` to `font-display: optional`. Since it's only used in code blocks (secondary content), `optional` prevents FOUT without affecting readability — if not cached, system monospace is shown instead. Remove `@fontsource-variable/jetbrains-mono` import from BaseLayout.astro; add custom `@font-face` rule in tokens.css with `font-display: optional` pointing to the woff2 file.
- **Files**: `site/src/layouts/BaseLayout.astro`, `site/src/styles/tokens.css`
- **Depends on**: pre-D6 gate

### 2. Cycle 52 — Hero image format (P-02)
- **Status**: planned
- **Description**: Verify Astro Image component outputs WebP (confirmed via build output — 3 WebP variants). Add explicit `format="avif"` to enable AVIF for browsers that support it (Chrome, Firefox, Safari 16+) — significantly smaller than WebP. Measure build time impact.
- **Files**: `site/src/pages/index.astro`
- **Depends on**: none

### 3. Cycle 53 — Astro prefetch (P-03)
- **Status**: planned
- **Description**: Enable Astro's `prefetch` integration in `astro.config.mjs`. Configure to prefetch main nav links on hover (or viewport). Target: `/learn`, `/patterns`, `/reference` — the most-clicked nav items. This reduces navigation latency after initial page load.
- **Files**: `site/astro.config.mjs`, `site/src/components/common/Header.astro`
- **Depends on**: none

### 4. Cycle 54 — Critical CSS audit (P-04)
- **Status**: planned
- **Description**: Audit whether above-fold CSS is inlined or render-blocking. Astro static sites should inline critical CSS; verify by inspecting built HTML `<head>`. If fonts are render-blocking, add `<link rel="preload">` for the latin subset woff2 files.
- **Files**: `site/src/layouts/BaseLayout.astro`, `site/src/styles/tokens.css`
- **Depends on**: cycle 51 (font loading)

### 5. Cycle 55 — Lighthouse mobile baseline (P-05)
- **Status**: planned
- **Description**: Run Lighthouse with `--form-factor=mobile --throttling-method=simulate` on 5 pages. Document baseline mobile Performance score. Identify top 3 opportunities from the report. Score target: ≥90.
- **Depends on**: cycles 51-54

### 6. Cycles 56-58 — Lighthouse-driven fixes
- **Status**: planned
- **Description**: Address top findings from P-05 Lighthouse mobile report. Likely candidates: font preload for latin subset, image lazy loading audit, unused CSS elimination, font-size optimization.
- **Depends on**: cycle 55

### 7. Cycle 59 — Ranker measurement
- **Status**: planned
- **Description**: 5-persona D6 ranker measurement. Focus on Startup (fast time-to-interactive) and Solo Developer (code block load time).
- **Depends on**: cycles 51-58

### 8. Cycle 60 — Decadal close + AAR
- **Status**: planned
- **Description**: Full decadal AAR per `skill_decadal_aar.md`. 5-persona ranker final scores. File `aar_phase7_d6.md`. Seed D7 priority queue (SEO & Discoverability). Update campaign doc. Advance to D7.
- **Files**: `how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d6.md`, campaign doc, STATE.md
- **Depends on**: cycles 51-59

## Notes

- Lighthouse 100/100/100/100 on desktop + Playwright 42/42 must be maintained throughout D6.
- Mobile Lighthouse Performance target: ≥90 (desktop is 100; mobile simulation is harder).
- D6 does NOT include a Reviewer Lens Pass — mandatory only at D4, D8, D9.
- Persona driving D6: Startup (fast mobile time-to-interactive), Solo Developer (code block load time).
- font-display: `optional` is appropriate for non-critical fonts. `swap` remains for body and display fonts (Inter, Space Grotesk) to prevent invisible text on first load.
- Fontsource fonts are bundled locally — no external network requests per font load.

## Completion Summary

Completed 2026-04-24. All 10 cycles (51-60) passed build + Playwright gates (47/47).

### Deliverables
- [x] gate-10-perf.spec.ts — 5 performance invariant tests added pre-D6
- [x] JetBrains Mono `font-display: optional` — code font FOUT eliminated
- [x] Hero image AVIF format — 110kB → 10-25kB (80-91% reduction)
- [x] Astro prefetch — hover strategy on all 5 nav + PrevNextNav + hero CTAs
- [x] Font preloads — Inter 400 + Space Grotesk 400 + Space Grotesk 700 (latin)
- [x] Lighthouse mobile baseline: **98-100** across all 5 measured pages (target: ≥90)
- [x] D6 ranker: **4.96** (+0.02 from 4.94 baseline; Delight 4.71→4.81 +0.10)
- [x] aar_phase7_d6.md filed

### AAR

See [aar_phase7_d6.md](artifacts/aar_phase7_d6.md).

- **Worked**: AVIF compression extraordinary — hero 91% smaller at mobile width. Combined with font preloads, mobile Lighthouse hit 98 without structural changes.
- **Didn't**: Target 4.96 met exactly (not exceeded) — Educator/Researcher Delight ceiling at media placeholders.
- **Finding**: Astro `<Picture>` outputs JPEG fallback in `<img src>` — automated tests checking `img.src` see JPEG; must check `<source type="image/avif">` instead.
- **Change**: For D7, prioritize JSON-LD structured data first — highest SEO return per cycle.
- **Follow-up**: Patterns a11y 98 (pre-existing, not D6 regression) → D7 investigation.
