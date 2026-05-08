---
type: artifact
artifact_type: github_minimalism_audit
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_planning_01
objective: 5
target_missions:
  - M03  # repo flatten + deploy_manifest move
  - M06  # GitHub minimalism + version bump
  - M07  # general repo review (consumes naming-convention findings for ADR-009)
created: 2026-05-08
updated: 2026-05-08
status: complete
last_edited_by: agent_stanley
tags: [artifact, mission_deliverable, m01, obj5, github_minimalism, audit, naming_convention, gitignore, workflows, deploy_manifest, adr_006, adr_009_forward_ref]
related_artifacts:
  - m01_obj0_ecosystem_matrix.md         # source: 4 grandfathered hyphen-flat names
  - m01_obj1_current_state.md            # source: Issues I-3, I-4, I-6, I-7, I-9, I-11, I-13
  - m01_obj2_migration_runbook.md        # M03 sequencing context
  - skill_lattice_publish_rewrite_spec.md # this session — references ADR-006 path drift
  - skill_git_remote_setup_spec.md       # this session — naming-convention enforcement target
  - pre_push_hook_spec.md                # this session — `.gitignore` overlaps with R1 hook rules
related_decisions:
  - adr_006_github_repo_rename_to_adna.md
  - adr_007_outer_adna_claude_md_disposition.md
  # ADR-009 (naming convention) is forward-referenced — M07 drafts; this audit feeds the
  # findings ADR-009 ratifies.
---

# M01 Obj 5 — GitHub Repo Minimalism + Naming-Convention Audit (M03 / M06 / M07-bound)

> **Deliverable 10 of M01** (per [[../mission_adna_infra_planning_01.md|mission §Deliverables]] row 10). Audits the `adna/` outer wrapper repo for v7.0 minimalism — what survives the M03 flatten, what moves, what gets deleted, what stays. Also discharges subsection **b.1** (naming-convention check) added by the [[m01_amendment_log.md|2026-05-08 amendment]], confirming canonical docs follow `<name>.aDNA/` form before ADR-009 codifies it.

This audit operates against the **current `adna/` repo state at HEAD `206385d`** (verified 2026-05-08T20:38:49Z). The post-flatten state is described per finding so M03 can execute with zero ambiguity.

---

## §1 Scope

The audit covers six dimensions, matching the mission spec checklist + amendment subsection:

1. `.github/workflows/` audit — accuracy + ADR-006 path-drift
2. `deploy_manifest.yaml` move verification — current location, target location post-flatten
3. `setup.sh` + `prepare_for_onboarding.sh` assessment — keep / rewrite / drop
4. `.gitignore` completeness — verify all v7.0 exclusions present
5. Repo surface area check — what a new visitor sees at the GitHub repo page
6. **Naming-convention check (b.1, amendment)** — verify `<name>.aDNA/` form in canonical docs; document grandfathered exceptions

Issues from [[m01_obj1_current_state.md|m01_obj1_current_state.md]] §5 carried as mitigations: **I-3, I-4, I-6, I-7, I-9, I-11, I-13** (the M05 + M06-bound issues per the next-session prompt).

---

## §2 `.github/workflows/` audit

### Inventory (current state at HEAD `206385d`)

```
adna/.github/workflows/
├── manifest_validation.yml      (1911 bytes, May 5 16:40)
├── mypy_lattice_protocol.yml    (3556 bytes, May 5 19:28)
└── ruff_on_touched.yml          (2660 bytes, May 5 16:40)
```

All three are **reusable workflows** (`workflow_call` triggers) hosted by the adna template repo for caller repos in the LatticeProtocol ecosystem (lattice-protocol, latlab, etc.) to invoke from their own `.github/workflows/ci.yaml` files. They do **not** run against this repo itself — adna has no Python source to lint, no manifest to enforce against (this template *is* the manifest source, not a manifest consumer).

### Findings

| ID | Finding | Severity | Action |
|---|---|---|---|
| **W-1** | All three workflows contain caller-usage doc-comments referencing `LatticeProtocol/Agentic-DNA/.github/workflows/...@main`. Per [[adr_006_github_repo_rename_to_adna.md|ADR-006]], the repo URL slug becomes `LatticeProtocol/adna` post-rename. Caller-usage examples must update to match. | Medium | M03 grep+replace `LatticeProtocol/Agentic-DNA` → `LatticeProtocol/adna` in all three files (line 9 of `ruff_on_touched.yml`, line 10 of `mypy_lattice_protocol.yml`, line 7 of `manifest_validation.yml`). Caller repos (lattice-protocol, latlab) update their own `ci.yaml` independently — outside this campaign's scope. |
| **W-2** | `manifest_validation.yml` validates `deploy_manifest.yaml` against the lattice-protocol schema. After the **deploy_manifest move** (§3 below), the workflow may need a default `manifest_path:` update if the caller pattern changes. Current default `deploy_manifest.yaml` works regardless of the file's location relative to caller repo root. | Low | No change to this file. Verify post-M03 + post-deploy-manifest-move that callers still pass a sensible `manifest_path:` value (the input is parameterized so callers control). |
| **W-3** | The three workflows are headed by reference comments to charter docs (M-D1, M-D1.5, M-D1.7, M-B4.5) that don't live in *this* repo (they're in `lattice-labs/`). A reader of this repo cannot follow those references. | Low | **M07 simplification candidate** — consider stripping in-repo charter references from workflow comments OR adding a brief in-comment note that the charters live in the operator's lattice-labs vault. Acceptable as-is if M07 deems the comments useful for caller repos that share lattice-labs context. |
| **W-4** | No CI workflow runs against THIS repo's content (no markdown lint, no link check, no frontmatter validator). Candidates exist (e.g., a `markdown_lint.yml` for vault content, a `frontmatter_check.yml` to validate every `.md` file's required fields) but none are present. | Low (deferred) | **Deferred to v3 successor M02-EC or later**. v7.0 ships without adding workflow scope — minimalism requires this stays narrow. Backlog idea (do not file unprompted; surfaces here for record). |

Issue mitigations:
- **I-13** (workspace `lattice/CLAUDE.md` URL refs — Obj 1 §5) — workflow caller-usage updates in W-1 are part of the broader URL-update sweep that I-13 covers; M03 absorbs both.

### Post-flatten state (M03 execution target)

After the M03 flatten:
```
.adna/.github/workflows/
├── manifest_validation.yml      (caller-usage URLs updated to LatticeProtocol/adna)
├── mypy_lattice_protocol.yml    (same)
└── ruff_on_touched.yml          (same)
```

`.adna/` IS the git repo post-flatten (per [[adr_007_outer_adna_claude_md_disposition.md|ADR-007]]); workflows live where they always lived, just one level less nested.

---

## §3 `deploy_manifest.yaml` move verification

### Current state

```
adna/deploy_manifest.yaml         (1256 bytes, May 5 16:48 — outer wrapper level)
```

The manifest declares `repo_id: adna`, `repo_class: strict`, default branch `main`, sync_includes (`.adna`, `README.md`, `CLAUDE.md`, `.github`), and CI gate exclusions ("template + reusable-workflow host; no pytest, no image, no PyPI").

### Target state (post-M03)

The mission spec ([[../mission_adna_infra_planning_01.md|mission §Obj 5]] step 2) says: *"`deploy_manifest.yaml` — confirm it moved to `.github/` in Obj 2."* Reading [[m01_obj2_migration_runbook.md|m01_obj2_migration_runbook.md]] for confirmation: yes, the M03 flatten step explicitly moves `deploy_manifest.yaml` into `.github/` so the post-flatten layout is:

```
.adna/.github/deploy_manifest.yaml
.adna/.github/workflows/...
```

### Findings

| ID | Finding | Severity | Action |
|---|---|---|---|
| **D-1** | The `sync_includes:` block currently lists `.adna`, `README.md`, `CLAUDE.md`, `.github`. Post-flatten: `.adna/` IS the repo (no longer nested), so `sync_includes:` simplifies to root-level paths. | Medium | M03 updates `sync_includes:` to remove the `.adna` entry (whatever was inside `.adna/` is now at repo root). Likely simplifies to `["README.md", "CLAUDE.md", ".github", "how", "what", "who"]` — verify against deploy_manifest schema. |
| **D-2** | The manifest's first-line comment `# deploy_manifest.yaml — adna (Agentic-DNA quick-start template + reusable workflows)` references both names. v7.0 update: prefer "adna (display name `Agentic-DNA` in v6.0; URL slug `adna` per ADR-006)" or just "adna template" if the ADR-006 redirect history is captured in CHANGELOG instead. | Low | M03 updates the comment to match v7.0 framing. Cosmetic. |
| **D-3** | `branch_policy.allowed_refs: [main]` — verify the production workflow doesn't push to other branches before the move. Current state: only `main`, no detected violations. | None | No change. |
| **D-4** | `worktree_policy.primitive: none` — declares the template doesn't use git-worktree primitives. Post-v7.0 holds; the template itself is not the right place to demonstrate worktree patterns. | None | No change. |

Issue mitigations:
- **I-9** (`deploy_manifest.yaml` location at outer level — Obj 1 §5) — D-1 + the M03 move resolve this directly.

---

## §4 `setup.sh` + `prepare_for_onboarding.sh` assessment

### `setup.sh` (6309 bytes, executable)

**Function**: Bootstraps Obsidian plugins (15 community plugins) + Tokyo Night theme into the `.obsidian/` directory of the calling vault. Idempotent (`--force` flag re-installs latest versions). Pure bash + curl.

**Assessment**: **Keep**. This script is genuinely useful for any operator standing up an aDNA vault with Obsidian (most operators). It's vault-agnostic — works for any forked aDNA project. No path-drift concerns because it operates on `.obsidian/` relative to the script's own location (uses `$(cd "$(dirname "$0")" && pwd)` for `VAULT_DIR`).

**Findings**:

| ID | Finding | Severity | Action |
|---|---|---|---|
| **S-1** | Script lives at `adna/.adna/setup.sh` currently; post-flatten lives at `.adna/setup.sh`. Path-drift check: nothing in the script needs updating because it computes paths relative to itself. | None | No change. |
| **S-2** | Script does not enforce post-v7.0 `.aDNA` directory naming — runs on whatever directory contains it. Acceptable: the script is invoked from a vault that's already been forked (naming enforced upstream by `skill_project_fork`). | None | No change. |
| **S-3** | M07 may run the dual-audience review skill against this script — currently passes (clear comments, simple usage banner). | None | No change unless M07 finds issues. |

### `prepare_for_onboarding.sh` (9689 bytes, executable)

**Function**: Pre-flight check for **L1 compute upgrade** — checks macOS version, Homebrew PATH, Python ≥ 3.12, npm, disk space, port availability. **Not general-purpose vault setup** — specific to operators preparing for the L1 JupyterHub installation that an admin then runs.

**Assessment**: **Move or rename**. The script is L1-upgrade-specific but lives at the top of the template, where every operator (most of whom never touch L1) sees it and may reasonably assume it's required. This is a discoverability hazard for newcomers.

**Findings**:

| ID | Finding | Severity | Action |
|---|---|---|---|
| **P-1** | Script is L1-specific but lives at template-root with a generic-sounding name. Newcomers may run it expecting standard vault setup. | Medium | **M03 candidate**: move to `.adna/how/skills/l1_upgrade/prepare_for_onboarding.sh` (under the L1 upgrade skill's directory) OR rename to `prepare_for_l1_upgrade.sh` to make scope explicit in filename. M03 decides. |
| **P-2** | Cross-reference: [[../../../how/skills/skill_l1_upgrade.md|skill_l1_upgrade.md]] is the documented procedure. The shell script should be invoked from / referenced by that skill, not stand alone. | Medium | Same M03 action — the move/rename + a one-line reference in `skill_l1_upgrade.md` resolves both. |
| **P-3** | Script comment "Does NOT install latlab, JupyterHub, or any Lattice infrastructure" is correct framing — preserves discoverability of what the script does and doesn't do. Keep this clarity if the script moves. | None | If moving, preserve the doc-comment block verbatim. |

Issue mitigations:
- **I-7** (overlapping or unclear setup paths — Obj 1 §5) — P-1 + P-2 directly address the "two setup scripts at root, only one is general-purpose" confusion.

---

## §5 `.gitignore` completeness

### Current state

The outer `adna/.gitignore` (669 bytes) covers:

```
# OS — .DS_Store, Thumbs.db
# Projects — *.aDNA/   (workspace-level, keeps subprojects out of template repo)
# Obsidian per-device — workspace.json, workspace-mobile.json, graph.json
# Python — __pycache__, *.pyc, *.egg-info, dist/, build/, .venv/, venv/, env/
# IDE — .vscode/, .idea/, *.swp, *.swo, *~
# Environment — .env, .env.local
# Claude Code — .mcp.json, .claude/
# Local context — _meta/
```

The template-level `.adna/.gitignore` is **empty / missing** (verified via `cat`).

### Findings against mission spec checklist

Mission spec ([[../mission_adna_infra_planning_01.md|mission §Obj 5]] step 4) requires verification of: `deploy/`, `what/local/`, `how/local/`, `who/operators/`, `dist/`, `.publish-clone/`, `*.dryrun.log`. Cross-checked against the [[pre_push_hook_spec.md|pre-push hook R1 rule]] which also enforces: `what/local/`, `how/local/`, `who/operators/`, `deploy/`, `.publish-clone/`, `.publish-clone.bak/`, `private/`.

| Required exclusion | Outer `.gitignore` | Template `.gitignore` | Action |
|---|---|---|---|
| `deploy/` | ❌ Missing | ❌ Missing | M03 adds to template `.gitignore` |
| `what/local/` | ❌ Missing | ❌ Missing | M03 adds to template `.gitignore` |
| `how/local/` | ❌ Missing | ❌ Missing | M03 adds to template `.gitignore` |
| `who/operators/` | ❌ Missing | ❌ Missing | M03 adds to template `.gitignore` |
| `dist/` | ✓ Present (in Python block) | ❌ Missing | M03 adds to template `.gitignore` (separate from Python block — the meaning is "publish output dist", not "Python dist") |
| `.publish-clone/` | ❌ Missing | ❌ Missing | M03 adds to template `.gitignore` |
| `.publish-clone.bak/` | ❌ Missing | ❌ Missing | M03 adds to template `.gitignore` |
| `private/` | ❌ Missing | ❌ Missing | M03 adds to template `.gitignore` |
| `*.dryrun.log` | ❌ Missing | ❌ Missing | M03 adds to template `.gitignore` |

Plus inherited from outer (still relevant post-flatten): `.DS_Store`, `Thumbs.db`, Obsidian per-device files, Python build artifacts, IDE swap files, `.env`, `.env.local`, `.mcp.json`, `.claude/`, `_meta/`.

### Findings

| ID | Finding | Severity | Action |
|---|---|---|---|
| **G-1** | Template-level `.gitignore` is missing entirely. v7.0 needs it because post-flatten `.adna/` IS the repo — gitignore at the template level becomes the gitignore at the repo level. | High | **M03 creates `.gitignore` at template root** (post-flatten path: `.adna/.gitignore`) merging the outer-level entries + the missing v7.0 entries from this audit. |
| **G-2** | The `*.aDNA/` workspace-level exclusion in current outer `.gitignore` is only relevant when adna is one of many subprojects in a workspace. Post-flatten this exclusion is no longer needed in the template `.gitignore` — the template repo doesn't contain subprojects. | Low | M03 omits `*.aDNA/` from the new template `.gitignore`. (The workspace-level `lattice/.gitignore` continues to carry it.) |
| **G-3** | The pre-push hook (R1 rule, [[pre_push_hook_spec.md|pre_push_hook_spec.md]] §3) and `.gitignore` overlap intentionally — `.gitignore` prevents accidental staging; the hook prevents push when `.gitignore` was edited or files were force-added. Defense in depth is correct. | None (this is by design) | No change; document the overlap in M03's CHANGELOG entry. |
| **G-4** | `.gitignore` does not exclude milestone tarballs produced by [[skill_lattice_publish_rewrite_spec.md|`skill_publish_tarball.md` sketch]] (e.g., `*_v*.tar.gz` at repo root). | Low | M03 adds `*.tar.gz` at repo root to `.gitignore` (preserves tarballs under `who/peers/published/` if any are stored there). |

Issue mitigations:
- **I-3** (`.publish-clone/` artifacts may end up tracked accidentally — Obj 1 §5) — G-1 + the pre-push hook (R1) close this directly.

---

## §6 Repo surface area check

### Current state (outer `adna/` HEAD `206385d`)

```
adna/                          (12 entries at top level)
├── .git/                      (git internals — invisible on GitHub UI)
├── .github/                   (visible-but-collapsed on GitHub UI)
│   └── workflows/             (3 reusable workflows)
├── .adna/                     (template content — visible as `.adna/` directory)
├── .gitignore                 (visible)
├── CLAUDE.md                  (visible — outer wrapper, becomes template per ADR-007)
├── deploy_manifest.yaml       (visible — moves to .github/ per §3)
├── LICENSE                    (visible)
└── README.md                  (visible — repo landing page)
```

Visible-on-GitHub-page: `.github/`, `.adna/`, `.gitignore`, `CLAUDE.md`, `deploy_manifest.yaml`, `LICENSE`, `README.md` (7 items, plus the README rendered as the landing).

### Target state (post-M03 flatten, post-deploy-manifest move)

```
.adna/                         (= the git repo; ~16 entries at top level)
├── .git/                      (invisible)
├── .github/                   (visible-but-collapsed)
│   ├── deploy_manifest.yaml   (moved from outer)
│   └── workflows/             (3 reusable workflows, URL refs updated)
├── .gitignore                 (visible — newly created per §5 G-1)
├── .obsidian/                 (visible — Obsidian config)
├── .obsidianignore            (visible — Obsidian sync exclusions)
├── adna.md                    (visible — purpose unclear, see F-1)
├── AGENTS.md                  (visible — root agent guide)
├── CHANGELOG.md               (visible — version history, v7.0 entry added by M06)
├── CLAUDE.md                  (visible — template governance, was `.adna/CLAUDE.md`)
├── CONTRIBUTING.md            (visible — contribution guide)
├── how/                       (visible — HOW triad)
├── LICENSE                    (visible)
├── MANIFEST.md                (visible — project overview)
├── prepare_for_onboarding.sh  (visible — moves per §4 P-1, OR renames)
├── README.md                  (visible — repo landing)
├── setup.sh                   (visible — Obsidian setup, kept)
├── STATE.md                   (visible — operational state)
├── what/                      (visible — WHAT triad)
└── who/                       (visible — WHO triad)
```

That's ~16 visible items at top level.

### Findings

| ID | Finding | Severity | Action |
|---|---|---|---|
| **F-1** | `adna.md` (2246 bytes) at top level — purpose unclear from filename. Possibly an Obsidian-canvas-style entry node or a brief project descriptor. Audit reads it before deciding. | Medium | **M07 candidate**: M07 reads `adna.md`, decides whether to merge into README.md or keep. If kept, ensure README's link table points at it. |
| **F-2** | Template-root carries 5 .md files at top level (AGENTS, CHANGELOG, CLAUDE, CONTRIBUTING, MANIFEST, README, STATE) — within the standard aDNA pattern but a lot for newcomers to scan. | Low | No change; this matches the canonical aDNA pattern. README acts as the landing index and points at the others. |
| **F-3** | `prepare_for_onboarding.sh` at top-level is misleading per §4 P-1; M03 moves it. Post-move the top-level only contains `setup.sh` (general-purpose Obsidian setup) — clearer. | Medium (Action in §4) | Action handled in §4 P-1. |
| **F-4** | `.obsidian/` directory at top level is visible on GitHub but contains plugin configs that shouldn't be the first thing a developer sees on the repo page. Acceptable: standard pattern for Obsidian-vault-as-git-repo. | None | No change. |
| **F-5** | The post-flatten state preserves the outer `LICENSE` file at top level — verify M03's flatten step migrates `LICENSE` (currently at `adna/LICENSE`) into the new flat repo. | Low | M03 confirms LICENSE persists. (It must — Apache-2.0 license file is a publication requirement.) |

Issue mitigations:
- **I-11** (top-level surface area / discoverability — Obj 1 §5) — F-1 + F-3 are the concrete actions. F-1 is M07-bound (review-and-decide); F-3 is M03-bound (move during flatten).

### Self-reference note

The post-M03 surface state IS the v7.0 demonstration of the campaign's "minimalism + clarity" thesis — every visible item at template root has a documented purpose, and items without one (like `adna.md`'s ambiguous role) get resolved by the audit rather than deferred. Standing Order #2 satisfied: the campaign documents the cleanup it performs.

---

## §7 Naming-convention check (b.1, amendment)

### Scope (per [[../mission_adna_infra_planning_01.md|mission §Obj 5]] subsection b.1, added by amendment 2026-05-08)

Verify `<name>.aDNA/` directory form + `<name>.aDNA.git` GitHub repo form in references in:
- `.adna/CLAUDE.md`
- `.adna/README.md`
- `.adna/CHANGELOG.md`
- `.adna/MANIFEST.md`

Document the four grandfathered hyphen-flat exceptions surfaced in [[m01_obj0_ecosystem_matrix.md|m01_obj0_ecosystem_matrix.md]] §1 + the LP path-style exception. These are operator-discretionary, not blockers.

### Findings (verified via grep at HEAD `206385d`)

| File | Line | Reference | Conformance |
|---|---|---|---|
| `.adna/CLAUDE.md` | 49 | `project_name.aDNA/` | ✅ Conformant — generic placeholder example using `<name>.aDNA/` form |
| `.adna/README.md` | 317 | `~/lattice/my_research_lab.aDNA/` | ✅ Conformant — example fork name |
| `.adna/README.md` | 369 | `my_research_lab.aDNA/  # Project A (forked, customized)` | ✅ Conformant |
| `.adna/README.md` | 370 | `client_acme.aDNA/      # Project B (forked)` | ✅ Conformant |
| `.adna/CHANGELOG.md` | 36 | `.aDNA directory convention: adna_standard.md §3.5 with RFC 2119 naming rules, skill_project_fork.md auto-appends .aDNA suffix, CLAUDE.md workspace detection uses *.aDNA/ glob.` | ✅ Conformant — discusses the convention itself |
| `.adna/MANIFEST.md` | (none) | (no naming refs found in scan) | ✅ Vacuously conformant |

**Conclusion**: All canonical template docs **already follow** `<name>.aDNA/` form. No drift to fix at the template level.

### Grandfathered exceptions (documented for ADR-009, M07 ratification)

Per [[m01_obj0_ecosystem_matrix.md|m01_obj0_ecosystem_matrix.md]] §1 + §5 spot-check log:

| # | Vault | Name | Form | Why grandfathered |
|---|---|---|---|---|
| 1 | Science Stanley brand vault | `science-stanley-adna` | hyphen-flat | Pre-`.aDNA/` convention; rename is operator-discretionary in v3 successor |
| 2 | World Genome Academy | `wga-adna` | hyphen-flat | Same |
| 3 | Context Commons | `context-commons-adna` | hyphen-flat | Same |
| 4 | LA Startup Lattice | `LAStartupLattice` | suffix-flat-CamelCase | Same — pre-convention naming |
| 5 | Whitepaper repo | `LPWhitepaper` (local-path remote, not GitHub-hosted) | path-style exception | LPWhitepaper.aDNA's remote is a local filesystem path artifact of separate-repo-but-co-located history; v3 successor decides whether to re-anchor |
| 6 | aDNA template repo itself | currently `Agentic-DNA`, → `adna` per [[adr_006_github_repo_rename_to_adna.md|ADR-006]] | base-name (template-only exception) | Per [[adr_006_github_repo_rename_to_adna.md|ADR-006]] §Decision: the template repo is `<base>.git` form (the standard's own short name); consumer vaults are `<name>.aDNA.git` form. ADR-009 will codify this exception explicitly. |

**Total exceptions to document in ADR-009**: 4 hyphen-flat ecosystem vaults + 1 path-style exception (LPWhitepaper) + 1 template-repo exception (the convention's own source).

### Findings

| ID | Finding | Severity | Action |
|---|---|---|---|
| **N-1** | All canonical template docs follow `<name>.aDNA/` form. **No template-side drift to fix.** | None (informational) | M07 cites this finding when drafting ADR-009 — the template is already conformant; ADR-009 codifies what's already practiced. |
| **N-2** | The 4 hyphen-flat ecosystem exceptions are operator-discretionary. v3 successor handles per-vault application of the convention. | Low (forward) | M07 documents in ADR-009; v3 successor M04-EC mission addresses application. |
| **N-3** | The template-repo exception (`Agentic-DNA` → `adna`, not `adna.aDNA`) is the convention's own boundary case. ADR-009 must address this explicitly so future readers don't try to "fix" it. | Medium | M07 documents in ADR-009 §Exceptions: "the template repo = `<base>.git` where `<base>` is the standard's own short name; consumer vaults = `<name>.aDNA.git`". |
| **N-4** | Scan was grep-based (regex over 4 files). High-confidence but not exhaustive — a vault-name reference embedded in unusual prose may be missed. | Low | M07 may run a more thorough scan during the §Obj 7 (b.1) audit; this baseline is sufficient for ADR-009 drafting. |

Issue mitigations:
- **I-6** (publish-skill renaming decision deferred from S2 S2 — Obj 1 §5) — resolved this session by [[m01_obj4_publish_naming_adr.md|the publish-naming recommendation]]; N-3 confirms the template repo's own name follows the convention's exception.

---

## §8 Findings + actions summary

| Finding | Owner | Mission | Action |
|---|---|---|---|
| W-1 (workflow URL refs) | Rosetta | M03 | grep+replace `LatticeProtocol/Agentic-DNA` → `LatticeProtocol/adna` in 3 workflow files |
| W-2 (manifest validation default) | Rosetta | M03 (verify only) | No edit; verify caller pattern post-flatten |
| W-3 (charter refs in workflows) | Rosetta | M07 | Optional simplification; deferred |
| W-4 (no in-repo CI) | — | Deferred to v3+ | No action |
| D-1 (deploy_manifest sync_includes) | Rosetta | M03 | Update `sync_includes:` post-flatten |
| D-2 (deploy_manifest comment) | Rosetta | M03 | Cosmetic comment update |
| **G-1** (missing template `.gitignore`) | Rosetta | **M03 (high priority)** | **Create `.gitignore` at template root** |
| G-2 (`*.aDNA/` exclusion redundant post-flatten) | Rosetta | M03 | Omit from new template `.gitignore` |
| G-4 (tarball exclusion) | Rosetta | M03 | Add `*.tar.gz` at root |
| **P-1 / P-2** (prepare_for_onboarding.sh placement) | Rosetta | **M03** | **Move to `how/skills/l1_upgrade/` OR rename to `prepare_for_l1_upgrade.sh`** |
| F-1 (`adna.md` at top level) | Rosetta | M07 | Decide: merge into README.md or keep |
| F-3 (top-level scripts) | Rosetta | M03 (handled by P-1) | — |
| F-5 (LICENSE persistence) | Rosetta | M03 | Verify migration |
| **N-1 / N-2 / N-3** (naming convention) | Rosetta | **M07** | **ADR-009 cites N-1 as evidence template is conformant; documents N-2 + N-3 exceptions** |

### High-priority M03 actions (the audit's bottom line)

1. **Create `.gitignore` at template root** with the v7.0 exclusion set (G-1, G-2, G-4).
2. **Move `prepare_for_onboarding.sh`** out of template root to its L1-skill directory or rename (P-1).
3. **Update workflow caller-usage URLs** to `LatticeProtocol/adna` (W-1).
4. **Update `deploy_manifest.yaml`** for post-flatten layout + cosmetic v7.0 comment (D-1, D-2).

### High-priority M07 actions

1. **Decide `adna.md` disposition** (F-1).
2. **Draft ADR-009** citing N-1 (template-conformant) + N-3 (template-repo exception) (N-3).

### Forward to M06

1. CHANGELOG v7.0 entry mentions the `.gitignore` v7.0 exclusion set (G-1) so operators know what changed.

### Forward to v3 successor (`campaign_adna_v3_ecosystem_compliance`)

1. Per-vault rename application for 4 hyphen-flat exceptions + LPWhitepaper LP-style exception (M04-EC scope).
2. Per-vault `.gitignore` audit using the v7.0 template `.gitignore` as canonical reference (M01-EC + M02-EC scope).

---

## §9 Self-reference + dual-audience (Standing Orders #2 + #7)

This audit IS the campaign's own application of the per-vault audit pattern that v3 successor will run 19 times. The audit's structure (§2–§7) is a prototype: each ecosystem vault's M01-EC audit will produce a similar findings table at `campaign_adna_v3_ecosystem_compliance/missions/M01-EC/artifacts/<vault>_audit.md`. The convention is built and demonstrated *here* before being scaled out *there*.

**Dual-audience test**:

- **Developer** reads §2–§7 findings tables and §8 action summary — gets a precise punch list of M03/M06/M07 changes with file paths and line numbers.
- **Newcomer** reads §1 scope + §6 repo surface area + §7 naming convention — understands the v7.0 simplification narrative without prior context (the repo gets flatter, the canonical names are already what the convention says, the misleading L1 script gets a clearer home).

The audit fails the test if either audience walks away confused. Both should be able to act on what they've read.

---

## §10 Status

**Complete.** Audit findings ready for M03 + M06 + M07 consumption. Issue mitigations from [[m01_obj1_current_state.md|m01_obj1_current_state.md]] §5 covered: I-3 (G-1 + pre-push hook), I-6 (resolved by Obj 4 publish-naming recommendation; N-3 confirms template-side conformance), I-7 (P-1 + P-2), I-9 (D-1 + D-2 + M03 move), I-11 (F-1 + F-3), I-13 (W-1).

**Remaining Obj 1 §5 issues NOT covered by this audit** (out of scope for Obj 5; tracked elsewhere):

- I-4 — broader content-discoverability concerns (M07 prose simplification scope)
- Other issues either resolved in earlier sessions or assigned to non-Obj-5 missions.
