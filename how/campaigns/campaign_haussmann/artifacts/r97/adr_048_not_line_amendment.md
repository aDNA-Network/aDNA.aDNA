---
type: decision_proposal
proposal_id: r97_adr_048_not_line_amendment
title: "R-97 — scope the homepage NOT-line: the last of four surfaces still carrying the over-promise, and it is the one P5.1's panel reads"
campaign: campaign_haussmann
increment: R-97
created: 2026-09-04
updated: 2026-09-04
last_edited_by: agent_rosetta
status: proposed          # ⛩ Agents author, operators ratify (§7.7). NOTHING IN §5 IS PERFORMED. ADR-048 is UNTOUCHED and `site/src` is UNTOUCHED — verified `git status --porcelain site/src` empty at authoring time `[D]`.
amends: what/decisions/adr_048_positioning_statement_embargo_language.md
register_row: R-97
tags: [proposal, haussmann, r_97, adr_048, over_promise, claim_register]
---

# R-97 — the homepage NOT-line

> ⛩ **This document is `proposed`. It changes nothing on its own.** ADR-048 §Direction-picked still
> reads its ratified DP2 wording, and `site/src/pages/index.astro:137` still ships it. The signature
> is what performs §5.

## 1 · The claim, and where it lives

`site/src/pages/index.astro:137` — the `notLine` prop of the homepage hero:

> *"Not a product or service — no server, no signup, **nothing leaves your machine**."*

| Surface | State |
|---|---|
| **Ratified source** | `adr_048_…:71`, inside the §Direction-picked package DP2 accepted verbatim on 2026-08-16 |
| **Register** | `claim_register.md:379`, `R-97`, class **`verified (ADR-048 verbatim)`** |
| **The caveat is already in its own row** | *"the NOT-line inherits R-64's narrow-scope caveat class (the required agent tool sends prompts to its provider)"* |

⇒ The register has recorded, since P0.5, that this sentence is over-scoped. Nothing converted that
into work. **That is `R-64`'s standing lesson — *a caveat in the register is a finding with a home
and no gate*** — and this is its fourth surface.

## 2 · Why now, and why it cannot ride to `DP9`

⛩ **Operator-ruled at this sitting's open (SO#1): fix → deploy → panel.**

`P5.1`'s cold-reader panel takes **the live production hero as its stimulus** and scores it **against
ADR-048** (AC-1, amended and `accepted` 2026-08-26). One of its three required profiles is a **senior
engineer** — precisely the reader who notices that *"nothing leaves your machine"* is false for the
agent tool they are reading it with. Running the panel against the unscoped line buys transcripts
about copy we already know is over-scoped, and a panellist marking ADR-048 down for it would be
**correct**, which makes the finding uninformative.

## 3 · The evidence, derived this sitting

### 3.1 ⭐ The same component already carries the scoped version, one prop away

Read at the object (`index.astro:125-150`) `[D]`:

| Prop | Line | Copy | State |
|---|---|---|---|
| `notLine` | `:137` | *"…no server, no signup, **nothing leaves your machine**."* | **unscoped absolute** |
| `reframe` | `:146` | *"…The standard that gives it that shape is open. **Your files stay on your machine**."* | **scoped** — P4.5a's `R-120` fix |

⇒ The homepage asserts the scoped claim and the unscoped one **nine lines apart, in the same
component, both above the fold.** `R-120`'s own fix commit is what put them into visible tension —
**the `R-161` shape exactly** (*a pre-existing sentence repaired because a neighbouring change made
it a contradiction a reader meets without looking for it*).

⚠ **Stated at its width: this is not a claim that `R-120` was wrong.** `R-120` scoped the sentence it
was aimed at, correctly, and named its own subject. **Nothing routed it to its sibling.**

### 3.2 ⭐ `R-97` is classed `verified` and is asserted by NOTHING

Measured at three objects this sitting `[D]`:

| Instrument | Result |
|---|---|
| `gate-26` fixture `claim_register.json` | **28 rows; `R-97` absent.** No row quotes *"nothing leaves"* or *"signup"* |
| `claim_trace_manifest.json` (gate-20) | `nothing leaves` **0** · `signup` **0** · `notLine` **0** · `R-97` **0** |
| `gate-23-hero-claims.spec.ts` | the phrase appears **only in a source comment** (`:56`) — **in no assertion** |

`gate-26`'s contract, in its own words: *"verified rows → the quoted text must be PRESENT
(currency)."* ⇒ **the register's strongest class has a hole at the site's most-read sentence.**

⭐ **Two consequences pointing opposite ways, so both are stated:**
1. **It makes the fix cheap.** Nothing pins the string ⇒ **zero same-diff churn** (ADR-057), exactly
   as `R-161`'s was.
2. **It is a defect in its own right, and the cheap fix does not close it.** A `verified` row nobody
   asserts is **convention 18's family**: `gate-26` runs correctly, passes honestly, and its green is
   a true statement about a set that *excludes this claim.* ⇒ §5 ships the scoped quote **into the
   fixture**, closing the hole in the commit that would otherwise have widened it.

### 3.3 The reading-level constraint was measured, not assumed — and it does not bind

`/` carries the tightest headroom on the site: **prose FKGL 9.96 against a target of 10 ⇒ 0.04**.
The NOT-line **is in the prose corpus** (built twin line 14, punctuated, merged with the audience
sub), so the constraint genuinely applies — that was checked, not presumed, because GR-4 O4's strip
lines turned out to be **excluded** and the reverse assumption would have been just as wrong.

**Method** — substitution into the **built `.md` twin**, the surface the census measures, with the
census run at its own instrument. `site/src` untouched throughout; twin restored byte-identical after
each; **baseline re-derived at exactly `9.96` afterwards**, which is the control that makes the
deltas legible rather than noise.

| # | Candidate | prose FKGL | Δ | headroom left | sentences |
|---|---|---|---|---|---|
| — | **baseline (current, unscoped)** | **9.96** | — | 0.04 | 47 |
| **1** | *"…no server, no signup; **aDNA itself sends nothing**."* | **9.98** | +0.02 | **0.02** | 47 |
| 2 | *"…no signup, no account. **Your files stay on your machine**."* | **9.84** | **−0.12** | 0.16 | 48 |
| 3 | *"…no server, no signup; **the standard itself sends nothing**."* | 9.97 | +0.01 | 0.03 | 47 |
| 4 | *"…no server, no signup, **nothing of yours leaves your machine**."* | 9.96 | 0.00 | 0.04 | 47 |

⚠ **Surface named (convention 18):** this is a **twin substitution, not a rebuild.** It is the same
file the census reads and the line is already flattened, so the substitution is faithful — but the
post-signature build **re-measures on a real build**, and that figure governs.

### 3.4 ⭐⭐ THE MEASUREMENT CHANGED THE ANSWER: THE CHEAPEST CANDIDATE FIXES NOTHING

**Candidate 4 is the smallest diff, costs exactly 0.00 FKGL, and does not repair the defect.** The
falsifying case for this sentence is *the reader's own context going to their agent provider* — which
is precisely **"yours"**. Narrowing *nothing* → *nothing of yours* narrows on **the wrong axis**: it
keeps the absolute and excludes the only thing that falsifies it.

**Candidate 2 re-imports an over-promise the campaign has already had to qualify once.** `R-161`
shipped *"your vault files never leave **until you choose**"* — and the qualifier is what makes it
true, because **a vault pushed to a remote does move data** (`R-167` says so in terms). Candidate 2
drops it.

⇒ **Of four candidates, two are wrong**, and the wrong ones are the cheap one and the one with the
best number. ⭐ *This campaign's most-repeated defect, arriving at wording instead of at an
instrument: the cheap remedy was the wrong one* (GR-4 O1 hit it twice in one increment — `gate-14`'s
implied remedy, and the available `ALLOW` entry).

## 4 · Recommendation

**Candidate 1** — *"Not a product or service — no server, no signup; aDNA itself sends nothing."*

Three independent reasons:

1. ⭐ **It is `R-64`'s ratified remedy, verbatim.** P0.5 diagnosed the class and prescribed *"scope it
   to **'aDNA itself sends nothing'**"*; **GR-1 shipped exactly that on `/get-started`.** This is not
   new wording to be judged — it is the existing ruling reaching its fourth and last surface, which
   is why it needs a signature and not a design review.
2. **It preserves the NOT-line's rhetorical shape.** The line is a list of negations; candidate 2
   breaks the parallel with a positive clause. The claim moves **DOWN** (convention 1's permitted
   direction) without the sentence changing kind.
3. **It is unfalsifiable by anything the reader's tooling does.** aDNA is a file-layout convention;
   it has no network behaviour to have. That is `R-167`'s ratified reasoning — *"a naming convention
   has nothing to transmit with"* — applied to the hero.

⚠ **What the recommendation costs, said rather than absorbed: 0.02 of headroom, leaving 0.02.** That
is real and it is the tightest margin on the site. It is accepted because the alternative that buys
headroom (candidate 2) buys it by making a claim that needs a qualifier it does not carry. **Buying
0.14 of a reading score with a sentence that is not quite true is the trade this campaign exists to
refuse.**

⛔ **Candidate 3 is a legitimate variant and is not recommended only weakly** — *"the standard"* may
read more plainly to a stranger than *"aDNA"* at that point in the fold. It costs 0.01 less. The case
for 1 over 3 is provenance: **1 is the string already ratified and already shipped elsewhere**, and a
third phrasing of one ruling is how a fleet ends up with three sources of truth (`F-aa`'s shape,
discharged yesterday).

## 5 · What the signature performs

Nothing below is done. On ⛩ signature:

1. **ADR-048** — §Direction-picked's NOT-line struck-not-deleted (SO-6) with the amendment block and
   a 4-field ratification record; `updated:` bumped.
2. **`index.astro:137`** — the ruled wording.
3. **Stale comments in the same commit** — `HomeHero.astro:730` and `gate-23:56` both quote the old
   string (ADR-057's same-diff law; they are comments, not assertions, which is *why* they would
   otherwise be missed).
4. **`gate-26` fixture** — `R-97` added with the scoped quote, closing §3.2's hole. **Red-proven: one
   mutation per assertion, each red at its declared set**; a red via the wrong assertion reports
   **HARNESS BUG** (`F-z`).
5. **Register** — `R-97` row updated, class held `verified`, lineage stated, and the **four-surface
   class recorded CLOSED** (`R-64` `/get-started` · `R-161` `/network` · `R-167` `/privacy` · `R-97`
   `/`).
6. **`gate-49` re-baseline** — `/` is one of the 12 templates at `maxDiffPixels: 0`. Red confirmed
   **first**, then all 24 regenerated in-container, **exactly 2 changed**; the 22 untouched
   independently prove no leak. ⛔ No mask, no tolerance raised.
7. **Changelog entry** — owed (newest is 2026-09-03) and it moves `/`'s latest-strip, so it is
   authored **before** the final baseline run. ⚠ `title` ≤ **70**, `description` ≤ **160**, **both
   derived from `src/content.config.ts`**, never remembered.
8. **Re-measure the census on the real build**, then **⛩ push**, then **⛩ deploy** — in that order,
   each its own GO.

## 6 · ⛩ The questions carried to the signature

1. **The wording.** Candidate **1** recommended; 3 is the near-variant; **2 and 4 are recommended
   against, with reasons in §3.4** rather than left as options of equal standing.
2. **Scope discipline.** This increment touches **one prop, one ADR clause, one fixture row, one
   register row**. `gate-23` gains no new assertion beyond the fixture row, and the *comment* at
   `:56` is updated but no test is rewritten. ⛔ **Recommended: hold that line.** Unforced widening at
   an increment's tail is this campaign's most-repeated defect, and the adjacent temptations are
   visible — `gate-23` could be given a hero-claims assertion set, and `/get-started`'s sibling could
   be re-verified. **Neither is claimed here.**
3. **Budget for the build half.** ⛩ Proposed **~80–140 kT / 1 session**: copy + ADR + comments ~15–25
   · fixture row + red-test ~20–35 · `gate-49` re-baseline ~15–25 · changelog ~10–15 · census re-run
   + suite + push + deploy + probe ~20–40. ⭐ **Costed AFTER reading `gate-49`'s TEMPLATES list** —
   `/` **is** a template, so the re-baseline is *predicted, not discovered* (SO#11's O2
   retrospective, applied at costing time for the fifth consecutive sitting).

## 7 · Ratification record

- **Decision:** *(unfilled — this document is `proposed`)*
- **Ratified-by:** *(unfilled)*
- **Gate:** ⛩ R-97 signature
- **Date:** *(unfilled)*
- **Status:** **proposed**
