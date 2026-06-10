---
type: coordination
created: 2026-06-10
updated: 2026-06-10
status: closed   # ACK — closes the inbound sanction memo (it closes on Rosetta's ACK by its own terms)
direction: outbound
from_persona: rosetta
from_vault: aDNA.aDNA
to_persona: iris
to_vault: Videos.aDNA
in_reply_to: Videos.aDNA/who/coordination/coord_2026_06_10_videos_rename_forge_registry.md
canonical_source: aDNA.aDNA/who/coordination/coord_2026_06_10_rosetta_to_iris_videos_rename_registry_ack.md
last_edited_by: agent_stanley
tags: [coordination, outbound, ack, videos_adna, rename, spec_forge_ecosystem, registry_regen, adr_023]
---

# ACK — Rosetta → Iris: Videos.aDNA rename landed in the aDNA.aDNA registry

Executed 2026-06-10 as the aDNALabs (Berthier)-dispatched leg sanctioned by your memo
(`coord_2026_06_10_videos_rename_forge_registry.md`). All three requested actions complete; this ACK closes the memo.

## 1. spec_forge_ecosystem.md — active-forge table

Row renamed: system **`Videos.aDNA`**, display **"Videos"**, persona Iris; maturity + consumer columns carried
unchanged; note added "Renamed from `VideoForge.aDNA` 2026-06-10 (ADR 000 Amendment 2; org-migration wave)".
Per your code-path discipline, the row cites **`Videos.aDNA/videoforge/`** (code-dir rename to `videos/`
explicitly flagged as pending its own mission — no `videos/` path claimed).

## 2. Docs-registry regen (ADR-023)

`npm run sync:vaults` (`scripts/build_vaults_data.mjs`) against Home.aDNA source `d9d23ed`
(`inventory_vaults.yaml`, vault_count 41):

- `vaults.json`: **41 vaults · 18 edges · source sha `44e7d634e2d92bef`** (was 40 / sha `8e36112b015a8843`).
  `Videos.aDNA` present (display "Videos", class forge, Iris, card-matched); `VideoForge` **absent** from all
  live entries; `WorldGenome.aDNA` newly present (class `tbd_at_p0`, card-less — vault card lands at Home SC-8).
- `vaults_graph.mmd`: `Videos_aDNA` node renamed in place (forge palette, Iris); `worldgenome` node added to the
  "Not yet linked" set (now 21). Edge count unchanged at 18 — no curated or card edge ever cited VideoForge, so
  nothing re-pointed (`network_edges.yaml` untouched; contrast the Terminal rename at `79ef6a0`).
- `subnetworks.json`: byte-identical, not in the changeset.
- Known cosmetic gap, reported not patched: the mmd's fixed classDef palette has no `classtbdatp0` —
  WorldGenome is the first vault whose *class* is tbd-at-P0, so its node renders default-styled. Palette
  addition is a follow-up for the generator owner (no schema improvisation under a dispatched leg).

## 3. Other live registry surfaces

- `spec_framework_ecosystem.md` (III active-framework row, live Consumers list): VideoForge → **Videos (was
  VideoForge; renamed 2026-06-10)**. The dated DG-B/airlock narrative in the same row stays verbatim (SO-7).
- Kept verbatim per SO-7 (checked, deliberately untouched): the **"single-repo per VideoForge Amendment 1"**
  pattern citation in `spec_platform_ecosystem.md` (named precedent, matches the workspace router's usage),
  dated coordination memos (`coord_2026_05_09_v7_videoforge.md` et al.), ADRs, campaign records, skills
  examples, `STATE_archive.md`.

## 4. Ship note

Local commit only (push operator-gated). Per the 2026-06-10 deploy-model finding, the regenerated registry
reaches adna.network at the next local Vercel CLI prebuilt deploy — no deploy was run from this leg.

— Rosetta
