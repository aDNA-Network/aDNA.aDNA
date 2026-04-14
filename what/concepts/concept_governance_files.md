---
type: concept
created: 2026-04-13
updated: 2026-04-13
status: active
difficulty: foundational
spec_section: "§4 Governance Files"
dual_audience: true
last_edited_by: agent_stanley
tags: [concept, governance, claude_md, agents_md, manifest, state, foundational]
related_concepts: [concept_triad, concept_ontology, concept_token_selection, concept_convergence]
related_patterns: [pattern_cold_start, pattern_agents_md]
---

# Governance Files — The Five Orientation Documents

## Overview

Every aDNA project has five ALLCAPS governance files at its root — CLAUDE.md, MANIFEST.md, STATE.md, AGENTS.md, and README.md. Together, they form the orientation layer: the minimum an agent or human needs to read before doing useful work.

## Why This Matters

Think about your first day at a new job. You don't start by reading every document in the company wiki. Instead, someone gives you a few key things: a welcome packet explaining the company's structure (MANIFEST), the current priorities and what's happening right now (STATE), a guidebook for how things are organized around here (AGENTS), a quick-start guide written for people like you (README), and — most importantly — the operating manual with the ground rules (CLAUDE).

That's exactly what governance files do for AI agents. An agent arrives at a new project cold — no prior context, no memory of previous sessions, no idea what matters. Governance files give it the same orientation a good onboarding program gives a new employee: structure, state, rules, and a path to start contributing.

The key insight is *ordering*. An agent doesn't need everything at once — it needs the right things in the right sequence. CLAUDE.md first (structure and rules), then STATE.md (current situation), then it's ready to work. The other files are available when needed. This sequencing is what makes cold-start orientation fast instead of overwhelming.

## How It Works

### The Five Files

The aDNA Standard §4.1 defines five governance files, each with a distinct purpose and update cadence:

| File | Required | Purpose | Who Reads It | Update Cadence |
|------|----------|---------|--------------|----------------|
| **CLAUDE.md** | MUST | Agent root context — persona, project map, safety rules, startup protocol | Agents (auto-loaded) | When structure or protocols change |
| **MANIFEST.md** | MUST | Static project overview — what the project IS, architecture, entry points | Agents + Humans | When scope or architecture changes |
| **STATE.md** | SHOULD | Dynamic operational state — current phase, blockers, next steps | Agents + Humans | Every session close-out |
| **AGENTS.md** | MUST | Per-directory agent guide — purpose, key files, naming patterns | Agents | When directory structure changes |
| **README.md** | MUST | Per-directory human guide — navigation, context, useful links | Humans | When onboarding experience changes |

### Two Audiences, Two Paths

The five files divide into two orientation paths (§4.2, §4.6):

**Agent cold-start** (§4.2): CLAUDE.md → STATE.md → `how/sessions/active/` → `who/coordination/` → create session → begin work. Total: ~5K tokens.

**Human cold-start**: README.md → MANIFEST.md → browse the triad → STATE.md. Total: a few minutes of reading.

The agent path is token-optimized — it loads only what's needed to begin contributing. The human path is narrative — it builds understanding through exploration.

### CLAUDE.md: The Auto-Loaded Root

CLAUDE.md is special. Claude Code auto-loads it at session start, making it the guaranteed first read. The standard requires five sections (§4.2):

1. **Identity** — project name, persona, mission statement
2. **Project Map** — directory structure, key files
3. **Safety Rules** — collision prevention, escalation, data integrity
4. **Agent Protocol** — startup checklist, session tracking, closure requirements
5. **Quickstart** — concise cold-start sequence for both agents and humans

Because it's auto-loaded, CLAUDE.md carries a unique responsibility: it must be comprehensive enough to orient a fresh agent, but compact enough to leave room in the context window for actual work. This is the [[what/concepts/concept_token_selection|token selection]] problem in its purest form.

### AGENTS.md: The Per-Directory Guide

While CLAUDE.md exists only at root, AGENTS.md appears in every directory where agents operate (§4.5). Each one answers three questions:

- **What's here?** — purpose and contents of this directory
- **What are the rules?** — naming conventions, required frontmatter, behavioral constraints
- **Should I load this?** — the load/skip decision that enables [[what/concepts/concept_convergence|convergent narrowing]]

AGENTS.md files grow through progressive enrichment: they start lightweight and accumulate detail as agents and humans repeatedly need information that isn't documented yet.

### STATE.md: The Living Snapshot

STATE.md is the dynamic counterpart to CLAUDE.md's static structure. It answers "where are we right now?" — current phase, active blockers, recent decisions, what's working, and what to do next.

The pair works like a compass and a GPS. CLAUDE.md is the compass — it tells you the lay of the land and the rules of navigation. STATE.md is the GPS — it tells you where you are and where to go next. Together, they give an agent complete orientation in ~3K tokens.

## See It In Action

You're inside a vault that demonstrates every governance file:

- **CLAUDE.md** — open `aDNA.aDNA/CLAUDE.md` and you'll see the Rosetta persona, the project map, safety rules, standing orders, and the startup checklist. This file is ~4K tokens and gives a fresh agent everything it needs to begin.
- **STATE.md** — open `aDNA.aDNA/STATE.md` and you'll see the current campaign phase, recent session results, active blockers, and the next-session prompt. It changes every session.
- **MANIFEST.md** — open `aDNA.aDNA/MANIFEST.md` for the static project overview — what Operation Rosetta is, the ontology extensions, architecture decisions.
- **AGENTS.md** — look at `what/concepts/AGENTS.md`, the file governing this very directory. It tells agents when to load concept files and when to skip them, what naming conventions to follow, and what quality gates apply.
- **README.md** — open `aDNA.aDNA/README.md` for the human-friendly orientation that explains what this project is and how to explore it.

Notice the layering. CLAUDE.md references STATE.md for current state. STATE.md references campaign docs for detail. Campaign docs reference missions. Missions reference the files they produce. Each layer narrows the scope, following the [[what/concepts/concept_convergence|convergence model]].

## Related

- [[what/concepts/concept_triad|The Triad]] — the three-leg structure that governance files orient agents to
- [[what/concepts/concept_token_selection|Token Selection]] — how governance files balance comprehensiveness with context budget
- [[what/concepts/concept_convergence|Convergence Model]] — how AGENTS.md load/skip decisions implement convergent narrowing
- [[what/concepts/concept_ontology|Ontology]] — the entity types that governance files describe and govern
