---
plan_id: mission_p3_actionability
type: plan
title: "P3 — Actionability + registry (adopters can act; no browse-only dead-ends)"
campaign: campaign_storyweave
phase: P3
decade: 2
owner: stanley
status: planned           # ⛩ RATIFIED 2026-07-09 — operator (stanley / FA) at mission_decade2_replan O5; P3 build authorized
mission_class: build
executor_tier: opus       # registry UX + the honesty/reconcile decisions = opus; card-render + overflow sweeps drop to sonnet
token_budget_estimated: "~150–300 kT across 3–4 sessions: M3.1 registry actionability (2 sessions) + M3.2 onboarding + on-ramps (1–2). Ship-per-phase; gate each deployable increment."
created: 2026-07-09
last_edited_by: agent_rosetta
grounded_in: how/missions/artifacts/storyweave_decade2_measure/measure_and_review.md
tags: [plan, storyweave, decade2, p3, actionability, registry, onboarding, proposed]
---

# Mission: P3 — Actionability + registry

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_storyweave/CLAUDE.md`. Decade-2, phase 3 — the first phase re-planned against the live-measured Decade-1 ([[decade2_replan]]). **This is a BUILD mission** (ratified) — `site/` edits happen here, shipped live per phase behind operator gates. Start at **O0**.

## Why this mission exists

The measured focused review ([[measure_and_review]], 2026-07-09) confirmed the T4 finding verbatim: the site is **browse-only at its conversion surfaces**. A stranger who wants to *act* — pick a vault, search the registry, adopt/publish, follow a real on-ramp — hits dead-ends. The registry shows **68 cards as name + persona + status with no idea what any vault *does***; `/adopters` shows **fictional archetypes, not proof**; `/use-cases` and `/community` are **read-only**. P3 turns the site from a gallery into a doorway. *(Backlog B6 + B7 + B10; charter Phases & Missions P3.)*

## Where we are (measured 2026-07-09 — screenshot-grounded)

- **`/vaults` registry** — cards render **name + persona + status badge only**; **no per-card purpose**, **no search/filter** (the `platform` class alone is 30 cards in one scroll), **no adopt/publish rail**. Grouped by class; a hero + a 68/13/14 stat strip. Carries **3 axe violations** (the nested-`<main>` bug, below). *(screens: `vaults__desktop__dark.png`.)*
- **The purpose data already exists.** `site/src/data/vaults.json` vault objects carry **`headline_mission`** (+ `headline_mission_state`, `display_name`, `persona`, `class`, `current_phase`, `github_url`, `docs_site_url`). → "one-line purpose per card" is **rendering existing data**, not authoring 68 strings.
- **`/adopters`** — "Find your path" (4 guided entries) + "Persona reference cards" = **fictional archetypes** ("A freelance developer juggling 3–4 client projects…"). Live, but archetype, not real-adopter proof. *(screens: `adopters__desktop__dark.png`.)*
- **`/use-cases`** — 6 **fictional named personas** (Sam/Alex/Maya/…) with **mid-word excerpt truncation** ("documentation, archit…"). Browse-only. *(screens: `use-cases__desktop__dark.png`.)*
- **`/get-started`** — healthy; the prereq is now a **callout above Step 1**; no glaring mobile overflow at 375px (B7 severity ↓). *(screens: `get-started__mobile-lg__dark.png`.)*
- **`/community`** — present, browse-only (ladder not wired to actions).
- **The nested-`<main>` axe bug** — `/vaults` + every `/vaults/[slug]` (~40 pages) render an inner `<main>` inside the layout's `<main id="main-content">` → 3 moderate landmark violations, both themes. **One structural fix in two components clears all ~40.**

## The two sub-missions

### M3.1 — Registry actionability (the core; ~2 sessions)
1. **One-line purpose per card** — render `headline_mission` (one-line, tail-truncated with a real ellipsis, never mid-word) on each registry card. The data is in `vaults.json` today. *(The single highest-value fix — a stranger can finally tell what each vault does.)*
2. **Search / filter** — client-side search (name · persona · class · purpose) + the existing class facets as filters. **No-JS fallback** = today's grouped list (SSR); enhancement layers on. Keep it in the perf budget (`client:idle`-style, below-LCP).
3. **Adopt / publish rail** — a persistent affordance: "Add your vault" → `/get-started`; "Publish to the registry" → the publish path (`skill_vault_publish` / the registry docs). Honest — publishing is real (68 vaults prove the mechanism).
4. **Reconcile `/adopters`** — archetype → proof, **or** relabel as clearly *illustrative* and point to `/commons` for real proof (see the honesty decision below).
5. **[fold] Nested-`<main>` axe fix** — inner `<main class="vaults-index">` / `<main class="vault-detail">` → `<div>`/`<section>`; re-measure `/vaults` + a `/vaults/[slug]` to confirm 0 violations (clears ~40 pages).
6. **[fold] Hero node-click deep-links** (P1.6 follow-up #1) — the home hero constellation nodes deep-link to individual `/vaults/[slug]` pages (currently all → `/vaults`). Pairs naturally with the per-card purpose work.

### M3.2 — Onboarding + wire the on-ramps (~1–2 sessions)
1. **`/get-started`** — verify code/ASCII **overflow** at build (desktop clip + mobile); consider a literal **Step-0** prereq (callout already present); confirm the **north-star bridge** (the "Next steps" links exist — make the loop explicit).
2. **Wire the on-ramps** — `/community` ladder rungs → concrete actions; `/use-cases` "**start like X**" CTA + outcomes per story; `/commons` non-dev "**follow along**" path; the S7 **N-pillar payoff** on home §1.
3. Every on-ramp lands somewhere real (get-started · a vault · commons) — **no browse-only dead-ends**.

## Honesty posture — RULED (A), 2026-07-09 (operator)

`/use-cases` (and `/adopters`) use **fictional named personas** — Decade-1 EV2 landed *real* proof on `/commons`, not here. **Ruling: (A) label-as-illustrative.** Keep the archetype personas but **clearly label them illustrative** ("illustrative persona — see /commons for real subnetworks") and route "real proof" to `/commons`. *(The alternative — replace with real stories — was declined for now; revisit if real, shareable stories land.)* This is Movement-Skeptic-clean by construction (no *unlabelled* fiction on a conversion surface). → M3.1 adds the label + the `/commons` pointer; no new-content sourcing.

## Objectives (phased — operator gates as marked)

| # | Objective | Output | Gate |
|---|-----------|--------|------|
| **O0** | Re-orient: read this + [[decade2_replan]] + [[measure_and_review]]; open `HomeHero.astro` + the registry components (`RegistryCard`/`VaultCard` + `src/pages/vaults/index.astro`) + `vaults.json`; confirm scope with the operator *(honesty posture pre-ruled = A label-as-illustrative)* | shared understanding | — |
| **O1** | **M3.1 build** — per-card purpose + search/filter + adopt/publish rail + `/adopters` reconcile + the nested-`<main>` fix + hero deep-links | the actionable registry | — |
| **O2** | **M3.1 gate + ship** — `npm run test:gates` green (incl. re-measured axe-0 on `/vaults` + a `/vaults/[slug]`) · Lighthouse budget held · headless before/after · ranker ≥ 4.0 → operator ship-gate → deploy | M3.1 live | ⛩ operator |
| **O3** | **M3.2 build** — get-started hardening + wire the on-ramps + the N-pillar payoff | the wired on-ramps | — |
| **O4** | **M3.2 gate + ship** — gates green · ranker ≥ 4.0 · Marketplace + Conversion personas pass · **no browse-only dead-ends** → operator ship-gate → deploy | M3.2 live | ⛩ operator |
| **O5** | Phase AAR + STATE + hand P4 the provisional baton (re-plan P4 after P3 is measured) | P3 close | — |

## Constraints & gates (honor; renegotiate only with operator sign-off)

- **Instrument = headless T0 harness** (`scripts/visual_capture.mjs` + `--axe` + Lighthouse), run **from the repo root** per [[doctrine_visual_inspection]] — never assume Chrome; every visual claim screenshot-cited.
- **`site/` gate-suite** (`npm run test:gates`) green each deployable increment; **a11y gate-4** (0 axe on touched surfaces — the nested-`<main>` fix must verify); **perf gate-10/19** (LCP < 2.5 · CLS < 0.1 · Perf ≥ 90 — the search/filter enhancement stays lazy/below-LCP); **responsive gate-9** (320–1440, no overflow); **no-JS baseline** (registry search degrades to the SSR grouped list).
- **Register:** warm · calm · honest (~55/45); Movement-Skeptic gates the `/adopters` + `/use-cases` copy. Preserve the SS-Ghibli identity.
- **Ship per phase** + operator ship-gate (SO#1) each increment; **deploy recipe** `npx astro build` → `VERCEL_TOKEN=$SS_VERCEL_TOKEN vercel --prebuilt --prod` (redact the token).
- **Routed (non-blocking):** "68 reflects reality" / `vaults.json` currency → Hestia (Home.aDNA); deploy-layer perf/BP → Vitruvius (WebForge.aDNA). Staged coord memos, never silent cross-vault writes.
- **Git:** local-first, explicit-path staging, `pgrep -x git` guard, gitleaks pre-push, push operator-gated (SO-11).
- **AAR at mission close** (SO#5); token budget above (SO#11); per-phase persona-ranker gate.

## Definition of done

The conversion surfaces are **actionable**: the registry has a purpose line per card + working search/filter + an adopt/publish rail + a reconciled `/adopters`; the ~40 vault pages are axe-0; the hero deep-links into vaults; `/get-started` + the on-ramps (`/community` · `/use-cases` · `/commons` · home §1) all lead somewhere real. **Marketplace + Conversion personas pass; no browse-only dead-ends; ranker ≥ 4.0**; both shipped increments live on adna.network with gates green + perf budget held; operator sign-off at O0 (honesty call) + O2 + O4.

## AAR

*(Mandatory before `status: completed` — `template_aar_lightweight`.)*
