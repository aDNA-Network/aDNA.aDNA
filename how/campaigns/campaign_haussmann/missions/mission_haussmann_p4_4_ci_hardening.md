---
plan_id: mission_haussmann_p4_4_ci_hardening
type: plan
title: "P4.4 — CI hardening: visual regression, live-header watch, field p75, the whole-site sweep"
campaign: campaign_haussmann
phase: P4
decade: 2
owner: stanley
status: queued-provisional
mission_class: build
executor_tier: sonnet
token_budget_estimated: "~180–280 kT across 1–2 sessions: toHaveScreenshot baselines (container) + reg reports + Unlighthouse periodic + field-p75 instrument + budget wiring (ADR-016)"
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
