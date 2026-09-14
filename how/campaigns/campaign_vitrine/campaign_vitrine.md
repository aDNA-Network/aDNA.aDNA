---
campaign_id: campaign_vitrine
type: campaign
title: "Operation VITRINE — the public-launch shopfront: presentation quality, conciseness, and a sharper account of what aDNA is"
owner: stanley
persona: codex (planning + execution) · rosetta (integration, via HAUSSMANN GR-7)
status: proposed        # ⛩ NOT RATIFIED. §7.7 — execution waits on the operator's signature. See the ratification block below.
campaign_class: side_campaign
parent_campaign: campaign_haussmann
phase_count: tbd_at_ratification
mission_count: tbd_at_ratification
estimated_sessions: "tbd_at_ratification"
estimation_class: content-novel
executor_tier_default: opus
priority: high
target_site: "https://adna.network (source: aDNA.aDNA/site/, Astro 6 static → Vercel adna-docs)"
working_branch: "vitrine/design — dedicated branch, SAME working directory (⛩ operator ruling 2026-09-14)"
brief: who/coordination/coord_2026_09_13_rosetta_to_codex_vitrine_design_brief.md
integration_mission: how/campaigns/campaign_haussmann/missions/mission_haussmann_gr_7_vitrine_integration.md
created: 2026-09-14
updated: 2026-09-14
last_edited_by: agent_rosetta
tags: [campaign, vitrine, side_campaign, codex, design, launch_readiness, haussmann]
---

# Operation VITRINE — the shopfront

> ⛔ **ACTIVATION GATE.** `status: proposed`. Execution is authorized only after the operator's §7.7
> ratification. Until then this charter records **shape and constraints**, not permission.

## 1 · Why

`adna.network` is credible, accessible and machine-legible, and it is not yet **arresting**. The operator's
brief: raise it to public-launch presentation quality — sharper design, tighter writing, greater
conciseness — while **sharpening the core ideas themselves**: knowledge graphs · context tracking and
optimization · collaborative graph building and sharing · and the Exchange, where graphs are offered,
accessed and ledger-backed so that a graph you run is one you can trust.

Executed by a **Codex** planning/execution agent on a dedicated branch. This vault provides the brief, the
instruments and the integration path; it does not plan the campaign.

## 2 · The framing this campaign should adopt

⭐⭐ **Here, candor is the pitch.** The product is *context you can trust*; the review instrument's own
D10×D1 row says *"for a context/agent standard, machine legibility is positioning — demonstrated
self-conformance is the strongest possible proof-of-thesis."*

⇒ **The honest surfaces are not obstacles to design around; they are the thing to make most beautiful.**
A redesign that quietly demotes the candor surfaces trades the only durable differentiator for a look any
template can buy.

⚠ **And the measurement says polish is not the binding constraint.** `reconciliation.md:36`: *"the binding
constraint is D7 (weight 14), and the efficient path up is claim-truth + channel-liveness + registry
editorial gating, not more polish."* The design block (D1+D2+D5+D6) carries ~10.4 points of headroom; the
credibility block (D7+D8+D9) ~13.2. ⇒ **the highest-leverage Vitrine work is presentation IN SERVICE OF
PROOF**, not presentation instead of it.

## 3 · Scope (⛩ operator-ruled 2026-09-14)

| In scope | Note |
|---|---|
| `site/src/**` — pages, components, styles, content, IA, imagery | The core |
| **Claims** — full authority | ⛩ Ruled. ⚠ Bounded by §4's external holds, which are not this campaign's to lift |
| **Proposed** doctrine / positioning updates | As `status: proposed` proposals, never edits to ratified text |
| **Proposed** visual assets | Under ADR-053's five-slot program + containment rule |
| Gates / tests | Not restricted, and **GR-7 reconciles** — route/slug/count changes carry ADR-057 obligations |

**Out of scope**: `.adna/` (Standing Rule 1) · `vaults.json` / `sync:vaults` (pt19) · cross-vault writes
(Rule 10 — memos only) · **pushing and deploying** (operator gates) · the ⛩ **G4 Wilhelm cards**, which are
under an open gate.

## 4 · Constraints that are not ours to lift

- **Counsel embargo (D-8), UNRULED** — no public protocol distribution or whitepaper links; every protocol
  claim auto-flags **S1**. ⚠ This is the constraint that bears hardest on the Exchange/ledger brief, and
  full claim authority does **not** dissolve a hold owned by another vault and its counsel. **Write the
  story, label its tense, flag the hold.** The ratified honest pattern already exists
  (`exchange-adoption-path.mdx`: `PASS` / `TAUGHT-AS-DESIGN` / `HORIZON`).
- **aDNALabs ADR-025** — `community.adna.network` is human-only until federation GA.
- **Fluxer SO#8** — no LLM syndication of conversations; agents always disclosed.
- **Binary gates** — any WCAG AA critical or any CWV red at p75 **blocks phase sign-off regardless of
  weighted score.** The instrument's D5×D11 warns this is the characteristic failure of a redesign.

## 5 · Definition of done (proposed — the operator sets the bar at ratification)

1. A **self-score against D1–D12 at instrument v1.1**, published **with its per-dimension breakdown**.
2. **No regression** on: the 698-assertion suite · axe-0 both themes · `html-validate` 0 · the FKGL census.
3. **Every new or changed claim enumerated** for the register pass — the artifact GR-7 is slowest without.
4. **What was not done, stated.** Under-claimed coverage is cheap to verify; over-claimed coverage costs a
   mission to discover.

## 6 · Handoff

Brief: [[coord_2026_09_13_rosetta_to_codex_vitrine_design_brief]] — self-contained, for an agent that has
never read this vault. Integration: **HAUSSMANN `GR-7`**, authored and `queued`, which re-derives everything
independently. *That is the house rule, not distrust: this desk has been wrong about its own work often
enough to write the rule down.*

## 7 · Naming note

"Vitrine" continues the Haussmann figure — the boulevard is built; this is the shopfront. ⚠ It sits close to
the existing `OPERATION_VITRUVIUS_review_instrument.md` (Vitruvius = WebForge's persona). This vault has
already been bitten by near-identical names (`aDNA.aDNA` ADR-025 vs `aDNALabs` ADR-025, which must always be
qualified). **Rename at the ratification gate if the adjacency is unwelcome — the directory is all that
changes.**

## §7.7 Ratification

| Field | Value |
|---|---|
| **Decision** | Charter Operation VITRINE as a side-campaign of HAUSSMANN, with the scope at §3, the constraints at §4, and the definition of done at §5 |
| **Ratified by** | *(pending — operator)* |
| **Date** | *(pending)* |
| **Status** | **proposed** |
