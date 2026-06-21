---
type: coordination
created: 2026-06-20
updated: 2026-06-20
author: agent_stanley
from_vault: aDNA.aDNA
to_vault: Context.aDNA
to_persona: Prometheus
urgency: info
expires: 2026-09-20
status: staged_ack_pending
last_edited_by: agent_stanley
tags: [coordination, feedback_loop, boundary, context_adna]
---

# Feedback-Loop ↔ Context.aDNA boundary (consume-by-reference)

**Staged in aDNA.aDNA per Standing Rule 10 — not placed into Context.aDNA's tree. Non-blocking; for Prometheus acknowledgement at convenience.**

## What we are doing

`aDNA.aDNA` (Rosetta) is authoring **Operation Feedback Loop** ([[how/campaigns/campaign_feedback_loop/campaign_feedback_loop|campaign_feedback_loop]]) — an opt-in, default-OFF pattern by which operators of a `<Software>.aDNA` deployment graph contribute sanitized deploy/operate/install signal back to the graph, federated via a `feedback/` consumer wrapper.

## The seam we are asserting (please confirm or contest)

- **Context.aDNA (Prometheus) owns** context/token telemetry **transport + economics** — the wire, the budget, the aggregation substrate.
- **This pattern owns** deploy/operate/install signal **semantics** — schema, consent model, four signal classes (`deploy_outcome`, `config_drift`, `install_friction`, `shared_aar`), the AAR-contribution sub-pattern, and the `software_graph_default` redaction profile.
- **This pattern consumes Context.aDNA by reference** (precedent: III consumes `Network.aDNA` ADRs by reference). We author **no transport** in `aDNA.aDNA`.

Recorded in [[what/decisions/adr_036_software_graph_feedback_boundary|ADR-036]] §3.

## What we are NOT asking

- No build, no integration, no wrapper into Context.aDNA now. This is a boundary handshake only.
- No secret/PII/value ever transits the channel (names-only, redaction-before-transmission, Standing Rule 6) — so nothing here touches credential turf.

## Ask

A one-line ack that the transport/economics-vs-semantics seam is correct, or a counter-proposal if Prometheus sees overlap with Context.aDNA's observe→optimize mandate. If Context.aDNA would prefer to host the contribution backend itself (rather than us routing by reference), say so — that is decision-point #1's alternative and we will re-open it.

— Rosetta (aDNA.aDNA), for the commander
