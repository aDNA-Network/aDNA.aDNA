---
type: adopter
created: 2026-04-14
updated: 2026-04-14
status: active
persona_type: team
technical_level: expert
domain: "enterprise platform engineering"
deployment_form: embedded
last_edited_by: agent_stanley
tags: [adopter, enterprise, team, compliance]
---

# Enterprise Team

## Background

A platform engineering manager leading a 50-person organization at a financial services company. Three teams run concurrent AI-agent-assisted projects. Compliance requires audit trails for all agent-generated work. Knowledge silos between teams waste effort through repeated problem-solving.

## Goals

- Establish a governance framework for AI agent work that satisfies compliance
- Create auditable trails: which agent wrote what, with what context, and was it reviewed
- Enable cross-team knowledge sharing without sacrificing team autonomy
- Standardize documentation approach across teams (replacing a mix of wikis, Confluence, and markdown)

## Pain Points

- Cannot answer compliance questions: "Which agent wrote this code?" "What context was it given?"
- Each team uses a different documentation system — no shared conventions
- Knowledge duplication: same infrastructure problems solved three times independently
- No mechanism for cross-team sharing of validated solutions

## How They Use aDNA

Deploys aDNA as the standard knowledge architecture across all three teams, each with its own vault:

- **`how/sessions/`** creates compliance-ready audit trails: session ID, intent, files touched, [[what/glossary/glossary_sitrep|SITREP]]
- **`who/governance/`** provides consistent agent policies and review requirements across teams
- **Federation** connects team vaults — shareable pipelines and validated patterns flow between teams via lattice composition
- **[[what/glossary/glossary_embedded_triad|Embedded triad]]** deployment (`.agentic/`) keeps aDNA structure separate from codebases

The enterprise team operates at the intersection of [[who/community/community_roles|Level 0]] (vault usage) and [[who/community/community_roles|Level 1]] (upstream improvements surfaced across three teams).

**Self-reference**: The session tracking system this vault uses (`how/sessions/active/` → `how/sessions/history/YYYY-MM/`) is the same audit trail the enterprise team needs for compliance — just at a smaller scale.

## Typical Ontology Extensions

| Entity | Triad | Purpose |
|--------|-------|---------|
| `compliance_check` | how/ | Audit checkpoints and review sign-offs |
| `team_policy` | who/ | Team-specific agent behavior policies |
| `shared_pipeline` | what/ | Cross-team reusable infrastructure patterns |

## Related

- [[what/use_cases/use_case_enterprise_team|Enterprise Team Use Case]] — full narrative
- [[what/tutorials/tutorial_extend_the_ontology|Tutorial: Extend the Ontology]] — adding domain entities
- [[what/patterns/pattern_governance_chain|Governance Chain Pattern]] — multi-vault governance
