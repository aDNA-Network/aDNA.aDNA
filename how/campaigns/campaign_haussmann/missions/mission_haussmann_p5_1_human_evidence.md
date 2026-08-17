---
plan_id: mission_haussmann_p5_1_human_evidence
type: plan
title: "P5.1 — The real evidence: human cold-reader panel, clean-VM TTFS, outsider contribution run"
campaign: campaign_haussmann
phase: P5
decade: 2
owner: stanley
status: queued-provisional
mission_class: verification
executor_tier: opus
token_budget_estimated: "~120–200 kT (+ operator recruitment time): panel kits + session facilitation records + TTFS re-run + contribution-run log (ADR-016)"
token_budget_actual:
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: ["instrument §6 Steps 5/6/7 (the human instruments)", "instrument Δ3 (synthetic pre-screens were disclosed stand-ins)", "P0.1 panel kit (reuse)", "P2.5 TTFS instrument (reuse)"]
vitruvius_dimensions: [D1, D3, D9]
decade_theme: credibility
webforge_patterns: []
patterns_to_author: []
depends_on: [mission_haussmann_p4_5_voice_rewrite, mission_haussmann_p4_4_ci_hardening]
blocks: [mission_haussmann_p5_2_rescore_capstone]
acceptance_criteria:
  - "Human cold-reader re-panel ≥5 across the 3 profiles (senior engineer / domain expert / prospective contributor): verbatim transcripts, no coaching; ≥4/5 pass the 30-second criteria"
  - "Clean-VM TTFS run by someone who did not build the system: stopwatch + screen recording + friction log; TTFS < 10 min"
  - "Outsider contribution run: a real first contribution attempted end-to-end without privileged access; every stage timed; the funnel's truth recorded"
  - "All three artifacts filed to evidence with consent records for participants"
verification_method: "the artifacts themselves (transcripts/recording/log) — this mission IS verification"
human_gate: true
tags: [plan, haussmann, p5, panel, ttfs, contribution_run]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> The synthetic pre-screens were honest stand-ins; launch judgment runs on humans.

## Why this mission exists

Instrument Δ3 deferred Steps 5/6/7 to the campaign; the genesis scores carry "provisional" and "unawardable" flags wherever human evidence was missing (D1 anchor 5, D3, D9 first-contribution). This mission converts those flags into data — with the operator recruiting (agents cannot).

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | Panel kit finalization (reuse P0.1's) + recruitment brief for the operator (profiles, consent, script) | kit | ⛩ operator (recruit) |
| O1 | Run the panel (operator-facilitated or async-kit); transcribe verbatim | transcripts | — |
| O2 | Clean-VM TTFS run (operator or recruited runner); friction log | recording + log | ⛩ operator |
| O3 | Contribution run (recruited outsider or operator-as-outsider discipline); AAR | log + AAR | — |

## Constraints

No coaching, no intervening, no defending (Step 5's law); participant consent recorded; failures are findings, not embarrassments — they route to fixes before P5.2, honestly logged.

## Definition of done

Three human-evidence artifacts exist that the P5.2 re-score can cite with `[D]` instead of `[D-syn]`.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + the P0.1 panel kit + P2.5 TTFS instrument. Execute O0 and hand the recruitment brief to the operator; facilitate O1–O3 as scheduled.

## Progress

*(at execution)*

## AAR (SO#5)

*(before completed)*
