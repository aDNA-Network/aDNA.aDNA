---
plan_id: mission_haussmann_gr_4_story_coverage
type: plan
title: "GR-4 — story coverage: the four unhomed stories, and the two the revue was wrong about"
campaign: campaign_haussmann
phase: GR                  # Grande Revue lane, no phase number — GR-1's precedent, GR-2/GR-3 following.
decade: 2
owner: stanley
status: completed   # ✅✅ CLOSED 2026-09-03 — ALL EIGHT CRITERIA MET, AAR filed (SO#5). AC-1 ✅ AC-2 ✅ AC-3 ✅ AC-4 ✅ AC-5 ✅ AC-6 ✅ AC-7 ✅ AC-8 ✅ · V1–V7 ✅. Suite: chromium 684 · all-projects 710 · snapshot 26 · run 683 passed / 1 skipped / 0 failed · red-test 27/0 · html-validate 0 control-checked · gitleaks 1025 commits no leaks. ⛔ NOTHING DEPLOYED AND NOTHING OWED TO PRODUCTION — Lane D is met on-build, as every GR mission before it; prod serves `a852423`. ⛔ R-124 is BUILT, NOT LIVE, and its row deliberately does NOT move (register §20.4). GRANDE REVUE's Gate-1 order is now COMPLETE: B → P4.4b B1+B2a → GR-1 → Lane D, all four lanes closed.
mission_class: content     # ⚠ FIRST content-class mission to reach this gate. Every prior convention-13 pass was aimed at a BUILD mission; the failure modes here are different and are named in the pass.
executor_tier: opus        # judgment-heavy and NOT because it is large: the work is authoring public claims under an active embargo, against an unresolved audience question, on surfaces whose reading-level headroom is measured in hundredths. A cheaper tier reproduces exactly the defect class this campaign exists to retire — a claim moving UP.
token_budget_estimated: "⛩ RATIFIED 2026-09-02 at **~255–400 kT / 2–3 sessions** — §7's branch-(i) band (~230–360) **plus AC-8's ~25–40**, because Ruling 1 turned R-124 from an ⛩ disposition into a deliverable. ⭐ The delta was quoted **in the same act as the ruling**, which is the sibling of convention 13's own lesson: a budget ratified before the pass is costed against a spec nobody has read, and a budget ratified before the OPERATOR'S RULINGS is costed against a scope nobody has chosen yet. Both are fixed the same way. ⚠ ~40 kT of O0 is the campaign CLAUDE.md, auto-loaded — named, not absorbed (GR-3's precedent)."
token_budget_actual: "≈205–275 kT across 2 sessions — RECORDED AT THE TIME, not reconstructed (AC-7). Against the ⛩ ratified ~255–400 kT / 2–3 sessions: INSIDE the band at both ends and UNDER it at the low end, on 2 of the ratified 2–3 sessions. No SO#11 retrospective triggers. ⭐ The band held because the two costing lessons this campaign paid for were spent FORWARD rather than re-learned: gate-49's TEMPLATES list was read BEFORE costing each of O3, O4 and O5 (`/network` no, `/` yes, `/privacy` no), and the +25–40 kT AC-8 delta was quoted in the same act as ⛩ Ruling 1 instead of absorbed. ⚠ O5 ran at the top of its own ~55–90 kT estimate: the AC-7 enumeration turned into four copy revisions and a red-test anchor repair, which is the estimate learning what the subject was rather than scope drift."
created: 2026-09-02
last_edited_by: agent_rosetta
grounded_in:
  - "artifacts/grande_revue/battle_plan.md §Lane D — the ratified lane shape (⛩ Gate 1, 2026-08-28, `accepted`) [D]"
  - "artifacts/grande_revue/evidence/dimension_reports_digest.md §D9 (a)-(e) — story coverage, re-verified on disk 2026-09-02 [D]"
  - "artifacts/grande_revue/mid_campaign_review.md §2 P2-2 · P2-5 · P2-7 [D]"
  - "evidence/claims/claim_register.md §R-124 — the clinical/regulatory posture gap, S3, and its Lane-B routing annotation [D]"
  - "site/scripts/reading_census.mjs:244 — FIRST_CONTACT derived, not inferred [D]"
  - "live twins at prod tree `a852423`, re-probed 2026-09-02 (surface named per convention 17's amendment) [D]"
vitruvius_dimensions: [D7, D9]
decade_theme: craft
webforge_patterns: []
patterns_to_author: []
depends_on: []
blocks: []
acceptance_criteria:
  - "AC-1 [D1 · model routing] — the model-routing story is published in AUTHORED site content, and its test surface EXCLUDES `src/data/tour/**` and any other byte-vendored artifact. ⚠ The exclusion is the criterion, not a detail: measured 2026-09-02, the ONLY model-routing occurrence site-wide is a skills-table row inside the vendored `.adna/CLAUDE.md` at `src/data/tour/standard-governance.txt:260`, so a naive site-wide grep is ALREADY GREEN and would be met by building nothing."
  - "AC-2 [D2 · token-budget doctrine] — the SO-11 / ADR-016 per-mission budget doctrine layer is published on its NAMED homes, `mission-decomposition.mdx` and/or `design-a-mission.mdx` (both verified present on disk), and meets a SUBSTANCE FLOOR derived from the existing doctrine sections on those same pages. ⚠ DEFECT-3 remedy: the baseline is 0, so a bare count is satisfied by a single passing mention anywhere — in a changelog entry, a glossary stub — while the layer stays unwritten. The floor is DERIVED from the page's own siblings, never typed by feel (B0: a number written by feel is a formality wearing a pin's clothing)."
  - "AC-3 [D3 · local models] — ⛩⛩ RE-RULED 2026-09-02 AT O3's OPEN, strike-not-delete, and PERFORMED HERE IN THE SAME COMMIT AS THE BUILD so the criterion and the artifact are never left disagreeing (convention 7 / ADR-057): a *planned*-framed local-models section ships ON `/network`. ~~WHERE THE L0-L3 LADDER ACTUALLY LIVES (⛩ RULING 2, branch (i)), NOT on `/network`~~ — ⛔ THAT DESTINATION DID NOT EXIST, for TWO independent reasons measured at the object [D]: (1) `L0-L3` is a HOMONYM — `agentic-literacy.mdx:12-14` is `L0 Aware → L1 User → L2 Builder → L3 Architect`, a HUMAN-LITERACY ladder, and the recon matched four labels and inferred a subject; (2) the COMPUTE ladder's only site-wide home is `src/data/tour/workspace-router.txt:133-137`, BYTE-VENDORED, so branch (i) executed literally would have routed authored copy into the tree Standing Rule 1 forbids and AC-1's own exclusion exists to protect (F-w's trust-page reasoning, third row). ⚠ The revue's home-claim STAYS FALSE and its CONCLUSION survives: `/network` still carries 0 L0-L3 and 0 compute-tier, and is the right home because it owns the aDNA-computer / local-vs-federated story (Standing Rule 4) — which is what `run a model on your own machine` continues. Every sentence is distinguishable BY TEST from a live claim, and the copy is checked against the counsel embargo and R-14/R-15 before it ships (CONSTRAINT-1: D1 and D2 are this vault's own live doctrine and are embargo-safe; D3 is not, and no criterion said so)."
  - "AC-4 [D4 · ancient DNA] — the ancient-DNA disambiguation is PRESENT on `/commons` (⛩ RULING 3, the surface the MEASUREMENT selected: headroom 3.39 vs `/about` 0.57 and `/` 0.04), asserted on the `.md` TWIN — the surface whose verb is 'a reader encounters' — AND `/commons`'s prose FKGL stays at or under its own target, re-measured by `reading_census.mjs` with the before-figure recorded in the same artifact. ⚠ DEFECT-1 remedy: the presence half is the criterion's SUBSTANCE and was tested by nothing; and because FKGL FALLS as prose gets shorter, the constraint limb moves in the reassuring direction exactly when the criterion is met."
  - "AC-5 [D5 · latest strip] — ✅ MET AT O4 2026-09-02. A returning-member entry point to changelog/RSS exists above the footer, and the top-level nav still holds exactly 7 flat entries (ADR-049's cap, derived from `navigation.ts`, not typed). ⛩ FORM RULED AT O4's OPEN (SO#1 — the criterion fixes the surface and says nothing about the form): a dated strip with NO lead sentence, because on `/` the form is a measurement decision as much as an editorial one. ⚠⚠ THIS CRITERION CARRIES NO READING-LEVEL CONSTRAINT — the third consecutive objective with that gap (AC-3 had none; AC-4's was DEFECT-1) — and `/` clears its target by 0.04, the tightest margin on the site. The gap is made SAFE rather than merely unmeasured by `G54s`, which asserts that nothing in the strip enters `/`'s prose corpus: measured 9.96 → 9.96 with the corpus byte-identical at 6030 chars, and asserted so it RECURS, because `unpunctuated-block` holds the section out only while it carries ZERO sentence terminators and one full stop — a lead sentence, or a future changelog title — removes the property silently."
  - "AC-6 [D6 · movement 3] — ✅ MET AT O5 2026-09-03, and the met-state is that NOTHING SHIPPED. Evidence: a dated absence assertion naming its surface (the rendered `.md` twins, excluding `changelog.md` and the byte-vendored `get-started/what-your-agent-reads/**`, both exclusions ASSERTED by `G54t`). ⭐⭐ THE CRITERION'S OWN LABEL RESOLVES TO NOTHING: `movement 3` is 0 in both campaign directives [D], the whitepaper's 4 hits are ordinary English, and the Grande Revue order was VERBAL ⇒ a gate greping the label returns 0, goes green, and checks nothing — O3's homonym finding entered from the other side, and the worse half, because AC-6's met-state IS absence. Subject re-derived from D9(e)'s body: the embargoed protocol-opening story, whose vocabulary is checkable because it SHIPPED AND WAS RETIRED THREE TIMES (R-14 · P1-2 · R-125), all three measuring 0 across every non-excluded twin. ⚠ The absence is NOT total and that is said rather than hidden: a candor-framed horizon passage is already live on `/learn/tutorials/exchange-adoption-path`, and the vendored `skill-onboarding.md` carries the one un-candid promise — which is `F-w`, filed at GR-1 as a TRUST-PAGE defect and never connected to D6 until now. ⚠ It ALSO corrects, at the record, the revue's false parenthetical that the ratified 'opening progressively' phrasing has 0 hits corpus-wide — AND corrects this mission's own correction of it: re-derived [D] it is 1 RENDERED and 3 COMMENTS, not 2 and 2. The total was derived and the breakdown was typed."
  - "AC-7 [governance] — every new public sentence carries a claim-register row, with THE CLAIM SET ENUMERATED FROM THE DIFF and the enumeration itself asserted; every count this mission narrates is derived by its own command; R-124's disposition is read back IN the register; AAR filed (SO#5); `token_budget_actual` recorded at the time, not reconstructed. ⚠ DEFECT-5 remedy: a limb that confirms the rows it was handed is structurally blind to a row nobody remembered — the over-masking shape (masks only ever grow) arriving in a governance limb."
  - "AC-8 [R-124 · ⛩ RULING 1] — ✅ MET AT O5 2026-09-03. `/privacy` carries `<h2 id=\"regulated-data\">` — 892 chars, placed after `#your-vault` — stating that aDNA is a file-layout convention, that adopting it transmits nothing, and that HIPAA/GDPR/IRB obligations rest with the OPERATOR AND THEIR OWN TOOLING. It asserts NO compliance claim of any kind (`G54x`, red-proven by case 25: nothing removed, one reassuring clause added, every other assertion green). ⛩ FORM RULED AT O5's OPEN (the signature said in terms that the wording was not pre-approved): a new `<h2>` with its own anchor, because R-124's diagnosis is 'the defect is ROUTING, not policy'. Six register rows R-165…R-170. ⭐⭐ THE AC-7 ENUMERATION CUT FOUR THINGS FROM THE DRAFT: 'clinical' (the `/` twin measures it ZERO while rare reads 15), 'a processor' (a GDPR TERM OF ART — denying a defined legal role is itself a regulatory self-characterisation, inside the section whose purpose is to make none), 'moves no data anywhere' (the R-64/R-97/R-161 over-promise class on a FOURTH surface, in the mission that narrowed it on the third one objective ago), and a definition that competed with the site's ratified 'open specification'. ⛔ R-124's ROW DOES NOT MOVE: Ruling 1's condition is that it moves when the section is LIVE, and prod serves `a852423`. Discharge condition recorded at register §20.4."
verification_method: >-
  V1 [asserts AC-1, AC-2] — a content probe over AUTHORED source only, with `src/data/tour/**` excluded
  BY NAME and the exclusion asserted (gate-48's ratified discipline: the exclusions are part of the
  claim), red-proven by a mutation that puts the term back in a vendored file alone and must NOT go green.
  V2 [asserts AC-3] — a *planned*-framing probe: every new forward-looking sentence is matched to a
  planned-marker, and a control mutation that strips the marker goes RED. This is convention 1 in
  instrument form. ⛔ **AC-6 STRUCK from this limb (DEFECT-2)**: AC-6's met-state is that NOTHING SHIPS,
  so a probe iterating new sentences has an empty set and passes by construction — certifying a
  mechanism it never exercised. **AC-6 is V6's alone.**
  V3 [asserts AC-4, AC-8] — `node site/scripts/reading_census.mjs` **run from the REPO ROOT** re-run
  after the copy lands; **`/commons` AND `/privacy`** each at or under their own target, with the BEFORE
  figures recorded in the same artifact so both deltas are readable. **DEFECT-6 remedy** — AC-8 arrived
  at the signature without the constraint AC-4 carries, and the census already covers the whole corpus.
  V4 [asserts AC-5] — nav entry count derived from `navigation.ts` (exactly 7 flat) and the homepage
  entry point asserted present, red-proven by **ONE MUTATION PER ASSERTION**, each case NAMING the
  assertion it reds via; a red via the wrong assertion reports as a **HARNESS BUG**, never a pass.
  ⭐ **DEFECT-4 remedy — `F-z` spent FORWARD.** The single 8th-nav-entry mutation reds via the nav
  COUNT, so the entry-point assertion would never have been demonstrated to fail: *a demonstration is
  only worth what it can attribute* (GR-3), applied at authoring time instead of in a harness's
  fourteenth day.
  V5 [asserts AC-7] — register rows present for every new claim; `git status --porcelain` read at close.
  V6 [asserts AC-6] — the dated absence assertion for movement-3, with its surface named, plus the
  corrected 'opening progressively' figure re-derived at the commit that quotes it. **AC-6's sole limb.**
  V7 [asserts AC-8] — a probe asserting the `/privacy` section is present AND that it contains no
  compliance-claim vocabulary. ⭐ **The second half matters more than the first**: the failure mode of a
  disclaiming posture is not that it goes missing, it is that it quietly becomes a promise.
human_gate: true
tags: [plan, haussmann, gr_4, lane_d, story_coverage, content, embargo, r_124]
---

> ⏸⛩ **HALTED AT THE ⛩ CONVENTION-13 PRE-BUILD GATE. NOTHING IS BUILT AND NO COPY IS AUTHORED.**
> The criteria above are **proposed**, not ratified. The budget is **not** ratified. Read
> `artifacts/gr_4/ac_amendment_proposal.md` before acting on anything in this file.

> **Read cold.** Persona **Rosetta**. Campaign governance:
> `how/campaigns/campaign_haussmann/CLAUDE.md`. Assessment doctrine:
> `directives/OPERATION_VITRUVIUS_review_instrument.md`.
> **The one-line why: four stories the site should tell have no home, and the revue was wrong about
> two of them in opposite directions.**

## Why this mission exists

Lane D is the **fourth and final lane** of the Grande Revue battle plan, ⛩ signed at Gate 1
(2026-08-28) in the ratified order **B → P4.4b B1+B2a → GR-1 → Lane D**. Lanes B, C and A are
closed; P4.4b closed 2026-09-02. Lane D is what remains of that order.

It is also **the only lane that authors new public copy**, which is why the battle plan placed it
last — *"after Lane A so the trust path is sound before new copy lands on it"* — and why it is the
one lane carrying an unresolved operator decision (**R-124**) that must be taken before a sentence
is written.

⚠ **This is the first CONTENT-class mission to reach a convention-13 gate.** Every prior pass —
nine of them — was aimed at a build mission, where the characteristic defect is *a method that
cannot move a test*. A content mission's characteristic defect is different and the pass is aimed
at it accordingly: **a criterion that can be met by a claim moving up**, and **a criterion already
green for a reason that builds nothing**.

## What the recon found before the pair matrix ran

Every row re-verified at the object 2026-09-02, surface named per convention 17's amendment.
**Two premises FALSE · one materially NARROWER · three CONFIRMED.**

| Item | The revue's premise | Measured at the object | Verdict |
|---|---|---|---|
| **D1** model routing | *"ABSENT … the cheapest add"* | **1 occurrence site-wide** — `src/data/tour/standard-governance.txt:260`, a skills-table row inside the **byte-vendored `.adna/CLAUDE.md`** published on the trust page with its own sha256 | ⚠ **NARROWER, and it plants a trap** |
| **D2** token-budget layer | *"unpublished"* | **0** occurrences of `ADR-016` or `token_budget` in `site/src/**` | ✅ **TRUE** |
| **D3** local models → `/network` *"owns the L0–L3 story"* | PARTIAL; home named | `/network` twin (live, `a852423`): **0** L0–L3, **0** compute-tier. It owns the ***aDNA-computer*** story. L0–L3 lives in `agentic-literacy.mdx` | ⛔ **FALSE PREMISE** |
| **D4** ancient DNA one click too deep | on `/learn/what-is-adna` only; `/` margin 0.04 | Live twins: `/learn/what-is-adna` **1**; `/` `/about` `/commons` **0** each, **control-checked** (the `/` twin is 200 · 10344 B · "adna" ×34, so the zero is real, not vacuous). `/` prose FKGL **9.96 / 10 ⇒ 0.04** | ✅ **TRUE** — but its surface set is ambiguous |
| **D5** changelog/RSS footer-only | homepage strip, never an 8th nav item | `Footer.astro:40,42`; nav = **7** flat entries (derived from `navigation.ts:77-83`, *not* the 94 that `grep -c "href:"` types); homepage twin **0** hits for changelog/latest/what's-new | ✅ **TRUE** |
| **D6** movement 3 | absent deliberately; the ratified *"opening progressively"* phrasing has **0 hits corpus-wide** | **LIVE AND RENDERED** on `/state-of-the-network` (twin line 114). Landed `9e0fd06`, **2026-08-18** — ten days BEFORE the revue | ⛔ **FALSE WHEN WRITTEN** |

### ⭐⭐ D1's finding: the criterion the revue implies is ALREADY GREEN, and green for a reason that builds nothing

*"Model routing is absent"* is the revue's cheapest-add recommendation. Measured, the story is not
absent — it is **present exactly once, in a file this mission must not touch.**
`src/data/tour/standard-governance.txt` is the vendored `.adna/CLAUDE.md`, published at
`/get-started/what-your-agent-reads/` **with its sha256 and an explicit invitation to diff it.**

⇒ A criterion phrased the obvious way — *"model routing appears on the site"* — **passes today,
against zero work.** And the fix is not to edit the file: Standing Rule 1 forbids modifying `.adna/`,
and editing the published copy would trade a copy defect for a **trust defect on the one surface
built to be checked** — which is `F-w`'s reasoning verbatim, arriving in a second row.

**The exclusion is therefore load-bearing and is written into AC-1 itself**, asserted rather than
assumed, on gate-48's ratified discipline (*the exclusions are part of the claim*).

⭐ This is **convention 18's family in a content mission**: the instrument would run correctly, pass
honestly, and be pointed at a **vendored proxy** for an authored property. Every prior sighting was
in a gate; this one is in a criterion that had not been written yet — **caught before it existed,
which is the first time in this campaign that has happened.**

### ⛔ D3's finding: the ratified home rests on a false premise

The battle plan and the D9(c) digest both say the natural home is *"a *planned*-framed section on
`/network` (owns the L0–L3 story)"*. `/network` **does not own that story** — it carries zero
mentions of L0–L3 or compute tiers, and is about *aDNA computers* and the local-vs-federated
boundary (Standing Rule 4). The L0–L3 ladder lives in `agentic-literacy.mdx`.

Two readings, and **a criterion must not pick between them silently**:

- **(i) the home is wrong** ⇒ D3 routes to wherever the compute ladder actually lives; or
- **(ii) the home is right and the ladder must ARRIVE there first** ⇒ D3 is materially larger than
  the *"add a section"* the revue costed.

⇒ **⛩ Ruled at the gate, not resolved here** — this is a scope question with a real cost difference,
and taking it in-session would be typing a claim about what the operator ratified.

### ⛔ D6's finding: the parenthetical was false WHEN WRITTEN, not stale

D9(e) offers, as its remedy, *"reusing the ratified 'opening progressively' phrasing (currently 0
hits corpus-wide)"*. The phrase is **live and rendered** on `/state-of-the-network`, and
`git log -S` dates it to **`9e0fd06`, 2026-08-18** — **ten days before the revue measured it.**

⭐ Note *why* it read as zero, because the mechanism is the reusable part: the source carries **4**
occurrences across 3 files, of which **2 render and 2 are source comments that never do**
(`HomeHero.astro:252` literally says *"CUT, not rewritten"*). So a source grep and a rendered grep
disagree **in both directions** on this one phrase — convention 17's amendment exactly. But neither
surface returns zero. ⇒ **the figure was typed, not derived** (KW-14), and it was typed wrong.

⚠ **The consequence is not cosmetic.** D6's remedy is keyed to the phrase being *available and
unused*. It is **already deployed and carrying the horizon claim**, so D6's real question is not
*"shall we introduce this phrasing"* but ***"is the horizon claim already made, and is more wanted
under the embargo?"*** — a different question with a different answer.

### ⚠ D4's finding: the target surface set is ambiguous between two ratified definitions

P2-2 names the landing surfaces as **`/`, `/about`, `/commons`**. The campaign's own instrument
declares `FIRST_CONTACT = ["/", "/get-started", "/learn/what-is-adna", "/community"]`
(`reading_census.mjs:244`, **derived**). The two sets share exactly one member.

Neither is wrong — they answer different questions (a persona-landing judgement vs an
inbound-link-derived reading-level scope). But a criterion saying *"the first-contact surfaces"*
would **silently mean the second set**, and P2-2 asked about the first.

**Measured headroom, which is what should decide it:**

| Candidate | prose FKGL | target | headroom |
|---|---|---|---|
| `/` | 9.96 | 10 | **0.04** |
| `/community` | 9.28 | 10 | 0.72 |
| `/about` | 11.43 | 12 | 0.57 |
| `/get-started` | 8.16 | 10 | 1.84 |
| `/commons` | 8.61 | 12 | **3.39** |
| `/learn/what-is-adna` | 7.11 | 10 | 2.89 *(already has the content)* |

⇒ **`/commons` has ~6× `/about`'s headroom and ~85× `/`'s.** The revue proposed *"hero micro-copy or
`/about`"*; the measurement points somewhere neither disjunct named — **GR-1's A4 shape, second
sighting**, and the reason to measure before ruling rather than after.

## Objectives

*(Not ratified. Objective decomposition follows the gate's scope ruling — writing it before the
scope is ruled would be the P4.5a defect: a spec whose halves nobody read together.)*

| Obj | Covers | Gated on |
|---|---|---|
| O0 | this pass + the ⛩ gate | — |
| **O1 ✅** | **D1 + D2 (the two clean, agent-reachable adds)** — **DONE 2026-09-02** | signature only |
| **O2 ✅** | **D4** — **DONE 2026-09-02** | ⛩ receiving-surface ruling |
| **O3 ✅** | **D3** — **DONE 2026-09-02** | ⛩ home ruling — ⛩⛩ **RE-RULED at O3's open onto `/network`**: the ruled destination did not exist (homonym + vendored) |
| **O4 ✅** | **D5 + the owed prose-corpus measurement** — **DONE 2026-09-02** | signature only; ⛩ **form ruled at the open** |
| O5 | D6 + R-124's disposition + close cascade + AAR | ⛩ R-124 audience call |

## Convention 13 — coverage

Run **COMPLETE**, both directions, at the pair count derived in
`artifacts/gr_4/ac_amendment_proposal.md`. Coverage is recorded **there and in this table**, so a
partial pass is legible as partial (convention 13's own amendment).

| | Pairs | Derivation |
|---|---|---|
| **At the halt** — AC×AC | **21** | `C(7,2)` — 7 criteria |
| **At the halt** — AC×V | **42** | `7 × 6` — 7 criteria × 6 limbs |
| **Subtotal (the pass as run)** | **63** | **6 defective · 57 clean** |
| **After the signature** — new pairs | **21** | `AC-8 × AC-1..7` (7) + `AC-8 × V1..V7` (7) + `AC-1..7 × V7` (7) |
| **TOTAL** | **84** | `C(8,2)=28` + `8×7=56` — derived, not typed. **7 defective · 77 clean.** |

⭐⭐ **THE PASS WAS EXTENDED OVER ITS OWN AMENDMENT, AND IT FOUND A SEVENTH DEFECT.** AC-8 and V7
arrived **at the signature**, so **they were not in the 63** — and a signature is exactly the moment
a pass stops being re-run. Extending it cost one pass over 21 pairs and produced **DEFECT-6**:

> **AC-8 adds prose to `/privacy` and carries NO reading-level constraint, while its sibling AC-4
> carries one.** `/privacy` measures **9.43 against a target of 12** (headroom 2.57), so the risk is
> low — **but low risk is not an assertion**, and V3 already runs the whole census, so covering
> `/privacy` costs nothing.

⚠ **This is P4.4b's finding inverted.** There, *an amendment stranded a clause elsewhere in the file
it was amending*. Here, **an amendment omitted a clause its siblings already carried** — the same
seam, entered from the other side. ⇒ ***a criteria set is not re-read when it is amended, and the
amendment is precisely the edit nobody checks against the set.*** **Remedy, free: V3's census
assertion covers `/commons` AND `/privacy`.**

## O1 — DONE 2026-09-02 (`AC-1` ✅ · `AC-2` ✅ · `V1` ✅)

⛩ **One scope question the signature did not settle was put to the operator at O1's open**: AC-1 names
**no home page**, unlike AC-2 which names two. **Ruled — D1 lands on the SAME TWO PAGES as D2**
(`/patterns/mission-decomposition` · `/learn/tutorials/design-a-mission`), so **no new route** and
ADR-057's route-coupling obligations do not fire. `executor_tier` and `token_budget_estimated` are two
fields on one mission card; a single doctrine layer is the honest shape as well as the cheap one.

**Built:** the doctrine section on the pattern page (budget: the two fields, the content-load formula,
the four decomposition bands, the 2× retrospective trigger; routing: the three decision-property
classes, the versioned binding, the six-element brief contract) · Step 4b + template + checklist +
`What You Learned` on the tutorial · **`gate-54`** (G54a–G54h, 8 assertions) ·
`scripts/doctrine_layer_measure.mjs` · `scripts/doctrine_layer_redtest.sh` · register **§16**
(R-142…R-149 + `F-aa`).

**Verified:** chromium **660 → 668** — delta isolated by `--list` with and without the spec (**+8,
removed nothing**), all-projects **694**, snapshot **26**, each by its own command · `html-validate`
**0** · red-test **10/10**, every case red at **exactly** its declared assertion set · the vendored
`src/data/tour/` tree byte-identical to HEAD by sha256 **after both red-test runs**.

⭐⭐ **THE MEASUREMENT FALSIFIED THE INSTRUMENT BEFORE THE INSTRUMENT GRADED ANYTHING.** The first draft
gated `proseLen` **and** `elements` together. Measured, those two axes are **ANTI-CORRELATED** across
the pages' own conformant sections — `Anti-Pattern` 726 prose / **0** elements, `Step 5` **41** prose /
1 element (one large fenced template) — so a conjunction would have failed genuinely conformant
siblings, and each axis's independent floor (41, 0) grades nothing at all. ⇒ **two axes are right for
`hub_depth_measure`, where a thin hub is thin on BOTH; they are wrong here.** Re-cut to one gated axis
(`bodyLen`, the whole section body) which does not care whether a doctrine section argues or tabulates
and still separates both from **a mention** — the threat AC-2 actually names. Floor **derived** at
**217** from the conformant set (comparators 217–1510); graded sections **3855** and **666**.
*Measure first, then pin: the guessed pin was 330/4 and was wrong on both axes.*

⭐⭐ **AND THE VAULT'S OWN TWO SOURCES CONTRADICT EACH OTHER ON TIER ORDERING — CAUGHT ONE LINE BEFORE
IT WAS PUBLISHED.** `pattern_model_tiered_campaign_execution.md` §2.1/§2.5 bind **fable →
strategy/judgment** and **sonnet → mechanical**; `glossary_model_tiered_execution.md` says *"cheapest →
most capable"*, **ordering them backwards**. Both were cited as grounding and **the draft took the
ordering from the glossary**, putting it in the tutorial's example and a wrong *"higher tier"* into the
P4.1 sentence. Caught by verifying that sentence at **P4.1's own mission file** rather than at the
campaign prose summarising it. ⇒ the copy now publishes **no capability ordering at all**: *a
contradiction between two sources is not a coin to flip — it is a claim you are not yet entitled to
make*, and either side would have moved a claim UP while looking like ordinary copywriting. Measured
`[D]`: `grep -rl cheapest site/dist/` returns **3 paths, all of them this increment's own copy** ⇒ the
contradiction was never public and this mission would have been the one to publish it. Routed as
**`F-aa`**, **not** fixed here (a `what/glossary/` governance edit is outside O1's site-copy scope).

⭐ **`gate-14` G5 went red, and the obvious fix would have made the claim FALSE.** The draft linked
`github.com/aDNA-Network/aDNA.aDNA`; C-1 forbids it because *"proof-links must point at the public
image … not the dev vault"*. But the claim is about **mission files that exist only in the dev vault**
— swapping to the canonical URL would have gone green and sent readers to a repo with no mission files
in it. **The link was removed and the claim kept**, and the available `ALLOW` entry was **not** taken
(the gate's own header: allowlisting *"would hollow the rule out"*). ⇒ *diagnose by asking what the
assertion protects, not by satisfying its regex.*

⚠ **The reading census does NOT cover either page, and that is stated rather than reported as "no
change".** Its frame is **21 landing routes** `[D]`; `/patterns/mission-decomposition` and
`/learn/tutorials/design-a-mission` are in neither. The one route over target
(`/reference/specification`, 12.69 vs 12) is **pre-existing and untouched**. *A negative result is only
as wide as the command that produced it* — this increment's reading-level delta is **unmeasured**, not
zero. `gate-48`'s G48c is non-blocking and neither page is a first-contact surface, so nothing binds.

⚠ **Found at the open and repaired**: the sitting that opened GR-4 left its session file `status:
active` in `how/sessions/active/` with `token_budget_actual:` **empty** — a finished session reading as
a **live peer lease**, and the third P4.3-class instance of an unrecorded actual.

~~⏭ **NEXT: `O2`** (D4 → `/commons`, with the census before/after on the same surface).~~ ✅ **O2 IS
DONE — see below.** ⛔ No deploy authorized or owed; a push is its own ⛩ GO.

## O2 — DONE 2026-09-02 (`AC-4` ✅ · `V3` ◐ **PARTIAL, and recorded as partial**)

⛩ **One question the signature did not settle was put to the operator at O2's open**: AC-4 fixes the
*surface* (`/commons`) and says nothing about the **form**. **Ruled — a Callout under the hero**, not
a titled band (which would add a heading to the page outline for a two-sentence answer) and not a
clause woven into the subnetworks subtitle (which would read as an aside to a reader who is not
confused, and be invisible to the one who is).

**Built:** the *"A note on the name"* Callout on `site/src/pages/commons.astro`, reusing the component
the page already imports · `gate-54` **G54i + G54j** (the presence limb DEFECT-1 found missing) ·
red-test cases **9/10/11** · register **§17** (R-150…R-152).

**Verified:** chromium **668 → 670** — delta isolated by `--list` (gate-54's own file 8 → 10, **+2,
removed nothing**), all-projects **696**, snapshot **26**, each by its own command · `html-validate`
**0**, control-checked against a deliberately invalid file so the zero is not vacuous · red-test
**13/13**, every case red at **exactly** its declared assertion set.

⭐⭐ **AC-4's CONSTRAINT LIMB IMPROVED AT THE EXACT MOMENT THE CRITERION WAS MET — MEASURED, NOT
ARGUED.** `/commons` prose FKGL **8.61 → 8.30** against a target of 12, before and after on the same
local build (HAZARD-2 honoured; a before from prod and an after from `dist/` would be *two instruments
sharing one number*). ⇒ the pass's DEFECT-1 was not merely a silent gap: **FKGL falls as prose gets
shorter, so V3 moves 0.31 in the REASSURING direction when nothing at all has shipped.** The presence
assertion is what makes AC-4 falsifiable, and it needed **no new instrument** — `gate-54` already
graded twins.

⭐ **G54j asserts BOTH terms, and red-test case 11 is why.** *"ancient DNA"* alone is a **mention** —
a page can name the collision and leave a reader no better off. Case 11 keeps the collision term and
strips only *"Agentic DNA"*; the gate goes red. **DEFECT-3's lesson applied to the sibling criterion
that did not carry it** — the same asymmetry P4.4b found, where one criterion's exclusion set was
spelled out and its sibling under the same limb got none.

⛔⛔ **THE RED-TEST HARNESS WAS ONE CHARACTER FROM BEING BLIND TO THE ASSERTIONS IT WAS EXTENDED TO
PROVE.** `failing_set()` matched **`G54[a-h]`**. With `G54i`/`G54j` added it would have returned the
empty string on a genuine red and reported *"NO RED — the gate did not catch the mutation"* — the
instrument blind to its own new assertion **and blaming the subject**. ⚠ **This is the adoption
addendum's `G53[a-f]` defect recurring the SAME DAY in a sibling harness**, caught the same way: by
reading the harness rather than trusting it. ⇒ ***a coverage floor goes stale the moment its subject
grows***; range widened to `a-z`.

⭐ **THE RE-BASELINE ATTRIBUTED ITSELF.** `/commons` is a `gate-49` template at `maxDiffPixels: 0`, so
the copy necessarily reds the snapshot lane — **confirmed first (2 failed · 24 passed · 5207 → 5455 px
`[D]`), not assumed.** All 24 baselines were then regenerated in-container and **exactly 2 files
changed**. That is the control the adoption addendum's warning asks for (*a re-baseline that also
moves the instrument cannot attribute what it measures*): nothing unrelated was absorbed, and the 24
untouched baselines independently prove the scoped style override did not leak. ⛔ **No mask, no
tolerance raised** — B0's ruling stands.

◐ **`V3` IS PARTIALLY EXERCISED AND SAYS SO.** V3 asserts **AC-4 and AC-8**; AC-8's `/privacy` section
does not exist until **O5**, so only the `/commons` half is closed here. `/privacy`'s before-figure
was **banked while the same build was up** (**9.43** against a target of 12, headroom 2.57) so O5's
delta is readable on the same surface. *A limb partially exercised reports as partial* — convention
13's own amendment.

⚠ **A pre-existing gap found and NOT fixed, because finding one is not a licence to widen.** The
identical disambiguation sentence has been live on `/learn/what-is-adna` since P4.5b and **carries no
register row** (`grep -i ancient` over the register returned **0** before §17 `[D]`). AC-7 governs
*new* public sentences; back-filling P4.5b's at an objective's tail is this campaign's most-repeated
defect. **Named in §17.1 as a debt with a destination rather than a silence.**

⚠ **`grep -c` exits 1 on zero, so `|| echo 0` printed `0\n0`** in this sitting's first baseline probe
— **the identical idiom GR-1 already paid for.** Caught by reading the output rather than by
remembering the finding, which is the argument for reading output.

⏭ **NEXT: `O3`** (D3 — the local-models section, branch (i): route it to where the L0–L3 ladder
actually lives, **not** `/network`, whose ratified home-claim measured FALSE). ⛔ No deploy authorized
or owed; a push is its own ⛩ GO.

## O3 — DONE 2026-09-02 (`AC-3` ✅ · `AC-7` ◐ mission-level · `V2` ✅)

D3, the local-models story, ships as **Band 4b — "Running a model on your own machine"** on
`/network`, placed after *"Run a node"* because it continues that band's subject: what runs on your
machine. Full record: `artifacts/gr_4/o3_d3_record.md`.

**Derived, each by its own command `[D]`:** chromium **670 → 674** (delta isolated by `--list`:
gate-54's own file **10 → 14**, `674 − 660 = 14` ⇒ **+4, removed nothing**) · all-projects **700** ·
**snapshot 26, UNCHANGED** · run **673 passed / 1 skipped / 0 failed** · `check:markup` **0**,
control-checked against a deliberately invalid file · red-test **17 pass / 0 fail**, every case red
at **exactly** its declared assertion set. ⛔ **Nothing deployed and nothing owed** — met on-build;
prod still serves `a852423`, re-probed at the open.

⭐ **`snapshot` unchanged was MEASURED, not assumed from O2's shape.** `/network` is **not** among
`gate-49`'s 12 `TEMPLATES` `[D]` ⇒ **no re-baseline fires**. O2's dominant cost came from a
**fixture attached to the route**, not from its criteria — the SO#11 lesson O2's own AAR filed,
spent forward by reading the template list *before* costing O3.

⛩⛩ **THE RULING'S DESTINATION DID NOT EXIST, AND AC-3 IS CORRECTED AT ITS OWN FACE.** See the
frontmatter. **`L0–L3` is a homonym** — `agentic-literacy.mdx:12-14` is `L0 Aware → L1 User → L2
Builder → L3 Architect`, a **human-literacy** ladder — and the **compute** ladder's only site-wide
home is the **byte-vendored** `src/data/tour/workspace-router.txt`. ⇒ branch (i) was unperformable
for **two** independent reasons, the second being **D1's trap class recurring for the third time in
this mission**. ⇒ ***a shared notation is not a shared referent, and a grep for the notation cannot
tell you which one it found.*** The revue's home-claim **stays FALSE**; **its conclusion survives its
reasoning**, and holding those apart is the record.

⭐⭐ **THE COPY NAMED A WORD THE REGISTRY DOES NOT PUBLISH — CAUGHT BY THE AC-7 ENUMERATION, BEFORE
IT SHIPPED.** The draft read *"the registry marks both of them **genesis**"*. `vaults.json` does
carry `status: "genesis"` `[D]` — but the site's public face **renders that state as `planned`**:
both linked cards read **`Stage: planned`** and contain the literal `genesis` **0 times**, `planned`
**1 time** `[D]`. A reader who follows the link to check the claim finds a different word in its
place. ⭐ **It would have passed every limb**: `G54m`'s marker list contained `'genesis'`, so the
framing assertion was **green on the source's own word** while the copy misdirected the reader —
*a marker naming the SOURCE field certifies the copy against the thing the copy is wrong about.*
Corrected same-diff across copy + marker list + red-test case 14. ⇒ **convention 17's amendment
arriving in a VOCABULARY rather than in a grep**, and the second time in this mission the register
pass stopped a claim at enumeration rather than at review (O1 stopped the tier-ordering
contradiction the same way).

⭐⭐ **AND THE NEW BAND PUT A PRE-EXISTING OVER-PROMISE INTO DIRECT CONTRADICTION.**
`network.astro:155` read *"Local-first — **nothing** leaves until you choose"*, **40 lines above** a
new band saying in the page's own voice that prompts **do** leave. **Scoped** to *"your vault files
never leave until you choose"* (**R-161**). ⛔ **A FORCED repair, not a sweep**, and the test applied
is the distinction: *is the sentence merely pre-existing, or did this increment make it worse?* The
homepage's identical claim (**R-97**, `verified (ADR-048 verbatim)`) is **NAMED AND NOT TOUCHED** —
ratified copy needs its own gate. ⚠ Verified **unpinned** before the edit (no register row, no
`gate-26` fixture) so it cost no same-diff churn. ⭐⭐ **This is `R-64`'s class on a second surface,
and R-64's own remedy was written at P0.5** — GR-1 discharged it on `/get-started` **only**. ⇒ ***a
caveat in the register is a finding with a home and no gate***, and the proof it still binds is that
its remedy reached one of three surfaces and nothing noticed for five days.

⚠⚠ **AC-3 CARRIES NO READING-LEVEL CONSTRAINT, AND SAYING SO IS THE POINT.** `/network` prose FKGL
**11.56 → 8.89** against a target of 12 — a **2.67** drop, **~6×** the 0.44 headroom the constraint
was supposedly protecting and **~8.6×** O2's 0.31 move. **Ship NOTHING and it reads 11.56 and the
census still passes.** ⇒ D3 reproduces AC-4's DEFECT-1 at ~8.6× the magnitude. **What makes AC-3
falsifiable is `G54e`/`G54f`/`G54k` and `G54l`/`G54m`/`G54n`** — the census is context, not the
proof. ⛔ **HAZARD-2 honoured**: both ends on the **same instrument** (revert → build → census →
restore → build). ⚠ **And the pair first written into the gate header was wrong** — `→ 8.93 / Δ 2.63`
— because the genesis→planned correction moved the prose after the figure was taken; **corrected in
the commit that quotes it.** ⭐ The *before* re-derived **exactly**, which is what makes the *after*
being wrong legible as drift rather than noise.

⭐⭐ **`G54n` IS THE LOAD-BEARING LIMB, AND CASE 15 IS WHY.** Planned framing does not fail by going
missing — **a future editor does not delete *"not built"*, they add *"you can run"* beside it.**
Case 15 removes nothing, adds **one** sentence, and **`G54m` stays green while `G54n` reds**: the
copy still *looks* careful and has acquired a promise. **`V7`'s lesson borrowed one criterion
sideways**, exercised before AC-8's `/privacy` section exists to teach it at O5.

⭐ **`G54k` exists because a third page falsified `G54f`'s own message.** `G54f` said its floor was
*"derived from that page's own sibling sections"* — true while two pages shared a pin of **217**
taken from the thinner of them, **false for `/network`, whose own bands floor at 547**. Graded
section: **768**. Corrected same-diff in the commit that made it false. ⭐ **Case 12 had to be
MEASURED**: its replacement must land strictly between 217 and 547 so `G54k` reds **alone**; the
first draft, written by feel at ~205 chars, red **both** floors and isolated nothing.

⚠ **A harness defect fixed in passing, and it had already fired.** `applied()` returned on a HARNESS
BUG **without restoring the tree**, so the `&& check_case` chain short-circuited past the case's only
`restore_all` and **the mutated tree survived into every case after it** — one stale grep pattern
produced **four false HARNESS BUGs and a red final control**, each failing for a reason belonging to
its predecessor. ⇒ ***a case that cannot apply must fail ALONE.***

⚠ **Convention 19's green has a WIDTH**: `main` is green at **`7210d5e`**, the last **pushed**
commit. **GR-4's commits have never been through CI**, and this one has not either — a push is its
own ⛩ GO.

⭐⭐ **AND THE CLOSE ITSELF TURNED A GATE RED — CAUGHT ONLY BY RE-RUNNING THE SUITE AFTER THE RECORD
EDITS.** `G41b` reads the **last** `Counts` table in `claim_register.md`; §18's first draft published
its tally as a **prose sentence** rather than the parseable table, so the gate reported *"the
format changed and this gate went blind rather than red."* ⭐ **§17.5's warning was followed
exactly** — *"any future Counts section is appended after this one, never inserted above"* — **and it
governed POSITION while the failure was FORMAT.** ⇒ ***a note that transfers one obligation reads as
if it transferred all of them***, and the half it does not mention is the half nobody checks.
⚠⚠ **The green quoted mid-objective was measured BEFORE that section existed** — **convention 16's
own law one step after this desk quoted it**, and **P5.1's finding verbatim: *a close cascade that
edits a governance file is a change the suite can see.*** Register tally re-derived and published:
rows **171 → 180**, ids **156 → 165**, `R-11…R-161`, **0 gaps**. Final: **673 passed / 1 skipped /
0 failed.**

~~⏭ **NEXT: `O4`** (D5 — the returning-member entry point to changelog/RSS, **plus the owed
prose-corpus measurement**: does a link-dense strip enter the prose corpus at all? P4.5b measured
that link-dense lines *leave* it).~~ ✅ **O4 IS DONE — see below.** Then **O5** (D6 + AC-8's
`/privacy` section + close cascade + AAR; `/privacy`'s before-figure is **banked at 9.43/12** from
O2).

## O4 — DONE 2026-09-02 (`AC-5` ✅ · `V4` ✅ · `AC-7` ◐ mission-level)

D5, the returning-member entry point, ships as a **`latest-strip`** section on `/` — the changelog's
three most recent entries, dated and **derived**, plus the feed. Record:
`artifacts/gr_4/o4_d5_record.md`. Chromium **674 → 679**, delta isolated by `--list` (gate-54's own
file **14 → 19**; +5, removed nothing) · all-projects **705** · **snapshot 26** · `check:markup`
**0** control-checked · red-test **22 pass / 0 fail**, every case red at exactly its declared set ·
`gate-49` red **confirmed first**, then **exactly 2 of 24 baselines changed**, both `home`.
⛔ Nothing deployed and nothing owed — met on-build; prod still serves `a852423`, re-probed at open.
Register **§19, R-162…R-164**; counts re-derived **rows 183 · ids 168 · 0 gaps**.

⛩ **A question the signature did not settle was put to the operator (SO#1):** AC-5 fixes the
**surface** and says nothing about the **form**. **Ruled — a dated strip with NO lead sentence**,
because on `/` the form is a measurement decision as much as an editorial one.

### ⭐⭐ The measurement the signature deferred was taken, and it is the entry worth reading

Ruling 3 dissolved `CONSTRAINT-2` by moving D4 off `/`, and said in the same breath that ***a
constraint that stops binding is not a measurement that has been taken.*** D5 lands **on** `/`.

`/` **prose FKGL 9.96 → 9.96**, corpus **6030 → 6030 chars, byte-identical**, all 5 strip lines in
the census's `dropped` set with the predicate that dropped them named (`heading` ×1 ·
`unpunctuated-block` ×3 · `multi-link` ×1), **0 leaked**. Both ends on the **same local build**
(HAZARD-2).

⭐⭐ **THE WHOLE-TWIN DELTA IS WHAT MAKES THE RESULT MEAN ANYTHING: 13.00 → 13.16.** Had **both**
figures held still, the reading would have been **indistinguishable from the strip never shipping**
— `DEFECT-1`'s shape exactly. The whole-twin moving while the prose corpus did not is what separates
*the classifier correctly excluded it* from *the twin never contained it*.

⭐ **And the form was chosen against a live precedent on the same page, not against a reading of the
predicate's source**: `join-network`'s tease list is the identical shape and the census **already**
classified it `unpunctuated-block` on `/` `[D]`.

⚠⚠ **`AC-5` CARRIES NO READING-LEVEL CONSTRAINT — the third consecutive objective with that gap**
(AC-3 had none; AC-4's was `DEFECT-1`). The property is fragile in a way invisible to a reader:
`unpunctuated-block` drops a block only while it carries **zero** terminators, so **one full stop**
— a lead sentence, or a future changelog title — silently puts this section into a corpus with 0.04
of headroom. **`G54s` asserts the property so it RECURS**; a reading is a statement with a timestamp
(convention 16), an assertion is not. Red-proven by **case 20**, which is `G54n`'s shape one
criterion across: nothing removed, one natural lead sentence added, every other assertion green, the
section reads *better* — and the property is gone.

### ⭐⭐ The enumeration exposed an increment that authors almost no sentences

Reader-facing strings literally written here number **three** — *"What's new"*, *"Full changelog"*,
*"RSS feed"* — and **none is a proposition**. Everything else a reader sees is read from the
changelog collection at build time. ⇒ ***D5's claim surface is not its prose; it is its
DERIVATION***, and its only substantive assertion — *these are the newest things that happened* — is
one **a hardcoded strip would make falsely while reading identically** (convention 15's *a stale row
and a broken row look identical from the outside*, on our own front page). That is **R-162**, and it
is why **`G54r`** exists; case 19 changes one date and leaves the strip otherwise perfect.

### ⭐ `V4`'s ratified single mutation was insufficient, and DEFECT-4 said so at authoring time

V4 as signed red-proved AC-5 with **one** mutation — an 8th nav entry — which reds via the nav
**count**, so the entry-point assertions **would never once have been demonstrated to fail**. GR-3's
clause (*a demonstration is only worth what it can attribute*) spent **forward** rather than
discovered in a harness's fourteenth day. ⚠ **`G54o` is a REGRESSION CHECK and says so on the gate's
face** — the nav held 7 before this objective, so it is green against zero work; it earns its place
by guarding the **premise** of the ratified remedy, never as evidence AC-5 was met.

### ⚠ Two defects of mine, both caught by structure rather than vigilance

**The red-test harness caught case 18 and it failed ALONE** — its `applied()` verifier was a
placeholder grepping a word present in *neither* state; cases 19, 20 and control 21 ran clean after.
**O3's `applied()` restore fix earning itself in its first extension.** ⇒ the narrower lesson:
**`applied()` can only assert PRESENCE, so a case that REMOVES something must name what the removal
leaves behind.** And **a scripted edit to the `cleanup()` trap silently did not apply** — its pattern
had single spaces where the file is **column-aligned** — so the two new mutation targets would have
been backed up and **never restored on an aborted run**. Caught by reading the file after the edit
rather than trusting the exit code.

⚠ **`gate-49`'s re-baseline was PREDICTED and the prediction was falsifiable**: `/` **is** a
template, so O2's cost applied here and O3's did not. Red confirmed **first** (2 failed · 24
passed), then 24 regenerated in-container with **exactly 2 changed** — the 22 untouched baselines
independently prove the scoped styles did not leak. ⛔ **No mask, no tolerance raised.**

⚠ **The inbox held 4 untracked memos, not the 3 the record carried.** All read at the open and
committed as a rider — *the receiving commit is the read-receipt*. ⛩ **Vitruvius's carries
`decision_required: true`** (approve/refuse/amend the `/g/adna/` Graph Front-Page) and **Hopper's
hook 4.2.0 carries `ack_required: true`**; both replies are outward acts with their own ⛩ GO.

~~⏭ **NEXT: `O5`** — D6 + AC-8's `/privacy` section + the close cascade + the AAR.~~ ✅ **DONE.**

## O5 — DONE 2026-09-03 (`AC-6` ✅ · `AC-8` ✅ · `AC-7` ✅ · `V3` ✅ · `V6` ✅ · `V7` ✅)

D6 stays **unshipped**, which is the criterion. R-124 ships as **`<h2 id="regulated-data">`** on
`/privacy`. Full record: `artifacts/gr_4/o5_d6_r124_record.md`; register **§20**.

⚠ **Dated 09-03 while O0–O4 are dated 09-02.** This sitting opened at **2026-09-03 02:10 UTC** with
the node's local clock still reading 09-02. The mission spans a UTC date boundary and the record says
so rather than flattening it — the gate sitting's own finding (*a timestamp is a measurement, and it
has a zone the way a count has a command*) recurring in the direction that would have been invisible.

**Derived, each by its own command `[D]`:** chromium **679 → 684** (delta isolated by `--list`:
gate-54's own file **19 → 24**, `684 − 660 = 24` ⇒ **+5, removed nothing**) · all-projects **710** ·
**snapshot 26, UNCHANGED** · run **683 passed / 1 skipped / 0 failed** · `check:markup` **0**,
control-checked against a deliberately invalid file that exits 1 · red-test **27 pass / 0 fail**,
every case red at exactly its declared set · `gitleaks` **1025 commits, no leaks**.
⛔ **Nothing deployed and nothing owed** — met on-build; prod serves `a852423`, re-probed at the open.

⛩ **A question the signature did not settle was put to the operator (SO#1)** — and the signature said
in terms that *"AC-8's exact wording is not pre-approved."* **Ruled: a new `<h2>` with its own anchor**,
matching `/privacy`'s seven-sibling idiom. R-124's own diagnosis is *"the defect is ROUTING, not
policy"*, so a reader scanning headings must be able to find that the question was answered.

### ⭐⭐ AC-6's own label resolves to NOTHING, and a grep for it would have passed

`movement 3` appears **0 times in both campaign directives** `[D]`; the whitepaper's four hits are
ordinary English (*"the DeSci movement"*); the term enters via this campaign's own `rubric_v1.md` and
`situation_report.md`, both attributing it to *"new scope the order adds"* — and **the Grande Revue
order was VERBAL**, so there is no artifact to resolve it against.

⇒ **A gate greping the label returns 0, goes green, and checks nothing whatsoever.**

⭐⭐ **This is O3's homonym finding entered from the OTHER SIDE, and the pair is the reusable part.**
There, a shared notation resolved to the **wrong** referent — a confident false **positive**. Here it
resolves to **no** referent and yields a false **negative indistinguishable from a met criterion**,
because AC-6's met-state *is* absence. ***A grep cannot tell you what it found, and it especially
cannot tell you that it found nothing because there was never anything to find.***

The subject was taken from **D9(e)'s own body** instead: the embargoed protocol-opening story, keyed
to R-14/R-15 and the P1-2 leak — which has a checkable vocabulary precisely because **it has shipped
and been retired three times** (R-14 · P1-2, fixed at GR-1 `311b3c3` · R-125). All three measure
**0** across every non-excluded twin, and GR-4's own diff adds **0** lines of it.

⚠ **The absence is NOT total, and a bare "movement 3 is absent" would have hidden both cases.**
`/learn/tutorials/exchange-adoption-path` already carries a **candor-framed** horizon passage
(*"pre-public-launch"*, *"draft"*, `TAUGHT-AS-DESIGN`) — no availability claim, so AC-6 holds, but the
honest sentence is *present and candor-framed*, not *absent*. And the vendored
`skill-onboarding.md` carries ***"The marketplace is coming soon"*** — the one un-candid promise about
the horizon anywhere on the site. ⭐ **That is `F-w`, filed at GR-1 as a TRUST-PAGE defect; nothing had
connected it to D6.** Same row, read through the criterion convened five days later to rule on exactly
that story.

### ⚠ The correction of the revue's figure was ITSELF wrong, in the same direction

This mission has carried *"4 in source, of which **2 render** and 2 are source comments"* since its
recon — in `AC-6`, this body, the campaign governance file and the proposal. Re-derived at the object
`[D]`: **1 renders and 3 are comments.** `HomeHero.astro:252`, `:379` and `state-of-the-network:193`
are all `{/* … */}`; only `:196` is a `<strong>`. Rendered HTML **1**, rendered twin **1**.

⭐⭐ **The total was DERIVED and the breakdown was TYPED.** The recon ran a real command for `4`, then
partitioned it by inference — reading `:252`'s explicit *"CUT, not rewritten"* as the comment and
assuming its sibling at `:379` was the render, **without opening `:379`**. ⇒ ***a derived total can
carry an underived breakdown, and the breakdown is what the conclusion rests on*** — KW-14 one level
down, and **the same shape as the error it was correcting**. ⚠ The companion claim that *"a source
grep and a rendered grep disagree in BOTH directions on this one phrase"* is also false: source **4**,
HTML **1**, twin **1** — one direction, and the two rendered surfaces agree. The both-directions case
is P4.5b's *"context democracy"*, a different phrase.

⛔ **The conclusion survives its arithmetic.** D9(e) said 0; the truth is 1; the phrase is **live and
carrying the horizon claim** (`9e0fd06`, 2026-08-18, ten days before the revue). So D6's real question
was never *"shall we introduce this phrasing"* but *"is the horizon claim already made?"* — and under
the ratified hold, more is not wanted. **AC-6 is met by nothing shipping.**

### ⭐⭐ The AC-7 enumeration cut FOUR things from the copy, and one was this mission's own class

Third consecutive objective where the diff-enumeration stopped a claim at **enumeration** rather than
review (O1: the tier-ordering contradiction; O3: the word the registry does not publish).

1. **"and clinical work"** — the `/` twin measures **rare ×15 · undiagnosed ×2 · Wilhelm ×2 · clinical
   ZERO** `[D]`. The sentence described the site's examples as something they are not, **in the very
   section written because a clinician could not find her question answered.** *(And R-124's own row
   cites Wilhelm ×3 from 08-19 — right when written, never re-read.)*
2. **"a processor"** — **a GDPR term of art.** Denying a defined legal role is itself a regulatory
   self-characterisation, **inside the one section whose purpose is to make none**: the disclaimer had
   reached for the vocabulary of a regime it disclaims.
3. **"moves no data anywhere"** — an unscoped absolute, and **the R-64 / R-97 / R-161 over-promise
   class on a FOURTH surface, in the mission that narrowed it on the third one objective ago.**
4. **The definition was rewritten to sit WITH the site's ratified *"open specification"*** rather than
   beside it as a rival.

### ⭐ Two instrument defects of mine, both caught by structure rather than vigilance

**The `R124_FLOOR` pair was TYPED AND WRONG, AND WENT GREEN.** The gate shipped `1113`/`292` by feel;
measured, the section is **892** and the thinnest sibling is **295**. The wrong pair passed — 872 ≥ 292
— *which is how a guessed pin survives review*. **B0's finding, fourth sighting in this mission**
(O1's 330/4 · B0's tolerance · O3's case-12 length · this): ***a number written by feel is a formality
wearing a pin's clothing***, and only *measure first, then pin* catches it.

**And the copy revision silently invalidated a red-test anchor.** Case 25 anchored on *"moves no data
anywhere."* — the sentence the enumeration then **cut**. The harness reported a **HARNESS BUG and
failed ALONE**, cases before and after clean: **O3's `applied()` restore fix earning itself a second
time.** ⇒ the narrower lesson: ***a red-test case is coupled to the copy it mutates, so a copy edit is
a same-diff change to its own harness*** — convention 7 / ADR-057 one altitude down.

⚠ **`gate-23` guards R-14's gloss ON THE HOMEPAGE ONLY** (`:82`), so its green is a true statement
about `/` and nothing else — convention 18's family. `G54u` is site-wide. ⛔ **Named, not widened**:
re-scoping gate-23 is R-14's business, not AC-6's.

⚠ **Convention 19's green has a width**: `main` was green at **`7210d5e`**, the last *pushed* commit,
with **all 7 of GR-4's commits never through CI** — which is what O5's ⛩ push GO addresses.

## AAR (SO#5)

**Worked.** The **AC-7 diff-enumeration**, for the third objective running, and this time it cut four
live problems out of two paragraphs before they reached a reader — including one this mission had just
finished fixing elsewhere. **Measure-then-pin** caught a fourth guessed number. **Reading the subject
out of D9(e)'s body instead of off its label** turned a criterion that would have passed vacuously
into one that found two live horizon passages and connected `F-w` to D6 for the first time.

**Didn't.** The recon's *"2 render, 2 comments"* was **typed inside a derivation** and carried by four
artifacts for a day. The `R124_FLOOR` pair was typed and **went green**, so nothing but a deliberate
re-measure would ever have surfaced it. Both are the same failure: **a real command run, then a
conclusion inferred past where the command reached.**

**Finding.** ***A derived total can carry an underived breakdown, and the breakdown is what the
conclusion rests on.*** Its sibling, from the same objective: ***a grep cannot tell you that it found
nothing because there was never anything to find*** — the O3 homonym pair completed, and the reason
AC-6 needed its subject re-derived rather than its label matched.

**Change.** Absence criteria state the **subject**, not the label, and name the artifact the subject
is resolved against; when no such artifact exists, that is the finding. And a breakdown of a derived
total is **itself derived** — the structural classifier this objective used replaced a grep-class pass
whose numbers did not sum, which is a typed figure wearing a derivation's clothing.

**Follow-up.** `R-124` is **built, not live** — its discharge condition is at register §20.4 and needs
a deploy nobody has GO'd. `F-w` gains a second lens and keeps its one destination. `gate-23`'s
homepage-only scope is **named and not widened**. `F-aa` and `R-97` stay open with their own homes.
