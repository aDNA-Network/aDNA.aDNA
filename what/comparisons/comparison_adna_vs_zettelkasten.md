---
type: comparison
created: 2026-04-14
updated: 2026-04-14
status: active
compared_to: "Zettelkasten"
categories: [organizing_principle, linking, agent_support, knowledge_model, scalability]
last_edited_by: agent_stanley
tags: [comparison, zettelkasten, luhmann, note_taking, knowledge_graph]
---

# aDNA vs. Zettelkasten

Two knowledge systems built on connected notes — one optimized for human creative thinking, the other for human-agent collaborative projects.

## Overview

### aDNA

A knowledge architecture standard (§1) that organizes project knowledge into a what/how/who triad with typed entities, governance files, and AI-agent routing. Knowledge forms a [[what/concepts/concept_knowledge_graph|connected graph]], but the graph is structured by ontology types, directory conventions, and AGENTS.md routing. Designed for team projects with AI agents.

### Zettelkasten

Niklas Luhmann's "slip box" method, popularized by Sönke Ahrens in *How to Take Smart Notes*. Each note is atomic (one idea), uniquely identified, and densely linked to other notes. No hierarchical categories — structure emerges from links. The system grows organically as a "conversation partner" for thinking. Implemented in tools like Obsidian, Logseq, and Zettlr.

## Comparison

| Dimension | aDNA | Zettelkasten |
|-----------|------|-------------|
| **Organizing principle** | Triad (what/how/who) + typed entities | Flat: atomic notes + emergent link structure |
| **Hierarchy** | Directory structure encodes meaning (triad legs, entity types) | No hierarchy: all notes are peers |
| **Linking** | Wikilinks + AGENTS.md routing + typed edges in lattices | Dense bidirectional links — structure IS the links |
| **Agent support** | Native: governance files, convergence model, session tracking | None: designed for human cognition only |
| **Knowledge model** | Typed entities with frontmatter (concept, pattern, mission, etc.) | Untyped atomic notes — meaning is in content and links |
| **Scalability** | Multi-agent, multi-project, federated | Single-person (scales to 90K+ notes for dedicated practitioners) |
| **Discovery** | AGENTS.md routing, context recipes, convergence model | Serendipitous: follow links, find unexpected connections |
| **Overhead** | Moderate: frontmatter, governance files, session tracking | Low: write a note, link it, done |

## Where aDNA Excels

- **Agent navigation**: Zettelkasten relies on human serendipity — following links by interest. aDNA's [[what/patterns/pattern_agents_md|AGENTS.md routing]] gives agents systematic navigation paths through the graph.
- **Typed knowledge**: aDNA's entity types (concept, pattern, mission, lattice) make knowledge machine-queryable. Zettelkasten notes are typed only by content.
- **Operational infrastructure**: aDNA tracks sessions, missions, campaigns. Zettelkasten has no operational layer — it's purely a thinking tool.
- **Convergence**: aDNA's [[what/concepts/concept_convergence|convergence model]] narrows context systematically. In a large Zettelkasten, finding the right subset of notes for a task is ad hoc.

## Where Zettelkasten Excels

- **Creative emergence**: Zettelkasten's flat, densely linked structure produces unexpected connections — ideas from disparate domains collide. aDNA's directory structure is navigable but less serendipitous.
- **Thinking tool**: Zettelkasten is designed to externalize and develop *thinking*. aDNA is designed to organize and share *knowledge*. For individual intellectual development, Zettelkasten is purpose-built.
- **Minimal overhead**: Write a note, give it an ID, link it. No frontmatter schema, no AGENTS.md, no governance files.
- **Proven longevity**: Luhmann maintained his Zettelkasten for 40+ years, producing 70+ books. The method is battle-tested at human scale.
- **No wrong structure**: In Zettelkasten, there's no directory to misplace a note in. In aDNA, the question test can feel like a constraint.

## When to Choose Which

| If you need... | Choose |
|---------------|--------|
| A personal thinking and writing tool | Zettelkasten |
| A team knowledge architecture with AI agents | aDNA |
| Serendipitous idea discovery | Zettelkasten |
| Systematic context serving to agents | aDNA |
| Minimal structure, maximum creative freedom | Zettelkasten |
| Typed, governed, federable knowledge objects | aDNA |
| Long-term personal intellectual development | Zettelkasten |
| Multi-agent project execution with audit trails | aDNA |

Both use Obsidian well. A practitioner might maintain a personal Zettelkasten alongside aDNA project vaults.

## Sources

- Sönke Ahrens, *How to Take Smart Notes* (2017) — Zettelkasten method for knowledge work
- zettelkasten.de — community hub and method documentation
- Niklas Luhmann, "Communicating with Slip Boxes" (1981) — original articulation
- aDNA Standard v2.1, §3 (Triad), §10 (Context Library) — aDNA specification

## Related

- [[what/concepts/concept_knowledge_graph|Knowledge Graph]] — aDNA's connected structure (compare to Zettelkasten's emergent link graph)
- [[what/concepts/concept_convergence|Convergence Model]] — systematic narrowing that Zettelkasten doesn't provide
- [[what/patterns/pattern_question_test|Question Test]] — aDNA's sorting discipline (vs. Zettelkasten's flat no-hierarchy approach)
