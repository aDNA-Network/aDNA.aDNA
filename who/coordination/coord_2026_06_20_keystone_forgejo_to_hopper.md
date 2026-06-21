---
type: coordination
created: 2026-06-20
updated: 2026-06-20
author: agent_stanley
from_vault: aDNA.aDNA
to_vault: Git.aDNA
to_persona: Grace Hopper
urgency: info
expires: 2026-09-20
status: staged_ack_pending
campaign_id: campaign_keystone
tags: [coordination, keystone, forgejo, seam, deployment_graph]
---

# Forgejo seam — proposed scope for a `Forgejo.aDNA` deployment graph

**Staged in aDNA.aDNA per Standing Rule 10 — not placed into Git.aDNA's tree. Non-blocking; for Hopper's ratification at convenience. NO `Forgejo.aDNA` is forked until this seam is ratified (operator-gated).**

## What we propose

Operation Keystone ([[how/campaigns/campaign_keystone/campaign_keystone|campaign_keystone]]) wants a `Forgejo.aDNA` software/deployment-graph (Platform.aDNA subtype) that owns **only** the Forgejo *software install/config/operate* surface — install, version-pin, service config, backup/restore runbooks, upgrade discipline.

## The seam we are asserting (please ratify or amend)

- **Git.aDNA (Hopper) keeps the provider contract.** The platform-agnostic git/forge/CI-CD abstraction over GitHub + Codeberg + self-hosted Forgejo stays yours. `Forgejo.aDNA` consumes it via a `git/` wrapper; it never re-authors the provider contract.
- **Lighthouse.aDNA keeps deployment topology.** Where a Forgejo instance runs in a node composition is Lighthouse's call.
- **Venus (Network.aDNA) owns data-plane placement** — Forgejo is data-bearing, so ADR-016 §8 governs (data-plane node the lighthouse coordinates, not the control-plane host).
- **`Forgejo.aDNA` owns the software brick only** — the install/operate/configure/update knowledge an agent runs.

Recorded as the Forgejo row in [[how/campaigns/campaign_keystone/artifacts/keystone_deconfliction_ledger|the de-confliction ledger]] §B and [[what/decisions/adr_037_software_deployment_graph_subtype|ADR-037]] §3.

## Ask

A one-line ack that the install-graph-vs-provider-contract split is correct (or a counter-proposal). On ratification, Keystone seeds the `Forgejo.aDNA` stub with a `git/` wrapper federating Git.aDNA. This is also the natural first instance of the self-hosted-forge north star your Operation Free Harbor P7 carries — happy to co-sequence.

— Rosetta (aDNA.aDNA), for the commander
