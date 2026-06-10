---
type: adr
adr_number: 028
title: "ISS Architecture + Fallback Chain — archetype-extension landing, shared lib, persona tokens, 4-tier round-trip, RLHF schema v1.0, 3-tier outer fallback"
status: accepted   # ratified at campaign_siteforge_iss P5.M2 close 2026-05-26; DRAFT authored 2026-05-21 at P1.2 (architecture_spec_p1_2); held without amendment across 100+ III cycles (D1-D10) + 4 Phase 4 missions + P5.M1 canonical skill lift; campaign-total ADR count at ratification = 0
created: 2026-05-21
updated: 2026-05-26
last_edited_by: agent_siteforge_native
supersedes:
superseded_by:
campaign: campaign_siteforge_iss
mission: mission_p5_2_adr_authoring
ratification_phase: campaign_siteforge_iss_P5_M2_adr_authoring
ratified: 2026-05-26
ratified_session: session_stanley_20260526_iss_p5_m2
deciders: [agent_stanley, agent_siteforge_native]
informed: [argus, hermes, mnemosyne, hygieia, asclepius, panacea, daedalus, mentor, venus, hestia, franklin, ariadne, robert_kennedy, thoth, iris, spock, stanley_persona, berthier]
co_signs: SiteForge.aDNA/how/campaigns/campaign_siteforge_iss/missions/artifacts/architecture_spec_p1_2.md
related_decisions: [adr_029_iss_standard_touch, adr_012_ecosystem_spec_extraction]
related_specs: [spec_forge_ecosystem]
related_skills: [skill_create_iss, skill_open_iss, skill_watch_iss]
external_refs: [III.aDNA/what/decisions/adr_005_rlhf_signal_channel.md]
tags: [adr, decision, adr_028, campaign_siteforge_iss, operation_loom, iss, siteforge, architecture, fallback_chain, round_trip_4_tier, rlhf_schema_v1_0, persona_tokens, archetype_extension, shared_component_library, six_axis_iii_pack, seven_axis_agent_ergonomics, p1_2_draft_ratified, sis_to_iss_naming_swept]
---

# ADR-028 — ISS Architecture + Fallback Chain

## Status

`accepted` — ratified 2026-05-26 by agent_siteforge_native at P5.M2 of `campaign_siteforge_iss` ("Operation Loom"). DRAFT authored 2026-05-21 at P1.2 (`mission_p1_2_architecture_spec`); promoted to canonical aDNA standard at P5.M2 without body amendment. Companion full-detail spec at `SiteForge.aDNA/how/campaigns/campaign_siteforge_iss/missions/artifacts/architecture_spec_p1_2.md`.

### Validation

All 10 architectural decisions (AD-1..AD-10) were held without amendment across 100+ III cycles (D1-D10 decadal arcs) + 4 Phase 4 adaptation-guide missions + P5.M1 canonical skill lift. Campaign-total new-ADR count at ratification = **0** (additive-within-v0.3-contract precedent end-to-end). Evidence trail:

- D1-D10 closes — `SiteForge.aDNA/how/campaigns/campaign_siteforge_iss/missions/artifacts/aar_p3_3_*.md` through `aar_p3_12_*.md` + `meta_review_d1_d10_decadal_arcs.md`
- Phase 4 adaptation guides — `aar_p4_2_forge_platform_specializations.md`, `aar_p4_3_framework_orgvault_orggraph.md`, `aar_p4_4_network_node_coordination.md`
- P5.M1 canonical skill lift — `aar_p5_1_canonical_skill_lift.md`
- Substrate: 288/288 pytest at every Phase 4 + Phase 5 close
- 3 worked-example md5s (`0bc28827…` MoleculeForge, `efc48904…` RareHarness, `ce287e05…` WilhelmAI) byte-stable from P4.M1 close through P5.M2 open
- 6-axis III pack converged to 4.95 / 5.00 at D10 close (D1 baseline 4.00); persona-ranker forecast 4.93; 7th-axis agent-ergonomics ≤ 0.6 ms (vs ≤ 2-min target)

## Context

The agent-authored operator-decision-gate pattern was demonstrated live at MoleculeForge P3→P4 (`MoleculeForge.aDNA/how/missions/artifacts/gate_decision_p3.html` — Franklin persona; ~1153 LOC). Operator validation 2026-05-21 confirmed visibly superior UX vs `AskUserQuestion`-only mode for the 6-point architectural gate and authorized a comprehensive campaign to build it out as a SiteForge sub-function. Two co-equal load-bearing threads:

1. **On-demand rapid creation** — agent calls `skill_create_iss(...)` and receives operator-readable HTML in ≤ 2 min.
2. **Cross-vault context integration** — federation pattern + discovery + context-passing + output-routing for consumer vaults.

The architecture must:
- Reuse the validated MoleculeForge substrate (24 CSS tokens + 15 component primitives + 11 JS functions per P1.1 substrate recon §1).
- Honor mission acceptance criterion #6 (no agent-side build step) and SO #8 (≤ 2 min ergonomics).
- Align JSON output with `III.aDNA adr_005_rlhf_signal_channel.md` for the RLHF improvement loop (DELTA-1/2/3 resolved at P1.2 architecture spec §7).
- Provide graceful 3-tier fallback (web → AskUserQuestion → copy-paste) per Campaign SO #3.
- Slot cleanly into the future OIP unification campaign as the web-substrate component (Operation Concord arch_02) per Campaign SO #1 precursor discipline.

## Decision

### AD-1: Archetype-extension landing path

Each archetype gains a sibling-to-`src/` `extensions/iss/` directory holding archetype-specific defaults, examples, and tests. `src/` is untouched per SiteForge SO #7. Uniform across all 4 archetypes (`personal_portfolio`, `organization_landing`, `event_campaign`, `research_project`).

### AD-2: Pure HTML/CSS templates with string substitution (no build step)

Templates are pure HTML/CSS/JS files with `{{placeholder}}` substitutions. Generator skill is a string-template engine; sub-second execution; no Astro compile at agent runtime. Maintainer-facing Astro authoring optional and pre-compiled out-of-band; not on the critical path.

### AD-3: Shared component library at `what/lib/iss/`

Primitives (PRIM-1..15), persona-token files, runtime JS, tests live at the SiteForge vault root. Per-archetype `extensions/` directories register defaults only (no duplication). Mixed shape per P1.1 substrate recon §6 Input #3 pre-rec (c).

### AD-4: Single persona inlined per gate output

Skill argument `--persona <name>` picks persona; default = consumer-vault persona; universal fallback = Franklin. Tokens written into `<style>` inline; single-file self-contained HTML output.

### AD-5: Four-tier round-trip chain (sub-tiers within outer Tier 1 web)

| Sub-tier | Mechanism |
|---|---|
| T1A | POST to `localhost:8765/save` (Python `gate_receiver.py` if running) |
| T1B | `<a download>` of `<gate_id>.output.json` |
| T2 | `window.showSaveFilePicker()` (FSA-API) |
| T3 | Clipboard copy + operator-paste |

Auto-detect probe order T1A → T2 → T1B → T3 (T2 preferred over T1B when FSA-API available — operator picks path explicitly). Skill arg `--force-roundtrip-tier {T1A|T1B|T2|T3}` overrides.

### AD-6: Canonical gate paths under `<vault>/how/gates/`

```
<vault>/how/gates/<gate_id>.html             # surface
<vault>/how/gates/<gate_id>.pending          # in-flight sentinel
<vault>/how/gates/<gate_id>.output.json      # RLHF-shaped output
<vault>/how/gates/<gate_id>.draft.json       # Save-as-Draft (Cmd+S)
<vault>/how/gates/archive/<gate_id>/         # archived after agent ACK
```

Two-file sentinel discipline (Pattern P7.5): `.pending` present + `.output.json` absent = in-flight; `.pending` absent + `.output.json` present = ready for agent pickup.

### AD-7: JSON output schema v1.0 + DELTA-1/2/3 resolutions

Schema v1.0 fields (operator-readable `<gate_id>.output.json`):

```json
{
  "schema_version": "1.0",
  "gate_id": ..., "surface_type": "decision_gate", "interaction_mode": ...,
  "persona": ..., "vault": ...,
  "created_at": ..., "completed_at": ..., "operator": ...,
  "decisions": [...], "operator_comment_overall": ...,
  "rlhf_signal": { "signal_shape": ..., "value": ... },   # campaign-axis (renamed from signal_type)
  "rlhf_signal_type": ...,                                 # adr_005-axis disposition
  "rlhf_session_id": ..., "rlhf_captured_at": ...,
  "rlhf_modification_delta": ..., "rlhf_reviewer_persona": ...,
  "rlhf_severity_calibration": ..., "rlhf_cross_session_link": ...,
  "metadata": {}
}
```

- **DELTA-1**: orthogonal axes — `rlhf_signal_type` (disposition: accept/reject/defer/accept_with_modification) and `rlhf_signal.signal_shape` (shape: binary/pairwise/scalar/correction/structured) coexist side-by-side.
- **DELTA-2**: gate output stays operator-readable shape; **ACCUMULATE adapter** at P5.5 transforms to adr_005-compliant learning-store entry (lifts `rlhf_*` keys, drops gate-specific fields, derives `accepted` bool, respects D11 opt-in).
- **DELTA-3**: `rlhf_modification_delta` populated from `operator_comment_overall` (free-text IM-A/B/C) or per-field structured patch (IM-D ST2 form-input).
- Md5-invariance preserved: writes target SiteForge local learning store (`siteforge_iii_learning_store.jsonl`); canonical upstream READ-ONLY.

### AD-8: Three-tier outer fallback (web → AskUserQuestion → copy-paste)

Auto-detect at skill invocation: probe `$DISPLAY`/`$BROWSER`/`open` capability + `how/gates/` writability + receiver port-bind. Pass → Tier 1 web. Fail + option-count ≤ 4 → Tier 2 AskUserQuestion. Fail + rich-context → Tier 3 copy-paste. Skill args `--force-tier {web|askuser|copypaste}`, `--no-web`, `--no-receiver` override.

### AD-9: Three-mode font loading (online / offline / system)

Skill arg `--font-mode {online|offline|system}`; default = consumer-vault config; universal fallback = `online` for MoleculeForge parity. `online` uses Google Fonts CDN; `offline` inlines base64-WOFF2 of Space Grotesk + Space Mono + DM Serif Display; `system` uses `system-ui` stack (smallest payload, aesthetic compromise). P7.6 Core Web Vitals budget enforced via Playwright assertion (LCP ≤ 1.5s, INP ≤ 100ms, CLS ≤ 0.05; Quality Gate #11 additive to existing 10 SiteForge gates).

### AD-10: Three orthogonal quality rankers + 7th-axis agent-ergonomics

Every decadal AAR runs:
- **6-axis III pack** (DC/ACT/SQ/TC/CL/RU; 1-5 each; surface design quality) — P3.1 domain pack.
- **5-persona × 6-dim ranker** (F/C/A/T/R/D × 5 personas; 1-5 each; cross-persona adopter experience) — `skill_decadal_aar.md`.
- **7th-axis agent-ergonomics** (continuous seconds; skill ergonomics) — Campaign SO #8.

All three feed P3 priority queue. Acceptance gates: 6-axis ≥ 4.0 avg + 5-persona ≥ 4.0 avg + agent-ergonomics ≤ 2 min cached / ≤ 5 min cold-start (gates Phase 4 entry).

## Consequences

### Positive

- **Rapid creation enabled**: ≤ 2 min skill ergonomics target tractable via cached templates + zero-build-step output.
- **Cross-vault context integration tractable**: clear adapter boundary (gate output ≠ learning-store entry); D11 opt-in at consumer T2 wrapper; ACCUMULATE adapter at P5.5 owns the transform.
- **III decadal cadence applicable**: 6-axis pack designed for surface UX; orthogonal to existing 5-persona ranker + agent-ergonomics axis; matches Rosetta 100-cycle 10-decadal-arc precedent.
- **OIP unification absorption straightforward**: web substrate fully owned by this campaign; arch_02 of OIP Concord absorbs without redesign; persona-token system designed for per-pattern-category re-skinning.
- **RLHF schema alignment load-bearing**: AD-7 v1.0 schema is adr_005-compatible at gate-output level; canonical jsonl md5 invariant preserved per ADR-003 §4 (III.aDNA scope).
- **Forge-ecosystem-consistent**: SiteForge is the authoritative implementation; consumer wrappers at `<vault>/iss/` declare federation_ref + opt-ins; matches forge-pattern spec.
- **MoleculeForge reusability**: 12 of 15 primitives lift verbatim from operationally-validated demo; only 3 refactor (decoration_svg, bg_grid, top_glow) for persona-pluggability.

### Negative

- **Surface types ST3-ST6 deferred** (wizard, dashboard, review-approval, annotation) — successor campaigns; v1 limited to ST1 decision-gate; v1.5 adds ST2 form-input at Phase 4.
- **4-tier inner round-trip adds complexity** — generator must handle four submission paths and detection logic; ~150 LOC of `round_trip.js` vs ~30 for single-tier. Mitigated by extensive Playwright coverage at P2.3 + P6 pilots.
- **Persona-token system maintenance burden** — 6 personas + neutral baseline + 3 font modes = 7 × 3 = 21 token-file combinations to keep coherent. Mitigated by structural primitives in `tokens_base.css` (persona-invariant) + per-persona files limited to color + typography + decoration overrides only.
- **Astro source-of-truth deferred** — maintainer ergonomics may suffer vs typed Astro components; mitigated by optional out-of-band Astro authoring layer (§4.2 of companion spec); revisit at P3.6 (D4 Visual Identity decadal) if maintainer pain emerges.
- **`gate_receiver.py` adds optional Python dep** — opt-in only; T1B/T2/T3 fallback works without; deferred install cost on consumer side only when operator chooses T1A speed.

### Neutral

- **Schema versioning convention** — v1.0 ratified at this ADR; v1.1 (additive ST2 form_fields[]) and v2.0 (breaking) require campaign-master amendment.
- **6-axis pack vs 5-persona ranker orthogonality** — both run at every decadal; neither replaces the other; 7th-axis agent-ergonomics is a third independent dimension.
- **Standard-touch ratification** — separated into companion ADR-029 (canonical skill location + T1/T2/T3 context load + consumer wrapper pattern + workspace Standing Rule slot + Forge ecosystem integration + 8-pattern adaptation coverage); deliberately disjoint from architecture decisions captured here.

## Alternatives Considered

| Alternative | Rejected because |
|---|---|
| **Astro compile at agent runtime** | Adds ~3-10s latency; breaks ≤ 2 min ergonomics target (SO #8); requires Node + Astro dep at agent execution time. |
| **FSA-API only (no T1A/T1B/T3)** | Browser-support fragmented (Chrome/Edge yes, Firefox partial, Safari evolving); requires user gesture per save; breaks SSH/remote operator scenarios. |
| **Single-tier no-fallback** | Violates Campaign SO #3 mandatory fallback chain; one failure mode = total failure for operator. |
| **Per-archetype fork of components/tokens/runtime** | 4× duplication; updates fan out manually; maintenance burden compounds per cycle. |
| **External `tokens.css` `<link>`** | Violates single-file output discipline (AD-4); breaks offline mode (AD-9); adds network dep. |
| **Two-source skill location during P2.1-P5.1** | Fork risk if SiteForge and aDNA.aDNA copies drift; substrate recon §6 Input #5 pre-rec confirms MOVE (not copy) at P5.1. |
| **Skill at `~/aDNA/.adna/how/skills/`** | Workspace template repo is locked per Standing Rule #1 ("Never modify `.adna/`"); upstream propagation deferred to P5.4. |
| **`signal_type` name collision (campaign vs adr_005)** | Two orthogonal axes; rename campaign to `signal_shape` preserves both fields side-by-side. |
| **Single `core_domain_packs/` shared write** | Local extensions belong in vault; canonical upstream READ-ONLY per ADR-002 (III.aDNA scope). |
| **Single mega-ADR (architecture + standard-touch bundled)** | Architecture and distribution are orthogonal axes; splitting honors single-decision-per-ADR convention; companion ADR-029 ratifies standard-touch separately. |

## Cross-References

- **Companion architecture spec** (full detail): `SiteForge.aDNA/how/campaigns/campaign_siteforge_iss/missions/artifacts/architecture_spec_p1_2.md`
- **Campaign master**: `SiteForge.aDNA/how/campaigns/campaign_siteforge_iss/campaign_siteforge_iss.md` (D1-D11 + 7-phase plan + 4-slot ADR roadmap)
- **P1.0 design research brief**: `SiteForge.aDNA/how/campaigns/campaign_siteforge_iss/context/context_research_brief.md` v0.2 (R1-R6, E1-E4, A1-A5, D1-D4, P7.1-P7.6)
- **P1.1 substrate recon**: `SiteForge.aDNA/how/campaigns/campaign_siteforge_iss/missions/artifacts/substrate_recon_p1_1.md` (8 architecture-decision inputs with pre-recommendations + 3 DELTA flags + 15 component primitives + 24 CSS tokens)
- **III adr_005**: `III.aDNA/what/decisions/adr_005_rlhf_signal_channel.md` (RLHF schema source-of-truth; required-minimum + optional-open partition)
- **Forge ecosystem spec**: `aDNA.aDNA/what/specs/spec_forge_ecosystem.md` (Forge pattern this slots into)
- **Reference substrate**: `MoleculeForge.aDNA/how/missions/artifacts/gate_decision_p3.html` (Franklin live demo; 1153 LOC)
- **Companion ADR**: `aDNA.aDNA/what/decisions/adr_029_iss_standard_touch.md` (canonical skill + context-load + consumer-wrapper + workspace-rule slot + forge-integration + 8-pattern-coverage)
- **Sibling backlog ideas**: `aDNA.aDNA/how/backlog/idea_operator_web_gate_ui_pattern.md` (WebGate; trigger criteria) + `idea_campaign_operator_interaction_patterns_unification.md` (OIP Concord; absorption contract) + `idea_interactive_decision_surface.md` (layered upgrade path)
- **Originating plans**: `~/.claude/plans/please-read-the-claude-md-sleepy-teapot.md` (P1.2 plan-mode-first execution; operator-approved 2026-05-21 with AD-2 + AD-9 ratifications) + `~/.claude/plans/please-read-the-claude-md-iterative-crescent.md` (P5.M2 ratification plan; operator-approved 2026-05-26)

## Amendment History

| Date       | Mission                              | Amendment summary                                                                                |
|------------|--------------------------------------|--------------------------------------------------------------------------------------------------|
| 2026-05-21 | mission_p1_2_architecture_spec       | Initial DRAFT at P1.2 (status `DRAFT`)                                                           |
| 2026-05-26 | mission_p5_2_adr_authoring           | Ratified DRAFT → `accepted`; sis→iss naming sweep applied to prose + cross-refs; no body decisions amended; `related_lips` placeholder dropped (no LIP filed at P1.3); companion ADR-029 added to `related_decisions` |
