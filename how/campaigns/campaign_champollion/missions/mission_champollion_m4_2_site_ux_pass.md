---
plan_id: mission_champollion_m4_2_site_ux_pass
type: plan
title: "M4.2 — Site UX pass (design pipeline + reviewer personas) + Ring-1 site backlog + graduated seed-skill riders"
owner: stanley
status: completed
campaign_id: campaign_champollion
campaign_phase: 4
campaign_mission_number: 2
mission_class: implementation
executor_tier: opus
token_budget_estimated: "58 kT (charter 50 + Mode-B bookend allowance ~+15% per G3 D4 — implementation-class rows carry the review-amendment overhead observed in P3; incl. ~10 kT for the two D2c seed-skill riders)"
token_budget_actual: "~50 kT (opus builder ~41 + fable bookends ~9) vs 58 est — −14%; the G3 D4 +15% bookend allowance went unused (mature site, findings clustered; seed idea files carried complete instance tables)"
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
tags: [plan, campaign, champollion, p4, site, ux, reviewer_personas, seed_skills, m4_2]
---

# Mission M4.2 — Site UX pass + seed-skill riders

**Campaign**: [[../campaign_champollion|campaign_champollion]] · **Executor: opus (build) with fable bookends** · **Ring 1** · **Mode B**.

## Objective

Run a focused UX pass over the live site source (`site/`, deploys to adna.network) through **`skill_site_design_pipeline`'s review stages** with the reviewer personas (Newcomer Stress-Tester · Design Critic · Information Architect · Accessibility Auditor — roster `who/reviewers/AGENTS.md`), execute the **Ring-1 site backlog items** from the adjudication ledger plus M4.1's (b)-routed site rows, and — **D2c riders (G3-ratified)** — author the two graduated seed skills whose lessons came from this exact site work: `skill_documentation_layout_props_additive_extension` + `skill_inline_svg_raw_import_currentColor_inheritance`.

## Work

1. **Scope pull**: collect the Ring-1 site items from [[../artifacts/backlog_adjudication_ledger|the adjudication ledger]] + any M4.1 (b)-routes marked for M4.2 (check M4.1's artifact if it ran first — sequence M4.1 → M4.2 preferred).
   > **M4.1 riders (landed 2026-07-02, fable-finalized)**: **N-07 site-half / [[../artifacts/findings_ledger|F-CHM-210]]** — the v8.3 image ships no learning on-ramp and points newcomers only at adna.network, so **the site must actually BE the "learn more" home**: a newcomer who just cloned the image needs a findable learning-path entry (start-here surface) that matches what they have (the image's shape, not the dev vault's). Persona pass (work item 2) should walk that surface AS the image-holding newcomer. Evidence: [[../artifacts/newcomer_stress_test|newcomer_stress_test]] §2 leg 4, rows N-06/N-07.
2. **Persona review pass**: each of the 4 personas reviews the site's key surfaces (landing, learning path entry, graph page, install/quickstart) per `skill_site_design_pipeline`'s review-stage rubric; findings → one ranked list.
3. **Execute**: fix the Ring-1 + review findings in `site/` source. Build-verify locally (`npx astro build` — NOT `npm run build`; gate suite if present). **No deploy** — deploys are operator-gated (VERCEL_TOKEN via broker; separate act).
4. **Seed-skill riders**: author `how/skills/skill_documentation_layout_props_additive_extension.md` + `how/skills/skill_inline_svg_raw_import_currentcolor_inheritance.md` from their backlog idea files (each carries the re-derived instance table + the lesson paragraph) — house skill format (`skill_type: agent`, trigger line, recipe steps, instance citations). Update the two idea files (`accepted → completed`, pointer to the skill).
5. Standing sweep clause: out-of-scope hits → manifest.

## Acceptance criteria

- [x] Persona findings ledgered + Ring-1 site items executed (or explicitly re-routed with reason); `npx astro build` green with zero new warnings. *(6 persona findings: 3 fixed / 2 routed / 1 declined-deliberate; Ring-1: 2 executed [RSS · banner both-sides] / 4 rerouted-with-reason; 3 green builds incl. the fable's independent third.)*
- [x] Both seed skills live in `how/skills/` (house format, instance-cited); idea files closed; skills-count surfaces re-censused (CLAUDE.md/MANIFEST/AGENTS counts — census rule, never inherit). *(48 → 50 = 21 base + 29 project; 4 surfaces + CLAUDE.md table; `--governance` zero drift.)*
- [x] No deploy attempted; site changes are source-only, build-verified.
- [x] Fable review passed; `adna_validate` FULL PASS; explicit-path commit. *(Review PASS + 2 review findings: missing `concept_dual_audience` site page → M4.4 rider; banner mirror ruled + archived. Artifact §Fable review record.)*

## Guardrails

`site/` source edits only — no deploy, no DNS, no Vercel calls (operator-gated; token stays in the broker, NAMES-ONLY) · never co-run Lighthouse with the gate preview server (flake — WEBSITE campaign lesson) · skill authoring follows the graduated evidence (the idea files' instance tables), not invention · skills-count census after authoring (48 → 50; true every surface that states the count) · no `.adna/` writes · no push (batches at G4).

## Verification surface

`npx astro build` (from `site/`) green; `python3.13 what/lattices/tools/adna_validate.py . --governance` (skill counts are governance-checked — expect the count regex to need the census update, do it in the same commit); fable bookend.

## Escalation triggers

- A UX finding requires information-architecture restructuring beyond page-level fixes → G4 input, do not restructure unilaterally.
- Build breaks in a way that implicates the Astro/deps layer (not this mission's edits) → halt, report, do not upgrade dependencies.
- Budget > 75 kT → halt and report.
