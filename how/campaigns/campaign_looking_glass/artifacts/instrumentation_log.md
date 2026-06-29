---
type: artifact
artifact_class: instrumentation_ledger
campaign_id: campaign_looking_glass
title: "Operation Looking Glass — pilot instrumentation ledger"
created: 2026-06-27
updated: 2026-06-28
last_edited_by: agent_stanley
status: active
tags: [campaign, looking_glass, instrumentation, iii_campaign_pattern, extraction]
---

# Pilot Instrumentation Ledger

> **What this is.** Operation Looking Glass is the **pilot** of the "III campaign" pattern. This ledger is the pilot's flight recorder — the raw material the **terminal AAR (M5)** mines to author the III.aDNA campaign-planning mission. Four logs, appended **through M1→M5**. Each entry is dated + mission-tagged. Discipline: log the decision *when you make it*, not reconstructed at the end. (Campaign Standing Order 4.)

The four logs map to the four questions the pattern must answer:
1. **Scaffolding-needed** — what scaffolding did Part 1 actually need (vs. what the spec guessed)?
2. **Reusable-vs-bespoke** — per piece, what generalized vs. what was Looking-Glass-specific?
3. **III-primitive-gaps** — where did III's tactical primitives (`skill_iii_cycle`, `skill_decadal_aar`) fall short at *campaign* scale?
4. **Measurement-model retro** — did the measurement model measure the right things?

---

## Log 1 — Scaffolding-needed

*What the III campaign required before it could run. The novel step the pattern formalizes.*

| Date | Mission | Scaffolding piece | Pre-existed? | Note |
|------|---------|-------------------|--------------|------|
| 2026-06-27 | M1 | 5 III context packs (web_design · vault_maintenance · inspect_procedures · introspect_checks · whitepaper_communication) | **yes (reuse)** | All confirmed at cited paths; covered ~80% of the domain. The reuse-first survey (M0) held up. |
| 2026-06-27 | M1 | `representation_coherence` pack | **no (built)** | The site⇄context fidelity domain had no existing pack. Genuine gap — became the campaign's conceptual core. |
| 2026-06-27 | M1 | `claim_tracer` persona | **no (built)** | Of 16 reviewers, none was a source-fidelity/fact-checker. Built as the persona embodiment of the new pack. |
| 2026-06-27 | M1 | 2 representation-coherence gates (claim-trace · currency) | **partial** | Built on `gate-14-single-source` + `gate-15-credibility`; the *machine* fidelity floor didn't exist as a discrete gate. |
| 2026-06-27 | M1 | Subject-B boundary (`site_backing_slice.md`) | **no (built)** | An III *cycle* reviews a given artifact; an III *campaign* must first **bound its own subject**. Boundary-drawing is itself scaffolding. |
| 2026-06-27 | M2 | (validation) the slice boundary + paired-subject framing | **n/a (ran)** | Both paid off: the marquee finding (Subject B staler than Subject A) is **only** visible reviewing both subjects against the bounded slice. Boundary-drawing was load-bearing, not a side-task — M1's under-weighting note confirmed. |

**M1 reflection:** the spec's "propose, don't build" altitude was correct — ~⅔ of the scaffolding was reuse-confirmation, ~⅓ was genuine authoring. The one thing the spec under-weighted: **bounding Subject B** (the slice) is a non-trivial scaffolding step in its own right, not a side-task.

## Log 2 — Reusable-vs-bespoke

*Per piece authored, will this graduate to III.aDNA, or was it Looking-Glass-specific?*

| Date | Mission | Piece | Disposition | Generalizes to… |
|------|---------|-------|-------------|-----------------|
| 2026-06-27 | M1 | `representation_coherence` pack | **graduate (prime candidate)** | any "is this artifact faithful to its vault?" review — docs site, README, deck, whitepaper, generated summary |
| 2026-06-27 | M1 | `claim_tracer` persona | **graduate (candidate)** | any review needing a source-fidelity lens; complements the existing Standard Archivist (currency) |
| 2026-06-27 | M1 | claim-trace + currency gates | **graduate-as-template** | the *shape* (flagged-claim→resolving-source-ref; read-only ground-truth diff) generalizes; the specific selectors are site-specific |
| 2026-06-27 | M1 | `site_backing_slice.md` | **bespoke (method graduates)** | this *instance* is site-specific; the *method* (three-ring owner-class boundary) is the reusable artifact |
| 2026-06-27 | M1 | the A1/A2 currency division of labour | **graduate (doctrine)** | the fidelity⟷currency complement (Claim-Tracer ⟷ Standard Archivist ⟷ machine gate) is a reusable role-split |
| 2026-06-27 | M2 | three-way owner-class split (website / pt19 / **what-ground-truth**) | **graduate (doctrine)** | a *third* class emerged in practice — fix the vault the site faithfully mirrors (A-03, B-01…B-05); the pack's "fixable on either side" rule covered it. The binary website/pt19 split was insufficient. |
| 2026-06-27 | M2 | `representation_coherence` pack trap-firing | **graduate (acceptance evidence)** | RC-TRACE-02 (A-01), RC-STRUCT-03 (A-03), RC-CURR-01/02 (A-02/A-04), RC-JUST-02 (A-16) all fired on live findings — first-cycle acceptance evidence toward the ≥3-cycle / ≥80% graduation criterion. |
| 2026-06-28 | M3 | three-way owner-class split → fix-side decision procedure (site / source / escalate) | **graduate (doctrine)** | M2 *noticed* the third class; M3 *operationalized* it — "decide the fix-side, and record which side as a finding" is the reusable disposition step the `skill_iii_campaign` Plan phase needs; validated against all 25 findings. |
| 2026-06-28 | M3 | `representation_coherence` trap denominator (5 of 11 fired; 6 clean-subject true-negatives) | **graduate (tracking)** | first-cycle catch-evidence for 5 traps; the 6 not-yet-exercised need catch-evidence on a *different* artifact type (README/deck) to graduate — a note for the terminal-AAR graduation decision. |

## Log 3 — III-primitive-gaps

*Where `skill_iii_cycle` / `skill_decadal_aar` (tactical) didn't reach campaign scale.*

| Date | Mission | Gap observed | Proposed primitive |
|------|---------|--------------|--------------------|
| 2026-06-27 | M1 | `skill_iii_cycle` assumes the scaffolding (packs/personas/measure) *already exists* — it has no "build the III before you run it" step. The whole of Part 1 is unmodelled by the cycle skill. | a `skill_iii_campaign` whose first phase is **Construct** (this campaign's Part 1) |
| 2026-06-27 | M1 | Neither skill models **two subjects reviewed together** (site ⟷ its backing context), where a drift is fixable on either side and *deciding which* is itself a finding. | campaign-scale "paired-subject" review process (spec §3) |
| 2026-06-27 | M1 | No primitive bounds the **subject** — the cycle takes the artifact as given. At campaign scale you must first carve the slice. | a "boundary" step in `skill_iii_campaign` Construct |
| 2026-06-27 | M2 | (confirmed) the paired-subject gap is load-bearing, not hypothetical — the A/B currency inversion is invisible to a single-subject cycle. | strengthens the `skill_iii_campaign` paired-subject step (now evidence-backed, not just proposed) |
| 2026-06-28 | M3 | `skill_iii_cycle` jumps findings→fixes with **no disposition phase** between Inspect and Improve — at campaign scale, rank → bound → decide fix-side → escalate cross-vault → present at a human gate is its own phase. | a **Plan/Disposition phase** in `skill_iii_campaign` (rank by fidelity-impact-per-effort · carve the lean set · decide fix-side · DP human-gate). |
| 2026-06-28 | M3 | No primitive models a **calibration call** (real defect vs. ratified design trade-off) — A-11 needed a finding-vs-choice adjudication reconciled against a ratified ADR; no single persona/gate owns it. | a "calibration adjudication" step in Introspect (decide finding-vs-choice with evidence both ways, reconcile vs. ratified ADRs → operator). |
| 2026-06-28 | M3 | A-01 is a textbook **C-027 `producer_consumer_pair_unwired`** — the site emits 7 proof-links but the G20 manifest (consumer) enumerates a 9-claim seed that omits them, so the over-count rendered past its gate. | apply the C-027 canonical mitigation: forward-link the consumer (extend G20 manifest) as a closed-loop M4 deliverable bundled with the proof-link fix. |

## Log 4 — Measurement-model retro

*Did the 3-tier model measure the right things? (Appended M2+ as cycles run.)*

| Date | Mission | Observation |
|------|---------|-------------|
| 2026-06-27 | M1 | **Baselines captured pre-change** (Obj 6) — the regression reference exists before any improvement, as designed. Retro of *whether the tiers caught the right things* begins at M2 (first real Inspect run). |
| 2026-06-27 | M1 | Open question seeded for M2: will the **machine** currency gate and the **persona** Standard-Archivist overlap or complement on A2? (M1 split them by design — M2 tests whether the split holds in practice.) |
| 2026-06-27 | M1 | **Instrument named the wrong tool for B3.** The spec named `compliance_checker.py` for the 10-dim B3 measure, but the checker covers only the **7 base object types** (context/dataset/module/lattice/skill/manifest/hardware) — **not** the Rosetta extension types (concept/glossary/pattern/comparison) that make up the surfaced slice. **Re-specced B3** = frontmatter-valid + dual-audience + self-reference + cross-link (pass/fail), not a 0-50 score. *Pattern lesson: a measurement model must check its instruments **cover the subject's object types** before the campaign relies on them.* |
| 2026-06-27 | M1 | **Tier-2/3 baselines can't be pre-captured.** "Baselines captured in M1, before any change" cleanly applies to **Tier-1 (machine)** only; an agent/persona assessment baseline **is** the first Inspect pass (M2) — there is no measurement without running the review. *Pattern lesson: the III-campaign Construct phase captures machine baselines + sets thresholds; the agent/persona baseline is the opening of Review (M2), not a Construct deliverable.* DP2 "baselines captured" should read as the machine tier + inventory + thresholds. |
| 2026-06-27 | M2 | **Tier-1 caught 0 of 25 substantive findings.** All 302 gates green; every material finding came from Tier 2/3. The machine floor is a *regression* instrument, structurally blind to cross-subject currency inversion, framing drift, proof-link over-count, and all craft/newcomer/adopter findings. *Pattern lesson: Tier-1 = regression floor; discovery lives in Tier 2/3 — an III campaign that runs only gates would have reported "all green" and missed the entire Subject-B staleness cluster.* |
| 2026-06-27 | M2 | **A2 machine/persona split HELD** (the M1 open question, resolved). G21 (machine) confirmed rendered vault-state currency clean; the Standard Archivist (persona) independently confirmed zero stale-org in crawler metadata **and** caught the semantic residue (pre-migration names rendered as provenance). Complement, not overlap — the designed split holds in practice. |
| 2026-06-27 | M2 | **G20 manifest coverage gap = concrete instrument finding.** The 9-claim seed manifest didn't cover the proof-links block, so A-01 (proof-link over-count) rendered *past its own gate*. *Pattern lesson: a claim-trace gate is only as good as its manifest; Inspect should expand the manifest to the enumerated high-signal set* (deferred to M4 with the fix, per the read-only/no-fix rule). |
| 2026-06-28 | M3 | **Trap fire-rate with its denominator** — 5 of 11 `representation_coherence` traps fired (RC-TRACE-02 · RC-CURR-01 · RC-CURR-02 · RC-STRUCT-03 · RC-JUST-02); the 6 silent (RC-TRACE-01/FAB-01/STRUCT-01/STRUCT-02/JUST-01/JUST-03) are clean-subject true-negatives — 0 fabrication, honest structure, no hype-drift. *Pattern lesson: report fire-rate with its denominator — a silent trap on a clean subject is a pass, not a wasted trap (but still not-yet-exercised toward graduation).* |
| 2026-06-28 | M3 | **A2 machine/persona split formally CLOSED** (the M1 open question). G21 owns rendered vault-state currency; the Standard Archivist owns semantic/brand currency + the pre-migration-name residue. Complement, not overlap — the designed split held under a real run. |
| 2026-06-28 | M3 | **Calibration distinguishes finding from choice.** A-11 (home hero) is a ratified ~55/45 ethos dial, not a pure defect; A-12 (undefined term) is a real unmarked gap. *Pattern lesson: an III campaign needs a calibration step that reconciles findings against ratified ADRs/ethos **before** ranking — else it over-reports deliberate design as drift.* |

---

*Next append: M4 (Improve + re-measure) — execute the approved bounded set; resolve all 7 proof-links **and** extend the G20 manifest (C-027 closed-loop wiring); re-measure vs. baseline; capture fix-side outcomes + any regressions.*
