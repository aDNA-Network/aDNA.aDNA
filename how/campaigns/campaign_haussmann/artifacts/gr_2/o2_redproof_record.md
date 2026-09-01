---
type: artifact
artifact_id: gr_2_o2_redproof
campaign: campaign_haussmann
operation: operation_grande_revue
mission: mission_haussmann_gr_2_ci_freshness
title: "GR-2 O2 — three states, one build line, and a control that failed exactly where it was written to"
created: 2026-08-31
updated: 2026-08-31
status: active
last_edited_by: agent_rosetta
session: session_stanley_20260829_143321_haussmann_gr_2_ci_freshness
tags: [artifact, gr_2, red_proof, v2, v3, v5, f_x, convention_18]
---

# GR-2 O2 — red-proof record `[V2 · V3 · V5]`

> **⛔ READ THIS FIRST, so no limb below is read wider than it is.** Nothing here establishes CI's
> cause. `AC-1` remains **open** and closes **only at O3**, from a real CI run. Everything in this
> record is either a pure-function test, a *reproduction* of a mechanism on this Mac's Docker, or a
> statement about local bytes.

## 0. What O2 changed

`site/src/utils/contentSource.ts`:

- `git()` returns `GitResult = { ok: true; stdout } | { ok: false; reason }` and **pipes stderr
  instead of discarding it** (`stdio[2]: 'ignore' → 'pipe'`). ⭐ *The line that made the cause
  unknowable is the same line that had to change to make it knowable.*
- `freshnessStateFrom(probe)` — **pure**, probe in, state out: `healthy | shallow |
  git-unavailable(reason)`. This replaces `const isShallow = git(...) !== 'false'`, in which a git
  that failed for any reason at all was **indistinguishable from a shallow clone**. That conflation
  is `F-x`.
- `describeFreshnessState(state)` — the one line the build prints, in **all three** states.
- `loadDates()` owns the probe, the `git log`, and one announcement; a **`git log` that fails after
  a healthy probe** is refined into `git-unavailable` with its own reason, so all three ways of
  ending up dateless get named rather than one.
- **Warns, does not throw** (ratified at the ⛩ signature, §6).

`site/tests/gates/gate-33-freshness.spec.ts`: the failure message no longer prescribes
`fetch-depth: 0`. It names the three states and points at the build's own diagnostic.

⚠ **Deviation D1 from the signed amendment, recorded rather than absorbed.** F2's amendment says
*"the module-level value becomes that function applied to a real probe."* The probe was instead moved
**inside `loadDates()`**, removing the module-level value entirely. Two reasons, both of which serve
the amendment's purpose rather than working around it: importing the module now executes **no git at
all** (a strictly cleaner seam than the one F2 asked for — a spec can import it with zero side
effect), and a `git log` that fails *after* a healthy probe can only reach the same diagnostic if the
state is still mutable at that point. The pinned literals F2's remedy governs are unaffected.
Verified safe before the change: `isShallow` had **no consumer outside this file** `[D]`.

---

## 1. `[V2]` gate-52 — the discrimination, red-proven **8/8**

`bash scripts/freshness_state_redtest.sh` → **5 mutations red · 3 controls green**, exit 0.

| # | Mutation / control | Expected | Got |
|---|---|---|---|
| 0 | unmutated baseline | passed | ✅ passed |
| 1 | **the conflation that caused `F-x`, put back** (`!probe.ok` → `shallow`) | failed | ✅ failed |
| 2 | failure line prescribes `fetch-depth` again | failed | ✅ failed |
| 3 | failure line drops git's own words | failed | ✅ failed |
| 4 | an empty git answer treated as healthy | failed | ✅ failed |
| 5 | shallow line stops naming the **right** remedy | failed | ✅ failed |
| 6 | **CONTROL** — healthy line reworded, meaning intact | passed | ✅ passed |
| 7 | **CONTROL** — comment-only edit | passed | ✅ passed |

⭐ **Case 5 and case 6 are the load-bearing pair.** `F-x`(b) is *not* "the string `fetch-depth`
appeared" — it is "a remedy was prescribed for a cause it cannot fix". A gate that simply forbade the
string everywhere would pass cases 1–4 **while suppressing the one message where `fetch-depth` is
correct advice**. Case 5 forbids that over-correction; case 6 proves the gate is not merely
string-brittle.

⚠ **SURFACE (convention 18), and gate-52 says it on its own face:** these eight cases drive
`freshnessStateFrom` with **synthesised probe results**. Real logic, real strings — **not a real
shallow clone and not a real refused repository.** The integration evidence is §2; CI's own cause is
O3's.

⭐ Before the harness ran, its six pinned source literals were checked to match **exactly once each**.
That is not ceremony: `mutate()` asserts `n == 1` and calls a miss a *harness bug, not a pass*, and
pre-checking meant a typo would have been diagnosed as mine rather than as a gate failure.

---

## 2. `[V3]` the runtime limb, in CI's own image

> **Surface (convention 18):** `mcr.microsoft.com/playwright:v1.59.1-noble` — the pin `gates.yml`
> uses, **asserted against `gates.yml` at run time, not assumed** — on this Mac via Docker Desktop
> 28.2.2. Per O1's `F1`, this is a **reproduction of a mechanism**, not a reading of CI's cause.

`git` shadowed on `PATH` by a stub exiting 128 with an ownership refusal on stderr — a cause that is
**provably not shallowness**.

### MUTATION

```
fatal: detected dubious ownership in repository at '/work'
  (stub exit=128 — this is the induced cause, and it is NOT shallowness)
  build exit=0  ← note it SUCCEEDS; that silence is what AC-2 removes

freshness: GIT COULD NOT ANSWER — dates omitted. This is NOT a shallow clone and fetch-depth will
not fix it. git said: fatal: detected dubious ownership in repository at '/work'

  ✅ NO occurrence of "set fetch-depth" anywhere in the build log
  <time datetime= inside doc-provenance: 0
  gate-33 exit=1 → 1 failed · 3 passed
```

gate-33's failure text, verbatim:

```
Error: no last-updated dates were rendered. contentSource.ts omits them rather than guessing, in
THREE different situations — a shallow clone, a git that could not answer, and a git log that
failed. They need different fixes and only one of them is fetch-depth. Read the build log: the
build prints a "freshness:" line naming which one it hit and what git said.
```

### CONTROL — real git, nothing else changed

```
  build exit=0
freshness: git answered — last-updated dates derived from history.
  gate-33 exit=0 → 4 passed
```

⇒ **All three of AC-3's limbs hold**: the build names the state, quotes git's own words, and
prescribes nothing; gate-33 still (correctly) fails, and its message no longer diagnoses. **The
omission behaviour is unchanged** — 0 dated footers under mutation, as before. What changed is that
the build now says *why*, which is the whole of `F-x`(b).

⛔ **One-shot evidence probe, ephemeral, on O1's precedent.** No standing instrument was authored
(conventions 15/16/17). The probe deliberately carried **no `set -e`** — O1 lost its first probe to
exactly that, exiting at the very failure it was measuring.

---

## 3. `[V5]` AC-5 — the shipped bytes do not move

### ⭐⭐ The no-change control **FAILED**, precisely as `F4` predicted, and that is the finding

Two builds of **unchanged** source, before touching anything: **16 of 709 paths differed.**

Had V5 run without its control — as it was originally written — it would have run *after* the change
and reported *"O2 altered the shipped artifact"*: **a confident wrong diagnosis produced by an
uncontrolled instrument, i.e. `F-x`(b)'s exact shape inside the limb written to prove this mission
harmless.** F4 called this at the pre-build gate and the control caught it on its first run.

**The cause, named at the object rather than excluded by feel:** Astro mints a fresh random DOM id
per render for the diagram components' accessibility wiring —

| family | example |
|---|---|
| `mermaid-…` | `mermaid-t0eomo3` → `mermaid-0dsdadr` |
| `triad-title-…` / `triad-desc-…` | `aria-labelledby="triad-title-0oaceva triad-desc-9rpmt3t"` |
| `convergence-title-…` / `convergence-desc-…` | `aria-labelledby="convergence-title-emdlp3r …"` |

⚠ **The first count was wrong and the second measurement corrected it.** The initial diff read *16*
files; the true figure is **15**, and it is exactly the **15 files that carry a diagram component**
(`grep -rl mermaid-container dist | wc -l` → 15). The 16th was an unchanged `.md` twin swept into a
grouped diff hunk — *a truncated reading of a diff is a derived figure*, the campaign's own class.

⚠ **And the hashing harness was broken before its subject** (the standing streak): the first
canonicalising run produced a **0-line** hash file and compared cleanly against nothing. It now
asserts `>700` files hashed and exits 9 otherwise. *A comparison against an empty set is the
cheapest possible false green.*

**THE EXCLUSION IS PART OF THE CLAIM AND IS ASSERTED, NOT ASSUMED** (gate-48's ratified discipline).
Only those five id families are normalised, and the control must then read **0 differing across all
709 files** before any pre/post comparison is believed.

### The result

| Comparison | Files | Differing |
|---|---|---|
| **control** — two builds, unchanged source, **raw** | 709 | **15** ⛔ |
| **control** — two builds, unchanged source, **normalised** | 709 | **0** ✅ |
| **V5** — pre-change vs post-change, normalised | 709 | **0** ✅ |
| V5 re-run after the container round-trip | 709 | **0** ✅ |

⇒ **AC-5 met.** The shipped artifact is unchanged on a healthy build; **no deploy is owed**, and none
is sought.

---

## 4. A defect in my own diagnostic, found by looking at it instead of grepping for it

The first version printed the line correctly and **illegibly**:

```
├─ /community/proposals/aep-1/index.htmlfreshness: git answered — last-updated dates derived from history.
```

`loadDates()` fires during page rendering, and Astro emits per-route progress without a trailing
newline. `grep "freshness:"` found it every time. A human scrolling a CI log would not — **and being
read in a CI log is the entire purpose of the line.** ⭐ *A diagnostic written to be read in a CI log
that cannot be read in a CI log is this mission's own defect class, one turn after fixing it, and
`grep` was the instrument that hid it.*

Fixed at the **call site** (`console.warn(`\n${…}`)`), never in the returned string — that string is
asserted verbatim by gate-52 and pinned by the red-test, and presentation does not belong in it.

---

## 5. Suite

| Instrument | Result |
|---|---|
| chromium lane (`npm run test:gates`) | **652 passed · 1 skipped · 0 failed** |
| fast lane (`test:gates:fast`) | **534 passed · 1 skipped** (was 526/1skip) |
| `html-validate` over `dist/**/*.html` | **0** |
| `astro check` | 28 errors, **all pre-existing and none in a file this increment touches** `[D]` — not absorbed (`contentSource.ts`, `gate-52`, `gate-33`: **0**) |
| gate-49 snapshot lane | **not run, with the reason**: V5 proves `dist/` is byte-identical on a healthy build, so no rendered pixel can have moved |

### ⚠ The carried suite figure and the printed one are DIFFERENT LANES, and confusing them looks exactly like 14 tests vanishing

`npm run test:gates` printed **653**; the campaign's carried figure was **667**. Derived rather than
explained away:

| Lane | HEAD | This increment | Δ |
|---|---|---|---|
| `--project=chromium` | 645 | **653** | +8 |
| `--project=snapshot` (gate-49) | 26 | 26 | 0 |
| **all projects** — what the campaign records as "suite" | **671** | **679** | +8 |

667 (P4.4b B1/B2a) + 4 (GR-1) = **671** = HEAD, and 671 + 8 (gate-52) = **679**. Everything
reconciles; **nothing went missing.** The delta was isolated by listing the suite with gate-52
present and absent (`--list`, no execution), so *this increment's* contribution is measured rather
than inferred: **+8, and it removed nothing.**

⇒ **A count is only comparable to a count produced by the same command.** Recorded here because the
carried figure has been wrong four sittings running, and this is the first time the carried figure
was **right** and the naive comparison was wrong.

---

## 6. Verdict

| Limb | Asserts | State |
|---|---|---|
| **V2** | AC-2 | ✅ 8/8, synthesised-probe surface named |
| **V3** | AC-3 | ✅ mutation + control, in CI's image |
| **V5** | AC-5 | ✅ control-first, exclusion named and asserted |
| **V1b** | AC-1 | ⛔ **O3 only — a real CI run** |
| **V4** | AC-4 | ⛔ O4 |
| **V6** | AC-6 | ⛔ O5 |

`AC-2` ✅ · `AC-3` ✅ · `AC-5` ✅. **`AC-1` stays open.** Everything above still shows a mechanism
*sufficient* to produce CI's exact signature. Nothing yet shows it is CI's.
