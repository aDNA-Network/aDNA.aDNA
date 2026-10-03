---
idea_id: idea_upstream_campaign_template_tier_budget_fields
type: backlog
title: "template_campaign + template_campaign_mission lack executor_tier and token-budget fields that template_mission carries; mission templates still say type: plan"
category: vault_infra
status: proposed
disposition: "v8.13 lane — convention-to-codify — ⛩ ruled 2026-10-03 (Stanley, accept-all on operator_rulings_packet_20261003 B2); status stays proposed until the gate executes it"
priority: medium
effort: quick
proposed_by: agent_rosetta
proposed_date: 2026-10-03
created: 2026-10-03
updated: 2026-10-03
last_edited_by: agent_rosetta
plan_id:
filed_from: how/missions/artifacts/sitrep_mid_campaign_20261003.md §5 S4
relates: [template_mission, template_campaign, template_campaign_mission, campaign_garnier, pattern_model_tiered_campaign_execution, release_staging_ledger_v8_12]
tags: [backlog, upstream, templates, executor_tier, token_budget, v8_12_candidate]
---

# Campaign-level templates are behind the mission template

## Problem / Opportunity

`how/templates/template_mission.md` carries `executor_tier: fable | opus | sonnet`, `token_budget_estimated` and `token_budget_actual` (ADR-016 / SO-11). **`template_campaign.md` and `template_campaign_mission.md` carry none of them**, so a campaign charter authored from the template cannot declare its tier default or budget unit, and a campaign mission authored from *its* template is less complete than a standalone one. The live GARNIER charter adds `token_budget_estimated`, `token_budget_unit`, `executor_tier_default` and `executor_runtime` by hand — the template should ship what the campaign had to invent. Separately both mission templates still use `type: plan` / `plan_id` (the pre-mission vocabulary); the ontology entity is `missions`.

## Proposed Solution

v8.12 P6 is already "one decision, three templates" — fold these in as additive, optional fields: campaign template gains `executor_tier_default`, `executor_runtime`, `token_budget_estimated`, `token_budget_unit: kT_content_load`; `template_campaign_mission.md` gains the three mission fields verbatim. Ruling needed on `type: plan` → `type: mission` (a vocabulary change — grep every consumer first; **not** a silent rename). Control: every existing instance still validates; `adna_validate --governance` zero drift.

## Discussion

- 2026-10-03 (agent_rosetta): filed from the SITREP; the Primer mission file authored the same sitting carries all three fields and `executor_runtime`, as the instance to point at.

## Decision

—
