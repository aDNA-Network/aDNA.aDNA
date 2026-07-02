---
plan_id: mission_champollion_m1_3_adr_index
type: plan
title: "M1.3 — Generate what/decisions/adr_index.md + AGENTS.md upgrade"
owner: stanley
status: completed
campaign_id: campaign_champollion
campaign_phase: 1
campaign_mission_number: 3
mission_class: implementation
executor_tier: sonnet
token_budget_estimated: "15 kT"
token_budget_actual: "~14 kT (sonnet executor; + opus orchestration)"
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
tags: [plan, campaign, champollion, p1, adr_index, decisions, m1_3]
---

# Mission M1.3 — ADR index (F-CHM-003 fix)

**Campaign**: [[../campaign_champollion|campaign_champollion]] · **Executor: sonnet** (mechanical). Pairable with [[mission_champollion_m1_4_currency_sweep|M1.4]] or [[mission_champollion_m1_1_backlog_disposition_execution|M1.1]].

## Objective

Create `what/decisions/adr_index.md` — one row per ADR (number · title · status · created/updated · one-line subject), generated from each file's frontmatter + H1, and point `what/decisions/AGENTS.md` at it. Closes [[../artifacts/findings_ledger|F-CHM-003]].

## Work

1. Enumerate `what/decisions/adr_*.md` (expect ~45 files; count live — verify-don't-inherit).
2. Extract per file: ADR number (filename), title (H1 or frontmatter `title`), `status:`, `created:`/`updated:`, one-line subject (first sentence of the body or the H1 tail). Extraction is mechanical — do NOT paraphrase or interpret; quote/trim.
3. Write `adr_index.md` with frontmatter `type: directory_index` (per ADR-044, `status` optional for this type), a sortable table (number ascending), and a status-tally line (e.g. `accepted: N · proposed: N · superseded: N`).
4. Add a "Regeneration" note: the index is derived; regenerate after any ADR status change (one `rg`-based recipe line included).
5. `what/decisions/AGENTS.md`: add an index pointer line near the top (do not restructure the file).

## Acceptance criteria

- [ ] Index row count == `ls what/decisions/adr_*.md | wc -l`; every `status` cell matches that file's frontmatter exactly (spot-check 5 random + adr_045).
- [ ] AGENTS.md points at the index; `adna_validate` FULL PASS.
- [ ] If run AFTER M1.2: index reflects the repaired statuses (zero `proposed`). If run BEFORE M1.2: current statuses — and note in the SITREP that M1.2 must regenerate.
- [ ] Single explicit-path commit.

## Guardrails

Do not edit any ADR file (index only + AGENTS.md pointer) · no `.adna/` writes · no push · mechanical extraction only — any judgment call (ambiguous title/status) is an escalation, not a guess.

## Verification surface

`python3.13 what/lattices/tools/adna_validate.py .` + a diff-check: `rg -c '^\| adr_' what/decisions/adr_index.md` vs file count.

## Escalation triggers

- Any ADR file lacks parseable frontmatter `status:` → list them in the SITREP as F-CHM candidates; do not invent a value (cell = `⚠ missing`).
- Budget > 25 kT → something is wrong with scope; halt and report.

## AAR

**Session**: `session_stanley_20260702T060714Z_champollion_m1_3_m1_4` · **Commit**: `6883ba3` (unpushed) · **Executor: sonnet** (via sonnet subagent, opus-verified). AAR artifact: [[../../../missions/artifacts/campaign_champollion_mission_m1_3_aar|campaign_champollion_mission_m1_3_aar]].

- **Worked**: sonnet subagent mechanically built 40 rows with verbatim statuses; tally (39 accepted · 1 amended · 0 proposed) + 5 spot-checks + 7-pipe table integrity all green first pass; validator clean.
- **Didn't**: nothing failed; the subagent's session-limit message fired *while writing its return manifest*, but the file writes had landed — work complete, verified independently (not inherited).
- **Finding**: a derived index named `adr_index.md` self-matches the `adr_*.md` glob → count checks must exclude it (40 rows == 41 glob − 1 index).
- **Change**: for derived-index missions, acceptance = `rows == files − index`, and the regen recipe carries a `grep -v adr_index` exclusion.
- **Follow-up**: optional subject-quality pass (some subjects are Status-block text, not the Decision gist) — low value, regenerates on any status change. ~14 kT vs 15 est.
