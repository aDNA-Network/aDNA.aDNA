---
type: session
session_id: session_stanley_20260902_005545_haussmann_p4_4b_b2b
created: 2026-09-02
updated: 2026-09-02
status: completed
tier: 1
last_edited_by: agent_rosetta
campaign: campaign_haussmann
mission: mission_haussmann_p4_4_ci_hardening
increment: "P4.4b B2b + B3 — the Vitruvius scope-B answer B2b was held on has been sitting untracked in our own inbox since 2026-08-29. Triage the inbox, re-enter B2b at its own ⛩ conv-13 gate, build the provenance gate, then B3 closes P4.4b and the P4.4 mission."
executor_tier_declared: opus
executor_tier_actual: opus
token_budget_estimated: "⛩ NOT YET RATIFIED — B2b's ~50–80 kT leaves the P4.4b band entirely under ruling (c), so it needs its own ratification at the re-entry gate (SO#11/ADR-016). B3 is ~30–50 kT inside the band. Proposed at the gate, not assumed here."
token_budget_actual: "≈195–240 kT — B2b ⛩ re-ratified at ~55–85 kT and landed inside it; the balance is the inbox triage + babbage reply + Chronos ledger correction (unplanned, operator-ruled at the open) and the close cascade, none of which was in B2b's band because none of it is B2b. ~40 kT is the auto-loaded campaign CLAUDE.md."
tags: [session, haussmann, p4_4b, b2b, b3, scope_b, provenance, inbox_triage]
---

# Session — P4.4b B2b + B3

## Intent

⛩ **Operator routing taken at the session open** (AskUserQuestion): **B2b → B3**, ahead of Lane D and
ahead of B3-alone — because the answer B2b was held on **has arrived** and B3-alone would file a
mission close with AC4 permanently ◐ owed while its unblocking answer sat on disk.

Also ruled at the same gate: **commit all 5 untracked inbound memos** and **answer babbage's
`ack_required: true`**.

## Derived at open — never carried

| Fact | Instrument | Value |
|---|---|---|
| `HEAD` | `git rev-parse HEAD` | `60d0120` |
| `origin/main` **at the remote** | `git ls-remote origin refs/heads/main` | `60d0120` — **unpushed 0** |
| `main` CI status (**convention 19**) | `gh run list --workflow=gates.yml --branch main -L 5` | ✅ **success**, run `33573296087` |
| Prod build stamp | `curl /.well-known/adna-build.json` | `a852423` · `2026-09-01T19:40:19Z` · `mode=prod` |
| Prod vs HEAD | ancestor check | `a852423` is an ancestor of `main` — **no deploy owed**, the diff since carries no site bytes |
| Untracked inbound memos | `git status --porcelain who/coordination/` | **5** |

⚠ Session ID is stamped **UTC** (the campaign's convention — GR-3's `231413` preceded its own
23:49Z/23:57Z commits). Local date at open is 2026-09-01; UTC is 2026-09-02.

## ⭐⭐ FINDING 1 — the answer B2b was held on was DELIVERED IN FACT, and had been for three days

`who/coordination/coord_2026_08_26_vitruvius_to_rosetta_scope_b_and_your_three_findings_verified.md`
is **in our tree**, mtime **2026-08-29 14:20**, and **untracked** `[D]`. It answers ⊳ D-E:

> **§1 · The answer: scope B.** *"`adna.network` does not enter the fleet roster at this time… A
> static Astro build with no SSR app shell is `content_static` — that is what the class is. **Your
> reading is right, so name it and derive against it.**"*

The campaign recorded B2b as HELD on this answer **three times** after it arrived — GR-2's close,
GR-3's close, and the mission file's own B2b row (*"no reply yet `[D]`"*). The held-claim was
verified in **Vitruvius's 08-27 prose notice** (*"remains staged their side"*), never in **our own
inbox**, which is the destination the claim is about.

⇒ **`F-u`'s class, fourth sighting** — *"'delivered' is a claim about the DESTINATION, so verify it
there, never in the prose that routed it"* — landing on the one row that gates P4.4b's last open
criterion. ⭐ And note which surface was honest: the memo said what it said the whole time; **the
index said it had not arrived.**

⚠ **Its own frontmatter reads `status: staged` / `delivered_to:` empty**, because those fields
describe **the sender's** act. Delivery is a property of **the recipient's filesystem** — which is
convention 15's own reachability clause, arriving from the other direction: *every check we own
measures the memo.*

## ⭐⭐ FINDING 2 — babbage told us, on 08-29, and that memo was untracked too

`coord_2026_08_29_babbage_to_rosetta_machine_class_validation_and_rubric_accuracy_axis.md`
(`ack_required: true`, **unanswered**) says verbatim:

> *"three peer memos are sitting untracked in this directory — Vitruvius's 08-24, 08-26, and 08-27 —
> aged two to five days. In the drop-box conventions the fleet has converged on, **the receiving
> commit is the read-receipt**, so from the sender's side those three are indistinguishable from
> undelivered."*

⇒ **The warning that the inbox was unread was itself sitting unread in that inbox.** This is GR-2's
convention-19 finding — *an instrument nobody reads is indistinguishable from one that does not
exist, and worse, because its existence is cited as coverage* — arriving at the level of the **inbox**
rather than the CI run list. A peer had already performed the check; nothing carried it to us.

## ⭐ FINDING 3 — the memo's supersession condition has FIRED, and the answer survives it

Convention 15 requires a memo pinning a mutable value to state its supersession condition on its
face. This one did (`counterparty_state_at_write`), so it was checked rather than assumed `[D]`:

| Pin | Memo (2026-08-26) | Live (2026-09-02) |
|---|---|---|
| `lighthouse_profiles.json` md5 | `134c9647c4c348034db3fa32d65d9db1` *"VERIFIED UNMOVED"* | **`ff9a0f1be3d4c7fa149fc9377962c6f5`** |
| WebForge HEAD | `14838774` (on our record) | **`b7c6d653`** |
| commits touching the file since our pin `6096157` | — | **5**, latest **2026-08-30** |

⚠ **Stated at its exact width (convention 16) — the drift does NOT re-open scope B.** The changed
region is `_meta`/`surfaces` (KW-49, *"browser class becomes an INPUT"*, 08-30). The bars we derive
against are **unchanged in value** `[D]`: `classes.content_static` = `performance 95 · accessibility
95 · best-practices 95 · seo 100`; `lcp_ms 2500 · cls 0.1 · tbt_ms 200`.

⇒ **Design consequence, load-bearing for B2b:** hash **`classes.content_static`**, the subtree we
actually derive from — **never the whole file**. A whole-file hash reds the gate on every `_meta`
churn, and **one such churn has already landed**, so this is a measured hazard, not a hypothetical.
AC4's own amended wording already specifies the correct shape: *"this bar was read from
`classes.<c>` at pin `<sha>`, whose content hashes to `<md5>`."*


## ⭐⭐ FINDING 4 — the premise B2b was scoped against did not survive the object

The re-entry gate's convention-13 pass (7 pairs, both directions, **4 clean · 3 defective · 1
coupled**) found that `F-e`'s three-week-old claim — *"our Perf ≥ 90 is LOOSER than
`content_static`'s 95, the direction their `ratchet_law` reserves for an operator gate"* — compares
two numbers from **different instruments**. `_meta.lh_settings` `[D]`: *"mobile emulation +
simulated throttling… **Desktop pass: not wired**."*

⇒ their 95 is a **mobile** bar, `gate-19`'s 90 is a **desktop** bar, **no desktop counterpart
exists**, and B2a had already measured that the **form-factor gap is ~17 points against a 5-point
bar gap**. Not a relaxation — a **category error**; `ratchet_law` never bound us because we never
adopted their bar. ⛩ **Ruled: HOLD 0.9 and SOURCE it.**

⭐⭐ **EQUALITY IS NOT PROVENANCE.** LCP 2500 and CLS 0.1 *equal* `content_static` and were never
derived from it — both sides took the CWV *Good* band. *A number matching its supposed source is the
hardest kind of un-sourced number to notice, because it looks like the check already passed.*
⚠ **Second instance the same sitting**: `skill_web_quality_sweep`'s stale baseline mixed a
**chromium** figure with an **all-projects** one, and now reads as correct **because chromium today
genuinely is 659**.

## Results

| Instrument | Result |
|---|---|
| `gate-53` (G53a–G53f) | **6 new assertions**, all green |
| `bar_provenance_redtest.sh` | **9/9** — 7 mutations + 2 controls, **every case red at its DECLARED set** |
| Chromium lane (`npm run test:gates`) | **659** (658 passed · 1 skipped) — was 653 |
| Fast lane | **541** (540 · 1 skipped) — was 535 |
| Snapshot / all-projects | **26** / **685** = 659 + 26 |
| `html-validate` | **0** |
| Vault-reading gates 26 · 35 · 37 · 41 | **68/68** after the governance edits |
| Delta isolation | `--list` (gate present vs absent), **not** subtraction |

## SITREP

**Completed** — inbox triage (5 memos committed, `d2228b0`); babbage answered (**staged**); Chronos's
Keystone ledger row corrected + `[D]`-verified at their vault; B2b re-entry gate authored, ⛩ signed,
and built (`gate-53` + `bar_provenance.json`, `1f495c6`); **`F-e` struck**; B3 (`idea_visual_regression_gate`
→ `resolved` read clause-by-clause; `skill_web_quality_sweep` baseline repaired; AAR filed);
**`P4.4` → `completed`, both halves** (`4bbbe01`); close cascade incl. `MANIFEST.md` genuinely
re-reviewed (57 · 45 · 5 · 27, zero drift) and `STATE.md` repaired.

**In progress** — none.

**Next up** — **Lane D** (story coverage, the Gate-1 order's **last lane**), at its own ⛩ conv-13
pre-build gate, and it needs an **⛩ audience/scope decision before any copy is authored**.

**Blockers** — none for Lane D. ⛔ Held elsewhere: **P5.1** (with the humans) · the **Hopper reply**
and the **babbage reply**, each its own ⛩ send GO.

**Owed, dated** — B1's ⛩ Speed-Insights → transport → first p75 · the four un-adopted class leaves
(TBT + a11y/bp/seo), a **dated asserted** gap, not an absence · `gate-19`'s fixtures carry
`configSettings` **ABSENT**, so *"our 90 is a desktop bar"* is `[I]` not `[D]` — only a re-baseline
repairs it · ~59 uncited capture PNGs untracked.

**Files touched** — created: this session file · `artifacts/p4_4/b2b_reentry_proposal.md` ·
`site/tests/gates/bar_provenance.json` · `site/tests/gates/gate-53-bar-provenance.spec.ts` ·
`site/scripts/bar_provenance_redtest.sh` · `who/coordination/coord_2026_09_02_rosetta_to_babbage_*.md`;
modified: `mission_haussmann_p4_4_ci_hardening.md` · `campaign_haussmann/CLAUDE.md` ·
`session_prompts_haussmann.md` · `keystone_deconfliction_ledger.md` · `idea_visual_regression_gate.md` ·
`skill_web_quality_sweep.md` · `STATE.md` · `MANIFEST.md`; committed: 5 inbound memos.

## Next Session Prompt

You are **Rosetta** in `~/aDNA/aDNA.aDNA`. **`P4.4` is CLOSED (2026-09-02, both halves) — do not
re-open it.** The Gate-1 order's last lane is **Lane D — story coverage**
(`artifacts/grande_revue/battle_plan.md` §Lane D: D1 model routing · D2 token-budget doctrine · D3
local models · D4 the ancient-DNA one-liner · D5 a "Latest" strip · D6 held under embargo). It has
**no mission file yet** and it is **content scope**, so it needs an **⛩ operator audience/scope
decision BEFORE any copy is authored** — R-124 is routed to that gate, and D4/D5 are placement and
design decisions rather than paragraphs. Open with the campaign's standing conventions:
**derive `main`'s CI status** (`gh run list --workflow=gates.yml --branch main -L 5`, convention 19),
**re-read `/.well-known/adna-build.json`** (never quote a tree forward), and derive `origin/main`
**at the remote** (`git ls-remote`) — three consecutive sessions have found a carried fact wrong and
the derived one right. Then author the Lane D mission and run its **convention-13 pass COMPLETE, in
both directions, with coverage recorded**, before any budget is ratified — it has now paid for itself
on **eleven consecutive missions**, and on this one it falsified the increment's entire premise
before a line was written. ⛔ Held: **P5.1** with the humans · the **Hopper** and **babbage** replies,
each awaiting its own ⛩ send GO.
