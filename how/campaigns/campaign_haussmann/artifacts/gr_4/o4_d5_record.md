---
type: artifact
artifact_id: o4_d5_record
title: "GR-4 O4 — D5 reaches the homepage, and the measurement the signature deferred was taken and then made recurrent"
campaign: campaign_haussmann
mission: mission_haussmann_gr_4_story_coverage
objective: O4
created: 2026-09-02
updated: 2026-09-02
status: complete
last_edited_by: agent_rosetta
covers: ["AC-5", "AC-7 (mission-level)", "V4"]
tags: [haussmann, gr_4, o4, d5, changelog, rss, reading_census, adr_049]
---

# O4 — D5: the returning-member entry point

**`AC-5` ✅ · `V4` ✅ · `AC-7` ◐ (mission-level, closes at O5).**

The Grande Revue's **P2-7**: changelog and RSS were reachable **only from the footer**, so a
returning member had no what's-new entry point. ADR-049 caps the top nav at 7 flat entries, so the
ratified remedy is a homepage strip and explicitly **not** an eighth nav item.

⛔ **Nothing deployed and nothing owed** — Lane D is met on-build. Prod still serves `a852423`,
re-probed at the open. A push remains its own ⛩ GO.

---

## 1 · Derived at open

| Fact | Value | Command |
|---|---|---|
| CI on `main` (convention 19) | **success ×5**, newest `33586055067` | `gh run list --workflow=gates.yml --branch main -L 5` |
| `origin/main` at the remote | `7210d5e` | `git ls-remote origin main` |
| unpushed | **6** | `git log --oneline origin/main..HEAD \| wc -l` |
| prod build stamp | `a852423`, built 2026-09-01T19:40:19Z | `curl /.well-known/adna-build.json` |
| top nav flat entries | **7** | `navigation.ts:76-84` |
| `/` in `gate-49`'s TEMPLATES | **YES** (`{ id: 'home', path: '/' }`) | `gate-49-*.spec.ts:50` |
| `changelog`/`rss` on the `/` twin | **0** — the absence is real | `grep -ci "changelog\|rss" dist/index.md` |
| untracked inbound memos | **4** — ⚠ **not the 3 the record carried** | `git status --porcelain who/coordination/` |

⚠ **Convention 19's green has a WIDTH**: green at `7210d5e`, the last **pushed** commit. GR-4's six
commits have never been through CI.

⭐ **`/`'s pre-state was measured, not assumed.** `grep` over the home twin for both destinations
returns **0** `[D]`. P2-7 confirmed at the object ⇒ neither `G54q` nor `G54r` is green against zero
work, which is the trap `D1` set for this mission and which it has now met three times.

---

## 2 · ⛩ The form ruling (SO#1 — put to the operator, not taken here)

`AC-5` fixes the **surface** (*"above the footer"*) and says nothing about the **form**. On `/` that
is a measurement decision as much as an editorial one, because the page clears its reading-level
target by **0.04**.

**Ruled: a dated strip with NO lead sentence.** Heading + the 3 most-recent changelog entries +
an RSS link, every line unpunctuated, so `reading_census.mjs`'s `unpunctuated-block` predicate holds
the whole section out of `/`'s prose corpus **by construction rather than by luck**.

⭐ **The reasoning was measured before the copy was written, and by a live precedent on the same
page**: `join-network`'s `subnetwork-tease` list is the identical shape
(`- [link](/href) unpunctuated label`) and the census **already** classifies it `unpunctuated-block`
on `/` `[D]`. Headings are dropped by a line predicate. So the form was chosen against an existing
instance, not against a reading of the predicate's source.

**Also ruled: the 4 untracked inbound memos are committed as a rider.** The receiving commit **is**
the read-receipt (P4.4's finding). ⛔ Committing is receiving, **not** answering.

---

## 3 · ⭐⭐ The measurement the signature deferred

⛩ Ruling 3 dissolved `CONSTRAINT-2` for D4 by moving it off `/`, and said in the same breath that
***a constraint that stops binding is not a measurement that has been taken***. D5 lands **on** `/`.

| Measure | Before | After | Δ |
|---|---|---|---|
| `/` **prose** FKGL (target 10) | **9.96** | **9.96** | **0.00** |
| `/` prose corpus, characters | **6030** | **6030** | **0 — byte-identical** |
| `/` **whole-twin** FKGL | 13.00 | **13.16** | **+0.16** |

Both ends on the **same local build** (HAZARD-2 honoured: a before from prod and an after from
`dist/` would be *two instruments sharing one number*, B2a's finding). Command, from the **repo
root**: `node site/scripts/reading_census.mjs`.

**Every strip line, with the predicate that dropped it** `[D]`:

| Line | Predicate |
|---|---|
| `## What's new` | `heading` |
| `- [Aug 28, 2026](/changelog) Measuring speed, and fixing the links that prove us` | `unpunctuated-block` |
| `- [Aug 22, 2026](/changelog) A true sentence that stopped being true` | `unpunctuated-block` |
| `- [Aug 21, 2026](/changelog) The registry as data, and a front door for agents` | `unpunctuated-block` |
| `[Full changelog](/changelog) · [RSS feed](/rss.xml)` | `multi-link` |

**Lines leaked into prose: 0.**

### ⭐⭐ The whole-twin delta is what makes this result mean anything

Had **both** figures held still, the reading would have been **indistinguishable from the strip
never shipping**. That is `DEFECT-1`'s shape precisely — a limb that cannot separate a met criterion
from an empty one. **The whole-twin moving 13.00 → 13.16 while the prose corpus held byte-identical**
is what separates *"the classifier correctly excluded it"* from *"the twin never contained it"*.

⇒ **Answer to the owed question: a link-dense strip does NOT enter the prose corpus** — measured,
per-line, with a naming predicate and a positive control.

### ⚠⚠ …and the answer has a shelf life, which is why it is asserted rather than recorded

`AC-5` carries **no reading-level constraint at all** — the same gap as `AC-3`, the same class as
`AC-4`'s `DEFECT-1`, now sighted in **three consecutive objectives**. And the property is fragile in
a way invisible to a reader: `unpunctuated-block` drops a block only while it carries **zero**
sentence terminators. **One full stop** — a lead sentence, or a future changelog title punctuated by
an editor who had no reason to know — and this section silently enters a corpus with 0.04 of
headroom.

**`G54s` asserts the property so it recurs.** A reading is a statement with a timestamp
(convention 16); an assertion is not.

---

## 4 · Built

**`site/src/pages/index.astro`** — a `latest-strip` section after `join-network`, last on the page.
Reuses `getSortedChangelog()` (`utils/collections.ts:42`) — **the same sorted collection
`/changelog` itself renders**, so the two surfaces cannot disagree about what *latest* means — and
`changelog.astro`'s own `timeZone: 'UTC'` date treatment (R-126: without the zone a PDT build prints
every entry a day early). ⛔ No new route ⇒ ADR-057's route-coupling obligations do not fire.

**`gate-54` 14 → 19 assertions**, one per obligation:

| id | asserts | note |
|---|---|---|
| `G54o` | the nav is still **exactly 7** flat entries, derived from `topNav` | ⚠ **a REGRESSION CHECK, not a proof** — green against zero work. It earns its place because ADR-049's cap is the *reason* D5 is a strip and not a nav item: it guards the remedy's **premise** |
| `G54p` | the home twin is measurable and the probe reaches real text | coverage control; floor **4000** derived (real 9316, pointer-block collapse ~521) |
| `G54q` | the entry point names **BOTH** destinations | `G54j`'s both-terms lesson one criterion across |
| `G54r` | the strip's entries are **derived**, not typed | re-derives the top-3 from frontmatter |
| `G54s` | **nothing in the strip enters `/`'s prose corpus** | imports the census's own `toProse` |

⭐ **`G54s` imports `toProse` from `reading_census.mjs` rather than re-implementing the predicates.**
A second implementation would be a second instrument to be wrong (conventions 15/16/17) and could
drift from the one whose reading §19.2 quotes.

---

## 5 · Verified

| Check | Result |
|---|---|
| chromium lane | **674 → 679**, delta isolated by `--list` (gate-54's file **14 → 19**; +5, removed nothing) |
| all-projects | **705** |
| snapshot lane | **26** — unchanged |
| `check:markup` | **0**, control-checked |
| red-test | **22 pass / 0 fail** — every case red at exactly its declared set |
| `gate-49` re-baseline | red **confirmed first** (2 failed · 24 passed), then regenerated in-container: **exactly 2 files changed**, both `home`; **22 of 24 untouched** |

⛔ **No mask, no tolerance raised** — B0's ruling stands. The 22 untouched baselines independently
prove the new section's styles did not leak outside it.

### ⭐ `V4`'s ratified single mutation was insufficient, and DEFECT-4 said so at authoring time

V4 as signed red-proved `AC-5` with **one** mutation — an 8th nav entry. It reds via the nav
**count**, so the entry-point assertions **would never once have been demonstrated to fail**. That
is GR-3's clause — ***a demonstration is only worth what it can attribute*** — spent **forward**,
at authoring time, instead of discovered in a harness's fourteenth day. Five assertions, five cases.

### ⭐ The harness caught a defect of mine, and it failed ALONE

Case 18's `applied()` verifier was a leftover placeholder, grepping for a word present in **neither**
the pre- nor post-mutation state. It reported `HARNESS BUG` — **correctly** — and cases 19, 20 and
control 21 all ran clean afterwards. That is **O3's `applied()` restore fix earning itself in its
first extension**: before it, one bad pattern produced four false HARNESS BUGs and a red final
control. ***A case that cannot apply must fail alone.***

⚠ The underlying lesson is narrower than "I typed the wrong string": **`applied()` can only assert
PRESENCE, so a case that REMOVES something must name what the removal leaves behind.** Case 18
deletes a link; its verifier now greps the unlinked residue (`· RSS feed`).

### ⚠ A trap edit silently did not apply, and the aligned whitespace is why

The `cleanup()` trap's new restore lines were written by a scripted replace whose pattern had
single spaces where the file has **column-aligned** doubles. It did not match; the two new mutation
targets would have been backed up and **never restored on an aborted run**. Caught by reading the
file after the edit rather than trusting the exit code — the same discipline that catches `git mv`
staging a pre-edit blob.

---

## 6 · The inbox, read at the open

| Memo | `ack_required` | Disposition |
|---|---|---|
| Vitruvius — the `/g/adna/` Graph Front-Page | **true**, `decision_required` | ⛩ **approve / refuse / amend — OPEN, and the operator's.** Also reports `node_home`'s hub publishing a **non-ratified tagline** for us (their KW-59), filed and deliberately not changed by them |
| Hopper — `pre-push-sanitize.sh` **4.2.0** | **true** | an upstream offer + a defect in the template's own hook WARN path. Routes to `skill_template_release` |
| Hopper — ADR-017 as a §7.7 candidate | false | an offer with its own unmet D5 condition on its face. Nothing owed |
| Aspasia — seven dead wikilinks | false | *"No action is required of you."* |

⭐ Aspasia's carries a finding worth keeping: *"Neither of us could see this from our own side."*
Their links were vault-relative, resolving in **their** tree and not ours — the
**instrument-narrower-than-its-conclusion** family arriving in a *link* — and their remedy is a
checker that runs against **the copies recipients hold** rather than their own, which is convention
18's *name the surface the instrument runs against*, in someone else's vault.

⛔ **Committing these is receiving, not answering.** Every reply is a separate outward act with its
own ⛩ GO.

---

## 7 · Register

**§19**, rows **R-162…R-164**. Counts re-derived by
`artifacts/p3_5/derive_register_counts.py` **after** §19 was written: rows **183** · ids **168** ·
**0 gaps**.

⭐⭐ **The enumeration exposed something no prior section has had to state: this increment authors
almost no sentences.** Reader-facing strings literally written here number **three** — *"What's
new"*, *"Full changelog"*, *"RSS feed"* — and **none is a proposition**. Everything else a reader
sees is read from the changelog collection at build time. ⇒ **D5's claim surface is not its prose;
it is its DERIVATION**, and the only substantive assertion it makes — *these are the newest things
that happened* — is one **a hardcoded strip would make falsely while reading identically**. That is
`R-162`, and it is why `G54r` exists.

---

## 8 · Not done, named rather than absorbed

- **R-97** — the homepage's third *"nothing leaves"* instance (`verified (ADR-048 verbatim)`).
  Named at O3, still untouched: ratified copy needs its own gate.
- **`F-aa`** — the glossary/pattern tier-ordering contradiction, still `proposed`.
- **Replies** to Vitruvius and Hopper — each its own ⛩ send GO.
- **O5**: D6 + AC-8 (`/privacy`, before-figure **banked at 9.43/12** from O2) + the close cascade +
  the AAR.
