---
type: cross_graph_findings_memo
source_campaign: campaign_lattice_workspace_ux
target_campaign: campaign_adna_v2_infrastructure
source_mission: mission_lwx_03_integration_test_and_closeout
source_session: session_stanley_20260513_030626_mlwx03_s1
authored_at: 2026-05-13T03:30:00Z
operator: stanley
status: draft  # finalized at M-LWX-03 S2 close after operator-side O1-O7 results integrate
total_findings: 13
resolved_at_m_lwx_03: 3  # D-F1Fix + D-RouterFix + D-StdADR (ADR-013)
routed_to_v2_m05: 2  # node-skills upstream + skill_inventory_refresh HOME.md regen
routed_to_v2_m07: 4  # spec addendum + 4 small clarifications
routed_to_v3_ec: 2  # schema asymmetry + ecosystem-wide pattern absorption
operator_discretionary: 2  # node.aDNA git checkpoint + Bases dynamic gallery
created: 2026-05-13
updated: 2026-05-13
last_edited_by: agent_stanley
tags: [cross_graph_memo, lattice_workspace_ux_to_v2, findings_routing, m_lwx_03, obj3, fourth_additive_upstream_resolved, adr_013_resolved, route_v2_m05_m07_v3ec, rosetta]
---

# Cross-Graph Findings → v2 Main Campaign (from `campaign_lattice_workspace_ux`)

## §0 — Purpose

This memo synthesizes all findings surfaced during the workspace-UX mini-campaign and routes each one to its appropriate destination: resolved-at-M-LWX-03 (3 items), v2 main-campaign amendment work (6 items, split across M05 and M07), v3-EC successor (2 items), or operator-discretionary backlog (2 items).

Per Standing Order #6 (archive-not-delete), every finding from M-LWX-01 + M-LWX-02 + M-LWX-03 carries forward into this memo with explicit routing — none are dropped silently.

Per the mini-campaign's CLAUDE.md §Standing Orders #6 ("Cross-graph findings → v2 amendment"), this memo lands in **v2's vault** at `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/` (not the mini-campaign's), per ADR-004 (campaign-home stays in `aDNA.aDNA/`).

## §1 — Findings resolved at M-LWX-03 (3 items)

These were forward-routed from M-LWX-01 / M-LWX-02 and resolved this session per the operator decisions D-F1Fix / D-RouterFix / D-StdADR.

### §1.1 — M-LWX-01 Finding 1: HTML-comment substitution source-bloat → RESOLVED via D-F1Fix

**Source**: `aar_mlwx_01_dynamic_bootstrap_interview.md` — naive `string.replace()` substitution into `.adna/HOME.md` expanded `{{TOKEN}}` references inside inline HTML comments (lines 40/54/65/104), adding ~4.9KB of source-bloat to the sandbox HOME.md.

**Resolution**: Upstream commit `202c9ec` to `LatticeProtocol/adna` main (4 insertions / 4 deletions on `.adna/HOME.md` lines 40/54/65/104) rephrases the inline-comment references to plain prose ("the vaults_table placeholder", "the named_projects_table placeholder", etc.) instead of literal `{{TOKEN}}`. **TEMPLATE NOTES block (lines 124-165) unchanged because skill Step 9 strips it entirely.**

**Pattern significance**: **4th instance of the single-commit additive-upstream pattern.** Lineage:
1. ADR-008 airlock template stub (2026-05-11, M03)
2. `e3b3bcc` cross-project routing hook (2026-05-11, M04)
3. `8673383` interview skill + HOME.md template + workspace.default.json fix (2026-05-12, M-LWX-01)
4. **`202c9ec` HOME.md inline-comment rephrase (2026-05-13, M-LWX-03)** ← this resolution

The 4-instance lineage settles the pattern as workspace-canonical: small additive upstream patches via a single commit, no batching, no semantic-version dependency, no breaking changes — appropriate for any cross-campaign finding whose fix is bounded to one or a few files of the `.adna/` template.

**Verification**: post-fix Python sim shows 0 leftover placeholders after substitution + 0 extra substitutions inside non-TEMPLATE-NOTES HTML comments. M-LWX-01 S2 sandbox would now produce a HOME.md within ~100 bytes of the gold reference (vs the previous 4,908-byte bloat).

### §1.2 — M-LWX-01 Finding 4 (carried from S1): Workspace router Step 0.3 procedural-list amendment → RESOLVED via D-RouterFix

**Source**: M-LWX-01 S1 + S2 surfaced that `~/lattice/CLAUDE.md` Step 0.3's "If the operator accepts" 5-step procedural list (lines 28-33) skipped from `skill_inventory_refresh.md` (Step 2) directly to "Set the persona to Hestia" (Step 3) — the new `skill_node_bootstrap_interview.md` (commit `8673383`) was never invoked. The 19 interview questions never ran on a fresh fork.

**Resolution**: Local edit to `~/lattice/CLAUDE.md` Step 0.3: inserted a new Step 3 invoking `skill_node_bootstrap_interview.md` (19-question interview; ~4-7 min); subsequent steps renumbered (Step 3 → 4, Step 4 → 5, Step 5 → 6).

**Scope discipline**: local-only edit (workspace router is not in `.adna/` template — per ADR-007 it's operator-customizable). No upstream propagation needed. Other operators' workspace routers stay at whatever state they're at; this fix benefits this node only. Future workspace router amendments may propagate via `skill_workspace_upgrade.md` (v2 M07 cleanup item).

### §1.3 — M-LWX-02 load-bearing finding: scope-vs-role naming → RESOLVED via D-StdADR (ADR-013)

**Source**: `aar_mlwx_02_node_vault_role_expansion.md` § Conceptual contributions — "scope-based vs role-based naming is a reusable design test for `.aDNA/` vault rename proposals" was the load-bearing finding from M-LWX-02's rejection of the `node.aDNA/` → `home.aDNA/` rename.

**Resolution**: New standard-scope ADR at `aDNA.aDNA/what/decisions/adr_013_workspace_vault_naming_scope_vs_role.md`, `status: accepted`, ratified at this session. Encodes a 4-sub-rule design test (R1 scope check + R2 role check + R3 multi-instance check + R4 migration-cost check) that future operators (or agents under Standing Order #1) consult when a rename proposal surfaces. ADR-001 (node-scope) cited as worked precedent.

**Slot usage**: ADR-013 was the slot reserved at the 2026-05-12 M04b campaign-amendment session for "mini-campaign load-bearing design decisions." This memo confirms the slot was used as forecast.

## §2 — Findings routed forward (10 items)

| # | Source | Finding | Proposed change | Impact class | Recommended mission | Notes |
|---|--------|---------|------------------|--------------|----------------------|-------|
| **F-1** | M-LWX-01 #3 | `{{node_hostname}}` substitution semantics — `hostname -s` may return long-form on some platforms; interview Step 9 should canonicalize | Amend `skill_node_bootstrap_interview.md` Step 9 to canonicalize `{{node_hostname}}` (strip `.local`/`.lan` TLDs; lowercase optional via operator U1 confirm) | clarification | **v2 M05** | Bundle with the publish-skill family rewrite touching `.adna/how/skills/` |
| **F-2** | M-LWX-01 #4 + Obj 1 F-Obj1-2 | Node-skills + `what/inventory/` directory not in `.adna/` upstream | Upstream the 4 node-skills (`skill_inventory_refresh.md` / `skill_node_health_check.md` / `skill_update_all_vaults.md` / `skill_node_credentials_audit.md`) to `.adna/how/skills/` AND create `.adna/what/inventory/.gitkeep` + `.adna/who/identity/.gitkeep` placeholders | template-modification | **v2 M05** | Highest-impact route-forward; closes the bootstrap chain self-sufficiency gap. Could be a 5th additive-upstream pattern instance OR folded into M05's publish-skill rewrite |
| **F-3** | M-LWX-01 #2 | Identity-file create-vs-pre-exist asymmetry — `skill_node_bootstrap_interview.md` Steps 4+7 implicitly CREATE `identity_*.yaml`; spec doesn't call out "create-if-not-exist" semantics | Add explicit "create-if-not-exist" semantics to skill Steps 4+7; OR have `skill_project_fork.md` pre-create empty identity scaffolds (matches inventory pattern) | clarification | **v2 M05** | Bundle with F-2 if node-skills upstream lands; otherwise standalone skill spec amendment |
| **F-4** | Obj 1 F-Obj1-1 | M04 audit baseline schema is a SUBSET of interview-driven schema (5 of 19 interview-question outputs not in M04's hardcoded bootstrap) | Document in v3-EC M01-EC's per-vault audit rubric: post-M-LWX-01 forks have richer identity_node.yaml than pre-M-LWX-01 forks. Add migration helper if cross-fork schema parity matters | clarification | **v3-EC M01-EC** | EXPECTED gap (validates M04b's design); not a regression — just a noted divergence for the ecosystem audit |
| **F-5** | Obj 2 F-Obj2-1 + F-Obj2-3 | M04b Obj 3 §6 8-test list assumes outer-vault model; 4 tests N/A + 1 deferred + 2 new dimensions M-LWX-02 added (O4, O7) | Add a `## §6.5 — Option C addendum` to `m04b_obj3_lattice_obsidian_vault_spec.md` referencing M-LWX-02 ADR-001 + M-LWX-03 Obj 2 results + the 6-check Option-C-adapted test surface | template-modification | **v2 M07** | Preserves original 8-test list (Standing Order #6 archive-not-delete) + adds Option-C-adapted mapping. Single-file edit; M07 cleanup scope |
| **F-6** | M-LWX-02 #1 + Obj 2 F-Obj2-2 | `skill_inventory_refresh.md` does NOT regenerate HOME.md tables when `inventory_vaults.yaml` changes | Amend `skill_inventory_refresh.md` to detect `node.aDNA/HOME.md` presence + re-run Step 9 substitution (12 vars + 4 table generators); ~20-line skill addition | template-modification | **v2 M05** | Bundles with F-2 if node-skills upstream; otherwise lives at `node.aDNA/how/skills/` only |
| **F-7** | M-LWX-02 #2 | `skill_project_fork.md` upstream gap — `workspace.default.json` `Home.md` reference didn't match fork contents (silent dangling reference pre-M-LWX-01-fix) | Add fork-time validation step to `skill_project_fork.md`: scan `.obsidian/workspace.default.json` for file-references that don't exist post-fork; strip them OR rewrite to valid paths | clarification | **v2 M07** | M-LWX-01 commit `8673383` partially fixed by updating workspace.default.json to use `HOME.md` (uppercase); F-7 generalizes the discipline to any future template addition |
| **F-8** | M-LWX-02 #4 | Pattern absorption: HOME.md + workspace.default.json default-open pattern may apply to other Org-Vaults (`science_stanley.aDNA`, `wga.aDNA`, `context_commons.aDNA`, `lattice-labs/`) | Evaluate per-vault during v3-EC M01-EC audit; apply pattern where it adds operator-UX value; preserve scope-based naming per ADR-013 (do NOT rename any Org-Vault to a role-name) | template-modification | **v3-EC M01-EC** | Bounded scope — operator-discretionary per-vault. ADR-013 governs the rename question if any operator proposes one during application |
| **F-9** | M-LWX-02 #3 | Bases dynamic gallery wiring — schema couldn't be validated without launching Obsidian; M-LWX-02 used static markdown tables as fallback | Defer indefinitely; revisit if Obsidian releases Bases schema docs OR operator-side O1-O7 (S2) surfaces a Bases need | operator-discretionary | **backlog** | No action needed unless O1-O7 surfaces Bases requirement |
| **F-10** | M-LWX-02 #5 | node.aDNA git checkpoint — local-only; no remote per Standing Rule 5 | Operator commits `node.aDNA/` changes when ready (e.g., `git -C node.aDNA add . && git -C node.aDNA commit -m "v0.2 + M-LWX-03 close"`); no agent action | operator-discretionary | **operator** | Reminder only; M-LWX-02's role-expansion changes are already at HEAD `1032d8d` |

## §3 — Proposed v2 main campaign amendment text

### §3.1 — v2 campaign master amendment (for v2 M05 + M07 row notes)

**Insert into `campaign_adna_v2_infrastructure.md` Amendments table** (at M-LWX-03 close in S2):

```markdown
| 2026-05-13 | mini-campaign | M-LWX-03 close + cross-graph findings memo +
upstream commit `202c9ec` (4th additive-upstream pattern instance) + ADR-013
(standard-scope vault naming rule) + 10 routed findings: 4 → M05 (F-1 / F-2 /
F-3 / F-6 — node-skills upstream + skill_inventory_refresh HOME.md regen +
hostname canonicalization + identity-file create-semantics) · 2 → M07 (F-5
spec addendum + F-7 fork validation) · 2 → v3-EC M01-EC (F-4 schema asymmetry
+ F-8 pattern absorption) · 2 → operator-discretionary backlog (F-9 Bases +
F-10 node.aDNA git checkpoint). |
```

### §3.2 — v2 M05 (publish-skill family rewrite) — scope additions

When M05 opens at v2's discretion (post-mini-campaign close, soft-gate clears), add these to M05's spec at first-execution-session:

- **M05 scope addition 1 (F-2)**: upstream the 4 node-skills to `.adna/how/skills/` (or design a `skill_node_skills_install.md` if M05 prefers indirection). Closes the bootstrap chain self-sufficiency gap (workspace router Step 0.3 chain documentation now fully executable on a vanilla fork).
- **M05 scope addition 2 (F-1)**: amend `skill_node_bootstrap_interview.md` Step 9 to canonicalize `{{node_hostname}}` (strip `.local`/`.lan` TLDs; lowercase optional via operator U1 confirm).
- **M05 scope addition 3 (F-3)**: add explicit "create-if-not-exist" semantics to interview skill Steps 4+7 OR have `skill_project_fork.md` pre-create empty identity scaffolds.
- **M05 scope addition 4 (F-6)**: amend `skill_inventory_refresh.md` to regenerate HOME.md tables on inventory change.

Total M05 scope delta: ~4 small skill additions + 4 small skill amendments. Estimated effort impact: +0.5 to +1 session in M05's 3-session base estimate (no scope blowup).

### §3.3 — v2 M07 (review/simplify) — scope additions

- **M07 scope addition 1 (F-5)**: append `## §6.5 — Option C addendum` to `m04b_obj3_lattice_obsidian_vault_spec.md`; preserve original 8-test list.
- **M07 scope addition 2 (F-7)**: add fork-time `.obsidian/workspace.default.json` validation step to `skill_project_fork.md`.

Total M07 scope delta: 2 small documentation/skill edits. Negligible effort impact.

### §3.4 — v3-EC M01-EC (per-vault audit) — scope inheritance

- **v3-EC M01-EC scope addition (F-4 + F-8)**: per-vault audit rubric extension — apply ADR-013 R1-R4 sub-tests + check for HOME.md + workspace.default.json default-open pattern absorption suitability + document any post-M-LWX-01 schema-richness vs pre-M-LWX-01 audit-baseline gap.

## §4 — Pattern lineage update

The mini-campaign contributed three lineage points worth carrying forward to v2 (and beyond):

### §4.1 — Single-commit additive-upstream pattern (now 4 instances)

The pattern settles. Future instances follow the same recipe — bounded scope, single commit, descriptive message, no batching, no version-bump implication. M05's F-2 (node-skills upstream) is the natural 5th-instance candidate if it lands as a single commit.

### §4.2 — Plan-mode-first / execution-second discipline (mini-campaign-wide)

M-LWX-02 (operator override rejected the rename via plan-mode analysis) + M-LWX-01 (clean S1/S2 split with operator approval at S2 entry) + M-LWX-03 (4 operator-decision AskUserQuestions at S1 entry; D-S1Scope=B 2-session split for AAR quality) all confirm: plan-mode first surfaces operator decisions BEFORE destructive ops; reduces re-work; honors Standing Order #1 (phase gates are human gates).

### §4.3 — Mirror-this-node verification fidelity

Both M-LWX-01 S2 and M-LWX-03 Obj 1 used "mirror-this-node" sandbox methodology (copy operator's actual values into sandbox; structural diff against working example) instead of synthetic fixtures. Result: stronger fidelity signal, faster verification, fewer false positives. Pattern reusable for any template-bearing skill with a deployed working example. Document candidate for `aDNA.aDNA/what/patterns/` (Pattern: "Production-comparison smoke testing") — M07 absorbs if appropriate.

## §5 — Cross-references

| Reference | Role |
|---|---|
| `mlwx_01_obj5_smoke_results.md` (M-LWX-01) | Finding 1 source (HTML-comment bloat) |
| `aar_mlwx_01_dynamic_bootstrap_interview.md` | M-LWX-01 § Items deferred |
| `mlwx_02_obj6_smoke_results.md` (M-LWX-02) | 7 deferred operator-side checks (O1-O7) source |
| `aar_mlwx_02_node_vault_role_expansion.md` | M-LWX-02 § Items deferred + load-bearing finding |
| `node.aDNA/what/decisions/adr_001_node_vault_role_expansion.md` | Node-scope rename rejection (worked precedent) |
| `aDNA.aDNA/what/decisions/adr_013_workspace_vault_naming_scope_vs_role.md` | Standard-scope ADR ratified this session (D-StdADR=A) |
| `mlwx_03_obj1_refork_test_results.md` | F-Obj1-1 / F-Obj1-2 / F-Obj1-3 source |
| `mlwx_03_obj2_outer_vault_test_results.md` | F-Obj2-1 / F-Obj2-2 / F-Obj2-3 source |
| `LatticeProtocol/adna` `202c9ec` | 4th additive-upstream pattern instance — D-F1Fix resolution |
| `~/lattice/CLAUDE.md` Step 0.3 (lines 28-34 post-D-RouterFix) | Local workspace router amendment — D-RouterFix resolution |
| `aDNA.aDNA/how/campaigns/campaign_adna_v3_ecosystem_compliance/campaign_adna_v3_ecosystem_compliance.md` | v3-EC successor — consumes F-4 + F-8 |
| `/Users/stanley/.claude/plans/please-read-the-claude-md-shiny-cherny.md` | M-LWX-03 plan with D-StdADR / D-F1Fix / D-RouterFix / D-S1Scope resolutions |

## §6 — Status

**Memo status**: `draft` at S1 close (this session). Finalized at S2 close after operator-side O1-O7 results integrate (any new findings from operator-side Obsidian smoke get appended to §2). Cross-references frozen at S2 close.

**v2 main-campaign amendment lands at S2** alongside this memo: campaign master amendments table updated (per §3.1) + STATE.md Last Session block + Next Session Prompt rewritten for v2 M05 opening (mini-campaign closeout releases the soft-gate). M-LWX-03 mission + side-campaign master flip to `completed` at S2 close.
