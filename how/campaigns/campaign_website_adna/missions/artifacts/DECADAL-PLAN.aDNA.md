---
type: artifact
artifact_class: decadal_plan
campaign_id: campaign_website_adna
mission_id: mission_wadna_p2_design
title: "DECADAL-PLAN.aDNA — dependency-ordered P3 sequence (4 decades + verify-after-pt19 + keystone) and the per-unit done-definition"
created: 2026-06-19
updated: 2026-06-19
status: draft   # → operator review at Decision 4 (P2 → P3)
last_edited_by: agent_rosetta
tags: [artifact, decadal_plan, phase2, design, sequence, done_definition, iii_cycle]
---

# DECADAL-PLAN.aDNA — P3 sequence + done-definition (Objective 4)

> The order [[IMPROVEMENT-SPECS.aDNA]] ships in, and the bar each unit must clear. **Planning artifact.** P3 (`mission_wadna_p3_iterate`) expands each decade below into improvement cycles via the inherited engine: `skill_iii_cycle` (7-step: measure · orient · select · implement · re-measure · validate · record) per unit, `skill_decadal_aar` (5-persona × 6-dimension ranker) at each decade close. Persona rotation is mandatory — a unit is never re-verified by the persona that designed its fix (campaign CLAUDE.md §Cell). Gates: [[TOOLING-PROMOTION.aDNA]]. Baseline scores: [[FINDINGS.aDNA]] §scorecard.

## Sequencing principles (the ordering law)
1. **Systemic before local** — a systemic fix (SP-1…SP-7) lands before the per-finding specs that depend on it (SP-1 → C-1/C-2/C-3/C-4; SP-2 → H-1/H-2).
2. **Content-truth before visual craft** — credibility (Decade 1) and structure (Decade 2) before aesthetics (Decade 4). *Credibility is the gap to frontier-grade, not aesthetics* (FINDINGS systemic #1).
3. **Highest severity × reach first** — Critical (×all-pages) → High-systemic → High-local.
4. **Gate-with-fix** — each credibility/agentic gate is wired *in the same decade* as the fix it guards, so the class is regression-proof immediately.
5. **Defer what you don't own** — pt19 currency is event-triggered (verify-after), not ordered; deploy is gate-bound (keystone).

## Decade map

| Decade | Theme | Units | Specs | Gates wired | Decade exit (decadal AAR) |
|--------|-------|-------|-------|-------------|---------------------------|
| **D1** | **Credibility-integrity** (the headline) | `/` · `/learn/what-is-adna` · sitewide `<head>` · `/network` | SP-1 → C-1, C-2, C-3, C-4 (+ M-1/M-2/M-9) | G4, G5, G6, G7 | 0 open Criticals; all proof-links 200 unauth; canonical source single-sourced; ranker ≥ target on E·J·D for the 4 units |
| **D2** | **Nav-serialization / docs structure** | all docs-layout pages (`/learn/*`, `/community`, `/get-started`, …) | SP-2 → H-1, H-2 | G2 → blocking | axe heading-order + reading-order clean sitewide; `<a>`-before-`<h1>` ≤ (switcher+1); @audit 375px green |
| **D3** | **Agentic-readiness + community legibility** | sitewide · `/vaults/graph` · `/community` · `/get-started` | SP-6 → H-3, M-3 · H-4 · H-8 | G10, G11 | `llms.txt` live + fresh; graph JSON-LD valid; no-JS reachability locked; `/community` K ≥ 4 (shown:claimed ≥ parity) |
| **D4** | **Visual craft · composition · responsive · perf** | `/vaults/graph` · `/vaults/[slug]` (41) · `/` diagram · header | SP-3, SP-4, SP-5, SP-7 → H-5, H-6, H-7, H-9, H-11 (+ M-4/M-5/M-7) | G1 budget, G3 visual-regression, G8, G9 | CWV Good band on flagships; ≤2 accents on viz; density ≥ doctrine §6; axe both-modes clean |

> **D1 is the longest** (the 4 Criticals + the canonical-source refactor + 4 gates + the C-1 publish coordination). D2 is the **single highest-leverage** structural change (one DOM fix clears a class across every docs page). Total P3 ≈ **6–15 sessions** (`mission_wadna_p3_iterate` estimate); decades may overlap where dependencies allow, but D1 ships first.

## Event-triggered (not ordered)

### Verify-after-pt19 pass  ·  (H-10, SP-8, RECONCILIATION P1–P5)
**Trigger:** Production Tidy's pt19 regen lands and pings this campaign ([[coord_2026_06_18_wadna_pt19_dependency]]). **Action:** re-run `build_vaults_data.mjs`; verify axis-J vault names/count/edges on `/vaults` · `/network` · `/vaults/graph` · `/` registry; confirm C-4's data-driven diagram + the REGISTRY_SLUGS resolve to keeper-set names. **Constraint:** until then, **no `sync:vaults`, no `vaults.json` hand-edit** (program Standing Order #4). Preserve the honest-topology scaffolding.

### Keystone coordinated deploy  ·  (SP-9, C-1 stage-2)
**Trigger:** the program keystone ([[campaign_operation_adna]] DP2) — WEBSITE Criticals shipped + Hearthstone v8.0 base released + pt19 landed, **joined**. **Action:** one coordinated deploy clears `/commons` 404, live BP 92, MENU-1, the undeployed cycles (M-6/M-8); and **C-1 stage-2** upgrades the proof-links to point at Hearthstone's polished, published base (*fixed → exemplary*). **Constraint:** commit-only until the gate (campaign Standing Order #8); the resident agent may ship an operator-flagged hotfix before then, but the joined launch waits for all three keystone conditions.

## Per-unit done-definition (the bar — fixed at Decision 4)
A unit (page / component / image) is **done** only when **all** hold:
- **≥ 4 on every A–K axis** (no axis left at 1–3).
- **Zero open Critical or High** finding on the unit.
- **CWV in the Good band** — LCP < 2.5s · INP < 200ms · CLS < 0.1 (numbers, not composite).
- **axe clean in both light and dark modes.**
- **Manual a11y pass clean** — keyboard traversal, focus order, landmarks, a real screen-reader pass, contrast, 44px targets.
- **Standard Fidelity verified** (axis J) — every claim/filename/diagram matches the *current* standard and live-campaign outputs; no stale terms. *(For pt19-owned data: verified-after-pt19.)*
- **Demonstration over claim** (axis D/K) — the unit *shows* (real artifact/topology/attribution), it does not adjective.

> "Done" is re-measured and re-reviewed, never asserted (campaign Standing Order #5). Each unit's III cycle records the before/after ranker delta; each decade's decadal AAR runs the 5-persona ranker with **rotated** personas and the Skeptical Frontier Engineer's cold 3-second test.

## Risks
| Risk | Mitigation |
|------|------------|
| **C-1 publish dependency blocks Decade 1** (no public inspectable home yet) | Decision-4 flag; pursue the publish/visibility decision early (operator/Berthier); C-2 + the rest of D1 proceed in parallel (they don't need the public repo). Worst case, C-1 closes at the keystone (stage-2) and D1's other 3 Criticals ship now. |
| **pt19 slips** → C-4/H-10 can't fully close | C-4's *code* fix (drive from vaults.json) ships in D1; only the **name correctness** waits for pt19 (verify-after). No deadlock. |
| **Decade overlap creates merge churn** | One decade = one focused PR series; D1 (canonical source) lands before D2/D4 touch the same components. |
| **Gate false-positives stall the build** | Each gate ships with an allowlist + a documented escape hatch; gates added with their fix, never ahead of it. |
| **Persona rubber-stamping** | Mandatory rotation (Cell rule); the fix's designer never verifies it. |

## Hand-off to P3
P3 (`mission_wadna_p3_iterate`) opens on Decision 4 with this decade map as its mission backbone: each decade becomes a sub-arc (cycles + a decadal AAR), D1 first. The spec set ([[IMPROVEMENT-SPECS.aDNA]]) is the per-cycle work; the gates ([[TOOLING-PROMOTION.aDNA]]) are wired per the decade column above; this done-definition is the close criterion for every unit.
