---
type: coordination
created: 2026-08-26
updated: 2026-08-26
status: active
last_edited_by: agent_rosetta
tags: [coldread, synthetic, haussmann, evidence, persona_clinician_researcher, p4_5b, retest]
synthetic: true
method: "SYNTHETIC agent cold-read RE-TEST (pre-screen) — an AI agent re-reading the rewritten surfaces in the same persona and along the same click path as the 2026-08-16 original. NOT a real human reader."
persona: "Rare-disease clinician-researcher (MD/PhD) — runs a small research program, cares about patient data governance, comfortable with computers but not a developer, has heard 'AI agents' in webinars"
date_of_visit: 2026-08-26
surface: "LOCAL BUILD of tree 78f6bbe (site/dist twins + rendered HTML) — NOT production. Production still serves 6675442; this increment is not deployed at the time of the re-test."
baseline: evidence/coldreads/coldread_SYNTHETIC_clinician_researcher.md (2026-08-16, live site)
tags_scope: [p4_5b_o3, v3]
---

# SYNTHETIC Cold-Read RE-TEST — Rare-Disease Clinician-Researcher

> **⚠ SYNTHETIC PRE-SCREEN, AND PARTLY CIRCULAR.** This is an AI-simulated cold read, not a real
> visitor — and the confusion list it re-tests **came from a synthetic clinician in the first
> place**, so a synthetic clinician re-reading it is a weaker instrument than the arithmetic makes
> it look. `[D-syn]`. The pre-build gate recorded this as a stated limit rather than treating it as
> a defect: **the real re-test of this list is P5.1's human panel**, the mission immediately after
> this one, which reads exactly these surfaces.
>
> **⚠ SURFACE DIFFERS FROM THE BASELINE.** The 2026-08-16 original read the **live site**; this
> reads a **local build**, because P4.5b is not deployed yet. Where a finding depends on live
> behaviour rather than page text, it is marked.

**Click path (~5 minutes), same as the original:** Homepage → Commons → RareArchive vault page →
About → *(Compliance — **the route no longer exists**; see §0)*.

---

## 0. A change to the path itself

The original's fifth stop was `/compliance/`, clicked on a *"patient-data-governance reflex"*. **That
route is gone** — no `/compliance` page exists in this build. The nearest surfaces are `/security`
and `/privacy`, both linked in the footer.

**As the persona:** I do not experience this as a loss, because the original's verdict on that page
was *"it is not the compliance a clinician means, and I clicked it expecting the other thing."*
A page that answered the wrong question is not missed. **But the question I actually had is still
unanswered** — see §6.

---

## 1. What is this? (one sentence)

An open standard — a prescribed folder structure with governance files — for organizing what a
project knows so that AI agents and people can both navigate it, plus a public registry of the
workspaces that use it.

*Baseline: substantively the same. The sentence was already available in 2026-08-16; what changed is
that I now get it from the **first screen** instead of assembling it from the sub-headline.*

## 2. Who is it for? (one sentence)

Teams already using agentic coding tools on real projects — the site says so in the second line
now, which the original had to infer.

## 3. What is it NOT? (one sentence)

*"Not a product or service — no server, no signup, nothing leaves your machine."* Unchanged, and
still the clearest sentence on the site for someone like me.

## 4. Would you try it, or forward it?

**Forward, not try — unchanged.** The front door is still a terminal command. Same two recipients:
my research software engineer, and a colleague in the undiagnosed-disease community.

⚠ **One thing got materially better for the forward.** The homepage now says, on the first screen:
*"74 vaults — every one of them on a single computer, ours. 15 are joined by 14 declared
relationships; the rest stand alone."* My original trust-check asked *"how many independent
operators exist?"* — **the site now answers that question before I ask it, and the answer is one.**
That is the kind of disclosure that makes me more willing to forward, not less.

## 5. What confused you? (the original's ten items, re-read)

| # | original phrase | status |
|---|---|---|
| C1 | *"a context democracy"* | ✅ **resolved** — rewritten to *"People and their agents keep their own project context, in the open, and no one company owns the whole of it. Each project keeps its own files. Projects cite each other…"* I understand it now. The term is gone as a headline, which is what I stumbled on. |
| C2 | *"the coordination layer, opening progressively"* | ✅ **resolved by explanation, not replacement** — the phrase stays, followed by *"That is the part of the standard that lets separate projects work together, and it is being opened in stages rather than all at once."* I would have preferred it cut, but I can read it now, and I notice the site kept a phrase it seemingly must keep rather than quietly paraphrasing it. |
| C3 | *"Federate a wrapper"* / *"forge consumer"* | ✅ **resolved** — heading is now *"Connect to a subnetwork"*; *forge consumer* is gone; `federation_ref` is explained as *"a small directory that points at theirs — nothing is copied, so their context stays theirs."* That last clause answers a question I had not managed to phrase. |
| C4 | *"16 Entity Types"* / *"3 Conformance Levels"* | ◐ **partly resolved, and the fix is the right one.** The counters are still on the first screen and still mean nothing to me *at a glance* — **but both are now links**, so the definition is one click away instead of unfindable. I would not have wanted the numbers deleted; they are the only thing on that strip that suggests the standard has a shape. |
| C5 | *"tended by Rosetta"* (assumed to be people) | ✅ **resolved, and at the right place** — the homepage sentence that first says *"tended by"* now says *"an **AI persona**, not a person"* and links to `/about#agent-stewards`. My original note was *"Honest once found, but three pages late."* It is now found at the sentence that caused the confusion. |
| C6 | *"Modules, datasets, and lattices compose into workflows"* | ✅ **resolved** — *"A module is one capability, a dataset is data it works on, and a lattice wires modules into a workflow."* Three definitions in one sentence; longer than before and I understand it, which is the trade I would have asked for. |
| C7 | *"Renamed from TaskForge.aDNA (Production Tidy pt08"* | ✅ **dead** — retired by P1.3's leak purge. Not found on any surface. |
| C8 | *"a node is a `Home.aDNA` plus the vaults that live on it"* | ✅ **resolved** — *"This vault is one of many that can sit on a single computer. We call that computer a **node**: one machine, running one or more aDNA vaults, with a `Home.aDNA` vault that keeps track of them."* The circle is broken: the plain word arrives first. |
| C9 | *"org vault pending"* | ✅ **dead** — no such label. ⚠ The RareArchive card now reads `Stage: chartered (self-declared)`, which is a labelled status **with its basis stated**. That is exactly the legend the original asked for. |
| C10 | the name itself — *"aDNA means ancient DNA in my field"* | ✅ **resolved, on the page where I would look** — `/learn/what-is-adna` now carries *"In genomics, aDNA usually means ancient DNA. This is not that."* ⚠ **Not on the homepage**, deliberately; as the persona I think that is right — I only went looking once I had decided to read further. |

**Score: 8 of 8 live items resolved, 2 confirmed dead.** *(The unit is the clinician's bullet, not a
table row — an O0 miscount that read 7 and 9 in the same document was corrected at the pre-build
gate.)*

⚠ **One item resolved partly (C4) and one resolved somewhere other than where I hit it (C10). Both
are recorded as such rather than rounded up to ✅**, because the criterion is *resolved item by
item*, not *resolved perfectly*.

## 6. Trust check — ⚠ THE HALF THAT DID NOT MOVE, AND SHOULD NOT HAVE

**Credible, as before, and slightly more so.** The `/about` register is untouched — *"aDNA is early
— and honest about it"*, *"stewarded today by one person"*. The Commons still refuses vanity
metrics. And the homepage's new *"every one of them on a single computer, ours"* volunteers a
limitation that the original had to dig for.

⚠ **Two of my original four verification items are now answered on the page:**

- *"Stanley — first name only, no surname"* → `/about` now reads **Stanley Bishop**.
- *"How many independent operators exist?"* → answered on the first screen. **One.**

⛔ **And the one that matters most to me is exactly where it was, by design.**

> Across the whole build: **HIPAA appears in 1 twin, GDPR in 1 — both `/changelog` — and PHI, IRB
> and *de-identification* appear in none.** *(Surface: `dist/**/*.md`, word-boundary match, tree
> 78f6bbe. ⚠ Counted twice: the first count reported 224 twins for HIPAA, because `grep -lic`
> prints `file:0` for every file and `wc -l` counted them all. The implausible number is what caught
> it, not care.)*

**As the persona, unchanged from 08-16:** the committee's first three questions — where does data
live, what is the security model, what touches PHI — I can still answer only by inference.

**As a reader of this campaign's record, this is not a gap the increment failed to close — it is a
decision somebody took in writing.** R-124 was **deferred at P4.5a with its reasoning recorded**,
because routing it *"needs an audience decision before it needs copy"*, and no page on the site
answers *"is this site for clinicians handling patient data?"* Writing that copy would **author a
positioning claim** on ADR-048 / P0.1 ground that nobody has ratified. ⇒ **The right thing happened:
the confusion list got fixed and the positioning question got left visibly open, rather than being
silently answered by a sentence a copy mission invented.**

⚠ **RareArchive is still stale** — `Last synced 2026-05-24`, now ~3 months old, on the vault that
drew me to the site. The card is honest about what the date means (*"registry sync, not vault
activity"*), which the original's version was not. **But registry rows are owner-attested, not
agent-audited** (campaign convention 5 / pt19), so this is a data ask for Hestia and not something a
copy mission may edit. Recorded, not fixed.

## 7. 30-second test (first screen only)

**Then (08-16):** *"an open-source developer tool with a manifesto attached… For a beat, because of
'aDNA,' I wondered if it was an ancient-DNA or genomics data commons."*

**Now:** an open standard for laying out a project's files so AI agents can navigate them — three
folders, Markdown, git, on your own machine. The definition arrives first.

⭐ **The manifesto line is not gone — it MOVED, and that is the more interesting result.**
*"Language and DNA were co-created by everyone before us. The context that powers AI should be too"*
now sits at **line 40 of the homepage's 183-line twin**, below the definition, the counters and the
vault strip — where the original found it on the first screen. **As the persona I read it as earned
rather than as a claim I have to evaluate cold**, because by the time I reach it I already know what
the thing is. *(⚠ Checked at the object: an earlier draft of this re-test asserted the line was
"gone from the page". It is not. `grep -c` on the twin returns 1.)*

⇒ That is **the voice guide's transition rule (§1) visible in the measurement**: *plain before
lyric, on every surface, every time — the lyric line may summarise what the reader now knows; it may
never be the thing that introduces it.* The guide's own instruction was **move them, not cut them**,
and the homepage is now the second worked example after `/about`.

⭐ **The ancient-DNA beat did not happen this time**, and I want to be precise about why: *not*
because the homepage disambiguates the name — it still does not — but because the sentence
immediately after the title is concrete enough (*"organizing a project's files"*, *"three folders,
plain Markdown, tracked in git"*) that there is no room for me to wonder. **The collision was
resolved by specificity rather than by explanation.** ⚠ That is a weaker fix than the note on
`/learn/what-is-adna`, and it may not hold for a reader who bounces off the title alone.

## 8. Confidence 0-10: explaining this to a hospital IT committee

**5/10** — up from **3/10**.

**What moved it:** I can now state what the thing *is* in one sentence taken verbatim from the first
screen, which I could not before. *"Nothing leaves your machine"* is unambiguous where the earlier
copy said context both stays local and is *"shared in the open"* two sentences apart. And I can tell
the committee, honestly, that the whole network is presently one person's machines — because the
site says so first.

**What holds it at 5:** the committee's PHI question is unanswered, and I would have to say *"the
site does not address health data at all"* — which is true, and is a better answer than a vague
reassurance, but it is not an answer they will accept. **The vocabulary problem also survives:**
*network*, *federation*, *commons* still read as a data-sharing platform on first encounter, and
`/commons`'s rewrite makes the concept clearer without making the **word** less alarming to a
compliance officer.

⇒ **The remaining distance is not a copy problem.** It is the audience decision R-124 is waiting on.

---

## Comparison summary

| | 08-16 baseline | 08-26 re-test |
|---|---|---|
| Confusion items live | **8** (+2 dead) | **0** (8 resolved, 2 confirmed dead) |
| 30-second read | *"developer tool with a manifesto attached"*; ancient-DNA beat | definition first; **no ancient-DNA beat** |
| IT-committee confidence | **3/10** | **5/10** |
| Independent-operator count | asked, unanswered | **answered on the first screen: one** |
| Named steward | *"Stanley — first name only"* | **Stanley Bishop** |
| Health-data governance | absent | **absent — deliberately, R-124 deferred with reasoning** |
| RareArchive freshness | stale, unexplained | stale, **explained** (owner-attested; Hestia's to fix) |

**⚠ What this re-test cannot tell you.** Whether the copy is *good*, only whether the ten recorded
confusions recur. It is the same instrument that produced the list, run again — a regression check,
not a fresh reading. **A fresh reading is P5.1's, with people.**
