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
  - "Token substrate decision executed: adopt the WebForge DTCG pipeline (site tokens compiled from the single source; tokyo_night seed + aDNA deltas) OR a formally pinned divergence with rationale in the wrapper"
  - "aDNA's art_direction.yaml entry authored (signature_element = the ruled program; anti_signature named) at the wrapper path per P5 schema"
  - "The first real aDNA VisualDNA bundle authored (schema v1.0) so the identity is reusable beyond hero PNGs"
verification_method: "gate-25/4d-class token checks + T0 captures of slot applications + ranker ≥4.0 + ADR-053 record"
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

## AAR (SO#5)

*(before completed)*
