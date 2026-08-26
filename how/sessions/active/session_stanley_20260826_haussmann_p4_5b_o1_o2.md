---
type: session
session_id: session_stanley_20260826_haussmann_p4_5b_o1_o2
tier: 1
created: 2026-08-26
updated: 2026-08-26
status: active
owner: stanley
persona: rosetta
campaign: campaign_haussmann
mission: mission_haussmann_p4_5_voice_rewrite
increment: P4.5b
objective: "pre-flight · O1 · O2"
executor_tier: opus   # as amended and signed; the mission's frontmatter still declares `fable` for the increment overall
token_budget_estimated: "~280–400 kT across 2–3 sessions for all of P4.5b (amended + signed 2026-08-26)"
token_budget_actual:
last_edited_by: agent_rosetta
tags: [session, haussmann, p4_5b, voice, o1, o2, copy_rewrite]
---

# Session — HAUSSMANN P4.5b pre-flight + O1 + O2

⛩ **Gate approved 2026-08-26.** `doctrine_site_voice.md` and the AC amendment are signed; the
amendment is `accepted`. Commits: `3c50f8c` (pre-flight) · `b4e22c8` (O1) · `00adddd` (O2).

## Result

**Suite 627 passed / 1 skipped / 0 failed**, derived from the run (not typed).

All four first-contact surfaces are under the ≤10 target, measured prose-only:

| route | O0 (whole-twin) | now (prose) | target |
|---|---|---|---|
| `/` | 13.90 | **9.96** | 10 |
| `/community` | 12.11 | **9.28** | 10 |
| `/learn/what-is-adna` | 13.90 | **7.11** | 10 |
| `/get-started` | 9.69 | **7.89** | 10 — already passed; only R-64's sentence changed |
| `/security` | 14.23 | **10.25** | 12 |

**1 of 21 over target: `/reference/specification` at 12.69** — and its **intro measures 11.49**,
which is what AC-b names. The page total is 1,950 words of numbered MUST/SHOULD clauses.

**Clinician list closed**: 8 live items dispositioned, 2 recorded dead with the mission that killed
them, every disposition verified in the rendered twins.

## Findings

**F10 — The instrument needed two more rebuilds before the copy could be graded, and the
self-test passed while it was wrong.** After the line-level filter, `/learn/what-is-adna`'s three
worst "sentences" were the proof-link list (FKGL 63.9 / 153 words), the flattened 16-entity table
(48.3 / 100) and the Explore-further nav (23.9 / 60) — none catchable per line. The invariant that
works is **prose is punctuated**. But the first block guard counted *lines ending in a full stop*,
so a wrapped four-line paragraph scored like a link list: `/vaults` and `/privacy` came back at
**FKGL −15.2** and `/commons` fell 8.5 grades.

⭐⭐ **The self-test passed 11/11 while that was true, because every fixture put one sentence on one
line. The controls covered the predicate and not the data.** Wrapped fixtures added; the rule is now
**words-per-terminator**, which is wrapping-invariant. A third defect followed: a short-block
exemption placed *before* the zero-terminator test waved stat rows straight through. **Self-test now
14/14, 8 keep-cases and 6 drop-cases, both directions.**

⇒ Three formulations of one guard — page-average → line → block — each written at the moment of
diagnosis. **That is this campaign's own recurring pattern, committed by the desk that named it.**
Convention 15's ruling applied: the instrument is now built with its controls, and stops here.

**F11 — Twice in two objectives, "over target" turned out to be the metric measuring text the
criterion never aimed at.** On `/`, authored prose is **7.65**; 190 words of SVG title/description
carry the other 2.55 grades — and compressing diagram descriptions to hit a copy target would
degrade what P4.3 built for AT users. On `/reference/specification`, the intro passes at 11.49 and
the excess is normative MUST/SHOULD text. **Neither is a copy defect. Both are recorded rather than
chased.** *(Whether figure descriptions belong in the metric is routed to `gate-48` at O3, where it
can be built with controls instead of patched now.)*

**F12 — Three sightings of one shape, and the third made the fix obvious.** The persona disclosure
(C5), the ancient-DNA collision (C10) and the opaque first-screen counters (C4) were all **content
that existed, below the point of confusion**. None was missing. So none needed writing — each
needed *reaching*: a sentence-level disclosure on `/`, a name note on the page titled *What is
aDNA?*, and an optional `href` on two stats. ⇒ **"Absent" and "unreachable" are different defects
with different fixes, and the register cannot tell them apart** — it records whether a claim is
present, not whether a reader meets it in time.

**F13 — The claim register pins wording as well as truth.** `gate-26` asserts `verified` quotes are
**PRESENT**, so R-64 was holding in place the exact phrasing ADR-048 §50's avoid-list forbids
(*"Everything **lives** on your machine"*). Sibling of P3.4's R-95, where a gate defended a sentence
that had gone stale. Three same-diff re-pins this session (R-120, R-73, R-64), all wording-only,
all with the claim unchanged, all landed in fixture **and** register in the same commit.

**F14 — The "lives" rule got a scope, and the scope is the finding.** A sweep found **~40** uses in
authored copy. §50's harm is a **hosted destination**, which needs the local-vs-hosted axis in play —
true in the hero, in *"Everything lives on your machine"*, and in the node definition. **Not** true
in *"Missions live in `how/missions/`"*, a file path, used throughout the ratified specification
mirror. ⇒ **A rule applied past its reason is its own kind of dishonesty about what the rule is
for.** 3 of 40 fixed, deliberately, written into the voice guide so the ratio reads as a judgement.

**F15 — The hero lead is no longer ADR-048 verbatim, and the component says so.** ADR-048's own §50
forbids the phrase its ratified lead used, and §54 routes that list here. ⚠ The call is a judgement
and is recorded as one: §50's cited phrase claims a place, *"know where things live"* is idiomatic.
Cut because a hero cannot rely on the reader taking the mild reading. Reversible in one edit.

**F16 — The anchor I linked did not exist.** `/about` carried only `#main-content`. Caught by
checking the built output before shipping, which is the whole of convention 14 at small scale.

## Files touched

**Copy** — `index.astro` · `learn/what-is-adna.astro` · `community/index.astro` · `commons.astro` ·
`get-started.astro` · `security/index.astro` · `state-of-the-network/index.astro` · `about.astro` ·
`vaults/graph.astro` · `HomeHero.astro` · `VaultRelationshipBlock.astro` · `data/home.ts` ·
`data/community.json`

**Instrument** — `site/scripts/reading_census.mjs` (block predicates + 14-case self-test) ·
`scripts/reading_level.mjs` (exports + isMain guard)

**Record** — `claim_register.md` + `tests/gates/fixtures/claim_register.json` (3 re-pins) ·
`gate-23-hero-claims.spec.ts` · `doctrine_site_voice.md` · `reading_level_p4_5b_baseline.md` ·
`ac_amendment_proposal.md` · campaign `CLAUDE.md` (convention 17 amendment)

## SITREP

**Completed** — pre-flight (merge, two self-corrections, normalizer promoted) · O1 · O2.

**In progress** — none.

**Next up** — **O3**: `gate-48` (non-blocking trend + glossary first-use, red-proven, with the
figure-description question settled in its design) · dual-audience records citing guide rules (V2 as
amended) · synthetic cold-read re-test + ranker · ⛩ push, then ⛩ deploy · AAR. Then **O4**, the
three Vitruvius memos.

**Blockers** — none technical. Two outward acts await their own ⛩ GO: the push, and the deploy.

**Not touched, deliberately** — P4.4b · P3.3 O2 · P2.6 ⛩ O0b · F-v · `site/public/**` (lemur's lane).

## Next Session Prompt

> Open `missions/mission_haussmann_p4_5_voice_rewrite.md` (**the P4.5b half**), the campaign
> governance, and `what/doctrine/doctrine_site_voice.md`. **Pre-flight, O1 and O2 are complete and
> committed** (`3c50f8c` · `b4e22c8` · `00adddd`); suite **627 passed / 1 skipped / 0 failed**. The
> canonical metric is **prose-only** via `site/scripts/reading_census.mjs` — run
> `node site/scripts/reading_census.mjs --selftest` first; it must report **14/14** before you trust
> a number from it. All four first-contact surfaces pass; the only route over target is
> `/reference/specification` at 12.69, whose **intro passes at 11.49**, which is what AC-b names —
> do not rewrite normative MUST/SHOULD text. Execute **O3**: build `gate-48` as a **non-blocking**
> trend report plus a glossary first-use assertion over the 25 derived glossary terms on the
> rewritten routes, red-prove it by mutation with controls, and **settle whether SVG figure
> descriptions belong in the metric** (on `/` they carry 2.55 of its grades; compressing them would
> undo P4.3's AT work). Then the V2-as-amended dual-audience records — each must **cite the guide
> rule it applied**, which is the only thing binding the rewrite to the guide. Then the synthetic
> cold-read re-test and ranker, then ⛩ push and ⛩ deploy as **separate** GOs, push first. Close with
> the AAR (SO#5). **O4** — deliver the three staged Vitruvius memos, operator-GO'd 2026-08-25,
> showing each before it goes. Build with `npx astro build`, never `npm run build`.
