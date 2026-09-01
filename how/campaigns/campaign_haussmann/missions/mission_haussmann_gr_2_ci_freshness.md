---
plan_id: mission_haussmann_gr_2_ci_freshness
type: plan
title: "GR-2 — The gate-33 CI sitting: name the cause, and stop the gate naming a remedy it cannot know applies"
campaign: campaign_haussmann
operation: operation_grande_revue
phase: GR                  # Grande Revue lane, no phase number — GR-1's precedent.
                           # `mission_count: 28 → 29` is PROPOSED at this mission's ⛩ signature,
                           # NOT edited here. `phase_count` HOLDS at 6.
decade: 2
owner: stanley
status: completed          # ✅ CLOSED 2026-09-01 — all six criteria met, AAR filed (SO#5).
                           # AC-4 was met AT THE RUN (33467130677, success) and could not have been
                           # met anywhere else; AC-6 closed by convention 19 plus the F-x row, which
                           # had to be AUTHORED before it could be struck. ⛔ Nothing deployed and
                           # nothing owed to production — AC-5 measured the shipped bytes unchanged.
                           # ⛩⛩ PRE-BUILD GATE PASSED 2026-08-29 — SIGNED WITH AMENDMENTS.
                           # artifacts/gr_2/ac_amendment_proposal.md is `accepted`; its §6 records
                           # three changes taken AT the signature, two of them corrections to the
                           # pass's own findings (F3's remedy replaced — delete the self-grep rather
                           # than outsmart it; F5's arithmetic corrected and sharpened to the named
                           # `F-s` gap). Budget ratified ~165–270 kT / 2 sessions.
                           # ~~⛩ AT ITS PRE-BUILD GATE — nothing built, budget NOT ratified.~~ (SO-6)
                           # ⛔ O3 and O4 each still carry their OWN ⛩ push GO. No deploy at any point.
mission_class: build
executor_tier: opus        # judgment-heavy: a diagnosis held open against a strong hypothesis, an
                           # instrument-semantics change on shipped code, and a CI fix that must not
                           # be authored before its cause is named. Declared at the OPEN (P4.1's
                           # lesson), not discovered at the AAR.
token_budget_estimated: "⛩ RATIFIED 2026-08-29 — ~165–270 kT / 2 sessions (O0 ~30–45 · O1 ~25–40 · O2 ~45–75 · O3 ~25–40 · O4 ~20–35 · O5 ~20–35). Supersedes the plan's ~130–215 kT / 1–2. The ≈1.25× is F1's: O3 adds a full CI round-trip and a second operator gate between diagnosis and fix; F2 adds a small extraction. NOTHING HERE ADDS A FEATURE. ⚠ Named at the signature so it is not discovered as an overrun: ~165–270 kT for a diagnosis plus a roughly one-line CI fix is HEAVY, and nearly all of it is discipline — red-proofs, two gates, records — not code. ⛔ If O3's reason is NOT the ownership mechanism, the fix is unwritten scope this band does not cover, and that branch reopens at its own ⛩ gate rather than being absorbed. Costed against conditions verified 2026-08-29, not carried."
token_budget_actual:
created: 2026-08-29
last_edited_by: agent_rosetta
grounded_in:
  - "campaign CLAUDE.md §F-x (2026-08-29) — the two debts: cause unknown; the message names an applied remedy"
  - "commit d5ff043 — the finding that CI had been red on main since 2026-08-27 with nothing surfacing it"
  - "gh run view 33231133953 --log-failed [D] 2026-08-29 — exactly one failing assertion, gate-33-freshness.spec.ts:78"
  - "site/scripts/visual_regression_container.sh:74 [D] — our own safe.directory workaround, authored at P4.4b B0"
# ── directive C.3 additive fields ──
vitruvius_dimensions: [D4]
decade_theme: craft
webforge_patterns: []
patterns_to_author: []
depends_on: []
blocks: []
acceptance_criteria:
  - "AC-1 — THE CAUSE IS NAMED AT THE OBJECT, ON THE SURFACE THE CLAIM IS ABOUT (convention 18). git's actual stderr in a failing CI build is captured and quoted verbatim. ⚠ A local container reproduction demonstrates that a mechanism is SUFFICIENT to produce the failure; it does not establish that CI's failure has that cause. Both are required, and they are different acts."
  - "AC-2 — contentSource.ts CAN TELL ITS TWO FAILURE STATES APART. The boolean `isShallow` (line 37), which reads `git(...) !== 'false'` and therefore cannot distinguish a shallow clone from a git that failed, is replaced by a three-state value: healthy | shallow | git-unavailable(reason). `git()` captures stderr instead of discarding it. One build-time diagnostic names the state."
  - "AC-3 — THE GATE STOPS PRESCRIBING A REMEDY IT CANNOT KNOW APPLIES. gate-33-freshness.spec.ts:85's message no longer says 'set fetch-depth: 0' — a remedy that has been applied at gates.yml:51 the entire time the gate has been red. It names what was distinguished and where the reason was recorded."
  - "AC-4 — CI IS GREEN ON main, READ AT THE RUN. The gates.yml fix is authored ONLY on AC-1's captured reason. ⚠ A green local suite does NOT satisfy this criterion; the local-vs-CI conflation is this mission's subject and cannot also be its evidence."
  - "AC-5 — SHIPPED BYTES ARE UNCHANGED ON A HEALTHY BUILD. Production builds locally and is healthy, so no deploy is owed. Asserted by comparison, not by reasoning."
  - "AC-6 — THE SURFACING GAP IS CLOSED BY A HABIT, NOT AN INSTRUMENT (conventions 15/16). Campaign convention 19: derive main's CI status at session open. F-x struck with BOTH halves discharged."
verification_method: "⛩ PROPOSED — each limb labelled [asserts AC-n] per P4.4b's finding 7 (an unlabelled limb is how a partial pass reads as complete). V1 [asserts AC-1] — in CI's own image (mcr.microsoft.com/playwright:v1.59.1-noble, the pin gates.yml uses), a mutation removing visual_regression_container.sh:74's safe.directory line reproduces the failure (no dates, gate-33 red on the same assertion) and a control restoring it produces dates; git's stderr captured verbatim. V1b [asserts AC-1] — the SAME reason is read from a real CI run, because V1 proves sufficiency of a mechanism and not the identity of CI's cause. V2 [asserts AC-2] — three-state discrimination red-proven per state: git-unavailable at integration level via V1's mutation; shallow at unit level against a stubbed probe (⚠ convention 18: THE SURFACE IS A STUB, NOT A REAL SHALLOW CLONE, and the mission says so rather than letting the limb read wider than it is); healthy as control at both levels. V3 [asserts AC-3] — ⛩ AMENDED AT THE SIGNATURE (§6 Change 1): in the induced git-unavailable run the diagnostic names the state AND the captured reason, and the gate's failure text prescribes no remedy. ~~plus a static assertion that the spec carries no fetch-depth prescription, written so it cannot match its own literal (P1-6's self-matching-glob class)~~ — THE STATIC HALF IS DELETED, NOT MADE CLEVER. A grep-your-own-source assertion is low value and the self-matching hazard is a reason not to build it; conventions 15/16 govern. ⭐ The pass was one signature away from authoring the FOURTH instrument in three weeks to ship wrong on its first run, inside the mission convened to stop an instrument being wrong. V4 [asserts AC-4] — a real run on main reads green at `gh run view`; any non-gate-33 failure is reported as a new finding, never absorbed. V5 [asserts AC-5] — dist/ hash-compared pre/post on a healthy local build, WITH A NO-CHANGE CONTROL FIRST (two builds of unchanged source must agree before the pre/post comparison means anything; if they do not, the volatile paths are named and excluded explicitly). V6 [asserts AC-6] — convention 19 present in the numbered list; F-x struck; the register tally handled per the amendment's §3 finding."
human_gate: true
tags: [plan, haussmann, gr_2, f_x, ci, gate_33]
---

> **Read cold.** Persona **Rosetta**. Campaign governance:
> `how/campaigns/campaign_haussmann/CLAUDE.md`. Assessment doctrine:
> `directives/OPERATION_VITRUVIUS_review_instrument.md`.
> **Why:** a gate has been red for six runs, and the message it prints names a fix that was already
> in place — so the instrument has been converting a symptom into a confident wrong diagnosis, which
> is the exact defect class this campaign exists to end, inside the campaign's own CI.

## Why this mission exists

`F-x` was filed at the 2026-08-29 deploy sitting and **deliberately scoped out of it** by the
operator: *it gets its own, and a fix authored on an unverified cause is the thing the last session
warned against.* This is that sitting. The row is **two debts**:

- **(a) the cause is unknown** — `gate-33-freshness` red on `main` for six consecutive runs;
- **(b) the error message names a remedy already applied** — `gates.yml:51` has read `fetch-depth: 0`
  the whole time.

Convention 18 already ruled the red does **not** gate deploys (`deploy_adna.sh:157` builds locally,
`:237` ships `--prebuilt`, so CI's artifact never reaches production). **That ruling stands and
nothing here reopens it.** What it does not settle is that the standing CI signal has been dead for
six runs — which is also *why* nobody read it, and is AC-6's subject.

## Where we are (verified on disk 2026-08-29)

| Fact | Instrument | Value |
|---|---|---|
| `HEAD` = `origin/main` **at the remote**, unpushed **0** | `git ls-remote origin` | `09faced` |
| live build stamp | `curl /.well-known/adna-build.json` | `d5ff043` |
| CI reds on `main` | `gh run list --branch main` | **6 consecutive** `[D]` |
| failing assertions in the latest run | `gh run view 33231133953 --log-failed` | **exactly one** — `gate-33-freshness.spec.ts:78`, `dates.length > 90` → 0 `[D]` |
| the other three gate-33 tests, and the `withProvenance > 90` floor | same run | **all pass** `[D]` — the footer renders; only `<time>` is missing |
| CI's Playwright projects | `gates.yml` + `playwright.config.ts:39` | `--project=chromium` only ⇒ **gate-49's baselines are not compared in CI** and cannot be disturbed by CI's build gaining dates `[D]` (convention 17: surface named) |
| Docker + CI's exact image | `docker image ls` | `28.2.2`; `mcr.microsoft.com/playwright:v1.59.1-noble` cached ⇒ Stage 1 runs offline `[D]` |

⚠ **The carried count was wrong again, and again by understatement** — the record said five reds; it
is six. The commit that *announced* the CI-red finding was itself followed by a red run nobody read.

## ⭐ The cause is narrowed to one path before any code is written

1. `gates.yml:51` sets `fetch-depth: 0` ⇒ the CI clone **cannot** be shallow. `[D]`
2. `contentSource.ts:37` is `const isShallow = git([...]) !== 'false'` ⇒ **a git that fails for any
   reason is indistinguishable from a shallow clone.** `[D]`
3. Not-shallow ⇒ `rev-parse --is-shallow-repository` would answer `'false'` ⇒ the only surviving
   path to an empty date map is **git throwing**, which `git()` catches and returns `null`. `[I]`
4. `git()` runs `stdio: ['ignore', 'pipe', 'ignore']` — **stderr is discarded.** ⭐ *The line that
   makes the cause unknowable is the same line that has to change to make it knowable.* `[D]`
5. ~~**Corroboration, and it is ours:** `visual_regression_container.sh:74` runs
   `git config --global --add safe.directory /work` before `npx astro build`. We wrote that at
   P4.4b B0 **because git fails in this exact image.**~~ ⛔ **STRUCK AT O1 — THIS WAS AN `[I]`
   DRESSED AS A `[D]`, AND IT IS FALSE ON THIS HOST.** Measured 2026-08-29: git works fine in that
   image here **without** the line, because Docker Desktop remaps bind-mount ownership to the
   running user. The line is defensive and worth keeping (a Linux host or a non-remapping driver
   would need it), but **it never demonstrated what I said it demonstrated.** The reasoning that
   remains — and it is untouched — is that CI's `actions/checkout` writes the same
   config into a **temporary** global config it then discards — its own log says so in those words:
   *"Adding repository directory to the temporary git global config as a safe directory."*
   ⇒ local container build → dates; CI build → no dates. Exactly the observed split. `[D]`
6. ⭐⭐ **THE DISCRIMINATING FACT, and it is structural rather than log-read** (added at the ⛩
   signature, amendment §6 Change 3). `unlighthouse-sweep.yml` runs **the same `npx astro build`,
   with the same `fetch-depth: 0`, over the same freshness layer** — its line 51 comment says so in
   those words — and it has **no `container:` block**. `gates.yml` has one. On a bare runner,
   checkout and build run as the same user, so no ownership mismatch can arise. ⇒ **the container is
   the only differentiating variable between the two CI builds.** `[D] 2026-08-29`
   - ⚠ **Latent risk, filed with it**: the sweep has **never run on GitHub even once** (~~first run
     owed on a push GO~~ ⛔ **STRUCK AT O3 — FALSE**: it is `schedule` + `workflow_dispatch` **only**,
     so a push neither triggers it nor is required for it; the first run is owed to the **Tuesday
     07:43 UTC cron** and fired 2026-09-01). Moved into a container, it inherits this defect
     **silently** — a Lighthouse sweep does not fail on missing dates, it just measures a different
     artifact than production. **Convention 18, waiting to happen.**
     - ⭐ **And O3 turned this latent risk into a live control.** Because the sweep is bare-runner,
       it is the *negative* arm of the ownership hypothesis, and its first run lands on the commit
       carrying the diagnostic. **Predicted before the run: `freshness: git answered`.**

⛔ **This is a hypothesis with a named mechanism, not a diagnosis**, and AC-1 is written so that a
local reproduction cannot close it alone. *A mechanism sufficient to produce a failure is not
evidence that it produced this one.*

## The scope

**In** — the two `F-x` debts; the `isShallow` conflation; gate-33's message; the CI fix; convention 19.

**Out** — `B2b` (held on the Vitruvius scope-B reply: staged their side, not delivered) · the Hopper
reply (own ⛩ send GO) · `P5.1` (with the humans) · B1's owed Speed-Insights → transport → first p75 ·
**Lane D**, which remains the Gate-1 order's next lane after this · **any deploy** (AC-5 asserts the
shipped bytes do not change; deployment is not owed and must not be implied).

**Routed** — the register-tally finding (see the amendment proposal §3): it is not a GR-2 build item.

## Objectives (phased — operator gates as marked)

| # | Objective | Output | Gate |
|---|---|---|---|
| **O0** | Convention-13 pre-build pass over every (method-bearing × test-bearing) pair, **coverage recorded** | `artifacts/gr_2/ac_amendment_proposal.md` | ⛩ **operator** — budget ratification |
| O1 | Reproduce the failure in CI's own image; capture git's stderr | V1 mutation/control record | — |
| O2 | Three-state `contentSource.ts` + build diagnostic + gate-33 message | code + V2/V3 red-proofs | — |
| O3 | Push the **diagnostic alone**; read CI's named reason | V1b — the real cause, from CI | ⛩ **operator** — push GO |
| O4 | Author the `gates.yml` fix on O3's reason; push; verify green **at the run** | V4 | ⛩ **operator** — push GO |
| O5 | Convention 19 · strike `F-x` · AAR · close cascade | records | — |

⭐ **O3 exists because of the convention-13 pass** — see the amendment's §2 finding. The first draft
went reproduce → fix → push, which would have authored the fix on a local reproduction and called it
verified. **Two pushes, deliberately.**

## Constraints & gates (honor; renegotiate only with operator sign-off)

Inherits every campaign CLAUDE.md standing convention. Mission-specific:

- **Convention 18 governs this whole mission.** Every limb states the surface it runs against and
  whether that is the surface its claim is about. The mission's subject *is* a surface mismatch.
- **Convention 14** — no instrument believed until demonstrated to fail. Three of this campaign's
  verifiers shipped wrong on their first live run; this sitting adds a fourth code path.
- **Conventions 15/16** — AC-6 is a **habit, not a checker**. No standing CI monitor is authored here.
- **Build discipline (convention 6)** — `npx astro build`, never `npm run build`.
- ⛔ **No deploy GO is sought.** AC-5 is the reason, and it is asserted rather than assumed.

## Definition of done

The cause of six consecutive `gate-33-freshness` reds is named at the object **from a CI run, not
only from a local reproduction**; `contentSource.ts` can tell a failed git from a shallow clone and
says which it found; gate-33 no longer prescribes a remedy it cannot know applies; the `gates.yml`
fix is authored on the captured reason and CI reads green **at the run**; the shipped artifact is
demonstrated unchanged on a healthy build, so nothing is owed to production; convention 19 makes a
dead CI signal visible at session open as a habit rather than an instrument; and `F-x` is struck with
both halves discharged. Every limb red-proven first, with its surface named. AAR filed (SO-5).

## Progress (2026-08-29)

- ✅ **O0 CLOSED** — conv-13 pass ran **42/42 pairs with coverage recorded**: 6 defective · 8 clean ·
  28 correctly unrelated. ⛩ **SIGNED WITH AMENDMENTS** — `artifacts/gr_2/ac_amendment_proposal.md`
  is `accepted`; §6 records three changes taken **at** the signature, two of them corrections to the
  pass's own findings. Budget ratified **~165–270 kT / 2 sessions**.
- ✅ **O1 CLOSED `[V1]`** — `artifacts/gr_2/o1_redproof_record.md`. ⭐⭐ **The planned mutation failed
  to mutate, and that vindicated F1 empirically**: Docker Desktop remaps bind-mount ownership to the
  running user, so the local container **cannot** produce a uid mismatch at any uid — measured at 0
  and 1001. Not "does not"; **cannot**. The ownership mechanism was then proven on a real filesystem
  with a control (`fatal: detected dubious ownership`, exit 128, **empty stdout** ⇒ `'' !== 'false'`
  ⇒ `isShallow` true), and the **code path was red-proven at the gate itself in CI's image**: a
  cause-agnostic failing-git stub reproduces **CI's exact signature** — 3 passed · 1 failed at `:78`,
  `Received: 0`, same message — while inducing a cause that is **provably not shallowness**. ⇒
  **`F-x`(b) is demonstrated, not argued.** ⭐ `build exit=0` in the mutation: the build shipped 121
  dateless provenance footers **silently**, which is AC-2's subject.
  - ⚠ Two of my own claims fell: evidence point 5 above (struck), and a near-filed finding that was
    **in my grep, not in the subject** (146→25 by my instrument vs 146→**0** by the gate's).
  - ⚠ A `set -e` in my first probe **exited the script at the very failure it was measuring** —
    sixth instrument-defect-before-subject this campaign.
- ⛔ **AC-1 STAYS OPEN.** Everything so far shows a mechanism *sufficient* to produce CI's exact
  signature. Nothing yet shows it is CI's. **O3 only.**
- ~~⏭ **NEXT = O2** (three-state + diagnostic + message), then ⛩ **O3's push GO**.~~

### 2026-08-31

- ✅ **O2 CLOSED `[V2 · V3 · V5]`** — `artifacts/gr_2/o2_redproof_record.md`. **AC-2 ✅ AC-3 ✅
  AC-5 ✅.** `contentSource.ts` now carries three states over a pure `freshnessStateFrom(probe)`,
  `git()` **pipes stderr instead of discarding it**, and every build prints one `freshness:` line
  naming the state and quoting git's own words. **Warns, does not throw**, per the signature.
  `gate-52` red-proven **8/8** (5 mutations · 3 controls); `V3` in CI's own image reproduces the
  failure with the diagnostic **naming the cause and prescribing nothing**, control green.
  Chromium lane **645 → 653**, fast lane **526 → 534/1skip**, `html-validate` **0**.
- ⭐⭐ **V5's NO-CHANGE CONTROL FAILED ON ITS FIRST RUN, EXACTLY WHERE `F4` SAID IT WOULD.** Two
  builds of *unchanged* source differ in **15 of 709** paths — Astro mints a fresh random DOM id per
  render for the diagram components' `aria-labelledby` wiring (`mermaid-*`, `triad-*`,
  `convergence-*`). Run in its original control-less form, V5 would have reported **"O2 altered the
  shipped artifact"** — *a confident wrong diagnosis from an uncontrolled instrument, which is
  `F-x`(b)'s own shape inside the limb written to prove this mission harmless.* Exclusion **named and
  asserted**, control then **0/709**, and V5 passes.
- ⭐ **A defect in my own diagnostic, found by LOOKING at it rather than grepping for it.** The line
  first rendered glued to Astro's route progress —
  `…/aep-1/index.htmlfreshness: git answered…` — because `loadDates()` fires mid-render and Astro
  emits progress without a trailing newline. `grep` found it every time; a human scrolling a CI log
  would not, **and being read in a CI log is the line's entire purpose.** Fixed at the call site,
  never in the returned string (gate-52 asserts that string verbatim).
- ⚠ **Deviation `D1` from the signed amendment, recorded not absorbed.** F2 said *"the module-level
  value becomes that function applied to a real probe"*; the probe moved **inside `loadDates()`**
  instead, so importing the module executes **no git at all** (a cleaner seam than F2 asked for) and
  a **`git log` that fails after a healthy probe** can reach the same diagnostic. Verified first:
  `isShallow` had no consumer outside the file.
- ⚠ **The carried suite figure and the printed one are different lanes**, and the naive comparison
  looked like 14 tests vanishing. Derived: chromium **653**, snapshot **26**, all-projects **679** =
  671 (HEAD) + 8. 667 + GR-1's 4 = 671. Nothing missing. *A count is only comparable to a count from
  the same command* — and this is the first sitting where the **carried** figure was right.
- ⛔ **AC-1 IS STILL OPEN**, and nothing in O2 narrows it. **O3 only.**
- ~~⏭ **NEXT = ⛩ O3's PUSH GO** — push the diagnostic **alone** to `main`, then read CI's *named*
  reason.~~ ✅ **DONE — see O3 below.**

### 2026-09-01 — ⛩ push GO granted, O3 closed

- ✅ **O3 CLOSED `[V1b]` — `AC-1` IS CLOSED.** `artifacts/gr_2/o3_ci_reason_record.md`. Run
  **`33465663585`**, `gates` on `main` at **`1c8fde6`**. CI's own Build step, verbatim:
  > `freshness: GIT COULD NOT ANSWER — dates omitted. This is NOT a shallow clone and fetch-depth
  > will not fix it. git said: fatal: detected dubious ownership in repository at
  > '/__w/aDNA.aDNA/aDNA.aDNA'`

  ⇒ the cause of **seven** consecutive reds is named **at the object, from CI, in git's own words**.
  It is **not** a shallow clone; `fetch-depth: 0` was correct all along and was never the lever.
- ✅ **`F6` satisfied with nothing to absorb**: **exactly one** failing assertion, `gate-33:78`.
  649 passed · 3 skipped · 1 failed = **653**, matching the local chromium lane exactly. **gate-52's
  8 assertions passed in CI** — on the very runner whose git is refusing, which is deviation **`D1`
  paying off**: the probe lives in `loadDates()`, so importing `contentSource` runs no git, and the
  discrimination gate is not a hostage to the condition it describes.
- ⭐⭐ **THE PREDICTION HELD VERBATIM.** `gate-52`'s `DUBIOUS` constant, written 08-29 from the
  *hypothesis*, is **byte-identical** to the string CI produced on 09-01 — same message, same path.
  ⛔ Stated carefully: that does **not** retroactively make `V2` an integration test, and O1's `F1`
  was right that no local run could close `AC-1`. **This run closed it, and nothing else.**
- ⭐ **The remedy was already in our own tree, and O1 was right to strike the sentence claiming so.**
  `visual_regression_container.sh:74` runs `git config --global --add safe.directory /work` — struck
  at O1 as an `[I]` dressed as a `[D]` because git works fine in that image on this host. **Both
  facts hold.** ⇒ *a defensive measure you cannot demonstrate on your own machine is not unjustified
  — it is unmeasured.* Striking the evidence while keeping the line was correct on both counts.
- ⚠ **Two carried claims corrected at O3, both in the campaign file, both never checked against the
  instrument they describe.** The red streak is **7, not 6** (lemur's 08-30 push failed on the same
  single assertion, from a *different machine* — so nothing about this checkout is implicated). And
  *"the sweep's first on-GitHub run is owed on the next ⛩ push GO"* is **false**:
  `unlighthouse-sweep.yml` is `schedule` + `workflow_dispatch` only — a push neither triggers it nor
  is needed for it.
- ⭐ **A prediction filed BEFORE its run, so it cannot be retrofitted**: the sweep's **first-ever**
  run fires **2026-09-01 07:43 UTC** on `1c8fde6`, on a **bare runner with no container**, where
  checkout and build share a uid. **Predicted reading: `freshness: git answered`.** If it holds,
  §6 Change 3's structural claim is *measured* rather than argued.
- ~~⏭ **NEXT = ⛩ O4's PUSH GO.**~~ ✅ **GRANTED AND DONE — see the O4 block below.** The fix was
  **designed, not built** (record §6): one `gates.yml` step,
  `git config --global --add safe.directory "$GITHUB_WORKSPACE"`, after checkout and before build.
  ⚠ Scoped to `$GITHUB_WORKSPACE`, **never `*`** · ⚠ **not** added to the sweep, which has no
  container and no refusal to fix — a remedy applied to an absent cause is `F-x`(b) reintroduced by
  the commit fixing `F-x`. Run `33465663585` is `V4`'s standing **red control**.

### 2026-09-01 — ⛩ O4's push GO granted (pre-granted, conditional); **`AC-4` MET AT THE RUN**

- ✅ **O4 CLOSED `[V4]` — `AC-4` IS MET.** `artifacts/gr_2/o4_ci_green_record.md`. One step added to
  `.github/workflows/gates.yml` after checkout — `git config --global --add safe.directory
  "$GITHUB_WORKSPACE"` — authored on O3's captured reason and nothing else. Pushed
  `1c8fde6..e6d3ba9`. Run **`33467130677`**, **success**. CI's Build step, verbatim `[D]`:
  > `freshness: git answered — last-updated dates derived from history.`
- ✅ **`F6` satisfied with nothing to absorb, and the comparison is exact.** Against the standing red
  control `33465663585`: **653 assertions both runs**, 649+1failed → **650+0failed**. **Exactly one**
  assertion changed state, and it is `gate-33:78`. No non-gate-33 failure to file; no silent
  improvement elsewhere to mistake for one. Visual lane 26 passed.
- ⭐ **One ordering constraint the ratified design did not name**: the job sets
  `defaults.run.working-directory: site`, so a step placed *before* checkout cannot `cd` into a
  directory that does not exist yet. "After checkout" is load-bearing for **two** reasons, not one.
- ⚠ **Same-diff coupling checked, not assumed** (convention 7): `gate-51` parses `gates.yml` as YAML
  and reads `concurrency.group` only — inert to an added step; `gates.yml:51` is still
  `fetch-depth: 0`, so `gate-33`'s and `gate-52`'s citations of that line stay accurate.
- ⚠⚠ **THE CARRIED STREAK WAS WRONG A THIRD TIME, AND THE TRUE FORM IS STRONGER THAN ANY NUMBER.**
  Every record here says *"seven consecutive reds"*. Derived: the last **green** `gates` run on `main`
  was **`32191049401`, 2026-08-18T22:05 UTC**; the failing assertion landed at **`0eb48fa`** (P2.3 O2)
  at **2026-08-19 05:13 UTC**, *after* it; and **no run on `main` has succeeded in between** (46
  failure · 15 cancelled · 0 success), with **13** consecutive runs verified one-by-one as carrying
  exactly one `gate-33` failure. ⇒ **`gate-33`'s date assertion had NEVER ONCE PASSED IN CI. This run
  is its first green, ever** — red for its entire life on the branch, ~14 days, while the local lane
  was green throughout. ⚠ Stated at its exact width: that is *"no run in which every assertion
  passed"*, **not** a claim that all 46 failures were `gate-33` failures (several carried other reds
  that later missions fixed). ⭐ **Three carried counts wrong in one mission — six → seven → never
  green — every one understating.** *The habit keeps paying, and what it keeps catching is our own
  record.*
- ⚠ **And a fourth carried defect, of a new kind: a wrong TENSE.** O3's record and the Next Session
  Prompt both say to read the unlighthouse sweep's first-ever run *"**fired** 2026-09-01 07:43 UTC"*.
  Derived at the open: it has **never run**, its cron is `43 7 * * 2`, 2026-09-01 **is** that Tuesday,
  and 07:43 UTC was **~4 h in the future**. The prediction stands, owed to a later sitting, and O4
  does not spoil it — the sweep's own workflow is deliberately untouched, so it remains the negative
  arm whichever commit it runs against. ⚠ Timing honoured: pushed 03:41, run finished 03:48, clearing
  the 07:43 window by four hours (a push inside it would have **cancelled** the sweep's first run).
- ⛔ **No deploy, and none is owed** — `AC-5` was measured at O2 and production has always built on a
  machine where git answers. Nothing about production changed today.

### 2026-09-01 — O5: convention 19, the register, the close

- ✅ **O5 CLOSED `[V6]` — `AC-6` IS MET.** Campaign **convention 19** — *derive `main`'s CI status at
  session open, one command* — is in the numbered list, ⛔ **as a habit with no checker**, and the
  restraint carries an extra edge here: **the thing that failed WAS an automated monitor**, so
  answering an unread monitor with a second monitor is the defect proposing itself as its own remedy.
  ⭐ It is **convention 16 with the polarity reversed**: 16 is a check that *stopped running*; this is
  a check that ran on every push for two weeks, went red every time, and **nobody read it**.
- ⭐⭐ **`AC-6`'s FIRST ACT WAS TO FIND THAT THE ROW IT WAS SENT TO STRIKE DID NOT EXIST.** `F-x` had
  **no register row** — the 08-29 campaign `CLAUDE.md` said *"`F-x` added … 22 total · 15 struck ·
  7 live"* while the register held **21 / 15 / 6** and no such row `[D]`. ⇒ **`F-u`'s exact class,
  third sighting**, landing on the one row a whole mission was convened to discharge. **The row was
  authored in full and struck in the same commit** (SO#6 — the ledger shows what was *owed*, not
  merely that nothing is owed now), and the tally is corrected at the sentence that typed it.
- ⭐ **`F-y` is wider than the handoff framed it.** It was routed as *"the register has no derivable
  tally"*; derived, the `F-` letter sequence reads **a–r, u, v, w** — `t` missing for a *documented*
  reason (withdrawn as a duplicate of `F-l`), and **`s` and `x` missing because nobody wrote the
  row.** **`F-s`, the production regression that raised the deploy freeze and cost four missions of
  unshipped work, still has no row.** The habit: **an `F-` ID is minted BY WRITING THE ROW.**
  ⛔ `F-s`'s backfill is **named, not smuggled into `GR-2`'s scope** — it is a closed incident and
  belongs to whoever opens it deliberately.
- **Register re-derived at the commit, not carried:** total **23** · struck **16** · live **7**
  (F-d · F-e · F-j · F-k · F-v · F-w · **F-y**). ⚠ A naive `awk -F'|'` cell count flagged the new
  `F-y` row as malformed; it is not — the row contains one **escaped** `\|` inside a `grep` pattern.
  **That is `F-l`'s documented false positive, reproduced by the row that documents it**, and the
  re-check honouring `(?<!\\)\|` reads **4 cells** for both new rows.

## AAR (SO#5)

- **Worked.** **Deriving instead of carrying, on every single fact this mission touched.** It caught
  four carried defects in one sitting — the streak (*seven* → **never green**), a wrong **tense**
  (*"fired"* for an event four hours in the future), a routing claim false at its destination
  (`F-x` had no row), and the tally that counted the row that did not exist. ⭐ **Also the two-push
  shape** the convention-13 pass forced at O0: reproduce → **read CI's own reason** → *then* author.
  The fix is one line, and authoring it on a local reproduction would have been indistinguishable
  from authoring it on evidence — right answer, no proof.
- **Didn't.** The **carried record was the weakest instrument in the room, four times over**, and
  three of those four had been written by this desk two days earlier. ⚠ And the O4 record was drafted
  saying *"this ends a seven-red streak"* before the streak was derived — the fifth carried figure,
  caught only because deriving it was the plan. ⚠ `F-s` remains rowless: this sitting found the gap
  and **deliberately did not close it**, which is honest scoping and still an open debt.
- **Finding.** ⭐⭐ **`gate-33`'s date assertion had NEVER ONCE PASSED IN CI.** It landed at `0eb48fa`
  *after* the last green run and no `gates` run on `main` succeeded between them — ~14 days, 46 failed
  runs, **two writers' machines** — while the local lane was green throughout. **A green you do run
  hides a red you do not.** ⭐⭐ And the second-order finding: **a mission can be convened on a debt
  that was never recorded.** `GR-2` existed to discharge `F-x`; `F-x` was a sentence, not a row.
- **Change.** The fix landed **in the workflow that was broken**, scoped to `$GITHUB_WORKSPACE` and
  never `*` — refusing the wildcard *because* a wildcard is the same defect shape as the message this
  mission removed: silencing a class to make one instance quiet. Both remaining gaps became a **habit
  and a row** (convention 19, `F-y`) rather than a sixth instrument, and the reason is on their face.
- **Follow-up.** ⚠ **Owed and dated**: the unlighthouse sweep's first-ever run (Tuesday **07:43 UTC**)
  read against its **filed, unretrofittable** prediction — `freshness: git answered` on a bare runner;
  **`F-s`'s backfill row**; B1's Speed-Insights enable → transport → first p75. ⛔ Still held: **B2b**
  on ⊳ D-E · the **Hopper reply** · **P5.1** with the humans. ⏭ Next lane: **Lane D** or **P4.4b B3**.
