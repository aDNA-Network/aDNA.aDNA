---
type: backlog_idea
status: proposed
priority: high
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
tags: [backlog, idea, upstream, templates, model_tiering, executor_tier, token_budget, adr_016, champollion]
---

# Idea — Upstream `executor_tier` + ADR-016 budget fields into the mission template

## Problem / Opportunity

Two drifts converge (Champollion finding [[../campaigns/campaign_champollion/artifacts/findings_ledger|F-CHM-002]]):

1. **SO-11/ADR-016 mandate per-mission `token_budget_estimated`, but no template carries the field** — `template_mission.md` actually contains the *plan* template (`plan_id`, `type: plan`, generic task list), and live campaign missions (Hearthstone P0–P5, STR) omit budgets in frontmatter. The doctrine exists; the template never materialized it.
2. **Model-tiered execution is now live practice in two base-layer campaigns** (Operation Carnot / LatticeProtocol.aDNA and Operation Champollion / this vault) per [[../../what/patterns/pattern_model_tiered_campaign_execution|pattern_model_tiered_campaign_execution]], but the routing contract (`executor_tier`) has no template home, so third-party adopters would have to reverse-engineer it from our campaigns.

## Proposal

Fold into the standard's template set (ships **only** through the operator-gated `skill_template_release`; ratification ADR at Champollion P2/P6):

- **Option A (recommended)** — author a true `template_mission.md` carrying the live campaign-mission convention (`plan_id: mission_<name>`, `type: plan`, `campaign_id`, `campaign_phase`, `campaign_mission_number`, `mission_class`) **plus** the new contract fields:
  ```yaml
  executor_tier: fable | opus | sonnet   # planned routing class (see pattern)
  token_budget_estimated: "<kT, per ADR-016>"
  ```
  …and rehome the current plan-shaped content as `template_plan.md` (it is one, verbatim).
- **Option B** — amend the existing file in place with the same fields, accepting the mission/plan naming blur.
- Companion: session template gains `executor_tier` + `token_budget_actual` (actuals side of the contract); AAR template gains the per-tier estimate-vs-actual line.

## Value

- Closes a doctrine-vs-template gap the validator cannot currently see.
- Makes the model-tiering pattern adoptable by copy (template) instead of by archaeology (reading our campaigns).
- Emits the join keys Context.aDNA's telemetry corpus needs (tier planned × model actual × budget est × actual) — the measurable-routing loop described in the pattern §3.

## Trigger / Gate

Pattern graduation discipline: **2 instances live (Carnot, Champollion); fold ratifies at the 3rd instance** or earlier by operator decision at a Champollion gate. Staged for the next `skill_template_release` batch either way.
