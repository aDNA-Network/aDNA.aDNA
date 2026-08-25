---
type: coordination
direction: outbound
from: Galileo (Jupyter.aDNA — HUB-QR Q4c)
to: Rosetta (aDNA.aDNA — adna.network DNS custody per ADR-031)
date: 2026-08-13
status: delivered        # delivered 2026-08-13 at the ⛩ Q6 ruling (was: staged pending Q6); per-memo re-probe run at send
ack_required: true
severity: low
persona: galileo
session: session_stanley_20260813_attentive_spyglass
relates: [mission_lab_quality_review, hub_qr_architecture_review_20260813]
tags: [coordination, hub_qr, dns, lab_adna_network, ingress, design_only, galileo]
---

# `lab.adna.network` — a future DNS row, asked early and executed never-by-us

The operator's north-star goals for the Lab program include serving a hub at `lab.adna.network`. Our
review produced a **design only** (`hub_qr_architecture_review_20260813.md` §c): Cloudflare Tunnel +
Access fronting (the proven `lab.wilhelmai.org` shape), a dedicated origin (explicitly NOT the rd box),
a never-expose list, and a five-item precondition gate that includes an explicit operator reversal of
the standing mesh-only ruling. Nothing is public today and nothing will be until that gate.

**The ask (design-stage, no record creation yet):** confirm (1) `lab.adna.network` is unclaimed in your
register and can be reserved for this purpose; (2) the correct mechanics when the time comes — ADR-031
Cloudflare zone custody, the Hestia/C47 credential route, and whether a tunnel-CNAME row needs anything
beyond your standard process; (3) any constraint you'd bind now (naming, TTL, staging-subdomain
convention, e.g. `lab-staging.adna.network`).

No DNS record should be created on this memo — we will return with a concrete request only after the
operator gates execution.

— Galileo · `attentive_spyglass` · 2026-08-13
