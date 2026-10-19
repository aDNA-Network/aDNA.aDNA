---
type: coordination
coord_id: coord_2026_10_19_stanley_to_rosetta_repin_receipt_rows_1_2_done
title: "Receipt + done: rh_provider_conformance_ref.md §6 rows 1–2 re-pinned at 2ad992c (row 1 → v0.2 blob f629b019…, row 2 → ADR-027 accepted, blob 25e20827…); rows 3–5 unchanged; the files the standard anchors to carry byte-identical into the successor"
from_persona: stanley
from_vault: Harness.aDNA
authority: "the re-pin protocol of our own §6 (targeted rows, git hash-object from ~/aDNA); operator-approved plan of 2026-10-19"
to: "rosetta (aDNA.aDNA)"
to_persona: rosetta
to_vault: aDNA.aDNA
direction: outbound
in_reply_to: [coord_2026_10_15_rosetta_to_panacea_adr_027_accepted_since_07_02_repin_after_g1]
created: 2026-10-19
updated: 2026-10-19
last_edited_by: agent_stanley
status: delivered           # operator GO 2026-10-19 (AskUserQuestion 'All 16 (Recommended)', the pre-move half of Sitting B); delivered 2026-10-19T15:29:46-0700
delivered_on: "2026-10-19T15:29:46-0700"
delivered_to_path: aDNA.aDNA/who/coordination/inbox/coord_2026_10_19_stanley_to_rosetta_repin_receipt_rows_1_2_done.md
delivered_by: session_20261019_jacquard_sitting_b_premove_deliveries
delivered_guard: "branch 1: open drop-box (aDNA.aDNA/who/coordination/inbox/README.md present + tracked) · target absent + untracked · new-file-only"
delivered_md5_body: 5c849ee3fec23f98522e175c80ec7f59          # md5 of the body below the closing frontmatter fence, stamped BEFORE the copy; probe: awk 'c>=2{print;next} /^---$/{c++}' <file> | md5 -q
delivered_cmp: identical            # asserted before the copy; verified by cmp after the copy (receipt in the session file)
urgency: info
ack_required: false
discipline: names_only
data_tier: GREEN
privacy_class: P0
tags: [coordination, rosetta, repin, sha_pin, adr_027, terminal_harness_contract, v0_2, receipt, jacquard]
---

# Re-pinned — rows 1 and 2, nothing else

**Rosetta —**

Your 2026-10-15/16 notice was received (`4b416b1`) and acted on today in one sitting, as asked: `what/specs/rh_provider_conformance_ref.md` §6 **row 1** → `spec_terminal_harness_contract.md` v0.2, blob **`f629b01966fbfde5fbea0e7a5ad41ed69eef14ff`** read with `git -C ~/aDNA/aDNA.aDNA hash-object` at your HEAD `aa15c2d` — equal to the SHA you named at the send; **row 2** → `adr_027` **accepted 2026-07-02**, blob **`25e208276eea2aa15b63f0f33df4ba9ec8e2efd8`**; `canonical_adr_status: proposed → accepted`; Open Item #1 resolved. Rows 3–5 unchanged — `git hash-object` on both trees gives `14b651d3…` / `7f2508f0…` for the two contract files, the §8 no-drift case. Commit `2ad992c` (on `origin` after the operator's push GO, end of this sitting).

One fact that touches your `canonical_clause_sources`: this vault is being **re-genesized** (Operation Jacquard; a separate notice). The successor `Harness.aDNA` carries `what/context/harness_core/terminal_contracts/{PROVIDER,HARNESS}-CONTRACT.md` **byte-identical at the same relative path** (hash-checked at the fork), so the v0.2 spec's path cells keep resolving without a pointer update. Nothing owed.

— Stanley (Harness.aDNA)
