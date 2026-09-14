---
type: artifact
artifact_class: aar
campaign: campaign_haussmann
title: "AAR — the docs-corpus claim sweep and the Wilhelm publication gate (2026-09-12)"
created: 2026-09-14
updated: 2026-09-14
status: active
last_edited_by: agent_rosetta
executor_tier: opus
covers_session: session_stanley_20260912_050048_haussmann_docs_sweep
tags: [artifact, haussmann, aar, docs_corpus, claim_register, wilhelm_gate]
---

# AAR — the docs-corpus sweep

> ⚠ **This is an increment AAR, not a mission AAR.** The sweep was an operator-ruled increment on the
> `course_deploy` / `R-97` precedent, so **SO-5 does not fire** (it binds missions before `status: completed`).
> Written because the operator asked for one, on `template_aar_lightweight.md`'s five lines, with the longer
> record kept where it belongs: `docs_corpus_sweep_record.md` (coverage) and `claim_register.md` §27 (findings).

## AAR

- **Worked**: measuring before repairing, every time. Four claim classes run corpus-wide over the 226 twins
  found 7 defects and, just as usefully, **proved classes 1/3/4 clean** — the 09-11 repairs held. The
  positive control on every negative grep is what made the zeros mean *absent* rather than *the command
  failed*, a distinction this campaign has been bitten by four times.
- **Didn't**: my triage patterns. **Six false positives, every one of which would have "repaired" correct
  content** — and the cause was not carelessness but *borrowed credibility*: patterns tuned on the persuasion
  surface, applied to a corpus whose subject matter is file paths.
- **Finding**: ⭐⭐ ***Internally consistent arithmetic is what lets a count rot.*** `50 skills (21+29)` and
  `41 templates (25+11+5)` both sum correctly; `10 ontology extensions` shipped **with a ten-item list that
  was also missing `reviewer`**, so the count and its own enumeration corroborated each other for ~4.5 months
  while both disagreed with disk. The check that catches a typo is structurally blind to staleness, because
  staleness moves every term together. **A typed figure that shows its working looks derived.**
- **Change**: state the **surface AND the corpus's subject matter** before reusing a pattern across corpora.
  §26.1 recorded that the register's *scope* did not transfer to the docs corpus; §27.5 records that its
  *instruments* did not either — **and the second is more dangerous, because a pattern that worked elsewhere
  arrives pre-trusted.**
- **Follow-up**: two named successor items — the **29-page generator gap** (§27.2) and the **page-by-page
  read** the four-class sweep did not perform (§27.4); plus the ⛩ **G4 disposition**, now a ruling rather
  than work.

## The three entries worth carrying past this increment

### 1 · ⭐⭐ `R-177` inverted — the vault was right and the site was stale, and nothing connects them

§26.3 found the site tree correct and the vault source stale. This sweep found the **same corpus failing the
other way**: four of seven defects were **already correct in the vault**, one file literally reading
***"10 (now 11)"*** — the correction authored, in place, for months, never reaching the page.

Cause, derived: `transform-content.mjs` holds **8 mapping tables**, and **`glossary` and `community` are not
among them**. Those two sections are **29 published pages with a vault counterpart and no generator between
them.** ⇒ ***§26.3 asked which of two trees to trust; this asks the prior question — whether anything connects
them — and for 29 pages the answer is nothing, so the drift is permanent by construction.***

### 2 · ⛔⛔ G4: the queue row was false, and so was my probe — and the false negative reached the operator

The row said no Wilhelm clearance was recorded anywhere in this vault. **It is recorded** — operator,
2026-06-07, ADR-010-window override, in `subnetworks.yaml`'s provenance header and a named coord memo. Both
searches covered `who/` and `what/decisions/` and **neither covered `site/src/data/`**.

⇒ **Convention 16 breached inside an investigation of a supposedly-missing record** — and worse than the usual
instance, because **the false negative was carried into the AskUserQuestion that framed the operator's
ruling.** *An agent's wrong answer becomes the operator's premise at the moment it is put in a question.*

The finding underneath was sharper than the row's: the clearance was **conditional** on an E5 close-deploy
green-light, and **E5 was subsumed on 2026-06-18 before reaching one**, carrying `subnetworks.*` forward as
*"resolved inputs"*. ⇒ ***a condition keyed to a gate is discharged by nothing when the gate is ABOLISHED
rather than passed*** — and the memo's own *"silence is not consent"* safeguard died with the gate it named.
Meanwhile `publish_status` recorded that condition and **was read by no code at all**.

### 3 · ⚠ The tense error, committed two steps after I flagged the distinction

A repair put a present-tense figure (30 glossary entries) into a clause reading *"during Operation Rosetta"* —
four of those entries postdate the close. Caught by `git log --diff-filter=A`. ⭐ The reusable half is the
remedy: the **vault source had already solved it** by widening the period, so its framing was adopted rather
than a third phrasing invented (`F-aa`'s lesson). *Knowing a rule and applying it while wearing a different
hat are separate acts* — P4.5b's finding, recurring.

## ⛔ And the process failure this AAR exists to record

**The campaign index never heard about any of it.** `grep -c "docs_sweep\|docs-corpus\|R-184"
campaign_haussmann/CLAUDE.md` → **0**. The work reached `STATE.md`, `MANIFEST.md`, the register and two
artifacts — and not the index a cold agent reads first.

⇒ ***This is `GR-5`'s own recorded finding — "a mission's OPEN is as index-coupled as its close" — recurring
in the very next increment, which makes it the ninth sighting of the index-vs-artifact class.*** GR-5 wrote
that convention down **nine days before this**, in that file, and it did not prevent the next instance.

⚠ **The honest reading is not "try harder."** Convention 7 binds the close of a *mission*; an operator-ruled
**increment** has no close cascade, and every increment since `course_deploy` has updated the index only
because somebody remembered. **The gap is structural and it is named here rather than papered over** — and,
consistent with the six standing no-checker rulings, **no checker is authored for it at this sitting's tail.**
