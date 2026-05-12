---
type: mission
mission_id: mission_lwx_01_dynamic_bootstrap_interview
campaign: campaign_lattice_workspace_ux
campaign_phase: 1
status: planned
mission_class: implementation
created: 2026-05-12
updated: 2026-05-12
last_edited_by: agent_stanley
opens_at: mini_campaign_open  # operator-gated; opens when v2 M04b is closed AND operator authorizes mini-campaign open
opens_session: TBD  # first execution session ID; populated at mission open
spec_completeness: stub  # bare-bones authored at v2 M04b S1 Obj 4 2026-05-12; full Read/Produce blocks authored at first-execution-session per M02 / M04 / M04b first-execution-session pattern
estimated_sessions: "2-3"  # S1 upstream skill authoring (non-destructive) + S2 upstream commit + workspace router 1-line update + integration smoke on a re-fork + AAR
prerequisite_missions: []  # M04b close (parent gate) is mini-campaign open prerequisite; no intra-mini-campaign blockers
prerequisite_artifacts:
  - m04b_obj2_skill_node_bootstrap_interview_spec.md  # the 19-question spec this mission implements verbatim
prerequisite_adrs:
  - adr_009_aDNA_naming_convention  # naming check still applies (interview never re-asks `node` is valid)
ships_to: mission_lwx_03_integration_test_and_closeout
parallel_eligible_with: mission_lwx_02_lattice_obsidian_vault  # independent — M-LWX-01 upstream, M-LWX-02 local; no shared files
d5_disposition: upstream  # skill_node_bootstrap_interview.md → .adna/how/skills/; 1-line workspace-router prompt update at ~/lattice/CLAUDE.md (technically local but trivial)
external_dependencies:
  - LatticeProtocol/adna upstream repo (target of skill addition commit)
  - ~/lattice/.adna/how/skills/ (target path in working clone of template)
  - ~/lattice/CLAUDE.md workspace router Step 0.3 (1-line prompt update)
tags: [mission, planned, lwx_01, dynamic_bootstrap, interview, hestia, upstream_commit, skill_authoring, hybrid_d1_b, m_lwx_01, stub]
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

## Objectives (skeleton — full Read/Produce blocks authored at mission open)

### Obj 1 — Author `skill_node_bootstrap_interview.md` per Obj 2 spec

Read the spec; produce a full-form agent skill at `~/lattice/.adna/how/skills/skill_node_bootstrap_interview.md` with frontmatter + Trigger + Read + Produce + Steps + Exit codes per the skills protocol (`how/skills/AGENTS.md`). 19 questions in 5 topics; Hestia voice register; composition contract with `skill_project_fork.md` + `skill_inventory_refresh.md` + `skill_node_health_check.md`.

### Obj 2 — Update `.adna/how/skills/AGENTS.md` skill index

Add the new skill to the index table with trigger description matching the workspace router Step 0.3 invocation.

### Obj 3 — Update workspace router Step 0.3 prompt (1-line change)

Replace the static prompt at `~/lattice/CLAUDE.md` Step 0.3 with the interview-aware version. Verify the change with `grep -A 2 "Step 0.3"`.

### Obj 4 — Upstream commit to LatticeProtocol/adna

Stage the 2 upstream changes (new skill + AGENTS.md update); single commit with message "v7.x: add skill_node_bootstrap_interview (hybrid bootstrap UX per campaign_lattice_workspace_ux M-LWX-01)". Push to origin/main.

### Obj 5 — Integration smoke: re-fork test

On a clean sandbox path (`/tmp/sandbox_lwx_01/`), simulate a fresh `claude` invocation: trigger Step 0.3 → run new interview skill against an empty fork → verify all 19 answers land in the 6 target files per the output schema. Do NOT re-run on `~/lattice/node.aDNA/` (would mutate M04 output).

### Obj 6 — AAR + mission close

Lightweight 5-line AAR + status flips + STATE.md update for next mission opening (M-LWX-02 if not already done, or M-LWX-03 if both implementation missions are complete).

---

## Deliverables forecast

| # | Deliverable | Path | Session |
|---|---|---|---|
| 1 | `skill_node_bootstrap_interview.md` (new skill) | `~/lattice/.adna/how/skills/skill_node_bootstrap_interview.md` | S1 |
| 2 | `.adna/how/skills/AGENTS.md` skill-index update | `~/lattice/.adna/how/skills/AGENTS.md` | S1 |
| 3 | Workspace router Step 0.3 prompt update (1 line) | `~/lattice/CLAUDE.md` | S1 |
| 4 | Upstream commit to `LatticeProtocol/adna` | git commit hash recorded in M-LWX-01 AAR | S1 or S2 |
| 5 | Integration smoke results | `missions/artifacts/mlwx_01_obj5_smoke_results.md` | S2 |
| 6 | M-LWX-01 AAR | `missions/artifacts/aar_mlwx_01_dynamic_bootstrap_interview.md` | S2 or S3 |

**Total: 6 deliverables.** Estimated 2-3 sessions (S1 = skill + AGENTS + router + commit; S2 = smoke; S3 only if needed for AAR + close after a pause).

---

## Acceptance criteria (forecast — full table at mission open)

- [ ] `skill_node_bootstrap_interview.md` authored per Obj 2 spec (19 questions × 5 topics; Hestia voice register; composition contract honored; exit codes 0/2/3/4)
- [ ] Skill index updated in `.adna/how/skills/AGENTS.md`
- [ ] Workspace router Step 0.3 prompt updated (1 line)
- [ ] Single upstream commit to `LatticeProtocol/adna`
- [ ] Integration smoke 19/19 answers land in correct target files
- [ ] M-LWX-01 AAR landed (lightweight 5-line)
- [ ] Mission file `status: in_progress → completed`
- [ ] Side-campaign master M-LWX-01 row flipped to `completed`
- [ ] No mutation of M04 / M04b outputs / partner vaults / non-skill `.adna/` files / `node.aDNA/` directly

---

## Status

**Mission planned. Stub authored 2026-05-12 by v2 M04b S1 Obj 4.** Opens at operator
discretion after mini-campaign opens (mini-campaign open is itself operator-gated post
v2 M04b close). Parallel-eligible with M-LWX-02 (independent scopes — upstream vs. local).
