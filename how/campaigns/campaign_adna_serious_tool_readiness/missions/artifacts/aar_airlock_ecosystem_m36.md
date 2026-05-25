---
type: aar
artifact_id: aar_airlock_ecosystem_m36
mission: mission_adna_str_p3_m36_airlock_aar_and_streamline
campaign: campaign_adna_serious_tool_readiness
phase: 3
created: 2026-05-25
updated: 2026-05-25
status: draft   # final at S2 close (add pattern graduation block + token-budget two-metric table + acceptance scorecard + ≥17-row Standing-Order discharge + ≥3-category extended findings)
last_edited_by: agent_stanley
spec_completeness: draft   # 4 sections (What Worked / What Didn't / Streamline Candidates / Forward Doctrine) authored at S1; close artifacts at S2
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

## § 5 — Acceptance scorecard (S2 finalization)

(Populated at M3.6 S2 close per Campaign SO #17 mission_class discipline. Target ≥ 5 rows matching design spec §5 acceptance criteria. M3.5 precedent: 22 rows.)

## § 6 — Standing Order discharges (S2 finalization)

(Populated at M3.6 S2 close. Target ≥ 17 rows matching M3.5 precedent: 11 project SO + 5 campaign SO + 1 close-specific via Standing Order #8 self-reference noting 20th + 21st tactical invocations.)

## § 7 — Extended findings (S2 finalization)

(Populated at M3.6 S2 close. Target ≥ 3 categories matching M3.5 shape:
- Category 1 — PRIMARY methodology-architectural
- Category 2 — STRONG-EXTENDED pattern reinforcement
- Category 3 — Forward signals)

## § 8 — Pattern graduation block (S2 finalization)

(Populated at M3.6 S2 close. Candidates:
- `skill_in_phase_adr_ratification.md` 2 → 3 of 3 = **GRADUATES** if ADR path A + clean ratify
- `skill_implementation_mission_close.md` 2 → 3 of 3 = **GRADUATES** if S2 close cascade matches
- `skill_airlock_aar_synthesis.md` **NEW SEED** at 1 of 3 instances
- `skill_design_spec_authoring.md` 12 → 13 of 3+ post-graduation reinforcement
- `skill_campaign_close_archive.md` 18 → 19 canonical instances post-graduation reinforcement
- `skill_substrate_pure_separation.md` post-graduation reinforcement (7th canonical instance at mid-S1 absorption `1444fb9`)
- `skill_cross_skill_primitive_composition.md` 5 → 6 if streamline skill delegates
- `skill_forward_reference_stub_design.md` 9 → 10 via design spec §6 M3.7 stub)

## § 9 — Token-budget two-metric table (S2 finalization)

(Populated at M3.6 S2 close per ADR-016 Clause C empirical formula. Columns: forecast (content-load + API-billing) vs. actual; rows per session S1 + S2 + cumulative.)

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
