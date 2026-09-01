---
type: artifact
artifact_id: gr_2_o3_ci_reason
campaign: campaign_haussmann
operation: operation_grande_revue
mission: mission_haussmann_gr_2_ci_freshness
title: "GR-2 O3 — CI named its own cause: `fatal: detected dubious ownership`. AC-1 is closed."
created: 2026-09-01
updated: 2026-09-01
status: active
last_edited_by: agent_rosetta
session: session_stanley_20260829_143321_haussmann_gr_2_ci_freshness
tags: [artifact, gr_2, v1b, ac_1, f_x, ci, gate_33]
---

# GR-2 O3 — the reason, read from a real CI run `[V1b]`

> **Surface (convention 18):** GitHub Actions run **`33465663585`**, workflow `gates`, on `main` at
> **`1c8fde6`**, 2026-09-01T03:17:18Z. **This is the surface the claim is about** — not a local
> container, not a synthesised probe. That distinction is the whole reason O3 exists as a separate
> objective with its own ⛩ gate.

## 1. The line

From the run's **Build** step, verbatim `[D]`:

```
2026-09-01T03:18:23.6019727Z freshness: GIT COULD NOT ANSWER — dates omitted. This is NOT a shallow
clone and fetch-depth will not fix it. git said: fatal: detected dubious ownership in repository at
'/__w/aDNA.aDNA/aDNA.aDNA'
```

⇒ **`AC-1` IS CLOSED.** The cause of seven consecutive `gate-33-freshness` reds on `main` is named at
the object, from CI, **in git's own words**:

> **`fatal: detected dubious ownership in repository at '/__w/aDNA.aDNA/aDNA.aDNA'`**

It is **not** a shallow clone. `fetch-depth: 0` was correct all along and was never the lever — which
is exactly what `F-x`(b) said the old message was wrong about, now demonstrated from the failing
surface rather than argued from a local one.

## 2. The failure is unchanged, and that is the point

```
✘ 256 [chromium] › gate-33-freshness.spec.ts:78:3 › dates are real: present, well-formed, …
   1 failed · 3 skipped · 649 passed (4.6m)
```

**Exactly one failing assertion, and it is gate-33's** — `F6`'s discipline satisfied with nothing to
absorb. The suite total **653** matches the local chromium lane exactly, and **gate-52's 8 new
assertions passed in CI**, on the very runner whose git is refusing — which is deviation `D1` paying
off: because the probe moved into `loadDates()`, importing `contentSource` executes no git at all, so
the discrimination gate is not itself a hostage to the condition it describes.

⚠ **3 skipped in CI vs 1 locally.** Noted, not absorbed, and not investigated here — it is unrelated
to `F-x` and predates this increment.

## 3. ⭐⭐ The prediction held, verbatim — and that is a stronger result than a match

`gate-52`'s synthesised constant was written on **2026-08-29**, from the *hypothesis*, before any CI
run carried the diagnostic:

```ts
const DUBIOUS = "fatal: detected dubious ownership in repository at '/__w/aDNA.aDNA/aDNA.aDNA'";
```

CI's actual string, read on **2026-09-01**, is **byte-identical to it**. The synthetic surface `V2`
was honestly labelled as *"NOT a real refused repository"* turns out to have been exactly the real
one. ⇒ **the hypothesis predicted the error text, the path, and the mechanism, and all three held.**

⛔ **Stated carefully, because this is where a good result gets overclaimed.** The prediction holding
does **not** retroactively make `V2` an integration test — it was, and remains, a pure-function test
over a synthesised probe, and O1's `F1` was right that a local reproduction could not close `AC-1`.
**What closed AC-1 is this run, and nothing else.** The prediction is *corroboration of the
mechanism*, not a substitute for the measurement.

## 4. ⭐ The remedy was already in our own tree — and O1 struck the sentence claiming so

`site/scripts/visual_regression_container.sh:74` runs
`git config --global --add safe.directory /work` before `npx astro build`. At O1 the mission's
evidence point 5 claimed we wrote that line *"because git fails in this exact image"* — and that
claim was **struck as an `[I]` dressed as a `[D]`**, because git works fine in that image on this
host (Docker Desktop remaps bind-mount ownership).

**Both facts are true, and neither cancels the other.** The line was not demonstrated locally, so
striking it was correct. It is *also* precisely the remedy CI needs, which O3 has now shown from CI's
side. ⇒ **A defensive measure you cannot demonstrate on your own machine is not thereby unjustified —
it is unmeasured.** Striking the *evidence* while keeping the *line* was the right call on both
counts, and this is the record showing why.

## 5. The mechanism, now that the reason is known

`actions/checkout` writes `safe.directory` into a **temporary global git config that it then
discards** — its own log says so in those words. Inside `gates.yml`'s `container:` block the build
step then runs as a uid that does not own `/__w/aDNA.aDNA/aDNA.aDNA`, git refuses, `git()` returns
`ok: false`, and — under the *old* boolean — `'' !== 'false'` made `isShallow` **true**, i.e. the
code reported a shallow clone for a repository that was nothing of the sort. That conflation is
`F-x`, and it is what made seven red runs undiagnosable.

⭐ **The structural corroboration (§6 Change 3) now has a testable consequence**: `unlighthouse-sweep.yml`
runs the same build with the same `fetch-depth: 0` and **no `container:` block**, so on a bare runner
checkout and build share a uid and no refusal can arise. Its **first-ever run fires 2026-09-01
07:43 UTC** on this very commit. **Predicted reading: `freshness: git answered`.** Recorded here
*before* the run, so it is a prediction and not a retrofit.

## 6. ⛩ What O4 must do — designed, NOT BUILT

O4 carries its own ⛩ push GO and is **not** taken here. The fix authored on **this reason and nothing
else** is one step in `.github/workflows/gates.yml`, after `checkout` and before the build:

```yaml
- name: Trust the workspace (the container's uid does not own the checkout)
  run: git config --global --add safe.directory "$GITHUB_WORKSPACE"
```

⚠ **Scoped to `$GITHUB_WORKSPACE`, never `*`** — a global wildcard would silence this class of error
everywhere, including where it is a real warning, which is the same defect shape as the message this
mission just removed.

⚠ **`unlighthouse-sweep.yml` must NOT get this step** — it has no container and no refusal to fix,
and adding it there would be a remedy applied to a cause that is not present: `F-x`(b) reintroduced
by the commit fixing `F-x`.

**`V4`'s bar** (per the amendment): the load-bearing assertion is **`gate-33-freshness` passes in
CI**, read at the run. Run `33465663585` is the standing **red control** — same tree, same suite, one
failure — so O4's green is a comparison and not a bare observation. Any non-gate-33 failure is filed
as a **new finding, never absorbed**.

## 7. Verdict

| Limb | Asserts | State |
|---|---|---|
| **V1b** | **AC-1** | ✅ **CLOSED** — cause named at the object, from CI, in git's own words |
| V1 | AC-1 (mechanism) | ✅ O1 |
| V2 | AC-2 | ✅ O2 |
| V3 | AC-3 | ✅ O2 |
| V5 | AC-5 | ✅ O2 |
| **V4** | AC-4 | ⛔ **O4 — its own ⛩ push GO** |
| V6 | AC-6 | ⛔ O5 |

**`F-x`(a) — "the cause is unknown" — is discharged.** `F-x`(b) was discharged at O2. The row is not
struck until O5, where both halves are recorded together.
