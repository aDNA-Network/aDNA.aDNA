---
mission_id: mission_template_release_v8_14
type: plan
title: "Template release v8.14: ship the ARCADE carries, the Documents genesis template gaps and the mesh-probe portability fix to aDNA-Network/aDNA"
created: 2026-10-21
updated: 2026-10-21   # sitting 2: §4 ruled (S2-R1–R6, after an operator-requested review); ruled rows written; T5 condition failed → S2-Q7. Sitting 1: ledger authored, 14 local rows written
status: awaiting_operator   # §4 ruled incl. S2-R7 (T5 carried); waiting on the fire GO (O3). Was: halted at §4 (sitting 1)
gate: how/missions/artifacts/v8_14/v8_14_release_ledger.md §5 (fire GO)
last_edited_by: agent_rosetta
mission_class: integration
executor_tier: opus            # build/execution: enumerated rows, each with its object; the two ADR drafts (O2) are judgment and may be summoned to fable
executor_runtime: claude
executor_lane: oauth
estimation_class: known-method   # fifth ledger of the same shape (v8.10 · v8.11 · v8.12 · v8.13)
estimated_sessions: 3
token_budget_estimated: "≈150 kT content-load over three sittings (S1 ledger + local rows ≈60 · S2 ADR drafts P5 + P7 ≈45 · S3 re-measure + fire + deploy tail ≈45); v8.13 ran 175 against 90, so the band is wide. Re-based at S2: S2 became rulings + ruled rows (P5/P7 left this mission, S2-R3); S3 ≈50 incl. the spec-only mirror"
token_budget_actual: "S1 ≈65 kT (orientation + plan ≈20 · re-measure ≈15 · 14 rows ≈15 · ledger + mission ≈10 · close ≈5) · S2 ≈55 kT (review re-measure ≈20 · rows + red-prove ≈12 · ledger ≈10 · backlog ≈8 · close ≈5); running ≈120"
depends_on: [campaign_arcade]
source: how/campaigns/campaign_arcade/artifacts/p5/aar_campaign_arcade.md §Carries
tags: [mission, template_release, v8_14, ledger, arcade_carries, documents_adna, awaiting_operator]
---

# Template release v8.14

## Goal

Ship the next public-image release, `aDNA-Network/aDNA` v8.14. It carries:

- the seven v8.14 carries ARCADE handed on at its close ([[aar_campaign_arcade]] §Carries 1–6 and 13);
- the four template gaps Documents.aDNA had to patch at its own genesis ([[idea_upstream_template_gaps_from_documents_genesis]]);
- the `ping` portability fix Venus sent back after v8.13 (inbox, 2026-10-20);
- any v8.13-lane backlog ideas the operator rules in at the ledger's §4.

When it is done, a new fork gets templates that already carry the fields this fleet keeps adding by hand. The release skill also learns the spec-mirror step, so the site's specification can no longer trail the standard it mirrors.

Plain version: every new project should start with what the last few projects had to invent. This release moves those inventions into the starter kit.

## Exit Gate

- [ ] Ledger §4 ruled by the operator (§7.7); the rows ruled in are authored in the dev graph.
- [ ] P5 and P7 either drafted as `proposed` ADRs and ruled, or carried again by name (to v8.15 or later).
- [ ] Every payload row is re-measured at fire time in both trees (skill step b.2), and the leak sweep (b.1) is clean.
- [ ] Fire GO given; `aDNA-Network/aDNA` main + annotated tag `v8.14`; local `.adna` synced (step e); smoke S1–S9 green.
- [ ] Spec-mirror step (g) run if the standard version moved; its deploy has its own GO.
- [ ] AAR.

## Premise pass

| # | Premise | Where read (`file:line` @ HEAD) | Result | Tag |
|---|---|---|---|---|
| 1 | Image is v8.13 / standard v2.6 | `~/aDNA/.adna/CLAUDE.md:3` · `.adna/README.md:10` @ `.adna` `846ebde` | holds | [D] |
| 2 | The carries are as the AAR lists them | `aar_campaign_arcade.md:96–114` @ `f214a10` | holds: 13 rows, 7 are v8.14 | [D] |
| 3 | The four Documents gaps are open | both template trees, re-read 2026-10-21 | holds (a, b, c, d) | [D] |
| 4 | The ISS receiver fix has not landed | `Astro.aDNA/what/lib/iss/runtime/gate_receiver.py:56` (`*`, last touched `1aa3ac4` 2026-05-31) | holds, so the ISS trio stays held | [D] |
| 5 | The two Explore inventories (candidates · prior-release shape) | subagent reports, this sitting | used as a map; every row in the ledger was re-read first-hand | [R] (Explore ×2) |

## Objectives

### 1. Ledger + local rows
- **Status**: completed (sitting 1, 2026-10-21)
- **Session**: `session_stanley_20261021_014259_v8_14_queue_open`
- **Description**: Author the staging ledger: §0 derived, §2 rows, §3 surfaces, §4 questions, §5 checklist. Write the S-sized rows in the dev graph. Stop at §4.
- **Files**: `how/missions/artifacts/v8_14/v8_14_release_ledger.md`; the 14 dev-graph files in ledger §2a.

### 2. Rulings + ruled rows *(re-scoped at sitting 2; was "ADR drafts (P5 · P7)")*
- **Status**: completed (sitting 2, 2026-10-21) — except T5 (condition failed → ledger §4 S2-Q7)
- **Session**: `session_stanley_20261021_040841_v8_14_rulings_and_rows`
- **Description**: The operator asked for a careful review of the §4 recommendations; the review re-measured every premise, revised four, and the reviewed plan was approved (S2-R1–R6). Ruled rows written (ledger §2a′); §2c corrected (T7 MET, T6 → v8.15); P5 · P7 · E-3 · E-4 · T11 **left this mission** for a v2.7 standard-window queue (ledger §2e), because a governance release cannot carry standard text.
- **Depends on**: 1.

### 3. Re-measure + fire + deploy tail
- **Status**: planned
- **Description**: Run `skill_template_release` steps (a)–(g) against the ledger. Every row is re-measured in both trees first. Each outward act (push = release; spec-mirror deploy) has its own GO.
- **Depends on**: 1, 2 (S2-R7: T5 carried, so nothing else is owed before the fire GO).

## Notes

- **The v2.7 queue (ledger §2e) is not this mission's.** It needs a standard window and a fable drafting sitting; it is the honest home for rows that were "carried" three releases running.
- The vehicle is a standalone mission, not a campaign (operator, plan time 2026-10-21). v8.12 rode as a lane of a multi-lane session, and v8.13 rode as ARCADE P4.
- **GARNIER is still the front.** This mission runs only while the P1.3 readers are absent. A reader sitting pre-empts it.

## Completion Summary

*Fill out when setting `status: completed`.*

## AAR

*Mandatory before setting `status: completed`.*
