---
type: artifact
artifact_type: skill_spec
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_planning_01
objective: 4
target_mission: M05  # M05 ships the skill files
target_skills:
  - skill_lattice_publish.md  # KEEP (existing — light v7.0 edits only)
  - skill_vault_publish.md    # CREATE (new — bulk of this spec)
  - skill_publish_tarball.md  # CREATE (new — sketched here; full spec optional in M05)
  - skill_deploy.md           # CREATE (new — sketched here; full spec optional in M05)
created: 2026-05-08
updated: 2026-05-08
status: complete
last_edited_by: agent_stanley
tags: [artifact, mission_deliverable, m01, obj4, skill_spec, publish, vault_publish, lattice_publish, m05]
related_artifacts:
  - m01_obj4_publish_naming_adr.md          # the naming recommendation that anchors this spec
  - skill_git_remote_setup_spec.md          # sibling spec (this session)
  - pre_push_hook_spec.md                   # sibling spec (this session)
  - coord_2026_05_08_publish_rewrite.md     # Daedalus coord memo (this session)
  - m01_obj1_current_state.md               # source: skill inventory + Issue I-6
related_decisions:
  - adr_006_github_repo_rename_to_adna.md   # informs new-clone-URL references
  - adr_007_outer_adna_claude_md_disposition.md
  # ADR-010 (formal publish-naming ADR) is forward-referenced — drafted by M05 from m01_obj4_publish_naming_adr.md
---

# M01 Obj 4 — Publish-Skill Family Spec (M05-bound)

> **Deliverable 7 of M01** (per [[../mission_adna_infra_planning_01.md|mission §Deliverables]] row 7). The mission spec calls this "*`skill_lattice_publish` rewrite spec*"; the actual content is a **family spec** covering the four publish-flavored skills the v7.0 template ships, per [[m01_obj4_publish_naming_adr.md|the publish-naming recommendation]] this session also produced. The filename retains "rewrite" to match the mission deliverables row; the body documents the resolution.

This spec is paired with [[skill_git_remote_setup_spec.md|skill_git_remote_setup_spec.md]] (the new first-time-remote skill, deliverable 8) and [[pre_push_hook_spec.md|pre_push_hook_spec.md]] (the pre-push sanitization hook, deliverable 9). The Daedalus cross-graph coord memo at [[../../../../who/coordination/coord_2026_05_08_publish_rewrite.md|coord_2026_05_08_publish_rewrite.md]] (and its [[../../../../../Spacemacs.aDNA/who/coordination/coord_2026_05_08_adna_publish_rewrite.md|Spacemacs mirror]]) confirms the design Daedalus expected matches what M05 will ship — and doubles as the campaign's first cross-graph airlock-pattern exercise per the 2026-05-08 amendment.

---

## §1 The four-skill v7.0 publish family

| Skill | Status | What it does | First introduced |
|---|---|---|---|
| `skill_lattice_publish.md` | **Existing — light edits** | Publishes a `.lattice.yaml` *object* to a registry via `latlab lattice publish`. Federation-readiness checks; `pull` and `compose` operations. | Pre-v6.0; current in template |
| `skill_vault_publish.md` | **NEW — full content** | Publishes a *vault* to its GitHub remote via `git push`. Sanitization runs as a pre-push hook. Optionally creates a milestone tag. | v7.0 |
| `skill_git_remote_setup.md` | **NEW — full content** | First-time remote configuration: `gh repo create` + `git remote add origin` + initial `git push -u`. Called once per vault. | v7.0 |
| `skill_publish_tarball.md` | **NEW — optional sketch** | Optional offline-shipping tarball generator. For operators who need reproducible offline artifacts independent of GitHub. | v7.0 |
| `skill_deploy.md` | **NEW — installer skill** | Installs the pre-push sanitization hook to `.git/hooks/pre-push`. Idempotent; runs on every deploy/upgrade cycle. | v7.0 |

The two skills *not* in this spec — `skill_publish_tarball.md` and `skill_deploy.md` — are sketched in §6 with deferred details. M05 may produce full standalone specs for them or absorb them into this artifact at execution time.

---

## §2 `skill_lattice_publish.md` — light v7.0 edits only

### What stays

Everything in [[../../../../../adna/.adna/how/skills/skill_lattice_publish.md|the current `skill_lattice_publish.md`]] (verified 2026-05-08 in S2 S3 reading pass) — frontmatter, Trigger, Parameters, Implementation steps 1–5 (validate / federation-readiness / publish / pull / compose), Outputs, Error Handling, Federation-Ready Examples, Related links. The skill correctly documents `latlab lattice publish/pull/compose` and stays the canonical procedure for that operation.

### What gets light edits in M05

| Edit | Reason | Impact |
|---|---|---|
| **Cross-link to `skill_vault_publish.md`** | A reader landing here from a "how do I publish?" search needs to disambiguate. Add a one-line "Note: this skill publishes a `.lattice.yaml` *object* to a registry. To publish a *vault* to its GitHub remote, see `skill_vault_publish.md`." near the Overview. | One sentence added |
| **Path-drift check** | `cd ~/lattice/lattice-protocol-repo` (Step 1, line 62) — verify this path is still current in v7.0. If not, update. | 0 or 1 path edit |
| **Frontmatter `updated:`** | Bump to the M05 execution date. | One field |
| **Frontmatter `tags:`** | Add `lattice_object` (clarifies what the skill operates on). | One value |
| **`Related` block** | Add `skill_vault_publish.md`, `skill_git_remote_setup.md`, `skill_publish_tarball.md` cross-links. | Three lines |

**No content rewrites.** The latlab-registry behavior is preserved verbatim. M05 verifies `latlab` CLI commands still work as documented (Step 3 `latlab lattice publish ...` etc.) — if any flag changed, that's noted but the skill's *intent* doesn't change.

### Self-reference (Standing Order #2)

The decision to *not* rewrite this skill is itself a v7.0 demonstration of the naming-stability rule M07's ADR-009 codifies. A reader can verify the rule in action: open `skill_lattice_publish.md` post-v7.0 and observe that its scope is unchanged from v6.0 — the v7.0 bump touched it only in cross-links, not in operation. The convention is enforced by the campaign before it is written down.

---

## §3 `skill_vault_publish.md` — NEW skill (full content)

### Frontmatter (target form)

```yaml
---
type: skill
skill_type: agent
created: <M05-date>
updated: <M05-date>
status: active
category: development
trigger: When a vault is ready to publish to its GitHub remote (push commits, optionally tag a milestone)
last_edited_by: agent_<m05-author>
tags: [skill, publish, vault, git, github, sanitization, v7_0]
requirements:
  tools: [git, gh (optional for tag creation)]
  context: [pre_push_hook_spec.md, skill_git_remote_setup.md]
  permissions: [git push to origin]
---
```

### Overview

Publish a vault to its GitHub remote. The vault IS the git repo — `.gitignore` already excludes private files (`what/local/`, `how/local/`, `who/operators/`, `deploy/`, `.publish-clone/`). Sanitization runs automatically as a pre-push hook. The publish operation is a normal `git push`, optionally followed by a milestone tag.

This is **not** the latlab-CLI lattice-object registry skill — that's `skill_lattice_publish.md`. See [[skill_lattice_publish.md|skill_lattice_publish.md]] §Overview if you came here looking to publish a `.lattice.yaml` object.

### Trigger

Invoke when:
- A vault has commits ready to push to its GitHub remote.
- A vault has reached a milestone (e.g., campaign close) and should receive a `vN.M` tag.
- An operator wants to confirm sanitization is current before pushing.

**Pre-requisites**:
- Vault has `origin` configured (run [[skill_git_remote_setup.md|skill_git_remote_setup]] first if not).
- Pre-push hook is installed (run [[skill_deploy.md|skill_deploy]] if `.git/hooks/pre-push` is missing or out of date).
- All intended changes are committed (`git status --porcelain` is clean).

### Parameters

| Parameter | Type | Required | Default | Description |
|---|---|---|---|---|
| `tag` | string | No | — | Milestone tag (e.g., `v7.0`). If set, after the push the skill creates and pushes the tag. |
| `tag_message` | string | No (required if `tag` set) | — | Annotated tag message. |
| `dry_run` | bool | No | false | Preview what would be pushed without actually pushing. Runs hook in informational mode. |
| `force_unsafe` | bool | No | false | Bypass pre-push hook (NOT recommended; logged as a finding). Reserved for hook-debug scenarios only. |

### Requirements

#### Tools/APIs
- `git` (any modern version supporting `--porcelain`, `push --tags`, `hooks/pre-push`).
- `gh` CLI (optional — used only for milestone-tag GitHub release creation in Step 5).

#### Context Files
- [[pre_push_hook_spec.md|pre_push_hook_spec.md]] — the sanitization rules the hook enforces.
- [[skill_git_remote_setup.md|skill_git_remote_setup.md]] — the first-time-setup precondition.

#### Permissions
- `git push` to `origin` (vault-author or organization member with push rights).
- For milestone-release creation: GitHub `releases:write` scope on the `gh` token.

### Implementation

#### Step 1: Pre-flight check

```bash
# Vault must have a configured remote
git remote -v | grep -q '^origin' || {
  echo "ERROR: no origin configured. Run skill_git_remote_setup first."
  exit 1
}

# Pre-push hook must be installed
[[ -x .git/hooks/pre-push ]] || {
  echo "ERROR: pre-push hook missing. Run skill_deploy to install."
  exit 1
}

# Working tree must be clean
[[ -z "$(git status --porcelain)" ]] || {
  echo "ERROR: uncommitted changes. Commit or stash before publishing."
  git status --short
  exit 1
}
```

#### Step 2: (Hook runs automatically on push)

The pre-push hook (`pre-push-sanitize.sh`, see [[pre_push_hook_spec.md|pre_push_hook_spec.md]]) runs LAYER_CONTRACT §4 sanitization scan. Three exit conditions:

| Hook exit | Meaning | Skill action |
|---|---|---|
| **0** | Clean | Push proceeds |
| **1** | FAIL — sanitization violation | Push aborted by git; skill reports the hook output and exits non-zero. Operator must fix violations and re-invoke the skill. |
| **2** | WARN — borderline finding | Hook prints findings; git prompts operator confirmation. The skill surfaces the prompt to the operator. |

If `force_unsafe=true`: skill writes a "force_unsafe push" record to the publish receipt (Step 4) so the audit trail captures the bypass.

#### Step 3: Push commits

```bash
git push origin main
```

Use the current branch name automatically if not `main`:
```bash
git push origin "$(git rev-parse --abbrev-ref HEAD)"
```

#### Step 4: Milestone tag (if `tag` parameter provided)

```bash
git tag -a "$tag" -m "$tag_message"
git push origin "$tag"
```

If `gh` is installed and the operator wants a GitHub release surface:
```bash
gh release create "$tag" --title "$tag" --notes "$tag_message"
```

#### Step 5: Record publish receipt

Write a receipt to the vault's `who/peers/published/` directory (creating the directory if missing):

```
who/peers/published/<UTC-timestamp>.md
```

Receipt content:
```yaml
---
type: publish_receipt
published_at: <ISO-8601 UTC>
commit: <git rev-parse HEAD>
branch: <current branch>
tag: <tag-or-null>
sanitization: hook-verified  # OR "force_unsafe" if bypass used
operator: <git config user.email>
---

# Publish receipt — <date>

Pushed `<commit>` (branch `<branch>`) to `origin`.

<If tag>: Tagged as `<tag>`. <If gh release>: GitHub release created.

<If force_unsafe>: ⚠ Pre-push hook bypassed (`force_unsafe=true`). Reason: <operator-supplied>. Audit follow-up: confirm sanitization-clean state on next normal publish.
```

The receipt is itself committed in a follow-up `git commit` so the audit trail is preserved across clones. (The receipt's own commit does *not* trigger a recursive publish — operators run the skill again later if the receipt commit should also be pushed.)

### Outputs

| Output | Type | Description |
|---|---|---|
| Remote update | git push | `origin/<branch>` advances; tag pushed if requested |
| GitHub release | (optional) gh release | Surfaces `tag` as a Releases-page entry |
| Publish receipt | `who/peers/published/<UTC>.md` | Audit record committed locally |

### Error Handling

| Error | Cause | Resolution |
|---|---|---|
| `no origin configured` | First-time vault | Run `skill_git_remote_setup` first |
| `pre-push hook missing` | Hook never installed or `.git` was re-initialized | Run `skill_deploy` to install the hook |
| `uncommitted changes` | Working tree dirty | Commit or stash before retrying |
| `pre-push hook FAIL` | Sanitization violation | Read hook output; remediate (e.g., remove leaked secrets, untracked private files, accidental binaries); recommit; retry |
| `pre-push hook WARN` | Borderline finding | Operator confirms acceptable; skill surfaces hook prompt; if rejected, treat as FAIL |
| `tag already exists locally` | Operator re-tagging an existing milestone | Delete local tag (`git tag -d <tag>`) and retry, or pick a new tag name |
| `tag already exists on remote` | Race or duplicate publish | Delete remote tag (`git push origin :refs/tags/<tag>`) and retry, or coordinate with co-publishers |

### Related

- [[skill_lattice_publish.md|skill_lattice_publish.md]] — the *separate* lattice-object registry-publish skill (do not confuse).
- [[skill_git_remote_setup.md|skill_git_remote_setup.md]] — first-time remote configuration (precondition for first run).
- [[pre_push_hook_spec.md|pre_push_hook_spec.md]] — the pre-push sanitization hook (enforced automatically).
- [[skill_publish_tarball.md|skill_publish_tarball.md]] — optional offline-tarball alternative.
- [[skill_deploy.md|skill_deploy.md]] — installs the pre-push hook.

---

## §4 Self-reference for `skill_vault_publish.md` (Standing Orders #2 + #7)

The skill demonstrates the v7.0 publish model in its own first run: the receipt at `who/peers/published/<UTC>.md` is itself a vault content file with the standard frontmatter pattern (`type: publish_receipt`, `created`, `last_edited_by`). Future agents reading the receipt see the campaign's content conventions in action — the publish operation produces a content artifact that follows the same rules as every other content file in the vault.

The dual-audience test passes when both:
- A developer reading the spec finds the implementation steps actionable (Step 1 → Step 5 are copy-pasteable bash with explicit exit codes).
- A newcomer reading the Overview understands without prior context why the vault IS the git repo and why a separate `.publish-clone/` is unnecessary.

---

## §5 Migration narrative (per-vault)

Three vault classes for migration to the v7.0 publish model:

| Class | Action | Effort |
|---|---|---|
| **A — Vault has no prior publish ritual** (most aDNA ecosystem vaults) | If the vault wants GitHub publish: run `skill_git_remote_setup` once, then use `skill_vault_publish` going forward. If it doesn't want GitHub publish: ignore the new skills. | Zero migration burden if not adopting; ~5 min if adopting |
| **B — Vault uses the latlab-registry skill** (`skill_lattice_publish.md`) | No change to existing operation. Read the new cross-link to `skill_vault_publish.md` if you also want to GitHub-publish the vault. | Zero migration burden |
| **C — Vault uses an rsync-based vault publisher** (presently only Spacemacs.aDNA's `skill_publish_lattice.md`) | Adopt the v7.0 family: `skill_git_remote_setup` (one-time) + `skill_deploy` (installs hook) + `skill_vault_publish` going forward. Delete the local rsync skill and `.publish-clone/` directory. | ~30 min per vault; covered by `campaign_adna_v3_ecosystem_compliance` M05-EC |

The migration narrative for the v7.0 release notes is captured verbatim in [[m01_obj4_publish_naming_adr.md|the publish-naming recommendation]] §5.

---

## §6 Sketches for the two adjunct skills

### `skill_publish_tarball.md` (sketch)

```
Trigger: Operator wants a reproducible offline tarball of the vault for shipping by other channels (USB, partner upload, archive).

Steps:
  1. Verify vault is clean (git status --porcelain).
  2. Run sanitization scan (same as pre-push hook, but as a one-shot check).
  3. git archive --format=tar.gz --prefix=<vault-name>/ -o <vault-name>_<commit-short>_<UTC>.tar.gz HEAD
  4. Compute sha256 of the tarball; record in a sidecar manifest:
     <vault-name>_<commit-short>_<UTC>.tar.gz.manifest:
       commit: <full sha>
       sha256: <tarball sha256>
       created: <ISO timestamp>
       sanitization: clean | findings_<id>
  5. Tarball + manifest are not committed (they're transient outputs); operator hands them off out-of-band.
```

The full spec is M05's call — this sketch captures intent. Tarball generation is a degenerate case of `git archive` and does not need an elaborate skill.

### `skill_deploy.md` (sketch)

```
Trigger: Vault state has changed in a way that requires reinstalling deploy-time scaffolding (pre-push hook, possibly other hooks in future). Run on every v7.0+ template upgrade and on first vault clone.

Steps:
  1. Verify pre-push hook source exists at .adna/how/standard/hooks/pre-push-sanitize.sh (template-shipped) OR at how/standard/hooks/pre-push-sanitize.sh (if vault inherits/customizes locally).
  2. Copy (with chmod +x) to .git/hooks/pre-push.
  3. Run hook in --self-test mode (passes a known-clean and known-dirty fixture; verifies the hook's exit codes are correct).
  4. Record install receipt at who/peers/deployed/<UTC>.md (similar shape to publish receipt).

Idempotent: re-running on a clean vault is a no-op (overwrites with identical content).
```

Full spec is M05's call. The skill is small (~30 lines of bash) and could be inlined into other skills if M05 prefers; the standalone form documents the deploy step explicitly.

---

## §7 M05 implementation order

When M05 executes, the recommended order:

1. **Read** [[m01_obj4_publish_naming_adr.md|the publish-naming recommendation]] + this spec + [[skill_git_remote_setup_spec.md|skill_git_remote_setup_spec.md]] + [[pre_push_hook_spec.md|pre_push_hook_spec.md]].
2. **Draft** the formal ADR-010 from §2 of the recommendation. Operator ratifies before any skill files are written.
3. **Light-edit** `skill_lattice_publish.md` per §2 of this spec (5 small edits).
4. **Author** `skill_vault_publish.md` per §3 of this spec (full content from §3.5 Implementation).
5. **Author** `skill_git_remote_setup.md` per [[skill_git_remote_setup_spec.md|skill_git_remote_setup_spec.md]].
6. **Author** the pre-push hook script per [[pre_push_hook_spec.md|pre_push_hook_spec.md]] at `.adna/how/standard/hooks/pre-push-sanitize.sh`.
7. **Author** `skill_deploy.md` (sketch in §6) — if M05 chooses, otherwise inline the install logic in `skill_vault_publish.md` Step 1's pre-flight check.
8. **Author** `skill_publish_tarball.md` (sketch in §6) — optional; may be deferred to M07 if M05 runs long.
9. **Run the new skills against a test vault** (recommend: a fresh fork of `.adna/` into a scratch directory) to verify the full flow before sealing M05.
10. **Update** the [[../../../../../adna/.adna/CHANGELOG.md|CHANGELOG]] v7.0 entry to note the new publish-skill family.

---

## §8 Forward-references

- **M05** — drafts ADR-010; produces `skill_vault_publish.md`, `skill_git_remote_setup.md`, the pre-push hook, and (optionally) `skill_publish_tarball.md` + `skill_deploy.md`. Light-edits `skill_lattice_publish.md` per §2.
- **M07** — runs the §Obj 7 (a) skill-freshness audit on the new skills; flags any drift.
- **M08a** — surfaces the two-skill model in the v7.0 upgrade guide per [[m01_obj4_publish_naming_adr.md|recommendation]] §5.
- **`campaign_adna_v3_ecosystem_compliance` M05-EC** — Spacemacs.aDNA migrates from its local `skill_publish_lattice.md` rsync flow to the v7.0 family.

Status: **spec, ready for M05**.
