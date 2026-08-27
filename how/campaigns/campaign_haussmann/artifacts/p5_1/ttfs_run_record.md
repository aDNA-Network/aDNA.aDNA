---
type: artifact
artifact_class: run_record_scaffold
campaign: campaign_haussmann
mission: mission_haussmann_p5_1_human_evidence
phase: P5
objective: O0
title: "P5.1 TTFS run record — the scaffold the operator fills, and the conditions it must carry"
created: 2026-08-26
updated: 2026-08-26
status: ready_for_operator
last_edited_by: agent_rosetta
executor_tier: opus
delegates_to: "artifacts/p2_5/ttfs_runbook_fresh_account.md (the procedure) + artifacts/p2_5/ttfs_instrument_kit.md (the reporting law)"
grounded_in:
  - "mission_haussmann_p5_1_human_evidence.md AC-2 (amended + signed 2026-08-26, ruling 4)"
  - "artifacts/p5_1/ac_amendment_proposal.md §1 FAIL-1 + FAIL-2, §2 AC-2, §2.1 V3 (accepted)"
  - "artifacts/p2_5/ttfs_instrument_kit.md §3 §4 §5 (reporting rules — the load-bearing part)"
  - "artifacts/p2_5/ttfs_runbook_fresh_account.md (preparation, run, stop condition, teardown)"
tags: [artifact, haussmann, p5_1, ttfs, run_record, operator, scaffold]
---

> **⛩ OPERATOR-GATED.** ⛔ **RUN THIS *AFTER* THE CONTRIBUTION RUN** — see §0. Nothing here has been
> run; this is the shape the record must take, prepared so the conditions cannot be lost between the
> stopwatch and the report.

# TTFS run record — scaffold

⛔ **This file does not re-author the runbook.** The procedure is
`artifacts/p2_5/ttfs_runbook_fresh_account.md` and the reporting law is
`artifacts/p2_5/ttfs_instrument_kit.md` §5. **Follow those.** This scaffold exists for one reason:
AC-2's two failures were about **what the report must say**, and a report shape is the cheapest place
to make that unloseable.

## 0 · Ordering — AC-3 runs FIRST, and this is not optional

**Do the contribution run ([[contribution_run_protocol]]) before this one.**

Rulings 2 and 4 both put a run on the operator, so **one person performs both**. A TTFS run walks the
runner through the entire quickstart; a contribution run performed *afterwards* is performed by
someone who has just been onboarded. **Order changes the measurement, and until the signature no
criterion stated one.** The contribution run depends on site-reading freshness that the quickstart
destroys; TTFS's own prerequisite condition is *already* labelled as warm (§2), so it has less to lose.

⇒ **AC-3 → AC-2.** State on both records that the order was kept, and if it was not, say so — a broken
order is a condition, not a disqualification, but an unrecorded one is a silent contaminant.

## 1 · Conflict of interest — declared, not managed away (ruling 4)

⛩ **Ruling 4, 2026-08-26:** AC-2's original clause *"by someone who did not build the system"* is
**STRUCK**. The **operator runs it**, with the conflict of interest declared on this record's face.

> ⭐ **The runbook anticipated this and the criterion did not — which is why the strike is an alignment
> rather than a concession.** `ttfs_runbook_fresh_account.md` §The run already says: *"The runner is
> not the person who built this. **If the operator runs it themselves, that is a condition to record**
> — a builder cannot be naive about their own funnel, and the report should say so rather than imply a
> cold read."* The instrument treated runner-identity as **a condition**; the criterion had hardened
> the same thing into **a gate**. Ruling 4 restores the instrument's own reading. *(Fourth time in this
> campaign that a criterion and its kit, written days apart, disagreed — and the first where the kit
> was the one that had it right.)*

**Fill this in, verbatim, before the number appears anywhere:**

```
Runner: <name/role>
Conflict of interest: <e.g. "The runner is the operator of this project and co-authored the
  quickstart page under test. This is NOT a cold read. A builder cannot be naive about their own
  funnel; the number below is an upper bound on comprehension and a lower bound on time.">
Cold-read status: NOT COLD
```

## 2 · The condition label — ON THE REPORT'S FACE, not in the kit

**Copy this block into the report verbatim. It is a criterion, not a caveat.**

> **Isolation: fresh macOS user account, NOT a clean VM.** Homebrew and Node are machine-wide, so this
> account inherits whatever is on `PATH`. ⇒ **This run measures *"an evaluator who already has the
> prerequisites"*** — a real and common evaluator — **but it is NOT the cold case. The true cold case
> needs a VM.**

⭐ **Why this is promoted out of the kit's prose and into the criterion (FAIL-1).** AC-2 as written
required a **clean-VM** run. The only instrument that exists says *on its own face* that it is not the
cold case. Executed literally, AC-2 was unreachable; executed with the instrument that exists, it was
met by a run the instrument itself calls a different measurement. **Third sighting of this shape in the
campaign** (P3.1's AC1↔AC4, P3.3's DEFECT 3). Ruling 1 chose the fresh account — and the labelling
obligation moved *into the criterion* so it cannot be dropped by a downstream reader who never opens
the kit.

Then record, verbatim and untidied, what the account actually inherited (runbook §Preparation 2):

```
sw_vers
uname -m
which -a git node npm claude
node --version 2>/dev/null; claude --version 2>/dev/null
```

**Whatever this prints is the run's stated condition. Do not tidy it.**

## 3 · The number — and the rule that stops it becoming a claim

**Report shape (kit §5), never bare:**

```
TTFS = <N> min  (macOS <version> · prerequisites pre-installed · fresh user account · 1 runner ·
                 builder-run, CoI declared · <date> · build <commit>)
```

⛔ **`< 10 min` IS A STATED EXPECTATION WHOSE MISS IS A FINDING — NOT A PASS/FAIL BAR.**

⭐ **This is the second failure, and it is convention 1 in instrument form (FAIL-2).** AC-2 originally
read *"TTFS < 10 min"* as a threshold. `ttfs_instrument_kit.md` §5 forbids exactly that, in terms:

> *"**One run is an observation, not a distribution**, and the report must say so in those words… **A
> failed run is a result.** If the runner never reaches success, the report says so… and the number is
> 'did not complete' — **not a blank, and not a retry until it works.**"*

A threshold on `n=1` does two harmful things: it licenses quoting one observation as a **property of
the product** — *the exact scar the kit was built against* (*"a quickstart page said about five
minutes; nobody had ever timed it"*) — and it creates a standing incentive to **re-run until the bar is
cleared**, which §5 names and forbids. The criterion and its own kit were written eleven days apart and
never read against each other.

**Therefore, three sentences that must appear in the report:**

1. *"This is one observation, not a distribution."*
2. If success was never reached: **"did not complete"** — with the friction log. Not a blank. **Not a
   retry until it works.**
3. If the number exceeds 10 minutes: that is **a finding to route**, and the report says what it
   found. A measurement that reports honestly beats a gate that reports green — the campaign's own
   precedent for the 12px floor.

**Prerequisite time is a separate stopwatch** (kit §3.5), reported separately. Folding it in — or
silently out — is how a "five minute" claim gets manufactured in either direction.

## 4 · Friction log — kit §4 schema, unchanged

| # | Timestamp | Where (URL / step) | What they expected | What happened | Recovery | Cost (s) | Severity (S1–S4) |
|---|---|---|---|---|---|---|---|

⛔ **An empty friction log is reported as SUSPECT, not as excellent.** It almost always means the runner
was not naive — and here **we already know the runner is not naive** (§1). An empty log from a
builder-run is close to a self-refuting result: say so rather than banking it.

## 5 · Clock boundaries — from the runbook, repeated only because they are the easiest thing to get wrong

- **Clock starts** when the browser loads **`https://adna.network/get-started/`** — *not* at the first
  command. **Reading the page is where the refusal happened** in the cold-read that produced this kit.
- **Clock stops** at the five published structural assertions (runbook §Stop condition).
- The **behavioural** half — open a fresh agent session inside the new vault and ask it something about
  the project — is a **second, later timestamp** and does **not** stop the clock.

## 6 · Build stamp + the AC-4 check

```
curl -s https://adna.network/.well-known/adna-build.json          # record at run time
git merge-base --is-ancestor <recorded_commit> HEAD && echo "stamp OK"
```

…plus confirm by inspection that the recorded commit contains the closed missions' work. ⛔ **No script.
No checker.** One command per artifact is the whole reason GAP-1's remedy was acceptable.

## 7 · Where this goes — and a routing conflict, surfaced rather than resolved silently

**Outputs → `evidence/p5_1/ttfs/`** (run record · friction log · scrubbed transcript · recording).

⚠⚠ **Two live documents disagree about that path, and both are load-bearing:**

- **Signed AC-4** says all three artifacts are *"filed to `evidence/`"*.
- **`ttfs_runbook_fresh_account.md` §Where the outputs go** says
  `how/campaigns/campaign_haussmann/artifacts/p2_6/`, *"cite them from P2.6 O0b, and from the D3
  re-score"*.

**Resolution: the signed criterion governs the path** — `evidence/p5_1/ttfs/` — **and P2.6's O0b cites
it there.** Nothing is duplicated; a pointer is added at P2.6.

⭐⭐ **And this is worth more than a path ruling: THIS RUN AND P2.6's O0b ARE THE SAME RUN.** P2.6 is
`in_progress` **solely** for O0b — the operator-gated TTFS run on a fresh macOS account — and the
campaign's convention 11 says so explicitly. ⇒ **Performing AC-2 discharges O0b**, which (a) closes the
last Decade-1 leftover, (b) makes **D3's score non-provisional** for the first time — it has been held
at a provisional 3 and was *withheld entirely* from the P2.6 re-score rather than re-invented, and
(c) turns `ttfs_instrument_kit.md` from `status: authored_unexercised` into an instrument with a
proving run behind it, which is what its own banner asks for. **P5.1's own status note predicted this
in the other direction** — *"if O0b runs, this mission inherits an EXERCISED TTFS instrument"* — and
the dependency turns out to be mutual.

⛔ **Not claimed as done here.** P2.6's close, D3's re-score and the kit's status change are **three
separate acts by their owners**, and this campaign's own finding is that *"routed" is a claim about the
destination, so verify it there.* Recorded as a consequence to route at P5.1's close, not as a
discharge performed by this scaffold.

## 8 · Teardown

Delete the test account **including its home directory** once the recording and logs are copied out,
and **note the deletion in the run record** — an account left behind is a second, dirtier machine for
the next run. **Scrub before publishing**: real paths, machine name, account name, anything in the
shell prompt.
