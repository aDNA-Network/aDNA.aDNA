---
type: artifact
artifact_class: review_checklist
campaign: campaign_haussmann
mission: mission_haussmann_p0_5_editorial_gate
phase: P0
created: 2026-08-16
updated: 2026-08-16
status: active
last_edited_by: agent_rosetta
tags: [haussmann, p0, editorial_gate, tense, review_instrument, d6, d7]
---

# Aspirational-tense review checklist

> **This is a REVIEW instrument, not a lint — deliberately.** See [[design_note]] §4 for the full argument.
> Short version: the register's own tense audit returns **four "Mixed" verdicts**, and the decisive question
> is *"can a reader check this today?"* — which depends on the state of private repos, not on the words.
> The same verb is honest in one clause and aspirational in the next. A regex here would fire on the site's
> **best** sentences ("aDNA **is built** by humans and agents together" is present-tense and fully true) and
> teach authors to ignore the tool. Mechanical checks went where they are decidable: the *claims* the tense
> wraps (gate-26) and the leak classes (gate-27).

**When to run this**: before shipping copy on `/`, `/network`, `/community`, `/commons`, `/enterprise`, or any
new marketing-stratum surface. Also at P1.1 (claim purge), P2.6 (mid-campaign re-score), and P4.5 (voice).

**Campaign law it enforces** (convention 1): *claims move DOWN to verifiability, never up to ambition.*

---

## The one test

For every present-tense sentence describing **network behaviour** — what the network, its nodes, its vaults,
or its people *do* — ask:

> **Could a reader, today, with no account and no insider access, follow a link from this page and watch it
> be true?**

- **Yes** → verifiable. Keep the present tense. *Consider linking the proof; an unlinked true claim is a
  missed opportunity (the register's "verifiable" class: true but unevidenced on the page).*
- **No** → aspirational. Rewrite (§ "The four moves").
- **Partly / at one level but not another** → **Mixed**. This is the dangerous class. Do not average it out.
  Split the sentence so the true half stays present-tense and the unbuilt half is named as unbuilt.

---

## The five defect classes (from the B5 tense audit, register §3)

Each row is a live instance found on 2026-08-16. Use them as calibration examples.

### 1. Existence-by-verb — a verb asserts something exists because the sentence needs it to

- `/` — "the open network where that shared context **lives**" → context is not publicly reachable for 73/74
  vaults (R-13).
- `/commons` — "the open governance record **is** the social surface" → the four cited records are not
  publicly readable (R-49).

**Tell**: the verb is doing the work a link should do. Ask what URL proves it. If there is none, it is a
promise wearing a fact's grammar.

### 2. Machinery-vs-declaration conflation — a declared relationship narrated as a running system

- `/` — "all of them **federating** into a shared commons" → 9 federation edges exist *as declarations*; no
  live cross-node federation is observable.
- `/network` — "Nodes **connect** through real, directed relationships" → true at vault level, not at node
  (machine) level (R-30).
- `/network` — "What actually **crosses** the boundary is a curated slice of your Home.aDNA registry" → no
  public artifact of the transmission path (R-38).

**Tell**: the sentence would still be true if you inserted "declare that they" — and false without it. This
is the single most common class, and the most quietly damaging: a technical reader checks it first.

### 3. Plural-from-singular — one real instance narrated as a category

- `/` — "Mission-aligned subnetworks **already steward** real public-good work" → Rare Archive only (R-28).
- `/commons` — "Mission-aligned subnetworks **build, share, and govern** shared context in the open" → 3 of 4
  have no public face (R-48).

**Tell**: a plural subject with no plural evidence. "already" is an intensifier doing damage — it converts a
modest truth into an overstatement. **Name the one. One real instance, named, outperforms four implied.**

### 4. Design narrated as behaviour — a documented rule described as an observed practice

- `/network` — "each one **decides** what stays local and what joins the shared commons" → the design is real
  and documented (Standing Rule 4); the join machinery is not shipped.

**Tell**: you can cite a governance document but not an event log. Say "by design" or "the rule is" — the
design *is* a real asset, and describing it accurately loses nothing.

### 5. Status-word inflation on generated surfaces

- `/vaults/worldgenome` — a `genesis`-status, `tbd_at_p0`-class stub whose lede ends "**— LIVE.**" (register
  §4 special case).

**Tell**: the lede contradicts the status chip *on the same card*. Generated surfaces need the check most:
nobody re-reads them. Note the enum leak here is caught by gate-27 `raw_enum`; the word "LIVE" is not, and
is exactly why this checklist exists.

---

## The four moves (what to do once a sentence is flagged)

1. **Name the horizon.** The site already has the model — `/enterprise`: "…runs on the network's opt-in,
   local-first membership substrate, **which is still being built**; the standard builds toward that horizon
   rather than implying it arrived." Register verdict: *verified — credit*. Copy this pattern.
2. **Drop to the declaration.** "vaults that **declare** federation relationships" instead of "vaults
   **federating**". Smaller claim, fully true, still interesting.
3. **Name the one.** Replace the implied plural with the actual instance and link it.
4. **State the absence outright.** `/commons`: "There is no activity feed here yet… Profiles, follows, feeds
   … **are not built yet**." Register verdict: *honest anti-claim — the model the rest should follow*.

---

## Where the honest voice already lives (protect these)

The register's core finding is not that the site is dishonest — it is **bimodal**. The self-descriptive
surfaces have excellent tense discipline while the hero/marketing strata of *the same pages* slip. These are
the reference sentences; gate-26 asserts several of them as verified rows so they cannot be quietly deleted:

- `/about` — "aDNA is stewarded today by one person" *(gate-26 R-58)*
- `/adopters` — "illustrative personas — not real named adopters" *(gate-26 R-76)*
- `/compliance` — "not a certified framework" *(gate-26 R-85)*
- `/vaults/graph` — "59 vaults carry no cited relationship yet … that is honest topology, not missing data"
  *(gate-26 R-92)*
- `/enterprise` — the substrate "still being built" note
- `/commons` — the "what you won't find here" band and the registry regen/sync dates

> **The house style, in one line**: state the unflattering fact plainly and the reader trusts everything else
> on the page. The aspirational sentences are not just inaccurate — they are *spending* the credibility the
> honest ones earned.

---

## Reviewer sign-off block

Paste into the mission/session record when this checklist is run.

```
Tense review — <surface(s)> — <date> — <reviewer>
  Sentences examined:        N
  Verifiable (kept):         N
  Aspirational (rewritten):  N   ids: …
  Mixed (split):             N   ids: …
  Deferred w/ rationale:     N   ids: …
  New claim-register rows filed: <ids or none>
```

**Related**: [[design_note]] · [[campaign_haussmann]] · `evidence/claims/claim_register.md` §3 ·
`site/tests/gates/gate-26-claim-register.spec.ts`
