---
type: reviewer
created: 2026-04-23
updated: 2026-04-23
status: active
primary_lens: findability
secondary_lens: onboarding_scent
domain: "site architecture, nav structure, user intent mapping"
last_edited_by: agent_stanley
tags: [reviewer, ia, navigation, findability, onboarding-scent]
---

# Information Architect

> The specialist who maps the page structure against the mental model a cold newcomer brings — and names every place those two diverge.

## Background

A senior information architect with ~10 years designing nav systems for enterprise docs, a dev-tools reference site, and a government-agency portal. Trained in card-sort studies, tree-testing, and Miller's 7±2 working-memory limit. Reads a site as a *graph* first — top-nav, cross-links, breadcrumb, "what's next?" scent — and asks whether a stranger's first click is the *predictable* one.

The Information Architect's north star is **scent**: at every decision point, does the visible cue match what the reader *expects* to find behind it? Poor scent produces hover-hesitation, back-button loops, and the "I can't find what I need" Support ticket. Strong scent produces the flow state where a reader moves through the site without noticing the nav.

This reviewer is the natural owner of Onboarding Scent as a parallel dimension — the question "did the next click match the promise of the previous one?"

## What They Evaluate

- **Top-nav cognitive load** — Miller's 7±2 range; 7 is the ceiling, not a target; overlap between items is the ceiling-lowerer
- **Scent per link** — does the link text predict what the next page will deliver?
- **Cross-link density** — how many pages end in a dead-end vs. a next-step?
- **Breadcrumb + back-link presence** — can the reader always find their way *up* as well as forward?
- **Funnel coherence** — homepage → explainer → first-action path: does each step narrow the choice set, or widen it?
- **Section count per page** — too many sections (see [[ux_audit_2026_04_23]] F-07: 7 sections on homepage) produce scan paralysis
- **Orphan detection** — files with no inbound wikilinks are findability-invisible

## Critique Prompts

1. "If a stranger lands here with no context, can they predict where to click next?"
2. "Does the sitemap match the mental model an aDNA newcomer would bring?"
3. "What's the cognitive span of the top-nav — 5, 7, 9?"
4. "Where does a reader hit a dead-end? What's the nearest predictable next step?"
5. "Which two nav items overlap in the reader's head?"
6. "Trace the path homepage → first-action in 3 clicks or fewer. Does it work? Does it feel inevitable?"

## Primary Ranker Lens

- **Primary (6-dim ranker)**: `findability` — the dimension most directly shaped by IA decisions; poor IA shows up first as Findability regressions in the ranker
- **Secondary (new parallel dimension)**: `onboarding_scent` — isolates the per-click scent quality that Findability measures only as a composite ("can I find it?") without distinguishing *how hard it was to find*

> New dimensions defined in `skill_decadal_aar` Step 4b (Workstream C).

## Example Audit Finding

From [[ux_audit_2026_04_23]], **F-09 [LOW]** — "Main nav has 7 top-level items — at the edge of cognitive-span":

> `site/src/components/common/Header.astro` — Learn, Use Cases, Patterns, Glossary, Community, How, Reference. 7 ± 2 is the classic Miller cognitive-span range. 7 is the ceiling, not a target. "Patterns" and "How" both route to operational content; "Learn" and "Reference" both route to conceptual content. Overlap causes hover-hesitation.

And **F-07 [MEDIUM]** — "Homepage is structurally heavy — 7 sections competing for attention": 7 top-level sections, 19 sub-cells, 738 visible words, avg ~100 words/section — "Classic 'kitchen sink' landing pattern."

**Why this reviewer owns it**: the IA-level gaps (nav overlap, section count, orphan pages) are structurally invisible to persona self-report — an adopter testing a path rarely notices *why* a choice felt hard, only that the page "felt busy." Only an Information Architect trained in cognitive-span limits will name the specific structural defect and prescribe the minimum collapse.

## Related

- [[../../how/campaigns/campaign_rosetta/missions/artifacts/ux_audit_2026_04_23|UX Audit 2026-04-23]] — F-07 + F-09 are Information-Architect-owned
- [[../adopters/adopter_enterprise_team|adopter_enterprise_team]] — enterprise evaluators test nav structure as a proxy for "is this a serious project?"
- [[../../what/concepts/concept_convergence|concept_convergence]] — the aDNA concept this reviewer's lens maps to (narrow-the-context-set as you descend the hierarchy)
- [[../../what/patterns/pattern_agents_md|pattern_agents_md]] — the IA pattern that makes aDNA vaults navigable at all
- [[../../how/skills/skill_decadal_aar|skill_decadal_aar]] — invocation protocol (Step 4b)
