---
type: artifact
artifact_class: standard_delta
created: 2026-10-19
updated: 2026-10-19
status: applied   # ⛩ APPLIED 2026-10-20 at ARCADE A4.2 sitting 2 (R54): P1 HarnessOld.aDNA present · P2 14b651d3…/7f2508f0… · P3 provider_id rareharness · target blob f629b019 before the edit → spec v0.3, blob ca1ae630; plus one pointer update the delta did not foresee (the frozen latticeagent_specs/ + harness_control_surface_spec.md stayed in HarnessOld.aDNA, same blobs → cells repointed there); two re-pin notices outbound_ready (Panacea · Vauban). Prior: accepted_conditional   # ⛩ RULED 2026-10-19 at ARCADE G3 (operator R38: conditional-apply) — P1 failed at the gate (HarnessOld.aDNA absent), so spec_terminal_harness_contract.md stays byte-unchanged; the first sitting that observes HarnessOld.aDNA on disk applies the delta with no second gate. PRIOR (SO-7): proposed — a fifth G3 §7.7 line
last_edited_by: agent_rosetta
campaign_id: campaign_arcade
mission_id: mission_arcade_a3_3_profile_scaffolding
target: what/specs/spec_terminal_harness_contract.md §7 (v0.2, accepted at G1 2026-10-16)
target_blob_at_draft: f629b01966fbfde5fbea0e7a5ad41ed69eef14ff   # git hash-object at 2026-10-19T23Z; = the pin Harness.aDNA re-pinned to at 2ad992c
asked_by: coord_2026_10_19_stanley_to_rosetta_harness_regenesis_notice_access_point_row_and_naming_exception
tags: [artifact, arcade, p3, standard_delta, terminal_harness_contract, harness, jacquard, g3]
---

# §7 Harness row: proposed delta (Operation Jacquard)

> **In one sentence:** Harness.aDNA is being re-founded under the same name, so the adoption table must say which
> vault is the live conformer and which is the designed one. This is the row change, held for G3.

**For a newcomer.** The contract between a terminal and a harness has a table listing which vaults follow it. The
Harness vault is being rebuilt: the old one is renamed `HarnessOld.aDNA` and keeps working, and a new `Harness.aDNA`
starts fresh. The table should name the old one as the one that works today and the new one as designed, not yet
live.

**For a developer.** An edit to the §7 table changes this spec's **blob**. Both pointer-specs pin that blob in their
row 1 (Harness re-pinned to `f629b019…` at `2ad992c` on 10-19). Ratifying this delta therefore triggers a **targeted
row-1 re-pin** in each, the §8 content-bearing case. That is the one cost, and it is why the edit waits for one gate
instead of landing now.

## Preconditions (re-check at G3, at the object)

| # | Check | At draft (2026-10-19T23Z) |
|---|---|---|
| P1 | `test -d ~/aDNA/HarnessOld.aDNA` | **absent** [D]. Sitting B's move is still ahead; `Harness.aDNA` HEAD `3cde19d` opens its pre-stage half |
| P2 | successor `Harness.aDNA` carries `what/context/harness_core/terminal_contracts/{PROVIDER,HARNESS}-CONTRACT.md` at blobs `14b651d3…` / `7f2508f0…` | [R] Stanley's receipt says hash-checked at the fork. Re-verify by `git hash-object` at G3 |
| P3 | `HarnessOld.aDNA/what/specs/rh_provider_conformance_ref.md` exists, `provider_id: rareharness` | follows P1 |

**Re-checked at G3 (2026-10-19T23:22Z, `session_stanley_20261019_232222_arcade_g3_gate`) [D]:** P1 **absent** (`Harness.aDNA` HEAD `e489a09`: Sitting B's pre-stage half closed, the move still ahead) · P2 **PASS** (`git hash-object` → `14b651d3d0d7…` / `7f2508f0113b…`) · P3 not checkable (follows P1) · target blob still `f629b019…`. → ruled conditional (R38).

**If P1 still fails at G3,** rule the delta *conditionally*: apply it in the sitting that first observes
`HarnessOld.aDNA` on disk, with no second gate. The §7.7 line names this condition.

## The delta (replaces the Harness row, L120; adds one row)

```diff
-| **`Harness.aDNA`** (was `RareHarnessNeo.aDNA` → `RareHarness.aDNA` 2026-05-25 → elevated 2026-05-31) | Harness (`provider_id: rareharness`; forward exemplar at v0.1, live conformer now) | `what/specs/rh_provider_conformance_ref.md` (v0.3, 2026-06-07 — already repointed to the in-Harness contract copies at WS-3/M1, the precedent this re-anchor follows) | Descriptor full shape finalized (v0.3); runtime wiring at genesis-execution. ⚠ Its row 2 still reads `canonical_adr_status: proposed` — aDNA.aDNA ADR-027 has been `accepted` since 2026-07-02; a re-pin notice is staged (`who/coordination/coord_2026_10_15_rosetta_to_panacea_*`), to send once G1 signs this v0.2 (the doctrine SHA their row 1 pins changes with it). |
+| **`HarnessOld.aDNA`** (was `Harness.aDNA` until Operation Jacquard Sitting B, <date>; before that `RareHarnessNeo.aDNA` → `RareHarness.aDNA` 2026-05-25 → elevated 2026-05-31; live, read-mostly) | Harness (`provider_id: rareharness`; **the live conformer**) | `what/specs/rh_provider_conformance_ref.md` (v0.3; §6 rows 1–2 re-pinned at `2ad992c` 2026-10-19: row 1 → this spec v0.2, row 2 → aDNA.aDNA ADR-027 accepted) | `PASS` on the interim PTY, with the `stream-json` leg live. Remains the conformer until the successor ships its own descriptor (its P5). |
+| **`Harness.aDNA`** (re-founded <date> on Harness², Operation Jacquard; forked from `.adna` v8.12; no shim; persona unchanged) | Harness (successor; the recommended default harness by name, [[spec_platform_ecosystem]] §Access points, unchanged) | `what/specs/rh_provider_conformance_ref.md` (carried in at the fork with today's pins) | `TAUGHT-AS-DESIGN` until its P5 ships a `harness.adna.provider.v1` descriptor; clause sources `what/context/harness_core/terminal_contracts/` carried byte-identical, so §5's path cells resolve unchanged. |
```

Also in the same edit:
- Frontmatter `updated:` plus a v0.3 line in the version note ("§7 row split for Operation Jacquard; no clause changed").
- The adoption-posture column date `(2026-10-15)` becomes the ruling's date.
- §5's clause-source paths (`Harness.aDNA/what/context/harness_core/terminal_contracts/…`) **stay as written**, by P2.
  If P2 fails at G3, they repoint to `HarnessOld.aDNA/…` instead. Same blob, a pointer update (§8 no-drift case).

**What the delta retires.** The ⚠ sentence about the row-2 re-pin is closed by Stanley's receipt
(`coord_2026_10_19_stanley_to_rosetta_repin_receipt_rows_1_2_done`, commit `2ad992c`) and is dropped, not re-worded.

## Consequences owed after the ruling

1. Re-pin notice ×2 (outbound memos, send GO each): `HarnessOld.aDNA` (and the successor, if its pointer-spec
   carries row 1) · `Terminal.aDNA` (Vauban), whose Go-era pointer-spec is archived. The live row is the conformance
   record, so the notice is informational there.
2. **Not touched, flagged only (R2):** the public registry row `site/src/data/vaults.json` slug `harness` (display
   "RareHarness", `last_synced` 2026-05-25) is stale on its own account. Nothing public moves until the operator says.
3. **Not ours:** the workspace router row for `Harness.aDNA` / `HarnessOld.aDNA` is Home.aDNA's file. It moves by
   memo, if at all.

## §7.7 line (for G3)

| Decision | Ratified-by | Date | Status |
|---|---|---|---|
| `spec_terminal_harness_contract` §7: split the Harness row (HarnessOld.aDNA `PASS` · Harness.aDNA successor `TAUGHT-AS-DESIGN` until its P5); retire the re-pin ⚠; v0.3, no clause changed; applied when P1 holds | Stanley (operator) — R38 "conditional-apply" | 2026-10-19 | **accepted, conditional** — apply in the first sitting that observes `HarnessOld.aDNA` on disk (re-run P1–P3 + the target blob there; if P2 fails, repoint per the delta's note); then the two re-pin notices go `outbound_ready`, each its own send GO |

**Gate reference:** ARCADE G3, `session_stanley_20261019_232222_arcade_g3_gate`, AskUserQuestion at plan time; `campaign_arcade.md` §5 row G3. Trigger carried in `STATE.md` §Pending.

## Related

`what/specs/spec_terminal_harness_contract.md` §7 · §8 · [[spec_platform_ecosystem]] · [[mission_arcade_a3_3_profile_scaffolding]] ·
`who/coordination/inbox/coord_2026_10_19_stanley_to_rosetta_harness_regenesis_notice_access_point_row_and_naming_exception.md`
