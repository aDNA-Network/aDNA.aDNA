---
type: artifact
artifact_class: design_spike
created: 2026-08-19
updated: 2026-08-19
status: active
campaign_id: campaign_haussmann
mission: mission_haussmann_p2_4_registry_redesign
objective: O1
last_edited_by: agent_rosetta
tags: [haussmann, p2_4, registry, tiers, spike, scale, ranker]
---

# P2.4 O1 — registry spike, the 10× test, and the finding that changes the question

> **⛩ RULED 2026-08-19 — variant A, and the 740 mechanism deferred.** See §⛩ RULED near the foot of
> this file for what was decided and why. The record below is left exactly as it stood *before* the
> ruling: three variants built over the real registry, headless-verified, measured at 10×, with the
> structural finding that turned the pick into **two decisions, not one**. A spike record that gets
> rewritten to agree with the decision it informed stops being evidence.

## What was built

`build_registry_comps.mjs` → `registry_comps.html` — three browse-surface variants over all **74**
real rows, plus a **740-row** synthetic mode. Every number in the comps is derived from
`vaults.json` at build time; the generator **throws on an empty registry** rather than rendering
three identical empty surfaces that would look fine. Tiers follow **ADR-052 §tiers.3** (from
`status` alone — `card_present` disqualified at §tiers.1).

| | Variant | Shape |
|---|---|---|
| **A** | tier-first | Three groups — in use (7) · chartered (10) · planned (57). Full cards throughout. Puts the load-bearing seven first and lets the shape of the network be the first thing a stranger sees. |
| **B** | class-first | Today's structure, evolved: 14 class groups, now with tier badges and a tier facet. Smallest change; preserves the existing mental model. |
| **C** | density | Density tracks tier — full cards for the 7, medium cards for the 10, a dense table for the 57. The render cost of a row tracks the value of the row. |

**Headless verification** (`verify_comps.mjs`): **23 assertions, 0 failures** — at both 74 and 740,
each variant renders every vault exactly once, every row carries a tier badge, C's planned tier
renders exactly 57 dense rows, each header states the count the registry actually holds, and zero
console errors.

## 🔴 The finding: none of the three solves 10×, and C's density advantage is not real

`measure_scale.mjs`, 1280×900 viewport `[D]`:

| Variant | 74 rows | 740 rows | height ×  | DOM nodes × |
|---|---|---|---|---|
| **A** tier-first | 2,279 px · 610 nodes | **18,896 px** · 5,938 | ×8.3 | ×9.7 |
| **B** class-first | 3,697 px · 651 nodes | **19,327 px** · 5,979 | ×5.2 | ×9.2 |
| **C** density | 2,172 px · 589 nodes | **17,974 px** · 5,665 | ×8.3 | ×9.6 |

**C was designed to be the one that scales, and at 740 it is 5% better than A.** That is noise, not
an architecture. The reason is arithmetic and it applies to all three: at 10× the planned tier holds
~570 rows, and 570 dense table rows at ~30 px each is ~17,000 px on its own. **Density reduces the
cost per row; it does nothing about the number of rows.** Every variant converges on "a reader
scrolls about nineteen thousand pixels."

So the mission's acceptance criterion — *"the browse experience at 740 synthetic rows"* — **is not
met by any of the three as drawn**, and no amount of choosing between them meets it. Recorded as
unmet rather than declared satisfied because the page rendered without falling over.

**What would actually meet it** is a mechanism orthogonal to the grouping choice: pagination, a
default-collapsed planned tier, or virtualization. **That is a separate decision from A/B/C**, and
it is not urgent — at today's 74 rows all three sit between 2.2k and 3.7k px, which is a normal
page. The 740 case is a hypothetical the mission asked us to test, and the honest result of the test
is *"this design question does not answer that problem; here is the one that would."*

## Synthetic pre-screen — `[D-syn]`, NOT a verdict

**Conflict declared.** The agent that built these variants also scored them. Per campaign convention
4 (the builder never self-certifies) and the P2.1 precedent, what follows is a **disclosed synthetic
pre-screen**, not a ranker result, and it cannot discharge the mission's `ranker ≥4.0` criterion.
Recorded with its instrument so a later run is comparable (register §7.6).

**Instrument**: single synthetic rater, 4 dimensions, 1–5. Personas not varied — a real ranker run
varies them, and this does not, which is the main reason to distrust the aggregate.

| Dimension | A | B | C |
|---|---|---|---|
| Answers "what is load-bearing here?" | 4.5 | 2.5 | 4.5 |
| Survives a hostile read | 4.0 | 4.0 | 3.5 |
| Continuity with today's surface | 3.0 | 4.5 | 3.0 |
| Legibility at 74 | 4.0 | 3.5 | 4.5 |
| **Mean** | **3.88** | **3.63** | **3.88** |

**No variant clears 4.0**, and the pre-screen **declines to separate A and C** — they tie, exactly
as P2.1's comps did, and for the same structural reason: they are near-mirrors, differing in card
density rather than in what they tell a reader.

One dimension is worth reading on its own. **C scores lowest on "survives a hostile read"** because
its own design invites a question it cannot answer: rendering 57 vaults as compact table rows beside
7 full cards reads as a *ranking*, and the tier it is ranking by is **self-declared** (§tiers.2).
A hostile reader asks "who decided these seven matter?" and the honest answer — "they did" — lands
worse in C's layout than in A's, where the groups are visually equal and only the labels differ.

## What the pick is

**Decision 1 — grouping (A / B / C).** Live, and the pre-screen genuinely does not settle it.
- **A** shows the network's real shape first and treats the tiers as equal citizens.
- **B** is the cheapest change and the least disruptive to anyone who knows today's site.
- **C** is the most scannable at 74 and the most vulnerable to the "who decided?" question.

**Decision 2 — the 740 mechanism.** Pagination · default-collapsed planned tier · virtualization ·
or **explicitly defer**, on the grounds that 74 is the real number and 740 is a stress test that
found a real limit but not a present problem. **Deferring is a legitimate answer** and would be
recorded as such — the criterion stays unmet either way, and unmet-and-known beats met-on-paper.

## ⛩ RULED — operator, 2026-08-19 (in-chat, at the session that opened P2.4 O2)

Both decisions were put and both were answered.

**Decision 1 — grouping: `A` (tier-first).** The pre-screen tied A and C at 3.88 and neither cleared
4.0, so this was judgment, not a score. The reasoning on the record: A is the variant whose layout
makes no claim the data cannot support. C's density gradient — full cards for 7, a table for 57 —
reads as a *ranking*, and the thing it ranks by is self-declared (§tiers.2); a hostile reader asking
"who decided these seven matter?" gets the honest answer "they did," which lands worse in C's layout
than in A's, where the groups are visually equal and only the labels differ. On a site whose whole
thesis is that claims move down to verifiability, that is the deciding difference. B was not in
contention on the merits — it scores 2.5 on "what is load-bearing here?" because it leaves the seven
in-use vaults scattered across fourteen class groups, which is the exact problem the mission exists
to fix.

**Decision 2 — the 740 mechanism: explicitly defer.** `scales at 10×` is recorded **UNMET**. The
three candidate mechanisms (pagination · default-collapsed planned tier · virtualization) are named
in **ADR-052 §tiers.7** with their trade-offs and a revisit trigger (~150 rows, or P3.2, whichever
is first), so the option set is inherited rather than rediscovered. Nothing is built for it here.

**Not put to this gate**: §tiers.6 (77-vs-74). It is an admission ruling needing Hestia's data pass,
and staging it as a memo ask rather than forcing it at a design gate was the right call.

## Artifacts

| File | |
|---|---|
| `build_registry_comps.mjs` | generator — derives every count; throws on an empty registry |
| `registry_comps.html` | the three variants × two scales (six panes) |
| `verify_comps.mjs` | headless verification — 23/0 |
| `measure_scale.mjs` | the 10× measurement + captures |
| `captures/variant_{A,B,C}__74.png`, `captures/variant_{A,C}__740_top.png` | what the operator looks at |

Read-only on the registry throughout. **pt19 honored: no `sync:vaults`, no hand-edit of
`vaults.json`**; the 740 rows are synthetic, named `Synthetic<n>`, and exist only in memory.
