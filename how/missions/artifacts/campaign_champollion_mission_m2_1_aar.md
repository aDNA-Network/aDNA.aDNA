---
type: aar
artifact_id: campaign_champollion_mission_m2_1_aar
title: "AAR — Champollion M2.1 (standard currency audit)"
campaign_id: campaign_champollion
mission_id: mission_champollion_m2_1_standard_currency_audit
executor_tier: opus
token_budget_estimated: "50 kT"
token_budget_actual: "~18 kT (opus subagent ~10 self-reported output + fable orchestration verify/write ~8)"
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
status: active
tags: [aar, champollion, p2, m2_1, standard, currency, audit]
---

# AAR — Mission M2.1: standard currency audit (v2.4 ↔ v8.3 ↔ ADR corpus)

**Session**: `session_stanley_20260702T140223Z_champollion_p2_execution` · **Executor: opus subagent** at-tier (`model_actual = opus` == `tier_planned`), **fable-orchestrated** — first fable-orchestrated dispatch (P1 was opus-orchestrated; the operator's `/model fable` session flips the orchestration tier up one).

## Scorecard

| Deliverable | Status | Notes |
|---|---|---|
| Divergence ledger emitted | ✅ | [[../../campaigns/campaign_champollion/artifacts/standard_currency_audit|standard_currency_audit]] — 6 findings F-CHM-201..206 (HIGH 2 · MED 2 · LOW 2), severity-ranked, each with class + owner + target |
| All-40 ADR walk | ✅ | 8 STANDARD-TOUCHING (006/008/011/034/035/042/044/045): 6 FOLDED · 1 PENDING-FOLD (044) · 1 UNFOLDED (045); 32 N/A with per-row evidence |
| Version v2.4 confirmed live | ✅ | title/frontmatter/changelog agree; sole metadata defect = `:1499` end-line ("v2.3", F-CHM-201) — pre-verified at dispatch |
| Template-image reconcile (v8.3) | ✅ | standard doc **byte-identical** dev↔image (F-CHM-201 shipped public); governance surfaces zero count/version drift; ADR-045 lockstep spec amendments verified landed |
| Normative/demonstrative sweep | ✅ | exhaustive on conformance/MUST sections — clean except the ADR-044 tension (F-CHM-202); dominant blur = "standard" register overload (F-CHM-204 → M2.3) |
| Escalation discipline | ✅ | **E1** (Universal-Standard scope boundary for `federation/`) → G2 input, not resolved; ADR-044 fold deliberately NOT escalated (mechanical, ratified) |
| Findings registered | ✅ | F-CHM-2xx block appended to [[../../campaigns/campaign_champollion/artifacts/findings_ledger|findings_ledger]] |
| Audit-only guardrail | ✅ | zero standard/ADR/`.adna/` edits; subagent wrote scratchpad-only; main session owns all vault writes |
| `adna_validate` FULL PASS + explicit-path commit | ✅ | validated post-write; single commit |

## Deviations & escalations
- **E1 (G2 input)**: does §5 of the Universal Standard absorb the `how/federation/` wrapper rule (per ADR-045's "structural convention of the aDNA Universal Standard" wording), or is the software-element-graph apparatus permanently spec-corpus-only with ADR-045's wording narrowed? Pose at G2 **before** M2.2 writes (or declines) the §5.3 row — M2.2 will draft both arms.
- **Budget −64% (~2.8×, over the ADR-016 2× line)** → calibration item for G2, same class as M1.4's −53%: the P2 calibration note ("verification estimates likely high") proved out — anchors were pre-resolved at orchestration tier, and the real audit surface (8 standard-touching ADRs of 40) was much smaller than the 50 kT estimate assumed.

## AAR (5-line)
- **Worked**: handing the subagent verified anchors (v2.4 title, the seeded `:1499` defect, 40-row index math, dev↔image byte-identity) let it spend its whole budget on judgment (the 40-ADR classification + the E1 scope question) instead of re-deriving facts; the fable verify pass then confirmed every load-bearing claim in minutes.
- **Didn't**: the 50 kT estimate was ~2.8× actual — verification-mission estimates keep assuming the executor re-derives anchors the orchestrator has already pinned (M1.4 precedent, now twice).
- **Finding**: the standard-touching surface of a 40-ADR corpus is small (8) and the fold state is healthy (6/8 FOLDED, 1 known-queued) — the real currency risk sits in *scope wording* (what "the standard" even means: F-CHM-203/204/E1), not in unfolded content.
- **Change**: estimate verification missions net of orchestrator pre-resolution — budget the *judgment surface* (ADRs to classify, claims to verify), not the corpus size; propose at G2 that P3 estimates apply this rule.
- **Follow-up**: E1 to G2 (gate input) · F-CHM-201/202/203/205 → M2.2 (ADR-046 scope) · F-CHM-204 → M2.3 · F-CHM-206 defer.

## Telemetry note (Prometheus corpus)
First **fable-orchestrated** row: `tier_planned: opus` · `model_actual: opus` (subagent) · est 50 · actual ~18 (executor ~10 output + orchestrator ~8). Second consecutive verification/mechanical-class mission >2× under estimate — supports a class-level correction (verification estimates net of pre-resolution) rather than per-mission retros.

## Readiness
**GO for M2.2** — the divergence ledger gives ADR-046 its exact scope (F-CHM-201/202/205 mechanical folds + F-CHM-203/E1 as the both-arms decision); E1 is cleanly posed for the G2 operator.
