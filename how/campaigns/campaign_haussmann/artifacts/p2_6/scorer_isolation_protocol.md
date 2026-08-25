---
type: artifact
artifact_class: protocol
campaign: campaign_haussmann
mission: mission_haussmann_p2_6_midscore
objective: O1
title: "Scorer isolation protocol — the two-reviewer VITRUVIUS pass"
created: 2026-08-19
updated: 2026-08-19
status: active
last_edited_by: agent_rosetta
instrument: "directives/OPERATION_VITRUVIUS_review_instrument.md v1.0"
grounded_in: ["artifacts/instrument_ingestion.md Δ2", "evidence/scoring/scoresheet_{A,B}_adna.md frontmatter disclosures", "mission_haussmann_p2_6_midscore.md Constraints"]
tags: [artifact, haussmann, protocol, scoring, reproducibility]
---

# Scorer isolation protocol

> **Why this file exists.** The baseline scored on 2026-08-16 under a protocol that **was never written
> down**. It is reconstructable — from Δ2 in [[instrument_ingestion]], from the three self-disclosures in
> the baseline sheets' frontmatter, and from the one-line constraint in the P2.6 mission — but a
> measurement protocol that lives only in the memory of three files is not reproducible, and a re-score
> claiming the *"same isolation protocol as baseline"* has, until now, had nothing to point at. Written
> at P2.6 O1, applied by it, and inherited by **P5.2's full re-score**.

## 1. Who scores

**Two independent fresh-context agent scorers**, per instrument deviation **Δ2**:

> *"Two independent fresh-context agent scorers + reconciliation; operator = final arbiter at gates.
> Disclosed as agent-scored in every scorecard. … No second human is available mid-genesis;
> contamination is controlled by fresh-context spawns fed the instrument + evidence pack only, raw
> sheets committed before reconciliation opens. Human scoring recurs at campaign P5."*

Each scorer is a **separately spawned process**, not two passes in one context. They never communicate.

**Record the model tier.** The baseline recorded reviewer B as *"Claude, Fable 5"* and reviewer A only as
*"Claude"* — a gap that makes the two sheets formally incomparable on the one axis most likely to move a
score. From P2.6 on, both scorers declare model and tier in frontmatter.

## 2. What a scorer receives

**Exactly three things:**

1. The instrument — `directives/OPERATION_VITRUVIUS_review_instrument.md`, **v1.0**.
2. The evidence pack — the `evidence/` tree **at a named commit**, cited as `evidence_pack_commit:` in
   the sheet's frontmatter (baseline: `d58ea13`).
3. Its own live spot-checks against production.

## 3. What is withheld — the whole of the isolation

- The other reviewer's scoresheet.
- Any reconciliation, current or historical — **including the baseline's**. A scorer who has read the
  51.6 table is anchored to it, and the delta this mission exists to measure becomes a comparison the
  scorer performed rather than one the reconciliation derived.
- The campaign charter, mission files, and mission drafts.
- Orientation artifacts: `instrument_ingestion.md`, `WEBFORGE_ORIENTATION.md`, `dependency_map.md`,
  `gate_b_dossier.md`, and this file.

Reviewer B's baseline disclosure sets the standard for how tightly this is held: *"The `scoring/`
directory was listed only to confirm the output path."*

## 4. The live-check tiebreak

Where the evidence pack and a scorer's own live check disagree, **the live check wins**, and the
disagreement is recorded in the sheet's reviewer notes. The pack ages; production is the target.

Both baseline scorers ran this (A: 10 infrastructure + 6 page-copy checks; B: 19) and both found zero
disagreements — which is itself the evidence that the pack was current at the time.

## 5. Commit ordering — the part the baseline asserted but could not show

The baseline reconciliation states raw sheets were *"committed before this reconciliation was authored."*
**Git does not corroborate it**: `scoresheet_A_adna.md`, `scoresheet_B_adna.md`, and `reconciliation.md`
all landed in a single commit, `df3827c`. The claim is almost certainly true and is entirely
unverifiable — which, on this campaign, is the same defect class as any other unfalsifiable claim.

**From P2.6 on the ordering is demonstrable:**

1. Both sheets land in **one commit**, before reconciliation is authored.
2. The reconciliation lands in a **later commit**.
3. `git log --oneline -- evidence/scoring/` shows the order to anyone who asks.

A protocol whose compliance cannot be checked is a statement of intent.

## 6. Output shape

Each sheet follows the six-section, ~198-line baseline skeleton:

| § | Content |
|---|---|
| — | Frontmatter incl. `reviewer_disclosure`, `evidence_pack_commit`, model + tier |
| — | Method paragraph + spot-check log; panel caveat binding D1 |
| 1 | Score table — 12 rows: Dim · Name · Score /5 · Weight · Weighted pts · composite row |
| 2 | Per-dimension evidence, D1–D12; **every block ends with "Binding anchor: *n* — *quoted anchor letter*"** plus why the next rung fails, then Strength / Weakness |
| 3 | Composite — the explicit Σ arithmetic and the band reading |
| 4 | Binary-gate verdicts (D11 / D12): Gate · Verdict · Basis |
| 5 | Top-8 findings to fix first |
| 6 | Reviewer notes — what was not consulted · pack-vs-live result · what the evidence limits made unawardable |

**"The letter of the anchor binds."** A score is the anchor whose *written sentence* matches the
documentary record — not the reviewer's overall impression. This is the rule that resolved both baseline
divergences, and it is why quoting the anchor is mandatory rather than decorative.

## 7. Calibration gate

Inter-reviewer variance **≤1 point on ≥10 of 12 dimensions** (instrument §Phase-0). The baseline cleared
it at **12/12** on the first pass. A pass that misses this gate is reported as a finding about the
instrument's ambiguity, per §6 Step 10 — *"unresolved disagreement is itself a finding about ambiguity in
the site."*

## 8. Reconciliation

Authored **after** both sheets are committed, by a third context. Per-dimension: both scores, the
reconciled value, and a note. Divergences are resolved by §6's rule, and **the losing reviewer's
reservation stays on the record** — the baseline kept B's D3 reservation and A's D11 reasoning, and both
turned out to matter.

**P2.6 adds one constraint** (mission Constraints): *"deltas must cite the mission that moved them —
attribution, not vibes."* A delta with no named cause is not a measurement.

## 9. P2.6-specific: D3 is withheld, not scored

Operator ruling, 2026-08-19. D3's baseline **3** was explicitly provisional on a clean-machine TTFS run
that has still not happened (O0b, operator-gated). Scoring it again would produce a **second provisional
number** wearing the authority of a fresh measurement.

Therefore, this pass only:

- Scorers record D3 as **"not scored — pending the O0b clean-machine run"**, with their reasoning noted
  but no number.
- The composite is computed over the **11 measured dimensions against a denominator of 88** (100 − D3's
  weight of 12), and the denominator is stated wherever the number appears.
- The baseline is **recomputed on the same 11 dimensions** so the delta is like-for-like.
- **No D3 number is invented for continuity**, and no 12-dimension composite is published this mission.

D3 closes in session 2, when the run produces a number.
