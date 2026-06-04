---
type: mission
mission_id: mission_adna_str_p5_m510_e1_brand_positioning
campaign: campaign_adna_serious_tool_readiness
phase: 5
mission_number: 5.10
decadal: E1
slug: e1_brand_positioning
created: 2026-06-03
updated: 2026-06-03
opens_at: 2026-06-03
opened_session: session_stanley_20260604T014130Z_v8_m510_e1_homepage_brand
closed_at: 2026-06-04
closed_session: session_stanley_20260604T181005Z_v8_m510_e1_decadal_close
status: completed
estimated_sessions: 2-3   # E1 decadal: design (Stages 0-4) + build (Stage 5 III cycles) + AAR/RLP
actual_sessions: 4   # homepage_brand + continue + hero_gen + reskin_deploy + decadal_close (the ADR-032 mid-mission pivot added the hero-gen + reskin sessions)
persona: rosetta
last_edited_by: agent_stanley
spec_completeness: full
mission_class: implementation   # FIRST ecosystem build mission; enters site/ code (after Stage-0 gate)
verification_surface: build   # Astro build + Lighthouse + Playwright + Reviewer Lens Pass
token_budget_estimated: "design (this) ~40-60 kT; build decadal ~150-250 kT across 2-3 sessions"
reviewer_lens_pass: true   # E1 is an RLP decadal (D17·E1·E3·E5·E6 cadence)
prerequisite_missions:
  - mission_adna_str_p5_m57_adnalabs_expansion_planning_stub   # ratified re-scope + dial + ethos
  - mission_adna_str_p5_m58_reference_design_dna   # the doctrine this builds to
  - mission_adna_str_p5_m59_ecosystem_persona_bench   # the 30-persona MAX-III bench
prerequisite_artifacts:
  - aDNA.aDNA/what/design/front_page_doctrine.md
  - aDNA.aDNA/what/design/narrative_ethos_public_good.md
  - aDNA.aDNA/what/exemplars/sites/_reference_set.md
  - aDNA.aDNA/site/src/content/reference/visual-identity-v2.mdx
tags: [mission, m5_10, e1, v8, p5, implementation, homepage, brand, positioning, manifesto_hero, ecosystem_site, max_iii]
---

# Mission M5.10 / E1 — Brand & Positioning (homepage re-frame)

> The first ecosystem **build** mission and the first E-decadal. Re-frames the homepage from docs-first ("An Integrated Standard for Context and Knowledge") to the **Agentic Context Democracy** manifesto + 5 sections, at the ratified **~55/45** dial, with the [[narrative_ethos_public_good|public-good ethos]] threaded subtly. Folds D18 (Visual Hierarchy & Typography v2) into a brand-system v3. Runs [[skill_site_design_pipeline]]: **Stages 0–4 design (this session) → operator sign-off → Stage 5 build III cycles → Stage 6 measure → Stage 7 Reviewer Lens Pass (30-persona) → Stage 8 iterate**.

## Objectives

1. **O1 — Stages 0–4 design spec** (this session; no `site/` edits): the E1 homepage design — hero copy directions + the 5-section content + brand-system v3 deltas + per-cycle plan. Deliverable: [[m510_e1_homepage_design_spec]]. **Gate:** operator ratifies the hero copy + section plan (Stage-0 positioning gate).
2. **O2 — Stage 5 build** (post-sign-off): implement the homepage in Astro (extend HomeHero + section components + `home.ts` + tokens; brand-system v3 deltas to `visual-identity-v2`); honor the doctrine (above-fold law, 5±1 sections, density bands, motion budget, decision table). Per-cycle commits + III result JSONs.
3. **O3 — Stage 6 measure**: Lighthouse (Perf 100 / reduced-motion honored) + Playwright gates on the new homepage; before/after.
4. **O4 — Stage 7 Reviewer Lens Pass** (E1 is an RLP decadal): full 30-persona bench, mandatory Brand Strategist + Motion Designer + Design Critic + Visual Designer + Newcomer; per-track ranker toward ≥4.95.
5. **O5 — E1 decadal AAR** + STATE/STR close cascade.

## Hard constraints

- **Stage-0 gate first:** no `site/` code until the operator ratifies the hero copy + section plan.
- Honor the locked brand doctrine ("aDNA the network runs on the Lattice Protocol"); rename nothing (S8 KEEP).
- Doctrine compliance: ONE above-fold focus; 5±1 sections; ≤2 fighting colors; motion entrance/scroll-reveal only + `prefers-reduced-motion`; no marketing adjectives (writing-guidelines AVOID).
- Ethos **subtle, front of mind** — shown not preached (Movement Skeptic + Brand Strategist guard).
- Image-gen ≤ explicit cap; reuse-first; abstract-only guardrails (visual-identity-v2 §4).
- Engine files (`skill_iii_cycle`/`skill_decadal_aar`) unedited; archive-never-delete.

## Pivot note (2026-06-04, mid-mission)

The operator set the **SS Ghibli-pixel brand pivot** ([[adr_032_brand_register_pivot]] `status: proposed`; brief [[redesign_direction_ss_ghibli_pivot]]). This **supersedes the abstract-only image guardrail** above (Hard constraint 5 / visual-identity-v2 §4) for E1 going forward — illustrative SS-Ghibli pixel imagery is now in-scope (the broad reskin is gated on ADR-032 ratification). **Cycle 146** (session `…T065020Z_v8_m510_e1_hero_gen`) delivered the first instance: the image-led **"The aDNA Network"** hero (Imagen 4 Ultra; multi-agent 5-persona review; winner D4 isometric connected-vaults) + live Space-Grotesk-Bold title in `HomeHero.astro` (build PASS, **not deployed**). On ADR-032 ratify, cycles 7–10 execute the reskin in the new register; O4 RLP (30-persona) + O5 decadal AAR close E1.

## Lightweight/decadal AAR (filled at decadal close; full RLP per E1)

- **Worked**: The manifesto re-frame + ADR-032 Tokyo Night SS-Ghibli reskin shipped live with Perf 100 / 56-56 gates / axe 0 AA both modes; the design/brand/visual reviewers (Design Critic 4.5, Brand Strategist 4.5, Visual Designer 4.83) all approve — E1's actual remit landed. The full **30-persona RLP run as a parallel Workflow** produced a decomposable, honest signal in ~3 min.
- **Didn't**: Adopter ranker 4.19 sits below the 4.95 multi-track gate — but that gate is a D20/E6 SITE+REPO exit condition, not a single-decadal gate (D11=4.5, D14=4.75). The two low dims (actionability 3.63, relevance 3.81) are dominated by **deliberately deferred scope** (join CTA→E4, marketplace→E2, public-good proof→E5), not brand defects. Also: a homepage-only axe check at cycle 147 missed 2 dark-mode contrast misses the full gate suite caught.
- **Finding**: A decadal can close **honestly below the phase-exit gate** when the shortfall is deferred-scope, not defects — the RLP *prices* the deferral and writes the next epics' priority queues. And: `:global(.dark)` is invalid in a plain `.css` file (silently dropped) — run the FULL gate suite at every decadal close, not homepage-only axe.
- **Change**: Adopt the **full-bench RLP-via-Workflow** as the standard MAX-III review mechanism for E-series decadals; codify "full gate suite at decadal close" as discipline.
- **Follow-up**: E1 RLP priority queue → E4 (join/governance) + E2 (marketplace affordances) + E3 (community/org) + E5 (public-good proof); fast-follow bucket (NetworkDiagram contrast, light-mode hero, How-it-Works density, mobile target-size, operator-gated hero concrete-clause). #needs-human: rotate `SS_VERCEL_TOKEN`. Full detail: [[aar_decadal_e1_brand_positioning]].

## Mission Close Notes (2026-06-04)

E1 **CLOSED** at the decadal-close session (`session_stanley_20260604T181005Z_v8_m510_e1_decadal_close`). 8 build cycles (141-148) + decadal close (149); cycle 9 (breadth-first nav) deferred by operator. O1-O5 all discharged: O1 design spec ratified (Direction A); O2 build (manifesto re-frame + ADR-032 reskin, deployed live); O3 measure (Lighthouse Perf 100 ×5 / 56-56 gates / axe 0 AA both modes); O4 **full 30-persona RLP** (adopter 4.19 / full-30 4.29 / 0 rejects; all 6 mandatory lenses approve); O5 decadal AAR + this close. Polish folded at cycle 148 (Ultra section heroes + `front_page_doctrine` §1/§4 + Mermaid/OG verify + 2 a11y fixes). **Next mover: E4 aDNANetwork** (least-gated). Artifacts: [[aar_decadal_e1_brand_positioning]] + [[rlp_e1_30persona_results]] + cycle JSONs 141-149.
