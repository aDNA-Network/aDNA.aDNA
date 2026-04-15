---
type: adopter
created: 2026-04-14
updated: 2026-04-14
status: active
persona_type: individual
technical_level: intermediate
domain: "freelance software development"
deployment_form: bare
last_edited_by: agent_stanley
tags: [adopter, solo, developer]
---

# Solo Developer

## Background

A freelance developer juggling 3-4 client projects simultaneously, relying heavily on AI agents for code generation, documentation, and architecture planning. Works alone, ships fast, but struggles with context loss between sessions and across projects.

## Goals

- Eliminate repeated context-setting at the start of every AI session
- Maintain consistency across sessions (error handling, patterns, naming conventions)
- Track project state and architectural decisions without heavyweight tooling
- Get productive with a new agent session in under a minute

## Pain Points

- Must re-explain project context (tech stack, auth flow, client requirements) at every session start
- Agent approaches differ day to day — no persistent conventions
- No continuous state tracking between work sessions
- Architectural decisions made and forgotten — no durable record

## How They Use aDNA

Lightweight setup: 10-15 files, 30 minutes to configure. The core value is instant agent orientation:

- **CLAUDE.md** captures project identity, tech stack, and conventions — solves 80% of the context problem
- **STATE.md** tracks momentum: what was done last session, what's next, active blockers
- **`what/decisions/`** captures architectural choices with rationale (why Postgres, why this auth pattern)
- **`how/sessions/`** creates a lightweight audit trail of agent work

No federation, no multi-agent coordination, no community engagement. Pure [[who/community/community_roles|Level 0]] usage — aDNA as a personal productivity tool.

**Self-reference**: This vault's own `STATE.md` demonstrates the pattern — a solo operator (Stanley) tracking campaign progress across sessions. The "Next Session Prompt" at the bottom is exactly the cold-start accelerator the solo developer needs.

## Typical Ontology Extensions

| Entity | Triad | Purpose |
|--------|-------|---------|
| (none) | — | Uses base triad only — CLAUDE.md, STATE.md, decisions, sessions |

The solo developer typically does not extend the ontology. The base [[what/glossary/glossary_triad|triad]] with [[what/glossary/glossary_governance_file|governance files]] is sufficient for individual project management.

## Related

- [[what/use_cases/use_case_solo_developer|Solo Developer Use Case]] — full narrative
- [[what/tutorials/tutorial_first_claude_md|Tutorial: Your First CLAUDE.md]] — recommended starting point
- [[who/community/community_roles|Community Roles]] — Level 0 participation
