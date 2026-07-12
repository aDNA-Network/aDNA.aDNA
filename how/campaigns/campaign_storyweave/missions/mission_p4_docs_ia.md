---
plan_id: mission_p4_docs_ia
type: plan
title: "P4 — Docs IA + de-jargon (make the explainer docs teach the north-star fast — comprehension, not perf)"
campaign: campaign_storyweave
phase: P4
decade: 2
owner: stanley
status: in_progress      # M4.1 SHIPPED + LIVE 2026-07-11 (8fe4eee; /learn/what-is-adna) — O0–O2 ✅. M4.2 (O3–O4) + close (O5) pending. P4 authorized at [[mission_p4p5_replan]] O4.
mission_class: build
executor_tier: opus       # IA/story + the comprehension-rewrite & de-jargon judgment = opus; any mechanical typo/hex sweep drops to sonnet
token_budget_estimated: "~150–300 kT across 3–4 sessions: M4.1 what-is-adna reframe/trim/TOC/disclosure (~2 sessions) + M4.2 /reference + /learn IA + nav reconcile (~1–2). Ship-per-phase; gate each deployable increment."
created: 2026-07-11
last_edited_by: agent_rosetta
grounded_in: how/missions/artifacts/storyweave_p3_measure/measure_and_review.md
tags: [plan, storyweave, decade2, p4, docs, ia, comprehension, de-jargon, proposed]
---

# Mission: P4 — Docs IA + de-jargon

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_storyweave/CLAUDE.md`. Decade-2, phase 4 — authorized 2026-07-11 at the O4 gate of [[mission_p4p5_replan]] (re-plan `status: accepted`; [[p4p5_replan]] §Phase 4 is the ratified scope). **This is a BUILD mission** — `site/` edits happen here, shipped live per phase behind operator gates. **P4 is an information-architecture / comprehension phase, NOT a performance one** — the docs already score Lighthouse 99–100; the density is *cognitive*. Start at **O0**.

## Why this mission exists

The live P3 measure ([[measure_and_review]], 2026-07-11) found the three explainer surfaces **byte-identical to Decade-2** — P3 never touched them, so backlog **B8** holds verbatim (themes **T3 comprehension · T6 de-jargon**). A newcomer who lands on the docs meets a wall of dense prose, no in-page wayfinding, and a near-empty learning hub. The page that should *sell the idea in 60 seconds* — `/learn/what-is-adna` — reads at **college-graduate level** and buries its own structure. P4 makes the docs **teach the north-star fast**: shorter, ordered, signposted, de-jargoned — without losing the proof or the honest voice. *(Charter Phase 4; [[p4p5_replan]] §Phase 4.)*

## Where we are (measured 2026-07-11 — screenshot + reading-level grounded)

- **`/learn/what-is-adna`** — the flagship explainer. **8492 chars** (innerText), **7 h2 + 3 h3**, but **Lighthouse Perf 100 / LCP 1.4 s / axe-0** → the load is *cognitive, not perf*. Reading-level (pre-edit, `scripts/reading_level.mjs`): **FKGL 16.05** (⚠ >Grade 10), **1067 words**, **avg 29.6 words/sentence**. The page **does not pass `headings` to `DocumentationLayout`** (its content is inline HTML, so Astro can't auto-extract them) → **the sticky "On this page" TOC never renders.** The **16-entity table** lives inline, expanded, in the main reading flow. *(screen: `storyweave_p3_measure/screens/learn-what-is-adna__desktop__dark.png`.)*
- **`/learn`** — **798 chars, 0 h2** — a near-empty hub (4 cards), **no ordered learning path**. *(screen: `.../learn__desktop__dark.png`.)*
- **`/reference`** — **2482 chars, 1 h2** — spec-light; needs **lead-with-spec + a version stamp** (EV6 — a *display* gap; the data is already v2.5-correct).
- **Gate surface (de-risked for a copy rewrite):** the **claim-trace gate (gate-20) is source-side** — it verifies `source_ref` files resolve + yield values (`standard.ts` `ENTITY_TYPE_COUNT=16`, `install_truth.json`, `canonical.ts`), it does **not** scrape the page. So the rewrite is safe **provided** the page stays honest ("16 entity types") and the source data files are untouched. gate-15 (jsonLD + proof-links) + gate-16 (public meta) require keeping the `jsonLD`, the `proofLinks`, and the `title`/`description`.

Everything else is confirmed shipped (P3 registry actionability, on-ramps). The one live data gap (`zeta.aDNA` purpose, `headline_mission` currency) is a **Hestia** item — non-blocking, out of scope here.

## The two sub-missions

### M4.1 — `/learn/what-is-adna` (this session; ~2 sessions budgeted)
1. **Reframe the top for the north-star** — lead with the payoff in plain language ("make a project easy to *build on, operate, and understand* — without re-explaining it every session") before the definitional detail. Keep the genome metaphor. Movement-Skeptic-clean: more clarity + proof, no hype.
2. **Trim ~35% for comprehension** — tighten every paragraph, break the long sentences (29.6 → ~18 wps), merge the overlapping "The problem" + "Why aDNA exists". Target: **FKGL → ~12**, **innerText ≈ 8492 → ≤ ~5800**. Evidence with `reading_level.mjs` + a T0 `bodyLen` before/after.
3. **Sticky TOC** — construct a `headings` array in frontmatter and pass it to `DocumentationLayout` (the existing optional prop → `TOCPanel` renders, `.doc-toc` is already `position: sticky` at ≥1280px). **No layout fork** (additive-extension discipline — reuse the prop, don't touch the shared layout).
4. **Progressive-disclose the 16-entity table + inline gloss** — wrap the 16-row table in `<details>`/`<summary>` (native, no-JS-safe → the no-JS gate stays green; collapsed content leaves `innerText` so `bodyLen` drops honestly), with a visible one-line summary of the count (4 WHO · 5 WHAT · 7 HOW) so the claim stays on-page. Inline-gloss first-use jargon by linking to **known-good concept pages** already referenced here (`/learn/concepts/triad`, `/learn/concepts/governance-files`) — no deep glossary slugs (404 risk).

### M4.2 — `/reference` + `/learn` IA (later session)
- **`/learn` → an ordered path** (798 chars, 0 h2 today) · **`/reference` → lead-with-spec + version stamp** (EV6; 2482/1) · **group by genre** · **reconcile the two docs-shell navs** (the flat 8-item `Header.astro` vs the unified 8-group `navigation.ts` — Glossary/Guides/personas are absent from the header) · **mobile reflow** · **EV7** bridge `/compliance` → a named regime (charter: SOC 2 / ISO 27001 / EU AI Act).

## Objectives (phased — operator gates as marked)

| # | Objective | Output | Gate |
|---|-----------|--------|------|
| **O0** | Re-orient: read this + [[p4p5_replan]] + [[measure_and_review]]; open `learn/what-is-adna.astro` + `DocumentationLayout.astro` + `TOCPanel.astro`; confirm the gate surface (claim-trace = source-side); author this mission | shared understanding + mission spec | — |
| **O1** | **M4.1 build** — north-star reframe · ~35% comprehension trim · sticky TOC (pass `headings`) · progressive-disclose the 16-entity table + inline gloss | the reframed explainer | — |
| **O2** | **M4.1 gate + ship** — `npm run test:gates` green (axe-0 both themes on `/learn/what-is-adna` · LH budget held · no-JS baseline) · T0 headless before/after + `reading_level` delta · ranker ≥ 4.0 (Educator + Framework-Docs + Newcomer) → operator ship-gate → deploy | M4.1 live | ⛩ operator |
| **O3** | **M4.2 build** — `/learn` ordered path · `/reference` lead-with-spec + version stamp · group-by-genre · reconcile the two navs · `/compliance` regime bridge | the docs IA | — |
| **O4** | **M4.2 gate + ship** — gates green · ranker ≥ 4.0 · Educator + Framework-Docs + Newcomer pass · cognitive-a11y lifts from "C+" → operator ship-gate → deploy | M4.2 live | ⛩ operator |
| **O5** | Phase AAR + STATE + hand P5 the provisional baton (re-plan P5 after P4 is measured) | P4 close | — |

> **Progress (2026-07-11):** **O0–O2 ✅** — mission authored; **M4.1 built + shipped + live** on adna.network (`8fe4eee`, PUSHED); operator GO'd the O2 ship-gate. Measured: rendered density 8492→6416 (−24%), prose FKGL 12.9→10.5, passive 6.5%→0%, sticky TOC wired, 16-entity table + CLAUDE.md disclosed; **313/313 gates**, ranker 4.23. Evidence: `how/missions/artifacts/storyweave_p4_docs_ia/measure_m41.md`. **Next = O3 (M4.2 build)** in a fresh session.

## Constraints & gates (honor; renegotiate only with operator sign-off)

- **Instrument = headless T0 harness** (`scripts/visual_capture.mjs` + `--axe` + Lighthouse), run **from the repo root** per [[doctrine_visual_inspection]] — never assume Chrome; every visual claim screenshot-cited. Comprehension evidenced with `scripts/reading_level.mjs` (FKGL + word-count before/after).
- **`site/` gate-suite** (`npx astro build` → `npm run test:gates`) green each deployable increment; **a11y gate-4** (0 axe both themes on touched surfaces — the `<details>` must stay accessible); **perf gate-10/19** (**hold** the LH budget — 99–100 baseline captured in `storyweave_p3_measure/lighthouse/`; the reframe adds no JS island); **responsive gate-9** (320–1440, no overflow — the disclosed table scrolls, never pushes the page); **no-JS baseline** (progressive-disclosure is native `<details>`); **gate-15/16/20** unbroken (keep `jsonLD` + `proofLinks` + meta; sources untouched; page stays honest on "16").
- **Additive-extension discipline** — reuse `DocumentationLayout`'s existing `headings` prop; if a layout change is ever needed it is **one optional Prop, zero-diff for the ~30 other doc callers**, never a fork. Design tokens only in any scoped style (no hardcoded hex — gate-14/18).
- **Register:** warm · calm · honest (~55/45); the Movement-Skeptic gates every copy change — the remedy is *more proof + more honesty*, never hype. Preserve the SS-Ghibli identity.
- **Ship per phase** + operator ship-gate (SO#1) each increment; **deploy recipe** `npx astro build` → `VERCEL_TOKEN=$SS_VERCEL_TOKEN vercel --prebuilt --prod` (redact the token).
- **Routed (non-blocking):** data-currency (`headline_mission`, `zeta.aDNA`) → Hestia (Home.aDNA); deploy-layer perf/BP → Vitruvius (WebForge.aDNA). Staged coord memos, never silent cross-vault writes.
- **Git:** local-first, explicit-path staging, `pgrep -x git` guard, gitleaks pre-push, push operator-gated (SO-11).
- **AAR at mission close** (SO#5); token budget above (SO#11); per-phase persona-ranker gate.

## Definition of done

The explainer docs **teach the north-star fast**: `/learn/what-is-adna` leads with the payoff, reads at ~Grade 12 (from 16), is ~35% lighter in visible density, carries a sticky in-page TOC, and discloses the 16-entity reference table instead of dumping it; `/learn` is an ordered path; `/reference` leads with the spec + a version stamp; the two docs-shell navs are reconciled; `/compliance` names a regime. **Cognitive-a11y lifts from "C+"; Educator + Framework-Docs + Newcomer personas pass; ranker ≥ 4.0**; both increments live on adna.network with gates green + the Lighthouse budget held; operator sign-off at O2 + O4.

<!-- AAR appended here at mission close (SO#5): Worked / Didn't / Finding / Change / Follow-up + token-budget & executor-tier reconciliation. -->
