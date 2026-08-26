---
type: doctrine
title: "Site voice — the registers adna.network writes in, and the rule for moving between them"
created: 2026-08-25
updated: 2026-08-25
status: proposed        # ⛩ operator sign-off at P4.5b's O0 gate, alongside artifacts/p4_5b/ac_amendment_proposal.md
last_edited_by: agent_rosetta
campaign: campaign_haussmann
mission: mission_haussmann_p4_5_voice_rewrite
increment: P4.5b
objective: O0d
grounded_in:
  - "what/decisions/adr_048_positioning_statement_embargo_language.md (§Direction candidate A; the 'lives' avoid-class, which §54 explicitly seeds into this guide)"
  - "the /about register — the one surface a cold-reader called 'the most honest project page I've read in years'"
  - "evidence/coldreads/coldread_SYNTHETIC_clinician_researcher.md §5 (ten verbatim confusions)"
  - "evidence/sweep/reading_level_p4_5b_baseline.md (FKGL over the .md twins, deployed tree 6675442)"
published_at: "/design-system#voice (proposed — reuses the surface that already carries the diagram construction rules, rather than spending one of ADR-049's seven nav slots)"
tags: [doctrine, voice, copy, adna_network, haussmann, p4_5b, dual_audience]
---

# Site voice

> **What this is.** The rules adna.network's copy is written to. Not a style sheet of preferences — every
> rule below exists because a specific sentence on this site confused a specific reader, or because a
> measurement said so. Where a rule has no evidence behind it, it is marked as taste and you may argue.
>
> **Who it is for.** Anyone writing or rewriting a sentence that ships to the site — human or agent.

## 0. The one law the rest serve

**Honesty is the aesthetic.** The site's refusal to overstate itself is its strongest asset, not a
constraint on it. Claims move **down** to what can be verified, never **up** to what would be impressive.

This is not a moral posture; it is the positioning. A standard for trustworthy context that overstates
itself has refuted its own thesis in the fold.

## 1. Two registers, and where each belongs

The site writes in two registers. **Both are legitimate. The failure is never the lyric register itself
— it is the lyric register arriving before the reader knows what the thing is.**

| | **Plain** | **Lyric** |
|---|---|---|
| does | states what a thing is, in words a stranger already owns | compresses a truth the reader has just been given |
| example on this site | *"aDNA is early — and honest about it."* | *"humanization and decentralization are the same curve."* |
| belongs | first contact; any definition; anything load-bearing | after the plain sentence has landed |

### The transition rule

> **Plain before lyric, on every surface, every time. The lyric line may summarise what the reader now
> knows; it may never be the thing that introduces it.**

`/about` is the worked example and it is already right: it opens *"aDNA is early — and honest about it"*
(plain), spends four sections on named people and named limits (plain), and only then earns
*"humanization and decentralization are the same curve"* (lyric, last, and it costs the reader nothing
because they already have every part of it).

The homepage is the counter-example. A clinician cold-reader hit *"a context democracy"* in the
30-second zone and recorded: *"headline concept, never landed for me."* Same register, no groundwork.

⚠ **The rule is about ORDER, not about ratio.** "Cut the lyric lines" is the wrong reading and produces
worse copy — flat, unmemorable, and no more honest. Move them.

## 2. Tense

**Write what is true now, in the present. Write what is not yet true in a tense that says so.**

Aspirational present tense is a defect (anti-pattern 7.5), not a flourish: *"the network where teams
share context"* describes a network that does not exist yet in that form, in the grammar of one that
does. A reader cannot tell the difference, which is precisely the problem.

- ✅ *"stewarded today by one person"* — present, true, dated by the word *today*.
- ✅ *"As real stewards join, they take the roles the agents keep"* — future, marked.
- ⛔ *"a network of teams sharing context"* when the count is one node.

**Anything describing a surface outside this site carries its probe date** (ADR-054 clause 3). A sentence
about a third party is true *as of* a moment, and P3.4 shipped a gate that defended a stale one for four
days because nothing could express *true as of when*.

## 3. The one-new-term law

> **At most one new proprietary term per paragraph, defined at first use, linked to its glossary entry.**

A paragraph introducing two undefined nouns has not introduced either. The clinician's list is almost
entirely this failure:

- *"Modules, datasets, and lattices compose into workflows"* — **three** undefined nouns in nine words.
  Recorded verbatim as *"three undefined nouns."*
- *"a wrapper directory with a `federation_ref` block, the same pattern every forge consumer uses"* —
  wrapper, `federation_ref`, forge consumer. *"I don't know what a forge consumer is."*
- *"built on the Lattice Protocol — the coordination layer, opening progressively"* — *"what is a
  coordination layer, and what does 'opening progressively' mean?"*

**The glossary is the single canonical definition home** (D4.7). Define in place with a clause, then link;
do not define the same term twice in two voices, because then there are two definitions.

⚠ **Defining a term in place makes a sentence longer and its reading grade higher.** That trade is
accepted deliberately: **a grade-9 sentence about an undefined noun is not more readable than a grade-11
sentence that defines it.** Reading level is a proxy; comprehension is the thing.

## 4. Say the limit in the same breath as the claim

The move that makes `/about` work, in four shapes worth copying:

1. **Concede, then claim.** *"aDNA is early — and honest about it."*
2. **State the limit as part of the fact.** *"stewarded today by one person … That's the honest current
   state — not a council we haven't formed."*
3. **Pre-empt the objection in the reader's own words.** *"read this as a close relationship rather than
   an independent organisation vouching for us."*
4. **Answer "why should I believe you" out loud.** *"Why name the agents at all? Because it's true, and
   because it's how the work actually gets done here. Hiding it would be less honest, not more credible."*

A reader who has been handed the counter-argument has nothing left to catch you at. That is where the
credibility comes from — not from the absence of weaknesses.

## 5. Disclose at the point of confusion, not three pages later

**A true statement placed below the moment a reader needs it is not yet a disclosure.**

Measured on the deployed tree `6675442` (surface: `dist/**/*.html`):

- **41** pages name an agent persona. **4** disclose that personas are AI. The homepage says *"tended
  by"* and does **not** disclose. The clinician: *"I assumed these were people until the About page told
  me… Honest once found, but three pages late."*
- The **aDNA / ancient-DNA** name collision is addressed on **4** pages — all of them deep reference or
  concept pages. **None** is `/`, `/learn`, `/get-started` or `/about`. The clinician: *"in my field aDNA
  means ancient DNA… I briefly expected paleogenomics."*

⇒ **Both disclosures exist and both are misplaced.** When a rule below says *disclose*, it means at first
encounter, on the surface where the confusion happens.

## 6. Avoid-list (each entry earned)

| avoid | why | instead |
|---|---|---|
| *"lives" / "lived"* for where context is | **two blind readers independently misread it as a hosted destination** (ADR-048 §50, which seeds this guide by name) | say where the files are: *"on your machine"* |
| *"a context democracy"* as a headline | *"headline concept, never landed for me"* | say the thing, then compress it later if it earns the line |
| *"opening progressively"* unglossed | *"what does 'opening progressively' mean?"* — and it is **embargo-mandatory** wording, so it stays but must be **explained on first use** | keep the phrase, add the clause |
| first-screen counters — *"16 Entity Types"*, *"3 Conformance Levels"* | *"first-screen counters that mean nothing to a newcomer"* | keep the numbers where a reader has a reason to want them |
| circular definitions | *"a node is a `Home.aDNA` plus the vaults that live on it"* — **circular to an outsider, and live on 75 pages from one component line** | define the outer term without the inner one |
| status labels with no legend | *"org vault pending"* — ✅ already gone | label + one-clause legend, or no label |
| internal shorthand on public surfaces | *"Renamed from TaskForge.aDNA (Production Tidy pt08"* — ✅ already gone, retired by P1.3 | the leak gate is the enforcement; this is the rule it enforces |
| *"not an add-on bolted on later"* and its family | **cut before shipping at P3.3** — it was disprovable from this campaign's own mission files | make the narrower structural claim that is true |

## 7. Reading level — what the number is and is not

Targets (AC-b): **FKGL ≤ 10** on first-contact surfaces, **≤ 12** on reference intros. Measured over the
`.md` twins; method and normalization in [[reading_level_p4_5b_baseline]].

**What the number can tell you:** sentences are too long, or the words have too many syllables. Both are
real and both are fixable.

**What it cannot tell you — and this is why AC-c exists separately:**

- **A page can score ≤ 10 and be incomprehensible** if its nouns are undefined. FKGL counts syllables,
  not whether the reader knows the word.
- **List-shaped pages score nonsense.** `/vaults` reads **40.96** because 77 sentence-endings collapse
  into 3 detected sentences. Its prose is a fine 3-sentence intro. **Three pages of 223 are like this**;
  chasing their numbers means rewriting nothing.
- **Passive-voice ratios on short pages are noise** — the denominator is sentence count.

⇒ **Never rewrite to move a number.** Rewrite because a reader was lost, and let the number confirm it.

## 8. How to know a rewrite is done

1. A stranger reads the first screen without a dictionary.
2. A developer still finds the precision — nothing was made vague to be made simple.
3. Nothing in it can be caught overstating. Run it past the claim register
   (`evidence/claims/claim_register.md`); the register is the arbiter, not this guide.
4. The measured grade level agrees.

**In that order.** 4 is the confirmation, never the goal.

---

## Self-reference (Standing Order 8)

This guide is the vault demonstrating its own rule. It opens **plain** ("What this is"), states its law
in one sentence, and spends its length on worked examples from real reader casualties — and it does not
reach for a lyric line at all, because a rules document is not a surface where one is earned. **The
transition rule applied to the document that states it.**

It also names its own limits, per §4: it is grounded in **one** human-adjacent cold-read that was
`[D-syn]` — a disclosed synthetic instrument, not a person. **The human instrument is P5.1's panel**, the
mission immediately after this one. If those transcripts contradict a rule here, the transcripts win and
this file is amended, dated, with the old rule struck rather than deleted.
