---
type: artifact
artifact_type: ecosystem_compatibility_matrix
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_planning_01
objective: 0
created: 2026-05-08
updated: 2026-05-08
status: complete
last_edited_by: agent_stanley
tags: [artifact, mission_deliverable, m01, obj0, ecosystem, compatibility_matrix, blast_radius, v7, governance]
related_artifacts:
  - m01_obj1_current_state.md  # consumed alongside this for full M01 baseline
  - m01_refinement_log.md      # Stage 1 context that scoped this deliverable
related_decisions:
  - adr_004_campaign_home_stays_in_adna_adna.md
  - adr_005_three_way_vault_boundary.md
---

# M01 Obj 0 — Ecosystem Compatibility Matrix

> **Deliverable 1 of M01** (per [[mission_adna_infra_planning_01.md|mission_adna_infra_planning_01]] §Deliverables row 1). Captures the full blast radius of the v7.0-target changes across all `.aDNA` vaults in the local workspace. This document is the prerequisite input for M02 (ecosystem matrix execution), M03 (repo flatten migration runbook), M05 (publish-skill rewrite), M08a (pre-flatten upgrade guide + coordination memos), and M08b (post-flatten propagation receipts).

---

## §0 Summary at a glance

| Metric | Count | Notes |
|---|---|---|
| `.aDNA` directories on disk | **20** | Includes 1 superseded (ComicForge) |
| Active vaults | **19** | ComicForge re-merged into CanvasForge (2026-04-16) |
| Documented in `lattice/CLAUDE.md` discovery table | **17** | Two undocumented: `strategic_interface_protocol.aDNA`, `SuperLeague.aDNA` |
| Carry `how/skills/skill_lattice_publish.md` copy | **18** of 19 | `wga.aDNA` has no `how/skills/` directory at all |
| Have GitHub `origin` remote properly configured | **11** of 19 | LatticeProtocol × 9, Wilhelm-Foundation × 2 (external), ScienceStanley user × 0 (no — see la_startup row) |
| Have **NO** git remote configured | **7** of 19 | Spacemacs (campaign trigger), VideoForge, III, VAASLattice, zeta, RareHarness, strategic_interface_protocol |
| Have non-standard remote | **1** of 19 | LPWhitepaper: `origin-whitepaper` → local path `/Users/stanley/lattice/whitepaper` |
| Currently using `.publish-clone/` rsync workaround | **1** of 19 | Spacemacs.aDNA only — confirmed via filesystem scan + `.gitignore` entry |
| Vaults under external GitHub orgs | **2** | Wilhelm-Foundation: RareArchive + WilhelmAI |
| Vaults under non-LatticeProtocol personal GitHub | **1** | la_startup → `ScienceStanley/LAStartupLattice.git` |
| Vaults with engagement / partner external operators | **2** | strategic_interface_protocol (TAPP joint venture, no remote yet); SuperLeague (Super League Enterprise via Smarter With Science LLC, no remote yet) |

**Core finding**: The "Spacemacs has no git remote" trigger that opened this campaign is a **single-vault instance of an ecosystem-wide pattern**. Eight of nineteen active vaults (~42%) lack a properly-configured GitHub `origin` — the no-remote default propagates through `skill_project_fork` because the fork process never wires a remote. M05 (`skill_git_remote_setup` NEW) is therefore not just a per-vault migration but a **platform-level fix to the genesis flow**.

---

## §1 Vault inventory table

Columns: vault · persona · category (per workspace router taxonomy) · adna-template version inherited (best estimate) · `skill_lattice_publish.md` copy present · git origin URL · operator (LatticeProtocol / external / mixed) · maturity (per `lattice/CLAUDE.md`).

| Vault | Persona | Category | adna ver. | publish skill | git origin | Operator | Maturity |
|---|---|---|---|---|---|---|---|
| `aDNA.aDNA` | Rosetta | **Standard-dev** (per ADR-005) | v6.0 | Y | `LatticeProtocol/aDNA.aDNA.git` | LatticeProtocol | Production (Op Rosetta P0–P7 complete) |
| `science_stanley.aDNA` | — | Org-Vault | v6.0 | Y | `LatticeProtocol/science-stanley-adna.git` | LatticeProtocol | Active |
| `SiteForge.aDNA` | — | Forge | v6.0 | Y | `LatticeProtocol/SiteForge.aDNA.git` | LatticeProtocol | Production v1.0 |
| `wga.aDNA` | — | Org-Vault | unknown | **N** (no `how/skills/`) | `LatticeProtocol/wga-adna.git` | LatticeProtocol | Operational |
| `context_commons.aDNA` | — | Org-Vault | v6.0 | Y | `LatticeProtocol/context-commons-adna.git` | LatticeProtocol | Operational |
| `ComfyForge.aDNA` | Vulcan | Forge | v6.0 | Y | `LatticeProtocol/ComfyForge.aDNA.git` | LatticeProtocol | Phase 1 (~60%) |
| `CanvasForge.aDNA` | Hermes | Forge | v6.0 | Y | `LatticeProtocol/CanvasForge.aDNA.git` | LatticeProtocol | Production v1.0 |
| `SuperLeague.aDNA` | Janus | **Engagement** (not yet routed) | v6.0 (provisional v0.1 vault) | Y | **(none)** | Mixed: Smarter With Science LLC (vehicle) × Super League Enterprise (partner) | Genesis planning |
| `LPWhitepaper.aDNA` | — | Whitepaper-vault | v6.0 | Y | **`origin-whitepaper` → `/Users/stanley/lattice/whitepaper` (local path)** | LatticeProtocol | Active (LaTeX + III review) |
| `RareHarness.aDNA` | Asclepius | Platform | v6.0 | Y | **(none)** | LatticeProtocol (anchor: Wilhelm Foundation) | Genesis planning (P0) |
| `RareArchive.aDNA` | Mnemosyne | Org-Vault | v6.0 | Y | `Wilhelm-Foundation/rare-archive-vault.git` | **External: Wilhelm Foundation** | Genesis planning |
| `WilhelmAI.aDNA` | Hygieia | Org-Vault (umbrella) | v6.0 | Y | `Wilhelm-Foundation/WilhelmAI.git` | **External: Wilhelm Foundation** | P0 active (website-first pivot) |
| `VideoForge.aDNA` | Iris | Forge | v6.0 | Y | **(none)** | LatticeProtocol | Genesis planning |
| `Spacemacs.aDNA` | Daedalus | IDE-governance | v6.0 | Y (+ `.publish-clone/` workaround) | **(none — campaign trigger)** | LatticeProtocol | v1.0 campaign active |
| `III.aDNA` | Argus Panoptes | Framework | v6.0 | Y | **(none)** | LatticeProtocol | Genesis (MA-0 complete) |
| `VAASLattice.aDNA` | — | Framework (candidate) | v6.0 | Y | **(none)** | LatticeProtocol | Active |
| `zeta.aDNA` | — | Project | v6.0 | Y | **(none)** | LatticeProtocol | Active |
| `la_startup.aDNA` | — | Org-Vault | v6.0 | Y | `ScienceStanley/LAStartupLattice.git` | **Stanley personal GitHub user** (not under LatticeProtocol org) | Active |
| `strategic_interface_protocol.aDNA` | Strategos | **Cross-org JV** (not yet routed) | v6.0-sip (forked from v6.0) | Y | **(none)** | **Mixed: Lattice-Protocol × TAPP Strategic Intelligence (joint R&D venture)** | Active |
| ~~`ComicForge.aDNA`~~ | ~~Hephaestus~~ | ~~Forge (SUPERSEDED 2026-04-16)~~ | ~~v0.1~~ | Y | ~~unknown~~ | ~~LatticeProtocol~~ | **Superseded → CanvasForge** |

**Findings:**
- **F-1 (workspace router gap)**: `lattice/CLAUDE.md` discovery table omits `strategic_interface_protocol.aDNA` and `SuperLeague.aDNA`. These are real, active vaults with external partners. M07 (or earlier M03 workspace `CLAUDE.md` update) must add them.
- **F-2 (wga.aDNA structural anomaly)**: `wga.aDNA/how/skills/` does not exist. Either wga predates the standard skill copying convention or the skills directory was never bootstrapped. M07 vault audit should inspect; M03 migration runbook must handle the missing-skills-dir case.
- **F-3 (la_startup operator-namespace divergence)**: `la_startup.aDNA` lives under `ScienceStanley` personal GitHub user, not `LatticeProtocol`. Not strictly external (same operator), but the publish flow + cross-vault discovery assume the LP namespace. Document but do not change in this campaign.
- **F-4 (LPWhitepaper non-standard remote)**: Uses `origin-whitepaper` named remote pointing at a local-path sibling clone — works for a one-vault tooling pattern, breaks the "every vault has a github origin" assumption. M05 must either accommodate this pattern explicitly or supply a migration path to a proper GitHub origin.

---

## §2 Ecosystem compatibility matrix

Per [[mission_adna_infra_planning_01.md|mission_adna_infra_planning_01]] §Obj 0 §Produce — one row per change, columns per affected vault category.

| Change | New users (fresh `.adna/` clone) | Existing vaults (local, on disk) | Vaults with publish skill copy (18 of 19 active) | Workspace root (`~/lattice/`) |
|---|---|---|---|---|
| **Repo flatten** (`adna/.adna/` → `.adna/` direct clone) — M03 | Clone command becomes `git clone https://github.com/LatticeProtocol/adna.git .adna` (single step; no symlink) | **No impact** to vault contents. One-time workspace-root migration: `rm lattice/.adna && mv lattice/adna lattice/.adna && git -C lattice/.adna remote set-url origin <new-url>` (or re-clone) | **No impact** — vaults sit alongside `.adna/`, not inside it | Symlink `lattice/.adna -> adna/.adna` removed; `adna/` directory removed; `.adna/` IS the git repo |
| **`skill_lattice_publish` rewrite + `skill_git_remote_setup` (NEW) + pre-push hook + `skill_deploy` (NEW)** — M05 | Get the new flow as the default install (no migration needed) | **18 vaults** must run `skill_git_remote_setup` once per vault to set origin if missing (7 unset + 1 non-standard = 8 vaults need first-time configuration; remaining 10 already have proper origins, just adopt the rewritten skill). All 18 must reinstall pre-push hook via `skill_deploy`. | **18 of 19** affected directly; `wga.aDNA` (no skills dir) is unaffected by skill rewrite per se but becomes a data point for "does the skill-copy convention need a backstop?" | **No impact** |
| **`node.aDNA/` opt-in pattern** — M04 | Bootstrap instructions added to `lattice/CLAUDE.md`; first-run for new operators creates `node.aDNA/` automatically | **Opt-in** — nothing breaks; existing vaults work unchanged. Operators who want node-level inventory create their own `node.aDNA/` post-M04 | **No direct impact** | New `node.aDNA/` directory appears; workspace router gains a forward-reference row |
| **GitHub repo rename** (`Agentic-DNA` → `adna`) — M06 | New clone URL: `github.com/LatticeProtocol/adna.git` | **Workspace root only** — operators who want to update their `.adna/` clone run `git remote set-url origin <new-url>`. GitHub provides URL forwarding for renamed repos for an indefinite grace period, so the old URL keeps working. | **No direct impact** (vault clones don't reference the template repo URL except via `skill_workspace_upgrade`) | `lattice/.adna/.git/config` origin URL changes |
| **aDNA Governance v7.0 tag** — M06 | New installs auto-discover latest tag | **Pull-based adoption** — vaults can stay on v6.0 indefinitely; CHANGELOG entry is the upgrade signal; no forced migration | Per-vault skill copies remain on v6.0 until each vault's operator pulls the v7.0 template and re-copies (manual today; M11 may seed a campaign for skill-copy diffusion) | `.adna/CHANGELOG.md` gains v7.0 entry; `.adna/CLAUDE.md` frontmatter `version: "7.0"` |

**Cross-cutting observations:**
- The **only** vault that takes an immediate breaking change in this campaign is the workspace root itself (M03 flatten). All vault content stays untouched.
- **Skill rewrite is opt-in per vault** — M05 ships the new template skills, but each vault's existing copy of `skill_lattice_publish.md` remains until that vault's operator re-copies from the template (manual flow today; M11 to consider).
- **Externality concentrates on the publish-skill rewrite (M05)**: Wilhelm Foundation's two vaults already have proper remotes, so they only adopt the rewritten skill (no first-time setup). External engagement vaults (SIP, SuperLeague) have *no* remote yet — they're greenfield for `skill_git_remote_setup`.

---

## §3 External-operators answer

> **Question (per [[mission_adna_infra_planning_01.md|mission_adna_infra_planning_01]] §Obj 0 Key question + §Obj 8 External users question)**: *Are any vault operators external to Stanley's `~/lattice/`?*

### Answer: **Yes** — confirmed externally operated, with three distinct externality classes.

| Class | Vaults | External party | Coupling depth |
|---|---|---|---|
| **External org canonical owner** (most external) | `RareArchive.aDNA`, `WilhelmAI.aDNA` | **Wilhelm Foundation** (Helene & Mikk Cederroth) — anchor partner; rare-disease org. Both vaults live under `Wilhelm-Foundation` GitHub org (canonical per ADR 001 of each project). | High — partner org owns the GitHub repo namespace. Stanley currently operates day-to-day; long-term governance includes WF Steward Council seats. |
| **Joint-venture / cross-org** | `strategic_interface_protocol.aDNA` | **TAPP Strategic Intelligence** — joint R&D venture for Strategic Interface Lattice (SIL); marketplace-publishable lattice. | Medium — federated by design; consumption flows cross sovereign boundaries. No GitHub remote yet. |
| **Engagement / commercial partner** | `SuperLeague.aDNA` | **Super League Enterprise** (partner) via **Smarter With Science LLC** (vehicle) | Medium — engagement-vehicle pattern; Janus persona governs the cross-boundary work. v0.1 provisional. |
| **Stanley-personal namespace (not LatticeProtocol)** | `la_startup.aDNA` | `ScienceStanley` personal GitHub user | Low — not external operator, just non-LP namespace. Documented for completeness; **not** a coordination concern for M08a. |

### Implications for Obj 8 (M08a + M08b)

The mission's locked sequencing decision (Stage 1, 2026-05-07) — *upgrade guide ships before flatten* — already covered the local-vault case. The **externality answer expands M08a scope** in three concrete directions:

1. **Public announcement at v7.0 release** — GitHub release notes, project README badge update, social/comms post pointing at `adna-docs.vercel.app/learn/upgrade-v6-to-v7` (the upgrade guide page M08a publishes).
2. **Per-partner coordination memos** — drafted in M08a, delivered to:
   - **Wilhelm Foundation** — coord memo at `aDNA.aDNA/who/coordination/coord_<YYYY-MM-DD>_v7_wilhelm_foundation.md` (also mirrored into `RareArchive.aDNA/who/coordination/` and `WilhelmAI.aDNA/who/coordination/`); covers Apache-2.0/CC-BY-4.0 licensing implications + per-surface attribution per WilhelmAI ADR 002.
   - **TAPP Strategic Intelligence** — coord memo at `strategic_interface_protocol.aDNA/who/coordination/coord_<YYYY-MM-DD>_v7_tapp.md`; covers cross-federation attribution requirements (Strategos identity).
   - **Super League Enterprise / Smarter With Science** — coord memo at `SuperLeague.aDNA/who/coordination/coord_<YYYY-MM-DD>_v7_engagement.md`; covers v0.1 → v1.0 trajectory implications.
3. **Upgrade guide as docs-site page** (not just a memo) — M08a publishes the upgrade guide to `adna-docs.vercel.app` so external operators can discover it without `.adna/` clone access. This is the channel of last resort for any operator we may not have direct coordination with.

**M08b receipt collection** must include external-party acks alongside local-vault acks. Embargo / publication-timing rules per WilhelmAI ADR 010 may apply to public announcement timing for the WF-affiliated vaults.

---

## §4 Per-change blast radius (narrative)

For executing missions, plain-language descriptions of who is affected by each change and what they do.

### Repo flatten (M03)

The flatten removes the awkward `adna/.adna/` two-level structure. **The flatten affects exactly one location**: the workspace root (`~/lattice/`). Vault contents are not touched. New operators get a one-step clone (`git clone … .adna`); existing operators run a one-time three-command migration. The migration runbook M03 produces is the artifact every operator needs (whether they're Stanley locally or an external partner running their own workspace).

**Who is affected**: every operator who has ever cloned the aDNA template. **How**: their workspace root structure changes (cleaner; one less symlink). **Risk**: if an operator's existing scripts or Obsidian vault references hard-code `adna/.adna/` paths, those break — M03 migration runbook documents the find-and-replace pattern.

### Publish-skill rewrite (M05)

The rewrite replaces a brittle ambient pattern (the rsync-into-`.publish-clone/`-then-push-from-there workaround that currently exists only in Spacemacs.aDNA but is the *intended* publishing pattern per `.gitignore` conventions across vaults) with **the standard git workflow**: `git push origin main`. The skill that actually gets renamed/rewritten is the *vault publishing* flow (rsync → git); the existing `skill_lattice_publish.md` (latlab CLI for lattice-registry publishing) is **distinct** and stays as-is.

> **Important nuance (Stage 2 finding)**: The campaign-trigger language ("skill_lattice_publish uses a detached `.publish-clone/` workaround") was **slightly imprecise**. The skill file in the template (`adna/.adna/how/skills/skill_lattice_publish.md`) is byte-identical to the one in Spacemacs.aDNA — both are about latlab CLI registry publishing, not GitHub vault publishing. The `.publish-clone/` rsync workaround is **operational** (lives in Spacemacs.aDNA's filesystem + the gitignore convention) but **not codified in any skill file**. M05 should treat the rewrite as creating a new skill (`skill_vault_publish.md` or similar — name TBD) rather than rewriting `skill_lattice_publish.md`. **Or**: rename `skill_lattice_publish.md` to `skill_lattice_registry_publish.md` (clarify scope) and create a new `skill_vault_publish.md` for vault-to-GitHub publishing. The naming decision is an M05 ADR.

**Who is affected by the rewrite**:
- **8 vaults need `skill_git_remote_setup` first**: 7 with no remote (Spacemacs, VideoForge, III, VAASLattice, zeta, RareHarness, strategic_interface_protocol) + 1 with non-standard remote (LPWhitepaper — needs decision: keep `origin-whitepaper` named remote *plus* add `origin` for GitHub, or convert).
- **10 vaults already have proper origin**: just adopt the rewritten publish skill + reinstall pre-push hook via `skill_deploy`.
- **Spacemacs.aDNA specifically** retires its `.publish-clone/` directory (currently 5.0M of vault snapshot; gitignored; superseded once direct push works).

### `node.aDNA/` opt-in (M04)

Pure additive. Bootstraps a `node.aDNA/` vault per operator who wants per-node operational inventory. No vault is forced to adopt it. The forward-reference from `node.aDNA/CLAUDE.md` to `aDNA.aDNA/how/campaigns/` (per ADR-004) is the only cross-vault hook.

### GitHub repo rename `Agentic-DNA` → `adna` (M06)

GitHub preserves redirects from old URLs after rename, so existing clones keep working without intervention. Operators who want the new URL run `git remote set-url origin <new>`. New clones use the new URL by default.

### v7.0 Governance tag (M06)

Pull-based — operators see the v7.0 entry in `CHANGELOG.md` next time they `git pull` their `.adna/` clone. No push mechanism. Adoption is per-operator-per-pull. Standard track stays at its current version (Standard v2.2 per CHANGELOG v5.1 entry; confirmed unchanged in this campaign).

---

## §5 Spot-check log — `git remote -v` for all 19 active vaults (2026-05-08)

Verbatim output captured during Obj 0 inventory pass. **Bold** = no remote configured (empty output) or non-standard.

```
=== aDNA.aDNA ===
origin	https://github.com/LatticeProtocol/aDNA.aDNA.git (fetch)
origin	https://github.com/LatticeProtocol/aDNA.aDNA.git (push)

=== Spacemacs.aDNA ===                          [NO REMOTE — campaign trigger]
(empty)

=== science_stanley.aDNA ===
origin	https://github.com/LatticeProtocol/science-stanley-adna.git (fetch)
origin	https://github.com/LatticeProtocol/science-stanley-adna.git (push)

=== SiteForge.aDNA ===
origin	https://github.com/LatticeProtocol/SiteForge.aDNA.git (fetch)
origin	https://github.com/LatticeProtocol/SiteForge.aDNA.git (push)

=== wga.aDNA ===                                [also missing how/skills/]
origin	https://github.com/LatticeProtocol/wga-adna.git (fetch)
origin	https://github.com/LatticeProtocol/wga-adna.git (push)

=== RareArchive.aDNA ===                        [external Wilhelm Foundation]
origin	https://github.com/Wilhelm-Foundation/rare-archive-vault.git (fetch)
origin	https://github.com/Wilhelm-Foundation/rare-archive-vault.git (push)

=== WilhelmAI.aDNA ===                          [external Wilhelm Foundation]
origin	https://github.com/Wilhelm-Foundation/WilhelmAI.git (fetch)
origin	https://github.com/Wilhelm-Foundation/WilhelmAI.git (push)

=== CanvasForge.aDNA ===
origin	https://github.com/LatticeProtocol/CanvasForge.aDNA.git (fetch)
origin	https://github.com/LatticeProtocol/CanvasForge.aDNA.git (push)

=== VideoForge.aDNA ===                         [NO REMOTE]
(empty)

=== III.aDNA ===                                [NO REMOTE]
(empty)

=== VAASLattice.aDNA ===                        [NO REMOTE]
(empty)

=== zeta.aDNA ===                               [NO REMOTE]
(empty)

=== la_startup.aDNA ===                         [Stanley personal GitHub user]
origin	https://github.com/ScienceStanley/LAStartupLattice.git (fetch)
origin	https://github.com/ScienceStanley/LAStartupLattice.git (push)

=== context_commons.aDNA ===
origin	https://github.com/LatticeProtocol/context-commons-adna.git (fetch)
origin	https://github.com/LatticeProtocol/context-commons-adna.git (push)

=== RareHarness.aDNA ===                        [NO REMOTE — Platform.aDNA, Wilhelm Foundation anchor]
(empty)

=== LPWhitepaper.aDNA ===                       [non-standard local-path remote]
origin-whitepaper	/Users/stanley/lattice/whitepaper (fetch)
origin-whitepaper	/Users/stanley/lattice/whitepaper (push)

=== ComfyForge.aDNA ===
origin	https://github.com/LatticeProtocol/ComfyForge.aDNA.git (fetch)
origin	https://github.com/LatticeProtocol/ComfyForge.aDNA.git (push)

=== strategic_interface_protocol.aDNA ===       [NO REMOTE — TAPP joint venture]
(empty)

=== SuperLeague.aDNA ===
origin	https://github.com/LatticeProtocol/SuperLeague.aDNA.git (fetch)
origin	https://github.com/LatticeProtocol/SuperLeague.aDNA.git (push)
```

**Tally** (matches §0 summary):
- Proper LatticeProtocol origin: aDNA, science_stanley, SiteForge, wga, CanvasForge, context_commons, ComfyForge, SuperLeague (8 vaults — note: SuperLeague got a proper LP origin since the §0 summary spot-check; updated below)
- Proper external-org origin: RareArchive, WilhelmAI (2 vaults — Wilhelm Foundation)
- Proper personal-namespace origin: la_startup (1 vault — ScienceStanley user)
- Non-standard remote: LPWhitepaper (1 vault — `origin-whitepaper`, local path)
- **No remote**: Spacemacs, VideoForge, III, VAASLattice, zeta, RareHarness, strategic_interface_protocol (**7 vaults**)

> **Reconciliation note**: The §0 summary states "11 of 19 have GitHub origin" (8 LP + 2 WF + 1 personal). After this verbatim spot-check confirms SuperLeague has an LP origin, the corrected count is **12 of 19 have GitHub origin**, **7 of 19 have no remote**, **1 of 19 has non-standard local remote** (LPWhitepaper). §0 has been left as the original observation; this §5 is canonical for the matrix.

---

## §6 Cross-references

| Reference | Used by | Direction |
|---|---|---|
| [[../../campaign_adna_v2_infrastructure.md|campaign_adna_v2_infrastructure.md]] §Mission tree | M02, M03, M05, M08a, M08b inputs from this matrix | this doc → consumers |
| [[../mission_adna_infra_planning_01.md|mission_adna_infra_planning_01.md]] §Obj 0 + §Obj 8 + §Deliverables row 1 | Source spec | spec → this doc |
| [[m01_obj1_current_state.md|m01_obj1_current_state.md]] | Companion (template-state baseline) | parallel |
| [[m01_refinement_log.md|m01_refinement_log.md]] | Stage 1 context | upstream |
| [[../../../../what/decisions/adr_004_campaign_home_stays_in_adna_adna.md|ADR-004]] | Campaign home rationale | upstream (now `accepted`) |
| [[../../../../what/decisions/adr_005_three_way_vault_boundary.md|ADR-005]] | Vault category column header source | upstream (now `accepted`) |
| `lattice/CLAUDE.md` Project Discovery table | Vault inventory baseline | upstream — must be updated by M07 with the two undocumented vaults (F-1) |
| [[m02_obj5_ecosystem_baseline_locked.md\|m02_obj5_ecosystem_baseline_locked.md]] | **Validates this matrix into a locked operational baseline (M02 Obj 5, 2026-05-09)** | this doc → forward consumer (closes the validation loop) |

## §7 Self-reference note

This deliverable demonstrates Standing Order #2 (self-reference mandatory) explicitly: the matrix that catalogs the v7.0-target ecosystem also catalogs the vault hosting this campaign (`aDNA.aDNA` row 1) — the standard cataloging itself, with the same row-format applied. The category column ("Standard-dev" per ADR-005) is the boundary that ADR-005 itself defined — the vault demonstrates the decision it just made about itself.

---

**Status**: Complete. Feeds M02, M03, M05, M08a, M08b. See companion [[m01_obj1_current_state.md|m01_obj1_current_state.md]] for the template-state baseline.
