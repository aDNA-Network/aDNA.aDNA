---
campaign_id: campaign_storyweave
type: campaign
title: "Operation Storyweave — adna.network best-in-class refresh"
owner: stanley
status: proposed          # awaits O8 operator ratification → active (§7.7: agents author, operator ratifies)
phase_count: 6
mission_count: 11
estimated_sessions: "12-18"
calibrated_sessions: "10-15"
estimation_class: content-novel
executor_tier: opus       # strategy/story/graph = opus; mechanical craft sweeps drop to sonnet (model-tiered execution)
priority: high
created: 2026-07-07
updated: 2026-07-07
last_edited_by: agent_rosetta
tags: [campaign, storyweave, site, adna_network, refresh, storytelling, proposed]
---

# Campaign: Operation Storyweave — adna.network best-in-class refresh

## Goal

Raise **adna.network** to a **best-in-class visual + professional + credible** bar and make it **tell the aDNA story so a stranger *gets it and wants it*** — the network · context democracy · federated + collaborative context-graph building, for humans and AI agents, as a public good. The site is **mature, not a rescue**: this is a deliberate refresh — sharper storytelling, a real (legible) graph, an outsider-credible "who's behind this" story, and a craft/a11y/perf pass — **without breaking its distinctive SS-Ghibli identity or its radical-honesty voice** (its #1 trust asset).

## Context

Chartered from the **Operation Storyweave planning mission** ([[mission_site_story_review_charter]]), a comprehensive review (O1–O6, 2026-07-06→07): a reference/benchmark pass (9 exemplars → storytelling doctrine [[storytelling_doctrine_deltas]]), a headless 18-dimension review ([[findings_o3]]), a **16-reviewer × 16-adopter × 2-skeptic red-team** ([[o4_redteam_matrix]], fleet avg ≈ 3.45 — below the 4.0 bar), a storytelling deep-dive ([[o5_story_audit]]), a completeness-critic pass, and a synthesized **prioritized backlog** ([[o6_synthesis_backlog]]). Two strategic questions the red-team raised are **operator-resolved** ([[governance_and_mission_resolution]]): **progressive decentralization** (governance) + **progressive humanization** (real faces/stewards/communities grown *with* the network). Evidence instrument = the headless **[[doctrine_visual_inspection]]** T0 harness (`scripts/visual_capture.mjs`) — the review ran fully headless, no Chrome.

## Scope

### In Scope
- The `site/` tree: content, copy, design, components, the graph visualization, IA/nav, onboarding, a11y, craft, and the `site/tests/gates/` suite.
- The **7 review themes T1–T7** + the completeness-critic's **T8** (un-reviewed conversion surfaces + the `/org-context-graphs` orphan) + a **verify-live** measured pass.
- Baking in the resolved strategic threads (the governance roadmap + humanization) as site content.

### Out of Scope (routed / deferred)
- **Routed → Hestia (Home.aDNA):** inventory/data currency — `vaults.json` / `install_truth.json` accuracy + whether "68 vaults" reflects reality per `/vaults/[slug]`.
- **Routed → Vitruvius (WebForge.aDNA):** deploy-layer perf/BP machinery (A-09) + the deploy cadence infra.
- **Deferred (horizon):** full **i18n** (a plan only this campaign) · the live **social layer** (Venus / Network First Light).

### Subsumes
| Plan/Mission | Status at Subsumption | Absorbed by |
|---|---|---|
| [[mission_site_story_review_charter]] | in_progress (O1–O7 done; O8 = this charter) | the campaign itself (its planning parent) |
| dossier §3 deferred long-tail (A-08/13/17/18/19) | deferred | Phase 5 (B13) |

## North-star & measurable success criteria

- **Persona ranker (hard gate):** every touched surface reaches **≥ 4.0** at its phase gate; **capstone ≥ 4.95** at campaign close (per `skill_decadal_aar` preservation clause). Fleet baseline was **≈ 3.45**.
- **Both skeptics** move from **ON-THE-FENCE → WOULD-TRY (Frontier Engineer) / WOULD-ENGAGE (Funder)**.
- **60-second newcomer** states **What / Why / How** on the home unaided; the **"you already do X"** reframe lands.
- **Cognitive-a11y** lifts from **"C+"**; a **real axe pass** (AA, keyboard, screen-reader) — measured, not asserted.
- **The real graph is legible** (readable labels, AA contrast, responsive, interactive) — the Diagram-Reviewer passes.
- **Lighthouse**: Perf/BP/SEO budgets held; CLS measured & within budget.
- **Zero orphan surfaces**; the T2 "outsider-credible" verdict re-confirmed on the *full* surface set.

## Phases & Missions

### Phase 0 — Evidence completion (unblock the T2 verdict)
| Mission | Title | Sessions | Deps | Status |
|---|---|---|---|---|
| M0.1 | Surface-audit + link-graph crawl (persona hubs · `/org-context-graphs` orphan · `/how/*` · `/vaults/[slug]` sample) — re-confirm T2 on real evidence | 1–2 | — | planned |
| M0.2 | Verify-live measured pass (Lighthouse/CWV · axe · motion/toggle/interactivity · OG-render · install-truth diff · 404) via the T0 harness | 1 | — | planned |
**Exit gate (operator):** T2 verdict re-confirmed on the full surface set; measured a11y/perf baselines captured; the `/org-context-graphs` orphan dispositioned (link into IA **or** retire). *(B1, B2.)*

### Phase 1 — Storytelling core
| Mission | Title | Sessions | Deps | Status |
|---|---|---|---|---|
| M1.1 | **"Who's behind this"** credibility surface — real FA + Wilhelm partner + one impact case + the **governance roadmap** + **humanization** framing + "what the Lattice Protocol *is*" | 2 | P0 | planned |
| M1.2 | **Home hero** — the S2 reframe line · proof-of-life promotion (68 + subnetworks hero-adjacent) · 1+1 CTA · the S7 N-pillar payoff | 2 | P0 | planned |
**Exit gate:** home + credibility surface pass the ranker; both skeptics flip to WOULD-TRY/WOULD-ENGAGE; the 60-sec-newcomer read passes. *(B4, B5, B10-home.)*

### Phase 2 — The legible graph component (the flagship visual)
| Mission | Title | Sessions | Deps | Status |
|---|---|---|---|---|
| M2.1 | Build the reusable **legible/interactive graph** — split connected(15/14) from unconnected(53); pan/zoom/hover/click-open; AA-contrast; responsive | 2–3 | P1 | planned |
| M2.2 | Apply it to `/vaults/graph` + the home concept-diagram + the `/network` diagram (replace the faint asterisks) | 1–2 | M2.1 | planned |
**Exit gate (operator — ADR-032 reconciliation):** the real graph is legible/interactive/AA/responsive; Diagram-Reviewer + Enterprise-Architect pass; the illustration↔data-graph register reconciled with ADR-032. *(B3; the DP2 strategic call.)*

### Phase 3 — Actionability + registry
| Mission | Title | Sessions | Deps | Status |
|---|---|---|---|---|
| M3.1 | Registry actionability — one-line purpose per card · search/filter · adopt/publish rail · **reconcile `/adopters`** (archetype→proof) | 2 | P1 | planned |
| M3.2 | Onboarding hardening + wire the on-ramps — get-started overflow/prereq/north-star-bridge · community ladder · use-cases outcomes · commons non-dev "follow along" | 1–2 | P1 | planned |
**Exit gate:** adopters can *act* (Marketplace + Conversion personas pass); no browse-only dead-ends. *(B6, B7, B10.)*

### Phase 4 — Docs IA + de-jargon
| Mission | Title | Sessions | Deps | Status |
|---|---|---|---|---|
| M4.1 | `what-is-adna` — reframe top for the north-star · trim ~35% · sticky TOC · inline gloss + progressive-disclosure of the 16-entity table | 2 | P1 | planned |
| M4.2 | `/reference` + `/learn` IA — lead-with-spec + **version stamp** · group by genre · reconcile the two navs · mobile reflow · ordered path | 1–2 | — | planned |
**Exit gate:** cognitive-a11y lifts from "C+"; Educator + Framework-Docs + Newcomer pass. *(B8.)*

### Phase 5 — Craft + a11y/perf/reach hardening (capstone)
| Mission | Title | Sessions | Deps | Status |
|---|---|---|---|---|
| M5.1 | Craft + excerpt sweep + **design-system hardening** — truncation/hero-letterbox/typos · `/design-system` page · kill hardcoded hex · harmonize card tiers | 1–2 | P0 | planned |
| M5.2 | A11y + perf + reach — real axe remediation · CLS/perf budget · OG imagery · **i18n + low-bandwidth** posture (plan) · site legal/privacy notice · deferred long-tail (B13) | 2 | P4 | planned |
**Exit gate (operator ship):** real axe pass · perf budget held · craft debt cleared · **capstone ranker ≥ 4.95**. *(B9, B11, B12, B13.)*

## Decision Points
| # | When | Decision | Status |
|---|---|---|---|
| 0 | **Now (O8)** | Ratify this charter → `active` | **pending (operator)** |
| — | pre-campaign | Governance framing (democracy vs FA) | **RESOLVED — progressive decentralization** |
| — | pre-campaign | Personas vs real-humans | **RESOLVED — progressive humanization** |
| 1 | P0 exit | `/org-context-graphs` orphan: link into IA vs retire | pending |
| 2 | P2 exit | **ADR-032 reconciliation** — real-graph-as-hero vs illustrative register (a *composed* focal unit, doctrine §1) | pending |
| 3 | each phase | Deploy/ship ratification (deploy cadence: phase-close + credibility-hotfix path) | pending |
| 4 | P1 | Biodiversity — feature a subnetwork/partner vs. state as a mission direction pending one | pending |

## Risk Register
| Risk | Severity | Mitigation |
|---|---|---|
| Sharper storytelling tips into **hype** (breaks the #1 trust asset) | High | The register guardrail (~55/45; Movement-Skeptic gate every phase); the remedy is *more honesty*, never invented people/community |
| The **graph rebuild** (T1/B3) is the hardest, most uncertain build | High | Prototype-first (a spike before M2.2); reuse D3/existing SSR; a legible static fallback if interactive slips |
| **Scope creep** across 6 phases | Medium | Per-phase persona-ranker gate (≥4.0) + operator phase-gates; B-items are the only backlog |
| **Cross-vault** dependencies stall (Hestia data-currency, Vitruvius deploy) | Medium | Staged coord memos early; in-campaign work never blocks on them |
| **Site drift** during a multi-session campaign | Medium | Currency check (git `site/` vs live) before each deploy; the T0 harness re-baseline |
| ADR-032 reconciliation (DP2) unresolved blocks P2 | Medium | Frame options as *composed focal unit* (keep warmth + show the artifact); operator gate at P2 |

## Verification Strategy
Per the template's per-mission / per-phase / campaign gates, plus:
- **Instrument:** the headless **T0 harness** (`scripts/visual_capture.mjs` + `--axe` + Lighthouse) per [[doctrine_visual_inspection]] — every visual finding screenshot-cited; **no Chrome dependency**.
- **Persona gate each phase:** `skill_decadal_aar` Reviewer-Lens-Pass + adopter ranker (adopter ranker = the hard gate; ≥4.0 → capstone ≥4.95).
- **`site/` gate-suite** (`npm run test:gates`) green + a Lighthouse budget + the (new) visual-regression baseline (deferred G3).
- **Register audit** (Movement-Skeptic + the honesty guardrail) on every copy change.

## Timeline
| Phase | Missions | Sessions |
|---|---|---|
| P0 evidence | M0.1–M0.2 | 2–3 |
| P1 storytelling | M1.1–M1.2 | 3–4 |
| P2 graph | M2.1–M2.2 | 3–5 |
| P3 actionability | M3.1–M3.2 | 3–4 |
| P4 docs/de-jargon | M4.1–M4.2 | 3–4 |
| P5 craft/a11y/perf | M5.1–M5.2 | 3–4 |
| **Total** | **11 missions** | **~12–18 (calibrated 10–15)** |

## Notes
- **Do not break** the SS-Ghibli identity or the honest voice — they are assets, not debt.
- Model-tiered: strategy/story/graph = **opus**; mechanical craft sweeps (B9) = **sonnet**.
- **Propagation of the governance resolution** (`governance-model.mdx` · ethos brief · a staged aDNALabs governance memo) rides **P1** (it's the credibility-surface content).
- All work **LOCAL**; push per operator; deploy per the ratified cadence.

## Completion Summary
*Fill at `status: completed`.*

## Campaign AAR
*Mandatory before `status: completed` (template_aar_lightweight).*
