---
type: glossary_entry
created: 2026-04-14
updated: 2026-04-14
status: active
term: "Coordination Note"
spec_section: "§11.1"
see_also: [who, session, collision prevention]
last_edited_by: agent_stanley
tags: [glossary, coordination]
---

# Coordination Note

## Plain-Language Definition

A coordination note is a short message from one agent to another, left in `who/coordination/`. Think of it as a sticky note on a colleague's desk: it says who wrote it, who it is for, what needs attention, and when it expires. Notes are temporary by design — they get archived once the receiving agent acts on them.

## Technical Definition

An ephemeral cross-agent communication artifact stored in `who/coordination/`. Created when needed, consumed by the target agent, and archived when resolved. Each note MUST include: creator, target, coordination concern, creation/expiry timestamps, and action needed. Three urgency levels: `urgent` (read before any work), `info` (read during startup), `fyi` (read when convenient). Agents MUST check `who/coordination/` during every session startup. (aDNA Standard §11.1-§11.3)

## Usage Examples

- In this vault, `who/coordination/` is the designated handoff channel. If one agent discovers a blocking issue mid-session, it drops an `urgent` coordination note rather than hoping the next agent reads the SITREP carefully enough.
- Coordination notes are part of Tier 3 [[what/glossary/glossary_collision_prevention|collision prevention]] — the multi-agent safety layer.

## See Also

- [[what/glossary/glossary_collision_prevention|Collision Prevention]]
- [[what/glossary/glossary_who|who/]]
- [[what/glossary/glossary_session|Session]]
