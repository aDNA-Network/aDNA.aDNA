---
type: artifact
artifact_id: gr_3_o3_redproof_record
campaign: campaign_haussmann
mission: mission_haussmann_gr_3_false_red
title: "GR-3 O2/O3 — the traversal fix, and the first red-proof the assetFailures assertion has ever had"
created: 2026-09-01
updated: 2026-09-01
status: accepted
last_edited_by: agent_rosetta
session: session_stanley_20260901_231413_haussmann_gr_3_false_red
tags: [artifact, haussmann, gr_3, gate_42, red_proof, convention_14]
---

# GR-3 O2/O3 — the record

## O2 — the traversal fix (AC-1)

**All three existing predicates are byte-unchanged.** Only the traversal moved, so every red-proof
that ever covered them still covers them. What changed:

| | Before | After |
|---|---|---|
| Settle | `waitForTimeout(120)` — a **bet on a duration** | drain to zero in-flight requests, then `SETTLE_QUIET_MS` (100 ms) of quiet — a **wait on a condition** |
| Bound | none needed (it was a fixed sleep) | `SETTLE_TIMEOUT_MS` = 10 s |
| On expiry | n/a | pushed to `unsettled` and **asserted** — never swallowed |

**The `unsettled` assertion is placed BEFORE the same-origin check, and the order is load-bearing.** A
route that will not go quiet gets navigated away from, which aborts its in-flight requests, which the
same-origin check then reports as the site's broken assets. Asserted the other way round, **the
symptom would throw first and hide its own cause** — and the reader would be told the site has six
broken assets when what it actually has is one page that would not settle. That is precisely the
misreading that produced this mission.

### The mechanism changed after measurement (AC-7)

The ratified plan proposed `networkidle`. Built and measured: **1.1 min → 3.9 min, +255%**, past
AC-7's +100% ceiling. Re-taken on the measurement, per the criterion:

| Settle | per route | over the 452 navigations |
|---|---|---|
| `networkidle` | 508 ms | 3.8 min |
| in-flight drain | **110 ms** | **0.8 min** |

`networkidle`'s 500 ms quiet window is a **flat tax every route pays in full** — these pages go quiet
in ~50 ms. It is a *proxy* for "nothing outstanding"; the in-flight count **is** that condition.

**Result: 56.0 s — FASTER than the 1.1 min it replaced (−15%).** The defect never cost wall clock; it
only ever cost the 120 ms bet being wrong on a loaded runner.

⚠ **What the fix does NOT do, stated on its face rather than left to be found on a red build:** a page
that goes quiet and only *then* issues a delayed request can still be navigated away from mid-flight.
`networkidle` carries the identical residual. This is a **bound on the race, not its removal**, and
the honest response if it ever bites is to raise `SETTLE_QUIET_MS` on a measurement — never to relax
the same-origin check to absorb it.

## O3 — the harness (AC-3, AC-4)

```
bash scripts/console_clean_redtest.sh
console clean red-test: 8 pass / 0 fail  (6 mutations + 2 controls)
```

| Case | Mutation | Assertion it aims at | Result |
|---|---|---|---|
| control 1 | none | — | ✅ green on the unmutated tree, both themes |
| 1 | planted `console.error` | console | ✅ red **via the console assertion** |
| 2 | planted uncaught throw | console/pageerror | ✅ red **via the console/pageerror assertion** |
| 3 | deleted `/_astro/BaseLayout.SZfPG5Ci.css` | **console** (re-aimed) | ✅ red **via the console assertion** |
| 4 | `/about/` unreadable → non-200 | status-guard | ✅ red **via the status-guard assertion** |
| 5 | walk finds 0 pages | frame-derivation throw | ✅ red **via the frame-derivation throw** |
| **6 — NEW** | page aborts its own request for `/_astro/mermaid.core.CTeeNEQ7.js` | **same-origin asset** | ✅ red **via the same-origin asset assertion** |
| control 2 | all restored | — | ✅ green again, tree left as found |

### What changed, and why each change is not cosmetic

**1. Assertion identity (`gate_failed_via`).** `gate_failed` asked only *"did the gate go red?"*. Now
every case names the assertion it aims at, matched against that assertion's own message text, with a
**third outcome**: red-via-the-wrong-assertion returns `2` and reports as a **HARNESS BUG**, not a
pass. ⚠ Real (small) coupling, named: reword an `expect` message in the spec and the matching case
fails **loudly** here — which is the correct direction, since the alternative is silently degrading
back to "any red will do."

**2. Case 3 re-aimed and re-labelled.** It was titled *"a missing same-origin asset must turn the gate
red"* and counted as the `assetFailures` red-proof. It is not and never was: a deleted file yields a
**404 response**, so `requestfailed` never fires; Chromium logs the 404 as a console error; `hits`
throws first. **The case is kept** — a deleted asset genuinely must red the gate and this proves it
does — but its *claim* is corrected to what it actually demonstrates.

**3. Case 6 added — and it is two things at once.**
- **The first red-proof `assetFailures` has ever had.** A 404 cannot red it; the only thing that
  reliably produces a same-origin `requestfailed` on a healthy server is a request the **page itself**
  cancels.
- **The fix's own control.** Verified in both directions:

| Spec | Case 6 |
|---|---|
| **Pre-fix** (`git show HEAD:…`, the 120 ms bet) | ✅ red — `1 same-origin request(s) failed` |
| **Post-fix** (in-flight drain) | ✅ red — `red via the same-origin asset assertion` |

⇒ **the fix removed the sweep's own race, not the assertion's teeth.** Had it silenced case 6, it
would have been a relaxation wearing a repair's clothes.

**4. The settle guard is NOT red-proven, deliberately, and the harness header says so.** A **race has
no deterministic mutation.** Its evidence is the mechanism identified at the object, a CI rerun that
came back green on byte-identical input, and the fact that expiry is now an **asserted condition**
rather than a swallowed timeout. ⛔ Authoring a standing instrument to chase it is what conventions
15/16 forbid — five instruments have shipped wrong on their first live run, and one authored at a
mission's tail would be the sixth. **Stated as a limit, not implied as coverage.**

## The finding this leaves behind

⭐⭐ **Convention 14's missing second clause.** Convention 14: *an instrument is not believed until it
has been demonstrated to fail.* This harness had demonstrated five failures and was believed — and it
was **wrong about which assertion one of them exercised**, for the entire life of the gate.

> **A demonstration is only worth what it can attribute.**

A red that cannot be traced to the assertion under test proves the gate is alive, not that the
assertion is. Recorded as **`F-z`**.
