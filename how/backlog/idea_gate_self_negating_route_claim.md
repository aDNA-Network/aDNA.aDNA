---
type: backlog_idea
status: proposed
priority: medium
created: 2026-09-11
updated: 2026-09-11
last_edited_by: agent_rosetta
filed_from: aDNA.aDNA/how/campaigns/campaign_haussmann/evidence/claims/claim_register.md §26 (R-171)
scope: local (site gate); upstream candidacy deferred — see §Forward integration
relates: [claim_register, gate_20_claim_trace, gate_21_currency, gate_14_single_source]
tags: [backlog, gates, claim_rot, docs_corpus, self_negating_claim, haussmann]
---

# A gate for self-negating route claims — a page that says a route is unpublished while that route exists

## The gap

`/how/publishing/content-mapping` shipped a section titled "Current Gaps" reading *"The **HOW** triad leg
(`how/publishing/`, `how/workshops/`) is not yet published to the site. This content — including the document
you are reading — exists in the vault but has no site pathway."*

There are **15 built `/how/` pages**. The page is served at `/how/publishing/content-mapping`. It is row 2 of
the `publishingMapping` table in the very script it says its tables are extracted from. Its own "Related" list
links three of the pages it says do not exist.

**Nothing caught it, and the existing gates are the reason it was reasonable that nothing did:**

| Gate | What it checks | Why it misses this |
|---|---|---|
| `gate-20` claim-trace | flagged high-signal claims resolve to a `source_ref` | the claim was never flagged — it is not in the manifest |
| `gate-21` currency | rendered **vault-state numbers** (vault count, standard version, entity-type count) | this is a prose existence claim, not a number |
| `gate-14` single-source | repo/publisher **literals** in `dist/` | the claim contains no repo or publisher literal |
| `gate-26` claim register | the register is a living fixture | the register's scope never reached the docs corpus (§26.1) |

⭐ **The class is narrower and more checkable than "stale prose".** A claim of the form *"X is not published /
has no site pathway / is not yet on the site"*, where `X` names a route or a vault directory with a route, is
**mechanically falsifiable against `dist/`** — which is exactly the property that makes it gateable and makes
the general claim-rot problem not.

## Sketch, not a specification

Static scan of `dist/**/*.html` (the same surface `gate-14`/`gate-21` use, after a fresh `npx astro build`):

1. Match negation phrases near a route-ish or vault-dir-ish token — `not yet published`, `no site pathway`,
   `is not on the site`, `has no route`, `planned for Phase`.
2. Resolve the named token to a candidate path (`how/publishing/` → `/how/publishing/`).
3. **Red if the candidate exists in `dist/`.**

Non-obvious requirements, each earned by a recorded defect:

- **An escape hatch, mirroring `gate-14`'s.** A page may legitimately say *"`who/reviewers/` is not published"* —
  because it is not. The gate must red on *false* negations only, so a deliberate true statement needs a way to
  pass. Without one the gate would have redded on the honest replacement copy this very session wrote.
- **It must red-prove with attribution.** One mutation per assertion; a red arriving through a different
  assertion is a harness bug, not a pass (`idea_upstream_verification_instrument_discipline`).
- **It must state its denominator.** `dist/**/*.html` is 230 files and **229 pages** — the extra is `404.html`.
  A count that silently includes it is the defect this gate is meant to catch, one altitude up.
- ⭐⭐ **It must distinguish a claim from a QUOTATION of a claim — and the repair that closed `R-171` is the
  proof.** The corrected page keeps the false sentence as a marked quotation (`<blockquote><em>"…is not yet
  published…"</em>`), because SO-6 says strike, never delete. A naive phrase-match still finds it — **verified
  in the built output**: `grep -c 'not yet published'` on the repaired page returns **1**, and every character
  of that 1 is inside the correction. ⇒ ***a gate written against this instance would red on the fix for this
  instance.*** This is the `adna_validate` skills-count defect exactly — *a regex over prose cannot tell a claim
  from a quotation of a wrong claim* — arriving before the gate was built rather than after. Any implementation
  must scope to live assertions (skip `<blockquote>`, `<del>`, `<em>` inside a correction block) **and
  red-prove that exclusion in both directions**, or it will punish the discipline it depends on.

## ⛔ Why this is filed and not built

**No new checker at a sitting's tail.** Ruled five times in this campaign; six of this desk's instruments have
been wrong before their subjects, one of them blind in the *opposite* direction (reporting everything red on a
green baseline). *The habit of filing costs a sentence and cannot itself be wrong; the checker costs a sitting
and can.*

It is also not urgent in the way the finding felt: the three defective pages are **repaired in both trees**, so
the gate would guard against recurrence, not against a live defect.

## The honest prerequisite

⛔ **Do not build this before the docs-corpus sweep it came from.** 229 pages have never been read against the
claim register (§26.1). A gate authored against **one** known instance is a gate shaped by a sample of one —
and the sweep is what would say whether the phrase list above is the right list, or whether self-negating
claims are the *rare* shape and something else is the common one. **Sweep first, then shape the gate to what
the sweep found.**

## Forward integration

**WHO** — a successor HAUSSMANN mission or its follow-on campaign, consuming this alongside the docs-corpus
sweep. **WHAT** — a `gate-5x` spec plus the phrase list the sweep yields. **WHEN / HOW / WHY** deliberately
deferred per `skill_forward_reference_stub_design`: the trigger is the sweep's output, not a date.

**Upstream candidacy is NOT claimed.** Whether this generalises beyond a vault that publishes itself to a
website is genuinely open — most aDNA vaults have no site. Filing it upstream on the strength of one
self-publishing vault's defect would be the scope error in §26.1 committed a fourth time.

## Related

- [[claim_register]] §26 — `R-171`, the instance
- [[idea_upstream_verification_instrument_discipline]] — the red-prove-with-attribution rule this must satisfy
- [[pattern_question_test]] — the dual-audience test a replacement gaps section has to pass
