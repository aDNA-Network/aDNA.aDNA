---
type: artifact
artifact_type: drift_reconciliation
campaign: campaign_adna_v2_infrastructure
mission: mission_adna_infra_p1_06_v7_governance_tag
objective: 2
session: session_stanley_20260518_183851_adna_v2_m06_s2
created: 2026-05-18
updated: 2026-05-18
status: complete
last_edited_by: agent_stanley
tags: [artifact, mission_deliverable, m06, obj2, changelog_drift, v7_0, reconciliation, m06_s2, audit_trail]
related_artifacts:
  - m01_obj6_version_bump_checklist.md   # source: pre-drafted v7.0 CHANGELOG entry M03 B10 committed verbatim
  - m01_obj6_semver_discipline_adr.md    # source: ADR-011 recommendation
  - aar_m05_publish_skill_rewrite.md     # source: M05 S2 defect-fix evidence
  - aar_m08a_upgrade_guide_and_coord_memos.md  # source: M08a items-deferred #14 (M06 fold-in)
related_decisions:
  - adr_006_github_repo_rename_to_adna.md  # amended 2026-05-18 M06 S2 D1 — mixed-case canonicalization
  - adr_011_aDNA_semver_discipline.md      # ratified 2026-05-18 M06 S2 phase gate
---

# M06 Obj 2 — CHANGELOG v7.0 Drift Reconciliation

> **M06 deliverable** per mission spec §Obj 2 — verifies the pre-drafted `.adna/CHANGELOG.md` v7.0 entry (lines 31-88, M03 B10 commit `a54e2b6`) against the M02-M11 actual outputs and reconciles 9 enumerated drift candidates plus 2 newly surfaced candidates. The resulting line-level diff lands in `.adna/CHANGELOG.md` as part of the M06 S2 pre-tag commit. This artifact is the **auditable record** of every Add/Edit/Drop decision.

## §0 Scope

The CHANGELOG v7.0 entry was pre-drafted at M01 Obj 6 §1 (2026-05-08) and committed verbatim to `.adna/` at M03 B10 (commit `a54e2b6` 2026-05-11). The entry anticipated M04-M11 actual outputs as forward-references — some of which have since landed in `.adna/` via single-commit additive-upstream pattern, and some of which have shifted in attribution (M07/M08c/M09/M10/M11 absorbed by v8 per 2026-05-17 amendment).

M06 Obj 2 walks every drift candidate, decides Add / Edit / Drop disposition, and produces the resolved CHANGELOG diff applied at the M06 S2 pre-tag commit. **Date placeholder `YYYY-MM-DD` → `2026-05-18`** is the trivial fill; the substantive work is candidates 1-11 below.

## §1 Drift candidates — resolution table

| # | Candidate | Evidence (commit / artifact) | Disposition | Diff target |
|---|---|---|---|---|
| 1 | **M-LWX mini-campaign outputs** (HOME.md template; workspace UX patterns; M-LWX-01/02/03 closed 2026-05-13) | `8673383` skill_node_bootstrap_interview + LWX campaign master + 3 mission AARs | **Add** to Added | New bullets: HOME.md template + 19-question interview skill + workspace UX patterns |
| 2 | **Cross-project routing hook** in `.adna/CLAUDE.md` §Startup Checklist | `e3b3bcc` (M04 S2 2026-05-11) | **Add** to Added | New bullet: cross-project routing hook for node.aDNA-aware forks |
| 3 | **4 `node_operations` skills graduated to `.adna/`** (`skill_inventory_refresh` + `skill_node_credentials_audit` + `skill_node_health_check` + `skill_update_all_vaults`) | `03198f8` (federation_beta_planning M-H.1.5 1b 2026-05-14); +`skill_node_bootstrap_interview` `8673383` from M-LWX-01 — total 5 in `node_operations` category | **Add** to Added | New bullet: 5 node_operations skills (4 graduated + 1 LWX-authored) + AGENTS.md category row |
| 4 | **HOME.md inline `{{TOKEN}}` comment rephrase** (substitution source-bloat fix; lines 40/54/65/104) | `202c9ec` (M-LWX-03 Finding 1 fix 2026-05-12) | **Add** to Fixed | New bullet: HOME.md inline comment rephrase to plain prose |
| 5 | **8 self-test fixtures + hook `--self-test` upgrade + 2 in-session defect fixes** (M05 S2) | `dfced67` (M05 S2 2026-05-18) | **Add** to Added (fixtures) + Fixed (defects) | Two new bullets: self-test fixtures + hook --self-test real validation upgrade; defect fixes for skill path mismatch + R2 secret-pattern POSIX/PCRE quote-class bug |
| 6 | **ADR-010 attribution** (line 62: "M05; per ADR-010") — ratified at M05 S1 (2026-05-18 06:46Z), not M06 | Pre-draft text correct; reverify in-place | **Keep** (no edit needed) | n/a — line 62 attribution is accurate as written |
| 7 | **ADR-009 attribution** (line 45/58/68: "(M07)") — but M07 is partial-absorbed into v8 per 2026-05-17 amendment; ADR-009 was actually ratified during the campaign earlier | ADR-009 frontmatter `status: accepted` at `aDNA.aDNA/what/decisions/adr_009_aDNA_naming_convention.md` (ratified at M03 phase gate per ADR file) | **Edit** | Change "(M07)" to "(ADR-009; per-vault application is v3-EC scope)" on attribution lines 45/68; line 58 ADR-009 mention stays (it's a "Changed" bullet that's accurate) |
| 8 | **`LatticeScope.aDNA` planning campaign seed (M10)** — absorbed into v8 P1 per 2026-05-17 amendment | M10 absorbed; no LatticeScope seed shipped at v7.0 | **Drop** | Remove line 48 (the `LatticeScope.aDNA` bullet); move forward-reference to v8 |
| 9 | **CHANGELOG date placeholder** (`YYYY-MM-DD` line 31) | Fill at tag execution | **Edit** | `YYYY-MM-DD` → `2026-05-18` |
| 10 | **`skill_iii_setup.md` III consumer-onboarding skill** (added to `.adna/` template at III Campaign B MB-6 2026-05-12) | `c32930e` | **Add** to Added | New bullet: `skill_iii_setup.md` for adding `iii/` consumer wrapper to a new vault |
| 11 | **D1 mixed-case canonicalization** (M06 S2 amendment to ADR-006) — URL slug across CHANGELOG references is currently lowercase `adna` | Per ADR-006 amendment 2026-05-18 D1=A; mixed-case `aDNA` is canonical | **Edit** (4 occurrences) | Lines 37, 49, 53, 64, 76 — update `adna` → `aDNA` in URL/slug references; keep lowercase in protocol prose where convention applies (e.g., directory names, frontmatter topics) |

**Total**: 11 candidates (9 from mission spec §Obj 2 + 2 newly surfaced — `skill_iii_setup.md` and D1 mixed-case sweep). Dispositions: 8 Add (new bullets), 3 Edit (in-place), 1 Drop (LatticeScope absorbed), 1 Keep (ADR-010 attribution accurate). All 11 candidates land in the M06 S2 pre-tag commit.

## §2 Newly added bullets (full text — applied to `.adna/CHANGELOG.md`)

### Added (new bullets, alphabetically inside the existing Added section)

- **Cross-project routing hook in `.adna/CLAUDE.md` §Agent Protocol §Startup Checklist** — Step "after #9" addition enabling node.aDNA-aware fork routing. Vault session-start agents check for `node.aDNA/` presence and route through the per-node operational vault before project-specific routing. (M04 S2; commit `e3b3bcc` 2026-05-11)
- **`HOME.md` template** — Workspace-router HOME page with 19+ `{{...}}` placeholder substitution points (vaults_table, hostname, operator, etc.); served by the `skill_node_bootstrap_interview` Step 9 substitution engine. First sandbox-validated artifact under the M-LWX-01 verification matrix (9/9 gates PASS). (M-LWX mini-campaign 2026-05-12 to 2026-05-13; LWX-01 + LWX-02)
- **`skill_node_bootstrap_interview.md`** — 19-question hybrid bootstrap UX skill for `node.aDNA/` first-fork experience (purpose / user-info / stack / hardware / connections; ~4-7 min interview). Fills `MANIFEST.md` + `who/identity/identity_node.yaml` + `what/inventory/inventory_*.yaml` + `CHANGELOG.md` + HOME.md `{{VARS}}` from operator answers. (M-LWX-01; commit `8673383` 2026-05-12)
- **4 graduated `node_operations` skills**: `skill_inventory_refresh.md` + `skill_node_credentials_audit.md` + `skill_node_health_check.md` + `skill_update_all_vaults.md`. Graduated from `node.aDNA@411660e` (v0.1 initial bootstrap) at `campaign_federation_beta_planning` M-H.1.5 1b. Each carries `graduated_from`/`graduated_at`/`graduated_via` provenance frontmatter. Combined with `skill_node_bootstrap_interview.md` (M-LWX-01), the `node_operations` category now ships 5 skills upstream. (Commit `03198f8` 2026-05-14)
- **`skill_iii_setup.md`** — Consumer-onboarding skill for adding an `iii/` wrapper to a new vault (federation_ref schema, `kind:` enum walkthrough, minimal vs full-extension shapes, downstream-safety check). Byte-identical to canonical at `III.aDNA/how/skills/`. Published to `.adna/` at III Campaign B MB-6 2026-05-12, backed by 5 live MB-1..MB-5 wrappers as worked precedents. (Commit `c32930e`)
- **Self-test fixtures for pre-push sanitization hook** — 8 fixtures (3 PASS-path + 5 FAIL-path covering R1 path leakage / R2 secret patterns / R3 filename patterns / R4 large binaries / R5-R7 frontmatter rules). Hook `--self-test` mode upgraded from warn-and-skip stub to real validation logic (PASS 7/7). Verification-as-first-class deliverable (M05 AAR §Conceptual contributions #1). (M05 S2; commit `dfced67` 2026-05-18)

### Fixed (new bullets, alphabetically inside the existing Fixed section)

- **`HOME.md` inline `{{TOKEN}}` comment rephrase** — 4 inline HTML-comment lines (40/54/65/104) rephrased to plain prose so `string.replace()`-based substitution (per `skill_node_bootstrap_interview.md` Step 9) does not naively expand placeholder tokens inside documentation comments. Fixes ~4.9KB of source-bloat in sandbox-rendered HOME.md (12,977 bytes → 8,069 bytes gold parity). End-user view was unchanged (HTML comments are render-invisible); source-time bloat would have inflated git history + agent-context budget on every interview-driven fork. (M-LWX-03 Finding 1 fix; commit `202c9ec` 2026-05-12)
- **Skill path mismatch — 4 v7.0 skills referenced pre-flatten `.adna/how/standard/hooks/...`** — Post-M03-flatten, vaults are siblings of `.adna/` with vault-local hooks at `how/standard/hooks/...`. Fix: skills check canonical sibling path first, fall back to legacy `.adna/how/...` for compatibility. (M05 S2 defect; commit `dfced67`)
- **R2 secret-pattern POSIX/PCRE quote-class bug** — All 7 secret patterns used `[\x27\x22]?` for the optional quote class, but POSIX `grep -E` interprets `\xNN` literally (PCRE-only). Fix: bash ANSI-C `$'\x27\x22'` quote forms. (M05 S2 defect; commit `dfced67`)

## §3 Edits to existing CHANGELOG lines

### Line 31 — date placeholder
- **From**: `## [v7.0] — YYYY-MM-DD`
- **To**: `## [v7.0] — 2026-05-18`

### Line 37 — clone URL (mixed-case canonicalization per D1)
- **From**: `git clone https://github.com/LatticeProtocol/adna.git .adna`
- **To**: `git clone https://github.com/LatticeProtocol/aDNA.git .adna`

### Line 45 — ADR-009 attribution
- **From**: `Renames are operator-discretionary; per-vault application is the v3 successor's scope. (M07)`
- **To**: `Renames are operator-discretionary; per-vault application is the v3-EC successor's scope. (ADR-009; ratified at M03 phase gate)`

### Line 48 — LatticeScope.aDNA seed (DROP)
- **From**: full bullet `**`LatticeScope.aDNA` planning campaign seed**...`
- **To**: *(removed; forward-reference moves to v8 P1 entry)*

### Line 49 — CI workflow URL (mixed-case)
- **From**: `**CI workflow caller-usage URL update** to `LatticeProtocol/adna` (3 reusable workflows). (M03)`
- **To**: `**CI workflow caller-usage URL update** to `LatticeProtocol/aDNA` (3 reusable workflows). (M03)`

### Line 53 — Repo rename target (mixed-case canonical per D1 amendment)
- **From**: `**GitHub repo rename**: `LatticeProtocol/Agentic-DNA` → `LatticeProtocol/adna` (per ADR-006). GitHub URL forwarding preserves existing clones; new clones use the canonical short-name URL.`
- **To**: `**GitHub repo rename**: `LatticeProtocol/Agentic-DNA` → `LatticeProtocol/aDNA` (per ADR-006, amended 2026-05-18 to canonicalize mixed-case form matching realized GitHub state). GitHub URL forwarding preserves existing clones; new clones use the canonical short-name URL. Operators with lowercase remotes may update at their own cadence via `git -C ~/aDNA/.adna remote set-url origin https://github.com/LatticeProtocol/aDNA.git`.`

### Line 68 — ADR-009 attribution
- **From**: `(M07)`
- **To**: `(ADR-009 codified at M03; per-vault application is v3-EC successor scope)`

### Line 76 — CI workflow URL fix (mixed-case)
- **From**: `**CI workflow caller-usage URLs** — `LatticeProtocol/Agentic-DNA/.github/workflows/...@main` → `LatticeProtocol/adna/.github/workflows/...@main` in all three reusable workflows. (M03; per Obj 5 audit §2 W-1)`
- **To**: `**CI workflow caller-usage URLs** — `LatticeProtocol/Agentic-DNA/.github/workflows/...@main` → `LatticeProtocol/aDNA/.github/workflows/...@main` in all three reusable workflows. (M03; per Obj 5 audit §2 W-1)`

### Line 84 — Migration block (link added)
- **From**: `- `upgrade_v6_to_v7.md` (M08a; ships pre-flatten so operators have it before structure breaks).`
- **To**: `- [`upgrade_v6_to_v7.md`](.adna/how/docs/upgrade_v6_to_v7.md) (M08a finalized 2026-05-11; M06 S2 copied to canonical template destination per M08a→M08b fold-in). Ships in v7.0 template so operators have actionable migration steps the moment they pull.`

### Inserted line in "Changed" section — ADR-006 amendment note
- **Inserted (before line 60 Changed→version flip)**: `- **ADR-006 amendment (2026-05-18)**: URL slug canonical form changed from lowercase `adna` to mixed-case `aDNA`. Reflects realized GitHub state at the repo rename + aligns with the `<name>.aDNA/` directory-suffix convention pervasive across the ecosystem. Functionally inert (GitHub URLs route case-insensitively); operators on lowercase remotes may update at their own cadence.`

## §4 Verification

After applying §2 + §3 diffs, the CHANGELOG v7.0 entry must:

1. Have `## [v7.0] — 2026-05-18` on line 31 ✓ (Edit #1)
2. Reference mixed-case `aDNA` URLs in all 4 URL-bearing lines (37, 49, 53, 76) ✓ (Edits #2, #5, #6, #8)
3. Cite ADR-006 amendment in Changed section ✓ (Inserted line)
4. Drop the `LatticeScope.aDNA` seed bullet ✓ (Edit #4)
5. Re-attribute ADR-009 from "(M07)" to ADR-codified-at-M03 phrasing ✓ (Edits #3, #7)
6. Carry 6 new Added bullets ✓ (§2 Added section)
7. Carry 3 new Fixed bullets ✓ (§2 Fixed section)
8. Reference the canonical upgrade-guide path with a working link ✓ (Edit #9)

Each of the 11 candidates discharges to either an Add, Edit, or Drop with traceable rationale in §1. Total CHANGELOG modifications: 11 lines edited + 9 lines inserted + 1 line dropped + ADR-006 amendment note inserted = net ~+50 lines.

## §5 Standing Order discharge

| Standing Order | Discharge |
|---|---|
| **#1 Phase gates are human gates** | Operator authorized M06 S2 entry; this artifact lands as part of S2 work |
| **#5 Every mission gets an AAR** | M06 AAR (Obj 7) records this reconciliation as a deliverable |
| **#6 Archive, never delete** | LatticeScope.aDNA seed bullet *dropped* from v7.0 entry but the M10 absorbed-by-v8 attribution preserves the campaign-history record at v8 P1 entry |
| **#7 Dual-audience test** | Developer reads §1 (resolution table) + §3 (line-level edits); newcomer reads §0 (scope) + §2 (new bullet prose) |
| **#8 Self-reference mandatory** | This artifact IS the audit trail for the policy ADR-011 codifies — every v7.0 CHANGELOG line is now traceable to a campaign artifact, commit, or ADR amendment |
| **#9 Upstream spec is source of truth** | All disposition decisions cite the source: M01 Obj 6 §1 pre-draft + M02-M11 commits + M03/M05/M-LWX AARs + M08a Items Deferred #14 + ADR-006 amendment |
| **#10 Cross-link aggressively** | ≥10 cross-links: 4 ADR references, 4 mission references, 3 commit references, 5 artifact references |

## §6 Companion

- [[../mission_adna_infra_p1_06_v7_governance_tag.md|M06 mission spec]] — §Obj 2 directive sourced this reconciliation
- [[m01_obj6_version_bump_checklist.md|m01_obj6_version_bump_checklist.md]] §1 — the pre-drafted v7.0 entry being reconciled
- [[../../../../what/decisions/adr_006_github_repo_rename_to_adna.md|ADR-006]] — amended 2026-05-18 (M06 S2 D1)
- [[../../../../what/decisions/adr_011_aDNA_semver_discipline.md|ADR-011]] — ratified 2026-05-18 (M06 S2 phase gate)
