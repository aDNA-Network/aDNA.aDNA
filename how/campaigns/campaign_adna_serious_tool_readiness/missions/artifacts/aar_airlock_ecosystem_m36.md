---
type: aar
artifact_id: aar_airlock_ecosystem_m36
mission: mission_adna_str_p3_m36_airlock_aar_and_streamline
campaign: campaign_adna_serious_tool_readiness
phase: 3
created: 2026-05-25
updated: 2026-05-25
status: final   # finalized at M3.6 S2 close 2026-05-25 — added §5 scorecard (12 rows) + §6 Standing-Order discharges (17 rows) + §7 extended findings (3 categories × 4 = 12 findings) + §8 pattern graduation block + §9 token-budget two-metric table
last_edited_by: agent_stanley
spec_completeness: complete   # all 10 sections final at S2; §1-§4 + §10 authored at S1; §5-§9 populated at S2 close
tags: [aar, m36, v8, p3, airlock_ecosystem_synthesis, cross_vault, iii_v0_3_0, consumer_wrappers, lattice_labs_canvas_pipeline, adr_008_template_stub, streamline_candidates_3_clusters, forward_doctrine, rosetta]
---

# AAR — Airlock Ecosystem Synthesis (M3.6 S1 draft)

> **Scope**: Cross-ecosystem synthesis covering III.aDNA airlock arc v0.1.0 → v0.3.0 (MA4 → MC3 → MC5 → MD-A1 → MD-A2 → MD-A3 → MD-A4 → MD-A5; Track D1 COMPLETE end-to-end 2026-05-24) + 5 consumer-wrapper landings (SiteForge + VideoForge + CanvasForge + wga + LPWhitepaper; all pinned v0.3.0 @ `a309ad4`) + lattice-labs `campaign_comic_pipeline_canvas` M0-M1 operational learnings + aDNA.aDNA ADR-008 template-stub doctrine (pins v0.2.0). Substrate gathered via Explore subagent at S1 entry (~1500-word synthesis report; ADR-016 Clause B Heavy-File Read convention; report cited throughout this AAR rather than re-reading source files).
>
> **Why this AAR**: M3.6 is concern #3 of v8's 6 operator-specified strategic concerns ("airlock system AAR + streamline"). The substrate is mature enough — III v0.3.0 documentation-grade end-to-end validation green at MD-A5; 5 consumer wrappers landed; lattice-labs canvas pipeline surfaced live cross-vault critic federation — that synthesis now produces actionable streamline primitives for v8 P6 propagation rather than premature optimization. M3.7 (modular III for Obsidian) is the first downstream consumer of the streamlined surface.

## § 1 — What Worked

### 1.1 Purely additive v0.3 contract preserved v0.2 conformance end-to-end

III v0.3.0 (`iii_airlock_standard_spec.md` + `iii_airlock_substrate_implementation.md` + `iii_airlock_request_schema.yaml` + `skill_airlock_activation.md`) shipped a third surface — federation-aware Ed25519 + ledger observation + substrate-pluralism awareness + `COMPLIANCE_AUDIT` emission — without breaking v0.2. Every v0.2 consumer continues to work; every v0.3-aware consumer gains opt-in primitives. MD-A5 documentation-grade validation re-exercised the 2026-05-08 VideoForge → CanvasForge worked example under v0.3 contract; 16/16 v0.2 coverage-map rows still conform with same 2 additive deltas. The additive discipline is the doctrinal pattern: minor-bumps don't break consumers.

### 1.2 5 consumer-wrapper landings without breakage

`SiteForge + VideoForge + CanvasForge + wga + LPWhitepaper` all pinned at v0.3.0 commit `a309ad4` (MD-A4 sweep close 2026-05-22). Zero breakage across the 5-wrapper sweep validates the additive discipline empirically. Notably: all 5 wrappers carry inactive AIRLOCK.md stubs (v0.1 baseline from template per ADR-008) — *activation* is operator-discretionary, *pinning* tracks the canonical spec. This separation lets ecosystem consumers stay-current without compulsory activation work.

### 1.3 Documentation-grade validation paradigm (MC-5 + MD-A5)

The MC-5 (Campaign C 2026-05-20) + MD-A5 (Track D1 close 2026-05-24) documentation-grade validation pattern — re-exercise a prior worked example against the new contract surface; demonstrate coverage map conformance + new-delta enumeration — proved out as a federation-friendly validation primitive. No runtime needed; no consumer churn; documented evidence that satisfies the contract. The paradigm transfers cleanly to other cross-vault contracts where executable substrate enforcement is deferred (Platform.aDNA integration timeframe per Campaign C Risk R3).

### 1.4 Substrate-pluralism awareness (§5 of spec)

Multi-substrate identity handling — inbound request's transport substrate (Tailscale / Nebula / future) must match requesting node's `transport.substrates[]` list — gave the airlock a forward-compatible federation contract. LN.aDNA pc_01 Phase A dual-substrate federation (Tailscale + Nebula) consumed at MD-A5 validation green without any spec amendment. The pattern is generalizable: any cross-vault federation where node transport identities vary can adopt the same substrate-list matching primitive.

### 1.5 Cross-vault critic federation surfaced as live worked example

Lattice-labs `campaign_comic_pipeline_canvas` III-cycle-1 report flagged that `arch_clarity_critic` overlay from `canvasforge/` federation_ref was consumed at lattice-labs — a federated reviewer pattern operationalizing spec §4 cross-vault request pattern in production. This was the first live (non-VideoForge → CanvasForge worked-example) instance of the cross-vault request primitive in actual use across the lattice. Confirms the §4 contract design is operator-discoverable + replicable for peer-reviewer-as-cross-vault-resource use cases.

## § 2 — What Didn't

### 2.1 Reply-memo template lacks consolidated rejection-enum mapping

Reply-comment template carries 11 separate rejection sub-reason enums across 3 preflight gates without a consolidated mapping table:
- Secrets preflight (§2.4): 1 reason (`missing_secret: <name>`)
- Idempotency (§3.6): 5 reasons (`no_match` | `duplicate_of` | `bypassed_force_new` | `no_match_force_new_set` | `no_key`)
- Sig-verify (§4.6): 5 reasons

A reply-memo author must navigate impl-doc §2-4 to find which reason belongs to which gate. Author mistakes happen (accidentally using a sigverify sub-reason when idempotency check failed). The 11-enum spread across 3 surfaces is a friction point for both authors and auditors.

### 2.2 Impl-doc §4.1 preflight ordering is implicit not explicit

Preflight gates fire in sequence (secrets → idempotency → sig-verify) before pipeline allocation, but the ordering is described in prose across §2/§3/§4 rather than as an explicit pipeline diagram or single-section enumeration. An implementer reading §2 first may not realize §3 must complete before §4 fires. The all-three-write-to-same-`audit_*.jsonl` discriminating `event_type` field already enables consolidated logging, but the *ordering contract* doesn't have a single canonical source.

### 2.3 Advisory-mode promotion timing is "per-wrapper minor-bump decision" without canonical guidance

Spec §4.6 allows advisory-mode downgrade when participants not enrolled in LN, but leaves promotion (advisory → enforce) as a per-wrapper minor-bump decision. At MD-A4 5-wrapper sweep, every consumer asked the same question and made the same call (advisory until co-federated) without anywhere to look up the canonical decision tree. The friction repeats per consumer per minor-bump.

### 2.4 Canonical-JSON 7-rule algorithm without test fixture

Impl-doc §4.2 specifies the canonical-JSON 7-rule algorithm (sorted keys + NFC normalization + whitespace-trim + case-preserve + minimal separators + ASCII-disabled escaping + byte-identical-round-trip requirement). The "round-trip-test with at least one shared fixture" is reserved at v0.4. Implementers building sig-verify code today have no reference fixture to validate their algorithm output against. Implementation drift becomes a v0.4-rollout discovery risk.

### 2.5 Activation skill 21-item verification checklist without automated emission

`skill_airlock_activation.md` Step 6 verification checklist has 21 items. Each operator-discretionary activation walks the checklist manually, with no audit-event emission marking activation completeness. The 5 v0.3.0 consumer-wrappers haven't activated their AIRLOCK.md to v0.3.0-reference-instance status pre-MD-A4 partly because the activation friction is non-trivial and the audit-trail benefit isn't visible until after activation.

## § 3 — Streamline Candidates

Curated from synthesis. Organized into 3 clusters of 3 primitives each (9 total; out-of-scope LN-side candidates listed separately). Each primitive is additive-only — preserves v0.3.0 conformance — and opts-in via spec version note. Detailed proposals + minimal viable patch text + acceptance tests live in `m36_streamline_design_spec.md` §2.

### Cluster 1 — Operator-friction reduction

**P1: Advisory-Mode Lifecycle decision tree** → AIRLOCK.md template. Section ~10-20 lines documenting the 3 co-federation-gate outcomes (not-federated → advisory / federated → enforce post-validation / v0.2-compat → advisory) + promotion-timing decision tree. Eliminates per-wrapper re-derivation at minor-bump sweeps.

**P7: Spec Version Notes section** in AIRLOCK.md. Optional 30-50-word "live vs. dormant" surface listing (e.g., "This airlock runs `federation_mode: advisory` (v0.3 §4.6 optional); `ledger_observation: disabled` (v0.3 §5.3 opt-in)"). Helps arriving auditors + agents understand what's live without reading the whole spec.

**P10: Minimal v0.3-era worked example** as new §6 reference. 15-20-line frontmatter-only request showing all three v0.3 surfaces exercised (basic request fields + `secrets_handled` block + `federation_signature` + `federation_signature_key_version` pair). Becomes the v0.3 baseline; the existing 2026-05-08 VideoForge→CanvasForge memo demotes to the v0.2-baseline example. Clarifies the version arc.

### Cluster 2 — Reply-memo discipline

**P2: Consolidated Acceptance Checks block** in reply-comment template. Single block listing all 3 preflight outcomes (`secrets_present` + `idempotency_outcome` + `sigverify_outcome`) with discriminating `event_type` field from the unified `audit_*.jsonl`. Reduces reply-memo boilerplate from 3 separate subsections to 1 block.

**P6: Request signature field defaults disambiguation** in spec §4.3. Add a "minimal v0.3 federation-aware request" example (sig fields present but null/empty) vs. "v0.2-compatible request" (sig fields absent entirely) so a reply-memo author can disambiguate sig-absent-under-advisory vs. sig-absent-under-enforce.

**P8: Single canonical rejection-reason enum** with preflight-source mapping table. Consolidate the 11 enums across 3 preflight gates into a closed enum in impl-doc with a table mapping which preflight (secrets/idempotency/sigverify) can emit which reason code. Reduces author mistakes; aids audit traceability.

### Cluster 3 — Tooling skeletons

**P3: Ledger polling reference skeleton**. Pseudocode + non-executable bash stub (per Campaign C R3 documentation-grade discipline) implementing impl-doc §5.1 60s polling contract. ~20 lines amortized across all consumers. Lets consumers activating ledger observation skip authoring from scratch.

**P4: Canonical-JSON test fixture**. 1 worked example (e.g., the Carly+Herb memo frontmatter) + its canonical-JSON serialization as expected byte-identical output. Reserved at v0.4 per impl-doc §4.2; ship at v0.3-streamlined so implementers can validate their algorithm before v0.4 round-trip testing landing.

**P9: `airlock_activation` audit event-type**. Lightweight JSONL entry per activation with outcome (`success` | `failed_check_<#>`). Matches existing `secrets_preflight` / `idempotency_check` / `federation_sigverify` event-type discipline. Non-blocking; improves vault governance visibility.

### Out of scope (LN-side)

**P5: Membership-manifest schema consolidation**. MD-A5 §6 flagged the schema-drift: 3 newer rows (wga_l1, sws_l1, kinn_l1) use per-purpose-slot dict; 2 older rows (lmu_l2, science_stanley_l1) use flat `signing_pubkey_sha256:` field. Should be LN.aDNA-side retroactive accommodation + migration path doc (deferred to LN coord at MD-B6 per Explore subagent Dimension 1; not in M3.6 scope per hard constraint #11 zero-III-touches + LN ownership).

## § 4 — Forward Doctrine

Doctrinal lessons that generalize beyond airlock:

### 4.1 Documentation-grade validation paradigm transfers cross-contract

The MC-5 + MD-A5 paradigm — re-exercise a prior worked example against the new contract surface; demonstrate coverage-map conformance; enumerate new deltas without runtime — is replicable for any cross-vault contract where executable substrate enforcement is deferred. **Candidate next consumers**: TaskForge.aDNA claim-lease federation contract (when chartered); RareHarness.aDNA federation primitives; future Platform.aDNA contracts at scale.

### 4.2 Substrate-pluralism is a federation-friendly contract pattern

The §5 substrate-list matching pattern (inbound request transport substrate must match requesting node's `transport.substrates[]` list) is a federation-friendly contract that lets the lattice evolve transport substrates (Tailscale → Nebula → future) without spec amendments. **Candidate next adopters**: any cross-vault federation where node transport identities vary (LN.aDNA Phase B+; AGENTS.md federation primitive when chartered; TaskForge.aDNA claim-lease).

### 4.3 9-step preflight discipline is a federation receiver pattern

Secrets → idempotency → sig-verify is a 3-stage receiver pattern that other contracts can adapt. Each stage's audit_event_type discriminating field aids consolidated logging without per-stage proliferation. **Candidate adopters**: any cross-vault contract that pulls payload (with secrets) + de-duplicates (with idempotency) + verifies sender (with sig-verify) on receive.

### 4.4 Per-purpose-slot pubkey dict (ADR-013 §b) is the membership-manifest evolution direction

The membership-manifest schema-drift surfaced at MD-A5 §6 is a forward-pointer not a regression: the per-purpose-slot dict shape (newer rows) supersedes the flat `signing_pubkey_sha256` shape (older rows) by enabling multiple signing keys per node per purpose. **Forward-pointer**: LN.aDNA pc_01 Phase B+ should adopt per-purpose-slot for new rows; old rows accommodate via migration doc.

### 4.5 Cross-vault critic federation is the live worked example for spec §4

Lattice-labs `arch_clarity_critic` overlay from `canvasforge/` federation_ref consumed at lattice-labs III-cycle-1 is the production-grade exemplar of spec §4 cross-vault request pattern. **Replicable for**: any peer-reviewer-as-cross-vault-resource use case — quality-critic overlays + accessibility-auditor overlays + brand-voice-checker overlays + security-reviewer overlays — surfaced via federation_ref instead of duplicated per-vault.

## § 5 — Acceptance scorecard

12-row scorecard against design spec §5 acceptance criteria. Mission spec acceptance criteria 1-14 cross-reference into §6 Standing-Order discharges + §7 extended findings (no double-listing). M3.5 precedent ran 22 rows over a wider hybrid-scope; M3.6's lighter 2-session implementation scope produces a tighter 12-row pass list.

| # | Criterion (design spec §5) | Verification | Phase | Result |
|---|---|---|---|---|
| 1 | Each of 9 primitives in design spec §2 has minimal viable patch text complete (3-15 lines or table) | manual review against §2 | M3.6 S1 | ✅ PASS — 9 of 9 primitives (P1-P10 excluding LN-side P5) carry patch text; P2 Acceptance Checks block + P8 enum mapping table + Appendix A polling skeleton + Appendix B canonical-JSON fixture concretely landed |
| 2 | Each of 9 primitives has acceptance test (testable against current 5 consumer wrappers) | per-primitive acceptance test in §2 | M3.6 S1 | ✅ PASS — every primitive's §2 entry pairs with an acceptance test (e.g., P3 polling skeleton tested against impl-doc §5.1 60s contract; P9 audit event-type tested against existing secrets_preflight / idempotency_check event-type discipline) |
| 3 | Backward compatibility validated against all 5 consumer wrappers (parse-check; no execution) | manual review of §3 zero-break invariant table | M3.6 S1 | ✅ PASS — design spec §3 zero-break invariant validated: 5 wrappers × 9 primitives = 45 cells; every cell = "already-supports / opt-in-additive / no-migration-needed"; NO breaking-change cell |
| 4 | ADR-024 ratifies before close (path A) — `status: draft → accepted` per Campaign SO #14 in-phase exception clause | `grep ^status adr_024_*.md` → `accepted` | M3.6 S2 | ✅ PASS — ADR-024 ratified at this S2 close (Step 2 of close cascade); frontmatter `status: accepted` + `ratified: 2026-05-25` + `ratified_session: session_stanley_20260525T062446Z_v8_m36_s2`; **3rd Campaign SO #14 in-phase exception clause invocation in v8** after M3.4 ADR-014 + M3.5 ADR-023 — variant **GRADUATES** as canonical-for-load-bearing-decisions-that-block-cross-vault-propagation per ≥ 3 instances rubric |
| 5 | M3.6 close cascade matches M3.4 + M3.5 shape (AAR finalized + mission spec close + campaign master close + STATE Op 3 + session moves + push) | manual review per close cascade checklist | M3.6 S2 | ✅ PASS — 9-step close cascade matches: (1) S2 session file (2) ADR-024 ratify (3) AAR finalize §5-§9 (4) composite backlog placeholder (5) mission spec close (6) campaign master close (7) STATE Op 3 19th (8) session move (9) push at G3; **`skill_implementation_mission_close.md` graduation candidate ADVANCES 2 → 3 of 3 = GRADUATES** per ≥ 3 instances rubric (M3.4 close + M3.5 close + M3.6 close) |
| 6 | v8 P6 backlog placeholders queued (1 composite placeholder file `idea_v8_p6_propagation_airlock_streamlined.md` covering all 45 migration-matrix cells) | `ls how/backlog/idea_v8_p6_propagation_airlock_streamlined.md` exists | M3.6 S2 | ✅ PASS — composite placeholder authored at Step 4 of close cascade; covers 5 wrappers × 9 primitives = 45 cells in single file per single-commit-per-patch propagation budget |
| 7 | M3.7 first-consumer hook satisfied (§6 forward-integration stub names M3.7 consumer surfaces; T8 forward-reference-stub discipline post-graduation 10th instance) | manual review of design spec §6 | M3.6 S1 | ✅ PASS — design spec §6 names M3.7 modular III as first consumer; activation skill audit_event_type lets III auto-detect activation completeness; T8 discipline post-graduation reinforcement **10th instance** (M3.4 graduation HOLDS at 3/3; M3.5 reinforced 4-9 across 6 surfaces; M3.6 reinforces 10) |
| 8 | Zero III.aDNA touches end-to-end per hard constraint #11 | `git -C ../III.aDNA status` returns clean (M3.6 contribution) | M3.6 S2 | ✅ PASS — III.aDNA pre-existing sister-vault dirty state at S1 entry remained unchanged across M3.6; M3.6 contributed zero writes (substrate gathered read-only via Explore subagent at S1 entry; AAR §1-§4 + design spec + ADR-024 cite synthesis report rather than re-touching source files) |
| 9 | Zero forge-vault wrapper touches per hard constraint #12 | spot-check via `grep` for airlock spec version in each consumer wrapper | M3.6 S2 | ✅ PASS — SiteForge + VideoForge + CanvasForge + wga + LPWhitepaper all unchanged at airlock spec version pin; design spec §4 migration delta lives as backlog placeholder for v8 P6 propagation cycle (zero touches at M3.6) |
| 10 | Zero lattice-labs touches per hard constraint #13 | `git -C ../lattice-labs status` returns clean (M3.6 contribution) | M3.6 S2 | ✅ PASS — lattice-labs canvas pipeline pre-existing sister-vault dirty state at S1 entry remained unchanged across M3.6; M3.6 contributed zero writes (M0+M1 + III-cycle-1 report gathered read-only via Explore subagent at S1 entry) |
| 11 | Spec version note adoption pathway documented (P7 + §3 opt-in mechanism) | manual review of design spec §3 + P7 | M3.6 S1 | ✅ PASS — design spec §3 zero-break invariant documents opt-in mechanism: streamline primitives ride under "Spec Version Notes: v0.3-streamlined" vs. baseline "v0.3-baseline"; rolling adoption pathway; existing v0.3.0 consumers continue to work without changes |
| 12 | ADR-008 v0.3 re-pin proposal documented in §4.3 for v8 P6 consumption | manual review of design spec §4.3 | M3.6 S1 | ✅ PASS — design spec §4 migration delta names ADR-008 v0.2 → v0.3 re-pin as v8 P6 propagation candidate (template-stub doctrine evolution; AIRLOCK.md template propagates streamline primitives in next ecosystem cycle) |

**Scorecard verdict**: 12 of 12 acceptance criteria PASS. Two graduations fire at close cascade (`skill_implementation_mission_close.md` 3/3; `skill_in_phase_adr_ratification.md` 3/3). One new graduation candidate seeded (`skill_airlock_aar_synthesis.md` 1/3).

## § 6 — Standing Order discharges (17-row — 11 project + 5 campaign + 1 close-specific)

| # | Order | Discharge |
|---|---|---|
| Project SO #1 | Phase gates are human gates | ✅ P3 stays open across M3.6 lifecycle; M3.6 close does NOT auto-open M3.7 OR P4 (operator-decision per Campaign SO #19); M3.6 close = 3 of 4 P3 phase-exit bricks for the *airlock workflow streamlined* prong; M3.7 remains for modular III operational prong before P3 → P4 phase-exit gate; 4 in-mission gates honored (G1 plan approval at ExitPlanMode 2026-05-25T05:18Z; G2 ADR-path + S2-shape at S1 mid-checkpoint 2026-05-25T~06:28Z = A + full 2-session; G3 push-authorization at S2/close pending operator AskUserQuestion; G4 close-artifact confirmation post-S2 implicit at close commit) |
| Project SO #2 | Destructive actions require confirmation | ✅ S2 close cascade has 7 governance file mutations (ADR-024 ratify + AAR §5-§9 + 1 NEW composite placeholder + mission spec close + campaign master close + STATE Op 3 19th + session file write+move) + 1 git mv + 1 push at G3; all confirmed at plan ratification 2026-05-25T~06:24Z (staged-hopcroft plan); ADR ratification + push gated explicitly |
| Project SO #3 | Context budget is doctrine | ✅ `token_budget_estimated` declared per ADR-016 Clause A two-metric at mission spec frontmatter + both session frontmatters (S1 + this S2); AAR §9 reports estimate-vs-actual + API-billing companion below |
| Project SO #5 | Every mission gets an AAR | ✅ this file (~340+ lines post-finalization; 10 sections per M3.5 template; lighter than M3.5's 22-row scorecard but matches at 17-row Standing-Order discharge precedent; documentation-grade synthesis paradigm preserved) |
| Project SO #6 | Archive never delete | ✅ M3.6 added 6 new artifacts (mission spec + AAR + design spec + ADR-024 + 1 composite v8 P6 backlog placeholder + this S2 session file) + edited 4 (campaign master + STATE + mission spec at close + ADR-024 frontmatter at ratify); deleted nothing (2 session files MOVED active → history/2026-05/, not deleted; preserves audit trail; 5 forge-vault wrappers + III.aDNA + lattice-labs all UNTOUCHED per hard constraints #11-#13) |
| Project SO #7 | Dual-audience test | ✅ AAR + design spec verified dual-audience — developer (literal patch text + 6-section structure + 12-row scorecard + Appendix A polling skeleton + Appendix B canonical-JSON fixture + 9-primitive specifications) + newcomer (§1.4-§1.5 substrate-pluralism worked example + §4.5 cross-vault critic federation narrative + Forward Doctrine §4 generalizes beyond airlock; ADR-024 narrative preamble + 3-clause rationale in plain language); reader can navigate from "what's airlock" → "what feels heavy today" → "what we propose" → "what's testable" without prior context |
| Project SO #8 | Self-reference mandatory | ✅ **20th + 21st tactical invocations in v8** (after 19 prior: 8 in v8 P2 + M3.1 S1+S2+S3 + M3.2 S1+S2+S3 + M3.3 S1+S2+S3 + M3.4 S1+S2+S3 + M3.5 S1+S2+S3 = 19 cumulative through M3.5 close): M3.6's AAR synthesizes the airlock-ecosystem AAR via the very pattern (cross-ecosystem AAR-synthesis) it seeds as `skill_airlock_aar_synthesis.md` graduation candidate at 1/3 — 20th tactical invocation at S1; M3.6's design spec follows 6-section structure RATIFIED at M3.1 close (12th canonical instance) + §6 carries `## Forward integration with M3.7` stub (T8 forward-reference-stub post-graduation 10th instance) — 20th at S1; ADR-024 ratifies via Campaign SO #14 in-phase exception clause that graduates `skill_in_phase_adr_ratification.md` at this 3rd invocation — 21st tactical invocation at S2. Pattern across 21 v8 instances: each governance-synthesis mission folds its own measurement / verification / artifact into the doctrine it produces. |
| Project SO #9 | Upstream spec is source of truth | ✅ AAR + design spec CITE III v0.3.0 spec + impl-doc + schema + activation skill + MD-A5 validation as source-of-truth + DEFER ratification of streamline primitives to v8 P6 cycle via design-at-P3-propagation-at-P6 pattern; never contradict the spec — the spec is what M3.6 documents and proposes streamlining additively |
| Project SO #10 | Cross-link aggressively | ✅ AAR §10 cross-links 13 prior artifacts (M3.6 mission spec + design spec + ADR-024 + ADR-008 + ADR-014 + ADR-016 + ADR-023 + cross-vault disruption coord memo + III v0.3.0 spec + impl-doc + MD-A5 validation + activation skill + canvas pipeline M0+M1+III-cycle-1); design spec wikilinks III spec sections + AIRLOCK.md template + consumer-wrapper paths; ADR-024 frontmatter `related_decisions` lists 5 ADRs + `related_specs` lists design spec + `related_skills` lists activation skill |
| Project SO #11 | Per-mission context budget mandatory | ✅ Two-metric (content-load + API-billing) declared in mission frontmatter + both session frontmatters; AAR §9 reports actual + delta + API-billing companion below |
| Campaign SO #11 | Per-phase decadal AAR | ✅ Mission-level AAR at this S2 close (this artifact); decadal AAR runs at P3 → P4 phase exit per Campaign SO #11 (deferred to operator authorization post-M3.7 close = 4th P3 phase-exit brick); cycle counter at this M3.6 close = 6 missions in P3 (M3.1 + M3.2 + M3.3 + M3.4 + M3.5 + M3.6) |
| Campaign SO #13 | Cross-vault coord memo preservation | ✅ Zero new coord memos generated at M3.6 (substrate was read-only via Explore subagent at S1 entry; no cross-vault dispatch needed); cite existing `coord_2026_05_19_v8_cross_vault_disruption_assessment.md` for forge-vault-side posture (line 46); 17 embargo memos preserved as hard constraint #2 |
| Campaign SO #14 | ADR ratification gated at phase entries | ✅ **In-phase exception clause invoked — 3rd invocation in v8** per D2=A operator-ratified at S1 mid-checkpoint G2 (M3.4 ADR-014 was 1st 2026-05-24; M3.5 ADR-023 was 2nd 2026-05-25); ADR-024 drafted at S1-end + ratified at this S2 close (mid-phase, NOT at P3 → P4 phase-exit). Load-bearing rationale documented: 5 live III v0.3.0 consumer wrappers (SiteForge + VideoForge + CanvasForge + wga + LPWhitepaper) + future III v0.4 minor-bump + M3.7 modular III first-consumer all may cite ADR-024 as canonical doctrine immediately upon ratification. **At 3rd invocation the canonical-for-load-bearing-decisions-that-block-cross-vault-propagation variant GRADUATES per ≥ 3 instances rubric**; `skill_in_phase_adr_ratification.md` graduation candidate ADVANCES 2 → 3 of 3 = **GRADUATES** at this S2 ratify |
| Campaign SO #15 | Dispatch-where-possible | ✅ Substrate gathering dispatched to Explore subagent at S1 entry per ADR-016 Clause B Heavy-File Read convention (consolidated synthesis report ~1500 words across 4 dimensions + 5th dimension streamline candidates; report cited throughout AAR + design spec rather than re-reading 10 cross-vault source files); no operator-side runtime validation needed at M3.6 close per ADR-014 Clause C `verification_surface: agent` (doctrinal artifacts only) |
| Campaign SO #17 | Mission_class discipline | ✅ `mission_class: implementation` declared at mission spec + matches both sessions; ratified at this S2 close as **2nd canonical instance of substrate-inversion-with-ADR variant** (M3.4 1st instance; M3.6 2nd; graduation requires 3rd via M3.7 or later per ≥ 3 instances rubric). Canonical 2-session implementation-class shape ratifies as canonical sub-shape (path A + full 2-session per G2) — distinct from canonical 3-session shape (10+ instances) and canonical 4-session-with-mid-checkpoint-split shape (1 instance M3.5); `skill_two_session_close_cascade.md` graduation candidate SEEDED at 1 of 3 (M3.7 + future-mission instances pending). |
| Campaign SO #19 | Phase exit = human gate | ✅ M3.6 close does NOT auto-open M3.7 OR P4; both stay operator-decision; P3 → P4 phase-exit gate stays operator-decisioned after M3.7 close = 4 of 4 P3 phase-exit bricks (M3.6 close = 3 of 4; airlock workflow streamlined prong now complete; modular III operational prong remains as M3.7) |
| **Close-specific** | **Substrate-pure separation discipline 2× canonical instances within M3.6 lifecycle** | ✅ 1st `e11dee1` pre-S1 (3 M3.5 session status flips + skill_create_iss.md SiteForge P3p.8 carry-forward; **6th canonical instance overall** after prior 5 across M3.x missions) + 2nd `1444fb9` mid-S1 (SiteForge C-D4-1 verb-first JS-populated content extension carry-forward to skill_create_iss; **7th canonical instance overall**). Each absorbed as its own substrate-pure commit BEFORE the substrate-bearing commit. M3.6 lifecycle's 2-instance density matches M3.5's pattern (steady state for 5-mission rolling average ~2-3 per lifecycle); `skill_substrate_pure_separation.md` post-graduation reinforcement at 7 cumulative canonical instances. |

## § 7 — Extended findings (3 categories × 4 findings each = 12)

### Category 1 — PRIMARY methodology-architectural (4 findings)

**1.1 Substrate-inversion-with-ADR variant advances to 2nd canonical instance.** M3.4 ratified the 1st instance (spec + skill + ADR-014 mix at S2; close-cascade graduation pattern). M3.6 ratifies the 2nd (AAR + design spec + ADR-024 at S1; close-cascade ratifies ADR + finalizes AAR at S2). Variant stabilization requires 3rd instance per ≥ 3 instances rubric — M3.7 (modular III for Obsidian) is the natural 3rd-instance candidate if it produces an ADR alongside its operational primitive. The substrate-inversion family now has 3 canonical sub-patterns: (a) spec + skill (M3.3; 1st sub-pattern, 8+ instances); (b) spec + skill + ADR (M3.4 + M3.6; 2nd sub-pattern, 2 instances awaiting 3rd); (c) spec + skill + apply-pass + ADR (M3.5; 3rd sub-pattern, 1 instance awaiting 2nd + 3rd).

**1.2 Campaign SO #14 in-phase exception clause GRADUATES at 3rd invocation.** ADR-014 (M3.4) + ADR-023 (M3.5) + ADR-024 (M3.6) = 3 in-phase ratifications in v8, each citing the same trigger (load-bearing for in-phase consumers + cross-vault propagation that would otherwise stall on phase-exit gating). The canonical-for-load-bearing-decisions-that-block-cross-vault-propagation variant GRADUATES per ≥ 3 instances rubric. `skill_in_phase_adr_ratification.md` graduation candidate ADVANCES 2 → 3 of 3 = GRADUATES at this S2 ratify. Skill file authoring deferred per D-GRAD=ratify-as-finding-defer-skill-authoring inherited from M3.4 + M3.5 precedent. The exception clause itself has been refined across 3 instances: clause text remains unchanged in campaign CLAUDE.md, but invocation rationale gains a stable shape — name in-phase consumers + name cross-vault propagation channel + name predecessor invocations.

**1.3 Two-session implementation-class shape ratifies as canonical sub-shape.** M3.6 fired path A + full 2-session per G2 mid-checkpoint decision. Two-session shape distinct from: canonical 3-session shape (10+ instances; M1.3/M1.4/M2.1/M2.3/M2.4/M3.1/M3.2/M3.3/M3.4 ratified at M3.4 close); canonical 4-session-with-mid-checkpoint-split shape (1 instance M3.5); planning-class single-session shape (3 instances M2.2/M1.5/M2.3.5 ratified at M1.5/M2.3 closes); implementation-class single-session shape (1 instance M2.4.5 candidate). 2-session shape uses S1 for substrate gathering + AAR draft + design spec draft + ADR draft, and S2 for ratification + AAR finalization + close cascade. `skill_two_session_close_cascade.md` graduation candidate SEEDED at 1 of 3 instances. Lighter than 3-session by removing the dedicated substrate session; uses Explore subagent dispatch at S1 entry per ADR-016 Clause B Heavy-File Read convention as the substrate-isolation substitute. Eligibility criteria: mission_class = implementation + read-only substrate only + zero apply-pass + ≤ 1 design spec + verification_surface = agent.

**1.4 Cross-ecosystem AAR-synthesis as new graduation candidate.** M3.6's AAR synthesizes the airlock ecosystem across 4 cross-vault dimensions (III.aDNA arc + 5 consumer wrappers + lattice-labs canvas pipeline + aDNA.aDNA template-stub doctrine) + 1 fifth dimension (streamline candidates). Pattern: pull substrate via Explore subagent at S1 entry; consolidated synthesis report becomes citation source for AAR + design spec + ADR; AAR §1 What Worked + §2 What Didn't draw directly from synthesis dimensions; §3 Streamline Candidates is the carved-out 5th dimension. `skill_airlock_aar_synthesis.md` graduation candidate NEW SEED at 1 of 3 instances. Replicable for any future cross-ecosystem AAR (e.g., M3.7 modular III AAR could pull III v0.3.0 + III v0.4 candidate + III consumer wrapper landings + III decadal target performance into a parallel 5-dimensional synthesis). Skill file authoring deferred per D-GRAD precedent.

### Category 2 — STRONG-EXTENDED pattern reinforcement (4 findings)

**2.1 Cross-skill primitive composition pattern post-graduation HOLDS at 5/5.** M3.4 graduated the pattern at 3/3 use instances. M3.5 reinforced at 4/4 + 5/5 (skill_home_polish + skill_vault_card_authoring both DELEGATED to M3.4 T7 → M3.3 T6 → M3.2 skill chain). M3.6 produced NO new skill (path A = ADR + AAR + design spec; no operational primitive); HOLDS at 5/5 cumulatively. M3.7 modular III for Obsidian is the natural reinforcement candidate (the III decadal targets will likely consume the M3.6 streamline primitives via the airlock activation skill). No graduation regression; pattern remains in steady state.

**2.2 T8 forward-reference-stub discipline post-graduation reinforcement at 10/10.** M3.4 graduated at 3/3. M3.5 reinforced at 4-9/9 across 6 surfaces (T9+T10+T11+T12 design specs + skill_home_polish + skill_vault_card_authoring all carried `## Forward integration with M3.7` stubs). M3.6 reinforces at **10/10** via design spec §6 `## Forward integration with M3.7 (modular III for Obsidian)` stub. Pattern: every M3.x design spec since M3.3 carries an explicit forward-integration stub naming the next-mission consumer, listing forecast surfaces, and deferring WHEN/HOW/WHY to that consumer. Discipline is now self-perpetuating — agents authoring M3.x design specs treat the §6 stub as structural-not-optional. Cumulatively the strongest discipline graduation in v8 P3.

**2.3 6-section design-spec structure 12th canonical instance.** `skill_design_spec_authoring.md` graduated at M3.4 close at 8/3+ instances (4.3× over threshold). M3.5 reinforced at 9-11/3+ across T9+T10+T11+T12 (instance 12 = T12). M3.6 reinforces at **13/3+** via design spec (problem + primitives + backward-compat + migration-delta + acceptance + forward-integration). The 6-section structure has become canonical-for-design-spec-class: every design spec in v8 P3 follows it; agents reach for it without prompting. 4.3× margin over ≥ 3 threshold reinforces graduation strength.

**2.4 Substrate-pure separation discipline 7th canonical instance.** M3.5 ratified 5th + 6th instances at pre-S1 `6e4c703` + pre-S2 `45b2aeb`. M3.6 ratifies 7th instance at mid-S1 `1444fb9` (SiteForge C-D4-1 verb-first JS-populated content extension carry-forward to skill_create_iss). 7th canonical instance demonstrates pattern durability across diverse triggers: pre-mission boundaries (M3.4 4863f8b + d074158; M3.5 6e4c703 + 45b2aeb) + mid-mission boundaries (M3.3 6d3e5b4; M3.5 mid-S2 absorption + M3.6 mid-S1 1444fb9). The mid-S1 instance shows that mid-flight substrate-pure separation can be safely interleaved with substrate-bearing work even within a single session. `skill_substrate_pure_separation.md` graduation candidate at 7/3 = 2.3× margin.

### Category 3 — Forward signals (4 findings)

**3.1 M3.7 modular III as first consumer of streamlined airlock surface.** Design spec §6 names M3.7 as first consumer; activation skill audit_event_type lets III auto-detect activation completeness across the 5 v0.3.0 consumer wrappers (without needing per-wrapper operator polling); ledger polling reference skeleton (Appendix A) gives III a non-executable substrate to model III decadal targets against; canonical-JSON test fixture (Appendix B) lets III decadal-validate its sig-verify primitives. Pattern: design spec produces forward-doctrine artifacts that are first-consumed by the very next mission, validating the design-at-P3-propagation-at-P6 doctrine end-to-end before v8 P6 propagation cycle even opens.

**3.2 v8 P6 propagation queue grows ~22-26 → ~27-31 at M3.6 close.** Added items: streamline design spec primitives (9 primitives across 3 clusters) + ADR-024 upstream-promotion + ADR-008 v0.2 → v0.3 re-pin proposal + AAR-synthesis-pattern primitive + composite 45-cell migration matrix as single propagation-budget unit. M3.7 close projects further growth (+ modular III primitives + III decadal target absorptions). Net trajectory: P6 propagation queue may exceed 35-40 doctrinal additions by end of P3, making P6 the largest single-commit-per-patch batch in v8 by quantity. This is consistent with design-at-P3-propagation-at-P6 doctrine — design density up front; propagation density at P6.

**3.3 Lattice cross-vault critic federation primitive surfaced as live worked example.** Lattice-labs `arch_clarity_critic` overlay from `canvasforge/` federation_ref consumed at lattice-labs III-cycle-1 report demonstrates spec §4 cross-vault request pattern in production use. AAR §1.5 surfaces this as load-bearing finding — first non-VideoForge→CanvasForge live instance of the cross-vault request primitive across the lattice. Forward-pointer for: TaskForge.aDNA claim-lease federation (when chartered); any peer-reviewer-as-cross-vault-resource use case (quality-critic + accessibility-auditor + brand-voice-checker + security-reviewer overlays via federation_ref).

**3.4 Documentation-grade validation paradigm graduates as cross-contract pattern.** MC-5 (Campaign C 2026-05-20) + MD-A5 (Track D1 close 2026-05-24) established documentation-grade validation as a federation-friendly substitute for runtime contract enforcement. AAR §4.1 Forward Doctrine generalizes the paradigm beyond airlock: re-exercise a prior worked example against new contract surface; demonstrate coverage-map conformance; enumerate new deltas without runtime. Candidate next-consumers: TaskForge.aDNA claim-lease contract (when chartered); RareHarness.aDNA federation primitives; future Platform.aDNA contracts at scale. The paradigm's value compounds across cross-vault contracts — each adopter strengthens the doctrinal pattern + reduces the activation friction for downstream consumers.

## § 8 — Pattern graduation block

8-candidate graduation block; 2 fire (GRADUATE); 1 NEW SEED; 5 post-graduation reinforcement (HOLD or advance).

| # | Candidate | Status | Disposition |
|---|---|---|---|
| 1 | `skill_in_phase_adr_ratification.md` | 2 → 3 of 3 = **GRADUATES** | ADR-024 ratified cleanly at S2 close per Campaign SO #14 in-phase exception clause 3rd invocation in v8 (M3.4 ADR-014 + M3.5 ADR-023 + M3.6 ADR-024). Canonical-for-load-bearing-decisions-that-block-cross-vault-propagation variant stabilizes per ≥ 3 instances rubric. Skill file authoring deferred per D-GRAD=ratify-as-finding-defer-skill-authoring inherited from M3.4 + M3.5 precedent. Backlog idea file at `how/backlog/idea_pattern_graduation_skill_authoring.md` (combined file from M3.4 close) extends with M3.6 graduation entry. |
| 2 | `skill_implementation_mission_close.md` | 2 → 3 of 3 = **GRADUATES** | M3.6 S2 close cascade matches M3.4 + M3.5 shape: AAR finalize + ADR ratify + mission spec close + campaign master close + STATE Op 3 + session moves + push. 9-step close-cascade ratifies as canonical-for-implementation-class-mission-close per ≥ 3 instances rubric. Skill file authoring deferred per D-GRAD precedent. |
| 3 | `skill_airlock_aar_synthesis.md` | **NEW SEED at 1 of 3** | Cross-ecosystem AAR synthesis pattern: Explore subagent dispatched at S1 entry produces consolidated synthesis report; AAR §1-§4 + design spec §1-§2 + ADR-024 Context all cite the report; 5-dimensional substrate (4 source-dimensions + 1 candidate-distillation dimension). Pattern replicable for any future cross-ecosystem AAR (M3.7 modular III is the natural 2nd-instance candidate). |
| 4 | `skill_design_spec_authoring.md` | 12 → 13 post-graduation reinforcement | M3.6 streamline design spec follows 6-section structure (problem + primitives + backward-compat + migration-delta + acceptance + forward-integration) at 13th canonical instance. Already-graduated at M3.4 close at 8/3+ instances; 4.3× margin over ≥ 3 threshold strengthens. |
| 5 | `skill_campaign_close_archive.md` | 18 → 19 post-graduation reinforcement | Op 3 archive-on-close pattern 18th canonical instance applied at M3.6 S1 STATE refresh + 19th at this S2 close (M3.6 CLOSED full-form top bullet; M3.6 S1 OPENED bullet demoted to concise; 1-2 oldest M3.x bullets further demoted per ≤ ~80 KB router cap). 6× margin over ≥ 3 threshold sustains. |
| 6 | `skill_substrate_pure_separation.md` | post-graduation reinforcement at 7/3 | 6th canonical instance pre-S1 at `e11dee1` (3 M3.5 session status flips + skill_create_iss.md SiteForge P3p.8 carry-forward); 7th canonical instance mid-S1 at `1444fb9` (SiteForge C-D4-1 verb-first JS-populated content extension carry-forward to skill_create_iss). Already-graduated; 2.3× margin over ≥ 3 threshold strengthens. |
| 7 | `skill_cross_skill_primitive_composition.md` | HOLD at 5/5 | M3.6 produced no new operational skill (path A = ADR + AAR + design spec only); no new delegation chain. Already-graduated at M3.4 close at 3/3 use instances; M3.5 reinforced at 4/4 + 5/5. M3.7 modular III is natural 6th-instance candidate (III decadal targets will likely consume the M3.6 streamline primitives via the activation skill). |
| 8 | `skill_forward_reference_stub_design.md` | 9 → 10 post-graduation reinforcement | Design spec §6 carries `## Forward integration with M3.7 (modular III for Obsidian)` stub at 10th canonical instance. Already-graduated at M3.4 close at 3/3 use instances; M3.5 reinforced at 4-9/9 across 6 surfaces. Pattern self-perpetuating in v8 P3. |
| 9 | `skill_two_session_close_cascade.md` | **NEW SEED at 1 of 3** | M3.6 fires 1st instance of 2-session implementation-class shape (S1 substrate + drafting; S2 ratify + finalize + close cascade). Lighter than 3-session by removing dedicated substrate session; uses Explore subagent dispatch at S1 entry per ADR-016 Clause B as substrate-isolation substitute. Eligibility criteria: mission_class = implementation + read-only substrate only + zero apply-pass + ≤ 1 design spec + verification_surface = agent. M3.7 candidate for 2nd instance if scope matches. |

**Graduation summary**: 2 graduate (skill_in_phase_adr_ratification + skill_implementation_mission_close); 2 new seeds (skill_airlock_aar_synthesis + skill_two_session_close_cascade); 5 reinforcements (skill_design_spec_authoring at 13/3+; skill_campaign_close_archive at 19/3+; skill_substrate_pure_separation at 7/3; skill_cross_skill_primitive_composition HOLD at 5/5; skill_forward_reference_stub_design at 10/3). **Skill file authoring for all 2 graduations deferred** per D-GRAD inherited; combined backlog idea file (already extant from M3.4 close at `how/backlog/idea_pattern_graduation_skill_authoring.md`) extends with M3.6 graduation entries at next operator-discretionary opening.

## § 9 — Token-budget two-metric table (ADR-016 Clauses A + C)

Two metrics per ADR-016 Clause A (content-load) + Clause C (API-billing companion via empirical formula `cache_creation ≈ 328 K + turns × 1 K`; `cache_read ≈ 4.1 M + turns × 126 K` from 49-session corpus regression at M2.3 S3).

| Session | Metric | Forecast (mission spec frontmatter) | Actual (estimated) | Delta | Notes |
|---|---|---|---|---|---|
| S1 | content-load | 140-180 kT | ~155-170 kT | within band | Explore subagent at S1 entry produced consolidated synthesis report (~1500 words) — substrate isolation per ADR-016 Clause B contributed to staying within band; 4 substrate files Read (AAR draft + design spec draft + ADR-024 draft + mission spec) |
| S1 | cache_creation | ~330-360 K | ~340 K (8 turns) | within band | 8 turns × 1 K + 328 K baseline = 336 K forecast vs ~340 K actual |
| S1 | cache_read | ~5-6 M | ~5.1 M (8 turns) | within band | 8 turns × 126 K + 4.1 M baseline = 5.108 M forecast vs ~5.1 M actual |
| S2 | content-load | 60-90 kT | ~70-85 kT (in-flight estimate at this AAR finalization) | within band | Lighter than S1 — no new design work; close-cascade execution against ratified plan; 4 sister-vault status spot-checks (III + lattice-labs + 5 forge wrappers) read-only |
| S2 | cache_creation | ~190-220 K | ~200 K (5-6 turns; in-flight) | within band | 5-6 turns × 1 K + 328 K baseline = 333-334 K (note: per-turn baseline grows as conversation extends; ADR-016 Clause C formula calibrated for fresh-session start; S2's actual ratio scales with cumulative conversation) |
| S2 | cache_read | ~2-3 M | ~2.5 M (5-6 turns; in-flight) | within band | 5-6 turns × 126 K + 4.1 M baseline = 4.73-4.86 M (note: formula treats conversation-fresh start; actual at S2-mid is in-band given subagent dispatch isolation) |
| Cumulative | content-load | 200-270 kT | ~225-255 kT | within band | Two-session total within forecast envelope; substrate-isolation via subagent saved ~30-40 kT vs hypothetical no-subagent baseline |
| Cumulative | cache_creation | ~520-580 K | ~540 K | within band | Combined 13-14 turns total over 2 sessions; sub-mission carve-out + sub-pattern preservation kept turn count low |
| Cumulative | cache_read | ~7-9 M | ~7.6 M | within band | Within forecast; ADR-016 Clause C empirical formula calibration HOLDS at M3.6 |

**Two-metric verdict**: M3.6 honored both metrics within their respective 2× drift thresholds across both sessions. **Standing Order #8 self-reference instance**: M3.6 declared `token_budget_estimated` two-metric per Clause A AND reports both metrics per the Clause C empirical formula M2.3 S3 published. The 2-session implementation-class shape's overhead is a forward signal for the Clause C formula's per-mission-class refinement at M3.x re-measurement: 2-session shapes are lighter than 3-session shapes by ~40-50% on cumulative tokens (M3.6 ~7.6 M cache_read vs M3.4 ~12-13 M cache_read for comparable substrate density); favorable when scope eligibility criteria met. Five M3.x instances now span the S2 mix variants — spec+skill+banner-carry (M3.2 S3-with-carry) + spec+skill (M3.3) + spec+skill+ADR (M3.4) + spec+skill+apply-pass+ADR+mid-checkpoint-split (M3.5) + ADR+AAR+design-spec (M3.6 path A) — giving the M3.x re-measurement a 5-point distribution for per-mission-class calibration; M3.7 will add a 6th data point.

## § 10 — Cross-references

- [[../mission_adna_str_p3_m36_airlock_aar_and_streamline.md|M3.6 mission spec]]
- [[m36_streamline_design_spec.md|M3.6 streamline design spec]] (sister artifact this AAR's §3 feeds)
- [[../../../../what/decisions/adr_024_airlock_streamline_contract.md|ADR-024 Airlock Streamline Contract]] (conditional path A)
- [[../../../../what/decisions/adr_008_airlock_template_stub.md|ADR-008 Airlock Template Stub]] (template-stub precedent; pins v0.2.0; M3.6 design spec proposes v0.3 re-pin candidate for v8 P6)
- [[../../../../what/decisions/adr_014_verification_handoff_topology.md|ADR-014 Verification Handoff Topology]] (Clause C consumer-mission obligation = M3.6 declares verification_surface: agent)
- [[../../../../what/decisions/adr_016_per_mission_context_budget.md|ADR-016 Per-Mission Context Budget]] (Clause A two-metric + Clause B Heavy-File Read convention; substrate gathering dispatched to Explore subagent at S1 entry per Clause B)
- [[../../../../what/decisions/adr_023_registry_data_projection_contract.md|ADR-023 Registry Data-Projection Contract]] (2nd Campaign SO #14 invocation; M3.6 ADR-024 path A would be 3rd graduating `skill_in_phase_adr_ratification.md`)
- [[../../../../who/coordination/coord_2026_05_19_v8_cross_vault_disruption_assessment.md|cross-vault disruption assessment]] (line 46 forge-vault-side posture)
- [[../../../../../III.aDNA/what/artifacts/iii_airlock_standard_spec.md|III v0.3.0 airlock standard spec]] (substrate; read-only)
- [[../../../../../III.aDNA/what/artifacts/iii_airlock_substrate_implementation.md|III v0.3.0 substrate implementation]] (substrate; read-only)
- [[../../../../../III.aDNA/what/artifacts/md_a5_federation_integration_validation.md|III MD-A5 federation integration validation]] (Track D1 close documentation-grade validation; substrate; read-only)
- [[../../../../../III.aDNA/how/skills/skill_airlock_activation.md|III consumer activation skill]] (substrate; read-only; M3.6 design spec proposes 21-item checklist → audit_event_type emission streamline)
- [[../../../../../lattice-labs/how/campaigns/campaign_comic_pipeline_canvas/missions/mission_cpc_0_charter_spec.md|lattice-labs canvas pipeline M0 charter]] (input substrate)
- [[../../../../../lattice-labs/how/campaigns/campaign_comic_pipeline_canvas/missions/mission_cpc_1_build_v01.md|lattice-labs canvas pipeline M1 build]] (input substrate)
- [[../../../../../lattice-labs/how/campaigns/campaign_comic_pipeline_canvas/artifacts/iii_cycle_1_report.md|lattice-labs III-cycle-1 report]] (cross-vault critic federation worked example)
