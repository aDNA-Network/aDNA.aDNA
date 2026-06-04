---
type: design_brief
artifact_class: image_gen_brief
created: 2026-06-04
updated: 2026-06-04
mission: mission_adna_str_p5_m510_e1_brand_positioning
campaign: campaign_adna_serious_tool_readiness
phase: 5
persona: rosetta
status: draft   # generation deferred to next session ("briefs only" this turn); proceeds under the redesign pivot
last_edited_by: agent_stanley
companions:
  - what/design/redesign_direction_ss_ghibli_pivot.md   # the brand pivot this instantiates
  - what/design/front_page_doctrine.md
grounded_by:
  - ScienceStanley.aDNA/what/context/visual/context_bio_digital_cozy_metaverse_style.md
  - ScienceStanley.aDNA/what/context/visual/context_visual_color_system.md
  - Cmux.aDNA/how/campaigns/campaign_cmux_visual_identity/iii_typography_review_20260601.md
  - site/src/assets/aDNABanner.png   # existing pixel-art wordmark (lineage + fallback treatment)
tags: [design_brief, hero_image, image_gen, ss_ghibli, the_adna_network, imagen, gen_review_loop, ecosystem_site]
---

# Hero-Image Brief — "The aDNA Network" (homepage hero)

> Actionable spec for the new homepage hero image. **Generation runs next session** via the in-repo Imagen pipeline; this brief seeds the prompts + the iterate loop + the layout correction. Operator directive: *"a network of connected nodes sharing context / AI / DNA … the words 'The aDNA Network' as a big title in the same pixel/sci-fi font as the cmux terminal images … a bird's-eye view / map of all the connected nodes … multiple generation/review/improvement passes on both the prompts and the images."*

## 1. Concept

The **aDNA network as the subject**: a bird's-eye / isometric **map of connected nodes** (vaults / operators / agents) sharing context, AI, and DNA along glowing conduits. The hero should make a newcomer *feel the network* in one glance and read "The aDNA Network" instantly.

## 2. Style — Science Stanley "Ghibli-pixel" (Cozy Bio-Digital Retro-Futurism)

Copy-pasteable phrase bank (from the SS style payload):
- `detailed 32-bit pixel art, cozy studio-ghibli aesthetic quantized to a crisp pixel grid`
- `soft dithered pixel shading, warm task lighting mixed with cool monitor glow, cinematic composition`
- `emissive neon cyan DNA helices and purple circuit patterns glowing in the scene`
- `hopeful and intellectually curious mood — NOT dark dystopia`
- **Dual-resolution rule**: human/physical elements = high-fidelity 32-bit painterly pixel; AI/digital constructs = chunky blocky 16-bit sprites; DNA/active-science motifs = sharp glow-emission vector pixels.
- **Anti-patterns**: no flat vector UI, no sterile empty sci-fi, no uniform pixel scaling, no dystopian mood, no animated flicker.

**Palette** (Tokyo Night + warm Ghibli accents): base `#1a1b26` / elevated `#24283b`; Purple `#9d7cd8` (primary accent / brand), Cyan `#7dcfff` (links/data/connections), warm amber glow `#e0a84c` (lighting only).

## 3. Title treatment — "The aDNA Network"

- Font register: **Space Grotesk Bold + shadow finish** (the cmux-locked title treatment; already a site font), lowercase-`a` signature, pixel-block feel echoing the existing `aDNABanner.png`.
- **Recommended: do NOT bake the title into the Imagen output** (Imagen garbles text + it's not a11y/responsive). Instead **composite the title in the real font** — either the existing **PIL text-overlay step** (OG-card runner pattern) or a **live SVG/CSS text layer** over the image. Live text is crispest + responsive + carries the accessible name; PIL-composite is the path if the operator wants the exact baked pixel-block look. Image `alt` carries "The aDNA Network" regardless.

## 4. Seed prompt directions (iterate from these next session)

All: SS Ghibli-pixel style + Tokyo Night palette, wide 16:9, **no text in the gen** (title composited separately), no human faces required (scene-level), hopeful warmth.

- **D1 — Cozy-lab bird's-eye node-map.** `Bird's-eye view of a warm research-lab desk where a glowing holographic map of connected nodes hovers — cyan/purple conduits linking node-sprites that pulse with context/DNA data; ceramic mug, open notebook, plants at the edges; amber task-light + cool screen glow; detailed 32-bit painterly pixel art, soft dithered shading, hopeful mood.`
- **D2 — Cosmic node-and-edge constellation (banner-friendly).** `A constellation of glowing nodes connected by cyan and purple edges forming an interconnected aDNA network, deep Tokyo-Night navy field with faint circuit texture, bioluminescent glow-vector links, blocky 16-bit node sprites; minimal foreground, wide cinematic framing; pixel-art retro-futurism, calm and expansive.`
- **D3 — DNA-helix-becoming-network.** `A glowing DNA double-helix whose rungs resolve into a graph of connected nodes — the helix backbone branching into a bird's-eye network map; cyan + purple emission on dark Tokyo-Night ground, warm amber rim-light; detailed pixel art, soft dither; ties "shared inheritance" (DNA) to "network".`
- **D4 — Isometric "connected vaults" pixel-city.** `Isometric bird's-eye map where each node is a small cozy pixel-art building/vault, linked by glowing cyan/purple context-conduits like roads of light; warm windows, plants, lab clutter at building scale; Octopath-Traveler-grade detail; hopeful, lived-in.`

## 5. The gen → review → improve loop (multi-cycle, prompts AND images)

Per the operator's "multiple generation/review/improvements": for each cycle —
1. Generate variants across the seed directions (Imagen 4 Ultra; small batch).
2. **Review** with a focused persona/ranker panel: **Visual Designer** (craft), **Brand Strategist** (register/dial), **Newcomer** (reads "network of nodes" in 3s?), **Illustration/Motion lens**, **Movement Skeptic** (warmth earned, not kitsch). Score; capture what to change.
3. **Refine the prompts** (tighten motif, fix density/contrast/palette drift) and regenerate.
4. Converge on a winner direction; composite the title; A/B in the hero; gate with the operator.
- Optionally run the loop as a multi-agent **Workflow** if the operator opts in (fan-out gen + adversarial review).

## 6. Pipeline pointer (runnable)

- Tool: **Imagen 4 Ultra** via Gemini (`google.genai`), Keychain **`SS_GEMINI_API_KEY`**, model **`imagen-4.0-ultra-generate-001`**, ~$0.04/image.
- Template runner: `how/campaigns/campaign_adna_serious_tool_readiness/runners/m53_cycle_102_hero_variants.py` (clone for "the_adna_network"); PIL composite pattern in `…/m53_cycle_101_og_cards_regen.py`.
- Output: `site/src/assets/heroes/` (e.g., `hero_adna_network.png`, 1408×792); per-cycle **ADR-026 image-gen log** JSON under `what/measurement/iii_results/2026-06/`.
- Budget: prepaid Gemini pool (~$48 remaining); single commit per gen cycle.

## 7. Hero layout correction (operator)

The title/name banner **must NOT sit below the subtitles** — this **reverses the cycle-2 `banner_vs_words: DEMOTE`** (`cycle_142_e1_hero_words_first.json`). The new hero **leads with the title-image** (image/title prominent at the top of the fold; a concise manifesto line may support *below* it). This makes "image-led / title-image hero" a legal above-fold mode — reconcile in the revised `front_page_doctrine` §1 (part of the [[redesign_direction_ss_ghibli_pivot|pivot]]). Implementation lands in `site/src/components/sections/HomeHero.astro` next session, after a winning image exists.

## 8. Related

- [[redesign_direction_ss_ghibli_pivot]] · [[front_page_doctrine]] · [[narrative_ethos_public_good]]
- Lineage: `site/src/assets/aDNABanner.png` (existing pixel-art wordmark) · `Cmux.aDNA/what/assets/helix_hero.png`
