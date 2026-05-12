---
type: campaign
campaign_id: campaign_lattice_workspace_ux
title: "Lattice Workspace UX — Dynamic node.aDNA Bootstrap + ~/lattice/ as Obsidian Vault"
owner: stanley
status: planned
phase: -1  # not yet open; opens at operator discretion after M04b close (mission tree finalized 2026-05-12 by v2 M04b S1)
predecessor: campaign_adna_v2_infrastructure
phase_count: 3  # P0 planning (subsumed by M04b in v2; complete) + P1 implementation + P2 integration & closeout
mission_count: 3  # M-LWX-01 + M-LWX-02 + M-LWX-03 (finalized 2026-05-12 by v2 M04b Obj 4)
estimated_sessions: "5-7"  # M-LWX-01: 2-3 sessions + M-LWX-02: 2 sessions + M-LWX-03: 1-2 sessions
calibrated_sessions: "5-7"  # recalibrated at M04b close based on Obj 2 + Obj 3 spec scope
estimation_class: "ux-implementation"
priority: medium  # interstitial between v2 M04 and v2 M05; not on critical path of v7.0 ship
created: 2026-05-12
updated: 2026-05-12
last_edited_by: agent_stanley
seeded_by:
  campaign: campaign_adna_v2_infrastructure
  mission: mission_adna_infra_p1_04b_workspace_ux_planning
  session: session_stanley_20260512_185037_adna_v2_m04b_amendment
  rationale: "Campaign Amendment Session — operator surfaced two follow-on threads from M04 close (dynamic node.aDNA bootstrap UX + ~/lattice/ as Obsidian vault) that should be addressed before v2 M05 opens. M04b (planning mission in v2) was added to plan this mini-campaign; this stub is seeded at the amendment session for the mini-campaign's master + mission tree to be finalized at M04b's Obj 4."
opens_at: "campaign_adna_v2_infrastructure M04b close (mini-campaign mission tree finalized; operator authorizes M-LWX-01 opening per Standing Order #1)"
blocks_in_parent: [mission_adna_infra_p2_05_publish_skill_rewrite]  # M05 of v2 deferred until this mini-campaign closes (soft gate — operator may override)
tags: [campaign, planned, adna, workspace_ux, dynamic_bootstrap, obsidian_vault, side_campaign, mini_campaign, lattice_workspace, ux, node_adna_extension, p1_5]
---

# Campaign — Lattice Workspace UX (mini-campaign; planned, mission tree finalized)

> **Status: planned. Mission tree finalized 2026-05-12 by v2 M04b S1.** Seeded
> 2026-05-12 by the Campaign Amendment Session of `campaign_adna_v2_infrastructure`;
> mission tree authored at v2 M04b Obj 4 based on the Obj 1 gap analysis + Obj 2
> interview spec + Obj 3 Obsidian vault spec.
>
> **Mission stubs**: 3 (M-LWX-01 + M-LWX-02 + M-LWX-03) — see Phase 1 + Phase 2 tables
> below. Each stub is `status: planned`, `spec_completeness: stub`; full Read/Produce
> blocks land at first-execution-session per the M02 / M04 / M04b first-execution-
> session pattern.
>
> This mini-campaign **opens** at operator discretion after v2 M04b close and is
> not active until then.

## Goal

Close the workspace-UX loop that M04 left partial. M04 bootstrapped `node.aDNA/` against
the M01 Obj 3 design (42/50 audit; exact match to prediction), but the operator-facing
UX of *how a real operator triggers the bootstrap* — and *how they then manage the full
lattice from a single vault interface* — is two layers thinner than the intended target.
This mini-campaign:

1. **Dynamic node.aDNA bootstrap interview** — turns Step 0.3 of the workspace router
   from "I notice you have N projects but no `node.aDNA/`... would you like me to
   bootstrap one?" into a multi-question interview that captures purpose, user-info,
   stack details (beyond what auto-detection captures), hardware specifics, and
   desired lattice connections. Outputs land in the new vault's MANIFEST, STATE,
   inventory, and identity files.
2. **`~/lattice/` as Obsidian vault** — adds a minimal `.obsidian/` config + home-page
   gallery + LP marketplace link at the workspace root, so the operator can open
   `~/lattice/` itself as a vault and use the Obsidian UI + integrated terminal to
   navigate / manage the full context lattice. Inner `.aDNA/` vaults are excluded
   via `.obsidianignore` to avoid index conflicts.

When this campaign closes, an operator running `claude` for the first time in
`~/lattice/` (or migrating an existing setup) should see:
- An interview-driven bootstrap that produces a richer `node.aDNA/` than M04's static
  fork (with their actual purpose, stack details, and chosen lattice connections written
  in, not the M01 Obj 3 design's example values)
- An Obsidian-openable `~/lattice/` vault with a home page that gallery-displays the
  catalog of context graphs on the node and links to the LP marketplace

## Context

This mini-campaign exists because M04 deliberately scoped itself to the M01 Obj 3
design's static bootstrap + auto-detect inventory. M04's audit revealed that the design
itself defaulted operator-specific fields (purpose, connections, persona tone
preferences) rather than calling for an interview — and the operator confirmed at M04
close that the intended UX is the interview-driven variant. Separately, the operator
wants `~/lattice/` itself to be an Obsidian vault, which is a workspace-scope concern
M04 didn't touch.

Both threads consume M04's outputs:
- Dynamic bootstrap mutates `node.aDNA/what/inventory/*` + `who/identity/*` +
  governance file content.
- Obsidian vault setup reads from `node.aDNA/what/inventory/inventory_vaults.yaml` to
  render the home-page gallery.

Planning them in one mini-campaign keeps the data shapes coherent.

**Predecessor**: `campaign_adna_v2_infrastructure`. This mini-campaign does not start
until v2's M04b (the planning mission for this campaign) closes. M04b authors the
gap analysis + interview skill spec + Obsidian vault spec; this mini-campaign's
missions implement them. After this mini-campaign closes, v2 resumes at M05 (publish-
skill rewrite).

## Scope

### In Scope

- Author `skill_node_bootstrap_interview.md` (interview-driven bootstrap)
- Update workspace router Step 0.3 to invoke the interview skill on first-run-with-projects
- Optionally upstream `skill_node_bootstrap_interview.md` to `.adna/how/skills/` per D5
- Create `~/lattice/.obsidian/` minimal config (4-5 config files)
- Create `~/lattice/HOME.md` (or `README.md`) home-page gallery reading from `node.aDNA/what/inventory/inventory_vaults.yaml`
- Create `~/lattice/.obsidianignore` excluding all `*.aDNA/` subfolders
- Link to LP context-graph registry/marketplace (web page per D4 default)
- Integration test: re-run bootstrap + Obsidian setup on clean slate (snapshot/restore OR test machine)
- Cross-graph findings → v2 main campaign + `.adna/` template upstream contributions (where D5 resolves "upstream")
- Mini-campaign AAR

### Out of Scope

- Obsidian extension for LP marketplace (deferred — D4 default A = web link only)
- Curated community-plugin pre-installation in `~/lattice/.obsidian/` (operator opt-in later)
- Changes to existing `.aDNA/` vault Obsidian configurations (they retain their own `.obsidian/`)
- Changes to M04's node.aDNA outputs (the audit baseline is preserved; this mini-campaign
  EXTENDS M04 without re-running it)
- Publish-skill family rewrite (v2 M05 scope)
- LatticeScope.aDNA observability layer (v2 M10 scope)
- Operation Rosetta Phase 8 work

### Subsumes

| Plan / Item | Status at Subsumption | Tasks Absorbed By |
|---|---|---|
| M04 AAR §Items deferred #1 (registry_stub.md not produced) | open | Evaluated at M04b Obj 1; may resolve via Obsidian-vault home-page gallery acting as the registry view |
| M04 AAR §Items deferred #2 (rebuild_procedure.md not produced) | open | Evaluated at M04b Obj 1; may resolve via interview-skill spec including rebuild handling |
| M04 AAR §Items deferred #4 (README.md frontmatter convention exception) | open | Carried forward to M07; not absorbed |
| Workspace router Step 0.3 dynamic-interview gap | open | M-LWX-01 |
| `~/lattice/` Obsidian vault setup | not yet open | M-LWX-02 |

## Phases & Missions (finalized 2026-05-12 by v2 M04b S1)

### Phase 0: Planning (subsumed by v2 M04b — complete)

v2 M04b planned this mini-campaign. Phase 0 outputs (lives in `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/`):

- `m04b_obj1_dynamic_ux_gap_analysis.md` — 40 items classified; 7 strict gaps + 2 overlay gaps mapped to 5 interview topics
- `m04b_obj2_skill_node_bootstrap_interview_spec.md` — 19-question interview skill spec; D5 resolved upstream
- `m04b_obj3_lattice_obsidian_vault_spec.md` — `.obsidian/` config + HOME.md gallery + .obsidianignore + Step 0.5 workspace-router addition; D5 resolved local

**Phase exit gate**: ✅ M04b mission close — mission tree finalized below; 3 mission
stubs land in `missions/` (this session); operator-discretionary mini-campaign open.

### Phase 1: Implementation (M-LWX-01, M-LWX-02)

| Mission | Title | Sessions | D5 disposition | Dependencies | Status |
|---------|-------|----------|---|-------------|--------|
| **M-LWX-01** | Dynamic `node.aDNA/` bootstrap interview implementation | 2-3 | **upstream** (`.adna/how/skills/skill_node_bootstrap_interview.md` + 1-line update to workspace router Step 0.3 prompt) | v2 M04b close (Obj 2 spec) | planned (stub authored 2026-05-12 by M04b) |
| **M-LWX-02** | `~/lattice/` Obsidian vault setup | 2 | **local** (`~/lattice/.obsidian/` + `HOME.md` + `.obsidianignore` + Step 0.5 in workspace router) | v2 M04b close (Obj 3 spec) — independent of M-LWX-01 (parallel-eligible) | planned (stub authored 2026-05-12 by M04b) |

**Phase exit gate**: dynamic bootstrap implemented + Obsidian vault config live at
`~/lattice/.obsidian/` + HOME.md gallery rendering from `inventory_vaults.yaml`.
M-LWX-01 + M-LWX-02 are independent (Obj 2 ships upstream, Obj 3 stays local) — they
may run in any order or in parallel.

### Phase 2: Integration & closeout (M-LWX-03)

| Mission | Title | Sessions | D5 disposition | Dependencies | Status |
|---------|-------|----------|---|-------------|--------|
| **M-LWX-03** | Integration test (8 tests per Obj 3 §6) + AAR + cross-graph findings → v2 main campaign | 1-2 | mixed (test results local; cross-graph findings memo lives in v2's `aDNA.aDNA/`; potential upstream amendments to `.adna/` template if findings warrant) | M-LWX-01 + M-LWX-02 close | planned (stub authored 2026-05-12 by M04b) |

**Phase exit gate**: end-to-end UX validated on Stanley's L1 (this node) as canonical
reference (8 integration tests per Obj 3 §6 PASS); findings integrated back into v2
main campaign as amendment entries +/or `.adna/` template upstream commits if
warranted; mini-campaign AAR; v2 resumes at M05 (publish-skill rewrite).

## Decision Points

| # | When | Decision | Status |
|---|---|---|---|
| 1 | Before M-LWX-01 opens | Operator confirms M04b mission close + side-campaign mission tree finalized; opens M-LWX-01 | pending (waits for M04b) |
| 2 | M-LWX-01 mid-mission | Upstream skill_node_bootstrap_interview.md to `.adna/` template? (D5 resolution) | pending |
| 3 | M-LWX-02 mid-mission | Home-page format final: markdown table / Canvas / Bases (D2 resolution) | pending |
| 4 | M-LWX-03 close | Operator approves mini-campaign closure + queues v2 M05 opening | pending |

## Risk Register

| Risk | Severity | Mitigation |
|---|---|---|
| Vault-in-vault conflicts cause Obsidian to scan `.aDNA/` subfolders | Medium | `.obsidianignore` excludes `*.aDNA/` pattern; M-LWX-02 verifies indexer behavior on test load |
| Interview skill makes bootstrap too slow / heavyweight for casual operators | Low | D1 hybrid default keeps auto-detect fast path; interview only asks the 5-10 truly-operator-specific questions |
| Bases (built-in DB) breaks future Obsidian update | Low | Markdown table fallback documented in M-LWX-02 design; operator can switch if Bases changes API |
| `inventory_vaults.yaml` schema drift breaks home-page gallery | Low | M-LWX-02 reads via stable keys; M-LWX-03 integration test catches schema mismatch |
| Mini-campaign blocks v2 M05 longer than planned | Medium | M-LWX missions are short (1-3 sessions each); operator can authorize parallel M05 opening if mini-campaign slips |

## Verification Strategy

### Per-Mission

| Check | Method | Gate? |
|-------|--------|-------|
| SITREP filed | Session closure protocol | Yes |
| AAR produced | 5-step AAR protocol | Yes for M-LWX-03 |
| Per-mission acceptance criteria met | Mission-spec checklist | Yes |

### Per-Phase

| Check | Method | Gate? |
|-------|--------|-------|
| Phase 1: bootstrap interview runs end-to-end on test machine OR snapshot | M-LWX-03 integration test | Yes |
| Phase 1: Obsidian vault opens at `~/lattice/` without index conflicts | M-LWX-03 integration test | Yes |
| Phase 2: cross-graph findings memo authored | M-LWX-03 produces `cross_graph_findings_to_v2.md` | Yes |

### Campaign Validation

| Check | Method |
|-------|--------|
| Operator can run `claude` from `~/lattice/` and trigger interview-driven bootstrap | M-LWX-03 integration test (manual operator walk) |
| Operator can open `~/lattice/` as Obsidian vault and see context-graph gallery | M-LWX-03 integration test |
| Findings integrated back to v2 main campaign as amendment entry | M-LWX-03 produces v2 amendment text; M04b S2 (or v2 M07) lands it |

## Persona

**Rosetta** continues — this mini-campaign is governed by `aDNA.aDNA/` (per ADR-004,
campaign home stays here). The interview skill, when run on a node, is invoked by the
agent in *that* node's persona (Hestia for the local node, project persona for vaults
inside `.aDNA/` projects). Rosetta authors and ships the interview; Hestia (or the
relevant local persona) operates it.

## Notes

- This stub is **deliberately preliminary**. The v2 campaign's M04b mission produces
  the finalized mission tree based on actual M04 outputs (which gaps surfaced, which
  defaults applied, which artifacts should be upstreamed).
- Stays `phase: -1` until M04b close finalizes the mission tree; operator agent
  opening this campaign should check that M04b has run before proceeding to
  M-LWX-01.

## Completion Summary

*Fill out when setting `status: completed`.*

### Deliverables
- [TBD by M-LWX-03 AAR]

### Descoped
- [TBD]

### Key Findings
- [TBD]

### Scope Changes
- [TBD]

### Follow-Up Campaigns / Missions
- [TBD — feeds v2 main campaign amendment entries; potentially shapes v3-EC M-LWX-style ecosystem-wide UX adoption]

## Campaign AAR

*Mandatory before setting `status: completed`. See `how/templates/template_aar_lightweight.md`.*

- **Worked**: [TBD]
- **Didn't**: [TBD]
- **Finding**: [TBD]
- **Change**: [TBD]
- **Follow-up**: [TBD]
