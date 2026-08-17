---
plan_id: mission_haussmann_p1_4_mobile_integrity
type: plan
title: "P1.4 — Mobile integrity: the S1 rendering defects on the first-contact surfaces"
campaign: campaign_haussmann
phase: P1
decade: 1
owner: stanley
status: queued
mission_class: build
executor_tier: sonnet   # CSS-scoped fixes with a clear evidence trail; judgment already done
token_budget_estimated: "~100–160 kT in 1 session: docs-grid fix + /network reflow + home-diagram mobile treatment + full T0 re-capture (ADR-016)"
token_budget_actual:
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: ["visual_findings F1 (S1 docs column), F2 (/network clipping — D11 gate condition), F3 (diagram mobile collapse), F12 (code-block copy button), F14", "scoring reconciliation D11 divergence"]
vitruvius_dimensions: [D5, D11, D3]
decade_theme: craft
webforge_patterns: [P1]
patterns_to_author: []
depends_on: []
blocks: [mission_haussmann_p4_3_a11y_manual]
acceptance_criteria:
  - "Docs template renders full-width readable text at 320/375 (F1 dead-column eliminated) across the whole docs class, both themes"
  - "/network mobile: no content clipped; the git clone block wraps/scrolls and is copyable (F2 — clears the D11 gate condition)"
  - "Home + /network 'context democracy' diagram has a deliberate <768px treatment (legible small variant, reflow, or honest text fallback — not a faint asterisk)"
  - "Code-block copy control positioned correctly; file-tree comments don't clip (F12)"
  - "T0 re-capture of the fixed surfaces × 6 viewports × 2 themes shows the defects gone; gate-9 + axe stay green"
verification_method: "before/after T0 captures (evidence-linked) + axe both themes + a new reflow assertion in the gate suite (prove F1/F2 can't return)"
human_gate: false
tags: [plan, haussmann, p1, mobile, responsive]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> The defects only eyes caught: phones get a broken first impression that every automated gate misses.

## Why this mission exists

At ≤375px the entire docs class renders body text in a ~185px column beside a dead reserved sidebar column (S1, F1) — including `/get-started`, the conversion page `[D captures]`. `/network` clips the run-a-node steps and the clone command mid-word (F2 — a WCAG 1.4.10 reflow candidate and the D11 binary-gate condition). The home diagram degrades to an unlabeled mark at 320 (F3 — the mobile-specific truth of the Berthier "invisible diagram" item). None of this trips gate-9 (no horizontal overflow) or axe — which is why a **reflow assertion** joins the suite.

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | Reproduce all three locally (preview + T0); identify the grid/layout loci (`DocumentationLayout.astro` sidebar column; /network step styles; diagram component) | repro note | — |
| O1 | Fix F1 (docs grid at mobile), F2 (/network reflow + copyable block), F12 (copy-button placement) | CSS/template edits | — |
| O2 | F3: deliberate mobile diagram treatment (design the smallest honest variant; no new visual language — P4's lane) | edit | — |
| O3 | Add a min-content-width reflow assertion to the gate suite (red-tested); full T0 re-capture; AAR | gate + captures + AAR | — |

## Constraints

CSS/layout-scoped — no IA changes (P2.2), no new visual vocabulary (P4.1); same-diff law if any selector-coupled audit rows are touched; both themes verified; red-test the new gate.

## Definition of done

The three findings are gone in captures, a gate now guards the class, and the mobile first impression matches the desktop one.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + `evidence/captures_curated/visual_findings.md` (F1/F2/F3/F12) and view the cited PNGs. Execute O0–O3. Constraint: layout fixes only; re-capture everything you touch.

## Progress

*(at execution)*

## AAR (SO#5)

*(before completed)*
