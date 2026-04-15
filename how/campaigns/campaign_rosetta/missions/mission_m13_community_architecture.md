---
mission_id: m13
type: mission
title: "Community Architecture"
campaign: campaign_rosetta
status: completed
priority: high
created: 2026-04-14
updated: 2026-04-14
last_edited_by: agent_stanley
tags: [mission, rosetta, community, phase-4]
---

# M13 — Community Architecture

## Mission Brief

Define the community structures, roles, and processes that enable the aDNA open-source community to grow. This mission populates `who/community/` with three files that translate the participation ladder from VISION.md into actionable community infrastructure.

## Objectives

### O1: Community Roles

Create `who/community/community_roles.md` — contributor roles and progression ladder (Levels 0-3) with concrete responsibilities, permissions, and progression criteria per level.

### O2: Community Processes

Create `who/community/community_processes.md` — contribution workflows: upstream improvements, side-quests, migrations, content review.

### O3: Context Commons Connection

Create `who/community/community_context_commons.md` — how individual vault contributions flow into the shared Context Commons knowledge pool.

## Quality Gates

- [ ] Every file: 2+ wikilinks
- [ ] Every file: self-reference to THIS vault
- [ ] Every file: complete frontmatter per template
- [ ] Cross-links to M15 governance docs and glossary terms

## Dependencies

- **Depends on**: M15 (governance docs, glossary terms for linking)
- **Blocks**: M14 (community roles referenced by adopter personas)

## AAR (After Action Review)

- **Worked**: VISION.md and governance_agent_protocol.md provided rich source material. The four-level participation ladder mapped cleanly to concrete roles with clear progression criteria. Cross-linking to M15 glossary terms worked as intended.
- **Didn't**: Nothing blocked; all 3 files completed in sequence.
- **Finding**: Community processes document naturally organizes by participation level — each process maps to the level where it becomes relevant.
- **Change**: None needed. The process → role → commons structure provides a logical reading order.
- **Follow-up**: M17 (Workshop Kits) should reference community_roles.md for audience targeting.
