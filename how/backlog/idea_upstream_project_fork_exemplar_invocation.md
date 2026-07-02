---
type: backlog_idea
status: accepted
priority: medium
created: 2026-06-01
updated: 2026-07-02
last_edited_by: agent_rosetta
tags: [backlog, idea, upstream, skill, project_fork, bootstrap_interview, exemplar, node_adna, hestia_origin, m25_origin]
fold_batch: champollion_m6_1_rc
---

# Idea — Wire Exemplar-HOME Invocation into the `.adna/` Bootstrap Skills

> **Ratified 2026-06-18** — accepted at Operation Hearthstone P0 (Operator Decision 1); the inventory+identity promotion is decided in [[adr_035_inventory_identity_base_entity_types]]; lands in `.adna/` at Hearthstone P4/P5 via skill_template_release.
>
> **P4 wiring landed in the dev graph 2026-06-19** — interview **Topic 6** (theming, T1-T5) + the **Step-9 exemplar branch** with the `>`-prefix callout-fold profile authored in `aDNA.aDNA/how/skills/skill_node_bootstrap_interview.md` (dev mirror established this phase — the skill was previously `.adna/`-only); `--exemplar-home` + **Step 4.5** overlay added to `aDNA.aDNA/how/skills/skill_project_fork.md`. Ships to `.adna/` at **P5** via `skill_template_release`. Proposal (1)+(2) below = implemented.

## Problem / Opportunity

M25 produced a reusable exemplar HOME bundle (`template_node_adna_exemplar/`; see
`idea_upstream_node_exemplar_template.md`) but the two skills that would consume it are canonical in
read-only `.adna/` (Standing Rule 1):

- `.adna/how/skills/skill_node_bootstrap_interview.md` — its Step 9 already substitutes `HOME.md {{VARS}}`,
  but only against the base `.adna/HOME.md`; it does not know about the exemplar overlay or the theming vars.
- `.adna/how/skills/skill_project_fork.md` — has no exemplar-mode path.

Per M25 D1, the **local** `Home.aDNA/how/skills/skill_project_fork.md` was given a worked `--exemplar-home`
hook (Step 4.5) as a concrete demonstration, but the canonical wiring must land upstream to take effect for
all nodes.

## Proposal

1. **`skill_node_bootstrap_interview.md`**: at/after the identity questions, add a small theming block
   (persona accent triple + greeting + banner) and point Step 9 at the exemplar `HOME.template.md` +
   the CSS/generator/skeleton materialization when the node opts into the exemplar profile. Default accents
   per-persona (lookup table in the bundle's `SUBSTITUTIONS.md`).
2. **`skill_project_fork.md`**: add the `--exemplar-home` parameter + exemplar-mode detection (auto-implied
   for `Home.aDNA`-class node forks) + a post-fork overlay step. Mirror the local demo in
   `Home.aDNA/how/skills/skill_project_fork.md` Step 4.5.

## Scope / considerations

- **Gated on** `idea_upstream_node_exemplar_template.md` (the bundle must live in `.adna/` first).
- Keep the exemplar profile **opt-in** — a fresh node that declines gets the plain base `.adna/HOME.md`.
- The overlay is **post-fork** (the base structure + base HOME must exist first), then the themed HOME
  replaces the base HOME; sequencing matters (don't substitute before the fork creates the dir).
- New interview vars to standardize: `{{accent_primary_hex}}`/`secondary`/`tertiary`, `{{persona_greeting}}`,
  `{{banner_image}}`, `{{banner_title}}` — plus the generator runtime params `CANVAS_CORE_HOME`
  (canonical post-P3 CanvasForge→Canvas repoint; deprecated alias `CANVASFORGE_CODE`) +
  `TOPOLOGY_GENERATED_DATE`.

## References

- Local demo hook: `Home.aDNA/how/skills/skill_project_fork.md` Step 4.5 (M25 D1).
- Bundle + var catalog: `Home.aDNA/how/templates/template_node_adna_exemplar/{README,SUBSTITUTIONS}.md`.
- Mission: `mission_lattice_comp_m25_template_node_adna_exemplar.md`.


## Champollion G0 disposition — F (M1.1, 2026-07-02)

**ACCEPT → template-fold.** Marked `fold_batch: champollion_m6_1_rc` — M6.1 assembles the release candidate from this marker (nothing ships to `.adna/` here). Ratified at Champollion G0 (D2).
