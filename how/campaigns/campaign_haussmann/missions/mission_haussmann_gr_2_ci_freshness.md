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
status: in_progress        # ⛩ AT ITS PRE-BUILD GATE 2026-08-29 — nothing built, budget NOT ratified.
                           # The convention-13 pass is at artifacts/gr_2/ac_amendment_proposal.md,
                           # `proposed`. NO BUILD UNTIL SIGNED.
mission_class: build
executor_tier: opus        # judgment-heavy: a diagnosis held open against a strong hypothesis, an
                           # instrument-semantics change on shipped code, and a CI fix that must not
                           # be authored before its cause is named. Declared at the OPEN (P4.1's
                           # lesson), not discovered at the AAR.
token_budget_estimated: "PROPOSED, NOT RATIFIED — ~130–215 kT / 1–2 sessions (Stage 0 ~25–40 · Stage 1 ~25–40 · Stage 2 ~40–70 · Stage 3 ~20–35 · Stage 4 ~20–30). ⚠ The convention-13 pass raises this: see the amendment proposal §4. Costed against conditions verified 2026-08-29, not carried."
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
verification_method: "⛩ PROPOSED — each limb labelled [asserts AC-n] per P4.4b's finding 7 (an unlabelled limb is how a partial pass reads as complete). V1 [asserts AC-1] — in CI's own image (mcr.microsoft.com/playwright:v1.59.1-noble, the pin gates.yml uses), a mutation removing visual_regression_container.sh:74's safe.directory line reproduces the failure (no dates, gate-33 red on the same assertion) and a control restoring it produces dates; git's stderr captured verbatim. V1b [asserts AC-1] — the SAME reason is read from a real CI run, because V1 proves sufficiency of a mechanism and not the identity of CI's cause. V2 [asserts AC-2] — three-state discrimination red-proven per state: git-unavailable at integration level via V1's mutation; shallow at unit level against a stubbed probe (⚠ convention 18: THE SURFACE IS A STUB, NOT A REAL SHALLOW CLONE, and the mission says so rather than letting the limb read wider than it is); healthy as control at both levels. V3 [asserts AC-3] — in the induced git-unavailable run the diagnostic names the state AND the captured reason, and the gate's failure text prescribes no remedy; plus a static assertion that the spec carries no fetch-depth prescription, written so it cannot match its own literal (P1-6's self-matching-glob class). V4 [asserts AC-4] — a real run on main reads green at `gh run view`; any non-gate-33 failure is reported as a new finding, never absorbed. V5 [asserts AC-5] — dist/ hash-compared pre/post on a healthy local build, WITH A NO-CHANGE CONTROL FIRST (two builds of unchanged source must agree before the pre/post comparison means anything; if they do not, the volatile paths are named and excluded explicitly). V6 [asserts AC-6] — convention 19 present in the numbered list; F-x struck; the register tally handled per the amendment's §3 finding."
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
5. **Corroboration, and it is ours:** `visual_regression_container.sh:74` runs
   `git config --global --add safe.directory /work` before `npx astro build`. We wrote that at
   P4.4b B0 **because git fails in this exact image.** CI's `actions/checkout` writes the same
   config into a **temporary** global config it then discards — its own log says so in those words:
   *"Adding repository directory to the temporary git global config as a safe directory."*
   ⇒ local container build → dates; CI build → no dates. Exactly the observed split. `[D]`

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

- **O0 in progress** — mission authored; convention-13 pass running.

## AAR (SO#5)

*(mandatory before `status: completed`)*
