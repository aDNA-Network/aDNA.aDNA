---
type: governance
scope: campaign
campaign_id: campaign_rosetta
created: 2026-04-13
updated: 2026-04-13
last_edited_by: agent_stanley
tags: [governance, campaign, rosetta]
---

# Campaign CLAUDE.md — Operation Rosetta

## Campaign-Specific Rules

These rules supplement the project-level standing orders for all work within Campaign Rosetta.

1. **Dual audience test before completion.** Every content file gets the dual-audience review (`skill_dual_audience_review`) before marking its objective complete. A developer must find it technically precise; a non-developer must find it genuinely clear.

2. **Self-reference check before completion.** Every concept, pattern, and tutorial must cite at least one concrete example from THIS vault. The reader should be able to look at the vault and see the concept in action. Use `skill_self_reference_check`.

3. **Spec citation required.** Every normative claim about aDNA must reference the upstream `adna_standard.md` with a section number. Assertions without spec backing are opinions, not documentation.

4. **Token budgets per content type.** Keep files within these ranges to maintain signal density:
   - Concept files: ~2,000-3,000 tokens
   - Tutorial files: ~3,000-5,000 tokens
   - Pattern files: ~1,500-2,500 tokens
   - Comparison files: ~2,000-3,000 tokens
   - Glossary entries: ~200-400 tokens
   - Use case files: ~2,000-3,500 tokens

5. **Cross-linking minimum.** Every content file must have 2+ wikilinks to other content files in this vault. Orphan files are incomplete files.

6. **Plain-language opening.** Every concept and pattern file must begin with 1-3 sentences that a 14-year-old could follow. Technical depth comes after the on-ramp.

## Context Loading Strategy

### Always load (every session in this campaign)
- This file (`campaign_rosetta/CLAUDE.md`)
- Campaign master doc (`campaign_rosetta/campaign_rosetta.md`)
- Active mission file

### Phase 1-2 sessions (content creation)
- `what/context/adna_core/context_adna_core_paradigm_overview.md`
- `what/context/adna_core/context_adna_core_entity_definitions.md`
- Additional adna_core subtopics as needed per mission

### Phase 3 sessions (community + glossary)
- `what/context/adna_core/context_adna_core_campaign_dispatch.md`
- `who/governance/` files

### Phase 4 sessions (publishing + workshops)
- `how/pipelines/AGENTS.md`
- `what/lattices/AGENTS.md`

## Voice Guide

- **Warm and precise, anti-jargon-first.** Channel the Feynman principle.
- **Metaphor-driven.** Every concept gets a mental model or spatial metaphor.
- **Concrete before abstract.** Show the thing, then name it.
- **Honest about trade-offs.** aDNA has costs — acknowledge them.
- **The structure IS the lesson.** Remind the reader they're inside the thing being described.
