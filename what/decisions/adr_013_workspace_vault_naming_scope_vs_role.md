---
type: decision
adr_id: adr_013
scope: standard
title: "Scope-vs-role naming as design test for `.aDNA/` vault rename proposals"
status: accepted
created: 2026-05-13
updated: 2026-05-13
last_edited_by: agent_stanley
ratified_session: session_stanley_20260513_030626_mlwx03_s1
ratification_phase: campaign_lattice_workspace_ux M-LWX-03 close
mission: mission_lwx_03_integration_test_and_closeout
campaign: campaign_lattice_workspace_ux
companion_adrs:
  - aDNA.aDNA/what/decisions/adr_009_aDNA_naming_convention.md  # naming convention; ADR-013 sits inside the rules ADR-009 codifies
  - node.aDNA/what/decisions/adr_001_node_vault_role_expansion.md  # node-scope counterpart; this ADR generalizes the design test surfaced there
related_artifacts:
  - aDNA.aDNA/how/campaigns/campaign_lattice_workspace_ux/missions/artifacts/aar_mlwx_02_node_vault_role_expansion.md  # load-bearing finding source
  - aDNA.aDNA/how/campaigns/campaign_lattice_workspace_ux/missions/mission_lwx_03_integration_test_and_closeout.md
  - /Users/stanley/.claude/plans/please-read-the-claude-md-shiny-cherny.md  # M-LWX-03 plan with D-StdADR resolution
tags: [decision, standard, adr_013, naming_convention, scope_vs_role, rename_test, persona_role_carrier, m_lwx_03, mini_campaign_load_bearing_finding, rosetta]
---

# ADR-013 — Scope-vs-role naming as design test for `.aDNA/` vault rename proposals

## Status

**Accepted** — ratified at `session_stanley_20260513_030626_mlwx03_s1` per operator decision D-StdADR (resolved Option A — author standard-scope ADR; plan mode `ExitPlanMode` approval). Slot reserved at the 2026-05-12 M04b campaign amendment per `campaign_adna_v2_infrastructure` master file (line: "ADR-013 forecast slot reserved for mini-campaign design decisions if M04b S1 surfaces a load-bearing choice").

## Context

The `.aDNA/` ecosystem governs ~21 named vaults at the workspace level (see `~/lattice/CLAUDE.md` Project Discovery table) plus an open-ended population of forks across operator machines. ADR-009 (the naming convention) codifies `<name>.aDNA/` ↔ `<name>.aDNA.git` isomorphism plus snake_case `<name>` with 4 grandfathered exception classes (hyphen-flat, no-remote, path-style, template-repo). What ADR-009 does **not** specify is the rule for when a vault SHOULD be renamed — i.e., the design test an operator (or agent acting under Standing Order #1) should apply when a rename proposal surfaces.

The rename question first became load-bearing during `campaign_lattice_workspace_ux` mission M-LWX-02 (closed 2026-05-12). The original M04b Obj 3 design assumed an **outer-workspace-vault model** at `~/lattice/` — a separate `.obsidian/` + HOME.md + `.obsidianignore` layer hosting a gallery of inner vaults. At plan-mode entry, the operator raised an architectural challenge: rather than add an outer layer, expand the role of the per-node operational vault (`node.aDNA/`) to also host the lattice-home gallery. The proposed name change accompanying the role expansion was `node.aDNA/` → `home.aDNA/` (reflecting the expanded functional surface).

The M-LWX-02 plan-mode analysis (preserved at `please-read-the-claude-md-composed-wigderson.md`) evaluated 5 options for the outer-vault question (A status quo / B symlinks / **C role-expand inside node.aDNA** / D rename + retain outer / E hybrid) plus a separate evaluation of the rename sub-decision. The rename was rejected per 4 specific reasons recorded in `node.aDNA/what/decisions/adr_001_node_vault_role_expansion.md` (the node-scope ADR). The M-LWX-02 AAR captured the load-bearing finding:

> Scope-based vs role-based naming is a reusable design test for `.aDNA/` vault rename proposals (persona carries role semantics; vault name carries scope/identity; conflating produces ambiguity).

ADR-001 documents the **specific** decision (this node, this proposed rename). ADR-013 lifts that finding to a **standard-scope** rule: when any `.aDNA/` vault in the ecosystem expands its functional surface (i.e., picks up new responsibilities beyond what its persona/CLAUDE.md originally scoped), the rename question MUST be evaluated against the same 4 sub-tests M-LWX-02 used — not litigated case-by-case from scratch.

The ecosystem currently has 21+ named vaults, ranging from operator/brand scope (`science_stanley.aDNA`, `wga.aDNA`) through forge/platform/framework scope (`SiteForge.aDNA`, `RareHarness.aDNA`, `III.aDNA`) through node scope (`node.aDNA`). None are role-named. M-LWX-02's rejection of `home.aDNA/` preserved that property; ADR-013 codifies the property going forward.

## Decision

**`.aDNA/` vault names carry SCOPE/IDENTITY semantics; personas (declared in each vault's `CLAUDE.md`) carry ROLE/FUNCTION semantics. A rename is warranted only when the vault's underlying SCOPE/IDENTITY changes — not when its functional ROLE expands.**

The design test for any future `.aDNA/` vault rename proposal applies the following 4 sub-rules in order:

### R1 — Scope-identity check (Δscope?)

Has the vault's underlying SCOPE/IDENTITY changed in a way the current name no longer captures?

- **Examples of legitimate scope change**: vault was forked under one organizational identity but ownership has transferred (e.g., `acme_corp.aDNA` → `widget_co.aDNA` after acquisition); the codebase/responsibility the vault governs has been split or merged (e.g., `monolith.aDNA` → split into `auth_service.aDNA` + `billing_service.aDNA`); the persona itself changes scope (e.g., from "an individual operator's brand" to "an organization's program," where the name should reflect the organization).
- **NOT scope change**: functional capabilities expanded (R2). Persona tone shifted. New domain packs added. Workflow improvements landed.

If R1 = yes → **rename WARRANTED**; proceed to ADR-009 §3 conformance check + ratify migration runbook.
If R1 = no → continue to R2.

### R2 — Role-expansion check (Δrole only?)

Did the vault's FUNCTIONAL SURFACE expand while its SCOPE/IDENTITY stayed the same?

- **Examples of pure role expansion**: a node operational vault picking up a lattice-home gallery (M-LWX-02 case — `node.aDNA/` stays "the node," just does more); a forge vault picking up a new consumer wrapper category; an Org-Vault picking up a publishing pipeline.
- **Diagnostic**: if the new role is naturally expressed by the existing persona's voice register (Hestia covers hearth/home/inventory; Argus covers inspect/introspect/improve; Iris covers narrative/messenger work — the persona's mythological grounding stretches without renaming), the role expansion is in-scope.

If R2 = yes only → **DO NOT RENAME**. The persona is the role carrier; rename would dilute scope-based naming consistency. Land the expansion via additive artifacts (HOME.md, README "Opening this vault in X" sections, optional node/standard-scope ADRs).
If R2 = yes AND R1 = yes → R1 dominates (rename warranted).

### R3 — Multi-instance check (do parallel instances need to coexist?)

If multiple instances of this vault type currently exist or would plausibly exist in a multi-operator/multi-node future, does the proposed name preserve distinguishability?

- **Examples where multi-instance matters**: every operator's machine has its own `node.aDNA/` — the name IS the type; renaming to `home.aDNA/` collapses N node vaults onto a single role label and forces per-machine variant invention.
- **Examples where multi-instance does NOT matter**: forge/platform/framework vaults are typically singleton-per-ecosystem (one canonical `SiteForge.aDNA`, one canonical `RareHarness.aDNA`); name pluralization isn't a concern.

If R3 = multi-instance-likely AND proposed name collapses distinguishability → **DO NOT RENAME** (preserve scope-based name).

### R4 — Migration-cost check

Compute total migration cost: intra-vault refs (governance files + decisions + AARs + missions + sessions) + workspace router edits + cross-vault references (federation refs, coord memos, ADR cross-links) + upstream `.adna/` commits (if template references the vault) + grandfathered-exception evaluation per ADR-009 + downstream propagation (consumer wrappers if any).

- **High-cost threshold** (rough guideline): >10 files touched OR upstream-template-change required OR cross-graph propagation across ≥3 vaults.
- **Cost-benefit**: cost is justified only when R1 = yes (scope change). Pure R2 (role) without R1 (scope) does NOT clear the cost-benefit threshold for high-cost renames.

If R4 = high-cost AND R1 = no → **DO NOT RENAME**. Land the proposed change via additive artifacts only.

### Composition

The 4 rules compose:

| R1 (scope?) | R2 (role only?) | R3 (multi-instance?) | R4 (cost) | Verdict |
|---|---|---|---|---|
| yes | — | preserves distinguishability | any | **RENAME** |
| yes | — | collapses distinguishability | any | rename WARRANTED + find a name that preserves distinguishability |
| no | yes | — | any | **DO NOT RENAME** (role expansion only) |
| no | no | — | — | **DO NOT RENAME** (no surface change) |

## Consequences

### Positive

- Workspace-level naming consistency preserved: all `.aDNA/` vaults stay scope-named. No first role-named vault enters the ecosystem; future cleanup of grandfathered exceptions per ADR-009 §3.5 can proceed without ambiguity.
- The persona–vault decoupling clarifies authoring discipline: when authoring a new vault, the operator picks **the name from scope/identity** + **the persona from role/voice**. Two distinct choices, two distinct concepts.
- M-LWX-02's load-bearing finding gets discoverability — promotes from AAR text (one of dozens of findings in one mission AAR) to a standard-scope ADR in `aDNA.aDNA/what/decisions/`. Future operators encountering a rename question find ADR-013 from the ADR index before re-litigating from scratch.
- Bounds the design space for `campaign_adna_v3_ecosystem_compliance` (v3-EC, planned-successor): per-vault audit (M01-EC) applies R1-R4 to each vault's current name + any pending rename proposals; the rule is shared, not invented per-vault.
- Multi-node future explicitly preserved (R3): each operator's machine carries its own `node.aDNA/`; ADR-013 prevents accidental renames-to-role that would force per-machine variant invention.
- Migration-cost discipline (R4) brakes the "let's rename because it would feel cleaner" reflex without requiring case-by-case adjudication.

### Negative

- The rule constrains operator discretion: a vault whose role has expanded substantially BUT whose scope hasn't changed cannot rename to reflect the role even if the operator subjectively prefers it. Resolution: persona evolution + README "Opening / Working with this vault" sections + optional node-scope or standard-scope ADRs (as ADR-001 did at node scope; ADR-013 documents this at standard scope).
- The 4 sub-rules require some operator judgment (R1 "has scope changed" is not purely mechanical). Mitigation: ADR-013 §Decision §R1-R2 examples + ADR-001 as a worked precedent + the design test composition table.
- New vault creation discipline now carries an implicit prerequisite: distinguish scope from role at fork time. `skill_project_fork.md` doesn't currently surface this — could be a future enhancement (warn at fork if proposed name reads role-like, e.g., contains words like `home`, `dashboard`, `hub` without a scope qualifier). Out of M-LWX-03 scope.

### Neutral

- ADR-013 does not retroactively flag any existing vault for rename. Every named vault in the workspace router (line 51+) passed the scope-naming bar at creation; ADR-013 is forward-looking.
- ADR-013 is workspace-scope. ADR-001 (node-scope) is the worked precedent. If a Forge or Platform later encounters a parallel rename question (role expansion within a stable scope), the analysis follows the same 4 sub-rules but the ADR may be authored at the affected vault's local `what/decisions/` (Forge-scope, Platform-scope) per the same lineage pattern.
- ADR-013 does not modify ADR-009. ADR-009 governs `<name>` orthography (snake_case + grandfathered exceptions); ADR-013 governs WHEN a name should change. Both apply.

## Alternatives considered

| Option | Description | Verdict |
|---|---|---|
| A — Always rename when role changes | Every functional-surface expansion triggers a rename to capture the new role | rejected — collapses scope semantics into role labels; produces a moving-target naming system; high cumulative migration cost; obscures multi-instance future (R3 violation) |
| B — Never rename | Vault names are immutable post-creation | rejected — fails legitimate scope-change cases (organizational pivot, ownership transfer, codebase split) |
| **C — Scope-driven rule with 4 sub-tests (this decision)** | Rename warranted iff scope/identity changes (R1); role expansion alone (R2) does not warrant rename; multi-instance distinguishability (R3) + migration cost (R4) gate even legitimate renames | **accepted** — encodes the M-LWX-02 finding as a standard-scope reusable design test; preserves scope-naming property; bounds operator discretion without removing judgment; provides worked precedent (ADR-001) |
| D — Operator-discretionary case-by-case | No standard rule; every rename proposal litigated from scratch | rejected — no shared framework; future operators repeat M-LWX-02's analysis from zero; risks inconsistency across the ecosystem |
| E — Persona-aligned naming (vault name = persona name) | Vault name binds to its persona (e.g., `hestia.aDNA` instead of `node.aDNA`) | rejected — couples vault name to mutable persona scope (personas can evolve; vaults are stable); also fails multi-instance (R3) since each machine's persona is the same Hestia |

Within Option C, the operator chose the **4-sub-rule formulation** (R1 scope check + R2 role check + R3 multi-instance check + R4 migration-cost check) over alternative formulations (e.g., a 2-rule scope/cost short-form). The 4-sub-rule version surfaces the nuances that mattered in M-LWX-02 (multi-node future, persona-as-role-carrier) at the standard-scope rule level so they don't get re-discovered in each future case.

## Application notes

### When to consult ADR-013

- Any time an operator proposes renaming a `.aDNA/` vault
- Any time a mission spec discusses role expansion that "might also call for a rename"
- During `campaign_adna_v3_ecosystem_compliance` M01-EC (per-vault audit) — apply R1-R4 to each named vault's current name + any pending proposals
- When `skill_project_fork.md` is invoked with a proposed name that reads role-like (e.g., `dashboard.aDNA`, `home.aDNA`, `hub.aDNA`); the operator confirms via R1-R4 whether the name encodes scope or role

### When ADR-013 does NOT apply

- Initial vault creation naming (covered by ADR-009 + `skill_project_fork.md` §Name validation)
- Persona introduction or evolution (persona changes don't trigger vault rename per the persona-role-carrier principle)
- Internal vault refactoring that doesn't change `.aDNA/` directory name (free to rename internal directories, files, ADRs)

## Self-reference (Standing Order #2)

This ADR demonstrates aDNA's own pattern: a **decision** (this file) **embedded in a `what/decisions/` directory** **inside a `.aDNA/` vault that itself follows the same naming rules it codifies**. `aDNA.aDNA/` is a workspace-scope vault — the scope being "the aDNA standard itself." If the aDNA standard ever underwent a fundamental SCOPE change (e.g., split into multiple standards, merged with another knowledge architecture), R1 would fire and the rename would be warranted. As long as it remains "the aDNA standard," R2 governs and additive role expansion (new ADRs, new entity types, new ontology extensions) proceeds without rename.

## Cross-references

| Reference | Direction |
|---|---|
| [[adr_009_aDNA_naming_convention.md\|ADR-009]] | companion — `<name>` orthography; ADR-013 governs when `<name>` should change |
| `node.aDNA/what/decisions/adr_001_node_vault_role_expansion.md` | worked precedent — node-scope counterpart; this ADR generalizes |
| `aDNA.aDNA/how/campaigns/campaign_lattice_workspace_ux/missions/artifacts/aar_mlwx_02_node_vault_role_expansion.md` | load-bearing finding source |
| `aDNA.aDNA/how/campaigns/campaign_lattice_workspace_ux/missions/mission_lwx_03_integration_test_and_closeout.md` | ratifying mission |
| `aDNA.aDNA/how/campaigns/campaign_adna_v3_ecosystem_compliance/` | consumer — v3-EC M01-EC per-vault audit applies R1-R4 |
| `/Users/stanley/.claude/plans/please-read-the-claude-md-shiny-cherny.md` | plan with D-StdADR resolution (Option A — author) |
