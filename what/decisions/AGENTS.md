---
type: directory_index
created: 2026-02-19
updated: 2026-05-20
last_edited_by: agent_stanley
tags: [directory_index, decisions]
---

# what/decisions/ — Architecture Decision Records

## Purpose

Stores Architecture Decision Records (ADRs) — formal documentation of significant technical, architectural, or policy decisions and their rationale. ADRs create an auditable trail of "why" behind key choices.

## Directory Structure

```
what/decisions/
├── AGENTS.md                              # This file (protocol)
└── adr_NNN_short_description.md           # One file per decision
```

## ADR Format

**Filename**: `adr_NNN_short_description.md` (zero-padded 3-digit sequence, underscores)

**Template**: `how/templates/template_adr.md`

**Required frontmatter**:

```yaml
---
type: decision
adr_id: adr_NNN
title: "Human-readable decision title"
status: proposed | accepted | deprecated | superseded
created: YYYY-MM-DD
updated: YYYY-MM-DD
last_edited_by: agent_{username}
tags: [decision]
---
```

## Lifecycle

1. **Propose** — Create ADR with `status: proposed` when a significant decision surfaces
2. **Accept** — Set `status: accepted` after user review and approval
3. **Supersede** — Set `status: superseded` and link to the replacement ADR
4. **Deprecate** — Set `status: deprecated` when the decision is no longer relevant

## What Warrants an ADR

- Technology or framework choices
- Architectural patterns adopted or rejected
- License decisions
- Breaking changes to conventions or ontology
- Decisions that required evaluating multiple alternatives

## Safety Hints (Inv 2 — destructive-state dir)

⚠ Read before writing — ADR `status` fields are destructive-state transitions (`proposed → accepted → superseded | deprecated`). Once accepted, an ADR is a binding decision for the vault; superseding it requires a successor ADR with a clear reason. Never silently flip status; never delete an accepted ADR (set `status: superseded` and link the successor instead). Check the campaign master ADR roadmap + `ls what/decisions/` at draft time to avoid number collisions (see [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m24_obj4_agents_md_hardening_audit.md|two-step slot reassignment chain at M2.4]] for the canonical reassignment pattern).

## Load/Skip Decision

**Load this directory when**:
- Recording a cross-cutting technical or policy decision that requires formal rationale
- Reviewing decision history before proposing changes that may conflict with prior ADRs
- Onboarding — understanding why key architectural choices were made

**Skip when**:
- Performing routine operational work (sessions, missions, backlog)
- Making minor, self-evident changes that don't warrant formal rationale

**Token cost**: ~350 tokens (this AGENTS.md)

## Cross-References

- [what/AGENTS](../AGENTS.md) — Knowledge layer index
- [how/templates/template_adr](../../how/templates/template_adr.md) — ADR template
