---
type: session
session_id: session_stanley_20260905_024313_haussmann_gr_5_o2_o3
created: 2026-09-05   # stamped `date -u` (02:43:13 UTC) — never local; the node runs PDT and a local stamp files a session sorting before ones that already happened (GR-4's open finding)
updated: 2026-09-05
status: active
tier: 1
campaign: campaign_haussmann
mission: mission_haussmann_gr_5_flaky_gates (O2 → O3) · course_deploy increment (C1 + C2)
objective: "GR-5 O2 (AC-2 INAPPLICABLE, ⛩ ruled) → O3 (the ⛩-ruled CI re-derivation of gate-39's worstPx) → Phase C (the course-deploy same-diff commit), then ⛩ push, ⛩ deploy"
executor_tier: opus
last_edited_by: agent_rosetta
token_budget_estimated: "GR-5's remaining share ~45 (O3) + ~20–30 (O4/O5 close) from the ratified ~220 kT band. ⚠ **Phase C is NOT inside that band** — it is a separate operator-ruled increment on the P4.4-addendum / R-97 precedent and carries its own ~60–90 kT line, said rather than absorbed (*a budget ratified before the operator's rulings is costed against a scope nobody has chosen yet* — GR-4's signed finding). ⚠ ~40 kT of any HAUSSMANN sitting is the campaign CLAUDE.md, auto-loaded — inside these bands, not beside them."
token_budget_actual:
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

*(appended as work lands)*

- Session hygiene: two finished sessions filed to `history/2026-09/`, one with a reconstructed actual.

## In progress

- `GR-5` O2 — the INAPPLICABLE record.

## Next up

O2 → O3 (emission + the `workflow_dispatch` CI harness, **its own concurrency group**, n stated with
its basis — ⛔ `n=97` was derived for a **proportion** and does not transplant to a continuous
extremum) → Phase C (one same-diff commit) → ⛩ push → read CI → ⛩ deploy.

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
