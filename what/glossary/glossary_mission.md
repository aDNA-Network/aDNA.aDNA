---
type: glossary_entry
created: 2026-04-14
updated: 2026-04-14
status: active
term: "Mission"
spec_section: "§9.1"
see_also: [session, SITREP, template]
last_edited_by: agent_stanley
tags: [glossary, operations]
---

# Mission

## Plain-Language Definition

A mission is a chunk of work too big for a single session. It breaks a goal into trackable objectives, each small enough for one agent session. Missions create a bridge between strategic plans (campaigns) and day-to-day execution (sessions).

## Technical Definition

A multi-session work decomposition unit that lives in `how/missions/`. A mission file MUST include: objectives, acceptance criteria, constraints, an objective list with per-objective status tracking, and dependency declarations. Agents claim objectives by [[what/glossary/glossary_session|session]] and hand off via [[what/glossary/glossary_sitrep|SITREP]]. Missions fit into the execution hierarchy: Campaign → Mission → Objective. (aDNA Standard §9.1-§9.3)

## Usage Examples

- This vault has 19 missions (M00-M19) defined for Operation Rosetta, organized into 7 phases. Each mission file lives in `how/campaigns/campaign_rosetta/missions/` — for example, M15 (this glossary's parent mission) defines 3 objectives spanning 2 sessions.
- Mission handoff: when one session ends mid-mission, the SITREP's "Next Session Prompt" tells the next agent exactly where to pick up.

## See Also

- [[what/glossary/glossary_session|Session]]
- [[what/glossary/glossary_sitrep|SITREP]]
- [[what/concepts/concept_convergence|Convergence (concept)]]
