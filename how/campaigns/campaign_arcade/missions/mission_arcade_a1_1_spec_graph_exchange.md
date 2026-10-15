---
plan_id: mission_arcade_a1_1_spec_graph_exchange
type: plan
title: "Author spec_graph_exchange.md + the placement ADR; reply to Berthier and the triad"
owner: stanley
status: completed
campaign_id: campaign_arcade
campaign: campaign_arcade
campaign_phase: 1
campaign_mission_number: 2
mission_class: implementation
created: '2026-10-15'
updated: 2026-10-15
last_edited_by: agent_rosetta
tags: [plan, campaign, arcade]
executor_tier: opus   # executed on fable 2026-10-15 at the operator's R3 selection (plan-time AskUserQuestion); the declared tier is the planned lane
executor_lane: hosted
executor_runtime: claude
token_budget_estimated: 90
token_budget_unit: kT_content_load
estimated_sessions: 1
calibrated_sessions: null
estimation_class: content-novel
budget_status: provisional_until_G0_actual
token_budget_actual: "≈75 executor (content-load, rough: source reads ≈25 · spec ≈30 · ADR + index + memo ≈20); inside 90, no lenses"
depends_on:
- mission_arcade_a0_1_situation_review
blocks:
- mission_arcade_a1_2_terminal_platform_specs
- mission_arcade_a2_1_adr_065_estate_position
gate: "G1 — spec + ADR-064 §7.7 at the operator's next gate; the reply sends on its GO."
verification_method: "Every claim in the Completion Summary cites a path or a command; counts are derived, never typed; the five-line AAR is present before status: completed (Standing Order 5)."
---

# Mission: Author spec_graph_exchange.md + the placement ADR; reply to Berthier and the triad

**Campaign**: [[campaign_arcade]] (Operation ARCADE — side campaign of [[campaign_garnier]])
**Phase**: P1 — Access points
**Mission**: 2 of 15

## Goal

Discharge the placement ratified 2026-08-25 (as drafted 2026-07-11): the ONE standard-side spec that Terminal, WebForge and Exchange cite — citing, never copying, Exchange's adna-manifest/v0 and exchange-access/v1, promoting the M-S6 publish-path spec to a cited transport annex, stating the four-field publishable-graph minimum with the advisory-stays-advisory clause, and ruling L2 rule-set custody (content Rosetta's, execution Exchange's). Record the placement in ADR-064. Answer the 07-11 ask, the 08-03 status ask and the 08-25 ratification in one reply, staged outbound_ready.

## Exit Gate

G1 — spec + ADR-064 §7.7 at the operator's next gate; the reply sends on its GO.

## Objectives

### 1. what/specs/spec_graph_exchange.md v0.1
- **Status**: completed
- **Session**: session_stanley_20261015_212937_arcade_p0_situation_review_and_a1_1
- **Description**: Peer of the four ecosystem specs; §1 scope + ownership split · §2 cited sources with pins · §3 the publishable-graph minimum (identity · license · provenance · trust posture) · §4 honesty clause · §5 L2 custody · §6 access points + faces · §7 what the standard never carries · §8 forward integration (profiles, aiLedger anchoring as witness).
- **Files**: what/specs/spec_graph_exchange.md
- **Depends on**: none

### 2. ADR-064 placement (proposed)
- **Status**: completed
- **Session**: session_stanley_20261015_212937_arcade_p0_situation_review_and_a1_1
- **Description**: Why here; cites the 07-11 draft, the 08-25 ratification, Exchange ADR-020 D4; §7.7 block empty for the operator; adr_index regenerated (59 = 56 · 1 · 2).
- **Files**: what/decisions/adr_064_graph_exchange_spec_placement.md · adr_index.md
- **Depends on**: 1

### 3. Reply to Berthier + the triad, outbound_ready
- **Status**: completed
- **Session**: session_stanley_20261015_212937_arcade_p0_situation_review_and_a1_1
- **Description**: Acks the 07-11 ask (rulings ①②③ as ratified), answers the 08-03 ETA ask (done), names the L2 custody ruling and the RULE_SET_VERSION bump path, flags the two ADR-number collisions, names WebForge as the citing web face. Send waits for its GO (R4).
- **Files**: who/coordination/coord_2026_10_15_rosetta_to_berthier_and_the_triad_*.md
- **Depends on**: 2

## Campaign Context

### Previous Mission Outputs
- See [[mission_arcade_a0_1_situation_review]].

### Next Mission Inputs
- Feeds [[mission_arcade_a1_2_terminal_platform_specs]] · [[mission_arcade_a2_1_adr_065_estate_position]].

## Notes

- Conventions: `campaign_arcade/CLAUDE.md` (GARNIER's by pointer + the four ARCADE rules: memos-not-edits · SR-6 public naming hold · ADR-number qualification · tense labels).
- Provenance tags on every finding — `[D]` observed · `[I]` inferred · `[R]` peer record (re-verify before citing) · `[A]` assumption.

## Completion Summary

*Fill out when setting `status: completed`.*

### Deliverables
- `what/specs/spec_graph_exchange.md` v0.1 (`proposed`) — §1 split · §2 cited pins · §3 four-field minimum · §4 honesty · **§5 L2 custody (ruled here)** · §6 faces with tense · §7 never-carries · §8 forward
- `what/decisions/adr_064_graph_exchange_spec_placement.md` (`proposed`); `adr_index.md` 59 = 56 · 1 · 2
- `who/coordination/coord_2026_10_15_rosetta_to_berthier_and_the_triad_*.md` `outbound_ready` (send GO owed, R4)

### Descoped
- The WebForge one-liner ("you are a citing face") deferred to A1.4 unless Berthier has sent it.

### Key Findings
- Exchange's `signature` is stored, not verified, at Tier-0 (C182) — the spec's §3 row 3 says so rather than implying verified provenance.
- Three ADR-number collisions with Exchange (045 · 052 · 062) plus a fourth now (064) — rule 3 (vault-qualify) earned its place on the first mission.

### Scope Changes
- L2 custody was ruled inside the spec (§5) rather than as a separate ADR clause only — recorded as ADR-064 clause 5 so the signature covers it.

## AAR

*Mandatory before setting `status: completed`. See `how/templates/template_aar_lightweight.md`.*

- **Worked**: citing the Exchange's objects at their current pins instead of restating them — the spec is 1/4 the length a restatement would be and cannot drift on schema.
- **Didn't**: the placement memo's `refit_disposition` had routed this item to a trigger that died in 48 h (aDNALabs F-S249-03) — the park note was never re-keyed.
- **Finding**: both products were waiting on a *document*, not a decision; the decision had been made for seven weeks.
- **Change**: a ratification memo received = a mission card opened the same sitting (A0.1's AAR change, applied).
- **Follow-up**: Exchange's `RULE_SET_VERSION` bump on ADR-064's signature; Terminal Esplanade §2.4 trigger ② can fire on the same signature.
