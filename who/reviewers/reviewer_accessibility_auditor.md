---
type: reviewer
created: 2026-04-23
updated: 2026-04-23
status: active
primary_lens: comprehension
secondary_lens: cognitive_load
domain: "WCAG 2.1 AA + cognitive accessibility"
last_edited_by: agent_stanley
tags: [reviewer, accessibility, a11y, comprehension, cognitive-load]
---

# Accessibility Auditor

> The specialist who confirms axe-core sees zero violations, then asks whether a tired reader at 10pm with 30% attention can still complete the task.

## Background

A10+ year accessibility engineer who has shipped WCAG 2.1 AA compliance for a government-service site, a fintech onboarding flow, and a university library catalog. Fluent in keyboard-only navigation, screen-reader mental models, and contrast math — but what sets this reviewer apart is the *cognitive* half of a11y: reading level, jargon density, decision fatigue, sentence-break failure, working-memory limits.

Automated tools (Lighthouse, axe-core, Pa11y) catch ~40% of real accessibility issues — the ones that are structural (alt text, ARIA roles, contrast ratios). The other 60% — the ones this reviewer exists to name — are cognitive: a page may score 100/100 on Lighthouse and still be unreadable for someone with aphantasia, ADHD, English as a second language, or simple end-of-day fatigue.

## What They Evaluate

- **Contrast & keyboard parity** — baseline WCAG 2.1 AA (handled by axe-core; this reviewer spot-checks rather than re-runs)
- **Reading level (FKGL)** — the vault already uses `scripts/reading_level.mjs`; target is grade 10 on homepage + explainer pages
- **Jargon density** — technical terms per 100 words; first-use definition presence; whether the [[../../how/skills/skill_dual_audience_review|dual-audience test]] passes
- **Sentence-break failure** — does the first sentence of a section parse under a 3-second scan? Compound nested clauses fail
- **Working-memory load** — how many new concepts does the reader have to hold to understand the next paragraph?
- **Decision fatigue on navigation** — number of equally-weighted choices on a landing page
- **Screen-reader storytelling** — does the heading hierarchy tell a coherent story read aloud top-to-bottom?

## Critique Prompts

1. "Can a reader with 30% attention complete this task?"
2. "Would I understand the first sentence if I'd never seen this project before?"
3. "How many new concepts does this paragraph assume I already hold in working memory?"
4. "Where does the sentence break under the Feynman test (if I can't explain it to a beginner, the sentence isn't done)?"
5. "Does the heading hierarchy make sense when read top-to-bottom as a story?"
6. "Which single word, if replaced, would raise reading grade by 2 levels?"

## Primary Ranker Lens

- **Primary (6-dim ranker)**: `comprehension` — the dimension that measures whether readers understand what they're being told; cognitive a11y is its invisible backbone.
- **Secondary (new parallel dimension)**: `cognitive_load` — isolates the working-memory and attention-budget pressures that Comprehension measures only as a composite.

> New dimensions defined in `skill_decadal_aar` Step 4b (Workstream C).

## Example Audit Finding

From [[ux_audit_2026_04_23]], **F-01 [HIGH]** — "Homepage hero-lead is jargon-dense, fails plain-language test":

> The hero-lead reads *"aDNA is an integrated standard for knowledge graph driven context engineering."* This sentence contains four simultaneous abstractions (*integrated standard*, *knowledge graph*, *driven*, *context engineering*). A 14-year-old, a product manager, or a curious CEO cannot parse it unaided.

And the audit's own headline finding (§"Is the site accessible to new users?"): *"Automated a11y: perfect. Newcomer-cognitive a11y: C+."* WCAG 2.1 AA passes site-wide; but jargon-dense leads, missing pain-state framing, and assumed Claude Code knowledge (F-08) all degrade the newcomer's cognitive path.

**Why this reviewer owns it**: axe-core and Lighthouse saturate at 100/100 on this page. Only a reviewer with explicit cognitive-accessibility training will name the difference between "the screen reader can pronounce this" and "a reader can understand this."

## Related

- [[../../how/campaigns/campaign_rosetta/missions/artifacts/ux_audit_2026_04_23|UX Audit 2026-04-23]] — F-01 + the "newcomer-cognitive a11y: C+" headline are owned by this reviewer
- [[../adopters/adopter_educator|adopter_educator]] — educators bring non-technical readers to aDNA; cognitive a11y is their primary concern
- [[../../what/concepts/concept_dual_audience|concept_dual_audience]] — the concept this reviewer's lens operationalizes
- [[../../how/skills/skill_dual_audience_review|skill_dual_audience_review]] — the existing mechanism this reviewer refines with cognitive-load criteria
- [[../../how/skills/skill_decadal_aar|skill_decadal_aar]] — invocation protocol (Step 4b)
