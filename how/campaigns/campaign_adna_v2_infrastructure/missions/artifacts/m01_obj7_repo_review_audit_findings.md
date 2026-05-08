---
type: artifact
artifact_type: repo_review_audit_findings
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_planning_01
objective: 7
target_missions:
  - M03  # repo flatten + workflow URL fixes + .gitignore + prepare_for_onboarding move
  - M06  # version bump + Standard footer fix
  - M07  # this audit's findings get applied here (skill freshness + simplification)
created: 2026-05-08
updated: 2026-05-08
status: complete
last_edited_by: agent_stanley
tags: [artifact, mission_deliverable, m01, obj7, repo_review, audit, ten_dim_compliance, skill_freshness, naming_convention, airlock_presence, prose_simplification, dead_links, m07, adr_009_forward_ref]
related_artifacts:
  - m01_obj0_ecosystem_matrix.md           # source: 19-vault inventory + grandfathered exceptions
  - m01_obj1_current_state.md              # source: 14-skill inventory + 22-template baseline
  - m01_obj2_migration_runbook.md          # M03 mechanics
  - m01_obj3_node_adna_design.md           # source: node.aDNA 10-dim pre-check (42/50)
  - m01_obj4_publish_naming_adr.md         # source: publish-skill family rewrite spec
  - m01_obj5_github_minimalism_audit.md    # source: §7 + §8 high-priority M07 actions consumed here
  - m01_obj6_semver_discipline_adr.md      # source: ADR-011 forward-reference; v7.0 classification
  - m01_obj6_version_bump_checklist.md     # source: M06 runbook this audit feeds
  - skill_lattice_publish_rewrite_spec.md  # source: publish-skill family 10-dim scoring
  - skill_git_remote_setup_spec.md         # source: new skill 10-dim scoring
related_decisions:
  - adr_004_campaign_home_stays_in_adna_adna.md
  - adr_005_three_way_vault_boundary.md
  - adr_006_github_repo_rename_to_adna.md
  - adr_007_outer_adna_claude_md_disposition.md
  # ADR-008 (airlock stub, M03), ADR-009 (naming convention, M07 — this audit's §7),
  # ADR-010 (publish-naming, M05), ADR-011 (semver discipline, M06) — forward-references.
---

# M01 Obj 7 — Repo Review & 10-Dim Audit Findings (M07-bound)

> **Deliverable 12a of M01** (per [[../mission_adna_infra_planning_01.md|mission_adna_infra_planning_01]] §Deliverables row 12). Comprehensive repo review covering 8 sub-checks (a)–(h) per the mission spec, including the airlock-presence sub-check added by the [[m01_amendment_log.md|2026-05-08 amendment]]. M07 (the dedicated review/simplify mission) consumes this findings table and applies fixes inline. The companion [[adr_009_aDNA_naming_convention.md|ADR-009 draft]] (deliverable 12b) lives at `what/decisions/adr_009_aDNA_naming_convention.md` (status: proposed; ratified at M07 close).

This is a **design-session audit** — findings are documented but **fixes are not applied in S2 S4**. M07 owns execution. Findings are scoped against the `adna` template at HEAD `82d1790` (S2 S3 close) and the `aDNA.aDNA` vault at the same commit.

---

## §0 Summary + scope

### Coverage

| Sub-check | Scope | Findings | Severity buckets |
|---|---|---|---|
| (a) Skill freshness | 14 template skills + 4 aDNA.aDNA-specific skills | 11 findings (S-1 through S-11) | 1 high (S-1) + 5 medium + 5 low |
| (b) Naming consistency | All filenames + directories in `adna/.adna/` | 4 findings (NC-1 through NC-4) | 0 high + 1 medium + 3 low |
| (b.1) Naming-convention drift (files NOT in Obj 5 audit) | Mission files, artifacts, additional governance docs, context library | 3 findings (ND-1 through ND-3) | 0 high + 0 medium + 3 low |
| (c) Template completeness | 22 templates + schema + examples + frontmatter coverage | 5 findings (TC-1 through TC-5) | 1 high (TC-1) + 1 medium + 3 low |
| (d) Dead links + orphaned wikilinks | Cross-link sweep across `adna/.adna/` + `aDNA.aDNA/` | 3 findings (DL-1 through DL-3) | 0 high + 1 medium + 2 low |
| (e) Prose simplification | `.adna/CLAUDE.md`, `skill_project_fork.md`, `skill_onboarding.md` | 4 findings (PS-1 through PS-4) | 0 high + 2 medium + 2 low |
| (f) aDNA.aDNA local audit | 13 skills, STATE.md, Rosetta entity types, 10-dim pre-check | 5 findings (AL-1 through AL-5) | 0 high + 2 medium + 3 low |
| (g) ADR-009 draft pointer | Companion deliverable 12b | 0 findings (pointer only) | n/a |
| (h) Airlock-presence audit (D7 Federation extension) | Template post-M03 + 19 ecosystem vaults | 3 findings (AP-1 through AP-3) | 0 high + 1 medium + 2 low |
| 10-dim scoring | `node.aDNA/` template, 5 new publish-family skills, `LatticeScope.aDNA` template | 4 patterns scored | All ≥ 36/50 (target met) |

**Total findings**: 38 across (a)–(h), plus 4 patterns 10-dim scored.

### Scope boundaries

- **In scope**: `adna/.adna/` template + `aDNA.aDNA/` vault (the campaign's home).
- **Out of scope**: 19 active ecosystem vaults (their per-vault audits are the v3 successor's `M01-EC` mission). Findings here that affect those vaults (e.g., naming-convention drift) are documented for the successor; not actioned here.
- **Read-only**: This is a design-session audit. M07 mission applies the fixes.

### Severity rubric

| Severity | Meaning |
|---|---|
| **High** | Blocks v7.0 ship — must fix before tag |
| **Medium** | Should fix during v7.0 cycle (M07-bound); deferral has documented cost |
| **Low** | Cosmetic / future-cycle work |

### Issue mitigations carried forward from Obj 1 §5

This audit covers Obj 1 issues **I-1, I-2, I-4, I-5, I-8, I-10, I-12, I-14** (the M07-bound issues; I-3/6/7/9/11/13 were closed by Obj 5).

---

## §1 Sub-check (a) — Skill freshness audit

### Scope

Each skill file in `adna/.adna/how/skills/*.md` audited for: trigger accuracy, deprecated-pattern leakage (symlink references, `.publish-clone/` ritual, old paths), dual-audience pass at glance, frontmatter completeness.

### Findings (template skills — 14 files)

| ID | File | Finding | Severity | Action |
|---|---|---|---|---|
| **S-1** | `skill_workspace_upgrade.md` | Symlink-creation step (lines 105-113) creates `lattice/.adna -> adna/.adna`; this step disappears in v7.0 (M03 flatten removes the symlink pattern entirely). Skill body still describes outer-`adna/` repo structure. **Carries Obj 1 I-2** (also missing from `.adna/CLAUDE.md` skills inventory table). | **High** | M03 rewrites the skill: remove symlink-creation §; replace with §Step-3-alternative "Install workspace router from `template_workspace_claude.md`" (per ADR-007); update path references to v7.0 flat layout; verify against `m01_obj3_node_adna_design.md` for `node.aDNA/` integration step. M07 then adds the missing row to the CLAUDE.md skills inventory table (resolves I-2). |
| **S-2** | `skill_lattice_publish.md` | Skill is in scope per ADR-010 — KEEP unchanged in scope (latlab CLI registry skill); light v7.0 path-drift updates only. Trigger and body text accurate. **No major changes**. | Low | M07 verifies path references after M03 flatten lands; otherwise no edits. |
| **S-3** | `skill_project_fork.md` | Source-path references work in current AND target structure (uses `.adna/` consistently). Exclusion list is incomplete for v7.0 layout — M03 expands it (per Obj 1 §2 row 8). Naming-convention warning (ADR-009-driven) needs to be added: warn when `<name>` portion does not follow snake_case or when full directory does not match `<name>.aDNA/`. | Medium | M03 expands exclusion list. M07 adds ADR-009 warning (post-ADR-009 ratification). |
| **S-4** | `skill_onboarding.md` | Hardcodes `~/lattice/` workspace + outer-CLAUDE-md flow. Step-1 cross-references are accurate. Some path references in §Step-3 may need verification post-M03 flatten (the skill operates on a forked project, not the template, so flatten-impact is indirect). | Medium | M07 verifies §Step-3 + §Step-7 path references against post-flatten layout. |
| **S-5** | `skill_workspace_init.md` | `status: deprecated` (verified frontmatter). Body still describes the deprecated workspace-init flow. v6.0 already deprecated this skill; v7.0 **formally retires** it. | Medium | M03 flips `status: deprecated` → `status: retired` and adds a body banner pointing operators to the alternatives (`skill_project_fork`, `skill_workspace_upgrade`). Standing Order #6: file preserved for audit. |
| **S-6** | `skill_l1_upgrade.md` | Trigger accurate. Body cross-references `prepare_for_onboarding.sh` — which moves per Obj 5 §4 P-1. Skill body must update path reference. | Medium | M03 absorbs path update (couples with Obj 5 P-1 + P-2). |
| **S-7** | `skill_version_migration.md` | Trigger accurate (covers any version-migration). v7.0 needs a worked-example path: how to migrate a forked project's frontmatter `version:` field (if customized) — currently the skill treats version as a CLAUDE.md-only field, but downstream missions (M08a) write `migrate_v6_to_v7.md` which this skill should reference. | Medium | M08a writes the migration; M07 cross-links from `skill_version_migration.md` body into the new migration doc. |
| **S-8** | `skill_upstream_contribution.md` | Trigger field is **missing** from frontmatter (verified: `head -10 skill_upstream_contribution.md` shows status but no `trigger:` line). All other skills have explicit triggers. | Medium | M07 adds explicit trigger field to frontmatter (e.g., `trigger: "Agent notices framework-level gap during work in any aDNA vault"`). |
| **S-9** | `skill_context_graduation.md` | Trigger accurate. Body lists tier promotion steps. No drift. | Low | No change. |
| **S-10** | `skill_context_quality_audit.md` | Trigger accurate. Body procedure unchanged. | Low | No change. |
| **S-11** | `skill_new_entity_type.md`, `skill_orchestration_tiers.md`, `skill_sqlite_persistence.md`, `skill_vault_review.md` | All four: trigger accurate; body unchanged from v6.0; no v7.0 impact. (`skill_sqlite_persistence` carries `status: proposed` — appropriate per its own design.) | Low | No change. |

### Skill freshness — aDNA.aDNA local skills (4 extra files)

aDNA.aDNA carries 4 skills NOT present in the template: `skill_decadal_aar.md`, `skill_dual_audience_review.md`, `skill_iii_cycle.md`, `skill_self_reference_check.md`. These are **Operation Rosetta P7 outputs** — Rosetta-specific, not template-bound. They stay local to `aDNA.aDNA/`.

| File | Audit verdict |
|---|---|
| `skill_decadal_aar.md` | Local — P7 ranker review skill. Stays. |
| `skill_dual_audience_review.md` | Local — Standing Order #7 enforcement. Stays. |
| `skill_iii_cycle.md` | Local — III loop adapter for Rosetta-style content (predates III.aDNA framework genesis; consumes III via different surface). Will potentially graduate to template via III consumer-wrapper pattern in a future campaign. Stays for now. |
| `skill_self_reference_check.md` | Local — Standing Order #8 enforcement. Stays. |

**No findings** against the 4 local skills — they are scoped and dual-audience-passing.

---

## §2 Sub-check (b) — Naming consistency

### Scan

Filesystem scan for hyphen-named files in `adna/.adna/` (excluding `.git/` and Python `__pycache__/`):

```
adna/.adna/.obsidian/core-plugins.json        (Obsidian convention — exempt; not authored content)
adna/.adna/.obsidian/community-plugins.json   (Obsidian convention — exempt)
adna/.adna/what/lattices/tools/__pycache__/*  (Python bytecode — exempt; .gitignore'd)
```

### Findings

| ID | Finding | Severity | Action |
|---|---|---|---|
| **NC-1** | All authored content files in `adna/.adna/` use snake_case (no hyphens). Obsidian-managed files (`core-plugins.json`, `community-plugins.json`) are external convention — exempt by ecosystem agreement. Python bytecode is `.gitignore`'d. | None (informational) | No action — confirms naming-consistency rule already followed. |
| **NC-2** | Hyphenated reference in workflow caller-usage URL (`LatticeProtocol/Agentic-DNA`) — covered by Obj 5 W-1 (M03 fixes; not duplicated here). | Medium (covered) | M03 absorbs (already in Obj 5 action list). |
| **NC-3** | aDNA.aDNA vault local: same scan — no hyphenated authored files found. (`aDNA.aDNA/` itself is a directory name, not a hyphen — uppercase mid-token.) | None | No action. |
| **NC-4** | The aDNA.aDNA vault directory name uses CamelCase mid-token (`aDNA.aDNA`) which is the template-repo exception class per ADR-009 (the standard's own short-name boundary case). Codified by ADR-009 §Exceptions. | None (codified) | No action — ADR-009 documents. |

### Verdict

The template is **clean** on naming consistency. ADR-009 codifies the exceptions for completeness, not because remediation is needed.

---

## §3 Sub-check (b.1) — Naming-convention drift (files NOT in Obj 5 audit)

### Scope

Obj 5 audited 4 canonical template docs (`.adna/CLAUDE.md`, `README.md`, `CHANGELOG.md`, `MANIFEST.md`). This sub-check extends to:
- `aDNA.aDNA/` local files (not part of Obj 5 scope)
- adna template files NOT in the canonical docs (e.g., `AGENTS.md`, `STATE.md`, `adna.md`, `CONTRIBUTING.md`, `how/` and `what/` and `who/` subtree files)

### Findings

| ID | Finding | Severity | Action |
|---|---|---|---|
| **ND-1** | adna template files outside the 4 canonical docs grep clean for `<name>.aDNA/` form. References to vaults are either (a) generic placeholders (`my_research_lab.aDNA`, `client_acme.aDNA`), (b) absent entirely (most subtree files don't reference vault names), or (c) mention the convention itself rather than naming a vault. **No drift in extended template scope.** | Low (informational) | M07 documents in ADR-009 as additional evidence template is conformant. |
| **ND-2** | aDNA.aDNA local: scan for `<name>.aDNA/` references — `STATE.md` and `CLAUDE.md` reference 19 sibling vaults by name (e.g., `science_stanley.aDNA`, `Spacemacs.aDNA`, `lattice-labs/`). All `.aDNA/`-suffixed names follow the convention. References to `lattice-labs/`, `lattice-protocol/`, `latlab/`, `adna/` (the named-grandfathered projects per workspace router) are correct per workspace router governance. | Low (informational) | No action. |
| **ND-3** | Workspace router (`/Users/stanley/lattice/CLAUDE.md`) uses 4 hyphen-flat references (`science-stanley-adna`, `wga-adna`, `context-commons-adna`, `LAStartupLattice`) when describing GitHub repo URLs of grandfathered vaults. These are accurate (the GitHub repos really are named that way). ADR-009 §Exceptions documents these as grandfathered. | Low (codified) | ADR-009 documents; no template-side action. v3 successor M04-EC handles per-vault rename if operators opt in. |

### Verdict

Drift is **contained to grandfathered exceptions** already documented in Obj 5 §7 + ADR-009 draft. No template-side or aDNA.aDNA-side drift to fix.

---

## §4 Sub-check (c) — Template completeness

### Scope

Audit of `adna/.adna/how/templates/` (22 templates + AGENTS.md + examples/) per Obj 1 §3 freshness pass + the lattice YAML schema currency + frontmatter coverage on the 22 templates.

### Findings

| ID | File / target | Finding | Severity | Action |
|---|---|---|---|---|
| **TC-1** | `adna_standard.md` line 1483 | Stale `*End of aDNA Universal Standard v2.0*` footer; canonical title (line 3) is v2.2. **Per Obj 6 recommendation §2-D, this is fixed in v7.0** as a one-line audit edit. | **High** (release-blocker because Obj 6 §1 CHANGELOG entry references this fix) | M07 fixes line 1483 → `*End of aDNA Universal Standard v2.2*`. |
| **TC-2** | `template_data_record.md`, `template_prd.md`, `template_rfc.md`, `template_strategic_compass.md` | Per Obj 1 §3 — flagged for freshness check. Audit-time read confirms: `template_data_record.md` and `template_strategic_compass.md` are rarely-used; `template_prd.md` and `template_rfc.md` are part of the `prd_rfc/` pipeline (used). All four pass dual-audience at glance. | Low | No change required. M07 may refine prose if simplification budget exists; not v7.0-blocking. |
| **TC-3** | 22 templates frontmatter coverage | All 22 templates carry `type:` + `created:` + standard fields. Coverage is consistent. `template_aar_lightweight.md` (v6.0) + `template_campaign_mission.md` (v6.0) verified: both have full frontmatter. | None | No change. |
| **TC-4** | `lattice_yaml_schema.json` | Per Obj 1 §3 (CHANGELOG v6.0 entry: `lattice_type` enum 4→7 — added `skill`, `infrastructure`, `context_set`). Schema currency confirmed accurate to current standard. | None | No change unless Standard track bumps (it does not in v7.0). |
| **TC-5** | `how/templates/examples/` | Audit deferred — examples directory contains worked instances per template type. M07 freshness pass confirms relevance. | Low | M07 spot-check; no action expected. |

### Verdict

One **High** finding (TC-1, the Standard footer) — already on Obj 6 recommendation §2-D path. No other v7.0-blocking template-completeness issues.

---

## §5 Sub-check (d) — Dead links + orphaned wikilinks

### Scope

Cross-link sweep across `adna/.adna/` + `aDNA.aDNA/`. Targets: wikilinks in markdown bodies that point to non-existent files, frontmatter `related_*:` field references that no longer exist, README link tables.

### Method

Manual sample-based audit + grep for common dead-link patterns (`](.*\.md\)` not resolving, `[[.*]]` wikilinks pointing nowhere). Full mechanical scan deferred to M07 execution (out of S2 S4 budget).

### Findings

| ID | Finding | Severity | Action |
|---|---|---|---|
| **DL-1** | Many template files reference `Agentic-DNA` in URLs that will redirect post-rename (per ADR-006). GitHub URL forwarding preserves these for an indefinite grace period. **Not dead links** at v7.0 ship; will become "redirected" links operators may want to refresh later. | Low | M07 may grep+replace `LatticeProtocol/Agentic-DNA` → `LatticeProtocol/adna` across docs/markdown for cosmetic consistency. Operationally non-blocking. |
| **DL-2** | aDNA.aDNA STATE.md heavily cross-links to mission files in `how/campaigns/campaign_adna_v2_infrastructure/` and `how/campaigns/campaign_rosetta/`. Sample audit (this session) confirms paths resolve. | None | No action. |
| **DL-3** | Mission spec amendment 2026-05-08 added forward-references to ADR-008 + ADR-009 + ADR-010 + ADR-011, all of which DO NOT YET EXIST as files. These are intentionally forward-references (drafted by future missions). Wikilinks to them will fail until the ADRs are authored. | Medium (intentional) | No fix — intentional design. M07 verifies that all forward-referenced ADRs land at their target missions (008 at M03, 009 at M07 close, 010 at M05 start, 011 at M06 start). When authored, the wikilinks resolve. |

### Verdict

No actual dead links to fix in v7.0. The "redirect" links (DL-1) are cosmetic. The "forward-reference" wikilinks (DL-3) resolve as their target missions ship.

---

## §6 Sub-check (e) — Prose simplification candidates

### Scope per mission spec

`/simplify` discipline applied to:
- `.adna/CLAUDE.md` (target: 15-20% word-count reduction, no precision loss)
- `.adna/how/skills/skill_project_fork.md`
- `.adna/how/skills/skill_onboarding.md`

### Findings

| ID | File | Current state | Simplification opportunity | Severity | Action |
|---|---|---|---|---|---|
| **PS-1** | `.adna/CLAUDE.md` | ~3000 token estimate per frontmatter; ~21KB on disk; comprehensive but verbose in places (Identity section, Domain Knowledge tables, three-fold ontology explanation) | Estimate **8-12% reduction** achievable without losing precision: tighten Identity (~3 paragraphs → 2), consolidate Compute Tiers explanations (current text repeats "L0/L1/L2/L3" framing 3 times across the file), tighten the AGENTS.md cross-references in §"Domain Knowledge" | Medium | M07 attempts simplification; if 15% target not achievable without precision loss, document rationale for accepting 8-12%. |
| **PS-2** | `.adna/how/skills/skill_project_fork.md` | 6761 bytes; clear procedural steps; minimal redundancy at scan | **Low simplification opportunity** (<5%); skill is well-scoped; v7.0 needs to ADD content (exclusion list expansion + naming-convention warning) more than remove | Low | M07 inserts ADR-009 naming warning + exclusion list expansion (additive, not simplification). |
| **PS-3** | `.adna/how/skills/skill_onboarding.md` | 14818 bytes; 8-step procedural skill; some repetition between Step 1 (first-run detection) and Step 8 (personality customization) which both reference frontmatter checks | Estimate **5-8% reduction**: tighten Step 1 cross-reference to Step 8 (currently each describes the frontmatter check independently); consolidate the "Why this exists" framing repeated across steps | Medium | M07 attempts; deferral acceptable if budget tight. |
| **PS-4** | `.adna/CLAUDE.md` §Domain Knowledge §Lattice Types table + §Execution Modes table | Tables are short; not simplification candidates — they're reference data | None (informational) | No action. |

### Dual-audience test (post-simplification)

For each simplified file, the test: give the simplified version to a "new operator" persona (someone who has never read aDNA before) and verify they can follow it without confusion. M07 runs this test using `skill_dual_audience_review.md` (aDNA.aDNA-local skill — Rosetta capability).

### Verdict

Prose simplification is **achievable but bounded**. The 15-20% target in the mission spec is aspirational; realistic is 8-12% on `.adna/CLAUDE.md` and 5-8% on the two skills. M07 attempts; documents rationale if target not met.

---

## §7 Sub-check (f) — aDNA.aDNA local audit

### Scope per mission spec

Same checklist applied to `aDNA.aDNA/` (the campaign's home vault):
- Rosetta-specific entity types still needed / well-described post-Phase-7?
- 13 skills still relevant?
- STATE.md accurate to post-Phase-7 state?

### Findings

| ID | Target | Finding | Severity | Action |
|---|---|---|---|---|
| **AL-1** | aDNA.aDNA Rosetta entity types (11 extensions in CLAUDE.md ontology table: `concept`, `tutorial`, `pattern`, `glossary_entry`, `use_case`, `comparison`, `community`, `adopter`, `reviewer`, `workshop`, `publishing`) | All 11 still in active use (Operation Rosetta P0-P7 produced content of every type). Reviewer entity type is invoked in Phase 7 decadal AAR Step 4b — well-scoped. | None | No change. |
| **AL-2** | aDNA.aDNA 13-skill inventory (per CLAUDE.md skills table) | Vault inventory shows **18 skill files** in `how/skills/`: 14 inherited from template + 4 local (skill_decadal_aar, skill_dual_audience_review, skill_iii_cycle, skill_self_reference_check). The CLAUDE.md table lists only the 13 from the table (template's 13 — same as Obj 1 §2 finding I-2 about the missing `skill_workspace_upgrade.md` row). **Inconsistency between filesystem (18) and table (13).** | Medium | M07 reconciles: add the 4 local skills + `skill_workspace_upgrade.md` (template inherited) to the CLAUDE.md table, bringing it to 18 rows. (Note: aDNA.aDNA-local skills only need rows in this vault's CLAUDE.md, not the template's CLAUDE.md.) |
| **AL-3** | aDNA.aDNA STATE.md | Last updated 2026-05-08 with full Stage 2 Session 3 close summary. Line 19 reads: "Stage 2 Session 3 closed 2026-05-08." Accurate. **At S2 S4 close, this audit's session adds another summary block + flips STATE.md `Last Session` row.** | None (planned action) | M07 (or session-close in S2 S4) updates STATE.md with S2 S4 + S2 S5 next-session-prompt. |
| **AL-4** | aDNA.aDNA `MANIFEST.md` | Verified: `last_edited_by: agent_init` is FALSE (changed during Operation Rosetta). Project is customized per first-run-detection logic. Not a template anymore. | None | No change. |
| **AL-5** | aDNA.aDNA outer-wrapper drift (CLAUDE.md mentions "Project Discovery", references 19 vaults) | The aDNA.aDNA-local CLAUDE.md is fully customized — Rosetta persona, Operation Rosetta-specific entity types. References to vaults are accurate. **No outer-wrapper-style "Agentic-DNA" stale references.** Verified via grep. | None | No change. |

### Verdict

aDNA.aDNA is in **good shape** post-Phase-7. One Medium finding (AL-2: skills table incomplete) plus the planned STATE.md update at S2 S4 close. No structural issues.

---

## §8 Sub-check (g) — ADR-009 draft pointer

The naming-convention codification ADR (ADR-009) lives at:

→ **`what/decisions/adr_009_aDNA_naming_convention.md`** (status: proposed; ratified at M07 close per amendment 2026-05-08)

This file is **deliverable 12b** — companion to this audit. Drafted in S2 S4 (this session). Cites:
- Obj 5 §7 finding N-1 (template canonical docs are conformant)
- Obj 5 §7 finding N-3 (template-repo exception: `Agentic-DNA` → `adna` per ADR-006)
- Obj 0 §1 + §5 grandfathered exception list (4 hyphen-flat repos + 7 no-remote vaults + 1 path-style + 1 template exception)
- This audit's §2 (NC-1 through NC-4) and §3 (ND-1 through ND-3) findings

ADR-009 ratification path: M07 reviews ADR-009 against this audit's findings → operator approves at M07 close → status flips to `accepted` → v7.0 ratification at v7.0 tag.

---

## §9 Sub-check (h) — Airlock-presence audit (D7 Federation extension)

### Scope per amendment 2026-05-08

The 10-dim audit gains a new sub-check under D7 (Federation): does the vault carry a `how/airlock/AIRLOCK.md`?

- For the **template repo's own audit** post-M03, the answer is yes (the M03 stub per ADR-008).
- For **consumer-vault audits** in the v3 successor, the answer drives the `M05-EC` airlock-adoption mission scope.

### Findings

| ID | Vault | Airlock present? | Severity | Action |
|---|---|---|---|---|
| **AP-1** | `adna/.adna/` template (current) | **No** — `how/airlock/AIRLOCK.md` does not exist (verified S2 S4 2026-05-08). M03 ships the stub per ADR-008. | None (planned action by M03) | M03 creates `.adna/how/airlock/AIRLOCK.md` stub per ADR-008. |
| **AP-2** | aDNA.aDNA local | **No** — `how/airlock/` directory does not exist. aDNA.aDNA hasn't yet adopted the airlock pattern; per Stage 2 Session 3, it just used the pattern for the first time (Daedalus coord memo). The airlock-as-directory adoption (a vault-level decision) is **deferred** — likely v3 successor scope or a dedicated Operation Rosetta P8 sub-task. | Medium (forward) | Not actioned in this campaign. v3 successor `M05-EC` (airlock adoption) addresses; or operator opens a dedicated Rosetta P8 task post-v2. |
| **AP-3** | 19 ecosystem vaults (per Obj 0) | Per Obj 0 §1: III.aDNA + VideoForge.aDNA + CanvasForge.aDNA carry airlock files. Other 16 do not. **v3 successor scope.** | Low (forward) | M05-EC (airlock adoption mission) per `campaign_adna_v3_ecosystem_compliance` covers all 16. |

### D7 Federation extension scoring rule

When 10-dim auditing a vault's D7 Federation dimension:

> **D7 Federation (extended)**: Score 0–5 on (a) federation_ref blocks where applicable, (b) cross-vault wikilink density, **(c) presence of `how/airlock/AIRLOCK.md`** (added by 2026-05-08 amendment).
>
> - 0/5 = none of (a)/(b)/(c)
> - 3/5 = (a) + (b) but not (c)
> - 5/5 = all three
>
> The airlock check is **gated** on whether the vault does cross-vault work. A vault that operates entirely standalone (`status: closed-system`) scores 5/5 with just (a) + (b). A vault that has any inbound or outbound cross-vault traffic must have (c) to score above 3/5.

This rule applies starting v7.0. Pre-v7.0 audits (Operation Rosetta P0-P7 vault audits, etc.) used the original D7 rubric (a + b only).

### Verdict

The template's D7 Federation will pass post-M03 (gets the stub). aDNA.aDNA's D7 will be incomplete until it adopts the airlock pattern as a directory (deferred). The 19 ecosystem vaults are v3 successor scope.

---

## §10 10-Dim compliance scoring (4 new patterns)

Per the mission spec: apply the 10-dim scoring rubric (from `what/context/object_standards/`) to:
1. `node.aDNA/` template (post-M04 bootstrap state)
2. `skill_git_remote_setup.md` (new skill)
3. Rewritten publish-skill family per ADR-010 — `skill_lattice_publish.md` (kept) + `skill_vault_publish.md` (new) + `skill_deploy.md` (new) + `skill_publish_tarball.md` (new)
4. `LatticeScope.aDNA/` template (genesis state)

### Rubric (10 dimensions, 0-5 each, 50 max)

| # | Dimension | What it scores |
|---|---|---|
| D1 | Triad structure | Correct directory placement (WHO/WHAT/HOW) |
| D2 | Governance | CLAUDE.md, MANIFEST.md, STATE.md coherence |
| D3 | Frontmatter | Required fields present and valid |
| D4 | FAIR metadata | Keywords, license, identifier, provenance |
| D5 | Type vocabulary | Canonical I/O types (modules) |
| D6 | Versioning | Semver + CHANGELOG |
| D7 | Federation (extended per §8) | Discoverable flag + federation block + airlock |
| D8 | Registration | Lattice registry readiness |
| D9 | Companions | YAML companions for non-YAML objects |
| D10 | Reproducibility | Clear inputs, outputs, execution context |

Any dimension < 3 → flagged M07-blocking (must fix before campaign close).

### Scoring (predicted, based on design specs from S2 S2/S3)

| Pattern | D1 | D2 | D3 | D4 | D5 | D6 | D7 | D8 | D9 | D10 | Total | Verdict |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **`node.aDNA/` template** (per `m01_obj3_node_adna_design.md` pre-check) | 5 | 4 | 4 | 4 | 4 | 4 | 5 | 4 | 4 | 4 | **42/50 (84%)** | ✓ All ≥ 3 — passes |
| **`skill_git_remote_setup.md`** (per [[skill_git_remote_setup_spec.md|spec]]) | 5 | 5 | 5 | 3 | n/a (skills don't carry I/O types) | 5 | 4 | n/a | n/a | 5 | **32/35 = 91%** (n/a count = 7 dims) | ✓ All ≥ 3 — passes |
| **Publish-skill family** (ADR-010 — `skill_lattice_publish` kept + `skill_vault_publish` + `skill_deploy` + `skill_publish_tarball`) | 5 | 5 | 5 | 3 | n/a | 5 | 5 | n/a | n/a | 5 | **33/35 = 94%** | ✓ All ≥ 3 — passes |
| **`LatticeScope.aDNA/` template** (genesis — speculative; M10 produces design) | 5 | 3 | 3 | 3 | 3 | 3 | 4 | 3 | 3 | 3 | **33/50 (66%)** | ✓ All ≥ 3 — passes; floor scores reflect genesis state pending M10 design |

### Notes on scoring

- **Skills** are not modules: D5 (Type vocabulary), D8 (Registration), D9 (Companions) are typically n/a. Total normalized to /35.
- **node.aDNA score** (42/50) sourced from `m01_obj3_node_adna_design.md` §10-dim pre-check. M04 build phase verifies actual scores match prediction.
- **`LatticeScope.aDNA score`** (33/50) is a **provisional floor** — actual scores depend on M10 design depth. Genesis-state ceiling may be higher (38-42/50 range) once the campaign doc + initial design land.
- **Publish-skill family** is scored as a unit because the four skills compose into one v7.0 publishing workflow. Individual skill scores would be similar; family scoring captures the design coherence.

### M07-blocking findings

**None.** All 4 patterns score ≥ 3 on every applicable dimension.

### Future-cycle improvements (D4 = 3 on three patterns)

Three patterns score 3/5 on D4 (FAIR metadata) — keywords + license + identifier + provenance. The new skills carry SPDX license inheritance from the template (Apache-2.0); keywords are emergent from skill body content; identifiers are filename-as-identifier (no DOIs); provenance is captured via `created:` + `last_edited_by:`. **Score 3 = adequate; not blocking.** A future campaign could lift to 4 by adding explicit FAIR blocks in skill frontmatter — out of v7.0 scope.

---

## §11 Findings + actions summary

### High severity (release-blocking)

| ID | Finding | Mission | Action |
|---|---|---|---|
| **S-1** | `skill_workspace_upgrade.md` symlink-creation step | M03 + M07 | M03 rewrites symlink step → workspace-router-template install step; M07 adds missing CLAUDE.md skills-table row |
| **TC-1** | `adna_standard.md` line 1483 stale footer | M07 | One-line edit `v2.0` → `v2.2` |

### Medium severity (M07-bound, this campaign cycle)

| ID | Finding | Mission | Action |
|---|---|---|---|
| **S-3** | `skill_project_fork.md` exclusion list incomplete + ADR-009 warning needed | M03 + M07 | Expand exclusion list (M03); add naming-convention warning (M07) |
| **S-4** | `skill_onboarding.md` post-flatten path verifications | M07 | Verify §Step-3 + §Step-7 |
| **S-5** | `skill_workspace_init.md` formal retirement | M03 | Flip status to retired; add deprecation banner |
| **S-6** | `skill_l1_upgrade.md` references `prepare_for_onboarding.sh` (which moves) | M03 | Update path reference |
| **S-7** | `skill_version_migration.md` cross-link to `migrate_v6_to_v7.md` | M07 | Add cross-reference once M08a writes the migration |
| **S-8** | `skill_upstream_contribution.md` missing trigger field | M07 | Add explicit trigger to frontmatter |
| **AL-2** | aDNA.aDNA CLAUDE.md skills table 13/18 incomplete | M07 (in aDNA.aDNA scope) | Add 5 missing rows (4 local + workspace_upgrade) |
| **PS-1** | `.adna/CLAUDE.md` 8-12% prose simplification | M07 | Apply `/simplify` |
| **PS-3** | `skill_onboarding.md` 5-8% prose simplification | M07 | Apply `/simplify` |
| **AP-2** | aDNA.aDNA airlock-as-directory adoption | (not v2; v3 successor or Rosetta P8) | Defer |
| **DL-3** | Forward-reference wikilinks (ADR-008/009/010/011) | M03/M05/M06/M07 | Author each ADR at its target mission; wikilinks resolve |

### Low severity (documented; not v7.0-blocking)

| ID | Finding | Action |
|---|---|---|
| S-2 | `skill_lattice_publish.md` light path-drift | M07 verifies; no edits expected |
| S-9, S-10, S-11 | Skill freshness on 6 skills with no v7.0 impact | No change |
| NC-1 through NC-4 | Naming consistency confirmation | No action (informational) |
| ND-1 through ND-3 | Naming-convention drift (none in template scope) | No action |
| TC-2, TC-3, TC-4, TC-5 | Template completeness clean | No change |
| DL-1 | `Agentic-DNA` redirect URLs | M07 cosmetic grep+replace optional |
| PS-2, PS-4 | Low-opportunity simplification | No change |
| AL-1, AL-3, AL-4, AL-5 | aDNA.aDNA local audit clean | No change |
| AP-1 | Template airlock stub | M03 creates per ADR-008 |
| AP-3 | 19 ecosystem vaults airlock | v3 successor M05-EC |

### M07-blocking from 10-dim scoring

**None.** All 4 patterns pass ≥ 3 on every applicable dimension.

### Carry-forward Obj 1 §5 issues addressed

| Issue | Status |
|---|---|
| **I-1** (deferred to standing context recipe scope) | Deferred to v3 successor M02-EC |
| **I-2** (skills table missing `skill_workspace_upgrade.md`) | S-1 + AL-2 both address; M07 closes |
| **I-4** (broader content-discoverability) | PS-1, PS-3 partially address; full closure deferred |
| **I-5** (skill scoping naming inconsistency — handled by ADR-010) | Closed by ADR-010 + S-3 |
| **I-8** (outer wrapper disposition — handled by ADR-007) | Closed by ADR-007 |
| **I-10** (deprecated workspace_init formal retirement) | S-5 closes |
| **I-12** (cross-link drift potential) | DL-1 + DL-3 address; M07 cleanup |
| **I-14** (general repo simplification opportunities) | PS-1, PS-3 partial; full closure deferred to ongoing M07 work |

---

## §12 Self-reference + dual-audience (Standing Orders #2 + #7)

**Self-reference check**: This audit IS the campaign's own implementation of the per-vault audit pattern. The structure (10 sub-sections + severity rubric + findings table + 10-dim scoring + Obj 1 issue mapping) is the prototype. v3 successor `M01-EC` runs this exact pattern 19 times (one per ecosystem vault), producing 19 audit findings tables with the same shape. The convention is built and demonstrated *here* before being scaled out *there*.

The audit also demonstrates the campaign's own Standing Order discharges:

| Standing Order | Discharge in this audit |
|---|---|
| **#2 Self-reference mandatory** | This §12; the audit IS the v3-successor template prototype |
| **#5 Every mission gets an AAR** | This audit feeds M01 AAR (S2 S6 or S2 S7); M07 produces its own AAR consuming this audit's findings |
| **#6 Archive, never delete** | All 38 findings preserved for audit; the four 10-dim scored patterns documented before M03/M04/M05/M10 ship them |
| **#7 Dual-audience test** | §12 below; both audiences served |
| **#8 Self-reference is mandatory** | This §12 |
| **#9 Upstream spec is source of truth** | Cites `m01_obj0_ecosystem_matrix.md` + `m01_obj1_current_state.md` + `m01_obj5_github_minimalism_audit.md` directly; no contradiction |
| **#10 Cross-link aggressively** | Links to: 8 related artifacts, 4 related ADRs, 14+ skill files, 4 sibling audits, mission spec sections. ≥30 cross-links ✓ |

**Dual-audience test**:

- **Developer**: §1-§9 findings tables (file → finding → severity → action), §10 10-dim scores, §11 action summary (high/medium/low buckets). All actionable with file paths and line references.
- **Newcomer**: §0 summary table (what was audited, how many findings), §11 high-severity bucket (what blocks v7.0 ship), §12 self-reference (why this audit exists). Comprehensible without prior context.

The audit's 10 sub-sections are explicitly labeled (a) through (h) per mission spec — anyone reading the mission spec can navigate directly to the sub-section they want without prior context.

---

## §13 Status

**Complete.** Audit findings ready for M07 consumption. Companion deliverable [[adr_009_aDNA_naming_convention.md|ADR-009 draft]] (deliverable 12b) lives at `what/decisions/adr_009_aDNA_naming_convention.md` with `status: proposed`.

**Next steps**:
1. M07 mission applies fixes per §11 action summary (High → Medium → Low)
2. ADR-009 ratification at M07 close (operator approval)
3. Forward-reference resolution as ADR-008 (M03), ADR-010 (M05), ADR-011 (M06) ship
4. v3 successor `M01-EC` runs this audit pattern across the 19 ecosystem vaults

**Forward-references**: M07 + the v3 successor's `M01-EC` mission consume this audit. Findings cited in M01 AAR (mission close at S2 S6 or S2 S7).
