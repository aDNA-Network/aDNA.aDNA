---
type: artifact
mission: primer
objective: O4
title: "Cover note to Andy — the body of the message that carries the primer (≤ 4,000 characters; plain register; no vault paths; the character count is derived by script, never typed)"
created: 2026-10-04
updated: 2026-10-04
status: active
last_edited_by: agent_rosetta
chars_derived: 2547   # DERIVED by script 2026-10-04 — body below the marker line, UTF-8 characters; limit 4,000
tags: [artifact, cover_note, o4, data_engineer]
---

<!-- BODY STARTS BELOW THIS LINE; everything above is vault bookkeeping and is not sent -->
Andy —

Attached (or linked, depending on how this reaches you) is a primer I had written for you: "aDNA for data engineers". It is about 7,500 words, around 40 minutes, with five diagrams, and it exists because you asked a fair question — what is this thing I keep running my projects on, and why would a data engineer care.

The short version. aDNA (Agentic DNA) is a standard for organising a project's knowledge so that AI agents and humans can both navigate it: three directories (who / what / how), five short governance files at the root, YAML frontmatter on every content file, and the rule that an agent reads the governance files first and then only the directory it is working in. That is the whole standard, and it is small on purpose. On top of it sits a layer of practice we built running a few dozen such projects: how work is budgeted in tokens, how agents coordinate without overwriting each other, and how projects federate into a network. The document is careful to say which is which — there is a closing table that tags every mechanism as part of the standard, part of our practice, or still provisional.

If you only have ten minutes: read section 0, then 2.1 to 2.4, then section 7, which maps all of it onto things you already build — pipelines, contracts, lineage, catalogs — and says honestly where the mapping is exact, close, or a stretch. Section 8 is a 20-minute try-it-yourself with a public repository and a validator.

Two things to know going in. First, the document was drafted and revised by an AI agent working in my project, and reviewed through several passes (a correctness pass against the standard's text, an archivist's pass, a sceptic's pass, and a read as a data engineer) before I read and approved it. I am telling you that because every file in these projects records whether a human or an agent last touched it, and a note like this should hold itself to the same rule. Second, nothing in it is a pitch. Where the practice layer has not been proven, the text says so, and the appendix says what is normative and what is only us.

I would genuinely like your read on three things: whether the crossmap in section 7 is honest from where you sit; whether the "getting started" path in section 8 actually works for someone who has not seen any of this before; and anything that made you stop and think "that is just X with a different name" — because you may well be right, and the document would rather say so than not.

No rush, and no obligation to reply at length. A sentence is plenty.

— Stanley
