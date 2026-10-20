---
title: "AEP-3: One master, many faces: memorialized data models"
description: "Proposes that a data model read across graph boundaries be held as one master, with every other surface generated from it, stamped with its hash, and checked."
page_type: proposal
number: 3
proposal_title: "One master, many faces: memorialized data models"
status: accepted
created: 2026-10-16
updated: 2026-10-20
authors: ["Stanley Sekar"]
sponsor: "Stanley Sekar"
authored_by_agent: "agent_noether (Claude) drafted it; agent_rosetta (Claude) numbered it, filed it and edited it for publication"
ratified_by: "Stanley Sekar, Founding Architect"
ratified_date: 2026-10-20
conformance_check: null
history:
  - date: 2026-10-16
    state: draft
    note: "Drafted by agent_noether in a peer graph that already applied the rule to its own models; unnumbered until filing."
  - date: 2026-10-20
    state: review
    note: "Reviewed at the operator's gate for standard v2.6, together with the standard's answers to the draft's six open questions."
  - date: 2026-10-20
    state: accepted
    note: "Ratified by Stanley Sekar as aDNA.aDNA ADR-067: the qualifying test, the v2.6 SHOULD and the stamp check accepted; the v3.0 MUST logged, not ruled. Released in v2.6 as section 19.9."
superseded_by: null
supersedes: null
implements_adr: "aDNA.aDNA ADR-067"
discussion_url: "https://github.com/aDNA-Network/aDNA/issues"
---

**Status note.** This proposal is `accepted`. Its rule is in the standard from v2.6 as §19.9, as a
SHOULD, so nothing in it is required of anyone. It is not `final`: the check that enforces it
reports a stale stamp as a warning and never fails, and [AEP-1](/community/proposals/aep-1/) holds
a proposal at `accepted` until a check fails when the rule is broken. It was filed on 2026-10-20,
four days after it was drafted and on the day it was ratified. The number was assigned at filing.

## Summary

Some data models are read by more than one graph: a lattice schema, a task record, a canvas
format. Today each one tends to live in several hand-kept files (a JSON Schema here, a prose
spec there, a diagram somewhere else), and the copies drift apart. A reader cannot tell which copy
is current, or whether any is.

This proposal adds one discipline for those models:

1. **One master.** The model is held in one machine-readable file. Every other surface (the
   schema, the prose pages, the diagram, the canvas, the code) is generated from it. None is
   written by hand.
2. **Every surface names its master by hash.** Each generated surface carries a short stamp: the
   master's path and the first 16 hex characters of the sha256 of the master's bytes. A copy of
   the master held in another graph carries the same stamp, or a pin file recording the master's
   path and full hash.
3. **A check proves it.** The owner keeps one check that recomputes every hash and regenerates
   every surface, and fails on any difference. The check trusts no recorded value.

## Motivation

**The defect is one file read as truth in several places, by hand.** A survey of one workspace
found the standard's own lattice schema at 84 paths in 4 different byte-variants, one widely
copied curation schema at 34 copies with one diverged, and roughly 44 models that other graphs
read. Every copy was somebody's honest attempt to keep a current file. None of them said which
version it was.

**The rule was already working where it had been tried.** One graph had held its core schema as a
single master with four generated surfaces (a schema, 77 prose pages, a diagram and a canvas)
and one script that regenerated and compared all of them. When a dependency changed, re-running
the script moved exactly the values that changed and nothing else. That is the property this
proposal wants everywhere: a change shows up where it happened and nowhere else.

**A periodic inventory always trails.** The same survey, run thirteen days apart, found eight more
qualifying models the second time. A rule each owner applies when authoring scales; an inventory
one desk maintains does not.

## Specification (as ratified)

**Qualifying test.** A data model **qualifies** when a graph other than its owner's reads,
validates against or copies it. A model read only inside its owning graph is not covered. The
owner judges; the standard does not compute it.

**Standard v2.6, §19.9 (SHOULD and MAY only).** A conforming instance that owns a qualifying
model:

1. SHOULD hold it as one master and generate its other surfaces from it. The master SHOULD be
   LinkML; a master in another schema language is not nonconformant.
2. SHOULD stamp each generated surface with the master's path and the first 16 hex characters of
   its sync hash (sha256 over the master's bytes, exactly as committed, with no normalization). The
   stamp is a pattern, not a literal, so a canvas, whose own standard already uses `sync_hash` for
   another value, labels it `source_sha256`.
3. SHOULD record the full 64-hex sync hash on the master's descriptor.
4. SHOULD keep one check that recomputes the hash, regenerates every surface, and fails on any
   difference.
5. SHOULD treat a copy of the master held in another graph as a generated surface: stamped, or,
   for a byte-for-byte copy, pinned in a pin file. The copying graph's check compares the copy with
   the master's hash wherever the master is present.
6. MAY apply all of this to a model read only inside its own graph.

**Enforcement.** The instance validator recomputes the hash behind every stamp it finds. A
mismatch is a **warning**. A stamp whose master is not on the machine is reported
**unverifiable**, never failed, because a fork usually does not carry its upstream masters.

**Logged for v3.0, not ruled.** The draft proposed that the same clauses become MUST for every
qualifying model a **Full** instance owns, with migration guidance, while Starter and Standard
keep the SHOULD. That step is recorded for the next major version. Nothing here commits the
standard to it.

## Backwards compatibility

The v2.6 rule adds no MUST, no required file and no required key. Every instance that conformed
to v2.5 conforms to v2.6, and an instance that ignores every SHOULD here remains conformant. The
validator keeps to the same line: a stale stamp is a warning, so the check cannot turn the SHOULD
into a MUST by the back door. The v3.0 step would be breaking by design, which is why it waits
for a major version and is confined to Full conformance.

## What is unresolved

1. **Licences across generated surfaces.** When a generator under one licence emits a surface
   from a master under another, which licence the surface carries is not settled. Open.
2. **Where the descriptor and stamp keys live.** The standard's position: in the LinkML profile,
   not in the standard's text.
3. **The level at v3.0.** Full only, for now; to be revisited at the major version.
4. **Who re-measures the qualifying set.** Each owner, re-measured at each minor version.

The draft's other two questions are answered by the ratified text: the rule sits in the standard
as §19.9, and a pin file is accepted in place of a stamp for a byte-for-byte copy.

## Costs and objections

- **"This is tooling, not architecture."** In part. The defect is cross-graph, so a convention one
  graph keeps alone does not close it.
- **The burden on small graphs.** Writing a generator for each surface is real work. The v2.6 step
  costs nothing until a graph adopts it.
- **Lock-in to LinkML.** None is added: a master in another schema language stays conformant.
- **The inventory will be wrong again.** It will. That is why the qualifying test is a rule each
  owner applies, and any list of qualifying models is informative only.
