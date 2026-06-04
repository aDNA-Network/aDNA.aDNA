---
type: artifact
artifact_class: design_spec
created: 2026-06-03
updated: 2026-06-03
mission: mission_adna_str_p5_m510_e1_brand_positioning
campaign: campaign_adna_serious_tool_readiness
phase: 5
decadal: E1
persona: rosetta
status: draft   # Stage-0 positioning gate: operator ratifies hero copy + section plan before Stage-5 build
last_edited_by: agent_stanley
grounded_by:
  - what/design/front_page_doctrine.md
  - what/design/narrative_ethos_public_good.md
  - what/exemplars/sites/_reference_set.md
  - site/src/content/reference/visual-identity-v2.mdx
tags: [design_spec, e1, homepage, brand, positioning, manifesto_hero, stages_0_4, max_iii]
---

# E1 Homepage Design Spec — Stages 0–4 (for operator sign-off)

> Output of [[skill_site_design_pipeline]] Stages 0–4 for the new aDNA.network homepage. **No `site/` code is written until the operator ratifies the hero copy + section plan (Stage-0 positioning gate).** Every choice instantiates [[front_page_doctrine]] (the *how*) + [[narrative_ethos_public_good]] (the *why/what it says*), grounded in the [[_reference_set]].

## Stage 0 — Vision & audiences

- **Positioning:** aDNA.network is the **forward face of the aDNA network** — an *Agentic Context Democracy*. The homepage's job: make a newcomer feel *this is a movement I can join and trust*, while a developer sees *a real, open standard + network I can build on today*.
- **Dial:** **~55/45** (ratified). Revolutionary via the manifesto claim + verbs; restraint via real artifacts + measured claims + no marketing adjectives.
- **Audiences (layered on one page, Vercel-style):** (1) the **builder** (dev/researcher who wants to build/publish/compose context graphs); (2) the **movement-aligned** newcomer (wants AI to serve the public good and is looking for where to stand); (3) the **partner/org/operator** evaluating whether to join the network. The hero speaks to all three; sections 2–5 route each.

## Stage 1 — Design-DNA

Already captured: [[front_page_doctrine]] (above-fold law · 5±1 sections · density bands · ~55/45 dial · motion budget · decision table) + the 10-site [[_reference_set]] synthesis. Tonal north star [[site_hermes]]; functional analogs [[site_huggingface]] + [[site_valtown]] (who-not-how-many) + [[site_replicate]] (live affordances); movement+credibility [[site_ethereum]]; calm-conviction register [[site_anthropic]].

## Stage 2 — IA / section sequence (the doctrine §8 worked example, ethos-threaded)

**Above the fold — Sparse, ONE focus:** the **manifesto hero** (see Stage-4 copy directions) — words-as-focus, 1 primary + 1 secondary CTA, no competing banner.

Then **5 sections** (Sparse → Medium → Dense → Medium → Sparse):

| # | Section | Band | What it does | Reference / persona |
|---|---------|------|--------------|---------------------|
| 1 | **What a context democracy is** | Medium | one-line definition + one network diagram (CanvasForge) as demo-as-proof | Ethereum credibility · Linear "show the real thing" · Newcomer |
| 2 | **The living registry** | Dense (one organizing principle) | real vaults/forges/graphs as cards w/ live affordances (pull · compose · view-graph · open-docs) + a proof signal (status/phase, federation, updated) + creator attribution; scannable grid + "see all" | Replicate entries · HF registry-as-content · Val Town curate-don't-dump · Marketplace Consumer |
| 3 | **How partners build & share** | Medium | the build→share→govern flow with *real* CLAUDE.md/registry snippets (re-theme the existing 3-step `steps` from solo-dev → partner-network) | Vercel dual-audience · Solo Dev + Marketplace Publisher |
| 4 | **The standard underneath** | Medium | MIT · open spec · Lattice Protocol · GitHub · version — the trust anchor, placed at 4-of-5 (visible above the footer, **not buried** — fixes audit F-10) | Anthropic substance · Enterprise · Researcher |
| 5 | **Join the network** (+ public-good tease) | Sparse | the partner/community CTA + a **tease of the public-good commons** (featured aligned subnetworks — WGA · Context Commons · WilhelmAI · Rare Archive — its own Track-G/E5 surface) | Ethereum role-pathways · Val Town who-not-how-many · Community Lead |

This holds 5 sections (vs the current 4 + buried trust); avoids the audit's F-07 (7-section sprawl) and F-10 (buried trust).

## Stage 3 — Wireframe (block-out)

```
┌──────────────────────────────────────────────┐
│ nav: Standard · Marketplace · Network ·        │  breadth-first (HF/Ethereum)
│      Community · Labs · Docs        [GitHub]   │
├──────────────────────────────────────────────┤
│                                                │
│   ⌗  [MANIFESTO HERO — 40–55 words]            │  Sparse · ONE focus · words-as-focus
│      [Explore the network] [Read the standard] │  1 primary + 1 secondary CTA
│                                                │
├──────────────────────────────────────────────┤
│ 1  What a context democracy is + ◇diagram      │  Medium
├──────────────────────────────────────────────┤
│ 2  The living registry  [card][card][card]…    │  Dense · one principle · "see all →"
├──────────────────────────────────────────────┤
│ 3  Build → Share → Govern  (real snippets)     │  Medium (re-themed steps)
├──────────────────────────────────────────────┤
│ 4  The standard underneath  MIT·spec·Lattice   │  Medium · trust anchor (not buried)
├──────────────────────────────────────────────┤
│ 5  Join the network  + public-good subnetworks │  Sparse · participation scent
└──────────────────────────────────────────────┘
```

## Stage 4 — Hi-fi: brand-system v3 deltas (extends visual-identity-v2, folds D18)

- **Palette:** keep teal `#0D7377` (signal) + amber `#D4A017` (sparing accent); ≤2 fighting colors (doctrine). Evaluate **dark-mode-first** for the hero (Hermes/Linear register) with light parity — *operator/Visual-Designer call at build*.
- **Type:** keep Space Grotesk (display) / Inter (body) / JetBrains Mono (code); the manifesto hero uses the display face at a confident scale (one strong typeface does the work — Linear lesson).
- **Motion:** entrance + scroll-reveal only; one *meaningful* motion (e.g., the network diagram composing) per the budget; `prefers-reduced-motion` zeroed; Lighthouse Perf=100 hard gate (Motion Designer owns).
- **Imagery:** abstract-geometric only (no text-in-image / no figurative people / no marketing gradients); reuse D11 assets first; the network diagram via CanvasForge (not raster). Registry/showcase use real data, not stock.
- **Voice:** ~55/45 — measured claims + real artifacts; **zero** marketing adjectives (Anti-Bloat + Brand Strategist guard).

## ✅ HERO RATIFIED 2026-06-03 — Direction A ("Context is our shared inheritance")

The operator selected **Direction A** at the Stage-0 positioning gate. This is the homepage hero, locked:

> **Context is our shared inheritance.**
> Language and DNA were co-created by everyone before us. The context that powers AI should be too — built, shared, and governed in the open, for the good of all. aDNA is the network where that happens, on the Lattice Protocol.
> `[Explore the network]` `[Read the standard]`

Stage 5 build is unlocked. The Movement Skeptic guard applies: section 1 (definition + diagram) and section 4 (the real standard) must immediately back the inheritance claim, or it reads unearned.

## Hero copy — the 3 directions presented (A ratified; B/C preserved for audit)

All ~40–55 words, ~55/45, ethos subtle, no marketing adjectives, name the Lattice Protocol as substrate.

**Direction A — Shared inheritance (ethos-forward):**
> **Context is our shared inheritance.**
> Language and DNA were co-created by everyone before us. The context that powers AI should be too — built, shared, and governed in the open, for the good of all. aDNA is the network where that happens, on the Lattice Protocol.
> `[Explore the network]` `[Read the standard]`

**Direction B — Agentic context democracy (movement-forward):**
> **An agentic context democracy.**
> A self-governed network where people and their agents build, share, and govern context graphs together — so the abundance AI creates belongs to everyone. Built on the open aDNA standard and the Lattice Protocol.
> `[Join the network]` `[Read the standard]`

**Direction C — Build on shared context (builder + ethos):**
> **Build context graphs the world can build on.**
> aDNA is the open standard and network for context-graph-driven agentic systems — a commons where anyone can publish, compose, and govern shared context for the good of all. Runs on the Lattice Protocol.
> `[Explore the network]` `[Read the standard]`

*(Recommendation: B leads with the democracy and is the boldest at ~58; A is the most distinctive/poetic at ~52; C is the most concrete/builder-credible at ~50. A blend — B's headline + A's inheritance sentence — is viable. The Movement Skeptic flags that whichever we pick must be backed immediately by section 1's diagram + section 4's real standard, or it reads unearned.)*

## Per-cycle plan — E1 decadal (10 cycles, post-sign-off)

1. Brand-system v3 deltas to `visual-identity-v2` + tokens (dark-mode/motion decisions ratified) · 2. HomeHero re-build (chosen manifesto copy; above-fold law) · 3. Section 1 (definition + CanvasForge network diagram) · 4. Section 2 the living registry (cards over `vaults.json`; live affordances) · 5. Section 2 cont. (curate/density/"see all") · 6. Section 3 build→share→govern (re-theme `steps`) · 7. Section 4 the standard underneath (trust anchor, un-bury) · 8. Section 5 join + public-good tease · 9. nav re-frame (breadth-first) + responsive + motion pass · 10. **E1 decadal AAR + 30-persona Reviewer Lens Pass** (mandatory Brand Strategist + Motion Designer + Design Critic + Visual Designer + Newcomer + Movement Skeptic).

## Persona routing (Reviewer Lens Pass at cycle 10)

Mandatory: Brand Strategist (dial), Motion Designer (motion budget), Design Critic ("made on purpose"), Visual Designer (craft), Newcomer (60-sec What/Why/How), Movement Skeptic (earned conviction). Adopters: all 5 core + Marketplace Consumer + Community Lead. Per-track ranker target ≥4.95; no dim <4.80.

## Related

- [[front_page_doctrine]] · [[narrative_ethos_public_good]] · [[_reference_set]]
- [[skill_site_design_pipeline]] · [[mission_adna_str_p5_m510_e1_brand_positioning|M5.10/E1 mission]]
- current homepage: `site/src/pages/index.astro` + `site/src/data/home.ts` (the build target)
