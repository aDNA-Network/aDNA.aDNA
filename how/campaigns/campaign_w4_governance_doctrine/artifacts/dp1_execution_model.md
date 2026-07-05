---
type: reference
artifact_class: decision_record
title: "DP1 — P2 Cross-Vault Execution Model (Operation Concord)"
campaign: campaign_w4_governance_doctrine
created: 2026-07-05
updated: 2026-07-05
status: proposed
last_edited_by: agent_rosetta
tags: [reference, decision_record, w4, concord, dp1, execution_model, ratification, proposed]
---

# DP1 — P2 Cross-Vault Execution Model

**The decision that opens P2.** P2 adopts the v8.4 doctrine ([[v8_4_adoption_checklist]]) across the 38 remaining Tier-A
vaults — which means **writing into other vaults' `CLAUDE.md`**. Workspace Rule 10 forbids *silent* cross-vault writes, so
the operator must first choose *how* those writes happen. This record frames the choice, recommends one, and pre-classifies
the roster so P2 can start the moment it's ratified.

## Ratification (§7.7)

| Field | Value |
|-------|-------|
| **Decision** | DP1 — the P2 cross-vault execution model (below) |
| **Recommendation** | **Option C — Hybrid, direct-by-default** |
| **Ratified-by** | *(operator — pending)* |
| **Date** | *(pending)* |
| **Status** | **proposed** — P2 does not open until this is ratified |

## The options

| Option | What it is | Pro | Con |
|--------|-----------|-----|-----|
| **A — Guest-visit all** | Rosetta enters every vault, adopts the host persona, edits + commits locally. | Fastest; one author, uniform quality. | Unilaterally writes aDNA doctrine into **partner/external-org** repos — violates ADR-001 (RareArchive's external Wilhelm repo) + campaign SO#2 (external-org veto). |
| **B — Coord-memo all** | Stage an adoption memo to each host persona; each applies in its own session. | Maximal ownership respect; zero cross-vault writes by Rosetta. | 38 memos **drain slowly** (the Fleet Re-Seed tail pattern — may take weeks / never complete) for caution most internal vaults don't need. |
| **C — Hybrid, direct-by-default** *(recommended)* | Direct guest-visit for internally-owned vaults; coord-memo for the external-org/partner set; verify-first on any diverged branch. | Fast where safe, respectful where it matters; matches the **W2 precedent** (direct sweeps worked; memo for CakeHealth; skip for diverged SS). | Requires a per-vault classification (done below). |

**Why C.** The checklist adoption is **additive and mechanical** — append doctrine sections + a version/CHANGELOG bump — so
it is far lower-risk than the W2 rename-residue sweep, and direct application is safe for the bulk. But a handful of vaults
are externally anchored or partner-sensitive, where owner consent is the norm (ADR-001, SO#2, SO#3 co-sign). C gets the
speed of A for the ~31 internal vaults and the respect of B for the ~5 that need it.

## Per-vault classification (from the P0 scorecard; re-verify live at P2 — the roster ages)

**Coord-memo (owner applies — external-org / partner):**
- **RareArchive** — external Wilhelm Foundation repo (`origin` external, ADR-001 A1).
- **WilhelmAI** — Wilhelm Foundation org-vault (SO#2).
- **TappProtocol** — TAPP (SO#2).
- **SuperLeague** — Super League company (SO#2).
- **CakeHealth** — Genentech/Dr. Ami Mac partner; Berthier co-sign (per W2).

**Verify-first (SO#1 divergence/concurrency check before any touch → downgrade to memo/defer if diverged):**
- **ScienceStanley** — was diverged + actively worked in W2 (the load-bearing lesson); confirm branch state before touching.
- *(Any vault a live `git pull` shows diverged or under concurrent work.)*

**Direct guest-visit (internal — the bulk, ~31):** Home *(node-vault applicability — broader than project subset)* · aDNALabs · Astro · Canvas · ComfyUI · Context · ContextCommons · Exchange · Git · Harness · III · LAVentureGraph · Lab · LatticeProtocol · Molecules · Network · Obsidian · Operations · Oration · PercySleep *(verify)* · RemoteControl · Spacemacs · Terminal · TypeScript · VAAS · Videos · VisualDNA · Warp · WebForge · wga · ZenZachary.

> Applicability: each vault takes the **project-vault 5-item subset** (ratification · credential-routing · AskUserQuestion ·
> single-writer-lease · executor_tier; reference agentic-sudo; drop router-row discipline) — **except Home** (node vault:
> broader set, it *is* the credential broker) and the workspace router (`~/aDNA/CLAUDE.md`, already carries Standing Rules 5–7).

## Cohort batching (~3 P2 sessions; refine live — re-run `skill_inventory_refresh` first)

| Cohort | ~Count | Vaults |
|--------|:---:|--------|
| **C1 — Platforms** | ~14 | Canvas · ComfyUI · Terminal · Warp · Obsidian · Lab · WebForge · Harness · LatticeProtocol · Context · Exchange · VAAS · RemoteControl · AWSBootstrap |
| **C2 — Forges + Frameworks** | ~8 | Astro · Molecules · Oration · Videos · Git · III · TypeScript · VisualDNA |
| **C3 — Node / Org / infra + memo set** | ~10 + 5 | Home · aDNALabs · Network · Operations · ContextCommons · wga · LAVentureGraph · Spacemacs · PercySleep · ZenZachary · ScienceStanley *(verify)* + **memos:** RareArchive · WilhelmAI · TappProtocol · SuperLeague · CakeHealth |

**Standing discipline for every P2 touch** (campaign SOs): `git pull` + read host CLAUDE.md/STATE first (SO#1) · one per-vault
commit (SO#5) · pushes operator-gated (SO-9) · co-sign cross-graph memos (SO#3) · Tier-B stays out (SO#6).

## On ratification

When the operator ratifies (fills the block above), open P2 via [[mission_w4_p2_tier_a_rollout]] and start with Cohort 1.
A different option (A or B) or a re-scoped classification is fine — this record just makes C ready to fire.
