---
type: mission
mission_id: mission_adna_infra_p1_04_node_adna_bootstrap
campaign: campaign_adna_v2_infrastructure
campaign_phase: 1
status: in_progress
mission_class: implementation  # M04 is the second implementation-class mission of the campaign — bootstraps a new Org-Vault (node.aDNA/) end-to-end + integrates the workspace router with a Step 0 first-run-detection hook + adds template-level cross-project routing
created: 2026-05-11
updated: 2026-05-11
last_edited_by: agent_stanley
opened_at: M03_close_handoff
opened_session: session_stanley_20260511_204433_adna_v2_m04_s1
spec_completeness: complete  # full Read/Produce blocks + Deliverables + Acceptance criteria authored at Session 1 (this session) per M02 first-execution-session pattern
estimated_sessions: 3  # S1 spec authoring (non-destructive); S2 destructive bootstrap + workspace router + template hook + scaffolds; S3 mission close + AAR + 10-dim verification + ADR-010 ratification (if drafted)
prerequisite_missions:
  - mission_adna_infra_planning_01  # M01 produced the node.aDNA design (Obj 3) — the authoritative design source for this mission
  - mission_adna_infra_p1_02_ecosystem_matrix  # M02 locked the 19-vault ecosystem baseline — initial inventory_vaults.md seed list
  - mission_adna_infra_p1_03_repo_flatten  # M03 landed the flat .adna/ template structure that M04 forks from + ADR-008 airlock stub (M04's bootstrap inherits the airlock entry-point) + deferred Operator Decision 2 (workspace router Step 0 block — M04 lands)
prerequisite_adrs:
  - adr_004_campaign_home_stays_in_adna_adna  # accepted — campaign-home boundary (this campaign stays in aDNA.aDNA, NOT in node.aDNA)
  - adr_005_three_way_vault_boundary  # accepted — canonical scope distinction between node.aDNA/, aDNA.aDNA/, lattice-labs/
  - adr_006_github_repo_rename_to_adna  # accepted — node.aDNA references the template at LatticeProtocol/adna in MANIFEST provenance
  - adr_007_outer_adna_claude_md_disposition  # accepted — workspace CLAUDE.md is the customizable file Step 0 lands in; not a symlink
  - adr_008_airlock_template_stub  # accepted — node.aDNA inherits the airlock stub via skill_project_fork (entry-point at how/airlock/AIRLOCK.md; status: inactive default)
  - adr_009_aDNA_naming_convention  # accepted — node.aDNA name honors the lowercase prefix + .aDNA suffix convention
  - adr_010_workspace_step_0_node_routing  # FORECAST — operator-decision at S2 entry whether to draft this ADR codifying the workspace Step 0 mechanism + cross-project routing hook; default: do NOT draft (M01 Obj 3 design is authoritative as planning artifact; operational changes are inline in target files)
ships_to: mission_adna_infra_p2_05_publish_skill_rewrite  # M05 (publish-skill rewrite) follows M04 sequentially in the campaign master mission tree but does NOT block on M04 (M05's scope is independent: `skill_lattice_publish.md` rewrite + new `skill_git_remote_setup.md` + new `skill_deploy.md`)
external_dependencies: []  # M04 is pure-vault + workspace-router + template work; no partner-vault coordination required
tags: [mission, in_progress, adna, infrastructure, p1, m04, v7_0, node_adna, hestia, org_vault, workspace_router_step_0, cross_project_routing, inventory_entity_type, identity_entity_type, implementation, ten_dim_compliance]
---

# Mission — M04: `node.aDNA/` Bootstrap + Hestia Persona + Workspace Router Step 0 Integration

**Phase**: P1 — Ecosystem mapping + upgrade guide ships first + repo flatten + node vault.
**Class**: implementation. M04 is the second implementation-class mission of `campaign_adna_v2_infrastructure` (M03 was first). It executes the `node.aDNA/` design that [[artifacts/m01_obj3_node_adna_design.md|M01 Obj 3]] specified — bootstrapping a new Org-Vault category for per-node operational governance with Hestia as the canonical persona, landing the workspace router's Step 0 first-run-detection block (deferred from M03 Operator Decision 2), and adding a template-level cross-project routing hook to `.adna/CLAUDE.md` so every future forked vault knows about the node vault.

> **Spec authored** at the first execution session
> ([[../../../STATE.md|STATE.md]] Last Session block, M04 Session 1; `session_stanley_20260511_204433_adna_v2_m04_s1`).
> Frontmatter `spec_completeness: complete`. Per locked sequencing M02 → M08a → M03 → **M04**;
> M05 (publish-skill rewrite) is sequentially next but does NOT block on M04 — the
> two missions touch independent scopes.

---

## Strategic Intent

M03 landed the flat template repo structure (14 upstream commits to `LatticeProtocol/adna` at `37cb474..6282680`; ADR-008 ratified; V/R harness 24/24 PASS) and deferred the workspace router Step 0 first-run-detection block to M04 (Operator Decision 2 from M03 spec). The deferred block is the bootstrap mechanism for the new `node.aDNA/` Org-Vault — an opt-in per-node operational vault that tracks installed `.aDNA` vaults, machine state, lattice memberships, and node-operational campaigns. M04 is the mission that **brings the design from [[artifacts/m01_obj3_node_adna_design.md|M01 Obj 3]] into existence as a working vault on this node**, and wires the workspace router so that future operators discover and bootstrap their own `node.aDNA/` automatically.

The mission is **self-referential** (Standing Order #2 + #8). M04 bootstraps `node.aDNA/` on this very node (Stanley's mac) — the operator running M04 is also the first beneficiary of the vault. The Hestia persona installed at M04 close immediately becomes available for any future cross-vault session needing node-scoped context. The 10-dimension compliance target predicted in [[artifacts/m01_obj3_node_adna_design.md|M01 Obj 3 §8]] (42/50 = 84%) is verified empirically at M04's close gate, providing the first end-to-end test of the v7.0 template's fork-and-customize workflow against a real new vault (`skill_project_fork.md` regression R1-R11 in M03 sandboxed the fork mechanics; M04 exercises it in production on `node.aDNA/`).

The mission is **additive, not destructive**. M04 creates new files (the entire `node.aDNA/` tree + 2 upstream backlog ideas in aDNA.aDNA + 1 template upstream commit + workspace router edits) but does not modify any existing partner vault, any existing aDNA.aDNA content beyond campaign + STATE.md governance, or any existing `.adna/` template skill body. The risk profile is **lower than M03** — M03's destructive flatten could have broken every fork in the ecosystem; M04's worst case is "the node vault doesn't quite work and operator deletes it." The trade-off is **broader scope** — M04 touches the workspace router, the template, the campaign vault, and creates a whole new vault, where M03 touched mainly the template repo.

ADR-010 codification is **operator-discretionary at S2 entry**. The Step 0 first-run-detection mechanism and the cross-project routing hook are both new template-level rules — they qualify for ADR codification by precedent (ADRs 006/007/008/009 all codify single-purpose template-level rules). But M01 Obj 3 already specifies both mechanisms in canonical detail (§5 + §6 of the design artifact). The §Operator decisions section surfaces the choice with default = "no ADR-010; M01 Obj 3 design is authoritative as a planning artifact, operational changes are inline in target files."

---

## Hard constraints

- **No node.aDNA/ deletion or destructive rewrite if a prior fork exists**. M04 S2 must verify `node.aDNA/` does NOT already exist before invoking `skill_project_fork.md`. If a prior fork is found (unlikely — this is the first M04 execution), abort with operator guidance + flag for manual reconciliation. Standing Order #6 (archive, never delete) applies — never `rm -rf node.aDNA/`.
- **Workspace router Step 0 + Project Discovery row + Standing Rule 5 land at workspace level only**. The workspace router file `/Users/stanley/lattice/CLAUDE.md` is the single source of truth; not an upstream-template change. Per ADR-007, this file is operator-customizable and is NOT a symlink. M04 edits it directly with operator approval at S2 entry.
- **Template `.adna/CLAUDE.md` cross-project routing hook is operator-discretionary**. M01 Obj 3 §6 specifies a Startup Checklist addition to `.adna/CLAUDE.md` that informs every forked vault about node-scope routing. This is an upstream-repo commit (touches `LatticeProtocol/adna`'s `.adna/CLAUDE.md`). Operator decides at S2 entry whether to include this upstream commit in M04 or defer to M07 (general repo review + simplify). Default: include (the hook is small + low-risk + future-fork-relevant; deferring leaves a forked vault with no routing awareness).
- **No partner-vault content mutation**. M04 touches only `aDNA.aDNA/` (this campaign vault) + `~/lattice/node.aDNA/` (the new vault) + `~/lattice/CLAUDE.md` (workspace router) + optionally `~/lattice/.adna/CLAUDE.md` (template upstream commit, operator-discretionary). No partner vault is edited.
- **Hestia persona installed inline in `node.aDNA/CLAUDE.md`**, not as a separate `who/governance/persona_hestia.md` file. Mirrors the pattern of every other persona in the ecosystem (Rosetta in `aDNA.aDNA/CLAUDE.md`, Daedalus in `Spacemacs.aDNA/CLAUDE.md`, etc.) — the persona spec is part of the vault's CLAUDE.md "Identity & Personality" section. M01 Obj 3 §3 provides the authoritative Hestia spec; M04 copies it verbatim with no substantive changes (whitespace and wrapping permissible).
- **`inventory_*.md` and `identity_*.md` use NEW entity types (`inventory` + `identity`) per ADR-005 + M01 Obj 3 §4**. These are not in the v6.0 base ontology (14 types per [[../../../CLAUDE.md|aDNA.aDNA/CLAUDE.md §Base Ontology]]). M04 ships them as node-local entity types AND files upstream-contribution ideas in `aDNA.aDNA/how/backlog/` per [[../../../how/skills/skill_upstream_contribution.md|skill_upstream_contribution.md]] so the v8.0+ template ontology can absorb them.
- **YAML companion files (D9) ship alongside .md content for `inventory_*` and `identity_*` only**. The 5 inventory + identity MD files (`inventory_vaults.md`, `inventory_system.md`, `inventory_memberships.md`, `identity_node.md`, `identity_lattice_protocol.md`) each get a `.yaml` companion. `STATE.md`, `MANIFEST.md`, `CHANGELOG.md`, `CLAUDE.md`, `README.md` do NOT get YAML companions (these are human-facing + agent-readable directly).
- **Federation block (D7) only in `inventory_memberships.yaml`**. Per M01 Obj 3 §8 D7 — the federation block is shareable=false / discoverable=false by default (node-private posture). Operators flip to true to opt into cross-node inventory observability. Other inventory/identity files do NOT carry federation blocks.
- **No actual machine fingerprint or credential persistence**. `identity_node.md` records hostname + operator alias + machine class (e.g., "Apple Silicon Mac, 16-core, 64GB"). The actual machine fingerprint (CPU serial, MAC addresses, machine UUID) is NOT persisted to the vault — that information lives in OS-managed stores. `skill_node_credentials_audit.md` is redaction-aware per M01 Obj 3 §4 — it names credential SOURCES (e.g., "GitHub PAT in env GITHUB_TOKEN") but never the credential VALUES.
- **Local-by-default**. `node.aDNA/` ships with no remote git origin configured. Operator may add one post-bootstrap if they want cross-node backup, but the default is local-only (Standing Rule 5 per M01 Obj 3 §7). The `MANIFEST.md` FAIR block uses `license: private` by default.
- **No coord memo delivery**. The 17 per-vault coord memos from M08a stay at their authored statuses. M04 mission close does NOT trigger delivery. Memo delivery is operator-discretionary (M03 Items deferred #4).
- **No v7.0 tag execution**. M06 owns v7.0 tag execution (M03 Items deferred #2). M04 may reference the v7.0 tag target in `node.aDNA/CHANGELOG.md` provenance but does not create the tag.
- **Upstream-vs-vault clarity**. M04 may produce **at most ONE** upstream commit to `LatticeProtocol/adna` — the `.adna/CLAUDE.md` cross-project routing hook addition (operator-discretionary at S2 entry per §Operator decisions). All other M04 work lands in `aDNA.aDNA/` (this campaign vault) OR `node.aDNA/` (the new vault) OR `~/lattice/CLAUDE.md` (workspace router file). Confusion between paths is the surfaced risk for implementation-class missions per M03 AAR.
- **Verification gate at mission close**. Session 3 closes only if the 10-dim compliance audit on `node.aDNA/` reports actual ≥ predicted (42/50). Any dimension scoring <3 must be addressed before M04 closes (re-enter S3 with corrective patches) per M01 Obj 3 §9.

---

## Objectives

### Obj 1 — Author the M04 mission spec — Session 1 (this session)

Author this mission spec at `missions/mission_adna_infra_p1_04_node_adna_bootstrap.md` with full Read/Produce blocks per M02 first-execution-session pattern. Decide whether to draft ADR-010 (workspace Step 0 + cross-project routing hook codification) as a fork from this objective.

**Read:**
1. [[artifacts/m01_obj3_node_adna_design.md|M01 Obj 3 node.aDNA design]] — the authoritative design source (418 lines; vault structure + Hestia persona + bootstrap mechanism + template hooks + 10-dim pre-check)
2. [[mission_adna_infra_p1_03_repo_flatten.md|M03 mission spec]] §Hard constraints + §Operator decisions required at Session 2 entry + §Status — precedent for spec structure + operator-decision pattern
3. [[artifacts/aar_m03_repo_flatten.md|M03 AAR]] §Conceptual contributions #2 (3-session shape is mission-class-agnostic) + §Items deferred (M04 inherits Operator Decision 2 deferred workspace router Step 0 block) + §Successful patterns (pre-flight collision-resolution discipline)
4. [[../campaign_adna_v2_infrastructure.md|campaign master]] M04 row + mission tree sequencing — confirms M04 opens at operator discretion + consumes M01 Obj 3 design + Operator Decision 2 from M03
5. [[../../../CLAUDE.md|aDNA.aDNA/CLAUDE.md]] §Base Ontology + §Compliance Dimensions — the 14 base entity types + 10-dim rubric M04 measures `node.aDNA/` against
6. [[../../../what/decisions/adr_004_campaign_home_stays_in_adna_adna.md|ADR-004]] + [[../../../what/decisions/adr_005_three_way_vault_boundary.md|ADR-005]] — node.aDNA scope + campaign-home rule
7. `/Users/stanley/lattice/CLAUDE.md` (workspace router, current state) — target of Step 0 + Project Discovery row + Standing Rule 5 additions
8. `/Users/stanley/lattice/.adna/CLAUDE.md` (template, current post-M03 state) — target of optional cross-project routing hook addition
9. [[mission_adna_infra_p3_08c_standalone_installer.md|M08c spec stub]] — sibling implementation-class mission; precedent for stub-pattern (M04 produces full spec at S1 per M02 first-execution-session pattern, not stub)

**Produce:**
1. **This mission spec** (`missions/mission_adna_infra_p1_04_node_adna_bootstrap.md`): full frontmatter + Strategic Intent + Hard constraints + Objectives 1-7 with Read/Produce blocks + Inputs table + Deliverables table + Acceptance criteria boxes + Cross-references + §Operator decisions required at Session 2 entry + §Status (in_progress at S1 close). Status flips to `completed` at S3 close.
2. **Campaign master M04 row flip** (`planned`/`next` → `in_progress`) + new amendments entry documenting M04 S1 open + spec authoring.
3. **STATE.md update**: Last Session block replacement (M04 S1 open); Next Session Prompt rewrite (S2 destructive bootstrap); header HTML comment refresh; Current Phase §1 status line refresh; Next Steps Primary track refreshed for S2.
4. **ADR-010 decision deferred to §Operator decisions** — Operator decides at S2 entry whether to draft + ratify; default is "no ADR-010, M01 Obj 3 design + this M04 spec are sufficient as authoritative artifacts."

### Obj 2 — Bootstrap `node.aDNA/` via `skill_project_fork.md` + install Hestia identity — Session 2

Invoke `.adna/how/skills/skill_project_fork.md` with project_name = `node` to clone the v7.0 template into `~/lattice/node.aDNA/`. Customize the four governance files (`CLAUDE.md`, `MANIFEST.md`, `STATE.md`, `CHANGELOG.md`) per M01 Obj 3.

**Read:**
1. [[../../../how/skills/skill_project_fork.md|skill_project_fork.md]] (post-M03 v7.0) — full procedure for forking the template into a new `.aDNA` project
2. [[artifacts/m01_obj3_node_adna_design.md|M01 Obj 3]] §3 Hestia persona spec + §2 purpose + §4 directory structure
3. [[../../../CLAUDE.md|aDNA.aDNA/CLAUDE.md]] §Identity & Personality (Rosetta) — pattern source for inline persona in CLAUDE.md
4. Current `/Users/stanley/lattice/.adna/CLAUDE.md` (template, post-M03) — the file `skill_project_fork.md` clones from

**Produce:**
1. **`~/lattice/node.aDNA/` directory** via `skill_project_fork.md` (initial state: template clone with project_name = `node`)
2. **`node.aDNA/CLAUDE.md`**: full Hestia "Identity & Personality" section per M01 Obj 3 §3 (mythological grounding + operating principles + persona pairings + greeting); Project Map updated for node.aDNA-specific structure; Standing Orders adapted (rule numbering preserved; node-specific additions like "Local-by-default" appended); domain knowledge section reflects inventory + identity entity types
3. **`node.aDNA/MANIFEST.md`**: node identity (hostname = stanley-mac; operator = stanley); FAIR block per M01 Obj 3 §8 D4 (`license: private`, `creators: [stanley]`, `keywords: [node, inventory, lattice_membership, host_state]`, `provenance: "forked from .adna/ at v7.0-pre-tag; describes node stanley-mac"`); `_template_version: "7.0"` field
4. **`node.aDNA/STATE.md`**: initial vault inventory snapshot (the ~19 vaults from M02 baseline as the seed list; `last_full_health_check: never` until S2 runs `skill_inventory_refresh.md`); operator's current cross-project context state
5. **`node.aDNA/CHANGELOG.md`**: v0.1 entry per M01 Obj 3 §8 D6 ("Initial bootstrap from .adna/ template at v7.0-pre-tag; Hestia persona installed; inventory_*.md + identity_*.md scaffolds created; workspace router Step 0 first-run-detection block landed")
6. **`node.aDNA/AGENTS.md`**: root agent guide for the new vault (mirrors aDNA.aDNA pattern; references CLAUDE.md as canonical)
7. **`node.aDNA/README.md`**: human-facing overview ("This is your node vault. It tracks installed vaults, machine state, and lattice memberships. Persona: Hestia.")

### Obj 3 — Create `what/inventory/` + `who/identity/` scaffolds + YAML companions — Session 2

Build the directory structure per M01 Obj 3 §4; create the 3 inventory + 2 identity scaffold files + 5 YAML companions; seed the federation block in `inventory_memberships.yaml` per M01 Obj 3 §8 D7.

**Read:**
1. [[artifacts/m01_obj3_node_adna_design.md|M01 Obj 3]] §4 directory structure + §8 D5 + D7 + D9 rubric rationale
2. [[../../../how/skills/skill_lattice_publish.md|skill_lattice_publish.md]] (M03 sandbox-validated v7.0 form) — reference for federation block 6-check schema (shareable / discoverable / source_instance / version_policy / license / keywords)
3. [[artifacts/m01_obj0_ecosystem_matrix.md|M01 Obj 0 ecosystem matrix]] — source for the initial vault list in `inventory_vaults.md`
4. [[artifacts/m01_obj1_current_state.md|M01 Obj 1 current state]] — source for the skill inventory + tool-chain versions per vault

**Produce:**
1. **`node.aDNA/what/inventory/AGENTS.md`**: protocol for inventory entries (frontmatter pattern: `type: inventory` + `subtype: vaults|system|memberships` + standard fields; refresh discipline via `skill_inventory_refresh.md`)
2. **`node.aDNA/what/inventory/inventory_vaults.md`** + **`.yaml`** companion: list of installed `.aDNA` vaults on this node (seeded from M02 19-vault baseline); each entry has name + version + health + last_sync + git_url + governance_path
3. **`node.aDNA/what/inventory/inventory_system.md`** + **`.yaml`** companion: machine class (e.g., "Apple Silicon Mac, 16-core, 64GB"); tool-chain versions (git, node, python, claude-cli, Emacs/Spacemacs version); PATH summary; env-var inventory (NAMES ONLY, never values); shell + OS version
4. **`node.aDNA/what/inventory/inventory_memberships.md`** + **`.yaml`** companion: LatticeProtocol network memberships for this node (peer-id, signing-key reference, permission summary); federation block in `.yaml` per M01 Obj 3 §8 D7 (`federation: { shareable: false, discoverable: false, source_instance: stanley-mac, version_policy: locked, share_policy: opt_in_per_metric, license: private, creators: [stanley], keywords: [node_memberships] }`)
5. **`node.aDNA/who/identity/AGENTS.md`**: protocol for identity entries (frontmatter pattern: `type: identity` + `subtype: node|lattice_protocol` + standard fields; identity drift triggers alert)
6. **`node.aDNA/who/identity/identity_node.md`** + **`.yaml`** companion: this node's identity (hostname = stanley-mac; operator = stanley; machine class; persistent node-UUID generated at S2 if absent; creation timestamp)
7. **`node.aDNA/who/identity/identity_lattice_protocol.md`** + **`.yaml`** companion: this node's LP-network identity (peer-id placeholder, signing-key path reference, permission-set placeholder; `note: filled in when node joins LP network — TBD per LatticeProtocol release`)
8. **`node.aDNA/what/decisions/AGENTS.md`**: protocol for node-level ADRs (e.g., "this machine uses XDG paths instead of HOME"; numbered locally as adr_001+; not coupled to aDNA.aDNA ADR numbering)
9. **`node.aDNA/who/coordination/AGENTS.md`**: protocol for node-level coordination memos (cross-vault notes originating at the node; e.g., "vault X failed health check on stanley-mac at timestamp Y")

### Obj 4 — Author the 4 node-skills — Session 2

Per M01 Obj 3 §9 deliverable 6. Each skill is full-form (frontmatter + Trigger + Read + Produce + Steps + Exit criteria) per the [[../../../how/skills/AGENTS.md|skills protocol]].

**Read:**
1. [[../../../how/skills/AGENTS.md|how/skills/AGENTS.md]] — skills protocol + frontmatter schema
2. [[../../../how/skills/skill_l1_upgrade.md|skill_l1_upgrade.md]] (post-M03 v7.0) — pattern source for full-form skill
3. [[artifacts/m01_obj3_node_adna_design.md|M01 Obj 3]] §4 deliverable 6 (4 node-skills enumerated) + §8 D10 (`skill_node_health_check` is the reproducibility gate)

**Produce:**
1. **`node.aDNA/how/skills/skill_node_health_check.md`**: D10 reproducibility gate. Validates: file-presence (CLAUDE.md, MANIFEST.md, STATE.md, CHANGELOG.md, all inventory_*.md + yaml, all identity_*.md + yaml, all 4 skills); frontmatter validity (yaml.safe_load every .md frontmatter); inventory-vs-disk consistency (each vault listed in inventory_vaults.md exists at the expected path with the expected git_url); federation block validity in inventory_memberships.yaml; last-update freshness (warn if any inventory_*.md older than 7 days). Reports drift in §SITREP form. Exit code 0 = healthy; >0 = drift.
2. **`node.aDNA/how/skills/skill_update_all_vaults.md`**: runs `git pull --ff-only` across every vault listed in `inventory_vaults.md`. Per-vault outcome: pulled-clean / already-up-to-date / merge-conflict / network-error / not-a-git-repo. Emits a §SITREP table. Does NOT auto-resolve merge conflicts (flags `#needs-human`).
3. **`node.aDNA/how/skills/skill_inventory_refresh.md`**: rebuilds `inventory_vaults.md` + `.yaml`, `inventory_system.md` + `.yaml` from current node state. Detects new vaults at `~/lattice/*.aDNA/` (or `~/lattice/<grandfathered-names>/`); detects removed vaults (was-listed-now-missing); detects version-drift (semver bump in target vault's CHANGELOG.md vs inventory recorded version). Updates `STATE.md` `last_full_health_check` timestamp.
4. **`node.aDNA/how/skills/skill_node_credentials_audit.md`**: enumerates credential SOURCES (NAMES ONLY, redaction-aware per M01 Obj 3 §4): env-vars matching `*_TOKEN`, `*_KEY`, `*_SECRET`; gh CLI auth status (token-name only, not token value); ssh keys at `~/.ssh/*.pub` (public keys only); keychain entries by name (where queryable). Emits redacted summary. Flags `#needs-human` if expired tokens detected (where the auth-status check provides expiry info).

### Obj 5 — Workspace router Step 0 + Project Discovery row + Workspace Layout + Standing Rule 5 — Session 2

Per M01 Obj 3 §5 + §7. Lands at `/Users/stanley/lattice/CLAUDE.md` (workspace router, not a symlink per ADR-007). Operator-approved at S2 entry per §Operator decisions.

**Read:**
1. `/Users/stanley/lattice/CLAUDE.md` (workspace router, current state)
2. [[artifacts/m01_obj3_node_adna_design.md|M01 Obj 3]] §5 (Step 0 block to add — verbatim source) + §7 (Project Discovery row + Workspace Layout addition + Standing Rule 5 — verbatim source)

**Produce:**
1. **Step 0 first-run-detection block** (`## Step 0: Node Vault Detection (before project routing)` + Steps 0.1-0.4) inserted **before** the existing `## Project Discovery` section. Verbatim copy from M01 Obj 3 §5.
2. **Project Discovery first row** (above existing aDNA.aDNA row): `node.aDNA/` | local lattice node governance | `node.aDNA/CLAUDE.md`. Verbatim copy from M01 Obj 3 §7.
3. **Workspace Layout addition**: new line for `node.aDNA/` placed near the top of the ASCII tree (alphabetically before aDNA.aDNA OR at top per router prominence — operator picks at S2 entry per §Operator decisions).
4. **Standing Rule 5 appended**: "`node.aDNA/` is local-by-default. Do not push it to a remote unless the operator explicitly configures one. Inventory + machine fingerprints + memberships may carry sensitive node identity; the `inventory_memberships.yaml` federation block governs any opt-in cross-node sharing." Verbatim copy from M01 Obj 3 §7.

### Obj 6 — Template `.adna/CLAUDE.md` cross-project routing hook + upstream-contribution backlog files — Session 2

Per M01 Obj 3 §6 + §8 D5. Two distinct sub-deliverables: (a) upstream commit to `LatticeProtocol/adna` template adding the cross-project routing hook to `.adna/CLAUDE.md` (operator-discretionary at S2 entry per §Operator decisions); (b) two backlog idea files in `aDNA.aDNA/how/backlog/` for the new `inventory` + `identity` entity types per `skill_upstream_contribution.md`.

**Read:**
1. `/Users/stanley/lattice/.adna/CLAUDE.md` (template, post-M03 state) — target file for the cross-project routing hook (Startup Checklist addition)
2. [[artifacts/m01_obj3_node_adna_design.md|M01 Obj 3]] §6 (verbatim block) + §8 D5 (entity-type upstream-contribution rationale)
3. [[../../../how/skills/skill_upstream_contribution.md|skill_upstream_contribution.md]] (post-M03 v7.0) — backlog idea file pattern (`idea_upstream_*` prefix; rationale + proposed change + impact + suggested ADR slot)
4. [[../../../how/backlog/AGENTS.md|how/backlog/AGENTS.md]] — backlog frontmatter schema

**Produce:**
1. **Template `.adna/CLAUDE.md` cross-project routing hook** (operator-discretionary upstream commit): adds the §Cross-project routing hook (NEW v7.0) block per M01 Obj 3 §6 to the existing `## Agent Protocol` § `### Startup Checklist` section. Commit message: "v7.0: add cross-project routing hook for node.aDNA-aware forks". If operator defers per §Operator decisions, M07 picks this up.
2. **`aDNA.aDNA/how/backlog/idea_upstream_inventory_entity_type.md`**: proposes adding `inventory` to the v8.0+ template ontology as a new entity type under WHAT. Rationale: M04's `node.aDNA/what/inventory/` directory introduces a per-node inventory entity that's structurally distinct from `context`/`decisions`/`modules`/`lattices`. Proposed ADR slot at template level. Impact: low (new entity type; no existing-vault breakage).
3. **`aDNA.aDNA/how/backlog/idea_upstream_identity_entity_type.md`**: proposes adding `identity` to the v8.0+ template ontology as a new entity type under WHO. Rationale: M04's `node.aDNA/who/identity/` directory introduces a per-node identity entity that's structurally distinct from `governance`/`team`/`coordination`. Proposed ADR slot at template level. Impact: low (new entity type; no existing-vault breakage).

### Obj 7 — 10-dim compliance verification + ADR-010 ratification (if drafted) + AAR + mission close — Session 3

Run the 10-dimension compliance audit on the completed `node.aDNA/` per [[../../../CLAUDE.md|aDNA.aDNA/CLAUDE.md §Compliance Dimensions]] + M01 Obj 3 §8 rubric. Produce audit findings table. If any dimension scores <3, re-enter S3 with corrective patches. Author M04 AAR. Flip M04 mission status `in_progress → completed`. Update campaign master M04 row + STATE.md.

**Read:**
1. [[artifacts/m01_obj3_node_adna_design.md|M01 Obj 3]] §8 — the 10-dim rubric + per-dimension scoring rationale (predicted 42/50)
2. [[../../../CLAUDE.md|aDNA.aDNA/CLAUDE.md]] §Compliance Dimensions — the canonical 10-dim definitions
3. `node.aDNA/` (all created files from Obj 2-6) — the target of the audit
4. [[artifacts/aar_m03_repo_flatten.md|M03 AAR]] — style precedent for M04 AAR (lightweight 5-line + 4-category extended findings)
5. [[../../../how/templates/template_aar_lightweight.md|template_aar_lightweight.md]] — AAR template

**Produce:**
1. **`missions/artifacts/m04_obj7_ten_dim_audit.md`**: audit findings table (one row per dimension; predicted score / actual score / delta / evidence / corrective-patch-applied-this-session). Target ≥42/50.
2. **`missions/artifacts/aar_m04_node_adna_bootstrap.md`**: M04 AAR (lightweight 5-line + 4-category extended findings appendix: Successful patterns / Surprises and friction / Conceptual contributions / Items deferred). Style: M03 AAR + M08a AAR precedent. Identify the load-bearing finding (candidate: "node.aDNA is the first new Org-Vault category instance created entirely within campaign_adna_v2_infrastructure — the first end-to-end test of the v7.0 fork-and-customize workflow on a real new vault").
3. **M04 mission file status flip**: frontmatter `status: in_progress → completed` + `closed_at` + `closed_session` + `sessions_actual` + new §Status block paragraph
4. **Campaign master M04 row flip**: `in_progress → completed` (with AAR + 10-dim audit cross-references); M05 row stays at `planned` (M04 does not gate M05); new amendments entry documenting M04 mission close
5. **ADR-010 ratification** (if drafted at S1 per §Operator decisions): `status: proposed → accepted` + `ratified` + `ratified_session` fields. If not drafted, skip.
6. **STATE.md mission-close update**: Last Session block; Next Session Prompt (rewrite for next session — could be M05 if operator continues, or pause if operator takes a break)

---

## Inputs from M01 + M02 + M03

| Source | Artifact | Use in M04 |
|---|---|---|
| M01 Obj 0 | `m01_obj0_ecosystem_matrix.md` | Seed list for `inventory_vaults.md` (19-vault baseline) |
| M01 Obj 1 | `m01_obj1_current_state.md` | Skill inventory + tool-chain versions per vault — informs `inventory_system.md` schema |
| M01 Obj 3 | `m01_obj3_node_adna_design.md` | **Authoritative design source** — every M04 deliverable maps to a section here |
| M01 Obj 6 | `m01_obj6_version_bump_checklist.md` | Reference for `node.aDNA/CHANGELOG.md` v0.1 entry format |
| M02 | `m02_obj5_ecosystem_baseline_locked.md` | 19-vault baseline verified — seed for `inventory_vaults.md` |
| M03 | `mission_adna_infra_p1_03_repo_flatten.md` §Status | Workspace router Step 0 block deferred to M04 (Operator Decision 2) |
| M03 | `aar_m03_repo_flatten.md` §Conceptual contributions | 3-session shape; pre-flight collision-resolution discipline (applied to M04 pre-flight Explore agent at S2 entry) |
| M03 | upstream `.adna/` template post-flatten | M04 forks from this state via `skill_project_fork.md` |
| M03 | `adr_008_airlock_template_stub.md` (accepted) | `node.aDNA/how/airlock/AIRLOCK.md` inherits the stub at fork time (status: inactive default) |
| ADR-005 | `adr_005_three_way_vault_boundary.md` (accepted) | `node.aDNA/`'s canonical scope; M04 enforces by what is NOT in scope (no aDNA-standard work; no LP-org work) |

---

## Deliverables

| # | Deliverable | Session | Acceptance |
|---|---|---|---|
| 1 | M04 mission spec (this file) | S1 | This file exists with `status: in_progress` + `spec_completeness: complete` |
| 2 | Campaign master M04 row flipped to `in_progress` + amendments entry | S1 | Row text + amendments entry verified via grep |
| 3 | STATE.md S1 close + S2 Next Session Prompt | S1 | Last Session block + Next Session Prompt sections updated |
| 4 | ADR-010 draft (operator-discretionary at S2 entry) | S1 or skipped | If drafted: `what/decisions/adr_010_workspace_step_0_node_routing.md` exists at `status: proposed` |
| 5 | `node.aDNA/` directory bootstrapped via `skill_project_fork.md` | S2 | `~/lattice/node.aDNA/` exists with template-fork file set |
| 6 | `node.aDNA/CLAUDE.md` with Hestia identity | S2 | Hestia persona section verbatim from M01 Obj 3 §3 (whitespace permissible) |
| 7 | `node.aDNA/MANIFEST.md` with node identity + FAIR block | S2 | `hostname`, `operator`, FAIR fields populated per M01 Obj 3 §8 D4 |
| 8 | `node.aDNA/STATE.md` with initial vault inventory snapshot | S2 | Initial 19-vault snapshot present; `last_full_health_check: never` |
| 9 | `node.aDNA/CHANGELOG.md` with v0.1 entry | S2 | v0.1 entry per M01 Obj 3 §8 D6 wording |
| 10 | `node.aDNA/AGENTS.md` + `README.md` | S2 | Both files present; README is human-facing overview |
| 11 | `node.aDNA/what/inventory/` (AGENTS.md + 3 MD + 3 YAML) | S2 | 7 files total; federation block in `inventory_memberships.yaml` |
| 12 | `node.aDNA/who/identity/` (AGENTS.md + 2 MD + 2 YAML) | S2 | 5 files total |
| 13 | `node.aDNA/what/decisions/AGENTS.md` + `who/coordination/AGENTS.md` | S2 | 2 protocol files for empty directories |
| 14 | `node.aDNA/how/skills/` × 4 node-skills | S2 | 4 skills present, each with frontmatter + Trigger + Read + Produce + Steps + Exit criteria |
| 15 | Workspace router Step 0 block + Project Discovery row + Workspace Layout + Standing Rule 5 | S2 | 4 additions to `/Users/stanley/lattice/CLAUDE.md` |
| 16 | Template `.adna/CLAUDE.md` cross-project routing hook (operator-discretionary upstream commit) | S2 | If included: upstream commit to LatticeProtocol/adna |
| 17 | `aDNA.aDNA/how/backlog/idea_upstream_inventory_entity_type.md` | S2 | File exists + `idea_upstream_` prefix + proposes v8.0+ ontology addition |
| 18 | `aDNA.aDNA/how/backlog/idea_upstream_identity_entity_type.md` | S2 | File exists + `idea_upstream_` prefix + proposes v8.0+ ontology addition |
| 19 | 10-dim audit findings table | S3 | `missions/artifacts/m04_obj7_ten_dim_audit.md` exists; actual ≥ 42/50 |
| 20 | M04 AAR | S3 | `missions/artifacts/aar_m04_node_adna_bootstrap.md` exists; lightweight 5-line + 4-category extended findings |
| 21 | M04 mission file status flip + campaign master M04 row + amendments + STATE.md | S3 | All status fields updated; M05 row stays planned |
| 22 | ADR-010 ratification (if drafted) | S3 | If drafted: `status: proposed → accepted` |

**Total**: 19-22 deliverables (4 operator-discretionary: ADR-010 draft + ADR-010 ratification + template upstream commit + workspace router Layout-ordering choice).

---

## Acceptance criteria

Per the deliverables table. Mission closes when:

- [ ] All 19 non-discretionary deliverables landed
- [ ] 10-dim audit ≥ 42/50 (any dimension <3 must be addressed before close)
- [ ] M04 AAR authored per Standing Order #5
- [ ] Mission file `status: completed`
- [ ] Campaign master M04 row `completed`
- [ ] STATE.md reflects M04 close
- [ ] No partner-vault mutations (verified via `git diff --stat` on partner-vault paths)
- [ ] No M08a output mutations (verified via `git diff --stat` on M08a paths)
- [ ] No M03 output mutations except expected M04-side touches (verified via `git diff --stat`)
- [ ] M03 still at `status: completed`; ADR-008 still at `status: accepted`
- [ ] `node.aDNA/` `skill_node_health_check.md` exits with code 0 (no drift detected post-bootstrap)
- [ ] Workspace router Step 0 block verified via grep at `/Users/stanley/lattice/CLAUDE.md`
- [ ] Two upstream-contribution backlog files exist in `aDNA.aDNA/how/backlog/`
- [ ] If template upstream commit included: LatticeProtocol/adna at HEAD+1 (one new commit since M03 close)
- [ ] All Standing Orders honored (#1 phase gate at S2 entry + #2 self-reference in node.aDNA/CLAUDE.md + #5 AAR + #6 archive-not-delete + #7 dual-audience + #8 self-reference + #9 upstream spec + #10 cross-link)

---

## Cross-references

| Reference | Direction |
|---|---|
| [[artifacts/m01_obj3_node_adna_design.md|M01 Obj 3]] | **authoritative source for every M04 deliverable** |
| [[mission_adna_infra_planning_01.md|M01 mission]] | spec → this mission |
| [[mission_adna_infra_p1_02_ecosystem_matrix.md|M02 mission]] | seeds inventory_vaults.md |
| [[mission_adna_infra_p1_03_repo_flatten.md|M03 mission]] | flatten precedes M04; M04 inherits Operator Decision 2 (workspace router Step 0 block) |
| [[artifacts/aar_m03_repo_flatten.md|M03 AAR]] | 3-session shape precedent + pre-flight collision-resolution discipline |
| [[../../../what/decisions/adr_004_campaign_home_stays_in_adna_adna.md|ADR-004]] | campaign stays in aDNA.aDNA, NOT in node.aDNA |
| [[../../../what/decisions/adr_005_three_way_vault_boundary.md|ADR-005]] | node.aDNA scope (per-node operational) — distinct from aDNA.aDNA + lattice-labs |
| [[../../../what/decisions/adr_006_github_repo_rename_to_adna.md|ADR-006]] | node.aDNA/MANIFEST.md provenance references LatticeProtocol/adna |
| [[../../../what/decisions/adr_007_outer_adna_claude_md_disposition.md|ADR-007]] | workspace CLAUDE.md is the customizable file Step 0 lands in (not a symlink) |
| [[../../../what/decisions/adr_008_airlock_template_stub.md|ADR-008]] | node.aDNA inherits airlock stub via skill_project_fork |
| [[../../../what/decisions/adr_009_aDNA_naming_convention.md|ADR-009]] | node.aDNA name honors lowercase-prefix + .aDNA-suffix convention |
| ADR-010 (forecast) | workspace Step 0 + cross-project routing hook codification; OPERATOR DECISION at S2 entry whether to draft |
| [[../../../how/skills/skill_project_fork.md|skill_project_fork.md]] | invoked at S2 Obj 2 to bootstrap node.aDNA |
| [[../../../how/skills/skill_upstream_contribution.md|skill_upstream_contribution.md]] | informs the 2 backlog idea files for inventory + identity entity types |
| [[../../../CLAUDE.md|aDNA.aDNA/CLAUDE.md]] | §Base Ontology + §Compliance Dimensions — 10-dim rubric source |
| `/Users/stanley/lattice/CLAUDE.md` | workspace router — target of Step 0 + Project Discovery row + Standing Rule 5 |
| `/Users/stanley/lattice/.adna/CLAUDE.md` | template — target of optional cross-project routing hook |
| [[mission_adna_infra_p2_05_publish_skill_rewrite.md|M05 mission]] (planned) | sequential successor; does NOT block on M04 |
| [[mission_adna_infra_p3_08c_standalone_installer.md|M08c mission stub]] | references M04 in `prerequisite_missions:` — M08c installer surfaces opt-in node.aDNA bootstrap to greenfield operators |

---

## Operator decisions required at Session 2 entry

Surface as a single AskUserQuestion block at S2 open. Defaults apply if operator hasn't specified by Pre-flight close.

1. **D1 — ADR-010 draft (workspace Step 0 + cross-project routing hook codification)**
   - **Option A**: Draft `adr_010_workspace_step_0_node_routing.md` at S1 (this session) as `status: proposed`; ratify at S3 mission close. Mirrors ADR-008 lifecycle for template-level architectural rules.
   - **Option B (recommended; default)**: No ADR-010. M01 Obj 3 design + this M04 spec are sufficient authoritative artifacts. Operational changes are inline in target files (workspace CLAUDE.md + template CLAUDE.md + node.aDNA/CLAUDE.md). Reduces ADR churn for non-architectural operational mechanisms.
   - **Default if absent**: Option B (no ADR-010).

2. **D2 — Template `.adna/CLAUDE.md` cross-project routing hook (upstream commit at M04 S2 vs defer to M07)**
   - **Option A (recommended; default)**: Include the upstream commit at M04 S2 Obj 6. The hook is small (~20 lines), low-risk (additive, no breaking changes), and future-fork-relevant (every forked vault after this commit gets node-aware routing). Commit to `LatticeProtocol/adna` from `~/lattice/.adna/`. Single commit, separate from any aDNA.aDNA commits.
   - **Option B**: Defer to M07 (general repo review + simplify). Leaves a window where forked vaults have no node-aware routing.
   - **Default if absent**: Option A (include in M04 S2).

3. **D3 — Workspace Layout ordering for node.aDNA/ entry**
   - **Option A (recommended; default)**: Top of the ASCII tree (router prominence — node.aDNA is the per-node operational vault Berthier consults first).
   - **Option B**: Alphabetical within `*.aDNA` projects (after `aDNA.aDNA/` per `n` > `a`).
   - **Default if absent**: Option A (top of tree).

4. **D4 — `skill_node_credentials_audit.md` redaction strictness**
   - **Option A (recommended; default)**: NAMES ONLY (env-var names, gh CLI auth status without token, ssh public-key filenames, keychain entry names). Never any credential value, hash, or fingerprint.
   - **Option B**: NAMES + last-4-chars of any token-like string (helps disambiguate "which AWS key is this?" but persists a small information leak in the vault).
   - **Default if absent**: Option A (NAMES ONLY).

5. **D5 — `inventory_vaults.md` seed list scope (M02 baseline only vs M02 baseline + grandfathered named projects)**
   - **Option A (recommended; default)**: M02 baseline + grandfathered named projects (lattice-labs/, lattice-protocol/, latlab/, adna/, lattice-dataroom/, whitepaper/, etc. — the named projects per workspace CLAUDE.md). Full inventory of what's actually installed at `~/lattice/`.
   - **Option B**: M02 19-vault `.aDNA` baseline only (cleaner ontologically — only `.aDNA` projects in inventory; named projects are infrastructure).
   - **Default if absent**: Option A (full inventory).

---

## Status

**In progress** at Session 1 open 2026-05-11T20:44:33Z+ (`session_stanley_20260511_204433_adna_v2_m04_s1`). Spec authoring is this session's sole work; non-destructive throughout. Mission frontmatter `status: in_progress`; `spec_completeness: complete` (full Read/Produce blocks per M02 first-execution-session pattern). 19-22 deliverables across 3 sessions (4 operator-discretionary). Acceptance criteria: 14 checks.

Hard constraints carried forward from M03 (M08a outputs untouched, partner memos embargo-held, public-announcement drafts held until M06, ADR-008 ratified stays accepted, M03 outputs at completed) + M04-specific (node.aDNA archive-not-delete, workspace router edits operator-approved at S2, template hook operator-discretionary at S2, redaction-aware credentials skill, local-by-default node vault, single upstream commit max from M04). §Operator decisions section enumerates 5 discretionary calls with Rosetta recommendations (B/A/A/A/A).

Session 2 entry (destructive bootstrap + workspace router + template hook + scaffolds + skills) REQUIRES OPERATOR APPROVAL per Standing Order #1 (phase gates are human gates). Session 3 pre-allocated for 10-dim audit + AAR + mission close + optional ADR-010 ratification (if drafted at S1 per D1).

**Self-reference (Standing Order #2)**: This mission demonstrates the M01 Obj 3 design by enacting it — every section of M01 Obj 3 lands as a concrete file in `node.aDNA/`. The campaign documents Hestia by installing her. The cross-link discipline (≥15 wikilinks across Read/Produce blocks + Cross-references + Inputs table) honors Standing Order #10. The dual-audience discipline (Standing Order #7) is exercised: lightweight Strategic Intent + Hard constraints accessible to any operator; objective-by-objective Read/Produce blocks technically precise for the S2 executor. The mission's chosen mission_class (`implementation`) matches M03's class — M04 is the second of the campaign — and its 3-session shape (S1 spec / S2 execute / S3 close) matches the load-bearing finding from M03 AAR §Conceptual contributions #2 (3-session shape is mission-class-agnostic; M04 provides the third instance after M03 implementation + M08a authoring).
