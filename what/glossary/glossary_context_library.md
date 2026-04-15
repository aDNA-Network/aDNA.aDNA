---
type: glossary_entry
created: 2026-04-14
updated: 2026-04-14
status: active
term: "Context Library"
spec_section: "§10.1"
see_also: [what, triad, frontmatter]
last_edited_by: agent_stanley
tags: [glossary, knowledge]
---

# Context Library

## Plain-Language Definition

The context library is a structured knowledge store inside `what/context/` that agents load before starting domain work. It is organized by topic, with each topic containing focused subtopics. Agents read the index, pick only the subtopics they need, and stay within their token budget — like selecting chapters from a reference book instead of reading the whole thing.

## Technical Definition

The single location for all agent context, at `what/context/`. Organized by topic directories, each with its own AGENTS.md and subtopic files. Three subtypes: `context_research` (synthesized domain knowledge), `context_guide` (prescriptive tool/component guides), `context_core` (foundational project definitions). Each topic's AGENTS.md includes token estimates. Agents MUST read the topic index first and load only needed subtopics. (aDNA Standard §10.1-§10.3)

## Usage Examples

- This vault's context library has 5 topics and 27 subtopics totaling ~75K tokens: `prompt_engineering/`, `adna_core/`, `claude_code/`, `lattice_basics/`, `object_standards/`. An agent working on glossary entries loads `adna_core/` but skips `claude_code/`.
- Context recipes (`what/context/context_recipes.md`) pre-assemble cross-topic bundles for common tasks.

## See Also

- [[what/concepts/concept_context_optimization|Context Optimization (concept)]]
- [[what/concepts/concept_token_selection|Token Selection (concept)]]
- [[what/glossary/glossary_what|what/]]
