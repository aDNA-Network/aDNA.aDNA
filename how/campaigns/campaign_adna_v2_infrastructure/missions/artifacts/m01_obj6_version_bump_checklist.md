---
type: artifact
artifact_type: runbook
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_planning_01
objective: 6
target_mission: M06  # M06 executes this checklist when shipping the v7.0 tag
created: 2026-05-08
updated: 2026-05-08
status: complete
last_edited_by: agent_stanley
tags: [artifact, mission_deliverable, m01, obj6, runbook, version_bump, v7_0, governance, changelog, git_tag, github_release, m06]
related_artifacts:
  - m01_obj0_ecosystem_matrix.md           # source: 19-vault inventory; pull-based adoption signal
  - m01_obj1_current_state.md              # source: Governance v6.0 + Standard v2.2 baseline
  - m01_obj5_github_minimalism_audit.md    # source: pre-populated CHANGELOG entries from §8 high-priority M03/M06/M07 actions
  - m01_obj6_semver_discipline_adr.md      # paired sibling — the recommendation behind this runbook
related_decisions:
  - adr_006_github_repo_rename_to_adna.md  # v7.0 ratifies in conjunction with this ADR
  - adr_007_outer_adna_claude_md_disposition.md
  # ADR-008 (airlock stub, M03), ADR-009 (naming convention, M07), ADR-010 (publish-naming, M05),
  # ADR-011 (semver discipline, M06) — all targeted for ratification at or before the v7.0 tag.
---

# M01 Obj 6 — Version Bump Checklist (M06 runbook for the v7.0 tag)

> **Deliverable 11b of M01** (per [[../mission_adna_infra_planning_01.md|mission_adna_infra_planning_01]] §Deliverables row 11). The executable runbook M06 follows when shipping the **aDNA Governance v7.0** tag. Companion to [[m01_obj6_semver_discipline_adr.md|m01_obj6_semver_discipline_adr.md]] (the recommendation that codifies the policy this runbook applies).

This is a **runbook artifact** — not a design doc. Each section is a checklist M06 marks off in order. Verification commands are included verbatim. Failure modes are captured at §6.

---

## §0 Preconditions (verify before any §1+ step)

| # | Check | Command | Expected | Action if failed |
|---|---|---|---|---|
| P-1 | All M01 ADRs in `accepted` status (006, 007, 008, 009, 010, 011) | `for n in 006 007 008 009 010 011; do grep -l "status: accepted" adna/.adna/what/decisions/adr_${n}_*.md; done` (run from `~/lattice/`) | All 6 paths printed | Resolve open ADRs at predecessor missions; re-run M06 phase gate |
| P-2 | M03 flatten has shipped | `test -d ~/lattice/.adna && test -f ~/lattice/.adna/.gitignore && ! test -d ~/lattice/adna` | All three pass | Run M03 first; v7.0 cannot tag pre-flatten |
| P-3 | M05 publish-skill family has shipped | `ls ~/lattice/.adna/how/skills/skill_{vault_publish,git_remote_setup,deploy}.md` | All three files exist | Run M05 first |
| P-4 | M08a upgrade guide has shipped | `test -f ~/lattice/.adna/how/docs/upgrade_v6_to_v7.md` | File exists | Run M08a first |
| P-5 | Working tree clean on `main` | `cd ~/lattice/.adna && git status --short && git rev-parse --abbrev-ref HEAD` | Empty + `main` | Commit/stash/checkout as needed |
| P-6 | No pending v7.0 RC tags blocking | `cd ~/lattice/.adna && git tag --list "v7.0*"` | Empty (no tag yet) OR only RC tags from this campaign | If a stale `v7.0` tag exists, refuse to proceed — investigate provenance with operator |

---

## §1 CHANGELOG.md v7.0 entry (skeleton + pre-populated content)

**Target file**: `~/lattice/.adna/CHANGELOG.md`

**Insertion point**: Immediately after the `---` separator below the Version Policy section (before the existing `## [v6.0] — 2026-04-03` entry).

**Skeleton**:

```markdown
## [v7.0] — YYYY-MM-DD

> Major **Governance** bump. **Standard track: no change** (stays at v2.2). Ratified by ADR-011 (semver discipline) at this tag.

### Added
- **Repo flatten**: `.adna/` IS the git repo (no more `adna/.adna/` two-level structure). New clone target: `git clone https://github.com/LatticeProtocol/adna.git .adna` (per ADR-006). Symlink `lattice/.adna -> adna/.adna` removed. (M03)
- **`node.aDNA/` opt-in pattern**: Local-node operational inventory vault. Persona: Hestia. Forward-reference per ADR-004 from `node.aDNA/CLAUDE.md` to `aDNA.aDNA/how/campaigns/`. (M04)
- **`skill_vault_publish.md` (NEW)**: Vault → GitHub `git push` flow. Replaces ad-hoc `.publish-clone/` rsync workaround. (M05; ratified by ADR-010)
- **`skill_git_remote_setup.md` (NEW)**: First-time `git remote add` + `gh repo create` configuration for fresh vaults. (M05)
- **`skill_deploy.md` (NEW)**: Idempotent installer for the pre-push sanitization hook. (M05)
- **`skill_publish_tarball.md` (NEW)**: Optional offline-shipping tarball flow. (M05)
- **Pre-push sanitization hook** (LAYER_CONTRACT §4 v0.1): 7 sanitization rules (path leakage / secret patterns / filename patterns / large binaries / frontmatter confidential / frontmatter draft / operator deny list). Installed via `skill_deploy`. (M05)
- **`how/airlock/AIRLOCK.md` stub** at template level — entry-path index for cross-graph agent traffic. Adoption is opt-in per vault. (M03; ratified by ADR-008)
- **Naming convention codification** (ADR-009): `<name>.aDNA/` directory ↔ `<name>.aDNA.git` GitHub repo isomorphism; snake_case `<name>`; grandfathered exceptions documented. Renames are operator-discretionary; per-vault application is the v3 successor's scope. (M07)
- **Semver discipline ADR** (ADR-011): Codifies the two-track Major.Minor-only policy already practiced in this CHANGELOG. (M06; this entry IS the first release governed by it.)
- **`template_workspace_claude.md`**: Workspace-router CLAUDE.md template extracted from the legacy outer `adna/CLAUDE.md` per ADR-007. Directly installable to `~/lattice/CLAUDE.md`. (M03)
- **`LatticeScope.aDNA` planning campaign seed**: Campaign doc for the observability-platform vault (Prometheus persona). Seeded in this campaign's M10; vault construction is a successor campaign. (M10)
- **CI workflow caller-usage URL update** to `LatticeProtocol/adna` (3 reusable workflows). (M03)
- **Template-root `.gitignore`**: Created with v7.0 exclusion set (`deploy/`, `what/local/`, `how/local/`, `who/operators/`, `dist/`, `.publish-clone/`, `.publish-clone.bak/`, `private/`, `*.dryrun.log`, `*.tar.gz`). (M03; per Obj 5 audit §5 G-1)

### Changed
- **GitHub repo rename**: `LatticeProtocol/Agentic-DNA` → `LatticeProtocol/adna` (per ADR-006). GitHub URL forwarding preserves existing clones; new clones use the canonical short-name URL.
- **`adna/CLAUDE.md` (outer wrapper) → `template_workspace_claude.md`**: Repurposed as a template for the workspace router (per ADR-007); now lives at `.adna/how/templates/`.
- **`deploy_manifest.yaml` location**: Moved from repo root to `.github/deploy_manifest.yaml`. `sync_includes:` simplified to root-level paths post-flatten. (M03; per Obj 5 audit §3 D-1)
- **`prepare_for_onboarding.sh` location**: Moved from template root to `how/skills/l1_upgrade/` OR renamed to `prepare_for_l1_upgrade.sh` (operator-decided). The L1-specific script no longer pollutes top-level discoverability. (M03; per Obj 5 audit §4 P-1)
- **`skill_workspace_upgrade.md`**: Symlink-creation step (lines 105-113) removed; flatten path replaces it. New §Step-3-alternative: install workspace router from `template_workspace_claude.md`. (M03)
- **`skill_project_fork.md`**: Exclusion list expanded for post-flatten layout (`.git/`, `.github/`, `README.md`, `LICENSE`, `setup.sh`, `prepare_for_onboarding.sh`, `deploy_manifest.yaml`). Naming-convention warning added (per ADR-009): warn on non-conformant `<name>.aDNA/` forms. (M03 + M07)
- **`skill_lattice_publish.md`**: Light v7.0 path-drift updates only — scope unchanged (latlab CLI registry publish). (M05; per ADR-010)
- **CLAUDE.md frontmatter `version:`**: `"6.0"` → `"7.0"` (this entry is the change). `last_edited_by: agent_init` → `agent_stanley`. (§2 below)
- **Skills inventory table in `.adna/CLAUDE.md`**: 13 → 16 rows (added `skill_workspace_upgrade.md` per Obj 1 §2 I-2; added `skill_vault_publish.md`, `skill_git_remote_setup.md`, `skill_deploy.md`, `skill_publish_tarball.md`). (M07)
- **Standard track v2.2** is **unchanged**. Verified by S2 S4 reading pass (title at line 3 of `adna_standard.md` is canonical). The stale `*End of aDNA Universal Standard v2.0*` footer at line 1483 is corrected to `*End of aDNA Universal Standard v2.2*` as a one-line audit fix. (M07; per Obj 6 recommendation §2-D)

### Deprecated
- **`skill_workspace_init.md`** — was already deprecated in v6.0; **formally retired** in v7.0. File preserved per Standing Order #6 (archive, never delete). (M03)
- **Outer wrapper `adna/CLAUDE.md`** — converted to `template_workspace_claude.md` per ADR-007; the "outer wrapper" pattern is no longer canonical. (M03)
- **`.publish-clone/` rsync workaround pattern** — superseded by `skill_vault_publish.md`. Vaults using it (currently only Spacemacs.aDNA) retire on adoption of the v7.0 publish flow. (M05; coordinated via [[../../../who/coordination/coord_2026_05_08_publish_rewrite.md|Daedalus coord memo]] and v3 successor M05-EC.)

### Removed
- **Symlink `lattice/.adna -> adna/.adna`** at workspace root — replaced by direct `.adna/` git clone. (M03)
- **Outer `adna/` directory** at workspace root — flattened. (M03)
- **`how/standard/skills/skill_publish_lattice.md`** (Spacemacs-local rsync skill) — retired upstream-via-v7.0; per-vault retirement is v3 successor scope. (Coordinated, not removed in this campaign.)

### Fixed
- **`adna_standard.md` line 1483** — stale `*End of aDNA Universal Standard v2.0*` footer corrected to v2.2. (M07; one-line audit fix)
- **CI workflow caller-usage URLs** — `LatticeProtocol/Agentic-DNA/.github/workflows/...@main` → `LatticeProtocol/adna/.github/workflows/...@main` in all three reusable workflows. (M03; per Obj 5 audit §2 W-1)
- **`.adna/CLAUDE.md` skills inventory table** — added missing `skill_workspace_upgrade.md` row (Issue I-2 from Obj 1 §2). (M07)
- **`adna/.adna/MANIFEST.md` outer-wrapper drift** — verify post-M03 that `Project Identity` section reflects `adna` (not "Agentic-DNA — A standalone knowledge architecture…"). (M07; cosmetic)

### Security
- **Pre-push sanitization hook** (R1-R7): defense-in-depth against accidentally pushing local context, secrets, large binaries, or operator-restricted files. Installed via `skill_deploy`. Bypassable with `--no-verify` (operator-discretionary; not recommended). See [[m01_obj4_publish_naming_adr.md|publish-naming recommendation]] §5 + [[pre_push_hook_spec.md|pre-push hook spec]]. (M05)

### Migration
- [[upgrade_v6_to_v7.md|`upgrade_v6_to_v7.md`]] (M08a; ships pre-flatten so operators have it before structure breaks). Per-vault coordination memos drafted for ~17 vaults + external partners (Wilhelm Foundation, TAPP, Super League). Public announcement at GitHub release.

### Standard track
- **No change.** Standard stays at v2.2 (line 3 title canonical; line 1483 footer fix is editorial, not a version bump).
```

**Pre-population sources** (every line item above traces to):
- M01 Obj 0 ecosystem matrix §2 + §3 (the 19-vault blast radius + external operators)
- M01 Obj 1 current state §1 + §2 (skill inventory + repo structure baseline)
- M01 Obj 2 migration runbook (M03 mechanics)
- M01 Obj 4 publish-naming ADR + skill specs (M05 deliverables)
- M01 Obj 5 GitHub minimalism audit §2-§7 (M03/M06/M07 actions)
- M01 Obj 6 semver ADR recommendation (this checklist's paired sibling)

M06 fills in the date placeholder (`YYYY-MM-DD`) at execution and verifies each line against final M02-M11 outputs (some Added/Changed bullets may consolidate or split based on what actually shipped).

---

## §2 Frontmatter version flip

**Target file**: `~/lattice/.adna/CLAUDE.md`

**Current state** (verified S2 S4 2026-05-08):
```yaml
---
type: governance
version: "6.0"
token_estimate: ~3000
updated: 2026-04-03
last_edited_by: agent_init
---
```

**Target state**:
```yaml
---
type: governance
version: "7.0"
token_estimate: ~3000  # re-measure post-edits if structural changes shift the estimate
updated: <M06 execution date YYYY-MM-DD>
last_edited_by: agent_stanley
---
```

**Edit (verbatim, in-place)**:
- Line 3: `version: "6.0"` → `version: "7.0"`
- Line 5: `updated: 2026-04-03` → `updated: <M06 execution date>`
- Line 6: `last_edited_by: agent_init` → `last_edited_by: agent_stanley`

**Side-effect check**:
- Line 10 (`<!-- v6.0 | 2026-04-03 -->`): update to `<!-- v7.0 | <M06 date> -->`
- Token estimate: re-measure if M03/M07 changes shifted body text materially. If unchanged from v6.0, leave the estimate at `~3000`.

---

## §3 Standard track verification (no change)

**Target file**: `~/lattice/.adna/what/docs/adna_standard.md`

**Verify** (read-only at v7.0 tag time):
- Line 3 frontmatter `title:` reads `"aDNA Universal Standard v2.2"` — canonical
- First H1 below frontmatter reads `# aDNA Universal Standard v2.2` (or equivalent matching the title)

**Required edit** (M07 audit fix per Obj 6 recommendation §2-D):
- Line 1483: `*End of aDNA Universal Standard v2.0*` → `*End of aDNA Universal Standard v2.2*`

This is the **only** change to `adna_standard.md` in this campaign. The Standard track itself does not bump.

**CHANGELOG entry sub-line** (under §1 Standard track section, already drafted): "*Standard stays at v2.2 (line 3 title canonical; line 1483 footer fix is editorial, not a version bump).*"

---

## §4 MANIFEST.md verification (no version field)

**Target file**: `~/lattice/.adna/MANIFEST.md`

**Current frontmatter** (verified S2 S4 2026-05-08):
```yaml
---
type: manifest
role: template
created: 2026-02-17
updated: 2026-04-03
last_edited_by: agent_init
tags: [manifest, governance]
---
```

**No `version:` field present** — MANIFEST inherits version from CLAUDE.md (the canonical version source per CHANGELOG line 25). No frontmatter edit needed for the version bump.

**Required edit** (cosmetic, M07 may absorb):
- Line 5 `updated: 2026-04-03` → `updated: <M06 execution date>` if M06 touches MANIFEST.md for any other reason. Otherwise leave alone.

**Body content audit** (M07 absorbs if not already):
- "Project Identity" section should reference `adna` (not "Agentic-DNA — A standalone knowledge architecture…") to align with ADR-006 repo rename.

---

## §5 Git tag command

**Pre-tag verification** (P-1 through P-6 from §0 must all pass):

```bash
cd ~/lattice/.adna

# Confirm preconditions
git status --short                                # expect empty
git rev-parse --abbrev-ref HEAD                   # expect: main
git log --oneline -5                              # confirm recent commits include §1 + §2 changes
git tag --list "v7*"                              # expect empty (no v7.0 yet)

# Confirm M06's own commits are pushed
git push origin main                              # ensure remote up to date before tagging
```

**Tag command** (run from `~/lattice/.adna`):

```bash
git tag -a v7.0 -m "aDNA v7.0 (Governance) — flat repo, node.aDNA, publish-skill rewrite, LatticeScope.aDNA seed.

Major Governance bump. Standard track unchanged (stays at v2.2).

ADRs ratified at this tag: 006 (repo rename), 007 (outer wrapper → template), 008 (airlock stub), 009 (naming convention), 010 (publish-naming), 011 (semver discipline).

Migration: see how/docs/upgrade_v6_to_v7.md (M08a).

Coordinated rollout: per-vault memos delivered to ~17 vaults; external partners notified (Wilhelm Foundation, TAPP, Super League)."

git push origin v7.0
```

**Annotated tag** (`-a`) is **required** — the tag carries the release notes; lightweight tags are insufficient.

---

## §6 GitHub release notes template

**Target**: `https://github.com/LatticeProtocol/adna/releases/new?tag=v7.0`

**Title**: `aDNA v7.0 (Governance) — Flat repo, node.aDNA, publish-skill rewrite`

**Body** (paste verbatim, edit per §1 final-draft consolidation):

```markdown
## aDNA Governance v7.0

**Major Governance bump.** Standard track unchanged (stays at v2.2).

This is the first release ratified under the explicit semver discipline ADR (ADR-011). Two-track Major.Minor-only — see the [Version Policy section in CHANGELOG.md](https://github.com/LatticeProtocol/adna/blob/main/.adna/CHANGELOG.md#version-policy) for the full rules.

### What's in v7.0 (highlights)

- **Repo flatten**: `.adna/` IS the git repo. New clone target: `git clone https://github.com/LatticeProtocol/adna.git .adna`. Old `adna/.adna/` two-level structure removed.
- **GitHub repo renamed** `Agentic-DNA` → `adna`. URL forwarding preserves existing clones.
- **Publish-skill family rewrite**: `skill_vault_publish.md` (NEW), `skill_git_remote_setup.md` (NEW), `skill_deploy.md` (NEW), `skill_publish_tarball.md` (NEW). The existing `skill_lattice_publish.md` (latlab CLI registry skill) is unchanged. See ADR-010.
- **Pre-push sanitization hook**: 7 rules, defense-in-depth against accidental local-context push. Installed via `skill_deploy`.
- **`node.aDNA/` opt-in pattern**: Local-node operational inventory vault (Hestia persona). Per ADR-004 forward-reference.
- **Naming convention codified** (ADR-009): `<name>.aDNA/` ↔ `<name>.aDNA.git`. Existing non-conformant repos are grandfathered.
- **Airlock pattern stub** ships at template level (per ADR-008).
- **Workspace router template**: `template_workspace_claude.md` extracted from legacy outer wrapper per ADR-007. Directly installable.
- **`LatticeScope.aDNA` planning campaign** seeded for the next observability-platform initiative.

### Migration

→ See [`how/docs/upgrade_v6_to_v7.md`](https://github.com/LatticeProtocol/adna/blob/main/.adna/how/docs/upgrade_v6_to_v7.md).

The upgrade guide ships pre-flatten so operators have actionable steps before their structure breaks. Per-vault coordination memos have been delivered to ~17 vaults + external partners (Wilhelm Foundation, TAPP, Super League).

**Existing clones**: GitHub URL forwarding works. To update to the canonical URL: `git remote set-url origin https://github.com/LatticeProtocol/adna.git`.

### What did NOT change

- **Standard track stays at v2.2.** No changes to triad structure, object schemas, FAIR envelope, or RFC 2119 conformance rules. Existing v6.0-conformant vaults remain fully conformant.
- The latlab CLI registry skill (`skill_lattice_publish.md`) is unchanged.
- Existing `.aDNA` projects continue to operate; adoption of v7.0 patterns (node.aDNA, airlock, publish-skill rewrite) is per-vault and operator-paced.

### Full changelog

[CHANGELOG.md v7.0 entry](https://github.com/LatticeProtocol/adna/blob/main/.adna/CHANGELOG.md#v70--YYYY-MM-DD).

### ADRs ratified at this tag

- ADR-006 — GitHub repo rename
- ADR-007 — Outer wrapper → workspace template
- ADR-008 — Airlock template stub
- ADR-009 — Naming convention
- ADR-010 — Publish-naming
- ADR-011 — Semver discipline (this release is governed by it)

All ADRs live in [`.adna/what/decisions/`](https://github.com/LatticeProtocol/adna/tree/main/.adna/what/decisions).
```

**Operator action**: Paste into the release form, replace `YYYY-MM-DD` placeholders with the M06 execution date, click "Publish release."

---

## §7 Post-tag verification

Run all checks; any failure → debug before announcing.

```bash
cd ~/lattice/.adna

# Tag exists locally + remotely
git tag --list "v7.0"                              # expect: v7.0
git ls-remote --tags origin v7.0                   # expect: <sha>\trefs/tags/v7.0
git describe --tags HEAD                           # expect: v7.0 (if HEAD is the tagged commit)

# Tag is annotated (carries release notes)
git for-each-ref --format='%(objecttype)' refs/tags/v7.0   # expect: tag (not commit; lightweight tags would print 'commit')

# CHANGELOG entry is consistent with the tag's release notes
grep -A 200 "## \[v7.0\]" CHANGELOG.md | head -100        # spot-check: matches §1 of this checklist

# CLAUDE.md frontmatter version flipped
head -10 CLAUDE.md | grep "version:"                       # expect: version: "7.0"

# adna_standard.md unchanged in title; footer fixed
grep -n "Universal Standard v" what/docs/adna_standard.md | head -5
# Expect:
#   Line 3: title: "aDNA Universal Standard v2.2"
#   Line ~lastline: *End of aDNA Universal Standard v2.2*
```

**Fresh-clone smoke test** (in `/tmp/`, not the working tree):

```bash
cd /tmp
git clone https://github.com/LatticeProtocol/adna.git .adna-smoke-test-v7
cd .adna-smoke-test-v7

# Layout matches v7.0
test -f CLAUDE.md && grep "version:" CLAUDE.md         # expect: version: "7.0"
test -d how/airlock && test -f how/airlock/AIRLOCK.md  # expect: present (M03 ADR-008 stub)
test -f .gitignore                                     # expect: present (G-1 from Obj 5)
test -f how/templates/template_workspace_claude.md     # expect: present (ADR-007)
test -f how/skills/skill_vault_publish.md              # expect: present (M05)
test -f how/docs/upgrade_v6_to_v7.md                   # expect: present (M08a)

# Tag is reachable
git checkout v7.0
git log --oneline v7.0 -1

# Cleanup
cd / && rm -rf /tmp/.adna-smoke-test-v7
```

If any check fails → STOP. Diagnose before announcing the release publicly.

---

## §8 Failure modes

| Mode | Symptom | Recovery |
|---|---|---|
| **Tag created on wrong branch** | `git tag` ran while HEAD was not on `main` | `git tag -d v7.0 && git push origin :refs/tags/v7.0`; checkout `main`; re-tag. (Allowed: tags can be deleted before public announcement; once announced, NEVER delete — supersede with v7.0.1 or v7.1 per ADR-011 §Reverting / superseding rule.) |
| **Tag pushed before CHANGELOG committed** | Remote has the tag but the commit it points at lacks the CHANGELOG entry | Worst case: leave the tag, commit CHANGELOG separately, push, document the lapse in M06 AAR + a note in the GitHub release body. Better: refuse to publish the release until CHANGELOG is consistent. (M06 phase gate catches this if §0 P-5 passed correctly.) |
| **Frontmatter flip not committed before tag** | `.adna/CLAUDE.md` still reads `version: "6.0"` post-tag | Fix-forward: commit the flip + push + re-tag (delete-and-recreate is acceptable pre-announcement only). |
| **MANIFEST drift (Project Identity wrong)** | "Agentic-DNA" still appears in MANIFEST body | Cosmetic; not a release-blocker. M07 absorbs in audit findings; address in next Minor bump if not now. |
| **Standard track stale footer NOT fixed** | Line 1483 still reads `v2.0` | Document in M07 audit findings as fixed in v7.0. If discovered post-tag, hotfix in v7.1 (Minor bump, `Fixed` category). |
| **Pre-push hook fails for M06's own commits** | Cannot push the v7.0 commit because of the new sanitization rules | Verify M06's commits don't carry secrets, large binaries, or restricted paths. Bypass with `--no-verify` only as a last resort with operator approval and an immediate post-push audit. |
| **GitHub repo rename redirect fails** | Existing operators report "404 on `git pull`" | Most likely a stale credential/cache issue on operator side. Confirm the rename completed (`gh repo view LatticeProtocol/adna`); guide operator through `git remote set-url origin <new-url>`. M08a's coord memo covers this. |
| **External-partner timing conflict** | Wilhelm Foundation / TAPP / Super League raise an issue post-announcement | Engage via the per-partner coord memo channel; offer to pin v6.0 if needed. Non-disruptive: redirect preserves existing clones. |

---

## §9 Self-reference + dual-audience (Standing Orders #2 + #7)

**Self-reference check**: This runbook IS the procedure that ratifies ADR-011 (the semver discipline ADR). The checklist's structure (preconditions → CHANGELOG entry → frontmatter flip → tag → release notes → verification → failure recovery) is the canonical pattern any future Major-or-Minor bump will reuse. v8.0, v7.1, future Standard bumps — they all run a checklist of this shape, with the per-version content swapped in. This file is therefore a **template-by-precedent**: M06 doesn't formalize it as `template_version_bump_checklist.md`, but if a future campaign adds three more bump runbooks with the same structure, the next campaign extracts it.

**Dual-audience test**:

- **Developer**: §0 (preconditions), §1 (CHANGELOG skeleton), §5 (tag command), §7 (verification scripts), §8 (failure recovery). All copy-paste-and-run executable.
- **Newcomer**: §3 (Standard track no-change explanation), §6 release notes body (which is itself the most operator-facing artifact this campaign produces), §8 (failure modes — frames what can go wrong in plain language).

The release notes body (§6) is dual-audience by construction — it's what every operator reads first. The body answers (a) what changed, (b) what to do, (c) what didn't change, (d) where to learn more. A newcomer can read it once and understand the bump's shape without prior context.

---

## §10 Status

**Complete.** Runbook ready for M06 consumption. Companion artifact is the [[m01_obj6_semver_discipline_adr.md|semver discipline ADR recommendation]] (deliverable 11a). Both deliverables together discharge M01 Obj 6.

**Forward to M06**:
1. M06 starts: draft ADR-011 (`status: proposed`) per Obj 6 recommendation §2-A.
2. M06 mid: execute §1 (CHANGELOG entry) + §2 (frontmatter flip) + §3 (Standard footer fix delegated to M07) + §4 (MANIFEST verification).
3. M06 phase gate: operator ratifies ADR-011 to `status: accepted`.
4. M06 close: execute §5 (tag command) + §6 (release notes) + §7 (verification).
5. Failure of any §7 check → §8 recovery + halt before announcement.
