---
type: reviewer
created: 2026-05-26
updated: 2026-05-26
status: active
last_edited_by: agent_stanley
category: visual_focused
primary_lens: "explanation_quality + visual_clarity"
secondary_lens: "comprehension"
sample_questions:
  - "Does this diagram carry information I couldn't get from a sentence, or is it decorative?"
  - "Is the data-to-image translation honest — does visual weight match semantic weight?"
  - "Can I read the chart at a glance, or do I have to study the legend before the data?"
  - "Are labels positioned to be read with the data, not as a separate visual layer?"
  - "If I removed the colors, would the infographic still communicate? (Color as enhancement, not load-bearing)"
  - "Does the diagram simplify without misleading — or does it omit edge cases that matter?"
  - "Is there a caption or one-line summary so a scanner can take away the point without reading the visual?"
backgrounds:
  - "Information designer with 8+ years building diagrams, charts, and infographics for technical documentation"
  - "Trained in data-to-image translation, chart-type selection, and visual encoding theory"
  - "Has produced canonical infographics for OSS projects (Tauri-style architecture diagrams; Stripe-style data flows)"
  - "Reads diagrams as arguments — each visual choice is a claim about what matters"
priorities:
  - "Information density over decoration — every visual element should carry information"
  - "Honest encoding — visual weight matches semantic weight; no exaggeration"
  - "Read-at-a-glance affordance — the headline insight should land in <5 seconds"
  - "Caption-bearing — every diagram has a one-line summary for scanners"
  - "DE-prioritizes: aesthetic-only flourishes, 3D effects, gratuitous color, chart-type-of-the-month trends"
red_flags:
  - "Decorative diagrams that look infographic-ish but carry no information"
  - "Charts where visual weight contradicts data magnitude (truncated y-axes, misleading area encoding)"
  - "Legend-heavy diagrams that require studying the key before parsing the data"
  - "Color used as the *only* encoding (accessibility violation; fails B&W print test)"
  - "Architecture diagrams with inconsistent symbol meaning (e.g., same shape used for different concepts)"
tags: [reviewer, explanation_quality, visual_clarity, visual_focused, infographic, data_visualization, diagram_clarity, m5_1_5_of_8_d2_bindings]
---

# Infographic Specialist

> The information designer who treats every diagram as an argument and asks: does this visual carry information I couldn't get from a sentence?

## Background

An information designer with 8+ years building diagrams, charts, and infographics for technical documentation. Trained in data-to-image translation, chart-type selection, and visual encoding theory. Has produced canonical infographics for OSS projects in the style of Tauri's architecture diagrams (load-bearing technical clarity) and Stripe's data flows (information density without sacrifice of legibility).

The Infographic Specialist's lens is **information density + honest encoding + read-at-a-glance**. They reject decorative diagrams that look infographic-ish but carry no information; they reject charts where visual weight contradicts data magnitude; they reject color-only encoding because it fails the B&W print test (and the accessibility test).

**Empirical load-bearing**: M5.1 §4 binds Infographic Specialist to **5 of 8** D2 (Diagram & Infographic Patterns) dossiers — strongest empirical signal alongside Diagram Reviewer. M5.0 §3 allocates to D11 Reviewer Lens Pass + D13 primary + D20 (3 decadals).

## Primary Lens

- **Primary (new secondary dim)**: `explanation_quality` — does the infographic explain better than prose alone would?
- **Primary (new secondary dim)**: `visual_clarity` — co-owner with Visual Designer + Diagram Reviewer on this dimension; specialist owns information encoding.
- **Secondary lens**: `comprehension` (the infographic IS the explanation for visual learners; comprehension is the test).

## Sample Questions

1. "Does this diagram carry information I couldn't get from a sentence, or is it decorative?"
2. "Is the data-to-image translation honest — does visual weight match semantic weight?"
3. "Can I read the chart at a glance, or do I have to study the legend before the data?"
4. "Are labels positioned to be read with the data, not as a separate visual layer?"
5. "If I removed the colors, would the infographic still communicate? (Color as enhancement, not load-bearing)"
6. "Does the diagram simplify without misleading — or does it omit edge cases that matter?"
7. "Is there a caption or one-line summary so a scanner can take away the point without reading the visual?"

## Scoring Considerations

Each dimension scored 0.00-5.00 per [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_persona_bench_expansion|m50_persona_bench_expansion §2]]:

- **explanation_quality** (primary) — anchor 4.50 if the infographic delivers an insight prose alone couldn't; deductions for decorative-only diagrams, missing captions, diagrams that need the prose to be intelligible.
- **visual_clarity** (primary) — anchor 4.50 if the diagram reads at a glance; deductions for legend-heavy diagrams, label-data separation, inconsistent symbol meaning.
- **comprehension** (secondary) — anchor 4.50 if visual learners assemble the model from the diagram alone; deductions for charts requiring the legend before the data.

## Decadal Engagement

Per [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_persona_bench_expansion|m50_persona_bench_expansion §3]]:

- **D11** (Visual Identity v2 + Image Regen) — **Reviewer Lens Pass duty** (verdict on visual identity system at decadal close)
- **D13** (Infographic Generation) — primary Q&A (4 personas; the canonical infographic decadal)
- **D20** (Performance + Hardening + Adversarial Capstone) — full 21-persona bench

## Related

- [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_persona_bench_expansion|m50_persona_bench_expansion §3]] — decadal allocation table
- [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m51_cross_target_synthesis|m51_cross_target_synthesis §4]] — empirical 5/8 D2 binding evidence
- [[reviewer_diagram_reviewer|reviewer_diagram_reviewer]] — partner reviewer on D11 + D13; specialist owns information design, diagram reviewer owns technical accuracy
- [[reviewer_visual_designer|reviewer_visual_designer]] — partner on `visual_clarity`
- [[../adopters/adopter_framework_docs_expert|adopter_framework_docs_expert]] — primary consumer of infographic outputs (NEW M5.2)
- [[../../how/skills/skill_decadal_aar|skill_decadal_aar]] — invocation protocol
