---
type: artifact
title: "O2 — the production crawler, re-authored and red-proven. Its first live run reproduced two of this campaign's own closed missions from the outside"
campaign: campaign_haussmann
mission: mission_haussmann_gr_6_instrument_calibration
created: 2026-09-07
updated: 2026-09-07
status: accepted
last_edited_by: agent_rosetta
tags: [artifact, haussmann, gr_6, o2, crawler, inventory, adr_051, red_proof]
---

# O2 · `scripts/crawl_haussmann_b1.mjs` — re-authored, red-proven, live-verified

**`AC-2` ✅ · `V2` ✅.** Built: `scripts/crawl_haussmann_b1.mjs` + `scripts/crawl_haussmann_b1_redtest.mjs`.

## §1 · The contract was READ, not remembered

The genesis crawler was run from a scratchpad on 2026-08-16 and is gone. **Its two outputs survived
and are committed**, so those are what this reimplements against:

- `evidence/inventory/page_inventory.csv` — **13 columns, header parsed at run time**
- `evidence/inventory/link_graph.json` — `nodes` / `edges` / `inbound_counts` / `depth_from_home` /
  `orphans` / `discovered_links_not_in_sitemap` / `methodology`

⭐ **The three `methodology` strings are honoured verbatim rather than paraphrased** — edge definition,
inbound-count definition, depth definition. A paraphrase would have been a second source of truth for
the same rule, which is how the campaign's other derived figures drifted.

⛔ **The column list is never typed into the script.** `readColumnContract()` parses the committed
header at run time and throws if the file is missing. A schema drift therefore reds; it cannot silently
emit a differently-shaped file that still looks like an inventory. **V2's header check: 13/13 columns,
`IDENTICAL: True`, compared field-by-field `[D]`.**

## §2 · Red-proof — 6 cases, 0 fail, 0 harness bugs

⚠ **Surface named (convention 18): a LOCAL FIXTURE SERVER, not production.** That is forced, not
convenient — `AC-2`'s mutation is *"remove a route and the inventory shrinks"*, and **production cannot
have a route removed from it.** The fixture exercises the crawler's *logic*; §3's live run exercises its
*reach*. **Neither substitutes for the other and both are stated.**

| Case | Targets | Result |
|---|---|---|
| CONTROL — baseline crawls clean at 4 rows | `emission` | ✅ exit 0, rows 4 |
| **MUTATION** — a route removed shrinks the inventory | `enumeration` | ✅ exit 0, rows **3** |
| **RESTORE** — putting it back returns to 4 | `enumeration` | ✅ exit 0, rows **4** |
| an off-origin redirect fails loudly and **emits nothing** | `reach:same-origin` | ✅ exit 1, `REACH FAILURE`, no file |
| a 0-entry sitemap fails rather than emitting an empty inventory | `reach:sitemap-nonempty` | ✅ exit 1, `REACH FAILURE`, no file |
| a 404 in the sitemap is **recorded as data**, never skipped | `non-200-is-data` | ✅ exit 0, ghost row `,404,`, rows 5 |

⭐ **Every case declares the assertion it targets, and a red arriving through a different one reports
as `HARNESS BUG` rather than counting as a pass** — GR-3's `F-z` clause (*a demonstration is only worth
what it can attribute*) **spent forward at authoring time**, not discovered in the harness's
fourteenth day.

⭐ **The CONTROL is load-bearing and is why the mutation means anything.** Without a baseline of 4, a
reading of 3 cannot distinguish *"the mutation worked"* from *"it was always 3"*. And the **RESTORE**
case is what separates *"removing the route caused the shrink"* from *"something else broke that run"*.

⭐ **Case 4 exists because of a specific prior defect**, not as ceremony: GR-2 produced *"a canonical-hash
run that produced a 0-line file and compared cleanly against nothing"* — the cheapest possible false
green. An empty sitemap must therefore fail rather than emit a 0-row inventory that reads as a clean
crawl of a site with no pages.

⛔ **The reach assertions are the `check_live_headers.mjs` scar made structural.** That instrument
printed `live-headers OK — no drift` having read **Vercel's SSO login page**: it followed redirects and
never verified it had arrived. Here every fetch asserts `res.ok` **and** that the *final* URL is
same-origin, and **a run that cannot verify its reach exits non-zero and writes nothing** — a partial
inventory is worse than none, because it reads as a complete one.

### ⚠ The self-test's first run failed, and the failure was the TEST's

`extractWordCount` was asserted at **6** and returned **10**. The extractor was right: the fixture's
`<main>` carries five anchor texts (*"x dup asset off self"*) which are visible body text and belong in
the count. **The expectation was wrong, corrected to 10, and the correction is recorded in the test's
own comment rather than quietly applied** — *a test edited to match its subject is worthless unless you
can say which one moved.* Seventh member of this desk's standing streak of instruments wrong before
their subjects, and the seventh caught by structure rather than by vigilance.

## §3 · The live run — reach, and an unexpected corroboration

`node scripts/crawl_haussmann_b1.mjs --json`, against `https://adna.network` `[D] 2026-09-07`:

```
routes 228 · non_200 0 · orphans 0 · discovered_not_in_sitemap 0
```

**Against the committed genesis packet (202 rows, 2026-08-16):**

| | |
|---|---|
| new since genesis | **61** |
| gone since genesis | **35** |
| arithmetic | `202 − 35 + 61 = 228` ✅ equals the live row count |

⭐⭐ **THE DELTA REPRODUCES TWO CLOSED MISSIONS FROM THE OUTSIDE, AND NOBODY TOLD IT TO.** The crawler
knows nothing about this campaign's history; it read a sitemap. Yet the 35 departures partition almost
exactly along two mission boundaries:

- **24 are `/vaults/<MixedCase>.aDNA/`** — and `mixed_case_url` went **24 → 0** `[D]`. That is
  **ADR-051 / P2.1's URL canonicalization**, measured from production by an instrument that has never
  heard of ADR-051.
- **11 are audience-segment routes** — `/adopters/*` (6), `/compliance/`, `/educators/`,
  `/enterprise/`, `/researchers/`, `/startup-first-hour/`. That is **P2.2's IA consolidation**, which
  retired precisely the *"audience-segment pages as IA"* shape the VITRUVIUS instrument names as a D2
  failure mode (§D2 *Failure modes*).

⇒ **This is a far stronger validation than any single assertion could be**, because it was not aimed at
anything: an instrument that independently re-derives two ratified outcomes it was never told about is
measuring the world rather than its own expectations.

⚠ **And `discovered_links_not_in_sitemap` went 2 → 0.** Genesis found two linked-but-404 paths
(`/patterns/content-as-code/`, `/reference/design-rationale/template_bare/`); both are gone. Recorded
as **an observation, not a claim of credit** — nothing here establishes which mission removed them.

## §4 · ⛔ What this objective deliberately did NOT do

**The committed packet is NOT overwritten.** `AC-2` builds the instrument; `AC-3` scopes the refresh;
**the refresh itself is `P5.2`'s O0** (*"refreshes EVERY evidence packet or states which it did not"*).
Refreshing it here would be doing a later mission's work under this mission's band — and it would
destroy the 2026-08-16 baseline that §3's delta is measured against. The live output was written to a
scratchpad and read; **`git diff` over `evidence/inventory/` is empty.**

⚠ **Named for `AC-3` and for `P5.2`:** the `inventory/` packet is **stale by 26 routes and by two
closed missions**, and it is `refreshable-by-instrument` — the instrument being this one, as of today.

## §5 · Counts — derived last

| Figure | Value | Command |
|---|---|---|
| self-test | **17/17** | `node scripts/crawl_haussmann_b1.mjs --self-test` |
| red-proof | **6 pass / 0 fail / 0 harness bug** | `node scripts/crawl_haussmann_b1_redtest.mjs` |
| live routes | **228** | `--json` summary |
| committed packet rows | **202** | `wc -l` − 1 |
| header identity | **13/13, IDENTICAL** | field-by-field compare |
| `evidence/scoring/` diff (V4) | **empty** | `git diff` |
