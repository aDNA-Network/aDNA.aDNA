---
type: campaign_replan
campaign: campaign_storyweave
title: "Storyweave P5 re-plan — the capstone, measured against live P4"
owner: stanley
status: accepted          # ⛩ RATIFIED 2026-07-12 — operator (stanley / FA) at mission_p5_replan O4; onboarding leads, R1 gated behind a ≥6-exemplar pass
created: 2026-07-12
updated: 2026-07-12
last_edited_by: agent_rosetta
grounded_in: how/missions/artifacts/storyweave_p5_measure/measure_summary.md
supersedes_scope_of: how/campaigns/campaign_storyweave/p4p5_replan.md   # P5 table only; that doc's P4 shipped + closed
tags: [campaign, storyweave, decade2, replan, p5, capstone, onboarding, proposed]
---

# Storyweave P5 re-plan (the capstone, measured against live P4)

> **Ratification (§7.7) — ACCEPTED.** **Decision:** accept the P5 capstone arc below — an **onboarding increment leads** (M5.1a R2 hero-install + R3 MIT eyebrow ship first on the current basis; **M5.1b R1 demo-as-proof gated behind a lightweight ≥6-exemplar install-forward reference pass** before build), then craft/design-system (M5.2), then a11y/perf/reach (M5.3) — with the Lighthouse budget a **hard gate**; ship live per increment; **capstone ranker ≥ 4.95** graduates the campaign to `completed`. · **Ratified-by:** stanley (Founding Architect). · **Date:** 2026-07-12. · **Status:** **accepted.** *(Authored by agent_rosetta after a live-measured post-P4 pass ([[measure_summary]]); ratified by the operator at the O4 gate of [[mission_p5_replan]] — both the arc and the R1-basis sub-decision. Register unchanged — warm · calm · honest.)*

> **What this is.** The charter gates each Decade-2 phase behind *"ship + measure before the next is re-planned."* **P4 (Docs IA) shipped + is live + closed** (M4.1 `8fe4eee` + M4.2 `a08fc79`) and is now **measured live** ([[measure_summary]], 2026-07-12: 6 surfaces axe-0, 21/21 interactive, home Perf 99 / CLS 0 / TBT 0). This finalizes the **provisional** P5 arc ([[p4p5_replan]] §Phase 5) against that evidence + the operator-surfaced **Hermes onboarding reference** — carrying what held, folding the onboarding candidate as the **lead**, and de-risking the a11y/perf work the measure showed is already excellent.

## Measured state (2026-07-12) — what shapes the capstone

P4 is **verified live and clean** ([[measure_summary]]). Four findings shape P5:

1. **P4 landed + held.** `/learn` went from a near-empty hub (798 / 0 h2) to an **ordered path** (2526 / 5 h2); `what-is-adna` de-densified **8492 → 6411**; `/reference` leads with spec + version stamp. All 6 surfaces **axe-0 both themes**, zero console errors, every load < 1 s. → **P5 carries no P4 clean-up debt.**
2. **The onboarding gap is real + measured.** Home has **no demo/video** (only static ASCII step-mocks in `home.ts`) and **no hero install path** (the single-sourced one-liner lives only in `/get-started`). → This is exactly **R1 (demo-as-proof) + R2 (hero install)** — the operator-surfaced lead.
3. **The perf budget is tight and green.** Home **Perf 99 / LCP 1.8 s / CLS 0 / TBT 0** (fresh); P3 baseline holds 99–100 across the rest. → R1's demo video is the **single highest-risk item**; the Lighthouse budget becomes a **hard gate** on the onboarding increment (not an afterthought).
4. **a11y is already 100.** → P5 is **not** an axe-remediation phase (confirms the p4p5 de-risking); the a11y/perf/reach mission shrinks to **hold-budget + reach**, not fix.

Everything else P4/P3 owned is confirmed shipped. The **only** live data gap is `zeta.aDNA`'s missing purpose line (67/68) — a Hestia `headline_mission` data-currency item, non-blocking, auto-upgrades the registry when enriched.

## The re-planned P5 arc (capstone — ship-per-increment, onboarding leads)

### M5.1 — Onboarding: demo-as-proof + hero install *(the operator-surfaced lead)*
> Operationalizes [[front_page_doctrine]]'s unbuilt "one demo," grounded in [[synthesis_onboarding_guidance]] (R1–R5, provenance-tagged) against the measured gap. Sequenced **cheap-and-safe first, highest-risk last.**

| Increment | Scope | Build target (confirmed on disk) | Risk / gate |
|---|---|---|---|
| **M5.1a — Hero install (R2) + license eyebrow (R3)** *(ship first)* | Surface the single-sourced `install_truth.json` one-liner + copy-button in/near the home hero; add an **"Open standard · MIT"** eyebrow single-sourced from `standard.ts` `STANDARD_LICENSE`. Keep `Get Started` as the fuller secondary CTA. | `site/src/components/sections/HomeHero.astro`; reuse `TryInClaudeCode.astro` copy pattern; `install_truth.json` (built by `scripts/build_install_truth.mjs`); `standard.ts` (`STANDARD_LICENSE='MIT'`, already a home stat) | **Low.** No hardcoding (**gate-12 install-truth**); CLS-safe (static content, no layout shift). Ships on the current reference basis. |
| **M5.1b — Demo-as-proof (R1)** *(gated)* | A real **~30–60 s screencast** — *clone → `claude` → the agent orients from `STATE.md` + does one real task* — on home + `/get-started`, replacing the static ASCII mock as the honest poster/fallback. | new asset + a lazy-loaded player component in `HomeHero`/`home.ts` "How it Works" | **Highest in the campaign.** Hard gates: hold **home CLS 0 / TBT 0 / Perf ≥ 99** (lazy-load + `poster` + **no autoplay-with-sound**; prefer optimized GIF / `<video muted playsinline>` / `asciinema` cast); **no-JS + a11y baseline** (captions/controls; ASCII mock = honest fallback); a **real recording, never staged** (Movement-Skeptic). **⊳ decision gate below.** |
| **M5.1c — adjacents (R4/R5)** | Feature-imagery only where a real mark out-scans prose (keep ASCII where a terminal is the honest surface); a one-line prereq note (git + Claude Code; macOS/Linux/Windows) — **no download cards** (aDNA is clone-and-run). | `home.ts`, `HomeHero.astro` | Low. Cosmetic, honesty-bounded. |

> **⊳ Durable-doctrine sub-decision (record at ratification).** The onboarding rules are **candidate-basis** — 1 exemplar (Hermes), below the `skill_reference_inspection` ≥6-exemplar bar to emit *durable* front-page doctrine ([[synthesis_onboarding_guidance]], [[_reference_set]]). **Recommendation:** ship **M5.1a/R2+R3 now** (they only surface existing single-sourced data more prominently — uncontroversial UX, no doctrine bet); **gate M5.1b/R1 behind a lightweight ≥6-exemplar install-forward reference pass** (Val Town · Raycast · Bun · Vercel · Astro) — R1 is a large front-page bet whose *format* (GIF vs cast vs muted-video) the comparator set would de-risk, and it promotes the candidate rules into ratified doctrine before we commit a hero asset. *(Operator may instead accept R1 on the current basis, or defer R1 to a later phase.)*
>
> **⛩ RATIFIED 2026-07-12 (operator, at [[mission_p5_replan]] O4):** **gate R1 behind the ≥6-exemplar pass.** M5.1a (R2 hero-install + R3 eyebrow) builds now on the current basis; **M5.1b (R1) waits** for a lightweight ≥6-exemplar install-forward reference pass (Val Town · Raycast · Bun · Vercel · Astro) — run via `skill_reference_inspection` — to de-risk the format and promote the candidate rules → durable front-page doctrine before any hero-asset commitment.

### M5.2 — Craft + design-system
| Scope | Grounded in |
|---|---|
| `/use-cases` mid-word `CardGrid` excerpt truncation (B9, P3-AAR-confirmed) · **harmonize the two card tiers** (`VaultCard`/`RegistryCard`, B11) · hero letterbox · copy typos · card-grid mobile reflow · a `/design-system` page · **kill hardcoded hex** (gate-14 token discipline) · **[fold]** Axis-4 cross-surface graph cohesion (`/network` + home `NetworkDiagram`; P1.6 #2) · **[fold]** hero sighted-keyboard-focus polish (P3 AAR held) | B9 + B11 + P1.6/P3 held follow-ups |

### M5.3 — A11y + perf + reach *(DE-RISKED — hold, don't fix)*
| Scope | Grounded in |
|---|---|
| **Hold** the per-surface Lighthouse/CWV budget as a **gate-19** hard gate (home 99/CLS-0/TBT-0 baseline in `./lighthouse/`; extend the fresh-LH sweep to `/get-started` + `what-is-adna` once the node-shell flake clears) · OG imagery · i18n + low-bandwidth posture (**plan only**) · site legal/privacy notice · grind any long-tail axe on surfaces not yet swept (residual near-nil — all measured surfaces axe-0) · deferred long-tail (B13) | measure Part 3–4: axe=100, perf tight-green → scope shrinks |

### Exit gate (operator ship — graduates the campaign)
perf budget held (home CLS 0 / TBT 0 / Perf ≥ 99, R1 included) · craft debt cleared · residual axe = 0 · **capstone ranker ≥ 4.95** → campaign `status: completed` + Completion Summary + Campaign AAR.

## Per-mission execution (SO#11 + Gov Doctrine §Model-Tiered)

| Mission | `executor_tier` | `token_budget_estimated` |
|---|---|---|
| **M5.1** Onboarding | **opus** (R1 art-direction/honesty + reference pass = judgment; R2/R3 mechanical) | ~80–120 kT (R2/R3 build + gate) + a separate pass for R1 if ratified (asset + measure) |
| **M5.2** Craft/design-system | **sonnet** (mechanical craft/typo/hex/reflow); **opus** for the `/design-system` page design | ~60–90 kT |
| **M5.3** A11y/perf/reach | **sonnet** (OG, legal page, LH sweep); **opus** for the i18n/low-bandwidth plan | ~50–70 kT |

## Cadence, guardrails, scope (unchanged from the charter)

- **Ship live per increment** behind an operator ship-gate + the `site/` gate-suite (`npm run test:gates`) + the **Lighthouse budget** (gate-19). Per-increment ranker ≥ 4.0 → capstone ≥ 4.95.
- **Register:** warm · calm · honest (~55/45); the Movement-Skeptic gates every copy change *and* the R1 demo (a **real** recording — more proof + more honesty, never hype). Preserve the SS-Ghibli / Tokyo-Night identity — steal Hermes's confidence, **not** its palette.
- **Routed (non-blocking):** data-currency (`headline_mission` 0/68, `zeta.aDNA`, 27/68 vault_cards) → Hestia (Home.aDNA); deploy-layer perf/BP → Vitruvius (WebForge.aDNA). **Deferred (horizon):** full i18n · the social layer (Venus).

## Handoff

- **On ratification:** P5 → `status: accepted`; author `mission_p5_1_onboarding` in a **fresh (separate) session** — the P5 **build is not this mission** (this ends at the O4 gate). M5.1a/b/c → M5.2 → M5.3, ship-and-measure per increment.
- **Sub-decision to capture at the gate:** the durable-doctrine call (ship R2/R3 now; gate R1 behind a ≥6-exemplar reference pass — or accept/defer R1).
- **Not ratified / revise:** fold the operator's redirect and re-surface.
