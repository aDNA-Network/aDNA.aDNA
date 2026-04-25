---
plan_id: mission_m33
type: plan
title: "M33 — D9: Narrative Onboarding (Cycles 81-90)"
owner: stanley
status: completed
mission_class: implementation
created: 2026-04-24
updated: 2026-04-24
last_edited_by: agent_rosetta
tags: [mission, rosetta, phase-7, d9, narrative, onboarding, pain-statement, trust]
campaign: campaign_rosetta
decadal: D9
cycles: 81-90
ranker_baseline: 4.99
ranker_target: "5.00"
---

# M33 — D9: Narrative Onboarding (Cycles 81-90)

## Goal

Sharpen the site's narrative layer so a first-time visitor immediately understands *why* aDNA exists and *what* it does for them. Primary lever: name the problem above the fold on the homepage. Secondary levers: set concrete expectations on `/get-started` (time estimate + expected output + Claude Code install pointer), reposition trust signals, and reframe "How it Works" steps to lead with the problem each step solves. **Reviewer Lens Pass mandatory before cycle 87** — Content Strategist, Information Architect, Newcomer Stress-Tester.

Ranker baseline: **4.99** (D8 close). Target: **5.00**.

Main gap: Educator Actionability 4.93, Educator Delight 4.95.

## Priority Queue (seeded from aar_phase7_d8.md)

| ID | Cycle | Item | Status |
|----|-------|------|--------|
| I-00 | 81 | Gate measurement: audit homepage hero copy, `/get-started` onboarding flow, trust signal placement — establish baseline findings | **done** |
| I-01 | 82 | P1: Homepage pain statement — add "agents waste tokens, forget context across sessions" above the fold | **done** |
| I-02 | 83 | P2: `/get-started` expected terminal output + time estimate ("you'll see this output after ~3 minutes") | **done** |
| I-03 | 84 | P3: `/get-started` Claude Code install pointer — link/callout so visitors know where to get Claude Code | **done** |
| I-04 | 85 | P4: Trust signal repositioning — move from final section to visible on first scroll | **done** |
| I-05 | 86 | P5: Homepage "How it Works" — each step names the problem it solves, not just the action | **done** |
| I-06 | 87 | Reviewer Lens Pass — Content Strategist: narrative arc, voice consistency, value proposition clarity | **done** |
| I-07 | 88 | Reviewer Lens Pass — Information Architect: page flow, progressive disclosure, cross-link coherence | **done** |
| I-08 | 89 | Reviewer Lens Pass — Newcomer Stress-Tester: full first-contact walkthrough + fix critical blockers | **done** |
| I-09 | 90 | D9 decadal close: full Playwright suite, 5-persona ranker, AAR | **done** |

## Tasks

### 1. Cycle 81 — Gate measurement + narrative audit (I-00)

- **Status**: pending
- **Description**: Audit the homepage hero and `/get-started` flow against the D9 priority queue. Record current copy for hero subtitle, CTA label, "How it Works" step text, trust signal section position, and `/get-started` first-run expectations. This snapshot becomes the before-state for every subsequent cycle.
- **Files**: `site/src/pages/index.astro`, `site/src/pages/get-started.astro` (or tutorial layout), `site/src/components/HeroSection.astro` (if exists)
- **Gate**: Baseline notes recorded in this mission file. No Playwright delta expected.

### 2. Cycle 82 — Homepage pain statement (I-01)

- **Status**: pending
- **Description**: Add a concrete problem statement above the fold: agents waste tokens re-loading context, forget what they decided across sessions, and can't pick up mid-project without long re-briefings. aDNA solves this. The pain statement should appear in or near the hero subtitle — before any feature description. Keep it one or two sentences. Must survive dual-audience test (developer + non-developer).
- **Files**: `site/src/pages/index.astro`, `site/src/components/HeroSection.astro` (if exists)
- **Gate**: Homepage hero copy includes explicit problem statement. Playwright 52/52. LH 100/100/100/100 maintained.

### 3. Cycle 83 — `/get-started` expected output + time estimate (I-02)

- **Status**: pending
- **Description**: Add a callout at the top of `/get-started` setting expectations: approximate time to complete ("~5 minutes"), what the visitor will see when done (e.g., a working CLAUDE.md, a session file in `how/sessions/`), and what prerequisite knowledge is assumed. Newcomers should know what success looks like before starting.
- **Files**: `site/src/pages/get-started.astro`, tutorial layout or `[...slug].astro`
- **Gate**: `/get-started` page shows time estimate and expected output before step 1. Playwright 52/52.

### 4. Cycle 84 — Claude Code install pointer (I-03)

- **Status**: pending
- **Description**: `/get-started` currently assumes Claude Code is installed. Add an install callout (link to official install docs) near the top of the page. Format: a `<Callout type="prereq">` or equivalent — "You'll need Claude Code installed. [Install Claude Code →]". Validate the install command `npm install -g @anthropic-ai/claude-code` per Design Critic flag from D8.
- **Files**: `site/src/pages/get-started.astro`, `site/src/components/Callout.astro` (if exists)
- **Gate**: Install pointer visible before step 1 on `/get-started`. Playwright 52/52.

### 5. Cycle 85 — Trust signal repositioning (I-04)

- **Status**: pending
- **Description**: Trust signals (spec citation, GitHub stars/forks, adopter logos, or "used by" callout) currently appear in the final section of the homepage — below the fold and after all feature content. Move at least one trust element (spec link or social proof) to be visible on first scroll, ideally between the hero and the "How it Works" section. The goal: a skeptical visitor gets a trust signal before committing to read further.
- **Files**: `site/src/pages/index.astro`, trust signal component(s)
- **Gate**: At least one trust element above the first fold break. Lighthouse maintained. Playwright 52/52.

### 6. Cycle 86 — "How it Works" problem-first reframe (I-05)

- **Status**: pending
- **Description**: Each "How it Works" step currently describes an action ("Define your modules", "Write a lattice", etc.). Reframe each step to lead with the problem it solves, then the action. Example: "Agents forget context between sessions → Define your project's DNA once in a CLAUDE.md." Three to four steps maximum. Survivor-test: does a newcomer understand why each step matters?
- **Files**: `site/src/pages/index.astro`, `site/src/components/HowItWorks.astro` (if exists)
- **Gate**: Each step has explicit problem-first framing. Dual-audience test passes. Playwright 52/52.

### 7. Cycles 87-89 — Reviewer Lens Pass (I-06, I-07, I-08)

- **Status**: pending
- **Description**: Mandatory D9 Reviewer Lens Pass per `skill_decadal_aar.md` Step 4b.
  - **Cycle 87 — Content Strategist**: Narrative arc, voice consistency, value proposition clarity across homepage and `/get-started`.
  - **Cycle 88 — Information Architect**: Page flow, progressive disclosure, cross-link coherence, onboarding funnel structure.
  - **Cycle 89 — Newcomer Stress-Tester**: Full first-contact walkthrough from homepage → `/get-started` → first tutorial. Fix any critical blockers found.
- **Files**: `who/reviewers/` persona files
- **Gate**: All three reviewer reports filed. Critical blockers resolved in cycle 89. D10 carry-forwards documented.

### 8. Cycle 90 — Decadal close + AAR (I-09)

- **Status**: pending
- **Description**: Full decadal close per `skill_decadal_aar.md`. 5-persona ranker final scores. File `aar_phase7_d9.md`. Seed D10 priority queue. Update campaign doc and STATE.md.
- **Files**: `how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d9.md`, campaign doc, STATE.md

## Notes

- Desktop Lighthouse 100/100/100/100 and mobile 98-100 performance maintained throughout D9. Any cycle that drops LH is a regression — fix before advancing.
- Reviewer Lens Pass (cycles 87-89) is mandatory per campaign doc. Content Strategist + Information Architect + Newcomer Stress-Tester.
- Every cycle follows `skill_iii_cycle.md` (7-step: Measure → Orient → Select → Implement → Re-measure → Validate → Record).
- Cycle 90 runs `skill_decadal_aar.md` for full persona ranker review.
- Educator Actionability (4.93) and Educator Delight (4.95) are the primary gaps — narrative clarity is the lever.
- Mermaid diagrams in future cycles: use `—` dash or `(parenthetical)` labels, not `\n`, per D8 lesson learned.
- Quote filenames with `[` and `]` in git add commands.
