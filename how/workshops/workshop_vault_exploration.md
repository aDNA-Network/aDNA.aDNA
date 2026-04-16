---
type: workshop
created: 2026-04-16
updated: 2026-04-16
status: active
duration: "60 minutes"
audience: "Anyone curious about aDNA — developers, team leads, researchers, educators"
difficulty: beginner
prerequisites:
  - Obsidian installed (free, obsidian.md)
  - aDNA.aDNA vault cloned locally
last_edited_by: agent_stanley
tags: [workshop, beginner, exploration, navigation, triad]
---

# workshop_vault_exploration

A 60-minute guided tour of a living aDNA vault. Participants don't build anything — they navigate, observe, and discover how a knowledge architecture works by walking through one. The vault you're exploring IS the teaching material.

## Workshop Goals

By the end of this workshop, participants will be able to:

1. Explain the three legs of the aDNA triad (Who, What, How) and what goes where
2. Navigate an aDNA vault using AGENTS.md routing files
3. Apply the Question Test to sort new content into the correct triad leg
4. Identify governance files (CLAUDE.md, MANIFEST.md, STATE.md) and explain their roles

## Pre-Work

Complete before arriving (30 minutes total):

- [[tutorial_navigate_a_vault|Navigate an aDNA Vault]] (15 min) — guided tour of vault structure
- [[tutorial_question_test|Apply the Question Test]] (15 min) — sorting rule for the triad

## Agenda

| Time | Activity | Description |
|------|----------|-------------|
| 0:00 | Welcome & Setup | Confirm Obsidian is installed, vault is open. Show graph view. |
| 0:05 | The Big Picture | What is aDNA? Why does knowledge architecture matter for AI? Show the triad: Who, What, How. |
| 0:15 | Exercise 1: Triad Walk | Navigate each triad leg. Open 1 file per leg. Note the naming pattern. |
| 0:25 | Exercise 2: AGENTS.md Chain | Start at root CLAUDE.md, follow AGENTS.md breadcrumbs into `what/concepts/`. Observe load/skip decisions. |
| 0:35 | Exercise 3: Question Test | Given 5 sample items (a tutorial, a governance doc, a dataset spec, a session log, a glossary entry), sort each into the correct triad leg using the Question Test. |
| 0:45 | Exercise 4: Governance Trio | Open CLAUDE.md, MANIFEST.md, and STATE.md. Compare: what does each file do? How do they differ? |
| 0:52 | Debrief & Questions | What surprised you? What would you organize differently? How does this compare to your current approach? |

## Facilitator Notes

- **Graph view is the hook.** Open Obsidian's graph view first — the visual network creates immediate curiosity. Let participants explore freely for 30 seconds before explaining anything.
- **Self-reference is the lesson.** Remind participants regularly: "You are inside the thing being described." When they read about governance files, they're reading a governance file. This is the core aDNA insight.
- **Mixed audiences.** Developers will want to see YAML frontmatter and file naming patterns. Non-developers will focus on the conceptual organization. Both are valid entry points — acknowledge both.
- **Don't over-teach.** This workshop is exploration, not instruction. Resist the urge to explain every concept. Let discovery drive engagement.

## Materials / Prerequisites

- **Required**: Obsidian (any OS), `aDNA.aDNA/` vault cloned and opened as an Obsidian vault
- **Optional**: Projector for facilitator screen share
- **Handout**: Printed triad diagram (Who/What/How with example entities under each leg)

## Exercises

### Exercise 1: Triad Walk

**Instructions**: Open the vault in Obsidian's file explorer. Navigate into each triad directory (`who/`, `what/`, `how/`). Open one file from each. Write down: what kind of content lives here?

**Expected outcome**: Participants can articulate that `who/` contains people and governance, `what/` contains knowledge and concepts, `how/` contains operations and procedures.

### Exercise 2: AGENTS.md Chain

**Instructions**: Open `CLAUDE.md` at the vault root. Find the project map. Navigate to `what/concepts/AGENTS.md`. Read the "Load/Skip Decision" section. Now navigate to `what/tutorials/AGENTS.md`. Compare the two.

**Expected outcome**: Participants understand that AGENTS.md files are routing guides — they tell agents (and humans) when to load a directory and what's inside.

### Exercise 3: Question Test

**Instructions**: For each item below, decide which triad leg it belongs to by asking the [[pattern_question_test|Question Test]]:

1. "A step-by-step guide to writing context files" → _____
2. "The team's communication preferences" → _____
3. "A definition of what lattice composition means" → _____
4. "A session tracking log from yesterday" → _____
5. "A community contributor role description" → _____

**Answers**: 1. How (tutorial), 2. Who (coordination), 3. What (concept), 4. How (session), 5. Who (community)

### Exercise 4: Governance Trio

**Instructions**: Open `CLAUDE.md`, `MANIFEST.md`, and `STATE.md` side by side. For each file, write one sentence describing its purpose.

**Expected outcome**: CLAUDE.md = agent instructions (who am I, what are the rules). MANIFEST.md = project overview (what's here, how it's organized). STATE.md = operational snapshot (what's happening now, what's next).

## Assessment / Feedback

**Exit questions** (show of hands or brief written response):

1. Could you explain the triad to someone who wasn't here today?
2. If you had a new piece of content, do you know which directory it goes in?
3. What's one thing about aDNA that surprised you?

**Success signal**: Participants can sort a novel content item into the correct triad leg without assistance.

## Self-Reference

This workshop uses aDNA.aDNA as its teaching environment — a vault that teaches aDNA by being aDNA. Every exercise points at real files in this vault. The Question Test exercise sorts content that actually exists here. The governance trio exercise reads the governance files that govern this project. The structure IS the lesson.

## Related

- [[workshop_build_your_first_vault|Build Your First Vault]] — next workshop in the series
- [[workshop_facilitation_guide|Facilitation Guide]] — meta-guide for running any aDNA workshop
- [[concept_triad|The Triad]] — the concept this workshop teaches
- [[pattern_question_test|The Question Test]] — the sorting pattern participants practice
