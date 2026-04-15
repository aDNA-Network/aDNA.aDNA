---
type: glossary_entry
created: 2026-04-14
updated: 2026-04-14
status: active
term: "Triad"
spec_section: "§3.1"
see_also: [what, how, who, bare triad, embedded triad]
last_edited_by: agent_stanley
tags: [glossary, core, architecture]
---

# Triad

## Plain-Language Definition

The triad is the three-folder structure at the heart of every aDNA project: `what/` (what the project knows), `how/` (how the project works), and `who/` (who is involved). Every piece of project knowledge belongs in exactly one of these three folders.

## Technical Definition

The `what/how/who` directory ontology that organizes all aDNA content. The triad is the universal classifier — any project artifact is sorted by asking: "Is this about WHAT we know, HOW we work, or WHO is involved?" The ontology is deliberately minimal; three categories prevent the sorting ambiguity that arises from finer-grained taxonomies. (aDNA Standard §3.1)

## Usage Examples

- In this vault (`aDNA.aDNA/`), the triad is visible at the project root: `what/` holds concepts and glossary entries, `how/` holds campaigns and sessions, `who/` holds governance and community docs.
- The "question test" — asking which of the three questions a piece of content answers — is the canonical classification method.

## See Also

- [[what/concepts/concept_triad|Triad (concept)]] — full concept deep dive
- [[what/glossary/glossary_what|what/]] | [[what/glossary/glossary_how|how/]] | [[what/glossary/glossary_who|who/]]
- [[what/glossary/glossary_bare_triad|Bare Triad]] | [[what/glossary/glossary_embedded_triad|Embedded Triad]]
