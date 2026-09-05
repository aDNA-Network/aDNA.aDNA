---
type: artifact
title: "The anchor-defect list, DERIVED — because 'five filed anchor defects' names a list no artifact holds"
campaign: campaign_haussmann
mission: mission_haussmann_gr_6_instrument_calibration
created: 2026-09-05
updated: 2026-09-05
status: proposed
last_edited_by: agent_rosetta
tags: [artifact, haussmann, gr_6, instrument, anchors, vitruvius]
---

# The anchor-defect list, derived at the object

> **Why this file exists before any instrument edit.** `p2_replan.md:444` routes *"the **v1.1 instrument
> fix** — before P5.2 (§1.6). **Five filed anchor defects**; the conjunctive-bundle split rule is the
> load-bearing one."* `P5.2`'s own `status:` hardens that into a precondition: the fix **"MUST land
> BEFORE this mission."** Costing the work against the phrase *"five filed"* would be **inheriting a
> count** (KW-14), and this campaign has been bitten by that six times.

## §1 — The count could not be verified, and that is the first finding

`grep`ped across the campaign for the list itself. **Two prose references exist and no artifact holds
the list** `[D] 2026-09-05`:

| Location | Text |
|---|---|
| `artifacts/p2_6/p2_replan.md:444` | *"Five filed anchor defects; the conjunctive-bundle split rule is the load-bearing one."* |
| `evidence/scoring/reconciliation_p2_6.md:91` | *"This is a v1.1 anchor defect, and it is **already on the filed list**."* |

⭐ **Each sentence points at the other's list, and neither is one.** The re-plan says *five are filed*;
the reconciliation says *this one is on the filed list*. Read together they corroborate; read at the
object they are **one claim written twice**, which is the class GR-4's close named — ***three agreeing
indexes are not a corroboration; they are one claim copied twice.*** Here it is two, and the artifact
they name has never existed.

⛔ **This does not make the routing wrong.** The defects are real and recoverable from the scoring
record; what is missing is the **enumeration**, which is exactly what nobody can check a count against.
⇒ **The set below is derived from the scoresheets and reconciliations, not inherited.**

## §2 — The derived set

Five gaps, each traced to the line that exhibits it. ⚠ **The cardinality matching the re-plan's "five"
is a COINCIDENCE and is not offered as corroboration** — with no filed list to compare against, there
is no way to know whether these are *those* five. Presenting the match as confirmation would be the §1
defect committed by the file correcting it.

### AD-1 · No split rule for conjunctive anchor bundles — the load-bearing one

Nearly every binding anchor in this instrument is a **bundle of clauses joined by `;` or `and`**. The
instrument states **no rule** for scoring one when *n* of *m* clauses hold. Consequence: the rule is
invented per-scorer, per-dimension, per-sitting.

**Measured divergence, same clause, two sittings:**

| Sitting | Reading of D2 anchor 4 (*"≤2 clicks…; **search present and scoped**; no orphans"*) | Score |
|---|---|---|
| Baseline, A (`scoresheet_A_adna.md:67`) | *"anchor 4 is conjunctive… fail, despite ≤2-click reachability"* — **all clauses bind** | **3** |
| Baseline, B (`scoresheet_B_adna.md:66`) | *"fails 4 on 'search present and scoped' (site-wide)… snaps to 3"* | **3** |
| P2.6, both (`reconciliation_p2_6.md:67`) | awarded on **the anchor's literal words**, *"while both explicitly recorded that no site-wide search exists"* | **4** |

⇒ `reconciliation_p2_6.md:88` prices it: ***"+0.8 weighted points of real movement, +0.8 of instrument
drift"*** on **one** dimension. ⛔ **At P5.2 that operates across twelve.**

**Further sightings of the same ungoverned bundle** — the reason this is a rule and not a D2 patch:
`scoresheet_B_p2_6.md:272` on **D9**, *"both 2 and 3 match two of three clauses; the conjunctive-bundle
reading I used at Phase 0 for Mastra binds → 2"* — settled by **importing a precedent from a different
target**, because the instrument offered nothing. `reconciliation_p2_6.md:96` records **D5** as the one
divergence, same cause, *"caught only because the reviewers disagreed."*
`scoresheet_A_p2_6.md:119/130/141/153/164/198` each turn on *"fails on N of its clauses."*

### AD-2 · There is no rung 1 — on any of the twelve dimensions

Derived over the whole instrument `[D]`:

```
awk '/^\*\*Anchors\*\*/{f=1;d++} f&&/^\| [0-9] \|/{print d": "$2} /^---$/{f=0}'
→ D1..D12 rungs:  0  2  3  4  5      (twelve times, identically)
```

**Every anchor table skips 1.** `§5 Scoring model` computes `Σ (score ÷ 5 × weight)`, so **1 is a legal
score with no letter to bind it** — and `reconciliation_p2_6.md:48` says the anchor-letter discipline
*"is doing real work, not decorating a judgment."* A score with no letter is outside that discipline.

⭐ **This is load-bearing precisely where this site scored, which is why it is not cosmetic.** Five of
twelve dimensions reconciled to **2**, and both baseline scorers repeatedly recorded a judgement of
*above the 2-letter but below 3* with nowhere to put it: `scoresheet_A_adna.md:125` (**D8**) *"This is
**above** anchor 2's letter… but the dead-venue promise is the instrument's named failure mode made
worse"*; `:134` (**D9**) *"with the on-site process page slightly **exceeding** the letter, and the dead
advertised channels subtracting it back"*; `scoresheet_B_adna.md:120` and `:156` the same shape.
⇒ **The bottom of this scale is a two-point cliff**, and the reviewers absorbed the difference into
prose because the scale gave them nowhere else.

⚠ **Stated at its width:** no scorer has ever *awarded* a 1 — every reconciled score is 2 or 3 — so this
has never yet changed a number. It is a **latent** defect, unlike AD-1, which has already cost 0.8.

### AD-3 · "Unawardable" is used by both scorers and defined by nothing

Both reviewers independently invented the same device, and the instrument contains no such concept:

- `reconciliation.md:23` — *"anchor 5 unawardable pre-panel"* (**D1**)
- `scoresheet_A_adna.md:197` — *"**Unawardable/ungraded by evidence limits**: D1 anchor 5 · D3 anchors
  above 3 · D9 first-contribution experience · D11 anchors above [3]"*
- `scoresheet_A_p2_6.md:274` — *"**What evidence limits made unawardable.** D3 entirely…"*
- `reconciliation.md:48` — the score is *"**provisional** on the campaign-P0 TTFS run and drops to 2 if
  the quickstart fails as written"*

⇒ Three distinct states are in use — **unawardable · ungraded · provisional** — with no definitions, no
rule for what is recorded in place of a score, and **no term in the composite formula** for any of them.
⭐ **That two independent scorers converged on the same missing concept is the evidence it belongs in the
instrument**, not that they improvised well.

⚠ **Directly load-bearing for `P5.2`:** its whole purpose is to convert `[D-syn]` flags into `[D]` via
`P5.1`'s human evidence, so it must state which anchors were unawardable, why, and what changed.

### AD-4 · A clause *verified failing* and a clause *merely unevidenced* are scored identically

Both read as "the clause fails", and they are epistemically different:

| | Line | Text |
|---|---|---|
| verified failing | `scoresheet_B_adna.md:93` (**D6**) | *"4 requires 'responsive integrity verified' — it is **verified failing** at mobile for a whole template class"* |
| unevidenced | `scoresheet_B_adna.md:147` (**D11**) | *"4 requires screen-reader-tested verification across all templates — **not in evidence**"* |

⭐ **The campaign's own convention 1 turns on this distinction** — *claims move DOWN to verifiability* —
and `[D]/[I]/[A]` exist to carry it everywhere **except** in scoring, where the anchors flatten both to
the same outcome. ⚠ The two also behave differently over time: an unevidenced clause is closed by
**running an instrument**; a verified-failing one needs **work on the site**.

### AD-5 · No tie-break rule when neither adjacent anchor fits

`scoresheet_B_adna.md:75` (**D3**): *"Neither 2 nor 3 fits cleanly; **the tie-breaker is** that a
stranded [reader]…"* — the scorer authored a tie-breaker in the sheet. `scoresheet_A_p2_6.md`'s D-series
resolve the same way by naming *"the next rung fails on N of four clauses"*, which is AD-1's rule
applied informally and **is not the same tie-break** B used.

⇒ Two scorers, two different resolutions of the same structural situation, neither written down where
the other could see it. **This is AD-1's sibling** — AD-1 governs *partial satisfaction of one rung*,
AD-5 governs *the gap between two rungs* — and they need separate sentences because a split rule alone
still leaves B's D3 case unresolved.

## §3 — What v1.1 must therefore contain

| # | Deliverable | Placement |
|---|---|---|
| AD-1 | The conjunctive-bundle **split rule** | §5 Scoring model (governs all twelve) |
| AD-2 | A **rung-1 anchor** on each of the twelve dimensions | each §3 anchor table |
| AD-3 | **Awardability**: the three states defined, what is recorded, how the composite treats them | §5 |
| AD-4 | **Failing vs unevidenced** clause disposition | §5, beside AD-1 |
| AD-5 | **Between-rungs tie-break** | §5, beside AD-1 |

⛔ **v1.1 re-scores nothing.** Changing an anchor and re-reading a score in one pass is how the +0.8
drift entered; `P5.2`'s fresh isolated scorers do the scoring.

⚠ **The instrument-boundary cost, named here so it cannot be inferred as an improvement later.** The
baseline **51.6** and the P2.6 midscore were both awarded under **v1.0**. `P5.2` compares against them
**across an instrument boundary**, so its delta is *not* pure site movement — the same reading
`reconciliation_p2_6.md:88` was forced into after the fact, applied **in advance** for once. v1.1's
changelog must say so on its face.
