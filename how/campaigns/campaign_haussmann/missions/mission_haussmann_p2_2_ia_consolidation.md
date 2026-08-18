---
plan_id: mission_haussmann_p2_2_ia_consolidation
type: plan
title: "P2.2 — IA consolidation: one audience architecture instead of three, nav within doctrine"
campaign: campaign_haussmann
phase: P2
decade: 1
owner: stanley
status: active       # 2026-08-18 — O0+O1 done (ADR-049 options, comps, ranker A 4.03 / C 4.17, both >=4.0); HALTED at the DP5 operator pick. O2/O3 = session 2.
mission_class: design_excellence
executor_tier: fable
token_budget_estimated: "~250–350 kT across 2 sessions: ADR-049 options + design spike (comps) + ranker + implementation + redirects (ADR-016)"
token_budget_actual:
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: ["H2 reframed (3 parallel audience branches)", "H7 expanded (14 persona pages)", "inventory §7 (duplicate titles; 3-URL personas)", "Berthier nav-ceiling + CTA items", "anti-pattern 7.7 (segments-after-positioning-only)", "ADR-048 (from P0.1)"]
vitruvius_dimensions: [D2, D1]
decade_theme: navigation
webforge_patterns: [P7]
patterns_to_author: []
depends_on: [mission_haussmann_p0_1_positioning, mission_haussmann_p2_1_url_normalization]
blocks: []
acceptance_criteria:
  - "ADR-049 at proposed: one audience architecture (consolidated set with single URLs; segment pages retained only as post-positioning campaign landers per 7.7, or retired with redirects)"
  - "Primary nav ≤7 items, no load-bearing 'More' overflow; hero CTA at 1+1 (front_page_doctrine)"
  - "Zero duplicate titles; the ~5 personas each have exactly one canonical URL (others 301)"
  - "Design spike: ≥2 IA comps compared at ranker ≥4.0 before build"
  - "≤2-click reachability preserved (10/10 baseline held); inventory re-crawl clean"
verification_method: "re-crawl (B1 script re-run) + ranker + gates same-diff + T0 nav captures"
human_gate: true
tags: [plan, haussmann, p2, ia, navigation]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> Positioning (ADR-048) is settled before this opens — the IA now expresses one proposition instead of
> hedging across three.

## Why this mission exists

The same ~5 audiences are addressed by up to 3 URLs each across `/researchers`-style, `/adopters/adopter-*`, and `/use-cases/*` branches — 14 persona-template pages with 4 duplicate title pairs `[D inventory §7]` — the audience-sprawl anti-pattern as structure. Nav sits at its 8-item ceiling with a dual CTA over doctrine `[R Berthier]`. Consolidation before craft (sequencing law), after positioning (7.7's own rule: segment pages are legitimate only *after* the proposition is narrowed).

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | Audience-architecture options under ADR-048 (consolidate-to-use-cases / consolidate-to-adopters / retire-into-positioned-sections), each with URL+redirect plan | ADR-049 options | — |
| O1 | Design spike: 2–3 nav+home-section comps (interactive HTML, Storyweave pattern); ranker pass | comps + ranker ≥4.0 | ⛩ operator pick |
| O2 | Implement: nav ≤7, CTA 1+1, branch consolidation + 301s, duplicate-title elimination | edits | — |
| O3 | Re-crawl + same-diff gate updates + T0 captures; AAR | evidence + AAR | — |

## Constraints

Everything 301s (P2.1's law); content is *re-homed*, not deleted (SO-6 archive-never-delete applies to prose too — fold, don't drop); the docs-archetype nav patterns (P7) inform, never fork.

## Definition of done

A first-time visitor, a returning implementer, and a crawler each navigate one coherent taxonomy; the persona set has one home each; nav fits doctrine.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + ADR-048 + ADR-049 options + `evidence/inventory/inventory_summary.md` §7. Execute O0, spike at O1, halt for the operator pick, then O2–O3.

## Progress

**Session 1 of 2 — 2026-08-18** (`session_stanley_20260818_164055_haussmann_p2_1_deploy_p2_2_open`).
O0 + O1 complete; **halted at ⛩ DP5** as the mission's own gate requires. No site source changed.

| Obj | State | Evidence |
|---|---|---|
| O0 | ✅ | `what/decisions/adr_049_ia_model_audience_disposition.md` — three options authored with exact redirect counts derived from the route inventory `[D]`; **B cut as dominated**, with the reasoning recorded rather than the option silently dropped |
| O1 | ✅ | `artifacts/p2_2/ia_comps.html` (Current / A / C, dark+light, headless-verified) + `artifacts/p2_2/ranker_record.md` |
| O2 | ⛔ blocked on DP5 | — |
| O3 | ⛔ blocked on DP5 | — |

**Ranker: A = 4.03 · C = 4.17 · both ≥4.0 (gate met).** The 0.14 spread does **not** separate them —
one persona moving one cell by one point — and the record says so rather than declaring a winner.
The two are near-perfect mirrors: A scores Relevance 4.4 / Actionability 3.4; C scores Actionability
4.8 / Relevance 3.4.

**Declared conflict**: the agent that authored the comps also scored them, against campaign
convention 4 (*the builder never self-certifies*) and P1.2's sharper form of it. The score is
therefore logged as a `[D-syn]` **pre-screen**, not a verdict, and an independent re-rank was offered
to the operator at the halt.

**Findings carried to O2** (found while mapping, not fixed mid-spike):

1. `site/tests/gates/gate-7-interaction.spec.ts:68` asserts against `/adopters/solo-developer` —
   **a route that has never existed** (the real one is `/adopters/adopter-solo-developer`).
   `page.goto` does not throw on a 404, so the assertion has been **passing vacuously** for its
   whole life.
2. Two built routes are nav-orphaned: `/learn/concepts/dual-audience/` (13 concept docs, 12 listed)
   and `/learn/tutorials/exchange-adoption-path/` (10 guides, 9 listed).
3. `question-test` renders at three routes (tutorial · pattern · glossary); `dual-audience` has three
   near-namesakes. Consolidation candidates for the ADR to rule on.
4. The audience link set exists in **four** places and the personas are nav-listed **twice** — any
   option that does not collapse these merely moves the duplication.

**Charter corrected**: the P2 row read `nav ≤8` against this mission's `≤7` and ADR-049's own
decision space `≤7`. Operator ruled ≤7; the row now matches.

## AAR (SO#5)

*(before completed)*
