---
type: directory_index
created: 2026-02-18
updated: 2026-05-26
last_edited_by: agent_siteforge_native
tags: [directory_index, skill]
---

# how/skills/ — Agent Reference

## Purpose

Reusable procedures and capabilities — both agent-automated recipes and documented human/hybrid processes. This directory consolidates all "how to do X" knowledge into a single location.

## What is a Skill?

A skill is a documented, reusable capability that can be executed by an AI agent, a human, or both. Skills encapsulate:
- **Trigger conditions** — when to invoke the skill
- **Required inputs** — what the skill needs to run
- **Execution steps** — the procedure to follow
- **Expected outputs** — what the skill produces

## Skill Types

| Type | Description | Format |
|------|-------------|--------|
| `agent` | Automated agent recipe — encapsulated automation capability | Single-file: `skill_[name].md` |
| `process` | Documented human or hybrid procedure for recurring operations | Single-file or directory-based: `skill_[name].md` or `[name]/AGENTS.md` |

**Discriminator**: `skill_type` frontmatter field (`agent` or `process`)

## Skills vs. Lattices

Skills (`how/skills/`) are Markdown procedures — step-by-step instructions an agent reads and follows. Lattices with `lattice_type: skill` (`what/lattices/`) are executable YAML directed graphs. **Start with a skill file.** Promote to a lattice when you need registry publishing, runtime execution, or composition with other lattices. Promotion workflow: `skill_lattice_publish.md`. Full comparison: [`what/docs/standard_reading_guide.md` §4](../../what/docs/standard_reading_guide.md#4-skill-vs-lattice-when-to-use-which).

## Skills as Runbooks

Skills can serve as operational runbooks — not just automated recipes, but documented procedures that an operator follows step-by-step. Examples: `skill_l1_upgrade.md` (phased compute upgrade), `skill_workspace_init.md` (workspace bootstrap). When writing a skill as a runbook, include verification steps after each phase so the operator can confirm progress.

## Skill Categories

| Category | Description |
|----------|-------------|
| `setup` | Machine setup, environment configuration |
| `research` | Information gathering and analysis |
| `development` | Code and documentation generation |
| `operations` | Operational tasks and maintenance |
| `communication` | Messaging and reporting |
| `data` | Data processing, export, transformation |
| `onboarding` | Customer, partner, or team onboarding |
| `review` | Model review, code review, audit |
| `emergency` | Incident response and emergency procedures |

## Directory Structure

```
how/skills/
├── AGENTS.md                    # This file (protocol)
├── skill_[name].md              # Single-file skills (agent or process)
├── [name]/                      # Directory-based skills (complex processes)
│   ├── AGENTS.md                # Process operational manual
│   └── ...                      # Phase directories, configs, templates
└── archive/                     # Deprecated skills
```

## Naming Convention

Pattern: `skill_[name].md`

Examples:
- `skill_machine_setup.md` (agent)
- `skill_create_deck.md` (agent)
- `skill_create_iss.md` (agent) — author an Interaction Surface Site for an operator decision/input (canonical 2026-05-26 via `campaign_siteforge_iss` P5.M1)
- `skill_open_iss.md` (process) — operator-side: open + position a generated ISS gate (macOS osascript)
- `skill_watch_iss.md` (process) — agent-side: auto-resume on operator gate submission (in-session watch pattern)
- `skill_customer_onboarding.md` (process)
- `skill_incident_response.md` (process)
- `skill_lattice_publish.md` (agent)
- `skill_context_quality_audit.md` (agent)
- `skill_context_graduation.md` (agent)
- `skill_version_migration.md` (agent)
- `skill_workspace_upgrade.md` (agent)
- `skill_vault_review.md` (process)

## Template

Use `how/templates/template_skill.md` to create new skill files.

## Required Frontmatter

```yaml
---
type: skill
skill_type: agent|process
created: YYYY-MM-DD
updated: YYYY-MM-DD
status: active|draft|deprecated
category: setup|research|development|operations|communication|data|onboarding|review|emergency
trigger: <when to invoke>
last_edited_by: agent_<username>
tags: []
---
```

## Load/Skip Decision

**Load this directory when**:
- Invoking an existing skill by name (read the specific skill file, not all skills)
- Creating a new skill — check naming conventions, categories, and template reference
- Modifying or extending an existing skill's procedure
- Onboarding — learning what automated capabilities and documented procedures exist

**Skip when**:
- Performing routine session work that doesn't involve skill invocation or creation
- Working on missions, campaigns, or pipelines that don't reference skills
- Already know the skill file path and can load it directly

**Token cost**: ~700 tokens (this AGENTS.md). Individual skill files vary widely (50-400 lines).

## Cross-References

- [[../AGENTS.md|how/AGENTS]] — Operations layer index
- [[../templates/template_skill.md|template_skill]] — Skill file template
- [[../../what/lattices/AGENTS.md|what/lattices/AGENTS]] — Skill graduation target (when a skill earns lattice publishing)
- [[../../what/docs/standard_reading_guide.md|standard_reading_guide]] §4 — Skill vs. Lattice comparison
- [[skill_lattice_publish.md|skill_lattice_publish]] — Promotion workflow from skill to lattice
