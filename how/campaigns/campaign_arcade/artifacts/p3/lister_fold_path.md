---
type: artifact
artifact_class: process_note
created: 2026-10-19
updated: 2026-10-19
status: proposed        # a documented path, not a rule; ruled at G3 with the rest of P3
last_edited_by: agent_rosetta
campaign_id: campaign_arcade
mission_id: mission_arcade_a3_3_profile_scaffolding
tags: [artifact, arcade, p3, fold_path, lister, upstream, aep, adr_055, adr_066]
---

# The fold path: how a profile's upstream findings become standard text

> **In one sentence:** when Operation Lister finishes its M7 upstream AAR in the steward's graph, its findings
> reach this standard by **memo**, become a **private proposal** here, are decided as an **ADR** (and, for public
> normative change, an **AEP**), and enter `adna_standard.md` only at a **version cut**. No step writes in the other
> estate.

**For a newcomer.** A team building a specialised version of aDNA (a "profile") will find things the general
standard should change. This page is the route those findings take. Each step has an owner. At no point does one
team edit the other team's files. They send notes, and each side changes its own.

**For a developer.** This instantiates ARCADE rule 1 (memos, never edits, across an estate boundary), aDNA.aDNA
ADR-055 (the AEP process: normative change escalates to an AEP; only a human ratifies) and standard §15.4 (version
cut). The first traveller is the A3.1 reading, `lister_upstream_disposition.md` (U1–U25). Its four profile-seam rows
(U15 · U18 · U19 · U23) already took this path early, as aDNA.aDNA ADR-066.

## The path

| # | Step | Where | Who acts | Boundary crossed | Tense today |
|---|---|---|---|---|---|
| 1 | M7 upstream AAR: candidates with IDs, the upstream section each touches, a proposed disposition | AILedger.aDNA `how/campaigns/campaign_adna_medical/` (`upstream_candidates.md` + M7's AAR) | the steward's desk (Lannes for Jake · Stanley's desk) | none | `HORIZON` (M7 not run; Phase 1 at Gate 1) |
| 2 | **Memo** to Rosetta naming the AAR's path + commit; the AAR stays where it is | sender's `who/coordination/` → our `who/coordination/inbox/` by the drop-box doctrine | the steward (send is their act) | **estate → standard**, by memo only | `PASS` as a route (10-19 memos used it) |
| 3 | Read at the object; one disposition per candidate: accept-now · next minor · next major · decline (with reason) | `how/campaigns/<campaign>/artifacts/` (A3.1 is the model) | Rosetta | none | `PASS` (A3.1 did this for Phase 1) |
| 4 | **Private proposal** per accepted cluster: `how/backlog/idea_upstream_<slug>.md`, citing candidate IDs and the steward's commit | `how/backlog/` | Rosetta | none | `PASS` as a mechanism |
| 5 | **ADR** for this vault's text: `what/decisions/adr_<NNN>_<slug>.md`, `proposed`, one §7.7 line per independent clause, standard deltas as a diff artifact, `adna_standard.md` byte-unchanged | `what/decisions/` | Rosetta authors · the operator ratifies at a gate | none | `PASS` (aDNA.aDNA ADR-066, proposed) |
| 6 | **AEP** for the public record when the change is normative (aDNA.aDNA ADR-055 §5). The ratified AEP spawns or cites the implementing ADR. It never re-badges one. | `site/src/content/proposals/` → `/community/proposals/` | Rosetta authors (agent authorship disclosed) · a human sponsor · the operator ratifies | **public**, so R2 and any patent hold apply | ⚠ **not yet taken for aDNA.aDNA ADR-066**, see below |
| 7 | **Version cut**: fold the ratified deltas into `adna_standard.md`, bump per §15.4, the five version surfaces, release to the image | `what/docs/adna_standard.md` → `.adna/` via `skill_template_release` | Rosetta · operator GO per outward act | **public** (image release) | `HORIZON` (A4.1 v2.6 · A4.2 v8.13) |
| 8 | **Reply memo** to the steward: each candidate's final disposition + the version that carries it; the steward re-pins | our `who/coordination/` → steward inbox | Rosetta (send GO) · steward (re-pin, their act) | standard → estate, by memo only | `HORIZON` |
| 9 | **Listing** (separate from folding): on the steward's release, a row in `what/docs/profiles/AGENTS.md` with its own §7.7 line | `what/docs/profiles/` | Rosetta at the steward's request · operator ratifies | none (public only when the vault is pushed) | `HORIZON` (Lister Gate 3) |

**What never happens on this path.** Rosetta does not edit the steward's spec, ledger or candidates file. The steward
does not edit this vault. A candidate does not become standard text without passing steps 5 and 7. Listing (9) never
implies a fold (5–7), and the reverse holds too.

## ⚠ The gap this page found: aDNA.aDNA ADR-066 has no AEP

aDNA.aDNA ADR-055 §5 [D]: *"a change that is normative, one that alters what the standard requires of a
conforming vault, escalates from an issue to an AEP."* aDNA.aDNA ADR-066 is normative, yet it exists only as an ADR.
`site/src/content/proposals/` holds `aep-0001` and `aep-0002` only [D], and A4.1 q1 earmarks the next free number
for Noether's M-A1 rider.

**Recommendation for G3:** file **one AEP covering aDNA.aDNA ADR-066's four clauses**, citing it as the implementing
record, **at publication and not before**:
- The AEP lives on `site/`, a public surface, so ruling R2 (no public naming of the company) and the Q9 push hold
  (R25/R29) both apply.
- The AEP text names the **profile**, not its steward, until the operator says "publication".
- Until then, the step-6 cell stays ⚠ and the v2.6 cut (A4.1) records aDNA.aDNA ADR-066 as "AEP owed".

## Related

[[lister_upstream_disposition]] (the first traveller) · [[adr_066_conformance_profiles_release_integrity]] ·
[[adr_055_proposal_process]] · [[validator_profile_design]] · `what/docs/profiles/AGENTS.md` ·
[[mission_arcade_a4_1_standard_v2_6]] · `what/doctrine/doctrine_coordination_dropbox.md`
