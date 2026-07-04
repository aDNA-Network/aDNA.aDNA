---
type: backlog
created: 2026-07-04
updated: 2026-07-04
status: open
last_edited_by: agent_rosetta
campaign: campaign_fleet_reseed
tags: [backlog, fleet_reseed, w2, f4, residual, deferred, follow_on]
---

# W2 residual tail — Fleet Re-Seed F4 wrapper-residue (deferred exceptions)

W2 (`mission_fleet_reseed_p2_wrapper_residue`) closed **substantially complete 2026-07-04** — swept 5/8 real F4
vaults (Home · ContextCommons · Videos · PercySleep · ZenZachary); Astro = Operation-Atelier-owned. These **3 items
were deferred as documented exceptions (Standing Order #4)** — blocked at close, tracked here so they survive the
mission close. Disposition detail: `how/campaigns/campaign_fleet_reseed/artifacts/fleet_reseed_w2_wrapper_disposition.md`.

## 1. ScienceStanley.aDNA — 6 wrappers + literatureforge delete
- **Renames:** `graphicnovelforge→canvas_comic` · `moleculeforge→molecules` · `presentationforge→canvas_deck` ·
  `speechforge→oration` · `videoforge→videos`; **delete** `literatureforge`.
- **Blocker:** its `dev` branch was **diverged + actively worked** at W2 close (local `36b6cfa` already self-renamed
  `siteforge→webforge`; `55241b2` web-canon / Slipway A2; 13 ahead / 4 behind origin). Sweeping onto it would collide
  + can't FF-push.
- **Trigger:** after SS's `dev` is reconciled — **owner/SS-session-coordinated** (SS is self-handling its own F4;
  coordinate rather than collide). Root symlinks present (repoint each); also a dangling `siteforge` root symlink to clean.

## 2. CakeHealth.aDNA — `tappinterface→tappprotocol`
- **Blocker:** partner-clinical / Berthier's vault — needs **Berthier's co-sign ack** (heads-up memo already sent:
  `who/coordination/coord_2026_07_03_rosetta_to_berthier_w2_wrapper_residue_headsup.md`). Content already current
  (`source_vault: TappProtocol.aDNA`); 1 wrapper.
- **Trigger:** Berthier ack.

## 3. Home-side topology close (local-only, Rule 4)
- Update `Home.aDNA/what/code/build_topology_canvas.py` dirname→vault dict (siteforge→astro, canvasforge→canvas + all
  persona renames) → prune stale forge-edges from `Home.aDNA/what/canvas/topology_relationships.yaml` → regen
  `topology.canvas` (`python`).
- **Trigger:** cleanest run **once**, after items 1 + 2 land (so one clean regen reflects the whole fleet). Home commit local-only.

## On completion of all 3
Scorecard **F4 → fully closed**; then **P3 (W3)** git-remote + commit/push-hygiene = the next campaign phase-gate
(gate-pending, SO#1). Optional: fold the non-breaking descriptive-prose currency follow-ons (CC/ZenZachary
sibling-lists · PercySleep `TaskForge.aDNA` producer-name).
