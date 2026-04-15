---
type: glossary_entry
created: 2026-04-14
updated: 2026-04-14
status: active
term: "Bare Triad"
spec_section: "§3.2"
see_also: [triad, embedded triad, deployment form]
last_edited_by: agent_stanley
tags: [glossary, architecture, deployment]
---

# Bare Triad

## Plain-Language Definition

A bare triad is the simplest way to set up an aDNA project: the three folders (`what/`, `how/`, `who/`) sit directly at the project root, alongside the governance files. Use this when aDNA *is* the project — like a knowledge base or documentation vault.

## Technical Definition

A [[what/glossary/glossary_deployment_form|deployment form]] where `what/`, `how/`, and `who/` exist as top-level directories at the project root. Governance files sit alongside them at root level. Recommended for knowledge bases, standalone agent workspaces, and projects where aDNA is the primary content structure. Contrast with [[what/glossary/glossary_embedded_triad|embedded triad]]. (aDNA Standard §3.2)

## Usage Examples

- This vault (`aDNA.aDNA/`) uses a bare triad — you can see `what/`, `how/`, and `who/` directly at the project root because the vault's primary content *is* aDNA knowledge.
- Any `.aDNA` project in the Lattice workspace uses bare triad by default.

## See Also

- [[what/glossary/glossary_embedded_triad|Embedded Triad]]
- [[what/glossary/glossary_deployment_form|Deployment Form]]
- [[what/concepts/concept_triad|Triad (concept)]]
