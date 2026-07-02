---
type: backlog
idea_id: idea_terminal_harness_contract_reanchor
title: "Re-anchor spec_terminal_harness_contract.md — clause sources → rehomed Harness.aDNA paths; refresh the §7 adoption table to post-consolidation names; ratify ADR-027"
status: accepted
proposed_by: agent_berthier (Terminal.aDNA, Operation Gateway gw_p0)
created: 2026-06-11
updated: 2026-07-02
last_edited_by: agent_rosetta
coord_ref: who/coordination/coord_2026_06_11_inbound_from_berthier_terminal_harness_contract_reanchor.md
source_review: Terminal.aDNA/what/context/review_ecosystem_positioning_20260611.md (E3d)
tags: [backlog, idea, ecosystem_spec, terminal_harness_contract, adr_027, reanchor, sha_pin, archive_pointers, proposed, cross_vault_proposal]
champollion_mission: M2.1
---

# Idea — Re-anchor the terminal↔harness canonical (proposal; your standard, your gate)

## Problem

`what/specs/spec_terminal_harness_contract.md` (the 5th ecosystem spec) anchors its normative clause bodies and adoption table to **pre-consolidation vault names**, three of which are now archived or renamed. The clause bodies themselves are fine — they were rehomed **byte-identical** (blob SHAs unchanged; verified 2026-06-11: `14b651d3…` / `7f2508f0…`), so per the spec's own §8 discipline **no clause re-negotiation is triggered** — but the spec points at an archived vault, which the ecosystem's own precedent forbids (Harness re-pointed its pointer-spec off LatticeTerminal at WS-3/M1, 2026-06-07, for exactly this reason).

Stale spots (five, not just §2):

| # | Spot | Today says | Should say |
|---|---|---|---|
| 1 | frontmatter `canonical_clause_sources:` | 2× `LatticeTerminal.aDNA/how/campaigns/campaign_terminal_genesis/missions/M0.0{a,d}-…/{PROVIDER,HARNESS}-CONTRACT.md` | `Harness.aDNA/what/context/harness_core/terminal_contracts/{PROVIDER,HARNESS}-CONTRACT.md` (+ SO-7 archive pointers: `Archive.aDNA/LatticeTerminal.aDNA/…` originals) |
| 2 | frontmatter `reference_conformance:` | `LatticeAgent.aDNA/what/specs/spec_latticeterminal_adna_interop_contract.md` | archive pointer `Archive.aDNA/LatticeAgent.aDNA/…` + live descendant note (Harness frozen snapshots at `Harness.aDNA/what/context/harness_core/latticeagent_specs/`) |
| 3 | §2 canonical-source table | same two LT paths + the LA interop row | same repoints as 1+2; SHAs **unchanged**, so the §8 drift mechanism records a path-cell update, not a renegotiation |
| 4 | §4 canonical clause homes + §5 day-1 list | `LatticeAgent.aDNA/what/specs/spec_{control_surface_schema,telemetry_event_schema}.md`; day-1 `latticeagent` (default-partner); forward `rareharnessneo` | frozen snapshots at `Harness.aDNA/what/context/harness_core/latticeagent_specs/` (provenance) + live adapted descendants `harness_{control_surface,telemetry}_spec.md`; forward conformer = `Harness.aDNA` (`provider_id: rareharness`, pkg `harness_adna`); `latticeagent` row → superseded annotation |
| 5 | §7 adoption table (all 4 rows) + §9 | `LatticeTerminal.aDNA` · `LatticeAgent.aDNA` · `Cmux.aDNA` · `RareHarnessNeo.aDNA` | `Archive.aDNA/LatticeTerminal.aDNA` (clause-source custody → Harness) · `Archive.aDNA/LatticeAgent.aDNA` (superseded → Harness) · **`Terminal.aDNA`** (renamed 2026-06-08, WS-3/M4; pointer-spec `what/specs/spec_provider_conformance.md` unchanged) · **`Harness.aDNA`** (elevated 2026-05-31; pointer-spec `what/specs/rh_provider_conformance_ref.md` — already repointed at WS-3/M1, the precedent) |

## Proposal

1. **Path-only re-anchor** at the five spots, with SO-7 archive pointers retained beside each repoint (audit trail preserved; nothing deleted).
2. **No clause re-negotiation** — record in the spec's provenance section that blob SHAs were verified unchanged at re-anchor (the §8 mechanism's no-drift case).
3. **Bundle option (separable): ratify ADR-027** (`adr_027_terminal_harness_contract_canonicalization.md`, `proposed` since 2026-05-25). Both live pointer-specs (Terminal + Harness) carry "⚠ re-pin when it ratifies" rows; ratification closes their Open Item #1s in one stroke. If your gate prefers, take the re-anchor alone and leave ADR-027 for its own ceremony.

## Who does what

aDNA.aDNA owns the edit + the gate (this is your standard; we propose, never author it). On landing: Terminal + Harness each re-pin their §6 row-1 doctrine SHA in their own vaults (the doctrine file's blob SHA changes with the re-anchor — expected, content-bearing, both sides committed to the targeted §8 update). Terminal pre-commits to same-window turnaround (chase row open at `Terminal.aDNA/who/coordination/coord_log_p4c_crossvault_chase.md`).

## Why now

Terminal × Harness co-development was operator-directed 2026-06-11 (Operation Gateway); the contract this spec canonicalizes is about to be live-proven (Terminal `ex_24` first-light + the Harness P6 `general_harness` co-sign offer). The proof work cites the canonical; the canonical should not cite archived vaults while that happens.


## Champollion G0 disposition — M (M1.1, 2026-07-02)

**ACCEPT → fix/mission.** Owning mission: `M2.1` (see `champollion_mission`). Not executed inline (M1.1 is a pure disposition sweep). Ratified at Champollion G0 (D2).
