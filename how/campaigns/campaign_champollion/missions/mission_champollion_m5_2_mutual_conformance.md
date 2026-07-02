---
plan_id: mission_champollion_m5_2_mutual_conformance
type: plan
title: "M5.2 — Mutual conformance: LP vault vs the v2.5 standard ↔ this vault's lattice/module/dataset teaching vs the LP spec @ codepin 47935b6"
owner: stanley
status: completed
campaign_id: campaign_champollion
campaign_phase: 5
campaign_mission_number: 2
mission_class: verification
executor_tier: opus
token_budget_estimated: "45 kT (charter) — G2 class-split calibration applies: verification budgets the judgment surface net of orchestrator pre-resolution (prior class rows ran −44…−64% before calibration; M3.3's calibrated row landed +3%). Verify-before-dispatch may trim this estimate; do not inflate work to fill it."
token_budget_actual: "~87 kT (opus builder ~78 self-reported + fable bookends ~9) vs 45 — +93%, 1.93× (INSIDE the ADR-016 2× band by a hair; no retrospective triggered). First verification-class OVER-run after the calibration held twice — the judgment surface stayed lean (characterize-by-class, no 149-line enumeration) but the FOREIGN-corpus read surface dominated (LP validator census + LP ledger spec). Same cost-center as M5.1: cross-graph missions price the evidence/read surface. Builder passed its ~60 halt line without halting (flagged honestly at completion; subagent token introspection is weak mid-flight). → G5-D3 calibration note."
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
tags: [plan, campaign, champollion, p5, lp_seam, conformance, codepin, verification, m5_2]
---

# Mission M5.2 — Mutual conformance, both directions

**Campaign**: [[../campaign_champollion|campaign_champollion]] · **Executor: opus (build) with fable bookends** · **Ring 1** · **Mode B**.

## Objective

Run the bilateral conformance check the seam owes both ways: **(a)** the LP vault (`LatticeProtocol.aDNA`) against **our v2.5 standard** (their close-out ask — a conformance walk per `adna_standard.md` §5.5 scope + §7.2 per-class frontmatter profile); **(b)** this vault's **lattice/module/dataset teaching** (object-standards context, `what/lattices/` tooling + schema + examples, related glossary/concept entries) against the **LP spec @ codepin `47935b6`**. Findings become ledger rows; our-side defects get fixed; their-side findings get staged as a memo — never written into their tree.

## Work

1. **Verify-before-dispatch** (fable): confirm the codepin — `47935b6` is the charter-pinned LP spec commit; check whether LP's spec has moved since (note drift honestly; the check runs **at the pin** unless fable rules a re-pin; chasing HEAD without a ruling is out).
2. **Direction (a) — LP vault vs v2.5** (read-only in their tree): structure walk (§5 triad + §5.5 exclusions incl. nested-instance trees per ADR-044) · frontmatter per-class profile (§7.2) · governance-file coherence (§4) · decision-record ratification discipline (§7.7 — MUST-forward applies only to post-cut records). Output: per-dimension findings table with file-path evidence, severity, and **whose defect it is** (theirs vs a standard ambiguity — the E1/ADR-046 lesson: sometimes the standard is the bug).
3. **Direction (b) — our teaching vs LP spec @ pin** (read-only at the pin): every normative claim our lattice/module/dataset teaching makes about the protocol (YAML schema fields · FAIR block · registry readiness checks · compose/publish semantics per the Registry Awareness section) checked against the pinned spec. Semantic census discipline (F-CHM-212): check what the claim MEANS, vary the method from the source's own.
4. **Dispositions**: our-side defects → fix in place (teaching surfaces re-pass dual-audience, SO-7/SO-8); their-side findings → staged memo `coord_…_rosetta_to_noether_conformance_findings.md` (Rule 10; findings-as-offering, their cadence); standard-ambiguity findings → F-CHM-2xx ledger rows for the next version-cut's docket.
5. **Artifact**: `artifacts/conformance_bilateral.md` — both direction tables, dispositions, the codepin + drift note, out-of-scope manifest.

## Acceptance criteria

- [x] Both directions censused with file-path evidence; artifact complete; every finding dispositioned (fixed / staged-memo / ledger row). *(Dir-a: 7 LP-side [2 med/5 low] → staged offering memo + 1 OURS [A-6 validator gap → F-CHM-215/GI-1] + A-9 clean-check; dir-b: 0 spec contradictions [layer-attribution analysis], 5 stale-count fixes B-1..B-5, B-11 → F-CHM-214; sample sizes stated, not claimed exhaustive.)*
- [x] Zero writes outside this vault; LP reads at the pin (drift noted if any). *(Read-only proof: only pre-existing Carnot artifacts in LP status — the 16:04 LP-tree changes were a CONCURRENT Carnot R1 session, verified not-ours. Spec drift `47935b6..8cb6e1e` = EMPTY → pin-follow FOLLOWED, ratified at review; pattern + M5.1-memo §2/§5 back-filled.)*
- [x] Our-side fixes re-pass dual-audience; `npx astro build` green IF any site-mirrored teaching surface changed. *(180pp green ×2 incl. independent fable-side run.)*
- [x] Fable review passed (independent re-census of at least the two highest-severity findings, different method); `adna_validate` FULL PASS + `--governance` zero drift; explicit-path commit (no push — batches at G5). *(A-2 re-verified by direct ls [all 3 per-leg AGENTS.md absent] + A-6 by direct code read [`NESTED_INSTANCE_DIRS:55` hardcoded] + example count by semantic ls [19]; review completions: F-CHM-214/215 ledger rows FILED [builder referenced, never filed — manifest-vs-filesystem again] + pin-follow executed.)*

## Guardrails

Read-only in LatticeProtocol.aDNA — absolute · codepin discipline (cite `47935b6`; no HEAD-chasing without a fable ruling) · NAMES-ONLY · KEEP-when-ambiguous on historical/dated rows · P4-learned: sweep surface-sets must match where the claim class lives (F-CHM-213 — teaching claims live in vault md AND site mirrors AND `site/src/data/*.ts`); post-notification quiescence check (TaskStop the dispatch id) before review-fixes.

## Verification surface

`python3.13 what/lattices/tools/adna_validate.py .` + `--governance`; the artifact's finding rows each carry a path + line-level evidence; `git -C /Users/stanley/aDNA/LatticeProtocol.aDNA status --short` untouched before/after (read-only proof); grep tally of our-side fixes.

## Escalation triggers

- A finding is a **contradiction between the v2.5 standard and the LP spec** (not just one side's drift) → G5 input with both texts quoted; neither side edits until the operator rules.
- LP spec moved so far from `47935b6` that pin-checking is misleading → fable re-pin ruling; if load-bearing → G5.
- Budget > 65 kT → halt and report (verification class; the calibrated surface should come in under, not over).
