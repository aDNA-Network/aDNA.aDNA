---
type: backlog
idea_class: tooling
created: 2026-06-21
updated: 2026-09-02
status: resolved          # ✅ BUILT as gate-49 at HAUSSMANN P4.4b B0 (2026-08-26, `1816993`). Closed at B3, 2026-09-02. See §Resolution.
priority: low
campaign: campaign_website_adna
last_edited_by: agent_rosetta
tags: [backlog, idea, website, tooling, gate, visual_regression, deferred, g3]
deferred_owner: "Rosetta / Astro.aDNA / III.aDNA"
deferred_trigger: "a craft regression slips past wired gates 4/9/18/19, or container-pinned infra reaches standing-watch"
---

# Idea — semantic visual-regression gate (G3, deferred at D4)

**Source:** WEBSITE.aDNA D4 decade-close ([[aar_decadal_d4_visual_craft]]). [[TOOLING-PROMOTION.aDNA]] specified **G3 (visual-regression baseline)** as a D4 gate; it was **deferred with operator sign-off** at the D4 decade-gate rather than wired.

## Why deferred (the rationale to revisit)
- **Environment fragility.** Naive Playwright `toHaveScreenshot` baselines captured on a dev Mac and asserted in Vercel/CI render differently (font hinting, sub-pixel AA, GPU) → false-positive churn that trains reviewers to ignore the gate. TOOLING-PROMOTION itself calls for a **semantic** diff "so OS font rendering doesn't generate noise" — which needs real infra (platform-pinned containers, or a service like Percy/Chromatic), not a quick baseline commit.
- **Surface already covered.** The C/H regression class G3 targeted is substantially guarded by the gates that ARE wired: `gate-9` (responsive / horizontal-overflow across the viewport matrix), `gate-4` (axe WCAG AA, **both modes**), `gate-18` (categorical-colour count / G9), `gate-19` (Lighthouse CWV budget / G1). The decade-exit criteria are outcome-based (CWV / ≤2 accents / density / axe) and do not require G3 wired.

## When to revisit
- If a craft/layout regression slips past the existing gates (a real miss → the cost-benefit flips).
- At P4 standing-watch wiring (`mission_wadna_p4_signoff`) — evaluate a **container-pinned** Playwright snapshot job or a hosted visual-diff service as part of the always-on floor.
- Candidate **upstream** contribution to `Astro.aDNA` / `III.aDNA` (a reusable semantic visual-regression recipe for aDNA-built sites) — **requires separate upstream sign-off** per the upstream-contribution protocol before filing an `idea_upstream_`.

## Acceptance (if pursued)
Platform-stable baselines (no OS-font flake), intentional-change baseline-update flow in the same PR, and a documented escape hatch — wired into `test:gates` without false-positive churn.


## Champollion G0 disposition — X (M1.1, 2026-07-02)

**DEFER.** Owner: Rosetta / Astro.aDNA / III.aDNA. Trigger: a craft regression slips past wired gates 4/9/18/19, or container-pinned infra reaches standing-watch. Ratified at Champollion G0 (D2).

## Disposition — Refit M5 vNext triage (2026-07-24) · **CONFIRM-DEFERRED**

Reviewed in the light sweep; **stays `deferred`** — semantic visual-regression gate (deferred at Storyweave D4); trigger: a gate-suite hardening pass. Owner: Rosetta. See [[vnext_roadmap]] §Deferred-with-trigger.

---

## Resolution — ✅ BUILT as `gate-49` (HAUSSMANN P4.4b B0, 2026-08-26 `1816993`; closed at B3, 2026-09-02)

**The deferral trigger fired in the second form it named** — *"container-pinned infra reaches
standing-watch"* — not the first. No craft regression slipped past gates 4/9/18/19; the cost-benefit
flipped because `gates.yml` was **already** running `mcr.microsoft.com/playwright:v1.59.1-noble`, so
the "real infra" this idea said G3 needed **already existed** and the gate was an added project, not
a new substrate. *(That control was predicted at the 08-24 amendment and held.)*

### Acceptance, read clause by clause

| Clause | Status |
|---|---|
| Platform-stable baselines (no OS-font flake) | ✅ 24 baselines (12 templates × 2 themes) **generated AND compared in the same pinned container**. Because that removes this lane's only source of non-determinism, the tolerance is **`maxDiffPixels: 0`**, not a feel-based ratio. |
| Intentional-change baseline-update flow | ✅ `npm run test:visual:baseline` (`visual_regression_container.sh baseline`), in-container, same image. |
| Documented escape hatch | ✅ Masks, with the discipline made part of the claim: **G49b mask liveness** + **G49c pinned mask arithmetic**, so a mask cannot silently grow. |
| **"wired into `test:gates`"** | ⛔ **DELIBERATELY NOT DONE — and this clause is the one worth reading.** |

### ⭐ The one clause that was refused, and why

`test:gates` was **bare `playwright test`**, which runs *every* project — so wiring the snapshot lane
into it would have dragged it onto macOS and produced **24 red on a perfectly good tree**. That is
precisely *"false-positive churn that trains reviewers to ignore the gate"* — **this idea's own
stated reason for deferring in the first place.** ⇒ `test:gates` is pinned to `--project=chromium`;
the visual lane is `npm run test:visual` / `test:visual:container` and its **own CI step**, joining
the existing `concurrency: gates-${{ github.ref }}` group so it queues behind the gate lane rather
than cancelling it.

⇒ **The clause was written before anyone knew the lane would be container-only. Honouring it
literally would have produced the exact failure it was written to prevent.** Recorded as a deviation
rather than ticked, so a later reader is not misled by a clean table.

### What the build found that this idea did not anticipate

⭐⭐ **Three defects in the gate before the gate found anything in the site — and every one had a
mask as the easy fix, and every mask would have gone green.** A tolerance written by feel let a
visible `h1` regression through; two mutation cases were **inert** (bare selectors losing to Astro's
scoped `[data-astro-cid-…]`) and **one of those was a control, so it reported success**; and `home`
was unstable because **`fullPage` capture resizes the viewport → the hero's `ResizeObserver` redraws
the canvas**. Taken instead of masking: `reducedMotion: 'reduce'` — *the site's own mechanism* — and
the canvas **hidden rather than masked**, so the SSR SVG beneath it **is asserted**.

⚠ **Limitation on the gate's face, not hidden here:** the baselines assert the **reduced-motion**
rendering; the animated constellation is **not covered and not claimed**. Baselines are **15 MB
across 24 files** — the price of full-page capture being real coverage.

### Not inherited

The **upstream** candidacy (a reusable recipe for `Astro.aDNA` / `III.aDNA`) is **not** discharged by
this resolution and still needs its own sign-off per the upstream-contribution protocol. It is not
filed, and this line is not a filing.
