---
type: session
session_id: session_stanley_20260819_165937_haussmann_p2_6_midscore
user: stanley
started: 2026-08-19T23:59:37Z
status: completed
completed: 2026-08-20T01:05:00Z
intent: "HAUSSMANN P2.6 session 1 — O0 evidence refresh · O0c-a synthetic cold-read re-test · O1 two-scorer re-score (D3 WITHHELD) · O2 author p2_replan.md → halt at ⛩ DP6 · O3a gate re-baseline · O3b III cycle 166"
campaign: campaign_haussmann
mission: mission_haussmann_p2_6_midscore
tier: 1
executor_tier: fable
token_budget_estimated: "~200–280 kT (session 1 of 2; mission total ~300–450 kT per ADR-016/SO#11)"
token_budget_actual: "~95 kT main-loop content-load (est. ~200–280). Under — but the delegated work is the reason and it is large: 2 scorers + 3 cold readers ran as subagents at ~1.05 M subagent tokens, which never enter this context. SO#11's mission figure and the main-loop figure are different quantities; flagged for the AAR."
files_modified: []
files_created: []
last_edited_by: agent_rosetta
tags: [session, haussmann, p2_6, rescore, replan]
---

# Session — HAUSSMANN P2.6 (session 1 of 2)

## Operator rulings taken before work began

1. **Proceed to DP6 with D3 held.** O0b (the clean-machine TTFS run) is a hard human gate — fresh macOS
   Standard account + an unassisted non-builder runner, no agent path. Rather than stall the campaign,
   this session runs everything agent-executable and scores **D3 as WITHHELD** — explicitly *not*
   re-scored provisionally a second time. O0b + the transcript fold + final D3 land in session 2.
2. **Score on instrument v1.0.** Five anchor defects were filed for a v1.1 that never happened; changing
   the instrument mid-series would destroy the comparability that is the point of a delta. The v1.1
   fixes route into the re-plan, ahead of P5.2's full re-score.

## Plan for this session

| Obj | Work | Gate |
|-----|------|------|
| O0 | Evidence refresh — T0 captures of changed surfaces · claim-register re-verify + 3 hygiene fixes · machine-eye delta · pin the pack | — |
| O0c-a | Synthetic cold-read re-test of the new funnel (3 personas, `[D-syn]`) | — |
| O1 | Author the missing isolation protocol · two fresh-context scorers · reconciliation vs 51.6 | — |
| O2 | `p2_replan.md` at `status: proposed` | ⛩ **DP6 — hard stop** |
| O3a | Gate re-baseline + record-mismatch closure | — |
| O3b | III cycle 166 | — |

**Deferred to session 2**: O0b (operator run) · O0c-b (transcript fold, variant B) · D3 final score ·
III cycle 167 · mission AAR.

## Recon findings carried in (from planning)

- The **scorer isolation protocol exists nowhere as a file** — reconstructable only from Δ2 +
  three baseline frontmatter disclosures. Authoring it is an O1 precondition.
- The baseline's "sheets committed pre-reconciliation" is **asserted but not demonstrable** — git shows
  all three landing in one commit `df3827c`. Make it checkable this time.
- **III cycle 166 has never been written.** Last record is cycle 165 (2026-06-10, ~10 weeks); zero III
  records for the entire HAUSSMANN campaign despite ADR-057 requiring every measurement event to log.
- **Charter is 15 tests stale** (reads 472; P2.5 closed at 487) · `claim_trace_manifest.json` predates
  P2.4 and P2.5 · **ADR-057 reads `status: proposed`** while the charter's ratified §7.7 says the
  measurement regime was "adopted with the charter".
- Claim register hygiene: **R-111 has no table row** · §7.4 totals 6 rows stale · R-118/R-119 still
  point at the retired objective id "P2.5 O2".
- `scripts/crawl_haussmann_b1.mjs` (the production inventory crawler) is **gone** — run from a scratchpad
  at genesis. Routed to the re-plan, not rebuilt here.
- `lighthouse_profiles.json` is **not mirrored** into `how/federation/webforge/`, so campaign convention 4
  ("read gate bars from it, never transcribe") is currently unsatisfiable from inside this vault.

## Progress

### ✅ O0 — evidence refresh (`3b8e90d`)

156 T0 captures (13 surfaces × 6 viewports × 2 themes) against production, all 200, **axe 0 in both
themes** (two runs — `--axe` covers `themes[0]` only). Raw PNGs gitignored per the baseline's own
discipline; report + findings committed. 27 stranded curated PNGs from prior missions committed — 18 were
**cited evidence not in the repo**.

- **F19** (S3) — P2.3 traded a 74,067 px spec page for a **fourth thin hub**: `/reference/specification`
  ships `h2=0`, bodyLen 1,504, thinner than two of F13's three. F13's others moved +29/+29/+12,
  consistent with P2.3's date line, not content. Instance count 3 → 4, one created by Decade-1 work.
- **F20** (S3) — `JetBrains Mono Variable` **fails to load on every page** (console `error`;
  `font-display: optional` so no visual regression claimed). Larger half: **no gate watches the console.**
- **D10 delta attributed** — `Organization` + `sameAs` already shipped at **P1.2**, uncredited. P3.2 shrinks.
- **R-111 registered** (S2) — assigned an id at P1.2 §7.5 item 10, **never given a row**, and the fix
  never shipped: `/canonical-properties` files the Wilhelm Foundation as "not ours" with zero operator-
  affiliation disclosure. An absence, so no grep finds it; not an identifier, so same-diff is blind.
- Two measurement artifacts recorded **against ourselves**: `grep -c` counts lines not occurrences on
  served HTML (it manufactured two false regressions), and a typed derived count went stale inside its
  own commit — twice.

### ✅ O0c-a — cold-read re-test (`c9e8300`)

Three fresh-context readers, repo-barred, live HTTP only. **All three converged unprompted on the same
one-sentence answer** and named the same sentence as the site's best — at genesis they did not converge.
All three praised the honesty strata; the clinician named **the P2.5 labelled gap itself** as
trust-building, which is worth knowing before O0c-b fills it.

Five findings survived re-verification → **R-120…R-124**: the homepage contradicting itself in
consecutive sentences (S2, 30-second zone); an invented "Before and after" anecdote (S3, recorded as
*weaker* than R-118); the "Contribute on GitHub" CTA pointing at the repo with CONTRIBUTING/CoC **404**
while both are 200 in the other repo (S2); **that other repo being unlicensed** while the badge reads MIT
(S2, legal edge); and zero clinical/regulatory posture on `/privacy` + `/security` while `/` says *rare*
×15 (S3). Held back deliberately: *"Lattice Protocol"* is in the hero and defined nowhere — **the counsel
embargo forbids defining it**, so the live question is whether the hero should name it, which is a
decision for DP6.

### ✅ O3a — gate re-baseline (`314e541`)

**487 passed**, exit 0, 33 spec files, `@audit` included — derived from the run. Matches P2.5's close, so
no gate was added or lost. `claim_trace_manifest.json`'s mtime staleness was **unfounded on the route
axis**: all 10 `rendered_on` routes 200, gate-20 green inside the 487.

**The re-baseline's real finding: 487 green while 8 claim rows are open, and not one is caught.** Prose
contradictions and invented anecdotes are not identifiers; R-111 is an absence; R-122/R-123 are off-site
(no gate probes the repos the primary CTA points at); F20 needs a console watch that does not exist.
Three are cheaply automatable → re-plan.

Record mismatches: charter splash 472 → **487**; charter line 25 (`460→472`) **left alone — dated history,
correct as history**; DP table `P2.4 pick` **struck as superseded** (it showed an AWAITING gate that fired
the same day; struck not deleted, SO-6); **ADR-057 staged, not fixed** — it reads `status: proposed` while
its own Status section says "ratified with the charter at Gate C" and the operator-signed §7.7 says
"adopted with the charter". Flipping it is the operator's act.

### ✅ O2 prep — Decade-2 premise audit (`9deab65`)

Probed all twelve provisional missions' stated premises against production. **Two DEAD** (P3.1's "29 old
links" — zero internal `.md` links remain; P3.2's "no Organization JSON-LD" — shipped at P1.2), both
shrinking scope. **Two STRENGTHENED** (P4.2's thin hubs, now four; P4.4 — `lighthouse_profiles.json`
exists **nowhere in this vault**, so campaign convention 4 is currently unfollowable and every gate-19 bar
is transcribed, which is what it forbids).

Real output is a **scheduling problem**: five new rows have no Decade-2 owner, and the nearest owner for
the copy defects is P4.5, which runs **last** by sequencing rule — while R-120 is an S2 in the homepage's
30-second zone.

### ⏳ O1 — two-scorer re-score

Both scorers hit the **fable session limit** on first spawn (5 and 2 tool uses). Operator ruled: **wait
for the 18:10 reset and resume at fable**, not substitute opus — the baseline's reviewer B ran Fable 5,
and tier is the one variable that would contaminate the delta. Per pattern §2.6 hazard 9, **resumed the
same two subagents rather than respawning**. Isolation protocol authored first (`e1339bf`) — it had
existed nowhere as a file. Pack pinned at `c9e8300`.

## SITREP

**Completed** — O0 · O0c-a · O1 · O2 (authored) · O3a · O3b. Eleven commits, `3b8e90d`..(this).
**Zero `site/` changes**, verified by diff across the whole set.

**In progress / handed off** — **O0b** is the only blocker and it is operator-gated: a fresh macOS
Standard account plus a runner who did not build the system, unassisted. Everything downstream of it
(O0c-b's transcript fold, D3's score, R-34/R-63's verdict, the 12-dimension composite, cycle 167) is
session-2 work.

**Next up** — ⛩ **DP6**: ratify `artifacts/p2_6/p2_replan.md`. Eight `⊳` sub-decisions are drafted with
recommendations; **D-A** is the consequential one and **D-D** is flagged `#needs-human` on legal grounds.

**Blockers** — none technical. Two operator gates: DP6 (a decision) and O0b (a machine act).

**Files touched** — created: `artifacts/p2_6/{scorer_isolation_protocol,gate_rebaseline,decade2_premise_audit,p2_replan}.md` ·
`evidence/scoring/{scoresheet_A_p2_6,scoresheet_B_p2_6,reconciliation_p2_6}.md` ·
`evidence/captures_p2_6/` (report + findings; 156 PNGs gitignored) ·
`evidence/coldreads/*_p2_6.md` + synthesis · `evidence/machine_eye/machine_eye_delta_p2_6.md` ·
`what/measurement/iii_results/2026-08/cycle_166_haussmann_p2_6_midscore.json`.
Modified: `evidence/claims/claim_register.md` (§8, six new rows) · `campaign_haussmann.md` (splash count,
DP row struck) · `evidence/.gitignore` · the P2.6 mission file. Committed 27 stranded curated captures,
**18 of which were cited by markdown and absent from the repo**.

**Token budget actual** — ~95 kT content-load for this session, against ~200–280 kT estimated. Under, and
the reason is legible: two scorers and three cold readers ran as subagents, so their ~1.05 M subagent
tokens do not land in this context. The mission-level estimate should be read as *including* delegated
work; SO#11's figure and the main-loop figure are not the same quantity, which is worth stating in the AAR.

**Not done, deliberately** — no push. Outward acts are operator-gated (campaign CLAUDE.md §3); eleven
commits sit local on `main`.

---

## Next Session Prompt

Open `how/campaigns/campaign_haussmann/missions/mission_haussmann_p2_6_midscore.md` and
`artifacts/p2_6/p2_replan.md`. **P2.6 session 1 is complete**: the re-score landed at **55.6 of 88 →
63.2/100** on eleven dimensions (baseline recomputed on the same eleven: 50.5), **D3 withheld** pending
the clean-machine TTFS run, and the Decade-2 re-plan sits at `status: proposed` awaiting **⛩ DP6**.

Two operator gates are open and they are independent. **DP6** is a decision — read `p2_replan.md` §3's
eight `⊳` sub-decisions; **D-A** (an S2 homepage self-contradiction whose only owner, P4.5, runs last)
and **D-D** (`aDNA-Network/aDNA.aDNA` is unlicensed while receiving contributor PRs — `#needs-human`) are
the two that matter most. **O0b** is a machine act: execute `artifacts/p2_5/ttfs_runbook_fresh_account.md`
on a fresh macOS Standard account with a runner who did not build the site.

If DP6 is ratified: apply the `⊳` rulings in place, stamp the §7.7 block, flip the five P3 missions to
`queued`, write the ruled budgets/tiers into their frontmatter, set `calibrated_sessions: "35-40"`, and
author **P3.5 first** (the new order — D9 is the only dimension nine missions never moved).

If O0b has run: write the run record (number **with conditions attached, never bare**; friction log —
**empty means suspect, not excellent**; scrubbed transcript), rule R-34/R-63 (supports · revised down at
`get-started.astro:34` + `network.astro:153` · or "did not complete", which is a result), fold the
transcript into `get-started.astro:112–124` **and update `deploy_probe_p2_5.mjs:182` in the same commit**
(it currently asserts the gap is labelled — ADR-057 same-diff), then score D3 and publish the first
12-dimension composite. Then III cycle 167 and the mission AAR.

Eleven commits are **local and unpushed** — pushing is an operator-gated outward act.
