---
mission_id: mission_wadna_p3_iterate
type: mission
title: "P3 — Iterative Improvement & Verification (Decadal Loops — the bulk)"
campaign_id: campaign_website_adna
phase: 3
mission_number: 3
slug: iterate
status: planned
created: 2026-06-17
updated: 2026-06-17
last_edited_by: agent_stanley
owner: stanley
persona: rosetta             # resident executor; rotating cell; campaign planned by Berthier
mission_class: implementation
spec_completeness: stub      # expands into N decadal sub-missions at P2 close
estimated_sessions: "6-15"
token_budget_estimated: "TBD at P2 close (per-decadal budget declared per ADR-016 two-track)"
hard_dependency_satisfied: "no — depends on P2 (improvement specs + decadal plan + done-definition)"
unblocks_missions: [mission_wadna_p4_signoff]
deliverables_count: 0        # set per decadal at P2 close
tags: [mission, campaign_website_adna, phase3, implementation, iii, decadal]
---

# P3 — Iterative Improvement & Verification

> **Stub spec.** The bulk of the campaign. Expands into N decadal sub-missions at the P2 → P3 gate (count fixed by the Phase 2 session plan). Each decadal closes with `skill_decadal_aar` against a **reset** baseline ranker.

## Goal
Run the improvement loop on assigned units until the whole site clears the bar. Inherit the engine; do not rebuild it. Pursue **structural and frontier moves** (axes D/E/J + agentic-browsing), not another lap of D1–D10 incremental polish — Rosetta's ranker already maxed at 5.00 on that surface.

## The Loop (per `skill_iii_cycle`, run per unit)
```
VIEW       → render the unit; capture current state (Lighthouse + axe + screenshot matrix)
INTROSPECT → ≥3 personas score against the rubric dossiers; synthesize
PLAN       → for any axis < 4 or any open Critical/High, write/refine the improvement spec
IMPROVE    → execute the change inside the aDNA context graph (commit-only)
VERIFY     → re-run the automated floor + re-run the persona pass that originally failed
GATE       → meets per-unit done? advance. Else → loop again on this unit.
```

## Rules of the Loop
- **Re-audit after every change.** Greening the scanner is not fixing the problem — verify intent, not just the metric.
- **Fresh eyes each cycle.** Rotate which personas review on re-verification so a unit isn't rubber-stamped by the persona that designed its fix.
- **Benchmark check at gate.** Before a flagship page (landing, `/network`, `/learn/what-is-adna`, `/get-started`, `/vaults`, `/community`) passes, place it side-by-side with its frontier reference; confirm it no longer loses on any named dimension.
- **Reconcile continuously.** If another campaign ships a standard change mid-flight, the Standard Archivist re-runs `RECONCILIATION.aDNA.md` and reopens any unit whose facts went stale.
- **Cycle-tracker discipline at decadal close** (not cycle level) — Rosetta M35 fix.

## Sequence
**Systemic fixes → flagship pages → deep pages.** Decadal 1 ships the systemic-fix package (tokens/spacing/accent/type + banned-vocab + stale-terminology sweep + tooling-promotion). Subsequent decadals take flagship then deep units, highest severity × reach first. **Carried backlog seeds** (RSS, on-site search, newsletter, print/PDF, full link-graph crawl, harness display split, D16 docs-III, reduced-motion tests) slot in by severity × reach.

## Per-Decadal Exit Gate — human
- [ ] All cycles in the decadal closed; per-unit done-definition met for every unit touched.
- [ ] `skill_decadal_aar` ranker (reset baseline): all dims ≥4.0; no Lighthouse regression from baseline.
- [ ] Decadal AAR filed in `missions/artifacts/`.
- [ ] Flagship units passed benchmark side-by-side.

## Phase Exit (P3 → P4)
Every unit ≥4 on every A–K axis; zero open Critical/High site-wide; CWV in the Good band; all decadal AARs GO (Decision 5).

## Campaign Context
- **Inputs:** P2 improvement specs + decadal plan + done-definition; P0 baseline + `SITEMAP.aDNA.md`; P1 rubric dossiers + personas.
- **Outputs → P4:** improved units with filled scorecards; decadal AARs; metric deltas.

## AAR
*5-line AAR per decadal + at phase close.* — *(pending)*
