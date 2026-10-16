---
campaign_id: campaign_arcade
type: campaign
title: "Operation ARCADE — write the standard's four relations into its own objects: the access points (Exchange · Terminal), the commercial home and economic platform (AILedger, PBC), the first named profile (aDNA-Medical), and the open public way"
owner: stanley
persona: rosetta
status: active          # ⛩ ratified at the plan gate 2026-10-15 (R3: "Ratify now, run P0 + A1.1") — see §7.7 below
campaign_class: side_campaign
parent_campaign: campaign_garnier
phase_count: 6
mission_count: 15       # derived: ls missions/mission_arcade_*.md | wc -l
estimated_sessions: "16-22"
calibrated_sessions: null
estimation_class: content-novel
token_budget_estimated: 1115
token_budget_uncertainty: 350
token_budget_unit: kT_content_load
executor_tier_default: opus      # judgment missions declared fable; see each card
executor_runtime: claude
priority: high
created: 2026-10-15
updated: 2026-10-16   # G1 RULED (R11–R14) + three memos delivered + A2.1 closed (fifth sitting) — CURRENT → A2.2; prior: A1.4 closed (fourth sitting) — P1 complete, G1 pending
last_edited_by: agent_rosetta
ratification_status: accepted
ratification_date: '2026-10-15'
current_phase: 1
plan: ~/.claude/plans/please-read-the-claude-md-sorted-flask.md
tags: [campaign, arcade, side_campaign, garnier, exchange, terminal, ailedger, adna_medical, standard_v2_6, v8_13]
---

# Operation ARCADE — the shopfronts along the public way

> **Codename** grep'd fleet-unique 2026-10-15 (`Operation Arcade` / `campaign_arcade` = 0 hits; "Passage" collided at 17). The figure continues HAUSSMANN → GARNIER → VITRINE: the *arcade* is the covered gallery of shopfronts along a public way — the open standard is the way, graph products are the shops, the Exchange is where they are offered and verified, and the company that runs the commerce is not the owner of the street.
>
> **Plain version (two sentences):** the aDNA standard now has four relationships it has never written down — two products that are about to become its front doors, a company that is its commercial home and will run the market for graphs, and a stripped-down medical version that is already being built elsewhere. This campaign writes each of them into the standard's own documents, honestly and in the right tense, and adjusts the website campaign so the public story matches.

## §1 Goal

[D] Operator ruling at the session open, 2026-10-15: **AILedger.aDNA is the main operational/entity graph**; B2B / enterprise use of the lattice protocol and the standard is developed under AILedger, PBC with Jake as partner; the aDNA ecosystem is the partner / dog-fooding / usage ecosystem; aiLedger is the *Shopify* — the economic platform on which graphs built to the aDNA standard become networked AI graph products. Exchange.aDNA and Terminal.aDNA, both near launch, are the primary access points for builders. aDNA-Medical is the compliance-focused, modularly stripped-down profile for medical use (on-prem, expandable, airlocked, ledger-validated).

[I] When this campaign is complete: `spec_graph_exchange.md` exists and is the one spec three products cite; the terminal and platform specs describe the products that are launching, not their ancestors; ADR-065 records the standard's position under the two-estate model on the operator's R1 reading; ADR-066 gives the standard a *profile* seam and a release-integrity hash manifest so aDNA-Medical can be a profile of the standard rather than a fork; the v2.6 standard cut and the v8.13 image are assembled for their gates; Vauban's, Noether's, Berthier's and Hestia's open asks are answered; and GARNIER carries the four relations into its claims lanes at DP3.

## §2 Context

[D] Found at the situation review ([[situation_review_20261015]]), every row re-verified at its object:
- The standard, its four ecosystem specs and 28 patterns never mention the Exchange. The placement of `spec_graph_exchange.md` was drafted by this desk 2026-07-11 and **ratified as drafted 2026-08-25** by aDNALabs; the spec was never authored; Terminal built around the gate twice; Exchange's L2 rule-set is stamped `v0-proposed — pending Rosetta`.
- Terminal retired the `aDNA` / `lattice` CLI on 2026-10-06; ~19 files here still name it. `spec_terminal_harness_contract` is v0.1 (LatticeTerminal era). Thirteen Vauban template asks (10-06, 10-07) have no reply.
- **aDNA-Medical already exists as Operation Lister** (`campaign_adna_medical`) in AILedger.aDNA on Jake's forge, Phase 1 done 2026-10-08, held at Gate 1 (Jake + Stanley); its `upstream_candidates.md` lists U1–U25 for this standard; U23 (conformance profiles + hash manifest) is the one change that makes it a profile rather than a fork. The operator's Gate-1 reply was drafted and ruled "post as drafted" 2026-10-10 — no record it was posted (Fluxer A12 open). Human-owed.
- AILedger is the core graph by its accepted ADR-008 (steward, not owner, of the standard); aDNALabs ADR-027 routes the standard to the lab estate with the company as commercial home; **nothing on the record says "economic platform"**, aDNALabs is still "HQ" everywhere, and the company graph is kept off every public face (Hestia's B7 ruling `never`; SR-6; AILedger's own 10-04 memo to this desk is held because our carrier is public).

## §3 Scope (⛩ operator-ruled at the plan gate 2026-10-15)

### In scope
- Standard-side objects: `what/specs/spec_graph_exchange.md` (new) · `spec_terminal_harness_contract.md` v0.2 · `spec_platform_ecosystem.md` v0.4 · ADR-064 (placement) · ADR-065 (estate position) · ADR-066 (profiles + release integrity, with U15 · U18 · U19) · profile scaffolding · the v2.6 cut assembly · the v8.13 image · glossary + pattern touches.
- Replies: Berthier + the Exchange triad · Vauban (×2) · Noether (×3) · Hestia (registry rows) · Lannes/Jake (Lister reading) · Thoth (pre-emptive) · Rand (one row, rides A4.2).
- GARNIER: the DP3 item that names this campaign now; the amendment proposal at A5.1, ruled at DP3.

### Out of scope
- Any edit to `.adna/` (Standing Rule 1) · any cross-vault write (memos only) · aDNALabs ADR-027, AILedger ADR-008/VISION, Lister artifacts, Home inventory (theirs) · pushing to `main`, deploying, releasing without each act's own GO · **public naming of AILedger** until the operator says "publication" (R2) · building Lister (Jake's) · recruiting GARNIER's readers.

### Subsumes

| Plan / idea | Status at subsumption | Absorbed by |
|---|---|---|
| `coord_2026_07_11_rosetta_to_berthier_exchange_graph_spec_placement.md` (draft, ratified 08-25) | ratified, unexecuted | A1.1 |
| `idea_terminal_harness_contract_reanchor` (accepted) · `idea_default_terminal_harness_standard_touch` (deferred, paper row only) | accepted / deferred | A1.2 |
| `idea_upstream_standard_codify_campaign_layer` (v8.13 lane, ruled 10-03) | proposed | A4.1 |
| Noether's `ack_required` ×3 (10-07 · 10-08 · 10-10) | received 10-15 | A4.1 |
| `campaign_vitrine` §1 Exchange/ledger brief | proposed, never ratified | A2.3 → A5.1 disposition |

## §4 Phases & Missions

### P0 — Situation review

| Mission | Title | Sessions | Tier | Deps | Status |
|---|---|---:|---|---|---|
| [[mission_arcade_a0_1_situation_review]] | Situation review, finding register, charter, rulings packet | 1 | fable | — | completed |

**⛩ G0:** charter §7.7 + R1–R4 recorded at their objects. *Taken at the plan gate 2026-10-15.*

### P1 — Access points

| Mission | Title | Sessions | Tier | Deps | Status |
|---|---|---:|---|---|---|
| [[mission_arcade_a1_1_spec_graph_exchange]] | `spec_graph_exchange.md` + ADR-064 + reply to Berthier/the triad | 1 | opus (executed fable, R3) | A0.1 | completed |
| [[mission_arcade_a1_2_terminal_platform_specs]] | Terminal contract v0.2 · platform spec v0.4 · dead-CLI sweep | 1 | opus (executed fable) | A1.1 | completed |
| [[mission_arcade_a1_3_vauban_rulings_packet]] | Vauban's 13 asks dispositioned, ruled, replied | 1 | fable | A1.2 | completed |
| [[mission_arcade_a1_4_registry_truth]] | Exchange/Terminal registry rows → Hestia → gated sync | 1 | sonnet (executed fable) | A1.3 | completed 2026-10-16 |

**⛩ G1:** specs + ADR-064 §7.7; reply send GOs. Budget ≈245 kT. *P1 complete 2026-10-16 (A1.1–A1.4). **G1 RULED 2026-10-16** (operator, plan-time AskUserQuestion, `session_stanley_20261016_174616_arcade_g1_and_a2_1_adr_065`): **R11** all four §7.7 signed as written · **R12** send GO for the three memos, cc as staged (Panacea after the signed blob) · **R13** author the A2.1 prompt and run A2.1 in the same sitting · **R14** push at close. P2 open.*

### P2 — Economic-platform seam

| Mission | Title | Sessions | Tier | Deps | Status |
|---|---|---:|---|---|---|
| [[mission_arcade_a2_1_adr_065_estate_position]] | ADR-065 — the standard's position under the two-estate model | 1 | fable | A1.1 | **completed 2026-10-16** (ADR-065 proposed; 3 glossary + 1 pattern touch; ≈60 vs 70) |
| [[mission_arcade_a2_2_estate_memos]] | ADR-027 amendment proposal → aDNALabs; pre-emptive answer → AILedger | 1 | fable | A2.1 | queued |
| [[mission_arcade_a2_3_public_face_account]] | Tense-labelled, name-free public account → GARNIER claim register | 1 | opus | A2.2 | queued |

**⛩ G2:** ADR-065 §7.7; two send GOs. Budget ≈170 kT.

### P3 — aDNA-Medical seam

| Mission | Title | Sessions | Tier | Deps | Status |
|---|---|---:|---|---|---|
| [[mission_arcade_a3_1_lister_reading]] | Lister Phase 1 read from the standard's side: U1–U25 + §16 | 1 | fable | A2.3 | queued |
| [[mission_arcade_a3_2_adr_066_profiles_hash_manifest]] | ADR-066 — profiles + release integrity (U23) with U15 · U18 · U19 | 1 | fable | A3.1 | queued |
| [[mission_arcade_a3_3_profile_scaffolding]] | Placement · template · validator design · Lister fold path | 1 | opus | A3.2 | queued |

**⛩ G3:** ADR-066 §7.7 (four independent lines). Lister's Gates 1–3 stay Jake + Stanley's. Budget ≈230 kT.

### P4 — The cut

| Mission | Title | Sessions | Tier | Deps | Status |
|---|---|---:|---|---|---|
| [[mission_arcade_a4_1_standard_v2_6]] | Assemble the standard v2.6 cut (ISS gate; replies to Noether) | 2 | fable | A3.3 | queued |
| [[mission_arcade_a4_2_image_v8_13]] | Fire v8.13 (`skill_template_release`) | 1 | opus | A4.1 | queued |

**⛩ G4:** the v2.6 cut and the v8.13 fire — each its own operator gate. Budget ≈240 kT.

### P5 — GARNIER adjustment and close

| Mission | Title | Sessions | Tier | Deps | Status |
|---|---|---:|---|---|---|
| [[mission_arcade_a5_1_garnier_amendment]] | GARNIER amendment at DP3; VITRINE dispositioned | 1 | fable | A4.2 | queued |
| [[mission_arcade_a5_2_aar_close]] | Campaign AAR, graduation, close splash | 1 | opus | A5.1 | queued |

**⛩ G5:** DP3 rules the amendment (parent's gate); closure signed. Budget ≈110 kT.

## §5 Decision Points

| # | When | Decision | Status |
|---|---|---|---|
| G0 | Genesis | Charter + R1–R4 | **accepted 2026-10-15** (plan-time AskUserQuestion, four questions; recorded in [[operator_rulings_packet_20261015]]) |
| G1 | P1 exit | `spec_graph_exchange` + ADR-064 + the two re-anchored specs | **ruled 2026-10-16** (R11 sign all four as written · R12 three send GOs, cc as staged · R13 run A2.1 now · R14 push at close; Stanley, plan-time AskUserQuestion, `session_stanley_20261016_174616_arcade_g1_and_a2_1_adr_065`) |
| G2 | P2 exit | ADR-065; the two estate memos' send GOs | pending |
| G3 | P3 exit | ADR-066 (four lines) | pending |
| G4 | P4 exit | the v2.6 cut; the v8.13 fire | pending (two gates) |
| G5 | P5 exit | GARNIER DP3 amendment (parent) · closure | pending |

Each gate needs a named operator, date, scope and event reference; no agent signature advances a phase.

## §6 Risk register

| Risk | Severity | Mitigation |
|---|---|---|
| A public surface names the company before counsel's word | High | R2 hold; the primer scrub list + `PRIVATE_MARKERS` run on every public-bound artifact; registry `never` ruling respected |
| ADR-number collisions (Exchange 045/052/062 ≠ ours) mislead a reader | Medium | Every ADR cited with its vault; a grep for bare `ADR-0NN` in new files at each close |
| Lister moves under us (Jake's forge; `main` 229 behind) | Medium | Read the worktree at the sitting, pin the commit read; the reading is advisory and dated |
| The v2.6 cut absorbs unratified text | High | ADR-066 and ADR-063 fold only on signature; the four-surface checklist; `adna_standard.md` byte-unchanged until G4 |
| GARNIER's human front (readers → DP3) still owed | — | Not this campaign's; A5.1's amendment waits at DP3 rather than inventing a second gate |
| First-contact budget class | Medium | A1.1 · A2.1 · A3.2 · A4.1 flagged ≈4× (so11 retrospective); re-forecast at G1 from A1.1's actual |

## §7 Verification

Every mission closes with a scoped diff, cited evidence and a five-line AAR; counts derived (`mission_count` = `ls`); `adna_validate.py --governance` zero drift at every commit; every finding tagged `[D]/[I]/[R]/[A]`; a `[R]` row is re-verified before it is cited forward.

## §7.7 Ratification

| Field | Value |
|---|---|
| **Decision** | Charter Operation ARCADE as a side campaign of GARNIER with the scope at §3, the phases at §4 and the gates at §5; execute P0 and A1.1 in the chartering sitting |
| **Ratified-by** | Stanley (operator) |
| **Date** | 2026-10-15 |
| **Status** | proposed → **accepted** |
| **Gate / session reference** | plan-time `AskUserQuestion` R3 = "Ratify now, run P0 + A1.1" · plan `~/.claude/plans/please-read-the-claude-md-sorted-flask.md` · session `session_stanley_20261015_212937_arcade_p0_situation_review_and_a1_1` |
| **Scope of authority** | this charter and P0/A1.1 execution; every later gate (G1–G5) and every outward act (push · send · deploy · release) is its own ruling |
| **Pending co-signs** | none for the charter; ADR-065's reading of ADR-027 needs aDNALabs' (Berthier's) answer before it binds across estates |

## Execution Log

### Chartered at the plan gate; P0 + A1.1 opened — 2026-10-15

- [D] Session `session_stanley_20261015_212937_arcade_p0_situation_review_and_a1_1` (Tier 2, fable). Ten inbox memos receipted `409293c`. Three read-only explorers at plan time; findings re-verified at the object; rulings R1–R4 taken. This charter, `CLAUDE.md`, 15 mission cards, `session_prompts_arcade.md`, `artifacts/p0/situation_review_20261015.md`, `artifacts/p0/operator_rulings_packet_20261015.md` written. GARNIER DP3 item (i) + Execution Log entry. A1.1 opened the same sitting (R3).

### A1.2 closed — 2026-10-15

- [D] Session `session_stanley_20261015_224015_arcade_a1_2_terminal_platform_specs_cli_sweep` (Tier 2; fable on a declared-opus card). Plan-time rulings **R5** push at close · **R6** sweep = live-routing-dead set only. `spec_terminal_harness_contract.md` **v0.2** + `spec_platform_ecosystem.md` **v0.4**, both `proposed` with empty §7.7 → **G1 now holds three specs + aDNA.aDNA ADR-064**. Blob SHAs re-verified on both trees (no-drift case). Dead-CLI sweep derived at the object: 42 / 15 / 2 false / 7 records / **6 annotated** — the "~19" did not reproduce (most hits = this vault's own `lattice home` script, the live `latlab` CLI, the live `aDNA terminal` launcher). aDNA.aDNA ADR-027 found `accepted` since 07-02 (ceremony moot). Panacea re-pin notice staged (send after G1). Three Vauban rows → A1.3. Budget ≈60 vs 70 ± 25. ⚠ Self-catch at close: a bulk ADR-qualifier pass mis-tagged this charter's *aDNALabs* ADR-027 mentions as ours — reverted from HEAD before commit; rule 3 is applied by hand, never by regex.

### A1.3 closed — 2026-10-16

- [D] Session `session_stanley_20261016_164611_arcade_a1_3_vauban_rulings_packet` (Tier 2, fable). Plan-time rulings **R7** accept all eight template rows · **R8** row 6 ratified into the ISS pattern + `skill_create_iss` · **R9** rows 1/2/4 → one new pattern (`pattern_ledger_backed_acceptance_tables`, draft) + row 5's record-identity rule into `template_session` · **R10** row 7's general rule → the v2.6 cut (queued on A4.1). Packet `artifacts/p1/vauban_rulings_packet.md`: 16 rows (13 + 3), ratify 8 · amend 4 · to-v2.6 1 · decline 0. Nine files amended `proposed (v8.13)` + one new pattern; reply to Vauban `outbound_ready` (ROADMAP-v1.1 row 17 closes by pointer; C3 correction; C1/C2 asked back). Validator zero drift; bare-ADR grep clean. Budget ≈55 vs 60 ± 25 (+≈88 explorer at plan time, own line). G1 unchanged.
- [D] Session `session_stanley_20261016_172213_arcade_a1_4_registry_truth` (Tier 2; fable on a declared-sonnet card). Plan-time rulings: cc Vauban + Berthier on the Hestia memo (strikeable at the send GO) · push at close (R5). `artifacts/p1/registry_corrections_exchange_terminal.md` derived at the object (two rows; §0 field→file map from `scripts/build_vaults_data.mjs:203-282`; §3 sanitizer proof 5 PASS / 2 controls REFUSED); memo to Hestia `outbound_ready` (two cards + two inventory first sentences; `status` genesis → active both, Terminal tagline off "soft-fork of cmux"; `github_url` stays empty, both private, PASS); `sync:vaults` GO queued (STATE §Pending). Finding: the rows were stale at the **card** overlay (B7 backfill `9be9794`, 2026-08-29), not the inventory. A1.4 `completed`; **P1 complete; G1 pending**; CURRENT → G1. Budget ≈35 vs 25.

### G1 RULED — 2026-10-16

- [D] Session `session_stanley_20261016_174616_arcade_g1_and_a2_1_adr_065` (Tier 2, fable). The operator sat G1 at plan time (AskUserQuestion, four questions, all as recommended): **R11** sign all four as written → aDNA.aDNA ADR-064 `accepted`, `spec_graph_exchange` v0.1 `accepted`, `spec_terminal_harness_contract` v0.2 + `spec_platform_ecosystem` v0.4 in force (each §7.7 carries Stanley · 2026-10-16 · accepted · this session); `adr_index` tally re-derived 57 · 1 · 1. The terminal spec's blob moved with the signature to `f629b019…` (the SHA Harness pins on receipt of the Panacea notice). **R12** send GOs ×3 (cc as staged) · **R13** A2.1 in this sitting · **R14** push at close. Sends and A2.1 are logged below as they land.

### Sends delivered + A2.1 closed — 2026-10-16

- [D] Same session `session_stanley_20261016_174616_arcade_g1_and_a2_1_adr_065`. **R12 sends**: triad reply → `Exchange.aDNA` `f924872` cc aDNALabs `5d7ac7b2` + Terminal `f48c839` (17:50:26Z, md5_body `b74970e0…`) · Hestia data ask → `Home.aDNA` `d851f63` cc Terminal + Exchange (17:50:27Z, `fb9dc0d7…`; a live s53 lease there — her README lands deliveries regardless) · Panacea re-pin → `Harness.aDNA` `ff3176f` cc Terminal (17:50:27Z, `6209e73f…`; §0 names the signed blob `f629b019…`). Doctrine order kept on all eight legs (identity before the copy, delivery-state after, re-sync, cmp identical). Commit `4eaeab2`. **`sync:vaults` now waits on Hestia's ack.**
- [D] **A2.1 closed**: `what/decisions/adr_065_standard_position_two_estates.md` **proposed** (§1 public way · §2 access points by pointer · §3 commercial home, private-side · §4 the economic platform as an owner × tense table + the VISION:27 reconciliation · §5 ecosystem by conformance · §6 first profile → ADR-066 · §7 never-carries · §8 two A2.2 memo proposals; `cites:` block, 48 ADR tokens all vault-qualified); `adr_index` 60 = 57 · 1 · 2; glossary ×3 name-free (`access point` · `commercial home` · `graph product`); `pattern_federation_readiness` §Related +1. Premise pass first-hand at HEAD (aDNALabs ADR-027 §2/A1/§3 v3 · AILedger ADR-008 + VISION · Exchange ADR-058/059/062). Budget ≈60 vs 70 (the sitting ≈95 with G1 + sends). **CURRENT → A2.2** (prompt authored). **G2 owed**: ADR-065 §7.7 + the two A2.2 send GOs.
