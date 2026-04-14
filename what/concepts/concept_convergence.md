---
type: concept
created: 2026-04-13
updated: 2026-04-13
status: active
difficulty: foundational
spec_section: "§8.7 The 75% Rule, §9 Mission System, §10 Context Library"
dual_audience: true
last_edited_by: agent_stanley
tags: [concept, convergence, narrowing, context_serving, execution_hierarchy, foundational]
related_concepts: [concept_token_selection, concept_knowledge_graph, concept_ontology, concept_triad]
related_patterns: [pattern_agents_md, pattern_mission_decomposition]
---

# The Convergence Model — Narrowing to What Matters

## Overview

The convergence model is aDNA's structural principle for managing complexity: each level of the execution hierarchy (campaign → mission → objective) narrows the working set of knowledge, reducing token count while increasing signal density. Context serving is graph traversal — agents walk the knowledge graph from broad to specific, loading only the subgraph relevant to their current task.

## Why This Matters

Picture a funnel. At the top, you pour in everything a project knows — research notes, operational procedures, governance policies, team coordination, hundreds of files. At the bottom, a single focused stream comes out: the exact 5-10 files an agent needs to write one concept document or fix one bug.

That funnel is the convergence model. Without it, agents face a paradox: the more knowledge a project accumulates, the harder it becomes for any single agent session to use that knowledge effectively. A project with 500K tokens of context is richer than one with 10K, but an agent can only hold ~75K tokens at a time. The knowledge needs to converge — to narrow from "everything the project knows" down to "exactly what this session needs."

The brilliance of the approach is that the narrowing is structural, not ad hoc. It's not "the agent guesses which files to load." It's "the execution hierarchy and AGENTS.md routing systematically prune irrelevant knowledge at each level." The result is monotone-decreasing: at every step down the hierarchy, the working set gets smaller and more focused. Never larger.

## How It Works

### The Execution Hierarchy

The convergence model operates through three levels (§9, §8):

```
Campaign  →  Mission  →  Objective
(strategic)   (tactical)   (session)
```

Each level narrows scope:

| Level | Scope | Typical Tokens | Reduction |
|-------|-------|---------------|-----------|
| **Vault** | Total project knowledge | ~500K | — |
| **Campaign** | Strategic initiative (one of several) | ~50K | 90% |
| **Mission** | Decomposed task (one of several per campaign) | ~15K | 70% |
| **Objective** | Session work (one of several per mission) | ~5K | 67% |

The numbers are illustrative, but the *direction* is normative: each level MUST load fewer tokens than the one above it. If a mission requires more context than its campaign provides, either the campaign scope is too narrow or the mission is trying to do too much.

### How Narrowing Works in Practice

At each level, three mechanisms prune the working set:

**1. Scope declarations** — A campaign says "this initiative covers Phase 1 content creation." That immediately excludes all Phase 2-4 knowledge, community governance, workshop kits, and publishing infrastructure. The working set drops from hundreds of files to tens.

**2. AGENTS.md routing** — Within the narrowed scope, each directory's AGENTS.md tells the agent whether to load or skip. An agent working on concept files enters `what/concepts/` (AGENTS.md says "load") and skips `what/use_cases/` (AGENTS.md says "skip — different mission"). The working set drops from tens of files to a handful.

**3. Mission objective specificity** — The mission file lists specific objectives with specific deliverables. An agent claims one objective per session, further narrowing to the exact files it needs to read and write.

### Context Serving as Graph Traversal

The [[what/concepts/concept_knowledge_graph|knowledge graph]] makes convergence concrete. When an agent starts a session, it performs a graph traversal:

1. **Entry node**: CLAUDE.md (always — the root of every traversal)
2. **State node**: STATE.md (current operational context)
3. **Campaign node**: The active campaign doc (strategic scope)
4. **Mission node**: The specific mission file (tactical scope)
5. **Working nodes**: The files listed in the mission's objectives

Each step follows an edge in the graph, and each AGENTS.md acts as a filter on that edge — "traverse this path" or "prune this branch." The traversal terminates when the agent has loaded its objective's working set and can begin executing.

This is why [[what/concepts/concept_knowledge_graph|orphan files]] are a problem. A file with no inbound links is invisible to graph traversal — it can never be reached by an agent following the convergence path. It exists in the vault but not in any agent's effective context.

### The 75% Rule

The convergence model has a hard floor: the 75% rule (§8.7). An agent SHOULD reserve at least 25% of its context window for reasoning. The convergence model's job is to get the loaded knowledge within the remaining 75%.

If the convergence path still loads too much, the hierarchy isn't converging fast enough. The fix is structural: decompose the mission into more objectives, split the context file into subtopics, or add AGENTS.md routing to un-routed directories.

## See It In Action

This vault demonstrates convergence through its own execution hierarchy:

**Campaign level**: Operation Rosetta narrows the full vault (~200+ files) to Phase 1 (concepts, patterns, comparisons — ~26 files). Phase 2+ content, community architecture, workshop kits, and publishing pipeline are all scoped out. The campaign doc declares a context budget: ~5K campaign + ~15K domain context.

**Mission level**: Mission M02 narrows Phase 1 to 4 specific concept files. It declares its context dependencies: 4 context subtopics and the 3 M01 concepts for cross-linking. That's ~15K tokens of domain context out of a vault that contains ~75K+.

**Objective level**: Writing this file — `concept_convergence.md` — is one objective within M02. The agent loaded the convergence model context file (~500 tokens), the paradigm overview (~1K tokens), and the M01 concepts (~5K tokens). Total working context: ~11K tokens. The full vault would have been ~75K. Convergence achieved a ~85% reduction.

The convergence is visible in the directory structure itself. The campaign lives in `how/campaigns/campaign_rosetta/` — one subdirectory of `how/campaigns/`. The mission lives inside that campaign's `missions/` directory. The objective lives inside the mission file. Each nesting level is a narrowing step.

## Related

- [[what/concepts/concept_token_selection|Token Selection]] — the tactical mechanisms (AGENTS.md routing, context recipes, token estimates) that implement convergence
- [[what/concepts/concept_knowledge_graph|Knowledge Graph]] — the connected structure that convergence traverses from broad to specific
- [[what/concepts/concept_ontology|Ontology]] — the entity types that define what kinds of nodes exist at each convergence level
- [[what/concepts/concept_triad|The Triad]] — the three-leg structure that provides the first level of narrowing
