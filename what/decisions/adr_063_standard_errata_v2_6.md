---
type: adr
adr_number: "063"
title: "Standard errata for the v2.6 window — two self-contradictions found by the data-engineers primer (§4.1 vs §5.5 required files · §6.5 → §15 dangling rule)"
status: proposed        # ⛩ drafted 2026-10-04 by agent_rosetta at mission_primer_followup_sweep O3; operator §7.7 at the standard v2.6 window — NOT before; adna_standard.md unchanged until then
created: 2026-10-04
updated: 2026-10-04
last_edited_by: agent_rosetta
campaign_id: ""
mission_id: "mission_primer_followup_sweep"
supersedes: ""
superseded_by: ""
probe_date: 2026-10-04
tags: [adr, standard, errata, v2_6, conformance, archive, proposed]
---

# ADR-063 — Standard errata for the v2.6 window

## Status

**Proposed** — drafted 2026-10-04 at `mission_primer_followup_sweep` O3. Ratification is the operator's, at the
standard's v2.6 window, **one §7.7 line per erratum** (they are independent). Until then `what/docs/adna_standard.md`
(v2.5) is byte-unchanged and both of its readings stand. *(Why a proposed ADR and not a quiet fix: the standard is the
one document in this vault that the vault may not edit on its own authority — Standing Order 9 — and an erratum is a
decision about which of two normative sentences wins.)*

## Context

Operation Primer (completed 2026-10-04) wrote an explainer *about* the standard for an outside data engineer. Writing
it forced every claim to be re-read at its object, and two places surfaced where the v2.5 text disagrees with itself.
Both were registered (`how/missions/artifacts/primer/source_inconsistencies.md` I-15 · I-17) and deliberately **not**
fixed in the primer, which states the tension instead. The drafted corrections are in
[[../../how/missions/artifacts/primer/errata_v2_6_drafts|errata_v2_6_drafts]].

## Decision (proposed)

- **E-1 (I-15):** §4.1's `AGENTS.md` and `STATE.md` rows read against the §5.5 conformance level (`MUST (Standard+) ·
  SHOULD (Starter)`); one sentence makes §5.5 govern where the two disagree. §5.5 untouched; no existing instance
  un-conforms (§15.4).
- **E-2 (I-17):** §15.1 gains the archive-don't-delete sentence that §6.5 already cites to it. §6.5 untouched.

## Consequences

- Each accepted erratum is a minor-version change (v2.5 → v2.6 with the window) applied to `adna_standard.md` and
  carried to the public image by `skill_template_release` (standard version = one of its five version surfaces).
- `adna_validate.py` needs no change for E-1 (it already implements §5.5) and none for E-2 (prose only).
- A declined erratum leaves the contradiction in place and this ADR records that it was seen and left — the honest
  shape (ADR-052 §tiers.6 precedent).

## Ratification (§7.7)

- **E-1** · **Decision:** — · **Ratified-by:** — · **Date:** — · **Status:** proposed.
- **E-2** · **Decision:** — · **Ratified-by:** — · **Date:** — · **Status:** proposed.
