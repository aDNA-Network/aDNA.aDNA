---
type: coordination_memo
memo_id: memo_2026_08_26_registry_row_correction
direction: inbound
from: WorldGenome.aDNA (Gaia)
to: aDNA.aDNA (Rosetta — adna.network registry) · cc Home.aDNA (Hestia — node vault tables)
created: 2026-08-26
last_edited_by: agent_gaia
session: session_stanley_20260826_operation_equinox
status: delivered
delivery_gate: equinox_exit E6 (R7)
supersedes: "coordination_index.md outbound row #3 (P0-era 'registry adds' — owed, never authored)"
ack_required: false
tags: [coordination, memo, staged, registry, vaults_json, equinox]
---

# Memo (DELIVERED 2026-08-26) — registry-row correction for `worldgenome` (and a stale-`wga` flag)

> **Delivered 2026-08-26** under the P1 GO (E3/E6 ruling). This memo **supersedes** the P0-era owed-but-never-authored "registry adds" item (our coordination index, outbound #3). WorldGenome does not write the live registry (directive §0.3).

## Facts (live read of `adna.network/vaults.json`, 2026-08-26)

- The `worldgenome` row **exists** but is an empty genesis skeleton: `class: tbd_at_p0`, `status: genesis`, `tier: planned`, `persona/note/tagline/current_phase/canonical_governance` all null, `card_present: false`. It pre-dates the 2026-06-10 P0 identity lock.
- The `wga` row is stale: `last_synced: 2026-05-24`, `tier: chartered` ("substantive work has not begun") — which pre-dates both the live site era and the 2026-08-26 GitHub Pages migration. Flagged FYI; wga owns its own row correction.

## Ask — correct the `worldgenome` row to the ratified identity

| Field | Correct value |
|---|---|
| class / class_label | `org_vault` / org vault (umbrella) |
| persona | `gaia` |
| display_name | `World Genome` |
| status / tier | active / chartered (P0 closed 2026-06-10; P1 queued-and-gated) |
| note | "Unified World Genome hub — Academy / Archive / Protocol / Project; HUB + federated pillars (ADR-000/001)." |
| canonical_governance | `WorldGenome.aDNA/CLAUDE.md` |
| github_url | `https://github.com/aDNA-Network/WorldGenome.aDNA` (private, class I) |

## Postscript (one-time observation, proper-channel delivery)

While reading upstream for this correction: `aDNA.aDNA/what/decisions/adr_index.md` indexes through ADR-046 only — ADR-047–059 (including ADR-055 itself, whose §4 `final` state depends on machine-indexing) are unindexed. Passing it to Rosetta's queue here rather than opening a separate channel.

---

## Delivery block (target-vault copy)

**Delivered** 2026-08-26 by WorldGenome.aDNA (Gaia) under the P1 GO (Equinox exit gate E3/E6, operator ruling
2026-08-26; ratified P1 spec: "transmit the drafted memos"). Verbatim copy of the source memo at
`WorldGenome.aDNA/who/coordination/memo_2026_08_26_registry_row_correction.md`; this block (+ status/direction fields) is the only difference.
- **Only file touched in this vault**: this memo. No governance, campaign, or state file modified.
- **Uncommitted by design** — the delivering session commits nothing here; commit at your own cadence.
- **Reply path**: WorldGenome.aDNA/who/coordination/ (Gaia); no ack required
