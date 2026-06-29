---
plan_id: mission_closeout_handoff
type: plan
title: "Closeout — campaign AAR + terminal III.aDNA handoff + pattern packet"
owner: stanley
status: completed
campaign_id: campaign_looking_glass
campaign_phase: 3
campaign_mission_number: 5
mission_class: closeout
token_budget_estimated: "~70 kT (50-80 tier): campaign AAR + pattern packet + III.aDNA handoff memo"
created: 2026-06-27
updated: 2026-06-28
last_edited_by: agent_stanley
tags: [plan, campaign, iii_campaign_pilot, closeout, handoff, looking_glass]
---

# Mission: Closeout — campaign AAR + terminal III.aDNA handoff

**Campaign**: [[how/campaigns/campaign_looking_glass/campaign_looking_glass|campaign_looking_glass]]
**Phase**: 3 — Improve (act + extract)
**Mission**: 5 of 6 (M0–M5)

## Goal

Close the campaign and **discharge the terminal pattern-extraction charge**: verify success criteria met, finalize the reusable pattern packet, and author (as a coord memo — no cross-vault write) the III.aDNA campaign-planning mission that graduates the "III campaign" pattern.

## Exit Gate

Campaign AAR filed (criteria A1–A4 / B1–B3 verified ≥ threshold vs. baseline); pattern packet complete; the III.aDNA campaign-planning mission spec authored as a coord memo; campaign `status: completed`.

## Objectives

### 1. Campaign AAR + criteria verification
- **Status**: done
- **Description**: 5-line AAR + cross-mission scorecard; verify each success criterion met vs. baseline; log descoped / follow-on items.
- **Files**: campaign master (Completion Summary + Campaign AAR); `how/missions/artifacts/campaign_looking_glass_aar.md`.
- **Depends on**: none.

### 2. Finalize the pattern packet
- **Status**: done
- **Description**: Assemble the reusable scaffolding (the `representation_coherence` pack + claim-tracer persona + process recipe + measurement model) + the instrumentation logs + the reusable-vs-bespoke ledger.
- **Files**: `artifacts/pattern_packet.md` (index over the scaffolding + logs).
- **Depends on**: 1.

### 3. Author the III.aDNA handoff (coord memo)
- **Status**: done
- **Description**: Spec the `III.aDNA/how/missions/` campaign-planning mission (→ `campaign_h_iii_campaign_pattern`) to (a) review/improve III from pilot learnings and (b) spec/build/test/deploy the pattern (likely `skill_iii_campaign`). Stage as a coord memo (Standing Order 3); **do not write into III.aDNA**.
- **Files**: `who/coordination/coord_<date>_rosetta_to_argus_iii_campaign_handoff.md`.
- **Depends on**: 2.

### 4. Operational close
- **Status**: done
- **Description**: Update STATE.md; set campaign `status: completed`; update [[how/backlog/idea_iii_campaign_pattern|idea_iii_campaign_pattern]] → graduating.
- **Files**: STATE.md; campaign master; idea note.
- **Depends on**: 1, 2, 3.

## Campaign Context

### Previous Mission Outputs
- M4 produced the validated, improved site + context (re-measured).

### Next Mission Inputs
- Hands off to III.aDNA (its own lane) — the pattern graduates there, not here.

## Notes

- **Cross-vault discipline**: the handoff is a coord *memo*. The III.aDNA mission is authored *in* III.aDNA by its own session, picking up this memo.
- Discharging the terminal charge is **mandatory** for campaign completion (charter §Terminal exit).

## AAR

**Filed 2026-06-28** → [[how/campaigns/campaign_looking_glass/missions/artifacts/campaign_looking_glass_aar|campaign_looking_glass_aar]] (this campaign-closeout mission's AAR *is* the campaign AAR, per the `campaign_rosetta` precedent; GO, 4/4 objectives). Deliverables: [[how/campaigns/campaign_looking_glass/artifacts/pattern_packet|pattern_packet.md]] + the [[who/coordination/coord_2026_06_28_rosetta_to_argus_iii_campaign_handoff|III.aDNA/Argus handoff memo]] + the campaign master §Completion Summary/§Campaign AAR + `idea_iii_campaign_pattern` → `graduating`. **Campaign `completed`.**
