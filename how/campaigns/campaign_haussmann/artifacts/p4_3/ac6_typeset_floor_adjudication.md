---
type: evidence
title: "AC6 — lock O1's 12px rendered-typeset floor, adjudicated NOT MET"
campaign: campaign_haussmann
created: 2026-08-24
status: complete
last_edited_by: agent_rosetta
tags: [haussmann, p4_3, a11y, craft_floor, lock_o1, ac6]
---

# AC6 — lock O1 (12 px rendered typeset floor): **NOT MET**

> **Why this criterion exists at all.** Lock O1's floor was ⛩ deferred to P4.3 **by name** at the
> P4.4 gate — *"a legibility judgement for the a11y-manual mission"* — and P4.3's five original
> criteria mentioned it **nowhere**. All five could have passed with the floor untouched. That is
> **G-6** from the convention-13 pre-build gate, and the finding it belongs to is general:
> **a deferral recorded only in narrative is a deferral with no gate.** AC6 is the gate.

## The lock, in its own words

> *"every rendered TYPESET element in a committed FIGURE — the element set is `text, tspan` and it is
> NAMED here deliberately … clears a 12 CSS px rendered floor at 320/390/1024/1440/1920 in both
> appearances … measured in a browser via `sqrt(|det(CTM)|)`, never from `getComputedStyle`"*

The measurement method is part of the rule, not an implementation detail: inside a `viewBox`,
`font-size="14"` is 14 **user units**. `getComputedStyle` reports the authored number and is blind to
the viewBox scale — which is how this lock read `enforced` upstream for a whole round while **48 of
48 badge `tspan`s** sat under the floor.

## Measured at the object, 2026-08-24 (convention 12 — not carried from P4.2's record)

Gate-39's own method, re-run independently across **3 routes × 5 widths × 2 themes**:

| Figure | worst rendered | worst-case below floor | worst case at |
|---|---|---|---|
| `hero-graph-svg` | **3.5 px** | **27 / 27** | `/` @ 320, dark |
| `netdiagram-svg` | **8.0 px** | **7 / 8** | `/` @ 320, dark |
| `convergence-funnel` | **8.5 px** | **8 / 8** | `/patterns/mission-decomposition/` @ 320, dark |

**Aggregate across every route × width × theme combination: 398 of 510 painted text nodes render
below the 12 px floor.** `[D]`

That aggregate is derived here for the first time — P4.2 recorded the per-figure worst cases but never
the corpus-wide count, and the corpus-wide count is what makes the scale of the gap legible. The
per-figure figures **agree exactly** with P4.2's, which is the useful control: the measurement is
reproducible, and nothing drifted between missions.

## Adjudication: **NOT MET — limitation stated, ratchet held, lock stays `gap`**

AC6's amended wording offers two dispositions: *"met, or its limitation stated with the ratchet held
and `gap` retained honestly."* The second is the true one, and this is why:

1. **The remedy is design work, not a font-size bump.** These are SVGs authored in a `viewBox` and
   scaled down — at 320 px the funnel paints at 0.85× and the hero graph at **0.28×**. Clearing 12 px
   means authoring at ~4× (which wrecks the composition at desktop) or **not scaling the text with
   the figure at all**: a portrait twin, a min-width with scroll, or a redrawn mobile treatment.
2. **The worst offender is a campaign-protected surface.** `hero-graph-svg` is the homepage hero,
   named in *"What this campaign protects (do not regress)"*. Reflowing it at the tail of an
   accessibility objective is exactly the kind of unforced change that protection clause exists to
   prevent.
3. **A non-regression fence is not the rule.** `gate-39` pins each figure at its current worst case
   and fails on any regression or any new unlisted figure. That is a **ratchet**, and calling a
   ratchet an enforcement is the fake-enforcement this lock's own text warns about. **Lock O1 stays
   `status: gap`** in `lock_coverage_adna.yaml` — verified still `gap` at the object today.
4. **The site already says so, in public.** `/design-system#diagram` carries a warning callout —
   *"This rule is not met today … the worst renders its labels at 3.5px"* — and the 3.5 px it quotes
   **matches this session's independent measurement**. The statement is true, not aspirational.

## What AC6 changes, given the verdict is "not met"

The criterion is **met by adjudicating**, not by fixing — and the adjudication has three consequences
that did not exist before it:

- **The floor is now a named known limitation with a measured magnitude** (398 / 510), which
  [[accessibility statement, O3]] must read from rather than paraphrase. AC5's *"known limitations
  must be TRUE, read from register rows"* has a row to read.
- **The deferral chain stops here.** Lock O1 was deferred P4.2 → P4.4 → P4.3. It is not deferred
  again: it is **recorded as open debt with its remedy characterised** (per-figure mobile treatment),
  so a future mission picks up a scoped design task rather than rediscovering a measurement.
- ⚠ **`lock_coverage_adna.yaml`'s `sequenced:` field is stale and is corrected in the same commit**
  — it reads *"P4.4 (the fixes)"*, which was true before the ⛩ P4.4-gate ruling moved the judgement
  to P4.3. A routing field that names a mission which has already closed is the *index-vs-artifact*
  class this campaign keeps finding, one level down.

## Verdict

**AC6 is MET as a criterion and lock O1 is NOT MET as a rule**, and the difference between those two
sentences is the entire point of the criterion. The floor is unmet, by a measured margin, on three
named figures, with the ratchet holding and the site saying so on its own design-system page.
