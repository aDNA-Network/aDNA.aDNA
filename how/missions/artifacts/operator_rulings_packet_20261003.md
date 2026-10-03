---
type: artifact
artifact_type: ruling_packet
artifact_id: operator_rulings_packet_20261003
title: "Operator rulings packet — the open ADRs, gates and GOs after the 2026-10-03 SITREP, with Rosetta's recommendation on each"
created: 2026-10-03
updated: 2026-10-03   # all 14 rows ratified; record of rulings appended
status: ratified          # ⛩ 2026-10-03 — the operator ACCEPTED all 14 recommendations as written (AskUserQuestion at plan time, session_stanley_20261003_213535_garnier_rulings_and_lanes). Each ruling landed at its destination object; §Record below is the ledger.
last_edited_by: agent_rosetta
executor_tier: fable
executor_runtime: claude
session: session_stanley_20261003_212000_operator_rulings_packet
derived_from: sitrep_mid_campaign_20261003
relates: [sitrep_mid_campaign_20261003, adr_062_linkml_adoption, release_staging_ledger_v8_12, phase_exit (GARNIER P1), operator_queue_reconciled_20260911, mission_primer_adna_for_data_engineers]
rows: 14
tags: [artifact, ruling_packet, adr, gates, gos, garnier, haussmann, v8_12, primer, ratified]
---

# Operator rulings packet — 2026-10-03

> **How to use this.** Fourteen rows, three groups (A ADRs · B gates · C GOs). Each row states the decision, where it lives, what I read to form the view (`[D]` first-hand this sitting · `[R]` a record not re-run), my recommendation with its reason, and an **empty** 4-field ratification block. Rule in place, or rule in an ISS gate authored from this file (`how/skills/skill_create_iss.md`); either way **the destination of each ruling is the object named in its row**, and this packet records only that the ruling was taken. The suggested order is at the end.
>
> **Live facts this packet rests on** `[D] 2026-10-03`: `git ls-remote origin refs/heads/main` → `d6ae1b6` (no second writer has pushed since 09-11) · prod `/.well-known/adna-build.json` → `eda4cbf` built 2026-09-11T19:22Z · last `gates` run on `main` success (`34638817591`, 09-11) · `vitrine/design` 49 commits ahead of that remote, no upstream · `:4466` preview down · `how/sessions/active/` empty at open.

---

## A · ADRs

### A1 · ADR-062 — LinkML adoption is a standard-level ruling housed in aDNA.aDNA
- **Object:** `what/decisions/adr_062_linkml_adoption.md` (`proposed`; the only unratified ADR; clause 1 ruled (a) 09-24 at plan time).
- **Read** `[D]`: all three clauses; Vauban's 09-27 memo items 3 and 4 (`ack_required: true`).
- **Recommendation: SIGN clauses 1–3 as written**, with two riders answering Vauban in the same act:
  - **Rider i (Vauban 3 — yes, later).** The four conventions LinkML cannot express (present-but-null · present-but-empty · key-forbidden-at-any-depth · pattern-on-map-values) are recorded now as a **non-normative annex** to this ADR and become normative annotations in the **v2.6 schema cut**. Vauban's GPL-free `jsonschema[format-nongpl]` uv override is noted in the same annex as the fleet-reusable toolchain path.
  - **Rider ii (Vauban 4).** `lattice_core` lives **with LatticeProtocol's primitives (Noether's call)** — clause 1 says no `LinkML.aDNA` exists, and LP owns lattice semantics.
- **Why:** clause 2 is "preferred, optional" — nothing becomes nonconformant, and three vaults stop inventing three vocabularies; clause 3 keeps every schema in its owner's `what/`. Holding leaves Terminal's delta ledger pointing at a vault that does not exist for another release cycle, and Vauban's ack cannot be written until this moves.
- **Ratification (§7.7):** Decision — **recommendation accepted as written** · Ratified-by — **Stanley (operator)** · Date — **2026-10-03** · Status: **ratified** *(accept-all, AskUserQuestion at plan time, `session_stanley_20261003_213535_garnier_rulings_and_lanes`)*

### A2 · RemoteControl ADR-002 — the three bindings the operator co-signed on our behalf (2026-09-26)
- **Object:** `RemoteControl.aDNA/what/decisions/adr_002_oip_consent_gating_alignment.md` (accepted 09-11 without our co-sign; `co_sign_status: GRANTED_BY_OPERATOR` 09-26). Our correction right is **time-unbounded** (RC ADR-018 §2.3); a correction lands as an RC ADR amendment under SO-RC-11, never a rollback. Inbox: `coord_2026_09_26_talos_to_rosetta_adr_002_cosigned_by_operator.md`.
- **Read** `[D]`: RC ADR-002 §2.1–2.3; both Talos memos; our `idea_campaign_operator_interaction_patterns_unification.md` exists and is unchartered.
- **Recommendation: one amendment carrying three dispositions.**
  1. **RC as OIP reference-implementation *candidate* — ACCEPT as candidate; refuse any implied exclusivity.** "Candidate, evaluated at the OIP charter" is RC's own §2.1 wording and its M7.5 trigger; the OIP campaign is ours and unchartered. Nothing to change beyond saying so.
  2. **RC as the M2.11 home of the ISS open/watch runtime — DEFER, do not bind.** Today the runtime is Astro.aDNA's (`what/lib/iss/runtime/`), the skills live in three homes (Berthier 09-02), and the receiver carries an open **HIGH** finding (CORS `*`, unauthenticated `POST /save`). Amend to: *candidate home; decided at the OIP charter, after receiver hardening (`how/backlog/idea_upstream_iss_receiver_security_hardening.md`).* A runtime with an open security defect should not be migrated into a third home by adjacency.
  3. **Consent-prompt shape + per-vault prompt budget (B-F9 / B-F32) — NO OBJECTION.** RC-internal, fail-closed. One compatibility note, not a refusal: the post-M2.11 "ISS gate template" must satisfy the ISS pattern (ADR-028/029), same-origin or per-gate token included.
- **Companion — the C1 reading** (`coord_2026_09_16_talos_to_rosetta_adna_contract_g10_adjacency.md`, grades **RED ~2026-10-07** on RC's register): reply that C1 ("the aDNA triad classifies knowledge *at rest*") is a fair inference and **not the standard's words** — §3.1 says the triad classifies *project knowledge* and the standard defines neither "at rest" nor "in flight"; we neither object to RC's altitude distinction nor adopt it as the standard's. Closes before the threshold, concedes nothing.
- **Ratification (§7.7):** Decision — **recommendation accepted as written** · Ratified-by — **Stanley (operator)** · Date — **2026-10-03** · Status: **ratified** *(accept-all, AskUserQuestion at plan time, `session_stanley_20261003_213535_garnier_rulings_and_lanes`)*

### A3 · ADR-010 — the Wilhelm co-sign (G4 fired in source 09-24; cards withheld; built, not deployed)
- **Object:** HAUSSMANN operator queue §G4 (`artifacts/operator_queue_reconciled_20260911.md`); `site/src/data/subnetworks.yaml` (`publish_status: held_adr_010_cosign_pending`); the 2026-06-07 conditional clearance keyed to an E5 gate that was **abolished** 06-18.
- **Options on record:** (a) rule the June clearance discharged notwithstanding the dead gate · (b) hold the gate until the ADR-010 Wilhelm-batch co-sign lands [current] · (c) ask Hygieia / the Foundation directly.
- **Recommendation: (b) + (c).** Keep the gate fired and send **one direct, dated ask through WilhelmAI (Hygieia)** for the co-sign. **Not (a)**: a conditional clearance whose gate was abolished is not consent, and the register already scores that copy `unsupported` (R-49, R-52). If no answer arrives before the joint panel, the panel runs with the cards withheld — the honest state, and the state a fresh deploy would show anyway. Un-fire only with a dated `operator_cleared_YYYY_MM_DD` at the yaml, never at the json.
- **Ratification (§7.7):** Decision — **recommendation accepted as written** · Ratified-by — **Stanley (operator)** · Date — **2026-10-03** · Status: **ratified** *(accept-all, AskUserQuestion at plan time, `session_stanley_20261003_213535_garnier_rulings_and_lanes`)*

---

## B · Gates

### B1 · GARNIER DP3 — rulings (a)–(g)
- **Object:** `how/campaigns/campaign_garnier/artifacts/p1/phase_exit.md` §3 (rulings), §4 (P2 options), §5 (intake order — follow it, do not rebuild).
- **Precondition (yours):** **three formative readers** — engineer · funder · scientist (⛔ agents never recruit). Agent-side precondition: restart the `6487444` preview on `:4466` and re-verify 15/15 route hashes before the first reader. These are *formative* readers, separate from and **earlier than** HAUSSMANN's five-reader joint panel (which waits on GR-7).
- **Recommendations:**
  - **(a)** accept as proposed — attribute any Wilhelm-card mention to the stimulus, log it, do not correct it.
  - **(b)** accept as proposed — scorers accept a correct *inference* of absence; a reader concluding evaluation exists scores a miss; whether to *state* the absence moves to P2.4.
  - **(c)** accept the overrun as recorded (625 ± 155 vs 320 kT) and **adopt the four method changes, above all subject-model runtime as its own booked line** — the 2026-10-03 SITREP sitting already used that convention (≈220 kT executor + ≈670 kT explorers) and it made the split legible at once.
  - **(d)** acknowledge. **(e)** note (timing only: P5 cannot start before GR-7).
  - **(f)** accept the proposed sequence — after records are keyed and confusions dispositioned, merge `garnier/homepage-20260916` into `vitrine/design` **with G4 preserved**; in-container gate-49 `home-*` re-baseline; full R-SITE on the merged tree as criterion-3 evidence; ≈50 ± 20 kT booked inside P1. No alternative on record brings the ratified homepage into the working tree at all.
  - **(g) P2 — Option C**: commit P2.1 · P2.2 · P2.3 · T01 (≈640 kT, band 430–1,040); re-forecast T02–T12 · P2.4 · P2.5 from T01's measured actual before T02 opens. **A** (991) commits a number the campaign has evidence against; **B** (≈1,640) authorizes a figure on a calibration the campaign does not yet have; **C** converts the uncalibrated 620 kT into measured forecast before spending it, and the strict chain means nothing after T01 could start sooner anyway.
- **Ratification (§7.7):** Decision — **recommendation accepted as written** · Ratified-by — **Stanley (operator)** · Date — **2026-10-03** · Status: **ratified** *(accept-all, AskUserQuestion at plan time, `session_stanley_20261003_213535_garnier_rulings_and_lanes`)*

### B2 · v8.12 template-release gate — six §3 questions
- **Object:** `how/campaigns/campaign_haussmann/artifacts/template_release/release_staging_ledger_v8_12.md` (`proposed, NOT FIRED`; 12 rows incl. P11/P12 added 10-03; ratification block empty). Fire via `how/skills/skill_template_release.md`; every row re-measured against disk at fire time.
- **Recommendations:**
  1. **Version:** v8.12; **standard holds v2.5** (P6's values are additive; nothing normative moves).
  2. **P6 shape:** rule **one touch for (a)–(d)** — mission `status` enum + `gate:` pointer · session `mission:` + `lease` block · `executor_lane` beside `executor_tier` · optional `harness:` (ScienceStanley has accepted it, 09-25) — and **strike (e) `next_prompt:` back to advisory**: STATE's ⏭ QUEUED / Resume-Here convention already carries that fact; a second field for the same fact is the index-vs-artifact class by construction.
  3. **P7 split:** **doc-only now** (`template_ruling_record.md` + the `how/gates/` scaffold); `standing_grant` and ADR-022's unattended envelope as **ADRs for v8.13**.
  4. **P5 root-triad exception discipline:** **advisory doc now, ADR at v8.13** — three exception classes with required artifacts is a ruling no gate has yet argued; a check shipped before its ADR is a check with no decision behind it.
  5. **Deploy tail:** none — **confirm** (no site bytes).
  6. **P11 / P12:** **include P11** (two lines in `.adna/.gitignore`; fresh-clone `git check-ignore -v` control; release notes name the one-line repair for the 48 forks, **no bulk write**). **P12 ships as an advisory release-notes row, carried to v8.13 unless Astro's runtime fix lands first** — and **open the Astro memo now**, not at v8.13: two independent peers reported it and it is HIGH.
  - **At the same gate:** triage the eight `idea_upstream_*` items `proposed` — fold `template_decision_provenance` and `root_triad_exception_discipline` into P7/P5's dispositions; the two ISS ideas ride P12; `mission_ac_coherence_check` + `verification_instrument_discipline` → v8.13 lane as conventions-to-codify; `l1_onboarding_skill_stale_paths` + `node_manifest_interview_emission` → v8.13 or decline on re-measurement.
- **Ratification (§7.7):** Decision — **recommendation accepted as written** · Ratified-by — **Stanley (operator)** · Date — **2026-10-03** · Status: **ratified** *(accept-all, AskUserQuestion at plan time, `session_stanley_20261003_213535_garnier_rulings_and_lanes`)*

### B3 · G2 — Speed Insights dashboard check
- **Object:** operator queue §G2; the p75 clock started at the 09-07 transport deploy; the token is broker-held, so **an agent cannot look**.
- **Recommendation: one dashboard look, now.** If no field p75 reading exists, **P5.2 carries a calendar blocker that P5.1 completing will not clear**, and the campaign's "P5.1 is the only blocker" model is false in a way the mission graph cannot show. Record the reading (or its absence, dated) at the queue row.
- **Ratification (§7.7):** Decision — **recommendation accepted as written** · Ratified-by — **Stanley (operator)** · Date — **2026-10-03** · Status: **ratified** *(accept-all, AskUserQuestion at plan time, `session_stanley_20261003_213535_garnier_rulings_and_lanes`)*

### B4 · G5 — the Code-of-Conduct confidential reporting address
- **Object:** operator queue §G5 (deferred 09-17 pending an address); `CODE_OF_CONDUCT.md:54` + `:63`.
- **Recommendation: supply the address.** Two lines, one commit; the register row moves when the page is live. Low urgency, but a credibility item on the stratum the campaign exists to raise, and `/community` is a surface the joint panel cold-reads.
- **Ratification (§7.7):** Decision — **recommendation accepted as written** · Ratified-by — **Stanley (operator)** · Date — **2026-10-03** · Status: **ratified** *(accept-all, AskUserQuestion at plan time, `session_stanley_20261003_213535_garnier_rulings_and_lanes`)*

### B5 · G1 / P1.3 C2 — readers, the real critical path
- **Object:** GARNIER P1.3 C2 (three formative readers) · HAUSSMANN P5.1 AC-1/AC-2/AC-3 (five cold readers + fresh-macOS TTFS + operator-as-outsider), now **one joint panel after GR-7** (AMENDMENT 5).
- **Recommendation: recruit the three formative readers this week; the five cold readers later.** State the chain honestly: the joint panel waits on GR-7, GR-7 waits on GARNIER's diff into `main`, that diff waits on P2 — so the five-reader recruitment is weeks out and the three-reader one is the near-term human act. Nothing agent-side moves either campaign until readers exist.
- **Ratification (§7.7):** Decision — **recommendation accepted as written** · Ratified-by — **Stanley (operator)** · Date — **2026-10-03** · Status: **ratified** *(accept-all, AskUserQuestion at plan time, `session_stanley_20261003_213535_garnier_rulings_and_lanes`)*

---

## C · GOs

### C1 · Push — GO, as a **branch** push, conditional on one pre-check
- **Object:** `vitrine/design`, 49 commits ahead of `origin/main` (`d6ae1b6`, verified at the remote 2026-10-03), **no upstream**, never through CI. Merging GARNIER's diff into `main` is **GR-7's** gated job and is not this GO.
- **Recommendation: push `vitrine/design` to `origin` under its own name.** Why now: 49 commits on one machine with no remote copy is the F-s two-writer hazard inverted (one writer, no backup); the remote is verified unchanged so nothing conflicts; convention 20 makes the push the publishing act, so the publication guard is the pre-push gitleaks hook, already installed.
- **Pre-check before the GO is spent (the condition):** this vault's origin is **GitHub-public**. Run `gitleaks` on the outgoing range **and** `grep -rl "privacy_class: P[1-9]\|confidential: true"` over the files the 49 commits touch. **Vauban's 09-27 memo carries `privacy_class: P1`** (Terminal's vocabulary, not ours). If P1 means *not for a public origin*, that file must leave the range first (history amendment or a confidential sidecar); if P1 is public-safe in Terminal's scheme, push. **I did not resolve Terminal's privacy classes this sitting**, so the GO is conditional on that one answer.
- **Ratification (§7.7):** Decision — **recommendation accepted as written** · Ratified-by — **Stanley (operator)** · Date — **2026-10-03** · Status: **ratified** *(accept-all, AskUserQuestion at plan time, `session_stanley_20261003_213535_garnier_rulings_and_lanes`)*

### C2 · Deploy — NO GO (unchanged)
- **Object:** prod `eda4cbf` (09-11). Unshipped site deltas: G4 (cards withheld) and the course increments, both ordered to deploy **before the joint panel**, which is weeks out.
- **Recommendation: no deploy.** It would require a merge to `main` that GR-7 owns, and a deploy landing mid-recruitment is the one act that invalidates a panel. Nothing is lost by waiting.
- **Ratification (§7.7):** Decision — **recommendation accepted as written** · Ratified-by — **Stanley (operator)** · Date — **2026-10-03** · Status: **ratified** *(accept-all, AskUserQuestion at plan time, `session_stanley_20261003_213535_garnier_rulings_and_lanes`)*

### C3 · Send GO — the two 09-16 staged memos
- **Object:** `who/coordination/coord_2026_09_16_rosetta_to_hestia_homepage_purpose_descriptions.md` · `coord_2026_09_16_rosetta_to_vitruvius_independent_visual_review.md` — both `status: staged` since 09-16.
- **Recommendation: GO both.** Re-read 2026-10-03 `[D]`: current and self-conditioned ("when the operator authorizes registry work" / "when the operator elects to deliver"). Hestia's is a data ask with no mutation; Vitruvius's is a practice we already run (R-VISUAL). Deliver per the drop-box doctrine with the pre-send pin re-read (paid 5 of 5).
- **Ratification (§7.7):** Decision — **recommendation accepted as written** · Ratified-by — **Stanley (operator)** · Date — **2026-10-03** · Status: **ratified** *(accept-all, AskUserQuestion at plan time, `session_stanley_20261003_213535_garnier_rulings_and_lanes`)*

### C4 · Reply sitting — GO, in this order
- **Object:** the ten memos received `7840cd4` (receipts only; eight owe a reply).
- **Recommendation: GO.** Order: **Talos G10** (C1 reading; RED ~10-07) → **Ledoux** (HIGH + 11 asks; the CORS finding gets the backlog idea + the P12 pointer; asks 1 and 7 get an honest "window passed, ruling anyway") → **Vauban** (items 3 · 4 — needs **A1 signed first**) → **Talos ADR-002** (needs **A2's three dispositions first**) → **Berthier** ISS census (the named `skill_manage_gate_receiver.md` does not exist here; three homes confirmed) → **Ariel ×3** (gitignore → P11; notify hook → accept as an optional line gated on Tinycast M08; OIP shelf → one row in the unification idea). Drafts `outbound_ready` behind one blanket send GO, or per memo — your call.
- **Ratification (§7.7):** Decision — **recommendation accepted as written** · Ratified-by — **Stanley (operator)** · Date — **2026-10-03** · Status: **ratified** *(accept-all, AskUserQuestion at plan time, `session_stanley_20261003_213535_garnier_rulings_and_lanes`)*

### C5 · Operation Primer O0 — GO (summon at fable)
- **Object:** `how/missions/mission_primer_adna_for_data_engineers.md` (`queued`, fable, O0–O5).
- **Recommendation: summon O0.** The one substantial agent-reachable item that touches nothing gated — no `site/`, no push, no deploy, no peer edit.
- **Ratification (§7.7):** Decision — **recommendation accepted as written** · Ratified-by — **Stanley (operator)** · Date — **2026-10-03** · Status: **ratified** *(accept-all, AskUserQuestion at plan time, `session_stanley_20261003_213535_garnier_rulings_and_lanes`)*

### C6 · Andy on Fluxer — the operator's acts via Aspasia (Fluxer.aDNA)
- **Object:** Fluxer.aDNA disclosure roster (Andy pre-roster) · Emissary `dmRoster` (teddy + stanley) · Emissary has **no upload path** · aDNA.aDNA not a registered consumer vault.
- **Recommendation:** start these now so they are not the long pole at Primer O5 — join `community.adna.network` · disclosure row → `disclosed` · `dmRoster` add · an attachment path **or** a carried link (RiemannCommons once his invite is accepted, or an operator-approved private artifact URL) · register aDNA.aDNA as a consumer vault or route via aDNALabs. Not needed before O0–O4.
- **Ratification (§7.7):** Decision — **recommendation accepted as written** · Ratified-by — **Stanley (operator)** · Date — **2026-10-03** · Status: **ratified** *(accept-all, AskUserQuestion at plan time, `session_stanley_20261003_213535_garnier_rulings_and_lanes`)*

---

## Suggested order of operations

1. **One paper sitting:** A1 (sign ADR-062 + riders) · A2 (three dispositions + the C1 reply) · A3 (b + c) · B2 (six questions + the eight-idea triage).
2. **Same day:** C3 (two sends) and open C4 (reply sitting), Talos G10 first.
3. Resolve C1's privacy-class pre-check, then push the branch.
4. Recruit the three formative readers (B5); the agent restarts `:4466`; DP3 per B1 when records exist.
5. B3 and B4 whenever convenient — minutes each.
6. C5 (Primer O0) in parallel with everything above; start C6.

## Record of rulings taken against this packet

*(Append one line per ruling: date · row · decision · where it landed. Empty at authoring.)*

⛩ **2026-10-03 — operator Stanley accepted all 14 rows as written** (AskUserQuestion at plan time; executor `session_stanley_20261003_213535_garnier_rulings_and_lanes`). Lanes selected the same ruling: preview restart · C4 drafts · C3 sends · Primer O0. Push NOT selected as a lane.

- 2026-10-03 · **A1** · ADR-062 SIGNED, clauses 1–3 + riders i/ii as a non-normative annex · `what/decisions/adr_062_linkml_adoption.md` (`accepted`, §7.7 block filled) · `adr_index.md` tally 57 — 56/1/**0** re-derived.
- 2026-10-03 · **A2** · the three ADR-002 dispositions + the C1 reading accepted · no write into RemoteControl.aDNA (Rule 10); carried as the two Talos replies (`who/coordination/coord_2026_10_03_rosetta_to_talos_*.md`), RC authors the SO-RC-11 amendment.
- 2026-10-03 · **A3** · (b) + (c) · HAUSSMANN `operator_queue_reconciled_20260911.md` §G4 ruling line; the dated Hygieia ask drafted (`coord_2026_10_03_rosetta_to_hygieia_*.md`); `subnetworks.yaml` untouched.
- 2026-10-03 · **B1** · DP3 (a)–(g) accepted as proposed, (g) = Option C · `campaign_garnier/artifacts/p1/phase_exit.md` §3 annotations, §4 row, §5 step 6 struck; 17 P2 mission `budget_status` values; charter Execution Log.
- 2026-10-03 · **B2** · six §3 answers + 11-idea triage · `release_staging_ledger_v8_12.md` §3 answered-in-advance block (ledger stays NOT FIRED); `disposition:` line on each `idea_upstream_*` at `proposed`; Astro P12 memo drafted.
- 2026-10-03 · **B3** · one Speed Insights look, now · operator queue §G2 ruling line; **reading pending (human act)**.
- 2026-10-03 · **B4** · supply the CoC address · operator queue §G5 ruling line; **address pending (human act)**; `CODE_OF_CONDUCT.md` unchanged.
- 2026-10-03 · **B5** · three formative readers this week, five cold readers after GR-7 · STATE §Pending Manual Actions; no agent act (⛔ agents never recruit).
- 2026-10-03 · **C1** · branch push GO · **pre-check run**: (i) privacy — one real hit, Vauban 09-26 memo `privacy_class: P1` (Terminal §2: network-internal, not for publication) → **operator downgraded P1 → P0 with reason logged** at the memo's field annotation (sender's line not re-spelled); (ii) `gitleaks git --log-opts=origin/main..vitrine/design` → **12 findings, all `generic-api-key` on 64-hex sha256 content hashes** in evidence JSON manifests (`evidence/p0/baseline_freeze.json` ×8, `tracked_component_population.json`, `amendments/opening_snapshot.json` ×2, `p1/resume_evidence_manifest.json`) — false positives by inspection (file-hash dictionaries, `secret_len=64`, entropy 3.7–4.0), **but the pre-push hook fails closed on them**, so the push sitting must first add a sha256-in-evidence-JSON allowlist (hook `how/standard/hooks/pre-push-secret-scan.sh`; `.git/hooks/pre-push` is a regular copy, not the symlink its header claims). **Push not executed** (not a selected lane). Range at the check: `d6ae1b6..96cdcb9`, 50 commits / 1,303 files.
- 2026-10-03 · **C2** · no deploy · recorded here; prod stays `eda4cbf`.
- 2026-10-03 · **C3** · send both 09-16 memos · executed this sitting (see each memo's `delivered_*` block).
- 2026-10-03 · **C4** · reply sitting GO, packet order · drafts `outbound_ready` this sitting; delivery under the operator's send GO asked at close.
- 2026-10-03 · **C5** · Primer O0 GO at fable · `how/missions/mission_primer_adna_for_data_engineers.md` (see its O0 record).
- 2026-10-03 · **C6** · the operator's Fluxer acts · STATE §Pending Manual Actions; nothing agent-side.

