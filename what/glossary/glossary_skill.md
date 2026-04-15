---
type: glossary_entry
created: 2026-04-14
updated: 2026-04-14
status: active
term: "Skill"
spec_section: "§19.3"
see_also: [template, how, mission]
last_edited_by: agent_stanley
tags: [glossary, operations]
---

# Skill

## Plain-Language Definition

A skill is a reusable recipe that an agent can follow step-by-step to accomplish a specific task. Unlike a [[what/glossary/glossary_template|template]] (which is a file blueprint), a skill is a *procedure* — "do step 1, then check X, then do step 2." Skills make agents more capable by codifying expertise into repeatable instructions.

## Technical Definition

A reusable agent procedure stored at `how/skills/skill_{name}.md`. Sections: purpose, prerequisites, steps, verification, rollback, notes. Skills are agent-executable (precise steps, verification checks); processes are human-readable (guidelines, decision trees). Skills are distinct from templates: templates define file *structure*, skills define task *procedures*. Skills can be promoted to lattice registry as `lattice_type: skill`. (aDNA Standard §19.3)

## Usage Examples

- This vault has 15 skills (13 base + 2 project-specific). `skill_dual_audience_review` is a quality gate skill: it walks the agent through checking whether a content file is legible to both developers and non-developers.
- `skill_onboarding` fires automatically on first-run detection — when the vault has no session history and MANIFEST.md still shows `last_edited_by: agent_init`.

## See Also

- [[what/glossary/glossary_template|Template]]
- [[what/glossary/glossary_how|how/]]
- [[what/glossary/glossary_ontology_extension|Ontology Extension]]
