---
type: session
session_id: session_stanley_20260904_233911_haussmann_gate_rulings
created: 2026-09-04   # stamped `date -u` (23:39:11 UTC) — never local (GR-4's open finding: a local stamp files a session sorting before ones that already happened)
updated: 2026-09-04
status: completed   # ⛩ CLOSED at the 2026-09-05 session open. ~~active~~ (SO-6) — the file was left in `active/` with `status: active` while every one of its deliverables was committed at `3889c29`, and its own §Next Session Prompt hands off to a *later* sitting, so it was finished by its own account. ⭐ **GR-4 O1's finding, second sighting: a finished session left in `active/` is a lease nobody is holding** — and this instance is sharper, because the file's §Concurrency block is *itself* the Single-Writer Lease mechanism, so a cold agent reading `active/` saw TWO apparent live peers and neither was.
tier: 2               # Tier-2, not Tier-1: a PEER SESSION IS LIVE and this one declares scope against it (see §Concurrency)
campaign: campaign_haussmann
mission: multiple — P5.1 (O0 currency) · P3.3 (⛩ ruling 4) · R-111 · P4.4 AC2 owed item
objective: "Phase A — the four ⛩ rulings taken at the 2026-09-04 planning gate, authoring limbs only"
executor_tier: opus
last_edited_by: agent_rosetta
token_budget_estimated: "~60–90 kT — authoring only. No builds, no suite runs, no deploys (see §Concurrency). The build limbs of rulings 1 and 3 are deferred to Phase C by the operator's window ruling."
token_budget_actual: "~85–110 kT, **RECONSTRUCTED at the 2026-09-05 open and LABELLED as reconstructed** — the field was empty when the file was left in `active/`, so this is an estimate from the artifacts it produced (four rulings written into two mission files + the charter + STATE, four findings, and `artifacts/course_deploy/c1_c2_design.md` at 11 kB), never a reading. Against the ratified ~60–90 kT that is ~1.2× at the top edge — **inside SO#11's 2× threshold, so no retrospective triggers.** ⚠ The finding is not the number: **a band cannot be falsified by a prose sentence claiming it holds** (P4.3's), and this is the **fourth** consecutive P4.3-class instance of an actual reconstructed rather than recorded."
tags: [session, haussmann, gate_rulings, p5_1, p3_3, r_111, speed_insights]
---

# Phase A — the four ⛩ rulings, authoring limbs

## ⛔ CONCURRENCY — a peer session is LIVE and this file declares scope against it

`how/sessions/active/session_stanley_20260904_230810_haussmann_gr_5_o1.md` is **`active`** and owns a
**running measurement**: `site/scripts/flake_rate_measure.mjs`, n=100 per family, started
`2026-09-04T23:17:18Z`, strictly sequential by design.

⛩ **Operator ruling (2026-09-04): protect the run — authoring only.** `F-ab`'s entire thesis is that
the affected gates are *bets on how busy the machine is*, and the harness records `load1` before and
after every run. **Any build, suite run or deploy started in this window becomes a confound inside
the measurement designed to test that exact variable.**

| | |
|---|---|
| **Peer session's declared files** | `artifacts/gr_5/*`, `site/scripts/flake_rate_measure.mjs`, `site/tests/gates/*` |
| **This session's declared files** | `artifacts/p5_1/panel_kit_v2.md` · `missions/mission_haussmann_p3_3_mcp_server.md` · `how/backlog/idea_*` · `artifacts/r111/*` · `artifacts/p4_4/*` (Speed Insights draft) |
| **Overlap** | **none** — verified by enumeration, not assumed |
| **Forbidden here** | `npx astro build` · any `playwright test` · `deploy_adna.sh` · anything that spawns a browser |

## Derived at open (convention 19 + convention 12 — never carried)

| Fact | Value | Command |
|---|---|---|
| UTC | **2026-09-04 23:39:11** | `date -u` |
| HEAD | **`cc53f7b`** | `git log -1` |
| Production stamp | **`2a72efe`**, built 2026-09-04T16:08:57Z, `mode=prod` | `curl /.well-known/adna-build.json` |
| `/learn/course/` | **404** | `curl -o /dev/null -w %{http_code}` |
| Commits above prod touching `site/` | **4**; of those **rendering: 1** (`b2e943b`) | `git log --oneline 2a72efe..HEAD -- site/` + `--stat` |
| ADRs at `status: proposed` | **0** — `adr_043` + `adr_057` are grep false positives, both `accepted` at the frontmatter | `grep` then **opened both files** |
| O1 run progress at open | `g39` ✅ · `g47` 96/100 · `g42b` not started | `tail o1_rate_run.log` |

## ⛩ The four rulings taken at the planning gate (operator, 2026-09-04)

| # | Ruling | Limb here |
|---|---|---|
| Window | Protect the O1 run — authoring only | governs all of Phase A |
| **1** | **Speed Insights — GO, enable now** | draft the increment; **build in Phase C** |
| **2** | **P5.1 recruitment — GO, start now** | **currency check + handoff** — see FINDING 1 |
| **3** | **`/learn/course/` (`b2e943b`) — deploy GO**, ships before the panel | **build + deploy in Phase C** |
| **4** | **P3.3's npm gate — RETIRED, not convened** | executed here in full |

---

## ⭐⭐ FINDING 1 — P5.1's O0 WAS ALREADY COMPLETE, AND THE PLAN WOULD HAVE RE-AUTHORED IT

The approved plan's Phase A item 2 read *"Author P5.1's O0 recruitment brief."* **It exists**, and so
does the rest of O0 `[D]`:

| Artifact | Bytes | Status |
|---|---|---|
| `artifacts/p5_1/recruitment_brief.md` | 5,746 | `ready_for_operator`, 2026-08-26 |
| `artifacts/p5_1/panel_kit_v2.md` | 10,721 | 2026-08-26 |
| `artifacts/p5_1/contribution_run_protocol.md` | 9,448 | 2026-08-26 |
| `artifacts/p5_1/ttfs_run_record.md` | 11,001 | 2026-08-26 |
| `artifacts/p5_1/ac_amendment_proposal.md` | 25,748 | `accepted` |

⇒ **The campaign's own *index-vs-artifact* class, arriving inside the plan written to continue the
campaign.** The mission's `status:` says O0 is authorized and O1–O3 need the operator; it does **not**
say O0 already ran, so a plan built from the status field alone concludes the brief must be written.
**Caught by opening the directory, not by reading anything** — which is the only way this class is
ever found, and the fourth time this campaign has recorded exactly that.

⇒ Ruling 2's limb is therefore **a currency check and a handoff**, not authoring. That check
immediately found FINDING 2.

## ⭐⭐ FINDING 2 — THE PANEL KIT'S SCORING KEY CARRIES THE ABSOLUTE THAT R-97 WAS RATIFIED TO REMOVE

`panel_kit_v2.md:96` states Q3's correct-answer referent as:

> **Q3** | **Not a product or service** — no server, no signup, **nothing leaves your machine.**

**That NOT-line is struck.** Verified at the object `[D 2026-09-04]`:

| Surface | Reading |
|---|---|
| `adr_048:71` | the DP2 NOT-line is **`~~struck~~`**; *"the operative NOT-line is now…"* |
| `adr_048:150` | Amendment ratification block — *"…no server, no signup; **aDNA itself sends nothing**"*, **Status: accepted**, ⛩ R-97 signature, 2026-09-04 |
| live `/index.md` twin | *"Not a product or service — no server, no signup; aDNA itself sends nothing."* |
| live `/` count, `"nothing leaves your machine"` | **×0** |
| live `/` count, `"itself sends nothing"` | **×1** |

⚠ **The kit is not naive about ADR-vs-live drift — it has a whole section on it, and that is exactly
why this slipped.** §4's trap-note anticipates *wording* divergence and rules *"scorers score
substance, never wording"*, closing with a verification: *"Verified at the live twin 2026-08-26 `[D]`:
the substance is unchanged — same category noun, same mechanism, same audience sub, **same
NOT-line**."*

⇒ **R-97 changed the one thing that section certified as unchanged, nine days after it was certified.**
And it changed it in **substance, not wording**: *"nothing leaves your machine"* is an **unscoped
absolute** whose falsifying case is a vault pushed to a remote; *"aDNA itself sends nothing"* scopes
the promise to the tool. The kit's own escape hatch — *score substance, not wording* — **does not
save it**, because the substance is what moved.

⭐ **The failure mode is specific and it favours the site.** A panellist reading the live hero says
*"the thing itself doesn't send anything"* — correct. A sharper one says *"…though if I push my vault
to GitHub, that obviously leaves my machine"* — which is **the exact reasoning R-97 was ratified to
accommodate**, and against the stale key it reads as a reader who *failed* to absorb the NOT-line.
⇒ **the retired over-promise would have been scored as the correct answer, in the panel whose stated
purpose is retro-validating ADR-048.**

⛔ **Stated as a limit, not smuggled:** `recruitment_brief.md` and the other three O0 artifacts were
swept for the same string and are **clean** — the stale referent is in `panel_kit_v2.md` alone.

## ⭐⭐ FINDING 3 — `R-111` IS AN OPEN S2 ON `P5.2`'s CRITICAL PATH, AND ITS ROW NAMES A SURFACE THAT CANNOT CARRY IT

**Two separate findings, and the second was only reachable by opening the page.**

**(a) It is open, and nothing schedules it.** Verified at the row, not at a summary:
`claim_register.md:614` reads **`gap → open`**, **S2**, and **§14.3** — the register's most recent
*full* open-by-disposition list (after P3.3) — still carries it. §§15–22 add no strike. Meanwhile
`P5.2`'s acceptance criteria require *"every S1/S2 in the finding register **closed + verified**"*,
and **`R-111` appears nowhere in DP6's ratified execution order.** ⇒ an S2 blocker on the campaign's
capstone with **no owner and no gate**. *(P4.5a was scoped to close it and closed the `/about` half
only — §9.7 narrowed the live scope rather than discharging it.)*

**(b) ⭐⭐ The narrowed surface is the wrong one.** §9.7 narrowed R-111 to **`/canonical-properties`
alone**. Opened `[D] 2026-09-04`:

| Probe | Reading |
|---|---|
| the page's own purpose comment (`:6`) | *"HAUSSMANN P1.2 — the §7.1 **clone-site defense**, rendered."* |
| what it renders | canonical domains · orgs · repos · machine-surfaces · retired, each probed logged-out with a date |
| `grep -n Wilhelm canonical-properties/index.astro` | **0** |
| where *"What is not ours"* actually lives | **`state-of-the-network/index.astro:149`** |
| where the operator's Foundation role is stated | **`about.astro:68`** — *"Head of AI, Wilhelm Foundation"* |

⇒ **`/canonical-properties` makes no related-party claim to disclose against.** R-111's remedy —
*a disclosure connecting the operator's Foundation role to the Rare Archive being filed as
independent* — belongs where **the "filed as independent" claim is made**, and that is
`/state-of-the-network` §`not-ours`, paired with `/about`. Executed as written, a mission would author
a governance disclosure onto **a list of domains**, where no reader asking the question would look.

⭐ **The class is the campaign's own, and note which half survived**: the register's *reasoning* has
been right since P1.2 — *a reader comparing the two pages finds the conflict the site itself supplied*
— and its *surface* has been wrong the whole time, including through the one narrowing pass that
touched it. **§9.7 re-derived the row's SCOPE and never re-opened the page**, which is *"re-reading a
row at the object means re-deriving its question, never re-running its command"* (A3's finding)
arriving one level over: here the question was re-derived and **the surface was inherited**.

⛔ **NOT DRAFTED HERE, and the restraint is the point.** R-111 bears on **D7**, the campaign's binding
constraint, and authoring a related-party disclosure is a **positioning decision, not a mechanical
fix** — the identical reasoning that routed `R-124` to an operator gate rather than to a copy edit
(*"routing it requires authoring a clinical posture, which is a positioning decision nobody has
taken"*). Unforced widening at a sitting's tail is this campaign's most-repeated defect. ⇒ **surfaced
with its scope question stated; it needs a ⛩ gate before a word is written.**

## FINDING 4 — the line owed at P5.1's open is ALREADY WRITTEN, and it is the operator's, not an agent's

The campaign governance file lists *"⛩ one line owed at P5.1's open on the `AC-3 → AC-2` ordering"*
as outstanding. **`AMENDMENT 2` at `mission_haussmann_p5_1_human_evidence.md:101` already carries it
in full** — the falsified antecedent, the deliberate refusal to reorder unilaterally, and the two
options **(a)** release the ordering / **(b)** retain it for a different stated reason. ⇒ nothing is
owed from this desk; **one operator ruling is owed**, and ruling 2 (start recruitment) makes it live
*now*, because it decides whether AC-2 and AC-3 can be scheduled in parallel.

## Files touched

| File | Change |
|---|---|
| `artifacts/p5_1/panel_kit_v2.md` | Q3 referent amended to R-97's scoped NOT-line; §4's *"same NOT-line"* struck (SO-6); new §AMENDMENT block with the failure mode, the scope sweep, and the scorer instruction |
| `missions/mission_haussmann_p3_3_mcp_server.md` | `in_progress` → **`completed`**; O2 gate **retired** with its reasoning on its face; O2 objective row struck-not-deleted; **AAR filed (SO#5)** |
| `how/backlog/idea_publish_adna_mcp_server.md` | **new** — the npm publish, credential provision named as its precondition; the four deferred surfaces; the ADR-056 clause-5 consequence |
| `artifacts/course_deploy/c1_c2_design.md` | **new** — C1 (the `/privacy` storage sentence) + C2 (gate coverage) designed, `gate-55` specified with its red-proof and its stated limit; Phase C order |
| `how/sessions/active/session_…_gate_rulings.md` | this file |

⛔ **Zero `site/` bytes changed.** Every build limb is deferred to Phase C by the ⛩ window ruling.

## SITREP

**Completed.** Ruling 4 in full (P3.3 closed, gate retired, AAR, backlog). Ruling 2's real limb —
a currency check that found FINDING 2 and repaired it. Rulings 1 and 3 designed and costed, unbuilt.
Four findings, two of them defects in `ready_for_operator` or `completed` artifacts.

**In progress.** `GR-5` O1's n=100 run, owned by the peer session — `g39` ✅ · `g47` ✅ 100/100 ·
`g42b` ~7/100 at ~55 s/run ⇒ **~85 min remaining**. O2 and O3 consume the same instrument and are a
strict chain.

**Next up.** Phase B (`GR-5` O2 → O3 → close) when the run lands, then Phase C (the one commit:
`/privacy` + `gate-55` + `gate-4`/`gate-17` route additions + the course, then ⛩ push, ⛩ deploy).

**Blockers.** All human: P5.1's recruitment (5 cold readers · fresh macOS account · operator as
outsider) · the `AC-3 → AC-2` ordering ruling (FINDING 4) · a ⛩ scope gate for `R-111` (FINDING 3) ·
Speed Insights' dashboard enable.

### Next Session Prompt

> Open `how/campaigns/campaign_haussmann/CLAUDE.md`, `missions/mission_haussmann_gr_5_flaky_gates.md`
> and `artifacts/gr_5/o1_rate_record.md`. **Check whether the n=100 run finished** —
> `tail artifacts/gr_5/o1_rate_run.log`; results append **below** the `## Results` marker and nothing
> above it is rewritten (SO-6). If it landed, record the three rates with **n and per-run wall-clock
> on the report's face** and an explicit **INCONCLUSIVE** verdict wherever the Wilson interval spans
> `[40%, 60%]`, then run **O2** (the `reducedMotion` discrimination — two arms, equal n, one variable,
> via `--config-override`; ⛔ a refutation is a complete result and `AC-4` reports **INAPPLICABLE**,
> never a blank), then **O3** (the ⛩-ruled CI re-derivation of `gate-39`'s `worstPx`, strictly after
> O1, with the signed fallback rider; ⛔ **never 7.9 → 7.4**). Phase C is a separate sitting and a
> separate ⛩ pair of GOs: build the `/privacy` + `gate-55` + route-coverage + course commit per
> `artifacts/course_deploy/c1_c2_design.md`, then push, then deploy. Derive `main`'s CI status at open
> (convention 19) and re-probe prod's stamp — it was `2a72efe` at this session's close.
