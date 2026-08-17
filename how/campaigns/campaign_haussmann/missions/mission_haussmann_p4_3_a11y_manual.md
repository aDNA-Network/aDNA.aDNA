---
plan_id: mission_haussmann_p4_3_a11y_manual
type: plan
title: "P4.3 — Accessibility beyond automation: manual passes, the reflow adjudication, a published statement"
campaign: campaign_haussmann
phase: P4
decade: 2
owner: stanley
status: queued-provisional
mission_class: verification
executor_tier: opus
token_budget_estimated: "~150–250 kT in 1 session (+ operator VoiceOver time): virtual-screen-reader lane + keyboard traversal + F2 adjudication + WCAG 2.2 delta + statement page (ADR-016)"
token_budget_actual:
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: ["scoring D11 divergence + gate condition (F2 reflow candidate)", "toolkit A13 (@guidepup/virtual-screen-reader adopt; VoiceOver local trial)", "instrument D11 checks 2/5/7/11/13/14 (the manual third)", "graph keyboard-twin partial-equivalence finding (machine_eye 14)"]
vitruvius_dimensions: [D11]
decade_theme: craft
webforge_patterns: []
patterns_to_author: []
depends_on: [mission_haussmann_p1_4_mobile_integrity, mission_haussmann_p2_6_midscore]
blocks: []
acceptance_criteria:
  - "Headless AT-traversal assertions (@guidepup/virtual-screen-reader) on home, get-started, one reference page, the registry, the graph — in CI"
  - "Keyboard-only traversal pass of every primary flow recorded (focus visible, no traps, logical order); operator VoiceOver spot-session on the same five surfaces"
  - "F2 formally adjudicated closed (1.4.10) + zoom 200%/400% checks + target-size (2.2) delta swept"
  - "Graph keyboard-twin upgraded to genuine equivalence (edges enumerated, not just the roster) or its limitation stated on the page"
  - "Accessibility statement published (known limitations + contact path) — the D11 anchor-5 item"
verification_method: "CI AT-assertions green (red-tested) + traversal records + statement live + D11 re-score with the binary gate clean"
human_gate: true
tags: [plan, haussmann, p4, a11y, wcag]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> Automation catches a third of real issues; for a public-good property serving patient communities the
> manual third is a mission obligation, not a checkbox.

## Why this mission exists

The a11y record is automation-only (axe 0×32, LH 100×10) with one evidenced manual candidate (F2) and a partially-equivalent graph twin `[D scoring/machine_eye]` — exactly the D11 anchor-2 state. The virtual-screen-reader lane makes AT semantics headlessly assertable; the operator's VoiceOver session covers what only a human can hear.

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | Wire virtual-screen-reader assertions (5 surfaces; traversal order + phrasing) into CI; red-test | CI lane | — |
| O1 | Keyboard traversal protocol + full pass; zoom + target-size sweep; F2 closure evidence | records | — |
| O2 | Operator VoiceOver session (guided script, ~30 min) | session notes | ⛩ operator |
| O3 | Graph-twin equivalence upgrade (or honest limitation note); statement page; AAR | pages + AAR | — |

## Constraints

Assertions test semantics, not pixel positions (stability); the statement's "known limitations" must be true (register rows); nothing regresses the axe-0 record.

## Definition of done

The manual third is evidenced, the gate condition is closed, and the site says what it knows about its own accessibility.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + `evidence/scoring/reconciliation.md` (D11) + toolkit notes. Execute O0–O1, schedule O2 with the operator, then O3.

## Progress

*(at execution)*

## AAR (SO#5)

*(before completed)*
