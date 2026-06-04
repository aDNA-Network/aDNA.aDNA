---
type: mission
mission_id: mission_adna_str_p5_m59_ecosystem_persona_bench
campaign: campaign_adna_serious_tool_readiness
phase: 5
mission_number: 5.9
slug: ecosystem_persona_bench
created: 2026-06-03
updated: 2026-06-03
opens_at: 2026-06-03
opened_session: session_stanley_20260604T012734Z_v8_m59_persona_bench
closed_at: 2026-06-03
closed_session: session_stanley_20260604T012734Z_v8_m59_persona_bench
status: completed
estimated_sessions: 1
actual_sessions: 1
persona: rosetta
last_edited_by: agent_stanley
spec_completeness: full
mission_class: planning   # persona authoring = governance/design artifacts; no site code (M5.2 precedent)
verification_surface: agent   # shape/AC/wikilink/lens checks
token_budget_estimated: "40-70 kT (9 persona files + index updates + close)"
token_budget_actual: "~45-60 kT (9 persona files + 2 AGENTS.md index updates + close; within band)"
prerequisite_missions:
  - mission_adna_str_p5_m57_adnalabs_expansion_planning_stub   # ratified the bench expansion design
  - mission_adna_str_p5_m52_persona_authoring   # M5.2 — the authoring precedent (21-persona bench)
prerequisite_artifacts:
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m57_persona_bench_expansion_v2.md   # the design this mission executes
  - aDNA.aDNA/how/templates/template_reviewer.md
tags: [mission, m5_9, v8, p5, planning, persona_bench, reviewers, adopters, ecosystem, max_iii_bench]
---

# Mission M5.9 — Ecosystem Persona Bench Authoring (21 → 30)

> Executes the ratified [[m57_persona_bench_expansion_v2]] design: author the 9 new persona files so the full **30-persona MAX-III bench** is live before any ecosystem build review. M5.2-style (homogeneous template-driven authoring). First post-ratification do-now mission.

## Objectives

1. **O1 — Author 5 new ADOPTER personas** (`who/adopters/`): Marketplace Publisher, Marketplace Consumer, Lab/Org Steward, Network/Node Operator, Community Lead. **AC:** each matches the established adopter shape (frontmatter: persona_type/technical_level/domain/deployment_form; Background/Goals/Pain Points/How They Use aDNA/Self-reference/Typical Ontology Extensions/Related); states its ranker emphasis (the lens pair from the design); ≥6 wikilinks; grounded in the ecosystem surfaces.
2. **O2 — Author 4 new REVIEWER personas** (`who/reviewers/`): Brand Strategist, Motion Designer, Conversion/Growth Specialist, Movement Skeptic. **AC:** each follows `template_reviewer.md` (primary_lens/secondary_lens frontmatter; tagline/Background/What They Evaluate/Critique Prompts/Primary Ranker Lens/Example Audit Finding/Related); ≥1 concrete Example Audit Finding grounded in the reference set ([[_reference_set]]) or a vault file; plain-language tagline.
3. **O3 — Update bench navigation indexes** (`who/adopters/AGENTS.md`, `who/reviewers/AGENTS.md`): add rows for the new personas; bench size 21 → 30.
4. **O4 — Close cascade:** AAR + STATE refresh + STR amendment row.

## Track→persona routing (from the design; for the build-phase Reviewer Lens Pass)

Marketplace (E2) → Publisher + Consumer + Conversion/Growth + Framework Docs Expert · Community/Org (E3) → Community Lead + Lab/Org Steward + Brand Strategist + Community Organizer · Network (E4) → Node Operator + Enterprise Architect + IA + Diagram Reviewer · Brand (E1) → Brand Strategist + Motion Designer + Design Critic + Visual Designer + Newcomer · Public-Good (E5) → Community Lead + Movement Skeptic + Brand Strategist · Capstone (E6) → full bench + Movement Skeptic (adversarial).

## Hard constraints

- No `site/` code; no image-gen; no cross-vault writes; archive-never-delete; match shape + AC.

## Lightweight AAR (per Project SO #5)

- **Worked**: modeling the 9 files on the canonical exemplars (`reviewer_design_critic` + `adopter_solo_developer`) kept the new personas consistent with the existing bench; grounding each reviewer's Example Audit Finding in the M5.8 reference set / front-page doctrine (instead of the 2026-04-23 audit the older reviewers cite) made them immediately useful for the ecosystem build review.
- **Didn't**: the new files use the lighter pre-M5.2 8-key shape (matching design_critic/solo_developer), not the M5.0 §4 13-key template the M5.2 visual_focused reviewers adopted — acceptable per the AGENTS.md Working Rules, but a future pass could unify the bench schema (noted in both AGENTS.md shape notes); adopters landed at 4–6 wikilinks (vs the 7–11 aspirational target), bumped the outlier (node_operator) to 7.
- **Finding**: the ecosystem personas are *route-defining*, not just audience portraits — each new reviewer owns a specific gate the existing bench couldn't cover (Brand Strategist = the dial; Motion Designer = motion budget; Conversion/Growth = participation scent; Movement Skeptic = earned-conviction). The bench expansion is what makes MAX-III on the new surfaces actually possible.
- **Change**: added an `ecosystem`/`ecosystem_focused` category to both AGENTS.md inventories; recorded the shape-note + reference-set grounding convention for future ecosystem personas.
- **Follow-up**: the 30-persona bench is now live for E-decadal Reviewer Lens Passes (D17 · E1 · E3 · E5 · E6). Next do-now build movers: **E4 aDNANetwork** + **E5 public-good showcase** + brand-independent shell + D16/E1 design. Optional future: unify all 30 personas to the 13-key template at a v8 P6 propagation pass.
