---
type: glossary_entry
created: 2026-04-14
updated: 2026-04-14
status: active
term: "README.md"
spec_section: "§4.6"
see_also: [governance file, agents_md]
last_edited_by: agent_stanley
tags: [glossary, governance]
---

# README.md

## Plain-Language Definition

README.md is the guide written *for humans* that sits at the project root and optionally in subdirectories. While [[what/glossary/glossary_agents_md|AGENTS.md]] serves agents, README.md serves people browsing in GitHub, an IDE, or a knowledge-base tool. It explains what the project is and how to navigate it.

## Technical Definition

A human-facing per-directory guide optimized for browsing. Every aDNA instance MUST have a root README.md. Subdirectory README.md files are OPTIONAL — create them when human navigation would benefit. README.md complements AGENTS.md: agents read AGENTS.md for machine-optimized instructions; humans read README.md for narrative context. (aDNA Standard §4.6)

## Usage Examples

- This vault's root `README.md` is the first thing a human sees on GitHub — it explains what aDNA.aDNA is, how to explore the vault, and where to start.
- The dual README.md / AGENTS.md pattern embodies the [[what/concepts/concept_dual_audience|dual-audience principle]]: same content, two registers.

## See Also

- [[what/glossary/glossary_agents_md|AGENTS.md]]
- [[what/glossary/glossary_governance_file|Governance File]]
- [[what/concepts/concept_dual_audience|Dual Audience (concept)]]
