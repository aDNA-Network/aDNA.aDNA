---
type: governance
created: 2026-04-14
updated: 2026-04-14
status: active
last_edited_by: agent_stanley
tags: [governance, community, contributions]
---

# Contribution Standards

## Purpose

Define how participants contribute improvements to the aDNA standard and to individual aDNA vaults. This document covers naming rules, quality expectations, submission workflows, and the relationship between vault-level work and upstream contributions.

## Contribution Types

| Type | Description | Where It Goes |
|------|-------------|--------------|
| **Bug report** | Something is broken or incorrect | GitHub issue on the relevant repo |
| **Upstream improvement** | Framework-level gap that would help all vaults | Backlog idea (`how/backlog/idea_upstream_*.md`) → GitHub issue |
| **Side-quest result** | Structured data from a community experiment | PR to `how/quests/{quest}/results/` |
| **Content contribution** | New or improved content files | PR to the target vault |
| **Migration** | Version upgrade prompt | PR to `how/migrations/` |

## Naming Conventions

All contributions MUST follow the aDNA naming standard (§6):

- **Always underscores, never hyphens**: `concept_fair_metadata.md`, not `concept-fair-metadata.md`
- **Type prefix**: `{type}_{descriptive_name}.md` — e.g., `glossary_triad.md`, `pattern_progressive_enrichment.md`
- **Lowercase throughout** (except governance files which are ALLCAPS)
- **Directories**: lowercase, underscores, no type prefix
- **Maximum 64 characters** for the name portion (before `.md`)

## Quality Gates

Every content contribution must pass these checks before merge:

1. **[[what/glossary/glossary_frontmatter|Frontmatter]] complete** — all base fields (`type`, `status`, `created`, `updated`, `last_edited_by`, `tags`) plus type-specific fields from the relevant [[what/glossary/glossary_template|template]]
2. **Cross-linking** — minimum 2 wikilinks to related files in the vault
3. **Spec citation** — normative claims reference `adna_standard.md` with section numbers
4. **Dual audience** — legible to both developers and non-developers (for content vaults like this one)
5. **Self-reference** — content files cite concrete vault examples where applicable
6. **Token budget** — file stays within type-specific limits (e.g., [[what/glossary/glossary_agents_md|AGENTS.md]] for each directory specifies expected file sizes)

## Submission Workflow

### For Vault Contributors

1. **Read the AGENTS.md** in the target directory — it defines conventions
2. **Use the template** from `how/templates/template_{type}.md`
3. **Write the content** following quality gates above
4. **Update frontmatter** — set `last_edited_by` and `updated`
5. **Commit and push** — clear commit message describing the change

### For Upstream Contributions

Follow `how/skills/skill_upstream_contribution.md`:

1. Agent notices a framework-level gap during normal work
2. Agent mentions the finding at a natural pause point
3. If the user approves, create `how/backlog/idea_upstream_{slug}.md`
4. Optionally open a GitHub issue on `aDNA-Network/aDNA`

### For Side-Quest Results

Follow `what/docs/side_quest_guide.md`:

1. Pick a quest from `how/quests/`
2. Run the procedure as specified
3. Record results in the required format
4. Submit as a PR to the quest's `results/` directory

## Participation Levels

Contributions map to the [[who/governance/VISION|participation ladder]]:

| Level | Contribution Type |
|-------|------------------|
| **Level 0** | Use aDNA standalone — no contribution required |
| **Level 1** | Submit upstream improvements when agents surface them |
| **Level 2** | Run side-quests, submit structured results |
| **Level 3** | Create quests, review contributions, write migrations |

Every level is self-contained. No level requires the next.

## Related

- [[who/governance/governance_code_of_conduct|Code of Conduct]] — behavioral standards
- [[who/governance/governance_agent_protocol|Agent Protocol]] — partnership model
- [[who/governance/governance_conflict_resolution|Conflict Resolution]] — dispute handling
