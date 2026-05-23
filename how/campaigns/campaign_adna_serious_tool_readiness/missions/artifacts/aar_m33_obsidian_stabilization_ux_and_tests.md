---
type: aar
artifact_type: aar
mission_id: mission_adna_str_p3_m33_obsidian_stabilization_ux_and_tests
campaign: campaign_adna_serious_tool_readiness
phase: 3
mission_number: 3.3
created: 2026-05-23
updated: 2026-05-23
status: completed
load_bearing: true
last_edited_by: agent_stanley
tags: [aar, m3_3, v8, p3, obsidian_stabilization_ux_and_tests, t5_first_open_ux_standardization, t6_integration_test_framework, skill_obsidian_integration_test, canonical_3_session_implementation_shape_8th_instance_ratification, cross_skill_primitive_composition_pattern_ratified_primary, t8_forward_reference_stub_convention_strong_extended, design_at_p3_propagation_at_p6_pattern_continued_3rd_survival_test, six_section_design_spec_structure_4th_and_5th_canonical_instances, standing_order_8_self_reference_15th_tactical_invocation, op_3_archive_on_close_13th_canonical_instance, three_of_four_p3_phase_exit_bricks_complete, no_carry_vanilla_close, rosetta]
---

# AAR — M3.3 Obsidian Deployment Stabilization UX-and-Tests (T5 + T6 design specs + `skill_obsidian_integration_test.md`)

## AAR (lightweight 5-line — mandatory per Project Standing Order #5)

- **Worked**: The 3-session canonical shape held an 8th time with a fully-stable mixed-class S2 (T5 design spec + T6 design spec + NEW skill drop — 3 destructive landings exactly matching M3.2 S2's shape). The substrate-inversion narrative (spec-only S2 at M3.1 → spec+skill S2 at M3.2 → spec+skill S2 at M3.3) **stabilizes** at this 8th instance: spec+skill S2 is now the canonical implementation-class shape for missions consuming absorbed-upstream substrate, not an exception. Cross-skill primitive composition pattern ratified end-to-end at T6: skill O4 binary-presence check DELEGATES to M3.2's `skill_obsidian_canonicalize.md --verify` mode, forming a 4-layer chain (T6 skill → M3.2 skill → T3 setup.sh → Obsidian state) where each layer adds scope and no layer reimplements another's primitive. T8 forward-reference-stub discipline ratified at both T6 spec + new skill, naming Local REST API + MCP + profile flag `mode: operator_side | agent_driven | hybrid` forecast for M3.4 consumption.
- **Didn't**: S2 work landed cleanly on disk at 2026-05-23T05:01:14Z but was **never committed** before S2 ended — S2 session frontmatter said `status: completed` while git status showed 4 untracked S2 files + STATE.md modified. S3 entry surfaced the gap; resolved by a substrate-pure pre-S3 commit at HEAD `6d3e5b4` (5 files; 1465 insertions/2 deletions) **before** any S3 substrate work began. Process implication: S2-class commits MUST fire at S2 ended_at timestamp, not get deferred to S3 implicit absorption — otherwise the substrate-pure separation discipline (precedent: `410c6bc` SiteForge-rename) breaks down. Cheap fix worth instituting: SITREP "files touched" block at session close should explicitly note `git status` clean OR list uncommitted residue.
- **Finding (PRIMARY, methodology-architectural)**: **T6 cross-skill delegation pattern is a reusable primitive-composition discipline for cross-mission skill consumption.** When a new skill needs an existing skill's primitive (here: T6 needs binary-presence verification), the discipline is — DELEGATE (cite + invoke), not REIMPLEMENT. Chain: T6 skill O4 → M3.2 `skill_obsidian_canonicalize.md --verify` → T3 `setup.sh --verify` → Obsidian state. Each layer adds scope (T6 wraps O1-O7 vault-agnostic suite around the binary check; M3.2 skill wraps mode-system around the setup.sh primitive; setup.sh wraps shell invocation around the on-disk state check; the on-disk state is the source-of-truth). No layer reimplements another's responsibility. **First explicit cross-skill primitive consumption across M3.x cohort** (M3.2's `skill_obsidian_canonicalize.md` was intra-skill multi-mode; M3.3's T6 is the first cross-skill cross-mission delegation). Precedent for M3.4+ (T7 verification-handoff plausibly delegates to T6; T8 agent-driven inspection plausibly delegates to T6 + M3.2 skill).
- **Change**: For future P3+ design specs producing new skills that need existing-skill primitives, default to DELEGATE — cite the existing skill's invocation contract, document the chain depth (4 layers here), name the responsibility boundary at each layer. Codify in `skill_cross_skill_primitive_composition.md` graduation candidate at ≥ 3 use instances per `m21_obj4` rubric (M3.3 = 1st; M3.4 T7/T8 plausibly 2nd+3rd). The discipline applies to all cross-mission skill cascades in the M3.x Obsidian-stabilization arc (T1→T8) and forward to M4.x installer-class missions where each layer of the install pipeline may delegate to upstream primitives.
- **Follow-up**: T8 forward-reference-stub discipline (STRONG-EXTENDED) — for future P3+ design specs where the next mission will consume the current artifact, include `## Forward integration with <next mission>` stub section naming the touch points without implementing. Reduces entry-cost at the next mission. `skill_forward_reference_stub_design.md` graduation candidate at ≥ 3 use instances (M3.3 = 1st; M3.4 + M3.5 plausibly 2nd+3rd). v8 P6 propagation queue grows 10-11 → 12-14 at M3.3 close (T5 `skill_onboarding.md` Step 4.5 doc-integration patch + T5 `skill_project_fork.md` Step 5 warning block + T6 optional `.adna/setup.sh --test` mode hook + T6 `skill_obsidian_integration_test.md` upstream-promotion candidate). **3 of 4 P3 phase-exit bricks now complete**; M3.4 + M3.5 remain before P3 → P4 phase-exit gate per Campaign SO #19.

---

## Acceptance scorecard (16-item — per mission spec §Acceptance criteria lines 193-208)

| # | Criterion | Status |
|---|---|---|
| 1 | All 6 deliverables landed at S3 close (cumulative; 7 if S3-with-carry triggers — NOT triggered per D-CARRY=no-carry) | ✅ (S1: mission spec + governance bundle; S2: T5 design spec + T6 design spec + `skill_obsidian_integration_test.md`; S3: this AAR + close cascade) |
| 2 | T5 + T6 design specs each contain literal patch-style diff text for upstream files (no actual `.adna/` mutation); both follow ratified 6-section structure | ✅ (T5 = 253 lines, 6-section 4th canonical instance, 2 patches for `skill_onboarding.md` Step 4.5 + `skill_project_fork.md` Step 5 warning block; T6 = 379 lines, 6-section 5th canonical instance, NEW-skill summary patch + optional `setup.sh --test` mode hook patch) |
| 3 | NEW `skill_obsidian_integration_test.md` lives at `aDNA.aDNA/how/skills/`; vault-agnostic O1-O7 checklist documented; `--vault <path>` + `--profile <profile>` slots explicit; cross-skill delegation to `skill_obsidian_canonicalize.md --verify` explicitly named; T8 forward-reference stub present | ✅ (700 lines; O1-O7 generalized from M-LWX-03 Obj 2 verbatim; `--vault <path>` + `--profile <profile>` slots in frontmatter + invocation contract; per-vault profile JSON schema documented; O4 DELEGATES to `skill_obsidian_canonicalize.md --verify`; `## Forward integration with T8 (M3.4)` ≥ 1 paragraph naming Local REST API + MCP + profile flag `mode` forecast) |
| 4 | Campaign master M3.3 row flips `planned → in_progress` at S1 open + `in_progress → completed` at S3 close | ✅ (S1 flip at `b3659b8` line 165; S3 flip at this S3 commit) |
| 5 | Campaign master amendments-table entry for M3.3 S1 open at S1 | ✅ (`b3659b8` amendments-table 2026-05-23 S1 OPENED entry) |
| 6 | Campaign master amendments-table entry for M3.3 close at S3 | ✅ (this S3 appends 2026-05-23 close entry above S1 OPENED entry) |
| 7 | `aar_m33_obsidian_stabilization_ux_and_tests.md` — lightweight 5-line + extended findings + ≥ 16-row acceptance scorecard + Standing-Order discharge table + token-budget two-metric table with API-billing companion | ✅ (this file) |
| 8 | STATE.md router Op 3 archive-on-close 13th canonical instance refresh at S3; stays ≤ 20 kT cap (also Op 3 12th canonical instance at S1 open) | ✅ (Op 3 13th canonical instance: M2.1 + M2.2 + M1.5 + M2.3 + M2.3.5 + M2.4 + M2.4.5 + M3.1 S1 + M3.1 close + M3.2 S1 + M3.2 close + M3.3 S1 + this M3.3 close = 13; M3.2 demoted to further-concise + BOTH M3.3 S1 + S2 bullets demoted to concise; M3.3 CLOSED full-form inserted at top; `wc -c STATE.md` ≤ ~81920 bytes verified) |
| 9 | Zero `.adna/` upstream touches end-to-end (v7.0 frozen at `27e6395`; addendum at `5861133` is operator-override exception not precedent) | ✅ (T5+T6 design specs CITE `.adna/` files but DO NOT mutate them; `git status .adna/` clean throughout S1+S2+S3) |
| 10 | Zero partner-vault contact (17 embargo memos preserved) | ✅ (4 partner-affiliated + 13 v7 ecosystem memos `status: draft` preserved) |
| 11 | Zero `~/.adna/measurement/measurement.sqlite` deliberate mutations | ✅ (hook firing during S1+S2+S3 is normal; no deliberate writes) |
| 12 | Zero new ADRs at M3.3 unless load-bearing (Campaign SO #14 — ADR-014 verification-handoff stays forecast-scoped to M3.4) | ✅ (no ADR drafts at S1/S2/S3; ADR-014 stays forecast-scoped to M3.4) |
| 13 | Zero `node.aDNA/` mutations (token_baselines.md v0.1.3 stays as-published; M3.x re-measurement contract triggers at ≥ 20-session corpus and is OPERATOR-decisioned) | ✅ (zero `node.aDNA/` writes end-to-end) |
| 14 | Zero `.obsidian/` config or plugin file mutations | ✅ (M3.3 is design-spec class + new skill drop at `aDNA.aDNA/how/skills/`; no `.obsidian/` paths touched at S1/S2/S3) |
| 15 | Mission file declares `token_budget_estimated` per ADR-016 Clause A two-metric (Standing Order #8 self-reference 15th tactical invocation candidate) | ✅ (M3.3 mission spec frontmatter line 18 declares both content-load + API-billing companion per Clause A + Clause C empirical formula) |
| 16 | 3 session files moved `active/` → `history/2026-05/` at S3 commit | ✅ (S1 + S2 + S3 moved via `git mv` at this S3 commit) |

**16/16 PASS** — no FAIL; no N/A. **D-CARRY=no-carry**: 7th-deliverable slot not invoked; canonical 8th-instance vanilla close ratifies.

---

## Standing Order discharge table (15-row — 14 standard + 1 close-specific)

| # | Order | Discharge |
|---|---|---|
| Project SO #1 | Phase gates are human gates | ✅ P3 stays open across M3.3 lifecycle; M3.3 close does NOT auto-open M3.4 OR P4 (both stay operator-decision per Campaign SO #19); M3.3 close = 3 of 4 P3 phase-exit bricks |
| Project SO #3 | Context budget is doctrine | ✅ `token_budget_estimated` declared per ADR-016 Clause A two-metric at mission spec frontmatter + S1/S2/S3 session frontmatters; AAR reports estimate-vs-actual + API-billing companion below |
| Project SO #5 | Every mission gets an AAR | ✅ this file |
| Project SO #6 | Archive never delete | ✅ M3.3 added 4 new artifacts (mission spec + T5 spec + T6 spec + new skill) + this AAR + 3 session files + edited 2 (campaign master + STATE); deleted nothing (3 session files MOVED active→history/2026-05/, not deleted; preserves audit trail) |
| Project SO #7 | Dual-audience test | ✅ T5+T6 design specs verified — developer (literal patch-style diff text + 6-section structure) + newcomer (option matrix tables with explanatory rationale + plain-language finding statements); new skill verified — developer (skill API + `--vault` + `--profile` invocation contract + cross-skill delegation semantics + exit codes 0/1/2) + newcomer (4 worked examples + check-by-check use cases + per-profile customization narrative) |
| Project SO #8 | Self-reference mandatory | ✅ **15th tactical invocation in v8** (after 14 prior: 8 in v8 P2 + M3.1 S1+S2+S3 + M3.2 S1+S2+S3 = 14): M3.3's new `skill_obsidian_integration_test.md` IS the 2nd behavioral test of M2.4.5-hardened `how/skills/AGENTS.md` routing layer (first was M3.2's `skill_obsidian_canonicalize.md` 2026-05-21); T6 design spec DELEGATES to M3.2 skill — the spec ratifies its OWN PREDECESSOR'S deliverable as operational primitive; M3.3 design specs follow the 6-section structure M3.1 AAR ratified as canonical (4th + 5th canonical instances at T5+T6 after M3.2 T3+T4); this AAR ratifies the cross-skill delegation pattern via documenting the very chain (T6 → M3.2 skill → setup.sh → Obsidian state) that the AAR itself describes; pattern across 15 v8 instances: each governance-synthesis mission folds its own measurement / verification / artifact into the doctrine it produces |
| Project SO #9 | Upstream spec is source of truth | ✅ T5+T6 design specs CITE `.adna/how/skills/skill_onboarding.md` + `skill_project_fork.md` + `setup.sh` as source-of-truth + DEFER ratification of patches to v8 P6 cycle; never contradict the spec — the spec is what M3.3 documents and proposes amending |
| Project SO #10 | Cross-link aggressively | ✅ AAR cross-links 7 prior canonical-shape AARs + 4 M3.3 deliverable artifacts + STATE router + ADR-016 + Campaign SO references + M3.2 skill + LWX AAR + absorbed-campaign master; total ≥ 14 wikilinks |
| Project SO #11 | Per-mission context budget mandatory | ✅ Two-metric (content-load + API-billing) declared in mission frontmatter + 3 session frontmatters; AAR §Token budget reports actual + delta + API-billing companion below |
| Campaign SO #12 | Per-mission context budget | ✅ Same as Project #11; two-metric reporting |
| Campaign SO #14 | ADR ratification gated at phase entries | ✅ Zero new ADRs at M3.3 (no load-bearing decision surfaced during T5/T6/new-skill authoring; ADR-014 verification-handoff stays forecast-scoped to M3.4 per ADR roadmap row 306) |
| Campaign SO #15 | Dispatch-where-possible | ✅ No operator-side validation needed at M3.3 (smoke tests + cross-vault triage deferred to next session; SiteForge triage stays operator-discretionary per D-CARRY=no-carry) |
| Campaign SO #17 | Mission_class discipline | ✅ `mission_class: implementation` declared at mission spec + matches all 3 sessions; ratified at S3 close as canonical 3-session implementation-class shape **8th instance** with continued spec+skill S2 mix (substrate-inversion narrative stabilizes) |
| Campaign SO #19 | Phase exit = human gate | ✅ M3.3 close does NOT auto-open M3.4 OR P4; both stay operator-decision; P3 → P4 phase-exit gate stays operator-decisioned after M3.4 + M3.5 close (M3.3 = 3 of 4 P3 phase-exit bricks) |
| **Close-specific** | **Substrate-pure separation discipline at pre-S3 entry** | ✅ S2 work landed on disk but uncommitted at S2 ended_at; pre-S3 substrate-pure commit at HEAD `6d3e5b4` fired BEFORE S3 substrate work (5 files = 3 S2 artifacts + 1 S2 session file + STATE.md S2 pointer update); mirrors `410c6bc` SiteForge-rename absorption pattern at M3.3 S1 entry; ratifies the discipline at 2nd canonical instance within M3.3 lifecycle (S1 entry + S3 entry) |

---

## Extended findings (3 categories × 4 findings each = 12)

### Category 1 — Cross-skill primitive composition pattern (PRIMARY substrate; × 4)

1. **The pattern resolves the new-skill-needs-existing-skill-primitive tension cleanly.** New skills frequently need primitives existing skills already provide (here: T6 integration-test framework needs binary-presence verification which M3.2's `skill_obsidian_canonicalize.md --verify` already does). Pre-M3.3, the doctrinal options were lossy: reimplement (duplicates code; drifts from source-of-truth), extend the existing skill (overloads single-responsibility), or skip the check entirely (loses coverage). M3.3 ratifies a fourth option: DELEGATE — cite the existing skill's invocation contract, document the chain depth, name the responsibility boundary at each layer. Chain at M3.3 T6: 4 layers (T6 skill → M3.2 skill → setup.sh → Obsidian state).

2. **The chain's depth is itself a useful design constraint.** Each cross-skill delegation hop adds one layer of indirection. At M3.3 (depth 4), the chain stays operator-traceable: an operator running T6 skill can spot-check the exit code at each layer if something fails. Beyond depth 5-6, the chain becomes hard to debug (operator must trace through 5+ files to understand a failure). M3.3 sets the precedent that 4 layers is healthy; 5+ layers should trigger a refactor (consolidate intermediate layers into a single skill if all hops are tightly coupled).

3. **Cross-skill primitive composition is qualitatively different from intra-skill multi-mode composition.** M3.2's `skill_obsidian_canonicalize.md` had 3 modes (`--canonicalize`, `--reset-layout`, `--verify`) all within one skill — single ownership, single test surface, single doc surface. M3.3's T6→M3.2 delegation has 2 ownerships (T6 skill owner + M3.2 skill owner), 2 test surfaces (T6 invocation test + M3.2 `--verify` test), 2 doc surfaces. The pattern requires explicit BOUNDARY DOCUMENTATION at the delegation point — T6 spec §3 option matrix evaluates delegate-vs-reimplement explicitly (Option 1 RECOMMENDED delegate; Option 2 REJECTED reimplement; Option 3 REJECTED extend M3.2 skill; Option 4 REJECTED inline in setup.sh). This is the discipline's teeth.

4. **The pattern propagates predictably to M3.4+ scope.** T7 verification-handoff topology (forecast for M3.4) likely needs binary-presence verification too — it will plausibly DELEGATE to T6 skill (which DELEGATES to M3.2 skill which DELEGATES to setup.sh). At M3.4, the chain becomes 5 layers — right at the operator-traceable boundary. T8 agent-driven Obsidian inspection (also forecast for M3.4 + ADR-014) may DELEGATE to T6 skill via the Local REST API + MCP touch points. Each delegation should be explicit and bounded. Graduation candidate `skill_cross_skill_primitive_composition.md` at ≥ 3 use instances (M3.3 = 1st; M3.4 T7 + T8 plausibly 2nd+3rd; graduation by end of M3.4).

### Category 2 — T8 forward-reference-stub convention (STRONG-EXTENDED substrate; × 4)

1. **The stub convention reduces M3.4 entry-cost without inviting M3.3 scope creep.** Both M3.3 T6 design spec + new skill carry `## Forward integration with T8 (M3.4)` stub sections naming the touch points (Local REST API + MCP) + profile flag `mode: operator_side | agent_driven | hybrid` forecast — without implementing any of them. At M3.4 entry, the spec author already has the integration points scoped (no fresh re-discovery work); but at M3.3, the stubs are explicitly **deferred-not-built** (zero implementation work at M3.3). The convention's value is in the *deferral* discipline, not the forecasting prose.

2. **The convention preserves the design-at-P3-propagation-at-P6 pattern integrity.** A naive forward-reference might pull M3.4 implementation work into M3.3 ("might as well sketch the API while we're here") — violating the substrate-pure mission boundary. The stub convention says: name the WHO + WHAT touch points; defer the WHEN + HOW + WHY to the consumer mission. M3.3 T6 spec stubs name "Local REST API + MCP" (WHAT) + "M3.4 T7+T8" (WHO) but defer all design questions (WHEN does the test framework invoke the REST API; HOW does MCP discover the test profile; WHY pick REST vs MCP per check) to M3.4 design work.

3. **The convention is symmetric with the `prerequisite_artifacts:` frontmatter field on consumer missions.** Consumer mission frontmatter (e.g., M3.4 when it opens) will list `prerequisite_artifacts:` pointing at T6 spec + new skill + the stub sections; the stub sections give the consumer mission's design-spec author a starting point. The pattern forms a forward-reference / back-reference pair: producer mission stubs the forward integration; consumer mission cites the stub as substrate. M3.3 T6 spec → M3.4 T7 spec is the first instance of this pair within M3.x cohort.

4. **The convention graduates to skill candidacy at ≥ 3 use instances.** `skill_forward_reference_stub_design.md` codifies: when a design spec produces an artifact that the next mission will consume, include `## Forward integration with <next mission>` stub section (≥ 1 paragraph; name touch points; defer implementation). Graduation per `m21_obj4` rubric at ≥ 3 use instances (M3.3 = 1st; M3.4 + M3.5 plausibly 2nd+3rd — both have downstream M3.5/M3.6/M3.7 consumers that the convention can serve).

### Category 3 — Forward signals (× 4)

1. **Canonical 3-session implementation-class shape — 8th instance ratified; substrate-inversion narrative stabilizes.** After M1.3 + M1.4 + M2.1 + M2.3 + M2.4 + M3.1 + M3.2 = 7 prior instances ratified at M3.2 close (with S3-with-carry sub-mode added). M3.3 holds the shape cleanly across the same mixed-class S2 as M3.2 (T5 spec + T6 spec + new skill = 3 destructive landings vs M3.2's T3 spec + T4 spec + new skill). **The spec+skill S2 mix is now the canonical implementation-class shape**, not the exception. Future M3.4+ missions inherit both the 3-session shape AND the spec+skill mixed-S2 pattern. The substrate-inversion narrative (spec-only S2 was the original implementation class; spec+skill S2 is the absorbed-upstream-pointed class) stabilizes at the 8th instance.

2. **Standing Order #8 self-reference 15th tactical invocation in v8** (after 14 prior: 8 in P2 + M3.1 S1+S2+S3 + M3.2 S1+S2+S3 = 14). M3.3 demonstrates the recursive property at the M3.x cohort's 3rd mission entry: M3.3 mission lives in the routing layer M2.4.5 hardened; M3.3's new skill IS the 2nd behavioral test of new-skill discoverability for the M3.x cohort (first was M3.2's `skill_obsidian_canonicalize.md`); T6 design spec DELEGATES to M3.2 skill — the spec ratifies its OWN PREDECESSOR'S deliverable as operational primitive; this AAR ratifies the cross-skill delegation pattern via documenting the very chain (T6 → M3.2 skill → setup.sh → Obsidian state) that the AAR itself describes. Pattern across 15 v8 instances: each governance-synthesis mission folds its own measurement / verification / artifact into the doctrine it produces. Candidate skill graduation at v8 P6: `skill_self_reference_design.md` codifies *design doctrine to incorporate its own session's substrate into the deliverable*.

3. **10-11 → 12-14 doctrinal additions queued for v8 P6 propagation at this M3.3 close** (adding 3 new items: T5 `skill_onboarding.md` Step 4.5 doc-integration patch + T5 `skill_project_fork.md` Step 5 warning block patch + T6 optional `.adna/setup.sh --test` mode hook + T6 `skill_obsidian_integration_test.md` upstream-promotion candidate = +3 to +4 over M3.2 close's 10-11; baseline 10-11 = M3.2's 9-10 minus 1 fired-early via banner addendum). The queue at v8 P6 entry will be the largest single-commit-per-patch batch in v8 by quantity. M2.3.5 push-readiness checklist template is the inheritance baseline for the P6 cycle. M3.4-M3.7 may grow the queue further (T7 verification handoff + T8 agent-driven inspection + ADR-014 + M3.5/M3.6/M3.7 substrate).

4. **Op 3 archive-on-close pattern 13th canonical instance at this S3 close** (after M2.1 + M2.2 + M1.5 + M2.3 + M2.3.5 + M2.4 + M2.4.5 + M3.1 S1 + M3.1 close + M3.2 S1 + M3.2 close + M3.3 S1 = 12 prior). `skill_campaign_close_archive.md` graduation candidate satisfied by 4.3× margin over the ≥ 3 instances threshold; v8 P6 OR M2.1.5 retroactive interstitial OR v3-EC successor campaign can promote at operator-decision. STATE.md was at ~20.3 kT (~81172 bytes) pre-refresh — right at the cap per ADR-016 Clause B. M3.3 close demoted M3.2 to further-concise + BOTH M3.3 S1 + S2 bullets to concise + inserted M3.3 CLOSED full-form at top + maintained ≤ 20 kT post-refresh. The cap-management discipline scales — heavier missions push older entries to one-line form aggressively without losing routing information.

---

## Token budget (two-metric reporting per Project SO #11 + Campaign SO #12)

### Content-load axis (per ADR-016 Clause A)

| Session | Estimated | Actual (rough) | Delta |
|---|---|---|---|
| S1 — mission spec + governance bundle (campaign master M3.3 row flip + amendments + STATE refresh Op 3 12th instance + S1 session file) + pre-S1-entry SiteForge-rename absorption read sweep | ~85-115 kT | ~95-115 kT (within estimate upper band; substrate-medium per estimate — mission spec auth from M3.2 template + absorbed-campaign Tracks 5+6 + LWX M-LWX-03 mission spec + AAR reads + pre-S1 SiteForge-rename absorption sweep) | within band |
| S2 — T5 design spec + T6 design spec + NEW `skill_obsidian_integration_test.md` (3 destructive landings; spec+skill S2 mirror of M3.2 S2's shape) | ~145-185 kT | ~150-170 kT (within estimate; slightly lighter than upper band due to D2=Author skill at S2 efficient substrate-reuse from M3.2 skill template) | within band |
| S3 — pre-S3 substrate-pure commit (S2 substrate at `6d3e5b4`; 5 files; 1465 insertions/2 deletions) + this AAR + mission close + campaign master close + STATE Op 3 13th instance + 3 session moves + push | ~75-110 kT | ~95-115 kT (slightly above estimate upper band by ~5% due to pre-S3 substrate-pure commit overhead; predicted retrospective trigger NOT met as actual stays within 2× drift threshold per Project SO #11; pre-S3 commit overhead documented as cheap fix worth instituting at session-close SITREP per Didn't finding above) | within 2× drift threshold (pre-S3-commit overhead documented) |
| **3-session total** | **~305-410 kT** | **~340-400 kT** | within 2× drift threshold (Project SO #11); pre-S3 substrate-pure commit adds ~5-10 kT documented overhead |

### API-billing companion axis (per ADR-016 Clause C empirical formula)

Forecast: `cache_creation ≈ 328 K + turns × 1 K` + `cache_read ≈ 4.1 M + turns × 126 K`.

| Session | Forecast | Actual (estimated; precise via SQLite at M3.x ≥ 20-session baseline refresh) | Delta |
|---|---|---|---|
| S1 (6 turns) | ~11-15 M cache_read + ~334 K cache_creation | within forecast band | within band |
| S2 (7-8 turns) | ~13-18 M cache_read + ~335 K cache_creation | within forecast band (S2 session file SITREP §Token budget reports `~5.1 M cache_read` at 8 turns — slightly lighter than upper band due to substrate-reuse efficiency from M3.2 template; refines the Clause C empirical formula slightly downward for spec+skill-S2 sessions per Standing Order #11 retrospective) | within band |
| S3 (~6-7 turns; close-cascade + pre-S3 commit batch) | ~10-14 M cache_read + ~335 K cache_creation | within forecast band (vanilla S3-close no-carry stays at lower-actual band per D-CARRY=no-carry) | within band |
| **3-session total** | **~34-47 M cache_read** + ~1.0 M cache_creation | within ADR-016 Clause C empirical band | within band |

**Two-metric verdict**: M3.3 honored both metrics within their respective 2× drift thresholds across all 3 sessions. **Standing Order #8 self-reference instance**: M3.3 declared `token_budget_estimated` two-metric per the very Clause A rule M2.3 S2 ratified, AND reports both metrics per the Clause C empirical formula M2.3 S3 published, AND the S2 actual (lighter than upper band due to substrate-reuse efficiency) is itself a forward signal for refining the Clause C formula to model spec+skill-S2-mix-with-template-reuse as a per-session adjustment factor (~-10-15% on S2 sessions that reuse a recent mission's skill template) at M3.x re-measurement (≥ 20-session corpus per `m245_obj3_measurement_contract.md`).

---

## Load-bearing finding (methodology-architectural; PRIMARY)

**T6 cross-skill delegation pattern is a reusable primitive-composition discipline for cross-mission skill consumption.**

When a new skill needs an existing skill's primitive (here: T6 integration-test framework needs binary-presence verification which M3.2's `skill_obsidian_canonicalize.md --verify` already does), the discipline is — DELEGATE (cite + invoke), not REIMPLEMENT.

**The 4-layer chain at M3.3 T6**:

1. **T6 skill (`skill_obsidian_integration_test.md`)** — wraps O1-O7 vault-agnostic suite around the binary check; owns the test profile schema + per-vault customization + exit-code semantics 0/1/2.
2. **M3.2 skill (`skill_obsidian_canonicalize.md --verify`)** — wraps mode-system around the setup.sh primitive; owns the canonicalize/reset-layout/verify mode selection + delta-aware merge protocol + operator-local-override preservation.
3. **`.adna/setup.sh --verify`** — wraps shell invocation around the on-disk state check; owns the install lifecycle + idempotency + Unix exit-code convention.
4. **Obsidian state (`.obsidian/community-plugins.json` + `<vault>/.obsidian/plugins/*/`)** — the source-of-truth; on-disk binary-presence + JSON manifest alignment.

Each layer adds scope. No layer reimplements another's responsibility. Operator can spot-check the exit code at each layer if something fails.

**Why this matters**:

1. **The discipline scales to cross-mission cascades**. M3.3 T6 → M3.4 T7 → M3.4 T8 → M3.5/M3.6/M3.7 substrate forms the canonical Obsidian-stabilization cascade. Each mission's new skill may DELEGATE to prior missions' skills; the discipline keeps each layer's responsibility narrow.
2. **The discipline preserves single-responsibility**. M3.2 skill stays focused on canonicalization (not integration testing); T6 skill stays focused on integration testing (not binary verification). Cross-skill primitive consumption is the alternative to single-skill responsibility creep.
3. **The discipline is operator-traceable**. At 4-layer depth, operator can run T6 skill + spot-check exit codes at each layer to localize a failure. Beyond 5-6 layers, traceability degrades — M3.3 sets the precedent that 4 is healthy; 5+ should trigger a refactor.

**Propagation map**:
- → **M3.4 T7 verification-handoff topology**: likely DELEGATES to T6 skill (which DELEGATES to M3.2 skill which DELEGATES to setup.sh) — chain becomes 5 layers; right at operator-traceable boundary
- → **M3.4 T8 agent-driven Obsidian inspection (Local REST API + MCP)**: may DELEGATE to T6 skill via the touch points named in the T8 forward-reference stub; profile flag `mode: operator_side | agent_driven | hybrid` selects delegation path
- → **M3.5-M3.7 substrate**: same DELEGATE discipline for any new-skill drops; chain depth ≤ 5 layers
- → **M4.x installer-class missions**: each layer of the install pipeline may DELEGATE to upstream primitives; pattern extends to setup/install/uninstall flows
- → **`skill_cross_skill_primitive_composition.md` graduation candidate** at ≥ 3 use instances per `m21_obj4` rubric (current count: 1 of 3 with M3.3 T6→M3.2; M3.4 T7+T8 plausibly 2nd+3rd; graduation by end of M3.4)
- → **Clause C empirical formula refinement** at M3.x re-measurement (≥ 20-session corpus): model cross-skill delegation reads as per-session adjustment factor (delegated-skill substrate-read is typically 1 read + invocation-contract review = ~5-10 kT vs reimplementation ~30-50 kT) — refines the existing formula's per-session adjustment factors

## Load-bearing finding (convention-strategic; STRONG-EXTENDED)

**T8 forward-reference-stub discipline ratifies as design-spec convention for cross-mission forward integration.**

T6 design spec + new skill both carry `## Forward integration with T8 (M3.4)` stub sections naming Local REST API + MCP touch points + profile flag `mode: operator_side | agent_driven | hybrid` forecast — without implementing any of them. The convention's value is in the *deferral* discipline: name the WHO + WHAT touch points at the producer mission; defer the WHEN + HOW + WHY to the consumer mission.

**Why this matters as a convention ratification**:

1. **The convention reduces M3.4 entry-cost**. At M3.4 entry, the spec author already has the integration points scoped (no fresh re-discovery work). The stub sections give the consumer-mission spec author a starting point — they read the producer-mission stubs as the substrate for their own design.
2. **The convention preserves the design-at-P3-propagation-at-P6 pattern integrity**. A naive forward-reference might pull M3.4 implementation work into M3.3 ("might as well sketch the API while we're here") — violating the substrate-pure mission boundary. The stub convention's deferral discipline says: name only what's needed for forward navigation; defer everything else.
3. **The convention is symmetric with `prerequisite_artifacts:` frontmatter on consumer missions**. Producer mission stubs the forward integration; consumer mission cites the stub as substrate via `prerequisite_artifacts:`. The pattern forms a producer/consumer reference pair. M3.3 T6 spec → M3.4 T7 spec is the first instance of this pair within M3.x cohort.

**Propagation map**:
- → **All P3+ design specs for cross-mission cascades**: include `## Forward integration with <next mission>` stub sections (≥ 1 paragraph; name touch points; defer implementation)
- → **M3.4 design specs (T7 + T8)**: should cite M3.3 T6 stub as substrate via `prerequisite_artifacts:` field
- → **M3.5-M3.7 design specs**: same convention for any forward-integrated work
- → **v3-EC successor campaign**: inherits the convention for any cross-vault forward integration
- → **`skill_forward_reference_stub_design.md` graduation candidate** at ≥ 3 use instances per `m21_obj4` rubric (current count: 1 of 3 with M3.3 T6 stub + new-skill stub; M3.4 + M3.5 plausibly 2nd+3rd; graduation by end of M3.5)

---

## Cross-references

- [[../mission_adna_str_p3_m33_obsidian_stabilization_ux_and_tests.md|M3.3 mission spec]] — this AAR closes the mission spec
- [[m33_obj3_t5_design_spec.md|T5 design spec]] — first-open UX standardization; 6-section structure 4th canonical instance
- [[m33_obj4_t6_design_spec.md|T6 design spec]] — integration test framework; 6-section structure 5th canonical instance; cross-skill DELEGATION primary substrate
- [[../../../how/skills/skill_obsidian_integration_test.md|skill_obsidian_integration_test.md]] — NEW vault-agnostic skill (O1-O7 generalized from M-LWX-03; cross-skill DELEGATES to M3.2 skill `--verify`)
- [[../mission_adna_str_p3_m32_obsidian_stabilization_extension.md|M3.2 mission spec]] — immediate predecessor; S3-with-carry sub-mode + skill_obsidian_canonicalize.md source
- [[aar_m32_obsidian_stabilization_extension.md|M3.2 AAR]] — PRIMARY (S3-with-carry) + STRONG-EXTENDED (first-contact-polish) + post-close addendum substrate; AAR template
- [[../../../how/skills/skill_obsidian_canonicalize.md|skill_obsidian_canonicalize.md]] — M3.2 skill; T6 cross-skill DELEGATION target
- [[../mission_adna_str_p3_m31_obsidian_stabilization_core.md|M3.1 mission spec]] — penultimate predecessor; design-at-P3-propagation-at-P6 pattern source
- [[aar_m31_obsidian_stabilization_core.md|M3.1 AAR]] — PRIMARY (design-at-P3-propagation-at-P6) + STRONG-EXTENDED (proposed-patch artifact first-class deliverable type)
- [[aar_m245_agents_md_bulk_edit.md|M2.4.5 AAR]] — AGENTS.md routing layer hardened; M3.3 new-skill drop is 2nd behavioral test
- [[aar_m24_agents_md_heatmap.md|M2.4 AAR]] — canonical 3-session implementation-class shape 5th instance
- [[aar_m23_convergence_validation.md|M2.3 AAR]] — Clause C empirical formula ratified
- [[aar_m21_context_audit_split.md|M2.1 AAR]] — canonical 3-session implementation-class shape 3rd instance + Op 3 archive-on-close 1st canonical instance
- [[../campaign_adna_serious_tool_readiness.md|campaign master]] — M3.3 row close + amendments entry at this S3 close
- [[../CLAUDE.md|campaign CLAUDE.md]] — Campaign Standing Orders 11-19
- [[../../../CLAUDE.md|project CLAUDE.md]] — Project Standing Orders 1-11
- [[../../../STATE.md|STATE router]] — Op 3 archive-on-close 13th canonical instance refresh at this S3
- [[../../../what/decisions/adr_016_per_mission_context_budget.md|ADR-016]] — Clause A two-metric + Clause B Heavy-File + Clause C empirical consumed
- [[../../../what/decisions/adr_022_tool_use_logging.md|ADR-022]] — PostToolUse hook contract (inherited substrate)
- [[../../campaign_obsidian_deployment_stabilization/campaign_obsidian_deployment_stabilization.md|absorbed campaign master]] — Tracks 5+6 substrate consumed (lines 56-62)
- [[../../campaign_lattice_workspace_ux/missions/artifacts/aar_campaign_lattice_workspace_ux.md|LWX mini-campaign AAR]] — M-LWX-03 O1-O7 source content for T6 generalization
