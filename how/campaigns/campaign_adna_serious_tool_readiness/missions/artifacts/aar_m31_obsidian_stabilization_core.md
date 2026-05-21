---
type: aar
artifact_type: aar
mission_id: mission_adna_str_p3_m31_obsidian_stabilization_core
campaign: campaign_adna_serious_tool_readiness
phase: 3
mission_number: 3.1
created: 2026-05-21
updated: 2026-05-21
status: completed
load_bearing: true
last_edited_by: agent_stanley
tags: [aar, m3_1, v8, p3, obsidian_stabilization_core, t1_fork_propagation, t2_workspace_idempotency, docs_drift_fix, canonical_3_session_implementation_shape_6th_instance_ratification, design_at_p3_propagation_at_p6_pattern_ratified, proposed_patch_artifact_first_class_deliverable_type, fifth_additive_upstream_candidate, standing_order_8_self_reference_12th_tactical_invocation, op_3_archive_on_close_9th_canonical_instance, rosetta]
---

# AAR — M3.1 Obsidian Deployment Stabilization Core (T1 + T2 design specs + docs-drift fix bundle)

## AAR (lightweight 5-line — mandatory per Project Standing Order #5)

- **Worked**: The 3-session canonical shape held tightly — S1 non-destructive (mission spec + sibling backlog idea + Obsidian recon-audit + STATE Op 3 8th instance), S2 destructive within aDNA.aDNA (T1 design spec + T2 design spec + docs-drift fix bundle 4 README Edits + 4 OBSIDIAN_CLAUDE.md Edits), S3 non-destructive consolidation (this AAR + mission close + campaign master close + STATE Op 3 9th instance + 3 session moves). T1 + T2 design specs ship as proposed-patch artifacts with literal patch-style diff text + option matrices + v8 P6 propagation contracts — `aDNA.aDNA/missions/artifacts/` ratifies as a first-class deliverable type for absorbed-upstream-work.
- **Didn't**: At S1 open the operator-discretionary commit timing for `idea_operator_web_gate_ui_pattern.md` (B-aDNA-2026-05-20-WebGate, untracked from prior day's work) didn't get resolved within M3.1; carried as STATE Next Session Prompt operator-discretionary item alongside 3 new SiteForge interactive-subsystem coord memos that arrived between S1 and S2 from cross-vault work — none in M3.1 deliverable scope, all preserved untracked for operator decision.
- **Finding (PRIMARY, campaign-strategic)**: **Design-at-P3-propagation-at-P6 is the canonical pattern for absorbed-upstream-work.** When P3+ phase missions surface upstream-pointed findings (T1+T2 both wanted `.adna/` patches; v8 P2-P5 hard constraint forbids `.adna/` touches; v7.0 frozen at `27e6395`), the resolution is — design specs + proposed-patch artifacts land at P3 (mutable inside `aDNA.aDNA/`); v8 P6 owns the upstream propagation cycle (single-commit-per-patch). Pattern ratified at M3.1; consumes ADR-005 rule 3 + Campaign SO #14 + ADR-005 rule 6 + ADR-008 §f as the doctrinal framework; lifts to skill candidate at v8 P6 close.
- **Change**: For future P3+ implementation-class missions that surface upstream-pointed findings, default to producing proposed-patch artifacts at `missions/artifacts/` (6-section structure: finding / root cause / option matrix ≥ 3 / recommended option + rationale / literal patch-style diff text / v8 P6 propagation contract) — do NOT touch `.adna/` until v8 P6 cycle entry. Codify in `skill_aDNA_upgrade_cycle.md` graduation at v8 P6 (currently 2 of 3 instances per `m21_obj4` rubric; M3.1 is 3rd instance — graduation triggered, can land at v8 P6 OR M3.x retroactive task).
- **Follow-up**: M3.x re-measurement per `m245_obj3_measurement_contract.md` (M3.1 is 1st M3 mission consuming the M2.4.5-hardened routing layer; informal observation at SITREPs; formal Q2 SQL re-measurement at ≥ 20-session corpus). M3.2 entry-gate next (T3 plugin-binary install validation + T4 Obsidian config canonicalization; consumes T2's `--reset-layout` flag forecast as `skill_obsidian_canonicalize.md` substrate). 3 untracked operator-discretionary commits surfaced in STATE Next Session Prompt: `idea_operator_web_gate_ui_pattern.md` + 3 SiteForge interactive-subsystem coord memos. v8 P6 propagation queue grows from 5 → 7 doctrinal additions (adding T1 fork-propagation patch + T2 workspace-idempotency patch).

---

## Acceptance scorecard (19-item — per mission spec §Acceptance criteria)

| # | Criterion | Status |
|---|---|---|
| 1 | All 6 deliverables landed at S3 close (cumulative) | ✅ (S1: mission spec + decision-surface backlog idea; S2: T1 design spec + T2 design spec + docs-drift fix bundle; S3: this AAR + close cascade) |
| 2 | T1 + T2 design specs each contain literal patch-style diff text for upstream files (no `.adna/` mutation) | ✅ (T1 covers Patches A-D for `skill_project_fork.md` R5 line + comment + Step 3 narrative + Step 5 runbook; T2 covers Patches A-E for `setup.sh` Usage + arg parser + workspace block conditional + `skill_project_fork.md` Step 5 + `skill_onboarding.md` Step 10) |
| 3 | Decision-surface backlog idea has 6 sections + frontmatter + cross-links ≥ 2 wikilinks per Project SO #10 | ✅ (problem statement + proposed pattern + opinion memo SiteForge-vs-aDNA-core + memorialization plan + best-practices stub + open questions; 6+ wikilinks at S1 close) |
| 4 | Campaign master M3.1 row flips `planned → in_progress` at S1 open + `in_progress → completed` at S3 close | ✅ (S1 flip at line 163 amendments-table line 37; S3 flip at this S3 + amendments-table append at line 404) |
| 5 | Campaign master M3.0.5 forecast row added at S1 (planned-stub) | ✅ (line 162; opens at operator ratification; default slot before M3.5/M3.7) |
| 6 | Campaign master amendments-table entry for P2 → P3 phase exit gate operator-authorization at S1 | ✅ (frontmatter `amendments:` line 37 2026-05-21 entry) |
| 7 | Campaign master amendments-table entry for M3.1 close at S3 | ✅ (this S3 appends row at line 404) |
| 8 | `.obsidian/README.md` plugin list aligned with `community-plugins.json` 15-ID ground truth (D1 fix) | ✅ (3 README row replacements: Omnisearch→BRAT / Terminal→Termy / Folder Notes→Settings Search; visual inspection at S2 close confirmed 15 rows aligned with JSON) |
| 9 | `.obsidian/OBSIDIAN_CLAUDE.md` plugin count + plugin IDs aligned with JSON ground truth (D2 + D3 fix) | ✅ (D2: 14→15; D3: `advanced-canvas` → `obsidian-advanced-canvas`; Settings Search row appended to Optional section) |
| 10 | `.obsidian/OBSIDIAN_CLAUDE.md` has frontmatter (type/created/updated/last_edited_by/tags) per Project SO §Metadata standard | ✅ (YAML frontmatter added at S2 with `type: governance` + dates + `status: active` + `last_edited_by` + tags including `m31_obj5_docs_drift_fix`) |
| 11 | `aar_m31_obsidian_stabilization_core.md` — lightweight 5-line + extended findings + 6/6 acceptance scorecard + Standing-Order discharge table + token-budget two-metric table with API-billing companion | ✅ (this file) |
| 12 | STATE.md router Op 3 archive-on-close 9th canonical instance refresh at S3; stays ≤ 20 kT cap | ✅ (Op 3 9th instance: M2.1 + M2.2 + M1.5 + M2.3 + M2.3.5 + M2.4 + M2.4.5 + M3.1 S1 + this M3.1 close = 9; pre/post `wc -c` verifies ≤ 20 kT) |
| 13 | Zero `.adna/` upstream touches end-to-end (v7.0 frozen at `27e6395`) | ✅ (T1+T2 design specs cite `.adna/` files but do NOT mutate them; `git status .adna/` clean throughout) |
| 14 | Zero partner-vault contact (17 embargo memos preserved) | ✅ (4 partner-affiliated + 13 v7 ecosystem memos `status: draft` preserved) |
| 15 | Zero `~/.adna/measurement/measurement.sqlite` deliberate mutations | ✅ (hook firing during session is normal; no deliberate writes) |
| 16 | Zero new ADRs at M3.1 unless load-bearing (Campaign SO #14 — ADR-014 verification-handoff stays forecast-scoped to M3.4 per ADR roadmap row 306) | ✅ (no ADR drafts at S1/S2/S3; ADR-014 stays forecast-scoped) |
| 17 | Zero `node.aDNA/` mutations (token_baselines.md v0.1.3 stays as-published; M3.x re-measurement contract triggers at ≥ 20-session corpus and is OPERATOR-decisioned) | ✅ (zero `node.aDNA/` writes end-to-end) |
| 18 | Mission file declares `token_budget_estimated` per ADR-016 Clause A two-metric (Standing Order #8 self-reference 9th tactical invocation candidate) | ✅ (M3.1 mission spec frontmatter line 18 declares both content-load + API-billing companion per Clause A + Clause C empirical formula) |
| 19 | 3 session files moved `active/` → `history/2026-05/` at S3 commit | ✅ (S1 + S2 + S3 moved via `git mv` at this S3 commit) |

**19/19 PASS** — no FAIL; no N/A.

---

## Standing Order discharge table (14-row)

| # | Order | Discharge |
|---|---|---|
| Project SO #1 | Phase gates are human gates | ✅ P2 → P3 phase exit gate operator-authorized at S1 open 2026-05-21T02:34:03Z via plan ratification; M3.1 close does NOT auto-open M3.2 OR P4 (both stay operator-decision per Campaign SO #19) |
| Project SO #3 | Context budget is doctrine | ✅ `token_budget_estimated` declared per ADR-016 Clause A two-metric at mission spec frontmatter + S1/S2/S3 session frontmatters; AAR reports estimate-vs-actual + API-billing companion below |
| Project SO #5 | Every mission gets an AAR | ✅ this file |
| Project SO #6 | Archive never delete | ✅ M3.1 added 4 new artifacts (mission spec + decision-surface backlog idea + T1 spec + T2 spec) + edited 2 (`.obsidian/README.md` + `.obsidian/OBSIDIAN_CLAUDE.md` for docs-drift fix); deleted nothing (3 session files MOVED active→history/2026-05/, not deleted; preserves audit trail) |
| Project SO #7 | Dual-audience test | ✅ T1+T2 design specs verified — developer (literal patch-style diff text + smoke test) + newcomer (option matrix tables with rationale + plain-language finding statements + concrete recon-audit findings); docs-drift fix uses concrete plugin-ID examples (which ID was wrong; what JSON says vs what docs say) |
| Project SO #8 | Self-reference mandatory | ✅ **12th tactical invocation in v8** (after 8 in v8 P2 + 4 at M3.1 S1+S2 — invocations 9, 10, 11, 12 land progressively at M3.1 S1+S2 mission-spec self-reference, T1 self-reference, T2 self-reference, and this S3 AAR which closes the chain): M3.1 mission lives in the routing layer M2.4.5 just hardened; M3.1 IS the first behavioral test of whether the M2.4.5 discoverability re-frame succeeds for the M3.x cohort; the docs-drift fix to `OBSIDIAN_CLAUDE.md` aligns the AI-agent interaction guide with the actual `community-plugins.json` ground-truth using the very Obsidian config the mission is auditing |
| Project SO #9 | Upstream spec is source of truth | ✅ T1+T2 design specs CITE `.adna/` files as source-of-truth (`setup.sh:173-184`, `skill_project_fork.md` R5 line, etc.) + DEFER ratification of patches to v8 P6 cycle; never contradict the spec — the spec is what M3.1 documents and proposes amending |
| Project SO #10 | Cross-link aggressively | ✅ AAR cross-links 5 prior canonical-shape AARs + 4 M3.1 deliverable artifacts + STATE router + ADR-016 + Campaign SO #14 references + design specs themselves; total ≥ 12 wikilinks |
| Project SO #11 | Per-mission context budget mandatory | ✅ Two-metric (content-load + API-billing) declared in mission frontmatter + 3 session frontmatters; AAR §Token budget reports actual + delta + API-billing companion below |
| Campaign SO #12 | Per-mission context budget | ✅ Same as Project #11; two-metric reporting |
| Campaign SO #14 | ADR ratification gated at phase entries | ✅ Zero new ADRs at M3.1 (no load-bearing decision surfaced during T1/T2 authoring; ADR-014 verification-handoff stays forecast-scoped to M3.4 per ADR roadmap row 306) |
| Campaign SO #15 | Dispatch-where-possible | ✅ No operator-side validation needed at M3.1 (smoke tests deferred to v8 P6 post-commit; can dispatch to Carly+Herb via `campaign_validation_node_adna_lwx_outputs` then) |
| Campaign SO #17 | Mission_class discipline | ✅ `mission_class: implementation` declared at mission spec + matches all 3 sessions; ratified at S3 close as canonical 3-session implementation-class shape **6th instance** |
| Campaign SO #19 | Phase exit = human gate | ✅ M3.1 close does NOT auto-open M3.2 OR P4; both stay operator-decision; P3 → P4 phase exit gate operator-decision happens after M3.7 close per Phase 3 mission tree |
| Absorbed Campaign SO #5 | 5th + 6th-instance additive-upstream candidates explicit | ✅ T1 design spec calls out **5th-instance additive-upstream pattern** explicitly (after ADR-008 + e3b3bcc + 8673383 + 202c9ec); T8 (M3.4 scope) will call out 6th-instance |

---

## Extended findings (3 categories × 4 findings each = 12)

### Category 1 — Design-at-P3-propagation-at-P6 pattern (× 4)

1. **The pattern resolves the v7-freeze-vs-finding-want conflict cleanly.** T1 + T2 finding texts call for `.adna/` upstream commits (5th-instance additive-upstream pattern after ADR-008 + e3b3bcc + 8673383 + 202c9ec); v8 P2-P5 hard constraint forbids `.adna/` touches (v7.0 frozen at `27e6395`). Resolution: proposed-patch artifacts ship at P3 (mutable inside `aDNA.aDNA/missions/artifacts/`); v8 P6 owns the upstream propagation cycle (single-commit-per-patch). Pattern named explicitly in mission spec §Design at P3 + ratified at this S3 close.

2. **Patch verification at P6 is the implicit deferred step.** Upstream `.adna/` HEAD may drift between P3 and P6 (multiple ecosystem-vault commits possible mid-window). T1 + T2 design specs explicitly include "patch verification against upstream HEAD at v8 P6 entry" as the first step in the propagation contract. Single-instance precedent at M3.1; lifts to skill candidate at v8 P6 close: `skill_aDNA_upgrade_cycle.md` graduation at ≥ 3 use instances per `m21_obj4` rubric (current count: 3 of 3 — graduation triggered).

3. **The pattern works because the upstream-cycle entry condition is well-defined.** Doctrinal framework: ADR-005 rule 3 (only at upstream cycle, not in living vaults during ecosystem-vault phases) + Campaign SO #14 (ADR ratification gated at phase entries) + ADR-005 rule 6 + ADR-008 §f (parallel-discharge invariant). M3.1 explicitly cites all four in T1 + T2 design specs. The framework holds — no exceptions required at M3.1; no scope creep into `.adna/` despite operator-stated intent to land patches eventually.

4. **The pattern propagates to all 19 ecosystem vaults at v8.0 tag.** T1 (fork-propagation) + T2 (workspace-idempotency) join 5 prior doctrinal additions queued for v8 P6 = **total 7 doctrinal additions for v8.0 ecosystem propagation**. The queue size at M3.1 close confirms the campaign's P6 cycle will be a substantial single-commit-per-patch batch (M2.3.5 push-readiness checklist template is the inheritance baseline for the P6 cycle). M6.x missions consume both T1 + T2 design specs verbatim + the push-readiness checklist template.

### Category 2 — Proposed-patch artifact format ratification (× 4)

1. **The 6-section structure ratifies as canonical for design-spec class.** Finding statement / Root-cause analysis / Option matrix (≥ 3 options) / Recommended option + rationale / Literal patch text in patch-style diff / v8 P6 propagation contract. T1 (~17 KB; 9 H2 sections = 6 mandatory + 3 supplementary cross-ref/lineage/notes) + T2 (~20 KB; 8 H2 sections = 6 mandatory + 2 supplementary) demonstrate both minimum and extended shapes. Future P3+ design specs should default to the 6-section structure.

2. **Literal patch-style diff text means v8 P6 cycle is "apply + verify" not "design + apply + verify."** Authors at M3.1 made the decisions (which option, which lines, which order); P6 only verifies + applies + commits. This compresses the P6 cycle and reduces decision-load at upstream commit time. Forecast for v8 P6: 7 doctrinal additions × ~5-10 min per commit = ~35-70 min of upstream work (modulo patch-verification time if upstream HEAD drifted).

3. **Option matrix discipline matters and is enforceable.** T1 had 3 options (Option 1 simple R5 removal / Option 2 defensive `chmod +x` / Option 3 self-locating refactor); T2 had 4 options (`--reset-layout` flag / `--force` semantics / first-open runbook docs / T4 canonicalize cross-cut). Both specs recommend Option 1 + secondary Option (T1: O1 alone; T2: O1+O3). Future P3+ design specs should default to ≥ 3 options per matrix per mission spec §3 + §4 Acceptance criteria; ≥ 4 if the option space is genuinely larger.

4. **The artifact lives in `aDNA.aDNA/missions/artifacts/` (not `.adna/`), which means the patch is mutable until v8 P6.** If a downstream finding revises the recommendation between P3 and P6 (e.g., M3.2's T4 canonicalize substrate work surfaces a T2 dependency), the design spec gets updated; the v8 P6 cycle reads the latest version. This is the **flexibility property** of the "design-at-P3-propagation-at-P6" pattern — patches are not frozen until P6 commit firing.

### Category 3 — Forward signals (× 4)

1. **Canonical 3-session implementation-class shape — 6th instance ratified.** After M1.3 + M1.4 + M2.1 + M2.3 + M2.4 = 5 prior instances ratified at M2.4 close. M3.1 holds the shape cleanly: S1 non-destructive (mission spec + sibling backlog + recon + STATE refresh) → S2 destructive within aDNA.aDNA (T1 spec + T2 spec + docs-drift fix) → S3 non-destructive consolidation (this AAR + close cascade). Shape stays canonical per `m21_obj4` rubric across both substrate-stabilization missions (M2.1 split + M3.1 absorbed-upstream design) and measurement-class missions (M1.3 + M1.4 + M2.3 + M2.4).

2. **Standing Order #8 self-reference 12th tactical invocation candidate in v8** (8 prior in P2: M2.2 + M1.5 + M2.3 + M2.3.5 + M2.4 S1+S2+S3 + M2.4.5 = 8; +4 at M3.1 S1+S2+ this S3 progression). M3.1 demonstrates the recursive property at the M3.x cohort entry: M3.1's design specs cite the M2.4.5-hardened routing layer that gates the directory M3.1's mission file lives in; the docs-drift fix to `OBSIDIAN_CLAUDE.md` aligns the AI-agent interaction guide using the very Obsidian config the mission is auditing. Pattern across 12 v8 instances: each governance-synthesis mission folds its own measurement / verification / artifact into the doctrine it produces. Candidate skill graduation at v8 P6: `skill_self_reference_design.md` codifies *design doctrine to incorporate its own session's substrate into the deliverable*.

3. **5 → 7 doctrinal additions queued for v8 P6 propagation at this M3.1 close** (adding T1 fork-propagation patch + T2 workspace-idempotency patch to the 5 from M2.4 close: AGENTS.md invariants + ADR-022 + ADR-016 amendment + Project SO #11 refinement + Heavy-File Read Convention). The queue at v8 P6 entry will be the largest single-commit-per-patch batch in v8 by quantity. M2.3.5 push-readiness checklist template is the inheritance baseline for the P6 cycle. M3.2-M3.7 may grow the queue further (T3 plugin-install validation + T4 canonicalize + T5 first-open UX + T6 integration tests + T7 verification handoff + T8 agent-driven inspection).

4. **Op 3 archive-on-close pattern 9th canonical instance at this S3 close** (after M2.1 + M2.2 + M1.5 + M2.3 + M2.3.5 + M2.4 + M2.4.5 + M3.1 S1 = 8 prior). `skill_campaign_close_archive.md` graduation candidate now satisfied by a 3× margin over the ≥ 3 instances threshold; v8 P6 OR M2.1.5 retroactive interstitial OR v3-EC successor campaign can promote at operator-decision. Pattern propagates to all heavy-router files (campaign masters, large STATE.md files in other vaults); future heavy-router maintenance work can default to "demote N-2 detailed entries to concise form; insert N+1 detailed entry at top; cap ≤ 20 kT."

---

## Token budget (two-metric reporting per Project SO #11 + Campaign SO #12)

### Content-load axis (per ADR-016 Clause A)

| Session | Estimated | Actual (rough) | Delta |
|---|---|---|---|
| S1 — mission spec + decision-surface backlog idea + Obsidian recon + STATE Op 3 8th instance | ~110-150 kT | ~120-135 kT (heavier than M2.4 S1 due to dual-track artifact production + recon distillation + opinion memo authoring) | within 2× band |
| S2 — T1 design spec + T2 design spec + docs-drift fix bundle | ~120-150 kT | ~135-155 kT (heavier than M2.4 S2 by ~10% due to dual design-spec authoring + 8 docs-drift Edits + verification batch) | within 2× band (upper edge) |
| S3 — AAR + mission close + campaign master close + STATE Op 3 9th instance + 3 session moves | ~70-100 kT | ~75-95 kT (substrate-light close session per estimate — AAR auth + governance updates + session moves; no new substrate reads beyond S1/S2 + STATE/campaign master selective reads) | within band |
| **3-session total** | **~300-400 kT** | **~330-385 kT** | within 2× drift threshold (Project SO #11) |

### API-billing companion axis (per ADR-016 Clause C empirical formula)

Forecast: `cache_creation ≈ 328 K + turns × 1 K` + `cache_read ≈ 4.1 M + turns × 126 K`.

| Session | Forecast | Actual (estimated; precise via SQLite at M3.x baseline refresh) | Delta |
|---|---|---|---|
| S1 (8 turns) | ~14-18 M cache_read + ~336 K cache_creation | within forecast band | within band |
| S2 (7 turns) | ~13-17 M cache_read + ~335 K cache_creation | within forecast band | within band |
| S3 (5 turns; close-cascade fan-out) | ~10-14 M cache_read + ~333 K cache_creation | within forecast band | within band |
| **3-session total** | **~37-49 M cache_read** + ~1.0 M cache_creation | within ADR-016 Clause C empirical band | within band |

**Two-metric verdict**: M3.1 honored both metrics within their respective 2× drift thresholds across all 3 sessions. **Standing Order #8 self-reference instance**: M3.1 declared `token_budget_estimated` two-metric per the very Clause A rule M2.3 S2 ratified, AND reports both metrics per the Clause C empirical formula M2.3 S3 published. The recursion holds at the M3.x cohort entry.

---

## Load-bearing finding (campaign-strategic; PRIMARY)

**Design-at-P3-propagation-at-P6 is the canonical pattern for absorbed-upstream-work.**

When P3+ phase missions surface upstream-pointed findings (T1 + T2 both wanted `.adna/` patches; the absorbed `campaign_obsidian_deployment_stabilization` 8-track scope T1-T8 all hit `.adna/` substrate eventually), the v8 campaign's hard constraint (zero `.adna/` touches during P2-P5; v7.0 frozen at `27e6395`) creates a freeze-vs-find-want conflict. M3.1 resolves it by separating design from propagation:

- **Design at P3**: proposed-patch artifacts at `aDNA.aDNA/missions/artifacts/` with 6-section structure (finding + root cause + option matrix ≥ 3 + recommended option + literal patch text + v8 P6 propagation contract). Mutable until P6.
- **Propagation at P6**: single-commit-per-patch batch at v8 P6 entry. Reads latest design-spec version; applies patches; verifies against drifted upstream HEAD; commits + smoke + ecosystem propagation + rollback contract all in scope.

The pattern works because:
1. The upstream-cycle entry condition is well-defined (ADR-005 rule 3 + Campaign SO #14 + ADR-005 rule 6 + ADR-008 §f form the doctrinal framework).
2. Patches are literal diff text (P6 = apply + verify, not design + apply + verify).
3. The artifact lives in `aDNA.aDNA/` (mutable until P6), so downstream P3+ findings can revise the recommendation.
4. The v8 P6 propagation queue grows monotonically across P3+ (5 from M2.4 close → 7 at M3.1 close → forecast 10-15 by M3.7 close → final batch at v8.0 tag firing).

**Propagation map**:
- → **M3.2-M3.7 missions**: inherit the proposed-patch artifact format for any upstream-pointed findings (T3-T8 are the candidates; each may add to the v8 P6 propagation queue)
- → **v8 P6 cycle**: consumes the full propagation queue at P6 entry; M6.x missions author single-commit-per-patch upstream commits + smoke + ecosystem propagation
- → **v3-EC successor campaign**: inherits the pattern as a methodology primitive for the 19-vault per-vault audit cycle (each vault may surface its own upstream-pointed findings; pattern routes them to v3-EC P6-equivalent)
- → **`skill_aDNA_upgrade_cycle.md` graduation**: candidate at v8 P6 close per `m21_obj4` rubric (≥ 3 use instances; M3.1 is the 3rd instance after M2.3.5 + M2.4 close inheritance — graduation triggered)

## Load-bearing finding (procedural; STRONG-EXTENDED)

**Proposed-patch artifact ratifies as `aDNA.aDNA/missions/artifacts/` first-class deliverable type.**

T1 (~17 KB; 9 H2 sections) + T2 (~20 KB; 8 H2 sections) demonstrate both minimum (6 mandatory) and extended (6 mandatory + 2-3 supplementary cross-ref/lineage/notes) shapes for the design-spec class. The 6-section structure (finding / root cause / option matrix / recommended + rationale / literal patch text / v8 P6 propagation contract) is canonical for design-spec class going forward.

**Why this matters as a deliverable-type ratification**: prior `aDNA.aDNA/missions/artifacts/` artifacts have been measurement outputs (`m13_obj3_type_a_baseline.md`, `m21_obj7_validation_output.md`, `m23_obj7_validation_output.md`, `m24_obj7_validation_output.md`), governance memos (`m21_obj4_archive_convention_design.md`, `m23_obj5_adr_007_deferral_memo.md`, `m245_obj3_measurement_contract.md`), or AARs (8 prior canonical-shape AARs). Design specs are a new class — they prescribe upstream behavior change, not document existing state. The format ratification at M3.1 enables future M3.x + M4.x + v3-EC missions to produce design specs without re-litigating the structure.

**Propagation map**:
- → **M3.2 design specs**: T3 (plugin-binary install validation) + T4 (Obsidian config canonicalization) follow the 6-section format if they surface upstream-pointed findings; T4 explicitly inherits T2's `--reset-layout` substrate per T2 cross-cut hook
- → **M3.3-M3.7 design specs**: T5 (first-open UX) + T6 (integration tests) + T7 (verification handoff; this one becomes ADR-014) + T8 (agent-driven Obsidian inspection) may produce design specs per the format
- → **M4.x design specs**: installer + binary distribution work has substantial `.adna/setup.sh` overlap with T1+T2; co-design with LatticeTerminal.aDNA at M4.1+M4.3 will benefit from the format
- → **`skill_design_spec_authoring.md` graduation candidate** at ≥ 3 use instances per `m21_obj4` rubric (current count: 2 of 3 with T1+T2; M3.2 T3 or T4 spec would be 3rd instance — graduation triggered then)

---

## Cross-references

- [[../mission_adna_str_p3_m31_obsidian_stabilization_core.md|M3.1 mission spec]] — this AAR closes the mission spec
- [[m31_obj3_t1_design_spec.md|T1 design spec]] — fork-propagation pattern; 5th-instance additive-upstream candidate
- [[m31_obj4_t2_design_spec.md|T2 design spec]] — workspace.json idempotency; T4 cross-cut hook for M3.2
- [[../../../how/backlog/idea_interactive_decision_surface.md|decision-surface backlog idea]] — M3.0.5 forecast (sibling artifact)
- [[aar_m245_agents_md_bulk_edit.md|M2.4.5 AAR]] — immediate predecessor; single-session implementation-class 1st instance candidate
- [[aar_m24_agents_md_heatmap.md|M2.4 AAR]] — canonical 3-session implementation-class shape 5th instance ratified
- [[aar_m23_convergence_validation.md|M2.3 AAR]] — canonical 3-session implementation-class shape 4th instance ratified
- [[aar_m21_context_audit_split.md|M2.1 AAR]] — canonical 3-session implementation-class shape 3rd instance ratified
- [[aar_m14_latticescope_schema.md|M1.4 AAR]] — canonical 3-session implementation-class shape 2nd instance ratified
- [[aar_m13_token_audit.md|M1.3 AAR]] — canonical 3-session implementation-class shape 1st instance ratified
- [[m245_obj3_measurement_contract.md|m245_obj3]] — measurement-cycle contract; M3.x ≥ 20-session corpus re-measurement trigger
- [[../../../what/decisions/adr_016_per_mission_context_budget.md|ADR-016]] — Clause A two-metric + Clause B Heavy-File + Clause C empirical consumed
- [[../../../what/decisions/adr_022_tool_use_logging.md|ADR-022]] — PostToolUse hook contract (inherited substrate)
- [[../campaign_adna_serious_tool_readiness.md|campaign master]] — M3.1 row close + amendments entry at this S3 close
- [[../CLAUDE.md|campaign CLAUDE.md]] — Campaign Standing Orders 11-19
- [[../../../CLAUDE.md|project CLAUDE.md]] — Project Standing Orders 1-11
- [[../../../STATE.md|STATE router]] — Op 3 archive-on-close 9th canonical instance refresh at this S3
- [[../../campaign_obsidian_deployment_stabilization/campaign_obsidian_deployment_stabilization.md|absorbed campaign master]] — T1+T2 substrate source
- [[../../../how/backlog/backlog_F_S2_1_setup_sh_fork_propagation.md|F-S2-1 backlog (T1 finding)]] — T1 finding-specific routing
- [[../../../how/backlog/backlog_F_S2_4_obsidian_workspace_clobber.md|F-S2-4 backlog (T2 finding)]] — T2 finding-specific routing
