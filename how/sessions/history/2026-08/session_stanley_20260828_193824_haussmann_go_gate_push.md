---
type: session
session_id: session_stanley_20260828_193824_haussmann_go_gate_push
created: 2026-08-28
updated: 2026-08-29
status: completed
tier: 1
last_edited_by: agent_rosetta
campaign: campaign_haussmann
mission: mission_haussmann_gr_1_trust_path
increment: "⛩ GO gate — pre-push verification, the push, and (second sitting) the DEPLOY GO taken; live at tree=d5ff043, probe 26/0"
executor_tier_declared: opus
executor_tier_actual: opus
token_budget_estimated: "~40–70 kT — a decision-support sitting: verification lanes, the push, and the deploy probe. No mission band applies; GR-1 is closed."
token_budget_actual: "~110 kT content-load across TWO sittings (estimate band ~40–70 kT was scoped for one). The overrun is named, not absorbed: sitting 1 spent unbudgeted effort on a broken visual lane it had to fix before it could measure, and sitting 2 on the CI-red discovery + the F-x lead. Neither was in scope at authoring; both were found by running the thing rather than reading about it."
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

## ⛩⛩ 2026-08-29 (second sitting) — THE DEPLOY GO WAS TAKEN, AND IT IS LIVE

The operator asked for advice on the GO gate. Advice given, plan approved, executed in order.

### ⚠ The advice began by falsifying two facts in the record it inherited

| Carried | Derived | How |
|---|---|---|
| unpushed **39** | **2** | `git rev-list --count @{u}..HEAD` |
| "NEXT = ⛩ push GO, **then** ⛩ deploy GO" | **the push GO was already spent** | `git ls-remote origin main` → `f2d7324` — asked **at the remote**, because a tracking ref can be stale by exactly the amount in question |

⇒ The gate in front of the operator was **one act, not two**. Both corrections came from re-deriving
at the object rather than reading the note forward — the third consecutive session where the carried
count was wrong and the derived one was right.

### ⭐⭐ The push-before-deploy rule has a mechanism, and it was found by looking for one

The two unpushed commits were **records only** — STATE, the probe script, the probe report, this file
— **zero shipped-surface bytes**. So "push before deploy" looked like pure ceremony, and the
efficient-looking move was to deploy now and push after.

`inject_build_stamp.mjs:83` stamps `git rev-parse HEAD`, and **nothing in the deploy chain checks
that HEAD is public.** Deploying at an unpushed `d5ff043` would have published
`/.well-known/adna-build.json` naming a commit **no stranger could resolve** — **P1-3's exact defect
class, reintroduced by the act of shipping P1-3's fix** — and would have left the *next* deploy's
ancestry guard resolvable only from this checkout, which is F-s's shape.

Verified at the object rather than inferred from the push succeeding:
`git branch -r --contains d5ff043a…` → **`origin/main`**.

⇒ **A convention whose mechanism you cannot state is one you will skip on the day it looks like
ceremony.** This one was three commands from being skipped.

### Measured — the evidence the GO rested on

| Check | Result |
|---|---|
| `git diff f2d7324..HEAD -- site/` | **empty** ⇒ the 644/0 suite + 26/26 zero-tolerance visual lane were measured against **exactly the bytes that built** |
| Shipped-surface delta `51af717..HEAD` | **13 files**; `vercel.json` (and the CSP) **unchanged** |
| Live stamp, re-read before deciding | `51af717`, built `2026-08-27T01:31Z` — the alias had **not** moved under us |
| A4's pin `…/aDNA/tree/v8.9/.adna` | **200** — re-checked, not quoted forward |
| `deploy_adna.sh prod --dry-run` | all guards passed; `would_record: mode=prod tree=d5ff043` |

### 🚀 The deploy

```
deploy_record: 2026-08-29T03:14:32Z mode=prod
  url=https://adna-docs-483gwhhxc-science-stanleys-projects.vercel.app
  token=SS_VERCEL_TOKEN (interim — migrate to VERCEL_TOKEN_ADNA when brokered)
  tree=d5ff043
```

**No override flags.** Ancestry guard passed on its own terms (*live 51af717 is an ancestor of HEAD
d5ff043*). Live headers **4/4 by name AND value**. ⚠ The changelog cadence nudge fired — a **UTC
rollover artifact** (newest entry `2026-08-28`, UTC today `2026-08-29`); the entry *is* this deploy's.

**GR-1 probe: 26 PASS / 0 FAIL.** The same unmodified script that read **13/13** against `51af717`
four hours earlier. Record: `artifacts/gr_1/probe_postdeploy_green.md`. No assertion moved in the
wrong direction. Independent spot-checks (stamp / pin / twin placeholder) run separately, because a
probe agreeing with itself is not corroboration.

### ⭐ Convention 18 decided the CI question

CI red on `gate-33-freshness` did **not** gate this. Not "because it builds locally" — because of
**which surface the instrument ran against**: `deploy_adna.sh:157` builds locally, `:237` ships
`--prebuilt`, so **CI's artifact never reaches production**, and the gate's own claim (*dates are
real on shipped pages*) is green on the surface that ships. The red is a statement about **CI's
checkout**. Scoped out with the reason written down.

### ⚠ `F-x` — filed as a hypothesis, deliberately not as a diagnosis

Two debts: **(a) the cause**, unknown; **(b) the error message names a remedy already applied**
(`gates.yml:51` is `fetch-depth: 0`).

The lead: the CI log shows `actions/checkout` writing `safe.directory` under a **temporarily
overridden HOME** that it then restores, and `contentSource.ts:37` computes `isShallow` as
`git(...) !== 'false'` — so **a git that fails for any reason at all is indistinguishable from a
shallow clone.** That conflation is what lets the message be wrong, and is fixable regardless of
cause. ⛔ The operator scoped a fix **out** of this sitting; authoring one on an unverified cause is
exactly what the first sitting warned against. Register **22 · 15 struck · 7 live**.

## SITREP

**Completed**
- ⛩ **Push GO** — `f2d7324..d5ff043`, gitleaks clean and **not bypassed**; unpushed 0 / behind 0,
  derived after.
- ⛩⛩ **Deploy GO taken — GR-1 + P4.4b B1/B2a are LIVE**, `tree=d5ff043`, no override flags.
- **Verification at the object**: probe **26/0**; stamp re-read and confirmed to name a commit on
  `origin/main`; v8.9 pin 200; twin placeholder intact; headers 4/4.
- **Records**: `probe_postdeploy_green.md` · campaign `CLAUDE.md` log block + `F-x` ·
  `STATE.md` (frontmatter entry `2026-08-28(h)` + narrative block `2026-08-28(d)`) · this file.

**In progress** — none. The sitting closed clean.

**Next up** — **Lane D** (story coverage, the Gate-1 order's last lane) **or P4.4b B3**; `F-x`'s own
sitting now competes with both and should probably win, since CI has been red and unread for five runs.

**Blockers / held**
- ⛔ **B2b** on ⊳ D-E — the Vitruvius scope-B reply is **staged, not delivered**.
- ⛔ **Hopper reply** — staged, awaiting its ⛩ send GO.
- ⛔ **P5.1** — with the humans.
- ⚠ **B1's vitals emitter is live but zero-network.** Owed: ⛩ Speed Insights enable → transport →
  first p75. *"The emitter ships" is not "vitals are collected."*
- ⚠ **CI red** (`F-x`) — does not gate the deploy, does gate trusting CI.
- ⚠ ~59 uncited capture PNGs still untracked, pending the wind-down policy.

**Files touched (second sitting)**
- `how/campaigns/campaign_haussmann/artifacts/gr_1/probe_postdeploy_green.md` (new)
- `how/campaigns/campaign_haussmann/CLAUDE.md` — log block + `F-x`
- `STATE.md` — frontmatter `2026-08-28(h)` + narrative `2026-08-28(d)`
- This session file (SITREP, budget, `status: completed`)

## Next Session Prompt

You are Rosetta in `~/aDNA/aDNA.aDNA`. **Operation HAUSSMANN is deployed and green**: `adna.network`
serves `tree=d5ff043` and the GR-1 trust-path probe
(`how/campaigns/campaign_haussmann/artifacts/gr_1/deploy_probe_gr_1.mjs`) reads **26 PASS / 0 FAIL** —
re-run it at open and **re-read `/.well-known/adna-build.json`**; derive the git state (`git ls-remote
origin main`, `git rev-list --count @{u}..HEAD`) rather than trusting any carried count, because that
note has now been wrong three sessions running.

**The strongest candidate for this sitting is register row `F-x`** — the `gate-33-freshness` CI
failure. CI has been red on `main` for five consecutive runs and no session read it. `F-x` is **two
debts**: the cause (unknown) and the error message, which names a remedy already applied
(`gates.yml:51` is `fetch-depth: 0`). A lead is on file **as a hypothesis, not a diagnosis** —
`contentSource.ts:37` computes `isShallow` as `git(...) !== 'false'`, so a git that fails for *any*
reason is indistinguishable from a shallow clone; and `actions/checkout` writes `safe.directory`
under a HOME it then restores. **Settle the cause with a diagnostic step that PRINTS what git
actually reports in the container before writing any fix** — the campaign's own rule is that a
confident wrong diagnosis is worse than a bare failure. The message conflation is fixable
independently of the cause.

Otherwise: **Lane D** (story coverage, the Gate-1 order's last lane) or **P4.4b B3**. ⛔ Do not touch
**B2b** (⊳ D-E, Vitruvius reply staged ≠ delivered), the **Hopper reply** (needs a ⛩ send GO), or
**P5.1** (with the humans). ⚠ B1's vitals emitter is live but **zero-network** — enabling Speed
Insights, its transport, and a first p75 are owed and each is an ⛩ act. Campaign law: push precedes
deploy, and it is **not** ceremony — `inject_build_stamp.mjs` stamps local HEAD with no check that it
is public, so deploying first publishes a pin no stranger can resolve.
