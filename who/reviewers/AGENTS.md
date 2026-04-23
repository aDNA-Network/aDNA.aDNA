---
type: directory_index
created: 2026-04-23
updated: 2026-04-23
last_edited_by: agent_stanley
tags: [directory_index, reviewer]
---

# who/reviewers/ — Agent Guide

## What's Here

Reviewer personas. Archetypal specialist UX/design critics invoked during decadal AAR cycles to supplement the 5-adopter ranker with an *expert lens*. Adopters represent **audience** ("does this work for my persona?"); reviewers represent **expertise** ("is this well-made, and would a stranger feel welcomed?"). One file per reviewer.

Reviewers are the answer to a gap surfaced in the 2026-04-23 UX heuristic audit (see [[ux_audit_2026_04_23]]): Lighthouse saturates at 100/100/100/100 and the persona ranker moved 4.0 → 4.70 across D1 + D2, yet Delight stayed flat at 4.0 — both automated gates and audience self-assessment miss the "is this well-made?" question that a trained reviewer would catch on first scan.

## Working Rules

- **Naming**: `reviewer_{specialty_slug}.md` (underscores, lowercase, singular). Example: `reviewer_design_critic.md`.
- **Required frontmatter**: `type: reviewer`, `created`, `updated`, `status`, `primary_lens` (one of the 6 existing ranker dimensions), `secondary_lens` (optional — may be a new dimension such as `visual_clarity`, `cognitive_load`, `onboarding_scent`), `domain` (free-form specialty label, e.g., "visual design", "WCAG + cognitive a11y"), `last_edited_by`, `tags`.
- **Structure**: Background → What They Evaluate → Critique Prompts → Primary Ranker Lens → Example Audit Finding → Related. Size target ~400–800 words (lighter than adopter — these are lenses, not canonical documents).
- **Cross-linking**: Every file links to [[ux_audit_2026_04_23]] plus at least one adopter, concept, pattern, or tutorial the reviewer would critique. Satisfies Campaign Rosetta rule #10 (≥2 wikilinks).
- **Self-reference**: Every file cites at least one concrete in-vault target the reviewer would flag — file path or audit finding ID. Satisfies project standing rule #8 (the vault teaches by being itself).
- **Audit trail**: Update `last_edited_by` and `updated` on every edit.

## New Ranker Dimensions (Parallel Reporting Only)

Reviewer files may name any of three new dimensions in `secondary_lens`:

| Dimension | Owned by | What it catches |
|-----------|----------|-----------------|
| `visual_clarity` | Design Critic | Typographic distinctiveness, palette cohesion, section rhythm, generic-AI-aesthetic tells |
| `cognitive_load` | Accessibility Auditor | Reading-level inflation, jargon density, decision fatigue, sentence-break failure |
| `onboarding_scent` | Information Architect + Newcomer Stress-Tester | Whether the next click is predictable after a 60-second scan |

**Preservation clause**: these dimensions report on a *parallel* scorecard. The existing 6-dim × 5-adopter ranker remains the hard gate for cycle advancement (4.0 threshold). Reviewer scorecards inform priority queues and charter inputs; they never modify the 6-dim deltas. Full definitions land in [[skill_decadal_aar]] Step 4b (added in Workstream C).

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

**Token cost**: ~300 tokens (this AGENTS.md). Individual reviewer files are ~400–800 tokens each. Full reviewer bench loaded: ~3 KB.

## Invocation Cadence

- **First invocation**: cycle 31 (D4 open — Visual Identity & First-Contact). Produces the first parallel reviewer scorecard.
- **Subsequent**: mandatory at D4/D8/D9 decadal AARs; optional at any cycle whose target is design-adjacent.
- **Out of scope**: reviewers do not run at session SITREPs and do not gate individual cycle closure.

## Cross-References

- [[../adopters/|who/adopters/]] — the audience counterpart to this directory
- [[../governance/|who/governance/]] — role definitions and escalation authority
- [[../../how/skills/skill_decadal_aar|skill_decadal_aar]] — where reviewers are invoked (Step 4b, Workstream C)
- [[../../how/skills/skill_iii_cycle|skill_iii_cycle]] — cycle protocol; reviewers inform Step 3 target selection for design-adjacent cycles
- [[../../how/templates/template_reviewer|template_reviewer.md]] — frontmatter + section skeleton
- [[../../how/campaigns/campaign_rosetta/missions/artifacts/ux_audit_2026_04_23|ux_audit_2026_04_23]] — the artifact that motivated this entity type
