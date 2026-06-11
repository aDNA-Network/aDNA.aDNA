---
type: decision
adr_id: adr_013
scope: standard
title: "Scope-vs-role naming as design test for `.aDNA/` vault rename proposals"
status: amended
created: 2026-05-13
updated: 2026-06-11
last_edited_by: agent_stanley
ratified_session: session_stanley_20260513_030626_mlwx03_s1
ratification_phase: campaign_lattice_workspace_ux M-LWX-03 close
mission: mission_lwx_03_integration_test_and_closeout
campaign: campaign_lattice_workspace_ux
amended_at: 2026-05-26
amendment_reference: campaign_lattice_compliance_upgrade.R02
amendment_summary: "§Exception subsection added documenting node.aDNA → LatticeHome.aDNA as one deliberate exception to R1–R4; rule remains active for all other rename proposals"
amendment_2_at: 2026-06-11
amendment_2_reference: "coord_2026_06_11_outbound_to_adna_template_home_naming_fix_adr013_amendment (aDNALabs/Berthier) + session_stanley_20260611T235006Z_v72_release_home_naming_fix (v7.2 release)"
amendment_2_summary: "§Exception.5 added — the rename chain completed node.aDNA → LatticeHome.aDNA (2026-05-28, transient) → Home.aDNA (2026-05-30, canonical per generic-canonical doctrine); §Exception.2 no longer reads as end-state; R1–R4 unchanged for future proposals"
companion_adrs:
  - aDNA.aDNA/what/decisions/adr_009_aDNA_naming_convention.md  # naming convention; ADR-013 sits inside the rules ADR-009 codifies
  - node.aDNA/what/decisions/adr_001_node_vault_role_expansion.md  # node-scope counterpart; this ADR generalizes the design test surfaced there
related_artifacts:
  - aDNA.aDNA/how/campaigns/campaign_lattice_workspace_ux/missions/artifacts/aar_mlwx_02_node_vault_role_expansion.md  # load-bearing finding source
  - aDNA.aDNA/how/campaigns/campaign_lattice_workspace_ux/missions/mission_lwx_03_integration_test_and_closeout.md
  - /Users/stanley/.claude/plans/please-read-the-claude-md-shiny-cherny.md  # M-LWX-03 plan with D-StdADR resolution
tags: [decision, standard, adr_013, naming_convention, scope_vs_role, rename_test, persona_role_carrier, m_lwx_03, mini_campaign_load_bearing_finding, rosetta, amended, latticehome_exception, campaign_lattice_compliance_upgrade_r02]
---

# ADR-013 — Scope-vs-role naming as design test for `.aDNA/` vault rename proposals

## Status

**Accepted** — ratified at `session_stanley_20260513_030626_mlwx03_s1` per operator decision D-StdADR (resolved Option A — author standard-scope ADR; plan mode `ExitPlanMode` approval). Slot reserved at the 2026-05-12 M04b campaign amendment per `campaign_adna_v2_infrastructure` master file (line: "ADR-013 forecast slot reserved for mini-campaign design decisions if M04b S1 surfaces a load-bearing choice").

## Context

The `.aDNA/` ecosystem governs ~21 named vaults at the workspace level (see `~/aDNA/CLAUDE.md` Project Discovery table) plus an open-ended population of forks across operator machines. ADR-009 (the naming convention) codifies `<name>.aDNA/` ↔ `<name>.aDNA.git` isomorphism plus snake_case `<name>` with 4 grandfathered exception classes (hyphen-flat, no-remote, path-style, template-repo). What ADR-009 does **not** specify is the rule for when a vault SHOULD be renamed — i.e., the design test an operator (or agent acting under Standing Order #1) should apply when a rename proposal surfaces.

The rename question first became load-bearing during `campaign_lattice_workspace_ux` mission M-LWX-02 (closed 2026-05-12). The original M04b Obj 3 design assumed an **outer-workspace-vault model** at `~/aDNA/` — a separate `.obsidian/` + HOME.md + `.obsidianignore` layer hosting a gallery of inner vaults. At plan-mode entry, the operator raised an architectural challenge: rather than add an outer layer, expand the role of the per-node operational vault (`node.aDNA/`) to also host the lattice-home gallery. The proposed name change accompanying the role expansion was `node.aDNA/` → `home.aDNA/` (reflecting the expanded functional surface).

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

## Exception — `node.aDNA/` → `LatticeHome.aDNA/` (2026-05-26)

> **⚑ Amendment 2 (2026-06-11) — the chain did not stop here.** The rename continued past `LatticeHome.aDNA/`: the canonical per-node vault name is **`Home.aDNA/`** (since 2026-05-30, generic-canonical doctrine). §Exception.1–.4 below are preserved verbatim as the historical record of the FIRST hop; read them as a transient state, not an end-state. The completed chain and its governance are documented forward at **§Exception.5**.

This ADR is `status: amended` to document one deliberate exception to the R1–R4 design test for the rename `node.aDNA/` → `LatticeHome.aDNA/`. The §Decision and the worked precedent in §Application notes remain authoritative for all OTHER future rename proposals.

### §Exception.1 — Trigger

- **Campaign**: `campaign_lattice_compliance_upgrade` Phase 4-Rename (charter v1.5 → v1.6 at R01 close 2026-05-25; mission_count 31 → 41).
- **Mission**: R02 (this amendment); R03 executes the directory rename; R04–R10 propagate cross-vault / multi-node.
- **Operator decision**: D1–D4 lock at `AskUserQuestion` 2026-05-25 — D1 = `LatticeHome.aDNA` (over `Home.aDNA` / `Hearth.aDNA`), D2 = insert into compliance_upgrade (not a standalone campaign), D3 = surgical internal scope (protocol-layer "node" term preserved), D4 = amend ADR-013 with §Exception subsection over supersession.
- **Plan files**: R01 meta-planning `~/.claude/plans/please-read-the-claude-md-steady-scott.md`; R02 amendment `~/.claude/plans/please-read-the-claude-md-spicy-raccoon.md`.

### §Exception.2 — Specific exception

Exactly one rename: `node.aDNA/` → `LatticeHome.aDNA/` — the local-by-default per-node operational vault on this operator's machine plus the 5 partner-node `node.aDNA/` instances coordinated via R09 (wga_l1, sws_l1, kinn_l1, lmu_l2, science_stanley_l1). The vault keeps its scope (per-node hearth + lattice-home gallery + memberships + node-operational campaigns), its persona (Hestia), and its operating semantics. Only the directory-level identifier changes. Protocol-layer "node" terms — `identity_node`, `inventory_*`, `campaign_node_credentials`, `skill_node_*` filenames, LP-network `node_id` keys — all remain (per operator D3-surgical).

Namespace-explicit alignment with the `Lattice*` family (`LatticeNetwork.aDNA`, `LatticeLabs.aDNA`, `LatticeTerminal.aDNA`, `LatticeAgent.aDNA`, `LatticeHome.aDNA`) is the operator-cited motivation; `LatticeHome` carries the lattice namespace AND the home semantics simultaneously where bare `home.aDNA/` (the original M-LWX-02 proposal) carried neither.

### §Exception.3 — R1–R4 disposition (steelman)

| Rule | Original reading (2026-05-13) | §Exception re-reading (2026-05-26) |
|---|---|---|
| **R1 (scope)** | Δscope = no — `node.aDNA/` is still "the node." | Negotiable. Since 2026-05-12 the vault has absorbed the lattice-home gallery (HOME.md + `workspace.json` default-open per ADR-001), 30+ vault cards across M19–M20 imagery work, persona pairings with every other Hestia-paired vault, and credential-broker authority (`campaign_node_credentials`). Scope has accumulated from "machine-state tracker" → "the operator's home vault on this node." The §Decision retains R1 as a check for FUTURE proposals — at the time ADR-001 was authored, R1 = no was the correct reading; what changed is the accumulated functional surface. |
| **R2 (role only)** | Δrole only = yes → DO NOT RENAME. | The role-only reading still holds in pure form, BUT the per-user-singleton precedent (`~/Documents`, `~/Pictures`, `~/Library`) shows filesystem-local naming can be uniform across machines without collapsing into a role-only label. `LatticeHome.aDNA` is namespace-qualified (`Lattice*`) and reads as a scope-carrying identifier, not a bare role. |
| **R3 (multi-instance)** | `home.aDNA/` collapses distinguishability across N machines. | **Overstated.** Per-user-singleton precedent: every macOS user has `~/Documents` at the same path on every machine — uniformity is the feature. Each operator's machine carries its own `LatticeHome.aDNA/` at `~/aDNA/`; the directory IS the per-node singleton. LP-protocol multi-node addressing (`node_id`, `identity_node`, federation manifests) is preserved at the protocol layer, untouched by the directory rename. |
| **R4 (migration cost)** | >10 files + upstream-template-change + cross-graph propagation → high-cost; R1 = no, fails cost-benefit. | Contextually absorbed. R01 recon: ~118 active files / ~765 refs to update; ~465 frozen files / ~4,019 refs leave-alone; 5 partner-node `node.aDNA` instances need rename via R09; 30-day symlink shim window 2026-05-25 → 2026-06-24. Cost is real but the broader upgrade/development cycle is in flight (compliance_upgrade Phase 4) and the operator has accepted multi-node coordination ownership. |

### §Exception.4 — Forward governance

R1–R4 **continue to apply** to all future `.aDNA/` rename proposals. This subsection documents ONE specific case; it does not create a general carve-out for role-readable names.

- **No blanket carve-out**: new exceptions require their own §Exception subsection on this ADR (or a fresh ADR amendment) with the same trigger / specific / R1–R4 disposition / forward-governance structure. Operator approval at plan-mode + a charter amendment in the consuming campaign are prerequisites.
- **`skill_project_fork.md` name-validation behavior unchanged**: proposed names that read role-like (`dashboard`, `hub`, `gallery`) still warrant the R1–R4 walk-through at fork time per §Application notes. Namespace-qualified role-readable names (e.g., a hypothetical `LatticeHub.aDNA`) would face the same walk-through; the `LatticeHome.aDNA` precedent is fact-specific, not a template.
- **ADR-009 orthography unchanged**: `<name>.aDNA/` ↔ `<name>.aDNA.git` isomorphism and snake_case / PascalCase grandfathered exceptions remain governed by ADR-009.
- **Node-scope predecessor `adr_001_node_vault_role_expansion`** (the M-LWX-02 rejection) gains a §Supersession-by-§Exception note pointing here; its role-expansion finding for the broader Org-Vault.aDNA-as-control-plane pattern remains valid.
- **M-LWX-02 AAR** carries a forward-pointer to this §Exception for discoverability; the scope-vs-role finding itself (a load-bearing conceptual contribution) remains active and re-applies to future rename proposals.

### §Exception.5 — Amendment 2 (2026-06-11): chain completed `… → Home.aDNA/` (canonical)

The rename documented in §Exception.2 proved **transient**. The completed chain:

| Hop | Name | Date | Standing |
|---|---|---|---|
| 0 | `node.aDNA/` | (origin) | superseded |
| 1 | `LatticeHome.aDNA/` | 2026-05-28 (R03 close) | **transient** — superseded after 2 days |
| 2 | **`Home.aDNA/`** | 2026-05-30 | **canonical** — current end-state |

- **Why the second hop**: Operation Rosetta Stone's **generic-canonical doctrine** (the 2026-05-30
  rebrand wave that also produced `Network.aDNA`, `Terminal.aDNA`, etc.) — the network's canonical
  instance of a role takes the bare generic name; brand-prefixed variants (`Lattice*`) become
  history/aliases. The §Exception.2 motivation ("namespace-explicit alignment with the `Lattice*`
  family") was itself superseded when the `Lattice*` family ceased to be the naming substrate.
  Governance: `Home.aDNA` ADR-009 lineage + the aDNALabs rebrand record; upstream ask filed at
  `how/backlog/idea_upstream_node_vault_bare_role_rename.md` (executed by this amendment's release).
- **What this amendment changes**: §Exception.2's wording ("Exactly one rename: `node.aDNA/` →
  `LatticeHome.aDNA/`") must no longer be read as naming the canonical end-state. The exception
  precedent it ratified (a deliberate, operator-gated departure from the R1–R4 verdict for the
  per-node vault) **carries forward to `Home.aDNA/`** — hop 2 is a continuation of the same
  exception, not a second exception requiring its own §Exception subsection (same vault, same scope,
  same persona, same operator gate class; only the identifier moved again).
- **Operational defect this closes**: the transient `LatticeHome` value shipped as the Step 0.3 fork
  parameter (`project_name = LatticeHome`) in the public `aDNA-Network/aDNA` v7.1 image and the
  template chain, mis-forking `LatticeHome.aDNA/` on fresh nodes (observed live on a partner
  onboarding 2026-06-11, pre-bootstrap catch). Fixed at template release **v7.2** (2026-06-11):
  `project_name = Home` + live-prose `LatticeHome.aDNA` → `Home.aDNA` sweep across the standard tree
  (lineage pins `graduated_from: …@411660e` + historical records preserved, SO-7).
- **Forward governance unchanged**: R1–R4 continue to apply to all future `.aDNA/` rename proposals
  (§Exception.4 stands). Protocol-layer "node" terms remain preserved per operator D3-surgical.

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
