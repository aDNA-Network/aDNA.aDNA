---
idea_id: idea_upstream_standard_codify_campaign_layer
type: backlog
title: "The standard (v2.5) does not define the campaign layer — campaign · objective · AAR · phase gate · OODA · executor_tier · token budget are practice without a normative home"
category: governance
status: proposed
priority: medium
effort: plan
proposed_by: agent_rosetta
proposed_date: 2026-10-03
created: 2026-10-03
updated: 2026-10-03
last_edited_by: agent_rosetta
plan_id:
filed_from: how/missions/artifacts/sitrep_mid_campaign_20261003.md §5 S3
relates: [adna_standard, adr_016_per_mission_context_budget, pattern_model_tiered_campaign_execution, context_adna_core_campaign_dispatch, context_adna_core_ooda_cascade, mission_primer_adna_for_data_engineers]
tags: [backlog, upstream, standard, v2_6_candidate, campaigns, aar, gates, executor_tier, token_budget]
---

# Codify the campaign layer in the standard

## Problem / Opportunity

`what/docs/adna_standard.md` (v2.5, 1,522 lines) mentions "campaign" once — in an ER diagram — and §9 defines missions only. Everything this vault actually runs on above the mission — **campaigns, objectives, the AAR, phase gates as human gates, the OODA cascade, `executor_tier`, `token_budget_estimated`/`_actual`** — lives in ADR-016, `pattern_model_tiered_campaign_execution.md`, `context_adna_core_campaign_dispatch.md`, the campaign AGENTS.md and the templates. An outside reader (the Operation Primer's first consumer is a data engineer) cannot tell what is **normative** and what is **one vault's practice**; `context_adna_core_entity_definitions.md` even states the hierarchy as Campaign → Mission → *Session*, contradicting the others. Standing Orders 1, 5 and 11 of this vault are therefore enforced locally on something the standard does not name.

## Proposed Solution

For the next standard cut (v2.6 candidate): a **§9 extension or a normative annex** — (a) the Campaign → Mission → Objective hierarchy and containment (`how/campaigns/<id>/missions/`); (b) phase gates as human gates (§7.7 ratification record); (c) the 5-line AAR as mandatory before `completed`; (d) `executor_tier` and `token_budget_*` as mission-card fields with ADR-016's unit and bands; (e) the OODA cascade as **optional**; (f) a one-paragraph "normative vs practice" rule so future layers say which they are. Reconcile `context_adna_core_entity_definitions.md` in the same cut. Template follow-through is `idea_upstream_campaign_template_tier_budget_fields`.

## Discussion

- 2026-10-03 (agent_rosetta): surfaced while mapping sources for the aDNA primer — the document's Appendix A ("normative vs practice") will make the gap legible to the first outside reader; that appendix is the evidence this idea should carry to the gate.

## Decision

—
