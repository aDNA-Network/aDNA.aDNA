---
mission_id: mission_haussmann_gr_7_vitrine_integration
type: mission
title: "GR-7 — Vitrine integration: receive the side-campaign's work, re-derive it, and reconcile the instruments it moved"
campaign: campaign_haussmann
phase: GR
status: queued          # ⛩ HALTED AT ITS CONVENTION-13 PRE-BUILD GATE. Nothing built, criteria NOT ratified, budget NOT ratified.
owner: stanley
persona: rosetta
executor_tier: opus
token_budget_estimated: "tbd_at_gate — cannot be costed until the size of the handback is known (see §5)"
depends_on: [campaign_vitrine]
created: 2026-09-14
updated: 2026-09-14
last_edited_by: agent_rosetta
tags: [mission, haussmann, gr, vitrine, integration, claim_register, adr_057]
---

# GR-7 — Vitrine integration

> ⏸⛩ **OPEN ONLY AS A QUEUED FILE. Nothing is built, no criterion is ratified, no budget is ratified.**
> The standing law of twelve consecutive missions applies: **convention 13's pass runs first, against the
> work that actually arrived, and no build happens until the operator signs.**

## 1 · Why this is a GR mission

The Grande Revue lane is the campaign's **late-stage review-and-improve** lane. An integration review is
exactly that, so this is `phase: GR` and **`phase_count` HOLDS at 6** — GR is a lane, not a seventh phase.

⛩ **`mission_count: 33 → 34` is SURFACED, NOT TAKEN.** That field is the operator's by its own comment.
Per the discipline GR-4 wrote down, the campaign index may read 34 while the charter reads 33 **for exactly
as long as this gate is open, provided somebody says which is which**: *the index is the disk; the charter is
the ratified figure.* Both session bands are re-derived in the same commit as the ruling.

## 2 · What arrives

Operation VITRINE ([[campaign_vitrine]]) on branch `vitrine/design`, planned and executed by a Codex agent
under [[coord_2026_09_13_rosetta_to_codex_vitrine_design_brief]]. Its handback contract (charter §5, brief
§9): change inventory · **every new or changed claim enumerated** · design rationale · proposals for ratified
text · a **D1–D12 v1.1 self-score with breakdown** · and **what was not done**.

## 3 · The one rule that governs this mission

⭐⭐ ***Re-derive everything. The handback is a hypothesis, not a measurement.***

This is not distrust of Codex — it is the house rule, and this campaign earned it against **its own** work:
a session plan carried *"already discharged at the object"* for seven live defects; three agreeing indexes
turned out to be one claim copied twice; a "routed" row was verified in the prose that routed it four times
running. ⚠ And note the specific hazard here: **a row asserting *nothing to do* proposes no work, so nothing
schedules a look at it.** The handback's "what was not done" section is therefore the section most likely to
be wrong, and it is the one to probe first.

## 4 · Draft acceptance criteria — ⛩ NOT RATIFIED

These are knowable now because they are about **integration discipline**, not about content not yet written.
They are drafts for the convention-13 pass to attack, not a signed set.

- **AC-1 · The diff is derived, not received.** The actual change set is derived from the branch
  (`git diff main...vitrine/design`), **route/slug/count deltas separately**, and **reconciled against the
  handback inventory**. Any divergence is a finding, in both directions — an unlisted change *and* a listed
  change that did not happen.
- **AC-2 · Every new or changed claim passes the register.** Each gets a row or an explicit no-row reason.
  ⛔ **Protocol/Exchange/ledger claims are flagged S1 by the standing embargo** and are ruled at an operator
  gate, not absorbed here. `network effect`-class claims are checked against what the registry can evidence.
- **AC-3 · ADR-057 same-diff obligations discharged.** Every gate/audit spec hardcoding a moved route, slug
  or count is updated — and *each gate's contract is read* before adding a route to it, because the first
  fix for this class was itself wrong (duplicating axe while leaving overflow outside CI).
- **AC-4 · The suite is reconciled and the delta attributed.** Baseline **698/1skip/0fail** (⚠ local-lane,
  measured 2026-09-12 at `0a6fa5a`, **never through CI** — re-derive). Delta isolated with `--list`, not
  inferred. `gate-49` re-baselined **in-container**, red confirmed **first**, with the N-of-24 control.
- **AC-5 · Accessibility and reading level hold.** axe 0 both themes; FKGL census re-run, ⚠ `/` has **0.04**
  headroom; both binary gates (WCAG AA critical, CWV p75) verified non-red.
- **AC-6 · Re-scored at v1.1, with the instrument boundary stated.** Published as a **new** score with its
  per-dimension breakdown — never as a bare delta against 51.6 (v1.0, genesis) or 63.2 (v1.0, 11 dims).
  ⚠ Coordinate with `P5.2`, which owns the full composite.
- **AC-7 · Ship-readiness verified, not assumed.** `evidence/p5_1/` re-probed — **a deploy hold engages the
  moment it is non-empty**, and `P5.1`'s panel pins its stimulus to a build stamp, so **a deploy landing
  mid-panel invalidates the panel**. Push precedes deploy; each is its own ⛩ GO.
- **AC-8 · Proposals routed, not silently adopted.** Doctrine/ADR proposals from Vitrine reach an operator
  gate as proposals. **A deferral recorded only in narrative is a deferral with no gate** — each gets a row.

## 5 · Why the budget is not costed here

⭐ The campaign's own repeated finding: *a budget ratified before the operator's rulings is costed against a
scope nobody has chosen yet* (GR-4), and *a budget ratified before the convention-13 pass is costed against a
spec whose halves nobody has read together* (P4.1, SO#11). **The size of this mission is a function of the
size of the handback, which does not exist yet.** Costing it now would reproduce both defects at once.

⇒ **The band is set at the ⛩ gate, after the pass runs against the real diff.**

## 6 · Convention-13 pass — OWED, not run

⛔ **Not runnable yet**, and saying so is the point: the pass asks *can the stated method satisfy the stated
test* across every (method-bearing × test-bearing) pair, **in both directions**, with **coverage recorded**.
Several criteria above are keyed to artifacts that do not exist. Running it now would produce a partial pass
reading as a complete one — convention 13's own amendment, and the defect it was written to prevent.

**It runs at the gate, complete, with its coverage stated.** Twelve consecutive missions have had it pay for
itself; four of those found a criterion that no limb tested, reading the matrix in the **V→AC** direction.

## 7 · Open questions for the gate

1. **Scope of the re-score** — GR-7's own, or deferred into `P5.2`'s full composite?
2. **Does anything ship before `P5.1`?** The panel cold-reads these surfaces. Running it on pre-Vitrine copy
   measures a site about to be replaced; shipping mid-panel invalidates the panel. **Ordering is an operator
   call and it is the most consequential one on this page.**
3. **Does the Exchange story go to D-8?** If counsel rules, the strongest form of that story unlocks; if not,
   the `PASS`/`TAUGHT-AS-DESIGN`/`HORIZON` pattern is the ceiling.
4. **`mission_count: 33 → 34`** (§1), with both session bands re-derived in the same commit.
