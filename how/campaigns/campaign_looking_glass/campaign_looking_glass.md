---
campaign_id: campaign_looking_glass
type: campaign
title: "Operation Looking Glass — III-Campaign Pilot (aDNA website ⇄ context coherence)"
owner: stanley
status: planning
phase_count: 3
mission_count: 1   # planning mission only; execution missions are designed BY the planning mission (next session)
estimated_sessions: "TBD — set by the planning mission"
calibrated_sessions: ""
estimation_class: "content-novel"
priority: medium
created: 2026-06-27
updated: 2026-06-27
last_edited_by: agent_stanley
tags: [campaign, iii, iii_campaign_pilot, website, context_coherence, looking_glass]
---

# Campaign: Operation Looking Glass — III-Campaign Pilot

> **SEED, not a charter.** This file orients the work; the full charter (objectives, phases, gates, the III scaffolding spec, the measurement model) is authored **next session** by [[how/campaigns/campaign_looking_glass/missions/mission_looking_glass_planning|mission_looking_glass_planning]]. Created during `session_stanley_20260627T182942Z_naming_ratify_iii_pilot_seed`.

## Goal

Make the aDNA website (`aDNA.aDNA/site/`, live at **adna.network**) a **faithful, correct, and compelling mirror of the actual aDNA context** (`aDNA.aDNA/what/` and the wider vault) — and, in doing so, **pilot a new strategic pattern: the "III campaign."** When this campaign is complete: (1) the website's claims, structure, and craft demonstrably match and do justice to what the vault actually is; (2) the aDNA.aDNA context it draws from is itself consistent, correct, and representation-ready; and (3) we have a *proven, reusable pattern* for running III at campaign scale — including the part III doesn't formalize today: **building the context, processes, and personas that drive an III before you run it.**

## Context

Two threads converge here:

- **The website ⇄ context coherence need.** adna.network is the network's public face. Prior site campaigns (`campaign_website_adna` ✅ 2026-06-21; STR E5/E6) raised it to frontier-grade *as a site*. What hasn't had a dedicated pass is the **two-way coherence between the website and the vault it represents**: does the site say true things about the context, is anything drifted/stale/fabricated, and is the underlying aDNA.aDNA context itself clean enough to represent well? This is an *inspect → introspect → improve* problem on both the representation and its source.
- **The III-pattern gap.** III today ([[III.aDNA/CLAUDE|III.aDNA]], Argus) is **tactical/operational only**: [[how/skills/skill_iii_cycle|skill_iii_cycle]] (7-step single cycle) + [[how/skills/skill_decadal_aar|skill_decadal_aar]] (every-10th-cycle 5-persona ranker). Setting up *which context packs, which personas/reviewers, which measurement model* drive a given III run is **ad-hoc**, re-derived per engagement. There is no campaign-scale "III campaign" pattern, and no formal step for **building the driving scaffolding**.

This campaign is the **first instance** ("pilot") of an III campaign, deliberately instrumented to extract the pattern. It builds on [[what/decisions/adr_041_build_scale_role_graph_subtype|ADR-041]] (just ratified — the website is built by the `Websites.aDNA` build role-graph) and the Phase-7 III loop precedent in [[how/campaigns/campaign_rosetta/campaign_rosetta|campaign_rosetta]].

## The pattern being piloted — "III campaign" (definition)

> An **III campaign** is a *strategic, goal/requirement-focused, multi-mission deployment of III* that includes **building the context / processes / personas that drive the III**, not merely applying III cycles. It sits a level above cycle (tactical) and decadal (operational): cycle → decadal → **campaign**. A single III campaign is one integrated, instrumented iteration aimed at a concrete goal; its scaffolding (packs, personas, measurement) is a first-class deliverable, reusable or graduated afterward.

Full concept note: [[how/backlog/idea_iii_campaign_pattern|idea_iii_campaign_pattern]].

## Scope

### In scope
- **Subject A — the website** (`aDNA.aDNA/site/`): review + improve for correctness, currency, structure, and craft *as a representation of the vault*.
- **Subject B — the aDNA.aDNA context** (`what/`): parallel review for consistency, correctness, and representation-readiness; fix drift at the source, not just on the surface.
- **The III scaffolding** (Part 1 deliverable): the context packs, persona/reviewer roster, process, and measurement model that drive this III — built, used, and captured for pattern extraction.
- **Pilot instrumentation**: explicit capture of what the pattern needs (see Terminal exit).

### Out of scope
- Rebuilding web-building *infrastructure* — that is `Websites.aDNA`'s `campaign_websites_genesis` (B→C→A). This campaign *consumes* the live site; it does not carve the role-graph.
- Force-merging the III-campaign pattern into III.aDNA — that is the **terminal AAR's** handoff (below), executed in III.aDNA's own lane.

### Out-of-scope guardrail (critical)
**Honor pt19 / the in-flight Websites carve.** The site's derived data (`vaults.json`, `install_truth.json`, etc.) is regenerated by Hestia's pt19 machinery; the `siteforge/ → websites/` consumer re-points are mid-flight (Campaign C). **Never run `sync:vaults` or hand-edit `vaults.json`**, and sequence any site change around the Websites carve. Coordinate via memo, don't front-run.

## Phases (provisional — the planning mission ratifies/refines)

The user's three parts map onto III at strategic scale:

1. **Part 1 — Construct** *(research / design-process / build-tools)*: research the domain (web-quality + context-representation); design the review process; **build the tools + the III scaffolding (context packs + persona/reviewer roster + measurement model) that drive the III.** This is the novel step the pattern formalizes.
2. **Part 2 — Review** *(use context to inspect / introspect / plan-improvements)*: run the built III across Subject A + Subject B; introspect/calibrate; produce a ranked, evidence-backed improvement plan.
3. **Part 3 — Improve** *(conduct improvements)*: execute the planned improvements on website + context; re-measure; validate; record. Deploy site changes through the gated, pt19-respecting path.

**Phase exit gates are human gates** (Standing Order 1).

## Decision Points

| # | When | Decision | Status |
|---|------|----------|--------|
| 1 | End of the planning mission (next session) | Operator ratifies the full charter (objectives, phases, gates, scaffolding spec, measurement model) before Part 1 executes | pending |
| 2 | Part 1 → Part 2 | Scaffolding (packs/personas/measurement) is built + good enough to drive the review | pending |
| 3 | Part 2 → Part 3 | The ranked improvement plan is approved | pending |

## Terminal exit / AAR charge (the III.aDNA handoff)

On completion, the campaign's closing AAR **must author a campaign-planning mission in `III.aDNA/how/missions/`** (staged as a coord/memo from here — no III.aDNA writes mid-pilot) to:
1. **Comprehensively review/improve III** (function · context · processes) from this pilot's learnings; and
2. **Spec / build / improve / test / deploy the "III campaign" pattern** itself (likely → `III.aDNA/how/campaigns/campaign_h_iii_campaign_pattern/`).

Precedent for "a mission that authors a campaign charter": `III.aDNA/how/missions/plan_campaign_g_consolidation_charter.md`.

## Related / cross-links

- [[how/backlog/idea_iii_campaign_pattern|idea_iii_campaign_pattern]] — the pattern concept (graduation target: III.aDNA).
- [[how/skills/skill_iii_cycle|skill_iii_cycle]] · [[how/skills/skill_decadal_aar|skill_decadal_aar]] — the tactical/operational III primitives this wraps.
- [[how/campaigns/campaign_adna_serious_tool_readiness/campaign_adna_serious_tool_readiness|STR]] — same north-star UX goal; **separable, not absorbed** (cross-link, coordinate).
- `Websites.aDNA/how/campaigns/campaign_websites_genesis/` — the web-building infra (the site is built with it; respect its B→C→A order + pt19).
- [[what/decisions/adr_041_build_scale_role_graph_subtype|ADR-041]] — the build role-graph doctrine ratified alongside this seed.
- `who/reviewers/` + `who/adopters/` — the persona libraries the scaffolding draws on.

## Notes

- Working name **"Operation Looking Glass"** + slug `campaign_looking_glass` are provisional — the planning mission may rename (the website is the mirror; III is structured self-inspection).
- This is a **pilot**: optimize for *learning the pattern* as much as for the website/context outcome. Where a choice is bespoke-vs-reusable, prefer reusable and note the cost.

## Campaign AAR

*Mandatory before `status: completed`. Must additionally discharge the Terminal exit / AAR charge above (author the III.aDNA campaign-planning mission).*
