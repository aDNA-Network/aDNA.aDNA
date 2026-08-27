---
type: artifact
artifact_class: protocol
campaign: campaign_haussmann
mission: mission_haussmann_p5_1_human_evidence
phase: P5
objective: O0
title: "P5.1 contribution run protocol — the outsider funnel, end to end, timed"
created: 2026-08-26
updated: 2026-08-26
status: ready_for_operator
last_edited_by: agent_rosetta
executor_tier: opus
grounded_in:
  - "mission_haussmann_p5_1_human_evidence.md AC-3 (amended + signed 2026-08-26, rulings 2 + 4)"
  - "artifacts/p5_1/ac_amendment_proposal.md §1 GAP-2 + DEFECT-4 + DEFECT-5, §2 AC-3, §2.1 V4 (accepted)"
  - "what/decisions/adr_055_proposal_process.md (the funnel this run exercises)"
  - "artifacts/p2_5/ttfs_instrument_kit.md §4 (friction-log schema + the empty-log rule, reused)"
tags: [artifact, haussmann, p5_1, contribution_run, funnel, operator, protocol]
---

> **⛩ OPERATOR-GATED.** ⛔ **RUN THIS BEFORE THE TTFS RUN** ([[ttfs_run_record]] §0). Nothing here has
> been run.

# Contribution run protocol

**Plain version**: try to make a real first contribution to this project the way a stranger would —
starting from the website, not from the repo you already have cloned — and write down what every step
actually cost.

**What it measures**: D9's first-contribution path, which the genesis scoring flagged **unawardable**
for want of evidence. Not *"is there a contribution process"* (there is, and it is documented); **is it
walkable by someone who is not us.**

## 0 · Ordering, and why it is stated on the face

**This run precedes the TTFS run.** Rulings 2 and 4 put both runs on the operator, so one person
performs both — and a TTFS run walks the runner through the entire quickstart, so a contribution run
performed afterwards is performed by someone freshly onboarded. **Order changes the measurement.**
TTFS has less to lose (its prerequisite condition is already labelled warm); this run's whole subject
is *site-reading freshness*, which the quickstart destroys.

If the order is broken, **record it** — a broken order is a condition, not a disqualification, but an
unrecorded one is a silent contaminant.

## 1 · The conflict of interest — declared in the artifact, not managed away

⛩ **Ruling 2, 2026-08-26:** the runner is **the operator, as outsider**. The CoI is **declared**, on
the artifact, in the P4.1 ranker precedent (*declared, not managed away*).

**Fill in verbatim before anything else:**

```
Runner: <name/role>
Conflict of interest: <e.g. "The runner authored this project, the funnel under test, AEP-1, and
  AEP-2. 'Outsider' here is a DISCIPLINE the runner attempted to keep, not a fact about the runner.
  No artifact in this run can demonstrate the discipline was kept.">
```

## 2 · ⭐ The non-public-knowledge log — the positive obligation that makes §1 checkable

⚠ **GAP-2, stated plainly**: *"without privileged access"* is a **discipline, and no artifact can
demonstrate a discipline was kept.** Leaving it in prose would reproduce P4.3's G-6/G-7 finding — *a
deferral recorded only in narrative is a deferral with no gate.*

**So the obligation is inverted into something recordable: every moment the runner used knowledge a
stranger would not have is a LOGGED ENTRY, not an omission.**

| # | Timestamp | Stage | What I knew that a stranger would not | How I would have found it as a stranger — or "I could not have" |
|---|---|---|---|---|

⛔ **AN EMPTY LIST IS REPORTED AS *SUSPECT*, NOT AS EXCELLENT.** This is the TTFS kit's own §4 reasoning
about empty friction logs, applied to the same failure mode: an empty log almost always means the
runner did not notice, not that nothing happened. **The runner built this funnel.** An empty list from
that runner is close to self-refuting — say so rather than banking it.

⭐ *Examples of what belongs here, so the bar is concrete:* knowing that AEP numbers are permanent
without reading it · knowing which repo to file against without following the link · knowing what
"normative" means in this project's sense · knowing a maintainer will see the issue · not needing to
find `/community/proposals` because you know the URL.

## 3 · The funnel — entry point NAMED, and verified live

⛔ **Start at `https://adna.network/community/proposals/`.** Verified **200** on the alias 2026-08-26
`[D]`. Governing decision: **ADR-055** (`what/decisions/adr_055_proposal_process.md`).

⭐ **AC-3 originally named no target at all** — *"a real first contribution attempted end-to-end"* — so
the run could have started anywhere and the result would not have been comparable to anything. It is
named now.

**Enter as a stranger enters**: fresh browser profile, signed into nothing, **no local clone in view**.
⛔ **Do not start from `~/aDNA`.**

### Stages — time every one, including the ones that cost nothing

| # | Stage | Stop-watch note |
|---|---|---|
| 1 | Land on `/community/proposals/` — read until you know what is being asked of you | Reading time counts |
| 2 | Decide **normative or not** (AEP vs. ordinary issue) — the funnel's first fork | Time the *decision*, and log the doubt |
| 3 | Read **AEP-1** (`/community/proposals/aep-1/`) if the page sends you there | |
| 4 | Reach the filing surface — the repo's `change_proposal.md` issue template | Verified **200** 2026-08-26 `[D]` |
| 5 | **Draft the proposal in full** | The substance, not a placeholder |
| 6 | Work out what a **sponsor** is and how an outsider gets one | ⚠ see §4 |
| 7 | Submit — **or reach the point of submitting and stop** | ⛩ see §5 |

**Every stage carries: elapsed time · what you expected · what happened · friction rows.** Friction
uses the TTFS kit §4 schema and the campaign's S1–S4 severities.

## 4 · ⚠ What we already know about the funnel's truth — record it, do not let it pass unremarked

Read from the live archive 2026-08-26 `[D]`: the archive holds **two** proposals, **AEP-1** (`final`)
and **AEP-2** (`review`) — and **both are authored *and* sponsored by the same person, the operator.**
Six of the eight states are at **occupancy 0**.

⇒ **No outsider has ever traversed this funnel.** That is not a criticism of the funnel; it is the
measurement's starting condition, and the reason the run is worth its cost. Two consequences to watch:

- **The sponsor step is the likeliest wall.** `review` means *"a sponsor is shepherding it"*. Every
  sponsor to date has been the author. **How does a stranger get one?** If the answer is not findable
  from the site, that is a finding — arguably *the* finding — and it goes in the log at stage 6.
- **A zero is honest here and must stay honest.** The page derives occupancy from the archive rather
  than asserting it (*"which is why most rows read zero"*). ⭐ Do not treat those zeros as a defect to
  fix; they are the empty-state candour this campaign protects. The finding, if there is one, is about
  **reachability**, not about the counts.

## 5 · ⛩ Where the run stops — an outward act needs its own GO

**Filing a real public issue is an outward act.** Draft it in full, take it to the point of submission,
and **halt for an explicit operator GO before submitting.** Recording *"reached submission, did not
submit, GO not sought"* is a **complete result** for this protocol — the funnel's walkability is
measured by stages 1–6.

⚠ **And say which one happened.** A run that stopped at the gate and a run that submitted are different
measurements; a record that leaves it ambiguous is worth less than either.

## 6 · Both stamps — the run happened in two worlds (DEFECT-4)

```
curl -s https://adna.network/.well-known/adna-build.json    # the SITE the contributor read
git ls-remote https://github.com/aDNA-Network/aDNA.git HEAD # the REPO they would fork
```

⭐ **AC-3 inherited *"records the commit serving the alias at run time"* from the freeze sweep's blanket
amendment, and for this criterion that stamps the wrong object.** A contribution run's subject is **the
repository and the funnel**; the contributor reads a site surface and then acts **in git**. The alias
stamp records half the world the run happened in.

⚠ **No criticism of the sweep**: it amended all three criteria identically because it was asking one
question — *does this survive the freeze?* — and a blanket amendment is **correct for that question and
imprecise for this one.** That is what a second, differently-aimed pass is for.

⇒ **Record both.** Then run AC-4's check on the alias stamp:

```
git merge-base --is-ancestor <recorded_commit> HEAD && echo "stamp OK"
```

⛔ **No script. No checker.** One command per artifact is the whole reason GAP-1's remedy was
acceptable (conventions 15/16/17).

## 7 · Output

`evidence/p5_1/contribution/` — the timed stage log · the friction log · **the non-public-knowledge
log** · the drafted proposal · both stamps · the CoI declaration · the ordering statement.

**Consent records: inapplicable**, and named as such rather than left blank. The runner is the
operator, so there is no third-party participant to consent — AC-4 says so explicitly precisely so that
an absent consent record reads as *inapplicable* and **not as an omission**.

⭐ **Failures are findings.** If the funnel cannot be walked without insider knowledge, **that is the
result**, and it routes to a fix before P5.2 rather than being smoothed in the write-up. A contribution
run that could only succeed is not a measurement.
