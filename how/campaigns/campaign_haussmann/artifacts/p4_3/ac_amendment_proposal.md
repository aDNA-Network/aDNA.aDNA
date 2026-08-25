---
type: decision_record
title: "P4.3 — AC amendment proposal (convention-13 pre-build gate)"
campaign: campaign_haussmann
mission: mission_haussmann_p4_3_a11y_manual
created: 2026-08-24
status: accepted        # ⛩ OPERATOR-SIGNED 2026-08-24 — see the ratification block below (§7.7)
last_edited_by: agent_rosetta
supersedes: "the five acceptance_criteria as written at mission creation 2026-08-16"
tags: [haussmann, p4_3, a11y, convention_13, amendment]
---

# P4.3 — AC amendment proposal

> **Convention 13, as amended.** The pass ran **COMPLETE — 30/30 pairs — and its coverage is recorded**
> (matrix in the mission body). It ran **before** the budget was ratified, which is P4.1's SO#11 remedy.
> Precedent: P4.2 found **3 of 5** criteria wrong at their premises; P4.4 found **zero of five**
> executable as written.
>
> **P4.3's result: 3 of 5 criteria are not satisfiable as written, 2 inherited obligations are covered by
> no criterion at all, and the mission's stated target score is one anchor above its reachable ceiling.**

## Summary

| ID | Class | Criterion | Finding |
|---|---|---|---|
| **G-2** | reachability | AC2 | D11 check 5 requires **VoiceOver + NVDA**; NVDA is Windows-only, this is a macOS node |
| **G-3** | method-cannot-reach-test | AC3 | The 2.2 delta **and** zoom are covered by **no existing instrument** |
| **G-4** | freeze-unreachable | AC4 | The *"or limitation stated on the page"* disjunct is only true once deployed |
| **G-5** | freeze-unreachable | AC5 / V3 | *"published"* / *"statement live"* — **third consecutive mission** carrying this defect |
| **G-6** | structural gap | *(none)* | Lock **O1's 12px floor**, ⛩ deferred *to this mission*, sits under no AC |
| **G-7** | structural gap | *(none)* | P4.2's **`aria-live` residue (B3/E4)**, deferred *to this mission*, sits under no AC |
| **G-8** | ceiling overclaim | AC5 | AC5 calls the statement *"the D11 anchor-5 item"*; anchor 5 is **unreachable** here |
| **G-9** | scope | AC3 | The cited toolkit battery is a **superset** of AC3's list |

---

## G-2 — AC2 cannot fully satisfy the check it is grounded in

D11 **check 5** (`directives/OPERATION_VITRUVIUS_review_instrument.md:463`) reads: *"Screen-reader pass
on home, quickstart, one reference page, and the registry (**VoiceOver + NVDA**)."* `[D]`

AC2 names **only** a VoiceOver session. **NVDA is Windows-only**; this is an L1 macOS node. So AC2 as
written leaves check 5 half-met, and V4's *"D11 re-score"* will land on a half-met check with nothing on
the mission's face explaining why.

⭐ This is **convention 15's reachability face**: a criterion asking for an act the performing node cannot
perform. The campaign has hit it four times before (P3.3's `npm login` being the sharpest). The remedy is
never to quietly drop the limb — it is to **name it on the mission's face, with its unblock condition.**

**Proposed:** AC2 states the VoiceOver half as in-scope and **NVDA as OUT of scope with its reason**
(no Windows node), so the D11 re-score records check 5 as *partially met by design*, not silently passed.
AC1's virtual-screen-reader lane is engine-agnostic and covers the *semantics* both readers consume —
which is a genuine partial compensation and should be claimed as exactly that much, not more.

## G-3 — AC3's stated method is covered by no instrument that exists

AC3 asks for *"zoom 200%/400% checks + target-size (2.2) delta swept."* Measured `[D]`:

- `grep -rn 'wcag22|2.5.8|target-size' site/tests/` → **0 hits.** `gate-4` asserts
  `withTags(['wcag2a','wcag2aa','best-practice'])` (`gate-4-a11y.spec.ts:98`) — **`wcag22aa` is absent**,
  so target-size (2.5.8) and focus-not-obscured (2.4.11) are **outside the tag set**. The suite cannot
  see the 2.2 delta at all.
- `grep -rln 'deviceScaleFactor|zoom' site/tests/` → **0 hits.** `gate-29` is **viewport-width**
  parameterized (320/375) — a different transform from **zoom**, which it never applies.

⇒ **V1 (the only CI limb) does not reach AC3.** Executed as worded, AC3 would be ticked against
instruments that are structurally blind to both halves.

⭐ This is the *"gate-4 cannot defend its own tag set"* lesson with a specific name attached, and it is the
same shape as P4.2's AC2 (a stated method that could not make the stated test green).

**Proposed:** AC3 states that both halves require **new instrument work** — extending gate-4's tag set to
`wcag22aa` and adding a zoom transform — and that each ships **red-proven with controls** (convention 14).
A criterion may not name a sweep whose instrument does not exist without saying so.

## G-4 + G-5 — the freeze, for the third consecutive mission

AC5 says the statement is **published**; V3 says **statement live**. AC4's second disjunct says the
limitation is *"stated on the page."* All three are **public-surface claims**, and the site is under a
standing deploy freeze whose release condition is **lemur pushing `30c8163` + `f4fa9c5` from another
machine** — re-verified absent at this session's open `[D]`.

⛔ **Nothing P4.3 does can make anything live.** This is the third consecutive mission to carry such a
criterion: **P4.2's AC3**, **P4.4's AC2**, now **P4.3's AC5**.

⭐ **Three instances is not three accidents — it is a mission-authoring habit.** These criteria were all
written before the freeze existed (2026-08-16) and none was re-read against it when it landed. The
campaign already has the remedy and has applied it twice: **MET-on-build, with deployment named as owed**
together with its unblock condition (P3.3 O3, P4.1 AC5, P4.4 AC2-amended).

**Proposed:** AC5 is met **on-build** — the statement exists in the tree, gated and verified against a
local preview — with **deployment named as owed** on the mission's face. AC4's disjunct inherits the same
treatment. **The publication is not claimed.**

## G-6 + G-7 — two inherited obligations under no criterion

Both were ⛩ deferred **to this mission by name**, and **neither appears in any of the five ACs**:

- **Lock O1's 12px rendered-typeset floor.** Campaign CLAUDE.md: *"lock O1's 12px floor **defers to
  P4.3** … O1 stays `gap` through all of P4.4."* At the object `[D]`: `gate-39-figure-typeset.spec.ts`
  carries `FLOOR_PX = 12` and records `hero-graph-svg` at **27/27 labels below the floor at every width,
  3.5px at 320**; `netdiagram-svg` 7/8; `convergence-funnel` 8/8 at 320. Lock O1 is **`gap`, not
  `enforced`** — deliberately, because a ratchet is not the rule.
- **P4.2's `aria-live` residue (B3/E4).** P4.2: *"Both stay `gap` at **P4.3**, where an AT instrument can
  say whether the announcement is *useful* rather than merely *present*."* At the object `[D]`:
  `src/pages/vaults/index.astro:226` carries `<p class="vaults-result-count" role="status"
  aria-live="polite"></p>` — **empty in source**, populated by `countEl.textContent` in `apply()`.
  Present and wired; **nothing asserts it stays wired**, and the empty-state mark sits outside the region.

⇒ **All five ACs could pass with neither obligation touched.** This is **P4.1's structural gap exactly**
(there, O2's slot applications were covered by no criterion, so all four ACs could pass with zero slots
built). It recurs here in the mission that inherited the deferrals.

⭐ **And note what carried them: prose in a governance file, not a criterion.** A deferral recorded only in
narrative is a deferral with no gate — which is the campaign's own index-vs-artifact class, one level over.

**Proposed:** **AC6** (O1's floor: adjudicated — met, or its limitation stated with the ratchet held and
`gap` retained honestly) and **AC7** (the live region: asserted wired, and its *usefulness* judged by the
AT instrument, which is the question the deferral was made for).

## G-8 — the mission's ceiling is D11 = 4, not 5

AC5 calls the statement *"the D11 **anchor-5** item."* Anchor 5 reads (`:480`): *"As 4, plus published
statement, **tested with assistive-tech users**, and a11y checks in CI."* `[D]` — **three conjuncts.**

This mission can reach the statement and the CI checks. It **cannot** reach *tested with assistive-tech
users*: an operator VoiceOver session is a sighted operator driving a screen reader, which is a genuinely
valuable instrument and **is not an AT-user study**. Conflating them is the exact overclaim this campaign
exists to retire — and the instrument's own intent paragraph says D11 *"will be judged … by exactly the
institutions whose endorsement matters most."*

**Proposed:** the mission states its ceiling as **D11 = 4** (*"Verified AA across all templates including
graphics and registry; screen-reader tested"*), with anchor 5's remaining conjunct **named as owed**.
AC5 keeps the statement; it stops calling it anchor-5.

## G-9 — AC3's list is narrower than the battery it cites

The cited toolkit (`what/context/context_web_quality_toolkit.md:91–94`) names the battery as: keyboard
traversal · screen-reader pass · **focus-order review** · contrast at the usual failure sites · zoom
200%/400% · **`prefers-reduced-motion`**. AC3 carries zoom and target-size; **focus-order review** and
**`prefers-reduced-motion`** (D11 check 10) appear in no criterion.

**Proposed (operator's call, lowest-stakes item here):** fold both into AC3 as named sweeps, **or**
explicitly record them out-of-scope. Either is fine; silence is not.

---

## Proposed amended criteria

1. **AC1** *(unchanged in kind)* — Headless AT-traversal assertions (`@guidepup/virtual-screen-reader`)
   on home, get-started, one reference page, the registry, the graph — in CI, **red-proven with controls,
   and asserting they reached each surface** (convention 14).
2. **AC2** *(amended, G-2)* — Keyboard-only traversal of every primary flow recorded (focus visible, no
   traps, logical order) + operator VoiceOver session on the same five surfaces. **NVDA is OUT OF SCOPE —
   no Windows node** — so D11 check 5 is recorded **partially met by design**.
3. **AC3** *(amended, G-3 + G-9)* — F2 formally adjudicated closed (1.4.10); **zoom 200%/400% and the
   WCAG 2.2 delta each require NEW instrument work** (gate-4's tag set extended to `wcag22aa`; a zoom
   transform added), shipping red-proven. `prefers-reduced-motion` + focus-order: in, or explicitly out.
4. **AC4** *(amended, G-4)* — Graph keyboard-twin upgraded to genuine equivalence (**edges enumerated**,
   not just the roster) or its limitation stated on the page — **met on-build**, deployment owed.
5. **AC5** *(amended, G-5 + G-8)* — Accessibility statement **in the tree** (known limitations + contact
   path), verified against a local preview; **publication named as owed** with its unblock condition.
   Ceiling stated as **D11 = 4**.
6. **AC6** *(NEW, G-6)* — Lock **O1's 12px floor adjudicated**: met, or its limitation stated with the
   ratchet held and `gap` retained honestly.
7. **AC7** *(NEW, G-7)* — The registry live region **asserted wired**, and its announcement judged
   *useful* rather than merely *present*, by the AT instrument.

**Verification:** V1–V2 unchanged. **V3 amended** — *statement in tree + verified on local preview*, never
*live*. **V4 amended** — D11 re-score against a stated ceiling of **4**, with check 5 recorded partial.
**V5 NEW** — AC6 + AC7 each carry a verification limb, because G-6/G-7's whole lesson is that an
obligation with no criterion has no gate.

## Budget

The mission's `~150–250 kT` band was set at creation against **five** criteria, two of which were
unreachable and two obligations of which were invisible. Seven criteria with two new instrument builds
(zoom transform, `wcag22aa` extension) is **more work than was costed**. Proposed: **~220–320 kT across
2–3 sessions**, ratified at signature. *(P4.1's overrun was ≈2.36×; a re-raise taken as an operator act
rather than absorbed silently is SO#11's whole point.)*

## ⛩ Operator decision — SIGNED

- [x] **Sign as proposed** (7 ACs, amended V-limbs, ~220–320 kT)
- [ ] ~~Sign with modifications~~
- [ ] ~~Reject — P4.3 executes as originally written~~

### Ratification record (§7.7)

| Field | Value |
|---|---|
| **Decision** | Adopt the amended criteria set for `mission_haussmann_p4_3_a11y_manual`: **7 ACs** (AC1 unchanged in kind; AC2/AC3/AC4/AC5 amended per G-2/G-3/G-4/G-5/G-8/G-9; **AC6 + AC7 NEW** per G-6/G-7), **V3 amended** to *in-tree + verified on local preview* (never *live*), **V4 amended** to re-score against a stated ceiling of **D11 = 4** with check 5 recorded partial, **V5 added** so AC6/AC7 each carry a limb. Budget re-set to **~220–320 kT across 2–3 sessions**. |
| **Ratified by** | stanley (operator) |
| **Date** | 2026-08-24 |
| **Status** | **accepted** — P4.3 may build against the amended set |

> ⛩ **A second ruling was taken at the same gate: the freeze sweep is authorized as ONE PASS, NOW** —
> every remaining unstarted mission is re-read against the deploy freeze in a single sitting and its
> public-surface criteria amended to *MET-on-build, deployment named as owed*, rather than each
> pre-build gate re-deriving G-5 a fourth and fifth time. Record: `freeze_sweep.md` in this directory.
