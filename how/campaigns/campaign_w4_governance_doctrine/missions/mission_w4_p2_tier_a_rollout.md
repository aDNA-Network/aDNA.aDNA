---
type: mission
created: 2026-07-05
updated: 2026-07-05
status: proposed
last_edited_by: agent_rosetta
campaign: campaign_w4_governance_doctrine
phase: P2
wave: "— (Tier-A rollout, 38 vaults, batched ~3 cohorts)"
mission_class: implementation
executor_tier: opus   # per-vault judgment (divergence checks + applicability); clean internal cohorts may drop to sonnet
token_budget_estimated: "~60/session × ~3 cohorts (~180 total)"
token_budget_actual: "<filled at close>"
tags: [mission, w4, concord, p2, tier_a, rollout, proposed, gated]
---

# Mission — W4 P2: Tier-A rollout (adopt the v8.4 doctrine across the fleet)

**DP1 RATIFIED 2026-07-05 — Option C (hybrid, direct-by-default)** ([[dp1_execution_model]]). Stays `status: proposed`
until the operator green-lights the rollout's **first cross-vault writes** (Cohort 1). The model + per-vault classification
are settled; the memo set is **2** (RareArchive, WilhelmAI). Rolls the proven instrument [[v8_4_adoption_checklist]] —
validated on aDNA.aDNA at P1 — across the **38 remaining Tier-A vaults**.

## Goal

Every Tier-A vault carries the project-vault subset of the v8.4 consumer-facing doctrine (or a documented exception).
Governance *posture* coherent across the fleet; per-vault commits local; pushes operator-gated (SO-9).

## Preconditions (all must hold before opening)

1. **DP1 ratified** ([[dp1_execution_model]] block filled) — execution model + per-vault direct/memo/verify classification.
2. **P1 closed** — aDNA.aDNA at v8.4, F7 closed (done, `98cf742`).
3. **Ground truth refreshed** — `Home.aDNA/how/skills/skill_inventory_refresh.md`, then re-read the live Tier-A rows in
   `../campaign_fleet_reseed/artifacts/fleet_reseed_scorecard.md` (**the roster ages between sessions** — the recurring gotcha).

## Objectives (per the recommended hybrid model; cohorts from the DP1 record)

| # | Objective | Method | Status |
|---|-----------|--------|--------|
| 1 | **Cohort 1 — Platforms** (~14) | Direct guest-visit: per vault `git pull` + read host CLAUDE.md/STATE (SO#1) → apply project-vault 5-item subset per [[v8_4_adoption_checklist]] → per-vault local commit (SO#5). | ◐ pilot done 2026-07-05 — **3 adopted** (AWSBootstrap·Canvas·VAAS) / **11 deferred** (6 tailor·3 genesis·2 WIP) → [[p2_adoption_ledger]] |
| 2 | **Cohort 2 — Forges + Frameworks** (~8) | Direct guest-visit (as C1). | proposed |
| 3 | **Cohort 3 — Node/Org/infra** (~10) | Direct; **Home = node-vault applicability** (broader subset; it *is* the broker); **ScienceStanley/PercySleep = verify-first** (divergence check → memo/defer if diverged). | proposed |
| 4 | **Coord-memo set** (5) | Stage co-signed adoption memos (SO#3) to **RareArchive · WilhelmAI · TappProtocol · SuperLeague · CakeHealth** — owner applies. | proposed |
| 5 | **Adoption ledger** | Track per-vault state (applied / memo-sent / deferred-exception) in `artifacts/p2_adoption_ledger.md`; no silent skips (SO#4). | proposed |
| 6 | **P2 close** | Every Tier-A vault applied or documented-exception → phase exit gate → hand to P3. | proposed |

## Per-vault procedure (each direct touch)

1. `git pull` in the target vault; **check for branch divergence / concurrent work** — if diverged, downgrade to memo/defer (the ScienceStanley-in-W2 lesson).
2. Read the host `CLAUDE.md` + `STATE.md` + persona (guest visit under the host's governance).
3. Apply the checklist's **project-vault recipe** (skip items already present; §7.7 · credential-routing · AskUserQuestion · single-writer-lease · executor_tier; reference agentic-sudo; **drop router-row discipline**). Add a CHANGELOG entry if the vault uses aDNA gov-versioning; otherwise adopt the *items*, not a number (DP3).
4. Update the host's `updated`/`last_edited_by`; one per-vault local commit (SO#5); **do not push** (operator-gated, SO-9).
5. Record in the adoption ledger.

## Out of scope

- **Tier-B genesis stubs** — light-touch only, deferred to graduation (SO#6).
- **v6→v8 tooling ruling (F1)** — that's P3.
- **Pushes** — operator-gated per vault.

## Verification

- Adoption ledger shows all 38 as applied / memo-sent / documented-exception.
- Spot-check: a sampled vault's `CLAUDE.md` carries the 5 items; `adna_validate --governance` clean where the vault versions.
- No cross-vault write occurred without the DP1-sanctioned model (guest-visit or memo).

## Completion Summary
*Filled at close.*

## AAR
*Mandatory before `status: completed`.*
