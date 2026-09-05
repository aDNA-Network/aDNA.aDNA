---
type: evidence
title: "GR-5 O3 — the pin re-derivation: the instrument, and what the host measurement already says about the pins"
campaign: campaign_haussmann
mission: mission_haussmann_gr_5_flaky_gates
objective: O3
status: in_progress   # ⛩ BUILT, NOT YET MEASURED. The emission + the CI sampler are built and red-proven; the RE-DERIVATION needs a ⛩ push GO, because the workflow can only run from `origin`. No pin has moved and none may move before the measurement lands.
created: 2026-09-05
updated: 2026-09-05
last_edited_by: agent_rosetta
instrument: site/tests/gates/gate-39-figure-typeset.spec.ts (emission) · .github/workflows/typeset-pin-rederive.yml (sampler)
tags: [evidence, haussmann, gr_5, f_ab, gate_39, pin, ci]
---

# O3 — re-deriving `gate-39`'s pin in CI's own environment

> ⛩ **Ruling 1 (operator, 2026-09-04), option (1):** *re-derive `netdiagram-svg`'s `worstPx` in CI's
> own environment, so the pin becomes a fact about the environment that asserts it* — ordered
> **strictly after `AC-1`** (`CONSTRAINT-1`), **plus a conditional fallback rider**: if the CI
> re-derivation is *itself* unstable across n runs, fall to **advisory** automatically with the
> measured instability as the reason, **no second trip to the operator**.
> ⛔⛔ **NEVER `7.9 → 7.4`.**

## Why the measurement has to happen in CI, stated once

`F-ab`(b): the pin was taken from a **local** measurement CI does not reproduce — CI read **7.4**
against a pinned **7.9** on bytes that had gone green twice. `O1` then measured the same family at
**0 failures in 100 host runs** on the *same tree CI had just failed on* (`DATUM 1`).

⇒ ***A host run cannot refute a CI flake.*** Whatever the mechanism is, **it is something CI has and
this Mac does not**, and no further host sampling will find it. ⭐ ⛩ Ruling 1 selected this lane
**before** `DATUM 1` existed; `O1`'s result is independent corroboration of the routing, not its cause.

## What was built

### 1. `gate-39` emits its measurement on every run — an EMISSION, not an assertion

Before this, the measured value surfaced **only inside a failure message** (the
`below-floor (regression)` finding). ⇒ **a passing run emitted nothing**, so the pin could only ever
be re-derived from the runs where it was *already wrong*. Every run now writes, per pinned figure,
the **worst (smallest) rendered size it painted** — the same quantity `BASELINE[key].worstPx` is.

⭐ **It moves no pin and cannot change whether the gate passes**, which is what keeps `AC-5` (*no gate
is loosened in the dark*) satisfiable **alongside** `AC-3` (*re-derive the pin*). Those two criteria
are met by opposite states of one file if a pin moves carelessly — `DEFECT-2` caught exactly that —
so the re-derivation is built to need **no pin change to produce its evidence**.

⭐⭐ **Written BEFORE the assertions, deliberately.** A failing run is the most informative sample
there is: it is the only kind that has ever shown CI's 7.4. Emitting after the `expect`s would discard
precisely the runs `F-ab` is about, and the re-derivation would be built **from survivors only**.
Red-proven as case **2b**.

**`G39f`** ships with it — *the emission is non-vacuous*. Without it a broken accumulator writes an
empty file that reads exactly like a clean measurement: **B0's *control that passed for the wrong
reason*** and `O1`'s self-test **W8** (*a grep matching zero tests is a HARNESS ERROR, never a pass*).
Placed **before** the findings assertion so the **cause reports ahead of the symptom** (GR-3).

### 2. `.github/workflows/typeset-pin-rederive.yml` — the CI sampler

`workflow_dispatch` only, in the **same container image** `gates.yml` pins, running `gate-39` **n
times in one job** and keeping **every** run's emission — including the red ones, since those are the
only samples that have ever shown 7.4. `|| true` on the gate is load-bearing rather than lax: **this
job's product is the measurement, and a red gate is a datum, not a job failure.**

⛔ **Its own concurrency group, not `gates-${{ github.ref }}`.** That group is
`cancel-in-progress: true`, so joining it would let any push **cancel the measurement mid-run** — the
hazard already observed against `unlighthouse-sweep`, whose first-ever run was at risk from a push
inside its window. **A sampler that can be silently truncated reports a smaller `n` than it claims,
and `n` is the entire point.**

✅ **`safe.directory` IS included here, and the asymmetry with `unlighthouse-sweep` is deliberate and
measured, not copied.** This job has a `container:`, so it inherits the uid mismatch GR-2 O4
diagnosed. The sweep has none — which is why O4 refused to add the step there, and why the sweep
remained the **negative arm that measured the container as the differentiating variable**. *A remedy
applied to an absent cause destroys the arm and looks like a success.*

⚠ **The summariser derives its environment rather than asserting it.** Its header first read
*"CI environment"* — and it was exercised **on the host** before shipping, where that line would have
printed a **false claim about the one variable this entire objective turns on**. It now prints
`GitHub Actions runner` or `NOT CI — a local run`, derived from `GITHUB_ACTIONS`. Convention 18, caught
in this desk's own instrument, before its first live run for once rather than in its fourteenth day.

## Red-proof — `6 pass / 0 fail`, every case attributing to its declared assertion

`site/scripts/typeset_emission_redtest.sh` (convention 14; GR-3's clause — *a demonstration is only
worth what it can attribute*).

| # | Mutation | Aimed at | Result |
|---|---|---|---|
| 1 | disable the accumulator (`if (false && key !== null)`) | **`G39f`** | ✅ red via `G39f` |
| 2 | raise `netdiagram-svg`'s pin to `9.0` | **findings** | ✅ red via the findings assertion |
| 2b | …and the emission file after that red run | write-before-assert | ✅ **file present** |
| 3 | flip `<` to `>` in the accumulator | *(no assertion — see below)* | ✅ emitted value moved **8.0 → 11.96** |
| 4 | control, unmutated | — | ✅ gate green, both themes |
| 4b | control, emitted values | — | ✅ 3 figures, none absent, min back to **8.0** |

⭐⭐ **CASE 3 CANNOT BE JUDGED BY PASS/FAIL, AND SAYING SO IS THE POINT.** *"The emission records the
minimum"* is a claim about **file content**; **no assertion in the gate depends on it**, so no
mutation can turn the gate red. A harness that only asked *"did it go red?"* would have scored this
claim **untested while reporting a clean sweep** — the *partial instrument reporting like a complete
one* shape. It is judged by **reading the artifact** instead: convention 18 applied to a red-test.

⚠ **Two defects in this harness of mine, both before the subject** (the standing streak): a
case-4 conditional written as `if VAR="$(...)"; case ...; then`, which is not valid shell and would
have mis-scored the control; and `$TRUE_MIN` interpolated into a Python literal, which turns a
**harness error** (`ERR`) into a `SyntaxError` and **reports a code fault as a subject fault**. Both
caught by reading the script back rather than by the run.

## ⭐⭐ THE HOST MEASUREMENT ALREADY REFRAMES `F-ab`(b), BEFORE CI HAS RUN

First emission on this node (`fe2bba6`, dark and light **identical**) `[D]`:

| Figure | host min | pinned | **margin** |
|---|---|---|---|
| `hero-graph-svg` | 3.5403 | 3.4 | **+0.140** |
| `netdiagram-svg` | 8.0000 | 7.9 | **+0.100** |
| `convergence-funnel` | 8.5000 | 8.4 | **+0.100** |

⭐ **Every pin sits ~0.1 px below the host's own worst reading.** Each was set at the observed worst
and rounded down by a hair, so **all three carry essentially zero headroom** — and CI's `7.4` is
**0.6 px below the pin and 0.9 px below what this machine paints.** That is not jitter around a
threshold; it is a **systematic ~7.5 % difference in painted size between two environments.**

⇒ Two consequences the register row does not yet carry, both stated as **readings, not diagnoses**:

1. **`F-ab`(b) is not `netdiagram-svg`'s problem — it is all three figures'.** The row names only
   `netdiagram-svg` because that is the one that happened to fire. **The other two are equally
   exposed** and differ only in which side of a 0.1 px margin CI lands on.
2. **A ~0.6 px systematic gap is too large to be explained by measurement noise**, which makes
   *"container width at measure time"* (the row's parked hypothesis) look less likely than a font
   metric / rasterisation difference between the host and the container. ⛔ **Filed as a hypothesis
   and explicitly not a diagnosis** (GR-2's discipline: verify the cause before authoring the fix).
   The sampler settles it either way, because it reports **spread**, and a systematic offset with zero
   spread is a very different object from a jittery one.

## What has NOT been done, and what the ruling permits next

- ⛔ **No pin has moved.** `AC-5` holds trivially so far: `git diff` over the gate specs shows **zero**
  `BASELINE`/threshold/pin changes.
- ⛔ **The re-derivation has not run.** The workflow is `workflow_dispatch` and can only be dispatched
  from `origin`, so **`O3`'s measurement needs a ⛩ push GO** before it can happen at all.
- ⚠ **`n` is NOT 97, and the default of 20 is a starting point, not a derived figure.** `O1`'s
  `n ≥ 97` was computed for a **proportion** in a 40–60 % band; `O3` measures a **continuous
  extremum**, for which that arithmetic says nothing. The summariser prints this on its own face so a
  later reader cannot borrow the number. ⭐ **What actually decides `n` here is the observed spread**,
  which is why the report leads with spread rather than with a point estimate — and why `n` will be
  stated with its basis once there is a distribution to state it against.

## The decision the measurement settles — pre-committed, so it cannot be fitted afterwards

Written **before** the run, so neither branch can be chosen to suit the result:

| CI reading | Action |
|---|---|
| **spread = 0** across n runs | pin `worstPx` to CI's observed min; the diff hunk **quotes ⛩ Ruling 1** (`AC-5`'s named exception, `V3`) |
| **spread > 0** | ⛩ **the ratified fallback rider fires automatically** — the gate goes **advisory**, with the measured instability as the reason on its face |

⛔⛔ **Neither branch is `7.9 → 7.4`.** If CI's min is 7.4 with zero spread, the pin becomes **7.4 as a
re-derived fact about the asserting environment**, which is a different act from loosening a bar to
make a test pass — and the record must say which one happened, because **the two produce the identical
diff.** ⭐ That distinction is the whole of ⛩ Ruling 1, and it is why the ruling exists rather than a
one-line fix.
