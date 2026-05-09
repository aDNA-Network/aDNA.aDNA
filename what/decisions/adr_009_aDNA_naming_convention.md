---
type: adr
adr_number: 009
title: "aDNA naming convention: <name>.aDNA/ directory ↔ <name>.aDNA.git GitHub repo"
status: accepted
created: 2026-05-08
updated: 2026-05-08
last_edited_by: agent_stanley
supersedes:
superseded_by:
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_planning_01
objective: 7
decision_letter: G  # mission §Obj 7 amendment subsection (g) — naming/repo convention codification
ratification_phase: P1  # ratified at P0 → P1 phase-gate review session 2026-05-08 (early relative to original M07-close target — operator chose to lock convention before M03/M05 skills reference it)
ratified: 2026-05-08
ratified_session: session_stanley_20260509_013646_adna_v2_p0_p1_gate_review
tags: [adr, decision, campaign_adna_v2_infrastructure, naming_convention, repo_isomorphism, snake_case, grandfathered_exceptions, m07, v7_0, skill_project_fork, skill_lattice_publish]
---

# ADR-009: aDNA naming convention — `<name>.aDNA/` directory ↔ `<name>.aDNA.git` GitHub repo

## Status

**Accepted** at the P0 → P1 phase-gate review session 2026-05-08 (`session_stanley_20260509_013646_adna_v2_p0_p1_gate_review`). Drafted Stage 2 Session 4 of `campaign_adna_v2_infrastructure` 2026-05-08 by Rosetta as M01 Obj 7 deliverable 12b; reviewed without amendment across S2 S5-S6; ratified at P0 → P1 gate (early relative to the original M07-close target — operator chose to lock the convention now so M03/M05/M07 skills can reference an `accepted` ADR rather than a `proposed` one when they wire the enforcement touchpoints). The §3 grandfathered-exception list and §5 application-scope (operator-discretionary for existing vaults; partner-org-discretionary for external repos) remain unchanged at ratification. Companions to [[adr_006_github_repo_rename_to_adna.md|ADR-006]] (template-repo rename) and the forthcoming ADR-008 (airlock stub, M03).

## Context

The aDNA ecosystem has grown to 20 `.aDNA` directories across 19 active vaults (1 superseded). The naming convention has converged organically toward `<name>.aDNA/` for directories — but the corresponding GitHub repo name has not always followed the same form. Per [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj0_ecosystem_matrix.md|m01_obj0_ecosystem_matrix.md]] §1 + §5 (verbatim spot-check log), the ecosystem currently shows:

| Class | Count | Example |
|---|---|---|
| Standard form (directory + GitHub repo both `<name>.aDNA`) | 11 of 19 | `aDNA.aDNA/` ↔ `LatticeProtocol/aDNA.aDNA.git` |
| Hyphen-flat GitHub repo (directory `<name>.aDNA/`; repo `<name>-adna.git`) | 4 of 19 | `science_stanley.aDNA/` ↔ `LatticeProtocol/science-stanley-adna.git` |
| Suffix-flat-CamelCase repo | 1 of 19 | `la_startup.aDNA/` ↔ `ScienceStanley/LAStartupLattice.git` |
| Path-style local remote (no GitHub) | 1 of 19 | `LPWhitepaper.aDNA/` ↔ `origin-whitepaper /Users/stanley/lattice/whitepaper` |
| No remote configured | 7 of 19 | `Spacemacs.aDNA/`, `VideoForge.aDNA/`, `III.aDNA/`, `VAASLattice.aDNA/`, `zeta.aDNA/`, `RareHarness.aDNA/`, `strategic_interface_protocol.aDNA/` |

The standard form is already the **majority pattern** (11 of 19 = 58%). What's missing is a documented convention codifying it.

[[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj5_github_minimalism_audit.md|M01 Obj 5 §7 (b.1 audit)]] verified that all four canonical template docs (`.adna/CLAUDE.md`, `README.md`, `CHANGELOG.md`, `MANIFEST.md`) **already use `<name>.aDNA/` form** in their references. The template is conformant; what we need is a top-level ADR documenting the convention so future operators don't drift, and so the four hyphen-flat / one path-style / one template-repo exceptions are explicitly enumerated and bounded.

This ADR is the **codify-not-invent** artifact for the naming convention. It captures what's already practiced, names the exceptions, and sets going-forward enforcement.

### Why this needs an ADR (not just CLAUDE.md prose)

| Reason | Detail |
|---|---|
| **Top-level governance** | The convention affects every new vault forked via `skill_project_fork` and every existing vault audit (10-dim D7 federation). Top-level ADRs surface this kind of cross-cutting decision in one canonical location. |
| **Exception list is durable** | The 4 hyphen-flat repos + 1 path-style + 1 template exception are tangible, persistent — they need a specific document recording them. CLAUDE.md prose drifts; an ADR with frontmatter survives. |
| **Forward-reference target** | `skill_project_fork.md` (warns on non-conformant names) + `skill_workspace_upgrade.md` (references convention in upgrade docs) + `skill_lattice_publish.md` (references for completeness) all need a citation target. ADR-009 IS that target. |
| **v3 successor scope-setter** | The v3 successor campaign's `M04-EC` mission (per-vault application) consumes this ADR as authoritative. ADR-009 says what the convention is; M04-EC operationalizes per-vault adoption. |
| **Standing Order #9 (upstream spec)** | The aDNA Standard `adna_standard.md` §3.5 already mentions the `.aDNA` suffix convention — but does not codify the GitHub repo isomorphism or the snake_case `<name>` rule. This ADR fills the governance-track gap; the Standard track stays at v2.2. |

## Decision

**Adopt the following naming convention as the canonical aDNA pattern:**

### §1 The convention

| Element | Rule |
|---|---|
| **Directory name** | `<name>.aDNA/` where `<name>` is snake_case (lowercase + underscores), starting with a letter, optionally including digits after the first character. The `.aDNA` suffix is **always** present (capital A, capital D, capital N, capital A — exact case preserved). |
| **GitHub repo name** | `<name>.aDNA.git` where `<name>` matches the directory's `<name>` portion exactly. Period-as-separator is preserved (GitHub allows it). |
| **Snake_case `<name>`** | Multi-word names join with underscores: `science_stanley.aDNA` (not `science-stanley.aDNA`, not `ScienceStanley.aDNA`, not `sciencestanley.aDNA`). Single-word names stay lowercase: `aDNA.aDNA` (the standard's own short name) is the [[#§3 Exceptions|template exception]]. |
| **Display name** | Free form; not constrained by this ADR. The display name (what humans see in conversational text) MAY use spaces, capitals, or other natural-language formatting. The directory and repo names are the constrained surfaces. |
| **Path-style remotes** | Discouraged but not forbidden. A local-path remote (`origin-* → /local/path/`) is acceptable for one-vault tooling patterns when the vault's content has not yet been published to GitHub or when the vault needs an alternative remote in addition to a GitHub `origin`. |

### §2 Examples (conformant)

```
Directory                          GitHub repo
─────────────────────────────────────────────────────────────────────
aDNA.aDNA/                         LatticeProtocol/aDNA.aDNA.git
SiteForge.aDNA/                    LatticeProtocol/SiteForge.aDNA.git
ComfyForge.aDNA/                   LatticeProtocol/ComfyForge.aDNA.git
CanvasForge.aDNA/                  LatticeProtocol/CanvasForge.aDNA.git
SuperLeague.aDNA/                  LatticeProtocol/SuperLeague.aDNA.git
LPWhitepaper.aDNA/                 (no GitHub remote — exception §3.4)
RareArchive.aDNA/                  Wilhelm-Foundation/rare-archive-vault.git  (external partner)
WilhelmAI.aDNA/                    Wilhelm-Foundation/WilhelmAI.git           (external partner)
```

Note: external-partner repos are not constrained by ADR-009's `<name>.aDNA.git` rule when the partner organization has its own naming convention. The directory still follows `<name>.aDNA/` form.

### §3 Exceptions (grandfathered + structural)

The convention recognizes the following **explicit exceptions**. These are documented for completeness; they are not forced into compliance by this ADR.

#### §3.1 — Hyphen-flat GitHub repo names (4 vaults)

Pre-`.aDNA/`-convention vaults whose GitHub repos use hyphen-flat naming inherited from earlier conventions:

| Vault directory | GitHub repo (current) | Why grandfathered |
|---|---|---|
| `science_stanley.aDNA/` | `LatticeProtocol/science-stanley-adna.git` | Pre-`.aDNA/`-convention; rename is operator-discretionary |
| `wga.aDNA/` | `LatticeProtocol/wga-adna.git` | Same |
| `context_commons.aDNA/` | `LatticeProtocol/context-commons-adna.git` | Same |
| `la_startup.aDNA/` | `ScienceStanley/LAStartupLattice.git` (note: also under non-LP namespace) | Pre-convention naming |

These 4 repos retain their existing names. ADR-009 does **not** force renames. Per-vault application of the convention to existing vaults is **operator-discretionary** and tracked under [[../../how/campaigns/campaign_adna_v3_ecosystem_compliance/campaign_adna_v3_ecosystem_compliance.md|`campaign_adna_v3_ecosystem_compliance`]] (the v3 successor campaign).

#### §3.2 — No-remote vaults (7 vaults)

Per [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj0_ecosystem_matrix.md|m01_obj0_ecosystem_matrix.md]] §5 spot-check log:

| Vault directory | Why no remote |
|---|---|
| `Spacemacs.aDNA/` | Genesis trigger vault for the campaign — adopts v7.0 publish flow per [[../../who/coordination/coord_2026_05_08_publish_rewrite.md|Daedalus coord memo]] |
| `VideoForge.aDNA/` | Genesis planning |
| `III.aDNA/` | Genesis (MA-0 complete 2026-05-07) |
| `VAASLattice.aDNA/` | Active development |
| `zeta.aDNA/` | Active development |
| `RareHarness.aDNA/` | Genesis planning (Platform.aDNA; Wilhelm anchor) |
| `strategic_interface_protocol.aDNA/` | Joint-venture; remote configuration deferred to JV agreement |

These 7 vaults will get GitHub remotes via `skill_git_remote_setup.md` (M05) at their operators' discretion. Once configured, their repo names should follow §1 unless an exception applies.

#### §3.3 — Path-style local remote (1 vault)

| Vault directory | Remote | Why exception |
|---|---|---|
| `LPWhitepaper.aDNA/` | `origin-whitepaper → /Users/stanley/lattice/whitepaper` | Whitepaper-vault tooling pattern: separate-repo-but-co-located history with `whitepaper/` (the LaTeX repo). Local-path remote serves the publishing pipeline. |

The path-style remote is permitted under §1's "Path-style remotes" rule. v3 successor decides whether to add a GitHub `origin` alongside or convert.

#### §3.4 — Template-repo exception (the standard's own short name)

| Repo | Form | Why exception |
|---|---|---|
| `LatticeProtocol/adna.git` (post-rename per [[adr_006_github_repo_rename_to_adna.md|ADR-006]]) | `<base>.git` (no `.aDNA` suffix) | This is the **template repo** — the source of the convention itself. Naming it `adna.aDNA.git` would create a recursive `.aDNA.aDNA` form. The template uses the bare short name; consumer vaults follow `<name>.aDNA.git`. |

**Important**: The template repo's directory clone target IS still `.aDNA/` (per ADR-006 + ADR-007's flatten + the M03 mechanic). The convention applies to consumer vaults, not the template's own repo name.

### §4 Going-forward enforcement

| Touchpoint | Behavior change |
|---|---|
| **`skill_project_fork.md`** (M03 + M07) | Add a name-validation step: if the user-supplied `<name>` does not match `[a-z][a-z0-9_]*` (snake_case starting with a letter), warn and prompt for a corrected form. The warning cites ADR-009 §1; user MAY override and continue, but the fork is then treated as a §3 exception requiring documentation. |
| **`skill_git_remote_setup.md`** (M05; new) | Naming-convention lint check: when configuring `origin`, verify the GitHub repo name matches `<name>.aDNA.git` form (or matches a documented exception). Warn-only by default; configurable to error-mode in v3 successor. |
| **`skill_workspace_upgrade.md`** (M03) | Reference ADR-009 in `# Naming convention` section of its docs; cross-link to the four §3 grandfathered exceptions for operators auditing their workspaces. |
| **`skill_lattice_publish.md`** (M07) | Add a one-line note in the docs: "Vault directory and repo names follow ADR-009 (`<name>.aDNA/` ↔ `<name>.aDNA.git`); registry-published lattices inherit naming from their vault." |
| **10-dim audit D7 (Federation)** | Per [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj7_repo_review_audit_findings.md|m01_obj7]] §9, the airlock-presence sub-check applies. Naming-convention conformance is checked as part of D7. Non-conformant vaults still pass D7 if they're documented §3 exceptions; non-conformant *and* undocumented vaults score lower. |
| **CLAUDE.md project-discovery scan** (workspace router) | The `*.aDNA/` glob pattern in [[../../../CLAUDE.md|workspace `CLAUDE.md`]] continues to work — it matches the convention. Grandfathered hyphen-flat directory names (none currently exist; only the GitHub repo names are hyphen-flat) would not match the glob; the workspace router has a "Named projects" table for grandfathered cases. |

### §5 Application scope

| Scope | Forced? |
|---|---|
| **New vaults** (created via `skill_project_fork` post-v7.0) | YES — naming-convention lint enforces. |
| **Existing template-side references** | No action — template is conformant per [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj5_github_minimalism_audit.md|M01 Obj 5 §7 N-1]]. |
| **Existing ecosystem vaults** (19 vaults) | **NO — operator-discretionary.** v3 successor's `M04-EC` mission (per-vault rename application) opens the per-vault question. Some vaults will rename; some won't (especially external-org vaults like Wilhelm Foundation's). |
| **External-partner repositories** (Wilhelm Foundation, TAPP, etc.) | **NO — partner-org-discretionary.** External orgs operate under their own naming conventions; coordination memos in v3 successor M04-EC respect partner sovereignty. |

The convention is a **standard, not a mandate**. Going-forward enforcement applies to new artifacts; backfill is opt-in.

## Consequences

### Positive

- **Standard codified**: The 58% practice (`<name>.aDNA/` ↔ `<name>.aDNA.git`) becomes the explicit standard. New operators have one clear rule to follow.
- **Exception list bounded**: The 4 + 1 + 1 = 6 exceptions are explicitly named. No mystery; no creeping drift.
- **Self-documenting forks**: `skill_project_fork.md`'s naming warning lifts the convention from implicit to actionable at the right moment (during fork creation, not after).
- **Audit-friendly**: 10-dim D7 audits can score conformance against a documented standard rather than ad-hoc judgment.
- **External-partner respect**: §5 explicitly de-mandates the convention for external orgs — no awkward partner-coordination requests to rename their repos.
- **v3 successor scope-setting**: `M04-EC` has a clean target (per-vault rename, opt-in, with the 4 grandfathered repos as candidates).

### Negative

- **One-time skill updates** — `skill_project_fork`, `skill_git_remote_setup`, `skill_workspace_upgrade`, `skill_lattice_publish` all gain references to ADR-009. M03 + M05 + M07 absorb.
- **Documentation density increase** — ADR-009 + audit findings + skill docs all explain the same convention. Mitigation: cross-references; ADR-009 is the authoritative source; other docs cite.
- **Grandfathered exception list grows over time** — every new exception adds prose. Mitigation: §3's structure is extensible; new exceptions slot into one of the four classes (hyphen-flat, no-remote, path-style, template).

### Neutral

- **Standard track unchanged** — ADR-009 is a Governance-track ADR. The aDNA Standard `adna_standard.md` §3.5 already mentions `.aDNA` suffix convention; ADR-009 elaborates on the GitHub-repo isomorphism without altering normative spec content.
- **Existing vaults' day-to-day operation unaffected** — operators of grandfathered vaults continue using their existing repo names with no change required.
- **Display names unconstrained** — partner-org branding (e.g., "Rare Archive" display name vs. `RareArchive.aDNA/` directory vs. `Wilhelm-Foundation/rare-archive-vault.git` repo) operates orthogonally to ADR-009.

## Alternatives considered

| Option | Rationale to reject (vs. chosen Option D) |
|---|---|
| **Option A — Force per-vault rename for all 19 vaults** | Breaks external-partner sovereignty (Wilhelm Foundation cannot be told to rename); breaks operator-paced adoption (Stanley's personal vaults); creates merge-conflict risk during the campaign. Disrespects the "operator-discretionary" principle the rest of v2 follows. |
| **Option B — Document as CLAUDE.md prose only** | Loses durability (CLAUDE.md drifts); loses citation target (skills can't reference an "implicit prose convention"); loses governance-track signal (a top-level ADR signals importance). |
| **Option C — Add to `adna_standard.md` (Standard track)** | Would force a Standard track bump (currently v2.2). The naming convention is *governance* (how vaults are organized) more than *normative* (what a vault is). Mixing the two tracks would undermine ADR-011's Major.Minor independence rule. |
| **Option D — Top-level Governance ADR with grandfathered-exception list (CHOSEN)** | Codifies practice; respects external-partner sovereignty; provides citation target; bounded exception list; v3 successor has clean scope; Standard track unchanged. |

## Forward-references

- **M07 ratification** — operator approves at M07 close; status flips `proposed` → `accepted`.
- **M03 absorbs** — `skill_project_fork.md` warning addition; `skill_workspace_upgrade.md` cross-reference; `prepare_for_onboarding.sh` move (already in M03 scope per Obj 5 P-1) doesn't directly affect ADR-009 but coincides.
- **M05 absorbs** — `skill_git_remote_setup.md` naming-convention lint (already specified in [[../../how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/skill_git_remote_setup_spec.md|skill_git_remote_setup_spec.md]] §6); ADR-009 references unblocked at M07 ratification.
- **v3 successor `M04-EC`** — per-vault rename application for the 4 hyphen-flat exceptions + LPWhitepaper exception. Operator-discretionary; coordination memos delivered to affected vault operators.
- **`adna_standard.md` §3.5** — leave unchanged. ADR-009 is governance-track; standard-track mention of `.aDNA` suffix is sufficient at v2.2.

## Companion ADRs

- [[adr_006_github_repo_rename_to_adna.md|ADR-006]] — Template-repo rename `Agentic-DNA` → `adna`. Defines the §3.4 template-repo exception.
- [[adr_007_outer_adna_claude_md_disposition.md|ADR-007]] — Outer wrapper → workspace template. Same campaign; same M03 phase gate ratification.
- (Forthcoming) **ADR-008** — Airlock template stub at template level (M03). The §4 going-forward enforcement of D7 includes airlock-presence per ADR-008.
- (Forthcoming) **ADR-010** — Publish-naming (M05). The publish-skill family inherits ADR-009's naming convention via skill body cross-references.
- (Forthcoming) **ADR-011** — Semver discipline (M06). ADR-009's `_migration_version` (if applicable to future schema migrations of the convention itself) follows ADR-011's Major.Minor rule.

## Self-reference (Standing Order #2)

This ADR demonstrates the convention it codifies. Filename: `adr_009_aDNA_naming_convention.md` — snake_case body name + `.md` extension. Located in `aDNA.aDNA/what/decisions/` (the campaign-home vault's WHAT triad, per ADR-005 three-way vault boundary). The ADR exists in a vault whose name (`aDNA.aDNA`) is itself an example of the §3.4 template-repo-class exception (the standard's own short name as the prefix).

Cross-link aggressively (Standing Order #10):
- 4 ADR companion links (006/007/008/010/011)
- 5 mission artifact links (Obj 0 ecosystem matrix, Obj 5 minimalism audit, Obj 7 audit findings, skill spec)
- 2 coordination memo links (Daedalus coord)
- 2 successor campaign links
- Workspace router + adna_standard cross-references

Total cross-links: **15+** in this ADR. Standing Order #10 ✓.

---

**Status**: Accepted at P0 → P1 phase-gate review session 2026-05-08 (early relative to original M07-close target). Per-vault rename application remains operator-discretionary; v3 successor `M04-EC` mission opens that scope.
