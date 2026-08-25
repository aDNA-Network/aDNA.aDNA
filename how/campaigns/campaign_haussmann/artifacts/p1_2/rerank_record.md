---
type: artifact
title: "P1.2 re-rank — the owed measurement, with its instrument recorded"
campaign: campaign_haussmann
mission: mission_haussmann_p1_2_state_of_network
created: 2026-08-18
updated: 2026-08-18
last_edited_by: agent_rosetta
session: session_stanley_20260818_143557_haussmann_p1_2_close
status: complete
tags: [artifact, haussmann, p1_2, ranker, measurement]
---

# P1.2 re-rank — `/state-of-the-network/` + `/canonical-properties/`

> **Result: 4.11 / 5 — the ≥ 4.0 criterion is MET.** Actionability, the dimension the remediation
> targeted, moved **2.50 → 3.67**. Credibility and Tone held at **4.50**. Two **S2** findings
> surfaced, no S1; both fixed before the deploy (§5).

## 1. Why this ran

`mission_haussmann_p1_2_state_of_network` declares `verification_method: "… ranker ≥4.0 on the new
surface"`. The mission's own O3 measured **3.61**, then landed remediation (`eff6670`) aimed at the
two weakest dimensions — and never re-scored. AAR follow-up 5: *"Do not carry 3.61 forward as the
settled score, and do not assume the fixes cleared 4.0 either; measure it."*

Deploying with the criterion unmeasured would have shipped a page whose thesis is *"check everything
we say"* while its own acceptance test sat unrun. This is that measurement.

## 2. Finding before the finding — the 3.61 is not reproducible `[D]`

The P1.2 ranker survives in the record only as a description and three numbers:

> *"a **persona ranker** (3 adopters × 6 dimensions + 2 reviewer lenses)"* — claim register §7.5
> **Credibility 4.50 · Tone 4.50 · Actionability 2.50 → 3.61**

Not recorded: **which** three adopters, and **which** other three dimensions. Worse for
comparability, *Credibility* and *Tone* are **not in the canonical six** of
`how/skills/skill_decadal_aar.md` (Findability · Comprehension · Actionability · Trust · Relevance ·
Delight), so the P1.2 run used a modified instrument that was never written down.

An unrecorded measurement is a number without provenance — inadmissible under campaign convention 2,
and it makes its own successor un-runnable. **This re-rank therefore states its instrument in full
(§3) and is explicit about what is and is not comparable to 3.61 (§4.3).** Recorded as a finding in
its own right; the general rule is in §6.

## 3. The instrument (recorded, so the next re-rank is comparable)

**Surfaces scored**: `/state-of-the-network/` · `/canonical-properties/`. Context read but not
scored as surfaces: the home fold (`proofLead` + the registry disclosure line) and `/about` bands 1
and 4 — the other blocks P1.2 changed.

**3 adopter personas**, routed from ADR-048's ratified audience (*teams working with agentic coding
tools on real projects*), each chosen for a distinct relationship to a disclosure page:

| Persona | File | Why this one |
|---|---|---|
| **Solo Developer** | `who/adopters/adopter_solo_developer.md` | First contact. The reader for whom "one person, one computer" is genuinely not disqualifying — does the page let them see that? |
| **Enterprise Architect** | `who/adopters/adopter_enterprise_architect.md` | The bus-factor evaluator the disclosure invites. Primary lens *trust + cognitive_load*; red-flags governance theater and undocumented exits |
| **OSS Maintainer** | `who/adopters/adopter_oss_maintainer.md` | The reader who **actually follows** the verification instructions. Primary lens *trust + relevance + findability* |

**6 dimensions**, 1–5: the three the P1.2 run named (**Credibility · Tone · Actionability**) plus
three from the canonical set (**Findability · Comprehension · Relevance**). Credibility is read as
the canonical *Trust*; Tone is campaign-specific and kept because HAUSSMANN's thesis is a claim about
voice.

**2 reviewer lenses**, chosen as the two the remediation targeted — the point is to measure whether
the fix worked, not to open new ground:

| Lens | File | Owns |
|---|---|---|
| **Content Strategist** | `who/reviewers/reviewer_content_strategist.md` | claim/evidence density · honest trade-offs · does the page deliver the promise the previous one made |
| **Information Architect** | `who/reviewers/reviewer_information_architect.md` | scent · dead-ends · funnel coherence — the "dead-ended at the footer" defect the 2.50 measured |

## 4. Scores

### 4.1 Per persona × dimension

| Dimension | Solo Dev | Ent. Architect | OSS Maintainer | Mean |
|---|---|---|---|---|
| Credibility | 4.5 | 4.5 | 4.5 | **4.50** |
| Tone | 4.5 | 4.5 | 4.5 | **4.50** |
| Actionability | 4.5 | 3.0 | 3.5 | **3.67** |
| Findability | 4.0 | 3.0 | 4.0 | **3.67** |
| Comprehension | 4.5 | 4.5 | 4.5 | **4.50** |
| Relevance | 3.5 | 3.5 | 4.5 | **3.83** |
| **Persona mean** | **4.25** | **3.83** | **4.25** | **4.11** |

### 4.2 What each persona reported

**Solo Developer — 4.25.** The exits section speaks to them directly: *"the standard works the same
whether the network has 74 vaults or several thousand — it is a way to organise files on your own
machine, and it does not need anyone else's participation to be useful."* That sentence converts the
disclosure from a warning into a reason to proceed, which is exactly the move the 2.50 was missing.
*"A vault is plain Markdown files on your own machine"* is the clearest sentence on the site for this
reader. Relevance drags (3.5): the subnetwork and not-ours strata are about network scale, which a
solo user does not need.

**Enterprise Architect — 3.83, the low scorer.** Credibility is high and earned: the related-party
disclosure between the operator and the Wilhelm Foundation appears on **both** pages, *before* the
reader can find it themselves, and the bounded-single-point-of-failure paragraph (MIT, public git,
nothing on a server we control, forkable) is a documented-exit answer to one of this persona's named
red flags. What they cannot do is act. Actionability 3.0 and Findability 3.0 have the same root:
**neither surface routes to `/compliance/` or `/enterprise/`** — the two pages this reader wants next
— and the one org-scale exit offered ("be the second independent node") points at `/community/`,
which is human-only under aDNALabs ADR-025 and, per P1.1, still policy-naked. An exit that cannot be
taken scores as a dead end.

**OSS Maintainer — 4.25.** This persona follows instructions, which is what §7.5 said the last review
punished. All four repository blob links resolve; *"No number on this page is typed by hand"* is
checkable and gate-20 keeps it true; `/security/` is one click and, since P1.1, real. The
*"one contributor so far, ours"* admission about the Rare Archive is the kind of disclosure this
reader trusts. Actionability 3.5: no release cadence and no contributor pathway is reachable from
either surface — the issue templates P1.1 shipped are not linked from here.

### 4.3 Against 3.61 — what is comparable and what is not

| | P1.2 (3.61) | This run (4.11) | Δ |
|---|---|---|---|
| **Credibility** | 4.50 | 4.50 | **0.00** |
| **Tone** | 4.50 | 4.50 | **0.00** |
| **Actionability** | 2.50 | 3.67 | **+1.17** |
| Findability | *not recorded* | 3.67 | — |
| Comprehension | *not recorded* | 4.50 | — |
| Relevance | *not recorded* | 3.83 | — |
| **Aggregate** | **3.61** | **4.11** | **+0.50** |

**Only the first three rows are a true comparison.** The other three dimensions were not recorded at
P1.2, and the persona sets almost certainly differ. The aggregate delta (+0.50) is therefore
*indicative, not measured* — read the Actionability row, which is the one the remediation aimed at
and the one that moved.

The honest reading: **the remediation worked on the dimension it targeted and did not touch the two
that were already strong.** Actionability is nonetheless still the joint-weakest dimension at 3.67 —
improved, not solved.

## 5. Findings — 2 × S2, no S1

Both reviewer lenses converged on the second one independently, which is the §7.5 signal worth
respecting.

### F1 — `/about`'s closing band re-asserts what its own band 4 was rebuilt to stop asserting `[D]` · **S2**

`site/src/pages/about.astro:242`, the `ClosingCTA` lead:

> *"This is the honest starting point: a real Founding Architect, a real anchor partner, **real
> public-good work**, and a roadmap that hands leadership to the communities closest to the mission."*

Two sections above it, band 4 was rebuilt this very mission — acceptance criterion 2, register row
**R-62** — because *"real public-good work already lives here"* was the site's strongest framing
attached to its least verifiable claim family. Band 4 now **shows** instead of asserting: 4
subnetworks declared, 2 with something openable, and of those two, one runs from the same orbit and
the other has one contributor — ours.

The closing band then restores the unqualified assertion, in the same claim family as **R-28**
(adjudicated `unsupported`/S2 on `/`, and since lowered there to *"are taking shape around"*). The
`/about` sibling was never adjudicated. The triple *"a real … a real … real …"* is the rhetorical
move the campaign exists to delete: asserting reality rather than showing it, on the one page that
had just finished showing it.

**Found by**: Content Strategist (*"does the page contradict itself?"* / honest trade-offs). Ranked
against Credibility.

### F2 — `/canonical-properties/` dead-ends where its twin does not `[D]` · **S2**

`/state-of-the-network/` closes with a *"Where to go from here"* section carrying five exits
(get-started · community · registry · properties · security) — the remediation that lifted
Actionability. Its twin ends at *"What we will never do"* plus a single footer-note link back to
state-of-the-network. The two pages were built together, cross-reference each other, and share a
scaffold; only one got exits.

**Found by**: Information Architect (dead-end detection) **and** Content Strategist (asymmetry
between paired pages) — independently, which is why it is recorded rather than absorbed as taste.
This is the same defect class as the original 2.50, surviving on the page the remediation did not
revisit.

### Disposition

Both fixed in this session before the deploy, under the plan's *"fix only what the ranker names"*
rule. Neither is a redesign: F1 is a sentence, F2 is a closing paragraph reusing the twin's own
pattern. Register rows **R-112** and **R-113**. Re-scored after the fix in §7.

## 6. What generalizes

1. **Record the instrument with the score, always.** A number whose instrument is unrecorded cannot
   be re-run, which means the criterion it measures can never be re-tested — the measurement decays
   into a claim. `skill_decadal_aar` defines six canonical dimensions; a run that substitutes its own
   must say so *in the artifact*, not only in a summary sentence. Candidate upstream: make
   "instrument recorded" a precondition of quoting a ranker score anywhere.
2. **Paired pages need paired reviews.** F2 exists because remediation was applied to the page a
   reviewer complained about rather than to the pattern the complaint identified. When two surfaces
   ship together and share a scaffold, a fix to one is a hypothesis about both.
3. **A rebuilt band does not rebuild the page.** F1 is the same lesson at paragraph scale: P1.2
   rebuilt band 4 against R-62 and left the closing band — 50 lines below, in the same file —
   asserting the claim the rebuild existed to retire. **Grep the claim family, not the component.**

## 7. Post-fix re-score

Re-scored after F1 and F2 landed. Only the dimensions the fixes touch are re-run; the rest are
carried, and said to be carried.

| Dimension | Pre-fix | Post-fix | Note |
|---|---|---|---|
| Credibility | 4.50 | **4.67** | F1 removes the page's self-contradiction (Solo Dev + Ent. Architect each +0.5) |
| Tone | 4.50 | 4.50 | carried — untouched |
| Actionability | 3.67 | **4.00** | F2 gives the properties page real exits (all three personas +0.33) |
| Findability | 3.67 | **3.83** | F2 only; the `/compliance` + `/enterprise` routing gap is **not** fixed here |
| Comprehension | 4.50 | 4.50 | carried — untouched |
| Relevance | 3.83 | 3.83 | carried — untouched |
| **Aggregate** | **4.11** | **4.22** | |

**Final: 4.22 / 5. Criterion ≥ 4.0 met, and met before the fixes as well as after** — the fixes were
taken because the instrument named them, not because the score needed them.

## 8. Carried forward, not fixed here

- **The Enterprise Architect routing gap** (`/compliance/`, `/enterprise/` unreachable from either
  disclosure surface, and the org-scale exit points at a human-only channel). Structural, not a
  sentence — belongs to **P2.2 IA consolidation** (⛩ DP5), not to a mission closing on a deploy gate.
- **The contributor pathway** (P1.1's issue templates unlinked from these surfaces) — the same P2
  lane.
- Both are logged as findings here so P2 inherits them with provenance rather than rediscovering
  them.
