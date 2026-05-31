---
type: backlog
created: 2026-05-31
status: proposed
author: agent_hestia
origin: Home.aDNA (node vault) readiness pass
upstream_target: .adna template (LatticeProtocol/adna)
tags: [backlog, upstream, rosetta, node_vault, naming]
---

# Upstream idea: node-vault bare-role canonical name (`LatticeHome.aDNA` → `Home.aDNA`)

**Context.** The per-node operational vault was renamed `node.aDNA` → `LatticeHome.aDNA` (R03, 2026-05-28) → **`Home.aDNA`** (2026-05-30), aligning with Operation Rosetta Stone's **bare-role-canonical** doctrine (the network's canonical home instance takes a bare role-noun, not a brand-prefixed one). The local node vault + the workspace router were updated, but the **`.adna/` template still references the old name** and **Standing Rule 1 forbids editing `.adna/` locally** — so this needs an upstream change.

**Proposed upstream changes** (in `LatticeProtocol/adna`, picked up via `git -C .adna pull`):
1. `.adna/how/skills/skill_node_bootstrap_interview.md` — the input/output table references `LatticeHome.aDNA/what/inventory/inventory_*.yaml` (×3). Update to `Home.aDNA/...` (or a `{{NODE_VAULT}}` token).
2. Workspace-router template (`.adna/CLAUDE.md` Step 0 bootstrap, if templated) — `project_name = LatticeHome` → `project_name = Home`, so a fresh bootstrap produces `Home.aDNA/` directly. *(The site router already notes "was `project_name = node` pre-rename" — this is the next increment.)*
3. Any other `.adna/` doc that names the node vault → bare-role `Home.aDNA`.

**Why bare-role.** Consistency with the Rosetta rebrand (Lattice → aDNA brand; Lattice Protocol = substrate). The canonical home instance is `Home.aDNA`; namespace-prefixed variants (`LatticeHome`) become history/aliases. Protocol-layer "node" term + `node_*`/`skill_node_*`/`mission_node_*`/`campaign_node_*` filenames are **preserved** per ADR-013 §Exception.

**Note.** Coordinate with the Rosetta master sequence (Berthier/aDNALabs) — this is one tile in the larger cross-vault rename. Home.aDNA's local + router refs are already done; ~282 cross-vault refs across 24 vaults remain, deferred to the Rosetta sweep (operator decision 2026-05-31).
