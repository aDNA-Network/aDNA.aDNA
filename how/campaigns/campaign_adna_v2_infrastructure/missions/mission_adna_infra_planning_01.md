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
tags: [mission, planned, adna, infrastructure, planning, v2, node_vault, publish, lattice_scope]
---

# Mission — M01: aDNA v2 Infrastructure Planning

**Phase**: P0 — Campaign design.
**Class**: planning. Deliverable is a campaign doc + mission tree, not implementation.

---

## Why this mission exists

During a SpaceLattice.aDNA P3-02 customization session (2026-05-07), two structural issues
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
budget empiricism, and a vision for open-source agentic observability tooling.

This planning mission researches, designs, and documents the full campaign response.

---

## Objectives

### Obj 1 — Read and orient

Before designing anything, read the current state:

1. Read `adna/` repo root (`ls -la adna/`, `ls -la adna/.adna/`)
2. Read `adna/CLAUDE.md` (workspace-level wrapper)
3. Read `adna/.adna/CLAUDE.md` (the template's own governance)
4. Read `adna/.adna/how/skills/skill_publish_lattice.md` (the publish skill to fix)
5. Read `adna/.adna/how/skills/skill_project_fork.md` (governs how new vaults are created)
6. Read `adna/.adna/how/skills/skill_install.md` and `skill_deploy.md` (to understand how hooks would install)
7. Check `adna/.adna/how/skills/` for all existing skills — inventory
8. Read `aDNA.aDNA/STATE.md` for current vault state
9. Read `aDNA.aDNA/how/backlog/` — all existing backlog ideas
10. Check `SpaceLattice.aDNA/how/backlog/` — the two seeded backlog items from 2026-05-07

Produce a **current-state summary** covering: repo structure (diagram), skill inventory,
known gaps, and backlog items to address.

### Obj 2 — Design the repo structure simplification

**Current problem:**
```
lattice/
├── adna/           ← git repo (remote: github.com/LatticeProtocol/Agentic-DNA.git)
│   ├── .adna/      ← template content (nested inside the repo)
│   ├── .github/    ← CI/CD (at repo root, not template-level)
│   ├── CLAUDE.md   ← workspace-level wrapper (not template)
│   ├── deploy_manifest.yaml
│   ├── LICENSE
│   └── README.md
└── .adna/          ← symlink to adna/.adna (fragile; breaks if adna/ moves)
```

**Proposed structure:**
```
lattice/
└── .adna/          ← IS the git repo (cloned directly as .adna)
    ├── .git/
    ├── .github/    ← CI/CD (hidden; excluded by skill_project_fork)
    │   ├── workflows/
    │   └── deploy_manifest.yaml  (moved here from repo root)
    ├── .gitignore
    ├── CLAUDE.md   ← template CLAUDE.md (becomes forked project's CLAUDE.md)
    ├── MANIFEST.md
    ├── STATE.md
    ├── AGENTS.md
    ├── CHANGELOG.md
    ├── CONTRIBUTING.md
    ├── README.md   ← GitHub landing page (excluded from fork by skill_project_fork)
    ├── LICENSE
    ├── adna.md
    ├── how/
    ├── what/
    └── who/
```

**Changes required:**

a) **GitHub repo restructure** — flatten: move `adna/.adna/*` to `adna/` root; move
   `deploy_manifest.yaml` to `.github/`; delete the now-empty `adna/.adna/` dir;
   move outer `CLAUDE.md` (workspace-level content) into the template's `CLAUDE.md` as a new
   section (or drop it — it overlaps with the root `lattice/CLAUDE.md` router).

b) **`skill_project_fork` update** — change source path from `.adna/` (symlink) to `.adna/`
   (now the repo root directly). Add `.git/` and `.github/` to the exclusion list (they're
   likely already excluded by the copy step, but make it explicit). Add `README.md` to
   "what to strip" list (the GitHub README shouldn't appear verbatim in forked projects).

c) **Workspace root `CLAUDE.md` update** — update the project discovery table to reflect
   `.adna/` is now a direct clone, not a symlink. Remove the symlink creation step from any
   setup instructions.

d) **`skill_install` update** — if it creates the symlink, remove that step. Provide a
   migration note: `mv lattice/adna lattice/.adna` (after backing up); or fresh clone.

e) **Migration runbook** — write `how/standard/runbooks/migrate_adna_repo_structure.md`:
   - Existing users with `adna/` + `.adna` symlink: how to migrate in-place
   - Fresh users: clone as `.adna/` directly

Design judgment: **does the outer `adna/CLAUDE.md` have unique content worth preserving?**
Read it during Obj 1 and decide whether to (a) merge into template CLAUDE.md, (b) drop it,
or (c) fold into `lattice/CLAUDE.md` root router. Apply simplify discipline.

### Obj 3 — Design `node.aDNA/` local lattice node vault

**Purpose:**
A `node.aDNA/` vault serves as the operator's local lattice control plane — distinct from
`lattice-labs/` (strategic/operational hub) and project-specific vaults. It:
- Tracks what projects/vaults are installed locally (inventory)
- Tracks machine state (Emacs version, tool chain, node health)
- Tracks LatticeProtocol network membership (what networks this node participates in)
- Serves as the home for cross-project global improvement campaigns (like this one)
- Provides a cross-project issue filing destination (when you find a global problem in a
  specific vault, you create a mission in `node.aDNA/`)

**Proposed directory structure:**
```
node.aDNA/
├── CLAUDE.md        ← Startup: bootstrap + inventory + cross-project routing
├── MANIFEST.md
├── STATE.md         ← Node health: installed vaults, last-updated, open campaigns
├── AGENTS.md
├── what/
│   ├── inventory/
│   │   ├── inventory_vaults.md      ← all installed .aDNA vaults + their versions/health
│   │   ├── inventory_system.md      ← machine specs, Emacs version, installed tools/versions
│   │   └── inventory_memberships.md ← LatticeProtocol network memberships + permissions
│   ├── decisions/   ← ADRs for node-level decisions
│   └── context/     ← context files about this node's role/setup
├── how/
│   ├── campaigns/   ← global improvement campaigns (eg. campaign_adna_v2_infrastructure)
│   ├── missions/    ← standalone improvement missions
│   ├── sessions/    ← session history
│   └── skills/      ← node-specific skills (node_health_check, update_all_vaults)
└── who/
    └── identity/    ← this node's identity on the LatticeProtocol network
```

**Bootstrap from workspace CLAUDE.md:**
The root `lattice/CLAUDE.md` should detect absence of `node.aDNA/` on session start and:
1. Note it in the cold-start section
2. Offer to bootstrap using `skill_project_fork` from `.adna/`
3. Run a node inventory scan (list all installed vaults, check versions)
4. Set persona, governance, STATE.md initial values

Separately, the aDNA template's `CLAUDE.md` (at `.adna/CLAUDE.md`) should include a
"workspace setup" section explaining this pattern to users setting up their first lattice.

**Persona for `node.aDNA/`:** Design: propose a persona that fits the "local control plane"
role. Consider: **Hestia** (goddess of the hearth and home — the stable center of the
household; keeps the fire; tends the household's operational continuity). Hestia as the
node's steward is: dependable, quietly operational, focused on continuity and health rather
than grand quests. Pairs well with the more active project personas (Daedalus, Hygieia, etc.).

Draft during planning; operator approves.

**Workspace `CLAUDE.md` router update:** The project discovery table in `lattice/CLAUDE.md`
should gain a `node.aDNA/` entry describing its role. It should appear FIRST in the routing
table (it's the meta-layer above all projects).

**Cross-campaign migration:** Long-running global improvement campaigns currently in
`lattice-labs/` (if any) should be evaluated for migration to `node.aDNA/`. The distinction:
`lattice-labs/` is the strategic/operational hub for EXTERNAL-facing work (protocols,
products, partners); `node.aDNA/` is the LOCAL node's infrastructure and self-improvement.

### Obj 4 — Design `skill_publish_lattice` rewrite

**Core insight:** The vault IS the git repo. `.gitignore` already excludes private files.
The rsync workaround is unnecessary. Normal `git push` is the publish operation.

**Proposed new skill architecture:**

**`skill_git_remote_setup.md`** (new — first-time only):
```
Step 1: Check if remote already configured (git remote -v)
Step 2: If not: gh repo create <org>/<name> --public [options]
Step 3: git remote add origin https://github.com/<org>/<name>.git
Step 4: git branch -M main
Step 5: git push -u origin main
Step 6: git tag v<N> && git push origin v<N>
Step 7: Write receipt to who/peers/published/<utc>.md
```

**`skill_publish_lattice.md`** (rewritten):
```
Step 1: Clean state check (git status --porcelain)
Step 2: Run sanitization scan (LAYER_CONTRACT §4) against working tree
Step 3: If clean: git push origin main (or git push for tracking branch)
Step 4: Tag if milestone release: git tag v<N> && git push origin v<N>
Step 5: Write publish receipt (vault_commit, tag, timestamp)
```

**Pre-push sanitization hook** (`how/standard/hooks/pre-push-sanitize.sh`):
- Runs LAYER_CONTRACT §4 scan automatically on every push
- FAIL aborts push
- WARN prompts operator confirmation
- `skill_install` installs the hook to `.git/hooks/pre-push`

**`skill_publish_tarball.md`** (extracted from old skill — optional):
- For operators who need offline-shipping tarballs
- Standalone; not required for normal git publish workflow

**Downstream impact:** Every vault using the old `skill_publish_lattice` (SpaceLattice,
SiteForge, etc.) will need to:
a) Configure their git remote: `git remote add origin <url>`
b) Install the pre-push hook via `skill_deploy` (one-time)
c) Retire `.publish-clone/` if it exists

Draft a **migration note** that goes into the template CHANGELOG and skill file.

### Obj 5 — GitHub repo minimalism design

**Current adna repo root:**
```
adna/
├── .adna/          ← nested template (proposed: move to root)
├── .git/
├── .github/        ← workflows
├── .gitignore
├── CLAUDE.md       ← workspace-level (not template-level)
├── deploy_manifest.yaml  ← should live in .github/
├── LICENSE
└── README.md
```

**After Obj 2 flattening + this objective:**
```
.adna/              ← IS the git repo (cloned directly)
├── .git/
├── .github/
│   ├── workflows/
│   └── deploy_manifest.yaml
├── .gitignore
├── [template content — CLAUDE.md, how/, what/, who/, etc.]
└── README.md
```

**Specific actions:**
1. `deploy_manifest.yaml` → move to `.github/deploy_manifest.yaml`; update any workflow refs
2. Outer `CLAUDE.md` (workspace wrapper) → assess for merge/drop (see Obj 2 judgment call)
3. Verify `.github/workflows/` content — are the workflows still accurate? Simplify if not.
4. Update `.gitignore` to ensure `deploy/`, `what/local/`, `how/local/`, `who/operators/`
   are in the template's default gitignore (they should be already, but verify)
5. Check if `prepare_for_onboarding.sh` and `setup.sh` are still accurate; simplify or remove

**GitHub repo surface area after:** What a new user sees when they visit the GitHub page:
- README.md (landing page with install instructions)
- LICENSE
- The template directories (how/, what/, who/) — clean, browsable
- .github/ — hidden in GitHub UI by default

### Obj 6 — General repo review and simplify

Apply the `/simplify` skill and best-practice repo hygiene to the `adna` repo and `aDNA.aDNA`
vault. This is a dedicated review pass, not incidental to other objectives.

**Audit checklist:**

a) **Skill freshness** — for each skill in `.adna/how/skills/`:
   - Is the trigger still accurate?
   - Does it reference patterns that have since changed?
   - Are there dead links or references to deprecated mechanisms?
   - Does it pass the dual-audience test?

b) **Naming consistency** — all files and directories should use underscores, not hyphens.
   Check for exceptions. Rename with migration notes where needed.

c) **Template completeness** — does the default template still represent best practice?
   - Are all required frontmatter fields present in all template files?
   - Is the YAML schema in `what/lattices/lattice_yaml_schema.json` current?
   - Are example files in `how/templates/` still accurate?

d) **Dead links and orphaned references** — grep for `[[wikilinks]]` and check targets exist;
   grep for relative paths in skills and verify they resolve.

e) **Prose simplification** — apply `/simplify` to the three highest-traffic files:
   - `.adna/CLAUDE.md`
   - `.adna/how/skills/skill_project_fork.md`
   - `.adna/how/skills/skill_onboarding.md`
   Goal: reduce word count by 15-20% without losing precision or dual-audience clarity.

f) **aDNA.aDNA vault audit** — same checklist applied to this vault:
   - Are the Rosetta-specific entity types still needed / well-described?
   - Are the 13 skills still relevant now that Phases 0-7 are complete?
   - Is STATE.md accurate to the post-Phase-7 state?

**Deliverable:** An audit findings doc at `missions/artifacts/audit_adna_v2_repo_review.md`
with a table: file → finding → action → status. Apply fixes inline during the mission.

### Obj 7 — Context/token optimization audit

**Current state:**
- "Context budget is doctrine" (Standing Order #3) — stated but not measured
- Session design uses convergence model (Campaign → Mission → Objective) to reduce token load
- Missions estimate effort in "sessions" — a proxy, not a measurement
- No tracking of actual token usage per session, mission, or campaign type

**Audit questions to answer:**

a) What does a standard startup checklist cost in tokens?
   - CLAUDE.md load: ~X tokens
   - STATE.md load: ~Y tokens
   - Mission file load: ~Z tokens
   - Active session load: ~W tokens
   - Total cold-start overhead: ~N tokens
   - Remaining budget for substantive work: ~M tokens

b) Are there high-cost patterns we're repeating?
   - Loading full reference files when only a section is needed
   - Re-reading files that are already in context
   - Redundant Q&A rounds that could be batch-presented
   - Session continuations that reload already-known state

c) Does the convergence model actually reduce token use?
   - Compare: campaign-level context vs mission-level vs objective-level
   - Measure: how many tokens does it take to answer a mission-level question cold?

d) Are mission "effort estimates" (X sessions) calibrated to context windows?
   - Are we right that §1.3.X variable groups cost ~0.5 sessions each?
   - Is a "session" always ~80% context utilization or does it vary widely?

**Measurement approach:**
- Use Claude Code's session context display (if available) or token count from API responses
- Run 3-5 representative session types (startup only, full P3 sub-group, planning mission)
  and measure token consumption at each checkpoint
- Build a simple tracking table in `node.aDNA/what/context/token_baselines.md`

**Output:** A token baseline document + a list of optimization opportunities, ranked by
estimated impact.

### Obj 8 — LatticeScope campaign planning mission

The context/token audit (Obj 7) feeds directly into a larger vision: an open-source
observability layer for distributed agentic systems. This objective produces the **planning
mission** for the LatticeScope project — not the implementation, but the campaign plan.

**What LatticeScope is:**

An open-source tool that gives operators visibility into the context/token cost of their
agentic workflows — locally first, then federated across the lattice network.

**Why it matters:**
- Context windows are the primary resource constraint in agentic systems
- Frontier labs (Anthropic, OpenAI, Google) have this data; operators do not
- For distributed multi-stakeholder agentic collaboration networks, context observability
  is a shared infrastructure need — not something each operator should reinvent
- A strong open-source anchor here "liberates the tools of context from the frontier labs"
  and makes federated context optimization possible at the network level

**Proposed architecture (for the planning mission to elaborate):**

```
LatticeScope/
├── local/          ← per-session token tracking (SQLite, no network required)
│   ├── collector   ← hooks into Claude Code session events
│   ├── store       ← session_id, timestamp, tokens_in, tokens_out, context_files_loaded
│   └── reports     ← per-session, per-mission, per-campaign summaries
├── federation/     ← optional: share anonymized metrics across lattice nodes
│   ├── schema      ← federated metric schema (JSON-LD compatible)
│   ├── aggregator  ← node-level aggregation before federation
│   └── api         ← REST API for federated metric submission + query
└── benchmarks/     ← community-submitted lattice config benchmarks
    ├── profiles     ← named context load patterns and their token costs
    └── leaderboard  ← which patterns are most token-efficient
```

**Integration points:**
- Claude Code hooks (session start/end, tool calls, context loads) → local collector
- aDNA session files → retrospective token annotation
- `node.aDNA/what/inventory/` → per-vault context cost profiles

**Open-source strategy:**
- Repo: `github.com/LatticeProtocol/latticescope`
- License: Apache-2.0 (business-friendly, federation-appropriate)
- Anchor paper: "Context observability in distributed agentic collaboration networks" —
  positions LatticeScope as both a practical tool and a research contribution
- Community: federated benchmarks submitted by lattice operators → growing dataset of
  real-world agentic context usage patterns
- Impact axis: (1) helps operators optimize their own workflows; (2) creates public
  evidence base for context window efficiency research; (3) seeds a decentralized
  alternative to frontier-lab-internal observability tooling

**Planning mission deliverable:**
A full campaign doc at `node.aDNA/how/campaigns/campaign_lattice_scope/` with:
- Phase structure (local tool → federation API → benchmark community → anchor paper)
- Mission tree (M01: SQLite schema + collector, M02: report templates, M03: federation API, ...)
- Repo scaffold decision (language: Python? Rust? TypeScript? — recommend and justify)
- ADR-000 for project identity
- First contributor guide

### Obj 9 — Final review + next campaign seed

After M02-M08 execute, this closing mission:

a) **AAR aggregation** — collect and synthesize AARs from M02-M08:
   - What worked / didn't across all missions?
   - Which findings were validated vs. overturned?
   - What was deferred and why?

b) **Open items audit** — scan across all affected vaults:
   - `adna/` repo: any open issues or PRs?
   - `aDNA.aDNA/how/backlog/`: any ideas ready for promotion?
   - `SpaceLattice.aDNA/how/backlog/`: `idea_skill_publish_lattice_git_fix` (should be
     closeable after M04), `idea_agentic_layout_system` (P4 mission — still open)
   - `node.aDNA/how/backlog/`: any ideas accumulated during this campaign?
   - `lattice-labs/STATE.md`: any blockers or coordination items?

c) **Campaign retrospective** — for `campaign_adna_v2_infrastructure` overall:
   - What was the campaign's impact score? (use aDNA ranker or equivalent)
   - What patterns emerged that should be codified in the template?
   - What should be in the next aDNA infrastructure campaign?

d) **Next campaign planning doc** — produce `how/campaigns/campaign_adna_v3_*/` stub with:
   - Strategic intent for the next cycle
   - Top 3-5 themes (likely: LatticeScope execution, agentic layout system, Phase 8 Rosetta,
     federation protocol, context-commons.aDNA integration)
   - Estimated phase count and session budget
   - Dependencies and gate conditions

---

## Deliverables (produced by this planning mission)

1. **Current-state summary** (Obj 1) — repo structure diagram, skill inventory, gap table
2. **Repo structure ADR draft** (Obj 2) — ADR-001 for the flatten + clone-as-.adna change
3. **`node.aDNA/` design doc** (Obj 3) — full structure spec, persona proposal, bootstrap flow
4. **`skill_publish_lattice` rewrite spec** (Obj 4) — new skill files drafted for operator review
5. **GitHub minimalism spec** (Obj 5) — what moves, what's deleted, what's simplified
6. **Audit findings table** (Obj 6) — ready for execution by M06
7. **Token baseline methodology** (Obj 7) — measurement protocol ready for M07
8. **LatticeScope planning mission** (Obj 8) — full campaign doc ready to execute in `node.aDNA/`
9. **Campaign doc update** — `campaign_adna_v2_infrastructure.md` updated with mission tree,
   phase gates, and calibrated effort estimates
10. **Session wind-down** — SITREP + next session prompt for M02

---

## Estimated effort

2 sessions (Obj 1-5 in session 1; Obj 6-10 in session 2).

## Reference

- `adna/.adna/how/skills/skill_publish_lattice.md` — skill to rewrite (Obj 4)
- `adna/.adna/how/skills/skill_project_fork.md` — governs how forks work (Obj 2 + 3)
- `adna/.adna/CLAUDE.md` — template governance (Obj 6 simplify target)
- `adna/CLAUDE.md` — workspace wrapper (assess for merge/drop in Obj 2)
- `lattice/CLAUDE.md` — workspace router (update in Obj 3 for node.aDNA entry)
- `SpaceLattice.aDNA/how/backlog/idea_skill_publish_lattice_git_fix.md` — downstream trigger
- `SpaceLattice.aDNA/how/backlog/idea_agentic_layout_system.md` — peer improvement context
- `aDNA.aDNA/STATE.md` — current vault state
- `aDNA.aDNA/how/backlog/` — existing backlog ideas to incorporate
- Dual-audience test: Standing Order #1 of aDNA.aDNA CLAUDE.md
- `/simplify` skill: apply to all modified files (Obj 6 explicitly; incidentally throughout)
