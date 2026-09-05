---
plan_id: mission_haussmann_gr_5_flaky_gates
type: plan
title: "GR-5 — F-ab: three gates that are bets on how busy the machine is, and a ratchet whose tooth moves"
campaign: campaign_haussmann
phase: GR   # corrected 2026-09-04 at the signature: was `P4`, the only GR mission so tagged. The charter's GR section rules that GR missions carry no phase number. GR-1..GR-4 all read `GR`; this was a typo, caught by deriving the set rather than reading the file.
decade: 2
owner: stanley
status: active   # ⛩ SIGNED — Stanley (operator), 2026-09-04. The one owed ruling is TAKEN: **option (1), re-derive the `gate-39` pin in CI's own environment**, ordered strictly AFTER AC-1 per CONSTRAINT-1, **plus a conditional fallback rider** (§The ⛩ ruling). Budget RATIFIED at the TOP of the band, ~220 kT, which is what option (1) selects. ⭐ A FOURTH surface arrived unbidden on the day of the signature — see §AMENDMENT 1. ⛔ O1 → O2 → O3 is a dependency, not a preference.
mission_class: verification
executor_tier: opus   # the subject is measurement design under non-determinism — the one class where a cheaper tier reproduces the defect being fixed (it concludes from n=1, which is this finding's own headline).
token_budget_estimated: "⛩ RATIFIED 2026-09-04 — **~220 kT / 1–2 sessions**, the TOP of the proposed 140–220 band, because the ⛩ ruling selected **option (1)** and option (1) is what the top of the band was costed for. The conditional band is now a number, which is the whole reason the ruling was put at the gate. Per-objective as proposed: O0 ~20–30 [SPENT] · O1 ~35–55 · O2 ~25–40 · O3 ~45 (option (1)) · O4 ~20–30 · O5 ~15–20. ⚠ **AMENDMENT 1 may push past this and it is FLAGGED, not silently absorbed** — a fourth flaky surface (`gate-49`/`home`) is the most expensive of the four to sample: ~38 s per in-container run against milliseconds for the others, so an n=20 rate on it is ~13 min of wall-clock per tree × two trees. If O1's design needs that, it is re-costed AT O1 and reported, never quietly. ⚠ ~40 kT of any HAUSSMANN sitting is the campaign CLAUDE.md, auto-loaded — inside this band, not beside it."
token_budget_actual:
created: 2026-09-04
last_edited_by: agent_rosetta
grounded_in:
  - "claim_register.md §21.2 — F-ab, gate-39 non-determinism demonstrated by rerun, not argued [D]"
  - "claim_register.md §22.4 — F-ab EXTENDED: gate-47 Shift+Tab measured 3/5 control vs 2/5 changed; DOM stable at 640 [D]"
  - "site/tests/gates/gate-39-figure-typeset.spec.ts:73-74 — BASELINE['netdiagram-svg'].worstPx = 7.9 [D]"
  - "site/tests/gates/gate-39-figure-typeset.spec.ts:268,286 — the ratchet law in the gate's own words [D]"
  - "CI run 33811108468 (red on gate-39 at 1d6af75) → `gh run rerun --failed` → success attempt 2 [D]"
  - "CI run 33893251012 (2026-09-04, at c32a4b7) — gate-39, gate-42 G42b and all three gate-47 assertions PASSED [D]"
  - "campaign convention 14 (an instrument is not believed until demonstrated to fail); GR-2 (verify the cause before authoring the fix); GR-3 (one green cannot separate 'it works' from 'we got lucky')"
vitruvius_dimensions: [D11]
decade_theme: craft
webforge_patterns: []
patterns_to_author: []
depends_on: []
blocks: []
acceptance_criteria:
  - "AC-1 (method + test) — RATES, NOT RUNS. A repeat-run harness reports a measured failure RATE for each of the three affected assertion families (`gate-39` netdiagram-svg · `gate-42` G42b · `gate-47` Shift+Tab) with its **n stated on the report's face** and its **wall-clock recorded per run** (GR-2: *a count is only comparable to a count produced by the same command, on a comparably loaded machine*). ⛔ **n IS NAMED AND ITS POWER IS STATED, NOT IMPLIED** (DEFECT-4): at the ~40–60% flake §22.4 measured, **n=5 cannot separate 40% from 60%** and the report says so — an interval that spans the hypothesis is reported as *inconclusive*, never as a rate. ⭐ **THE HARNESS IS PARAMETERISED BY TREE AND BY PLAYWRIGHT CONFIG FROM THE FIRST LINE** (DEFECT-1), because AC-2 consumes this same instrument; a harness hard-wired to one tree forces a second instrument at a sitting's tail, which is this campaign's most-repeated defect."
  - "AC-2 (method + test) — THE `gate-47` MECHANISM IS DISCRIMINATED, NOT ASSUMED. §22.4's hypothesis (the hero rAF drift loop reorders the DOM between the forward and backward walks, shifting `readFocus`'s `tag.class#domIndex` keys) is tested by the **one treatment that already exists in this suite and is the difference between the two gates**: `gate-49` neutralises that component with `reducedMotion: 'reduce'` and `gate-47` does not. Run `gate-47` **with and without it at equal n** via AC-1's harness. ⭐ **The hypothesis is CONFIRMED only if the rates separate beyond AC-1's stated interval** — GR-2's discipline, and the reason this precedes any fix. ⛔ **A REFUTATION IS A VALID AND COMPLETE RESULT** (DEFECT-3): if the rates do not separate, the cause is *still unverified*, **no fix is authored**, and the deliverable is the measurement plus a re-aimed hypothesis. `F-ab` stays `live` in that case and it is not a mission failure."
  - "AC-3 (method + test) — THE `gate-39` PIN, PER THE ⛩ RULING AND ONLY PER IT. Executed as the operator rules at the gate: **(1)** re-derive `netdiagram-svg`'s `worstPx` in CI's own environment, so the pin becomes a fact about the environment that asserts it — ⚠ **ORDERED AFTER AC-1** (CONSTRAINT-1), because option (1) is a CI-lane measurement and AC-1 is what produces one; or **(2)** record the gate advisory with its reason on its face. ⛔⛔ **NEVER 7.9 → 7.4.** Loosening a pin to make a test pass is what convention 1 forbids and what the gate's own `ratchet_law` (`:268`) reserves for an operator gate; the number is not the subject, the ratchet is."
  - "AC-4 (test) — EVERY CHANGE THIS MISSION SHIPS IS RED-PROVEN by mutation before it is believed (convention 14). ⛔ **SCOPED TO CHANGES THAT EXIST** (DEFECT-3's other half): where AC-2 refutes its hypothesis, **nothing is shipped and there is nothing to red-prove**, and this criterion is reported **INAPPLICABLE — never as a miss and never as a blank**. Read literally without this clause, AC-4 turns a null result into a failure and pays a mission to find a fix it has no evidence for."
  - "AC-5 (test) — NO GATE IS LOOSENED IN THE DARK. A diff of every `BASELINE`/threshold/pin value the suite carries is asserted **unchanged**, ⚠ **EXCEPT the single value the ⛩ ruling names, whose new value quotes the ruling in the same diff** (DEFECT-2). Without that exception this criterion and AC-3 are met by opposite states of the same file — a criteria set that cannot be simultaneously satisfied, which is exactly what convention 13 exists to catch."
  - "AC-6 (method + test) — Close cascade: register row for `F-ab` moved with its evidence (⛔ moved on the MEASUREMENT, never on the authoring), counts derived after writing (§21.3), `token_budget_actual` recorded at the time, AAR filed before `completed` (SO-5), STATE + campaign CLAUDE.md updated."
verification_method: |
  V1 — every reported rate carries its n, its per-run wall-clock, and an explicit inconclusive verdict where the interval spans the hypothesis  [asserts AC-1]
  V2 — the gate-47 experiment's two arms differ in EXACTLY ONE variable (`reducedMotion`) and are run at equal n on the same tree, shown by the harness invocation recorded verbatim  [asserts AC-2]
  V3 — `git diff` over the gate specs shows either zero pin changes, or exactly one whose diff hunk contains the ruling's text  [asserts AC-3, AC-5]
  V4 — each shipped change has a recorded mutation that made it red, and each INAPPLICABLE is named with the refutation that made it so  [asserts AC-4]
  V5 — the register's counts are re-derived AFTER the section is written, by script, and the F-ab row's status change cites a measurement rather than a paragraph  [asserts AC-6]
human_gate: true
tags: [plan, haussmann, gr, f_ab, flaky_gates, gate_39, gate_47, ratchet]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> ⛩ **This file is `proposed`. Nothing in it may be built before the operator's signature.**

## Why this mission exists

`F-ab` (register **§21.2**, extended at **§22.4**) is the campaign's standing finding that **three gates
are bets on how busy the machine is**, plus a fourth defect hiding inside one of them:

| Debt | Statement | Status |
|---|---|---|
| **(a)** | `gate-39` · `gate-42 G42b` · three `gate-47` assertions fail and pass on identical bytes; **demonstrated by rerun, not argued** (`33811108468` red → `--failed` rerun `success`) | cause **unverified** |
| **(b)** | `gate-39`'s `7.9px` pin came from a **local** measurement CI does not reproduce (CI read `7.4`) ⇒ ***a ratchet whose tooth position is non-deterministic does not ratchet*** | **open**, ⛩ operator's |
| **(c)** | `gate-47`'s Shift+Tab is **not load-only** — it fails **in isolation** at 21s, control **3/5** vs changed **2/5** | mechanism **hypothesised only** |

⭐ **The cost is not the reds; it is that three gates have stopped being able to say anything.** Every
future failure on that set is *a question, not a verdict*, which taxes every remaining sitting and, at
the limit, is how a real regression gets rerun until it goes away.

⚠ **A datum from this sitting, recorded because `F-ab`'s subject is a rate:** CI run **`33893251012`**
(2026-09-04, at `c32a4b7`) passed `gate-39`, `gate-42 G42b` **and all three `gate-47` assertions.**
One more green observation on the load-sensitive set — **which is evidence about a rate and not a
retraction.**

## ⛩ THE RULING OWED AT THIS GATE — the `gate-39` pin

The mission **cannot be costed without it** (the band's top and bottom are different options), so it is
put here rather than discovered at execution.

| # | Option | What it buys | What it costs |
|---|---|---|---|
| **1** | **Re-derive `worstPx` in CI's own environment** | The pin becomes **a fact about the environment that asserts it**. The ratchet becomes a ratchet again. | A CI round-trip per iteration; ⚠ **ordered after AC-1** (CONSTRAINT-1) — re-deriving from a single CI run reproduces the original defect **in the other lane**, so it needs AC-1's rate first. Top of the band. |
| **2** | **Record the gate advisory, with its reason on its face** | Honest immediately; costs nothing; the gate stops making a claim it cannot support. | **Loses the ratchet** on this figure until someone restores it. Bottom of the band. |

### ⛩ RULING TAKEN — Stanley (operator), 2026-09-04

**Option (1) — re-derive `worstPx` in CI's own environment** — ordered **strictly after AC-1**, per
CONSTRAINT-1.

⭐ **Plus a conditional fallback rider, adopted at the same signature so that a second trip to the
operator is not needed for a foreseeable outcome:**

> **If the CI re-derivation is ITSELF unstable across n runs — i.e. CI cannot produce a stable
> `worstPx` for `netdiagram-svg` either — then fall back to option (2) automatically, recording
> the measured instability as the reason on the gate's face.**

**Why the rider rather than a bare option (1):** option (1)'s premise is that *CI is a stable
measuring environment and the local Mac was not*. That premise is exactly the kind this campaign
keeps finding to be false (convention 14: an instrument is not believed until it has been
demonstrated to fail; convention 16: a negative result is only as wide as the command that
produced it). **AMENDMENT 1 below falsified the identical premise for `gate-49` within hours of
this signature.** If it is false for `gate-39` too, the honest end state *is* option (2) — and the
rider means that conclusion arrives with **a measured rate attached** rather than as a shrug.

⛔ **The rider is not a licence to reach for (2) early.** It fires only on a *measured* instability
from the AC-1 harness, never on inconvenience, and the measurement is reported either way.

---

⛔ **NOT AN OPTION, and it is named so it cannot be reached for under time pressure: `7.9 → 7.4`.**
That is moving a bar to pass a test — convention 1 forbids it, and the gate's own `ratchet_law`
(`gate-39-figure-typeset.spec.ts:268`) reserves the direction for an operator gate precisely so it
cannot happen by same-diff reflex.

## ⭐ AMENDMENT 1 — a FOURTH surface, found the day this mission was signed (2026-09-04)

**Not sought. Found by a control run in another lane**, which is the only reason it is here.

While executing ⛩ ruling 3 (the `gate-49 doc-hub` re-baseline), the mandated control — *"`--update-snapshots`
must change exactly 2 PNGs"* — reported **4**. Measured in-container, generated and compared in the
image `gates.yml` pins `[D]`:

| Run | `home` | Detail |
|---|---|---|
| 1 (check) | ✅ passed both themes | — |
| 2 (update) | rewritten | — |
| 3 (check, after revert) | ❌ **failed both themes** | **17 px** dark / **19 px** light · ratio 0.01 · **no size change** |

Contrast `doc-hub`, the real content change: **70,664 px** *and* a 2851→3193 px height change.
**Three orders of magnitude apart** — so `home` is noise and `doc-hub` is content, and conflating
them would have been the error.

⛔⛔ **WHY THIS IS A FINDING AND NOT A NUISANCE.** `playwright.config.ts` sets **`maxDiffPixels: 0`**,
and its own comment states the reason:

> *"AC1's 08-24 amendment removes the only source [of non-determinism] this lane has — font
> rasterisation between a developer Mac and the container — by requiring baselines to be generated
> AND compared inside the same image. With that settled, **every remaining differing pixel is a real
> change**, and any nonzero tolerance is unjustified headroom that a real regression can hide inside."*

**That premise is now falsified by measurement taken inside the very container the amendment
specifies.** There is a second source of non-determinism; it lives in `home`; and the sparse-scatter
signature matches the hero constellation that `reducedMotion: 'reduce'` was believed to have frozen
into a deterministic static render (`playwright.config.ts:47-60`, `HomeHero.astro:593`).

⇒ **`F-ab`'s surface count goes 3 → 4**, and the fourth is the most consequential: `gate-49` is the
**one gate in the suite that writes permanent artifacts** (`gate-49-…spec.ts:28` — *"a baseline is
the ONE artifact in this suite where an instrument defect becomes PERMANENT"*). A flaky
zero-tolerance gate that writes permanent artifacts can **bake its own noise into the ratchet**,
which is `gate-39`'s disease with a longer half-life.

⚠ **Stated as a rate, because that is the only honest form** (this mission's whole subject): CI at
`6d10611` shows `home` **PASSING** both themes (`✓ 3`, `✓ 15`), read from the run log rather than
inherited from a session summary `[D]`. So: **3 local observations = 1 pass / 2 fail; 1 CI
observation = pass.** That is n=4 across two environments and it is **not** a rate yet — it is the
reason AC-1 exists.

⛔ **Nothing was fixed. Both quick fixes are forbidden and the restraint is the ruling:** raising the
tolerance is **convention 1** (moving a bar to pass a test — the identical act the `7.9 → 7.4`
prohibition exists to forbid, one gate over), and re-baselining on noise re-anchors a ratchet to a
number that was never stable. `home`'s committed baseline was **reverted and left untouched**.

**What AC-1 inherits:** the harness's gate set becomes `{gate-39, gate-42 G42b, gate-47 ×3,
gate-49/home}`. ⚠ **Cost flagged, not absorbed** — `gate-49` samples at ~38 s per in-container run
against milliseconds for the others (see the ratified budget's amendment note).


## ⭐⭐ DATUM 1 — `gate-39` PASSED AND FAILED IN CI ON BYTE-IDENTICAL BYTES (2026-09-04, O1's open)

**A datum for `AC-1`, not a diagnosis and not a fix.** Recorded here rather than in a session file
because `AC-1`'s subject *is* the rate, and because this campaign has been bitten four times by a
finding whose only home was the prose that reported it.

Derived at O1's open by convention 19 (`gh run list --workflow=gates.yml --branch main -L 5`),
which is the entire reason it was seen at all:

| Run | Commit | Verdict | Reading |
|---|---|---|---|
| `33917725977` | `3889c29` | **success** | 682 passed · `gate-49` 26 passed · 0 failed steps |
| `33918391804` | `fe2bba6` | ⛔ **failure** | **1 failed · 681 passed (4.7m)** |

The single failing assertion, verbatim `[D]`:

```
✘ 315 [chromium] › tests/gates/gate-39-figure-typeset.spec.ts:137:5 ›
      Gate 39 — figure typeset floor (lock O1) ›
      G39 figure-typeset: rendered text clears the 12px floor, unclipped and level (dark)
```

⭐⭐ **THE CONTROL IS THE POINT.** `git diff --stat 3889c29..fe2bba6 -- site/` is **EMPTY** `[D]` —
`fe2bba6` is a session-close commit touching **only** `how/sessions/`. ⇒ **the two runs measured
byte-identical shipped surfaces, eight minutes apart, and disagreed.** Every prior CI observation of
this gate's non-determinism required a `gh run rerun` to produce its pair; **this pair is two
independent runs of the standing lane**, which is a stronger form of the same evidence.

⚠ **WHERE THIS LANDS AGAINST ⛩ RULING 1, STATED CAREFULLY BECAUSE IT IS TEMPTING TO OVERCLAIM.**
Option (1)'s premise is that *CI is a stable measuring environment and the local Mac was not*. This
is a **counter-observation to that premise**, in the lane the ruling proposes to measure in — and
`AMENDMENT 1` falsified the identical premise for `gate-49` within hours of the signature. ⛔ **It
does NOT trip the conditional fallback rider.** The rider fires on *a measured rate from AC-1's
harness*; **n=3 is not a rate**, and this mission's own headline — ***a control is a rate, not a
run*** — binds evidence that flatters the mission exactly as hard as evidence against it. ⇒ **O1 is
built to test this, and O3 is where it is answered.**

⚠ **A CARRIED PREDICTION IN THIS FILE HAD ALREADY EXPIRED.** The Next Session Prompt below says
*"`main` may still be RED on `gate-49 doc-hub (/learn/)` — that is the course lane's ADR-057 debt,
**NOT `F-ab`** and **NOT this mission's**."* It was written before ⛩ ruling 3's re-baseline landed
(`5246e78`). The re-baseline **worked** — `gate-49` reads **26 passed** in CI at `3889c29` `[D]` —
and the red that remains is a **different gate** and **is** this mission's. ⇒ ***a carried
prediction expires the moment the act it anticipates is performed***, and it does not announce that
it has: read literally at this session's open, it would have routed a `gate-39` red to the course
lane and out of `GR-5`'s scope.

⭐ **Running `gate-39` CI tally — observations, deliberately not a rate:** fail `1d6af75` → `rerun
--failed` success · **pass** `33917725977` · **fail** `33918391804`.


## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | This convention-13 pass + the ⛩ ruling above | this file | ⛩ **HALT** |
| O1 | ✅ **DONE 2026-09-05** — the rate harness; all three families **0/100**, `n=100` clears `n_required=97` | `artifacts/gr_5/o1_rate_record.md` | — |
| O2 | ⛩ **INAPPLICABLE 2026-09-05** — the experiment lost its subject; ruled option 3 | `artifacts/gr_5/o2_inapplicable_record.md` | ⛩ (ruled at O1's close) |
| O3 | ✅ **MEASURED 2026-09-05 — and the ⛩ RIDER FIRED.** CI n=30: `netdiagram-svg` spread **0.64** ⇒ **advisory**; all other figures spread **0.0000** ⇒ still enforcing. ⛔ **No pin moved** | `artifacts/gr_5/o3_pin_rederivation_record.md` | ⛩ (ruled at O0; **rider self-executing**) |
| O4 | Red-proofs of whatever exists to prove | mutation records | — |
| O5 | Close cascade — register, counts, AAR, STATE | records | — |

⭐ **O1 before O2 before O3 is not a preference, it is the dependency**: O2 needs O1's instrument,
and the ruling's option (1) needs O1's CI-lane rate.

> ⛩⛩ **O1 CLOSED AND O2 RULED INAPPLICABLE — 2026-09-05. `AC-1` ✅ · `AC-2` ⊘ · `V1` ✅ · `V2` ⊘.**
> Records: [[o1_rate_record]] · [[o2_inapplicable_record]]; register **§23** (which **moves no row and
> adds no id** — counts re-derived *after* writing and **unchanged at 189 / 174 / 0**, the correct
> result).
>
> ⭐⭐ **THE MISSION'S SUBJECT DID NOT REPRODUCE, AND THAT IS A DIFFERENT RESULT FROM THE ONE IT WAS
> CONVENED EXPECTING.** All three sampled families read **0 failures in 100 runs** on the host, at
> `n=100` clearing `O1`'s computed `n_required = 97` — so for the first time in `F-ab`'s life these
> families return a verdict that is **not INCONCLUSIVE**, and it is the opposite of the expected one.
> §22.4's `40–60 %` is excluded **as a rate for this configuration** by arithmetic, not by opinion
> (`P(0 | p=0.4, n=100) ≈ 6.6 × 10⁻²³`).
>
> ⛔⛔ **`AC-2` IS INAPPLICABLE, NOT REFUTED, AND COLLAPSING THE TWO WOULD BE THE OVERCLAIM.**
> `DEFECT-3`'s ratified refutation branch presumes *the phenomenon occurred and the treatment failed to
> move it* — a null result, evidence **against** the hypothesis. What happened is a **third state the
> criterion does not name**: *the phenomenon did not reproduce at all in the sampled regime*, which is
> evidence **in neither direction**. With a control arm at zero, both arms read zero and **no
> separation is detectable at any `n` this node can afford.** `V2` is inapplicable **with** its
> criterion, and `AC-4` reports **INAPPLICABLE** for this objective by its own clause — ⛔ never a
> blank, and never a miss, because reading a null regime as a miss converts an honest result into a
> mission failure.
>
> ⭐⭐ **THE LOAD-BEARING FINDING IS A CONTRADICTION BETWEEN TWO OF OUR OWN HOST MEASUREMENTS, ONE DAY
> APART.** §22.4 measured this exact assertion at **2/5 and 3/5 failing**; `O1` measured it at
> **0/100** — same machine, both `[D]`. **40–60 % and 0 % cannot describe one phenomenon in one
> regime**, so they describe two. ⚠ **And the regimes differ in TWO variables, not one**: the
> **rebuild between runs** (§22.4 rebuilt; the harness builds once per tree — so §22.4 may have been
> *generating* the load whose effect it attributed to the increment) **and the selection breadth**
> (1 test vs 11 — a different execution envelope for an assertion whose subject *is* focus order
> across a live document). ⛔ **Either alone suffices and nothing separates them ⇒ recorded as a
> CONFOUND, not a diagnosis** (GR-2: verify the cause before authoring the fix).
> ⇒ *A count is only comparable to a count produced by the same command* — arriving with unusual
> force, because these two counts were about to be read as a contradiction **about the site**. They
> are not; they are a statement that ***the command is part of the phenomenon.***
>
> ⭐ **A REPRODUCING REGIME IS KNOWN TO EXIST, so this is a deferral and not an impossibility** — said
> because a bare *"INAPPLICABLE"* reads as *"this can never be done"*. §22.4's regime reproduces at
> 40–60 %; whoever resumes `AC-2` re-runs both arms **there**, at **`n ≥ 97`**, and needs **no new
> instrument** — `flake_rate_measure.mjs` is already parameterised by tree and config, so it is
> configuration rather than authorship. ⭐ **`DEFECT-1` paying off exactly as it was written to.**
>
> ⚠ **A naming correction made rather than propagated: there is no `F-ab(c)`.** `F-ab` is one row
> (`claim_register.md:2098`) lettering exactly **two** debts; §22.4 is an **extension**, not a third
> limb. Minting a sub-letter in prose is what **`F-y`** was registered for — ***an `F-` ID is minted by
> writing the row*** — and it was caught the same way, by opening the row instead of citing the plan
> that cited it (`F-u`'s class). **`F-ab` stays `live`; nothing here fixed anything**, and *a fix's
> commit is not the register's strike* (`F-n`).
>
> ⛔ **What O2 explicitly does NOT claim:** that `gate-47` is fixed, healthy, or no longer flaky. `O1`'s
> `STABLE` verdict is a statement about **one regime on one machine**, and `O1`'s own record flags that
> such a verdict *"is exactly the shape that gets cited later as 'F-ab was measured and it was fine.'"*
>
> ⏭ **NEXT: `O3`** — and `O1`'s decisive limit is what points at it. The **same assertion, on the same
> bytes, failed in CI and did not fail once in 100 host runs** (`DATUM 1`), so ***a host run cannot
> refute a CI flake***: whatever the mechanism is, **it is something CI has and this Mac does not**, and
> no further host sampling will find it. ⛩ Ruling 1 selected the CI re-derivation **before** that datum
> existed. ⛔ O3 needs its own ⛩ push GO — it drives CI, and a push is an outward act.

## ⛩ Convention-13 pre-build pass — COMPLETE, 24/24, COVERAGE RECORDED

*The P3.3 amendment governs: the pass must be **complete** and must **record its coverage**, because a
partial pass reads as a clean bill of health to everyone downstream, including the operator who
ratifies the budget on it.*

**Coverage derived, not typed.** Method-bearing criteria: **AC-1, AC-2, AC-3, AC-6** (4).
Test-bearing criteria: **AC-1 … AC-6** (6). Pairs = **4 × 6 = 24**, of which **4** are self-pairs
(a criterion's own method against its own test) and **20** are cross-pairs. **All 24 run.**

**Result: 4 defects · 1 unstated constraint · 19 clean.** All five are resolved **in the criteria
above**, before this file reached disk — none is left as a note for the executor.

| # | Pair | Finding |
|---|---|---|
| **DEFECT-1** | AC-1 method × AC-2 test | AC-1's harness was drafted *"on the unmodified tree"*. **AC-2's test needs the same instrument pointed at a modified config** — so as drafted, AC-2 must author a second instrument, at a sitting's tail, which is **this campaign's most-repeated defect** (six of this desk's instruments have shipped wrong under exactly those conditions). ⇒ AC-1 now specifies **parameterised by tree AND config from the first line**. |
| **DEFECT-2** | AC-3 method × AC-5 test | **The two criteria were met by opposite states of the same file.** AC-3 may change the pin under the ruling; AC-5 asserted *every* pin unchanged. Executed as drafted, one of them fails by construction. ⇒ AC-5 now carries the **single named exception, whose diff must quote the ruling**. ⭐ This is the exact class convention 13 exists for, and it was **invisible reading either criterion alone**. |
| **DEFECT-3** | AC-2 method × AC-4 test | AC-2 can legitimately **refute** its hypothesis ⇒ nothing ships. AC-4 as drafted demanded *"every change red-proven"*, which read literally makes **a null result a mission failure** — and a mission that must not return null **will find a fix it has no evidence for.** ⇒ AC-2 states a refutation is complete; AC-4 reports **INAPPLICABLE, never a blank**. (`P5.1` AC-2's *"'did not complete' is a valid result"* shape, arriving in a different lane.) |
| **DEFECT-4** | AC-1 method × AC-1 test *(self-pair — and it paid)* | The method said *"≥N runs"* and the test said *"reports a rate"*, **with N never named.** At §22.4's measured 40–60%, **n=5 cannot separate 40% from 60%** — the instrument would emit a number that looks like a rate and licenses conclusions it cannot support. ⭐ **That is this campaign's own headline defect** (*a control is a rate, not a run*) **reappearing one level up, inside the criterion written to fix it.** ⇒ n is named, its power is stated, and a spanning interval reports **inconclusive**. |
| **CONSTRAINT-1** | AC-1 test × AC-3 method | Ruling option (1) *re-derive in CI* would, done from **one** CI run, **reproduce `F-ab`(b) in the other lane** — pinning again from a single non-reproducible measurement. ⇒ **AC-3 option (1) is ordered strictly after AC-1**, stated on both criteria's faces rather than left to execution order. |

⭐ **Eleventh consecutive mission where this pass paid for itself**, and the **second** where a
**self-pair** was the one that paid (DEFECT-4) — worth recording, because self-pairs are the ones a
pass "checking the suspicious pairs" skips by construction, and P3.3's amendment exists because a
partial pass reported like a complete one.

## Constraints honoured

- **GR-2** — the cause is verified **before** the fix is authored. O2 exists to discriminate, not to confirm.
- **GR-3** — *one green cannot separate "it works" from "we got lucky."* Every verdict here is a rate.
- **Convention 14** — no instrument is believed until demonstrated to fail (AC-4), and the harness this
  mission builds is **itself** subject to that.
- **Convention 1** — claims move DOWN. Option (2) is a claim moving down; `7.9 → 7.4` is a **bar** moving
  down, which is a different act wearing the same direction.
- **SO-1** — phase gates are human gates. ⛩ **This file halts here.**
- **§7.7** — agents author, operators ratify. Budget is `proposed`; criteria are `proposed`.

## Next Session Prompt

> Operation HAUSSMANN, aDNA.aDNA (Rosetta). **`GR-5` is authored and `proposed` — do not build.** Open
> this file, the campaign `CLAUDE.md`, and register **§21.2 + §22.4**. The convention-13 pass is
> **complete at 24/24 with coverage recorded** (4 defects + 1 constraint, all resolved in the criteria).
> **One ⛩ ruling is owed and the budget cannot be ratified without it** — the `gate-39` pin: **(1)**
> re-derive `worstPx` in CI's own environment (top of band, ordered after AC-1) or **(2)** record the
> gate advisory with its reason on its face (bottom of band); ⛔ **never `7.9 → 7.4`**. Derive at your
> open: `date -u`, `gh run list --workflow=gates.yml --branch main -L 5`, `git ls-remote origin main`,
> `/.well-known/adna-build.json`. ⚠ **`main` may still be RED on `gate-49 doc-hub (/learn/)` — that is
> the course lane's ADR-057 debt, diagnosed in `session_stanley_20260904_155111`, NOT `F-ab` and NOT
> this mission's.** On the signature, O1 first (the harness is the only part with a real design in it),
> then O2, then O3.
