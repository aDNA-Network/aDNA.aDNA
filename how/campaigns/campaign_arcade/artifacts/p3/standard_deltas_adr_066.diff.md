---
type: artifact
artifact_class: standard_delta
campaign_id: campaign_arcade
mission: mission_arcade_a3_2_adr_066_profiles_hash_manifest
title: "aDNA.aDNA ADR-066 — the adna_standard.md deltas, drafted against v2.5 and NOT applied"
created: 2026-10-19
updated: 2026-10-19
status: proposed          # applied only at the v2.6 cut (A4.1), and only for clauses accepted at G3
last_edited_by: agent_rosetta
base: "what/docs/adna_standard.md v2.5, 1,522 lines, md5 094a326626036731f2894e4cda4f78cb (2026-10-19) — byte-unchanged by this sitting"
tags: [artifact, arcade, p3, adr_066, standard_delta, v2_6]
---

# Standard deltas for aDNA.aDNA ADR-066

> **Plain version.** These are the exact words that would change in the standard if each clause of
> [[adr_066_conformance_profiles_release_integrity]] is accepted. Nothing has been changed yet. The standard file is
> untouched; its fingerprint is in the frontmatter above. Line numbers are v2.5's. Each hunk names the clause it
> belongs to, so a rejected clause drops its hunks and nothing else.

## Hunk 1 — §5.5 Level 1 item 3 (clause 3) · L525

```diff
-3. **Required subdirectories**: `what/context/`, `how/missions/`, `how/sessions/`, `how/templates/`, `who/coordination/`, `who/governance/`
+3. **Required subdirectories**: `what/context/`, `how/missions/`, `how/sessions/`, `how/templates/`, `who/governance/` — plus `who/coordination/` when more than one agent writes the instance (v2.6, aDNA.aDNA ADR-066 clause 3)
```

## Hunk 2 — §5.5 Level 2 item 7 (clause 3) · L538

```diff
-7. **Recommended directories**: `what/decisions/`, `how/backlog/`, `how/sessions/active/`, `how/sessions/history/`
+7. **Recommended directories**: `what/decisions/`, `how/backlog/`, `how/sessions/active/`, `how/sessions/history/`, `who/coordination/`
```

## Hunk 3 — §5.5 Conformance Declaration + a new "Profiles" subsection (clause 1) · L553–562

```diff
 Projects MAY declare their conformance level in `MANIFEST.md` using the `adna_conformance` frontmatter field:
 
 ```yaml
-adna_conformance: starter  # or: standard, full
+adna_conformance: starter  # or: standard, full — or <level>+<profile>, e.g. starter+medical (v2.6)
 ```
 
 An instance that does not declare a conformance level is assumed to be unverified. The `adna_validate.py` tool (see `what/lattices/tools/`) can determine conformance level programmatically.
+
+#### Profiles (v2.6, aDNA.aDNA ADR-066 clause 1)
+
+A **profile** is a named, versioned overlay on exactly one conformance level. A profile MUST keep every MUST of its base
+level, MAY add requirements of its own, and MUST NOT relax a base MUST. An instance declares it as
+`adna_conformance: <level>+<profile>` (profile names are snake_case, §6.1) with `adna_profile_version: <semver>`.
+A validator that does not know a profile MUST evaluate the base level and report the profile as unverified; it MUST NOT
+fail the instance for the suffix. A release of a declared profile MUST carry a release manifest (§15.5).
+
+**Named profiles.** The standard lists profiles; it does not host them. A profile's text and releases stay with its
+steward. Listing is recorded by the standard's maintainer at the steward's request (§7.7) and certifies nothing.
+
+| Profile | Steward | Version | Release manifest root | Status |
+|---|---|---|---|---|
+| *(none listed yet)* | | | | |
```

## Hunk 4 — §7.2 optional base field (clause 4a) · after L666

```diff
 **Per-class profile** (v2.5, ADR-044): … The other five base fields remain required for all classes.
+
+**Optional base label** (v2.6, aDNA.aDNA ADR-066 clause 4a): `data_tier: GREEN | AMBER | RED`. It records how far a
+file's content may travel (GREEN ⊂ AMBER ⊂ RED in what may be seen). The value space is the fleet's `DataTier`
+(LatticeProtocol `lattice_core`; LinkML.aDNA compliance slots); this standard names the key and mints no values. A profile
+MAY make it required and MAY narrow it. It is a label, never data.
```

## Hunk 5 — §11.3 last line (clause 3) · L938

```diff
-Agents MUST check `who/coordination/` during every session startup.
+Agents MUST check `who/coordination/`, when it exists, during every session startup.
```

## Hunk 6 — §15.1 archive-don't-delete + purge carve-out (aDNA.aDNA ADR-063 E-2 + aDNA.aDNA ADR-066 clause 4b) · after L1119

```diff
 - Session history follows the same `YYYY-MM/` pattern regardless of environment
+
+**Archive-don't-delete** (both environments; aDNA.aDNA ADR-063 E-2): governance records, decisions, mission and session
+files are archived — moved under `archive/`, `history/`, or kept in git history with a status flip — never deleted.
+Deletion of a record is itself a recorded decision.
+
+**Purge exception** (v2.6, aDNA.aDNA ADR-066 clause 4b): secrets, and regulated data (RED material, or data under a legal
+erasure duty), found where they must not be MUST be purged from the working tree and from history. The purge leaves an
+incident record that holds no payload — class, location, date, actor, and how the purge was verified.
```

*If E-2 is rejected and clause 4b accepted, the first paragraph drops and the second begins "Exception to the practice
of never deleting records:".*

## Hunk 7 — new §15.5 Release Integrity (clause 2) · after §15.4

```diff
+### 15.5 Release Integrity (v2.6, aDNA.aDNA ADR-066 clause 2)
+
+A release MAY ship `manifest_sha256.txt` at its root; a release of a declared profile (§5.5) MUST.
+
+- **Input**: the files listed by `git ls-files -s` at the release commit, minus the manifest and any paths the header
+  declares excluded. Untracked files are never in a manifest.
+- **Normalization** (checked, never applied): UTF-8 without BOM, LF line endings; relative, `/`-separated,
+  NFC-normalized paths with no `..`, leading `/`, or newline. A validator rejects un-normalized input. Hashes are over
+  raw bytes.
+- **Lines**: `<sha256-hex>  <git-mode>  <path>`, two-space separated, sorted by bytewise-ascending path; a symlink
+  (`120000`) hashes its target string.
+- **Header** (bound into the root): `# adna-release-manifest v1`, `# profile:`, `# profile_version:`, `# upstream:`
+  (standard version and commit), `# scope: release | instance_profile`, `# algorithm: sha256`, `# files:`, `# excluded:`.
+- **Root**: `# root: <sha256>` over the exact bytes of every line above it, each terminated by `\n`.
+
+`scope: instance_profile` covers the rule surface a profile defines. It MUST include the governance files and any
+module that changes data egress or model routing. An instance whose instance-profile root equals the release's (after
+declared modules) runs unmodified rules. A manifest root identifies files; it is not a package address, and neither
+stands in for the other. Anchoring a root anywhere external is outside this standard.
```

## Header changelog line (the cut's, not now)

At the v2.6 cut, one `<!-- v2.6 … -->` line in the header block names the accepted clauses. The §15.4 version-cut
checklist governs; this file does not pre-write it.

## Derived

7 hunks: clause 1 × 1 · clause 2 × 1 · clause 3 × 3 · clause 4 × 2 (4a × 1 · 4b × 1, the latter shared with E-2). Each
hunk's minus lines were copied from v2.5 at the line named and re-checked by `grep -nF` at drafting.
