---
type: artifact
artifact_class: rulings_packet
campaign_id: campaign_arcade
mission_id: mission_arcade_a0_1_situation_review
title: "Operator rulings packet — Operation ARCADE genesis, 2026-10-15 (R1–R4, taken at the plan gate)"
created: 2026-10-15
updated: 2026-10-15
status: accepted
last_edited_by: agent_rosetta
tags: [artifact, arcade, rulings, g0, ratification]
---

# Operator rulings packet — 2026-10-15

> **How these were taken.** At plan time, after the situation review, four bounded questions were put to the operator by `AskUserQuestion` (one lane, four questions; plan file `~/.claude/plans/please-read-the-claude-md-sorted-flask.md`). The operator picked the recommended option on all four. This file records the question, the options offered, the ruling, and the consequence at the object. Nothing here was pre-decided by the agent; the recommendations are labelled as such.

| # | Question | Options offered (recommended first) | **Ruling (Stanley, 2026-10-15)** | Consequence at the object |
|---|---|---|---|---|
| **R1** | Estate framing — aDNALabs ADR-027 and AILedger ADR-008 both say the company is "commercial home and steward, not owner" of a standard that stays MIT in the lab estate; the operator's new framing adds "economic platform" and demotes aDNALabs from HQ | (a) **Amend, keep standard open** — standard stays MIT + lab-owned; aiLedger = commercial home AND economic platform; aDNALabs "HQ" → lab estate; ecosystem = partner/dog-fooding · (b) Move the standard into the company estate (contradicts ADR-008 §6 + ADR-024) · (c) Record only, no ADR yet | **(a)** | ADR-065 (A2.1) and the ADR-027 amendment memo (A2.2) are drafted on this reading; the charter §1 states it |
| **R2** | Public naming — aDNA.aDNA and adna.network are public; AILedger is `never` on the registry (Hestia B7, 10-06) and its own memo to this desk is held because our carrier is public (SR-6) | (a) **Hold until the operator says "publication"** · (b) Name it now, tense-labelled · (c) Name it now, no restriction | **(a)** | ARCADE rule 2; A2.3's public paragraphs are name-free; `site/` untouched this sitting |
| **R3** | Ratification timing — Standing Order 1 | (a) **Ratify now; run P0 + A1.1** · (b) Ratify now, P0 only · (c) Author only, ratify at an ISS gate | **(a)** | Charter `status: active`, §7.7 filled; A1.1 executes in the chartering sitting on fable (declared opus — recorded on the card) |
| **R4** | Outward acts at close | (a) **Push + stage memos** · (b) Push + send memos · (c) Commit only | **(a)** | `vitrine/design` pushed at close; every memo authored stays `outbound_ready` pending its own send GO; no deploy |

## Still human-owed after this packet (not asked here; carried to STATE)

- **Lister Gate 1 reply** — drafted and ruled "post as drafted" 2026-10-10 (`scratchpad/genesis/lab_side/post_s115_lister_gate1_reply.md`); no record it was posted (Fluxer `operator_actions.md` A12). Jake's desk is waiting on it.
- **GARNIER P1.3 C2** — three consenting readers → DP3 (unchanged since 09-16).
- **The 32 `admission_pending` rows** — now *ruled* by Hestia's B7 reading (list 4 · minimal card 23 · never 5); the `registry_admission.yaml` write + regeneration are a gated `sync:vaults` (A1.4 carries it with the Exchange/Terminal rows).
- **G2 · G5 · ADR-010 (Hygieia's reply)** — HAUSSMANN queue, unchanged.
