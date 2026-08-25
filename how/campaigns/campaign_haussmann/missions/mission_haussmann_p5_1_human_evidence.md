---
plan_id: mission_haussmann_p5_1_human_evidence
type: plan
title: "P5.1 — The real evidence: human cold-reader panel, clean-VM TTFS, outsider contribution run"
campaign: campaign_haussmann
phase: P5
decade: 2
owner: stanley
status: queued   # ⛩ DP6 RATIFIED 2026-08-19 — activated, and better-equipped than when chartered. Two reinforcements from P2.6: the clinician cold-reader read "aDNA" as ANCIENT DNA (the standard abbreviation in her field) — a second synthetic signal that the DP2-waived human panel is worth running; and if O0b runs, this mission inherits an EXERCISED TTFS instrument instead of an unexercised one.
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
acceptance_criteria:            # ⛩ AMENDED BY THE FREEZE SWEEP 2026-08-24 (artifacts/p4_3/freeze_sweep.md, operator-authorized at P4.3's gate). ⛔⛔ HARD PRECONDITION ADDED — see below. Every criterion now records the BUILD the participant actually saw.
  - "⛔⛔ PRECONDITION [NEW · G-11] — P5.1 MUST NOT RUN until the deploy freeze has lifted AND the built-not-deployed backlog is deployed and live-verified (P4.1 + P4.2 + P4.4a today; + P4.3, P4.4b, P4.5b as they close). ⭐ THIS IS NOT A 'CANNOT BE MET' CONSTRAINT — IT IS THE OPPOSITE, AND THAT IS WHY IT IS DANGEROUS: run today, all three evidence criteria go GREEN and the capstone evidence is SILENTLY INVALID, because production is missing three closed missions of work. A panellist would score a site with no `empty_state` slot, no craft-floor markup fixes, no rebuilt /design-system. This is F-s's first casualty repeating — P4.1 O0's own record reads 'its first casualty was this session's own evidence: 30 green T0 captures, OF THE WRONG BUILD' — and that one was caught by accident, which human panel evidence affords no equivalent of."
  - "Human cold-reader re-panel ≥5 across the 3 profiles (senior engineer / domain expert / prospective contributor): verbatim transcripts, no coaching; ≥4/5 pass the 30-second criteria. RECORDS THE COMMIT THE PANELLIST SAW, read from /.well-known/adna-build.json — the self-describing-alias mechanism P4.4a's AC0 shipped for exactly this class of question."
  - "Clean-VM TTFS run by someone who did not build the system: stopwatch + screen recording + friction log; TTFS < 10 min. RECORDS THE COMMIT SERVING THE ALIAS AT RUN TIME."
  - "Outsider contribution run: a real first contribution attempted end-to-end without privileged access; every stage timed; the funnel's truth recorded. RECORDS THE COMMIT SERVING THE ALIAS AT RUN TIME."
  - "All three artifacts filed to evidence with consent records for participants — and each artifact carries its build stamp on its face, so a later reader can tell what was actually in front of the human without asking."
verification_method: "the artifacts themselves (transcripts/recording/log) — this mission IS verification"
human_gate: true
tags: [plan, haussmann, p5, panel, ttfs, contribution_run]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> The synthetic pre-screens were honest stand-ins; launch judgment runs on humans.

## Why this mission exists

Instrument Δ3 deferred Steps 5/6/7 to the campaign; the genesis scores carry "provisional" and "unawardable" flags wherever human evidence was missing (D1 anchor 5, D3, D9 first-contribution). This mission converts those flags into data — with the operator recruiting (agents cannot).

> **Inherited duty (DP2 deviation, 2026-08-16).** The P0.1 O4 human panel was **operator-waived**; ADR-048 was
> ratified on the synthetic pre-screen alone (deviation record: ADR-048 §Status). This mission now also
> **retro-validates the shipped positioning** against real humans — `artifacts/p0_1/panel_kit.md` is the stimulus,
> run against the *live* hero. A failing retro-verdict reopens the positioning question at DP9, not silently.

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
