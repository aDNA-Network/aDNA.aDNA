---
type: artifact
campaign: campaign_haussmann
mission: mission_haussmann_p4_5_voice_rewrite
increment: P4.5b
objective: O0a
title: "P4.5b — convention-13 pre-build gate: coverage record + AC amendment proposal"
created: 2026-08-25
updated: 2026-08-26
status: accepted        # ⛩ OPERATOR-SIGNED 2026-08-26. Then CORRECTED IN PLACE the same day at O1 pre-flight, strike-not-delete, under the operator's ruling: AC-b's metric is PROSE-ONLY, and AC-c's live scope is 8 not 7. The signature stands — only the factual basis moved, and the ~280–400 kT band did not, so no re-ratification is owed. Both corrections are mine and both are visible: §5's correction block and the baseline's.
last_edited_by: agent_rosetta
coverage: "22/22 pairs — 16 AC×V + 6 AC×AC. Complete; see §2 for the matrix."
verdict: "3 FAILURES · 2 structural gaps · 1 stale amendment · 4 premise corrections — PLUS 2 self-corrections landed 2026-08-26: a surface mismatch (HTML grep for a reader-facing claim) and an arithmetic miscount (rows counted, not the clinician's bullets)"
precedent: ["artifacts/p4_3/ac_amendment_proposal.md (accepted)", "artifacts/p4_4/ac_amendment_proposal.md (accepted)", "artifacts/p4_2/ac_amendment_proposal.md (accepted)"]
tags: [artifact, haussmann, p4_5b, convention_13, ac_amendment, pre_build_gate]
---

# P4.5b pre-build gate — coverage record and proposed amendments

> **⛔ Nothing is built against this until it is signed.** Convention 13, as amended at P3.3 O3: the
> pass must be **complete** and must **record its coverage**, because *a partial pass reads as a clean
> bill of health to everyone downstream, including the operator who ratifies the budget on it.*
> This is the **fifth** consecutive mission to run it, and it has found something every time.

## 1. What was read against what

**Method-bearing criteria (4)** — P4.5b's `acceptance_criteria`, the four entries prefixed `P4.5b —`:

| id | criterion (abbrev.) |
|---|---|
| **AC-a** | A voice guide **in the tree**, verified against a local preview; publication *named as owed*, unblock condition on the mission's face |
| **AC-b** | Top-20 pages rewritten: FKGL ≤ 10 first-contact (home, get-started, what-is-adna, community), ≤ 12 reference intros; every proprietary term glossary-linked at first use |
| **AC-c** | The clinician's verbatim confusion list resolved item-by-item (rewritten, defined-in-place, or cut) |
| **AC-d** | `reading_level.mjs` thresholds wired as a **non-blocking** CI report (trend visible); `skill_dual_audience_review` passed on every rewritten page |

**Test-bearing limbs (4)** — `verification_method`, P4.5b half: *"reading-level deltas + dual-audience
review records + synthetic cold-read re-test + ranker."*

| id | limb |
|---|---|
| **V1** | reading-level deltas |
| **V2** | dual-audience review records |
| **V3** | synthetic cold-read re-test |
| **V4** | ranker |

**Coverage: 22/22 pairs — 16 AC×V + 6 AC×AC.** Every pair below carries a verdict.

## 2. The matrix

### AC × V (16)

| | **V1** deltas | **V2** DA records | **V3** cold-read | **V4** ranker |
|---|---|---|---|---|
| **AC-a** guide | ✗ no reach | ✗ no reach | ✗ no reach | ✗ no reach |
| **AC-b** FKGL | ⚠ **was broken, fixed at O0b** | ✓ reaches | ✓ reaches | ✓ reaches |
| **AC-b** glossary-link | ✗ no reach | ◐ human only | ✗ no reach | ✗ no reach |
| **AC-c** clinician list | ✗ no reach | ◐ partial | ✓ **the natural test** | ◐ weak |
| **AC-d** CI report | ✓ consumes it | — | ✗ | ✗ |
| **AC-d** DA reviews | ✗ | ⛔ **identical to V2** | ✗ | ✗ |

*(The table has 6 rows because AC-b and AC-d are each two independent assertions in one string. Read
as 4 criteria it is 16 pairs; the split is how they were actually examined, and every pair is
covered either way.)*

### AC × AC (6)

| pair | verdict |
|---|---|
| AC-a × AC-b | ⛔ **nothing requires the rewrite to follow the guide** — see FAILURE 1 |
| AC-a × AC-c | ⛔ same |
| AC-a × AC-d | ⚠ minor — the thresholds live in AC-b, the prose in AC-a; the guide need not state its own numbers |
| **AC-b × AC-c** | ⚠ **DIRECT TENSION, and it is real** — defining a term in place adds syllables and clauses, so **resolving a clinician item can push FKGL up.** Two criteria pulling opposite ways, discovered here rather than mid-rewrite |
| AC-b × AC-d | ✓ consistent by design — the gate is **non-blocking**, so AC-d cannot enforce AC-b, and is not meant to |
| AC-c × AC-d | ✓ no interaction |

## 3. The three failures

### ⛔ FAILURE 1 — AC-a is covered by **zero** verification limb, and nothing binds the rewrite to it

All four V limbs measure **rendered pages**. AC-a's deliverable is a **governance document**. A
one-paragraph voice guide, never applied to a single sentence, passes AC-a and leaves V1–V4 unmoved —
and AC-b/AC-c could be met by *any* rewrite, guided or not.

This is **P4.1's structural gap inverted.** There, an objective's output was covered by no criterion
(*"all four ACs could pass with zero slots built"*). Here, a criterion is covered by no limb. Same
defect, opposite end of the chain — which is the argument for running the matrix in **both**
directions rather than only AC→V.

**Proposed remedy — bind the guide to the work, do not add a fifth reviewer.** Amend **V2** so the
dual-audience review records must **cite the guide rule each rewrite decision applied**. The guide then
becomes falsifiable through work already required: a rule nothing cites is a rule that did not govern,
and a rewrite citing no rule is a rewrite the guide did not produce.

### ⛔ FAILURE 2 — AC-b's glossary-linking half has no test, and *"every proprietary term"* is unenumerated

*"Every proprietary term glossary-linked at first use"* is a **machine-checkable** claim with **no
machine check** — V1 is a syllable count, V3/V4 are impressionistic, and only V2 (a human/skill pass)
could catch a miss, page by page, unreliably. And **no list of "proprietary terms" exists anywhere in
the campaign**, so *"every"* has no denominator — WebForge KW-14's defect in its purest form: a
quantifier over an underived set.

⭐ **The denominator already exists and nobody has used it.** `/glossary` ships **25 entries** `[D]`
(`dist/glossary/*/`), each a canonical definition home — which is exactly what convention/D4.7 says the
glossary is for. That is the term list, derived from the build.

**Proposed remedy:** derive the term set from the glossary collection; gate first-use linking as part
of **`gate-48`** (§5), red-proven. **Scoped to the 21 rewritten routes**, not site-wide — a site-wide
first-use rule is a much larger claim than this mission is funded for, and pretending otherwise is how
the last four budgets drifted.

### ⛔ FAILURE 3 — AC-d's second limb and V2 are the same sentence, so the criterion certifies itself

AC-d requires *"`skill_dual_audience_review` passed on every rewritten page."* V2 verifies via
*"dual-audience review records."* **The criterion is the artifact that verifies it.** Convention 4
closes on *the builder never self-certifies*, and this is that, structurally: the same agent writes the
copy, runs the skill on its own copy, and files the record that proves it passed.

**Proposed remedy — the cheap half, not a reviewer panel.** The records must be **auditable against the
skill's own checklist**: each record names the skill's criteria and marks each pass/fail with the
evidence sentence, so a later reader can disagree with a specific line rather than being handed a
verdict. Independent re-review is **offered and declined-or-taken by the operator**, on the P2.2/P4.1
precedent where the conflict of interest was **declared, not managed away**.

## 4. Two structural gaps, one stale amendment, four premise corrections

### ⚠ GAP 1 — G-10: two of D6 anchor 5's three conjuncts are gated by nothing (routed here by the freeze sweep)

D6 anchor 5 has three conjuncts: *a published voice guide · a claim register maintained as an artifact
· agent-authorship disclosure.* AC-a names only the first.

- **Claim register** — exists, living (`evidence/claims/claim_register.md`). ✅ no work owed; state it.
- **Agent-authorship disclosure** — the AC calls this *"UNVERIFIED — a 3-phrase grep over
  `site/src/pages/**` only returned no hits, which is a statement about that grep and not about the
  site."* **That caution was correct, and the measurement is now in.**

⭐ **MEASURED — it is not absent. It is misplaced, which is a different defect with a different fix.**

> **Surface: `dist/**/*.html`, the deployed tree `6675442`** (conventions 16 + 17).
> Pages naming a persona (`Rosetta|Mnemosyne|Vitruvius|Berthier|Hestia|Pygmalion`): **41**.
> Pages disclosing that personas are AI: **4** — `/about` · `/state-of-the-network` ·
> `/community/proposals/aep-1` · `/community/proposals/aep-2`.
> Pages saying *"tended by"*: **3** — `/about` · `/state-of-the-network` · **`/`**.
> **Of those three, the one that does not disclose is the homepage.**

The `.astro`-source grep could not have found these — the disclosures render from content collections
and components, not from page source. **Third instance in this campaign of a negative result narrower
than its conclusion** (F-e's `find`, convention 16's own `grep`, this).

And it lands exactly where the clinician did: *"I assumed these were people until the About page told me
'These are AI personas.' Honest once found, but three pages late."*

**Proposed remedy:** a new **AC-e** covering the two ungated conjuncts — register named as met with its
path; disclosure reachable **at first persona mention on the homepage**, not only on `/about`. Small
copy change, on the highest-traffic surface, closing a clinician item and a D6 conjunct together.

### ⚠ GAP 2 — `/vaults` will fail V1 forever, and it is not a prose defect

`/vaults` measures **FKGL 40.96** (`sentences: 3 · words: 228 · avg wps: 76`) because it is a card list:
markers are stripped, the sentence splitter needs `[.!?]`+space+capital, and ~77 terminal marks collapse
to 3. Its actual prose is a 3-sentence intro that reads fine. **Blast radius measured across all 223
twins: 3 pages** — `/vaults` (76), `/learn/concepts` (51), `/reference/specification/1-introduction-scope`
(45). **Proposed remedy:** `gate-48` carries a shape guard; the three are reported as *excluded, with the
reason*, never silently dropped.

### ⚠ STALE — AC-a's freeze amendment is now stale in the **upward** direction

AC-a was amended on 2026-08-24 to *"publication NAMED AS OWED … unblock condition (freeze release) on
this mission's face — NEVER CLAIMED."* **The freeze lifted 2026-08-25** and the backlog is deployed
(prod serves `6675442`; `install.sh` at `0.4.17`). The blocker the amendment was written around is gone.

⭐ **This is the freeze sweep's own G-5 class running in reverse, and it is worth naming as a class:**
G-5 caught criteria that *could not go green* because a freeze stood. This is a criterion that now
**under-claims** because the freeze fell. **A criterion amended around a temporary condition must be
re-read when the condition expires** — otherwise a mission ships a guide it was allowed to publish and
records it as owed. **Proposed remedy:** AC-a's publication limb becomes **required**, not owed, with the
deploy taking its own ⛩ GO (and the push preceding it, per the ancestry guard).

### ⚠ Four premise corrections (details in [[reading_level_p4_5b_baseline]])

1. **The charter's FKGL figure is not usable as a *before*.** The 08-16 baseline's corpus was a session
   scratchpad — **verified absent today** — it is ~11 missions stale, and **it never measured `/`**.
   Re-baselined at O0b over the `.md` twins. *(V1 says "deltas"; there was no comparable before.)*
2. **`/get-started` already meets AC-b.** **9.69**, down from 15.85. **Fourth consecutive mission where
   a re-probe shrank inherited scope.**
3. **AC-b's "top-20" does not contain AC-b's own named target.** Derived by inbound links, exactly 20
   routes are linked from every page (226), then a cliff to 141. **`/learn/what-is-adna` is rank 21** —
   `/learn` is in the nav, its child is not. **Operative scope: top-20 ∪ the four named = 21 routes.**
4. **Three of the clinician's ten items are already dead** — see §5.

## 5. The clinician list, re-probed at the object

> **Surface: `dist/**/*.html`, deployed tree `6675442`. `grep -rlF`, literal.** Ten items as written in
> `evidence/coldreads/coldread_SYNTHETIC_clinician_researcher.md` §5.

| # | phrase | pages | disposition |
|---|---|---|---|
| C1 | *"context democracy"* | 2 | **live** |
| C2 | *"opening progressively"* | 1 | **live** |
| C3 | *"Federate a wrapper"* / `federation_ref` | 1 / 3 | **live** |
| C4 | *"16 Entity Types"* | 2 | **live** |
| C4b | *"3 Conformance Levels"* | ~~0~~ **1 (twin)** | ⛩ **CORRECTED 2026-08-26 — LIVE, NOT DEAD.** See below |
| C5 | *"tended by"* (assumed to be people) | 3 | **live** — and it is **GAP 1**: the homepage is the one that does not disclose |
| C6 | *"Modules, datasets, and lattices compose into workflows"* | 1 | **live** |
| C7 | *"Renamed from TaskForge.aDNA (Production Tidy pt08"* | **0** | ✅ **dead** — retired by P1.3's leak-baseline purge |
| C8 | *"a node is a `Home.aDNA` plus the vaults that live on it"* | **75** | **live · widest blast radius** |
| C9 | *"org vault pending"* | **0** | ✅ **dead** |
| C10 | the name itself — *"aDNA means ancient DNA in my field"* | 4 | **live, and MISPLACED like C5** |

**Two findings the tally alone does not show:**

⭐ **C8 is 75 pages from ONE line.** `src/components/sections/VaultRelationshipBlock.astro:30` (plus
`src/pages/vaults/graph.astro:199`). **One edit, 75 surfaces** — the highest-leverage item on the list,
and the direct echo of P3.4's *"a THIRD copy of the same description was live on two other pages from one
shared data line."*

⭐⭐ **C10 and C5 have the SAME shape, and it is the shape of this whole mission.** *"ancient DNA"* is
addressed on **4** pages — `/learn/concepts/triad` · `/reference/specification/full` ·
`/reference/specification/3-triad-architecture` · `/reference/design-rationale` — and **not one of them
is `/`, `/learn`, `/get-started` or `/about`.** The disclosure exists three-to-four clicks below the
point of confusion, exactly like the persona disclosure. ⇒ **Two of the ten items are not missing
content; they are content in the wrong place.** The fix is placement, and it converges on the homepage —
which is also the worst-measuring first-contact surface (**13.90** vs target 10). **Three independent
instruments point at the same page.**

### ⛩⛩ CORRECTION 2026-08-26 — the tally above was measured on the wrong surface. Live scope is **8**, not 7

> **Operator ruling: correct in place, strike not delete; the signature stands, only the factual basis
> is corrected.** Campaign precedent: F-e's premise withdrawal (P4.4a A3) and convention 16's amendment.

**C4b — *"3 Conformance Levels"* is LIVE.** The probe above grepped `dist/**/*.html`, where the homepage
renders the figure and its label as **separate DOM nodes**, so a literal match for the phrase finds
nothing. The **twin** — flattened rendered text — contains it. Re-measured on both surfaces:

| phrase | HTML | twin | |
|---|---|---|---|
| *"3 Conformance Levels"* | 0 | **1** | ⛔ **disagree — HTML misses text split across elements** |
| *"context democracy"* | **2** | 1 | ⛔ **disagree the other way — the twin drops page metadata** |
| *"Production Tidy"* · *"org vault pending"* | 0 | 0 | ✅ dead on both — the two genuine deaths |
| *"16 Entity Types"* · *"tended by"* | 2 · 3 | 2 · 3 | agree |

⭐⭐ **THE LESSON IS NOT "I NAMED THE WRONG SURFACE" — I NAMED A SURFACE, WHICH IS WHAT CONVENTION 17
ASKS, AND THE CLAIM WAS STILL FALSE.** So the convention needs one more clause, and this is it:

> **Naming the surface makes a claim checkable; it does not make it correct. The surface must match the
> claim's own verb.**

*"A reader encounters this phrase"* is a question about **rendered, flattened text** — the twin. *"The
source asserts this"* is a question about source. *"The DOM contains this node"* is a question about
HTML. Choosing HTML for a reader-facing claim is a surface that is *precise about the wrong thing*, and
it fails in **both** directions: HTML misses text split across elements, twins miss text in metadata.
**Neither surface alone answers "what does a reader see."**

⭐ **Fourth sighting of the instrument-narrower-than-its-conclusion family, and the first authored
inside this mission** — after F-e's `find` over the wrong vault, convention 16's `grep` over one
machine, and this file's own average-based shape guard (see [[reading_level_p4_5b_baseline]]). **Three
of the four were authored by the same desk in eight days, which is the argument for the habit rather
than for more instruments.**

~~⚠ **AC-c executed as written would "resolve" three phrases that do not exist.** Scope is **7 live items**,
derived.~~

⇒ **Re-derived from the clinician's §5 itself rather than from my table of it — and there were TWO
errors, not one.**

The clinician's §5 has **ten bullets**. C4 is **one bullet naming two phrases** (*"16 Entity Types"*
**and** *"3 Conformance Levels"* — *"first-screen counters that mean nothing to a newcomer"*), and C3
likewise names two. My O0 table split both into separate rows and then counted rows.

| | |
|---|---|
| **Dead: 2** | C7 *Production Tidy pt08* (retired by P1.3's leak-baseline purge) · C9 *org vault pending* |
| **Live: 8** | C1 · C2 · C3 · C4 · C5 · C6 · C8 · C10 |

**Error 1 — the surface.** *"3 Conformance Levels"* was marked dead on an HTML grep that could not see
it. ⚠ **This one did not move the count**: C4's other phrase was live at 2 pages, so the bullet was
always live. What it moved is **what "resolving C4" has to cover** — half of it was believed closed.

**Error 2 — arithmetic, and independent of the first.** O0 stated *"live scope 7"* while its own table
showed **9 live rows** (12 rows, 3 struck). Neither 7 nor 9 is the answer; **8** is, because the unit is
the clinician's bullet, not my row. ⭐ **A derived figure is only derived from the object it was derived
from** — I derived faithfully from my own transcription and never re-read the source. That is
convention 12's *recon-at-execution* applied one level too shallowly, and it is the same shape as
P4.4a A3's finding: **re-reading a row means re-deriving its question, not re-running its command** —
here, not re-counting its table.

Both dead items are recorded **with the mission that killed them**, per AC-c's amended wording.

⚠ **And V3 is partly circular for AC-c**: the list came from a synthetic clinician, and V3 re-tests with a
synthetic clinician. `[D-syn]` is a disclosed stand-in, never the human instrument — **the real
re-test of this list is P5.1's human panel**, which is the mission after this one and reads the surfaces
this one rewrites. Stated as a limit, not treated as a defect.

## 6. Proposed criteria (5), and what changes

| | change | why |
|---|---|---|
| **AC-a** | publication **required**, not owed; guide states its own targets | the freeze lifted — STALE, above |
| **AC-b** | scope = **21 routes** (top-20 ∪ the four named), derived and recorded; `/get-started` recorded **already met**; ⛩ **the metric is PROSE-ONLY** (operator ruling 08-26) via `site/scripts/reading_census.mjs`, with whole-twin reported alongside; ~~the 3 list-shaped pages excluded with reason~~ → **artifact LINES excluded, not pages**, and thin-prose pages flagged `low_confidence` and reported; the glossary limb gated against the **25 derived terms**, scoped to the 21 | FAILURE 2 + premise corrections 2–4 + GAP 2 + the 08-26 correction |
| **AC-c** | scope = the ~~7~~ **8 live items** (⛩ corrected 08-26); the ~~3~~ **2** dead ones recorded as dead **with the mission that killed them**; **C8 fixed at its single source** | §5 + its correction |
| **AC-d** | CI report non-blocking (unchanged); DA records must be **auditable against the skill's checklist** | FAILURE 3 |
| **AC-e** | **NEW** — the two ungated D6 anchor-5 conjuncts: register named as met; **agent-authorship disclosure reachable at first persona mention on `/`** | GAP 1 / G-10 |
| **V2** | amended — records must **cite the guide rule each decision applied** | FAILURE 1 |
| **V5** | **NEW** — `gate-48` red-proven by mutation, with its exclusions named on its face | GAP 2 + FAILURE 2 |

**Budget.** The mission's ratified figure is **~200–320 kT / 2 sessions, `executor_tier: fable`**. The
pass adds AC-e, the glossary gate and `gate-48`'s shape guard, and removes `/get-started` and three
clinician items. **Proposed: ~280–400 kT / 2–3 sessions**, and **`executor_tier: opus` for O0–O1**
(judgment: voice authoring and first-contact copy), **`fable` for O2's remainder**. Declared per
increment because *a declared tier nobody honours is worse than none* (P4.1's AAR) — **and this O0
session already ran opus under a `fable` declaration, stated at its open rather than at its AAR.**

## 7. What this pass did **not** examine

- It read the **P4.5b** criteria only. **P4.5a's four ACs are closed and untouched.**
- It did not re-derive the **top-20 after** rewriting. If the rewrite changes nav or footer, the set
  moves — **same-diff, ADR-057**, and `gate-48` inherits the obligation.
- It did not evaluate whether FKGL is the *right* proxy. It is a syllable-and-length measure; a page can
  hit ≤ 10 and still be incomprehensible if its nouns are undefined — which is what the clinician's list
  records, and why AC-c exists as a separate criterion rather than as a note under AC-b.

---

## ⛩ Operator decision

**Sign, amend, or reject.** Nothing is built against P4.5b until this is `accepted`. The voice guide
(O0d) is authored alongside this document and is signed at the same gate.
