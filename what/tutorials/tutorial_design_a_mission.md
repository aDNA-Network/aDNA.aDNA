---
type: tutorial
created: 2026-04-14
updated: 2026-04-14
status: active
level: intermediate
prerequisites: [concept_convergence, pattern_mission_decomposition, concept_token_selection]
estimated_time: "25 minutes"
dual_audience: true
last_edited_by: agent_stanley
tags: [tutorial, intermediate, mission, planning, decomposition]
---

# Design a Mission

## What You'll Build

A mission file that decomposes a multi-session task into claimable objectives. By the end, any agent can pick up your mission, understand what needs to be done, and start working on the next objective.

## Prerequisites

- [[what/concepts/concept_convergence|Convergence Model]] — how the execution hierarchy narrows scope
- [[what/patterns/pattern_mission_decomposition|Mission Decomposition]] — the pattern for breaking work into objectives
- [[what/concepts/concept_token_selection|Token Selection]] — context budgets for mission-scoped work

## Steps

### Step 1: Define the Task

Start with what you're trying to accomplish. Write it as a single sentence:

> "Write 8 pattern files documenting reusable aDNA architectural patterns."

If the sentence describes work that can fit in one session (2-4 hours of agent work), it might not need a mission — just do it. If it spans multiple sessions or involves distinct deliverables, it's a mission.

### Step 2: Identify Deliverables

List every concrete output the mission produces:

| # | Deliverable | File |
|---|------------|------|
| 1 | Question test pattern | `what/patterns/pattern_question_test.md` |
| 2 | AGENTS.md routing pattern | `what/patterns/pattern_agents_md.md` |
| 3 | Base/extension pattern | `what/patterns/pattern_base_extension.md` |
| ... | ... | ... |

**The rule**: every objective must name a specific file or artifact. "Research token optimization" is not an objective. "Write `concept_context_optimization.md`" is.

### Step 3: Map Dependencies

Some objectives must be completed before others. Map the dependency graph:

```
Objective 1 (foundational concepts)
  ↓
Objective 2 (governance concepts — resolves forward refs from Obj 1)
  ↓
Objective 3 (advanced concepts — builds on Obj 1+2 cross-links)
```

If there are no dependencies, objectives can be worked in any order. If there are, document them — an agent claiming Objective 3 needs to know that Objectives 1 and 2 must be done first.

### Step 4: Estimate Context Budget

For each objective, estimate what context needs to be loaded:

```markdown
## Context Dependencies

- `what/context/adna_core/context_adna_core_paradigm_overview.md` (~1K tokens)
- `what/context/adna_core/context_adna_core_context_engineering.md` (~1K tokens)
- M01-M02 concepts for cross-linking (~5K tokens)
- Campaign and mission docs (~5K tokens)
- **Total**: ~12K tokens → fits within 75% rule for 100K window
```

If the total exceeds what a session can hold, the mission has too many objectives or needs to be split.

### Step 5: Write the Mission File

Put it all together using this structure:

```markdown
---
type: plan
plan_id: mission_m04
campaign_id: campaign_rosetta
title: "M04 — Pattern Library"
status: pending
phase: 1
created: 2026-04-14
updated: 2026-04-14
last_edited_by: agent_stanley
tags: [mission, patterns]
context_budget: "~12K tokens"
---

# Mission M04 — Pattern Library

## Intent

{One paragraph: what the mission accomplishes and why it matters.}

## Objectives

| # | Objective | File | Status |
|---|-----------|------|--------|
| 1 | Write question test pattern | pattern_question_test.md | pending |
| 2 | Write AGENTS.md pattern | pattern_agents_md.md | pending |

## Context Dependencies

{List what to load before starting work.}

## Quality Gates

{What must be true before marking an objective complete.}

## Dependencies

{Which missions must be done first.}
```

### Step 6: Validate the Design

| Check | Pass? |
|-------|-------|
| Every objective names a specific deliverable | |
| Dependencies are mapped (or stated as "none") | |
| Context budget fits within 75% rule | |
| Intent is clear enough for a fresh agent to understand | |
| Quality gates are defined | |
| No objective requires more than one session | |

**See it in action**: Open `how/campaigns/campaign_rosetta/missions/mission_m04_pattern_library.md` in this vault. It has 8 objectives across 4 pattern categories, context dependencies listed with specific file paths, and quality gates matching the campaign standard.

## What You Learned

- Missions decompose multi-session work into claimable, session-sized objectives
- Every objective needs a named deliverable — not just a description of activity
- Context budgets determine whether the mission is correctly scoped
- The mission file is a self-contained briefing: any agent can pick it up and work

## Next Steps

- [[what/tutorials/tutorial_build_a_lattice|Build a Lattice]] — compose a workflow from modules (advanced)
- [[what/concepts/concept_convergence|Convergence Model]] — deeper understanding of how missions narrow scope
- [[what/patterns/pattern_context_recipe|Context Recipe]] — pre-define the context assembly for common mission types
