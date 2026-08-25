---
type: artifact
created: 2026-08-24
updated: 2026-08-24
status: active
last_edited_by: agent_rosetta
campaign_id: campaign_haussmann
mission_id: mission_haussmann_p4_1_token_pipeline
tags: [artifact, haussmann, p4, p4_1, o3, ranker, visual_voice, adr_053]
---

# P4.1 O3 — ranker record (the three surfaces O2 changed)

> **Recorded in full, in the shape of `artifacts/p2_2/ranker_record.md`, so the two are comparable.**
> P1.2's marquee finding was a 3.61 that proved **not reproducible** — it logged neither its persona
> set nor three of its six dimensions. The lesson: *an unrecorded measurement decays into a claim.*

## Why this runs here and not at O2

Convention 13's coverage pass at the O2 close recorded **V6 (persona ranker ≥4.0) as UNRUN and O3's**,
explicitly so that O3 could not inherit an unstated obligation. Three surfaces changed at O2; this is
the run that discharges them.

## Instrument

| Field | Value |
|---|---|
| **Skill** | `how/skills/skill_decadal_aar.md` §Persona Ranker Dimensions |
| **Dimensions (6, canonical)** | Findability · Comprehension · Actionability · Trust · Relevance · Delight |
| **Personas (5, canonical adopter set)** | Solo Dev · Educator · Enterprise · Researcher · Startup |
| **Scale** | 1–5 integer per cell; dimension score = mean across the 5 personas; surface score = mean of 6 dimensions |
| **Gate** | **≥4.0 per surface** — campaign-level, per the amended `verification_method` (*"persona ranker ≥4.0 on any surface changed"*) |
| **Stimulus** | `artifacts/p4_1/captures_o2/` (26 frames: 3 surfaces × 3 viewports × both themes, the `zero_result` pair, and the axe sub-sweeps) + the built pages in `site/dist/`. **See the capture-estate note below — 5 frames are committed, 21 are ignored-and-regenerable.** |
| **Build under test** | `site/dist/` at `2026-08-24T01:32`, built from `site/src` at commit **`9608820`** — the working tree carries no `site/` modification, so the captures and the dist are the same source state |
| **Reviewer bench** | **Not invoked.** `skill_decadal_aar` §Step 4b makes it optional and reserves it for decadal cycles; this is a mission-level run. Recorded as a **deliberate omission, not a silent one.** |
| **Provenance** | **`[D-syn]`** — disclosed synthetic instrument. See the conflict declaration below. |

### Capture estate — what a reader following this record will actually find

Per the campaign's evidence-artifact policy (`.gitignore` §HAUSSMANN, from Refit M4/DP5), applied in
its **dangle-safe order**: the frames a committed doc *argues from* are held by **explicit negation**;
the uncited sweep frames are ignored. **Committed (6 frames):** `vaults__desktop__light` ·
`vaults__desktop__dark` · `get-started__desktop__light` · `zero_result__desktop__light` ·
`zero_result__desktop__dark` · `design-system__desktop__dark`. **Also committed:** all three provenance
JSONs (`capture_report` / `axe_dark` / `axe_light`). **Ignored (20 frames) and regenerable** —
unlike the F-s outage set, the build these capture is `site/dist` from `site/src` at commit
**`9608820`**, which *is* committed:

```
node scripts/visual_capture.mjs --base http://localhost:4321 \
  --routes /vaults/,/design-system/,/get-started/ \
  --viewports mobile-lg,tablet,desktop --themes dark,light --axe --out <out>
```

⚠ **Deriving that set needed THREE corrections, all instrument defects, and the third was found only
because the second was.**

1. **A basename grep reported five *other* frames as "cited."** The same filenames exist in
   `captures_p2_2`, `evidence/scoring/` and the storyweave estate — **a bare basename cannot say which
   directory a citation means.**
2. **The `git check-ignore` loop printed five green ✓ marks while `git` was not on PATH.**
   `command not found` took the `||` branch, so **the check reported success because it had never
   run.** Re-run against `/opt/homebrew/bin/git`, the negations did hold.
3. ⭐ **And the re-run was *still* falsely clean.** `git check-ignore` **does not report tracked files
   by default** — the files had just been `git add`ed, so staging hid the very state the check existed
   to find. Under `--no-index` it fired immediately: **`zero_result__desktop__dark.png` was COMMITTED at
   O2 while the new pattern said ignore it** — precisely the policy's own named inverse trap, committed
   by the block written to avoid it. Negated; all 9 tracked captures now verify clean, and 3 sampled
   uncited frames still ignore.

⇒ **Two greens in a row meant "the command did not run" and "the command could not see."** Convention
14's rule — *an instrument is not believed until it has been demonstrated to fail* — in its purest
form: **verify ignore rules with `--no-index`, and never accept a pass from a loop whose failure branch
is indistinguishable from a missing binary.**

### ⚠ Conflict of interest — declared, not managed away

**The agent that built O2's `empty_state` slot is the agent scoring the surfaces it changed.** Campaign
convention 4 states *"the builder never self-certifies"*, and this run violates the spirit of it, in
exactly the way P2.2's did. P1.2 established the sharper form: **the author of a checkability claim is
structurally the worst auditor of it.**

Two things follow, and neither is a workaround:

1. This score is a **pre-screen**, in the sense the campaign's provenance vocabulary defines `[D-syn]`:
   *"the directly observed output of a disclosed synthetic instrument — a pre-screen stand-in, never a
   substitute for the human instruments."*
2. **It is not evidence that the surfaces are good.** It is evidence that all three clear the
   mechanical floor, that one of them clears it by **0.03**, and that a single dimension is the drag on
   all three — findings an operator can act on.

**An independent re-rank is available and is offered at the close.** ⛩ Operator ruled at this
session's open that the P2.2 precedent governs (self-run, conflict declared) rather than a bench or an
independent agent — so the offer stands open rather than being taken here.

---

## Surface 1 — `/vaults` (the registry)

*What O2 changed: the inline `empty_state` mark beside every honest-absent line on the 74 registry
cards, and a zero-result block that did not previously exist.*

| Dimension | Solo Dev | Educator | Enterprise | Researcher | Startup | **Avg** |
|---|---|---|---|---|---|---|
| Findability | 4 | 4 | 4 | 5 | 4 | **4.2** |
| Comprehension | 4 | 5 | 4 | 4 | 4 | **4.2** |
| Actionability | 3 | 3 | 4 | 4 | 4 | **3.6** |
| Trust | 5 | 5 | 5 | 5 | 4 | **4.8** |
| Relevance | 4 | 4 | 4 | 4 | 3 | **3.8** |
| Delight | 4 | 4 | 3 | 3 | 4 | **3.6** |
| | | | | | | **4.03** |

**Where the score comes from.** **Trust at 4.8 carries it, and O2 is why.** Absence on this page used
to be a blank; it is now a *marked* blank, keyed to the absence itself rather than to a vault's stage —
so a mark landing on an `in use` card is the visible proof it is not a stage badge. Alongside it the
page refuses to rank (*"these stages are self-declared"*), publishes the real counts (7 / 10 / 57 / 14),
and links `/vaults.json` for anyone who would rather check than read. Researcher findability gets the
5 for that endpoint.

**Actionability at 3.6 is the drag, and it is structural.** 57 of 74 vaults are `planned`, so a reader
who clicks through often arrives at *"no public description yet"* — honestly labelled, still a dead
end. The zero-result block is the most actionable thing on the page and it only fires when you have
already failed. **Not fixable by copy**, and not a defect of the slot.

⚠ **4.03 clears a 4.0 gate by 0.03, and that is the number, not a pass to celebrate.** A single cell
moved down anywhere on this table puts the surface below the floor. Stated here rather than rounded,
because *claims move down to verifiability* (convention 1).

## Surface 2 — `/design-system`

*What O2 changed: the "Illustration slots" section — ADR-053's five-slot table with live/not-built
status, the mark shown at both of its scales, and the four rules for applying it to a new page.*

| Dimension | Solo Dev | Educator | Enterprise | Researcher | Startup | **Avg** |
|---|---|---|---|---|---|---|
| Findability | 4 | 3 | 4 | 4 | 3 | **3.6** |
| Comprehension | 5 | 5 | 4 | 5 | 4 | **4.6** |
| Actionability | 5 | 4 | 4 | 4 | 4 | **4.2** |
| Trust | 5 | 5 | 5 | 5 | 4 | **4.8** |
| Relevance | 5 | 4 | 4 | 3 | 3 | **3.8** |
| Delight | 4 | 4 | 3 | 3 | 4 | **3.6** |
| | | | | | | **4.10** |

**Where the score comes from.** This is the surface that answers the mission's *definition of done* —
*"a documented, extensible system a contributor could apply to a new page."* The four rules are
concrete enough to follow without asking (write the sentence first; show it where something is actually
missing, never keyed to stage; credit once per page not once per mark; check both themes), and the
status column says **"Not built" twice out of five** rather than implying a finished program.

**Trust at 4.8 rests on a mechanism, not a promise**: the page states that the marks it displays are
*the same file the registry renders — imported, not copied*, so the documentation cannot drift from the
thing it documents. That is the strongest available answer to the self-certifying-artifact problem.

**Findability at 3.6 is the honest weak point** — a 5,584 px reference page reached mainly from the
footer, with **no in-page table of contents and no left nav**, unlike `/get-started`, which has both.
**Relevance at 3.8 is structural**: a design-system page is simply not aimed at 3 of the 5 canonical
personas, and no amount of craft changes that.

## Surface 3 — `/get-started`

*What O2 changed: the per-artifact `credit` caption beneath the hero — the additive `credit` field on
`DocumentationLayout`'s existing `heroImage` prop, exercised literally so it does not ship unexercised.*

| Dimension | Solo Dev | Educator | Enterprise | Researcher | Startup | **Avg** |
|---|---|---|---|---|---|---|
| Findability | 5 | 4 | 4 | 4 | 5 | **4.4** |
| Comprehension | 5 | 5 | 4 | 4 | 5 | **4.6** |
| Actionability | 5 | 5 | 4 | 4 | 5 | **4.6** |
| Trust | 5 | 5 | 4 | 5 | 5 | **4.8** |
| Relevance | 5 | 4 | 3 | 4 | 5 | **4.2** |
| Delight | 4 | 4 | 3 | 3 | 4 | **3.6** |
| | | | | | | **4.37** |

**Where the score comes from.** The strongest of the three, and mostly not because of O2 — this page
was already the site's best-built surface. *"What this command does, before you run it"* explains every
effect **before** asking the reader to run anything; the failure modes are drawn from what the commands
can actually produce rather than from a support inbox; uninstall is one line.

**Trust at 4.8 includes a rare move**: the page keeps a labelled gap where a fabricated transcript used
to be and says so — *"we wrote it by hand, and it showed output the software does not actually print,
so we removed it rather than leave a plausible-looking invention on the page you use to decide whether
to trust us."* O2's contribution is in the same register: the credit caption names the exact generating
model and the two ADRs that govern the artwork, so the provenance of the image is checkable rather than
asserted. **Enterprise is the 4** — they would want the same provenance rigour extended to the install
script's supply chain, which this page does not yet offer.

**Relevance drops to 3 for Enterprise** for the ordinary reason that a laptop install is not their
decision surface.

---

## Result

| Surface | Score | Gate ≥4.0 | Margin |
|---|---|---|---|
| `/get-started` | **4.37** | ✅ PASS | +0.37 |
| `/design-system` | **4.10** | ✅ PASS | +0.10 |
| `/vaults` | **4.03** | ✅ PASS | **+0.03** |

**All three surfaces clear the gate.** Scored **separately and not averaged** — an average of 4.17
would have let `/vaults` hide behind `/get-started`, and the per-surface margin is the finding.

## ⭐ The finding — Delight is 3.6 on all three surfaces, with the *identical* persona vector

Every surface returned `4 · 4 · 3 · 3 · 4` on Delight. An identical vector across three unrelated pages
is exactly the shape of a **lazily-scored dimension**, and it deserves to be treated as suspect before
it is treated as a result. Interrogated, it is not laziness — **it is ADR-053's containment rule
showing up in the measurement**:

> art lives in named slots; all other chrome stays Tokyo-Night type-and-colour, in both themes.

All three pages are therefore structurally the same object as far as delight is concerned — **one
illustrated hero, and restraint everywhere else.** The rule that makes the visual voice governable is
the same rule that caps this dimension, and it caps it **identically**, because it applies identically.

Two consequences worth carrying:

1. **This is a designed trade, not a regression.** Option (b) at DP8 — *"reduce to an accent"* — would
   have pushed Delight lower still by removing nine live surfaces. The ceiling is the price of
   containment and the operator bought it knowingly.
2. **It bounds what the remaining slots can do.** `vault_card_mark` and `graph_frame` are the two
   unbuilt slots, and they are the only sanctioned places this dimension can move without amending
   ADR-053. Anyone reading a future *"raise Delight"* objective should read it as *"build a slot"*, not
   as *"decorate a page"* — the second is forbidden by the rule the first obeys.

⚠ **The instrument cannot separate "capped by design" from "under-delivered within the cap."** A
5-persona synthetic pre-screen scoring three pages that share one design rule will return one number
for all three whether the rule is being executed well or poorly. **That distinction needs the human
instrument at P5.1**, and this record is not a substitute for it.

## Secondary finding — the two structural drags are the same shape P2.2 found

`/vaults` Actionability **3.6** and `/design-system` Relevance **3.8** are both *"the page is doing the
thing it is for, and that thing does not serve three of five personas."* P2.2 recorded the identical
shape at Actionability 3.4 on a use-case comp: **structural, not fixable by copy.** Third instance in
this campaign. It is worth noting that the ranker keeps finding this and the campaign keeps declining
to chase it — which is the correct response, and is only legible because the records are comparable.

## What this record does NOT establish

- **Not that the surfaces are good** — that all three clear a mechanical floor, one of them barely.
- **Not a human judgement.** `[D-syn]`, pre-screen, scored by the agent that built the thing scored.
- **Not a live-surface measurement.** The stimulus is the **local build**; ⛔ O2 is **not deployed**
  and the deploy freeze stands. Nothing scored here is what `adna.network` currently serves.
- **Not comparable to P2.2's 4.03/Option A.** That was a *comp* under a design decision; this is a
  *shipped build*. Same instrument, different stimulus class — do not read the near-identical numbers
  as a trend.
