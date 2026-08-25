---
type: evidence
title: "Freeze sweep — every unstarted mission re-read against the deploy freeze"
campaign: campaign_haussmann
authorized_by: "⛩ operator ruling 2026-08-24, taken at P4.3's AC-amendment gate"
created: 2026-08-24
status: complete
last_edited_by: agent_rosetta
tags: [haussmann, freeze, sweep, p4_3, acceptance_criteria]
---

# Freeze sweep

> **Why this exists.** P4.3's pre-build gate found **G-5** — a criterion requiring a prod deploy under a
> freeze that lifts on **another machine** — and it was the **third** sighting (P4.2 AC3 · P4.4 AC2 ·
> P4.3 AC5). All three were authored **before the freeze existed** (2026-08-16) and none was re-read
> against it when it landed. Three instances is a **mission-authoring habit**, not three accidents, so
> the operator authorized one pass over everything unstarted rather than a fourth and fifth re-derivation
> at each future gate.

**Target set derived from each mission's own `status:` field** `[D]`, never from the campaign index —
which has gone stale five times. 27 mission files: **22 `completed`**, **5 not** (`p2_6`, `p3_3`, `p4_3`,
`p4_4`, `p4_5` all `in_progress`) + **2 `queued`** (`p5_1`, `p5_2`). Swept: the two `queued` missions and
the **unstarted halves** of `p4_4` (P4.4b) and `p4_5` (P4.5b). `p2_6` (open only for ⛩ O0b) and `p3_3`
(open at ⛩ O2) are blocked on **non-freeze** actors and carry no unstarted public-surface criteria.

## Results

| Mission | Verdict |
|---|---|
| **P4.4b** | ✅ **ALREADY CLEAN — no change needed** |
| **P4.5b** | ⛔ **G-5 recurrence #4** + ⚠ **G-10** (new) |
| **P5.1** | ⛔⛔ **G-11 (NEW, and the sharpest defect this sweep found)** |
| **P5.2** | ⛔ freeze-downstream end to end; must say so |

---

## P4.4b — already clean, and that is the finding

P4.4b's four criteria were amended at **its own** pre-build gate (2026-08-24) and are already
freeze-safe by construction: **AC2** is *"met ON-BUILD; the reading is NOT claimed"*; **AC3** *"sweeps
the CI-BUILT ARTIFACT (reproducible, matches HEAD, **no freeze dependency**)"* with *"production sweeps
**EXPLICITLY OUT OF SCOPE**"*; **AC1** generates baselines *in the CI container*.

⭐ **This is the sweep's control, and it passed.** The remedy the other missions need is not theoretical —
it is already written down, already operator-signed, and already applied once. **P4.4b is what the other
three should look like.**

## P4.5b — G-5 recurrence #4

> *"P4.5b — A **published** voice guide (registers + the transition rule … ) — the D6 anchor-5 item"*

Same word, same defect, fourth sighting. **Amend to:** voice guide **in the tree**, verified against a
local preview, **publication named as owed** with its unblock condition.

### ⚠ G-10 (new, adjacent — routed, not resolved here)

The same criterion calls the guide *"the D6 **anchor-5** item"*. D6's anchor 5 reads `[D]`
(`OPERATION_VITRUVIUS_review_instrument.md:315`): *"As 4, plus **a published voice guide**, **a claim
register maintained as an artifact**, and **agent-authorship disclosure**."* — **three conjuncts**, and
the AC names one while calling it *the* item.

⭐ **But this is NOT the same defect as P4.3's G-8, and the difference decides the remedy.** D11's anchor
5 was a **ceiling overclaim** because *"tested with assistive-tech users"* is genuinely unreachable here.
D6's other two conjuncts look **reachable**: the claim register **exists as a living artifact**
(`evidence/claims/claim_register.md`) and is this campaign's convention-1 arbiter. So G-10 is a
**conjuncts-under-no-criterion** gap — the **G-6/G-7 shape** — not a ceiling problem.

⚠ **Agent-authorship disclosure is UNVERIFIED and deliberately not asserted either way.** A three-phrase
grep (`agent-authored|written by agents|agent authorship`) over **`site/src/pages/**` only** returned no
hits. **That is a statement about that grep, not about the site** — convention 17 (*every absence
assertion names its surface*) and convention 16 (*a negative result is only as wide as the command that
produced it*), which this campaign has now breached three times by writing exactly the sentence I am
declining to write here.

⇒ **Routed to P4.5b's own pre-build gate**, which is where D6's anchors are that mission's business.

## P5.1 — ⛔⛔ the sharpest defect this sweep found

P5.1's three evidence criteria — the **human cold-reader re-panel**, the **clean-VM TTFS run**, the
**outsider contribution run** — all put a human in front of **the live site**.

⭐⭐ **And here is what makes this worse than G-5: these criteria are perfectly SATISFIABLE under the
freeze. They just produce evidence about the wrong build.** Production is missing **P4.1 + P4.2 +
P4.4a** — three closed missions of built-not-deployed work. A cold reader panelled today would score a
site without the `empty_state` slot, without the craft-floor markup fixes, without the `/design-system`
rebuild. **Every criterion goes green and the capstone evidence is silently invalid.**

**This is F-s's first casualty repeating exactly.** P4.1 O0's own record: *"Its first casualty was this
session's own evidence: 30 green T0 captures, **of the wrong build**."* That was caught by accident. This
would not be — human panel evidence carries no build stamp to contradict.

**Amend to:** every P5.1 criterion **records the commit the participant actually saw**
(`/.well-known/adna-build.json`, which **AC0 shipped at P4.4a precisely to make the alias
self-describing**), and P5.1 states on its face that it **MUST NOT RUN until the freeze lifts and the
backlog deploys**. ⭐ **The instrument for this already exists and was built two missions ago** — it just
was never pointed at the human-evidence problem.

## P5.2 — freeze-downstream end to end

Four of five criteria are live-surface or field-data claims: *"both binary gates green **WITH field
data**"* (needs P4.4b's instrument **plus a deploy plus traffic accumulation**), *"**channels live** ·
redirects verified · **monitoring on** · rollback documented + drilled"*, the re-score *vs 51.6*
(against the live site), and ⛩ **DP9 launch GO**.

This is **correct for a launch mission** and needs no rescoping. What it needs is to **say** it: P5.2's
precondition is not that its predecessors are `completed` but that they are **DEPLOYED**. Four missions
now carry a `completed` status that cannot express *built-not-deployed*, and P5.2 is the mission that
would be misled by exactly that.

**Amend to:** an explicit precondition — *"P5.2 may not open until the freeze has lifted and P4.1, P4.2,
P4.4a (+ P4.3, P4.4b, P4.5b) are deployed and live-verified."*

---

## What the sweep changes

| Mission | Change |
|---|---|
| P4.4b | **none** — already correct |
| P4.5b | AC1 → in-tree + publication owed; **G-10 routed** to its own gate |
| P5.1 | all three criteria record the build seen; **hard precondition: freeze lifted + backlog deployed** |
| P5.2 | explicit precondition — predecessors **deployed**, not merely `completed` |

## The finding worth carrying past this campaign

**G-5 and G-11 are the same blind spot at two altitudes.** G-5 is *a criterion that cannot go green under
the freeze* — annoying, self-announcing, caught by any pre-build gate. **G-11 is a criterion that goes
green and is wrong**, and nothing in the campaign would have flagged it, because the campaign's own
instruments all measure the **artifact** and not the **build the artifact describes**.

That is convention 15's structural blind spot (*every check we own measures the memo, and none of them
measures the world the memo describes*) and convention 16's (*a verification with no recurrence is a
claim about the past wearing the grammar of the present*) meeting in one criterion. ⇒ **Evidence about a
deployed surface must record which deployment it saw.** The mechanism has existed since P4.4a; this is
the first time anything asked it for a build stamp on *human* evidence rather than machine evidence.
