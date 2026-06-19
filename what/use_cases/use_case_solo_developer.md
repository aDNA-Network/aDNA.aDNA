---
type: use_case
created: 2026-04-14
updated: 2026-04-14
status: active
domain: personal
persona: "Sam Torres"
deployment_form: bare
last_edited_by: agent_stanley
tags: [use_case, solo, developer, personal, ai_augmented]
---

# A Solo Developer Levels Up with aDNA

## Meet Sam Torres

Sam is a freelance developer working solo on 3-4 client projects simultaneously. They use AI agents heavily — for code generation, documentation, architecture planning. But each project has its own ad hoc structure, and Sam keeps re-explaining the same context to agents every session. There's no team to create documentation for, so "why bother organizing?"

## The Challenge

Solo doesn't mean simple. Sam juggles multiple codebases, each with its own conventions, tech stack, and client requirements. At the start of every AI session, Sam types a wall of context: "This project uses Next.js with Supabase, the auth flow works like this, the client wants..." The agent produces decent output — until tomorrow, when Sam has to type it all again because the agent doesn't remember.

The real cost isn't typing — it's inconsistency. Monday's agent session uses one approach to error handling. Wednesday's session invents a different one because Monday's context wasn't available. Sam spends Friday reconciling.

## How aDNA Helps

Sam creates a lightweight aDNA vault for each client project. Not the full 16-entity-type treatment — a minimal setup that solves the context problem.

**The CLAUDE.md solves 80% of the problem**: One file that captures the project's identity, tech stack, conventions, and current state. Every agent session starts with this context auto-loaded. No more wall-of-text preambles.

**STATE.md tracks momentum**: Updated at the end of each work session with what was done and what's next. Monday's session leaves breadcrumbs for Wednesday's session.

**Decisions don't get lost**: Sam's `what/decisions/` directory captures "why this tech stack?" and "why this auth approach?" — questions that come up months later when the client asks for changes.

## What Their Vault Looks Like

```
client_project.aDNA/
├── CLAUDE.md            # Tech stack, conventions, client requirements
├── STATE.md             # Current sprint focus, last session notes
├── what/
│   ├── context/         # 2-3 files: architecture, API conventions
│   └── decisions/       # Key technical choices with rationale
├── how/
│   ├── sessions/        # Lightweight session logs
│   ├── backlog/         # Ideas and client requests
│   └── templates/       # PR template, deployment checklist
└── who/
    └── governance/      # Client communication preferences
```

Total overhead: 10-15 files. Time to set up: 30 minutes with the base template.

## Outcome

Agent sessions start productive instead of starting with context-setting. Consistency improves because every session loads the same conventions. Sam can pick up a project after 2 weeks away and the STATE.md tells them exactly where they left off. The 30-minute setup saves hours of repeated context-typing per week.

The tipping point was clear: even a solo developer with a 15-file project benefits from aDNA when AI agents are involved. The governance files aren't bureaucratic overhead — they're the context that makes agents useful.

## Related

- [[what/concepts/concept_governance_files|Governance Files]] — why CLAUDE.md + STATE.md solve the solo developer's core problem
- [[what/comparisons/comparison_adna_vs_plain_markdown|aDNA vs. Plain Markdown]] — the tipping point framework for when aDNA is worth it
- [[what/tutorials/tutorial_first_claude_md|Create Your First CLAUDE.md]] — the 20-minute starting point
