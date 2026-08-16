---
type: exemplar_site
site: peps.python.org
functional_role: numbered-proposal archive (canonical)
tonal_revolutionary: 15
created: 2026-08-16
updated: 2026-08-16
inspected: 2026-08-16
inspected_lens: craft-reference (Haussmann B.7 dossier)
added_by: campaign_haussmann
persona: rosetta
status: active
last_edited_by: agent_rosetta
hero_word_count: 0 (index-as-hero; ~15-word functional masthead)
section_count: index (9 status buckets)
above_fold_focus: the PEP index table itself
nav_model: docs-utility (top bar + topic sidebar + numerical index)
density_band: high
demo_as_proof: n/a (the 25-year archive is the proof)
needs_operator_capture: []
tags: [exemplar_site, peps, proposal_archive, machine_readable, status_machine, haussmann_b11]
---

# site_python_peps — Python PEPs (peps.python.org)

> **The canonical numbered-proposal archive** — 25 years of governance rendered as one legible table, with a machine-readable twin. The strongest evidence in the corpus that an archive can be the *entire* site and still work. Judged from HTML only [I] — outside the 5-capture budget; deep page: PEP 8.

## Captured (rubric)

- **Hero:** none — the masthead is "PEP 0 – Index of Python Enhancement Proposals" (~15 functional words). **The index IS the page**; the archive's own front door is itself a numbered PEP (PEP 0) — self-reference as governance.
- **Index organization:** one table per **status bucket** (Process/Meta → Informational → Provisional → Accepted → Open → Finished → Deferred → Rejected/Superseded/Withdrawn), columns **number · title · authors · status/type code**. Types (Process · Informational · Standards Track) × statuses form an explicit state machine; sequential number gaps left visible.
- **Self-describing entry point:** **PEP 1** ("PEP Purpose and Guidelines") defines the process from inside the archive.
- **Item page (PEP 8):** metadata header (Author · Status · Type · Created · Post-History) → full ToC → reading-optimized single column with correct/wrong code pairs; cross-PEP wikitext-style links.
- **Machine-readable twin:** **`/api/peps.json`** — the full index as JSON, advertised on the page. The human table and the agent surface are the same dataset.
- **Theme:** a real **light/dark/auto three-state toggle** — the only pure archive in the corpus that ships one.
- **People:** every PEP carries named authors (e.g. "Barry Warsaw, Jeremy Hylton, David Goodger…"). Density: high; assumes insider familiarity. Tonal ~15 — zero marketing anywhere.

## Lift for aDNA

- **The one thing to steal: the human-index + JSON-twin pairing** (`api/peps.json`). aDNA's registry (`vaults.json` already exists) should be advertised *on the human page* as the same dataset — the agentic surface is a first-class citizen, not a hidden endpoint. Directly fuels Haussmann's agentic-surface phase.
- **Status-bucket tables with visible lifecycle** — Accepted/Final/Deferred/Withdrawn shown, never hidden: archive-never-delete (Standing Order 6) as public UI.
- **PEP-1 pattern:** the process defined by an entry *inside* the archive — aDNA's spec/ADR-001 already is this; surface it as the labeled front door.
- The three-state theme toggle as the low-cost a11y baseline for docs surfaces.

## Avoid

- **Zero newcomer wayfinding** — no "start here," no explanation of why PEPs matter; pure insider surface. aDNA's dual-audience test (Standing Order 7) forbids this: the archive needs the Feynman layer on top.

## Related

- [[_reference_set]] · [[site_tc39]] (the committee upstream of an archive like this) · [[site_ethereum_eips]] (the same archive shape with types×statuses) · [[site_stripe_docs]] (density-via-omission sibling)
