---
type: exemplar_site_set
artifact_class: reference_set_manifest
created: 2026-06-03
updated: 2026-06-03
mission: mission_adna_str_p5_m58_reference_design_dna
campaign: campaign_adna_serious_tool_readiness
phase: 5
persona: rosetta
status: active
last_edited_by: agent_stanley
site_count: 10
last_inspected: 2026-06-03
tags: [exemplar, reference_set, site_inspection, design_dna, m5_8, ecosystem_site]
---

# Reference Set — Ecosystem-Site Design Inspection (M5.8)

> The curated corpus of exemplar sites inspected to ground the front-page **[[front_page_doctrine]]**. Each site is chosen to give **one clean signal** on a specific cell of two axes — **tonal** (sleek-professional ↔ progressive-revolutionary) and **functional** (docs · registry/marketplace · community/network · movement/manifesto · protocol · product-polish) — so a single inspection yields a usable rule rather than mush. Inspection method: [[skill_reference_inspection]]. Self-reference: this manifest *is* the worked output of that skill's "curate + inspect + synthesize" steps.

## The set (10 sites)

| # | Site | Functional role | Tonal (0–100 revolutionary) | The one thing to steal | Artifact |
|---|------|-----------------|:--:|------------------------|----------|
| 1 | **Hermes / nousresearch.com** | movement/manifesto | **65** | sparse ~40-word hero, dark-minimal, ~5 sections, one demo-as-proof, flat nav — the tonal north star (operator's exemplar) | [[site_hermes]] |
| 2 | **huggingface.co** | registry/marketplace + community | 50 | registry-IS-the-hero; live trending content over marketing fluff; community via real activity + scale; illustration over stock; breadth-first mega-nav | [[site_huggingface]] |
| 3 | **ethereum.org** | protocol + network + movement | 60 | movement *and* protocol at once — "the internet that belongs to you" + "10 years, 100% uptime"; emotional lede validated by engineering credibility | [[site_ethereum]] |
| 4 | **linear.app** | product (sleek) | 25 | the 2026 craft bar: real product visuals (no abstract illustration), fast-through-restraint (minimal motion), 1:1 whitespace:content | [[site_linear]] |
| 5 | **vercel.com** | dev + exec dual-audience | 35 | dual-audience layering on one page (framework names + ROI metrics) *(also an AVOID for "fast, scalable, reliable" adjective bloat)* | [[site_vercel]] |
| 6 | **docs.stripe.com** | docs density | 30 | density via *omission* (no prose on index) + semantic grouping (use-case-first, ~25 products in 3 buckets); separates guide from reference *(also an AVOID for page-bloat)* | [[site_stripe_docs]] |
| 7 | **anthropic.com** | mission/safety | 40 | calm-conviction "serve humanity" register: specificity over sentiment, no "revolutionary/transformative," links to actual policy = substance | [[site_anthropic]] |
| 8 | **replicate.com** | registry (run-it-now) | 35 | every registry entry is executable (one line of code) + proven (run counts, e.g. "29.4M runs") + social (creator avatars) | [[site_replicate]] |
| 9 | **val.town** | registry + community (scrappy, young) | 45 | a *young* network feels alive via *who* uses it (named testimonials + 20+ logos) not *how many* — no vanity metrics | [[site_valtown]] |
| 10 | **raycast.com** | consumer polish | 50 | delight via reframing ("not about saving time, about feeling like you're never wasting it") + motion that reinforces the speed promise without overwhelming | [[site_raycast]] |

**Axis coverage check (skill gate):** tonal poles both covered (Linear 25 ≤ 40; Hermes 65 ≥ 60). Functional axis covers docs (Stripe), registry/marketplace (HF, Replicate, Val Town), community/network (HF, Val Town, ethereum.org), movement/manifesto (Hermes, ethereum.org, Anthropic), protocol (ethereum.org), product-polish (Linear, Raycast), dual-audience (Vercel). ✅

## Cross-site synthesis — the distributions (provenance for the doctrine)

The doctrine's numeric rules come from the *clustering* across the set, not any single site. Tier-A countable fields:

| Field | Distribution across the set | Clustering / rule it grounds |
|-------|-----------------------------|------------------------------|
| **Hero word count** | Hermes ~40 · HF ~0 (registry-as-hero) · Ethereum ~30 · Linear ~25 · Vercel ~25 · Anthropic ~25 · Replicate ~25 · Val Town ~25 · Raycast ~15 | **Two legal hero modes:** *manifesto* clusters **25–40 words**; *registry-as-hero* ≈ **0** marketing words. Outliers: Raycast 15 (consumer one-liner). → Doctrine: manifesto 35–60 (we allow slightly higher than the cluster to carry the "democracy" claim; ceiling still well under bloat). |
| **Section count** | Hermes ~5 · HF 6 · Ethereum 7 · Linear 5 · Vercel 8+ · Anthropic 5 · Replicate ~8 · Val Town 6 · Raycast 8 | **Mission/sleek sites cluster 5–6** (Hermes, Linear, Anthropic, HF, Val Town); **dense registry/dev sites run 7–8** (Vercel, Replicate, Raycast, Ethereum). → Doctrine homepage budget **5 ±1**; registry/marketplace surfaces may run denser internally. |
| **Above-fold focus** | Hermes=headline · HF=registry · Ethereum=headline+credibility · Linear=product preview · Vercel=hero+case-study · Anthropic=mission statement · Replicate=generated-output hero · Val Town=headline · Raycast=CTA+keyboard | **ONE dominant focus every time** (NN/g 57%). The focus is either *the words* (manifesto), *the product/registry* (proof), or *a single demo*. Never plural. |
| **Demo-as-proof** | Hermes=video · HF=trending content · Ethereum=uptime stat · Linear=real UI · Vercel=animated build log · Anthropic=Mars rover fact · Replicate=run counts · Val Town=named users · Raycast=animated keyboard | The credible sites carry conviction with **one real artifact/number**, not adjectives. |
| **Nav model** | flat (Hermes, Val Town) · mega/breadth-first (HF, Ethereum, Raycast) · product-narrative (Linear, Vercel) · semantic-bucket (Stripe docs) | Breadth-first mega-nav for ecosystems with many surfaces (HF/Ethereum); flat nav for manifesto sites. |
| **Registry treatment** | is-the-hero (HF) · marketing-first-then-grid (Replicate) · curated-showcase (Val Town) · n/a (others) | Registry-as-hero works at HF *scale*; at *young* scale (us, Val Town) lead with curated showcase + named contributors, not raw counts. |
| **Community treatment** | live-activity + scale (HF) · who-not-how-many (Val Town) · governance-visible (Ethereum) · footer-only (most) | Make community visible through **real activity or named people**, not a "we have a Discord" link. |

**Tier-B qualitative (needs_operator_capture where noted):** dark-mode-default (Hermes, Linear, Raycast — `needs_operator_capture` for exact palette/contrast); motion (Linear restraint, Raycast rich, Vercel build-log — `needs_operator_capture` for motion feel); live-registry interactivity (HF, Replicate — `needs_operator_capture`).

## NN/g grounding (research provenance)

- **Homepage real-estate allocation** (50-homepage study): content 24% · navigation 11% · self-promotion 15% · ads 3% · **filler/unused 33%** → **52% of screen space wasted** on things users ignore. Useful space *declined* 45% (2001) → 39% (2013). Guidance: *"cut the fluff; spend pixels on content + navigation."* Source: nngroup.com/articles/homepage-real-estate-allocation/.
- **Scrolling & attention:** ~**57%** of viewing time is above the fold; users scroll only if what's above the fold is *promising*; **one dominant focus** above the fold ("don't make me think"). Source: nngroup.com/articles/scrolling-and-attention/ + page-fold-manifesto.

## Maintenance

Re-inspection is a diffable activity: update `last_inspected` per row + re-run the synthesis pass in [[skill_reference_inspection]]. Add a manifesto-pure site (constitution/charter page) or swap Raycast↔Arc per operator screenshot availability if the tonal-revolutionary pole needs reinforcement.

## Related

- [[front_page_doctrine]] — the captured ruleset this corpus grounds
- [[skill_reference_inspection]] — the method that produced these artifacts
- [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p5_m58_reference_design_dna|M5.8 mission]]
- `site/src/content/reference/writing-guidelines.mdx` — LIFT/AVOID register (Vercel + Stripe appear on both this set and the AVOID list; the per-site artifacts separate liftable technique from refused pattern)
