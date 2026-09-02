---
plan_id: mission_haussmann_gr_4_story_coverage
type: plan
title: "GR-4 — story coverage: the four unhomed stories, and the two the revue was wrong about"
campaign: campaign_haussmann
phase: GR                  # Grande Revue lane, no phase number — GR-1's precedent, GR-2/GR-3 following.
decade: 2
owner: stanley
status: queued   # ⏸ OPEN AND HALTED AT ITS ⛩ CONVENTION-13 PRE-BUILD GATE (2026-09-02) — nothing built, no copy authored, criteria NOT ratified, budget NOT ratified. This is GRANDE REVUE **Lane D**, the ratified Gate-1 order's LAST lane, opened on the P4.2/P4.3/P4.4a/P4.4b/P4.5b/P5.1/GR-1/GR-2/GR-3 precedent: **pass first, no build until signed.** The battle plan ratified this lane's SHAPE and says so on its own face. ⛩ It additionally carries an **audience/scope decision (R-124)** that must be taken BEFORE any copy is authored.
mission_class: content     # ⚠ FIRST content-class mission to reach this gate. Every prior convention-13 pass was aimed at a BUILD mission; the failure modes here are different and are named in the pass.
executor_tier: opus        # judgment-heavy and NOT because it is large: the work is authoring public claims under an active embargo, against an unresolved audience question, on surfaces whose reading-level headroom is measured in hundredths. A cheaper tier reproduces exactly the defect class this campaign exists to retire — a claim moving UP.
token_budget_estimated: "⛩ PROPOSED — see the ⛩ gate. The band is deliberately NOT typed here: it is derived in `artifacts/gr_4/ac_amendment_proposal.md` §7 AFTER the pass, because convention 13's own repeated lesson — nine sightings — is that a budget ratified before the pass is a budget costed against a spec nobody has read."
token_budget_actual: ""
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
  - "AC-2 [D2 · token-budget doctrine] — the SO-11 / ADR-016 per-mission budget doctrine layer is published on an existing home (`mission-decomposition.mdx` and/or `design-a-mission.mdx`, both verified present on disk). Measured baseline: 0 occurrences of ADR-016 or token_budget in `site/src/**` [D]."
  - "AC-3 [D3 · local models] — a *planned*-framed local-models section ships on a home ⛩ RULED AT THE GATE, and every sentence in it is distinguishable by test from a live claim. ⛔ The battle plan's stated home rests on a premise measured FALSE (see AC-3's note): `/network` carries ZERO L0-L3 and zero compute-tier content."
  - "AC-4 [D4 · ancient DNA] — the ancient-DNA disambiguation reaches at least one surface a first-contact reader lands on, AND the receiving surface's prose FKGL stays at or under its own target, re-measured by `reading_census.mjs` after the copy lands. ⛩ The receiving surface is ruled at the gate on MEASURED headroom, not chosen in prose."
  - "AC-5 [D5 · latest strip] — a returning-member entry point to changelog/RSS exists above the footer, and the top-level nav still holds exactly 7 flat entries (ADR-049's cap, derived from `navigation.ts`, not typed)."
  - "AC-6 [D6 · movement 3] — movement-3 stays UNSHIPPED under the embargo, and that is the criterion being MET. Its evidence is a dated absence assertion naming its surface. ⚠ It ALSO corrects, at the record, the revue's false parenthetical that the ratified 'opening progressively' phrasing has 0 hits corpus-wide."
  - "AC-7 [governance] — every new public sentence carries a claim-register row; every count this mission narrates is derived by its own command; R-124's disposition is read back IN the register; AAR filed (SO#5); `token_budget_actual` recorded at the time, not reconstructed."
verification_method: >-
  V1 [asserts AC-1, AC-2] — a content probe over AUTHORED source only, with `src/data/tour/**` excluded
  BY NAME and the exclusion asserted (gate-48's ratified discipline: the exclusions are part of the
  claim), red-proven by a mutation that puts the term back in a vendored file alone and must NOT go green.
  V2 [asserts AC-3, AC-6] — a *planned*-framing probe: every new forward-looking sentence is matched to a
  planned-marker, and a control mutation that strips the marker goes RED. This is convention 1 in
  instrument form.
  V3 [asserts AC-4] — `node site/scripts/reading_census.mjs` re-run after the copy lands; the receiving
  route at or under its own target, and the BEFORE figure recorded in the same artifact so the delta is
  readable.
  V4 [asserts AC-5] — nav entry count derived from `navigation.ts` (exactly 7 flat) and the homepage
  entry point asserted present; red-proven by a mutation adding an 8th nav entry.
  V5 [asserts AC-7] — register rows present for every new claim; `git status --porcelain` read at close.
  V6 [asserts AC-6] — the dated absence assertion for movement-3, with its surface named, plus the
  corrected 'opening progressively' figure re-derived at the commit that quotes it.
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
| O1 | D1 + D2 (the two clean, agent-reachable adds) | signature only |
| O2 | D4 | ⛩ receiving-surface ruling |
| O3 | D3 | ⛩ home ruling (the false-premise fork) |
| O4 | D5 | signature only |
| O5 | D6 + R-124's disposition + close cascade + AAR | ⛩ R-124 audience call |

## Convention 13 — coverage

Run **COMPLETE**, both directions, at the pair count derived in
`artifacts/gr_4/ac_amendment_proposal.md`. Coverage is recorded **there and in this table**, so a
partial pass is legible as partial (convention 13's own amendment).

| | Pairs | Derivation |
|---|---|---|
| AC×AC | **21** | `C(7,2)` — 7 criteria |
| AC×V | **42** | `7 × 6` — 7 criteria × 6 limbs |
| **Total** | **63** | derived, not typed |

## AAR

*(filed at close, per SO#5 — before `status: completed`)*
