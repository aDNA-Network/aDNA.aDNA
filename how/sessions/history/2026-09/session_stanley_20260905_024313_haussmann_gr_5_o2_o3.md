---
type: session
session_id: session_stanley_20260905_024313_haussmann_gr_5_o2_o3
created: 2026-09-05   # stamped `date -u` (02:43:13 UTC) — never local; the node runs PDT and a local stamp files a session sorting before ones that already happened (GR-4's open finding)
updated: 2026-09-05
status: completed   # closed 2026-09-05 after the deploy + probe; filed to history in the same commit (GR-4 O1's finding: a finished session left in `active/` is a lease nobody is holding)
tier: 1
campaign: campaign_haussmann
mission: mission_haussmann_gr_5_flaky_gates (O2 → O3) · course_deploy increment (C1 + C2)
objective: "GR-5 O2 (AC-2 INAPPLICABLE, ⛩ ruled) → O3 (the ⛩-ruled CI re-derivation of gate-39's worstPx) → Phase C (the course-deploy same-diff commit), then ⛩ push, ⛩ deploy"
executor_tier: opus
last_edited_by: agent_rosetta
token_budget_estimated: "GR-5's remaining share ~45 (O3) + ~20–30 (O4/O5 close) from the ratified ~220 kT band. ⚠ **Phase C is NOT inside that band** — it is a separate operator-ruled increment on the P4.4-addendum / R-97 precedent and carries its own ~60–90 kT line, said rather than absorbed (*a budget ratified before the operator's rulings is costed against a scope nobody has chosen yet* — GR-4's signed finding). ⚠ ~40 kT of any HAUSSMANN sitting is the campaign CLAUDE.md, auto-loaded — inside these bands, not beside them."
token_budget_actual: "≈300–360 kT — **RECORDED AT THE TIME**, not reconstructed. Splits ~145–175 kT to `GR-5` (O2 + O3 + close, inside its ratified ~220 band across the mission's two sittings) and ~155–185 kT to the **course-deploy increment** (C1 + C2 + `gate-55` + two red-tests + the probe + the `gate-49` re-baseline + the deploy), against the ~60–90 kT this file estimated for it. ⚠ **That is ~2× on the Phase C line and it is FLAGGED, not absorbed** — the estimate was costed before the `gate-55` design was falsified by measuring the real bundles (a two-form resolver, not a one-line grep), before the deploy probe existed, and before the `gate-49` red that held the deploy a full CI cycle. ⭐ **The band that held is the one whose scope was ruled at a gate; the band that doubled is the one whose scope was discovered while building** — GR-4's finding, observed in both directions inside one sitting."
tags: [session, haussmann, gr_5, f_ab, course_deploy, adr_057, privacy]
---

# GR-5 O2 → O3, then the course-deploy increment

## Derived at open — never carried (convention 19 + convention 16)

| Fact | Value | Command |
|---|---|---|
| HEAD | `e66e120` | `git log --oneline -1` |
| `origin/main` | `fe2bba6` — **3 unpushed** | `git ls-remote origin main` (at the remote, never a tracking ref) |
| Prod alias | **`2a72efe`**, built `2026-09-04T16:08:57Z` | `curl /.well-known/adna-build.json` |
| Unshipped shipped-surface delta | **exactly one thing** — the course, 13 files, +1157/−3 | `git diff --stat 2a72efe..HEAD -- site/src site/public astro.config.mjs vercel.json` |
| **CI on `main`** | ⛔ **RED at `fe2bba6`** — run `33918391804`, `gate-39:137` (dark), 1 failed / 681 passed. Prior run `33917725977` at `3889c29` **success**. | `gh run list --workflow=gates.yml --branch main -L 6` |
| ADRs | **55 files — 53 `accepted` · 1 `amended` · 1 `inactive` · 0 `proposed`** | `grep -h '^status:' what/decisions/adr_*.md \| sed 's/#.*//' \| sort \| uniq -c` |

⚠ **The red is `DATUM 1` and it is a question, not a verdict** (convention 18). It is `F-ab`'s own
family on a commit whose `site/` diff against the green run is **empty** — this mission's subject, not
a blocker on it.

⭐ **The ADR tally answers a question the operator asked and the answer is "none".** No ADR awaits
ratification; ADR-056 was the last and was ratified 2026-09-04. ⚠ Minor drift found in passing:
`STATE.md` renders the tally as *"53 accepted · 1 amended · 0 proposed"*, which **sums to 54 against
55 files** — the `inactive` one is unnamed. Not corrected here; noted so the next derivation is not
read as a discrepancy.

## ⛩ Two rulings taken at this session's open (SO#1 — neither taken here)

1. **`GR-5` O2 → record `AC-2` INAPPLICABLE and proceed to O3.** O1 measured all three families at
   **0/100 on the host**, which removed O2's subject; O1's record put the scope call to the operator
   with three options and this is option 3.
2. **The course-deploy GO → hold, fix C1 + C2, then deploy.** Both defects re-verified at the object
   at this open, not inherited from the design memo.

## Session hygiene performed at the open — and it was GR-4 O1's finding, twice

**BOTH** files in `how/sessions/active/` were finished and neither had been filed:

- `…_230810_haussmann_gr_5_o1.md` — `status: completed`, actual recorded. Filed.
- `…_233911_haussmann_gate_rulings.md` — `status: active`, `token_budget_actual:` **empty**, while
  every deliverable it names was committed at `3889c29` and its own §Next Session Prompt hands off to
  a later sitting. Set `completed`, actual **reconstructed and labelled as reconstructed**
  (~85–110 kT vs a ratified ~60–90; ~1.2×, inside SO#11's 2×, no retrospective). Filed.

⭐⭐ **The second one is sharper than GR-4's original sighting, and the reason is structural.** That
file's §Concurrency block **is** the Single-Writer Lease mechanism — it exists to tell a cold agent
which files a live peer owns. Left in `active/`, it presented a cold agent with **two apparent live
peers, neither of which was live**, and the more careful the file (Tier-2, scope declared) the more
convincing the false lease. ⇒ ***a lease declaration is only as good as the act of releasing it***,
and nothing in the protocol releases one. Fourth consecutive P4.3-class instance of an actual
reconstructed rather than recorded.

⚠ **`git mv` staged the pre-edit blob again** — the known node quirk. Caught by reading
`git diff --cached --stat` (it read `4 ++--`, i.e. both edits present) rather than trusting the
command's exit code.

## Prior work found, read, and NOT re-invented

`artifacts/course_deploy/c1_c2_design.md` (`status: proposed`, 11 kB) already designs C1 and C2 in
full — the `/privacy` copy, `gate-55`'s three assertions with one mutation each, and a **gate-by-gate
contract table** deciding where the course routes belong. Building against it.

⚠ **One line of that design is already discharged and must not be re-run**: it predicts *"a `doc-hub`
re-baseline is expected"*. That was performed under ⛩ ruling 3 and pushed at **`5246e78`**, which sits
in the range above prod. **Verify before regenerating** — re-baselining an already-correct baseline is
how noise gets baked into a ratchet (`AMENDMENT 1`'s finding).

## Completed

- **Session hygiene** — two finished sessions filed to `history/2026-09/`, one with a reconstructed
  actual. GR-4 O1's finding, twice.
- **`GR-5` O2** (`d9e0411`) — `AC-2` **INAPPLICABLE**, ⛩ ruled. Register **§23**.
- **`GR-5` O3 built** (`c0db050`) — `gate-39` emits its measurement on every run; CI sampler;
  red-test 6/6. ⛩ **Push GO taken**, `fe2bba6..c0db050`, gitleaks clean, verified at the remote.
- **Sampler node fix** (`ddac91b`) — it died in 78 s on a **typed** `node-version: 20`.
- **`GR-5` O3 measured** (`517fb3b`) — run `33941189252`, n=30: `netdiagram-svg` **spread 0.6400**
  ⇒ ⛩ **the rider fired**; all other figures **0.0000**. ⛔ **No pin moved.** Red-test 8/8.
- **Course-deploy C1 + C2** (`267d9a8`) — `/privacy` enumerates and never totals; **`gate-55`**
  (red-test 6/6); `gate-4` +2 routes; `twin_manifest`; STATE's *"7-lesson"* correction.
- **`GR-5` CLOSED** — AAR filed (SO#5), register **§24**, `token_budget_actual` **recorded at the
  time** (≈195–235 kT vs a ratified ~220), STATE + MANIFEST + campaign index moved in the cascade.

- **🚀 DEPLOYED** — `deploy_record: 2026-09-05T04:51:01Z mode=prod url=https://adna-docs-lo4omw6hs-science-stanleys-projects.vercel.app token=SS_VERCEL_TOKEN tree=1cc80ca`. No override flags; ancestry guard passed on its own terms; live headers **4/4 by value**. Probe **16 PASS / 0 FAIL** ([[deploy_probe_course]]) against its red-proven **8/8** pre-deploy run.
- **`gate-49` `home` re-baselined** (`1cc80ca`) — a **real** content change (twin count 223 → 226 rendered on `/`) wearing `AMENDMENT 1`'s exact 17/19 px noise figures. CI green on `1cc80ca` before the deploy.

**Suite: 693 chromium (692 passed / 1 skipped / 0 failed)**, re-run **after** the record edits.
Delta from 685 isolated with `--list`: `gate-55` **+4**, `gate-4` **48 → 52**.

## In progress

- Nothing. ⛩ Both GOs were granted and taken, in order; the deploy is live and probe-verified.

## Next up

⭐⭐ **`P5.1` RECRUITMENT IS NOW UNBLOCKED AND IT IS THE CAMPAIGN'S CRITICAL PATH.** Prod serves
`1cc80ca`, so `AC-1`'s stimulus — *the live production hero at a recorded build stamp* — is fixed and
self-describing. **Nothing agent-reachable remains in the backbone.** It needs **five recruited cold
readers** (agents must not recruit), a **fresh macOS account**, and the **operator as outsider**; one
reader also runs the TTFS, which closes `P2.6 O0b`. Then `P5.2` → ⛩ **DP9**.

⛩ **One line owed at `P5.1`'s open**, carried forward so it does not lapse: ruling 4 (TTFS → a cold
reader) **falsified the antecedent** that made `AC-3 → AC-2` unconditional. Either release the
ordering or retain it **for a different stated reason** — an agent does not dissolve an operator's
ordering by deriving that its premise expired.

## Findings this sitting

- ⭐⭐ **There was no pin to re-derive**, and `7.9 → 7.4` would have pinned **above** CI's true worst
  of **7.3600** ⇒ *a bar moved to make a test pass does not even reliably make the test pass.*
- ⭐⭐ **A red-test case is coupled to the behaviour it mutates** — the rider silently invalidated two
  cases, one of which then passed against a green run while claiming to test a red one.
- ⭐ **`gate-55`'s first design was falsified by measuring the real bundles** — the literal-only
  pattern was blind to the very key that motivated the gate.
- ⚠ **Six of my instruments wrong before their subject**, including a **false-green `AC-5` check**
  (`|| echo` printing the all-clear after `git diff` errored) and a **typed `node-version`** inside
  the instrument built to replace a typed pin.
- ⚠ **G41d fired on the cascade for the third consecutive time** — *a close cascade that edits STATE
  is a change the suite can see.* MANIFEST re-derived, **zero drift**; and the naive subtopic
  predicate read **34** against a correct **27**, so it would have "fixed" a right number.

## Blockers

All human, none agent-reachable: `P5.1`'s five cold readers (one also runs the TTFS, closing
`P2.6 O0b`) · the `AC-3 → AC-2` ordering line owed at `P5.1`'s open · a ⛩ scope gate for `R-111`
(an open S2 on `P5.2`'s path, surfaced by the prior sitting's FINDING 3) · Speed Insights' dashboard
enable · the outward-acts batch (Vitruvius `/g/adna/` · Hopper 4.2.0 ack · babbage's lease + two
`proposed` upstream findings).

## Next Session Prompt

> Open `how/campaigns/campaign_haussmann/CLAUDE.md`, `missions/mission_haussmann_gr_5_flaky_gates.md`,
> `artifacts/gr_5/o1_rate_record.md` and `artifacts/course_deploy/c1_c2_design.md`. Derive `main`'s CI
> status (convention 19) and prod's stamp at the open — both were `fe2bba6` red / `2a72efe` here.
> `GR-5` O2 is ⛩ ruled **INAPPLICABLE** (the experiment is *unrunnable*, its subject absent from the
> sampleable regime — **not** `DEFECT-3`'s refutation branch; collapsing the two is the overclaim).
> O3 is the ⛩-ruled CI re-derivation of `gate-39`'s `worstPx`, with the signed fallback rider;
> ⛔ **never `7.9 → 7.4`**. Phase C is the course-deploy same-diff commit per the design memo, then
> ⛩ push, then ⛩ deploy — in that order, because `inject_build_stamp.mjs:83` stamps HEAD and nothing
> checks HEAD is public. `P5.1` recruitment opens **after** that deploy and not before.
