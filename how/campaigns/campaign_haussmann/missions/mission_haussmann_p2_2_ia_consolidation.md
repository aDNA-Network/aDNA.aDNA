---
plan_id: mission_haussmann_p2_2_ia_consolidation
type: plan
title: "P2.2 — IA consolidation: one audience architecture instead of three, nav within doctrine"
campaign: campaign_haussmann
phase: P2
decade: 1
owner: stanley
status: completed    # 2026-08-18 — O0–O3 done across 2 sessions. Option A implemented: nav 7, 11 redirects, 4 link-set copies → 1, 0 duplicate titles, 446/446 gates. NOT deployed (separate ⛩). AAR below.
mission_class: design_excellence
executor_tier: fable
token_budget_estimated: "~250–350 kT across 2 sessions: ADR-049 options + design spike (comps) + ranker + implementation + redirects (ADR-016)"
token_budget_actual: "~215 kT across 2 sessions (~110 S1 + ~105 S2) vs 250–350 est. Under budget: S2's implementation was mostly mechanical once the guard diff had settled what folds, and the ranker/comps work was front-loaded into S1."
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: ["H2 reframed (3 parallel audience branches)", "H7 expanded (14 persona pages)", "inventory §7 (duplicate titles; 3-URL personas)", "Berthier nav-ceiling + CTA items", "anti-pattern 7.7 (segments-after-positioning-only)", "ADR-048 (from P0.1)"]
vitruvius_dimensions: [D2, D1]
decade_theme: navigation
webforge_patterns: [P7]
patterns_to_author: []
depends_on: [mission_haussmann_p0_1_positioning, mission_haussmann_p2_1_url_normalization]
blocks: []
acceptance_criteria:
  - "ADR-049 at proposed: one audience architecture (consolidated set with single URLs; segment pages retained only as post-positioning campaign landers per 7.7, or retired with redirects)"
  - "Primary nav ≤7 items, no load-bearing 'More' overflow; hero CTA at 1+1 (front_page_doctrine)"
  - "Zero duplicate titles; the ~5 personas each have exactly one canonical URL (others 301)"
  - "Design spike: ≥2 IA comps compared at ranker ≥4.0 before build"
  - "≤2-click reachability preserved (10/10 baseline held); inventory re-crawl clean"
verification_method: "re-crawl (B1 script re-run) + ranker + gates same-diff + T0 nav captures"
human_gate: true
tags: [plan, haussmann, p2, ia, navigation]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> Positioning (ADR-048) is settled before this opens — the IA now expresses one proposition instead of
> hedging across three.

## Why this mission exists

The same ~5 audiences are addressed by up to 3 URLs each across `/researchers`-style, `/adopters/adopter-*`, and `/use-cases/*` branches — 14 persona-template pages with 4 duplicate title pairs `[D inventory §7]` — the audience-sprawl anti-pattern as structure. Nav sits at its 8-item ceiling with a dual CTA over doctrine `[R Berthier]`. Consolidation before craft (sequencing law), after positioning (7.7's own rule: segment pages are legitimate only *after* the proposition is narrowed).

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | Audience-architecture options under ADR-048 (consolidate-to-use-cases / consolidate-to-adopters / retire-into-positioned-sections), each with URL+redirect plan | ADR-049 options | — |
| O1 | Design spike: 2–3 nav+home-section comps (interactive HTML, Storyweave pattern); ranker pass | comps + ranker ≥4.0 | ⛩ operator pick |
| O2 | Implement: nav ≤7, CTA 1+1, branch consolidation + 301s, duplicate-title elimination | edits | — |
| O3 | Re-crawl + same-diff gate updates + T0 captures; AAR | evidence + AAR | — |

## Constraints

Everything 301s (P2.1's law); content is *re-homed*, not deleted (SO-6 archive-never-delete applies to prose too — fold, don't drop); the docs-archetype nav patterns (P7) inform, never fork.

## Definition of done

A first-time visitor, a returning implementer, and a crawler each navigate one coherent taxonomy; the persona set has one home each; nav fits doctrine.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + ADR-048 + ADR-049 options + `evidence/inventory/inventory_summary.md` §7. Execute O0, spike at O1, halt for the operator pick, then O2–O3.

## Progress

**Session 1 of 2 — 2026-08-18** (`session_stanley_20260818_164055_haussmann_p2_1_deploy_p2_2_open`).
O0 + O1 complete; **halted at ⛩ DP5** as the mission's own gate requires. No site source changed.

| Obj | State | Evidence |
|---|---|---|
| O0 | ✅ | `what/decisions/adr_049_ia_model_audience_disposition.md` — three options authored with exact redirect counts derived from the route inventory `[D]`; **B cut as dominated**, with the reasoning recorded rather than the option silently dropped |
| O1 | ✅ | `artifacts/p2_2/ia_comps.html` (Current / A / C, dark+light, headless-verified) + `artifacts/p2_2/ranker_record.md` |
| O2 | ✅ | Option A implemented — see session 2 below |
| O3 | ✅ | `evidence/inventory/inventory_p2_2_postconsolidation.md` · `evidence/captures_p2_2/` (36) · 446/446 gates |

**Ranker: A = 4.03 · C = 4.17 · both ≥4.0 (gate met).** The 0.14 spread does **not** separate them —
one persona moving one cell by one point — and the record says so rather than declaring a winner.
The two are near-perfect mirrors: A scores Relevance 4.4 / Actionability 3.4; C scores Actionability
4.8 / Relevance 3.4.

**Declared conflict**: the agent that authored the comps also scored them, against campaign
convention 4 (*the builder never self-certifies*) and P1.2's sharper form of it. The score is
therefore logged as a `[D-syn]` **pre-screen**, not a verdict, and an independent re-rank was offered
to the operator at the halt.

**Findings carried to O2** (found while mapping, not fixed mid-spike):

1. `site/tests/gates/gate-7-interaction.spec.ts:68` asserts against `/adopters/solo-developer` —
   **a route that has never existed** (the real one is `/adopters/adopter-solo-developer`).
   `page.goto` does not throw on a 404, so the assertion has been **passing vacuously** for its
   whole life.
2. Two built routes are nav-orphaned: `/learn/concepts/dual-audience/` (13 concept docs, 12 listed)
   and `/learn/tutorials/exchange-adoption-path/` (10 guides, 9 listed).
3. `question-test` renders at three routes (tutorial · pattern · glossary); `dual-audience` has three
   near-namesakes. Consolidation candidates for the ADR to rule on.
4. The audience link set exists in **four** places and the personas are nav-listed **twice** — any
   option that does not collapse these merely moves the duplication.

**Charter corrected**: the P2 row read `nav ≤8` against this mission's `≤7` and ADR-049's own
decision space `≤7`. Operator ruled ≤7; the row now matches.

---

**Session 2 of 2 — 2026-08-18** (`session_stanley_20260818_183026_haussmann_p2_2_ia_implementation`).
O2 + O3 complete. **Built and gated, NOT deployed** — deploy is a separate ⛩.

### What shipped into the tree

**Nav is 7, with no disclosure**: `Standard(/reference) · Learn · Vaults · Network · Commons ·
Use Cases · Community`. Verified in the built markup — 7 links, `nav-more` absent from the page
entirely. `/reference` is retitled **"The Standard"** so the click does not land on a
differently-named page; the URL is unchanged, so no inbound link and none of the 5 shipped `.md`
redirects break. *(Operator ruling at the planning gate: a `/reference`→`/standard` rename was
outside ADR-049's ratified 11-redirect budget.)*

**The four copies of the audience link set are one.** `navigation.ts` "For you" group deleted ·
`home.ts` `audiences` **derived from `personas`** rather than deleted (deleting it would have
broken gate-13's import; deriving keeps the test deriving instead of hardcoding — WebForge
KW-8/FR-K) · `adopters/index.astro` `pathCards` went with the page · `Breadcrumb.astro`
`terminalRoutes` reduced to the one surviving route. The persona double-listing under Community is
gone, which dissolves the `navigation.ts:10-13` ordering constraint — the comment went with it.

**11 redirects**, all widened to both slash forms by `inject_redirects.mjs` (42 of 42 total).
**`/compliance` → `/provenance-audit`** is a real page move (`git mv` on both the page dir and its
data file), paying ADR-048's owed rename. It also closes the charter's **Enterprise Architect
routing gap**: the page was reachable from neither disclosure surface and is now in the Guides
sidebar group, crumbing under HOW — it is an operational walkthrough, not an audience page.

### The finding that changed the work

**ADR-049's premise that Option A is "redirect-only, zero content rewritten" was wrong on the
facts**, and the mission's own guard diff caught it before anything was deleted.

The ADR characterised the `/adopters/*` docs as name-stripped paraphrase. They are not. Each
carries a **`## Typical Ontology Extensions` table — 13 unique entity-type rows** across four docs
(`protocol`/`dataset`/`experiment`/`collaboration` for the lab; `assignment`/`student_project`/
`reading` for the educator; and so on), plus a self-reference block and unique glossary links, none
of which appear in the `/use-cases/` twin. Separately the four segment landings are **curated
reading-path decks** (~1,690w) — a 3-week course structure, a procurement checklist, a 60-minute
quickstart — not narratives.

The operator ruled at the planning gate that content folds before it retires. That ruling was taken
on the segment landings; the guard diff showed the same class in the adopter docs, so it extended
there too. **9 folds, not 4.** The five destinations grew 483→690, 467→762, 441→917, 474→826,
536→644 words. Redirect count and nav are unaffected.

So the honest restatement: **zero content *discarded*; seven destinations gained folded sections.**
ADR-049 carries an implementation note recording the correction rather than quietly diverging.

### Verification

| Check | Result |
|---|---|
| `npx astro build` | clean, 195 pages |
| Full gate suite **including `@audit`** | **446/446** (444 at P2.1 + 2 new gate-30 tests) |
| Re-crawl, 194 built pages | **0 orphans · 0 duplicate `<title>` · 10/10 ≤2-click** |
| Redirects in `.vercel/output/config.json` | 11/11 present, both slash forms, correct destinations |
| T0 captures | 36 (6 surfaces × 3 viewports × 2 themes) |

**The new assertions were verified by making them fail.** Both mutations were applied, observed to
fail, and reverted: re-adding the dead `/adopters/solo-developer` to gate-7 (fails on the status
check) and pointing a gate-30 destination at `/use-cases/WRONG-DESTINATION/` (fails on the
Location compare). A gate that cannot fail is the thing this campaign keeps catching itself
shipping — `gate-7:68` had been passing vacuously against a route that never existed, for its
whole life.

**One design trap avoided**: a first draft of the redirect assertions sat in gate-13, which runs
against `npm run preview` — and per P2.1's doctrine §3.2 the preview server does not serve the
adapter layer at all. They would have failed locally in a way indistinguishable from a real bug.
They live in gate-30 now, reading the emitted `.vercel/output/config.json`.

### Findings carried out of this mission

1. **13 mixed-case vault links are still emitted in markup** `[D]` — `/vaults/Astro.aDNA/`,
   `/vaults/III.aDNA/`, … from `/` and `/commons/`. `commons.astro:196` renders
   `/vaults/${row.slug}/` straight from `subnetworks.json`'s raw `vault_slug` values, bypassing
   P2.1's canonicalizing accessor. They *work* — P2.1's 24 redirects catch them — but every click
   is a 301 hop, and emitting non-canonical URLs is exactly what P2.1 set out to end. **gate-30's
   accessor test does not catch this**: it checks files importing `vaults.json`, and this is
   `subnetworks.json`. Owner: P2.1 residual / P2.4. Not fixed here — out of this mission's lane,
   and `subnetworks.yaml` is SOURCE data under pt19.
2. **Duplicate `<h1>` "aDNA"** on `/glossary/glossary-adna/` and `/vaults/adna/` `[D]` —
   pre-existing, unrelated to consolidation. → P2.3 docs freshness.
3. **`/patterns/content-as-code/` still dangles** `[D]` — known from B1 §4, unowned; P2.3 has it.
4. **Stray ignored build artifacts** in `site/src/pages/`: an empty `dist/` and a 788K
   `node_modules/`, both gitignored and both skipped by Astro. Harmless, but they are debris from
   a build run in the wrong directory. Flagged, untouched.
5. **The B1 crawl instrument had evaporated** — it ran from a session scratchpad, so an inventory
   cited by four missions could not be regenerated. Re-authored at
   `artifacts/p2_2/crawl_local_inventory.mjs`, in the campaign dir this time, and pointed at the
   local build rather than production (P2.2 is undeployed; crawling production would have measured
   the old IA and reported it healthy).

## AAR (SO#5)

**Worked** — The guard diff. It was a cheap pre-step that cost minutes and caught a ratified ADR
asserting something false about its own content; without it, 13 unique ontology rows and ~1,690w of
curated reading paths would have been deleted under a "redirect-only" label, and nobody would have
noticed until a reader missed them. Verify-by-making-it-fail earned its keep for the second
consecutive mission.

**Didn't** — The first draft put the redirect assertions in a preview-served spec, reproducing the
exact trap P2.1 wrote doctrine §3.2 about a day earlier. Reading one's own doctrine is apparently
not the same as applying it. Caught before running, but only just.

**Finding** — *A ratified decision can carry a false factual premise, and ratification does not make
it true.* DP5 settled **which** branch survives — a judgment call the operator owns. It did not, and
could not, settle **what is in the files** — a measurable fact the author got wrong. The decision
held; its premise did not. Implementation is the first point where a decision meets the disk, so it
is the right place to check the premises, not to assume them settled.

**Change** — Fold-before-retire should be the default treatment for any consolidation, not an
operator ruling sought case by case. Proposed as a campaign convention and a candidate upstream
pattern: *a consolidation mission diffs source against destination before deleting either, and the
diff is evidence in the record.*

**Follow-up** — Finding 1 (mixed-case vault links) to P2.4 with a note that gate-30's accessor test
has a `subnetworks.json` blind spot. Findings 2–3 to P2.3. C remains deferred-not-rejected with
P2.6 as its named revisit point, exactly as DP5 recorded.
