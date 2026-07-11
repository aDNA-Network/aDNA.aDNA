---
type: session
session_id: session_2026_07_11_storyweave_p3
created: 2026-07-11
updated: 2026-07-11
status: active
tier: 2
last_edited_by: agent_rosetta
campaign: campaign_storyweave
mission: mission_p3_actionability
tags: [session, storyweave, p3, actionability, registry, build]
---

# Session — Storyweave P3 (Actionability + Registry) build

**Persona:** Rosetta. **Mission:** [[mission_p3_actionability]] (⛩ ratified 2026-07-09). **Scope confirmed with operator: full P3 — both increments** (M3.1 → O2 ship-gate, M3.2 → O4 ship-gate).

## Intent
Execute the ratified P3 build: turn adna.network's conversion surfaces from browse-only into actionable.
- **M3.1 (registry actionability):** per-card purpose (render existing `headline_mission`) · client-side search/filter (no-JS fallback = SSR grouped list) · adopt/publish rail · reconcile `/adopters` (ruling A label-as-illustrative) · nested-`<main>` axe fix (3 pages) · hero node deep-links (accessible SSR SVG layer).
- **M3.2 (onboarding + on-ramps):** `/get-started` overflow verify + north-star bridge · wire community ladder / `/use-cases` CTAs / `/commons` non-dev path · home §1 N-pillar payoff.

## O0 (re-orient) — DONE
Read `mission_p3_actionability` + `decade2_replan` + `measure_and_review`; inspected `vaults/index.astro`, `VaultCard.astro`, `vaults.json` schema, `HomeHero.astro`. **Refinement:** nested-`<main>` is in THREE pages (`index.astro:57`, `[slug].astro:50`, `graph.astro:124`) all under `BaseLayout.astro:91` — same one-line fix per page. Honesty posture pre-ruled (A). Scope = full P3 (operator).

## Scope declaration (files this session may touch — site/)
- `site/src/components/sections/VaultCard.astro` (per-card purpose)
- `site/src/pages/vaults/index.astro` (search/filter + rail + axe fix)
- `site/src/pages/vaults/[slug].astro` · `site/src/pages/vaults/graph.astro` (axe fix)
- `site/src/pages/adopters/index.astro` (illustrative label) · `site/src/pages/use-cases/index.astro` (CTAs + label)
- `site/src/components/sections/HomeHero.astro` (hero deep-links)
- `site/src/pages/get-started.astro` · `site/src/pages/commons.astro` · `site/src/pages/index.astro` (M3.2)
- the community-ladder surface (locate at build)
- mission/campaign/STATE governance files at close

## Conflict scan
Git clean, no active peer sessions (only `.gitkeep`), no running git processes. Coordination notes all historical (May). Clear.

## SITREP
*(filled at close)*
