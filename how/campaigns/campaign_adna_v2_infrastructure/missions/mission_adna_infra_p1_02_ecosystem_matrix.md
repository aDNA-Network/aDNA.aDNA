---
type: mission
mission_id: mission_adna_infra_p1_02_ecosystem_matrix
campaign: campaign_adna_v2_infrastructure
campaign_phase: 1
status: planned
mission_class: execution
created: 2026-05-08
updated: 2026-05-08
last_edited_by: agent_stanley
opened_at: P0_to_P1_phase_gate_review
opened_session: session_stanley_20260509_013646_adna_v2_p0_p1_gate_review
spec_completeness: stub  # full spec to be authored at M02's first execution session
estimated_sessions: 1-2  # baseline; recalibrated at first execution session per token-protocol findings (M09 not yet run)
prerequisite_missions:
  - mission_adna_infra_planning_01  # M01 produced the matrix; M02 validates and locks it
prerequisite_adrs:
  - adr_004_campaign_home_stays_in_adna_adna  # accepted
  - adr_005_three_way_vault_boundary  # accepted
  - adr_006_github_repo_rename_to_adna  # accepted at P0 → P1 gate
  - adr_007_outer_adna_claude_md_disposition  # accepted at P0 → P1 gate
  - adr_009_aDNA_naming_convention  # accepted at P0 → P1 gate
ships_to: mission_adna_infra_p1_08a_upgrade_guide_and_coord_memos  # M08a consumes M02 output
tags: [mission, planned, stub, adna, infrastructure, ecosystem_matrix, execution, p1, m02, v2_0]
---

# Mission — M02: Ecosystem Compatibility Matrix (Execution)

> **Stub spec** opened at the P0 → P1 phase-gate review session 2026-05-08
> ([[../../../STATE.md|STATE.md]] Last Session block).
> **Full spec to be authored at M02's first execution session** — read M01 Obj 0 + Obj 1
> outputs first, recalibrate scope against current ecosystem state, then expand the
> Objectives section below into full Read/Produce blocks per the M01 mission template.

**Phase**: P1 — Ecosystem mapping + upgrade guide ships first + repo flatten + node vault.
**Class**: execution. Deliverable is a validated ecosystem baseline + per-vault buckets
ready for M08a coord-memo authoring.

---

## Strategic Intent

M01 Obj 0 produced the [[artifacts/m01_obj0_ecosystem_matrix.md|first ecosystem matrix]] —
a 19-vault inventory with 5×4 compatibility grid, external-operators expansion, and
verbatim spot-check log. That matrix was authored 2026-05-08 in a planning context;
M02 is the **validation + lock** mission that converts it into the operational baseline
M08a (upgrade guide + per-vault coord memos) consumes.

The mission is intentionally narrow. M02 does not redesign anything; it confirms the
matrix is current, audits any drift since M01 close, identifies new vaults that may have
appeared, and produces a locked baseline artifact (`m02_obj_ecosystem_baseline_locked.md`)
that M08a treats as authoritative.

If M02's validation surfaces material drift (e.g., a new vault, a change to remote
configuration, a publish-skill copy that wasn't on the M01 list), the mission either
(a) updates the baseline locally and proceeds, or (b) escalates to a Stage-3-style
amendment session against M01 if the drift invalidates downstream assumptions. The
default expectation is (a) — small drift adjustments — based on the M01 Obj 0 verbatim
spot-check discipline.

---

## Hard constraints

- **No vault renames**. M02 is read-only across the ecosystem; it confirms state, does
  not change it. ADR-009 application to existing vaults is v3 successor scope.
- **External-operator respect**. Where M02's audit touches partner-affiliated vaults
  (Wilhelm Foundation × 2, TAPP, Super League), the audit reads only what's in the local
  workspace; no outbound communication to partners until M08a authoring begins.
- **Deliverable parity with M01 inputs**. M02's locked baseline must preserve every
  column M01 Obj 0 produced (operator class, remote state, publish-skill presence,
  airlock-eligibility, naming-convention conformance) so M08a's per-vault coord memo
  template renders correctly.

---

## Objectives (stub — expand at first execution session)

### Obj 1 — Re-inventory the ecosystem

Verify the 19-vault baseline from M01 Obj 0 is still current. Run `ls /Users/stanley/lattice/`
and cross-reference against the matrix's vault list. Identify any new `.aDNA/` directories
created since 2026-05-08; confirm no vaults were renamed or removed. **Read**: M01 Obj 0
matrix; current `lattice/CLAUDE.md` Project Discovery table. **Produce**: drift-delta note.

### Obj 2 — Per-vault remote-state validation

For each of the 19 vaults, confirm the remote-configuration bucket assigned in M01 Obj 0
(none / proper-origin / non-standard-local-path / hyphen-flat / suffix-flat-CamelCase).
Spot-check 3-4 vaults beyond the M01 verbatim sample for confirmation. **Read**: per-vault
`.git/config`; M01 Obj 0 §5 spot-check log. **Produce**: confirmed bucket assignments;
flag any drift.

### Obj 3 — Per-vault publish-skill presence audit

Confirm the M01 Obj 0 inventory of which vaults carry copies of `skill_lattice_publish.md`
(or other template skills). Spot-check 2-3 additional vaults to verify completeness.
**Read**: per-vault `how/skills/` directory listings. **Produce**: confirmed skill-copy
inventory; flag any drift.

### Obj 4 — External-operator readiness check

For Wilhelm Foundation (RareArchive + WilhelmAI vaults), TAPP (strategic_interface_protocol
JV), and Super League (SuperLeague engagement), confirm the contact-channel and
operator-class assignments from M01 Obj 0 §3 are still current. **Read**: most-recent
coord memos in each affected vault's `who/coordination/`; campaign-master partner
references. **Produce**: external-operator-channel readiness note (no outbound contact).

### Obj 5 — Locked baseline artifact

Synthesize Obj 1-4 outputs into a single locked-baseline artifact
`m02_obj_ecosystem_baseline_locked.md` that M08a treats as authoritative input. The
artifact preserves every column from M01 Obj 0 and adds a "validated 2026-05-08" or
later validation date per row. **Produce**: the locked-baseline artifact;
update-or-create cross-references from M01 Obj 0 forward.

### Obj 6 — Mission close + AAR + handoff

Per Standing Order #5 (mandatory AAR before mission status `completed`), produce
`aar_m02_ecosystem_matrix.md` (lightweight format). Update campaign master M02 row
status `planned (stub)` → `completed`. Hand off to M08a — first M08a session opens
with the locked baseline as primary input.

---

## Inputs from M01

| Input | Source artifact | Use |
|---|---|---|
| 19-vault inventory | `artifacts/m01_obj0_ecosystem_matrix.md` | Obj 1 baseline |
| 5×4 compatibility matrix | same | Obj 5 column structure preserved |
| External-operators expansion | same §3 | Obj 4 input |
| Verbatim spot-check log | same §5 | Obj 2-3 spot-check baseline |
| 14-skill inventory | `artifacts/m01_obj1_current_state.md` | Obj 3 reference |
| Naming-convention conformance assessment | `artifacts/m01_obj0_ecosystem_matrix.md` + ADR-009 | Obj 5 column |

---

## Deliverables (stub — expand at first execution session)

Estimated 5-7 deliverables across Obj 1-6. Authored as the first execution session
expands this stub.

---

## Acceptance criteria (stub)

- All 19 vaults validated as still-current (or drift documented)
- Per-vault remote-state bucket confirmed for all 19
- Per-vault publish-skill presence confirmed
- External-operator channels confirmed ready
- `m02_obj_ecosystem_baseline_locked.md` produced and cross-referenced
- AAR landed; campaign master M02 row flipped to `completed`

---

## Cross-references

- [[../campaign_adna_v2_infrastructure.md|Campaign master]] — mission tree; M02 row
- [[mission_adna_infra_planning_01.md|M01 mission spec]] — predecessor (closed)
- [[artifacts/m01_obj0_ecosystem_matrix.md|M01 Obj 0 ecosystem matrix]] — primary input
- [[artifacts/m01_obj1_current_state.md|M01 Obj 1 current-state inventory]] — secondary input
- [[artifacts/aar_m01_planning.md|M01 AAR]] — context for what M01 produced
- [[../../../what/decisions/adr_009_aDNA_naming_convention.md|ADR-009]] — naming convention authority for column assignments
- [[../../../STATE.md|STATE.md]] — operational snapshot

## Status

**Stub opened** at the P0 → P1 phase-gate review session 2026-05-08
(`session_stanley_20260509_013646_adna_v2_p0_p1_gate_review`). Full spec to be authored
at M02's first execution session — fresh agent reading this file should: (1) re-read M01
Obj 0 + Obj 1 outputs; (2) verify ecosystem state hasn't drifted; (3) expand the
Objectives section above into full Read/Produce blocks; (4) populate Deliverables and
Acceptance criteria sections; (5) begin Obj 1 execution.
