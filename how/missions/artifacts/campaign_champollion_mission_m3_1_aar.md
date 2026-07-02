---
type: aar
artifact_id: campaign_champollion_mission_m3_1_aar
title: "AAR — Champollion M3.1 (pattern harvest I: codepin · Order-of-Battle · STATE ⏭ QUEUED banner)"
campaign_id: campaign_champollion
mission_id: mission_champollion_m3_1_pattern_harvest_i
executor_tier: opus
token_budget_estimated: "40 kT"
token_budget_actual: "~44 kT (opus subagent build ~34 self-reported + fable bookends ~10 verify/review/amendments)"
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
status: active
tags: [aar, champollion, p3, m3_1, pattern_harvest, codepin, order_of_battle, state_queued]
---

# AAR — Mission M3.1: Pattern Harvest I

**Session**: `session_stanley_20260702T161839Z_champollion_p3_sweep` · **Executor: opus subagent** at-tier (`model_actual = opus` == `tier_planned`), **fable-orchestrated** — first mission executed under the **Mode-B dispatch-shape ruling** (operator, P3 open: same-session subagent dispatch = campaign planning default).

## Scorecard

| Deliverable | Status | Notes |
|---|---|---|
| Three pattern files live in `what/patterns/` | ✅ | [[../../../what/patterns/pattern_cross_graph_codepin|pattern_cross_graph_codepin]] · [[../../../what/patterns/pattern_order_of_battle|pattern_order_of_battle]] · [[../../../what/patterns/pattern_state_queued_banner|pattern_state_queued_banner]] — each plain-language-first, dual-audience, `status: draft` |
| ≥2 live instances by path, each | ✅ | codepin: LP producer pin + this vault's M5.2-row/alignment-memo seam · OoB: Champollion + Carnot (read-only) · banner: this vault's `## ⏭ QUEUED` + LP's `§QUEUED` |
| Honest divergences recorded | ✅ | codepin pin-lag (`47935b6` vs `8cb6e1e` — the mechanism working, M5.2 performs the deliberate pin-follow) · OoB shape deltas (ring column/codepin frontmatter/section axis) · banner cure-vs-habit provenance |
| Fold stubs marked `fold_batch: champollion_m6_1_rc` | ✅ | 3 stubs (codepin scaffold · `template_order_of_battle` · STATE-template QUEUED touch); zero `.adna/` writes, zero template writes |
| Wikilinks resolve, no orphans | ✅ | 6–7 per file, targets verified at fable review; the three patterns cross-link each other + 4 existing files |
| Fable independent review | ✅ | 2 amendments: codepin graduation re-counted (3 *records* → 2 *vault adoptions*, honest-counting standard) · ADR-016 broken wikilink in sibling `pattern_model_tiered_campaign_execution` fixed (builder-flagged, out of its write scope) |
| `adna_validate` FULL PASS + explicit-path commit | ✅ | run independently by orchestrator (not trusted from builder) |

## Deviations & escalations
- **F-CHM-208 (found at verify-before-dispatch, FIXED same-session)**: the brief cited `idea_state_prompt_shed_on_close` as a study input; the file never existed (M1.5's AAR promised it; the G1 cascade cites it). Builder was re-briefed onto the three live provenance refs; fable filed the idea at review + ledgered the finding. Class-sibling of F-CHM-001: **promised artifacts need a same-session existence check.**
- **Budget +10%** (~44 vs 40 kT) — within ADR-016's 2× line; the overage is the bookend layer (verify caught the phantom-input defect + the review produced 2 amendments — both are what the bookends are *for*).

## AAR (5-line)
- **Worked**: verify-before-dispatch caught a phantom brief input (nonexistent idea file) and a same-day upstream fact (LP pin advance) *before* the builder could inherit either — the dispatch prompt shipped corrected inputs, so the build ran clean on the first pass.
- **Didn't**: the brief's "≥2 cited instances" let the builder count two same-vault *records* of one seam as two *instances* (codepin); the graduation counting standard (vault-level adoptions) lives only in reviewer judgment, not in the brief text.
- **Finding**: instance-counting for graduation needs a one-line definition wherever `instances:` is required — "records ≠ adoptions; count vaults/campaigns that run the mechanism" — else every harvest mission re-litigates it.
- **Change**: M3.2's dispatch prompt states the adoption-counting rule explicitly (it checks two graduation seeds, where miscounting would mis-fire a gate trigger).
- **Follow-up**: fold the counting rule into the pattern-file template stub when the M6.1 RC assembles (rides `fold_batch: champollion_m6_1_rc`, G3 agenda).
