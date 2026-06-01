---
type: backlog_idea
status: proposed
priority: medium
created: 2026-06-01
last_edited_by: agent_hestia
tags: [backlog, idea, upstream, skill, project_fork, bootstrap_interview, exemplar, node_adna, hestia_origin, m25_origin]
---

# Idea — Wire Exemplar-HOME Invocation into the `.adna/` Bootstrap Skills

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
  `{{banner_image}}`, `{{banner_title}}` — plus the generator runtime params `CANVASFORGE_CODE` +
  `TOPOLOGY_GENERATED_DATE`.

## References

- Local demo hook: `Home.aDNA/how/skills/skill_project_fork.md` Step 4.5 (M25 D1).
- Bundle + var catalog: `Home.aDNA/how/templates/template_node_adna_exemplar/{README,SUBSTITUTIONS}.md`.
- Mission: `mission_lattice_comp_m25_template_node_adna_exemplar.md`.
