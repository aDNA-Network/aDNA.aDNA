# CLAUDE.md — Campaign: Fleet Re-Seed

> **OPENED 2026-07-03.** Post-launch fleet-compliance re-seed; successor to the superseded
> `campaign_adna_v3_ecosystem_compliance`. Joint **Rosetta** (aDNA.aDNA) + **Hestia** (Home.aDNA).
> **P0 audit complete** (`artifacts/fleet_reseed_scorecard.md`); awaiting the P0 gate before P1.

## Campaign Identity
| Field | Value |
|---|---|
| Campaign | `campaign_fleet_reseed` |
| Owners | Rosetta (baseline/standard) + Hestia (node/inventory) |
| Status | **active** — P0 done, P1 gate-pending |
| Baseline | v8.4 governance / v2.5 standard (v8.5 = template-only) |
| Predecessor | `campaign_adna_v3_ecosystem_compliance` (superseded stub) |

## Quick Start (for the agent that opens P1)
1. Read this file + `campaign_fleet_reseed.md` (the charter) + `artifacts/fleet_reseed_scorecard.md` (the ground truth).
2. Confirm the **P0 gate** decisions are recorded (tiers · depth · wave order · genesis-stub posture · external-org handling). If not, escalate to operator — do NOT start remediation.
3. Refresh ground truth before acting: `Home.aDNA/how/skills/skill_inventory_refresh.md` (roster drift 66→69) then re-check the scorecard rows for the wave's vaults (state moves between sessions).
4. Open the wave's mission; work **one vault at a time**, per-vault commit.

## Key Files
| File | Purpose |
|---|---|
| `campaign_fleet_reseed.md` | Master charter — goal, scope, phases, standing orders |
| `artifacts/fleet_reseed_scorecard.md` | P0 audit — per-vault tiers + findings F1–F8 + recommended waves |
| `missions/mission_fleet_reseed_<NN>_<slug>.md` | Per-wave missions (authored at each phase open) |
| `…/scratchpad/fleet_audit_raw.txt` | Raw 8-column audit table (regenerate before each wave) |

## Standing Orders (campaign-specific — augment `aDNA.aDNA/CLAUDE.md`)
1. **Per-vault patience** — `git pull` + read host CLAUDE.md/STATE.md/coordination before any touch.
2. **Non-forced renames** — external-org veto (Wilhelm Foundation ×2, TAPP, Super League).
3. **Co-sign cross-graph memos** — Rosetta + host persona on any partner-vault change (workspace Rule 10).
4. **Document exceptions** — explicit scorecard entry + rationale; no silent skips (Home.aDNA no-remote is a documented exception).
5. **Never cross-vault bulk-commit** — one per-vault commit per vault.
6. **Genesis-stub restraint** — Tier-B = light-touch (router + inventory) only; full compliance defers to graduation.
7. **Fleet-defect awareness** — Berthier's 3 classes (F8); rename-residue (F4) is the P2 target.

## Context Loading
| Resource | When |
|---|---|
| `artifacts/fleet_reseed_scorecard.md` | Always |
| `Home.aDNA/what/inventory/inventory_vaults.yaml` + `Home.aDNA/how/skills/{skill_node_health_check,skill_inventory_refresh,skill_update_all_vaults}.md` | P1/P3/P5 (Hestia legs) |
| `.adna/CHANGELOG.md` (v8.4 consumer-facing set) + `.adna/CLAUDE.md` | P4 (doctrine adoption) |
| `who/coordination/coord_2026_06_27_inbound_from_berthier_fleet_defects.md` | P2 (rename-residue / fleet-defects) |
| `what/decisions/adr_009_aDNA_naming_convention.md` + `adr_008` (airlock) | P2/P3 (naming + airlock) |

## Delegation
Rosetta-led; Hestia co-owns the node-side legs (inventory, health-check, router resync). Per-vault touches are guest visits by Rosetta/Hestia into the host vault, governed by that vault's CLAUDE.md + persona (e.g., Daedalus/Spacemacs, Hygieia/WilhelmAI, Seshat/Obsidian). Remediation is **gate-pending** — nothing ships before the operator ratifies the P0 gate.
