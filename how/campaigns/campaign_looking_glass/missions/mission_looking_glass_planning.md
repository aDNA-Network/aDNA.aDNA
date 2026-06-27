---
plan_id: mission_looking_glass_planning
type: plan
title: "Plan Operation Looking Glass — design the 3-part III-campaign pilot charter"
owner: stanley
status: planned
campaign_id: campaign_looking_glass
campaign_phase: 0
campaign_mission_number: 0
created: 2026-06-27
updated: 2026-06-27
last_edited_by: agent_stanley
token_budget_estimated: "~120 kT (80-200 tier): charter design across 2 subjects + III-scaffolding spec + measurement model; content-novel"
tags: [plan, campaign, iii_campaign_pilot, planning]
---

# Mission: Plan Operation Looking Glass — the 3-part III-campaign pilot charter

**Campaign**: [[how/campaigns/campaign_looking_glass/campaign_looking_glass|campaign_looking_glass]]
**Phase**: 0 — Planning (pre-charter)
**Mission**: 0 (the charter-authoring mission; runs **next session**, after `/clear`)

## Goal

Turn the [[how/campaigns/campaign_looking_glass/campaign_looking_glass|campaign seed]] into a **ratifiable charter** for the first "III campaign" — a 3-part, instrumented application of III that makes the aDNA website a faithful mirror of the aDNA context **and** builds/captures the context·processes·personas that drive the III. Output is a charter the operator can GO at Decision Point 1; nothing executes until then.

## Exit Gate

A complete, internally-consistent charter that:
1. States measurable success criteria for **website ⇄ context coherence** (what "faithful mirror" means, concretely, for both subjects).
2. Details the **3 parts** as phases with objectives + **human gates**.
3. Specs the **Part-1 III scaffolding** (the novel step): context packs, persona/reviewer roster, process, measurement model — drawn from existing III assets where possible, net-new where needed.
4. Defines the **measurement model** (baselines + how drift/correctness/representation-quality are measured + regression detection).
5. Decomposes Parts 1–3 into **sized missions** (each with `token_budget_estimated` + AAR), and updates the campaign frontmatter (`mission_count`, `estimated_sessions`, `phase_count`).
6. Concretely specs the **terminal-AAR → III.aDNA handoff** (what the III.aDNA campaign-planning mission must cover).
7. Is presented to the operator for **Decision Point 1** ratification.

## Objectives

### 1. Sharpen goal + success criteria
- **Status**: planned
- **Description**: Define "faithful mirror" operationally for Subject A (website) and Subject B (aDNA.aDNA context). What claims/structures/craft must hold; what counts as drift/fabrication/staleness; what "representation-ready context" means.
- **Files**: campaign master (success-criteria section).
- **Depends on**: none.

### 2. Design the 3-part structure (phases + gates)
- **Status**: planned
- **Description**: Flesh out Part 1 (Construct), Part 2 (Review/Inspect+Introspect), Part 3 (Improve) into phases with objectives, dependencies, and human exit gates.
- **Files**: campaign master (phases section).
- **Depends on**: 1.

### 3. Spec the Part-1 III scaffolding (the pattern's novelty)
- **Status**: planned
- **Description**: The **build-the-driving-context/processes/personas** step. Decide: which III domain packs apply (e.g. `web_design`, `vault_maintenance` — survey III.aDNA `what/context/core_domain_packs/`) + any net-new pack for "representation coherence"; which personas/reviewers (survey `who/reviewers/` + `who/adopters/`) + any net-new; the review process; and how this scaffolding is captured as a reusable artifact.
- **Files**: a scaffolding-spec artifact under `how/campaigns/campaign_looking_glass/artifacts/`.
- **Depends on**: 1, 2.

### 4. Define the measurement model
- **Status**: planned
- **Description**: Baselines (current site + context state), the metric tiers (machine-measurable / agent-assessable / persona-assessed — mirror `skill_iii_cycle`), thresholds, and regression detection. Respect the existing `site/` gate harness (281 gates) — extend, don't fight.
- **Files**: measurement-model section/artifact.
- **Depends on**: 1, 3.

### 5. Map pilot instrumentation (pattern extraction)
- **Status**: planned
- **Description**: Decide exactly what to capture during execution so the terminal AAR can spec the "III campaign" pattern: scaffolding-needed log, reusable-vs-bespoke ledger, III-primitive-gaps log, measurement-model retro.
- **Files**: campaign master (instrumentation section) + [[how/backlog/idea_iii_campaign_pattern|idea_iii_campaign_pattern]] update.
- **Depends on**: 3, 4.

### 6. Decompose into sized missions + update frontmatter
- **Status**: planned
- **Description**: Turn the phases into concrete missions with token budgets + AAR requirements; set campaign `mission_count` / `estimated_sessions` / `phase_count`.
- **Files**: campaign master + mission stubs.
- **Depends on**: 2, 3, 4.

### 7. Spec the terminal III.aDNA handoff
- **Status**: planned
- **Description**: Concretely scope the campaign-planning mission the terminal AAR will author in `III.aDNA/how/missions/` (review/improve III + spec/build/test/deploy the III-campaign pattern → likely `campaign_h_iii_campaign_pattern`). Precedent: `III.aDNA/how/missions/plan_campaign_g_consolidation_charter.md`.
- **Files**: campaign master (terminal exit section).
- **Depends on**: 5.

## Campaign Context

### Previous outputs (this seed session, 2026-06-27)
- Campaign seed + CLAUDE.md + this mission stub + [[how/backlog/idea_iii_campaign_pattern|idea_iii_campaign_pattern]].
- [[what/decisions/adr_041_build_scale_role_graph_subtype|ADR-041]] ratified (the site is built by the `Websites.aDNA` build role-graph).
- Verified: live site current (no unpushed/undeployed content); Websites genesis healthy (B3.2).

### Next mission inputs
- The ratified charter unblocks Part 1 (Construct) missions.

## Pre-reads for the planning agent (load these next session)

- This file + [[how/campaigns/campaign_looking_glass/campaign_looking_glass|the campaign seed]] + [[how/campaigns/campaign_looking_glass/CLAUDE|the campaign CLAUDE]].
- [[how/backlog/idea_iii_campaign_pattern|idea_iii_campaign_pattern]] (the pattern definition).
- III today: [[how/skills/skill_iii_cycle|skill_iii_cycle]], [[how/skills/skill_decadal_aar|skill_decadal_aar]], `III.aDNA/STATE.md`, `III.aDNA/what/context/core_domain_packs/`, `who/reviewers/`, `who/adopters/`.
- The website: `aDNA.aDNA/site/` (source) + prior site campaigns `campaign_website_adna` (✅) + `campaign_adna_serious_tool_readiness` (STR, active) + the `site/tests/gates/` harness (281 gates).
- Guardrail: `Websites.aDNA/how/campaigns/campaign_websites_genesis/` (respect B→C→A + pt19; never `sync:vaults`).

## Notes — Next Session Prompt (self-contained)

> **Next session:** Run `mission_looking_glass_planning` in `aDNA.aDNA` (persona Rosetta). Operation Keystone is closed and the SiteForge→Astro naming follow-on is ratified (ADR-041, 2026-06-27). Your job is to **design the charter** for *Operation Looking Glass* — the **pilot of a new "III campaign" pattern** (`how/campaigns/campaign_looking_glass/`): a strategic, instrumented application of III that (a) deeply reviews + improves the aDNA website (`aDNA.aDNA/site/`, live at adna.network) and (b) in parallel reviews the aDNA.aDNA context (`what/`) for consistency/correctness/quality-of-representation — making the site a faithful mirror of the vault. Structure it in **3 parts**: Part 1 Construct (research + design the process + **build the context/packs/personas/measurement that drive the III** — the pattern's novel step), Part 2 Review (run the built III: inspect + introspect → ranked improvement plan), Part 3 Improve (execute + re-measure + validate). It is a **pilot**, so instrument it to extract the pattern; its **terminal AAR must author a campaign-planning mission in `III.aDNA/`** to review/improve III and spec/build/test/deploy the III-campaign pattern. Read this mission's Objectives + Pre-reads, then produce a ratifiable charter and present it for operator GO (Decision Point 1). Guardrails: phase gates are human gates; honor pt19 + the in-flight Websites carve (never `sync:vaults`/hand-edit `vaults.json`); no cross-vault writes (coord memos only); every mission gets a token budget + AAR.

## AAR

*Mandatory before `status: completed`.*
