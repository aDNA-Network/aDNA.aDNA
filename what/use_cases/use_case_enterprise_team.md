---
type: use_case
created: 2026-04-14
updated: 2026-04-14
status: active
domain: enterprise
persona: "Jordan Okafor"
deployment_form: bare
last_edited_by: agent_stanley
tags: [use_case, enterprise, multi_team, governance, federation]
---

# An Enterprise Team Governs AI Agent Work with aDNA

## Meet Jordan Okafor

Jordan manages a 50-person platform engineering organization at a financial services company. Three teams run concurrent AI-agent-assisted projects. Compliance requires audit trails for all agent-generated work. Knowledge silos between teams mean the same problems get solved independently three times.

## The Challenge

Governance is the pain point. AI agents produce useful work, but the company can't answer basic compliance questions: "Which agent wrote this code?" "What context was it given?" "Was the output reviewed?" Each team has its own documentation approach — wikis, Confluence, markdown repos — making cross-team knowledge sharing impossible. Jordan needs structure without bureaucracy.

## How aDNA Helps

Jordan deploys aDNA as the standard knowledge architecture across all three teams. Each team gets its own vault. Federation connects them.

**Audit trails** (`how/sessions/`): Every agent session creates a tracked file with session ID, intent, files touched, and SITREP. Compliance can trace any agent output back to its session, mission, and context inputs.

**Cross-team sharing** (`federation`): Team A's data validation pipeline becomes a shared lattice that Teams B and C import. Instead of three implementations, there's one — maintained by Team A, federated to the others.

**Consistent governance** (`who/governance/`): Each vault has the same governance structure — agent policies, review requirements, escalation procedures. New team members and new agents orient the same way regardless of which team they join.

## What Their Vault Looks Like

```
# Each team has its own vault:
platform_team_a.aDNA/
├── what/
│   ├── context/         # Team-specific domain knowledge
│   ├── lattices/        # Shareable pipelines (federation.shareable: true)
│   └── decisions/       # Team ADRs
├── how/
│   ├── sessions/        # Full audit trail (compliance requirement)
│   ├── campaigns/       # Quarterly objectives
│   └── missions/        # Sprint deliverables
└── who/
    ├── governance/      # Agent policies, review requirements
    └── coordination/    # Cross-team notes

# Federation connects the three vaults:
# Team A publishes: latlab lattice publish validation_pipeline.lattice.yaml
# Team B imports:   latlab lattice pull validation_pipeline
```

## Outcome

Compliance audits go from week-long investigations to SQL queries against session files. Cross-team duplication drops as shared lattices replace independent reimplementations. New hires orient in the same structured way regardless of team assignment. The governance overhead is minimal — the same session tracking agents do anyway becomes the compliance audit trail.

## Related

- [[what/concepts/concept_lattice_composition|Lattice Composition]] — how teams compose shared pipelines
- [[what/patterns/pattern_federation_readiness|Federation Readiness]] — preparing lattices for cross-team sharing
- [[what/concepts/concept_governance_files|Governance Files]] — the consistent orientation layer across teams
