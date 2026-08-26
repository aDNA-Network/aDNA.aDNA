---
type: evidence
campaign: campaign_haussmann
mission: mission_haussmann_p4_5_voice_rewrite
increment: P4.5b
objective: O0b
created: 2026-08-25
updated: 2026-08-25
status: active
last_edited_by: agent_rosetta
supersedes: evidence/sweep/reading_level.md   # 2026-08-16 — retained under SO-6, never deleted
measured_against: "6675442 (the deployed tree; /.well-known/adna-build.json built_at 2026-08-25T22:57:49.312Z, mode prod)"
provenance: "[D] — directly observed, commands recorded verbatim below"
tags: [evidence, haussmann, p4_5b, reading_level, fkgl, baseline]
---

# P4.5b O0b — FKGL re-baseline over the `.md` twins

> ⛩⛩ **CORRECTED 2026-08-26 AT O1 PRE-FLIGHT — THE CANONICAL METRIC IS NOW PROSE-ONLY.** Operator
> ruling. **The measurements below are struck where superseded, never deleted** (SO-6), because the
> reasoning is the reusable part and because a corrected number whose predecessor has vanished cannot
> be audited. §The baseline (corrected) carries the authoritative table; §The baseline (as first
> measured) is retained beneath it.
>
> ⭐⭐ **WHY IT MOVED, AND IT IS THE SAME DEFECT I FLAGGED ONE PAGE AWAY.** This file already reported
> that `/vaults` reads **40.96** because its card grid has no terminal punctuation, so `stripMarkdown`
> removes the list markers and the sentence splitter merges the whole grid into one pseudo-sentence.
> **What it missed is that the same artifact is present on `/` — and hides.** Measured prose-only, `/`
> is **11.84**, not 13.90: **2.06 grades of that number were vault-card markup, not writing.**
>
> ⇒ **A per-page average hides a mixed page, and mixed pages are the common case.** `/vaults` is
> *almost entirely* cards (`avg wps 76`) and announces itself. `/` mixes real prose with a card strip
> and lands at `avg wps 25.8` — beneath any plausible "is this a list page" threshold — while still
> carrying two grades of artifact. **The shape guard this file proposed (`avg wps > 40`) was aimed at
> the rare, self-announcing form.** The instrument now excludes the **artifact lines**, not whole
> pages, and flags thin prose by **sentence and word count** rather than by an average.
>
> ⚠ **And the correction is not uniformly downward** — `/about` reads **13.71 prose-only against 13.53
> whole-twin**, because dropping its link clusters removed genuinely easy short text. A normalization
> that only ever lowered numbers would be a thumb on the scale; this one does not.
>
> **Instrument:** `site/scripts/reading_census.mjs` — in the tree, importing `stripMarkdown` +
> `analyze` from `scripts/reading_level.mjs` rather than reimplementing the FKGL math. The
> normalization that was an inline shell command in §The method is now code, which is what "canonical"
> requires.

## Why this file exists (and why the old one could not be used)

`evidence/sweep/reading_level.md` (2026-08-16) is the figure P4.5b's charter quotes — *"FKGL 12–17.9
on every key page."* It cannot serve as this mission's *before*, for three independent reasons, each
measured:

1. **It is not reproducible.** Its measured paths are text extracts under
   `/private/tmp/claude-501/.../234be40f-.../scratchpad/reading_extracts/` — a session scratchpad.
   `test -d` on that directory today: **absent** `[D]`. The numbers survive; the corpus they describe
   does not. *(This is the F-s/G-11 family again in a quieter register: evidence whose subject cannot
   be re-identified. The remedy below is the point of the file.)*
2. **It is ~11 missions stale.** P2.1–P2.5, P3.1–P3.5, P4.1–P4.3 and P4.5a all changed copy.
   `/learn/what-is-adna` measured 1301 words then and **944** now — the page is not the same object,
   so 14.38 → 13.90 is not a delta, it is two measurements of two different texts.
3. **It never measured `/`.** Its six surfaces are what-is-adna · get-started · specification ·
   community · commons · network. AC-b names **home** as a first-contact target. The homepage has
   never had a reading-level number.

## The method, and why it is reproducible this time

`scripts/reading_level.mjs` consumes **markdown**; site pages are `.astro`. That mismatch is why the
08-16 run went through a throwaway extraction. **P3.1's `.md` twins close it** — 223 of them, emitted
into the build, derived from the rendered page (`site/src/utils/twin.ts`,
`site/scripts/emit_bespoke_twins.mjs`). The corpus is now a committed build artifact, not a temp dir.

**Normalization — the leading twin preamble is stripped.** Every twin opens with a 4-line blockquote
of machine-facing boilerplate (`> Markdown twin of …` / `> Index: …` / `> State is a build-time
snapshot …` / `> Derived from the rendered page …`), ~48 words of grade-13 prose that no human reads
as page content. `reading_level.mjs` strips frontmatter, code, tables, HTML and lists — **not
blockquotes** (verified in `stripMarkdown`, `scripts/reading_level.mjs:20-45`). Left in, it biases
every page the same direction.

```sh
# from site/ — normalize (strip ONLY the leading preamble block, not body blockquotes)
awk 'NR==1&&/^> /{p=1} p&&/^> /{next} {p=0; print}' dist/<route>.md > <out>/<name>.md
node ../scripts/reading_level.mjs <out>/*.md
```

**Measured bias, not assumed** `[D]`: raw − stripped = **+0.05 to +0.28 FKGL** (raw reads *harder*).
`/` 14.17 → **13.90** · `/get-started` 9.97 → **9.69** · `/learn/what-is-adna` 13.99 → **13.90** ·
`/community` 12.16 → **12.11**. Small, one-directional, and worth removing because it is constant
across the corpus and belongs to no author.

⚠ **The strip targets the leading block only.** A blanket `sed '/^> /d'` would also delete body
pull-quotes. On the four first-contact surfaces the two coincide — body blockquotes after line 5:
**0 · 0 · 0 · 0** `[D]` — but that will not hold across 223 twins, so the `awk` form above is the
canonical one.

## The top-20, derived not typed (convention 1 / WebForge KW-14)

AC-b says *"Top-20 pages"* and **no instrument in the campaign defines which twenty**. Derived here by
counting, for every route with a twin, how many of the 226 built HTML pages link to it:

```sh
# count inbound internal links per route across dist/**/*.html, keep routes that have a twin, rank
```

The result is not a judgement call — there is a **cliff**:

| rank | inbound pages |
|---|---|
| 1–20 | **226** (every page — global nav + footer) |
| 21+ | 141, then 140 and below |

**Exactly twenty routes are linked from every page of the site.** That set is the top-20, and it fell
out of the build rather than being chosen. *(If a later mission changes the nav or footer, this number
moves — re-derive, never quote forward. Same-diff, ADR-057.)*

⛔ **The derivation contradicts AC-b's own list, and the contradiction is the finding.** AC-b names
four first-contact surfaces — *home, get-started, what-is-adna, community* — but **`/learn/what-is-adna`
is not in the derived top-20.** It ranks **21st at 141 inbound pages**, one rank below the cliff:
`/learn` is in the global nav, its child is not. Read literally, AC-b asks for the top-20 rewritten
*and* names a target outside it.

**Operative scope, pending the ⛩ amendment:** `top-20 ∪ {the four named first-contact surfaces}` =
**21 routes**. Stated rather than silently resolved either way — dropping what-is-adna would drop the
page the clinician actually cold-read, and quietly redefining "top-20" to include it would be typing
a count the build disagrees with.

## The baseline (CORRECTED — authoritative)

`node site/scripts/reading_census.mjs --dist site/dist`, 2026-08-26. Targets per AC-b: **≤ 10**
first-contact, **≤ 12** elsewhere. **Prose-only is canonical; whole-twin is shown so the delta stays
visible.** Sorted by prose FKGL.

⚠ **Still measured against tree `6675442`, and that is verified rather than assumed.** Prod has since
moved to `4b43c63` (lemur's installer lane, built 2026-08-26T21:25). `gh api compare 6675442...4b43c63`
returns **0** changed files under `site/src/` `[D]` — so the copy these numbers describe is byte-identical
to the copy now live.

| Route | prose | whole | Δ | passive | verdict |
|---|---|---|---|---|---|
| `/vaults` | 40.96 | 40.96 | 0 | 0% | ⚠ **low-confidence: 3 prose sentences** — artifact, not a rewrite target |
| `/commons` | **14.81** | 16.08 | 1.27 | 8% | over |
| `/reference/specification` | **14.47** | 14.47 | 0 | 16.5% | over — **intro** is the target, not the 8,157-word document |
| `/security` | **14.23** | 14.23 | 0 | 0% | over |
| `/network` | **14.03** | 15.24 | 1.21 | 4.2% | over |
| **`/learn/what-is-adna`** | **13.90** | 13.90 | 0 | 8.3% | ⛔ **first-contact, target 10 — the real work; no card artifact at all** |
| `/about` | **13.71** | 13.53 | **−0.18** | 12% | over — **see the note below; this one is not what it looks like** |
| `/how` | 12.52 | 13.23 | 0.71 | 14.3% | ⚠ low-confidence: thin prose |
| `/community/proposals` | 11.97 | 12.89 | 0.92 | 62.5% | under target · passive ratio noisy by construction |
| **`/`** | **11.84** | 13.90 | **2.06** | 11.6% | ⛔ **first-contact, target 10** — 2.06 grades were card markup |
| `/glossary` | 11.67 | 11.67 | 0 | 4.1% | under |
| **`/community`** | **11.55** | 12.11 | 0.56 | 25.6% | ⛔ **first-contact, target 10** |
| `/reference` | 11.15 | 15.01 | 3.86 | 28.6% | ⚠ low-confidence: thin prose |
| `/changelog` | 9.56 | 9.58 | 0.02 | 25.8% | under |
| **`/get-started`** | **9.55** | 9.69 | 0.14 | 14.8% | ✅ **already meets ≤ 10 — not rewritten** |
| `/accessibility` | 9.52 | 9.52 | 0 | 50% | under · passive noisy |
| `/privacy` | 9.40 | 9.40 | 0 | 16% | under |
| `/use-cases` | 8.78 | 11.41 | 2.63 | 7.1% | under |
| `/state-of-the-network` | 8.54 | 8.54 | 0 | 17.9% | under |
| `/canonical-properties` | 8.42 | 8.42 | 0 | 11.3% | under |
| `/learn` | 5.80 | 9.60 | 3.80 | 0% | under |

**Derived tally: 8 of 21 over target** (the tool's own count, excluding low-confidence rows) — down
from the 14 the first measurement implied. **O1 scope is three routes**, not four:
`/learn/what-is-adna` · `/` · `/community`.

### ⚠ `/about` measures 13.71 — and it is the page this campaign's voice guide is BUILT ON

The clinician cold-reader called `/about` *"the most honest project page I've read in years."*
[[doctrine_site_voice]] takes its four worked moves from it. **It measures grade 13.7.**

That is not a contradiction to be resolved by rewriting `/about`. It is the **empirical form of §7 of
the guide** — *a page can score ≤ 10 and be incomprehensible if its nouns are undefined; FKGL counts
syllables, not whether the reader knows the word.* Here the converse: the highest-comprehension page
on the site, by the only human-adjacent judgement we have, is among the worst by the metric — because
it spends its length naming people, roles, relationships and limits precisely, and precision costs
syllables.

⇒ **`/about` is measured, reported, and deliberately NOT pushed to a number.** Any O2 work on it is
scoped to sentence *length*, never to word choice, and the guide gains this as its own evidence.

## ~~The baseline (as first measured, 2026-08-25 — SUPERSEDED, retained under SO-6)~~

~~Normalized twins, deployed tree `6675442`. Targets per AC-b: **≤ 10** first-contact, **≤ 12**
reference intros.~~

| Route | FKGL | passive | verdict vs AC-b |
|---|---|---|---|
| `/vaults` | **40.96** | 0% | ⚠ **ARTIFACT — not prose** (see below) |
| `/commons` | 16.08 | 13.8% | over |
| `/network` | 15.24 | 4.2% | over |
| `/reference` | 15.01 | 26.7% | over |
| `/reference/specification` | 14.47 | 16.5% | over (intro is the ≤12 target, not the document) |
| `/security` | 14.23 | 0% | over |
| **`/` (home)** | **13.90** | 11.4% | ⛔ **over — first-contact, target ≤ 10** · *never measured before* |
| `/about` | 13.53 | 11.5% | over |
| `/how` | 13.23 | 15.4% | over |
| `/community/proposals` | 12.89 | 62.5% | over · ⚠ passive ratio noisy (few sentences) |
| **`/community`** | 12.11 | 25.6% | ⛔ **over — first-contact, target ≤ 10** |
| `/glossary` | 11.67 | 4.1% | over |
| `/use-cases` | 11.41 | 5% | over |
| **`/get-started`** | **9.69** | 14.3% | ✅ **already meets ≤ 10** |
| `/learn` | 9.60 | 5.9% | ✅ under 10 |
| `/changelog` | 9.58 | 25.7% | ✅ under 10 |
| `/accessibility` | 9.52 | 50% | ✅ under 10 · ⚠ passive ratio noisy |
| `/privacy` | 9.40 | 16% | ✅ under 10 |
| `/state-of-the-network` | 8.54 | 17.9% | ✅ under 10 |
| `/canonical-properties` | 8.42 | 11.3% | ✅ under 10 |
| — | — | — | — |
| `/learn/what-is-adna` † | 13.90 | 8.3% | ⛔ **over — first-contact, target ≤ 10** |

† Named by AC-b but **rank 21** (141 inbound), outside the derived top-20 — see the cliff note above.
Included because AC-b names it.

**Derived tally (21 routes = top-20 ∪ AC-b's four):** **14 over grade 10** · 7 at or under · 1 of the
14 is a measurement artifact ⇒ **13 real rewrite candidates**.

**Of AC-b's four first-contact surfaces:** `/get-started` **9.69 — already passes** `[D]`, a fourth
consecutive mission where a re-probe shrank inherited scope (it was 15.85 at 08-16). The other three
are over: `/` 13.90 · `/learn/what-is-adna` 13.90 · `/community` 12.11.

### ⚠ `/vaults` 40.96 is an artifact of page shape, not difficulty

`sentences: 3 · words: 228 · avg wps: 76.0`. The page is a registry of vault cards. List markers are
stripped by `stripMarkdown`, and the sentence splitter needs `[.!?]` + whitespace + capital — which
bullet items do not supply — so ~77 terminal marks collapse into 3 detected sentences and `words ÷
sentences` explodes. Its actual prose is a **3-sentence intro that reads fine**. Rewriting to chase
this number would be rewriting nothing.

~~**Blast radius, measured across all 223 twins** `[D]`: **3 list-shaped pages** (avg wps > 40) —
`/vaults` (76), `/learn/concepts` (51), `/reference/specification/1-introduction-scope` (45). Small,
but **load-bearing for AC-d**: wiring this tool as a CI trend report without a shape guard emits a
permanent false alarm on all three. Routed to `gate-48` at O3.~~

⛩ **CORRECTED 2026-08-26 — the blast radius was measured with the wrong instrument, so the number was
right and the conclusion was not.** *"3 of 223"* counts pages that are **almost entirely** cards. It
does not count pages that are **partly** cards, and those are the ones that mislead, because their
average sits in the normal range while their number is inflated. `/` is the case: `avg wps 25.8`,
**2.06 grades of artifact**. `/use-cases` carries **2.63**. `/reference` carries **3.86**. `/learn`
carries **3.80**. **Four more, all invisible to an average-based guard, and one of them is the
homepage.**

⇒ **`gate-48` does not exclude pages; it excludes artifact LINES** (`reading_census.mjs`'s four named
`CLUSTER_PREDICATES` — multi-link, card-affordance, image-alt, shell-transcript), so a mixed page is
measured on the part of it that is prose. Pages whose remaining prose is too thin to grade are flagged
**`low_confidence`** by sentence and word count — `/vaults` (3 sentences), `/how`, `/reference` — and
**reported, never silently dropped**.

⭐ **The general form, and it is the fourth sighting in this campaign:** an instrument narrower than
its conclusion. Here the narrowing was a **threshold on an aggregate**, which is a quieter version than
a mis-scoped `grep` — a `grep` over the wrong directory returns zero and looks suspicious; an average
returns a plausible number and looks like an answer.

## What this baseline does *not* establish

- It is a **build-time** measure of twin text. It is not what a human experiences; the panel at P5.1
  is that instrument, and this number never substitutes for it.
- Passive-voice ratios on short pages (`/community/proposals` 62.5%, `/accessibility` 50%) are
  **noisy by construction** — the denominator is sentence count. Do not treat them as targets.
- FKGL is a syllable-and-length proxy. A page can hit ≤ 10 and still be incomprehensible if the nouns
  are undefined — which is precisely what the clinician's list records, and why AC-c exists separately.
