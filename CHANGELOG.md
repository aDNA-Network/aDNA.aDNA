# Changelog

All notable changes to the aDNA knowledge architecture are documented in this file.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## Version Policy

aDNA tracks **two independent version numbers**:

| Track | File | Field | What it covers |
|-------|------|-------|---------------|
| **Governance** | `CLAUDE.md` | `version` (frontmatter) | Vault structure, agent protocol, safety rules, templates, skills |
| **Standard** | `what/docs/adna_standard.md` | Document title | Normative specification — triad structure, object schemas, FAIR metadata |

Both tracks use **Major.Minor** versioning (no patch level):

| Change type | Major bump | Minor bump |
|-------------|-----------|------------|
| **Governance** | Breaking changes to vault structure, CLAUDE.md format, or frontmatter schema | New features, templates, skills, context topics, non-breaking additions, corrections |
| **Standard** | Breaking changes to triad structure, object schemas, or FAIR envelope format | New sections, clarifications, federation stubs, factual fixes |

**Canonical version location**: `CLAUDE.md` frontmatter `version` field (governance track). The migration system (`how/migrations/`) uses this field for pre-flight checks.

Changelog entries are organized by **governance version** (primary heading). Standard version changes are noted within entries when they coincide.

---

## [Unreleased]

### 2026-10-21 (v) — v8.14 rulings: six decisions taken after a review; two contradictions found in the standard itself

- **Reviewed, then ruled.** Stanley asked for a careful second look at the six recommendations. Every premise was re-checked across the fleet and the published template; four recommendations changed; the reviewed set was approved.
- **Written in this vault (not yet published):**
  - campaign missions gain `executor_lane`, `gate` and `depends_on`. `unblocks` was not added: it is the reverse of `depends_on`, and a reverse list kept by hand drifts;
  - campaign missions gain an acceptance-coherence check: before a budget is ratified, the author confirms each method can actually satisfy each test, and records which pairs were checked;
  - campaigns gain two rules for checks: a check must have been seen to fail on purpose, and must say "cannot verify" rather than pass when it did not reach its target;
  - the frontmatter schema stops requiring `status` on index and correspondence files, as the standard already says. The fix was proven to fail when its rule is removed.
- **Found: the standard contradicts itself twice.** §3.5 says projects SHOULD be named like `ProjectName.aDNA/` and then says the name MUST be lowercase; 124 of 133 projects on this machine are PascalCase. Appendix B looks for missions under `type: mission` while every template writes `type: plan`. Both are queued as errata for the next standard window (v2.7), alongside two older asks that had been carried through three template releases because a template release cannot change the standard.
- **Corrected:** one triage row from the first sitting claimed work was still owed that had already shipped at v8.12.
- **Held:** refreshing the L1 setup skill. The repository it should point to is private, so the name should not go into the public template without a decision.

### 2026-10-21 (u) — v8.14 queue opened: staging ledger authored, eleven template rows written locally, stopped for operator rulings

- **New mission:** `how/missions/mission_template_release_v8_14.md`, a standalone mission rather than a campaign (operator, plan time). Its staging ledger is `how/missions/artifacts/v8_14/v8_14_release_ledger.md`, **proposed, not fired**.
- **Written in this vault (not yet in the published template):**
  - campaign and campaign-mission templates gain `executor_tier` and token-budget fields, with `token_budget_actual` as the one actuals key;
  - the coordination memo template gains `to:` · `reply_to:` · `status: staged` → `delivered`;
  - campaign CLAUDE files get a ≤ 200-character live pointer;
  - `skill_new_entity_type` says mass nouns stay singular;
  - `skill_mesh_probe_discipline` rule 1 now bounds a probe with `timeout`, because `ping`'s `-t`/`-W` flags mean different things on macOS and Linux (Venus's finding);
  - `skill_template_release` gains Step (g), the specification mirror;
  - four stale version or tense lines are corrected.
- **Found:** the script that mirrors the specification onto the website hard-codes version `2.2`. Re-running it as the backlog idea described would have turned the live page from 2.5 back to 2.2. The new skill step checks the version against the source first.
- **Triage:** thirteen v8.13-lane ideas the last release never carried are listed with a proposed in / defer / hold for each. Most were already accepted on 2026-10-03.
- **Received:** Venus (v8.13 skill compared; nothing owed back) and Stanley of `Harness.aDNA` (three pointers that now describe `HarnessOld.aDNA`; recorded in ledger §2d).
- **Owed:** the operator's six rulings at ledger §4; then the P5 and P7 ADR drafts (or carry them again); then the fire, on its own GO.

### 2026-10-20 (t) — GARNIER holding sitting: the Framework table derived (Aldus's row written); four template gaps filed; reader stimulus back up

- **`what/specs/spec_framework_ecosystem.md` v0.1 → v0.2.** The Active Frameworks table had one row (III). It now has twelve, derived from the fleet's own MANIFEST files rather than typed in: Git · Documents · OnWriting · LinkML · TypeScript · Organization · VisualDNA · Atlantis · React · Tailwind · Hardware. Documents.aDNA's row carries the wording its operator ruling gave it. A note under the table says which fields were read, and what that reading cannot see.
- **Filed:** `how/backlog/idea_upstream_template_gaps_from_documents_genesis.md`. Four gaps a brand-new project had to patch on day one (coordination memo fields · `executor_tier` on missions · a cap on a campaign's live pointer · a plural-directory rule that has no exception for words like `context`). All four were checked still open, both here and in the published template; queued for v8.14.
- **Received:** Aldus's memo, plus two of Hestia's ideas (one spelling for version fields; a Windows sibling of `OSX.aDNA`). A reply to Aldus was delivered to Documents.aDNA's inbox.
- **GARNIER:** the local preview the three readers will see is running again, byte-identical to its frozen record (15 of 15 pages). The campaign still waits on those readers.

### 2026-10-20 (s) — ARCADE A5.2: campaign AAR, graduation, close → G5 closed, Operation ARCADE completed

- **Campaign AAR** (`how/campaigns/campaign_arcade/artifacts/p5/aar_campaign_arcade.md`): what ARCADE changed (aDNA.aDNA ADR-064–067 · three specs re-anchored · standard v2.6 inside template v8.13 · AEP-3 + AEP-4 · the GARNIER DP3 (i) amendment) and the budget, re-derived from every card: 1,055 → 1,135 kT across 14 missions (×1.08). Thirteen carries are handed on by name. No decadal pass was run (R64).
- **Correction:** the A5.1 amendment said two missions never recorded a budget actual. They had, under a different field. A dated erratum is appended to the amendment (the ratified rows are kept), and the three cards now use one field name.
- **Graduated:**
  - `what/patterns/pattern_profile_upstream_fold_path.md` (proposed): how a profile's findings reach the standard, step by step, without either side editing the other's files;
  - `how/backlog/idea_upstream_release_spec_mirror_regen.md`: the release skill must regenerate the site's copy of the standard (v8.14, high priority).
- **Closed (R65):** the charter is `completed`, with its §7.7 close block. GARNIER is again the only active campaign.

### 2026-10-20 (r) — ARCADE A5.1: the GARNIER amendment ruled in advance; VITRINE superseded → A5.1 completed, CURRENT A5.2

- **GARNIER DP3 item (i), ruled in advance (R59, R61):** `campaign_garnier/artifacts/amendments/arcade_amendment_dp3_item_i.md` was accepted as recommended. The nineteen ARCADE claim rows now have lanes and five ship-order conditions (HAUSSMANN register §28.5; derived counts unchanged). Documentation review gains an append rule and tranche T13 for AEP-3 + AEP-4, plus a conditional profile row. DP3 itself still waits on the reader records.
- **VITRINE (R62):** `campaign_vitrine` is closed as `superseded`. It was never ratified, its site scope was absorbed by GARNIER, and its Exchange sentence was superseded by register rows R-193 · R-195 · R-199. Its body is untouched.
- **Found on the live site:**
  - the specification pages still render standard v2.5, because the v8.13 release never regenerated the site's copy of the standard (carried to v8.14 / P2.2, R63);
  - the Exchange and Terminal registry cards still read `planned`, because the 10-16 regeneration is undeployed.
- **Delivered:** the held Harness.aDNA copy of the 10-20 Panacea notice (peer quiescent).

### 2026-10-20 (q) — ARCADE A4.2 sitting 3: v8.13 fired (standard v2.6 published) and deployed; AEP-3 + AEP-4 filed; five memos delivered → A4.2 completed, CURRENT A5.1

- **Template release v8.13 (R56):** `aDNA-Network/aDNA` `223ecc1` + annotated tag `v8.13`. Standard v2.5 → v2.6, governance 8.12 → 8.13, templates 32 → 33, skills 33 → 34. Fired under a conditional pre-grant; every condition was a command with an output, and all held at the push. Fresh-clone smoke S1–S9 passed.
- **Image-staged copies:** four new files (`pattern_channel_proof`, `skill_mesh_probe_discipline`, `template_profile_spec`, `what/docs/profiles/AGENTS.md`) shipped as de-narrated copies kept beside the ledger. The dev copy of the profiles list named the steward's graph, which a public copy may not (R2).
- **Deploy tail (R57):** the trust page shows v8.13; a changelog entry; **AEP-3** (memorialized data models) and **AEP-4** (conformance profiles and release integrity) filed as `accepted`, not `final`. AEP-4 says plainly that it was decided before it was filed. Prod `c7d152a1`.
- **Sends (R55, R58):** Aspasia · Panacea (the Harness.aDNA cc held: no inbox, peer live) · Vauban · Noether · Venus.
- **This vault:** `MANIFEST.md` standard row v2.6; `skill_mesh_probe_discipline` active and counted with the base skills (28 + 30).
- A4.2 completed (AAR on the card). **P4 complete. CURRENT → A5.1.**

### 2026-10-20 (p) — ARCADE A4.2 sitting 2: the v8.13 owed rows authored; ledger questions ruled; v2.6 errata before publication; Q9 answered → branch pushed → CURRENT A4.2 sitting 3

- **Canvases (f1):** the four example canvases now carry the Canvas Standard v2.5.0 partition. `hello_world` is a generated view of its lattice, and the three templates are primary and claim no source. Hashes come from `canvas_std` and validate at `adna_native` with 0 errors.
- **Redaction (f2):** `skill_l1_upgrade.md` no longer carries a real overlay address. It uses placeholders resolved in the node vault, with RFC 5737 examples, at three lines (the count of one was wrong).
- **New skill (MP):** `skill_mesh_probe_discipline`, eight rules for any reachability claim about a mesh peer, generalized from Network.aDNA with no addresses or host names. Skills 57 → 58.
- **Forge ecosystem (R1):** `spec_forge_ecosystem` §Active Forges gains Design.aDNA (Rand's row).
- **Schema (R48):** `lattice_yaml_schema.json` records that the validator's face admits `agent` while this enum keeps four values. `entity_count` 27 ships.
- **Standard v2.6 errata (R51–R52, before publication):** §19.9 item 5 admits a pin file for a byte-for-byte copy, which fixes a seam our own vendored face fell into; item 2 says "no normalization"; the roster is marked as held privately. aDNA.aDNA ADR-067 carries an erratum note; the decision is unchanged.
- **Doctrine (R50):** `doctrine_credential_handling` §5.3 Holders proposed (every holder of a retiring credential is named and told first). It is not in force until signed. The Aspasia reply is `outbound_ready`.
- **Contract (R54):** `spec_terminal_harness_contract` v0.3 splits the Harness row for Operation Jacquard (HarnessOld.aDNA `PASS`, the successor `TAUGHT-AS-DESIGN`). No clause changed. Re-pin notices are `outbound_ready`.
- **Hold lifted (R53):** Jake answered Q9 (*"Yes, push now, anchoring excluded"*). The condition was verified at aDNA.aDNA ADR-066, and the branch was pushed at close.
- **Ledger:** all owed rows authored or carried (P5 + P7 → v8.14); §4 Q1–Q5 answered. v8.13 has not fired; that is its own GO.

### 2026-10-20 (o) — ARCADE A4.2 sitting 1: Noether reply delivered (aDNA.aDNA ADR-067 in force); v8.13 ledger; lattice-tree + validator fixes local; push still held → CURRENT A4.2 sitting 2

- **Delivered (R45):** the Noether reply → `LatticeProtocol.aDNA/who/coordination/inbox/` (HEAD `ea4ebcb`, cmp identical, body md5 `7377c88d` both sides, re-synced). **aDNA.aDNA ADR-067 is in force** from 2026-10-20T01:10:09Z.
- **Lattice tree (G4 row C1):** `deep_research` conditions → CEL membership (a comprehensive run used to skip the review gate) · `claude_code` passes its own schema (F-AC-22; carried to 66 vaults at the fire) · `binder_generation` canonical interface form and composes · `full_therapeutics` + `composed_therapeutics` seam directions · `lattice_interop.md` v1.1.0 · `condition` described as CEL · 19/19 examples pass the canonical schema and the LinkML face.
- **Validator:** `lattice_validate.py` reads its enums from a vendored, pinned copy of the lattice master's face (`faces/`), so they can no longer drift. `adna_validate --governance` gains the **stamp-currency** check (aDNA.aDNA ADR-067 clause 4: warning on mismatch, unverifiable never fails).
- **Compliance:** **Derivability**, the 11th dimension (d11, gap G-015, registries only; tiers unchanged for all 111 existing objects). Finding: `CLAUDE.md` said "0–5 each, 50 max"; the checker has always scored 0–3. Corrected to 0–3 / 33. `lip_registry.md` declares first. Three registries surface in the third state.
- **`what/ontology.md`:** the Base Invariance row cites aDNA.aDNA ADR-044; `completed` is canonical and `complete` an alias.
- **Ledger:** `artifacts/p4/v8_13_release_ledger.md`: 15 rows local, 6 owed (f1 · f2 · mesh-probe · P5 · P7 · Rand's row), five fire-gate questions.
- Campaign: A4.2 stays **active** (the fire waits on Q9); STATE ⏭ (o). **Committed locally; push held (R44), ahead 12.**

### 2026-10-20 (n) — ARCADE G4 signed: standard v2.5 → v2.6 (local, unreleased); aDNA.aDNA ADR-063 + aDNA.aDNA ADR-067 accepted; A4.1 complete → CURRENT A4.2

- **Standard v2.6 (folded locally; released only with v8.13, which waits on Q9):** §4.1 requirement levels read against §5.5 (aDNA.aDNA ADR-063 E-1) · §15.1 archive-don't-delete (E-2) + the purge exception · conformance **profiles** `<level>+<profile>` + `who/coordination/` optional at Starter + `data_tier` + new **§15.5 release integrity** (aDNA.aDNA ADR-066) · §5.3 `federation_ref` minimum + `exchange/` example · §5.5 `token_estimate` = `ceil(bytes/4)` SHOULD · §6.4 `adr_`/`campaign_`/`coord_` + §19.6 ADR numbering · new **§19.7 Graph Exchange**, **§19.8 Campaigns**, **§19.9 Memorialized Data Models** (aDNA.aDNA ADR-067). Minor: no v2.5-conformant instance un-conforms (§15.4).
- **Accepted (operator R43, "Signed as recommended"):** `how/gates/arcade_v2_6_gate.md`, all 15 lines. That covers aDNA.aDNA ADR-063 · **new aDNA.aDNA ADR-067** (adopted from Noether's LatticeProtocol.aDNA draft; clause 3 logged for v3.0) · `spec_graph_exchange` v0.2 · `spec_platform_ecosystem` v0.5 · the aDNA.aDNA ADR-062 annex erratum · the `lip_registry.md` rows · two backlog dispositions.
- **Staged:** one reply to Noether answering four memos + the M-A1 six questions, `outbound_ready`.
- Campaign: A4.1 **completed**; prompts **CURRENT → A4.2**; STATE ⏭ (n). **Committed locally; push held (R41).**

### 2026-10-20 (m) — ARCADE A4.1 sitting 1: the v2.6 queue assembled; the G4 gate authored; push still held → CURRENT G4

- **Proposed (gate input):** `how/campaigns/campaign_arcade/artifacts/p4/v2_6_cut_queue.md`, everything waiting for standard v2.6. Each row carries its source, its live anchor (re-found by `grep -nF`), a recommendation, a §15.4 minor-compatibility note and a tense label. There are 8 standard rows to sign, aDNA.aDNA ADR-066's 7 hunks carried (accepted at G3), 6 rows outside the standard, and one set of reply positions for Noether.
- **Authored:** `how/gates/arcade_v2_6_gate.md`, the G4 gate (15 ratification lines, all blank).
- **Rulings R41–R42:** local work does not wait on Q9; publication (push · image release · AEPs) does. Sitting 1 covers queue + gate; the fold and the Noether reply are sitting 2.
- `what/docs/adna_standard.md` is **byte-unchanged** (md5 `094a3266`). Campaign: A4.1 `in_progress`; prompts **CURRENT → G4** (sitting-2 prompt authored); STATE ⏭ (m). **Committed locally; push held (R41).**

### 2026-10-19 (l) — ARCADE G3 ruled: aDNA.aDNA ADR-066 accepted; the Lannes G3 memo delivered; push still held → CURRENT A4.1

- **Accepted (operator §7.7, R34–R37):** `what/decisions/adr_066_conformance_profiles_release_integrity.md`. Each of its four clauses was signed as written, one line each: conformance profiles (`<level>+<profile>`, listed not hosted) · §15.5 release-integrity manifest · `who/coordination/` optional at Starter · `data_tier` as an optional base label, plus the purge carve-out. The text enters `adna_standard.md` only at the v2.6 cut; md5 `094a3266` is unchanged. `adr_index` tally re-derived: 61 = 59 accepted · 1 amended · 1 proposed.
- **Accepted, conditional (R38):** the `spec_terminal_harness_contract` §7 Harness row delta. `HarnessOld.aDNA` is absent, so the spec is byte-unchanged; the first sitting that finds it on disk applies the delta.
- **Sent (R39):** `coord_2026_10_19_rosetta_to_lannes_g3_profile_seam.md` → AILedger.aDNA's drop-box (main `8fd21b8`; cmp identical). It asks Lister for `starter+medical` and for the `data_class` choice; Q9 stays open in §0.
- Campaign: G3 ruled; **P3 complete**; prompts **CURRENT → A4.1** (prompt authored); STATE ⏭ (l). **Committed locally; push held (R40)** until Jake answers Q9.

### 2026-10-19 (k) — ARCADE A3.3: profile scaffolding; the Ledoux reply delivered; push still held → CURRENT G3

- **New (standard side, `proposed`, `HORIZON` until the v2.6 cut):** `what/docs/profiles/AGENTS.md`, the list of named conformance profiles: listed, not hosted, table empty, aDNA-Medical *Expected* · `how/templates/template_profile_spec.md`, a profile-spec skeleton generalised from Operation Lister's spec (**templates 46 → 47**; operational 9 → 10; counts carried into `CLAUDE.md` · `README.md` · `MANIFEST.md` · `how/templates/AGENTS.md`; `what/docs/AGENTS.md` gains the `profiles/` row).
- **New (campaign):** `artifacts/p3/validator_profile_design.md` (interface only: `--profile` · `--rules` · `--verify`; an unknown profile is *unverified*, never failed) · `artifacts/p3/lister_fold_path.md` (nine steps, memo-only across the estate line) · `artifacts/p3/spec_terminal_harness_contract_row_delta.md` (Operation Jacquard: HarnessOld.aDNA `PASS` · Harness.aDNA successor `TAUGHT-AS-DESIGN`; a fifth G3 line; conditional on `HarnessOld.aDNA` existing).
- **Sent:** `coord_2026_10_19_rosetta_to_ledoux_wrapper_fields_provisional_reading.md` → City.aDNA's drop-box (R31; cmp identical). It is a provisional reading: `federation_ref` is a convention, not standard text; cite `source_vault` + `version` as "declared"; `pinned_at_commit` is the one presence check; no `status` value reads as ratified. **Staged:** `coord_2026_10_19_rosetta_to_lannes_g3_profile_seam.md` (`outbound_ready`, send GO at G3).
- **Queued for v2.6 (A4.1):** q10, a minimal `federation_ref` clause plus a closed wrapper status vocabulary · q11, the AEP owed for aDNA.aDNA ADR-066 (aDNA.aDNA ADR-055 §5), filed at publication.
- **Received (byte-unchanged = receipt):** Ledoux's two-naming ask · Harness.aDNA's Operation Jacquard notice · Harness.aDNA's re-pin receipt (rows 1–2 at `2ad992c`).
- Campaign: the A3.3 card is `completed` with its AAR (≈70 vs 60). P3 missions complete; prompts **CURRENT → G3** (the G3 prompt authored); STATE ⏭ (k). **Committed locally; push held (R29)** until Jake answers Q9.

### 2026-10-19 (j) — ARCADE: the Lannes memo delivered; A3.2: aDNA.aDNA ADR-066 proposed, push held → CURRENT A3.3

- **Sent:** `coord_2026_10_19_rosetta_to_lannes_lister_phase1_reading_upstream_and_gate1.md` → AILedger.aDNA's drop-box (R26; cmp identical). Its §0 asks Jake whether ADR-066 may go public before the G8 patent check.
- **New:** `what/decisions/adr_066_conformance_profiles_release_integrity.md` (`proposed`, four independent §7.7 lines for G3): conformance profiles (`<level>+<profile>`, never relaxing the base; official = listed, not hosted) · release integrity (deterministic sha256 manifest, MUST for declared profiles) · `who/coordination/` optional at Starter · `data_tier` as an optional base label (the fleet's existing key, not a new `data_class`) + a purge carve-out.
- **New:** `how/campaigns/campaign_arcade/artifacts/p3/standard_deltas_adr_066.diff.md` (7 hunks against v2.5; the standard is unchanged).
- **Changed:** `what/decisions/adr_index.md` (row 066; 61 = 58 · 1 · 2); the A4.1 card gains q9 (`ceil(bytes/4)`).
- Campaign: the A3.2 card is `completed` with its AAR (≈55 vs 80); prompts **CURRENT → A3.3**; STATE ⏭ (j). **Committed locally; push held (R25)** until Jake answers Q9.

### 2026-10-19 (i) — ARCADE A3.1: Operation Lister Phase 1 read from the standard's side — U1–U25 dispositioned, §16 answered beside both signers, memo to Lannes `outbound_ready` → CURRENT A3.2

- **New:** `how/campaigns/campaign_arcade/artifacts/p3/lister_upstream_disposition.md`. U1–U25 are re-checked at the shipped image (v8.12): **accept-now 10 · v2.6 14 · v3.0 1 · decline 0**; three claims are corrected; U15 · U18 · U19 · U23 → aDNA.aDNA ADR-066 (A3.2). The eleven §16 Gate-1 questions are answered beside Jake's ten rulings and Stanley's unposted draft (R23): **agree 7 · refine 1 · divergence 2 · sequencing 1**. Q8: `adna_conformance: medical` reads as no level upstream → `starter+medical`. Q3 is the one open difference between the signers. Q9: ADR-066 would land in a public repo, so the patent-watch scope goes to the operator before A3.2 pushes.
- **New:** `who/coordination/coord_2026_10_19_rosetta_to_lannes_lister_phase1_reading_upstream_and_gate1.md` (`outbound_ready`; send GO owed). AILedger's drop-box README is now on `main`.
- **Changed:** `who/governance/lip_registry.md` gains a §2.1 note row for F-AC-45: LatticeProtocol's 3-digit protocol-LIP line has its own steward and is never zero-padded; nothing is renumbered.
- **Receipts:** three 10-18 inbox memos (Noether · Themis · Vauban), byte-unchanged. A4.1 queue rows q6–q8: the live legacy-root-wrapper count is 3 · F-AC-44 is fixed at LP `f834cc7` · Vauban's two pointers.
- Campaign: the A3.1 card is `completed` with its AAR (≈75 vs 90; executed opus on a fable card); charter P3 row + Execution Log; CLAUDE phase line; prompts: **A3.2 authored, CURRENT → A3.2**; STATE ⏭ (i). Push at close (R16 standing).

### 2026-10-18 (h) — ARCADE A2.3: the public-face account of the four relations — 19 claim rows into the HAUSSMANN register as a new class `proposed`; scrub red-proved then 0; P2 complete → CURRENT A3.1

- **New:** `how/campaigns/campaign_arcade/artifacts/p2/public_face_account.md` — the paragraph set adna.network will need about the standard's position under the two-estate model (aDNA.aDNA ADR-065 as the single source), fenced by `PUBLIC-BEGIN/END` markers; **19 claim rows** R-185…R-203 each with its `exchange-adoption-path` tense (`PASS` 11 · `TAUGHT-AS-DESIGN` 4 · `HORIZON` 1 · split 3), an S1 column (0 — no protocol claim), and an evidence pointer into ADR-065 / `spec_graph_exchange` / `spec_platform_ecosystem`; the `campaign_vitrine` §1 "ledger-backed" sentence dispositioned superseded for A5.1. Plan-time rulings **R21** (the profile may be named: aDNA-Medical, `HORIZON`) · **R22** (A2.3 only).
- **Register:** `how/campaigns/campaign_haussmann/evidence/claims/claim_register.md` **§28** — the same 19 rows under a **new class `proposed`** (§28.1 defines it before use: authored copy awaiting GARNIER A5.1, verified against the vault record, never against a page; re-classed on a live fetch when it ships); §28.4 Counts **222 · 207 · 0** derived by `derive_register_counts.py` and replayed through gate-41's regex. `claim_register.json` untouched.
- **Scrub (red-proved):** five layers none re-typed — `PRIVATE_MARKERS` + `R125_EMBARGOED_TERMS` by text from `scripts/build_vaults_data.mjs`, the 8 gate-27 leak patterns, the primer's write-gate list rebuilt (75 regexes), the company's name whole-file: planted control **6 hits → real block 0**; name grep 0; bare-ADR 2 → 0; gitleaks 0. FKGL 9.11 / passive 54.5 % recorded, not repaired.
- Campaign: A2.3 card `completed` + AAR (≈55 vs 60); charter P2 row + **P2 complete** (≈160 vs 170 kT); CLAUDE phase line; prompts **A3.1 authored, CURRENT → A3.1**; STATE ⏭ (h) + the §Active Campaigns ARCADE row re-derived (it had read "CURRENT A2.2" since 10-16). `site/` untouched; nothing deployed (R2). Push at close (R16).

### 2026-10-16 (g) — ARCADE G2 RULED (R17–R20): ADR-065 **accepted** · eight memo legs delivered · registry regenerated (built, not deployed) · four owed replies answered · the LIP registrar role accepted

- **Ratified (operator, plan-time AskUserQuestion, R17 "Sign as written"):** `what/decisions/adr_065_standard_position_two_estates.md` **accepted** — the standard's position under the two-estate model (§4 witness row at `TAUGHT-AS-DESIGN`); `visibility_note` re-ruled: **R2 stands** (the dev-graph repo is a record, not a public surface). `adr_index` tally derived 58 · 1 · 1; seats **066** (profiles + hash manifest) and **067** (multimodal memorialization, Noether's M-A1) held.
- **Delivered (R18, drop-box doctrine on every leg):** `coord_2026_10_16_rosetta_to_berthier_adr_027_s2_amendment_a2_*` → aDNALabs `4a0e35e9` · `coord_2026_10_16_rosetta_to_thoth_and_lannes_the_standard_stays_open_*` → the AILedger **genesis worktree** inbox (`stanley/genesis-m00` `772012e`; the README lives there, not on `main`) · the stale 10-04 `coord_2026_10_04_rosetta_to_noether_a_second_copy_of_the_standard_at_v2_2_*` → LatticeProtocol `f834cc7` (twelve days `outbound_ready`; §0 says so).
- **Registry (R19):** `npm run sync:vaults` on Hestia's Home `2b65532` write → `site/src/data/vaults.json` `generated_at: 2026-10-16`, 74 vaults (107 rows → 74 admitted, **33 held**); the only row deltas are **Exchange** and **Terminal** (`genesis` → `active`, `last_synced` 2026-10-16, notes project, Terminal tagline replaced). `npm run build` exit 0, 229 pages; **not deployed**; R2 grep 0 on data and the two built pages. GARNIER DP3 item **(j)** appended (`campaign_garnier/artifacts/p1/phase_exit.md` §3).
- **Replies (R20), all delivered:** → Themis (Exchange `b691937`): **Q-066-1 ruled wide** — L2-4 means the aDNA.aDNA ADR-045-era root `<name>/` dirs (a root `federation/` was rejected by that ADR), **but all seven they counted are symlink shims** (Standing Rule 9), live legacy count = 0; v1.1 wording + the F-164-01 one-clause §5.1 amendment → A4.1 · → Vitruvius (WebForge `bf800266`): the citing-face notice, finally carried · → Noether (LatticeProtocol): M-A1 package **accepted for triage** — v2.6 SHOULD rider → A4.1, v3.0 MUST → its window, seat 067 held · → Mondrian ×2 (Canvas `f0c2c44`, cc Noether): partition recipe accepted + the 8 v8.11 canvases repaired at v8.13 by the test; RFC1918 literal → placeholder + RFC 5737 at v8.13 (our own public copy too); **the LIP registrar role accepted**.
- **New:** `who/governance/lip_registry.md` (`proposed` rows, role **accepted** R20; census-derived LIP-0001…0011, **0012 next free**; §4 names its own consumer + discovery pass) · `how/backlog/idea_upstream_registry_derivability.md` (candidate 11th compliance dimension, Mondrian §4). A4.1 card gains five queue rows (q1–q5); A4.2 card two fire rows (f1 partition repair · f2 RFC1918 redaction).
- **Received:** Themis 10-16 #2 (`q066_1_narrow_reading_and_seven_root_wrappers`; Exchange ADR-066 accepted, F-164-02 closed their side). **Reply debt derived: 0.**
- Campaign: charter §5 G2 **ruled** + Execution Log; CLAUDE phase line; prompts §G2 ✅ + **A2.3 prompt authored, CURRENT → A2.3** (opus; not run); STATE ⏭ (g). Push at close (R16 standing).

### 2026-10-16 (f) — ARCADE A2.2: the two estate memos `outbound_ready` (G2 = ADR-065 §7.7 + two send GOs) · ADR-065 §4 witness row re-tensed before the gate · four inbound receipts

- **New (`outbound_ready`, each send its own GO at G2):** `who/coordination/coord_2026_10_16_rosetta_to_berthier_adr_027_s2_amendment_a2_the_economic_platform_sentence_the_ecosystem_sentence_and_the_hq_label.md` — aDNALabs ADR-027 §2 **Amendment A2** proposed in their A1 form (economic-platform clause on the standard row · ecosystem bullet · `adna_network_org_hq` read as *lab estate*, label theirs; co-sign of aDNA.aDNA ADR-065 §1/§3/§4 offered) · `who/coordination/coord_2026_10_16_rosetta_to_thoth_and_lannes_the_standard_stays_open_answered_before_it_arrived_pointer_yes_private_side_licence_declared_at_linkml.md` — the pre-emptive answer to AILedger's staged, never-delivered 10-04 ask (pointer to AILedger ADR-008 **yes, private-side**; the LinkML masters' licence is the lab estate's and is **provisional MIT since 2026-10-03**; the standard declares vocabulary + toolchain path only — aDNA.aDNA ADR-062; VISION:27 qualifier offered). **Delivery path found**: AILedger's drop-box README is on `stanley/genesis-m00` (`1e1cc783`), absent from `main` — branch 1 at the genesis worktree inbox.
- **Changed (still `proposed`):** `what/decisions/adr_065_standard_position_two_estates.md` §4 witness row `PASS` → **`TAUGHT-AS-DESIGN` — built and inert** (Themis/Mnemosyne F-164-02, measured at Exchange's objects 2026-10-16; Exchange ADR-058 A1 built `0.0.44`, no anchor target, heads unsigned, scratch repo named not created).
- **Received (byte-unchanged; the commit is the receipt):** Mondrian 09-16 (ADR-011 erratum — 72 template-inherited `view`-authority canvases propagating 4 per fork) · Mondrian 10-16 (RFC1918 literals in `.adna/how/skills/skill_l1_upgrade.md`; the LIP-registrar handshake) · Noether 10-16 (M-A1 "one master, many faces" package → A4.1 triage) · Themis 10-16 (ack; F-164-01 spec §5.1 "one-line bump" untrue of their runner — one-clause amendment candidate at A4.1; Q-066-1 on L2-4). **Reply debt**: all four owed (three `ack_required`, one asks a question); none answered here.
- **Received at the seal:** Hestia 10-16 `coord_2026_10_16_hestia_to_rosetta_exchange_terminal_rows_written` — the A1.4 ask is **written** (Home `2b65532`, stamp **2026-10-16**): both cards `active`, Terminal tagline replaced, both notes project a first sentence; her correction to our sanitizer proof (a sentence that passes *alone* can still fuse with the old record — Terminal's note needed a ` Row history: ` join because `⛩` is not a split boundary). **`sync:vaults` GO is now the operator's** (then DP3 item (j)).
- Campaign: A2.2 card `completed` + AAR (≈45 vs 40); charter · CLAUDE · prompts (**CURRENT → G2, human**; A2.3 prompt at the gate) · STATE ⏭ (f). Plan-time rulings **R15** (memos only; G2 later) · **R16** (push at close). `site/` untouched (R2); nothing written in any foreign tree.

### 2026-10-16 (e) — ARCADE G1 RULED (R11–R14) · three memos delivered · A2.1: ADR-065 (the standard's position under the two-estate model) **proposed**

- **Ratified (operator, plan-time AskUserQuestion, as written):** `what/decisions/adr_064_graph_exchange_spec_placement.md` **accepted** · `what/specs/spec_graph_exchange.md` v0.1 **accepted** · `what/specs/spec_terminal_harness_contract.md` **v0.2 in force** (path-only re-anchor; blob `f629b019…`) · `what/specs/spec_platform_ecosystem.md` **v0.4 in force** (§Access points). `adr_index` tally derived.
- **Delivered:** `coord_2026_10_15_rosetta_to_berthier_and_the_triad_*` → Exchange (cc aDNALabs, Terminal) · `coord_2026_10_16_rosetta_to_hestia_two_access_point_rows_*` → Home (cc Terminal, Exchange) · `coord_2026_10_15_rosetta_to_panacea_adr_027_*` → Harness (cc Terminal); each with a §0 "at the send"; drop-box doctrine on every leg.
- **New (proposed, G2):** `what/decisions/adr_065_standard_position_two_estates.md` — public way · access points · commercial home (private-side, R2) · the economic platform as an owner × tense table · ecosystem by conformance · first profile · never-carries · two A2.2 memo proposals; `cites:` block; every ADR vault-qualified.
- **New:** `what/glossary/glossary_access_point.md` · `glossary_commercial_home.md` · `glossary_graph_product.md` (name-free). **Touched:** `what/patterns/pattern_federation_readiness.md` §Related (+1 line). Campaign: A2.1 card `completed` + AAR; charter · CLAUDE · prompts (CURRENT → A2.2, A2.2 prompt authored) · STATE ⏭ (e).
- `site/` untouched (R2); nothing written in any foreign tree beyond the inbox copies.

### 2026-10-16 (d) — ARCADE A1.4: registry truth for Exchange + Terminal — two rows derived at the object, memo to Hestia `outbound_ready`, `sync:vaults` GO queued; **P1 complete, G1 pending**

- **Campaign:** `how/campaigns/campaign_arcade/artifacts/p1/registry_corrections_exchange_terminal.md` — §0 field→file map (`scripts/build_vaults_data.mjs:203-282`: `status · tagline · last_synced · github_url · current_phase` come from Hestia's **cards**, `note` from her inventory via `publicNote()`); section A per vault = the ask (`status` genesis → **active** both, per aDNA.aDNA ADR-052 §tiers.3; Terminal tagline off "soft-fork of cmux"; one proven first sentence per note; `current_phase` optional, 0/74 fill it; `github_url` stays empty — both private, `PASS`); section B = inventory-only offers; §3 sanitizer proof (5 PASS / 2 planted controls REFUSED). A1.4 card `completed` (summary + AAR; ≈35 vs 25; fable on a declared-sonnet card) · charter row + Execution Log · campaign CLAUDE phase line · CURRENT → **G1** · STATE ⏭ (d).
- **`who/coordination/coord_2026_10_16_rosetta_to_hestia_two_access_point_rows_say_genesis_for_products_in_service.md`** `outbound_ready`, `ack_required` — cc Vauban + Berthier (plan-time; strikeable at the send GO); asks the two cards + two inventory first sentences only; no admission change, no `vaults.json` touch, no deploy.
- **Queued (STATE §Pending Manual Actions):** send GO → Hestia's write → `sync:vaults` GO → built-not-deployed → GARNIER DP3 item (j).
- Nothing written under `Home.aDNA/`, `Exchange.aDNA/`, `Terminal.aDNA/`; `site/` untouched (R2).

### 2026-10-16 (c) — ARCADE A1.3: Vauban's thirteen asks RULED (R7–R10) — eight **ratified** into six templates + the ISS pattern/skill, four **amended** into one new pattern, row 7 → the v2.6 cut; all `proposed (v8.13)`

- **Templates (additive, `(v8.13, proposed)` inline):** `how/templates/template_aar.md` **§Carries** (MET `file:line` · retired · next; `n MET · n retired · n next — N of N`; "none vanishes") · `template_campaign.md` (§Decision Points: options INFERRED until the gate · §Verification Per-Phase: boundary AAR-light row, `No — recommended` · §Timeline **Estimation guidance**: the three gate rows per phase, size from the tree, re-base at each close, the > 2× trigger on the re-based band · §Descoped carries line) · `template_campaign_mission.md` + `template_mission.md` (**§Premise pass** — first-hand at HEAD; a bounded grep is a premise; delegate the search, never the read; `[D]` VERIFIED / `[R]` REPORTED · §Descoped line) · `template_session.md` (optional `issued_by:` + `order:`/`halt_list:`/`recommended_taken:` · optional `continues:` · the record-identity rule · open/seal three reads as the first and last Activity Log lines) · `template_aar_lightweight.md` (optional **§Boundary AAR-light (phase seam)**: gap register read from the live system + improvements dispositioned by name + the companion campaign update).
- **ISS:** `what/patterns/pattern_iss_operator_gate.md` §4 **clause 5** — the recommended chip is derived from the payload (`rec_label`/`rec_class`), none lit without a recommendation, never a fixed string · `how/skills/skill_create_iss.md` **Affordance rule** (mirror). Closes Terminal ROADMAP-v1.1 row 17 by pointer.
- **New pattern** `what/patterns/pattern_ledger_backed_acceptance_tables.md` (`draft`, 1 instance = Terminal's Bastide gates 5/7, `[R]`): §1 WAIVED with a ruling id, the ledger read both ways · §2 the set rule for MATCH families · §3 the ratchet window for snapshot/visual gates. Amended into a pattern, not the standard — §19.4 stays non-prescriptive (R9).
- **Standard (queued, not edited):** §19.6 ADR-numbering line (vault-qualified; campaign one-letter prefix) + `adr_` in §6.4 → `mission_arcade_a4_1_standard_v2_6.md` (R10).
- **Campaign:** `artifacts/p1/vauban_rulings_packet.md` (16 rows; ratify 8 · amend 4 · to-v2.6 1 · decline 0) · A1.3 card `completed` (summary + AAR; ≈55 vs 60 ± 25) · A4.2 queue names the accepted set · charter row + Execution Log · CURRENT → A1.4 · STATE ⏭ (c) + campaigns row + pending row.
- **`who/coordination/coord_2026_10_16_rosetta_to_vauban_thirteen_rows_ruled_eight_ratified_four_amended_into_a_pattern_one_to_v2_6.md`** `outbound_ready` — send GO owed; carries the "aDNA 19 → 6" correction and two asks back (Python-Terminal pointer-spec; the threat-model idea that lives only in the Archive).

### 2026-10-15 (b) — ARCADE A1.2: `spec_terminal_harness_contract.md` v0.1 → **v0.2 PROPOSED** · `spec_platform_ecosystem.md` v0.3 → **v0.4 PROPOSED** (§Access points) · dead-CLI sweep derived at the object

- **`what/specs/spec_terminal_harness_contract.md` v0.2 (`proposed`, §7.7 → ARCADE G1; v0.1 in force)** — path-only re-anchor: clause sources → `Harness.aDNA/what/context/harness_core/terminal_contracts/` (blob SHAs `14b651d3…` / `7f2508f0…` verified equal to the archived originals on both trees — the §8 no-drift case; `archive_originals` kept, SO-7); reference conformance → the archived LatticeAgent original + the in-Harness snapshot (SHAs both named; delta = the 06-07 rehome annotation); §4 schema homes → frozen snapshots + live `harness_{control_surface,telemetry}_spec.md`; §5 providers with tense labels (`latticeagent` superseded → `Harness.aDNA` `rareharness`); **§6 third binding — `Terminal.aDNA` via ACP / A2A v1.0 / MCP (Terminal ADR-B09)**; §7 adoption table at today's names (Python Terminal pointer-spec `HORIZON`; Harness row flags its stale `proposed` on aDNA.aDNA ADR-027, `accepted` since 2026-07-02); §8 no-drift clause; §9 historical. Source: `idea_terminal_harness_contract_reanchor` rows 1–5 (accepted Champollion G0) — now EXECUTED.
- **`what/specs/spec_platform_ecosystem.md` v0.4 (`proposed`, §7.7 → G1; v0.3 in force)** — §Terminal ↔ Harness Contract at today's names; **new §Access points**: the console (`Terminal.aDNA`, [[spec_terminal_harness_contract]]) and the exchange (`Exchange.aDNA`, [[spec_graph_exchange]]), posture + tense (hosting `PASS` · Tier-0 `PASS` · both launches `TAUGHT-AS-DESIGN`); the recommended-default note (Terminal + Harness, **recommended-not-required**; `idea_default_terminal_harness_standard_touch` paper row 1 LANDED, rows 2–3 stay deferred — the trigger's only object is archived with the Go console); stale §Active Platforms table kept verbatim + dated line; `co_signed_adr_v0_4` = aDNA.aDNA ADR-064 (proposed).
- **Dead-CLI sweep (Terminal CP4-1 (b), 2026-10-06)** — derived: 42 / 15 / 2 false / 7 records / **6 live-routing files annotated** (`how/configs/bin/install.sh` · `uninstall.sh` · `how/configs/runbooks/runbook_lattice_home_install.md` · `how/skills/skill_lattice_home_install.md` · `what/patterns/pattern_lattice_home.md` · `how/backlog/idea_upstream_lattice_home_pattern.md`): the removed `~/.local/bin/lattice` guard noted, the CMux substrate source → `Archive.aDNA/TerminalGo.aDNA/how/configs/bin/lattice` (read-only), successor `adnaterm`. ⚠ The "~19 files" expectation did not reproduce — `lattice home` is this vault's own live script, `latlab lattice …` is the live Jupyter CLI, `aDNA terminal` is the live launcher name.
- **`who/coordination/coord_2026_10_15_rosetta_to_panacea_adr_027_accepted_since_07_02_repin_after_g1.md`** `outbound_ready` — send after G1.
- Campaign: A1.2 card `completed` (summary + AAR; fable on a declared-opus card, R3-style, recorded); charter row + Execution Log; CURRENT → A1.3 with three Terminal-side rows; STATE ⏭ (b) + campaigns row + pending row.

### 2026-10-15 — Operation ARCADE chartered (side campaign of GARNIER, ratified at the plan gate) · `spec_graph_exchange.md` v0.1 + ADR-064 PROPOSED · ten inbox receipts

> **Operator ruling at the session open:** AILedger.aDNA is the main operational/entity graph and the economic platform on which graphs built to the standard become networked graph products (the standard stays MIT + lab-owned — ruling R1); Exchange.aDNA + Terminal.aDNA are the primary access points; aDNA-Medical is the first named profile (found already chartered as **Operation Lister** in AILedger.aDNA on Jake's forge, Phase 1 done, held at Gate 1). Public naming of the company is **held** until "publication" (R2).

- **`how/campaigns/campaign_arcade/`** — charter (`status: active`, §7.7 filled from the plan-time lane; 6 phases / 15 missions / ≈1,115 ± 350 kT), `CLAUDE.md` (GARNIER's conventions by pointer + four ARCADE rules: memos-not-edits · public-naming hold · ADR numbers vault-qualified · tense labels), 15 mission cards (`executor_tier` · `executor_lane` · `token_budget_estimated`), `missions/session_prompts_arcade.md`, `artifacts/p0/situation_review_20261015.md` (finding register A1–C6, every `[R]` row re-verified at its object), `artifacts/p0/operator_rulings_packet_20261015.md` (R1–R4).
- **`what/specs/spec_graph_exchange.md` v0.1 (`proposed`)** — the ONE standard-side graph-exchange contract: ownership split (ratified ruling ③) · cited sources with pins (`adna-manifest/v0` · `exchange-access/v1` · the L0–L3 ladder · the M-S6 publish-path spec promoted to a cited transport annex, ruling ①) · the four-field publishable-graph minimum bound to existing manifest fields (ruling ②) · the honesty clause · **§5 L2 rule-set custody ruled** (content the standard's, execution the Exchange's; v1 rule-set proposed) · access points and faces with tense labels · what the spec never carries · forward integration (profiles, witness anchoring). The placement was ratified as drafted 2026-08-25 (aDNALabs S250) and had sat unauthored for seven weeks.
- **`what/decisions/adr_064_graph_exchange_spec_placement.md` (`proposed`)** — records the ratified placement (clauses 1–4) and proposes the L2 custody split (clause 5); `adr_index` tally 58 → **59** = 56 · 1 · **2**. ⚠ Exchange.aDNA has its own ADR-064; citations vault-qualified.
- **`who/coordination/coord_2026_10_15_rosetta_to_berthier_and_the_triad_*.md`** — `outbound_ready` (R4: push + stage): acks the triad's 07-11 ask on all three, answers the 08-03 ETA ask, names the `RULE_SET_VERSION` bump path, owns the lateness. Send GO owed.
- **GARNIER** — `artifacts/p1/phase_exit.md` §3 gains DP3 item **(i)** (the ARCADE amendment is ruled at DP3, not here); charter Execution Log entry. `MANIFEST.md` campaigns line names `campaign_arcade`.
- **Inbox receipts ×10** (`409293c`, byte-unchanged): fluxer 07-08 · stentor 10-04 · hestia 10-06 ×2 (B7 admission reading — 32 rows ruled; tier sentence moved) · vauban 10-06 + 10-07 (13 template/pattern asks → ARCADE A1.3) · noether 10-07 · 10-08 (⚠ `deep_research.lattice.yaml:91,95` string-compares under CEL → v8.13 fix, A4.2) · 10-10 (all three `ack_required` → A4.1) · rand 10-07 (Design row → A4.2).

### 2026-10-04 (h) — `pattern_channel_proof` PROPOSED → **ACCEPTED** (operator §7.7, as written) · fold `idea_upstream_pattern_channel_proof` filed for v8.13 · registry admission list (`site/src/data/registry_admission.yaml`, ADR-052 §admission) + R-125 withholding in the projection generator

- **`what/patterns/pattern_channel_proof.md`** — `status: accepted`; §7.7 Ratified-by Stanley, 2026-10-03 PDT, signed as written (plan-time `AskUserQuestion`). Fold filed: `how/backlog/idea_upstream_pattern_channel_proof.md` (v8.13 lane, ships with `idea_upstream_skill_mesh_probe_discipline` — proof half + probe half). Network notified.
- **`mission_primer_followup_sweep`** executed (fable at the operator's lane-D selection; declared opus — recorded): 17/17 register rows dispositioned at their objects — `what/ontology.md` `entity_count` 26 → **27** (the `reviewer` row was missing from the extension table); `context_lattice_basics_core_concepts.md` Autonomous → Agentic; `standard_reading_guide.md` line count derived; `CLAUDE.md` §Git-Ops item 6 "workspace Rule 10" → HAUSSMANN convention 10; dated topology banners on `lattice_federation.md` + `federation_walkthrough.md`; **ADR-063 `proposed`** (standard errata E-1 §4.1/§5.5 · E-2 §6.5→§15; `adr_index` 57 → 58) + `errata_v2_6_drafts.md`; two upstream rows (`idea_upstream_frontmatter_schema_per_class_status` · `idea_upstream_adna_overview_successor`); memos: tier-inversion notice to Home + Operations (delivered), v2.2 duplicate-standard ask to LatticeProtocol (`outbound_ready`). Two register rows did not reproduce (I-02 · I-05).
- **`scripts/build_vaults_data.mjs`** — (1) reads `site/src/data/registry_admission.yaml` and projects only the ADMITTED set (the 74, grandfathered by operator ruling 2026-10-03 PDT); every held inventory row is named on stderr (28 that day, `admission_pending`, ADR-052 §tiers.6); refuses an empty list. (2) withholds any tagline/note carrying an R-125-embargoed term whole (honest-absent), row named on stderr. `sync:vaults` ran under the ruling — see the commit for the field-by-field classification.

### 2026-10-04 — `what/patterns/pattern_channel_proof.md` PROPOSED (from Network.aDNA's 2026-08-03 upstream ask, received 2026-10-04) · `pattern_decision_queue` gains its second instance · Operation Primer COMPLETED

> **Channel proof** — *the consuming side proves a channel, never the provisioning side* (four rules; three instances across two vaults, incl. this vault's pre-push-hook config-order defect of 2026-10-03); §7.7 empty until the operator signs. Two companion backlog rows: `idea_upstream_skill_mesh_probe_discipline` (v8.13 lane, Network's skill as a template skill) and `idea_upstream_agent_memory_not_system_of_record` (a candidate sentence for the standard v2.6 window). Of Venus's four patterns: #4 adopted (this pattern) · #1 adopted (the skill row) · #2 deferred (v2.6) · #3 declined as a standard object. ⭐ The 08-03 ask itself had **never been delivered** (`status: sent` at the sender, no copy here) — the same *decided, undelivered* class as Operations' 37-day-late seed, both found the same hour; `pattern_decision_queue` §2 now names it as a band-C sub-state and cites Operations' live queue (64 rows / 7 campaigns) as its second instance (n=2, still draft).
>
> **Operation Primer** (`how/missions/mission_primer_adna_for_data_engineers.md`) — `what/docs/adna_primer_for_data_engineers.md` **v1.0** (operator read gate passed 2026-10-04; body identical to v0.2), rendered PDF (25 pp), cover note, transmission log with SHA256 ×3; delivery memo delivered to Fluxer.aDNA; mission `completed`; `mission_primer_followup_sweep` queued with the 17 source inconsistencies (three are errata candidates for the standard itself: §4.1 vs §5.5 governance-file MUSTs · `frontmatter_schema.json` vs §7.2 · §6.5's dangling §15 citation).

### 2026-10-04 — `pattern_model_tiered_campaign_execution.md` §2.1b **Local tiers** ACCEPTED (§7.7 signed; proposed earlier the same day as the Rosetta half of DP-12)

> **§2.1a `executor_lane` ACCEPTED in the same sitting** — the operator had ratified §2.1a and §2.1b *together* at Operations' S223 plan gate (2026-10-03 PDT; Berthier's record arrived 04:16Z and was found at the close re-sweep): §2.1b rule 2 depends on §2.1a, so signing §2.1b alone had put a rule in force over an unsigned key for one sitting — closed by writing §2.1a's block from the S223 record. `doctrine_credential_handling.md` §2.6 (the companion lane paragraph) is **not** covered and keeps its own gate.
>
> **Ratified 2026-10-04** (Stanley, plan-time AskUserQuestion) after Operations co-signed the text as written at 03:54Z — three halves (Berthier 08-25 · Pythia 10-03 · Rosetta 10-04) and two signatures on record; the text in force is unchanged from the proposal. Nothing routes by the signature: each local tier's ADR-012 §7 battery verdict is still the substrate owner's to land. Notice to Berthier cc Pythia/Automator the same sitting.
>
> *Proposal entry, kept:* Co-signs Operations' 2026-08-25 half and Pythia's 2026-10-03 substrate half with one reshape: local tier values (`light · standard · frontier`, interim) may enter the `executor_tier` vocabulary only behind a capability-matrix row + calibration verdict, are **valid only with `executor_lane: local`**, route only once the ADR-012 §7 battery verdict lands (per tier, evidence-fired), and are mapped onto §2.1 classes by the consumer's table, never by this pattern. Empty §7.7 until the operator signs. Memo to Berthier cc Pythia/Automator the same day.

### 2026-10-04 — template release **v8.12** fired from this dev graph (image track; this vault's own governance version is unchanged)

> Governance 8.11 → 8.12; standard holds v2.5. Full release notes: the public image's `CHANGELOG.md` (`aDNA-Network/aDNA`, tag `v8.12`). What changed **here**: `template_mission` / `template_session` / `template_coordination` gained the v8.12 fields (gate states + `gate:` · `executor_lane` · optional `harness:` · `mission:` + `lease` · ADR-061's three authorship fields); **`template_ruling_record.md` is new** (templates **45 → 46**, operational 8 → 9 — MANIFEST, CLAUDE project map, root AGENTS, README tree and `how/templates/AGENTS.md` re-derived); `skill_project_fork.md` is **reconciled with the template copy in both directions** (the image's fork-cleanup block R1–R7, ADR-009 name validation, orphan-plugin lint and `{{persona}}` token enter the dev graph; the dev graph's Step 1.5 license field enters the image) and gains the ADR-060 provenance stamp + the root-shape advisory; `adr_003` carries `template_decision: true`; `who/coordination/AGENTS.md` states the three-valued authorship rule. The v8.12 staging ledger's "no deploy tail" answer was found false at the gate and corrected there (the trust page derives its provenance from the template version). `what/lattices/tools/adna_validate.py --governance` now strips HTML comments before its count scans — found at the fire gate, where the image's v8.9 history comment ("30→31 templates") read as drift against the new count of 32; the instrument was wrong, the history stays.


### Added
- **Operation Champollion chartered** (2026-07-02, P0 complete; G0 operator gate pending) — pre-launch umbrella campaign at `how/campaigns/campaign_champollion/` (sibling to Operation Carnot / LatticeProtocol.aDNA): charter (8 phases · 24 missions · two rings · model-tiered execution) + Order of Battle + findings ledger (F-CHM-001..012) + risk register (R1–R10) + full backlog adjudication ledger (91 items + 3 stale ADRs, draft dispositions) + governance retro package (ADR-045 self-ratification + `98bb488` hold-override). Session: `session_stanley_20260702T024442Z_champollion_p0`.
- **`what/patterns/pattern_model_tiered_campaign_execution.md`** (2026-07-02, draft; instances 2/3) — frontier model designs briefs/gates, smaller models execute (fable = strategy/judgment · opus = mid-judgment · sonnet = mechanical); design-brief contract; `executor_tier` + ADR-016 budget telemetry contract shaped as Context.aDNA join keys. Companion: `idea_upstream_model_tier_mission_fields` (template fold, gated); staged memos to Noether (Carnot alignment/countersign) + Prometheus (pattern + corpus offer).
- **`how/gates/champollion_p0_gate.md`** (2026-07-02) — G0 ratification gate, copy-paste tier (ISS receiver down), 9 decisions D1–D9 with recommendations. **RATIFIED same day** ("Ratify as Recommended.", all nine) — record at `champollion_p0_gate.output.md`; campaign `active`, P1 open, five mission briefs materialized (`missions/mission_champollion_m1_*.md`), `campaign_adna_v3_ecosystem_compliance` **superseded** (D5), Noether/Prometheus memos released (D7), held stack pushed to public origin (D6).
- **Campaign-execution automation designed** (2026-07-02, operator-directed) — `how/backlog/idea_campaign_execution_automation.md` (4 layers: governance/coordination/orchestration/execution/measurement × 4 rungs R0–R3; safety invariants incl. gates-human + fable-never-auto-spawned) + `pattern_model_tiered_campaign_execution` §8 Automation ladder; **Operation Dispatch chartered cross-vault in Terminal.aDNA** (`campaign_terminal_dispatch`, `ratify_state: pending`, Berthier DP0 gate); 2 coordination memos filed to Berthier (Terminal Dispatch announce · Operations task-schema-v2 `+executor_tier` ask).
- `how/skills/skill_vercel_squarespace_domain_cutover.md` (v0.1.0) — 5-phase playbook (P-T-24 → P-D → P-D-Mon → P-D-T+48 → P-E) for cutting a registered Squarespace domain over to a Vercel-hosted Astro site, with optional `dev.<domain>` blue/green subdomain. Graduated from `ScienceStanley.aDNA` mission M08 (live cutover 2026-05-28 → 2026-05-29). Encodes operational quirks: Squarespace TTL dropdown is discrete-only (1800s minimum), Vercel `--token=` flag leaks via `ps -ef` (env-var-only auth), Hobby author-email mismatch blocks deploys, MX side-effect during CNAME write at Squarespace, Deployment Protection 401 on preview deploys. Apex-vs-www addendum documents both canonical-form DNS shapes.
- `how/skills/skill_vercel_squarespace_domain_cutover/templates/` — `mission_template_dns_cutover.md` (consumer-vault mission template), `vercel_json_template.json` (security headers + dev-host noindex rule), `dns_baseline_schema.json` (snapshot schema for rollback source-of-truth), `inputs_schema.json` (per-cutover configuration schema).
- `how/skills/skill_vercel_squarespace_domain_cutover/scripts/README.md` — Path A (run from ScienceStanley vault) / Path B (copy harness into consumer) / Path C (v0.3.0 shared library) usage guidance; 17-script catalog with phase mapping.
- **`what/decisions/adr_034_public_face_repo_release_architecture.md`** (2026-06-10) — records the operator-decided public-face restructure: **`aDNA-Network/aDNA` = the canonical clone-and-run workspace image** (pre-instantiated router + embedded `.adna/` + 1-command install; tag `v7.1` @ `e0fbb4c`); `LatticeProtocol/aDNA` archived as **`aDNA-Network/adna-legacy`** (frozen `74cb761`; old URLs redirect — repo-id semantics verified); **this vault = the standard's private dev graph** with manual gate-fired releases; PR #8 closed-as-superseded (PR #7 carried the flip); two-track versioning continues; `.gitignore` case-sensitivity gotcha recorded.
- **`how/skills/skill_template_release.md`** (2026-06-10) — the gate-fired release skill: preconditions → assemble standard tree → sync fresh release-repo clone (incl. the mandatory `.adna/README.md` embed-note transform) → two-track version bump + tag `vX.Y` + push → local-node `.adna` rsync sync (origin frozen at the archive) → 7-row fresh-clone smoke-test checklist.

### Changed
- **Doctrine amended for the three-body credential world — 4 files, all `proposed`** (2026-08-17, Operation Chambellan **M-A6**, dispatched from the aDNALabs HQ desk at S198). Amendments only — **no new doctrine file**; the `doctrine_identity_federation.md` test verdict is **NO** (Keycloak's IdP rules express as §-amendments; a named split trigger is written into `doctrine_credential_handling.md` §3.5 instead). Every amended doctrine carries **one §7.7 ratification block at `status: proposed`**, ratified-by/date unsigned — **4 blocks queued for a single operator sitting**. · **`doctrine_credential_handling.md`**: §2.5 three-body access model (broker-of-record / access-engine / IdP + four rules, incl. *a value reachable outside the register is a finding*) · §3.5 ADR-011 storage kinds `bitwarden_scoped` + `keycloak_client` and the `scope:` field as schema of record (**wired**, Home `5172655`, register 100 rows, multiset-parity PASS both directions) + the named successor-doctrine trigger · §4.5 partner delivery to a second person (S193 G31 arc, **n=2** variants, six binding rules, variant-B risk recorded not smoothed) · §6.9 the locus rule (**D-28** — F8's `.mcp.json` is a dead file in `Archive.aDNA`; live surface `~/.claude.json` 0600 + `~/.lattice/mcp_config.json`). · **`doctrine_key_rotation.md`**: scoped/expiring machine-credential class (90d partner tokens, scope-as-half-the-credential) · **revoke ≠ kill** (**D-36**/S45 cached CLI identity) · **procedure step 0 — preserve the evidence before you rotate** (**D-58**/DP-11: a timing ruling carries its evidence-date). · **`doctrine_secret_scanning.md`**: the **pre-push gate law** (**D-41** — 41/3/2/48 of 94 vaults, only **3.2%** effective; ruling = the `Network.aDNA` **hardened fail-closed hook is the fleet standard**, chosen over patching F1's control flow, with 4-part conformance + a 3-case behavioral probe; commit-warns/push-fails-closed asymmetry stated) · **Obsidian allow-list CLOSED** (**D-44**, 24 vaults — applicable `.gitleaks.toml` spec; held separate from **D-24**'s 13-graph fixture class) · **scanning non-git stores** (**D-57** — the transcript vector named a first-class secret surface; `gitleaks dir` reach ≠ efficacy at **5-of-8** shapes ⇒ report **"clean-within-reach", never "clean"**; the wired nightly `home.adna.residue-scan` as reference implementation; **F-M-A7-2** duration/niceness) · the **inert-control rule** (a control containing `EXAMPLE` cannot fire; controls use non-placeholder synthetic values and must FIRE) · **instrument law** (**D-46/D-60** multiset-parity — *a duplicate id conceals a gap*; **F-M-A7-1** re-validate an instrument against the **post-change** population, named a class at n=2 with D-47). · **`doctrine_safe_mutations.md`**: §8 custody moves (the P5 class — the gap and the ghost; prove the *retirement*) · §9 the **vendor-default rule** (**D-56** — behavior found running but unchosen is recorded, owned, pinned; `cleanupPeriodDays: 30` now pinned per Home `f5e4501`) · §9.1 **DP-10 item 2 retention window PROPOSED at 90 days** with three carve-outs. Nothing executed: no hook touched, no wave run, no `.adna/` write, no `Home.aDNA` write (Hestia co-sign staged as `who/coordination/coord_2026_08_17_rosetta_to_hestia_m_a6_cosign_ask.md`). Session: `session_stanley_20260817_s198_chambellan_m_a6_doctrine_amendment`.
- **Governance-sync: template count corrected `32` → `41`** (2026-06-29) — MANIFEST/CLAUDE/AGENTS stated "32 templates (22 base + 10 extensions)"; `adna_validate.py --governance` counts 41 actual `template_*.md`. Trued to **41 = 25 base** (inherited from `.adna`: 12 auto-triggered + 13 manual-apply) **+ 11 extension** (incl. `template_reviewer` — the +1 the stale "10" omitted) **+ 5 operational** (`campaign_open_splash` · `campaign_close_splash` · `drift_report` · `lattice_home_render` · `software_graph_stub`). Reconciled the MANIFEST `### Templates` enumeration + the `how/templates/AGENTS.md` index (added the 2 quest templates → Manual-Apply 13; new Operational §5) + the adjacent reviewer / 11th-extension drift (MANIFEST "10 ontology extensions / 10 Rosetta types" → 11, + `who/reviewers/`; AGENTS.md "10 extension entity types" → 11). README "What's Inside" (generic-vault scope) corrected `22` → `26 base templates (12 auto-triggering)`. No governance version bump (a correction; logged here). Skills-count drift (MANIFEST 15 vs 17 vs 13+4) noted separately as out-of-scope. Session: `session_stanley_20260630T051401Z_template_count_sync`.
- **Governance-sync: skills count corrected `15`/`17`/`20` → `45`** (2026-06-29) — the follow-up to the template-count fix above. MANIFEST/AGENTS/`glossary_skill` stated "15 skills (13 base + 2 project-specific)", MANIFEST `### Skills (17)` ("13 base + 4 project-specific"), and the CLAUDE.md inventory listed only 20 of the **45** actual `skill_*.md`. Trued to **45 = 21 base** (inherited from `.adna/`) **+ 24 project-specific**, computed by deterministic set-intersection with `.adna/how/skills/`. Rebuilt the CLAUDE.md skills inventory as two **row-count-auditable** groups (Base 21 / Project-specific 24 — all 45 enumerated); `Type` now mirrors each skill's `skill_type:` frontmatter, which corrected **4 stale rows** (`skill_context_graduation` · `skill_upstream_contribution` · `skill_version_migration` process→agent; `skill_vault_review` agent→process); non-active status noted inline (2 draft · 1 sketch · 1 proposed · 1 legacy · 1 deprecated · 2 eventual-home→RemoteControl.aDNA). Added a **skills-count guard to `adna_validate.py --governance`** (mirrors the template-count check; scans MANIFEST/CLAUDE/README/AGENTS) — skills were previously unvalidated, which is why this drift accrued silently. No governance version bump (a correction; logged here). Partially discharges the M07 "skills inventory comprehensive review" cleanup item (count/type/inventory portion; quality/dedup/graduation pass remains). Session: `session_stanley_20260630T064455Z_skills_inventory_sync`.
- **Template release `v7.2` shipped** (2026-06-11, gate-fired per `skill_template_release` — first run under the codified skill; gate = operator-approved plan, Berthier/aDNALabs dispatch): **Home-fork naming fix** — live-prose `LatticeHome.aDNA` → `Home.aDNA` across the standard tree (`skill_node_bootstrap_interview` · `skill_node_health_check` · `HOME.md` · `skill_update_all_vaults` · skills `AGENTS.md` · `.adna/CLAUDE.md` routing rules; lineage pins `graduated_from: …@411660e` + historical records preserved) + standard-tree governance 7.0 → 7.2 (the v7.1 packaging block formalized in the tree's CHANGELOG) + governance badges. `aDNA-Network/aDNA` commit `f06454c`, annotated tag `v7.2`; smoke 7/7 PASS; gate-12 7/7 PASS; local `~/aDNA/.adna` synced per step (e) (local commit `4bf5369`; install-truth fixture unchanged — idempotency guard). Trigger: the stale transient value mis-forked `LatticeHome.aDNA/` on fresh nodes (observed live on a partner onboarding 2026-06-11; aDNALabs memo `coord_2026_06_11_outbound_to_adna_template_home_naming_fix_adr013_amendment`).
- **ADR-013 amended — §Exception.5** (2026-06-11): the per-node vault rename chain completed `node.aDNA → LatticeHome.aDNA (2026-05-28, transient) → Home.aDNA (2026-05-30, canonical, generic-canonical doctrine)`; §Exception.2 annotated forward (no longer reads as end-state); R1–R4 unchanged. Companion dev-graph live-ref fixes: `adr_031` credential-broker ref (annotated), `pattern_upstream_drift_watch` policy pointer, `skill_lattice_home_install` example set (`HOME_LATTICE` / `Home.aDNA` / `🌙 Home / Hestia`), `template_lattice_home_render` badge example. `idea_upstream_node_vault_bare_role_rename` → **resolved** (executed by v7.2).
- **Install truth re-cut to the image flow** (2026-06-10, ADR-034): `scripts/build_install_truth.mjs` + `site/src/data/install_truth.json` (schema 0.2; commands `clone`/`enter`/`launch`; one-liner `git clone https://github.com/aDNA-Network/aDNA.git ~/aDNA && cd ~/aDNA && claude`; `legacy_repo_https` added; template sha `74cb761`) + gate-12 (7 tests — old-slug + cp-router-step rejection, legacy-archive reachability) + `/get-started` + `/network` Band-4 rewritten to the 1-command flow with a pre-June-2026 existing-installs note.
- **Live canonical-repo references flipped sitewide** `LatticeProtocol/aDNA` → `aDNA-Network/aDNA` (site chrome: Header/Footer/SocialLinks/HomeHero; pages: index/commons/community/startup-first-hour/what-is-adna; docs: open-standard, context-commons, community-×3, build-your-first-vault, agent-first-guide, migration-guide, social-sharing) and on vault root surfaces (CLAUDE.md spec citations, MANIFEST.md public-face identity, README.md Quick Start → 1-command flow, CONTRIBUTING.md issue/discussion/clone links, adna.md, `what/docs/projects_folder_pattern.md` PR#8-residual slug). Historical narrative untouched (archive-never-delete).

### Notes
- **First consumer**: `wga.aDNA` cutover to `worldgeno.me` (campaign_wga_site_v2, between c91 and c92). Mission file at `wga.aDNA/how/missions/mission_wga_m08_dns_cutover_worldgeno_me/` will be authored at P-T-24 open.
- **Skill version trajectory**: v0.1.0 = playbook + templates only (Playwright harness stays at ScienceStanley); v0.2.0 (post-WGA) = encode WGA-specific learnings + add `init-consumer-harness.sh` to automate Path B; v0.3.0 (after 3rd consumer) = graduate harness to shared workspace lib.
- This entry is staged as `[Unreleased]` per Keep-a-Changelog convention; the operator decides when to formalize as a governance minor bump (likely v6.1 following the v5.3 single-skill-addition precedent).

---

## [v8.4] — 2026-07-05

Governance **6.0 → 8.4** — adopted the **v8.4 consumer-facing doctrine** in this vault's own `CLAUDE.md` as the dogfood
prerequisite of **Operation Concord** (`campaign_w4_governance_doctrine` P1), closing Fleet Re-Seed self-drift finding
**F7** (the standard's own dev vault had lagged at 6.0 while shipping v8.5). This is a **doctrine-checklist adoption, not a
sequential 6→7→8 migration** — no v6→v8 migration tooling exists (finding F1); the jump reflects carrying the v8.4 doctrine
set, not stepping through intermediate versions. Standard track unchanged (stays v2.5).

### Added
- `## Governance Doctrine (v8.4)` section in `CLAUDE.md` — §7.7 decision-ratification discipline · credential-routing
  (broker = Home.aDNA) · AskUserQuestion operator-decision-surfacing · single-writer-lease · model-tiered `executor_tier`.
- Standing Order 11 extended with the `executor_tier` field (planned model class alongside the token budget).
- Applicability ruling recorded: at a project vault, adopt those five items, *reference* node-level agentic-sudo, and drop
  workspace-router-only router-row discipline (the reusable finding for the Tier-A rollout).
- Reusable instrument `how/campaigns/campaign_w4_governance_doctrine/artifacts/v8_4_adoption_checklist.md` (per-vault
  checklist + applicability model), consumed by Concord P2.

### Known follow-up
- A local `template_ratification_record` (shipped in the v8.4 set in `.adna/`) is not yet mirrored into this vault — tracked in the Concord P1 AAR.

---

## [v6.0] — 2026-04-03

### Changed
- **Identity rename**: Display name `adna` → `Agentic-DNA` across all governance files, docs, and context. GitHub repo renamed to `LatticeProtocol/Agentic-DNA`.
- **Naming convention**: `Agentic-DNA` = display name, headings, repo name; `aDNA` = abbreviation in running text; `adna` lowercase preserved in protocol URIs, directory names, tags, and frontmatter topics.
- `.aDNA` directory convention: `adna_standard.md` §3.5 with RFC 2119 naming rules, `skill_project_fork.md` auto-appends `.aDNA` suffix, CLAUDE.md workspace detection uses `*.aDNA/` glob.
- Clone command updated: `git clone https://github.com/LatticeProtocol/Agentic-DNA.git adna` (local dir stays `adna/`).
- Version bump: CLAUDE.md `5.7` → `6.0`.
- `how/missions/AGENTS.md`: Mandatory AAR before `status: completed`, git-aware state verification.
- `how/campaigns/AGENTS.md`: Verifiable DG criteria, campaign AAR step, context graduation sequencing.
- CLAUDE.md: 6 standing orders + git coordination section (5 rules + truth hierarchy).
- `template_mission.md`: AAR section appended.
- `template_campaign.md`: `calibrated_sessions`, `estimation_class` fields added, campaign AAR section.
- `lattice_yaml_schema.json`: `lattice_type` enum expanded 4→7 (added `skill`, `infrastructure`, `context_set`).
- `adna_standard.md` §7.2: Required base fields updated 5→6 (added `status`).
- Template count: 20→22.

### Fixed
- `CONTRIBUTING.md`: `validate_lattice.py` → `lattice_validate.py` (correct script name).
- `CONTRIBUTING.md`: Removed reference to nonexistent `calibrate_token_estimates.sh`.
- `skill_sqlite_persistence.md`: Added `status: proposed` to frontmatter (was missing status semantics).
- `governance_agent_protocol.md`: Added `runtime: claude_code` to frontmatter for clarity.
- Count reconciliation: context library 4→5 topics, 23→27 subtopics; adna_core 10→13; skills 7→13; example lattices 14→15; standard version v2.1→v2.2 references corrected.
- `adna_validate.py`: Frontmatter MUST violations now reported as errors (were warnings).
- `canvas2lattice.py`: `_sanitize_node_id()` converts canvas UUIDs to valid lattice IDs.
- Schema/validator/spec triple divergence resolved — all three sources now agree on 7 lattice types and 6 required fields.

### Added
- `template_aar_lightweight.md` — 5-line AAR format (Worked/Didn't/Finding/Change/Follow-up).
- `template_campaign_mission.md` — campaign-linked mission template with campaign_id, exit gate, AAR.
- PR #1 integration acknowledgment (ariaxhan system_configuration contribution).

---

## [v5.7] — 2026-03-23

### Added
- `role: template` marker in `MANIFEST.md` frontmatter — distinguishes the base template from forked projects
- `how/skills/skill_project_fork.md` — dedicated skill for forking `adna/` into a new project directory
- `~/aDNA/` as the canonical workspace convention for L0 nodes
- L0 compute tier in CLAUDE.md Compute Tiers table (local knowledge architecture, no compute services)
- Workspace convention diagram in CLAUDE.md Template Detection section

### Changed
- `CLAUDE.md` v5.6→v5.7: merged "First-Run Detection" + "Workspace Bootstrap Detection" into unified "Template Detection & Project Setup" flow
- `skill_onboarding.md` now runs exclusively in forked projects, never in the base template
- `skill_workspace_init.md` Step 4 delegates project creation to `skill_project_fork.md`
- All documentation updated from `~/Projects/` to `~/aDNA/` as the recommended workspace root
- `README.md` Quick Start updated with `~/aDNA/` clone instructions and template-aware setup flow
- `projects_folder_pattern.md` updated with `~/aDNA/` as canonical workspace root and `role: template` design principle
- `workspace_claude_md.template` updated with fork preparation steps (strip `role: template`, set `agent_init`)
- `STATE.md` next steps updated with `~/aDNA/` convention
- Peripheral files updated: `skill_l1_upgrade.md`, `skill_lattice_publish.md`, `tutorial_lattice_publishing.md`, `tools/AGENTS.md`, `quest_l1_onboarding.md`

### Design decisions
- `adna/` stays clean — never customized by onboarding. `git pull` always safe.
- `role: template` in MANIFEST.md is the canonical detection mechanism (explicit, git-independent)
- `~/aDNA/` is a strong recommendation, not mandatory — system works in any location

---

## [v5.5] — 2026-03-20

### Added
- `VISION.md` — ecosystem vision document (decentralized frontier lab model, participation ladder)
- "Ecosystem & Vision" section in `README.md` linking to VISION.md
- `VISION.md` row in README Further Reading table

### Changed
- `CLAUDE.md` version bump: `5.4` → `5.5`
- Template counts corrected across all governance files: `17` → `20` (CLAUDE.md, MANIFEST.md, README.md, STATE.md)
- `MANIFEST.md` template table expanded with 6 missing rows (data_record, folder_note, governance, migration, side_quest, quest_result)
- `MANIFEST.md` architecture tree updated with `community/` directory
- `README.md` tree diagram updated with `community/` directory
- `STATE.md` updated to v5.5, added community infrastructure to What's Working, added v5.3-v5.5 upgrade entries

---

## [v5.4] — 2026-03-20

### Added
- `community/quests/` — side-quest experiment specifications directory
- `community/results/` — structured result submissions directory
- `community/tools/aggregate_results.py` — reference aggregation script (stdlib only)
- `community/AGENTS.md` — community directory agent guide
- `how/templates/template_side_quest.md` — quest specification template
- `how/templates/template_quest_result.md` — result submission template
- `what/docs/side_quest_guide.md` — participation guide (find, run, submit quests)
- 2 example quests: `quest_frontmatter_comparison` (medium), `quest_migration_smoke_test` (easy)
- Side-Quest Awareness section in `CLAUDE.md`

### Changed
- `CLAUDE.md` version bump: `5.3` → `5.4`
- `AGENTS.md` project structure updated with `community/` directory
- `README.md` contributing section updated with side-quest mention

---

## [v5.3] — 2026-03-20

### Added
- `how/skills/skill_upstream_contribution.md` — agentic upstream contribution protocol
- Upstream Contribution Awareness section in `CLAUDE.md`
- Upstream Contribution Awareness section in root `AGENTS.md`
- Contributing section in `README.md`

### Changed
- `CONTRIBUTING.md` revised — Agent Contribution Mode replaces static PR-Context pattern; organic discovery over structured proposals
- `CLAUDE.md` version bump: `5.2` → `5.3`
- Code of Conduct reference updated to forward-looking note (pending `CODE_OF_CONDUCT.md`)

### Removed
- Empty `community/proposals/` directory (superseded by agentic backlog pattern)
- Empty `.github/ISSUE_TEMPLATE/` directory (standard GitHub issues sufficient for now)

### Tooling (non-versioned, built in lattice-labs campaign LSU)
- `compliance_checker.py` — 10-dimension compliance scoring for vault objects (~1085 LOC)
- 4 object migration prompts: `migrate_object_{skill,module,dataset,lattice}.md`
- `migration_safety_framework.md` — git tags, worktree testing, rollback L1-L5
- `adna_validate.py` — instance conformance validator per §5.5
- `frontmatter_schema.json` — JSON Schema for frontmatter validation
- Post-LSU fixes: D9 companion content validation, MCP module_type D5 N/A

---

## [v5.2] — 2026-03-19

### Added
- `CHANGELOG.md` — centralized version history (this file)
- Version policy documenting the two-track scheme (governance + standard)
- Migration prompt cross-links in changelog entries

### Changed
- `CLAUDE.md` version bump: `5.1` → `5.2`
- `STATE.md` updated with v5.2 reference and CHANGELOG in "What's Working"

### Migration
- [`migrate_v5.1_to_v5.2.md`](how/migrations/migrate_v5.1_to_v5.2.md)

---

## [v5.1] — 2026-03-18

### Changed
- Lattice types table expanded (7 values: added `infrastructure`, `context_set`, `skill`)
- Template count corrected (10 → 17)
- Standard file paths fixed (pointed to context library instead of nonexistent standalone files)

### Fixed
- CLAUDE.md token estimate corrected (`~650` → `~2500`)
- Object standards table references corrected

### Migration
- [`migrate_v5.0_to_v5.1.md`](how/migrations/migrate_v5.0_to_v5.1.md)

### Standard
- **v2.2** — Federation stub, vault extensions, campaign system, factual fixes

---

## [v5.0] — 2026-03-17

### Added
- OODA cascade (3-level: session, mission, campaign)
- AAR protocol (5-step)
- Escalation cascade (session → mission → campaign → STATE.md)
- Context recipes (6 domain-neutral, 3-tier budgets)
- Mission class discriminator (5 types: build, investigate, design, review, operate)
- 4 new templates (AAR, strategic compass, campaign CLAUDE.md, registry)
- 2 new skills (context quality audit, context graduation)

### Changed
- Framework port from lattice-labs vault to standalone aDNA repo
- 10 adna_core subtopics (was 8) — added ooda_cascade, ontology_workshop

---

## [v4.x and earlier] — 2026-02 to 2026-03

Pre-versioned history. Key milestones (not individually versioned):

- **Lattice publishing** — `latlab lattice publish/pull/compose` CLI workflow
- **Context library** — 4 topics, 23 subtopics, ~58K tokens
- **Object standards** — module, dataset, lattice type standards hardened
- **Canvas Standard v1.0.0** — Round-Trip Protocol v1.0 (YAML authoritative)
- **Type vocabulary** — 19 canonical I/O types (Decision 10)
- **FAIR metadata** — flat↔nested envelope interconversion (Decision 11)
- **Dataset schema** — multi-cloud `.dataset.yaml` with 7 providers (Decision 12)
- **Onboarding skill** — agent-driven interactive vault setup
- **14 example lattices** — business, research, creative, biotech domains
- **Obsidian config** — Tokyo Night theme, 10 CSS snippets, 14 plugins
