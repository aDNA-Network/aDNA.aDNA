---
plan_id: mission_haussmann_p4_1_token_pipeline
type: plan
title: "P4.1 — Tokens + visual voice: DTCG adoption and the slot-contained Ghibli-pixel program (ADR-053)"
campaign: campaign_haussmann
phase: P4
decade: 2
owner: stanley
status: completed   # ✅ CLOSED 2026-08-24 with AAR (SO#5), session `session_stanley_20260824_152000_haussmann_p4_1_o3`. **All five criteria met: AC1 ✓ AC2 ✓ AC3 ✓ AC4 ✓ AC5 ✓ (ON BUILD).** Suite **560/560**, 9/9 mutations red-proven, axe 0 × 3 surfaces × both themes, persona ranker **4.03 / 4.10 / 4.37** (all ≥4.0, `/vaults` by **0.03** — recorded as the number, not rounded). ⛔ **BUILT, NOT DEPLOYED — AC5 is MET-ON-BUILD with deployment NAMED AS OWED**, per the operator ruling that "live surface" = a real shipped route, build-verified. The standing deploy freeze (now **F-u**) blocks it: two checkouts of this repo each silently un-publish the other's `--prod` deploy, and the release condition is lemur pushing `30c8163` + `f4fa9c5` then ONE deploy from a tree holding both halves. Re-verified at this close after `git fetch`: both still absent. **`completed` is a statement about a mission, never about the live site.** ⭐ AC4 resolved to the **staged Pygmalion ask** — the branch its own conditional selects, verified at the object (VisualDNA's schema dir still holds 3 files, no `style_atmosphere`); the ask asks them to run **Step 1 of their own protocol on their own worked example**, and states on its face that their extension machinery is itself pre-activation, two missions out. ⚠ **SO#11 retrospective triggered**: ~590–930 kT / 4 sessions vs a ratified ~250–400 kT / 2. ⚠ **Debt that prose said was "routed to P4.4" had never reached the register** — landed **F-u** + **F-r** (17→19 rows) and **withdrew F-t as a duplicate of F-l**. ⭐⭐ The mission's finding: **a red test can reveal that code's stated structure is not its actual structure** — two of three named predicates were decorative and a mutation left the gate green because the line it targeted could not move. ⏭ **NEXT = P4.2** (GO, with the freeze and the design-system-regeneration caveat stated in §AAR). Historical context below.   # ⛩ **DP8 RULED 2026-08-23** — ADR-053 → **(a)** slot-contained program (`accepted`); ADR-059 → **(c)** validators-without-emission (`accepted`, authored this session because the substrate call proved load-bearing, not mechanical). **O0 CLOSED**; O1–O3 remain. ⭐ Premise correction: the site does NOT have "one excellent hero" — **10 illustrated routes are live in ONE render language** and nothing below the hero carries the style, so DP8 governed an EXISTING ungoverned program rather than inventing one; 3 of the dossier's 5 requirements were already met. ⚠ **Convention-13 pass COMPLETE (16/16 AC×V pairs + 4 AC×AC): 3 FAILURES + 1 structural gap** — AC2's verification cannot see AC2 (gate-25 excludes the token files by construction; 4d compares WebForge's source); AC2's record limb named the wrong ADR (resolved by authoring 059); **AC4 has no schema to instantiate** (`style_atmosphere` is declared-but-unexercised with no schema file — a Pygmalion ask, not a local fix); and **O2's slot applications are covered by NO acceptance criterion**, so all four ACs could pass with zero slots built. ⛩ Operator ruled: **AMEND THE ACs BEFORE O1** — draft at the top of session 2 for sign-off before any building. ⛔ Out-of-band this session: **F-s**, a live production regression (adna.network served a pre-08-18 build; every surface since P2.1 was off the site), found by a capture harness pointed at prod, escalated, and **restored under operator GO** — `deploy_record 2026-08-24T02:44:59Z tree=922519c`, red-proven 10/10. Precedes P4.2 by the sequencing law.
mission_class: design_excellence
executor_tier: fable
token_budget_estimated: "~250–400 kT across 2 sessions: ADR-053 (voice ruling) + DTCG pipeline adoption-or-pinned-divergence + illustration-slot spec + first aDNA VisualDNA bundle (ADR-016)"
token_budget_actual: "⚠ **SO#11 RETROSPECTIVE TRIGGERED — ~590–930 kT across FOUR sessions against a ratified ~250–400 kT across two: ≈2.36× (low) / ≈2.33× (high), over the 2× threshold at BOTH ends.** Reported, not absorbed. Decomposition, because the headline blames the wrong thing: O1 and O2 each landed WITHIN their own session estimates (unplanned work displaced planned work rather than adding to it), so per-session forecasting was sound. O0 overran materially and the overrun is **F-s** — a live production regression found by this mission's capture harness, escalated and restored under operator GO; incident response, not scope drift. **The 2-session figure was wrong at ratification**: the mission was scoped as four workstreams, and convention 13's pass then found AC4 had no schema to instantiate and O2's slot work was covered by no criterion at all, forcing an operator-signed AC amendment mid-mission. ⇒ The remedy is NOT 'estimate higher' — it is that **convention 13's pass must run BEFORE a DP ratifies a budget**, which is what the convention already says. Full accounting in §AAR."
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: ["dossier Ghibli-pixel ruling draft (slot-contained program; Playdate/Charm/Quanta evidence)", "webforge P4 (DTCG pipeline; tokyo_night = a named ceiling seed) + P5 (art_direction.yaml schema, signature_element/anti_signature)", "ADR-032 (brand register)", "VisualDNA schema v1.0 (no populated bundles exist)"]
vitruvius_dimensions: [D5]
decade_theme: craft
webforge_patterns: [P4, P5, P6]
patterns_to_author: ["implementation pressure on the ceiling engine (P5 is proposed-not-built — our art_direction.yaml entry is a live test case, owed back)"]
depends_on: [mission_haussmann_p0_3_webforge_intake, mission_haussmann_p2_6_midscore]
blocks: [mission_haussmann_p4_2_craft_floor]
acceptance_criteria:
  - "⛩ DP8 / ADR-053 ratified: the visual voice = a governed, slot-contained illustration program (fixed slots: hero panel, vault/graph cards, category marks, empty states; chrome stays Tokyo-Night type-and-color) — or the operator's elected alternative — with the containment rule + credit-per-artifact + generation-pipeline note"
  # ⛩ AC2/AC4/AC5 + verification_method AMENDED 2026-08-23, operator-signed. Record + rationale:
  # artifacts/p4_1/ac_amendment_proposal.md (`accepted`). AC1 unchanged and already MET (ADR-053 accepted).
  - "ADR-059 (c) executed, all four limbs: (i) WebForge's check_aa.py + conformance.py --strict-leak adopted as gates over the existing token layer, EACH RED-TESTED BY DELIBERATE MUTATION before it is believed; (ii) the EMISSION divergence formally pinned in how/federation/webforge/CLAUDE.md with its rationale and its stated review condition; (iii) the correcting memo to Vitruvius staged, withdrawing the pattern register's 'convergence is natural' line; (iv) no ceiling derived and no token value regenerated"
  - "aDNA's art_direction.yaml entry authored (signature_element = the ruled program; anti_signature named) at the wrapper path per P5 schema"
  - "Either the first real aDNA VisualDNA bundle authored against a schema that fits a house visual voice, OR — if style_atmosphere is still unexercised with no schema file — a STAGED coordination memo to Pygmalion asking for it, with aDNA's entry as the first live consumer case. The gap is recorded either way; it is NEVER silently satisfied by authoring a location/object bundle for one hero scene, which would not make the identity reusable and would report done against a criterion that had not moved"
  - "At least one NEW slot from the ADR-053 table is specified and applied on a live surface, shipping in the same change as (a) its text equivalent, (b) its per-artifact CREDIT — the additive `credit` field on DocumentationLayout's existing heroImage prop, never a new component — and (c) its both-theme contrast check. The slot spec is written so a contributor could apply the same slot to a new page without asking"
verification_method: "One testable instrument per criterion (the old 'gate-25/4d-class token checks' could not see AC2 under ANY option — gate-25 EXCLUDES tokens.css/branding.css by construction; 4d compares WebForge's source, which this site is not compiled from). AC1 → the ADR-053 record. AC2 → the two adopted validators passing over the site's token layer, each RED-PROVEN BY MUTATION, plus the wrapper diff showing the pin and the staged memo on disk. AC3 → `derive_tenant_ceiling.py --validate-entry` on the wrapper entry (the P5 build-readiness gate; AC3 was previously tested by nothing). AC4 → the bundle, or the staged memo, on disk. AC5 → T0 captures of the applied slot in BOTH themes + axe-0 parity + the full gate suite green. Campaign-level: persona ranker ≥4.0 on any surface changed."
human_gate: true
tags: [plan, haussmann, p4, tokens, visual_voice]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> The dossier answered the systematise-vs-accent question with evidence — this mission ratifies and builds it.

## Why this mission exists

The hero is excellent and alone (hero-art-singularity risk); the dossier's ruling: **slot-contained illustration program** — Playdate proves containment carries a property, Charm shows full-field's price, the credibility register is restrained `[D dossier]`. WebForge's token pipeline is proven with `tokyo_night` already a seed; its art-direction schema (`signature_element` load-bearing) is exactly the frame — and unbuilt at the engine level, so our entry returns real implementation pressure upstream.

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | ADR-053 finalization from the dossier ruling (options preserved; recommendation argued) | ADR-053 | ⛩ DP8 |
| O1 | Token decision + execution (adopt-or-pin); art_direction.yaml entry | substrate + entry | — |
| O2 | Slot spec + first slot applications (registry cards / empty states per the ruling) with per-artifact credit | built slots | — |
| O3 | VisualDNA bundle; captures + ranker; AAR; upstream pressure note | evidence + AAR | — |

## Constraints

Every aesthetic choice carries its accessibility consequence (directive §8); contrast verified in both themes (D5×D11 audited together); no full-field takeover without the Charm-price checklist; ADR-032 is revised by ADR-053, not silently contradicted.

## Definition of done

The visual voice is a documented, extensible system a contributor could apply to a new page — not one beautiful hero.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + `evidence/dossier/haussmann_reference_dossier_draft.md` (ruling) + ADR-053 stub. Execute O0 (halt at DP8), then O1–O3.

## Progress

### O0 — 2026-08-23, session `session_stanley_20260823_192318_haussmann_p4_1_token_pipeline`

**Status: O0 delivered; mission HALTED at ⛩ DP8 as specified. Nothing built, no `site/` source touched.**

Delivered: ADR-053 finalized (premise corrected, options preserved, recommendation re-argued) ·
**ADR-059 authored** (the token substrate, co-ruled at DP8 by operator election) ·
`how/federation/webforge/what/context/art_direction.yaml` skeleton (`proposed`, DP8-dependents marked
`PENDING_DP8`) · 30 T0 captures, 15 routes × dark/light, 15/15 at 200, 0 console errors ·
convention-13 coverage below.

**Out-of-band**: this session found and (under operator GO) resolved **F-s**, a live production
regression — `adna.network` was serving a pre-2026-08-18 build. Record:
`artifacts/p4_1/finding_live_prod_regression_20260823.md`. Restored
`deploy_record: 2026-08-24T02:44:59Z mode=prod url=…j2fq4vn44… tree=922519c`, red-proven 10/10.

### O1 — 2026-08-23, session `session_stanley_20260823_204458_haussmann_p4_1_o1_ac_amendment`

**Status: O1 COMPLETE. AC1 ✓ · AC2 ✓ · AC3 ✓. AC4 and AC5 remain (O3 and O2).** Suite **555/555**
(554 + G25b), zero xfail. Convention-16 re-probe green at open; alias unchanged.

**⛩ The AC amendment landed first, as ruled** — record + rationale at
`artifacts/p4_1/ac_amendment_proposal.md` (`accepted`). ⭐ **Re-reading the criteria against the
RULINGS — a different act from reading them against each other — found a FIFTH defect the DP8-day pass
had missed.** AC2 offered a binary (*adopt the pipeline* OR *pin a divergence*) and the operator had
ruled **(c), a hybrid neither branch describes**. Executed as written, O1 would have ticked AC2 on the
"pinned divergence" branch and **the validator adoption — the actual work, and the only part that closes
the verification gap — would never have appeared in the acceptance record.** A mission can satisfy its
criteria and under-report what it did.

**AC2, all four limbs:**

- **(i) Validators adopted, both red-proven.** `site/scripts/token_aa_check.py` **imports**
  `check_aa.PAIRS` + `check_aa.ratio` from WebForge (by reference, never copied — wrapper SO 1) and
  supplies only its own resolver, because our layer is hand-authored CSS and
  `compile_css.resolved_role_map` has nothing to resolve. Reports **AA PASS, 0 pairs below floor**.
  Red-proven **three ways** against a clean control: WebForge's imported pair table (dark `--color-text`
  → 3 rows red), our consumer pairs **through the `var()` chain** (`--brand-link-dark` → light link rows
  red), and a mode-independent badge pill. Every mutation **asserted before the run** — the P3.4 lesson
  that a mutation matching nothing reports as a pass.
  Second validator adopted **scoped**, as gate-25 **G25b** (colour-function literals), red-proven in
  **both** directions: a literal `hsl()` fires; a token-based `hsl(var(--h) …)` and a token-based
  `color-mix()` do **not**.
- **(ii)** Divergence pinned in `how/federation/webforge/CLAUDE.md` §*Token substrate* — rationale, a
  coverage table naming what each gate is **blind to**, and a **review condition** that re-opens (a).
- **(iii)** Vitruvius memo staged at `who/coordination/coord_2026_08_23_rosetta_to_vitruvius_tokyo_night_is_not_our_seed.md`;
  the false cell in `artifacts/webforge_pattern_register.md` withdrawn in-place with its evidence.
- **(iv)** No ceiling derived, no token value regenerated. `derive_tenant_ceiling.py` was run **only** in
  its `--validate-entry` mode, never against `site/`.

**AC3 ✓ — and it has a real test for the first time.** `derive_tenant_ceiling.py --validate-entry`
returns **`entry READY`, exit 0**. It earned its keep on the way: it rejected
`signature_element.mechanism: image`, a value this desk invented — the P5 enum is
`['css','generated_asset','island','layout','type']`, and **`generated_asset` is the better description
anyway**. A control with a deliberately bad mechanism is still rejected.

⭐ **THE FINDING — the instrument was wrong before the subject was, twice, and both times only a control
caught it.**

1. **`token_aa_check.py`'s first run reported FOUR failures. All four were pairs this desk fabricated.**
   `--color-warning` and `--color-info` were tested as body text against the page background: they are
   used as text **zero** times site-wide — they are border-and-background accents only. And
   `--color-border` was given a 3:1 non-text floor: WCAG 1.4.11 governs component boundaries and
   meaningful graphics, **not decorative separators**, and 103 of its 105 usages are dividers.
   **A contrast pair asserts "this colour is rendered on that colour"; if no rule in the codebase does
   that, the pair tests nothing and its verdict is noise.** Every pair in the file now carries its usage
   count.
2. ⚠ **Two of those four were manufactured by a single regex bug in the verification of the
   verification.** The usage scan used `\bcolor\s*:`, which **also matches `border-color:`** — so
   `.callout-warning { border-color: … }` read as a text usage and appeared to confirm the pair was
   real. `(?<![-\w])color\s*:` gives the true count: **0**. *The check on the checker had the same class
   of defect as the checker.*
3. ⚠ **A third near-miss, caught before it reached a peer.** `--validate-entry` appeared to print
   NOT-READY while **exiting 0** — which would have been a real upstream defect (a check that cannot
   gate). It was `| head` swallowing the exit status. Re-run unpiped it **exits 1**. The false finding
   was one sentence away from a delivered memo.

⚠ **`conformance.py --strict-leak` is NOT adopted wholesale — ruled, measured, and recorded rather than
skipped.** Its byte-identity half is inapplicable by construction. Its leak half fires **~400 times**
here: 308 SVG `fill`/`stroke` attrs (mostly `fill="none"`; the rest illustration assets **ADR-053 made
normative that same day**), 64 token-based `color-mix()` forms its own regex is anchored to skip, 4
warn-only named colours — to surface **3** predicted real items. ⭐ **G25b found 7, in two files.** Both
are the same shape: a **half-guarded pair**, where the dark-mode hex was fenced by G25 and its
light-mode `hsl()` twin was fenced by nothing. The second file was not predicted before the gate existed.

### ⛩ Convention 13 — AC-coherence pass, COMPLETE, coverage recorded

Per the 2026-08-21 amendment: every (method-bearing × test-bearing) pair, not the suspicious ones, and
**the coverage is stated so an incomplete pass would be legible as incomplete.**

Criteria: **AC1** DP8/ADR-053 ruling · **AC2** token substrate executed · **AC3** `art_direction.yaml`
authored · **AC4** first VisualDNA bundle.
Test limbs from `verification_method`: **V1** gate-25/4d-class token checks · **V2** T0 captures of slot
applications · **V3** ranker ≥4.0 · **V4** ADR-053 record.

**16 of 16 AC×V pairs checked**, plus 4 AC×AC dependency pairs. Result: **3 failures, 1 structural gap.**

| | V1 tokens | V2 captures | V3 ranker | V4 ADR record |
|---|---|---|---|---|
| **AC1** | n/a (vacuous — a ruling is not token-checked) | ⚠ GAP-A | ⚠ GAP-A | ✅ the record *is* the test |
| **AC2** | ⛔ **FAIL-1** | conditional — only option (a) changes pixels; under (b)/(c) there is nothing to capture, which is their point | weak — a ranker may notice a palette regression but cannot test a substrate | ⛔ **FAIL-2** (resolved) |
| **AC3** | n/a | n/a | n/a | n/a — ⚠ **GAP-B**: no limb tests AC3 at all |
| **AC4** | n/a | n/a (a YAML bundle renders nothing) | ⛔ **FAIL-3** — a ranker cannot score a bundle | n/a |

- ⛔ **FAIL-1 — AC2's stated verification cannot see AC2.** `gate-25` defines
  `TOKEN_FILES = {'styles/tokens.css','styles/branding.css'}` and **excludes them from its scan**; Gate 4d
  is WebForge's byte-identity check of *its* source, which this site is not compiled from. Neither
  instrument can move under any option. ⇒ ADR-059 §3; O1 must name a verification that can (both-theme
  contrast assertions over the rendered surface + axe-0 parity + T0 visual diff) or record AC2 as shipped
  unverified.
- ⛔ **FAIL-2 — AC2's record limb named the wrong document.** V4 is *"ADR-053 record"*, but ADR-053 rules
  the **voice**; the substrate had no record of its own. **Resolved this session** by authoring ADR-059,
  which is why the substrate decision became a co-ruling rather than an in-flight call.
- ⛔ **FAIL-3 — AC4 has no schema to instantiate.** VisualDNA v1.0 declares five entity types
  (`character | location | object | scene | style_atmosphere`) but the spec states `style_atmosphere` is a
  *"forward-compatible Class 2 extension … **not exercised at GA**"*, and on disk the schema directory
  holds only `character_dna.yaml`, `location_dna.yaml`, `object_dna.yaml` `[D]`. A **house visual voice is
  precisely `style_atmosphere`** — the one declared type with no schema file. AC4's phrase *"reusable
  beyond hero PNGs"* cannot be met by a `location`/`object` bundle of one hero scene. ⇒ O3 must either
  exercise the Class-2 extension (upstream pressure to **Pygmalion**, and an ask, not a local edit) or
  record the gap. **Not resolvable by this vault alone.**
- ⚠ **GAP-A / GAP-B — the structural one, and the worst of the four.** **O2 ("slot spec + first slot
  applications … with per-artifact credit") is covered by NO acceptance criterion**, yet it produces the
  *only* artifact V2 and V3 can measure. Read literally, **all four ACs can be met with zero slots built**,
  and the mission would report `completed` against a "definition of done" that reads *"a documented,
  extensible system a contributor could apply to a new page."* Symmetrically, **AC3 is tested by no limb**
  — though a real test exists and is named nowhere: `derive_tenant_ceiling.py --validate-entry
  <art_direction.yaml>`, the P5 build-readiness gate (F-DCRIT-7).
- **AC×AC dependencies (4 pairs, all satisfiable but ORDERED, not parallel):** AC1→AC3 (`signature_element`
  is a DP8 dependent) · AC2→AC3 (`color_grade.ceiling` is an ADR-059 dependent) · AC1→AC4 (bundle content
  depends on the ruled program) · AC1↔AC2 separable, co-ruled by election. **AC3 cannot be *completed*
  before the gate** — which is why it ships here as a skeleton with `PENDING_DP8` markers rather than a
  filled file with invented values.

⇒ **Recommended AC amendment before O1's budget is re-ratified** (operator's call, not applied here):
add an AC covering O2's slot applications, and re-point AC4 at *"a bundle or a recorded, staged ask to
Pygmalion"* so an unbuildable criterion cannot silently pass.

### O2 — 2026-08-24, session `session_stanley_20260824_080010_haussmann_p4_1_o2_empty_state_slot`

**Status: O2 COMPLETE. AC1 ✓ · AC2 ✓ · AC3 ✓ · AC5 ✓. AC4 remains (O3).** Suite **560/560** (555 +
5 G35b), zero xfail. `token_aa_check.py` **AA PASS, 0 below floor**. axe **0** on all three changed
surfaces × **both** themes. Convention-16 re-probe green at open (6/6 surfaces 200).

⛔ **NOT DEPLOYED, and the criterion is recorded accordingly.** The freeze was re-verified at open:
`git fetch origin` → lemur's `30c8163` + `f4fa9c5` still absent, HEAD == `origin/main` == `0312855`.
⛩ Operator ruled *"live surface" = a real shipped route, build-verified*; AC5 is **MET-on-build**,
deployment **named as owed**. Per P3.2's warning, this is said here rather than left to a reader to
infer from a status field that cannot express it.

**What shipped.** The `empty_state` slot — ADR-053's first *new* slot — in **both** the states its
row names. One hand-drawn `currentColor` SVG at two scales
(`site/src/assets/slots/empty_state_mark.svg`), hosted by `EmptyStateMark.astro`: inline beside each
honest-absent line on the 74 registry cards, and at block scale heading a **zero-result block that
did not previously exist** (a filter matching nothing collapsed every section and left only a
` — nothing matched` suffix on a count line above the fold). Registered for contributors at
`/design-system#illustration`; normative spec at `artifacts/p4_1/slot_spec_empty_state.md`.

⛩ **Four operator rulings taken before building, three of them defects found by re-reading the
ruling against the data:**

1. **The ruled target set is not the set the slot is about.** The ruling named *"the 57 planned vault
   cards."* Derived from the registry: of those 57 only **52** have any empty field and **3** are
   fully empty, while **12 non-planned cards** (5 of 7 in-use, 7 of 10 chartered) do. Keying on tier
   would mark 5 cards that are not empty and miss 12 that are — and would re-differentiate the tiers,
   which **ADR-052 §tiers.2** ruled against in the page's own source. **Ruled: key on absence.**
2. **AC5(b) named a mechanism that cannot reach the ruled surface** — `DocumentationLayout`'s
   `heroImage` prop, on a page that uses **BaseLayout + HomeHero**, for a slot that is not a hero.
   Executed literally it ticks with nothing on the page it is about. ADR-053's normative text names
   the **pattern**; AC5 named one **instance**. **Ruled: both** — the pattern at the slot's host, and
   the literal field added to `DocumentationLayout` and **exercised** on `/get-started` so it does not
   ship unexercised.
3. **"Live surface" vs the freeze** (above).
4. **Scope: both halves of the slot**, so its reusability is demonstrated rather than asserted.

⭐ **THE FINDING — the red test found a defect in MY OWN CODE that no green run could have.** The
three absence predicates were written as named constants, but the persona and card lines still keyed
on the surrounding ternary (`{persona ? … : …}`) with the predicate only *inside* the else-branch. So
two of the three were **decorative**: a mutation setting `personaAbsent = true` left the gate green,
not because the assertion was weak but **because the line it was aimed at could not move.** A reader
auditing "the law lives in these three predicates" would have been wrong, and a future edit to them
would have been a silent no-op. Both ternaries now key on the predicate itself. **9/9 mutations
red-proven** after the fix; every mutation asserts it matched exactly once before the gate runs, and
the one that stopped matching after the restructure was reported as a **harness bug, not a pass**.

**Three more instruments were wrong before the subject was — the pattern holds at four sessions
running.**

- ⚠ **My own new copy put house jargon on a public surface.** The credit line first read
  *"(⛩ DP8, 2026-08-23)"*. A grep of the **built** output found `DP8` on **exactly one page in 225** —
  this one, because that draft had just put it there. `gate-35` tests this class and `gate-27` lints
  for it; **neither had run yet.** Caught by convention 7 (*grep the rendered output*) applied to new
  copy of my own rather than to the site's old copy.
- ⚠ **The gate read the wrong slug and it looked exactly like the regression it exists to catch.**
  First run: two failures naming `Operations` and `CakeHealth`. Both were the gate reading raw
  `vault_slug` (`"Operations.aDNA"`) while the page emits `/vaults/operations/` — ADR-051's law is
  applied at the **read boundary**, leaving the data byte-untouched under pt19. A raw lookup finds no
  card for 24 of 74 rows and reports "no mark", which is **indistinguishable from tier-keying**. The
  site was correct both times.
- ⚠ **A capture labelled `light` was a dark capture.** An ad-hoc screenshot script set Playwright's
  `colorScheme` and nothing else; this site's theme is driven by a **`.dark` class on `<html>`** plus
  a localStorage key. The canonical harness does all three — the ad-hoc one did the first, and
  produced a mislabelled artifact that would have been filed as both-theme evidence. Now asserts
  `html.dark` matches the requested theme before it will screenshot.
- ⚠ **I typed two counts, and deriving them corrected the predicate.** `/design-system` first read
  *"Live on 10 pages"* / *"Live on 6"*, copied from ADR-053's table (WebForge KW-14, five instances
  now). Deriving them found that counting pages passing the `heroImage` **prop** yields **9** —
  `/vaults/graph` renders its hero through a bespoke `<Image class="hero-stage-img">`. The ADR's ten
  is right and the naive predicate was wrong; *pages importing a hero asset* covers both mechanisms
  and yields 10. ⚠ And the obvious shortcut is the wrong predicate **even though it currently
  agrees**: `assets/heroes/` also holds exactly 10 files, so globbing assets would print the same
  number today while claiming pages. *(Second-order: the first derivation used `node:fs` +
  `import.meta.url` and killed the build with `ENOENT … dist/.prerender/pages/` — at render time
  `import.meta.url` points at the bundled chunk, not the source tree. `import.meta.glob` is the only
  place this question has an answer.)*

⭐ **A distinction the data forced, and it is the honest half of this slot.** `listing: 'minimal'`
rows (3) are **excluded**. They are not places where something could be written and has not been —
they are places where something was deliberately **withheld** (*"Minimal card — private
engagement."*). Marking a policy choice as an oversight is the same class of defect as the claims
this campaign exists to retire. Gate-asserted in both directions.

⭐ **A pre-existing contrast gap surfaced, not created.** The zero-result block needed
`--color-text-muted` on `--color-bg-alt` — a pair `token_aa_check.py` **did not test**, though **23
files** pair that container with that text and there are **40** such container rules site-wide. Added
with its counted usage (hyphen-guarded scan, per O1) and **red-proven**: degraded in dark mode it
reports **1.21:1** and exits 1. Live values **5.36:1** light / **6.41:1** dark.

**Evidence.** `artifacts/p4_1/captures_o2/` — 3 surfaces × 3 viewports × 2 themes, plus
`zero_result__desktop__{dark,light}.png` captured with the filter driven to 0 results and verified to
hide again when results return. The `in use` cards carrying marks (Operations · Astro · Home · aDNA)
are the **visible** proof the mark is not a tier badge. Axe zero verified **non-vacuous** (key
present, `int`, 0) — the P3.1 wrong-key lesson.

### ⛩ Convention 13 — AC-coherence pass over the AMENDED set, COMPLETE, coverage recorded

The amendment added **AC5** and **replaced `verification_method` wholesale**, so O0's 16/16 pass does
not cover the criteria now in force. Re-run over **5 ACs × 6 verification limbs = 30 pairs**, plus 5
AC×AC dependency pairs. **Result: 0 failures, 1 scheduling note.**

Limbs: **V1** ADR-053 record · **V2** both validators passing + red-proven + wrapper diff + staged
memo · **V3** `derive_tenant_ceiling.py --validate-entry` · **V4** bundle-or-staged-memo on disk ·
**V5** T0 captures both themes + axe-0 parity + full suite green · **V6** persona ranker ≥4.0
(campaign-level).

| | V1 record | V2 validators | V3 entry | V4 bundle/memo | V5 captures+suite | V6 ranker |
|---|---|---|---|---|---|---|
| **AC1** | ✅ the record *is* the test | n/a | n/a | n/a | n/a | n/a |
| **AC2** | n/a | ✅ met O1 | n/a | n/a | n/a | n/a |
| **AC3** | n/a | n/a | ✅ `entry READY` | n/a | n/a | n/a |
| **AC4** | n/a | n/a | n/a | ⏭ O3 | n/a | n/a |
| **AC5** | n/a | ⊕ contrast limb | n/a | n/a | ✅ **the operative test** | ⏭ O3 |

- ✅ **Each criterion now has exactly one limb that can move it**, which is what the amendment was
  for. The pre-amendment defect (a criterion whose stated verification could not see it under any
  option) does not recur: V5 reads the rendered surface AC5 changes.
- ⊕ **AC5(c) is verified by the AC2 instrument**, deliberately — the both-theme contrast check runs
  through `token_aa_check.py`, so the slot's contrast is judged by the validator O1 adopted rather
  than by a second instrument authored at O2. **This is a shared limb, not a gap**, and it is stated
  because an unstated one reads as an omission.
- ⏭ **The scheduling note, recorded rather than resolved: V6 (persona ranker ≥4.0) is UNRUN.** It is
  campaign-level and the mission's own objective table assigns *"captures + ranker"* to **O3**, so it
  is not owed here — but three surfaces changed this session, and saying so now is what stops O3
  inheriting an unstated obligation. **AC5 is met on V5; V6 is O3's.**
- **AC×AC (5 pairs, all satisfiable and ORDERED):** AC1→AC5 (the slot table is a DP8 dependent — a
  slot cannot be built before the table naming it is ratified) · AC2→AC5(c) (the contrast instrument
  must exist before the slot's contrast can be checked by it) · AC1→AC3 · AC2→AC3 · AC1→AC4. **No
  cycle; O2's position after O1 is forced by AC2→AC5(c), not merely conventional.**

### O3 — 2026-08-24, session `session_stanley_20260824_152000_haussmann_p4_1_o3`

**Status: O3 COMPLETE. AC1 ✓ · AC2 ✓ · AC3 ✓ · AC4 ✓ · AC5 ✓ (on build). Mission closes here.**
No `site/` source changed, so the suite stands **unchanged at 560/560** — which is the correct
result for a documentation-and-record objective, not a reassuring one.

**Open controls, all four run.** Freeze **re-verified after `git fetch origin`**: lemur's `30c8163`
and `f4fa9c5` both still **ABSENT**, `HEAD 9608820` vs `origin/main 0312855` `[D]` — and the scope of
that negative is stated, because a negative result is only as wide as the command that produced it:
it covers **this clone on this node**, and says nothing about lemur's tree. Convention-16 content
probe **7/7 at 200** with three content assertions holding (`/vaults.json` at **80,997 B**, byte-count
identical to P3.2's record) — the F-s restore is still standing. Peer-memo sweep clean at open.

⚠ **The fourth control fired, and the control was the defect.** A luminance check on the ranker
stimulus flagged three `vaults__*__light.png` captures as possibly dark-under-a-light-filename — the
exact hazard an ad-hoc script produced during O2. They are fine: sampling regions the hero cannot
reach gives **median 255 / p95 255** and a bottom strip of 243.7, *identical to the confirmed-good
light control*. The low reading is `/vaults`'s **dark `hero_panel`**, which is dark in both themes by
design. `scripts/visual_capture.mjs:86` toggles `documentElement.classList.toggle('dark', …)`; the T0
harness was never what was at risk. ⭐ **A control that fires is a question, not a verdict** — asking
what else could produce the reading is what stopped a re-capture of 18 good files.

**AC4 — the staged Pygmalion ask** (`who/coordination/coord_2026_08_24_rosetta_to_pygmalion_style_atmosphere_class2_ask.md`,
`status: staged`; delivery is a separate outward act needing its own GO). Re-verified at the object
per convention 12: VisualDNA's schema directory still holds **3** files (`character` / `location` /
`object`), no `style_atmosphere` `[D]` — so the criterion's own conditional selects the staged-ask
branch, and the forbidden `location`/`object` substitute never came into question.

⭐ **The ask is sharper than O0 could know, and the sharpening came from reading their tree rather
than restating our need.** `extensions_registry.yaml` → `class_2_new_entity_type.entries: []` is
**empty**, while `style_atmosphere` is the **worked example** used by both `spec_modular_extension_protocol.md:45`
*and* VDNA-ADR-004's own Context paragraph to illustrate the Class-2 trigger. ⇒ **We are not asking
them to invent a mechanism; we are asking them to run Step 1 of their own protocol on their own
example.**

⭐⭐ **And we checked whether they can act, which is the half a bare ask omits.** Their machinery is
itself pre-activation: spec `status: DRAFT`, registry *"promotes to ACTIVE at P5 close"*, VDNA-ADR-004
`DRAFT (ratification deferred to P5 close)`, `mission_p4` `STUB_NEXT_SESSION`, `mission_p5`
`STUB_AWAITING_PILOT_S6_AAR` `[D]`. The full Class-2 run sits **two missions out on their roadmap** —
so the memo states that on its face rather than letting them discover it by trying (convention 15's
reachability face). **But one scope is performable today by their own precedent**: both existing
registry entries were pre-populated at `PROPOSED` with `adr_path: null` **while the registry was and
still is DRAFT**, and their spec documents this for both. So the memo carries **two scopes and names
the choice as theirs** — full run whenever P5 lands, Step-1 registration now — with *"neither yet"*
recorded in advance as a real answer.

Verified before it was believed: **5/5 paths in §5 resolve** from a neutral root, **6/6 cited line
numbers** in VisualDNA read as quoted, `adr_path: null` matches the file literal, and §6 states what
we are **not** claiming — there is **no `how/federation/visualdna/` wrapper here** `[D]`, so aDNA is a
*candidate* first consumer, not a wired one.

**The ranker (V6) — `artifacts/p4_1/ranker_record.md`.** 6 canonical dimensions × 5 canonical personas
per surface, scored **separately, never averaged across surfaces**:

| Surface | Score | Gate ≥4.0 | Margin |
|---|---|---|---|
| `/get-started` | **4.37** | ✅ | +0.37 |
| `/design-system` | **4.10** | ✅ | +0.10 |
| `/vaults` | **4.03** | ✅ | **+0.03** |

All 18 dimension means and all 3 totals were **re-derived programmatically**, not typed (KW-14).
⚠ `/vaults` clears by **0.03** — one cell moved down anywhere puts it under the floor, and that is
recorded as the number rather than rounded. Conflict of interest **declared, not managed away**: the
agent that built O2's slot scored the surfaces it changed, so the run is `[D-syn]`, a pre-screen, with
an independent re-rank offered. Reviewer bench recorded as a **deliberate** omission.

⭐ **The ranker's finding: Delight is 3.6 on all three surfaces, with the identical persona vector
`4·4·3·3·4`.** An identical vector across three unrelated pages is the signature of a lazily-scored
dimension and was treated as suspect first. It is not laziness — **it is ADR-053's containment rule
appearing in the measurement.** All three pages are structurally the same object as far as delight
goes: one illustrated hero, restraint everywhere else. The rule that makes the voice governable is the
rule that caps this dimension, and it caps it identically because it applies identically. Two
consequences: it is a **designed trade** (option (b) would have pushed it lower by deleting nine live
surfaces), and it **bounds the remedy** — `vault_card_mark` and `graph_frame` are the only sanctioned
places this can move, so a future *"raise Delight"* reads as *"build a slot"*, never *"decorate a
page"*. ⚠ The instrument **cannot separate "capped by design" from "under-delivered within the cap"**;
that needs the human instrument at P5.1.

⚠ **Debt that prose said was routed had never reached the register.** The campaign CLAUDE.md's
convention-16 amendment states the prod-alias gap is *"Routed to P4.4"* — **P4.4 had no such row**,
and neither F-r nor F-s nor F-t existed there. Landed at this close: **F-u** (the missing
single-writer lease, with the design constraint that the file-lease pattern in the vault's own
Governance Doctrine does **not** port to an external alias with no `updated` field) and **F-r**
(P3.4's, picked up here because a known-unrouted row is worse than a small scope bleed — said plainly
rather than absorbed). Register **17 → 19 rows**, derived.

⭐ **F-t is WITHDRAWN as a duplicate: it is F-l, recorded twice** — same idiom, same variable, same
mechanism, two sightings. P4.4's own F-b precedent already rules this shape (*"recurrence is evidence
for the allowlist, not a new row"*). **The campaign minted a fresh ID for a finding it had already
registered, because the second sighting was written up from the session rather than checked against
the register** — the index-vs-artifact class, one level down.

⚠ **A pre-existing register defect surfaced, not created, and deliberately not fixed here:** **F-o /
F-p / F-q carry only 2 of the table's 4 columns** — no Source, no Note — with their remedy text
embedded in the finding cell instead. Information intact, structure wrong; they are other missions'
rows and rewriting them inside P4.1's close would blur whose debt is whose. Recorded for P4.4.
🩹 **And my own integrity checker was wrong before the subject** (sixth instance this campaign): it
also flagged **F-l**, by splitting on `|` without honouring markdown's `\|` escape — F-l's inline code
contains a correctly-escaped `\|\|`. **The checker found one real defect and one artefact of its own
naivety, and only counting the columns by hand told them apart.**

## AAR (SO#5)

> **Location note.** This AAR lives **in the mission file**, per the campaign's live precedent
> (`mission_haussmann_p3_2` §AAR, `mission_haussmann_p3_4` §AAR) rather than at
> `how/missions/artifacts/{campaign}_{mission}_aar.md` as `how/campaigns/AGENTS.md` §4 step 3
> specifies. The divergence is **named rather than silently resolved**: the campaign's output contract
> sends mission artifacts to `artifacts/p<phase>_<n>/`, four Decade-2 missions have closed this way,
> and P4.1's own §AAR placeholder was authored expecting it. Worth reconciling at campaign close —
> a generic protocol and a campaign convention disagreeing is a small thing until someone goes
> looking for an AAR that is not where the protocol says it is.

### Scorecard — 5/5 criteria met, each by a named instrument

| AC | Criterion | Instrument that moved | Verdict |
|---|---|---|---|
| **AC1** | ADR-053 ratified — the slot-contained program | ⛩ DP8, operator Stanley 2026-08-23; ADR `status: accepted` + 4-field block | ✅ **MET** |
| **AC2** | ADR-059 (c), all four limbs | Both validators passing **red-proven by mutation** (3 ways vs a clean control) · divergence pinned in `how/federation/webforge/CLAUDE.md` with its review condition · Vitruvius memo **delivered** · nothing derived, nothing regenerated | ✅ **MET** |
| **AC3** | `art_direction.yaml` entry at the wrapper path | `derive_tenant_ceiling.py --validate-entry` → **`entry READY`** (the P5 build-readiness gate; AC3 was previously tested by nothing) | ✅ **MET** |
| **AC4** | VisualDNA bundle **or** staged Pygmalion ask | The staged memo on disk, its conditional **verified at the object** (schema dir = 3 files, no `style_atmosphere`), all paths resolved and all citations checked | ✅ **MET** (ask branch) |
| **AC5** | A new slot specified + applied, with text equivalent, credit, both-theme contrast | `empty_state` live in **both** states its row names · **9/9 mutations red-proven** · `token_aa_check` AA PASS 0 below floor · axe **0** × 3 surfaces × both themes · suite 560/560 · ranker **4.03 / 4.10 / 4.37** | ✅ **MET ON BUILD** — ⛔ **deployment OWED** |

⛔ **AC5's qualifier is load-bearing and is written here in words, not left to a status field.**
⛩ The operator ruled *"live surface" = a real shipped route, build-verified*, so the criterion is met.
**Nothing from O2 is on `adna.network`.** The standing deploy freeze (F-u) blocks it, and P3.2's
warning applies verbatim: **`completed` is a statement about a mission, never about the live site.**

### Budget — ⚠ SO#11 RETROSPECTIVE TRIGGERED

| Figure | Value |
|---|---|
| Ratified estimate | **~250–400 kT across 2 sessions** |
| Sessions actually run | **4** (O0 · O1 · O2 · O3) |
| Sum of the four session estimates | **~590–930 kT** |
| Ratio to the mission estimate | **≈2.36× (low) / ≈2.33× (high)** |

**Both ends exceed 2×, so ADR-016/SO#11's retrospective threshold is tripped, and it is reported here
rather than absorbed.** The honest decomposition, because the headline number blames the wrong thing:

- **O1 and O2 each came in *within* their own session estimates**, with unplanned work displacing
  planned work rather than adding to it. The per-session forecasting was sound.
- **O0 overran its own estimate materially, and the overrun is `F-s`** — a live production regression
  found by this mission's capture harness, investigated, escalated and restored under operator GO.
  That is incident response, not P4.1 scope drift.
- **The 2-session figure was wrong at ratification, and convention 13 is why we can say so.** The
  mission was scoped as *"ADR + token pipeline + slot spec + bundle"* — four workstreams — and the
  AC-coherence pass then found that **AC4 had no schema to instantiate** and **O2's slot work was
  covered by no criterion at all**, forcing an operator-signed AC amendment mid-mission. A budget
  ratified against criteria that had not been read against each other cannot be a good budget.

⇒ **The recommendation is not "estimate higher."** It is that **convention 13's pass should run
before a DP ratifies a budget, not after** — which is what the convention already says, and what this
mission proves the cost of skipping. Filed upstream as `idea_upstream_mission_ac_coherence_check`.

⚠ **One more planned-vs-actual divergence, unremarked until now: `executor_tier` says `fable`; all
four sessions ran `opus`** (each session file records it). The vault's Governance Doctrine §Model-Tiered
Execution makes the field a declaration, and nothing checks it against what executed — so it drifted
silently for four sessions. Same family as the budget delta and cheaper to fix: **either the field is
re-set when a mission is re-scoped, or it is a decoration.** This mission was re-scoped mid-flight by
an operator-signed AC amendment, which is exactly the moment it should have moved. Not corrected
retroactively here — the field records what was *planned*, and rewriting it would erase the divergence
rather than report it.

### The 5-line AAR

- **Worked** — **Re-reading a ruling against the data before building it.** Three defects fell out
  pre-build at O2 (the ruled target set was not the set the slot is about; AC5(b) named a mechanism
  that could not reach its own target; `listing:'minimal'` rows are withheld, not unwritten), and at
  O3 the same habit turned a bare upstream ask into one grounded in the recipient's own protocol.
- **Didn't** — **Deploy.** O2 is built, gated, captured, ranked and unshipped. Four sessions of work
  sit behind a freeze caused by a missing lease, and the mission cannot close that gap from here.
- **Finding** — ⭐⭐ **A red test can reveal that code's stated structure is not its actual structure.**
  A mutation setting `personaAbsent = true` left the gate **green** — not because the assertion was
  weak, but because **two of three named predicates were decorative** and the surrounding ternary was
  the real guard. No green run reaches that class. Its sibling: when a later restructure made an older
  mutation stop matching, the harness reported **HARNESS BUG, NOT A PASS** — which is the entire
  reason every mutation asserts it matched *exactly once* before the gate runs.
- **Change** — **Every mutation must assert its match count before the gate is consulted**, and
  **every claimed "routed to X" must be verified in X's register**, not in the prose that routed it.
  Both were adopted this mission and both immediately found something.
- **Follow-up** — **F-u** (the prod-alias single-writer lease — the only part of F-s still open, and
  the freeze's release condition) · **F-r** · the **F-o/F-p/F-q** column defect · the AAR-location
  divergence · the ⛩ **push GO** for `9608820` + this close · **Pygmalion's answer** on the Class-2
  ask, which is the only thing that can move AC4 from *asked* to *answered*.

### Readiness — **GO** for P4.2, with two conditions stated

`mission_haussmann_p4_2_craft_floor` is `queued`, its `depends_on: [mission_haussmann_p4_1_token_pipeline]`
is now satisfied, and it is the ruled next mission under convention 11 (**not** by numbering — P4.4
precedes P4.3 further down). `executor_tier: sonnet`, `human_gate: false` — the only P4 mission
without an operator gate. **GO.**

Two things the next agent must carry in, neither of which blocks the GO:

1. ⛔ **P4.2 touches `site/` heavily** (57 locks, ~964 markup errors, design-system regeneration) **and
   the deploy freeze applies to it too.** It will build and gate green and it will not ship. Plan the
   mission knowing its output queues behind **F-u**, and say so in its close rather than letting a
   second mission accumulate unshipped work silently.
2. ⚠ **P4.2 regenerates the design system, and `/design-system` now carries O2's Illustration-slots
   section** — the five-slot table, the two scales, and the four contributor rules. That section is
   **ADR-053-governed content, not generated chrome**; a regeneration that overwrites it would delete
   the artifact AC5 was met on. It also scored the mission's weakest Findability (**3.6** — no in-page
   TOC, no left nav on a 5,584 px page), which P4.2 is well placed to fix.
