---
type: exemplar_set
created: 2026-07-11
updated: 2026-07-11
status: active
last_edited_by: agent_rosetta
campaign: campaign_storyweave
mission: tbd_p5_replan          # candidate input to the P5 re-plan (mission not yet authored)
objective: candidate-input
tags: [reference, onboarding, install, demo-as-proof, storyweave, p5, candidate]
---

# Onboarding / install-UX reference set — for the P5 re-plan

**Operator-surfaced (2026-07-11):** review the Nous **Hermes agent** landing page
(`hermes-agent.nousresearch.com`) — "a nice video of usage, direct install links" — as a design
reference for adna.network's onboarding. This is a **focused candidate capture** feeding the
Storyweave **P5 re-plan**, per [[skill_reference_inspection]] — *not* ratified doctrine (durable
front-page doctrine needs the skill's ≥6-exemplar gate; see "Gate" below).

> **✅ SUPERSEDED 2026-07-12 — the ≥6-exemplar gate is now met.** Storyweave P5 **O3** completed the install-forward
> comparator set (added **Bun · Astro**; re-lensed Val Town · Raycast · Vercel through the install-forward lens; Hermes
> already done). The **durable** record now lives at `what/exemplars/sites/_reference_set.md` §Install-forward synthesis —
> per-site artifacts [[site_bun]] · [[site_astro]] + install-forward addenda on the four existing ones — and the promoted
> ruleset at [[front_page_doctrine]] **§10** (RATIFIED durable 2026-07-12). This focused candidate manifest is kept as the campaign-local
> provenance trail (the Hermes-only basis that motivated the pass).

## Method (honest per [[doctrine_visual_inspection]])
Hermes was captured **headless** on 2026-07-11 — `scripts/visual_capture.mjs --base
https://hermes-agent.nousresearch.com --routes / --viewports desktop,mobile-lg --themes dark`
(frames in `./hermes_capture/`, local evidence) — because WebFetch's markdown conversion can't
see the JS-embedded demo panel the operator flagged. WebFetch (2026-07-11) supplied the install
copy + section structure. The durable exemplar [[site_hermes]] (inspected 2026-06-03, hero-tonal
lens) is refreshed with an onboarding pointer.

## Why adna.network is the gap this set addresses (measured)
- **No demo/video/GIF anywhere on adna.network today.** "Proof-of-life" = the constellation hero +
  three **static ASCII terminal mocks** in "How it Works" (`site/src/data/home.ts` `.step-demo`).
- **Install is a single one-liner** (`git clone …/aDNA.git ~/aDNA && cd ~/aDNA && claude`,
  single-sourced from `site/src/data/install_truth.json`, copy-button) that lives **only in
  `/get-started`** — never surfaced on the home hero.
- The idea is **not new to the vault**: [[front_page_doctrine]] already names a **"one demo"**
  pattern and cites Hermes's "See It in Action." It was captured as doctrine but **never built** —
  no backlog item B1–B13 covers it. So this is *operationalizing existing doctrine*, not invention.

## Curated set — lead exemplar + in-vault anchors
`tonal`: 0 = sleek-conservative … 100 = progressive-revolutionary. This is a **focused** set (the
operator's exemplar + the vault's own doctrine); the P5 re-plan can complete a ≥6 install-forward
comparator spread (e.g. Val Town · Raycast · Bun · Vercel · Astro) if durable doctrine is wanted.

| # | Exemplar | Focus | Tonal | Install treatment | Demo-as-proof |
|---|----------|-------|-------|-------------------|---------------|
| 1 | **Hermes agent** (lead) | agent product | 65 | hero-level **dual-mode**: "Install desktop app" button **+** "Install via terminal" `curl … \| bash` one-liner (macOS/Linux toggle) — *in the hero*; Mac/Win/Linux download cards below | **large "HERMES DESKTOP — BETA PREVIEW" product panel** — the agent visibly drafting release notes → committing → opening a PR (the "video of usage") |
| 2 | [[site_hermes]] (durable) | same, hero-tonal | 65 | "setup (install/config code blocks)" section | `demo_as_proof: "See It in Action" video` |
| — | [[front_page_doctrine]] (in-vault doctrine) | our house rules | — | — | the **"one demo"** pattern (already ratified, unbuilt) |

## Per-exemplar — the one thing to steal · the thing to avoid
1. **Hermes** — *Steal:* **install is hero-level and the demo shows the product actually working**
   (a real task, not a feature list); **license-forward** eyebrow ("OPEN SOURCE • MIT LICENSE") earns
   trust in the first second; numbered **feature-imagery pairing** scans faster than prose. *Avoid:*
   the **platform download cards** don't map (aDNA is *clone-and-run*, not a downloadable app — no
   DMG/EXE); the single-accent electric-blue is *their* identity — steal the **confidence + art
   direction**, keep aDNA's SS-Ghibli / Tokyo-Night register (don't recolor).
2. **site_hermes (durable lens)** — *Steal:* the reminder that the calm layout is what makes the
   radical claim credible (restraint carries revolution). *Avoid:* re-reading it as *only* a hero
   tonal north star — the onboarding/install lens is the new, actionable part.

## Gate (skill_reference_inspection)
⚠ **Focused candidate capture, NOT the durable-doctrine gate.** 1 primary exemplar + 1 durable-lib
anchor + 1 in-vault doctrine anchor — below the skill's **≥6-exemplar / both-tonal-poles** bar to
*emit ratified front-page doctrine*. Therefore `synthesis_onboarding_guidance.md` emits **candidate
rules for the P5 re-plan to weigh + ratify**, each with provenance. If the re-plan wants durable
doctrine, complete the install-forward comparator set there.
