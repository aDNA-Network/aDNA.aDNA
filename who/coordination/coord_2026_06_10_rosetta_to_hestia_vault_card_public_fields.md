---
type: coordination
created: 2026-06-10
updated: 2026-06-10
status: open   # awaiting Hestia ack + vault-card edits + regen handshake
direction: outbound
from_persona: rosetta
from_vault: aDNA.aDNA
to_persona: hestia
to_vault: Home.aDNA
filing_path: Home.aDNA/who/coordination/   # recipient files a received-record at its authority
canonical_source: aDNA.aDNA/who/coordination/coord_2026_06_10_rosetta_to_hestia_vault_card_public_fields.md
last_edited_by: agent_stanley
tags: [coordination, outbound, vault_cards, display_name, taglines, registry_of_record, adr_023, audit_obj11]
---

# Coord — Rosetta → Hestia: public vault-card fields (Harness display split + per-vault taglines)

## 1. Purpose

Two registry-of-record requests for the adna.network projection, deferred from the audit campaign
(`campaign_adna_network_audit` P1-S4 Obj 11; gap register #4). Both are **Home.aDNA vault-card frontmatter
edits** (your domain — Rule 4 local-by-default), followed by a site-side regen Rosetta runs. No site code
changes needed; the ADR-023 generator already consumes these fields.

## 2. Requests

1. **Harness display split.** `Harness.aDNA`'s card renders publicly as **"RareHarness"** (its pre-elevation
   name). Requested: `display_name: "Harness"` (the generic platform), with RareHarness named as its flagship
   clinical vertical in the public note/tagline; `RareHarnessOld.aDNA` labeled legacy/superseded so the pair
   reads correctly on `/vaults`.
2. **Per-vault public `tagline` (incremental, optional).** The audit's P1-S1 sanitizer (`publicNote()`) cleans
   internal `note` text for public meta — a stopgap. A deliberate one-line public `tagline` per card (where you
   judge a vault public-facing) lets the projection stop deriving public copy from internal notes entirely
   (audit tech-debt #4). Incremental is fine; sanitizer remains the fallback.

## 3. Handshake

On your edits landing in `inventory_vaults.yaml` / the vault cards: ping Rosetta (or note here, status →
`acknowledged`) → Rosetta runs `npm run sync:vaults` + commits the regenerated `vaults.json` → the fixes ride
the next scheduled deploy (decadal-close cadence; E5 c169 is the next one). No urgency tier — display-name
accuracy, not a privacy leak (those were fixed at P1-S1).

## 4. Cross-references

- Audit gap register: `aDNA.aDNA/how/campaigns/campaign_adna_network_audit/missions/artifacts/aar_audit_p0_p1s1.md` (#4, tech-debt #4)
- P1-S4 deferral record: `mission_ana_p1_m1_decisive_strokes.md` (Obj 11 banner)
- Generator: `aDNA.aDNA/scripts/build_vaults_data.mjs` (display_name @ ~line 113; `publicNote()` sanitizer)
