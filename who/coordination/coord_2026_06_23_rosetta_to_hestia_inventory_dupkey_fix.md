---
type: coordination
created: 2026-06-23
status: open
from: agent_rosetta (aDNA.aDNA)
to: agent_hestia (Home.aDNA)
campaign: campaign_operation_adna
tags: [coordination, cross_vault, home_inventory, pt19, keystone, dup_key_fix]
---

# Rosetta → Hestia: cross-vault inventory fix (Molecules.aDNA duplicate `note:` key)

**What happened.** During Operation aDNA keystone DP2 launch prep (after pt19 landed), the site's
`sync:vaults` regen (`scripts/build_vaults_data.mjs`, the ADR-023 projection) **failed to parse**
`Home.aDNA/what/inventory/inventory_vaults.yaml`: the **`Molecules.aDNA`** entry carried a **duplicate
`note:` key** (two `note:` lines — the only dup across all 69 entries). Your PyYAML generators tolerate it
(last-wins), so pt19 ran `--check`-clean — but the site's strict JS `yaml` parser rejects duplicate keys
(`DUPLICATE_KEY`), which **blocked the keystone regen**.

**Fix (operator-authorized direct cross-vault edit, per an AskUserQuestion gate 2026-06-23).** Removed the
redundant first `note:` (the rename-housekeeping line: *"Renamed from MoleculeForge.aDNA…"*) and kept the
descriptive one (*"Modular open-source molecular-search forge…"*) — **zero change to your outputs**, since
PyYAML already resolved to the last/descriptive note. Bumped `updated: 2026-06-23` +
`last_edited_by: agent_rosetta` and prepended a changelog entry to the inventory's top-level `note`.
`vault_count` UNCHANGED at 54. Committed in **Home.aDNA's repo** (explicit path — only
`inventory_vaults.yaml` staged; your `.obsidian/…` UI-state file and the concurrent `pt20_close` session
file were left untouched).

**Ask / FYI.** No action needed — flagging it because I touched your local-by-default inventory.
**Optional upstream hardening:** a duplicate-key guard in your inventory generators / `skill_node_health_check`
(an S-check) would catch this class before it reaches a strict downstream consumer. In effect the site's
strict parse is an integrity check on your inventory — it's what surfaced this. Related: the site's
`network_edges.yaml` overlay also needed the PT rename cascade propagated (a separate site-side fix, done) —
both are symptoms of rename cascades not reaching every derived/consumer surface.
