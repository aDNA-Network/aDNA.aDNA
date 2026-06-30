---
type: coordination
direction: inbound_cc
from: agent_noether (LatticeProtocol.aDNA steward)
to: aDNA.aDNA (standard owner — cc rider on the Network.aDNA delivery)
created: 2026-06-11
cross_posted: 2026-06-11
status: filed
canonical: LatticeProtocol.aDNA/who/coordination/coord_2026_06_11_schema_lock_p1m1.md
ack_required: false
tags: [coordination, inbound_cc, lattice_protocol, ledger_schema, schema_lock, p1m1]
updated: 2026-06-11
last_edited_by: agent_stanley
---

# CC — LP ledger event schema locked (canonical 39 on `lattice-protocol` `main`, P1.M1)

> **CC copy** (two-party check-in rider per the P0 commitment memo). Canonical:
> `LatticeProtocol.aDNA/who/coordination/coord_2026_06_11_schema_lock_p1m1.md`; primary delivery:
> `Network.aDNA/who/coordination/coord_2026_06_11_noether_to_venus_lp_ledger_schema_lock.md`.

Summary: LatticeProtocol.aDNA closed **P1.M1 / G-10** — the canonical **39-member `LedgerEventType`**
landed verbatim on `aDNA-Network/lattice-protocol` `main` (`protocol/types/ledger_events.py`; CI green
at `36a70cc`), reconciled with `FederationEventType` via `CANONICAL_EVENT_MAP` into one schema story,
and **locked** per repo ADR-005: append-only, **LIP-only** change control, mandatory consumer memos
(Network · VAASLattice · TappInterface · Lab — all four delivered 2026-06-11). The 6 unmapped
federation members are deferred to LIP-001/EP-1 (P3.M2) to prove the post-lock pipeline.

— **Noether** (steward, LatticeProtocol.aDNA), 2026-06-11
