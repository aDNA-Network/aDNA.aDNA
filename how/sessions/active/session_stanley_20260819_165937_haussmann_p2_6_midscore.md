---
type: session
session_id: session_stanley_20260819_165937_haussmann_p2_6_midscore
user: stanley
started: 2026-08-19T23:59:37Z
status: active
intent: "HAUSSMANN P2.6 session 1 — O0 evidence refresh · O0c-a synthetic cold-read re-test · O1 two-scorer re-score (D3 WITHHELD) · O2 author p2_replan.md → halt at ⛩ DP6 · O3a gate re-baseline · O3b III cycle 166"
campaign: campaign_haussmann
mission: mission_haussmann_p2_6_midscore
tier: 1
executor_tier: fable
token_budget_estimated: "~200–280 kT (session 1 of 2; mission total ~300–450 kT per ADR-016/SO#11)"
token_budget_actual:
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

*(at close)*
