---
type: review_findings
artifact_class: hero_feasibility
created: 2026-07-08
campaign: campaign_storyweave
mission: mission_p1_5_hero_spike
phase: P1.5
persona: agent_rosetta
status: draft   # awaits the P1.5 operator gate (pick a hero direction)
tags: [storyweave, p1_5, hero, home, gate_11, gate_23, adr_032, spike]
---

# P1.5 — home-hero direction spike → recommendation

> **Why this exists.** Viewing the correctly-deployed P1 site *in incognito*, the operator read the home as "the old site." The cause: P1 **deliberately preserved the above-the-fold hero** (pixel-art image + title + manifesto) and changed only what sits below it + on `/about` + `/vaults/graph`. So the refresh is real but **doesn't announce itself at the fold**. This spike rethinks the hero — build distinct above-the-fold directions, pick one, then build it.

## The lab (Current + 3 directions)
**▶ https://claude.ai/code/artifact/8cdc28a9-25a0-415d-a3d5-9fa5d951787c** (source: `p1_5_hero_lab.html`). Toggle **Current / A / B / C** — each a full-fold mockup with the **real copy + real proof** (68 vaults · the 4 named subnetworks), on-brand (Tokyo-Night), responsive, AA, headless-verified (**0 console errors**). Including "Current" lets you A/B the fold directly. *(The pixel-art is **evoked in canvas**; the real SS-Ghibli art + Space Grotesk drop in at build.)*

## The three directions
| | Thesis | Fold reads as | Feel |
|---|---|---|---|
| **A — Living network** | *a real, running network — here it is* | the **P2 connected graph** is the hero (aDNA + III/Astro hubs, alive), message + 68-proof beside it | confident, "it's real" |
| **B — Village (ADR-032)** | *your context, in the open, as a living commons* | the **SS-Ghibli scene as immersive ground**, headline + reframe + proof composited in | warm, emotional, identity-forward |
| **C — Editorial** | *an open standard, proven* | a **plain-language headline** + a **hard proof card** (68 · the 4 subnetworks · conformance), image supporting | crisp, credible, legible |

## Gate reconciliation (the real constraint)
Both load-bearing home gates stay satisfiable in **all three** — the difference is where the pixel-art lives:
- **gate-11** (a pixel-art `<Picture>`, AVIF+WebP, 16:9 ±10%, alt `/pixel-art|wordmark/`):
  - **A** — graph is the hero → keep the pixel-art `<Picture>` as a **supporting band** (gate still finds `.hero-stage-img`); *or* amend gate-11 to accept the graph as the hero visual (bigger).
  - **B** — the pixel-art **IS** the full-bleed `<Picture>` → **cleanest fit, no gate change**; text contrast handled by a scrim (gate-4).
  - **C** — keep a compliant `<Picture>` as the **supporting strip** → no gate change.
- **gate-23** (the lead keeps "open standard for organizing project knowledge" + "the open coordination protocol underneath"): all three retain both phrases in the copy — **satisfiable in all**.
- **gate-4/9** (AA both themes · 320–1440 no overflow): B needs the scrim for text-over-art contrast; A/C are text-on-panel (straightforward).

## Build cost
- **A** — *medium-high*: reuse the P2 SSR graph as a hero element (must still render **static/no-JS** for gate-4/perf, with optional progressive animation) + the split copy/graph layout.
- **B** — *medium*: recompose headline/reframe/proof **over the existing hero image** + a scrim; reuses the real PNG.
- **C** — *low*: typographic recompose + a proof card; image shrinks to a supporting strip.

## Recommendation (operator picks at the gate)
- **Primary → A (Living network).** It makes the strongest, most *aDNA* promise the fold — "this is a real, running network" — reuses + amplifies the graph we just rebuilt (narrative cohesion across the whole Storyweave arc), and surfaces proof immediately. It's also the biggest, clearest departure from the current image-led fold (directly answering "looks like the old site").
- **Strong alternative → B (Village)** if you'd rather lead with **warmth + SS-Ghibli identity** than the graph — and it's the cleanest gate-11 fit.
- **Also on the table → an A+B hybrid:** the graph as the hero *on* a warm composed ground (best of both; slightly more build).
- **Safe/light → C** if you want the fastest, most legible, credibility-first fold.

## Gate ask
Operator: **pick a direction** (A / B / C / hybrid; rec **A**), and confirm the **gate-11 posture** (keep a supporting pixel-art `<Picture>` for A/C — no gate change — vs. amend gate-11). → a follow-on mission builds the pick into `HomeHero.astro` (+ `index.astro`), keeps the full `test:gates` green, headless-verifies the real hero (before/after), and ships behind a ship-gate + deploy.
