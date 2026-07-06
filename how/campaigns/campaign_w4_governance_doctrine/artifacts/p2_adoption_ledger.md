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

## Re-scope RATIFIED + push status (operator, 2026-07-05)

- **P2 re-scoped: category cohorts → ALIGNMENT.** Sweep template-aligned versioned vaults roster-wide (the validated surgical recipe); tailor the divergent set as a separate pass; defer genesis (SO#6). Supersedes the Cohort-2/Cohort-3 category plan.
- **Push status (operator "push all"):** aDNA.aDNA `47be7fc` ✅ origin (public) · AWSBootstrap `5413f73` ✅ origin · VAAS `fcb0d0c` ✅ origin (both + a benign inbound-intake commit) · **Canvas `3e95533` ⚠ BLOCKED** — mesh-only remote `wga-mesh` (10.43.0.8) unreachable; stays LOCAL, syncs when the mesh host is up (or when Canvas gains a GitHub remote). Documented exception, not a failure.

## Roster-wide alignment sweep — supersedes Cohort 2/3 (2026-07-05)

Pre-flight (21 remaining Tier-A, excl. the 3 done · memo-set RareArchive/WilhelmAI · diverged ScienceStanley): **6 template-aligned** (all 3 standard sections + a `version`) — the other 15 carry product-versioning + custom structure (tailor) or are genesis/named-project.

**ADOPTED (5 project-vault; surgical CLAUDE.md-only; LOCAL, push operator-gated):**

| Vault | Commit | ver | note |
|-------|--------|-----|------|
| ContextCommons | `ce79d59` | 7.1 | |
| Network | `d457650` | 6.0 | Local-no-push (SO-9, First-Light integrity) |
| Oration | `63e214e` | 1.0 | |
| Spacemacs | `f456624` | 6.0 | `adna_validate` Zero-drift (no pre-existing drift) |
| ZenZachary | `30f01d4` | 7.0 | |

**Home** (node vault, aligned) → **DEFER to a node-vault-specific pass** — it *is* the credential broker, so it takes the broker-home variant + node applicability, not the project subset.

**TAILOR/DEFER (15, not template-aligned — product-versioned + custom structure):** aDNALabs · Astro · CakeHealth · Git · III · LAVentureGraph · Molecules · Operations · PercySleep · SuperLeague · TappProtocol · TypeScript · Videos · VisualDNA · wga.

**NOTICED (out of P2 scope → vault-hygiene follow-up):** 4 adopted vaults (ContextCommons / Network / Oration / ZenZachary) carry **pre-existing template/skills count drift** in their own MANIFEST/README (e.g. "says 22 templates, actual 34") — orthogonal to the doctrine edit (Spacemacs, drift-free, validated Zero-drift). Flag for each vault's own `adna_validate`-hygiene pass; **NOT fixed here**.

## Tailor Pass — Batch 1 (2026-07-05)

First batch of the divergent-vault tailor pass (per-vault-adapted recipe; DP1 Option C, direct-by-default — all 7 internally-owned, direct-eligible). Surgical **CLAUDE.md-only local commits** (SO-9, unpushed). Verify-first gate passed for all 7 (no fresh session lanes; dirty state was `.obsidian`/auto-churn only, kept unstaged by an explicit-path `git add CLAUDE.md` + a `STAGED == CLAUDE.md` guard). `adna_validate --governance` showed **zero NEW drift** on every vault (pre-existing MANIFEST/README count drift + `version`-vs-CHANGELOG two-track notes are orthogonal — NOTICED, not fixed here).

| Vault | Commit | ver | items written | note |
|-------|--------|-----|---------------|------|
| Astro | `923ccd4` | 1.0 | §7.7 · AskUQ · Lease · executor_tier | skip Credential (present); pre-existing count+version drift |
| aDNALabs | `5bc16f9` | 0.1 | §7.7 · AskUQ · Lease | skip Credential + Model-tier (both under `## Agent Protocol`); **Zero-drift**; untracked task-memo left unstaged |
| Molecules | `0c04807` | 1.6 | all 5 | pre-existing count+version drift; modified `HOME.md` left unstaged |
| LAVentureGraph | `bd8dd06` | 1.1 | all 5 | no Standing-Orders section → inserted before terminal `## Git-Ops`; **Zero-drift** |
| wga | `d8955ca` | 1.1 | §7.7 · AskUQ · Lease · executor_tier | skip Credential (present); **Zero-drift**; **mesh remote — local only, never push** |
| III | `2d398f5` | 1.0 | all 5 | pre-existing count+version drift |
| VisualDNA | `e2390c9` | (none) | all 5 | **no YAML frontmatter block** → body-only (blockquote is the adoption record); `governance_doctrine` field deferred to DP3; branch `master` |

**Batch-1 result: 7/7 adopted** (all local, push operator-gated, SO-9). Structural findings folded back into the tailor methodology: (a) the recipe's nominal "before `## Git Coordination`" anchor exists in almost no divergent vault → insert **after the Standing-Orders analog** / before the next `##` (or, absent one, before the terminal `## Git-Ops`); (b) **skip-don't-duplicate** where a `## Credential routing` (and/or model-tier) section already exists — reference it from the blockquote; (c) **no-frontmatter vaults take the body-only variant** (VisualDNA proved it — no synthesized `---` block, field deferred to DP3).

## P2 running total (2026-07-05)

**16 vaults carry the v8.4 doctrine:** aDNA.aDNA (dogfood, pushed) + **8 alignment-sweep consumers** (AWSBootstrap · VAAS [pushed] · Canvas [local, mesh-blocked] · ContextCommons · Network · Oration · Spacemacs · ZenZachary [local]) + **7 tailor-pass Batch-1** (Astro · aDNALabs · Molecules · LAVentureGraph · wga · III · VisualDNA [local]). **Remaining:** the tailor set's Batch-2 / verify-first (~7: Harness · TappProtocol · CakeHealth · Git · PercySleep · Videos · SuperLeague) + the deferred set (~7: ComfyUI · Terminal · LatticeProtocol · Exchange · WebForge · TypeScript · Operations) + Home (node-pass) + the 2 Wilhelm memos + ScienceStanley (diverged). Template-aligned + tailor-Batch-1 are **complete**; what's left needs Batch-2 tailoring, quiescence, memos, or genesis-graduation.
