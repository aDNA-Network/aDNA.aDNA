---
type: adr
adr_number: "061"
title: "Coordination-memo authorship is three-valued: persona · vault · authority"
status: accepted        # ⛩ Ratified 2026-09-17 — operator chat approval "All recs approved."; drafted 2026-09-16 from Vitruvius's P-3 question
created: 2026-09-16
updated: 2026-09-17
last_edited_by: agent_rosetta
campaign_id: ""
mission_id: ""
supersedes: ""
superseded_by: ""
probe_date: 2026-09-16
tags: [adr, coordination, memo, authorship, persona, vault, addressing, upstream, kw93]
---

# ADR-061 — Coordination-memo authorship is three-valued: persona · vault · authority

## Status

**Accepted** — ratified by the operator 2026-09-17 ("All recs approved.";
[[session_stanley_20260917_052304_garnier_ratification_batch]]). Drafted 2026-09-16 at the
gate-advisory sitting, answering the question
Vitruvius routed here as the standard's to rule
(`who/coordination/inbox/coord_2026_09_13_vitruvius_to_rosetta_fleet_persona_vs_vault_addressing.md`,
their KW-93). This is the fleet-level answer their memo asked for. The local memo
conventions adopt the fields at this ratification; the template touch waits for a release gate.

## The measured problem (WebForge's, taken as prior art)

A memo's author line can be true three ways at once — the **persona** who wrote it
(`agent_codex_berthier`), the **vault** it was sent from (`ScienceStanley.aDNA`), and the
**authority** it was sent under (that vault's operator ruling) — and a single `from:` field
holds one of them. The fleet's personas are genuinely not 1:1 with its vaults (Berthier writes
from four; Hestia writes everywhere), so every vault that solved this alone has solved it
differently — the drift class the standard exists to prevent (synthesis gap G-5).

## Decision (three clauses)

1. **Adopt three-valued authorship** as the standard coordination-memo shape: distinct
   optional fields for **persona**, **vault** (required), and **authority**, alongside the
   existing `from:` which remains the sender's free self-identification. WebForge's measured
   `memo_schema.py` implementation is the prior art; the standard adopts the shape, not the
   code.
2. **A sender's `from:` line is the sender's.** Receivers never normalize, re-spell, or
   roster-correct a correspondent's self-identification — WebForge's REFUSE posture is
   endorsed fleet-wide. A receiver that cannot roster a `from:` value records the memo under
   the three-valued fields instead.
3. **Which truth wins when one value must be displayed:** the **vault**, because it is the
   only one of the three that is also a filesystem address a recipient can resolve
   (convention 15's reachability lesson). Persona and authority annotate; vault locates.

## Consequences

- The coordination/memo template gains three optional frontmatter fields; existing memos are
  valid as-is (absent fields mean "the `from:` line carries it"), so no migration and no
  sweep.
- Vaults with local rosters may keep them; a roster miss stops being an error.
- Upstream filing rides the next template release (`idea_upstream_` filing listed below); the
  aDNA.aDNA-local memo conventions adopt the fields on ratification without waiting for the
  release.

## Ratification (§7.7)

- **Decision:** clauses 1–3 above.
- **Ratified-by:** Stanley Bishop, Founding Architect.
- **Date:** 2026-09-17.
- **Status:** accepted.
- **Gate / session reference:** operator chat approval “All recs approved.” (2026-09-17) + the two-question G4/G5 follow-up gate; [[session_stanley_20260917_052304_garnier_ratification_batch]].

Related: WebForge `memo_schema.py` + their `ferry_roster` (prior art, consumed by reference —
never forked) · `how/backlog/idea_upstream_template_decision_provenance.md` §companion note ·
convention 15 (memos state paths from the recipient's root).
