---
type: tutorial
created: 2026-04-14
updated: 2026-04-14
status: active
level: intermediate
prerequisites: [concept_context_optimization, concept_token_selection, pattern_agents_md]
estimated_time: "30 minutes"
dual_audience: true
last_edited_by: agent_stanley
tags: [tutorial, intermediate, context, writing, quality]
---

# Write a Context File

## What You'll Build

A quality-scored context file ready for your vault's context library. By the end, you'll have a file that an AI agent can load to make better domain decisions — with a quality score and token estimate.

## Prerequisites

- [[what/concepts/concept_context_optimization|Context Optimization]] — format selection, signal density, anti-patterns
- [[what/concepts/concept_token_selection|Token Selection]] — how context files fit into token budgets
- [[what/patterns/pattern_agents_md|AGENTS.md Routing]] — how agents find context files

## Steps

### Step 1: Choose Your Subtype

Context files come in three flavors (§10):

| Subtype | Use When | Example |
|---------|----------|---------|
| `context_research` | Synthesizing external knowledge | "What the latest papers say about RAG" |
| `context_guide` | Writing how-to instructions | "How to validate a lattice YAML" |
| `context_core` | Defining foundational conventions | "What the triad means for this project" |

Pick the one that matches your content's purpose. Don't mix subtypes in one file.

### Step 2: Write the Frontmatter

```yaml
---
type: context_guide           # or context_research, context_core
topic: my_topic               # topic directory name
subtopic: my_subtopic         # this file's subtopic
created: 2026-04-14
updated: 2026-04-14
sources: ["Source 1", "Source 2"]
context_version: "1.0"
token_estimate: ~800          # estimate after writing
last_edited_by: agent_stanley
tags: [context, my_topic, my_subtopic]
---
```

The `sources` field is mandatory — every claim must be traceable. The `token_estimate` helps agents make cost-aware loading decisions.

### Step 3: Write the Body

Follow this structure — tables over prose:

```markdown
# {Topic}: {Subtopic}

## Key Principles

1. **First principle.** Most important claim first.
2. **Second principle.** Each one is self-contained.
3. **Third principle.** Support with a table if complex.

## Recommendations

| If you need to... | Do this | Why |
|-------------------|---------|-----|
| {Scenario 1}      | {Action}| {Rationale} |
| {Scenario 2}      | {Action}| {Rationale} |

## Anti-Patterns

1. **{Bad practice}.** {What goes wrong.}

## Sources

1. {Full citation with enough detail to verify}
```

**The key rule**: every sentence should drive a decision or action. If you write "Context files are important" — delete it. An agent loading this file already knows it's important (it's loading it). Instead write: "Context files SHOULD be 150-300 lines to stay within single-topic token budgets."

### Step 4: Score Against the Quality Rubric

Rate your file on 5 axes (1-5 each):

| Axis | Score | What You're Measuring |
|------|-------|----------------------|
| **Signal density** | /5 | What fraction of tokens drives decisions? |
| **Actionability** | /5 | Can an agent produce concrete output from this? |
| **Coverage uniformity** | /5 | Is depth balanced across sections? |
| **Source diversity** | /5 | How many distinct source types? |
| **Cross-topic coherence** | /5 | Any conflicts with related files? |

**Composite target**: 3.5+ average. **Floor rule**: any axis ≤ 2 flags for revision.

Add the scores to your frontmatter:

```yaml
quality_score: 4.0
signal_density: 4
actionability: 5
coverage_uniformity: 4
source_diversity: 3
cross_topic_coherence: 4
```

### Step 5: Add to the Topic AGENTS.md

If this is a new topic, create a topic directory with an AGENTS.md. If adding to an existing topic, update the AGENTS.md subtopic table:

```markdown
| # | Subtopic | File | ~Tokens | Key Content |
|---|----------|------|---------|-------------|
| N | my_subtopic | context_topic_subtopic.md | ~800 | {one-line summary} |
```

Update the total token budget.

### Step 6: Validate

| Check | Pass? |
|-------|-------|
| Every claim has a traceable source | |
| Tables used where possible (not prose) | |
| File is 150-300 lines | |
| No background preamble ("In the rapidly evolving...") | |
| Quality composite is 3.5+ | |
| No axis scores ≤ 2 | |
| Token estimate in frontmatter | |
| Topic AGENTS.md updated | |

## What You Learned

- Context files exist to help agents make better decisions — not to store background knowledge
- [[what/concepts/concept_context_optimization|Tables over prose]] delivers 3-5x more information per token
- The quality rubric provides an objective measure: signal density, actionability, coverage, source diversity, coherence
- Adding a file to the AGENTS.md index makes it discoverable by agents

## Next Steps

- [[what/tutorials/tutorial_design_a_mission|Design a Mission]] — plan multi-session work using the execution hierarchy
- [[what/patterns/pattern_context_recipe|Context Recipe]] — combine context files into task-specific assemblies
