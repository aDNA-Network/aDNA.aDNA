---
type: glossary_entry
created: 2026-04-14
updated: 2026-04-14
status: active
term: "what/"
spec_section: "§3.1, §5.1"
see_also: [triad, how, who, context library]
last_edited_by: agent_stanley
tags: [glossary, core, architecture]
---

# what/

## Plain-Language Definition

The knowledge layer of an aDNA project — everything the project *knows*. This includes reference material, context for agents, decisions that have been made, and domain-specific knowledge objects.

## Technical Definition

The first leg of the [[what/glossary/glossary_triad|triad]] ontology. `what/` contains knowledge objects, the context library, architecture decision records, and domain entities. Required subdirectory: `context/` (the agent context library). The classification question: "WHAT does this project know?" (aDNA Standard §3.1, §5.1)

## Usage Examples

- In this vault, `what/` contains `concepts/`, `tutorials/`, `patterns/`, `glossary/`, `comparisons/`, `use_cases/`, `context/`, `decisions/`, `docs/`, and `lattices/` — all knowledge, no operations.
- The glossary entry you are reading right now lives inside `what/glossary/`, because it answers the question "What does this project know about aDNA terminology?"

## See Also

- [[what/concepts/concept_triad|Triad (concept)]]
- [[what/glossary/glossary_how|how/]] | [[what/glossary/glossary_who|who/]]
- [[what/glossary/glossary_context_library|Context Library]]
