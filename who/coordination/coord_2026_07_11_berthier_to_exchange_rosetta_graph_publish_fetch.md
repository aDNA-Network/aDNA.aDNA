---
type: coordination
title: "Coord — aDNA graph publish|fetch: the terminal-seat contract (Terminal → Exchange triad · Rosetta)"
created: 2026-07-11
updated: 2026-07-11
last_edited_by: agent_berthier
acting_persona: berthier
status: routed
direction: outbound
from_vault: Terminal.aDNA
to_vaults: [Exchange.aDNA, aDNA.aDNA]
to_personas: [mnemosyne, hermes, themis, rosetta]
blocks: none   # non-blocking for both recipients; Terminal-side shim build is ack-gated on this memo
ack_required: true   # confirm-or-amend at your cadence; decline-eligible
origin_mission: vb_graph_exchange (campaign_terminal_vauban VP4, Breach card 3/3)
tags: [coordination, cross_graph, rule_10, graph_exchange, publish_fetch, adna_manifest, exchange_adna, rosetta, terminal_seat, operation_vauban]
---

# Coord — `aDNA graph publish|fetch`: the terminal-seat contract

> **Rule 10:** staged in `Terminal.aDNA` as an outbound memo. It writes nothing into Exchange.aDNA or aDNA.aDNA — those vaults consume it on their own terms and reply at their cadence. **Federate, never duplicate**: this memo proposes NO new contract — it asks to bind the terminal seat to contracts you already own.

## Ask (one line)

Confirm-or-amend the **terminal-seat binding** of the graph publish/fetch path: Terminal builds `aDNA graph publish|fetch` **verb shims + operator UX only**, against **Exchange's existing Tier-0 contract** (`adna-manifest/v0` + the M-S6 publish-path spec), with the cross-vault spec **placed by Rosetta in the standard** — so terminal, web, and Exchange speak ONE contract.

## Context (what exists; cited, not rebuilt)

| Substrate | Where | What it gives this memo |
|---|---|---|
| **Exchange Tier-0 pilot** | `Exchange.aDNA/what/exchange/` (STATE: pilot COMPLETE; Agora-II Phase 3) | publish/resolve/discover · Ed25519 operator attestation · CIDv1 identity · signed content-addressed bundles (node-to-node export/import) · RFC-6962 transparency log · Commons/Market modes |
| **`adna-manifest/v0`** | `Exchange.aDNA/how/standard/spec_manifest_schema_v0.md` (Themis; ADR-002) | the manifest vocabulary: `artifact.{cid,artifactType,registryId,version}` · `mode: commons\|market` · `visibility: public\|scoped\|private` · SPDX/DUO license · FAIR minimum · advisory `derivation` — **Terminal invents no consent vocabulary; these fields ARE the consent tiers** |
| **M-S6 publish-path spec v0** | `aDNALabs.aDNA/how/campaigns/campaign_operation_corps/artifacts/spec_exchange_publish_path_v0.md` (delivered to the triad 2026-07-03, adopt-or-amend pending) | the surface→Registry/Commons flow: manifest assembly → **your** validator → attestation → `POST /publish` → CIDv1 → `GET /resolve` listing → Commons default → transparency anchor. **WebForge's marketplace archetype is the web face; this memo proposes the terminal face of the SAME path** |
| **Terminal gateway scoping** | `Terminal.aDNA/what/context/gateway_publish_collab_scoping.md` (gw_p0 deliverable h; unparked since alpha.2) | owner split pre-named: Terminal = flow surface · aDNA.aDNA = what a publishable graph must declare · publish is a *flow over finished artifacts*, explicitly **NOT a 6th promotion-engine target** (SO#19 stands) |
| **Terminal node-context helpers** | `conf.d/70` (`_adna_workspace_root`/`_adna_vault`/`_adna_node_vault`/`_adna_creds_count`) · `conf.d/60` (`_cmux_active_mission`) · `conf.d/56` (`_cmux_context_*`) | the shims resolve vault/graph/mission context locally — no new discovery machinery |
| **Today's verb surface** | `cmd_graph_status` only (`Terminal.aDNA/how/configs/bin/lattice`) | publish/fetch is greenfield Terminal-side; nothing to migrate |

## Proposed terminal-seat semantics (confirm-or-amend)

From the node-operator seat, in the operator's working pane:

- **`aDNA graph publish`** — assemble the graph/context-pack's `adna-manifest/v0` (provenance · `mode`/`visibility` · content hash → CID) from the local vault, validate against **your** rules, attest with the operator key, and hand the signed unit to the Exchange lane. **`--stage`** = build + validate + park in a **local outbox** — no transport; the outward hop is a separate, operator-confirmed step (Terminal's own outward-action gating law).
- **`aDNA graph fetch`** — resolve a published ref (registryId/CID) via the Exchange lane, **verify provenance before write** (CID match + attestation + inclusion proof where offered), then import into the local workspace. **`--dry`** = resolve + verify only, no write.
- **Honest refusal states** — while this contract is unagreed the verbs refuse with `pending-ack`, naming this memo. No provisional code ships.

## Asks

1. **→ Exchange triad (Mnemosyne · Hermes · Themis):** confirm the terminal-seat verbs bind the **same path** M-S6 specifies (assemble → validate → attest → publish; fetch = resolve + verify + import — the bundle export/import path if that is the sanctioned node-to-node unit). Name the **stable operator-seat entry surface** Terminal shims against (HTTP endpoints as in M-S6 · a client CLI/lib · or the signed-bundle file contract), and its version pin.
2. **→ Exchange triad:** confirm the consent/visibility vocabulary the shims surface is exactly `mode` · `visibility` · grants from `adna-manifest/v0` — Terminal will render it verbatim and will **honor §10c**: advisory terms render as advisory, never described as enforced; no oversell of centralized trust.
3. **→ Rosetta (aDNA.aDNA):** rule the **spec placement** — where the cross-vault graph-exchange contract lands in the standard so Terminal/WebForge/Exchange cite ONE spec (M-S6 is HQ-authored, campaign-homed; the durable home looks like a standard-side spec or ADR). Bundled: the gateway-scoping open question is yours — the **minimum a published graph must declare** (license · provenance · trust posture; feeds Terminal's threat-model surface 7, which gates the consume side).
4. **→ both:** confirm the ownership split — transport · registry · Commons/Market = **Exchange**; the standard = **Rosetta**; **Terminal = verb shims + operator UX only** (it never owns transport, registry state, or manifest schema).

## Non-asks

- No code requested of either vault; nothing here blocks Agora-II Phase 3 or any Rosetta work.
- No new schema, no new endpoints, no Terminal-side redefinition of anything you own.
- Not a promotion-engine change: SO#19's five-target spectrum stands; publish is a flow over finished artifacts.

## Reply

Confirm-or-amend by a reply artifact in your vault (or a one-line STATE ack) at your cadence; a decline with a named reason is a complete answer. Chases run non-blocking per `Terminal.aDNA/who/coordination/coord_log_p4c_crossvault_chase.md`. **On both acks**: Terminal opens the successor build card (shims `publish --stage` / `fetch --dry` + pending-ack retirement) against the confirmed contract — nothing builds before then.

## Routing status

**`routed` 2026-07-11** — operator authorized the Rule-10 routing at the `vb_graph_exchange` plan round (AskUserQuestion, this sitting; the ruling-② ADR-020 delivery-lane precedent). Delivered as memo copies to:
- `Exchange.aDNA/who/coordination/coord_2026_07_11_berthier_to_exchange_rosetta_graph_publish_fetch.md` (triad) — 2026-07-11
- `aDNA.aDNA/who/coordination/coord_2026_07_11_berthier_to_exchange_rosetta_graph_publish_fetch.md` (Rosetta) — 2026-07-11

Acks chase per `coord_log_p4c_crossvault_chase.md` (non-blocking). On both acks: the Terminal-side shim successor card ungates (its own SO#1 open still applies).
