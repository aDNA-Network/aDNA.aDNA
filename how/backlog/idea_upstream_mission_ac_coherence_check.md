---
type: backlog_idea
status: proposed
priority: high
created: 2026-08-21
updated: 2026-08-21
last_edited_by: agent_rosetta
filed_from: aDNA.aDNA/how/campaigns/campaign_haussmann/missions/mission_haussmann_p3_1_md_twins.md (AAR)
filing_authorization: skill_upstream_contribution
filing_approved_by: operator (in-session, 2026-08-21)
upstream_target: aDNA-Network/aDNA
tags: [backlog, upstream, mission, acceptance_criteria, standing_order_11, adr_016, gate_discipline, self_checking_spec]
---

# A mission's acceptance criteria should be read against each other before a gate ratifies a budget

## The gap

The standard governs that a mission **declares** acceptance criteria (`acceptance_criteria:`) and a
**token budget** (Standing Order 11 / ADR-016), and that a phase gate is a human gate (SO-1). It has
nothing to say about whether the criteria a budget is ratified against are **mutually satisfiable**.

The close cascade checks that criteria are *met*. Nothing checks, before execution, that they *can* be.

## Evidence — two consecutive missions, one defect class

Both from `campaign_haussmann`, both after an operator-signed decision point had already ratified a
budget against the spec in question.

**P4.5a (2026-08-20).** ⊳ D-A split mission P4.5 into two increments at ⛩ DP6. The split lived only in
two frontmatter **comment strings**, the charter's phase table, and a re-plan artifact. The mission
body, its objectives, its session prompt and **all four acceptance criteria** were still 100% the other
increment's content. Executed as written it would have run against criteria it could not satisfy. The
mission's own AAR recorded it as: *"DP6 ratified a budget for a mission whose spec nobody had checked
existed."*

**P3.1 (2026-08-21).** AC1 named the method — *"build-time twin generation from the content
collections"*. AC4 required a specific probe set to re-run PASS. Every one of that probe set's targets
was a bespoke page with **no** markdown source, so the method in AC1 could not satisfy the test in AC4.
The two clauses sat **four lines apart in the same frontmatter block**. Executed as written, the mission
would have produced 120 artifacts, reported done, and left the probe set failing 10/10.

In P4.5a the body contradicted the frontmatter; in P3.1 the frontmatter contradicted itself. The
recurrence one mission later is what makes this structural rather than a bad day.

## Proposal

Add one step to the mission-authoring / gate-ratification path: **before a decision point ratifies a
mission's budget, one pass over its acceptance criteria asking only — can the stated method satisfy the
stated test?**

Deliberately narrow:

- It is **not** a review of whether the criteria are *good*, or the budget *right*. One question only.
- It is **not** an agent self-certification. It is a read the author performs and records, so a
  ratifying operator knows it happened.
- It costs one pass. Both instances above would have been caught by reading two adjacent clauses
  together.

Shape is the standard's to choose. The lightest version is a line in the mission template prompting the
author to state, in the mission body, that the criteria were read against each other — the same move
`skill_verification_handoff` already makes for verification surfaces. A heavier version is a checklist
item on the phase-gate instrument.

## Why this is standard-shaped rather than campaign-shaped

`missions` is a **base entity type** (HOW leg), ADR-016 and SO-11 already govern the budget declaration
this check protects, and SO-1 already establishes that phase gates are human gates. The gap is in the
seam between those three, which is standard territory. Any vault running the execution hierarchy can hit
it, and the defect is invisible until execution — which is exactly when it is most expensive.

## Adopted locally already

`campaign_haussmann/CLAUDE.md` convention 13, so the campaign that found it does not have to wait for
an upstream decision to stop repeating it.
