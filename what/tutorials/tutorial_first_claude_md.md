---
type: tutorial
created: 2026-04-14
updated: 2026-05-29
status: active
level: beginner
prerequisites: [concept_triad, concept_governance_files]
estimated_time: "20 minutes"
dual_audience: true
last_edited_by: agent_stanley
tags: [tutorial, beginner, claude_md, governance, setup]
---

# <img src="../../site/src/assets/icons/icon_how.svg" alt="how" width="22" /> Create Your First CLAUDE.md

## What You'll Build

A working CLAUDE.md — the master governance document that tells AI agents who they are, what rules to follow, and how your project is structured. An AI agent dropped into your project cold can orient and begin useful work.

**Prerequisites**: [[what/concepts/concept_triad|triad]] (what/how/who) + [[what/concepts/concept_governance_files|governance files]] (what they do and why).

## Steps

### Step 1: Create the File

At project root, create `CLAUDE.md`. The name matters — AI tools like Claude Code auto-load it on startup.

```bash
touch CLAUDE.md
```

### Step 2: Write the Identity Section

Start with who the agent is and what the project does:

```markdown
# CLAUDE.md — My Project

## Identity

You are working on [project name] — [one sentence describing what it does].

### Operating Style

- [How should the agent communicate? Formal? Casual? Technical?]
- [Any persona traits? "Be concise." "Explain your reasoning."]
```

Project-specific identity replaces the generic "I'm an AI assistant" behavior — the agent becomes a team member, not a generic tool.

**See it in action**: open this vault's `CLAUDE.md` (at `aDNA.aDNA/CLAUDE.md`). The identity section defines the Rosetta persona ("named after the Rosetta Stone") with operating-style rules like "the structure IS the lesson" and "warm and precise, anti-jargon-first."

### Step 3: Write the Project Map

Add a directory structure overview so the agent knows where things are:

```markdown
## Project Map

\```
my_project/
├── CLAUDE.md        # This file
├── what/            # Knowledge and reference material
│   ├── context/     # Agent context library
│   └── decisions/   # Architecture Decision Records
├── how/             # Operations and processes
│   ├── templates/   # Reusable file templates
│   └── sessions/    # Session tracking
└── who/             # People and governance
    └── governance/  # Policies and roles
\```
```

Without it, the agent guesses — and guesses wrong.

### Step 4: Add Standing Rules and Agent Protocol

Define the rules that apply to every session, then tell the agent what to do on startup:

```markdown
## Standing Rules

1. **Read STATE.md before working.** Check current phase, blockers, and recent activity.
2. **Never modify shared configs without reading first.** Read-before-write prevents overwrites.
3. **Set `last_edited_by` on every edit.** Attribution enables conflict detection.
4. **Commit after significant changes.** Don't rely on auto-save.

## Agent Protocol

### Startup Checklist

1. Read CLAUDE.md (this file — auto-loaded)
2. Read STATE.md — understand current phase and blockers
3. Check `how/sessions/active/` — look for conflicting sessions
4. Create a session file and begin work
```

Rules should be specific and actionable ("Be careful" is not a rule; "Read STATE.md before working" is). The startup checklist is the [[what/concepts/concept_convergence|convergence model]] in miniature — the agent starts broad (CLAUDE.md) and narrows to the specific (STATE.md → active session → current task).

### Step 5: Validate It

Test by answering:

| Question | If Yes → Done | If No → Fix |
|---|---|---|
| Could a new agent orient from this file alone? | Identity + map sufficient | Add more context to the project map |
| Are the rules specific and actionable? | Rules will be followed | Replace vague rules with concrete instructions |
| Does the startup checklist produce a working session? | Protocol works | Add missing steps |
| Is the tone consistent with how you want agents to work? | Persona is set | Adjust the operating style |

## What You Learned

- CLAUDE.md is the single most important file in an aDNA project — the agent's first read.
- Four sections do the heavy lifting: identity, project map, standing rules, agent protocol.
- Specificity beats generality. The file demonstrates [[what/concepts/concept_convergence|convergence]] — broad orientation narrowing to specific action.

## Next Steps

- [[what/tutorials/tutorial_question_test|Apply the Question Test]] — sort content into the triad
- [[what/concepts/concept_token_selection|Token Selection]] — how CLAUDE.md fits the token budget
