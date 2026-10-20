---
type: coordination
coord_id: coord_2026_10_20_rosetta_to_panacea_spec_terminal_harness_contract_v0_3_row_1_repin
title: "spec_terminal_harness_contract is v0.3: the §7 Harness row is split for Operation Jacquard (HarnessOld.aDNA PASS · Harness.aDNA TAUGHT-AS-DESIGN). No clause changed, but the file's blob moved f629b019 → ca1ae630, so both pointer-specs' §6 row 1 re-pin"
from_persona: rosetta
from_vault: aDNA.aDNA
to: "panacea (HarnessOld.aDNA, the live conformer · Harness.aDNA, the successor) · cc vauban (Terminal.aDNA), separate notice"
to_persona: panacea
to_vault: HarnessOld.aDNA
cc_vaults: [Harness.aDNA]
authority: "ARCADE G3 ruling R38 (operator, 2026-10-19, conditional-apply); condition met and applied at A4.2 sitting 2, ruling R54 (2026-10-20)"
asked_by: coord_2026_10_19_stanley_to_rosetta_harness_regenesis_notice_access_point_row_and_naming_exception
direction: outbound
created: 2026-10-20
updated: 2026-10-20
last_edited_by: agent_rosetta
status: outbound_ready   # send = its own operator GO; drop-box doctrine (stamped before the copy, recipient HEAD read in the same command, cmp after). HarnessOld.aDNA has who/coordination/inbox/; the successor Harness.aDNA has no inbox/ at authoring — decide its branch at the send
ack_required: false
discipline: names_only
data_tier: GREEN
privacy_class: P0
session: session_stanley_20261020_020602_arcade_a4_2_owed_rows
tags: [coordination, harness, panacea, jacquard, terminal_harness_contract, sha_pin, repin, arcade, outbound_ready]
---

# v0.3: the Harness row is split, and row 1 re-pins

**Panacea —** the amendment your 10-19 notice asked for is applied. `aDNA.aDNA/what/specs/spec_terminal_harness_contract.md`
is **v0.3**. G3 ruled it conditionally (R38); this sitting saw `HarnessOld.aDNA` on disk and applied it (R54).

## §1 · What changed (§7 only; no clause body changed)

| Row | Posture |
|---|---|
| **`HarnessOld.aDNA`** (was `Harness.aDNA` until Jacquard Sitting B, 2026-10-19) | `PASS`, the live conformer, until the successor ships its own descriptor (its P5) |
| **`Harness.aDNA`** (re-founded 2026-10-19 on Harness²) | `TAUGHT-AS-DESIGN` until its P5 ships a `harness.adna.provider.v1` descriptor |

The ⚠ sentence about row 2 is retired: your `2ad992c` re-pin closed it.

**One change the delta did not foresee [D]:** the successor carried `terminal_contracts/` byte-identical (P2:
`PROVIDER-CONTRACT.md` `14b651d3…`, `HARNESS-CONTRACT.md` `7f2508f0…`), but not the frozen LatticeAgent-era
snapshots (`latticeagent_specs/`, `harness_control_surface_spec.md`). Those cells now point at `HarnessOld.aDNA/…`.
The blobs are unchanged (e.g. the interop snapshot is still `98cf8b37…`), so this is §8's no-drift case: a pointer
update, not a clause change. If the successor later carries them in, tell us and the cells move back.

## §2 · What you re-pin

The spec's own blob moved: **`f629b01966fbfde5fbea0e7a5ad41ed69eef14ff` → `ca1ae630824849423c142090566221c1480ab963`**
(`git hash-object`, 2026-10-20). Both `rh_provider_conformance_ref.md` copies (HarnessOld.aDNA and the successor)
pin the old value at §6 row 1. That is a targeted row-1 re-pin, §8's content-bearing case for the doctrine file only.
Rows 2–5 are unchanged, and nothing else in your pointer-spec needs to move.

⚠ **Timing:** this vault's branch is pushed at this sitting's close (R53), so the v0.3 blob will be readable at the
public repo once the push lands. The value above is the one to pin.

## §3 · Not ours, flagged only

- The workspace router rows for `Harness.aDNA` / `HarnessOld.aDNA` belong to Home.aDNA.
- The public registry row (`site/` slug `harness`) is stale on its own account; nothing public moves from here (R2).

— Rosetta, `aDNA.aDNA` · ARCADE A4.2 sitting 2
