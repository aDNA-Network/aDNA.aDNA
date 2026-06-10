---
type: artifact
artifact_type: design_spec
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_p1_04b_workspace_ux_planning
session: session_stanley_20260512_200414_adna_v2_m04b_s1
spec_target: ~/aDNA/ as an Obsidian vault
spec_scope:
  - .obsidian/ minimal config (4 files + snippets/)
  - HOME.md home page (Bases gallery reading from node.aDNA inventory)
  - .obsidianignore (excludes all *.aDNA/ subfolders)
  - LP registry/marketplace link
  - sub-vault opening pattern
d5_resolution: local  # all M-LWX-02 outputs land at ~/aDNA/; nothing upstreamed to .adna/ template
operator_decisions_resolved:
  D2: b (Obsidian +Bases)
  D3: a (exclude *.aDNA/ via .obsidianignore)
  D4: a (marketplace web link only)
implements_in_mission: M-LWX-02
created: 2026-05-12
updated: 2026-05-12
status: spec_complete
last_edited_by: agent_stanley
tags: [artifact, design_spec, obsidian, lattice_workspace, home_page, gallery, vault_in_vault, bases, marketplace_link, m04b, obj3, d2_b, d3_a, d4_a, d5_local]
related_artifacts:
  - m04b_obj1_dynamic_ux_gap_analysis.md
  - m04b_obj2_skill_node_bootstrap_interview_spec.md
  - m01_obj3_node_adna_design.md
external_references:
  - "node.aDNA/.obsidian/ precedent (9 config files; M04 S2 fork output)"
  - "node.aDNA/.obsidianignore precedent (24 lines; .git/ + Python/Node build artifacts + .DS_Store)"
  - "node.aDNA/what/inventory/inventory_vaults.yaml (data source for HOME.md gallery; 21 vaults + 11 named projects + 3 drift entries)"
---

# M04b Obj 3 — Design Spec: `~/aDNA/` as Obsidian Vault

> **Mission deliverable** for M04b Obj 3 per [[../mission_adna_infra_p1_04b_workspace_ux_planning.md|M04b spec §Objectives]]. Designs the workspace-root Obsidian vault setup so the operator can open `~/aDNA/` itself as a vault, browse a context-graph gallery (reading from `node.aDNA/what/inventory/inventory_vaults.yaml`), link to the LP marketplace, and open individual `.aDNA/` vaults as nested sessions. **D5 resolution**: all M-LWX-02 outputs land **local** at `~/aDNA/`; nothing upstreamed to `.adna/` template (workspace-scope, not template-scope).

---

## Design intent

The operator currently has 21 `.aDNA/` vaults + 11 named projects under `~/aDNA/`, each opened individually in Obsidian when needed. The workspace root (`~/aDNA/`) is *not* an Obsidian vault — there's no `.obsidian/` directory at the root, so the operator has no single pane-of-glass for the full lattice. M-LWX-02 closes this loop by adding a **minimal Obsidian vault at `~/aDNA/`** that:

1. Renders a **HOME.md gallery** of all context graphs (vaults + named projects) on this node, reading from `node.aDNA/what/inventory/inventory_vaults.yaml` as the source of truth — keeping data ownership in `node.aDNA/` (Hestia's domain) and view in the outer vault.
2. Surfaces a **marketplace link** to `lattice-protocol.com/marketplace` (web destination; placeholder URL until M-LWX-02 confirms actual).
3. **Excludes inner `.aDNA/` vaults** from the outer vault's indexer via `.obsidianignore` (so the outer vault doesn't try to index 21 nested Obsidian vaults, which would conflict).
4. Documents the **sub-vault opening pattern** — operator opens `~/aDNA/` for "control plane" navigation; opens specific `.aDNA/` separately when working inside that project.

The setup is **minimal** (4 config files + snippets/) and **opinionated** (Bases for the gallery, per D2=b; the operator may extend with community plugins later).

---

## Operator decisions resolved (M04b S1)

| Decision | Resolution | Rationale |
|---|---|---|
| **D2 — Obsidian vault depth** | **(b) markdown + canvas + Bases** | Bases is built into modern Obsidian (no plugin install); renders `inventory_vaults.yaml` as a queryable, sortable, groupable table without external dependencies. Operator can extend with community plugins later. |
| **D3 — Vault-in-vault handling** | **(a) exclude `.aDNA/` via `.obsidianignore`** | Zero-conflict path. Each `.aDNA/` retains its own `.obsidian/`. Outer vault focuses on "control plane" usage. Inner vaults opened separately as needed. |
| **D4 — Marketplace integration** | **(a) web link only** | Zero-effort. Obsidian extension is future work (potentially v8.0+ or a separate LP project). M-LWX-02 ships a markdown link. |
| **D5 — Upstream template changes for Obj 3** | **local** | `~/aDNA/.obsidian/` + `~/aDNA/HOME.md` + `~/aDNA/.obsidianignore` are workspace-scope (this operator's machine); not template-scope (future forks make their own Obsidian-vault choices). |

---

## Deliverables forecast for M-LWX-02 (implementing this spec)

| # | File | Path | Source |
|---|---|---|---|
| 1 | `app.json` | `~/aDNA/.obsidian/app.json` | Authored per §1 below |
| 2 | `appearance.json` | `~/aDNA/.obsidian/appearance.json` | Authored per §1 below |
| 3 | `core-plugins.json` | `~/aDNA/.obsidian/core-plugins.json` | Authored per §1 below |
| 4 | `workspace.json` | `~/aDNA/.obsidian/workspace.json` | Authored per §1 below (initial layout opens HOME.md) |
| 5 | `community-plugins.json` | `~/aDNA/.obsidian/community-plugins.json` | Authored per §1 below (empty `[]`) |
| 6 | `HOME.md` | `~/aDNA/HOME.md` | Authored per §2 below (Bases gallery + marketplace link + nav) |
| 7 | `.obsidianignore` | `~/aDNA/.obsidianignore` | Authored per §3 below (excludes `*.aDNA/` + all named-project dirs + build artifacts + system files) |
| 8 | Workspace router update | `~/aDNA/CLAUDE.md` | New Step 0.4 or addendum to Step 0.3 — offers Obsidian-vault setup after `node.aDNA/` bootstrap (per §4 below) |

**8 deliverables** for M-LWX-02 (5 Obsidian config files + HOME.md + .obsidianignore + 1 workspace router update). Estimated 2 sessions per M04b spec (config authoring + home-page authoring + integration test).

---

## §1 — `.obsidian/` minimal config (5 files)

The outer vault config is intentionally lean. Each file's purpose + content sketch:

### 1.1 `app.json` (workspace-wide settings)

```json
{
  "promptDelete": true,
  "alwaysUpdateLinks": true,
  "newLinkFormat": "relative",
  "useMarkdownLinks": false,
  "attachmentFolderPath": "./attachments",
  "showInlineTitle": true,
  "showViewHeader": true
}
```

**Purpose**: safe defaults — confirm before delete, keep wiki-style `[[Link]]` links (Obsidian native), relative paths for portability, inline attachments under `./attachments`. Matches `node.aDNA/.obsidian/app.json` precedent.

### 1.2 `appearance.json` (theme + font)

```json
{
  "baseFontSize": 16,
  "cssTheme": "",
  "translucency": false
}
```

**Purpose**: theme = default light/dark per system; no custom CSS theme (operator-opt-in via community plugins later). Translucency off (cleaner for screenshots / video capture). Matches `node.aDNA/.obsidian/appearance.json` precedent.

### 1.3 `core-plugins.json` (enable built-in plugins)

```json
[
  "file-explorer",
  "global-search",
  "switcher",
  "graph",
  "backlink",
  "outgoing-link",
  "tag-pane",
  "page-preview",
  "templates",
  "outline",
  "word-count",
  "bases",
  "canvas",
  "command-palette"
]
```

**Purpose**: enable the standard navigation + indexing plugins + **Bases** (per D2=b) + Canvas (for any future canvas-based gallery view) + Command Palette (operator productivity). 14 plugins; all built into Obsidian; no install required.

### 1.4 `community-plugins.json` (empty)

```json
[]
```

**Purpose**: D2=b chose Bases (built-in); no community plugins preloaded. Operator may install Templater, Dataview, Calendar, etc. later — this file just declares the empty initial state.

### 1.5 `workspace.json` (initial layout: HOME.md open)

```json
{
  "main": {
    "id": "main",
    "type": "split",
    "children": [
      {
        "id": "home_pane",
        "type": "leaf",
        "state": {
          "type": "markdown",
          "state": {
            "file": "HOME.md",
            "mode": "preview"
          }
        }
      }
    ],
    "direction": "vertical"
  },
  "left": {
    "id": "left",
    "type": "split",
    "children": [{"id": "files", "type": "leaf", "state": {"type": "file-explorer"}}]
  },
  "active": "home_pane",
  "lastOpenFiles": ["HOME.md"]
}
```

**Purpose**: on first open of `~/aDNA/` as a vault, Obsidian shows HOME.md in preview mode (reading view, not edit) — the operator sees the gallery immediately.

---

## §2 — `HOME.md` home-page gallery

Operator-facing entry. Sections:

### 2.1 Header + identity

```markdown
---
type: home_page
node: stanley-mac
operator: stanley
governance: node.aDNA/CLAUDE.md
updated: <date>
---

# Lattice — stanley-mac

> The context lattice on this node. Hestia (the per-node persona) lives at [[node.aDNA/CLAUDE]]. This is your control plane — browse vaults, jump into specific projects, link out to the marketplace.

**Operator**: stanley · **Node**: stanley-mac · **Vault count**: 21 `.aDNA/` projects + 11 named projects (see `node.aDNA/what/inventory/inventory_vaults.yaml` for canonical state).
```

The header reads identity from `node.aDNA/` (single source of truth — Hestia's domain). M-LWX-02 reads `node.aDNA/MANIFEST.md` `hostname` + `operator` to fill these.

### 2.2 Context graphs (Bases gallery — primary deliverable)

```markdown
## Context Graphs

```base
source: node.aDNA/what/inventory/inventory_vaults.yaml
extract: vaults
columns:
  - name: name
    label: Vault
    link: path
  - name: class
    label: Class
    group_by: true
  - name: health
    label: Health
    badge: true
  - name: governance
    label: Governance
    link: governance
  - name: note
    label: Notes
sort: class, name
```

(Bases view renders inline. Reads the YAML, groups by `class` so the operator sees `forge`, `framework`, `platform`, `org_vault`, etc. as sections. Clicking the `name` opens the vault path; clicking `governance` opens the governance CLAUDE.md.)
```

> **Note**: the exact Bases query syntax above is illustrative. M-LWX-02 confirms the Bases YAML/JSON schema against the installed Obsidian version (Bases moves quickly; the schema may evolve). Fallback: markdown table generator that pre-renders the gallery from `inventory_vaults.yaml` at HOME.md write time, regenerable on inventory_refresh.

### 2.3 Named projects (Bases gallery)

```markdown
## Named Projects (grandfathered + sibling code repos)

```base
source: node.aDNA/what/inventory/inventory_vaults.yaml
extract: named_projects
columns:
  - name: name
    label: Project
    link: path
  - name: type
    label: Type
    group_by: true
  - name: sibling_for
    label: Sibling for
    link_target: vaults.name
sort: type, name
```
```

### 2.4 Marketplace link (D4=a web link)

```markdown
## Marketplace

[Lattice Protocol marketplace](https://lattice-protocol.com/marketplace) — discover, publish, and federate context graphs across the LP network.

> M-LWX-02 confirms the actual marketplace URL. If the destination is not yet public at M-LWX-02 entry, the link falls back to a placeholder noting "TBD per LP marketplace launch (M0X)" and is updated in a follow-on session.
```

### 2.5 Tools & quick nav

```markdown
## Tools

- [[node.aDNA/CLAUDE|Hestia (this node's persona)]]
- [[aDNA.aDNA/CLAUDE|Rosetta (aDNA standard authority)]]
- [[lattice-labs/CLAUDE|Berthier (LP operational vault)]]
- Run `claude` from this terminal pane (Obsidian terminal plugin or external).
- Run `node.aDNA/how/skills/skill_node_health_check.md` to validate node state.
- Run `node.aDNA/how/skills/skill_inventory_refresh.md` to refresh `inventory_vaults.yaml` (re-renders the gallery on next HOME.md open).

## Recent activity

(Optional Section — populated by a future "latest sessions" view if M-LWX-02 chooses to wire it; M-LWX-02 Stage A keeps this static or omits.)
```

### 2.6 Total HOME.md size forecast

~80-120 lines of markdown including 2 Bases blocks. Renders in <100ms on modern Obsidian.

---

## §3 — `.obsidianignore` (vault-in-vault exclusion)

The outer vault MUST NOT index inner `.aDNA/` Obsidian vaults — each has its own `.obsidian/` directory + its own indexer + its own file watcher. If the outer vault tries to index them, file events collide and the indexer slows dramatically (every `.aDNA/` would be re-indexed when its inner Obsidian touches a file).

### 3.1 Pattern (full file content)

```
# .obsidianignore — Excluded from Obsidian's file watcher and indexer at ~/aDNA/.
# These paths are completely invisible to the outer-vault Obsidian (no FSEvents, no indexing).
# Separate from app.json userIgnoreFilters which only affect search/links/graph.
#
# CRITICAL: This file enforces the vault-in-vault exclusion pattern. Every *.aDNA/ subfolder
# is its own Obsidian vault with its own .obsidian/ directory; the outer vault never indexes
# them (operator opens inner vaults separately as needed; see HOME.md §Tools).

# --- Inner vaults (the vault-in-vault exclusion) ---
*.aDNA/

# --- Grandfathered named projects (not Obsidian vaults; large code trees) ---
lattice-labs/
lattice-protocol/
latlab/
latlab-lab/
lattice-dataroom/
whitepaper/
videoforge/
rare-archive/
rareharness/
siteforge-demos/
lattice-video-forge/

# --- Working / build directories ---
modules/
lattices/
datasets/
results/
shared/
l2-extraction/

# --- External dependencies (cloned repos) ---
llama.cpp/
lunarpro-build-kit/

# --- Archive ---
_archive/

# --- Hidden + git + system ---
.adna/
.git/
.DS_Store
node_modules/
.venv/
__pycache__/
*.pyc
*.egg-info/
.ipynb_checkpoints/
```

### 3.2 What the outer vault DOES index

Only these stay visible to the outer-vault Obsidian indexer:

- `HOME.md` (the home-page gallery)
- `CLAUDE.md` (the workspace router — operator can edit it from inside Obsidian)
- `.gitignore` (root-level; informational)
- Any future workspace-root markdown files (e.g., a workspace `NOTES.md`, a workspace `CHANGELOG.md` if added)
- `attachments/` (if the operator adds attachments via HOME.md)

The outer vault is **deliberately sparse** — its job is navigation + identity, not content.

### 3.3 Maintenance

When the operator forks a new `.aDNA/` vault, the `*.aDNA/` glob excludes it automatically — no `.obsidianignore` edit required. When a new named project (non-`.aDNA/`) is added, the operator must add it to `.obsidianignore` manually. M-LWX-02 documents this in HOME.md §Maintenance.

---

## §4 — Sub-vault opening pattern (documentation)

Operator workflows + the protocol HOME.md teaches:

### 4.1 Working inside a specific vault (e.g., `aDNA.aDNA/`)

```
1. From outer ~/aDNA/ Obsidian: navigate to HOME.md gallery, click `aDNA.aDNA` (or use Cmd+P → "Open vault folder")
2. Operator gets system file-manager pop-up; they "Open with Obsidian" on the `aDNA.aDNA/` directory
3. Obsidian opens `aDNA.aDNA/` as a separate vault (separate window); the inner `aDNA.aDNA/.obsidian/` config takes effect
4. Operator works inside that vault — Rosetta (the aDNA.aDNA persona) is in scope; node.aDNA is NOT in scope from the inner vault
5. When done, close the inner-vault window — the outer ~/aDNA/ vault stays open in its own window
```

### 4.2 Cross-vault navigation

The outer vault is for *control plane* tasks (browsing the gallery, comparing vault states at a glance, jumping to a vault). Inner vaults are for *content work* (writing artifacts, running missions, editing skills).

Wikilinks from HOME.md (e.g., `[[node.aDNA/CLAUDE]]`) **don't open as wikilinks inside the inner vault** — they open as preview-only because the inner vault is a separate index. M-LWX-02 documents this gotcha in HOME.md §Maintenance with the workaround (right-click → "Show in file manager" → operator opens inner vault separately).

### 4.3 Multi-monitor flow (operator-discretionary)

For operators with multi-monitor setups (H3 from the interview): outer vault on one monitor (gallery + control plane), inner vault on another (focused work). Obsidian supports multiple windows natively.

---

## §5 — Workspace router update (`~/aDNA/CLAUDE.md`)

The workspace router currently has Step 0 for node.aDNA detection (4 sub-steps: 0.1 detect / 0.2 PRESENT / 0.3 MISSING-offer-bootstrap / 0.4 FRESH-INSTALL-skip). M-LWX-02 adds a **new Step 0.5** (or amends Step 0.2 PRESENT branch) for Obsidian-vault setup:

### 5.1 New Step 0.5 — Obsidian Vault Detection

```markdown
### Step 0.5: Obsidian Vault Detection (after node vault routing)

Run: `test -d .obsidian && echo PRESENT || echo MISSING`

#### Step 0.5.1 (PRESENT)
`~/aDNA/.obsidian/` exists — workspace is already an Obsidian vault. Continue.

#### Step 0.5.2 (MISSING) — offer to set up

If `~/aDNA/.obsidian/` is missing AND `node.aDNA/` is present (from Step 0):

> "I notice you have `node.aDNA/` (N vaults registered) but `~/aDNA/` itself is not an Obsidian vault. The Obsidian vault layer adds a HOME.md gallery of all your context graphs, a marketplace link, and `.obsidianignore` to keep inner vaults from conflicting. This is opt-in. Set up now? (~30 seconds; nothing destructive — adds `.obsidian/` config + `HOME.md` + `.obsidianignore` at workspace root.)"

If the operator declines, proceed; do not re-ask in subsequent sessions unless the operator triggers a workspace UX session.

If the operator accepts:
1. Run `M-LWX-02 setup` skill (or inline: write the 5 `.obsidian/` config files + HOME.md + .obsidianignore from M04b Obj 3 spec)
2. Confirm: "Workspace Obsidian vault ready. You can open `~/aDNA/` in Obsidian now to see the gallery."
3. Continue to Step 1 (project routing).
```

### 5.2 D5 disposition

The Step 0.5 addition is **local** (workspace-router scope; `~/aDNA/CLAUDE.md`). Not upstreamed to `.adna/CLAUDE.md`. Rationale: Obsidian-vault preference is operator-discretionary; not every future fork's operator wants Obsidian. The choice stays local; future operators discover it via the workspace router prompt if they want.

---

## §6 — Integration test (M-LWX-03 will execute)

End-to-end UX validation requirements:

| Test | Method | Pass criterion |
|---|---|---|
| Outer vault opens cleanly | Operator opens `~/aDNA/` in Obsidian | No errors; HOME.md visible in preview mode |
| Inner `.aDNA/` excluded | Check Obsidian file explorer doesn't list any `.aDNA/` subfolder | No `.aDNA/` directories visible in outer vault's file pane |
| Bases gallery renders | Open HOME.md preview | Bases blocks render as queryable tables (or markdown fallback if Bases schema mismatch); 21 vaults + 11 named projects listed |
| Marketplace link clickable | Click marketplace link in HOME.md preview | Opens browser to `lattice-protocol.com/marketplace` (or placeholder destination) |
| Sub-vault opening | From HOME.md, "Show in file manager" on `aDNA.aDNA/` → "Open with Obsidian" | `aDNA.aDNA/` opens in a separate Obsidian window with its inner config active |
| `.obsidianignore` enforces | Trigger a file event inside `aDNA.aDNA/` (e.g., touch a file via terminal) | Outer vault's indexer doesn't pick it up (verify via outer vault's "Files" pane unchanged) |
| HOME.md regenerates on inventory_refresh | Run `node.aDNA/how/skills/skill_inventory_refresh.md` | If markdown-fallback gallery: HOME.md re-rendered with current vault list; if Bases gallery: re-renders on next HOME.md open (no re-write needed) |
| Workspace router Step 0.5 fires | Move `.obsidian/` away temporarily; start a fresh `claude` session at `~/aDNA/`; check Step 0.5 prompt fires | Operator gets the Step 0.5.2 MISSING offer; declining + accepting both behave per spec |

8 integration tests. M-LWX-03 runs them on Stanley's Mac (this node) as the canonical reference; capture results in `cross_graph_findings_to_v2.md` per the mini-campaign's verification strategy.

---

## §7 — D5 resolution: local

**Decision**: all M-LWX-02 outputs land **local** at `~/aDNA/`; nothing upstreamed to `.adna/` template.

**Per-artifact rationale**:
- `~/aDNA/.obsidian/` — workspace-scope. Future forks of `.adna/` template don't all want Obsidian; making the workspace-vault setup a template default would impose a UX choice on operators who prefer plain terminal or non-Obsidian editors.
- `~/aDNA/HOME.md` — reads from `node.aDNA/what/inventory/inventory_vaults.yaml`, which is operator-specific (different nodes have different vault lists). Templating HOME.md upstream would just produce a placeholder that the operator re-writes; the local-only path is simpler.
- `~/aDNA/.obsidianignore` — encodes this operator's workspace layout (which named projects exist, which working directories exist). Future operators have different layouts; the file is per-machine by nature.
- `~/aDNA/CLAUDE.md` Step 0.5 — the workspace router itself is operator-customizable per ADR-007 (it's not a symlink). The Step 0.5 addition stays in the local workspace router.

**Contrast with Obj 2's upstream decision**: `skill_node_bootstrap_interview.md` is upstream because it operates *on* a fresh fork (the skill itself doesn't care about the operator's workspace UX preferences). The Obsidian vault setup is *for* the operator's workspace — fundamentally local.

**Implication for M-LWX-01 / M-LWX-02 sequencing**: M-LWX-01 (interview skill, upstream) and M-LWX-02 (Obsidian vault setup, local) are **independent** — they can run in any order or in parallel. The mini-campaign's mission tree (Obj 4) reflects this independence.

---

## Self-reference (Standing Order #2)

This spec demonstrates the vault-in-vault discipline by *enacting* it: the outer-vault design refers to inner `node.aDNA/what/inventory/inventory_vaults.yaml` as a data source (not as a Bases-indexable file the outer indexer scans), and the `.obsidianignore` pattern enforces the boundary at the indexer level. The discipline matches ADR-005 (three-way vault boundary): `node.aDNA/` owns the inventory data; `aDNA.aDNA/` owns the design that consumes that data into a viewable artifact; `~/aDNA/` (the workspace-vault layer) hosts the resulting view. Three distinct scopes; one coherent data flow.

If the same design were applied to a different node (a fresh Mac, a Linux workstation, a remote server), the *structure* would be identical — `.obsidian/` config + HOME.md + `.obsidianignore` + Step 0.5 in the workspace router — but the *content* would differ (the inventory_vaults.yaml on that node lists different vaults). The framework generalizes.

The dual-audience discipline (Standing Order #7) is exercised: the file-by-file content sketches (§1) are accessible to any operator (they can read what each config file does); the indexer-conflict explanation (§3) is technically precise for the M-LWX-02 implementer; the integration test table (§6) is testable for M-LWX-03.

---

## Cross-references

| Reference | Direction |
|---|---|
| [[../mission_adna_infra_p1_04b_workspace_ux_planning.md|M04b mission spec]] §Obj 3 | parent objective |
| [[m04b_obj1_dynamic_ux_gap_analysis.md|Obj 1 gap analysis]] | input — M04 items #1-2 deferred (registry_stub + rebuild_procedure) potentially resolved by HOME.md gallery |
| [[m04b_obj2_skill_node_bootstrap_interview_spec.md|Obj 2 interview spec]] | sibling — Obj 2 ships upstream; Obj 3 stays local; M-LWX-01 + M-LWX-02 independent |
| [[m01_obj3_node_adna_design.md|M01 Obj 3 design]] §4 inventory_vaults | data source for the HOME.md gallery |
| `node.aDNA/.obsidianignore` (precedent) | inner-vault precedent for ignore-pattern syntax; outer vault expands with `*.aDNA/` glob |
| `node.aDNA/.obsidian/{app,appearance,core-plugins,community-plugins,workspace}.json` (precedent) | inner-vault config precedent; outer vault uses same schema with workspace-scope choices |
| `node.aDNA/what/inventory/inventory_vaults.yaml` | data source (21 vaults + 11 named projects + 3 drift entries) |
| [[../../../what/decisions/adr_005_three_way_vault_boundary.md|ADR-005]] | three-scope vault boundary; outer + node + project scopes coexist via vault-in-vault discipline |
| [[../../../what/decisions/adr_007_outer_adna_claude_md_disposition.md|ADR-007]] | workspace CLAUDE.md is customizable (not symlinked); Step 0.5 addition is locally editable |
| `campaign_lattice_workspace_ux/missions/mission_lwx_02_*.md` (TBD) | implementer of this spec |
| `campaign_lattice_workspace_ux/missions/mission_lwx_03_*.md` (TBD) | integration test executor (8 tests from §6) |

---

## Status

**Spec complete.** 5 `.obsidian/` config files + HOME.md content sketch (with Bases fallback to markdown) + `.obsidianignore` pattern + sub-vault opening pattern + Step 0.5 workspace-router addition specified. D5 resolution: local (workspace-scope). 8 integration tests defined for M-LWX-03. Ready for M-LWX-02 implementation.
