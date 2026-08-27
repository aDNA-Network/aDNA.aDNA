---
type: artifact
campaign: campaign_haussmann
mission: mission_haussmann_p4_5_voice_rewrite
increment: P4.5b
objective: O3
title: "P4.5b — dual-audience review records for every rewritten page (AC-d limb 2, V2 as amended)"
created: 2026-08-26
updated: 2026-08-26
status: complete
last_edited_by: agent_rosetta
surface: "site/dist twins + src, local build of tree 78f6bbe"
skill: how/skills/skill_dual_audience_review.md
guide: what/doctrine/doctrine_site_voice.md
tags: [artifact, haussmann, p4_5b, dual_audience, voice, ac_d, v2]
---

# Dual-audience review records — P4.5b

> **What this artifact is for, and why it is shaped like this.** The pre-build gate found that
> **AC-a — the voice guide — is covered by zero verification limb** (FAILURE 1): all four V limbs
> measure rendered pages, and a guide is a governance document, so a one-paragraph guide never
> applied to a sentence would pass AC-a while V1–V4 sat unmoved. **The remedy was to bind the guide
> to work already required rather than to add a fifth reviewer**: V2 was amended so these records
> must **cite the guide rule each decision applied**. *A rule nothing cites is a rule that did not
> govern.* The **Rule** column is therefore the load-bearing part of this file, not decoration.
>
> It also answers **FAILURE 3** — AC-d's second limb and V2 are the same sentence, so the criterion
> certifies itself. That is not fixable by writing "PASS" more confidently. The remedy is that each
> record is **auditable against the skill's own checklist**: all eight items appear for every page,
> each with the evidence sentence its verdict rests on, so a later reader can **disagree with a
> specific line** instead of being handed a verdict.

## ⚠ Conflict of interest — declared, not managed away

**The same desk wrote this copy and reviewed it.** That is the structural defect FAILURE 3 named,
and it is not cured by this file existing. Independent re-review was offered at the O3 planning gate
and the operator ruled **auditable records only**, on the P2.2 / P4.1 precedent where the conflict
was declared rather than delegated. So this is disclosed on the artifact's face, in the terms the
campaign uses elsewhere: **`[D-syn]` — a disclosed synthetic instrument, never a substitute for the
human one.** The real independent read of these surfaces is **P5.1's human panel**, the mission
immediately after this one, which reads exactly the pages rewritten here.

**What that means for a reader of this file:** treat every PASS below as *a claim with its evidence
attached*, not as a finding. The evidence sentence is there so you can check the claim against the
page and disagree.

## The instruments

| | |
|---|---|
| **Checklist** | `how/skills/skill_dual_audience_review.md` — 4 developer items (D1–D4), 4 non-developer items (N1–N4) |
| **Guide** | `what/doctrine/doctrine_site_voice.md` — §0 honesty · §1 registers + transition rule · §2 tense · §3 one-new-term law · §4 limit-with-claim · §5 disclose at the point of confusion · §6 avoid-list · §7 what the number is not · §8 done |
| **Measurement** | `site/scripts/reading_census.mjs` (prose-only canonical; self-test **18/18**) · `site/scripts/glossary_first_use.mjs` (self-test **16/16**) |
| **Fence** | `gate-48`, red-proven **7/7** (5 mutations + 2 controls) |

**Checklist keys** — D1 technical precision · D2 actionable · D3 structured for scanning ·
D4 correct terminology // N1 plain-language opening · N2 mental model provided · N3 no jargon
without explanation · N4 progressive disclosure.

---

## 1. `/` — the homepage

**FKGL 9.96** (whole-twin 13.00) · target 10 · **glossary first-use 2/2 linked**

### Decisions, and the rule each applied

| Decision | Rule |
|---|---|
| Hero lead is **no longer ADR-048 verbatim**: *"always know where things live"* cut, the 47-word sentence split into three | **§6** avoid-list (*lives* for where context is) · **§1** plain-before-lyric |
| ⚠ And the call is recorded **as a judgement**: §50's cited harm is *"the network where that shared context lives"*, which claims a place; *"know where things live"* is idiomatic. Cut because a hero cannot rely on the reader taking the mild reading. **Reversible in one edit.** | **§0** — claims move down, including claims about our own compliance |
| *"Most are tended by a named agent — an **AI persona**, not a person"*, linked to `/about#agent-stewards`, **in the sentence that first says "tended by"** | **§5** disclose at the point of confusion, not three pages later |
| The two opaque first-screen counters (*16 Entity Types*, *3 Conformance Levels*) gain an optional `href` to their definitions; the other three are left alone | **§6** avoid-list (counters with no reason to want them) · **§5** |
| `AGENTS.md` and *Governance files* linked at first use (O3) — **wrapping existing words, adding none** | **§3** one-new-term law |

### Checklist

| | verdict | evidence |
|---|---|---|
| **D1** technical precision | PASS | The lead keeps every load-bearing noun — category, three folders, plain Markdown, git, the registry — and the persona sentence now states a fact (`AI persona`) the page previously left to inference. |
| **D2** actionable | PASS | The three-step *How it Works* strip still names the artefacts a developer acts on (`CLAUDE.md`, `AGENTS.md`), now with `AGENTS.md` resolvable at first mention. |
| **D3** structured for scanning | PASS | Splitting the 47-word lead into three sentences is a scanning improvement as much as a reading-level one; the counters are unchanged in position. |
| **D4** correct terminology | PASS | No term was traded for an approximate one. `Conformance Levels` and `Entity Types` were kept **and made reachable** rather than replaced with plain-English paraphrases that would have been less precise. |
| **N1** plain-language opening | PASS | *"…so that AI agents and the people working with them can always find what they need."* No proprietary noun before the reader has a reason for one. |
| **N2** mental model | PASS | *"Three folders, plain Markdown, tracked in git"* — a spatial model in nine words. |
| **N3** no jargon unexplained | PASS | Verified mechanically, not by eye: `gate-48` G48e, 2 of 2 checkable terms linked at first prose use. |
| **N4** progressive disclosure | PASS | The counters are the test case: the number stays on the first screen, the definition is one click away rather than inlined. |

⚠ **The honest residue.** `/` clears its target by **0.04** (9.96 against 10). That is recorded as
the number rather than rounded, and it is why O3's three links were added by wrapping existing
words: any new prose here spends a margin the page does not have. **§7 applies — the number is a
proxy and this one is nearly touching its bound.**

---

## 2. `/learn/what-is-adna`

**FKGL 7.11** (whole-twin 10.29) · target 10 · **glossary first-use 3/3 linked**

### Decisions, and the rule each applied

| Decision | Rule |
|---|---|
| Lede rewritten to *"…organizing what a project knows, so that people and AI agents can both find their way around it."* | **§1** plain before lyric |
| **The name note added** — *"In genomics, aDNA usually means ancient DNA. This is not that."* | **§5** — measured: the collision was addressed on 4 pages, **none** of them `/`, `/learn`, `/get-started` or `/about` |
| Triad · Governance files · missions · sessions · skills · templates · frontmatter all glossary-linked at first use | **§3** one-new-term law |
| *"Weeks of work vanish when the context window closes"* → *"Work slips out of reach as the context window fills"* | **§2** tense — the original overstated a recoverable state as a loss |

### Checklist

| | verdict | evidence |
|---|---|---|
| **D1** technical precision | PASS | The 16-type split (**4 WHO, 5 WHAT, 7 HOW**) is derived from the same constant the page renders, unchanged by the rewrite. |
| **D2** actionable | PASS | The worked directory tree and the `CLAUDE.md` contract paragraph both survive intact. |
| **D3** structured for scanning | PASS | The three-item *what aDNA gives you* list keeps its bolded lead terms, now as links. |
| **D4** correct terminology | PASS | `frontmatter`, `mission`, `session` are used in their spec senses and each resolves to the glossary. |
| **N1** plain-language opening | PASS | *"Every aDNA project has the same shape. Learn that shape once and you can open any of them — including this site, which is one."* |
| **N2** mental model | PASS | *"the same shape"* carries the whole page; the genome borrowing is now **explained** in the name note rather than assumed. |
| **N3** no jargon unexplained | PASS | G48e: 3 of 3. ⭐ Two of those three — `Triad`, `Governance file` — were **already linked in the source** and the twin was dropping the link (see §11); the copy was right and the machine surface was lying. |
| **N4** progressive disclosure | PASS | The name note answers a question most readers never ask, placed on the page titled *What is aDNA?* rather than in the hero — where it would tax every reader for a minority's confusion. |

---

## 3. `/community`

**FKGL 9.28** (whole-twin 10.70) · target 10

| Decision | Rule |
|---|---|
| *"organized around a participation ladder"* → *"arranged as a ladder, from someone running a single vault to a steward of the standard itself"* | **§1** plain register; **§3** — *participation ladder* was an undefined compound |
| *"authored by agents but ratified by humans"* → *"Agents draft the changes; only a person can ratify one."* | **§0**; **§1** — the ratification rule is load-bearing and was carried in a subordinate clause |
| *"governed as a public record, not a claim"* kept | **§4** — concede-then-claim, the `/about` move |

| | verdict | evidence |
|---|---|---|
| **D1** | PASS | The ladder's levels and the proposal-vs-issue split are unchanged in substance; only the sentence shapes moved. |
| **D2** | PASS | *"A change to what the standard requires goes through the numbered proposal process. Anything else… goes through the repository's issue templates"* — a developer can route a contribution from this sentence alone. |
| **D3** | PASS | Level headings untouched. |
| **D4** | PASS | *"steward"*, *"proposal"*, *"ratify"* used consistently with `/community/proposals`. |
| **N1** | PASS | *"aDNA is built by people and agents together, in the open."* |
| **N2** | PASS | The ladder is the model, and it is now anchored at both ends in one sentence. |
| **N3** | PASS | No unlinked checkable term reaches a first prose use (G48e). |
| **N4** | PASS | *"Each level stands on its own. You get the full value at Level 0 without joining in at all."* — the page states you may stop reading, which is progressive disclosure taken seriously. |

---

## 4. `/commons`

**FKGL 8.61** (whole-twin 15.68) · target 12

| Decision | Rule |
|---|---|
| **The *"context democracy"* definition rewritten.** ⭐ The term *was* already defined at its point of use and the cold-reader **still** recorded *"headline concept, never landed for me"* — because the definition was itself 32 words and turned on *"federating"*, which she had not met | **§1** — the lyric line arriving before the reader knows what the thing is; **§3** |
| *"Federate a wrapper"* → **"Connect to a subnetwork"**; *wrapper* defined in place; ***forge consumer* cut entirely** | **§3** — three unexplained terms in one card; the guide's *"define in place with a clause, then link"* |
| *"before you federate"* → *"before you connect"* | **§3** |

| | verdict | evidence |
|---|---|---|
| **D1** | PASS | *"nothing is copied, so their context stays theirs"* is the `federation_ref` semantics stated plainly — more precise about the mechanism than the sentence it replaced, not less. |
| **D2** | PASS | `federation_ref` is still named in code, so a developer can search for it. |
| **D3** | PASS | Card structure unchanged. |
| **D4** | ⚠ PASS with a note | *"forge consumer"* was **cut, not replaced**. It named a real category, and the page no longer has a word for it. Judged the right trade: the reader had no use for the category, and §3 says a paragraph introducing two undefined nouns has introduced neither. **A developer loses nothing here; a taxonomy does.** |
| **N1** | PASS | *"People and their agents keep their own project context, in the open, and no one company owns the whole of it."* |
| **N2** | PASS | *"Each project keeps its own files. Projects cite each other"* — citation is a model a stranger already owns. |
| **N3** | PASS | The three unexplained terms are gone or defined. |
| **N4** | PASS | The commons idea arrives as a consequence of the two plain sentences before it, not as a headline. |

---

## 5. `/get-started`

**FKGL 7.89** (whole-twin 9.54) · target 10 · **already met at O0 (9.69)** · **glossary first-use 1/1 linked**

| Decision | Rule |
|---|---|
| R-64's sentence re-pinned — *"Everything **lives** on your machine"* rewritten | **§6** avoid-list — and ⭐ `gate-26` was **holding the forbidden phrasing in place**, because it asserts `verified` quotes stay PRESENT |
| `triad` linked at first use (O3) | **§3** |

| | verdict | evidence |
|---|---|---|
| **D1** | PASS | The install sequence, the scaffold listing and the fork-skill description are untouched. |
| **D2** | PASS | This is the page that is nothing but actions; none were edited. |
| **D3** | PASS | Numbered steps unchanged. |
| **D4** | PASS | `triad` now resolves to the glossary at first use. |
| **N1** | PASS | Unchanged and already conformant — the page opens with what you will do. |
| **N2** | PASS | The rendered workspace tree is the model. |
| **N3** | PASS | G48e: 1 of 1. |
| **N4** | PASS | Onboarding interview offered as optional, explicitly deferrable. |

**⚠ Recorded rather than claimed:** this page **already met AC-b before P4.5b touched it** (9.69 at
O0, down from 15.85 at the stale 08-16 baseline). Only R-64's sentence and O3's link changed. Taking
credit for the delta would be taking credit for eleven other missions' work.

---

## 6. `/security`

**FKGL 10.25** (whole-twin 11.34) · target 12

| Decision | Rule |
|---|---|
| Two ~31-word semicolon-chained sentences split into short ones; **scope unchanged item for item** | **§1** plain register |
| ⚠ **Deliberately NOT converted to bulleted lists** | **§7** — *never rewrite to move a number.* A list drops out of the prose metric entirely and would have read as an improvement without being one |

| | verdict | evidence |
|---|---|---|
| **D1** | PASS | In-scope and out-of-scope sets are identical to before, item for item — verified by reading the two lists against each other, not by trusting the diff's shape. |
| **D2** | PASS | The reporting path (GitHub Security Advisories, then the minimal public issue) is intact and now in imperative sentences. |
| **D3** | PASS | `In scope:` / `Out of scope:` bolded leads retained. |
| **D4** | PASS | No security term altered. |
| **N1** | PASS | Opens with what to do, not with a policy preamble. |
| **N2** | PASS | The in/out scope pairing is the model. |
| **N3** | PASS | *"the gate harness"* is the one house term and it is named alongside CI, which places it. |
| **N4** | PASS | Machine-readable policy pointer sits last. |

⭐ **This page is the clearest instance of the guide governing an outcome the metric would have
punished.** The bulleted version would have scored better and communicated no better.

---

## 7. `/state-of-the-network`

**FKGL 7.88** (whole-twin 8.54) · target 12

| Decision | Rule |
|---|---|
| *"opening progressively"* **kept** and a clause added: *"That is the part of the standard that lets separate projects work together, and it is being opened in stages rather than all at once."* | **§6** avoid-list, which rules this phrase **embargo-mandatory — keep the phrase, add the clause** |

| | verdict | evidence |
|---|---|---|
| **D1** | PASS | Nothing is claimed that was not claimed before; the clause explains, it does not extend. |
| **D2** | PASS | Page is a status surface; no action changed. |
| **D3** | PASS | Unchanged. |
| **D4** | PASS | The embargo wording is preserved exactly, which is the constraint (campaign convention 9). |
| **N1** | PASS | Unchanged. |
| **N2** | PASS | *"opened in stages rather than all at once"* is the model the phrase itself lacked. |
| **N3** | PASS | This edit **is** the N3 fix. |
| **N4** | PASS | Clause sits directly after the phrase. |

⭐ **The constraint produced the better answer.** Free to rewrite, the phrase would have been
replaced; forbidden to, the fix had to be an explanation — which serves the reader who meets the
phrase *elsewhere* too.

---

## 8. `/about`

**FKGL 11.43** (whole-twin 13.53) · target 12

| Decision | Rule |
|---|---|
| `id="agent-stewards"` added so `/` can deep-link the disclosure. **No copy changed.** | **§5** — the defect was the disclosure's **reach**, not its content |

| | verdict | evidence |
|---|---|---|
| **D1–D4**, **N1–N4** | PASS, unchanged | The page a cold-reader called *"the most honest project page I've read in years"* is the guide's own worked example (§1, §4). **The correct edit here was the smallest possible one.** |

⚠ **The anchor did not exist when the link to it was written** — `/about` carried only
`#main-content`. Caught by checking the **built output** before shipping, which is convention 14 at
its smallest scale.

---

## 9. `/vaults/graph` + `VaultRelationshipBlock` (75 built pages)

**Component-level; the highest-leverage line in the mission.**

| Decision | Rule |
|---|---|
| *"a node is a `Home.aDNA` plus the vaults that **live on** it"* → *"one machine, running one or more aDNA vaults, with a `Home.aDNA` vault that keeps track of them"* | **§6** — both the circular-definition row *and* the *lives* row |
| The **second copy** on `/vaults/graph` found and fixed | **convention 7** — grep the *rendered* output for what the defect claimed, not only the artefact that claimed it |

| | verdict | evidence |
|---|---|---|
| **D1** | PASS | `Home.aDNA`'s actual role — tracking the vaults on a node — is now *stated*; the old sentence asserted a set membership and defined nothing. |
| **D2** | PASS | The term still names the real directory. |
| **D3** | PASS | One sentence, unchanged position, on all 75 pages. |
| **D4** | PASS | `node` and `vault` used in their registry senses. |
| **N1** | PASS | *"This vault is one of many that can sit on a single computer."* |
| **N2** | PASS | *"one machine"* is the model the circular version withheld. |
| **N3** | PASS | `Home.aDNA` now arrives **as a consequence, not a premise** — the plain word comes first. |
| **N4** | PASS | The *New here?* link still offers the longer route. |

⭐ **75 surfaces from one component line** — P3.4's *"a THIRD copy … from one shared data line"*
recurring at scale, and the reason C8 was the list's highest-leverage item.

---

## Verdict

**9 surfaces reviewed · 72 checklist items · 72 PASS · 0 NEEDS REVISION · 1 PASS carrying a
recorded trade** (`/commons` D4, *forge consumer* cut without replacement).

Every page states a guide rule for every decision, which is what makes AC-a falsifiable: **if a
rule below is wrong, a specific sentence on a specific page is wrong with it.**

## What these records do NOT establish

Stated plainly, because a checklist of PASSes is exactly the artefact that invites over-reading:

1. **They are not independent.** See the conflict-of-interest declaration above. `[D-syn]`.
2. **They do not establish comprehension.** The checklist and FKGL are both proxies. §7: *a page can
   score ≤ 10 and be incomprehensible if its nouns are undefined* — which is why AC-c exists as a
   separate criterion and why `gate-48`'s glossary limb is a hard assertion while its grade limb is
   not.
3. **They cover the pages this increment rewrote**, not the site. 226 pages are built; 21 are
   graded; 9 are reviewed here.
4. **The real test is the next mission.** P5.1's human panel cold-reads these exact surfaces. **If a
   transcript contradicts a rule cited here, the transcript wins** and the guide is amended, dated,
   with the old rule struck rather than deleted (`doctrine_site_voice` §Self-reference).
