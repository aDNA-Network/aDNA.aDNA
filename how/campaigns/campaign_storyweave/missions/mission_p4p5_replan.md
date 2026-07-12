---
plan_id: mission_p4p5_replan
type: plan
title: "P3 measure → P4/P5 re-plan (the measure-before-re-plan gate)"
campaign: campaign_storyweave
phase: "P3→P4 gate"
decade: 2
owner: stanley
status: completed         # ⛩ O4 RATIFIED 2026-07-11 — P4 authorized, P5 provisional; measure + re-plan delivered in one session
mission_class: planning        # measure + focused review + re-plan authoring — NO site/ edits (planning→build boundary)
executor_tier: opus            # judgment-heavy: verify-live review + P4/P5 re-plan authoring + a governance ruling
token_budget_estimated: "~120 kT one session: T0 static + T1 interactive + Lighthouse measure → focused review (verify P3 landed) → P4/P5 re-plan authoring → folded Berthier draft ruling"
created: 2026-07-11
last_edited_by: agent_rosetta
grounded_in: how/missions/artifacts/storyweave_p3_measure/measure_and_review.md
tags: [plan, storyweave, decade2, measure, replan, p4, p5, gate]
---

# Mission: P3 measure → P4/P5 re-plan

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_storyweave/CLAUDE.md`. This is the **charter's measure-before-re-plan gate** — P3 shipped + is live ([[mission_p3_actionability]]); before P4/P5 are authored for build, the *shipped* site is measured live and the provisional P4/P5 arc is reconciled against the evidence. **This is a PLANNING mission** — no `site/` edits, no deploy, no push. Mirror of [[mission_decade2_replan]] one decade-turn later.

## Why this mission exists

The charter gates each Decade-2 phase behind *"ship + measure before the next phase is re-planned."* P3 (registry actionability + on-ramps) shipped live 2026-07-11 (313/313 gates, live axe-0). P4/P5 stand **provisional** ([[decade2_replan]]). This mission measures the live P3 site, verifies each P3 increment actually landed, and re-plans P4/P5 grounded in what is now true — then **stops at the operator ratification gate**. It does not begin P4. *(Backlog B8→P4; B9/B11/B12/B13→P5.)*

## Objectives (planning — operator gate as marked)

| # | Objective | Output | Gate |
|---|-----------|--------|------|
| **O1** | **Measure P3 live** — T0 static (15 surfaces ×2vp ×2themes +`--axe`, apples-to-apples vs 2026-07-09) + T1 interactive (drive the P3 client features: search · 15-class filter · rail · hero/graph deep-link twins · rendered-vs-declared 68 count) + Lighthouse/CWV baseline (key surfaces; pre-seeds P5's perf budget) | `capture_report.json` · `p3_interactions` result · `lh_*.json` | — |
| **O2** | **Focused review + verify P3 landed** — tabulate Parts A–D; confirm nested-`<main>` axe→0 both themes, 68 cards render a purpose line, search/filter/rail/deep-links/labels/on-ramps behave; flag any regression | [[measure_and_review]] | — |
| **O3** | **Author the P4/P5 re-plan** — grounded in Part C; refresh the provisional scope (drop what P3 cleared, carry what holds); each item traced to a measured observation | `p4p5_replan.md` (`status: proposed`) | — |
| **O4** | **Operator ratification gate** — present the re-plan; on ratify → `accepted`, STATE baton advance, P4 build unlocks (a **separate** future session). **Do NOT auto-advance to P4 build.** | ratified arc | ⛩ operator |
| **O5** | Close + AAR (5-line); STATE update; session → history | mission close | — |
| **[fold]** | **Berthier draft ruling** — answer the untracked `coord_2026_07_11_berthier_to_exchange_rosetta_graph_publish_fetch` (spec placement + minimal published-graph declaration + ownership split) as a **`status: draft`** coord artifact for operator review — not sent, not committed | draft ruling | ⛩ operator |

## Constraints & gates (honor)

- **Instrument = headless T0/T1 + Lighthouse** (`scripts/visual_capture.mjs` + `scripts/p3_interactions.mjs` + `npx lighthouse`), live `--base https://adna.network`, per [[doctrine_visual_inspection]] — **never assume Chrome**; every visual claim screenshot- or assertion-cited.
- **Planning→build boundary (campaign CLAUDE.md §4):** this mission writes **only** md/artifacts + a reusable measure script — **zero `site/` edits.**
- **No deploy / no push.** P3 is already live; the 5 unpushed commits stay operator-gated (SO-11).
- **Hard stop at O4.** P4/P5 land `status: proposed`; ratification is the operator's.
- **Register (for the re-plan copy):** warm · calm · honest (~55/45); the remedy is more proof + more honesty.
- **AAR at close** (SO#5); token budget above (SO#11); model tier `opus` (SO — Gov Doctrine).

## Definition of done

The live P3 site is measured (static + interactive + perf) with the evidence on disk; each P3 increment is verified live (or any miss logged, not glossed); `p4p5_replan.md` refreshes the P4/P5 arc grounded item-by-item in that evidence and sits `status: proposed` at the operator gate; the Berthier ruling sits `status: draft` for review. No `site/` change, no deploy, no push; the mission ends **before** any P4 building.

## AAR (2026-07-11 — measure + re-plan delivered in one session)

- **Worked:** The measure-before-re-plan gate ran clean end-to-end in one session — **T0** static (15 surfaces ×2vp ×2themes), **T1** interactive (**21/21 assertions pass**), **Lighthouse** (6 surfaces, **99–100** across Perf/A11y/BP/SEO). P3 verified live: nested-`<main>` **cleared both themes**, **68 rendered === 68 declared**, search/filter/rail/hero+graph deep-link twins/illustrative-labels/on-ramps all behave. Re-plan authored → **ratified (O4)**; Berthier ruling drafted. **Zero `site/` edits** — the planning→build boundary held.
- **Didn't (as planned):** Nothing failed. The one live gap — `zeta.aDNA` has no purpose line (1/68) — is the known Hestia `headline_mission` data-currency thread, not a P3 miss. (Minor: the T1 helper shipped with a placeholder typo, caught + fixed before the run.)
- **Finding:** The measure **sharpened two phases**, it didn't just confirm them. **P4 is comprehension/IA, not perf** (`what-is-adna` is Perf 100 / LCP 1.4 s despite 8492 chars). **P5's a11y/perf is de-risked** (axe cleared; perf 99–100 with green CWV) → M5.2 shrinks to hold-budget + OG + i18n-plan + legal/privacy. Grounding a re-plan in live perf/axe data moves scope, not just ratifies it.
- **Change (for next time):** A static (T0) pass alone would have missed that the *interactive* P3 features actually work. The **scripted-interaction T1 pass** (`scripts/p3_interactions.mjs`) + the Lighthouse summarizer (`scripts/lh_summarize.mjs`) are now the reusable measure tooling for any shipped client-side feature — keep them.
- **Follow-up:** **P4 authorized** → author `mission_p4_docs_ia` in a fresh session; **P5 provisional** (re-plan after P4 ships + is measured). Berthier ruling **held as draft** (operator — ratify/send later). Hestia data-currency (`headline_mission` 0/68, `zeta.aDNA`) non-blocking. **Push of the local commits stays operator-gated (SO-11).**

**Token budget:** estimated ~120 kT; **actual ≈ one session**, within envelope (no >2× drift). **Executor tier:** `opus` as planned (verify-live review + re-plan + a governance ruling).
