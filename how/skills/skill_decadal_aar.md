---
type: skill
skill_type: agent
created: 2026-04-15
updated: 2026-04-15
status: active
category: quality
trigger: "Every 10th III cycle (cycles 10, 20, 30, ... 100) during Phase 7"
last_edited_by: agent_stanley
tags: [skill, quality, iii, aar, persona-ranker, rosetta]

requirements:
  tools: [lighthouse, playwright, astro]
  context: ["Cycle tracker", "5 adopter persona files", "Previous decadal AAR (if any)"]
  permissions: ["read files", "write files", "run commands"]
---

# Skill: Decadal AAR + Persona Ranker

## Overview

Runs a comprehensive After Action Review every 10 III cycles, incorporating a 5-persona ranker evaluation of the aDNA documentation site. Produces a structured AAR artifact with a persona ranker matrix, aggregated metrics, and a priority queue for the next decadal. This is the mechanism that injects human-perspective quality signal into the improvement loop.

## Trigger

Run at cycle 10, 20, 30, 40, 50, 60, 70, 80, 90, and 100 of Phase 7. Replaces the normal III cycle protocol for that session.

## Parameters

| Parameter | Required | Description |
|-----------|----------|-------------|
| `decadal_number` | Yes | Which decadal (1-10) |
| `decadal_theme` | Yes | The theme of the decadal being closed |
| `next_theme` | No | The theme of the upcoming decadal (omit for D10) |

## Persona Ranker Dimensions

Each adopter persona scores the site on 6 dimensions (1-5 scale):

| Dimension | Question the Persona Asks | What 5 Looks Like |
|-----------|--------------------------|-------------------|
| **Findability** | "Can I find what I need within 3 clicks?" | Every page reachable via intuitive nav; search works; cross-links abundant |
| **Comprehension** | "Do I understand what I'm reading, given my level?" | Language matches persona's expertise; progressive disclosure works; no jargon walls |
| **Actionability** | "Can I do something useful with what I've learned?" | Clear next steps; code examples work; tutorials produce real results |
| **Trust** | "Does this site feel credible and maintained?" | Professional design; no broken elements; recent dates; consistent voice |
| **Relevance** | "Does this address my actual problems and goals?" | Persona's use case explicitly covered; examples match their domain |
| **Delight** | "Is the experience pleasant, or do I feel friction?" | Fast loading; beautiful typography; smooth interactions; no dead ends |

## Adopter Personas

Load from `who/adopters/`:

| Persona | File | Technical Level | Primary Goal |
|---------|------|-----------------|-------------|
| Solo Developer | `adopter_solo_developer.md` | Intermediate | Set up first aDNA vault for a side project |
| Educator | `adopter_educator.md` | Beginner | Understand aDNA well enough to teach it |
| Enterprise Team | `adopter_enterprise_team.md` | Expert | Evaluate aDNA for organizational adoption |
| Researcher | `adopter_researcher.md` | Expert | Integrate aDNA with research data workflows |
| Startup | `adopter_startup.md` | Intermediate | Deploy aDNA quickly for a growing team |

## Implementation

### Step 1: Aggregate Cycle Metrics

Read the cycle tracker and compile the last 10 entries into a summary:
- Total improvements made in this decadal
- Lighthouse score trajectory (10 data points per category)
- Dimensions improved vs. not touched
- Carry-forward issues accumulated
- Build stats (page count trend, build time trend)

### Step 2: Full Lighthouse Audit

Run Lighthouse on all 5 representative pages (not just one):
- Homepage (`/`)
- Concept page (e.g., `/learn/concepts/triad-structure`)
- Tutorial page (e.g., `/learn/tutorials/first-vault`)
- Glossary page (e.g., `/glossary/adna`)
- Adopter page (e.g., `/adopters/solo-developer`)

Store full JSON report at `site/evidence/lighthouse_d{N}.json`.

### Step 3: Full Gate Suite

Run all Playwright quality gates. Record pass/fail for each gate.

### Step 4: Persona Ranker Review

**For each of the 5 personas**, in sequence (to stay within context budget):

1. **Load the persona file** from `who/adopters/adopter_{name}.md`
2. **Simulate their journey**: Start from the homepage. Follow the path this persona would realistically take to accomplish their primary goal (defined in the persona file). Note each click, each page loaded, each moment of confusion or clarity.
3. **Score 6 ranker dimensions** (1-5 each) based on the simulated experience
4. **Identify top 3 pain points** — specific, actionable friction this persona encounters
5. **Suggest 3 improvements** — concrete changes that would most benefit this persona
6. **Unload the persona** before loading the next (context management)

### Step 5: Build Persona Ranker Matrix

Synthesize the 5 individual evaluations into a combined matrix:

```markdown
| Dimension | Solo Dev | Educator | Enterprise | Researcher | Startup | Avg |
|-----------|----------|----------|------------|------------|---------|-----|
| Findability | {1-5} | {1-5} | {1-5} | {1-5} | {1-5} | {avg} |
| Comprehension | {1-5} | {1-5} | {1-5} | {1-5} | {1-5} | {avg} |
| Actionability | {1-5} | {1-5} | {1-5} | {1-5} | {1-5} | {avg} |
| Trust | {1-5} | {1-5} | {1-5} | {1-5} | {1-5} | {avg} |
| Relevance | {1-5} | {1-5} | {1-5} | {1-5} | {1-5} | {avg} |
| Delight | {1-5} | {1-5} | {1-5} | {1-5} | {1-5} | {avg} |
```

### Step 6: Build Priority Queue

Merge findings to create the priority queue for the next decadal:

1. **Themed items** (5 items): From the next decadal's focus dimensions
2. **Persona-driven items** (up to 5): From Step 4 pain points, ranked by cross-persona frequency (pain points cited by multiple personas rank higher)

The priority queue feeds into Step 3 (Select Target) of `skill_iii_cycle.md` for the next 10 cycles.

### Step 7: Produce Decadal AAR Artifact

Save to `how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d{N}.md`:

```markdown
---
type: aar
created: {YYYY-MM-DD}
updated: {YYYY-MM-DD}
status: completed
decadal: {N}
theme: "{theme}"
cycles: "{start}-{end}"
last_edited_by: agent_stanley
tags: [aar, phase-7, iii, decadal-{N}]
---

# Decadal AAR — D{N}: {Theme}

## Scorecard

| Metric | Start of Decadal | End of Decadal | Delta |
|--------|-----------------|----------------|-------|
| Lighthouse Performance | {score} | {score} | {delta} |
| Lighthouse Accessibility | {score} | {score} | {delta} |
| Lighthouse Best Practices | {score} | {score} | {delta} |
| Lighthouse SEO | {score} | {score} | {delta} |
| Site Pages | {count} | {count} | {delta} |
| Build Time | {time}s | {time}s | {delta} |
| Improvements Made | — | {count} | — |

## Persona Ranker Matrix

{matrix from Step 5}

## Top Pain Points (Cross-Persona)

1. {pain point} — cited by: {personas}
2. {pain point} — cited by: {personas}
3. {pain point} — cited by: {personas}

## Priority Queue for D{N+1}: {Next Theme}

### Themed Items
1. {item}
2. {item}
3. {item}
4. {item}
5. {item}

### Persona-Driven Items
1. {item} — source: {persona(s)}
2. {item} — source: {persona(s)}
3. {item} — source: {persona(s)}

## 5-Line AAR

- **Worked**: {what went well this decadal}
- **Didn't**: {what didn't work}
- **Finding**: {key insight}
- **Change**: {process adjustment for next decadal}
- **Follow-up**: {backlog items created, or "none"}
```

### Step 8: Update Cycle Tracker

Add a decadal summary section to the cycle tracker with:
- Link to the AAR artifact
- Persona ranker averages (6 numbers)
- Key carry-forwards for the next decadal

## Cross-References

- `skill_iii_cycle.md` — the per-cycle protocol this skill punctuates every 10 cycles
- `who/adopters/adopter_solo_developer.md` — Solo Developer persona
- `who/adopters/adopter_educator.md` — Educator persona
- `who/adopters/adopter_enterprise_team.md` — Enterprise Team persona
- `who/adopters/adopter_researcher.md` — Researcher persona
- `who/adopters/adopter_startup.md` — Startup persona
- `what/docs/context_quality_rubric.md` — 6-axis quality rubric reference
- `how/templates/template_aar.md` — AAR template reference
