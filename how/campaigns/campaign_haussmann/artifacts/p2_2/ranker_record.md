---
type: artifact
created: 2026-08-18
updated: 2026-08-18
status: active
last_edited_by: agent_rosetta
campaign_id: campaign_haussmann
mission_id: mission_haussmann_p2_2_ia_consolidation
tags: [artifact, haussmann, p2, ranker, ia, dp5]
---

# P2.2 O1 — ranker record (IA comps)

> **Instrument recorded in full, deliberately.** P1.2's marquee finding was that a 3.61 score proved
> **not reproducible** — it logged neither its persona set nor 3 of its 6 dimensions, and 2 dimensions
> it *did* name were not in the canonical six. The lesson entered the register as *record the
> instrument with the score, always — an unrecorded measurement decays into a claim.* This record
> exists to be comparable at P2.6.

## Instrument

| Field | Value |
|---|---|
| **Skill** | `how/skills/skill_decadal_aar.md` §Persona Ranker Dimensions |
| **Dimensions (6, canonical)** | Findability · Comprehension · Actionability · Trust · Relevance · Delight |
| **Personas (5, canonical adopter set)** | Solo Dev · Educator · Enterprise · Researcher · Startup |
| **Scale** | 1–5 integer per cell; dimension score = mean across the 5 personas; comp score = mean of 6 dimensions |
| **Gate** | ≥4.0 (mission acceptance criterion, O1) |
| **Stimulus** | `artifacts/p2_2/ia_comps.html` (Current / A / C, both themes) + ADR-049 |
| **Reviewer bench** | **Not invoked.** `skill_decadal_aar` §Step 4b makes it optional and reserves it for decadal cycles; this is a mission-level spike. Recorded as a deliberate omission, not a silent one. |
| **Provenance** | **`[D-syn]`** — disclosed synthetic instrument. See the conflict declaration below. |

### ⚠ Conflict of interest — declared, not managed away

**The agent that authored the comps also scored them.** Campaign convention 4 states *"the builder
never self-certifies"*, and this run violates the spirit of it. P1.2 established the sharper form of
the same finding: **the author of a checkability claim is structurally the worst auditor of it.**

Two things follow, and neither is a workaround:

1. This score is a **pre-screen**, in exactly the sense the campaign's provenance vocabulary defines
   `[D-syn]`: *"the directly observed output of a disclosed synthetic instrument — a pre-screen
   stand-in, never a substitute for the human instruments."* Precedent: P0.1 ran a 3/3 blind
   synthetic pre-screen and still took the decision to a human at DP2.
2. **It is not evidence that either option is good.** It is evidence that both clear the mechanical
   floor and that the two do not separate — which is a finding the operator can act on, and which
   would survive an independent re-run in a way a ranking would not.

An independent re-rank before DP5 is available and is offered to the operator at the halt.

## Option A — consolidate to `/use-cases/`

| Dimension | Solo Dev | Educator | Enterprise | Researcher | Startup | **Avg** |
|---|---|---|---|---|---|---|
| Findability | 4 | 4 | 4 | 4 | 4 | **4.0** |
| Comprehension | 4 | 5 | 4 | 4 | 5 | **4.4** |
| Actionability | 3 | 4 | 3 | 3 | 4 | **3.4** |
| Trust | 4 | 4 | 5 | 5 | 4 | **4.4** |
| Relevance | 4 | 5 | 4 | 5 | 4 | **4.4** |
| Delight | 3 | 4 | 3 | 4 | 4 | **3.6** |
| | | | | | | **4.03** |

**Where the score comes from.** Trust and Relevance carry it: the surviving pages are the ones
already written best, so nothing is re-authored and every reader still finds their own situation
named. **Actionability at 3.4 is the drag, and it is structural, not fixable by copy** — a use case
narrates a scenario where three of five personas arrive wanting instructions. Delight is modest
because A is, honestly, a tidy-up: it removes duplication without saying anything new.

## Option C — retire into positioned sections (task taxonomy)

| Dimension | Solo Dev | Educator | Enterprise | Researcher | Startup | **Avg** |
|---|---|---|---|---|---|---|
| Findability | 4 | 4 | 4 | 3 | 4 | **3.8** |
| Comprehension | 5 | 4 | 4 | 4 | 5 | **4.4** |
| Actionability | 5 | 5 | 5 | 4 | 5 | **4.8** |
| Trust | 4 | 4 | 5 | 5 | 4 | **4.4** |
| Relevance | 4 | 3 | 3 | 3 | 4 | **3.4** |
| Delight | 4 | 4 | 4 | 4 | 5 | **4.2** |
| | | | | | | **4.17** |

**Where the score comes from.** Actionability at 4.8 is the highest single cell-block in either
matrix — a task path tells you what to do, which is what a reader arriving from an agentic tool
wants. **Relevance at 3.4 is the exact mirror of A's weakness**: no reader sees themselves named,
and the Educator and Researcher personas feel it most (both currently have a page with their job
title on it). Findability drops for the Researcher specifically — "research lab" is a
recognizable self-label that no task verb replaces.

## Result

| Comp | Score | Gate ≥4.0 |
|---|---|---|
| **A — consolidate to `/use-cases/`** | **4.03** | ✅ met |
| **C — task taxonomy** | **4.17** | ✅ met |
| Δ | 0.14 | — |

**Both clear the gate. The ranker does not separate them, and should not be read as if it did.**
A 0.14 spread on a 5-point scale, from a single synthetic rater, is inside any honest noise band —
it is roughly one persona moving one cell by one point. Reporting C as "the winner" would be
exactly the over-reading the P1.2 finding warns about.

What the instrument *does* establish, and this is the useful part:

- **Neither option is disqualified.** The mechanical floor is met twice, so the decision is free to
  be made on judgment rather than on score.
- **The two are near-perfect mirrors.** A: Relevance 4.4 / Actionability 3.4. C: Actionability 4.8 /
  Relevance 3.4. They trade the same two dimensions in opposite directions.
- **The real question is therefore not "which scores higher" but a design judgment the ranker
  cannot take**: *does a first-time visitor need a surface where they see themselves named — or is
  that surface the very segment-sorting the positioning phase just spent itself collapsing?*

That question is the substance of **⛩ DP5**, and it belongs to the operator.

## Not measured

- **Option B** — cut at O0 as dominated (more redirects *and* a rewrite, insider vocabulary, no home
  for `open-source-project`). Not scored, because scoring an option already excluded on evidence
  manufactures a comparison rather than informing one. Reasoning: ADR-049 §Option B.
- **Live behaviour** — these are comps, not built pages. No a11y, perf, or reflow numbers exist yet;
  those arrive at O3 against real routes.
- **`/get-started/` capacity under Option C** — C concentrates weight on a page not yet built to
  carry four task paths. Unscored risk, flagged for the implementing session.
