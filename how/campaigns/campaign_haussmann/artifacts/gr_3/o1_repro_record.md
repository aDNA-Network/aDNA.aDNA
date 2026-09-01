---
type: artifact
artifact_id: gr_3_o1_repro_record
campaign: campaign_haussmann
mission: mission_haussmann_gr_3_false_red
title: "GR-3 O1 — the false red established at the object, and an assertion that had never been red-proven"
created: 2026-09-01
updated: 2026-09-01
status: accepted
last_edited_by: agent_rosetta
session: session_stanley_20260901_231413_haussmann_gr_3_false_red
tags: [artifact, haussmann, gr_3, gate_42, f_z, convention_14, convention_19]
---

# GR-3 O1 — the record

**AC-5.** Three acts, cheapest first. Every reading `[D]` unless tagged otherwise.

## Act 1 — the rerun on byte-identical input

```
gh run rerun 33558250778     # issued 2026-09-01T23:14Z
```

| | Attempt 1 | Attempt 2 |
|---|---|---|
| Commit | `2ad7768` | `2ad7768` — **identical** |
| Tree | unchanged | unchanged |
| Conclusion | ❌ **failure** — 649 passed / 1 failed / 3 skipped | ✅ **success** |
| The failure | `gate-42` G42b light mode, 6 × `net::ERR_ABORTED` | — none |

⭐ **Same commit, same bytes, opposite outcome. The gate is non-deterministic, and this is as close to
proof as a flake admits.** Nothing was fixed between the two runs; the second one simply won the race
the first one lost.

⭐⭐ **And this reading is what demoted AC-2 from "the proof" to "a regression check" — before the fix
was written, at the convention-13 pass (pair M5×T2).** If a flaky gate passes on a rerun, then it
also passes *sometimes anyway* — so a single green at the fixed commit **cannot distinguish "the fix
worked" from "we got lucky."** The pass predicted exactly this and rewrote the criterion; the rerun
then confirmed it. *That is what a pre-build pass is for, and it is the first time in this campaign
one has paid off in advance rather than in hindsight.*

## Act 2 — local reproduction

```
npx astro build                                              # clean, 226 pages, 8.9 s
npx playwright test tests/gates/gate-42-console-clean.spec.ts # 4 passed (1.1 min)
```

**Green locally.** ⚠ **Stated at its exact width (convention 16): this is not evidence the defect is
absent.** It is the campaign's own *a green you do run hides a red you do not* — an unloaded Mac wins
a race a loaded CI runner loses, which is the whole mechanism. Its value here is twofold and neither
is a refutation: it establishes **AC-7's wall-clock baseline (1.1 min)**, and it confirms the tree is
sound so every mutation below is attributable.

## Act 3 — the assertion-identity probe, and the finding that outlives the fix

The question: when `console_clean_redtest.sh` case 3 — labelled *"a missing same-origin asset must
turn the gate red"* — turns gate-42 red, **which assertion actually fires?**

```
rm dist/_astro/BaseLayout.SZfPG5Ci.css        # the asset case 3 derives and deletes
npx playwright test …gate-42… --grep "dark mode"
```

Output, verbatim:

> `Error: 225 console error(s)/uncaught exception(s) across 225 route(s) in dark mode.`

**The `same-origin request(s) failed` message does not appear anywhere in the output.** Tree restored
from backup (38 KB, verified).

### What that means

A deleted file yields a **404 response**, not a network failure, so `requestfailed` never fires at
all. Chromium logs the 404 as a console error. `hits` is asserted **before** `assetFailures`, and
Playwright's non-soft `expect` throws immediately — so **`assetFailures` was never evaluated.**

⇒ **The `assetFailures` assertion has never been demonstrated to fail. Its first firing in its entire
life was the false positive that opened this mission.**

The harness reported **5/5** and was believed. It was not wrong that the gate went red; it was wrong
about *why*, and it had no way to notice, because **every case asked only "did the gate go red?"**

⭐⭐ **This is convention 14's missing second clause.** Convention 14: *an instrument is not believed
until it has been demonstrated to fail.* What this adds: **a demonstration is only worth what it can
attribute.** A red that cannot be traced to the assertion under test proves the gate is alive, not
that the assertion is. Both halves are now enforced — `gate_failed_via()` requires the expected
assertion's own message, and a red via a different one is reported as a **harness bug**, not a pass.

⚠ **Family, named:** this is the third member of convention 14's line and the fourth of convention
13's *"a correct instrument applied partially, reporting like a complete one."* What is new is the
altitude — it was found **inside the red-test harness**, i.e. inside the instrument whose entire job
is to enforce convention 14 on everything else.

## Verdict

- **The red is false.** `[D]` — mechanism identified, non-determinism demonstrated, nothing shipped.
- **`assetFailures` was decorative from the day it was written until case 6 was added.** `[D]`
- Both halves are recorded as **`F-z`**.
