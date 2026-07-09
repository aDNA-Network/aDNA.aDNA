---
type: session
session_id: session_2026-07-08_p1_6_hero_build_ship
created: 2026-07-08
updated: 2026-07-08
status: active
tier: 2
last_edited_by: agent_rosetta
campaign: campaign_storyweave
mission: mission_p1_6_hero_visual_excellence
persona: Rosetta
token_budget_estimated: "~120–200 kT (Session 2 of 2): push Session-1 → O5 build T2 into HomeHero.astro → O6 gates+Lighthouse+headless → O7 ship-gate + deploy + close"
executor_tier: opus
tags: [session, storyweave, hero, p1_6, o5, o6, o7, build, ship]
---

# Session — P1.6 hero visual excellence (Session 2: push + O5→O7)

## Intent
Operator picked **T2 (Constellation)** + authorized the push. Push Session-1, build T2 into the site as a
progressive-enhancement Canvas over the SSR SVG, gate + perf it, present the ship-gate, deploy on approval.

## Scope / files
- `site/src/components/sections/HomeHero.astro` — the ONLY production code file (graph-led branch).
- Governance: mission (→completed+AAR), STATE, this session, gate archive.

## Conflict scan
- `git status` clean on `main`; no peer session declaring `site/`. No co-write risk.

## Log
- **Push** ✓ — `origin/main` 2d2bc38→9783512 (Session-1 comps/refs/memo/gate/STATE); gitleaks clean.
- **O5** ✓ — added `<canvas class="hero-graph-canvas" aria-hidden>` over the SSR SVG in the graph-led
  branch; ported the approved T2 constellation render (orbs/arcs/pulse/seeds/hover-doorway); guards
  (JS-on · IntersectionObserver · reduced-motion static frame · DPR≤2 · idle init); cross-fade + dim SVG
  (kept in flow + a11y tree); click→/vaults. **Bug caught + fixed:** the hero `<section>` is always
  `.dark` (dark-first), so palette detection was switched from page-body luminance to
  `fig.closest('.dark')` → the constellation stays dark on light pages too (matches its dark panel).
- **O6** ✓ — `sync:graph` no-op · `astro build` 0 err (196 pp) · **full `test:gates` 313 green** ·
  **real Lighthouse `/`: Perf 1.00 · LCP 489ms · CLS 0.000 · TBT 0** · headless dark+light+mobile
  (axe 0, console 0) · **no-JS** = SSR SVG (27 `<text>`) · **reduced-motion** = static constellation.

## SITREP
_(filled at O7 close)_

## Next Session Prompt
_(filled at O7 close)_
