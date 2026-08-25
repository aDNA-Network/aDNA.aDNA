---
plan_id: mission_haussmann_p1_2_state_of_network
type: plan
title: "P1.2 — State of the network: verifiable modesty as the differentiator, on every surface"
campaign: campaign_haussmann
phase: P1
decade: 1
owner: stanley
status: completed   # 2026-08-18 close session: the owed re-rank ran (4.11 → 4.22, criterion MET; Actionability 2.50 → 4.00), caught 2 S2s (R-112/R-113, both fixed + gate-pinned + red-proven), suite 442 → 444 zero xfail, ⛩ operator deploy GO fired → prod tree=84dd3bd live-verified on the apex, title-alignment memo delivered. All five acceptance criteria met AND the verification_method's ranker bar cleared.
mission_class: design_excellence
executor_tier: fable   # the campaign's signature editorial-design move
token_budget_estimated: "~200–300 kT across 1–2 sessions: surface design + copy + hero proof-of-life re-placement + canonical-properties page + consent round (ADR-016)"
token_budget_actual: "~490 kT across 2 sessions (est. 200–300 kT). Build session ~430 kT — the overrun is the adversarial pass: two independent reviews returned 24 + 5 findings and forced 11 claim corrections, the same unscoped-hostile-read class as P1.1, but this time the burn bought the mission its actual result. Close session ~60 kT: the owed re-rank + 2 S2 fixes + deploy + live-verify + close cascade."
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: [H5 (S1), H12, "claims #7 ('The proof' unsupported)", "instrument §8.3 (highest-leverage move)", "Berthier items: hero proof-of-life + manifesto reframe", "OWID pattern (dossier)", "anti-pattern 7.1 (canonical-properties)"]
vitruvius_dimensions: [D7, D1]
decade_theme: credibility
webforge_patterns: []
patterns_to_author: []
depends_on: [mission_haussmann_p0_1_positioning]
blocks: []
acceptance_criteria:
  - "A dated state-of-the-network surface is live: what runs · what is operator-operated · what is external · what is planned — in the reader's line of sight from home (anti-pattern 7.3 inverted by disclosure)"
  - "'Real public-good work already lives here / The proof' framing replaced by claims the register supports"
  - "Named humans surfaced with consent: operator full name + affiliation reachable ≤1 click from home; Wilhelm Foundation named humans linked only with recorded consent"
  - "Canonical-properties page live (every legitimate domain/handle/repo; footer-linked; og:site_name + Organization sameAs coherent) — the §7.1 clone-site defense"
  - "Hero proof-of-life placement resolved (the Berthier item) + the manifesto 'you already do X' reframe landed"
verification_method: "hostile-read pass + claim-register rows for every new sentence + T0 captures + ranker ≥4.0 on the new surface"
human_gate: true
tags: [plan, haussmann, p1, disclosure, trust]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> The instrument's §8.3: propagate the /community honesty pattern to every surface — the principal
> vulnerability becomes the principal differentiator.

## Why this mission exists

The network is substantially operator-federated and the homepage escalates instead of disclosing (H5, S1) `[D claims #7]`; no named humans on home (H12); the strongest verifiable anchors (Wilhelm Foundation's named founders; the true numbers) are under-used while unsupported superlatives do the talking. `/community` already proves the honest register works. OWID's structural-credibility pattern (ownership/funding sentence + named humans + provenance per artifact) is the dossier's north star for this surface.

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | Design the disclosure surface (placement, structure, dated cadence) + draft all copy from register-verifiable facts only | design + copy draft | — |
| O1 | Consent round: operator identity presentation; Wilhelm linkage scope | consent record | ⛩ operator |
| O2 | Build: the surface + home/manifesto edits (proof-of-life placement, reframe) + canonical-properties page + footer wiring | pages live in tree | — |
| O3 | Verify: hostile-read + register rows + T0 captures + ranker; ship under GO | evidence + AAR | ⛩ operator (deploy) |

## Constraints

Every sentence gets a register row; no vanity metrics ever (directive §8); consent precedes any named human/institution (halt condition per directive §7); the honest strata already on /about and /community are the register — extend, don't replace.

## Definition of done

A hostile reader who checks everything finds the site said it first, plainly, with a date.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + ADR-048 + `evidence/claims/claim_register.md`. Execute O0, halt at O1 for consent, then O2–O3. Halt condition: any named institution/person without recorded consent.

## Progress

**All five acceptance criteria met; ⛩ deploy gate outstanding.** One session
(`session_stanley_20260818_125835_haussmann_p1_2_state_of_network`), six commits `462ac2e` → `eff6670`.

| O | Outcome |
|---|---|
| **O0** | `artifacts/p1_2/{consent_record,surface_design,copy_draft}.md` — docs only, zero site diff |
| **O1** | **Satisfied in advance** — the operator ruled all six consent questions in-chat at plan approval, so the gate never halted execution. Ruling recorded verbatim in `consent_record.md`, including the Wilhelm title conflict and the "UCLA Anderson GSB" correction |
| **O2** | `/state-of-the-network/` + `/canonical-properties/` + the shared `network_state.ts` + home hero re-placement + manifesto reframe + `/about` bands 1 and 4 + the canonical-identity single-source pass |
| **O3** | axe 0 × 4 surfaces × both themes · 13/13 properties re-probed logged-out · sole-contributor claim re-verified against the GitHub API · R-58 byte-intact · 4/4 new gates red-proven · **two independent reviews → 11 claims corrected** · register 97 → 111 rows |

**Suite 407 → 442, zero xfail.** Claim register: **zero FALSE, zero unsupported**; R-62's structural
debt — the one §6 explicitly deferred to this mission — **discharged**.

**Not done in the build session, by design:** the deploy. `human_gate: true`.

### Close session (2026-08-18) — the owed measurement, then the gate

`session_stanley_20260818_143557_haussmann_p1_2_close`. Two commits: `84dd3bd` (re-rank + fixes) and
the close cascade.

**Ranker re-run: 4.11 pre-fix → 4.22 post-fix. The ≥ 4.0 criterion is MET** — and was met before the
fixes as well as after; the fixes were taken because the instrument named them, not because the score
needed them. **Actionability, the dimension the remediation targeted, moved 2.50 → 4.00.** Credibility
and Tone held at 4.50. Full instrument + per-persona reasoning: `artifacts/p1_2/rerank_record.md`;
register §7.6.

**Finding before the finding:** the 3.61 is **not reproducible from the record** — it logged neither
its persona set nor three of its six dimensions, and two it did name (*Credibility*, *Tone*) are not
in the canonical `skill_decadal_aar` six. Only three rows are a true comparison; the aggregate delta
is indicative, not measured. This run states its instrument in full so the next one can be compared
to it.

**Two S2s found (no S1), both fixed before the deploy and gate-pinned:**

- **R-112** `/about` — the closing band re-asserted *"a real Founding Architect, a real anchor
  partner, real public-good work"* fifty lines below the band **this mission rebuilt to stop
  asserting it** (R-62): the R-28 family's second recurrence, on the sibling surface that was never
  adjudicated. Rewritten to point at the band that shows. The trailing *"Real stewards grow the
  network"* asserted stewards the same page says do not exist yet — cut, not softened.
- **R-113** `/canonical-properties` — dead-ended at the footer while its twin, built in the same
  mission on the same scaffold, closed with five exits. **Both reviewer lenses found it
  independently.**

Both **red-proven**: injecting the exact regression each row guards turns those two rows red and
nothing else. Suite **442 → 444 green, zero xfail**.

**⛩ Deploy fired under operator GO** — `deploy_record: 2026-08-18T21:45:51Z mode=prod tree=84dd3bd`,
4/4 headers verified at deploy time and again on the apex. **Live-verified on adna.network**: both
surfaces 200, both footer-linked, the disclosure sentence above the stat strip, `og:site_name` =
"aDNA Network", all five load-bearing P1.2 sentences intact, all three retired phrasings absent,
`/install.html` still 200 (the 08-16 collision class).

## AAR (SO#5)

Full 5-line AARs in the two session records. The finding that generalizes: **the author of a
checkability claim is structurally the worst auditor of it.** This mission verified every number
exhaustively and still shipped a verification checklist that verified nothing, a wrong path inside
the section titled "How to check this page", and a claim its own earlier commit had falsified. Two
independent reviewers each found the same two defects within minutes. Budget the adversarial pass as
part of the work — here it changed 11 claims — and note that a page which *invites* verification is
held to a standard an ordinary page is not. That is the trade this campaign took on deliberately.

**The close session sharpened that into two rules.** First: **a rebuilt band does not rebuild the
page.** R-112 sat fifty lines below the band this mission rebuilt against R-62, in the same file,
asserting the claim the rebuild existed to retire — because the fix was applied to the *component*
the reviewer named rather than to the *claim family* they had identified. **Grep the family, not the
component.** Second: **paired pages need paired reviews.** R-113 exists because the Actionability
remediation was applied to the page a reviewer complained about and not to its twin, built in the
same mission on the same scaffold. When two surfaces ship together, a fix to one is a hypothesis
about both.

And a third, about measurement itself: **record the instrument with the score, always.** The 3.61
could not be re-run because nobody wrote down what produced it, which means the criterion it measured
could never have been re-tested — the measurement decays into a claim. On a campaign whose thesis is
verifiability, that is the same defect as an unsupported sentence, wearing a number.
