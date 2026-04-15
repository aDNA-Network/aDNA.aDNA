---
type: glossary_entry
created: 2026-04-14
updated: 2026-04-14
status: active
term: "how/"
spec_section: "§3.1, §5.3"
see_also: [triad, what, who, session, mission, template]
last_edited_by: agent_stanley
tags: [glossary, core, architecture]
---

# how/

## Plain-Language Definition

The operations layer of an aDNA project — everything about *how* the project works. This includes mission plans, session records, templates, skills, pipelines, and campaign coordination.

## Technical Definition

The second leg of the [[what/glossary/glossary_triad|triad]] ontology. `how/` contains operational infrastructure: missions, sessions, templates, and optionally pipelines, skills, backlog, and tasks. Required subdirectories: `missions/`, `sessions/`, `templates/`. The classification question: "HOW does this project work?" (aDNA Standard §3.1, §5.3)

## Usage Examples

- In this vault, `how/` contains `campaigns/` (Operation Rosetta), `missions/`, `sessions/`, `templates/` (32 files), `skills/` (15 recipes), `pipelines/`, `backlog/`, and `quests/`.
- A mission file lives in `how/` because it describes *how* work gets decomposed and tracked — it is an operational artifact, not knowledge.

## See Also

- [[what/concepts/concept_triad|Triad (concept)]]
- [[what/glossary/glossary_what|what/]] | [[what/glossary/glossary_who|who/]]
- [[what/glossary/glossary_session|Session]] | [[what/glossary/glossary_mission|Mission]]
