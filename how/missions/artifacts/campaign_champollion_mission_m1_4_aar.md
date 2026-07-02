---
type: aar
artifact_id: campaign_champollion_mission_m1_4_aar
title: "AAR — Champollion M1.4 (currency sweep)"
campaign_id: campaign_champollion
mission_id: mission_champollion_m1_4_currency_sweep
executor_tier: sonnet
token_budget_estimated: "30 kT"
token_budget_actual: "~14 kT (sonnet executor; + opus orchestration + planning-tier pre-resolution)"
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
status: active
tags: [aar, champollion, p1, m1_4, currency, versions, changelog]
---

# AAR — Mission M1.4: currency sweep (F-CHM-006/007/008/009/010)

**Session**: `session_stanley_20260702T060714Z_champollion_m1_3_m1_4` · **Commit**: `8df393a` (unpushed, P1 commit-only) · **Executor: sonnet** (mechanical fix-list; via sonnet subagent, opus-orchestrated + verified; keep/strip + CHANGELOG judgment pre-resolved at planning tier + operator gate).

## Scorecard

| Deliverable | Status | Notes |
|---|---|---|
| Version cites → v2.4 (F-CHM-006) | ✅ | MANIFEST:162 · README:358 · compliance_checker.py (docstring L4 + metadata string L869) — **zero .py logic change** (diff = 2 text hunks) |
| Historical v2.3 cites KEPT | ✅ | MANIFEST:59 + CLAUDE:315 (ADR-035 era) preserved — residual grep shows only these two |
| Reviewer count 5 → 16 (F-CHM-007) | ✅ | CLAUDE.md L278 ("16-persona") + L329 (entity row + roster pointer) |
| Track-D row de-staled (F-CHM-009) | ✅ | campaign_operation_adna.md:127 status cell only; other columns intact |
| Base-skills verify-only (F-CHM-010) | ✅ | already consistent 21/27/48 (CLAUDE table 21 rows; MANIFEST/AGENTS agree); `glossary_skill.md` absent — no edit |
| CHANGELOG untouched (F-CHM-008) | ✅ | not in `git diff --name-only` |
| Findings ledger dispositions | ✅ | 006/007/009/010 CLOSED-M1.4 · 008 RECLASSIFIED-M1.4 |
| `adna_validate` full + `--governance` | ✅ | full conformance + **zero drift after count edits** |
| Single explicit-path commit | ✅ | `8df393a` |

## Deviations & escalations
- **No escalations.**
- **Item 2 (CHANGELOG) was NOT executed as the brief drafted it** — the brief's "cut v7.1–v8.3 headings" conflated the **template/image** version track (v8.x) with the CHANGELOG's own **governance** track (CLAUDE.md `version` = 6.0). The CHANGELOG's `[Unreleased]` already correctly accumulates every post-v6.0 change (incl. bullets *recording* the template releases). Caught at planning verify-don't-inherit; **operator decided: leave at v6.0, record the finding** (F-CHM-008 → RECLASSIFIED). A governance minor bump stays operator-reserved.
- **Item 4 (base-skills) was already resolved** before this mission — the live CLAUDE.md base table is 21 rows (the scan's "19" was stale), so item 4 collapsed to verify-only. The brief's `.adna`-intersection recount recipe was moot (`.adna` holds zero skill files); the table-row count is authoritative.
- **Version keep/strip refined the fix-list**: the brief listed the CLAUDE:315 ADR-035 cite among fix candidates, but it (and its twin MANIFEST:59) are correct history → KEEP, honoring the brief's own "historical narrative NEVER edited" guardrail over its bullet.

## AAR (5-line)
- **Worked**: pre-resolving the two judgment calls (keep/strip + CHANGELOG track) at planning tier let the sonnet executor run a pure mechanical fix-list — 10 edits, zero `.py` logic touched, governance regex green after the count edits, first pass.
- **Didn't**: the brief's item 2 was defective (version-track conflation) and item 4 was already-done — 2 of 5 items didn't execute as drafted; both caught before dispatch, not mid-run.
- **Finding**: sonnet-safe ≠ brief-correct. A mechanical brief authored at gate can still carry a stale premise (item 4) or a category error (item 2); the opus/planning verify pass before dispatch is where those get caught — downtiering is only safe *behind* a fresh verify.
- **Change**: for currency missions, re-derive every count/version claim from the live tree at planning time and diff against the brief's fix-list *before* dispatching the executor; hand the executor the reconciled list, not the original.
- **Follow-up**: none open from M1.4; F-CHM-008 reclassification is the honest CHANGELOG disposition (bump stays operator-reserved). ~14 kT vs 30 est (−53%; the pre-resolution moved work to planning tier — expected for a mechanical sweep with 2 no-op items).

## Telemetry note (Prometheus corpus)
First **sonnet-tier** rows for Champollion (M1.3 + M1.4). Both ran as sonnet subagents (`model_actual = sonnet` == `tier_planned`), opus-orchestrated. M1.4 actual (~14 kT) is well under estimate (30 kT) because two of five items were no-ops resolved at planning tier — a signal that "mechanical" estimates should be net of already-resolved/defective items, and that the verify-before-dispatch step shifts spend from executor to planner tier.

## Readiness
**GO** — all five findings dispositioned; live currency claims true. P1 exit gate G1 pending only M1.5 (STATE diet, opus, LAST).
