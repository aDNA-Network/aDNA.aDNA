---
type: mission
mission_id: mission_lwx_01_dynamic_bootstrap_interview
campaign: campaign_lattice_workspace_ux
campaign_phase: 1
status: in_progress
mission_class: implementation
created: 2026-05-12
updated: 2026-05-12
last_edited_by: agent_stanley
opens_at: mini_campaign_open  # operator-gated; opens when v2 M04b is closed AND operator authorizes mini-campaign open
opens_session: session_stanley_20260512_231909_mlwx01_s1  # first-execution-session; opened 2026-05-12T23:19:09Z
spec_completeness: full  # full Read/Produce blocks authored at S1 open per M02 / M04 / M04b / M-LWX-02 first-execution-session pattern (was stub at planning; spec amended 2026-05-12T22:40Z+ to add HOME.md template + workspace.default.json upstream)
estimated_sessions: "2-3"  # S1 upstream skill authoring + HOME.md template + workspace.default.json update (non-destructive) + S2 upstream commit + workspace router 1-line update + integration smoke on a re-fork + AAR. Estimate unchanged after scope amendment — additional ~2 files (HOME.md template + workspace.default.json) are small additions composed with the interview skill's existing scope.
prerequisite_missions: []  # M04b close (parent gate) is mini-campaign open prerequisite; no intra-mini-campaign blockers
prerequisite_artifacts:
  - m04b_obj2_skill_node_bootstrap_interview_spec.md  # the 19-question spec this mission implements verbatim
  - aar_mlwx_02_node_vault_role_expansion.md  # M-LWX-02 AAR — establishes the role-expansion pattern this mission upstreams as a template; load-bearing finding (scope-based naming) carries forward
  - "node.aDNA/HOME.md"  # working example to template-extract from (specific hostname/operator/inventory values get {{VARS}}; structure stays)
  - "node.aDNA/.obsidian/workspace.default.json"  # working example for the HOME.md file reference + workspace layout
prerequisite_adrs:
  - adr_009_aDNA_naming_convention  # naming check still applies (interview never re-asks `node` is valid)
  - "node.aDNA/what/decisions/adr_001_node_vault_role_expansion.md"  # node-scope ADR documenting why role expansion is additive (template upstream version may want a parallel standard-scope ADR; decide at M-LWX-01 S1)
ships_to: mission_lwx_03_integration_test_and_closeout
parallel_eligible_with: mission_lwx_02_lattice_obsidian_vault  # independent — M-LWX-01 upstream, M-LWX-02 local; no shared files. M-LWX-02 is CLOSED as of 2026-05-12T22:35Z+; this prerequisite is satisfied.
d5_disposition: upstream  # skill_node_bootstrap_interview.md → .adna/how/skills/; HOME.md template → .adna/HOME.md (NEW per scope amendment); .adna/.obsidian/workspace.default.json update (NEW per scope amendment); 1-line workspace-router prompt update at ~/lattice/CLAUDE.md (technically local but trivial)
scope_amendment_2026_05_12:
  rationale: "M-LWX-02 close architectural review (operator-led at session_stanley_20260512_221833_mlwx02_s1) identified gap: M-LWX-02 outputs (HOME.md + workspace.default.json HOME.md ref + role-expansion pattern) landed only in this node's vault. For future node.aDNA forks on other machines (or other operators on this machine) to inherit the role-expanded UX, the template parts need to be upstreamed. M-LWX-01 is the natural carrier — it's already the upstream-bound mission of this mini-campaign and its single-commit additive pattern (ADR-008 + e3b3bcc precedent) accommodates the additional template files cleanly."
  added_scope:
    - "Author HOME.md template at .adna/HOME.md with {{VARS}}: {{node_hostname}} / {{operator}} / {{machine_class}} / {{persona}} / {{workspace_root}} / {{vault_count}} / {{named_project_count}} / {{drift_count}} / generated tables for vaults + named_projects + drift (regenerable from inventory_vaults.yaml)"
    - "Update .adna/.obsidian/workspace.default.json to reference HOME.md (was Home.md; dangling reference, surfaced as upstream gap in M-LWX-02 AAR Items deferred #4)"
    - "Bootstrap interview skill substitutes HOME.md template vars at fork time; if inventory_vaults.yaml is empty (new operator hasn't installed any vaults yet) the gallery shows only this new node.aDNA vault and adds a Next Steps section pointing at skill_project_fork.md"
    - "Optional: parallel standard-scope ADR in aDNA.aDNA/what/decisions/ documenting the role-expansion pattern (vs node-scope ADR-001 which is specific to this node). Decide at M-LWX-01 S1 — defer if M-LWX-01 scope already large."
  deliverable_delta: "Adds 2 upstream files (.adna/HOME.md template + .adna/.obsidian/workspace.default.json edit). M-LWX-01 deliverable count: 6 → 8. Estimated sessions unchanged (2-3)."
tags: [mission, planned, lwx_01, dynamic_bootstrap, interview, hestia, upstream_commit, skill_authoring, hybrid_d1_b, m_lwx_01, stub, scope_amended_2026_05_12, home_md_template, workspace_default_json_fix]
---

# Mission M-LWX-01 — Dynamic `node.aDNA/` Bootstrap Interview Implementation

**Phase**: P1 — Implementation. M-LWX-01 implements the 19-question interview skill
spec authored at v2 M04b Obj 2 ([[../../campaign_adna_v2_infrastructure/missions/artifacts/m04b_obj2_skill_node_bootstrap_interview_spec.md|`m04b_obj2_skill_node_bootstrap_interview_spec.md`]]).
The skill ships **upstream** to `.adna/how/skills/skill_node_bootstrap_interview.md`
so every future fork inherits the interview capability; one trivial update to the
workspace router Step 0.3 prompt completes the wireup.

**Class**: implementation. Pattern precedent: ADR-008 airlock-template-stub
(single-commit additive upstream change at M03 S2 B7); cross-project routing hook
`e3b3bcc` (single-commit additive upstream change at M04 S2 Obj 6). M-LWX-01 is the
third instance of the pattern.

---

## Strategic Intent

The interview skill closes the 7 strict gaps + 2 overlay gaps surfaced by v2 M04b
Obj 1's gap analysis ([[../../campaign_adna_v2_infrastructure/missions/artifacts/m04b_obj1_dynamic_ux_gap_analysis.md|gap analysis]]),
turning the M04 static bootstrap UX into the **hybrid interview-driven UX** the M04
AAR noted was the intended target. After M-LWX-01 ships, a fresh operator running
`claude` for the first time in `~/lattice/` — with `.adna/` template at v7.0+
HEAD — gets the workspace router Step 0.3 prompt; if they accept bootstrap,
`skill_node_bootstrap_interview.md` runs and elicits 19 operator-specific values
across purpose / user-info / stack / hardware / connections.

---

## Hard constraints

- **Spec-faithful implementation**: M-LWX-01 implements [[../../campaign_adna_v2_infrastructure/missions/artifacts/m04b_obj2_skill_node_bootstrap_interview_spec.md|Obj 2 spec]] verbatim — 19 questions across 5 topics + composition contract + output schema + Hestia voice register. No new questions, no removed questions without explicit operator approval.
- **Single upstream commit** to `LatticeProtocol/adna` adding `.adna/how/skills/skill_node_bootstrap_interview.md` + 1 entry in `.adna/how/skills/AGENTS.md` skill index. Pattern: ADR-008 + `e3b3bcc` precedent.
- **One-line workspace router update**: `~/lattice/CLAUDE.md` Step 0.3 prompt — replace static "Would you like me to bootstrap one now via `skill_project_fork`?" with interview-aware "Would you like me to bootstrap one now? I'll ask 19 quick questions (4-7 min)…". No other workspace-router edits.
- **No M04 output mutation**: `node.aDNA/` at git HEAD `411660e` stays untouched; M04 AAR + audit + spec unchanged. The interview skill does not re-bootstrap; it operates on *future* forks (or operator-discretionary re-runs).
- **No partner-vault touches**.
- **No M04b output mutation** (gap analysis + interview spec + Obsidian spec are read-only references).
- **D5 = upstream** (explicit per artifact): `skill_node_bootstrap_interview.md` lands in `.adna/how/skills/` (upstream); workspace router prompt update lands at `~/lattice/CLAUDE.md` (workspace-local, trivial 1-line change).

---

## Objectives (full Read/Produce blocks — authored at S1 open 2026-05-12T23:19:09Z)

### Obj 1 — Author `skill_node_bootstrap_interview.md` per Obj 2 spec ✅ S1

**Read**:
- `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m04b_obj2_skill_node_bootstrap_interview_spec.md` (verbatim source)
- `.adna/how/skills/AGENTS.md` (skills protocol — required frontmatter + structure)
- `.adna/how/skills/skill_project_fork.md` (upstream composition partner)
- `.adna/how/skills/skill_workspace_upgrade.md` (formatting precedent — agent-class skill)

**Produce**: `.adna/how/skills/skill_node_bootstrap_interview.md` (NEW; 197 lines). Frontmatter (`type: skill`, `skill_type: agent`, `category: onboarding`, exit codes, related skills); Trigger; Read; Produce (output schema mapping 19 answers to 8 surfaces); 12-step procedure; 19-question table across 5 topics; Exit codes 0/2/3/4; Composition contract; Hestia voice register; D1=b hybrid discipline statement; Self-reference.

**Done**: ✅ S1; landed at commit `8673383` (LatticeProtocol/adna).

### Obj 2 — Update `.adna/how/skills/AGENTS.md` skill index ✅ S1

**Read**: existing AGENTS.md (no formal skill-index table; closest structure is §Naming Convention Examples list at lines 70-81).

**Produce**: 1-line append to §Naming Convention Examples list with `skill_node_bootstrap_interview.md` (agent) + brief trigger description matching workspace router Step 0.3 invocation.

**Done**: ✅ S1; landed at commit `8673383`.

### Obj 2.5 (scope amendment 2026-05-12T22:40Z+) — Author `.adna/HOME.md` template ✅ S1

**Read**: `node.aDNA/HOME.md` (M-LWX-02 working example; template-extraction source).

**Produce**: `.adna/HOME.md` (NEW; 165 lines). Template with 8 primary `{{VARS}}` (`{{node_hostname}}`, `{{operator}}`, `{{machine_class}}`, `{{persona}}`, `{{workspace_root}}`, `{{vault_count}}`, `{{named_project_count}}`, `{{drift_count}}`) + auxiliary vars (`{{persona_lower}}`, `{{operator_lower}}`, `{{last_inventory_refresh}}`, `{{interview_date}}`) + table generators (`{{vaults_table}}`, `{{named_projects_table}}`, `{{drift_table}}`) + `{{next_steps_section}}` for empty-inventory case. Substitution logic lives in `skill_node_bootstrap_interview.md` Step 9; template stays declarative.

**Done**: ✅ S1; landed at commit `8673383`.

### Obj 2.6 (scope amendment 2026-05-12T22:40Z+) — Fix `.adna/.obsidian/workspace.default.json` ✅ S1

**Read**: existing `.adna/.obsidian/workspace.default.json` (file ref `Home.md` at lines 17 + 23 title + 158 lastOpenFiles — dangling reference per M-LWX-02 AAR Items deferred #4).

**Produce**: 3-point fix: `"file": "Home.md"` → `"HOME.md"` (line 17); `"title": "Home"` → `"HOME"` (line 23); `"lastOpenFiles": ["Home.md"]` → `["HOME.md"]` (line 158). Matches the M-LWX-02 working example pattern.

**Done**: ✅ S1; landed at commit `8673383`.

### Obj 3 — Update workspace router Step 0.3 prompt (1-line) ✅ S1

**Read**: `~/lattice/CLAUDE.md` Step 0.3 §"If `node.aDNA/` is missing" block (line 24).

**Produce**: 1-line surgical change replacing the trailing question + parenthetical: "Would you like me to bootstrap one now via `skill_project_fork`? (It takes about 30 seconds and won't affect your existing projects.)" → "Would you like me to bootstrap one now? I'll ask 19 quick questions (4-7 min) to fill in operator-specific fields, then auto-detect the rest." **No other workspace-router edits** per mission constraint.

**Done**: ✅ S1; workspace-local edit (not in any git repo — `~/lattice/` itself is not a repo). Verified via `grep -A 2 "Step 0.3"`.

**Finding (deferred to M-LWX-03)**: the Step 0.3 procedural list (lines 28-33 of `~/lattice/CLAUDE.md`) routes through `skill_project_fork → skill_inventory_refresh → persona → STATE.md → git init` without invoking `skill_node_bootstrap_interview.md`. The new prompt mentions the interview, but the procedural list does not yet invoke it. M-LWX-03 sandbox re-fork smoke will catch this; resolution becomes a small procedural-list amendment (3-line addition between current Step 2 and Step 3).

### Obj 4 — Single upstream commit to LatticeProtocol/adna ✅ S1

**Read**: staged file list; pattern precedents (ADR-008 airlock-template-stub single-commit upstream; M04 S2 `e3b3bcc` cross-project routing hook single-commit upstream).

**Produce**: single commit `8673383` to `LatticeProtocol/adna` origin/main covering 4 files (`HOME.md` + `how/skills/skill_node_bootstrap_interview.md` + `how/skills/AGENTS.md` + `.obsidian/workspace.default.json`); 366 insertions, 3 deletions. Commit message references mission + spec + pattern precedents + session. Push successful (remote redirected from `adna` → `aDNA` per ADR-006 — graceful redirect; no manual remote URL update needed).

**Done**: ✅ S1; 3rd instance of single-commit additive upstream pattern.

### Obj 5 — Integration smoke: sandbox re-fork test (S2)

**Read** (at S2 open): `~/lattice/.adna/` HEAD (`8673383`); the new skill + HOME.md template + workspace.default.json updates.

**Produce** (at S2):
- Clean sandbox path `/tmp/sandbox_lwx_01/`
- Simulate fresh `claude` invocation: trigger Step 0.3 (manually since procedural list integration is deferred) → fork → inventory_refresh → run new interview skill against empty fork → verify all 19 answers land in correct target files per output schema
- Verify HOME.md `{{VARS}}` substitution: 8 primary vars + 4 table generators
- Verify `workspace.default.json` opens `HOME.md` on Obsidian launch (operator-side check OK if skipped)
- Produce `missions/artifacts/mlwx_01_obj5_smoke_results.md` with PASS/FAIL per check
- **Do NOT** re-run on `~/lattice/node.aDNA/` (would mutate M04 audit baseline)

### Obj 6 — Lightweight 5-line AAR + mission close (S2 or S3)

**Read** (at S2 close): all S1+S2 outputs.

**Produce** (at S2 close): `missions/artifacts/aar_mlwx_01_dynamic_bootstrap_interview.md` (lightweight 5-line AAR per `template_aar_lightweight.md`): Worked / Didn't / Finding / Change / Follow-up. Mission file `status: in_progress → completed`. Campaign master M-LWX-01 row flipped to completed. STATE.md Next Session Prompt names M-LWX-03 (integration test + cross-graph findings) as next-to-open.

---

## Deliverables forecast (post 2026-05-12 scope amendment)

| # | Deliverable | Path | Session | Origin |
|---|---|---|---|---|
| 1 | `skill_node_bootstrap_interview.md` (new skill) | `~/lattice/.adna/how/skills/skill_node_bootstrap_interview.md` | S1 | original M04b Obj 2 |
| 2 | `.adna/how/skills/AGENTS.md` skill-index update | `~/lattice/.adna/how/skills/AGENTS.md` | S1 | original M04b Obj 2 |
| 3 | **`HOME.md` template (NEW per 2026-05-12 scope amendment)** | `~/lattice/.adna/HOME.md` | S1 | from M-LWX-02 working example (template-extract; replace specific values with `{{VARS}}`) |
| 4 | **`.adna/.obsidian/workspace.default.json` update (NEW per amendment)** | `~/lattice/.adna/.obsidian/workspace.default.json` | S1 | from M-LWX-02 working example (file ref `Home.md` → `HOME.md`; addresses M-LWX-02 AAR Items deferred #4) |
| 5 | Workspace router Step 0.3 prompt update (1 line) | `~/lattice/CLAUDE.md` | S1 | original M04b Obj 2 |
| 6 | Upstream commit to `LatticeProtocol/adna` (now covers 4 files: skill + AGENTS + HOME.md + workspace.default.json) | git commit hash recorded in M-LWX-01 AAR | S1 or S2 | original + amendment |
| 7 | Integration smoke results | `missions/artifacts/mlwx_01_obj5_smoke_results.md` | S2 | original |
| 8 | M-LWX-01 AAR | `missions/artifacts/aar_mlwx_01_dynamic_bootstrap_interview.md` | S2 or S3 | original |

**Total: 8 deliverables** (was 6 pre-amendment; +2 for HOME.md template + workspace.default.json update). Estimated 2-3 sessions unchanged — the additional 2 files are small and compose naturally with the interview skill's existing scope.

---

## Acceptance criteria (forecast — full table at mission open; post-amendment)

- [ ] `skill_node_bootstrap_interview.md` authored per Obj 2 spec (19 questions × 5 topics; Hestia voice register; composition contract honored; exit codes 0/2/3/4)
- [ ] Skill substitutes HOME.md template `{{VARS}}` at fork time using inventory_vaults.yaml + interview answers (new per amendment)
- [ ] Skill index updated in `.adna/how/skills/AGENTS.md`
- [ ] `.adna/HOME.md` template authored with `{{VARS}}` covering hostname/operator/machine_class/persona/workspace_root/vault_count/named_project_count/drift_count + table generators for vaults/named_projects/drift (new per amendment)
- [ ] `.adna/.obsidian/workspace.default.json` file ref `Home.md` → `HOME.md` (new per amendment; addresses M-LWX-02 AAR Items deferred #4)
- [ ] Workspace router Step 0.3 prompt updated (1 line)
- [ ] Single upstream commit to `LatticeProtocol/adna` (4 files: skill + AGENTS + HOME.md template + workspace.default.json)
- [ ] Integration smoke: 19/19 answers land in correct target files + HOME.md renders post-fork with substituted vars + workspace.default.json opens HOME.md on first launch
- [ ] M-LWX-01 AAR landed (lightweight 5-line)
- [ ] Mission file `status: in_progress → completed`
- [ ] Side-campaign master M-LWX-01 row flipped to `completed`
- [ ] No mutation of M04 / M04b / M-LWX-02 outputs / partner vaults / non-target `.adna/` files / existing `node.aDNA/` directly (template additions only; this node's vault has the working example, not the template)

---

## Status

**S1 in_progress (mostly complete; 6 of 8 deliverables landed).** S1 opened 2026-05-12T23:19:09Z at `session_stanley_20260512_231909_mlwx01_s1`. Upstream commit `8673383` to `LatticeProtocol/adna` lands the 4 upstream files (skill + AGENTS + HOME.md template + workspace.default.json fix); workspace-local 1-line prompt edit at `~/lattice/CLAUDE.md`. Obj 5 (integration smoke) + Obj 6 (AAR + close) deferred to S2.

**Deliverables status (6 of 8 ✅, 2 pending S2)**:

| # | Deliverable | Status | Reference |
|---|---|---|---|
| 1 | `skill_node_bootstrap_interview.md` (new skill, 197 lines) | ✅ S1 | commit `8673383` |
| 2 | `.adna/how/skills/AGENTS.md` skill-index update | ✅ S1 | commit `8673383` |
| 3 | `.adna/HOME.md` template (165 lines; 8 primary `{{VARS}}` + 4 table generators) | ✅ S1 | commit `8673383` |
| 4 | `.adna/.obsidian/workspace.default.json` fix (3 refs: file/title/lastOpenFiles) | ✅ S1 | commit `8673383` |
| 5 | Workspace router Step 0.3 prompt update (1-line) | ✅ S1 | `~/lattice/CLAUDE.md` (workspace-local; not in any repo) |
| 6 | Single upstream commit to `LatticeProtocol/adna` | ✅ S1 | commit `8673383` pushed to origin/main 2026-05-12T23:23:27Z |
| 7 | Integration smoke results | ⏳ S2 | `missions/artifacts/mlwx_01_obj5_smoke_results.md` |
| 8 | M-LWX-01 AAR (lightweight 5-line) | ⏳ S2 | `missions/artifacts/aar_mlwx_01_dynamic_bootstrap_interview.md` |

**Acceptance criteria status (S1 scope)**:

- ✅ `skill_node_bootstrap_interview.md` authored per Obj 2 spec (19 questions × 5 topics; Hestia voice; composition contract; exit codes 0/2/3/4)
- ⏳ Skill substitutes HOME.md template `{{VARS}}` at fork time (substitution logic spec'd in Step 9; verification at Obj 5 smoke)
- ✅ Skill index updated in `.adna/how/skills/AGENTS.md`
- ✅ `.adna/HOME.md` template authored with `{{VARS}}` (12 vars: 8 primary + 4 table generators + auxiliary)
- ✅ `.adna/.obsidian/workspace.default.json` `Home.md` → `HOME.md` (3 refs)
- ✅ Workspace router Step 0.3 prompt updated (1 line)
- ✅ Single upstream commit to `LatticeProtocol/adna` (4 files; 366 insertions; commit `8673383`)
- ⏳ Integration smoke (S2 / Obj 5)
- ⏳ M-LWX-01 AAR (S2 / Obj 6)
- ⏳ Mission file `status: in_progress → completed` (at Obj 6)
- ⏳ Campaign master M-LWX-01 row flipped to `completed` (at Obj 6)
- ✅ No mutation of M04 / M04b / M-LWX-02 outputs / partner vaults / non-target `.adna/` files / existing `node.aDNA/` directly (template additions only; this node's vault is the working example, not the template)

**Findings surfaced for M-LWX-03 (or follow-up)**:

1. **Workspace router procedural list gap**: Step 0.3 prompt now mentions the interview, but the procedural list at `~/lattice/CLAUDE.md` lines 28-33 still routes through `skill_project_fork → skill_inventory_refresh → persona → STATE.md → git init` without invoking `skill_node_bootstrap_interview.md` between auto-detect and persona. Mission spec's "1-line, no other edits" constraint was honored at S1; sandbox re-fork smoke (Obj 5) will catch this. Resolution is a small 3-line procedural-list addition; lands at M-LWX-03 cross-graph findings memo or as a separate follow-up commit.

2. **`hostname` substitution semantics**: HOME.md template uses `{{node_hostname}}`. Current convention on this node uses `Mac` (short, friendly). `hostname -s` may return something different (e.g., `MacBook-Pro.local`). The skill Step 9 substitutes from `hostname -s` by default; operator U1-style override pattern from the interview could extend to hostname if it becomes an issue. Note for Obj 5 smoke design.
