---
type: campaign_replan
campaign: campaign_storyweave
title: "Storyweave Decade-2 (P3–P5) re-plan — measured against live Decade-1"
owner: stanley
status: accepted          # ⛩ RATIFIED 2026-07-09 — operator (stanley / FA) at mission_decade2_replan O5
created: 2026-07-09
updated: 2026-07-09
last_edited_by: agent_rosetta
grounded_in: how/missions/artifacts/storyweave_decade2_measure/measure_and_review.md
tags: [campaign, storyweave, decade2, replan, p3, p4, p5]
---

# Storyweave Decade-2 (P3–P5) re-plan

> **Ratification (§7.7).** **Decision:** accept the Decade-2 re-plan (P3 → P4 → P5, ship-per-phase) + authorize the P3 build. · **Ratified-by:** stanley (Founding Architect). · **Date:** 2026-07-09. · **Status:** accepted. *(Authored by agent_rosetta; ratified by the operator at the O5 gate of [[mission_decade2_replan]], after a live-measured focused-review pass. Register posture for `/use-cases` + `/adopters` ruled: **label-as-illustrative** + point to `/commons`.)*

> **What this is.** The charter gates Decade-2 behind *"Decade 1 ships + is measured before Decade 2 (P3–P5) is re-planned."* Decade-1 is shipped + live; this re-plan reconciles the P3–P5 arc against a **live measured pass** (2026-07-09; [[measure_and_review]]) at the operator-chosen depth (**measure + focused review**). The charter's phase specs (P3/P4/P5, lines 96–115) stand; this records the **deltas** measurement surfaced and confirms the arc.

## Measured state (2026-07-09)

Decade-1 is **healthy and did not regress**: 11/14 measured surfaces axe-0, all loads < 1.1 s, zero console errors, home/about/network/commons solid. The Decade-2 conversion + docs surfaces (opened for the first time in a measured pass) **confirm the o6 backlog** — with two scope-moving findings:

1. **EV4/B12 axe debt is ONE bug, not ~120 violations.** The registry + all ~40 vault-detail pages share a single nested-`<main>` structural bug (3 identical moderate violations, both themes). One edit in two components clears the set. → **B12's headline is trivial**, and since it also hits `/vaults`, it folds into P3.
2. **B7 (onboarding) is smaller than at review time** — the prereq is now a surfaced callout; no glaring mobile overflow at 375px. Severity ↓.

Everything else confirms verbatim: **B6** (registry = name+persona+status only, no purpose/search/publish; `/adopters` = fictional archetypes), **B8** (`/learn` a near-empty 798-char hub; `what-is-adna` long/dense; `/reference` spec-light), **B9** (`/use-cases` mid-word truncation), **B10** (browse-only on-ramps).

## The re-planned arc (P3 → P4 → P5, ship-per-phase — order unchanged, confirmed by Sev/Imp)

### Phase 3 — Actionability + registry *(next — authored in detail: [[mission_p3_actionability]])*
| Mission | Scope (measured-adjusted) | Backlog |
|---|---|---|
| **M3.1 Registry actionability** | one-line purpose per vault card (the #1 gap) · search/filter (the `platform` group alone is 30 cards) · adopt/publish rail · **reconcile `/adopters` archetype→proof** (or clearly label illustrative) · **[fold] fix the nested-`<main>` axe bug on `/vaults`** + the shared vault-detail component (clears ~40 pages early) · **[fold] wire the hero node-click deep-links** (P1.6 follow-up #1) | B6 + EV4(partial) |
| **M3.2 Onboarding + on-ramps** | `/get-started`: verify code/ASCII overflow at build · consider a literal Step-0 prereq (callout already present) · north-star bridge · **wire the on-ramps**: `/community` ladder-rungs → actions · `/use-cases` "start like X" + outcomes · `/commons` non-dev "follow along" · N-pillar payoff on home §1 | B7 (↓) + B10 |
| **Exit gate** | adopters can *act* (Marketplace + Conversion personas pass); no browse-only dead-ends; ranker ≥ 4.0 | — |

**P3 register/honesty decision — RULED 2026-07-09 (operator):** `/use-cases` + `/adopters` keep their archetype personas but **clearly labelled *illustrative***, with a pointer to `/commons` for real subnetwork proof (low-risk, honest, no new sourcing). *(The alternative — replace with real stories — was declined for now.)* Movement-Skeptic-clean by construction.

### Phase 4 — Docs IA + de-jargon *(provisional)*
| Mission | Scope (measured-adjusted) | Backlog |
|---|---|---|
| **M4.1 `what-is-adna`** | reframe top for the north-star · trim ~35% (measured 8492 chars) · sticky TOC · inline gloss + progressive-disclosure of the 16-entity table | B8 |
| **M4.2 `/reference` + `/learn` IA** | **`/learn` needs an ordered path** (measured: a near-empty 798-char hub — bigger than "reconcile navs") · `/reference` lead-with-spec + **version stamp** (EV6) · group by genre · reconcile the two docs navs · mobile reflow · **EV7** bridge `/compliance` → a named regime | B8 + EV6/EV7 |
| **Exit gate** | cognitive-a11y lifts from "C+"; Educator + Framework-Docs + Newcomer pass | — |

### Phase 5 — Craft + a11y/perf/reach (capstone) *(provisional)*
| Mission | Scope (measured-adjusted) | Backlog |
|---|---|---|
| **M5.1 Craft + design-system** | `/use-cases` mid-word excerpt truncation (confirmed) · hero letterbox · typos · card-grid mobile reflow · `/design-system` page · kill hardcoded hex · harmonize card tiers · **[fold] Axis-4 cross-surface graph cohesion** (`/network` + home `NetworkDiagram`; P1.6 follow-up #2) | B9 + B11 |
| **M5.2 A11y + perf + reach** | **residual axe** (most of EV4 likely already cleared in P3 — re-measure; grind any stragglers) · per-surface Lighthouse/CWV budget · OG imagery · i18n + low-bandwidth posture (plan) · site legal/privacy notice · deferred long-tail (B13) | B12 + B13 |
| **Exit gate (operator ship)** | real axe pass · perf budget held · craft debt cleared · **capstone ranker ≥ 4.95** | — |

## Cadence, guardrails, scope (unchanged from the charter)

- **Ship live per phase** behind an operator ship-gate + the `site/` gate-suite (`npm run test:gates`) + a Lighthouse budget. Per-phase persona-ranker gate (≥ 4.0 → capstone ≥ 4.95).
- **Register:** warm · calm · honest (~55/45); Movement-Skeptic gates every copy change — *more proof + more honesty*, never hype. Preserve the SS-Ghibli identity.
- **Routed (non-blocking):** data-currency → Hestia (Home.aDNA); deploy-layer perf/BP → Vitruvius (WebForge.aDNA). **Deferred (horizon):** full i18n · the social layer (Venus).
- **Model-tiered:** strategy/story/registry = opus; the mechanical craft/axe sweeps (B9/B12) drop to sonnet.

## Handoff

- **P3 ratified → `status: planned`** → [[mission_p3_actionability]]; the P3 build begins in a fresh session. **P4/P5 stay provisional** — authored per phase (ship-and-measure) after P3 deploys + is measured, exactly as Decade-1 → Decade-2 was gated.
- ✅ Re-plan + P3 ratified at the O5 operator gate ([[mission_decade2_replan]]), 2026-07-09.
