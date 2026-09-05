---
type: evidence
title: "GR-5 O3 — the pin re-derivation: the instrument, and what the host measurement already says about the pins"
campaign: campaign_haussmann
mission: mission_haussmann_gr_5_flaky_gates
objective: O3
status: complete   # ⛩ MEASURED AND RULED 2026-09-05. ~~in_progress~~ (SO-6). The CI re-derivation RAN (run 33941189252, n=30) and the ratified FALLBACK RIDER FIRED on its result: `netdiagram-svg` is unstable in CI (spread 0.64) ⇒ advisory, automatically, no second operator trip. ⛔ NO PIN MOVED — `worstPx` still reads 7.9, verified by diff with a positive control.
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

---

## Results — the re-derivation ran, and the rider fired

**Run `33941189252`**, `typeset-pin-rederive`, `workflow_dispatch`, **n=30**, at `ddac91b`, on a
GitHub Actions runner in the image `gates.yml` pins. **`success`**, 3m50s, `reds=1 of 30` `[D]`.

| Figure | theme | n | min | max | **spread** | vs pin | verdict |
|---|---|---|---|---|---|---|---|
| **`netdiagram-svg`** | **dark** | 30 | **7.3600** | 8.0000 | **0.6400** | **−0.5400** | ⛔ **NOT STABLE** |
| `netdiagram-svg` | light | 30 | 8.0000 | 8.0000 | 0.0000 | +0.1000 | stable |
| `hero-graph-svg` | both | 30 | 3.5403 | 3.5403 | 0.0000 | +0.1403 | stable |
| `convergence-funnel` | both | 30 | 8.5000 | 8.5000 | 0.0000 | +0.1000 | stable |

⇒ ⛩ **THE RATIFIED FALLBACK RIDER FIRES, ON THE MEASUREMENT AND NOT ON A JUDGEMENT.** Spread > 0 for
`netdiagram-svg` ⇒ the figure goes **advisory**, with the measured instability as the reason on the
gate's face, **automatically, no second trip to the operator** — exactly as ⛩ Ruling 1 specified.

⭐ **THE FLAKE IS ONE FIGURE, NOT THE GATE.** Everything else is *perfectly* deterministic in CI
across 30 runs. That is what makes this a **scoped** rider rather than a retreat, and it is a result
no amount of host sampling could have produced.

### ⭐⭐ THE MEASUREMENT REFUTES THE OBVIOUS REMEDY TWICE — the reason ⛩ Ruling 1 existed at all

1. **CI's observed worst is `7.3600`, BELOW the `7.4` `F-ab` recorded.** Anyone who had *"just
   loosened it to 7.4"* — the move the ruling forbade — would have pinned **above the true floor** and
   the gate would still flake. **The forbidden shortcut was not merely against principle; it did not
   even work.**
2. **Pinning to `7.3600` is no better.** It is the extremum of a distribution with **0.64** of spread
   and a ~3 % event rate ⇒ a pin taken from a measurement the environment does not reproduce, which is
   **`F-ab`(b) reproduced in the other lane** and precisely what `CONSTRAINT-1` forbids.

⇒ **There was no pin to re-derive.** Option (1) was executed in full and its honest answer is that the
quantity it sought **does not exist as a stable value in that environment.** The rider is not a
consolation branch here; it is the correct terminal state, and the measurement is what establishes
that rather than anyone's judgement.

### ⭐⭐ THE SCOPE DECISION, AND AN INDEPENDENT CI EVENT THAT BEARS ON IT

The rider is scoped to the **FIGURE**, not to the theme, though instability was observed only in dark.
Scoping to dark alone would **over-fit a single event**: at the measured ~3.3 % rate,
`P(0 events in 30 light runs) = 0.967³⁰ ≈ 36 %`. **n=30 cannot distinguish *"light is stable"* from
*"light did not happen to fire"***, so asserting the former would be a rate claimed from a run —
`O1`'s finding and §22.4's, in a new place.

✅ **And the standing `gates` run on the same commit failed on `netdiagram-svg` in LIGHT** — run
`33941190271` at `ddac91b`: *"/network/ @320 **light** … 'the network' renders at **7.4px** … worse
than netdiagram-svg's pinned baseline of 7.9px"* `[D]`. **The theme the sampler had just measured at
spread 0.0000 across 30 runs.**

⛔ **STATED AT ITS EXACT WIDTH, BECAUSE THIS IS WHERE A GOOD RESULT GETS OVERCLAIMED. This is
CORROBORATION, NOT A PREDICTION.** The failing run began at **03:12:03** and recorded that assertion
at **03:18:30**; the scoping reasoning was written afterwards **without knowledge of it**, but the
event nonetheless **precedes** the reasoning in wall-clock. It is therefore **not unretrofittable**
the way `GR-2`'s filed-before-the-run prediction was, and calling it one would be exactly the move
this campaign keeps catching. What it *is*: an independent observation, from a different workflow,
confirming that the light arm's 0/30 was **sampling luck and not stability** — and demonstrating that
the tempting narrower scope would have left this red firing.

### ⚠ What the rider costs, said rather than buried

A **genuine regression** in `netdiagram-svg`'s typeset size will now be **reported and will not fail**.
That is what advisory means, it is what ⛩ Ruling 1 ratified, and it is why the gate prints its
advisory line **unconditionally** — including a `0 below-pin readings this run` line, so *"nothing to
report"* is a stated result rather than an absence a reader must infer. *An advisory nobody reads is
indistinguishable from no check at all* (convention 19), and this one now carries the only remaining
evidence about a figure the ratchet no longer enforces.

⛔ **The ratchet remains fully enforcing for `hero-graph-svg` and `convergence-funnel`**, both measured
stable at spread 0.0000. ⛔ **`worstPx` still reads `7.9`.** Removing a figure from `ADVISORY_UNSTABLE`
restores enforcement; **changing a pin** would be the act convention 1 forbids, and `AC-5` is verified
by diff below.

### `AC-5` — no gate loosened in the dark, verified with a positive control

`git diff -U0 -- site/tests/gates/gate-39-figure-typeset.spec.ts` grepped for
`worstPx:|FLOOR_PX =|MAX_TILT_DEG =|RUNNING_TEXT_MIN_CHARS =|MIN_MEASURED =` on changed lines →
**zero matches**, against a positive control showing the file **is** modified (75 insertions,
7 deletions) `[D]`.

⚠ **The FIRST run of that check was a FALSE GREEN and it is recorded rather than quietly re-run.**
It was issued from `site/`, so the repo-relative path was wrong, `git diff` exited with
*"ambiguous argument"*, and the `|| echo "ZERO pin/threshold lines changed"` fallback **printed the
reassuring message**. ⇒ ***a zero meaning "the command failed", not "the thing is absent"*** — §22.5's
own defect, **on an acceptance criterion**, in the sitting that cites it. The re-run leads with a
positive control for exactly that reason.

## Red-proof — `8 pass / 0 fail`

`site/scripts/typeset_emission_redtest.sh`, extended with the rider's two halves.

| # | Mutation | Aimed at | Result |
|---|---|---|---|
| 1 | accumulator disabled | `G39f` | ✅ |
| 2 | `convergence-funnel` pin → 9.0 | findings | ✅ |
| 2b | emission after that red run | write-before-assert | ✅ file present |
| 3 | `<` → `>` in the accumulator | *(artifact-read)* | ✅ 8.0 → 11.96 |
| **5a** | forced below-pin on an advisory figure | **the rider** | ✅ **reported, gate green** |
| **5b** | same condition, advisory removed | **the control for 5a** | ✅ **red via findings** |
| 4 / 4b | controls | — | ✅ |

⭐⭐ **5b IS THE CASE THAT MAKES 5a MEAN ANYTHING.** Without it, 5a's green cannot distinguish *"the
rider suppressed a failure"* from *"nothing was ever going to fail here"* — **B0's control that passed
for the wrong reason**, which certified a mechanism it never exercised.

⚠⚠ **AND ADDING THE RIDER SILENTLY INVALIDATED TWO EXISTING CASES, WHICH THE HARNESS CAUGHT.** Case 2
forced its red through `netdiagram-svg` — the figure the rider had just made advisory — so it could no
longer red, **and case 2b, which asserts the emission survives a FAILING run, passed against a GREEN
one.** A control passing for the wrong reason, created by a change three lines away. Case 2 now targets
`convergence-funnel`, a figure the ratchet still enforces.
⇒ ***A RED-TEST CASE IS COUPLED TO THE BEHAVIOUR IT MUTATES, so changing that behaviour is a same-diff
change to its own harness*** — GR-4 O5's finding (*a copy edit is a same-diff change to its own
harness*) arriving one gate over, in a **behaviour** edit rather than a copy one. ⭐ It failed **alone**,
with every other case clean, which is `O3`'s own `applied()`/`restore_all` discipline earning itself.
