---
type: aar
artifact_type: campaign_aar
campaign: campaign_lattice_workspace_ux
missions: [mission_lwx_01_dynamic_bootstrap_interview, mission_lwx_02_node_vault_role_expansion, mission_lwx_03_integration_test_and_closeout]
status: complete
created: 2026-05-13
updated: 2026-05-13
last_edited_by: agent_stanley
campaign_started: 2026-05-12T22:18Z+  # M-LWX-02 S1 open at mini-campaign open
campaign_closed: 2026-05-13T07:00Z+  # M-LWX-03 S2 close (Phase K timestamp)
session_count: 5  # M-LWX-02 S1 + M-LWX-01 S1 + M-LWX-01 S2 + M-LWX-03 S1 + M-LWX-03 S2
mission_count: 3
estimated_sessions: "5-7"
calibrated_sessions: "5-7"
actual_sessions: 5  # within estimate
successor_campaigns: [campaign_obsidian_deployment_stabilization, campaign_validation_node_adna_lwx_outputs]
tags: [aar, campaign_aar, lwx_close, fourth_additive_upstream_settled, fifth_additive_upstream_candidate, scope_vs_role_naming_codified, verification_handoff_topology, dispatch_model_adopted, easy_fluid_context_graphs]
---

# Campaign AAR — Lattice Workspace UX (mini-campaign of v2)

Mini-campaign closed 2026-05-13T07:00Z+ at M-LWX-03 S2 Phase K. **3/3 missions completed within estimated 5-7 sessions** (actual: 5 sessions across 1.5 calendar days). Predecessor `campaign_adna_v2_infrastructure` resumes at v2 M05 (publish-skill rewrite); two successor campaigns seeded for follow-on work.

## Mission summary

| Mission | Sessions | Outcome | Load-bearing finding |
|---|---|---|---|
| **M-LWX-02** (Phase 1; opened first by operator choice) | 1 (S1 only, 2026-05-12T22:18Z+ → T22:35Z+, ~17 min) | 8/8 deliverables; 25/25 agent-side smoke PASS; Option C reframe (no rename, no outer-vault layer); ADR-001 ratified | Scope-based vs. role-based vault naming is a reusable design test — every existing `.aDNA/` vault is named by scope; persona carries role semantics |
| **M-LWX-01** (Phase 1; opened second; was the upstream-bound work) | 2 (S1 2026-05-12T23:19Z+; S2 2026-05-13T01:05Z+ close) | 8/8 deliverables; 9/9 sandbox smoke gates PASS; 3rd-instance additive-upstream pattern (after ADR-008 + e3b3bcc); 5 findings → M-LWX-03 cross-graph | Single-commit additive-upstream pattern reaches 3rd instance; mirror-this-node smoke methodology established |
| **M-LWX-03** (Phase 2; opened after M-LWX-01 + M-LWX-02 closed) | 2 (S1 2026-05-13T03:06Z+; S2 2026-05-13T04:39Z+ close) | All 5 objectives addressed (4 complete; Obj 2 partial + remainder dispatched); 4th-instance additive-upstream commit `202c9ec`; ADR-013 ratified; 13 findings routed (3 resolved at M-LWX-03, 10 routed forward, +8 new F-S2-* from S2 path α + runtime discoveries) | Verification-handoff topology codified: agent-side smoke ≠ runtime smoke; dispatch-model adopted; first instance dispatched to Carly+Herb |

**Total findings across mini-campaign**: 13 (S1 cross-graph) + 8 (S2 F-S2-*) = **21 findings routed forward**.

## AAR (lightweight)

- **Worked**: 3-mission decomposition was sound (M-LWX-01 upstream-bound + M-LWX-02 local-bound parallel-eligible + M-LWX-03 integration/closeout). The plan-mode-first execution model from M-LWX-02 (Option C reframe) propagated forward as a quality habit; M-LWX-03 made 4 plan-mode re-entries during S2 and the resulting plan file is now the mission's reasoning fossil record. Operator's strategic re-framings (stabilization campaign at M-LWX-03 plugin-bootstrap moment; dispatch campaign at M-LWX-03 reframe moment) converted tactical friction into permanent architectural patterns without losing closeout momentum.
- **Didn't**: M-LWX-02's agent-side smoke (25/25 PASS) reported the vault as functionally complete when the runtime layer was empty (no plugin binaries, no themes, no setup.sh). The gap stayed hidden until M-LWX-03 S2 (the first Obsidian launch). This validates the M-LWX-02 → M-LWX-03 verification-handoff sequence but reveals that "agent-side smoke is complete" is NOT the same as "vault is operationally ready." Two distinct verification layers conflated as one.
- **Finding**: **Three patterns settled and one architectural primitive codified at this mini-campaign**: (1) Single-commit additive-upstream pattern at 4 instances (ADR-008 + e3b3bcc + 8673383 + 202c9ec) — now stable as a documented pattern. (2) Scope-vs-role naming codified at ADR-001 (node-scope) + ADR-013 (workspace-scope) — every `.aDNA/` vault names its scope, persona carries the role. (3) Mirror-this-node verification fidelity established — production smoke uses real inventory + identity overlays, not synthetic data. (4) **Verification-handoff topology** codified: agent-side smoke + operator-side runtime smoke + dispatch connector (Carly+Herb pattern as first instance; agent-driven via Local REST API + MCP as future T8).
- **Change**: Future aDNA feature missions plan agent-side smoke + operator-side runtime verification as **two distinct gates**, not "smoke vs. deferred manual." Dispatch operator-side verification in parallel with implementation when bandwidth is an issue. Document the pattern in `skill_verification_handoff.md` (T7 of successor campaign). Continue plan-mode-first habit established by M-LWX-02 — destructive recommendations always get the additive-alternative-as-recommended treatment.
- **Follow-up**: **Two successor campaigns** open at operator discretion: (A) `campaign_obsidian_deployment_stabilization` in `aDNA.aDNA/` (Rosetta; 8 tracks T1-T8 addressing F-S2-1..8 — fork propagation, workspace idempotency, plugin-binary validation, JSON canonicalization, first-open UX, integration test framework, verification handoff doc, agent-driven Obsidian inspection); (B) `campaign_validation_node_adna_lwx_outputs` in `lattice-labs/` (Berthier-owned, Carly+Herb dispatched; Phase 1 narrow — M-VNAL-01 covers O4/O5/O6/O3-extended; Phase 2+ broader as a recurring "validate-all-aDNA-features" pattern). v2 M05 (publish-skill rewrite) is the next aDNA-infrastructure mission.

## Extended findings (4 categories, cross-mission)

### Successful patterns

1. **Plan-mode-first execution.** Established by M-LWX-02 (Option C reframe before any code); propagated to M-LWX-03 (4 plan re-entries during S2, each producing a recorded plan addendum). The plan file becomes the mission's reasoning fossil record. Cumulative effect: rich audit trail + denser AAR source material than flat session logs.
2. **Single-commit additive-upstream pattern** — 4 instances (ADR-008 + e3b3bcc + 8673383 + 202c9ec) with a 5th candidate (`skill_project_fork.md` propagating setup.sh) queued for `campaign_obsidian_deployment_stabilization` T1. Pattern: one upstream commit, additive to existing artifacts, minimal scope; verified via mirror-this-node smoke. Now stable enough to be cited without re-justification.
3. **Mirror-this-node smoke methodology.** M-LWX-01 D-Smoke decision established: smoke tests use real inventory + identity overlays, not synthetic. M-LWX-03 Obj 1 re-fork test inherited this; produced structurally-identical fork to a real first-time fork on this machine. Verification fidelity scales with input authenticity.
4. **Scope-vs-role naming as a design test.** ADR-001 (node-scope, rejecting `home.aDNA`) + ADR-013 (workspace-scope, R1-R4 rule set) codify the test. Every future `.aDNA/` rename proposal can be checked against R1-R4; passing requires scope/identity change, not functional role expansion.
5. **Org-Vault.aDNA as integrated control plane** — `node.aDNA/` now demonstrates operational data + governance + gallery + skill catalog + Obsidian config in one coherent vault. Pattern flagged for `aDNA.aDNA/` M07 absorption consideration; other Org-Vaults (`science_stanley.aDNA`, `wga.aDNA`, `context_commons.aDNA`, `lattice-labs/`) may adopt at their pace.
6. **Plan-mode re-entry as audit-quality multiplier.** Repeated re-entries during a single session, each producing a recorded plan addendum, create denser audit trails than flat session logs.
7. **Dispatch-model adoption as closeout completion path.** Don't wait for operator-side completion — dispatch the remainder to designated validators (Carly+Herb), close the implementing mission, route outstanding work via a coord-memo + dispatched-campaign. Mission closes "with validation dispatched"; audit trail preserved per Standing Order #6.
8. **Operator screenshot → vision verification** as a Tier-2 fallback. Already-in-use pattern is the "Tier 2b" in T8's agent-driven Obsidian inspection design — works when full automation isn't set up.

### Surprises and friction

1. **Agent-side smoke gap surfaced only at runtime.** M-LWX-02's 25/25 PASS reported a functionally-empty vault as complete (no plugin binaries, no themes, no setup.sh). Agent-side smoke verifies structural fields (file existence, JSON validity, frontmatter correctness) but cannot verify runtime properties (plugin loads, theme renders, layout preserved, clicks resolve). **Architectural significance**: two distinct verification layers were conflated as one. The fix is explicit verification-handoff (T7 + dispatch model).
2. **Obsidian first-open is destructive to template-derived state.** `workspace.json` (template-derived from `workspace.default.json` at M-LWX-02 close) was clobbered to a stripped layout within seconds of operator's first open. Obsidian doesn't distinguish "template-derived initial state worth preserving" from "live state safe to overwrite." Mitigation: setup.sh `--reset-layout` flag (T2).
3. **`community-plugins.json` enabled list ≠ installed binaries.** Silent failure mode — no error toast when binaries are missing, just empty navigation. Operator's "doesn't seem to have Notebook Navigator installed" report was the only signal. Mitigation: `setup.sh --verify` mode + integrate into `skill_node_health_check.md` (T3).
4. **The rename framing in M-LWX-02 was a near-miss.** Agent's first plan proposed `home.aDNA` as Recommended; operator's "is this good?" pushback caught the gratuitous-rename antipattern. Without the pushback, ~10 deliverables of migration cost would have been incurred + scope-based naming pattern broken. Lesson: when agent proposes destructive change, default to additive alternative as Recommended.
5. **Path-α scope expansion was non-trivial in scope (15 plugin binaries + theme + setup.sh + workspace.json restore) but trivial in execution (~5 min wall clock of agent work).** Disproportionate value/effort ratio — confirms the path-α-style mid-mission scope expansion is a viable pattern when the gap is bounded + reversible.
6. **Multi-detour walkthrough did not derail closeout.** M-LWX-03 S2 made 4 plan-mode re-entries during a ~2.5 hr session and still closed within plan. Re-entries sharpened the plan rather than delaying execution — operator decisions at each re-entry forced concrete commitments that subsequent work could build on.

### Conceptual contributions

1. **Verification-handoff topology** — agent-side surface + operator-side surface + their connector (dispatch coord, agent-driven inspection via REST API + MCP, OR both). Properties verified at each surface are DIFFERENT, not "same gate with different actors." → `skill_verification_handoff.md` (T7) is the canonical artifact.
2. **Validation-as-dispatched-campaign pattern.** When operator-side runtime verification is required but the implementing agent doesn't own that runtime, dispatch to a designated validator pair (Carly+Herb) via coord memo + campaign + missions. First instance: M-VNAL-01. Recurring pattern: all future aDNA features get parallel implementation + validation campaigns. → `campaign_validation_node_adna_lwx_outputs` is the seed.
3. **Easy/fluid context graphs as a north-star UX metric.** Operator's strategic framing at M-LWX-03 S2 path-α moment converted tactical Obsidian friction into a permanent successor-campaign north star. Qualitative metric ("does it feel easy?") that maps to concrete tracks. → Saved to project memory `project_adna_lattice_ux_goal.md`.
4. **Successor campaign DUAL ownership pattern.** Implementation campaigns (Rosetta in aDNA.aDNA) + validation campaigns (Berthier in lattice-labs, with Carly+Herb as session-level executors) ship in parallel. Each has clear persona/owner, AAR cycle; findings cross-pollinate via coord memos + cross-graph findings memo. Replaces "monolithic campaign" with "implementation + validation pair."
5. **Plan-mode-first as quality habit, not just protocol.** M-LWX-02 established it (Option C reframe in plan-mode); M-LWX-03 propagated it (4 re-entries during S2). The habit prevents premature execution, captures reasoning audit-able, and gives the AAR rich source material.
6. **node.aDNA mirror-this-node verification fidelity.** Pattern: when smoke-testing a fork process, use the test environment's actual data (real inventory + identity overlays), not synthetic placeholders. Verification fidelity scales with input authenticity. Now established for any future fork-process smoke test.
7. **Path-α scope expansion as mid-mission pattern.** When unexpected gap surfaces during mission execution and the fix is bounded + reversible, expand mission scope additively rather than re-plan or defer. Path α at M-LWX-03 S2 added 15 plugin binaries + theme + setup.sh to node.aDNA in ~5 min without disrupting closeout sequence.

### Items deferred (from missions; carried forward)

**From M-LWX-01 AAR**:
1. HOME.md auto-regen on `skill_inventory_refresh` invocation (deferred to v2 M05 OR successor T6)
2. workspace-router procedural-list invocation pattern documentation (M07)
3. hostname substitution semantics formalization (carry-forward)
4. identity-file create-vs-pre-exist asymmetry (F-Obj1-3; routes to F-S2-* successor)
5. node-skills + what/inventory/ not in `.adna/` upstream (5th-instance additive-upstream candidate; T1 of successor implementation campaign)

**From M-LWX-02 AAR**:
1. Bases-driven dynamic gallery view (deferred indefinitely; static markdown tables sufficient)
2. `skill_inventory_refresh.md` extension to re-render HOME.md (T6 successor candidate)
3. `skill_project_fork.md` `workspace.default.json` file-reference validation (T1 successor)
4. Pattern absorption to other Org-Vault.aDNA instances (M07 cross-vault pass)
5. Pattern flag for aDNA standard (M07 OR v8.0+)

**From M-LWX-03 AAR**:
1. Dispatched O4/O5/O6/O3-extended → M-VNAL-01 (Carly+Herb)
2. F-S2-1..8 implementation work → `campaign_obsidian_deployment_stabilization` T1-T8
3. Path-α binary commit (handled at Phase M)
4. Sandbox `/tmp/sandbox_lwx_03_refork/` cleanup (operator-discretionary)
5. GitHub canonical-case cleanup (M07 / ADR-006-amendment)
6. node.aDNA git remote setup (operator-discretionary; Standing Rule 5)

## Successor campaigns seeded

### A — `campaign_obsidian_deployment_stabilization` (implementation; aDNA.aDNA; Rosetta)

**Goal**: Make the Obsidian deployment of every aDNA vault stable, standard, and self-stabilizing. Eliminate destructive first-open behaviors; propagate `setup.sh` through `skill_project_fork.md`; add idempotent re-canonicalization tooling.

**8 tracks**: T1 fork propagation · T2 workspace layout idempotency · T3 plugin-binary install validation · T4 Obsidian config canonicalization · T5 first-open UX standardization · T6 integration test framework · T7 verification handoff documentation · T8 agent-driven Obsidian inspection (Local REST API + MCP).

**Mission tree**: TBD at the campaign's own planning mission. Status: `planned` at Phase L authoring; opens at operator discretion.

### B — `campaign_validation_node_adna_lwx_outputs` (validation; lattice-labs; Berthier; Carly+Herb dispatched)

**Goal**: Validate M-LWX-01/02/03 outputs on operator-owned machines via dispatch to Carly+Herb. Phase 1 narrow (outstanding O-checks); Phase 2+ broader (recurring validation/tuning for all future aDNA features).

**Phase 1 mission**: M-VNAL-01 (`mission_vnal_01_node_adna_obsidian_operator_side_checks.md`) — 4 objectives: O4 within-vault wikilinks (Carly), O5 cross-vault markdown links (Herb), O6 marketplace link (Carly), O3-extended full vault tables (Carly + Herb).

**Coord memo**: `lattice-labs/who/coordination/coord_2026_05_13_carly_herb_node_adna_validation_dispatch.md` — Berthier coordinates; opens when Carly + Herb each ack.

## Conclusion

Mini-campaign `campaign_lattice_workspace_ux` closed clean at 3 missions / 5 sessions / 1.5 calendar days. Three patterns settled (4-instance additive-upstream, scope-vs-role naming, mirror-this-node smoke fidelity); one architectural primitive codified (verification-handoff topology with dispatch + agent-driven branches). 21 findings cataloged and routed forward to two successor campaigns. node.aDNA HEAD advances additively from `1032d8d` to a new commit at Phase M (binaries committed per `.gitignore` line 30).

Predecessor `campaign_adna_v2_infrastructure` resumes at v2 M05 (publish-skill rewrite) — unblocked by this close. The implementation campaign (A) + validation campaign (B) ship in parallel at operator discretion; the validation campaign is the first instance of a recurring "Carly+Herb validate-all-aDNA-features" dispatch pattern explicitly designed to serve the saved north-star metric *"easy and fluid way to build/operate/utilize context graphs."*
