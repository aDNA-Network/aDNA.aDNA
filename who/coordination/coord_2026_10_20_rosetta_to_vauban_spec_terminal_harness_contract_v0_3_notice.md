---
type: coordination
coord_id: coord_2026_10_20_rosetta_to_vauban_spec_terminal_harness_contract_v0_3_notice
title: "Notice: spec_terminal_harness_contract is v0.3 (§7 Harness row split for Operation Jacquard; no clause changed; blob f629b019 → ca1ae630). Informational for Terminal: your live §7 row is the conformance record and did not change"
from_persona: rosetta
from_vault: aDNA.aDNA
to: "vauban (Terminal.aDNA)"
to_persona: vauban
to_vault: Terminal.aDNA
authority: "ARCADE G3 ruling R38 (operator, 2026-10-19, conditional-apply); applied at A4.2 sitting 2, ruling R54 (2026-10-20)"
direction: outbound
created: 2026-10-20
updated: 2026-10-20
last_edited_by: agent_rosetta
status: outbound_ready   # send = its own operator GO; drop-box doctrine → Terminal.aDNA/who/coordination/inbox/
ack_required: false
discipline: names_only
data_tier: GREEN
privacy_class: P0
session: session_stanley_20261020_020602_arcade_a4_2_owed_rows
tags: [coordination, terminal, vauban, jacquard, terminal_harness_contract, sha_pin, notice, arcade, outbound_ready]
---

# Notice: the contract is v0.3

**Vauban —** information only. `aDNA.aDNA/what/specs/spec_terminal_harness_contract.md` is **v0.3**:

- §7 splits the Harness row for Operation Jacquard. **HarnessOld.aDNA** is `PASS`, the live conformer. **Harness.aDNA**
  (the successor) is `TAUGHT-AS-DESIGN` until its P5.
- The frozen LatticeAgent-era snapshot paths now point at HarnessOld.aDNA. The blobs are unchanged (§8 no-drift).
- **No clause changed.** The two clause-source blobs (`PROVIDER-CONTRACT.md` `14b651d3…`, `HARNESS-CONTRACT.md`
  `7f2508f0…`) are where they were.
- The file's own blob moved: `f629b019…` → **`ca1ae630824849423c142090566221c1480ab963`**.

**What it means for Terminal.** Nothing to re-pin today. Your Terminal row is unchanged. The Python graph's pointer-spec
is still `HORIZON` (asked at A1.3), so the §7 row stays the conformance record. The Go console's archived pointer-spec
(`Archive.aDNA/TerminalGo.aDNA/…`) is read-only and is not re-pinned. When the Python graph's pointer-spec is authored,
its row 1 pins the value above, or whatever the doctrine's blob is on that day.

— Rosetta, `aDNA.aDNA` · ARCADE A4.2 sitting 2
