---
type: artifact
artifact_type: sitrep
artifact_id: sitrep_mid_campaign_20261003
title: "Mid-campaign SITREP — aDNA.aDNA · GARNIER · HAUSSMANN endgame · the standard (2026-10-03)"
created: 2026-10-03
updated: 2026-10-03
status: active
last_edited_by: agent_rosetta
executor_tier: fable
executor_runtime: claude
session: session_stanley_20261003_205316_sitrep_and_primer_authoring
scope: [aDNA.aDNA, campaign_garnier, campaign_haussmann, adna_standard_v2_5, template_release_v8_12, inbox]
relates: [campaign_garnier, campaign_haussmann, release_staging_ledger_v8_12, mission_primer_adna_for_data_engineers, STATE]
tags: [artifact, sitrep, garnier, haussmann, standard, gaps, inbox, primer]
---

# Mid-campaign SITREP — 2026-10-03

> **Provenance tags** (GARNIER convention 2): `[D]` direct observation this sitting · `[I]` inference · `[R]` reference to a record not re-run here. Every count below was derived on 2026-10-03, not carried. Where a prior record was found false, the record is corrected at its home surface and struck, never deleted (SO-6).

## 1 · Headline

- **Nothing moved for nine days.** `[D]` Last commit before this sitting `e413fd6` 2026-09-24 15:01; `how/sessions/active/` was empty. Both campaigns are waiting on human acts, so idleness is structurally expected — but ten inbound memos accumulated unread, one of them a **HIGH security finding** about a surface this vault owns (§4 #8).
- **The branch has never been pushed or CI'd.** `[D]` `vitrine/design` has no upstream; **45 commits ahead of `origin/main`** (`d6ae1b6`, 2026-09-11), 0 behind; local `main` is itself 5 ahead of origin and unpushed; last fetch 2026-09-15 so remote figures may be stale. No push is authorized by any ruling to date (GARNIER CLAUDE §Standing Orders).
- **STATE.md was telling a cold reader the wrong things.** `[D]` §Active Blockers (stamped 2026-09-04) carried HAUSSMANN items only and none of GARNIER's; row 3 claimed `/learn/course/*` is 404 live (**200 today**, `curl` 2026-10-03); row 5 carried an item ruled out of the gate queue on 09-11. §Pending Manual Actions was June-era. Repaired this sitting (§8).
- **GARNIER's reader sitting cannot start as the vault stands.** `[D]` The formative stimulus preview on `127.0.0.1:4466` is **not running** (connection refused); the isolated checkout `~/.cache/garnier-homepage-20260916` is clean. Restart is an agent precondition of P1.3 C2, now recorded in STATE.
- **The one substantial agent-reachable work item is new.** The aDNA explainer for Andy Zhang ([[mission_primer_adna_for_data_engineers]], Operation Primer) needs no `site/`, no push, no deploy, and is queued at fable (§8).

## 2 · Operational state — aDNA.aDNA

| Surface | State `[D]` | Finding |
|---|---|---|
| `STATE.md` | 55,299 B (< 100 KB tripwire); `updated: 2026-09-24` | Stale/partial in four sections — repaired §8 |
| `MANIFEST.md` | skills 57 (27+30) · templates 45 (26+11+8) · ADRs 57 (55 accepted · 1 amended · 1 proposed = ADR-062) — all re-derived from disk, zero drift | `last_edited_by: agent_codex` though the 09-24 review was Rosetta's — corrected §8 |
| `CLAUDE.md` | `version: "8.4"` (doctrine adoption) | Template governance at `.adna/CLAUDE.md` is **8.11**; v8.12 `proposed`, not fired |
| Sessions | `active/` empty; latest history `2026-09/` holds 5 GARNIER-era files | The file named `…20260925_141328_gate49_rebaseline` committed 2026-09-24 14:19 — a clock error already recorded at STATE.md:37; filename order ≠ real order `[D]` |
| Tooling, last known `[R]` | `adna_validate --governance` zero drift (09-24) · chromium gates 698/1/0 (09-24) · gate-49 26/26 + redtest 7/7 (09-25) · `verify_amendments.py` 38 missions / 0 errors (09-16) | Re-run `adna_validate` at this sitting's close (gate-41 class) |
| Stale outbound | `coord_2026_09_16_rosetta_to_hestia_homepage_purpose_descriptions.md` and `coord_2026_09_16_rosetta_to_vitruvius_independent_visual_review.md` both `status: staged` since 09-16 `[D]` | Content re-read: both still current and self-contained ("when the operator authorizes/elects to deliver"). Owed-send pending a send GO — **not** sent this sitting (§9) |
| VITRINE residue | `coord_2026_09_13_rosetta_to_codex_vitrine_design_brief.md` is `ready_for_handoff`; `campaign_vitrine` stays `status: proposed` `[D]` | GARNIER superseded VITRINE 09-15 "without editing its history" (campaign CLAUDE) — left as is; noted here so no cold reader hands it off |
| `scripts/jsonld_census.mjs` | exists since `7956b97` 2026-09-08 `[D]` | GR-6's close recorded "`jsonld_census.md` has no instrument" the day before — the owed row is **likely discharged**; HAUSSMANN's operator queue should retire it at its next re-derivation `[I]` |

## 3 · Campaign state

### GARNIER (`campaign_garnier`, active, runtime claude)

- **Missions** `[D]`: 38 on disk — 4 completed (P0.1 · P0.2 · P1.1 · P1.2), 1 in_progress (P1.3), 33 queued.
- **Open front**: P1.3 C2 — three consenting formative readers (engineer · funder · scientist; ⛔ agents never recruit) read stimulus `6487444` at `:4466` per `artifacts/p1/formative_reader_pack.md`; then two scorers apply the frozen key; then **DP3**. CURRENT pointer: `missions/session_prompts_garnier.md:39` "Collect formative reader evidence".
- **DP3 packet** pre-assembled 2026-09-24 (`e413fd6`): `phase_exit.md` §DP3 — exit criteria, empty reader slot, rulings (a)–(g) at :106–129, P2 options at :131–151 (A all 17 missions 991 kT · B calibrated ≈1,640 · **C recommended** — P2.1–P2.3 + T01 ≈640 kT, re-forecast from T01's actual), **§5 intake order at :153–160 — follow it, do not rebuild**. Ruling (f): `6487444` is **not on `vitrine/design`** (that branch has the b1cf040-era homepage plus G4); merging needs the ruling + a gate-49 `home-*` re-baseline.
- **Budget**: P1 actual 625 ± 155 kT vs 320 committed (SO-11 retrospective filed: 237 kT of the excess is subject-model runtime booked in the executor's unit).
- **Precondition found this sitting** `[D]`: the 4466 preview is down — restart it (per the 09-24 key-reachability record) **before** any reader is scheduled; re-verify 15/15 route hashes.
- **Human-owed, unchanged**: the readers · DP3 rulings (a)–(g) · G5 address · G2 Speed-Insights field reading · ADR-010 Wilhelm co-sign (un-fires G4) · any push/deploy GO.

### HAUSSMANN (`campaign_haussmann`, endgame only)

- **Missions** `[D]`: **34** on disk — 30 completed · 2 in_progress (P5.1, P2.6) · 2 queued (P5.2, GR-7). The charter read `mission_count: 33` (GR-7 never counted) — **corrected to 34 this sitting** (§8), derived not typed.
- **P5.1** `in_progress` since 08-26: five recruited cold readers + a fresh-macOS TTFS run (also discharges P2.6 O0b) + operator-as-outsider. Under AMENDMENT 5 it is **one joint panel with GARNIER, after GR-7**. `evidence/p5_1/` does not exist → the deploy hold is not engaged (recruitment unscheduled).
- **P5.2** queued; hard preconditions discharged by GR-6; blocked on P5.1 **and independently on G2** (no field p75 yet — a calendar blocker the mission graph does not show).
- **GR-7** queued at its convention-13 pre-build gate; receives the eventual diff; nothing ratified.
- **Operator queue of record**: `artifacts/operator_queue_reconciled_20260911.md` (G1 readers :57 · G2 Speed Insights :79 · G3 peer-ratification bundle :88 · G4 ruled (b), fired in source, gate-49 re-baseline discharged 09-25 :105–111 · G5 deferred pending an address :161). It supersedes any owed-list narrated in STATE.

## 4 · Inbox — ten memos received this sitting (committed byte-unchanged, `7840cd4`)

Derived from the inbound corpus, not from `ack_required` (doctrine §6). **No reply authored this sitting** (operator ruling at plan time); first two of the reply sitting are #3 and #8.

| # | Memo (delivered) | Gist `[D]` | Asks of Rosetta | Disposition |
|---|---|---|---|---|
| 1 | `coord_2026_09_02_berthier_to_rosetta_adna_iss_triad_note` (09-26) | ISS open/watch skills live in three homes (aDNA.aDNA · Astro · WebForge); `gate_receiver.py` unauthenticated-write is RC M2.11's first design input. P3. | Census reply — a 4th copy? Names `skill_manage_gate_receiver.md` "at aDNA.aDNA/how/skills/" — **absent here** (`ls` 2026-10-03: only `skill_create/open/watch_iss.md`) | reply sitting (P3); the receiver finding merges with #8 → backlog `idea_upstream_iss_receiver_security_hardening` |
| 2 | `coord_2026_09_07_hestia_to_rosetta_the_promise_is_gone…` (09-24) | Home `HOME.md:45` fixed; our dev copies (`HOME.md.template:54`, `skill_onboarding.md:208`) seen still carrying the marketplace promise. `ack_required: false`. | nothing | **moot** — both dev copies fixed 09-10 (`c5ff7da`, `93dc062`); receipt suffices. Its body says "staged, not sent" while frontmatter says delivered — the sender's record, not ours |
| 3 | `coord_2026_09_16_talos_to_rosetta_adna_contract_g10_adjacency` (09-26) | RC wrote an invocation contract adjacent to the standard's deferred gap G10; flags RC's reading "C1" of §3.1 as an inference the standard does not state. | Optional: correct C1 if wrong. Memo :12: *"Expect this to grade RED at the 21-day threshold on or about 2026-10-07; that is the instrument working"* | **time-boxed** — first item of the reply sitting |
| 4 | `coord_2026_09_25_ariel_to_rosetta_gitignore_inline_comments_and_tarball_pathspec` (09-25) | `.adna/.gitignore:64,71` carry inline comments so `dist/` and `/*.tar.gz` never match (memo :29–38, verified in Tinycast with `git check-ignore -v`); **48 of 120** `*.aDNA/.gitignore` carry the dead `dist/` line (:43). Also proposes `pathspec`/`label` params for `skill_publish_tarball` + a "hand-pass protocol" pattern. | Rule on a template fix via `skill_template_release`; adopt/decline the skill expansion + pattern | **→ v8.12 ledger P11** (this sitting); skill/pattern asks → reply sitting |
| 5 | `coord_2026_09_25_ariel_to_rosetta_iss_notify_hook` (09-25) | One optional non-blocking `adna_launch notify` line for `skill_create_iss` step 6, not before Tinycast M08; reports `.resolved` sentinel files in Warp.aDNA that no ISS skill defines. | Accept / reshape / decline; a view on `.resolved` | reply sitting (low) |
| 6 | `coord_2026_09_25_ss_to_rosetta_seven_lamps_ack_and_ferry_record` (mtime 09-24) | Accepts modify-and-queue (`executor_lane` + optional `harness:` block = v8.12 P6(c)/(d)); ferry grant recorded SS-side; thanks for a duplicate-key defect. `ack_required: false`. | receive | **received** — frontmatter still `status: authored_not_delivered` (sender's field) |
| 7 | `coord_2026_09_26_ariel_to_rosetta_fleet_adoption_and_oip_shelf` (09-26) | Tinycast adoption pattern (OQ-15: `federation_ref` + Palette Contract); a launcher/"command shelf" row for the OIP unification backlog idea. | optional backlog | reply sitting (low); OIP row → `idea_campaign_operator_interaction_patterns_unification.md` at next touch |
| 8 | `coord_2026_09_26_ledoux_to_rosetta_standard_touchpoints` (**10-02**) | City.aDNA's 11 standard touchpoints (`surface_composition_graph` subtype · functor annex · CityEvent · B14 packs · third-party ISS reader glob · feedback classes · office seals · drop-box "published" · gate record `.md` vs `.json` · session-file keys · `subject:`). **HIGH (:69, :76): per-vault ISS gate receivers accept `POST /save` with CORS `*` — any page open in the operator's browser could attempt a gate write**; recommended same-origin or per-gate token, reject cross-origin POST; Rosetta + Astro's runtime owner rule the fix. `ack_required: true`. Asks 1 and 7 wanted answers before City P0 (ruled 09-28) — window passed. `skill_create_iss.md:44` still assumes `:8765`. | 11 rulings + the CORS fix | **HIGH** — backlog `idea_upstream_iss_receiver_security_hardening` + **v8.12 ledger P12** (this sitting); rulings → reply sitting, second item |
| 9 | `coord_2026_09_26_talos_to_rosetta_adr_002_cosigned_by_operator` (09-26) | Operator co-signed RC's ADR-002 on aDNA.aDNA's behalf (`GRANTED_BY_OPERATOR`); no Rosetta session has read it. Three refusable bindings: RC as OIP reference-implementation candidate · RC as the M2.11 ISS runtime home · the consent-prompt shape (:39–42). Supersedes a 09-11 Berthier ADR-002 memo not present here. | read; correct or refuse any binding | reply sitting (medium); operator decision recorded in STATE §Pending Manual Actions |
| 10 | `coord_2026_09_26_vauban_to_rosetta_linkml_toolchain_without_gpl_and_housing` (09-27) | LinkML masters under ADR-062 clause 3; GPL-free uv override (`jsonschema[format-nongpl]`); four conventions LinkML cannot express. `ack_required: true`. | ack two questions: should the standard name the four conventions; where `lattice_core` lives (LinkML.aDNA vs LP) | reply sitting (medium) — **depends on ADR-062, still `proposed`** |

**Derived reply-debt**: 7 counterparts owed a reply (#1 #3 #4 #5 #7 #8 #9 #10 minus the two receipt-only) — none replied to; #2 and #6 are receipt-only. Zero outbound to Ledoux, Talos or Vauban since their memos `[D]` (`grep -l "to: ledoux\|to: talos\|to: vauban" who/coordination/coord_2026_09_2*` → 0 after 09-24).

## 5 · The standard / format — gaps and recommended dispositions

| # | Gap `[D]` unless marked | Evidence | Disposition |
|---|---|---|---|
| S1 | **v8.12 release ledger incomplete** — `proposed, NOT FIRED`, 10 rows, 5 questions, empty ratification | `release_staging_ledger_v8_12.md`; P6–P8 cite "Automator `idea_upstream_*` ×6" that live outside this vault | **P11 + P12 added, question 6 added** (this sitting). Fire when the operator opens the gate |
| S2 | **ISS gate receivers: CORS `*` + unauthenticated `POST /save`** — reported independently by Berthier (09-02) and Ledoux (09-26) → a standard-level defect in a surface this vault ships (`skill_create_iss` + Astro's runtime) | memos #1, #8 | backlog `idea_upstream_iss_receiver_security_hardening.md` (proposed, high); v8.12 P12 candidate |
| S3 | **Standard v2.5 does not define the campaign layer** — campaign · objective · AAR · phase gate · OODA · `executor_tier` · token budget appear only in ADR-016, patterns and context files; an outsider cannot tell what is normative | `adna_standard.md` mentions "campaign" once (ER diagram); §9 missions only | backlog `idea_upstream_standard_codify_campaign_layer.md` (v2.6 candidate). Operation Primer's "normative vs practice" appendix is the first consumer |
| S4 | **Template inconsistency** — `template_mission.md` carries `executor_tier` + `token_budget_*`; `template_campaign.md` and `template_campaign_mission.md` carry neither; mission templates still `type: plan` / `plan_id` | `how/templates/` | backlog `idea_upstream_campaign_template_tier_budget_fields.md`; GARNIER's charter frontmatter is the working model |
| S5 | **Doc count/name drift** — extension-type count 11 vs 20 vs 26 (`ontology.md` frontmatter `entity_count: 26` · body "36 = 16 + 20" · MANIFEST "11"); Network's `context_adna_domain_reference.md` says "14 entity types"; `context_lattice_basics_core_concepts.md` expands aDNA as "Autonomous DNA"; `standard_reading_guide.md` says 1,336 lines (standard is 1,522); `tutorial_design_a_mission` titled "M04 — Pattern Library", `tutorial_run_a_campaign` titled "Documentation Campaign"; `LatticeProtocol.aDNA/what/whitepaper/docs/` holds a stale v2.2 standard copy `[R]` | explorer pass 2026-10-03, paths as named | **not** separate ideas — Primer O0 produces `source_inconsistencies.md`; one follow-up sweep mission authored at Primer close |
| S6 | **"Airlock" is overloaded** — III's vault-to-vault contract (`III.aDNA/what/artifacts/iii_airlock_standard_spec.md`, 65 KB) vs RemoteControl's action-mediation digest (`RemoteControl.aDNA/how/doctrine/AIRLOCK.md`, 24 KB); no doc says so; no unified "how agents talk to each other" overview; coord-memo naming and the cross-graph-write rule (`CLAUDE.md:227` cites "workspace Rule 10" while the router lists 9 Standing Rules) are not in the standard | explorer pass; `~/aDNA/CLAUDE.md` §Standing Rules | backlog `idea_a2a_communication_overview.md`; Primer §4 is its first draft |
| S7 | **Federation docs stale** — `lattice_federation.md` (02-19), `federation_walkthrough.md` (03-20) predate Network · Exchange · Lighthouse · wrapper placement (ADR-045); tier model split (L0 in Network.aDNA, L1–L3 in the whitepaper) | `what/docs/` | Primer §5 writes the current narrative; sweep mission at Primer close decides whether to refresh or retire the two docs |
| S8 | **No workspace doctrine on what may leave the lattice** — public-vs-local-only lives per row in Home's router; `RiemannCommons.aDNA/what/write_gate_checklist.md` is the only concrete instrument; "T0/T1 by construction" is WilhelmAI-local | explorer pass | backlog `idea_external_sharing_doctrine.md`; Primer adopts the write gate as its scrub rule now |
| S9 | **8 `idea_upstream_*` proposed and un-triaged** (iss_gate_open_state_and_verdict_provenance · iss_receiver_fallback_posts_verdicts_into_a_redirect · l1_onboarding_skill_stale_paths · mission_ac_coherence_check · node_manifest_interview_emission · root_triad_exception_discipline · template_decision_provenance · verification_instrument_discipline); **ADR-062** the only unratified ADR, and #10 depends on it | `how/backlog/`, `adr_index.md` | triage at the v8.12 gate sitting; ADR-062 signature is on the operator's list (STATE) |
| S10 | **Model-tier inversion** corrected here 09-24; the same inversion was reported at Home CLAUDE:242 and Operations AGENTS:169 — theirs to fix `[R]` | `CLAUDE.md` §Model-Tiered Execution note | verify at the reply sitting whether a memo was owed/sent (Automator's 09-21 memo was answered 09-24 `[R]`) |

## 6 · Explainer-readiness (for Operation Primer)

- **No current single-document explainer of aDNA exists** `[D]`: `README.md` (24 KB) is quick-start shaped; `aDNA_overview.md` (47 KB) is a pre-v7 fork copy replicated across ~40 vaults with drift; the Lattice Protocol whitepaper (72 pp, v2.1.0, July) is about LP, not aDNA; the site's `/learn/what-is-adna` + `course/` are the most polished outsider prose; `Canvas.aDNA/what/docs/canvas_standard_explainer.md` is the shape precedent ("the spec is the contract; this is the *why*").
- **Topic coverage** `[I]`: vault standard — strong sources (standard §3–7, `ontology.md`, 13 concepts, 30 glossary entries) · work/token economics — strong but internal-jargon-wrapped (ADR-016, convergence model, OODA, model-tiered pattern) · **agent-to-agent + airlock — no outsider-readable material at all** (S6) · network of graphs — strong but fragmented across six vaults (S7).
- **Review machinery**: 16 reviewer personas, none a data engineer (nearest: `standard_archivist`, `diagram_reviewer`, `newcomer_stress_tester`, `anti_bloat_editor`, `movement_skeptic`); `skill_dual_audience_review` directly reusable; `template_reviewer.md` exists → the mission authors `reviewer_data_engineer.md`.
- **Rendering**: `pandoc` + `tectonic` present on this node → Markdown → PDF locally `[D]`.
- **Andy as reader** `[R]`: `LAVentureGraph.aDNA/who/contacts/contact_andy_zhang.md` — builder/engineer, ETL + data-engineering, accessibility; co-owner of RiemannCommons (`zhang8128`); `RiemannCommons.aDNA/README.md` sets the register ("you don't need to learn my tooling conventions").

## 7 · Delivery constraints — Fluxer (operator ruled: Fluxer.aDNA's agents deliver)

`[D]` from `Fluxer.aDNA` on 2026-10-03: the Emissary runtime (`what/code/emissary_runtime/src/rest.ts`) sends **text only** (no upload path) to `#agent-comms` only; `dmRoster` = teddy + stanley; the disclosure roster (`what/context/fluxer/roster_who_was_told_what.md`) lists Andy as "⛔ pre-roster (not on Fluxer)"; aDNA.aDNA is **not a registered consumer vault** (aDNALabs is); body cap 4,000 chars; a file in a `fluxer_outbox/` with `status: staged` sends within seconds; a DM may carry only class `notify`; his replies are T0 — never harvested or quoted. Precedent 2026-10-02: text relay through Jake's desk → iMessage; attachments drop (F-S437-05). Andy's RiemannCommons invite was last recorded pending `[R]`.

→ Operation Primer O5 stages a memo to Aspasia naming these preconditions (join · disclose · `dmRoster` · an attachment path or a carried link · consumer-vault registration or routing via aDNALabs). The delivery act stays a Pending Manual Action in STATE until Fluxer.aDNA confirms.

## 8 · Dispositions taken this sitting

1. Ten inbox memos **received** (committed byte-unchanged, `7840cd4`).
2. **STATE.md** — new ⏭ QUEUED block 2026-10-03; §Active Blockers gains GARNIER rows, rows 3 and 5 struck with corrections; §Pending Manual Actions re-cut to the live human acts (readers · DP3 · v8.12 gate + ADR-062 · Talos ADR-002 bindings · Andy Fluxer preconditions · fetch/push decision); §Active Campaigns gains live GARNIER + HAUSSMANN rows; §Current Phase gains a live pointer.
3. **HAUSSMANN charter** `mission_count: 33 → 34` (derived), `updated: 2026-10-03`.
4. **v8.12 ledger** — rows **P11** (Ariel `.gitignore` fix) and **P12** (ISS receiver CORS/auth) as `candidate`; §3 question 6.
5. **Backlog** — five ideas filed `proposed`: `idea_upstream_iss_receiver_security_hardening` · `idea_upstream_standard_codify_campaign_layer` · `idea_upstream_campaign_template_tier_budget_fields` · `idea_external_sharing_doctrine` · `idea_a2a_communication_overview`.
6. **Operation Primer** authored and queued: [[mission_primer_adna_for_data_engineers]] (standalone, fable, ≈420 ± 120 kT, 6 objectives).
7. **MANIFEST.md** genuinely re-reviewed; `last_edited_by` corrected.
8. Memory updated (GARNIER live state → 2026-10-03; Operation Primer indexed).

## 9 · Open operator decisions (none taken by this sitting)

| # | Decision | Where it lands |
|---|---|---|
| 1 | Supply three consenting readers (after the agent restarts `:4466`) → DP3 | GARNIER P1.3 C2 |
| 2 | DP3 rulings (a)–(g), incl. (f) the P1 exit candidate's identity; P2 option A/B/**C** | `phase_exit.md` §DP3 |
| 3 | Open the v8.12 gate: §3 questions 1–6 (now incl. P11/P12); sign ADR-062 or hold it | `release_staging_ledger_v8_12.md` |
| 4 | Talos ADR-002: accept, correct or refuse each of the three bindings | reply sitting → RC amendment |
| 5 | Send GO for the two 09-16 staged memos (hestia · vitruvius) — still current | `who/coordination/` |
| 6 | `git fetch` + a push decision for `vitrine/design` (45 ahead, never CI'd; push ≠ deploy, convention 20) | STATE §Pending Manual Actions |
| 7 | Summon the Operation Primer O0 sitting (fable) | STATE Resume-Here |
| 8 | Andy on Fluxer: join · disclosure row · `dmRoster` · attachment/link path (Aspasia's acts, operator-approved per act) | Fluxer.aDNA, via the O5 memo |
| 9 | G5 address · G2 Speed-Insights reading · ADR-010 Wilhelm co-sign — unchanged | HAUSSMANN operator queue |
