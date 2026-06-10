---
type: backlog_idea
created: 2026-06-04
updated: 2026-06-10
status: resolved   # 2026-06-10 — PR #7 merged (carried the flip); PR #8 CLOSED-AS-SUPERSEDED; repo archived → adna-legacy; see Disposition addendum + ADR-034
last_edited_by: agent_stanley
author: rosetta (aDNA.aDNA)
trigger: operator question 2026-06-04 (during the E4 aDNANetwork session) — "if/when will new-user onboarding set up the right /aDNA/ directory structure instead of /lattice/?"
informational: false
upstream_target: LatticeProtocol/aDNA   # the .adna base template (canonical repo name; was Agentic-DNA pre-rename)
tags: [backlog, upstream, onboarding, workspace_default, lattice_to_adna, brand_pivot, v8_candidate]
---

# Upstream Idea — Flip the new-user onboarding default `~/aDNA/` → `~/aDNA/`

## Headline

The `.adna/` base template's onboarding surfaces still tell a **brand-new** user to bootstrap their workspace at `~/aDNA/` (`mkdir -p ~/aDNA && cd ~/aDNA`). Under the ratified brand pivot (**aDNA = the forward-facing network/lab/community brand; Lattice = the underlying protocol**), the right *default* for a fresh install is `~/aDNA/`. This is a **documentation-default flip, not a breaking change** — the workspace root is an operator convention, not a hardcoded path (tooling already resolves a `<workspace_root>` variable; `.adna/CHANGELOG.md`: *"`~/aDNA/` is a strong recommendation, not mandatory — system works in any location"*).

## Observation

A new user following the canonical Getting-Started flow lands in `~/aDNA/`. Nothing in the tooling requires this — `skill_project_fork`, `skill_workspace_upgrade`, etc. all detect the workspace root as "the directory containing `.adna/`." Only the **onboarding copy** names `lattice`. So the only change needed to make new users land in an aDNA-branded structure is a doc-default flip on a handful of `.adna/` onboarding surfaces, plus a back-compat note.

**Important scoping (what does NOT change):** the directory *structure* is already correct and aDNA-branded — the triad (`who/what/how`), the `.adna/` base template itself (a hidden system dir, **not** a vault subject of the `<Role>.aDNA` doctrine — stays `.adna/`), and the `*.aDNA/` project naming. This is purely the **workspace-root default name** in onboarding docs.

## Context

- Surfaced from an operator question during the E4 aDNANetwork session (`mission_adna_str_p5_m511_e4_adnanetwork`, 2026-06-04).
- This is the **new-user-facing complement** to aDNALabs.aDNA / Operation Homecoming's `mission_path_migration_l1` (campaign `campaign_adnalabs_genesis`, migration sequence step 4 / WS-5 capstone). That mission moves the **operator's own** existing `~/aDNA/ → ~/aDNA/` (operator-path, L1-first, gated behind the Home cascade, reversible via a `~/aDNA → ~/aDNA` symlink, ~220 refs swept). It does **not** touch the `.adna/` template's new-user default — and per workspace **Standing Rule 1** (never modify `.adna/` locally) it shouldn't; that flows upstream to `LatticeProtocol/Agentic-DNA`.
- The Rosetta Stone rebrand brief (`aDNALabs.aDNA/what/rebrand/rosetta_deliverable_brief.md` §6) already classifies the workspace-root rename as **operator-path** (distinct from the `<Role>.aDNA` vault-rename doctrine) and locks `~/aDNA/` as the target — so this idea inherits that locked target, it does not re-decide it.

## Disposition (2026-06-10 — audit P2)

**PR staged + FILED: <https://github.com/LatticeProtocol/aDNA/pull/8>** (branch `docs/install-root-flip`; 5 files, 33+/31−; throwaway clone removed after filing). Authoritative staging: `how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m513_upstream_pr_staging/` (PR body + throwaway-clone mechanics); review/merge follow-through owned by **E6 / M5.13 O4**. Site-side install truth shipped the same day (`install_truth.json` + gate-12 + `/get-started`/`/network`/README fixes). Gotcha for the record: `gh pr create` 401'd with the keyring token in this non-TTY context — `GH_TOKEN="$(gh auth token)"` env passthrough fixed it.

> ⚠️ **The diff table below is sweep-mangled — do not PR from it.** The WS-5 Session-C `/lattice→/aDNA` path sweep
> rewrote this file's own left-hand "before" strings (they now read `~/aDNA → ~/aDNA`). The *upstream* files still
> carry `~/lattice` (verified against the live `.adna` checkout 2026-06-10) — the file/line TARGETS below remain
> correct; reconstruct each "before" from the actual upstream content. (Sweep-blind-spot instance: a diff that
> *quotes* the old path as data was swept as if it were a live ref — flagged to aDNALabs in the session SITREP.)

## Disposition addendum (2026-06-10, same day — RESOLVED)

**The flip LANDED, by a different vehicle: PR #7** (`LatticeProtocol/flip-workspace-default-adna`, merged
2026-06-10 morning — the same 5-surface `~/lattice → ~/aDNA` doc-flip + legacy migration tooling).
**PR #8 was CLOSED-AS-SUPERSEDED** (its doc-flip duplicated #7; its residual stale-slug fixes were folded
into this vault's same-day docs pass — `what/docs/projects_folder_pattern.md` + the sitewide canonical-slug
flip, `session_stanley_20260610T205755Z_public_face_repo`). Hours later the operator restructured the
public face entirely: the template repo was archived as **`aDNA-Network/adna-legacy`** (frozen `74cb761`)
and **`aDNA-Network/aDNA`** stood up as the canonical clone-and-run workspace image (tag `v7.1`) — the
new-user flow is now 1 command and lands in `~/aDNA` *by construction*, fully subsuming this idea's goal.
Record of architecture: `what/decisions/adr_034_public_face_repo_release_architecture.md`. E6/M5.13 O4's
"verify/merge PR #8" external is resolved by this closure; the upstream channel for future standard
changes is the gate-fired release skill (`how/skills/skill_template_release.md`), not PRs to the archive.

## Suggested change — ready-to-PR diff (against `.adna/`, i.e. `LatticeProtocol/aDNA`)

Change the **active onboarding instructions** to default to `~/aDNA/`; add a back-compat note; **preserve historical narrative** unchanged (per the `node.aDNA → LatticeHome.aDNA` R07 discipline — see precedent below).

| `.adna/` file | line(s) | change |
|---|---|---|
| `README.md` | 34 | `mkdir -p ~/aDNA && cd ~/aDNA` → `mkdir -p ~/aDNA && cd ~/aDNA` |
| `README.md` | 44 | `~/aDNA/CLAUDE.md` → `~/aDNA/CLAUDE.md` |
| `how/quests/quest_l1_onboarding.md` | 61 | `mkdir -p ~/aDNA && cd ~/aDNA` → `~/aDNA` (line 100 `cd ~/aDNA/latlab` is an example path — flip for consistency) |
| `how/templates/template_workspace_claude.md` | 13, 16 | guide comments `~/aDNA/CLAUDE.md` → `~/aDNA/CLAUDE.md` |
| `what/docs/projects_folder_pattern.md` | 47, 55 | clone/onboarding commands `~/aDNA` → `~/aDNA` |
| `what/docs/aDNA_overview.md` | 293–294 | `mkdir -p ~/aDNA` / `cd ~/aDNA` → `~/aDNA` |

**Add a back-compat note** (README Getting Started + `projects_folder_pattern.md`): *"`~/aDNA/` is the recommended workspace root; any path works (`<workspace_root>` is detected, never hardcoded). Operators on the legacy `~/aDNA/` root migrate via the aDNALabs path-migration mission + a `~/aDNA → ~/aDNA` symlink shim."*

**Preserve unchanged (historical / illustrative — do NOT sweep):**
- `.adna/CHANGELOG.md`, `.adna/how/docs/upgrade_v6_to_v7.md`, `.adna/how/migrations/migrate_v5.2_to_v6.0.md` — historical narrative; they describe past events accurately.
- `.adna/what/docs/tutorial_lattice_publishing.md:117,143` (`cd ~/aDNA/lattice-protocol-repo`) — illustrative example repo paths, not the onboarding default.

## Sequencing

Recommend the upstream PR lands **in the same brand wave as aDNALabs WS-5** (`mission_path_migration_l1`), so the standard's recommended default flips when the operator-path migration fires — a new user and the reference operator then both live at `~/aDNA/`. Tracked via coord memo `coord_2026_06_04_rosetta_to_berthier_onboarding_workspace_default.md` (Rosetta → Berthier): Berthier decides whether to fold this into WS-5 or run it as a standalone upstream PR sequenced to follow WS-5. Candidate for aDNA standard **v8.0+**.

## Precedent / cross-references

- **Direct precedent:** [[idea_upstream_latticehome_rename_pattern]] — the `node.aDNA → LatticeHome.aDNA` rename upstreamed the `.adna/` template (R07: `mission_lattice_comp_r07_adna_template_upstream`) with exactly this discipline (update active routing refs; preserve historical narrative). The "active-vs-historical" sweep rule there applies verbatim here.
- Mechanism: [[../skills/skill_upstream_contribution]] (file `idea_upstream_*` → optional `gh issue` on `LatticeProtocol/Agentic-DNA`; never push to `.adna/` directly).
- Ownership/sequencing facts: `aDNALabs.aDNA/how/campaigns/campaign_adnalabs_genesis/missions/mission_path_migration_l1.md` (WS-5) + `aDNALabs.aDNA/what/rebrand/rosetta_deliverable_brief.md` §6 (path-trigger decision; `~/aDNA/` locked) + `path_surface_inventory.md` (operator-side ~220-ref sweep).
- Coord: `who/coordination/coord_2026_06_04_rosetta_to_berthier_onboarding_workspace_default.md`.
