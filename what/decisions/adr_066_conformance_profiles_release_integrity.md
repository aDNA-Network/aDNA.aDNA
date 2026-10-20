---
type: adr
adr_number: "066"
title: "Conformance profiles and release integrity — a named profile stacks on a conformance level (`<level>+<profile>`) and never relaxes it; a deterministic sha256 release manifest lets any release or instance prove its rules unmodified; `who/coordination/` becomes optional at Starter; `data_tier` is named as an optional base label and a purge carve-out bounds archive-never-delete"
status: accepted        # ⛩ RATIFIED 2026-10-19 at ARCADE G3 (operator Stanley, R34–R37: all four clauses signed as written, plan-time AskUserQuestion) — text lands in adna_standard.md only at the v2.6 cut (A4.1). PRIOR (SO-7): proposed — four independent clauses, each its own §7.7 line, drafted 2026-10-19 at ARCADE A3.2
created: 2026-10-19
updated: 2026-10-20   # FOLDED at standard v2.6 (ARCADE G4, R43; all 7 hunks, local, unreleased); claim row re-tensed. Prior: G3: §7.7 ×4 signed (R34–R37); push still held (R40). Prior: A3.2 — drafted
last_edited_by: agent_rosetta
campaign_id: campaign_arcade
mission_id: mission_arcade_a3_2_adr_066_profiles_hash_manifest
supersedes: ""
superseded_by: ""
probe_date: 2026-10-19
visibility_note: "PUSHED 2026-10-20 (ARCADE A4.2 sitting 2, operator R53) on Jake's Q9 word, verbatim: \"Yes, push now, anchoring excluded (Recommended)\" (Lannes, 2026-10-19 ~19:1x PDT, relayed by Aspasia: who/coordination/inbox/coord_2026_10_19_aspasia_to_rosetta_jakes_q9_word_on_lister_phase1_landed_with_us_forward.md). The condition was checked at the object before the push: this ADR carries no ledger anchoring (clause 5 puts external anchoring out of scope; that is Exchange.aDNA ADR-058's) and nothing from Lister spec §11.7's external pin; grep 11.7 = 0 here, in the standard and in the diff. Lister's G8 governs that part, which stays private. Naming (R2) is unaffected: private-side text. Prior: PUSH HELD under R25 (2026-10-19) and R40 (G3)."
number_collision_note: "Exchange.aDNA ADR-066 (L2 rule-set v1, built 0.0.45) is a different record. Every ADR number here is vault-qualified (ARCADE rule 3)."
cites:                  # read first-hand 2026-10-19 [D]
  lister_spec: "AILedger.aDNA how/campaigns/campaign_adna_medical/artifacts/adna_medical_spec.md v0.1.0-draft §3 (the `medical` level), §5.1 (`data_class`), §11 (hash manifest) — read on ~/aDNA/scratchpad/genesis/ailedger_qm_wt, stanley/quatre-mains-m00"
  lister_upstream: "AILedger.aDNA …/artifacts/upstream_candidates.md U15 · U18 · U19 · U23"
  a3_1_reading: "aDNA.aDNA how/campaigns/campaign_arcade/artifacts/p3/lister_upstream_disposition.md §2 (U15/U18/U19/U23 → here) + §3 Q1 · Q3 · Q8"
  aDNA_adr_065: "aDNA.aDNA what/decisions/adr_065_standard_position_two_estates.md — accepted 2026-10-16 (§6 the first named profile; §7 never carries PHI)"
  aDNA_adr_063: "aDNA.aDNA what/decisions/adr_063_standard_errata_v2_6.md — proposed (E-2: the §6.5 → §15 archive-don't-delete pointer that dangles)"
  aDNA_adr_064: "aDNA.aDNA what/decisions/adr_064_graph_exchange_spec_placement.md — accepted; spec_graph_exchange.md §8 pre-states `<level>+<profile>`"
  aDNA_adr_044: "aDNA.aDNA ADR-044 — the §7.2 per-class profile + the §5.5 conformance-walk scope (v2.5)"
  Exchange_adr_065: "Exchange.aDNA what/decisions/adr_065_adna_medical_is_the_exchange_dogfood_tenant.md — proposed: two digests bound, never conflated; scoped first, opened by manifest only"
  Exchange_adr_058: "Exchange.aDNA ADR-058 — checkpoint anchoring: a witness, not a trust root"
  lp_data_tier: "LatticeProtocol.aDNA what/context/schemas/lattice_core/enums/DataTier.md (generated from what/schemas/lattice_core.linkml.yaml): GREEN ⊂ AMBER ⊂ RED; key `data_tier`, never `tier`"
  linkml_compliance_slots: "LinkML.aDNA what/schemas/docs/compliance_slots.md — proposed: `data_tier` (closed, GREEN · AMBER · RED), `data_posture` (open); 'map the ancestors, don't mint names'"
  linkml_profile: "LinkML.aDNA what/profile/adna_profile_v0_1.yaml — `profile_not_fork_test` (the schema side's own profile-vs-fork rule)"
tags: [adr, arcade, p3, profile, conformance, release_integrity, hash_manifest, coordination, data_tier, purge, adna_medical, accepted]
---

# ADR-066 — Conformance profiles and release integrity

> **Plain version.** Today the standard has three sizes: Starter, Standard and Full. A team that needs a *stricter*
> small size, like a medical one, has two bad options. It can call itself something the standard doesn't recognise, or
> it can fork the standard. This ADR adds a third way, a **profile**. A profile is a named set of extra rules stacked on
> one of the three sizes, and it can only add rules, never remove them. It also adds a **fingerprint** for a release:
> a list of every file with its hash, plus one final hash over that list. Anyone can then check that the rules they are
> running are exactly the rules that were released. Two smaller fixes ride along. A one-agent project no longer needs an
> empty coordination folder. And the standard names the label the network already uses for how far data may travel,
> with a rule for the rare case where something truly must be deleted. *(Self-reference, Standing Order 8: this file is
> itself a `what/decisions/` object whose §7.7 table has four rows, one per clause. That is the "independent clauses"
> idea applied to the ADR that introduces it.)*

## Status

**Accepted — ratified 2026-10-19 at ARCADE G3** (operator Stanley, rulings **R34–R37**: each of the four clauses signed
as written, its own line, plan-time AskUserQuestion). The text enters `adna_standard.md` at the **v2.6 cut** (A4.1);
until then the standard is byte-unchanged (md5 `094a3266` at the gate). The push stays held (R40): Q9 is unanswered,
and acceptance on this vault is not publication. *Prior status (SO-7):* `proposed` — four clauses, each with its own
§7.7 line, ruled at **G3** (ARCADE P3 exit). The exact
deltas are drafted in `how/campaigns/campaign_arcade/artifacts/p3/standard_deltas_adr_066.diff.md`.

## Context

- `[D]` Operation Lister (aDNA-Medical, in AILedger.aDNA) wrote a spec that declares `adna_conformance: medical` and
  calls itself *a profile stacked on Starter* (spec §3). The standard's declaration admits `starter · standard · full`
  only (§5.5, "Conformance Declaration"). So an upstream validator reads `medical` as **no level**. The profile's own
  claim that it "also passes the upstream Starter validator" therefore fails at the first field (A3.1 reading §3 Q8).
- `[D]` Lister's U23 asks the standard to adopt two seams: conformance profiles, and a deterministic content-hash
  manifest (spec §11). aDNA.aDNA ADR-065 §6 names U23 as the change that makes aDNA-Medical **a profile rather than a
  fork**. U15 (empty `who/coordination/` at Starter), U19 (no sensitivity label) and U18 (no purge exception) ride with
  it (A3.1 §2.1, all `v2.6` → here).
- `[D]` The fleet already has a sensitivity vocabulary. LatticeProtocol.aDNA `lattice_core` defines `DataTier`
  (GREEN ⊂ AMBER ⊂ RED; key `data_tier`), and LinkML.aDNA's compliance slots carry the same key as `proposed`, with the
  rule *"map the ancestors, don't mint names."* This vault's own memos stamp `data_tier: GREEN` (10 files under
  `who/coordination/`). Lister's `data_class` (`public · internal · confidential`) measures a **different axis**: who
  may see a file, where `data_tier` measures how far it may travel.
- `[D]` §15 has no archive-don't-delete rule, though §6.5 cites one there (aDNA.aDNA ADR-063 E-2, proposed). Nor does
  it have a purge exception for secrets or regulated data. The practice is real (Standing Order 6); the exception is
  missing.

## Decision

### Clause 1 — Conformance profiles

1. A **profile** is a named, versioned overlay on exactly one conformance level. It **MUST** keep every MUST of its
   base level, **MAY** add MUSTs and SHOULDs of its own, and **MUST NOT** relax a base MUST. *(The profile-not-fork
   test, on the standard's side. LinkML.aDNA's `profile_not_fork_test` is the schema side's.)*
2. **Declaration:** `adna_conformance: <level>+<profile>` in `MANIFEST.md`. Example: `starter+medical`. The profile
   name is snake_case (§6.1). The profile's version goes in `adna_profile_version: <semver>`.
3. **Validator rule (backwards compatibility):** a validator that does not know the profile **MUST** evaluate the base
   level and report the profile as *unverified*. It never fails the instance for the suffix. A bare level value keeps
   its v2.5 meaning.
4. **Official profile = listed, not hosted.** The standard keeps a short table of named profiles (§5.5, new): name ·
   steward · current version · release manifest root · status. Listing is a §7.7 act of the standard's maintainer at
   the steward's request. The profile's **text and bytes stay with its steward**, and distribution is the steward's
   (an exchange is one channel). Listing certifies nothing: the standard records that a profile exists and how to
   check it, not that it is safe or compliant.
5. **First entry:** aDNA-Medical, steward AILedger.aDNA. It is listed **at its release** (Lister's Gate 3), not now.
   Tense `HORIZON`.

### Clause 2 — Release integrity (a deterministic manifest)

1. **New §15.5 "Release integrity".** A release **MAY** ship `manifest_sha256.txt` at its root. A release of a
   **declared profile MUST**.
2. **Algorithm** (adopted from Lister spec §11, generalised):
   - **Input:** the files listed by `git ls-files -s` at the release commit, minus the manifest itself and any data
     paths the header declares excluded. Untracked files are never in a manifest.
   - **Normalization (checked, never applied):** text is UTF-8, no BOM, LF. Paths are relative, `/`-separated,
     NFC-normalized, with no `..`, no leading `/` and no newline. A validator **rejects** un-normalized input; hashes
     are over raw bytes.
   - **Lines:** `<sha256-hex>  <git-mode>  <path>`, two-space separated, sorted by bytewise-ascending path. A symlink
     hashes its target string.
   - **Header** (bound into the root):
     - `# adna-release-manifest v1`
     - `# profile: <name | none>`
     - `# profile_version:`
     - `# upstream: <standard version> <commit>`
     - `# scope: release | instance_profile`
     - `# algorithm: sha256`
     - `# files: <n>`
     - `# excluded: <paths>`
   - **Root:** `# root: <sha256>` over the exact bytes of every line above it, each `\n`-terminated.
3. **Instance scope.** `scope: instance_profile` covers the profile's rule surface. The profile defines it, and it
   **MUST** include the governance files and any module that changes data egress or model routing. An instance whose
   instance-profile root equals the release's, after adjusting for declared modules, is **running unmodified rules**.
   *(This is A3.1 Q3's requirement. Whichever hosted-model default a profile ships, it must be visible inside the
   hash-bound surface.)*
4. **Two digests, never conflated** (Exchange.aDNA ADR-065). The manifest root identifies a profile's *files*; an
   exchange's content address identifies a published *package*. Neither stands in for the other.
5. **Out of scope:** anchoring the root anywhere external. A witness is a witness (Exchange.aDNA ADR-058), and nothing
   in this clause depends on any record being up or honest (aDNA.aDNA ADR-065 §7, "a trust root").

### Clause 3 — `who/coordination/` optional at Starter

1. §5.5 Level 1 item 3 drops `who/coordination/` from the required set.
2. §5.5 Level 2 item 7 adds it. Standard conformance is the multi-agent level, so the directory moves there, and
   Standard instances already have it.
3. **A Starter instance in which more than one agent writes MUST** have it.
4. §11.3's "Agents MUST check `who/coordination/` during every session startup" becomes "*when it exists*".

### Clause 4 — `data_tier` named as an optional base label; a purge carve-out

1. **(a) `data_tier`** joins §7.2 as an **optional** base field: GREEN · AMBER · RED, with the value space owned
   upstream by LatticeProtocol.aDNA `lattice_core` `DataTier` and LinkML.aDNA's compliance slots. The standard names
   the key and points; it mints no vocabulary.
   - A profile **MAY** make it MUST and **MAY** narrow it. Example: a medical profile forbids RED inside the triad,
     because RED never leaves its node and never appears as content.
   - It is a **label, never data** (aDNA.aDNA ADR-065 §7).
   - Lister's `data_class` measures a different axis (disclosure). Under §7.6 item 2 it carries a profile prefix, or
     maps to LinkML.aDNA's open `data_posture` slot. That is the steward's choice; the standard does not take
     `data_class` as a base name.
2. **(b) Purge carve-out**, in §15.1 directly after aDNA.aDNA ADR-063 E-2's archive-don't-delete sentence:
   - *Secrets, and regulated data (RED material, or data under a legal erasure duty), found where they must not be
     **MUST** be purged from the working tree and from history.*
   - *The purge leaves an incident record that holds no payload: class, location, date, actor, and how the purge was
     verified. A purge is itself a recorded decision.*
   - If E-2 is not accepted, this sentence stands alone as the exception to the practice of Standing Order 6.

### Backwards compatibility (§15.4)

All four clauses are minor-compatible:
- Clause 1 adds syntax, and bare values keep their meaning.
- Clause 2 is MAY, except for declared profiles, which do not exist yet.
- Clause 3 relaxes Starter, and every Standard instance already has the directory.
- Clause 4 adds an optional field and a MUST that applies only to material that must not be present at all.

No v2.5-conformant instance becomes non-conformant.

## Tense of every product claim (ARCADE rule 4)

| Claim | Tense |
|---|---|
| The standard defines profiles and a release manifest | **`PASS` in this vault's standard** since the v2.6 fold (2026-10-20, ARCADE G4 R43; `adna_standard.md` §5.5 Profiles + §15.5); still `TAUGHT-AS-DESIGN` for the public image until A4.2 ships it (held, R41). *Prior: `TAUGHT-AS-DESIGN` since G3 (2026-10-19, ratified); `PASS` only once the v2.6 cut ships the text.* *Prior: `HORIZON` until G3 + the v2.6 cut* |
| aDNA-Medical is listed as an official profile | `HORIZON` (at Lister's Gate 3) |
| A validator checks `<level>+<profile>` and `--verify`s a manifest | `HORIZON` (design at A3.3; code later) |
| An exchange carries profile bytes | `HORIZON` here (Exchange.aDNA ADR-065 is `proposed`) |
| The fleet uses `data_tier` as a label | `PASS` (10 memos in this vault; LP `lattice_core`) |

## Consequences

### Positive
- A stricter, thinner deployment becomes a profile **of** the standard, with no fork, and its claims are checkable by
  anyone with `git` and `sha256sum`.
- One sensitivity key across the fleet, instead of a second one minted by the first regulated profile.
- The smallest conformant instance gets smaller (no empty coordination directory).

### Negative
- A new surface to maintain: the profile table, and a manifest format that must stay stable (`v1` in the header is
  the hedge).
- `data_tier`'s value space lives upstream, in two `proposed` objects (LP + LinkML.aDNA), so clause 4a depends on
  their ruling. That is acceptable: the standard only names the key.

### Neutral
- Lister's spec needs two edits at its M3, by its steward and never from here: `starter+medical`, and a decision on
  `data_class` (prefix or `data_posture`). Carried to Lister by memo at G3.

## What this ADR does NOT do
- It does not edit `adna_standard.md`; the deltas wait for the v2.6 cut.
- It does not design the validator (A3.3).
- It does not anchor anything, does not certify any profile, and rules none of Lister's gates.
- It mints no vocabulary: `data_class` stays the steward's, and `data_tier`'s values stay upstream.
- The `ceil(bytes/4)` method for `token_estimate` (U23 c) is **not** here. It is not profile-specific, and it is
  queued as A4.1 q9.

## Ratification (§7.7)

| Clause | Decision | Ratified-by | Date | Status |
|---|---|---|---|---|
| 1 | Conformance profiles: overlay, declaration `<level>+<profile>`, unknown-profile validator rule, official = listed not hosted | Stanley (operator) — R34 "sign as written" | 2026-10-19 | **accepted** |
| 2 | Release integrity: §15.5 deterministic sha256 manifest, MAY / MUST-for-profiles; egress modules inside the instance scope; two digests never conflated | Stanley (operator) — R35 "sign as written" | 2026-10-19 | **accepted** |
| 3 | `who/coordination/` optional at Starter, required at Standard and wherever more than one agent writes; §11.3 check conditional | Stanley (operator) — R36 "sign as written" | 2026-10-19 | **accepted** |
| 4 | (a) `data_tier` optional base label, values upstream; (b) purge carve-out with a payload-free incident record | Stanley (operator) — R37 "sign as written" | 2026-10-19 | **accepted** |

**Gate / session reference:** ruled at ARCADE G3, `session_stanley_20261019_232222_arcade_g3_gate`, by
AskUserQuestion at plan time (R34–R37, one line per clause; none declined, none amended); `campaign_arcade.md` §5 row
G3. Drafted at `session_stanley_20261019_211219_arcade_memo_send_and_a3_2_adr_066` on rulings
R25 (push held) + R28 (the four clauses; clause 4a refined at drafting from `data_class` to `data_tier` on the fleet
evidence above). **Scope of authority:** this vault's text for the v2.6 cut; binds no other estate.

*Fold note (2026-10-20, ARCADE G4 R43):* all four clauses' text folded into `what/docs/adna_standard.md` v2.6 from `how/campaigns/campaign_arcade/artifacts/p3/standard_deltas_adr_066.diff.md` (7 hunks; every anchor re-found by `grep -nF`; hunk 6 in its E-2-accepted form). Local and unreleased; AEP owed at publication (q11).


## Related

[[adr_065_standard_position_two_estates]] §6–§7 · [[adr_063_standard_errata_v2_6]] (E-2) · [[adr_064_graph_exchange_spec_placement]] ·
[[spec_graph_exchange]] §8 · [[lister_upstream_disposition]] · [[standard_deltas_adr_066.diff]] · [[mission_arcade_a3_2_adr_066_profiles_hash_manifest]] ·
[[mission_arcade_a3_3_profile_scaffolding]] · [[mission_arcade_a4_1_standard_v2_6]]
