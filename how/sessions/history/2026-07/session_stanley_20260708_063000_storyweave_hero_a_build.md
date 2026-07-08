---
type: session
session_id: session_stanley_20260708_063000_storyweave_hero_a_build
user: stanley
machine: L1
started: 2026-07-08T12:40:00Z
status: completed
tier: 2
intent: "Storyweave — build direction A (the living-network graph-as-hero) into the real home hero. Hero-graph generator mode + home-only HomeHero variant + pixel-art-as-ground (gate-11); full test:gates green; headless-verify the real hero; hold deploy for the operator ship-gate."
executor_tier: opus
campaign: campaign_storyweave
mission: mission_p1_5_hero_spike
scope:
  directories: [site/src, scripts]
  files: [STATE.md]
files_modified:
  - scripts/build_graph_svg.mjs
  - site/src/components/sections/HomeHero.astro
  - site/src/pages/index.astro
  - STATE.md
files_created:
  - site/src/assets/hero_graph.svg
completed: 2026-07-08T13:30:00Z
---

## Activity Log

- 12:40 — Read the P2 graph generator + gate-11 spec. Key reconciliation: gate-11 checks a **visible** `img.hero-stage-img` whose *natural* size is 16:9 (not the display box) → the pixel-art can become a dimmed **ground** with no gate edit. Dispatched one build agent (scope = generator hero-mode + home-only HomeHero variant; `/network`+`/commons` must stay zero-diff).
- 13:10 — Agent returned: `build_graph_svg.mjs` emits `hero_graph.svg` (connected-only, 15 vaults, id `heroGraph`); `HomeHero.astro` gains the opt-in `heroGraph` graph-led variant + pixel-art ground + scrim; `index.astro` wires it. Self-verified the SVG contract + zero-diff.
- 13:25 — Central gate: `sync:graph` (both SVGs deterministic/current) → `astro build` clean (196 pp) → **`npm run test:gates` 313 passed**. Headless-captured home (desktop+mobile, dark+light) + `/network`+`/commons` — 0 console errors; the home fold now leads with the graph; the other two unchanged.
- 13:30 — STATE + session; committing. **Holding deploy for the operator ship-gate.**

## SITREP

**Completed:** Storyweave **direction A ("living network") hero — built + gate-green.**
- **Generator:** `build_graph_svg.mjs` now emits a compact connected-only **`hero_graph.svg`** (15 vaults · 27 `<text>` · viewBox 897×832 · gate-18 ≤2-hue · gate-22 no-JS/role=img/title/no-foreignObject/no-data-chart) alongside the byte-unchanged full graph.
- **Hero:** `HomeHero.astro` home-only graph-led variant (opt-in `heroGraph`): 2-col copy|graph; pixel-art `<Picture class="hero-stage-img">` kept as a **visible dimmed full-bleed ground** (gate-11 green) behind a scrim; gate-23 phrases intact; mobile stacks. **`/network`+`/commons` zero-diff.**

**Verification:** `astro build` clean (196 pp) · **full `test:gates` 313 passed** (gate-4 axe 0-violations dark+light) · home headless desktop+mobile+both-themes 0-err.

**In progress:** none.

**Next up:** **⛩ SHIP-GATE** — operator approves **deploy** (`vercel --prebuilt --prod`). Then continue Decade-1/2 per `campaign_storyweave`: apply the graph to `/network` + the home §1 "context democracy" diagram (NetworkDiagram.astro); EV3; **P3 (actionability) → P4 → P5**.

**Blockers:** deploy = operator ship-gate.

## Next Session Prompt

**Storyweave direction-A "living network" hero is built + gate-green (313); the operator ship-gate (deploy) is the open decision.** If the operator approves deploy: `cd site && npx astro build` then `VERCEL_TOKEN=$SS_VERCEL_TOKEN vercel --prebuilt --prod` (**redact the token**; no date-only `vaults.json` churn; `git fetch` + FF before push). Changes (committed + pushed): `scripts/build_graph_svg.mjs` (hero-mode → `site/src/assets/hero_graph.svg`), `HomeHero.astro` (opt-in `heroGraph` graph-led variant + pixel-art ground), `index.astro`. `/network`+`/commons` are zero-diff (they don't pass `heroGraph`). Then continue: apply the new radial graph to `/network` + the home §1 "context democracy" diagram (`NetworkDiagram.astro`); EV3 (named security contact); **P3 actionability** (vault-card purpose lines + search + adopt/publish rail) → **P4** (docs/de-jargon) → **P5** (craft/a11y/perf capstone). Instrument = headless T0 harness (from repo root); ship per phase; operator ship-gate each phase; every site change keeps `npm run test:gates` green. Possible polish noted: the hero graph panel is dense at desktop scale — could enlarge nodes / thin labels if desired.
