---
plan_id: mission_haussmann_p3_4_flux_integration
type: plan
title: "P3.4 — Community integration: link only what is alive, say only what is true, honor the human-only line"
campaign: campaign_haussmann
phase: P3
decade: 2
owner: stanley
status: in_progress   # CLAIMED 2026-08-22, session `session_stanley_20260822_165717_haussmann_p3_4_flux_integration`. O0 ✅ (re-probe + register correction, green count LOWERED 2→1); convention-13 AC-coherence pass ✅ COMPLETE (10/10 pairs recorded — **3 of the 4 acceptance criteria are unexecutable as written**, see the pass in the body); ⛩ DP7 next. Prior note kept: ⛩ DP6 discharged. ✅ P0.4 CLOSED 2026-08-21 — `depends_on` SATISFIED, mission CLAIMABLE. ⭐ **AND THE PREREQUISITES MOVED THE SAME DAY**: Aspasia's PUSH signal (`coord_2026_08_21_..._adr054_prerequisites_green`, found untracked mid-session) declares all three GREEN. Re-probed `[D]` rather than trusted: **PR-1 MET** (`legal.terms_url`+`privacy_url` non-null → aDNA-Network/community-policies, 200) · **PR-3 MET** · **PR-2 OWNER-GREEN / METHOD-RED** — config carries `product_name: "aDNA Community"` + `theme_color: #9d7cd8` + self-hosted icon, but the served HTML `<title>` is STILL `Fluxer` (baked into upstream's app-proxy binary; a fork is ruled out by Fluxer ADR-000). ⇒ **2/3 by the register's own stated methods, 3/3 by owner attestation.** ⛩ **THE DP7 QUESTION IS NOW REAL, not a formality**: does "minimal aDNA branding" mean what a CLIENT RENDERS or what an UNAUTHENTICATED FETCH SEES? Only the operator decides — and note this is the FIFTH instance in the campaign of a verification method that does not reach the thing it verifies. O0 MUST still re-probe live (the register ages, and PR-1's CoC is in the policies repo but NOT wired into `legal.*`). The honest no-link fallback remains an acceptable end-state. DP7 already fired EARLY by operator override at P1.1 — the /community link shipped with prerequisites unmet — so the formal GO/NO-GO is still owed. aDNALabs ADR-025 (human-only) + Fluxer SO#8 unchanged.
mission_class: build
executor_tier: opus
token_budget_estimated: "~150–250 kT across 1–2 sessions: prerequisite verification + /community integration copy + ladder mapping + disclosure copy + DP7 gate (ADR-016)"
token_budget_actual:
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: ["flux/flux_assessment_draft.md (O3→O4 recommendation + prerequisites)", "H14 reframed", "aDNALabs ADR-025 (human-only until federation GA)", "Fluxer SO#8 (no syndication; agents disclosed)", "P0.4 prerequisite register"]
vitruvius_dimensions: [D8, D9, D7]
decade_theme: agentic
webforge_patterns: []
patterns_to_author: []
depends_on: [mission_haussmann_p0_4_flux_state_recon, mission_haussmann_p2_6_midscore]
blocks: []
acceptance_criteria:
  - "⛩ DP7 GO/NO-GO on the verified prerequisite checklist: policy floor live on the instance (ToS/privacy/CoC) + minimal aDNA branding + inside-aliveness confirmation (operator/Aspasia) — NO link ships without all three"
  - "On GO: /community links the venue in the site's honest-state pattern (what it is, its early state, its rules); participation-ladder rungs mapped to venue surfaces where true; question path routed (venue vs Discussions division stated)"
  - "All copy ADR-025-compliant (human venue; no agent-exchange framing) + SO#8-compliant (no conversation syndication; agent participation disclosed if/where it exists)"
  - "On NO-GO: /community carries the honest no-link state ('a venue is being prepared; not open yet') — which is already an acceptable end-state"
verification_method: "prerequisite checklist evidence + editorial gate on all new copy + DP7 record"
human_gate: true
tags: [plan, haussmann, p3, community, flux]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> The directive: "this is not a footer-link task." The evidence: linking today is net-negative — so the
> mission is prerequisites-then-link, with an honest no-link fallback that is itself acceptable.

## Why this mission exists

The venue exists and is infrastructure-live, but unbranded, policy-naked, and unverifiable from outside `[D flux]`; ADR-025 caps it human-only until federation GA `[R]`. P0.4 named the prerequisites and their owners. This mission verifies them, then integrates exactly as far as the truth allows — the site's own honesty pattern applied to its newest property.

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | Verify the prerequisite register (live re-probe: policy URLs, branding, registration posture) + obtain inside-aliveness confirmation | checklist [D] | — |
| O1 | ⛩ DP7: GO/NO-GO with the evidence | DP7 record | ⛩ operator |
| O2 | On GO: build the /community integration (honest-state link block, ladder mapping, question-path routing, disclosure copy); on NO-GO: the honest no-link state | copy + pages | — |
| O3 | Editorial-gate pass + T0 captures + register rows; AAR | evidence + AAR | — |

## Constraints

Never operate the instance; every sentence register-verifiable; ADR-025 + SO#8 are hard lines; "linking prominently to a community venue that is not alive" is prohibited (directive §8) — the fallback is not a failure.

## Definition of done

Either a live, honest, compliant link — or an honest absence. Both pass a hostile read.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + ADR-054 + the P0.4 prerequisite register + `evidence/flux/flux_assessment_draft.md`. Execute O0, halt at O1 (DP7), then O2–O3.

## Convention 13 (amended) — AC-coherence pass · **COMPLETE, 10 of 10 pairs, coverage recorded**

> *Can the stated method satisfy the stated test?* Run against **every** (method-bearing ×
> test-bearing) pair, not the pairs that look suspicious — and the coverage stated, so an
> incomplete pass is legible as incomplete. P3.3 ran this pass, checked two pairs, recorded no
> coverage, and shipped Defect 3 anyway. **Executed 2026-08-22, at O0, before any build.**

| # | Pair | Verdict |
|---|---|---|
| 1 | **AC1 × AC1** (method ↔ own test) | ⛔ **DEFECT 1** — see below |
| 2 | **AC1 × AC2** | ⛔ **DEFECT 2** — see below |
| 3 | AC1 × AC3 | ✅ coherent — AC3's compliance test applies to whatever AC1's gate admits |
| 4 | **AC1 × AC4** | ⛔ **DEFECT 3** — see below |
| 5 | AC2 × AC2 (internal) | ⚠ **seam** — see below |
| 6 | AC2 × AC3 | ✅ coherent — every AC2 deliverable is copy, and copy is what AC3 tests |
| 7 | AC2 × AC4 | ✅ coherent **once AC4 is re-worded** (they are the two exclusive DP7 branches) |
| 8 | AC3 × AC3 (internal) | ✅ coherent — ADR-025 + SO#8 are both checkable against rendered copy |
| 9 | AC3 × AC4 | ✅ coherent |
| 10 | AC4 × `verification_method` | ⚠ minor — "editorial gate on **all new copy**" is vacuous on a NO-GO that ships no copy. Moot in practice: the R-95 correction ships on both branches |

*(AC2 × `verification_method`, AC1 × `verification_method`, AC3 × `verification_method` all ✅ —
the O0 checklist artifact, the editorial gate and the DP7 record are each real and available.)*

### ⛔ DEFECT 1 — AC1's method is unreachable by construction

AC1 requires *"policy floor live **on the instance** (ToS/privacy/CoC)"*. O0 proved the instance
returns the **SPA shell with 200 for every path**, including a route that cannot exist. **No
achievable state of this instance will ever serve a substantive document at a path** short of
upstream changes Fluxer ADR-000 forbids. The method cannot be satisfied — same family as P3.3's
Defect 3 (a stdio server invisible to a URL probe), and as convention 14's header-checker.
⇒ Either the method means *"reachable from the instance"* (config URLs count) or the prerequisite
is unsatisfiable. **⛩ DP7 adjudicates; this pass only proves it must.**

### ⛔ DEFECT 2 — AC1's test would reverse a standing operator ruling

AC1 ends *"**NO link ships without all three**."* Executed literally today it demands the
**removal** of the `/community` venue link — which the operator ordered live on **2026-08-17**
via explicit override, with **zero** prerequisites met, residual risk accepted and recorded in
ADR-054 §Status. AC1 was written 2026-08-16, **one day before** the ruling that contradicts it.
⇒ AC1 is not a gate on *whether a link exists*; it is a gate on **whether the existing link gets
promoted**. Stated at DP7 so the operator is not asked to re-decide something already decided.

### ⛔ DEFECT 3 — AC4's NO-GO state is factually false and would make the site lie

AC4 specifies the NO-GO end-state as *"/community carries the honest no-link state ('**a venue is
being prepared; not open yet**')."* The venue **is** open: 200 on `/`, approval-gated
registration, and 23 users / 264 messages inside it `[R 2026-08-20]`. Executing AC4 as worded
would require the site to **stop saying a true thing and start saying a false one** — the exact
inversion of convention 1. ⇒ **AC4 must be re-worded**: on NO-GO the link *stays* in its current
minimal honest-state form and is **not promoted** to ladder-mapped integration. *(Third record in
this campaign that stopped describing the world after the world moved — the same shape as
convention 15's stale-row family, here inside our own acceptance criteria.)*

### ⚠ SEAM — AC2 names a counterpart venue that does not exist

AC2 asks for *"question path routed (venue vs **Discussions** division stated)"*. **GitHub
Discussions is not enabled** on `aDNA-Network/aDNA` — that is claim **R-46**, the S1 FALSE row
whose resolution *re-routed the funnel to this very venue*. The routing to state is **venue vs
repository issues**. Wording fix at O2; no design consequence.

---

**What this pass cost: one read. What it caught: three unexecutable criteria out of four.**
Two of the three are the same root — **AC1 and AC4 were written before the 08-17 override and
never re-read against it.** A mission ratified on these criteria as worded would have halted at a
contradiction, or silently ignored its own gate.

## Progress

### O0 — prerequisite re-probe ✅ (2026-08-22)

Evidence: `artifacts/p3_4/o0_prerequisite_probe.md` `[D 2026-08-22T23:57Z]`, all controls run.
Register corrected: `artifacts/p0_4/prerequisite_register.md`, **green count lowered 2 → 1**
(claims move DOWN, convention 1).

- **PR-1 ◐ SPLIT** (lowered from MET) — config limb ✅ (terms 4,675 B + privacy 3,384 B, both
  200, instance-specific); on-instance limb ⛔ fails with two controls; **the CoC is reachable by
  neither route** ⇒ 2 of the 3 documents the prerequisite names.
- **PR-2 ◐ owner-green / method-red** — unchanged in kind, **six red surfaces not one**;
  `theme-color` contradicts the config; a link preview of the venue reads *"Fluxer — a free and
  open source instant messaging and VoIP chat app."*
- **PR-3 ✅ MET** `[R 2026-08-20]` — unchanged, nothing supersedes it.
- ⭐ **The register's own probe paths were wrong** (`branding.*` → `app_public.branding.*`) and
  read as a total regression. Corrected, with the reason kept.

## AAR (SO#5)

*(before completed)*
