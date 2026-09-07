---
type: artifact
title: "O3 — the P5.2 evidence-packet refresh, SCOPED: 21 packets, every row carrying a disposition AND a named instrument"
campaign: campaign_haussmann
mission: mission_haussmann_gr_6_instrument_calibration
created: 2026-09-07
updated: 2026-09-07
status: accepted
last_edited_by: agent_rosetta
tags: [artifact, haussmann, gr_6, o3, p5_2, evidence, packets, refresh]
---

# O3 · The packet-refresh scope

**`AC-3` ✅ · `V3` ✅.**

> **What this closes.** `P5.2`'s second hard precondition reads: *"It refreshes EVERY evidence packet
> **or states which it did not**."* That sentence is unfalsifiable while nobody has enumerated what
> "every" is — a mission can refresh four packets, state nothing, and read as compliant. **This is the
> enumeration.** ⛔ It is **not** the refresh: that is `P5.2`'s O0.

## §1 · The rule this table obeys

**A row with a disposition and no instrument is INCOMPLETE, not done.** That is `AC-3`'s own wording,
and it exists because the failure mode here is not a missing packet — it is a packet marked
*"refreshable"* by someone who never checked what would refresh it, which reads as covered and is not.

⭐ **Every instrument named below was verified to exist at the object before it was written down**
`[D] 2026-09-07`. ⚠ **And the first verification run returned seven false MISSINGs** — it executed from
`evidence/` rather than the vault root, so every relative path failed. Corrected by re-running from the
right cwd. ***A negative result is only as wide as the command that produced it*** (convention 16),
committed inside the artifact whose entire purpose is to name instruments correctly — eighth member of
that family, caught in the same minute by reading the output instead of trusting it.

## §2 · The 21 packets

Count **derived**: `ls -d */ | wc -l` → **21** `[D]`.

| # | Packet | Files | Disposition | Instrument / run |
|---|---|---|---|---|
| 1 | `inventory/` | 4 | **refreshable-by-instrument** | **`scripts/crawl_haussmann_b1.mjs`** — rebuilt at O2 today. ⚠ **Stale by 26 routes and two closed missions** (202 → 228; see `o2_crawler_record.md` §3) |
| 2 | `sweep/` | 6 | **refreshable-by-instrument** (3 of 5 files) | `scripts/reading_level.mjs` + `site/scripts/reading_census.mjs` → `reading_level.md`; `scripts/lh_summarize.mjs` + `site/scripts/gen_lighthouse_fixtures.mjs` → `lighthouse_summary.md`. ⛔ **`jsonld_census.md` has NO instrument** — see §3 |
| 3 | `captures_raw/` | 267 | **refreshable-by-instrument** | `scripts/visual_capture.mjs` (T0, 6 viewports × dark+light per [[doctrine_visual_inspection]]) |
| 4 | `captures_curated/` | 45 | **needs-a-run** — curation is a judgement, not a command | `scripts/visual_capture.mjs` **+ a human/agent selection pass**; the curated set is what a finding cites |
| 5 | `machine_eye/` | 7 | **needs-a-run** | the machine-eye protocol (instrument §6 Step 4); its `raw/` is regenerable, the report is authored |
| 6 | `claims/` | 2 | **needs-a-run** (never bulk-regenerated) | the register pass — per-row re-verification at the object, plus `gate-26`/`gate-20` fixtures. ⛔ A register is **not** a derived artifact |
| 7 | `scoring/` | 6 | ⛔ **historical-do-not-refresh** | **`AC-4` forbids touching it.** `P5.2` authors **new** sheets with fresh isolated scorers (`artifacts/p2_6/scorer_isolation_protocol.md`); the v1.0 sheets are the baseline the delta is measured against |
| 8 | `cohort/` | 4 | ⛔ **historical-do-not-refresh** | Phase-0 calibration exemplars (MCP, Mastra), scored under **v1.0**. Re-scoring them under v1.1 is a separate decision nobody has taken |
| 9 | `coldreads/` | 8 | **needs-a-run** — and the run is **`P5.1`'s** | ⛔ All 8 are `SYNTHETIC` (disclosed stand-ins, `[D-syn]`). **`P5.1`'s human panel is what replaces them**; no instrument here can |
| 10 | `dossier/` | 2 | ⛔ **historical-do-not-refresh** | Gate-B genesis dossier + its captures — the record of what was known at Gate B |
| 11 | `flux/` | 1 | ⛔ **historical-do-not-refresh** | P0.4/P3.4 Fluxer assessment; superseded by ADR-054 and the delivered Aspasia exchange |
| 12–21 | `captures_p1_2` · `p1_4` · `p2_2` · `p2_3` · `p2_4` · `p2_6` · `p3_3` · `p3_4` · `p3_5` · `p1_1_captures` | 54·52·37·37·26·158·18·51·50·37 | ⛔ **historical-do-not-refresh** (all 10) | Per-mission capture sets, each the evidence for a **closed** mission. Refreshing them would destroy the before-state its findings cite. **New captures go to a new dated directory** |

**Derived tally: 21 rows = 3 `refreshable-by-instrument` · 4 `needs-a-run` · 14 `historical-do-not-refresh`.**
Every row carries a non-empty disposition **and** a non-empty instrument field — `V3`'s two limbs.

## §3 · ⛔ The one gap this enumeration found, named rather than smoothed

**`sweep/jsonld_census.md` has no instrument.** `grep -rln "jsonld\|json-ld" scripts/ site/scripts/`
→ **0 hits** `[D]`. Its sibling files in the same packet each have one; this one was produced at genesis
and nothing re-derives it.

⇒ **`sweep/` is only *partly* refreshable, and a row reading "refreshable-by-instrument" without this
qualifier would have been exactly the defect `AC-3` forbids** — a disposition asserted about a packet
rather than about its contents. ⛔ **Not built here**: authoring a JSON-LD census at this objective's
tail would be the eighth instrument this desk has written at a sitting's end, and conventions 15/16/17
each ruled against that. **It is named for `P5.2` as a known gap with a stated cost**, which is what a
scope document is for.

⚠ **Second-order point worth carrying:** the enumeration found this **because it demanded an instrument
name per row**. A table with only dispositions would have marked `sweep/` refreshable and moved on.
*The field that felt like bookkeeping is the field that found the hole.*

## §4 · What `P5.2`'s O0 can now say, and could not before

Its precondition — *"refreshes EVERY evidence packet or states which it did not"* — is now **checkable**:

- **3 packets** it can refresh with a command, one of which (`inventory/`) has an instrument only as
  of today.
- **4 packets** needing a run or a judgement, **one of which (`coldreads/`) it cannot do at all** —
  that is `P5.1`'s human panel, which is the campaign's standing human gate.
- **14 packets** it must **not** touch, with the reason on each row.

⇒ **The honest form of P5.2's O0 statement is now writable in advance**: *"refreshed 3, ran 3 of 4,
deferred `coldreads/` to P5.1, left 14 historical untouched by design, and `jsonld_census.md` has no
instrument."* ⭐ **That sentence was not constructible yesterday**, and its unconstructibility — not any
missing file — was what made the precondition unfalsifiable.
