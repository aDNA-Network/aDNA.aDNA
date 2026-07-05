---
type: reference
artifact_class: adoption_ledger
title: "P2 Adoption Ledger — Operation Concord"
campaign: campaign_w4_governance_doctrine
created: 2026-07-05
updated: 2026-07-05
status: active
last_edited_by: agent_rosetta
tags: [reference, ledger, w4, concord, p2, tier_a, rollout]
---

# P2 Adoption Ledger — Operation Concord

Per-vault disposition for the v8.4 governance-doctrine rollout (DP1 = Option C, hybrid direct-by-default; [[dp1_execution_model]]). No silent skips (SO#4). **Roster ages — re-verify live before each pass.**

## Recipe refinement (adopted at Cohort 1, 2026-07-05)

The per-vault adoption is: insert a `## Governance Doctrine (v8.4)` consumer section (the 5 project-vault items; reference agentic-sudo; drop router-row) before `## Git Coordination`; add a **`governance_doctrine: v8.4` frontmatter field** — **NOT** a `version` bump. The version-number question is deferred to **DP3/F1**, and consumer vaults carry mixed versioning tracks (aDNA-governance vs vault-local vs none — AWSBootstrap's CHANGELOG is explicitly vault-local `v0.1` independent of its governance `v7.0`). Commit **surgically — CLAUDE.md only** (leave `.obsidian`/memo/code noise). The consumer doctrine section references canonical cross-vault instruments (Home.aDNA broker · `aDNA.aDNA/how/skills/skill_agentic_sudo.md` · `skill_create_iss.md` · the model-tier pattern), not aDNA.aDNA-internal wikilinks. Applies cleanly to **template-aligned, versioned** vaults; divergent/genesis vaults need a tailored pass.

## Cohort 1 — Platforms (14)

| Vault | Disposition | Detail |
|-------|-------------|--------|
| **AWSBootstrap** | ✅ ADOPTED | `5413f73` (local) — v7.0, template-aligned; `adna_validate` clean (pre-existing 7.0-vs-CHANGELOG-v0.1 two-track note, not introduced). |
| **Canvas** | ✅ ADOPTED | `3e95533` (local) — v7.0; zero-drift; `.obsidian` noise left untouched. |
| **VAAS** | ✅ ADOPTED | `fcb0d0c` (local) — v6.0; zero-drift; `.obsidian` noise left untouched. |
| **ComfyUI** | ⏸ DEFER-tailor | Already has `## Credential routing`; custom structure (Project Identity/Hardware Routing/III); active `agent_comfyui_lane` (2026-07-02). Add the 4 missing items in the tailor pass. |
| **Terminal** | ⏸ DEFER-tailor | 29 custom Standing Orders; no standard Safety/Agent-Protocol/Git-Coordination sections → bespoke placement. |
| **WebForge** | ⏸ DEFER-tailor | No `version:` field; "Standing posture" (4) not "Standing Orders"; genesis-active. Structural decision needed. |
| **Harness** | ⏸ DEFER-tailor | Named-project (no version); confirm structure at tailor pass. |
| **LatticeProtocol** | ⏸ DEFER-tailor | Named-project; +66 ahead (quiescent). Confirm structure. |
| **Exchange** | ⏸ DEFER-tailor | Named-project (no version); +4; untracked coordination memo. |
| **Context** | ⏸ DEFER-genesis | Genesis v0.0.1 (planning→execution); doctrine belongs at graduation (SO#6). |
| **Warp** | ⏸ DEFER-genesis | Genesis v0.4 (Operation Threshold P0). SO#6. |
| **RemoteControl** | ⏸ DEFER-genesis | Stub ("awaiting `skill_project_fork`"). SO#6. |
| **Obsidian** | ⏸ DEFER-WIP | Real active work (`reseed_runner.py`); revisit when quiescent. |
| **Lab** | ⏸ DEFER-WIP | Real active work (campaign STATE files); revisit when quiescent. |

**Cohort 1 result: 3 adopted / 11 deferred** (6 tailor · 3 genesis · 2 WIP). Adopted commits are **local — pushes operator-gated** (SO-9).

## Finding → re-scope recommendation

Template-**alignment** (not category) determines recipe-fit — only ~3/14 "Platforms" were cleanly recipe-ready. Recommend re-scoping P2 from category cohorts to: **(a) adopt** template-aligned versioned vaults roster-wide (the surgical recipe above); **(b) tailor** the divergent set (ComfyUI/Terminal/WebForge/Harness/LatticeProtocol/Exchange + peers) as a distinct pass; **(c) defer** genesis vaults to graduation (SO#6). Carried to [[campaign_w4_governance_doctrine]] as the P2 shape decision.
