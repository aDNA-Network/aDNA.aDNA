---
type: community
created: 2026-04-14
updated: 2026-04-14
status: active
community_type: role
last_edited_by: agent_stanley
tags: [community, roles, participation]
---

# Community Roles & Progression

## Overview

The aDNA community is organized around a four-level participation ladder. Each level is self-contained — no level requires the next. You get value at Level 0 without ever engaging with the community, and each subsequent level adds a new kind of contribution and influence.

This structure is documented in [[who/governance/VISION|VISION.md]] as part of the Decentralized Frontier Lab model. This file makes the roles concrete: who does what, what capabilities each level unlocks, and how you progress.

## The Participation Ladder

### Level 0: User

**Who**: Anyone who clones the aDNA template and uses it for their own project.

**What you do**:
- Set up and customize your vault (triad, governance files, templates)
- Work with AI agents in your own project
- Extend the ontology for your domain
- Use [[what/glossary/glossary_skill|skills]], [[what/glossary/glossary_template|templates]], and tools from the base template

**What you don't need to do**: Interact with the community, submit anything upstream, or acknowledge other vaults exist.

**Value**: Structured knowledge architecture that both you and your agents can navigate. Faster agent orientation, better session continuity, organized project knowledge.

**Self-reference**: This vault (`aDNA.aDNA/`) started at Level 0 — a fork of the base template, customized with 10 ontology extensions for documentation. The `last_edited_by: agent_stanley` field on every file is a Level 0 artifact: local attribution, no community interaction required.

### Level 1: Contributor

**Who**: A Level 0 user whose agents have surfaced framework-level improvements and who approves submitting them upstream.

**What you do**:
- Everything from Level 0
- Review agent-surfaced improvement findings at natural pause points
- Approve backlog items for promising improvements (`how/backlog/idea_upstream_*.md`)
- Optionally open GitHub issues on `aDNA-Network/aDNA`

**How to get here**: It happens organically. Your agent notices a missing template field or an undocumented pattern during normal work, mentions it at a session close, and you say "yes, file that." Follow [[who/governance/governance_contribution_standards|Contribution Standards]] and `how/skills/skill_upstream_contribution.md`.

**Value**: Your vault improves as the standard improves. Your contributions make the tools better for everyone.

### Level 2: Quest Runner

**Who**: A Level 1 contributor who runs structured community experiments (side-quests) with spare agent tokens.

**What you do**:
- Everything from Level 1
- Browse quests in `how/quests/`
- Run experiments following the specified procedure
- Submit structured results as PRs
- Your data joins others to inform evidence-based standard decisions

**How to get here**: Browse `how/quests/`, pick one that interests you, follow the procedure, submit results. Each quest takes 10-30 minutes and costs a few thousand tokens.

**Value**: You contribute to evidence-based standard development. Questions like "should FAIR metadata be flat or nested?" get answered with data from multiple environments, not committee opinion.

### Level 3: Steward

**Who**: An experienced contributor who shapes the standard's direction.

**What you do**:
- Everything from Level 2
- Design new quests for questions the community needs answered
- Review upstream contributions and side-quest results
- Write migration prompts for version upgrades
- Participate in standard evolution discussions

**How to get here**: Sustained contribution at Levels 1-2 plus demonstrated understanding of the aDNA standard. Stewards are recognized by existing maintainers, not self-appointed.

**Value**: You're actively steering the direction of the knowledge architecture standard.

## Role Interactions

| Role | Creates | Reviews | Decides |
|------|---------|---------|---------|
| User | Vault content, ontology extensions | Own work | Own vault |
| Contributor | Upstream issues, backlog items | Agent findings | What to submit |
| Quest Runner | Quest results | Quest procedures | Which quests to run |
| Steward | Quests, migrations, standard updates | Contributions, results | Standard direction |

## Related

- [[who/governance/VISION|Vision — The Decentralized Frontier Lab]]
- [[who/governance/governance_contribution_standards|Contribution Standards]]
- [[who/governance/governance_code_of_conduct|Code of Conduct]]
- [[what/glossary/glossary_conformance_level|Conformance Level]]
