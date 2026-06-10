---
type: artifact
artifact_type: skill_spec
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_planning_01
objective: 4
target_mission: M05  # M05 ships skill_git_remote_setup.md from this spec
target_skill: skill_git_remote_setup.md
created: 2026-05-08
updated: 2026-05-08
status: complete
last_edited_by: agent_stanley
tags: [artifact, mission_deliverable, m01, obj4, skill_spec, git_remote, first_time_setup, naming_convention, gh_cli, m05]
related_artifacts:
  - m01_obj4_publish_naming_adr.md
  - skill_lattice_publish_rewrite_spec.md
  - pre_push_hook_spec.md
  - coord_2026_05_08_publish_rewrite.md
  - m01_obj0_ecosystem_matrix.md   # source: 4 grandfathered hyphen-flat names + 7 no-remote vaults
related_decisions:
  - adr_006_github_repo_rename_to_adna.md   # the template repo's own URL slug
  # ADR-009 (naming convention) is forward-referenced — drafted by M07; this skill lints
  # against it once ADR-009 is accepted.
---

# M01 Obj 4 — `skill_git_remote_setup` Spec (M05-bound)

> **Deliverable 8 of M01** (per [[../mission_adna_infra_planning_01.md|mission §Deliverables]] row 8). Specifies the new `skill_git_remote_setup.md` for first-time GitHub remote configuration. Sibling to [[skill_lattice_publish_rewrite_spec.md|skill_lattice_publish_rewrite_spec.md]] (publish-skill family) and [[pre_push_hook_spec.md|pre_push_hook_spec.md]] (sanitization hook). The skill is called once per vault — by an operator standing up a new GitHub remote.

The skill is the precondition for [[skill_lattice_publish_rewrite_spec.md|skill_vault_publish.md]] — `skill_vault_publish` Step 1 fails if `origin` is missing and points the operator here.

---

## §1 Scope

This skill performs **first-time** remote configuration. It is **not** for:
- Updating an existing remote URL (use `git remote set-url origin <new-url>` directly).
- Adding a second remote (e.g., `upstream`) — out of scope; operator runs `git remote add upstream ...` directly.
- Renaming an existing repo on GitHub (use `gh repo rename` or the GitHub UI directly).

If `origin` already exists, the skill exits cleanly with a message and does nothing. This makes it idempotent — safe to re-run.

---

## §2 Frontmatter (target form)

```yaml
---
type: skill
skill_type: agent
created: <M05-date>
updated: <M05-date>
status: active
category: development
trigger: When a vault has no GitHub remote configured and the operator wants to publish it for the first time
last_edited_by: agent_<m05-author>
tags: [skill, git, remote, github, first_time_setup, naming_convention, v7_0]
requirements:
  tools: [git, gh CLI authenticated to the target org]
  context: [m01_obj0_ecosystem_matrix.md (for naming-convention exception list)]
  permissions: [GitHub `repo:create` scope on the gh token; GitHub org membership if creating under an org]
---
```

---

## §3 Trigger

Invoke when:
- A vault was created (typically via [[../../../../how/skills/skill_project_fork.md|skill_project_fork]]) and the operator wants to publish it to GitHub.
- A vault was cloned without a remote (rare; usually means the vault was cloned by directory copy rather than `git clone`).
- An audit (e.g., M07 §Obj 7 (b.1) naming-convention check) flagged a vault as remoteless and the operator wants to add one.

**Pre-requisites**:
- `gh` CLI is installed and authenticated to the target org or user account (verify with `gh auth status`).
- Git working tree has at least one commit (the skill pushes existing history; it does not initialize the repo).
- The vault directory name follows the naming convention `<name>.aDNA/` (skill warns if not — see §6).

---

## §4 Parameters

| Parameter | Type | Required | Default | Description |
|---|---|---|---|---|
| `org` | string | Yes | — | GitHub organization or user (e.g., `LatticeProtocol`). |
| `repo_name` | string | No | derived | If omitted: derived from the vault directory name per the naming convention (`<name>.aDNA/` → `<name>.aDNA`). Override only if the operator wants a non-conformant name (warns). |
| `description` | string | No | — | GitHub repo description. Recommended (improves discoverability). |
| `homepage` | URL | No | — | Optional homepage URL (e.g., a docs site). |
| `visibility` | enum | No | `public` | `public` or `private`. Default `public` matches the open-source norm for aDNA vaults. |
| `branch` | string | No | `main` | Default branch to push. The skill renames the current branch to this name before pushing if needed. |
| `dry_run` | bool | No | false | Preview commands without executing. |

---

## §5 Requirements

### Tools/APIs
- `git` (any modern version with `branch -M`, `remote add`, `push -u`).
- `gh` CLI (used for `gh auth status`, `gh repo create`).

### Context Files
- [[m01_obj0_ecosystem_matrix.md|m01_obj0_ecosystem_matrix.md]] §1 — the four grandfathered hyphen-flat names (`science-stanley-adna`, `wga-adna`, `context-commons-adna`, `LAStartupLattice`) and the LP path-style exception. The skill cross-references this list before warning on naming drift.

### Permissions
- `gh` token must have `repo:create` scope on the target org (verify via `gh auth status`).
- If pushing to an org repo, the operator must be a member with appropriate permissions.

---

## §6 Implementation

### Step 1: Idempotency check

```bash
if git remote -v | grep -q '^origin'; then
  echo "INFO: origin already configured:"
  git remote -v | grep '^origin'
  echo "INFO: skill_git_remote_setup is a no-op when origin exists."
  echo "INFO: To change the origin URL, use 'git remote set-url origin <new-url>' directly."
  exit 0
fi
```

### Step 2: Derive `repo_name` and lint against the naming convention

```bash
# Derive default repo_name from the vault directory name
vault_dir=$(basename "$PWD")  # e.g., "Spacemacs.aDNA"

if [[ -z "$repo_name" ]]; then
  repo_name="$vault_dir"
fi

# Lint: warn if the name doesn't follow <name>.aDNA convention
# Grandfathered exceptions list pulled from m01_obj0_ecosystem_matrix.md §1
GRANDFATHERED=("science-stanley-adna" "wga-adna" "context-commons-adna" "LAStartupLattice")

if [[ "$repo_name" != *.aDNA ]] && \
   ! printf '%s\n' "${GRANDFATHERED[@]}" | grep -qx "$repo_name"; then
  echo "WARNING: repo_name '$repo_name' does not follow <name>.aDNA convention."
  echo "WARNING: ADR-009 (naming convention) recommends snake_case <name>.aDNA form."
  echo "WARNING: Grandfathered exceptions: ${GRANDFATHERED[*]}"
  echo "WARNING: Override with --repo-name if intentional, or rename the vault directory."
  read -p "Continue with non-conformant name? [y/N] " yn
  [[ "$yn" =~ ^[Yy]$ ]] || exit 1
fi
```

> **Note**: ADR-009 is **drafted by M07** (per [[../../../campaign_adna_v2_infrastructure.md|campaign master]] amendment). Until ADR-009 is `accepted`, the lint above is informational only. M05 ships the skill with the lint commented-out or controlled by a `--strict` flag; M07 flips it to default-on when ADR-009 lands. **Action item for M05**: add a `# TODO(M07/ADR-009): enable lint-default-on after ratification` comment.

### Step 3: Verify `gh` authentication

```bash
gh auth status >/dev/null 2>&1 || {
  echo "ERROR: gh CLI not authenticated. Run 'gh auth login' first."
  exit 1
}
```

### Step 4: Create the GitHub repository

```bash
gh_args=(--description "$description")
[[ -n "$homepage" ]] && gh_args+=(--homepage "$homepage")
[[ "$visibility" == "private" ]] && gh_args+=(--private) || gh_args+=(--public)

gh repo create "$org/$repo_name" "${gh_args[@]}"
```

`gh repo create` produces an empty remote repo (no auto-init); we'll push our local history into it.

### Step 5: Add the remote

```bash
remote_url="https://github.com/$org/$repo_name.git"
git remote add origin "$remote_url"
echo "INFO: origin set to $remote_url"
```

### Step 6: Rename the local branch if needed

```bash
current_branch=$(git rev-parse --abbrev-ref HEAD)
if [[ "$current_branch" != "$branch" ]]; then
  echo "INFO: renaming branch '$current_branch' → '$branch'"
  git branch -M "$branch"
fi
```

### Step 7: Initial push

```bash
git push -u origin "$branch" --tags
```

`-u` sets the upstream so subsequent `git pull` / `git push` work without explicit refs. `--tags` pushes any pre-existing local tags so the remote starts in sync.

### Step 8: Record receipt

Write to `who/peers/published/<UTC-timestamp>_remote_setup.md`:

```yaml
---
type: publish_receipt
receipt_subtype: remote_setup
created_at: <ISO-8601 UTC>
remote_url: https://github.com/<org>/<repo_name>.git
visibility: <public|private>
branch: <branch>
operator: <git config user.email>
naming_lint: <pass|grandfathered:<name>|override>
---

# Remote setup receipt — <date>

Configured `origin` for vault `<vault-name>`:
- Remote URL: <URL>
- Visibility: <visibility>
- Default branch: <branch>
- Initial push: <commit-short> + <N> tags

Naming convention check: <pass|grandfathered exception|operator override>.

Next: run `skill_deploy` to install the pre-push hook before the first `skill_vault_publish` run.
```

The receipt is committed in a follow-up `git commit` so the audit trail persists.

---

## §7 Outputs

| Output | Type | Description |
|---|---|---|
| GitHub repository | Remote | New empty-then-populated repo at `https://github.com/<org>/<repo_name>` |
| Local origin config | git config | `origin` remote pointing at the new URL |
| Default branch | Remote main | `<branch>` set as the remote's default |
| Receipt | `who/peers/published/<UTC>_remote_setup.md` | Audit record |

---

## §8 Error Handling

| Error | Cause | Resolution |
|---|---|---|
| `origin already configured` | Idempotency check (Step 1) — not an error, INFO only | None — skill exits cleanly |
| `gh CLI not authenticated` | `gh auth status` fails (Step 3) | Run `gh auth login`; retry |
| `name conflict on GitHub` | `gh repo create` fails — repo already exists | Either pick a different `repo_name` (use `--repo-name`) or — if the existing repo IS the intended remote — run `git remote add origin` directly with the existing URL and skip Steps 4–5 |
| `permission denied creating repo` | `gh` token lacks `repo:create` on the org | Re-auth `gh` with the right scopes; or ask the org admin to create the repo and provide the URL |
| `nothing to push (no commits)` | First-ever push and the vault has no commits yet | Make at least one commit (`git commit -m "Initial vault scaffold"`) before re-running |
| `non-fast-forward push rejected` | The remote was created with `auto-init` and has unrelated history | Delete the remote (`gh repo delete`) and re-run, OR force-push (`git push -u origin <branch> --force`) — only if you're sure no one else has cloned the empty remote |
| `naming-convention lint refused` | Operator answered N to the lint prompt (Step 2) | Either rename the vault directory to follow `<name>.aDNA/` or re-run with explicit `--repo-name` to confirm intent |

---

## §9 Special cases — the template repo and grandfathered vaults

### The aDNA template repo itself

Per [[adr_006_github_repo_rename_to_adna.md|ADR-006]], the template repo is `LatticeProtocol/adna` (lowercase, no `.aDNA` suffix) — **not** `<name>.aDNA` form. This is intentional: the template repo IS the convention's source, not a consumer of it. ADR-009 documents this as the canonical exception ("the template repo = `<base>.git` where `<base>` is the standard's own short name; consumer vaults = `<name>.aDNA.git`").

**Skill behavior for the template repo**: not applicable — the template repo's remote is configured upstream by `LatticeProtocol`. Operators of the template repo do not run this skill.

### The four grandfathered hyphen-flat vaults

Per [[m01_obj0_ecosystem_matrix.md|m01_obj0_ecosystem_matrix.md]] §1: `science-stanley-adna`, `wga-adna`, `context-commons-adna`, `LAStartupLattice` already exist with non-conformant names. The skill warns and proceeds (after operator confirmation). Renames are **operator-discretionary** — handled by the v3 successor campaign at the operator's pace, not forced by v7.0.

### The seven no-remote vaults

The skill's primary use case. After M03 ships the v7.0 template, operators of these seven vaults can run `skill_git_remote_setup` once to configure GitHub remotes that follow the convention out of the box. Coordination memos (M08a) cite this skill as the recommended onboarding step.

### The LP path-style exception

LPWhitepaper.aDNA's remote currently points at a local filesystem path (`/Users/stanley/aDNA/whitepaper`). This is a Stanley-side artifact of LPWhitepaper's separate-repo-but-co-located history. The skill does not migrate this — the operator decides whether to re-anchor at GitHub during v3 successor execution. The skill warns if it detects an existing non-URL remote and recommends `git remote set-url` directly rather than running this skill.

---

## §10 Self-reference (Standing Order #2)

The skill enforces the convention M07's ADR-009 will codify. Until ADR-009 is `accepted`, the lint is informational; once accepted, the lint becomes default-on. This staging — *informational → enforced* — is itself a v7.0 demonstration of how convention codification works in this campaign: the convention is built, then the tooling enforces it, then the ecosystem migrates at its own pace.

The four grandfathered hyphen-flat names are documented in this skill's source — every operator running it sees the exception list and learns the convention by encountering its boundary cases. The convention is taught by the tool that enforces it.

---

## §11 Forward-references

- **M03** consumes the new `skill_workspace_upgrade.md` integration (per [[adr_007_outer_adna_claude_md_disposition.md|ADR-007]] §Workflow integration) — adds a step pointing operators at this skill if they want to publish their workspace's vaults.
- **M05** ships this skill from the spec.
- **M07** flips the lint to default-on after ADR-009 is `accepted`.
- **M08a** references this skill in the per-vault coordination memos for the seven no-remote vaults.
- **`campaign_adna_v3_ecosystem_compliance` M03-EC** ("git remote setup" mission) — runs this skill once per opted-in ecosystem vault.

Status: **spec, ready for M05**.
