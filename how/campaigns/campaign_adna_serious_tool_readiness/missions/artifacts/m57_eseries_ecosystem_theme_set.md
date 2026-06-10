---
type: artifact
artifact_class: decadal_theme_set
created: 2026-06-03
updated: 2026-06-10   # E6 Onboarding & Install Portal inserted (operator-ratified); capstone renumbered E6→E7; D16 carry-ins block added (audit P2 realign)
mission: mission_adna_str_p5_m57_adnalabs_expansion_planning_stub
campaign: campaign_adna_serious_tool_readiness
phase: 5
mission_number: 5.7
persona: rosetta
last_edited_by: agent_stanley
status: draft   # operator-ratified at the M5.7 gate
supersedes_disposition: extends_m50_decadal_theme_set   # D11-D20 preserved (archive-never-delete); D16-D20 re-scoped in place; E1-E5 added
naming_continuity: extends_rosetta_d1_d10_and_str_d11_d20   # Rosetta D1-D10, STR D11-D20, ecosystem E1-E7 (E6 inserted 2026-06-10; capstone renumbered E6→E7 per the Track-G insertion precedent)
total_personas_in_bench: 30   # 21 existing + 9 new (see m57_persona_bench_expansion_v2.md)
total_dimensions: 13   # 10 existing + 3 new (Trust/Provenance, Participation_Scent, Network_Legibility), phased in
tags: [decadal_theme_set, eseries, ecosystem_site, m5_7, v8, p5, rescope, amended_exit_gate, adna_network, agentic_context_democracy]
---

# M5.7 — Re-Scoped Phase 5 Theme Set (D16–D20 re-sequenced + E1–E5 ecosystem decadals)

> **Re-scopes [[m50_decadal_theme_set]] for the Agentic Context Democracy ecosystem-site pivot** (operator-approved Phase-5 *continuation* of STR, 2026-06-03). D11–D15 are complete and unchanged. The paused docs-polish D16–D20 are **re-sequenced in place** (not transferred — operator chose continuation over a successor campaign). New **E-series ecosystem decadals (E1–E5)** add the four forward-face tracks. The **Phase-5 exit gate is amended** from docs-only to multi-track (§Amended Exit Gate). Archive-never-delete: the m50 baseline is preserved; this artifact annotates and extends it.
>
> **Gate discipline (do-now vs gated-build):** all theme/design/research work is **do-now**; build of brand-dependent surfaces holds until aDLabs' Operation Homecoming Steps 2–5 substantially land. Track D (aDNANetwork) is the **least-blocked first build mover** (R9 cleared 2026-06-03 → Home cascade Step 4 unblocked; registry regen done). This whole theme set is **draft pending the operator ratification gate** — nothing executes until ratified.

## The 7 forward-face surfaces → tracks (from the seed-brief gap analysis + the 2026-06-03 ethos ratification)

| Track | Surface | Exists? | Owning decadal(s) | Build gate |
|---|---|---|---|---|
| **A** | Standard / docs | ✅ mostly | D16, D17, D19 (re-scoped) | do-now (brand-application is light) |
| **B** | Marketplace / registry for context graphs | ❌ no UI | **E2** | gated — needs aDLabs marketplace data shape |
| **C** | Community / labs / org | ⚠️ thin | **E3** | gated — needs aDLabs org/community structure |
| **D** | aDNANetwork / "aDNA computers" / node onboarding | ⚠️ seed | **E4** | **least-gated — FIRST build mover** (vaults.json + federation_refs seeded) |
| **E** | aDNALabs positioning / about / vision / blog / homepage re-frame | ❌ | **E1** (+ D18 brand system) | design do-now; final org-brand assets gated |
| **F** | Domain → aDNA.network | ✅ **DONE** (live, Cloudflare→Vercel, ADR-031) | — (launch-verify in **E7**, the renumbered capstone) | n/a — collapses from "cutover" to "verify" |
| **H** | **Onboarding / Install funnel** — the GitHub↔site install path (template README → `/get-started` portal → first `claude` session → first vault) | ⚠️ page exists, flow was **invalid** (taught a clone that lands in the template's refused state; audit gap #16 install-truth drift) | **E6** (inserted 2026-06-10) | do-now (template + site are live substrates; truth fixes pre-staged at the audit P2) |
| **G** | **Public-Good Commons / Subnetwork Federation** — featured aligned subnetworks; "connect to a subnetwork"; the first social surface ([[narrative_ethos_public_good|ethos]]) | ❌ NEW (operator-added at ratification 2026-06-03) | **E5** | showcase do-now (real vaults); full social layer co-designed w/ aDNANetwork/Venus (horizon) |

## Decadal index (re-scoped D16–D20 + new E1–E5)

| Decadal | Track | Theme | Disposition | Reviewer Lens Pass? | Build gate |
|---|---|---|---|---|---|
| **D16** | A | Reference & Glossary Streamline — **+ docs-III carry-ins (audit P2, 2026-06-10):** ~96-content-doc freshness sweep · version/count alignment via `standard.ts` · print/PDF stylesheet decision for the normative spec · **gate-14 docs-freshness/consistency** (incl. "token-coupled constants move with the token" + stale-slug checks) · full internal link-graph crawl · post-E5 terminology-spine conformance | **KEEP + expand glossary** (aDNANetwork, marketplace, registry, federation, "aDNA computer") | NO | do-now (opens c180, after E6) |
| **D17** | A/cross | Cross-Page Narrative Coherence | **EXPAND** — new journeys (publisher / consumer / lab-org visitor / node operator), not just 5 doc personas | **YES** | partial (doc journeys now; ecosystem journeys after their surfaces land) |
| **D18** | E/A | Visual Hierarchy & Typography v2 | **FOLD into E1 brand system** (aDNA-forward; aDNA-vs-Lattice visual distinction) | (with E1) | design do-now |
| **D19** | cross | Mobile & Responsive v2 | **KEEP** — test new surfaces + new personas | NO | trails each surface |
| **E1** | E | **Brand & Positioning** — homepage manifesto re-frame (front_page_doctrine worked example) + about/vision + brand-application sweep; the ~55/45 dial | NEW | **YES** | design+brand-independent shell do-now; final org-brand assets gated |
| **E2** | B | **Marketplace / Registry** — browse/detail/publish UI over `lattice_yaml_schema.json` + FAIR + `skill_lattice_publish`; Replicate-style live affordances | NEW | NO | **gated** (aDLabs data shape) |
| **E3** | C | **Community / Labs / Org** — org directory (org_vault/org_graph classes) + showcase + contribution funnel; who-not-how-many | NEW | **YES** | **gated** (aDLabs org structure) |
| **E4** | D | **aDNANetwork & Node Onboarding** — federation/topology viz + "aDNA computers" surface + node onboarding over `vaults.json` | NEW | NO | **least-gated — FIRST build mover** |
| **E5** | G | **Public-Good Commons & Subnetwork Federation** — featured mission-aligned subnetworks (WGA · Context Commons · WilhelmAI · Rare Archive) + "connect to a subnetwork" + the first social surface (contributors/attribution/activity); the [[narrative_ethos_public_good|ethos]] made concrete | NEW (operator-added 2026-06-03) | **YES** | showcase do-now; full social layer horizon (Venus-gated) |
| **E6** | H (cross A·D) | **Onboarding & Install Portal** — the GitHub↔site install funnel made true + delightful: install-truth data layer (`install_truth.json` fixture + gate-12) · `/get-started` portal deep treatment · upstream template-README follow-through (PR filed 2026-06-10) · on-site search + newsletter/contact decision (audit gap #13 routing) · funnel III (every audience page routes to the portal; Participation-Scent pass) | **NEW (operator-ratified 2026-06-10** at the audit-campaign P2 gate bundle; seeded by audit gaps #16/#13; insertion follows the Track-G precedent) | **YES** | do-now (c170–179; truth fixes + gate-12 pre-staged at the audit P2 as E6-O2 carry-down) |
| **E7** | cross | **Integration, Hardening & Adversarial Capstone** — cross-surface coherence + perf/a11y/motion-budget hardening + adversarial review (skeptic + external-validator + Movement Skeptic) + launch-verify (F) + Phase-5 exit | NEW (absorbs D20 intent; **renumbered E6→E7 2026-06-10** at the E6 insertion — annotate-in-place, archive-never-delete) | **YES (final)** | trails all built surfaces |

**Reviewer Lens Pass cadence:** D17 · E1 · E3 · E5 · **E6** · **E7 (final)** *(amended 2026-06-10: the inserted onboarding portal E6 takes a full pass — it is the conversion surface; the capstone keeps the final pass as E7)*. New reviewers mandatory on their owning tracks (see persona-bench design).

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
  E5 public-good showcase (feature real aligned subnetworks — WGA/Context Commons/WilhelmAI/Rare Archive — over the registry; the ethos made concrete)
  E6 onboarding & install portal (inserted 2026-06-10; c170–179 — template + site are live substrates; truth fixes pre-staged)

GATED-BUILD (holds until Operation Homecoming Steps 2–5 substantially land)
  E2 Marketplace UI        ← aDLabs marketplace data shape
  E3 Community/Labs/Org     ← aDLabs org/community structure
  E1 final org-brand assets ← upstream brand decisions
  E5 full social layer     ← profiles/follows/feeds/governance — co-designed w/ aDNANetwork (Venus-gated); the showcase ships now, the social layer is horizon
  D17 ecosystem-journey coherence (after those surfaces exist)
  E7 capstone + launch      ← (renumbered from E6 2026-06-10) trails all built surfaces + operator go-signal + aDLabs brand-launch coordination

RECONCILIATION SEAM: E2/E3/E4 build against STABLE SEEDS (lattice schema, vaults.json, federation_refs)
  + LOCKED names only, behind a thin adaptation layer → when aDLabs finalizes the surfaces, rebind not rebuild.
```

## Amended Phase-5 Exit Gate (proposed — operator-ratified at the gate; replaces the m50 docs-only gate)

| Criterion | Target | Verification |
|---|---|---|
| **Per-track ranker** (mean of dims, full ~30-persona bench) | **≥ 4.95 on EACH of A / B / C / D / E** | each track scored at its capstone E-decadal AAR — a strong docs track cannot mask a weak marketplace track |
| **No-weak-dimension floor** | **no single dimension < 4.80 on any track** | prevents a 4.95 mean hiding a 4.2 Trust on marketplace provenance |
| **REPO** (README + repo metadata) | ≥ 4.95 | full bench (inherited from STR) |
| **Reviewer Lens Pass clean** | no P1 unresolved at D17 / E1 / E3 / E5 / **E6** | manual review of the 5 AARs *(amended 2026-06-10 at the E6 insertion)* |
| **Ecosystem-readiness journeys** | publish-a-lattice · discover/compose · run-a-node · join-community + value-prop all green | operator review (extends STR's community-readiness checklist) |
| **Perf / a11y / motion** | Lighthouse 100; `prefers-reduced-motion` honored; WCAG 2.1 AA | Lighthouse + Playwright gates (existing) |
| **Image-gen budget** | cumulative ≤ explicit operator cap | ComfyForge/CanvasForge ledger (STR ran D11–D20 at $1.72 of $50) |

**Three new dimensions** (additive to the 10; phased per the m50 secondary-dimension precedent — soft-gate for one decadal of calibration, then hard-gate):
1. **Trust / Provenance** — does the marketplace convey FAIR / licensing / attribution credibly? (Marketplace Publisher + Consumer + Enterprise.)
2. **Participation Scent** — can a visitor tell *how to join / contribute / run a node* in 60s? (Conversion/Growth + Community Lead + Newcomer.)
3. **Network Legibility** — is "the network of aDNA computers" + topology + federation understandable, not hand-wavy? (Node Operator + Diagram Reviewer + IA.)

**Brand-balance check** (qualitative, Brand-Strategist-owned, NOT a numeric gate — mirrors how the Design Critic owns the generic-AI-aesthetic call): the ~55/45 sleek↔revolutionary dial is a Reviewer-Lens-Pass verdict feeding the priority queue. **Preservation clause** (per `skill_decadal_aar`): the per-track persona ranker is the hard gate; reviewer scorecards + soft-gated dims are parallel reporting.

## v8.0 tag / Phase 6

Because this is a **Phase-5 continuation** (operator decision), the amended exit gate now gates STR's **v8.0 tag (Phase 6)**: v8.0 ships after the re-scoped Phase 5 closes at the multi-track gate. *(Open operator question, surfaced at the gate: ship v8.0 on docs-readiness as a "Phase 5.5" checkpoint and treat the ecosystem build as continuing, OR hold v8.0 for the full multi-track close. **Operator RATIFIED 2026-06-03: HOLD v8.0 for the full multi-track ecosystem close** — the tag should mean the forward face is real.)*

## Ratification (2026-06-03) + the public-good ethos + MAX-III directive

**Ratified by the operator at the M5.7 gate (2026-06-03):** the re-scoped Phase 5 (this theme set), the amended multi-track exit gate, the 21→30 persona-bench expansion, the sleek↔revolutionary **dial at ~55/45**, and **v8.0 holds for the full multi-track close**.

**Operator-added scope (ethos — see [[narrative_ethos_public_good]]):** language + DNA are our shared, co-created heritage; the shared context of civilization should be a democratically-stewarded **public good**; AI is a scarcity-destroying technology → confident shared use of the aDNA network + Lattice Protocol yields **abundance for everyone**. Held **subtle but front of mind** across all surfaces (the writing-guidelines AVOID register is the guardrail). This added **Track G / decadal E5** (Public-Good Commons & Subnetwork Federation) and the strategic horizon of an **agentic-context social network — "the Facebook (for good!)"** — connecting mission-aligned aDNA subnetworks (MVP = featured-subnetwork showcase + "connect to a subnetwork" now; full social layer co-designed with aDNANetwork/Venus on the federation/membership substrate, horizon).

**MAX-III directive (campaign-wide, operator 2026-06-03):** effort is set to **MAX** throughout. Each E-decadal runs **deep per-page/section III** — agentic inspection/introspection/review of *every* page and section — drawing context from (a) the site's design system + research (this set + [[front_page_doctrine]] + [[narrative_ethos_public_good]] + [[_reference_set]] + visual-identity-v2 + writing-guidelines), (b) the aDNA idea/ethos, (c) Lighthouse + Playwright + any web-review tooling, (d) context researched/generated by reviewing other sites ([[skill_reference_inspection]]). This is richer than the STR per-cycle pass: more cycles per surface where warranted, the full 30-persona bench engaged more often, and an extra Reviewer Lens Pass at E5. *(Candidate Campaign Standing Order #20 — ratify at the next phase gate per SO #14.)*

## Notes

- **Naming continuity:** Rosetta D1–D10 (cycles 1–100) → STR D11–D20 (cycles 101–200) → ecosystem E1–E5 (cycles 201+). D16–D20 keep their D-numbers (re-scoped in place); E1–E5 are net-new. **Amendment 2026-06-10:** **E6 = Onboarding & Install Portal** inserted at the audit-campaign P2 (operator-ratified at the plan gate bundle); the capstone **renumbered E6→E7** — same annotate-in-place mechanics as the Track-G/E5 insertion (which renumbered the capstone E5→E6 on 2026-06-03).
- **Decadal granularity:** ~10 cycles each; brand-independent + Track D decadals (D16, D18→E1, E4) are immediately runnable post-ratification; gated decadals (E2, E3) sequence behind Homecoming Steps 2–5. **Cycle ledger (2026-06-10):** E4 = c150–159 · E5 = c160–169 (realigned; c162 context-graph inserted) · **E6 = c170–179** · D16 = c180–189 · E7 trails.
- **Self-reference:** E1's homepage re-frame IS the [[front_page_doctrine]] §8 worked example — the vault building its own forward face by its own doctrine.

## Related

- [[m50_decadal_theme_set]] — the preserved baseline this re-scopes
- [[m57_persona_bench_expansion_v2]] — the 30-persona bench this gate uses
- [[front_page_doctrine]] · [[skill_site_design_pipeline]] · [[_reference_set]]
- [[m57_adnalabs_expansion_planning_stub|M5.7 mission]] (expanded)
