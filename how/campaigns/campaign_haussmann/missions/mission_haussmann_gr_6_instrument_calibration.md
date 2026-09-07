---
plan_id: mission_haussmann_gr_6_instrument_calibration
type: plan
title: "GR-6 — the two P5.2 preconditions nobody owned: instrument v1.1 and the lost production crawler"
campaign: campaign_haussmann
phase: GR
decade: 2
owner: stanley
status: completed   # ✅✅ **CLOSED 2026-09-07 — ALL FOUR CRITERIA MET, AAR FILED (SO#5). AC-1 ✅ AC-2 ✅ AC-3 ✅ AC-4 ✅ · V1 ✅ V2 ✅ V3 ✅ V4 ✅.** Self-test 17/17 · crawler red-proof 6/0/0 · header 13/13 IDENTICAL · live 228 routes · packet table 21/21 rows with a disposition AND an instrument · `git diff` over `evidence/` **empty**. ⛔ **Nothing deployed and nothing owed to production** — GR-6 carries no site bytes; prod serves `1cc80ca`. ⇒ **`P5.2`'s two hard preconditions are DISCHARGED**; what still blocks it is `P5.1`, which is human. ~~in_progress~~ · signature note follows: ⛩⛩ **SIGNED 2026-09-07 (local 09-06) — THE PRE-BUILD GATE IS PASSED, SIGNED AS PROPOSED.** All four criteria, all four V-limbs and the band ratified without amendment; the three defects and one ordering constraint the convention-13 pass found were already applied to the criteria before the file reached disk. Budget ⛩ **RATIFIED at ~140–210 kT / 2 sessions for O2–O4**, explicitly EXCLUDING `AC-1`'s already-spent ≈95–130 kT — *a band that covers spent work is unfalsifiable*. Charter same-diff **`mission_count` 32 → 33** performed in the signing commit. ⚠⚠ **THE DEVIATION IS RATIFIED WITH THE MISSION, NOT WAIVED BY IT: `AC-1` was performed AT the gate**, so it is ratified **post-hoc** and the convention-13 pass is a **post-hoc coherence check for `AC-1` and a pre-build gate for `AC-2`–`AC-4`**. The operator was shown this before signing and signed anyway; that is a decision, not an oversight, and it is recorded as one. ⏭ O2 → O3 → O4 may now begin. ~~queued~~ · prior gate note follows: ⏸ HALTED AT ITS ⛩ CONVENTION-13 PRE-BUILD GATE, 2026-09-05. Criteria NOT ratified, budget NOT ratified. ⚠⚠ READ THE DEVIATION IN §Progress BEFORE READING THE CRITERIA: `AC-1` was PERFORMED at this gate under the operator-approved plan for the sitting, so this mission documents completed work for one criterion and gates the rest. That is a departure from "pass first, no build until signed" and it is named rather than absorbed.
mission_class: instrument
executor_tier: opus   # per-increment, on the P4.4 precedent (a declared tier nobody honours is worse than none): O1 authoring = opus (DONE) · O2 crawler = sonnet (mechanical, with red-proof) · O3 packet scope = sonnet · O4 close = opus
token_budget_estimated: "⛩⛩ **RATIFIED AS PROPOSED 2026-09-07** — **~140–210 kT across 2 sessions** for the REMAINING work (O2 crawler + its red-proof · O3 packet-refresh scope · O4 close cascade + AAR). ⛔ This band EXCLUDES `AC-1`, which was performed at the gate sitting at ≈95–130 kT and is recorded there, not here — quoting a band that covers already-spent work would make the band unfalsifiable. ⚠ ~40 kT of any HAUSSMANN sitting is the campaign CLAUDE.md, auto-loaded — inside this band, not beside it. ⛔ The Speed Insights transport is NOT in this band and NOT in this mission: it is its own gate (`artifacts/gr_6/speed_insights_transport_design.md`). (ADR-016 / SO#11)"
token_budget_actual: "≈150–190 kT for O2+O3+O4 — **RECORDED AT THE TIME**, not reconstructed (the P4.3-class defect this campaign has hit four times). Against the ⛩ ratified **~140–210 kT / 2 sessions**: **inside the band, and delivered in ONE session rather than two.** ⛔ Outside it and declared as such at the session open, never absorbed: the four outward acts (push + two deliveries + the Hopper draft) at ≈40–55 kT. ⭐ The band held for the reason GR-4 named and GR-5 confirmed — **the scope was ruled at the gate before any of it was built**, so nothing was costed against a scope nobody had chosen. No SO#11 retrospective."
created: 2026-09-05
last_edited_by: agent_rosetta
grounded_in:
  - "artifacts/p2_6/p2_replan.md:444 (the routing: v1.1 + the crawler, 'Routed (non-blocking)', no owner)"
  - "mission_haussmann_p5_2_rescore_capstone.md status: ('the v1.1 anchor fix MUST land BEFORE this mission')"
  - "evidence/scoring/reconciliation_p2_6.md:65-94 (the D2 conjunctive drift, priced at ~0.8 weighted points)"
  - "artifacts/gr_6/anchor_defect_derivation.md (the derived defect set — the 'five filed' list does not exist)"
  - "evidence/inventory/page_inventory.csv (the crawler's output contract, 13 columns, committed)"
vitruvius_dimensions: []
decade_theme: credibility
webforge_patterns: []
patterns_to_author: []
depends_on: []
blocks: [mission_haussmann_p5_2_rescore_capstone]
acceptance_criteria:
  - "AC-1 (PERFORMED AT THE GATE — see the deviation) — `directives/OPERATION_VITRUVIUS_review_instrument.md` reads **Version 1.1** and addresses every defect in the DERIVED set (`artifacts/gr_6/anchor_defect_derivation.md` §2), not an inherited count: **AD-1** conjunctive-bundle split rule · **AD-2** a rung-1 anchor on all twelve dimensions · **AD-3** awardability (`graded`/`provisional`/`unawardable`) · **AD-4** `FAILS` vs `UNEVIDENCED` clause disposition · **AD-5** between-rungs tie-break. A changelog names each change AND the evidence line that filed it. ⛔ The instrument-boundary caveat is ON ITS FACE: the 51.6 baseline and the P2.6 midscore were awarded under v1.0, so any v1.1 delta is not pure site movement."
  - "AC-2 — `scripts/crawl_haussmann_b1.mjs` re-authored, emitting the **committed output contract** and not an invented one: `evidence/inventory/page_inventory.csv`'s **13 columns** (`url,http_status,title,meta_description,h1,word_count,template_guess,classification,last_modified,depth_from_home,inbound_link_count,is_orphan,mixed_case_url`) plus `link_graph.json`'s node shape. ⛔ **Convention 14 binds twice**: it is NOT BELIEVED until demonstrated to fail (mutate a route out of the build → the inventory shrinks → restore → it returns), AND it must **assert it reached what it claims to check** (`res.ok` + same-origin, the `check_live_headers.mjs` scar). ⚠ Scope is DERIVED, not assumed: the genesis packet holds **202** rows against **228** live sitemap routes `[D] 2026-09-05` ⇒ **26 routes it has never seen.**"
  - "AC-3 — P5.2's packet-refresh precondition is SCOPED so it is checkable: a table naming **every** directory under `evidence/` (**21**, derived — `ls -d */ | wc -l`), each row carrying (a) a disposition — `refreshable-by-instrument` / `needs-a-run` / `historical-do-not-refresh` — and (b) **the named instrument or run** that would refresh it. ⛔ A row with a disposition and no instrument is INCOMPLETE, not done: that is the shape P5.2's precondition exists to prevent (`refreshes EVERY evidence packet or states which it did not`)."
  - "AC-4 (a PROHIBITION, and it bounds AC-1) — **NOTHING IS RE-SCORED IN THIS MISSION.** `evidence/scoring/`'s score tables, reconciliations and composites are untouched. Changing an anchor and re-reading a score in one pass is the exact mechanism that produced the ~0.8-point D2 drift; scoring under v1.1 is `P5.2`'s, with fresh isolated scorers per `artifacts/p2_6/scorer_isolation_protocol.md`."
verification_method: |
  V1 — the instrument reads `Version 1.1`; **all twelve** anchor tables show a complete `0 1 2 3 4 5` ladder (derived by script, not read by eye); the changelog table names five changes each with its filing line; §5.1 contains **four named rules** — the split rule, the tie-break, the FAILS/UNEVIDENCED table, and the awardability table — each present as a rule and not only as a changelog row  [asserts AC-1]
  V2 — the crawler is RED-PROVEN by mutation (a route removed from the build shrinks the inventory; restored, it returns) AND its output validates against `page_inventory.csv`'s 13-column header **read from the committed file, never transcribed**; it fails loudly on a non-ok or cross-origin response  [asserts AC-2]
  V3 — the packet table's row count is DERIVED from disk and equals it; **every** row carries a non-empty disposition AND a non-empty instrument field  [asserts AC-3]
  V4 — `git diff` over `evidence/scoring/**` shows zero changes to any score, composite or reconciliation table across the whole mission  [asserts AC-4]
human_gate: true
tags: [plan, haussmann, gr_6, instrument, anchors, crawler, p5_2_precondition]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> This mission builds no site bytes and ships no copy. It repairs the two instruments `P5.2` declares
> it cannot open without.

## Why this mission exists — an orphan, not new scope

`artifacts/p2_6/p2_replan.md:444` files two items under **"Routed (non-blocking)"**:

> *"**v1.1 instrument fix** — before P5.2 (§1.6). Five filed anchor defects; the conjunctive-bundle
> split rule is the load-bearing one. **The missing production crawler** — `scripts/crawl_haussmann_b1.mjs`
> was run from a scratchpad at genesis and is gone… Re-author before P5.2's full pack refresh."*

`mission_haussmann_p5_2_rescore_capstone.md`'s own `status:` hardens the first into a precondition:
the fix **"MUST land BEFORE this mission."**

⇒ **Required by a mission that cannot open until they land; owned by nothing, for twenty days.** This is
`R-64`'s lesson verbatim — *a caveat in the register is a finding with a home and no gate* — and
`F-v`'s — *a deferral recorded only in narrative is a deferral with no gate*. Verified at the object at
this gate `[D] 2026-09-05`: the instrument header still read **`Version 1.0 · Date 16 August 2026`**.

**It is also the right work for now, and that is a scheduling fact rather than a preference.** `P5.1`
is the campaign's critical path and is **entirely the operator's**; nothing agent-side moves it. GR-6
sits *behind* that gate and can finish before the readers arrive.

⛔ **This mission does not advance `P5.1`.** Said so it is not inferred.

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O1 | Derive the defect set; author instrument v1.1 | v1.1 + derivation record | ✅ **DONE at the gate — see the deviation** |
| O2 | Re-author `crawl_haussmann_b1.mjs`; red-prove it | crawler + red-proof record | ⛩ after signature |
| O3 | Scope the P5.2 evidence-packet refresh | packet disposition table | ⛩ after signature |
| O4 | Close cascade — AAR, same-diff counts, STATE | close records | ⛩ operator |

## Constraints

No re-scoring (AC-4). No site bytes. No deploy is authorized or owed. Every count derived, not typed
(KW-14). ⛔ **No instrument is authored at a sitting's tail** — conventions 15/16/17.

## Definition of done

`P5.2` can open without stopping at its own preconditions, and its re-score runs on a calibrated
instrument whose boundary with v1.0 is stated rather than discovered in the delta.

---

## Progress

### ⚠⚠ DEVIATION, NAMED AT THE TOP BECAUSE IT CHANGES HOW THE CRITERIA READ (2026-09-05)

**`AC-1` was performed BEFORE this mission file existed.** The operator approved a session plan whose
ordered steps were *derive → author v1.1 → re-author the crawler → run the convention-13 pass → author
the mission → halt at the signature*. Executed literally, that **inverts** the campaign's standing law —
eleven missions of *pass first, no build until signed*.

**What was actually done, and the line that was drawn.** `AC-1` (a governance document) was performed
under the approved plan's authority. **`AC-2` was NOT**, and the crawler was **deliberately not
authored at this sitting's tail** — three reasons, each independently sufficient and all three already
ruled in this campaign:

1. Conventions 15/16/17 each declined to author an instrument at a sitting's tail, and **the standing
   count of this desk's instruments later found defective is the argument** — six-plus in a month, two
   of them inside the sitting that catalogued them.
2. Convention 14 requires a red-proof **with controls**, which is a sitting's work, not a tail's.
3. The crawler is `AC-3`'s named instrument (CONSTRAINT-1 below), so building it before `AC-3`'s scope
   exists would fix its output shape against a consumer nobody has enumerated.

⇒ **This mission documents one completed criterion and gates three.** ⛔ The honest consequence: for
`AC-1`, the convention-13 pass below is a **post-hoc coherence check**, not a pre-build gate — it can
still find that a criterion and its limb disagree (**and it did — DEFECT-1**), but it can no longer
prevent the build. *A pass run after the build is worth less than one run before it, and saying which
you have is the whole of the difference.*

### ⭐⭐ The pass's first finding arrived before a criterion existed: the "five filed anchor defects" name a list no artifact holds

`p2_replan.md:444` says *"Five filed anchor defects"*; `reconciliation_p2_6.md:91` says *"already on
the filed list."* **Each points at the other's list and neither is one** `[D]`. ⇒ **two prose
references, zero enumerations** — one claim written twice, the class GR-4's close named as *three
agreeing indexes are not a corroboration.*

The set was therefore **derived from the scoring record** (`artifacts/gr_6/anchor_defect_derivation.md`):
**AD-1** conjunctive bundles · **AD-2** no rung 1 anywhere · **AD-3** undefined awardability ·
**AD-4** failing-vs-unevidenced · **AD-5** no between-rungs tie-break.

⚠ **The cardinality matching "five" is a COINCIDENCE and is not offered as corroboration.** With no
filed list to compare against, nothing can say whether these are *those* five. Reading the match as
confirmation would be committing §1's defect inside the file correcting it.

⭐ **AD-2 was found by deriving over the instrument rather than by reading the scoresheets**, and it is
the one no scoresheet could have surfaced: **every one of the twelve anchor tables skips rung 1**, while
§5's composite admits 1 as a legal score. Five of twelve dimensions reconciled to **2**, with both
baseline scorers repeatedly recording *"above anchor 2's letter"* and nowhere to put it — so **the
bottom of this scale is a two-point cliff exactly where this site sits.**

### Convention 13 — the pass, COMPLETE at 22/22, coverage recorded

**Pair count derived, not typed** (KW-14): `AC×AC = C(4,2) = 6`, plus `AC×V = 4×4 = 16` ⇒ **22**. Each
read **both** directions — **AC→V** (*can the stated method move the stated test?*) and **V→AC** (*is
this criterion tested by anything at all?*).

**Tally, re-derived from the table itself: 18 clean-or-correctly-unrelated · 3 defective · 1 ordering
constraint.**

| Pair | Direction that found it | Verdict |
|---|---|---|
| AC-1×V1 | **V→AC** | ⛔ **DEFECT-1** — see below |
| AC-1×V2/V3/V4 | both | clean (V4 correctly bounds AC-1; V2/V3 unrelated) |
| AC-2×V2 | **AC→V** | ⛔ **DEFECT-2** — see below |
| AC-2×V1/V3/V4 | both | clean, correctly unrelated |
| AC-3×V3 | **V→AC** | ⛔ **DEFECT-3** — see below |
| AC-3×V1/V2/V4 | both | clean, correctly unrelated |
| AC-4×V4 | both | clean — a prohibition tested by a diff is the tightest pairing in the set |
| AC-4×V1/V2/V3 | both | clean, correctly unrelated |
| AC-1×AC-4 | AC×AC | clean **and load-bearing** — AC-4 is what makes AC-1 safe; stated so a later reader does not read AC-4 as boilerplate |
| AC-2×AC-3 | AC×AC | ⚠ **CONSTRAINT-1** — ordering |
| AC-1×AC-2, AC-1×AC-3, AC-2×AC-4, AC-3×AC-4 | AC×AC | independent |

#### ⛔ DEFECT-1 (V→AC) — V1 asserted ONE of AC-1's five deliverables, and the four it missed are the four that matter

As first drafted, V1 checked the **version string**, the **twelve ladders**, and the **changelog rows**.
Of the derived set, only **AD-2** is a ladder; **AD-1, AD-3, AD-4 and AD-5 are prose rules in §5**.

⇒ **A v1.1 carrying the changelog table and the rung-1 rows but with §5 entirely unwritten would have
passed V1** — and the changelog table *describes* the four missing rules, so the limb would have been
reading a **claim that the rules exist** as evidence that they do. ⭐ **The index-vs-artifact class,
inside a verification limb**: the changelog is an index of the instrument, and V1 was checking the index.

⚠ **And AD-1 is the one the whole mission is for** — the conjunctive split rule is what
`p2_replan.md:444` calls *"the load-bearing one."* The limb was blind to precisely it.

**Remedy, costing nothing:** V1 gains *"§5.1 contains four named rules — the split rule, the tie-break,
the FAILS/UNEVIDENCED table, and the awardability table — **each present as a rule and not only as a
changelog row**."* Applied to the criteria above **before** this file reached disk.

#### ⛔ DEFECT-2 (AC→V) — AC-2's "consumable by P5.2's O0" names a contract P5.2 does not define

AC-2 was first drafted as *"emitting a page inventory `P5.2`'s O0 can consume."* Read against V2: V2
red-proves **detection** (a removed route shrinks the inventory) and says nothing about **shape**. ⇒ a
crawler emitting a correct inventory in an unusable form passes V2.

⭐ **The remedy came from measuring instead of inventing.** `P5.2`'s O0 declares no schema `[D]`, so the
criterion could not be written against it — **but the contract already exists as a committed artifact**:
`evidence/inventory/page_inventory.csv` carries **13 named columns**, and `link_graph.json` a node
shape. AC-2 now names them, and V2 validates against the **header read from the committed file, never
transcribed** (KW-14 / convention 4's discipline).

⚠ **This is the P3.1/P3.3 shape caught early**: a method that cannot satisfy the test's real target,
which executed as written would have reported done against a consumer that could not read the output.

#### ⛔ DEFECT-3 (V→AC) — V3 tested the packet list's LENGTH, not its content

AC-3 requires each of the 21 packet rows to carry a **disposition** *and* a **named instrument**. V3, as
drafted, asserted only that the row count matched disk. ⇒ **21 rows with every instrument cell empty
would have passed.**

⭐ That is exactly the failure `P5.2`'s precondition was written against — *"refreshes EVERY evidence
packet **or states which it did not**"* — so the limb would have certified the very silence the
precondition forbids. **Remedy is free**: V3 asserts both fields non-empty.

#### ⚠ CONSTRAINT-1 (AC×AC) — AC-3 depends on AC-2, and neither said so

The crawler is the **named instrument** for the `inventory/` packet, so AC-3's table cannot mark that
row `refreshable-by-instrument` until AC-2 exists. ⇒ **O2 precedes O3**, and this is a dependency, not
a preference. ⚠ It also runs the other way at the margin — AC-3's enumeration is what tells AC-2 which
consumers the output serves — which is the second reason the crawler was not built at this gate.

### Scope, derived rather than assumed

| Fact | Value | Command |
|---|---|---|
| Live sitemap routes | **228** | `curl -s .../sitemap-0.xml \| grep -o '<loc>' \| wc -l` |
| Genesis `page_inventory.csv` rows | **202** | `wc -l` − 1 |
| ⇒ routes the packet has never seen | **26** | derived |
| `evidence/` packet directories | **21** | `ls -d */ \| wc -l` |
| Anchor ladders now complete `0–5` | **12 / 12** | `awk` over the anchor tables |

⚠ **`page_inventory.csv` is stale by 26 routes and its rows are absolute `https://adna.network/…` URLs**,
so a refresh reads **production**, not a local build — which makes `AC-2`'s `res.ok` + same-origin
assertion load-bearing rather than ceremonial (convention 14's second clause, and the
`check_live_headers.mjs` scar: that instrument passed 4/4 having read Vercel's SSO login page).

### ⛩ What is owed at the signature

1. **Ratify or amend the four criteria and four V-limbs** above (DEFECT-1/2/3 and CONSTRAINT-1 are
   already applied to them).
2. **Ratify the budget** — proposed **~140–210 kT / 2 sessions** for O2–O4, explicitly excluding AC-1's
   already-spent ≈95–130 kT.
3. **Same-diff admin** (convention 7 / ADR-057, and GR-2's four-day lesson): charter `mission_count`
   **32 → 33**, `estimated_sessions` and `calibrated_sessions` re-derived in the same commit,
   `phase_count` **HOLDS at 6**. ⚠ **The campaign `CLAUDE.md` mission index reads 31 and is stale** —
   disk and charter both read **32** `[D]`; the approved plan for this sitting inherited the stale 31,
   which is `F-u`'s class in the plan written to fix an orphan of that kind. Corrected in the same commit.

~~⏭ **NEXT: ⛩ THE SIGNATURE. Until then, O2/O3/O4 do not begin.**~~

### ⛩⛩ SIGNED 2026-09-07 — AS PROPOSED. O2 IS OPEN

Session `session_stanley_20260907_063127_haussmann_gr_6_signature_and_o2`.

> **decision**: ratify GR-6's four criteria, four V-limbs and band **as proposed**, with `AC-1`
> ratified post-hoc and the deviation standing on the record.
> **ratified-by**: operator (⛩, via AskUserQuestion at the 2026-09-07 session-planning gate)
> **date**: 2026-09-07 (local 2026-09-06)
> **status**: accepted

**Three admin items performed in the signing commit, not recorded as taken** (GR-2 left an identical
ruling unperformed at the charter for four days):

| Field | Was | Now | Derivation |
|---|---|---|---|
| `mission_count` | 32 | **33** | `ls missions/mission_haussmann_*.md \| wc -l` → 33 = 27 `p{0..5}` + **6** `gr_*` |
| `estimated_sessions` | 45-61 | **47-63** | + GR-6's ratified 2 |
| `calibrated_sessions` | 44-51 | **46-53** | + GR-6's ratified 2 |

⚠ `phase_count` **HOLDS at 6** — GR is a lane, not a seventh phase.

⭐ **What the operator was shown before signing, because a post-hoc ratification is only honest if the
signer knew:** that `AC-1` was already built, that the pass could therefore no longer *prevent* that
build, and that the alternative on the table was to sign `AC-2`–`AC-4` and hold `AC-1` for independent
verification at `P5.2`'s open. **They chose to sign as proposed.** ⇒ *the deviation is ratified, not
excused* — and the distinction matters to `P5.2`, which will read this mission as the provenance of the
instrument it scores on.

~~⏭ **NEXT: `O2`**~~ ✅ **O2 IS DONE 2026-09-07 — `AC-2` ✅ · `V2` ✅.** Record:
`artifacts/gr_6/o2_crawler_record.md`. Built `scripts/crawl_haussmann_b1.mjs` +
`scripts/crawl_haussmann_b1_redtest.mjs`. **Self-test 17/17 · red-proof 6 pass / 0 fail / 0 harness
bug**, every case red at its **declared** assertion set. Header **13/13 IDENTICAL** to the committed
contract, parsed at run time and never transcribed. Live run: **228 routes · 0 non-200 · 0 orphans**.

⭐⭐ **THE LIVE RUN REPRODUCED TWO CLOSED MISSIONS FROM THE OUTSIDE, UNPROMPTED.** Against the genesis
packet: **61 new · 35 gone · `202 − 35 + 61 = 228`** ✅. Of the 35 departures, **24 are
`/vaults/<MixedCase>.aDNA/`** (`mixed_case_url` **24 → 0**) — **ADR-051 / P2.1's canonicalization** — and
**11 are audience-segment routes** (`/adopters/*`, `/compliance/`, `/educators/`, `/enterprise/`,
`/researchers/`, `/startup-first-hour/`) — **P2.2's IA consolidation**, which retired exactly the
*"audience-segment pages as IA"* shape the instrument names as a D2 failure mode. ⇒ *an instrument that
independently re-derives two ratified outcomes it was never told about is measuring the world rather
than its own expectations.*

⚠ **The self-test's first run failed and the failure was the TEST's** — word count asserted 6, returned
10; anchor text is body text and the extractor was right. Corrected **in the test's own comment**, not
quietly: *a test edited to match its subject is worthless unless you can say which one moved.*

⛔ **The committed packet is NOT overwritten** — `AC-2` builds the instrument, `AC-3` scopes the
refresh, and the refresh itself is `P5.2`'s O0. Overwriting would also destroy the 2026-08-16 baseline
the delta above is measured against. `git diff` over `evidence/` is **empty**.

~~⏭ **NEXT: `O3`**~~ ✅ **O3 IS DONE — `AC-3` ✅ · `V3` ✅.** Record:
`artifacts/gr_6/o3_packet_refresh_scope.md`. **21 packets** (count derived from disk), every row
carrying a disposition **and a named instrument**: **3 `refreshable-by-instrument` · 4 `needs-a-run` ·
14 `historical-do-not-refresh`**, re-derived from the table itself.

⭐⭐ **THE FIELD THAT FELT LIKE BOOKKEEPING IS THE FIELD THAT FOUND THE HOLE.**
`sweep/jsonld_census.md` **has no instrument** — `grep -rln "jsonld\|json-ld" scripts/ site/scripts/`
→ **0** `[D]`. Its siblings in that packet each have one. ⇒ **`sweep/` is only PARTLY refreshable, and
a row reading "refreshable-by-instrument" without that qualifier would have been the exact defect
`AC-3` forbids** — a disposition asserted about a *packet* rather than about its *contents*. A table
carrying dispositions alone would have marked it refreshable and moved on. ⛔ **Not built**: an eighth
instrument at a sitting's tail is what conventions 15/16/17 each ruled against; it is named for `P5.2`
as a known gap with a stated cost.

⚠ **And the instrument-existence check returned SEVEN FALSE MISSINGs on its first run** — executed from
`evidence/` rather than the vault root, so every relative path failed. ***A negative result is only as
wide as the command that produced it*** (convention 16), committed inside the artifact whose whole
purpose is naming instruments correctly. Caught in the same minute by reading the output rather than
trusting it — **eighth member of that family.**

⇒ **`P5.2`'s O0 statement is now CONSTRUCTIBLE IN ADVANCE**: *"refreshed 3, ran 3 of 4, deferred
`coldreads/` to P5.1, left 14 historical untouched by design, and `jsonld_census.md` has no
instrument."* ⭐ **That sentence could not be written yesterday, and its unconstructibility — not any
missing file — was what made the precondition unfalsifiable.**

---

## AAR (SO#5)

**Worked.** Deriving instead of inheriting, three times over, and each time it changed the work:
the *"five filed anchor defects"* list **did not exist** (O1); the crawler's schema came from the
**committed CSV header** rather than from memory; and O3's per-row **instrument** field found a packet
with no instrument. ⭐ The convention-13 pass has now paid for itself on **twelve consecutive missions**.

**Didn't.** `AC-1` was built **before** its gate, so for that criterion the pass could only be a
post-hoc coherence check. It still found `DEFECT-1` — V1 asserting one of five deliverables — but it
could no longer have *prevented* anything. The operator was shown this and ratified it deliberately;
that makes it a decision rather than a slip, and it is still a departure worth not repeating.

**Finding.** ⭐⭐ **An instrument that independently re-derives outcomes it was never told about is
measuring the world rather than its own expectations.** The crawler's first live run reproduced
**ADR-051/P2.1** (24 `/vaults/<MixedCase>.aDNA/` gone, `mixed_case_url` **24 → 0**) and **P2.2's IA
consolidation** (11 audience-segment routes gone) from a sitemap alone. No assertion in the harness was
aimed at either. **That is a stronger validation than any single test could be**, and it is available
for free to any instrument whose subject has a recorded history.

**Change.** Two habits earned themselves this sitting and are worth carrying rather than re-deriving:
**(1)** a red-test case must declare the assertion it targets, so a red through a different one reports
as `HARNESS BUG` — authored at the start here rather than discovered in a harness's fourteenth day;
**(2)** a scope table must demand a **named instrument per row**, not a disposition per packet.

**Follow-up.** `sweep/jsonld_census.md` has **no instrument** — named for `P5.2`, deliberately unbuilt.
The `inventory/` packet is **stale by 26 routes and two closed missions** and is now refreshable; the
refresh is `P5.2`'s O0, not this mission's. ⛔ **`P5.2` is still blocked, and no longer by us** — its
remaining dependency is `P5.1`, which is human.

⚠ **Two of this sitting's four instrument-adjacent defects were in MY OWN checks, not in the subject**
(the word-count expectation; the seven false MISSINGs). Both were caught by reading output rather than
trusting an exit code. **The streak continues, and so does what catches it: structure, not vigilance.**

