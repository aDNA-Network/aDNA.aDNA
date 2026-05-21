---
type: directory_index
created: 2026-02-17
updated: 2026-05-20
last_edited_by: agent_stanley
tags: [directory_index, missions]
---

# Missions — Agent Protocol

## Purpose

Multi-session plans for tasks too large to complete in a single agent session. Plans provide decomposition, continuity across sessions, coordination between agents, and accountability.

## Directory Structure

```
how/missions/
├── AGENTS.md                    # This file (protocol)
├── plan_{name}.md               # One file per plan
└── artifacts/                   # Mission and campaign artifacts (AARs, gap registers)
    └── AGENTS.md                # Artifacts directory guide
```

Plans with deliverables MAY use subdirectories:
```
how/missions/{plan_slug}/
├── plan_{slug}.md               # Master plan
├── deliverable_a.md
└── deliverable_b.md
```

## Mission Classes

Missions can be classified by their primary activity. The `mission_class` frontmatter field is optional but helps agents understand the mission's nature before reading the full document.

| Class | Purpose | Typical Output |
|-------|---------|----------------|
| `reconnaissance` | Gather information, assess state, identify gaps | Findings report, gap register, recommendations |
| `implementation` | Build, create, modify artifacts | New files, code changes, configurations |
| `verification` | Test, validate, audit existing work | Test results, audit reports, GO/NO-GO assessments |
| `integration` | Connect systems, merge outputs, cross-validate | Integration reports, cross-system coherence checks |
| `closeout` | Final validation, AARs, knowledge graduation | AARs, completion summaries, context files |

**Selection guidance**: Most missions are `implementation`. Use `reconnaissance` for Phase 0/research missions. Use `verification` for pre-release or gate missions. Use `closeout` for final campaign missions.

## Plan File Format

**Filename**: `plan_{short_name}.md` (underscores, no hyphens)

Template: `how/templates/template_mission.md`

## Lifecycle

### Creating a plan
1. Identify a task too large for one session
2. Create `plan_{name}.md` with decomposed tasks
3. Set `status: active`
4. Log the plan creation in the current session file

### Claiming a task
1. Read the plan file
2. Find the next unclaimed task whose dependencies are met
3. Set the task `status: in_progress` and `session: {session_id}`
4. Begin work

### Completing a task
1. Finish the task
2. Set `status: completed` in the plan file
3. Record files touched in both the plan task entry and the session file
4. Check if the next task can now be claimed

### Completing a plan
1. When all tasks are `completed` (or `skipped` with justification)
2. **Append a lightweight AAR** — mandatory. Use the 5-line format from `how/templates/template_aar_lightweight.md`: Worked / Didn't / Finding / Change / Follow-up. No mission may transition to `status: completed` without this section.
3. Fill out **Completion Summary** (Deliverables, Descoped, Key Findings, Scope Changes)
4. Set plan `status: completed` and update `updated` date
5. Plan file stays in `how/missions/` as a historical record

### Git-Aware State Verification

Before updating mission status fields (`status`, task `status`):
1. Run `git pull` to ensure you have the latest state
2. If the file was modified since your last read, re-read it before writing
3. After updating status, commit promptly — status changes are coordination signals

### Abandoning a plan
1. If a plan is no longer relevant, set `status: abandoned`
2. Add a note explaining why
3. Do not delete — keep for audit trail

## Rules

- **One owner per task at a time** — only one session should have a task `in_progress`
- **Check before claiming** — read the plan file immediately before setting `in_progress` (collision prevention)
- **Dependencies are hard** — do not start a task until all its `depends on` tasks are `completed`
- **Plans are living documents** — add tasks, reorder, or skip tasks as needed during execution
- **Keep tasks session-sized** — each task should be completable in roughly one agent session

## Load/Skip Decision

**Load this directory when**:
- Creating a new mission for a task too large for a single session
- Claiming the next objective in an active mission (startup checklist step 8)
- Checking mission status to understand what work is in progress or completed
- Closing a mission — updating status, writing completion summary

**Skip when**:
- Working within a campaign mission (those live in `how/campaigns/campaign_<name>/missions/`)
- Performing routine session work not tied to a mission
- Already know the mission file path and can load it directly

**Token cost**: ~600 tokens (this AGENTS.md)

## Safety Hints (Inv 2 — destructive-state dir)

⚠ Mission `status` fields are destructive-state transitions (`planning → active → in_progress → completed | abandoned`). Read before writing; check `updated` to avoid overwriting another agent's status edit. Never delete a mission file — set `status: abandoned` with rationale per the Lifecycle §Abandoning a plan section. Mission specs at S3-close can be heavy (≥ 50 kT); see Heavy-File Warning below.

## Heavy-File Warning (Inv 5)

Mission spec files often grow heavy at S3 close (≥ 50 kT) because each session adds session-close prose to the §Status section. Examples: [[../campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p2_m24_agents_md_heatmap.md|M2.4 mission spec]] (multi-session implementation-class shape; large S3 close prose). Default to `offset` + `limit` Reads on closed mission specs when looking for a specific objective + acceptance criterion; full Reads are appropriate at mission opening for context-loading. See [[../../what/decisions/adr_016_per_mission_context_budget.md|ADR-016 Clause B]].

## Cross-References

- [[../AGENTS.md|how/AGENTS]] — Operations layer index (parent directory)
- [[../campaigns/AGENTS.md|how/campaigns/AGENTS]] — Campaign protocol (campaign missions live inside their campaign directory at `how/campaigns/campaign_<name>/missions/`; this directory holds standalone missions only)
- [[artifacts/AGENTS.md|how/missions/artifacts/AGENTS]] — Mission AAR + artifact directory (parent-child triangle vertex)
- [[../sessions/AGENTS.md|how/sessions/AGENTS]] — Session protocol (sessions execute mission objectives)
- [[../templates/template_mission.md|template_mission]] — Mission spec template
