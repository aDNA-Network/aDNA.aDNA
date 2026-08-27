---
type: artifact
artifact_class: ac_amendment_proposal
campaign: campaign_haussmann
mission: mission_haussmann_p5_1_human_evidence
phase: P5
objective: pre-build gate
title: "P5.1 AC amendment proposal — the convention 13 pass, 15 pairs, both directions"
created: 2026-08-26
updated: 2026-08-26
status: accepted          # ⛩ RATIFIED 2026-08-26 — see the ratification block below. Kits may now be authored.
last_edited_by: agent_rosetta
executor_tier: opus
ratification:
  decision: "Sign as proposed — the five criteria of §2 replace the mission's current set, the five verification limbs of §2.1 are added (retiring the self-certifying `verification_method`), and the budget is re-ratified at ~180–280 kT across 2 sessions under SO#11/ADR-016. Two further rulings taken at the same gate: AC-2's `by someone who did not build the system` is STRUCK (ruling 4), and ADR-048's stale stimulus sentence is corrected in this mission (ruling 5)."
  ratified_by: stanley
  date: 2026-08-26
  status: accepted
grounded_in:
  - "mission_haussmann_p5_1_human_evidence.md (criteria as amended by the freeze sweep 2026-08-24)"
  - "artifacts/p0_1/panel_kit.md (the reused instrument)"
  - "artifacts/p2_5/ttfs_instrument_kit.md + artifacts/p2_5/ttfs_runbook_fresh_account.md"
  - "artifacts/p2_6/scorer_isolation_protocol.md (mechanism reused, not re-authored)"
  - "what/decisions/adr_048_positioning_statement_embargo_language.md (the scoring rubric's referent)"
  - "artifacts/p4_5b/ac_amendment_proposal.md (template + the both-directions amendment)"
tags: [artifact, haussmann, p5_1, convention_13, amendment, proposed]
---

# P5.1 — acceptance-criteria amendment proposal

> ⛩⛩ **SIGNED 2026-08-26. This document is `accepted`.** The request below was granted as proposed,
> with two further rulings taken at the same gate (**4** and **5**, §3). The mission's criteria are
> replaced by §2, the limbs of §2.1 are added, the budget is ratified at **~180–280 kT / 2 sessions**,
> and **O0 may be authored**. The pre-signature framing is retained below, struck where it has been
> overtaken (SO-6) — *the reasoning is the reusable part, and a document that erases its own question
> cannot be audited against the answer.*

> ~~⛩ **This document is `proposed`. It is not a record of work done; it is a request for a signature.**~~
> Convention 13 requires the pass to run **before a DP ratifies a budget**. P5.1's budget was ratified
> at **⛩ DP6, 2026-08-19**; its criteria were **amended by the freeze sweep on 2026-08-24**. ⇒ the
> ratified budget was costed against **a criteria set that no longer exists** — the exact condition
> convention 13 names (*"a DP ratified a budget against a spec whose halves nobody had read
> together"*), for the **sixth** mission running.

## 0 · Coverage — declared first, so an incomplete pass is legible as incomplete

The convention's 2026-08-21 amendment exists because P3.3 ran a **partial** pass, recorded no
coverage, and it read downstream as a clean bill of health. So: the contract, then the table.

P5.1 carries **5 criteria** and **one** `verification_method` sentence with **zero V-limbs**.

| Term | Text (abbreviated) |
|---|---|
| **AC-P** | ⛔⛔ G-11 precondition — must not run until the freeze lifts **and** the built-not-deployed backlog is deployed and live-verified |
| **AC-1** | Human cold-reader re-panel ≥5 across 3 profiles; verbatim; no coaching; **≥4/5 pass the 30-second criteria**; records the commit the panellist saw |
| **AC-2** | **Clean-VM** TTFS run **by someone who did not build the system**; stopwatch + recording + friction log; **TTFS < 10 min**; records the commit |
| **AC-3** | Outsider contribution run, end-to-end, **without privileged access**; every stage timed; the funnel's truth recorded; records the commit |
| **AC-4** | All three artifacts filed to `evidence/` with **consent records**, each carrying its **build stamp on its face** |
| **V** | *"the artifacts themselves (transcripts/recording/log) — this mission IS verification"* |

**Pair count, derived not typed** (KW-14): `AC×AC = C(5,2) = 10` · `AC×V = 5×1 = 5` · **total 15**.
Every pair below is read **both** ways — **AC→V** (*can the stated method move the stated test?*) and
**V→AC** (*is this criterion tested by anything at all?*), the direction that found P4.5b's worst defect.

### 0.1 · The 15 pairs

| # | Pair | AC→V | V→AC | Verdict |
|---|---|---|---|---|
| 1 | AC-P × V | A transcript cannot show what production contained | **Nothing tests AC-P** | ⛔ **GAP-1** |
| 2 | AC-1 × V | Transcripts carry Q1–Q3 verbatim — reaches the test | The **≥4/5 scoring judgement** is certified by its author | ⚠ **FAIL-3** |
| 3 | AC-2 × V | **Clean-VM run has no instrument** | Log exists; the **threshold** is untestable as stated | ⛔ **FAIL-1 + FAIL-2** |
| 4 | AC-3 × V | Log carries stage timings — reaches the test | *"without privileged access"* is asserted, not shown | ⚠ **GAP-2** |
| 5 | AC-4 × V | Existence + format are machine-checkable | Covered | ✅ **CLEAN** — the only wholly clean AC×V pair |
| 6 | AC-P × AC-1 | Precondition holds; AC-1 re-reads the stamp per session | — | ✅ clean (note a) |
| 7 | AC-P × AC-2 | Same shape; AC-2 stamps at run time | — | ✅ clean |
| 8 | AC-P × AC-3 | **The stamp records the wrong object** for a repo-facing run | — | ⚠ **DEFECT-4** |
| 9 | AC-1 × AC-2 | Independent methods; no logical conflict | — | ✅ clean |
| 10 | AC-1 × AC-3 | No conflict — but ruling 2 **forecloses** the natural runner | — | ✅ clean (cost noted, b) |
| 11 | AC-1 × AC-4 | Consent records flow from the panel | — | ✅ clean |
| 12 | AC-2 × AC-3 | **Same runner contaminates the second run; no criterion states an order** | — | ⚠ **DEFECT-5** |
| 13 | AC-2 × AC-4 | Recording + consent compose | — | ✅ clean |
| 14 | AC-3 × AC-4 | Funnel log files cleanly | — | ✅ clean |
| 15 | AC-P × AC-4 | **AC-4 is where AC-P becomes checkable** — the remedy for pair 1 | — | ⭐ **REMEDY** |

**8 clean · 5 defective · 1 gap-with-remedy-in-another-pair · 1 remedy.** Coverage **15/15**.

---

## 1 · The findings

### ⛔ FAIL-1 — AC-2's stated method cannot satisfy AC-2's stated test

AC-2 requires a **clean-VM** run. The only instrument that exists is
`artifacts/p2_5/ttfs_runbook_fresh_account.md` (`status: ready_for_operator` `[D]`), which says on
its own face, at lines 32–37 `[D]`:

> *"Homebrew and Node are machine-wide… So this run measures 'an evaluator who already has the
> prerequisites'… but it is **not** the cold case… **The true cold case needs a VM.**"*

Executed as written, AC-2 is unreachable; executed with the instrument that exists, it is met by a
run the instrument itself says is a different measurement. **This is P3.1's AC1↔AC4 and P3.3's
DEFECT 3 — the campaign's most-repeated shape, arriving a third time.**

⛩ **Resolved by operator ruling 1** (§3): amend to the fresh account, with the labelling obligation
promoted from the kit's prose into the criterion, so the condition cannot be dropped downstream.

### ⛔ FAIL-2 — AC-2 sets a pass/fail threshold on a single observation, which its own kit forbids

AC-2 says **"TTFS < 10 min"**. `ttfs_instrument_kit.md` §5 `[D]`:

> *"**Never report TTFS bare.**… **One run is an observation, not a distribution**, and the report
> must say so in those words… **A failed run is a result.** If the runner never reaches success, the
> report says so… and the number is 'did not complete' — **not a blank, and not a retry until it
> works.**"*

A threshold criterion on `n=1` does two harmful things: it licenses quoting a single observation as a
property of the product (the **exact scar** the kit was built against — *"a quickstart page said
about five minutes; nobody had ever timed it"*), and it creates a standing incentive to re-run until
the bar is cleared, which §5 names and forbids.

⭐ **This is the campaign's own convention 1 in instrument form — a claim moving *up* to ambition.**
And it went unnoticed because the criterion and the kit were written eleven days apart and never read
against each other, which is what this pass is for.

**Amendment:** the deliverable is *the number with its conditions attached*, plus the friction log.
**`< 10 min` becomes a stated expectation whose miss is a finding, not a fail** — matching the
campaign's own precedent for the 12px floor (a measurement that reports honestly beats a gate that
reports green).

### ⚠ FAIL-3 — AC-1's reused instrument points at a stimulus that no longer exists

`artifacts/p0_1/panel_kit.md` §Stimulus, line 52 `[D]`, directs readers at the **A-direction hero
draft** — *"**not** production, which keeps the current hero until DP2."* That condition **expired**:
DP2 ratified on 2026-08-16, the hero shipped, and **P4.5b rewrote the very copy panellists read**.

Measured at the **live twin** `/index.md` — surface chosen to match the claim's verb, *"a reader
encounters this copy"*, per convention 17's 2026-08-26 amendment `[D]`:

| | Draft (what the kit shows) | Live (what a panellist would see) |
|---|---|---|
| definition | *"…always know where things live: three folders, plain Markdown, **versioned** in git."* | *"…can always **find what they need**. Three folders, plain Markdown, **tracked** in git."* |
| third para | *(none)* | *"Your context is just the notes, docs and decisions you already keep…"* |

⭐ **And ADR-048 carries the same stale sentence** — *"the panel kit stays live as P5.1 stimulus"*
(line 26 `[D]`) — so the staleness is in the ratified decision record too, not only in the kit.
**The mission body already says *"run against the *live* hero"*, so the mission and its own
instrument disagree, and nothing would have caught it at run time except a panellist reading a
screenshot of retired copy.**

⭐ Same class as AC-a's freeze amendment at P4.5b: **a criterion amended around a temporary condition
must be re-read when the condition expires** — the campaign's fourth sighting.

**Amendment:** AC-1 names the stimulus as **the live production hero at the recorded build stamp**,
and the kit's §Stimulus is superseded (strike, not delete — SO-6) at kit-authoring time *after*
signature.

### ⛔ GAP-1 — AC-P is verified by nothing (the V→AC direction)

Read AC→V, pair 1 looks survivable. Read **V→AC**, it is not: **no limb tests the precondition.**
A transcript, a screen recording and a friction log are all statements about *what a human did*;
none of them is a statement about *what production contained*. P5.1 could file three perfect
artifacts with the precondition silently unmet — **which is G-11's own defect, reappearing inside the
criterion written to prevent it.**

⭐ **This is P4.1's structural gap inverted, exactly as P4.5b's pass found it**: there, an objective's
output was covered by no criterion; here, a criterion is covered by no limb.

**Remedy, and it lives in pair 15 rather than in a new instrument:** AC-4 already requires each
artifact to carry its build stamp. Amend AC-4 so the stamp must be **checked**, not merely recorded —
`git merge-base --is-ancestor <recorded_commit> HEAD` **and** the recorded commit contains the closed
missions' work. That converts AC-P from an unverifiable gate into a **checkable property of the filed
artifacts**, at the cost of one command per artifact and **zero new instruments** — which matters,
because conventions 15/16/17 all ruled against authoring instruments at the tail of a sitting, and
**three of this campaign's last four instrument defects were authored by this desk.**

### ⚠ GAP-2 — AC-3's *"without privileged access"* is asserted, never shown

Under **ruling 2** the runner is the operator, so *"outsider"* is a **discipline, not a fact**, and no
artifact can demonstrate a discipline was kept. Leaving it in prose reproduces P4.3's G-6/G-7 finding
— *a deferral recorded only in narrative is a deferral with no gate.*

**Amendment:** the conflict of interest is **declared in the criterion** (the P4.1 ranker precedent —
*declared, not managed away*), and the log carries a **positive obligation**: every moment the runner
used knowledge a stranger would not have is a **logged entry**, not an omission. An empty such list is
reported as **suspect**, on the kit's own §4 reasoning about empty friction logs.

### ⚠ DEFECT-4 — AC-3 stamps the wrong object

AC-3 inherits *"records the commit serving the alias at run time"* from the freeze sweep's blanket
amendment. But a contribution run's subject is **the repository and the funnel**, not the rendered
site: the contributor reads `/community/proposals` (a site surface, **200** `[D]`) and then acts in
**git**. The alias stamp records half the world the run happened in.

⭐ **The sweep amended all three criteria identically because it was asking one question — *does this
survive the freeze?* — and a blanket amendment is correct for that question and imprecise for this
one.** No criticism of the sweep; it is what a second, differently-aimed pass is for.

**Amendment:** AC-3 records **both** — the alias build stamp **and** the `origin/main` HEAD the
contributor read and forked.

### ⚠ DEFECT-5 — AC-2 and AC-3 contaminate each other and no criterion states an order

Both are runs; under rulings 1 + 2 both may be performed by **the same person**. A TTFS run walks the
runner through the entire quickstart; a contribution run afterwards is then performed by someone who
has just been onboarded. **Order changes the measurement and nothing says so.**

**Amendment:** state the sequence and its reasoning on both artifacts' faces —
**AC-3 (contribution) before AC-2 (TTFS)** if one person does both, because the contribution run
depends on site-reading freshness that the quickstart destroys, whereas TTFS's prerequisite condition
is already labelled as warm. If two people are available, they are run independently and the
independence is recorded.

### ✅ ~~OPEN CHOICE~~ **CLOSED BY RULING 4** — AC-2's *"by someone who did not build the system"* is **STRUCK**

~~Ruling 1 settled **isolation** (VM vs. account). It did not settle **who runs**. Read literally, the
operator does not satisfy *"someone who did not build the system"*. **This is not decided here** —
it is an operator call with a real trade, stated so it is not resolved silently in either direction:~~

- ~~**Recruit a runner** — satisfies the criterion as written; costs recruitment time (and a recruited
  runner is the same scarce resource AC-1 needs five of).~~
- ⛩ **CHOSEN 2026-08-26 — Operator runs it, CoI declared** — parallel to ruling 2; costs the
  *"did not build"* clause, which is **struck** rather than quietly reinterpreted.

⭐ **The choice was left open for exactly one reason and that reason is now discharged**: a clause
reinterpreted in silence reads, to every later citation, as a clause that was *met*. Struck, it reads
as a clause that was **paid for** — and the price is legible in AC-2's text rather than inferable from
its absence. *(P4.1's ranker precedent: a conflict of interest is **declared, not managed away**.)*

⭐⭐ **AND THE RULING DISCHARGES A CONDITION ELSEWHERE, WHICH IS WHY IT IS RECORDED HERE AND NOT ONLY
IN §3.** DEFECT-5's remedy is written conditionally — *"**if** one person performs both runs, AC-3
precedes AC-2"*. Ruling 2 makes AC-3 operator-run; ruling 4 makes AC-2 operator-run; **one person does
perform both**, so the antecedent is satisfied and the conditional is dead weight. ⇒ **AC-3 precedes
AC-2, unconditionally**, and §2's AC-3 says so flatly. **A condition nobody re-evaluates is a
condition that will be read as unmet** — the campaign's own *criterion amended around a temporary
condition* class (fourth sighting at FAIL-3), caught here at the signature instead of at the run.

### ✅ CLEAN, and worth saying so — the eight pairs that pass

Pairs 5 · 6 · 7 · 9 · 11 · 13 · 14 and the remedy at 15. Written down because the convention's own
amendment requires the pass to *record its coverage*, and a table listing only failures is
indistinguishable from a partial pass.

**(a)** Pair 6's note: the panel takes scheduling time, so the stamp must be read **per session, at
the session** — AC-1 already says *"the commit the panellist saw"*, which satisfies this. Clean.
**(b)** Pair 10's cost: a recruited **profile-(c) prospective contributor** is the natural AC-3
runner, and ruling 2 forecloses that pairing. Not a defect — the operator ruled — but the cost is
recorded so the ruling can be revisited on evidence rather than rediscovered.

---

## 2 · Proposed criteria set (replaces the current five)

> Strike-not-delete discipline (SO-6): the current text stays in the mission file's history; what
> follows is the replacement, with every change traceable to a numbered finding above.

- **AC-P (unchanged in force, now verifiable).** ⛔⛔ P5.1 must not run until the deploy freeze has
  lifted **and** the built-not-deployed backlog is deployed and live-verified. **Verified through
  AC-4's stamp check (GAP-1), not by assertion.** *Status at this writing: **held** — freeze lifted
  2026-08-25; site source at HEAD differs from the deployed tree `51af717` by one non-rendering log
  file `[D]`.*
- **AC-1 (amended — FAIL-3).** Human cold-reader re-panel **≥5** across the three profiles; verbatim
  transcripts; no coaching. **Stimulus is the LIVE production hero at the recorded build stamp**, not
  the P0.1 draft. **≥4/5 pass Q1–Q3 unaided within ~30s**, scored against ADR-048's positioning
  statement — **two independent scorers, raw sheets committed before reconciliation opens**, reusing
  `scorer_isolation_protocol.md`'s mechanism rather than a new one; **disagreement is recorded as a
  finding, never resolved away**. Records the commit each panellist saw.
- **AC-2 (amended — FAIL-1, FAIL-2, ruling 1, ~~open choice~~ **ruling 4**).** ~~by someone who did
  not build the system~~ — **struck at ruling 4**; the run is performed by **the operator, with the
  conflict of interest declared on the report's face**. TTFS run per
  `ttfs_runbook_fresh_account.md` on a **fresh macOS account**, with the condition **labelled on the
  report's face** — *"prerequisites pre-installed; not the cold case; the true cold case needs a
  VM"*. Stopwatch + screen recording + friction log. **The deliverable is the number with its
  conditions attached, reported as one observation and not a distribution; `< 10 min` is a stated
  expectation whose miss is a finding, and "did not complete" is a valid result.** Runner identity
  and any conflict of interest declared. Records the commit serving the alias at run time.
- **AC-3 (amended — GAP-2, DEFECT-4, DEFECT-5, ruling 2).** Contribution run **against the live
  funnel, named: `/community/proposals` (ADR-055)**, end-to-end, every stage timed, the funnel's
  truth recorded. **Operator-as-outsider discipline, with the conflict of interest declared in the
  artifact, not managed away**; every use of non-public knowledge is a **logged entry**, and an empty
  such list is reported as **suspect**. **Records both the alias build stamp and the `origin/main`
  HEAD read.** ~~If one person performs both runs,~~ **AC-3 precedes AC-2** — *unconditionally*, since
  rulings 2 + 4 put both runs on the operator (the conditional is discharged, not dropped) — and the
  ordering is stated on both artifacts' faces with its reasoning.
- **AC-4 (amended — GAP-1's remedy).** All three artifacts filed to `evidence/` with consent records
  **where participants exist** (named explicitly for the operator-as-runner case, so an absent
  consent record reads as *inapplicable* and not as an omission). Each artifact carries its build
  stamp **on its face**, and **each recorded stamp is checked** — ancestor-of-HEAD **and** containing
  the closed missions' work — so AC-P is discharged by evidence rather than by assertion.

## 2.1 · Verification limbs (new — GAP-1 / FAIL-3 / convention 4)

The mission currently self-certifies: *"the artifacts themselves — this mission IS verification."*
**Convention 4: the builder never self-certifies.** Five limbs, no new instruments:

| Limb | Asserts | Against |
|---|---|---|
| **V1** | Every filed artifact carries a build stamp, and each stamp is ancestor-of-HEAD and contains the closed missions' work | AC-P, AC-4 |
| **V2** | Panel transcripts are verbatim, ≥5 readers across ≥3 profiles, consent recorded; **two scorers' raw sheets predate reconciliation** | AC-1 |
| **V3** | The TTFS report states its conditions **in the kit's own §5 form** and does not quote a single observation as a distribution | AC-2 |
| **V4** | The contribution log names the funnel entry point, times every stage, and carries the CoI declaration + the non-public-knowledge list | AC-3 |
| **V5** | The stimulus a panellist saw is the live hero at the recorded stamp — **checked against the twin, not the HTML** (convention 17's amendment) | AC-1 |

## 3 · Operator rulings carried as ratified inputs

| # | Ruling | Taken | Effect here |
|---|---|---|---|
| 1 | TTFS runs on a **fresh macOS account**, condition labelled honestly | 2026-08-26, in-chat | Resolves FAIL-1; the labelling obligation is promoted into AC-2 |
| 2 | AC-3 is **operator-as-outsider**, CoI **declared not managed away** | 2026-08-26, in-chat | Resolves AC-3's runner; **creates** GAP-2, remedied above |
| 3 | **Pass first, halt at the gate** — proposal → signature → kits | 2026-08-26, in-chat | This document exists instead of a kit |
| **4** | **AC-2 is run by the operator; *"by someone who did not build the system"* is STRUCK**, CoI declared not managed away | 2026-08-26, in-chat | Closes §1's open choice; **and discharges DEFECT-5's conditional** — AC-3 now precedes AC-2 unconditionally |
| **5** | **ADR-048's stale stimulus sentence is corrected in THIS mission**, strike-not-delete (SO-6) | 2026-08-26, in-chat | FAIL-3's second home. The ratified record stops carrying a false sentence into P5.2 |
| — | **THE SIGNATURE** — sign as proposed: §2 criteria · §2.1 limbs · ~180–280 kT / 2 sessions | 2026-08-26, in-chat | §6 discharged; O0 authorized |

⚠ **Rulings 4 and 5 were taken at the signature gate, so this table is longer than the document that
asked for it.** Recorded here rather than only in the session file, because **§3 is what a later
mission cites** — and the campaign's own *index-vs-artifact* finding is that a routing claim must be
verified in its destination, never in the prose that routed it.

## 4 · Budget

Current: **~120–200 kT**, costed 2026-08-16 against five criteria — **one of which was
unsatisfiable** (FAIL-1), **one of which named no target** (AC-3's funnel), and **one of which was
verified by nothing** (GAP-1). Two of the five have since been amended by a sweep asking a different
question.

**Proposed: ~180–280 kT across 2 sessions** (agent-side only; **operator recruitment and run time is
not agent tokens and is not counted here**), covering: this pass ✅ · panel kit v2 + recruitment brief
· TTFS run-record scaffold · contribution-run protocol · facilitation + transcription of whatever the
operator returns · two-scorer scoring + reconciliation · the four V-limb checks · AAR + close cascade.

The raise is **~1.4×**, and it is **modest on purpose**: unlike P4.4a's 2.4× re-raise, nothing here
adds new build work — the increase is scoring independence (AC-1), the labelling and stamp checks,
and the second artifact-facing pass GAP-1 requires. **If the panel fails its bar, the revision loop
and re-panel are NOT in this band** — the kit requires fresh readers, and that is a scoped follow-on,
named here so it is not discovered as an overrun.

**`executor_tier: opus`** — declared **and honoured**; this session ran `opus`. P4.1's AAR:
*a declared tier nobody honours is worse than none* — **P4.1 ran four sessions on `opus` under a
`fable` declaration and it went unremarked for all four.** ⚠ P4.5b also ran `opus` under a `fable`
declaration, but **caught it at its own open rather than at the AAR**, which is the improvement;
P5.1 declares the tier it will actually use, which is the next step past catching it.

## 5 · What this pass did not do

It did not check the criteria against **P5.2's** consumption of them — P5.2's own preconditions are
its gate, not this one. It did not run any instrument. It authored **no new instrument**, deliberately
(conventions 15/16/17). And it did not edit the mission's criteria: **that happens at signature.**

## 6 · ~~The signature this asks for~~ ✅ **THE SIGNATURE, TAKEN 2026-08-26**

~~⛩ **Sign, amend, or decline.**~~ ⛩ **SIGNED AS PROPOSED.** The mission file's criteria are replaced
by §2, the V-limbs in §2.1 are added, the budget in §4 is ratified at **~180–280 kT / 2 sessions**
under SO#11/ADR-016, and O0 (panel kit v2 + recruitment brief + protocols) **is authorized**.
~~Until then, no kit.~~

⛔ **What the signature does NOT authorize, said so nobody infers it from a granted request:** no
`site/` change, no build, no deploy; **no recruitment** (agents must not recruit humans — the panel
kit's own law); and **no new instrument** — GAP-1's remedy is one `git merge-base` command per
artifact, written into AC-4's text and into each run record as a step. Building a checker for it
would forfeit the exact property that made the remedy acceptable (§1, GAP-1), and conventions
15/16/17 each ruled against authoring an instrument at the tail of a sitting.
