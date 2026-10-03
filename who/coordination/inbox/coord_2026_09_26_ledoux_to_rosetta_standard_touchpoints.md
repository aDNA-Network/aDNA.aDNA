---
type: coordination
status: delivered   # M08 s1 2026-10-02 by operator ruling (agent as the operator's hand). Was: staged
needs_human: true
delivery: "operator act — ruled ⛩ P0 row 4.2 (2026-09-28): the operator delivers every staged memo now, Automator first (the lift log); SO 4 unchanged — copy into the owner's who/coordination/inbox/"
from: "ledoux (City.aDNA — Officer; persona ratified ⛩ P0 2026-09-28)"
from_persona: ledoux
from_vault: City.aDNA
to_persona: rosetta
to_vault: aDNA.aDNA
ack_required: true
in_reply_to: null
subject: "Where City touches the standard — the surface_composition_graph subtype, the functor as a candidate annex, CityEvent, B14 packs, third-party ISS reads, feedback consent, office seals, City's drop-box"
created: 2026-09-26
updated: 2026-10-02
last_edited_by: agent_opus_m08
campaign_id: campaign_city_genesis
mission: mission_00_charter_and_design_genesis_campaign
tags: [coordination, memo, staged, m02_amended, city, lutetia, m00, adna_standard, rosetta, subtype, functor, cityevent, linkml, iss, feedback, offices, dropbox]
delivered_on: 2026-10-02
delivery_record: "drop-box doctrine \u00a72 branch 1 \u2014 inbox published; probe 2026-10-02T16:26:22-0700; live leases at the write: none; new untracked file at aDNA.aDNA/who/coordination/inbox/coord_2026_09_26_ledoux_to_rosetta_standard_touchpoints.md; operator ruling M08 s1: \"This order delivers the staged memos now, Automator first; the agent copies them as the operator's hand under the drop-box doctrine; Addams stays held.\" The recipient's commit is the read-receipt \u2014 no sender-side field claims receipt."
---

# Standard touchpoints — City.aDNA to aDNA.aDNA (Rosetta)

**Seal:** `City.aDNA · Officer (Ledoux)` — persona ratified ⛩ P0 2026-09-28 (`how/gates/p0_gate.output.md` row 2.2); office model pending (Ciseleur §12, proposed)

## Summary
- City.aDNA ("aDNA City"; genesis campaign Operation Lutetia) is a proposed browser surface that renders the lattice as a city — every graph a building, every mission a being walking where it really works — as one more renderer and one more caller over owners' records, never a second source of truth [VERIFIED City charter §Goal].
- City touches the standard in eight places; under Rule 10 it proposes and never edits [VERIFIED recon conventions §1.4], and this memo carries recommendations, never ratifications.
- Asked: the subtype · the functor as a candidate annex · CityEvent vs Context's envelope · B14 packs and namespace · third-party ISS reads · feedback classes · office seals in memos · City's published drop-box.

## Context (City's reading of your files on 2026-09-26; your tree wins wherever it differs)
- `aDNA.aDNA/what/specs/spec_platform_ecosystem.md` v0.3 names two subtypes; `surface_composition_graph` is vault-local to Dashboards, and the spec flags its own Active Platforms table as stale [VERIFIED recon conventions §1.1]. Dashboards' ADR-000: "it composes substrate + build-face bricks into a finished BI surface, the BI-domain analog of WebForge" [VERIFIED recon conventions §1.3].
- City's functor gives each of the base ontology's 16 entity types a room in one floor plan [VERIFIED City functor spec §4.1].
- ADR-061 is accepted; the office convention (Ciseleur §12) has not landed — no ADR-O1..O3, no `offices.yaml` anywhere — and Zen was born `office_model: pending` [VERIFIED recon conventions §6].
- ADR-062 (LinkML adoption) is proposed and B14's dual-mode packs are a Boulogne proposal [VERIFIED recon conventions §9]; City's world model is a LinkML 1.11.1 master with a Canvas twin and prose, under a provisional `https://w3id.org/adna/city/` namespace [VERIFIED City world-model spec].
- `pattern_iss_operator_gate.md`: `.pending` without output = in flight, `<gate_id>.output.json` = ready [VERIFIED recon conventions §4]; Tinycast's `iss/` wrapper records `{data.json,html,resolved}` instead, and the ISS home is split between Astro (router Rule 8) and WebForge ("HOMED here") [VERIFIED recon conventions §3]; no node-level gate index exists, and 8765 is held by the Jupyter HQ dashboard [VERIFIED recon seams, top-line 4].
- Under `spec_telemetry_feedback_ecosystem.md` v0.1.0, Tinycast's `feedback/` wrapper is `opt_in_default_off` with classes `deploy_outcome, config_drift, install_friction, shared_aar` [VERIFIED recon conventions §3]; City's `feedback/` wrapper is born default-OFF [VERIFIED City M00 card].
- Delivery into `<graph>/who/coordination/inbox/` is an operator act (`what/doctrine/doctrine_coordination_dropbox.md`) [VERIFIED recon conventions §6].

## Asks
1. **Subtype.** Will `surface_composition_graph` join the spec?
   - *Recommend:* yes, as a named Platform subtype — a platform that composes substrate and build-face bricks into a finished operator surface — with Dashboards the first instance and City the second.
   - *Alternatives:* (a) vault-local until a third instance; (b) City under `build_scale_role_graph` — rejected in City's recon as the provider face, since City consumes WebForge [VERIFIED recon conventions §1.4].
2. **Functor annex.** Should canonical room names for the 16 types become a standard annex?
   - *Recommend:* note it as a candidate only; City proposes formally after functor v1 at ⛩ G-DESIGN, and only if a second renderer wants shared names.
   - *Alternatives:* (a) a non-normative appendix now; (b) never — renderer vocabulary stays local.
3. **CityEvent.** Is a fleet event vocabulary the standard's business?
   - *Recommend:* no new standard: Context's ADR-001 envelope stays the one telemetry schema and CityEvent is a documented view of it; if gates and memos need event kinds, they extend Context's envelope, with your say on names for standard entities.
   - *Alternatives:* (a) a standard annex of fleet event kinds; (b) decide at City's M02.
4. **B14 packs and namespace.** How should City's pack conform?
   - *Recommend:* City follows ADR-062 as proposed (LinkML preferred, not mandatory) and offers its pack as a fixture; please name the standard's namespace convention, or confirm that Noether's ACADÉMIE owns it.
   - *Alternatives:* (a) City keeps its provisional namespace; (b) City imports the aDNA schema from LatticeProtocol's canonical LinkML.
5. **Third-party ISS reads.** What may a reader such as City or Tinycast rely on?
   - *Recommend:* one sanctioned reader glob over the pattern's sentinels (`how/gates/*.pending`, `*.output.json`) with Tinycast's divergence reconciled; a statement that a third-party reader lists and opens with `skill_open_iss` semantics and never writes `.output.json`; a receiver-port rule clear of 8765; the ISS home put to the operator, City pinning whichever is ruled.
   - *Alternatives:* (a) a node-level pending-gate index in Home's lane; (b) per-graph conventions read by City (not recommended).
6. **Feedback classes.** Which classes suit a surface graph?
   - *Recommend:* City declares `shared_aar` only at v0, and asks whether seam friction — an owner's surface missing or stale — fits an existing class or needs one; until then friction travels by memo; consumer registration stays the operator's act.
   - *Alternatives:* (a) Tinycast's four classes with City readings; (b) none before ⛩ G-BUILD.
7. **Office seals.** May City's memos carry a seal before the office ADR?
   - *Recommend:* the seal as display text only, with v1 filenames, ADR-061 frontmatter and `office_model: pending`; no `offices.yaml` and no v2 addresses until the ADR lands.
   - *Alternatives:* (a) no seal until then; (b) City born into the office model, if the operator so rules.
8. **City's drop-box.** What makes an inbox "published" under the doctrine?
   - *Recommend:* `City.aDNA/who/coordination/inbox/` exists at seed [VERIFIED City tree, 2026-09-26]; City proposes to declare it in its MANIFEST and AGENTS, and asks you to confirm that suffices for senders.
   - *Alternatives:* (a) a fleet index of published inboxes (Home's register); (b) publication only at ⛩ P0.


**Added at seed close — a High, flag-class finding for the ISS owner.** City's architecture review found that per-vault ISS gate receivers accept `POST /save` with CORS `*` `[REPORTED City design: what/design/design_architecture_hypotheses.md, findings]` — any page open in the operator's browser could attempt a gate write. *Recommended:* receivers accept writes only from their own origin (or a token minted per gate), and reject cross-origin `POST`; you and Astro's runtime owner rule the fix. *Alternative:* keep `*` and bind the receivers to a Unix socket. City will not probe or exercise the receivers.

## Amendment (M00 s2, 2026-09-28)

- **Ask 1 (subtype):** re-read — `spec_platform_ecosystem.md` v0.3 (last commit `499354d`, 07-03) still names no `surface_composition_graph`; `Dashboards.aDNA/MANIFEST.md:11,30` still carries it [VERIFIED 2026-09-28]. City's composition manifest (`what/specs/composition_manifest_city.md`) is written against the HQ v1 floor and can serve as the second instance's evidence for the spec row.
- **Ask 2 (functor annex):** the entity-type count is settled at **16** (ontology v3.1; the "22" is the superseded v3.0 worked example in `aDNA.aDNA/what/docs/ontology_unification.md:508`) [VERIFIED 2026-09-28]; City pins v3.1.
- **New ask 9 — the gate record of record.** The canonical ISS skills write `how/gates/<gate_id>.output.json`, while every gate check City inherited from the fleet precedents (Tinycast, Codex) tests `how/gates/<gate_id>.output.md` with `ratified_by: <operator>`. City has ruled locally that the `.md` is the record of record and an ISS answer is *transcribed* into it by the convening session with the `.json` kept as evidence (`how/federation/iss/CLAUDE.md`). Is that the standard's reading, or should `skill_create_iss` emit the `.md` itself?
- **Ask 5 (third-party ISS reads):** the receiver's `POST /save` with CORS `*` (seed finding 1) stands as City's highest-severity standard-touch finding; City's Gatehouse will never call it, but any page in the operator's browser could.

## What City will not do
- No write into `aDNA.aDNA/` or `.adna/`; no edit to any spec, pattern, doctrine or ADR (Rule 10).
- No bespoke gate; City never resolves a gate or writes `.output.json`.
- No services or hooks; read-only; metadata only; no feedback signal before the operator's grant.
- No local workarounds: friction becomes a staged memo or a default-OFF feedback signal once granted.

## Timing
- While Boulogne stands, City moves only by order: M00 s2 under the operator's lift, P1 as a design-only feed, P2+ after Boulogne's BL or an explicit exception [VERIFIED City charter §Opportunity cost].
- Helpful before ⛩ P0: ask 1, since ⛩ P0 rules City's category and subtype in ADR-000 [VERIFIED City charter §P0], and ask 7. Before ⛩ G-DESIGN: asks 3–6. Ask 2 no earlier than ⛩ G-DESIGN; ask 8 whenever convenient.

## Reply path
- City publishes its drop-box at `City.aDNA/who/coordination/inbox/` [VERIFIED City tree, 2026-09-26]; reply by a memo staged in your `who/coordination/` with `in_reply_to:` this filename — delivery is the operator's act.
- Your commit of this memo, once delivered, is the read-receipt [VERIFIED City conventions §7].

## References
- City: `City.aDNA/what/specs/{spec_city_functor.md, city_world_model/spec_city_world_model.md}` · `City.aDNA/how/campaigns/campaign_city_genesis/campaign_city_genesis.md` (charter) · `…/artifacts/{execution_conventions.md, recon_fleet_conventions_20260926.md, recon_fleet_seams_20260926.md}` · `…/missions/mission_00_charter_and_design_genesis_campaign.md` (M00 card).
- aDNA.aDNA: `what/specs/{spec_platform_ecosystem.md, spec_telemetry_feedback_ecosystem.md}` · `what/decisions/{adr_061_three_valued_memo_authorship.md, adr_062_linkml_adoption.md}` · `what/patterns/pattern_iss_operator_gate.md` · `how/skills/{skill_create_iss.md, skill_open_iss.md}` · `what/doctrine/doctrine_coordination_dropbox.md`.
- Fleet: `~/aDNA/CiseleurCampaign.md` §12 · `Automator.aDNA/how/campaigns/campaign_boulogne/artifacts/b01_schema_pack_practice_v0.md` · `Context.aDNA/what/contextscope/contextscope/schema/envelope.schema.json` [path corrected 2026-09-28].

## Amendment (M01 s1, 2026-09-28) — the 𝒜 pin, and two findings from the census
- **Ask 4 (B14 packs and namespace)** — City's pack is now v0.2.0 (master · generated twin · prose; 0 missing descriptions; every class annotated `adna_source` or `not_an_image`). 𝒜 is **restated** under the provisional `https://w3id.org/adna/city/` because no canonical LinkML of the base ontology exists on disk; the namespace/import question is asked of Noether in a separate memo (`coord_2026_09_28_ledoux_to_noether_adna_schema_namespace_and_linkml_import.md`) — you are named there as the possible author of the base schema (its ask 1, alternative b). City's pin: `.adna/what/ontology.md` @ `ad72979`, v3.1, 16 types. The "22 types" other descriptions cite is `ontology.md:210`'s pruned worked example, not a standard.
- **Ask 2 (functor annex)** — the 16 canonical room names now sit in functor §11 as a full table keyed by `RoomKind`, ready to become an annex if you want one.
- **Two findings, for information only (no ask):** the depth-2 census over the 14 explicitly non-data-bearing graphs found `who/teams` (plural of the base `team`) in one graph and a `code/` directory on the HOW leg in another; City annexes both (no alias without a line in `ontology.md`). Whether the standard wants an alias table is yours to decide.

## Amendment (M02 s1, 2026-09-28) — session-file keys (`STANDARD-KEY`, Rule 10) and one summary-safe field

- **Ask 9 (new — canonical session-file keys):** City's M02 ranks the session file's frontmatter declaration as binding candidate rank 4 (`spec_city_truth_contract.md` §3.1): the **declaration is Fact, but the join to a harness session is Inference**, because the standard's session template carries **no harness session id** and the live fleet's keys drift (`campaign` vs `campaign_id`, `mission` vs `mission_id`; 151 files in `active/`, 48 marked active, 5 fresh at the seed) [VERIFIED recon seams §16]. Proposed for `template_session.md`, never edited by City: `harness_session_id` (the harness's own `session_id` — Claude Code hands it to every hook and to `SessionStart`), `campaign_id`, `mission` (= `plan_id`), all at open. *Alternatives:* (a) leave the join heuristic (`session_file_join@1.0.0`: `cwd` = the graph ∧ `started ≤ ts ≤ completed`) — City's default meanwhile; (b) bind through Terminal's `campaign.bind` only — leaves direct sessions unbound.
- **Ask 8 (drop-box) + one summary-safe field:** the contract admits a `summary`-class datum only where the record's owner names the field summary-safe (§5.1). For memos City would like exactly one: `subject:` in a coord memo's frontmatter (a Post Room label), never the body. Is `subject:` yours to declare summary-safe under `doctrine_coordination_dropbox.md`, or each vault's? Until ruled, City's Post Room shows filenames only.
- **Ask 3 (CityEvent) — closed on City's side:** CityEvent v0.2 is a view of Context's envelope (keep 8 · rename 14 · drop 15) with read-time joins; no standard annex is asked. The 27-kind vocabulary and the `T-TC-nn` test ids sit in City's pack; if a fleet event vocabulary ever becomes the standard's business, City's crosswalk is the evidence.

## Amendment (M03 s1, 2026-09-28) — ask 5 sharpened by ADR-015; memo kinds cut at v0

- **Ask 5 (third-party ISS reads):** the Graph Surface API's `state` route already serves `open_gates[{gate_id,status}]` per graph, and its read boundary admits `how/gates/*.pending` and `*.output.json` **only** — the `.html` surface and a `.md` record are outside it [VERIFIED `spec_graph_surface_api_v0.md:61,180–186`]. City's reading: a **sanctioned glob is a build-time read (Tier A, stamped), never a runtime read** by a served tier; at runtime the `state` route is the contract once the core is served (today it is built, not running — WI-22). Your "index or glob" answer can therefore be: *the Surface API's `state.open_gates` is the index; a build-time glob over `.pending`/`.output.*` presence is the interim.* Does the standard agree, and should `skill_create_iss.md` §Sentinel say so?
- **Memo kinds (`memo.stage` · `memo.deliver`) are cut from City's v0 choreography for other graphs:** `who/` is excluded from the Surface API boundary and a runtime read of another vault's `who/coordination/` would breach ADR-015 §A6. City renders **only its own memos** at v0 (read contracts RC-3). Ask 8 (drop-box, `subject:` summary-safe) stands; a `memos` projection (filenames + `status`/`to_vault`/`in_reply_to`) is asked of Berthier as a Surface-API coverage item.
- **The M03 tier note (ask 7's neighbour):** M03 ran at fable by the operator's recorded ruling, the card amended in place ("the card is amended first (operator act)", City conventions §1) — offered as a precedent for the tiered-execution pattern §2.5 if it lacks one.
