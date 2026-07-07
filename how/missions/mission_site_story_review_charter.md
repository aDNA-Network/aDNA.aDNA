---
plan_id: mission_site_story_review_charter
type: plan
title: "Operation Storyweave — comprehensive adna.network review → multi-session side-campaign charter"
owner: stanley
status: proposed
mission_class: planning
mission_kind: site_review_and_charter
executor_tier: opus
token_budget_estimated: "~200–400 kT across 2–4 sessions (≥200 tier): reference/benchmark inspection + a 16-reviewer × N-surface adversarial red-team (+ 16 adopters + skeptic briefs) + a live Chrome walkthrough of every surface + a storytelling deep-dive + de-dup/prioritize synthesis + charter authoring. Front-load the baseline dossier + the 3 prior campaigns' findings; the red-team is the token sink."
priority: high
created: 2026-07-06
updated: 2026-07-06
last_edited_by: agent_rosetta
tags: [plan, planning_mission, site, adna_network, storyweave, review, charter, red_team, storytelling, deferred]
---

# Mission: Operation Storyweave — site review → side-campaign charter

**Origin.** Operator directive (2026-07-06, post-v8.6 release): rather than execute a front-door refresh now,
**author + queue a comprehensive planning mission** that — in a *fresh session after context-clear, before any other
work in this graph* — reviews adna.network across **every** improvement dimension and produces a **ratified,
multi-session side-campaign** to improve the site in every way, with a north-star of **better telling the story of the
aDNA network / context democracy / federated + collaborative context-graph building**. Working op-name **Storyweave**
(operator may rename). Approved plan: `~/.claude/plans/…` (this session).

## This is planning-only

This mission **produces a plan, not site changes.** Its deliverable is a **ratified campaign charter**; the site
build/deploy happens in the campaign the charter creates. Do **not** edit the `site/` tree in this mission. No `site/`
gate runs here (the charter defines the build campaign's gates).

## Goal (north-star + deliverable)

Raise adna.network to a **best-in-class visual + professional + credible bar** and make it **tell the aDNA story so a
stranger *gets* it and *wants* it** — the network · context democracy · federated + collaborative context-graph
building. **Deliverable:** a ratified, phased, multi-session **side-campaign charter** (see §Deliverable) with a
prioritized improvement backlog spanning every dimension.

## Start here (seed — don't re-derive)

Read **[[artifacts/site_improvement_baseline_2026_07_06|the baseline dossier]]** first — it captures a 3-pass
assessment (site map/IA/tech · design system/visual identity · consolidated Looking-Glass/Meridian/audit findings +
deferred long-tail + the 18 dimensions + the review machinery). **Verify it against live state** (the site + inventory
move between sessions). The site lives at `aDNA.aDNA/site/`; deployed at https://adna.network.

## Scope — review every dimension (across every key surface)

The 18 dimensions (detail in the dossier §4): **Story & message · Visual design & craft · Professionalism & polish ·
Content & copy · Persona red-teaming · IA & navigation · Onboarding & conversion · Accessibility (incl. cognitive) ·
Performance · Credibility & trust · SEO/meta/agent-discovery · Technical & design-system health · Ecosystem completeness
/ missing surfaces · Competitive/reference benchmarking · Mobile/responsive · Motion & delight · Brand & voice coherence
· Completeness-critic (anything else).** Key surfaces: home · what-is-adna · get-started · learn/concepts · vaults +
`/vaults/graph` · network · commons · community · use-cases/persona hubs · reference/spec.

## Method (orchestrate the vault's existing machinery — dossier §5)

1. **`skill_site_design_pipeline` Stages 0–2** (Vision → Reference/Design-DNA → IA) for the front-of-funnel review.
2. **`skill_reference_inspection`** — benchmark best-in-class exemplars (`what/exemplars/sites/_reference_set` + fresh
   WebFetch of comparable open-standard / dev-tool / movement sites) → an updated `front_page_doctrine` + an explicit
   **storytelling doctrine**, each rule with provenance.
3. **Full persona red-team** — the **16 reviewers** + **16 adopters** + **skeptic briefs** (Skeptical Frontier Engineer ·
   Funder/Program Officer), run **adversarially** against every key surface, scored on the **11 ranker dimensions** +
   the WEBSITE.aDNA **axes A–K** rubric, via `skill_decadal_aar` Step 4b + the disagreement ladder (adopter wins the
   gate; reviewer flags feed the priority queue; doctrine tie-breaks; silence → operator → new doctrine rule). *(Run as
   parallel subagents per surface/persona cluster to stay in budget.)*
4. **Live walkthrough (Chrome MCP)** — experience every surface as each persona; capture screenshots + the real render;
   run the 60-second-newcomer read.
5. **Storytelling deep-dive** — a dedicated narrative / message-architecture audit against the north-star: does the site
   land the network / context-democracy / federated-collaborative-context-graph thesis? Where's the arc weak, buried,
   abstract, or missing a surface?
6. **Fold in prior findings** — Looking Glass `findings_register`, Meridian `findings_ledger`, the 9-axis audit, the
   deferred long-tail, the design-system craft debt (seeded in the dossier).
7. **Completeness-critic** — a final adversarial "what dimension / surface / claim did we not review?" pass.

## Deliverable — the ratified side-campaign charter

A campaign charter (`how/campaigns/campaign_<name>/…`, authored at O7) containing:
- **North-star + measurable success criteria** — per-dimension bars + persona-ranker targets (e.g. delight/comprehension
  thresholds; the cognitive-a11y lift; a "60-second newcomer states what/why/how" pass).
- **A prioritized, de-duplicated improvement backlog** across all 18 dimensions — each item scored (severity × impact ×
  effort) and **traceable to a finding/persona**.
- **A phased / decadal structure** (à la WEBSITE.aDNA decades) — improvements grouped into missions/phases, each with a
  per-phase persona gate + the III-cycle + `site/` gate-suite loop + the ratified deploy cadence + operator phase-gates.
- **Instruments + gates** — which personas gate which phase; the operator ratification points.
- **Scope boundaries** — in-campaign vs. **routed to other owners** (Hestia = inventory/data currency; Vitruvius/WebForge
  = deploy-perf + web-surface machinery) vs. deferred, with rationale.

## Objectives

| # | Objective | Output |
|---|-----------|--------|
| O1 | Baseline & scope — read the dossier; **verify vs live**; confirm the surface + dimension list | scope note |
| O2 | Reference / benchmark pass (`skill_reference_inspection`) | storytelling + front-page doctrine deltas |
| O3 | Comprehensive dimension review + **live walkthrough** (every surface) | per-surface × per-dimension findings |
| O4 | **Full persona red-team** (16 reviewers + 16 adopters + skeptic briefs), scored | ranker matrix + reviewer scorecard |
| O5 | Storytelling deep-dive (narrative / message-architecture audit) | story audit + gap list |
| O6 | Completeness-critic + **synthesis** (de-dup, prioritize impact×effort, name missing surfaces) | prioritized backlog |
| O7 | **Author the side-campaign charter** (phased, gated, instrumented) | `campaign_<name>` charter (proposed) |
| O8 | **Operator ratification gate** — present the charter | ratified charter → campaign chartered + executed |

## Operator gates

- **O8 ratification** is the mission's exit gate (§7.7 — agents author the charter; the operator ratifies it). Do **not**
  self-charter or start the build campaign without it.
- Any doctrine change the red-team surfaces (front-page / storytelling rules) is a **proposed** decision until the
  operator signs at O8.

## Standing-order compliance

- **AAR** on completion (SO#5). **Token budget** declared above (SO#11) — log actual + delta in the AAR.
- **`executor_tier: opus`** (judgment-heavy planning; Governance Doctrine). Red-team fan-out may dispatch parallel
  subagents; synthesis + charter authoring stay opus.
- **Archive-never-delete** the review artifacts (SO#6) — the ranker matrices + doctrine deltas are the charter's evidence.

## References the mission consumes (read-only)

- **Seed:** [[artifacts/site_improvement_baseline_2026_07_06|baseline dossier]].
- **Machinery:** `who/reviewers/` + `who/adopters/` · `how/skills/{skill_site_design_pipeline,skill_reference_inspection,skill_decadal_aar,skill_iii_cycle}.md` · `what/design/front_page_doctrine` + `what/exemplars/sites/_reference_set` · `what/decisions/adr_032_brand_register_pivot.md`.
- **Prior art:** `how/campaigns/{campaign_website_adna,campaign_looking_glass,campaign_meridian,campaign_adna_network_audit}/` (findings registers, rubrics A–K, AARs).
- **Target:** the `site/` tree (Astro 6; `src/pages`, `src/components`, `src/styles`, `src/data`, `tests/gates`).
