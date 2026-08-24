---
plan_id: mission_haussmann_p4_2_craft_floor
type: plan
title: "P4.2 — Craft-floor conformance: the 60 locks declared, the markup debt paid, the diagram rules published"   # was "57 locks" — the very figure this mission corrected, left standing in its own title until the close
campaign: campaign_haussmann
phase: P4
decade: 2
owner: stanley
status: completed   # 2026-08-24 — O0 ✅ O1 ✅ O2 ✅ O3 ✅, all six criteria met, AAR filed (SO#5). Two sessions: `session_stanley_20260824_170854` (O0+O1) and `session_stanley_20260824_190604` (O2+O3). ⛔ BUILT, NOT DEPLOYED — queued behind the standing deploy freeze, P4.4 row F-u. Prior history: DP6-ratified 2026-08-19; ACs amended + operator-signed 2026-08-24 before any build (six ACs); rescoped up to absorb F19 and F20 — F20 was TESTED at O3 and came back FALSE.
mission_class: build
executor_tier: sonnet
token_budget_estimated: "~230–340 kT across 2 sessions: 57 locks + gap fixes + ~964 markup errors in 5 systemic classes + html-validate in CI + design-system regeneration + diagram construction rules, PLUS F19 (thin hubs, now 4 instances — bring to budget or merge) and F20 (test the woff2-variations hypothesis, do not assume it). Raised from ~200–300 kT at ⛩ DP6 2026-08-19 (ADR-016/SO#11)"
token_budget_actual: "≈375 kT across 2 sessions (~170 O0+O1, ~205 O2+O3) against a ratified ~230–340 kT — ≈1.1–1.6×, inside ADR-016's 2× retrospective trigger. Overrun is concentrated in work the plan did not contain: two falsified census premises and a live defect gate-39 found on its first run. ⚠ Declared `executor_tier: sonnet`; both sessions ran **opus** — recorded at each open, not discovered in retrospect."
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: ["webforge P1/P2 (57 locks; coverage census mechanics; graduation offered)", "B3 #5 (964 html-validate errors, 5 classes)", "F13 (thin hubs)", "design-system-page-as-latent-bug-detector (memory)", "directive P4 (20-component sample verification; diagram rules published)"]
vitruvius_dimensions: [D5, D11]
decade_theme: craft
webforge_patterns: [P1, P2]
patterns_to_author: []
depends_on: [mission_haussmann_p4_1_token_pipeline]
blocks: []
# ⛩ AMENDED 2026-08-24, operator-signed — artifacts/p4_2/ac_amendment_proposal.md (status: accepted).
# Convention-13 pass found 3 of 5 criteria wrong at their premises + 2 tested by nothing. Prior wording
# preserved verbatim in the proposal; do not reconstruct it from memory.
acceptance_criteria:
  - "AC1 — A lock-coverage declaration exists for this site as its OWN consumer-side surface (`adna_site`), covering all 60 locks of the craft floor at its live count (DERIVED from `lock_count_invariant`/`craft_floor_index`, never typed), with `enforced` cells carrying grep-verifiable `by:` + `anchor:` that survive the census rung test, `na` cells carrying an enum `reason:`, and every `gap` dispositioned via `sequenced:`/`accepted_by:`. The checker consumes WebForge's `check_lock_coverage` BY REFERENCE, substituting only the resolver seam (the P4.1 O1 precedent); the divergence is pinned in `how/federation/webforge/CLAUDE.md`"
  - "AC2 — The html-validate error field is RE-MEASURED at execution (count derived; command + config recorded on the artifact face) and driven to zero-or-documented-exception across EVERY class, fixed at component loci not per page. Each exception lives in the committed config with its reason. `no-inline-style` is DIAGNOSED before it is dispositioned — cause tested, not assumed — and its ruling is the operator's. html-validate joins CI as a real `site/` devDependency plus a workflow step, not an ambient npx"
  - "AC3 — The design-system page is REFRESHED IN PLACE (hand-authored; never regenerated — no generator exists) and its conformance to the P4.1 tokens is verified by `token_aa_check.py` + gate-25/G25b, with T0 captures as visual evidence rather than as the conformance test. The 20-component sample frame is declared and derived before sampling (AC6). P4.1 O2's Illustration-slots section is ADR-053-governed content and survives intact"
  - "AC4 — The DIAGRAM construction rules are published (stroke weight, palette source, grid, dual-theme behaviour, accessible-equivalent requirement), EXTENDING the illustration rules P4.1 O2 already published at /design-system#illustration rather than replacing them, and derived from the existing diagram set. Completion is checked by a gate assertion, not by the word published (AC6)"
  - "AC5 — Thin hubs (F13, instance count 4 not 3) brought to the section budget or honestly merged"
  - "AC6 — Every criterion has a verification method that can move: the 20-component sample frame is declared and derived before sampling; AC4's rules are checked by a gate assertion that they are present and reachable from /design-system; AC5's thin-hub treatment is verified by the P2.6 measurement (h2 count + bodyLen per hub), re-run after the fix"
verification_method: "consumer-side lock-coverage checker (RED-PROVEN by planted mutations before its green is believed — convention 14) + html-validate CI green-or-documented-exception + token conformance via `token_aa_check.py`/G25b + declared-frame 20-component sample audit + a gate assertion for the diagram rules + the P2.6 thin-hub measurement re-run"
# Execution ordering the pass found (F-9/F-10/F-11): AC1's html-validate-enforced cells are written
# LAST (a cell cannot cite a CI step that does not exist yet) · AC2 precedes AC3's sample (markup fixes
# change /design-system's own output) · AC3 and AC4 collide on /design-system, so the protected
# Illustration-slots section is at risk from BOTH.
human_gate: false
tags: [plan, haussmann, p4, craft_floor, design_system]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> The floor the fleet already enforces, declared for this site — with the anti-self-certification census
> mechanic that makes the declaration checkable.

## Why this mission exists

The site's 371 gates overlap the craft floor informally; nothing declares coverage, so nothing catches the gaps (the WebForge KW-12 lesson) `[D pattern register]`. 964 markup errors in 5 systemic classes ship on every page `[D B3]`. The graduation was offered; P0.3 ruled on it; this mission executes the conformance.

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | Author the site's lock-coverage declaration (~~57~~ **60** rows, derived; map existing gates as `by:` anchors; real `gap` rows honest) | coverage file + checker run | ✅ |
| O1 | Fix the ~~5~~ **11** html-validate classes at their component sources; add to CI | clean validate | ✅ |
| O2 | Gap fixes from O0's dispositions (A5 · B4 · J1); design-system refresh + a ~~20-component sample~~ **30-component census** | fixes + census | ✅ |
| O3 | Diagram construction rules (the DIAGRAM half only — F-12); locks O1 · O2 · I3 · A2; thin-hub treatment; AAR | rules + AAR | ✅ |

## Convention-13 pass — COMPLETE, coverage recorded (2026-08-24, before any build)

> Run per convention 13 **and its 2026-08-21 amendment**: every (method-bearing × test-bearing) pair,
> not the suspicious-looking ones, with **the coverage stated here** so an incomplete pass is legible
> as incomplete. P3.3 ran this partially, recorded nothing, and a partial pass read downstream as a
> clean bill of health. **Run BEFORE the build this time** — P4.1's SO#11 retrospective found the
> remedy for its 2.36× overrun was not "estimate higher" but "run this pass before a DP ratifies a
> budget." P4.2's budget was ratified at ⛩ DP6 on 2026-08-19; this pass is therefore retrospective
> against the budget and its findings feed an **AC amendment**, not a silent correction.

**Coverage: 30/30 pairs — 5 method-bearing criteria (AC1–AC5) × 4 test-bearing methods (V1–V4 from
`verification_method:`), plus all 10 AC×AC pairs.** V1 = lock-coverage checker · V2 = html-validate CI
green · V3 = T0 design-system captures · V4 = 20-component sample audit.

| Pair | Verdict |
|---|---|
| AC1×V1 | **FAIL ×2** (F-1, F-2) |
| AC1×V2 · AC1×V3 · AC1×V4 | n/a — no relation |
| AC2×V2 | **FAIL** (F-3) |
| AC2×V1 · AC2×V3 · AC2×V4 | n/a |
| AC3×V3 | **FAIL ×2** (F-4, F-5) |
| AC3×V4 | pass, with a **specification gap** (F-8) |
| AC3×V1 · AC3×V2 | n/a |
| AC4×V1..V4 | **STRUCTURAL GAP — no method tests AC4** (F-6) |
| AC5×V1..V4 | **STRUCTURAL GAP — no method tests AC5** (F-7) |
| AC1×AC2 | ordering dependency (F-9) |
| AC2×AC3 | ordering dependency (F-10) |
| AC3×AC4 | **collision on one file** (F-11) |
| AC4×(prior work) | **partly already met by P4.1 O2** (F-12) |
| AC1×AC3 · AC1×AC4 · AC1×AC5 · AC2×AC4 · AC2×AC5 · AC3×AC5 · AC4×AC5 | n/a — independent |

### The findings

**F-1 — AC1 types `57` and the floor is `60`.** `[D]` Three independent sources agree and the checker
cross-validates all three: `lock_coverage.yaml` → `lock_count_invariant: 60`; `len(locks)` → **60**
(ids `A1…N3` **plus `O1 O2 Q1`**); `doctrine_web_surface_craft_floor.md:11` → `craft_floor_index: 60`.
Executed as written, the declaration lands **3 locks short of the floor it claims to declare** —
KW-14, and note WebForge hit the same class themselves (`check_lock_coverage.py:566`, *"count actual
yaml entries, never the `lock_count_invariant` scalar (F-9)"*). Their census figures in our pattern
register are stale too: live is **452 enforced / 387 na / 1 gap** over 840 cells at `census_round: R1`
(register says 447/351/0 at R5).

**F-2 — AC1's `the site surface` names a row that is not ours, and V1 names an instrument that cannot
read ours.** `[D]` WebForge's `site` row is **their own self-site and already full** — 60/60 cells,
28 enforced / 32 na, `by:` anchors pointing at *their* repo (`tests/a11y.spec.ts`,
`tests/check_budgets.mjs`, `vercel.json`); `python3 check_lock_coverage.py --surface site` returns
`Gate 4f PASS [site]`. P0.3 staged the *"whose `site` is this row"* clarification to Vitruvius and it
is **still pending on their side**. Writing into their file is forbidden anyway (Rule 10; convention 4
*consumer, never fork*). And V1's checker binds to their tree by construction — `YAML_PATH = HERE /
"lock_coverage.yaml"`, `VAULT = HERE.parents[2]`, `surface_dir()` resolving into WebForge, CLI
`--surface/--all/--log` only. ⇒ **the declaration must be consumer-side and V1 must be built**, by the
P4.1 O1 seam (import by reference, substitute only the resolver).

**F-3 — AC2's stated method cannot make V2 green. The sharpest failure, and it is convention 13's
own question.** `[D]` Measured today against the current `dist/` (226 pages) **twice** — bare defaults
*and* explicit `html-validate:recommended`, **identical 4,444 both ways**, so config is ruled out:

| class | sweep 2026-08-19 | today |
|---|---|---|
| **`no-inline-style`** | **0** | **3,251** |
| `aria-label-misuse` | 245 | 285 |
| `unique-landmark` | 238 | 278 |
| `no-implicit-button-type` | 203 | 227 |
| `valid-id` | 152 | 226 |
| `void-style` | 105 | 125 |
| `no-trailing-whitespace` | 0 | 24 |
| `no-redundant-role` | 17 | 23 |
| `prefer-native-element` | 3 | 3 |
| `no-dup-id` | 0 | 1 |
| `long-title` | 1 | 1 |
| **total** | **964** | **4,444** |

**11 classes, not 5; 4,444 errors, not ~964; and the dominant class is absent from AC2's five.**
Fixing "the 5" leaves **3,251+ errors standing**, so V2 (*"html-validate CI green"*) **cannot go green
while AC2 is satisfied as written** — and the mission would report `964 → 0` truthfully against a
number that no longer describes the site.
⭐ **Page-level control**: `/learn/tutorials/build-a-lattice` **was in the 08-19 sweep** at 5 errors,
**zero** inline-style; today **171**. The page existed then ⇒ this is not new pages. **~3,251 inline
`style=` attributes entered the built output after 2026-08-19 and no gate saw it.** Localized to **61
content pages carrying code blocks**; emitted spans read
`style="background-color:#24292e;color:#e1e4e8"` — Shiki `github-dark`, hardcoded hex, **one dark
theme rendered in both appearances**. `[I]` **hypothesis, UNTESTED**: the Shiki 4.0.2 default-output
change arriving via P3.2's lockfile touch (`31b8b53`, 08-21). ⛩ Operator ruled **diagnose then rule** —
O1 **tests** this before touching 61 pages, the same discipline this mission already declares for F20.

**F-4 — AC3's `regenerated` names a mechanism that does not exist.** `[D]` `/design-system` is a
**hand-authored 506-line `.astro` page**; no generator exists in `site/scripts/` or `scripts/`. ⇒ the
campaign CLAUDE.md's protective warning (*"a regeneration that overwrites the Illustration-slots
section deletes the artifact AC5 was met on"*) **guards against a mechanism that cannot fire**, while
the hazard that can — a manual rewrite — is unnamed.

**F-5 — V3 cannot see what AC3 actually claims.** AC3 requires the page *"verified against the P4.1
tokens"*; V3 offers **T0 captures**. A capture is a picture — it can show the page renders and looks
right, and cannot show that a value came from a token. The instruments that can are `token_aa_check.py`
(P4.1 O1) and gate-25/**G25b**. Same shape as P4.1's *"AC2's verification cannot see AC2."*

**F-6 — AC4 is tested by nothing.** `[D]` *"Diagram/illustration construction rules published"* is
matched by no member of V1–V4. This is P4.1's structural gap **inverted**: there, slot work was covered
by no criterion; here, a criterion is covered by no method. "Published" needs a verifier that says
*where* and *checkable how*.

**F-7 — AC5 is tested by nothing.** `[D]` Thin-hub treatment needs the P2.6 method (h2 count + bodyLen
per hub); none of V1–V4 measures it. Current state, from P2.6's own measurement: `/reference/
specification` (h2 **0**, bodyLen 1,504 — *created by P2.3's own split*), `/how` (0 / 1,149),
`/patterns` (0 / 2,007), `/use-cases` (1 / 2,030).

**F-8 — V4's sample frame is undefined.** *"20 sampled components"* with no stated frame lets the
sample be chosen after the fact from components already known to conform — self-certification by
selection, the exact thing the census mechanic exists to retire. The frame must be **declared and
derived** before sampling.

**F-9 — AC1 before AC2, one-way.** If any lock resolves `enforced by:` an html-validate run, that cell
cannot be written until AC2's CI step exists. Declare those cells last.

**F-10 — AC2 before AC3's sample.** Markup fixes change rendered output on `/design-system` itself, so
a 20-component sample taken before AC2 measures a page that is about to change.

**F-11 — AC3 and AC4 collide on one file.** The right home for AC4's rules is `/design-system`, by
P4.1 O2's own precedent (*"a spec that lives only in a campaign artifact directory is a spec nobody
outside the campaign will find"*). So **both** ACs write the same file the campaign warns must not lose
its Illustration-slots section — the warning binds AC4 as much as AC3.

**F-12 — AC4 is PARTLY MET ALREADY, by P4.1 O2.** `[D]` `/design-system#illustration` already ships the
five-slot containment table, the *"a page may not invent a sixth slot"* amendment rule, and **four
contributor rules** for applying `empty_state`. That is the **illustration** half. The **diagram** half
is absent — nothing states how to draw a conformant diagram (stroke weight, palette, grid, dual-theme
behaviour) for the existing set: `components/diagrams/ConvergenceFunnel.astro`, `TriadDiagram.astro`,
`islands/MermaidDiagram.astro`, `sections/NetworkDiagram.astro`, plus `hero_graph.svg`,
`vaults_graph.svg` and 6 category icons. ⇒ AC4's real scope is **narrower and sharper than its wording**,
and re-deriving what P4.1 already published would be duplicated work landing on a protected section.

## Constraints

Anchors must be grep-verifiable (fabricated cells FAIL — the WebForge mechanic); axe/gates stay green throughout; no new visual vocabulary beyond ADR-053.

## Definition of done

Coverage is declared and checkable, the markup debt is paid, and a contributor can draw a conformant diagram from the published rules.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + `webforge_pattern_register.md` P1/P2 + `evidence/sweep/sweep_summary.md` #6. Execute O0–O3.

## Progress

### O0 ✅ COMPLETE (2026-08-24, session `session_stanley_20260824_170854`)

Convention-13 pass **30/30 pairs, coverage recorded above**, 12 findings → operator-signed AC
amendment (`artifacts/p4_2/ac_amendment_proposal.md`, `accepted`, applied to this frontmatter).

**The declaration**: `site/scripts/lock_coverage_adna.yaml` — **60 locks** on our own surface
`adna_site`, validated by `site/scripts/lock_coverage_check.py`, which imports WebForge's
`check_lock_coverage` and repoints **exactly two globals**. Census **60/60, 0 findings** —
enforced 8 · na 16 · na_unverified_affordance 7 · gap 29. **Red-proven 6/6 with a control**
(`lock_coverage_redtest.py`); case 4 reproduces this mission's own "57 locks" defect and catches it.

⭐ ~~**Three real defects**~~ **TWO real defects the 560-assertion suite structurally cannot see**
(struck and corrected at O2, 2026-08-24 — see the O2 entry), because nothing had ever declared
coverage: **A5/B4** the header is `position: sticky` with **no `scroll-padding-top` anywhere
in `src/`** (every in-page anchor lands under the header; `gate-31` passes because it asserts anchors
*resolve*, a different claim) · ~~**B3/E4** **`aria-live` appears nowhere in `src/`**, so filtering the
registry changes the result set in silence for AT users~~ **← FALSE, struck at O2: the live region
exists at `vaults/index.astro:226`, has since 2026-07-11, and is wired** · **I2** the CSP
self-validates against nothing. All dispositioned, none silently carried.

⚠ **A rot-hook predicate fired falsely and was caught before shipping.** `run_predicate` is a raw
regex with no comment stripping while `resolve_rung` strips — so the obvious "no hydration
directives" predicate matched a **comment** describing a component as an island. Untested it would
have failed the census over a directive that does not exist. Shipped form matches an element usage
and carries both controls. Owed back to Vitruvius with a second finding (Playwright assertion
anchors can only ever score rung 2).

⚠ **The stale register row that caused AC1's "57" is fixed** — live floor is **60**, census
**452/387/1 at R1**, and N2's *"the site's llms.txt lacks the honesty line"* was also stale (it has
one, `llms.txt.ts:56`).

### O1 ✅ COMPLETE (same session)

**html-validate: 4,444 → 0**, all 226 pages clean, in CI as a real devDependency + `check:markup`
script + a workflow step that passes the config **explicitly**.

⭐ **The `no-inline-style` diagnosis falsified its own hypothesis.** Shiki was **already 4.0.2** on
both sides of P3.2's lockfile touch; Astro unchanged; the page had the same 8 code fences; and
`syntaxHighlight`/`shiki` have **never** appeared in `astro.config.mjs` history. ⇒ the 964→4,444
delta is **not a regression but an unreproducible measurement** — the 08-19 artifact records neither
command nor config, so the run cannot be re-executed. Recorded as a standing property, not as an
event.

⭐ **Two exceptions are refusals to trade real accessibility for a lint number.** `role="list"` on
`<ul>`/`<ol>` is Safari's list-semantics workaround and **all six triggering lists carry
`list-style: none`** — removing it would regress VoiceOver. And seven `aria-label`s are the only
accessible name their lists have. Note the deliberate asymmetry: SidebarNav's `<ul aria-label>` **was**
removed, because its parent `<nav>` already named the region. Same rule, opposite answers, because
the question is whether information is lost.

⛩ **Parity ruled fix-now — and the first fix broke axe-0.** `github-light`/`github-dark` both ship
sub-AA token colours (`#e36209` on white = 3.48:1; `#6A737D` on `#24292e` = 3.05:1, **already live**
before the fix). Shipped the `-high-contrast` variants; re-measured **all 58 code pages × 7 pairs ×
both palettes = 0 failures**. ⭐ What settled causation was **a control, not a better probe**: revert
only the Shiki change, rebuild, re-run the same gate — it passed. My ad-hoc axe probe had meanwhile
reported 71 phantom nav failures, and my first contrast sweep read one page and generalised.

**Verification**: suite **560/560** · html-validate **0** · `token_aa_check` **AA PASS** ·
lock census **PASS** · gitleaks **877 commits, no leaks** · injectors 495 routes / 222 Vary.

⛔ **BUILT, NOT DEPLOYED.** The freeze stands (P4.4 **F-u**); lemur's `30c8163` + `f4fa9c5`
re-verified **absent** at session open. This is now the **second** mission accumulating unshipped
work, said here rather than left to be inferred.

### ⏭ O2 + O3 — session 2

~~O2: gap fixes from O0's dispositions (**A5/B4 `scroll-padding-top` and B3/E4 `aria-live` are the
live ones**); `/design-system` refreshed **in place** + the declared-frame 20-component sample.~~
**⚠ This sentence was wrong twice and is superseded by the O2 entry below.** It named **B3/E4**, whose
premise is false, and omitted **J1**, which the dispositions actually sequence to O2 — and J1 is the
heading-outline instrument **AC5's thin hubs are graded by**, so executing from this prose would have
built a fix for a working mechanism and skipped the one O3 depends on. ⇒ **The `sequenced:` fields in
`lock_coverage_adna.yaml` are the record; this narrative is a summary of it and lost to it.** O2 =
**A5 · B4 · J1**. (Index-vs-artifact, the campaign's standing class, here between two artifacts of the
same session.)

O3: the **diagram** construction rules (AC4, narrowed — P4.1 O2 already published the illustration
half) with locks **O1 · O2**; **I3**; F19/F13 thin hubs (4 instances); F20's font test (**A2**); the AAR.

### O2 ✅ COMPLETE (2026-08-24, session `session_stanley_20260824_190604`)

**The gap set was read from the artifact, not the prose** (see the struck sentence above): O2 =
**A5 · B4 · J1**, per the `sequenced:` fields, which AC1 makes the disposition of record.

⭐ **B3/E4 IS FALSE AND WAS STRUCK BEFORE ANY BUILD.** `aria-live` has been at
`vaults/index.astro:226` since **2026-07-11** (`5b9be4c`), six weeks before the census that called it
absent, wired to the search input and both chip groups and announcing the zero case. Convention 16's
amendment recurring inside the mission that cites it — *a negative result is only as wide as the
command that produced it.* ⛩ Operator ruled **strike + re-disposition, build nothing**. The honest
residue survives and is narrower: nothing *asserts* the region stays wired, and the empty-state mark
sits outside the live region while the count line sits inside it. Both stay `gap` at **P4.3**, where
an AT instrument can ask whether the announcement is *useful* rather than merely *present*.

**A5/B4** — the real find. Fixed site-wide from a **measured** header height (69px, identical at
5 viewports × 4 routes), one `--header-height` token, `scroll-padding-top` on `html`, and TOCPanel's
hardcoded `-80px` repointed at the same computed value. ⚠ Removing `commons.astro`'s two page-local
`scroll-margin-top` rules was **required, not tidying** — scroll-padding and scroll-margin *compose*,
so the global fix would have over-scrolled the one page that had already solved the problem
(~165px instead of ~85px).

**J1** — one `<h1>`, first in the DOM, static scan of all 226 built pages. **The site already
conformed 226/226**, which is exactly why the red test matters more here than usual: on a conforming
site a no-op assertion and a real one are indistinguishable.

**`/design-system`** → `DocumentationLayout`, fixing the ranker's weakest Findability (**3.6**).
`noindex` rides a new optional pass-through prop (`skill_documentation_layout_props_additive_
extension`; 130+ consumers byte-identical). The page's own `<h1>` is gone because the layout renders
one — **gate-38's G38b, written in this same objective, fails on exactly that**. NOT added to
`navigation.ts`: SidebarNav's SP-2 fallback is *designed* for out-of-IA pages, and an entry would
inject a `noindex` page into every doc page's primary nav. The **Illustration slots section survives
intact**.

**Component census — 30, not a sample of 20** (⛩ operator-ruled). The derived frame is 30, so AC3's
20 would have covered 67% of a population small enough to audit whole. Recorded as **exceeding** AC3's
wording, never as redefining it. ⭐ **The finding: the only token family with a gate is the only one
that had not drifted.** Colour (gate-25) 0; font-weight — whose tokens exist and whose own comment
says they *"replace the scattered literal 400/500/600/700 across components"* — had reached **2 of 15
files**. 26 literals → tokens across 13. "Zero rendered change" **proven, not asserted**: all 27
`var()` references resolve. Artifact: `artifacts/p4_2/component_census.md`.

### O3 ✅ COMPLETE (same session)

**AC4 — the diagram half only** (F-12's narrowing), published at **`/design-system#diagram`** and
derived from the committed set: stroke weight (1.4–2, house default 1.6), `currentColor` as the
palette source and the whole dual-theme mechanism, viewBox grid, the rendered-12px type floor, the
`role="img"` + `<title>`/`<desc>` text equivalent, and what a figure may leave out. **AC6's assertion
exists**: `gate-39`'s **G39e** checks the rules are present *and reachable from the page's own TOC*,
plus five content probes — "published" is not a verification.

⭐ **LOCK O1 FOUND A REAL DEFECT ON ITS FIRST RUN, AND THE HONEST ANSWER IS THAT THE FLOOR IS NOT
MET.** `gate-39` measures what the lock actually names — every `text, tspan`, rendered size via
`sqrt(|det(CTM)|)` and never `getComputedStyle`, at 320/390/1024/1440/1920 in both appearances.
Result: **`hero-graph-svg` 27/27 labels below 12px at every width** (3.5px at 320, never better than
7.1px at 1920) · `netdiagram-svg` 7/8 at 320 and 7/8 at desktop on `/network/` · `convergence-funnel`
8/8 at 320. Ships with a **dated baseline** (gate-25's idiom): each figure pinned at its worst case,
hard-failing any unlisted figure and any regression, ratcheting as each is fixed. ⚠ **O1 therefore
stays `gap`** — a non-regression fence is not the rule, and calling it one is the fake-enforcement
this lock's own text warns about. The remedy is design work (these scale 0.28× at 320px), and the
hero graph is a campaign-protected surface. **The page says the floor is unmet** rather than letting a
reader assume.

⭐ **F20 IS ALSO FALSE — tested, not assumed.** *"`JetBrains Mono Variable` reports `document.fonts`
state `error` on every page"* had stood untested since 2026-08-19, blamed `[I]` on
`format('woff2-variations')`. Probed across **4 routes × both themes: errors 0/0 every time**, fonts
`loaded`, `check()` true, no failed requests. The observable that reads as the claim is
`unloaded: 5` — the **correct** state for five subsets whose `unicode-range` matches no glyph;
**Inter and Space Grotesk show the identical shape**, which is the control. **A2 is now `enforced`
against the lock's real rule** (preload resolution + bundled woff2, G38c) with G38d watching font
loading — because the one true limb of the old claim was that *nothing watched*, which is precisely
how a false claim about it stood for five days.

**Thin hubs — 4/4 brought to budget**, and ⭐ **the budget itself is derived, not invented**. The
first draft picked `h2 ≥ 2, bodyLen ≥ 1200` and graded against it, which is circular. F13 named a
**counter-example** instead — *"/learn does the same job with a numbered path"* — so the conformant
set is the budget: `/learn /reference /community /glossary /vaults` floor at **h2 4, bodyLen 1932**,
and the two groups do not overlap on either axis. Results: `/how` 0→4 / 659→2015 · `/patterns`
0→4 / 1507→2659 · `/use-cases` 1→4 / 1530→2454 · `/reference/specification` 0→4 / 927→2630. Content
is orientation a reader needs, not padding — including the spec hub's **anchor-forwarding behaviour,
which was real, implemented, and undocumented**.

**I3 `enforced`** — documentation chrome contributes no headings to the page outline, all 226 pages.

**Verification**: suite **571/571** · html-validate **0** · `token_aa_check` **AA PASS** · lock census
**PASS 60/60** (enforced **8→13**, gap **29→24**, rung1a **6→11**) · O0's checker red test **6/6** ·
`craft_floor_redtest.sh` **11/11** (9 mutations + 2 controls) · component census **30/30** · hub depth
**4/4** · axe **0** across 5 surfaces × 3 viewports × **both themes**, 0 console errors · luminance
control confirms the light captures are light (236–249 vs 32–33) · gitleaks **880 commits, no leaks**.

⛔ **BUILT, NOT DEPLOYED.** The freeze stands (P4.4 **F-u**); lemur's `30c8163` + `f4fa9c5` re-verified
absent at session open. **Second mission accumulating unshipped work**, said here rather than inferred.

## AAR (SO#5)

**Worked** — **running convention 13 before the build, on a `human_gate: false` mission.** It found
three ACs wrong at their premises and two tested by nothing, and nothing in P4.2's own definition
would ever have stopped to ask. It also worked *twice*: the same discipline applied to the census's
own output falsified two of its findings before either was built against.

**Didn't** — **the census was trusted as an artifact when it is an instrument.** O0's three "defects
the suite cannot see" were two; F20 was three-for-three false at its stated premise; and the O2/O3
gap set in the mission's prose disagreed with the `sequenced:` fields it summarised. All three were
caught only because O2 opened by re-verifying at the object (convention 12). A census that declares
coverage does not exempt itself from the rule it exists to enforce.

**Finding** — **the only token family with a gate was the only one that had not drifted.** Colour has
gate-25 and scored 0 findings across 30 components; font-weight, whose tokens were introduced
specifically to replace the literals and whose comment says so, had reached 2 of 15 files. Nobody
regressed it — it simply stopped, invisibly, because each individual `font-weight: 600` looks
ordinary and nothing was counting. The general form: **a migration announced in a comment is not a
migration, and the difference is unobservable without an instrument.**

**Change** — **derive the budget, not just the measurement.** The thin-hub work first invented
`h2 ≥ 2, bodyLen ≥ 1200` and graded four pages against it, which is circular. F13 had named a
counter-example rather than a threshold, so the site's own conformant hubs became the budget — and
they separate cleanly from the thin ones on both axes, which an invented number could never have
demonstrated. **KW-14 applies to the yardstick, not only to the reading.**

**Follow-up** — **O1's three figures are a real open debt with numbers on their face**, routed to
P4.4 with `gate-39` ratcheting so nothing worsens and no new figure inherits the exemption. Also
owed: the component census is **advisory, not a gate** (converting it is a P4.4 candidate, named
rather than assumed); **B3/E4 and O2's absent-graph limb need the human instrument** at P4.3/P5.1,
not a grep; and everything O0–O3 built is **verified-not-shipped behind F-u**.

### ⚠ Instruments wrong before the subject — sixth consecutive session, and the count is the point

Nine this session, every one caught by its own output rather than by review:

| # | Instrument | How it failed |
|---|---|---|
| 1 | O0's `aria-live` grep | Negative result narrower than its conclusion — the mechanism had existed for six weeks |
| 2 | O0's F20 font claim | Read `unloaded` (correct, for an unneeded subset) as `error`; never tested |
| 3 | `craft_floor_redtest.sh` | Reused one port across five runs; the **control** failed while the gate was green |
| 4 | The control itself | Printed no diagnostics, so "control failed" was indistinguishable from a bind error |
| 5 | Font-weight proof probe | 5 selectors, 2 returned `null`; pass condition conflated *not found* with *collapsed* |
| 6 | My TOC-link regex | Looked for `class` before `href`; reported an empty TOC that had all six links |
| 7 | Component census | Flagged 6 SVG **user-unit** font-sizes as token drift |
| 8 | gate-39's figure identity | Read the class off the `<svg>`; `convergence-funnel` is on the `<figure>` → 6 phantom "unlisted figure" findings |
| 9 | gate-39's AC6 probe | `#diagram` is the `<h2>`, not the section → every content check failed on a correct page |

⭐ **What actually caught them was structure, not vigilance**: mutation-applied assertions, controls,
coverage floors (`measured >= 200`, not `> 0`), and re-verifying at the object. Two more were caught
by the red test finding defects *in itself* — a page with no expanded sidebar group, and a grep for a
paraphrase of an assertion message rather than the message. ⚠ **And a suppressed build error** —
`npx astro build > /dev/null 2>&1` hid a failure and produced a stale `dist/`, which then surfaced as
a nonsense Playwright collection error. The lesson is not "be careful": it is **never redirect the
output of the step whose success you are about to depend on.**

### SO#11 — budget

Estimated **~120–190 kT** for O2+O3; actual **~205 kT** (rough) — over the top of the range by ~8%,
inside ADR-016's 2× retrospective trigger, so no retrospective is owed. Mission total ≈ **375 kT**
against a ratified **~230–340 kT**: **~1.1–1.6×**, also inside the trigger. ⚠ The overrun is
concentrated in work the plan did not contain: two falsified census premises, and gate-39 finding a
live defect that had to be sized and baselined rather than fixed.

⚠ **`executor_tier` divergence, recorded not buried**: the mission declares `sonnet`; both sessions
ran **opus**. Both were judgment-heavy — a convention-13 pass, a causation test, an ADR-adjacent
"is this a defect" ruling nine times over. P4.1's retrospective found four sessions running opus
under `executor_tier: fable` with nobody noticing; the fix is saying so, which is done here and was
done at each session's open.
