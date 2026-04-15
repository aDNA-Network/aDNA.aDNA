---
type: glossary_entry
created: 2026-04-14
updated: 2026-04-14
status: active
term: "AGENTS.md"
spec_section: "§4.5"
see_also: [governance file, readme_md, triad]
last_edited_by: agent_stanley
tags: [glossary, governance]
---

# AGENTS.md

## Plain-Language Definition

AGENTS.md is a guide written *for agents* that sits in each directory of an aDNA project. It tells the agent what this folder contains, what the important files are, and what conventions to follow. Think of it as a signpost at the entrance to each room in the building.

## Technical Definition

A per-directory agent-facing guide optimized for machine consumption. Every aDNA instance MUST have a root-level AGENTS.md; every directory where agents operate SHOULD have one. Lightweight core: purpose, key files, patterns. Enrichment layers (added as the directory matures): quick reference table, modification guide, dependencies, testing notes, current state. Complements [[what/glossary/glossary_readme_md|README.md]] (human-facing). (aDNA Standard §4.5)

## Usage Examples

- This vault has AGENTS.md files in every significant directory — `what/glossary/AGENTS.md` told the agent building this glossary what naming convention to use (`glossary_{term}.md`), what frontmatter fields to include, and how to keep entries concise.
- The root AGENTS.md doubles as a learning-path navigator, guiding agents through the vault's content in pedagogical order.

## See Also

- [[what/glossary/glossary_governance_file|Governance File]]
- [[what/glossary/glossary_readme_md|README.md]]
- [[what/concepts/concept_governance_files|Governance Files (concept)]]
