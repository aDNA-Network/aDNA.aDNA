---
plan_id: mission_haussmann_p1_3_registry_truth
type: plan
title: "P1.3 — Registry truth: fix the projection at the generator; the shop window stops contradicting the product"
campaign: campaign_haussmann
phase: P1
decade: 1
owner: stanley
status: queued
mission_class: build
executor_tier: opus
token_budget_estimated: "~200–300 kT across 2 sessions: projection-code fixes (leak classes, honest-absent, persona nulls, title bug) + graph data currency + Hestia data-ask memo + confidential-vault ruling prep (ADR-016)"
token_budget_actual:
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: ["H13 (58/74 leak; root cause tagline/card gap)", "H4", "claims #6/#8 rows", "visual_findings F4/F7/F8/F10/F15 (graph counts; leaks; blanks; malformed Astro.aDNA title)", "Hestia 08-06 memo (0/27 taglines; 46/74 no card)", "N8 (confidential-adjacent vaults public)"]
vitruvius_dimensions: [D6, D7, D2]
decade_theme: credibility
webforge_patterns: [P8]
patterns_to_author: []
depends_on: [mission_haussmann_p0_5_editorial_gate]
blocks: [mission_haussmann_p2_4_registry_redesign]
acceptance_criteria:
  - "Projection code renders zero H13-class leaks (editorial-gate leak lint green over all 74 pages): truncation fixed (no mid-parenthesis ledes), raw enums mapped to public labels (tbd_at_p0 → honest 'category to be decided at genesis' treatment), machine identifiers suppressed"
  - "Missing data renders honest-absent affordances (WebForge data-honesty law) — never blank cards, never fabricated copy"
  - "Persona nulls: public treatment decided + implemented (clears FALSE #6/#7 at the data layer); malformed 'Astro — — —' title fixed"
  - "/vaults/graph data currency: renders all 74; the 74/68/59/53 count collisions eliminated (single derived source); LCP measured against the class bar"
  - "Data-side asks (taglines/cards backfill; Videos repo URL) staged to Hestia — honor pt19, no local data edits"
  - "⛩ DP4: the confidential-adjacent-vault listing (aiLP-Dataroom, CakeHealth, PercySleep) gets an operator projection ruling, implemented (ADR-052 §admission seed)"
verification_method: "editorial-gate leak lint over 74 pages + graph re-capture + count-derivation test + gate-20/21 same-diff updates"
human_gate: true
tags: [plan, haussmann, p1, registry, projection]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> One generator fix clears 58 leaking pages and two FALSE claims; one operator ruling settles what
> belongs in public at all.

## Why this mission exists

The registry is 78 of 202 URLs and its copy is, by default, unedited internal prose `[D claims H13 annex]`: truncated ledes render on the homepage itself; `tbd_at_p0` renders raw; the Home card exposes the operator's machine; blank cards (zeta) ship. The graph page renders 68 of 74 with four conflicting counts `[D F4]`. Root cause is structural — the projection falls back to inventory `note` fields because 0/27 cards carry `tagline` and ~46/74 vaults lack cards `[R Hestia]` — so the fix is at `scripts/build_vaults_data.mjs` + the page templates, with the *data* backfill staged to Hestia (pt19).

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | Map every leak class to its code locus (projection vs template vs data); write the fix design | design note | — |
| O1 | Projection/template fixes: lede derivation (no truncation-by-slice), enum→public-label map, identifier suppression, honest-absent affordances, persona-null treatment, title fix | code + leak lint green | — |
| O2 | Graph currency: single derived count source; 74 rendered; regenerate `vaults_graph.svg` via `sync:graph`; same-diff fixture updates | graph fixed | — |
| O3 | ⛩ DP4 prep + ruling: options for the confidential-adjacent listings (remove / listed-with-minimal-card / listed-with-disclosure); implement the ruling | ADR-052 §admission seed | ⛩ operator |
| O4 | Stage the Hestia data-ask memo (taglines, cards, Videos URL — joins the staged thread); verify + AAR | memo + AAR | — |

## Constraints

Honor pt19 absolutely (code yes, `vaults.json` data no — regen via the owner); same-diff law for every count-bearing fixture; honest-absent, never fabricate; the leak lint (P0.5) is the referee.

## Definition of done

All 74 pages pass the leak lint with honest-absent styling where data is missing; the graph tells one true number; the operator has ruled on the confidential listings; the data debt has a named owner.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + `evidence/claims/claim_register.md` H13 annex + `scripts/build_vaults_data.mjs`. Execute O0–O2, halt at O3 for the DP4 ruling, then O4. Constraint: no edits to vaults.json data — code + staged asks only.

## Progress

*(at execution)*

## AAR (SO#5)

*(before completed)*
