---
type: evidence
title: "GR-5 O1 — the rate harness: method, self-test, and the power arithmetic nobody had done"
campaign: campaign_haussmann
mission: mission_haussmann_gr_5_flaky_gates
objective: O1
status: complete   # ⛩ O1 / AC-1 COMPLETE 2026-09-05. Method + self-test + the n=100 measurement, all three families STABLE at 0/100. ~~in_progress~~ · Results appended at the bottom, never rewritten above (SO-6). ⛔ Read §Results' limits before citing the verdicts: the harness ran on the HOST and `F-ab`'s hardest evidence is CI-side, and `O2` has lost its subject.
created: 2026-09-04
updated: 2026-09-04
last_edited_by: agent_rosetta
instrument: site/scripts/flake_rate_measure.mjs
tags: [evidence, haussmann, gr_5, f_ab, rate, power]
---

# O1 — the rate harness

> **`AC-1`'s deliverable.** The instrument is `site/scripts/flake_rate_measure.mjs`. It **measures**;
> it fixes nothing, changes no gate and moves no pin. `AC-2`'s mechanism verdict and `AC-3`'s ⛩ pin
> ruling both consume what it produces, which is why `DEFECT-1` required it be parameterised by
> **tree and config** from the first line rather than retrofitted at a sitting's tail.

## ⭐⭐ THE HEADLINE, AND IT IS ARITHMETIC RATHER THAN OPINION: **n must be ≥ 97**

`DEFECT-4` said the criterion named no `n` and that *"at the ~40–60 % flake §22.4 measured, **n=5
cannot separate 40 % from 60 %**"*. That was asserted. **It is now computed** `[D]`:

> To resolve a rate to within the **±10 pp** half-band of `[40 %, 60 %]` at 95 % confidence, at the
> worst-case `p=0.5` (widest interval):
> **n ≥ (1.96² × 0.25) / 0.10² = 97.**

⇒ Every observation this finding has ever rested on — a single red, a rerun-green, `3/5` vs `2/5`,
and `DATUM 1`'s pass/fail pair — is **between 1 and 5 % of the sample size needed to state a rate.**
That is not a criticism of those observations; it is the reason `AC-1` exists, and it converts
*"a control is a rate, not a run"* from a maxim into a number.

⚠ **AND IT CUTS AT §22.4's OWN READING — PRECISELY, NOT WHOLESALE.** Run through this harness's
verdict rule, §22.4's `2/5` returns **INCONCLUSIVE**, not `40 %` (self-test **W3**). ⛔ **But its
CONCLUSION survives, and saying otherwise would be the overclaim this campaign keeps catching.**
§22.4 concluded *"this increment is NOT implicated"* — a **comparative** claim, and what supports it
is that **the control arm failed at all**, which no sample size makes untrue. What does **not**
survive is quoting `40 %` or `60 %` as *rates*. ⇒ *a sample too small to state a rate can still
refute a causal attribution* — the two are different claims with different evidentiary costs, and
the record now distinguishes them.

## Method

| Element | Choice | Why |
|---|---|---|
| Interval | **Wilson score, 95 %** | At `k=0` or `k=n` — which n=5 produces constantly — the normal approximation collapses to **zero width** and would report `0 %` or `100 %` with **no uncertainty at all**. That is exactly the false confidence `DEFECT-4` exists to prevent (self-test **W1**). |
| Verdict rule | **INCONCLUSIVE when the interval *contains* the whole hypothesis band** | `AC-1`'s words: *an interval that spans the hypothesis is reported as inconclusive, never as a rate.* ⚠ Guarded against vacuity in the other direction by **W4/W5** — a rule that is *always* INCONCLUSIVE certifies nothing. |
| Attribution | **per test title**, aggregated upward | GR-3's clause: *a demonstration is only worth what it can attribute.* A family rate that cannot say **which** assertion failed is the same defect as a red-test case reddening via the wrong assertion. Decomposable after the fact, without re-running. |
| Third state | **`harness-error`, excluded from the denominator** | A run that exercised **nothing** must never count as a pass. Folding harness errors into `n` lets a broken harness read as a **low flake rate** — the *"a zero meaning the command failed, not the string is absent"* defect from GR-4's own sitting (**W8**). |
| Load | `os.loadavg()` **before and after every run**, plus per-run wall-clock | ⭐ **Free, and nothing asked for it.** `F-ab`'s stated mechanism is that these assertions are *"bets on how busy the machine is"* — **asserted and never tested**. Recording two numbers on a record already being written makes that relationship measurable **without a second instrument**, which conventions 15/16/17 each ruled against authoring at a sitting's tail. ⛔ Recorded, **not concluded from**. |
| Sampling order | **strictly sequential** | ⭐ Parallelising the sampler would **manufacture CPU load and confound the very variable `F-ab` names.** Stated because the obvious speed-up is the one that destroys the measurement. |

### Parameterisation (`DEFECT-1`, both halves, present from the first line)

- **`--config-override k=v`** — generates a temp TS config that spreads the base and patches exactly
  one project's `use` block. ⚠ Written **beside** `playwright.config.ts`, because `testDir:
  './tests/gates'` resolves relative to the config's own location: a temp config in `/tmp` matches
  nothing and would report *"0 tests ran"* as a pass. This is `AC-2`'s second arm (`reducedMotion`).
- **`--tree <ref>`** — `git worktree add --detach` + symlinked `node_modules` + a build. ⛔ A worktree
  rather than `checkout`/`stash` **because the working tree is routinely dirty on this node**, and a
  harness that mutates the operator's tree to take a measurement is a worse defect than the one it
  measures. The build is convention 6 verbatim — `npx astro build`, **never** `npm run build`, then
  `node scripts/inject_redirects.mjs .`.

### The family frame — 4 surfaces, with a floor

`AMENDMENT 1` took `F-ab`'s surface count 3 → 4. The frame is pinned with `FAMILY_FLOOR = 4` so a
family silently disappearing — a renamed title, a deleted spec — reads as an **error**, not as a
clean measurement. ⭐ *A coverage floor goes stale the moment its subject grows* (`G53c`'s lesson,
and `G54`'s `failing_set()` one character from blindness): it is raised in the commit that grows it.

⛔ **`g49home` is REFUSED on the host and routed to `visual_regression_container.sh`** — never
re-implemented here. On this Mac against container baselines **every** screenshot diffs on font
rasterisation, so a host run measures rasterisation and reports it as flake: **convention 18, a red
about the wrong surface.** The existing script already owns the image pin, the vault mount and the
`node_modules` volume, each of which was a finding when it was got wrong.

## Convention 14 — the harness demonstrated to fail before it is believed

`node scripts/flake_rate_measure.mjs --self-test` → **11 passed · 0 failed** `[D]`.

| Case | Asserts |
|---|---|
| **W1** | Wilson at `k=0, n=5` has real width (`hi = 43.4 %`) — the normal approximation's failure mode |
| **W2** | `n_required` for the 40–60 % band is **97** — the arithmetic above |
| **W3** | §22.4's own `2/5` reads **INCONCLUSIVE**, not `40 %` |
| **W4** | a clean `n=200` reads **STABLE** — the rule is not vacuously inconclusive |
| **W5** | an always-failing `n=200` reads **ABOVE-BAND** |
| **W6** | the family frame carries all four `F-ab` surfaces |
| **W7** | `g49home` is marked container-only (convention 18) |
| **W8** | a grep matching **zero** tests is a HARNESS ERROR, never a pass |
| **W9** | a failing test reads `failed:true` **and is attributable by title** |
| **W10** | an all-green run reads `failed:false` with no harness error |
| **W11** | an unreadable report is a HARNESS ERROR **even when tests were parsed** |

⭐⭐ **W8–W11 EXIST BECAUSE W1–W7 WERE NOT ENOUGH, AND THE GAP IS THIS CAMPAIGN'S OWN CLASS.** The
first draft's self-test covered the **statistics** completely and the **measurement path** not at
all — so the harness would have been believed on the strength of its arithmetic while the part that
decides *what a failure IS* had never been demonstrated to fail. That is convention 13's *"a correct
instrument applied partially, reporting like a complete one"*, and it is **the shape GR-3 found
inside the red-test harness whose entire job was enforcing convention 14 on everything else.**
The fix was to extract the classifier into a **pure function** — GR-2's `freshnessStateFrom(probe)`
shape, adopted deliberately rather than re-derived.

## Measurement — running

`n=100` per family, sequential, on the working tree at **`fe2bba6`**, `dist/` rebuilt at the open per
convention 6 (229 pages, redirects widened 42/42) `[D]`.

⭐ **`n=100` clears `n_required=97`** — so for the first time in `F-ab`'s life the cheap families can
return a verdict that is **not** INCONCLUSIVE. That is the whole reason the run is worth two hours.

Per-run cost, measured before choosing `n` rather than guessed (*measure first, then pin* — B0's
ruling, and the fourth sighting of a pin written by feel in this campaign): **`g39` 3.5 s ·
`g47` 10.5 s (11 tests) · `g42b` 55.0 s.**

⚠ **Host conditions recorded, because they are the hypothesis**: 16 cores, `load1` **9–15** across the
opening runs — this node is **busy**, which is the condition `F-ab` names.

> Results are appended below when the run completes. **Nothing above this line is rewritten** (SO-6).

---

## Results

**Run complete 2026-09-05T01:1x UTC** — `n=100` per family, sequential, tree `fe2bba6`, config
unmodified, `harnessErrors: 0` on all three. Machine-readable: `o1_rate_report.json`.

| Family | Selected assertions | n | failures | point | **95% Wilson** | verdict | wall-clock median |
|---|---|---|---|---|---|---|---|
| `g39` · figure typeset floor | 2 (dark + light) | 100 | **0** | 0.0% | **[0.0%, 3.7%]** | **STABLE** | 2.96 s |
| `g47` · keyboard traversal | 11 (incl. Shift+Tab) | 100 | **0** | 0.0% | **[0.0%, 3.7%]** | **STABLE** | 10.4 s |
| `g42b` · console clean | 2 (dark + light) | 100 | **0** | 0.0% | **[0.0%, 3.7%]** | **STABLE** | 57.2 s |

⛔ **The point rate is never quoted without its interval** — the harness prints the warning itself, and
at `k=0` the normal approximation would report `0%` with **zero width** (self-test **W1**).

### ⭐ What this refutes, stated at exactly its width

**§22.4's `40–60%` is excluded as a rate for this configuration.** Not *"unlikely"* — arithmetic:
at the band's most favourable end, `P(0 failures | p=0.4, n=100) = 0.6¹⁰⁰ ≈ 6.6 × 10⁻²³`; at `p=0.6`
it is `≈ 1.6 × 10⁻⁴⁰`. **`n=100` clears `n_required=97`, so for the first time in `F-ab`'s life these
families return a verdict that is not INCONCLUSIVE** — and the verdict is the opposite of the one the
mission was convened expecting.

### ⭐⭐ THE CHECK THAT MAKES THE ZERO MEAN ANYTHING, AND IT IS NOT ONE THE SELF-TEST COULD DO

**W8** asserts that a grep matching **zero** tests is a HARNESS ERROR. It does **not** guard against a
grep matching **the wrong non-zero subset** — which would produce a clean, confident `0/100` about
assertions nobody is asking about. Verified at the object with `--list`, after the run `[D]`:

| Family | `--grep` | selects | includes the assertion `F-ab` names? |
|---|---|---|---|
| `g39` | `G39 figure-typeset` | 2 | ✅ `…(dark)` at `:137` — **CI's actual red in `DATUM 1`** |
| `g47` | `G47 keyboard` | 11 | ✅ `G47 keyboard: Shift+Tab walks back…` at `:203` — **§22.4's subject** |
| `g42b` | `G42b` | 2 | ✅ both themes of `G42b: no console error…` at `:102` |

Counts reconcile with the run log's own per-run `2 / 11 / 2 tests ok`. ⇒ **the instrument sampled the
right targets**, which is the precondition for the zero being a result rather than an artifact.

### ⛔⛔ THE DECISIVE LIMIT — CONVENTION 18: THIS HARNESS RAN ON THE HOST, AND `F-ab`'s HARDEST EVIDENCE IS FROM CI

`DATUM 1` is two **CI** runs (`33917725977` success · `33918391804` failure) on byte-identical bytes.
`F-ab`(b) — the ratchet debt — is *"`7.9` came from a local run; **CI** read `7.4`"*. Both are
observations about **a machine this desk does not control and cannot sample from here.**

### ⭐⭐ AND THE SEAM IS NOT A CAUTION — IT IS DEMONSTRATED, ON THIS EXACT TREE, FOR THIS EXACT ASSERTION

This is the strongest thing O1 produced, and it was available only because the session's own
convention-19 check at the open recorded it `[D]`:

| | |
|---|---|
| Tree | **`fe2bba6`** — the tree this harness sampled |
| CI run `33918391804`, `gates` on `main` at `fe2bba6` | ⛔ **FAILURE** — `gate-39-figure-typeset.spec.ts:137` · `G39 figure-typeset: … (dark)` · 1 failed / 681 passed |
| This harness, same tree, same assertion | ✅ **0 failures in 100 runs** |

⇒ ***The same assertion, on the same bytes, failed in CI and did not fail once in 100 host runs.***
Both observations are `[D]` and neither is in doubt, so the disagreement is not noise to be resolved —
**it localizes `F-ab`(a) to the environment rather than to the code.** ⭐ That is a genuine advance on
the mission's opening state, where the cause was *"unverified"* with a container-width hypothesis
attached: **whatever the mechanism is, it is something CI has and this Mac does not**, and no amount
of further host sampling will find it.

⇒ **`O3` is not merely still runnable — the evidence now points at it.** Re-deriving `worstPx` in CI's
own environment is precisely the measurement this result argues for, and ⛩ Ruling 1 selected it before
this datum existed.

⚠ **Stated at its width, because it is one CI observation.** `n=1` in the CI lane is exactly what
`AC-1` exists to refuse quoting as a rate — *a control is a rate, not a run*. The claim here is the
**disagreement**, which one failure is sufficient to establish; **not** a CI failure rate, which it is
not.

⇒ ***A host run cannot refute a CI flake.*** For `g39` in particular — the family whose entire
evidentiary basis is CI-side — `0/100` on this Mac is **not** evidence the flake is gone; it is a
precise statement about **a different machine**. Recorded as the limit it is, because a `STABLE`
verdict in a table is exactly the shape that gets cited later as *"`F-ab` was measured and it was
fine."* **It was measured on the wrong side of the seam for `g39`.**

### ⚠⚠ A HYPOTHESIS OF THIS DESK'S WAS HALF WRONG, AND THE HARNESS'S FREE DATUM IS WHAT SAID SO

On seeing the zeros, this desk's first reading was: *the harness sampled the quiet end of the load
distribution, so it missed the regime `F-ab` names.* **Measured across all 600 recorded `load1`
readings `[D]`** — the before/after pair the harness records on every run, which nothing asked for:

| Scope | n | min | median | p90 | max |
|---|---|---|---|---|---|
| all families | 600 | 4.87 | **10.55** | 16.58 | 22.95 |
| `g39` | 200 | 9.08 | **14.13** | — | 21.91 |
| `g47` | 200 | 6.70 | 10.36 | — | 22.95 |
| `g42b` | 200 | 4.87 | **7.67** | — | 20.23 |

**16.7% of samples sat at `load1 ≥ 15`** on a 16-core box.

⇒ **The hypothesis survives for `g42b` (median 7.67 — genuinely quiet) and DIES for `g39`, which ran
at median 14.13 and a max of 21.91 and did not fail once in 100 runs.** ⭐ That is the *stronger*
result, and it was only available because the load pair was recorded on a record already being
written — the line in §Method that says *"free, and nothing asked for it… recorded, **not concluded
from**"*. It is concluded from **now**, deliberately and once, and the conclusion is against this
desk's own guess.

### ⚠ One regime difference that DOES survive, and it is concrete

§22.4's arms were **5 runs each, rebuilt between**. This harness **builds once per tree**
(`flake_rate_measure.mjs:264`, inside `setupWorktree`) and **never inside `runOnce` (`:298`)** `[D]`.
A rebuild is a heavy multi-core event that the following run starts on top of. ⇒ **§22.4 may have
been generating the load whose effect it attributed to the increment** — which does not overturn its
comparative conclusion (*"this increment is NOT implicated"*, supported by the **control arm failing
at all**), but does mean **its arms and this harness sampled different machines in the same box.**

### ⭐⭐ THE CONSEQUENCE FOR `O2`, AND IT IS STRUCTURAL: THE EXPERIMENT HAS LOST ITS SUBJECT

`AC-2` discriminates the `gate-47` mechanism by running two arms at equal `n` — `reducedMotion` on and
off — and asks whether **"the rates separate beyond AC-1's stated interval."** With a measured
baseline of **0/100**, both arms read 0, and **no separation is detectable at any `n` this node can
afford.** *You cannot measure a treatment effect on a phenomenon that does not occur in the regime you
can sample.*

⛔ **This is NOT `AC-2`'s ratified refutation branch, and collapsing the two would be the overclaim.**
`DEFECT-3`'s clause says *"if the rates do not separate, the cause is still unverified, no fix is
authored… `F-ab` stays `live`"* — that branch presumes **the phenomenon occurred and the treatment
failed to move it.** What O1 found is a **third state the criterion does not name**: *the phenomenon
did not reproduce at all on the surface available to the experiment.* The honest report is **not**
*"the hypothesis is refuted"* — it is ***"the experiment is currently unrunnable, because its subject
is absent from the only regime this instrument can reach."***

⇒ ⛩ **A scope decision is owed and is NOT taken here** (SO#1). The candidates, with what each buys:

| # | Option | Buys | Costs |
|---|---|---|---|
| **1** | **Re-aim `O2` at the regime that reproduces** — sample **inside a full-suite run** rather than a `--grep`'d family, which is where all four original observations came from | Restores the subject; tests `F-ab`'s actual claim | Expensive per sample (the suite is minutes, not seconds), and `n≥97` may be unaffordable |
| **2** | **Move the experiment to CI**, where `g39`'s evidence actually lives | The only surface `DATUM 1` speaks about | CI round-trips; and it merges into `O3`'s lane |
| **3** | **Record `AC-2` INAPPLICABLE with the measurement attached** and proceed to `O3` | Honest, cheap, and `AC-4` already has an INAPPLICABLE path | Leaves the `gate-47` mechanism unverified — `F-ab`(c) stays `live` |

⚠ **`O3` IS UNAFFECTED AND IS NOW THE ONLY RUNNABLE OBJECTIVE.** `CONSTRAINT-1` ordered it *strictly
after `AC-1`*, and `AC-1` is complete. It is a **CI-lane** measurement, which is precisely the surface
this record just established the host cannot substitute for. ⭐ **And O1 says nothing about its
fallback rider**, correctly: the rider fires on *"CI cannot produce a stable `worstPx` across `n`
runs"*, and **this run measured the host** — so the rider is neither triggered nor excluded, and
reading a host `STABLE` as evidence CI is stable would be the exact substitution this section forbids.

⛔ **`O3` still needs its own ⛩ GO regardless** — it drives CI, and a push is an outward act.
