---
type: artifact
campaign: campaign_haussmann
mission: mission_haussmann_p4_5_voice_rewrite
increment: P4.5b
objective: O3
title: "P4.5b — persona ranker over the rewritten surfaces (V4)"
created: 2026-08-26
updated: 2026-08-26
status: complete
last_edited_by: agent_rosetta
verdict: "4 of 5 surfaces at or above the 4.0 gate. /commons scores 3.77 — RECORDED AS A FAIL, not adjusted."
provenance: "[D-syn] — disclosed synthetic instrument; the builder scored the surfaces it built"
tags: [artifact, haussmann, p4_5b, ranker, v4, persona]
---

# Persona ranker — P4.5b rewritten surfaces

## Instrument

| Field | Value |
|---|---|
| **Skill** | `how/skills/skill_decadal_aar.md` §Persona Ranker Dimensions |
| **Dimensions (6, canonical)** | Findability · Comprehension · Actionability · Trust · Relevance · Delight |
| **Personas (5, canonical adopter set)** | Solo Dev · Educator · Enterprise · Researcher · Startup |
| **Scale** | 1–5 integer per cell; dimension score = mean across the 5 personas; surface score = mean of the 6 dimensions |
| **Gate** | **≥ 4.0 per surface**, scored **separately and never averaged together** |
| **Derivation** | `artifacts/p4_5b/ranker_derive.mjs` — **cells typed, every mean computed** (KW-14). The script validates cell count and range, and **exits non-zero if any surface is below the gate**, so this record cannot claim a pass the numbers do not support |
| **Build under test** | local `site/dist` at tree **`78f6bbe`** |
| **Reviewer bench** | **Not invoked** — `skill_decadal_aar` §Step 4b reserves it for decadal cycles; this is a mission-level run. A **deliberate omission, recorded rather than silent** |
| **Provenance** | **`[D-syn]`** |

### ⚠ Scope, stated so a partial run is legible as partial

P4.5b changed **9** surfaces. This ranker scores **5** — the ones that received a substantial
rewrite: `/` · `/learn/what-is-adna` · `/community` · `/commons` · `/get-started`.

**Not scored, and why:** `/about` (an `id` attribute added, **no copy changed**) · `/security`
(sentence splits, scope identical item for item) · `/state-of-the-network` (one explanatory clause
added) · `/vaults/graph` + `VaultRelationshipBlock` (one sentence, though on 75 pages). Each is
below the threshold at which a six-dimension persona read tells you anything a diff does not.

*(Convention 13's amendment applies to instruments as well as to criteria: a partial pass that does
not record its coverage reads as a clean bill of health.)*

### ⚠ Conflict of interest — declared, not managed away

**The builder scored the surfaces it built.** Independent re-review was offered at the O3 planning
gate; the operator ruled auditable records only, on the P2.2 / P4.1 precedent. `[D-syn]`. The
independent read is **P5.1's human panel.**

---

## Results

| Surface | Find | Compr | Action | Trust | Relev | Delight | **Score** | |
|---|---|---|---|---|---|---|---|---|
| `/get-started` | 4.4 | 4.8 | 4.6 | 4.6 | 4.4 | 3.6 | **4.40** | ✅ |
| `/learn/what-is-adna` | 4.0 | 5.0 | 4.0 | 4.6 | 4.2 | 3.6 | **4.23** | ✅ |
| `/` | 4.0 | 4.6 | 4.0 | 5.0 | 3.8 | 3.6 | **4.17** | ✅ |
| `/community` | 4.0 | 4.2 | 4.0 | 5.0 | 3.6 | 3.6 | **4.07** | ✅ |
| **`/commons`** | 4.0 | 4.0 | **3.0** | 4.6 | **3.4** | 3.6 | **3.77** | ⛔ |

**Spread 3.77 – 4.40 · 4 of 5 at or above 4.0.**

⛔ **No pooled average is reported, and that is the point.** The mean of the five is **4.13**, which
clears the gate — and would have buried the one surface that does not. P4.1's ranker recorded the
same discipline for the same reason (*an average of 4.17 would have let `/vaults` hide behind
`/get-started`*); here it is not a hypothetical, because a surface actually failed.

---

## ⛔ `/commons` — 3.77, and why it is recorded rather than fixed

The two dimensions that sink it are **Actionability 3.0** and **Relevance 3.4**. Neither is a copy
defect, and the rewrite measurably improved the dimension it *could* move:

- **Comprehension is the dimension this increment targeted, and it moved.** The clinician's C1
  (*"a context democracy" — "headline concept, never landed for me"*) is resolved; C3's *"Federate
  a wrapper"* / *"forge consumer"* is resolved. The page is now understandable.
- **Actionability cannot move from here.** The action the page describes — joining a subnetwork,
  sharing context back — is **gated by a ratified constraint, not by wording**: aDNALabs **ADR-025**
  holds community.adna.network human-only until federation GA, and the counsel embargo bars
  protocol material until D-8. ⇒ **Raising Actionability would mean inviting an action that does
  not exist yet**, which is a claim moving **up** — precisely what campaign convention 1 forbids
  and what this whole campaign exists to retire.
- **Relevance 3.4 is the honest consequence**: to four of five personas, a commons they cannot yet
  join is genuinely less relevant than the pages that tell them what to do today.

⇒ **The score is correct and the page is correct.** This is a surface whose ceiling is set by a
ratified embargo, and the instrument is reporting the embargo. **Routed, not fixed:** `/commons`'s
Actionability is re-scorable when federation opens (D-8 / federation GA), and until then a 3.77
here is a truer number than a 4.0 bought with a sentence promising something unavailable.

⚠ **This does mean V4 is met on 4 of 5 surfaces and not on the fifth**, stated plainly rather than
resolved by rounding, re-scoring, or quietly dropping `/commons` from the set.

---

## ⭐ The Delight column is identical on all five surfaces — and it was treated as suspect first

**3.6 on every surface, from the same persona vector `4 · 4 · 3 · 3 · 4`.** An identical column is
the signature of a lazily-scored dimension, so it does not get to be a result until it survives
being a suspicion.

**It is not laziness, and it is not new: it is ADR-053's containment rule appearing in the
measurement, replicated.** P4.1's ranker found this exact vector on `/vaults`, `/design-system` and
`/get-started` and diagnosed it: all these pages are **structurally the same object for this
dimension** — one illustrated hero from the governed slot table, Tokyo-Night type-and-colour
restraint everywhere else. The rule that makes the visual voice governable caps delight, and caps it
*identically*, because it applies identically.

⚠ **The honest caveat, which P4.1 did not have to make and this run does:** P4.1's number was **in
view** when these cells were scored. A replication by an instrument that knows the expected answer
is weak evidence for the answer and strong evidence only that nothing contradicted it. **What would
falsify it is a surface with a second sanctioned slot** — `vault_card_mark` or `graph_frame`, the
only places ADR-053 permits delight to move — and none of the five has one.

⇒ The consequence stands and is worth restating: **a future "raise Delight" reads as "build a slot",
never as "decorate a page".**

---

## What this ranker does not establish

1. **It is not independent.** `[D-syn]`, conflict declared above.
2. **It cannot separate "capped by design" from "under-delivered within the cap"** — P4.1's exact
   limitation, unchanged. That needs the human instrument at P5.1.
3. **It scored 5 of 9 changed surfaces**, listed above with reasons.
4. **It measures a local build, not production.** P4.5b is not deployed at the time of scoring.
