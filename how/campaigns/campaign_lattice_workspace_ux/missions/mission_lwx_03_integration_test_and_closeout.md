---
type: mission
mission_id: mission_lwx_03_integration_test_and_closeout
campaign: campaign_lattice_workspace_ux
campaign_phase: 2
status: in_progress
mission_class: verification_and_closeout
created: 2026-05-12
updated: 2026-05-13
last_edited_by: agent_stanley
opens_at: phase_1_close  # opens after M-LWX-01 AND M-LWX-02 both close
opens_session: session_stanley_20260513_030626_mlwx03_s1
opened_at: 2026-05-13T03:06:26Z
spec_completeness: stub  # full Read/Produce blocks deferred to S2 close (D-S1Scope=B); stub + plan file drives execution
estimated_sessions: "2"  # confirmed at S1 entry per D-S1Scope=B
operator_decisions_resolved:
  D-StdADR: A  # author ADR-013
  D-F1Fix: A  # include 4th additive-upstream patch
  D-RouterFix: A  # apply Step 0.3 amendment
  D-S1Scope: B  # 2 sessions
prerequisite_missions:
  - mission_lwx_01_dynamic_bootstrap_interview  # must be completed
  - mission_lwx_02_lattice_obsidian_vault  # must be completed
prerequisite_artifacts:
  - m04b_obj1_dynamic_ux_gap_analysis.md
  - m04b_obj2_skill_node_bootstrap_interview_spec.md
  - m04b_obj3_lattice_obsidian_vault_spec.md
  - aar_mlwx_01_dynamic_bootstrap_interview.md  # produced at M-LWX-01 close
  - aar_mlwx_02_lattice_obsidian_vault.md  # produced at M-LWX-02 close
ships_to: campaign_close
d5_disposition: mixed  # test results local; cross-graph findings memo lives in v2's aDNA.aDNA/; potential upstream amendments to .adna/ template if findings warrant
external_dependencies:
  - Stanley's MacBook Pro (L1) as canonical clinician-MBP-template (operator-confirmed at v2 RareHarness MP2-2c precedent for "Stanley's L1 = canonical template")
  - ~/lattice/ + ~/lattice/node.aDNA/ + ~/lattice/.obsidian/ (live system under test)
  - Obsidian app (live UI test)
tags: [mission, planned, lwx_03, integration_test, verification, aar, cross_graph_findings, m_lwx_03, stub, phase_2]
---

# Mission M-LWX-03 — Integration Test + AAR + Cross-Graph Findings → v2 Main Campaign

**Phase**: P2 — Integration & closeout. M-LWX-03 validates the end-to-end workspace UX
on Stanley's L1 (this node) as the canonical reference run, captures findings,
produces the mini-campaign AAR, and integrates findings back into v2 main campaign as
amendment entries +/or `.adna/` template upstream commits where warranted.

**Class**: verification + closeout. Pattern precedent: M03 V/R harness (verification
gate before mission close) + every mission's AAR step + RareHarness MP2-2c integration
test pattern (Stanley's L1 as canonical clinician-MBP-template).

---

## Strategic Intent

After M-LWX-01 + M-LWX-02 close, the workspace UX is **theoretically complete** —
dynamic bootstrap interview ships upstream, Obsidian-vault setup lives at `~/lattice/`.
M-LWX-03 verifies the loop end-to-end:

1. **Re-fork test (M-LWX-01 path)**: in a clean sandbox, run workspace router Step 0.3 → interview-skill → verify 19 answers land correctly in 6 target files. This validates the upstream commit shipped a working skill, not just a syntactically valid one.
2. **Outer-vault test (M-LWX-02 path)**: open `~/lattice/` in Obsidian on this Mac; verify the 8 integration tests from Obj 3 §6 PASS (outer vault opens cleanly, inner `.aDNA/` excluded, Bases gallery renders OR markdown fallback active, marketplace link works, sub-vault opening works, `.obsidianignore` enforces, HOME.md regenerates on inventory_refresh, Step 0.5 fires on fresh sessions).
3. **Cross-graph findings**: any insight discovered during the integration run that should change v2 main campaign content (e.g., update to M01 Obj 3 design, amendment to ADR-009, new skill in `.adna/`) is captured as a v2 amendment memo. v2 M07 (general repo review + simplify) absorbs them.

The integration test uses Stanley's L1 (this MacBook Pro) as the **canonical
reference** — matches the precedent from RareHarness MP2-2c where Stanley's L1 vault
was ratified as the canonical clinician-MBP template. When the workspace UX works on
Stanley's L1, it ships; subsequent operators re-run the bootstrap + Obsidian setup on
their own L1s and inherit a proven runbook.

---

## Hard constraints

- **No M-LWX-01 / M-LWX-02 output mutation**: those artifacts stay frozen at their close states; M-LWX-03 only verifies + reports.
- **Sandbox isolation for re-fork test**: M-LWX-01 path test happens in `/tmp/sandbox_lwx_03_refork/` (NOT in `~/lattice/node.aDNA/` which would mutate M04 output).
- **No interview re-run on `~/lattice/node.aDNA/`**: M04's bootstrap is the audit baseline; M-LWX-03 doesn't re-bootstrap the production vault. If the interview reveals it would have set different values, those become *findings* (captured in cross-graph memo), not mutations.
- **No partner-vault touches**.
- **8 integration tests from Obj 3 §6 are mandatory**: outer vault opens · inner excluded · Bases renders · marketplace link · sub-vault opening · .obsidianignore enforces · HOME.md regenerates · Step 0.5 fires.
- **Cross-graph findings memo lands at `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/`**: per ADR-004 (campaign-home stays in aDNA.aDNA), v2 amendments go to v2's vault, not to this mini-campaign's.
- **Campaign AAR mandatory** before flipping `campaign_lattice_workspace_ux.md` `status: planned → completed`.
- **No M05 opening from this mission**: v2 M05 is v2's responsibility; after M-LWX-03 close, the operator authorizes M05 from v2's mission tree.

---

## Objectives (skeleton — full Read/Produce blocks authored at mission open)

### Obj 1 — Re-fork integration test (M-LWX-01 path)

In `/tmp/sandbox_lwx_03_refork/`: empty workspace, `.adna/` template at v7.x+ HEAD. Trigger workspace router Step 0.3 → `skill_project_fork.md` → `skill_inventory_refresh.md` → `skill_node_bootstrap_interview.md`. Verify 19 answers land in correct target files; exit code 0; vault healthy per `skill_node_health_check.md`.

Output: `missions/artifacts/mlwx_03_obj1_refork_test_results.md`.

### Obj 2 — Outer-vault 8 integration tests (M-LWX-02 path)

Open `~/lattice/` in Obsidian. Run each of the 8 tests from Obj 3 §6 sequentially. Capture PASS/FAIL + screenshots or text evidence for each. Any FAIL gates the AAR (corrective patch + re-test required).

Output: `missions/artifacts/mlwx_03_obj2_outer_vault_test_results.md`.

### Obj 3 — Cross-graph findings memo

Any finding from Obj 1 + Obj 2 + cumulative insights from M-LWX-01 + M-LWX-02 AARs that should change v2 main campaign content (M01 Obj 3 design tightening, ADR amendments, new template-level skills). Each finding has: source / proposed-change / impact-class (cosmetic / clarification / template-modification / new-decision) / recommended-mission (v2 M07 absorb / v3-EC carry / new amendment session).

Output: `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/cross_graph_findings_to_v2_from_lattice_workspace_ux.md`.

### Obj 4 — Mini-campaign AAR

Lightweight 5-line AAR + 4-category extended findings (Successful patterns / Surprises and friction / Conceptual contributions / Items deferred) at the campaign level — not per-mission (M-LWX-01 + M-LWX-02 each have their own).

Output: `missions/artifacts/aar_campaign_lattice_workspace_ux.md`.

### Obj 5 — Status flips + STATE.md flip back to v2

Flip M-LWX-03 mission `status: in_progress → completed`. Flip side-campaign master `campaign_lattice_workspace_ux.md` `status: planned → completed`; `phase: -1 → completed`. Update v2 STATE.md Next Session Prompt to v2 M05 opening (mini-campaign close releases v2 M05 from soft-block).

---

## Deliverables forecast

| # | Deliverable | Path | Session |
|---|---|---|---|
| 1 | Re-fork integration test results | `missions/artifacts/mlwx_03_obj1_refork_test_results.md` | S1 |
| 2 | Outer-vault 8 integration test results | `missions/artifacts/mlwx_03_obj2_outer_vault_test_results.md` | S1 |
| 3 | Cross-graph findings memo | `aDNA.aDNA/.../campaign_adna_v2_infrastructure/missions/artifacts/cross_graph_findings_to_v2_from_lattice_workspace_ux.md` | S1 or S2 |
| 4 | Mini-campaign AAR | `missions/artifacts/aar_campaign_lattice_workspace_ux.md` | S1 or S2 |
| 5 | Status flips + STATE.md mini-campaign close + v2 M05 prompt | side-campaign master + this mission file + v2 STATE.md | S1 or S2 |

**Total: 5 deliverables.** Estimated 1-2 sessions.

---

## Acceptance criteria (forecast — full table at mission open)

- [ ] Re-fork integration test 19/19 answers land in correct target files
- [ ] All 8 outer-vault integration tests PASS (or FAIL with corrective patches applied + re-tested)
- [ ] Cross-graph findings memo lists every finding with impact-class + recommended-mission
- [ ] Mini-campaign AAR landed (lightweight + 4-category extended)
- [ ] M-LWX-03 mission file `status: in_progress → completed`
- [ ] Side-campaign master `status: planned → completed`; `phase: -1 → completed`
- [ ] v2 STATE.md Next Session Prompt updated for M05 opening
- [ ] M-LWX-01 + M-LWX-02 outputs unchanged
- [ ] No partner-vault touches
- [ ] All Standing Orders honored (#1 phase gate + #5 AAR + #6 archive-not-delete + #7 dual-audience + #8 self-reference + #10 cross-link)

---

## Status

**Mission planned. Stub authored 2026-05-12 by v2 M04b S1 Obj 4.** Opens after both
M-LWX-01 AND M-LWX-02 close. Final mission of the mini-campaign; closure releases
v2 M05 from soft-block (M05 = `skill_lattice_publish` rewrite + new `skill_git_remote_setup` + new `skill_deploy`).
