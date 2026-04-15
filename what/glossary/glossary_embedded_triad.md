---
type: glossary_entry
created: 2026-04-14
updated: 2026-04-14
status: active
term: "Embedded Triad"
spec_section: "§3.3"
see_also: [triad, bare triad, deployment form]
last_edited_by: agent_stanley
tags: [glossary, architecture, deployment]
---

# Embedded Triad

## Plain-Language Definition

An embedded triad wraps the three aDNA folders inside a hidden `.agentic/` directory, keeping them separate from a codebase's source files. Use this when adding aDNA to an existing code repository — the knowledge architecture sits alongside the code without cluttering the project root.

## Technical Definition

A [[what/glossary/glossary_deployment_form|deployment form]] where the triad is nested inside `.agentic/` at the repository root (`.agentic/what/`, `.agentic/how/`, `.agentic/who/`). Governance files remain at the repository root, not inside `.agentic/`. Follows the convention of dot-prefixed directories for meta/config in git repos (like `.github/`, `.vscode/`). Contrast with [[what/glossary/glossary_bare_triad|bare triad]]. (aDNA Standard §3.3)

## Usage Examples

- The `lattice-protocol/` codebase uses an embedded triad: its source code lives at root, while aDNA knowledge lives in `.agentic/what/`, `.agentic/how/`, `.agentic/who/`.
- An aDNA instance MUST use exactly one deployment form — mixing bare and embedded within the same project is prohibited (§3.4).

## See Also

- [[what/glossary/glossary_bare_triad|Bare Triad]]
- [[what/glossary/glossary_deployment_form|Deployment Form]]
- [[what/concepts/concept_triad|Triad (concept)]]
