---
type: adr
adr_number: 029
title: "ISS Standard-touch — canonical skill, T1/T2/T3 context-load model, consumer wrapper contract, workspace Standing Rule slot, Forge ecosystem integration, 8-pattern adaptation coverage"
status: accepted   # ratified at campaign_siteforge_iss P5.M2 close 2026-05-26 alongside ADR-028 (twin); standard-touch axis deliberately disjoint from ADR-028's architecture axis
created: 2026-05-26
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
informed: [argus, hermes, mnemosyne, hygieia, asclepius, panacea, daedalus, mentor, venus, hestia, franklin, ariadne, robert_kennedy, thoth, iris, spock, berthier]
related_decisions: [adr_028_iss_architecture, adr_012_ecosystem_spec_extraction]
related_specs: [spec_forge_ecosystem]
related_skills: [skill_create_iss, skill_open_iss, skill_watch_iss]
related_guides:
  - SiteForge.aDNA/what/lib/iss/adaptation_guides/forge_platform_guide.md
  - SiteForge.aDNA/what/lib/iss/adaptation_guides/framework_orgvault_orggraph_guide.md
  - SiteForge.aDNA/what/lib/iss/adaptation_guides/network_node_coordination_guide.md
tags: [adr, decision, adr_029, campaign_siteforge_iss, operation_loom, iss, siteforge, standard_touch, canonical_skill, t1_t2_t3_context_load, consumer_wrapper, workspace_standing_rule_slot, forge_ecosystem_integration, eight_pattern_adaptation_coverage, twin_with_adr_028]
---

# ADR-029 — ISS Standard-touch

## Status

`accepted` — ratified 2026-05-26 by agent_siteforge_native at P5.M2 of `campaign_siteforge_iss` ("Operation Loom"). Twin to ADR-028 (same session); standard-touch axis ratified separately from architecture axis to keep the single-decision-per-ADR convention (cf. ADR-025/026 twin pair at `campaign_adna_serious_tool_readiness` M3.7).

## Context

Companion ADR-028 ratified the ISS architecture (10 ADs covering archetype-extension landing, shared lib, persona tokens, 4-tier round-trip, RLHF schema, 3-tier outer fallback, font modes, quality rankers). What architecture alone doesn't ratify is *how the standard distributes*: where the authoring skill lives so any vault can find it; how a consumer vault loads only the context it needs (not the whole substrate); what shape a consumer wrapper takes; how the workspace router signals ISS exists; how ISS slots into the Forge ecosystem spec; and which aDNA pattern categories already have documented adoption paths.

Five facts on the ground at P5.M2 open make the standard-touch axis ready to ratify:

1. **P5.M1 closed 2026-05-26** — `aDNA.aDNA/how/skills/skill_create_iss.md` is now `status: active` (promoted from prototype); siblings `skill_open_iss.md` + `skill_watch_iss.md` lifted alongside with `eventual_canonical_home: RemoteControl.aDNA` frontmatter declaring future migration.
2. **P4.M1 closed 2026-05-25** — three live consumer wrappers landed: `MoleculeForge.aDNA/iss/CLAUDE.md` (Forge), `RareHarness.aDNA/iss/CLAUDE.md` (Platform), `WilhelmAI.aDNA/iss/CLAUDE.md` (Org-Vault). Cross-vault pattern is operationally validated.
3. **P4.M2/M3/M4 closed 2026-05-25** — three adaptation guides at `SiteForge.aDNA/what/lib/iss/adaptation_guides/` cover all 8 aDNA pattern categories (Forge + Platform + Framework + Org-Vault + Org-Graph + Network + Node + Coordination); 21-row decision tree at `network_node_coordination_guide.md § 4` gives preset/template/persona lookup spanning the full lattice.
4. **Substrate held byte-stable** through 5 consecutive missions (P4.M1 → P4.M2 → P4.M3 → P4.M4 → P5.M1); 288/288 pytest at every close; campaign-total ADR count = 0.
5. **Workspace CLAUDE.md does not yet cite ISS** — discoverability gap acknowledged; P5.M3 closes it. ADR-029 pre-authorizes the Standing Rule's existence at the workspace router; P5.M3 ratifies its wording.

## Decision

### ST-1: Canonical authoring skill location

The canonical authoring skill is `aDNA.aDNA/how/skills/skill_create_iss.md` (`status: active`; promoted at P5.M1 from SiteForge-local prototype). It is the standard authoring path for any vault adopting ISS — consumer vaults invoke this skill directly (not a SiteForge-local copy).

Two sibling skills lifted alongside at P5.M1:
- `aDNA.aDNA/how/skills/skill_open_iss.md` — opens a rendered gate in the operator's browser
- `aDNA.aDNA/how/skills/skill_watch_iss.md` — watches `<vault>/how/gates/` for output sentinels

Both siblings carry `eventual_canonical_home: RemoteControl.aDNA` frontmatter codifying the declared-migration discipline (the GUI / file-watching concerns rightfully belong to `RemoteControl.aDNA` when its M0.3 GUI pillar lands, but the migration is forward-declared in-skill and does not require a custom ADR).

SiteForge-local copies of all three skills retained as soak-period redirects with one-line `CANONICAL MOVED` banners until CF→Local-Skill-Retire fires (post-soak archive; non-blocking).

### ST-2: T1/T2/T3 context-load model

ISS context loads in three additive tiers — only Tier 1 is always required; Tiers 2 + 3 layer on demand:

| Tier | Source | Token cost | When loaded |
|------|--------|-----------|-------------|
| **T1 — always** | `aDNA.aDNA/how/skills/skill_create_iss.md` (canonical skill self-loads) | ≤ 4K | Every ISS authoring invocation |
| **T2 — per-vault** | `<vault>/iss/CLAUDE.md` (consumer wrapper) | ≤ 2K | When authoring for a specific vault |
| **T3 — per-pattern** | One adaptation guide from `SiteForge.aDNA/what/lib/iss/adaptation_guides/{forge_platform / framework_orgvault_orggraph / network_node_coordination}_guide.md` | ≤ 6K | When the vault matches one of the 8 aDNA pattern categories AND pattern-specific guidance is needed |

T1 alone is sufficient to author any of the 9 stock templates for any of the 6 personas; T2 adds federation pinning + skin descriptor + default preset; T3 adds pattern-specific decision-tree lookups + worked-example anchors.

Cumulative cap at full load: ≤ 12K tokens. Cf. Campaign SO #8 ≤ 2-min agent ergonomics target — context-load budget is comfortably under the empirical 0.6 ms render baseline measured at D10 close.

### ST-3: Consumer wrapper contract

Each consumer vault landing ISS adds a `<vault>/iss/` directory containing `CLAUDE.md` (sibling to `siteforge/`, `iii/`, etc.). The wrapper declares:

**Required**:
- `federation_ref:` block pinning `SiteForge.aDNA` version (e.g., `^0.3.0`)
- `persona:` — default gate persona for the vault
- `local_extensions: []` — empty array at landing per MD-A4 minor-bump pattern; graduates entries when canonical fitness ≥ 3 instances

**Optional**:
- `default_preset:` — one of `{partner_onboarding | clinician_evaluation | minimal_ux | enterprise_decision}` (presets family ratified at D10-C91)
- `skin:` — vault skin descriptor name (resolves to `SiteForge.aDNA/what/lib/iss/skins/<vault_id>/skin.yaml`); cross-vault skin contract ratified at D10-C92

Graduation discipline mirrors the `iii/` precedent: local extensions promote upstream via the same frequency ≥ 3 + acceptance ≥ 0.80 + Stanley-approval rubric documented at ADR-003 in III.aDNA scope (the procedural shape transfers; ISS-specific local-store path is `<vault>/iss/what/context/<vault>_iss_learning_store.jsonl` when a learning loop is later established).

Three live worked examples ratified at P4.M1 (2026-05-25):
- `MoleculeForge.aDNA/iss/CLAUDE.md` — Forge pattern, franklin persona, no default preset
- `RareHarness.aDNA/iss/CLAUDE.md` — Platform pattern, franklin clinician-grade, `clinician_evaluation` default preset
- `WilhelmAI.aDNA/iss/CLAUDE.md` — Org-Vault pattern, partner persona, `partner_onboarding` default preset (warmth overlay staged but not auto-activated pending Wilhelm-brand-team gate)

### ST-4: Workspace Standing Rule slot reservation

A workspace-level Standing Rule will land at `~/aDNA/CLAUDE.md` at P5.M3 declaring ISS as the workspace-canonical operator-decision-gate authoring pattern + pointer to the canonical skill at `aDNA.aDNA/how/skills/skill_create_iss.md`. This ADR **pre-authorizes the rule's existence at the workspace router** (so future ADRs need not re-litigate whether ISS belongs there); the **wording itself is deferred to P5.M3** per dependency chain (P5.M3 has the latitude to refine based on P5.M1 + this ADR's evidence).

Constraints the P5.M3 wording must honor:
- Workspace router row discipline (Workspace Standing Rule 7): each row ≈ 1 line; operational state lives in project STATE.md, not the router.
- Pointer-not-content: the Standing Rule cites canonical homes, never restates them.
- Discoverability primary: agents reading `~/aDNA/CLAUDE.md` for the first time should be able to find ISS in one read.

### ST-5: Forge ecosystem integration slot

ISS is a **sub-function of SiteForge** (the Forge), not a standalone forge — per `aDNA.aDNA/what/specs/spec_forge_ecosystem.md`. Consumer integration uses the same wrapper pattern as `siteforge/` (public-site generation), giving consumer vaults two orthogonal wrapper paths when both surfaces are wanted:

- `<vault>/siteforge/` — public-site generation (e.g., ScienceStanley.aDNA, ContextCommons.aDNA, wga.aDNA, WilhelmAI.aDNA)
- `<vault>/iss/` — operator-decision gates (MoleculeForge.aDNA, RareHarness.aDNA, WilhelmAI.aDNA at P4.M1; further vaults at-leisure)

Both wrappers are sibling directories under the consumer vault root; both declare `federation_ref:` against SiteForge.aDNA; neither contains SiteForge code. WilhelmAI.aDNA at P5.M2 open demonstrates orthogonal coexistence — its `siteforge/` wrapper (public AI4U site) and `iss/` wrapper (partner-approval gates) reference the same vault but serve disjoint use-cases.

Upstream propagation to `.adna/` template (so fresh workspaces inherit the ISS wrapper pattern in the standard) defers to P5.M4 (`upstream_propagation` mission).

### ST-6: 8-pattern adaptation coverage

Phase 4 closed with **all 8 aDNA pattern categories** documented via three adaptation guides at `SiteForge.aDNA/what/lib/iss/adaptation_guides/`:

| Guide | Patterns covered | Worked examples |
|-------|------------------|-----------------|
| `forge_platform_guide.md` (361 LOC) | Forge + Platform | MoleculeForge (Forge, live), RareHarness (Platform, live) |
| `framework_orgvault_orggraph_guide.md` (422 LOC) | Framework + Org-Vault + Org-Graph | WilhelmAI (Org-Vault, live); III ADR-ratification gate (Framework, hypothetical); CakeHealth partner-approval (Org-Graph, hypothetical) |
| `network_node_coordination_guide.md` (495 LOC) | Network + Node + Coordination | LatticeNetwork membership-ratification (hypothetical); node.aDNA lattice-membership opt-in (hypothetical); TaskForge cross-vault claim-approval (hypothetical) |

The 21-row decision tree at `network_node_coordination_guide.md § 4` provides a complete 8-pattern × (preset / template / persona) lookup. Adaptation guides are **aDNA-standard reading** for any vault adopting ISS (linked from the canonical skill's "Vault adaptation" section per P5.M1 close).

Hypothetical worked examples graduate to live anchors when the first wrapper deploys at each pattern (CF→Framework-Pilot, CF→Org-Graph-Pilot, CF→Network-Pilot, CF→Node-Pilot, CF→Coordination-Pilot — all filed as Phase 4 close carry-forwards).

## Consequences

### Positive

- **Discoverability ratified by construction** — Standing Rule slot at workspace router (ST-4) gives ISS a single entry point; canonical skill at `aDNA.aDNA/how/skills/` makes it grep-able from any project root.
- **Cross-vault uniformity** — single wrapper contract (ST-3) + canonical skill (ST-1) collapse N+1 ad-hoc integrations into one pattern; future consumer vaults onboard via the wrapper, not a fork.
- **Adaptation tractable for all 8 aDNA categories** — ST-6 guides + 21-row decision tree mean new vault types don't need a campaign to onboard; they consume the relevant guide and land a wrapper.
- **ADR-028 + ADR-029 form a coherent twin pair** — architecture (what's built) + standard-touch (how it's distributed); cf. ADR-025/026 same-session twin precedent.
- **T1/T2/T3 load model is budget-friendly** — full load ≤ 12K tokens against typical session budgets; T1-only sufficient for most authoring; T3 only loaded on pattern-match.
- **Orthogonal-wrapper coexistence demonstrated** — WilhelmAI.aDNA carries both `siteforge/` + `iss/` at P5.M2 open without conflict; ST-5 ratifies this as the integration pattern.

### Negative

- **Soak-period redirect cost** — SiteForge-local skill copies retained as one-line `CANONICAL MOVED` redirects until CF→Local-Skill-Retire fires; readers may briefly hit a redirect before reaching canonical. Mitigated by short soak period + Phase 5 close as natural retirement gate.
- **Standing Rule wording deferred to P5.M3** — ST-4 pre-authorizes the rule but does not specify the text; future-readers chasing the exact discoverability cue must read this ADR + P5.M3 close artifact. Acceptable coupling cost; P5.M3 is one mission away.
- **Upstream `.adna/` propagation deferred to P5.M4** — fresh workspaces cloning the `.adna/` template do not get the ISS wrapper pattern until P5.M4 lands. Mitigated by per-vault adoption being the dominant onboarding path through Phase 5; upstream propagation locks in for genuinely-fresh workspaces in Phase 6+.
- **3 hypothetical worked examples in ST-6** — Framework + Org-Graph + Network + Node + Coordination patterns lack live wrappers at P5.M2 close. Risk is low (hypotheticals carry full design and would graduate cleanly); 5 CF→*-Pilot carry-forwards filed at P4 close track graduation.
- **`local_extensions: []` graduation mechanism imports III.aDNA ADR-003 procedural shape** — the rubric (frequency ≥ 3 + acceptance ≥ 0.80 + Stanley approval) is inherited not defined here; if ISS later needs a tighter or looser rubric, an amendment to this ADR is required.

### Neutral

- **`iss/` wrappers ride the same federation discipline as `iii/` + `siteforge/`** — no new mechanism; consumer vaults already understand the wrapper-with-federation_ref pattern from MD-A4 5-Forge sweep precedent.
- **Skin descriptors orthogonal to persona** — both layers compose (per ADR-028 AD-4 + the preset/skin family ratified at D10-C91/C92); ST-3 doesn't introduce a new orthogonality, it codifies the existing one.
- **Soak-period redirect mechanism reused** — same shape as P5.M1's redirect pattern; not a new contract.
- **8-pattern coverage is current-as-of-2026-05-25** — if aDNA introduces a 9th pattern category, a new guide + a new ST-6 row + this ADR's amendment table absorb it.

## Alternatives Considered

| Alternative | Rejected because |
|---|---|
| **Bundle architecture + standard-touch into a single ADR** | Two orthogonal axes; bundling forces every future amendment to touch both surfaces; splitting honors single-decision-per-ADR convention. |
| **Keep skill at `SiteForge.aDNA/how/skills/` only** | Limits cross-vault discoverability; the skill is genuinely aDNA-standard once 3+ pattern categories adopt it (Forge + Platform + Org-Vault met at P4.M1; satisfies the ≥ 3-instance graduation rubric used elsewhere). |
| **Per-vault wrapper schema variations** | Drift risk; the canonical skill's auto-detection logic (default preset resolution, skin cascade) requires uniform contract. ST-3 is intentionally narrow. |
| **Workspace Standing Rule deferred indefinitely** | Discoverability suffers; new vaults wouldn't find ISS without grep-ing the workspace. ST-4 pre-authorizes; P5.M3 ratifies wording — minimum viable discoverability slot reserved at this ADR. |
| **Single `core_domain_packs/` equivalent shared write for ISS** | Local extensions belong in vault; canonical upstream READ-ONLY per the III.aDNA ADR-003 procedural shape (graduation via ceremony, not direct write). |
| **Hard cap on T2 wrapper size** | Wrapper size is a budget signal not a hard limit; aggressive enforcement would break legitimate consumer-vault use cases (e.g., a vault with many gate-types may legitimately need more T2 context). ST-2 lists ≤ 2K as guidance not enforcement. |
| **Force adaptation guides into per-archetype `extensions/` paths** | Original P4.M2 stub did exactly this; three applications of the path-divergence precedent (P3p.6r sis→iss → P4.M2 path → P4.M3 path) demonstrated that adaptation guides describe vault-pattern adoption not SiteForge public-site archetypes; substrate-library-level path (`what/lib/iss/adaptation_guides/`) is correct. |
| **Defer ratification of standard-touch until upstream `.adna/` PR lands at P5.M4** | Three live consumer wrappers + canonical skill + 8-pattern guides already operationally validate the distribution model; deferring ratification would gate Phase 5 + Phase 6 work on `.adna/` propagation that itself depends on this ADR being citable. |

## Cross-References

- **Companion ADR**: `aDNA.aDNA/what/decisions/adr_028_iss_architecture.md` (architecture twin; same session ratification)
- **Canonical skill**: `aDNA.aDNA/how/skills/skill_create_iss.md` (P5.M1 promoted to `status: active`)
- **Sibling skills**: `aDNA.aDNA/how/skills/skill_open_iss.md` + `skill_watch_iss.md` (P5.M1 lifted; eventual_canonical_home `RemoteControl.aDNA`)
- **Adaptation guides**: `SiteForge.aDNA/what/lib/iss/adaptation_guides/forge_platform_guide.md` + `framework_orgvault_orggraph_guide.md` + `network_node_coordination_guide.md`
- **Live wrappers**: `MoleculeForge.aDNA/iss/CLAUDE.md` + `RareHarness.aDNA/iss/CLAUDE.md` + `WilhelmAI.aDNA/iss/CLAUDE.md`
- **Forge ecosystem spec**: `aDNA.aDNA/what/specs/spec_forge_ecosystem.md`
- **Architecture spec (long form)**: `SiteForge.aDNA/how/campaigns/campaign_siteforge_iss/missions/artifacts/architecture_spec_p1_2.md`
- **Campaign master**: `SiteForge.aDNA/how/campaigns/campaign_siteforge_iss/campaign_siteforge_iss.md`
- **Twin precedent**: `aDNA.aDNA/what/decisions/adr_025_iii_decadal_coordination.md` + `adr_026_ledger_observation_shared_primitive.md` (same-session twin pair pattern)
- **Originating plan**: `~/.claude/plans/please-read-the-claude-md-iterative-crescent.md` (P5.M2 ratification plan; operator-approved 2026-05-26)

## Amendment History

| Date | Mission | Amendment summary |
|------|---------|-------------------|
| 2026-05-26 | mission_p5_2_adr_authoring | Initial authoring + ratified (twin with ADR-028) |
