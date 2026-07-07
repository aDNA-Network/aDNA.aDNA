---
type: skill
skill_type: agent
created: 2026-06-03
updated: 2026-06-03
status: active
category: design
trigger: "Need to ground a site-design decision in real exemplars — curate a reference set, inspect each site to a fixed rubric, synthesize into captured design guidance. First exercised at M5.8 to seed the front-page doctrine."
last_edited_by: agent_stanley
tags: [skill, design, reference_inspection, exemplar, design_dna, m5_8]

requirements:
  tools: [webfetch, websearch]
  context: ["what/exemplars/sites/_reference_set.md", "what/design/front_page_doctrine.md", "what/doctrine/doctrine_visual_inspection.md (Tier-0 headless capture for dark-mode/motion/interactive fields)"]
  permissions: ["read files", "write files", "fetch URLs"]
---

# Skill: Reference Inspection — exemplar sites → captured design guidance

## Overview

A repeatable, diffable process for turning exemplar websites into design rules with provenance. It produces one artifact per site under `what/exemplars/sites/`, a set manifest (`_reference_set.md`), and feeds the synthesized rules into [[front_page_doctrine]]. The discipline is: **make N inspections comparable** (one fixed rubric), **record the distribution not the average** (rules come from clustering), and **cite provenance for every emitted rule** (which site + which research finding).

## When to use

- Seeding or refreshing the front-page doctrine (or any design-DNA ruleset).
- Before an IA / visual-system decision that should be evidence-grounded, not taste-asserted.
- Re-inspection cadence: update `last_inspected` per row and re-run Step 5 to produce a diff.

## Steps

### 1. Curate the set (8–12 sites, two axes)
Choose sites so each gives **one clean signal** on a cell of: **tonal** (sleek-professional ↔ progressive-revolutionary) × **functional** (docs · registry/marketplace · community/network · movement/manifesto · protocol · product-polish). Record in `_reference_set.md` with a "the one thing to steal" per row. **Gate:** both tonal poles covered (≥1 site ≥60 revolutionary, ≥1 site ≤40) and the functional axis spans docs + registry + community + protocol + product.

### 2. Inspect each site to the fixed rubric
WebFetch each site with a rubric prompt. Capture to `site_<name>.md`:
- **Tier A — countable:** hero_word_count · section_count · above_fold_focus · nav_model + top-level item count · cta_count + primary verb · positioning_verbs · registry_treatment · community_treatment · demo_as_proof.
- **Tier B — qualitative:** density_band (sparse/medium/dense) · palette + type · motion_budget · tonal_score (0–100).
- **Tier C — reviewer reads:** one Design-Critic ("made on purpose?"), one Anti-Bloat-Editor ("what would you cut?"), one Information-Architect ("does nav scent predict content?") read, reusing the existing `who/reviewers/` Critique Prompts.

### 3. Handle the screenshot seam (headless-first)
WebFetch sees **static markdown only** — dark-mode-default, responsive, and motion states are invisible to it. **Default: run the Tier-0 headless harness** (`scripts/visual_capture.mjs --base <exemplar-url> --themes dark,light`, per [[doctrine_visual_inspection]]) to capture those states across the canonical viewports with **zero setup** — no operator screenshots needed for static render. Reserve `needs_operator_capture: true` + a structured request only for signals a headless browser genuinely can't reach (auth-walled pages; a specific live interaction/GIF). This closes the old operator-capture seam.

### 4. Write the per-site artifact
`type: exemplar_site` frontmatter with the Tier-A/B fields + `inspected:` date. Body: Captured (rubric) · **Lift for aDNA** · **Avoid** (explicit for AVOID-list sites — separate liftable technique from refused pattern, citing `writing-guidelines` §2) · Related. ~250–400 words. ≥2 wikilinks.

### 5. Synthesize → rules with provenance
After ≥6 artifacts exist:
1. For each countable field, record the **range + clustering** across the set (not an average) in the manifest's synthesis table.
2. **Map each finding to a doctrine rule** with provenance: cite the site(s) + the research finding (e.g., NN/g) that justify it.
3. Resolve AVOID-list tension explicitly (Vercel/Stripe appear on both the set and the AVOID list).
4. Emit/refresh the ruleset into [[front_page_doctrine]]. Re-running produces a diff → traceable doctrine evolution.

**Gate to advance out of inspection:** ≥6 artifacts with Tier-A fully populated; both tonal poles + the functional spread covered; every emitted doctrine rule carries provenance.

## Worked instance (M5.8)

10 sites inspected 2026-06-03 (Hermes, Hugging Face, ethereum.org, Linear, Vercel, docs.stripe.com, Anthropic, Replicate, Val Town, Raycast) + NN/g real-estate-allocation + scrolling-and-attention. Output: [[_reference_set]] + 10 `site_*.md` + [[front_page_doctrine]]. This skill *is* the method that produced them (self-reference).

## Related

- [[front_page_doctrine]] — the ruleset this skill emits
- [[skill_site_design_pipeline]] — Stage 1 invokes this skill
- [[skill_decadal_aar]] — supplies the reviewer Critique Prompts used in Tier C
- `what/exemplars/sites/_reference_set.md` — the manifest this skill maintains
