---
type: idea
idea_id: idea_iii_campaign_pattern
title: "The 'III campaign' — strategic-scale III that builds its own driving context/processes/personas"
status: proposed
priority: medium
effort: plan
created: 2026-06-27
updated: 2026-06-27
last_edited_by: agent_stanley
campaign_id: campaign_looking_glass
upstream_target: III.aDNA
tags: [idea, iii, iii_campaign, pattern, upstream_candidate, looking_glass]
---

# The "III campaign" pattern

## The gap

III ([[III.aDNA/CLAUDE|III.aDNA]], Argus) is **tactical/operational** today. It has two scope levels:

- **Cycle** — [[how/skills/skill_iii_cycle|skill_iii_cycle]] (7-step: measure → orient → select → implement → re-measure → validate → record).
- **Decadal** — [[how/skills/skill_decadal_aar|skill_decadal_aar]] (every 10th cycle; 5-persona ranker + reviewer lenses).

What's missing is the **strategic** level — and, within it, a formal step that today is entirely ad-hoc: **building the context, processes, and personas that drive an III run** before you run it. Which domain packs, which reviewer/adopter roster, which measurement model — these are re-derived per engagement, never templated.

## The idea

> An **III campaign** is a *strategic, goal/requirement-focused, multi-mission deployment of III* that includes **building the driving context/processes/personas**, not merely applying III cycles. Scope ladder: **cycle → decadal → campaign**. One III campaign is a single, integrated, *instrumented* iteration aimed at a concrete goal — and its scaffolding (packs · personas · process · measurement) is a **first-class deliverable**, reusable or graduated afterward.

So an III campaign = **(build the III) → (run the III) → (improve from it)**, where "build the III" is the novel, formalized step.

## What it would formalize (currently manual)

- A **review charter** specifying scope, decision gates, success criteria.
- A **context-composition** decision (which packs / depth / modalities for this goal).
- A **persona/reviewer spec** (which adopters + which specialist reviewers + custom rubrics).
- A **measurement model** (baselines, thresholds, regression detection) set *upfront*.
- A **reusable skill** (e.g. `skill_iii_campaign`) that orchestrates multi-cycle runs against that charter.

## Pilot

[[how/campaigns/campaign_looking_glass/campaign_looking_glass|Operation Looking Glass]] is the **first instance** — applying an III campaign to make the aDNA website a faithful mirror of the aDNA context, while building + capturing the scaffolding. It is deliberately instrumented to extract this pattern.

## Graduation path (where this becomes real)

This is an **upstream-class idea targeting III.aDNA** (III owns the framework). It graduates via the pilot's **terminal AAR**, which authors a campaign-planning mission in `III.aDNA/how/missions/` to (a) review/improve III from pilot learnings and (b) spec/build/improve/test/deploy the III-campaign pattern — likely `III.aDNA/how/campaigns/campaign_h_iii_campaign_pattern/`. Precedent for charter-authoring missions: `III.aDNA/how/missions/plan_campaign_g_consolidation_charter.md`.

## Related

- [[how/campaigns/campaign_looking_glass/campaign_looking_glass|campaign_looking_glass]] (the pilot) · [[how/skills/skill_iii_cycle|skill_iii_cycle]] · [[how/skills/skill_decadal_aar|skill_decadal_aar]] · [[how/campaigns/campaign_rosetta/campaign_rosetta|campaign_rosetta]] (Phase-7 tactical III loop precedent).
