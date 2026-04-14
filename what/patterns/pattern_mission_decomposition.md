---
type: pattern
created: 2026-04-14
updated: 2026-04-14
status: active
pattern_category: operational
applies_to: [campaigns, missions, sessions]
last_edited_by: agent_stanley
tags: [pattern, mission_decomposition, convergence, execution_hierarchy, operational]
---

# Mission Decomposition — Breaking Work Into Claimable Objectives

## Problem

A task too large for a single agent session — writing 13 concept files, or building a full documentation site — can't be executed atomically. Without decomposition, agents either attempt too much (exceeding context limits, losing coherence) or work without a plan (duplicating effort, missing dependencies).

## Solution

Decompose large tasks into **missions**, each containing **objectives** that fit a single session (§9). The execution hierarchy is:

```
Campaign → Mission → Objective
(strategic)  (tactical)  (session-sized)
```

**Mission design rules**:

| Principle | Rule |
|-----------|------|
| Session-sized objectives | Each objective must be completable in one agent session |
| Explicit deliverables | Every objective names a specific output file or artifact |
| Dependency ordering | Objectives list dependencies — what must be done first |
| Context budget | The mission declares what context to load, staying within the 75% rule |
| Claimability | Any agent can pick up any unclaimed objective with the mission file as briefing |

**The decomposition process**:
1. Start with the campaign goal (e.g., "build a self-referential aDNA documentation vault")
2. Identify natural work boundaries (e.g., concepts, patterns, tutorials are different missions)
3. Within each mission, list specific deliverables as objectives
4. Order objectives by dependency (foundational concepts before advanced ones)
5. Estimate context budget — if a mission needs more than ~15K tokens of domain context, it's too broad

**Handoff continuity**: Each mission file contains enough context for a fresh agent to continue. The intent, objectives, context dependencies, and handoff notes create a self-contained briefing.

## When to Use

- Any task expected to take more than one session
- Work that involves multiple related deliverables
- When coordination between sessions (or agents) is needed
- Campaign planning — every campaign is a set of missions

## Example: This Vault

Operation Rosetta decomposes into 15 missions across 5 phases. Phase 1 alone has 5 missions:

| Mission | Objectives | Why Separate |
|---------|-----------|-------------|
| M01 | 3 foundational concepts | Must exist before anything can cross-link to them |
| M02 | 4 governance concepts | Resolves M01 forward references |
| M03 | 6 advanced concepts | Builds on M01+M02 cross-linking targets |
| M04 | 8 patterns | Different template, different AGENTS.md rules |
| M05 | 5 comparisons | Requires full concept vocabulary from M01-M03 |

Each mission file (e.g., `how/campaigns/campaign_rosetta/missions/mission_m04_pattern_library.md`) lists specific files as objectives, declares context dependencies, and ends with handoff notes and an AAR. A fresh agent reading only the mission file can claim the next objective and begin work.

The decomposition also demonstrates [[what/concepts/concept_convergence|convergence]]: the campaign scope (~100+ files) narrows to a mission scope (~8 files) narrows to a session objective (1 file at a time).

## Anti-Pattern

**Monolithic missions**: A mission with 20 objectives spanning 5 sessions. By session 3, the agent has lost context on the mission's intent. Split into smaller missions with clear boundaries.

**Objectives without deliverables**: "Research token optimization" is not an objective — it has no verifiable output. "Write `concept_context_optimization.md`" is an objective — the deliverable is the file.

**Missing dependency ordering**: Writing advanced concepts before foundational ones, then discovering forward references can't be resolved. Map dependencies before starting.

**Skipping the AAR**: Completing a mission without the 5-line After-Action Review. The AAR captures what worked, what didn't, and what the next mission should know. Without it, the same mistakes repeat.

## Related

- [[what/concepts/concept_convergence|Convergence Model]] — the structural principle that makes decomposition necessary and effective
- [[what/concepts/concept_token_selection|Token Selection]] — the context budget discipline that sizes objectives to sessions
- [[what/patterns/pattern_agents_md|AGENTS.md Routing]] — how agents navigate to their mission's working files
