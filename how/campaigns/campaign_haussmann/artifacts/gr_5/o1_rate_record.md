---
type: evidence
title: "GR-5 O1 — the rate harness: method, self-test, and the power arithmetic nobody had done"
campaign: campaign_haussmann
mission: mission_haussmann_gr_5_flaky_gates
objective: O1
status: in_progress   # method + self-test COMPLETE and recorded; the n=100 measurement is running. Results appended at the bottom, never rewritten above.
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

*(pending — the n=100 run is in flight)*
