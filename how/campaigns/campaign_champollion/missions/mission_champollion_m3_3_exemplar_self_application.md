---
plan_id: mission_champollion_m3_3_exemplar_self_application
type: plan
title: "M3.3 — Exemplar self-application (10-dimension compliance self-score → exemplary)"
owner: stanley
status: planned
campaign_id: campaign_champollion
campaign_phase: 3
campaign_mission_number: 3
mission_class: verification
executor_tier: opus
token_budget_estimated: "35 kT (down from the charter's 45 — G2 D4 class-split calibration: verification budgets the judgment surface [10 dimensions × evidence], not the vault corpus; the fix-execution half keeps implementation-class weight)"
token_budget_actual: "TBD"
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
tags: [plan, campaign, champollion, p3, exemplar, self_score, compliance, dimensions, m3_3]
---

# Mission M3.3 — Exemplar self-application

**Campaign**: [[../campaign_champollion|campaign_champollion]] · **Executor: opus (build) with fable bookends** (G2 role model — fable reviews both the *honesty of the scoring* and the fixes) · **Ring 1**. The base graph must exemplify what it exports (charter north-star: *the standard must deserve the copying*).

## Objective

Score this vault against the **10 compliance dimensions** (CLAUDE.md §Compliance Dimensions — triad structure · governance · frontmatter · FAIR · type vocabulary · versioning · federation · registration · companions · reproducibility; 0–5 each, 50 max), **honestly and with per-dimension evidence**; fix what keeps any dimension below exemplary; re-score; record. Score against the **now-live v2.5 standard** (ADR-046 cut, 2026-07-02) — this is the first self-score under the new version.

## Work

1. Baseline score: per dimension, cite the evidence (files/paths/validator output) that justifies the number — a score without evidence is not a score. `compliance_checker.py` (`what/lattices/tools/`) assists where automated; judgment dimensions get judged.
2. Fix-list: for every dimension < 5, enumerate the concrete gaps; classify each fix as (a) mechanical-safe here, (b) needs fable/G3 judgment, (c) normative/structural → gate input (do NOT fix).
3. Execute class-(a) fixes (+ class-(b) after the fable bookend rules on them); re-score; both scores + evidence land in an artifact `artifacts/exemplar_self_score.md`.
4. Check the graduation seeds' dimension impact (if M3.2 ran first) and the F-CHM defer ledger for anything this score surfaces again (e.g., F-CHM-206 index annotation is a cheap companion fix if the versioning/registration dimensions want it).
5. Standing sweep clause: out-of-scope hits → manifest.

## Acceptance criteria

- [ ] Baseline + post-fix scores recorded per dimension WITH evidence paths in `artifacts/exemplar_self_score.md`.
- [ ] Every dimension at 5, or the residual gap explicitly classed (c) with its gate/owner named — no silent <5.
- [ ] Scoring honesty: at least one dimension's baseline evidence includes something unflattering (a perfect-50 baseline is an automatic fable-review rejection — the vault was not perfect this morning).
- [ ] Fable review passed; `adna_validate` FULL PASS + `--governance` zero drift; explicit-path commit.

## Guardrails

Score against the live v2.5 text, not memory of v2.4 · fixes stay inside this vault (no `.adna/`, no cross-graph) · normative/structural gaps are gate inputs, never unilateral fixes · no push · archive-never-delete (SO-6) for anything the fixes restructure.

## Verification surface

`python3.13 what/lattices/tools/adna_validate.py .` + `--governance`; `compliance_checker.py` run archived into the artifact; fable bookend reviews scoring honesty + fix diffs.

## Escalation triggers

- A dimension cannot reach 5 without a normative change or an operator decision → class (c), G3 input.
- Scoring reveals a defect in the *dimensions themselves* (rubric ambiguity, v2.5 mismatch) → that's a standard/spec finding — ledger it (F-CHM-2xx), don't quietly reinterpret the rubric.
- Budget > 50 kT → halt and report.
