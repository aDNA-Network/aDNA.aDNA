---
type: glossary_entry
created: 2026-07-02
updated: 2026-09-03   # ⚠ F-aa CORRECTED — the Technical Definition described the tier order as "cheapest → most capable", which is BACKWARDS against the authority it links: `pattern_model_tiered_campaign_execution` §2.1 binds `fable` = strategy/judgment · `opus` = mid-judgment · `sonnet` = mechanical (the same table Operation Carnot ratified, and the §2.5/G2 operator role directive "fable = strategy/planner/reviewer · opus = builder/executor"). ⭐ Found at GR-4 O1, when a draft of new PUBLIC copy took its ordering from this file rather than from the pattern and nearly published a wrong "higher tier" direction; caught by verifying the sentence at P4.1's own mission file instead of at the prose summarising it. ⛔ Routed as `F-aa` and deliberately NOT fixed there — a governance edit at a site-copy objective's tail is this campaign's most-repeated defect. Discharged 2026-09-03 at the ⛩ deploy sitting. ✅ Measured before and after: the contradiction was NEVER PUBLIC (`grep -rl cheapest site/dist/` → 3 paths at O1, all of them that increment's own copy).
status: active
term: "Model-Tiered Execution"
spec_section: ""
see_also: [mission, session, ratification record]
last_edited_by: agent_rosetta
tags: [glossary, operations, execution]
---

# Model-Tiered Execution

## Plain-Language Definition

Model-tiered execution means picking the right size of AI model for each piece of work — a small fast one for routine tasks, a large careful one for hard ones — and writing that choice into the plan *before* the work starts. It is like assigning jobs to a team by skill level: you do not send your most expensive expert to photocopy, and you do not hand the hardest problem to the newest hire. Doing this deliberately, and recording it, saves budget without sacrificing quality.

## Technical Definition

A campaign-execution pattern where each [[what/glossary/glossary_mission|mission]] declares a planned `executor_tier` (`fable` / `opus` / `sonnet` — **judgment → mid-judgment → mechanical**, per the pattern's §2.1 binding table) alongside token-budget fields, and the campaign routes the mission to that model tier. The telemetry join keys — `tier_planned` × `model_actual` × `budget_est` × `budget_actual` — let an after-action review measure whether the tier was right and whether the budget held. **Safety rule:** *downtiering* (routing to a cheaper model than the default) is only safe behind a fresh verification pass — "sonnet-safe ≠ brief-correct," so verify before dispatch. Live at two instances (Operation Carnot, Operation Champollion); the pattern graduates to the standard at its third. Full definition: [[what/patterns/pattern_model_tiered_campaign_execution|pattern_model_tiered_campaign_execution]].

## Usage Examples

- Operation Champollion routes a version-cut authoring mission to `fable` and a currency-sweep mission (needing judgment) to `opus`, each with an estimated token budget the mission file records.
- A mission down-tiered from `opus` to `sonnet` runs a verify step first; the AAR compares `budget_actual` to `budget_est` and flags drift > 2×.

## See Also

- [[what/glossary/glossary_mission|Mission]]
- [[what/glossary/glossary_session|Session]]
- [[what/glossary/glossary_ratification_record|Ratification Record]]
