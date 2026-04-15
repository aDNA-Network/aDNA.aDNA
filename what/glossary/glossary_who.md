---
type: glossary_entry
created: 2026-04-14
updated: 2026-04-14
status: active
term: "who/"
spec_section: "§3.1, §5.2"
see_also: [triad, what, how, governance file, coordination note]
last_edited_by: agent_stanley
tags: [glossary, core, architecture]
---

# who/

## Plain-Language Definition

The organization layer of an aDNA project — everything about *who* is involved. This includes governance policies, team roles, coordination notes between agents, and community structures.

## Technical Definition

The third leg of the [[what/glossary/glossary_triad|triad]] ontology. `who/` contains organizational information: governance policies, coordination notes, team structures, and optionally contacts, partners, and community docs. Required subdirectories: `coordination/`, `governance/`. The classification question: "WHO is involved?" (aDNA Standard §3.1, §5.2)

## Usage Examples

- In this vault, `who/` contains `governance/` (agent protocol, vision, code of conduct), `coordination/` (cross-agent notes), `community/` (roles and processes), and `adopters/` (persona profiles).
- The `last_edited_by` field in every file's frontmatter is a WHO concept — it tracks which agent or human last touched a piece of content.

## See Also

- [[what/concepts/concept_triad|Triad (concept)]]
- [[what/glossary/glossary_what|what/]] | [[what/glossary/glossary_how|how/]]
- [[what/glossary/glossary_governance_file|Governance File]]
