---
type: evidence
created: 2026-09-01
updated: 2026-09-01
status: active
last_edited_by: agent_rosetta
campaign: campaign_haussmann
mission: mission_haussmann_gr_2_ci_freshness
objective: O4
asserts: AC-4
limb: V4
tags: [haussmann, gr_2, o4, ac_4, v4, ci, gate_33, f_x]
---

# GR-2 O4 — `V4` at the run: `gate-33-freshness` is green in CI

> **Verdict: `AC-4` MET.** Run **`33467130677`**, `gates` on `main` at **`e6d3ba9`**, conclusion
> **success**. Read at the run, against run **`33465663585`** as the standing red control.
> Convention 18: the surface is **CI's own checkout**, which is the surface the claim is about —
> a green local suite was explicitly ruled unable to satisfy this criterion, because the
> local-vs-CI conflation is this mission's subject and cannot also be its evidence.

## 1. The change

One step in `.github/workflows/gates.yml`, after `actions/checkout` and before the build, authored on
the reason CI printed at O3 and on nothing else:

```yaml
- name: Trust the workspace (the container's uid does not own the checkout)
  run: git config --global --add safe.directory "$GITHUB_WORKSPACE"
```

⚠ **Scoped to `$GITHUB_WORKSPACE`, never `*`** — a wildcard silences the class everywhere including
where it is a real warning, the same defect shape as the message this mission removed from `gate-33`.
⚠ **Not added to `unlighthouse-sweep.yml`** — no container, no refusal to fix; a remedy applied to an
absent cause would be `F-x`(b) reintroduced by the commit fixing `F-x`.

**One ordering constraint the design did not name and the build would have found:** the job sets
`defaults.run.working-directory: site`, so a step placed *before* checkout cannot `cd` into a
directory that does not exist yet. Placement after checkout is load-bearing for two reasons, not one.

## 2. The measurement — the build's own line, and the count, both at the run

CI's Build step, verbatim `[D]`:

> `freshness: git answered — last-updated dates derived from history.`

That is the **healthy** branch of the three-state value O2 built — printed by CI for the first time.
The same step at the red control printed the *other* branch, naming `dubious ownership`.

| | red control `33465663585` (`1c8fde6`) | **this run `33467130677`** (`e6d3ba9`) |
|---|---|---|
| conclusion | failure | **success** |
| build's `freshness:` line | `GIT COULD NOT ANSWER … fatal: detected dubious ownership` | **`git answered — last-updated dates derived from history.`** |
| chromium lane | 649 passed · 3 skipped · **1 failed** | **650 passed · 3 skipped · 0 failed** |
| total assertions | 653 | **653** |
| `gate-33-freshness` | ✘ `:78` `dates.length` `Received: 0` | **✓ ×4** |
| visual lane (gate-49) | — | 26 passed |

⭐ **The comparison is exact and that is the load-bearing part.** Same total — **653** — with exactly
**one** assertion moving from failed to passed. Nothing else changed state in either direction. `F6`
is satisfied with nothing to absorb: there is no non-`gate-33` failure to file as a new finding, and
no silent improvement elsewhere to mistake for one.

## 3. ⚠⚠ The carried figure was wrong a THIRD time — and the true form is stronger than the number

Every record in this mission says **"seven consecutive `gate-33-freshness` reds."** Derived at the
object rather than carried:

| Derivation | Command | Result |
|---|---|---|
| last **green** `gates` run on `main` before today | `gh run list --workflow=gates.yml --branch main --status success` | **`32191049401`, `070f104`, 2026-08-18T22:05 UTC** |
| runs on `main` in the window since | `gh run list … -L 100` | **46 failure · 15 cancelled · 0 success** |
| runs individually confirmed to carry a `gate-33` failure | `gh run view <id> --log-failed \| grep '✘.*gate-33-freshness'` | **13 consecutive**, each exactly 1 |
| when the failing assertion landed | `git log -S 'toBeGreaterThan(90)' -- …gate-33-freshness.spec.ts` | **`0eb48fa`**, HAUSSMANN **P2.3 O2**, 2026-08-19 **05:13 UTC** |

⭐⭐ **Put those last two rows together and the claim sharpens past counting.** The assertion landed at
`0eb48fa` — **after** the last green run — and **no `gates` run on `main` has succeeded between that
commit and this one.** ⇒ **`gate-33`'s date assertion had never once passed in CI. This run is its
first green, ever.** It was not red for seven runs; it was red for its **entire life on the branch**,
about 14 days, and the local lane was green for all of them.

⚠ **Stated at its exact width** (convention 16 — *a negative result is only as wide as the command
that produced it*): the claim is **"no run in which every assertion passed,"** which follows from zero
successes in the window, plus **13** runs verified one by one. It is **not** a claim that all 46
failures were `gate-33` failures — several of those runs carried other reds that later missions fixed
(`gate-42`'s G42b, `gate-30`'s redirect assertions), and this record does not derive which.

⚠ **Third wrong carried count in this one mission, all three understating:** the streak read *six* at
the mission's open and O3 derived **seven**; it read *seven* at O4's open and the true shape is *never
green*. And it is the fourth carried defect if the tense error is counted (§5). *The habit keeps
paying, and what it keeps catching is our own record.*

## 4. What this does NOT claim

- ⛔ **No deploy, and none is owed.** `AC-5` was measured at O2: the shipped bytes are unchanged on a
  healthy build. Production builds locally, where git has always answered, so nothing about
  production changed today and nothing about it should be inferred from this green.
- ⛔ **The `data:`-free CSP, the vitals transport, `B2b`** — untouched; out of scope, and named so
  nobody reads a green CI as a broader all-clear.
- ⛔ **The sweep's prediction is not settled here.** See §5.

## 5. ⚠ The handoff's "first act" described a future event in the past tense

O3's record and the Next Session Prompt both instruct: read *"the unlighthouse sweep's first-ever run,
**fired** 2026-09-01 07:43 UTC."* Derived at this session's open `[D]`:
`gh run list --workflow=unlighthouse-sweep.yml` returns **zero runs**; the cron is `43 7 * * 2`;
2026-09-01 **is** that Tuesday; and 07:43 UTC was **~4 h in the future**.

⇒ **The prediction — `freshness: git answered` on a bare, container-less runner — is still owed and
still unretrofittable.** It belongs to a later sitting.

⭐ **O4 does not spoil it.** The negative arm of the ownership hypothesis is *the absence of a
`container:` block in the sweep's own workflow*, and that file is deliberately untouched — so the
sweep tests the same thing whichever commit it happens to run against. ⚠ **Timing honoured**: the push
landed 03:41 UTC and the run finished 03:48, clearing the 07:43 window by four hours — `gates.yml` is
`cancel-in-progress: true` on the group the sweep *joins*, so a push inside that window would have
cancelled the sweep's first-ever run.

⭐ *A carried instruction can be wrong about its **tense**, not only about a value.* Four sittings
running have caught a carried **number**; this is the same habit catching a carried **verb**.

## 6. Verdict

| Limb | Asserts | State |
|---|---|---|
| V1 | AC-1 (mechanism) | ✅ O1 |
| **V1b** | **AC-1** | ✅ O3 — cause named at the object, from CI |
| V2 | AC-2 | ✅ O2 |
| V3 | AC-3 | ✅ O2 |
| **V4** | **AC-4** | ✅ **O4 — green at the run, against its red control** |
| V5 | AC-5 | ✅ O2 |
| V6 | AC-6 | ⛔ O5 |

**`F-x` is discharged in both halves** — (a) the cause, named at the object from CI at O3; (b) the
message that prescribed a remedy it could not know applied, fixed at O2 and now demonstrated moot at
the run. ⛔ **The row is not struck here.** O5 strikes it — and O5 must first *author* it, because
`F-x` has no row (see the session file's Finding 2).
