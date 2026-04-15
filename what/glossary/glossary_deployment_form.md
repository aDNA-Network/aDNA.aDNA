---
type: glossary_entry
created: 2026-04-14
updated: 2026-04-14
status: active
term: "Deployment Form"
spec_section: "§3.4"
see_also: [bare triad, embedded triad, triad]
last_edited_by: agent_stanley
tags: [glossary, architecture, deployment]
---

# Deployment Form

## Plain-Language Definition

The deployment form is *how* you physically set up the aDNA folders in your project. There are two choices: bare (folders at root) or embedded (folders inside `.agentic/`). Pick one and stick with it — every project uses exactly one.

## Technical Definition

The physical instantiation strategy for the [[what/glossary/glossary_triad|triad]]. Two forms are defined: [[what/glossary/glossary_bare_triad|bare]] (triad at project root) and [[what/glossary/glossary_embedded_triad|embedded]] (triad inside `.agentic/`). Both forms are first-class; the triad ontology is identical in both — only the nesting differs. A project MUST use exactly one deployment form. CLAUDE.md bridges any path differences. (aDNA Standard §3.4)

## Usage Examples

- This vault uses bare deployment (`what/`, `how/`, `who/` at root) because it is a knowledge-first project.
- A team adding aDNA to an existing Python library would choose embedded deployment to avoid mixing knowledge directories with source code.

## See Also

- [[what/glossary/glossary_bare_triad|Bare Triad]] | [[what/glossary/glossary_embedded_triad|Embedded Triad]]
- [[what/concepts/concept_triad|Triad (concept)]]
- [[what/glossary/glossary_adna|aDNA]]
