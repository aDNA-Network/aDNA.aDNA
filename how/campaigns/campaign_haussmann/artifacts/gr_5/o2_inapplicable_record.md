---
type: evidence
title: "GR-5 O2 — AC-2 recorded INAPPLICABLE: the experiment is unrunnable, and that is not the same as refuted"
campaign: campaign_haussmann
mission: mission_haussmann_gr_5_flaky_gates
objective: O2
status: complete   # ⛩ RULED 2026-09-05 — option 3 of the three O1 put to the operator. Nothing built, nothing shipped, no gate touched, no pin moved.
created: 2026-09-05
updated: 2026-09-05
last_edited_by: agent_rosetta
consumes: artifacts/gr_5/o1_rate_record.md
tags: [evidence, haussmann, gr_5, f_ab, gate_47, inapplicable]
---

# O2 — `AC-2` is INAPPLICABLE

> ⛩ **Operator ruling, 2026-09-05: option 3.** Record `AC-2` INAPPLICABLE with the measurement
> attached and proceed to `O3`. O1's record put three options and declined to choose (SO#1).

## The verdict, in the words the criterion requires

`AC-2` discriminates the `gate-47` mechanism by running two arms at equal `n` — `reducedMotion` on and
off — and asks whether **"the rates separate beyond AC-1's stated interval."**

O1 measured the **baseline** at **0 failures in 100 runs** (`g47`, 11 selected assertions, tree
`fe2bba6`, host). With a control arm at zero, **both arms read zero and no separation is detectable at
any `n` this node can afford.**

⇒ ***You cannot measure a treatment effect on a phenomenon that does not occur in the regime you can
sample.***

**`AC-2`: INAPPLICABLE.** **`AC-4`: INAPPLICABLE for this objective** — its own clause requires that
reading rather than a blank, because nothing was shipped and there is therefore nothing to red-prove.

## ⛔⛔ This is NOT `DEFECT-3`'s ratified refutation branch, and collapsing the two is the overclaim

`DEFECT-3`'s clause reads: *"if the rates do not separate, the cause is still unverified, no fix is
authored… `F-ab` stays `live`."* That branch **presumes the phenomenon occurred and the treatment
failed to move it** — a real experiment with a null result, which is evidence *against* the hypothesis.

What O1 found is a **third state the criterion does not name**: *the phenomenon did not reproduce at
all on the surface available to the experiment.* That is **no evidence about the hypothesis in either
direction.**

| | Says about the rAF-reordering hypothesis |
|---|---|
| **Refuted** (`DEFECT-3`'s branch) | the treatment did not move a real effect ⇒ evidence **against** |
| **Unrunnable** (what happened) | the effect was absent from the sampled regime ⇒ **nothing** |

⇒ The honest report is ***"the experiment is currently unrunnable, because its subject is absent from
the only regime this instrument can reach"*** — never *"the hypothesis is refuted."* Filing this as a
refutation would retire a live hypothesis on a measurement that never tested it, which is the
**instrument-narrower-than-its-conclusion** family this campaign has now caught seven times.

## ⭐⭐ THE LOAD-BEARING FACT: TWO HOST MEASUREMENTS OF THE SAME ASSERTION, ONE DAY APART, DISAGREE COMPLETELY

| Source | Date | Regime | Reading |
|---|---|---|---|
| register **§22.4** | 2026-09-04 | the **single** `Shift+Tab` test, **rebuilt between runs**, n=5 per arm | **3 pass / 2 fail** and **2 pass / 3 fail** ⇒ *"flaky at roughly 40–60 % locally today"* |
| **O1's harness** | 2026-09-05 | the **11-test** `g47` selection, **built once per tree**, n=100 | **0 / 100** |

Both are `[D]`, on the same machine, and neither is in doubt. **A rate of 40–60 % and a rate of 0 %
cannot both describe one phenomenon in one regime**, so they describe **two regimes** — and naming
which variable separates them is what O2 can honestly contribute in place of the experiment it cannot
run.

### ⚠ The two regimes differ in TWO variables, not one — so neither measurement isolates the cause

O1's record names the rebuild difference and reasons about it correctly. Completing the comparison
here, because a two-variable difference is a confound and reporting only one half of it would be the
same partial-instrument defect:

1. **Rebuild between runs.** §22.4 rebuilt; O1 builds once per tree (`flake_rate_measure.mjs:264`
   inside `setupWorktree`, **never** inside `runOnce` at `:298`). A rebuild is a heavy multi-core event
   the following run starts on top of ⇒ **§22.4 may have been generating the very load whose effect it
   attributed to the increment.**
2. **Selection breadth.** §22.4 ran **1** test; O1's `g47` selects **11**. Playwright's worker
   scheduling, page reuse and per-file setup all differ between a one-test and an eleven-test
   invocation — and `gate-47`'s subject is *focus order across a live document*, which is precisely the
   kind of thing a different execution envelope can perturb.

⇒ **Either variable alone is a sufficient explanation, and nothing measured to date separates them.**
⛔ Recorded as a **confound, not a diagnosis** (GR-2's discipline: verify the cause before authoring
the fix).

⭐ **This is the campaign's own law arriving with unusual force:** *a count is only comparable to a
count produced by the same command, on a comparably loaded machine.* Here two counts produced by
**different** commands were about to be read as one contradiction about the site. They are not a
contradiction about the site at all; they are a statement that the command is part of the phenomenon.

## ⭐ A REPRODUCING REGIME IS KNOWN TO EXIST — so this is a deferral, not an impossibility

Stated explicitly, because *"INAPPLICABLE"* on its own reads as *"this can never be done"* and that
would be false and discouraging to whoever picks it up:

**§22.4's regime reproduces the phenomenon at 40–60 %.** The experiment is therefore runnable *in
principle* — it is unrunnable *with O1's instrument as configured*. Whoever resumes it inherits a
named starting point rather than a dead end:

- Re-run `AC-2`'s two arms in **§22.4's regime** (single test, rebuilt between), at an `n` that clears
  the power bar for the observed band — which O1 computed: **`n ≥ 97`** for ±10 pp at 95 % confidence
  in the 40–60 % band. ⚠ §22.4's `n=5` per arm is **~5 % of that**, which is why its own numbers are
  correctly read as INCONCLUSIVE as *rates* (O1 self-test **W3**) even though its **comparative**
  conclusion survives.
- The instrument needs **no new code** for this: `flake_rate_measure.mjs` is already parameterised by
  tree and config (`DEFECT-1`, present from the first line), and a narrower `--families` grep plus a
  per-run rebuild are configuration, not authorship. ⭐ **`DEFECT-1` paying off exactly as intended** —
  it was required so O2/O3 would not force a second instrument at a sitting's tail.

## The register: `F-ab` does NOT move, and the naming is corrected

`F-ab` is **one row** (`claim_register.md:2098`) carrying **two debts, (a) and (b)**, **extended** by
**§22.4** with the `gate-47` half. It is **`live`** and it **stays `live`** — nothing here fixed
anything, and *a fix's commit is not the register's strike* (`F-n`).

⚠ **A naming correction, made here rather than propagated.** This objective's planning prose referred
to *"`F-ab`(c)"* for the `gate-47` half. **There is no `(c)`** — the register letters exactly two debts
and §22.4 is an extension, not a third limb. ⭐ Minting a letter in prose is precisely what **`F-y`**
was registered for: ***an `F-` ID is minted BY WRITING THE ROW***, and a sub-letter is no different.
Caught by opening the row instead of citing the plan that cited it — `F-u`'s class, and the reason
this record quotes the line number.

⇒ Recorded at the register as a **§23 section that moves no row and adds no id**, on the **§20.4
precedent** (*"`R-124` is read back at its own destination — and it does NOT move"*). Counts are
re-derived **after** the section is written (§21.3) and are expected to be **unchanged**, which is the
correct result for a section that adds no claim. *A register whose counts move every time someone
writes a paragraph is counting paragraphs.*

## What O2 did not do, said so nobody infers otherwise

- ⛔ No gate file touched. No `BASELINE`, threshold or pin changed — `AC-5` is untouched by this
  objective and remains `O3`'s to satisfy.
- ⛔ No fix authored for the `gate-47` mechanism. The rAF-reordering hypothesis stands **unverified**,
  exactly as §22.4 filed it.
- ⛔ No claim that `gate-47` is fixed, healthy, or no longer flaky. **O1's `STABLE` verdict is a
  statement about one regime on one machine**, and O1's own record flags that such a verdict *"is
  exactly the shape that gets cited later as 'F-ab was measured and it was fine.'*"

## `V2` — the limb that asserts `AC-2`

`V2` reads: *the two arms differ in exactly one variable (`reducedMotion`) and are run at equal `n` on
the same tree, shown by the harness invocation recorded verbatim.*

**`V2` is INAPPLICABLE with `AC-2`**, and for the honest reason: there are **no two arms**, because the
first arm returned a baseline that makes the second uninterpretable. ⭐ Note this is *not* a limb
failure — a limb whose criterion is inapplicable is inapplicable with it, and reporting `V2` as a
**miss** would convert a null result into a mission failure. That is `DEFECT-3`'s other half, which
`AC-4` states in terms and which applies to the limb by the same reasoning.
