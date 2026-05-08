---
type: artifact
artifact_type: migration_runbook_draft
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_planning_01
objective: 2
target_mission: M03  # M03 executes this runbook
created: 2026-05-08
updated: 2026-05-08
status: complete
last_edited_by: agent_stanley
tags: [artifact, mission_deliverable, m01, obj2, migration, runbook, repo_flatten, v6_to_v7]
related_artifacts:
  - m01_obj0_ecosystem_matrix.md
  - m01_obj1_current_state.md
related_decisions:
  - adr_006_github_repo_rename_to_adna.md
  - adr_007_outer_adna_claude_md_disposition.md
---

# M01 Obj 2 — Migration Runbook (M03-bound)

> **Deliverable 4 of M01** (per [[../mission_adna_infra_planning_01.md|mission_adna_infra_planning_01]] §Deliverables row 4). Step-by-step migration runbook for M03 to execute the v6.0 → v7.0 repo restructure: flatten `adna/.adna/` → `.adna/`, remove the workspace-root symlink, optionally update remote URL after the GitHub rename, propagate skill changes. Companion to [[adr_006_github_repo_rename_to_adna.md|ADR-006]] + [[adr_007_outer_adna_claude_md_disposition.md|ADR-007]].

This runbook is a **draft** — M03 may refine sequencing or add operator-specific paths. Stage 1's locked sequencing decision (M08a ships *before* M03) means this runbook is what M08a's per-vault coordination memos cite.

---

## §0 Operator personas this runbook serves

| Persona | Starting state | Target state | Primary path |
|---|---|---|---|
| **Fresh-operator** | No `~/lattice/` workspace yet | Working `~/lattice/.adna/` direct-clone + workspace router | §3 (Fresh bootstrap) |
| **Existing-operator-Stanley** | `~/lattice/` with `adna/` two-level + `.adna -> adna/.adna` symlink + active `.aDNA` projects | `~/lattice/.adna/` direct-clone + same `.aDNA` projects unaffected | §2 Path A (in-place rename) |
| **Existing-operator-external** (Wilhelm Foundation, TAPP, Super League) | Local clone of own forked `.aDNA` vaults, may or may not have a `.adna/` symlink locally | Same as above | §2 Path A or §2 Path B (clean re-clone) per preference |
| **Vault-only operator** (no template clone) | Has `.aDNA` project clones; never cloned the template repo | No-op for repo flatten; only adopts skill changes when they pull their vault's `.adna/` next | §4 (skill propagation only) |

The runbook covers all four personas. Each operator follows one path; M08a coordination memos route each external operator to their applicable path.

---

## §1 Pre-flight checks (every operator, before any migration)

Run the checks below **before** any migration step. Abort + ask if any check fails.

| Check | Command | Pass criterion |
|---|---|---|
| Template repo present (existing-operator only) | `ls -la ~/lattice/adna/` | Directory exists with `.adna/` subdir + `.git/` |
| Template repo clean | `git -C ~/lattice/adna status --porcelain` | Empty output (no uncommitted changes) |
| Template repo on `main` | `git -C ~/lattice/adna branch --show-current` | Outputs `main` |
| Template repo synced | `git -C ~/lattice/adna pull --ff-only` | Returns `Already up to date` (or fast-forwards cleanly) |
| Symlink intact (existing-operator only) | `readlink ~/lattice/.adna` | Outputs `adna/.adna` |
| Symlink target valid | `test -f ~/lattice/.adna/MANIFEST.md && grep '^role: template' ~/lattice/.adna/MANIFEST.md` | Both succeed |
| No active sessions in template | `ls ~/lattice/adna/.adna/how/sessions/active/ \| grep -v .gitkeep` | Empty |
| All projects committed | `for d in ~/lattice/*.aDNA; do git -C "$d" status --porcelain; done` | All empty (commit any in-flight work before flatten — projects are unaffected by the flatten itself, but a clean tree is the right starting state) |
| Backup exists | `ls ~/.lattice_backups/` (if you keep one) or `cp -a ~/lattice ~/lattice.pre-v7-backup` | Backup directory exists |

If any check fails, **stop**: fix the failing check before continuing.

---

## §2 Existing-operator migration paths

Choose **one** path. **Path A** is faster and preserves local git state; **Path B** is the cleanest reset; **Path C** is for operators who want to keep both old and new during a verification window.

### Path A — In-place rename (fastest; recommended for Stanley)

Preserves the existing `.git/` history of the template repo + the existing `origin` remote (which auto-redirects post-rename per ADR-006).

```sh
# Step 1: remove the symlink (no longer needed post-flatten)
cd ~/lattice
rm .adna

# Step 2: rename adna/ → .adna/ (the directory itself becomes the clone of the renamed repo)
mv adna .adna

# Step 3: confirm the .git/ moved cleanly
git -C ~/lattice/.adna status
# Expected: clean working tree, branch main, ahead/behind by 0 commits

# Step 4 (REQUIRED — M03 actually performs the flatten inside the repo):
# At this point the repo still has the OLD structure (adna/.adna/* nested inside what is now .adna/.adna/).
# M03's flatten work is committed UPSTREAM by Rosetta (the next git pull lands the flat structure).
# Sync to land the flatten:
cd ~/lattice/.adna
git pull --ff-only
# After this pull, .adna/ contains the flattened structure directly:
#   .adna/CLAUDE.md, .adna/MANIFEST.md, .adna/STATE.md, .adna/AGENTS.md, .adna/CHANGELOG.md, .adna/CONTRIBUTING.md, .adna/adna.md, .adna/README.md, .adna/LICENSE
#   .adna/how/, .adna/what/, .adna/who/
#   .adna/.github/ (with workflows/ + deploy_manifest.yaml moved here)
#   .adna/setup.sh, .adna/prepare_for_onboarding.sh
#   .adna/how/templates/template_workspace_claude.md (NEW per ADR-007)

# Step 5 (OPTIONAL — only if you want the new repo URL on your existing clone per ADR-006):
git remote set-url origin https://github.com/LatticeProtocol/adna.git
git remote -v
# Expected: origin → https://github.com/LatticeProtocol/adna.git (fetch + push)
# (Optional because GitHub redirects keep the old URL working indefinitely.)

# Step 6: verify symlink is gone + .adna/ is real directory
ls -la ~/lattice/.adna  # should be a directory, NOT a symlink
test -d ~/lattice/.adna -a ! -L ~/lattice/.adna && echo "OK: real directory" || echo "FAIL"

# Step 7: verify template marker
grep '^role: template' ~/lattice/.adna/MANIFEST.md
# Expected: role: template
```

**Total time**: ~30 seconds.

### Path B — Clean re-clone (most pristine; recommended for first external-partner adoption)

Discards local git state; re-clones from the renamed repo URL.

```sh
# Step 1: remove old symlink + old repo directory
cd ~/lattice
rm .adna
rm -rf adna  # WARNING: this deletes ~/lattice/adna/.git/ — ensure no uncommitted work there first
# (Pre-flight check from §1 confirmed clean tree, but doublecheck if uneasy)

# Step 2: clone the renamed repo directly as .adna/
git clone https://github.com/LatticeProtocol/adna.git .adna
# This is the canonical post-v7.0 fresh-install command.

# Step 3: verify
ls -la ~/lattice/.adna
test -d ~/lattice/.adna && grep '^role: template' ~/lattice/.adna/MANIFEST.md
# Both should succeed.
```

**Total time**: ~10–60 seconds (depends on network).

### Path C — Parallel-keep (verification window; uncommon)

Keep both old and new in parallel for a verification window (operators who want to compare before fully cutting over).

```sh
# Step 1: keep ~/lattice/adna/ in place; rename the symlink to a backup
cd ~/lattice
mv .adna .adna.pre-v7  # symlink renamed (still points at adna/.adna)

# Step 2: clone the new flat repo as .adna
git clone https://github.com/LatticeProtocol/adna.git .adna

# Step 3: compare
diff -r ~/lattice/.adna.pre-v7/ ~/lattice/.adna/  # expect: structural differences (flatten took effect)
# Spot-check a few specific files for content equivalence:
diff ~/lattice/.adna.pre-v7/CLAUDE.md ~/lattice/.adna/CLAUDE.md  # expect: identical or trivial diff

# Step 4: when satisfied, delete the old:
rm ~/lattice/.adna.pre-v7  # removes only the renamed symlink
rm -rf ~/lattice/adna       # removes the old two-level repo (verify clean tree first)
```

**Total time**: variable — depends on operator's verification effort.

---

## §3 Fresh-operator bootstrap path

For operators with **no** existing `~/lattice/` workspace yet.

```sh
# Step 1: create the workspace
mkdir -p ~/lattice
cd ~/lattice

# Step 2: clone the template repo as .adna
git clone https://github.com/LatticeProtocol/adna.git .adna

# Step 3: install workspace router from template (per ADR-007 — NEW path)
cp .adna/how/templates/template_workspace_claude.md CLAUDE.md
# CUSTOMIZE: edit CLAUDE.md to reflect your installed projects (initially empty).

# Step 4 (optional): run the setup script for Obsidian plugins/themes
bash .adna/setup.sh

# Step 5: verify
ls -la ~/lattice/
# Expected:
#   .adna/        ← cloned template (real directory, not symlink)
#   CLAUDE.md     ← workspace router (your customized copy)
test -d ~/lattice/.adna && test -f ~/lattice/CLAUDE.md && echo "OK"
```

**Total time**: ~30 seconds + Obsidian setup time if running Step 4.

**Project creation** is then per `skill_project_fork.md` (next session opens in `~/lattice/` and the operator runs project creation as usual).

---

## §4 Vault-only operator (skill propagation only)

For operators who never cloned the template repo but have `.aDNA/` project vaults that carry copies of template skills.

**Nothing in the repo flatten affects vault content directly.** Skill propagation happens organically when each vault's operator decides to refresh skill copies from the template — this is a separate, opt-in flow not gated by M03.

For operators who want the new skills (M05's `skill_git_remote_setup`, `skill_deploy`, the renamed `skill_lattice_publish` / new `skill_vault_publish`):

```sh
# Step 1: ensure the template is cloned somewhere accessible
# (if not, follow §3 fresh-operator path through Step 2)

# Step 2: copy desired skills into the vault's how/skills/
cp ~/lattice/.adna/how/skills/skill_git_remote_setup.md ~/lattice/<your-vault>.aDNA/how/skills/
cp ~/lattice/.adna/how/skills/skill_deploy.md          ~/lattice/<your-vault>.aDNA/how/skills/
# Replace the existing skill_lattice_publish.md if M05 renames it; M05 ADR resolves the naming.

# Step 3: commit per usual vault flow
cd ~/lattice/<your-vault>.aDNA
git add how/skills/
git commit -m "adopt aDNA v7.0 skill set: skill_git_remote_setup, skill_deploy, ..."
git push
```

**Note**: vaults that have **no `how/skills/` directory** (today: only `wga.aDNA` per [[m01_obj0_ecosystem_matrix.md|Obj 0]] §1 Finding F-2) need `how/skills/` + an `AGENTS.md` created first. M07 vault audit may produce a separate runbook for this; out of scope for M03.

---

## §5 Post-migration verification (every operator)

After completing §2, §3, or §4, run the verification harness below. **All checks must pass.** If any fail, follow the rollback in §7.

| # | Check | Command | Pass criterion |
|---|---|---|---|
| V1 | `.adna/` is a real directory, not a symlink | `test -d ~/lattice/.adna -a ! -L ~/lattice/.adna && echo OK` | `OK` printed |
| V2 | `.adna/MANIFEST.md` has `role: template` | `grep '^role: template' ~/lattice/.adna/MANIFEST.md` | `role: template` printed |
| V3 | `adna/` (old top-level wrapper) does not exist | `! test -d ~/lattice/adna && echo OK` | `OK` printed |
| V4 | `.adna/` git repo is clean + on `main` + tracking origin | `git -C ~/lattice/.adna status` | `On branch main`, `Your branch is up to date with 'origin/main'`, `nothing to commit` |
| V5 | `.adna/CLAUDE.md` exists at the new flat location (not at `.adna/.adna/`) | `test -f ~/lattice/.adna/CLAUDE.md && ! test -f ~/lattice/.adna/.adna/CLAUDE.md && echo OK` | `OK` printed |
| V6 | `.adna/CHANGELOG.md` shows v7.0 entry | `head -50 ~/lattice/.adna/CHANGELOG.md \| grep -F '[v7.0]'` | Returns the v7.0 heading line |
| V7 | `.github/deploy_manifest.yaml` is in its new location | `test -f ~/lattice/.adna/.github/deploy_manifest.yaml && ! test -f ~/lattice/.adna/deploy_manifest.yaml && echo OK` | `OK` printed |
| V8 | New template (workspace CLAUDE.md) exists | `test -f ~/lattice/.adna/how/templates/template_workspace_claude.md && echo OK` | `OK` printed |
| V9 | `skill_workspace_init.md` is formally retired (status field) | `grep '^status:' ~/lattice/.adna/how/skills/skill_workspace_init.md` | Outputs `status: retired` (or whatever M03 chose; was `active` pre-v7) |
| V10 | `skill_workspace_upgrade.md` no longer creates the symlink | `! grep -F 'ln -s' ~/lattice/.adna/how/skills/skill_workspace_upgrade.md` | Returns 0 (grep finds nothing) |
| V11 | Project vaults intact and operable | `ls ~/lattice/*.aDNA/CLAUDE.md \| wc -l` | Count matches your project count (e.g., 19 for Stanley) |
| V12 | Workspace router (`~/lattice/CLAUDE.md`) loads correctly | Open `claude` from `~/lattice/`, observe greeting | Berthier (workspace persona) greets correctly + lists projects |
| V13 | Project router (any `.aDNA/CLAUDE.md`) loads correctly | Open `claude` from any `.aDNA/`, observe greeting | Project persona (Rosetta / Daedalus / etc.) greets correctly |

If V1–V11 pass but V12 or V13 fail, the agent-side context is the issue — re-run startup and verify CLAUDE.md auto-loads.

---

## §6 `skill_project_fork.md` compatibility validation (post-flatten regression test)

Per mission §Obj 2 §Compatibility validation: "Before closing M03, test that `skill_project_fork` correctly forks from the restructured `.adna/` and that the resulting vault has no leaked `.git/`, `.github/`, `README.md`, or `deploy_manifest.yaml`."

```sh
# Test fork in a sandbox
cd /tmp
mkdir -p sandbox_v7
cd sandbox_v7

# Clone the v7.0 template
git clone https://github.com/LatticeProtocol/adna.git .adna

# Author a minimal CLAUDE.md so skill_project_fork can run
cp .adna/how/templates/template_workspace_claude.md CLAUDE.md

# Run a fork (interactively or via the skill's procedure)
# The skill copies .adna/* into <project_name>.aDNA/, strips role:template, sets agent_init markers
# Skill manual invocation pattern:
SAFE_NAME=v7_fork_test
cp -r .adna/ "${SAFE_NAME}.aDNA/"
cd "${SAFE_NAME}.aDNA/"
rm -rf .obsidian/plugins/ .obsidian/themes/
rm -f .obsidian/workspace.json .obsidian/graph.json
git init >/dev/null

# Strip role: template (skill_project_fork Step 4)
sed -i.bak 's/^role: template$//' MANIFEST.md && rm MANIFEST.md.bak

# REGRESSION CHECKS (must all pass):
test ! -d .git/refs/heads/main || echo "FAIL R1: residual git history from template"
test ! -d .github/                                      && echo "PASS R2: no .github/ leak"           || echo "FAIL R2"
test ! -f README.md                                     && echo "PASS R3: no README.md leak"          || echo "FAIL R3"
test ! -f LICENSE                                       && echo "PASS R4: no LICENSE leak"            || echo "FAIL R4"
test ! -f setup.sh                                      && echo "PASS R5: no setup.sh leak"           || echo "FAIL R5"
test ! -f prepare_for_onboarding.sh                     && echo "PASS R6: no prepare_for_onboarding.sh leak" || echo "FAIL R6"
test ! -f deploy_manifest.yaml                          && echo "PASS R7: no deploy_manifest leak"    || echo "FAIL R7"
test -d what -a -d how -a -d who                        && echo "PASS R8: triad present"              || echo "FAIL R8"
test -f CLAUDE.md -a -f MANIFEST.md -a -f STATE.md      && echo "PASS R9: governance present"         || echo "FAIL R9"
! grep -q '^role: template$' MANIFEST.md                && echo "PASS R10: role:template stripped"    || echo "FAIL R10"
test -f how/templates/template_workspace_claude.md      && echo "PASS R11: workspace template present" || echo "FAIL R11"

# Cleanup
cd /tmp && rm -rf sandbox_v7
```

**Note on R2-R7**: The current `skill_project_fork.md` (v6.0) does not exclude `.github/`, `README.md`, `LICENSE`, `setup.sh`, `prepare_for_onboarding.sh`, or `deploy_manifest.yaml` from the fork. **Pre-v7.0**, those files lived in `adna/` (outer wrapper), so they didn't show up in `.adna/` and weren't copied. **Post-flatten**, those files live alongside the template content in `.adna/` itself — so `skill_project_fork.md` MUST add an explicit exclusion list for them. M03 must update `skill_project_fork.md` Step 3 to:

```sh
# After cp -r, remove repo-level files (per ADR-007 + M03 update):
cd <project_name>.aDNA/
rm -rf .git
rm -rf .github
rm -f README.md LICENSE setup.sh prepare_for_onboarding.sh
# (deploy_manifest.yaml is inside .github/ post-M03, so removed by `rm -rf .github` above)
```

This is the **specific change** to `skill_project_fork.md` that R2-R7 verify.

---

## §7 Rollback procedure

If post-migration verification fails or operations break:

### Path A rollback (in-place rename — reversible)

```sh
cd ~/lattice
# Restore the old structure:
mv .adna adna   # rename back
ln -s adna/.adna .adna   # restore symlink
# Verify:
readlink .adna   # should output adna/.adna
test -L .adna && echo OK
```

If you also pulled the M03 flatten commit, you'll need to revert it locally:
```sh
cd ~/lattice/adna
git log -1 --oneline   # find the flatten commit
git revert <flatten-commit-sha>
# OR: git reset --hard <pre-flatten-commit-sha>   # destructive; only if you know what you're doing
```

### Path B rollback (clean re-clone — restore from backup)

```sh
# If you made the §1 backup:
rm -rf ~/lattice
mv ~/lattice.pre-v7-backup ~/lattice

# Or re-clone the OLD repo URL (before the GitHub rename was performed):
# (only works if the GitHub rename is also reversible — which it is, but file an issue with LatticeProtocol first)
```

### Path C rollback (parallel-keep)

Trivial: just delete `~/lattice/.adna/` and rename the backup symlink:
```sh
cd ~/lattice
rm -rf .adna
mv .adna.pre-v7 .adna
```

### Failure to roll back

If you cannot restore the previous state, **post in `~/lattice/aDNA.aDNA/who/coordination/`** with the failing verification check and current state — Rosetta (or M03 author) will diagnose. The aDNA.aDNA campaign vault is the canonical channel for this campaign's incidents per ADR-004.

---

## §8 Sequencing notes for M03

This runbook is the *operator-facing* runbook. M03's own mission file will document the **upstream** work that produces the migration:

1. **M03 prerequisites** — confirm ADR-006 + ADR-007 ratified to `accepted`; confirm M08a upgrade guide live.
2. **Stage A: GitHub rename** (one-time operator UI action) — `Agentic-DNA` → `adna`.
3. **Stage B: Repo flatten (upstream commits)** — the actual `git mv adna/.adna/* adna/`, `git mv adna/CLAUDE.md adna/.adna/how/templates/template_workspace_claude.md` (per ADR-007), `git mv adna/deploy_manifest.yaml adna/.github/deploy_manifest.yaml`, `git rm -rf adna/.adna/`. Author the v7.0 CHANGELOG entry. Tag `v7.0`. Push to GitHub.
4. **Stage C: Skill updates** — `skill_project_fork.md` exclusion list, `skill_workspace_upgrade.md` symlink-step removal + Step 3 alternative for template-based bootstrap, `skill_workspace_init.md` retirement, `skill_onboarding.md` URL audit.
5. **Stage D: Validation** — run §6 regression test in CI; run §5 verification harness on Stanley's local workspace.
6. **Stage E: Operator notifications** — coordinate with M08a propagation receipts.

M03 mission file authors the per-stage objective list when M03 opens.

---

## §9 Cross-references

| Reference | Direction |
|---|---|
| [[../mission_adna_infra_planning_01.md|mission_adna_infra_planning_01.md]] §Obj 2 §a-e | spec → this doc |
| [[adr_006_github_repo_rename_to_adna.md|ADR-006]] | governs §2 Step 5 + §3 Step 2 + §6 Step 1 + §8 Stage A |
| [[adr_007_outer_adna_claude_md_disposition.md|ADR-007]] | governs §3 Step 3 + §6 R11 + §8 Stage B |
| [[m01_obj0_ecosystem_matrix.md|m01_obj0_ecosystem_matrix.md]] | persona/path mapping (external operators in §0) |
| [[m01_obj1_current_state.md|m01_obj1_current_state.md]] §1 + §2 | source for the structural-change inventory |
| `adna/.adna/how/skills/skill_project_fork.md` | target of M03 update — see §6 R2-R7 |
| `adna/.adna/how/skills/skill_workspace_upgrade.md` | target of M03 update — see §5 V10 |
| `adna/.adna/how/skills/skill_workspace_init.md` | target of M03 retirement — see §5 V9 |

---

**Status**: Complete. Awaits M03 ratification of ADR-006 + ADR-007; awaits M08a publication of the upgrade guide; then M03 executes per §8.
