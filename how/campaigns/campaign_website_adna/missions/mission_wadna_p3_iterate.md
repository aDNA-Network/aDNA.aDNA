---
mission_id: mission_wadna_p3_iterate
type: mission
title: "P3 — Iterative Improvement & Verification (Decadal Loops — the bulk)"
campaign_id: campaign_website_adna
phase: 3
mission_number: 3
slug: iterate
status: in_progress
created: 2026-06-17
updated: 2026-06-21
last_edited_by: agent_rosetta
owner: stanley
persona: rosetta             # resident executor; rotating cell; campaign planned by Berthier
mission_class: implementation
spec_completeness: active    # expanded to the 4-decade backbone at P2 close (Decision 4, 2026-06-19); D1 active
estimated_sessions: "6-15"
token_budget_estimated: "per-decadal (ADR-016 two-track). D1 (credibility-integrity, the longest decade): ~120-180 kT content-load — canonical-source refactor + 4 Criticals across 4 units + 4 gates + per-unit iii cycles + decadal AAR."
hard_dependency_satisfied: "yes — P2 closed 2026-06-19 (Decision 4): IMPROVEMENT-SPECS + TOOLING-PROMOTION + DECADAL-PLAN filed; per-unit done-definition fixed"
unblocks_missions: [mission_wadna_p4_signoff]
deliverables_count: 4        # one decadal AAR per decade (D1-D4)
tags: [mission, campaign_website_adna, phase3, implementation, iii, decadal]
---

# P3 — Iterative Improvement & Verification

> **ACTIVE (opened 2026-06-19, Decision 4).** The bulk of the campaign. Backbone = the **4-decade map** from [[DECADAL-PLAN.aDNA]]; **D1 (credibility-integrity) is active**, D2–D4 queued. Each decade runs `skill_iii_cycle` per unit and closes with `skill_decadal_aar` (5-persona × 6-dim, rotated personas) against the **reset** baseline ranker — its own human gate before the next decade opens.

## Decade backbone (from [[DECADAL-PLAN.aDNA]])

| Decade | Theme | Units | Specs | Gates | Status |
|--------|-------|-------|-------|-------|--------|
| **D1** | **Credibility-integrity** (longest; ships first) | `/` · `/learn/what-is-adna` · sitewide `<head>` · `/network` | SP-1 → C-1, C-2, C-3, C-4 (+ M-1/M-2/M-9) | G4, G5, G6, G7 | **CLOSED 2026-06-19 — GO approved + DEPLOYED to adna.network (hotfix; leak stopped). [[aar_decadal_d1_credibility_integrity]]** |
| D2 | Nav-serialization / docs structure (highest-leverage single fix) | all docs-layout pages | SP-2 → H-1, H-2 | G2 → blocking | **CLOSED 2026-06-19 — GO (operator GO'd at the decade-gate → D3 opened + closed); a11y panel G5/5; commit-only `faa7a73`. [[aar_decadal_d2_nav_serialization]]** |
| D3 | Agentic-readiness + community legibility | sitewide · `/vaults/graph` · `/community` · `/get-started` | SP-6 → H-3, M-3 · H-4 · H-8 | G10, G11 | **CLOSED 2026-06-19 — GO (panel G5·K5·E5); commit-only `5d3e41c`. [[aar_decadal_d3_agentic_community]]** — pending operator decade-gate before D4 |
| D4 | Visual craft · composition · responsive · perf | `/vaults/graph` · `/vaults/[slug]` · `/` diagram · header · concept-template | SP-3/4/5/7 → H-5/6/7/9/11 (+ M-4/5/7) | G1, G9 (G8 additional; **G3 deferred**) | **CLOSED 2026-06-21 — GO (panel C4·F5·G5·H4.5); C1–C6 commit-only (`9bb3ea8`…`c881dbd`); gates 281/281; H-11 no-SSR + M-7 no-rebuild (measure-first). [[aar_decadal_d4_visual_craft]]** — pending operator decade-gate before P3→P4 |

> **Event-triggered (not ordered):** verify-after-pt19 (H-10/SP-8 — when Production Tidy pings); keystone coordinated deploy (SP-9 + C-1 stage-2 — when all 3 keystone conditions are green). **Decision-4 dispositions:** C-1 = repoint-to-public-image; publisher = "aDNA Network"; commit-only through P3; pt19 = verify-after.

### D1 work order (DONE 2026-06-19 — GO, pending operator decade-gate)
SP-1 canonical source (root) → C-3 publisher → C-1 proof-link repoint+prose → C-2 real excerpts → C-4 data-driven diagram → wire G4/G5/G6/G7 → independent 3-persona panel (A4/D5 · E4 · J5; 0 open Crit/High on the 4 units) → D1 decadal AAR. **Result:** 4 Criticals cleared + SP-1 + gate baseline 140→159; build 163pp clean; 5/5 proof-links live-200; commit-only (`045d661`·`21789cb`·`6009003`·`4704af3`). AAR: [[aar_decadal_d1_credibility_integrity]]. **Next = operator decade-gate GO → open D2** (nav-serialization, SP-2 → H-1/H-2, gate G2). Spec detail: [[IMPROVEMENT-SPECS.aDNA]]; done-definition: [[DECADAL-PLAN.aDNA]] §Per-unit; gates: [[TOOLING-PROMOTION.aDNA]].

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
