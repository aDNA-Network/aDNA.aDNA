---
type: ranker
title: "Storyweave M5.3 — capstone 4-lens ranker (campaign-graduation gate)"
campaign: campaign_storyweave
mission: mission_p5_3_a11y_perf_reach
objective: O7
owner: stanley
status: active
created: 2026-07-13
last_edited_by: agent_rosetta
tags: [ranker, storyweave, p5, capstone, decadal-aar]
---

# M5.3 capstone ranker — the campaign-graduation gate

> **Method.** `skill_decadal_aar` reviewer-lens-pass — the campaign's ratified persona gate (governance
> CLAUDE.md §2). Four lenses score the **live post-M5.3 site** (not just the diff) 0–5; the **average is
> the hard gate**, target **≥ 4.95** to graduate. Scores are grounded in captured evidence
> (`o7_ranker/` flagships + `o1_capture`/`o2_capture`/`o5_capture`/`o7_hero_context` + gate/perf/axe
> runs), scored **critically** — this gate graduates a 7-phase campaign, so it is honest, not a
> rubber-stamp. Register held throughout: warm · calm · **honest**.

## Verification base (all GREEN)

- **Gates:** full `npm run test:gates` = **371 passed** (359 baseline + gate-19 +2 + gate-4 +10).
- **a11y:** axe-0 **both themes** across ~33 routes (gate-4 = 36 both-mode tests, durable; + long-tail T0 sweep dark+light).
- **Perf:** home **Perf 100 / LCP 0.49 s / CLS 0 / TBT 0** (desktop, held); gate-19 hard on 4 surfaces.
- **No unintended diff:** `/network`+`/commons` changes are the intended global OG-meta + footer-link only.

## The four lenses

| Lens | Score | What earns it / what docks it |
|---|---|---|
| **Design-Critic** | **4.75** | **+** Cohesive Tokyo-Night / SS-Ghibli identity; token-driven design system; harmonized cards; the new hero keyboard-focus ring is crisp, system-consistent craft; comprehensive both-theme a11y polish; consistent policy pages. **−** The **hero-letterbox**: black bars baked into 4 doc-hero PNGs render as visible dead-space on **`/get-started` (a flagship onboarding surface)** + `/reference`/`/patterns`/`/how`. A visible, recurring image defect on a flagship is a fair dock at the near-flawless bar. (No clean mechanical fix — a full-bleed re-cut is imagen/design work; auto-crop is variable + upscales.) |
| **Newcomer** | **4.90** | **+** Evocative, clear hero ("Language and DNA were co-created by everyone before us"); the **install one-liner is right there** (copy pill) + "Open standard · MIT" eyebrow; "What a context democracy is" (4 pillars); honest "How it Works" steps; "New to aDNA? Start here"; the living registry proves it's real; clear P4 reading paths. **−** No **live demo (R1)** yet — "How it Works" is honest ASCII mocks, not a screencast of the agent orienting itself; a "show me it working" newcomer gets a mock (the mock is honest, so a small dock, not a gap). |
| **Adopter** | **4.95** | **+** Everything an evaluator needs is present + honest: the spec (v2.5, MIT, one click); **68 real vaults** as proof-of-life; conformance levels; full docs corpus; the **honest zero-tracking `/privacy` notice** + security page build trust; Perf 100 + axe-0 signal quality; the install one-liner lowers the bar. **−** Only cosmetic (the letterbox) — substance is complete + trustworthy. |
| **Movement-Skeptic** | **4.95** | **+** M5.3's strongest lens. The `/privacy` notice ("collects nothing about you," verifiable, names Vercel honestly) is **radical honesty**; the "hold, don't fix" restraint didn't invent problems; the i18n plan honestly says "low-bandwidth already excellent, i18n deferred"; the registry shows **real** vaults (no invented community); the install one-liner is real (single-sourced); the canvas-drift note documents a known limit honestly. **−** The live demo (R1) is honestly deferred — the ASCII mocks are labeled honest fallbacks, not hype. |

## Result

**Average = (4.75 + 4.90 + 4.95 + 4.95) / 4 = `4.89`.** ← **honest capstone score.**

**Strong, but `4.89` is short of the `≥ 4.95` graduation bar.** The gap is driven entirely by **two items the operator already ratified as deferred to the in-person dev-rel session**:

1. **The hero-letterbox re-cut** (Design-Critic −0.25) — the primary remaining craft debt; a full-bleed re-cut of 4 doc-hero PNGs (imagen/design work; no clean mechanical fix — see O7 notes).
2. **The R1 demo screencast** (Newcomer −0.10) — M5.1b, operator-deferred to in-person.

**Everything solo-able in M5.3 is complete + verified + excellent.** The residual to `≥ 4.95` is precisely the two in-person items — not new solo work.

## Decision surfaced to the operator (ship-gate)

This is new information vs. the plan-time "graduate at M5.3 close" call (which did not know the ranker would land `4.89`, gated by the letterbox too). Options presented via the ship-gate:

- **(A) Ship + graduate now at `4.89`** — the two deferred in-person items become documented post-graduation follow-ups; re-rank to `≥ 4.95` when they land. Matches the graduate-at-close intent; honest about the gap.
- **(B) Ship M5.3, hold the `completed` flip** — until the letterbox re-cut + R1 land in-person, then re-rank `≥ 4.95`. Keeps the exit bar literal.
- **(C) Accept an auto-crop of the letterbox now** — bars gone (lifts Design-Critic toward ~4.9), at the cost of variable crops + mild retina upscale + a compositional call on the operator's art; then graduate.

_(Ranker recorded honestly; the operator chooses the graduation path. Not flipped to a score ≥4.95 that the evidence doesn't support.)_
