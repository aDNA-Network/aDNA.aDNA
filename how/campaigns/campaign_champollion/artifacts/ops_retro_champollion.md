---
type: artifact
artifact_id: champollion_ops_retro
title: "Operation Champollion — ops-retro (the M7.x orchestration bundle; durable rules → pattern §2.6)"
campaign_id: campaign_champollion
mission_id: mission_champollion_m7_2_campaign_close_retro
created: 2026-07-03
updated: 2026-07-03
last_edited_by: agent_rosetta
status: active
tags: [artifact, champollion, p7, m7_2, retro, ops, mode_b, pattern]
---

# Operation Champollion — ops-retro (the M7.x orchestration bundle)

> The accumulated Mode-B orchestration lessons from running 8 phases (P0–P7) as fable-orchestrated sweeps.
> **The durable rules are folded into [[../../../what/patterns/pattern_model_tiered_campaign_execution|`pattern_model_tiered_campaign_execution` §2.6]]** (not just narrated here) + its review-bookend checklist; this artifact is the provenance record.

## The bundle (incident → durable rule)

| # | Incident | Phase | Durable rule (folded → pattern §2.6) |
|---|----------|-------|--------------------------------------|
| 1 | Twin-builder: one dispatch, two live builder instances (id A returned, id B notified; original kept editing post-report) | P4 | TaskStop dispatch-id + verify tree quiescence **before** review-fixes |
| 2 | Aggregate-halt: two individually-in-band dispatches summed past the mission halt | M6.1 → **recurred M7.1** | orchestrator tracks a **running mission total** at each bookend (now **standing** — 2 instances) |
| 3 | Builder surface-selection: a finding-fold landed on the wrong same-named surface; two clean file-level reviews missed it | M6.3 F1 | verify finding-sourced folds against the finding's **cited** surface (+ both sides of a contradiction, M7.1) |
| 4 | Silent halt-line: a subagent can't introspect its own token use | M5.2 | halt discipline lives in **dispatch sizing**, not in-subagent limits |
| 5 | Per-unit cost hidden inside a mission-shaped estimate | M6.1 rows + P5 cross-graph | price **per unit** (~2.5–3 kT/row; read-surface size for cross-graph) |
| 6 | Stranger-walk needs fresh, unprimed eyes | M4.1 + M7.1 | **campaign-blind** subagent + **method variation** (F-CHM-212) |
| 7 | Judgment tier (fable) rate-limited mid-campaign | M7.1 / M7.2 | operator-authorized **opus substitute** for the fable bookend, recorded honestly; fable never auto-spawned |

## Notes

- **The retro's own execution is the first live exercise of rule 7**: M7.2 (this closeout) ran as an operator-authorized opus substitute because fable hit its rate limit mid-P7 (`model_actual = opus ≠ tier_planned = fable`, recorded in the M7.2 AAR). The rule was written by the very constraint it governs.
- Rules 1–5 were "calibration candidates" tracked through P4–P6 telemetry; **M7.1 promoted rule 2 to standing** (2nd instance) and surfaced rule 7. All are now folded as standing discipline + the [[../../../what/patterns/pattern_model_tiered_campaign_execution|review-bookend checklist]].
- Divergence honesty (a pattern value): Carnot (D-C8) retired Mode B for session-per-mission the same day Champollion adopted it (P3). These §2.6 rules are Mode-B-specific — a session-per-mission charter inherits rules 3/5/6/7 (finding-side · per-unit · fresh-eyes · substitution) but not 1/2 (twin-builder · aggregate-halt are dispatch-shape hazards).

Full per-phase telemetry: [[telemetry_corpus_champollion_export]].
