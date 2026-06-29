---
type: backlog
idea_class: follow_on
title: "Vault-wide currency sweep (out-of-slice drift beyond Looking Glass)"
created: 2026-06-28
updated: 2026-06-28
last_edited_by: agent_stanley
status: open
source: campaign_looking_glass (M4 discovery; out of the chartered site-backing slice)
tags: [backlog, follow_on, currency, vault_maintenance, what_ground_truth, looking_glass]
---

# Follow-on: Vault-wide currency sweep

**Origin.** Discovered during Operation Looking Glass **M4** while sweeping the site-backing slice. The same staleness class M4 fixed (spec `v2.1`/`v2.2` → **v2.3**; repo `LatticeProtocol/Agentic-DNA` → **aDNA-Network/aDNA**; outer `adna/` wrapper → flat `.adna/`) **extends well beyond the chartered Subject-B slice.** Per the Looking Glass charter (Subject B is **bounded** to the site-backing slice; out-of-slice findings are **flagged, not fixed** — Risk Register scope-creep mitigation), M4 did **not** sweep these — they are recorded here.

## Out-of-slice drift inventory (from the M4 broad grep)

- **Live context library** — `what/context/adna_core/` (8 files + AGENTS.md), `lattice_basics/` (2 + AGENTS.md), `object_standards/` (overview + AGENTS.md), `claude_code/` (2): `v2.1`/`v2.2` in `sources:` frontmatter + Reference sections.
- **Docs guides** — `what/docs/{adna_bridge_patterns,adna_design,ontology_unification,start_kit_prd,agent_first_guide,side_quest_guide,migration_guide,tutorial_lattice_publishing}.md` + `what/docs/AGENTS.md`: `v2.1` and/or stale `LatticeProtocol/Agentic-DNA` URLs.
- **Example READMEs** — `example-enterprise-pipeline`, `example-biotech-lab`, `.base/README.md.template`: stale repo URLs.
- **Ecosystem specs** — `what/specs/spec_forge_ecosystem.md` (`LatticeProtocol/SiteForge.aDNA`), `spec_org_pattern_ecosystem.md` (`LatticeProtocol/SuperLeague.aDNA`, `CakeHealth.aDNA`).
- **⚠ Normative spec doc** — `what/docs/adna_standard.md:185,206` still call the base-template repo `Agentic-DNA/` (pre-flatten). **Spec-owner review, not a blind sweep** — the spec is ground truth.

## Do NOT touch (false positives / intentional)

- `who/governance/VISION.md`, `governance_code_of_conduct.md` — "Contributor Covenant **v2.1**" (an external standard's version, not the aDNA spec).
- `what/docs/standard_governance.md`, `adna_standard.md:1107` — `v2.0→v2.1` etc. used as **semver examples**.
- `who/reviewers/reviewer_standard_archivist.md:24,48` — deliberately cite the stale URLs as audit *examples*.
- `who/coordination/coord_*`, `what/decisions/adr_*`, `what/measurement/iii_results/*` — dated point-in-time records (correctly historical).

## Why a follow-on (not M4)

The Looking Glass charter bounds Subject B to the site-backing slice (operator decision); expanding M4 into a full-vault audit is the explicit scope-creep risk the pilot tests its discipline against. **Pilot signal (→ instrumentation):** the bounded-subject decision worked — it prevented scope-creep — *and* a follow-on full-currency sweep is warranted as separate, scoped work. Best run as a `vault_maintenance` III cycle with a denominator-honest grep + the same do-not-touch guardrails.
