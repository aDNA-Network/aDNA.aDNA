---
type: glossary_entry
created: 2026-04-14
updated: 2026-04-14
status: active
term: "SITREP"
spec_section: "§8.4"
see_also: [session, mission]
last_edited_by: agent_stanley
tags: [glossary, operations]
---

# SITREP

## Plain-Language Definition

A SITREP (situation report) is the structured status update written at the end of every session. It answers five questions: What was completed? What's still in progress? What should happen next? What's blocking progress? Which files were touched? It is the handoff note for whoever picks up the work next.

## Technical Definition

A structured close-out report required at the end of every [[what/glossary/glossary_session|session]]. Format: Completed, In Progress, Next Up, Blockers, Files Touched. Every session MUST include a SITREP and a next-session prompt — a self-contained paragraph enabling a fresh agent to continue the work. (aDNA Standard §8.4-§8.5)

## Usage Examples

- Every session file in this vault's `how/sessions/history/` ends with a SITREP section. The "Next Session Prompt" at the bottom is what enables a new agent to pick up exactly where the last one left off.
- STATE.md distills the most recent SITREP into the vault's operational snapshot — making cold-start orientation a two-file read (CLAUDE.md → STATE.md).

## See Also

- [[what/glossary/glossary_session|Session]]
- [[what/concepts/concept_convergence|Convergence (concept)]]
- [[what/glossary/glossary_mission|Mission]]
