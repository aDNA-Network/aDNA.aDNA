---
type: design_brief
artifact_class: redesign_direction
created: 2026-06-04
updated: 2026-06-04
mission: mission_adna_str_p5_m510_e1_brand_positioning
campaign: campaign_adna_serious_tool_readiness
phase: 5
persona: rosetta
status: draft   # ADR-CANDIDATE — needs operator-ratified adr_03X_brand_register_pivot before broad rollout
last_edited_by: agent_stanley
companions:
  - site/src/content/reference/visual-identity-v2.mdx   # the identity this pivot REVISES (§1 palette, §4 imagery)
  - what/design/front_page_doctrine.md                  # the doctrine this pivot REVISES (dial, above-fold law, no-text guardrail)
  - what/design/narrative_ethos_public_good.md          # the ethos the warm register reinforces
  - what/design/hero_image_brief_adna_network.md         # the first concrete instance of the pivot
grounded_by:
  - ScienceStanley.aDNA/what/context/visual/context_bio_digital_cozy_metaverse_style.md
  - ScienceStanley.aDNA/what/context/visual/context_visual_color_system.md
  - Cmux.aDNA/how/campaigns/campaign_cmux_visual_identity/iii_typography_review_20260601.md
tags: [design_brief, redesign, brand_pivot, ss_ghibli, tokyo_night, visual_identity_v3, adr_candidate, ecosystem_site]
---

# Redesign Direction — evolve aDNA.network toward the Science Stanley "Ghibli-pixel" warm register

> **Operator decision (2026-06-04 session-close).** Captured for a fresh next session. **This is a brand-direction pivot, not a tweak** — it deliberately revises the site's currently-ratified minimalist visual identity. It needs an operator-ratified ADR before broad rollout; the [[hero_image_brief_adna_network|"The aDNA Network" hero]] is the first concrete instance and may proceed in parallel with the gate.

## 1. The mandate

Comprehensively redesign aDNA.network — **change as much as needed to make it effective for its purposes** (forward face of the network: standard + registry/marketplace + community/labs/org + aDNANetwork; serving builders, the movement-aligned newcomer, and partners/operators). Full latitude over IA, visuals, and content. The visual through-line of the redesign is the register pivot below.

## 2. The pivot — from minimalist "Rust/Tauri" → SS "Ghibli-pixel" warm

| | **Current (ratified) register** | **New direction** |
|---|---|---|
| Feel | minimalist, abstract-geometric, restrained ("Rust/Tauri" aesthetic) | **cozy bio-digital retro-futurism** — warm, hand-crafted, hopeful, dense narrative detail |
| Palette | teal `#0D7377` + amber `#D4A017` on neutral light/dark | **Tokyo Night** base (`#1a1b26` / `#24283b`) + Purple `#9d7cd8` + Cyan `#7dcfff`, warm Ghibli light accents (`#e0a84c`) |
| Imagery | abstract-geometric line art; **no text / no people / no marketing imagery** (visual-identity-v2 §4) | **detailed 32-bit painterly pixel art**, dual-resolution (human-detail vs blocky AI sprites vs glow-vector DNA); illustrative scenes allowed |
| Dial | ~55/45 restraint (front_page_doctrine §4) | warmer/higher-conviction; the "good of humanity" register carried by *warmth + craft*, not just verbs |

The SS register is the operator's established signature aesthetic (owned by `ScienceStanley.aDNA`); this brings aDNA.network into that family.

## 3. What this revises (the reconciliation work)

- **`visual-identity-v2.mdx`** → a **v3**: §1 palette (add Tokyo Night + warm accents), §4 imagery guardrails (the "no text / no people / no marketing / abstract-geometric-only" rules relax for the new illustrative register — but keep *purpose over decoration*, a11y, and reduced-motion). The dark-mode-first hero (E1 c143) is forward-compatible.
- **`front_page_doctrine.md`** → revise §1 above-fold law (an **image-led / title-image hero** becomes a legal mode — see the hero brief) and §4 the dial (warmer setting), keeping §2 section budget, §3 density bands, §5 motion budget, §6 decision table largely intact.
- **Net**: a governed change, not a free-for-all — same-commit provenance discipline; the doctrines stay the source of truth, just retuned.

## 4. Ethos reconciliation (why the warmth *fits*)

The [[narrative_ethos_public_good|public-good ethos]] — language + DNA as shared inheritance, context as a stewarded commons, AI → abundance — is **reinforced**, not diluted, by warmth: a cozy, human, hopeful aesthetic *says* "for the good of all" more honestly than cold minimalism. The Ghibli register's "hopeful, intellectually curious, NOT dystopian" rule is the same north star.

## 5. Governance — needs ratification

- Author + ratify **`adr_03X_brand_register_pivot`** at the next-session operator gate (Standing Order #1: phase/brand gates are human gates). Scope: the register shift + the visual-identity-v3 + front-page-doctrine revisions + the image-led-hero mode.
- Until ratified, treat broad reskin as **gated**; the **hero-image generation** (read-only style reference + in-repo Imagen runner) is the unblocked first mover and de-risks the direction with real artifacts.
- Slots into the E-series (E1 Brand & Positioning owns the visual work; the pivot threads through E2–E6). The decadal AAR + 30-persona Reviewer Lens Pass at E1 cycle 10 validates it.

## 6. Related

- [[hero_image_brief_adna_network]] · [[front_page_doctrine]] · [[narrative_ethos_public_good]] · `site/src/content/reference/visual-identity-v2.mdx`
- Style sources: `ScienceStanley.aDNA/what/context/visual/context_bio_digital_cozy_metaverse_style.md` + `context_visual_color_system.md`; title font `Cmux.aDNA/.../iii_typography_review_20260601.md` (Space Grotesk Bold, shadow).
