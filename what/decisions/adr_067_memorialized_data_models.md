---
type: adr
adr_number: "067"
title: "Memorialized data models — a boundary-crossing data model is held as one master with stamped, checked faces: SHOULD at v2.6 (§19.9); the v3.0 MUST for Full conformance is logged, not ruled"
status: accepted        # ⛩ RATIFIED 2026-10-20 at ARCADE G4 (operator Stanley, R43 "Signed as recommended", gate row A8): clauses 1, 2 and 4 accepted; clause 3 LOGGED for the v3.0 window, not ruled. In force once the Noether reply (gate row C1) is sent. AEP owed at publication (R2 + R41).
created: 2026-10-20
updated: 2026-10-20
last_edited_by: agent_rosetta
campaign_id: campaign_arcade
mission_id: mission_arcade_a4_1_standard_v2_6
supersedes: ""
superseded_by: ""
probe_date: 2026-10-20
authored_by: "agent_noether (LatticeProtocol.aDNA, Operation ACADÉMIE M-A1a) — draft adopted, numbered and put to the operator by agent_rosetta (aDNA.aDNA ADR-061 three-valued authorship: drafted elsewhere, adopted here)"
source_draft: "LatticeProtocol.aDNA/how/campaigns/campaign_academie/artifacts/m_a1_package/adr_draft_multimodal_memorialization.md (LP HEAD ea4ebcb, md5 832bbc27…, read only; nothing copied back)"
implements_aep: "AEP-0003 (Noether's aep_0003_multimodal_memorialization.md) — number confirmed free (site/src/content/proposals/ holds 0001 · 0002); filed at publication, not before"
visibility_note: "PUSH HELD (R25/R29/R40/R41): committed locally; this repo is GitHub-public. Private-side naming unaffected (R2)."
tags: [adr, schema, linkml, memorialization, sync_hash, conformance, v2_6, v3_0, accepted]
---

# aDNA.aDNA ADR-067 — Memorialized data models

## Status

**Accepted 2026-10-20** at ARCADE G4 (operator R43, gate row A8): clauses **1, 2 and 4** as drafted; clause **3 is
logged for the v3.0 window and not ruled**. Clause 2's text is folded into `adna_standard.md` v2.6 as **§19.9**. The
ADR is **in force once the reply to Noether is sent**, because that reply carries the standard's answers to the six
open questions the draft's AEP lists (gate row C1).

*Authorship (aDNA.aDNA ADR-061):* drafted by **Noether** (LatticeProtocol.aDNA) for this vault on 2026-10-16; adopted,
numbered 067 (the seat held at the G2 sitting) and put to the operator by Rosetta. The draft stays byte-unchanged
in LP. *Plain version:* another graph wrote this rule and offered it; this vault's operator accepted it; the
standard now carries it as advice (SHOULD), not yet as a requirement.

## Context

aDNA.aDNA ADR-062 (accepted 2026-10-03) housed LinkML at the standard and made it the preferred, optional vocabulary for
machine-checkable shapes; vaults keep their schemas in their own `what/`. It is silent on the next question: **once a
model has a master, what does its owner owe for everything derived from it?** The derived files drift. Noether's
roster (2026-10-16, `[R]`, the package's `roster_qualifying_set.md`) counts the standard's own lattice schema at 84
paths in 4 byte-variants, `curation_schema.yaml` at 34 copies (one diverged) and the task-entity schema at 9, and about
44 qualifying models across the workspace.

LatticeProtocol answered the question for its own estate (LatticeProtocol.aDNA ADR-008 one master · LatticeProtocol.aDNA ADR-010 the floor ·
LatticeProtocol.aDNA ADR-018 the sync hash · LatticeProtocol.aDNA ADR-019 the canvas twin, all accepted there) and proved it on `lattice_core`
(`LatticeProtocol.aDNA/what/schemas/`).

## Decision

1. **The qualifying test** (accepted). A data model **qualifies** when a graph other than its owner's reads, validates
   against, or copies it. A model read only inside its owning graph is a single-consumer internal, and the rule does
   not apply to it. The test is the owner's judgement; the standard does not compute it.
2. **v2.6, as a SHOULD — no new MUST** (accepted; folded as §19.9). A conforming vault that owns a qualifying model
   SHOULD hold it as one master (LinkML preferred, per aDNA.aDNA ADR-062 clause 2), SHOULD generate its other surfaces from it,
   SHOULD stamp each generated face with the master's path and its 16-hex sync hash (sha256 over the master's bytes —
   a pattern, so a canvas labels it `source_sha256`), SHOULD record the full digest on the master's descriptor, SHOULD
   keep one check that recomputes and regenerates, and SHOULD treat a copy held in another graph as a face. It MAY
   apply all of this to a single-consumer internal. The roster is an **informative** annex, cited by path, not copied.
3. **v3.0, as a MUST for Full conformance** — **logged, not ruled.** The draft's proposal (the same clauses become
   MUST for every qualifying model a Full vault owns; Starter and Standard keep the SHOULD; migration guidance ships
   with v3.0) is carried to the major window unchanged. Nothing here commits the standard to it.
4. **Enforcement** (accepted). `adna_validate` gains a stamp-currency check: for any file carrying a stamp it recomputes
   the named master's sha256. A mismatch is a **warning** at v2.6. A stamp whose master is not present is reported
   **unverifiable**, never failed. The qualifying test is not machine-checked. *(Tooling lands with the v8.13 image,
   A4.2 — tense TAUGHT-AS-DESIGN until it does.)*

## Consequences

- **v2.6 (§15.4 minor-safe):** SHOULD/MAY only; no instance that conforms to v2.5 stops conforming.
- The standard's own `lattice_yaml_schema.json` is the first qualifying model it owns. LinkML.aDNA holds a candidate
  master (`what/schemas/lattice_master.linkml.yaml`); adopting it is a separate decision this ADR does not make.
- Peers keep sovereignty: each owner applies the discipline to its own models in its own `what/` (aDNA.aDNA ADR-062 clause 3).
- **Open before v3.0** (the AEP's questions; the standard's positions are in the Noether reply): licences across
  generated faces (Q1, open) · where descriptor and stamp keys live (Q2, the profile) · the level at v3.0 (Q4, Full
  only, revisit) · the stamp's exact text (Q5, a pattern; a pin file accepted for byte copies) · who audits the roster
  (Q6, the owner, re-measured at each minor cut). Q3 (placement) is answered by this ADR: §19.9.

## Ratification (§7.7)

| Field | Value |
|---|---|
| **Decision** | Clauses 1, 2 and 4 accepted as drafted; clause 3 logged for the v3.0 window, not ruled |
| **Ratified-by** | Stanley (operator), ARCADE G4 ruling R43 ("Signed as recommended"), `how/gates/arcade_v2_6_gate.md` row A8 |
| **Date** | 2026-10-20 |
| **Status** | accepted — in force once the C1 reply to Noether is sent; AEP-0003 owed at publication |

## Citations

- Draft: `LatticeProtocol.aDNA/how/campaigns/campaign_academie/artifacts/m_a1_package/` (`adr_draft_multimodal_memorialization.md` · `aep_0003_multimodal_memorialization.md` Step 1 · `roster_qualifying_set.md`), read at LP `ea4ebcb`.
- Triage: `who/coordination/coord_2026_10_16_rosetta_to_noether_m_a1_package_triaged_v2_6_rider_to_a4_1_v3_0_to_its_window_seat_067_held.md`.
- Queue + gate: [[v2_6_cut_queue]] row A8 · [[arcade_v2_6_gate]].
- Related: [[adr_062_linkml_adoption]] · [[adr_066_conformance_profiles_release_integrity]] (the release-integrity manifest is a different digest: a release manifest hashes a release's files; a sync hash hashes one master).
