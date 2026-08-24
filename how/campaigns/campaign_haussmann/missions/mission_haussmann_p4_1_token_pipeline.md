---
plan_id: mission_haussmann_p4_1_token_pipeline
type: plan
title: "P4.1 — Tokens + visual voice: DTCG adoption and the slot-contained Ghibli-pixel program (ADR-053)"
campaign: campaign_haussmann
phase: P4
decade: 2
owner: stanley
status: in_progress   # ⛩ **DP8 RULED 2026-08-23** — ADR-053 → **(a)** slot-contained program (`accepted`); ADR-059 → **(c)** validators-without-emission (`accepted`, authored this session because the substrate call proved load-bearing, not mechanical). **O0 CLOSED**; O1–O3 remain. ⭐ Premise correction: the site does NOT have "one excellent hero" — **10 illustrated routes are live in ONE render language** and nothing below the hero carries the style, so DP8 governed an EXISTING ungoverned program rather than inventing one; 3 of the dossier's 5 requirements were already met. ⚠ **Convention-13 pass COMPLETE (16/16 AC×V pairs + 4 AC×AC): 3 FAILURES + 1 structural gap** — AC2's verification cannot see AC2 (gate-25 excludes the token files by construction; 4d compares WebForge's source); AC2's record limb named the wrong ADR (resolved by authoring 059); **AC4 has no schema to instantiate** (`style_atmosphere` is declared-but-unexercised with no schema file — a Pygmalion ask, not a local fix); and **O2's slot applications are covered by NO acceptance criterion**, so all four ACs could pass with zero slots built. ⛩ Operator ruled: **AMEND THE ACs BEFORE O1** — draft at the top of session 2 for sign-off before any building. ⛔ Out-of-band this session: **F-s**, a live production regression (adna.network served a pre-08-18 build; every surface since P2.1 was off the site), found by a capture harness pointed at prod, escalated, and **restored under operator GO** — `deploy_record 2026-08-24T02:44:59Z tree=922519c`, red-proven 10/10. Precedes P4.2 by the sequencing law.
mission_class: design_excellence
executor_tier: fable
token_budget_estimated: "~250–400 kT across 2 sessions: ADR-053 (voice ruling) + DTCG pipeline adoption-or-pinned-divergence + illustration-slot spec + first aDNA VisualDNA bundle (ADR-016)"
token_budget_actual:
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

## AAR (SO#5)

*(before completed — O3 carries it, with AC4 and the ranker)*
