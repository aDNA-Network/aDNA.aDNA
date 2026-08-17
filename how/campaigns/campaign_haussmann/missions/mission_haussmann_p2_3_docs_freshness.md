---
plan_id: mission_haussmann_p2_3_docs_freshness
type: plan
title: "P2.3 — Docs freshness & integrity: dated pages, paginated spec, zero broken links, a live changelog"
campaign: campaign_haussmann
phase: P2
decade: 1
owner: stanley
status: queued
mission_class: build
executor_tier: sonnet
token_budget_estimated: "~180–280 kT across 2 sessions: link fixes + link gate + spec pagination + freshness layer + changelog/RSS revival + glossary previews (ADR-016)"
token_budget_actual:
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: ["B3 #1 (29 broken links)", "N4 (changelog/RSS dead since April)", "F6 (spec 124K px mobile)", "F11 (glossary degenerate previews)", "D4 scoring (freshness layer absent; no edit-this-page)", "toolkit verdicts (lychee adopt)"]
vitruvius_dimensions: [D4, D12, D2]
decade_theme: navigation
webforge_patterns: [P7]
patterns_to_author: []
depends_on: []
blocks: []
acceptance_criteria:
  - "Zero internal 404s, enforced: all 29 broken links fixed + an internal link gate in CI (blocking) + scheduled external check (non-blocking)"
  - "/reference/specification paginated into navigable sections (prev/next; anchor-stable; redirects for old fragments where feasible)"
  - "Per-page freshness: last-updated visible on doc pages; 'edit this page' path on every doc page"
  - "Changelog revived with a real cadence (entries for the shipped waves; RSS carries them) — dated, reverse-chron, its own URL"
  - "Glossary preview derivation fixed (no 'AGENTS.md — AGENTS.' degenerates)"
verification_method: "link gate green (red-tested) + T0 spec captures + RSS validity + D4 anchor re-check"
human_gate: false
tags: [plan, haussmann, p2, docs, freshness, links]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> "Undated pages" is the instrument's named documentation failure — and the changelog contradicts the
> living site.

## Why this mission exists

29 internal links 404 (stale pre-migration scheme, concentrated in the reference corpus — the most-read class) `[D B3]`; the changelog's single April entry + stale RSS read as project abandonment to the exact contributor audience the site courts `[D-syn]`; the spec is one 124K-px mobile page `[D F6]`; no page carries a date or an edit path `[D D4 scoring]`.

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | Fix the 29 targets (redirect or re-link per P2.1's map); add the internal link gate (lychee or linkinator, blocking; red-tested) + scheduled external pass | links green + gate | — |
| O1 | Spec pagination: section splits + prev/next + stable anchors (+ fragment redirects) | paginated spec | — |
| O2 | Freshness layer: last-updated (from content collection/git data) + edit-this-page on doc templates | layer live | — |
| O3 | Changelog/RSS revival: backfill entries for shipped work (true dates only — the register governs); wire a cadence rule into the campaign's deploy runbook | changelog live | — |
| O4 | Glossary preview fix; T0 re-captures; AAR | evidence + AAR | — |

## Constraints

Backfilled changelog entries must be register-true (no retroactive embellishment); same-diff for route-coupled specs; pagination preserves deep-link equity (redirects).

## Definition of done

D4's anchor-4 blockers (freshness, edit-path, link rot) are cleared; the reference corpus is navigable on a phone; the project visibly breathes.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + `evidence/sweep/sweep_summary.md` (#5) + P2.1's redirect map. Execute O0–O4. Constraint: changelog backfill uses only register-verifiable dates/facts.

## Progress

*(at execution)*

## AAR (SO#5)

*(before completed)*
