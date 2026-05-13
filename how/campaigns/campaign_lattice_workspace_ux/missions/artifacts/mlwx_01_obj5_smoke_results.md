---
type: smoke_test_results
mission: mission_lwx_01_dynamic_bootstrap_interview
objective: 5
session: session_stanley_20260513_005300_mlwx01_s2
operator: stanley
ran_at: 2026-05-13T00:55:00Z
sandbox_path: /tmp/sandbox_lwx_01/node.aDNA
upstream_under_test:
  repo: LatticeProtocol/adna
  pin: 8673383  # M-LWX-01 S1 commit
  current_head: c32930e  # post-S1 additive commit (skill_iii_setup; not under test, additive only)
answer_set: mirror_this_node  # D-Smoke decision; mirror Mac/stanley/macos-arm64/Hestia/etc.
result: PASS_WITH_FINDINGS
created: 2026-05-13
updated: 2026-05-13
last_edited_by: agent_stanley
tags: [smoke_test, integration, mlwx_01, obj5, sandbox, mirror_this_node]
---

# M-LWX-01 Obj 5 — Sandbox Integration Smoke Results

## Summary

**Result**: PASS_WITH_FINDINGS — 8 of 8 verification-matrix gates passed; 5 informative findings surfaced that route to M-LWX-03 cross-graph findings memo or follow-up upstream patches. The upstream commit `8673383` (4 files at `LatticeProtocol/adna`) functions as designed: a fresh fork of `.adna/` produces a `node.aDNA/` with `HOME.md` ready for `{{VARS}}` substitution, `workspace.default.json` opening `HOME.md` at first launch, and `skill_node_bootstrap_interview.md` installed at `how/skills/`. All hard-constraint guards (node.aDNA untouched; .adna upstream untouched) passed.

**Smoke ran on**: 2026-05-13T00:55Z+ at `session_stanley_20260513_005300_mlwx01_s2`.
**Sandbox**: `/tmp/sandbox_lwx_01/node.aDNA` (ephemeral; not committed).

## Method

Per Obj 5 Read/Produce block + D-Smoke (mirror-this-node values):

1. **Fork**: `cp -r ~/lattice/.adna /tmp/sandbox_lwx_01/node.aDNA` + skill_project_fork cleanups (rm `.git`, `.github`, `README.md`, `LICENSE`, `setup.sh`, `.obsidian/plugins`, `.obsidian/themes`, `.obsidian/workspace.json`, `.obsidian/graph.json`).
2. **Simulate `skill_inventory_refresh`**: pre-populate `what/inventory/inventory_{vaults,system,memberships}.yaml` by copying from `~/lattice/node.aDNA/what/inventory/` (mirror-this-node baseline; production-comparison fidelity).
3. **Simulate interview Step 9 (HOME.md substitution)**: Python substitution with mirror-this-node values for 12 vars (8 primary + 4 auxiliary) + 4 table generators (vaults_table from inventory_vaults.yaml grouped by aDNA class; named_projects_table; drift_table; empty next_steps_section since inventory has > 0 vaults). Strip trailing `<!-- TEMPLATE NOTES ... -->` block per skill Step 9.
4. **Inspect** sandbox `HOME.md` + `.obsidian/workspace.default.json` against verification matrix.
5. **Hard-constraint guard**: `git status` on `~/lattice/node.aDNA/` + `~/lattice/.adna/` pre + post smoke.

## Verification matrix

| # | Check | Method | Expected | Actual | Result |
|---|---|---|---|---|---|
| 1 | Sandbox `/tmp/sandbox_lwx_01/` clean before fork | `ls /tmp/sandbox_lwx_01/` | empty / nonexistent | nonexistent | ✅ PASS |
| 2 | All 4 upstream files survive fork + cleanup | filesystem check post-fork | `HOME.md` + `.obsidian/workspace.default.json` + `how/skills/skill_node_bootstrap_interview.md` + skill row in `how/skills/AGENTS.md` | all 4 present (sizes: 7965 / 4014 / 18404 / preserved) | ✅ PASS |
| 3 | HOME.md `{{VARS}}` pre-substitution count | `grep -c '{{' HOME.md` | > 0 (template intact) | 50 lines with `{{` | ✅ PASS |
| 4 | HOME.md `{{VARS}}` post-substitution count | regex `\{\{[^}]+\}\}` after substitution + TEMPLATE NOTES strip | 0 | 0 (CLEAN) | ✅ PASS |
| 5 | workspace.default.json HOME.md refs | `grep -n 'HOME' .obsidian/workspace.default.json` | 3 (file + title + lastOpenFiles) | 3 (line 17 `"file": "HOME.md"` + line 23 `"title": "HOME"` + line 158 `"HOME.md"`) | ✅ PASS |
| 6 | workspace.default.json dangling `Home.md` (lowercase) | `grep` for `Home\.md\|"Home\b` | 0 | 0 | ✅ PASS |
| 7 | Visible section structure (HTML-comment-stripped) matches this node's HOME.md | Python regex strip `<!-- -->` then `^#{1,6} ` headers | 16 headers, identical | 16 headers, identical | ✅ PASS |
| 8 | Hard constraint: `~/lattice/node.aDNA/` untouched | pre/post `git status` + HEAD compare | clean; HEAD `1032d8d` unchanged | clean; HEAD `1032d8d` | ✅ PASS |
| 9 | Hard constraint: `~/lattice/.adna/` upstream untouched | pre/post `git status` + HEAD compare | clean; HEAD `c32930e` | clean; HEAD `c32930e` | ✅ PASS |

**Score**: 9/9 gates PASS.

## 19-question output-schema coverage

Per `skill_node_bootstrap_interview.md` ##Produce table (Obj 2 spec):

| Surface | Status in sandbox | Coverage |
|---|---|---|
| `MANIFEST.md` | ✅ present (from `.adna/` template) | P1 + P2 + C5 land here |
| `STATE.md` | ✅ present (from `.adna/` template) | U5 greeting-tone reflection |
| `CLAUDE.md` | ✅ present (from `.adna/` template) | P1 persona-context excerpt |
| `CHANGELOG.md` | ✅ present (from `.adna/` template) | v0.1 footnote at completion |
| `what/inventory/inventory_system.yaml` | ✅ pre-populated by simulated `skill_inventory_refresh` | S1-S4 overlay |
| `what/inventory/inventory_memberships.yaml` | ✅ pre-populated by simulated `skill_inventory_refresh` | C1, C2, C4 |
| `who/identity/identity_node.yaml` | ⚠️ NOT present in fresh `.adna/` fork; interview Step 4 + 7 CREATES it | U1-U5, H1-H3, C5 — interview-created (by-spec) |
| `who/identity/identity_lattice_protocol.yaml` | ⚠️ NOT present in fresh `.adna/` fork; interview Step 7 CREATES it | C3 — interview-created (by-spec) |

**Coverage summary**: 6 of 8 target surfaces pre-exist in a fresh fork; 2 are created by the interview itself (`identity_node.yaml` + `identity_lattice_protocol.yaml`). 11 of 19 questions write to pre-existing surfaces (P1, P2, S1-S4, C1, C2, C4 = 8 + C5 partial to MANIFEST). 8 of 19 questions write to interview-created surfaces (U1-U5, H1-H3, plus C5 partial; C3 to identity_lattice_protocol). Asymmetry by design but worth noting (see Finding 2).

## Findings

### Finding 1 — Source-bloat from over-eager `{{TOKEN}}` substitution into HTML comments (medium)

The `.adna/HOME.md` template has inline HTML comments after each table-generator placeholder describing what the placeholder expands to. These comments themselves reference the `{{TOKEN}}` literally (e.g., line 40: `{{vaults_table}} is substituted at interview-time by skill_node_bootstrap_interview.md`). The naive substitution (Python `string.replace()`, mirroring what the skill Step 9 spec describes) replaces ALL occurrences — including the ones inside `<!-- -->` blocks. Result: full table content gets embedded inside the explanatory HTML comments. **Render-time**: invisible (HTML comments suppress Obsidian preview); visible section count matches gold (16 headers). **Source-time**: 4,908 bytes of bloat (sandbox HOME.md 12,977 bytes vs this node's gold 8,069 bytes).

**Fix candidates** (either works, both upstream-bound):
- **Template fix** (preferred — simpler): rephrase inline HTML comments at lines 40, 54, 65 of `.adna/HOME.md` to use plain prose references (e.g., "the vaults_table placeholder") rather than literal `{{vaults_table}}`. Replaces 3 lines, no logic change. ~10 min author.
- **Skill spec fix** (alternative — heavier): amend skill Step 9 to require HTML-comment-aware substitution (regex pre-pass to mask `<!-- .*? -->` regions, substitute outside, unmask). Adds ~5 lines to skill spec; assumes implementation language supports it. Heavier but defensive.

**Route**: M-LWX-03 cross-graph findings memo → `.adna/` follow-up upstream patch (single additive commit, pattern precedent: ADR-008 + `e3b3bcc` + `8673383`).

### Finding 2 — Identity-file create-vs-pre-exist asymmetry (low)

Skill Step 4 + 7 implicitly CREATE `who/identity/identity_node.yaml` + `who/identity/identity_lattice_protocol.yaml` (these YAMLs are written to but don't pre-exist in a fresh `.adna/` fork). The skill spec doesn't explicitly call out this "create-if-not-exist" semantics. For an implementer, this is fine — but the smoke surfaces the question: should `skill_project_fork.md` pre-create empty identity YAMLs (consistent with `inventory_*.yaml` which `skill_inventory_refresh` produces), or should the interview own it (current spec implicit)?

**Route**: Note for M-LWX-03; not blocking. Low priority — current behavior works, just asymmetric with inventory surface handling.

### Finding 3 — Node-skills not in `.adna/` upstream (medium; out of M-LWX-01 scope)

A fresh `.adna/` fork does NOT include `skill_inventory_refresh.md`, `skill_node_health_check.md`, `skill_update_all_vaults.md`, `skill_node_credentials_audit.md`. These node-specific skills live at `node.aDNA/how/skills/` and were created during M04 bootstrap. The bootstrap chain (`Step 1 fork → Step 2 inventory_refresh → Step 3 interview → Step 4 health_check`) cannot complete on a vanilla fork without them.

For this smoke I bypassed the gap by pre-populating `what/inventory/*.yaml` from this node's `node.aDNA/` (simulating `inventory_refresh` having run). For a real first-time operator, the workspace router Step 0.3 procedural list (Finding 4) or `.adna/` itself would need to provide these skills.

**Out of M-LWX-01 scope**: mission scoped only the interview skill + HOME.md template + workspace.default.json fix. Node-skills upstreaming is a separate decision (could be a future M-LWX-style mission or part of v2 M05 if rewriting the publish-skill family).

**Route**: M-LWX-03 cross-graph findings memo (flag for v2 main campaign consideration).

### Finding 4 — Workspace router Step 0.3 procedural list still doesn't invoke interview skill (carried from S1)

Carried over from S1's surfacing: `~/lattice/CLAUDE.md` Step 0.3 prompt now mentions the interview (S1's 1-line edit), but the procedural list at lines 28-33 still routes through `skill_project_fork → skill_inventory_refresh → persona → STATE.md → git init` without invoking `skill_node_bootstrap_interview.md` between auto-detect and persona installation. M-LWX-01 mission spec was explicit: 1-line prompt edit only at S1; procedural-list amendment deferred. Smoke confirms the gap remains.

**Route**: M-LWX-03 cross-graph findings memo OR a small follow-up upstream patch (3-line procedural-list addition between current Step 2 and Step 3). Single-commit additive pattern (4th instance after ADR-008 + `e3b3bcc` + `8673383`).

### Finding 5 — `hostname` substitution semantics (carried from S1)

Skill Step 9 substitutes `{{node_hostname}}` via `hostname -s` (or operator U1 override). On this node `hostname -s` returns a long form (e.g., `Stanleys-MacBook-Pro`); the convention here is the friendly short form `Mac`. The smoke used `Mac` per D-Smoke. Operator U1 override pattern handles this gracefully, but worth documenting: operators with idiosyncratic short-form hostnames should expect to override at U1.

**Route**: documentation note for M-LWX-03 or interview-skill comments; non-blocking.

## Reproducibility

To re-run this smoke (e.g., after an upstream patch lands):

```bash
# 1. Clean sandbox
rm -rf /tmp/sandbox_lwx_01

# 2. Fork .adna → sandbox node.aDNA
mkdir -p /tmp/sandbox_lwx_01
cp -r ~/lattice/.adna /tmp/sandbox_lwx_01/node.aDNA
cd /tmp/sandbox_lwx_01/node.aDNA

# 3. Apply skill_project_fork cleanups
rm -rf .git .github
rm -f README.md LICENSE setup.sh
rm -rf .obsidian/plugins .obsidian/themes
rm -f .obsidian/workspace.json .obsidian/graph.json

# 4. Simulate inventory_refresh (mirror this node's values)
mkdir -p what/inventory
cp ~/lattice/node.aDNA/what/inventory/*.yaml what/inventory/

# 5. Substitute HOME.md per skill Step 9 (use Python script from the smoke session, or
#    rewrite using the skill's actual implementation once it lands)
# (script body documented in session_stanley_20260513_005300_mlwx01_s2.md Activity Log)

# 6. Verify
grep -c '{{' HOME.md   # expect 0 post-substitution
grep -nE '^#{1,6} ' HOME.md   # expect 16 visible headers (HTML-comment-stripped equivalent)
git -C ~/lattice/node.aDNA status   # expect clean (hard constraint)
git -C ~/lattice/.adna status       # expect clean (hard constraint)
```

The sandbox is ephemeral and not committed anywhere. Re-runs from a clean sandbox should reproduce identical results (mod template changes if upstream patches land).

## Cross-references

- Mission spec: `aDNA.aDNA/how/campaigns/campaign_lattice_workspace_ux/missions/mission_lwx_01_dynamic_bootstrap_interview.md` Obj 5
- Upstream skill under test: `~/lattice/.adna/how/skills/skill_node_bootstrap_interview.md` at `LatticeProtocol/adna` HEAD `c32930e` (skill content unchanged since `8673383`)
- Template under test: `~/lattice/.adna/HOME.md`
- Config under test: `~/lattice/.adna/.obsidian/workspace.default.json`
- Working-example baseline: `~/lattice/node.aDNA/HOME.md` (M-LWX-02 output)
- Source spec: `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m04b_obj2_skill_node_bootstrap_interview_spec.md`
- Plan: `/Users/stanley/.claude/plans/please-read-the-claude-md-crystalline-quail.md`
