---
type: artifact
artifact_class: persona_bench_expansion_design
created: 2026-05-25
updated: 2026-05-25
mission: mission_adna_str_p5_m50_p5_entry_planning
campaign: campaign_adna_serious_tool_readiness
phase: 5
mission_number: 5.0
session: session_stanley_20260525T195508Z_v8_m50_s1
persona: rosetta
last_edited_by: agent_stanley
status: ratified
total_personas: 21
original_rosetta_personas: 5
existing_specialist_reviewers: 5
new_p5_planned_personas: 6
new_visual_focused_personas: 5
total_dimensions: 10
primary_dimensions: 6
secondary_dimensions: 4
related_decadal_theme_set: aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_decadal_theme_set.md
related_visual_methodology: aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_visual_inspection_methodology.md
authoring_responsibility: M5.2_owns_11_new_persona_files   # 6 P5-planned + 5 visual = 11 NEW persona files authored at M5.2
tags: [persona_bench_expansion, 21_personas, m50, v8, p5, public_readiness, visual_inspection, 10_dimensions, 6_primary_4_secondary, rosetta_inheritance_5_personas_plus_5_specialists, p5_planned_6_personas, visual_focused_5_personas, m52_authoring_target]
---

# M5.0 D4 — 21-Persona Bench Expansion Design

> Roster + per-decadal allocation + scoring rubric for the expanded persona bench that will drive v8 P5's 100-cycle improvement program (D11-D20). 21 personas across 4 categories. M5.0 designs the bench; M5.2 authors the 11 NEW persona files (6 P5-planned + 5 visual). Filed at M5.0 close 2026-05-25.

## §1 Roster

### Category 1 — 5 Original Rosetta Adopter Personas (`who/adopters/`)

Inherited from Rosetta Phase 7 (ranker baseline 4.00 → 5.00 ceiling at D10). Adopter archetypes representing real-world use cases.

| # | Persona | Domain | Primary lens | File status |
|---|---|---|---|---|
| 1 | **Solo Dev** | Individual developer; agent-curious; building side projects | Findability + Actionability | EXISTS (Rosetta inheritance) |
| 2 | **Educator** | Teacher/instructor; team-building; training developers | Comprehension + Explanation Quality | EXISTS (Rosetta inheritance) |
| 3 | **Enterprise** | Org deployment; compliance; scale; multi-team | Trust + Relevance | EXISTS (Rosetta inheritance) |
| 4 | **Researcher** | Academic/research focus; spec-citation-heavy; rigor | Trust + Comprehension | EXISTS (Rosetta inheritance) |
| 5 | **Startup** | Fast-moving product team; MVP-focused; ergonomic | Actionability + Delight | EXISTS (Rosetta inheritance) |

### Category 2 — 5 Existing Specialist Reviewers (`who/reviewers/`)

Inherited from Rosetta D4+ (specialist reviewer Lens Pass introduced at D4 Visual Identity & First-Contact decadal).

| # | Persona | Domain | Primary lens | File status |
|---|---|---|---|---|
| 6 | **Accessibility Auditor** | WCAG 2.1 AA compliance; screen-reader UX; keyboard nav; color contrast | Comprehension + Cognitive Load | EXISTS at `who/reviewers/reviewer_accessibility_auditor.md` |
| 7 | **Design Critic** | Brand identity; visual hierarchy; typography; spacing; color theory | Visual Clarity + Delight | EXISTS at `who/reviewers/reviewer_design_critic.md` |
| 8 | **Content Strategist** | Information architecture; narrative arc; tone; voice consistency | Comprehension + Findability | EXISTS at `who/reviewers/reviewer_content_strategist.md` |
| 9 | **Information Architect** | Site structure; navigation; sitemap; user flow | Onboarding Scent + Findability | EXISTS at `who/reviewers/reviewer_information_architect.md` |
| 10 | **Newcomer Stress-Tester** | First-30-seconds experience; jargon detection; assumption check | Cognitive Load + Explanation Quality | EXISTS at `who/reviewers/reviewer_newcomer_stress_tester.md` |

### Category 3 — 6 NEW P5-Planned Personas (`who/adopters/` extension; M5.2 authors)

Per campaign master M5.2 row — represents external-source-pulled adoption profiles for community-readiness phase.

| # | Persona | Domain | Primary lens | File status |
|---|---|---|---|---|
| 11 | **OSS Maintainer** | Open-source project lead; community moderation; contributor experience; release cadence | Trust + Relevance + Findability | **NEW (M5.2 authors)** |
| 12 | **Dev-Tools Designer** | CLI UX; developer ergonomics; configuration discoverability; error messaging | Actionability + Visual Clarity | **NEW (M5.2 authors)** |
| 13 | **Framework Docs Expert** | API reference structure; tutorial pedagogy; example quality; reference vs guide distinction | Comprehension + Explanation Quality | **NEW (M5.2 authors)** |
| 14 | **Community Organizer** | Discord/Slack community building; event organization; contributor onboarding; cultural stewardship | Relevance + Delight | **NEW (M5.2 authors)** |
| 15 | **Indie Hacker** | Solopreneur ergonomics; minimal-config preference; "show me how to ship" mindset | Actionability + Conciseness | **NEW (M5.2 authors)** |
| 16 | **Enterprise Architect** | Multi-team coordination; governance frameworks; compliance integration; risk management | Trust + Cognitive Load | **NEW (M5.2 authors)** |

### Category 4 — 5 NEW Visual-Focused Personas (`who/reviewers/` extension; M5.2 authors)

NEW at M5.0 amendment — represents the visual inspection focus added per operator pivot 2026-05-25.

| # | Persona | Domain | Primary lens | File status |
|---|---|---|---|---|
| 17 | **Visual Designer** | Brand identity; color theory; layout hierarchy; visual rhythm; spacing | Visual Clarity + Delight | **NEW (M5.2 authors)** |
| 18 | **Infographic Specialist** | Information visualization; data-to-image translation; diagram clarity; chart legibility | Explanation Quality + Visual Clarity | **NEW (M5.2 authors)** |
| 19 | **Anti-Bloat Editor** | Conciseness; redundancy detection; content trimming; word-economy; ruthless cuts | Conciseness + Cognitive Load | **NEW (M5.2 authors)** |
| 20 | **UX Writer** | Microcopy; tone calibration; scan-affordance; CTA labels; error messages | Conciseness + Comprehension | **NEW (M5.2 authors)** |
| 21 | **Diagram Reviewer** | Technical diagram quality; accuracy; legibility; symbol consistency; semantic precision | Visual Clarity + Comprehension | **NEW (M5.2 authors)** |

## §2 Scoring Rubric — 10 Dimensions (6 Primary + 4 Secondary)

### Primary Dimensions (6; inherited from Rosetta)

Each persona scores each cycle output 0.00-5.00 on these 6 dimensions:

| # | Dimension | Definition | Primary persona lenses |
|---|---|---|---|
| 1 | **Findability** | Can the user find what they're looking for quickly? Navigation + search + cross-linking | Solo Dev + IA + OSS Maintainer + Content Strategist |
| 2 | **Comprehension** | Does the user understand the content? Clarity of explanation + jargon level | Educator + Newcomer + Framework Docs Expert + Researcher |
| 3 | **Actionability** | Can the user act on the information? CTAs + next steps + concrete examples | Startup + Solo Dev + Indie Hacker + Dev-Tools Designer |
| 4 | **Trust** | Is the user confident this is correct + maintained + production-ready? Spec citations + recency + author credibility | Enterprise + Researcher + Enterprise Architect + OSS Maintainer |
| 5 | **Relevance** | Is the content relevant to the user's role + use case? Persona-appropriate framing | Enterprise + Community Organizer + all adopter personas |
| 6 | **Delight** | Does the experience feel polished + thoughtful + enjoyable? Visual polish + microcopy + flow | Startup + Design Critic + Visual Designer + UX Writer |

### Secondary Dimensions (4; NEW per operator priorities 2026-05-25)

| # | Dimension | Definition | Primary persona lenses |
|---|---|---|---|
| 7 | **Visual Clarity** | Is the visual design clear + uncluttered + hierarchical? Color + spacing + typography + layout | Design Critic + Visual Designer + Infographic Specialist + Diagram Reviewer + Dev-Tools Designer |
| 8 | **Cognitive Load** | Is the page easy to process? Density + complexity + density of new info | Newcomer + Accessibility Auditor + Anti-Bloat Editor + Enterprise Architect |
| 9 | **Conciseness** | Is the content tight? No redundancy + no padding + every word earns its place | Anti-Bloat Editor + UX Writer + Indie Hacker + Content Strategist |
| 10 | **Explanation Quality** | Is the explanation good? Examples + diagrams + analogies + scaffolding | Educator + Framework Docs Expert + Infographic Specialist + Newcomer |

### Score Aggregation

- **Per-persona per-cycle score**: 10 dimensions × 0.00-5.00 = single numeric per persona per cycle
- **Per-cycle aggregate score**: mean of all 10 dimensions across all participating personas (3-5 personas per cycle)
- **Per-decadal aggregate score**: mean of all 10 cycles in decadal across all participating personas
- **Per-decadal AAR ranker score**: mean of all 21 personas (full bench at AAR) × 10 dimensions = single decadal-close score
- **Phase 5 exit gate**: per-decadal-AAR ranker score ≥ 4.95 at D20 close across SITE + REPO

## §3 Per-Decadal Persona Allocation

Allocations from M5.0 D3 (10-decadal theme set). Each decadal cycle Q&A draws 3-5 personas from the allocated list; full 21-persona bench scores at decadal AAR ranker pass.

| Decadal | Theme | Primary 4 personas (Q&A) | Secondary 1-2 personas (optional Q&A) | Reviewer Lens Pass personas (decadal close only) |
|---|---|---|---|---|
| **D11** | Visual Identity v2 + Image Regen | Design Critic + Visual Designer + Newcomer + Accessibility Auditor | Diagram Reviewer | Same 4 + Infographic Specialist (verdict on visual identity system) |
| **D12** | Clarity & Conciseness | Anti-Bloat Editor + Content Strategist + Newcomer + UX Writer | Indie Hacker | — (no Reviewer Lens Pass) |
| **D13** | Infographic Generation | Infographic Specialist + Educator + Researcher + Diagram Reviewer | Visual Designer | — (no Reviewer Lens Pass) |
| **D14** | README + First-Contact Polish | OSS Maintainer + Indie Hacker + Newcomer + Content Strategist | UX Writer | Same 4 + Visual Designer + Solo Dev (verdict on new README) |
| **D15** | Persona Page Consolidation | IA + Solo Dev + Educator + Enterprise Architect | Visual Designer | — (no Reviewer Lens Pass) |
| **D16** | Reference + Glossary Streamline | Framework Docs Expert + Researcher + IA + UX Writer | Anti-Bloat Editor | — (no Reviewer Lens Pass) |
| **D17** | Cross-Page Narrative Coherence | Community Organizer + Newcomer + Educator + Solo Dev | Content Strategist | Same 4 + IA + Startup (verdict on journey coherence) |
| **D18** | Visual Hierarchy + Typography v2 | Design Critic + Visual Designer + Accessibility Auditor + UX Writer | Diagram Reviewer | — (no Reviewer Lens Pass) |
| **D19** | Mobile + Responsive v2 | Newcomer + Accessibility Auditor + Solo Dev + Dev-Tools Designer | Indie Hacker | — (no Reviewer Lens Pass) |
| **D20** | Performance + Hardening + Adversarial Capstone | **All 21 personas** | — | **All 21 personas Reviewer Lens Pass + verdicts on final state + Phase 5 exit gate readiness** |

### Persona Coverage Audit

Each persona appears in at least 2 decadals (avoiding persona idleness across the 100-cycle program):

| Persona | Decadals appearing |
|---|---|
| Solo Dev | D15 + D17 + D19 + D20 |
| Educator | D13 + D15 + D17 + D20 |
| Enterprise | D20 (full bench at AAR) |
| Researcher | D13 + D16 + D20 |
| Startup | D17 (Reviewer Lens Pass) + D20 |
| Accessibility Auditor | D11 + D18 + D19 + D20 |
| Design Critic | D11 + D18 + D20 |
| Content Strategist | D12 + D14 + D17 (secondary) + D20 |
| Information Architect | D15 + D16 + D17 (Reviewer Lens Pass) + D20 |
| Newcomer Stress-Tester | D11 + D12 + D14 + D17 + D19 + D20 (highest coverage; first-contact lens) |
| OSS Maintainer | D14 + D20 |
| Dev-Tools Designer | D19 + D20 |
| Framework Docs Expert | D16 + D20 |
| Community Organizer | D17 + D20 |
| Indie Hacker | D12 (secondary) + D14 + D19 (secondary) + D20 |
| Enterprise Architect | D15 + D20 |
| Visual Designer | D11 + D14 (Reviewer Lens Pass) + D15 (secondary) + D18 + D20 |
| Infographic Specialist | D11 (Reviewer Lens Pass) + D13 + D20 |
| Anti-Bloat Editor | D12 + D16 (secondary) + D20 |
| UX Writer | D12 + D14 (secondary) + D16 + D18 + D20 |
| Diagram Reviewer | D11 (secondary) + D13 + D18 (secondary) + D20 |

**Coverage check**: ✅ all 21 personas appear in ≥ 2 decadals (Enterprise = D20 only is acceptable because D20 = full bench + this matches Rosetta D10 capstone pattern).

## §4 Persona File Template (for M5.2 authoring)

Each NEW persona file follows this template (consistent with existing `who/reviewers/reviewer_*.md` shape):

```markdown
---
type: persona   # or `adopter` or `reviewer`
created: YYYY-MM-DD
updated: YYYY-MM-DD
status: active
last_edited_by: agent_stanley
category: {original_rosetta | existing_specialist | p5_planned | visual_focused}
primary_lens: {dimension_1 + dimension_2}
secondary_lens: {dimension_3 + dimension_4}   # optional
sample_questions:
  - "Persona-specific question 1"
  - "Persona-specific question 2"
  - "Persona-specific question 3"
backgrounds:
  - "Background trait 1 (role / experience / context)"
  - "Background trait 2"
priorities:
  - "What this persona prioritizes"
  - "What this persona deprioritizes"
red_flags:
  - "What makes this persona walk away"
  - "What makes this persona lose trust"
tags: [persona, {category_tag}, {decadal_tags}]
---

# Persona — {Name}

## Background

Short 3-5 sentence narrative description.

## Primary Lens

What dimensions this persona scores most authoritatively on.

## Sample Questions

5-10 questions this persona would ask of a page/feature/asset.

## Scoring Considerations

How this persona translates observations into 0.00-5.00 scores per dimension.

## Decadal Engagement

Which D11-D20 decadals this persona participates in (per allocation table).
```

## §5 M5.2 Persona Authoring Scope

M5.2 (NEW persona authoring mission; 1-2 sessions) outputs **11 NEW persona files**:

**6 P5-planned personas** (`who/adopters/persona_*.md` OR `who/reviewers/reviewer_*.md` depending on framing):
1. `who/adopters/persona_oss_maintainer.md` (or `who/reviewers/reviewer_oss_maintainer.md`)
2. `who/adopters/persona_dev_tools_designer.md`
3. `who/adopters/persona_framework_docs_expert.md`
4. `who/adopters/persona_community_organizer.md`
5. `who/adopters/persona_indie_hacker.md`
6. `who/adopters/persona_enterprise_architect.md`

**5 visual-focused personas** (`who/reviewers/reviewer_*.md`):
7. `who/reviewers/reviewer_visual_designer.md`
8. `who/reviewers/reviewer_infographic_specialist.md`
9. `who/reviewers/reviewer_anti_bloat_editor.md`
10. `who/reviewers/reviewer_ux_writer.md`
11. `who/reviewers/reviewer_diagram_reviewer.md`

**M5.2 sub-deliverables**:
- 11 NEW persona files (template above)
- Persona bench overview document at `who/AGENTS.md` updates (adopters + reviewers section refreshed; total bench count updated to 21)
- Per Standing Order #18 (decadal AAR persona update at Phase 5): subsequent decadals use EXPANDED 21-persona bench

**M5.1 informs M5.2**: M5.1 research mission's findings (OSS-pattern + visual + diagram + infographic + page-bloat research across 8 OSS targets) feed into the 6 P5-planned + 5 visual persona files as grounding research.

## Notes

- **Bench size 21**: matches operator's "add some personas" directive while staying manageable (3-5 per cycle Q&A; full bench at decadal AAR every 10 cycles).
- **Per-decadal allocation is suggested-not-prescribed**: operator/Rosetta can adjust per-cycle persona draw based on actual cycle scope; allocation table is the default.
- **Dimension primary lens is suggestive-not-exclusive**: any persona may score any dimension; primary lens just indicates highest-weight contribution.
- **NEW visual persona files at M5.2**: 5 files; ~1 day authoring effort; M5.1 research grounds the persona designs in real-world archetypes.
- **Coverage check**: all 21 personas appear in ≥ 2 decadals (Enterprise = D20 only matches Rosetta D10 capstone pattern).

---

**Bench expansion design status**: ratified at M5.0 close 2026-05-25. M5.2 executes the 11 NEW persona file authoring per Standing Order #18.
