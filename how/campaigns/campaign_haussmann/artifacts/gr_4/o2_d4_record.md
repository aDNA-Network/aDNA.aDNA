---
type: evidence
title: "GR-4 O2 — D4 on /commons: the census before/after, and the presence limb that was missing"
campaign: campaign_haussmann
mission: mission_haussmann_gr_4_story_coverage
objective: O2
criteria: [AC-4, AC-7]
limbs: [V3]
created: 2026-09-02
updated: 2026-09-02
status: complete
last_edited_by: agent_rosetta
tags: [evidence, haussmann, gr_4, o2, d4, ancient_dna, reading_census, gate_54]
---

# O2 — D4 reaches `/commons`

**`AC-4` ✅ · `AC-7` ◐ PARTIAL · `V3` ◐ PARTIAL.**

⚠ **`AC-7` IS RECORDED AS PARTIAL, AND AN EARLIER DRAFT OF THIS LINE SAID ✅.** AC-7 is a
**mission-level** criterion, not an objective-level one: it also requires **R-124's disposition read
back IN the register** (AC-8's, hence O5's) and the **AAR** (O5's, SO#5). What O2 discharges is its
own share — the claim set enumerated from the diff with the enumeration asserted (§17.1), every count
derived by its own command, and `token_budget_actual` recorded at the time rather than reconstructed.
⇒ *an objective cannot tick a criterion whose scope is the mission*, and marking it ✅ here would have
made the close cascade read as owing less than it does.

## 1. What was measured, and on which surface

⛩ **Convention 18 — every instrument names what it ran against, and whether that is the surface the
claim is about.**

| Claim's verb | Surface | Instrument |
|---|---|---|
| *"a reader encounters the disambiguation"* | the **`.md` twin**, `dist/commons.md` | `gate-54` G54i/G54j |
| *"the page's prose reading level"* | the **local** `dist/`, both readings | `reading_census.mjs` |
| *"this repo authors it"* | `src/pages/commons.astro` | the diff (AC-7's enumerator) |

⚠ **HAZARD-2 honoured.** The census measures the local build, **never production**. Before and after
are both local, on builds of the same tree ± this increment. A before from prod and an after from
`dist/` would be *two instruments sharing one number* — B2a's finding, which this campaign has
already paid for once.

## 2. The census — before and after, same surface, same command

`npx astro build` (never `npm run build`, convention 6) → `node site/scripts/reading_census.mjs`
**from the repo root** (HAZARD-1).

| Route | before | after | Δ | target | verdict |
|---|---|---|---|---|---|
| **`/commons`** | **8.61** | **8.30** | **−0.31** | 12 | ✅ under target, headroom 3.39 → 3.70 |
| `/privacy` *(banked for O5's AC-8 while the same build was up)* | 9.43 | 9.43 | 0 | 12 | untouched this increment |
| `/reference/specification` | 12.69 | 12.69 | 0 | 12 | ⚠ over target, **pre-existing and untouched** |

`1 of 21 over target` before and after — **derived, unchanged, and the one over-target route is not
this increment's.**

### ⭐⭐ The number moved the WRONG WAY, which is the whole finding

GR-4's convention-13 pass found (**DEFECT-1**) that AC-4's substance — *the disambiguation reaches
`/commons`* — **was tested by nothing**: V3 is the reading census, and the census tests the
*constraint*. So the mission could have shipped nothing, run the census, and passed.

O2 measured what the pass predicted: **FKGL falls as prose gets shorter and simpler**, and a plain
two-sentence disambiguation lowered `/commons` by **0.31**. ⇒ V3 does not merely fail to test AC-4 —
**it moves in the reassuring direction at the exact moment AC-4 is met.** That is the signature of a
limb that gets read as confirmation. *P4.1's structural gap inverted, fifth sighting.*

## 3. The presence limb — `gate-54` G54i + G54j

**No new instrument** (conventions 15/16/17): `gate-54` already graded `.md` twins, so the assertions
went into it rather than beside it. ⚠ Its **filename is now narrower than the gate** — named on the
gate's face rather than fixed, because renaming would move a path three other files hardcode for no
assertion gained.

- **G54i** — the `/commons` twin is measurable, **and the probe reaches real text**. Coverage floor
  **derived, not typed**: the stripped twin measures **6407** chars; a pointer-block-only twin (the
  realistic collapse) measures **~671**; the floor sits at **3000**, ~0.47× the real page and ~4.5×
  the stub, so ordinary copy edits (which move it by tens) can never trip it and a collapse (which
  moves it by thousands) always does.
- **G54j** — **both** D4 terms present. *"ancient DNA"* alone is a **mention**; *"Agentic DNA"* is the
  resolution that makes it an answer.

⚠ **Link targets are stripped before matching, and that exclusion is part of the claim** (gate-48's
ratified discipline). The copy links `en.wikipedia.org/wiki/Ancient_DNA`; a naive match could be
satisfied by a URL nobody reads aloud. It cannot be here — the URL carries an underscore — but *"it
happens not to match today"* is not an assertion.

## 4. Red-test — `13 pass / 0 fail`, every case red at exactly its declared assertion

```
control 0: gate green on an unmutated tree              ✓
case 1  → G54a       walk collapses                     ✓
case 2  → G54b G54d  exclusion list grows               ✓
case 3  → G54c       D1 stripped, vendored file kept    ✓
case 4  → G54h       vendored term gone                 ✓
case 5  → G54d       D2 missing from one named home     ✓
case 6  → G54e       a graded twin cannot be measured   ✓
case 7  → G54f       graded section gutted to a mention ✓
case 8  → G54g       an exemplar thins                  ✓
case 9  → G54i       the /commons probe stops reaching text        ✓   ← new
case 10 → G54j       D4 absent from /commons entirely               ✓   ← new
case 11 → G54j       collision kept, resolution stripped ⇒ mention  ✓   ← new
control 12: gate green again ⇒ every mutation reverted  ✓
```

**Cases 9 and 10 isolate cleanly and that was verified before they were wired in** `[D]`: mutation 9
(`aDNA` → `zQNA`) leaves length and both D4 terms intact and reds **G54i alone**; mutation 10 leaves
the page's name and length intact and reds **G54j alone**.

⭐ **Case 11 is the one that earns G54j's second assertion.** It keeps *"ancient DNA"* and strips only
*"Agentic DNA"* — a naive presence check stays **green** while the reader is told only what aDNA is
*not*. Without it, the resolution half would have shipped undemonstrated: *a demonstration is only
worth what it can attribute* (GR-3's `F-z`), spent forward at authoring time.

### ⛔⛔ The harness was one character from being blind to all three

`failing_set()` matched **`G54[a-h]`**. With `G54i`/`G54j` added it would have returned the empty
string on a genuine red, and `check_case` would have reported *"NO RED — the gate did not catch the
mutation"* — **the instrument silently blind to the assertion it was extended to prove, and blaming
the subject for it.**

⚠ **This is the adoption addendum's `G53[a-f]` defect, recurring the same day in a sibling harness.**
⇒ ***A coverage floor goes stale the moment its subject grows*** — raise it in the commit that grows
it. Range widened to `a-z`.

## 5. The visual-regression same-diff obligation

`/commons` is a `gate-49` template at **`maxDiffPixels: 0`**, so this copy necessarily reds the
snapshot lane. ADR-057's same-diff law arriving at a **fixture** rather than a route.

**Confirmed before regenerating, not assumed** `[D]`:

```
2 failed   — commons [dark], commons [light]
24 passed
Expected an image 1280px by 5207px, received 1280px by 5455px
```

⭐ **All 24 baselines regenerated in-container; exactly 2 files changed** —
`commons-dark.png`, `commons-light.png` `[D]`. This is the control the adoption addendum's warning
asks for (*a re-baseline that also moves the instrument cannot attribute what it measures*): nothing
unrelated was silently absorbed, and **the 24 untouched baselines are independent evidence that the
scoped `.commons-name-note .section-inner` override did not leak to any other template.**

⛔ **No mask, no tolerance raised.** B0's ruling: every one of its three defects had a mask available
and every mask would have gone green. The pixels genuinely changed; a re-baseline is the honest act.

## 6. Suite — each figure by its own command, never mixed

| Lane | Command | Value |
|---|---|---|
| chromium | `npx playwright test --project=chromium --list` | **670** (was 668) |
| snapshot | `--project=snapshot --list` | **26** (unchanged) |
| all-projects | `npx playwright test --list` | **696** (was 694) |
| chromium run | `npm run test:gates` | **669 passed · 1 skipped · 0 failed** |
| snapshot run | `visual_regression_container.sh check` | **26 passed** |
| markup | `npx html-validate "dist/**/*.html"` | **0**, exit 0 |

**Delta isolated**: `gate-54`'s own file went **8 → 10** cases by `--list`. **+2, removed nothing.**

⚠ **The `html-validate` zero is control-checked.** A deliberately invalid file (`<img src=x>`,
unquoted attribute) produces violations `[D]`, so exit 0 over `dist/` is a real zero rather than an
instrument that did not run. *A negative result is only as wide as the command that produced it.*

## 7. What this record does NOT claim

- ⛔ **Nothing is deployed and nothing is owed to production.** Lane D is met on-build. Prod serves
  `a852423`, re-probed at the open. **A push is its own ⛩ GO.**
- ◐ **`V3` is partial.** It asserts AC-4 **and** AC-8; AC-8's `/privacy` section is O5's. Only the
  `/commons` half is closed. `/privacy`'s before-figure (**9.43**) is banked so O5's delta reads on
  the same surface.
- ⚠ **Convention 19's green has a width.** `main` is green at `7210d5e`, the last **pushed** commit.
  GR-4's own commits have never been through CI, because a push is its own ⛩ GO.
- ⚠ **The reading census's frame is 21 landing routes.** `/commons` is in it, so unlike O1 this
  increment's reading-level delta **is** measured. Said explicitly, because O1's was not.
