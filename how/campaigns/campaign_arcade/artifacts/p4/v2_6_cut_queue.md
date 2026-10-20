---
type: campaign_artifact
title: "The standard v2.6 cut — the queue, assembled at the object (ARCADE A4.1 sitting 1)"
campaign_id: campaign_arcade
mission_id: mission_arcade_a4_1_standard_v2_6
created: 2026-10-20
updated: 2026-10-20
status: ratified        # ⛩ G4 SIGNED 2026-10-20 (operator R43, every row as recommended) and folded at v2.6 (local). PRIOR: input to the G4 gate (how/gates/arcade_v2_6_gate.md); nothing here is in force; adna_standard.md byte-unchanged (md5 094a3266)
last_edited_by: agent_rosetta
standard_md5_at_assembly: 094a326626036731f2894e4cda4f78cb
tags: [campaign_artifact, arcade, a4_1, v2_6, standard, queue, gate_input]
---

# The v2.6 cut — the queue

> **Plain version.** The standard (`what/docs/adna_standard.md`, v2.5) changes only when the operator signs it. This
> file lists everything waiting to go into the next version, v2.6. Each row gives where the item came from, where it
> would land, what the change is, and Rosetta's recommendation. Signing happens on the gate
> ([[arcade_v2_6_gate]]), not here. A **minor** version must not make any instance that passes today fail (§15.4),
> so every row states why it is safe on that count. *(Self-reference, Standing Order 8: this file is the §7.7
> discipline at work. An agent authors the proposal and a human ratifies it. The ratification lines are on the gate,
> and they stay blank until signed.)*

## §0 Open reads and the two rulings of this sitting

- [D] Session `session_stanley_20261019_235912_arcade_a4_1_queue_and_gate`. HEAD `1b71052` on `vitrine/design`, ahead 3 of origin (the R25/R29/R40 hold).
- [D] **Q9 is silent.** Our inbox holds nothing newer than 10-19 15:29. In AILedger main `b694975`, `inbox/` · `inbox_stanley_desk/` · `fluxer_outbox/` hold no Q9 line. Commit `28eee5ac` receipts our G3 memo and says "Q9 is Jake's line".
- [D] `HarnessOld.aDNA` is **absent**, so the R38 trigger does not fire. `adna_standard.md` md5 `094a3266…` is unchanged.
- **R41** (operator, plan time): G4 does **not** wait on Q9 for local work. Assemble the queue and author the gate now. On signature, fold and commit locally. **Publication waits on Q9:** that covers the push, the A4.2 image release, and the AEPs.
- **R42**: sitting 1 covers the queue and the gate only. The fold and the Noether reply are sitting 2.

## §1 Standard text — rows that fold into `adna_standard.md` v2.6

Anchors are re-found by `grep -nF` against the live file on 2026-10-20. The line numbers are v2.5's.

| # | Item | Source | Lands at (live anchor) | Recommendation | §15.4 (minor-safe?) | Tense |
|---|---|---|---|---|---|---|
| **A1** | aDNA.aDNA ADR-063 **E-1**: §4.1 requirement levels read against §5.5 | aDNA.aDNA ADR-063 · `how/missions/artifacts/primer/errata_v2_6_drafts.md` §E-1 | §4.1 table: `STATE.md` row **L233**, `AGENTS.md` row **L234**, plus one sentence under the table | **Accept** as drafted | Yes. It relaxes §4.1 for Starter to match what §5.5 and the validator already enforce, so no instance un-conforms | PASS at the cut |
| **A2** | aDNA.aDNA ADR-063 **E-2**: §15.1 gains the archive-don't-delete sentence that §6.5 cites | aDNA.aDNA ADR-063 · errata drafts §E-2 | §15.1, after **L1119** (`- Session history follows the same…`) | **Accept** as drafted | Yes. It states practice §6.5 already cites; no check changes | PASS at the cut |
| **A3** | aDNA.aDNA ADR-066 clauses 1–4: **already ACCEPTED at G3** (R34–R37). These are fold-only rows, so no new line | `artifacts/p3/standard_deltas_adr_066.diff.md` (7 hunks) | Hunk 1 **L525** · 2 **L538** · 3 **L559 + L562** · 4 after **L666** · 5 **L938** · 6 after **L1119** · 7 after §15.4 (**L1131–1146**; no §15.5 exists) | **Fold as accepted**. All 7 anchors reproduce at their drafted lines [D] | Yes, as argued in aDNA.aDNA ADR-066 (overlay never relaxes a base MUST; an unknown profile is unverified, never failed; §15.5 is MAY except for a declared profile, and no profile is listed yet) | TAUGHT-AS-DESIGN → PASS at the cut |
| **A4** | R10: §19.6 ADR-numbering line + §6.4 prefixes `adr_` · `campaign_` · `coord_` | `artifacts/p1/vauban_rulings_packet.md` R10 (ratified 2026-10-16, rule only; the **words** are signed here) | §19.6 (L1370–1381), after "Template sections"; §6.4 table (L610–618), three rows appended | **Accept**, text T-1 | Yes. SHOULD only; §6.4 is a RECOMMENDED table | PASS at the cut |
| **A5** | q9: `ceil(bytes/4)` as the SHOULD method for `token_estimate` | card Notes q9 · Lister U23 c | §5.5 Level 2 item 9 (**L547**), one sentence | **Accept**, text T-2 | Yes. It fixes the unit of an existing required key as a SHOULD. A file carrying another estimate stays conformant | PASS at the cut |
| **A6** | `spec_graph_exchange` cross-reference | `what/specs/spec_graph_exchange.md` §8 (accepted G1, R11), last bullet | §5.3 `federation/` row (**L457**) gains the `exchange/` example; new **§19.7 Graph Exchange** (pointer only); the §19 Scan line count goes "Six" → the derived count | **Accept**, text T-3 | Yes. Optional extension, pointer only | spec PASS (accepted); Exchange serving **TAUGHT-AS-DESIGN** (L2 v1 built 0.0.45, not serving, Exchange.aDNA ADR-066 §2.6) |
| **A7** | The campaign layer codified | `how/backlog/idea_upstream_standard_codify_campaign_layer.md` (proposed) | New **§19.8 Campaigns** (optional extension, MAY/SHOULD) | **Accept as an optional extension**. Normative-core placement (a §9 MUST) waits for the v3.0 window | Yes. Opt-in; nothing is required of an instance without campaigns | PASS at the cut (this vault runs it) |
| **A8** | q1: Noether's **M-A1 v2.6 SHOULD rider** (multi-modal memorialization), adopted as **aDNA.aDNA ADR-067** (seat held 10-16) | `LatticeProtocol.aDNA/how/campaigns/campaign_academie/artifacts/m_a1_package/` (LP HEAD `ea4ebcb`, read only): `adr_draft_…` clauses 1–4 · `aep_0003_…` Step 1 | New **§19.9 Memorialized Data Models** (Step 1's six items, SHOULD/MAY) + an informative roster **by pointer** (not copied) | **Accept clauses 1, 2 and 4 for v2.6.** Clause 3 (the v3.0 MUST) is **logged for the major window, not ruled**. aDNA.aDNA ADR-067 is drafted at fold time from the LP draft, with Noether credited. In force only after the six open questions are answered by memo (Part C) | Yes. SHOULD/MAY only; the stamp check is a **warning**; a missing master is "unverifiable", never failed (clause 4) | TAUGHT-AS-DESIGN (LP's `lattice_core` is the live reference implementation) |
| **A9a** | q10: a minimal `federation_ref` clause | Ledoux 10-19 · `who/coordination/coord_2026_10_19_rosetta_to_ledoux_wrapper_fields_provisional_reading.md` | §5.3, one sentence under the `how/` table (after **L457**) | **Accept**, text T-4. Wrapper meaning only (Noether 10-03 item 3: the key has three meanings; the other two are not touched) | Yes. SHOULD; a reader treats the block as *declared*, never verified | PASS at the cut |
| **A9b** | q10: a **closed** wrapper `status` vocabulary | same | — | **Defer** to the v3.0 window or its own ADR. Re-derived 2026-10-20 [D]: 19–23 distinct values depending on normalisation, two of them free prose, ~40% of wrappers carry none. A closed set needs the owners' mapping, and a closed MUST is a major change | — | HORIZON |

**Derived:** §1 has 10 rows. A3 is carried. A9b is deferred. **8 rows need signature** (A1 · A2 · A4 · A5 · A6 · A7 · A8 · A9a).

### Fold order (sitting 2)

1. §4.1 (A1)
2. §5.3 (A6 row, A9a sentence)
3. §5.5 (A3 hunks 1–3, A5)
4. §6.4 (A4)
5. §7.2 (A3 hunk 4)
6. §11.3 (A3 hunk 5)
7. §15.1 (**A2 first, then A3 hunk 6's purge paragraph**). Hunk 6 already carries E-2's sentence as its first paragraph. If A2 is declined, use the hunk's own alternate opening ("Exception to the practice of never deleting records:")
8. §15.5 (A3 hunk 7)
9. §19 Scan line + §19.6 (A4) + new §19.7–§19.9 (A6 · A7 · A8)

Then the **four surfaces move together** (§15.4 checklist, v2.5, aDNA.aDNA ADR-046): title · `updated` · one `<!-- v2.6 … -->` header line naming every accepted row · the *End of …* footer.

## §2 Candidate texts, so the gate signs words

**T-1 (A4).** §19.6, after "Template sections":
> **Numbering** (v2.6): an ADR number SHOULD be qualified by the vault that holds it wherever it is cited outside that vault (`aDNA.aDNA ADR-066`, not `ADR-066`). A campaign that numbers its own ADRs SHOULD prefix them with the campaign's one-letter code (`ADR-B08` is a campaign's ADR 08, not the vault's `ADR-008`).

§6.4 rows: `| adr_ | Architecture Decision Records (§19.6) |` · `| campaign_ | Campaign directories and charters (§19.8) |` · `| coord_ | Coordination notes (§11) |`.

**T-2 (A5).** Appended to §5.5 Level 2 item 9:
> `token_estimate` SHOULD be computed as `ceil(bytes / 4)` over the file's UTF-8 bytes unless the instance's `MANIFEST.md` declares another method (v2.6).

**T-3 (A6).** In the §5.3 `federation/` row, append "(e.g. `how/federation/exchange/` for a graph published through an aDNA Exchange)". New section:
> ### 19.7 Graph Exchange
> A graph MAY be published, discovered and fetched as an artifact through an aDNA Exchange. The standard-side contract is `aDNA.aDNA/what/specs/spec_graph_exchange.md`. It cites the Exchange's own specifications and copies none of them. A publishing graph places its consumer wrapper at `how/federation/exchange/` (§5.3).

**T-4 (A9a).** Under the §5.3 table:
> A federation wrapper's `CLAUDE.md` SHOULD carry a `federation_ref:` block naming at least `source_vault` and `version` (the version is recorded as the source states it, never normalised), and SHOULD add `pinned_at_commit` when it pins a commit. A reader treats the block as what the consumer **declares**, not as a fact the source has verified (v2.6).

**T-5 (A7).** New section, about 10 lines in sitting 2, covering these heads:
- (a) Campaign → Mission → Objective, with campaign missions contained at `how/campaigns/<id>/missions/`;
- (b) phase gates are human gates, recorded per §7.7;
- (c) a mission SHOULD carry a short after-action review before `status: completed`;
- (d) archive-never-delete applies (§15.1);
- (e) the OODA cascade is MAY.

The words are drafted from the idea file's (a)–(e) list. The gate signs the heads, and the fold's wording is checked against them.

**T-6 (A8).** §19.9 restates AEP Step 1's items 1–6 (SHOULD/MAY) and the Canvas `source_sha256` carve-out. It names the qualifying test (clause 1: crosses a graph boundary; the owner judges). It points at the roster by path and says the roster is informative.

## §3 Same gate, not standard text

| # | Item | Lands in | Recommendation | Tense |
|---|---|---|---|---|
| **B1** | q2: `spec_graph_exchange` §5.1 one-clause amendment (Themis F-164-01): "v1 = the six rules executing; the stamp moves only in the commit that runs all six" | the spec, v0.1 → v0.2 | **Accept** | TAUGHT-AS-DESIGN (built, not serving) |
| **B2** | q3: L2-4 v1.1 wording, *a real directory at graph root whose `CLAUDE.md` carries `federation_ref:`* (symlinks are Standing-Rule-9 shims and pass) | the spec, v0.2 | **Accept.** q6 re-measured [D] 2026-10-20 by `lstat` + `git ls-files --error-unmatch`: **3** real directories, each with a tracked `CLAUDE.md` carrying `federation_ref` (`WilhelmAI.aDNA/siteforge` 5 · `RiemannCommons.aDNA/iii` 1 · `ASOAtlas.aDNA/iss` 3). Weighing them is Rosetta's + Hestia's. Nothing goes to the owners from here | PASS (the count) |
| **B3** | q4: Derivability as an 11th compliance dimension | **not the standard.** The dimensions live in `CLAUDE.md` §Compliance Dimensions + `compliance_checker.py` [D] (`grep -ci "compliance dimension" adna_standard.md` = 0) | **Route to A4.2** (v8.13 image) | HORIZON |
| **B4** | q5: `lip_registry.md` §2 rows, part (b) | `who/governance/lip_registry.md` §Ratification | **Ratify the steward-confirmed rows**: 0003 (Noether 10-18) · 0005 · 0007 (ours). **Keep proposed:** 0006 (Venus, unconfirmed) · 0008–0011 (Canvas's own register is the basis; Mondrian's 10-16 handshake is a question, not a confirmation). **Record:** 0001 · 0002 · 0004 as predecessor-only | PASS (the rows ratified) |
| **B5** | q8: `spec_platform_ecosystem` threat-model hook → `Terminal.aDNA/how/backlog/idea_access_point_threat_model.md` | that spec, v0.4 → v0.5 | **Accept**, sitting 2 | PASS (pointer) |
| **B6** | aDNA.aDNA ADR-062 annex rider ii: path `what/latticeprotocol/` → `what/schemas/` (Noether 10-10; LP D-AC-25 (b)) | aDNA.aDNA ADR-062 Annex, dated annex erratum; the old path is kept struck (archive-never-delete) | **Accept.** The annex binds nothing; the change saves a reader's detour | PASS |

### Records (no signature line)

- **The four-surface version-cut checklist** is already in force: §15.4, v2.5, aDNA.aDNA ADR-046 [D] (L1145). The cut obeys it, and there is no new text. *(Finding: the card's queue row named an existing rule as a pending one.)*
- **q6** is re-measured (B2). **q7**: F-AC-44 is read as fixed at LP `f834cc7`. The package's L71 / L113 / L193 mentions stay byte-unchanged in LP.
- **q11** and A8: **AEPs owed at publication only.** One for aDNA.aDNA ADR-066, naming the profile and not its steward; one for aDNA.aDNA ADR-067 (Noether's AEP-0003 draft, renumbered at filing). `site/src/content/proposals/` holds `aep-0001` · `aep-0002`, so the next free is **0003**, which matches Noether's working name. Filed when the hold lifts (R2 + Q9 + R41). Until then the cut records both as "AEP owed".
- **The ACADÉMIE P4 heads-up** (10-16) and **q1** are the **same package** [D]: the heads-up says "One package, card M-A1". The card's "rule it when it lands" item has landed and is ruled as A8.
- **q10 counts** do not reproduce exactly [D]. A3.3 found 392 wrappers · 193 with `source_vault` + non-null `version` · 183 `pinned_at_commit` · 18 status values. This sitting's re-run of the same line predicate finds 405 · 203 · 192 · 23 (the predicate's own normalisation, and the fleet moved). The shape holds: about half cite the pair, about half pin a commit, and the vocabulary is open-ended. So T-4 cites no numbers, and A9b defers.

## §4 Part C: the Noether reply's positions (sitting 2 writes the reply, `outbound_ready`)

One memo answers **10-03 · 10-07 · 10-08 · 10-10** (the card names three; the 10-03 frontmatter master is the fourth `ack_required` and rides the same reply). The gate signs these positions as one line, with per-item overrides allowed.

| Memo · item | Position (recommended) | Lands |
|---|---|---|
| 10-03 #1 frontmatter master | **Acknowledged, not adopted at v2.6.** It stays `proposed` at LinkML.aDNA as the candidate for the v3.0 window. At 58.8% fleet pass it is a measurement instrument first | reply only |
| 10-03 #2 date-loader convention (F-AC-6) | **Accept** as validator guidance (convert dates to ISO strings before validation) | `adna_validate.py` docs, A4.2 |
| 10-03 #3 `federation_ref`'s three meanings | v2.6 names only the **wrapper** meaning (A9a). Unifying or splitting it is for later, with Astro + Operations | reply |
| 10-03 #4 C3/C4 correction | Noted | reply |
| 10-03 #5 `ontology.md` vs master | **Accept both fixes** for the image: the Base Invariance row cites the aDNA.aDNA ADR-044 exception; `entity_count` 26 → 28. Also: **`completed`** canonical, with `complete` a registered alias. `DirectoryIndex` is **declined** as an ontology entity (a profile class only). List-form `provenance` (700 records, 697 SuperLeague) is **not admitted**; SuperLeague is told by its own channel | `.adna/` via A4.2 |
| 10-07 #1–#6 lattice tree | **Accept all six**: canonical interface form at the next cut of `lattice_interop.md` + the `binder_generation` example · `port` informative (§2.5) · `lattice_validate.py` consumes the generated face · fix the example, not the doc (#4) · fix `claude_code.lattice.yaml` (#5, 66 vaults via the image) · fix both composition misfits | `what/lattices/`, A4.2 |
| 10-07 #7 `extensions:` block | **Defer** to its own decision with P3 numbers | reply |
| 10-07 #8 enum growth / `lattice_ref` | **Decline** `lattice_ref` (`module` + `ref: lattice://…` already validates). **Defer** `manual` / `L0` (one file each) | reply |
| 10-07 #9 + 10-08 #3 CEL | **Accept**: a `description` on `condition` in `lattice_yaml_schema.json` saying it is a CEL expression (LinkML.aDNA ADR-018). No check is added | schema, A4.2 |
| 10-08 #1 `deep_research` lexical comparison | **Confirm** the suggested rewrite (`effort_level in ['standard', 'comprehensive']` / `in ['minimal', 'focused']`). This is a real defect: a comprehensive run skips the review gate | example + `.adna/` via A4.2 |
| 10-10 #1 annex path | **Yes** (B6) | aDNA.aDNA ADR-062 annex |
| M-A1 six open questions (gate A8) | Q1 licences across faces: **open**, standard takes no position before v3.0 · Q2 descriptor/stamp keys: **the profile** (Pāṇini), not standard text · Q3 placement: **§19.9 optional extension** for v2.6 · Q4 v3.0 level: **Full only**, revisit in the window · Q5 stamp: **a pattern**; a pin file (`upstream.json`) is **accepted** as an alternative to a stamp for byte copies · Q6 roster audit: **the owner (LP)**, re-measured at each standard minor cut | reply; A8 in force after it |

## §5 Derived

- Signature lines on the gate: **8 (§1) + 6 (§3) + 1 (Part C) = 15**.
- Carried with no line: A3 (7 hunks).
- Deferred: A9b, plus A8's clause 3 to the major window.
- Records: 5.
- Every ADR number in this file is vault-qualified by hand (rule 3). The checks: `grep -nE '(^|[^.A-Za-z])ADR-0[0-9]{2}'` shows each hit preceded by a vault name, and `ADR-B08` / `ADR-008` sit inside T-1's quoted example text.
- No company name appears in any text bound for the image (R2).
