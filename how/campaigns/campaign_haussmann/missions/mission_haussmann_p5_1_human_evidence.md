---
plan_id: mission_haussmann_p5_1_human_evidence
type: plan
title: "P5.1 — The real evidence: human cold-reader panel, clean-VM TTFS, outsider contribution run"
campaign: campaign_haussmann
phase: P5
decade: 2
owner: stanley
status: queued   # ⏸ OPEN AT ITS ⛩ PRE-BUILD GATE 2026-08-26 — nothing built, budget NOT re-ratified, criteria NOT edited. Convention 13's pass ran **COMPLETE at 15/15 with coverage recorded** (10 AC×AC + 5 AC×V, each read BOTH directions) → `artifacts/p5_1/ac_amendment_proposal.md`, **`proposed`**: **3 failures · 2 structural gaps · 2 unstated constraints · 1 open operator choice**, and 8 pairs clean. ⭐ Sixth consecutive mission where the pass has paid for itself. Headline: **AC-2's method cannot satisfy AC-2's test** (it requires a *clean VM*; the only instrument is the fresh-account runbook, which says on its own face it is *not* the cold case) and **AC-2 puts a pass/fail threshold on a single observation, which its own kit §5 forbids** — a claim moving *up*, convention 1. **AC-1's reused P0.1 kit points at the retired A-direction hero draft**, and ADR-048 line 26 carries the same stale sentence. **AC-P is verified by NOTHING in the V→AC direction** — G-11's own defect reappearing inside the criterion written to prevent it — remedied through AC-4's stamp check with **zero new instruments**. ⛩ **G-11's precondition is HELD and verified `[D]`**: freeze lifted 08-25; site source at HEAD differs from the deployed tree `51af717` by one non-rendering log file. ⛩ DP6 RATIFIED 2026-08-19 — activated, and better-equipped than when chartered. Two reinforcements from P2.6: the clinician cold-reader read "aDNA" as ANCIENT DNA (the standard abbreviation in her field) — a second synthetic signal that the DP2-waived human panel is worth running; and if O0b runs, this mission inherits an EXERCISED TTFS instrument instead of an unexercised one.
mission_class: verification
executor_tier: opus
token_budget_estimated: "~120–200 kT (+ operator recruitment time): panel kits + session facilitation records + TTFS re-run + contribution-run log (ADR-016)"
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
acceptance_criteria:            # ⛩ AMENDED BY THE FREEZE SWEEP 2026-08-24 (artifacts/p4_3/freeze_sweep.md, operator-authorized at P4.3's gate). ⛔⛔ HARD PRECONDITION ADDED — see below. Every criterion now records the BUILD the participant actually saw.
  - "⛔⛔ PRECONDITION [NEW · G-11] — P5.1 MUST NOT RUN until the deploy freeze has lifted AND the built-not-deployed backlog is deployed and live-verified (P4.1 + P4.2 + P4.4a today; + P4.3, P4.4b, P4.5b as they close). ⭐ THIS IS NOT A 'CANNOT BE MET' CONSTRAINT — IT IS THE OPPOSITE, AND THAT IS WHY IT IS DANGEROUS: run today, all three evidence criteria go GREEN and the capstone evidence is SILENTLY INVALID, because production is missing three closed missions of work. A panellist would score a site with no `empty_state` slot, no craft-floor markup fixes, no rebuilt /design-system. This is F-s's first casualty repeating — P4.1 O0's own record reads 'its first casualty was this session's own evidence: 30 green T0 captures, OF THE WRONG BUILD' — and that one was caught by accident, which human panel evidence affords no equivalent of."
  - "Human cold-reader re-panel ≥5 across the 3 profiles (senior engineer / domain expert / prospective contributor): verbatim transcripts, no coaching; ≥4/5 pass the 30-second criteria. RECORDS THE COMMIT THE PANELLIST SAW, read from /.well-known/adna-build.json — the self-describing-alias mechanism P4.4a's AC0 shipped for exactly this class of question."
  - "Clean-VM TTFS run by someone who did not build the system: stopwatch + screen recording + friction log; TTFS < 10 min. RECORDS THE COMMIT SERVING THE ALIAS AT RUN TIME."
  - "Outsider contribution run: a real first contribution attempted end-to-end without privileged access; every stage timed; the funnel's truth recorded. RECORDS THE COMMIT SERVING THE ALIAS AT RUN TIME."
  - "All three artifacts filed to evidence with consent records for participants — and each artifact carries its build stamp on its face, so a later reader can tell what was actually in front of the human without asking."
verification_method: "the artifacts themselves (transcripts/recording/log) — this mission IS verification"
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

**⏸ 2026-08-26 — OPEN AT THE ⛩ PRE-BUILD GATE. Nothing built. Criteria NOT edited; they are edited
at signature, not before.** Session `session_stanley_20260826_195802_haussmann_p5_1_pre_build_gate`.

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
