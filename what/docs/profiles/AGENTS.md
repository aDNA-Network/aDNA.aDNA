---
type: directory_index
created: 2026-10-19
updated: 2026-10-21
status: active          # aDNA.aDNA ADR-066 clause 1 accepted at ARCADE G3 (2026-10-19) and standard text from v2.6 (§5.5); the table stays empty of listed rows until a steward's release. Was: proposed until G3
last_edited_by: agent_rosetta
campaign_id: campaign_arcade
mission_id: mission_arcade_a3_3_profile_scaffolding
tags: [directory_index, docs, profiles, conformance, adr_066, arcade]
token_estimate: ~900
---

# what/docs/profiles/: the list of named conformance profiles

> **In one sentence:** this directory is a **list, not a library**. It records which named profiles of the aDNA
> standard exist, who looks after each one, and how to check that a copy is unmodified. The profiles themselves live
> with their stewards.

## Purpose

**For a newcomer.** The aDNA standard has conformance levels (Starter, Standard, Full) that say how much of the
standard a graph uses. A **profile** is a named set of extra rules that a field (medicine, for example) adds on top of
one level. It can add rules and never remove one. A clinic's graph can say "I am Starter, plus the medical rules" and a
checker can test both halves. This page is where the standard writes down that such a profile exists.

**For a developer.** aDNA.aDNA ADR-066 clause 1 (proposed): a profile is a named, versioned overlay on exactly one
conformance level, declared as `adna_conformance: <level>+<profile>` with `adna_profile_version: <semver>` in
`MANIFEST.md`. It keeps every base MUST, may add MUSTs and SHOULDs, and never relaxes a base MUST. A validator that does
not know the profile evaluates the base level and reports the profile as **unverified**, never failed. "Official"
means **listed here**, not hosted here.

*Self-reference (Standing Order 8):* this file shows the rule it states. It holds names, pointers and one hash per
row. It holds no rules of any profile. Compare `what/docs/adna_standard.md` one directory up, which does hold the
standard's own text, because this vault is the standard's steward.

## The rule for this directory

| This directory holds | It never holds |
|---|---|
| the listed-profile table below | a steward's profile text, rules or tools |
| this `AGENTS.md` | copies of a profile's release bytes |
| pointers (steward graph, spec path, release manifest root) | any certification, endorsement or compliance claim |

Listing is a §7.7 act of the standard's maintainer at the steward's request. **Listing certifies nothing.** It records
that a profile exists and how to check a copy against its release manifest (aDNA.aDNA ADR-066 clause 2, the §15.5
draft), not that the profile is safe, sufficient or compliant. Distribution is the steward's. An exchange is one
channel.

## Listed profiles

| Profile | Base level | Steward | Current version | Spec (at the steward) | Release manifest root | Listed | Tense |
|---|---|---|---|---|---|---|---|
| *(none listed yet)* | | | | | | | |

### Expected (not yet listed)

| Profile | Base level | Steward | Where it stands | Lists when | Tense |
|---|---|---|---|---|---|
| `medical` (aDNA-Medical) | `starter` (declared `starter+medical`) | AILedger.aDNA (Operation Lister) | spec v0.1 draft, steward's Gate 1 | the steward's Gate 3 release, on the steward's request | `HORIZON` |

*R2 (ARCADE, 2026-10-15):* the steward cell above names a graph. Nothing in this table is copied to a public
surface (`site/`, the released image) until the operator says "publication". Until then a public copy names the
profile only.

A row moves from *Expected* to *Listed* only with all four filled: steward, a released version, a spec path at the
steward, and that release's manifest root. Each move carries its own §7.7 line, recorded in the row's `Listed` cell.

## How to add a profile (for a steward)

1. Write the profile spec in **your own** graph. `how/templates/template_profile_spec.md` is the skeleton.
2. Cut a release with `manifest_sha256.txt` at its root (the §15.5 algorithm, aDNA.aDNA ADR-066 clause 2).
3. Send a memo to Rosetta (`who/coordination/inbox/`) asking for listing, with name · base level · version · spec path
   · manifest root.
4. The maintainer checks the four fields, puts the row to the operator for a §7.7 line, and adds it here. Nothing of
   yours is copied in.

The fold path for upstream changes a profile proposes (as distinct from listing it) is
`how/campaigns/campaign_arcade/artifacts/p3/lister_fold_path.md`.

## Load/Skip Decision

**Load** when declaring, checking or listing a profile, or answering "is profile X official?". **Skip** for ordinary
graph work at a base level. Nothing here changes what Starter, Standard or Full require.

## Related

[[adr_066_conformance_profiles_release_integrity]] (clauses 1–2) · [[adr_065_standard_position_two_estates]] §6 (the
first named profile) · [[template_profile_spec]] · [[validator_profile_design]] · [[lister_fold_path]] ·
[[spec_graph_exchange]] §8 (`<level>+<profile>` pre-stated) · `what/docs/AGENTS.md` (parent index)
