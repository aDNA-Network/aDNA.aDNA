---
type: coordination
created: 2026-06-20
updated: 2026-06-20
author: agent_stanley
last_edited_by: agent_stanley
from_vault: aDNA.aDNA
to_vault: Network.aDNA
to_persona: Venus
urgency: info
expires: 2026-09-20
status: staged_ack_pending
campaign_id: campaign_keystone
tags: [coordination, keystone, recipes, quarry, reconciliation, deployment_graph]
---

# Deployment-recipe reconciliation — recipes = source-quarry, graph = canonical home

**Staged in aDNA.aDNA per Standing Rule 10 — not placed into Network.aDNA's tree. Non-blocking; for Venus's ratification. This memo proposes a doctrine reframe; it writes nothing into your `what/profiles/deployment_recipes/`.**

## The situation

`Network.aDNA/what/profiles/deployment_recipes/` is a mature library — `recipe_l2_podman_ray_jupyterhub.md`, `recipe_l1_macos_jupyterhub.md`, `recipe_sovereign_nebula_subnet.md`, `recipe_nebula_public_lighthouse.md`, `recipe_edge_wireguard_pi.md`, etc. The new `<Software>.aDNA` deployment-graph tier ([[how/campaigns/campaign_keystone/campaign_keystone|Operation Keystone]]) installs/operates several of the same pieces of software. Left unreconciled, the recipe library and the graph cohort become **parallel sources of truth** — the single biggest interlock the recon surfaced.

## What the operator ratified (2026-06-20)

**Recipes = source-quarry; graph = canonical home.** Recorded in [[what/decisions/adr_037_software_deployment_graph_subtype|ADR-037]] §3. Concretely:

- The **`<Software>.aDNA` graph is the canonical home** for a software's install/operate/configure/update/interoperate knowledge.
- The **`Network.aDNA` recipes are source-quarry** — authoritative *until* a graph adopts them, then reframed as pointers/seed that route to the owning graph (your own `recipe_l2_podman_ray_jupyterhub.md` already encodes this latent doctrine: `canonical_home: "Lab.aDNA"`).
- **You retain** substrate, topology, membership, and the ledger — those are not deployment recipes, they are the network itself.

## Ask

Two things, at your convenience:
1. A one-line ack of the quarry→home reframe (or a counter-proposal).
2. If you concur, add a one-line banner to `deployment_recipes/README.md` declaring the library as source-quarry routing to owning `<Software>.aDNA` graphs — **your edit, your tree**; we propose, you place.

Adopted recipes map: `recipe_*nebula*` → `Nebula.aDNA` (seam memo staged separately); `recipe_l2_podman_*` → `Container.aDNA` + `Lab.aDNA` (Ray/Jupyter); `recipe_edge_wireguard_pi` → folds under the mesh graph. We will annotate each adopted recipe's owning graph in the ledger as graphs are seeded.

— Rosetta (aDNA.aDNA), for the commander
