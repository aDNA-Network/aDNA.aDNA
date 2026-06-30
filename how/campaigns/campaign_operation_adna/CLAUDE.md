---
type: governance
created: 2026-06-18
updated: 2026-06-18
status: active
last_edited_by: agent_stanley
tags: [governance, campaign_operation_adna]
---

# CLAUDE.md — Operation aDNA (program umbrella)

> **Promoter file for the program layer.** This governs how the umbrella behaves — not how its children
> behave. Each child campaign ([[campaign_website_adna]], [[campaign_hearthstone]], STR
> [[campaign_adna_serious_tool_readiness]]) carries its own authoritative `CLAUDE.md`; that file governs
> work *inside* that campaign. Read this one only when acting at the program level: tracking,
> synchronizing, coordinating the cross-vault seams, or AARing across tracks.

## Program Identity

| Field | Value |
|-------|-------|
| Campaign | `campaign_operation_adna` (`subtype: program`) |
| Title | Operation aDNA — make aDNA real, adoptable, and credible to the public |
| Owner | stanley (operator) |
| Steward | **Rosetta** (program steward) · **Berthier**-coordinated (chief of staff) |
| Status | active |
| Orchestrates | Track A [[campaign_website_adna]] · Track B [[campaign_hearthstone]] · Track C STR ([[campaign_adna_serious_tool_readiness]]) |
| Plan | [[campaign_operation_adna]] (track map · keystone · decision points · risk register) |
| Seams | [[coordination_ledger]] (cross-vault) |

## What this layer is for

The program holds **only** the through-line: the north-star, the integration thesis (Hearthstone makes
aDNA real; WEBSITE.aDNA proves it), the four-track map, the keystone gate, the cross-vault seams, and
cross-track AARs. It holds **no phases, no missions, no per-page work.** Everything substantive lives in
a child campaign.

## Standing Orders (program layer)

1. **Orchestrate, don't re-implement.** The program tracks, synchronizes, coordinates seams, and AARs
   across tracks. It **never authors a child's missions**, never re-states a child's phases, never holds
   a second copy of a child's state. If you find yourself doing site work or template work here, stop —
   that work belongs in [[campaign_website_adna]] or [[campaign_hearthstone]].
2. **Children keep their own authority.** Each child keeps its own directory, its own `CLAUDE.md`, its
   own STATE/missions, and its own human phase gates. The child's `CLAUDE.md` is authoritative for work
   inside it. The program never overrides or substitutes for a child's gate.
3. **Phase gates are human gates — and the program does not advance them.** The program advances no
   child between phases. The only synchronization the program owns is the **keystone gate** (DP2) — the
   coordinated public launch — and even that gates the *joined* moment, not any child's internal cadence.
4. **Honor pt19, sequence.** The site's vault-data currency (`vaults.json` / graph / edges) is
   **Production-Tidy-owned**, regenerated in the coordinated **pt19** pass. The program (and Track A)
   **flags + verifies-after**, never hand-edits `vaults.json` and never runs `sync:vaults` before pt19.
   pt19 is a keystone precondition; it is registered via [[coord_2026_06_18_wadna_pt19_dependency]] and
   tracked in [[coordination_ledger]].
5. **Credibility-integrity is the program quality bar.** From WEBSITE [[FINDINGS.aDNA]] systemic pattern
   #1: *claims not verified against the real graph* (dead proof-links, fabricated artifacts, wrong
   publisher, false "data-driven"). Before the keystone, the claims-traceable pass runs across **both**
   surfaces together — the site's proof-links must resolve to what Hearthstone actually shipped.
   Realness is the asset; never spend it for a nicer sentence.
6. **STR is referenced, not absorbed.** Track C keeps its own framing and gates. The program coordinates
   with it (v8.0 lands *by* STR + Hearthstone's v8.0 ADR; the site renders it) but edits no STR file.
7. **The seam ledger is the source of truth for cross-vault state.** When a seam moves, update
   [[coordination_ledger]] — not a child's file, not this one. Each seam names its owning persona/vault
   and the handshake that closes it.
8. **Escalate cross-vault blocks to the operator (DP3).** When a seam blocks a child (pt19 slips, the
   `skill_template_release` contract changes, a Venus gate moves), the program surfaces it to the
   operator. A child does not resolve a cross-vault dependency unilaterally.
9. **AAR across tracks, not within them.** Each child runs its own mission/phase AARs. The program AAR
   (DP4) is about the *interaction* — did the credibility seam hold, did the keystone land joined-up,
   what drifted across vaults. Archive, never delete.

## When to act here vs in a child

| You are… | Go to |
|----------|-------|
| auditing/fixing a page, image, or component; running an III/decadal loop | [[campaign_website_adna]] (its `CLAUDE.md` is authoritative) |
| promoting `inventory`/`identity`, writing the v8.0 ADR, the exemplar bundle, the release | [[campaign_hearthstone]] |
| evolving the standard/governance (non-website) | STR ([[campaign_adna_serious_tool_readiness]]) |
| checking whether all three keystone conditions are green | here — [[campaign_operation_adna]] §Program gates + [[coordination_ledger]] |
| recording/triaging a cross-vault seam or handshake | here — [[coordination_ledger]] |
| reconciling whether the site's "real, inspectable" claim matches the shipped base | here — the credibility seam (program quality bar #5) |

## Context Loading (program layer)

| Source | When |
|--------|------|
| [[campaign_operation_adna]] (this dir's plan) | always |
| [[coordination_ledger]] (this dir) | any cross-vault seam check |
| Child plans: [[campaign_website_adna]] · [[campaign_hearthstone]] | before any cross-track sync |
| WEBSITE artifacts [[RECONCILIATION.aDNA]] + [[FINDINGS.aDNA]] | credibility-integrity bar; keystone readiness |
| North-stars: [[project_adnalabs_brand_pivot]] · [[project_adna_lattice_ux_goal]] · [[project_adna_network_ethos]] · [[narrative_ethos_public_good]] · [[VISION]] | framing; the through-line |
| `how/campaigns/AGENTS.md` | campaign protocol (children may be active concurrently) |
