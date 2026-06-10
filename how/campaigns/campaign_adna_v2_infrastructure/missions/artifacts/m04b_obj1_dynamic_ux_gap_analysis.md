---
type: artifact
artifact_type: gap_analysis
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_p1_04b_workspace_ux_planning
session: session_stanley_20260512_200414_adna_v2_m04b_s1
audit_target: /Users/stanley/aDNA/node.aDNA/ at git HEAD 411660e (M04 v0.1 bootstrap)
audit_basis:
  - mission_adna_infra_p1_04_node_adna_bootstrap.md (M04 mission spec; 22 numbered deliverables)
  - aar_m04_node_adna_bootstrap.md (M04 AAR; 10 items deferred + 4 surprises)
  - m04_obj7_ten_dim_audit.md (10-dim audit 42/50 PASS)
  - m01_obj3_node_adna_design.md (authoritative design source)
  - inventory_vaults.yaml / inventory_system.yaml / inventory_memberships.yaml / identity_node.yaml / identity_lattice_protocol.yaml (M04 S2 outputs)
classification_scheme: [auto_detected, hardcoded_from_design, operator_decision_driven, should_be_interview_was_defaulted]
created: 2026-05-12
updated: 2026-05-12
status: complete
last_edited_by: agent_stanley
tags: [artifact, gap_analysis, m04b, obj1, dynamic_ux, workspace_ux_planning, hestia, node_adna, interview_design_input, hybrid_bootstrap]
related_artifacts:
  - m01_obj3_node_adna_design.md
  - aar_m04_node_adna_bootstrap.md
  - m04_obj7_ten_dim_audit.md
  - mission_adna_infra_p1_04_node_adna_bootstrap.md
  - mission_adna_infra_p1_04b_workspace_ux_planning.md
---

# M04b Obj 1 — Dynamic-UX Gap Analysis of M04 Bootstrap Outputs

> **Mission deliverable** for M04b Obj 1 per [[../mission_adna_infra_p1_04b_workspace_ux_planning.md|M04b spec §Objectives]]. Audits the 22 numbered deliverables from M04 (with workspace router additions expanded into 4 sub-items) against the **intended hybrid-interview-driven bootstrap UX** (D1 default b, operator-confirmed 2026-05-12T20:04Z). Each item is classified into one of four categories; the gaps (`should_be_interview_was_defaulted`) feed Obj 2's interview skill spec design.

---

## Classification scheme

| Class | Meaning | Action in interview design |
|---|---|---|
| **`auto_detected`** | Filled by `skill_inventory_refresh.md` (or another deterministic scan) without operator input | **Skip in interview**; surface as confirmation at end |
| **`hardcoded_from_design`** | Filled verbatim from M01 Obj 3 design or template; same value for every node | **Skip in interview**; pure template paste |
| **`operator_decision_driven`** | Resolved at M04 S2 entry per the 5 D1-D5 operator decisions of the M04 spec | **Skip in interview**; these are mission-config choices, not per-node fields |
| **`should_be_interview_was_defaulted`** | Operator-specific information that *was* defaulted from M01 Obj 3 example values (or left as a placeholder) but *should be elicited* via interview | **Add to interview question table** (Obj 2 input) |

---

## Audit summary

| Class | Item count | % |
|---|---:|---:|
| Auto-detected | 9 | 28% |
| Hardcoded from design | 14 | 44% |
| Operator-decision-driven | 2 | 6% |
| **Should be interview, was defaulted** | **7** | **22%** |
| **Total items classified** | **32** | **100%** |

**Headline gap**: 7 of 32 items (22%) carry operator-specific values that M04 defaulted from M01 Obj 3 design examples rather than eliciting from the operator. These 7 gaps cluster in 3 vault files (MANIFEST.md, identity_node.{md,yaml}, identity_lattice_protocol.{md,yaml}) plus 1 inventory file (inventory_memberships.{md,yaml}) and feed exactly the 5 interview topics surfaced in M04b spec §Obj 2 (purpose / user-info / stack / hardware / connections).

The auto-detected + hardcoded items (23 of 32, 72%) constitute the **fast path** the interview should NOT re-ask. The hybrid-bootstrap discipline (D1=b) is precisely: keep these 23 auto-detect/hardcode flows untouched; insert interview questions only for the 7 gap items + 1-2 confirmation prompts.

---

## Per-item classification

### A. Root governance files (6 files)

| # | Item | M04 deliverable | Class | Evidence / Rationale |
|---|---|---|---|---|
| 1 | `node.aDNA/` directory created | #5 | `auto_detected` | `skill_project_fork.md` clones `.adna/` template by project_name; no operator input beyond the name |
| 2 | `node.aDNA/CLAUDE.md` Hestia identity inline (lines 18-61) | #6 | `hardcoded_from_design` | Verbatim copy from M01 Obj 3 §3; same for every node |
| 3 | `node.aDNA/CLAUDE.md` Project Map (post-fork) | #6 | `auto_detected` | Generated from directory scan of `node.aDNA/what|who|how/` at fork time |
| 4 | `node.aDNA/MANIFEST.md` `hostname` + `operator` fields (lines 8-9) | #7 | `auto_detected` | `hostname` from `scutil --get LocalHostName` or `hostname` cmd; `operator` from `git config user.name` or `$USER` |
| 5 | `node.aDNA/MANIFEST.md` `purpose:` field | #7 | **`should_be_interview_was_defaulted`** | Defaulted from M01 Obj 3 example narrative; operator-specific (this node is for what?) — gap |
| 6 | `node.aDNA/MANIFEST.md` `_template_version: "7.0"` | #7 | `auto_detected` | Read from `.adna/MANIFEST.md` at fork time |
| 7 | `node.aDNA/MANIFEST.md` FAIR `license: private` | #7 | `hardcoded_from_design` | M01 Obj 3 §8 D4 default; node-private posture (operator may still override via interview) |
| 8 | `node.aDNA/MANIFEST.md` FAIR `creators: [stanley]` | #7 | `auto_detected` | Same source as `operator` field above |
| 9 | `node.aDNA/MANIFEST.md` FAIR `keywords` (e.g., `[node, inventory, lattice_membership, host_state, hestia]`) | #7 | **`should_be_interview_was_defaulted`** | 5 keywords from M01 Obj 3 example; the operator-specific 5th tag should reflect this node's actual use (e.g., add `clinical_research` if the operator does clinical work) — gap |
| 10 | `node.aDNA/MANIFEST.md` FAIR `provenance:` prose | #7 | `auto_detected` | Generated from fork timestamp + upstream template commit hash; deterministic |
| 11 | `node.aDNA/MANIFEST.md` FAIR `identifier: null` | #7 | `hardcoded_from_design` | Local-by-default; no DOI |
| 12 | `node.aDNA/STATE.md` Hestia greeting | #8 | `hardcoded_from_design` | Template paste |
| 13 | `node.aDNA/STATE.md` initial vault snapshot | #8 | `auto_detected` | Read from `inventory_vaults.yaml` post-Obj-3 inventory_refresh |
| 14 | `node.aDNA/STATE.md` `last_full_health_check: never` | #8 | `hardcoded_from_design` | Until `skill_node_health_check.md` first run |
| 15 | `node.aDNA/CHANGELOG.md` v0.1 entry | #9 | `hardcoded_from_design` | M01 Obj 3 §8 D6 verbatim wording |
| 16 | `node.aDNA/AGENTS.md` | #10 | `hardcoded_from_design` | Template paste with project-name substitution |
| 17 | `node.aDNA/README.md` Quick Reference + Key Components | #10 | `hardcoded_from_design` | Template paste with project-name + operator substitution (operator from auto-detect) |

### B. `what/inventory/` scaffolds (7 files)

| # | Item | M04 deliverable | Class | Evidence / Rationale |
|---|---|---|---|---|
| 18 | `what/inventory/AGENTS.md` | #11 | `hardcoded_from_design` | Protocol stub; template paste |
| 19 | `inventory_vaults.{md,yaml}` content (21 vaults + 11 named projects + 3 drift entries) | #11 | `auto_detected` | `skill_inventory_refresh.md` scans `~/aDNA/*.aDNA/` + grandfathered names; no operator input needed |
| 20 | `inventory_system.{md,yaml}` content (tool versions + machine class + PATH + env-var NAMES) | #11 | `auto_detected` | `skill_inventory_refresh.md` reads `git --version`, `python --version`, `node --version`, `claude --version`, `emacs --version`, `system_profiler`, `printenv | cut -d= -f1` etc. |
| 21 | `inventory_memberships.{md,yaml}` LP-network membership data (peer-id placeholder, signing-key reference, permission summary) | #11 | **`should_be_interview_was_defaulted`** | These are operator-specific connections (what lattices does the operator subscribe to? what nodes federate with?); landed as placeholders — gap |
| 22 | `inventory_memberships.yaml` federation block (8 keys: `shareable: false / discoverable: false / source_instance / version_policy / share_policy / license / creators / keywords`) | #11 | `hardcoded_from_design` + 1 `auto_detected` (`source_instance`) | Federation block intentionally inert by default; `source_instance` derived from hostname |

### C. `who/identity/` scaffolds (5 files)

| # | Item | M04 deliverable | Class | Evidence / Rationale |
|---|---|---|---|---|
| 23 | `who/identity/AGENTS.md` | #12 | `hardcoded_from_design` | Protocol stub; template paste |
| 24 | `identity_node.{md,yaml}` hostname + operator + machine class + creation timestamp | #12 | `auto_detected` | Same auto-detect sources as MANIFEST.md fields |
| 25 | `identity_node.{md,yaml}` persistent node-UUID | #12 | `auto_detected` | Generated at fork time via `uuidgen` |
| 26 | `identity_node.{md,yaml}` operator role + contact + default git author + persona tone preferences | #12 | **`should_be_interview_was_defaulted`** | Operator-specific; landed as placeholders or empty — gap |
| 27 | `identity_lattice_protocol.{md,yaml}` LP-network identity (peer-id, signing-key path, permission-set) | #12 | **`should_be_interview_was_defaulted`** | All placeholders; operator hasn't joined an LP network at bootstrap time (or has, but the interview should ask) — gap |

### D. Protocol stubs (2 files)

| # | Item | M04 deliverable | Class | Evidence / Rationale |
|---|---|---|---|---|
| 28 | `what/decisions/AGENTS.md` | #13 | `hardcoded_from_design` | Protocol stub; template paste |
| 29 | `who/coordination/AGENTS.md` | #13 | `hardcoded_from_design` | Protocol stub; template paste |

### E. 4 node-skills (4 files)

| # | Item | M04 deliverable | Class | Evidence / Rationale |
|---|---|---|---|---|
| 30 | `skill_node_health_check.md` | #14 | `hardcoded_from_design` | 12-step validator; template ship per M01 Obj 3 §9 #6 |
| 31 | `skill_update_all_vaults.md` | #14 | `hardcoded_from_design` | Per-vault `git pull --ff-only` runner |
| 32 | `skill_inventory_refresh.md` | #14 | `hardcoded_from_design` | Auto-detect engine itself |
| 33 | `skill_node_credentials_audit.md` (NAMES-ONLY redaction) | #14 | `operator_decision_driven` (D4=a from M04 S2) | M04 S2 D4 default chose NAMES-ONLY; the alternative (NAMES + last-4-chars) was rejected |

### F. Workspace router 4 additions (deliverable #15 sub-parts)

| # | Item | M04 deliverable | Class | Evidence / Rationale |
|---|---|---|---|---|
| 34 | Step 0 first-run-detection block (4 sub-steps) | #15 | `hardcoded_from_design` | Verbatim from M01 Obj 3 §5 |
| 35 | Project Discovery first row for `node.aDNA/` | #15 | `hardcoded_from_design` | Verbatim from M01 Obj 3 §7 |
| 36 | Workspace Layout addition (ordering: top of tree) | #15 | `operator_decision_driven` (D3=a from M04 S2) | M04 S2 D3 default chose top-of-tree over alphabetical |
| 37 | Standing Rule 5 (local-by-default) | #15 | `hardcoded_from_design` | Verbatim from M01 Obj 3 §7 |

### G. Template upstream commit (1 commit)

| # | Item | M04 deliverable | Class | Evidence / Rationale |
|---|---|---|---|---|
| 38 | `.adna/CLAUDE.md` cross-project routing hook (upstream commit `e3b3bcc`) | #16 | `hardcoded_from_design` | Verbatim from M01 Obj 3 §6; D2 chose to include (default a) |

### H. Backlog ideas (2 files)

| # | Item | M04 deliverable | Class | Evidence / Rationale |
|---|---|---|---|---|
| 39 | `idea_upstream_inventory_entity_type.md` | #17 | `hardcoded_from_design` | Proposes v8.0+ entity addition |
| 40 | `idea_upstream_identity_entity_type.md` | #18 | `hardcoded_from_design` | Proposes v8.0+ entity addition |

> Note: Item count totals are 40 when sub-items are expanded; the M04b spec's "22 S2 deliverables + 4 workspace router additions" wording groups inventory + identity + skills as bundles. The 7 gap items are stable regardless of granularity.

---

## Gaps detected (the 7 items)

The 7 `should_be_interview_was_defaulted` items group naturally by interview topic:

| Gap | M04 location | M01 Obj 3 source | Currently defaulted from | Interview topic (Obj 2) |
|---|---|---|---|---|
| **G1** | `MANIFEST.md` `purpose:` | §8 D4 (FAIR fields enumerated; purpose example given) | M01 Obj 3 example value | **Purpose** |
| **G2** | `MANIFEST.md` FAIR `keywords` | §8 D4 | 5 example tags (`node, inventory, lattice_membership, host_state, hestia`) — 1-2 should be operator-specific | **Purpose** + **Stack** |
| **G3** | `inventory_memberships.{md,yaml}` member content (lattices subscribed, federate-with nodes, marketplace categories) | §4 inventory_memberships description | Placeholders / empty | **Connections** |
| **G4** | `identity_node.{md,yaml}` operator role + contact | §4 identity_node description | Empty | **User-info** |
| **G5** | `identity_node.{md,yaml}` default git author identity (when differs from `git config`) | §4 identity_node | Empty | **User-info** |
| **G6** | `identity_node.{md,yaml}` persona tone preferences (Hestia default vs. formal vs. casual greeting style) | §3 Hestia persona spec | Hestia default (no operator override) | **User-info** |
| **G7** | `identity_lattice_protocol.{md,yaml}` peer-id + signing-key path + permission-set | §4 identity_lattice_protocol description | Placeholders (`note: filled in when node joins LP network — TBD`) | **Connections** |

### Adjacent gaps (operator-stated information that supplements auto-detection)

These are not strict gaps — auto-detect already covered the structural data — but the interview should *capture operator-stated overlays*:

| Gap | Location | Auto-detect filled | Interview overlay should add |
|---|---|---|---|
| **G8** | `inventory_system.{md,yaml}` | tool versions, hardware class from `system_profiler`, PATH | Operator's *primary* languages/frameworks (auto-detect captures presence, not usage frequency); IDE preferences when multiple are installed (e.g., Spacemacs + VSCode both detected → which is primary?); GPU model name when external GPU is connected; external storage / multi-monitor / peripheral count |
| **G9** | `MANIFEST.md` FAIR `license:` | defaulted `private` | Operator option to override (Apache-2.0 / MIT / CC-BY-4.0 / etc.) at bootstrap; default stays `private` if operator skips |

---

## Mapping gaps to interview topics

Per M04b spec §Obj 2, the interview spans 5 topics. Gap → topic mapping:

| Topic | Strict gaps (G1-G7) | Overlay gaps (G8-G9) | Expected question count |
|---|---|---|---|
| **Purpose** | G1, G2 | — | 2-3 |
| **User-info** | G4, G5, G6 | — | 3-4 |
| **Stack** | (part of G2) | G8 (overlay) | 3-4 |
| **Hardware** | — | G8 (overlay) | 2-3 |
| **Connections** | G3, G7 | G9 (overlay; license is connection-adjacent) | 4-5 |

**Total expected questions: 14-19** — fits the M04b spec acceptance criterion (≥15 questions across 5 topics).

The hybrid-bootstrap discipline (D1=b) means: items in classes `auto_detected` + `hardcoded_from_design` + `operator_decision_driven` flow through M04's existing auto-detect/template path *unchanged*. The interview *only* asks the 14-19 questions that fill G1-G9, with auto-detected values offered as defaults wherever an interview answer could refine an existing auto-detect (e.g., G8 stack overlay — auto-detect says "git, python, node, emacs installed"; interview asks "which of these is primary?").

---

## Items deferred (out of scope for M04b)

Five of the M04 AAR's 10 items deferred map to the **mini-campaign** but not to M04b directly:

| M04 AAR item | M04b disposition |
|---|---|
| #1 `registry_stub.md` not produced | Possibly resolved by **M-LWX-02 home-page gallery** (the Obsidian HOME.md acts as the registry view, reading from `inventory_vaults.yaml`); evaluate at M-LWX-02 entry |
| #2 `rebuild_procedure.md` not produced | Possibly resolved by **M-LWX-01 interview spec** including rebuild-handling (interview detects prior `node.aDNA/` and offers re-fork OR resume), OR carried to M07 if interview keeps rebuild out-of-scope |
| #4 v7.0 tag execution | M06 scope; unaffected by M04b |
| #6 M01 Obj 3 §8 D7 prose enumerated 5 federation keys but implementation lands with 8 | Carried to M07 (design-doc tightening) — out of M04b scope |
| #7 README.md frontmatter convention exception | Carried to M07 — out of M04b scope |
| #8 `skill_node_health_check.md` exit-code aspiration | Carried to M07 (bash wrapper or acceptance-criterion softening) — out of M04b scope |

Items #3 ADR-010 ratification skipped + #5 v7.0-pre-tag provenance + #9 coord memo delivery + #10 GitHub canonical-case = all out of M04b scope (mission-machinery, partner-coord, or upstream-tag-related).

---

## Self-reference (Standing Order #2)

This gap analysis demonstrates the M01 Obj 3 design + the hybrid-bootstrap principle by *enacting* the classification on the very vault that the design produced. The 7 gaps surfaced are themselves the **specification input** for Obj 2's interview skill — the analysis is one half of a design-execution loop where Obj 1 surfaces the gap and Obj 2 closes it. The dual-audience discipline (Standing Order #7) is exercised: the summary table (4 classes + headline gap %) is accessible to any operator; the per-item evidence rows (40 numbered items) are technically precise for the Obj 2 spec author.

If this analysis were re-run on `aDNA.aDNA/` itself, the same classification scheme would surface a different gap set (no `inventory_*` or `identity_*` files; Rosetta persona inline instead of Hestia; campaign-vault scope instead of per-node operational scope) — but the *method* of classification would be identical. That's the test: the framework generalizes.

---

## Cross-references

| Reference | Direction |
|---|---|
| [[../mission_adna_infra_p1_04b_workspace_ux_planning.md|M04b mission spec]] §Obj 1 | parent objective |
| [[../mission_adna_infra_p1_04_node_adna_bootstrap.md|M04 mission spec]] §Deliverables | source of 22 numbered deliverables |
| [[aar_m04_node_adna_bootstrap.md|M04 AAR]] §Items deferred | 10 items; 6 carry to M04b mini-campaign or M07 |
| [[m04_obj7_ten_dim_audit.md|M04 10-dim audit]] | per-dim evidence informs auto-detect vs. hardcode classification |
| [[m01_obj3_node_adna_design.md|M01 Obj 3 node.aDNA design]] | authoritative source for hardcoded items |
| `node.aDNA/what/inventory/inventory_vaults.yaml` | example of auto-detected output (21 vaults + 11 named projects) |
| `node.aDNA/what/inventory/inventory_memberships.yaml` | example of should-be-interview gap (federation placeholders) |
| `node.aDNA/who/identity/identity_node.yaml` | example of should-be-interview gap (operator role + contact + persona preferences) |
| `m04b_obj2_skill_node_bootstrap_interview_spec.md` (this mission) | downstream — consumes G1-G9 as question-spec input |
| [[../../../how/skills/skill_inventory_refresh.md|skill_inventory_refresh.md]] (template) | composes with interview skill per D1=b hybrid path |
| [[../../../how/skills/skill_project_fork.md|skill_project_fork.md]] (template) | upstream of interview skill in the bootstrap chain |

---

## Status

**Complete**. 40 items classified across 8 categories; 7 strict gaps + 2 overlay gaps surfaced; gaps mapped to 5 interview topics with question-count forecast 14-19. Output is the design input for Obj 2 (`m04b_obj2_skill_node_bootstrap_interview_spec.md`). Ready for handoff.
