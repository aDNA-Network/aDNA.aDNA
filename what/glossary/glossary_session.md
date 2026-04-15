---
type: glossary_entry
created: 2026-04-14
updated: 2026-04-14
status: active
term: "Session"
spec_section: "§8.1"
see_also: [SITREP, mission, frontmatter]
last_edited_by: agent_stanley
tags: [glossary, operations]
---

# Session

## Plain-Language Definition

A session is one stretch of work by an agent (or human). It has a clear start (create a session file), a middle (do the work), and an end (write a status report). Sessions create an audit trail so the next agent — or a future version of you — knows what happened.

## Technical Definition

A bounded unit of agent work with a defined lifecycle: creation (write session file in `how/sessions/active/`), execution (perform and log work), close-out (write [[what/glossary/glossary_sitrep|SITREP]] + next-session prompt), and archive (move to `how/sessions/history/YYYY-MM/`). A session file MUST be created before modifying any other project files. Two tiers exist: Tier 1 (lightweight audit trail) and Tier 2 (adds coordination safeguards for shared config edits). (aDNA Standard §8.1-§8.3)

## Usage Examples

- This vault's session history lives in `how/sessions/history/` — each file records what one agent accomplished, what was left unfinished, and what to do next.
- Session IDs follow the format `session_{user}_{YYYYMMDD}_{HHMMSS}_{descriptor}` for collision-free sorting.

## See Also

- [[what/glossary/glossary_sitrep|SITREP]]
- [[what/glossary/glossary_mission|Mission]]
- [[what/concepts/concept_governance_files|Governance Files (concept)]]
