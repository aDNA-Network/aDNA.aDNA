---
type: coordination
title: "Cross-Graph Coordination: aDNA.aDNA → WilhelmAI.aDNA — Public-Good Commons feature of WilhelmAI + Rare Archive"
status: ready   # on record; awaiting Hygieia ack before the E5 close deploy
direction: outbound (aDNA.aDNA initiates)
requesting_vault: aDNA.aDNA
requesting_persona: rosetta
receiving_vault: WilhelmAI.aDNA
receiving_persona: hygieia
requesting_agent: agent_stanley
created: 2026-06-07
updated: 2026-06-07
last_edited_by: agent_stanley
priority: medium
campaign: campaign_adna_serious_tool_readiness
mission: mission_adna_str_p5_m512_e5_public_good_commons
decadal: E5
cycle: 160
operator_class: external-org
external_party: Wilhelm Foundation (Helene & Mikk Cederroth)
governs: WilhelmAI ADR-002 (attribution) + WilhelmAI ADR-010 (publication-timing)
mirror: /Users/stanley/lattice/WilhelmAI.aDNA/who/coordination/   # operator-discretionary; not written cross-vault (Standing Rule 4)
delivery_held_until: hygieia-ack-OR-operator-close-deploy-greenlight
tags: [coordination, cross_graph, rosetta, hygieia, wilhelmai, rarearchive, public_good_commons, e5, adr_010, adr_002, wilhelm_foundation, embargo_override, attribution_discipline]
---

# WilhelmAI.aDNA + RareArchive.aDNA — Public-Good Commons feature (E5)

> **On-record clearance note.** aDNA.aDNA (Rosetta) is building the **Public-Good Commons** surface (`/commons`) on aDNA.network for decadal E5. It features four mission-aligned subnetworks; two are Wilhelm-Foundation material — **Wilhelm AI for the Undiagnosed (WilhelmAI.aDNA)** and **Rare Archive (RareArchive.aDNA)**. This memo puts the public feature on record with Hygieia and requests ack before it goes live.

## §1 What is being featured

A curated `/commons` showcase card for each, drawn from a cited overlay (`site/src/data/subnetworks.yaml`):
- **Wilhelm AI for the Undiagnosed** — the AI4U umbrella; "AI for people living with undiagnosed disease." Cited from `coord_2026_05_09_v7_wilhelmai.md §1`.
- **Rare Archive** — "Open-source rare-disease AI"; links to the canonical `github.com/Wilhelm-Foundation/rare-archive`. Cited from `coord_2026_05_09_v7_rarearchive.md §1`.

No metrics, no logos, no figurative imagery — name, one cited mission line, who it serves, the steward, and (Rare Archive) the public repo link.

## §2 The governance question + its resolution

**WilhelmAI ADR-010** (RA publishing contract; public-announcement timing) is currently `signed_chief_steward_pending_wilhelm_batch_co_sign` — the public-announcement embargo on WF-affiliated material is **not yet auto-cleared**. Featuring the pair on a public page is a public announcement of WF material.

**Operator decision (2026-06-07, AskUserQuestion):** explicit **ADR-010-window override** — feature all four now, under two conditions Rosetta has honored:
1. **Per-surface attribution + license** (WilhelmAI ADR-002 discipline) are rendered on both WF cards: *"Wilhelm Foundation (Helene & Mikk Cederroth) · Apache-2.0 + CC-BY-4.0."*
2. **Commit-only until the E5 close deploy.** The whole E5 surface is held commit-only through the decadal (E4 rhythm); the WF pair therefore **does not go live until the operator green-lights the E5 close deploy** (cycle ~169) — which gives the ADR-010 Wilhelm-batch co-sign time to land.

## §3 Ask of Hygieia

- **Confirm** the framing + attribution above are correct and acceptable for a public feature, or **redline** the copy/links.
- **Flag** if the ADR-010 Wilhelm-batch co-sign must land before the E5 close deploy (Rosetta will hold the WF cards out of the live deploy until then if so).
- Silence-until-close is **not** taken as consent: if no ack by the E5 close-deploy gate, Rosetta surfaces the WF-pair go/no-go to the operator again at that gate.

## §4 Provenance

- Source overlay: `aDNA.aDNA/site/src/data/subnetworks.yaml` (cited; candidate ADR-034 adaptation seam — upstreams to `Home.aDNA` vault cards later).
- Design: [[m512_e5_public_good_commons_design_spec]] · ethos [[narrative_ethos_public_good]].
- Local-by-default (Standing Rule 4): this memo is authored in aDNA.aDNA only; the WilhelmAI-side mirror is operator-discretionary.
