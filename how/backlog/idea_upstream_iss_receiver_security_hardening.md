---
idea_id: idea_upstream_iss_receiver_security_hardening
type: backlog
title: "ISS gate receivers accept cross-origin, unauthenticated POST /save — harden to same-origin or per-gate token"
category: governance
status: proposed
disposition: "IS v8.12 P12 — advisory row, carried to v8.13 unless Astro runtime fix lands first; Astro memo opened 2026-10-03 — ⛩ ruled 2026-10-03 (Stanley, accept-all on operator_rulings_packet_20261003 B2); status stays proposed until the gate executes it"
priority: high
effort: session
proposed_by: agent_rosetta
proposed_date: 2026-10-03
created: 2026-10-03
updated: 2026-10-03
last_edited_by: agent_rosetta
plan_id:
filed_from: how/missions/artifacts/sitrep_mid_campaign_20261003.md §5 S2
sources:
  - who/coordination/inbox/coord_2026_09_26_ledoux_to_rosetta_standard_touchpoints.md   # :69, :76 — HIGH, flag-class
  - who/coordination/inbox/coord_2026_09_02_berthier_to_rosetta_adna_iss_triad_note.md  # gate_receiver.py unauthenticated write
relates: [skill_create_iss, pattern_iss_operator_gate, adr_028_iss_architecture, adr_029_iss_standard_touch, release_staging_ledger_v8_12]
tags: [backlog, upstream, iss, security, cors, gate_receiver, v8_12_candidate]
---

# ISS gate receivers: cross-origin, unauthenticated `POST /save`

## Problem / Opportunity

Two peers reported the same defect independently, three weeks apart. Ledoux (City.aDNA, 2026-09-26, delivered 10-02) found at architecture review that **per-vault ISS gate receivers accept `POST /save` with CORS `*`** — *"any page open in the operator's browser could attempt a gate write"* — and graded it City's highest-severity standard-touch finding. Berthier (2026-09-02) had already named `gate_receiver.py`'s unauthenticated write as RemoteControl M2.11's first design input. The receiver pattern ships from this vault (`how/skills/skill_create_iss.md`, Astro's `what/lib/iss/runtime/`) and is live in ~10 consumer vaults per the 2026-07-02 census, so this is a **standard-level** defect, not a City-local one. `skill_create_iss.md:44` also still assumes port `:8765` as a fixed value.

## Proposed Solution

1. Receivers accept writes **only from their own origin** (or a token minted per gate and carried by the ISS page); reject cross-origin `POST`. Alternative Ledoux offers: keep `*` and bind the receiver to a Unix socket.
2. Rosetta and Astro's runtime owner (Vitruvius/Astro persona) rule the shape together — memo, not a unilateral edit of Astro's runtime.
3. Ship as **v8.12 ledger row P12** (candidate) or the first row of v8.13; `skill_create_iss` step for starting the receiver gains the origin/token clause; the ISS adaptation guides note it.
4. Red-prove: a planted cross-origin `POST` from a scratch page must be refused before the fix is called done.

## Discussion

- 2026-10-03 (agent_rosetta): filed at the mid-campaign SITREP; added to the v8.12 ledger as P12 the same sitting. City will not probe or exercise receivers (their memo). Berthier's memo also names a `skill_manage_gate_receiver.md` "at aDNA.aDNA/how/skills/" which does not exist here — reply owed.

## Decision

—
