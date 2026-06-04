---
type: directory_index
created: 2026-04-23
updated: 2026-06-03   # M5.9 ecosystem expansion: 10 → 14 reviewers (+4 ecosystem_focused: Brand Strategist, Motion Designer, Conversion/Growth Specialist, Movement Skeptic; full bench 21 → 30). Prior: M5.2 expansion 5 → 10 (5 existing_specialist + 5 visual_focused per M5.0 §4)
last_edited_by: agent_stanley
tags: [directory_index, reviewer, m5_2_bench_expansion, m5_9_ecosystem_expansion]
---

# who/reviewers/ — Agent Guide

## What's Here

Reviewer personas — **14 total** at M5.9 close (5 existing_specialist + 5 visual_focused [M5.2] + 4 NEW ecosystem_focused [M5.9]). Archetypal specialist UX/design critics invoked during decadal AAR cycles to supplement the 5-adopter + 6 P5-planned-adopter ranker with an *expert lens*. Adopters represent **audience** ("does this work for my persona?"); reviewers represent **expertise** ("is this well-made, and would a stranger feel welcomed?"). One file per reviewer.

Reviewers are the answer to a gap surfaced in the 2026-04-23 UX heuristic audit (see [[ux_audit_2026_04_23]]): Lighthouse saturates at 100/100/100/100 and the persona ranker moved 4.0 → 4.70 across D1 + D2, yet Delight stayed flat at 4.0 — both automated gates and audience self-assessment miss the "is this well-made?" question that a trained reviewer would catch on first scan. The M5.2 bench expansion adds 5 visual_focused reviewers to address operator priorities at v8 P5 pivot (visual + clarity + conciseness + anti-bloat + explanation-quality push; per `m50_persona_bench_expansion.md`).

## Bench Inventory (14 total — 10 at M5.2 + 4 NEW ecosystem_focused at M5.9)

| Category | Reviewer | Primary Lens | File |
|---|---|---|---|
| existing_specialist | Accessibility Auditor | comprehension + cognitive_load | [[reviewer_accessibility_auditor]] |
| existing_specialist | Design Critic | visual_clarity + delight | [[reviewer_design_critic]] |
| existing_specialist | Content Strategist | comprehension + conciseness | [[reviewer_content_strategist]] |
| existing_specialist | Information Architect | findability + onboarding_scent | [[reviewer_information_architect]] |
| existing_specialist | Newcomer Stress-Tester | actionability + onboarding_scent | [[reviewer_newcomer_stress_tester]] (refreshed at M5.2 to M5.0 §4 template) |
| **visual_focused (NEW M5.2)** | Visual Designer | visual_clarity + delight | [[reviewer_visual_designer]] |
| **visual_focused (NEW M5.2)** | Infographic Specialist | explanation_quality + visual_clarity | [[reviewer_infographic_specialist]] |
| **visual_focused (NEW M5.2)** | Anti-Bloat Editor | conciseness + cognitive_load | [[reviewer_anti_bloat_editor]] |
| **visual_focused (NEW M5.2)** | UX Writer | conciseness + comprehension | [[reviewer_ux_writer]] |
| **visual_focused (NEW M5.2)** | Diagram Reviewer | visual_clarity + comprehension | [[reviewer_diagram_reviewer]] |
| **ecosystem_focused (NEW M5.9)** | Brand Strategist | trust + delight | [[reviewer_brand_strategist]] |
| **ecosystem_focused (NEW M5.9)** | Motion Designer | delight + visual_clarity | [[reviewer_motion_designer]] |
| **ecosystem_focused (NEW M5.9)** | Conversion/Growth Specialist | actionability + relevance | [[reviewer_conversion_growth_specialist]] |
| **ecosystem_focused (NEW M5.9)** | Movement Skeptic | trust + comprehension | [[reviewer_movement_skeptic]] |

> **Shape note (M5.9):** the 4 ecosystem_focused files follow the pre-M5.2 `reviewer_design_critic` shape (8-key frontmatter + Background → What They Evaluate → Critique Prompts → Primary Ranker Lens → Example Audit Finding → Related), explicitly permitted by the Working Rules below; a future pass may upgrade them to the M5.0 §4 13-key template. They ground their Example Audit Findings in the M5.8 reference set ([[../../what/exemplars/sites/_reference_set]]) + the [[../../what/design/front_page_doctrine|front-page doctrine]] rather than the 2026-04-23 audit.

## Working Rules

- **Naming**: `reviewer_{specialty_slug}.md` (underscores, lowercase, singular). Example: `reviewer_design_critic.md`.
- **Required frontmatter (M5.0 §4 template, M5.2-ratified)**: `type: reviewer`, `created`, `updated`, `status`, `last_edited_by`, `category` ({original_rosetta | existing_specialist | p5_planned | visual_focused}), `primary_lens`, `secondary_lens` (optional), `sample_questions` (array ≥ 3), `backgrounds` (array ≥ 2), `priorities` (array ≥ 2), `red_flags` (array ≥ 2), `tags` (array ≥ 3). Existing pre-M5.2 files may carry the lighter 8-key shape; new files (and the refreshed Newcomer Stress-Tester) follow the 13-key template.
- **Structure (M5.0 §4 template)**: Background → Primary Lens → Sample Questions → Scoring Considerations → Decadal Engagement → Related. Existing pre-M5.2 files may use the earlier Background → What They Evaluate → Critique Prompts → Primary Ranker Lens → Example Audit Finding → Related shape. Size target ~80-120 lines (~600-1,500 tokens).
- **Cross-linking**: Every file links to [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_persona_bench_expansion|m50_persona_bench_expansion §3]] (decadal allocation) + [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m51_cross_target_synthesis|m51_cross_target_synthesis §4]] (empirical persona-binding aggregation) + at least one sibling persona file. Satisfies Project SO #10 (≥2 wikilinks).
- **Self-reference**: Every file cites at least one concrete substrate evidence (M5.1 dossier finding, audit ID, vault example) the reviewer would flag. Satisfies Project SO #8.
- **Audit trail**: Update `last_edited_by` and `updated` on every edit.

## Ranker Dimensions (M5.0 §2 — 6 primary + 4 NEW secondary + 1 carry-forward parallel)

Reviewer files name any of these dimensions in `primary_lens` or `secondary_lens`:

| Dimension | Type | Owned by (load-bearing reviewers) | What it catches |
|-----------|------|----------|-----------------|
| `findability` | primary | Information Architect + OSS Maintainer | Discoverability + cross-link density + scan-affordance |
| `comprehension` | primary | Newcomer Stress-Tester + Framework Docs Expert + Diagram Reviewer + UX Writer | Whether content lands first-read |
| `actionability` | primary | Newcomer Stress-Tester + Dev-Tools Designer | Whether reader can *do* something with what they read |
| `trust` | primary | OSS Maintainer + Enterprise Architect | Governance + stability + security signaling |
| `relevance` | primary | Community Organizer + all adopters | Does this match the persona's needs? |
| `delight` | primary | Design Critic + Visual Designer + UX Writer | Does this feel intentional + alive? |
| `visual_clarity` | **NEW secondary (M5.0)** | Design Critic + Visual Designer + Infographic Specialist + Diagram Reviewer + Dev-Tools Designer | Composition coherence, color discipline, typographic hierarchy |
| `cognitive_load` | **NEW secondary (M5.0)** | Accessibility Auditor + Anti-Bloat Editor + Enterprise Architect + Newcomer Stress-Tester | Working-memory demand; concept stacking |
| `conciseness` | **NEW secondary (M5.0)** | Anti-Bloat Editor + UX Writer + Indie Hacker + Content Strategist | Word economy + redundancy detection |
| `explanation_quality` | **NEW secondary (M5.0)** | Framework Docs Expert + Infographic Specialist + Educator + Newcomer Stress-Tester | Does the explanation deliver an insight beyond rote restatement? |
| `onboarding_scent` | parallel (pre-M5.0) | Information Architect + Newcomer Stress-Tester | Whether the next click is predictable after a 60-second scan |

**Preservation clause**: the existing 6-dim primary ranker remains the hard gate for cycle advancement (4.0 threshold; capstone D20 ≥ 4.95). The 4 NEW secondary dimensions + 1 carry-forward parallel dimension report on a *parallel* scorecard. Reviewer scorecards inform priority queues and charter inputs; they never modify the 6-dim primary deltas. Full definitions land in [[../../how/skills/skill_decadal_aar|skill_decadal_aar]] Step 4b (Workstream C) and [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_persona_bench_expansion|m50_persona_bench_expansion §2]].

## Load/Skip Decision

**Load this directory when**:
- Running the Reviewer Lens Pass in a decadal AAR (mandatory on D4/D8/D9; optional on D5–D7, D10)
- Drafting a UX audit or design critique artifact
- Planning a cycle that targets visual polish, copy sharpening, or IA restructuring
- Onboarding a new contributor to the aDNA ranker vocabulary

**Skip when**:
- Pure content-authoring sessions (concept / tutorial / pattern writing)
- Operational work (missions, sessions, skill edits)
- Audience-targeting work (use [[who/adopters/|adopters]] instead)

**Token cost**: ~400 tokens (this AGENTS.md after M5.2 expansion). Individual reviewer files are ~600-1,500 tokens each. Full 10-reviewer bench loaded: ~10 KB.

## Invocation Cadence (M5.0-updated for v8 P5 100-cycle program)

- **Per-cycle Q&A**: 3-5 reviewers + adopters drawn per cycle from the M5.0 §3 per-decadal allocation table (varies by decadal theme).
- **Reviewer Lens Pass**: mandatory at D11 + D14 + D17 + D20 decadal closes (every 3rd decadal + final); produces the parallel reviewer scorecard.
- **Full 30-persona bench** (post-M5.9): invoked at the ecosystem **E6 capstone** (and the legacy D20 docs capstone) — Phase 5 exit gate readiness. Ecosystem decadal Reviewer Lens Pass cadence: D17 · E1 · E3 · E5 · E6 (per [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m57_eseries_ecosystem_theme_set|m57_eseries_ecosystem_theme_set]]).
- **Out of scope**: reviewers do not run at session SITREPs and do not gate individual cycle closure (per Project SO #1 phase-gates-are-human-gates).

## Cross-References

- [[../adopters/|who/adopters/]] — the audience counterpart to this directory (16 adopter personas at M5.9 close)
- [[../governance/|who/governance/]] — role definitions and escalation authority
- [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_persona_bench_expansion|m50_persona_bench_expansion]] — 21-persona bench design (§3 allocation + §4 template + §5 scope)
- [[../../how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m51_cross_target_synthesis|m51_cross_target_synthesis §4]] — empirical persona-binding aggregation across 8 OSS dossiers
- [[../../how/skills/skill_decadal_aar|skill_decadal_aar]] — where reviewers are invoked (Step 4b, Workstream C)
- [[../../how/skills/skill_iii_cycle|skill_iii_cycle]] — cycle protocol; reviewers inform Step 3 target selection
- [[../../how/templates/template_reviewer|template_reviewer.md]] — frontmatter + section skeleton (pre-M5.0 shape preserved for audit; M5.0 §4 template is the M5.2-ratified canonical shape)
- [[../../how/campaigns/campaign_rosetta/missions/artifacts/ux_audit_2026_04_23|ux_audit_2026_04_23]] — the artifact that motivated this entity type
