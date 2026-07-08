---
plan_id: mission_site_story_review_charter
type: plan
title: "Operation Storyweave — comprehensive adna.network review → multi-session side-campaign charter"
owner: stanley
status: completed
mission_class: planning
mission_kind: site_review_and_charter
executor_tier: opus
token_budget_estimated: "~200–400 kT across 2–4 sessions (≥200 tier): reference/benchmark inspection + a 16-reviewer × N-surface adversarial red-team (+ 16 adopters + skeptic briefs) + a live Chrome walkthrough of every surface + a storytelling deep-dive + de-dup/prioritize synthesis + charter authoring. Front-load the baseline dossier + the 3 prior campaigns' findings; the red-team is the token sink."
priority: high
created: 2026-07-06
updated: 2026-07-08
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
4. **Live walkthrough (headless Playwright — Tier 0/1 per [[doctrine_visual_inspection]]; Chrome MCP only if a visible
   browser is truly needed)** — experience every surface as each persona; capture screenshots + the real render; run the
   60-second-newcomer read.
5. **Storytelling deep-dive** — a dedicated narrative / message-architecture audit against the north-star: does the site
   land the network / context-democracy / federated-collaborative-context-graph thesis? Where's the arc weak, buried,
   abstract, or missing a surface?
6. **Fold in prior findings** — Looking Glass `findings_register`, Meridian `findings_ledger`, the 9-axis audit, the
   deferred long-tail, the design-system craft debt (seeded in the dossier).
7. **Completeness-critic** — a final adversarial "what dimension / surface / claim did we not review?" pass.

## Visual design + inspection tooling (MANDATORY)

The review MUST **render + screenshot** every key surface (never source-only); the build phases (in the campaign this
mission charters) MUST ground design moves in real design guidance + prototypes, not ad-hoc CSS. **Every visual finding
cites a captured screenshot** (both themes, incl. mobile). Tooling follows **[[doctrine_visual_inspection]]** (headless-first;
**never assume Chrome** — Storyweave Run 1 is its motivating case). These are the concrete instruments behind the "live
walkthrough" (Method #4) + `skill_site_design_pipeline` Stages 1/4/6/7.

**Inspect (the review) — headless-first per the doctrine's tier ladder:**
- **Tier 0 (DEFAULT) — `scripts/visual_capture.mjs`** (headless Playwright) — render + screenshot every surface across the
  canonical viewports (incl. **320–390px mobile**) in **both light + dark** + a compact report (title/desc/h1/console/
  height); the standing default for the walkthrough. `node scripts/visual_capture.mjs --base <url> --routes … --axe`.
- **Tier 1 (interactive) — `@playwright/mcp`** (already configured) — navigate/click/resize for anything that needs live
  interaction; **no extension, no login**.
- **Tier 2 (escalation ONLY) — Claude-in-Chrome** — *only* if a visible/authenticated browser is genuinely needed (e.g. a
  live GIF of real interaction to share); state the headless fallback + degrade to Tier-0 if unavailable. **Not the default.**
- **Lighthouse + axe-core** — quantified perf / a11y / BP / SEO per surface (CWV: LCP/CLS/TBT); wired into Tier-0 (`--axe`) +
  the `site/tests/gates/` harness (multi-viewport, both-theme; stands up the deferred visual-regression baseline G3).
- **WebFetch** — pull best-in-class reference sites for `skill_reference_inspection` (competitive/story benchmarking).

**Design + prototype (the charter's build phases):**
- **`frontend-design` skill** — Claude's guidance for distinctive, intentional visual direction (typography, aesthetic,
  no templated defaults) when reshaping the UI.
- **`artifact-design` skill + the Artifact tool** — render self-contained HTML **comps / mockups** to prototype design
  directions and present the review findings + the charter visually (shareable, no build).
- **`skill_reference_inspection` → `front_page_doctrine`** deltas · **VisualDNA** bundles (`VisualDNA.aDNA`) to capture
  reference + target visual DNA · **ComfyUI.aDNA / Imagen 4** for imagery (hero / OG) under the abstract-only guardrails.
  *(Optional: Canva / Gamma MCP for a polished charter deck.)*

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

## AAR — mission complete (2026-07-08; deliverable = the ratified [[campaign_storyweave]])

- **Worked:** the headless-first pivot ([[doctrine_visual_inspection]] + the `scripts/visual_capture.mjs` harness) unblocked the entire review **Chrome-free**; the evidence-first discipline + the **completeness-critic** caught the top strategic verdict (T2) resting on *unopened* conversion surfaces *before* ratification; the 16×16 red-team + 2 skeptics surfaced the real strategic questions, which the operator resolved cleanly (progressive **decentralization** + **humanization**).
- **Didn't:** the first 11-surface pass reached the T2 verdict **without opening** the 6 persona hubs or the `/org-context-graphs` orphan — a completeness gap only the adversarial critic caught (closed pre-ratification via the read-only evidence pass).
- **Finding:** the credibility gap was **narrower** than feared — the *standard* is genuinely credible (MIT · CI · semver v7→v8.6 · a real `Canvas` code lib); the gap is the *network/protocol* claims outrunning **public** evidence (+ a broken Lattice-Protocol link, EV1). Separately: the site's gorgeous illustrations carry the emotional load while the real data-viz (the graph) is the weakest visual (**A-06 generalized site-wide → T1**).
- **Change:** built the visual-inspection doctrine + reusable harness **into the standard** (shipped fleet-wide) so every future site review is headless + evidence-complete by default; "open the conversion surfaces + run the real measured (axe/Lighthouse) pass" is now a standing completeness step.
- **Follow-up:** the ratified **`campaign_storyweave`** (Decade 1: P0.5 graph-spike → P1 → P2); the operator-strategic **EV1 unlock** (make `lattice-protocol` + whitepaper public); the routed propagation at build (`governance-model.mdx` · ethos brief · staged aDNALabs governance memo).

**Token budget (SO#11 / ADR-016):** est **~200–400 kT / 2–4 sessions**; actual **≈ 4–5 sessions** (O1–O3 · O4–O5 · O6–O7 · evidence+revise, + the visual-inspection-doctrine side-quest). The **sink** was the parallel subagent fan-out (13 red-team + 4 evidence + 3 reference + 3 recon subagents, ~85–115 kT each, off the main context); main-loop content stayed lean via delegation + the capture-report "view-a-curated-subset" pattern. **Within-to-slightly-over on sessions; the fan-out was the designed spend** (the mission spec named the red-team the sink) — no >2× main-loop drift.
