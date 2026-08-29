---
plan_id: mission_haussmann_gr_1_trust_path
type: plan
title: "GR-1 — Trust-path repairs: the surfaces that let a reader verify are the surfaces that break"
campaign: campaign_haussmann
operation: operation_grande_revue
phase: GR                  # ⛩ NEW LANE, not P0–P5. Grande Revue is the campaign's late-stage
                           # review-and-improve phase (situation_report §1), arriving between
                           # P4.4b's build increments and the human-gated P5.1/P5.2 endgame.
                           # ~~`mission_count: 27 → 28` is PROPOSED at this mission's ⛩ signature,
                           # NOT edited here~~ ⛩ RULED 2026-08-28: the charter IS amended to 28 and
                           # gains a `### GR — Grande Revue` section with its own exit gate.
                           # `phase_count` HOLDS at 6 — GR is not folded into the P0–P5 backbone.
decade: 2
owner: stanley
status: in_progress        # ⛩⛩ SIGNED 2026-08-28 — THE PRE-BUILD GATE IS PASSED and GR-1 IS BUILDING.
                           # artifacts/gr_1/ac_amendment_proposal.md is `accepted` (4-field block on its
                           # face); §4's criteria changes adopted wholesale; budget ratified; three
                           # further rulings taken in the same act — (2) the shipped visual identity is
                           # v2 and the TITLE is the wrong string, HomeHero.astro:327 cited NOT edited;
                           # (3) mission_count 27 → 28 + a `### GR` charter section, phase_count HOLDS
                           # at 6; (4) the local-proxy gate class becomes a convention, HABIT ONLY —
                           # no checker. ⚠ AC-1's scope question is NOT closed by the signature: V1's
                           # red run during O1 settles it. ~~queued~~ (struck, not deleted — SO-6).
mission_class: build
executor_tier: opus        # judgment-heavy: three instrument repairs, an embargo-sensitive copy
                           # change, and a provenance ruling. Declared at the OPEN, not discovered
                           # at the AAR — P4.1's lesson (a declared tier nobody honours is worse
                           # than none). Per-objective drop to `sonnet` is legitimate for A5's
                           # mechanical string fixes and must be recorded if taken.
token_budget_estimated: "⛩ RATIFIED 2026-08-28 — ~200–290 kT / 2 sessions, re-derived per objective at this gate (A1 ~40–60 · A2 ~20–30 · A3 ~50–70 · A4 ~40–60 · A5 ~20–30 · close cascade + AAR ~30–40). Supersedes the battle plan's ~120–200 kT / 1–2, which that document explicitly marked 'to be re-derived at the mission's own gate'. The ≈1.5× is THREE INSTRUMENT REPAIRS (headers-applied CSP probe · twin fidelity · public pin resolvability), not new features — contrast P4.4a's 2.4×, which was real new work. The gate sitting itself is separate at ~60–90 kT."
token_budget_actual:
created: 2026-08-28
last_edited_by: agent_rosetta
grounded_in:
  - "mid_campaign_review.md §2 — P1-1 (CSP/font) · P1-2 (llms.txt R-14 residue) · P1-3 (provenance pin) · P1-4 (twin emitter) · P2-1 (unscoped 'nothing is sent') · P2-3 (vendored marketplace promise) · §P3 (v2/v3 label, 'except the last two')"
  - "artifacts/grande_revue/battle_plan.md — Lane A, `accepted` 2026-08-28 (shape only; budget expressly NOT ratified there)"
  - "artifacts/grande_revue/evidence/dimension_reports_digest.md — D3 console capture, D6 provenance probe"
  - "artifacts/gr_1/ac_amendment_proposal.md — this mission's convention-13 pass"
# ── directive C.3 additive fields ──
vitruvius_dimensions: [D3, D4, D6, D8, D9]
decade_theme: credibility
webforge_patterns: []
patterns_to_author: []
depends_on: []             # ⭐ NONE. Deliberate, and stated rather than left blank-by-accident:
                           # every fix here is agent-reachable in `site/`, which is why the battle
                           # plan split lanes on REACHABILITY. GR-1 waits on no peer, no human act
                           # and no deploy. P4.4b B2b's ⊳ D-E hold does NOT touch it.
blocks: []                 # Lane D (story coverage) is sequenced AFTER this by the Gate-1 order —
                           # "so the trust path is sound before new copy lands on it" — but that is
                           # an ORDERING, not a dependency, and is recorded in the battle plan.
acceptance_criteria:       # ⛩⛩ RATIFIED 2026-08-28 — artifacts/gr_1/ac_amendment_proposal.md is `accepted`.
                           # Convention 13's pass ran COMPLETE at 40/40 with coverage recorded, both
                           # directions: 31 clean · 9 defective. Each criterion below carries the
                           # finding ID its amendment answers. ~~PROPOSED … NOT ratified~~ (SO-6).
  - "AC-1 (P1-1; amended — FAIL-1) — No font asset ships as a `data:` URI at any size: the build is configured so fonts are emitted as FILES under the existing `font-src 'self'`, and `vercel.json`'s CSP is UNCHANGED — adding `data:` to `font-src` is expressly forbidden, being a claim moving DOWN in security to make a test pass. **Met on a STATIC limb that cannot be vacuous: zero `data:font` occurrences in `dist/**/*.css`**, red-proven by restoring the inline threshold. ~~Met when a probe WITH THE LIVE HEADERS APPLIED records zero blocked font loads, red before the fix.~~ — struck as the SOLE limb: the inlined subset is `cyrillic-ext` and is not preloaded, so a headers-applied probe may be green on the UNFIXED tree, making its own 'red before the fix' clause unsatisfiable and the criterion unmeetable. The probe is RETAINED as V1 corroboration and its red run is the measurement that SETTLES the scope question."
  - "AC-2 (P1-2, P2-3) — `src/pages/llms.txt.ts:71` carries embargo-safe phrasing (the counsel embargo forbids present-tense protocol claims; `canonical.ts:14-17` rules the NOUN correct, so the defect is the verb 'federating on', not 'Lattice Protocol'), AND all SIX non-HTML emitters are asserted clean BY NAME over BUILT output. P2-3's vendored `.adna` marketplace promise is a STAGED upstream memo — never a local edit to vendored bytes (⛩ ruled 2026-08-28) — and (amended, GAP-1) **that half is discharged as a REGISTER ROW WITH A NAMED DESTINATION, not as prose**: P4.3's F-v precedent, a deferral recorded only in narrative is a deferral with no gate."
  - "AC-3 (P1-4) — The tier-C twin emitter preserves `<name>`-class placeholders: the decode-before-strip ordering is corrected at every site, using line 113's already-safe `decode(stripInline(x))` order as the model. Met when the twin of a page containing such a placeholder CONTAINS it — a comparison of twin content to page content, which no existing gate performs."
  - "AC-4 (P1-3) — `tour_manifest.json`'s pin resolves PUBLICLY in the repository `source_repo` names. The generator reads the UPSTREAM release SHA rather than the local checkout's HEAD, and byte-identity of all four vendored files is re-measured AT THAT SHA (a mitigation measured against `raw/main` is not a measurement against the pin). **Amended (GAP-2): that measurement was TAKEN AT THE GATE and is already true** — all four vendored files byte-identical local-`.adna`-HEAD vs upstream `v8.9` `[D]` — **and it carries its supersession condition on this criterion's face: it holds for tag `v8.9` against `.adna@0364d85`; a `.adna` re-sync or any tag move invalidates it and it must be re-measured before the pin is trusted again** (convention 15)."
  - "AC-5 (P2-1, P3) — Three copy corrections, each verified in BUILT output: the 'Nothing is sent anywhere' claim carries a scope clause covering the `&& claude` step; 'except the last two' becomes THREE (derived: `ls -d …/*.aDNA` prints); and the visual-identity contradiction is resolved per ⛩ **ruling 2 (taken 2026-08-28: the shipped identity is `v2`; the TITLE is the wrong string)** — `visual-identity-v2.mdx`'s `title` + `ref_title` correct to *'Visual Identity v2'*, while the two `writing-guidelines` links and the route slug were ALREADY RIGHT and are NOT touched. **Amended (DEFECT-5): TWO rendering surfaces, ~~ALL THREE disagreeing surfaces~~** — `HomeHero.astro:327` is a SOURCE COMMENT that never renders, so V5 could never assert it; it is reclassified as **the evidence the ruling rests on**, cited not edited."
verification_method: |     # ⛩ V1–V6 PROPOSED AT THE PRE-BUILD GATE. Every limb carries `[asserts AC-n]`:
                           # P4.4b's FINDING 7 — a pass cannot ask "is this criterion tested by anything"
                           # against a field that never says what anything tests.
  V1 (amended — FAIL-1) — CORROBORATION, not the sole limb: a probe serving `dist/` WITH `vercel.json`'s headers applied, across a derived route set (floor stated, never `> 0`). Its run on the PRE-FIX tree is the measurement that SETTLES whether the violation fires on every page or only where a cyrillic-ext glyph paints — a question the revue answered with a TYPED figure (KW-14). AC-1 passes on its static limb regardless of which way that lands  [asserts AC-1]
  V2 — the six non-HTML emitters are ENUMERATED BY NAME and each asserted clean over BUILT output, the surface matched to the claim's verb (a machine-surface claim is decided on emitted bytes, not on source) — AND the P2-3 register row exists with a named destination (amended, GAP-1)  [asserts AC-2]
  V3 — twin-fidelity: for every page carrying a `<name>`-class placeholder, the placeholder is present in that page's twin; red-proven by mutation  [asserts AC-3]
  V4 — gate-36's pin limb asserts PUBLIC resolvability against `source_repo`, and no longer `test.skip`s itself out of CI  [asserts AC-4]
  V5 — each corrected string is asserted in BUILT output on the surface its claim addresses — a reader-facing claim on the twin, a DOM claim on HTML (convention 17's 2026-08-26 amendment)  [asserts AC-5]
  V6 — every gate this mission repairs or adds is RED-PROVEN BY MUTATION with a stated control before its green is believed, and a non-red is diagnosed as one of the three named kinds — weak gate / mutation aimed at the wrong assertion / mutation correct but INERT (convention 14; P4.4b B0's case 6)  [asserts AC-1, AC-2, AC-3, AC-4, AC-5]   # amended — DEFECT-4: the prior ~~[asserts AC-1, AC-3, AC-4]~~ was present, well-formed and UNDER-SCOPED; V2 and V5 are new assertions too
human_gate: true           # the ⛩ pre-build signature; the A5a v2/v3 content-truth ruling; and any
                           # eventual push/deploy, which this mission does NOT claim (met on-build).
tags: [plan, haussmann, grande_revue, gr_1, trust_path, csp, provenance, twins]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> Assessment doctrine: `directives/OPERATION_VITRUVIUS_review_instrument.md`.
> The site is the best this campaign has measured it. What remains is concentrated on one seam —
> **the surfaces whose job is to let a reader verify.**

## Why this mission exists

The Grande Revue found **no P0**: no finding blocks a core journey or asserts a falsehood a reader
cannot recover from. What it found instead was a pattern. Of eight P1 findings, **four are trust-path
defects** — a CSP that blocks the site's own font, a provenance link that 404s at the exact moment a
skeptic accepts the page's invitation to verify, an agent-facing twin that serves corrupted commands,
and the one present-tense protocol claim the P1.1 purge removed from every HTML surface and never
swept from the machine ones.

The unifying property is not topic. It is that **each defect lives where the site asks to be
checked** — and a site whose differentiating asset is its honesty register (D7: *"the honesty register
reads as winning"*) cannot afford defects concentrated precisely there.

### ⭐⭐ The finding underneath the findings, and the reason this is one mission

**Three of the five objectives are guarded by gates that verify a LOCAL PROXY for a PUBLIC or RENDERED
property.** Each gate passes honestly, against the wrong object:

| Gate | Asserts | Cannot see |
|---|---|---|
| `gate-42` console-clean | zero console errors on `astro preview` | **any CSP violation** — `astro preview` applies no `vercel.json` headers. `grep -rn "font-src" tests/ scripts/` → **0** |
| `gate-36:73` tour-provenance | the pin resolves via `git cat-file -t` in the local `.adna` checkout — **the same checkout the pin was read from** | that the pin is on **no remote**. It can only ever pass, and `test.skip`s itself out of CI entirely |
| `gate-17` G12 twins | twin *shape* — 200, content-type, pointer block, an `h1`, >200 bytes | twin **content vs page content**, so a silently deleted placeholder passes every gate |

This is the campaign's **instrument-narrower-than-its-conclusion** family (F-e's `find` over the wrong
vault · convention 16's `grep` over one machine · P4.5b's shape guard · convention 17's amendment)
arriving at the level of the **suite** rather than of one command. ⇒ **A1, A3 and A4 are one finding
with three faces**, and each objective's real deliverable is *the gate that could have caught it*, not
only the fix.

⚠ **And this is the second defect in the same emitter's HTML→markdown conversion.** P4.5b found it
converting `<strong>` before `<a>`, discarding hrefs — *"the copy was already right; the machine
surface was lying about it."* A3 is that sentence again, in the same file family, found by a different
route. One more reason the remedy is a fidelity assertion rather than a line fix.

## Where we are (verified on disk 2026-08-28 — recon-at-execution, convention 12)

All five findings re-read **at the object** before this mission was authored. **None stale. Three
materially re-scoped** — the campaign's now-routine result, and the fifth consecutive mission where a
re-probe moved inherited scope.

| Obj | Finding | Verdict at the object |
|---|---|---|
| **A1** | P1-1 CSP/font | **CONFIRMED, mechanism narrower than the phrasing.** Exactly **one** asset is inlined: a **~2028-byte JetBrains Mono `cyrillic-ext`** subset in `dist/_astro/BaseLayout.BW1WffXN.css`. `assetsInlineLimit` is **unset** in `astro.config.mjs` ⇒ Vite's 4096-byte default. `dist/_astro/` holds every other subset as a **file**; `cyrillic-ext` is the only one absent, because it alone fell under the threshold. ⚠ **Scope is the open question — see below.** |
| **A2** | P1-2 llms.txt | **CONFIRMED, scope SHRANK.** `llms.txt.ts:71` → `dist/llms.txt:53`. The surface-by-surface sweep is **done**: of six non-HTML emitters, **only this one** carries the claim. `src/data/canonical.ts:14-17` rules the noun *correct* prose ⇒ the defect is the **verb**. |
| **A3** | P1-4 twin emitter | **CONFIRMED, exact root cause.** `scripts/emit_bespoke_twins.mjs` runs `decode()` **before** the blind `stripInline` (`/<[^>]+>/g`) at `:111-112` (fenced blocks) and `:167` (inline code), so `&lt;name&gt;` decodes to `<name>` and is then eaten by `:172`. **Line 113 already has the safe order.** Source and built HTML are both **correct**; damage is entirely in the emitter. |
| **A4** | P1-3 provenance | **CONFIRMED, and worse — see the dedicated section.** |
| **A5** | P2-1, P3 | **CONFIRMED, both broader.** A5a: the wrong string is `src/content/reference/visual-identity-v2.mdx:4` `ref_title: "Visual Identity v3"` on a `-v2` slug, and **three** surfaces disagree. A5b: **three** of five commands print — `ls -d …/*.aDNA` is not silent. P2-1: the unscoped claim appears **twice**, at `get-started.astro:50` and `:96`. |

### ⚠ A1's open question — a criterion must not be keyed to a count nobody derived

Two `[D]` observations sit in tension and **this mission must not paper over it**:

- The revue captured **real console text** — *"Loading the font 'data:font/woff2;base64,…' violates …
  `font-src 'self'`. The action has been blocked."* — and characterised it as firing **on every page,
  both themes**.
- This desk measured that the inlined subset is **`cyrillic-ext`**, and that `BaseLayout.astro:52-54`
  preloads **latin subsets only** (its own comment says so). A subset that is neither preloaded nor
  matched by any painted glyph should not load at all on an English page.

Both cannot be fully true as stated. Either the *"every page"* scope is wider than what was sampled,
or an engine materialises a `data:`-URI face eagerly because there is no network fetch to defer.
⭐ **The fix is identical under either reading** — `assetsInlineLimit: 0` removes the `data:` URI, so
there is nothing left to block. **What must not happen is a criterion written against a page count**:
*"eliminates one console error per page"* is unfalsifiable-green if the true count is zero on latin
pages, and wrongly-red otherwise. **AC-1 is therefore keyed to the blocked-load EVENT under applied
headers, and V1's red run is what settles the scope** — measured, not inherited. *(KW-14's shape: the
review's "every page" is a typed figure, not a derived one.)*

### A4 in full — a provenance inversion, and one of the battle plan's two remedies is not performable

All `[D]`, 2026-08-28:

- `src/data/tour_manifest.json` pins `source_sha_full: 0364d85cba4253e1234178a61abba0e551dd79e2`
  against `source_repo: https://github.com/aDNA-Network/aDNA`. The public commit page returns **404**;
  the API **422**. All five *"at the same commit"* links are dead.
- `scripts/build_tour_files.mjs:67` hardcodes the **image repo** URL, while `:104-106` reads the SHA
  with `git rev-parse HEAD` in the **local `~/aDNA/.adna` checkout** — whose origin is
  `aDNA-Network/adna-legacy`, the **archived, frozen** repo (workspace Standing Rule 1). That checkout
  is **12 commits ahead of its own origin**, and `git branch -r --contains 0364d85` is **empty**.
  ⇒ **The script pairs a SHA from one repository with the URL of another.**

⭐ **The battle plan's second disjunct — *"or push the release-sync commit"* — is NOT performable, and
saying so is part of this mission's deliverable.** The commit lives in a clone of an archived repo that
Standing Rule 1 forbids modifying; there is nowhere to push it that would make those URLs resolve.
This is the campaign's *"a GO on an outward act whose prerequisite does not exist on the performing
tree"* class — **fifth instance** (P3.3's npm publish was the fourth).

⭐⭐ **A third option exists that neither disjunct offered, and it is performable today with no outward
act.** The local commit's own message is *"release sync: **v8.9 from aDNA-Network/aDNA**"* — it is a
**downstream artifact of** the upstream release, and a downstream artifact is never a citable source.
The upstream release **is public**: tag **`v8.9` → `c8e5427b7ffc3668f7b4ef2c8184f8cd07287a66`**, with
`.adna/CLAUDE.md` at that tag serving **HTTP 200** `[D]`. The manifest's own
`source_commit_date: 2026-07-24` **already matches that release**. ⇒ **Pin the upstream release; read
the SHA from upstream; re-measure byte-identity at that SHA.** No push, no `skill_template_release`,
no Standing Rule 1 exposure.

⚠ **And the mitigation must be re-measured, not inherited.** The revue measured the four vendored files
byte-identical to public **`raw/main`**. `main` is not the pin, and `main` moves. A byte-identity
measured against a moving ref does not establish byte-identity at a fixed SHA (convention 15's
pin-supersession face, applied inward).

## The scope

**In.** A1–A5 as above, each with the gate that could have caught it (V1/V3/V4) red-proven by mutation.

**Out, and named rather than left to be inferred.**
- **No deploy, no push.** GR-1 is met **on-build**, the P4.4b pattern. The freeze is lifted, but push
  precedes deploy and each carries its own ⛩ GO.
- **No edit to vendored bytes** (⛩ ruled). P2-3 is fixed upstream or not at all; here it is a staged
  memo plus an owed row with a named destination.
- **No registry data.** Nothing in GR-1 touches `vaults.json` (pt19, convention 5).
- **No new standing monitor.** Conventions 15/16/17 rule against authoring instruments at the tail of a
  sitting; the three limbs here are **repairs to gates that already exist or an assertion inside one**,
  each with its own controls — not a fifth instrument at a wind-down.

**Routed, not fixed here.**
- **R-124** → Lane D's scope gate (a positioning decision nobody has taken).
- **The local-proxy gate class** → proposed as a campaign convention at this mission's signature. A
  finding recorded only in narrative is a finding with no gate — but its home is *governance*, not a
  sixth acceptance criterion.
- **P2-3's upstream half** → the `.adna` lane via `skill_template_release`.

## Objectives (phased — operator gates as marked)

| # | Objective | Output | Gate |
|---|---|---|---|
| **O0** | Convention-13 pre-build pass, COMPLETE, both directions, coverage recorded | `artifacts/gr_1/ac_amendment_proposal.md` (`proposed`) | ⛩ **operator — the signature. NO BUILD UNTIL SIGNED** |
| **O1** | A1 — fonts ship as files; headers-applied probe red→green | `astro.config.mjs`, V1 probe + red-test | — |
| **O2** | A2 — llms.txt verb corrected; six emitters asserted clean by name; P2-3 memo staged | `llms.txt.ts`, gate assertion, `who/coordination/` memo | ⛩ (memo delivery is an outward act) |
| **O3** | A3 — emitter ordering corrected; twin-fidelity assertion red-proven | `emit_bespoke_twins.mjs`, V3 | — |
| **O4** | A4 — upstream pin; byte-identity re-measured at that SHA; gate-36 asserts public resolvability | `build_tour_files.mjs`, `tour_manifest.json`, `gate-36` | — |
| **O5** | A5 — three copy corrections in built output | `get-started.astro`, `visual-identity-v2.mdx` + 2 surfaces | ⛩ (A5a v2/v3 ruling) |
| **O6** | Close cascade + AAR (SO#5); suite delta derived; register rows discharged-or-routed | mission rows, campaign index, `STATE.md`, AAR | — |

## Constraints & gates (honor; renegotiate only with operator sign-off)

Inherits every standing convention in `how/campaigns/campaign_haussmann/CLAUDE.md`. Mission-specific:

1. **Convention 1 governs the CSP fix absolutely.** `font-src 'self' data:` is a **claim moving down in
   security to make a test pass** and is forbidden here; the CSP is unchanged and the *assets* move.
2. **Convention 14 on every limb.** No green is believed until the instrument has been demonstrated to
   fail, and a non-red is diagnosed as one of three kinds — weak gate, mutation aimed at the wrong
   assertion, or mutation correct but **inert**.
3. **Convention 17 + its 2026-08-26 amendment on every absence claim.** Name the surface, and match the
   surface to the claim's **verb**. A2's is a machine-surface claim ⇒ emitted bytes. A5's reader-facing
   claims ⇒ the twin. Neither surface alone answers *"what does a reader see"*.
4. **Convention 7 / ADR-057 same-diff.** A1 changes build output paths; A4 changes a manifest the
   `/get-started` pages render. Every gate or fixture hardcoding either moves in the same commit.
5. **Convention 6 build discipline.** `npx astro build`, never `npm run build`. A bare build injects no
   headers or redirects — run `node scripts/inject_redirects.mjs .` before judging gate-30, and
   **diagnose a red gate by asking which step produces the thing it asserts** before changing anything.
6. **The counsel embargo bounds A2's replacement wording.** No protocol publishing or links until D-8
   rules. The noun is permitted prose (`canonical.ts:14-17`); the present-tense *"federating on"* is not.
7. **Do not regress what the campaign protects:** the honesty strata, empty-state candor, dark/light
   parity, the axe-0 record, perf 97–100, the curated `llms.txt`, the graph keyboard-twin pattern.

## Definition of done

All five criteria met with their six limbs green **and each limb red-proven first**; fonts ship as files
under an unchanged `font-src 'self'` with a headers-applied probe recording zero blocked loads and its
red run recorded; `llms.txt` embargo-safe with all six non-HTML emitters asserted clean **by name** over
built output and P2-3 staged upstream with a named destination; the twin emitter preserving
`<name>`-class placeholders under a fidelity assertion no existing gate performed; the provenance pin
resolving **publicly** in the repository it names, read from upstream, with byte-identity re-measured
**at that SHA** and `gate-36` no longer able to only-ever-pass; three copy corrections verified in built
output on surfaces matched to their claims' verbs; suite delta **derived, not typed**; every register
row discharged **or** routed with a named destination; AAR filed per SO#5 before `completed`. **Met
on-build** — deployment is named as owed, never implied.

## Session opening prompt

> You are Rosetta in ~/aDNA/aDNA.aDNA. Execute `mission_haussmann_gr_1_trust_path.md` — GRANDE REVUE
> Lane A, trust-path repairs. ⛔ **Confirm the ⛩ signature on `artifacts/gr_1/ac_amendment_proposal.md`
> before building anything**; if it still reads `proposed`, halt and report. Re-read
> `/.well-known/adna-build.json` at open — never quote a stamp forward. Derive the unpushed count. O1→O5
> in order, each gate red-proven by mutation with a stated control before its green is believed; no
> `data:` in `font-src`; no edit to vendored `.adna` bytes; no deploy — GR-1 is met on-build. Vault-reading
> gates 26/35/37/41 after any governance/STATE edit; G41d needs a genuine MANIFEST review in any commit
> that bumps STATE's `updated:` date.

## Progress

### ⏸ 2026-08-28 — OPEN AT THE ⛩ PRE-BUILD GATE; NOTHING BUILT

**Convention 13 ran COMPLETE at 40/40 with coverage recorded** (`AC×AC = C(5,2) = 10` plus
`AC×V = 5×6 = 30`, derived not typed), each pair read **both** directions →
`artifacts/gr_1/ac_amendment_proposal.md`, **`proposed`**: **31 clean · 9 defective** — 1 failure ·
2 structural gaps · 2 limb defects · 2 unstated constraints · 1 open operator choice · **1 control that
passed and is recorded as a result**. **Eighth consecutive mission where the pass has paid for itself.**

⭐ **The reverse direction found three of the five defects again** (GAP-1, GAP-2, DEFECT-4), including
the one where a limb's `[asserts]` label was *present, well-formed and under-scoped* — a label that
reads as diligence while covering two fewer criteria than it governs.

⭐⭐ **And the pass did NOT raise the band, which the previous seven all did.** The findings split
evenly between cheap remedies and **scope reductions**: GAP-2 was discharged by a measurement taken at
this gate (all four vendored files byte-identical between local `.adna` HEAD and upstream `v8.9`, so
A4's re-pin moves **no content**), and DEFECT-5 cut AC-5 from three surfaces to two after one of the
three turned out to be a **source comment that never renders**.

⛩ **Three questions carried to the signature**: the v2/v3 content-truth ruling · `mission_count: 27 →
28` with a new `### GR` charter section · whether the **local-proxy gate class** becomes a convention.
**No build until signed.**

### ✅ 2026-08-28 — O1 COMPLETE (A1 / AC-1). Fonts ship as files under an UNCHANGED CSP.

`assetsInlineLimit` in `astro.config.mjs` now returns `false` for font extensions and `undefined` for
everything else — **surgical by design**: a flat `0` would have stopped inlining every small SVG and
image on the site, a build-wide behaviour change to fix a font defect, which is the unforced widening
this campaign keeps cleaning up. `vercel.json`'s CSP is **untouched**; `cyrillic-ext` now ships as
`jetbrains-mono-cyrillic-ext-wght-normal.EocZY2iu.woff2` alongside its five siblings.

**AC-1 ✅** on its static limb: `data:font` in `dist/**/*.css` = **0**. `gate-42` gains **G42e** —
placed in the gate that was *structurally blind to the defect*, which is convention 18's remedy
applied where the hole was. Red-proven **4/4** (`scripts/font_inline_redtest.sh`): M1 restores the
default threshold and goes **RED**; C0/C1 green; ⭐ **C2 is the control that earns its keep** — a
legitimate inlined SVG must NOT trip the predicate, separating *"catches inlined fonts"* from
*"catches any `data:` URI"*, because a gate that fires on correct code teaches people to
`--grep-invert` it.

⭐⭐ **V1 SETTLED THE SCOPE QUESTION AND FALSIFIED THE PASS'S PREMISE.** `scripts/csp_font_probe.mjs`
serves `dist/` with the CSP **read from `vercel.json`** (never transcribed — KW-14). Pre-fix:
**50 of 50** page×theme loads refused the font. Post-fix: **0 of 50**. ⇒ **The revue's "every page,
both themes" was RIGHT**, and FAIL-1's reasoning — that an un-preloaded, glyph-gated subset might
never load — **was wrong**: `unicode-range` defers a NETWORK FETCH, and a `data:` face has none, so
the engine constructs it immediately and CSP fires at construction. **The remedy survived its own
premise**, because AC-1 was deliberately written against the ASSET rather than a page count; the
correction is recorded at all four objects that carried it rather than quietly dropped.

⚠ **And the revue's figure was TYPED when written** (KW-14) — correct, but not derived. This run makes
it derived. *A typed figure that happens to be right is still typed.*

⚠ **My own instrument was wrong before the subject, again** (the campaign's standing streak): the
red-test's first guard grepped the bare word `assetsInlineLimit`, which also appears in **that
option's own doc comment**, so it condemned a correctly-applied mutation as a HARNESS BUG. Caught
only because the mutation asserts its application *separately* from the guard — which is the whole
reason that separation exists.

Fast lane **522 → 523/1skip** derived. ⛔ Nothing deployed; GR-1 is met on-build.
⏭ Changelog entry for GR-1's user-visible changes is **owed at O6**, extending the day's existing
`2026-08-28.md` deliberately (convention 6: the cadence prompt is date-keyed and will not fire twice).

## AAR (SO#5)

*(mandatory before `status: completed`)*

## Related

[[battle_plan]] · [[mid_campaign_review]] · [[WEBFORGE_ORIENTATION]] · [[webforge_pattern_register]]
