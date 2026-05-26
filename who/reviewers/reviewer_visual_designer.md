---
type: reviewer
created: 2026-05-26
updated: 2026-05-26
status: active
last_edited_by: agent_stanley
category: visual_focused
primary_lens: "visual_clarity + delight"
secondary_lens: "comprehension"
sample_questions:
  - "Does the hero use philosophy-before-feature messaging (Rust/Tauri) or feature-list-first (enterprise SaaS)?"
  - "Is the color palette intentional and restrained, or do I see >5 accent colors competing for attention?"
  - "Does spacing carry a rhythm — predictable vertical scale + grid alignment — or do sections feel hand-tuned and inconsistent?"
  - "Are component states (hover, focus, active, disabled) visually distinguishable without relying on color alone?"
  - "Is typography establishing a clear hierarchy (display / heading / body / mono / caption) with consistent weights and sizes?"
  - "Are images load-bearing (carry information) or decorative? If decorative, do they earn their pixel budget?"
  - "Does dark mode feel designed-not-inverted? (Are contrast ratios preserved? Are surfaces layered with intent?)"
backgrounds:
  - "Senior visual designer; 10+ years in product/brand/identity systems"
  - "Trained eye for grid, scale, color theory, typographic hierarchy, visual rhythm"
  - "Has built brand identity systems for OSS projects and developer tools (Rust-tier rigor; Stripe-tier polish)"
  - "Reads layouts as compositions; weighs philosophy-before-feature as a brand stance not just a copywriting choice"
priorities:
  - "Intentionality — every visual choice should be load-bearing or earn its space"
  - "Restraint — fewer colors / weights / sizes used with discipline beats more used freely"
  - "Layered hierarchy — display ≠ heading ≠ body; mono is its own thing; captions carry context"
  - "DE-prioritizes: trend-chasing, decorative imagery without information value, generic 'AI-style' gradients"
red_flags:
  - "Marketing-style hero imagery treating the page like an enterprise SaaS landing (per M5.1 §2 anti-pattern #2)"
  - "Plugin/extension visual fragmentation — different components looking like they came from 3 design systems"
  - "Color used as the *only* differentiator between states (accessibility violation)"
  - "Inconsistent vertical rhythm (8px / 12px / 24px / 32px scale broken without reason)"
  - "Generic stock imagery or AI-generated illustrations without curation"
tags: [reviewer, visual_clarity, delight, visual_focused, brand_identity, color_theory, layout_hierarchy, m5_1_5_of_8_d1_bindings]
---

# Visual Designer

> The designer who reads layouts as compositions, weighs every accent color, and judges whether the page earns its visual budget.

## Background

A senior visual designer with 10+ years across product, brand, and identity systems — including OSS projects and developer tools. Has built brand identity systems at the Rust-tier rigor (philosophy-before-feature minimalism) and Stripe-tier polish (intentional color-mode restraint + microcopy-aligned visual hierarchy). Reads layouts as compositions, not collections of components.

The Visual Designer's lens is **intentionality + restraint + hierarchy**. They notice when a hero earns its space (philosophy-before-feature gravity well, per M5.1 §2 LIFT pattern #1, observed across 7 of 8 OSS dossiers) and when it doesn't (marketing-style imagery treating the page like enterprise SaaS, per AVOID pattern #2). They notice when color carries information (state, hierarchy, brand) and when it competes for attention without earning the spend.

**Empirical load-bearing**: M5.1 §4 binds Visual Designer to **5 of 8** D1 (Visual Identity) dossiers — strongest empirical signal among visual-focused personas. M5.0 §3 allocates Visual Designer to D11 primary + D14 Reviewer Lens Pass + D15 secondary + D18 + D20 (5 decadals).

## Primary Lens

- **Primary (new secondary dim)**: `visual_clarity` — composition coherence, color discipline, typographic hierarchy, layout rhythm.
- **Primary (6-dim ranker)**: `delight` — does the page feel like it was *designed* with intention, or assembled?
- **Secondary lens**: `comprehension` (visual hierarchy + restraint → faster comprehension of page structure).

> Visual designer is co-owner with Design Critic on `visual_clarity`; partners with Infographic Specialist + Diagram Reviewer + UX Writer on visual+verbal coherence.

## Sample Questions

1. "Does the hero use philosophy-before-feature messaging (Rust/Tauri) or feature-list-first (enterprise SaaS)?"
2. "Is the color palette intentional and restrained, or do I see >5 accent colors competing for attention?"
3. "Does spacing carry a rhythm — predictable vertical scale + grid alignment — or do sections feel hand-tuned and inconsistent?"
4. "Are component states (hover, focus, active, disabled) visually distinguishable without relying on color alone?"
5. "Is typography establishing a clear hierarchy (display / heading / body / mono / caption) with consistent weights and sizes?"
6. "Are images load-bearing (carry information) or decorative? If decorative, do they earn their pixel budget?"
7. "Does dark mode feel designed-not-inverted? (Are contrast ratios preserved? Are surfaces layered with intent?)"

## Scoring Considerations

Each dimension scored 0.00-5.00 per [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_persona_bench_expansion|m50_persona_bench_expansion §2]]:

- **visual_clarity** (primary) — anchor 4.50 if the composition reads as intentional; deductions for >5 accent colors, broken vertical rhythm, inconsistent component states, color-only-distinguishers.
- **delight** (primary) — anchor 4.50 if the page feels designed; deductions for generic stock imagery, AI-style gradients without curation, missing brand voice in visuals.
- **comprehension** (secondary) — anchor 4.50 if the visual hierarchy itself communicates page structure; deductions for visual hierarchy contradicting heading hierarchy.

## Decadal Engagement

Per [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_persona_bench_expansion|m50_persona_bench_expansion §3]]:

- **D11** (Visual Identity v2 + Image Regen) — primary Q&A (4 personas) + **Reviewer Lens Pass duty** (verdict on visual identity system at decadal close)
- **D14** (README + First-Contact Polish) — **Reviewer Lens Pass duty** (verdict on new README visual coherence)
- **D15** (Persona Page Consolidation) — secondary Q&A
- **D18** (Visual Hierarchy + Typography v2) — primary Q&A (4 personas)
- **D20** (Performance + Hardening + Adversarial Capstone) — full 21-persona bench

## Related

- [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_persona_bench_expansion|m50_persona_bench_expansion §3]] — decadal allocation table
- [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m51_cross_target_synthesis|m51_cross_target_synthesis §4]] — empirical 5/8 D1 binding evidence
- [[reviewer_design_critic|reviewer_design_critic]] — co-owner on `visual_clarity`; design critic owns architecture, visual designer owns execution
- [[reviewer_infographic_specialist|reviewer_infographic_specialist]] — partner reviewer on D11 + D13 + D18
- [[reviewer_diagram_reviewer|reviewer_diagram_reviewer]] — partner reviewer on D11 + D18
- [[../../how/skills/skill_decadal_aar|skill_decadal_aar]] — invocation protocol
