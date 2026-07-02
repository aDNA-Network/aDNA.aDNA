---
plan_id: mission_champollion_m1_1_backlog_disposition_execution
type: plan
title: "M1.1 — Execute the G0-ratified backlog dispositions (91 items)"
owner: stanley
status: completed
campaign_id: campaign_champollion
campaign_phase: 1
campaign_mission_number: 1
mission_class: implementation
executor_tier: opus
token_budget_estimated: "40 kT"
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
token_budget_actual: "~30 kT"
tags: [plan, campaign, champollion, p1, backlog, dispositions, m1_1]
---

# Mission M1.1 — Backlog disposition execution

**Campaign**: [[../campaign_champollion|campaign_champollion]] · **Brief authored at fable tier (G0); executor: opus.** Session pairing allowed with [[mission_champollion_m1_3_adr_index|M1.3]] if budget holds.

## Objective

Make `how/backlog/` truthful: execute **exactly** the G0-ratified dispositions in the [[../artifacts/backlog_adjudication_ledger|adjudication ledger]] (decided law per gate record D2) across all 91 items, so every file's `status:` matches reality and every deferred/declined/accepted item carries its disposition in its own frontmatter/body.

## Source of truth

The ratified ledger ONLY. Do not re-adjudicate. Per item, before editing: read the file's *current* frontmatter (a concurrent session may have moved it — verify-don't-inherit); if current state contradicts the ledger's recorded "status now", **escalate that item** (see triggers), continue the rest.

## Work (per disposition class)

1. **27 ALREADY-DISCHARGED** → flip `status:` to the truthful terminal value (`resolved` for shipped fixes, `completed` for done work — match each file's own vocabulary) + append a one-line close note: evidence pointer (from the ledger row) + `ratified at Champollion G0 (D2)`.
2. **2 DECLINE-stale** (`idea_upstream_latticehome_rename_pattern`, `idea_v8_p6_propagation_airlock_streamlined`) → `status: declined` + a decline banner quoting the ledger rationale (stale premise); files stay in place (SO-6).
3. **17 DEFER** → `status: deferred` + add `deferred_owner:` and `deferred_trigger:` frontmatter fields from the ledger row.
4. **31 ACCEPT→template-fold** → `status: accepted` (where not already) + add `fold_batch: champollion_m6_1_rc` frontmatter marker (M6.1 assembles the RC from this marker — nothing ships to `.adna/` here).
5. **14 ACCEPT→fix/mission** → `status: accepted` + add `champollion_mission:` pointer (the owning mission per the ledger; genuinely-immediate one-liner fixes ≤5 min may be executed inline — note them in the SITREP).
6. Update the ledger: append an `executed: YYYY-MM-DD` column/marker per row (or a per-section executed banner); update [[../artifacts/findings_ledger|F-CHM-012]] disposition to CLOSED.

## Acceptance criteria

- [ ] All 91 items dispositioned per ledger; `rg -c '^status:' how/backlog/*.md` count unchanged (no file deleted).
- [ ] Zero items left at a status the ledger says is stale; spot-check: the 4 named "status-lies" (VisualDNA seed, interactive_decision_surface, operator_web_gate, identity/inventory, awsbootstrap) all truthful.
- [ ] Ledger + findings ledger updated; `adna_validate` FULL PASS + `--governance` zero drift.
- [ ] Single commit, explicit paths (batch adds by directory glob acceptable: `git add how/backlog/*.md` after `git status` review).

## Guardrails

No `.adna/` writes · no cross-vault writes (items needing other vaults → the defer/owner fields, never direct edits) · no push (P1 sessions are commit-only; pushes batch at phase gates) · public-boundary: decline/close notes must not quote private material · do not re-litigate ratified dispositions.

## Verification surface

`python3.13 what/lattices/tools/adna_validate.py . && python3.13 what/lattices/tools/adna_validate.py . --governance` + `rg -l 'fold_batch: champollion_m6_1_rc' how/backlog | wc -l` == 31 + `rg -l '^status: deferred' how/backlog | wc -l` == 17.

## Escalation triggers (halt the item, log F-CHM, continue others)

- File's current status ≠ ledger's "status now" (concurrent movement).
- A disposition would require deleting content or touching another vault.
- An "already-discharged" claim's evidence pointer does not resolve.
- Budget > 60 kT (1.5× estimate) → checkpoint commit + hand off remainder.

## Completion summary (2026-07-02, `session_stanley_20260702T045807Z_champollion_m1_1`)

**Deliverables** — all 91 ratified items dispositioned in `how/backlog/` (commit `6145c16`):
**28 ALREADY-DISCHARGED** (status → `resolved`/`completed` + evidence close-note) · **31 ACCEPT→template-fold** (`fold_batch: champollion_m6_1_rc`) · **13 ACCEPT→fix/mission** (`champollion_mission:` pointer) · **17 DEFER** (`deferred_owner`/`deferred_trigger`) · **2 DECLINE-stale** (declined + banner, retained per SO-6).

**Acceptance criteria** — all met: file count unchanged (93, no deletions); `fold_batch`==31, `status: deferred`==17, `status: declined`==2; `adna_validate` full conformance + `--governance` zero drift; single commit, explicit paths, no push. Named status-lies (VisualDNA / interactive_decision_surface / operator_web_gate / identity+inventory / awsbootstrap) verified truthful.

**Scope notes / escalations** — the applied split is 28/13 vs the ledger's drafted 27/14: the +1 discharged / −1 fix-mission is `idea_upstream_node_vault_bare_role_rename` (already `resolved`, acknowledged RESOLVED inline in the ledger), classified truthfully as discharged. **2 items escalated** ([[../artifacts/findings_ledger|F-CHM-013]]): `idea_campaign_execution_automation` + `idea_upstream_model_tier_mission_fields` were filed after the ledger's read (post-`4e26b18`), outside the ratified 91 — left untouched per operator decision. The 3 stale ADRs (adr_003/012/027) are **M1.2's**, not touched here.

## AAR
- **Worked**: opus authored a per-file disposition map from the ratified ledger, then an idempotent script applied it batch-by-class — hit the exact 31/17/2 hard-counts on the first real run, validator green both modes.
- **Didn't**: dir held 93 not 91 (2 files filed after the ledger read) — caught at planning recon, not mid-execution; a naive per-file sweep would have silently over-run scope.
- **Finding**: "execute exactly N" missions must reconcile the live directory against the ledger's N *before* editing — concurrent movement is the norm on a shared tree, not the exception.
- **Change**: for count-bound sweeps, encode the acceptance grep-counts as the hybrid-disambiguation guide (the counts told us which way each hybrid had to resolve).
- **Follow-up**: F-CHM-013 (2 escalated files → operator/gate); adr_003/012/027 → M1.2; ~30 kT actual vs 40 kT est (−25%, well within ADR-016 threshold; script-batch beat the per-file estimate).
