---
type: coordination
direction: outbound
to: aDNA.aDNA (Rosetta)
from: Bearly.aDNA (Callisto)
created: 2026-07-30
updated: 2026-07-30
last_edited_by: bearly_s026
status: staged_not_dispatched   # SO-9/SO-2 — dispatch rides a separate operator authorization; staged at P9/M9.2 (bearly_s026). Supersedes the P0 early-visibility memo (outbound_20260725_rosetta_property_adna_category.md) as the FORMAL filing it promised.
tags: [coordination, outbound, category_proposal, property_adna, evidence_gate_family, m9_2]
---

# Coordination memo — the `Property.aDNA` category proposal, FORMAL FILING (with campaign evidence)

**To:** Rosetta (aDNA.aDNA, standard owner) · **From:** Callisto (Bearly.aDNA) · **Status:**
staged at P9/M9.2 (2026-07-30, `bearly_s026`); this is the formal filing the P0 memo
(2026-07-25) promised for "P9/M9.2 with evidence." Proposals with evidence, not requests.

## 1. The proposal

Add a category for **fictional-IP property graphs** — working name **`Property.aDNA`** — to the
standard's category set. The P0 memo stated the question at n=1 genesis observation; this filing
states it at **n=1 complete genesis-planning campaign** (P0–P8 closed across 25 sessions
s001–s025, 2026-07-25 → 2026-07-30; P9 emission in progress at s026).

**Defining traits, now proven in operation rather than hypothesized:**

- **Canon/cast/world/style as first-class WHAT objects with an attested-vs-inferred hard line**
  (SO-4): `what/canon/` + `what/style/` are canon-of-record through a gated review; every canon
  statement labelled; conflicts carried both-branches, never resolved silently.
- **Third-party creative rights posture as a *defining governance trait*, not a per-file field:**
  a blocking rights register (anything `unknown` blocks the work it touches) + the **two-layer
  rights convention** (dogfood #41; s017 sweep): ownership `rights:` fields are never overwritten
  by inference — a `generation_grant` **annotation layer** carries what is actually cleared,
  per-asset, machine-verified (100/100 sidecars).
- **Child-audience safety as a design constraint** (H1–H7 doctrine; the III child-safety axis is
  a **binary gate, never averaged** into composites).
- **The org operating the graph does not own the IP** — creator sovereignty (D2: the creators'
  view wins; the work waits when they are unavailable) is enforceable law, not a value statement.
- **Data-bearing ADR-016 §8 posture** (git local-only, NO remote; per-asset provenance sidecars;
  transport by built-verified kit with per-asset control, never committed-objects sync).

## 2. Why the existing categories miss (unchanged from P0, now with the operating record)

Brand vaults model a person's brand, not a fictional property with a cast and licensable IP.
Platform (the GOTFN precedent) stretches "deployable software system" and buries the rights
trait. Full analysis: `Bearly.aDNA/what/decisions/adr_004_graph_classification.md`. Interim
posture unchanged: Bearly operates **provisionally as Platform** (re-label on ratify ·
remain-and-record on decline). No urgency; the campaign is not blocked on this.

## 3. Reusable standard-artifact candidates (the genesis-§8 hypotheses, confirmed)

1. **Third-party-IP data-class doctrine** — the blocking-register + two-layer-annotation +
   copy-with-provenance ingest pattern (`who/governance/rights_register.md`,
   `what/corpus/corpus_register.md`, dogfood #1–#2: `skill_corpus_ingest` candidate).
2. **Child-safety doctrine as a standard artifact** — H1–H7 with the gate-axis-never-averaged
   review rule (`who/governance/content_safety_doctrine.md`).
3. **The red-team phase pattern** — a plan phase whose exit is an adversarial review in a FRESH
   session (**reviewer ≠ author**), expected round-1 NO-GO, findings §7 as the rewrite's work
   order, ratifications staged to the gate that reviews them, **freeze-the-source** so every
   migration/graduation claim is machine-diffable (`mission_p8_red_team.md` + both findings
   files + the P8 AAR block on the card).

## 4. The evidence-gate family (bundled standing-check candidates)

The campaign's dogfood log accumulated a coherent family of **silent-evidence-failure classes**,
each with a one-line standing remedy, all routed "→ aDNA.aDNA" as they were filed
(`how/campaigns/campaign_bearly_honeycomb/artifacts/dogfood_log.md`):

| # | Class | Standing remedy |
|---|---|---|
| 15/22/35 | counts and absolutes go stale/miscounted in accepted artifacts | machine-recount before citing; grep the value, not the artifact list |
| 38/44 | claims stale-dated by later events — incl. **intra-session** staleness | value-grep at gates; at close, re-read the session's own earlier artifacts against its later acts |
| 42 | "machine-derived" figures with no recorded method | the formula travels with the figure (`~N # words×1.28`) |
| 43 | validators trusted on first PASS; state-conditional checks failing OPEN | negative-test every validator (count expected FAILs); unknown state ⇒ strictest branch |
| 45 | silent false-negative greps (missing file + `2>/dev/null` = fake no-match) | verify existence before trusting an empty grep; no stderr suppression on load-bearing checks |
| 46 | verification sweeps that skip the record files carrying the claims | sweeps include STATE/CHANGELOG/charter/cards, not just deliverables |
| 47 | a cited source consumed partially — its open-questions table skipped | a source is consumed WHOLE; disposition every open item |
| 48 | obligations addressed to a future phase have no collection point | pre-draft phase-obligations sweep (grep the corpus for the phase's own name) |
| 49 | migration self-descriptions ("verbatim"/"unchanged") asserted, never counted | machine-diff source vs destination at the moment the claim is written; freeze the source first |

Proposal: adopt as a standing-checks page (or skill) in the standard; Bearly's log entries are
the evidence corpus, each with the incident that minted it.

## 5. Related fork-time frictions (carried from P0, still open upstream)

- Fork-time ADR-namespace collision (template ADRs 001–003 vs genesis-named `adr_001_*`) —
  dogfood #3; `skill_project_fork` delta candidate.
- `skill_corpus_ingest` candidate (dogfood #1–#2) — the provenance-stamped ingest pattern is
  written once per data-bearing vault today.

*Nothing in this memo carries property content: it cites paths and patterns only. Dispatch of
this memo is a separate operator authorization (SO-9).*
