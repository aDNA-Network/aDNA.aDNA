---
type: campaign_replan
campaign: campaign_haussmann
title: "HAUSSMANN Decade-2 re-plan — measured against live P0–P2"
owner: stanley
status: proposed   # ⛩ DP6 — awaiting operator ratification
created: 2026-08-19
updated: 2026-08-19
last_edited_by: agent_rosetta
grounded_in: "evidence/scoring/reconciliation_p2_6.md · artifacts/p2_6/decade2_premise_audit.md · artifacts/p2_6/gate_rebaseline.md · evidence/coldreads/coldread_synthesis_p2_6.md"
supersedes_scope_of: none   # first firing of DP6's recurring shape
tags: [campaign, haussmann, decade2, replan, dp6]
---

# HAUSSMANN Decade-2 re-plan

> **Ratification (§7.7) — PROPOSED, NOT ACCEPTED.**
> **Decision:** _pending_ · **Ratified-by:** _pending_ · **Date:** _pending_ · **Status:** **proposed**.
> *(Authored by agent_rosetta at P2.6 O2. Ratification is the operator's act at **DP6**; until it is
> signed, all twelve P3–P5 missions stay `queued-provisional` and no Decade-2 mission may execute.)*

> **What this is.** The charter holds Decade 2 provisional: *"P2.6's mid-campaign re-score recalibrates
> their scope, order, and budgets before Decade 2 opens,"* and the risk register names this re-plan as
> their activation gate. Decade 1 shipped nine missions; this document is what the measurement says to do
> next. **A note on path**: Storyweave put its three re-plans at its campaign-dir root; this campaign's
> own `CLAUDE.md` output contract says `artifacts/p<phase>_<n>/`. This file follows *this* campaign's
> contract, and the divergence is stated rather than silent.

---

## 1. Measured state

**Reconciled: 55.6 of 88 → 63.2/100 on eleven dimensions. Baseline recomputed on the same eleven: 44.4 of
88 → 50.5/100. Delta +11.2 weighted, +12.7 normalized.** D3 withheld. No 12-dimension composite is
published. Full table and method: [[reconciliation_p2_6]].

**1. The campaign's thesis is supported by the measurement.** D6, D7 and D8 each moved 2 → 3 — the
credibility stratum the charter identified as the binding constraint. The band that read *"8 FALSE claims
and a dead venue"* now reads *"claims mostly supportable, named humans, venue exists."* D1 moved 3 → 4,
corroborated independently by three fresh cold readers converging unprompted on the same one-sentence
answer, which they did **not** do at genesis. → **Therefore** the honesty-first strategy is working and
should not be re-litigated; Decade 2 continues it rather than pivoting.

**2. D9 did not move at all — and now fails for a different reason.** The contribution funnel is the one
dimension nine missions never touched. At baseline it failed on *"advertised mouth = two 404s."* It now
fails because the **"Contribute on GitHub" CTA points at the repo where `CONTRIBUTING.md` and
`CODE_OF_CONDUCT.md` both 404** (R-122), while both are 200 in the docs repo — **which has
`license: null` and no `LICENSE` file** (R-123), and is where "Edit this page" sends contributor PRs.
→ **Therefore** the funnel repair is small, high-leverage, and belongs early in P3, not late.

**3. Two Decade-2 premises died quietly; both shrink scope.** P3.1's *"29 old links point at the twins"*
is false — **zero internal `.md` links remain** (14 of 15 `.md` hrefs are GitHub blobs, the 15th is
`obsidian.md`, a domain). P3.2's *"no Organization JSON-LD anywhere sitewide, no sameAs"* is false — both
shipped at **P1.2** as a side effect of canonical-identity single-sourcing, uncredited. → **Therefore**
P3.1 and P3.2 both come down in budget; a re-plan that only grew scope would not have measured.

**4. Two premises strengthened.** F13's thin hubs are unresolved and gained a **fourth** instance —
`/reference/specification`, `h2=0`, bodyLen 1,504, **created by P2.3's own spec split**. And
`lighthouse_profiles.json` **exists nowhere in this vault**, so campaign convention 4 (*"read gate bars
from it, never transcribe"*) **cannot be followed today** and every gate-19 bar is transcribed — which is
what the convention forbids. → **Therefore** P4.2 and P4.4 both come up, and one of them owns fixing an
unfollowable standing rule.

**5. 487 gate assertions are green while 8 claim rows are open, with zero overlap.** Not one open row is
caught by any assertion. The classes: prose contradictions and invented anecdotes are not identifiers;
R-111 is an **absence**; R-122/R-123 are **off-site** and no gate probes the repos the primary CTA points
at; F20 ships a console error on every page and **no gate watches the console**. → **Therefore** three
new gate classes are cheap and belong in P4.4, and the campaign should stop treating a green suite as
evidence of anything but the absence of known identifier-shaped regressions.

**6. Roughly 0.8 points of the delta are the instrument moving, not the site.** Both scorers awarded D2
anchor 4 (*"search present and scoped"*) while both explicitly recorded that no site-wide search exists;
the baseline read the identical clause the opposite way. The registry search input dates to **Storyweave
P3 M3.1** — a previous campaign — so the feature was present under both scorings. The same conjunctive-
anchor defect caused the D5 divergence, where it was caught only because the reviewers disagreed. →
**Therefore** the filed **v1.1 instrument fix must land before P5.2**, where the defect would operate
across twelve dimensions instead of one.

**7. Five S2/S3 rows have no owner in Decade 2 as written**, and the nearest owner for the copy defects
is **P4.5 — which runs last by explicit sequencing rule** while **R-120 is an S2 self-contradiction in
the homepage's 30-second zone**. → **Therefore** the re-plan's single most consequential question is a
scheduling one, and it is put to the operator as **⊳ D-A** below rather than resolved by default.

**8. The evidence pack was out-run by both scorers.** A logged nine pack-vs-live divergences, B five, and
**every one favoured the site** — O0 refreshed captures, claims and machine-eye but not `sweep/`,
`inventory/` or `hypotheses_resolved.md`. → **Therefore** P5.2 refreshes **all** packets or states which
it did not, and its budget carries that.

---

## 2. The re-planned arc

Cadence unchanged: ship per mission, phase gates are human gates, AAR before `completed`, token budget
declared and actual recorded.

### P3.1 — Markdown twins + negotiation + a real corpus · **RESCOPED DOWN**

> Grounded in §1.3. Twins still 404 (**10/10** probed); llms-full.txt still 2,476 bytes wearing a corpus
> name; llms.txt still **0** refs in site HTML; `Accept: text/markdown` still serves HTML.

| Increment | Scope | Build target (confirmed on disk) | Risk / gate |
|---|---|---|---|
| a | `.md` twins for every doc/content URL + MCP-style pointer block | Astro endpoint per content collection | low — additive routes |
| b | `Accept: text/markdown` negotiation with distinct ETag | Vercel config + endpoint | medium — cache semantics |
| c | llms-full.txt becomes a real corpus **or is renamed honestly** | derive from the same build snapshot (KW-8) | low — the honest rename is an acceptable outcome |
| d | llms.txt linked in chrome + robots | layout + robots.txt | low |

**Dropped**: the "repair 29 dangling internal links" half — **already done** by P2.1/P2.2, uncredited.

### P3.2 — Registry as data · **RESCOPED DOWN**

> Grounded in §1.3. `Organization` + `sameAs` shipped at P1.2 (`seo.ts:11` says so in its own comment).

Remaining: versioned public JSON endpoint (4 obvious paths still 404) · `Dataset` on the registry ·
schema-dts in the build · the three zero-JSON-LD pages · endpoint derived from the same build snapshot as
the HTML (zero drift, KW-8).

> **⊳ Sub-decision (record at ratification).** The shipped Organization is nested as `WebSite.publisher`,
> not a top-level entity. **Recommendation: accept it as satisfying the Organization half** and spend the
> saved budget on the endpoint. The alternative — hoisting it to top-level — is schema purism with no
> reader or crawler benefit anyone has demonstrated.

### P3.3 — MCP server · **KEEP UNCHANGED**

Premise intact: `/.well-known/mcp.json` → 404, no MCP surface exists. The most build-heavy P3 mission;
`opus`, 2 sessions, `human_gate: true` (npm publish is an operator act). Untouched by the measurement.

### P3.4 — Community integration · **KEEP, still doubly contingent**

DP7 already **fired early by operator override at P1.1** — the `/community` link shipped with
prerequisites unmet. The formal GO/NO-GO is still owed. Its prerequisite register re-probes at execution.
ADR-025 (human-only) and Fluxer SO#8 constraints unchanged.

### P3.5 — Proposal process **+ the funnel repair** · **RESCOPED UP**

> Grounded in §1.2. D9 is the only dimension the campaign has not moved.

Absorbs **R-122** (point the CTA at a repo that has the contributor docs, or put the docs in the repo the
CTA points at) and **R-123** (license the docs repo). Original scope — ADR-055 numbering law, the
constitution page, the numbered archive + JSON index, proposal #1 filed through the process itself —
unchanged.

> **⊳ Sub-decision D-D (operator, legal).** `aDNA-Network/aDNA.aDNA` has **no license**, and "Edit this
> page" routes contributor PRs into it. **Recommendation: MIT, matching the image repo.** This is
> flagged `#needs-human` — choosing a license is not an agent's call, and inbound contributions under no
> stated terms is the one finding in this batch with a legal edge rather than an editorial one.

### P4.1 — Tokens + visual voice · **KEEP UNCHANGED**

DP8 / ADR-053 pending. Untouched by the measurement.

### P4.2 — Craft floor · **RESCOPED UP**

Absorbs **F19** (the thin-hub class is now **4** instances, one created by P2.3 — bring to budget or
merge) and **F20** (the failing `JetBrains Mono Variable` face; the `format('woff2-variations')`
hypothesis is `[I]` and **untested** — the mission tests it rather than assuming it). Original scope — 57
locks, ~964 markup errors in 5 systemic classes, html-validate in CI, design-system regeneration,
diagram construction rules — unchanged. Still the only P4 mission with `human_gate: false`.

### P4.3 — Accessibility beyond automation · **KEEP, condition half-discharged**

The baseline's D11 CONDITIONAL PASS required *"adjudicate/fix F2 + run a real manual pass."* **F2 is
fixed** (P1.4, computed-geometry proofs + gate-29), so half is discharged and D11 moved 2 → 3. The
**manual half has never been run** — no AT traversal, no keyboard pass, no VoiceOver session — and D11's
PASS is automated-scope-only until it is. Unchanged scope; the qualifier is now explicit.

### P4.4 — CI hardening · **RESCOPED UP**

> Grounded in §1.4 and §1.5. The gate suite is green and structurally blind to eight open rows.

Adds three gate classes: a **zero-console-error gate** (F20 shipped through 487 assertions unseen) · an
**off-site CTA-target gate** (probe the repos the site's CTAs point at for CONTRIBUTING / CoC / LICENSE —
R-122/R-123 were invisible because every gate asserts against the built site) · a **hub-substance floor**
(F19). Also **fixes campaign convention 4**: mirror `lighthouse_profiles.json` into
`how/federation/webforge/`, or amend the convention to say what is actually possible. Original scope —
visual-regression gate, field p75 via Speed Insights, Unlighthouse sweep, CWV ratchet — unchanged.

### P4.5 — The voice rewrite · **KEEP, but see ⊳ D-A**

Runs last by explicit HQ/Berthier sequencing. Scope unchanged — **except** that R-120 and R-121 are
currently parked here, which is the subject of the scheduling decision below.

### P5.1 — Human evidence · **KEEP, and now better-equipped**

Two reinforcements from this mission. The clinician cold-reader read *"aDNA"* as **ancient DNA**, the
standard abbreviation in her field — a second synthetic signal that the **DP2-waived human panel** is
worth running. And **O0b proves the TTFS kit**: if it produces a number, P5.1 inherits an exercised
instrument instead of an unexercised one.

### P5.2 — Full re-score + capstone · **RESCOPED UP**

Carries two additions: the **v1.1 instrument fix** must land **before** it (§1.6), and it refreshes
**every** evidence packet or states which it did not (§1.8). Plus the full 12-dimension composite, which
is publishable only once D3 has a number.

### Exit gate (unchanged)

Zero S1 · zero FALSE claims · both binary gates green **with field evidence** · capstone ranker ≥ 4.95 ·
DP9 launch GO.

---

## 3. ⊳ Sub-decisions for DP6

Each is drafted with a recommendation; the operator's ruling gets stamped in place.

**⊳ D-A — the scheduling problem. THE consequential one.**
R-120 (S2, homepage self-contradiction, 30-second zone) and R-121 (S3) sit in copy. The nearest owner is
**P4.5, which runs last**. Options:
- **(i) Insert a small early copy mission** — surgical fixes for R-111/R-120/R-121/R-124, ~60–100 kT.
  **⚠ This changes `mission_count: 27`, which sits inside ratified §7.7 text — it is a charter amendment
  and therefore explicitly the operator's act, not this artifact's.**
- **(ii) Bend the sequencing rule** — let P4.5 take the four S2/S3 copy rows early as a first increment,
  leaving the full rewrite last. Count unchanged.
- **(iii) Let them ride to P4.5** — defensible only if recorded as a deliberate, dated choice.
- **Recommendation: (ii)** — it fixes an S2 in the highest-traffic surface without amending ratified text,
  and the sequencing rule's purpose (rewrite voice after structure settles) is not violated by four
  surgical corrections.

**⊳ D-B — ADR-057's status.** It reads `status: proposed` while its own Status section says *"ratified
with the charter at Gate C"* and the operator-signed §7.7 says *"adopted with the charter."*
**Recommendation: confirm the Gate C signature covered it**, then the field flips to `accepted` with a
4-field ratification block. Flagged because the campaign measures itself under this regime.

**⊳ D-C — "Lattice Protocol" in the hero.** Named in the 30-second zone, defined **nowhere** (glossary 0
mentions; `/glossary/lattice` 404). Two of three cold readers flagged it. The **counsel embargo** forbids
defining it. **Recommendation: remove it from the hero until the embargo lifts** — a term you may not
explain does not belong in the first sentence a stranger reads.

**⊳ D-D — the docs-repo license.** See P3.5. **Recommendation: MIT.** `#needs-human`.

**⊳ D-E — campaign convention 4.** `lighthouse_profiles.json` is unreachable from this vault, so the rule
is unfollowable and every gate-19 bar is transcribed. **Recommendation: mirror the file at P4.4**; amend
the convention only if Vitruvius declines the mirror.

**⊳ D-F — DP5's Option C revisit.** The charter parks it here by name. The IA consolidation shipped as
Option A; D2 moved 3 → 4; both cold readers navigated without complaint. **Recommendation: close C as
not-needed**, rather than carry a permanently open revisit.

**⊳ D-G — the DP-P2.4 740-scale mechanism.** Deferred at P2.4 with `scales at 10×` recorded **UNMET**.
Both scorers independently confirmed it: no sort, no pagination, one ~7,268 px page at 74 items.
**Recommendation: keep deferred**, and set the revisit trigger at a real number — **the first time the
registry exceeds 150 entries** — rather than leaving it open-ended.

**⊳ D-H — `calibrated_sessions`.** The charter's field is empty with the comment *"calibrate at the P2.6
mid-campaign re-score."* **Decade 1's actual: 16 sessions** (genesis through the P2.5 wind-down, counted
from `how/sessions/history/2026-08/` `[D]`) for 9 missions. P2.6 is 2 more. Decade 2 as re-planned is 12
missions / **~2,360–3,620 kT** / **~17–22 sessions** (summed from the per-mission session counts in §4).

**Recommendation: `calibrated_sessions: "35-40"`** = 16 actual + 2 + 17–22. That sits **inside the
charter's original 37–50 estimate, at its low end** — the estimate holds, which is worth recording as a
result rather than a relief.

---

## 4. Per-mission execution (SO#11 + Governance Doctrine §Model-Tiered)

| Mission | Disposition | `executor_tier` | `token_budget_estimated` | Tier rationale |
|---|---|---|---|---|
| P3.1 twins | **rescoped down** | sonnet | **~140–200 kT** *(was 180–260)* | mechanical route/endpoint work |
| P3.2 registry JSON | **rescoped down** | sonnet | **~90–140 kT** *(was 120–180)* | schema + endpoint, half already shipped |
| P3.3 MCP server | keep | **opus** | ~250–350 kT | new protocol surface, published artifact |
| P3.4 community | keep | **opus** | ~150–250 kT | DP7 judgment + constraint-heavy copy |
| P3.5 proposals **+ funnel** | **rescoped up** | fable | **~230–330 kT** *(was 200–300)* | governance authoring + the D9 repair |
| P4.1 tokens/voice | keep | fable | ~250–400 kT | DP8 design judgment |
| P4.2 craft floor | **rescoped up** | sonnet | **~230–340 kT** *(was 200–300)* | high-volume mechanical + F19/F20 |
| P4.3 a11y manual | keep | **opus** | ~150–250 kT | AT interpretation; + operator VoiceOver time |
| P4.4 CI hardening | **rescoped up** | sonnet | **~220–330 kT** *(was 180–280)* | three new gate classes + the profiles mirror |
| P4.5 voice rewrite | keep *(⊳ D-A)* | fable | ~250–400 kT | dual-audience judgment |
| P5.1 human evidence | keep | **opus** | ~120–200 kT | + operator recruitment time |
| P5.2 re-score+capstone | **rescoped up** | fable | **~280–430 kT** *(was 250–400)* | + v1.1 instrument + full packet refresh |

**Decade-2 total: ~2,360–3,620 kT across ~17–22 sessions** — against ~2,300–3,570 as chartered, a net
change of **+60 / +50 kT**. Two missions shrank, four grew, and the two roughly cancel. **`mission_count`
stays 27** unless ⊳ D-A (i) is chosen.

> Both totals here are **summed from the table above**, not carried. The first draft of this section
> published *"~2,290–3,440 kT across ~16–21 sessions"* and *"~14 sessions"* for Decade 1 — all three
> wrong, by 70/180 kT and by two sessions respectively. This is the **third** time in this one mission
> that a typed derived figure went stale or wrong (the register's §8.3, then §8.6, now this), which is
> less a run of bad luck than evidence that the rule has to be mechanical: **derive the number in the
> same act that publishes it, and count last.**

**Order** (sequencing law: positioning → IA → visual craft; P3.1+P3.2 precede P3.3; P4.1 precedes P4.2;
P4.5 last): **P3.5 → P3.1 → P3.2 → P3.3 → P3.4 → P4.1 → P4.2 → P4.4 → P4.3 → P4.5 → P5.1 → P5.2.**
P3.5 moves **first in P3** — D9 is the only unmoved dimension and its repair is small.

---

## 5. Cadence, guardrails, routed, deferred

**Guardrails unchanged**: honesty is the aesthetic; claims move down to verifiability; every narrated
count derived, not typed; pt19 honored; cross-vault writes are memos; provenance tags on every finding.

**Routed (non-blocking)**
- **v1.1 instrument fix** — before P5.2 (§1.6). Five filed anchor defects; the conjunctive-bundle split
  rule is the load-bearing one.
- **The missing production crawler** — `scripts/crawl_haussmann_b1.mjs` was run from a scratchpad at
  genesis and is gone; O0's inventory refresh had no instrument. Re-author before P5.2's full pack refresh.
- **Probe discipline** — `grep -c` counts lines not occurrences on served HTML; string presence ≠ entity
  presence in JSON-LD; derived counts must be **counted last**. All three cost this mission real time.
- **Subagent isolation is bounded** — the harness auto-injects governance files; the protocol now says so
  rather than claiming absolute freshness.
- **R-124** (no clinical/regulatory posture while `/` says *rare* ×15) — needs an audience decision before
  it needs copy. Not assigned; surfaced.
- **Evidence-commit discipline is inconsistent across missions.** **187 untracked PNGs** sit under
  `evidence/` in six per-mission capture dirs, in a mixed state — `captures_p2_2` has 36 files and **0**
  tracked, `captures_p1_2` has 49 and 9, `captures_p2_3` has 36 and 37 `[D]`. P2.6 gitignored its own raw
  sweep and committed only the report plus the curated set, following the baseline's pattern; the other
  five missions each did something different. The cost is not disk — it is that `git status` is
  permanently noisy, which is **how 27 stranded *curated* captures went unnoticed until this mission**,
  18 of them cited by a markdown file and absent from the repo. **Not fixed here**: it touches five other
  missions' evidence, and rewriting another mission's record without a mandate is the scope creep this
  campaign guards against. One convention, applied once, at whichever mission the operator assigns it.

**Deferred (horizon)**
- The 740-scale registry mechanism (⊳ D-G).
- Federation / community GA — outside this campaign.

---

## 6. Handoff

**On ratification (DP6 signed):**
1. Flip the five P3 missions from `queued-provisional` → `queued`; P4/P5 stay gated transitively.
2. Apply the ⊳ rulings in place in this file, and stamp the §7.7 block above.
3. Write the ruled budgets/tiers into each mission's frontmatter; set `calibrated_sessions` in the charter.
4. Author **P3.5** in a fresh session (first in the new order).
5. **O0b remains outstanding and is unaffected by this gate** — the TTFS run, D3's closure, R-34/R-63's
   discharge, and the `/get-started` transcript fold are session-2 work either way.

**Not ratified / revise:** fold the operator's redirect into §2 and §3 and re-surface at a second DP6
firing. DP6's status reads *"pending (recurring shape)"* precisely because this gate is expected to fire
more than once — Storyweave's fired three times.

**Nothing in Decade 2 executes until this is signed.**
