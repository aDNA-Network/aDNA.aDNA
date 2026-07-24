---
type: backlog
idea_class: tooling
created: 2026-06-21
updated: 2026-07-02
status: deferred
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
