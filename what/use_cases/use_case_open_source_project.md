---
type: use_case
created: 2026-04-14
updated: 2026-04-14
status: active
domain: community
persona: "Kai Nakamura"
deployment_form: embedded
last_edited_by: agent_stanley
tags: [use_case, open_source, community, contribution, embedded]
---

# An Open Source Project Scales Contribution with aDNA

## Meet Kai Nakamura

Kai maintains a popular open-source data processing library with 200+ contributors, 50 open issues, and a codebase that's outgrown any single person's understanding. New contributors struggle to find where to start. AI agents asked to help with issues produce patches that violate unwritten conventions.

## The Challenge

The project's knowledge is scattered: architecture decisions live in old GitHub issues, conventions are in a CONTRIBUTING.md that's three years stale, and the only people who know why certain design choices were made are the original 5 maintainers. Contributors spend hours understanding context before they can write useful code. AI agents are even worse — they have no project context and suggest changes that technically work but violate the project's design philosophy.

## How aDNA Helps

Kai deploys aDNA in embedded form (`.agentic/` directory) alongside the existing codebase. The code stays where it is. aDNA adds the knowledge layer.

**Agent orientation** (`.agentic/CLAUDE.md`): Defines the project's design philosophy, naming conventions, and architectural boundaries. Every AI agent that opens the repo gets this context automatically.

**Architecture decisions** (`.agentic/what/decisions/`): Old GitHub issue decisions get captured as ADRs. "Why does the parser use a visitor pattern?" has a referenceable answer instead of a link to a 2-year-old thread with 47 comments.

**Contributor paths** (`.agentic/who/community/`): Defined contribution paths for different skill levels and interest areas. A new contributor reads their path and knows which issues to start with.

## What Their Vault Looks Like

```
data-processing-lib/
├── src/                 # Existing codebase (unchanged)
├── tests/               # Existing tests (unchanged)
├── .agentic/            # aDNA embedded triad
│   ├── CLAUDE.md        # Design philosophy, conventions
│   ├── STATE.md         # Current release focus, open blockers
│   ├── what/
│   │   ├── context/     # Architecture overview, module guides
│   │   └── decisions/   # 30+ ADRs from old GitHub issues
│   ├── how/
│   │   ├── campaigns/   # Release planning
│   │   ├── templates/   # PR template, issue template, ADR template
│   │   └── skills/      # "How to add a new parser" recipes
│   └── who/
│       ├── governance/  # Maintainer policies, review standards
│       └── community/   # Contributor paths by skill level
├── README.md
└── CONTRIBUTING.md      # Now links to .agentic/ for details
```

## Outcome

Contributor ramp-up time drops from weeks to days. The CLAUDE.md file means AI agents generating PR suggestions actually follow project conventions. Architecture decisions are findable and citable instead of buried in GitHub threads. The embedded form means aDNA adds knowledge without reorganizing the existing codebase.

## Related

- [[what/concepts/concept_open_standard|Open Standard]] — how aDNA's open spec fits naturally into open-source culture
- [[what/concepts/concept_context_commons|Context Commons]] — how the project's context library could become a shared community resource
- [[what/comparisons/comparison_adna_vs_plain_markdown|aDNA vs. Plain Markdown]] — why the embedded form beats a docs/ folder
