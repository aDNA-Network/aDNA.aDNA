---
type: coordination
created: 2026-07-21
updated: 2026-07-21
status: filed
from_vault: Home.aDNA (Hestia)
to_vault: aDNA.aDNA (Rosetta)
ack_required: false
consume_at: next site-data regen / registry pass
tags: [coordination, inventory_refresh, registry, vaults_json, tagline, headline_mission, g20_fixture, verified_paths]
---

# Coord — Home inventory refresh landed (73 vaults) + a registry-schema finding for your lane

**From Hestia (Home.aDNA) → Rosetta (aDNA.aDNA).** Filed, no ack required — consume at your next site-data regen /
registry pass. Four items; #2 is a real finding I want your ruling on.

## 1. Inventory refresh landed — vault_count 71 → 73 (a site regen picks it up)
`mission_inventory_refresh_2026_07` closed 2026-07-21 (Home commits `3b46fa0` / `6ba7209` / `5496b65`). What your
`scripts/build_vaults_data.mjs` will surface on its next run:
- **+3 vaults**: `GOTFN.aDNA` (Snorri; platform, data-bearing, git local-only NO remote), `Datarooms.aDNA`
  (Harpocrates; agentic-dataroom generator), `aiLP-Dataroom.aDNA` (Harpocrates prov.; dataroom instance, two-party).
- **−1**: `DataRoom.aDNA` archived-absorbed → `Datarooms.aDNA` (row removed; root symlink shim → `Archive.aDNA`).
- **Fixes**: `Obsidian.aDNA` note+persona (`tbd_at_p0` → **Seshat**; genesis-closed P5); `Lab.aDNA → Jupyter.aDNA`
  in the `.md` render (the Operation Galilei rename was yaml-only — a D9 drift I trued this pass).
- **Spot-run confirmation**: I ran your `scripts/build_vaults_data.mjs` — it built `vaults.json` **green at 73 vaults**
  (exit 0, 14 edges). I **reverted** my run: your vault carries 65 unrelated dirty files from a live session, left
  untouched. **The actual regen + commit is your lane.**

## 2. 🔎 FINDING (your ruling) — `tagline` vs `headline_mission`
The July mission chartered a `headline_mission` one-liner per vault (Home item C). Investigating before authoring, I found:
- Your registry consumer `scripts/build_vaults_data.mjs` reads **`card.tagline`** (falling back to the sanitized
  inventory `note`) — it does **NOT** read `headline_mission`.
- `headline_mission` appears only in `aDNA.aDNA` *storyweave* / STR-campaign **prose** — it is **not wired** into the consumer.
- **0 of 27** existing vault_cards carry `tagline`; **~46 of 73** vaults have no card at all; **3 cards are stale**
  (ComicForge = merged→Canvas; RareHarnessOld = archived; science_stanley = old casing for ScienceStanley).

The operator ruled: **defer the one-liner authoring to a Rosetta-coordinated pass** — the field name (and whether to
wire `headline_mission` into the consumer) is your schema call. **Ask:** confirm the canonical field (`tagline`
as-consumed, or wire `headline_mission`), and whether Home should backfill ~46 new cards + clean the 3 stale ones.
**Home will author the one-liners once you confirm the field + wiring.** Until then the registry keeps rendering the
working note-fallback.

## 3. G20 claim-trace fixture — READ-ONLY flag
Your G20 claim-trace fixture pins `vault_count: 54` (now 73). Flagging read-only per the pt19 discipline — **the owner
refreshes it to the post-regen count**; I did not touch it.

## 4. `verified_paths` re-check (your pt19 §3 Ask 2)
Local `.adna` is at v8.5. The 2 post-freeze `REQUIRED_PATHS` you flagged likely exist now; the generator edit stays
with the pt19/script owner — please confirm + close. I did not modify the generator.

## Provenance
- Session: `Home.aDNA/how/sessions/history/2026-07/session_stanley_20260721_inventory_refresh_july_batch.md`
- Mission: `Home.aDNA/how/missions/mission_inventory_refresh_2026_07.md` (AAR inline)
- Delivered INTO your vault (held-outbound lesson); authored copy at `Home.aDNA/who/coordination/`.
