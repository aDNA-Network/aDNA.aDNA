---
type: reference
artifact_class: decision_record
title: "DP1 — P2 Cross-Vault Execution Model (Operation Concord)"
campaign: campaign_w4_governance_doctrine
created: 2026-07-05
updated: 2026-07-05
status: accepted
last_edited_by: agent_rosetta
tags: [reference, decision_record, w4, concord, dp1, execution_model, ratification, accepted]
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
| **Ratified-by** | operator (kinnagent) |
| **Date** | 2026-07-05 |
| **Status** | **accepted** — Option C (hybrid, direct-by-default); P2 is open |

## The options

| Option | What it is | Pro | Con |
|--------|-----------|-----|-----|
| **A — Guest-visit all** | Rosetta enters every vault, adopts the host persona, edits + commits locally. | Fastest; one author, uniform quality. | Pushes aDNA doctrine into the 2 external Wilhelm-Foundation repos (RareArchive, WilhelmAI) without the **SO#3 co-sign** (the SO#2 veto is renames-only, so it's SO#3 that applies). |
| **B — Coord-memo all** | Stage an adoption memo to each host persona; each applies in its own session. | Maximal ownership respect; zero cross-vault writes by Rosetta. | 38 memos **drain slowly** (the Fleet Re-Seed tail pattern — may take weeks / never complete) for caution most internal vaults don't need. |
| **C — Hybrid, direct-by-default** *(recommended)* | Direct guest-visit for internally-owned vaults; coord-memo for the external-org/partner set; verify-first on any diverged branch. | Fast where safe, respectful where it matters; matches the **W2 precedent** (direct sweeps worked; memo for CakeHealth; skip for diverged SS). | Requires a per-vault classification (done below). |

**Why C.** The checklist adoption is **additive and mechanical** — append doctrine sections + a version/CHANGELOG bump — so
it is far lower-risk than the W2 rename-residue sweep, and direct application is safe for the bulk. But a handful of vaults
are externally anchored or partner-sensitive, where owner consent is the norm (ADR-001, SO#2, SO#3 co-sign). C gets the
speed of A for the ~34 internal vaults and the respect of B for the ~2 external repos that need it.

## Per-vault classification — CORRECTED after ownership recon (2026-07-05)

> **Recon correction.** The SO#2 external-org veto is **renames-only** (*"Non-forced renames… external-org vaults retain
> veto"*) — it does **not** block doctrine adoption. And only **2** vaults sit on external (Wilhelm-Foundation) *governance*
> repos. So the memo set shrinks **5 → 2**; **TappProtocol + SuperLeague are aDNA-Network (ours) → direct**. The operative
> lever is **active-work/divergence, not ownership**. Re-verify live at P2 — the roster ages.

**Coord-memo + co-sign (SO#3) — external governance repo (2):**
- **RareArchive** — its `.aDNA` *governance* repo is on **Wilhelm-Foundation** (external).
- **WilhelmAI** — `.aDNA` governance repo on **Wilhelm-Foundation** (external); also mid-cycle (Phase 3).

**Direct + co-sign-notify (1):**
- **CakeHealth** — ours (aDNA-Network), but Ami ADR-004 co-ratification is live → apply the additive edit, heads-up Ami/Berthier (SO#3 courtesy).

**Verify-first → defer if diverged (SO#1) — the real risk (dynamic):**
- **ScienceStanley** — currently on a divergent migration branch (`vitruvian/m-vm1-1-feynman-warm`) → **defer** until it settles.
- *(Any vault a live `git fetch` shows diverged / mid-WIP — recon flagged local WIP in TappProtocol (+3), RareArchive, CakeHealth, PercySleep; sequence around it.)*

**Direct guest-visit (ours — the bulk, ~34):** Home *(node-vault applicability — broader than project subset)* · aDNALabs · Astro · Canvas · ComfyUI · Context · ContextCommons · Exchange · Git · Harness · III · LAVentureGraph · Lab · LatticeProtocol · Molecules · Network · Obsidian · Operations · Oration · PercySleep *(verify)* · RemoteControl · Spacemacs · **SuperLeague** · **TappProtocol** · Terminal · TypeScript · VAAS · Videos · VisualDNA · Warp · WebForge · wga · ZenZachary.

> Applicability: each vault takes the **project-vault 5-item subset** (ratification · credential-routing · AskUserQuestion ·
> single-writer-lease · executor_tier; reference agentic-sudo; drop router-row discipline) — **except Home** (node vault:
> broader set, it *is* the credential broker) and the workspace router (`~/aDNA/CLAUDE.md`, already carries Standing Rules 5–7).

## Cohort batching (~3 P2 sessions; refine live — re-run `skill_inventory_refresh` first)

| Cohort | ~Count | Vaults |
|--------|:---:|--------|
| **C1 — Platforms** | ~14 | Canvas · ComfyUI · Terminal · Warp · Obsidian · Lab · WebForge · Harness · LatticeProtocol · Context · Exchange · VAAS · RemoteControl · AWSBootstrap |
| **C2 — Forges + Frameworks** | ~8 | Astro · Molecules · Oration · Videos · Git · III · TypeScript · VisualDNA |
| **C3 — Node / Org / infra + memo set** | ~12 + 2 | Home · aDNALabs · Network · Operations · ContextCommons · wga · LAVentureGraph · Spacemacs · PercySleep · ZenZachary · **SuperLeague** · **TappProtocol** · CakeHealth *(direct+notify)* · ScienceStanley *(verify/defer)* + **memos:** RareArchive · WilhelmAI |

**Standing discipline for every P2 touch** (campaign SOs): `git pull` + read host CLAUDE.md/STATE first (SO#1) · one per-vault
commit (SO#5) · pushes operator-gated (SO-9) · co-sign cross-graph memos (SO#3) · Tier-B stays out (SO#6).

## Ratification outcome

**Ratified 2026-07-05 — Option C (hybrid, direct-by-default), accepted by the operator.** Recon correction folded in (memo
set 5→2; SO#2 veto = renames-only). **P2 is open** — execute via [[mission_w4_p2_tier_a_rollout]], Cohort 1 first, under the
**verify-first** discipline (per-vault `git fetch` + WIP/divergence check; defer mid-flight vaults). The rollout's first
cross-vault writes remain an operator go.
