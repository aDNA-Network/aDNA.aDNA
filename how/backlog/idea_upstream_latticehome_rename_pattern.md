---
type: backlog_idea
created: 2026-05-28
status: declined
last_edited_by: agent_rosetta
author: hestia (LatticeHome.aDNA)
trigger: campaign_lattice_compliance_upgrade R07 close 2026-05-28
informational: true
upstream_target: .adna template (v8.0+)
tags: [backlog, upstream, latticehome_rename, adr_013_exception, naming_governance, v8_0_candidate]
updated: 2026-07-02
---

# Upstream Idea — Node-vault naming exception pattern (LatticeHome.aDNA)

## Headline

ADR-013 §Exception (ratified at `campaign_lattice_compliance_upgrade` R02 close 2026-05-26 + executed at R03 close 2026-05-28) establishes a precedent for renaming the per-node operational vault from `node.aDNA/` (scope-anchored generic name) to `LatticeHome.aDNA/` (role-anchored namespace-explicit name). The aDNA standard's `.adna/CLAUDE.md` + `.adna/HOME.md` + 5 `.adna/how/skills/skill_node_*.md` files have been updated to use `LatticeHome.aDNA` as the canonical local-vault name (R07 close 2026-05-28).

Recommend documenting this pattern in the aDNA standard at v8.0+ adoption.

## What changed in .adna/ at R07

- `.adna/CLAUDE.md` — 3 routing-hook refs updated
- `.adna/HOME.md` — 7 dashboard refs updated
- `.adna/how/skills/AGENTS.md` — 4 routing-table refs updated
- `.adna/how/skills/skill_node_bootstrap_interview.md` — 18 refs updated (skill_node_bootstrap_interview FILENAME PRESERVED per D3-surgical)
- `.adna/how/skills/skill_node_health_check.md` — 10 refs updated (FILENAME PRESERVED)
- `.adna/how/skills/skill_update_all_vaults.md` — 4 refs updated
- `.adna/how/skills/skill_node_credentials_audit.md` — 1 ref updated (FILENAME PRESERVED)
- `.adna/how/skills/skill_inventory_refresh.md` — 1 ref updated

NOT updated (intentional preservation):
- `.adna/CHANGELOG.md` — historical changelog narrative entries; describe past events accurately
- `.adna/how/docs/upgrade_v6_to_v7.md` — historical upgrade doc; describes the v6→v7 migration accurately

Total: 48 active-routing refs updated; ~11 historical-narrative refs intentionally preserved.

## D3-Surgical naming discipline (preserved)

The rename is scope-vs-role-anchored, NOT a protocol-vocabulary change. **PRESERVED unchanged**:

- LP protocol-layer term "node" (a node = a network participant in the Alpha Lattice)
- Skill filenames: `skill_node_bootstrap_interview`, `skill_node_health_check`, `skill_node_credentials_audit`, `skill_inventory_refresh`, `skill_update_all_vaults`
- Mission/campaign filenames: `mission_node_*`, `campaign_node_credentials`, `campaign_node_*`
- Identity/inventory filenames: `identity_node`, `inventory_node*` row labels

CHANGED (vault directory name only):
- `~/aDNA/node.aDNA/` → `~/aDNA/LatticeHome.aDNA/`
- `project_name = node` (in `skill_project_fork.md` invocation) → `project_name = LatticeHome`
- Operator-facing dashboard text: "node.aDNA vault" → "LatticeHome.aDNA vault"
- Bootstrap interview produces `LatticeHome.aDNA/` (not `node.aDNA/`)

## Recommended v8.0+ adoption

1. **ADR-013 §Exception fold-in**: cite the LatticeHome.aDNA carve-out as the canonical exception case demonstrating the rename pattern's safety + R1-R4 design-test disposition
2. **Bootstrap skill rename target**: confirm `project_name = LatticeHome` as the v8.0+ default for fresh-install bootstrap
3. **Pattern doctrine**: add a §Naming Exceptions section to the standard documenting (a) the protocol-layer-preservation discipline (b) the scope-vs-role distinction (c) the symlink shim pattern for the 30-day transition
4. **STATE.md rename-notice block pattern**: doctrine-promote the "frontmatter directive at top + historical narrative preserved below" pattern (already used by AlphaLattice → LatticeNetwork rename + now LatticeHome.aDNA rename)
5. **R09 partner-node migration script + skill**: surface as a v8.0+ artifact for any future workspace-scale vault rename (general pattern beyond just this rename)

## Cross-references

- R03 AAR: `LatticeHome.aDNA/how/campaigns/campaign_lattice_compliance_upgrade/missions/mission_lattice_comp_r03_local_vault_rename.md`
- R04 AAR: `mission_lattice_comp_r04_workspace_router_update.md`
- R05 AAR + coord-memo: `mission_lattice_comp_r05_latticenetwork_federation.md` + `LatticeNetwork.aDNA/who/coordination/coord_2026_05_28_hestia_to_venus_latticehome_rename_landed.md`
- R06 AAR: `mission_lattice_comp_r06_other_vault_sweep.md` + 10 coord memos at each cross-vault's `who/coordination/`
- R07 AAR (this filing): `mission_lattice_comp_r07_adna_template_upstream.md`
- ADR-013 §Exception ratification (R02): `LatticeHome.aDNA/what/decisions/adr_013_naming_governance.md`
- Workspace router (R04): `~/aDNA/CLAUDE.md`
- Plan: `~/.claude/plans/please-read-the-claude-md-silly-octopus.md` (D5-Revised 2026-05-28)


## Champollion G0 disposition — N (M1.1, 2026-07-02)

**DECLINE — stale.** OBE — recommends project_name = 'LatticeHome', but that name was reverted to 'Home' on 2026-06-11 (a stale value that forked a misnamed LatticeHome.aDNA on fresh nodes). The recommendation is now actively wrong; the general rename-doctrine value is captured by idea_upstream_graph_rename_recipe + idea_upstream_node_vault_bare_role_rename (RESOLVED). File retained per SO-6 (archive-never-delete). Ratified at Champollion G0 (D2).
