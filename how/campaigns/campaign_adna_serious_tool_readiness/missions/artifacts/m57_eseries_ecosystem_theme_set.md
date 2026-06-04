---
type: artifact
artifact_class: decadal_theme_set
created: 2026-06-03
updated: 2026-06-03
mission: mission_adna_str_p5_m57_adnalabs_expansion_planning_stub
campaign: campaign_adna_serious_tool_readiness
phase: 5
mission_number: 5.7
persona: rosetta
last_edited_by: agent_stanley
status: draft   # operator-ratified at the M5.7 gate
supersedes_disposition: extends_m50_decadal_theme_set   # D11-D20 preserved (archive-never-delete); D16-D20 re-scoped in place; E1-E5 added
naming_continuity: extends_rosetta_d1_d10_and_str_d11_d20   # Rosetta D1-D10, STR D11-D20, ecosystem E1-E5
total_personas_in_bench: 30   # 21 existing + 9 new (see m57_persona_bench_expansion_v2.md)
total_dimensions: 13   # 10 existing + 3 new (Trust/Provenance, Participation_Scent, Network_Legibility), phased in
tags: [decadal_theme_set, eseries, ecosystem_site, m5_7, v8, p5, rescope, amended_exit_gate, adna_network, agentic_context_democracy]
---

# M5.7 — Re-Scoped Phase 5 Theme Set (D16–D20 re-sequenced + E1–E5 ecosystem decadals)

> **Re-scopes [[m50_decadal_theme_set]] for the Agentic Context Democracy ecosystem-site pivot** (operator-approved Phase-5 *continuation* of STR, 2026-06-03). D11–D15 are complete and unchanged. The paused docs-polish D16–D20 are **re-sequenced in place** (not transferred — operator chose continuation over a successor campaign). New **E-series ecosystem decadals (E1–E5)** add the four forward-face tracks. The **Phase-5 exit gate is amended** from docs-only to multi-track (§Amended Exit Gate). Archive-never-delete: the m50 baseline is preserved; this artifact annotates and extends it.
>
> **Gate discipline (do-now vs gated-build):** all theme/design/research work is **do-now**; build of brand-dependent surfaces holds until aDLabs' Operation Homecoming Steps 2–5 substantially land. Track D (aDNANetwork) is the **least-blocked first build mover** (R9 cleared 2026-06-03 → Home cascade Step 4 unblocked; registry regen done). This whole theme set is **draft pending the operator ratification gate** — nothing executes until ratified.

## The 6 forward-face surfaces → tracks (from the seed-brief gap analysis)

| Track | Surface | Exists? | Owning decadal(s) | Build gate |
|---|---|---|---|---|
| **A** | Standard / docs | ✅ mostly | D16, D17, D19 (re-scoped) | do-now (brand-application is light) |
| **B** | Marketplace / registry for context graphs | ❌ no UI | **E2** | gated — needs aDLabs marketplace data shape |
| **C** | Community / labs / org | ⚠️ thin | **E3** | gated — needs aDLabs org/community structure |
| **D** | aDNANetwork / "aDNA computers" / node onboarding | ⚠️ seed | **E4** | **least-gated — FIRST build mover** (vaults.json + federation_refs seeded) |
| **E** | aDNALabs positioning / about / vision / blog / homepage re-frame | ❌ | **E1** (+ D18 brand system) | design do-now; final org-brand assets gated |
| **F** | Domain → aDNA.network | ✅ **DONE** (live, Cloudflare→Vercel, ADR-031) | — (launch-verify in E5) | n/a — collapses from "cutover" to "verify" |

## Decadal index (re-scoped D16–D20 + new E1–E5)

| Decadal | Track | Theme | Disposition | Reviewer Lens Pass? | Build gate |
|---|---|---|---|---|---|
| **D16** | A | Reference & Glossary Streamline | **KEEP + expand glossary** (aDNANetwork, marketplace, registry, federation, "aDNA computer") | NO | do-now |
| **D17** | A/cross | Cross-Page Narrative Coherence | **EXPAND** — new journeys (publisher / consumer / lab-org visitor / node operator), not just 5 doc personas | **YES** | partial (doc journeys now; ecosystem journeys after their surfaces land) |
| **D18** | E/A | Visual Hierarchy & Typography v2 | **FOLD into E1 brand system** (aDNA-forward; aDNA-vs-Lattice visual distinction) | (with E1) | design do-now |
| **D19** | cross | Mobile & Responsive v2 | **KEEP** — test new surfaces + new personas | NO | trails each surface |
| **E1** | E | **Brand & Positioning** — homepage manifesto re-frame (front_page_doctrine worked example) + about/vision + brand-application sweep; the ~55/45 dial | NEW | **YES** | design+brand-independent shell do-now; final org-brand assets gated |
| **E2** | B | **Marketplace / Registry** — browse/detail/publish UI over `lattice_yaml_schema.json` + FAIR + `skill_lattice_publish`; Replicate-style live affordances | NEW | NO | **gated** (aDLabs data shape) |
| **E3** | C | **Community / Labs / Org** — org directory (org_vault/org_graph classes) + showcase + contribution funnel; who-not-how-many | NEW | **YES** | **gated** (aDLabs org structure) |
| **E4** | D | **aDNANetwork & Node Onboarding** — federation/topology viz + "aDNA computers" surface + node onboarding over `vaults.json` | NEW | NO | **least-gated — FIRST build mover** |
| **E5** | cross | **Integration, Hardening & Adversarial Capstone** — cross-surface coherence + perf/a11y/motion-budget hardening + adversarial review (skeptic + external-validator + Movement Skeptic) + launch-verify (F) + Phase-5 exit | NEW (absorbs D20 intent) | **YES (final)** | trails all built surfaces |

**Reviewer Lens Pass cadence:** D17 · E1 · E3 · E5 (4 passes — every-few-decadal + final, matching the STR D11/D14/D17/D20 rhythm). New reviewers mandatory on their owning tracks (see persona-bench design).

## Per-decadal cycle structure + AAR cadence

Unchanged from m50 — each decadal = 10 III cycles (`skill_iii_cycle` 7-step) + 1 decadal AAR (`skill_decadal_aar`). Cycle results persist to `what/measurement/iii_results/{YYYY-MM}/cycle_{NNN}_{decadal}_{slug}.json` (the single ledger across Rosetta D-cycles, STR D-cycles, and ecosystem E-cycles; `decadal` field = `E1`…`E5`). Stages 0–4 of [[skill_site_design_pipeline]] run once per surface before its E-decadal's build cycles begin.

## Do-now vs gated-build sequencing

```
DO-NOW (design/research/brand-independent build — proceeds at ratification)
  D16 glossary/reference streamline + new-term expansion
  D18→E1 brand system v3 + homepage manifesto re-frame (front_page_doctrine worked example) + about/vision
  E4 aDNANetwork surface (LEAST-GATED first build mover; vaults.json + federation_refs seeded; Step 4 unblocked)
  brand-independent shell: design-system CSS, dark-mode, meaningful-motion impl, component scaffolding
  D17 doc-journey coherence (doc personas now)

GATED-BUILD (holds until Operation Homecoming Steps 2–5 substantially land)
  E2 Marketplace UI        ← aDLabs marketplace data shape
  E3 Community/Labs/Org     ← aDLabs org/community structure
  E1 final org-brand assets ← upstream brand decisions
  D17 ecosystem-journey coherence (after those surfaces exist)
  E5 capstone + launch      ← trails all built surfaces + operator go-signal + aDLabs brand-launch coordination

RECONCILIATION SEAM: E2/E3/E4 build against STABLE SEEDS (lattice schema, vaults.json, federation_refs)
  + LOCKED names only, behind a thin adaptation layer → when aDLabs finalizes the surfaces, rebind not rebuild.
```

## Amended Phase-5 Exit Gate (proposed — operator-ratified at the gate; replaces the m50 docs-only gate)

| Criterion | Target | Verification |
|---|---|---|
| **Per-track ranker** (mean of dims, full ~30-persona bench) | **≥ 4.95 on EACH of A / B / C / D / E** | each track scored at its capstone E-decadal AAR — a strong docs track cannot mask a weak marketplace track |
| **No-weak-dimension floor** | **no single dimension < 4.80 on any track** | prevents a 4.95 mean hiding a 4.2 Trust on marketplace provenance |
| **REPO** (README + repo metadata) | ≥ 4.95 | full bench (inherited from STR) |
| **Reviewer Lens Pass clean** | no P1 unresolved at D17 / E1 / E3 / E5 | manual review of the 4 AARs |
| **Ecosystem-readiness journeys** | publish-a-lattice · discover/compose · run-a-node · join-community + value-prop all green | operator review (extends STR's community-readiness checklist) |
| **Perf / a11y / motion** | Lighthouse 100; `prefers-reduced-motion` honored; WCAG 2.1 AA | Lighthouse + Playwright gates (existing) |
| **Image-gen budget** | cumulative ≤ explicit operator cap | ComfyForge/CanvasForge ledger (STR ran D11–D20 at $1.72 of $50) |

**Three new dimensions** (additive to the 10; phased per the m50 secondary-dimension precedent — soft-gate for one decadal of calibration, then hard-gate):
1. **Trust / Provenance** — does the marketplace convey FAIR / licensing / attribution credibly? (Marketplace Publisher + Consumer + Enterprise.)
2. **Participation Scent** — can a visitor tell *how to join / contribute / run a node* in 60s? (Conversion/Growth + Community Lead + Newcomer.)
3. **Network Legibility** — is "the network of aDNA computers" + topology + federation understandable, not hand-wavy? (Node Operator + Diagram Reviewer + IA.)

**Brand-balance check** (qualitative, Brand-Strategist-owned, NOT a numeric gate — mirrors how the Design Critic owns the generic-AI-aesthetic call): the ~55/45 sleek↔revolutionary dial is a Reviewer-Lens-Pass verdict feeding the priority queue. **Preservation clause** (per `skill_decadal_aar`): the per-track persona ranker is the hard gate; reviewer scorecards + soft-gated dims are parallel reporting.

## v8.0 tag / Phase 6

Because this is a **Phase-5 continuation** (operator decision), the amended exit gate now gates STR's **v8.0 tag (Phase 6)**: v8.0 ships after the re-scoped Phase 5 closes at the multi-track gate. *(Open operator question, surfaced at the gate: ship v8.0 on docs-readiness as a "Phase 5.5" checkpoint and treat the ecosystem build as continuing, OR hold v8.0 for the full multi-track close. Recommendation: hold — the tag should mean the forward face is real. Operator decides.)*

## Notes

- **Naming continuity:** Rosetta D1–D10 (cycles 1–100) → STR D11–D20 (cycles 101–200) → ecosystem E1–E5 (cycles 201+). D16–D20 keep their D-numbers (re-scoped in place); E1–E5 are net-new.
- **Decadal granularity:** ~10 cycles each; brand-independent + Track D decadals (D16, D18→E1, E4) are immediately runnable post-ratification; gated decadals (E2, E3) sequence behind Homecoming Steps 2–5.
- **Self-reference:** E1's homepage re-frame IS the [[front_page_doctrine]] §8 worked example — the vault building its own forward face by its own doctrine.

## Related

- [[m50_decadal_theme_set]] — the preserved baseline this re-scopes
- [[m57_persona_bench_expansion_v2]] — the 30-persona bench this gate uses
- [[front_page_doctrine]] · [[skill_site_design_pipeline]] · [[_reference_set]]
- [[m57_adnalabs_expansion_planning_stub|M5.7 mission]] (expanded)
