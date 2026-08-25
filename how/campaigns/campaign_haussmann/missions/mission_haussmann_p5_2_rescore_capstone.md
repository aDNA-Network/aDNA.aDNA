---
plan_id: mission_haussmann_p5_2_rescore_capstone
type: plan
title: "P5.2 — Full re-score, capstone ranker, launch checklist — the campaign closes on evidence"
campaign: campaign_haussmann
phase: P5
decade: 2
owner: stanley
status: queued   # ⛩ DP6 RATIFIED 2026-08-19 — activated. RESCOPED UP with two HARD preconditions: (1) the instrument v1.1 anchor fix MUST land BEFORE this mission — at P2.6 both scorers re-read D2's conjunctive anchor the opposite way from the baseline, worth ~0.8 points of instrument drift on ONE dimension; unfixed it would operate across all twelve here. (2) It refreshes EVERY evidence packet or states which it did not — P2.6's pack was out-run by both scorers (9 and 5 divergences, every one favouring the site). The full 12-dimension composite is publishable only once D3 has a number, which needs O0b.
mission_class: verification
executor_tier: fable
token_budget_estimated: "~280–430 kT across 2 sessions: full VITRUVIUS re-score (2 agents + human evidence + operator arbiter) + 16-persona capstone ranker + launch checklist/rollback/monitoring + campaign AAR + close cascade, PLUS the v1.1 instrument fix landing first and a full refresh of every evidence packet (sweep/ + inventory/ + hypotheses_resolved.md, none of which P2.6's O0 refreshed) + re-authoring the lost production crawler scripts/crawl_haussmann_b1.mjs. Raised from ~250–400 kT at ⛩ DP6 2026-08-19 (ADR-016/SO#11)"
token_budget_actual:
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: ["baseline 51.6 (scoring/reconciliation.md)", "P5.1 human evidence", "skill_decadal_aar (16-persona ranker; capstone ≥4.95 precedent)", "instrument §10 re-review cadence", "ADR-057 measurement regime"]
vitruvius_dimensions: [D1, D2, D3, D4, D5, D6, D7, D8, D9, D10, D11, D12]
decade_theme: credibility
webforge_patterns: []
patterns_to_author: []
depends_on: [mission_haussmann_p5_1_human_evidence]
blocks: []
acceptance_criteria:
  - "Full re-score: two fresh agent scorers + the human evidence + operator arbitration; per-dimension improvement vs 51.6 demonstrated; both binary gates green WITH field data; every S1/S2 in the finding register closed + verified"
  - "16-persona capstone ranker ≥ 4.95 (skill_decadal_aar)"
  - "Launch checklist executed (claims green · channels live · redirects verified · monitoring on · rollback documented + drilled once)"
  - "Standing cadence installed per ADR-057 (instrument re-run 2 quarters; claim register + links monthly; TTFS per quickstart change)"
  - "⛩ DP9 launch GO; campaign Completion Summary + AAR; context graduation (skill_context_graduation) before status: completed"
verification_method: "the re-score + ranker records + checklist evidence; operator DP9 ratification"
human_gate: true
tags: [plan, haussmann, p5, rescore, capstone, launch]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> The end state, measured: nobody — engineer, clinician, program officer, or agent — can catch the site
> overstating itself.

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | Evidence refresh (full T0 + machine-eye + claim re-verify + field CWV) | evidence pack v2 | — |
| O1 | Two-scorer re-score + reconciliation + operator arbitration; finding-register closure audit | final scorecard | — |
| O2 | Capstone ranker (16 personas) | ranker record | — |
| O3 | Launch checklist + rollback drill + monitoring verification | checklist evidence | ⛩ operator |
| O4 | DP9 GO · Completion Summary · campaign AAR · context graduation · STATE close-out · splash (skill_campaign_sitrep_splash) | close records | ⛩ DP9 |

## Constraints

No gate skipped for schedule; a miss on the capstone is a finding + a scoped fix loop, not a waiver; the close cascade (AAR → graduation → STATE) is mandatory before `completed` (SO-5/6).

## Definition of done

The campaign's own numbers prove its thesis, the operator has signed DP9, and the vault record closes clean.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + `evidence/scoring/reconciliation.md` + P5.1's artifacts. Execute O0–O2, halt at O3/O4 gates.

## Progress

*(at execution)*

## AAR (SO#5)

*(before completed)*
