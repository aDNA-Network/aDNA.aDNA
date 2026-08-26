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

## The baseline

Normalized twins, deployed tree `6675442`. Targets per AC-b: **≤ 10** first-contact, **≤ 12**
reference intros.

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

**Blast radius, measured across all 223 twins** `[D]`: **3 list-shaped pages** (avg wps > 40) —
`/vaults` (76), `/learn/concepts` (51), `/reference/specification/1-introduction-scope` (45). Small,
but **load-bearing for AC-d**: wiring this tool as a CI trend report without a shape guard emits a
permanent false alarm on all three. Routed to `gate-48` at O3.

## What this baseline does *not* establish

- It is a **build-time** measure of twin text. It is not what a human experiences; the panel at P5.1
  is that instrument, and this number never substitutes for it.
- Passive-voice ratios on short pages (`/community/proposals` 62.5%, `/accessibility` 50%) are
  **noisy by construction** — the denominator is sentence count. Do not treat them as targets.
- FKGL is a syllable-and-length proxy. A page can hit ≤ 10 and still be incomprehensible if the nouns
  are undefined — which is precisely what the clinician's list records, and why AC-c exists separately.
