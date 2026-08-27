---
type: artifact
artifact_class: recruitment_brief
campaign: campaign_haussmann
mission: mission_haussmann_p5_1_human_evidence
phase: P5
objective: O0
title: "P5.1 recruitment brief — five cold readers across three profiles (operator action)"
created: 2026-08-26
updated: 2026-08-26
status: ready_for_operator
last_edited_by: agent_rosetta
executor_tier: opus
grounded_in:
  - "mission_haussmann_p5_1_human_evidence.md AC-1 (amended + signed 2026-08-26)"
  - "artifacts/p0_1/panel_kit.md §Recruitment brief (reused verbatim; only the stimulus changed)"
  - "artifacts/p5_1/panel_kit_v2.md (the kit this brief feeds)"
  - "evidence/coldreads/ (P2.6 clinician cold-read — the ancient-DNA misparse)"
tags: [artifact, haussmann, p5_1, recruitment, operator, panel]
---

> **⛩ THIS IS THE HANDOFF. Everything here is an operator action.** Agents must not recruit humans.
> This brief is what O0 exists to produce; the agent side of P5.1 resumes at transcription and scoring.

# Recruitment brief — P5.1 cold-reader panel

**What you are being asked for:** five people who have never seen adna.network, five minutes each, on
a screen-share or in person. That is the whole ask.

**Why it cannot be delegated:** the campaign's entire credibility case rests on this being real humans.
Every synthetic reader so far has been tagged `[D-syn]` and treated as a disclosed stand-in. ADR-048 —
the site's positioning — was **ratified on a synthetic pre-screen alone**, with the human panel
**waived at DP2**, and that deviation is recorded in the ADR to this day. **This panel is what
discharges it.**

## The ask, in numbers

| | |
|---|---|
| **Panel size** | **≥5.** Five is the minimum that makes the pass bar meaningful. |
| **Pass bar** | **≥4 of 5** answer Q1–Q3 correctly, unaided, within ~30 seconds of first seeing the page |
| **Time per reader** | ~5 minutes (30s silent + three questions + ~3 min free scroll + three questions) |
| **Your time** | ~10 min per reader including setup, plus scheduling |

## The three profiles — at least one each

| | Profile | Who that means |
|---|---|---|
| **(a)** | **Senior engineer** unfamiliar with this project | Distributed-systems / backend types ideal |
| **(b)** | **Domain expert unfamiliar with agents** | Clinician-researcher, foundation program officer, or scientist — the E-audience |
| **(c)** | **Prospective contributor** | An active open-source person |

Rounding out with 1–2 more from any profile is fine. ⚠ **Profile (b) is the one to protect** — see the
ancient-DNA note below; if only one profile is hard to fill, fill this one anyway.

## Who qualifies — the burn rule

**Has never seen adna.network and has never heard you describe it in detail.** ⛔ **A colleague who
watched you demo it is burned.** So is anyone you have pitched, anyone who has read the repo, and
anyone who has seen an earlier draft of the hero.

This rule is stricter than it feels. The measurement is *what a stranger understands in thirty
seconds*; a warm reader produces a number that looks like a pass and means nothing.

## Consent — read or paste this before starting, and record the yes

> *"This is an anonymous 5-minute website test for an open-source project. Your verbatim answers will
> be recorded in the project's public planning records without your name — a role label only (e.g.
> 'senior engineer'). OK?"*

The yes goes in the transcript. **No yes, no transcript.**

## Medium

Screen-share call, in person, or async. ⚠ **Async loses the 30-second timing rigour** — note it in the
transcript if used, rather than letting a looser run be read as a strict one.

## ⭐ One thing to watch for, and it is not a formality

P2.6's clinician cold-reader read **"aDNA" as *ancient DNA*** — the standard abbreviation in her field.
ADR-048's fix (the *"(agentic DNA)"* expansion in the first clause) was chosen because a **synthetic**
pre-screen said it killed the misparse. **No human has ever tested it.**

That is what **Q6** — *"Did the name make you think of anything else?"*, asked of profile-(b) readers
only — is for. **Do not lead.** A profile-(b) reader who still misparses the name is a **finding**, and
one that reaches the positioning, not a bad panellist.

## The three rules that make the run valid

1. **Never explain, correct, or defend mid-session.** Debrief only after Q6. The urge to help is the
   single biggest threat to the validity of the run.
2. **Record verbatim.** Their words, not a summary of their words. Q5 in particular wants *exact
   phrases* — "what confused you?" is only useful at that resolution.
3. **Show the live site**, `https://adna.network/`, and **capture the build stamp before each
   session** (`curl -s https://adna.network/.well-known/adna-build.json`, pasted into that reader's
   transcript). If it changes mid-panel, that is fine — just record which reader saw which.

## What happens with what you bring back

Transcripts → `evidence/p5_1/panel/`. Two independent scorers grade Q1–Q3 against ADR-048's positioning
substance, **raw sheets committed before either sees the other's**, reconciliation after. Scorer
disagreement is recorded as a finding, never resolved away.

**If it passes**, ADR-048's DP2 deviation is discharged against real humans and P5.2 can cite `[D]`
where it currently has `[D-syn]`.

**If it fails**, the verbatim confusions drive one revision loop and a re-panel with *fresh* readers.
⛔ **That is out of this mission's ratified budget** and will be re-scoped in the open — not absorbed
quietly. A failing verdict reopens the positioning question at DP9, in public. **Failures here are
findings, not embarrassments** — a panel that cannot fail was not worth running.
