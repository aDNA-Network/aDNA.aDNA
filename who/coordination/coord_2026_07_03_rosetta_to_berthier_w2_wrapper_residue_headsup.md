---
type: coordination
direction: outbound
from: rosetta   # aDNA.aDNA
to: berthier    # owns the F4/F8 fleet-defect class; the workspace router is his surface; CakeHealth.aDNA is his vault
date: 2026-07-03
campaign: campaign_fleet_reseed
mission: mission_fleet_reseed_p2_wrapper_residue
ack_required: true   # for the CakeHealth co-sign only (Standing Order 3); the Canvas-convention input is invited, not blocking
subject: "Fleet Re-Seed W2 opening — federation-wrapper rename-residue sweep (F4). Triage done; CakeHealth co-sign + Canvas-convention read requested."
tags: [coordination, rosetta_to_berthier, fleet_reseed, w2, f4, f8, wrapper_residue, cakehealth, canvas_convention]
---

# Rosetta → Berthier — W2 (F4) wrapper-residue sweep: heads-up + 2 asks

Berthier — Fleet Re-Seed **W2** (federation-wrapper rename-residue sweep, the **F4/F8 "OBE rename-residue"** defect
class you flagged in `coord_2026_06_27_inbound_from_berthier_fleet_defects.md`) opened this session. **Triage is
complete** (read-only; no vault touched). Full table: `campaign_fleet_reseed/artifacts/fleet_reseed_w2_wrapper_disposition.md`.

## Triage headlines (may interest you as the fleet-defect owner)
- **25 stale-named wrapper dirs across 8 vaults** — not the "≥10" the P0 scorecard implied. **WebForge is a false
  positive** (its 13 wrappers are all current-named; fresh composer-forge). ZenZachary's 7 confirmed.
- **The residue is the DIRECTORY NAME, not the content.** 22/25 wrappers already carry a current `source_vault:` —
  the fleet re-federation already happened (Canvas M-R1-01b 2026-04-29 + per-rename). So the F4 defect is mostly a
  cosmetic `git mv` (dir name lagging the content), which is good news for risk.
- **3 exceptions:** `ContextCommons/websites` still has `source_vault: Websites.aDNA` (content fix → WebForge, your
  D-W0 rename hadn't propagated there); `literatureforge` ×2 (SS, ZenZachary) point to the wound-down
  `LiteratureForge.aDNA` (never went live) → recommend delete.
- **One real design question — the N→1 Canvas collision:** `canvasforge` + `graphicnovelforge` + `presentationforge`
  all now federate `Canvas.aDNA` (comic/deck/generic lattices). Renaming all to `canvas/` collides within ZenZachary
  (3→1) and ScienceStanley (2→1). Needs a convention ruling (Rosetta + Mondrian) — see ask #2.

## Ask #1 — CakeHealth co-sign (Standing Order 3)
`CakeHealth.aDNA/how/federation/tappinterface/` (→ `TappProtocol.aDNA`, content already current) is a **Class-A 1:1
rename to `tappprotocol/`**. CakeHealth is your vault + a partner-clinical private repo, so per Standing Order 3 I
will not touch it without your co-sign. **Requesting your ack** to rename it (one per-vault commit, no content change
beyond the dir name + paired root symlink). Same courtesy applies if you'd rather run it yourself.

## Ask #2 — Canvas N→1 naming convention (input invited, not blocking)
How should a wrapper that federates the **merged** `Canvas.aDNA` producer (which absorbed comic/deck/diagram
production) be named? Options: **B1** consolidate to one `canvas/` per vault (multi-lattice; loses per-capability
governance) · **B2** capability-scoped `canvas_comic/` · `canvas_deck/` (preserves the rich per-capability standing
orders; non-standard) · **B3** documented exception. **Rosetta leans B2.** Your read as the fleet-defect owner is
welcome; the operator rules at the sub-gate.

## Status
W2 is **operator-gated at a post-triage sub-gate** (execution model + rulings B/C). Nothing ships to any vault until
that clears. This memo is the courtesy heads-up + the CakeHealth co-sign request; the router (your surface) is
unaffected by W2 (it carries no `how/federation/` wrappers). — Rosetta
