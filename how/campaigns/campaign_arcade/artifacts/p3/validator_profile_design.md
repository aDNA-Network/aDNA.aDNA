---
type: artifact
artifact_class: design_note
created: 2026-10-19
updated: 2026-10-19
status: proposed        # interface only; the build is a later opus mission after the v2.6 cut (aDNA.aDNA ADR-066 is proposed until G3)
last_edited_by: agent_rosetta
campaign_id: campaign_arcade
mission_id: mission_arcade_a3_3_profile_scaffolding
tags: [artifact, arcade, p3, validator, profile, release_manifest, adr_066, design]
---

# `adna_validate.py --profile` and `--verify`: interface design (no code)

> **In one sentence:** this note describes how the standard's validator should learn to read
> `adna_conformance: <level>+<profile>`, check the base level as it does today, say honestly when it cannot check a
> profile, and recompute a release manifest. Nothing here is built.

**For a newcomer.** The validator is the program that tells a graph "you meet Starter" (or Standard, or Full). Once
profiles exist, a graph may say "Starter plus medical rules". The validator should check the Starter half the same
way it always has. For the medical half, it should either run the medical checks, if someone has given it those
checks, or say plainly "I could not check that part". Saying "you failed" would be wrong. Separately, it should be
able to recompute the fingerprint of a release (the manifest) and say whether anything changed.

**For a developer.** The interface sits on `what/lattices/tools/adna_validate.py` (today:
`path`, `--level {starter,standard,full}`, `--governance`, `--verbose`, `--json`; `ValidationResult` with
`errors · warnings · info · level`). It implements aDNA.aDNA ADR-066 clause 1.3 (the unknown-profile rule) and
clause 2 (the §15.5 manifest algorithm), both `proposed` and `HORIZON` until G3 and the v2.6 cut.

## 0. What the validator does today [D]

- It **auto-detects** the highest passing level (`determine_level`, full → standard → starter) or checks `--level`.
- It **never reads** `MANIFEST.md`'s `adna_conformance` field (`grep -n adna_conformance` on the file: 0 hits). So the
  declared level and the measured level are never compared today. That gap pre-exists profiles, and the design
  closes it as a side effect (§2 step 2).

## 1. Interface

```
adna_validate.py <path> [--level L] [--profile P[@V]] [--rules DIR] [--verify [MANIFEST]] [--json] [--verbose]
```

| Flag | Meaning |
|---|---|
| *(none)* | as today: auto-detect the level. If `MANIFEST.md` declares `adna_conformance`, also compare declared vs measured (§2). |
| `--level L` | as today. With a declared `L+P`, the explicit flag wins for the base half. |
| `--profile P[@V]` | evaluate profile `P` (version `V`, default = the declared `adna_profile_version`). Overrides the declaration's suffix. |
| `--rules DIR` | where the profile's rule set lives (the steward's validation pack, §4). Never fetched over the network, never bundled with the standard. |
| `--verify [MANIFEST]` | recompute the release manifest by §15.5 and diff against `MANIFEST` (default `<path>/manifest_sha256.txt`). |

**Parsing `adna_conformance`.** `^(starter|standard|full)(\+([a-z][a-z0-9_]*))?$`. Case-sensitive, so the profile
name is snake_case (§6.1). Anything else, including a bare profile name with no level (`medical`), is reported as
**an undeclared level**: a warning, not an error. The instance is still measured by auto-detection. *(A3.1 Q8: a bare
`medical` reads as no level upstream, so its own "passes Starter" claim cannot be checked. Write `starter+medical`.)*

## 2. Evaluation order

1. **Base level.** Run `check_starter` / `check_standard` / `check_full` exactly as today, for the declared base level
   (or `--level`). Base errors are errors.
2. **Declared vs measured.** If declared `L` and measured `M` differ, add a warning `declared L, measures M`. Never
   an error at v2.6, because a mismatch was never checked before and reddening it would break §15.4's minor promise.
3. **Profile.** Exactly one of three outcomes, recorded in a new `profile` result block:

| Outcome | When | Effect on exit code |
|---|---|---|
| `verified` | a rule set for `P@V` was given (`--rules`) and every profile MUST passed | 0 if the base passed |
| `failed` | a rule set was given and a profile MUST failed | 1 |
| `unverified` | no rule set for `P@V` was found | **as the base alone**. Never fails for the suffix (aDNA.aDNA ADR-066 clause 1.3) |

4. **Listing (informational only).** If `P` appears in `what/docs/profiles/AGENTS.md` (when the validator runs inside
   or alongside this vault), print `listed: <steward> <version> <root>`. Listing changes no outcome, because listing
   certifies nothing.

**JSON addition** (additive, so existing consumers ignore it):

```json
"profile": {"name": "medical", "version": "0.1.0", "outcome": "unverified",
            "rules_source": null, "listed": false, "checks": []},
"declared_conformance": "starter+medical", "measured_level": "starter"
```

## 3. `--verify` (the §15.5 algorithm, no second spelling)

The validator implements aDNA.aDNA ADR-066 clause 2.2 **as written there** and restates none of it here:
`git ls-files -s` at HEAD as input · normalization **checked, never applied** (reject on BOM / CRLF / non-NFC /
`..` / leading `/` / newline in path) · `<sha256>  <mode>  <path>` lines, bytewise-sorted · symlink hashes its target
string · header bound into `root`.

| Result | Meaning | Exit |
|---|---|---|
| `match` | recomputed root = recorded root | 0 |
| `drift` | lists every added / removed / changed path (and mode change) | 1 |
| `rejected` | an input file fails normalization (named) | 1 |
| `malformed` | the manifest's header or line grammar is wrong | 1 |

- `scope: instance_profile` uses the profile's declared scope list (from the rule set). It MUST include governance
  files and every egress or model-routing module (clause 2.3). If the rule set is absent, the result is
  `unverified` for that scope, as in §2.
- **Two digests, never conflated.** `--verify` reports the manifest root only. It never reads or emits an exchange
  content address (Exchange.aDNA ADR-065).
- **No network.** No anchoring lookup, no fetch (clause 2.5).
- **Golden test owed at build.** A fixture tree with one CRLF file, one symlink and one non-ASCII path. The expected
  root is computed independently (e.g. the steward's `tools/validate_medical.py --verify`), so the two implementations
  check each other.

## 4. The rule-set seam, with Lister's V1–V14 as the first instance

A profile's rule set is the **steward's** validation pack (template §13), loaded from `--rules DIR`. The standard
ships the loader and the outcome rules, never a profile's checks. The mapping below records which of the first
profile's checks (AILedger.aDNA `adna_medical_spec.md` v0.1 §13, read on `stanley/quatre-mains-m00` at `9e0b0d12`) the
base validator already covers, and which the profile pack must bring.

| Check | Requirement (steward's ID) | Base already covers? | Lives in |
|---|---|---|---|
| V1 | governance set + budgets (MED-4.2, 4.3) | partly: Starter governance files | profile pack (N = 4 + budgets) |
| V2 | skeleton dirs incl. empty `who/coordination/` (MED-4.1, 3.4) | yes at v2.5; **moot after clause 3** (optional at Starter) | profile pack, minus the `.gitkeep` |
| V3 | frontmatter subset, `data_class` present, no `phi` in triad (MED-5.1, 7.2.1) | no | profile pack (`data_tier` ceiling + the prefixed label) |
| V4 | naming, `type_` prefix, no hyphens (MED-5.3) | partly: §6.1 naming | profile pack (stricter) |
| V5 | no `.obsidian/`, no vendored third-party code (MED-4.1.2) | no | profile pack |
| V6 | `git remote` empty unless an egress module declares it (MED-7.3) | no | profile pack |
| V7 | `tools/` stdlib-only, no network imports (MED-7.3.3) | no | profile pack |
| V8 | pre-commit hook installed and identical (MED-7.4) | no | profile pack |
| V9 | `AGENTS.md` symlink/equal (MED-4.2.1) | no | profile pack |
| V10 | no harness-injected lines in governance files (upstream §13.2.4) | **yes**: `check_harness_injection` | base |
| V11 | manifest verify (MED-11.6) | **yes, by `--verify`** (§3) | base |
| V12 | module descriptors valid, hashes match, deps present (MED-10.3) | no | profile pack (module interface is the profile's) |
| V13 | session frontmatter + three body sections (MED-6.2, 6.3) | no | profile pack |
| V14 | relative links resolve, no absolute home paths (MED-8.1(f)) | no (the absolute-path probe is advisory, CLAUDE §Path references) | profile pack; a base SHOULD candidate for v2.x |

Count, derived from the table: base covers fully **2** (V10, V11) · partly **2** (V1, V4) · not at all **9** ·
moot after clause 3 **1** (V2) = 14.

**Rule-set file shape (proposed, the steward's to accept).** `DIR/profile_rules.yaml` lists `profile` · `version` ·
`base_level` · `instance_profile_scope` (paths) · `checks:` (id · requirement · severity MUST/SHOULD · entry point).
Entry points are callables in `DIR` that the loader imports **only** when `--rules` is given explicitly. The standard
runs no steward code by default.

## 5. Out of scope here

The build (a later opus mission, after the v2.6 cut) · any profile's checks · listing automation · anchoring ·
exchange integration.

## Related

[[adr_066_conformance_profiles_release_integrity]] · `what/docs/profiles/AGENTS.md` · [[template_profile_spec]] ·
[[lister_fold_path]] · [[lister_upstream_disposition]] (A3.1 Q8) · [[mission_arcade_a3_3_profile_scaffolding]]
