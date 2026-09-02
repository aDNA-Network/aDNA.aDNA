---
type: session
session_id: session_stanley_20260902_060732_haussmann_gr_4_gate
created: 2026-09-02
updated: 2026-09-02
status: completed   # ⚠ CLOSED RETROACTIVELY at GR-4 O1's open, 2026-09-02 — this file's SITREP was complete and its work was committed at `f17ff58`, but the field was never moved and the file was never filed to history, so it sat in `active/` reading as a LIVE PEER SESSION. Found by the startup checklist's own step 4 (`how/sessions/active/` conflict scan), which is the one place it was visible.
tier: 1
last_edited_by: agent_rosetta
campaign: campaign_haussmann
mission: mission_haussmann_gr_4_story_coverage
increment: "GR-4 OPENED **AND SIGNED** — Grande Revue Lane D (story coverage), the ratified Gate-1 order's LAST lane. This sitting authored the mission, ran convention 13's pass COMPLETE with coverage recorded, landed R-124's disposition at its own destination, halted at the ⛩ pre-build gate — **and the operator took the gate in-session**, so it also carries the signature cascade: four rulings, the amended criteria (8 ACs / 7 limbs), the charter fields performed, and the capture estate folded in. ⚠ The pass was then **extended over its own amendment** and found a seventh defect. No site copy is authored; nothing is built in `site/`; nothing is deployed."
executor_tier_declared: opus
executor_tier_actual: opus
token_budget_estimated: "~55-85 kT for the gate sitting itself (GR-1's precedent costed its gate sitting separately at ~60-90 kT). ~40 kT of that is the campaign CLAUDE.md, auto-loaded and the largest single read in any HAUSSMANN session. The MISSION's band is NOT estimated here — it is derived by the pass and carried to the ⛩ gate, because convention 13's own lesson is that a budget ratified before the pass is a budget costed against a spec nobody has read."
token_budget_actual: "⚠ **NOT RECORDED AT THE TIME — RECONSTRUCTED at GR-4 O1's open, and labelled as such rather than quietly filled.** Reconstructed **≈70–95 kT** against the ~55–85 kT estimate: the sitting ran the conv-13 pass at 63 pairs, then the signature cascade (four rulings, the AC-8/V7 amendment, the 21-pair extension, the charter fields, the capture-estate fold) — the last of which was *not in the estimate at all*, because the estimate was written before the operator's rulings existed. Over the top edge by ~12%, **inside SO#11's 2× retrospective threshold ⇒ no retrospective triggers.** ⭐ The finding is not the number: it is that this is **the third P4.3-class instance** — *a band cannot be falsified by a prose sentence claiming it holds*, and a reconstruction cannot falsify it either. SO#11 says record it **at the time**; the only fix is the habit."
files_touched: []
tags: [session, haussmann, gr_4, lane_d, story_coverage, convention_13, pre_build_gate]
---

# Session — GR-4 opens: Grande Revue Lane D at its ⛩ convention-13 pre-build gate

## Derived at open — never carried (convention 19 + "derive, don't quote")

Every fact below was produced by its own command **this sitting**. The carried values from the
prior record are shown where they differ, because this campaign's standing lesson is that a
carried fact is a claim with a timestamp.

| Fact | Derived value | Command | vs carried |
|---|---|---|---|
| `main` CI status | **green ×5**, newest `33586055067` `success` | `gh run list --workflow=gates.yml --branch main -L 5` | agrees |
| `origin/main` | `7210d5e` | `git ls-remote origin main` — **at the remote**, not a tracking ref | agrees |
| `HEAD` | `7210d5e` ⇒ **unpushed 0** | `git rev-parse HEAD` | agrees |
| Production alias | `a852423` · built `2026-09-01T19:40:19.817Z` · `mode=prod` | `curl https://adna.network/.well-known/adna-build.json` | **agrees — re-probed, not assumed** |
| Mission files on disk | **30** = 27 `p{0..5}` + 3 `gr_*` | three `ls | wc -l`, each its own command | agrees (charter read 30 **at open**) |

⚠ **That last row is an AT-OPEN measurement and is deliberately not updated**: this sitting created
GR-4 and the operator then ruled the charter to **31 · 44-59 · 44-51**. Both figures are correct for
their moment, and overwriting the open-time one would erase the evidence that the count moved *because
of this sitting* — which is the same-diff obligation's whole point (convention 7).

⭐ **Convention 19 fired for the third time and found `main` green.** Recorded as a result rather
than skipped: the habit exists because a green you *do* run hides a red you *don't*, and a habit
only reported when it fires is a habit nobody can audit.

⭐ **Convention 16 honoured on the build stamp and it CONFIRMED rather than contradicted.** The
last record said `a852423`; the probe says `a852423`. That is the second time in this campaign the
re-probe has agreed (P4.5b's was the first) against three times it has contradicted — the habit
costs one `curl` either way, which is the whole argument for it.

## ⚠ Finding at the open, before a single file was written: THE CLOCK

`date +%Y%m%d_%H%M%S` returns **`20260901_230654`** on this node. Every session file in
`how/sessions/history/2026-09/` is stamped **UTC** — `..._20260902_005545_...` and
`..._20260902_020000_...` both carry `created: 2026-09-02`, and both are timestamps that local
time has not reached yet (local is `2026-09-01 23:07 PDT`; UTC is `2026-09-02 06:07`).

Had this session taken the local stamp it would have filed `session_stanley_20260901_230654_...`
with `created: 2026-09-01` — a filename **sorting before two sessions that already happened**, and
a date field contradicting every campaign record of the last two days, all of which read
`2026-09-02`. `[D]`

⇒ **A timestamp is a measurement, and it has a zone the way a count has a command.** This is the
campaign's own *a count is only comparable to a count produced by the same command* (GR-2), arriving
in a filename instead of a test total. Caught by checking the convention against the directory
rather than trusting the shell — the same move that keeps producing these findings.

⚠ Note the near-miss shape specifically: the local stamp is not *wrong-looking*. It is a
well-formed timestamp from a correct clock, and nothing downstream would have rejected it. It would
simply have been **quietly out of order forever**, which is the failure mode this campaign keeps
naming — a defect that reads exactly like compliance.

## Why this sitting exists

`P4.4` closed 2026-09-02, both halves. Every record that names a next step — the campaign
`CLAUDE.md`, the mission index, `session_prompts_haussmann.md` — now says the same thing:

> ⏭ **NEXT: Lane D** — story coverage, the Gate-1 order's **last lane**, at its own ⛩ conv-13
> pre-build gate, and it needs an **⛩ audience/scope decision before any copy is authored**
> (R-124 is routed to that gate).

Lane D is the fourth and final lane of the Grande Revue battle plan, ⛩ signed at Gate 1
(2026-08-28) in the order **B → P4.4b B1+B2a → GR-1 → Lane D**. Lanes B, C and A are closed;
P4.4b is closed. **Lane D is what remains of the ratified order.**

⛩ **Gate 1 ratified Lane D's SHAPE, not its criteria and not its budget** — the battle plan says so
on its own face (*"each new mission then gets its own convention-13 pre-build pass BEFORE its budget
is ratified"*). The campaign's standing law, **nine consecutive missions unbroken**, is *pass first,
no build until signed*. This sitting does not author copy.

## What this sitting does

1. ✅ Session file (this) with the derived-at-open facts.
2. Author `missions/mission_haussmann_gr_4_story_coverage.md` at **`status: queued`**.
3. Run convention 13's pass **COMPLETE, both directions, coverage recorded** →
   `artifacts/gr_4/ac_amendment_proposal.md` at **`status: proposed`**.
4. Land **R-124's disposition in the claim register itself** — the destination, not the prose that
   routes there (`F-u`'s class, four sightings).
5. **HALT** at the ⛩ pre-build gate. ✅ **The gate was then TAKEN in-session** — see the SITREP.
   *(Steps 1–5 describe the sitting as planned and are left standing: they were the correct plan, and
   the signature is an operator act that arrived inside the same session rather than a change of plan.)*

## Out of scope, named rather than silently dropped

- **No `site/` byte moves.** That is this sitting's load-bearing verification.
- **No deploy.** Prod serves `a852423`, an ancestor of `main`; the diff carries no site bytes.
- **P5.1** — with the humans; nothing in it waits on an agent.
- **B1's ⛩ Speed-Insights → transport → first p75** — owed, operator-gated, its own sitting.
- ~~**~59 uncited capture PNGs** — owed hygiene; offered as a close-cascade rider, not folded in~~
  ⛔ **STRUCK: ⛩ operator ruled the rider IN, and the carried figure was wrong in both numbers.**
  Derived: **67 untracked = 20 cited + 47 uncited**. Applied in the ratified **dangle-safe order**
  (cited committed *first*, then uncited ignored — ignoring first can strand a cited file), with three
  controls: **0** still-untracked · **20** staged · **0** dangling.
- **babbage's lease question** + **two upstream findings still `proposed`** — each its own operator act.

## SITREP

**Completed**

- **GR-4 opened** — `mission_haussmann_gr_4_story_coverage.md`, `status: queued`, halted at its
  ⛩ convention-13 pre-build gate. No copy authored, nothing built, nothing deployed.
- **Convention 13 ran COMPLETE at 63/63 with coverage recorded**, both directions
  (`C(7,2)=21` + `7×6=42`, derived not typed) → `artifacts/gr_4/ac_amendment_proposal.md`,
  **`proposed`**: **6 defective · 57 clean · 7 non-pair findings**.
- **R-124's routing recorded at its own destination** in `claim_register.md`; status unchanged
  `gap → open`, **no ruling taken**.
- **Two index defects found and fixed same-diff** — `session_prompts_haussmann.md` carried no rows
  for GR-2 or GR-3 while GR-1's read *"⬅ CURRENT"* (5 days, 3 missions stale), and the campaign
  `CLAUDE.md` mission-index count 30 → 31.
- **STATE.md carries GR-4**, which is the repair P4.4's close demanded after finding STATE had
  **zero** mentions of GR-2 or GR-3.

**Verification — 5/5, and the first is the load-bearing one**

| # | Check | Result |
|---|---|---|
| 1 | `git status --porcelain -- site/` | **0** — no site byte moved ⇒ *no build until signed* honoured |
| 2 | pair arithmetic derived | `21 + 42 = 63` ✓ |
| 3 | mission `queued` ∧ proposal `proposed` | ✓ — a `queued` mission with an `accepted` proposal would mean the gate was passed unsigned |
| 4 | R-124 read back **in the register** | ✓ 1 occurrence |
| 5 | vault gates 26 · 35 · 37 · 41 | **68/68**, matching the recorded figure; gate-41 green ⇒ MANIFEST/STATE drift held at 0 |

**In progress** — nothing. The mission is halted by design, not part-built.

**⛩⛩ THE GATE WAS TAKEN IN-SESSION — GR-4 IS SIGNED AND BUILDING.** All four questions ruled;
proposal `accepted`; mission `queued` → `in_progress`; budget ⛩ ratified at the **AMENDED**
**~255–400 kT / 2–3 sessions**.

- **R-124 → minimal disclaiming posture** ⇒ new **AC-8** + limb **V7**. ⛔ Register row moves when
  the section is **LIVE**, never when written (`F-n`'s class).
- **D3 → route to where the L0–L3 ladder lives** (branch (i)) — the false premise corrected, not
  built around.
- **D4 → `/commons`** — chosen by the measurement, named by neither disjunct ⇒ **CONSTRAINT-2
  dissolved**; ⚠ the strip's prose-corpus measurement is **still owed at O4**.
- **Both admin items performed**: charter **31 · 44-59 · 44-51** (`phase_count` 6), and the capture
  estate folded in **dangle-safe** — derived **67 = 20 cited + 47 uncited** (the carried *"~59
  uncited"* was wrong in both numbers); controls **0 · 20 · 0**.

⚠⚠ **The band moved because a ruling has a price, quoted in the same act** — SO#11's P4.1 lesson
with a sibling: *a budget ratified before the OPERATOR'S RULINGS is costed against a scope nobody
has chosen yet.*

⭐⭐ **The pass was extended over its own amendment and found a SEVENTH defect.** AC-8 and V7 arrived
**at** the signature ⇒ not among the 63. The 21 new pairs surfaced **DEFECT-6**: AC-8 adds prose to
`/privacy` with **no** reading-level constraint while AC-4 carries one. **P4.4b's finding inverted** —
an amendment *omitted* a clause its siblings carried. Coverage **84 · 7 defective · 77 clean**.

**Next up** — **`O1`** (D1 + D2), then O2 → O5 in order.

**Blockers** — none. ⛔ No deploy authorized or owed; a push is its own ⛩ GO.

**Files touched** — created: this session file · `missions/mission_haussmann_gr_4_story_coverage.md`
· `artifacts/gr_4/ac_amendment_proposal.md`. Modified: `campaign_haussmann/CLAUDE.md` ·
`evidence/claims/claim_register.md` · `missions/session_prompts_haussmann.md` · `STATE.md`.
⛔ **Not touched: `campaign_haussmann.md`** — its three derived count fields move **on the ruling**,
at the gate, per §8 (GR-3's precedent: surface, rule, perform, in one sitting).

## Next Session Prompt

You are Rosetta in `~/aDNA/aDNA.aDNA`. **GR-4 (GRANDE REVUE Lane D — story coverage) is OPEN and
HALTED at its ⛩ convention-13 pre-build gate; its proposal is `proposed`, so no copy may be
authored and nothing may be built until it is signed.** Read
`how/campaigns/campaign_haussmann/artifacts/gr_4/ac_amendment_proposal.md` **first** — it carries
**three ⛩ questions** (R-124's audience/scope call · D3's home, whose ratified premise measured
**false** · D4's receiving surface, ruled on **measured** headroom) and **§8's `mission_count`
30 → 31** with both session bands re-derived in the same commit (`phase_count` **HOLDS at 6**).
**Derive at open, never carry** (convention 19): `gh run list --workflow=gates.yml --branch main
-L 5`, `git ls-remote origin main`, and re-probe `/.well-known/adna-build.json` — this record says
CI green ×5, `origin/main` == HEAD `7210d5e`, unpushed 0 and prod `a852423`, and all four are
claims about the past. ⚠ **The session-file clock is UTC on this node, not local** — `date` returns
local and would file a session sorting before ones that already happened. ⛔ Held: **P5.1** with the
humans. ⚠ Owed: B1's ⛩ Speed-Insights → transport → first p75 · ~59 uncited capture PNGs (offered
as a close-cascade rider, deliberately not folded in) · babbage's lease question and two upstream
findings. **This sitting's commits are UNPUSHED — a push is its own ⛩ GO, and it precedes any
deploy; no deploy is owed.**
