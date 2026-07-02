---
plan_id: mission_champollion_m1_1_backlog_disposition_execution
type: plan
title: "M1.1 — Execute the G0-ratified backlog dispositions (91 items)"
owner: stanley
status: active
campaign_id: campaign_champollion
campaign_phase: 1
campaign_mission_number: 1
mission_class: implementation
executor_tier: opus
token_budget_estimated: "40 kT"
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
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
