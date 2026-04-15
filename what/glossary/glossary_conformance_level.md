---
type: glossary_entry
created: 2026-04-14
updated: 2026-04-14
status: active
term: "Conformance Level"
spec_section: "§5.5"
see_also: [conformant instance, aDNA, governance file]
last_edited_by: agent_stanley
tags: [glossary, architecture, conformance]
---

# Conformance Level

## Plain-Language Definition

Conformance levels are three tiers — Starter, Standard, and Full — that define how much of the aDNA standard a project implements. Think of them like belt colors: Starter is the minimum viable setup, Standard adds multi-agent coordination, and Full adds federation-ready metadata and a complete template library.

## Technical Definition

A graduated tier (Starter, Standard, Full) defining the minimum requirements an aDNA instance MUST meet to claim conformance at that level. Starter requires governance files + triad directories + required subdirectories + base frontmatter. Standard adds STATE.md, per-directory AGENTS.md, session lifecycle compliance. Full adds context library with token estimates, FAIR metadata, ontology artifact, and template compliance. Projects declare their level via `adna_conformance` in MANIFEST.md frontmatter. (aDNA Standard §5.5)

## Usage Examples

- This vault (`aDNA.aDNA/`) meets Full conformance: it has all governance files, per-directory AGENTS.md files, a context library with token estimates, FAIR metadata on lattice objects, an ontology artifact, and templates for all content types.
- A brand-new project forked from the base template starts at Starter conformance and graduates upward as it adds infrastructure.

## See Also

- [[what/glossary/glossary_conformant_instance|Conformant Instance]]
- [[what/glossary/glossary_governance_file|Governance File]]
- [[what/concepts/concept_open_standard|Open Standard (concept)]]
