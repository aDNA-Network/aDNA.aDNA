---
plan_id: mission_champollion_m2_3_glossary_concepts_currency
type: plan
title: "M2.3 — Glossary/concepts/comparisons currency vs v2.4"
owner: stanley
status: completed
campaign_id: campaign_champollion
campaign_phase: 2
campaign_mission_number: 3
mission_class: implementation
executor_tier: opus
token_budget_estimated: "35 kT"
token_budget_actual: "~26 kT (opus subagent ~17 self-reported output + fable orchestration verify/fix share ~9; −26%)"
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
tags: [plan, campaign, champollion, p2, glossary, concepts, comparisons, currency, m2_3]
---

# Mission M2.3 — Glossary / concepts / comparisons currency

**Campaign**: [[../campaign_champollion|campaign_champollion]] · **Executor: opus** (content judgment + dual-audience) · **Ring 2** (compressible — converts to accepted-carry at the **G3 ring cut** if the launch window tightens). Consumes [[mission_champollion_m2_1_standard_currency_audit|M2.1]]'s findings; runs after the M2.2 recommendation is drafted so terms track the proposed cut.

## Objective

Sweep the extended-ontology content — `what/glossary/`, `what/concepts/`, `what/comparisons/` — for currency against **v2.4** and the P1/P2 changes: stale definitions, missing terms, and positioning that lags the standard. Every edited file re-passes the **dual-audience test** (SO-7) and cross-links (SO-10).

## Work

1. Enumerate `what/glossary/` + `what/concepts/` + `what/comparisons/` entries (count live).
2. Cross-check each against **v2.4** + the ADR corpus (via `adr_index.md`) + M2.1's `standard_currency_audit.md`.
3. Fix stale definitions / positioning; add missing terms surfaced by P1/P2 — at minimum **ratification-record discipline**, **model-tiered execution**, **`adr_index`** (derived-index pattern), and any term the M2.2 cut introduces.
4. Per edited file: SO-7 dual-audience re-pass (`skill_dual_audience_review`), SO-10 cross-links (≥2 wikilinks), SO-8 (if a mechanism improved in P1/P2, its explainer improves too).
5. Log findings + fixes inline in the SITREP (no separate ledger needed at this size).

## Acceptance criteria

- [x] Every glossary/concept/comparison entry checked against v2.4 (43 swept: 25+13+5) — 31 CURRENT · 12 STALE-fixed · **0 CONTRADICTS** (nothing escalated as an M2.1/M2.2 finding).
- [x] The P1/P2 terms present and dual-audience-legible — 4 new entries: `glossary_ratification_record` · `glossary_model_tiered_execution` · `glossary_derived_index` · `glossary_standard_registers` (the F-CHM-204 fix).
- [x] Dual-audience + wikilinks verified on each edited file (main-session spot-review incl. full read of `standard_registers`; ≥2 resolving wikilinks each; new entries reachable from `glossary_index` + ≥1 existing entry).
- [x] `adna_validate` FULL PASS; explicit-path commit.

> **DONE 2026-07-02** (`session_stanley_20260702T140223Z_champollion_p2_execution`, fable-orchestrated · opus subagent at-tier). Verify pass also fixed 4 outside-dir live count sites the sweep flagged (10→11 extensions ×3 · 32→41 templates; MANIFEST:148 Phase-0 row KEPT as historical) + filed F-CHM-207 (workshop pre-ADR-006 clone instructions → M4.3). AAR: [[../../../how/missions/artifacts/campaign_champollion_mission_m2_3_aar|m2_3 AAR]].

## Guardrails

Content edits only — **no standard or ADR changes** (a definition that *contradicts* the standard, vs merely lags it, is an M2.1/M2.2 finding, not a fix here) · Ring-2 discipline (if G3 compresses the window, halt and convert to accepted-carry — do not sprawl) · no `.adna/` writes · no push.

## Verification surface

`python3.13 what/lattices/tools/adna_validate.py .`; `skill_dual_audience_review` on a sample of edited files; wikilink-resolution spot-check.

## Escalation triggers

- A definition that **contradicts** (not just lags) the standard → escalate as an M2.1/M2.2 finding; do not resolve unilaterally.
- New term whose definition is genuinely contested → escalate (don't invent canonical wording).
- Budget > 50 kT → halt and report (Ring-2 is compressible by design).
