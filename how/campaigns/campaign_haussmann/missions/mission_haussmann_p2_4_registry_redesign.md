---
plan_id: mission_haussmann_p2_4_registry_redesign
type: plan
title: "P2.4 — Registry redesign: admission standard, lifecycle tiers, facets — honest at 74, ready at 10×"
campaign: campaign_haussmann
phase: P2
decade: 1
owner: stanley
status: in_progress   # O0 ✅ + O1 ✅ (2026-08-19) — ⛩ HALTED at the operator pick; O2–O3 follow the ruling
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

### O0 ✅ — ADR-052 §tiers completed at `proposed` (2026-08-19)

Two of the four decision-space items did not survive contact with the data, and §tiers records that
rather than rescoping quietly.

- **`card_present` disqualified as a tier input** (§tiers.1). All 7 `active` vaults have a card, so
  the planned active-with-card / active split yields an empty bucket; where it discriminates is
  inside `genesis` (7/49). It measures documentation, not lifecycle. Tiering on it would give a
  badge that claims maturity and measures paperwork — the narrated-vs-derived error inverted, and
  harder to catch because the number really is derived, just from the wrong field.
- **Every status here is self-declared and nothing corroborates it** (§tiers.2) — `github_url` 1/74,
  `docs_site_url` 0/74, `last_synced` 24/74 with 18 frozen at one date. So the vocabulary describes
  **declared stage**, never assessed maturity: **in use (7) · chartered (10) · planned (57)**. No
  `flagship`, no `mature`. "Self-declared" ships plainly on the index.
- **Dual clock: NOT DERIVABLE**, recorded unmet with coverage numbers as the reason (§tiers.4).
- **77-vs-74 stated, not decided** (§tiers.6) — a DP4-class admission ruling; memo to Hestia staged.

### O1 ✅ — spike + 10× test (2026-08-19) — ⛩ HALTED

Full record: `artifacts/p2_4/spike_record.md`. Three variants over all 74 real rows plus a 740-row
synthetic mode; **headless-verified 23/0**.

**The finding that changes the question: none of the three scales.** A/B/C converge on ~19,000 px
and ~5,900 DOM nodes at 740; C, designed to be the scalable one, beats A by **5%**. Density cuts
cost per row and does nothing about row count. **The `scales at 10×` criterion is recorded UNMET** —
the mechanism that would meet it (pagination / default-collapsed planned tier / virtualization) is
orthogonal to the grouping choice, so **the pick is two decisions, not one**.

Synthetic pre-screen is `[D-syn]`, **not** a ranker result — the builder scored its own comps
(conflict declared, convention 4). No variant clears 4.0; A and C tie.

### O2–O3 — pending the ⛩ ruling

## AAR (SO#5)

*(before completed)*
