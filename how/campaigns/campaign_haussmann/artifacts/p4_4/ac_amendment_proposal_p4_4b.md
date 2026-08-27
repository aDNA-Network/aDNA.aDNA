---
type: artifact
artifact_class: ac_amendment_proposal
campaign: campaign_haussmann
mission: mission_haussmann_p4_4_ci_hardening
increment: P4.4b
phase: P4
created: 2026-08-26
updated: 2026-08-26
status: accepted          # ⛩ OPERATOR-SIGNED 2026-08-26 — see the ratification block below.
                          # Agents author decisions; operators ratify them (§7.7). P4.4b may now
                          # build against this set. ~~proposed~~ (struck, not deleted — SO-6).
last_edited_by: agent_rosetta
executor_tier: opus       # the pass; P4.4b's build increment stays declared `sonnet`
supersedes: "the P4.4b half of artifacts/p4_4/ac_amendment_proposal.md (2026-08-24, `accepted`) — AMENDS, does not replace: that document's AC0/V5 (P4.4a) are closed and untouched here"
tags: [artifact, haussmann, p4_4b, convention_13, ac_amendment, pre_build_gate]
---

> ~~**⛩ THIS IS A PROPOSAL, NOT A RULING.**~~ **⛩ SIGNED 2026-08-26 — THIS IS NOW A RULING.**
> Convention 13's pass, run complete and in both directions before P4.4b built anything. Every change
> traces to a numbered finding below. *(Superseded wording struck, not deleted — SO-6.)*

## ⛩ Ratification record (§7.7)

| Field | Value |
|---|---|
| **Decision** | P4.4b's amended criteria set is adopted: §5's AC1–AC4 + V1–V4 changes, rulings 2–5, the B2 → **B2a / B2b** split, and the re-ratified budget. **§4 ruled (c)** — build **B2a** now, **hold B2b** until Vitruvius answers ⊳ D-E. |
| **Ratified by** | Operator (Stanley), at the P4.4b pre-build gate |
| **Date** | 2026-08-26 |
| **Status** | `accepted` — P4.4b may build against this set. **B2b may not be built** until the ⊳ D-E answer lands, at which point it re-enters at **its own ⛩ gate**; it does not silently absorb into B2a. |

**Budget re-ratified (SO#11 / ADR-016):** ~~~250–400 kT / 2 sessions~~ → **~280–440 kT / 3 sessions**
(the ~330–520 band applies only under §4 option (b), which was not taken — B2b's ~50–80 kT leaves the
band entirely under (c)). The raise is **≈1.3×**: three red-test mutations, the mask discipline, the
theme control, and the split. **Nothing here adds a feature.**

⚠ **What the signature does NOT close, recorded on the ruling's own face so nobody infers otherwise**
(§4's closing note): the gate-19 bars **remain un-sourced** (F-e's live residue), and **Perf ≥ 90 is
LOOSER than WebForge's `content_static` 95** — the direction their `ratchet_law` reserves for an
operator gate. **AC4 does not close either by hashing anything.**

# P4.4b — AC amendment proposal (pre-build gate, 2026-08-26)

## §0 — Why this pass was run at all

P4.4b's criteria were amended and signed **2026-08-24**, and its budget (**~250–400 kT / 2
sessions**) was ratified against them. Since then: the **deploy freeze lifted** (08-25), **four
missions closed**, the suite moved **587 → 633**, and **AC4's gating memo was delivered** (08-27).

⇒ The ratified budget is costed against conditions that no longer hold. That is convention 13's own
trigger sentence — *a DP ratified a budget against a spec whose halves nobody had read together* —
arriving for the **seventh** consecutive mission. It is also the exact reason P5.1's pass was run
two days ago, and that pass found the worst defect in the campaign to date.

## §1 — Coverage, derived and recorded

An incomplete pass must be legible as incomplete (convention 13's amendment, after P3.3's partial
pass read as a clean bill of health). So the denominator is **derived, not typed** (KW-14):

```
criteria (P4.4b)      AC1 · AC2 · AC3 · AC4                                    = 4
V-limbs               V1 in-container visual diff · V2 deliberate budget breach
                      V3 one scheduled sweep run · V4 field instrument in-tree
                      V5 the 7-case ancestry matrix                            = 5
AC × AC   C(4,2)                                                               =  6
AC × V     4 × 5                                                               = 20
                                                                          TOTAL = 26
```

⛩ **The V5 scoping decision is stated, not silently resolved.** V5 asserts **AC0**, which is
P4.4a's and closed ✅. It would have been defensible to exclude it and run 22. It is **included**,
because the V→AC question is *"is this criterion tested by anything at all"* and answering that
requires sweeping **every** limb the mission owns — excluding one by assumption is how a criterion
comes to be covered by nothing without anyone noticing. Its four cells were **checked and are
empty**: no P4.4a limb reaches any P4.4b criterion. That is a result, not a formality — AC0's guard
is about production deploys and AC2's reading is about production traffic, which is close enough to
have been worth ruling out at the object.

Each of the 26 was read **both** ways — **AC→V** (*can the stated method move the stated test?*) and
**V→AC** (*is this criterion tested by anything?*). The reverse direction has produced the worst
finding on each of the last two missions (P4.5b's AC-a, P5.1's AC-P) and costs no extra cells.

**Tally, re-derived from the table in §6 rather than typed: 20 clean · 6 defective.**
Plus **6 findings that are not pair-shaped** — 1 field-level, 3 criterion-level, 2 execution
hazards — surfaced by the pass and recorded here because the alternative is that they are
rediscovered at run time.

---

## §2 — The findings

### ⭐⭐ FINDING 1 — AC4's provenance test was replaced; **the limb that failed it was not**

`AC4 × V2`, both directions.

The 08-24 amendment **REPLACED** AC4 because of DEFECT-4, which it states in terms:

> *"the distinguishing claim was tested by nothing — a breach test proves a budget fails when
> exceeded, and **a transcribed budget breaches identically**."*

`verification_method` today reads, verbatim:

> *"V1–V4 **unchanged in kind** (red-tests: deliberate visual diff **IN-CONTAINER**; **deliberate
> budget breach**; one scheduled sweep run; field instrument shipped-in-tree)."*

⇒ **V2 is still "deliberate budget breach"** — the precise test the amendment proved cannot see
AC4's distinguishing claim. **DEFECT-4 survives, intact, inside the verification method written to
close it.**

⭐ **And the asymmetry is visible in one sentence.** AC1's amendment *was* mirrored into its limb —
`IN-CONTAINER` is right there in V1's text, in caps. AC4's replacement was not mirrored into V2.
The same author, in the same field, in the same sitting, carried one change across and not the
other. **A criterion and its limb are two objects, and amending one is not amending the other.**

**Remedy — zero new instruments.** The amendment row already names the test: the assertion is *this
bar was read from `classes.<c>` at pin `<sha>`, whose content hashes to `<md5>`*, and it must go red
**when a bar is edited by hand**. So V2 gains that mutation. Red-proving a hand-edit is one case in
a matrix P4.4a has already run seven of.

### ⭐⭐ FINDING 2 — AC4's interim clause is keyed to an event that **can no longer occur**

`AC4`, criterion-level.

AC4 as signed:

> *"**If ⊳ D-E's mirror has not landed** when this criterion is executed, the budget is transcribed
> AND NAMES THE SOURCE … and that state is reported as a gap, NEVER as adoption."*

**The mirror was WITHDRAWN at A3, 2026-08-24** — contradicted from both ends, and the withdrawal is
recorded in this same mission file and in campaign convention 4: our own wrapper names gates among
what is *"consumed by reference, never copied"*, and WebForge's `CLAUDE.md` says the bars
*"are class-keyed data … read them there and never transcribe them."*

⇒ The antecedent is not *"not yet"*. It is **"never."** A fallback whose trigger is permanently
satisfied is either permanently firing or dead text, and **nothing on the criterion's face says
which**. Executed literally, AC4 is *always* in its interim state and can *never* report adoption.

⭐ **This is the campaign's *criterion amended around a temporary condition* class — inverted, and
worth the distinction.** In its four prior sightings the condition **expired** (DP2 ratified; the
freeze lifted). Here the condition was **abolished by a later amendment in the same document**, and
the criterion text was not re-read against it. **An amendment can strand a clause elsewhere in the
same file it is amending.**

### ⭐⭐ FINDING 3 — AC4's criterion and AC4's own amendment row give **opposite instructions**, and the conflict is live today

`AC4`, criterion-level. **This is the one that needs an operator, not an agent.**

| Source | Instruction when Vitruvius has not answered |
|---|---|
| **AC4, the signed criterion** | **Proceed** — transcribe, name the source and date, report as a gap |
| **AC4's amendment row**, same document | **Halt** — *"**do not build B2 before that answer**, or the provenance chain gets hashed to a class we were never assigned"* |

Measured at the object today: the memo `coord_2026_08_24_rosetta_to_vitruvius_profiles_are_read_not_mirrored.md` carries `ack_required: true`, was **delivered 2026-08-27** (P4.5b O4, `44c4d79`), and **there is no reply** — surface named (convention 17): both `who/coordination/` here **and**
`WebForge.aDNA/who/coordination/`, each listed `[D]`.

⇒ **P4.4b cannot be executed as written without choosing between two clauses of its own AC4**, and
neither is subordinate to the other on its face. Left unresolved, whoever runs B2 picks one silently
and the record will not show that a choice was made. **⛩ Put to the operator in §4.**

### ⭐ FINDING 4 — a visual-regression gate's real failure mode is **over-masking**, and V1 cannot see it

`AC1 × V1`, V→AC direction.

B0's deliverable includes *"masked dynamic regions"*. V1 is *"a deliberate visual diff"*. **A mask
that swallows a real region leaves V1 green forever** — the tester injects the diff wherever they
choose, and choosing a spot outside the mask proves only that unmasked pixels are compared. Nothing
tests the mask's **extent**.

⭐ This is the *instrument that degrades as its subject improves* family, at its worst: masks only
ever grow, each growth is individually justifiable, and the gate gets greener as it gets emptier.

⭐ **Remedy needs no new instrument — the campaign ratified the discipline five days ago.**
`gate-48` already holds it, in its own words: *"THE EXCLUSIONS ARE PART OF THE CLAIM AND ARE
ASSERTED, NOT ASSUMED"*, with **G48d pinning the exclusion arithmetic** so the excluded set *"cannot
quietly grow"*. Apply the same shape to masks: every mask is enumerated with its reason on the
gate's face, and the masked-area arithmetic is pinned.

### ⭐ FINDING 5 — V4 cannot distinguish a **wired** instrument from an **inert** one

`AC2 × V4`, AC→V direction.

AC2 requires the field instrument be *"CHOSEN, **WIRED INTO THE APP** AND SHIPPED IN THE TREE"*.
V4 tests *"field instrument **shipped-in-tree**"*. A `web-vitals` import sitting in a module no
layout includes is shipped, passes V4, and collects nothing. ⚠ Measured: **`web-vitals` is not
currently a dependency** of `site/package.json` `[D]`, so this is built from zero and the wiring is
exactly where it can silently not happen.

⭐ **The campaign has been bitten by this precise shape twice.** P4.2: font-weight tokens whose own
comment claimed they *"replace the scattered literal 400/500/600/700"* had reached **2 of 15 files**
— *a migration announced in a comment is not a migration*. And the `aria-live` residue: the region
exists and *"nothing asserts it stays wired."*

**Remedy — zero new instruments.** V4 asserts the instrument **emits**: one page load, one collected
metric observed. That is a Playwright assertion in a suite that already runs 633 of them.

### ⭐ FINDING 6 — AC3's *"fails loudly"* is tested by nothing

`AC3 × V3`, V→AC direction.

AC3 requires a sweep that is **budget-failing**, *"failing loudly into CI"*. V3 is *"one scheduled
sweep run."* **A run that passes proves the sweep executes; it proves nothing about what happens
when a budget is breached.** Same class as FINDING 1 — a limb that cannot see its criterion's
distinguishing claim — arriving on a second criterion.

**Remedy — zero new instruments.** V2's breach already exists; point it at the sweep budget as well
as the CWV budget, and **label which criterion each limb asserts** (FINDING 7).

### ⭐ FINDING 7 — the V-limbs are **unlabelled**, so V→AC cannot be answered from the field at all

`verification_method`, field-level. **This is the structural one.**

P5.1's limbs each carry an explicit tag — `[asserts AC-1]`, `[asserts AC-P, AC-4]`. P4.4b's do
not. The four are listed in an order that does **not** correspond to AC1–AC4 (the second limb,
*budget breach*, belongs to **AC4**; the fourth, *field instrument*, belongs to **AC2**), so the
mapping must be **inferred** — and two readers will infer differently.

⭐ **A pass cannot ask "is this criterion tested by anything" against a field that never says what
anything tests.** This is upstream of FINDINGS 1, 5 and 6: each is a limb-to-criterion mismatch, and
all three were only visible once the mapping was written out. **An unlabelled limb is how a partial
pass reads as complete** — convention 13's own amendment, one level down.

**Remedy — free.** Tag each limb `[asserts AC-n]`, as P5.1 and P4.5b already do.

### ⭐⭐ FINDING 8 — B2 **fuses two reachability classes**, so the half with no dependency is blocked by the half that has one

`AC3 × AC4`, both directions.

B2 is a single objective: *"Unlighthouse scheduled sweep over the CI-built artifact **+ budget
config**"*, and its gate column is **⊳ D-E (Vitruvius)**. But:

- the **sweep** (AC3) runs over the **CI-built artifact**, explicitly *"no freeze dependency"*, and
  needs **nothing from Vitruvius**;
- the **budget provenance** (AC4) is the half that waits.

⇒ **The sweep is transitively blocked by a question it does not depend on.**

⭐ **And the remedy is this mission's own precedent, one level down.** P4.4 was split into P4.4a/b
on exactly this principle, stated in this file: *"**the split line is REACHABILITY, not topic**, so
P4.4a cannot be blocked and P4.4b's blockers are visible on its face instead of discovered at
execution."* B2 fuses on **topic** (both are "performance CI") the way the original P4.4 did.
Split it the same way: **B2a** = the sweep, no dependency · **B2b** = budget provenance, gated.

### ⚠ FINDING 9 — three stale lines in the mission file, all of the *index-vs-artifact* class

Each contradicted by the object, and each corrected strike-not-delete (SO-6):

| Line | Says | Measured `[D]` |
|---|---|---|
| `status:` qualifier | *"every criterion waits on an actor outside the session"* | **False for AC1, AC2, AC3.** Only AC4 has a live external dependency. |
| same, *"lemur's push"* | a blocker | **Discharged** — freeze lifted 08-25; prod serves both writers' work |
| same, *"the operator's dashboard"* | a blocker | **Never bound the build** — AC2 was *replaced in the same sitting* to be met **ON-BUILD**, reading named as owed. **The blocker line and the amendment contradict each other and were written the same day.** |
| B2's gate column | *"the ask is **STAGED**, not delivered"* | **Delivered 2026-08-27** (`44c4d79`) |

### ⚠ FINDING 10 — AC1's baselines are the one artifact where an instrument defect becomes **permanent**

Execution hazard, named so B0 does not discover it by flake.

Every other gate in this suite is re-derived each run. **A baseline is not** — it is captured once
and everything after is compared against it. Bake a wrong-theme baseline and every future diff is
measured against the wrong picture, silently and forever.

**This campaign has produced that exact defect twice.** P4.1: a capture script set only Playwright's
`colorScheme` and produced *"a dark screenshot under a light filename"* — the site's theme is a
`.dark` class on `<html>`, not a media preference. P4.2: an ad-hoc axe probe class-toggled the theme
and reported **71 phantom nav failures**. And P4.3: `addInitScript` **silently did not apply** a
200 % root font-size, so *"15 routes 'passed' a transform that never happened"* — **the very API the
correct pattern uses can fail open.**

Verified at the object, so B0 reuses the pattern rather than reinventing it:
`BaseLayout.astro:74–76` — dark is default; light is `localStorage.theme = 'light'` applied via
`classList.toggle('dark', dark)`. `gate-4-a11y.spec.ts:73–80` is the working seed:
`{ name: 'light', seed: () => localStorage.setItem('theme', 'light') }` via `page.addInitScript`.

⇒ **B0 needs a theme control on baseline capture** — assert each captured baseline's theme matches
its filename before it is committed. P4.1's luminance control is the precedent and it already
caught this class once.

### ⚠ FINDING 11 — the freshness date is a **confirmed** dynamic region, not a hypothetical one

`src/utils/contentSource.ts:63 lastUpdated()` derives a per-page date **from git**, rendered through
`DocumentationLayout` across the `learn/concepts`, `learn/tutorials`, `learn/comparisons`,
`how/publishing` and `patterns` route families `[D]`. Any of AC1's ~12 templates drawn from those
families carries a region that **changes on the next commit touching that file**.

Named here rather than left to be discovered as flake — and it is also the concrete case that makes
FINDING 4's mask discipline load-bearing rather than theoretical.

### ✅ FINDING 12 — the control: AC1's container substrate is already in place

Not a defect — recorded because a clean result is a result. `.github/workflows/gates.yml` already
runs `mcr.microsoft.com/playwright:v1.59.1-noble` `[D]`, so AC1's *"red-test runs in the same
container that generated the baselines"* amendment adds a **snapshot project** to
`site/playwright.config.ts` (**one** `chromium` project today `[D]`), **not a CI substrate**.
The 08-24 amendment predicted this; the prediction held.

---

## §3 — Rulings requested

> Recorded here rather than only in the mission body, **because §3 is what a later mission cites**,
> and this campaign's own finding is that a routing claim must be verified in its destination and
> never in the prose that routed it.

| # | Ruling |
|---|---|
| **1** | **AC4's conflict (FINDING 3)** — *proceed under the interim clause* or *halt B2b until Vitruvius answers*? ⛩ **Operator's; see §4.** |
| **2** | **B2 splits into B2a (sweep, unblocked) / B2b (budget provenance, gated)** on the reachability line — the P4.4a/P4.4b precedent one level down (FINDING 8). |
| **3** | **AC4's interim clause is re-keyed** from *"if the mirror has not landed"* (an event that can no longer occur) to *"if Vitruvius has not answered"* — strike-not-delete (FINDING 2). |
| **4** | **The three stale lines are corrected in this session's commit**, same-diff with the campaign `CLAUDE.md` index line carrying the same claim (FINDING 9, convention 7). |
| **5** | **No new instrument is authored at this gate.** Every remedy above reuses an existing mechanism — gate-48's exclusion discipline, P4.4a's red-test matrix, gate-4's theme seed, P4.1's luminance control. Conventions 15/16/17 each ruled against authoring an instrument at the tail of a sitting, and **three of this desk's last four instrument defects are why**. |

## §4 — ⛩ The one question that is the operator's

**AC4's criterion says proceed; AC4's own amendment row says halt.** Both are signed, in the same
document, and the condition that separates them is live *right now*.

- **(a) HALT B2b** until Vitruvius answers. Faithful to the amendment row's reasoning — *the
  provenance chain gets hashed to a class we were never assigned.* Cost: AC4 does not close in this
  increment, and P4.4b closes with **AC4 named as owed** (the P3.3-O3 / P4.1-AC5 / AC2 precedent,
  used three times in this campaign already). ⚠ There is **no reply deadline** and no second actor,
  so this is an open-ended hold on a criterion.
- **(b) PROCEED under the interim clause** — transcribe, **name the source and the date**, report as
  a **gap, never as adoption**. Faithful to the criterion's own text. ⚠ **But the interim clause is
  not currently satisfiable as written**: A3 measured our bars **un-sourced, not transcribed** — the
  CWV *Good band* over slim desktop fixtures, read from nothing — so *"names the source it was
  transcribed from"* has **no source to name**. Choosing (b) therefore also means choosing which
  class our bars are declared against, which is the very act (a) exists to avoid.
- **(c) SPLIT the difference** — build **B2a** (the sweep) now under ruling 2, and hold **B2b**
  under (a). ⭐ **This is what ruling 2 makes possible and it is the recommendation**: it unblocks
  everything that has no dependency, and leaves exactly one criterion waiting on exactly one actor,
  visible on the mission's face rather than discovered at execution.

⚠ **Note what (b) and (c) do NOT resolve either way**: **the bars remain un-sourced** (F-e's live
residue), and **Perf ≥ 90 is LOOSER than WebForge's `content_static` 95** — the direction their
`ratchet_law` reserves for an operator gate. AC4 does not close that by hashing anything.

## §5 — Proposed criteria changes

Superseded wording **struck, not deleted** — it survives in git history and in the table below, so
anyone citing the old text can see what replaced it and why.

| AC | Change | Finding |
|---|---|---|
| **AC1** | + *"the mask set is **enumerated with a reason per mask on the gate's face**, and the masked-area arithmetic is **pinned** (the `gate-48` / G48d discipline)"* · + *"baseline capture carries a **theme control**: each baseline's theme is asserted to match its filename before commit"* | 4, 10, 11 |
| **AC2** | + *"…and the instrument is demonstrated to **emit** at least one collected metric on a page load — **shipped is not wired**"* | 5 |
| **AC3** | + *"the co-run prohibition is **enforced**, not stated — a CI `concurrency:` group, the mechanism `gates.yml` already uses"* | see below |
| **AC4** | ~~*"If ⊳ D-E's **mirror** has not landed…"*~~ → *"If **Vitruvius has not answered**…"* · the halt-vs-proceed conflict resolved per §4 | 2, 3 |
| **V1** | + *"…and the mask arithmetic is red-proven: **widening a mask past its pinned budget goes red**"* `[asserts AC1]` | 4, 7 |
| **V2** | + *"…**and a bar edited by hand goes red**"* — the provenance mutation, not only the breach `[asserts AC3, AC4]` | 1, 6, 7 |
| **V3** | *one scheduled sweep run* `[asserts AC3]` — unchanged in substance, **labelled** | 7 |
| **V4** | + *"…**and emits**"* `[asserts AC2]` | 5, 7 |
| **B2** | **splits** → **B2a** (sweep, no dependency) · **B2b** (budget provenance, ⊳ D-E) | 8 |

⚠ **AC1 × AC3 (FINDING 6's sibling) — a constraint stated in prose with no gate.** Both criteria
say the two lanes *"MUST NOT co-run"*; **nothing enforces it**, and the failure mode is *flaky
visual diffs*, which read as real regressions. This campaign named that class three days ago at
P4.3's close — *a deferral recorded only in narrative is a deferral with no gate*. Remedy uses the
mechanism already in the tree: `gates.yml` line 32 carries `concurrency: group: gates-${{ github.ref }}`.

## §6 — The 26-pair table

`✅` clean · `❌` defective · direction that found it in brackets.

| | V1 | V2 | V3 | V4 | V5 |
|---|---|---|---|---|---|
| **AC1** | ❌ **F4** [V→AC] | ✅ | ✅ | ✅ | ✅ empty |
| **AC2** | ✅ | ✅ | ✅ | ❌ **F5** [AC→V] | ✅ empty |
| **AC3** | ✅ | ✅ | ❌ **F6** [V→AC] | ✅ | ✅ empty |
| **AC4** | ✅ | ❌ **F1** [both] | ✅ | ✅ | ✅ empty |

| AC × AC | AC2 | AC3 | AC4 |
|---|---|---|---|
| **AC1** | ✅ | ❌ **co-run, ungated** | ✅ |
| **AC2** | — | ✅ | ✅ |
| **AC3** | — | — | ❌ **F8** [both] |

**20 clean · 6 defective**, re-derived by counting the marks above rather than carried from §1.
**Three of the six were found by the V→AC direction alone** — the third mission running.

## §7 — Budget, for ⛩ re-ratification (SO#11 / ADR-016)

**Ratified 2026-08-24: ~250–400 kT / 2 sessions.** Proposed: **~330–520 kT / 3 sessions**.

| Increment | Band | Note |
|---|---|---|
| B0 — visual-regression lane | ~150–220 kT | the bulk: snapshot project, 12 templates × 2 themes, enumerated masks + pinned arithmetic, theme control, in-container red-test |
| B1 — field instrument, wired **and emitting** | ~40–70 kT | `web-vitals` is not yet a dependency |
| **B2a** — sweep over the CI artifact | ~60–100 kT | **no external dependency** (ruling 2) |
| **B2b** — budget provenance | ~50–80 kT | ⛩ **gated on §4** — excluded from the band entirely under (a)/(c) |
| B3 — close `idea_visual_regression_gate`, runbook, AAR | ~30–50 kT | |

The raise is **≈1.3×** and modest on purpose. ⭐ **Nothing here adds a feature**: the increase is
three red-test mutations, the mask discipline, the theme control, and the B2 split. Contrast
P4.4a's **2.4×** re-raise, which was real new work. **Under (a) or (c) the band is ~280–440 kT**,
because B2b leaves it.

⛔ **Named so it is not discovered as an overrun**: if AC1's baselines need regenerating after a
mask or theme correction, that is a **re-capture of all 24 images**, and it is inside B0's band
**once**, not repeatedly.

**`executor_tier`** — P4.4b stays declared **`sonnet`**; this pass ran **`opus`** and said so at its
session open rather than at the AAR. ⚠ B0's mask-and-theme judgement is **not** mechanical work; if
it runs `opus`, the declaration moves **before** the session, not after. *A declared tier nobody
honours is worse than none* (P4.1's AAR).

## §8 — What this pass did NOT do

- **No build.** No `site/` file changed. No instrument authored (ruling 5).
- **No criterion was ticked**, amended in place, or ratified. This document is `proposed`.
- **The un-sourced bars (F-e) are not closed here** and are not closed by AC4 either — said plainly
  because AC4's amendment already warned that hashing the wrong object would reproduce DEFECT-4 one
  layer in.
- **The suite was re-run at a NAMED SCOPE, not in full, and the scope is the interesting part.**
  ✅ **68 assertions green** across **the four gate classes that read vault files** — `gate-26`
  (claim register) · `gate-35` (registry tiers) · `gate-37` (proposal process) · `gate-41` (derived
  counts, incl. G41d's MANIFEST↔STATE drift). The remaining classes read `dist/`, and
  `git diff -- site/` is **empty** `[D]`, so nothing this session did can move them.
  - ⭐ **The scope was WRONG on the first attempt, and it was wrong in the exact way P5.1 had just
    been wrong.** This desk ran `gate-41` alone — reasoning that it was *the* vault-reading gate —
    then checked, and found **four**. P5.1's session two commits ago concluded *"the suite is
    structurally unchanged"* from an empty `site/` diff and was contradicted by `gate-41` reading
    vault frontmatter. ⇒ **convention 16's law — *a negative result is only as wide as the command
    that produced it* — breached one step after quoting it, by the desk that quoted it, for the
    second sitting running.** What caught it was cheap and mechanical: **grep for the gates that
    read outside `site/` rather than recall which ones do.**
