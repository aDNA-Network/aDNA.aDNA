---
plan_id: mission_haussmann_p5_1_human_evidence
type: plan
title: "P5.1 — The real evidence: human cold-reader panel, clean-VM TTFS, outsider contribution run"
campaign: campaign_haussmann
phase: P5
decade: 2
owner: stanley
status: in_progress   # ⛩⛩ SIGNED 2026-08-26 — the ⛩ pre-build gate is PASSED. `artifacts/p5_1/ac_amendment_proposal.md` is **`accepted`** (4-field ratification block on its face): criteria replaced by its §2, **V1–V5 added** retiring the self-certifying `verification_method` (convention 4 — the builder never self-certifies), budget re-ratified **~120–200 → ~180–280 kT / 2 sessions** under SO#11/ADR-016. **Three rulings taken at the gate:** (3) pass first, halt at the gate — honoured; (4) **AC-2 is operator-run and `by someone who did not build the system` is STRUCK**, CoI declared not managed away — which also **discharges DEFECT-5's conditional**, so AC-3 now precedes AC-2 *unconditionally*; (5) **ADR-048's stale stimulus sentence is corrected in THIS mission**, strike-not-delete (SO-6). ⛩ **O0 is AUTHORIZED. O1–O3 each still need the operator** — the panel needs five recruited readers (agents must not recruit), the TTFS run needs a fresh macOS account, the contribution run needs the operator acting as outsider. ⛩ **G-11's precondition re-verified at the object at the signature `[D]`**: alias serves `51af717`, ancestor-of-HEAD, `git diff 51af717..HEAD -- site/` = **1 file** (a non-rendering deploy log); `/community/proposals` **200**. ⚠ Surface named (convention 17): that diff is on the **source** surface and the claim is about the **deployed output** — the bridge is the self-describing alias, stated rather than hidden inside a green tick.
mission_class: verification
executor_tier: opus
token_budget_estimated: "⛩ RE-RATIFIED 2026-08-26 — **~180–280 kT across 2 sessions** (was ~120–200 kT, costed 2026-08-16 against five criteria of which one was unsatisfiable, one named no target, and one was verified by nothing; two were then amended by a sweep asking a different question). **Agent-side only — operator recruitment and run time is NOT agent tokens and is not counted here.** Covers: the convention-13 pass ✅ · panel kit v2 + recruitment brief · TTFS run-record scaffold · contribution-run protocol · facilitation and transcription of whatever the operator returns · two-scorer scoring + reconciliation · the five V-limb checks · AAR + close cascade. The raise is **~1.4×** and modest on purpose: unlike P4.4a's 2.4× re-raise, **nothing here adds new build work** — the increase is scoring independence (AC-1), the labelling and stamp checks, and the second artifact-facing pass GAP-1 requires. ⛔ **If the panel fails its bar, the revision loop and re-panel are NOT in this band** — the kit requires fresh readers — and that is a scoped follow-on, named here so it is not discovered as an overrun. (ADR-016 / SO#11)"
token_budget_actual:
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: ["instrument §6 Steps 5/6/7 (the human instruments)", "instrument Δ3 (synthetic pre-screens were disclosed stand-ins)", "P0.1 panel kit (reuse)", "P2.5 TTFS instrument (reuse)"]
vitruvius_dimensions: [D1, D3, D9]
decade_theme: credibility
webforge_patterns: []
patterns_to_author: []
depends_on: [mission_haussmann_p4_5_voice_rewrite, mission_haussmann_p4_4_ci_hardening]
blocks: [mission_haussmann_p5_2_rescore_capstone]
acceptance_criteria:            # ⛩⛩ REPLACED AT THE SIGNATURE 2026-08-26 — `artifacts/p5_1/ac_amendment_proposal.md` is `accepted` (ratification block on its face). The freeze-sweep set of 2026-08-24 is superseded, NOT deleted: it survives in this file's git history and in §2 of the proposal, which traces every change to a numbered finding. Convention 13's pass ran 15/15 both directions and found 3 failures · 2 structural gaps · 2 unstated constraints · 1 open choice, now closed by ruling 4.
  - "AC-P (unchanged in force, NOW VERIFIABLE) — ⛔⛔ P5.1 must not run until the deploy freeze has lifted AND the built-not-deployed backlog is deployed and live-verified. ⭐ THIS IS NOT A 'CANNOT BE MET' CONSTRAINT — IT IS THE OPPOSITE, AND THAT IS WHY IT IS DANGEROUS: run against a stale production and all three evidence criteria go GREEN while the capstone evidence is SILENTLY INVALID. VERIFIED THROUGH AC-4's STAMP CHECK, NOT BY ASSERTION (GAP-1): a transcript, a recording and a friction log are statements about what a HUMAN DID; none is a statement about what PRODUCTION CONTAINED, so read V→AC this criterion was tested by nothing — G-11's own defect reappearing inside the criterion written to prevent it. Status at signature: HELD `[D]` — freeze lifted 2026-08-25; alias serves 51af717; `git diff 51af717..HEAD -- site/` = 1 non-rendering log file."
  - "AC-1 (amended — FAIL-3) — Human cold-reader re-panel ≥5 across the 3 profiles (senior engineer / domain expert unfamiliar with agents / prospective contributor): verbatim transcripts, no coaching. ⛔ STIMULUS IS THE LIVE PRODUCTION HERO AT THE RECORDED BUILD STAMP, NOT the P0.1 A-direction draft — that draft's own condition (`not production, which keeps the current hero until DP2`) EXPIRED when DP2 ratified and P4.5b rewrote the very copy panellists cold-read. ≥4/5 pass Q1–Q3 unaided within ~30s, scored against ADR-048's positioning statement by TWO INDEPENDENT SCORERS whose raw sheets are committed BEFORE reconciliation opens (mechanism reused from artifacts/p2_6/scorer_isolation_protocol.md, not re-authored); disagreement is RECORDED AS A FINDING, never resolved away. Records the commit each panellist saw, read from /.well-known/adna-build.json."
  - "AC-2 (amended — FAIL-1, FAIL-2, ruling 1, ruling 4) — TTFS run per artifacts/p2_5/ttfs_runbook_fresh_account.md on a FRESH macOS ACCOUNT, with the condition LABELLED ON THE REPORT'S FACE: 'prerequisites pre-installed; not the cold case; the true cold case needs a VM' — promoted out of the kit's prose into the criterion so it cannot be dropped downstream. ⛔ `by someone who did not build the system` is STRUCK (ruling 4): the OPERATOR runs it with the CONFLICT OF INTEREST DECLARED, not managed away. Stopwatch + screen recording + friction log. THE DELIVERABLE IS THE NUMBER WITH ITS CONDITIONS ATTACHED, reported as ONE OBSERVATION AND NOT A DISTRIBUTION; `< 10 min` is a STATED EXPECTATION WHOSE MISS IS A FINDING, NOT A FAIL, and 'did not complete' is a valid result — never a blank and never a retry until it works (ttfs_instrument_kit.md §5, which a pass/fail bar on n=1 would have breached). Records the commit serving the alias at run time."
  - "AC-3 (amended — GAP-2, DEFECT-4, DEFECT-5, ruling 2) — Contribution run against the LIVE FUNNEL, NAMED: /community/proposals (ADR-055, verified 200 on the alias at signature `[D]`), end-to-end, every stage timed, the funnel's truth recorded. OPERATOR-AS-OUTSIDER DISCIPLINE with the CONFLICT OF INTEREST DECLARED IN THE ARTIFACT — `without privileged access` is a discipline, not a fact, and no artifact can demonstrate a discipline was kept, so: every use of knowledge a stranger would not have is a LOGGED ENTRY, and an EMPTY SUCH LIST IS REPORTED AS SUSPECT (the kit's own §4 reasoning about empty friction logs). RECORDS BOTH the alias build stamp AND the origin/main HEAD read and forked — a contribution run's subject is the REPO AND THE FUNNEL, not the rendered site, so the alias stamp alone records half the world the run happened in. ⛔ AC-3 PRECEDES AC-2, UNCONDITIONALLY (rulings 2 + 4 put both runs on the operator): a TTFS run walks the runner through the entire quickstart, so a contribution run afterwards is performed by someone just onboarded. Order changes the measurement; the ordering and its reasoning are stated on both artifacts' faces."
  - "AC-4 (amended — GAP-1's remedy) — All three artifacts filed to evidence/ with consent records WHERE PARTICIPANTS EXIST (named explicitly for the operator-as-runner case, so an absent consent record reads as INAPPLICABLE and not as an omission). Each artifact carries its build stamp ON ITS FACE, and ⭐ EACH RECORDED STAMP IS CHECKED, NOT MERELY RECORDED: `git merge-base --is-ancestor <recorded_commit> HEAD` AND the recorded commit contains the closed missions' work. That converts AC-P from an unverifiable gate into a CHECKABLE PROPERTY OF THE FILED ARTIFACTS, at the cost of ONE COMMAND PER ARTIFACT and ZERO NEW INSTRUMENTS — conventions 15/16/17 each ruled against authoring an instrument at the tail of a sitting, and three of this desk's last four instrument defects are why."
verification_method: |         # ⛩ V1–V5 ADDED AT THE SIGNATURE. ⛔ The prior value — "the artifacts themselves (transcripts/recording/log) — this mission IS verification" — was a SELF-CERTIFICATION, which convention 4 forbids in terms (the builder never self-certifies). Struck, not deleted: it survives in git history and in §2.1 of the proposal.
  V1 — every filed artifact carries a build stamp, and each stamp is ancestor-of-HEAD AND contains the closed missions' work  [asserts AC-P, AC-4]
  V2 — panel transcripts are verbatim, ≥5 readers across ≥3 profiles, consent recorded, AND the two scorers' raw sheets predate reconciliation  [asserts AC-1]
  V3 — the TTFS report states its conditions IN THE KIT'S OWN §5 FORM and does not quote a single observation as a distribution  [asserts AC-2]
  V4 — the contribution log names the funnel entry point, times every stage, and carries the CoI declaration + the non-public-knowledge list  [asserts AC-3]
  V5 — the stimulus a panellist saw is the LIVE hero at the recorded stamp, CHECKED AGAINST THE TWIN, NOT THE HTML (convention 17's 2026-08-26 amendment: the surface must match the claim's verb, and "a reader encounters this copy" is a question about rendered flattened text)  [asserts AC-1]
human_gate: true
tags: [plan, haussmann, p5, panel, ttfs, contribution_run]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> The synthetic pre-screens were honest stand-ins; launch judgment runs on humans.

## Why this mission exists

Instrument Δ3 deferred Steps 5/6/7 to the campaign; the genesis scores carry "provisional" and "unawardable" flags wherever human evidence was missing (D1 anchor 5, D3, D9 first-contribution). This mission converts those flags into data — with the operator recruiting (agents cannot).

> **Inherited duty (DP2 deviation, 2026-08-16).** The P0.1 O4 human panel was **operator-waived**; ADR-048 was
> ratified on the synthetic pre-screen alone (deviation record: ADR-048 §Status). This mission now also
> **retro-validates the shipped positioning** against real humans — `artifacts/p0_1/panel_kit.md` is the stimulus,
> run against the *live* hero. A failing retro-verdict reopens the positioning question at DP9, not silently.

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | Panel kit finalization (reuse P0.1's) + recruitment brief for the operator (profiles, consent, script) | kit | ⛩ operator (recruit) |
| O1 | Run the panel (operator-facilitated or async-kit); transcribe verbatim | transcripts | — |
| O2 | Clean-VM TTFS run (operator or recruited runner); friction log | recording + log | ⛩ operator |
| O3 | Contribution run (recruited outsider or operator-as-outsider discipline); AAR | log + AAR | — |

## Constraints

No coaching, no intervening, no defending (Step 5's law); participant consent recorded; failures are findings, not embarrassments — they route to fixes before P5.2, honestly logged.

## Definition of done

Three human-evidence artifacts exist that the P5.2 re-score can cite with `[D]` instead of `[D-syn]`.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + the P0.1 panel kit + P2.5 TTFS instrument. Execute O0 and hand the recruitment brief to the operator; facilitate O1–O3 as scheduled.

## Progress

### ⛩⛩ 2026-08-26 — THE SIGNATURE IS TAKEN; THE GATE IS PASSED; O0 IS OPEN

Session `session_stanley_20260826_203051_haussmann_p5_1_o0`. `artifacts/p5_1/ac_amendment_proposal.md`
→ **`accepted`**, with the 4-field ratification block on its face (§7.7 Decision Ratification —
*agents author decisions, operators ratify them*). **Signed as proposed**: criteria replaced by its
§2, **V1–V5 added**, budget re-ratified **~120–200 → ~180–280 kT / 2 sessions**.

**Three rulings taken at the gate**, all recorded in the proposal's §3 rather than only here — because
**§3 is what a later mission cites**, and this campaign's own *index-vs-artifact* finding is that a
routing claim must be verified in its destination, never in the prose that routed it:

| # | Ruling |
|---|---|
| 3 | **Pass first, halt at the gate** — honoured; the proposal existed instead of a kit |
| **4** | **AC-2 is operator-run; *"by someone who did not build the system"* is STRUCK**, CoI declared not managed away |
| **5** | **ADR-048's stale stimulus sentence is corrected in THIS mission**, strike-not-delete (SO-6) |

⭐⭐ **RULING 4 DISCHARGED A CONDITION IN A DIFFERENT FINDING, AND THAT IS THE ENTRY WORTH READING.**
DEFECT-5's remedy was written conditionally — *"**if** one person performs both runs, AC-3 precedes
AC-2"*. Ruling 2 had already put AC-3 on the operator; ruling 4 put AC-2 there too; **one person does
perform both**, so the antecedent is satisfied and the conditional is dead weight. ⇒ **AC-3 precedes
AC-2, unconditionally.** Left conditional, it would have been read at run time as *unmet* — which is
the campaign's own **criterion amended around a temporary condition** class (FAIL-3's fourth sighting,
in this very pass) arriving *within the remedy for a different finding*. **Caught at the signature
instead of at the run, and only because the ruling was read back against the findings it touched
rather than filed against the question it answered.**

## ⛩ AMENDMENT 2 — 2026-09-04: AC-2 moves OFF the operator, and that un-grounds the AC-3→AC-2 ordering

**Operator ruling, 2026-09-04 batched planning gate.** `P2.6 O0b` and this mission's `AC-2` were
found to be **the same physical act** — one TTFS run of `artifacts/p2_5/ttfs_runbook_fresh_account.md`
on a fresh macOS account — carrying **conflicting runner conditions**: O0b requires an unassisted
**non-builder**; AC-2 (2026-08-26 ruling 4) **struck** that and put the run on the operator with the
CoI declared.

**Ruled:** ⇒ **fold the runner into THIS mission's own recruitment.** `AC-1` already requires five
recruited cold readers, and **a cold reader is by definition a non-builder** — so one of them performs
the TTFS run, in one session, and **the artifact is labelled for both consumers** (`P2.6 O0b` and
`P5.1 AC-2`). Zero marginal recruitment cost, and it is the only option under which **`D3` carries a
number that is not CoI-limited**.

⛔ **This SUPERSEDES the 2026-08-26 ruling 4** *in its runner clause only*, strike-not-delete (SO-6).
Ruling 4's text stands above, unedited, and is now read with this amendment. Its *reasoning* — that a
CoI is declared rather than managed away — is **not** overturned; it is **made unnecessary**, because
there is no longer a conflict to declare.

### ⭐⭐ THE CONSEQUENCE NOBODY ASKED ABOUT, AND IT RUNS THE SIGNATURE'S OWN CHAIN BACKWARDS

The block above records, approvingly, how ruling 4 discharged DEFECT-5's conditional:

> DEFECT-5's remedy was written conditionally — *"**if** one person performs both runs, AC-3 precedes
> AC-2"*. Ruling 2 had already put AC-3 on the operator; ruling 4 put AC-2 there too; **one person does
> perform both**, so the antecedent is satisfied ⇒ **AC-3 precedes AC-2, unconditionally.**

**This amendment falsifies that antecedent.** AC-3 stays with the operator-as-outsider; AC-2 moves to a
recruited cold reader. ⇒ **two different people perform the two runs** ⇒ the conditional's *"if one
person performs both"* is **FALSE** ⇒ the ordering's stated ground — *"a TTFS run walks the runner
through the entire quickstart, so a contribution run afterwards is performed by someone just
onboarded"* — **describes a contamination that can no longer occur.**

⚠⚠ **NOT UNILATERALLY REORDERED, and the restraint is deliberate.** The unconditional ordering was set
by an **operator ruling**, and an agent does not dissolve an operator's ordering by deriving that its
premise lapsed — that is precisely the *"clause reinterpreted in silence"* failure the paragraph below
this one warns against, which would read to every later citation as a clause that was **met**.

⛩ **What is owed: one line at P5.1's open.** Either —
- **(a)** the ordering is released (AC-2 and AC-3 may run in **either order, or in parallel**, since
  different people run them — this is the reading the reasoning supports and it saves real
  scheduling), or
- **(b)** the ordering is **retained for a different stated reason** than contamination.

⭐ **Recorded because the chain is the lesson, not the answer.** The 2026-08-26 signature was praised
here for reading a ruling back *against the findings it touched* rather than filing it against the
question it answered. **This amendment is that same discipline applied to a ruling that arrived nine
days later** — and it found that the earlier ruling's most-admired consequence was the first thing the
new one broke. ⇒ *A conditional discharged by a temporary arrangement is only discharged for as long
as the arrangement lasts, and nothing in the file was watching the arrangement.* This is the campaign's
**criterion amended around a temporary condition** class (FAIL-3) — **now sighted a fifth time, inside
the remedy that was written to close its fourth.**

---

⭐ **The open choice was closed by STRIKING, not by reinterpreting, and the difference is legible.** A
clause reinterpreted in silence reads to every later citation as a clause that was **met**; struck, it
reads as a clause that was **paid for**, with the price in AC-2's text rather than inferable from its
absence.

**G-11's precondition re-verified at the object at the signature `[D]`** — not quoted forward from the
handoff (convention 16: *a verification with no recurrence is a claim about the past wearing the
grammar of the present*): `/.well-known/adna-build.json` → `51af717`, `mode=prod`; ancestor-of-HEAD ✅;
`git diff 51af717..HEAD -- site/` = **1 file**, a non-rendering deploy log; unpushed **1** (the gate
commit), behind **0**; `/community/proposals` **200** on the alias. ⚠ **Surface named** (convention
17): the diff check is on the **source** surface and the claim is about the **deployed output** — the
bridge is the self-describing alias, said out loud rather than hidden inside a green tick.

### ~~⏸ 2026-08-26 — OPEN AT THE ⛩ PRE-BUILD GATE~~ *(superseded above; retained — the reasoning is the reusable part, SO-6)*

**⏸ Nothing built. Criteria NOT edited; they are edited at signature, not before.**
Session `session_stanley_20260826_195802_haussmann_p5_1_pre_build_gate`.

**Convention 13 coverage, recorded so an incomplete pass would be legible as incomplete:**
**15/15 pairs** — `AC×AC = C(5,2) = 10` plus `AC×V = 5×1 = 5`, derived not typed (KW-14) — each read
**AC→V** (*can the method move the test?*) **and V→AC** (*is this criterion tested by anything?*).
Tally re-derived from the table itself: **8 clean · 5 defective · 1 gap · 1 remedy**.
Proposal: `artifacts/p5_1/ac_amendment_proposal.md`, **`proposed`**.

⭐⭐ **THE PASS'S SHARPEST FINDING CAME FROM THE V→AC DIRECTION, AGAIN. AC-P — the G-11 precondition
— IS TESTED BY NOTHING.** A transcript, a screen recording and a friction log are all statements
about *what a human did*; none is a statement about *what production contained*. P5.1 could file
three perfect artifacts with the precondition silently unmet — **which is G-11's own defect
reappearing inside the criterion written to prevent it**, and P4.1's structural gap inverted exactly
as P4.5b's pass found it. ⭐ **The remedy needed no new instrument**: AC-4 already requires each
artifact to carry a build stamp, so the stamp is **checked** (ancestor-of-HEAD ∧ contains the closed
missions' work) instead of merely recorded — one command per artifact, and **zero fifth instruments**,
which conventions 15/16/17 all ruled against authoring at the tail of a sitting.

⭐⭐ **AC-2 FAILS TWICE, AND THE SECOND FAILURE IS THE CAMPAIGN'S OWN CONVENTION 1 IN INSTRUMENT
FORM.** It requires a **clean-VM** run; the only instrument that exists says on its own face *"it is
**not** the cold case… the true cold case needs a VM"* — the P3.1/P3.3 shape, third sighting. And it
sets **`TTFS < 10 min` as a pass/fail bar on a single observation**, which `ttfs_instrument_kit.md`
§5 forbids in terms — *"one run is an observation, not a distribution… not a retry until it works"*.
A threshold on `n=1` licenses quoting one run as a property of the product, **which is the exact scar
the kit was built against** (*"a quickstart page said about five minutes; nobody had ever timed it"*).
The criterion and its kit were written eleven days apart and never read against each other.

⭐ **AC-1's instrument points at a stimulus that no longer exists, and so does the ratified ADR.**
`panel_kit.md` §Stimulus shows the **A-direction hero draft**, *"not production, which keeps the
current hero until DP2"* — a condition that expired when DP2 ratified and **P4.5b rewrote the copy**.
Measured at the live twin (surface matched to the verb *"a reader encounters"*, convention 17's
08-26 amendment), the hero's definition sentence differs and a third paragraph exists with no draft
equivalent. **ADR-048 line 26 carries the same stale sentence**, so the staleness is in the ratified
decision record too. ⭐ Fourth sighting of *a criterion amended around a temporary condition must be
re-read when the condition expires*.

⚠ **Two constraints nobody had stated:** AC-3's stamp requirement **records the wrong object** — a
contribution run's subject is the **repo and the funnel**, not the rendered site, so it must stamp
`origin/main` HEAD as well as the alias. And **AC-2 and AC-3 contaminate each other** if one person
runs both — a TTFS run walks the runner through the whole quickstart — so an **order** is required
and no criterion states one.

⛩ **One choice is left open rather than resolved silently**: AC-2 says *"by someone who did not build
the system"*, and ruling 1 settled **isolation** (fresh account) without settling **who runs**.
Recruit a runner, or the operator runs it with the clause **struck** rather than quietly reinterpreted.

⛩ **G-11's precondition is HELD, verified at the object `[D]`** — freeze lifted 2026-08-25; alias
serves `51af717`; `git diff 51af717..HEAD -- site/` = **1 file**, a non-rendering deploy log; P4.4b
unstarted (nothing built) and P4.3's O2 deferred as register row **F-v**, a deferral with a gate.

⏭ **NEXT: ⛩ the signature.** On signature — criteria replaced per §2, V1–V5 added, budget ratified,
then O0 (panel kit v2 · recruitment brief · TTFS run-record scaffold · contribution protocol).
**Until then, no kit.**

## AAR (SO#5)

*(before completed)*
