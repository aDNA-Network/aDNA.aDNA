---
type: session
session_id: session_2026-07-08_p1_6_hero_build_ship
created: 2026-07-08
updated: 2026-07-08
status: completed
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

- **O7** ✓ — ship-gate presented + operator approved ("yes"). `astro build` fresh → `VERCEL_TOKEN=… vercel --prebuilt --prod` (token redacted; env-var pattern, never `--token`) → **production READY**; verified live: adna.network `/` + `/network/` + `/commons/` all 200, axe 0, console 0; constellation live on `/`, others still image-led. Pick gate archived; mission COMPLETED + AAR; STATE updated; code pushed.

## SITREP
**Completed:** push (Session-1) · O5 build T2 into HomeHero.astro · O6 (313 gates green · Lighthouse `/` Perf 1.00/LCP 489ms/CLS 0.000 · no-JS + reduced-motion verified) · O7 deploy to adna.network + verify live + close. **Mission `mission_p1_6_hero_visual_excellence` COMPLETED + AAR; Storyweave Decade-1 hero pass SHIPPED + LIVE.**
**In progress:** none.
**Next up:** Storyweave **Decade-2 (P3–P5)** is the next planning horizon (actionability · docs/de-jargon · craft/a11y/perf capstone) — re-plan post-Decade-1 per the charter. Optional P1.6 follow-ups: per-vault node-click deep-links; cross-surface graph-language cohesion (Axis 4).
**Blockers:** none.
**Files touched:** `site/src/components/sections/HomeHero.astro` (only production code) · mission (→completed+AAR) · STATE.md · both session files → history · `how/gates/archive/p1_6_hero_tier_pick/`.

## Next Session Prompt
Storyweave P1.6 is **SHIPPED + LIVE** (the T2 constellation is the home hero on adna.network; mission completed + AAR). Decade-1 (P0–P2 + the P1.5/P1.6 hero pass) is fully shipped. The campaign `campaign_storyweave` is `active` with **Decade-2 (P3–P5) as the next horizon** — provisional per the charter (`how/campaigns/campaign_storyweave/campaign_storyweave.md`): P3 actionability · P4 docs/de-jargon · P5 craft/a11y/perf capstone; re-plan post-Decade-1 before building, ship per phase, persona-ranker gate ≥4.0 (capstone ≥4.95), headless T0 instrument, honest register. If continuing the hero specifically: optional follow-ups are per-vault node-click deep-links (currently → `/vaults`) and applying the orb+arc graph language to `/network` + the home `NetworkDiagram` (Axis-4 cohesion). The T1 (SVG) + T3 (WebGL) comps at `campaign_storyweave/artifacts/comps/` remain the tier-decision record. Push is operator-gated (SO-11).
