---
type: aar
artifact_id: campaign_champollion_mission_m2_2_aar
title: "AAR — Champollion M2.2 (version-cut ADR-046)"
campaign_id: campaign_champollion
mission_id: mission_champollion_m2_2_version_cut_adr
executor_tier: fable
token_budget_estimated: "30 kT"
token_budget_actual: "~20 kT (fable at-tier, main session)"
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
status: active
tags: [aar, champollion, p2, m2_2, adr_046, version_cut, semver]
---

# AAR — Mission M2.2: version-cut ADR-046 (v2.4 → v2.5, ratifies at G2)

**Session**: `session_stanley_20260702T140223Z_champollion_p2_execution` · **Executor: fable at-tier IN the main session** (`model_actual = fable` == `tier_planned`) — first fable-main-session mission row: the brief's "fable subagent under opus orchestration" shape assumed an opus main session; with the operator's `/model fable` the main session IS the tier, so it ran directly (M1.5 at-tier precedent), with the validator + count-reconciliation as the independent check surface.

## Scorecard

| Deliverable | Status | Notes |
|---|---|---|
| ADR-046 authored, `status: proposed` | ✅ | [[../../what/decisions/adr_046_standard_version_cut_v2_5|adr_046_standard_version_cut_v2_5]] — Ratification block scaffolded **empty** (agents set `proposed` only; G2 fills it) |
| v2.5-vs-v3.0 recommendation | ✅ | **v2.5 recommended** — item-by-item §15.4 instance-invalidation table (C1/C2 relax · C3 forward-MUST/retro-SHOULD · C4 additive-or-nothing · C5 editorial); **v3.0 arm honestly stated** (only trigger = retroactive-MUST ratification blocks; not a dodge — the audit found zero breaking-class divergences) |
| ADR-044 §7.2/§5.5 fold scoped | ✅ | C1 + C2, wording sourced from the ratified decision (F-CHM-202 lands here) |
| Ratification-record discipline scoped | ✅ | C3 = new §7.7; the forward/retro compatibility split is the load-bearing judgment that keeps the cut minor |
| Placement/ADR-045 scoped | ✅ | C4 two arms for E1 (Arm A absorb = recommended · Arm B narrow); F-CHM-201/203/205 all land in the change-set |
| Model-tier fields disposition | ✅ | C6 default-out rider — **not graduated** (2/3 instances) → defer per the pattern's own trigger, early-ratify arm preserved for G2 (F-CHM-013 residual gets its gate path) |
| `adr_index` row + tally | ✅ | 41 ADRs — 39 accepted · 1 amended · **1 proposed**; 41 rows == 42 files − index (M1.3 glob-collision check applied) |
| `adna_validate` full + `--governance` | ✅ | Full conformance + Zero drift post-edit |
| Guardrails | ✅ | zero standard-text edits · zero `.adna/` writes · no push · explicit-path commit |

## Deviations & escalations
- **No escalations.** E1 arrives at G2 pre-packaged as C4's two arms (per the M2.1 hand-off) rather than as a new escalation.
- **Executor-shape deviation from the brief's letter, not its intent**: ran at-tier in the main session instead of "fable subagent under opus orchestration" — the brief's shape encoded *tier*, not *process topology*, and was authored when the main session was opus. `model_actual == tier_planned` holds; recorded for the Prometheus corpus.

## AAR (5-line)
- **Worked**: consuming a verified divergence ledger (M2.1) made the ADR mostly assembly + two real judgments — the semver compatibility split (forward-MUST/retro-SHOULD) and the C4 arm recommendation; the §15.4 instance-invalidation table format makes the v2.5 case checkable rather than asserted.
- **Didn't**: nothing failed; minor friction re-deriving where the ratification discipline should live in the standard (§7.7 chosen — §7 is the frontmatter/metadata system and the discipline is a status-field rule; no existing section owned decision lifecycle).
- **Finding**: the version-cut's hardest content isn't the folds — it's the compatibility *wording*: whether C3 binds retroactively is the entire v2.5-vs-v3.0 question, and the standard's own §15.4 promise decides it once stated precisely.
- **Change**: version-cut ADRs should always carry the per-item invalidation table (adopt as the ADR-046 pattern for future cuts; candidate template detail when `template_adr` folds at M6.1).
- **Follow-up**: G2 ratifies (version arm + C4 arm + C6 disposition); post-G2 execution order is §Consequences (1)–(5); validator warn-mode check rides G2-close or M6.1.

## Telemetry note (Prometheus corpus)
First **fable-main-session** row: `tier_planned: fable` · `model_actual: fable` (main session, no subagent) · est 30 · actual ~20 (−33%). Integration-class estimate landed inside the ADR-016 2× line — unlike the two verification-class rows (M1.4/M2.1), supporting the class-level calibration story (verification over-estimates; integration roughly right).

## Readiness
**GO for M2.3** — glossary/concepts sweep can now write against the proposed cut's terms (v2.5 arms, ratification-record discipline, register disambiguation per F-CHM-204). G2 inputs complete from M2.2's side.
