---
title: "AEP-4: Conformance profiles and release integrity"
description: "Proposes named profiles on top of one conformance level, a hash manifest at a release's root, an optional data-tier label, and a purge rule for secrets."
page_type: proposal
number: 4
proposal_title: "Conformance profiles and release integrity"
status: accepted
created: 2026-10-19
updated: 2026-10-20
authors: ["Stanley Sekar"]
sponsor: "Stanley Sekar"
authored_by_agent: "agent_rosetta (Claude)"
ratified_by: "Stanley Sekar, Founding Architect"
ratified_date: 2026-10-19
conformance_check: null
history:
  - date: 2026-10-19
    state: draft
    note: "Written as a decision record (aDNA.aDNA ADR-066) in four independent clauses, from a field's first profile draft read against the standard."
  - date: 2026-10-19
    state: review
    note: "Put to the operator at a gate, one line per clause, so any clause could be declined without the others."
  - date: 2026-10-19
    state: accepted
    note: "Ratified by Stanley Sekar, all four clauses as written. Released in standard v2.6 (sections 5.5, 7.2, 11.3, 15.1 and 15.5)."
superseded_by: null
supersedes: null
implements_adr: "aDNA.aDNA ADR-066"
discussion_url: "https://github.com/aDNA-Network/aDNA/issues"
---

**Status note.** This proposal is `accepted`, and its text is in the standard from v2.6. It was
**decided before it was filed**: the decision was written and ratified as a decision record on
2026-10-19, and this proposal was filed on 2026-10-20, when the standard was released.
[AEP-1](/community/proposals/aep-1/) asks for the proposal first. The order here was the other way
round, and the record says so rather than back-dating a review that did not happen in public. It
is not `final`: no check yet fails when a profile breaks its own rules, because no profile is
listed.

## Summary

Four independent changes, each ratified on its own line:

1. **Conformance profiles.** A field can define a **profile**: a named, versioned set of extra
   rules on top of exactly one conformance level. It keeps every rule of that level, may add its
   own, and never relaxes one. A graph declares `adna_conformance: <level>+<profile>`, for example
   `starter+medical`.
2. **Release integrity.** A release may carry `manifest_sha256.txt` at its root: one hash per
   file, computed by a method the standard writes out, so anyone holding a copy can check it is
   unmodified. A release of a declared profile must carry one.
3. **`who/coordination/` optional at Starter.** A one-agent Starter instance no longer needs the
   coordination directory; Standard instances, and any instance more than one agent writes, do.
4. **A data-tier label and a purge rule.** An optional `data_tier: GREEN | AMBER | RED` label in
   frontmatter, and a rule that secrets and regulated data found where they must not be are purged
   from the tree and its history, leaving an incident record with no payload.

## Motivation

The first profile drafted against the standard, for medicine, needed things the standard did not
have. It needed a way to say *Starter, plus these rules*, so that a checker could test both halves.
Saying `medical` alone reads as no conformance level at all. It needed a way to prove that a
copy of its rules was the released copy and not a locally edited one. And it needed two places
where the standard's own rules got in its way: a directory a one-person instance does not use,
and an archive-never-delete practice that must not apply to a leaked secret.

Without a way to layer rules, the only option was to fork the standard. A fork drifts, and a
checker cannot tell a fork's graph from a conforming one. A profile keeps the base rules
checkable and adds the field's on top.

## Specification (as ratified)

**Profiles (§5.5).**
- A profile MUST keep every MUST of its base level, MAY add MUSTs and SHOULDs, and MUST NOT relax a
  base MUST.
- It is declared as `adna_conformance: <level>+<profile>` with `adna_profile_version: <semver>`.
- A validator that does not know the profile MUST still evaluate the base level, and reports the
  profile as *unverified*, never failed. A bare level keeps its earlier meaning.
- **Official means listed, not hosted.** The standard keeps a short list of named profiles: name,
  steward, version, release manifest root. A profile's text stays with its steward. Listing records
  that a profile exists and how to check a copy; it certifies nothing. The list is empty at v2.6.
  The first expected entry is `medical`, at its own release.

**Release integrity (§15.5).**
- **Input:** the files git tracks at the release commit, minus the manifest and any data paths the
  header declares excluded.
- **Normalization:** checked, never applied. A validator rejects input that is not normalized,
  and hashes are taken over raw bytes.
- **Lines:** `<sha256>  <git-mode>  <path>`, sorted by path.
- **Header:** the profile, the upstream standard version and commit, the scope, the algorithm and
  the file count.
- **Root:** a final `# root:` hash over every line above it.

An instance's profile surface must include its governance files and every module that changes
where data goes or which model it reaches. A default is then inside the hashed surface and
visible, whatever it is. A manifest root identifies a release's files and an exchange's content
address identifies a published package; neither stands in for the other. Anchoring a root
anywhere external is outside the standard.

**Coordination directory (§5.5, §11.3).** Required at Standard, and wherever more than one agent
writes; optional otherwise. The startup check reads it *when it exists*.

**Data tier and purge (§7.2, §15.1).** `data_tier` is optional; the standard names the key and
mints no values. A profile may make it required and narrow it. It is a label, never data. The
purge rule is the one exception to archive-don't-delete, and the purge is itself a recorded
decision.

## Backwards compatibility

All four clauses are minor-compatible:
- Profiles add syntax, and a bare level keeps its meaning.
- The manifest is optional except for declared profiles, and none existed before v2.6.
- The coordination change relaxes Starter, and Standard instances already have the directory.
- The purge rule applies only to material that must not be present at all.

No instance that conformed to v2.5 stops conforming.

## What is unresolved

1. **The validator.** A profile-aware validator (`--profile <name>`, and `--verify` to recompute a
   manifest) is designed and not built. Until it is, the *unverified* rule is the only behaviour
   a checker owes a profile it does not know.
2. **The first listing.** No profile is listed. The list's first row will test whether "listed,
   not hosted" holds up in practice.

## Costs and objections

- **"A profile is a fork with better manners."** The difference is checkable: a profile cannot
  relax a base rule, so the base level can always be verified on its own.
- **"Listing looks like endorsement."** The list says in its own text that it certifies nothing.
  Whether readers believe that is a fair worry, and the reason the list holds pointers and hashes
  only.
- **A manifest is more release ceremony.** It is optional for an ordinary release. It is required
  only where a field has promised its users an unmodified rule set.
