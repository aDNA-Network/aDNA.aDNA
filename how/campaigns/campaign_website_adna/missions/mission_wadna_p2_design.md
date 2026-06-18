---
mission_id: mission_wadna_p2_design
type: mission
title: "P2 — Improvement Design: Specs + Systemic-Fix Package + Decadal Plan + Done-Definition"
campaign_id: campaign_website_adna
phase: 2
mission_number: 2
slug: design
status: planned
created: 2026-06-17
updated: 2026-06-17
last_edited_by: agent_stanley
owner: stanley
persona: rosetta             # resident executor; campaign planned by Berthier
mission_class: planning      # plan only; ZERO site changes
spec_completeness: stub      # finalized at P1 close
estimated_sessions: "1"
token_budget_estimated: "TBD at P1 close (~100-180 kT)"
hard_dependency_satisfied: "no — depends on P1 (FINDINGS + systemic-pattern list)"
unblocks_missions: [mission_wadna_p3_iterate]
deliverables_count: 4
tags: [mission, campaign_website_adna, phase2, planning, design]
---

# P2 — Improvement Design

> **Stub spec.** Plan the work; decide before building. No changes yet.

## Goal
Convert `FINDINGS.aDNA.md` into an executable plan: an improvement spec for every Critical/High finding, the systemic-fix package that lifts every page at once, and the dependency-ordered decadal session plan with a crisp per-unit done-definition.

## Objectives
1. **Improvement specs (Critical/High).** For each: the specific change, the axis it moves, the target score, and the verification that proves it. Decisive stroke, not decorative flourish.
2. **Systemic-fix package.** Resolve systemic findings first as single coordinated changes — design-token / spacing-scale / accent / typography corrections, the banned-vocabulary pass, the stale-terminology sweep (from `RECONCILIATION.aDNA.md`). These lift every page at once.
3. **Tooling-promotion spec (additive).** Lighthouse archive → automated budget/gate (LCP/INP/CLS thresholds + Agentic Browsing); `@audit` sweep → regression gate in `test:gates`; semantic visual-regression baseline per page per viewport. **Plus five build gates (per `RESEARCH-IMPROVEMENT-PLAN.aDNA.md` §4.4):** (a) **single-source lint** — fail the build on a hardcoded count/version/repo-URL outside its canonical constant (`standard.ts`, `vaults.json`, a `REPO` const); (b) **public-meta sanitizer** — fail on internal codenames/phase jargon in any public `<meta>`/og/JSON-LD (§9.1 `publicNote()`); (c) **link-graph + host/canonical check** — 404/301 on credibility surfaces + served-host == declared-canonical; (d) **no-JS reachability** — flagship content (esp. `/vaults/graph` topology) renders without JS; (e) **`llms.txt` presence + freshness**.
4. **Sequence + done-definition.** Dependency-ordered decadal plan (systemic before local; content-truth before visual craft; highest severity × reach first). Define **per-unit done**: ≥4 on every A–K axis · zero open Critical/High · CWV in the Good band · axe clean both modes · manual a11y pass clean · Standard Fidelity verified.

## Exit Gate (P2 → P3) — human
- [ ] Improvement spec for every Critical/High finding.
- [ ] Systemic-fix package designed as coordinated changes.
- [ ] Tooling-promotion spec (Lighthouse gate · `@audit` regression gate · visual-regression · single-source lint · public-meta sanitizer · link-graph/canonical · no-JS reachability · `llms.txt`).
- [ ] Dependency-ordered decadal session plan; per-unit done-definition fixed.
- [ ] Operator approves specs + plan + done-definition + deploy posture (Decision 4).

## Campaign Context
- **Inputs:** P1 `FINDINGS.aDNA.md` + systemic-pattern list; P0 baseline + benchmark set.
- **Outputs → P3:** the spec set + decadal plan; P3 expands into N decadal sub-missions.

## AAR
*5-line AAR mandatory at close.* — *(pending)*
