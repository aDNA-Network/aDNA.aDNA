---
type: session
session_id: session_stanley_20260904_014553_haussmann_r97_scope
created: 2026-09-04
updated: 2026-09-04
status: active
tier: 1
last_edited_by: agent_rosetta
campaign: campaign_haussmann
mission: null   # ⛩ OPERATOR-RULED ROUTING SITTING. The Grande Revue's ratified Gate-1 order is COMPLETE (B → P4.4b B1+B2a → GR-1 → Lane D) and nothing agent-reachable is queued in the backbone; `P5.1` and `P5.2` are human-gated. The operator ruled the line of advance at this sitting's open: **R-97 first, then GR-5**, and **fix → deploy → panel** for P5.1's stimulus ordering. This sitting opens no mission and closes none — it authors an ADR-048 amendment and HALTS at its ⛩ signature.
increment: "⛩ R-97 — scope the homepage NOT-line, the LAST of four surfaces still carrying the over-promise the campaign has already scoped on three others (`R-64` `/get-started` · `R-161` `/network` · `R-167` `/privacy`). It is ratified ADR-048 copy, so it needs its own gate. Sitting deliverable: the measured amendment, put to the operator. NO copy edit before the signature."
executor_tier_declared: opus
executor_tier_actual: opus
token_budget_estimated: "~70–120 kT / 1 session for the gate half. Costed AFTER reading `gate-49`'s TEMPLATES list (SO#11's O2 retrospective, applied at costing time for the fifth consecutive sitting): ⚠ `/` **IS** a template (`gate-49:50`) ⇒ a `home` re-baseline **WILL** fire, but only in the BUILD half, which is post-signature and NOT in this band. Bands: session open + derivations ~10 · baseline FKGL measurement on `/` (build + census, both ends same instrument) ~15–25 · the four-surface lineage re-verified at each object ~10–20 · the ADR-048 amendment authored with its measured wording options ~20–35 · gate-coverage finding + register note ~10–20 · halt + handoff ~5–10. ⛔ The build half (copy + fixture + red-test + re-baseline + changelog + deploy) is a SEPARATE band, costed at the signature — this campaign's own repeated finding is that a budget ratified before the operator's rulings is costed against a scope nobody has chosen yet."
token_budget_actual:
tags: [session, haussmann, r_97, adr_048, claim_register, pre_build_gate, routing]
---

# Session — R-97: the last unscoped surface, and it is the one the panel reads

## Derived at the open (convention 12 — recon-at-execution; nothing below is carried)

| Fact | Value | Command |
|---|---|---|
| **Clock** | **2026-09-04 01:45 UTC** (local reads `2026-09-03 18:45 PDT` — a local stamp would file this session sorting *before* three sessions that already happened) | `date -u` |
| `main` CI (**convention 19**) | ✅ **green** — run `33815445689`, `success`, 7m28s, 2026-09-03T22:57:34Z | `gh run list --workflow=gates.yml --branch main -L 5` |
| …**its width** | ⭐ green **at `bc8a2d3`, which IS `origin/main`'s tip AND this checkout's HEAD**. **No width gap at all** — the first sitting in this campaign to open that way. The last five runs on `main` are all `success`. | `git ls-remote origin main` |
| …**and it settles `F-ab`(a)'s rerun** | The `bc8a2d3` run that went red on `gate-39` and passed on rerun is **still green**; the flake did not recur on the scheduled/subsequent runs | same |
| `origin/main` | `bc8a2d3` — derived **at the remote**, never at a tracking ref | `git ls-remote origin main` |
| Unpushed | **0** | `git rev-list --count @{u}..HEAD` |
| Production | **`7cef6e0`**, built `2026-09-03T21:37:13.470Z`, `mode=prod` | `curl /.well-known/adna-build.json` |
| Ancestry guard | `7cef6e0` **is** an ancestor of HEAD ⇒ a future ship passes on its own terms; **no override flag needed** | `git merge-base --is-ancestor 7cef6e0 HEAD` |
| Active sessions | **none** — this file is the first | `ls how/sessions/active/` |

## Why R-97, and why before the panel — the reasoning, not the wish

`R-97` is the homepage NOT-line, `site/src/pages/index.astro:137`:

> *"Not a product or service — no server, no signup, **nothing leaves your machine**."*

It is **ADR-048 verbatim** (`adr_048_positioning_statement_embargo_language.md:71`) and the register
classes it `verified (ADR-048 verbatim)` — with the caveat **already written into its own row**:
*"inherits R-64's narrow-scope caveat class (the required agent tool sends prompts to its
provider)."*

⭐ **The over-promise class is now scoped on three surfaces and unscoped on one.** `R-64` was
diagnosed at **P0.5** with its remedy attached (*"scope it to 'aDNA itself sends nothing'"*); GR-1
discharged it on `/get-started` **only**; `R-161` scoped `/network` at GR-4 O3; `R-167` scoped
`/privacy` at GR-4 O5. **The homepage is the one left**, and GR-4 O3 named it explicitly —
*"NAMED AND NOT TOUCHED — ratified copy needs its own gate."* This sitting is that gate.

⛩ **Operator-ruled ordering (taken at this sitting's open, SO#1):** fix → deploy → panel. `P5.1`'s
panellists cold-read this exact hero and score it **against ADR-048**, and the senior-engineer
profile is precisely the reader who notices that *"nothing leaves your machine"* is false for the
agent tool they are reading it with. A panel run against the unscoped line buys a transcript about
copy we already know is over-scoped.

## ⭐ FINDING 1 — the same component already carries the scoped version, one prop away

Not inferred from the register; read at the object (`index.astro:125-150`) `[D]`:

| Prop | Copy | State |
|---|---|---|
| `notLine` (`:137`) | *"…no server, no signup, **nothing leaves your machine**."* | **unscoped absolute** |
| `reframe` (`:146`) | *"…The standard that gives it that shape is open. **Your files stay on your machine**."* | **correctly scoped** — P4.5a's `R-120` fix |

⇒ **The homepage asserts the scoped claim and the unscoped one within nine lines of each other**,
and P4.5a's own fix commit is what put them into visible tension — the `R-161` shape exactly (*a
pre-existing sentence repaired because a neighbouring change made it a contradiction a reader meets
without looking for it*). ⭐ **The wording therefore has an in-page precedent** and does not need
inventing: the fix is to make `notLine` agree with the line `R-120` already ratified nine lines
below it.

⚠ Stated at its width: this is **not** a claim that `R-120` was wrong. `R-120` scoped the sentence
it was aimed at, correctly, and named its own subject. Nothing routed it to its sibling — which is
`R-64`'s standing lesson (*a caveat in the register is a finding with a home and no gate*), arriving
for the fourth time on the fourth surface.

## ⭐ FINDING 2 — R-97 is classed `verified` and is asserted by NOTHING

Measured at the objects `[D]`, this sitting:

| Surface | Result | Command |
|---|---|---|
| `gate-26` fixture `claim_register.json` | **28 rows, `R-97` absent**; no row quotes *"nothing leaves"* or *"signup"* | `python3` over the fixture |
| `claim_trace_manifest.json` (gate-20) | `nothing leaves` **0** · `signup` **0** · `notLine` **0** · `R-97` **0** | same |
| `gate-23-hero-claims.spec.ts` | the phrase appears **only in a source comment** (`:56`), in **no assertion** | `grep -n` |

`gate-26`'s contract, in its own words, is *"verified rows → the quoted text must be PRESENT
(currency)."* ⇒ **the register's strongest class has a hole at the site's most-read sentence.**

⭐ **Two consequences, and they point opposite ways, so both are stated:**
1. **It makes the fix cheap** — zero same-diff churn (ADR-057), exactly as `R-161`'s was, because
   nothing pins the string.
2. **It is a defect in its own right, and the cheap fix does not close it.** A `verified` row nobody
   asserts is **convention 18's family**: `gate-26` runs correctly, passes honestly, and its green is
   a true statement about a set that **excludes this claim**. ⇒ the remedy ships the scoped quote
   **into the fixture**, so the hole closes in the commit that would otherwise have widened it.

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | Session open + derivations + the two findings above | this file | — |
| O1 | Baseline FKGL on `/`, **both ends on the same instrument** (HAZARD-2) | measurement | — |
| O2 | Author the ADR-048 amendment with measured wording options | `what/decisions/adr_048_…` | ⛩ **HALT** |
| O3+ | *(post-signature, separate band)* copy · fixture · red-test · re-baseline · changelog · ⛩ push · ⛩ deploy | — | ⛩⛩ |

## Constraints honoured

- **Convention 1** — the change moves a claim **DOWN**. That is the permitted direction, and it is
  the reason this is a scoping and not a rewrite.
- **§7.7** — agents author, operators ratify. The amendment is authored `proposed`; **no copy edit
  before the signature**, on the P4.2/P4.3/P4.4a/P4.4b/P4.5b/P5.1/GR-1/GR-2/GR-3/GR-4 precedent.
- **SO-6** — strike-not-delete in ADR-048; the ratified DP2 wording survives on its face.
- **HAZARD-2** — the FKGL before and after are taken on the **same local build**, never a prod
  before against a `dist/` after (*two instruments sharing one number*, B2a's finding).
- ⚠ **`F-ab` is live** — `gate-39`, `gate-42 G42b` and three `gate-47` assertions are **load**-
  sensitive. A red on those in this sitting is a **question, not a verdict**: rerun before
  diagnosing, and record the wall-clock, because *a count is only comparable to a count produced by
  the same command on a comparably loaded machine.*

## Log

- **01:45 UTC** — session opened; all facts above derived, none carried.
- **01:52 UTC** — ⚠ **First build attempt ran from the repo root and silently did nothing.** `pwd` is
  `~/aDNA/aDNA.aDNA`, and `npx astro build` must run from `site/`. It exited **0** with no output and
  left a `dist/` **with no `.md` twins**, so `reading_census` reported `measured: 0, missing: ["/"]`
  rather than an error. ⇒ *a build that exits 0 in the wrong directory is indistinguishable from a
  build that ran*, and the census's `missing` field is what caught it — **the campaign's own
  suppressed-build-error class** (P4.2's `> /dev/null 2>&1` stale `dist/`), arriving through a wrong
  cwd instead of a redirect. Re-run from `site/`: 226 pages, 48.35s, twins emitted.
- **01:58 UTC** — ⚠⚠ **SECOND harness defect of mine, same sitting, same root cause inverted — and
  `2>/dev/null` hid it.** The census resolves its `--dist` default (`site/dist`) **from the repo
  root**, so the measurement loop — which I had `cd site`'d for — found nothing, and my stderr
  redirect turned a legible error into four identical JSON parse tracebacks. **The build wants
  `site/`; the census wants the root.** ⇒ *two instruments in one pipeline with opposite cwd
  contracts, and suppressing stderr is what made the second one unreadable.* ⭐ **The restore control
  passed anyway** (`cmp` byte-identical), so the tree was never at risk — *the control that fires on
  a run that failed for an unrelated reason is the one worth having.* **Standing streak: two
  instruments wrong before the subject, both caught by their own output.**
- **02:05 UTC** — ✅ **O1 DONE.** Baseline `/` **prose 9.96 · whole 13.16 · 766 words · 47 sentences**;
  headroom **0.04**. ⭐ **The NOT-line IS in the prose corpus** — built twin line 14, punctuated,
  merged with the audience sub — so the constraint genuinely binds. **Checked, not presumed**: GR-4
  O4's strip lines turned out to be *excluded*, and assuming this one was too would have been the
  same error in the other direction.
- **02:12 UTC** — ✅ **O2 DONE — four candidates measured by twin substitution, `site/src` untouched.**
  Baseline **re-derived at exactly 9.96** after the loop (the control that makes the deltas legible),
  twin restored byte-identical.
  ⭐⭐ **THE MEASUREMENT CHANGED THE ANSWER, AND IT DISQUALIFIED THE CHEAP OPTION.** Candidate 4
  (*"nothing **of yours** leaves your machine"*) is the smallest diff, costs **0.00** FKGL — and
  **does not repair the defect**: the falsifying case is the reader's own context reaching their
  agent provider, which is exactly *"yours"*, so it narrows on **the wrong axis** while keeping the
  absolute. Candidate 2 has the **best** number (**9.84**, −0.12) and **re-imports the over-promise
  `R-161` already had to qualify** — it drops *"until you choose"*, and a vault pushed to a remote
  does move data (`R-167`). ⇒ **two of four candidates are wrong, and they are the cheapest one and
  the best-scoring one.** *The cheap remedy was the wrong one* — GR-4 O1's class, arriving at wording
  rather than at an instrument.
  ⇒ Recommended **candidate 1**, *"…no server, no signup; **aDNA itself sends nothing**"* — which is
  **`R-64`'s ratified remedy verbatim, already shipped on `/get-started` by GR-1**, so this is one
  ruling reaching its fourth surface rather than a new phrasing to be judged. Costs **0.02**, leaving
  **0.02**, and that price is stated rather than absorbed.
- **02:15 UTC** — ⛩ **HALT AT THE SIGNATURE.** `artifacts/r97/adr_048_not_line_amendment.md` is
  `proposed`. **Four controls confirm nothing was performed** `[D]`: `site/src` **0** changed ·
  ADR-048 **0** · `claim_register.md` **0** · `site/tests` **0**. The only new files are this session
  record and the proposal.
