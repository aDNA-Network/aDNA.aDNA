---
type: backlog_idea
status: resolved
priority: medium
created: 2026-05-29
updated: 2026-07-06
last_edited_by: agent_rosetta
filed_from: aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/mission_adna_str_p5_m55_d14_readme_first_contact_polish.md
filing_authorization: skill_upstream_contribution
upstream_target: LatticeProtocol/Agentic-DNA
github_issue: TBD
tags: [backlog, upstream, readme, first_contact, content_class_taxonomy, persona_led_structural_pattern, scan_affordance_toc, m54_aar_finding, m55_codification, ecosystem_propagation, phase_6_candidate]
fold_batch: champollion_m6_1_rc
---

# Idea: Promote the README first-contact discipline (content-class taxonomy + persona-led structural pattern + scan-affordance ToC) into the upstream aDNA standard

## Problem

19+ ecosystem vaults each ship a `README.md` as their GitHub landing page. No rule in the standard constrains what a first-contact surface should contain or how aggressively a polish pass may cut it. As a result, README quality drifts across the ecosystem:

- Some vaults publish **800+ line READMEs** with no top-of-doc ToC (a first-time reader must scroll through every h2 to locate Quick Start or FAQ).
- Some vaults push agent-onboarding into the README and bury human-onboarding (the README serves agents, not humans).
- Polish passes apply different reduction targets at different vaults — sometimes the elevator pitch gets cut to a sentence; sometimes a 60-word tagline survives the pass.
- Persona-led structure (problem → personas → solution → reference) is followed inconsistently; some READMEs open with "Installation" before naming the problem the project solves.

This is a **recurring authoring problem**, not a one-time defect. The discipline ratified at M5.5 D14 — content-class taxonomy + persona-led structural pattern + scan-affordance ToC — generalizes across every aDNA-pattern repository.

## Evidence (this campaign)

- **M5.5 D14 README polish anchor** (cycle 121): `aDNA.aDNA/README.md` 446 → 368 lines (17.5%; canonical-content 5-20% ceiling honored).
- **M5.5 D14 ToC scan-affordance** (cycle 127): `aDNA.aDNA/README.md` 368 → 382 lines (+14 net for 20-link grouped-form ToC; 20/20 anchor validation).
- **M5.4 D12 cross-page reduction**: cumulative line reduction 3157 → 1683 lines = 46.7% across 11 D12 surfaces; the content-class taxonomy emerged as the load-bearing Finding (canonical-content 5-20% / adopter-conversion 30-70% / reference 25-35% / nav no-fixed-ceiling / new-artifact bounded-by-spec).
- **M5.5 D14 codification** (cycle 128): `aDNA.aDNA/.github/README_STYLE_GUIDE.md` 84 lines = single-doc decision artifact for README-class first-contact surfaces.

## Proposal

Add a **README & First-Contact Pattern** section to the upstream aDNA standard at `Agentic-DNA/what/docs/adna_standard.md` (or a companion guide at `Agentic-DNA/what/docs/readme_style_guide.md`). The section should:

1. **Codify the content-class taxonomy** — canonical-content 5-20% / adopter-conversion 30-70% / reference 25-35% / nav no-fixed-ceiling / new-artifact bounded-by-spec. Declare the class in any polish-mission cycle spec.
2. **Codify the persona-led structural pattern** — elevator pitch → problem → personas → solution → reference. Honor verbatim in new READMEs; collapse only when narrowing scope (e.g., a single-persona-path doc).
3. **Codify the scan-affordance ToC** — add when surface has > 15 h2 sections; 5 reader-intent buckets (Start here / Architecture / Operations / Reference / Community); dot-separated inline form; budget +15-20 lines.
4. **Codify the 5-lens conciseness pass** — apply at Step-6 of every README-class polish cycle (word-count outliers / dual Anti-Bloat + UX Writer pass / glossary tightening / clarity-checklist scan / reference-collection scan).
5. **Reference precedents** — Rust + Stripe-first-page + Astro + Tailwind + Linear (the 5 voice precedents from M5.1 cross-target synthesis §3 D14 row).

Ship as a single `readme_style_guide.md` doc in the upstream `what/docs/` directory, plus a 3-line `README.md` pointer at the upstream root. Adopt the M5.5 cycle-128 layout verbatim (companion-doc framing + 5 numbered sections + cross-references + maintenance cadence).

## Phase-6 propagation candidates

Once the upstream guide ships, propagate the pattern across the ecosystem at Phase 6 (or during ecosystem-wide governance refresh). Initial candidates (all carry README surfaces that pre-date M5.5 D14 discipline):

| Vault | Surface | Class | Current state | Notes |
|---|---|---|---|---|
| `lattice-labs/` | `README.md` | Operational vault landing | Pre-M5.5 shape | Authoritative-until-Phase-6 vault per workspace router; high-traffic |
| `latlab/` | `README.md` | Product SDK landing | Pre-M5.5 shape | External-facing CLI + HQ Dashboard SDK |
| `LatticeAgent.aDNA/` | `README.md` | Platform landing | Pre-M5.5 shape | New platform; first-contact discipline shapes adoption |
| `LatticeTerminal.aDNA/` | `README.md` | Platform landing | Pre-M5.5 shape | New platform; first-contact discipline shapes adoption |
| `SiteForge.aDNA/` | `README.md` | Forge landing | Pre-M5.5 shape | High-consumer-vault forge (5 active consumers) |
| `III.aDNA/` | `README.md` | Framework landing | Pre-M5.5 shape | High-consumer-vault framework (6 active consumers) |
| `CanvasForge.aDNA/` | `README.md` | Forge landing | Pre-M5.5 shape | Production forge with 3 consumer wrappers |

Each propagation cycle: cycle 121 anchor pass (canonical-content) + cycle 127 ToC affordance (if > 15 h2). Cycles 122-126 spread (adopter-conversion + reference + canonical) apply per the surface inventory of each vault.

## Related upstream candidates

- [[idea_upstream_workspace_router_row_discipline]] — sibling discipline for workspace-router row content (governance vs. state separation)
- [[idea_upstream_credential_broker_template_inheritance]] — sibling discipline for credential routing in new vaults

## Adoption discipline

Adopt at next upstream version bump (post-v2.2 minor release). Existing vault READMEs are not retroactively reformatted; new vault forks inherit the pattern via the template. Phase-6 propagation is operator-discretionary per vault.


## Champollion G0 disposition — F (M1.1, 2026-07-02)

**ACCEPT → template-fold.** Marked `fold_batch: champollion_m6_1_rc` — M6.1 assembles the release candidate from this marker (nothing ships to `.adna/` here). Ratified at Champollion G0 (D2).

**Resolved 2026-07-06 (Meridian M6):** shipped in the v8.4 image (Champollion RC IN-set); status-flip was the missing post-ship close-out.
