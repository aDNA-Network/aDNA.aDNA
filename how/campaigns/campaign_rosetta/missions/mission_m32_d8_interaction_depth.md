---
plan_id: mission_m32
type: plan
title: "M32 — D8: Interaction Depth (Cycles 71-80)"
owner: stanley
status: active
mission_class: implementation
created: 2026-04-24
updated: 2026-04-24
last_edited_by: agent_rosetta
tags: [mission, rosetta, phase-7, d8, interaction, demos, diagrams, cta, glossary]
campaign: campaign_rosetta
decadal: D8
cycles: 71-80
ranker_baseline: 4.97
ranker_target: "≥4.98"
---

# M32 — D8: Interaction Depth (Cycles 71-80)

## Goal

Replace all "Demo coming soon" and static media placeholders with real interactive content. Add clipboard-copy to all code examples, embed architecture diagrams on concept pages, add "Try this in Claude Code" deep-link CTAs at tutorial completion, and implement progressive disclosure on glossary entries. **Reviewer Lens Pass mandatory** (Design Critic + Newcomer Stress-Tester, cycles 77-78).

Ranker baseline: **4.97** (D7 close). Target: **≥4.98**.

## Priority Queue (seeded from aar_phase7_d7.md)

| ID | Cycle | Item | Status |
|----|-------|------|--------|
| I-00 | 71 | Gate measurement: count media placeholders + demo placeholder elements; establish baseline | **done** |
| I-01 | 72 | Replace top 3 highest-traffic "Demo coming soon" MediaPlaceholder instances with real content (GIF, screenshot, or inline walkthrough) | **done** |
| I-02 | 73 | Replace remaining MediaPlaceholder instances; audit all tutorial pages for static placeholders | **done** |
| I-03 | 74 | Clipboard-copy button on all CodeBlock instances across tutorial pages | **done** |
| I-04 | 75 | Embed Mermaid/SVG architecture diagram on each of the 13 concept pages (one diagram per page minimum) | **done** |
| I-05 | 76 | "Try this in Claude Code" CTA component at tutorial completion — pre-filled prompt deep-link | **done** |
| I-06 | 77 | Reviewer Lens Pass — Design Critic: visual hierarchy, interactive affordances, diagram clarity | **done** |
| I-07 | 78 | Reviewer Lens Pass — Newcomer Stress-Tester: first-time experience with demos and CTAs | **done** |
| I-08 | 79 | Progressive disclosure for glossary entries — inline definition expand, full context on click | planned |
| I-09 | 80 | D8 decadal close: full Playwright suite, 5-persona ranker, AAR | planned |

## Tasks

### 1. Cycle 71 — Gate measurement + placeholder audit (I-00)

- **Status**: completed
- **Description**: Before implementing any D8 feature, run a measurement pass. Count all `.demo-placeholder` or `<MediaPlaceholder>` instances in built HTML. Count tutorial pages with no clipboard-copy. Count concept pages with no inline diagram. This baseline count becomes the D8 regression fence — it should monotonically decrease across cycles 72-79.
- **Files**: `site/src/`, `site/dist/` (built output), new Playwright spec `gate-7-interaction.spec.ts`
- **Gate**: Baseline count established. Playwright spec written asserting count ≤ baseline (prevents regression without forward progress).

### 2. Cycle 72 — Top placeholder replacements (I-01)

- **Status**: completed
- **Description**: Replace the 3 highest-traffic MediaPlaceholder instances with real content. Candidates: homepage "See it in action" section, tutorial/getting-started walkthrough, and the what-is-adna page demo. Use short terminal GIF (asciinema or screen recording), screenshot sequence, or embedded step-by-step with annotated images.
- **Files**: `site/src/pages/learn/tutorials/`, `site/src/pages/` (homepage), relevant MDX
- **Gate**: Playwright count ≤ (baseline − 3). Build 117+ pages, 0 errors. LH 100/100/100/100 maintained.

### 3. Cycle 73 — Remaining placeholder replacements (I-02)

- **Status**: completed
- **Description**: Replace all remaining MediaPlaceholder instances in use-case pages, adopter pages, and any tutorial with static placeholder content. Each replacement: real screenshot OR embedded Loom/GIF OR clearly-written walkthrough prose (no blank placeholder boxes).
- **Files**: use-case MDX, adopter MDX, tutorial MDX
- **Gate**: Playwright count = 0 (zero media placeholders remaining).

### 4. Cycle 74 — Clipboard-copy on all CodeBlocks (I-03)

- **Status**: completed
- **Description**: Audit all tutorial and concept pages for CodeBlock instances lacking clipboard-copy. The `<CodeBlock>` component received a copy button in D5 (M29) — verify all instances use it. Add copy button to any raw Markdown fenced code blocks that bypassed the component.
- **Files**: `site/src/components/CodeBlock.astro`, tutorial MDX files
- **Gate**: Playwright clipboard-copy gate passes for all tutorial pages (count ≥ 1 copy button per tutorial).

### 5. Cycle 75 — Architecture diagrams on concept pages (I-04)

- **Status**: completed
- **Description**: Add one Mermaid or inline SVG architecture diagram to each of the 13 concept pages. Diagrams must be dark/light safe (no hardcoded colors). Use `<MermaidDiagram>` component (introduced D4/M22). Priority concepts: triad, ontology, context_optimization, lattice_composition, convergence_model.
- **Files**: `what/concepts/` MDX files, `site/src/components/MermaidDiagram.astro`
- **Gate**: All 13 concept pages contain at least one diagram. Playwright a11y 100/100 maintained.

### 6. Cycle 76 — "Try this in Claude Code" CTA (I-05)

- **Status**: completed
- **Description**: Create a `<TryInClaudeCode>` CTA component. Renders a styled button/callout at the end of tutorial pages with a pre-filled prompt linking to the concept just taught. Example: "Try this in Claude Code → Open Claude Code and run: `claude` — then ask: 'Explain the triad structure in this project.'" Each of the 9 tutorial pages gets a tailored CTA.
- **Files**: `site/src/components/TryInClaudeCode.astro` (new), tutorial MDX (9 files)
- **Gate**: All 9 tutorial pages contain the CTA component. Component renders correctly on mobile and desktop. Lighthouse scores unchanged.

### 7. Cycles 77-78 — Reviewer Lens Pass (I-06, I-07)

- **Status**: completed
- **Description**: Mandatory D8 Reviewer Lens Pass per `skill_decadal_aar.md` Step 4b.
  - **Cycle 77 — Design Critic**: Evaluate visual hierarchy of interactive elements, diagram clarity, CTA prominence and affordance, clipboard-copy discoverability.
  - **Cycle 78 — Newcomer Stress-Tester**: First-contact experience with demos, diagrams, and CTAs. Does a newcomer understand what to click? Do the CTAs make sense without prior aDNA knowledge?
- **Files**: `who/reviewers/reviewer_design_critic.md`, `who/reviewers/reviewer_newcomer_stress_tester.md`
- **Gate**: Both reviewer reports filed. Fix list extracted; critical items resolved before cycle 79.

### 8. Cycle 79 — Glossary progressive disclosure (I-08)

- **Status**: planned
- **Description**: Implement progressive disclosure on glossary entries. Pattern: show term + 1-sentence definition inline; "expand" reveals full definition, examples, and related terms. Use `<details>`/`<summary>` HTML or a lightweight Astro component. All 25 glossary entries updated.
- **Files**: `site/src/pages/glossary/index.astro` or `[...slug].astro`, `who/glossary/` MDX files
- **Gate**: Glossary page loads with all entries collapsed. Expand interaction works. Lighthouse a11y 100/100.

### 9. Cycle 80 — Decadal close + AAR (I-09)

- **Status**: planned
- **Description**: Full decadal close per `skill_decadal_aar.md`. 5-persona ranker final scores. File `aar_phase7_d8.md`. Seed D9 priority queue (Narrative Onboarding). Update campaign doc and STATE.md. Reviewer Lens Pass for D9 must include Content Strategist, Information Architect, and Newcomer Stress-Tester.
- **Files**: `how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d8.md`, campaign doc, STATE.md

## Notes

- Desktop Lighthouse 100/100/100/100 and mobile 98-100 performance maintained throughout D8. Any cycle that drops LH is a regression — fix before advancing.
- D8 Reviewer Lens Pass (cycles 77-78) is mandatory per campaign doc. Design Critic + Newcomer Stress-Tester only (not full 5-persona bench).
- Every cycle follows `skill_iii_cycle.md` (7-step: Measure → Orient → Select → Implement → Re-measure → Validate → Record).
- Cycle 80 runs `skill_decadal_aar.md` for full persona ranker review.
- Delight dimension (currently 4.83) is the primary bottleneck — interactive content is the main lever.
- D9 carry-forward from D7: nav duplicate link text differentiation (Solo Developer / Startup / etc. label disambiguation).
