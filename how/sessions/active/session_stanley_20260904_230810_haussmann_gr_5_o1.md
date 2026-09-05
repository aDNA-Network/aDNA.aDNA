---
type: session
session_id: session_stanley_20260904_230810_haussmann_gr_5_o1
created: 2026-09-04   # stamped `date -u` (23:08:10 UTC) — never local; the node runs PDT and a local stamp files a session sorting before ones that already happened (GR-4's open finding)
updated: 2026-09-04
status: completed
tier: 1
campaign: campaign_haussmann
mission: mission_haussmann_gr_5_flaky_gates
objective: O1 — the rate harness
executor_tier: opus   # declared at the open and honoured; the mission's own field says a cheaper tier reproduces this finding's headline defect (concluding from n=1)
last_edited_by: agent_rosetta
token_budget_estimated: "~35–55 kT (GR-5 O1's per-objective share of the ⛩ ratified ~220 kT band). ⚠ ~40 kT of any HAUSSMANN sitting is the campaign CLAUDE.md, auto-loaded — inside the band, not beside it."
token_budget_actual: "~55-75 kT reconstructed at the close (SO#11) and LABELLED as reconstructed — the field was empty while the sampler ran. Inside the ~35-55 kT per-objective share once O0's harness authoring is counted with it; no retrospective triggers."
tags: [session, haussmann, gr_5, f_ab, rate_harness]
---

# GR-5 O1 — the rate harness

## Derived at open (convention 19 + convention 12 — never carried)

| Fact | Value | Command |
|---|---|---|
| UTC | **2026-09-04 23:08:10** | `date -u` |
| `origin/main` | **`fe2bba68eb15`** | `git ls-remote origin main` — **at the remote**, not a tracking ref (`F-s`) |
| HEAD | **`fe2bba68eb15`** | `git rev-parse HEAD` — unpushed **0**, behind **0** |
| Production stamp | **`2a72efe`**, built 2026-09-04T16:08:57Z, `mode=prod` | `curl /.well-known/adna-build.json` |
| `/learn/course/` | **404** | `curl -o /dev/null -w %{http_code}` — the falsifiable proof the 09-04 deploy scope holds |
| `/` · `/privacy` · `/commons` · `/network` | **200 · 200 · 200 · 200** | same |
| Ancestry guard | `2a72efe` **is** an ancestor of HEAD | `git merge-base --is-ancestor` |
| **`main` CI at HEAD** | ⛔ **FAILURE** — run `33918391804` | `gh run list --workflow=gates.yml --branch main -L 5` |

## ⛔⛔ FINDING 1 — THE CARRIED "main IS GREEN" IS STALE, AND THE RED IS `gate-39` ON BYTE-IDENTICAL BYTES

The previous session's SITREP **and** its Next Session Prompt both state *"`main` is **GREEN** at
`3889c29` (run `33917725977`: 682 + gate-49 26, 0 failed steps)"*. **True of `3889c29`.** It is not
true of `main`, because `main` moved one commit further in the same sitting.

Run **`33918391804`**, `gates` on `main` at **`fe2bba6`**, **failure** in 6m14s. Verbatim `[D]`:

```
✘ 315 [chromium] › tests/gates/gate-39-figure-typeset.spec.ts:137:5 ›
      Gate 39 — figure typeset floor (lock O1) ›
      G39 figure-typeset: rendered text clears the 12px floor, unclipped and level (dark) (1.5s)
1 failed
681 passed (4.7m)
```

⭐⭐ **THE CONTROL IS WHAT MAKES THIS THE CLEANEST `F-ab` DATUM THE CAMPAIGN HAS.**
`git diff --stat 3889c29..fe2bba6 -- site/` is **EMPTY** `[D]` — `fe2bba6` touched **only** session
files. ⇒ **`gate-39` passed and failed in CI, on byte-identical shipped surfaces, in consecutive
runs eight minutes apart, with no rerun involved.** Every prior CI observation of this gate needed a
`gh run rerun` to demonstrate the non-determinism; this one is two independent runs of the standing
lane.

⛔ **Where it lands, and where it does NOT.** It is a **datum for `AC-1`**, and it is a
**counter-observation against ⛩ Ruling 1's premise** — option (1) re-derives `worstPx` in CI on the
reasoning that *CI is a stable measuring environment and the local Mac was not*. Here CI is not
stable for this gate either. ⛔ **It does not trip the fallback rider**, which fires only on a
*measured* instability from AC-1's harness. **n=3 is not a rate** — the mission's own headline,
*a control is a rate, not a run*, applies to evidence that flatters the mission as much as to
evidence against it.

⚠ **The mission file's own Next Session Prompt predicted a different red** — *"`main` may still be
RED on `gate-49 doc-hub (/learn/)` … NOT `F-ab` and NOT this mission's."* That prediction was
written **before** ⛩ ruling 3's re-baseline landed at `5246e78`. The re-baseline worked (`gate-49`
**26 passed** in CI at `3889c29`); the red that remains is a **different gate** and **is** this
mission's. ⇒ *a carried prediction expires the moment the act it anticipates is performed.*

⭐ Running `gate-39` CI tally, stated as observations and not as a rate: **fail `1d6af75` → rerun
success · pass `33917725977` (`3889c29`) · fail `33918391804` (`fe2bba6`)**.

## FINDING 2 — the intro course is the only unshipped site delta, and shipping it makes `/privacy` false

Recorded here because it governs an ⛩ operator gate that is **ordered before P5.1 recruitment**, not
because it is O1's work. Of the 8 commits since production's `2a72efe`, the shipped-surface diff is
**one thing** — `b2e943b`, the intro course (TypeScript.aDNA C3b Slice A), 13 files, +1157/−3.
Everything else is records-only.

| # | Finding | Evidence |
|---|---|---|
| **C1** | `/privacy` §**"The one thing stored in your browser"** (`privacy/index.astro:55`) names exactly one key — `theme` (`:58`). The course adds a **second** `localStorage` key (`scripts/course/progress.ts:76,91`). **Deploying makes a live claim on the privacy page false.** | `[D]` grep at both objects |
| **C2** | `grep -rn "learn/course" site/tests/ site/scripts/` → **0 hits**; `b2e943b` touched **zero** test/gate/audit files. A new route class is invisible to `gate-4`, the `@audit` P1S3 sweep, and every route-coupled fixture. | `[D]` |
| **C3** | ⇒ ADR-057 / convention 7 (same-diff gate law) was not honoured by that commit. | derived from C2 |

⭐ **C1 is convention 1 exactly**; **C2 is P4.3's own finding verbatim** (*"a 620-green suite knew
nothing about the new route"*). ⭐ **Said in fairness, because the register pass cuts both ways:**
the course author was careful about the thing that matters most — `progress.ts:7` documents that
*"`localStorage` is the whole transport"*, so the **zero-network property holds** and R-97's
*"aDNA itself sends nothing"* is **not** contradicted. The defect is a **count in a sentence**, not
a transport.

## Work log

### ✅ O1 / `AC-1` COMPLETE — 2026-09-05, and the result is the opposite of the expected one

The `n=100` sampler finished (process exited; `pgrep -f flake_rate_measure` → **0** `[D]`).
**All three families 0/100, Wilson 95% `[0.0%, 3.7%]`, verdict STABLE**, `harnessErrors: 0`.
Full record + limits: `artifacts/gr_5/o1_rate_record.md` §Results; machine-readable
`o1_rate_report.json`.

⇒ **§22.4's `40–60%` is excluded for this configuration** — `P(0/100 | p=0.4) ≈ 6.6 × 10⁻²³`.
⛔ **And that is a statement about the HOST**, while `DATUM 1` and `F-ab`(b) are **CI** observations
on a machine this desk cannot sample from here — the limit that governs how the verdicts may be
cited (convention 18).

⭐ **The grep-selection check is what makes the zero a result rather than an artifact**: `W8` guards
against a grep matching *zero* tests and **not** against one matching *the wrong non-zero subset*.
Verified with `--list` after the run — all three families select the exact assertions `F-ab` names,
including `Shift+Tab` at `:203` and `G39 …(dark)` at `:137`, CI's actual red.

⚠ **A hypothesis of this desk's was half wrong and the free load datum said so**: the first reading
was *"the harness sampled the quiet end"*. Across 600 recorded `load1` values — median **10.55**,
**16.7% at ≥ 15** — that holds for `g42b` (median 7.67) and **fails for `g39`, which ran at median
14.13 and never failed.**

⛔ **`O2` HAS LOST ITS SUBJECT** and the mission halts rather than improvising: `AC-2` discriminates
by comparing two arms' rates, and a 0/100 baseline leaves nothing to separate. **This is a third
state `AC-2` does not name** — not its ratified *"the rates did not separate"* refutation branch,
which presumes the phenomenon occurred. ⛩ **Three options costed in the record's §Results; the
scope call is the operator's** (SO#1). `O3` is unaffected, is now the only runnable objective, and
still needs its own ⛩ GO because it drives CI.

## Session close

**Completed.** O0 (harness + 11/11 self-test) · **O1 / `AC-1`** in full, with its limits stated.
**Blocked.** `O2` on the ⛩ scope call above; `O3` on its ⛩ CI GO.
**Files touched.** `site/scripts/flake_rate_measure.mjs` · `artifacts/gr_5/o1_rate_record.md` ·
`artifacts/gr_5/o1_rate_report.json` · `artifacts/gr_5/o1_rate_run.log` · this file.
⛔ **Zero `site/src` bytes changed** — O1 measures and fixes nothing, by `AC-1`'s own terms.

⚠ **Lease note, recorded rather than glossed.** The peer session
`session_stanley_20260904_233911_haussmann_gate_rulings` declared this session's `artifacts/gr_5/*`
as **not** co-writable, then wrote `o1_rate_record.md` §Results once the sampler had exited. **The
declaration was honoured in substance** — the write happened only after the owning process was
verified gone — **but the lease was never formally released**, because this file said `active` while
nothing was running. ⭐ **That is GR-4's own finding recurring**: *a finished session left in
`active/` is a lease nobody is holding.* Closed here at the moment the fact became true, not at the
next session's open.
