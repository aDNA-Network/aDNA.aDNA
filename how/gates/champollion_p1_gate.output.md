---
type: gate_output
gate_id: champollion_p1_gate
title: "Operation Champollion — G1 ratification record"
campaign_id: campaign_champollion
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
status: ratified
ratified_by: operator (Stanley)
ratified_via: "in-chat — \"Your recs sound good. make it so.\" (2026-07-02; gate rendered inline/copy-paste tier, like G0)"
tags: [gate_output, champollion, g1, ratification, record, per_tier_aar]
---

# G1 Ratification Record — Operation Champollion (P1 exit / per-tier AAR review)

> Operator: **"Your recs sound good. make it so."** — in-chat, 2026-07-02, against [[champollion_p1_gate|the G1 gate]]. All four decisions resolve to their recommendations (GO · ACCEPT · PUSH · DEFER). This record is the ratification block downstream work cites. Ratification-record discipline note: gate ref = `how/gates/champollion_p1_gate.md` · ratifier = operator (Stanley) · date = 2026-07-02 · scope = the four decisions below, nothing broader.

| # | Decision | Resolution | Arms |
|---|----------|------------|------|
| D1 | Ratify P1 complete + open P2 | **GO** | `campaign_champollion` P1 `✅` / P2 `◐`; P2 mission briefs materialized (M2.1–M2.3) this turn at judgment tier (authoring, not execution); P2 opens next session (M2.1 first); next gate G2 |
| D2 | Accept P1 per-tier telemetry as Prometheus corpus datapoint #1 | **ACCEPT** | Datapoint #1 emitted → [[../campaigns/campaign_champollion/artifacts/telemetry_corpus_p1|telemetry_corpus_p1]] (pattern §3 join keys `tier_planned × model_actual × budget_est × budget_actual`); systematic under-estimation adopted as a P2 budget-calibration note; **M1.4's ~2.1× drift accepted in lieu of a separate ADR-016 retrospective** (explained: planning-tier pre-resolution + 2 no-op items); [[../../who/coordination/coord_2026_07_02_rosetta_to_prometheus_model_tier_pattern|Prometheus memo]] annotated |
| D3 | Push the 11 held P1 commits | **PUSH** | `origin main` pushed at this session's close (post `git fetch` + `ls-remote` truth-check + gitleaks pre-push); range `f629a37..HEAD` = 11 held + the G1 close commit; the 2 base `[no push]`-tagged automation-design commits (`4e26b18`/`fb23738`) ride along (campaign design notes, names-only, no secrets) |
| D4 | Charter the R1 campaign-runner now | **DEFER** | `idea_campaign_execution_automation` (F-CHM-013) stays filed; charters on an explicit later turn (STATE's "R1 runner charters post-G1 on idea acceptance") — not this gate |

## Routing-quality verdict (the G1 review, recorded)
5/5 P1 missions ran at their planned tier · **0 tier-changing escalations** · all five under budget (total 160 → 120 kT, **−25%**). Per tier: fable 35→32 (−9%) · opus 80→60 (−25%) · sonnet 45→28 (−38%). The orchestrated-tier shape (judgment at tier; opus scaffolds/verifies/commits) held cleanly. Headline finding — **sonnet-safe ≠ brief-correct**: the verify-before-dispatch pass caught 2 defective brief items in M1.4 (0 shipped); downtiering is only safe behind a fresh verify. First routing-quality checkpoint: **PASS**.
