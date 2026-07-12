---
type: campaign_replan
campaign: campaign_storyweave
title: "Storyweave P4/P5 re-plan — measured against live P3"
owner: stanley
status: accepted          # ⛩ RATIFIED 2026-07-11 — operator (stanley / FA) at mission_p4p5_replan O4; P4 authorized, P5 provisional
created: 2026-07-11
updated: 2026-07-11
last_edited_by: agent_rosetta
grounded_in: how/missions/artifacts/storyweave_p3_measure/measure_and_review.md
supersedes_scope_of: how/campaigns/campaign_storyweave/decade2_replan.md   # P4/P5 tables only; that doc's P3 shipped
tags: [campaign, storyweave, decade2, replan, p4, p5, proposed]
---

# Storyweave P4/P5 re-plan (measured against live P3)

> **Ratification (§7.7) — ACCEPTED.** **Decision:** accept the refreshed P4 → P5 arc below (ship-per-phase) + authorize the **P4** build; P5 stays provisional (re-planned after P4 ships + is measured). · **Ratified-by:** stanley (Founding Architect). · **Date:** 2026-07-11. · **Status:** **accepted.** *(Authored by agent_rosetta after a live-measured P3 pass; ratified by the operator at the O4 gate of [[mission_p4p5_replan]]. Register posture for the docs surfaces unchanged — warm · calm · honest.)*

> **What this is.** The charter gates each Decade-2 phase behind *"ship + measure before the next is re-planned."* **P3 shipped + is live** ([[mission_p3_actionability]]) and is now **measured live** ([[measure_and_review]], 2026-07-11: 21/21 interactive assertions, all surfaces axe-0, Lighthouse 99–100). This reconciles the **provisional** P4/P5 arc ([[decade2_replan]]) against that evidence — dropping what P3 cleared, carrying what holds, and **sharpening two phases against the measured reality.**

## Measured state (2026-07-11) — what changed the plan

P3 is **verified live and clean.** Three findings move the P4/P5 scope:

1. **B12's axe headline is fully cleared.** The nested-`<main>` bug is gone on `/vaults` + `/vaults/[slug]` in **both themes**; Lighthouse a11y = 100 on all 6 measured surfaces. → P5 is **no longer an axe-remediation phase.**
2. **Perf is best-in-class already.** Lighthouse **Perf 99–100 / LCP 1.4–1.8 s / CLS ≤ 0.001 / TBT 0** across 6 surfaces (incl. the dense `what-is-adna`). → P5's perf work becomes **hold-the-budget**, not fix-perf; **P4's "trim" is a comprehension/IA goal, not a perf one.**
3. **The docs surfaces are byte-identical to Decade-2** (`/learn` 798 · `what-is-adna` 8492 · `/reference` 2482). → **B8 holds verbatim; P4 is exactly the docs-IA phase planned.**

Everything else P3 owned is confirmed shipped (registry actionability, on-ramps, illustrative labels, deep-link twins). The **only** live data gap is `zeta.aDNA`'s missing purpose line — a Hestia data-currency item, non-blocking, auto-upgrades the registry when enriched.

## The re-planned arc (P4 → P5, ship-per-phase — order unchanged)

### Phase 4 — Docs IA + de-jargon *(proposed for authorization — an information-architecture phase, not perf)*
| Mission | Scope (measured-adjusted) | Grounded in |
|---|---|---|
| **M4.1 `what-is-adna`** | reframe the top for the north-star · trim ~35% **for comprehension** (measured 8492 chars, 7 h2 — dense, though Perf 100) · sticky TOC · inline gloss + progressive-disclosure of the 16-entity table | A: `what-is-adna` 8492/7 unchanged; LH Perf 100 → density is cognitive, not perf |
| **M4.2 `/reference` + `/learn` IA** | **`/learn` an ordered path** (measured 798 chars, **0 h2** — a near-empty hub) · `/reference` lead-with-spec + **version stamp** (EV6; measured 2482/1) · group by genre · reconcile the two docs-shell navs · mobile reflow · **EV7** bridge `/compliance` → a named regime | A: `/learn` 798/0h2, `/reference` 2482/1h2 unchanged |
| **Exit gate** | cognitive-a11y lifts from "C+"; Educator + Framework-Docs + Newcomer personas pass; ranker ≥ 4.0; gates green; **hold** the LH budget (baseline captured) | — |

### Phase 5 — Craft + a11y/perf/reach (capstone) *(provisional — re-planned after P4 ships + is measured)*
| Mission | Scope (measured-adjusted) | Grounded in |
|---|---|---|
| **M5.1 Craft + design-system** | `/use-cases` mid-word `CardGrid` excerpt truncation (B9, P3-AAR-confirmed still present) · hero letterbox · copy typos · card-grid mobile reflow · a `/design-system` page · kill hardcoded hex · **harmonize the two card tiers** (`VaultCard`/`RegistryCard`, B11) · **[fold]** Axis-4 cross-surface graph cohesion (`/network` + home `NetworkDiagram`; P1.6 #2) · **[fold]** hero sighted-keyboard-focus polish (P3 AAR held) | B9 + B11 + P1.6/P3 held follow-ups |
| **M5.2 A11y + perf + reach** *(DE-RISKED)* | **hold** the per-surface Lighthouse/CWV budget (99–100 baseline in `./lighthouse/`) as a gate · OG imagery · i18n + low-bandwidth posture (**plan**) · site legal/privacy notice · grind any long-tail axe on surfaces not yet swept (note: about/network/commons/community/adopters/learn* already axe-0 this pass → residual is near-nil) · deferred long-tail (B13) | Part C: axe cleared, perf excellent → scope shrinks |
| **Exit gate (operator ship)** | perf budget held · craft debt cleared · residual axe = 0 · **capstone ranker ≥ 4.95** | — |

> **⊕ Candidate thread — operator-surfaced 2026-07-11 (folds into the P5 re-plan):** an **Onboarding demo-as-proof + direct-install surface.** R1 — a real **~30–60s screencast** of the agent navigating a vault (home + `/get-started`), replacing the static ASCII mocks. R2 — **hero-level install prominence**: surface the single-sourced `install_truth.json` one-liner (`git clone …/aDNA.git ~/aDNA && cd ~/aDNA && claude`) + copy-button **on the home hero** (today it lives only in `/get-started`). R3–R5 (cheap adjacents) — license-forward hero eyebrow (MIT, from `standard.ts`) · feature-imagery where it out-scans prose · a one-line prereq note (no download cards — aDNA is clone-and-run). **Prompted by** the operator's review of the **Hermes agent** landing page (usage video + hero-level install); it **operationalizes existing doctrine** — [[front_page_doctrine]]'s unbuilt "one demo" pattern — not new invention. Reference + provenance-tagged candidate rules: [[synthesis_onboarding_guidance]] · [[onboarding_references/_reference_set|_reference_set]]. **Guardrails (non-negotiable):** the demo is the **highest-risk item for the CWV budget** → lazy-load + `poster` + **no autoplay-with-sound** (hold `/` Perf 1.00 / LCP 489ms); keep the **no-JS + a11y baseline** (captions/controls; the ASCII mock is the honest poster/fallback); a **real recording, not staged** (Movement-Skeptic). **Status: provisional candidate** — R1+R2 likely lead a P5 onboarding increment, but the re-plan (measure-before-re-plan gate) makes the call. *(P4 has since **SHIPPED + CLOSED** 2026-07-11 — M4.1 `8fe4eee` + M4.2 `a08fc79`; this candidate enters the pending P5 re-plan.)*

## Cadence, guardrails, scope (unchanged from the charter)

- **Ship live per phase** behind an operator ship-gate + the `site/` gate-suite (`npm run test:gates`) + the Lighthouse budget. Per-phase ranker ≥ 4.0 → capstone ≥ 4.95.
- **Register:** warm · calm · honest (~55/45); Movement-Skeptic gates every copy change — more proof + more honesty. Preserve the SS-Ghibli identity.
- **Routed (non-blocking):** data-currency (`headline_mission` 0/68, `zeta.aDNA`, 27/68 vault_cards) → Hestia (Home.aDNA); deploy-layer perf/BP → Vitruvius (WebForge.aDNA). **Deferred (horizon):** full i18n · the social layer (Venus).
- **Model-tiered:** IA/story/design decisions = opus; the mechanical craft/typo/hex sweeps drop to sonnet.

## Handoff

- **On ratification:** P4 → `status: planned` → author `mission_p4_docs_ia` in a fresh session; **P4/P5 build is a SEPARATE session** (this mission ends at the gate). **P5 stays provisional** — re-planned after P4 deploys + is measured (same gate).
- ✅ Ratified at the O4 operator gate ([[mission_p4p5_replan]]), 2026-07-11 — **P4 authorized**; author `mission_p4_docs_ia` in a fresh session. **P5 stays provisional** (re-plan after P4 ships + is measured).
