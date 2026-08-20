---
title: "AEP-2: Canonical URL casing and permanent redirects"
description: "Proposes raising slug normalization and permanent redirects from one site's internal decision to a rule for any conforming vault publishing on the web."
page_type: proposal
number: 2
proposal_title: "Canonical URL casing and permanent redirects"
status: review
created: 2026-08-20
updated: 2026-08-20
authors: ["Stanley Sekar"]
sponsor: "Stanley Sekar"
history:
  - date: 2026-08-20
    state: draft
    note: "Filed under AEP-1 as the first substantive proposal. No sponsor."
  - date: 2026-08-20
    state: review
    note: "Sponsored by Stanley Sekar, who agreed to shepherd it through review."
authored_by_agent: "agent_rosetta (Claude)"
ratified_by: null
conformance_check: null
superseded_by: null
supersedes: null
implements_adr: null
discussion_url: "https://github.com/aDNA-Network/aDNA/issues"
---

**Status note.** This proposal is in `review`. It has not been decided and nothing in it is currently
required of anyone. It is the first substantive proposal filed under [AEP-1](/community/proposals/aep-1/).

## Summary

Vault names in aDNA are mixed-case and carry a suffix — `Operations.aDNA`, `RareArchive.aDNA`. URLs are
not. This proposal would make two rules normative for any conforming vault that publishes a web surface:

1. **A canonical slug law.** A vault's route slug is `lowercase(name)` with the `.aDNA` suffix dropped and
   anything outside `[a-z0-9_-]` folded to `_`. So `Operations.aDNA` publishes at `/vaults/operations/`.
   Display names keep their true casing in content; only URLs normalize.
2. **A published URL never dies.** When a route changes, the old one issues a `301` to the new one, and
   that redirect is kept permanently rather than pruned later.

## Motivation

Both rules already exist as an internal decision governing one site
([ADR-051](/reference/), adopted 2026-08-18). They were adopted after a census rather than on taste: across
all 74 vaults in the registry, the drop-suffix form produced 74 distinct slugs with **zero** collisions,
and 50 of 74 vaults were already routing that way. Keeping the suffix would also have been collision-free
— it would just have broken 50 working URLs to fix 24.

The reason to raise it to the standard is that mixed-case URLs are not a style question once vaults start
linking to each other. `/vaults/RareArchive/` and `/vaults/rarearchive/` are different resources to a web
server and the same resource to a human, and a federated network of vaults that has not agreed which one
is real will accumulate hard 404s between them. This site had 24 of them before the rule was applied.

## Specification (proposed)

A conforming vault that publishes a web surface:

- **MUST** derive route slugs by the law above, and **MUST** apply it where routes are built rather than
  where data is written — so that a hand-edited record cannot reintroduce a mixed-case route.
- **MUST** serve a `301` from any previously published route to its canonical successor.
- **MUST NOT** remove a redirect once published.
- **SHOULD** carry a check that fails the build when a non-conforming route appears.

Vaults that publish no web surface are unaffected.

## What is unresolved

A draft that lists no open questions is usually a draft that has not been read carefully.

- **Scope.** Is this a rule about *vault* routes specifically, or about every route a vault publishes?
  The census only covered vault routes.
- **Non-Latin names.** The `[a-z0-9_-]` fold is defined for ASCII. A vault named in another script would
  fold to a string of underscores, which is a bug rather than a policy. Transliteration or percent-encoding
  needs a decision before this could apply generally.
- **Enforcement.** Under [AEP-1's §4](/community/proposals/aep-1/), this cannot reach `final` until a check
  in aDNA's own tooling fails when the rule is violated. One exists for this site (`gate-30`); a check that
  ships *with the standard*, so any vault gets it, does not yet exist. That work is the real cost of this
  proposal.
- **Existing published vaults.** The rule is cheap for a vault that has not launched and expensive for one
  that has. A migration path — likely "apply going forward, redirect the past" — needs writing.

## Costs and objections

The honest objection is that this is a web-publishing convention being written into a knowledge-architecture
standard, and standards get worse when they annex adjacent domains. A reasonable counter-proposal is that
it belongs in a publishing profile rather than the core specification. That question should be settled
before this moves out of `draft`.
