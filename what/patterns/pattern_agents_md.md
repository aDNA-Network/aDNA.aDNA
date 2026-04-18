---
type: pattern
created: 2026-04-14
updated: 2026-04-17
status: active
pattern_category: structural
applies_to: [context, modules, lattices, decisions, campaigns, missions, sessions]
last_edited_by: agent_stanley
tags: [pattern, agents_md, routing, convergence, token_selection, structural]
---

# AGENTS.md Routing — Directory-Level Load/Skip Decisions

## Problem

A project folder can hold hundreds of files. An AI agent working on a single task needs only a handful of them — but how does it know which folders to open and which to walk past? Without signs, the agent either drowns in files it doesn't need or misses the ones that matter.

## Solution

Place an **AGENTS.md** file in every directory that agents might navigate (§4.5). Each AGENTS.md contains:

| Section | Purpose |
|---------|---------|
| **What's Here** | 1-2 sentence description of directory contents |
| **Working Rules** | Naming conventions, required fields, constraints |
| **Load/Skip Decision** | Explicit guidance: "Load when X. Skip when Y." |
| **Token cost** | How many tokens loading this directory costs |

The load/skip decision is the critical section. It turns the directory tree into a **decision tree**: at each junction, the agent reads AGENTS.md and decides whether to descend or prune. This implements the [[what/concepts/concept_convergence|convergence model]] — each pruning decision narrows the working set.

**Key properties**:
- AGENTS.md is authoritative for its directory — it overrides broader context
- Token cost estimates let agents make cost-aware loading decisions
- Load/skip conditions should be task-based, not role-based ("when writing concepts" not "if you're a senior agent")

## When to Use

- Every directory in an aDNA vault that contains content an agent might need
- Every new directory created during ontology extension
- When agents are loading too much or too little context (adjust load/skip conditions)

## Example: This Vault

Open `what/concepts/AGENTS.md` — it tells agents:

> **Load when**: Creating or reviewing concept documentation, building learning paths, cross-referencing from patterns.
> **Skip when**: Working on operational infrastructure, writing workshop kits, concept content not relevant.

An agent executing Mission M04 (writing patterns) loads `what/concepts/` for cross-linking targets but skips `what/tutorials/` because tutorials aren't relevant to pattern writing. Both decisions were informed by the respective AGENTS.md files.

The context library at `what/context/adna_core/AGENTS.md` goes further — it lists all 13 subtopics with token estimates and a "Usage by task" table mapping tasks to specific subtopics. An agent writing about federation loads `context_adna_core_federation.md` (~1K tokens) and skips `context_adna_core_ontology_workshop.md` (~1.5K tokens). Savings: 1,500 tokens per skip decision.

## Anti-Pattern

**Missing AGENTS.md**: A directory without AGENTS.md is invisible to agents following the routing protocol. They'll either skip it entirely (losing content) or load everything in it (wasting tokens). Every directory needs one.

**Vague load/skip**: "Load when relevant" is not a routing decision. Specify the task or condition: "Load when designing lattice YAML files. Skip when writing tutorials."

**Stale routing**: AGENTS.md that describes directory contents that have changed. If you add entity types or restructure, update the AGENTS.md. Stale routing is worse than missing routing — it actively misdirects.

## Related

- [[what/concepts/concept_convergence|Convergence Model]] — the structural principle that AGENTS.md routing implements
- [[what/concepts/concept_token_selection|Token Selection]] — the broader discipline of choosing what to load
- [[what/patterns/pattern_context_recipe|Context Recipe]] — multi-directory assembly that builds on AGENTS.md routing
