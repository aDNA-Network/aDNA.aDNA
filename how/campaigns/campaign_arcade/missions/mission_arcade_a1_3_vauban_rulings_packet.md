---
plan_id: mission_arcade_a1_3_vauban_rulings_packet
type: plan
title: "Disposition Vauban's thirteen template and pattern asks; operator rules; reply delivered"
owner: stanley
status: completed
campaign_id: campaign_arcade
campaign: campaign_arcade
campaign_phase: 1
campaign_mission_number: 4
mission_class: integration
created: '2026-10-15'
updated: 2026-10-16
last_edited_by: agent_rosetta
tags: [plan, campaign, arcade]
executor_tier: fable
executor_lane: hosted
executor_runtime: claude
token_budget_estimated: 60
token_budget_actual: "≈55 executor (content-load, rough: plan-time reads + first-hand re-reads ≈20 · packet ≈12 · nine file amendments + the new pattern ≈10 · reply ≈6 · close ≈7); inside 60 ± 25; one Explore subagent at plan time ≈88 kT on its own line"
token_budget_unit: kT_content_load
estimated_sessions: 1
calibrated_sessions: null
estimation_class: content-novel
budget_status: provisional_until_G0_actual
depends_on:
- mission_arcade_a1_2_terminal_platform_specs
blocks:
- mission_arcade_a1_4_registry_truth
gate: "G1 — rulings taken; reply GO."
verification_method: "Every claim in the Completion Summary cites a path or a command; counts are derived, never typed; the five-line AAR is present before status: completed (Standing Order 5)."
---

# Mission: Disposition Vauban's thirteen template and pattern asks; operator rules; reply delivered

**Campaign**: [[campaign_arcade]] (Operation ARCADE — side campaign of [[campaign_garnier]])
**Phase**: P1 — Access points
**Mission**: 4 of 15

## Goal

Answer Terminal's two unanswered memos (10-06: nine Bastide conventions; 10-07: four boundary-AAR template asks) with one rulings packet — each row accept / amend / decline with the target template or pattern named — put to the operator as an AskUserQuestion or ISS gate, then applied to the templates that are ours (the accepted rows ride the v8.13 image via A4.2) and replied to Vauban.

## Exit Gate

G1 — rulings taken; reply GO.

## Objectives

### 1. Packet of 13 rows
- **Status**: completed
- **Session**: session_stanley_20261016_164611_arcade_a1_3_vauban_rulings_packet
- **Description**: Each row: the ask · the object it would change · Rosetta's recommendation · risk · the v8.13 lane if accepted.
- **Files**: artifacts/p1/vauban_rulings_packet.md
- **Depends on**: none

### 2. Operator rulings
- **Status**: completed
- **Session**: session_stanley_20261016_164611_arcade_a1_3_vauban_rulings_packet
- **Description**: AskUserQuestion (bounded) or skill_create_iss (if richer); resolutions recorded on each row.
- **Files**: same
- **Depends on**: 1

### 3. Apply + reply
- **Status**: completed
- **Session**: session_stanley_20261016_164611_arcade_a1_3_vauban_rulings_packet
- **Description**: Accepted rows land in how/templates/ and what/patterns/ as proposed amendments; reply to Vauban outbound_ready; Terminal ROADMAP row 17 can close on it.
- **Files**: how/templates/* · what/patterns/pattern_iss_operator_gate.md · who/coordination/coord_*_rosetta_to_vauban_*.md
- **Depends on**: 2

## Campaign Context

### Previous Mission Outputs
- See [[mission_arcade_a1_2_terminal_platform_specs]].

### Next Mission Inputs
- Feeds [[mission_arcade_a1_4_registry_truth]].

## Notes

- Conventions: `campaign_arcade/CLAUDE.md` (GARNIER's by pointer + the four ARCADE rules: memos-not-edits · SR-6 public naming hold · ADR-number qualification · tense labels).
- Provenance tags on every finding — `[D]` observed · `[I]` inferred · `[R]` peer record (re-verify before citing) · `[A]` assumption.

## Completion Summary

*Fill out when setting `status: completed`.*

### Deliverables
- `artifacts/p1/vauban_rulings_packet.md` — 16 rows (13 asks + C1–C3; count derived `13 + 3`), four rulings R7–R10 (AskUserQuestion at plan time, 2026-10-16, all as recommended): ratify 8 · amend 4 · general-rule-to-v2.6 1 · decline 0; lanes v8.13 12 · v2.6 1 · ask-back 2 · info 1.
- Nine files amended `proposed (v8.13)`, additive only: `how/templates/template_aar.md` (§Carries) · `template_campaign.md` (§Decision Points INFERRED · §Per-Phase AAR-light row · §Timeline estimation guidance · §Descoped line) · `template_campaign_mission.md` + `template_mission.md` (§Premise pass · §Descoped line) · `template_session.md` (`issued_by:` + `continues:` + record-identity rule + open/seal reads) · `template_aar_lightweight.md` (§Boundary AAR-light) · `what/patterns/pattern_iss_operator_gate.md` (§4 clause 5) · `how/skills/skill_create_iss.md` (Affordance rule).
- **New** `what/patterns/pattern_ledger_backed_acceptance_tables.md` (`draft`, 1 instance) — rows 1 · 2 · 4 as one pattern; 4 wikilinks resolve.
- Row 7 queued on `mission_arcade_a4_1_standard_v2_6.md` (dated row); the accepted set named on `mission_arcade_a4_2_image_v8_13.md`.
- Reply `who/coordination/coord_2026_10_16_rosetta_to_vauban_thirteen_rows_ruled_…md` `outbound_ready` (send GO owed); ROADMAP-v1.1 row 17 closes by pointer on row 6; C3 correction + C1/C2 asks carried.

### Descoped
- `adna_standard.md` not edited (row 7 → the v2.6 cut, A4.1) — by rule, not by omission.
- The ISS renderer templates (`SiteForge.aDNA/what/lib/iss/templates/`) not touched — Astro's tree; the rule binds the pattern + the canonical skill (noted in the reply, not asked).

### Key Findings
- [D] Every one of the 13 named targets existed and **none carried the convention asked for** — the survey's claims were re-read line by line (`sed -n`) before entering the packet, i.e. 10-07 #3 was applied to the sitting that ruled it.
- [D] The sixteen rows collapsed into four bounded groups, so the rulings on a packet that *amends the ISS pattern* were taken at the ISS pattern's own Tier-2 boundary (inline) — the structure is the lesson (SO-8).
- [D] `idea_access_point_threat_model.md` exists only under `Archive.aDNA/TerminalGo.aDNA/how/backlog/` (`ls` both trees) — the platform spec's hook waits on an archived object; asked back (C2).

### Scope Changes
- Vauban's third carry word `v1.1` is written `next` in our templates (the template does not know the next version); 10-07 #3's VERIFIED/REPORTED mapped onto the vault's `[D]`/`[R]` tags — one tag set. Both stated in the reply.

## AAR

*Mandatory before setting `status: completed`. See `how/templates/template_aar_lightweight.md`.*

- **Worked**: one read-only survey of all 13 targets at plan time + first-hand re-read of every cited line let the four rulings be taken before the sitting opened; the packet's recommendation column was the plan.
- **Didn't**: nothing failed; the one near-miss was the `Premise pass` verification grep returning 3, not 2 — the third hit is `template_campaign.md`'s own cross-reference to the section, correct, but the expected count was typed before the cross-reference was written.
- **Finding**: a peer's thirteen asks were all "ratify or amend" because every target was *empty* of the convention, not *wrong* about it — the standard's silence (§19.4 non-prescription) was the one place "amend into a pattern" beat "ratify into the standard".
- **Change**: a verification grep's expected count is derived after the edits, not before (the AAR-light's own §Premise pass rule, turned on the close).
- **Follow-up**: send GO for the Vauban reply · v8.13 (A4.2) carries 12 rows · v2.6 (A4.1) carries row 7 · the new pattern's second instance (candidate: the web-quality gate corpus, waiver ledger absent) is a backlog idea when one is counted.
