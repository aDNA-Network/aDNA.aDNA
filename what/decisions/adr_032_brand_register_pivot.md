---
type: decision
adr_id: adr_032
adr_number: 032
title: "Brand-register pivot — aDNA.network from minimalist \"Rust/Tauri\" to Science Stanley \"Ghibli-pixel\" warm"
status: accepted
created: 2026-06-04
updated: 2026-06-04
ratified: 2026-06-04
last_edited_by: agent_rosetta
supersedes: none
superseded_by: none
revises:
  - site/src/content/reference/visual-identity-v2.mdx
  - what/design/front_page_doctrine.md
related:
  - what/design/redesign_direction_ss_ghibli_pivot.md
  - what/design/hero_image_brief_adna_network.md
  - what/design/narrative_ethos_public_good.md
  - ScienceStanley.aDNA/what/context/visual/context_bio_digital_cozy_metaverse_style.md
  - ScienceStanley.aDNA/what/context/visual/context_visual_color_system.md
  - Cmux.aDNA/how/campaigns/campaign_cmux_visual_identity/iii_typography_review_20260601.md
tags: [adr, decision, brand, visual-identity, ss_ghibli, tokyo_night, register_pivot, front_page_doctrine, ecosystem_site, e1]
---

# ADR-032: Brand-register pivot — aDNA.network → Science Stanley "Ghibli-pixel" warm

## Status

**accepted** — operator-set direction 2026-06-04 (captured at the E1 cycles-143–145 wind-down; briefs [[redesign_direction_ss_ghibli_pivot]] + [[hero_image_brief_adna_network]]); **ratified 2026-06-04** by operator override (Campaign SO #14 — the register shift is load-bearing for the in-flight E1 redesign) at the cycle-146 gate, after the de-risking first instance (the "The aDNA Network" hero) was generated, wired, and build-verified.

This is a **brand-direction pivot, not a tweak**: it deliberately revises the site's previously-ratified minimalist visual identity (`visual-identity-v2.mdx`) and front-page doctrine (`front_page_doctrine.md`). Per Standing Order #1 (project) + Campaign SO #19, a brand gate is a **human gate** — satisfied here by the operator override.

**Now unblocked:** the broad reskin — `visual-identity-v2 → v3` + the `front_page_doctrine` revisions below — executes across E1 cycles 7–10. Deploy remains a separate operator call.

## Context

aDNA.network is the forward face of the network (standard + registry/marketplace + community/labs/org + the Alpha Lattice), serving builders, the movement-aligned newcomer, and partners/operators. Its **currently-ratified visual identity** is a minimalist, abstract-geometric "Rust/Tauri" register:

- **`visual-identity-v2.mdx`** §1 palette: teal `#0D7377` + amber `#D4A017` on neutral light/dark; §4 imagery guardrails: abstract-geometric line art, **no text / no people / no marketing imagery**.
- **`front_page_doctrine.md`** §4 dial: ~55/45 restraint; §1 above-fold law: words-led hero (the E1 c2 `banner_vs_words: DEMOTE`).

The operator's read (E1 cycles 143–145 AAR Finding): the cold-minimalist register undersells the project's **public-good ethos** ([[narrative_ethos_public_good]] — language + DNA as shared inheritance, context as a stewarded commons, AI → abundance). A **warm, hand-crafted, hopeful** register says "for the good of all" more honestly than cold minimalism, and brings aDNA.network into the operator's established signature aesthetic (owned by `ScienceStanley.aDNA`). This serves the north-star UX goal and the ecosystem-site ethos directive.

## Decision

**Evolve aDNA.network from the minimalist "Rust/Tauri" register to the Science Stanley "Ghibli-pixel" warm register** — *cozy bio-digital retro-futurism*: warm, hand-crafted, hopeful, dense narrative detail.

| Axis | Current (ratified v2) | New direction (this ADR) |
|---|---|---|
| Feel | minimalist, abstract-geometric, restrained | cozy bio-digital retro-futurism — warm, hand-crafted, hopeful |
| Palette | teal `#0D7377` + amber `#D4A017` on neutral | **Tokyo Night** base `#1a1b26` / `#24283b` + Purple `#9d7cd8` + Cyan `#7dcfff`, warm Ghibli accent `#e0a84c` (lighting) |
| Imagery | abstract line art; no text / no people / no marketing | **detailed 32-bit painterly pixel art**, dual-resolution (human-detail vs blocky AI sprites vs glow-vector DNA); illustrative scenes allowed |
| Dial | ~55/45 restraint | warmer / higher-conviction — the "good of humanity" register carried by **warmth + craft**, not just verbs |

### Revisions this ADR authorizes (executed only after ratification)

1. **`visual-identity-v2.mdx` → v3**: §1 add the Tokyo Night palette + warm accents; §4 relax the "no text / no people / no marketing / abstract-geometric-only" guardrails for the new illustrative register — **while keeping** purpose-over-decoration, accessibility (AA contrast), and reduced-motion. The dark-mode-first hero band (E1 c143) is forward-compatible.
2. **`front_page_doctrine.md`**: §1 above-fold law — an **image-led / title-image hero** becomes a legal mode (the hero leads with the title-image; the "The aDNA Network" title is **live SVG/CSS text**, not baked into the image; **reverses** the E1 c2 `banner_vs_words: DEMOTE`). §4 dial — warmer setting. §2 section budget, §3 density bands, §5 motion budget, §6 decision table stay largely intact.

### First concrete instance

The **"The aDNA Network" homepage hero** (E1 cycle 146) — bird's-eye node-map, SS Ghibli-pixel, Tokyo Night palette, live Space-Grotesk-Bold title — is the first instance and the de-risking artifact, generated + wired (build PASS, **not deployed**) in parallel with this gate.

## Consequences

### Positive
- The warm/cozy register reinforces the public-good ethos (warmth *says* "for the good of all" more honestly than cold minimalism) and brings aDNA.network into the operator's signature SS family.
- Richer illustrative imagery gives the newcomer an emotional read of "the network" in one glance (hero-image-led fold).
- Tokyo Night is a coherent, accessible dark-first base aligned with the cmux/terminal sibling vaults.

### Negative / costs
- Revises two currently-ratified design docs → real reconciliation work (v3 + doctrine retune); existing components re-skin over several E-series cycles.
- Illustrative imagery carries an a11y + "kitsch risk" burden the old abstract guardrails avoided — mitigated by keeping purpose-over-decoration, AA contrast, reduced-motion, and the decadal Reviewer Lens Pass (Movement Skeptic: "warmth earned, not kitsch").
- Image-generation pipeline cost (Imagen) + a new asset-maintenance surface.

### Guardrails retained (non-negotiable)
- Purpose over decoration; AA contrast; `prefers-reduced-motion` honored; no motion-flicker; honest affordances (no fabricated UI). The doctrines stay the source of truth — this is a **governed retune**, not a free-for-all; same-commit provenance discipline holds.

## Ratification checklist (resolved at the cycle-146 gate, 2026-06-04)
- [x] Approve the register shift (minimalist → SS Ghibli-pixel warm) + Tokyo Night palette.
- [x] Approve the `visual-identity-v2 → v3` revision scope (§1 palette, §4 imagery guardrails relax).
- [x] Approve the `front_page_doctrine` revisions (image-led hero legal; warmer dial).
- [x] Ratification timing: **ratify now (operator override)** — reskin unblocked for E1 cycles 7–10. Deploy decision held separately (operator reviewing the hero first).

## References
- [[redesign_direction_ss_ghibli_pivot]] · [[hero_image_brief_adna_network]] · [[narrative_ethos_public_good]]
- Revises: `site/src/content/reference/visual-identity-v2.mdx` · `what/design/front_page_doctrine.md`
- Style sources: `ScienceStanley.aDNA/what/context/visual/context_bio_digital_cozy_metaverse_style.md` + `context_visual_color_system.md`; title font `Cmux.aDNA/.../iii_typography_review_20260601.md` (Space Grotesk Bold + shadow).
