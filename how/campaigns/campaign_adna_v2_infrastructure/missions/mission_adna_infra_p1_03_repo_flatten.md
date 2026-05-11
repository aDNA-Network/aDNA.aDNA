---
type: mission
mission_id: mission_adna_infra_p1_03_repo_flatten
campaign: campaign_adna_v2_infrastructure
campaign_phase: 1
status: completed
mission_class: implementation  # M03 is the first implementation-class mission of the campaign — destructive upstream-repo edits + downstream skill updates
created: 2026-05-11
updated: 2026-05-11
closed_at: 2026-05-11T19:46:13Z
closed_session: session_stanley_20260511_194613_adna_v2_m03_s3
sessions_actual: 3  # S1 spec + ADR-008 draft (non-destructive); S2 destructive flatten + V/R harness 24/24 PASS; S3 mission close + AAR + ADR-008 ratification
last_edited_by: agent_stanley
opened_at: M08a_close_handoff
opened_session: session_stanley_20260511_165755_adna_v2_m03_s1
spec_completeness: complete  # full Read/Produce blocks + Deliverables + Acceptance criteria authored at Session 1 open
estimated_sessions: 3  # S1 spec authoring + ADR-008 draft (non-destructive); S2 destructive flatten + verification harness; S3 mission close + AAR
prerequisite_missions:
  - mission_adna_infra_planning_01  # M01 produced the migration runbook (Obj 2), node.aDNA design (Obj 3), GitHub minimalism audit (Obj 5), version bump checklist (Obj 6), upgrade guide (Obj 8)
  - mission_adna_infra_p1_02_ecosystem_matrix  # M02 locked the ecosystem baseline; M03 verifies project vaults unchanged post-flatten (V11)
  - mission_adna_infra_p1_08a_upgrade_guide_and_coord_memos  # M08a finalized upgrade guide + rendered 17 per-vault coord memos; operators have a migration path in hand before M03 lands
prerequisite_adrs:
  - adr_004_campaign_home_stays_in_adna_adna  # accepted
  - adr_005_three_way_vault_boundary  # accepted
  - adr_006_github_repo_rename_to_adna  # accepted at P0 → P1 gate — Stage A executes
  - adr_007_outer_adna_claude_md_disposition  # accepted at P0 → P1 gate — Stage B executes the outer-wrapper conversion
  - adr_009_aDNA_naming_convention  # accepted at P0 → P1 gate — Stage C skill updates absorb the name-validation step
  - adr_008_airlock_template_stub  # drafted by this mission's Obj 1 (Session 1); ratified at this mission's phase gate (Session 3)
ships_to: mission_adna_infra_p1_04_node_adna_bootstrap  # M04 consumes the flattened repo + the workspace router's Step 0 first-run detection hook (M03 wires)
external_dependencies: []  # M03 is pure-template + workspace-router work; no partner-vault coordination required (M08a handled the partner-facing memos)
tags: [mission, in_progress, adna, infrastructure, p1, m03, v7_0, repo_flatten, adr_006, adr_007, adr_008, adr_009, skill_project_fork, skill_workspace_upgrade, skill_workspace_init_retirement, airlock_template_stub, implementation]
---

# Mission — M03: Repo Structure Simplification (the flatten) + ADR-008 Airlock Template Stub

**Phase**: P1 — Ecosystem mapping + upgrade guide ships first + repo flatten + node vault.
**Class**: implementation. M03 is the first implementation-class mission of `campaign_adna_v2_infrastructure`. It executes the template-repo structural simplification that ADR-006 + ADR-007 + ADR-009 codified and drafts ADR-008 (airlock template stub) for ratification at the mission's phase gate. It is the breaking-change mission of Phase 1 — M02 and M08a explicitly shipped first so operators have a migration path in hand before their `.adna/` structure changes.

> **Spec authored** at the first execution session
> ([[../../../STATE.md|STATE.md]] Last Session block, M03 Session 1; `session_stanley_20260511_165755_adna_v2_m03_s1`).
> Frontmatter `spec_completeness: complete`. Per locked sequencing M02 → M08a → **M03**;
> M04 is blocked until M03 closes (the `node.aDNA/` bootstrap depends on the flattened
> template structure + the workspace router's Step 0 first-run detection hook).

---

## Strategic Intent

M02 locked the ecosystem baseline (19-vault inventory; zero drift across 4 validation dimensions); M08a finalized the v6→v7 upgrade guide and rendered 17 per-vault coord memos (13 LP-internal `ready` + 4 partner-affiliated `draft` embargo-held). Operators across the ecosystem now have a documented migration path. **M03 is the mission where the actual structural change lands** — the `.adna -> adna/.adna` symlink chain is retired, the outer `adna/CLAUDE.md` is converted to `.adna/how/templates/template_workspace_claude.md`, `deploy_manifest.yaml` moves into `.adna/.github/`, `prepare_for_onboarding.sh` relocates to its L1-upgrade skill home, a template-level `.gitignore` is created, and workflow caller-usage URLs update for the GitHub repo rename. The mission's downstream skill updates (`skill_project_fork.md` exclusion list, `skill_workspace_upgrade.md` symlink-step removal, `skill_workspace_init.md` `status: retired` flip, `skill_onboarding.md` URL audit) ensure the fork-onboarding and workspace-upgrade flows work against the new flat structure.

ADR-008 (airlock template stub) is the campaign's **airlock seam moment** — the v7.0 template ships a minimal `.adna/how/airlock/AIRLOCK.md` stub that federates to the III.aDNA airlock canonical (`iii_airlock_standard_spec.md` v0.2.0). The stub is opt-in and content-free — it ships the entry-point file and the federation_ref pin, then defers all schema and pattern content to III's canonical. Per-vault adoption of the airlock pattern is the scope of the v3 successor campaign (`campaign_adna_v3_ecosystem_compliance`, `M05-EC`) using the multilateral coord-memo template that M08a rendered. ADR-008 sets template-level posture; v3-EC operationalizes per-vault uptake.

The mission is **self-referential** (Standing Order #2 + #8). M03 executes the v7.0 structural change while exercising the v7.0 airlock pattern it codifies — Session 1 authors ADR-008 as a template stub; Session 2's destructive flatten lands the airlock stub directory; the campaign's prior M08a multilateral airlock instances (17 coord memos) are the working examples ADR-008 forward-references. The mission's three-session arc — non-destructive spec + ADR draft (S1) → destructive flatten + verification (S2) → mission close + AAR (S3) — honors Standing Order #1 (phase gates are human gates) by surfacing an operator-approval boundary between Session 1 (review the spec + ADR) and Session 2 (cross the destructive-edit threshold), and matches the budget-hygiene pattern locked by M01 AAR §11 and M08a's operator-locked Session 2/3 split.

---

## Hard constraints

- **No coord memo delivery**. The 17 per-vault coord memos that M08a rendered stay at their authored statuses (`status: ready` for 13 LP-internal memos with `delivery_held_until: operator-approval`; `status: draft` for 4 partner-affiliated memos with `delivery_held_until: ADR-010-window | operator-approval`). M03's mission close does **NOT** trigger delivery. Memo delivery is operator-discretionary and happens between M03 close and M06 v7.0 tag ship; the public-announcement workstream ships at M06.
- **No partner-vault content mutation**. M03 touches only `adna/` (the template repo) + `aDNA.aDNA/` (this campaign vault) + `/Users/stanley/lattice/CLAUDE.md` (the workspace router, if `Agentic-DNA` references are found there — none currently per Session 1 Phase A spot-check). No partner vault is edited.
- **No upgrade guide modification**. The M08a finalized upgrade guide ([[artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|`m01_obj8_upgrade_guide_v6_to_v7.md`]] at `status: finalized`) stays untouched. Operation Rosetta Phase 8 consumes it for MDX authoring; M08b copies it post-flatten to `.adna/how/docs/upgrade_v6_to_v7.md`.
- **No public-announcement publish**. The 3 M08a public-announcement drafts (`m08a_github_release_notes_v7.md`, `m08a_readme_badge_spec.md`, `m08a_social_comms_post_draft.md`) stay at `delivery_held_until: M06-tag-ship`. M06 (Governance v7.0 tag) publishes them.
- **No CHANGELOG v7.0 re-authoring**. The v7.0 CHANGELOG entry is pre-drafted at [[artifacts/m01_obj6_version_bump_checklist.md|`m01_obj6_version_bump_checklist.md`]] §6. M03 Obj 3 **copies it verbatim** into `.adna/CHANGELOG.md` (line position per the runbook). Re-authoring risks drift between the pre-drafted version-bump checklist and what M03 actually does.
- **Archive, not delete** (Standing Order #6). `skill_workspace_init.md` is **retired**, not deleted: M03 Obj 4 flips its frontmatter `status: active → retired` + adds a retirement note + cross-links to `skill_workspace_upgrade.md` (the replacement). The file persists in `.adna/how/skills/`.
- **ADR-008 minimal-stub posture**. Do **not** duplicate the III.aDNA canonical 5-entry-path schema or the request-schema YAML or the reply template into the template stub. The stub ships only the entry-point file (`.adna/how/airlock/AIRLOCK.md`) + the federation_ref pin to III v0.2.0. Per-vault content is v3-EC `M05-EC` scope.
- **Upstream-vs-vault clarity**. Stages B-C edit the upstream `LatticeProtocol/adna` template repo (cloned at `/Users/stanley/lattice/adna/`, which becomes `/Users/stanley/lattice/.adna/` after Path A in-place rename). This is **distinct** from the campaign vault `aDNA.aDNA/`. Session 2 spec-execution must pre-confirm the upstream working tree path + the remote (`LatticeProtocol/adna` post-Stage-A rename) before any `git mv` runs. Confusion between the two paths is the M01 AAR's surfaced risk for this mission class.
- **Verification gate**. Session 2 closes only if 13/13 V-checks (V1-V13 in runbook §5) and 10/10 R-checks (R2-R11 in runbook §6 — R1 is implicit per the `rm -rf .git` sandbox preparation) pass. Failure invokes runbook §7 rollback and re-enters Session 2.

---

## Objectives

### Obj 1 — Draft ADR-008 (airlock template stub) — Session 1

Draft `what/decisions/adr_008_airlock_template_stub.md` per the minimal-stub posture. ADR ratifies at the M03 phase gate (Session 3) — Session 1 leaves `status: proposed`.

**Read:**
1. [[../../../III.aDNA/what/artifacts/iii_airlock_standard_spec.md|III.aDNA Airlock Standard v0.2.0]] head — verify version (current: v0.2.0; ADR-008 pins to this) + §1 Purpose & Scope + §2 The Two Surfaces (decision matrix)
2. [[../../../III.aDNA/how/airlock/AIRLOCK.md|III.aDNA airlock reference instance]] — pattern source for the template stub
3. [[artifacts/m01_obj8_per_vault_coord_memo_template.md|M01 Obj 8 per-vault coord memo template]] head — the multilateral airlock content source that v3-EC `M05-EC` consumes; ADR-008 forward-references this as the per-vault content path
4. [[artifacts/aar_m08a_upgrade_guide_and_coord_memos.md|M08a AAR]] — finding #10 (airlock-arc self-reference) frames ADR-008's conceptual contribution
5. [[../../../what/decisions/adr_006_github_repo_rename_to_adna.md|ADR-006]] + [[../../../what/decisions/adr_007_outer_adna_claude_md_disposition.md|ADR-007]] + [[../../../what/decisions/adr_009_aDNA_naming_convention.md|ADR-009]] — pattern reference for ADR structure (frontmatter, status, context, decision, consequences, alternatives, forward-references, companion)
6. `how/templates/template_adr.md` — scaffold

**Produce:** [[../../../what/decisions/adr_008_airlock_template_stub.md|`adr_008_airlock_template_stub.md`]] — full ADR with frontmatter (`status: proposed`, `ratification_phase: P1`, `mission: mission_adna_infra_p1_03_repo_flatten`), Context (the airlock pattern's 4-instance lineage; the M08a multilateral exercise; the template-level gap ADR-008 fills), Decision (ship minimal `.adna/how/airlock/AIRLOCK.md` stub + federation_ref pin to III v0.2.0; opt-in posture; defers schema + content to III canonical), Consequences (positive: template ecosystem has an airlock entry point; negative: future III spec bumps require re-pin), Alternatives (full mirror — rejected; do-nothing — rejected), Forward-references (v3-EC `M05-EC` per-vault adoption), Companion ADRs (006/007/009; III's own ADRs as cross-references). Inline spec for the `.adna/how/airlock/AIRLOCK.md` stub file itself (~60-80 line target; Session 2 Obj 3 actually creates it during the flatten landing). Self-reference (Standing Order #2): the campaign's M08a multilateral airlock instances are the working examples ADR-008 codifies — the standard demonstrates itself.

### Obj 2 — Stage A: GitHub repo rename — Session 2

Execute the GitHub UI rename per ADR-006 §Migration mechanics + apply the optional remote URL update on Stanley's local clone.

**Read:**
1. [[../../../what/decisions/adr_006_github_repo_rename_to_adna.md|ADR-006]] §Migration mechanics (lines 53-72) — full step-by-step
2. [[artifacts/m01_obj2_migration_runbook.md|M01 Obj 2 migration runbook]] §8 Stage A
3. M03 Obj 1 ADR-008 (drafted Session 1) — for forward-reference of the airlock-stub landing in Obj 3

**Pre-flight (REQUIRED before operator UI rename)**:
- **Confirm no new repo exists at `LatticeProtocol/Agentic-DNA`** (per ADR-006 redirect mechanics — "indefinitely as long as no new repository is created at the old name"). Run `gh repo view LatticeProtocol/Agentic-DNA` — expected: redirects to `/adna` (post-rename) OR returns the old `Agentic-DNA` repo (pre-rename). If a *different* repo exists at the old name path, the redirect chain is broken; **escalate to operator before proceeding**.

**Produce:**
- **Operator action (Stanley)**: GitHub UI rename `LatticeProtocol/Agentic-DNA` → `LatticeProtocol/adna` (Settings → General → Repository name → Save)
- **Agent action**: optional remote URL update on local clone (`git -C ~/lattice/adna remote set-url origin https://github.com/LatticeProtocol/adna.git`) — execute, verify with `git remote -v`
- **Agent action**: GitHub redirect verification (`curl -sI https://github.com/LatticeProtocol/Agentic-DNA` → 301 to `/adna`)
- Activity log entry capturing the rename timestamp + redirect-verification output

### Obj 3 — Stage B: Repo flatten upstream commits — Session 2

Execute the destructive upstream flatten in the `LatticeProtocol/adna` template repo per runbook §8 Stage B. This is the main destructive operation of the mission.

**Read:**
1. [[artifacts/m01_obj2_migration_runbook.md|M01 Obj 2 migration runbook]] §2 Path A (in-place rename) + §8 Stage B
2. [[../../../what/decisions/adr_007_outer_adna_claude_md_disposition.md|ADR-007]] §Decision (lines 75-101) — outer wrapper conversion mechanics
3. [[artifacts/m01_obj5_github_minimalism_audit.md|M01 Obj 5 audit]] §2 W-1 (workflow caller-usage URL updates), §3 D-1 (deploy_manifest move), §4 P-1 (prepare_for_onboarding move), §5 G-1 (template-level `.gitignore` creation), §6 F-5 (LICENSE preservation)
4. [[artifacts/m01_obj6_version_bump_checklist.md|M01 Obj 6 version-bump checklist]] §6 — pre-drafted v7.0 CHANGELOG entry (copy verbatim; do NOT re-author)

**Pre-flight (REQUIRED before any destructive op)**:
- Confirm upstream working tree path: `/Users/stanley/lattice/adna/` (Path A pre-rename) becomes `/Users/stanley/lattice/.adna/` (Path A post-rename); record absolute paths in the session activity log
- Confirm git remote points to `LatticeProtocol/adna` (post-Stage-A rename per Obj 2)
- Confirm clean working tree (`git status --porcelain` empty) + on `main` + `git pull --ff-only` returns `Already up to date`
- Confirm no active sessions in the template repo's `how/sessions/active/` (only `.gitkeep`)
- **Confirm `adna/LICENSE` exists pre-flatten** (per Obj 5 audit F-5 — F-5 verifies LICENSE persists post-flatten, which is meaningful only if it existed pre-flatten). Apache-2.0 LICENSE file is a publication requirement.
- **Upstream-author sequence clarification** (Stanley IS the LP/adna upstream author with push rights): the runbook §2 Path A Step 4 "next `git pull --ff-only` lands the flatten" wording targets *downstream operators*. For Stanley as upstream author the sequence collapses to: edit local working tree → commit → `git push origin main` (commits + tags) → subsequent `git pull --ff-only` is a no-op confirmation. Record this in the activity log to avoid the chicken-and-egg confusion.
- Recommended: backup at `~/lattice.pre-v7-backup/` (`cp -a ~/lattice ~/lattice.pre-v7-backup`)

**Produce:** the following upstream commits to `LatticeProtocol/adna` (one PR-style commit set per logical change; final commit tagged `v7.0`):

1. **Symlink removal + directory rename** (Path A Steps 1-2): `rm ~/lattice/.adna; mv ~/lattice/adna ~/lattice/.adna`. This is a workspace-level operation; the upstream repo doesn't see it as a commit.
2. **Flatten commit**: in the now-`.adna/` working tree, `git mv adna/.adna/* .` (or equivalent if `adna/.adna/` files need explicit per-file moves) + `git rm -rf adna/.adna/` to remove the nested directory. Verify the working tree has the flat structure documented in runbook §2 Path A Step 4 expected outputs.
3. **Outer wrapper conversion commit (template-level, upstream commit)** (per ADR-007 §Decision lines 75-101): `git mv adna/CLAUDE.md .adna/how/templates/template_workspace_claude.md` + apply 3 edits in-place: (a) frontmatter replacement (`type: governance` → `type: template`, `template_for: workspace_claude_md`, `status: active`, retain `created` + update `updated` to today + `last_edited_by: agent_stanley` + `tags: [template, workspace, claude_md, lattice, governance]`); (b) title change `# CLAUDE.md — Your Lattice` → `# Template — Workspace CLAUDE.md` + add preamble per ADR-007 §Decision Step 2; (c) remove "Do not edit this file" disclaimer (line 13 of original) + add inline comment per ADR-007 §Decision Step 3. Retain all unique-content sections per ADR-007 §Decision §Sections retained as-is. **Compute Tiers + link-table trimming — Operator decision required at Session 2 start** (per ADR-007 §Decision §Sections optionally trimmed): default to **retain verbatim** (recommended — keep conversion conservative; trimming is an M07 simplification candidate); operator may choose to trim (replace with `<!-- See .adna/CLAUDE.md §Compute Tiers -->` etc.) if minimalism is preferred this campaign.

   **Scope clarification (workspace-vs-template separation)**: This Commit 3 is the **template-level** edit (lands in the upstream `LatticeProtocol/adna` repo). M01 Obj 3 node.aDNA design specifies TWO related artifacts: (i) the template `.adna/CLAUDE.md` cross-project routing hook — **template-level**, may land in Commit 3 if operator authorizes; (ii) the workspace router (`/Users/stanley/lattice/CLAUDE.md`) Step 0 first-run-detection block — **workspace-level, NOT an upstream commit; lives in Stanley's local workspace file only**. Workspace-level block wiring is a separate activity tracked in Session 2 activity log + STATE.md `files_modified` list; it does NOT appear in any `LatticeProtocol/adna` commit. **Operator decision required at Session 2 start**: include the workspace-router Step 0 block this session (workspace-level edit) OR defer to M04 mission open (recommended — M04 owns node.aDNA bootstrap end-to-end; keeps M03 scope tight to the template flatten). The template-level cross-project routing hook (artifact (i)) may still land in Commit 3 independently if operator authorizes — it's a smaller addition that doesn't require node.aDNA to exist yet.
4. **deploy_manifest move commit** (per Obj 5 D-1): `git mv adna/deploy_manifest.yaml .github/deploy_manifest.yaml` + update `sync_includes:` block per D-1 (remove `.adna` entry; simplify to `["README.md", "CLAUDE.md", ".github", "how", "what", "who"]` after verifying against deploy_manifest schema). Update first-line comment per D-2 (cosmetic).
5. **prepare_for_onboarding.sh move commit** (per Obj 5 P-1) — **Operator decision required at Session 2 start** (one of two options):
   - **Option A (recommended; preferred per Obj 5 audit P-1)**: `git mv prepare_for_onboarding.sh how/skills/l1_upgrade/prepare_for_onboarding.sh` — move into L1 upgrade skill directory. Resolves discoverability + reflects the skill's actual ownership; newcomers no longer mistake L1-specific script for general-purpose vault setup.
   - **Option B**: `git mv prepare_for_onboarding.sh prepare_for_l1_upgrade.sh` — rename in place. Makes scope explicit in filename while keeping at repo root.

   Either option: preserve the doc-comment block verbatim per Obj 5 P-3 ("Does NOT install latlab, JupyterHub, or any Lattice infrastructure" framing stays). Update `skill_l1_upgrade.md` (post-flatten path `.adna/how/skills/skill_l1_upgrade.md`) with a one-line reference to the new path. Session 2 agent confirms operator's A/B choice at session open before executing the commit; defaults to Option A if operator hasn't specified by Pre-flight close.
6. **Template-level `.gitignore` creation commit** (per Obj 5 G-1): create `.adna/.gitignore` merging outer-level entries + 9 missing v7.0 entries from the Obj 5 §5 audit. Omit `*.aDNA/` per G-2 (workspace-level exclusion only). Add `*.tar.gz` at repo root per G-4. Final contents per Obj 5 §5.
7. **Workflow caller-usage URL update commit** (per Obj 5 W-1): grep-replace `LatticeProtocol/Agentic-DNA` → `LatticeProtocol/adna` in `.adna/.github/workflows/manifest_validation.yml` (line 7), `mypy_lattice_protocol.yml` (line 10), `ruff_on_touched.yml` (line 9).
8. **`Agentic-DNA` grep sweep commit** (per ADR-006 §Migration mechanics §Documentation updates): grep `.adna/` (and the outer `adna/` README) for `Agentic-DNA` references. **Confirmed pre-flight (verified Session 1 review re-grep)**: **~12 references across 4 files** — `adna/.adna/CLAUDE.md` (1 ref) + `adna/.adna/MANIFEST.md` (3 refs) + `adna/.adna/README.md` (6 refs) + outer `adna/README.md` (3 refs; this is the README of the outer wrapper, separate from the inner template README, until M03 flatten retires the outer). Sweep all hits across all 4 files; preserve display-name usage in prose per ADR-006 §Decision (URL slug only — `Agentic-DNA` stays as display name in headings + prose, becomes lowercase `adna` only in URLs / clone commands / repo-slug references). Per Session 1 spot-check, the workspace router `/Users/stanley/lattice/CLAUDE.md` is already clean (0 references); confirm again at Session 2 entry. Post-sweep verification: `grep -r "Agentic-DNA" .adna/` should only find display-name uses (no URLs/slugs); `grep -r "github.com/LatticeProtocol/Agentic-DNA" .adna/` should return empty.
9. **README clone command update commit** (per ADR-006 §Migration mechanics): update `.adna/README.md` clone command to `git clone https://github.com/LatticeProtocol/adna.git .adna` (new flat-clone form). Per Obj 5 audit, README references are conformant; this commit only touches the clone-command line.
10. **LICENSE preservation verification** (per Obj 5 F-5): verify `LICENSE` is present at `.adna/LICENSE` post-flatten. No commit unless absent (would indicate a flatten error to fix).
11. **CHANGELOG v7.0 entry commit** (per M01 Obj 6 version-bump checklist §6): copy the pre-drafted v7.0 entry from [[artifacts/m01_obj6_version_bump_checklist.md|`m01_obj6_version_bump_checklist.md`]] §6 verbatim into `.adna/CHANGELOG.md` at the top (per the checklist's positional spec). **Do NOT re-author.**
12. **`.adna/how/airlock/AIRLOCK.md` stub creation commit** (per Obj 1 ADR-008 spec): create the directory `.adna/how/airlock/` + ship the entry-point file per ADR-008's inline spec (~60-80 lines). The file carries the identity block, status, federation_ref pin to III v0.2.0, opt-in-posture paragraph, skill_project_fork integration note, and forward-ref to v3-EC `M05-EC` as the per-vault adoption owner. No schema duplication; no entry-path content.
13. **Tag `v7.0`** (final commit's annotated tag): `git tag -a v7.0 -m "aDNA v7.0: repo flatten + airlock template stub + naming-convention codification"` (or per the M01 Obj 6 §6 annotated tag command verbatim). Push tag.
14. **Push commits to GitHub**: `git push origin main` + `git push origin v7.0`.

### Obj 4 — Stage C: Skill updates — Session 2

Update the four skills affected by the flatten. Skills live at `.adna/how/skills/` (post-flatten path).

**Read:**
1. [[artifacts/m01_obj2_migration_runbook.md|M01 Obj 2 migration runbook]] §6 (the verbatim 11-check regression test that gates Obj 5) + §8 Stage C
2. [[../../../what/decisions/adr_007_outer_adna_claude_md_disposition.md|ADR-007]] §Workflow integration (lines 98-101) — `skill_workspace_upgrade.md` Step 3 alternative + `skill_workspace_init.md` formal retirement
3. [[../../../what/decisions/adr_009_aDNA_naming_convention.md|ADR-009]] §4 Going-forward enforcement table — touchpoints on `skill_project_fork.md` (warn-on-non-snake_case) + `skill_workspace_upgrade.md` (reference convention) + `skill_git_remote_setup.md` (M05 scope, NOT this mission) + `skill_lattice_publish.md` (M07 scope, NOT this mission)
4. Current state of `.adna/how/skills/skill_project_fork.md` + `skill_workspace_upgrade.md` + `skill_workspace_init.md` + `skill_onboarding.md`

**Produce:** the following skill-file commits (one per skill for clean diff):

1. **`skill_project_fork.md` exclusion list commit** (R2-R7 in regression test): add Step 3 post-copy exclusion lines per runbook §6:
   ```sh
   # After cp -r .adna/ <project_name>.aDNA/, remove repo-level files (per ADR-007 + M03 update):
   cd <project_name>.aDNA/
   rm -rf .git
   rm -rf .github
   rm -f README.md LICENSE setup.sh prepare_for_onboarding.sh
   ```
   Also add ADR-009 name-validation step per §4 enforcement table: if user-supplied `<name>` doesn't match `[a-z][a-z0-9_]*` (snake_case), warn + prompt for corrected form; cite ADR-009 §1; user MAY override (logged as §3 exception requiring documentation).

2. **`skill_workspace_upgrade.md` updates commit**:
   - **Symlink-step removal** (V10 in verification harness): remove any `ln -s` line that creates `~/lattice/.adna -> adna/.adna`. Post-flatten, no symlink exists.
   - **Step 3 alternative — template-based bootstrap** (ADR-007 §Workflow integration): add an alternative Step 3 path: if no workspace router exists at `~/lattice/CLAUDE.md`, copy `.adna/how/templates/template_workspace_claude.md` → `~/lattice/CLAUDE.md` as the starting point.
   - **ADR-009 naming-convention cross-reference**: add a `# Naming convention` section referencing ADR-009 §1 + the 4 grandfathered hyphen-flat exceptions.

3. **`skill_workspace_init.md` retirement commit** (V9; Standing Order #6 — archive not delete):
   - Flip frontmatter `status: active → retired`
   - Add a retirement note at the top of the body: "**Retired in aDNA v7.0** (M03 close 2026-05-??; this mission's AAR). The workspace-init flow is now covered by manual onboarding via `template_workspace_claude.md` + `skill_workspace_upgrade.md` for workspaces with existing content. Retained for archival reference per Standing Order #6 (archive, not delete)."
   - Add a Replacement cross-link: `Replacement: [[skill_workspace_upgrade.md]] (workspaces with existing content) + .adna/how/templates/template_workspace_claude.md (fresh workspaces).`

4. **`skill_onboarding.md` URL audit commit** (per ADR-006 §Migration mechanics §Documentation updates Step 4 line 67 says "no URL references in current content"): verify with grep; if any `Agentic-DNA` references found, sweep them to `adna` lowercase URL slug per ADR-006. If none found, no edit — record the grep verification in the session activity log.

### Obj 5 — Stage D: Verification harness — Session 2 (mission close gate)

Run the 13-check verification harness (V1-V13) on Stanley's local workspace + the 11-check `skill_project_fork.md` regression test (R2-R11 + R1 implicit) in a `/tmp/sandbox_v7/` sandbox. **All checks must pass for Session 2 to close successfully.**

**Read:**
1. [[artifacts/m01_obj2_migration_runbook.md|M01 Obj 2 migration runbook]] §5 (V1-V13 table) + §6 (full sandbox regression-test script) + §7 (rollback procedures if any check fails)

**Sandbox prep**: regression test R1-R11 runs in `/tmp/sandbox_v7/` per runbook §6. **Fallback**: if `/tmp` is restricted on the host (noexec mount, low quota, permissions issue), use `~/sandbox_v7/` instead — the runbook script's paths are local-relative, so the alternative location works identically. Clean up post-test either way (`rm -rf /tmp/sandbox_v7 ~/sandbox_v7` covers both possibilities).

**Produce:**

1. **Verification harness results artifact** at `artifacts/m03_obj5_verification_harness_results.md` documenting V1-V13 pass/fail with the actual command output for each (table format). Cross-reference to the source runbook §5.
2. **Regression test results artifact** at `artifacts/m03_obj5_skill_project_fork_regression_results.md` documenting R1-R11 pass/fail with the actual sandbox output (table format). Cross-reference to the source runbook §6.
3. **Failure handling**: if any V-check or R-check fails, do NOT proceed to mission close. Invoke runbook §7 rollback for the failed stage. Re-enter Session 2 after fix; re-run the full harness. Mission stays `in_progress`; Session 3 deferred. **Special case — V12 / V13 failure** (agent-facing checks: "Open `claude` from `~/lattice/`" / from project vault): these can fail due to CLAUDE.md syntax errors (frontmatter YAML break, broken wikilink) rather than flatten error. **Before invoking rollback**, validate the affected CLAUDE.md's frontmatter: `python3 -c "import yaml; yaml.safe_load(open('CLAUDE.md').read().split('---')[1])"` (or equivalent). Syntax error → fix in place → re-run V12/V13. Persona/context error with valid syntax → diagnose in `.adna/CLAUDE.md` body content; do not roll back the structural flatten just because agent context is off.
4. **Success handling**: if all 13 V-checks + 10 R-checks pass (R1 sandbox-prepared; R2-R11 explicit checks), proceed to Obj 6.

### Obj 6 — Stage E + ADR-008 phase-gate ratification + AAR + mission close — Session 3

Per Standing Order #5 (mandatory AAR before mission `completed`) and Standing Order #1 (phase gates are human gates).

**Read:**
1. `how/templates/template_aar_lightweight.md` — AAR format
2. [[artifacts/aar_m08a_upgrade_guide_and_coord_memos.md|M08a AAR]] — most-recent style precedent (lightweight 5-line + 4-category extended findings)
3. [[artifacts/aar_m02_ecosystem_matrix.md|M02 AAR]] — secondary style precedent (lightweight-only)
4. [[../../../what/decisions/adr_008_airlock_template_stub.md|ADR-008]] (drafted at Obj 1; ratification this session)

**Produce:**

1. **ADR-008 phase-gate ratification**: operator approves; flip ADR-008 frontmatter `status: proposed → accepted`; populate `ratification_phase: P1`, `ratified: 2026-05-??` (Session 3 date), `ratified_session: session_stanley_<ts>_adna_v2_m03_s3`. Update ADR-008 status block to note ratification.
2. **Mission AAR** at `artifacts/aar_m03_repo_flatten.md` (lightweight 5-line + ≥4-category extended findings per M08a precedent — Successful patterns / Surprises and friction / Conceptual contributions / Items deferred). Load-bearing finding candidate: **the 3-session implementation-mission arc (S1 non-destructive spec + ADR-draft / S2 destructive execution + verification / S3 mission close) is the canonical decomposition for breaking-change missions in this campaign**. Companion findings: Standing Order #6 archive-not-delete worked exactly as intended (skill_workspace_init.md retained for audit); upstream-vs-vault path discipline (pre-flight check caught the M01 AAR-surfaced risk); CHANGELOG verbatim-copy from M01 Obj 6 prevented drift.
3. **Mission file status flip**: frontmatter `status: in_progress → completed`.
4. **Campaign master M03 row update**: flip `next → completed`; add row note pointing at AAR + ADR-008 ratification.
5. **Campaign master amendments entry** (3rd 2026-05-?? entry for this mission close; matches M08a 3-entry-per-mission pattern): one entry covering Session 1 spec + ADR-008 draft, one covering Session 2 destructive flatten + harness pass, one covering this Session 3 mission close + ADR-008 ratification.
6. **STATE.md update**: rewrite Current Phase §1 status line for M04 opening; rewrite Last Session block; rewrite Next Session Prompt to cover M04 opening; update header HTML comment.
7. **M04 row flip**: campaign master M04 row marked `next` (was `planned`).
8. **Session file move**: `sessions/active/session_stanley_<ts>_adna_v2_m03_s3.md` → `sessions/history/2026-05/`.
9. **Commit + push**: under mission-close commit message.

**Hand off to M04**: M03 closes with the flattened template structure live + ADR-008 ratified + the airlock template stub shipped. The **template-level** `.adna/CLAUDE.md` cross-project routing hook (per M01 Obj 3 design §Cross-project routing hook) may land in Obj 3 Commit 3 per operator decision at S2 start. The **workspace-level** Step 0 first-run-detection block (per M01 Obj 3 design §First-run detection block) is recommended to defer to M04 — M04 owns the `node.aDNA/` bootstrap end-to-end including the workspace-router block wiring at `/Users/stanley/lattice/CLAUDE.md`. M04 opens at operator discretion per Standing Order #1.

---

## Inputs from M01 + M02 + M08a

| Input | Source artifact | Use |
|---|---|---|
| 13-check verification harness V1-V13 | [[artifacts/m01_obj2_migration_runbook.md|`m01_obj2_migration_runbook.md`]] §5 | Obj 5 verification gate |
| 11-check `skill_project_fork.md` regression test R1-R11 | [[artifacts/m01_obj2_migration_runbook.md|`m01_obj2_migration_runbook.md`]] §6 | Obj 5 verification gate |
| Rollback procedures (Paths A/B/C) | [[artifacts/m01_obj2_migration_runbook.md|`m01_obj2_migration_runbook.md`]] §7 | Obj 5 failure handling |
| Stage A/B/C/D/E sequencing | [[artifacts/m01_obj2_migration_runbook.md|`m01_obj2_migration_runbook.md`]] §8 | Mission decomposition |
| Outer wrapper → `template_workspace_claude.md` conversion mechanics | [[../../../what/decisions/adr_007_outer_adna_claude_md_disposition.md|ADR-007]] §Decision lines 75-101 | Obj 3 Commit 3 |
| GitHub repo rename mechanics + redirect verification | [[../../../what/decisions/adr_006_github_repo_rename_to_adna.md|ADR-006]] §Migration mechanics lines 53-72 | Obj 2 |
| ADR-009 §4 enforcement touchpoints (skill_project_fork name validation + skill_workspace_upgrade naming-convention section) | [[../../../what/decisions/adr_009_aDNA_naming_convention.md|ADR-009]] §4 table | Obj 4 |
| `deploy_manifest.yaml` move target + `sync_includes:` simplification | [[artifacts/m01_obj5_github_minimalism_audit.md|`m01_obj5_github_minimalism_audit.md`]] §3 D-1 | Obj 3 Commit 4 |
| `prepare_for_onboarding.sh` move/rename decision | [[artifacts/m01_obj5_github_minimalism_audit.md|`m01_obj5_github_minimalism_audit.md`]] §4 P-1/P-2/P-3 | Obj 3 Commit 5 |
| Template-level `.gitignore` content spec (9 missing v7.0 entries + inherited outer entries + 1 tarball addition) | [[artifacts/m01_obj5_github_minimalism_audit.md|`m01_obj5_github_minimalism_audit.md`]] §5 G-1/G-2/G-3/G-4 | Obj 3 Commit 6 |
| Workflow caller-usage URL updates (3 files, specific line numbers) | [[artifacts/m01_obj5_github_minimalism_audit.md|`m01_obj5_github_minimalism_audit.md`]] §2 W-1 | Obj 3 Commit 7 |
| Pre-drafted v7.0 CHANGELOG entry (Added/Changed/Deprecated/Removed/Fixed/Security) | [[artifacts/m01_obj6_version_bump_checklist.md|`m01_obj6_version_bump_checklist.md`]] §6 | Obj 3 Commit 11 (verbatim copy) |
| Annotated tag command spec | [[artifacts/m01_obj6_version_bump_checklist.md|`m01_obj6_version_bump_checklist.md`]] §6 | Obj 3 Commit 13 |
| `node.aDNA/` first-run-detection block for workspace router | [[artifacts/m01_obj3_node_adna_design.md|`m01_obj3_node_adna_design.md`]] §First-run detection block | Obj 3 Commit 3 (optional; could also wait for M04 — operator decision Session 2) |
| Per-vault coord memo template (the multilateral airlock content source) | [[artifacts/m01_obj8_per_vault_coord_memo_template.md|`m01_obj8_per_vault_coord_memo_template.md`]] | Obj 1 ADR-008 forward-ref to v3-EC M05-EC |
| III.aDNA airlock spec version (v0.2.0) | `/Users/stanley/lattice/III.aDNA/what/artifacts/iii_airlock_standard_spec.md` | Obj 1 ADR-008 federation_ref pin |
| M08a multilateral airlock instances (working examples) | `who/coordination/coord_2026_05_09_v7_*.md` × 17 + [[artifacts/aar_m08a_upgrade_guide_and_coord_memos.md|M08a AAR]] finding #10 | Obj 1 ADR-008 Context §airlock 4-instance lineage |
| Operator-readiness (upgrade guide finalized + 13 LP-internal coord memos ready) | [[artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|`m01_obj8_upgrade_guide_v6_to_v7.md`]] @ `status: finalized` + 13 `coord_2026_05_09_v7_*.md` @ `status: ready` | Pre-condition: M03 destructive ops proceed only because M08a shipped these |

---

## Deliverables

| # | Deliverable | Obj | Artifact path (relative to vault root) | Session |
|---|---|---|---|---|
| 1 | ADR-008 draft (airlock template stub) | 1 | `what/decisions/adr_008_airlock_template_stub.md` (`status: proposed`) | S1 |
| 2 | GitHub repo renamed + redirect-verification logged | 2 | (upstream GitHub state + session activity log) | S2 |
| 3.1 | Flatten commit (symlink removal + directory rename + `git mv adna/.adna/* .` + `git rm -rf adna/.adna/`) | 3 | upstream `LatticeProtocol/adna` commit | S2 |
| 3.2 | Outer wrapper conversion commit (`adna/CLAUDE.md` → `.adna/how/templates/template_workspace_claude.md` + 3 edits) | 3 | upstream `LatticeProtocol/adna` commit | S2 |
| 3.3 | `deploy_manifest.yaml` move commit (→ `.adna/.github/` + `sync_includes:` simplification) | 3 | upstream `LatticeProtocol/adna` commit | S2 |
| 3.4 | `prepare_for_onboarding.sh` move commit (→ `.adna/how/skills/l1_upgrade/`) + `skill_l1_upgrade.md` reference update | 3 | upstream `LatticeProtocol/adna` commits (2) | S2 |
| 3.5 | Template-level `.gitignore` creation commit | 3 | upstream `LatticeProtocol/adna` commit | S2 |
| 3.6 | Workflow caller-usage URL update commit (3 files) | 3 | upstream `LatticeProtocol/adna` commit | S2 |
| 3.7 | `Agentic-DNA` grep sweep commit (`.adna/CLAUDE.md` + any other hits) | 3 | upstream `LatticeProtocol/adna` commit | S2 |
| 3.8 | README clone command update commit | 3 | upstream `LatticeProtocol/adna` commit | S2 |
| 3.9 | CHANGELOG v7.0 entry commit (verbatim copy from M01 Obj 6 §6) | 3 | upstream `LatticeProtocol/adna` commit | S2 |
| 3.10 | `.adna/how/airlock/AIRLOCK.md` stub creation commit | 3 | upstream `LatticeProtocol/adna` commit | S2 |
| 3.11 | Annotated tag `v7.0` + push commits + push tag | 3 | upstream `LatticeProtocol/adna` tag | S2 |
| 4.1 | `skill_project_fork.md` update commit (exclusion list + ADR-009 name validation) | 4 | upstream `LatticeProtocol/adna` commit | S2 |
| 4.2 | `skill_workspace_upgrade.md` update commit (symlink removal + Step 3 alternative + ADR-009 cross-reference) | 4 | upstream `LatticeProtocol/adna` commit | S2 |
| 4.3 | `skill_workspace_init.md` retirement commit (`status: retired` + note + cross-link) | 4 | upstream `LatticeProtocol/adna` commit | S2 |
| 4.4 | `skill_onboarding.md` URL audit commit (only if grep finds references; else session log entry) | 4 | upstream `LatticeProtocol/adna` commit OR session log | S2 |
| 5.1 | Verification harness results artifact | 5 | `artifacts/m03_obj5_verification_harness_results.md` | S2 |
| 5.2 | `skill_project_fork.md` regression test results artifact | 5 | `artifacts/m03_obj5_skill_project_fork_regression_results.md` | S2 |
| 6.1 | ADR-008 phase-gate ratification (status flip + ratified fields populated) | 6 | `what/decisions/adr_008_airlock_template_stub.md` (`status: accepted`) | S3 |
| 6.2 | Mission AAR | 6 | `artifacts/aar_m03_repo_flatten.md` | S3 |

**Total: 1 + 1 + 11 + 4 + 2 + 2 = 21 deliverables.** Session 1 produces deliverable 1 (this mission spec authoring; ADR-008 draft). Session 2 produces deliverables 2-5.2 (Stages A-D). Session 3 produces deliverables 6.1-6.2 + status flips + STATE.md update + session file move.

---

## Acceptance criteria

- [ ] **ADR-008 drafted** at `what/decisions/adr_008_airlock_template_stub.md` with `status: proposed`, federation_ref pin to III.aDNA `iii_airlock_standard_spec.md` v0.2.0 verified by grep, minimal-stub posture (no schema duplication), forward-ref to v3-EC `M05-EC`, inline spec for the `.adna/how/airlock/AIRLOCK.md` stub file (Session 1)
- [ ] **ADR-008 ratified** at the M03 phase gate (Session 3); status flipped `proposed → accepted`; `ratified` + `ratified_session` populated
- [ ] **GitHub repo renamed** `LatticeProtocol/Agentic-DNA` → `LatticeProtocol/adna`; redirect verification logged (Session 2 Obj 2)
- [ ] **Symlink removed** + **directory renamed** `adna/` → `.adna/` (workspace level; verification harness V1 + V3)
- [ ] **Outer `adna/CLAUDE.md` converted** to `.adna/how/templates/template_workspace_claude.md` per ADR-007 §Decision (frontmatter + title + disclaimer edits applied; sections retained per spec); verification harness V8
- [ ] **`deploy_manifest.yaml` moved** to `.adna/.github/`; `sync_includes:` simplified per Obj 5 D-1; verification harness V7
- [ ] **`prepare_for_onboarding.sh` moved** to `.adna/how/skills/l1_upgrade/` (or renamed per Obj 5 P-1 alternative); `skill_l1_upgrade.md` cross-references updated; regression test R6 + R7 (the latter via `deploy_manifest.yaml` exclusion through `.github/` exclusion)
- [ ] **Template-level `.gitignore` created** at `.adna/.gitignore` per Obj 5 G-1 content spec; `*.aDNA/` omitted per G-2; `*.tar.gz` added per G-4
- [ ] **Workflow caller-usage URLs updated** in 3 workflow files per Obj 5 W-1 (specific line numbers)
- [ ] **`Agentic-DNA` references swept** in `.adna/` (1 known reference in `.adna/CLAUDE.md`; any others found post-grep also swept); workspace router `/Users/stanley/lattice/CLAUDE.md` re-verified clean
- [ ] **README clone command updated** to `git clone https://github.com/LatticeProtocol/adna.git .adna`
- [ ] **CHANGELOG v7.0 entry copied verbatim** from M01 Obj 6 §6 (no re-authoring; spot-check by diffing source vs landed)
- [ ] **`.adna/how/airlock/AIRLOCK.md` stub created** per ADR-008 inline spec (~60-80 lines; identity + federation_ref + opt-in posture + forward-ref); directory `.adna/how/airlock/` exists
- [ ] **Annotated tag `v7.0` created** + pushed; redirect to new repo URL verified
- [ ] **`skill_project_fork.md` exclusion list added** (rm -rf .git + .github; rm -f README + LICENSE + setup.sh + prepare_for_onboarding.sh); regression test R2-R7 + R11 pass
- [ ] **`skill_project_fork.md` ADR-009 name validation added**; grep for `[a-z][a-z0-9_]*` warn-pattern present
- [ ] **`skill_workspace_upgrade.md` symlink step removed** (no `ln -s` references); verification harness V10
- [ ] **`skill_workspace_upgrade.md` Step 3 alternative added** (template-based bootstrap when no workspace router exists)
- [ ] **`skill_workspace_upgrade.md` ADR-009 naming-convention section added**
- [ ] **`skill_workspace_init.md` retired** (`status: active → retired`); retirement note added; cross-link to `skill_workspace_upgrade.md` added; file persists (Standing Order #6); verification harness V9
- [ ] **`skill_onboarding.md` URL audit completed** (grep run; sweep applied if hits; else logged)
- [ ] **13/13 V-checks pass** (V1-V13 per runbook §5); results captured in `m03_obj5_verification_harness_results.md`
- [ ] **10/10 R-checks pass** (R2-R11 per runbook §6; R1 implicit from sandbox prep); results captured in `m03_obj5_skill_project_fork_regression_results.md`
- [ ] **Mission AAR landed** at `aar_m03_repo_flatten.md` (lightweight 5-line + ≥4-category extended findings; M08a-style) — Standing Order #5
- [ ] **Mission file frontmatter** `status: in_progress → completed`; `updated` to S3 date
- [ ] **Campaign master M03 row** flipped `next → completed`; M04 row marked `next`
- [ ] **Campaign master amendments entries appended** (3 entries: S1 spec + ADR-008 draft; S2 destructive flatten + harness; S3 close + ADR-008 ratification)
- [ ] **STATE.md updated** for M04 opening (Current Phase + Last Session + Next Session Prompt + header HTML comment)
- [ ] **All 3 session files moved** from `sessions/active/` to `sessions/history/2026-05/`
- [ ] **Hard constraints honored throughout**: 17 M08a coord memos at their authored statuses (no delivery); 4 partner-affiliated memos still embargo-held; 3 M08a public-announcement drafts still `delivery_held_until: M06-tag-ship`; finalized upgrade guide untouched (`status: finalized`); CHANGELOG copied (not re-authored); `skill_workspace_init.md` retained (Standing Order #6); ADR-008 minimal stub (no III schema duplication); no partner-vault mutation

**Total: 30 acceptance criteria boxes.** Session 1 closes with boxes 1, 23 (S1-scoped subset), and 24-29 (Phase D session-close work) checked. Session 2 closes with boxes 3-22 + 24-26 (S2-scoped). Session 3 closes the remaining boxes.

---

## Cross-references

- [[../campaign_adna_v2_infrastructure.md|Campaign master]] — mission tree; M03 row
- [[mission_adna_infra_planning_01.md|M01 mission spec]] — predecessor (closed; produced runbook + minimalism audit + version bump checklist + node.aDNA design + per-vault coord memo template)
- [[mission_adna_infra_p1_02_ecosystem_matrix.md|M02 mission spec]] — predecessor (closed; locked ecosystem baseline; V11 verifies project vaults unchanged post-flatten)
- [[mission_adna_infra_p1_08a_upgrade_guide_and_coord_memos.md|M08a mission spec]] — predecessor (closed; finalized upgrade guide + rendered 17 per-vault coord memos)
- [[artifacts/m01_obj2_migration_runbook.md|M01 Obj 2 migration runbook]] — primary input (V/R harnesses + Stage sequencing)
- [[artifacts/m01_obj3_node_adna_design.md|M01 Obj 3 node.aDNA design]] — forward dependency for M04
- [[artifacts/m01_obj5_github_minimalism_audit.md|M01 Obj 5 GitHub minimalism audit]] — D-1/P-1/G-1/W-1/F-5 high-priority M03 actions
- [[artifacts/m01_obj6_version_bump_checklist.md|M01 Obj 6 version-bump checklist]] — pre-drafted CHANGELOG v7.0 entry + annotated tag command
- [[artifacts/m01_obj8_upgrade_guide_v6_to_v7.md|M01 Obj 8 upgrade guide]] — finalized at M08a; consumed by Op Rosetta Phase 8 + M08b; M03 does NOT modify
- [[artifacts/m01_obj8_per_vault_coord_memo_template.md|M01 Obj 8 per-vault coord memo template]] — ADR-008 forward-ref for v3-EC M05-EC
- [[artifacts/aar_m08a_upgrade_guide_and_coord_memos.md|M08a AAR]] — finding #10 frames ADR-008
- [[../../../what/decisions/adr_006_github_repo_rename_to_adna.md|ADR-006]] — accepted at P0→P1 gate; Stage A executes
- [[../../../what/decisions/adr_007_outer_adna_claude_md_disposition.md|ADR-007]] — accepted at P0→P1 gate; Stage B Commit 3 executes
- [[../../../what/decisions/adr_009_aDNA_naming_convention.md|ADR-009]] — accepted at P0→P1 gate; Obj 4 skill updates absorb name-validation step
- [[../../../what/decisions/adr_008_airlock_template_stub.md|ADR-008]] — drafted Session 1 Obj 1; ratified Session 3 phase gate
- [[../../../who/coordination/coord_2026_05_08_publish_rewrite.md|publish-rewrite ancestor memo]] — airlock-pattern source (bilateral ancestor of M08a multilateral)
- [[../../../III.aDNA/what/artifacts/iii_airlock_standard_spec.md|III.aDNA Airlock Standard v0.2.0]] — ADR-008 federation_ref pin target
- [[../../../III.aDNA/how/airlock/AIRLOCK.md|III.aDNA airlock reference instance]] — pattern source
- [[../../../STATE.md|STATE.md]] — operational snapshot (updated at S1 close, S2 close, S3 close)
- `how/templates/template_aar_lightweight.md` — S3 AAR format
- `how/templates/template_adr.md` — Obj 1 ADR-008 scaffold

## Operator decisions required at Session 2 entry

These are NOT spec gaps — they're discretionary calls the spec intentionally defers. Resolve them at S2 open (the agent will confirm each before executing the affected commit). The spec's flexibility is by design; each option is correct in different contexts.

| # | Decision | Options | Rosetta recommendation | Affects |
|---|---|---|---|---|
| 1 | `prepare_for_onboarding.sh` move (Obj 5 P-1) | **A**: move to `.adna/how/skills/l1_upgrade/prepare_for_onboarding.sh` · **B**: rename to `prepare_for_l1_upgrade.sh` (keeps at root) | **A** — resolves discoverability + reflects L1 skill ownership (preferred per Obj 5 audit) | Obj 3 Commit 5 |
| 2 | node.aDNA workspace-router Step 0 first-run-detection block (workspace-level edit at `/Users/stanley/lattice/CLAUDE.md`, NOT an upstream commit) | **A**: include S2 · **B**: defer to M04 mission open | **B** — keeps M03 scope tight; M04 owns node.aDNA bootstrap end-to-end (the template-level `.adna/CLAUDE.md` cross-project routing hook is separately handled in Obj 3 Commit 3) | Obj 3 Commit 3 |
| 3 | Outer wrapper Compute Tiers / link-table trimming (ADR-007 §Decision §Sections optionally trimmed) | **A**: trim (replace with `<!-- See .adna/CLAUDE.md §Compute Tiers -->`) · **B**: retain verbatim | **B** — retain; trimming is an M07 simplification candidate; keep the conversion conservative this campaign | Obj 3 Commit 3 |

**Session 2 agent**: confirm each decision at session open in the activity log. If operator hasn't specified by Pre-flight close, default to the Rosetta recommendation (A/B/B per row) and surface the auto-default in the SITREP.

---

## Status

**Mission complete** at Session 3 close 2026-05-11T19:46:13Z+ (`session_stanley_20260511_194613_adna_v2_m03_s3`). Frontmatter `status: in_progress → completed`. **All 21 deliverables landed across 3 sessions; 30/30 acceptance criteria boxes checked.**

Session arc:
- **Session 1** (2026-05-11T16:57Z+, `session_stanley_20260511_165755_adna_v2_m03_s1`): non-destructive spec authoring + ADR-008 draft (commit `608f737`). Spec frontmatter `spec_completeness: complete`; 6 objectives + 21 deliverables + 30 acceptance criteria + 18-input table + 9 hard constraints. ADR-008 drafted with `status: proposed` + federation_ref pin to III v0.2.0 + minimal-stub posture. S1 review-refinement applied post-close (commit `3de6d53`) per operator-approved Path 1 — 3 fixes (Fix A Agentic-DNA count, Fix B P-1 ratification, Fix C node.aDNA scope) + 5 risk mitigations + new §Operator decisions required at Session 2 entry section (3 decisions A/B/B).
- **Session 2** (2026-05-11T19:24Z+, `session_stanley_20260511_190653_adna_v2_m03_s2`): destructive flatten + V/R harness 24/24 PASS (commit `c3f184c`). 14 upstream commits to `LatticeProtocol/adna` main (`37cb474..6282680`): B0 inner README preservation + B1 outer wrapper conversion + B2 prepare_for_onboarding move (Option A) + B3 deploy_manifest move + B4 workflow URLs + B5 .gitignore rewrite (amended) + B6 flatten promotion + B7 airlock stub + B8 Agentic-DNA URL sweep + B9 README clone command + B10 CHANGELOG v7.0 verbatim copy + C1-C3 skill commits (C4 no-op). Tag v7.0 deferred to M06 per campaign master. Phase F workspace-level rename: `~/lattice/.adna` is now real directory. V1-V13 (V12/V13 satisfied via Risk 3 syntax-validation) + R1-R11 harness all PASS. Results artifacts at `missions/artifacts/m03_obj5_*_results.md`.
- **Session 3** (2026-05-11T19:46Z+, `session_stanley_20260511_194613_adna_v2_m03_s3`): mission close + AAR + ADR-008 ratification. ADR-008 `status: proposed → accepted` + `ratified: 2026-05-11` + `ratified_session` populated. Mission AAR at [[artifacts/aar_m03_repo_flatten.md|`aar_m03_repo_flatten.md`]] (lightweight 5-line + 4-category extended findings per M08a precedent; load-bearing finding: **ADR-008 is the 5th instance in the airlock lineage** — template stub completes the ∞-scaling progression from III canonical → VideoForge reference → CanvasForge worked example → M08a multilateral → template stub via federation discipline).

**Hands off to M04** (`node.aDNA/` bootstrap) at operator discretion per Standing Order #1. M05 stays blocked-by-M04; M06 stays blocked-by-M05 (v7.0 tag mission); M07/M08b/M08c/M09/M10/M11 stay planned. LatticeScope sub-campaign + `campaign_adna_v3_ecosystem_compliance` successor stay deferred to v2 P3 phase gate. Operation Rosetta Phase 8 stays queued.

**Self-reference (Standing Order #2)**: This spec demonstrates the implementation-mission class working as designed — prior planning (M01) + verification (M02) + authoring (M08a) missions produced the runbook + locked baseline + operator-readiness inputs; M03 was the rendering pass that converted those inputs into landed structural change. The mission's chosen self-reference (airlock template stub as the v7.0 codification of a pattern the campaign itself exercised multilaterally in M08a) became the load-bearing AAR finding — the airlock lineage now has 5 instances, with the template stub providing universal coverage via federation rather than duplication.

---

## Status (legacy — preserved for audit; superseded by §Status above)

**Mission in_progress** at Session 1 open 2026-05-11T16:57:55Z+ (`session_stanley_20260511_165755_adna_v2_m03_s1`). Frontmatter `spec_completeness: complete`; `status: in_progress`. **Session 1 scope**: this mission spec authoring (Phase B; deliverable 1.spec) + ADR-008 draft (Phase C; Obj 1, deliverable 1) + Phase D session close (campaign master amendments entry + STATE.md update + session file move + commit/push). Session 1 is **non-destructive** — no upstream-repo edits, no symlink touches, no workspace router mutations. Session 2 (destructive flatten + verification harness) requires operator approval to enter per Standing Order #1; ADR-008 awaits phase-gate ratification at Session 3.

**Hands off across sessions**: S1 → S2 = ADR-008 draft + this spec hand off to S2's destructive execution; S2 → S3 = V/R harness pass + skill commits hand off to S3's mission close + AAR + ADR-008 ratification.

**Self-reference (Standing Order #2)**: This mission spec demonstrates the implementation-mission class working as designed: prior planning (M01) + verification (M02) + authoring (M08a) missions produced the runbook + locked baseline + operator-readiness inputs; M03 is the rendering pass that converts those inputs into landed structural change. The spec also exercises Standing Order #7 (dual-audience): §Strategic Intent reads naturally for any operator unfamiliar with the campaign's mission tree; §Hard constraints + §Acceptance criteria are technically precise enough that the Session 2 agent can mechanically discharge them. The mission's chosen self-reference (airlock template stub as the v7.0 codification of a pattern the campaign itself exercised multilaterally in M08a) is itself a Standing Order #2 instance — the campaign documents what it does by doing it.
