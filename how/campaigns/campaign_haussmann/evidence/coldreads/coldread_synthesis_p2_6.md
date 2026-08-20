---
type: evidence
packet: coldreads_p2_6
campaign: campaign_haussmann
mission: mission_haussmann_p2_6_midscore
objective: O0c-a
title: "Synthetic cold-read re-test — synthesis (2026-08-19, post-P2.5 funnel)"
created: 2026-08-19
updated: 2026-08-19
status: active
last_edited_by: agent_rosetta
synthetic: true
method: "Three independent fresh-context agent cold-reads against live production. Live HTTP only — each reader was barred from the repository, git, and all project context. PRE-SCREEN only; the human panel is P5.1."
inputs: ["coldread_SYNTHETIC_senior_engineer_p2_6.md", "coldread_SYNTHETIC_oss_contributor_p2_6.md", "coldread_SYNTHETIC_clinician_researcher_p2_6.md"]
tags: [evidence, haussmann, p2_6, coldread, d1, d3, d6, d7, d9]
---

# Cold-read re-test — synthesis

The three genesis cold-reads (2026-08-16) pre-dated every P0–P2 copy change. These are fresh runs
against the shipped funnel. **All findings below are `[D-syn]`** — the disclosed output of a synthetic
instrument. **Every claim that this synthesis carries forward has been re-verified `[D]` by direct
probe**; the tags below say which is which, and the register rows in §8.5 carry only the `[D]` half.

## The 30-second test now passes for two of three readers

| Reader | "What is this?" | Verdict | Confidence |
|---|---|---|---|
| Senior engineer | *"A filing convention for your repo — three folders plus a `CLAUDE.md` operating protocol, all plain Markdown in git."* | would keep reading, narrowly | **7/10** |
| OSS contributor | *"A file-layout convention — three folders of plain Markdown in git — cloned as a ready-made workspace."* | could contribute mechanically; wouldn't this week | **8/10** |
| Clinician-researcher | *"A folder convention so an AI coding assistant can navigate a project without being re-briefed."* | **not for me** — decided in ~40 seconds | **6/10** |

**All three converged on the same one-sentence answer, unprompted, and all three named the same
sentence as the site's best**: *"three folders, plain Markdown, versioned in git."* That is a real D1
result — at genesis the readers did not converge. The clinician's "not for me" is a **correct** outcome,
not a failure: the site says *"For teams working with agentic coding tools on real projects"*, and she
read it and believed it. What went wrong for her happened afterwards.

**The honesty strata are working, and are the single most-cited credibility asset.** Independently, all
three praised the same things: the one-machine disclosure, *"not a council we haven't formed"*, the
unprompted anchor-partner conflict disclosure, and — notably — **the P2.5 labelled gap itself**. The
clinician: *"a fabricated demo retracted in place with the reason … materially raised my trust in the
person."* The gap is doing work as a gap. That is worth knowing before O0c-b fills it.

## The five findings that survived verification

Each was raised by a cold reader `[D-syn]` and then confirmed by direct probe `[D]`.

### 1. The homepage contradicts itself inside two sentences (→ R-120, S2)

> *"Not a product or service — no server, no signup, **nothing leaves your machine**. Your context is
> just the notes, docs, and decisions you already keep — now shaped into a graph your agents can
> navigate, **and shared in the open**."* `[D]`

The subject of "shared in the open" is *"Your context"*. Read literally — which is how a first-time
reader reads — the site says your notes stay on your machine and are published. The intended meaning is
almost certainly that the *standard* is open, but that is not what the sentence says. It sits in the
30-second zone, in the paragraph carrying the site's strongest trust claim, and the clinician called the
pair **disqualifying on its own** for anyone thinking about patient notes.

### 2. `/learn/what-is-adna` runs an invented before/after anecdote (→ R-121, S3)

> *"**Before and after.** Without aDNA: a lab's 200 files sprawl across Notion, Drive, and Git. Every
> session starts by pasting an outdated summary; last month's decisions get re-litigated; a new
> collaborator needs three days to orient."* `[D]`

Specific quantities (*200 files*, *three days*) under a **"Before and after"** heading, with no lab, no
date, and no source. The senior engineer placed it in *"the same epistemic class as the hand-written
transcript they deleted from `/get-started/`"* and called the inconsistency *"the only thing that
damages the credibility the rest of the site genuinely earns."*

Stated fairly: this is **weaker** than R-118 — there is no `$` prompt or `✓` status line impersonating
real output. It is an unlabelled hypothetical, not a forged recording. But the campaign deleted a
fabrication one mission ago and published its reasons, and a cold reader found the next one unaided.
The finding is the **inconsistency of standard**, not a lie.

### 3. The contribution funnel's CTA points at the repo without the contributor docs (→ R-122, S2)

| Repo | Role | `CONTRIBUTING.md` | `CODE_OF_CONDUCT.md` | License (API) |
|---|---|---|---|---|
| `aDNA-Network/aDNA` | **the "Contribute on GitHub" CTA target**; the clone command | **404** | **404** | MIT |
| `aDNA-Network/aDNA.aDNA` | docs repo; where "Edit this page" lands | **200** | **200** | **`null`** |

All `[D]`, GitHub API + raw. The contributor documentation exists and is good — it is simply behind the
small footer link, not the CTA. Also `[D-syn]`, unverified here: **zero** `good first issue` and **zero**
`help wanted` open org-wide; 1 open issue; 2 stars / 0 forks / 2 contributors.

### 4. The docs repo has no license at all (→ R-123, S2)

`aDNA-Network/aDNA.aDNA` returns `license: null` and 404s on both `LICENSE` and `LICENSE.md` `[D]`,
while the homepage badge reads *"MIT-licensed"*. The badge is true of the image repo it links to. But
"Edit this page" sends a contributor's PR into the **unlicensed** repo — they are asked to contribute
under no stated terms. This is the one finding here with a legal edge rather than an editorial one.

### 5. Zero clinical or regulatory posture, on a front page that hooks rare disease (→ R-124, S3)

`/privacy` and `/security` return **0** for every one of: HIPAA · GDPR · PHI · de-identif* · IRB ·
consent · patient · clinical · health. Meanwhile `/` mentions *rare* ×15, *undiagnosed* ×2, *Wilhelm*
×3 `[D]`.

Fairly stated: aDNA is a file-layout convention, and *"nothing leaves your machine"* is very nearly the
whole answer. The defect is one of **routing, not policy** — a clinician arriving through the site's own
rare-disease framing, asking the first question her profession requires her to ask, finds no page that
acknowledges the question exists.

## One finding held back from the register, deliberately

**"Lattice Protocol" is named in the homepage hero and defined nowhere on the site.** `[D]` — the
glossary returns **0** mentions of *lattice*; `/glossary/lattice` and `/glossary/lattice-protocol` both
404; the hero reads *"built on the Lattice Protocol — the coordination layer, opening progressively."*
The clinician listed it among her top confusions (*"three unknowns in nine words"*); the OSS contributor
docked confidence for it.

**Not registered as a copy defect, because the constraint is upstream**: campaign constraint 9 carries a
**counsel embargo** — no protocol publishing or links until D-8 rules. The term cannot be defined on the
site right now. So the finding is not *"define it"* — it is that **the hero names a term the embargo
forbids explaining**, which argues for removing it from the 30-second zone until the embargo lifts.
Routed to the re-plan as a decision, not filed as a fix.

## Two reader observations worth carrying, not registrable

- **The name collides with "ancient DNA"** — the standard abbreviation in the clinician's own field.
  She initially read the domain as paleogenomics `[D-syn]`. ADR-048 ruled on name collision at DP2 with
  the human panel **waived**; P5.1 inherits the duty to retro-validate that ruling against real humans.
  This is a second synthetic data point that the waived panel is worth running.
- **The rare-disease vault cards are empty at the destination.** Both front-page rare-disease hooks lead
  to cards reading *"Class: org vault / Stage: chartered / Persona: Mnemosyne"* — *"no diseases, no data,
  no people"* `[D-syn]`. The registry is honest that 57 of 74 are *planned*; the complaint is that the
  homepage's most emotionally loaded links land on two of them.
