---
type: idea
idea_id: idea_iii_campaign_pattern
title: "The 'III campaign' — strategic-scale III that builds its own driving context/processes/personas"
status: deferred
priority: medium
effort: plan
created: 2026-06-27
updated: 2026-07-02
last_edited_by: agent_rosetta
campaign_id: campaign_looking_glass
upstream_target: III.aDNA
tags: [idea, iii, iii_campaign, pattern, upstream_candidate, looking_glass]
deferred_owner: "III.aDNA (Argus)"
deferred_trigger: "Argus opens campaign_h (handed off via coord memo; Looking Glass pilot + pattern packet done)"
---

# The "III campaign" pattern

> **Graduation status (2026-06-28): `graduating`.** The pilot — [[how/campaigns/campaign_looking_glass/campaign_looking_glass|Operation Looking Glass]] — **completed** (M0–M5, all success criteria PASS). The pattern is extracted into [[how/campaigns/campaign_looking_glass/artifacts/pattern_packet|pattern_packet.md]] and handed to III.aDNA via [[who/coordination/coord_2026_06_28_rosetta_to_argus_iii_campaign_handoff|the Rosetta→Argus handoff memo]] (asks Argus to author `campaign_h_iii_campaign_pattern` → a `skill_iii_campaign` + graduate the `representation_coherence` pack + `claim_tracer` persona). This idea closes when III.aDNA opens that campaign.

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

## Extraction (what the pilot captures)

The pilot is instrumented so the terminal AAR can spec the pattern from evidence, not memory. Four logs, maintained across the campaign (charter §Pilot instrumentation):

- **Scaffolding-needed log** — every time a pack/persona/measure was needed but absent (→ what the pattern must ship by default).
- **Reusable-vs-bespoke ledger** — per scaffolding piece: reused as-is / adapted / net-new, with cost (→ what generalizes vs. what was Looking-Glass-specific).
- **III-primitive-gaps log** — where the tactical primitives ([[how/skills/skill_iii_cycle|skill_iii_cycle]], [[how/skills/skill_decadal_aar|skill_decadal_aar]]) fell short at campaign scale (→ the delta a `skill_iii_campaign` must close).
- **Measurement-model retro** — estimate-vs-actual on the metric tiers; what the gates missed that personas caught, and vice versa (→ how to compose the measurement model upfront).

The net-new pieces (the `representation_coherence` pack + claim-tracer persona; see [[how/campaigns/campaign_looking_glass/artifacts/scaffolding_spec|scaffolding_spec]]) are authored campaign-local and graduate to III.aDNA via the handoff below — keeping "what the pilot invented" cleanly separable.

## Graduation path (where this becomes real)

This is an **upstream-class idea targeting III.aDNA** (III owns the framework). It graduates via the pilot's **terminal AAR**, which authors a campaign-planning mission in `III.aDNA/how/missions/` to (a) review/improve III from pilot learnings and (b) spec/build/improve/test/deploy the III-campaign pattern — likely `III.aDNA/how/campaigns/campaign_h_iii_campaign_pattern/`. Precedent for charter-authoring missions: `III.aDNA/how/missions/plan_campaign_g_consolidation_charter.md`.

## Related

- [[how/campaigns/campaign_looking_glass/campaign_looking_glass|campaign_looking_glass]] (the pilot) · [[how/skills/skill_iii_cycle|skill_iii_cycle]] · [[how/skills/skill_decadal_aar|skill_decadal_aar]] · [[how/campaigns/campaign_rosetta/campaign_rosetta|campaign_rosetta]] (Phase-7 tactical III loop precedent).


## Champollion G0 disposition — X (M1.1, 2026-07-02)

**DEFER.** Owner: III.aDNA (Argus). Trigger: Argus opens campaign_h (handed off via coord memo; Looking Glass pilot + pattern packet done). Ratified at Champollion G0 (D2).
