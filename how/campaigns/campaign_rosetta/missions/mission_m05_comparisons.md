---
type: plan
plan_id: mission_m05
campaign_id: campaign_rosetta
title: "M05 — Comparisons"
status: completed
phase: 1
created: 2026-04-14
updated: 2026-04-14
last_edited_by: agent_stanley
tags: [mission, rosetta, phase1, comparisons]
context_budget: "~10K tokens domain context + ~5K campaign context"
---

# Mission M05 — Comparisons

## Intent

Write 5 comparison files positioning aDNA against alternative knowledge architectures. Honest, fair, respectful — acknowledge strengths of each alternative while articulating what aDNA adds. Completes Phase 1 (Core Content).

## Objectives

| # | Objective | File | Status |
|---|-----------|------|--------|
| 1 | aDNA vs. PARA (Forte) | `what/comparisons/comparison_adna_vs_para.md` | completed |
| 2 | aDNA vs. Zettelkasten | `what/comparisons/comparison_adna_vs_zettelkasten.md` | completed |
| 3 | aDNA vs. Notion | `what/comparisons/comparison_adna_vs_notion.md` | completed |
| 4 | aDNA vs. Johnny.Decimal | `what/comparisons/comparison_adna_vs_johnny_decimal.md` | completed |
| 5 | aDNA vs. plain markdown | `what/comparisons/comparison_adna_vs_plain_markdown.md` | completed |

## Context Dependencies

- M01-M04 concepts and patterns — cross-linking targets and aDNA vocabulary
- Campaign CLAUDE.md — quality gates, tone (honest, not marketing)
- `what/comparisons/AGENTS.md` — directory conventions

## Quality Gates

Same 6 gates, adapted for comparisons:
1. Dual audience test — developer + non-developer legibility
2. Self-reference check — "See aDNA in action" pointing to vault
3. Spec citation — aDNA claims reference spec sections
4. Cross-linking — 2+ wikilinks to related concepts/patterns
5. Frontmatter complete — including `compared_to` and `categories`
6. Fair treatment — honest acknowledgment of where the alternative excels

## Dependencies

- M01-M03 (completed) — concept vocabulary for positioning
- M04 (completed) — pattern vocabulary for differentiation

## After-Action Review (AAR)

- **Worked**: The comparison template (Overview → Comparison Table → Where Each Excels → When to Choose → Sources) produced consistent, honest, scannable files. Each comparison naturally referenced 3+ concepts and patterns, building dense cross-links into the existing knowledge graph. The "Where X Excels" sections kept the tone fair — acknowledging genuine strengths of alternatives rather than marketing aDNA.
- **Didn't work**: Nothing blocked. The 5 comparisons were independent and could be written in any order.
- **Finding**: The comparisons reveal a clear positioning pattern: aDNA's differentiators cluster around agent support, typed knowledge, federation, and scale — while alternatives excel at simplicity, personal use, and low overhead. The vs. plain markdown comparison uncovered a useful "tipping point" framework (project size where aDNA overhead pays for itself) that could be reused in tutorials.
- **Change**: No process changes. Quality gates applied cleanly to the comparison template.
- **Follow-up**: Phase 1 is now complete (26/26 content files: 13 concepts, 8 patterns, 5 comparisons). Phase gate: user approval required before advancing to Phase 2 (tutorials and use cases).
