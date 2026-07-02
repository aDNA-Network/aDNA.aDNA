---
type: coordination
coord_id: coord_2026_07_01_rosetta_to_lighthouse_terminal_harness_p4_installer_spinout
from: Rosetta (aDNA.aDNA)
to:
  - Lighthouse.aDNA (persona TBD-at-P0)   # PRIMARY — deployable-integrated-node owner
  - Terminal.aDNA (Berthier)              # terminal substrate / launcher
  - Harness.aDNA (Stanley)                # agent-harness / provider contract
created: 2026-07-01
last_edited_by: agent_stanley
status: filed
ack_required: true
tags: [coordination, spinout, installer, p4, str, v8, node_provisioning, lighthouse, terminal, harness]
related:
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/str_resume_reconciliation_ledger.md
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m41_phase_4_contract_draft.md
  - aDNA.aDNA/what/decisions/adr_043_node_provisioning_layer_reconciliation.md
---

# Coord — P4 installer/binary-distribution SPUN OUT of STR → node-provisioning triad

> **Filed at the STR (Track C) reopen-closeout gate, 2026-07-01 (operator-ratified).** This is a **hand-off notice + inheritance pointer**, not a task assignment — each receiving vault picks this up at its own P0/roadmap gate. No action is forced.

## What happened

STR (`campaign_adna_serious_tool_readiness`) was reopened 2026-06-30 to "re-orient first." The re-orientation found STR's terminal target **v8.0 already shipped** (Hearthstone 2026-06-19 → v8.3) and 5 of 6 scopes delivered. The **one genuinely-unfinished unit** was STR's **Phase 4 — installer + binary distribution** (M4.2/M4.3/M4.4, paused 2026-05-25). At the gate the operator chose to **close STR out** and **spin P4 out to you**.

## Why P4 can't just resume inside STR

The Phase-4 contract (`m41_phase_4_contract_draft.md`, 2026-05-25) is built on vaults that no longer exist as live:

- **`LatticeTerminal.aDNA` (Spock)** — terminal substrate + launcher binary → **archived 2026-06-07** (role → **Terminal.aDNA** + **Harness.aDNA**).
- **`LatticeAgent.aDNA` (Stanley)** — HARNESS-CONTRACT + PROVIDER-CONTRACT owner → **archived 2026-06-07** (→ **Harness.aDNA**).
- Gate URL `install.lattice.dev` predates the **aDNA / adna.network** rebrand.
- **Lighthouse.aDNA** (forked 2026-06-20) is now the **deployable-integrated-node owner** — installer/node-bootstrap is squarely its domain, per **ADR-043** (node-provisioning layer reconciliation).

And v8.0 shipped fine **without** an installer, so it was never a v8.0 blocker.

## Inheritance (what you're being handed)

The M4.1 reconnaissance is preserved as a **quarry** (not a mandate):

- **`m41_phase_4_contract_draft.md`** — 8-clause installer/distribution contract (Clause A: unified installer composing base terminal layer + workspace-bootstrap + launcher build-artifact; Clauses B–H: harness ownership, packaging, CI/CD, notarization). **Re-home the party/role assignments** to today's vaults before using.
- **`m41_latticeterminal_state_synthesis.md`** — the paired-vault state read (stale on the archived vaults; use for shape, not specifics).
- Suggested split (per ADR-043): **Lighthouse** = installer orchestration + node profiles; **Terminal** = terminal/launcher layer; **Harness** = the agent-harness/provider layer.

## Ask

1. **Ack receipt** (ack_required) — no deliverable, just confirm the hand-off landed.
2. When node-provisioning work reaches your roadmap, **treat the M4.1 contract as input**, not as a spec to execute verbatim.
3. If you'd rather this be an explicit ADR/charter seam, say so and Rosetta will co-author.

*STR itself is closing out; it will not carry installer work. This memo is the record that the work has an owner (you), not an orphan.*
