---
plan_id: mission_haussmann_p0_1_positioning
type: plan
title: "P0.1 — Positioning resolution: one sentence a stranger can repeat, tested by humans"
campaign: campaign_haussmann
phase: P0
decade: 1
owner: stanley
status: queued
mission_class: design_excellence
executor_tier: fable   # positioning is the campaign's highest-judgment call; panel logistics are operator-shared
token_budget_estimated: "~250–400 kT across 2–3 sessions: corpus read + 3–5 positioning candidates + hero-copy drafts + synthetic pre-screen iterations + panel kit + ADR-048 authoring (ADR-016)"
token_budget_actual:
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: [H1, H9, H10, H11, N10, "evidence/coldreads/ (3 SYNTHETIC transcripts)", "evidence/claims/claim_register.md #2 (FALSE 'open protocol')", "evidence/dossier/haussmann_reference_dossier_draft.md (hero-mode distribution)", "what/design/front_page_doctrine.md"]
vitruvius_dimensions: [D1, D6]
decade_theme: credibility
webforge_patterns: []
patterns_to_author: []
depends_on: []
blocks: [mission_haussmann_p1_1_claim_purge, mission_haussmann_p1_2_state_of_network, mission_haussmann_p2_2_ia_consolidation, mission_haussmann_p2_5_onboarding_paths, mission_haussmann_p4_5_voice_rewrite]
acceptance_criteria:
  - "≥4 of 5 human cold readers state what it is, who it is for, and one thing it is not, in ≤30s, unaided (directive Phase-0 gate)"
  - "Hero definition contains a category noun a stranger already knows; ≤1 new term before the first concrete example (anti-pattern 7.6)"
  - "Lattice Protocol references harmonized to embargo-safe language sitewide ('opening progressively' family), with a post-embargo variant staged"
  - "Name-collision (ancient DNA) + Compliance-label collision each have a written disposition"
  - "ADR-048 authored at proposed with the ratification block"
verification_method: "human panel (operator-recruited) + synthetic pre-screen (disclosed) + reading_level.mjs on new copy + operator ratification at DP2"
human_gate: true
tags: [plan, haussmann, p0, positioning]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> This mission rewrites the core proposition and hero; every downstream copy/IA mission inherits from it.

## Why this mission exists

All three synthetic cold-readers failed or barely passed the 30-second test `[D-syn coldreads/]`: the engineer got the product from the code block, not the prose; the clinician briefly parsed "aDNA" as *ancient DNA* and found the "Compliance" label meaning the wrong compliance `[D]`; the contributor read a manifesto site. The hero introduces ≥3 proprietary abstractions before a concrete example (H1) and calls the Lattice Protocol "open" — a FALSE claim under the counsel embargo (H9, claims #2). FKGL 12–17.9 on all key pages (H10). Positioning resolves **before** IA and craft (sequencing law).

## Where we are (verify on disk at execution)

Hero copy in `site/src/pages/index.astro` + `site/src/data/home.ts`; the honest phrasing "opening progressively" already exists on the same page; `what/design/front_page_doctrine.md` §1 (Above-the-Fold Law) + §10 (install-forward) govern; the dossier's hero-mode distribution offers 4 legal modes incl. the new "definition-as-hero" (W3C/EIPs pattern).

## Scope

**In**: positioning statement; hero + above-fold copy direction; audience naming; the "what it is NOT" line; embargo-safe protocol language (both variants); name/label collision dispositions; voice-guide seed; ADR-048. **Out**: implementing the IA changes (P2.2), the full voice rewrite (P4.5), any site/ commit beyond the ratified hero copy.

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | Read: `evidence/dossier/haussmann_reference_dossier_draft.md` + `evidence/coldreads/` (3 files) + `what/design/front_page_doctrine.md` + `what/decisions/adr_032_brand_register_pivot.md`; verify current hero on disk (`site/src/pages/index.astro`, `site/src/data/home.ts`) | orientation note → `artifacts/p0_1/orientation.md` | — |
| O1 | 3–5 positioning candidates (each: one-sentence definition w/ known category noun · audience · NOT-line · hero sketch) incl. ≥1 definition-as-hero mode | candidates memo | — |
| O2 | Synthetic pre-screen: fresh-context cold-reads per candidate; iterate | pre-screen results (SYNTHETIC-labeled) | — |
| O3 | Operator picks direction; draft final hero copy + embargo-safe protocol lines (+ post-embargo variant) + collision dispositions | draft set | ⛩ operator |
| O4 | **Human cold-reader panel ≥5** (3 profiles; operator recruits; verbatim transcripts; do not coach) | panel transcripts + verdict | ⛩ operator |
| O5 | ADR-048 finalized at `proposed`; panel evidence attached; hand baton to P1 | ADR-048 + AAR | ⛩ DP2 |

## Constraints

Honesty law (claims move down); anti-pattern 7.6 (≤1 new term/paragraph, example within 2 sentences); the counsel embargo is hard until D-8 rules; preserve the honesty strata + hero art direction (visual voice is P4.1's lane, not this one).

## Definition of done

ADR-048 at `proposed` carries: the ratified positioning sentence, audience, NOT-line, hero copy, embargo language pair, collision dispositions, and the panel evidence meeting the ≥4/5 gate — and every blocked mission can quote one sentence as its north star.

## Session opening prompt

> Open `how/campaigns/campaign_haussmann/missions/mission_haussmann_p0_1_positioning.md` and its CLAUDE.md. Execute O0→O2 autonomously; halt at O3 with the candidates memo + pre-screen results for the operator pick. Do not modify site/ until O3 is ratified. Halt condition: any candidate requires claiming something the claim register marks unsupported.

## Progress

*(at execution)*

## AAR (SO#5)

*(before completed)*
