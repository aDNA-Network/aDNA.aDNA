---
type: session
session_id: session_stanley_20260902_020000_haussmann_adopt_four_bars
created: 2026-09-02
updated: 2026-09-02
status: completed
tier: 1
last_edited_by: agent_rosetta
campaign: campaign_haussmann
mission: mission_haussmann_p4_4_ci_hardening
increment: "POST-CLOSE ADDENDUM to P4.4b — ⛩ operator ruled ADOPT for the four content_static bars named un-adopted at P4.4's close; plus the GO'd push and both staged memo deliveries. NOT a reopening: P4.4 stays `completed` and these were filed as owed, never as criteria (the GR-2 addendum precedent)."
executor_tier_declared: opus
executor_tier_actual: opus
token_budget_estimated: "Unbudgeted follow-on — an operator instruction against a closed mission's owed-list, not a new mission. Recorded rather than costed; if this pattern recurs it wants a band."
token_budget_actual: "≈130–170 kT — the re-baseline and the red-test extension dominate; ~40 kT is the auto-loaded campaign CLAUDE.md."
tags: [session, haussmann, p4_4b, addendum, adoption, rebaseline, correction, gate_53]
---

# Session — adopt the four bars (post-close addendum)

## Intent

⛩ Operator: *"Go and adopt."* Ruled at the open via `AskUserQuestion`, because the referent was
genuinely ambiguous and the readings diverged materially: **adopt the four un-adopted
`content_static` bars** (TBT 200 · a11y 95 · best-practices 95 · seo 100). Also GO'd in the same act:
**push** the 6 local commits, and **send** both staged replies.

## ⭐⭐ FINDING 1 — a correction I owed, and I wrote the error one sitting after citing the rule it breaks

Last sitting I asserted, in **seven surfaces**, that `gate-19`'s fixtures *"do not record the
instrument that produced them"*, so *"our 90 is a desktop bar"* is **`[I]`, not `[D]`**. **False.**

- Every committed fixture carries a top-level **`_provenance`** string naming it — *"Lighthouse
  13.4.0 **desktop** on /vaults/graph"* — and two name `--preset=desktop` exactly.
- The **raw archived runs** (`site/evidence/`, gitignored) carry hard `configSettings` `[D]`:
  `formFactor: desktop` · `screenEmulation.mobile: false` · `rttMs: 40`, at LH `13.4.0`.

I checked `configSettings` — the *standard* LHR field — found it absent, and concluded no record
existed, **without checking the custom `_provenance` key at the fixture's own top level.**
⇒ **convention 16 breached one sitting after this campaign cited it, by the desk that cited it, inside
the artifact built to record provenance.**

⭐ **The residual is real but NARROWER, and the narrowing is the whole point:** the *committed*
fixture carried no **machine-readable** instrument field, so **no gate could assert it** — a gate
cannot assert prose — and the hard evidence sat in a **gitignored** directory CI never sees.
*The defect was never "we cannot prove it"; it was "nothing re-checks it."* Landed as its own commit
(`e60e7ad`) **before** the re-baseline, because a remedy aimed at the wrong defect is what this
campaign keeps finding.

## ⭐ FINDING 2 — the Hopper memo was stale on its face, and its own clause caught it

Authored 08-28, staged five days. It said the public surface *"still serves the literal **until our
next ⛩ GO'd push**"* and that a re-measure *"will still count 1 — that is the window, not a dispute."*
**That push happened thirty minutes earlier.** Verified before sending `[D]`: the redaction commit
`8a4fd25` is on `origin/main`, so the public count is **0** and only published git history retains it.

⇒ Clause updated **at delivery** rather than delivered stale. **This is convention 15 working as
designed** — the supersession condition Hopper's own ADR asked us to put on every pinned memo is what
made the staleness *visible at delivery* instead of arriving as a false statement in their inbox.
It fired, we checked, the check cost one command.

## ⭐ FINDING 3 — TBT is adopted and inert, and that is stated rather than hidden

Measured, all four routes: **perf 1.0 · a11y 1.0 · bp 1.0 · seo 1.0 · TBT 0 ms · desktop.**

**TBT 200 ms against a measured 0 ms is completely inert** — exactly as predicted at the plan gate.
*A bar that cannot currently fail proves nothing* (convention 14), so it ships as a **regression
floor**, named as such on `gate-19`'s face and in `bar_provenance.json`. ⛔ It was **not** silently
tightened to a desktop-derived number: inventing a bar is what `ratchet_law` reserves for an operator
gate. It also inherits `perfMin`'s form-factor caveat — TBT is a CPU-throttling metric, so 200 is a
**mobile-derived** number on **desktop** fixtures. Adopted anyway, because *a loose floor is harmless
where a wrong bar is not*.

⚠ **`seoMin` has ZERO headroom** (class bar 100, measured exactly 1.0) — any SEO regression reds
gate-19. The class's own choice, carried faithfully, named so a future red reads as *"a regression
happened"*, not *"we set the bar too tight."*
⚠ **a11y is deliberate redundancy, not new coverage** — `gate-4`'s axe pass at **zero violations** is
strictly stronger, and a Lighthouse a11y 95 can pass while axe fails.

## ⚠ FINDING 4 — a re-baseline that also moves the instrument cannot attribute what it measures

The re-baseline moved LH **13.4.0 → 13.4.1** (declared, pinned, asserted by G53g).
`/learn/concepts/knowledge-graph` read **perf 0.99 before and 1.0 after**, and **nothing here can say
whether that is the version, the machine, or the page.** Recorded as confounded rather than claimed
as an improvement — the campaign's attribution lesson, arriving in a measurement instead of a gate.

## ⭐ FINDING 5 — three harness defects, all caught by the harness's own discipline

1. `failing_set()` matched `G53[a-f]` and **could not see `G53g`** — every new case would have
   reported **NO RED**, i.e. *the harness silently blind to the very assertion it was extended to
   prove*. Caught before its first run.
2. **`G53c`'s coverage floor was `>= 2` against an actual 6** after adoption, so **four** counterparts
   could vanish with the limb still green. Raised to 6. ⇒ ***a coverage floor goes stale the moment
   its subject grows*** — raise it in the same commit that grows it, or the limb decays into a
   formality.
3. Two **declared red-sets** were stale for that same reason, and the harness reported them as
   **HARNESS BUG** rather than passing — which is the entire reason the sets are declared.

## Results

| Instrument | Result |
|---|---|
| Push | `60d0120..0362a00`, gitleaks clean, verified at the remote · unpushed **0** |
| Memos delivered | Hopper → `Git.aDNA/…/inbox/` · babbage → `Hardware.aDNA/…/inbox/`; byte-identical, stamped, **RESYNCed** |
| Re-baseline | 4 fixtures @ `lighthouse@13.4.1 --preset=desktop`, 4 categories + 3 audits + `configSettings` |
| `gate-19` | 3 bars → **7** (a11y · bp · seo · tbt adopted; `perfMin` held at 0.9) |
| `gate-53` | 6 → **7** assertions (**G53g** — the fixture asserts its own instrument) |
| Red-test | **15/15** (13 mutations + 2 controls), every case red at its **declared** set |
| Chromium suite | **660** (659 passed · 1 skipped) — was 659; delta isolated with `--list` |
| `html-validate` · vault gates 26·35·37·41 | **0** · **68/68** |

## SITREP

**Completed** — push GO; both memo deliveries incl. the pre-send staleness repair; the seven-surface
correction (`e60e7ad`); `gen_lighthouse_fixtures.mjs` authored; four fixtures re-baselined; the four
bars adopted; G53g added; red-test extended to 15 cases; this cascade.

**In progress** — none.

**Next up** — **Lane D** (story coverage, the Gate-1 order's last lane), unchanged and untouched by
this sitting. It has **no mission file**, is **content scope**, and needs an **⛩ audience/scope
decision before any copy is authored** (R-124 routes to that gate).

**Blockers** — none for Lane D. ⛔ Held: **P5.1** with the humans.

**Owed** — B1's ⛩ Speed-Insights → transport → first p75 · ~59 uncited capture PNGs untracked ·
babbage's **lease question** (an operator ruling, routed to
`idea_upstream_coordination_dropbox_doctrine`, commitment date 2026-09-30) · babbage's two upstream
findings still **proposed, not filed** (`skill_upstream_contribution` needs operator approval).

**Files touched** — created: this file · `site/scripts/gen_lighthouse_fixtures.mjs`; modified:
`gate-19-lighthouse-budget.spec.ts` · `gate-53-bar-provenance.spec.ts` · `bar_provenance.json` ·
`bar_provenance_redtest.sh` · 4 fixtures · both memo files · the six correction carriers ·
mission file · campaign `CLAUDE.md` · `STATE.md`.

## Next Session Prompt

You are **Rosetta** in `~/aDNA/aDNA.aDNA`. **`P4.4` is CLOSED** and the four `content_static` bars are
**adopted** (2026-09-02 addendum — not a reopening). The Gate-1 order's last lane is **Lane D — story
coverage** (`artifacts/grande_revue/battle_plan.md` §Lane D: D1 model routing · D2 token-budget
doctrine · D3 local models · D4 the ancient-DNA one-liner · D5 a "Latest" strip · D6 held under
embargo). It has **no mission file** and is **content scope**, so it needs an **⛩ operator
audience/scope decision BEFORE any copy is authored** — R-124 is routed there, and D4/D5 are
placement and design decisions, not paragraphs. Open with the standing conventions: **derive `main`'s
CI status** (`gh run list --workflow=gates.yml --branch main -L 5`, convention 19), **re-read
`/.well-known/adna-build.json`** (never quote a tree forward), and derive `origin/main` **at the
remote**. Then author the mission and run its **convention-13 pass COMPLETE, both directions, coverage
recorded**, before any budget is ratified — it has now paid for itself on eleven consecutive missions.
⚠ Baselines, each by its own command `[D] 2026-09-02`: chromium **660** · fast **542** · snapshot
**26** · all-projects **686** (= 660 + 26). ⚠ I typed *541* for the fast lane and it is **542** — `G53g` is not `@audit`, so it lands in that lane too. Caught by deriving instead of trusting the arithmetic (KW-14).
