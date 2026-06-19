---
type: artifact
artifact_class: coordination_ledger
campaign_id: campaign_operation_adna
title: "Operation aDNA — cross-vault seam ledger"
created: 2026-06-18
updated: 2026-06-19
status: active
last_edited_by: agent_rosetta
tags: [coordination_ledger, program, cross_vault, seams, keystone, pt19]
---

# Coordination Ledger — Operation aDNA

> The single registry of **cross-vault seams** the program tracks. Each child campaign depends on work
> owned by *other vaults*; a seam is where that ownership hands off. The program does not do the work on
> the far side of a seam — it tracks the seam, names its owner, and records the handshake that closes it.
> When a seam moves, update **here** (not a child's file). Keystone-relevant seams (★) are preconditions
> of the coordinated public launch ([[campaign_operation_adna]] §Program gates, DP2).

## Seams

| Seam | Owner (persona / vault) | What it gates | Status | The handshake needed |
|------|-------------------------|---------------|--------|----------------------|
| **★ pt19 — vault-data regen** | Hestia / `Home.aDNA` (Operation Production Tidy) | Track A data-coupled units (`/vaults` · `/network` · `/vaults/graph` vault-name correctness, home `NetworkDiagram` hardcodes); a keystone precondition (site must show keeper-set names the day it launches) | **registered, waiting** ([[coord_2026_06_18_wadna_pt19_dependency]]; pt19 = Production Tidy P7) | When the coordinated regen lands (inventory_vaults.yaml reconciled to keeper-set + card overlays), **pt19 pings WEBSITE.aDNA** → site re-runs `build_vaults_data.mjs`, verifies axis-J names, unblocks the sequenced units. **No `sync:vaults`, no hand-edit before then.** |
| **★ skill_template_release / aDNALabs** | Berthier / `aDNALabs.aDNA` | Track B's outward release — Hearthstone P5 ships the v8.0 base image to `.adna/` + public `aDNA-Network/aDNA` *through* this gate-fired skill (Standing Rule 1: never hand-edit `.adna/`); a keystone precondition | **available; v7.2 live** (each gate-fired release syncs `.adna/` locally) | Hearthstone P5 invokes `skill_template_release` (assemble · embed-note · v8.0 two-track bump · tag · push); **operator approves the public push** (Hearthstone DP5). v8.0 ADR coordinates with STR's v8.0 (don't double-bump). |
| **Lab ADR-006 bootstrap-offer** | Galileo / `Lab.aDNA` | The Step-0 router "offer to bootstrap" experience — fold the Lab ADR-006 bootstrap-offer into Hearthstone's Step-0 "offer to bootstrap Home" flow so the two offers compose rather than collide | **open** (fold-in scoped; lands with Hearthstone P2 router work) | Hearthstone P2 (Step-0 router flow) reconciles with Lab's ADR-006 offer; confirm one coherent bootstrap-offer surface, not two competing prompts. |
| **CanvasForge → Canvas repoint** | Mondrian / `Canvas.aDNA` | Hearthstone's exemplar bundle (`template_node_adna_exemplar/`) — it still references the merged-away **CanvasForge** (→ Canvas.aDNA at PT pt09, 2026-06-17); the topology/gallery exemplar must resolve to Canvas.aDNA before release | **open** (repoint before P3 release; flagged in the Hearthstone charter watch item) | Hearthstone P3 repoints `CANVASFORGE_CODE` / `what/canvasforge/CLAUDE.md.template` / topology generator → Canvas.aDNA (or degrades cleanly); `smoke_render.py --parity` clean of leftover `{{`. |
| **Network / W-NET federation** | Venus / `Network.aDNA` | Track D's full social/federation layer (profiles, follows, cross-node feeds, membership/federation model); the site **builds toward** it, does not ship it before the substrate exists | **deferred** (Venus-gated; gated at PT P5.5 / Network P6) | Track-D MVP (public-good showcase + "connect to a subnetwork" affordances + the registry as first social surface) ships on `vaults.json` + federation_refs *now*; the full layer is co-designed with Venus when the membership substrate lands. See [[narrative_ethos_public_good]] §5. |
| **doctrine-relocation** | Hestia / `Home.aDNA` | The 4 workspace doctrines now home at `aDNA.aDNA/what/doctrine/` — cross-vault sweep done (19 pointers / 13 vaults; ref-sweep 0 broken) | **acked; one carve-out pending** ([[coord_2026_06_14_hestia_to_rosetta_doctrine_relocation]]) | Doctrines' new home **acked**. Carve-out: `Context.aDNA` was mid-session at sweep time — repoint its `adr_010` → `aDNA.aDNA/what/doctrine/doctrine_credential_handling.md` **when Context.aDNA (Prometheus) next quiesces**. Deferred-pending-Context-quiesce; non-blocking. |
| **vault-card public-fields** | Rosetta → Hestia / `Home.aDNA` | The public projection of vault cards (Harness display split → "Harness" with RareHarness as flagship; per-vault public `tagline`); ties to pt19 (both are Home vault-card edits the site regen consumes) | **open; awaiting Hestia ack** ([[coord_2026_06_10_rosetta_to_hestia_vault_card_public_fields]]) | On Hestia's edits landing in `inventory_vaults.yaml` / cards: ping Rosetta → site regen + commit → rides the next deploy. **Reconcile with pt19** — both are Home-side vault-card edits; fold the regen into the single pt19 handshake rather than a separate `sync:vaults`. |
| **★ aDNA.aDNA public inspectability (C-1)** | operator · Berthier / `aDNALabs.aDNA` | WEBSITE **C-1** — the site's "real, inspectable vault" proof-links have **no public URL to resolve to**: `aDNA-Network/aDNA.aDNA` → 404 (private), the public image `aDNA-Network/aDNA` → 200 but gitignores `*.aDNA/` (subtree → 404). A keystone precondition — proof-links must resolve the day the site launches (keystone condition #1). | **candidate — pending operator Decision 4** (surfaced at WEBSITE P2, verified live 2026-06-19; [[IMPROVEMENT-SPECS.aDNA]] C-1) | Operator decides: make `aDNA-Network/aDNA.aDNA` **public** (+ push) so the proofs resolve, **or** point proofs at resolving public-image paths. **Stage-2 (keystone):** proofs point at Hearthstone's published base ([[campaign_hearthstone]]). NB: pushing to the private remote does **not** resolve this — the repo stays private until an explicit visibility change. |

★ = keystone precondition (DP2).

## Open memos — `who/coordination/` (program-relevant), with disposition

| Memo | Disposition |
|------|-------------|
| [[coord_2026_06_18_wadna_pt19_dependency]] | **Open / registration** — WEBSITE.aDNA registered as a pt19 consumer; awaiting the pt19-lands ping. Tracked as the pt19 seam (★). |
| [[coord_2026_06_18_hestia_to_rosetta_hearthstone_charter_handoff]] | **Open / handoff** — Hearthstone chartered by Hestia, handed to Rosetta for P0 execution. Disposition: Track B activation (its own DP1); the program tracks it as Track B. |
| [[coord_2026_06_14_hestia_to_rosetta_doctrine_relocation]] | **Acked, one carve-out open** — doctrines' new home acked; Context.aDNA `adr_010` repoint deferred-pending-Prometheus-quiesce. Tracked as the doctrine-relocation seam. |
| [[coord_2026_06_10_rosetta_to_hestia_vault_card_public_fields]] | **Open / outbound** — awaiting Hestia ack + vault-card edits + regen handshake. Tracked as the vault-card public-fields seam; fold its regen into the pt19 handshake. |

> Other `who/coordination/` memos (the v7 fan-out, SiteForge-interactive-subsystem genesis, Noether/LP
> check-ins, etc.) are **not program-relevant** and stay in their own lanes; this ledger carries only the
> seams Operation aDNA's tracks depend on. New cross-vault seams are added here as they surface.
