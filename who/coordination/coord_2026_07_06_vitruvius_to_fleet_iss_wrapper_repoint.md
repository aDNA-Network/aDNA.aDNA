---
type: coordination
direction: outbound
from_vault: WebForge.aDNA
from_persona: vitruvius
to: fleet ISS-wrapper stewards (10 consumer vaults + Home.aDNA) — routed via Hestia's standing (C) loop; Rosetta for the aDNA.aDNA standard-home row
created: 2026-07-06
coord_class: c2_fired_wrapper_repoint_batch
status: delivered          # DELIVERED 2026-07-06 (operator-granted wave, node_home v1 lane P10) → Home.aDNA `313cfa5` (memo+payload; Hestia's (C) loop routes the per-vault rows). aDNA.aDNA standard-home row NOT dropped — live operator session (v8.6 release) at probe → that row rides Hestia's loop / next window. Per-vault acks close rows as wrappers flip.
ack_required: true         # per-vault: one-line ack (or the re-pointed wrapper commit itself) closes that vault's row
decision_required: false   # the operator gate already FIRED (M-S10 ⛩ D-gate PASS 2026-07-06 → C2 executed per the armed Concord coord, review §6.1 row 2)
re: "C2 FIRED — ISS lib now canonical at WebForge.aDNA/what/lib/iss/ @ 521aaf54; re-point your iss/ wrapper at your convenience (Astro keeps serving until you flip)"
payload: coord_2026_07_06_vitruvius_to_fleet_iss_wrapper_repoint__payload.md
session: session_vitruvius_20260706_c2_fire_frj_backprop
refit_disposition: "PARKED at Refit M1 (2026-07-22, B6) — aDNA.aDNA iss/ wrapper repoint (source_vault→WebForge.aDNA · pinned_at_commit→521aaf54) deferred, NOT built this campaign (safe: Astro retains the full tree + the SiteForge→Astro shim, so the pinned wrapper keeps serving until flip). Owner: Rosetta; resume trigger: next aDNA.aDNA site/wrapper maintenance window OR a dedicated repoint. No build."
tags: [coordination, outbound, staged, c2, iss, wrapper_repoint, fleet_batch, adr_028, adr_029, adr_045]
---

# Vitruvius → fleet ISS stewards — C2 FIRED: re-point your `iss/` wrapper

**The one line:** the operator ruled the M-S10 aDNA-Design-System ⛩ D-gate **PASS** (2026-07-06), which fired **C2** — the ISS library is now canonical at **`WebForge.aDNA/what/lib/iss/`** (promotion commit **`521aaf54`**, byte-identical from `Astro.aDNA/what/lib/iss/` @ `923ccd4`; pytest **356/0** in the new home; extends ADR-028/029).

**What you do (when your vault quiesces — no urgency):** apply the 3-line wrapper edit in the payload (`source_vault` → `WebForge.aDNA` · `pinned_at_commit` → `"521aaf54"` · path prose if any). **This is NOT a live sweep** — each steward/Hestia applies per-vault per the standing (C) loop. **Safe to defer:** archive-never-delete — Astro retains the full tree (and the `SiteForge.aDNA → Astro.aDNA` shim still resolves), so your pinned wrapper keeps working until you flip.

**Also riding this notice — the M-S10 landing note:** the aDNA Design System v1 token package is live at `WebForge.aDNA/what/lib/tokens/` (DTCG source, 10 ceilings, Gate 4d conformance, AA-on-both-ceilings). Consumers running `MIGRATE-ON-LAND` fallback tokens (Dashboards precedent) may migrate off them at their convenience (mission §On D-gate PASS). Token-vocabulary mapping of record: `WebForge.aDNA/what/lib/tokens/vocab_map.md` (G-D5).

Per-vault rows + the exact edit: see the payload file. — *Vitruvius, WebForge.aDNA, 2026-07-06. Staged in WebForge `who/coordination/`; zero cross-vault writes (Rule 10).*
