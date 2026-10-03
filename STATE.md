---
type: state
created: 2026-04-13
updated: 2026-10-03  # 2026-10-03 (d) send · push · Primer O1 — 6/8 replies delivered, branch PUSHED (hook defect fixed), primer v0.1 drafted — prior: 2026-10-03 (c) rulings packet accepted in full, four lanes executed — prior: 2026-10-03 mid-campaign SITREP (see ⏭ QUEUED). — prior: 2026-09-24 STATE graduation (304 KB → router); prior inline chain → [[STATE_archive]] §Shifted-2026-09-24, verbatim
status: active
phase: "GARNIER P1 — P1.1/P1.2 complete; **DP3 rulings (a)–(g) taken in advance 2026-10-03 (P2 = Option C)**; `:4466` preview UP (restart before each reader sitting); **P1.3 C2 (three consenting readers) → DP3 intake is the open front**; `vitrine/design` **PUSHED to origin 2026-10-03** (branch only, `main` local; push ≠ deploy, nothing deployed); 6/8 replies delivered, Ledoux recipient-pulled, **Hygieia HOLD (WilhelmAI live) — retry owed**; Operation Primer O1 DONE, O2 next. HAUSSMANN endgame only (P5.1 joint panel after GR-7 · P5.2 · GR-7). Prior phase text → [[STATE_archive]] §Shifted-2026-09-24."
campaigns: [campaign_garnier, campaign_haussmann]    # GARNIER active (ratified §7.7 2026-09-15, 7 phases / 38 missions, runtime claude since 2026-09-16 — runtime_handoff_20260916); HAUSSMANN holds its independent endgame only (P5.1 · P5.2 · GR-7). Was `[campaign_haussmann]` alone until 2026-09-16 — stale for two days after GARNIER's ratification while MANIFEST.md:42 was already correct: the index-vs-artifact class, again.
last_edited_by: agent_rosetta
_state_router_version: "1.0"
tags: [state, governance, router]
state_history: STATE_archive.md   # Clear Hearth graduation 2026-07-17 rides the vault's own immortal-spine (§Shifted-2026-07-17)
---
<!-- Router shape — split from monolithic STATE.md at M2.1 S2 2026-05-19. Historical session prose at STATE_archive.md. -->


# Operational State

Dynamic operational snapshot for cold-start orientation. Updated each session.

> **State router** (split from monolithic STATE.md at M2.1 S2 2026-05-19; pre-split SHA `1e337db`). For historical session prose (19 DEPRECATED-marker `## Last Session` blocks + retired Next Session Prompts) see [[STATE_archive.md|STATE_archive.md]]. Most-recent live session block + most-recent Next Session Prompt stay here.

## ⏭ QUEUED — Next Live Session (READ THIS FIRST)

### 2026-10-03 (d) — Send GO executed (6/8 + 1 pulled + 1 HOLD); branch PUSHED; Primer O1 DONE

[D] `last_edited_by: agent_rosetta`; runtime claude; tier fable; session [[session_stanley_20261003_223739_garnier_send_push_primer_o1]] (Tier 2). Operator selected three lanes at plan time (send · push · Primer O1); reader intake not selected. Four commits `ed72c9d` · `09245b6` · `d30d760` · `24370c7` + this close; **pushed**.
- **Lane A — replies**: **6 of 8 delivered** by stamp→copy→verify, cmp identical on both legs, pin re-read foot note per memo — Talos ×3 (RC `2cd8647`, branch 1) · Vauban (Terminal `edc402d`, branch 1) · Ariel (Tinycast `6bc54e7`, branch 1) · Astro (`12d772e`, **branch 2**, no inbox, quiescent at the write). **Ledoux**: City had already pulled + committed the draft (`169c03b` = read-receipt) → sender stamped only, no write; §3 **recipient-pull gap** logged in `idea_external_sharing_doctrine.md`. **Hygieia: HOLD, branch 3** — WilhelmAI live at the 22:40Z probe (`lsof`: 7 agent processes with cwd in the vault); retry next sitting; **the ADR-010 co-sign ask is therefore not yet asked**.
- **Lane B — PUSHED**: `git push -u origin vitrine/design` → **`d30d760`**, hook clean on 58 commits; `origin/main` unchanged (`d6ae1b6`), local `main` still 5 ahead, not pushed. `.gitleaks.toml` gains an AND-scoped allowlist (evidence JSON path + `^[0-9a-f]{64}$` + `generic-api-key`): range scan **12 → 0**, random 64-hex on stdin outside the path still fires. ⭐ **Hook defect found on the first push attempt** (blocked with 12): config resolution checked `git/.gitleaks.toml` (the tracked Git.aDNA skeleton) *before* the root file its header calls authoritative — so **every push since the hook's Aug-28 install ran on the skeleton config and no root allowlist ever applied**. Fixed root-first in `how/standard/hooks/pre-push-secret-scan.sh` + header; installed copy re-synced. No CI run appeared on the branch at close (`gh run list --branch vitrine/design` empty — the gates workflow may be `main`-only; verify next sitting). **Push ≠ deploy; nothing deployed.**
- **Lane C — Primer O1 DONE** (≈95 kT vs 120): `what/docs/adna_primer_for_data_engineers.md` v0.1, **6,458 prose words** (first draft 7,470 → rewritten), 7/7 Mermaid → SVG (mermaid-cli via `npx`), 42 § citations, Appendix A 47/47 mechanisms, dual-audience smoke PASS, scrub 0 (courtesy; red-proof is O3's), `review_ledger.md` opened. **O2 next, operator-summoned.**

**Resume-Here:** agent-reachable, operator-summoned: **(1) Hygieia retry** (re-probe WilhelmAI: `lsof` cwd + mtime < 10 min + 2026-10 lease; deliver by branch 2 when quiet — one short sitting) · **(2) Primer O2** (six-lens review, fable) · **(3) the v8.12 gate** when opened · **(4) `main` push** if wanted (5 ahead; not ruled). Human-owed, unchanged: **three formative readers** → DP3 intake per `phase_exit.md` §5 (restart `:4466` first) · G2 reading · G5 address · ADR-010 co-sign (asked only once the Hygieia memo lands) · Andy/Fluxer acts (C6) · credential rotation at discretion.


### 2026-10-03 (c) — Rulings packet ACCEPTED IN FULL; four lanes executed; preview UP; replies drafted; Primer O0 DONE

[D] `last_edited_by: agent_rosetta`; runtime claude; tier fable; session [[session_stanley_20261003_213535_garnier_rulings_and_lanes]] (Tier 2). **The operator accepted all 14 rows of [[operator_rulings_packet_20261003]] as written** (AskUserQuestion at plan time) and selected four lanes. Every ruling landed **at its object** (never in prose alone) and the packet's §Record lists where. Six commits `76ed14c`…this one; **not pushed**.
- **A1 ADR-062 ACCEPTED** + non-normative annex (the four LinkML-inexpressible conventions → normative at the **v2.6 schema cut**; GPL-free toolchain note; `lattice_core` lives with LatticeProtocol). `adr_index` tally **57 = 56 accepted · 1 amended · 0 proposed** (derived). The proposed queue is empty.
- **B1 DP3 (a)–(g) ruled in advance**, accepted as proposed; **(g) = P2 Option C** → 17 P2 mission frontmatters (`budget_status`: P2.1 · P2.2 · P2.3 · T01 `committed_DP3_option_C_20261003`; the rest `provisional_until_T01_actual`); `phase_exit.md` §5 step 6 (author the ISS gate) struck. (f)'s merge stays sequence-gated on keyed reader records.
- **B2 v8.12**: six §3 answers written in advance (v8.12 / standard v2.5 · P6 one touch (a)–(d), (e) advisory · P7 doc-only · P5 advisory · no deploy tail · **P11 IN, P12 advisory + Astro memo now**); **11** `idea_upstream_*` (not 8) carry a `disposition:` line. Ledger still **NOT FIRED** (its §7.7 is written in the firing commit).
- **A3** (b)+(c) at the HAUSSMANN queue §G4; **B3/B4** ruling lines at §G2/§G5 — the Speed Insights reading and the CoC address are **still human-owed**.
- **C1 push GO — pre-check resolved**: the one `privacy_class: P1` hit (Vauban 09-26; Terminal §2 = internal) was **downgraded P1 → P0 by the operator with reason logged** beside the sender's line; `gitleaks` on `origin/main..vitrine/design` → **12 `generic-api-key` hits, all 64-hex sha256 content hashes in evidence JSON** (false positives) — the pre-push hook fails closed on them, so **an allowlist is owed before the push sitting**. Push NOT executed (not a selected lane). Range 50 commits / 1,303 files at the check.
- **Lane 1**: `:4466` preview restarted from the untouched `dist/`, **15/15 hashes MATCH**, checkout clean. ⚠ It is a foreground process — it dies with its shell; restart + re-check immediately before each reader sitting.
- **Lane 3 (C3) DELIVERED**: both 09-16 memos (→ Hestia purpose descriptions · → Vitruvius independent visual review) upgraded to ADR-061 form, pin re-read (all four registry records still null note/tagline), cmp-identical in Home (`18aa9d6`) + WebForge (`bf80026`) inboxes. One sender-side defect caught and re-synced before any receipt (the Hestia memo's pin-re-read sentence; `delivered_resync` recorded).
- **Lane 2 (C4) DRAFTED — 8 memos `outbound_ready`, SEND GO OWED**: Talos ×3 (C1 reading · ADR-002 three dispositions · Berthier's ISS census) · Vauban · Ledoux · Ariel (one memo, three replies) · Astro (P12 fix shape) · Hygieia (A3(c) ADR-010 ask). Astro + WilhelmAI have **no `inbox/`** → doctrine §2 branch 2; WilhelmAI had two session files touched today → branch 3 (hold + retry) if still live at send. **Talos G10 reds ~10-07.**
- **Lane 4 (C5) Primer O0 DONE** (≈40 kT vs 70): source pack · **14-row** inconsistency register (one SITREP claim did not reproduce at its object) · outline v0 · `reviewer_data_engineer` (reviewers **16 → 17**, derived) · scrub control. Mission `in_progress`; **O1 next, operator-summoned**.
- ⚠ **Node finding**: `pgrep -fl` on this node prints matched processes' *environment*, which carried credential **values** into an agent transcript; none recorded; rotation is the operator's call (Hestia's broker).

**Resume-Here:** **Send GO** for the 8 `outbound_ready` replies (Talos G10 first — RED ~10-07) is the one agent-reachable act waiting on a word. Then: **Primer O1** (fable) · the **push sitting** (gitleaks allowlist for sha256-in-evidence-JSON, hook self-test, then `git push -u origin vitrine/design`; push ≠ deploy) · the **v8.12 gate** when opened (answers pre-written). Human-owed, unchanged: **three formative readers** → DP3 intake per `phase_exit.md` §5 (rulings already taken; restart `:4466` first) · G2 reading · G5 address · ADR-010 co-sign (asked of Hygieia once the memo is sent) · Andy/Fluxer acts (C6).

### 2026-10-03 — Mid-campaign SITREP; surfaces repaired; Operation Primer QUEUED; 10 inbox receipts

[D] `last_edited_by: agent_rosetta`; runtime claude; tier fable; session [[session_stanley_20261003_205316_sitrep_and_primer_authoring]]; plan approved at plan time with four operator rulings (doc shape · tier · scope · delivery). **Nothing had moved for nine days** (`e413fd6` 09-24 → this sitting) while ten memos arrived unread. Full report: [[sitrep_mid_campaign_20261003]] (`how/missions/artifacts/`).
- **Inbox: 10 memos received** (committed byte-unchanged `7840cd4`; berthier 09-02 · hestia 09-07 · talos 09-16 · ariel 09-25 ×2 · ss 09-25 · ariel 09-26 · **ledoux 09-26 (HIGH: ISS gate receivers accept `POST /save` with CORS `*`)** · talos 09-26 (ADR-002 co-signed — three refusable bindings) · vauban 09-27). **No reply authored** (operator ruling). Derived reply-debt: 8 of 10 owe a reply; **talos G10 grades RED ~2026-10-07** by its own register.
- **This file was wrong in four sections** and is repaired below: §Active Blockers carried HAUSSMANN only (GARNIER rows added); row 3's "`/learn/course/*` 404 live" is **false** (200, `curl` 2026-10-03) and row 5 was ruled out 09-11 — both struck, not deleted; §Pending Manual Actions re-cut to the live human acts; §Active Campaigns/§Current Phase gain live pointers. *Index-vs-artifact, inside STATE.md again — the short declarative sections are the ones a cold reader trusts.*
- **Repairs elsewhere**: HAUSSMANN charter `mission_count: 33 → 34` (derived: `ls missions/mission_haussmann_*.md | wc -l`; GR-7 was never counted); **v8.12 ledger gains P11** (Ariel's `.adna/.gitignore:64,71` dead-pattern fix, 48/120 vaults) **and P12** (ISS receiver CORS/auth) as candidates + §3 question 6; MANIFEST re-reviewed (57/45/57 zero drift; `last_edited_by` corrected). Five backlog ideas filed `proposed`: `idea_upstream_iss_receiver_security_hardening` (high) · `idea_upstream_standard_codify_campaign_layer` · `idea_upstream_campaign_template_tier_budget_fields` · `idea_external_sharing_doctrine` · `idea_a2a_communication_overview`.
- ⭐ **[[mission_primer_adna_for_data_engineers]] — Operation Primer — AUTHORED + QUEUED** (standalone, `how/missions/`, **fable**, ≈420 ± 120 kT, O0–O5): a reusable "aDNA for data engineers" primer + a cover note for Andy Zhang (`zhang8128`), six-lens review ×2 incl. a new `reviewer_data_engineer`, write-gate scrub, operator read gate, PDF, then a delivery memo to Aspasia (Fluxer.aDNA). ⚠ Delivery preconditions measured 2026-10-03: Emissary is text-only to `#agent-comms`; Andy is pre-roster; aDNA.aDNA is not a registered consumer vault — hers to clear, operator-approved per act.
- **GARNIER precondition found**: the `6487444` preview on `:4466` is **not running** (connection refused) — restart + re-verify 15/15 hashes before any reader is scheduled. Isolated checkout clean; nothing touched.

⛩ **Rosetta's recommendations on every open ADR / gate / GO are in [[operator_rulings_packet_20261003]]** (`how/missions/artifacts/`, 14 rows A1–A3 · B1–B5 · C1–C6, each with an empty §7.7 block; authored 2026-10-03 on the operator's request; nothing pre-decided). Rule there or from an ISS gate authored from it.

**Resume-Here:** two lanes. **Human-owed (unchanged)**: P1.3 C2 — Stanley supplies three consenting readers → two-scorer key → DP3 per `phase_exit.md` §5 (don't rebuild the packet) · DP3 rulings (a)–(g) · G5 address · G2 Speed Insights · ADR-010 co-sign · fetch + push decision (`vitrine/design` 45 ahead, no upstream, never CI'd). **Agent-reachable, operator-summoned**: (1) **Operation Primer O0** (fable) — `how/missions/mission_primer_adna_for_data_engineers.md`; (2) a **reply sitting** — talos G10 (by ~10-07) · ledoux (HIGH + 11 asks) · vauban (3·4 ack) · talos ADR-002 (bindings need the operator's call first) · berthier · ariel ×3; (3) the v8.12 gate when the operator opens it (now 6 questions). Owed-send pending GO: the two 09-16 staged memos (hestia · vitruvius), still current.

### 2026-09-24 (c) — DP3 pre-assembled; reader slot PENDING

[D] Operator's plan-time choice: "Pre-assemble DP3". Records only: no site, checkout, status or budget change.
- **[[so11_retrospective_p1]] filed.** P1 is at 625±155 kT against 320 (1.95×). P1.2 is at 4.8×, but **237 kT of the 305 kT excess is the reproduced model's own runtime tokens booked in the executor's unit**; executor-only, P1 is at ≈1.21×. The campaign's eleven forecast pairs split into two classes: known-method at 0.63–1.33× and first-contact/external-runtime at 4.0–5.4×. The proposed fix is to book subject-runtime on its own line.
- **`phase_exit.md` §DP3 packet**: exit-criteria table, empty reader slot, and rulings (a)–(g). **P2 options:** A 991 · B ≈1,640 calibrated · **C recommended**, committing the first segment P2.1–T01 at ≈640 and re-forecasting from T01's actual. Re-derived read-only: P2 = 17/18/991 ✓; docs population 118/118 routes, 0 drift.
- ⭐ **New finding (f):** the ratified gateway homepage `6487444` is **not on `vitrine/design`**. That branch still has the `b1cf040`-era homepage plus G4. `git merge-tree` finds no shared `site/` files and one conflict, in `MANIFEST.md`. A merge would need a gate-49 `home-*` re-baseline. The P1 exit candidate's identity is a DP3 ruling.

Session: [[session_stanley_20260924_145532_garnier_dp3_preassembly]].

**Resume-Here:** open front unchanged: **P1.3 C2, Stanley supplies three consenting readers.** Then follow `phase_exit.md` §DP3 packet §5 in order; don't rebuild the packet. Owed on humans: the readers · DP3 rulings (a)–(g) · G5 address · G2 Speed Insights · ADR-010 co-sign · any push/deploy GO. Agent-reachable: the v8.12 gate when the operator opens it.

### 2026-09-24 (b) — STATE graduated: 303,654 → ~53 KB, verbatim to [[STATE_archive]] §Shifted-2026-09-24

[D] `skill_state_graduation`, its own sitting (operator's choice at plan time). Era-boundary cut: GARNIER-era blocks, this ⏭ QUEUED header, Active Blockers and Pending Manual Actions stay live; the 1,269-line HAUSSMANN-era banner run (2026-09-14 wind-down → 2026-07-24 registry regen, 242 KB) and the `updated:`/`phase:` inline chains moved **verbatim**, appended to the existing immortal spine (no new history file). Loss-gate: **0 of 1,371** non-blank original lines missing, checked pre-write and again against HEAD post-write; the archive's only removed line is its own stale `updated: 2026-07-02`. ⚠ **Clock:** `date` reads 2026-09-24; the block below (`6e3165d`) stamped itself 2026-09-25 — recorded as found. Session: [[session_stanley_20260924_143328_state_graduation]].

**Resume-Here:** Queue item (1) done. Open front unchanged: **P1.3 C2 — Stanley supplies three consenting readers** → two-scorer key → DP3. Agent-reachable: the v8.12 gate when the operator opens it. Owed on humans: G5 address · G2 Speed Insights · ADR-010 co-sign · any push/deploy GO.

### 2026-09-25 — gate-49 in-container re-baseline DISCHARGED (G4's owed precondition of any push)

[D] `last_edited_by: agent_rosetta`; runtime claude; operator ruled at plan time: **baseline only** (STATE graduation stays queued). Docker up. **Red first, in the CI-pinned container** (`playwright:v1.59.1-noble`): `check` → **6 failed / 20 passed** — `about`, `commons` **and `state-network`**, both themes. ⚠ **The 09-24 record under-named the scope**: it owed `/commons` + `/about` only, but the same G4 commit (`228a624`) re-derived `/state-of-the-network`'s count sentence (now *"Of the 2 subnetworks … 1 has a public property"*), so that route moved by the same ruled data gate. Verified in `dist/` before re-baselining: Cederroth/WF cards absent from `/commons` + `/about`; remaining "Wilhelm" strings are pre-G4 (founder affiliation R-58, "What is not ours", repo registry). `baseline` → **exactly 6 PNGs changed** (`{about,commons,state-network}-{light,dark}.png`), no mask/tolerance/config touched. `check` → **26/26 green**; `redtest` → **7/7** (5 red + 2 controls, tree restored). Committed; **no push** (none authorized). Session: [[session_stanley_20260925_141328_garnier_gate49_rebaseline]].

**Resume-Here:** Unchanged except item (2) is done: **P1.3 C2 — Stanley supplies three consenting readers** → two-scorer key application → DP3 ([[how/campaigns/campaign_garnier/missions/session_prompts_garnier]] CURRENT). Agent-reachable queue: (1) **STATE graduation** (`skill_state_graduation`); (3) the v8.12 gate when the operator opens it. Owed on humans: G5 address · G2 Speed Insights · ADR-010 co-sign (un-fires G4) · any push/deploy GO (branch still has not been through CI).

### 2026-09-24 — Re-orientation: the 09-17 batch closed and its scope executed; inbox received and answered; G4 fired in source; v8.12 ledger proposed

[D] `last_edited_by: agent_rosetta`; runtime claude; session [[how/sessions/history/2026-09/session_stanley_20260924_083249_garnier_reorientation]] (tier 2, fable). **The 2026-09-17 ratification-batch session had sat `in_progress` for seven days with nothing committed** — it recorded its scope in the past tense and performed a third of it (the six status flips). Closed to history with a reconstructed actual; the rest executed here under the same 09-17 authority ("All recs approved." + G4 (b) + G5 deferred):
- **Key-reachability check** — [[how/campaigns/campaign_garnier/evidence/homepage_gateway_20260916/key_reachability_check]] (the pack had cited a file that did not exist): preview restarted, **15/15** route hashes match `6487444`, every frozen-key answer reachable within the window; one scorer caveat (scientist "evaluation explicitly absent" is implied, not stated) carried to DP3.
- **Panel merge activated** at both destinations — HAUSSMANN P5.1 AMENDMENT 5 `accepted`/in force; GARNIER P5.1 mirror in force. **The P5.1-vs-rewrite ordering question is RESOLVED**: one joint endgame panel, after GR-7.
- **G4 option (b) FIRED in source** — `subnetworks.yaml` WF pair → `held_adr_010_cosign_pending`; `/commons` + `/about` (cards, proof list, person card) and the derived counts withhold both, WGA control intact. ⚠ Re-running the projection script also re-stamped `generated_at` from the clock and lowercased member slugs (registry-sync drift, pt19, Hestia's — not G4); the committed projection was restored and **only the two ruled values patched**. Chromium lane on the final build: **698 passed / 1 skipped / 0 failed** (`gate-30` made same-diff with the change — its expected population is now the *publishable* overlay, read from `network_state.ts`'s own predicate at run time, and every withheld entry is asserted absent from the rendered `subnet-card` blocks; red-proven by mutation, red on exactly the new assertion). **BUILT, NOT DEPLOYED**; ⛔ `gate-49` in-container re-baseline for `about` + `commons` **OWED — Docker Desktop would not start on this node** (recorded at the operator queue §G4; required before any push, since the CI snapshot lane will red until it lands). The formative stimulus `6487444` still renders the cards by design — a DP3 disposition item. ⭐ **Two forced copy repairs the firing exposed** (convention 7: *grep the rendered output for what the defect claimed*): `/commons` prose hardcoded *"the Rare Archive repository … followable today"* one paragraph below the gate that had just removed its card — now **derived** from the gated set (`today that is World Genome Academy; the others are still building theirs`); `/state-of-the-network`'s derived count read *"1 have"* — pluralised from the value. `check:markup` 0.
- **Prometheus reply DELIVERED** (Context.aDNA inbox, `cmp` identical; pin re-read corrected its "will ride a release" sentence — both doc annotations are now in the dev graph).
- **ADR-061 adopted locally** (inbox README rule 5; all outbound this sitting carries `from_persona` / `from_vault` / `authority`).

[D] **Inbox: 12 inbound memos received (committed byte-unchanged = receipt) and 8 replies delivered** byte-identical into each recipient's open drop-box (Ilmarinen · SS · Mondrian · Vitruvius · Hestia · Galileo · Berthier/Automator ×2-in-1 · Vauban), recipient HEAD pins unchanged since drafting, every recipient-root path re-verified. Derived reply-debt is **zero**. Memo-earned local fixes: `CLAUDE.md` tier line was **inverted** (fable in the mechanical tier) — corrected, Automator credited; `pattern_diagrammatic_context` :85 stale since Canvas v2.4.0 + Mondrian's clarifying clause added; `ontology_unification` "22 entity types" and `standard_governance` RFC flow annotated superseded (Prometheus). **ADR-062 (LinkML housing) drafted `proposed`** — operator ruled (a) at plan time; tally 55/1/**1**. `executor_lane` drafted `proposed` in the pattern (§2.1a) and the credential doctrine (§2.6, §9 row owed). **v8.12 staging ledger `proposed`** ([[how/campaigns/campaign_haussmann/artifacts/template_release/release_staging_ledger_v8_12]]): 10 enumerated rows, 5 ⛩ questions.

[D] **GARNIER surfaces repaired**: CURRENT prompt rewritten (stimulus `6487444`/4466, reachability record, G4 divergence, DP3 packet incl. the SO-11 overrun ≈625±155 vs 320); campaign AGENTS/CLAUDE (frozen rule as amended); `phase_exit` 2026-09-24 addendum; rolling ledger + charter Execution Log backfilled from the gateway through this sitting; 34 queued/in-progress missions `executor_runtime: codex → claude`; FG-P0-002/005 → `corrected`. Operator rulings at plan time (AskUserQuestion): LinkML = (a) · outbound = blanket send GO · **STATE graduation = flag again, separate sitting** — this file is **295 KB, ~3× the tripwire**, no graduation since 07-17; the sitting is queued below.

**Intake:** 2026-09-24 · GARNIER re-orientation · 09-17 batch executed + closed · 12 memos received / 9 delivered · ADR-062 + v8.12 ledger + `executor_lane` proposed · G4 fired (built, not deployed).

**Resume-Here:** The open front is unchanged and human-gated: **P1.3 C2 — Stanley supplies three consenting readers** (engineer / funder / scientist; ⛔ agents never recruit) against stimulus `6487444` at `http://127.0.0.1:4466/` per [[how/campaigns/campaign_garnier/artifacts/p1/formative_reader_pack]] → two-scorer application of the frozen key → DP3 packet ([[how/campaigns/campaign_garnier/missions/session_prompts_garnier]] CURRENT). Agent-reachable and queued, each its own sitting: (1) **STATE graduation** (`skill_state_graduation`, archive-never-delete); (2) the `gate-49` in-container re-baseline once Docker is up (precondition of any push); (3) the v8.12 gate when the operator opens it. Owed on humans: G5's confidential address · G2 Speed Insights dashboard · the ADR-010 co-sign that un-fires G4.


### 2026-09-16 (c) — Gate advisory enacted as proposed paperwork; ADR queue 0 → 2 proposed

[D] `last_edited_by: agent_rosetta`; runtime claude. The operator asked for advice on the human gates and memo candidates and approved enacting it as agent-side paperwork — **everything below is `proposed`/`staged`; nothing is ruled, sent, recruited or deployed.** Awaiting signature: [[how/campaigns/campaign_garnier/artifacts/amendments/formative_stimulus_repin_20260916]] (move P1.3's formative stimulus to gateway candidate 6487444 — identity manifest derived, 15 routes) · [[how/campaigns/campaign_garnier/artifacts/amendments/panel_merge_brief]] (one joint endgame panel after the rewrite; HAUSSMANN P5.1 carries mirror AMENDMENT 5 `proposed`, GARNIER P5.1 mirror note) · **ADR-060** (template-decision provenance, from Hestia's adr_003 census finding) · **ADR-061** (three-valued memo authorship, from Vitruvius's KW-93) · [[what/patterns/pattern_measurement_is_the_artifact]] (Galileo's candidate) · a staged Prometheus route-confirmation reply (send-GO owed). Also: `idea_upstream_template_decision_provenance` filed (rides next release with the vendored-hooks advisory); AGENTS.md now carries the read-CLAUDE-first imperative (Cassiodorus §3); ADR-023:73 annotated in the index as operator's-call.

[D] One instrument event: `verify_amendments.py` correctly went red on the compressed CLAUDE.md (its immutability pin predated the operator-ruled compression; the compression sitting had run it before the edit — sequencing miss recorded). Repaired by repointing the check to the conventions' source (`campaign_haussmann/CLAUDE.md`, archived copy verified byte-identical first) + a pointer limb; both limbs red-proven; 38/0/selftest-intact after. Recorded in [[how/campaigns/campaign_garnier/artifacts/amendments/runtime_handoff_20260916]].

[D] Unchanged and still the open front: **P1.3 three-class formative humans → DP3** (the re-pin signature is the recommended first act); G2/G4/G5 remain operator acts; frozen P1 b1cf040/4465 untouched.

**Intake:** 2026-09-16 (c) · GARNIER gate advisory · six proposed/staged artifacts + two ADR drafts authored; zero decisions taken.

**Resume-Here:** If the operator has signed any of the above, execute exactly the signed scope (re-pin → update the pack's stimulus per its conditional block; panel merge → activate AMENDMENT 5 + mirror note; ADRs → status flips + adr_index re-derivation; pattern → status active; reply → send per GO). Otherwise the open front is unchanged: [[how/campaigns/campaign_garnier/missions/session_prompts_garnier]] CURRENT → formative reader records → DP3. Session: [[session_stanley_20260916_202819_garnier_gate_advisory_paperwork]].

### 2026-09-16 (b) — Runtime handoff (Codex→Claude), gateway increment closed, charter conformed

[D] `updated: 2026-09-16`; `last_edited_by: agent_rosetta`; **runtime claude**. Stanley ruled Claude (Rosetta) takes over GARNIER execution fully; Codex retired; completed Codex work credited unchanged — [[how/campaigns/campaign_garnier/artifacts/amendments/runtime_handoff_20260916]]. The open gateway session transferred mid-flight and closed complete: [[how/campaigns/campaign_garnier/artifacts/research/homepage_gateway_revision]] `completed` at candidate commit **6487444** on `garnier/homepage-20260916` (intro + mission + stewardship, three folders, four task paths; same-diff updates across 8 gate specs + 2 fixtures). One instrument repair: gate-47's focus-identity key moved from mutable DOM index to first-focus stamp — Astro's focus-triggered prefetch was measured inserting head elements mid-walk, making a green page red on instrument identity (convention 18's family); red-proven against a simulated trap after repair. Verification: full suite **694 passed / 3 skipped / 0 failed**; markup clean; 12/12 axe-zero capture cells both themes; **frozen P1 15/15 route hashes re-verified at 4465, 0 mismatches**. R-VISUAL ran per recipe: [[how/campaigns/campaign_garnier/artifacts/research/homepage_gateway_visual_review]] — two ACCEPT, one REVISE whose single S2 (two routing vocabularies: authored path verbs vs inherited nav nouns) is adjudicated — one repair shipped in-round, shared-chrome remainder routed to P2.4/P3.1 with reinspection conditions. No remaining blocking visual finding.

[D] Under the same ruling: the charter was **restructured to the vault template** (Status column restored to all phase tables, DP/Verification/Timeline/Subsumes prose → tables, dated blocks consolidated into an Execution Log — content verbatim, typography normalized) and the campaign CLAUDE.md **compressed to pointer + delta** (HAUSSMANN conventions: essence here, full text at the predecessor). `verify_amendments.py` 38 missions / 0 errors; governance validator zero drift. Six inbox memos triaged (Ilmarinen ×2 · Hestia adr_003 · Vitruvius addressing · Prometheus Polygone · Galileo pattern candidate) — none blocks GARNIER; filing decisions surfaced at session close, not taken.

[D] Frozen P1 **b1cf040/4465** remains the reader stimulus. **P1.3 three-class formative human records and DP3 remain the open front.** No push/deploy/peer delivery; no phase advance.

**Intake:** 2026-09-16 (b) · GARNIER runtime handoff + gateway close · executor claude; charter conformed; increment verified, reviewed and committed.

**Resume-Here:** Follow CURRENT in [[how/campaigns/campaign_garnier/missions/session_prompts_garnier]] — collect actual P1 reader records under [[how/campaigns/campaign_garnier/artifacts/p1/formative_reader_pack]] using frozen 4465, then present DP3. The gateway candidate (6487444, preview 4466) awaits Stanley's look; its acceptance for reader use is NOT taken. Session/AAR: [[session_stanley_20260916_065915_garnier_homepage_gateway]].

### 2026-09-16 — Clean homepage and independent visual-review process complete

[D] `updated: 2026-09-16`; `last_edited_by: agent_codex`; runtime Codex. Stanley's accepted whole-homepage expansion is completed in [[how/campaigns/campaign_garnier/artifacts/research/clean_homepage_revision]]. Source **e745990**, isolated branch `garnier/homepage-20260916`, checkout `/Users/stanley/.cache/garnier-homepage-20260916`, preview **http://127.0.0.1:4466/**. Clean native-theme reading surfaces; wrapped real file example; lifecycle-grouped registry; distinct reading/machine paths. Three independent vision reviewers completed three rounds, no remaining blocking visual finding. [[how/campaigns/campaign_garnier/artifacts/research/clean_homepage_verification]]: full696passed/3documented skips;12final zero-axe cells;12shared-hero comparisons exact; all15P1 hashes unchanged. R-VISUAL and future P3.1/P3.2 acceptance now require independent visual review.

[D] Frozen P1 **b1cf040/4465** remains the reader stimulus. P1.1/P1.2 complete; P1.3 consenting engineer/funder/scientist records and DP3 remain open. No general P2/P3 entry, automatic stimulus switch, push/deploy or peer delivery. Missing purpose fields and shared-header polish have named owners; memos remain staged.

[I] Separate clean-homepage increment actual160±50kT versus120±40forecast, rough content-load including reviewers; billing unavailable. Prior bounded design65±25kT and P1/research totals unchanged.

**Intake:** 2026-09-16 · GARNIER clean homepage · sourcee745990 implemented and independently reinspected; visual-review requirements persisted; evidence and scoped local handoff closed.

**Resume-Here:** Follow CURRENT in [[how/campaigns/campaign_garnier/missions/session_prompts_garnier]]. Receive actual P1 records under [[how/campaigns/campaign_garnier/artifacts/p1/formative_reader_pack]] using frozen4465. Review the separate4466 candidate through [[how/campaigns/campaign_garnier/artifacts/research/clean_homepage_visual_review]]; don't replay completed design or ask again for its accepted scope. Future visual changes use R-VISUAL. Session/AAR: [[session_stanley_20260916_052556_garnier_clean_homepage]].

### 2026-09-16 — Bounded homepage design pass complete in separate preview

[D] `updated: 2026-09-16`; `last_edited_by: agent_codex`; runtime Codex. Stanley's explicit approval ratifies [[how/campaigns/campaign_garnier/artifacts/research/next_build_scope|The bounded early-visual exception]]. [[how/campaigns/campaign_garnier/artifacts/research/homepage_design_pass|Implementation and receipt]]: source0c77b61 on `garnier/homepage-20260916`, isolated checkout `/Users/stanley/.cache/garnier-homepage-20260916`, preview http://127.0.0.1:4466/. Clearer hierarchy and connected file examples, visible copy/recovery, keyboard/no-JS/text-spacing checks. Full696passed/3documented skips;12final viewport/theme cells zero axe violations;12shared hero comparisons exact. Primary checkout site source/dist and all15 P1 hashes remain unchanged.

[D] P1 sourceb1cf040 at http://127.0.0.1:4465/ remains the frozen reader stimulus. P1.1/P1.2 complete; P1.3 real engineer/funder/scientist records absent; DP3 pending. This completed design increment does not accept a new stimulus or general P2/P3 entry. No push/deploy/peer delivery. [I] Additional design workload65±25kT versus60±25forecast, separately booked; billing unavailable.

**Intake:** 2026-09-16 · GARNIER bounded homepage design · Accepted exception implemented on isolated source0c77b61/port4466; evidence and handoff saved; P1 frozen.

**Resume-Here:** Review the separate candidate at port4466 if requested; keep real-reader sessions on port4465 under [[how/campaigns/campaign_garnier/artifacts/p1/formative_reader_pack]]. Read [[how/campaigns/campaign_garnier/artifacts/research/homepage_design_pass]] and CURRENT in [[how/campaigns/campaign_garnier/missions/session_prompts_garnier]]. Do not ask again for this design approval or replay P1.2. Any future stimulus switch needs explicit version disposition; DP3/humans remain open. Code is on the isolated branch; main checkout contains the closure records. Session: [[session_stanley_20260916_032510_garnier_homepage]].


### 2026-09-15 — GARNIER P1.2 complete through local inference; reader evidence next

[D] `updated: 2026-09-15`; `last_edited_by: agent_codex`; runtime Codex. [[how/campaigns/campaign_garnier/artifacts/p1/local_model_continuation|Local-model reproduction]] completes P1.2: exact copied Claude Code command through existing broker C69/Qwen3.6, all five file/history checks and distinct fresh-session governance recognition pass. Initial commit9431f681 contains360 files. The model needed a prompt to add that commit; earlier API and Qwen2.5 failures remain preserved. No unassisted timing or Claude subscription success is claimed.

[D] P1.1/P1.2 complete; P1.3 consenting engineer/funder/scientist observations absent; DP3 pending. [[how/campaigns/campaign_garnier/artifacts/research/next_build_scope|Next homepage increment]] is concrete and proposed: hierarchy, readable file example, interaction states, separate preview,60±25kT. The explicit early-visual sequence amendment has no response. Source b1cf040 and all15 route hashes at http://127.0.0.1:4465/ remain unchanged. Both local-model containers are stopped and retained; no push/deploy or peer delivery.

[I] Sitting315±45kT versus25 preparation forecast, including237.3kT of reported non-cached runtime input/output;735.4kT cached input is separately disclosed. Allocation295±35 to P1.2 and20±10 to preparation. Phase implementation/evidence625±155kT versus320 committed; previous wind-down/research separately booked. The overrun retrospective and measurement limits are in the run receipt. Remaining P1 forecast10–20kT after real records, excluding waiting/design; billing unavailable.

**Intake:** 2026-09-15 · GARNIER P1.2 · brokered local-model first project and fresh-session checks completed with recorded assistance; live mission routing advanced to formative evidence; early design amendment prepared and unanswered.

**Resume-Here:** Follow the CURRENT P1.3 evidence-intake prompt in [[how/campaigns/campaign_garnier/missions/session_prompts_garnier]]. Do not repeat the completed unchanged-candidate first-project run or request API credit as its missing input. Receive actual consenting reader records under [[how/campaigns/campaign_garnier/artifacts/p1/formative_reader_pack]]. If Stanley explicitly accepts [[how/campaigns/campaign_garnier/artifacts/research/next_build_scope]], record the narrow sequence amendment and build an isolated second preview; preserve the frozen port4465 stimulus, human requirements and pending DP3. Otherwise keep the existing visual-production sequence. Session/AAR: [[session_stanley_20260915_122656_garnier_next_build]].

### 2026-09-15 — GARNIER design context ingested; account routes clarified

[D] `updated: 2026-09-15`; `last_edited_by: agent_codex`; runtime Codex. [[how/campaigns/campaign_garnier/artifacts/research/design_context_20260915|Design research]] adds nine usable site inspections, one blocked Nous refresh, forty reviewed native frames and twelve source-linked quality criteria. [[what/design/garnier_quality_research|Quality brief]] assigns concrete follow-up topics to existing missions; proposals do not alter governed doctrine or authorize P2/P3. All fifteen preview hashes still match source b1cf040 at http://127.0.0.1:4465/.

[D/R] [[how/campaigns/campaign_garnier/artifacts/research/account_execution_options|Account options]] corrects the funded-API-only blocker. Host Claude Code reports claude.ai sign-in; Codex reports ChatGPT sign-in. ANTHROPIC_API_KEY is present; named subscription/access-token environment variables are absent in this process. Quota and broker access inside the disposable environment are unverified. No login, credential transfer or model retry performed. P1.1 complete; P1.2/P1.3 in progress; human observations absent; DP3 pending.

[I] Separately requested research forecast55 kT, rough actual65±25 kT; billing unavailable. Prior P1 implementation/evidence330±120 kT and wind-down30±15 kT remain separately recorded. P1 follow-up forecast20–35 kT after inputs remains unchanged.

**Intake:** 2026-09-15 · GARNIER design research · native reference review and primary guidance ingested; host account sign-ins verified through redacted status fields; API-only next-input wording corrected.

**Resume-Here:** Follow the CURRENT prompt in [[how/campaigns/campaign_garnier/missions/session_prompts_garnier]]. Prefer the existing Claude subscription for the exact P1 command after verifying an approved broker/storage route into a fresh disposable environment. A Codex run is additional compatibility evidence. Receive actual consenting engineer/funder/scientist records using the frozen protocol. Keep source b1cf040 stable; load the new quality brief for later authorized design work. No P0/P1.1 replay, DP3 inference, push/deploy or peer delivery. Session: [[session_stanley_20260915_114947_garnier_design_context]].

### 2026-09-15 — GARNIER P1 retry reached the API; funded execution and humans remain owed

[D] `last_edited_by: agent_codex`; runtime Codex. [[how/campaigns/campaign_garnier/artifacts/p1/first_task_continuation|Evidence continuation]] restored source `b1cf040` at `http://127.0.0.1:4465/` (15/15 served hashes). The exact copied command cloned `dea4ab9`; Claude Code 2.1.223 launched, but the first project request returned **Credit balance too low**. Router/standard checks pass; project/triad/history checks fail. No first project or fresh-session success. P1.1 completed; P1.2/P1.3 in_progress; DP3 pending.

[D] Stanley chose three local formative sessions; the [[how/campaigns/campaign_garnier/artifacts/p1/formative_reader_pack|worksheet]] is ready, but zero human records arrived. All 1,692 frozen P0 hashes preserved. No site source, registry, .adna, predecessor or peer edits; no push/deploy/delivery. The disposable container is stopped and retained; preview remains local.

[I] Continuation70±30kT including preceding planning; phase implementation/evidence330±120kT vs320 committed, with prior wind-down30±15kT separately additional. Remaining20–35kT after external inputs; billing unavailable.

**Intake:** 2026-09-15 · GARNIER P1 evidence · identified preview and reader worksheet ready; installed-CLI task failure retained; missing funded execution and human records named.

**Resume-Here:** Read [[how/campaigns/campaign_garnier/artifacts/p1/first_task_continuation]] and the CURRENT P1.2 prompt. Obtain a funded broker credential or completed authenticated disposable transcript, plus consenting engineer/funder/scientist observations; no secrets in chat. Retry in a fresh disposable environment because the retained failed container already contains the clone. Keep the candidate stable and DP3 pending while evidence is absent. No repeat DP1/DP2, P0/P1.1 replay or P2 entry. Session: [[session_stanley_20260915_112428_garnier_p1_evidence]].

### 2026-09-15 — GARNIER wind-down reconciled; resume at remaining P1 evidence

[D] `last_edited_by: agent_codex`; runtime Codex. Implementation and evidence closure are committed through `f34f9c2` (website source `b1cf040`, synthetic stimulus `5b92495`). P1.1 is completed; P1.2/P1.3 remain in progress; DP1/DP2 accepted, DP3 pending. The session AAR, final verification and frozen baseline remain preserved. This is a records-only handoff, not a fresh website verification or phase transition.

**Intake:** 2026-09-15 · GARNIER wind-down · session metadata/inventory reconciled; CURRENT prompt narrowed; preview identity/restart documented; no outward action.

**Resume-Here:** Read root/campaign governance and active leases, then [[how/campaigns/campaign_garnier/artifacts/p1/phase_exit]] and [[how/campaigns/campaign_garnier/artifacts/p1/formative_reader_pack]]. Follow the CURRENT P1.2 resume prompt. Finish authenticated disposable first-project reproduction and receive consenting operator-supplied engineer/funder/scientist observations. If evidence is unavailable, name the missing input and keep the hold; do not restart P0/P1.1, rerun implemented copy work by default, re-ask DP1/DP2, or enter P2. Preserve source/evidence identity and unrelated work. Wind-down session: [[session_stanley_20260915_110717_garnier_winddown]].

### 2026-09-15 — GARNIER P1 candidate implemented; formative evidence next

[D] `last_edited_by: agent_codex`; runtime Codex. Candidate source `b1cf040` implements the approved homepage file example/AI DNA bridge, quickstart/source-tour corrections and six-route public-good/privacy work. P1.1 completed; P1.2 remains in progress pending authenticated first-project reproduction; P1.3 remains in progress pending operator-supplied formative humans. [[how/campaigns/campaign_garnier/artifacts/p1/phase_exit|P1 review packet]] and [[how/campaigns/campaign_garnier/artifacts/p1/formative_reader_pack|human protocol]] are the next live inputs. DP1/DP2 remain accepted; DP3 is not yet ready for acceptance.

[D] Local full suite 698 passed / one existing skip; container visuals 26 passed; final capture population 180 cells with zero axe violations. Three bounded synthetic readers and two calibrated graders passed keyed tasks; no human timing or outcome is claimed. Clone/entry succeeded in a disposable container, then Claude Code was absent (exit 127); no first project is claimed. All 1,692 frozen P0 hashes are preserved. No push, deploy, registry/.adna/predecessor/peer mutation or outward delivery.

[I] Rough phase content-load 260±90kT against 320 committed, independent reviews/reruns included; 25–50kT follow-up estimate. Human waiting and unknown API billing excluded. Homepage word-extractor undercoverage is recorded; no percentage reduction claimed.

**Intake:** 2026-09-15 · GARNIER P1 · implemented local candidate, verification and review packet; human/first-task evidence owed.

**Resume / next session:** Read the P1 packet, root/campaign governance and active leases. Keep the candidate stable; finish P1.2’s authenticated disposable first task and collect consenting engineer/funder/scientist formative observations under the accepted protocol. Resolve or disposition confusions, then assemble DP3. Do not restart P0/P1.1, repeat existing approvals, enter P2 or visual production, push, deploy or deliver memos without the applicable gate. Session: [[session_stanley_20260915_094410_garnier_p1]].

### 2026-09-15 — GARNIER DP2 accepted with six amendments; P1 authorized

[D] `last_edited_by: agent_codex`; runtime Codex. Stanley’s “I accept with those amendments.” ratifies [[how/campaigns/campaign_garnier/artifacts/amendments/dp2_ratification_20260915|DP2]]. P0 is accepted as the planning baseline with its evidence limits. P1 is authorized at 320 kT (150/90/80), original 186 kT preserved; campaign forecast derives to 2,444 kT across 38 missions/47 estimated sittings. Later phase budgets remain provisional.

[D] Amendment specifications name the first homepage mechanism/example/action deliverable, accessible AI DNA/public-good explanation, privacy/state corrections in P1.3, count-release fidelity in P2.2, fresh-mobile triad readability in P3.3, and experimental gate adoption controls in P1.1. Formative humans from all three decisive classes remain required before DP3. No website repair or instrument execution is claimed by this records-only ratification. All 1,692 frozen baseline hashes remain unchanged; document integrity and twelve negative controls pass.

**Intake:** 2026-09-15 · GARNIER DP2 · six amendments recorded, P1 budget committed, mission prompts aligned; local commit only.

**Resume / next session:** Begin [[mission_garnier_p1_1_homepage_voice]] under the accepted DP2 record; do not ask for DP1/DP2 again. Read root/campaign governance, active leases, the updated mission and [[prescreen_pack]]. Produce the reviewable homepage/storyboard first; prove C4 gate-adoption failures before relying on experimental checks. Keep research and independent reviews bounded, report actuals plus remaining forecast, preserve reserved paths and predecessor publication holds. DP3 is the next human phase gate. Session: [[session_stanley_20260915_092248_garnier_dp2_ratification]].

### 2026-09-15 — GARNIER P0 completed; DP2 exit and P1 budget pending

[D] `last_edited_by: agent_codex`; runtime Codex; [[campaign_garnier]] remains active in phase0. Both P0 missions completed. [[how/campaigns/campaign_garnier/artifacts/p0/phase_exit|DP2 evidence and budget gate]] is the next live decision. Two clean replacement scorers share a frozen v1.1 pack; paired breakdowns/ceilings and excluded attempts are preserved in [[baseline_reconciliation]]. Production still serves `eda4cbfc`; local build source was `c38c6dc`. No composite is promoted as a launch score.

[D] Local full gates698 pass/one existing skip; visual container26 pass; target captures/controls and three clean synthetic prescreens are filed. Human timing, clean-machine TTFS, manual AT and field p75 remain owed; collection is unverified. Five findings route to P1–P4, including stale counts, privacy wording and fresh-mobile diagram legibility. No site/src, registry, .adna, predecessor/peer write, push, deploy or delivery occurred.

[I] Rough P0 content-load590±210kT versus123 forecast; retrospective filed. P1 original186kT is preserved, with an additive proposed320kT reforecast derived from its three mission cards. No P1 budget or phase transition is accepted by this block.

**Resume / next session:** Read root/campaign governance, active leases and [[how/campaigns/campaign_garnier/artifacts/p0/phase_exit|DP2]]. Obtain Stanley’s phase-exit/P1-budget ruling; do not ask for DP1 again. On explicit DP2 acceptance, record the exact choice and begin [[mission_garnier_p1_1_homepage_voice]] under that budget, with [[prescreen_pack]] confusions and the source-tour finding carried forward. Retain HAUSSMANN P5.1/P5.2/GR-7 ownership, H1/G4/counsel and publication holds. Session: [[session_stanley_20260915_080004_garnier_p0]].

### 2026-09-15 — GARNIER DP1 accepted with amendments; P0 ready

[D] `last_edited_by: agent_codex`; runtime Codex. Stanley approved the five charter amendments and then instructed their implementation. [[how/campaigns/campaign_garnier/artifacts/amendments/charter_ratification_20260915|DP1 ratification]] is **accepted with amendments**; [[campaign_garnier]] is active. This supersedes the pending GARNIER decision in the historical block below. The original proposal is archived, the pending marker archived, and the current HTML gate is a read-only receipt.

[D] Amended mission frontmatters derive 38 missions / 47 estimated agent sittings / 2,310 kT content-load, **uncalibrated**. Only P0's 123 kT envelope is committed; later budgets are phase-gated. Twelve named documentation tranches cover 118 content routes, with the other 111 built routes assigned to existing missions. Inventory is not completed review. Storyboard and early human feedback precede visual production; word targets are advisory; unsupported claims remain blocking. Missing field data stays unmeasured under the accepted collection/lab/follow-up exception.

[D] [[how/campaigns/campaign_garnier/artifacts/amendments/amendment_verification|Amendment verification]] passed: mission contracts/DAG/totals, twelve negative fixtures, immutable predecessor conventions/protections and archive hashes; resolved receipt passes mobile/desktop render and axe checks. No website source change, P0 score, human panel, push, deploy or peer delivery occurred. Unrelated workspace changes were preserved.

**Resume / next session:** Read root and campaign governance, this ratification, active leases and [[mission_garnier_p0_1_baseline]]. DP1 is already accepted; do not request it again. Begin P0 with fresh source/live identity and a frozen v1.1 evidence pack, two isolated scorers and the fixed Nous/Mastra exemplars. Execute within the P0 envelope and hold at DP2 for the human exit/P1 budget. Preserve HAUSSMANN P5.1/P5.2/GR-7 ownership and G4/counsel holds. No publication authority is implied. Session: [[session_stanley_20260915_060016_garnier_charter_amendments]].

### 2026-09-14 — GARNIER genesis: charter ready, execution not ratified

[D] `last_edited_by: agent_codex`; runtime Codex; [[campaign_garnier]] remains **planning**. Next live GARNIER decision: [[how/campaigns/campaign_garnier/artifacts/genesis/charter_gate|DP1 charter gate]] (HTML companion available). Proposed 26 missions / 26 sessions / 1,637 kT content-load, derived from mission files; Decade 2 provisional. [[how/campaigns/campaign_garnier/artifacts/genesis/verification_report|Genesis verification]] records scope and omissions. No site/src, registry, .adna, HAUSSMANN/VITRINE, peer writes, push or deploy. Existing unrelated changes preserved.

[D] Current evidence: safe build 229 pages/226 twins; full gates 698 pass plus one existing skip; container visual 26 pass; seven-route live matrix 84 combinations with zero reported axe violations. MCP remains built/not-live; actual community authority is Operations ADR-025 §D5. [I] Retain Agentic DNA; mechanism before shared-heritage mission. HAUSSMANN's panel/rescore/integration and G4/counsel holds remain theirs.

**Resume / next session:** Read root/campaign governance, active leases and the charter gate. Obtain Stanley's D-1…D-10 ratification before executing queued GARNIER missions; then begin [[mission_garnier_p0_1_baseline]]. Do not infer campaign or publication GO from the completed genesis. Session: [[session_stanley_20260914_030114_garnier_genesis_s0]].


> *(HAUSSMANN-era QUEUED banners 2026-09-14 (wind-down) → 2026-07-24 (registry regen) — 1269 lines, 242,258 B — archive-shifted → [[STATE_archive]] §Shifted-2026-09-24; never deleted, nothing summarized.)*

> *(QUEUED banners 2026-07-24 → 2026-07-11 — Palimpsest v8.9 · Refit · Distillery v8.8 · Cleanroom v8.7 · Storyweave P3–P5, all COMPLETED — archive-shifted → [[STATE_archive]] §Shifted-2026-08-03; never deleted.)*

> *(QUEUED banners 2026-07-08 → 2026-07-05 — Storyweave P0–P1.6 · Ouroboros · Meridian · Concord · Fleet-Re-Seed, all closed — archive-shifted → [[STATE_archive]] §Shifted-2026-07-17 [Clear Hearth W-B slice 3]; never deleted. Kept live: the 07-11+ Storyweave P3→P5 + v8.7/v8.8 release arc.)*

> *(Older QUEUED banners archive-shifted → [[STATE_archive]] §Shifted-2026-07-06; never deleted per SO-6.)*

## 🌐 adna.network — LIVE on Cloudflare (2026-05-31)

**The aDNA site is live at https://adna.network** (canonical public face; adna.dev abandoned). **First executed ADR-031 Cloudflare migration** — API-driven, single operator-present session (operator hands-on = 1 token + 1 nameserver change). CF zone `667a2d5e…` (account `e048a126…`; NS `keanu`/`sierra.ns.cloudflare.com`); apex + www → Vercel `adna-docs` (`prj_SBKnZf…`) via **CNAME flattening**, DNS-only; **Mailgun email preserved** (MX×2 / SPF / `smtp._domainkey` DKIM / strict `_dmarc p=reject`). Canonical flipped: `site/astro.config.mjs` `site:` → adna.network + Vercel `SITE_URL` env + **prebuilt** redeploy (`dpl_AxbEXjuF…`; local build required — `prebuild` reaches `../scripts`); live `<link rel=canonical>` + 159-URL sitemap emit adna.network. **CF token onboarded to Home.aDNA broker** (Keychain `CLOUDFLARE_API_TOKEN` + zshrc + inventory C47; 1P backup = operator Touch-ID one-liner pending). **Skill graduated to SiteForge** — `skill_cloudflare_dns_cutover` v1.0.0 (ADR-031 successor-ownership relocated per operator directive; SiteForge owns build+deploy+DNS). **Operator override:** M5.7 O6 domain-cutover executed early — DNS/canonical only; **renamed no content** (honors the aDNALabs "nothing renames before the brief" broadcast). WARN: `SS_VERCEL_TOKEN` leaked again in a Vercel-CLI error (recurring incident) -> rotate. Seeded turnkey for next in-vault session: `worldgeno.me` (wga.aDNA M02, unblocked) + `stanley.science` (ScienceStanley M14). Doctrine: [[adr_031_cloudflare_dns_site_publishing_standard]].

## Current Phase

**Live (2026-10-03):** the `phase:` string in this file's frontmatter is the single live statement — GARNIER P1 at P1.3 C2 → DP3; HAUSSMANN endgame (P5.1 joint panel after GR-7 · P5.2 · GR-7); Operation Primer queued. Everything below this line is archive pointers.

> *(Current-Phase rows 2026-07-01 → 2026-07-03 — the Champollion G0→G5 ladder + STR Track-C close — archive-shifted → [[STATE_archive]] §Shifted-2026-07-17 [Clear Hearth W-B slice 3]; never deleted.)*

> *(Current-Phase activity older than 2026-07-01 archive-shifted → [[STATE_archive]] §Shifted-2026-07-02 (Champollion M1.5); 48 bullets, never deleted per SO-6. This router keeps the recent live arc (Champollion 2026-07-02 + STR close 2026-07-01); older bullets archive-shifted, trim to the next diet.)*

## Active Campaigns

### `campaign_garnier` (Operation GARNIER — **ACTIVE**, runtime claude since 2026-09-16) · 38 missions: 4 completed · 1 in_progress (P1.3) · 33 queued · open front P1.3 C2 → DP3 · charter `how/campaigns/campaign_garnier/campaign_garnier.md` · CURRENT `missions/session_prompts_garnier.md` · packet `phase_exit.md` §DP3

### `campaign_haussmann` (Operation HAUSSMANN — **ENDGAME ONLY**: P5.1 joint panel after GR-7 · P5.2 · GR-7) · 34 missions: 30 completed · 2 in_progress · 2 queued · queue of record `artifacts/operator_queue_reconciled_20260911.md` (supersedes any owed-list narrated here)

### `mission_primer_adna_for_data_engineers` (Operation Primer — standalone mission, **IN_PROGRESS**: O0 ✅ · **O1 ✅ 2026-10-03 (d)** — draft v0.1 at `what/docs/adna_primer_for_data_engineers.md`, fable) · `how/missions/` + `artifacts/primer/` · O2 (six-lens review, 90 kT) next, operator-summoned

### `campaign_v8_9_release` (Operation Palimpsest — ✅ **COMPLETED 2026-07-24**; v8.9 SHIPPED [commit c8e5427 + tag v8.9]; P0→P1→P2→P3 all done — **DO NOT re-open**)

> *(Body archive-shifted → [[STATE_archive]] §Shifted-2026-08-03; the ruling above is the live record.)*

### `campaign_refit` (Operation Refit — ✅ **COMPLETED 2026-07-24**; G1 07-21 · G2 07-24 · **G3 07-24** [DP10: accept + push all + deliver 5 memos]; 6/6 missions, 21/21 A–E rows, no normative change — **DO NOT re-open**)

> *(Body archive-shifted → [[STATE_archive]] §Shifted-2026-08-03; the ruling above is the live record.)*

### `campaign_v8_8_release` (Operation Distillery — ✅ **COMPLETED 2026-07-14**; v8.8 SHIPPED, `a32724b` + tag `v8.8`)

> *(Body archive-shifted → [[STATE_archive]] §Shifted-2026-08-03; the ruling above is the live record.)*

> *(Completed-campaign entries — Cleanroom v8.7 · Meridian · operation_adna · feedback_loop · keystone · looking_glass · STR · network_audit · v2_infrastructure · Completed Mini-Campaigns — archive-shifted → [[STATE_archive]] §Shifted-2026-07-17; never deleted. Kept live: ACTIVE Distillery + Pending/seeded below.)*

### Pending Campaigns (seeded but not yet open)

#### `campaign_obsidian_deployment_stabilization` (NEW successor — seeded 2026-05-13 at M-LWX-03 S2 Phase L; **ABSORBED by `campaign_adna_serious_tool_readiness` 2026-05-17**)

`how/campaigns/campaign_obsidian_deployment_stabilization/` — implementation-focused successor to `campaign_lattice_workspace_ux`. Owner: Rosetta. Strategic intent: make the Obsidian deployment of every aDNA vault stable, standard, and self-stabilizing. **ABSORBED into `campaign_adna_serious_tool_readiness` Phase 3** (Forge Ecosystem Hardening) 2026-05-17 — 8 tracks T1-T8 distributed across v8 missions M3.1-M3.4. Stub directory preserved for audit (per Standing Order #6 archive-not-delete); status `planned` stays in stub frontmatter; effective status `absorbed_by: campaign_adna_serious_tool_readiness`. 7 backlog files F-S2-1..8 (in `aDNA.aDNA/how/backlog/`) source the v8 Phase 3 work directly.

#### `campaign_validation_node_adna_lwx_outputs` (NEW successor — seeded 2026-05-13 at M-LWX-03 S2 Phase L; lives in `lattice-labs/`)

`lattice-labs/how/campaigns/campaign_validation_node_adna_lwx_outputs/` — validation-focused successor; dispatched to Carly + Herb. Owner: Berthier (lattice-labs). Strategic intent: validate M-LWX-01/02/03 outputs on operator-owned machines via Carly+Herb dispatch. Phase 1 narrow: M-VNAL-01 covers outstanding O4 (wikilinks), O5 (cross-vault links), O6 (marketplace), O3-extended (full vault tables). Phase 2+ broader: recurring "Carly+Herb validate-all-aDNA-features" pattern — the FIRST instance of an explicit validation-dispatch campaign for aDNA work. Coord memo at `lattice-labs/who/coordination/coord_2026_05_13_carly_herb_node_adna_validation_dispatch.md`. Status: `planned`; opens when Carly + Herb each acknowledge the coord memo.

#### `campaign_adna_v3_ecosystem_compliance` (planned successor — seeded 2026-05-08)

`how/campaigns/campaign_adna_v3_ecosystem_compliance/` — applies v7.0 changes per-vault to the 19 active aDNA ecosystem vaults. Strategic intent: bring the lattice into full v7.0 compliance after the standard codifies it. Preliminary phase structure: P0 planning + P1 audit + P2 bulk skill upgrade + P3 git remote setup + GitHub naming standardization + P4 airlock adoption + workspace router resync + P5 final ecosystem audit + AAR. Preliminary mission outline: M01-EC (per-vault audit) → M02-EC (bulk skill upgrade) → M03-EC (git remote setup) → M04-EC (GitHub repo rename) → M05-EC (airlock adoption) → M06-EC (workspace router resync) → M07-EC (final audit + AAR). Estimated 12–20 sessions (recalibrated by M01-EC). Persona: Rosetta continues. **Opens at v2 P3 phase gate** (post-M03 flatten + M08a/M08b shipped); M11 of v2 finalizes the mission tree before this campaign opens.

> *(Operation Rosetta [absorbed by STR] + its phase table archive-shifted → [[STATE_archive]] §Shifted-2026-07-17; never deleted.)*

## Phase 7 Progress → archived
> *(Operation Rosetta Phase-7 100-cycle III loop + Persona Ranker Summary (done 2026-04-26; ranker 5.00) archive-shifted → [[STATE_archive]] §Shifted-2026-07-02, Champollion M1.5. Historical; live handoff = ⏭ QUEUED above.)*

## What's Working → archived
> *(the Phase-7-era site snapshot (117pp / 47 gates / "5 reviewer personas" — superseded: site 179pp, 16 personas, 281+ gates) archive-shifted → [[STATE_archive]] §Shifted-2026-07-02, Champollion M1.5. Historical; live handoff = ⏭ QUEUED above.)*

## Active Blockers

⚠ **Corrected 2026-09-04.** This section read *"None."* while the ⏭ QUEUED block above it recorded a
red `main`, an unsigned ⛩ gate and an unresolved runner conflict — **two sections of one file
disagreeing, with the stale one being the one a cold reader would trust**, because it is short,
declarative and headed *Active Blockers*. The campaign's **index-vs-artifact** class, inside `STATE.md`
itself. *(Prior value preserved, SO-6: `None.`)*

**Live, 2026-09-04 20:5x UTC — re-derived 2026-10-03 (rows 3 and 5 struck with their corrections; rows 6–9 added for GARNIER, which this table had omitted since the campaign's ratification on 09-15):**

| # | Blocker | Owner | Note |
|---|---|---|---|
| 1 | ⭐ **UPDATED 2026-09-05 — the ordering constraint is GONE, the recruitment is not.** `AC-2` and `AC-3` may now run **in either order or in parallel** (⛩ ruling (a), P5.1 AMENDMENT 3), so the three human acts can be scheduled concurrently. **`P5.1` still needs five recruited cold readers** — and now **one of them also runs the TTFS**, which is what discharges `P2.6 O0b` | ⛩ **operator** | The campaign's true critical path. Kit built and waiting since 2026-08-26; `AC-P` satisfied since the 2026-09-04 deploy. **Nothing agent-side unblocks this.** |
| 2 | **`P5.2` → `DP9`** | ⛩ operator | ⭐ **UPDATED 2026-09-07 — its two HARD PRECONDITIONS are DISCHARGED by `GR-6`** (instrument v1.1 + the re-authored crawler). **Blocked on 1 alone now**, which is human. **`DP7` folds in here**, ruled 2026-09-04. |
| 3 | ~~**⛩ course-deploy GO** — `/learn/course/*` is **404** live~~ ⛔ **STRUCK 2026-10-03: `curl https://adna.network/learn/course/` → 200** — the course deployed with the 2026-09-11 prod `eda4cbf`; this row stayed red for 22 days after the thing it blocked on had shipped (SO-6: struck, not deleted). Original text follows: ~~the 7-lesson ladder is complete in-tree~~ **TWO lessons are in-tree** (derived: `ls src/content/course/*.md` → 2; `b2e943b`'s own message says *"lessons 1–2"*) | ⛩ operator | ⭐ **Must be taken BEFORE recruitment opens** — `P5.1 AC-1` fixes its stimulus as *"the LIVE production hero at the recorded build stamp"*, so a deploy *after* the panel means the panel evaluated a site that no longer exists. ⚠ **The "7-lesson … complete" claim was FALSE and it is corrected, not deleted (SO-6).** ⭐ Note which surface was honest: the **page derives its own count** (`course/index.astro:13,53` renders `{ladder.length} lessons`), so a reader has always been told **2**; only this index said 7. *The index-vs-artifact class, with the artifact right and the pointer wrong* — and it would have gone out as an operator-facing description of what a deploy ships. **C1 + C2 are now built and the two blockers are discharged** (see the course-deploy increment). |
| 4 | **`F-ab`** — ~~now FOUR surfaces~~ **MEASURED, and half discharged** | `GR-5` ✅ **CLOSED 2026-09-05** | ⛩ The ratified rider **fired on the measurement**: CI n=30 → `netdiagram-svg` **spread 0.6400 ⇒ advisory**; every other figure **0.0000 ⇒ still enforcing**. ⛔ **No pin moved** (`worstPx` still 7.9). **(b) discharged**; **(a) narrowed** to a measured **~3.3 %** on one figure with its **cause still unverified**; §22.4's `gate-47` half **unrunnable** in the sampleable regime; `AMENDMENT 1`'s `gate-49`/`home` **untouched**. ⭐ *There was no pin to re-derive* — and the forbidden `7.9 → 7.4` would have pinned **above** CI's true worst of **7.3600** and kept flaking. Still a standing tax on the other surfaces: a red there is *a question, not a verdict*. |
| 5 | ~~Clause 5 of ADR-056 — `npm login`~~ ⛔ **STRUCK 2026-10-03 — ruled OUT of the gate queue 2026-09-11** (`operator_queue_reconciled_20260911.md` §3: a credential, not a decision); it survived here three weeks after its own ruling | ~~*the world*~~ | Ratified-with-rider; not a decision. |
| 6 | **GARNIER P1.3 C2 — three consenting formative readers** (engineer · funder · scientist; ⛔ agents never recruit) → two-scorer key → **DP3** | ⛩ **operator** | The campaign's critical path since 09-16. ⚠ Agent precondition: restart the `6487444` preview on `:4466` (down 2026-10-03) and re-verify 15/15 route hashes before any reader is scheduled. |
| 7 | **DP3 rulings (a)–(g)** incl. (f) the P1 exit candidate's identity (`6487444` is not on `vitrine/design`) and the P2 option (A 991 · B ≈1,640 · **C ≈640 recommended**) | ⛩ operator | Packet pre-assembled 09-24 at `phase_exit.md` §DP3; follow §5 in order. |
| 8 | **ADR-010 Wilhelm co-sign** (un-fires G4) · **G5 address** · **G2 Speed-Insights field reading** | ⛩ operator / the world | HAUSSMANN operator queue G2/G4/G5; G4 fired in source 09-24, built not deployed, gate-49 re-baseline discharged 09-25. |
| 9 | ~~**No push, no CI, no upstream**~~ ✅ **PUSHED 2026-10-03** — `vitrine/design` → `origin/vitrine/design` at `d30d760` (upstream set); **no CI run observed on the branch at close** (verify whether `gates.yml` triggers on non-`main` branches); local `main` still 5 ahead of origin, not pushed | ⛩ operator (`main` push; deploy) | Push ≠ deploy (convention 20); nothing deployed. Original row kept struck (SO-6): "`vitrine/design` 45 ahead of `origin/main` (last fetch 09-15), local `main` 5 ahead unpushed — each its own GO. Nothing authorized to date." |



## Next Steps → archived
> *(the 2026-06-24 keystone-DP2 Next-Steps snapshot (superseded by the ⏭ QUEUED banner above) archive-shifted → [[STATE_archive]] §Shifted-2026-07-02, Champollion M1.5. Historical; live handoff = ⏭ QUEUED above.)*

## Pending Manual Actions

> **Re-cut 2026-10-03 (c)** — after the operator accepted the whole rulings packet. The rows below the rule are June-era, kept (SO-6). Live human acts, in the order they unblock agent work:

- ~~**SEND GO** for the eight `outbound_ready` replies~~ ✅ **GIVEN + EXECUTED 2026-10-03 (d)**: 6 delivered · Ledoux recipient-pulled · **Hygieia HELD (branch 3)** → **agent retry owed next sitting** (re-probe WilhelmAI, deliver when quiet). Original: "in `who/coordination/coord_2026_10_03_rosetta_to_*.md` (Talos G10 first — RC's register grades it RED ~2026-10-07). One blanket GO or per memo."
- **Three consenting readers** for GARNIER P1.3 C2 (engineer · funder · scientist) → DP3 **intake** per `phase_exit.md` §5 — rulings (a)–(g) are already taken; the agent restarts `:4466` + re-checks 15 hashes first.
- ~~**Push sitting GO**~~ ✅ **EXECUTED 2026-10-03 (d)** — allowlist landed (12 → 0), hook root-first defect fixed, `vitrine/design` pushed to origin at `d30d760`; `main` NOT pushed (own GO). Original: "(C1 ruled GO 2026-10-03): agent adds a gitleaks allowlist for 64-hex sha256 values in `how/campaigns/**/evidence/**/*.json`, re-runs the hook self-test, then `git push -u origin vitrine/design`. Push ≠ deploy; **no deploy** (C2)."
- **Summon Primer O2** (fable, 90 kT — six parallel reviewer lenses + citation/ADR check) — `how/missions/mission_primer_adna_for_data_engineers.md`; O1 ✅ 2026-10-03 (d). ~~Summon Primer O1 (fable, 120 kT)~~
- **Open the v8.12 template-release gate** — the six §3 answers are pre-written at `release_staging_ledger_v8_12.md`; the firing commit writes the §7.7 block.
- **G2** — one Speed Insights dashboard look; record the p75 reading (or its dated absence) at the operator queue §G2.
- **G5** — supply the CoC confidential reporting address → `CODE_OF_CONDUCT.md:54` + `:63`, one commit.
- **ADR-010 Wilhelm co-sign** — the ask to Hygieia is **drafted and HELD** (WilhelmAI live at the 2026-10-03 22:40Z send probe, doctrine §2 branch 3); it is *asked* only once the retry delivers; un-fires G4 only with a dated `operator_cleared_YYYY_MM_DD` at the yaml.
- **Andy Zhang on Fluxer** (C6; Fluxer.aDNA / Aspasia, operator-approved per act): join `community.adna.network` · disclosure-roster row → `disclosed` · `dmRoster` · an attachment path or a carried link · register aDNA.aDNA as a consumer vault or route via aDNALabs. Needed before Primer O5.
- **Credential rotation, at discretion** — a process listing on this node exposed env-carried credential values to an agent transcript on 2026-10-03 (none recorded); Hestia's broker is the surface.

---

- **ADR-010 Wilhelm co-sign** (carry) — gates the `/commons` un-embargo; first inclusion = the E5-close coordinated deploy (c169).
- **Hestia: vault-card public fields** — ack `coord_2026_06_10_rosetta_to_hestia_vault_card_public_fields.md` (Harness `display_name` split + optional taglines) → Rosetta regen + next deploy.
- **Hero eyeball (2 promoted candidates, 2026-06-10)** — `/get-started` doc-hero (`hero_get_started.png` ← `helix_r1_H2_v2`) + `/vaults/graph` band (`hero_vaults_graph.png` ← `sec_network_r1_N2_v2`); both LIVE; swap-and-redeploy is cheap if either misses.
- **GitHub social preview**: Upload `aDNABanner.png` (repo root; new banner from M3.2 S3 close 2026-05-22) at github.com/**aDNA-Network**/aDNA.aDNA > Settings > Social preview *(repo slug updated 2026-06-10 — org migration; old slug redirects)*. Supersedes prior recommendation to upload `site/public/images/og-default.png`; new banner is the canonical first-contact visual across all 3 surfaces (Astro hero + README + social preview).
- ~~**Vercel Git integration**: Connect repo at vercel.com > adna-docs > Settings > Git for auto-deploy (currently manual via `vercel --prod`)~~ ⛔ **RETIRED 2026-09-11 — auto-deploy-on-push is contrary to ratified deploy doctrine.** Push and deploy are separate ⛩ operator GOs precisely so `check_alias_ancestry.mjs` can refuse a tree that does not contain the commit currently serving prod; auto-deploy would leave that guard nothing to run. The sanctioned path is `site/scripts/deploy_adna.sh prod`, and "currently manual" is the design, not a gap. *(The identical recommendation was retired from the published `/how/publishing/vault-to-site` page in the same sitting — it was live on the public site, pointing at a section that never described it.)*
- **Google Search Console**: Register **adna.network** (⚠ **corrected 2026-09-11 — this row said `adna-docs.vercel.app`**, a deployment alias, not the canonical origin `SITE_ORIGIN = https://adna.network`. Verifying the alias would have produced a verified property for the wrong site and left the real one unindexed — *a task whose target is wrong fails by completing*), obtain verification code, add `<meta name="google-site-verification" content="...">` to `SEOHead.astro`
- **Bing Webmaster Tools**: Register **adna.network** (⚠ **corrected 2026-09-11 — this row said `adna-docs.vercel.app`**, a deployment alias, not the canonical origin `SITE_ORIGIN = https://adna.network`. Verifying the alias would have produced a verified property for the wrong site and left the real one unindexed — *a task whose target is wrong fails by completing*), obtain verification code, add `<meta name="msvalidate.01" content="...">` to `SEOHead.astro`
- **Delete M05 S2 scratch GitHub repo**: `github.com/ScienceStanley/m05-test` (private; ~10KB; verification scratch from 2026-05-18). Delete via GitHub UI > Settings > Delete, or refresh gh auth scope with `gh auth refresh -h github.com -s delete_repo` then `gh repo delete ScienceStanley/m05-test --yes`. Repo lingers because gh token at S2 only had `repo` scope (not `delete_repo`).
> *(Manual-action rows already ✅ RESOLVED (2026-04 → 2026-06: upstream PR #8 · `.adna/` README flatten-residue + banner · four Vercel production deploys) archive-shifted → [[STATE_archive]] §Shifted-2026-08-03; never deleted.)*


> *(Historical session log — ~20 `## Last Session (…)` blocks (2026-05→06-30) + the accumulated `## Next Session Prompt` stack (superseded 2026-06-27) — archive-shifted → [[STATE_archive]] §Shifted-2026-07-02 (Champollion M1.5). Never deleted (SO-6); the live handoff is the ⏭ QUEUED banner at the top.)*
