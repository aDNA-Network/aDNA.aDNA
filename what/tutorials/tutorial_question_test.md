---
type: tutorial
created: 2026-04-14
updated: 2026-04-14
status: active
level: beginner
prerequisites: [concept_triad, concept_ontology]
estimated_time: "15 minutes"
dual_audience: true
last_edited_by: agent_stanley
tags: [tutorial, beginner, question_test, triad, sorting]
---

# Apply the Question Test

## What You'll Build

A sorted inventory of 10 project items placed into the correct triad leg. By the end, you'll be able to instantly sort any new file into `what/`, `how/`, or `who/` using the [[what/patterns/pattern_question_test|question test]].

## Prerequisites

- Understand the [[what/concepts/concept_triad|triad]] (what/how/who)
- Understand the [[what/concepts/concept_ontology|ontology]] (entity types within each leg)

## Steps

### Step 1: Learn the Test

The question test is one question with three answers:

> "Is this about **WHAT** we know, **HOW** we work, or **WHO** is involved?"

| Answer | Triad Leg | It belongs here if... |
|--------|-----------|----------------------|
| WHAT we know | `what/` | Its primary purpose is to capture knowledge |
| HOW we work | `how/` | Its primary purpose is to drive action |
| WHO is involved | `who/` | Its primary purpose is to describe people or relationships |

That's it. One question. Three possible answers. Every file in the project gets exactly one.

### Step 2: Sort 10 Items

Here are 10 items from a hypothetical biotech research project. For each, ask the question and write your answer:

| # | Item | Your Answer |
|---|------|-------------|
| 1 | A research summary on CRISPR gene editing | |
| 2 | A sprint plan for the next two weeks | |
| 3 | The team roster with roles and contact info | |
| 4 | A decision record choosing Python over R | |
| 5 | A template for writing experiment reports | |
| 6 | Notes from a meeting between the PI and the postdoc | |
| 7 | A context file on protein folding methods | |
| 8 | A mission plan to build the data pipeline | |
| 9 | The lab's code of conduct | |
| 10 | A lattice YAML defining the analysis workflow | |

### Step 3: Check Your Answers

| # | Item | Question | Answer | Directory |
|---|------|----------|--------|-----------|
| 1 | CRISPR research summary | WHAT do we know? | Knowledge | `what/context/` |
| 2 | Sprint plan | HOW do we work? | Action | `how/missions/` |
| 3 | Team roster | WHO is involved? | People | `who/team/` |
| 4 | Decision record (Python vs. R) | WHAT do we know? | Knowledge | `what/decisions/` |
| 5 | Experiment report template | HOW do we work? | Action | `how/templates/` |
| 6 | Meeting coordination notes | WHO is involved? | People | `who/coordination/` |
| 7 | Protein folding context file | WHAT do we know? | Knowledge | `what/context/` |
| 8 | Data pipeline mission plan | HOW do we work? | Action | `how/missions/` |
| 9 | Code of conduct | WHO is involved? | People | `who/governance/` |
| 10 | Analysis workflow lattice | WHAT do we know? | Knowledge | `what/lattices/` |

**Common trip-ups**:

- **Item 4** (decision record): You might think "deciding is an action → HOW." But the record captures *knowledge* about what was decided and why. The decision process was HOW; the record is WHAT.
- **Item 6** (meeting notes): Could feel like "knowledge from the meeting → WHAT." But coordination notes describe people communicating — WHO is involved in this conversation.
- **Item 9** (code of conduct): Could feel like "a rule → HOW we work." But it governs people's behavior and relationships — WHO is involved and what standards they follow.

### Step 4: Apply to Your Own Project

List 5 files from a real project you're working on. Apply the question test to each:

| File | Question | Triad Leg |
|------|----------|-----------|
| | | |
| | | |
| | | |
| | | |
| | | |

If any item feels like it belongs in two legs, it's trying to do two things. Split it. A "team sprint plan" is two files: the team roster (WHO) and the sprint plan (HOW).

## What You Learned

- The [[what/patterns/pattern_question_test|question test]] always produces exactly one answer
- Edge cases usually involve files trying to serve two purposes — split them
- The test works for any content type: documents, code, data, configs
- Consistent sorting makes the vault navigable for both humans and agents

## Next Steps

- [[what/tutorials/tutorial_extend_the_ontology|Extend the Ontology]] — add custom entity types to the triad
- [[what/concepts/concept_ontology|Ontology]] — understand the entity types within each leg
- [[what/patterns/pattern_base_extension|Base/Extension]] — how to add types without breaking the core
