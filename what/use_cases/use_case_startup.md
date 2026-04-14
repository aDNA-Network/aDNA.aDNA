---
type: use_case
created: 2026-04-14
updated: 2026-04-14
status: active
domain: startup
persona: "Alex Rivera"
deployment_form: bare
last_edited_by: agent_stanley
tags: [use_case, startup, product, ai_agents, fast_moving]
---

# A Startup Ships Faster with aDNA

## Meet Alex Rivera

Alex is CTO of a 12-person AI startup building a developer tool. The team ships weekly, context switches constantly between features, and relies heavily on AI agents for code generation, documentation, and planning. Institutional knowledge lives in people's heads and disappears when they go on vacation.

## The Challenge

The startup moves fast — too fast for knowledge to keep up. Feature decisions are made in Slack and forgotten. Architecture context lives in the heads of 3 engineers who've been there since day one. New hires (arriving monthly) can't find answers to basic questions: "Why did we choose this database?" "Where's the auth flow documented?" "What's the priority right now?" AI agents generating code lack project context and produce boilerplate that misses the codebase's conventions.

## How aDNA Helps

Alex adds aDNA as the team's operational knowledge layer. The vault doesn't replace the codebase — it sits alongside it as the brain the codebase doesn't have.

**Decisions get captured** (`what/decisions/`): Every architectural choice gets a lightweight ADR. "Why Postgres over Mongo?" has a file. When someone asks, the answer is a link, not a 20-minute retelling.

**Agents get context** (`what/context/`): A topic on the product's architecture gives AI agents the conventions they need: naming patterns, API structure, error handling approach. Agent output goes from generic to codebase-aware.

**Priorities stay visible** (`STATE.md`): Updated weekly with current sprint focus, blockers, and shipping timeline. Any agent or new team member reads STATE.md and knows what matters right now.

## What Their Vault Looks Like

```
devtool.aDNA/
├── what/
│   ├── context/         # Product architecture, API conventions, tech stack
│   ├── decisions/       # 40+ ADRs (architecture decision records)
│   └── lattices/        # CI/CD pipeline, deployment workflow
├── how/
│   ├── campaigns/       # Q2 goals, major feature epics
│   ├── missions/        # Sprint-sized deliverables
│   ├── sessions/        # Agent work audit trail
│   ├── templates/       # ADR template, feature spec template
│   └── backlog/         # Ideas and improvements
└── who/
    ├── governance/      # Coding standards, review policies
    ├── team/            # 12 engineers with roles
    └── coordination/    # Cross-team handoff notes
```

## Outcome

Onboarding drops from 3 weeks to 3 days. New engineers read the context library and decision records instead of shadowing senior devs. AI agents produce codebase-aware output because they load architecture context before generating. The team ships the same speed but with less context loss.

## Related

- [[what/concepts/concept_token_selection|Token Selection]] — how agents load the right context for each task
- [[what/concepts/concept_convergence|Convergence Model]] — how campaigns and missions focus weekly sprints
- [[what/comparisons/comparison_adna_vs_notion|aDNA vs. Notion]] — why the startup chose aDNA alongside Notion
