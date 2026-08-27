---
type: artifact
artifact_type: panel_kit
campaign_id: campaign_haussmann
mission: mission_haussmann_p0_1_positioning
title: "P0.1 O4 — human cold-reader panel kit + recruitment brief (the directive's Phase-0 gate)"
created: 2026-08-16
updated: 2026-08-26
status: superseded   # §Stimulus expired; P5.1's operative kit is panel_kit_v2.md. Retained as the P0.1 record (SO-6).
last_edited_by: agent_rosetta
tags: [haussmann, p0_1, panel, cold_readers, dp2]
---

# Human cold-reader panel — kit + recruitment brief

> **This is the instrument the synthetic pre-screens stood in for.** The pass bar gates ADR-048's
> ratification (DP2) and, downstream, the campaign's P0 exit. Agents prepared everything below;
> **recruiting and running the panel is the operator's** — agents must not recruit humans or coach
> answers. Evidence protocol: instrument §6 Step 5 discipline — *record verbatim; do not intervene,
> do not clarify, do not defend.*

## Recruitment brief (for the operator)

- **Panel size**: ≥5. **Pass bar**: ≥80% (4 of 5 at minimum size) answer Q1–Q3 correctly, unaided, within ~30 seconds of first seeing the page.
- **Profiles** (≥1 each, per the directive): (a) **senior engineer** unfamiliar with this project (distributed-systems/backend types ideal); (b) **domain expert unfamiliar with agents** (clinician-researcher, foundation program officer, or scientist — the E-audience); (c) **prospective contributor** (active OSS person). Rounding out with 1–2 more from any profile is fine.
- **Who qualifies**: has never seen adna.network or heard you describe it in detail. A colleague who watched you demo it is burned.
- **Consent line** (read or paste before starting): "This is an anonymous 5-minute website test for an open-source project. Your verbatim answers will be recorded in the project's public planning records without your name — a role label only (e.g. 'senior engineer'). OK?" Record the yes.
- **Medium**: screen-share call, in-person, or async (send the link + the questions; async loses the 30-second timing rigor — note it in the transcript if used).

## Session script (per reader — ~5 minutes)

1. Show the staged hero (URL or screenshot — **the post-pick draft build**; see Stimulus below). Start a 30-second timer. Say only: *"Take a look."*
2. At ~30s ask, in order, recording verbatim:
   - **Q1** "What is this?"
   - **Q2** "Who is it for?"
   - **Q3** "What is it *not*?"
3. Then unfreeze — let them scroll/click ~3 more minutes. Ask:
   - **Q4** "Would you try it? What would you do first?"
   - **Q5** "What confused you? Any words that lost you?" (get exact phrases)
   - **Q6** *(profile-b only)* "Did the name make you think of anything else?" (the ancient-DNA probe — do NOT lead)
4. Thank + stop. **Never** explain, correct, or defend mid-session; debrief only after Q6.

## Scoring sheet (one row per reader)

| Reader (role label) | Q1 correct? | Q2 correct? | Q3 correct? | ≤30s unaided? | Verbatim file |
|---|---|---|---|---|---|

Correct = matches ADR-048's positioning statement in substance (their words, not ours). Disagreement between scorers about "correct" is itself a finding — record it. Transcripts → `artifacts/p0_1/panel/reader_<n>_<role>.md`, verbatim, with the consent yes noted.

## ⛔ Stimulus — **SUPERSEDED 2026-08-26. DO NOT USE THIS SECTION FOR P5.1.**

> **This kit's stimulus expired and the kit could not say so.** The block below was written on
> 2026-08-16 under an explicit temporary condition — *"**not** production, which keeps the current
> hero until DP2"*. **DP2 ratified on 2026-08-16, the hero shipped, and P4.5b then rewrote the very
> copy panellists cold-read.** Measured at the **live twin** on 2026-08-26 `[D]` (surface matched to
> the claim's verb per convention 17's amendment — *"a reader encounters this copy"* is a question
> about rendered flattened text, not about HTML):
>
> | | Draft, i.e. what this kit shows | Live, i.e. what a panellist would actually see |
> |---|---|---|
> | definition | *"…always know where things live: three folders, plain Markdown, **versioned** in git."* | *"…can always **find what they need**. Three folders, plain Markdown, **tracked** in git."* |
> | third para | *(none)* | *"Your context is just the notes, docs and decisions you already keep…"* |
>
> ⇒ **P5.1's stimulus is the LIVE PRODUCTION HERO at the recorded build stamp**, per its amended
> **AC-1** (`ac_amendment_proposal.md` §2, `accepted` 2026-08-26). The operative kit is
> **[[panel_kit_v2]]**; this file stands as the P0.1 record.
>
> ⭐ **Struck, not deleted (SO-6), and the reasoning is the reusable part:** *a criterion — or an
> instrument — amended around a temporary condition must be re-read when the condition expires.*
> Fourth sighting in this campaign, and note the direction: P4.5b's AC-a **under-claimed** and
> self-announced; **this one would have run the wrong stimulus and reported a perfectly valid panel.**
> Nothing would have caught it at run time except a panellist reading a screenshot of retired copy.
> ⚠ **And the same stale sentence sat in ADR-048 §Status** — a *ratified decision record* — so it was
> never only an instrument defect; corrected there under ruling 5 on the same day.

~~Show readers the **A-direction hero draft** (text in ADR-048 §Direction-picked; stage it as a local preview build or a composed screenshot — **not** production, which keeps the current hero until DP2). The draft, compactly: "aDNA (agentic DNA) is an open standard for organizing a project's files so AI agents — and the people working with them — always know where things live: three folders, plain Markdown, versioned in git. This site is the standard, its docs, and the registry of workspaces — 'vaults' — that run it." + audience sub + NOT-line + install block + annotated tree; lyric band directly below.~~

## After the panel

Pass → attach transcripts + scoring sheet to ADR-048; operator ratifies at **DP2**; P0 exit-gate row satisfied. Fail → the verbatim confusions drive one revision loop, then re-panel (fresh readers — the old ones are burned).
