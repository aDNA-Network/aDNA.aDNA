---
plan_id: mission_champollion_m1_4_currency_sweep
type: plan
title: "M1.4 — Currency sweep: version cites, CHANGELOG headings, count claims, Track-D row"
owner: stanley
status: active
campaign_id: campaign_champollion
campaign_phase: 1
campaign_mission_number: 4
mission_class: implementation
executor_tier: sonnet
token_budget_estimated: "30 kT"
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
tags: [plan, campaign, champollion, p1, currency, changelog, versions, m1_4]
---

# Mission M1.4 — Currency sweep (F-CHM-006/007/008/009/010 fixes)

**Campaign**: [[../campaign_champollion|campaign_champollion]] · **Executor: sonnet** (mechanical, enumerated fix-list). Pairable with [[mission_champollion_m1_3_adr_index|M1.3]]. Evidence: [[../artifacts/currency_seam_scan|Lane 3 fact tables]] (exact file/line cites inside).

## Objective

Every documented count/version/date claim in the fix-list below matches reality. Nothing else changes.

## Fix list (exact; per Lane 3 tables — re-verify each claim site before editing)

1. **Standard-version cites → v2.4** (F-CHM-006): `MANIFEST.md` (row citing v2.2) · `README.md` (~line 358, v2.2) · `what/lattices/tools/compliance_checker.py` header docstring (v2.3) · `CLAUDE.md` footnote (v2.3). *(compliance_checker.py: docstring text only — zero logic changes.)*
2. **CHANGELOG version headings** (F-CHM-008): cut proper `## [vX.Y] — date` headings for the known release events (v7.1 2026-06-10 · v7.2 2026-06-11 · v8.0 2026-06-19 · v8.1 2026-06-23 · v8.2/v8.3 2026-06-29 — confirm dates from git log / STATE cites), moving existing `[Unreleased]` entries under the heading matching their event; **do not rewrite entry text**; entries that predate no release stay in `[Unreleased]`.
3. **Reviewer-persona count** (F-CHM-007): CLAUDE.md claim sites ("5-persona ranker review" + the reviewer row naming 5) → 16 personas (name the 5 originals + "…and 11 further specialists; roster: `who/reviewers/AGENTS.md`").
4. **Base-skills split** (F-CHM-010): recount deterministically (`ls .adna/how/skills/skill_*.md` ∩ `how/skills/`; read-only peek at `.adna/` allowed) → true the minority claim (CLAUDE.md table 19 vs MANIFEST/AGENTS 21); totals stay 48.
5. **Track-D row de-stale** (F-CHM-009): `how/campaigns/campaign_operation_adna/campaign_operation_adna.md` Track D status cell "in-flight inside Track A" → "Track A closed 2026-06-21; Track D residual = terminal assessment → Champollion M6.2 (owner Rosetta, coordinates Venus)".
6. Update [[../artifacts/findings_ledger|findings ledger]] dispositions for all five to CLOSED-with-commit.

## Acceptance criteria

- [ ] `rg -n 'v2\.2|v2\.3' MANIFEST.md README.md CLAUDE.md what/lattices/tools/compliance_checker.py` → only historical-narrative hits remain (annotate SITREP with any intentional keeps).
- [ ] CHANGELOG headings parse (Keep-a-Changelog shape); `[Unreleased]` still exists.
- [ ] **`adna_validate --governance` = Zero drift AFTER every count edit** (the regex validates these numbers — run after each file, not just at the end).
- [ ] Validator FULL PASS; single explicit-path commit.

## Guardrails

Historical/archived narrative is NEVER edited (currency applies to live claims only — the keep/strip classifier from `skill_project_rename` applies) · no `.adna/` writes (reading it for the count is fine) · no push · zero logic changes in `.py` files.

## Verification surface

`python3.13 what/lattices/tools/adna_validate.py . --governance` (zero drift) + the rg checks above.

## Escalation triggers

- A claim site turns out load-bearing beyond text (e.g. a count consumed by code) → halt that item.
- The governance regex fails after an edit → revert that edit, report the exact string the regex wants.
- Budget > 45 kT → checkpoint + hand off.
