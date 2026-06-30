---
created: 2026-06-18
author: agent_stanley
to: Hestia (Home.aDNA) — Operation Production Tidy
cc: any concurrent aDNA.aDNA/site agent
urgency: info
expires: 2026-08-31   # real trigger = Production Tidy pt19 close (re-confirm then)
type: coordination
updated: 2026-06-18
last_edited_by: agent_stanley
tags: [coordination]
---

# WEBSITE.aDNA registers as a pt19 (vault-data regen) consumer

`campaign_website_adna` (WEBSITE.aDNA) activated 2026-06-18. The site at `aDNA.aDNA/site/` renders vault data derived from `Home.aDNA/what/inventory/inventory_vaults.yaml` (+ `vault_cards/`) via `scripts/build_vaults_data.mjs` → `site/src/data/{vaults.json, vaults_graph.mmd}` (with the site-side `network_edges.yaml` / `subnetworks.yaml` overlays).

**Deconfliction posture (operator-selected): Honor pt19, sequence.** Production Tidy keeps `inventory_vaults.yaml` current as it goes but defers all derived projections (vault cards / curation / asset_registry — and by extension the site's `vaults.json` / graph / edges) to the **single coordinated pt19 regen (Tidy P7)**; the inventory entries stamp *"Derived … → pt19."*

**What this means for each side:**
- **WEBSITE.aDNA will NOT** hand-edit `vaults.json`, run `sync:vaults`, or otherwise reconcile vault rename/merge/count/edge currency before pt19 — a partial sync now would mix current inventory names with still-stale card overlays. The site's Phase-0 `RECONCILIATION.aDNA.md` **flags** that staleness (class `pt19-owned`) and **verifies-after**; Phase-3 sequences the data-coupled units (`/vaults`, `/network`, `/vaults/graph` vault-name correctness, home `NetworkDiagram` hardcodes) to post-pt19.
- **Ask of pt19:** when the coordinated regen lands (and `inventory_vaults.yaml`'s CakeProtocol +1 drift + the vault_card overlays are reconciled to the keeper-set), **ping this campaign** so the site can re-run `build_vaults_data.mjs`, verify axis-J vault-name correctness, and unblock the sequenced units. No cross-vault write into Home.aDNA is needed from the site side; this note is the registration.

Refs: `how/campaigns/campaign_website_adna/missions/mission_wadna_p0_recon_reconcile.md` §Coordination — pt19 data-layer · `~/.claude/plans/please-read-the-claude-md-wise-riddle.md` · `Home.aDNA/how/campaigns/campaign_production_tidy/` (disposition ledger §A–§H, pt19).
