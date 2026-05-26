---
type: directory_index
created: 2026-02-17
updated: 2026-05-26   # M5.2 bench expansion: 21-persona bench live (10 reviewers + 11 adopters)
last_edited_by: agent_stanley
tags: [directory_index, who, m5_2_bench_expansion]
---

# who/ — Organization (Agent Reference)

## Purpose

`who/` holds organization records — the **WHO** of this project. People, teams, coordination notes, governance policies, and optionally customers, partners, contacts, and communications.

## Subdirectories

| Folder | Purpose | Status |
|--------|---------|--------|
| `coordination/` | Cross-agent ephemeral notes — handoffs, urgency signals | Required |
| `governance/` | Roles, decision authority, policies | Required |
| `community/` | **[EXT]** Community roles, contribution paths, governance | Active |
| `adopters/` | **[EXT]** Adopter personas and deployment profiles — **11 personas at M5.2** (5 original_rosetta + 6 p5_planned) | Active |
| `reviewers/` | **[EXT]** Specialist UX/design reviewer personas — **10 personas at M5.2** (5 existing_specialist + 5 visual_focused) | Active |

## Naming

All files follow `type_descriptive_name.md` (underscores only, never hyphens).

## Progressive Loading

**This file is a routing index.** Read it to understand what `who/` contains, then drill into the specific subdirectory relevant to your task. The WHO leg is lightweight — coordination (~400 tokens) and governance (~300 tokens) are the two subdirectories.

**Recommended loading path**: Root AGENTS.md → `who/AGENTS.md` (this file) → specific subdirectory AGENTS.md

## Load/Skip Decision

**Load this directory when**:
- Orienting on what organizational systems exist (coordination, governance, and any project-specific extensions)
- Deciding which subdirectory to drill into for people or governance work
- Understanding how the WHO leg connects to WHAT and HOW

**Skip when**:
- Already know which subdirectory you need — go directly to its AGENTS.md
- Working purely in `what/` or `how/` with no organizational interaction
- Mid-session and already oriented on the `who/` structure

**Token cost**: ~300 tokens (this AGENTS.md)

## 21-Persona Evaluation Bench (M5.2 ratified)

The full evaluation bench for the v8 P5 100-cycle decadal program (D11-D20):

- **11 adopters** at [adopters/AGENTS](adopters/AGENTS.md) (5 original_rosetta + 6 p5_planned NEW M5.2)
- **10 reviewers** at [reviewers/AGENTS](reviewers/AGENTS.md) (5 existing_specialist + 5 visual_focused NEW M5.2)
- Per-decadal allocation + 10-dim scoring rubric: [m50_persona_bench_expansion](../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_persona_bench_expansion.md)
- Empirical binding evidence (8 OSS dossiers): [m51_cross_target_synthesis §4](../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m51_cross_target_synthesis.md)

## Cross-References

- [who/coordination/AGENTS](coordination/AGENTS.md) — Cross-agent coordination protocol
- [who/governance/AGENTS](governance/AGENTS.md) — Governance reference
- [who/community/AGENTS](community/AGENTS.md) — Community architecture
- [who/adopters/AGENTS](adopters/AGENTS.md) — Adopter personas (11 at M5.2)
- [who/reviewers/AGENTS](reviewers/AGENTS.md) — Reviewer personas (10 at M5.2)
- [what/AGENTS](../what/AGENTS.md) — Knowledge objects (WHAT)
- [how/AGENTS](../how/AGENTS.md) — Operations (HOW)
