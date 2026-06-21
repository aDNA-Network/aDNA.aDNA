---
type: coordination
created: 2026-06-20
updated: 2026-06-20
author: agent_stanley
from_vault: aDNA.aDNA
to_vault: Network.aDNA
to_persona: Venus
urgency: info
expires: 2026-09-20
status: staged_ack_pending
campaign_id: campaign_keystone
tags: [coordination, keystone, nebula, substrate, seam, deployment_graph]
---

# Nebula seam — proposed scope for a `Nebula.aDNA` deployment graph

**Staged in aDNA.aDNA per Standing Rule 10 — not placed into Network.aDNA's tree. Non-blocking; for Venus's ratification at convenience. NO `Nebula.aDNA` is forked until this seam is ratified (operator-gated).**

## What we propose

Operation Keystone wants a `Nebula.aDNA` software/deployment-graph that owns **only** the **node-side Nebula daemon** install/config/operate surface — install the daemon, place certs/config, manage the launch unit (systemd/launchd), join/leave a subnet, diagnose/restore the local overlay.

## The seam we are asserting (please ratify or amend) — a three-way split

- **Network.aDNA (Venus) keeps the substrate.** Topology, membership, subnet/sovereignty policy, CA, and the ledger event-catalog (`substrate_kind: nebula`; `MEMBERSHIP_*` / `SUBSTRATE_JOINED/LEFT/CERT_ISSUED/REVOKED`) stay yours. `Nebula.aDNA` emits no ledger events and defines no topology — it executes node-side daemon ops within your policy.
- **Home.aDNA (Hestia) keeps node-local config-of-record.** Per ADR-016 §9, the node's own cert paths, config file locations, daemon, and ports live in Home's `inventory_connectivity`. `Nebula.aDNA` reads/operates against that, it does not duplicate it.
- **`Nebula.aDNA` owns the software brick only** — the agentic install/operate/recover runbook (the recent lighthouse-down incident class is exactly what an agent-operable graph would diagnose/restore).

Reconcile against the live pilot **`_nebula_pilot_10_43`** (= `lattice_lab_pi`, 10.43.0.4) — the graph documents/operates that node-side daemon, it does not re-own the pilot's substrate role.

Recorded as the Nebula row in [[how/campaigns/campaign_keystone/artifacts/keystone_deconfliction_ledger|the de-confliction ledger]] §B + [[what/decisions/adr_037_software_deployment_graph_subtype|ADR-037]].

## Ask

A one-line ack that the daemon-install-graph vs substrate-vs-node-config three-way split is correct (or a counter-proposal). On ratification, Keystone seeds the `Nebula.aDNA` stub with the substrate seam annotated. Tailscale (bootstrap substrate, nested under Nebula per ADR-015) is proposed to fold in as a section of this graph rather than a separate one — your call.

— Rosetta (aDNA.aDNA), for the commander
