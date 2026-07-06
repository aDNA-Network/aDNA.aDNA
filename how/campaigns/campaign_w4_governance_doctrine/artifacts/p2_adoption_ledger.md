---
type: reference
artifact_class: adoption_ledger
title: "P2 Adoption Ledger — Operation Concord"
campaign: campaign_w4_governance_doctrine
created: 2026-07-05
updated: 2026-07-06
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

## Tailor Pass — Batch 2 (2026-07-05)

Second tailor batch (verify-first; DP1 Option C direct-by-default; all internally-owned). Same surgical CLAUDE.md-only recipe, **all pushed** this session (operator "push and roll"). All 7 clean-tree at verify-first (Harness/Videos `active/` = stale May; TappProtocol/PercySleep untracked = inbound memos, left; SuperLeague's 06-30 session sits on a clean tree, left). `adna_validate --governance` zero NEW drift on every vault.

| Vault | Commit | ver | items written | note |
|-------|--------|-----|---------------|------|
| Harness | `b220fb7` | (none) | all 5 | **no frontmatter → body-only** (field deferred DP3); `master`; **Zero-drift** |
| TappProtocol | `e834ac0` | (none) | all 5 | **no frontmatter → body-only**; genesis; `master`; **Zero-drift** |
| CakeHealth | `dadfb9a` | 6.0 | all 5 | **+ SO#3 courtesy memo to Ami/Berthier** (`who/coordination/coord_2026_07_05_rosetta_to_ami_berthier_cakehealth_v8_4_adoption.md`); pre-existing template-count drift |
| Git | `0b719ee` | 0.17 | all 5 | `master`; **Zero-drift** (0.17-vs-0.31 note pre-existing) |
| PercySleep | `408545b` | 7.0 | §7.7·AskUQ·Lease·executor_tier | skip Credential (present); `master`; **Zero-drift** |
| Videos | `4f84afb` | 1.0 | §7.7·AskUQ·Lease·executor_tier | skip Credential (present); **Zero-drift** |
| SuperLeague | `da7c5e7` | 1.3 | all 5 | `master`; pre-existing count+version drift |

**Batch-2 result: 7/7 adopted + pushed.**

## Push status (2026-07-05, operator "push and roll")

**Pushed — 19 vaults → origins (all rc=0; gitleaks clean; Codeberg auth confirmed working):**
- Batch-1 (6): Astro · Molecules · LAVentureGraph · wga · III · VisualDNA.
- Alignment-sweep (5): ContextCommons · Oration · Spacemacs · ZenZachary · **Canvas** (mesh-block **RESOLVED** — it gained a GitHub origin, the documented unblock condition; `3e95533` synced).
- Batch-2 (7): Harness · TappProtocol · CakeHealth · Git · PercySleep · Videos · SuperLeague.
- Standard home: aDNA.aDNA (campaign-doc commits).

**HELD — not pushed (operator-flagged; SO-9 / unrelated backlog):**
- **aDNALabs** — its Concord commit `5bc16f9` sits atop **66 unrelated Vitruvian-Man commits** (several marked "local, unpushed"); the vault runs a deliberate SO-9 local-first posture. `git push` would dump all 67 to the public repo → held pending explicit operator go.
- **Network** — Concord commit `d457650` is #1 of **37** (Luke onboarding, roster S243…); deliberately **local-no-push** (SO-9 / First-Light integrity). Held.

(AWSBootstrap + VAAS were pushed in the prior session; Canvas's earlier "mesh-blocked" note is now superseded.)

## Deferred-set force-adopt (2026-07-05, operator "keep going" → force-adopt all 7)

The 7 previously-deferred vaults, **force-adopted** (operator override of defer-on-active-work) with a dirty-file guardrail (skip a vault only if its *target file* is mid-edit — none were). Same surgical recipe; `adna_validate` zero **new** drift on all 7 (5 Zero-drift). **Operations adopted into `AGENTS.md`** (its CLAUDE.md is a pointer). LatticeProtocol's design-noted "+74 backlog" was **stale** — 0-unpushed (Carnot closed + pushed today).

| Vault | Commit | ver | items | push |
|-------|--------|-----|-------|------|
| ComfyUI | `d0d4dfc` | 7.0 | §7.7·AskUQ·Lease·executor_tier (skip Cred) | **LOCAL only** — sole remote is `luke-mesh` (no origin); unpushable |
| Terminal | `97ec07e` | 1.6 | all 5 | ✅ pushed |
| LatticeProtocol | `b95fb94` | none→body | §7.7·AskUQ·Lease·executor_tier (skip Cred) | ✅ pushed; **Zero-drift** |
| Exchange | `5b42ca0` | none→body | all 5 | ✅ pushed; **Zero-drift** |
| WebForge | `d49365b5` | no-ver | §7.7·AskUQ·Lease·executor_tier (skip Cred) | **HELD** — 15-commit own genesis backlog mid-B3.9-deploy; **Zero-drift** |
| TypeScript | `acaa243` | 1.0 | §7.7·AskUQ·Lease·executor_tier (skip Cred → refs `## Routing & credentials`) | ✅ pushed; **Zero-drift** |
| Operations | `39937ae` | AGENTS.md→body | all 5 (§7.7→`what/adrs/`; Lease ties the §5 claim-lease) | **HELD** — 84-commit backlog, mid-C05; **Zero-drift** |

**Deferred-set result: 7/7 adopted.** Pushed 4 (Terminal · LatticeProtocol · Exchange · TypeScript); held 2 (WebForge 15 · Operations 84); ComfyUI local-only (mesh, no origin).

## P2 running total (2026-07-05)

**32 vaults carry the v8.4 doctrine:** aDNA.aDNA (dogfood) + **8 alignment-sweep** (AWSBootstrap · VAAS · Canvas · ContextCommons · Network · Oration · Spacemacs · ZenZachary) + **7 tailor Batch-1** (Astro · aDNALabs · Molecules · LAVentureGraph · wga · III · VisualDNA) + **7 tailor Batch-2** (Harness · TappProtocol · CakeHealth · Git · PercySleep · Videos · SuperLeague) + **7 deferred-set** (ComfyUI · Terminal · LatticeProtocol · Exchange · WebForge · TypeScript · Operations) + **2 DP2 sweep** (Obsidian · Lab). **Push-holds:** aDNALabs (66) · Network (37, SO-9) · WebForge (15, mid-deploy) · Operations (84) — plus ComfyUI local-only (mesh). **Remaining Tier-A (documented exceptions, [[dp2_tier_a_rollout_complete]]):** Home (node-pass, Hestia) + the 2 Wilhelm memos (RareArchive/WilhelmAI) + ScienceStanley (diverged); Tier-B genesis stubs (Context · Warp · RemoteControl) are out-of-scope (SO#6 graduation). **Tier-A rollout RATIFIED COMPLETE 2026-07-06 (DP2); Operation Concord CLOSED** — F1 = checklist-only + the items-not-number versioning ruling ratified ([[adr_047_governance_doctrine_checklist_ruling]]).

## Post-campaign follow-up (2026-07-06) — Home node-pass DONE

> Recorded **after** close. **Operation Concord stays `completed`** — this is the follow-up register (owned, post-campaign), not re-opened campaign work. The running total above is the campaign-close snapshot (32); this section tracks the documented-exception tail draining afterward.

**Home.aDNA — node-pass ADOPTED** (`c27b867`; **local-only** per Standing Order #7 / workspace Rule 4 — Home has no remote, not pushed). The node-vault variant of the checklist (guest-visited as Hestia):

| Item | Treatment |
|------|-----------|
| §7.7 ratification | adopted |
| Credential brokerage | **broker-HOME** framing — *Home IS the broker* (Keychain-primary + 1P-backup); consumers carry the routing snippet, Home holds the secrets (`what/inventory/inventory_credentials.md`) |
| AskUserQuestion | adopted |
| Single-writer lease | adopted — ties the existing `### Collision Prevention Rules`; mandatory for `inventory`/`identity`/`credentials` |
| Model-tiered `executor_tier` | adopted |
| Agentic sudo (item 2) | **referenced** the existing `### Sudo Elevation (canonical primitive)` — node owns it |
| Router-row discipline (item 5) | **dropped** — router-only |

Frontmatter marker `governance_doctrine: v8.4` added; **`version` stays `"0.1"`** (DP3 / ADR-047 — items-not-number). `adna_validate --governance` = **no new drift** (the pre-existing `0.1`-vs-CHANGELOG-`0.4` version note is unchanged, orthogonal). Section anchored between `## Standing Orders` and `## Git Coordination`; surgical CLAUDE.md-only commit (the 4 untracked coord memos left unstaged).

**Documented exceptions: 1/4 cleared.** Remaining: the **2 Wilhelm memos** (RareArchive/WilhelmAI, SO#3 co-sign) + **ScienceStanley** (v7.0 diverged). Tier-B genesis stubs (Context · Warp · RemoteControl) stay out-of-scope (SO#6 graduation). **Fleet total incl. the node altitude: 33** (32 Concord + Home node-pass).
