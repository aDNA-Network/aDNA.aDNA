---
plan_id: mission_haussmann_p2_4_registry_redesign
type: plan
title: "P2.4 — Registry redesign: admission standard, lifecycle tiers, facets — honest at 74, ready at 10×"
campaign: campaign_haussmann
phase: P2
decade: 1
owner: stanley
status: queued
mission_class: design_excellence
executor_tier: fable
token_budget_estimated: "~250–350 kT across 2 sessions: ADR-052 completion + registry-surface spike + build + fixtures (ADR-016)"
token_budget_actual:
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: ["H4 confirmed", "anti-pattern 7.4 (quantity ≠ health; admission standard needed)", "P1.3 outputs (clean projection)", "dossier registry patterns (HF facets/lifecycle badges; crates dual-clock; PEPs machine index)", "webforge P8 (marketplace archetype — reference tenant 'aDNA Registry')"]
vitruvius_dimensions: [D2, D7]
decade_theme: navigation
webforge_patterns: [P8]
patterns_to_author: ["static Tier-A registry variant of the marketplace patterns (owed back)"]
depends_on: [mission_haussmann_p1_3_registry_truth]
blocks: []
acceptance_criteria:
  - "ADR-052 completed at proposed: admission standard (what earns a public listing) + lifecycle tier model (visible distinction: mature / active / genesis / pending — honest labels, not inflation) + the DP4 confidential ruling folded in"
  - "Registry index: facets (class/status/tier), sort, honest dual-clock signals where derivable; scales-at-10× check (the browse experience at 740 synthetic rows)"
  - "Per-card quality floor: no card ships below the honest-absent minimum; lifecycle badge on every card + detail page"
  - "Design spike + ranker ≥4.0 before build; '74 vaults' framing everywhere reconciled to the tiered truth (with '15 connected' contextualized)"
verification_method: "ranker + 10× synthetic-scale render test + T0 captures + claim-register rows for all new copy"
human_gate: true
tags: [plan, haussmann, p2, registry, tiers]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> "Quantity of entries is not evidence of network health; it is evidence of a low bar for entry" —
> the registry becomes an honest instrument with a visible quality model.

## Why this mission exists

74 entries in mixed lifecycle states render undifferentiated (genesis 56 / pending 10 / active 7) `[D H4]`; the browse surface was designed for a dozen. P1.3 made the *copy* honest; this mission makes the *model* honest: an admission standard, visible tiers, facets that survive 10×, and the dossier's proven registry patterns (HF lifecycle badges, crates.io dual-clock, PEPs' machine index groundwork for P3.2).

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | ADR-052 completion: admission standard + tier model + tier-assignment derivation (from existing status/card data — honest, no hand-tiering) | ADR-052 proposed | — |
| O1 | Spike: registry index + card + detail comps (marketplace-archetype patterns, static variant); 10×-scale render test; ranker | comps + ranker ≥4.0 | ⛩ operator pick |
| O2 | Build: facets/sort/tiers/badges + card floor + framing reconciliation ('74' contextualized) | registry live in tree | — |
| O3 | Fixtures same-diff (snapshot-derived, KW-8) + captures + register rows; stage the owed-back pattern note to Vitruvius; AAR | evidence + AAR | — |

## Constraints

Tier assignment derives from data — never narrated (KW-14); honest-absent floor from P1.3 holds; pt19 (data via Hestia); the tier *vocabulary* must survive a hostile read (no "mature" that isn't).

## Definition of done

A stranger browsing 74 entries understands in one glance which are load-bearing and which are seeds — and the surface would still work at 740.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + ADR-052 seed + `evidence/dossier/haussmann_reference_dossier_draft.md` (registry patterns). Execute O0, spike at O1, halt for the pick, then O2–O3.

## Progress

*(at execution)*

## AAR (SO#5)

*(before completed)*
