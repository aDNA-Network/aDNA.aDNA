---
type: measure_summary
campaign: campaign_storyweave
mission: mission_p5_replan
title: "P4 live measure — the measure-before-re-plan gate input for P5"
created: 2026-07-12
last_edited_by: agent_rosetta
instrument: "headless T0 (scripts/visual_capture.mjs --axe) + T1 (scripts/p3_interactions.mjs) + Lighthouse (scripts/lh_summarize.mjs), --base https://adna.network"
tags: [measure, storyweave, p5, p4-held, evidence]
---

# P4 live measure (2026-07-12) — P5 re-plan gate input

Live headless measure of the shipped, deployed adna.network per [[doctrine_visual_inspection]] (T0 first; never assume Chrome). Raw evidence on disk beside this file: `capture_report.json` (24 PNGs, 6 surfaces ×2 vp ×2 themes), `lighthouse/lh_home.json`. **Verdict: P4 held + landed; site clean; the onboarding gap R1/R2 target is confirmed.**

## T0 — static + axe (6 surfaces, mobile-lg + desktop, dark + light)

| Surface | status | load | bodyLen | h2 | axe | vs pre-P4 baseline |
|---|---|---|---|---|---|---|
| `/` (home) | 200 | 740 ms | 7007 | 5 | **0** | R1/R2 baseline — **no demo/video present**; install one-liner absent from hero |
| `/get-started` | 200 | 951 ms | 4191 | 3 | **0** | where the install one-liner lives today |
| `/learn/what-is-adna` | 200 | 961 ms | **6411** | 6 | **0** | **8492 → 6411** — M4.1 density reframe **landed** |
| `/reference` | 200 | 755 ms | **2900** | 5 | **0** | 2482 → 2900 — M4.2 spec-lead + version stamp **landed** |
| `/learn` | 200 | 691 ms | **2526** | 5 | **0** | **798 / 0 h2 → 2526 / 5 h2** — the near-empty hub became the **ordered path** (M4.2's headline win) |
| `/compliance` | 200 | 706 ms | 8345 | 9 | **0** | M4.2 procurement bridge |

**All 6 surfaces: 200 · axe-0 (both themes) · zero console errors · every load < 1 s.** P4 (Docs IA) is verified held and its two biggest moves (`/learn` ordered path; `what-is-adna` de-densification) are visible live.

## T1 — interactive (scripted, `p3_interactions.mjs`): **21 passed · 0 hard-failed · 0 soft-warned**

Every shipped client feature still behaves post-P4: registry progressive-enhancement + search (`molecul` → 1/68) + 15-facet filter (platform → 30/30, `aria-pressed`) + **68 rendered === 68 declared** (64→68 completeness fix holds) · adopt/publish rail (links resolve 200) · hero deep-link a11y twin (15 links) + graph deep-link twin (68 links) · `/use-cases` + `/adopters` illustrative labels (ruling-A honesty) + on-ramps · home §1 4-pillar payoff · `/vaults` axe-0. **Only gap:** `zeta.aDNA` purpose line missing (67/68) — the known Hestia `headline_mission` data-currency thread, non-blocking, not Storyweave's.

## Lighthouse — hold-the-budget baseline

| surface | perf | a11y | bp | seo | LCP | CLS | TBT | FCP |
|---|---|---|---|---|---|---|---|---|
| **home `/`** (fresh 2026-07-12) | **99** | 100 | 100 | 100 | 1.8 s | **0** | **0 ms** | 1.4 s |

Home is the surface R1's demo video most threatens (CLS/TBT/LCP). Fresh confirmation: **CLS 0 · TBT 0 ms · Perf 99** — the budget the P5 onboarding increment must hold. `/get-started` + `/learn/what-is-adna` fresh LH were blocked by an intermittent node-shell PATH flake after 3 attempts (deferred, non-blocking); their hold-budget reference is the P3-measure baseline (**Perf 99–100 / LCP 1.4–1.8 s / CLS ≤ 0.001 / TBT 0** across 6 surfaces) — valid here because P4 was pure docs-IA (no perf-affecting client JS) and their T0 loads are < 1 s.

## What this feeds the re-plan

1. **P4 held** → P5 is the capstone with no P4 clean-up debt; the docs-IA arc is done.
2. **Onboarding gap is real + measured** — home has **no demo** (only ASCII step-mocks) and **no hero install path** (the one-liner is `/get-started`-only). This is exactly R1 (demo-as-proof) + R2 (hero install) from [[synthesis_onboarding_guidance]].
3. **Perf budget is tight and green** (home CLS 0 / TBT 0 / Perf 99) → R1's video is the single highest-risk item; the re-plan makes the Lighthouse budget a **hard gate** on the onboarding increment.
4. **a11y is already 100** → P5 is **not** an axe-remediation phase (confirms the p4p5_replan de-risking); M5.2 shrinks to hold-budget + OG + i18n-plan + legal + long-tail.
