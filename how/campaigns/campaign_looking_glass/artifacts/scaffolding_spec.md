---
type: artifact
artifact_class: scaffolding_spec
campaign_id: campaign_looking_glass
title: "Operation Looking Glass — Part-1 III scaffolding spec + measurement model"
created: 2026-06-27
updated: 2026-06-27
last_edited_by: agent_stanley
status: active
tags: [campaign, iii, scaffolding, measurement_model, looking_glass]
---

# Part-1 III Scaffolding Spec + Measurement Model

> **Proposal altitude.** This spec *names and proposes* the scaffolding the III campaign will run on, grounded in a survey of existing III + vault assets. It is ratified (with the [[how/campaigns/campaign_looking_glass/campaign_looking_glass|charter]]) at **Decision Point 1**. The actual *build* — confirming the selection, authoring the net-new pack/persona, extending the gate harness, capturing baselines — is **Part-1 Mission M1** (post-DP1). "Propose, don't build."

This is the **novel deliverable** of an III campaign: the context · processes · personas · measurement that drive the III, assembled *before* the III runs and *captured* for reuse afterward.

## 1. Context packs (the "context" leg)

The driving knowledge the reviewers and procedures load. **Reuse first** — five existing III packs cover most of the domain; one genuine gap is net-new.

| Pack | Source | Role in this campaign | Disposition |
|------|--------|----------------------|-------------|
| `web_design` | `III.aDNA/what/context/core_domain_packs/context_iii_domain_packs_web_design.md` | Subject A craft (A4) — layout, hierarchy, accessibility, perf | **reuse** |
| `vault_maintenance` | `…/context_iii_vault_maintenance.md` | Subject B consistency/representation-readiness (B1, B3) | **reuse** |
| `inspect_procedures` | `…/context_iii_inspect_procedures.md` | The inspect step's mechanics | **reuse** |
| `introspect_checks` | `…/context_iii_introspect_checks.md` | The introspect/calibration step | **reuse** |
| `whitepaper_communication` | `…/context_iii_whitepaper_communication.md` | Messaging fidelity — does the site *say* what the vault *means* (A1, B2) | **reuse (adapt)** |
| **`representation_coherence`** | **net-new** | The site⇄context fidelity domain: claim-tracing procedure · currency/drift checks · structural-fidelity mapping · the "does justice" rubric | **net-new (build in M1)** |

The net-new `representation_coherence` pack is the campaign's conceptual core — it encodes *how you check that a representation is faithful to its source*. It is the prime graduation candidate (it generalizes to any "is this artifact faithful to its vault" review).

## 2. Persona / reviewer roster (the "personas" leg)

Drawn from the 16 `who/reviewers/` + 16 `who/adopters/`. Lean tiering: a **core** set runs every cycle; an **extended** set is invoked at the persona-ranker climax (mirroring [[how/skills/skill_decadal_aar|skill_decadal_aar]]).

### Core reviewers (every cycle)

| Persona | File | Lens |
|---------|------|------|
| **Claim-Tracer** | **net-new `who/reviewers/reviewer_claim_tracer.md`** | Traces each site claim → vault source; flags untraceable / contradicted / stale (A1, A2) — the fidelity gap no existing persona fills |
| Standard Archivist | `reviewer_standard_archivist.md` | Fidelity to the aDNA standard; does the site do justice to what the vault *is* (A1, B2) |
| Information Architect | `reviewer_information_architect.md` | Structural fidelity — does IA represent the vault's real shape (A3) |
| Content Strategist | `reviewer_content_strategist.md` | Is the content correct, clear, well-organized as representation |
| Newcomer Stress-Tester | `reviewer_newcomer_stress_tester.md` | Does the representation land for a newcomer (dual-audience, Standing Order 7) |

### Extended reviewers (persona-ranker climax, Part 2)

`reviewer_design_critic` · `reviewer_accessibility_auditor` · `reviewer_anti_bloat_editor` · `reviewer_brand_strategist` · `reviewer_ux_writer` · `reviewer_performance_engineer` (craft + ethos-fidelity + leanness).

### Adopter lenses ("does the site represent the vault to *me*")

Lean subset (Part 2): `adopter_researcher` · `adopter_educator` · `adopter_oss_maintainer` · `adopter_network_node_operator`. (Each asks: reading this site, do I correctly understand what aDNA is and whether it serves my use?)

> **Net-new gap confirmed:** of 16 reviewers, none is a fact-checker / source-fidelity auditor. `reviewer_claim_tracer` is the persona embodiment of the `representation_coherence` pack — build both together in M1.

## 3. Review process (the "processes" leg)

Wires the packs + personas onto the existing III primitives, adapted to **two subjects in parallel**.

1. **Inspect** (per [[how/skills/skill_iii_cycle|skill_iii_cycle]] steps 1-3, `inspect_procedures`): enumerate site claims → trace each to `what/` (claim-trace audit) → run machine gates → core-reviewer pass. Produces a **scored findings register** (claim-level: traceable? current? structurally faithful? + craft findings; context-level: consistent? correct? representation-ready?).
2. **Introspect** (`introspect_checks`, decadal-style): calibrate — did the scaffolding measure the right things? what did gates miss that personas caught? Update the instrumentation logs.
3. **Plan**: rank findings (severity × fidelity-impact × effort) → an evidence-backed improvement plan (the bounded set, lean disposition). → **DP3**.
4. **Improve + re-measure** (cycle steps 4-7): execute → re-run gates + claim-trace → validate (no regressions) → record.

Subject A and Subject B are reviewed **together**, because a drift is often fixable on *either* side (correct the site, or fix the source the site faithfully but wrongly mirrors) — deciding which is itself a finding.

## 4. Measurement model

Three tiers mirroring [[how/skills/skill_iii_cycle|skill_iii_cycle]]'s measure step. **Extend the existing harness, don't fight it.**

### Tier 1 — Machine-measurable

- **Existing**: `site/tests/gates/` (gate-4…gate-19 + `audit-p1s3-sweep` ≈ **281 assertions**) + build + axe + Lighthouse. Baseline = 281 green.
- **Net-new representation-coherence gates** (extend, building on `gate-14-single-source` + `gate-15-credibility`):
  - **Claim-trace gate** — every flagged site claim carries a source ref that *resolves* and *matches* the vault.
  - **Currency gate** — claims derived from vault state (counts, names, statuses) match current ground-truth via a **read-only** diff (never `sync:vaults`; reads pt19 output, never writes it).

### Tier 2 — Agent-assessable

- Claim-trace audit (agent enumerates site claims → traces to `what/`); drift/fabrication/staleness classification.
- [[how/skills/skill_dual_audience_review|skill_dual_audience_review]] + [[how/skills/skill_self_reference_check|skill_self_reference_check]] on the surfaced set.
- 10-dim compliance (`what/lattices/tools/compliance_checker.py`) on the site-backing context slice.

### Tier 3 — Persona-assessed

- Core reviewers per cycle; full persona ranker (core + extended + adopter lenses) at the Part-2 climax; scores representation quality + craft on a 0-5 scale (decadal convention).

### Baselines (captured in M1, before any change)

Site claim inventory · 281-gate green count · Lighthouse/axe scores · surfaced-context 10-dim compliance scores · persona baseline scores. Snapshot stored under `artifacts/` as the regression reference.

### Thresholds (charter success criteria → measures)

| Criterion | Threshold |
|-----------|-----------|
| A1 correctness / no fabrication | 0 untraceable or contradicted claims |
| A2 currency / no drift | 0 stale claims (read-only currency diff) |
| A3 structural fidelity | 0 IA misrepresentations |
| A4 craft | gate harness ≥ 281 green + persona score ≥ threshold (set vs. baseline in M1) |
| B1 internal consistency | 0 unresolved contradictions in the slice |
| B2 correctness | 0 contradictions vs. `adna_standard.md` |
| B3 representation-readiness | 10-dim compliance ≥ threshold; dual-audience + self-reference pass |

### Regression detection

Re-run Tier 1 + the claim-trace audit after every improvement. A **new** untraceable/stale claim, a **dropped** gate, or a **lowered** compliance/persona score = regression → block the mission close until resolved (Verification Strategy, per-mission gate).

## 5. Capture-as-reusable (the pattern leg)

Everything above is authored so it can **graduate to III.aDNA** at the terminal handoff:

- `representation_coherence` pack + `reviewer_claim_tracer` → generalizable to any "is this artifact faithful to its vault" review.
- The process (§3) + measurement model (§4) → the spine of a proposed `skill_iii_campaign` (the campaign-scale orchestration primitive III lacks today).
- The **reusable-vs-bespoke ledger** (charter §Pilot instrumentation) records, per piece, what generalized vs. what was Looking-Glass-specific — the raw material for the III.aDNA pattern mission.

## Open items for M1 (Construct) to resolve

1. Confirm the pack/persona selection above against the live assets (read the 5 reuse packs + the 5 core reviewer files in full).
2. Author `representation_coherence` + `reviewer_claim_tracer` (net-new).
3. Implement the 2 representation-coherence gates; wire into `site/tests/gates/`.
4. Capture baselines; set the A4 persona threshold + the B3 compliance threshold numerically.

## M1 confirmation (resolved 2026-06-27, Obj 1)

All five reuse packs read in full and confirmed at their cited paths — `web_design` (`III.aDNA/what/context/core_domain_packs/context_iii_domain_packs_web_design.md`), `vault_maintenance`, `inspect_procedures`, `introspect_checks`, `whitepaper_communication` (the last is `status: draft`, campaign-scoped — reuse its *trap structure* as a template, not its whitepaper-specific traps). The four named core reviewers all exist in `aDNA.aDNA/who/reviewers/` with the house persona format. **Roster confirmed — proceed with the proposed selection.** Two findings adjust how the net-new pieces slot in:

- **Gap confirmed (claim-tracer is genuinely net-new).** Of the 16 `who/reviewers/`, none is a source-fidelity / fact-checker. Nearest neighbours and why they fall short: **Content Strategist** owns claim↔*evidence* pairing (is there an example near the claim?) but not source *verification*; **Standard Archivist** owns reference *currency* (is the cited repo/standard/name the current one?) but not whether a claim faithfully represents what its source says. The fidelity lens (`source_fidelity`) is unrepresented → build `reviewer_claim_tracer`.

- **Currency division of labour (refines the A1/A2→measure mapping).** The §2 table assigned Claim-Tracer to both A1 and A2, but the **Standard Archivist already owns currency** as axis J — including the load-bearing **`website-owned` vs `pt19-owned`** split (flag pt19 drift, never hand-fix). To avoid overlap, currency is split three ways and the campaign honours it:
  - **A1 (correctness / no fabrication)** → **Claim-Tracer** (primary `source_fidelity`): does each claim trace to a real source that actually says it, qualifiers preserved.
  - **A2 (currency / no drift)** → split: **Standard Archivist** owns *standard/repo/brand/name* currency (mechanical, the two-class owner split); the **Tier-1 currency gate** owns *vault-state* currency (counts · names · statuses, read-only diff vs ground-truth); **Claim-Tracer**'s secondary `claim_currency` lens owns *semantic source* currency (is a cited source superseded/archived?).
  - Net: Claim-Tracer and Standard Archivist are **complements** (fidelity ⟷ currency), cross-linked in both persona files; the currency gate is the machine floor under both.
