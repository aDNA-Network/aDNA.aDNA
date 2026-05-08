---
type: mission
mission_id: mission_adna_infra_planning_01
campaign: campaign_adna_v2_infrastructure
campaign_phase: 0
status: planned
mission_class: planning
created: 2026-05-07
updated: 2026-05-07
last_edited_by: agent_stanley
tags: [mission, planned, adna, infrastructure, planning, v2, ecosystem, node_vault, publish, lattice_scope_adna, migration]
---

# Mission — M01: aDNA v2 Infrastructure Planning

**Phase**: P0 — Campaign design.
**Class**: planning. Deliverable is a campaign doc + mission tree, not implementation.

---

## Why this mission exists

During a Spacemacs.aDNA P3-02 customization session (2026-05-07), two structural issues
surfaced that trace to the aDNA template level:

1. **`skill_publish_lattice` uses a detached `.publish-clone/` workaround** instead of a
   proper `git remote`. Every vault using this skill has no configured origin, making normal
   git ops (push, pull, branch, PR) impossible. Root cause: the skill was designed to solve a
   private-file exclusion problem that `.gitignore` already solves.

2. **The `adna` repo structure is awkward**: template content lives at `adna/.adna/` (nested
   inside the repo), requiring a symlink `.adna -> adna/.adna` at the workspace root. New users
   must clone then symlink; the repo root contains workspace-level files that aren't part of
   the template (`CLAUDE.md`, `deploy_manifest.yaml`, `.github/`).

These triggered a broader review: local node state tracking, GitHub repo minimalism, context
budget empiricism, and a vision for open-source agentic observability tooling. Together these
constitute **aDNA v7.0** — the next version of the template standard.

The mission has **two hard constraints**:
- **Existing users first**: no change lands without a tested migration path. ~17 vaults carry
  copies of template skills; the ecosystem is real and active.
- **Dual-audience throughout**: every new pattern (node.aDNA, LatticeScope.aDNA, publish fix)
  must be immediately legible to a new operator, not just the architect.

---

## Objectives

### Obj 0 — Ecosystem impact inventory

**Before designing anything**, map the full blast radius. This is the prerequisite for every
other objective.

**Read:**
1. `ls /Users/stanley/lattice/` — full directory listing; identify all `.aDNA` vaults
2. For each active vault: check if it contains `how/skills/skill_publish_lattice.md` (or any
   template skill copies) — note which vaults carry the publish skill
3. Check which vaults have a configured `git remote` vs. not (spot-check 3-4 vaults)
4. Read `lattice/CLAUDE.md` project discovery table — the canonical vault list
5. Read `adna/.adna/CHANGELOG.md` — current template version history; confirm current version

**Produce:**

**Ecosystem compatibility matrix** — one row per change, columns per affected vault category:

| Change | New users | Existing vaults (local) | Vaults with publish skill | Workspace root |
|---|---|---|---|---|
| Repo flatten (.adna/) | Clone step changes | `mv adna .adna` or fresh clone | No impact | Symlink removed |
| skill_publish_lattice rewrite | Gets better skill | Must update skill copy | Must configure remote + install hook | n/a |
| node.aDNA/ | Bootstrap instructions in CLAUDE.md | Opt-in; nothing breaks | Opt-in | New directory |
| GitHub repo name | New clone URL | Update remote if renamed | Update remote if renamed | n/a |
| aDNA v7.0 tag | Auto-discovers latest | Can stay on older version | Can stay on older version | n/a |

**Key question to answer:** Are any vault operators external (not Stanley)? If yes, the
communication plan (Obj 9) becomes a public announcement, not just a local migration.

### Obj 1 — Read and orient

With the ecosystem map in hand, read the technical current state:

1. `ls -la adna/` and `ls -la adna/.adna/` — confirm the two-level structure
2. `adna/CLAUDE.md` — workspace-level wrapper (what content does it have that's unique?)
3. `adna/.adna/CLAUDE.md` — the template's own governance; note current version
4. `adna/.adna/adna.md` — the one-page aDNA primer; baseline quality check
5. `adna/.adna/how/skills/` — full skill inventory; list all skills, note any that reference
   the `.adna/` path or the publish workaround
6. `adna/.adna/how/skills/skill_publish_lattice.md` — full read; confirm the rsync pattern
7. `adna/.adna/how/skills/skill_project_fork.md` — how forks work; what gets excluded
8. `adna/.adna/how/skills/skill_install.md` — does it create the symlink? Note the step
9. `adna/.adna/how/templates/` — template files for campaigns, missions, sessions, AARs
10. `adna/.adna/how/skills/skill_onboarding.md` — first-run flow; assess for v7.0 update
11. `git -C adna remote -v` — confirm remote URL; note `Agentic-DNA` name
12. `aDNA.aDNA/STATE.md` — current vault state; confirm Phase 7 complete, Phase 8 queued
13. `aDNA.aDNA/how/backlog/` — list all backlog ideas; any that overlap with this campaign?
14. `Spacemacs.aDNA/how/backlog/` — the two seeded ideas from 2026-05-07

**Produce:** Current-state summary covering: repo structure diagram (ASCII), full skill
inventory table, gaps identified, and a prioritized issue list feeding into Obj 2-10.

### Obj 2 — Design the repo structure simplification

**Current problem:**
```
lattice/
├── adna/               ← git repo (remote: Agentic-DNA.git)
│   ├── .adna/          ← template content (nested inside repo)
│   ├── .git/
│   ├── .github/        ← CI/CD at repo root, not template-level
│   ├── CLAUDE.md       ← workspace-level wrapper (not template)
│   ├── deploy_manifest.yaml
│   ├── LICENSE
│   └── README.md
└── .adna/              ← symlink to adna/.adna (fragile; breaks if adna/ moves)
```

**Target structure:**
```
lattice/
└── .adna/              ← IS the git repo (cloned directly as .adna)
    ├── .git/
    ├── .github/        ← CI/CD (hidden; excluded by skill_project_fork)
    │   ├── workflows/
    │   └── deploy_manifest.yaml
    ├── .gitignore
    ├── CLAUDE.md       ← template CLAUDE.md (becomes forked project's CLAUDE.md)
    ├── MANIFEST.md, STATE.md, AGENTS.md, CHANGELOG.md, CONTRIBUTING.md, adna.md
    ├── README.md       ← GitHub landing page (excluded from fork)
    ├── LICENSE
    ├── how/, what/, who/
    └── setup.sh, prepare_for_onboarding.sh
```

**Decisions to make and record as ADRs:**

**Decision A — GitHub repo name:** Current name is `Agentic-DNA`. Options:
- Keep `Agentic-DNA` — no breaking change to existing clone URLs
- Rename to `adna` — shorter, matches convention; breaking: all existing clones need remote update
- Rename to `.adna` — but GitHub doesn't allow leading-dot repo names
- **Recommend:** Rename to `adna` (cleaner; migration is `git remote set-url origin <new>`);
  provide redirect from `Agentic-DNA` via GitHub repo rename (GitHub preserves old URL for
  a period). Record as ADR.

**Decision B — Outer CLAUDE.md:** The `adna/CLAUDE.md` (workspace-level wrapper) contains
guidance for operating within the `adna/` directory specifically. After flattening:
- Read it during Obj 1 and assess: is the content unique, or does it duplicate `lattice/CLAUDE.md`?
- Option 1: Merge unique content into the template CLAUDE.md as a "workspace setup" section
- Option 2: Drop it; `lattice/CLAUDE.md` is the authoritative workspace router
- Option 3: Convert to a `how/docs/workspace_setup_guide.md` inside the template
- **Likely recommendation:** Option 2 or 3; decide after reading during Obj 1.

**Changes required:**

a) **GitHub repo restructure** (performed by M03):
   - `git mv adna/.adna/* adna/` (flatten template to repo root)
   - `git mv adna/deploy_manifest.yaml adna/.github/deploy_manifest.yaml`
   - Update any workflow that references `deploy_manifest.yaml` at root
   - Delete `adna/.adna/` (now empty)
   - Disposition outer `CLAUDE.md` per Decision B
   - Commit + push to GitHub; create PR if collaborators exist

b) **`skill_project_fork` update** (M03):
   - Source path `.adna/` still works (now points to repo root directly)
   - Add explicit exclusion list: `.git/`, `.github/`, `README.md`, `LICENSE`, `setup.sh`,
     `prepare_for_onboarding.sh` (these are repo-level, not template-level)
   - Add `deploy_manifest.yaml` to exclusion (now in `.github/` but be explicit)

c) **`skill_install` / `skill_onboarding` update** (M03):
   - If either creates the symlink `.adna -> adna/.adna`, remove that step
   - Replace with: `git clone https://github.com/LatticeProtocol/adna.git .adna`
   - Provide in-place migration step for existing users

d) **Workspace `CLAUDE.md` update** (M03):
   - Update project discovery table: `.adna/` is a direct clone, not a symlink
   - Update workspace layout diagram
   - Remove symlink creation from any setup instructions

e) **Migration runbook** (M03 deliverable):
   - Existing users: `rm lattice/.adna && mv lattice/adna lattice/.adna && git -C lattice/.adna remote set-url origin https://github.com/LatticeProtocol/adna.git`
   - Or: delete `adna/` and `.adna`, re-clone: `git clone https://github.com/LatticeProtocol/adna.git .adna`
   - Fresh users: just `git clone https://github.com/LatticeProtocol/adna.git .adna`

**Compatibility validation:** Before closing M03, test that `skill_project_fork` correctly
forks from the restructured `.adna/` and that the resulting vault has no leaked `.git/`,
`.github/`, `README.md`, or `deploy_manifest.yaml`.

### Obj 3 — Design `node.aDNA/` local lattice node vault

**Purpose:** The operator's local lattice control plane. Distinct from `lattice-labs/`
(strategic/operational hub for external-facing work). This vault:
- Tracks what vaults are installed locally, their versions, health
- Tracks machine state (tool chain, Emacs version, node identity)
- Tracks LatticeProtocol network membership
- Serves as the filing destination for cross-project improvement work
- Hosts global campaigns like `campaign_adna_v2_infrastructure`

**Persona: Hestia** — goddess of the hearth. Keeps the fire; maintains the household's
operational continuity; quietly foundational while other personas pursue grand projects.
Operating style: dependable, steady, inventory-focused, escalates clearly when something
breaks. Pairs well with Daedalus (Spacemacs), Hygieia (WilhelmAI), Prometheus (LatticeScope).

**Directory structure:**
```
node.aDNA/
├── CLAUDE.md        ← Startup: bootstrap detection, inventory scan, cross-project routing
├── MANIFEST.md      ← node identity (hostname, operator, lattice memberships)
├── STATE.md         ← live node health: vault inventory, open campaigns, last-updated
├── AGENTS.md
├── what/
│   ├── inventory/
│   │   ├── inventory_vaults.md       ← all installed .aDNA vaults + versions/health/last-sync
│   │   ├── inventory_system.md       ← machine specs, Emacs/tool versions, PATH
│   │   └── inventory_memberships.md  ← LatticeProtocol network memberships + permissions
│   ├── decisions/   ← ADRs for node-level decisions (eg. "use node.aDNA as campaign home")
│   └── context/
│       ├── token_baselines.md        ← from Obj 7 measurement protocol
│       └── node_context_recipes.md   ← context load recipes for cross-vault sessions
├── how/
│   ├── campaigns/   ← global improvement campaigns
│   ├── missions/    ← standalone improvement missions
│   ├── sessions/    ← session history
│   └── skills/
│       ├── skill_node_health_check.md   ← validates all vault health + tool versions
│       └── skill_update_all_vaults.md   ← git pull across all vaults; flags conflicts
└── who/
    └── identity/    ← node's identity on LatticeProtocol network
```

**Bootstrap from workspace CLAUDE.md (`lattice/CLAUDE.md`):**
Add a first-run detection block (matching the pattern from `.adna/CLAUDE.md` §First-Run Detection):
```
Step 0 (before project routing): check if node.aDNA/ exists.
If missing: invoke skill_project_fork to create node.aDNA/ from .adna/;
then run node inventory scan (list all vaults, record to inventory_vaults.md);
then record system state to inventory_system.md;
then set persona (Hestia), STATE.md initial values, git init + first commit.
```

**Template CLAUDE.md addition:** The `.adna/CLAUDE.md` "Step 2 – Route based on context"
section should gain a note: "If a `node.aDNA/` exists, check its STATE.md for cross-vault
context before routing to a project vault." This is the cross-project routing hook.

**Workspace `CLAUDE.md` router update:** Add `node.aDNA/` as the first entry in the project
discovery table, above all `.aDNA` project vaults. Its role: "Local lattice node governance —
inventory, health, cross-project campaigns, network membership."

**10-dimension compliance pre-check for `node.aDNA/`:**
The template fork handles dimensions 1-3 (triad, governance, frontmatter). The planning
mission should specify what node.aDNA supplies for dimensions 4-10:
- D4 FAIR: `MANIFEST.md` carries the FAIR block (license: private; creators: operator)
- D5 Type vocabulary: inventory files use node-specific types (`inventory`, `membership`)
- D6 Versioning: `node.aDNA/` version tracks with the aDNA template version it was forked from
- D7 Federation: `inventory_memberships.md` is the federation block
- D8 Registration: node.aDNA is local-only; registry entry optional
- D9 Companions: inventory YAML companions for structured queries
- D10 Reproducibility: `skill_node_health_check` is the reproducibility gate

### Obj 4 — Design `skill_publish_lattice` rewrite

**Core insight:** The vault IS the git repo. `.gitignore` already excludes private files
(`what/local/`, `how/local/`, `who/operators/`, `deploy/`). The rsync workaround solves a
problem that doesn't exist. Normal `git push` is the publish operation.

**New skill architecture:**

**`skill_git_remote_setup.md`** (new — first-time remote configuration):
```
Step 1: git remote -v → if origin exists, exit (already configured)
Step 2: gh repo create <org>/<name> --public --description "..." --homepage "..."
Step 3: git remote add origin https://github.com/<org>/<name>.git
Step 4: git branch -M main
Step 5: git push -u origin main --tags
Step 6: Record receipt to who/peers/published/<utc>.md
```

**`skill_publish_lattice.md`** (rewritten — normal publish flow):
```
Step 1: git status --porcelain → refuse if uncommitted changes
Step 2: Sanitization scan runs automatically (pre-push hook; see below)
Step 3: git push origin main
Step 4: If milestone: git tag v<N> -m "..." && git push origin v<N>
Step 5: Record publish receipt (commit, tag, timestamp, sanitization: hook-verified)
```

**Pre-push sanitization hook** (`how/standard/hooks/pre-push-sanitize.sh`):
- Runs LAYER_CONTRACT §4 scan automatically on every `git push`
- Exit 1 (FAIL) → push aborted; operator must fix violations and re-push
- Exit 2 (WARN-only) → hook prompts operator confirmation before allowing push
- **Installation:** `skill_deploy` (not just `skill_install`) installs the hook to
  `.git/hooks/pre-push` on every deploy cycle. This ensures hook stays current even if
  the template hook is updated. `skill_install` also installs it on first setup.

**`skill_publish_tarball.md`** (extracted — optional offline artifact):
- Standalone; not required for normal git publish workflow
- For operators who need reproducible offline-shipping artifacts

**Downstream migration per vault (drafted as coordination memo in M08):**
1. `skill_git_remote_setup` — first-time remote configuration (one-time per vault)
2. `skill_deploy` — reinstall pre-push hook (runs automatically on next deploy)
3. Delete `.publish-clone/` if it exists
4. Going forward: `git push` replaces the old publish ritual

**Compatibility note:** Vaults that have never run `skill_publish_lattice` (most vaults)
just need step 1. The breaking change is only for vaults that were actively using the old skill.

### Obj 5 — GitHub repo minimalism

*Largely resolved by Obj 2 (flatten) and Obj 6 (version bump). This objective handles the
remaining minimalism items that survive the flatten.*

After the Obj 2 flatten, the repo root will look like:
```
.adna/ (= the git repo)
├── .git/
├── .github/
│   ├── workflows/
│   └── deploy_manifest.yaml
├── .gitignore
├── [template content]
└── README.md
```

**Remaining items:**
1. **`.github/workflows/` audit** — read each workflow; are they still accurate? Do they
   reference the old `adna/.adna/` path? Update or simplify. Apply `/simplify` discipline.
2. **`deploy_manifest.yaml`** — confirm it moved to `.github/` in Obj 2. Update any workflow
   `uses:` references. Verify CI still passes.
3. **`setup.sh` and `prepare_for_onboarding.sh`** — read both; do they reference the old
   two-level structure? Do they still provide value? If obsoleted by `skill_onboarding`,
   consider removing or reducing to a one-liner wrapper.
4. **`.gitignore` completeness** — verify that `deploy/`, `what/local/`, `how/local/`,
   `who/operators/`, `dist/`, `.publish-clone/`, `*.dryrun.log` are all present.
5. **GitHub repo surface area check** — after all changes, what does a new visitor see at
   the GitHub repo page? Goal: template directories (how/, what/, who/) are browsable;
   `.github/` is hidden in the GitHub UI; README is the authoritative landing page.

### Obj 6 — aDNA template version bump

This campaign's changes constitute the next major template version. This objective designs
the version bump and ensures all version-related artifacts are consistent.

**Current version:** Read from `adna/.adna/CHANGELOG.md` during Obj 1. The template CLAUDE.md
header declares `v6.0`. This campaign targets **v7.0**.

**Version bump checklist:**
a) `adna/.adna/CHANGELOG.md` — add v7.0 entry summarizing all changes from this campaign
b) `adna/.adna/CLAUDE.md` header — update version reference from v6.0 to v7.0
c) `adna/.adna/MANIFEST.md` — update version field
d) Git tag: `git tag v7.0 -m "aDNA v7.0 — infrastructure: flat repo, node.aDNA, publish fix, LatticeScope.aDNA"`
e) GitHub release: create a release from the v7.0 tag with release notes

**Upgrade signal for existing vaults:** The template CHANGELOG is the canonical upgrade
signal. Vault operators who `git pull` their `.adna/` clone will see the CHANGELOG entry.
No other push mechanism is needed — the pull-based model is intentional.

**Semantic versioning discipline:** Define what constitutes a major vs minor vs patch bump
for the aDNA template. Proposed in planning; ratified as ADR:
- **Major (X.0):** Breaking changes to skill interfaces, vault structure, or clone process
- **Minor (X.Y):** New skills, new patterns, new entity types (additive)
- **Patch (X.Y.Z):** Prose improvements, dead link fixes, minor clarifications

This campaign = major (repo structure change is breaking) → v7.0.

### Obj 7 — General repo review and simplify

Apply `/simplify` discipline and best-practice repo hygiene across the `adna` template and
`aDNA.aDNA` vault. Dedicated pass — not incidental to other objectives.

**10-dimension compliance audit** for all new patterns introduced by this campaign:
Apply the 10-dimension scoring rubric (from `what/context/object_standards/`) to:
- `node.aDNA/` template (as it will appear after bootstrap)
- `skill_git_remote_setup.md` (new skill)
- `skill_publish_lattice.md` (rewritten skill)
- `LatticeScope.aDNA/` template (as it will appear at genesis)
Score all 10 dimensions; document in audit findings. Any dimension < 3 must be addressed
before the campaign closes.

**Audit checklist:**

a) **Skill freshness** — for each skill in `.adna/how/skills/`:
   - Is the trigger still accurate?
   - Does it reference deprecated patterns (symlink, `.publish-clone/`, old paths)?
   - Does it pass the dual-audience test? (Can a new operator follow it without prior context?)

b) **Naming consistency** — all files/dirs use underscores, not hyphens. Check for exceptions.

c) **Template completeness** — required frontmatter fields in all template files; YAML schema
   in `what/lattices/lattice_yaml_schema.json` is current; example files in `how/templates/`
   are accurate.

d) **Dead links + orphaned references** — grep for wikilinks and relative paths; verify targets.

e) **Prose simplification** — apply `/simplify` to highest-traffic files:
   - `.adna/CLAUDE.md` (target: 15-20% word-count reduction, no precision loss)
   - `.adna/how/skills/skill_project_fork.md`
   - `.adna/how/skills/skill_onboarding.md`
   Dual-audience test: give the simplified version to a "new operator" persona and verify
   they can follow it without confusion.

f) **aDNA.aDNA vault audit** — same checklist applied locally:
   - Rosetta-specific entity types still needed / well-described post-Phase-7?
   - 13 skills still relevant?
   - STATE.md accurate to post-Phase-7 state?

**Deliverable:** Audit findings table at `missions/artifacts/audit_adna_v2_repo_review.md`
(file → finding → severity → action → status). Apply fixes inline during the mission.

### Obj 8 — Upgrade guide and ecosystem propagation plan

*Companion to M08 in the campaign mission tree. This objective designs the communication and
coordination artifacts; M08 executes them.*

Existing operators cannot discover template changes by magic — they need a clear signal and
actionable steps. This objective produces the communication kit.

**Upgrade guide** (`adna/.adna/how/docs/upgrade_v6_to_v7.md`):
```
Title: Upgrading from aDNA v6 to v7

Overview: what changed and why (3 paragraphs, dual-audience)

Breaking changes:
  1. Repo structure: adna/ → .adna/ (clone path changes)
     Migration: [step-by-step, 2 commands]
  2. skill_publish_lattice: rsync → git push
     Migration: run skill_git_remote_setup; reinstall pre-push hook via skill_deploy

New patterns (opt-in):
  - node.aDNA/ local node vault
  - LatticeScope.aDNA observability project

Non-breaking (just pull and use):
  - aDNA v7.0 tag
  - repo rename (adna)
  - deploy_manifest.yaml → .github/

Validation: run skill_health_check after migration to verify vault is clean
```

**CHANGELOG entry** (in `adna/.adna/CHANGELOG.md`):
- Standard Keep-a-Changelog format
- v7.0 section: Added / Changed / Deprecated / Removed / Fixed / Security

**Coordination memo template** (for vaults with active publish-skill usage):
A short memo (< 1 page) drafted per-vault explaining what to do. M08 fills in the vault name
and sends (or drops a file in the vault's `who/coordination/` dir).

**External users question:** If any vault operators are external to Stanley's `~/lattice/`,
the upgrade guide goes into the aDNA.aDNA docs site (adna-docs.vercel.app) as a new page.
M01 Obj 0 should establish whether external operators exist. If yes, escalate this to an
announcement (GitHub release notes + possible community post).

### Obj 9 — Context/token optimization audit

**Current state:**
- "Context budget is doctrine" (Standing Order #3) — stated but never measured
- Sessions designed around convergence model (Campaign → Mission → Objective)
- Missions estimate effort in "sessions" — a proxy, not a measurement
- No tracking of actual token consumption per session, mission, or campaign type

**Audit protocol:**

a) **Cold-start baseline** — run 3 representative session types and measure token consumption
   at each checkpoint. Use Claude Code's built-in context display, or the Anthropic API's
   `usage` field if running via API. Record in `node.aDNA/what/context/token_baselines.md`:
   - Type A: Startup-only session (CLAUDE.md + STATE.md + active mission; no work done)
   - Type B: P3 sub-group session (startup + reference excerpt + Q&A + record decisions)
   - Type C: Planning mission session (startup + read 10 files + produce design docs)

b) **High-cost pattern identification:**
   - Loading full reference files when only a section is needed → measure cost of full vs excerpt
   - Re-reading files already in context → how often does this happen?
   - Redundant Q&A rounds → how many tokens do multiple Q&A cycles consume vs batch-presenting?
   - Session continuations that reload known state → do handoff prompts add significant cost?

c) **Convergence model validation:**
   - Measure: Campaign-level context vs Mission-level vs Objective-level context cost
   - Does the hierarchy actually reduce tokens, or is the overhead of navigation (~equivalent)?

d) **Claude Code hooks for measurement:**
   Claude Code supports hooks in `settings.json` via the `hooks:` key. The `PostToolUse`
   hook fires after each tool call. A lightweight hook could log tool calls and approximate
   token costs to a local file. Reference: `update-config` skill for hook configuration.
   Design a hook spec that feeds into LatticeScope.aDNA's local collector (Obj 10).

e) **Calibration output:**
   - Revised "effort estimate" formula for missions: X sessions = Y token-budget-equivalents
   - Per-mission-type token profile: planning mission ≈ N tokens; customization session ≈ M tokens
   - Top 3 optimization opportunities by estimated impact

**Output:** Token baseline document + optimization opportunity list, ready to feed LatticeScope.

### Obj 10 — LatticeScope.aDNA — vault design + campaign planning mission

The context/token audit (Obj 9) feeds a larger vision: an open-source observability layer for
distributed agentic systems. This objective designs the `LatticeScope.aDNA/` vault and produces
the **planning mission** for the LatticeScope project.

**What LatticeScope is:**
An open-source tool giving operators visibility into context/token cost of agentic workflows —
locally first, then federated across the lattice network. It liberates observability tooling
from frontier-lab silos and creates a community benchmark for agentic context efficiency.

**Persona: Prometheus** — stole fire from the gods and gave it to humanity; possessed
foresight ("pro-metheus" = forethought). Here: steals context visibility from frontier labs
(where it currently lives as proprietary telemetry) and gives it to operators; foresight as
the ability to predict context budget exhaustion before it happens. Operating style: bold,
technically rigorous, community-oriented, liberation-minded. Pairs with Hestia (node.aDNA —
the steady home that hosts the data) and Daedalus (Spacemacs — the IDE that instruments it).

**`LatticeScope.aDNA/` vault — Platform.aDNA category** (follows the RareHarness pattern):
- Governance vault: `LatticeScope.aDNA/` — owns design, protocol specs, federation schema,
  safety/privacy framework, community governance, ADRs
- Code repo: `latticescope/` — the runtime implementation (collector, store, API, reports)
- GitHub: `github.com/LatticeProtocol/LatticeScope.aDNA` (vault) + `github.com/LatticeProtocol/latticescope` (code)

**Proposed system architecture** (for planning mission to elaborate):

```
latticescope/
├── collector/       ← Claude Code hook integration; captures tool calls, context loads, token counts
│   ├── hook.sh     ← PostToolUse hook; writes to local SQLite store
│   └── schema.sql  ← session, tool_call, context_file, token_usage tables
├── store/          ← SQLite-based local store; no network required; privacy-first
├── reports/        ← per-session, per-mission, per-campaign, per-vault summaries
│   ├── session_report.py
│   └── campaign_budget_report.py
├── federation/     ← optional; share anonymized metrics across lattice nodes
│   ├── schema/    ← JSON-LD compatible federated metric schema
│   ├── aggregator/ ← node-level anonymization + aggregation before sharing
│   └── api/       ← REST API (FastAPI or similar) for metric submission + query
└── benchmarks/     ← community-submitted context load profiles
    ├── profiles/   ← named patterns and their token costs
    └── registry.json ← community benchmark index
```

**10-dimension compliance pre-check for LatticeScope.aDNA:**
- D1 Triad: governance vault has who/what/how structure
- D2 Governance: CLAUDE.md (Prometheus), MANIFEST.md, STATE.md, ADR-000 (project identity)
- D3 Frontmatter: all files carry required fields
- D4 FAIR: Apache-2.0 license; DOI via Zenodo for anchor paper; keywords: observability, context, agentic
- D5 Type vocabulary: new types needed — `metric`, `benchmark`, `context_profile`; request via
  `skill_upstream_contribution` if not in standard vocabulary
- D6 Versioning: semver from v0.1.0; CHANGELOG from day one
- D7 Federation: federation schema IS the product; discoverable: true
- D8 Registration: publish to LatticeProtocol registry when stable
- D9 Companions: YAML companions for all metric schema objects
- D10 Reproducibility: Docker compose + SQLite snapshot enables full local reproduction

**Open-source strategy:**
- License: Apache-2.0 (business-friendly; federation-appropriate)
- Anchor paper: "Context observability in distributed agentic collaboration networks" —
  positions LatticeScope as a research contribution, not just a dev tool
- Community: federated benchmarks submitted by lattice operators → growing dataset of
  real-world agentic context usage patterns; leaderboard shows which context load patterns
  are most token-efficient
- Liberation axis: (1) operators see their own costs; (2) community builds public evidence
  base; (3) decentralized alternative to frontier-lab proprietary observability

**Language recommendation** (planning mission to validate):
- **Python** — fits the existing `latlab/` and ML stack; rich SQLite + FastAPI ecosystem;
  natural for data scientists; `llm-count` and `tiktoken` available for token estimation
- Alternative: TypeScript — if Claude Code integration is primary (hooks are shell scripts,
  but the web dashboard might prefer TS). Hybrid: Python backend + TypeScript dashboard.
- Decision: recommend Python; record as ADR-001 in LatticeScope.aDNA

**Planning mission deliverable** (the output of this Obj):
A complete campaign doc at `node.aDNA/how/campaigns/campaign_lattice_scope/` containing:
- Phase structure (P0: local tool → P1: federation API → P2: benchmark community → P3: anchor paper)
- Full mission tree (M01: SQLite schema + collector hook, M02: report templates, M03: federation API, ...)
- ADR-000: project identity (Prometheus, Platform.aDNA, code repo pairing)
- ADR-001: language choice (Python recommendation)
- First-contributor guide stub
- Privacy framework: what is collected, what is anonymized, what is never shared

### Obj 11 — Final review + next campaign seed

*Governs M11 in the campaign tree. Designed here so M11 agents know what to do.*

After M02-M10 execute, the closing mission:

a) **AAR aggregation** — synthesize AARs from M02-M10:
   - What worked / didn't across all missions?
   - Which findings were validated vs. overturned during execution?
   - What was deferred and into which backlog?

b) **Open items audit** across all affected vaults:
   - `adna/` repo: open issues or PRs?
   - `aDNA.aDNA/how/backlog/`: ideas ready for promotion?
   - `Spacemacs.aDNA/how/backlog/`: `idea_skill_publish_lattice_git_fix` (closeable post-M05?);
     `idea_agentic_layout_system` (still P4 mission — separate campaign)
   - `node.aDNA/how/backlog/`: ideas accumulated during this campaign
   - `LatticeScope.aDNA/how/backlog/`: seeded by M10?
   - `lattice-labs/STATE.md`: blockers or coordination items?

c) **Campaign retrospective:**
   - Did all missions pass their 10-dimension compliance check?
   - Did the upgrade guide land before the breaking changes shipped?
   - Did ecosystem propagation reach all affected vaults?

d) **Next campaign planning doc** — `how/campaigns/campaign_adna_v3_*/` stub:
   - Strategic intent: likely LatticeScope execution, agentic layout system, Phase 8 Rosetta,
     federation protocol hardening, context-commons.aDNA integration
   - Estimated phase count + session budget
   - Dependencies + gate conditions

---

## Deliverables (produced by this planning mission — M01)

| # | Deliverable | Obj | Consumer |
|---|---|---|---|
| 1 | Ecosystem compatibility matrix | 0 | M02, M03, M05, M08 |
| 2 | Current-state summary + skill inventory | 1 | All subsequent missions |
| 3 | Repo structure ADR draft (Decisions A + B) | 2 | M03 |
| 4 | Migration runbook draft | 2 | M03, M08 |
| 5 | `node.aDNA/` design doc + Hestia persona spec | 3 | M04 |
| 6 | 10-dimension compliance pre-check for node.aDNA | 3 | M04 |
| 7 | `skill_publish_lattice` rewrite spec | 4 | M05 |
| 8 | `skill_git_remote_setup` spec | 4 | M05 |
| 9 | Pre-push hook spec | 4 | M05 |
| 10 | GitHub minimalism + workflow audit notes | 5 | M06 |
| 11 | Semver discipline ADR draft | 6 | M06 |
| 12 | Upgrade guide draft (v6 → v7) | 8 | M08 |
| 13 | Coordination memo template | 8 | M08 |
| 14 | Token measurement protocol | 9 | M09 |
| 15 | LatticeScope.aDNA vault design doc + Prometheus persona spec | 10 | M10 |
| 16 | LatticeScope campaign doc draft at `node.aDNA/how/campaigns/campaign_lattice_scope/` | 10 | M10 |
| 17 | 10-dimension compliance pre-check for LatticeScope.aDNA | 10 | M10 |
| 18 | Campaign doc update (mission tree + calibrated effort estimates) | — | All |
| 19 | Session SITREP + next session prompt for M02 | — | Next agent |

---

## Estimated effort

**4 sessions:**
- Session 1: Obj 0 (ecosystem) + Obj 1 (read/orient) → deliverables 1-2
- Session 2: Obj 2-5 (repo structure, node.aDNA, publish fix, minimalism) → deliverables 3-11
- Session 3: Obj 6-8 (version bump, repo review, upgrade guide) → deliverables 12-13 + audit table
- Session 4: Obj 9-11 (token audit, LatticeScope.aDNA, final seed) → deliverables 14-19

Sessions 1-2 are the highest-stakes (design decisions with ecosystem impact). Sessions 3-4
are execution-heavy but lower-risk (review + new project seeding).

---

## Reference

| Resource | Used by |
|---|---|
| `adna/.adna/how/skills/skill_publish_lattice.md` | Obj 4 (rewrite target) |
| `adna/.adna/how/skills/skill_project_fork.md` | Obj 2 (update target) |
| `adna/.adna/how/skills/skill_install.md` | Obj 2 (symlink step removal) |
| `adna/.adna/how/skills/skill_onboarding.md` | Obj 2 (update target) |
| `adna/.adna/CLAUDE.md` | Obj 7 (simplify target); Obj 3 (bootstrap section) |
| `adna/.adna/CHANGELOG.md` | Obj 6 (version bump target) |
| `adna/CLAUDE.md` | Obj 2 (assess for merge/drop, Decision B) |
| `adna/.adna/how/templates/` | Obj 7 (completeness check) |
| `lattice/CLAUDE.md` | Obj 3 (router update for node.aDNA) |
| `Spacemacs.aDNA/how/backlog/idea_skill_publish_lattice_git_fix.md` | Obj 0 (downstream trigger) |
| `Spacemacs.aDNA/how/backlog/idea_agentic_layout_system.md` | Obj 11 (open items) |
| `aDNA.aDNA/STATE.md` | Obj 1 (current vault state) |
| `aDNA.aDNA/how/backlog/` | Obj 1 + Obj 11 |
| Claude Code hooks docs | Obj 9 (PostToolUse hook for token measurement) |
| RareHarness.aDNA pattern | Obj 10 (Platform.aDNA vault+code-repo pairing model) |
| Dual-audience test (CLAUDE.md Standing Order #1) | All objectives |
| `/simplify` skill | Obj 7 (explicit); incidentally throughout |
| 10-dimension compliance rubric (`what/context/object_standards/`) | Obj 3, 6, 10 |
