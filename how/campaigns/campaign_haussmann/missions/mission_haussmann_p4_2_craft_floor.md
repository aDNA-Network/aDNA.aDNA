---
plan_id: mission_haussmann_p4_2_craft_floor
type: plan
title: "P4.2 — Craft-floor conformance: the 57 locks declared, the markup debt paid, the diagram rules published"
campaign: campaign_haussmann
phase: P4
decade: 2
owner: stanley
status: in_progress   # 2026-08-24 session_stanley_20260824_170854 — O0 opened; convention-13 pass run FIRST (see §Convention-13 pass), AC amendment staged, ⛩ halted for signature. ⛩ DP6 RATIFIED 2026-08-19 — activated. RESCOPED UP: absorbs F19 (the thin-hub class is now FOUR instances — /reference/specification, h2=0 bodyLen 1,504, created by P2.3's own spec split) and F20 (the failing JetBrains Mono Variable face — the format('woff2-variations') hypothesis is [I] and UNTESTED; this mission TESTS it rather than assuming it). Still the only P4 mission with human_gate: false.
mission_class: build
executor_tier: sonnet
token_budget_estimated: "~230–340 kT across 2 sessions: 57 locks + gap fixes + ~964 markup errors in 5 systemic classes + html-validate in CI + design-system regeneration + diagram construction rules, PLUS F19 (thin hubs, now 4 instances — bring to budget or merge) and F20 (test the woff2-variations hypothesis, do not assume it). Raised from ~200–300 kT at ⛩ DP6 2026-08-19 (ADR-016/SO#11)"
token_budget_actual:
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: ["webforge P1/P2 (57 locks; coverage census mechanics; graduation offered)", "B3 #5 (964 html-validate errors, 5 classes)", "F13 (thin hubs)", "design-system-page-as-latent-bug-detector (memory)", "directive P4 (20-component sample verification; diagram rules published)"]
vitruvius_dimensions: [D5, D11]
decade_theme: craft
webforge_patterns: [P1, P2]
patterns_to_author: []
depends_on: [mission_haussmann_p4_1_token_pipeline]
blocks: []
acceptance_criteria:
  - "A lock-coverage declaration exists for the site (all 57 locks × the site surface: enforced-by/na-reason/gap — the WebForge census mechanic), with every `gap` dispositioned"
  - "The 5 html-validate error classes fixed at their component loci (~964 errors → 0, or documented per-class exceptions); html-validate joins CI"
  - "Design-system page regenerated + verified against the P4.1 tokens (20-component sample conformance check per the directive)"
  - "Diagram/illustration construction rules published (so contributors can extend the language) — the D5 anchor-5 item"
  - "Thin hubs (F13) brought to the section budget or honestly merged"
verification_method: "lock-coverage checker + html-validate CI green + T0 design-system captures + 20-component sample audit"
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
| O0 | Author the site's lock-coverage declaration (57 rows; map existing gates as `by:` anchors; real `gap` rows honest) | coverage file + checker run | — |
| O1 | Fix the 5 html-validate classes at their component sources; add to CI | clean validate | — |
| O2 | Gap fixes from O0's dispositions; design-system page refresh + 20-component sample | fixes + sample audit | — |
| O3 | Diagram construction rules doc (from the existing diagram set + dossier distill/OWID patterns); thin-hub treatment; AAR | rules + AAR | — |

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

*(at execution)*

## AAR (SO#5)

*(before completed)*
