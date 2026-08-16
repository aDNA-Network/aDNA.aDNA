---
type: exemplar_site
site: tc39.es
functional_role: standards committee (numbered-proposal process)
tonal_revolutionary: 30
created: 2026-08-16
updated: 2026-08-16
inspected: 2026-08-16
inspected_lens: craft-reference (Haussmann B.7 dossier)
added_by: campaign_haussmann
persona: rosetta
status: active
last_edited_by: agent_rosetta
hero_word_count: ~2 ("Specifying JavaScript." + ~25-word descriptor)
section_count: 5
above_fold_focus: committee identity + mission
nav_model: flat (4–5 — Specs / Contribute / State of Proposals)
density_band: medium-sparse
demo_as_proof: Stage-3 proposal cards ("close to completion") with named champions
needs_operator_capture: [palette_exact]
tags: [exemplar_site, tc39, proposal_process, stage_model, committee, haussmann_b11]
---

# site_tc39 — TC39 (tc39.es + the proposals table)

> **The stage-model exemplar** — the committee that runs JavaScript's evolution through a numbered 0→4 stage ladder, whose *primary content is a table*. Inspected home + the canonical proposals table (`github.com/tc39/proposals`). Judged from HTML only [I] — outside the 5-capture budget.

## Captured (rubric)

- **Hero:** "**Specifying JavaScript.**" — 2 words, the shortest hero in the corpus; a ~25-word descriptor follows. Identity, not pitch.
- **Sections (5):** hero → contribute → specs → "State of Proposals" (Stage-3 candidates surfaced on home) → footer with per-stage links.
- **The proposals table (the primary content):** organized **by stage, one table per stage** (Stage 3 ~13 · 2.7 ~5 · 2 ~30+; Stages 0–1, finished, and inactive in **separate files**). Columns: **Proposal · Author · Champion · Test262 flag · Meeting notes** (dated links). The author/champion split credits *initiator* vs *current steward*; meeting-note links give every row a provenance trail.
- **Process anchor:** everything points at one canonical **process document** — the stage ladder is defined once and referenced everywhere.
- **People:** named delegates per proposal (e.g. champions listed on home cards); no logos, no counts. Tone: "collaborating with the community," "close to completion" — progress-oriented, unglamorous.
- **Finished ≠ deleted:** completed proposals graduate to `finished-proposals.md`; stalled ones to `inactive` — archive-never-delete as public IA.

## Lift for aDNA

- **The one thing to steal: the stage table as first-class content** — Proposal · Author · Champion · last-touched, one table per stage, finished/inactive graduated to their own surfaces. This is the ready-made shape for an aDNA proposal/ADR/upstream-idea pipeline page (and it mirrors the vault's own backlog → ADR → ratified ladder, Standing Order 8).
- **Author/champion split** — separates who proposed from who currently carries; exactly the persona/lease semantics aDNA missions already have.
- **Surface the near-done on home** (Stage-3 cards) — momentum without vanity metrics.

## Avoid

- **The table lives on GitHub, not the site** — TC39's most important content is off-property. aDNA renders its registry *in* the property, machine-readable alongside ([[site_python_peps]]).
- Near-zero visual identity; committee-minimal is not the aDNA dial.

## Related

- [[_reference_set]] · [[site_python_peps]] (the archive this process feeds) · [[site_ethereum_eips]] (the same model at 1,000+ scale) · [[front_page_doctrine]]
