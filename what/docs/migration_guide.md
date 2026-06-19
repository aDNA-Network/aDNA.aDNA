---
type: context
title: "aDNA Migration Guide — Adding aDNA to an Existing Project"
created: 2026-03-18
updated: 2026-05-29
status: approved
last_edited_by: agent_stanley
tags: [adna, migration, adoption, guide, getting-started]
---

# aDNA Migration Guide

<!-- Adding aDNA to an existing project — step-by-step -->

## 1. Introduction

For developers with an existing project who want to add aDNA. If you're starting fresh, use the [Quick Start](../../README.md#quick-start) instead — clone the repo, open in Obsidian, done.

**You'll end with**: your existing project with a working aDNA knowledge architecture — governance files that orient AI agents on first contact, a triad for organizing project knowledge, session tracking for continuous context across agent conversations.

**Time**: 10-15 minutes for the core; under 5 minutes if you copy-paste starter templates without customization. **Prerequisites**: a text editor. Optionally, [Obsidian](https://obsidian.md) for visual browsing.

---

## 2. Which Form Is Right for You?

aDNA deploys in two forms. Pick the one matching your project:

| Factor | Bare triad | Embedded triad |
|---|---|---|
| **Structure** | `who/` `what/` `how/` at project root | `.agentic/who/` `.agentic/what/` `.agentic/how/` |
| **Best for** | Knowledge bases, docs projects, Obsidian vaults, repos where aDNA IS the project | Code repos, existing apps, repos where aDNA lives ALONGSIDE source code |
| **Root clutter** | 3 directories + 3 files added | 1 directory + 1 file added |
| **Agent discovery** | Direct — agents see triad immediately | Indirect — agents read CLAUDE.md → `.agentic/` |
| **Collision risk** | Higher — `who/`/`what/`/`how/` may clash | Minimal — `.agentic/` unlikely to exist |
| **.gitignore** | None needed | Add `.agentic/` exception if dotfiles are ignored |

**Decision rule**: codebase with `src/`/`lib/`/`tests/` → **embedded**. aDNA *is* the project (knowledge base, docs vault, wiki) → **bare**.

> **Not sure?** Start with embedded. You can promote to bare later by moving `.agentic/who|what|how/` to root.

---

## 3. Minimum Viable aDNA

The smallest aDNA installation that delivers Day 1 value:

### Essential files (5) + triad directories (3)

| File | Location | Purpose |
|---|---|---|
| `CLAUDE.md` | Project root (always) | Agent master context — identity, structure, safety rules |
| `MANIFEST.md` | Project root | Project identity card — architecture, entry points |
| `STATE.md` | Project root | Operational state — current phase, next steps, blockers |
| `AGENTS.md` | One per triad directory (×3) | Per-directory guide — what's here, how to work with it |

Triad directories (bare or embedded form): `who/` (people & orgs) · `what/` (knowledge & artifacts) · `how/` (operations & process).

That's it — **5 files + 3 directories**. Everything else is enhancement.

### What you can add later

| Enhancement | When to add | What it gives you |
|---|---|---|
| `how/sessions/` | Want cross-session continuity | Agents pick up where the last one left off |
| `how/templates/` | Same file type created repeatedly | Consistent frontmatter, less boilerplate |
| `how/campaigns/` + `how/missions/` | Work spans multiple sessions | Structured decomposition of complex initiatives |
| `what/context/` | Agents need domain knowledge | Pre-loaded expertise for specific topics |
| `what/decisions/` | Tracking ADRs | Architecture Decision Records with rationale |
| `.obsidian/` | Want visual browsing | Graph view, wikilinks, canvas, themes |

---

## 4. Walkthrough: Embedded Form

For code repos where aDNA lives alongside source. Total: under 15 minutes.

### Step 1: Create the structure (~30 seconds)

```bash
# From your project root
mkdir -p .agentic/who .agentic/what .agentic/how
```

`.agentic/` sits alongside `src/`, `tests/`, and the rest. **Checkpoint**: ~30 seconds.

### Step 2: Write CLAUDE.md (~3 minutes)

Create `CLAUDE.md` **at your project root** (not inside `.agentic/`) — AI agents auto-load it on startup.

```markdown
# CLAUDE.md — [Your Project Name]

## Identity

This is [one-sentence description of your project].

## Structure

Project knowledge lives in `.agentic/` using the aDNA triad:

- `.agentic/who/` — people, teams, contacts, stakeholders
- `.agentic/what/` — research, decisions, domain knowledge, artifacts
- `.agentic/how/` — plans, processes, sessions, workflows

Source code lives in the standard project structure ([describe: src/, lib/, ...]).

## Agent Protocol

1. Read this file (auto-loaded)
2. Read `STATE.md` for current operational context
3. Read the `AGENTS.md` in the directory you're working in

## Safety Rules

- Read before write — check current content before modifying
- Set `last_edited_by` and `updated` in frontmatter when editing `.agentic/` files
- Do not modify files outside `.agentic/` without explicit instruction

## Domain

[3-5 bullets about your domain — what this project does, key terminology, important
conventions. This is where agents learn what makes YOUR project different.]
```

Replace bracketed sections. `## Domain` is where you teach agents about your project — spend a minute writing a few bullets. **Checkpoint**: ~3.5 minutes.

### Step 3: Write MANIFEST.md and STATE.md (~2 minutes)

**MANIFEST.md** — project identity card:

```markdown
---
type: manifest
created: 2026-03-18
updated: 2026-03-18
---

# [Your Project Name]

## What This Is
[2-3 sentences: what the project does, who it's for, why it exists.]

## Architecture
[Languages, frameworks, key directories.]

## Active Builds
- [Current focus area or sprint goal]
```

**STATE.md** — operational state:

```markdown
---
type: state
created: 2026-03-18
updated: 2026-03-18
---

# Operational State

## Current Phase
[What's happening right now — active sprint, milestone, or focus.]

## Next Steps
- [Immediate next action]
- [Following action]

## Blockers
- [None, or list current blockers]
```

**Checkpoint**: ~5.5 minutes.

### Step 4: Write AGENTS.md for each triad directory (~3 minutes)

Each triad directory gets an `AGENTS.md` — 5-10 lines telling agents what belongs there. One template, three placements:

```markdown
# [DIR]/ — Agent Guide

## What's Here

[Topic per row below] for [your project].

## Working Rules

- [Naming convention per row below]
- Use frontmatter: `type`, `created`, `updated`, `tags`
- Link to related entries with `[[wikilinks]]`
```

Substitute `[DIR]` and `[Topic]` per directory:

| `[DIR]` | `[Topic]` | Naming convention |
|---|---|---|
| `.agentic/who` | People, teams, organizations | One file per person or organization |
| `.agentic/what` | Knowledge, research, decisions, artifacts | Decisions → `what/decisions/` as ADRs; domain knowledge → `what/context/` |
| `.agentic/how` | Operational processes, plans, session tracking | Sessions → `how/sessions/`; multi-session plans → `how/missions/`; add `status` to frontmatter |

**Checkpoint**: ~8.5 minutes.

### Step 5: Classify existing knowledge (~3-5 minutes)

Use the **Question Test** on existing files:

| If the content answers... | It belongs in... |
|---|---|
| "Who is involved?" — teams, stakeholders, contacts | `.agentic/who/` |
| "What do we know?" — research, decisions, specs, designs | `.agentic/what/` |
| "How do we work?" — processes, runbooks, checklists, plans | `.agentic/how/` |

Common candidates: **CONTRIBUTING.md** → key points into `.agentic/how/` (keep original for GitHub); **architecture docs** → `.agentic/what/decisions/`; **team/contacts** → `.agentic/who/`; **runbooks** → `.agentic/how/`.

> **Don't over-migrate.** Move 2-3 files on Day 1. The triad grows organically.

**Checkpoint**: ~12 minutes.

### Step 6: Test (~1 minute)

Open a terminal in your project and start your agent (`claude` or equivalent). It should auto-load `CLAUDE.md`, understand structure, know where to file knowledge, and follow your safety rules. Try: *"What is this project and how is the knowledge organized?"* — if it answers correctly, you're operational. **Checkpoint**: ~13 minutes. Done.

---

## 5. Walkthrough: Bare Form

For knowledge bases, documentation projects, and repos where aDNA IS the project. Steps are identical to embedded form with these differences:

```bash
# Instead of .agentic/ subdirectories:
mkdir -p who what how
```

Project structure becomes `who/` + `what/` + `how/` + `CLAUDE.md` + `MANIFEST.md` + `STATE.md` at root. Update `CLAUDE.md` `## Structure` section to reference root-level triad (`who/`/`what/`/`how/` instead of `.agentic/who/`/...).

**Extra considerations**:
- **Existing `how/` or `what/`**: adopt aDNA naming with `AGENTS.md` files, or switch to embedded form to avoid collisions.
- **Root crowding**: bare adds `CLAUDE.md`, `MANIFEST.md`, `STATE.md`, `README.md`. Embedded keeps root cleaner.
- **Mixed content**: in bare form, triad directories hold only aDNA-managed knowledge. Code, build artifacts, tooling configs stay at root or in their own directories.

---

## 6. Starter Templates

Copy-paste-ready minimal versions. Customize the bracketed sections.

### CLAUDE.md

```markdown
# CLAUDE.md — [Your Project Name]

## Identity
This is [one-sentence project description].

## Structure
[Bare: `who/`, `what/`, `how/` at root]
[Embedded: `.agentic/who/`, `.agentic/what/`, `.agentic/how/`]

## Agent Protocol
1. Read this file (auto-loaded)
2. Read `STATE.md` for current context
3. Read the `AGENTS.md` in the directory you're working in

## Safety Rules
- Read before write
- Set `last_edited_by` and `updated` on every edit
- Do not modify files outside the triad without explicit instruction

## Domain
- [Key fact about your project]
- [Important convention or pattern]
- [Domain terminology to know]
```

### MANIFEST.md / STATE.md

```markdown
---
type: manifest   # or 'state'
created: YYYY-MM-DD
updated: YYYY-MM-DD
---

# [Your Project Name]   # or '# Operational State'

## What This Is        # MANIFEST only
[2-3 sentences describing the project.]

## Architecture        # MANIFEST only
[Languages, frameworks, key directories.]

## Current Phase       # STATE only
[What's happening now.]

## Next Steps
- [Next action]
```

### AGENTS.md

```markdown
# [directory_name]/ — Agent Guide

## What's Here
[One sentence: what this directory contains.]

## Working Rules
- [Naming convention for files]
- Use frontmatter: `type`, `created`, `updated`, `tags`
```

---

## 7. Common Pitfalls

- **CLAUDE.md inside `.agentic/`**: AI agents auto-load from project root. If it's nested, they lose orientation. **Always at project root**, regardless of triad form.
- **Over-engineering Day 1**: 16 entity types + custom templates + campaign hierarchies + context library = paralysis. Start with the minimum (5 files + 3 dirs); add structure when you need it.
- **Frontmatter perfectionism**: start with `type`, `created`, `tags`. Add `updated`, `status`, `last_edited_by` when you have collaborators. Add domain fields when you repeatedly include the same info. Don't design the perfect schema upfront.
- **Forgetting AGENTS.md**: every triad directory needs one. Without it, agents have no routing and either skip the directory or read everything (wasting tokens). Even a 3-line AGENTS.md beats none.
- **Migrating everything at once**: don't dump all existing docs into the triad in one session. Move 2-3 files to prove the pattern. Let structure grow with new knowledge. Forced migrations create filing confusion and don't stick.
- **Replacing your existing structure**: aDNA doesn't replace `src/`/`lib/`/`tests/`. In embedded form, `.agentic/` sits alongside your code — it manages *project knowledge*, not source.

---

## 8. What to Do Next

Once the core is working, enhance progressively:

- **Week 1: Session tracking**. Add `how/sessions/`. Each session creates a file here before modifying the vault — the next agent reads the last session's handoff notes and continues.
- **Week 2: Templates**. Create `how/templates/` for file types you create repeatedly. A template is a Markdown file with pre-filled frontmatter copied at creation.
- **Week 3: Your first campaign**. For multi-session initiatives (feature build, research project, migration), create `how/campaigns/`. Campaigns → missions → objectives gives agents structured context about what you're working toward.
- **When needed: Context library**. As domain knowledge accumulates, organize into `what/context/` with topic-based files. Agents load on demand instead of re-discovering each session.
- **When collaborating: Obsidian config**. Add `.obsidian/` with theme + plugin config. See the [Agentic-DNA repo](https://github.com/LatticeProtocol/Agentic-DNA) for 15-plugin Tokyo Night setup.
- **When connecting: Bridge patterns**. To reference or compose with other aDNA instances, see [`adna_bridge_patterns.md`](adna_bridge_patterns.md) for nesting, sibling, and monorepo composition.

---

## 9. Quick Reference

### The Question Test

| Question | Triad leg |
|---|---|
| Who is involved? | `who/` |
| What does this project know? | `what/` |
| How does this project work? | `how/` |

### File placement checklist

```
Project root:
  ✓ CLAUDE.md          (agent master context — ALWAYS at root)
  ✓ MANIFEST.md        (project identity)
  ✓ STATE.md           (operational state)

Triad (bare: root / embedded: .agentic/):
  ✓ who/AGENTS.md
  ✓ what/AGENTS.md
  ✓ how/AGENTS.md
```

### Minimum frontmatter

```yaml
---
type: [entity_type]
created: YYYY-MM-DD
tags: [relevant, tags]
---
```

---

*Migration guide v1.1 | Companion to the [aDNA Standard](adna_standard.md), [Design Document](adna_design.md), and [Bridge Patterns](adna_bridge_patterns.md)*
