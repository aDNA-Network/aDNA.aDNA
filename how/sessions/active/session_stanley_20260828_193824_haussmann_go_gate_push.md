---
type: session
session_id: session_stanley_20260828_193824_haussmann_go_gate_push
created: 2026-08-28
updated: 2026-08-28
status: active
tier: 1
last_edited_by: agent_rosetta
campaign: campaign_haussmann
mission: mission_haussmann_gr_1_trust_path
increment: "⛩ GO gate — pre-push verification + the push; deploy GO held"
executor_tier_declared: opus
executor_tier_actual: opus
token_budget_estimated: "~40–70 kT — a decision-support sitting: verification lanes, the push, and the deploy probe. No mission band applies; GR-1 is closed."
token_budget_actual:
tags: [session, haussmann, gr_1, go_gate, push, verification]
---

# Session — the ⛩ GO gate: verify, push, hold the deploy

## Intent

The operator asked for advice on the push/deploy GOs. Advice given, plan approved, then executed:
run the two lanes that had never been run against this HEAD, push, and **hold at the deploy GO**.

## ⭐⭐ The advice was reordered before it was executed, and the reorder was the point

The approved sequence read *push first, lanes before the deploy*. A mechanics review found that
**`gates.yml:147` runs `npm run test:visual` as a BLOCKING step with no `continue-on-error`** — so
the visual lane gates the **push's CI run**, not the deploy. Running it after the push would have
been running it after the thing it guards. ⇒ **Lanes first, then push.**

⚠ Two other corrections to the advice as given, recorded because the advice was acted on:
- **The redaction argument was overstated.** The introducing commit was already an ancestor of
  `origin/main` and the literal is **RFC1918**, so this was hygiene, not an incident. The push does
  remove it from HEAD; it never was the emergency the phrasing implied.
- **The deploy script runs no tests at all**, and its clean-tree guard covers only `site/src`,
  `site/public`, `vercel.json`, `astro.config.mjs` — it does **not** check that HEAD is pushed. All
  quality assurance is upstream in CI or in the operator's hands. Worth knowing before trusting it.

## ⭐⭐ The lane that gates the push was BROKEN, and running it is the only reason we know

`bash scripts/visual_regression_container.sh check` died on
`Rollup failed to resolve import "web-vitals"` — a real failure that reads exactly like a code error
and is not one.

**Cause**: `[ -x node_modules/.bin/astro ] || npm ci` tests for **one binary** and concludes **the
dependencies are installed**. Once the named volume held astro, `npm ci` never ran again, so any
dependency added afterwards was silently absent. Volume populated at P4.4b B0 (`1816993`);
`web-vitals` landed at B1 (`9c8d79b`). ⇒ **a staleness guard that cannot detect staleness** — the
campaign's instrument-narrower-than-its-conclusion class, in the harness, and **the same shape as
the `assetsInlineLimit` grep guard corrected earlier the same day.**

⚠ **CI never hit it** — `gates.yml` runs `npm ci` unconditionally on a fresh runner. **Only the local
lane rots, which is worse**: the local lane is the one meant to catch things *before* CI does. Fixed
at `f2d7324`, keyed to a hash of `package-lock.json` — the thing whose change is what makes an
install stale.

## Measured (both lanes had never run against this HEAD)

| Lane | Result |
|---|---|
| `gate-49` in-container, **zero** pixel tolerance | **26/26 passed** |
| Full suite incl. `@audit` (gate-19 budget, gate-21 currency) | **644 passed · 1 skipped · 0 failed** |

⇒ The O1 font-delivery change (base64 `data:` URI → separate `.woff2`) is **pixel-neutral** — I
predicted it, and now it is measured — and B1's vitals script moves nothing. The 24 baselines were
**38 commits stale** and they hold.

## ✅ The push (⛩ GO taken at plan approval)

`22a4fa6..f2d7324 main -> main`. The pre-push hook ran and reported
*"gitleaks clean across 1 outgoing range(s) ✓"* — **not bypassed**. Derived after: unpushed **0**,
behind **0**.

**Redaction verified at the public object**, not inferred from the push succeeding: the only IPv4
literal now on public HEAD's `keystone_cohort_manifest.md` is `127.0.0.1` (loopback). The mesh
overlay address is gone from HEAD. ⚠ **History is unchanged** — that was the fix-forward ruling.

## ⛔ Held

**The deploy GO is NOT taken.** It is a separate ⛩ act by the campaign's own rule, and the plan
carried it as step 4 with the probe (step 3) in front of it.

## Files touched

- `site/scripts/visual_regression_container.sh` — the dependency-guard fix (`f2d7324`)
- `STATE.md` — push recorded
- This session file.

## Progress

### ⚠⚠ 2026-08-29 — CI HAS BEEN RED SINCE 2026-08-27 AND NOTHING SURFACED IT

Checked after the push, because a push triggers CI and the deploy decision depends on it.
`gh run list` → the **last four completed runs on `main` all FAILED** (08-27). Nobody knew: the
campaign's records from that window report *local* suite numbers, and no session mentions CI.
⇒ **The campaign has been shipping with a red CI it was not reading** — convention 16's shape
(*a verification with no recurrence*) inverted: here the verification **does** recur, and nobody
reads the result.

**Our run `33229440619`: 641 passed · 1 failed · 3 skipped** — an improvement (08-27 had **2**
failures; `gate-42` G42b dark-mode console now **passes** in CI).

**The surviving red is `gate-33-freshness`**, and it is an instrument defect, not a site defect:
```
Error: no last-updated dates were rendered — a shallow git clone makes
contentSource.ts omit them; set fetch-depth: 0
```
⭐ **The remedy the error names is ALREADY APPLIED** — `gates.yml:51` reads `fetch-depth: 0`. So the
diagnostic sends a reader to fix something that is not broken, and the real cause is elsewhere
(plausible, unverified: git refusing the container's repo ownership, which the *visual* container
script already handles with `git config --global --add safe.directory` and `gates.yml` does not).
**A gate whose failure message names the wrong remedy is worse than a bare failure**, because it
converts a symptom into a confident wrong diagnosis — the campaign's own class, in CI.

⛔ **This does NOT gate the deploy, and the reason is structural, not optimistic:**
`deploy_adna.sh:157` runs `npx astro build` **locally** and `:237` ships `vercel deploy --prebuilt`.
**CI's artifact never reaches production.** Locally the same gate is green — the full suite ran
**644 passed / 0 failed** on this tree. ⇒ the red is about CI's environment, not about what ships.

⚠ **Named rather than absorbed:** this needs its own sitting — a register row and a fix — and it
should not be folded into a deploy. Two things are owed: the cause, and the wrong error message.

## SITREP

*(filled at close)*
