---
type: backlog
idea_class: follow_on
title: "Flagged follow-ons from the vault-wide currency sweep (broader-than-currency drift)"
created: 2026-06-29
updated: 2026-06-29
last_edited_by: agent_stanley
status: open
source: mission_vault_wide_currency_sweep (REVIEW-set + denominator-honest residual grep)
tags: [backlog, follow_on, currency, structural_drift, what_ground_truth, spec_owner, tooling]
---

# Flagged follow-ons — broader-than-currency drift

The [[how/missions/mission_vault_wide_currency_sweep|vault-wide currency sweep]] (2026-06-29) comprehensively fixed the **clean currency class** (standard version stamps `v2.1`/`v2.2`→`v2.3`; canonical public-repo URLs `LatticeProtocol/Agentic-DNA`→`aDNA-Network/aDNA`) across the out-of-slice content (29 files). Its denominator-honest classification surfaced six items that are **broader than currency** — each flagged, not fixed (same flag-not-fix discipline Looking Glass modeled at the slice boundary). Routed here as separate, scoped work.

| # | Item | File(s) | Why flagged (not a currency swap) | Routing |
|---|------|---------|-----------------------------------|---------|
| 1 | **Normative directory-convention drift** | `what/docs/adna_standard.md:185,206` | §3.5 names the base template `Agentic-DNA/` as a visible no-suffix dir; current convention is the hidden flat `.adna/` (post-flatten, ADR-006/008). Editing a normative MUST clause + workspace-tree is a **spec-owner / ADR** decision (SO9), not a sweep. | Spec owner (Rosetta) — small ADR or §3.5 point-release update |
| 2 | **Forge-ecosystem-spec rename refresh** | `what/specs/spec_forge_ecosystem.md` | The drift is **vault renames** (`SiteForge→Astro`, `ComfyForge→ComfyUI`, … 2026-06-15), not org-repo currency. The `github.com/LatticeProtocol/SiteForge.aDNA` URL is a **valid unchanged remote** (root CLAUDE.md). Whole table is pre-rename (names/maturity/personas). | Dedicated ecosystem-spec refresh |
| 3 | **Org-pattern-spec remote verification** | `what/specs/spec_org_pattern_ecosystem.md:66,67` | `LatticeProtocol/SuperLeague.aDNA` + `LatticeProtocol/CakeHealth.aDNA` are **private/partner repos** likely still on LatticeProtocol (the org migration targeted public repos). Blind-swapping could break valid URLs. | Verify with vault owners (Berthier/Hestia) before any change |
| 4 | **Ontology-design doc coherent refresh** | `what/docs/ontology_unification.md` | Needs a **coherent** pass: `v2.1`→`v2.3` link + `Agentic-DNA` URL **and** the `14→16` base-type + `v3.0→v3.1` surgery (base-list table says "Base (unchanged) … 14"; Mermaid `Base (14)`). Half-fixing the version link alone would make it cite v2.3 while showing 14 — the inconsistency the sweep removes elsewhere. | Dedicated doc refresh (apply ADR-035 delta) |
| 5 | **Historical entity-count (KEEP)** | `what/context/adna_core/context_adna_core_ontology_workshop.md:7,163` | "Lattice Protocol vault (14 base + 12 ext) … from 14 base → 26 types" describes a **historically-accurate** past vault state, teaching the *extension methodology*. No version stamp. Recommend **KEEP-as-historical** (or a light `(pre-ADR-035)` annotation). | Confirm KEEP; optional annotation |
| 6 | **Tool + schema currency** | `what/lattices/tools/{adna_validate.py,compliance_checker.py}` docstrings; `frontmatter_schema.json` `$id`+`description` | Docstrings claim conformance to "Standard **v2.2**"; standard is v2.3. **Tooling has behavior** — bumping the stamp without verifying the validator/schema implements v2.3 (16 base types, inventory/identity entities) would be a false RC-CURR-01 claim. Also: `frontmatter_schema.json` `$id` uses the **abandoned `adna.dev`** domain (now `adna.network`); changing a schema `$id` has compatibility implications. | Verify-then-update: confirm v2.3 rule coverage; decide `$id` domain/version migration |

**Pattern note (for III / the III-campaign learning store).** Items 1 + 6 are the **"mirror more current than its source"** pattern (Looking Glass marquee) recurring at the **spec-convention** and **tooling** layers: the live site/standard advanced to v2.3 while the normative §3.5 convention and the validator/schema docstrings still describe the pre-v2.3 world. Worth feeding to Argus's `campaign_h` as evidence that the fidelity-drift pattern is layer-recurrent, not site-specific.
