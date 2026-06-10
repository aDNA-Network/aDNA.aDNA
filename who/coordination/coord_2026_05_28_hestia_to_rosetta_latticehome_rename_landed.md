---
type: coordination
created: 2026-05-28
status: filed
last_edited_by: agent_stanley
from: hestia (LatticeHome.aDNA)
to: rosetta (aDNA.aDNA)
ack_required: false
trigger: campaign_lattice_compliance_upgrade R06 close 2026-05-28
informational: true
tags: [coordination, hestia_to_rosetta, latticehome_rename, r06_close]
---

# Coord — Hestia → Rosetta: LatticeHome.aDNA rename landed (informational)

Stanley-Mac's local node-vault was renamed `node.aDNA/` → `LatticeHome.aDNA/` at R03 close 2026-05-28 per ADR-013 §Exception + ADR-001 §Supersession-by-§Exception. **R06 (cross-vault sweep) updated this vault's active refs**: `aDNA.aDNA/STATE.md` (30 operational pointer refs) all replaced `node.aDNA → LatticeHome.aDNA` via Edit replace_all.

**No action required.** Protocol-layer "node" term preserved unchanged (aDNA standard concept). Filenames `skill_node_*`, `mission_node_*`, `campaign_node_*`, `identity_node`, `inventory_node*` all PRESERVED per D3-surgical.

Symlink shim at `~/aDNA/node.aDNA → LatticeHome.aDNA` covers the 30-day backward-compat window (expires 2026-06-24 per R09 deprecation banner).

References:
- R03 AAR: `LatticeHome.aDNA/how/campaigns/campaign_lattice_compliance_upgrade/missions/mission_lattice_comp_r03_local_vault_rename.md`
- R04 (workspace router): `a810704`
- R05 (LN.aDNA federation): `3e145ba` + LN `d3b29c0`
- Plan: `~/.claude/plans/please-read-the-claude-md-silly-octopus.md` (D5-Revised 2026-05-28)
