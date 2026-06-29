---
type: artifact
artifact_class: introspection_notes
campaign_id: campaign_looking_glass
mission_id: mission_introspect_plan_m03
title: "Operation Looking Glass — M3 introspection / calibration notes"
created: 2026-06-28
updated: 2026-06-28
last_edited_by: agent_stanley
status: active
tags: [campaign, looking_glass, introspect, calibration, measurement_model, iii_campaign_pilot, representation_coherence]
---

# M3 Introspection / Calibration Notes

> **What this is.** The M3 calibration pass over the [[how/campaigns/campaign_looking_glass/artifacts/findings_register|M2 Inspect run]]: *did the built III ([[how/campaigns/campaign_looking_glass/artifacts/scaffolding_spec|scaffolding]]) measure the right things?* It applies the [[III.aDNA/what/context/core_domain_packs/context_iii_introspect_checks|introspect_checks]] pack to the **III run itself** (not to a document) — the pack's own intent ("lift analysis from individual claims to structural patterns"). **Read-only retro.** The *ranking* and the fix-side decisions live in [[how/campaigns/campaign_looking_glass/artifacts/improvement_plan|improvement_plan.md]]; this artifact produces the calibration that justifies them, and feeds [[how/campaigns/campaign_looking_glass/artifacts/instrumentation_log|instrumentation ledger]] Log 4 + the terminal AAR.

## Headline (calibration verdict)

**The scaffolding measured the right things, and the three-tier split was load-bearing — not redundant.** The single most important calibration fact: **Tier-1 (machine gates) caught 0 of 25 substantive findings; Tier-2/3 (agent claim-trace + persona ranker) caught 25 of 25.** A campaign that ran only gates would have reported "all 302 green" and shipped a vault whose own backing prose is a standard-version behind its website. Of the net-new `representation_coherence` pack's 11 traps, **5 fired on real findings and 6 were silent — and every silence is a genuinely clean subject dimension** (zero fabrication, honest structure, no hype-drift), not a coverage gap. The one genuine real-vs-trade-off call (the home-hero cluster) splits: **A-12 is a real, cheap defect → fix; A-11 is the ratified ethos dial → accept the trade-off** (operator rules at DP3). The A2 machine/persona currency split — M1's open question — **held**.

This artifact is organized around the seven `introspect_checks`, recast from "introspect a document" to "introspect an III run":

| § | introspect_check | Recast question (this campaign) |
|---|------------------|---------------------------------|
| 1 | `denominator_check` | The instruments fired — out of how many? (trap fire-rate, persona lens-yield, per-tier catch) |
| 2 | `meta_patterns` | What systematic blind spot did a whole tier have? What single root-cause hides behind many findings? |
| 3 | `structural_completeness` | Did the scaffolding *cover the subject* — its object-types, its owner-classes, its claim-surfaces? |
| 4 | `confidence_gradient` | Finding vs. ratified choice — is the home-hero deferral an *unmarked* gap or a *marked* deliberate transition? |
| 5 | `argumentation_structure` + `analogy_vs_argument` | Are the plan's rankings well-supported? Is the "mirror" framing heuristic or over-claimed? |
| 6 | `corrections_pattern_match` | Do the findings match known recurring failure classes? Graduation tracking. |

---

## 1. Denominator check — the instruments fired, out of what? (`denominator_check`)

The `denominator_check` discipline: never report a numerator without its denominator. Three denominators matter here.

### 1.1 `representation_coherence` trap fire-rate — 5 of 11

| Trap | Dimension | Fired? | Finding | Classification |
|------|-----------|:--:|---------|----------------|
| RC-TRACE-01 Untraceable Claim | 1 Traceability | — | — | **true negative** — 0 untraceable claims (A1 clean) |
| RC-TRACE-02 Source Mismatch | 1 Traceability | ✅ | A-01 | fired — proof-link over-count |
| RC-FAB-01 Fabricated Specificity | 1 Traceability | — | — | **true negative** — 0 fabrications (A1 clean) |
| RC-CURR-01 Stale Vault-State Claim | 2 Currency | ✅ | A-02 | fired — reading-guide line-refs |
| RC-CURR-02 Superseded Source | 2 Currency | ✅ | A-04 | fired — install-SHA pins legacy clone |
| RC-STRUCT-01 Misrepresented Shape | 3 Structure | — | — | **true negative** — A3 PASS (honest hub-and-spoke, no decorative edges) |
| RC-STRUCT-02 Dangling Reference | 3 Structure | — | — | **true negative** — no semantic dangling refs / broken proof-links |
| RC-STRUCT-03 Framing Drift | 3 Structure | ✅ | A-03 | fired — "standard requires 2 cross-links" |
| RC-JUST-01 Qualifier Stripping | 4 Justice | — | — | **true negative** — no qualifier-strip found |
| RC-JUST-02 One-Sided Representation | 4 Justice | ✅ | A-16 | fired — federation horizon caveat omitted on audience pages |
| RC-JUST-03 Confidence / Hype Drift | 4 Justice | — | — | **true negative** — site hedges ("*a* standard"), strongest axis |

**Denominator-honest reading:** 5/11 fired is **not** "6 traps wasted." All 6 silences are attributable to a subject that is genuinely clean on that dimension — the site has **zero fabrication** (TRACE-01, FAB-01), **zero structural misrepresentation** (STRUCT-01, STRUCT-02), and **zero hype-drift** (JUST-01, JUST-03). A silent trap on a clean subject is a *true negative* (the check passed), not a useless trap. The traps that fired cluster entirely in **currency + framing + completeness** — which *is* the marquee story (the site's failure mode is staleness-at-the-source, not lying). The pack discriminated exactly where the subject was weak and stayed quiet exactly where it was strong. That is the behavior you want from a fidelity instrument.

*(Graduation caveat, not a defect: "true negative this cycle" still means those 6 traps are **not-yet-exercised** toward the ≥3-cycle/≥80%-acceptance graduation bar. We have positive catch-evidence for 5; we have clean-subject evidence — but not catch-evidence — for 6. Tracked in §6.)*

### 1.2 Persona lens-yield — 15 lenses, all ≥ 4.1, no dead weight

All 15 lenses returned scores ≥ 4.1 (core mean 4.50 rep / 4.40 craft; full 4.45 / 4.38 — clears the 4.30 floor). Discovery concentrated by lens-family: **adopter lenses** surfaced the trust gaps (A-15 OSS-maintainer #1 red flag, A-17 educator rubric, A-18 node-operator path, A-19 SPDX); **craft lenses** surfaced A-06/A-07/A-08/A-10; **content lenses** surfaced A-11/A-12/A-13/A-14. The high-signal indicator is **cross-lens convergence**: `/vaults/graph` (A-06) was hit independently by Design + A11y + Performance, and the home-hero (A-11/A-12) by UX-Writer + Newcomer + Anti-Bloat + Brand. A finding multiple independent lenses reach is a finding, not one reviewer's hobbyhorse — which is the entire reason to run a ranker rather than a single critic. The lowest lens (Performance, 4.1) correctly localized to one cause (the graph client-render), not a diffuse complaint — a well-behaved low score.

### 1.3 Per-tier catch — 0 / ~11 / ~14

| Tier | Instrument | Findings caught | Denominator note |
|------|-----------|:--:|------------------|
| T1 | 302-gate harness + axe + LH + G20/G21 | **0** of 25 | regression floor (see §2) |
| T2 | claim-trace (Subject A) + Subject-B context | ~11 (A-01…A-05, B-01…B-06) | the fidelity + source tier |
| T3 | 15-lens persona ranker | ~14 (A-06…A-19) | the craft / content / adopter tier |

(A-16 is cross-tier — surfaced by both the RC-JUST-02 trap and the persona pass; counted once in the register. The partition is approximate by design — convergence across tiers is signal, not double-count.)

---

## 2. Meta-patterns — systematic blind spots & single-root clusters (`meta_patterns`)

Two structural patterns dominate the run; both are load-bearing for the III.aDNA handoff.

**Pattern A — Tier-1 is a regression floor, structurally blind to discovery.** All 302 gates green; 0 of 25 substantive findings from the machine tier. This is not a defect in the gates — it is the *shape* of what a machine gate can see. Gates are blind by construction to: cross-subject currency **inversion** (needs two subjects compared), framing drift (needs modality judgment), proof-link over-count (needs the manifest to enumerate the claim — see §3), and every craft/newcomer/adopter finding (needs a reader). **Calibration conclusion:** the machine tier did its job (zero regression — the floor held), and discovery was *correctly* assigned to T2/T3 by the measurement model. The pattern lesson for `skill_iii_campaign`: **frame Tier-1 as the no-regression guard and make discovery a Tier-2/3 responsibility** — an III campaign that budgets only gates is measurement theatre.

**Pattern B — the staleness cluster is one root-cause, not five findings.** B-01/B-02/B-03/B-05 (+ A-03 at the representation level) are not independent defects; they are one event: when the site MDX + `standard.ts` were swept to **v2.3 / `aDNA-Network`** at the 2026-06-22 keystone, the vault's own `what/`/`who/` extension prose was **not** swept with them. One rename/re-version cascade that didn't reach every consumer. **This is why the marquee finding is an *inversion*** (the mirror is more current than the face) — and why the M4 fix is *one coordinated source sweep*, not five edits. Seeing the cluster as one pattern is itself the payoff of the paired-subject design (§3).

---

## 3. Structural completeness — did the scaffolding cover the subject? (`structural_completeness`)

`structural_completeness` asks whether failure modes and dependencies were mapped. Three coverage results, one of which is a textbook static trap.

**3.1 Object-type coverage gap (recorded M1, confirmed M2).** The measurement model originally named `compliance_checker.py` for the B3 (representation-readiness) measure, but the checker covers only the **7 base object-types**, not the Rosetta **extension types** (concept/glossary/pattern/comparison) that *make up* the surfaced slice. M1 re-specced B3 to a pass/fail composite (frontmatter + dual-audience + self-reference + cross-links). **Calibration lesson (stands):** a measurement model must verify its instruments *cover the subject's object-types* before the campaign relies on them. Confirmed sound in M2 (the composite adjudicated B3 cleanly: frontmatter 100% · dual-audience pass · self-ref pass · links 100%).

**3.2 The third owner-class — `what-ground-truth` — was a labeling-completeness gap, not a logic gap.** The scaffolding shipped a binary owner split (website-owned / pt19-owned). M2 surfaced a *third* class: the site faithfully mirrors a vault error, so the fix belongs to the **vault source**, not the mirror (A-03, B-01…B-05). Importantly, the pack's underlying rule — *"a drift is fixable on either side; which side is itself a finding"* (`pack_representation_coherence` §Canonical Reference) — **already covered the concept**. What was incomplete was the *owner-class enumeration*, not the reasoning. **Disposition:** graduate the three-way split (website / source / escalate) to doctrine; it generalizes to any vault-faithfulness review. (→ Log 2.)

**3.3 `producer_consumer_pair_unwired` (C-027) — A-01 is a textbook instance.** The introspect_checks pack carries a static trap: *a producer emits a structured field, but no consumer reads it.* A-01 is exactly this at the instrument level — the site **emits** 7 proof-links, but the G20 claim-trace **manifest** (the consumer) enumerates only a 9-claim seed that doesn't include the proof-links block, so the over-count **rendered past its own gate**. Per the C-027 substrate-canonical mitigation: track as a low-severity *wiring* finding, attach a forward-link naming the consumer that closes the loop, and require the next phase's deliverable list to enumerate the wiring. **M4 deliverable (closed-loop):** resolve all 7 proof-links **and** extend the G20 manifest to enumerate the proof-links block — the fix and the instrument-repair are one deliverable.

**3.4 Paired-subject completeness — validated.** The marquee inversion is *invisible* to a single-subject cycle; it exists only in the comparison of Subject A against Subject B over the bounded slice. The boundary-drawing M1 logged as "under-weighted scaffolding" paid off exactly as the load-bearing step. (→ confirms Log 1 / Log 3.)

### Tier-crossover map (which tier caught what; could another have?)

| Finding class | Caught by | Could another tier? | Instrument implication |
|---------------|-----------|---------------------|------------------------|
| Currency inversion (B-01…B-05) | T2 (Subject-B context) | T1 **no** (single-subject blind); T3 partially (Archivist) | paired-subject is mandatory for inversion discovery |
| Proof-link over-count (A-01) | T2 (claim-trace) | T1 **should have** (G20) — manifest gap | extend the manifest (C-027 wiring) |
| Framing drift (A-03) | T2 + RC-STRUCT-03 | T1 no (needs modality judgment) | fix source + mirror |
| Craft / a11y / perf (A-06…A-10) | T3 persona | T1 partially (LH budget) — but not as *findings* | persona owns craft discovery |
| Adopter trust (A-15…A-19) | T3 adopter lenses | T1 no | adopter lenses own trust gaps |

**A2 split — formally closed.** M1's open question ("will the machine currency gate (G21) and the persona Standard Archivist overlap or complement?") resolves: **complement.** G21 owns *rendered vault-state* currency (counts/versions in the DOM); the Standard Archivist owns *semantic/brand* currency and additionally caught the pre-migration-name residue (provenance metadata). Different catches, no overlap. The designed division of labour held under a real run.

---

## 4. Confidence gradient — finding vs. ratified choice (`confidence_gradient`)

`confidence_gradient` asks where a transition is **marked vs. unmarked**. Recast: *is a finding a real defect, or a deliberate, marked design choice the audit should reconcile against rather than over-report as drift?* This is the campaign's defining calibration call — the home-hero cluster (A-11/A-12). **Recommend splitting it** — they are not the same call.

### A-12 (Lattice Protocol undefined on first contact) → recommend **FIX**

"Lattice Protocol" appears 7× on the homepage, asserted as foundational, **never glossed**; a first-timer meets ~4–5 undefined coined terms before How-it-Works.

- **Marked deliberate?** No. There is no ADR or ethos rationale for asserting a coined term 7× and never defining it. The "teach your own vocabulary" defense *fails when the term is never actually taught*.
- **Cost of the fix:** ~zero — a one-line gloss on first use. Does **not** touch the ethos dial.
- **Verdict:** a real, unmarked comprehension barrier. Cheap, clear win. → improvement_plan, P2 (stretch into the bounded set if M4 has capacity).

### A-11 (hero defers the functional definition) → recommend **ACCEPT-AS-TRADE-OFF + optional additive lift**

The hero opens on values ("Language and DNA were co-created…") before saying what aDNA *is*; the functional definition arrives ~3rd sentence.

| Evidence it is a real defect | Evidence it is a marked, deliberate choice |
|------------------------------|--------------------------------------------|
| Cross-lens convergence (UX/Newcomer/Anti-Bloat/Brand) — high persona signal | **Ratified by ADR** — the ~55/45 ethos dial (values-forward over feature-forward) is a *chosen* posture, logged in the register as "partly by-design / calibration-gated" |
| "Does Justice" lens: a newcomer can't answer what/why/how in 60s — a dual-audience (SO7) gap | The site's *most-praised quality across every lens* is honesty/ethos; the hero voice **is** that strength's embodiment |
| Fix is non-destructive + S-effort (lift the `what-is-adna` opener *beside* the values framing) | A feature-forward rewrite would spend the very thing the personas rated highest |

- **Marked deliberate?** **Yes** — this is the ratified ethos dial. The campaign should **not** unilaterally overturn an ADR-ratified brand posture; that decision sits above the audit.
- **Recommended middle path:** offer the *additive* option — one functional sentence *beside*, not replacing, the values opener — as **operator-optional**. It buys the newcomer win without spending the ethos. If the operator keeps the dial as-is, A-11 is a legitimate **"measured correctly, chose deliberately"** outcome and is recorded as an **accepted trade-off, not a defect**.

**Why this split matters for the pilot:** the ability to tell a real unmarked defect (A-12) from a marked, ratified design choice (A-11) — and to *reconcile findings against ratified ADRs before ranking* — is precisely the calibration capability the III-campaign pattern exists to prove it has. An III that lacked this step would over-report deliberate design as drift. (→ Log 4.)

---

## 5. Argumentation & analogy notes (`argumentation_structure` + `analogy_vs_argument`)

- **Argumentation (the plan's support relationships).** The [[how/campaigns/campaign_looking_glass/artifacts/improvement_plan|improvement_plan]] ranks by an explicit, reproducible score (severity + fidelity-impact ÷ effort) with named tie-breakers — each ranking carries its support (evidence anchor + trap ID + register line), not an implicit "feels important." The A-11 recommendation **handles the counterargument** (the ethos defense is steelmanned in the table above, not strawed) — the `argumentation_structure` bar for "counterargument acknowledged, not dismissed."
- **Analogy (the "mirror").** The campaign's framing — *site = mirror, III = the act of looking, `what/` = the face* — is used as a **heuristic**, not asserted as a precise identity. The audit did not treat "mirror" as implying any structural property it then reasoned from; the analogy organizes intuition and the findings stand on their own evidence. No `analogy_vs_argument` violation. (One place to stay alert in M4: don't let "the site mirrors the vault" harden into "therefore every site fix has a vault cause" — A-15 security contact is a pure site-side gap with *no* vault mirror.)

---

## 6. Corrections pattern match & graduation tracking (`corrections_pattern_match`)

Findings matched against known recurring failure classes:

| Finding(s) | Matches known class | Recurrence note |
|------------|--------------------|-----------------|
| B-01…B-05 staleness cluster | rename/re-version **cascade-not-fully-propagated** | same class as the 2026-06-23 `network_edges.yaml` rename-cascade + the dup-key precedent (cited in `pack_representation_coherence` RC-TRACE-02) |
| A-16 federation one-sided | RC-JUST-02 / **C-018 summary-confidence-inflation** family | positioning-surface honesty class |
| A-01 proof-link over-count | **C-027 `producer_consumer_pair_unwired`** | the instrument-wiring class (§3.3) |
| A-05 / A-19 (counts, SPDX signal) | C-005 `unsourced_consequential_statistic` (adjacent) | low-severity claim-grounding |

**Graduation tracking (RC pack).** Cycle 1 of the ≥3-cycle / ≥80%-acceptance bar: **5 of 11 traps fired with high acceptance** (all 5 map to register findings the ranker corroborated; 0 false fires). The pack surfaced issues `core` + the reuse packs would miss (the entire fidelity/currency/justice axis). On track; the 6 not-yet-exercised traps need catch-evidence on a *different* artifact type (README / deck) to graduate — a note for the terminal AAR's graduation decision. (→ Log 2.)

---

## Measurement-model retro (→ instrumentation Log 4)

Consolidated one-liners appended to the ledger this mission (full rows in [[how/campaigns/campaign_looking_glass/artifacts/instrumentation_log|instrumentation_log]]):

1. **Trap fire-rate with denominator** — 5/11 RC traps fired; the 6 silent are clean-subject true-negatives, not waste. *Pattern lesson: report fire-rate with its denominator — a silent trap is a clean subject, not a useless trap.*
2. **A2 machine/persona split formally closed** — G21 (rendered currency) ⟷ Standard Archivist (semantic/brand currency) complement, no overlap. The M1 open question resolves "complement."
3. **Calibration distinguishes finding from choice** — A-11 is a ratified ethos dial, not a defect; A-12 is a real unmarked gap. *Pattern lesson: an III campaign needs a calibration step that reconciles findings against ratified ADRs/ethos before ranking, else it over-reports design as drift.*
4. **Disposition is a distinct phase** — `skill_iii_cycle` jumps findings→fixes; at campaign scale, rank → bound → decide-fix-side → escalate → human-gate is its own phase. (→ Log 3.)

## Open calibration questions (→ operator / DP3)

These are surfaced for the operator in the [[how/campaigns/campaign_looking_glass/artifacts/improvement_plan|improvement_plan]] DP3 decision block; listed here for traceability:

1. **A-11 ruling** — accept-as-trade-off vs. approve the non-destructive additive lift (touches the ratified ethos dial; operator's call, not the audit's).
2. **A-06 in/out of the bounded set** — the L-effort swing item (lifts Perf+A11y+Design but is the biggest lift). Recommend: include if M4 gets 2 sessions, defer if 1.
3. **A-03 inclusion** — the cleanest `what-ground-truth` exemplar (S-effort); include as the third-owner-class proof case, or defer to keep the set minimal?
4. **S1 / S2 (charter structural options)** — make deploy its own gated step/DP (recommend keep-in-M4 + live-verify); M4↔M5 merge (recommend keep separate given a 6-item set).

## Cross-references

- [[how/campaigns/campaign_looking_glass/artifacts/findings_register|findings_register]] (the input) · [[how/campaigns/campaign_looking_glass/artifacts/improvement_plan|improvement_plan]] (the output) · [[how/campaigns/campaign_looking_glass/artifacts/instrumentation_log|instrumentation_log]]
- [[how/campaigns/campaign_looking_glass/artifacts/packs/pack_representation_coherence|representation_coherence pack]] · [[III.aDNA/what/context/core_domain_packs/context_iii_introspect_checks|introspect_checks pack]] · [[how/campaigns/campaign_looking_glass/artifacts/baseline_snapshot|baseline_snapshot]]
- [[how/campaigns/campaign_looking_glass/missions/mission_introspect_plan_m03|M3 mission spec]] · [[how/campaigns/campaign_looking_glass/campaign_looking_glass|campaign master]]
- prior: [[how/campaigns/campaign_looking_glass/missions/artifacts/aar_m02_inspect|aar_m02_inspect]]
