---
type: integration_test_results
mission: mission_lwx_03_integration_test_and_closeout
objective: 2
session_s1: session_stanley_20260513_030626_mlwx03_s1  # agent-side mapping (closed)
session_s2: session_stanley_20260513_043947_mlwx03_s2  # operator-side partial + dispatch decision
operator: stanley
ran_at_s1: 2026-05-13T03:15:00Z  # agent portion
ran_at_s2: 2026-05-13T05:55:00Z  # operator-side O1/O2/O3-partial/O7
result_agent_side: COMPLETE_WITH_STRUCTURAL_DIVERGENCE
result_operator_side: PARTIAL_PASS_WITH_REMAINDER_DISPATCHED  # S2; O1/O2/O3-partial/O7 PASS by operator+Rosetta; O4/O5/O6/O3-extended dispatched
operator_side_check_count: 7  # 4 PASS by operator + 4 DISPATCHED (incl. new O3-extended row)
dispatched_to:
  coord_memo: lattice-labs/who/coordination/coord_2026_05_13_carly_herb_node_adna_validation_dispatch.md
  campaign: lattice-labs/how/campaigns/campaign_validation_node_adna_lwx_outputs/
  mission: mission_vnal_01_node_adna_obsidian_operator_side_checks
  agents: [agent_carly, agent_herb]
path_alpha_scope_expansion:
  triggered_at: 2026-05-13T04:55:00Z
  reason: first-open Obsidian audit surfaced uninstalled plugin binaries (16 enabled in JSON, 0 installed)
  actions: ["copy .adna/setup.sh → node.aDNA/setup.sh", "run ./setup.sh --force (15 plugins + Tokyo Night)", "restore workspace.json from workspace.default.json (Obsidian had clobbered)"]
  node_aDNA_head_advance: "1032d8d → [post-S2-commit]"
findings_routed_at_s2:
  - F-S2-1  # setup.sh fork propagation gap
  - F-S2-2  # config-binary asymmetry (no auto-download)
  - F-S2-3  # agent vs operator smoke handoff
  - F-S2-4  # Obsidian first-open clobbers workspace.json
  - F-S2-5  # Obsidian normalizes tracked .obsidian/*.json
  - F-S2-6  # NN per-vault data.json not shipped (triad colors missing)
  - F-S2-7  # template placeholder tags leak into vault tag index
  - F-S2-8  # agent-driven Obsidian inspection (Local REST API + MCP)
created: 2026-05-13
updated: 2026-05-13
last_edited_by: agent_stanley
tags: [integration_test, mlwx_03, obj2, outer_vault, option_c_adapted, structural_divergence, m04b_obj3_section6, operator_side_partial, validation_dispatched, path_alpha_scope_expansion, carly_herb_dispatch]
---

# M-LWX-03 Obj 2 — Outer-Vault Integration Tests (Option-C-Adapted)

## Summary

**Agent-side result**: COMPLETE — Option C structural mapping done. Of the 8 tests in `m04b_obj3_lattice_obsidian_vault_spec.md` §6 (authored assuming the **outer-vault** model `~/aDNA/.obsidian/`): **4 tests structurally N/A** under M-LWX-02's Option C reframe (no outer vault); **4 tests MAPPED** to M-LWX-02's 7 deferred operator-side checks (O1, O2/O3, O5, O6); **1 test DEFERRED-PENDING-IMPL** (Test 7 — depends on `skill_inventory_refresh` extension, currently a backlog item per M-LWX-02 AAR deferred #1); **2 NEW DIMENSIONS** added by M-LWX-02 that the original 8 didn't cover (O4 within-vault wikilinks + O7 theme/accent).

**Operator-side result**: DEFERRED to S2 per D-S1Scope=B. The 6 operator-side checks (4 mapped + 2 new) require launching Obsidian on this Mac; agent cannot execute them. Operator runs O1-O7 between S1 and S2.

**Net effect**: under Option C, the "8 outer-vault tests" reduce to **6 testable surfaces** (all node.aDNA-scoped via Obsidian on this Mac), 1 deferred backlog item, and 3 structural N/As. The divergence from the M04b spec is **not a regression** — it reflects the architectural decision M-LWX-02 captured in ADR-001 (scope-vs-role naming; outer-workspace-vault rejected in favor of additive role-expansion of node.aDNA).

---

## Method

Per Obj 2 spec ("Open `~/aDNA/` in Obsidian. Run each of the 8 tests from Obj 3 §6 sequentially. Capture PASS/FAIL + screenshots or text evidence for each. Any FAIL gates the AAR (corrective patch + re-test required)"):

**Step 1 (agent-side, this session)**: build the Option C mapping table — re-classify each of M04b Obj 3 §6's 8 tests against M-LWX-02's actual deliverables (Option C reframe — `node.aDNA/` role-expanded; no outer `~/aDNA/.obsidian/`).

**Step 2 (operator-side, deferred to S2)**: operator runs the 7 M-LWX-02 deferred checks (O1-O7) on this Mac with Obsidian, captures PASS/FAIL + evidence.

**Step 3 (S2)**: integrate operator-side results; any FAIL → corrective patch + re-test.

---

## Option C structural mapping table

| M04b §6 Test | Pre-Option-C assumption | Option C reality | Mapping | M-LWX-02 O-check | Status |
|--------------|--------------------------|------------------|---------|------------------|--------|
| **Test 1 — Outer vault opens cleanly** | Operator opens `~/aDNA/` in Obsidian | No outer vault; operator opens `node.aDNA/` | MAPPED | **O1** — Obsidian opens `node.aDNA/` cleanly; HOME.md visible as default | Deferred to operator (S2) |
| **Test 2 — Inner `.aDNA/` excluded** | Outer file explorer hides `.aDNA/` subfolders via `.obsidianignore` at workspace root | No outer vault, so nothing to exclude from | **N/A** | n/a | N/A — Option C structural |
| **Test 3 — Bases gallery renders** | HOME.md `BASES` blocks render queryable tables | M-LWX-02 deferred Bases (schema couldn't be validated without Obsidian launch); used **static markdown tables** instead | MAPPED (markdown-fallback variant) | **O2** + **O3** — HOME.md renders; markdown tables enumerate correctly (21 vaults + 11 named projects + 3 drift) | Deferred to operator (S2) |
| **Test 4 — Marketplace link clickable** | Click marketplace link in HOME.md preview | Same — node.aDNA HOME.md has marketplace link with placeholder | MAPPED | **O6** — marketplace link clickable | Deferred to operator (S2) |
| **Test 5 — Sub-vault opening** | From outer-vault HOME.md, right-click `aDNA.aDNA/` → Open with Obsidian | From node.aDNA HOME.md, click `[CanvasForge.aDNA](../CanvasForge.aDNA/)` → file manager → Open with Obsidian | MAPPED | **O5** — cross-vault markdown links open file manager; right-click enters that vault | Deferred to operator (S2) |
| **Test 6 — `.obsidianignore` enforces** | Outer indexer doesn't pick up file events inside inner `.aDNA/` | No outer indexer; node.aDNA's own `.obsidianignore` already governs its scope (pre-mission) | **N/A** | n/a | N/A — Option C structural |
| **Test 7 — HOME.md regenerates on `skill_inventory_refresh`** | Re-running inventory_refresh re-renders HOME.md tables | `skill_inventory_refresh.md` does NOT currently extend to HOME.md table regeneration (manual re-render only) | **DEFERRED-PENDING-IMPL** | n/a (no operator-side check defined) | Backlog (M-LWX-02 AAR §Items deferred #1) |
| **Test 8 — Workspace router Step 0.5 fires** | Fresh `claude` session at `~/aDNA/` prompts for Obsidian setup | Step 0.5 not added under Option C; D-RouterFix adds 3-line Step 0.3 amendment (different scope) | **N/A** | n/a | N/A — Option C structural |

**Map summary**: 4 MAPPED (Tests 1/3/4/5 → O1/O2+O3/O6/O5) + 3 N/A (Tests 2/6/8) + 1 DEFERRED-PENDING-IMPL (Test 7).

---

## Dimensions added by M-LWX-02 (not in original 8 tests)

M-LWX-02 introduced two operator-side checks that the M04b §6 8-test list did NOT specify. These augment the integration-test scope under Option C:

| O-check | What it tests | Why M04b §6 didn't cover |
|---------|---------------|--------------------------|
| **O4 — Within-vault wikilinks navigate** | `[[CLAUDE]]` clickable in HOME.md → opens `node.aDNA/CLAUDE.md` | M04b §6 assumed outer-vault; wikilinks-within-node.aDNA wasn't a test surface because node.aDNA's `.obsidian/` was already set up pre-mission. Under Option C, HOME.md gallery introduces NEW wikilinks (to inner files) that need indexer verification. |
| **O7 — Theme + accent applied** | Tokyo Night theme + Rebecca Purple accent visible on Obsidian launch | M04b §6 focused on functional checks (does the indexer index correctly); didn't specify visual checks. M-LWX-02 surfaced this because Option C requires the per-vault `.obsidian/appearance.json` to remain authoritative — a regression would silently break operator UX. |

**Net testable surface under Option C** = 4 mapped + 2 new = **6 operator-side checks** (O1 + O2 + O3 + O4 + O5 + O6 + O7 of M-LWX-02; O3 is a sub-component of O2).

---

## Operator-side O1-O7 results (S2 — partial complete + remainder DISPATCHED)

**S2 execution 2026-05-13T04:39Z+ → T06:35Z+**: Operator (Stanley) ran O1, O2, O3 (partial), O7 with Rosetta walkthrough. Remaining checks (O4, O5, O6, O3-extended) **dispatched** to Carly + Herb per `lattice-labs/who/coordination/coord_2026_05_13_carly_herb_node_adna_validation_dispatch.md` (campaign `campaign_validation_node_adna_lwx_outputs` in `lattice-labs/how/campaigns/`).

**Path α scope expansion was authorized mid-S2** when the first-open audit surfaced uninstalled plugin binaries — operator ran `setup.sh --force` to install 15 community plugins + Tokyo Night theme + restored `workspace.json` from `workspace.default.json` (Obsidian had clobbered it on first open). Sub-findings F-S2-1 through F-S2-8 routed to cross-graph memo + `campaign_obsidian_deployment_stabilization` (implementation successor in aDNA.aDNA).

| # | Check | Method | Expected | Result | Evidence |
|---|-------|--------|----------|--------|----------|
| O1 | Obsidian opens `node.aDNA/` cleanly | File → Open Vault → `~/aDNA/node.aDNA/` (or `obsidian://open?vault=node.aDNA`) | Vault opens; HOME.md visible in preview mode as the default open file; no error toasts | **PASS** (S2) | Vault registered in `~/Library/Application Support/obsidian/obsidian.json` post-open; HOME.md visible in preview mode; no error toasts. **Attempt 1** (URL scheme `obsidian://open?vault=node.aDNA`) FAILED expectedly — vault not in registry; **Attempt 2** (File → Open Vault) PASSED. **Workflow nuance captured**: URL scheme requires prior registration → routes to F-O1-1 (operator-onboarding skill update). |
| O2 | HOME.md renders | Visual inspection on open | Header + 6 vault-class tables + Named Projects table + Drift table + Marketplace link + Tools & quick nav | **PASS** (S2, post-setup.sh restart) | Operator screenshot 2026-05-13T05:55Z+. Visible: header "HOME" + Properties collapsible + H1 "Lattice — Mac (operator: stanley)" + Hestia callout with purple left border + 9-row Properties table (Node/Operator/Machine class/Persona/Workspace root/Vault count/Drift entries/Last inventory refresh/Governance) + footer ("Counts and entries are sourced from `./what/inventory/inventory_vaults.yaml`") + status bar "3 backlinks · 9 properties · 959 words · 7,749 characters." No render errors. Full vault-class tables below the fold — see O3-extended (DISPATCHED). |
| O3 | Markdown tables enumerate correctly | Compare HOME.md vault count to `inventory_vaults.yaml` | 21 `.aDNA` vaults + 11 named projects + 3 drift entries — all present | **PARTIAL PASS** (S2, properties row) | Properties row values confirmed via screenshot: Vault count = "21 `.aDNA` + 11 named projects" ✓; Drift entries = "3 (see §Drift below)" ✓; Governance = 4 wikilinks (CLAUDE · MANIFEST · STATE · CHANGELOG) ✓. Full vault-class tables (6 tables + Named Projects + Drift) not visible in current screenshot → **O3-extended DISPATCHED below**. |
| O4 | Within-vault wikilinks navigate | Click `[[CLAUDE]]` in HOME.md | Opens `node.aDNA/CLAUDE.md` | **DISPATCHED → M-VNAL-01 Obj 1** | See `lattice-labs/who/coordination/coord_2026_05_13_carly_herb_node_adna_validation_dispatch.md` + `lattice-labs/how/campaigns/campaign_validation_node_adna_lwx_outputs/missions/mission_vnal_01_node_adna_obsidian_operator_side_checks.md`. Carly (content/UX). |
| O5 | Cross-vault markdown links open | Click `[CanvasForge.aDNA](../CanvasForge.aDNA/)` | Opens file manager at `~/aDNA/CanvasForge.aDNA/`; right-click → "Open with Obsidian" enters that vault as a separate session | **DISPATCHED → M-VNAL-01 Obj 2** | Same coord. Herb (cross-vault link resolution = infrastructure). |
| O6 | Marketplace link clickable | Click marketplace link | Browser opens to `https://lattice-protocol.com/marketplace` (or 404 placeholder note) | **DISPATCHED → M-VNAL-01 Obj 3** | Same coord. Carly (content/UX). |
| O7 | Theme + accent applied | Visual inspection | Tokyo Night theme + Rebecca Purple accent (per existing `.obsidian/appearance.json`) | **PASS-with-sub-finding F-S2-6** (S2, post-setup.sh restart) | Operator screenshot 2026-05-13T05:55Z+. Visible: Tokyo Night dark background ✓; Rebecca Purple accent on highlighted code spans (`Mac`, `stanley`, `/Users/stanley/aDNA/`, `.aDNA`, file paths) + callout left border + folder-pane background ✓; wikilinks rendered blue ✓; H1 in pink/coral (Tokyo Night default, not a regression). **Sub-finding F-S2-6**: NN folder triad colors (purple `who/`, cyan `what/`, green `how/` per OBSIDIAN_CLAUDE.md:170-174) NOT applied — NN's per-vault `data.json` config not shipped by setup.sh. Routes to F-S2-6 backlog + `campaign_obsidian_deployment_stabilization` T4. |
| **O3-extended** (NEW) | Full vault-class + Named Projects + Drift tables enumerate correctly | Scroll past Properties table in HOME.md → confirm 6 vault-class tables (Forge / Platform / Framework / Org-Vault / Domain / External) + Named Projects table + Drift table render with correct row counts | **DISPATCHED → M-VNAL-01 Obj 4** | Same coord. Carly (visual content check) + Herb (row-count infrastructure check). |

**Gating** (revised): Any FAIL surfaced by Carly/Herb during their dispatched validation re-opens the dispatched mission's S2 OR seeds a corrective patch via `campaign_obsidian_deployment_stabilization`. No re-open of M-LWX-03 itself; M-LWX-03 closes "with validation dispatched" per the operator decision at S2 close.

**Validation disposition**: `partial_pass_with_remainder_dispatched`. Mini-campaign AAR (`aar_campaign_lattice_workspace_ux.md`) captures the dispatch model as a load-bearing finding.

---

## Findings routed forward

### F-Obj2-1 — Spec-vs-implementation divergence (medium, expected)

M04b Obj 3 §6's 8-test list was authored before M-LWX-02's Option C reframe. 3 of 8 tests (Test 2 / Test 6 / Test 8) became structurally N/A; 1 (Test 7) became DEFERRED-PENDING-IMPL. The spec is **architecturally tied to the rejected outer-vault model**; if a future operator reads only M04b Obj 3 §6 without M-LWX-02's AAR + ADR-001 context, the test list will read as "5/8 incomplete" rather than "Option C structurally re-scoped to 6 testable surfaces."

**Fix candidate**: Add a `## §6.5 — Option C addendum` to `m04b_obj3_lattice_obsidian_vault_spec.md` (in `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/`) referencing M-LWX-02 ADR-001 + this Obj 2 artifact. Preserves the original 8-test list (Standing Order #6 archive-not-delete) + adds the Option-C-adapted mapping.

**Route**: cross-graph memo § "M04b Obj 3 §6 addendum."

### F-Obj2-2 — Test 7 (HOME.md regeneration) is a real gap (low-medium)

`skill_inventory_refresh.md` does NOT currently extend to HOME.md table regeneration. Operator must manually re-run the Step 9 substitution if `inventory_vaults.yaml` changes. M-LWX-02 AAR §Items deferred #1 already flagged this as backlog.

**Fix candidate**: amend `skill_inventory_refresh.md` to detect `node.aDNA/HOME.md` presence + re-run table-generator substitution if so. ~20 lines addition; LP-internal skill (lives at `node.aDNA/how/skills/`); not upstream-bound until/unless Finding F-Obj1-2 routes node-skills to `.adna/`.

**Route**: cross-graph memo § "skill_inventory_refresh HOME.md auto-regen" — bundles cleanly with F-Obj1-2 if node-skills get upstreamed in M05.

### F-Obj2-3 — Two operator-side dimensions not in original spec (cosmetic-clarification)

M-LWX-02's O4 (within-vault wikilinks) + O7 (theme/accent) tests added integration-test surface area not in M04b Obj 3 §6's original 8 tests. These are valuable additions; the divergence shows the design's testable surface grows when role-expansion lands within an existing vault (vs. greenfield outer-vault creation).

**Fix candidate**: include O4/O7-equivalent dimensions in the M04b Obj 3 spec addendum (F-Obj2-1).

**Route**: cross-graph memo (bundled with F-Obj2-1).

---

## Cross-references

- Mission spec: `aDNA.aDNA/how/campaigns/campaign_lattice_workspace_ux/missions/mission_lwx_03_integration_test_and_closeout.md`
- Original 8-test spec: `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m04b_obj3_lattice_obsidian_vault_spec.md` §6
- M-LWX-02 7-check operator-side smoke: `mlwx_02_obj6_smoke_results.md` §Operator-side manual smoke
- M-LWX-02 AAR (Option C decision rationale): `aar_mlwx_02_node_vault_role_expansion.md` + ADR-001
- Sibling artifact: `mlwx_03_obj1_refork_test_results.md` (Obj 1; bootstrap chain test)
- Plan file: `/Users/stanley/.claude/plans/please-read-the-claude-md-shiny-cherny.md`
- ADR-001 (Option C rationale): `node.aDNA/what/decisions/adr_001_node_vault_role_expansion.md`
- D-StdADR forthcoming: `aDNA.aDNA/what/decisions/adr_013_workspace_vault_naming_scope_vs_role.md` (M-LWX-03 Phase F)

---

## Conclusion

**Agent-side: COMPLETE.** Option C mapping established; 4 of 8 original tests mapped to M-LWX-02 O-checks; 3 N/A under Option C structural reframe; 1 DEFERRED-PENDING-IMPL (Test 7); 2 new dimensions added by M-LWX-02 (O4 + O7). Three findings routed to cross-graph memo (F-Obj2-1 spec addendum / F-Obj2-2 HOME.md regen / F-Obj2-3 new dimensions).

**Operator-side: DEFERRED to S2.** Operator runs 7 deferred Obsidian checks (O1-O7) on this Mac between S1 and S2; returns this artifact at S2 entry with Result + Evidence columns filled.
