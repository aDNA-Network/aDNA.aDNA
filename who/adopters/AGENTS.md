---
type: directory_index
created: 2026-04-13
updated: 2026-05-26   # M5.2 bench expansion: 5 → 11 adopters (5 original_rosetta + 6 NEW p5_planned per M5.0 §4)
last_edited_by: agent_stanley
tags: [directory_index, adopter, m5_2_bench_expansion]
---

# who/adopters/ — Agent Guide

## What's Here

Adopter personas and deployment profiles — **11 total** at M5.2 close (5 original_rosetta + 6 NEW p5_planned). Archetypal user portraits that help the project understand its audiences — what they need, how they use aDNA, and what ontology extensions they typically create. Personas complement use cases (which are narrative) with structured profiles (which are reference). The M5.2 bench expansion adds 6 P5-planned adopter archetypes to address operator priorities at v8 P5 pivot (OSS maintainer + dev-tools designer + framework docs expert + community organizer + indie hacker + enterprise architect; per `m50_persona_bench_expansion.md`).

One file per adopter persona.

## Bench Inventory (11 total at M5.2 close)

| Category | Adopter | Primary Lens | File |
|---|---|---|---|
| original_rosetta | Solo Developer | actionability + relevance | [[adopter_solo_developer]] |
| original_rosetta | Educator | comprehension + explanation_quality | [[adopter_educator]] |
| original_rosetta | Enterprise Team | trust + relevance | [[adopter_enterprise_team]] |
| original_rosetta | Researcher | comprehension + trust | [[adopter_researcher]] |
| original_rosetta | Startup | actionability + delight | [[adopter_startup]] |
| **p5_planned (NEW M5.2)** | OSS Maintainer | trust + relevance + findability | [[adopter_oss_maintainer]] |
| **p5_planned (NEW M5.2)** | Dev-Tools Designer | actionability + visual_clarity | [[adopter_dev_tools_designer]] |
| **p5_planned (NEW M5.2)** | Framework Docs Expert | comprehension + explanation_quality | [[adopter_framework_docs_expert]] |
| **p5_planned (NEW M5.2)** | Community Organizer | relevance + delight | [[adopter_community_organizer]] |
| **p5_planned (NEW M5.2)** | Indie Hacker | actionability + conciseness | [[adopter_indie_hacker]] |
| **p5_planned (NEW M5.2)** | Enterprise Architect | trust + cognitive_load | [[adopter_enterprise_architect]] |

## Working Rules

- **Naming**: `adopter_{persona_name}.md` (underscores, lowercase). Note: M5.0 §5 listed P5-planned files as `persona_<role>.md`; operator-ratified at M5.2 entry (2026-05-26) to use `adopter_<role>.md` for consistency with existing 5 files.
- **Required frontmatter — pre-M5.2 shape**: `type: adopter`, `created`, `updated`, `status`, `persona_type` (individual | team | organization), `technical_level` (beginner | intermediate | expert), `domain`, `deployment_form` (bare | embedded), `last_edited_by`, `tags`.
- **Required frontmatter — M5.0 §4 template (M5.2 NEW p5_planned files)**: `type: adopter`, `created`, `updated`, `status`, `last_edited_by`, `category` ({original_rosetta | p5_planned}), `primary_lens`, `secondary_lens` (optional), `sample_questions` (array ≥ 3), `backgrounds` (array ≥ 2), `priorities` (array ≥ 2), `red_flags` (array ≥ 2), `tags` (array ≥ 3). Existing pre-M5.2 files may carry the lighter shape; future bench-wide schema unification at v8 P6 propagation.
- **Structure — pre-M5.2 shape**: Background → Goals → Pain Points → How They Use aDNA → Typical Ontology Extensions → Related Use Cases.
- **Structure — M5.0 §4 template**: Background → Goals → Pain Points → How They Use aDNA → Sample Questions → Scoring Considerations → Decadal Engagement → Related.
- **Cross-linking**: Link to M5.0 §3 (decadal allocation) + M5.1 §4 (empirical persona-binding) + relevant use cases, tutorials, concept files, and sibling persona files. Satisfies Project SO #10 (≥2 wikilinks).
- **Set audit trail**: Update `last_edited_by` and `updated` on every edit.

## Load/Skip Decision

**Load this directory when**:
- Creating adopter personas or audience profiles
- Tailoring documentation for a specific audience
- Designing onboarding paths for different user types
- Drawing personas for a decadal Q&A cycle (per [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_persona_bench_expansion|m50_persona_bench_expansion §3]])

**Skip when**:
- Technical concept work
- Operational execution

**Token cost**: ~400 tokens (this AGENTS.md after M5.2 expansion). Individual personas are ~800-1,500 tokens each. Full 11-adopter bench loaded: ~12 KB.

## Cross-References

- [[../reviewers/|who/reviewers/]] — the expertise counterpart to this directory (10 reviewer personas at M5.2 close)
- [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_persona_bench_expansion|m50_persona_bench_expansion]] — 21-persona bench design (§3 allocation + §4 template + §5 scope)
- [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m51_cross_target_synthesis|m51_cross_target_synthesis §4]] — empirical persona-binding aggregation across 8 OSS dossiers
