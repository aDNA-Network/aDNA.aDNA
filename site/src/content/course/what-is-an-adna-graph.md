---
title: "What is an aDNA graph?"
description: "A folder of plain text your AI assistant reads as its memory — and the one question that tells you where anything belongs in it."
lesson_title: "What is an aDNA graph?"
order: 1
level: orientation
estimated_minutes: 10
prerequisites: []
dual_audience: true
learner_can:
  - "Explain an aDNA graph to someone else in one sentence"
  - "Name the three parts of the triad and say what each one holds"
  - "Use the Question Test to decide where a new piece of knowledge belongs"
check:
  kind: sorter
  bins:
    - "what/"
    - "how/"
    - "who/"
  items:
    - text: "Which database does our billing service use?"
      bin: "what/"
    - text: "What are the steps for shipping a release?"
      bin: "how/"
    - text: "Who has to approve a change to the pricing page?"
      bin: "who/"
    - text: "What does our payment system send back when a card is declined?"
      bin: "what/"
    - text: "How do we get a new teammate set up on their first day?"
      bin: "how/"
    - text: "Which team owns the search feature?"
      bin: "who/"
    - text: "What is our target for test coverage this quarter?"
      bin: "what/"
    - text: "How do we undo a release that broke something?"
      bin: "how/"
---

## Start with the folder

Someone has handed you a directory. Inside it are more directories, and inside those are text files.
No app, no database, no login screen. It looks like the least impressive thing you have ever been
given.

Here is the one-sentence version of what it actually is:

> **An aDNA graph is a folder of plain text that an AI assistant reads as its memory before it helps
> you.**

That is the whole idea. When you open a conversation with an assistant in this folder, it reads the
files first, and then it already knows what your project is, how your team does things, and who
decides what. You do not have to explain yourself again every morning.

The files are ordinary Markdown — the same thing a README is. You can read every one of them with
nothing but a text editor. Nothing is compiled, nothing is hidden, and if the tooling vanished
tomorrow you would still have everything, because the knowledge was never inside the tool.

## Why a folder and not an app

Three reasons, and they are worth understanding rather than taking on faith.

**You can read it.** A system that stores your team's knowledge somewhere you cannot inspect is a
system you have to trust. Text in a folder is knowledge you can check. Open a file, disagree with
it, fix the sentence.

**Your version control already handles it.** Text files diff, review, and revert. The history of how
your understanding changed is the same history as your code — same tools, same review, no separate
product to buy.

**Assistants are good at text.** This is the practical part. An AI assistant reads Markdown natively
and well. Structuring your knowledge as text is not a compromise to make the machine happy; it is
the format both of you are best at.

## The triad

Open the folder and you will find three directories that show up in every graph:

- **`what/`** — what we know. Facts, decisions, specifications, reference material. Things that are
  true about your project.
- **`how/`** — how we do things. Procedures, workflows, the record of work in progress. Things you
  follow or perform.
- **`who/`** — who is involved. People, roles, identity, and the messages passing between separate
  graphs.

That is it. Three drawers. Nearly everything you will ever add belongs cleanly in one of them, and
the reason the split works is that it matches the three kinds of question people actually ask.

## The Question Test

When you have a new piece of knowledge and you are not sure where to put it, do not guess. Turn it
into a question and see which one it sounds like:

| The question you are answering | Where it goes |
| --- | --- |
| "What do we know?" | `what/` |
| "How do we do it?" | `how/` |
| "Who is involved?" | `who/` |

"Our staging environment runs on the same database version as production" answers *what do we know*.
It is a fact. It goes in `what/`.

"Deploy by merging to the main branch, then watching the health dashboard for ten minutes" answers
*how do we do it*. It is a procedure. It goes in `how/`.

"Priya reviews anything that touches authentication" answers *who is involved*. It goes in `who/`.

The test takes about two seconds and it is right the overwhelming majority of the time. When it is
genuinely ambiguous, that is usually a sign the note is doing two jobs and wants to be two notes.

## What your agent does with this

Here is the half that makes the folder more than tidy filing.

When you ask your assistant to do something, it does not read the entire folder — that would be slow
and expensive, and most of it would be irrelevant. It reads the governing files first, works out
which part of the graph your request touches, and then loads only that part.

So the triad is not decoration. It is how the assistant narrows down. A question about your release
process sends it to `how/`, and it never has to wade through `what/` to find out. A well-sorted graph
makes your assistant faster and more accurate, and a folder where everything is dumped in one place
makes it slower and vaguer. The Question Test is the small daily habit that keeps it sorted.

## Try it

Think of one thing you know about your current project that nobody has written down — a quirk, a
rule, a person to ask. Say it out loud as a question. Which drawer does it want?

Then do the check below.
