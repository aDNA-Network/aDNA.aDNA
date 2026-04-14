---
type: concept
created: 2026-04-13
updated: 2026-04-13
status: active
difficulty: foundational
spec_section: "§1 Introduction, §10 Context Library"
dual_audience: true
last_edited_by: agent_stanley
tags: [concept, agentic_literacy, education, accessibility, dual_audience, foundational]
related_concepts: [concept_dual_audience, concept_context_commons, concept_open_standard, concept_triad]
related_patterns: [pattern_dual_audience, pattern_progressive_disclosure]
---

# Agentic Literacy — Learning to Work with AI

## Overview

Agentic literacy is the ability to work effectively with AI agents — not just prompting them, but structuring knowledge so agents can find, understand, and act on it. aDNA treats this as a learnable skill with a clear progression: from understanding what agents need, to organizing knowledge for them, to building collaborative human-agent workflows.

## Why This Matters

A generation ago, "computer literacy" meant learning to use a mouse and save files. Today it means navigating complex digital environments — spreadsheets, version control, cloud services. The bar rose because the tools matured.

AI agents are the next shift. They can read your project documentation, execute multi-step plans, and coordinate with other agents. But they're only as effective as the knowledge you give them. An agent working with a well-structured aDNA vault performs like an informed colleague. The same agent working with a disorganized folder of loose files performs like a confused temp worker reading someone else's notes.

Agentic literacy is the skill gap between those two outcomes. It's knowing that an agent needs a `CLAUDE.md` to orient, that context files should use tables over prose, that a knowledge graph with orphan files has blind spots. It's understanding that the way you organize knowledge determines the quality of AI-augmented work — and that this is a skill you can learn, not a talent you're born with.

This matters beyond individual productivity. As AI agents become standard tools in research, engineering, and creative work, the organizations and communities that develop agentic literacy will get compounding returns from their AI investments. Those that don't will struggle to understand why their expensive AI tools produce generic, uninformed output.

## How It Works

### The Literacy Progression

Agentic literacy isn't binary — it develops in stages:

| Level | Understanding | Skill | Example |
|-------|-------------|-------|---------|
| **Aware** | Knows AI agents exist and can read documents | Can write a prompt | Asking an agent to summarize a file |
| **Oriented** | Understands agents need structure to be effective | Can organize a project for agent access | Creating a CLAUDE.md, using consistent naming |
| **Proficient** | Understands convergence, token budgets, governance files | Can design an aDNA vault from scratch | Building a knowledge architecture with triad, AGENTS.md, context library |
| **Fluent** | Understands composition, federation, quality rubrics | Can architect multi-agent collaborative systems | Designing campaigns, composing lattices, federating across instances |

Most people start at Aware. aDNA's goal is to move them to Proficient — able to structure knowledge for effective human-agent collaboration.

### What Agents Need (and Why It's Teachable)

Agent effectiveness depends on learnable practices, not magic:

| Agent Need | Literate Practice | Why It Works |
|-----------|------------------|-------------|
| Orientation on startup | Write CLAUDE.md + STATE.md | Agent knows who it is, what's happening, and what to do |
| Finding relevant knowledge | AGENTS.md routing + context recipes | Agent traverses the knowledge graph instead of guessing |
| Staying within token limits | Token budgets + convergence model | Agent loads what it needs without drowning in information |
| Understanding domain context | Well-structured context files | Tables and principles over prose — 3-5x more information per token |
| Coordinating with others | Session tracking + coordination notes | Agent knows what other agents are doing and what's already been tried |

None of these require programming skill. They're organizational practices — closer to "how to organize a filing cabinet" than "how to write code." That's why agentic literacy is genuinely accessible: the barrier is understanding, not technical ability.

### The Dual-Audience Principle

A core tenet of agentic literacy: knowledge should serve both humans and agents simultaneously. This is the [[what/concepts/concept_dual_audience|dual-audience]] principle. Every concept file, every governance document, every tutorial needs to be legible to a developer reading for technical precision AND to a non-technical reader seeking understanding.

This isn't just nice to have. Agents learn from the same documents humans read. If your documentation is only optimized for human consumption (long prose, implicit context, narrative structure), agents will struggle to extract actionable information. If it's only optimized for agents (terse tables, no motivation, no examples), humans won't write or maintain it. The dual-audience discipline ensures both audiences are served.

### Teaching by Showing

aDNA's approach to literacy education follows a principle: **the structure is the lesson**. Rather than writing about how to organize knowledge in abstract terms, aDNA provides self-referential examples — vaults where the documentation structure demonstrates the concepts it describes.

This vault (`aDNA.aDNA/`) exists for exactly this purpose. A reader learning about the triad can look at the `what/`, `how/`, `who/` directories and see it. A reader learning about governance files can open the `CLAUDE.md` they're already reading. The learning environment and the subject matter are the same thing.

## See It In Action

This vault is itself an agentic literacy tool:

**Progressive structure**: Navigate from `README.md` (human entry point) → `CLAUDE.md` (agent entry point) → `STATE.md` (operational context) → `what/concepts/` (concept library). Each step teaches a literacy concept by requiring you to practice it: following governance files, using the triad, reading AGENTS.md routing.

**The tutorials directory**: `what/tutorials/` is scaffolded for a beginner → intermediate → advanced learning path. When populated, each tutorial will walk a learner through a specific agentic literacy skill — from "create your first CLAUDE.md" to "design a multi-mission campaign."

**Dual-audience in practice**: Every concept file in this vault (including this one) opens with a plain-language metaphor and progresses to technical specification. That's the dual-audience principle demonstrated at the file level. A 14-year-old can understand the opening paragraph; a developer can reference the tables for implementation.

**The community directory**: `who/community/` is scaffolded for community roles and contribution paths — the social infrastructure for scaling agentic literacy beyond individual practitioners to organizations and communities.

## Related

- [[what/concepts/concept_dual_audience|Dual-Audience Writing]] — the writing discipline that makes knowledge serve both humans and agents
- [[what/concepts/concept_context_commons|Context Commons]] — the vision of shared knowledge resources that agentic literacy makes possible
- [[what/concepts/concept_open_standard|Open Standard]] — how openness lowers the barrier to developing agentic literacy
- [[what/concepts/concept_triad|The Triad]] — the organizing principle that is the first lesson in agentic literacy
