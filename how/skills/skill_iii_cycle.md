---
type: skill
skill_type: agent
created: 2026-04-15
updated: 2026-04-15
status: active
category: quality
trigger: "Each III improvement cycle during Phase 7 of Campaign Rosetta"
last_edited_by: agent_stanley
tags: [skill, quality, iii, lighthouse, improvement, rosetta]

requirements:
  tools: [lighthouse, playwright, astro]
  context: ["Cycle tracker", "Current decadal theme", "Persona ranker scores from last decadal AAR"]
  permissions: ["read files", "write files", "run commands"]
---

# Skill: III Improvement Cycle

## Overview

Executes a single Iterative Incremental Improvement (III) cycle on the aDNA documentation site. Each cycle measures the current state, selects a target improvement dimension, implements 1-3 changes, validates no regressions, and records results. Designed to be run 100 times across 10 thematic decadals in Phase 7.

## Trigger

Run once per III cycle during Phase 7 of Campaign Rosetta. A single agent session typically executes 2-4 cycles depending on complexity.

## Parameters

| Parameter | Required | Description |
|-----------|----------|-------------|
| `cycle_number` | Yes | Current cycle (1-100) |
| `decadal_theme` | Yes | Current decadal focus (e.g., "Accessibility Perfection") |
| `carry_forwards` | No | Issues carried from the previous cycle |

## Improvement Dimension Taxonomy

### Tier 1: Machine-Measurable (Lighthouse + automated tools)

| Dimension | Tool | Baseline | Target |
|-----------|------|----------|--------|
| Performance (FCP, LCP, TBT, CLS) | Lighthouse | 100 | Maintain 100 |
| Accessibility (WCAG 2.1 AA) | Lighthouse + axe-core | 95 | 100 |
| Best Practices | Lighthouse | 100 | Maintain 100 |
| SEO | Lighthouse | 100 | Maintain 100 |
| Responsive Layout | Playwright gate-9 | Pass | Pass |
| Link Integrity | Link checker | Not tracked | 0 broken |
| Image Optimization | Lighthouse subaudits | Not tracked | 100% |
| Font Loading | Lighthouse font-display | Not tracked | All swap/optional |
| Bundle Size | Build output | Near-zero JS | Maintain minimal |

### Tier 2: Agent-Assessable (LLM semantic review, scored 1-5)

| Dimension | Description |
|-----------|-------------|
| Content Clarity | Sentences parse on first read; no ambiguity or passive-voice overload |
| Visual Hierarchy | Heading levels convey structure; scannable at a glance |
| Information Architecture | Content is where users expect it; labels match mental models |
| Cross-Linking Density | Related content discoverable via in-context links |
| Progressive Disclosure | Simple first, depth available on demand; no front-loaded jargon |
| Dual-Audience Legibility | Technical and non-technical readers both served |
| Self-Referential Depth | Vault structure cited as working example of concepts |
| Component Usage | Callouts, cards, code blocks used where they add value |
| Anti-Slop / Voice | No AI filler; consistent Rosetta voice |
| Reading Flow | Paragraphs connect logically; smooth transitions |

### Tier 3: Persona-Assessed (scored 1-5, measured at decadal AARs)

| Dimension | Description |
|-----------|-------------|
| Time-to-First-Insight | Clicks/seconds from homepage to understanding aDNA |
| Navigation Efficiency | Can the persona find what they need in 3 clicks |
| Jargon Barrier | Does the persona hit unexplained terms |
| Task Completion | Can the persona complete their primary goal |
| Trust Signals | Does the site convey credibility and active maintenance |
| Onboarding Clarity | Is the "what should I do first" path obvious |
| Mobile Usability | Is the experience adequate on a phone |

## Implementation

### Step 1: Measure

Run the automated measurement suite on 5 representative pages:
- **Homepage** (`/`)
- **Concept page** (e.g., `/learn/concepts/triad-structure`)
- **Tutorial page** (e.g., `/learn/tutorials/first-vault`)
- **Glossary page** (e.g., `/glossary/adna`)
- **Adopter page** (e.g., `/adopters/solo-developer`)

Measurements:
1. Run `npx lighthouse <url> --output=json` on each page (or use Playwright + Lighthouse CI)
2. Run Playwright quality gates (`npm run test:gates`)
3. Run `astro build` and record page count + build time + error count
4. Record scores in working notes

### Step 2: Orient

Read the cycle tracker (`how/campaigns/campaign_rosetta/missions/artifacts/iii_cycle_tracker.md`) to understand:
- Which dimensions are below target
- What the previous 3 cycles improved (avoid re-treading)
- Current decadal theme and its focus dimensions
- Any carry-forward issues from previous cycles
- Persona ranker pain points from last decadal AAR (if available)

### Step 3: Select Target

Pick 1-3 improvement targets using priority scoring:

```
Priority = (distance_from_target × tier_weight) + persona_pain_score - recency_penalty

Where:
  distance_from_target: normalized 0-1 (how far from target)
  tier_weight: Tier 1 = 1.0, Tier 2 = 0.8, Tier 3 = 0.6
  persona_pain_score: sum of persona votes from last decadal AAR (0-5)
  recency_penalty: -0.5 if improved within last 3 cycles
```

Prefer targets aligned with the current decadal theme. At least one target should be a quick win (achievable this cycle). One may be part of a multi-cycle arc.

### Step 4: Implement

Make the improvement. Types of changes:
- **Site changes**: Components, layouts, styles, config
- **Content changes**: Rewording, restructuring, cross-links, callouts
- **Infrastructure changes**: New quality gates, measurement scripts, tooling

Rules:
- One logical change per target (keep diffs reviewable)
- Follow existing code patterns and component conventions
- Maintain the build (no breaking changes)

### Step 5: Re-Measure

Run the exact same measurement suite from Step 1. Compare before/after.

### Step 6: Validate

All of these must pass before the cycle is recorded as complete:
- [ ] `astro build` succeeds with zero errors
- [ ] Page count is stable or increased (never decreased)
- [ ] All Playwright quality gates pass
- [ ] No Lighthouse category dropped by more than 1 point
- [ ] The specific improvement target moved in the right direction

If a Lighthouse regression occurs:
1. Fix the regression before recording the cycle
2. If fixing requires reverting the improvement, revert and record as "blocked by regression" in carry-forward

### Step 7: Record

Append a structured entry to the cycle tracker:

```markdown
### Cycle {N} — {YYYY-MM-DD}

**Decadal**: D{X} ({theme})
**Target**: {dimension name}
**Before**: {metric or score}
**After**: {metric or score}

**Changes**:
- `{file_path}`: {description}

**Lighthouse**:
| Category | Before | After | Delta |
|----------|--------|-------|-------|
| Performance | {score} | {score} | {+/-} |
| Accessibility | {score} | {score} | {+/-} |
| Best Practices | {score} | {score} | {+/-} |
| SEO | {score} | {score} | {+/-} |

**Validation**: [PASS/FAIL] — Build: {pages} pages, {time}s, {errors} errors
**Carry-Forward**: {issue or "none"}
```

## Cross-References

- `skill_decadal_aar.md` — invoked every 10 cycles for persona ranker review
- `skill_dual_audience_review.md` — sub-procedure for Tier 2 dual-audience checks
- `skill_self_reference_check.md` — sub-procedure for Tier 2 self-referential depth
- `what/docs/context_quality_rubric.md` — 6-axis quality scoring reference
- `how/campaigns/campaign_rosetta/missions/artifacts/iii_cycle_tracker.md` — cycle log
