---
type: community
created: 2026-04-14
updated: 2026-04-14
status: active
community_type: process
last_edited_by: agent_stanley
tags: [community, processes, contributions, workflows]
---

# Community Processes

## Overview

This document describes the concrete workflows for participating in the aDNA community. Each process maps to a level on the [[who/community/community_roles|participation ladder]] — you only need the processes relevant to your level of engagement.

## Process 1: Upstream Contribution (Level 1+)

How framework-level improvements flow from individual vaults to the shared standard.

### Trigger

An AI agent working in any aDNA vault notices a gap during normal work — a missing template field, an undocumented naming pattern, a workflow that could be smoother. The agent mentions the finding at a natural pause point (end of task, [[what/glossary/glossary_sitrep|SITREP]]).

### Steps

1. **Agent surfaces finding** — "I noticed that `template_session.md` doesn't include a field for estimated duration. This would help with token budget planning."
2. **User evaluates** — Is this a framework-level improvement (helps all vaults) or project-specific?
3. **User approves** — Agent creates `how/backlog/idea_upstream_{slug}.md` with the structured proposal
4. **Optional: open upstream issue** — If the user has GitHub CLI configured, the agent opens an issue on `LatticeProtocol/Agentic-DNA`
5. **Community review** — Maintainers and [[who/community/community_roles|Stewards]] evaluate the proposal
6. **Merge or defer** — Accepted improvements enter the next standard version

**Full protocol**: `how/skills/skill_upstream_contribution.md`

**Self-reference**: This vault itself has surfaced upstream improvements during its build — the 10 ontology extensions added here (concepts, tutorials, patterns, etc.) informed extensions to the base template.

## Process 2: Side-Quests (Level 2+)

How structured community experiments generate evidence for standard decisions.

### Trigger

A question arises that needs data from multiple environments before the right answer is clear. A [[who/community/community_roles|Steward]] designs a quest; community members run it.

### Steps

1. **Browse** `how/quests/` for available quests
2. **Read the quest spec** — procedure, expected output format, estimated cost
3. **Run the procedure** in your own vault with spare agent tokens
4. **Record results** in the required format
5. **Submit** as a PR to the quest's `results/` directory
6. **Aggregation** — `what/lattices/tools/aggregate_results.py` combines all submissions
7. **Decision** — Maintainers use aggregated data to make evidence-based standard choices

**Participation guide**: `what/docs/side_quest_guide.md`

### Quest Lifecycle

```
draft → open → running → analyzing → decided → archived
```

Quests are not permanent. Once enough data is collected and a decision is made, the quest moves to `archived` status with its conclusion documented.

## Process 3: Version Migration (Level 1+)

How vaults stay current as the standard evolves.

### Trigger

A new version of the aDNA standard is released with improvements from community contributions.

### Steps

1. **Check for available migrations** in `how/migrations/`
2. **Read the migration guide** for the target version
3. **Create a git tag** as a rollback point (safety)
4. **Run the migration prompt** — the agent walks through upgrading governance files, templates, and structure
5. **Verify** — check that the vault still validates
6. **Commit** the upgraded vault

**Full guide**: `what/docs/version_migration_guide.md`
**Safety framework**: `what/docs/migration_safety_framework.md`

## Process 4: Content Review (Level 3)

How Stewards review community contributions.

### Review Checklist

1. **Quality gates** — does the contribution pass all gates from [[who/governance/governance_contribution_standards|Contribution Standards]]?
2. **Standard alignment** — is it consistent with the normative spec ([[what/glossary/glossary_adna|adna_standard.md]])?
3. **Scope** — is it framework-level (helps all vaults) or project-specific?
4. **Backward compatibility** — does it break existing vaults?
5. **Migration path** — if it changes structure, is there a migration prompt?

### Feedback

Reviews use the [[who/governance/governance_conflict_resolution|conflict resolution]] framework: constructive challenge, evidence-based reasoning, and clear outcomes. Reviewers state opinions, not options — "Merge because X" or "Revise because Y."

## Related

- [[who/community/community_roles|Community Roles]]
- [[who/governance/governance_contribution_standards|Contribution Standards]]
- [[who/community/community_context_commons|Context Commons Connection]]
