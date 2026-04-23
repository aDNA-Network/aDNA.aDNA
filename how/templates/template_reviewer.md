---
type: reviewer
created: <% tp.date.now("YYYY-MM-DD") %>
updated: <% tp.date.now("YYYY-MM-DD") %>
status: draft
primary_lens: ""        # one of: findability | comprehension | actionability | trust | relevance | delight
secondary_lens: ""      # optional: visual_clarity | cognitive_load | onboarding_scent (defined in skill_decadal_aar Step 4b)
domain: ""              # free-form specialty label (e.g., "visual design", "WCAG + cognitive a11y")
last_edited_by: agent_<% tp.user %>
tags: [reviewer]
---

# reviewer_{specialty_slug}

> Short tagline — one sentence describing the lens this reviewer brings. Plain-language (campaign rule #6) — a 14-year-old should understand what this reviewer looks for.

## Background

{Who is this reviewer? What's their professional background and expertise? What experiences shaped the lens they apply? Keep this grounded — imagine a real human the campaign is "hiring" as a specialist critic. ~100 words.}

## What They Evaluate

A short list — 3–6 bullets — of the concrete things this reviewer looks at when scanning a page or artifact. Each bullet should be **observable** (something a reader can look at, not an internal property).

- Observable item #1
- Observable item #2
- Observable item #3
- Observable item #4

## Critique Prompts

The questions this reviewer asks out loud while scanning. These are the prompts an agent invoking this reviewer during `skill_decadal_aar` Step 4b should run through against the target artifact.

1. "Prompt question #1?"
2. "Prompt question #2?"
3. "Prompt question #3?"
4. "Prompt question #4?"

## Primary Ranker Lens

- **Primary (6-dim ranker)**: `{findability | comprehension | actionability | trust | relevance | delight}` — {one-sentence rationale}
- **Secondary (new parallel dimension)**: `{visual_clarity | cognitive_load | onboarding_scent}` — {one-sentence rationale, OR "none — this reviewer reports only against the 6-dim ranker."}

> Dimension definitions live in `skill_decadal_aar` Step 4b. New parallel dimensions are reported separately from the 6-dim gate and do not modify cycle-close thresholds.

## Example Audit Finding

Cite at least one **concrete finding from this vault** this reviewer would own. Preferred source: the [[ux_audit_2026_04_23]] priority queue. Quote the file path, line number, or finding ID (F-01 … F-10) and explain why this reviewer is the right owner.

> {Example quote or finding reference.}

**Why this reviewer owns it**: {1–2 sentences.}

## Related

- [[../../how/campaigns/campaign_rosetta/missions/artifacts/ux_audit_2026_04_23|UX Audit 2026-04-23]] — source of example findings; first reviewer invocation will re-score findings against this bench
- [[../adopters/adopter_{related_persona}|Related Adopter]] — the audience this reviewer's critique most serves
- [[../../what/concepts/concept_{related}|Related Concept]] — the aDNA concept this reviewer's lens clarifies
- [[../../how/skills/skill_decadal_aar|skill_decadal_aar]] — invocation protocol (Step 4b)

<!--
Minimum compliance:
- ≥2 wikilinks (Campaign Rosetta rule #10)
- ≥1 concrete in-vault reference in "Example Audit Finding" (standing rule #8 — self-reference)
- ~400–800 words total (lighter than concept/pattern — this is a lens, not canonical docs)
- Plain-language tagline (campaign rule #6)
- Dual-audience: developer reads Critique Prompts as actionable; non-developer reads tagline + Background as welcoming (standing rule #7)
-->
