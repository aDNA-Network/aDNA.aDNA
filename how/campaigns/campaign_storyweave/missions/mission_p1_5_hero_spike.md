---
plan_id: mission_p1_5_hero_spike
type: plan
title: "P1.5 — home-hero direction spike"
campaign: campaign_storyweave
phase: P1.5
owner: stanley
status: completed   # operator picked A (living network / graph-as-hero) — "perfect, I love it"; the build mission follows
mission_class: design_spike
executor_tier: opus
token_budget_estimated: "~50–80 kT (1 session): one interactive 4-mode hero lab Artifact (Current + A/B/C) + headless verify + feasibility note. Follows the P0.5 spike pattern."
created: 2026-07-08
updated: 2026-07-08
last_edited_by: agent_rosetta
tags: [plan, storyweave, p1_5, hero, home, spike, gate_11, gate_23]
---

# Mission: P1.5 — home-hero direction spike

**Goal.** Fix the finding the operator surfaced live: the deployed P1 refresh **doesn't announce itself above the fold** (P1 kept the image-led hero; the changes are below it + on `/about` + `/vaults/graph`). Rethink the hero — build distinct above-the-fold directions, get a pick, then build it. **Throwaway comps, NOT `site/` edits.**

## The finding
Viewing the correct live deploy in **incognito**, the operator read the home as "the old site." Root cause = the above-the-fold hero (pixel-art image + "The aDNA Network" title + manifesto) was preserved; every P1 change sits below it. The fold must carry the new message + proof.

## Objectives
| # | Objective | Output | Status |
|---|-----------|--------|--------|
| O1 | Build a 4-mode **hero direction lab** (Current + A living-network / B village / C editorial), real copy + proof, on-brand, responsive, AA | Artifact (published) | ✅ done — [lab](https://claude.ai/code/artifact/8cdc28a9-25a0-415d-a3d5-9fa5d951787c); source `artifacts/p1_5_hero_lab.html` |
| O2 | Headless-verify (T0 harness) all 4 modes | 0 console errors, desktop shots | ✅ done |
| O3 | Feasibility + per-direction gate-11/gate-23 reconciliation + recommendation | [[p1_5_hero_feasibility]] | ✅ done |
| O4 | **Operator gate** — present the lab | direction = **A** (living network / graph-as-hero); gate-11 = pixel-art as visible dimmed ground (no gate edit) | ✅ operator picked A ("perfect, I love it") |

## Key finding
All three directions keep **gate-23** (the two verbatim lead phrases) and can keep **gate-11** green — the difference is where the pixel-art `<Picture>` lives: **B** keeps it as the full-bleed hero (cleanest); **A/C** move it to a supporting role (still gate-found) or amend gate-11. Recommendation: **A (Living network)** — the graph-as-hero makes "a real, running network" the fold + reuses the P2 graph; **B** the warm alternative; **C** the light/legible one.

## Gate (mission exit)
Operator picks a direction + the gate-11 posture. → a follow-on build mission implements the pick in `HomeHero.astro` (+ `index.astro`), keeps the full `npm run test:gates` green, headless-verifies the real hero (before/after), ships behind a ship-gate + deploy. On the pick: mission → `completed` + a 5-line AAR (SO#5).

## Standing-order compliance
- Spike only — **no `site/` edits**. Artifact + repo docs LOCAL; push operator-gated.
- Instrument = headless T0 harness ([[doctrine_visual_inspection]]) — all 4 modes render-verified Chrome-free.
- AAR at gate-close (SO#5); token budget above (SO#11); register guardrail (warm/calm/honest) held in every mode's copy.

## AAR (2026-07-08)
- **Worked:** the incognito screenshot + curl diagnosis correctly separated "deploy failed" (it hadn't) from "the fold doesn't announce the refresh" (the real issue); the 4-mode lab (incl. **Current** for direct A/B) made the fix obvious and the pick fast ("perfect, I love it").
- **Didn't:** the first lab render stacked all 4 modes (per-hero `display:` overrode the toggle) — caught + fixed in headless before publish; a reminder that mode-toggles must own the `display` property.
- **Finding:** the operator's "old site" reaction was itself the finding — a real refresh must change the **above-the-fold** moment, not just below it; and gate-11 checks the *source* asset's 16:9 (not the display box), so the pixel-art can become a dimmed **ground** behind a new hero with no gate edit.
- **Change:** treat "does the fold announce the change?" as an explicit hero acceptance criterion in future site refreshes.
- **Follow-up:** the build mission implements direction A (graph-as-hero on the warm pixel-art ground) behind the full gate suite + a ship-gate.
