---
plan_id: mission_frontmatter_conformance
type: plan
title: "Frontmatter conformance — schema-aware validator + base-6 backfill"
owner: stanley
status: completed
mission_class: implementation
created: 2026-06-30
updated: 2026-06-30
last_edited_by: agent_stanley
tags: [plan, governance, conformance]
token_budget_estimated: "~140 kT (Large band, 80–200)"
---

# Frontmatter conformance — schema-aware validator + base-6 backfill

## Goal

Continue the `adna_validate` governance-hygiene thread by resolving the frontmatter-conformance class of findings. At open, `python3.13 what/lattices/tools/adna_validate.py .` → **FAILED Starter conformance, 502 errors / 339 files**. Root cause: the validator faithfully enforces the vault's own §5.5/§7.2 (base-6 on all triad content files), and the corpus has drifted. Approach (operator-ratified): conform the *unambiguous* in-vault content under §7.2; align the validator to the canonical templates where they legitimately differ (nested instances; `status` on directory_index/coordination); route the genuinely historical/correspondence backfill to a tracked deferral; propose the spec clarifications upstream. Target: drop in-scope errors to 0; residual ≈ 153 (historical sessions + coord non-status fields), tracked for deferred backfill.

## Tasks

### 1. Validator: schema-awareness (O1)
- **Status**: completed
- **Session**: session_stanley_20260630T083004Z_frontmatter_conformance
- **Description**: `_find_md_files` skips nested-instance trees (`what/docs/examples/**`, `how/templates/template_node_adna_exemplar/**`). `check_starter` frontmatter loop makes `status` OPTIONAL for `type: directory_index` and `type: coordination` (their canonical templates — `.adna/**/AGENTS.md`, `template_coordination.md` — omit it). `status` stays required for content + session. No other leniency. `--governance` mode + count guards untouched.
- **Files**: what/lattices/tools/adna_validate.py
- **Depends on**: none

### 2. Backfill unambiguous content (O2)
- **Status**: completed
- **Session**: session_stanley_20260630T083004Z_frontmatter_conformance
- **Description**: Field-precise, idempotent backfill of missing base-6 onto ~113 genuine content files (context, patterns, decisions, doctrine, exemplars, backlog ideas, real templates, campaign/AAR artifacts) + `who/governance/VISION.md` (full block). Unparseable directory_index files (`what/doctrine/AGENTS.md`, `what/context/object_standards/AGENTS.md`) get the canonical directory_index block (base-6 minus `status`). Do NOT add `status` to template-conformant index files. Git-derived dates; dry-run + spot-check before apply.
- **Files**: ~114 files across what/, how/
- **Depends on**: 1

### 3. ADR-044 + upstream idea (O3)
- **Status**: completed
- **Session**: session_stanley_20260630T083004Z_frontmatter_conformance
- **Description**: Author `what/decisions/adr_044_per_class_frontmatter_profiles.md` (status: proposed) — §7.2 should mark `status` optional for directory_index + coordination entities (canonical templates omit it). Author `how/backlog/idea_upstream_per_class_frontmatter_profiles.md`. Do NOT edit local `what/docs/adna_standard.md` (upstream-authoritative). Note the deferred historical session/coord base-6 backfill as a separate tracked follow-up (drift from their own base-6 templates, not a spec issue).
- **Files**: what/decisions/adr_044_per_class_frontmatter_profiles.md, how/backlog/idea_upstream_per_class_frontmatter_profiles.md
- **Depends on**: none

## Notes

- Push posture: HOLD (local commits only; 4 commits already unpushed on main).
- Deferred (operator choice, NOT this mission): backfill of 117 historical session records + 36 coord memos (non-status base fields) — they have drifted from their own base-6-carrying templates; deferred as churn on closed/correspondence records, tracked for a later pass.
- Untracked root files `HOME.md` + `home_config.yaml` observed at session start — not in scope; left untouched.

## Completion Summary

### Deliverables
- **O1** — `adna_validate.py` made schema-aware: `STATUS_OPTIONAL_TYPES=(directory_index, coordination)` + `NESTED_INSTANCE_DIRS` prune (`what/docs/examples`, `template_node_adna_exemplar`). `--governance` untouched.
- **O2** — base-6 backfilled into **115** in-scope files (97 append + 11 prepend-block + 7 bad-YAML repaired by YAML-quoting). Frontmatter-only; git-derived dates.
- **O3** — [[what/decisions/adr_044_per_class_frontmatter_profiles|ADR-044]] (proposed) + [[how/backlog/idea_upstream_per_class_frontmatter_profiles|idea_upstream_per_class_frontmatter_profiles]] + [[how/backlog/idea_deferred_session_coord_frontmatter_backfill|idea_deferred_session_coord_frontmatter_backfill]].
- STATE.md updated; session record filed.
- **Metric**: `adna_validate` 502 → 293 frontmatter errors; **in-scope residual = 0**; `--governance` Zero drift.

### Descoped / Deferred
- Backfill of 117 historical session records + ~36 coord memos (non-status base fields) — operator-deferred as audit-trail churn; tracked in [[how/backlog/idea_deferred_session_coord_frontmatter_backfill|idea_deferred_session_coord_frontmatter_backfill]] (= the residual 293).

### Key Findings
- The validator was **spec-faithful** (§7.2 requires base-6 on all triad content); the 502 were real drift, not over-reach. A "make-it-lenient" hack would have violated Standing Order 9.
- Two classes legitimately omit `status` per their **canonical templates** — the `.adna` `directory_index` template + `template_coordination` carry no `status`; the ~58 status-missing `AGENTS.md` were *following* the template and the 8 with `status` were the deviations. → ADR-044 (not a backfill).

### Scope Changes
- Plan opened as "backfill `status` into ~60 index files"; **corrected mid-flight** (after reading the `.adna` base template) to "validator `status`-optional for index/coord + propose upstream" — fewer edits, no base-template divergence, operator-ratified.

## AAR

- **Worked**: field-precise, idempotent backfill script with a parse-verify guard cleared 108 files in one apply, 0 verify-fails; the validator itself was the tight measure-loop checker.
- **Didn't**: 7 files had malformed YAML (embedded quotes/colons, `{{placeholders}}`) a naïve prepend would have doubled — needed bespoke quoting; the prior session's "4 WHO files" badly undercounted the true 502/339.
- **Finding**: the reference vault was failing its *own* published standard, mostly via class-mismatch (content schema applied to index/correspondence/session classes) — fixed at the right altitude (per-class profile), not by mass-churn.
- **Change**: when "continue the campaign" lands on a validator finding, run the validator FIRST to size true scope before writing the plan (named subset = 4 files; reality = 339).
- **Follow-up**: [[how/backlog/idea_deferred_session_coord_frontmatter_backfill|residual 293 backfill]] · [[how/backlog/idea_upstream_per_class_frontmatter_profiles|upstream ratification]] · [[what/decisions/adr_044_per_class_frontmatter_profiles|ADR-044]] operator ratification.
