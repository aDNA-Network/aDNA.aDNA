---
type: evidence
title: "O2 — guided VoiceOver session script (⛩ operator, ~30 minutes)"
campaign: campaign_haussmann
created: 2026-08-24
status: ready_to_run
last_edited_by: agent_rosetta
tags: [haussmann, p4_3, a11y, voiceover, o2, operator_gate]
---

# O2 — VoiceOver session script

> ⛩ **This is the one piece of P4.3 that no headless instrument can do**, and the reason it exists is
> narrow and specific: `gate-45` proves a screen reader **receives** the right semantics; only a human
> ear can say whether what it **says** is useful. The session is **~30 minutes**. ⛩ Operator deferred
> the sitting at the O1 resume; this script was authored **after** the keyboard pass so its listening
> items are the ones that pass actually raised, rather than a generic checklist.

## Before you start (2 min)

```bash
cd ~/aDNA/aDNA.aDNA/site
npx astro build && node scripts/inject_redirects.mjs . && node scripts/inject_negotiation.mjs .
npx astro preview --port 4321          # leave running; the site is at http://localhost:4321
```

⛔ **This is a LOCAL PREVIEW, not production.** The deploy freeze holds; production is serving a build
that predates P4.1 + P4.2 + P4.4a. **Anything you hear here is a statement about this tree**, which is
the correct subject — and it is exactly the G-11 hazard the freeze sweep found in P5.1: evidence
gathered against the wrong build goes green and is silently invalid. Record the commit:
`git rev-parse --short HEAD`.

**VoiceOver**: `⌘ F5` to toggle. `⌃⌥` is the VO modifier. `VO + →` next item · `VO + ⇧ + ↓` interact ·
`VO + U` rotor (then ← → for headings/links/landmarks) · `⌃` silences speech. If you have never
driven it, spend two minutes on any page first — the point is to judge *what it says*, and that is
hard to hear over learning the keys.

## How to record what you hear

For each item: **what was said** (roughly, in quotes), then one of **CLEAR / CONFUSING / SILENT**.
*Silent when something happened* is the most valuable observation in the session — it is the one an
automated instrument structurally cannot make.

Write answers straight into `## Findings` at the bottom of this file, or dictate them and paste; do not
worry about tidiness. **A rough note that is true beats a clean one that is reconstructed afterwards.**

---

## 1 · Home — the opening (4 min) · `/`

`⌘ F5`, then `VO + →` about fifteen times from the top.

1. Is the **first** thing announced the skip link? Does *"Skip to main content"* make sense as the
   first thing you hear on this site?
2. Activate it (`VO + Space`). **Did the announcement tell you that you had moved?** Focus does move
   to `main#main-content` — the question is whether you could *tell*.
3. The hero graph is a `<canvas>` marked decorative with a separate keyboard/AT nodelist twin. **Do
   you hear the graph twice, once, or in a confusing order?**
4. Rotor → Headings (`VO + U`, then arrows). **Does the heading list read like an outline of the
   page**, or like a list of fragments?

## 2 · Get started — the install flow (5 min) · `/get-started`

5. Tab to the first code block's **copy button** and press `VO + Space`.
   ⭐ **THIS IS THE SESSION'S SHARPEST QUESTION.** The handler swaps the button's `aria-label` from
   *"Copy code"* to *"Copied!"* for two seconds. **Did VoiceOver say anything at all?** Name changes
   on an already-focused element are announced inconsistently, there is no live region here, and the
   keyboard pass could establish only that the attribute changes — never whether you hear it.
   Answer exactly one of: **it announced "Copied!" / it said something else / it was SILENT.**
6. The `<pre>` blocks carry `tabindex="0"` so scrollable code is keyboard-reachable. When you land on
   one, **is it clear you are inside a code sample**, and can you read it line by line?
7. Is the install command itself intelligible **read aloud** — or does it become an unpunctuated
   stream? (No fix is implied. This is a judgement about how a command sounds, which needs an ear.)

## 3 · The registry — filtering, and the live region (6 min) · `/vaults`

8. Tab to the search field. **Is its purpose clear from what is announced** (the placeholder is long:
   *"Search by name, persona, class, stage, or purpose…"*)?
9. Type `zzzznomatch`. The result-count region is `role="status" aria-live="polite"` and becomes
   *"0 of 74 vaults — nothing matched"*. **Did you hear it? How long after you stopped typing?**
   ⭐ `gate-45` proves it **is spoken** (mutation M6: strip `aria-live`, leave the text correct, the
   gate goes red). This asks the different question: **was it useful — did it arrive when you needed
   it, and did it tell you what to do next?**
10. Clear it, then tab to a filter chip (e.g. *"in use 7"*) and activate. **Is it clear (a) which
    filter is now on, and (b) how many results there are?**
11. ⚠ **The empty-state mark sits OUTSIDE the live region** while the count line sits inside it
    (P4.2's residue, narrowed). When the set is empty, **do you hear the empty state, or only the
    count?**

## 4 · The graph twin — partial equivalence (6 min) · `/vaults/graph/`

12. The keyboard/AT twin is a node **roster** in a visually-hidden `<nav>`. **Can you form any picture
    of the graph from it?**
13. ⭐ **The AC4 question, and the reason the session includes this page.** `machine_eye` item 14 found
    the twin is a **partial** equivalent: it lists nodes but **not edges** — which vault points to
    which, with direction and type. **Listening to it, is the missing relationship information
    something you notice — or does the roster feel complete?** Your answer decides AC4's disjunct:
    upgrade the twin to enumerate edges, or state the limitation on the page.
14. Follow a node (`VO + Space` on e.g. *"RareHarness"*). It navigates to `/vaults/harness/`.
    **Was it clear you had left the graph and arrived somewhere new?**

## 5 · A reference page — long-document navigation (4 min) · `/reference/specification`

15. Rotor → Landmarks. **Are the regions named in a way that helps** (banner / main / nav / footer)?
16. Rotor → Headings. This is a long spec page. **Could you get to a mid-document section without
    listening to the whole thing?**
17. Anything read aloud that is meaningless to hear — a raw slug, a bare punctuation run, a repeated
    "link link link"?

## 6 · Free listening (3 min)

18. Go anywhere. **What is the single most annoying thing this site does to a screen-reader user?**
    ⭐ **Please answer this one even if the answer is "nothing" — a genuine nothing is a result**, and
    the whole point of the human instrument is that it can notice what nobody thought to ask about.

---

## What happens to your answers

- **CLEAR** items become the evidence line for **D11 check 5** (VoiceOver), recorded **PARTIAL** by
  design because check 5 also asks for **NVDA**, which is Windows-only and unreachable on this L1
  macOS node — never silently passed.
- **CONFUSING / SILENT** items become known limitations in the **accessibility statement** (O3), where
  AC5 requires them to be **TRUE and read from register rows**, not paraphrased.
- Item **13** decides **AC4**. Item **5** decides whether the copy confirmation needs a live region.
- ⛔ **Nothing you find here can be deployed.** The freeze holds; P4.3 is the fourth mission
  built-not-deployed, and the close says so rather than leaving it inferred from a `completed` status
  that cannot express it.

⚠ **This session is not an assistive-technology USER study**, and the record must not be cited as one.
A sighted operator driving VoiceOver is a real instrument and a different one. That distinction is
**G-8**, and it is why this mission's honest ceiling is **D11 = 4, not 5**.

## Findings

### Pre-flight — done for you, 2026-08-25 (agent)

| | |
|---|---|
| **Date of sitting** | 2026-08-25 |
| **Commit under test** | `745d462` `[D]` — record it here so this evidence can never be mistaken for a statement about production (**G-11**) |
| **Build** | `npx astro build` + `inject_redirects.mjs .` + `inject_negotiation.mjs .`, all clean |
| **Preview** | `http://localhost:4321` — **UP**, all five surfaces 200 `[D]` (`/` · `/get-started` · `/vaults` · `/vaults/graph/` · `/reference/specification`) |
| **Production, for contrast** | serving `922519c` — **predates P4.1 + P4.2 + P4.4a + P4.3**. Do not listen there. |

⛩ **Operator — fill the table below during the session.** A rough note that is true beats a clean one
reconstructed afterwards. ⭐ marks the four items something downstream actually waits on; the rest are
still worth recording, but nothing blocks on them.

| # | Page | What was said | CLEAR / CONFUSING / SILENT | Note |
|---|---|---|---|---|
| 1 | `/` skip link first? | | | |
| 2 | `/` did activating it tell you you moved? | | | |
| 3 | `/` graph heard twice, once, confusing? | | | |
| 4 | `/` heading rotor — outline or fragments? | | | |
| ⭐ 5 | `/get-started` copy button — **decides whether the copy confirmation needs a live region** | | | announced "Copied!" / said something else / SILENT |
| 6 | `/get-started` clear you are inside a code sample? | | | |
| 7 | `/get-started` is the install command intelligible aloud? | | | no fix implied |
| 8 | `/vaults` search field purpose clear? | | | |
| ⭐ 9 | `/vaults` live region on `zzzznomatch` — **useful, not merely present** | | | how long after you stopped typing? |
| 10 | `/vaults` filter chip — which filter, how many results? | | | |
| 11 | `/vaults` empty state heard, or only the count? | | | P4.2 residue |
| 12 | `/vaults/graph/` can you form a picture from the roster? | | | |
| ⭐ 13 | `/vaults/graph/` **is the missing edge information noticeable? — DECIDES AC4** | | | roster incomplete ⇒ build edges · roster complete ⇒ state the limitation |
| 14 | `/vaults/graph/` clear you had left and arrived somewhere new? | | | |
| 15 | `/reference/specification` landmarks named helpfully? | | | |
| 16 | `/reference/specification` reachable mid-document via headings? | | | |
| 17 | `/reference/specification` anything meaningless to hear? | | | raw slug / punctuation run / "link link link" |
| ⭐ 18 | anywhere — **single most annoying thing for a screen-reader user** | | | ⭐ answer even if the answer is "nothing" — a genuine nothing is a result |
