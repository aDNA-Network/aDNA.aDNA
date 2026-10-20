---
type: decisions
artifact_class: proposed_amendment
campaign_id: campaign_garnier
source_campaign: campaign_arcade
source_mission: mission_arcade_a5_1_garnier_amendment
title: "DP3 item (i): the ARCADE amendment — four relations into the claims lanes, the P2.3 re-scope, the registry cards, VITRINE, the v8.14 carries, and ARCADE's budget"
created: 2026-10-20
updated: 2026-10-20
status: accepted          # ⛩ RATIFIED 2026-10-20 in advance of DP3 (ARCADE R59 → R61–R63, operator). PRIOR (SO-7): proposed — authored the same sitting
last_edited_by: agent_rosetta
session: session_stanley_20261020_053954_arcade_a5_1_garnier_amendment
tags: [garnier, dp3, arcade, amendment, claims, docs_review, registry, vitrine, v8_14, budget]
---

# DP3 item (i): the ARCADE amendment

> **What this is, plainly.** ARCADE is GARNIER's side campaign. It wrote down how the aDNA standard relates to two places where graphs are offered and worked on (an exchange and a console), to the company that will stand behind them, and to a first named profile. It then shipped the standard's half of that in v8.13 (standard v2.6, 2026-10-20). This file is how that work comes back into GARNIER. Each row below is a **proposal**. The operator rules it, and nothing in GARNIER changes until then.

**Scope rule.** GARNIER's DP3 still waits on the three P1.3 reader records (`artifacts/p1/phase_exit.md` §5). This item is ruled **in advance** under ARCADE plan-time ruling **R59** (operator, 2026-10-20), as rulings (a)–(g) were on 2026-10-03 (packet B1). DP3 itself stays `pending`. Nothing here touches the frozen stimulus `6487444`/4466 or `site/`, and nothing here is deployed.

**Conventions.** Provenance tags `[D]` observed · `[I]` inferred · `[R]` peer record. Tense labels `PASS` · `TAUGHT-AS-DESIGN` · `HORIZON`. Every ADR number is qualified by its vault (ARCADE rule 3). R2 holds: the company appears as a role and is never named on a public surface.

---

## §0 · Measured at this sitting, before anything was proposed

| Check | Result | Evidence |
|---|---|---|
| Image standard | `[D]` `aDNA-Network/aDNA@v8.13` `.adna/what/docs/adna_standard.md` = md5 `86385da8`, byte-identical to dev; title "aDNA Universal Standard v2.6"; §19.7 Graph Exchange present | `gh api …/contents/…?ref=v8.13` (raw), 2026-10-20T05:4xZ |
| Image profiles list | `[D]` `.adna/what/docs/profiles/AGENTS.md`: listed table `(none listed yet)`; candidates table: `medical` (aDNA-Medical) · `starter` · "spec in draft at its steward" · `HORIZON` | same fetch |
| Live build | `[D]` `adna.network/.well-known/adna-build.json` → commit `c7d152a`, built 2026-10-20T03:25:14Z, prod | `curl` |
| Live AEP pages | `[D]` `/community/proposals/aep-3/` + `/aep-4/` 200; AEP-4 "accepted … in the standard from v2.6 … It is not final: no check yet fails … because no profile is listed" | `curl` + text extract |
| Live registry cards | `[D]` ⚠ `/vaults/exchange/` and `/vaults/terminal/` render **Stage `planned`** — the 2026-10-16 regeneration (both `active`) is built on `vitrine/design`, not deployed; prod was built from `main` | `curl`; `site/src/data/vaults.json` `generated_at: 2026-10-16` |
| Live spec mirror | `[D]` ⚠ `/reference/specification/` and `/19-optional-extensions/` render **v2.5**; "Graph Exchange" 0 hits. The mirror (`transform-content.mjs` → `split_specification.mjs`, from `.adna/what/docs/adna_standard.md`) was not re-run in the v8.13 deploy tail, and `skill_template_release` has no step for it | `curl`; `site/src/content/spec/*.mdx` `version: "2.5"` ×20 |
| Company name on live pages | `[D]` 0 on all seven fetched pages | `grep -ic` |
| Exchange L2 v1 | `[R]` Exchange ADR-066 (L2 v1) `accepted` and **built `0.0.45`** (#166, 2026-10-18), serving on the dev harness L1; the root-of-record serves `0.0.44` and its stored report still reads `v0-proposed` | `Exchange.aDNA/STATE.md:76,161` (disk read, not a live fetch) |
| Docs population | `[D]` on `vitrine/design`: 118/118, 0 hash changes, 0 tranche moves. **On `main` (`cbca256`)**: 120 rows (+`/community/proposals/aep-3`, +`aep-4`), `/changelog` hash changed → the greedy pack moves **82** routes and makes **14** tranches (12 frozen); T01 unchanged (14 routes · 79,595 B) | `derive_docs_population.py` on both trees (stdout; frozen manifest untouched) |
| `main` vs `vitrine/design` | `[D]` `main` is not an ancestor of `vitrine/design`; 11 commits on `main` not on the GARNIER tree (the v8.12 + v8.13 deploy tails) | `git merge-base --is-ancestor` · `git rev-list --count` |

---

## §1 · Claims lanes: the nineteen rows (R-185…R-203)

**The rows are authored copy that has not been published.** They sit in HAUSSMANN `claim_register.md` §28 at class `proposed`. §28.1 says a `proposed` row is re-classed "on a live fetch" only when its copy ships. This item therefore **assigns each row a lane** (the GARNIER mission whose surface would carry it) and re-measures its tense. It does not ship anything.

### §1.1 Re-measure against the live v8.13 surfaces

| Outcome | Rows | Why |
|---|---|---|
| **Re-tensed** | R-189 | split (`PASS` spec shelf / `HORIZON` standard text) → **`PASS`**. The exchange half is now in the standard's text (v2.6 §19.7, live image). The console half was never a claim about the standard's text, and it is `PASS` at the spec shelf (`spec_platform_ecosystem` v0.5 §Access points · `spec_terminal_harness_contract` v0.3). ⚠ The site's own rendering of the standard is still v2.5 (§0), so condition **C2** applies |
| **Tense unchanged; evidence pointer refreshed** | R-185 (standard v2.5 → v2.6, md5 `86385da8`) · R-186 (licence MIT re-read live, `gh api`) · R-203 (`HORIZON` confirmed by the image's candidates table; the `<level>+<profile>` mechanism itself is `PASS` in v2.6 §5.5, but the row is about the medical profile, which is not listed) |
| **Tense unchanged; ship-order condition added** | R-190 · R-192 · R-193 | true at the spec, but the live registry cards say `planned` → condition **C1** |
| **Tense unchanged; peer record moved** | R-196 | `[R]` L2 v1 is built and runs on the dev harness, not on the root-of-record. `TAUGHT-AS-DESIGN` holds for the public face, but "designed" now understates the state. Wording candidate at the shipping sitting: *"…is built and is not yet switched on where graphs are published."* Re-classed only on a live fetch → condition **C3** |
| **Unchanged** | R-187 · R-188 · R-191 · R-194 · R-195 · R-197 · R-198 · R-199 · R-200 · R-201 · R-202 | their evidence is ratified text (aDNA.aDNA ADR-065, the two specs), and nothing on a live surface contradicts it. R-199's witness is still built and inert (`[R]` Exchange STATE: checkpoints unsigned, anchor inert) |

Derived tense tally after re-measure: `PASS` 12 (one role-only) · `TAUGHT-AS-DESIGN` 4 · `HORIZON` 1 · split 2 (R-192, R-193) = **19**. The A2.3 tally was 11 · 4 · 1 · 3.

### §1.2 Lanes (proposed)

| Lane (GARNIER mission) | Rows | Why this lane |
|---|---|---|
| **P2.4 trust surfaces** ("current state and governance beside the invitation") | ¶1 R-185 · R-186 · R-187 · R-188 · ¶3 R-197 · R-198 · R-199 · R-200 · R-201 · ¶4 R-202 | Ownership, licence, the no-service boundary and the commercial-home role are governance-beside-the-invitation claims. P2.4 already owns the trust surfaces and ruling (b)'s "state the absence" question |
| **P2.3 docs review: T02** (holds `/learn/tutorials/exchange-adoption-path`, the page that already teaches the `PASS`/`TAUGHT-AS-DESIGN`/`HORIZON` vocabulary) | ¶2 R-189 · R-190 · R-191 · R-192 · R-193 · R-194 · R-195 · R-196 | The access-point paragraph is about the exchange adoption path. Its natural home is the tutorial, read in the same tranche |
| **P2.3 conditional profile row** (§2 below) | ¶4 R-203 | The profile sentence belongs with the profile page, once a route exists |

**Ship-order conditions** (each binds the sitting that would render the row):
- **C1**: the registry regeneration (DP3 item (j); `vaults.json` 2026-10-16) is **deployed before or with** any render of R-190 · R-192 · R-193. Otherwise the copy says "runs today" next to a card that says `planned`.
- **C2**: the site's spec mirror is synced to v2.6 **before or with** any render of R-189 (§5 carry 6).
- **C3**: R-196 is re-fetched at the shipping sitting. The wording candidate applies only if the live root-of-record still lacks v1.
- **C4** (already standing, §28.3): every row is re-classed on a live fetch **in the same diff** that adds it to `site/tests/gates/fixtures/claim_register.json`.
- **C5** (R2): nothing in a lane names the company until the operator says "publication". R-197 ships as a role or not at all.

**Recommendation:** accept the lanes and C1–C5 as written. Record them in §28 as an appended §28.5. Its first cell is the lane, so the register's derived counts do not move. Rows stay `proposed` until they ship.

---

## §2 · P2.3 docs-tranche re-scope

`[D]` The access-point docs already have a lane:
- `/learn/tutorials/exchange-adoption-path` is in **T02** (18,237 B);
- `/vaults/exchange` and `/vaults/terminal` are generated registry surfaces, assigned to **P3.3** (`other_routes`, Hestia's data; the template is inspected, content corrections are staged, `docs_review_scope.md`);
- the exchange and console specs are not site routes. They live in the public dev graph (`aDNA-Network/aDNA.aDNA`).

`[D]` **No profile route exists.** The image's profiles list ships empty.

`[D]` **New finding:** the population `docs_review_scope.md` describes is not the live site's. `main` carries AEP-3 + AEP-4 and a changed `/changelog`. Re-deriving on `main` repacks 82 routes into 14 tranches. Total tranche content-load becomes ≈758 kT against the frozen ≈685 kT. T01 does not change.

**Proposed (rule amendment + one new tranche):**
1. **Append, don't repack.** Routes added after the 2026-09-15 freeze go to an **append tranche** in assignment order, and the frozen T01–T12 keep their routes. This satisfies `docs_review_scope.md` ("added routes receive a named tranche before its budget is committed") without moving 82 routes and invalidating every tranche body. A changed hash on an existing route is re-read inside its own tranche, as the scope already requires.
2. **T13 (new):** `/community/proposals/aep-3` (7,733 B) + `/community/proposals/aep-4` (7,334 B). Both are `instructions_or_normative`. Content-load ≈ `ceil(15,067/4,000)` 4 + review 2 + verification 8 + transition 23 = **37 kT**, provisional (`provisional_until_T01_actual`, like T02–T12). Mission card `mission_garnier_p2_3_t13_docs_review` to be authored at the ruling, from the T12 card's shape.
3. **Conditional profile row:** when a profiles route is built (the listed-profile table rendered on the site, or a standalone profile page), it joins **T13** before T13 opens. R-203 rides with it. If no route exists when T13 opens, the row stays conditional and is carried to P2.5's re-forecast.
4. **`/changelog`:** hash changed (the 10-04 and 10-20 entries). It is re-read in its frozen tranche **T04**, with no move.
5. **Tree alignment, flagged rather than proposed here:** the P2 review must read the tree that will be published. `main`'s 11 deploy-tail commits are not on `vitrine/design`. Ruling (f) already merges the gateway into `vitrine/design`. Bringing `main` in is the same class of act and belongs to that merge (§5 step 4 of the DP3 packet), not to this item.

**Option C is unaffected:** P2.1 · P2.2 · P2.3 · T01 stay `committed_DP3_option_C_20261003`. T13's 37 kT joins the `provisional_until_T01_actual` pool, which takes the provisional tranche pool from 620 kT (T02–T12) to 657 kT (T02–T13).

---

## §3 · Registry cards: Exchange + Terminal

`[D]` Hestia wrote the rows (Home `2b65532`). The operator-gated `sync:vaults` ran under ARCADE G2 ruling R19 ("sync + build, not deployed"), so both cards are `active` in `vaults.json` (2026-10-16), with one proven first sentence each and no company name in `dist/` (DP3 item (j)).

`[D]` They are **still not deployed**: the live cards say `planned`.

**Proposed:** record the registry cards as **delivered by ARCADE and owned by Hestia**. The deploy is **not** proposed here: it stays DP3 item (j)'s own GO and never goes through prebuild. ARCADE's interest in the deploy is condition **C1** only. **Recommendation:** accept as recorded.

---

## §4 · VITRINE disposition

`[D]` `campaign_vitrine.md` is `status: proposed` (never ratified, ruled scope 2026-09-14). Its §1 brief reads: *"the Exchange, where graphs are offered, accessed and ledger-backed so that a graph you run is one you can trust."* ARCADE A2.3 (`campaign_arcade/artifacts/p2/public_face_account.md` §3) read it fragment by fragment against R-193 · R-199 · R-195:
- the sentence is present-tense about a witness that is built and inert;
- it uses the one word the honesty clause forbids ("never 'on the ledger'", `spec_graph_exchange` §4 clause 2).

GARNIER's settled preference already absorbs VITRINE's **prospective** scope "without editing its history" (`campaign_garnier/CLAUDE.md` §Standing Orders).

**Proposed:** close `campaign_vitrine` as **`superseded`**, absorbed by GARNIER (the site work) and ARCADE (the Exchange brief → R-193 · R-195 · R-199). The edit is a status flip plus one dated note under its ratification block. Its body, scope and history are not edited (SO-6/7). The branch name `vitrine/design` is a git ref, not the campaign, so it is unaffected.

*Alternative:* keep it `proposed` with only the §1 sentence dispositioned (A2.3's minimum).

**Recommendation:** close as `superseded`.

---

## §5 · Carries into the v8.14 queue (recorded; none is executed by this item)

| # | Carry | Owner | Evidence |
|---|---|---|---|
| 1 | **P5**: root-triad exception discipline ADR | aDNA.aDNA (v8.14) | `v8_13_release_ledger.md` §2b row P5 (R47) |
| 2 | **P7**: `standing_grant` + unattended-envelope ADRs | aDNA.aDNA (v8.14) | ledger §2b row P7 (R47) |
| 3 | Currency candidates: `.adna/what/ontology.md:407` "Standard v2.1" · `compliance_checker.py:4` + `adna_validate.py:2` say v2.5 · `template_home_claude.md` points at `aDNA.aDNA/CLAUDE.md` · `.adna/MANIFEST.md:127` "16 base + 8 extension" | aDNA.aDNA (v8.14) | ledger §5a item 9 |
| 4 | The dev T1 file still reads "proposed until G3" | aDNA.aDNA | `[D]` `what/docs/profiles/AGENTS.md` (grep) |
| 5 | Bare `ADR-067` (×1, "ADR-067 clause 4") in dev `what/lattices/tools/faces/upstream.json` `$comment` (ARCADE rule 3) | aDNA.aDNA | `[D]` grep line 2 |
| 6 | ⭐ **Spec-mirror sync to v2.6**: re-run `transform-content.mjs` + `split_specification.mjs` on `main`, gate-32 drift check, deploy. **And** add the step to `skill_template_release`'s deploy tail, which lacks it | aDNA.aDNA (site · skill) | §0 live fetch; the skill has no "spec mirror" step (grep 0). The deploy is its own GO |
| 7 | gate-49 container: Docker Desktop 29.8.1 bind mounts refuse Node's `fs.cpSync` (EACCES at `.vercel/output/static`); A4.2 ran on a container-native copy of the tree | **this vault's own harness**: `site/scripts/visual_regression_container.sh`, authored at HAUSSMANN P4.4b (`1816993`). **No memo** (R60b not exercised); owner lane GARNIER P4.3 regression | session `…_arcade_a4_2_fire` 03:05Z entry; `git log --follow` |

---

## §6 · ARCADE's load for DP3's P2 forecast (aDNA.aDNA ADR-016 content-load kT, executor)

| Mission | Estimate | Actual | × | Note |
|---|---:|---:|---:|---|
| A0.1 | 120 | 140 | 1.17 | +≈625 kT on three explorer subagents, on their own line |
| A1.1 | 90 | 75 | 0.83 | |
| A1.2 | 70 | 60 | 0.86 | |
| A1.3 | 60 | 55 | 0.92 | +≈88 kT on one explorer subagent |
| A1.4 | 25 | 35 | 1.40 | |
| A2.1 | 70 | 60 | 0.86 | G1 sitting total 95 (sends ≈35) |
| A2.2 | 40 | — | — | ⚠ **not recorded** (card + session carry no actual; an SO-11 gap, recorded, not reconstructed) |
| A2.3 | 60 | — | — | ⚠ **not recorded** (same) |
| A3.1 | 90 | 75 | 0.83 | |
| A3.2 | 80 | 55 | 0.69 | |
| A3.3 | 60 | 70 | 1.17 | |
| A4.1 | 150 | 145 | 0.97 | two sittings (70 + 75) |
| A4.2 | 90 | 175 | 1.94 | three sittings; under the 2× line |
| A5.1 | 50 | *(this sitting; recorded on the card at close)* | | |
| A5.2 | 60 | — | — | queued |

Derived (python, this sitting):
- **11 missions with a recorded actual: 905 estimated → 945 actual (×1.04)**;
- +≈713 kT on explorer subagents, booked on their own line per `so11_retrospective_p1`;
- two missions unrecorded (100 kT estimated);
- campaign estimate across all 15 missions: 1,115.

`[I]` For DP3's P2 forecast:
- ARCADE has **no further load on GARNIER's P2** beyond the T13 37 kT (§2) and the carries in §5. Carries 6 and 7 are site work owned by GARNIER lanes (P2.2 release fidelity · P4.3 regression), sized there.
- ARCADE's own remainder is A5.1's close plus A5.2 (≈60).

---

## §7 · What the ruling would move (and nothing else)

On ruling, Rosetta writes:
1. the §7.7 block below;
2. a ruling line under `artifacts/p1/phase_exit.md` §3 (i);
3. `claim_register.md` §28.5 (lanes + C1–C5; first cell = lane, counts re-derived unchanged);
4. `docs_review_scope.md` (the append rule + T13 + the conditional row, originals kept) and a new `mission_garnier_p2_3_t13_docs_review.md` card (`provisional_until_T01_actual`);
5. `campaign_vitrine.md` status + one dated note, if §4 is accepted;
6. a `rolling_closure_ledger.md` entry.

**Not moved:**
- DP3's status;
- any P2 mission's `budget_status` other than the new T13 card;
- `site/`;
- the stimulus;
- the registry deploy;
- any peer file.

---

## §7.7 Ratification

| Field | Value |
|---|---|
| Decision | DP3 item (i) ruled **in advance**: §1 lanes + C1–C5 · §2 append rule + T13 + conditional profile row · §3 registry cards recorded (deploy stays item (j)) · §5 carries · §6 budget — **accepted as recommended** (R61); §4 VITRINE → **closed as `superseded`** (R62); §5 carry 6, the spec-mirror sync → **carried to v8.14 / GARNIER P2.2**, nothing deployed (R63) |
| Ratified by | Stanley (operator), plan-time AskUserQuestion at ARCADE A5.1 (session `session_stanley_20261020_053954_arcade_a5_1_garnier_amendment`) |
| Date | 2026-10-20 |
| Status | accepted — DP3 itself stays `pending` on the three P1.3 reader records |
