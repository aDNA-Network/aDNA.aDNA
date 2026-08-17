---
plan_id: mission_haussmann_p0_5_editorial_gate
type: plan
title: "P0.5 — The editorial gate: no internal artifact reaches public copy unreviewed, and no claim outruns its evidence"
campaign: campaign_haussmann
phase: P0
decade: 1
owner: stanley
status: queued
mission_class: build
executor_tier: opus
token_budget_estimated: "~150–250 kT across 1–2 sessions: gate-16 extension design + claim-register-as-fixture wiring + tense/leak lint + red-tests (ADR-016)"
token_budget_actual:
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: ["claims/claim_register.md (8 FALSE, 19 unsupported, H13 annex 58/74)", "gate-16 public-meta sanitizer (proto)", "gate-20 claim-trace (proto)", "dev-comments-in-HTML finding"]
vitruvius_dimensions: [D6, D7]
decade_theme: credibility
webforge_patterns: [P2]
patterns_to_author: []
depends_on: []
blocks: [mission_haussmann_p1_1_claim_purge, mission_haussmann_p1_3_registry_truth]
acceptance_criteria:
  - "The claim register is a living CI fixture: every register row with class FALSE fails the suite; new high-signal claims require a register row (extends gate-20)"
  - "A leak lint covers the H13 classes (codenames, campaign/mission ids, truncated ledes, raw enums, operator-machine identifiers) across rendered output INCLUDING the registry pages + llms surfaces (extends gate-16 beyond meta)"
  - "An aspirational-tense checklist exists for review use (mechanical lint only where reliable; no false-positive theater)"
  - "Dev comments stripped from shipped HTML (or an explicit keep-decision recorded)"
  - "Every new check red-tested (a green that cannot go red is not evidence)"
verification_method: "red-tests per check + full suite green on current tree EXCEPT the known-FALSE rows (which must fail until P1.1 fixes them — prove the gate catches today's defects)"
human_gate: false
tags: [plan, haussmann, p0, editorial_gate, claims]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> The structural fix behind H13: public surfaces are generated from internal artifacts without a gate.

## Why this mission exists

78% of registry pages leak internal operational language; 8 FALSE claims shipped; the compliance page carries a false control claim `[D claims]`. The proto-machinery exists (gate-16 sanitizes meta only; gate-20 traces a hand-picked claim set) — this mission generalizes both into an **editorial gate** so P1's purge cannot regress. Order matters: the gate lands *before* the purge so the purge is verified by it.

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | Design note: which checks are mechanical (lint-able) vs review-checklist; inventory the leak classes from the H13 annex | design note | — |
| O1 | Claim-register fixture: machine-readable register (from `claims_raw.json`) + gate asserting zero-FALSE + coverage rule for new claims | gate + fixture | — |
| O2 | Leak lint over rendered `dist/` (+ llms endpoints): codename/id/enum/truncation/machine-identifier classes; allowlist discipline w/ dated entries | gate | — |
| O3 | Dev-comment strip (Astro compress/config or post-build) + tense checklist doc | change + doc | — |
| O4 | Red-test everything; run against current tree — the FALSE rows must FAIL (that's the proof); mark them xfail-until-P1.1 with expiry | red-test evidence + AAR | — |

## Constraints

Same-diff law (route-coupled fixtures); no literal-pinned live data (derive from build snapshot); the gate's failure messages must name the register row (actionability); do not fix the copy here (P1.1's lane) — only detect.

## Definition of done

The suite catches today's 8 FALSE claims and the H13 leak classes on its own, red-tests prove each check can fail, and P1.1 has a machine referee.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + `evidence/claims/claim_register.md` + `site/tests/gates/gate-16*.ts`/`gate-20*.ts`. Execute O0–O4. Constraint: detection only — no copy fixes; every check red-tested.

## Progress

*(at execution)*

## AAR (SO#5)

*(before completed)*
