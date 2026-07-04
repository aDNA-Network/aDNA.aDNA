---
type: campaign
campaign_id: campaign_fleet_reseed
title: "Fleet Re-Seed — bring the ecosystem vaults to a uniform v8.4/v8.5 compliance posture (or documented exceptions)"
owner: stanley
persona: rosetta   # co-owned with Hestia (Home.aDNA); per-vault touches adopt the host vault's persona
co_owner: hestia
status: active
phase: 2   # P2 (W2) OPEN 2026-07-03 — Objective 1 triage complete; sub-gate pending (execution model + rulings B/C — do not auto-advance to the sweep). W1 (F3+F6) closed + PUSHED (857f083).
predecessor: campaign_adna_v3_ecosystem_compliance   # superseded stub (v7.0-era); this is its post-launch re-seed successor
baseline: "v8.4 governance / v2.5 standard (v8.5 = template-only hygiene)"
created: 2026-07-03
updated: 2026-07-03
last_edited_by: agent_rosetta
routed_by:
  - how/gates/champollion_p0_gate.output.md   # D5 supersede-and-absorb
  - how/gates/champollion_p7_gate.output.md   # D2 fire (successor to v3 ecosystem-compliance)
tags: [campaign, fleet_reseed, ecosystem, compliance, per_vault, rosetta, hestia, successor, v8_4, v8_5]
---

# Campaign — Fleet Re-Seed

> **OPENED 2026-07-03.** Successor to the superseded `campaign_adna_v3_ecosystem_compliance` (a v7.0-era stub,
> never run), routed at Champollion **G0-D5** (supersede-and-absorb) and **fired at G7-D2** (2026-07-03).
> Joint-owned **Rosetta** (aDNA.aDNA — baseline/standard side) + **Hestia** (Home.aDNA — node/inventory side).
> **P0 audit complete** → `artifacts/fleet_reseed_scorecard.md`. **P0 gate RATIFIED 2026-07-03** (see §P0 Gate below):
> split-depth (conformance W1–W3 now · governance-doctrine W4 = its own separate later gate). **W1 ✅ closed + PUSHED 2026-07-03** — F3 (router) + F6 (inventory); Home.aDNA local-only (`93310e1`); aDNA.aDNA stack pushed (`857f083`, gitleaks clean). **P2 (W2) OPEN 2026-07-03** — Objective 1 triage complete (`mission_fleet_reseed_p2_wrapper_residue` + `artifacts/fleet_reseed_w2_wrapper_disposition.md`): 25 stale-named wrapper dirs / 8 vaults (WebForge false-positive; residue is dir-name-not-content). **Sub-gate pending** — execution model + Canvas N→1 convention + literatureforge rulings (Standing Order #1; do not auto-advance to the sweep).

## Goal
Bring the ecosystem vaults into a uniform **v8.4/v8.5 compliance posture** — or documented exceptions — now that
the public image has launched. "Compliance" spans: git-remote configured (or documented exception) · `<name>.aDNA`
naming conformance (ADR-009; external-org veto honored) · router + Home-inventory registration · airlock present if
cross-vault · federation-pin currency · and (a **separate gated decision**) adoption of the v8.4 consumer-facing
governance doctrine.

## Scope
**Full fleet, tier-classified** (operator decision 2026-07-03). Per the P0 scorecard: **69 real vault dirs** (15 symlinks +
Archive + WGS quarry skipped). Tier **A** mature-active (~39, re-seed candidates) · **B** genesis-stub (~29, defer/light-touch
until graduation) · **C** skip (17).

**Out of scope:** changes to the aDNA standard/template content (that's Rosetta's release lane, not this campaign) ·
forced renames against external-org wishes (Wilhelm Foundation ×2, TAPP, Super League retain veto) · deprecation/archival
of any vault (per-vault operator decisions) · Home.aDNA remote setup (it is local-by-default, Rule 4 — a documented exception, not a gap).

## Context (P0 recon findings — see scorecard for detail)
The fleet is **fragmented**: no vault is at v8.x; governance versions span v7.1/v6.0/v5.7/project-local/none, and the
**migration tooling has a v6→v8 gap**. Cross-cutting findings F1–F8: version fragmentation (F1) · ~25 no-remote genesis
cohorts (F2) · ~15 router gaps (F3) · pervasive **stale-named federation wrappers = rename residue** (F4, Berthier fleet-defect) ·
dirty trees + large unpushed backlogs (F5; aDNALabs 55 / LatticeProtocol 54 / Operations 52) · inventory drift 66→69 (F6) ·
**aDNA.aDNA self-drift** (its own gov at v6.0 while shipping v8.5, F7) · Berthier's 3 template-rooted defect classes (F8).

## Phases (P0 done; P1–P5 skeleton — **finalized at the P0 gate** from the scorecard)
| Phase | Focus | Owner lead | Status |
|---|---|---|---|
| **P0** | Charter + read-only fleet audit → compliance/version scorecard | Rosetta + Hestia | **✅ complete (this session)** |
| **P1** | Router resync + Home-inventory refresh (W1) — cheap, mechanical | Hestia | **✅ WORK COMPLETE 2026-07-03** — F3+F6 closed (`mission_fleet_reseed_p1_router_inventory`); **P2 gate-pending** |
| **P2** | Federation-wrapper rename-residue sweep (W2) — the F4/F8 defect | Rosetta + host personas | **OPEN — triage ✅ 2026-07-03 (25 wrappers / 8 vaults; WebForge false-pos; residue = dir-name); sub-gate pending** |
| **P3** | Git-remote setup (Tier-A no-remote) + commit/push-or-document hygiene (W3) | Hestia + host personas | ratified (after P2) |
| **P4** | Governance-doctrine adoption (W4) — v8.4 consumer-facing set; aDNA.aDNA self-drift first | Rosetta | **deferred to its own separate gate** |
| **P5** | Final audit + AAR; scorecard at 100% or all exceptions documented | Rosetta + Hestia | after P3 |

Each phase is a **human gate** (Standing Order #1). The P0 gate finalized this skeleton — see §P0 Gate.

## P0 Gate — RATIFIED 2026-07-03
Operator decisions this session:
1. **Tiers** — A/B/C as proposed in the scorecard (confirmed; borderline Context/TypeScript stay Tier-A active-genesis; zeta Tier-B).
2. **Depth = SPLIT** — compliance-conformance (W1–W3) is this campaign's near-term work; **governance-doctrine adoption (W4) is deferred to its own separate gate** (needs migration tooling + per-vault judgment; fix aDNA.aDNA self-drift there, dogfood-first).
3. **Wave order** — W1 → W2 → W3; W4 separate.
4. **Genesis-stub posture** — Tier-B = light-touch (router + inventory registration) only; full compliance defers to graduation.
5. **External-org** — RareArchive / WilhelmAI / SuperLeague: light-touch, rename-veto honored (Standing Order 2).

**Pacing = HOLD.** W1 was **not** started this session; it opens next session. **Next action:** author `mission_fleet_reseed_p1_router_inventory` and run W1 (Hestia-led — router resync + `skill_inventory_refresh`; refresh ground truth first, state drifts between sessions).

## Standing Orders (carried from the v3 predecessor + re-seed additions)
1. **Per-vault patience.** Every per-vault touch begins with `git pull` + read that vault's CLAUDE.md + STATE.md + `who/coordination/`. Never start a change on stale state (other operators/sessions commit concurrently).
2. **Non-forced renames.** ADR-009 does not force renames; each is an operator decision. External-org vaults retain veto.
3. **Co-sign cross-graph memos.** Any change to an external/partner vault (Wilhelm Foundation, TAPP, Super League) or a persona-owned graph produces a coord memo co-signed by Rosetta + the host persona before it ships (workspace Rule 10).
4. **Document exceptions, don't suppress.** Every opt-out gets an explicit scorecard exception entry with rationale. No silent skips (e.g., Home.aDNA no-remote is a *documented* exception, not a defect).
5. **Never cross-vault bulk-commit.** Stage each vault's changes as a single per-vault commit in its own repo.
6. **Genesis-stub restraint.** Tier-B stubs get light-touch only (router + inventory registration); full compliance defers to graduation.
7. **Fleet-defect awareness.** Carry Berthier's 3 defect classes (F8) as inputs; rename-residue (F4) is the P2 target.

## Verification
- **Per-mission:** SITREP + AAR; each touched vault's `git status` clean + per-vault commit; cross-graph memos co-signed.
- **Per-phase:** scorecard refreshed; phase-exit criteria met; operator gate.
- **Campaign:** scorecard at 100% (or all exceptions documented); router + Home-inventory match `ls ~/aDNA/*.aDNA`; `skill_node_health_check` green.

## Owner split
**Rosetta** (aDNA.aDNA) — baseline definition + per-vault adoption guidance + the standard-side sweeps (federation-wrapper currency, doctrine checklist). **Hestia** (Home.aDNA) — vault discovery + `inventory_vaults.yaml` currency + `skill_node_health_check` + per-vault adoption tracking + router resync. Per-vault sessions are guest visits governed by the host vault's CLAUDE.md + persona.

## Completion Summary / AAR
*Fill at `status: completed` (mandatory AAR per Standing Order #5).*
