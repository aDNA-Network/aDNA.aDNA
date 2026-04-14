---
type: concept
created: 2026-04-13
updated: 2026-04-13
status: active
difficulty: foundational
spec_section: "§4.5 AGENTS.md, §5.1 Ontology Artifact, §10 Context Library"
dual_audience: true
last_edited_by: agent_stanley
tags: [concept, knowledge_graph, linking, navigation, foundational, context_serving]
related_concepts: [concept_triad, concept_ontology, concept_convergence]
related_patterns: [pattern_cross_linking, pattern_agents_md]
---

# The Knowledge Graph — Connected, Not Filed

## Overview

An aDNA vault is not a filing cabinet — it's a knowledge graph. Files are nodes, wikilinks are edges, and AGENTS.md files are the navigation layer that helps agents traverse the graph efficiently. The structure is simultaneously a directory tree (for humans browsing) and a connected graph (for agents reasoning about relationships).

## Why This Matters

Picture two ways to organize a cookbook. In a filing cabinet, you'd sort recipes by category — appetizers in one folder, desserts in another. Need a chocolate soufflé? Open "Desserts," flip through. Simple.

Now picture the same recipes as a web. The chocolate soufflé links to "tempering chocolate" (a technique), which links to "dark chocolate" (an ingredient), which links to "molten lava cake" (a related recipe). You can follow any thread. The web doesn't just store recipes — it captures *how they relate*.

An aDNA vault works like the web, not the cabinet. Every file links to related files via wikilinks. A concept file links to the patterns that apply it. A mission links to the context it consumes. A session links to the mission it executes. The result is a navigable graph where you can start anywhere and follow connections to build understanding.

This matters for AI agents because agents don't browse — they load. An agent arriving at a cold start needs to figure out which of the vault's potentially hundreds of files are relevant to the current task. The knowledge graph, combined with AGENTS.md navigation guides, lets agents traverse from their entry point to exactly the subgraph they need — without loading everything.

## How It Works

### Three Layers of Connection

The knowledge graph operates at three layers, each serving a different navigation purpose:

**Layer 1: Wikilinks (content edges)**

Wikilinks are explicit connections between content files. They create the fine-grained relationship web:

```markdown
See [[what/concepts/concept_triad|The Triad]] for the organizing principle.
This pattern applies [[what/patterns/pattern_question_test|the question test]].
```

The aDNA Standard requires minimum 2 cross-links per content file (this vault enforces it as a campaign quality gate). This prevents orphan nodes — files that exist in isolation, disconnected from the graph. In Obsidian's graph view, a healthy vault looks like a dense web; an unhealthy one looks like scattered dots.

**Layer 2: AGENTS.md (navigation nodes)**

Every directory has an AGENTS.md file that acts as a navigation hub for that part of the graph (§4.5). Each AGENTS.md provides:

- **What's here** — purpose of this directory and its contents
- **Working rules** — naming conventions, required frontmatter, behavioral constraints
- **Load/skip decision** — when to descend into this directory vs. skip it entirely

The load/skip decision is the critical piece for agents. It answers: "Given what I'm doing right now, is the content in this directory worth the token cost of loading?" This turns the directory tree into a decision tree — agents prune irrelevant branches before they waste context window.

**Layer 3: The ontology artifact (structural map)**

At the vault level, an ontology diagram (§5.1) maps entity types, triad categories, and their relationships as a Mermaid ER diagram. This is the graph's schema — not the individual nodes, but the *kinds* of nodes and how they connect:

```
campaigns → contain → missions
missions → tracked by → sessions
sessions → may produce → coordination notes
pipelines → produce → context
```

Agents use the ontology to reason about the graph's structure without loading its contents. If an agent knows it needs context files, it knows to look under `what/context/` without traversing the full tree.

### Context Serving as Graph Traversal

When an agent starts a session, it doesn't load the entire vault. It performs a targeted graph traversal:

1. **Entry point**: CLAUDE.md → STATE.md (always loaded, ~3K tokens)
2. **Navigation**: Follow AGENTS.md load/skip decisions to relevant directories
3. **Selection**: Load specific files based on mission objectives and context recipes
4. **Budgeting**: Stay within the token budget (~75% of context window for content, 25% for reasoning)

This is the convergence model in practice — each step narrows the loaded subgraph, reducing token count while increasing signal density. A vault might contain 200 files totaling 300K tokens, but a focused session loads only the 10-15 files (maybe 20K tokens) that are relevant to its current objective.

### Graph Health

A healthy knowledge graph has these properties:

- **Connected** — no orphan files (every file has 2+ inbound or outbound links)
- **Navigable** — AGENTS.md files provide load/skip guidance at every junction
- **Typed** — every node has a `type` field, enabling structural queries
- **Budgeted** — token estimates on AGENTS.md and context files enable cost-aware traversal

An unhealthy graph has orphan files nobody links to, directories without AGENTS.md guides, or content files without type metadata. These gaps create dead ends for agents — places where traversal stalls because there's no guidance on what's relevant.

## See It In Action

This vault is a live knowledge graph. Here's how the connections work in practice:

**This file** (`concept_knowledge_graph.md`) links to [[what/concepts/concept_triad|the triad]] and [[what/concepts/concept_ontology|the ontology]] — because you can't understand the graph without understanding what the nodes are (entity types) and how they're organized (triad legs). Those files link back here, forming a connected triangle.

**The AGENTS.md** in this directory (`what/concepts/AGENTS.md`) tells agents: "Load this directory when creating or reviewing concept documentation. Skip when working on operational infrastructure." That's a load/skip decision — an agent working on a campaign plan would skip this directory entirely, saving ~10K tokens of context window.

**The campaign mission board** (`how/campaigns/campaign_rosetta/campaign_rosetta.md`) links missions to the concept files they produce, the context files they consume, and the quality gates they must pass. That's the graph connecting operational entities (HOW) to knowledge entities (WHAT).

Open Obsidian's graph view on this vault and you'll see the web forming. Every concept links to related concepts and patterns. Every mission links to its deliverables. The graph is the navigational substrate — the structure that makes the vault more than a folder of files.

## Related

- [[what/concepts/concept_triad|The Triad]] — the three-leg structure that organizes the graph's nodes
- [[what/concepts/concept_ontology|Ontology]] — the entity types that define what kinds of nodes exist
- [[what/concepts/concept_convergence|Convergence Model]] — how graph traversal narrows context for focused work
