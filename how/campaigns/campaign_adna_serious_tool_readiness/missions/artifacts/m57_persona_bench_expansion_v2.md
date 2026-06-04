---
type: artifact
artifact_class: persona_bench_expansion
created: 2026-06-03
updated: 2026-06-03
mission: mission_adna_str_p5_m57_adnalabs_expansion_planning_stub
campaign: campaign_adna_serious_tool_readiness
phase: 5
mission_number: 5.7
persona: rosetta
last_edited_by: agent_stanley
status: draft   # operator-ratified at the M5.7 gate; FILE AUTHORING deferred to a post-ratification mission (M5.2-style)
bench_before: 21
bench_after: 30
new_adopters: 5
new_reviewers: 4
tags: [persona_bench, expansion, m5_7, ecosystem_site, reviewers, adopters, agentic_context_democracy]
---

# M5.7 — Persona-Bench Expansion Design (21 → 30)

> **Design only** (Objective O5). The existing 21-persona bench is **docs-reader-centric** (5 core adopters + 7 extended adopters + 10 specialist reviewers — wait: 11 adopters + 10 reviewers = 21). The ecosystem pivot adds four actor classes the bench doesn't represent (marketplace publisher/consumer, lab/org steward, node operator, community-as-democracy lead) and three design lenses the reviewer bench lacks (brand-balance, motion, conversion). This artifact specifies **who to add, their lenses, and how they slot into the Reviewer Lens Pass + track routing.** Actual persona-file authoring (`who/adopters/*` + `who/reviewers/*` via `template_reviewer.md`) is a **post-ratification mission** (clone of M5.2), so this push stays planning/governance-only.

## Gap analysis

The seed brief (§5) flagged the docs-reader-centric gap. Mapping the 6 forward-face tracks to the current bench:
- **Track A (docs):** well covered (Framework Docs Expert, Content Strategist, IA, all 5 core adopters).
- **Track B (marketplace):** **no publisher or consumer lens.** Publishing FAIR/provenance/licensing and discovering/composing a graph are unrepresented journeys.
- **Track C (community/labs/org):** Community Organizer exists but is adoption/workshop-focused; **no org-steward or governance-lead lens.**
- **Track D (network):** Enterprise Architect partly covers infra; **no node-operator (federation/sync/compliance) lens.**
- **Track E (brand/positioning):** Design Critic + Visual Designer cover visuals; **no brand-strategist (the sleek↔revolutionary dial), motion (motion-without-slowdown), or conversion/funnel lens.**

## New ADOPTER personas (5) → `who/adopters/`

| # | Persona | Primary lens | Secondary | Owns the journey of… |
|---|---|---|---|---|
| 22 | **Marketplace Publisher** | trust | actionability | publishing a lattice/context-graph — FAIR, provenance, licensing, publish UX, attribution |
| 23 | **Marketplace Consumer** | findability | relevance | discovering / pulling / composing a context graph — search, quality signals, compose ergonomics |
| 24 | **Lab / Org Steward** | trust | cognitive_load | an org running aDNA at scale — governance + showcase + org identity (distinct from Enterprise Architect) |
| 25 | **Network / Node Operator** | actionability | trust | running an "aDNA computer" — federation, sync, compliance, node-onboarding clarity |
| 26 | **Community Lead** | relevance | delight | self-governance of the democracy — distinct from the adoption-focused Community Organizer |

## New REVIEWER personas (4) → `who/reviewers/`

| # | Persona | Primary lens | Secondary | Owns |
|---|---|---|---|---|
| 27 | **Brand Strategist** | trust | delight | the **concise-professional ↔ progressive-revolutionary dial** (~55/45 house value); catches marketing-bloat drift + positioning incoherence; co-owns the dial with Anti-Bloat Editor |
| 28 | **Motion Designer** | delight | visual_clarity | the **motion budget** (entrance/scroll-reveal only; meaningful-not-decorative; `prefers-reduced-motion`); flags motion harming perf/a11y |
| 29 | **Conversion / Growth Specialist** | actionability | relevance | **above-fold focus + CTA hierarchy + contribution/onboarding funnels** — without dark patterns |
| 30 | **Movement Skeptic** | trust | comprehension | "is this revolutionary-without-being-cringe? does the manifesto *earn* its claims?" — guards the Anthropic/Ethereum calibration; adversarial-capstone lens at E5 |

*(4 reviewers → bench 21 + 5 adopters + 4 reviewers = 30.)*

## Slotting into the Reviewer Lens Pass + track routing

Mechanism unchanged (`skill_decadal_aar` Step 4/4b): 3–5 personas per cycle Q&A; **full 30-persona bench scores at each decadal AAR ranker pass.** Track→persona routing (parallels the existing decadal→reviewer table):

| Track / decadal | Mandatory reviewers | Key adopters |
|---|---|---|
| **B / E2 Marketplace** | Conversion/Growth + Framework Docs Expert + Anti-Bloat | Marketplace Publisher + Consumer |
| **C / E3 Community/Org** | Brand Strategist + Content Strategist + Community Organizer | Community Lead + Lab/Org Steward |
| **D / E4 Network** | Information Architect + Diagram Reviewer | Node Operator + Enterprise Architect |
| **E / E1 Brand** | Brand Strategist + Motion Designer + Design Critic + Visual Designer | Newcomer + (all core adopters at AAR) |
| **E5 Capstone** | full bench + **Movement Skeptic** (adversarial) | full bench |

**Coverage rule preserved:** every persona appears in ≥2 decadals; the E5 capstone uses the full bench (matches D20 / Rosetta-D10). **Disagreement ladder** (from `skill_site_design_pipeline`): reviewer-vs-adopter → adopter ranker wins the gate, reviewer flag → next priority queue; reviewer-vs-reviewer → the [[front_page_doctrine]] is the tie-breaker; doctrine silent → operator escalation → resolution *becomes a new doctrine rule*.

## New dimensions these personas score

The three new ranker dimensions ([[m57_eseries_ecosystem_theme_set]] amended gate) are owned here: **Trust/Provenance** (Publisher + Consumer + Enterprise), **Participation Scent** (Conversion/Growth + Community Lead + Newcomer), **Network Legibility** (Node Operator + Diagram Reviewer + IA).

## Authoring spec (for the post-ratification mission)

Each new file follows `how/templates/template_reviewer.md` (reviewers) or the `who/adopters/adopter_<role>.md` shape: 6 M5.0-§4 frontmatter keys (primary_lens, secondary_lens, domain, …), 89–116 lines, 7–11 wikilinks, plain-language tagline (dual-audience), ≥1 concrete in-vault Example Audit Finding (self-reference). Ground each in the [[_reference_set]] (e.g., Movement Skeptic ← Anthropic/Ethereum calibration; Conversion/Growth ← NN/g above-fold + Val Town participation scent).

## Related

- [[m50_persona_bench_expansion]] — the 21-persona baseline this extends
- [[m57_eseries_ecosystem_theme_set]] — the decadal set these personas score
- [[skill_decadal_aar]] · [[skill_site_design_pipeline]] · [[front_page_doctrine]]
- `how/templates/template_reviewer.md` — authoring schema
