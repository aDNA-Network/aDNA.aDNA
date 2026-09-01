---
type: session
session_id: session_stanley_20260901_231413_haussmann_gr_3_false_red
created: 2026-09-01
updated: 2026-09-01
status: completed
tier: 1
last_edited_by: agent_rosetta
campaign: campaign_haussmann
mission: mission_haussmann_gr_3_false_red
increment: "GR-3 O0–O5 — convention 19 found `main` red at session open; the red is gate-42's asset-failure assertion firing on requests the gate itself cancelled. Author the mission, verify the race at the object, fix the traversal (never the predicate), and repair the red-test harness that could not say which assertion it proved."
executor_tier_declared: opus
executor_tier_actual:
token_budget_estimated: "⛩ RATIFIED 2026-09-01 at O0 — ~120–180 kT / 1–2 sessions. O0 ~25–40 (the complete convention-13 pass) · O1 ~20–30 (rerun + local repro + the case-3 identity probe) · O2 ~15–25 · O3 ~35–50 (harness reasoning, the largest share) · O4 ~10–15 · O5 ~15–20."
token_budget_actual: "≈150–185 kT — at/just over the ratified ~120–180 kT band. ~40 kT is the auto-loaded campaign CLAUDE.md; ~25 kT is AC-7's unplanned probe, which is the sitting's best purchase. Session count 1, under the ratified 1–2."
tags: [session, haussmann, gr_3, gate_42, false_red, convention_19]
---

# Session — GR-3: the false red

## Intent

`main` is red and **nothing shipped**. Establish that gate-42's `assetFailures` assertion is firing on
requests **gate-42 itself cancelled**, fix the traversal that causes the cancellation without touching
any predicate, and repair `console_clean_redtest.sh` so a case can no longer report a red it did not
aim at.

⛩ **Operator routing taken at the session open** (AskUserQuestion): **GR-3**, ahead of P4.4b B3 and
Lane D — because `main` is red, the next ⛩ push GO is conditioned on green, and B3's AAR would
otherwise be filed over a red branch.

## Derived at open — never carried

| Fact | Instrument | Value |
|---|---|---|
| `HEAD` | `git rev-parse HEAD` | `2ad7768` |
| `origin/main` **at the remote** | `git ls-remote origin main` | `2ad7768` — **unpushed 0** |
| `main` CI status (**convention 19**) | `gh run list --branch main --workflow gates.yml` | ❌ **failure**, run `33558250778` |
| The failure | `gh run view --log-failed` | **1 failed** / 649 passed / 3 skipped — `gate-42` G42b **light mode only** |
| Last green | same | `33550897183` (lemur's `a852423`) |
| Prod build stamp | `curl /.well-known/adna-build.json` | `a852423` · `2026-09-01T19:40:19Z` · `mode=prod` |
| Prod vs HEAD | `git merge-base --is-ancestor` | `a852423` **is an ancestor** of HEAD (+5) — nothing un-published |

## Progress

### O0 ✅ — mission + convention-13 pass

Pass **COMPLETE at 35/35** (5 method-bearing × 7 test-bearing), coverage recorded in the mission body.
**3 defects, all fixed before the signature** — and one of them (M5×T2) predicted the rerun's result
before the rerun ran. ⛩ Budget ratified at the full ~120–180 kT band; **O5b ruled in.**

### O1 ✅ — established at the object

- **Act 1 ⭐** — `gh run rerun 33558250778` → **attempt 2 `success` on byte-identical input.** Same
  commit, opposite outcome. Non-determinism demonstrated.
- **Act 2** — build clean (226 pages, 8.9 s); gate-42 **green locally, 1.1 min**. ⚠ Not a refutation:
  an unloaded Mac wins the race a loaded runner loses. Recorded as AC-7's baseline.
- **Act 3 ⭐⭐** — case 3 reds via `225 console error(s)`; the same-origin message never appears.
  **`assetFailures` had never once been demonstrated to fail.**

### O2 ✅ — the traversal fix

Condition-based settle (drain to zero in-flight) replacing the 120 ms duration bet; expiry **asserted**
via `unsettled`, ordered **before** the same-origin check. Three predicates byte-unchanged.
**AC-7 fired**: `networkidle` measured +255% (1.1 → 3.9 min), past the ceiling → decision re-taken on
a probe (508 ms/route vs 110 ms) → mechanism swapped. **Final 56.0 s, faster than the baseline.**

### O3 ✅ — the harness repair

**8 pass / 0 fail (6 mutations + 2 controls)**, every case naming the assertion it reddened. Case 6
(the first-ever `assetFailures` red-proof) verified **red pre-fix AND post-fix**.

### O5 ✅ — records

`F-z` + `F-s` written and struck. Register re-derived at the object: **25 total · 18 struck · 7 live**.
`F-y`'s gap closed — the letter sequence is now a–z with only the documented `t` missing.

### O4 ✅ — ⛩ push GO granted, pushed, CI green

Pre-push: gitleaks clean (1006 commits) · local suite 0 failures · remote re-derived unmoved **at the
remote** immediately before pushing. Pushed `2ad7768..9419b4e`. **CI `33572683681` success.**
**AC-2's diff is exact**: red control 649 passed / **1 failed** / 3 skipped → **650 / 0 / 3**. Same 653
total, same 3 skipped ⇒ **exactly one assertion changed state**, and there is no silent improvement
elsewhere to mistake for one.
⚠ **Stated at its width:** the local pre-push run covered **653 of the 679** listed tests — gate-49's
26-test snapshot lane runs in its own CI step and did not run in that invocation. It was a sanity
check, never the criterion; CI covered all 679 across its two steps.

## Files touched

- `site/tests/gates/gate-42-console-clean.spec.ts` — traversal + `unsettled` assertion (M)
- `site/scripts/console_clean_redtest.sh` — assertion identity + case 6 (M)
- `how/campaigns/campaign_haussmann/missions/mission_haussmann_gr_3_false_red.md` (new)
- `how/campaigns/campaign_haussmann/artifacts/gr_3/{o1_repro_record,o3_redproof_record}.md` (new)
- `how/campaigns/campaign_haussmann/missions/mission_haussmann_p4_4_ci_hardening.md` — `F-z` + `F-s` rows
- `how/campaigns/campaign_haussmann/CLAUDE.md` — GR-3 block + mission-index re-derivation
- this session file (new)

## SITREP

**Completed.** GR-3, all seven criteria, in **one** session (ratified 1–2). `main` is green at
`9419b4e`. Nothing deployed; nothing owed to production.

**Findings.** ⭐⭐ Convention 14's missing second clause — *a demonstration is only worth what it can
attribute*; the `assetFailures` assertion had never once been demonstrated to fail, and its first
firing in its life was the false positive that opened this mission. ⭐ The campaign's first false
*red*, which is worse than a false green in one respect: it teaches people to ignore reds.
⭐ AC-7's numeric threshold changed the build **by failing** — "record the cost" would have shipped
3.9 min; a stated ceiling forced the probe that found a design 4× cheaper and strictly more correct.

**Next up.** **Lane D** (story coverage) or **P4.4b B3** — unchanged by GR-3, which was an unplanned
interrupt; each at its own ⛩ conv-13 pre-build gate.

**Blockers.** None new. Still held: B2b on ⊳ D-E · the Hopper reply (own ⛩ send GO) · P5.1 with the
humans.

**Next Session Prompt.** *Rosetta, HAUSSMANN Decade 2. Open by running convention 19 — derive `main`'s
CI status (`gh run list --branch main --workflow gates.yml`) and re-probe
`https://adna.network/.well-known/adna-build.json`; never quote a carried prod stamp. As of GR-3's
close (2026-09-01) `main` is green at `9419b4e` (run `33572683681`, 650 passed / 0 failed / 3 skipped)
and prod serves `a852423`, an ancestor of `main`. The routing call is **Lane D** (story coverage,
D1–D6 in `artifacts/grande_revue/battle_plan.md`, needing an ⛩ audience/scope decision before any copy)
or **P4.4b B3** (`~30–50 kT`: close `idea_visual_regression_gate`, runbook, AAR — which closes P4.4b
and with it the P4.4 mission). Whichever is chosen gets its own **complete** convention-13 pass with
coverage recorded, then ⛩ budget ratification, before anything is built. Owed: B1's Speed-Insights →
transport → first p75; ~59 uncited capture PNGs untracked. `F-s` and `F-z` are both closed — the `F-`
register is 25 total · 18 struck · 7 live, re-derive it rather than quoting that.*
