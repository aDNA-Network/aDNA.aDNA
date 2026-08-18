---
type: session
session_id: session_stanley_20260818_125835_haussmann_p1_2_state_of_network
created: 2026-08-18
updated: 2026-08-18
status: completed
tier: 1
agent: agent_rosetta
operator: stanley
campaign: campaign_haussmann
mission: mission_haussmann_p1_2_state_of_network
phase: P1
executor_tier: fable
token_budget_estimated: "~200–300 kT (mission declaration); hostile-read scoped explicitly this time per P1.1 AAR follow-up 4"
token_budget_actual: "~430 kT (est. 200–300 kT). Overrun is the adversarial pass — two independent reviews returned 24 + 5 findings and forced 11 claim corrections. The mission's remaining ranker debt was discharged in the successor close session (session_stanley_20260818_143557_haussmann_p1_2_close)."
last_edited_by: agent_rosetta
tags: [session, haussmann, p1, disclosure, trust]
---

# Session — HAUSSMANN P1.2 · State of the network

## Intent

Execute `mission_haussmann_p1_2_state_of_network.md` — the campaign's signature editorial move
(instrument §8.3): make the operator-federation fact the site's stated differentiator rather than its
principal vulnerability. Ship a dated four-strata disclosure surface, the §7.1 canonical-properties
defense, named humans with a recorded consent basis, and the Berthier hero proof-of-life re-placement.

Plan of record: `~/.claude/plans/please-read-teh-claude-md-sprightly-peacock.md` (operator-approved
2026-08-18).

## Startup checklist (vault protocol)

- [x] CLAUDE.md + campaign CLAUDE.md loaded; activation gate satisfied (charter `active`, DP1 ratified)
- [x] STATE.md read — P1.1 closed + deployed `0f7cca0`; P1.2 is the last open P1 mission
- [x] `how/sessions/active/` — empty, no conflicting session
- [x] `how/campaigns/` + `how/missions/` — `campaign_haussmann` active, P1.2 `queued`
- [x] Evidence re-verified on disk at execution time (convention 12, recon-at-execution)
- [x] Session file created before any project-file modification

## Scope declaration

**Writes**: `how/campaigns/campaign_haussmann/artifacts/p1_2/` · `site/src/` · `site/tests/gates/` ·
`what/decisions/` · `who/coordination/` (staged memos) · `evidence/claims/claim_register.md` · STATE.md at close.

**Never** (campaign law): `site/src/data/vaults.json` · `npm run sync:vaults` (pt19, Hestia-owned) ·
the parallel-lane uncommitted artifacts (`artifacts/quality_instrument_binding.md` and siblings — that
lane's to land, per P1.1's precedent).

## O1 consent record — RESOLVED IN ADVANCE (operator, in-chat `AskUserQuestion`, 2026-08-18)

The mission halts at O1 for consent. The operator answered all six rulings during plan approval, so O1
is satisfied before O0 begins. Full record: `artifacts/p1_2/consent_record.md`.

## Activity log

- **2026-08-18 12:58** — Session opened. Tasks 1–5 created (O0 · O2a · O2b · O2c · O3).
- **13:02 — O0 closed** (`462ac2e`). Three artifacts: `consent_record.md` (six operator rulings,
  verbatim), `surface_design.md`, `copy_draft.md` (register row per block). Counts re-derived on
  disk at execution time per convention 12.
- **13:12 — O2a closed** (`099e557`). Canonical identity single-source. 13 dead-domain fallbacks →
  `SITE_ORIGIN`; `PUBLISHER_URL` off the GitHub repo; `og:site_name` reconciled; `sameAs` created;
  publisher attached to the two builders that emitted none. **Unplanned correctness call:** first cut
  put every repo in `sameAs`, which turned gate-14 red across all 203 pages — narrowed to org-level
  identities (see AAR finding 2). gate-14's stale "(404)" rationale corrected, rule kept.
- **13:29 — O2b+O2c closed** (`9e0fd06`), landed together: the two pages cross-reference, so
  splitting would have shipped a knowingly-dead internal link. Both surfaces, the shared
  `network_state.ts`, home hero re-placement + manifesto reframe + registry disclosure, `/about`
  band 1 and band 4, 8 gate specs, 2 fixtures, both llms endpoints. Suite **407 → 441 green**.
- **13:26 — 4/4 red proofs** before commit: undeclared clone link caught · declared repo vanishing
  caught · retired domain rendered as a link caught · property list drifting from install truth
  throws at build.
- **13:40 — O3 evidence.** T0 captures 4 surfaces × 6 viewports × dark+light (`--axe` run twice,
  once per theme, since it covers `themes[0]` only): **axe 0 on all four, both themes**, zero console
  errors. 320px reflow verified by eye. **Every external property re-probed logged-out: 13/13 match
  what the page claims.** The `rare-archive` sole-contributor claim independently re-verified against
  the GitHub contributors API (one contributor, `ScienceStanley`). **R-58 confirmed byte-intact** in
  the built output. Claim register §7 addendum appended (13 new rows; adjudicated 97 → 110; zero
  FALSE, zero unsupported). Title-alignment memo staged.
- **Concurrency note `[D]`:** a parallel lane committed `ab841c2` into this same tree mid-session
  (the known shared-tree hazard). No divergence — 8 ahead, 0 behind origin. Explicit-path staging
  used throughout; never `git add -A`.

## SITREP

### Completed

**All five acceptance criteria met.** Five commits: `462ac2e` (O0) · `099e557` (O2a) · `9e0fd06`
(O2b+O2c) · `850e5c4` (O3 evidence) · `20bd35b` (320px separator fix).

| # | Criterion | Landed as |
|---|---|---|
| 1 | Dated state-of-network surface, in line of sight from home | `/state-of-the-network/` (4 strata, 3 file-sourced dates) **+ the disclosure sentence in the fold**, not a link to it |
| 2 | "The proof" framing replaced by supportable claims | `/about` band 4 rebuilt with a per-row check-state; R-62 closed in the register |
| 3 | Named humans with consent | Stanley Bishop + 3 affiliations + one outbound link; Cederroths kept on a recorded public-record basis |
| 4 | Canonical-properties page, footer-linked, identity coherent | `/canonical-properties/` + `og:site_name` fixed + `sameAs` created + `PUBLISHER_URL` corrected + 13 dead-domain fallbacks removed |
| 5 | Hero proof-of-life placement + manifesto reframe | `.hero-proof` moved above `.trust-strip`; reframe added as a sibling paragraph under the protected lyric |

**Verification:** suite **407 → 441 green, zero xfail** · axe **0 on 4 surfaces × both themes** ·
**13/13 external properties re-probed logged-out and matching** · the rare-archive sole-contributor
claim re-verified against the GitHub API · **R-58 byte-intact** · 4/4 new gates red-proven · claim
register 97 → 110 adjudicated, zero FALSE, zero unsupported.

### The two reviews — and the remediation they forced

Both returned and **converged on the same two S1 defects**, which is the finding worth carrying
forward: the pages whose thesis is *"check everything we say"* were shipping claims that fail
precisely when checked. Full disposition table: claim register **§7.5**. Remediation: `eff6670`.

- **Hostile cold-read** — 24 findings. The verification checklist verified nothing (all three checks
  were artifacts a clone copies, and check 3 was additionally *false* because my own O2a `sameAs`
  narrowing made it so — correct code, un-re-read prose). "Every entry was opened from outside" was
  false for 4 of 13. A wrong data path **in the section titled "How to check this page"**. And the
  largest omission: `/about` names the operator as Head of AI at the Wilhelm Foundation while
  `/state-of-the-network` filed the Foundation under *"What is not ours"* as independent.
- **Ranker — 3.61**, below the 4.0 target. **Credibility 4.50 · Tone 4.50** (zero apology
  constructions; all three personas trusted the project *more* after reading) → the thesis holds.
  **Actionability 2.50** → the pages dead-ended at the footer. Remedied with the bus-factor answer
  and real exits.

11 claims corrected, 3 fixture rows updated same-diff, suite **442/442**, axe re-run **0 both
themes** after the rewrite, all four new verification links probed **200**.

**The ranker's 3.61 is recorded as not-yet-met.** The remediation targets its two lowest dimensions
directly, but the score was not re-run after the fixes — a re-rank belongs to the next session or to
P5.1's human instruments. Reporting the number that was actually measured rather than the one the
fixes were aimed at.

### Blockers

None. One operator gate remains by design.

### Next up

1. **⛩ Operator deploy GO.** Nothing has deployed this session. Last prod deploy is P1.1's
   `tree=0f7cca0`; HEAD is ahead by this mission's five commits. **Fetch and compare
   `site/scripts/deploy_log.txt` immediately before deploying** — the 08-16 lesson was that a deploy
   built behind origin un-ships another lane's work, and a parallel lane is active in this tree
   (`ab841c2` landed mid-session). Path: `site/scripts/deploy_adna.sh prod`.
2. **⛩ Send GO** for the staged title-alignment memo to ScienceStanley + WilhelmAI.
3. Then **P1 is complete** → P2 opens (P2.1 URL normalization).

### Files touched

New: `/state-of-the-network/`, `/canonical-properties/`, `network_state.ts`,
`canonical_properties.{ts,json}`, 3 P1.2 artifacts, the title-alignment memo, the evidence set.
Modified: `index.astro`, `about.astro`, `HomeHero.astro`, `Footer.astro`, `SEOHead.astro`,
`canonical.ts`, `seo.ts`, 12 `[...slug].astro`, 8 gate specs, 2 fixtures, both llms endpoints,
the claim register.

## AAR (SO#5)

**Worked.** Splitting the identity fix (O2a) from the surfaces meant that when gate-14 went red
across all 203 pages, the cause was unambiguous and one commit wide. Red-proving all four new gates
before committing turned "I added a gate" into "I know what this gate catches."

**Didn't.** The commit plan assumed O2b and O2c could ship separately; they cross-reference, so
splitting them would have shipped a knowingly-dead internal link. Merged them and said so. Separately,
the plan's assumption that a gate could `import` the property module was wrong — Playwright cannot
load site source that transitively imports JSON.

**Finding — I could not audit my own honesty page.** I wrote copy inviting readers to check
everything, verified the numbers exhaustively, and still shipped a verification checklist that
verified nothing, a wrong path in the *"How to check this page"* section, and a claim my own earlier
commit had falsified. Two independent reviewers each found the same two defects within minutes.
**The author of a checkability claim is structurally the worst auditor of it** — I had the model of
what the page was *supposed* to prove, so I read the intent rather than the sentence. Budget the
adversarial pass as part of the work, not as a formality after it; on this mission it changed 11
claims.

**Second finding — a stale test rationale is a live hazard.** gate-14 blocked the properties page with the
reason *"dead dev-vault repo (404)"*. The probe said 200: the repo had been made public and nobody
updated the string. The rule was still right for a *different* reason (proof-links want the
clone-and-run image, not the docs vault). Had I trusted the stated reason I would have deleted a
working guard; had I trusted only the failure I would have added a blanket exception. **Correcting
the rationale was as important as adding the allowlist entry** — the next reader decides whether to
keep the rule by reading that string.

**Change.** `sameAs` initially carried every repository, which put the dev-vault literal into all 203
pages and defeated gate-14 site-wide to gain nothing: the GitHub *org* is in `sameAs` and every repo
lives under it. Narrowed to org-level identities. The general rule earned here: **structured data
should assert the fewest identities that are true, because every page pays for each one.** The same
pass caught a worse latent error — partner properties (the Foundation's repo, a subnetwork's site) in
`sameAs` would have been a machine-readable claim that they *are* aDNA Network. That is precisely the
borrowed-trust move this campaign exists to delete, and it would have been asserted to machines that
act without reading the caveat.

**Follow-up.**
1. **R-108's title window is open**: adna.network says "Head of AI", stanley.science says "Lead AI
   Architect". Memo staged; re-check scheduled at P2.6.
2. **R-101 has a known expiry** — "aDNA runs none" on social accounts must change in the same diff as
   the day an account is opened.
3. `/privacy` emits **no JSON-LD at all** (it passes no `jsonLD` prop) — pre-existing, out of P1.2's
   scope, but it is now the only policy-class page with no `Organization`. Candidate for P2.
4. The **zero-verified-URLs gate-20 row is a deliberate tripwire**: the first URL to pass the probe
   gate turns it red and forces the copy to update with it. Annotated in the fixture so a future
   reader does not "fix" the red by deleting the row.
5. **Re-rank the two surfaces** — the 3.61 predates the remediation aimed at its two weakest
   dimensions. Do not carry 3.61 forward as the settled score, and do not assume the fixes cleared
   4.0 either; measure it.
6. **`/install.html` is an orphan** — reachable, but carries no site chrome, no footer link, and no
   sitemap entry, which is why the properties page now says *"every page in this site's
   navigation"* rather than "every page". Either wire it in or leave the scoped wording; it should
   be a decision, not a leftover.
7. **The reviewers' cross-cutting pattern** (register §7.5): failures clustered as *a second party's
   name doing credibility work the network has not earned* and *verification instructions that break
   when followed*. Worth a P2 sweep of the surfaces P1.2 did not touch.

## Next Session Prompt

You are Rosetta in `~/aDNA/aDNA.aDNA`. HAUSSMANN **P1.2 is code-complete and verified but NOT
deployed** — the mission's `human_gate: true` deploy step is the operator's. Five commits sit ahead
of the last prod deploy (`tree=0f7cca0`, P1.1): `462ac2e` → `20bd35b`. Suite 441/441 green, axe 0 both
themes, claim register at 110 adjudicated rows with zero FALSE and zero unsupported.

To close P1.2: (1) **fetch origin and diff `site/scripts/deploy_log.txt` before doing anything** — a
parallel lane commits into this tree and a deploy built behind origin un-ships its work; (2) run
`site/scripts/deploy_adna.sh prod` under operator GO and record the deploy line; (3) live-verify on
adna.network that `/state-of-the-network/` and `/canonical-properties/` return 200, the footer carries
both, the hero shows the disclosure sentence above the stat strip, and `og:site_name` reads "aDNA
Network"; (4) set the mission `completed` with its `token_budget_actual`; (5) get send-GO for
`coord_2026_08_18_rosetta_to_sciencestanley_wilhelmai_title_alignment.md`.

**P1 then closes and P2 opens** (P2.1 URL normalization). Read this session's AAR first — the
stale-test-rationale finding and the `sameAs` minimality rule both generalize beyond this mission.

---

## Closed by the successor session (2026-08-18)

`session_stanley_20260818_143557_haussmann_p1_2_close` executed the five steps this file's Next
Session Prompt specified, in order:

1. **Divergence checked before anything else** — `git ls-remote` confirmed the local `origin/main`
   ref was current (`a37b40a`), 0 behind; the last `mode=prod` record was still P1.1's `tree=0f7cca0`,
   so no lane had deployed into the gap.
2. **The owed re-rank ran first.** AAR follow-up 5 was treated as a gate, not a note: **4.11 → 4.22,
   the ≥ 4.0 criterion MET**, Actionability **2.50 → 4.00**. It caught two S2s (**R-112**, **R-113**),
   both fixed, gate-pinned and red-proven before the deploy, so one deploy shipped everything.
   Suite **442 → 444**, zero xfail.
3. **⛩ Deploy fired** — `2026-08-18T21:45:51Z mode=prod tree=84dd3bd`, then live-verified on the
   apex (both surfaces 200 + footer-linked, disclosure above the stat strip, `og:site_name` correct,
   retired phrasings absent).
4. **Mission set `completed`**, `token_budget_actual` recorded across both sessions.
5. **Title-alignment memo delivered** under operator GO.

**A correction to this file's record, worth carrying:** the ranker's own follow-up said *"do not
assume the fixes cleared 4.0; measure it."* They had — but the measurement also found that this
session's remediation had been applied to the two pages a reviewer named rather than to the claim
family they had identified, which is how **R-112** survived fifty lines below the band this mission
rebuilt against R-62. The generalization now lives in the mission AAR: **grep the claim family, not
the component**, and **paired pages need paired reviews**.
