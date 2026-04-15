---
type: glossary_entry
created: 2026-04-14
updated: 2026-04-14
status: active
term: "Governance File"
spec_section: "§4.1"
see_also: [agents_md, readme_md, aDNA]
last_edited_by: agent_stanley
tags: [glossary, governance]
---

# Governance File

## Plain-Language Definition

A governance file is one of the ALLCAPS markdown files at the root of an aDNA project that tells agents and humans what the project is, how it works, and what rules to follow. There are five: CLAUDE.md, MANIFEST.md, STATE.md, AGENTS.md, and README.md.

## Technical Definition

Root-level ALLCAPS markdown files that govern an aDNA instance. The governance layer comprises five files: CLAUDE.md (agent root context, MUST exist), MANIFEST.md (static project overview, MUST exist), STATE.md (dynamic operational state, SHOULD exist), [[what/glossary/glossary_agents_md|AGENTS.md]] (agent directory guide, MUST exist), and [[what/glossary/glossary_readme_md|README.md]] (human guide, MUST exist). Together they form the agent's primary orientation documents. (aDNA Standard §4.1)

## Usage Examples

- This vault has all five governance files at its root: `CLAUDE.md` (Rosetta persona + project map), `MANIFEST.md` (architecture overview), `STATE.md` (current phase), `AGENTS.md` (learning-path navigation), and `README.md` (human getting-started guide).
- An agent's startup checklist begins with these files — they are read before any content work begins.

## See Also

- [[what/concepts/concept_governance_files|Governance Files (concept)]]
- [[what/glossary/glossary_agents_md|AGENTS.md]] | [[what/glossary/glossary_readme_md|README.md]]
- [[what/glossary/glossary_conformance_level|Conformance Level]]
