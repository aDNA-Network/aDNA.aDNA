---
plan_id: mission_haussmann_p4_2_craft_floor
type: plan
title: "P4.2 — Craft-floor conformance: the 57 locks declared, the markup debt paid, the diagram rules published"
campaign: campaign_haussmann
phase: P4
decade: 2
owner: stanley
status: queued   # ⛩ DP6 RATIFIED 2026-08-19 — activated. RESCOPED UP: absorbs F19 (the thin-hub class is now FOUR instances — /reference/specification, h2=0 bodyLen 1,504, created by P2.3's own spec split) and F20 (the failing JetBrains Mono Variable face — the format('woff2-variations') hypothesis is [I] and UNTESTED; this mission TESTS it rather than assuming it). Still the only P4 mission with human_gate: false.
mission_class: build
executor_tier: sonnet
token_budget_estimated: "~230–340 kT across 2 sessions: 57 locks + gap fixes + ~964 markup errors in 5 systemic classes + html-validate in CI + design-system regeneration + diagram construction rules, PLUS F19 (thin hubs, now 4 instances — bring to budget or merge) and F20 (test the woff2-variations hypothesis, do not assume it). Raised from ~200–300 kT at ⛩ DP6 2026-08-19 (ADR-016/SO#11)"
token_budget_actual:
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: ["webforge P1/P2 (57 locks; coverage census mechanics; graduation offered)", "B3 #5 (964 html-validate errors, 5 classes)", "F13 (thin hubs)", "design-system-page-as-latent-bug-detector (memory)", "directive P4 (20-component sample verification; diagram rules published)"]
vitruvius_dimensions: [D5, D11]
decade_theme: craft
webforge_patterns: [P1, P2]
patterns_to_author: []
depends_on: [mission_haussmann_p4_1_token_pipeline]
blocks: []
acceptance_criteria:
  - "A lock-coverage declaration exists for the site (all 57 locks × the site surface: enforced-by/na-reason/gap — the WebForge census mechanic), with every `gap` dispositioned"
  - "The 5 html-validate error classes fixed at their component loci (~964 errors → 0, or documented per-class exceptions); html-validate joins CI"
  - "Design-system page regenerated + verified against the P4.1 tokens (20-component sample conformance check per the directive)"
  - "Diagram/illustration construction rules published (so contributors can extend the language) — the D5 anchor-5 item"
  - "Thin hubs (F13) brought to the section budget or honestly merged"
verification_method: "lock-coverage checker + html-validate CI green + T0 design-system captures + 20-component sample audit"
human_gate: false
tags: [plan, haussmann, p4, craft_floor, design_system]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> The floor the fleet already enforces, declared for this site — with the anti-self-certification census
> mechanic that makes the declaration checkable.

## Why this mission exists

The site's 371 gates overlap the craft floor informally; nothing declares coverage, so nothing catches the gaps (the WebForge KW-12 lesson) `[D pattern register]`. 964 markup errors in 5 systemic classes ship on every page `[D B3]`. The graduation was offered; P0.3 ruled on it; this mission executes the conformance.

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | Author the site's lock-coverage declaration (57 rows; map existing gates as `by:` anchors; real `gap` rows honest) | coverage file + checker run | — |
| O1 | Fix the 5 html-validate classes at their component sources; add to CI | clean validate | — |
| O2 | Gap fixes from O0's dispositions; design-system page refresh + 20-component sample | fixes + sample audit | — |
| O3 | Diagram construction rules doc (from the existing diagram set + dossier distill/OWID patterns); thin-hub treatment; AAR | rules + AAR | — |

## Constraints

Anchors must be grep-verifiable (fabricated cells FAIL — the WebForge mechanic); axe/gates stay green throughout; no new visual vocabulary beyond ADR-053.

## Definition of done

Coverage is declared and checkable, the markup debt is paid, and a contributor can draw a conformant diagram from the published rules.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + `webforge_pattern_register.md` P1/P2 + `evidence/sweep/sweep_summary.md` #6. Execute O0–O3.

## Progress

*(at execution)*

## AAR (SO#5)

*(before completed)*
