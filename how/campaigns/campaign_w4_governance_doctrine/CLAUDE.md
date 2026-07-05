# CLAUDE.md — Campaign: W4 Governance-Doctrine Adoption (Operation Concord)

> **OPENED 2026-07-05.** Documented successor to `campaign_fleet_reseed` (closed P5 2026-07-05). Joint **Rosetta**
> (aDNA.aDNA) + **Hestia** (Home.aDNA). Opened at **full scope** by operator decision. Executed **dogfood-first**:
> close aDNA.aDNA's own self-drift (F7) before touching any consumer vault.

## Campaign Identity
| Field | Value |
|---|---|
| Campaign | `campaign_w4_governance_doctrine` |
| Owners | Rosetta (baseline/standard) + Hestia (node/inventory) |
| Status | **active** — P0/P1 (charter + dogfood) this session; P2 (Tier-A rollout) + P3 (close) operator-gated |
| Baseline | v8.4 consumer-facing doctrine (v8.5 = template-only release-hygiene) |
| Predecessor | `campaign_fleet_reseed` (closed P5); readiness stub `idea_fleet_reseed_w4_governance_doctrine` (promoted) |

## Quick Start (for the agent that opens P2)
1. Read this file + `campaign_w4_governance_doctrine.md` (the charter) + `artifacts/v8_4_adoption_checklist.md` (the instrument).
2. Confirm **P1 (dogfood) is closed** — aDNA.aDNA `CLAUDE.md` reads `version: "8.4"` and carries the 6 doctrine items;
   F7 marked closed in `../campaign_fleet_reseed/artifacts/fleet_reseed_scorecard.md`. If not, do P1 first — it is BLOCKING.
2b. Confirm **DP1** is decided (the cross-vault execution model: guest-visit / coord-memo / hybrid). If not recorded,
    escalate to operator — do NOT start writing into other vaults (workspace Rule 10).
3. Refresh ground truth: `Home.aDNA/how/skills/skill_inventory_refresh.md` then re-read the scorecard's Tier-A rows
   (state moves between sessions — the scorecard ages).
4. Work **one vault at a time**, apply the checklist per its applicability column, per-vault commit (pushes operator-gated, SO-9).

## Key Files
| File | Purpose |
|---|---|
| `campaign_w4_governance_doctrine.md` | Master charter — goal, scope, phases, decision points, risks |
| `artifacts/v8_4_adoption_checklist.md` | The instrument — per-vault checklist + applicability model (project/node/router) |
| `missions/mission_w4_p1_dogfood_self_drift.md` | P1 dogfood mission (F7 close) |
| `../campaign_fleet_reseed/artifacts/fleet_reseed_scorecard.md` | Tier-A roster (38 remaining) + F1/F7 dispositions |
| `../campaign_fleet_reseed/artifacts/aar_fleet_reseed.md` | Predecessor lessons |
