---
campaign_id: campaign_garnier
type: campaign
title: GARNIER — make honest work visibly excellent
owner: stanley
status: active
persona: rosetta
phase_count: 7
mission_count: 38
estimated_sessions: 47
calibrated_sessions: null
token_budget_estimated: 2444
token_budget_original_dp1: 2310
token_budget_unit: kT_content_load
estimation_class: content-novel
executor_tier_default: opus
executor_runtime: claude
executor_runtime_history: codex (genesis through 2026-09-16; see runtime_handoff_20260916)
priority: high
target_site: https://adna.network
predecessor_campaigns:
- campaign_haussmann
absorbs_prospective_scope:
- campaign_vitrine
governing_instrument: VITRUVIUS v1.1
baseline_score: paired provisional v1.1; full breakdowns and limitations in artifacts/p0/baseline_reconciliation.md
evidence_pack: /Users/stanley/aDNA/aDNA.aDNA/how/campaigns/campaign_garnier/evidence/p0
created: '2026-09-14'
updated: 2026-10-03
last_edited_by: agent_rosetta
tags:
- campaign
- garnier
- ratified
calibration_status: uncalibrated
ratification_status: accepted
ratification_date: '2026-09-15'
amendment_implementation: verified
current_phase: 1
---
# Campaign GARNIER

> Structural note, 2026-09-16: this charter was restructured to the vault campaign template at the
> Codex→Claude runtime handoff ([[runtime_handoff_20260916]]) — Status column restored, the
> Decision Points / Verification Strategy / Timeline / Subsumes prose converted back to tables, and
> the dated execution blocks consolidated chronologically under `## Execution Log`. All content is
> preserved; typography was normalized (spacing between fused numbers and words only, no wording
> changes). Prior form is in git history at `afcb788` and before.

### Registry sync under ruling; stimulus/site divergence widens — 2026-10-04 (h)

- `sync:vaults` ran for the first time since 2026-08-17, operator-gated, **grandfathering the 74** admitted vaults after the diff showed 28 unruled rows (`registry_admission.yaml` is now the admitted set; ADR-052 §tiers.6's open question has a file). Four purpose lines + Hestia's B7 data live in the vault `site/`; **built, not deployed**. The formative stimulus `6487444` is untouched; **DP3 item (h)** records the divergence beside (a). gate-49 re-baselined in-container on five routes; chromium 698/1/0.
- `pattern_channel_proof` accepted; ADR-063 (standard errata) proposed for the v2.6 window; primer follow-up sweep 17/17. Open front unchanged: three readers → DP3. Session `session_stanley_20261004_045208_garnier_h_sync_vaults_send_channel_proof_primer_sweep`; ledger entry of the same date.

## Goal

[D] **Homepage purpose, accepted 2026-09-16:** [[homepage_gateway_revision]] makes the front page a concise introduction to the idea, ethos, mission and present project, followed by four task paths. The homepage introduces and routes; destination pages provide depth. This supersedes earlier requirements to retain all homepage sections/eight registry entries. The minimal gateway and tiny three-folder example are Stanley's selected direction. Source/claims, frozen P1 and real-reader gates remain governed as before.

[I] Make adna.network concise, professional and distinctive: a senior engineer can inspect a real mechanism, a funder can identify the work and its current stewardship, and a scientist can follow its lineage and evidence. Preserve the public-good thesis: shared knowledge can help people build AI together, with freedom to inspect, adapt and participate. Retain Agentic DNA and use the biological/cultural inheritance analogy as an explanation after the mechanism; do not claim the project already has frontier-lab capability or democratic governance it has not established.

## Context

[D] Commissioned by the operator through Berthier; genesis evidence is in [[situation_report]], [[reference_dossier]] and [[finding_register_garnier]]. HAUSSMANN's protections and independent endgame remain binding. [I] Craft should make the existing honesty legible in three seconds and useful in three minutes. DP1 accepted the codename and five amendments on 2026-09-15. [D] Executor runtime changed codex → claude on 2026-09-16 by operator ruling; Codex's completed work stays credited unchanged ([[runtime_handoff_20260916]]).

## Scope

### In Scope

First-contact hierarchy/voice, public-good invitation, source fidelity and docs coverage, reproducible proof/lineage, the five-slot Ghibli-pixel program, semantic component discipline, motion/states/social previews, accessibility/performance, human evidence, and mandatory closure/graduation.

### Out of Scope

Reopening positioning, renaming Agentic DNA, an investors page, registry regeneration, peer-graph direct edits, .adna template release, HAUSSMANN or VITRINE historical edits, recruiting humans as agents, and any outward act without its specific gate.

### Subsumes

| Plan / Mission | Status at subsumption | Absorbed by |
|---|---|---|
| VITRINE proposed website craft + docs work | `proposed` (never ratified; history preserved, no status or CURRENT pointer changes) | GARNIER P1–P4, prospectively |
| HAUSSMANN P5.1 / P5.2 / GR-7 | not subsumed — dependencies with their own owners | — |

## Phases & Missions

### P0 — Baseline and instruments

| Mission | Title | Sessions | Tier | Deps | Status |
|---|---|---:|---|---|---|
| [[mission_garnier_p0_1_baseline]] | Freeze baseline and reconcile authority | 2 | opus / codex | DP1 | completed |
| [[mission_garnier_p0_2_instruments]] | Calibrate the added instruments | 1 | opus / codex | mission_garnier_p0_1_baseline | completed |

**⛩ DP2 exit:** Pinned target/exemplar baseline; two isolated v1.1 scorers; added instruments have passing/failing controls; P1 budget presented for operator commitment. Named artifact: `artifacts/p0/phase_exit.md`. Estimated agent sittings: 3; budget: 123 kT (committed at DP1). Both missions completed on 2026-09-15; rough actual 590±210 kT, retrospective filed. DP2 accepted with six amendments on 2026-09-15; see [[dp2_ratification_20260915]].

### P1 — Voice and concision

| Mission | Title | Sessions | Tier | Deps | Status |
|---|---|---:|---|---|---|
| [[mission_garnier_p1_1_homepage_voice]] | Make the homepage demonstrate the mechanism | 1 | opus / codex | mission_garnier_p0_2_instruments | completed |
| [[mission_garnier_p1_2_quickstart_voice]] | Bring the first task into focus | 1 | opus / codex | mission_garnier_p1_1_homepage_voice | completed |
| [[mission_garnier_p1_3_mission_voice]] | Make the public-good invitation concise | 1 | opus / claude | mission_garnier_p1_2_quickstart_voice | in_progress |

**⛩ DP3 exit:** Mechanism-first homepage storyboard and all seven surface word-target dispositions complete; unsupported claims and banned prose zero; formative human feedback recorded for all three decisive classes; P2 tranche scope/budget presented. Named artifact: `artifacts/p1/phase_exit.md`. Estimated agent sittings: 3; budget: 320 kT committed at DP2 (186 kT original preserved). P1.1/P1.2 are completed; P1.3 is in progress with its human evidence owed. The assisted local-provider first-project result is in [[local_model_continuation]]. See [[artifacts/p1/phase_exit]] under [[dp2_ratification_20260915]].

### P2 — Proof, fidelity and midpoint

| Mission | Title | Sessions | Tier | Deps | Status |
|---|---|---:|---|---|---|
| [[mission_garnier_p2_1_proof_lineage]] | Show a reproducible example and its lineage | 1 | opus / claude | mission_garnier_p1_3_mission_voice | queued |
| [[mission_garnier_p2_2_source_fidelity]] | Reconcile glossary and community publishing ownership | 1 | opus / claude | mission_garnier_p2_1_proof_lineage | queued |
| [[mission_garnier_p2_3_docs_review]] | Review the remaining documentation by risk | 1 | opus / claude | mission_garnier_p2_2_source_fidelity | queued |
| [[mission_garnier_p2_3_t01_docs_review]] | Review documentation tranche T01 | 1 | opus / claude | mission_garnier_p2_3_docs_review | queued |
| [[mission_garnier_p2_3_t02_docs_review]] | Review documentation tranche T02 | 1 | opus / claude | mission_garnier_p2_3_t01_docs_review | queued |
| [[mission_garnier_p2_3_t03_docs_review]] | Review documentation tranche T03 | 1 | opus / claude | mission_garnier_p2_3_t02_docs_review | queued |
| [[mission_garnier_p2_3_t04_docs_review]] | Review documentation tranche T04 | 1 | opus / claude | mission_garnier_p2_3_t03_docs_review | queued |
| [[mission_garnier_p2_3_t05_docs_review]] | Review documentation tranche T05 | 1 | opus / claude | mission_garnier_p2_3_t04_docs_review | queued |
| [[mission_garnier_p2_3_t06_docs_review]] | Review documentation tranche T06 | 1 | opus / claude | mission_garnier_p2_3_t05_docs_review | queued |
| [[mission_garnier_p2_3_t07_docs_review]] | Review documentation tranche T07 | 1 | opus / claude | mission_garnier_p2_3_t06_docs_review | queued |
| [[mission_garnier_p2_3_t08_docs_review]] | Review documentation tranche T08 | 1 | opus / claude | mission_garnier_p2_3_t07_docs_review | queued |
| [[mission_garnier_p2_3_t09_docs_review]] | Review documentation tranche T09 | 1 | opus / claude | mission_garnier_p2_3_t08_docs_review | queued |
| [[mission_garnier_p2_3_t10_docs_review]] | Review documentation tranche T10 | 1 | opus / claude | mission_garnier_p2_3_t09_docs_review | queued |
| [[mission_garnier_p2_3_t11_docs_review]] | Review documentation tranche T11 | 1 | opus / claude | mission_garnier_p2_3_t10_docs_review | queued |
| [[mission_garnier_p2_3_t12_docs_review]] | Review documentation tranche T12 | 1 | opus / claude | mission_garnier_p2_3_t11_docs_review | queued |
| [[mission_garnier_p2_4_trust_surfaces]] | Bring current state and governance beside the invitation | 1 | opus / claude | mission_garnier_p2_3_t12_docs_review | queued |
| [[mission_garnier_p2_5_midpoint]] | Measure Decade 1 and ratify the craft wave | 2 | opus / claude | mission_garnier_p2_4_trust_surfaces | queued |

**⛩ DP4 exit:** Every documentation tranche actually reviewed and corrections verified; no inventory-only completion; source-fidelity and proof records complete; two-scorer midpoint pack; Decade 2 replanned and P3 budget presented. Named artifact: `artifacts/p2/phase_exit.md`. Estimated agent sittings: 18; budget: 991 kT (provisional until DP3). Missions remain queued.

### P3 — Visual craft

| Mission | Title | Sessions | Tier | Deps | Status |
|---|---|---:|---|---|---|
| [[mission_garnier_p3_1_design_system]] | Enforce the evolved visual system | 1 | opus / claude | mission_garnier_p2_5_midpoint | queued |
| [[mission_garnier_p3_2_hero_slots]] | Craft the hero and illustration slots | 2 | opus / claude | mission_garnier_p3_1_design_system | queued |
| [[mission_garnier_p3_3_diagram_code]] | Unify diagrams and code treatment | 2 | opus / claude | mission_garnier_p3_2_hero_slots | queued |
| [[mission_garnier_p3_4_motion_social]] | Finish motion, states and social previews | 1 | opus / claude | mission_garnier_p3_3_diagram_code | queued |

**⛩ DP5 exit:** Five-slot program verified; touched templates captured in both themes across the canonical matrix; text/keyboard equivalence and no unapproved token drift; P4 budget presented. Named artifact: `artifacts/p3/phase_exit.md`. Estimated agent sittings: 6; budget: 290 kT (provisional until DP4). Missions remain queued.

### P4 — Hardening

| Mission | Title | Sessions | Tier | Deps | Status |
|---|---|---:|---|---|---|
| [[mission_garnier_p4_1_performance]] | Harden performance and field measurement | 2 | sonnet / claude | mission_garnier_p3_4_motion_social | queued |
| [[mission_garnier_p4_2_accessibility]] | Verify accessibility beyond automation | 2 | opus / claude | mission_garnier_p4_1_performance | queued |
| [[mission_garnier_p4_3_regression]] | Refresh regression and machine evidence | 1 | sonnet / claude | mission_garnier_p4_2_accessibility | queued |

**⛩ DP6 exit:** Full injected gates, markup and pinned visual container pass; no new skips/xfails; automated/manual AA evidence complete; lab and field dispositions separate under the accepted exception policy; P5 budget presented. Named artifact: `artifacts/p4/phase_exit.md`. Estimated agent sittings: 5; budget: 218 kT (provisional until DP5). Missions remain queued.

### P5 — Humans, rescore and launch gate

| Mission | Title | Sessions | Tier | Deps | Status |
|---|---|---:|---|---|---|
| [[mission_garnier_p5_1_human_panel]] | Run the decisive and standing reader panels | 2 | opus / claude | mission_garnier_p4_3_regression | queued |
| [[mission_garnier_p5_2_rescore]] | Rescore and prepare the integration handoff | 2 | opus / claude | mission_garnier_p5_1_human_panel | queued |
| [[mission_garnier_p5_3_publication]] | Present the public-launch decision | 1 | opus / claude | mission_garnier_p5_2_rescore | queued |

**⛩ DP7 exit:** At least five cold humans per decisive class and ≥80% passing in each window under the sealed rubric; standing readers preserved; full v1.1 rescore and predecessor integration boundaries satisfied; publication remains separately authorized; P6 budget presented. Named artifact: `artifacts/p5/phase_exit.md`. Estimated agent sittings: 5; budget: 199 kT (provisional until DP6). Missions remain queued.

### P6 — AAR and graph-update closure

| Mission | Title | Sessions | Tier | Deps | Status |
|---|---|---:|---|---|---|
| [[mission_garnier_p6_1_campaign_aar]] | Write the full campaign AAR | 1 | opus / claude | mission_garnier_p5_3_publication | queued |
| [[mission_garnier_p6_2_decadal_aar]] | Run the decadal reviewer and adopter pass | 2 | opus / claude | mission_garnier_p6_1_campaign_aar | queued |
| [[mission_garnier_p6_3_graduation]] | Graduate reusable context | 1 | opus / claude | mission_garnier_p6_2_decadal_aar | queued |
| [[mission_garnier_p6_4_graph_updates]] | Prepare the graph-update wave | 1 | sonnet / claude | mission_garnier_p6_3_graduation | queued |
| [[mission_garnier_p6_5_followup]] | Scope follow-up and review cadence | 1 | sonnet / claude | mission_garnier_p6_4_graph_updates | queued |
| [[mission_garnier_p6_6_close]] | Ratify closure and file the close splash | 1 | opus / claude | mission_garnier_p6_5_followup | queued |

**⛩ DP8 exit:** All AARs, sixteen-lens review, context graduation, graph-update dispositions and review cadence complete; operator signs closure. Named artifact: `artifacts/p6/phase_exit.md`. Estimated agent sittings: 7; budget: 303 kT (provisional until DP7). Missions remain queued.

## Decision Points

Each gate needs a named operator, date, scope and event reference; no agent signature can advance a phase.

| # | When | Decision | Status |
|---|---|---|---|
| DP1 | Genesis close | Charter ratification | accepted with amendments, 2026-09-15 ([[charter_ratification_20260915]]) |
| DP2 | P0 exit | P0 planning baseline and the P1 320 kT budget | accepted with six amendments, 2026-09-15 ([[dp2_ratification_20260915]]) |
| DP3 | P1 exit | P1 voice/formative humans and the P2 tranche budget | pending |
| DP4 | P2 exit | P2 midpoint, Decade 2 replan and the P3 budget | pending |
| DP5 | P3 exit | P3 visual craft | pending |
| DP6 | P4 exit | P4 hardening | pending |
| DP7 | P5 exit | P5 humans/rescore and separate publication authority | pending |
| DP8 | P6 exit | P6 closure | pending |

## Risk Register

| Risk | Severity | Mitigation |
|---|---|---|
| HAUSSMANN P5.2 measurement contamination | High | Freeze source/evidence identity; no GARNIER publication before frozen pack without explicit amended boundary |
| Craft regresses D5×D11 | High | Capture and manual a11y in the same increment; text equivalents, no smaller body text to satisfy word budgets |
| Imagery implies real operations | High | Abstract-only generated assets, five slots, provenance and alt; no synthetic endorsements |
| H1/G4 and counsel | High | Preserve holds; inspect exact candidate clearance before publication |
| Hestia/Vitruvius peer collisions | High | No registry edits or provider forks; stage owned requests |
| Codex/Claude simultaneous writers | High | Active file lease, explicit scope and pre-write recheck. Runtime is claude-only from 2026-09-16 ([[runtime_handoff_20260916]]); the lease discipline stays for any future second writer |
| Score theatre | High | Clause evidence, two isolated scorers, cohort controls, human denominators and ceiling statements |
| Source mirror drift | High | Source→transform→HTML/twin family controls, complete disposition ledger |
| Unavailable field/human instruments | High | Human requirements stay owed; field-data exception follows the accepted policy and never calls missing data green |
| Mission exceeds one window | Medium | 23 kT transition plus bounded work; re-scope above 80 kT before claiming full coverage |

## Verification Strategy

### Per-Mission

| Check | Method | Gate? |
|---|---|---|
| Reached-surface verification with failing controls | The mission's named recipes from [[verification_recipes]] (R-SITE/R-CAPTURE/R-VISUAL/R-VOICE/R-SOURCE/R-TOKENS/R-PERF/R-MACHINE) | Yes |
| Session records complete | SITREP, AAR, evidence, explicit-path commit | Yes |
| Owned diff verified, unrelated changes preserved | R-CLOSE base/HEAD diff + scope check | Yes |
| No orphaned campaign-owned work | Evidence index + rolling closure ledger | Yes |

### Per-Phase

| Check | Method | Gate? |
|---|---|---|
| All mission AARs GO | AAR review at phase close | Yes |
| Exit criteria evidenced | Named `artifacts/pN/phase_exit.md` | Yes |
| Risk/scope changes recorded | Charter + risk register update | Yes |
| Human exit ratified | ⛩ DP gate with named operator, date, scope, event reference | Yes — human |

A stated unknown does not become a pass because another score is high.

### Campaign Validation

| Check | Method | Gate? |
|---|---|---|
| Campaign files indexed; no new global skill/template installed during genesis | Campaign AGENTS index review | Yes |
| Frontmatter, dependency DAG, derived totals, one CURRENT pointer, provenance, protected paths | `verify_amendments.py` (with `--selftest` red fixtures) | Yes |
| Index/graduation updates, full AAR, STATE closure | P6 missions | Yes — P6-owned |

VITRUVIUS v1.1 remains the instrument of record; consume the predecessor instrument without forking it. P0.1, P2.5 and P5.2 use two isolated scorers and the same fixed Nous/Mastra exemplars, full dimension/anchor breakdowns, evidence ceilings and disagreement records. Historical v1.0 scores remain labeled historical; no current baseline is invented by the amendment.

[I] North-star: improve D1, D5 and D6 by at least one supported anchor rung where below four at P0, otherwise preserve them; D7 must not regress. Report all dimensions. Zero false/unsupported claims, zero unadjudicated S1/S2 defects, zero protected-invariant regressions, nav ≤7, zero internal 404s, complete axe matrix with zero violations and manual WCAG 2.2 AA flows remain launch requirements. The canonical adopter capstone target remains ≥4.95, with parallel reviewer dimensions separate.

[D] Approved D-6 uses [[reader_protocol]]: fresh-context synthetic prescreens, early formative humans before visual production, sealed answer keys and ≥80% passing per class in each window among at least five final cold readers per class. Timing/cohort limits and retests are explicit; synthetic work never satisfies a human criterion.

[D] Approved D-10 makes [[word_budgets]] advisory editorial targets. Record overage reasons and preserve meaning, prerequisites, consent and accessible explanation. Unsupported claims and banned prose remain blocking. The added instrument contract versions populations and exclusions, demonstrates passing/failing controls, and reports type/adjective diagnostics separately from VITRUVIUS.

[D] [[field_performance_policy]] owns the accepted insufficient-data exception: passing lab budgets, verified collector receipt, explicit unmeasured metrics and a launch+30-day review followed monthly until sufficient data. Collection-unverified and measured field failure remain blocking. P5.3 records the exact exception in its separate publication gate; missing data is never green. Provider bars are consumed from their pinned owner file, never transcribed.

## Timeline

| Phase | Missions | Sittings | Budget (kT) | Commitment |
|---|---:|---:|---:|---|
| P0 | 2 | 3 | 123 | committed at DP1; executed |
| P1 | 3 | 3 | 320 | committed at DP2 |
| P2 | 17 | 18 | 991 | provisional until DP3 |
| P3 | 4 | 6 | 290 | provisional until DP4 |
| P4 | 3 | 5 | 218 | provisional until DP5 |
| P5 | 3 | 5 | 199 | provisional until DP6 |
| P6 | 6 | 7 | 303 | provisional until DP7 |
| **Total** | **38** | **47** | **2,444** | |

[D] Quality-led, no launch date. **38 missions / 47 estimated agent sittings / 2,444 kT content-load** derive from actual mission frontmatters via `python3 how/campaigns/campaign_garnier/evidence/genesis/derive_campaign.py`. Calibration is unmeasured. Decade 1 scope is approved; P0's 123 kT and P1's 320 kT are committed; P2 and later budgets await their preceding human gates. The DP1 total of 2,310 kT is preserved as the original forecast. Decade 2 architecture remains provisional until DP4. [[budget_basis]] records the original estimate, workload assumptions and human-time separation. Publication stays subordinate to the predecessor frozen-evidence boundary.

## What this campaign protects

- Claims remain at or below their evidence; zero false or unsupported public claims is a launch requirement, not a freshly established present fact.
- Preserve state-of-the-network, canonical properties, consent-qualified people, and disclosed agent authorship.
- Preserve nav ≤7, lowercase canonical URLs, redirects, and zero internal 404s.
- Preserve curated llms.txt, Markdown twins and negotiation, registry JSON, JSON-LD, MCP, and explicit self-conformance boundaries.
- Preserve both themes, dual-theme code, responsive/reflow behavior, keyboard access, automated and manual accessibility evidence, and production header controls.
- Preserve honest-empty community/proposal states, AEP-1/2, registry admission and lifecycle tiers, and the human-only community boundary.
- Preserve site voice, one-new-term discipline, same-diff gates, derived fixtures, alias ancestry protection, and publication controls.
- Preserve HAUSSMANN P5.1/P5.2 and GR-7 ownership, H1/G4 and counsel holds, pt19, and the single-writer lease.

## Notes

[[campaign_architecture]] is the detailed dependency/evidence contract; [[restraint_register]] distinguishes taste from observed mechanisms and states accessibility consequences. [[graph_update_plan]] is the mandatory terminal wave. No doctrine or provider gate instrument is forked.

## Ratification (§7.7)

- **Decision:** accept GARNIER with the five amendments and D-1–D-10 dispositions in [[charter_ratification_20260915]].
- **Ratified-by:** Stanley Bishop, Founding Architect.
- **Date:** 2026-09-15.
- **Status:** accepted with amendments (machine status accepted).
- **Gate / session reference:** DP1 operator chat approval “Approved with amendents.” and subsequent instruction “Implement the plan.”; [[session_stanley_20260915_060016_garnier_charter_amendments]].
- **Scope of authority:** amendment implementation and initial P0 phase; later phase budgets/exit gates and outward acts remain separately gated.
- **Pending co-signs:** predecessor measurement/integration, H1/G4 and counsel clearances remain with their owners.

Later ratified amendments: [[dp2_ratification_20260915]] (DP2, six amendments) · [[next_build_scope]] (bounded design increments, three supersession stages) · [[runtime_handoff_20260916]] (executor runtime codex → claude).

## Execution Log

> Chronological, append-only. Entries preserved verbatim from the pre-restructure charter
> (typography normalized: spacing between fused numbers and words only).

### P0 execution close — 2026-09-15 (historical, before DP2 ruling)

[D] Both P0 missions completed; [[phase_exit]] is the next live decision. [[baseline_reconciliation]] preserves the paired v1.1 breakdowns and uncertainty; [[prescreen_pack]] records synthetic-only observations. [[p0_estimation_retrospective]] records the budget miss and uncommitted P1 proposal. No phase transition or publication occurred.

### DP2 ratification — 2026-09-15

[D] Stanley accepted P0 with the six amendments in [[dp2_ratification_20260915]]. P1 is authorized at 320 kT; the first output is a reviewable homepage mechanism/example/action. P1.3 owns privacy/state disclosure consistency and the formative human checkpoint. P2.2 owns stale-count release fidelity; P3.3 owns fresh-mobile triad readability. P1.1 must prove experimental gate failure behavior before adoption. Preserve AI DNA as an explanatory bridge to Agentic DNA, opt-in knowledge sharing and the public-good mission. No human, field, comparative-rank or publication claim is added by this ratification. DP3 remains the next phase gate.

### P1 execution sitting — 2026-09-15

[D] Source candidate b1cf040 implements the approved five-section homepage, AI DNA/Agentic DNA bridge, voluntary inheritance invitation, quickstart/source-tour fixes and six-route public-good/privacy work. P1.1 complete; P1.2 full authenticated first project and P1.3 formative humans remain owed. [[artifacts/p1/verification_report]] records local 698/one-skip gates, 26 container checks, 180 capture cells and synthetic-only prescreens. No deployment or DP3 acceptance. [I] Rough 260±90 kT against 320 committed; 25–50 kT follow-up estimate, excluding human waiting and unknown billing. Next: [[artifacts/p1/formative_reader_pack]].

### P1 evidence continuation — 2026-09-15

[D] [[first_task_continuation]] records source-stable preview restoration and a real first-task attempt with the installed CLI. The model request returned Credit balance too low; project creation and fresh-session checks remain owed. Stanley selected local formative collection; the worksheet is ready and zero human records have arrived. P1.1 completed; P1.2/P1.3 in_progress; DP3 pending. [I] Latest implementation/evidence actual 330±120 kT vs 320 committed, prior wind-down 30±15 kT additional, remaining 20–35 kT after inputs. No P2 budget was committed and no publication or peer delivery occurred.

### Local-provider P1.2 completion — later 2026-09-15

[D] P1.2 completed through broker C69/Qwen3.6 with exact command, all five file/history checks and separate fresh-session recognition. The model required an initial-commit correction; earlier failed attempts remain evidence. [[local_model_continuation]] records 315±45 kT sitting workload, its variance/measurement basis and remaining 10–20 kT P1 forecast after human input. P1.3 humans and DP3 remain pending. [[next_build_scope]] is a proposed bounded early design increment, awaiting an explicit sequence amendment; no phase advance or website source change.

### Bounded homepage increment — 2026-09-16

[D] Stanley accepted [[next_build_scope]], the narrow early-visual exception. [[homepage_design_pass]] delivers source 0c77b61 on isolated branch `garnier/homepage-20260916`, preview http://127.0.0.1:4466/. P1 source b1cf040 and all 15 route hashes at port 4465 remain unchanged. P1.3 readers and DP3 are still open; no general P2/P3 entry or publication. [I] Additional design workload 65±25 kT against 60±25 forecast, separately booked from P1; billing unavailable.

### Clean-homepage expansion completed — 2026-09-16

[D] [[clean_homepage_revision]] records the accepted expansion and source e745990 at isolated 4466. [[clean_homepage_visual_review]]: three independent perspectives, three implementation rounds, no remaining blocking visual finding. [[clean_homepage_verification]]: full 696 passed / 3 skipped; 12 zero-axe cells; 12 shared comparisons exact; all 15 frozen P1 hashes unchanged. R-VISUAL is now required for substantial visual changes; prospective P3.1/P3.2 acceptance updated, missions still queued. P1.3 actual readers and DP3 remain open; no general phase entry or publication.

[I] Additional actual 160±50 kT content-load versus 120±40 forecast, including reviewers; billing unavailable. Separately booked from earlier 65±25 kT design and P1/research totals. Session/AAR: [[session_stanley_20260916_052556_garnier_clean_homepage]].

### Runtime handoff and charter restructure — 2026-09-16

[D] Stanley ruled Claude (Rosetta) takes over GARNIER execution fully; Codex retires from the campaign. [[runtime_handoff_20260916]] is the ratification record. The open gateway session transferred mid-flight with scope and forecast inherited; this charter was restructured to the vault template (form only, content preserved) and the campaign CLAUDE.md compressed to pointer + delta under the same ruling. Completed Codex work stays credited unchanged.

### Ratification batch + re-orientation — 2026-09-17 / 2026-09-24

[D] 2026-09-17: Stanley ruled "All recs approved." — [[formative_stimulus_repin_20260916]] (stimulus → `6487444`/4466), [[panel_merge_brief]] (one joint endgame panel with HAUSSMANN P5.1, after GR-7), ADR-060, ADR-061 and [[pattern_measurement_is_the_artifact]] accepted; G4 option (b) ruled; G5 deferred pending an address. 2026-09-24: the batch's unperformed acts executed (key-reachability record, AMENDMENT 5 activation, G4 fired in source, Prometheus reply delivered), inbox received and answered, campaign surfaces repaired. P1.3 C2 (three consenting readers) and DP3 remain open; no phase advance, push or deploy.

### DP3 pre-assembly — 2026-09-24

[D] The operator chose "Pre-assemble DP3" at plan time; P1.3 C2 readers are still owed. [[so11_retrospective_p1]] was filed:
- P1 is at 625±155 kT against 320 (1.95×; P1.2 at 4.8×, with 237 kT of it subject-model runtime);
- the eleven forecast pairs split into a known-method class (0.63–1.33×) and a first-contact/external-runtime class (4.0–5.4×).

[[artifacts/p1/phase_exit]] §DP3 packet appended: exit-criteria table, empty reader slot, rulings (a)–(g), and P2 options A 991 / B ≈1,640 / **C first segment ≈640, recommended**. The P2 envelope and the documentation population were re-derived with 0 drift. New finding (f): the gateway `6487444` is not on `vitrine/design`. The trees share no `site/` file, the only textual conflict is `MANIFEST.md`, and a merge would need a gate-49 home re-baseline. No status, budget, site or checkout change; DP3 remains `pending`.

### Rulings packet accepted in full — 2026-10-03

[D] The operator accepted every recommendation in [[operator_rulings_packet_20261003]] (14 rows) at plan time, 2026-10-03, and selected four lanes (`session_stanley_20261003_213535_garnier_rulings_and_lanes`). For this campaign: **B1 — DP3 rulings (a)–(g) taken in advance, accepted as proposed; (g) = P2 Option C** (P2.1 · P2.2 · P2.3 · T01 committed ≈640 kT, band 430–1,040; T02–T12 · P2.4 · P2.5 `provisional_until_T01_actual`) — written into the 17 P2 mission frontmatters; **(f)**'s merge stays sequence-gated on keyed reader records; **B5** — three formative readers this week, five cold readers after GR-7; **C1** — branch push GO'd, pre-check resolved (Vauban memo `privacy_class` downgraded P1 → P0 by the operator with reason logged), push itself not this sitting; **C2** — no deploy. The `:4466` preview was restarted and the 15 route hashes re-verified (15/15). DP3 itself remains `pending` on the three reader records; no phase advanced.

## Completion Summary

Deliverables: pending campaign execution. Descoped: none approved. Key findings: genesis register only. Scope changes: VITRINE prospective scope absorbed; five charter amendments accepted; documentation assigned to twelve bounded tranche missions; executor runtime codex → claude (2026-09-16). Original proposal archived. Follow-up campaigns: to be scoped at P6.5.

## Campaign AAR

- **Worked:** pending.
- **Did not:** pending.
- **Finding:** pending.
- **Change:** pending.
- **Follow-up:** pending P6.5.
