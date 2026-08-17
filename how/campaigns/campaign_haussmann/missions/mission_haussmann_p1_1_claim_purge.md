---
plan_id: mission_haussmann_p1_1_claim_purge
type: plan
title: "P1.1 — Claim purge: zero FALSE, zero above-ceiling — ship the channels or stop claiming them"
campaign: campaign_haussmann
phase: P1
decade: 1
owner: stanley
status: queued
mission_class: build
executor_tier: opus   # copy judgment against the register; edits themselves are small
token_budget_estimated: "~150–250 kT across 2 sessions: 8 FALSE fixes + 19 unsupported adjudications + channel decisions (Discussions/templates) + editorial-gate green (ADR-016)"
token_budget_actual:
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: ["claims/claim_register.md §5.2 (the 8 FALSE verbatim)", "claims tense audit", "H9 sharpened", "coldreads contributor (dead funnel)", "ADR-048 (positioning language, from P0.1)"]
vitruvius_dimensions: [D6, D7, D8, D9]
decade_theme: credibility
webforge_patterns: []
patterns_to_author: []
depends_on: [mission_haussmann_p0_1_positioning, mission_haussmann_p0_5_editorial_gate]
blocks: []
acceptance_criteria:
  - "Editorial gate green with zero xfail rows: all 8 FALSE claims resolved (copy harmonized down OR the claimed thing shipped)"
  - "GitHub Discussions enabled + seeded, AND .github/ issue templates shipped (question path routed away from bug tracker) — or /community rewritten to name only what exists (operator choice per row)"
  - "/compliance signing claim resolved (start signing or state the truth)"
  - "The 19 unsupported claims each adjudicated: evidence linked, claim lowered, or moved to a labeled roadmap surface (anti-pattern 7.5)"
  - "Dead Videos.aDNA GitHub link fixed at the data source (with Hestia if inventory-side — honor pt19)"
verification_method: "editorial gate (P0.5) full green + live re-probe of every channel URL + hostile-read spot-check"
human_gate: true
tags: [plan, haussmann, p1, claims, credibility]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> The S1 core: eight sentences a hostile reader disproves in one click.

## Why this mission exists

The register's FALSE set `[D claims §5.2]`: "the vaults are all public" (73/74 aren't) · "the **open** coordination protocol" (private, counsel-gated) · Discussions 404 · nonexistent issue templates · "every commit is signed" (none are) · "every vault has its own persona" ×2 · the registry's only outbound proof-link 404s. Each is a copy-or-ship decision, not a redesign. The direction is fixed by campaign law: **claims move down to verifiability — unless the operator elects to ship the claimed thing**, which for the contribution channels is likely the better move (the contributor cold-read's 3/10 becomes real infrastructure).

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | Per-row disposition memo: fix-copy vs ship-the-thing for all 8 FALSE + the 19 unsupported (with drafted copy per ADR-048 language) | disposition memo | ⛩ operator (channel rows) |
| O1 | Execute copy fixes sitewide (incl. the protocol-language harmonization to the embargo-safe pair) | edits + gate green | — |
| O2 | Ship elected channels: enable Discussions + seed categories; add `.github/` issue templates (bug/feature) with questions routed to Discussions | live channels | ⛩ operator (outward) |
| O3 | Fix the dead proof-link at source; re-probe all channel/proof URLs live | probes [D] | — |
| O4 | Hostile-read check: fresh adversarial agent hunts for remaining overstatement; AAR | report + AAR | — |

## Constraints

Never round a claim up; the counsel embargo governs all protocol language; persona-quantifier rows (#6/#7) are FIXED IN DATA by P1.3 — here only the quantifier copy softens if P1.3 hasn't landed; GitHub actions (enabling Discussions, pushing templates) are outward acts → operator GO.

## Definition of done

The editorial gate is green with no exceptions; every advertised channel resolves live; a hostile reader finds no falsifiable sentence.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + `evidence/claims/claim_register.md`. Execute O0 and halt for the operator's per-row channel elections; then O1–O4. Halt condition: any fix requires claiming something new the register can't support.

## Progress

*(at execution)*

## AAR (SO#5)

*(before completed)*
