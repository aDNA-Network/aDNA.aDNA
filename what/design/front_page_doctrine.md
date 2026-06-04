---
type: design_doctrine
artifact_class: front_page_doctrine
created: 2026-06-03
updated: 2026-06-04
mission: mission_adna_str_p5_m58_reference_design_dna
campaign: campaign_adna_serious_tool_readiness
phase: 5
persona: rosetta
status: active   # dial value ratified at the M5.7/M5.8 operator gate; §1/§4 reconciled to the SHIPPED homepage at the E1 decadal close (ADR-032, 2026-06-04)
last_edited_by: agent_stanley
companions:
  - site/src/content/reference/visual-identity-v2.mdx   # what surfaces LOOK like (tokens, type, palette, image prompts)
  - site/src/content/reference/writing-guidelines.mdx   # how prose READS (clarity, conciseness contract, LIFT/AVOID)
  - what/design/narrative_ethos_public_good.md   # WHY/WHAT a surface says — the public-good ethos every surface draws from
grounded_by:
  - what/exemplars/sites/_reference_set.md   # 10-site inspection + cross-site distributions
  - nngroup.com/articles/homepage-real-estate-allocation
  - nngroup.com/articles/scrolling-and-attention
graduates_to: site/src/content/reference/front-page-doctrine.mdx   # ported into the site reference collection at build time (post-ratification)
tags: [design_doctrine, front_page, landing_surface, how_much_is_too_much, density, above_the_fold, m5_8, ecosystem_site]
---

# Front-Page Design Doctrine — "How Much Is Too Much"

> The **third companion** to the site's design references. `visual-identity-v2` governs *what a surface looks like* (tokens, type, palette, imagery). `writing-guidelines` governs *how prose reads* (clarity, the per-page conciseness contract, the LIFT/AVOID register). **This doctrine governs *how much, where, and in what balance* a landing/marketing surface is composed** — the layer neither companion covers. It answers the operator's question directly: *how much is too much for the front page, and what's the good process?*
>
> Every numeric rule below cites its provenance — a reference site (see [[_reference_set]]) and/or an NN/g finding. The rules are the *clustering* of 10 inspected exemplars, not one site's choice. **Self-reference (Standing Order #8):** this doctrine's worked example (§8) is the proposed new aDNA.network homepage — the vault designing its own forward face by its own doctrine.

## 1. The Above-the-Fold Law

**One dominant focus. Always.** NN/g: ~57% of viewing time is above the fold, and users scroll only if what's there is *promising*; the homepage should have **one** major focus, not a committee of competing elements ("don't make me think"). Across all 10 references, the above-fold focus was singular every time — *the words* (Hermes, Anthropic, Ethereum), *the product/registry* (Linear, Hugging Face), or *one demo* (Vercel build log, Raycast keyboard). Never plural.

**Two legal hero modes** (pick one per surface):

| Mode | When | Spec | Provenance |
|------|------|------|------------|
| **Manifesto** | the home/landing surface of a movement | **35–60 words**; the claim *is* the focus; no banner image competing | Hermes ~40 · Ethereum ~30 · Anthropic ~25 (cluster 25–40; we allow up to 60 to carry the "democracy" claim, still far under bloat) |
| **Registry-as-hero** | a marketplace/registry surface at scale | ≈0 marketing words; real trending content is the hero | Hugging Face · Replicate (note: works at *scale*; young networks use curated showcase — Val Town) |
| **Image-led manifesto** | a movement surface with an illustrative brand register (post-ADR-032) | a single SS-Ghibli / Tokyo-Night hero **scene** as the focus, with the manifesto title + line as **live text composited over** it (not baked into the image) — image and words read as *one* composed focal unit, never competing elements | aDNA.network shipped (cycles 146–147); the warm register carries emotional conviction the bare-words mode can't |

> **ADR-032 reconciliation (2026-06-04):** the shipped homepage uses **image-led manifesto** — the "The aDNA Network" hero scene with the Space-Grotesk-Bold title + manifesto line as live text over a darkened band. This *reverses* the earlier "demote the banner below the words" reading (cycle 2): the single-focus law is satisfied not by removing the image but by **composing** image + title into one focal unit (the title leads; the scene is its ground). The pre-pivot *abstract-only* imagery guardrail is superseded by the SS-Ghibli illustrative register — purpose-over-decoration, AA contrast, and **no baked title text** still hold.

**CTA discipline above the fold:** **max 1 primary + 1 secondary.** More than two competing CTAs violates the single-focus law.

## 2. The Section Budget

**Homepage: 5 sections ±1.** Mission/sleek references cluster at 5–6 (Hermes ~5, Linear 5, Anthropic 5, HF 6, Val Town 6); dense registry/dev sites run 7–8 (Vercel 8+, Replicate ~8, Raycast 8, Ethereum 7) — but those are mature products with more to sell, and they pay a cognitive-load cost. aDNA's homepage holds **5 ±1**.

- **Each section answers exactly one question.** (Mirrors the `writing-guidelines` per-section purpose constraint.)
- **The delete-the-disposable-section rule:** if a section doesn't change what a visitor *does or believes*, cut it. (Design Critic Critique Prompt.)
- Internal surfaces (marketplace browse, docs hub) may run denser — the budget governs the *homepage*, not every page.

## 3. Density Bands

Three named bands; a homepage progresses **Sparse (above fold) → Medium (mid) → Dense (only for registry/showcase)**.

| Band | Feel | ~Ideas/screen | Reference | Use for |
|------|------|:--:|-----------|---------|
| **Sparse** | high whitespace, manifesto | 1 | Hermes, Anthropic | hero, "join the network" |
| **Medium** | product proof + value | 2–3 | Linear, Ethereum | "what it is" + diagram, "how partners build" |
| **Dense** | scannable grid, one organizing principle | many (one rule) | HF, Replicate, Stripe-docs | the living registry, showcase |

**Cognitive-load cap:** dense sections must stay within the Accessibility Auditor's *Cognitive Load* working-memory budget — many items, **one** organizing principle (Stripe's lesson: density via *omission* + semantic grouping, never cramming).

## 4. The Sleek ↔ Revolutionary Dial

A 0–100 scale (0 = pure corporate-sleek, 100 = pure revolutionary-manifesto). Inspected sites span Linear 25 → Anthropic 40 → HF/Raycast 50 → Ethereum 60 → Hermes 65.

**House setting: ~55 revolutionary / 45 restraint** *(operator-RATIFIED 2026-06-03).* Calmer than Hermes's 65/35 because aDNA must keep **docs credibility** and the "good of humanity" register matches Anthropic's calm-conviction — but warmer/higher than Anthropic's ~40 because aDNA's idea is genuinely novel and should feel exciting.

**Shipped register (2026-06-04):** the Tokyo Night dark-first + SS-Ghibli-warm reskin (ADR-032) *realizes* this ~55/45 dial without moving it — the cozy, hopeful register supplies the conviction/emotion points (the "exciting because genuinely novel" half), while the measured claims, real artifacts, and the `writing-guidelines` AVOID discipline hold the restraint half. The dial value is unchanged; the warm register is **how 55/45 is now *felt*** rather than a re-setting of it.

The dial is concrete, not vibes:
- **Revolutionary points** come from *positioning verbs + the manifesto line* (the claim, the verbs: build · share · govern · for the good of humanity).
- **Restraint points** come from *real artifacts + measured claims + no marketing adjectives* — enforced by the `writing-guidelines` AVOID list. Anthropic's rule: *sound serious because you act serious* (link real governance/ADRs/the spec; cite a concrete fact), and **never** "revolutionary / transformative / blazingly fast."

## 5. The Motion Budget

- **Entrance + scroll-reveal only.** No autoplay, no parallax that delays LCP.
- **Motion must mean something** (Raycast's lesson: motion reinforced the speed promise). For aDNA: a context graph composing, a node joining the network — motion that *says* the thesis. No decorative motion (the generic-AI-aesthetic tell).
- **Honors `prefers-reduced-motion`** (zeroed per `visual-identity-v2` §8).
- **Hard enforcer:** Lighthouse Performance = 100 (the III cycle gate). Linear proves the ceiling: *fast through restraint* — premium feel from refusing ornament.

## 6. The "How Much Is Too Much" Decision Table

Scannable thresholds. 🟢 good · 🟡 caution · 🔴 too much. Each cites its source.

| Dimension | 🟢 | 🟡 | 🔴 | Source |
|-----------|----|----|----|--------|
| Hero words (manifesto mode) | 35–55 | 56–75 | >75 or <20 | Hermes/Ethereum/Anthropic cluster |
| Homepage sections | 4–6 | 7 | ≥8 | mission-site cluster; Vercel/Raycast 8 = over |
| CTAs above the fold | 1–2 | 3 | ≥4 | NN/g single-focus; Hermes 2 |
| Distinct accent colors fighting | 1–2 | 3 | ≥4 | `visual-identity-v2` (teal carries signal, amber sparing) |
| Motion triggers per screen | 0–1 meaningful | 2 | ≥3 / any autoplay | Linear restraint vs Raycast ceiling |
| Registry entries above the fold | 0 (or "trending" strip) | a full grid | a 60-item dump | Val Town curate vs Replicate repetition-as-padding |
| Marketing adjectives in hero | 0 | 1 | ≥2 ("fast, scalable, reliable") | Anthropic register; Vercel AVOID |
| Useful-space share of viewport | ≥60% | 45–60% | <45% (NN/g found 52% *wasted* typical) | NN/g real-estate allocation |

NN/g real-estate target (vs the 50-homepage average of 24% content / 11% nav / **33% filler** = 52% wasted): **spend the pixels on content + navigation; cut the fluff.**

## 7. The Good Process (pointer)

The repeatable pipeline that *produces* surfaces conforming to this doctrine — vision → reference/design-DNA → IA → wireframe → visual → build → measure → multi-persona review → iterate — is specified in [[skill_site_design_pipeline]] (its stages 5–8 are the existing III cycle + decadal AAR). The reference-inspection method that *feeds* this doctrine is [[skill_reference_inspection]].

## 8. Worked Example — the proposed aDNA.network homepage (self-reference)

A synthesis of **Hermes-sparse-manifesto + HF-registry-as-proof** at the ~55/45 dial. *(Proposal; validated/iterated during the build phase against the 10-dimension ranker.)*

**Above the fold — Sparse, one focus:** a **manifesto hero, 40–55 words** naming *Agentic Context Democracy* + the verb set (build · share · govern · *for the good of humanity*); **1 primary CTA** ("Explore the network") + **1 secondary** ("Read the standard"); words-as-focus, no competing banner. *(Hermes pattern; Ethereum lead-emotion-then-credibility.)*

**Then 5 sections (Sparse → Medium → Dense → Medium → Sparse):**
1. **The democracy, in one line + one diagram** (Medium) — what a self-governed context-graph network *is*, with a CanvasForge network diagram as the demo-as-proof. *(Ethereum credibility; Linear "show the real thing.")*
2. **The living registry** (Dense, one organizing principle) — real vaults/forges/context-graphs as cards with **live affordances** (pull · compose · view-graph · open-docs) + a proof signal (status/phase, federation count) + creator/persona attribution; scannable grid + "see all." *(Replicate entries; HF registry-as-content; Val Town curate-don't-dump.)*
3. **How partners build & share** (Medium) — the build→share→govern flow with *real* CLAUDE.md/registry snippets, not slogans. *(Vercel dual-audience: dev proof + partner value, adjacent registers.)*
4. **The standard underneath** (Medium) — MIT, open spec, Lattice Protocol, GitHub, version — the trust anchor, placed at **4-of-5 (visible above the footer, not buried)**. *(Anthropic substance; Design Critic F-10 "trust signals buried.")*
5. **Join the network** (Sparse) — the partner/community CTA: how to join the democracy, governance-visible; **teases the public-good commons** (featured mission-aligned subnetworks — WGA · Context Commons · WilhelmAI · Rare Archive — + "connect to a subnetwork"; its own Track-G surface). This is where the [[narrative_ethos_public_good|ethos]] becomes concrete — *shown, not preached*. *(Ethereum role-pathways + low-barrier; Val Town who-not-how-many.)*

> **Ethos thread (subtle, front of mind):** across all five sections the [[narrative_ethos_public_good|public-good ethos]] is the gravity, not the slogan — language + DNA as shared heritage, context as a commons stewarded for the next generation, AI as scarcity-destroying → abundance. Felt in *what we choose to show* (real public-good work, a commons not a catalog) and the verbs (*for the good of humanity*); never sermonized (the writing-guidelines AVOID register is the guardrail).

**Deliberately avoids:** 7-section sprawl, ≤2 fighting colors, custom SVG over emoji, no "blazingly fast" adjectives, motion only where it means something. Every number above instantiates §§1–6.

## Change discipline

Mirrors the companions' change rule: doctrine changes go through a design-adjacent decadal Q&A (the Reviewer Lens Pass) + operator ratification + a same-commit update to the provenance. This is a *governed* reference, not a loose note.

## Related

- [[_reference_set]] · [[site_hermes]] · [[site_huggingface]] · [[site_ethereum]] · [[site_anthropic]] — the grounding corpus
- [[skill_reference_inspection]] · [[skill_site_design_pipeline]] — the producing process
- `site/src/content/reference/visual-identity-v2.mdx` · `site/src/content/reference/writing-guidelines.mdx` — the two companions
- [[../../who/reviewers/reviewer_design_critic|Design Critic]] · [[../../who/reviewers/reviewer_anti_bloat_editor|Anti-Bloat Editor]] — co-owners of the dial + density at the Reviewer Lens Pass
