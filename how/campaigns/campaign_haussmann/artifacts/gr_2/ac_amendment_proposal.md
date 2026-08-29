---
type: artifact
artifact_id: gr_2_ac_amendment_proposal
campaign: campaign_haussmann
operation: operation_grande_revue
mission: mission_haussmann_gr_2_ci_freshness
title: "GR-2 — convention-13 pre-build pass: the acceptance criteria read against each other"
created: 2026-08-29
updated: 2026-08-29
status: proposed          # ⛩ NOT SIGNED. No build until this carries a 4-field ratification block.
last_edited_by: agent_rosetta
session: session_stanley_20260829_143321_haussmann_gr_2_ci_freshness
tags: [artifact, gr_2, convention_13, ac_amendment, f_x]
---

# GR-2 — the convention-13 pass

> **The convention, in one question:** *can the stated method satisfy the stated test?* Run over
> **every** (method-bearing criterion × test-bearing limb) pair, not the pairs that look suspicious —
> and **state which pairs were checked**, because P3.3's pass checked two pairs, stopped, recorded no
> coverage, and read to everyone downstream (including the operator who ratified a budget on it) as a
> clean bill of health.

## 1. Coverage — all 42 pairs

**Method-bearing:** AC-1 · AC-2 · AC-3 · AC-4 · AC-5 · AC-6 (6).
**Test-bearing:** V1 · V1b · V2 · V3 · V4 · V5 · V6 (7). 6 × 7 = **42 pairs, all checked.**

| | V1 | V1b | V2 | V3 | V4 | V5 | V6 |
|---|---|---|---|---|---|---|---|
| **AC-1** | ⚠ **F1** | ✅ (added by F1) | · | · | · | · | · |
| **AC-2** | ✅ | ✅ | ⚠ **F2** | ✅ | · | ✅ | · |
| **AC-3** | · | · | ✅ | ⚠ **F3** | · | · | · |
| **AC-4** | · | ✅ | · | · | ⚠ **F6** | · | · |
| **AC-5** | · | · | · | · | · | ⚠ **F4** | · |
| **AC-6** | · | · | · | · | · | · | ⚠ **F5** |

`·` = no relation asserted, and none needed — checked and recorded as such, so an unchecked pair
cannot hide behind a blank. **6 defective pairs · 8 clean · 28 correctly unrelated.**

---

## 2. The six findings

### ⭐⭐ F1 — AC-1 × V1: a local reproduction proves a mechanism is SUFFICIENT, not that it is the cause

AC-1 as drafted says the cause is *"named at the object"*, and V1 was its only limb: mutate
`visual_regression_container.sh:74`, watch the build lose its dates, restore, watch them return.

**That limb cannot close that criterion.** The container mutation runs against a **host mount owned
by `stanley` (uid 501) with the container running as root**. CI runs against **`/__w/…` owned by the
runner (uid 1001) with the container running as root**. Same *class* — a uid mismatch defeating git's
ownership check — but **different objects**. V1 would establish that a mechanism of this class is
sufficient to produce exactly the observed failure. It would establish nothing about which mechanism
produced CI's.

⭐ **And that is this mission's own subject, one level up.** `F-x`(b) exists because a gate asserted a
cause it had not measured. Closing `F-x`(a) on a local reproduction would be the same act, performed
by the sitting convened to end it. *A hypothesis that survives a test you designed to fit it has not
been tested.*

**Amendment.** AC-1 requires **two** acts, and they are named as different: V1 (mechanism sufficient,
local, offline) **and V1b** (CI's actual reason, read from a CI run once the diagnostic exists).
A new objective **O3** carries V1b: push the diagnostic **alone**, without the fix, and read what CI
prints. ⇒ **two ⛩ push gates, deliberately** — the second one authors the fix.

⚠ **This finding changed the mission's objective list before it was ratified**, which is the whole
return on the pass. The first draft went reproduce → fix → push.

### ⭐ F2 — AC-2 × V2: the `shallow` limb is unsatisfiable against the code as written

V2 red-proves three states, `shallow` at unit level against a stubbed probe. But `isShallow` is a
**module-level `const`, computed at import time** (`contentSource.ts:37`). A spec that imports the
module to test the discrimination **executes git on import** and gets this machine's answer — there
is no seam to stub. The limb cannot run.

*(Specs importing from `src/` is otherwise fine and already done — `gate-13-nav-surfacing.spec.ts:12`
imports `../../src/data/home`. The obstacle is the import-time side effect, not the import.)*

**Amendment.** AC-2's method gains an explicit clause: **the state computation is extracted into a
pure function over a probe result**, and the module-level value becomes that function applied to a
real probe. Without the clause the criterion names a test its method cannot reach — P3.1's AC1↔AC4
shape exactly, which is convention 13's own worked example.

### ⭐ F3 — AC-3 × V3: the static assertion is a self-matching test

V3's second half asserts that gate-33's spec no longer contains a `fetch-depth` prescription — by
reading the spec source. **A test that searches for a literal it itself contains matches itself and
can never go green.**

⭐ **Third sighting of this class in three weeks**, and the campaign struck the last one on 2026-08-28:
`adr_index.md`'s drift-check glob **matched its own filename** (GRANDE REVUE P1-6, `F-m`). Before
that, convention 17's own case: a site-wide grep for a struck sentence returned hits *from the
changelog entry that retired it*.

**Amendment.** The assertion is constructed so it cannot match its own literal — the forbidden string
is assembled at runtime rather than written as a source literal, **and the test states in a comment
why it is written that awkwardly**, so a later tidy-up does not helpfully re-introduce the bug.

### ⭐ F4 — AC-5 × V5: byte-identity has no control, and its failure mode is a wrong diagnosis

V5 compares `dist/` before and after Stage 2 and expects byte-identity. **Nothing establishes that
two builds of *unchanged* source produce identical bytes.** If anything in the pipeline embeds a
timestamp, an ordering, or a hash of a mutable input, V5 fails on a build that changed nothing — and
it fails **saying Stage 2 altered the shipped artifact**, which is a confident wrong diagnosis
produced by an uncontrolled instrument. That is `F-x`(b)'s exact shape, in the limb written to prove
this mission harmless.

**Amendment.** V5 runs its **no-change control first**: build twice from unchanged source and require
agreement. Only then does the pre/post comparison carry meaning. If the control fails, the volatile
paths are **named and excluded explicitly, in the record**, and V5's claim narrows to the remainder —
never silently (convention 16: an instrument is only as wide as what it actually compared).

### ⭐⭐ F5 — AC-6: "re-derive the register tally" cannot be done, and that is itself the finding

AC-6 says to strike `F-x` and **re-derive** the tally rather than decrement the carried one — written
because *"the carried count has been wrong three sessions running."* The pass tried to derive it and
**could not.** `[D] 2026-08-29`

- The register has **no single table**. Rows are tabled in two files —
  `missions/mission_haussmann_p4_4_ci_hardening.md` (6 rows) and
  `artifacts/p4_4/register_reread_20260824.md` (16 rows) — which **overlap** (`F-d` `F-e` `F-j` `F-k`
  appear in both), and further IDs exist only in prose.
- Distinct IDs anywhere in the campaign directory: **24**, contiguous `F-a`…`F-x`.
- `F-t` is **withdrawn** (it was `F-l` re-registered under a new letter) ⇒ **23**.
- The carried tally says **22**. The 08-24 re-read's own baseline of *"nineteen register rows"* does
  not reconcile with a letter count either (`F-a`…`F-u` minus `F-t` = 20).

⇒ **Every tally in this campaign is running arithmetic carried forward from a prose sentence, and
there is no surface against which to check it.** That is not a bookkeeping annoyance; it is *why*
the count has been wrong repeatedly. An instruction to "re-derive" a number with no derivation
surface is unfollowable, and an unfollowable rule is one that gets quietly skipped — the argument
`visual_regression_container.sh` was written on.

**Amendment.** AC-6 keeps the `F-x` strike and **drops the re-derivation**. In its place: state the
tally as *carried arithmetic* with its basis named (19 at the 08-24 re-read + `F-v` + `F-w` + `F-x`),
which is honest about what kind of number it is. The non-derivability is **routed as a new register
row with a named destination** — not built here. ⛔ Conventions 15/16: consolidating the register into
one table is a sitting of its own, and this one is already a review's tail.

### F6 — AC-4 × V4: "CI is green" couples GR-2 to every other gate

V4 asserts a green run on `main`. But `gate-33` is one of ~641 assertions. An unrelated gate reddening
would fail V4 for something GR-2 does not own — and the pressure at that moment is to absorb it,
which is how a mission quietly acquires someone else's debt.

**Amendment.** V4's load-bearing assertion is **`gate-33-freshness` passes in CI**. The run's overall
state is reported alongside it, and **any non-gate-33 failure is filed as a new finding** — never
absorbed into GR-2, never waved past. (Baseline for comparison: the last run was 641 with 1 failed,
and that 1 was gate-33.)

---

## 3. Routed, not built

| Item | Destination |
|---|---|
| The register has no derivation surface (**F5**) | **New register row**, to be lettered at the ⛩ signature. Remedy is a single consolidated table; cost is a sitting of its own. |

---

## 4. Budget consequence

⛩ **PROPOSED: ~165–270 kT / 2 sessions**, up from the plan's ~130–215 / 1–2.

The raise is ≈1.25× and it is **F1's**: O3 adds a full CI round-trip and a second operator push gate
between diagnosis and fix. F2 adds a small extraction (~10–15 kT). Nothing here adds a feature.

| Stage | Band |
|---|---|
| O0 — this pass + the ⛩ gate | ~30–45 |
| O1 — V1 mutation/control in-container | ~25–40 |
| O2 — three-state + diagnostic + message + V2/V3 | ~45–75 |
| O3 — push the diagnostic alone; read CI's reason (**new**) | ~25–40 |
| O4 — the fix, push, V4 at the run | ~20–35 |
| O5 — convention 19, strike, AAR, close | ~20–35 |

⚠ Named so it is not discovered as an overrun: **if O3's reason is not the ownership mechanism**, the
fix is unwritten scope and the band does not cover it. That branch reopens at its own ⛩ gate rather
than being absorbed.

---

## 5. What the pass did NOT find

- No criterion is unreachable for want of an actor outside the session. **GR-2 has no external
  dependency** — the operator's two push GOs are gates, not blockers, and everything else is local.
- No criterion depends on a deploy. AC-5 exists to make that true rather than assumed.
- No conflict between two clauses of the same criterion (P4.4b's `AC4` halt-vs-proceed shape).

---

## ⛩ Ratification

> **decision**: *(pending)*
> **ratified-by**: *(pending)*
> **date**: *(pending)*
> **status**: `proposed`
>
> Signing adopts §2's six amendments wholesale, §3's routing, and §4's band. It also settles the
> lettering of F5's new register row and `mission_count: 28 → 29`.
