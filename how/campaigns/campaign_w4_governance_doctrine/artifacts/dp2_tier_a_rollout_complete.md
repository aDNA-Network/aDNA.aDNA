---
type: reference
artifact_class: decision_record
title: "DP2 — Tier-A rollout complete (P2→P3 gate)"
campaign: campaign_w4_governance_doctrine
decision_point: DP2
created: 2026-07-06
updated: 2026-07-06
status: accepted
last_edited_by: agent_rosetta
tags: [reference, decision, dp2, w4, concord, p2, tier_a, gate, ratified]
---

# DP2 — Tier-A rollout complete (P2 → P3 gate)

The Phase-2 exit gate decision record for Operation Concord (`campaign_w4_governance_doctrine`). Charter DP2:
**"Approve Tier-A rollout complete (all applied or documented-exception)."** Authored at the P3 close for operator
ratification (§7.7: agents author, operators ratify).

## Recommendation

**Tier-A rollout COMPLETE (ratified 2026-07-06).** Every Tier-A vault either **carries the v8.4 doctrine** (32 adopted)
or sits in the **documented-exception register** below. The Tier-B genesis stubs are **out-of-scope** per the charter
(§Out of Scope), not exceptions. The P2 exit gate — "every Tier-A vault has the checklist applied or a documented
exception; per-vault commits local (pushes operator-gated, SO-9)" — is met.

## 4-field ratification block

- **Decision:** Tier-A rollout complete — **32 adopted** + documented-exception register (below).
- **Ratified-by:** Stanley, Founding Architect (operator).
- **Date:** 2026-07-06.
- **Status:** **accepted** — operator ratified via `AskUserQuestion` (2026-07-06), directing the **Obsidian+Lab sweep first** (done: +2 → 32), then complete.

## Adoption census — 30 vaults (reconciles to [[p2_adoption_ledger]])

| Wave | N | Vaults |
|------|---|--------|
| Dogfood (P1) | 1 | aDNA.aDNA |
| Alignment sweep | 8 | AWSBootstrap · VAAS · Canvas · ContextCommons · Network · Oration · Spacemacs · ZenZachary |
| Tailor Batch-1 | 7 | Astro · aDNALabs · Molecules · LAVentureGraph · wga · III · VisualDNA |
| Tailor Batch-2 | 7 | Harness · TappProtocol · CakeHealth · Git · PercySleep · Videos · SuperLeague |
| Deferred-set force-adopt | 7 | ComfyUI · Terminal · LatticeProtocol · Exchange · WebForge · TypeScript · **Operations (→ AGENTS.md)** |
| DP2 Obsidian+Lab sweep | 2 | Obsidian (`6fab797`) · Lab (`701eaa3`) — operator-directed at the DP2 gate; both pushed |
| **Total** | **32** | — |

Every adoption: surgical CLAUDE.md-only (Operations: AGENTS.md-only) local commit; `adna_validate --governance`
zero **new** drift. Per-vault commits + shas in the ledger (§Alignment sweep / §Batch-1 / §Batch-2 / §Deferred-set).

## Documented-exception register (the only un-adopted Tier-A vaults)

*(Obsidian + Lab were WIP-deferred, then **swept at the DP2 gate** on operator direction — now adopted, see census.)*

| Vault | Class | Reason / disposition |
|-------|-------|----------------------|
| Home | node-vault | Not the project-vault subset — needs the **node-vault broker-home applicability variant** (Home *is* the credential broker). Hestia's domain; a separate scoped pass. |
| RareArchive | external-org | Wilhelm-Foundation repo → **DP1 memo-set** (coord-memo + SO#3 co-sign, not a direct edit). |
| WilhelmAI | external-org | Wilhelm-Foundation repo → **DP1 memo-set** (coord-memo + SO#3 co-sign). |
| ScienceStanley | diverged | On a divergent migration branch → verify-first/defer until it settles. |

**Out-of-scope (not exceptions):** Tier-B genesis stubs — Context · Warp · RemoteControl (charter §Out of Scope:
"stay light-touch until they graduate"); doctrine lands at each vault's **graduation** (SO#6). Tier-C (symlinks /
archive / quarry) skipped by definition.

## Push-hold register (adopted-but-not-pushed)

Adoption commits are local; pushes are per-vault operator-gated (SO-9). Held from push (large / deliberate backlogs):

| Vault | Held | Reason |
|-------|------|--------|
| aDNALabs | ~66+ | Concord commit sits atop unrelated Vitruvian-Man commits ("local, unpushed"); deliberate SO-9 local-first. |
| Network | ~37+ | Concord commit #1 of a large backlog; deliberately local-no-push (SO-9 / First-Light integrity). |
| WebForge | ~15+ | Own genesis backlog mid-B3.9 deploy. |
| Operations | ~84 | Large backlog, mid-C05. |
| ComfyUI | — | **Local-only** — sole remote is `luke-mesh` (no origin); unpushable until it gains a reachable remote (cf. Canvas). |

All held-push vaults **carry the doctrine locally** (counted in the census); pushing them is a separate,
explicit-go decision. The other 25 adoptions are pushed to origins (Codeberg auth confirmed; Canvas's earlier
mesh-block resolved when it gained a GitHub origin).

## On ratification

P2 → `completed`; proceed to P3 close (F1/DP3 = [[adr_047_governance_doctrine_checklist_ruling]]; scorecard F1+F7
closed; campaign AAR). The exception-register vaults become the campaign's **follow-up register** under their owners
(Home → Hestia; Wilhelm memos → Rosetta; genesis-graduation → each vault at graduation; ScienceStanley → when
settled), **not** open P2 work.
