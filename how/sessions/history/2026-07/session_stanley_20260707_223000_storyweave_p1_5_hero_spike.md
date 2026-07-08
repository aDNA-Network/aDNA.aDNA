---
type: session
session_id: session_stanley_20260707_223000_storyweave_p1_5_hero_spike
user: stanley
machine: L1
started: 2026-07-08T05:00:00Z
status: completed
tier: 1
intent: "Storyweave P1.5 — home-hero direction spike. Operator viewed the correct live P1 deploy in incognito and read it as 'the old site' (P1 kept the above-the-fold hero). Build a 4-mode hero direction lab (Current + A/B/C) + feasibility, present at the operator gate. Throwaway comps — no site/ edits."
executor_tier: opus
campaign: campaign_storyweave
mission: mission_p1_5_hero_spike
scope:
  directories: [how/campaigns/campaign_storyweave/]
  files: [STATE.md]
files_created:
  - how/campaigns/campaign_storyweave/missions/mission_p1_5_hero_spike.md
  - how/campaigns/campaign_storyweave/artifacts/p1_5_hero_feasibility.md
  - how/campaigns/campaign_storyweave/artifacts/p1_5_hero_lab.html
files_modified: [STATE.md]
completed: 2026-07-08T05:40:00Z
---

## Activity Log

- 05:05 — Diagnosed the operator's "still the old site": read the incognito screenshot + curl'd the live domain — the deploy IS correct/new (adna.network/about 200, reframe live, x-vercel-cache HIT on the new build; no Cloudflare cache). Root cause = **the above-the-fold hero was preserved by P1**; the changes are below-fold + on other pages. Operator chose "rethink the hero entirely."
- 05:15 — Read `HomeHero.astro` (image-led; the pixel-art `<Picture>` + title fill the fold). Built a 4-mode **hero direction lab** (Current + A living-network / B village / C editorial), real copy + proof, on-brand, canvas-evoked pixel-art + the P2 graph.
- 05:30 — Headless-verified all 4 modes (T0 harness, hash-routed): **0 console errors**. Fixed a toggle bug (per-hero `display` overrode the mode switch → all stacked) — moved `display` into the mode rules. Published the Artifact (`8cdc28a9…`).
- 05:40 — Feasibility + recommendation ([[p1_5_hero_feasibility]]); mission doc; STATE. Presenting at the P1.5 gate.

## SITREP

**Completed:** P1.5 hero spike — the 4-mode direction-lab Artifact + `p1_5_hero_feasibility.md` (per-direction gate-11/23 reconciliation + rec) + `mission_p1_5_hero_spike.md`. Established that P1+P2 IS live (the "old site" read was above-fold, not a deploy failure).

**In progress:** none — awaiting the operator hero-pick.

**Next up:** **⛩ P1.5 gate (operator):** pick a direction (A living-network / B village / C editorial / hybrid; rec **A**) + the gate-11 posture. → a follow-on build mission implements the pick in `HomeHero.astro` (+ `index.astro`), keeps full `test:gates` green, headless-verifies the real hero (before/after), ships behind a ship-gate + deploy.

**Blockers:** operator gate.

**Files touched:** created the mission + feasibility + the lab HTML (preserved); modified STATE. Committed + pushed aDNA.aDNA.

## Next Session Prompt

**Storyweave P1.5 hero spike is delivered; the operator gate is open.** The 4-mode hero direction lab is at `https://claude.ai/code/artifact/8cdc28a9-25a0-415d-a3d5-9fa5d951787c` (source `how/campaigns/campaign_storyweave/artifacts/p1_5_hero_lab.html`); the recommendation is in `how/campaigns/campaign_storyweave/artifacts/p1_5_hero_feasibility.md` (rec **A — living-network / graph-as-hero**; B village = warm alternative + cleanest gate-11; C editorial = light/legible; an A+B hybrid is on the table). **On the operator's pick:** record it on `mission_p1_5_hero_spike` (→ `completed` + a 5-line AAR), then **build the chosen hero** into `site/src/components/sections/HomeHero.astro` (+ `site/src/pages/index.astro`) — keep **gate-11** (a pixel-art `<Picture>`, 16:9, alt `/pixel-art|wordmark/` — retain it as a supporting element for A/C, or full-bleed for B), **gate-23** (the two verbatim lead phrases stay), gate-4/9; run the full `npm run test:gates` green; headless-verify the REAL hero before/after (T0 harness from the repo root); ship behind an operator ship-gate + `vercel --prebuilt --prod` (redact the token). Then continue Decade-1/2 per `campaign_storyweave` (the graph on `/network` + home §1 diagram; EV3; P3 actionability → P4 → P5). Note: P1+P2 is already live on adna.network; this is the above-the-fold hero, the one piece that reads as "unchanged."
