---
plan_id: mission_haussmann_p4_4_ci_hardening
type: plan
title: "P4.4 — CI hardening: visual regression, live-header watch, field p75, the whole-site sweep"
campaign: campaign_haussmann
phase: P4
decade: 2
owner: stanley
status: queued   # ⛩ DP6 RATIFIED 2026-08-19 — activated. RESCOPED UP: adds THREE gate classes for the blindness the re-baseline exposed (487 assertions green while 8 claim rows are open, ZERO overlap) — a zero-console-error gate (F20 shipped through 487 assertions unseen) · an off-site CTA-target gate (probe the repos the CTAs point at for CONTRIBUTING/CoC/LICENSE; R-122/R-123 were invisible because every gate asserts against the BUILT SITE) · a hub-substance floor (F19). Also owns ⊳ D-E: mirror lighthouse_profiles.json into how/federation/webforge/ (0 hits vault-wide today, so campaign convention 4 is unfollowable and every gate-19 bar is transcribed); amend the convention ONLY if Vitruvius declines.
mission_class: build
executor_tier: sonnet
token_budget_estimated: "~220–330 kT across 1–2 sessions: toHaveScreenshot baselines (container) + reg reports + Unlighthouse periodic + field-p75 via Speed Insights + CWV ratchet + budget wiring, PLUS three new gate classes (zero-console-error · off-site CTA-target · hub-substance floor) and the ⊳ D-E lighthouse_profiles.json mirror. Raised from ~180–280 kT at ⛩ DP6 2026-08-19 (ADR-016/SO#11)"
token_budget_actual:
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: ["toolkit A2 (container baselines solve the old deferral; Lost Pixel archived — avoid) / A3 (Unlighthouse) / A8 (Speed Insights as p75; CrUX null; keyless PSI dead)", "idea_visual_regression_gate (deferred for exactly the noise this solves)", "N12 (no field instrument)", "P0.2 header check (extend)", "webforge P3 (class-keyed bars, ratchet law)"]
vitruvius_dimensions: [D12, D5]
decade_theme: craft
webforge_patterns: [P3]
patterns_to_author: []
depends_on: [mission_haussmann_p0_2_deploy_hardening, mission_haussmann_p2_6_midscore]
blocks: []
acceptance_criteria:
  - "Visual-regression gate live: Playwright toHaveScreenshot on ~12 key templates × 2 themes, baselines GENERATED IN THE CI CONTAINER (the dev-Mac-vs-CI noise fix); reg-actions-style diff report on PRs; the old deferral formally closed"
  - "Field-p75 instrument decided + live (Vercel Speed Insights recommended; operator enables in dashboard) — D12's field gate becomes measurable"
  - "Unlighthouse whole-site sweep on a schedule (weekly/pre-release), budget-failing; fixtures remain the per-route gate"
  - "CWV budgets adopt the WebForge class-keyed + ratchet discipline (read from profiles, never transcribed)"
verification_method: "red-tests (deliberate visual diff; deliberate budget breach) + one scheduled sweep run + field data flowing"
human_gate: true
tags: [plan, haussmann, p4, ci, visual_regression, cwv]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> The classes of defect this campaign found by hand become classes a machine finds forever.

## Why this mission exists

The S1 mobile defect shipped because nothing looks at pixels; headers drifted because nothing watches production; the review instrument demands field p75 that no current instrument provides `[D N3/N12]`. The vault deferred visual regression over cross-machine noise — container-generated baselines resolve exactly that objection `[toolkit A2]`.

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | Visual-regression lane (containerized baselines; masked dynamic regions; 12 templates × 2 themes); red-test with a deliberate diff | gate + red-test | — |
| O1 | Field instrument: enable Speed Insights (operator dashboard action) + wire the reading into the measurement records; CrUX trial with a free key (expect nulls, record) | field data | ⛩ operator (enable) |
| O2 | Unlighthouse scheduled sweep + budget config; WebForge-bar adoption for the per-route gates | sweep + budgets | — |
| O3 | Close `idea_visual_regression_gate` (resolved) + runbook updates + AAR | records + AAR | — |

## Inherited follow-ups — routed here by earlier missions, and owed

> **Read this section before scoping O0–O3.** These were routed to P4.4 by the P4.5a and P3.5 AARs and
> existed **only inside those AARs** until 2026-08-20. A follow-up recorded in the artifact that produced
> it and nowhere else is a follow-up nobody will act on — the P4.5a AAR named this exact failure
> (*"the split was recorded in three places and implemented in none"*), and it recurred. Each row below
> cites its source so the reasoning can be re-read rather than re-derived.

| # | Item | Source | Note |
|---|---|---|---|
| **F-a** | **The gate suite is blind to everything axe classes `best-practice`.** `gate-4` filters `.withTags(['wcag2a','wcag2aa'])`, so a real `empty-table-header` on `/community/proposals/aep-1/` **passed a fully green 512-assertion suite** and was caught only by the T0 sweep (`scripts/visual_capture.mjs --axe`, which uses axe's default ruleset). P3.5 added the routes to gate-4 — that locks WCAG AA on them and **does not close this class**; the scope limit is stated in-file at `gate-4-a11y.spec.ts` | P3.5 AAR | Decide deliberately: widening `gate-4` to best-practice across all ~23 pages will surface pre-existing violations, so it is a scoping decision, not a one-line change |
| **F-b** | **`gitleaks` false positive**: `how/campaigns/campaign_haussmann/artifacts/webforge_pattern_register.md:23` trips `generic-api-key` on the phrase *"DTCG **token** pipeline"*. Public since 2026-08-16, not a secret. The pre-push hook scans **outgoing changes only** so it stays clean, but a full-history `gitleaks detect` always reports `leaks found: 1` | P3.5 AAR | Allowlist it. A scanner that always cries once is a scanner whose output stops being read — which is the failure mode that matters before any host move (Git-Ops §7) |
| **F-c** | **Wire `artifacts/p3_5/derive_register_counts.py` into the suite.** It pins the claim register's looser, §8.6-comparable parse, but still has to be **run and pasted by hand**. A gate that fails when a published count disagrees with the derived one is the other half | P3.5 AAR (§9.5 opened it) | Closes the "undocumented derivation" item: two defensible parses of the same table differ by 2 rows |
| **F-d** | **`gate-26` cannot express "a retired claim must stay gone"** for a row that was never `FALSE` | P4.5a AAR | The R-125 class — an `unsupported → cut` row has no regression guard today |
| **F-e** | **⊳ D-E — mirror `lighthouse_profiles.json`** into `how/federation/webforge/`, or amend campaign convention 4. Already in this mission's frontmatter; repeated here so it is visible where the work is scoped | ⛩ DP6 | `find . -name lighthouse_profiles.json` → **0 hits** vault-wide, so every gate-19 bar is currently a transcription |

**⚠ One scope item in the frontmatter has changed meaning.** The **off-site CTA-target gate** was
rescoped in at DP6 to *discover* the R-122/R-123 defects. **P3.5 closed both** (2026-08-20, verified
live). The gate is therefore now a **regression guard**, not a discovery instrument — build it to fail if
`CONTRIBUTING.md` / `CODE_OF_CONDUCT.md` / `LICENSE` ever stop resolving in the repos the site's CTAs
point at. The reusable probe already exists: `artifacts/p3_5/deploy_probe_p3_5.mjs` ends with exactly
that check.

## Constraints

Baselines only ever regenerate deliberately (reviewed diff); no third-party SaaS beyond the Vercel platform already in use; budgets ratchet-only (WebForge law); scheduled jobs must fail loudly somewhere a human looks.

## Definition of done

A pixel regression, a header drift, a budget breach, or a field-CWV red each fail something visibly — without a human remembering to check.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + the toolkit table (plan §Inspection-toolkit) + `idea_visual_regression_gate.md`. Execute O0, O2; O1 needs the operator's dashboard action; then O3.

## Progress

*(at execution)*

## AAR (SO#5)

*(before completed)*
