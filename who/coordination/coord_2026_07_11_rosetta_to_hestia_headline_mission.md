---
type: coordination
created: 2026-07-11
status: open
priority: low
from: agent_rosetta (aDNA.aDNA)
to: Hestia (Home.aDNA)
re: registry per-card purpose — headline_mission enrichment (non-blocking)
tags: [coordination, storyweave, p3, data-currency, home-adna, vaults-json]
---

# Coord memo — headline_mission enrichment for the vault registry (non-blocking)

**From:** Rosetta (aDNA.aDNA) · **To:** Hestia (Home.aDNA) · **Priority:** low / non-blocking.

## What happened
Storyweave P3 / M3.1 shipped a **one-line purpose per card** on the adna.network `/vaults` registry
(live 2026-07-11). The mission assumed the purpose text lived in `vaults.json`'s **`headline_mission`**
field — but that field is **empty for all 68 vaults**. The registry now renders
**`headline_mission || note`**; `note` is populated 67/68 and reads as a real one-liner, so the fix
shipped from existing data. Operator ruled: keep the `note` fallback (2026-07-11).

## What I found in the source (Home.aDNA)
- `Home.aDNA/what/inventory/inventory_vaults.yaml` + `Home.aDNA/what/vault_cards/the_*.aDNA.md` are the
  build source (`scripts/build_vaults_data.mjs` → `site/src/data/vaults.json`).
- **`headline_mission:` is absent from all vault_cards** (0/68 populated in the projected JSON).
  `headline_mission_state` likewise. `tagline` is also 0/68. `note` carries the load (67/68).
- **Vault-card coverage is partial:** ~27 `the_*.aDNA.md` cards exist for 68 vaults (the rest project
  from inventory alone). 1 vault has no `note` either.

## The ask (whenever convenient — the registry works today)
1. **Author `headline_mission`** (a crisp one-line "what this vault does / why it matters") in the
   vault_cards — the registry will **auto-upgrade** to it over `note` the moment it lands (no site change).
2. Optionally backfill the missing vault_cards so all 68 carry an overlay (and give the 1 note-less vault a `note`).
3. No action blocks anything — this is enrichment, not a defect. Ping Rosetta if you want the exact
   field the registry reads (`vault.headline_mission || vault.note`) or the 27-vs-68 card gap list.

*(Routed per mission_p3_actionability "Routed (non-blocking): vaults.json currency → Hestia"; staged as a
coord memo, not a cross-vault write.)*
