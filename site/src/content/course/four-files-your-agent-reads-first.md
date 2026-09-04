---
title: "The four files your agent reads first"
description: "CLAUDE.md, STATE.md, MANIFEST.md, AGENTS.md — what each one is for, and where to look when you want to know what to work on next."
lesson_title: "The four files your agent reads first"
order: 2
level: orientation
estimated_minutes: 10
prerequisites:
  - what-is-an-adna-graph
dual_audience: true
learner_can:
  - "Say what each of the four governing files is for"
  - "Find the answer to “what should I work on next?” without reading the whole graph"
  - "Tell the difference between a rule that persists and a state that changes"
check:
  kind: quiz
  questions:
    - prompt: "You want to know what the project is currently working on and what is blocked. Which file?"
      options:
        - "CLAUDE.md"
        - "STATE.md"
        - "MANIFEST.md"
        - "AGENTS.md"
      answer: 1
      explanation: "STATE.md is the live snapshot — current work, blockers, and what comes next. It changes constantly, which is exactly why it is kept separate from the rules."
    - prompt: "Your team decides that nobody may change the database schema without a review. Where does that rule belong?"
      options:
        - "CLAUDE.md — it governs how work is done here"
        - "STATE.md — it is current"
        - "MANIFEST.md — it is a fact about the project"
        - "Nowhere; rules like that are not written down"
      answer: 0
      explanation: "CLAUDE.md holds the standing rules an assistant must follow in this graph. A rule that should still be true in six months does not belong in the file that describes this week."
    - prompt: "What is MANIFEST.md for?"
      options:
        - "A running log of every change"
        - "The identity card — what this graph is, what it is called, what kind of thing it is"
        - "Instructions for humans only"
        - "A list of everyone with access"
      answer: 1
      explanation: "MANIFEST.md is identity and metadata: the graph's name, its type, its version. Short, stable, and the thing other graphs read when they need to know what they are looking at."
    - prompt: "You add a note to a subdirectory and want to explain the local conventions for that directory specifically. Which file?"
      options:
        - "A second CLAUDE.md"
        - "STATE.md"
        - "An AGENTS.md in that directory"
        - "A comment at the top of every file"
      answer: 2
      explanation: "AGENTS.md gives directory-local guidance — the conventions that apply inside one part of the graph. It keeps the top-level rules from swelling with detail that only matters in one folder."
    - prompt: "You open a fresh session and want to know where to pick up. What is the fastest honest route?"
      options:
        - "Read every file in what/ first"
        - "Ask the assistant to guess from the code"
        - "Read STATE.md, which names the current work and the next step"
        - "Check the most recently modified file"
      answer: 2
      explanation: "STATE.md exists to answer exactly this. A graph that keeps it current can be resumed in seconds; one that lets it rot forces everyone to reconstruct the situation from scratch."
---

## Four files, four jobs

A graph can hold hundreds of files. Four of them govern, and an assistant reads those before
anything else. Learning what each is for is most of what you need to navigate a graph you have never
seen.

### `CLAUDE.md` — the rules

This is the constitution. It says what this graph is, how work is done here, and what an assistant
must or must not do. Standing rules live here: *never change these files directly*, *always open a
session record before editing*, *route questions about the machine itself somewhere else*.

The test for whether something belongs in `CLAUDE.md` is durability. If it should still be true in
six months, it is a rule. If it is true this week, it is state, and it belongs in the next file.

### `STATE.md` — what is happening right now

The live snapshot. What is in progress, what is blocked, what happens next. This file changes
constantly, and that is the point of keeping it separate from the rules — mixing the two produces a
constitution nobody trusts, because half of it is stale by Thursday.

**This is where you look when you sit down and think "where was I?"** A well-kept graph answers that
in one short read near the top of the file, and the habit of keeping it accurate is the single
highest-value thing you can do for whoever opens the folder next. That person is often you, in three
weeks, having forgotten everything.

### `MANIFEST.md` — the identity card

Short and stable. What this graph is called, what kind of graph it is, what version of the standard
it follows. You will rarely edit it after the first day. Other graphs read it when they need to know
what they are dealing with.

### `AGENTS.md` — local conventions

Guidance scoped to one directory. A graph can have many of these, and each applies only inside its
own folder: how to name things here, what this directory is for, what to be careful about.

They exist so the top-level rules can stay short. Detail that only matters inside one folder should
live in that folder, not in the file every single session has to read.

## Rules, state, identity, local detail

That is the whole shape, and the split is doing real work:

| File | Answers | Changes |
| --- | --- | --- |
| `CLAUDE.md` | "What are the rules here?" | Rarely |
| `STATE.md` | "What is happening right now?" | Constantly |
| `MANIFEST.md` | "What is this thing?" | Almost never |
| `AGENTS.md` | "What applies in this folder?" | Occasionally |

Put a rule in the state file and it gets lost in the churn. Put state in the rules file and people
stop believing the rules. The separation is not bureaucracy; it is what keeps each file worth
reading.

## What your agent does with this

Your assistant reads these in a deliberate order, and knowing the order tells you where to put things
so they actually get used.

It loads the governing file first, because that sets the rules for everything that follows. It reads
the state file to find out what is live. Then — and only then — it goes looking for the specific
context your request needs, guided by what those two files told it. When it enters a subdirectory, it
picks up that directory's local guidance.

The practical consequence: **anything you want your assistant to always do belongs in the governing
file, not in a note buried three folders down.** A rule the assistant never reads is a rule that does
not exist. Likewise, keeping the state file honest is not paperwork — it is the difference between an
assistant that resumes your work and one that has to ask you what is going on every time.
