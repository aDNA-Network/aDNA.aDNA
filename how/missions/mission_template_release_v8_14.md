---
mission_id: mission_template_release_v8_14
type: plan
title: "Template release v8.14: ship the ARCADE carries, the Documents genesis template gaps and the mesh-probe portability fix to aDNA-Network/aDNA"
created: 2026-10-21
updated: 2026-10-21   # sitting 1: ledger authored, 14 local rows written, stopped at §4
status: awaiting_operator   # halted at the ledger's §4 questions (sitting 1 done). Fire is its own GO
gate: how/missions/artifacts/v8_14/v8_14_release_ledger.md §4
last_edited_by: agent_rosetta
mission_class: integration
executor_tier: opus            # build/execution: enumerated rows, each with its object; the two ADR drafts (O2) are judgment and may be summoned to fable
executor_runtime: claude
executor_lane: oauth
estimation_class: known-method   # fifth ledger of the same shape (v8.10 · v8.11 · v8.12 · v8.13)
estimated_sessions: 3
token_budget_estimated: "≈150 kT content-load over three sittings (S1 ledger + local rows ≈60 · S2 ADR drafts P5 + P7 ≈45 · S3 re-measure + fire + deploy tail ≈45); v8.13 ran 175 against 90, so the band is wide"
token_budget_actual: "S1 ≈65 kT (orientation + plan ≈20 · re-measure ≈15 · 14 rows ≈15 · ledger + mission ≈10 · close ≈5)"
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

### 2. ADR drafts (P5 · P7)
- **Status**: planned
- **Description**: Draft the root-triad exception ADR (P5) and the `standing_grant` + unattended-envelope ADR(s) (P7) as `proposed`, each with an empty §7.7 block. P7 has no backlog file yet, so file one first. Alternatively, the operator rules at §4 Q3 that v8.14 fires without them.
- **Depends on**: 1, plus the §4 Q3 ruling.

### 3. Re-measure + fire + deploy tail
- **Status**: planned
- **Description**: Run `skill_template_release` steps (a)–(g) against the ledger. Every row is re-measured in both trees first. Each outward act (push = release; spec-mirror deploy) has its own GO.
- **Depends on**: 1, 2 (or Q3).

## Notes

- The vehicle is a standalone mission, not a campaign (operator, plan time 2026-10-21). v8.12 rode as a lane of a multi-lane session, and v8.13 rode as ARCADE P4.
- **GARNIER is still the front.** This mission runs only while the P1.3 readers are absent. A reader sitting pre-empts it.

## Completion Summary

*Fill out when setting `status: completed`.*

## AAR

*Mandatory before setting `status: completed`.*
