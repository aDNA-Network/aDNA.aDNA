---
type: session
session_id: session_2026-07-08_p1_6_hero_excellence
created: 2026-07-08
updated: 2026-07-08
status: paused_awaiting_operator
tier: 1
last_edited_by: agent_rosetta
campaign: campaign_storyweave
mission: mission_p1_6_hero_visual_excellence
persona: Rosetta
token_budget_estimated: "~150–250 kT (Session 1 of 2–3): O0 re-orient → O1 reference → O2 options → O3 build 3 comps → O3v headless-verify → O4 author+open pick gate → STOP"
executor_tier: opus
tags: [session, storyweave, hero, p1_6, comps, iss-gate]
---

# Session — P1.6 hero visual excellence (Session 1: O0 → O4)

## Intent
Execute mission_p1_6_hero_visual_excellence, Session 1 = the design arc up to the operator pick.
Produce reference synthesis (O1), an options memo (O2), **three high-fidelity hero comps** (O3:
T1 refined-SVG · T2 constellation-Canvas · T3 Deep-Field-WebGL) verified headless (O3v), and an
ISS **operator pick gate** (O4). STOP at the pick. **No `site/` edits this session** — comps are
throwaway Artifacts; the site build is O5 (Session 2, after the pick).

## Scope / files this session (all additive; site/src untouched)
- `how/campaigns/campaign_storyweave/artifacts/hero_references/` — reference set + synthesis
- `how/campaigns/campaign_storyweave/artifacts/p1_6_options_memo.md`
- `how/campaigns/campaign_storyweave/artifacts/comps/hero_comp_t{1,2,3}.html` (+ published Artifacts)
- `how/gates/<gate_id>.html` + `.pending` — the O4 pick gate
- mission status proposed → in_progress; this session file; STATE.md touch at close

## Conflict scan
- `git status` clean on `main`; `how/sessions/active/` empty (no peer session). No co-write risk.

## Log
- O0 — re-oriented: read mission, HomeHero.astro, build_graph_svg.mjs, hero_constellation.html
  (north star), vaults.json (15 connected / 53 unlinked / 68). Confirmed scope + operator's
  tier-coverage pick (all three: T1+T2+T3). Mission → in_progress.

## SITREP
**Completed (O0→O4):**
- O0 re-orient + session/mission→in_progress.
- O1 reference set + 10 provenance-linked design rules (`artifacts/hero_references/`).
- O2 options memo (`artifacts/p1_6_options_memo.md`) — recommend T2 production · T3 ceiling-check · T1 floor.
- O3 three comps built (`artifacts/comps/hero_comp_t{1,2,3}.html`) + published as Artifacts:
  - T1 Refined-SVG → https://claude.ai/code/artifact/12a5007a-b75e-4b33-aab4-283a76099d07
  - T2 Constellation → https://claude.ai/code/artifact/40c27fc0-34cb-46f2-9fee-bd46eeb58526
  - T3 Deep-Field-WebGL → https://claude.ai/code/artifact/792784da-f4aa-46a0-b073-fb78bfa97983
- O3v headless-verified (`visual_capture.mjs`): 0 console errors; responsive stack clean; dark+light legible;
  T3 WebGL renders (headless SwiftShader under-represents the bloom vs a real GPU). 4 axe items = comp-chrome
  (eval-bar contrast / missing landmarks), NOT hero content — production re-gates at gate-4/O6.
- O4 ISS pick gate authored + rendered + opened: `how/gates/p1_6_hero_tier_pick.html` (`decision_gate_3option`,
  rosetta persona) + `.pending` sentinel set. Screenshot-verified (radios + round-trip present).

**In progress / awaiting:** ⛩ operator pick at the O4 gate (approve T2 / amend to T1|T3 + axis notes).

**Next up:** on the pick → O5 build into site, O6 gates+real-Lighthouse (regen gate-10/19 fixtures), O7 ship-gate → deploy.

**Blockers:** none. Session PAUSES at the O4 human gate (mission continues O5–O7 post-pick). `#needs-human` (the pick).

**Files touched:** session file · mission status (→in_progress) · `artifacts/hero_references/{_reference_set,synthesis_hero_guidance}.md` · `artifacts/p1_6_options_memo.md` · `artifacts/comps/hero_comp_t{1,2,3}.html` · `how/gates/p1_6_hero_tier_pick.{data.json,html,pending}`. **No `site/src` edits** (hold contract preserved).

## Next Session Prompt
Storyweave P1.6 (mission_p1_6_hero_visual_excellence) is mid-flight — Session 1 delivered O0→O4 and paused at
the operator pick gate `how/gates/p1_6_hero_tier_pick.html`. **First, read the operator's pick**: check
`how/gates/p1_6_hero_tier_pick.output.json` (if they submitted the gate) or the operator's chat answer
(approve = T2 Constellation · amend = T1 Refined-SVG or T3 Deep-Field-WebGL + any axis-2/3/4 or gate-11 change).
The three comps are `how/campaigns/campaign_storyweave/artifacts/comps/hero_comp_t{1,2,3}.html`; the design
rules are `artifacts/hero_references/synthesis_hero_guidance.md`; the options memo is `artifacts/p1_6_options_memo.md`.
Then execute **O5**: build the picked tier into `site/src/components/sections/HomeHero.astro` as SSR baseline +
JS enhancement + a11y text-twin; regenerate `site/src/assets/hero_graph.svg` via `scripts/build_graph_svg.mjs`
if the layout changes; wire perf-lazy loading (`client:idle`-style); keep `/network`+`/commons` **zero-diff**.
**O6**: `npm run sync:graph` → `npx astro build` (0 err) → full `npm run test:gates` green → run a **real
Lighthouse on `/`** and regenerate `site/tests/gates/fixtures/lighthouse_*` within budget (LCP<2.5s·CLS<0.1·Perf≥90);
headless before/after (desktop+mobile, both themes) via `scripts/visual_capture.mjs` from repo root. **O7**:
present before/after + gate/perf at the ⛩ ship-gate → deploy `npx astro build` → `VERCEL_TOKEN=$SS_VERCEL_TOKEN
vercel --prebuilt --prod` (redact token). Archive the gate files to `how/gates/archive/p1_6_hero_tier_pick/`
after reading the output. Write the mission AAR (SO#5) at mission close.
