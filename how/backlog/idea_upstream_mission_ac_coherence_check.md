---
type: backlog_idea
status: proposed
priority: high
created: 2026-08-21
updated: 2026-08-21
last_edited_by: agent_rosetta
filed_from: aDNA.aDNA/how/campaigns/campaign_haussmann/missions/mission_haussmann_p3_1_md_twins.md (AAR); amended from mission_haussmann_p3_3_mcp_server.md O3 (2026-08-21) — third instance, with the check IN FORCE
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

## Evidence — three consecutive missions, one defect class

All three from `campaign_haussmann`, each after an operator-signed decision point had already ratified
a budget against the spec in question. The third is the important one: by then the check existed, was
in force, and was run.

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

**P3.3 (2026-08-21) — the instance that changes the proposal, because the check was IN FORCE and
still missed it.** By this mission the campaign had adopted the pass as a standing convention, and
the mission ran it, before any line was built, and wrote the result into its own body. The pass
found two real defects. It also **missed a third of the identical shape as P3.1's**: AC1's method —
an npx-installed **stdio** MCP server — cannot move AC4's test, a checklist item probed as a **URL**
(`/.well-known/mcp.json`) *and* as a text search of the site. A stdio binary on a user's machine is
invisible to both. Built exactly as worded, published, and re-run against AC4, the item still reads
ABSENT: the mission reports done against a test that never moved.

⚠ **The mission diagnosed its own miss as "the check does not ask this question." That diagnosis was
wrong**, and the correction is the contribution. The check asks exactly this question — it is the
whole question — and **P3.1 above is already the same failure mode**. What failed was **scope and
visibility**: the pass compared the pairs that looked suspicious (AC2↔AC3, and AC4's item count),
stopped, and **recorded no coverage**, so a partial pass was indistinguishable from a complete one to
every downstream reader, including the operator who ratified the budget on the strength of it.

⇒ **A correct question, applied partially, reports exactly like a correct question applied fully.**
That is the actual gap, and no amount of sharpening the question closes it.

## Proposal

Add one step to the mission-authoring / gate-ratification path: **before a decision point ratifies a
mission's budget, one pass over its acceptance criteria asking only — can the stated method satisfy the
stated test?**

Deliberately narrow:

- It is **not** a review of whether the criteria are *good*, or the budget *right*. One question only.
- It is **not** an agent self-certification. It is a read the author performs and records, so a
  ratifying operator knows it happened.
- It costs one pass. The first two instances above would have been caught by reading two adjacent
  clauses together.

**⭐ And — added after P3.3 — two obligations on the pass itself, without which the question does not
survive contact:**

1. **Completeness.** Run the question against **every** (method-bearing criterion × test-bearing
   criterion) pair, not the pairs that look suspicious. A mission with four criteria has a handful of
   pairs; the cost is bounded and small, and "the pair nobody thought to compare" is precisely where
   all three defects lived.
2. **A coverage record.** State in the mission body **which pairs were checked**. This is the load-
   bearing half. Without it a partial pass and a complete pass produce the same artifact — a mission
   that says the coherence pass was run — and the ratifying operator cannot tell them apart. With it,
   an unchecked pair is visible as a blank rather than as an absence of concern.

Shape is the standard's to choose. The lightest version is a line in the mission template prompting the
author to state, in the mission body, **which criterion pairs were read against each other** — the same
move `skill_verification_handoff` already makes for verification surfaces. A heavier version is a
checklist item on the phase-gate instrument. Either way, obligation 2 is what distinguishes this from a
prompt the author can satisfy by writing "done".

> **The generalization worth carrying past this idea:** an instrument that reports on its *conclusion*
> without reporting on its *coverage* cannot be audited, because a clean result and an unrun result are
> the same string. This vault reached the same finding from the opposite direction in
> `idea_upstream_verification_instrument_discipline` — where `check_live_headers.mjs` printed
> `OK — no drift` for months without ever reaching the host it claimed to check. **Same family: the
> instrument was right, and silent about what it had actually touched.**

## Why this is standard-shaped rather than campaign-shaped

`missions` is a **base entity type** (HOW leg), ADR-016 and SO-11 already govern the budget declaration
this check protects, and SO-1 already establishes that phase gates are human gates. The gap is in the
seam between those three, which is standard territory. Any vault running the execution hierarchy can hit
it, and the defect is invisible until execution — which is exactly when it is most expensive.

## Adopted locally already

`campaign_haussmann/CLAUDE.md` convention 13, so the campaign that found it does not have to wait for
an upstream decision to stop repeating it. **Amended in place 2026-08-21** with the two obligations
above, and with the correction that the convention's question was never the gap — P3.3's mission file
had diagnosed it as a missing question, and that diagnosis is struck there and here.
