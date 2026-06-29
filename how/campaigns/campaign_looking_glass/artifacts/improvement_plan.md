---
type: artifact
artifact_class: improvement_plan
campaign_id: campaign_looking_glass
mission_id: mission_introspect_plan_m03
title: "Operation Looking Glass — M3 ranked improvement plan (DP3 candidate)"
created: 2026-06-28
updated: 2026-06-28
last_edited_by: agent_stanley
status: active
decision_point: DP3
tags: [campaign, looking_glass, improvement_plan, ranking, bounded_set, fix_side, dp3, iii_campaign_pilot]
---

# M3 Improvement Plan — DP3 Candidate

> **What this is.** The ranked, evidence-backed disposition of the [[how/campaigns/campaign_looking_glass/artifacts/findings_register|25 M2 findings]] → the **lean bounded improvement set** the operator approves at **Decision Point 3** (Phase 2 → Phase 3 gate). Each in-scope item carries `severity × fidelity-impact ÷ effort`, a **fix-side decision** (site / source / escalate), and an evidence anchor. The calibration that justifies the rankings is in [[how/campaigns/campaign_looking_glass/artifacts/introspection_notes|introspection_notes.md]]. **No fixes here — execution is M4.** **⛔ DP3 is a human gate (Standing Order 1): no auto-advance to M4 until the operator signs the decision block below.**

## Disposition headline

**The site is in good shape; the backing context is the real work** ([[how/campaigns/campaign_looking_glass/artifacts/findings_register|register]] Synthesis #1). Subject A passes A1–A4 (two minor flags); the only charter FAILs are **B1/B2** — a single, bounded, in-campaign-fixable **vault-source staleness cluster** that produces the marquee *inversion* (the website is more current than its own backing prose). The lean disposition:

- **Bounded M4 set = 4 work-streams** (highest fidelity-impact-per-effort): the **A-03 + B-sweep** (clears both FAILs + the marquee inversion in one coordinated source pass), **A-15** (security contact), **A-16** (federation honesty caveat), **A-01** (proof-links + G20 manifest wiring). All S/M effort.
- **1 swing item** — **A-06** (`/vaults/graph` SSR, L-effort): the operator scopes it in or out at DP3.
- **1 stretch** — **A-12** (one-line term gloss): cheap, recommended.
- **1 calibration ruling** — **A-11** (home-hero ethos dial): recommend *accept-as-trade-off* with an operator-optional additive lift.
- **3 escalations** — A-04 → Hestia/pt19, A-09 → deploy owner, A-07 → deploy verify (coord memos staged at M4, not written now).
- **~11 deferred long-tail** items, each recorded with a reason.

> **Introspection delta (the disposition phase earned its keep).** The formalized score **promoted A-16 and A-03** — two S-effort, High-fidelity honesty/framing fixes the M2 hand-ranking left at P2 — into the bounded set, and **demoted A-06** (High-severity but L-effort) from auto-include to a scoped swing item. The ranking did not merely rubber-stamp M2; it re-weighted toward the lean criterion (fidelity-impact-per-effort). See [[how/campaigns/campaign_looking_glass/artifacts/introspection_notes|introspection_notes §5]].

---

## Ranking methodology

Combine the register's three ordinal axes into one sortable score — *formalizing*, not overriding, the M2 P1/P2/P3 intuition. The mission Note defines lean as "highest fidelity-impact-per-effort," so effort is the divisor and fidelity is weighted (the campaign's telos is representational fidelity).

| Axis | Mapping |
|------|---------|
| `severity` | Critical 4 · High 3 · Med 2 · Low 1 |
| `fidelity-impact` | High 3 · Med 2 · Low 1 |
| `effort` (cost divisor) | S 1 · M 2 · L 3 |

**Score = (severity + fidelity-impact) ÷ effort**, to 1 decimal. (Ranges where the register hedged — A-01 S–M, A-15 S–M, A-06 fid Low–Med — scored at the documented effort/impact used in the per-row notes.)

**Tie-breakers (in order):** (1) clears a charter **FAIL** (B1/B2) > PASS-with-flag > clean; (2) higher fidelity-impact; (3) lower effort; (4) **instrumentation crossover** — a fix that also repairs the III (e.g. A-01's G20 manifest extension) ranks up.

**Bounded-set cut (two rules, not a pure threshold):**
- **Rule 1 — must-include:** every item that clears a charter FAIL → the source sweep is non-negotiable.
- **Rule 2 — value cut:** Score ≥ 3.0 **AND** (High severity **OR** High fidelity-impact).
- **Severity-admitted swing:** a High-severity item that fails Rule 2 only on effort (A-06) is surfaced as an explicit operator scoping decision, not auto-included.

---

## Ranked register (all 25 findings, by score)

| # | ID | Finding (short) | Sev | Fid | Eff | **Score** | Tier | Fix-side | Owner-class | Disposition |
|--:|----|-----------------|:--:|:--:|:--:|:--:|:--:|----------|-------------|-------------|
| 1 | **B-03** | open-standard intra-file v2.1↔16-type contradiction | High | High | S | **6.0** | T2 | source | what-ground-truth | **BOUNDED** (sweep) |
| 2 | **A-03** | "standard requires 2 cross-links" framing drift | Med | High | S | **5.0** | T2 | source→site | what-ground-truth | **BOUNDED** (sweep · exemplar) |
| 3 | **A-15** | no security-disclosure contact | High | Med | S | **5.0** | T3 | site | website | **BOUNDED** |
| 4 | **A-16** | federation horizon caveat omitted on audience pages | Med | High | S | **5.0** | T2/T3 | site | website | **BOUNDED** (promoted) |
| 5 | A-02 | reading-guide spec line-ref drift | Med | Med | S | 4.0 | T2 | site | website | defer |
| 6 | A-11 | home hero defers functional definition | Med | Med | S | 4.0 | T3 | site | website | **CALIBRATION** (accept) |
| 7 | A-12 | "Lattice Protocol" undefined on first contact | Med | Med | S | 4.0 | T3 | site | website | **STRETCH** (recommend fix) |
| 8 | **B-04** | open-standard stale `.adna/`-wrapper self-ref | Med | Med | S | 4.0 | T2 | source | what-ground-truth | **BOUNDED** (sweep rider) |
| 9 | **B-05** | comparison sources "14+" vs "16 base" | Med | Med | S | 4.0 | T2 | source | what-ground-truth | **BOUNDED** (sweep rider) |
| 10 | **A-01** | proof-links over-count / under-verified | High | High | M | **3.0** | T2 | site | website | **BOUNDED** (+G20 wiring) |
| 11 | A-19 | OSS license SPDX-consistency signal absent | Med | Low | S | 3.0 | T3 | site | website | defer |
| 12 | **B-01** | vault prose cites spec v2.1/v2.2 vs v2.3 | High | High | M | **3.0** | T2 | source | what-ground-truth | **BOUNDED** (sweep) |
| 13 | **B-02** | vault repo `LatticeProtocol/…` vs `aDNA-Network/aDNA` | High | High | M | **3.0** | T2 | source | what-ground-truth | **BOUNDED** (sweep) |
| 14 | A-04 | install_truth.json template SHA currency | Low | Low | S | 2.0 | T2 | escalate | pt19 (Ring-A) | **ESCALATE** → Hestia |
| 15 | A-05 | "16+ entity types" on comparison page | Low | Low | S | 2.0 | T2 | site | website | defer |
| 16 | A-09 | Best-Practices 92 on live routes | Low | Low | S | 2.0 | T1 | escalate | deploy-owner | **ESCALATE** → deploy |
| 17 | A-10 | minor design tells (emoji icons, accent) | Low | Low | S | 2.0 | T3 | site | website | defer |
| 18 | A-13 | problem-statement redundancy | Low | Low | S | 2.0 | T3 | site | website | defer |
| 19 | A-14 | glossary preview mid-word truncation | Low | Low | S | 2.0 | T3 | site | website | defer |
| 20 | A-17 | educator page promises assessment, no rubric | Med | Med | M | 2.0 | T3 | site | website | defer |
| 21 | A-18 | node-operator `Home.aDNA` bootstrap path soft | Med | Med | M | 2.0 | T3 | site | website | defer |
| 22 | B-06 | MDX VISION.md wikilink flattened to bare text | Low | Low | S | 2.0 | T2 | site-mdx | website | defer (acceptable as-is) |
| 23 | **A-06** | `/vaults/graph` client-rendered topology | High | Med | L | **1.7** | T3 | site | website | **SWING** (operator scopes) |
| 24 | A-07 | `/learn/concepts/*` CLS over threshold | Med | Low | M | 1.5 | T1 | escalate | website/deploy | escalate (verify post-deploy) |
| 25 | A-08 | top-nav 8-item span + overlap | Med | Low | M | 1.5 | T3 | site | website | defer |

---

## The lean bounded set (recommended M4 scope) — what DP3 approves

Four work-streams, in execution-sensible order. Each names its fix-side, effort, and the **regression check** it must pass at M4 re-measure (gates stay ≥ 302; axe 0; no persona-score drop).

### BS-1 · A-03 + B-01/B-02/B-03 (+ B-04, B-05) — the staleness/framing source sweep `score 6.0–3.0 · bundle effort M`
**The marquee fix.** One coordinated pass over the ~8 stale `what/`+`who/` files (the 5 `comparison_adna_vs_*` Sources, `concept_open_standard.md`, `governance_agent_protocol.md`, `concept_context_commons.md`, `community_*`) sweeping **v2.1/v2.2 → v2.3** and **`LatticeProtocol/Agentic-DNA` → `aDNA-Network/aDNA`**, plus the intra-file contradictions (B-03 16-type, B-04 `.adna/` wrapper, B-05 "14+"). **Clears both charter FAILs (B1/B2) and resolves the A/B inversion.** A-03 rides along as the **`what-ground-truth` exemplar**: fix the vault source (`concept_knowledge_graph.md:46`) *first*, then the faithful site mirror (`knowledge-graph.mdx:46`) — the doctrinal "fix the source the site mirrors, then the mirror." **Fix-side: source (+ one site-mirror edit for A-03).** Regression check: B1/B2 re-checks pass; no new G20/G21 failures.

### BS-2 · A-15 — security-disclosure contact `score 5.0 · effort S`
Add a `SECURITY.md` / security-contact surface (+ a link from the governance/community page). The OSS-maintainer persona's **#1 red flag**; the highest-scoring item; a quick, high-trust credibility win. **Fix-side: site.** Regression check: link-check gate green; no nav-count regression (A-08 ceiling).

### BS-3 · A-16 — federation horizon caveat on audience pages `score 5.0 · effort S`
The audience landings (`/researchers` et al.) pitch cross-lab federation as live; `/network` + `/community` honestly disclose the substrate is "not built yet." Carry the same horizon caveat to the audience pages (RC-JUST-02 honesty). **Fix-side: site.** *(Formula-promoted from P2 — a cheap honesty fix the hand-ranking under-weighted.)* Regression check: no contradiction with `/network` framing; gate-15 credibility green.

### BS-4 · A-01 — proof-links resolve + G20 manifest extension `score 3.0 · effort M`
Resolve/verify all **7** proof-links on `/learn/what-is-adna` (add the 2 v8.0 template paths to `verified_paths` or gate on existence) **and extend the G20 claim-trace manifest to enumerate the proof-links block** — the fix and the instrument-repair are **one closed-loop deliverable** (the C-027 `producer_consumer_pair_unwired` wiring; see [[how/campaigns/campaign_looking_glass/artifacts/introspection_notes|introspection_notes §3.3]]). **Fix-side: site (+ instrumentation crossover).** Regression check: G20 re-run green *with the extended manifest* (proves the gap is closed, not just the symptom).

**Swing (operator scopes at DP3) · A-06 · `/vaults/graph` SSR-prerender to static SVG · `score 1.7 · effort L`** — lifts Performance + a11y(no-JS) + Design in one change, but is the biggest lift (data-independent; the homepage `netdiagram` already proves the team can SSR a diagram). **Recommend: include if M4 gets 2 sessions; defer if 1.**

**Stretch · A-12 · one-line "Lattice Protocol" gloss on first use · `score 4.0 · effort S`** — a real, cheap newcomer fix (calibration §4); doesn't meet the strict Rule-2 qualifier (Med/Med) but is near-free. **Recommend include.**

---

## Fix-side decisions (per finding) — Objective 3 (the decision is itself recorded)

**(a) Site / Subject-A — correct the website.**
Bounded: A-15, A-16, A-01, A-12(stretch), A-06(swing), A-03(mirror-half). Deferred but site-owned: A-02, A-05, A-08, A-10, A-13, A-14, A-17, A-18, A-19, B-06.

**(b) Source / Subject-B (`what-ground-truth`) — fix the vault the site faithfully mirrors.**
B-01, B-02, B-03, B-04, B-05 (the sweep) + A-03 (source-half, fixed *before* its site mirror). *Doctrine:* a drift is fixable on either side; the site is currently the *correct* copy, so the fix is at the source — recording "which side" is the third-owner-class finding the pilot graduates.

**(c) Escalate via coord memo — the true source is another vault's lane (no direct write).**
- **A-04** (install_truth.json template SHA) → **Hestia/pt19** (Ring-A read-only; Standing Order 2). A **new Rosetta→Hestia memo** staged at M4 (precedent: the 2026-06-23 inventory dup-key memo); never hand-fixed (`npm run sync:install` is pt19's lane).
- **A-09** (Best-Practices 92 live) → **deploy owner / Vitruvius** (deploy-layer headers/source-maps, not a source regression).
- **A-07** (concept CLS over threshold) → **deploy verify** (verify post-deploy live; ties to the existing Vitruvius memo + WEBSITE D4 G3-deferred).

> Memos are *decided* here and *staged at M4* — Standing Order 3 (no cross-vault writes mid-pilot). M3 records the decision to escalate; it does not write or send the memo.

---

## Deferred long-tail (out-of-scope follow-on) — recorded, not omitted

| ID | Why deferred | Lands |
|----|--------------|-------|
| A-02 | nav aids, not load-bearing facts; S but low ROI vs. the bounded set | M4-stretch / backlog |
| A-05 | cosmetic ("16+" defensibly gestures at extensions; current) | backlog |
| A-08 | usability not misrepresentation; within the 9-item ceiling (A3 clean) | STR / follow-on |
| A-10 | polish (emoji `aria-hidden` correct; accent reads two-color) | backlog |
| A-13 | redundancy, not error; one shared canonical phrasing later | backlog |
| A-14 | reads-as-bug truncation; recoverable via "Full definition →" | backlog |
| A-17 | M-effort (needs a real rubric artifact); educator depth follow-on | STR / follow-on |
| A-18 | M-effort (needs a shown deterministic `Home.aDNA` path) | STR / follow-on |
| A-19 | SPDX-consistency signal; partially mitigated by spec §-sourcing | backlog |
| B-06 | **acceptable as-is** — governance docs aren't published routes; a dead link was correctly avoided | none (noted) |

*(B-04 and B-05 are **not** deferred — they ride in the BS-1 sweep, same files.)*

---

## Escalations (coord-memo items) — staged at M4

| ID | Target | Ask | Memo status |
|----|--------|-----|-------------|
| A-04 | Hestia / pt19 | confirm which `template_sha` the public image ships; regen `install_truth.json` (`74cb761` → current) | **new** Rosetta→Hestia memo, staged M4 |
| A-09 | deploy owner / Vitruvius | BP-92 on live routes (headers / source-maps) — deploy-layer fix | folds into the existing [[who/coordination/coord_2026_06_27_rosetta_to_vitruvius_looking_glass_active|Vitruvius memo]] |
| A-07 | deploy verify | confirm concept-route CLS post-deploy (live 0.156 vs local 0.134) | Vitruvius memo / M4 live-verify |

> **Gate on M4 deploy (not M3):** the **Vitruvius Q1/Q2 asks** (deploy-ownership + carve-timing) must be resolved before any M4 deploy. Deploy routes through the `Websites.aDNA` build role-graph ([[what/decisions/adr_041_build_scale_role_graph_subtype|ADR-041]]). Not an M3 blocker.

---

## A-11 / A-12 calibration recommendation (finding vs. ratified choice)

Full reasoning + evidence-both-ways in [[how/campaigns/campaign_looking_glass/artifacts/introspection_notes|introspection_notes §4]]. Summary for the operator's DP3 ruling:

- **A-12 (Lattice Protocol undefined) → recommend FIX.** No ADR/ethos rationale for asserting a coined term 7× and never glossing it; one-line gloss costs ~nothing and doesn't touch the ethos dial. *(In the bounded set as a stretch.)*
- **A-11 (hero defers functional definition) → recommend ACCEPT-AS-TRADE-OFF.** This is the **ADR-ratified ~55/45 ethos dial** — the audit should not unilaterally overturn a ratified brand posture, and the ethos-forward voice is the site's most-praised quality. **Operator-optional:** a non-destructive *additive* lift (one functional sentence *beside*, not replacing, the values opener) buys the newcomer win without spending the ethos. If kept as-is, A-11 is recorded as a **deliberate, measured trade-off — not a defect**.

---

## ⛔ DP3 decision block — operator sign-off (M4 does not start until signed)

> Standing Order 1 — phase gates are human gates. **RATIFIED by the operator 2026-06-28.**

**1. Bounded set (BS-1…BS-4):**  ☑ **approve as-is**  ·  ☐ approve with changes

**2. A-06 swing (graph SSR, L-effort):**  ☐ include in M4  ·  ☑ **defer to follow-on**

**3. A-12 stretch (term gloss):**  ☑ **include**  ·  ☐ defer

**4. A-11 calibration ruling:**  ☐ accept trade-off (no change)  ·  ☑ **approve the additive lift** (keep the values opener; add one functional sentence beside it)  ·  ☐ defer

**5. A-03 (`what-ground-truth` exemplar) in the sweep:**  ☑ **include (proof case)**  ·  ☐ defer to keep minimal

**6. Structural option S1 — deploy as its own gated step/DP?**  ☑ **keep in M4 + live-verify**  ·  ☐ make it a separate gate

**7. Structural option S2 — merge M4↔M5?**  ☑ **keep separate**  ·  ☐ merge

**Operator:** Stanley   **Date:** 2026-06-28   **Ruling / notes:** Ratified as recommended — A-06 deferred to a follow-on; A-11 takes the additive functional line (ethos dial preserved); deploy stays gated in M4; M5 separate.

*DP3 ratified → campaign-master DP3 row set to `ratified`; M4 (`mission_improve_remeasure_m04`) opened.*

---

## Cross-references

- [[how/campaigns/campaign_looking_glass/artifacts/findings_register|findings_register]] (input) · [[how/campaigns/campaign_looking_glass/artifacts/introspection_notes|introspection_notes]] (calibration) · [[how/campaigns/campaign_looking_glass/artifacts/instrumentation_log|instrumentation_log]]
- [[how/campaigns/campaign_looking_glass/missions/mission_introspect_plan_m03|M3 mission spec]] · [[how/campaigns/campaign_looking_glass/missions/mission_improve_remeasure_m04|M4 mission spec]] · [[how/campaigns/campaign_looking_glass/campaign_looking_glass|campaign master]]
- [[how/campaigns/campaign_looking_glass/artifacts/baseline_snapshot|baseline_snapshot]] · [[how/campaigns/campaign_looking_glass/artifacts/packs/pack_representation_coherence|representation_coherence pack]]
