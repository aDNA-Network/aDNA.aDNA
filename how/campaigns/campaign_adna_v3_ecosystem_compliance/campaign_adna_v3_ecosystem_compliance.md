---
type: campaign
campaign_id: campaign_adna_v3_ecosystem_compliance
title: "aDNA v3 Ecosystem Compliance — apply v7.0 changes per-vault across the 19 active aDNA vaults"
owner: stanley
status: planned
phase: -1  # not yet open; awaits campaign_adna_v2_infrastructure P3 phase gate
predecessor: campaign_adna_v2_infrastructure
phase_count: 6  # P0 planning + P1 audit + P2 skills + P3 remotes + P4 airlock + P5 final
mission_count: 7  # M01-EC through M07-EC (preliminary; finalized at M11 of v2)
estimated_sessions: "12-20"  # rough; recalibrated when M01-EC plans
calibrated_sessions: ""
estimation_class: "governance-broad"
priority: high
created: 2026-05-08
updated: 2026-05-08
last_edited_by: agent_stanley
seeded_by:
  campaign: campaign_adna_v2_infrastructure
  mission: mission_adna_infra_planning_01
  session: session_stanley_20260508_193509_adna_v2_m01_amendment
  rationale: "Stage 2 Session 2.5 Campaign Amendment — pulled M11 successor-seeding work forward so the per-vault application scope is visible/queued during v2 execution rather than landing as an after-the-fact artifact at v2 close."
opens_at: "campaign_adna_v2_infrastructure P3 phase gate (post-M03 flatten + M08a/M08b shipped; per-vault migration runbook live)"
tags: [campaign, planned, adna, v3, ecosystem, compliance, per_vault, airlock, naming_convention, repo_standardization, successor]
---

# Campaign — aDNA v3 Ecosystem Compliance (planned successor)

> **Status: planned. This is a stub.** Seeded 2026-05-08 by the Campaign Amendment Session
> of `campaign_adna_v2_infrastructure` (M01 S2 S2.5). The mission tree below is
> **preliminary** — M11 of the v2 campaign will finalize it after the v2 execution
> generates the on-the-ground evidence (per-vault flatten outcomes, propagation receipts,
> publish-skill rewrite results). This campaign **opens** at the v2 P3 phase gate and is
> not active until then.

## Goal

Bring the 19 active aDNA ecosystem vaults into full compliance with the v7.0 standard
that `campaign_adna_v2_infrastructure` codified. This campaign is the per-vault
application layer that v2 deliberately deferred (per `m01_obj0_ecosystem_matrix.md` §2,
the v2 campaign's per-vault impact column was scoped to "compatibility matrix only" — the
actual per-vault change-application work landed here).

When this campaign closes, every active aDNA vault should:
- Have a properly configured GitHub origin remote (or a documented exception)
- Carry the v7.0 skill set (`skill_lattice_publish` updated, `skill_git_remote_setup` NEW,
  `skill_deploy` NEW, `skill_vault_publish` NEW per M05's ADR)
- Have a `how/airlock/AIRLOCK.md` if the vault does cross-vault work (per ADR-008)
- Conform to the `<name>.aDNA/` ↔ `<name>.aDNA.git` naming convention (per ADR-009) OR
  carry an explicit grandfathered-exception note
- Be findable in `lattice/CLAUDE.md` Project Discovery (closing Issue I-1 from
  `m01_obj1_current_state.md` §5)

## Context

This campaign exists because `campaign_adna_v2_infrastructure` deliberately scoped itself
to **template-level changes only**. The v2 campaign codifies the standard; v3 applies it.
This separation keeps v2 atomic (one phase gate per change-class) and gives external-org
vaults (Wilhelm Foundation × 2, TAPP, Super League) time to ratify changes inside their
own governance before per-vault work touches them.

Trigger: `m01_obj0_ecosystem_matrix.md` (Stage 2 Session 1, 2026-05-08) surfaced 19 active
vaults with non-uniform compliance — 7 with no git remote, 4 with hyphen-flat repo names,
1 with non-standard local-path remote, 1 with no `how/skills/` directory at all
(`wga.aDNA`), 2 missing from `lattice/CLAUDE.md` Project Discovery
(`strategic_interface_protocol.aDNA`, `SuperLeague.aDNA`). Plus the airlock pattern
(III + VideoForge + CanvasForge) is template-only at v2 close — per-vault adoption needs
its own systematic pass.

Predecessor: `campaign_adna_v2_infrastructure`. This campaign **does not start** until v2
reaches P3 phase gate (post-M03 flatten + M08a upgrade guide shipped + M08b propagation
receipts in). M11 of v2 finalizes this campaign's mission tree; at that point the
preliminary outline below is replaced with calibrated mission specs.

## Scope

### In Scope

- Per-vault audit of all 19 active aDNA vaults against v7.0 compliance checklist
- Bulk skill-set propagation (push v7.0 skills to vaults that opt in)
- GitHub origin-remote setup for the 7 no-remote vaults
- Resolution of LPWhitepaper non-standard local-path remote (M03-EC ADR)
- GitHub repo rename per ADR-009 (operator-discretionary; external-org vaults
  consultatively)
- Airlock adoption per vault (M05-EC) — install `how/airlock/AIRLOCK.md` mirroring III
  canonical for vaults doing cross-vault work
- Workspace router resync — update `lattice/CLAUDE.md` Project Discovery with all
  renames + add the 2 missing vaults
- Final ecosystem audit + campaign AAR

### Out of Scope

- Changes to the aDNA standard or template repo content (that's v2's job)
- Forced renames against external-org wishes (Wilhelm Foundation, TAPP, Super League
  retain veto on their own repo names)
- Operation Rosetta Phase 8 (queued separately; runs after this campaign closes or in
  parallel from P3 onward)
- LatticeScope.aDNA execution (separate campaign per v2 Obj 10 design)
- Deprecation or archival of any vault (those are per-vault operator decisions)

### Subsumes

| Plan/Mission | Status at Subsumption | Tasks Absorbed By |
|-------------|----------------------|-------------------|
| Issue I-1 (workspace router gap, 2 missing vaults) from `m01_obj1_current_state.md` | open | M06-EC |
| Issue I-3 (no-remote pattern, 7 vaults) | open; M05 of v2 ships the skill | M03-EC |
| Issue I-4 (LPWhitepaper non-standard remote) | open; M05 of v2 designs the path | M03-EC |
| Issue I-5 (`wga.aDNA` missing `how/skills/`) | open | M02-EC |
| Per-vault airlock adoption | not yet open | M05-EC |
| Per-vault repo rename per ADR-009 | not yet open | M04-EC |

## Phases & Missions (preliminary — finalized at M11 of v2)

### Phase 0: Planning (M01-EC)

| Mission | Title | Sessions | Dependencies | Status |
|---------|-------|----------|-------------|--------|
| M01-EC | Per-vault audit + compliance checklist + mission tree calibration | 2-3 | v2 P3 phase gate | planned |

**Phase exit gate**: 19-vault compliance scorecard in hand; mission tree finalized + each mission has a 1-page abstract; operator approval to open P1.

### Phase 1: Per-vault audit (M01-EC continued)

Bundled with P0 — the audit IS the planning input.

### Phase 2: Bulk skill upgrade (M02-EC)

| Mission | Title | Sessions | Dependencies | Status |
|---------|-------|----------|-------------|--------|
| M02-EC | Bulk publish-skill upgrade — propagate v7.0 skills (`skill_lattice_publish` updated, `skill_git_remote_setup` NEW, `skill_deploy` NEW, `skill_vault_publish` NEW) to 18 vaults; create `how/skills/` for `wga.aDNA` | 3-4 | M01-EC scorecard | planned |

**Phase exit gate**: All 19 vaults carry the v7.0 skill set or have a documented opt-out.

### Phase 3: Git remote setup + naming (M03-EC, M04-EC)

| Mission | Title | Sessions | Dependencies | Status |
|---------|-------|----------|-------------|--------|
| M03-EC | Git remote setup for the 7 no-remote vaults; LPWhitepaper non-standard remote resolution | 2 | M02-EC | planned |
| M04-EC | GitHub repo rename per ADR-009 (operator-discretionary; external-org consultatively) | 2-3 | M03-EC + ADR-009 ratified | planned |

**Phase exit gate**: All 19 vaults have proper GitHub origin remotes (or documented exception); rename decisions finalized per vault.

### Phase 4: Airlock adoption + workspace router resync (M05-EC, M06-EC)

| Mission | Title | Sessions | Dependencies | Status |
|---------|-------|----------|-------------|--------|
| M05-EC | Airlock adoption per vault — install `how/airlock/AIRLOCK.md` mirroring III canonical for each vault doing cross-vault work | 2-3 | M02-EC (vaults must have skill set first) | planned |
| M06-EC | Workspace router resync — update `lattice/CLAUDE.md` Project Discovery with all renames + add `strategic_interface_protocol.aDNA` and `SuperLeague.aDNA` (closing Issue I-1) | 1 | M04-EC (renames must be final) | planned |

**Phase exit gate**: Airlock adoption complete for cross-vault-active vaults; workspace router reflects ground truth.

### Phase 5: Final audit + AAR (M07-EC)

| Mission | Title | Sessions | Dependencies | Status |
|---------|-------|----------|-------------|--------|
| M07-EC | Final ecosystem audit + campaign AAR; confirm 100% compliance or document exceptions | 1-2 | M06-EC | planned |

**Phase exit gate**: Campaign closed; ecosystem-compliance scorecard published.

## Decision Points

| # | When | Decision | Status |
|---|------|----------|--------|
| 1 | Before M01-EC opens | Operator confirms v2 P3 phase gate met; opens v3 P0 | pending (waits for v2) |
| 2 | M04-EC mid-mission | Per-vault rename decisions for the 4 hyphen-flat repos + 2 external-org vaults — operator/external coord | pending |
| 3 | M05-EC mid-mission | Per-vault airlock-adoption opt-in/opt-out (vaults that don't do cross-vault work can skip) | pending |
| 4 | Before M07-EC closes | Operator approves campaign closure; queues next campaign | pending |

## Risk Register

| Risk | Severity | Mitigation |
|------|----------|------------|
| External-org veto on rename (Wilhelm Foundation × 2, TAPP, Super League) blocks M04-EC | Medium | M04-EC is operator-discretionary by design; vetoed renames stay grandfathered with ADR-009 documentation |
| v2 P3 phase gate slips (M03 flatten or M08a/M08b ships late) | Medium | This campaign waits; no parallel start. Acceptable cost — v3 readiness depends on v2 stability |
| Per-vault customizations diverge during the campaign (e.g., a vault adopts unrelated changes mid-flight) | Low | Each mission opens with a per-vault git pull + state snapshot; any drift surfaces as a finding |
| Successor-campaign mission tree underestimates effort (v2 estimate was 4 → 5–6 → 6–7; v3 may follow similar inflation) | Medium | M01-EC's calibration step is explicit; budget buffer (12–20 sessions) is wide enough to absorb |
| Airlock pattern itself shifts (III.aDNA Campaign C ships v0.2 mid-v3) | Low | M05-EC pins to airlock v0.1 at campaign open; v0.2 adoption is a separate sub-campaign |

## Verification Strategy

### Per-Mission

| Check | Method | Gate? |
|-------|--------|-------|
| SITREP filed | Session closure protocol | Yes |
| AAR produced | 5-step AAR protocol | Yes |
| Per-vault changes committed in their respective repos | Each touched vault's `git status` clean | Yes |
| Coord memos co-signed by external-org vault personas where applicable | Memo file with explicit co-sign | Yes for M03-EC, M04-EC, M05-EC |

### Per-Phase

| Check | Method | Gate? |
|-------|--------|-------|
| All mission AARs are GO | Standard | Yes |
| Phase exit criteria met | Above tables | Yes |
| Compliance scorecard updated | M01-EC scorecard refreshed at each phase close | Yes |

### Campaign Validation

| Check | Method |
|-------|--------|
| 19-vault compliance scorecard at 100% (or all exceptions documented) | M07-EC final audit |
| Workspace router reflects ground truth | `lattice/CLAUDE.md` Project Discovery matches `ls ~/lattice/*.aDNA` |
| All M03-EC, M04-EC, M05-EC coord memos archived | `aDNA.aDNA/who/coordination/` + each external vault's coordination/ |

## Persona

**Rosetta** continues as the campaign persona — this is the standard's own ecosystem-wide
application, governed by the standard's vault, per ADR-004's principle that
aDNA-development campaigns belong in `aDNA.aDNA/`.

(Per-vault sessions inside other vaults adopt their respective personas: Daedalus for
Spacemacs, Hermes for CanvasForge, Iris for VideoForge, Hygieia for WilhelmAI, etc. The
campaign itself is Rosetta-led; each per-vault touch is a guest visit by Rosetta into
that vault, governed by that vault's CLAUDE.md.)

## Notes

- This stub is **deliberately preliminary**. The v2 campaign's M11 mission produces the
  finalized mission tree based on actual v2 outcomes (which exceptions emerged, which
  external-org coordination is in flight, which surprises shipped).
- The "per-vault patience" operating direction (see `CLAUDE.md`) governs every mission:
  don't start a per-vault touch without a fresh state snapshot of that vault.
- This campaign is the canonical home for closing Issues I-1, I-3, I-4, I-5, I-7, I-11
  from `m01_obj1_current_state.md` §5 (the per-vault-application items deferred from v2).

## Completion Summary

*Fill out when setting `status: completed`.*

### Deliverables
- [TBD by M07-EC AAR]

### Descoped
- [TBD]

### Key Findings
- [TBD]

### Scope Changes
- [TBD]

### Follow-Up Campaigns
- [TBD — likely LatticeScope execution + Op Rosetta Phase 8 + agentic layout system]

## Campaign AAR

*Mandatory before setting `status: completed`. See `how/templates/template_aar_lightweight.md`.*

- **Worked**: [TBD]
- **Didn't**: [TBD]
- **Finding**: [TBD]
- **Change**: [TBD]
- **Follow-up**: [TBD]
