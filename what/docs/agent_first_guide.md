---
type: context
title: "Agent-First Guide — Using aDNA Without Obsidian"
created: 2026-03-19
updated: 2026-05-29
status: approved
last_edited_by: agent_stanley
tags: [adna, agent-first, claude-code, terminal, guide]
token_estimate: ~2500
---

# Agent-First Guide

<!-- Using aDNA with Claude Code and a terminal — no Obsidian required -->

## 1. Introduction

For developers using aDNA with Claude Code (or another AI coding agent) from the terminal, without Obsidian. If you already use Obsidian, the [Quick Start](../../README.md#quick-start) covers everything.

**You'll end with**: a working aDNA vault Claude Code can navigate — session tracking, templates, full execution hierarchy — all from the terminal.

**Time**: 10-15 minutes. **Prerequisites**: Git, a text editor, the `claude` CLI ([Claude Code](https://docs.anthropic.com/en/docs/claude-code/overview)).

---

## 2. What Works Without Obsidian

aDNA is a directory convention — Markdown files with YAML frontmatter in a `who/`/`what/`/`how/` triad. Obsidian adds a visual layer; the operational core is plain files on disk.

### Feature parity at a glance

| Bucket | Count | % | What's in it |
|--------|-------|---|-------------|
| **Works everywhere** | 22 | 55% | Governance, sessions, templates, context library, execution hierarchy, git workflow, FAIR metadata, lattice YAML, naming conventions, skills, campaigns, missions, onboarding |
| **Degraded** | 6 | 15% | Wikilinks (no click-nav), graph view, Dataview, search, Meta Bind, Tasks queries |
| **Requires Obsidian** | 12 | 30% | Templater auto-trigger, Canvas, Obsidian Git, Notebook Navigator, Homepage, Icon Folder, Style Settings, BRAT, Termy, Pretty/Fold Properties, Banners |

**The important number**: the operational core — governance, session tracking, templates-as-files, context library, execution hierarchy, git — is **100% functional** without Obsidian. The 30% you lose is visual polish and automation shortcuts. The real value split is **80/20**.

### Works everywhere — plain Markdown + YAML

| Feature group | How it works |
|---|---|
| Governance files (`CLAUDE.md` / `AGENTS.md` / `MANIFEST.md` / `STATE.md`) | Plain Markdown; Claude Code auto-loads `CLAUDE.md` on startup. |
| Triad structure (`who/`/`what/`/`how/`) + 14 base entity types | Directory + naming conventions. Filesystem-native. |
| YAML frontmatter | Standard YAML. Agent-parsed, editor-readable. |
| Session tracking | Files in `how/sessions/active/`, moved to `history/` on close. |
| Execution hierarchy (Campaign → Mission → Objective) | Plain Markdown with `status` tracking. |
| Context library + recipes | `what/context/` loaded on demand; cross-topic recipes agent-parsed. |
| Skills + templates | `how/skills/` agent-executed; `how/templates/` copy manually. |
| Git workflow | Standard `git commit`/`push`/`pull` from terminal. |
| Lattice YAML + FAIR metadata | `.lattice.yaml` definitions schema-validated; `fair:` blocks need no renderer. |
| Wikilinks as identifiers | `[[filename]]` is machine-parseable cross-reference syntax; agents use it for relationship discovery. |
| First-run detection + onboarding | Claude Code reads `CLAUDE.md`, detects uncustomized vault, runs `skill_onboarding.md` interactively. Fully terminal-compatible. |
| Bridge patterns, OODA cascade, convergence model, escalation/priority rules | Methodology + agent behavior — not Obsidian features. |

### Degraded — present in files but don't render

| Feature | Workaround |
|---|---|
| Wikilinks `[[…]]` (no click-nav, no auto-rename) | `rg '\[\[' --type md` to trace links. Agents parse natively. |
| Graph view | `rg '\[\[' --type md` for relationship traces. |
| Dataview, Meta Bind, Tasks code blocks | Ask Claude Code to query frontmatter (e.g. "find all files with status: active"). Edit frontmatter directly. |
| Search | `rg` (ripgrep) or your editor's search. Claude Code's `Grep` tool works across the vault. |

### Requires Obsidian — completely absent

| Feature | Impact |
|---|---|
| Templater auto-trigger | Low — copy from `how/templates/` manually, or let Claude Code do it. |
| Canvas / Advanced Canvas | Medium — use Mermaid diagrams or skip visual workflows. |
| Obsidian Git auto-commit | None — use standard `git`. |
| Notebook Navigator | Low — `ls`, `tree`, or editor file explorer. |
| Homepage | None — `STATE.md` serves the same purpose for agents. |
| Icon Folder, Style Settings, Pretty/Fold Properties, Banners | None — cosmetic only. |
| BRAT, Termy | None — Obsidian-internal tooling. |

---

## 3. Setup Walkthrough

### Step 1: Clone the repo

```bash
git clone https://github.com/LatticeProtocol/Agentic-DNA.git adna
cd adna
```

Skip `./setup.sh` — that script downloads Obsidian plugins and themes. The `.obsidian/` directory will exist but is inert without Obsidian installed.

### Step 2: Launch Claude Code

```bash
claude
```

Claude Code auto-loads `CLAUDE.md`. **Berthier** — the built-in agent personality — orients on the vault structure and is ready to work.

- **Fresh vault** (empty session history, uncustomized `MANIFEST.md`): Berthier auto-runs interactive onboarding — architecture explanation, project questions, governance customization. Entire flow runs in the terminal.
- **Reference repo** (default): ships with reference content; onboarding won't auto-trigger. Tell Claude Code what to do — `"Customize this vault for my project"` walks you through `MANIFEST.md`/`STATE.md`/CLAUDE.md identity edits; `"Run the onboarding skill"` invokes `how/skills/skill_onboarding.md` for the full guided experience.

### Step 3: Verify

```bash
head -20 MANIFEST.md   # your project name + description
head -20 STATE.md      # your current phase + next steps
ls how/sessions/active/  # at least one session file
```

If all three check out, your vault is operational.

### Alternative: manual setup (no agent)

Edit `MANIFEST.md` (project description), `STATE.md` (current phase + next steps), and optionally `CLAUDE.md` `## Identity & Personality`. Use starter templates in the [Migration Guide](migration_guide.md) § 6.

---

## 4. Session Workflow

### Creating sessions

Without Templater's auto-trigger, two options:

- **Option A (recommended)**: launch `claude` — Claude Code's agent protocol creates a session file automatically on startup.
- **Option B (manual)**: `cp how/templates/template_session.md how/sessions/active/session_$(whoami)_$(date +%Y%m%d)_descriptor.md`, then open and replace Templater placeholders (`<% tp.date.now() %>` → today's date; `<% tp.file.title %>` → filename; `YYYY-MM-DD`/`{username}`/`{ISO_TIMESTAMP}` → actual values).

### Closing sessions

1. Update SITREP (completed / in progress / next up / blockers)
2. Write the **Next Session Prompt** — self-contained paragraph so the next agent can continue
3. Set `status: completed` in frontmatter
4. Move the file:

```bash
mkdir -p how/sessions/history/$(date +%Y-%m)
mv how/sessions/active/session_*.md how/sessions/history/$(date +%Y-%m)/
```

### Git workflow

```bash
git pull                                       # session start
git add -A && git commit -m "session: ..."     # after changes
git push
```

If you're solo, commit frequency is yours. With multiple collaborators, commit and push at end of session to avoid conflicts.

---

## 5. Claude Code Configuration

### CLAUDE.md placement

`CLAUDE.md` must be at the **project root** — Claude Code auto-loads it from the working directory. Single most important file for agent orientation; if it's missing, agents start blind.

### Memory vs sessions

| Mechanism | Location | Scope | Use for |
|---|---|---|---|
| **Claude Code memory** | `~/.claude/projects/` | Personal, per-machine | Your preferences, feedback, credentials, tool notes |
| **Vault sessions** | `how/sessions/` | Shared, in git | Work continuity across agents and collaborators |

Memory is private — local-only, not in git. Sessions are shared — committed to the vault repo so any collaborator (human or agent) can pick up where you left off.

### `.claude/` and `.mcp.json`

Claude Code creates a **gitignored** `.claude/` directory in your project for local settings (`settings.json` for permissions/hooks + other machine-local state). Each collaborator has their own. If you use MCP servers, `.mcp.json` is also gitignored. Claude Code has native filesystem access — add MCP servers only for external integrations (databases, APIs, specialized tools).

### Useful patterns

| Pattern | When to use |
|---|---|
| **Plan mode** | Before a multi-step mission. Claude Code explores, designs an approach, and gets approval before writing code. |
| **Explore agents** | For codebase research. Spawns a sub-agent to search files without consuming your main context. |
| **Hooks** | For automation. Configure in `.claude/settings.json` to run scripts on events (auto-format, post-edit tests). |
| **`/clear` then re-orient** | When context goes stale. Clear the conversation; Claude Code reloads `CLAUDE.md` for a fresh start. |

---

## 6. Growing Into Obsidian

Later, if you decide to add Obsidian: install it, open the vault directory, enable community plugins when prompted, run `./setup.sh`. Everything lights up — graph view, wikilink navigation, canvas, auto-templates, the Tokyo Night theme. One-way door that adds capability without changing anything you've already built. Your governance files, sessions, context library, and git history all carry over unchanged.

---

*Agent-first guide v1.1 | Companion to the [Migration Guide](migration_guide.md), [aDNA Standard](adna_standard.md), and [Architecture Overview](adna_design.md)*
