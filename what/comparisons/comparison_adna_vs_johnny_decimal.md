---
type: comparison
created: 2026-04-14
updated: 2026-04-14
status: active
compared_to: "Johnny.Decimal"
categories: [organizing_principle, numbering, agent_support, scalability, simplicity]
last_edited_by: agent_stanley
tags: [comparison, johnny_decimal, numbering, file_organization]
---

# aDNA vs. Johnny.Decimal

Two systems for organizing files — one uses a universal numbering scheme, the other uses a typed triad with agent governance.

## Overview

### aDNA

A knowledge architecture standard (§1) that sorts content into three directories (`what/`, `how/`, `who/`) using the [[what/concepts/concept_triad|question test]]. Within each leg, typed entity directories (concepts, missions, sessions, etc.) provide further structure. Navigation is governed by AGENTS.md files and typed frontmatter. Designed for AI-agent collaboration on projects.

### Johnny.Decimal

A file organization system by Johnny Noble that assigns every file a unique number in a two-level hierarchy: 10 areas (10-19, 20-29, etc.) containing categories (11, 12, 13, etc.). Each item gets an ID like `23.04` (area 20-29, category 23, item 04). The numbering is the navigation — you find things by number, not by browsing directories. Designed for individuals and small teams managing digital files.

## Comparison

| Dimension | aDNA | Johnny.Decimal |
|-----------|------|---------------|
| **Organizing principle** | 3 triad legs by question type | 10 numbered areas, unlimited categories |
| **Navigation** | Directory names + AGENTS.md routing | Numbers: find `23.04` by its ID |
| **Agent support** | Native: governance files, convergence model, typed entities | None: numbering aids humans, not agents |
| **Flexibility** | Fixed triad + extensible entity types | Flexible: you define your own areas and categories |
| **Scale limit** | Unlimited: federated across instances | 10 areas × 10 categories = 100 categories max |
| **Semantic meaning** | Directory names describe content (e.g., `what/concepts/`) | Numbers are opaque — you need the index to know what `23` means |
| **Learning curve** | Moderate: spec, frontmatter, governance | Low: learn the numbering convention, apply it |
| **Multi-project** | Each project is an aDNA instance | Each project gets its own number space |

## Where aDNA Excels

- **Semantic navigation**: Directory names tell you what's inside. `what/concepts/` is self-describing. `23.04` requires an index lookup.
- **Agent routing**: [[what/patterns/pattern_agents_md|AGENTS.md]] at each directory tells agents whether to load or skip. Johnny.Decimal numbers mean nothing to an agent.
- **Typed knowledge**: aDNA entities have schemas, frontmatter, and typed I/O. Johnny.Decimal files are untyped.
- **Federation**: aDNA objects can be shared across projects with FAIR metadata and `lattice://` URIs. Johnny.Decimal numbers are local.
- **No category ceiling**: aDNA can add unlimited entity types via the [[what/patterns/pattern_base_extension|base/extension]] pattern. Johnny.Decimal is capped at 100 categories.

## Where Johnny.Decimal Excels

- **Universal applicability**: Works for any files — tax documents, project assets, recipes, music. aDNA is purpose-built for knowledge projects.
- **Instant lookup**: Know the ID, find the file. `32.07` is unambiguous. aDNA requires navigating directory paths.
- **Dead-simple rules**: "10 areas, 10 categories per area, sequential numbering." The system fits on an index card.
- **Tool-agnostic**: Works in any filesystem, any OS, any app. No frontmatter, no governance files, no agent tooling required.
- **No overhead**: Create a folder, assign a number. No AGENTS.md, no templates, no session files.
- **Physical+digital parity**: Johnny.Decimal works for physical filing cabinets too. aDNA is digital-only.

## When to Choose Which

| If you need... | Choose |
|---------------|--------|
| A system for organizing diverse personal/business files | Johnny.Decimal |
| A knowledge architecture for AI-agent projects | aDNA |
| Instant lookup by ID across all your files | Johnny.Decimal |
| Typed, governed, machine-queryable knowledge | aDNA |
| Something you can explain in 2 minutes | Johnny.Decimal |
| Multi-agent collaboration with federation | aDNA |
| Physical + digital file organization | Johnny.Decimal |
| Operational infrastructure (sessions, missions, campaigns) | aDNA |

These serve genuinely different purposes. Johnny.Decimal organizes files; aDNA organizes knowledge for agent collaboration. A user might apply Johnny.Decimal to their personal filing while using aDNA for project knowledge.

## Sources

- johnnydecimal.com — Johnny.Decimal system documentation
- Johnny Noble, "A system to organise your life" — method introduction
- aDNA Standard v2.1, §3 (Triad Architecture), §4.5 (AGENTS.md) — aDNA specification

## Related

- [[what/concepts/concept_triad|The Triad]] — aDNA's three-category principle (vs. Johnny.Decimal's numbered areas)
- [[what/patterns/pattern_question_test|Question Test]] — how aDNA sorts content (vs. Johnny.Decimal's numbering assignment)
- [[what/concepts/concept_ontology|Ontology]] — the typed entity system that gives aDNA directories semantic meaning
