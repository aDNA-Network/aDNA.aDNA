---
plan_id: mission_haussmann_p4_5_voice_rewrite
type: plan
title: "P4.5 — Copy increment (P4.5a, runs FIRST) + the voice rewrite (P4.5b, deliberately last)"
campaign: campaign_haussmann
phase: P4
decade: 2
owner: stanley
status: in_progress   # ⛩ DP6 RATIFIED 2026-08-19 — activated AND SPLIT by ⊳ D-A. P4.5a = the early copy increment (R-111 · R-120 · R-121 · R-125 [the ⊳ D-C hero cut, registered 2026-08-20]; R-124 DEFERRED OUT at execution per its own escape hatch), which runs FIRST IN DECADE 2, ahead of P3.5. P4.5b = the full voice rewrite, still LAST. One mission, two increments — mission_count stays 27. P4.5a COMPLETE 2026-08-20 (6/6 acceptance criteria; shipped tree=bb00464, pushed a8cc707..e4f0d65). Set in_progress 2026-08-20 when P4.5a opened; it CANNOT reach `completed` until P4.5b also closes with its AAR (SO#5).
mission_class: design_excellence
executor_tier: fable
token_budget_estimated: "~320–490 kT total across 3 sessions, SPLIT into two increments at ⛩ DP6 2026-08-19. P4.5a ~120–170 kT in 1 session: the copy rows (R-111 · R-120 · R-121 + the ⊳ D-C hero cut) each gate-anchored and red-proven per the same-diff law, PLUS two items the ratified figure could not know about — registering R-125 (the hero finding had no register row) and authoring this increment's own spec (P4.5a had none; the body below was 100% P4.5b). P4.5b ~200–320 kT across 2 sessions: voice guide + corpus rewrite passes (top surfaces first) + glossary-linking + reading-level gates + dual-audience reviews. REVISION HISTORY, so no figure is quoted forward blind: unsplit ~250–400 kT → split at DP6 to P4.5a ~70–110 + P4.5b ~200–320 = ~270–430 → P4.5a raised to ~120–170 at execution 2026-08-20 on discovered scope (ADR-016/SO#11: a budget that no longer matches its scope is a drifted number). The overrun against the ratified ~70–110 is STATED, not absorbed, and is reported estimate-vs-actual in the AAR."
token_budget_actual: "P4.5a ≈195 kT (content load, rough per SO#11) — vs ~120–170 revised in-field and ~70–110 ratified at DP6. ~1.8× the ratified figure, inside SO#11's 2× retrospective trigger. The delta is O-A (registering R-125 + re-deriving the register) + O-B (authoring the spec that did not exist) + R-126, none of which the ratified figure covered. P4.5b unstarted."
created: 2026-08-16
updated: 2026-08-25   # 2026-08-25 ⏸ **P4.5b OPENED AND IS HALTED AT ITS ⛩ PRE-BUILD GATE — nothing built, budget NOT re-ratified.** Convention 13 ran **COMPLETE at 22/22 with coverage recorded** (16 AC×V + 6 AC×AC) → `artifacts/p4_5b/ac_amendment_proposal.md`, **`proposed`**: **3 failures · 2 structural gaps · 1 stale amendment · 4 premise corrections**; 5 ACs proposed (AC-e new), V2 amended, V5 added, budget **~280–400 kT / 2–3 sessions**. ⭐⭐ **The pass was run in BOTH directions and only the reverse found the worst defect: AC-a is covered by ZERO verification limb** — all four V limbs measure rendered pages, AC-a's deliverable is a governance document, and **nothing binds the rewrite to the guide**; P4.1's structural gap inverted. ⭐⭐ **G-10 MEASURED: agent-authorship disclosure is NOT absent, it is MISPLACED** — 41 pages name a persona, **4** disclose, and the one saying *"tended by"* without disclosing is **`/`** (surface `dist/**/*.html`, tree `6675442`); the AC's own caution about its 3-phrase source grep was right — **third instance of a negative result narrower than its conclusion**. ⭐⭐ **The clinician list has the SAME shape twice**: *"ancient DNA"* is addressed on 4 deep pages and **none of `/`, `/learn`, `/get-started`, `/about`** ⇒ two items are **content in the wrong place**, both converging on the homepage — which is also the worst first-contact measurement (**13.90** vs target 10). **Three independent instruments point at one page.** ⭐ **The charter's FKGL figure cannot serve as the *before*** (scratchpad corpus **verified absent**, ~11 missions stale, **`/` never measured**) → re-baselined over P3.1's **`.md` twins**, `evidence/sweep/reading_level_p4_5b_baseline.md`; the 08-16 file annotated **superseded, retained** (SO-6). ⭐ **Top-20 DERIVED — exactly 20 routes are linked from every page (226), then a cliff to 141 — and it contradicts AC-b, which names `/learn/what-is-adna` at rank 21**; operative scope **21 = top-20 ∪ the four named**. ⭐ **Fourth consecutive re-probe shrinking scope**: `/get-started` **9.69, already meets AC-b**; **3 of the clinician's 10 items are dead**; live scope **7**, of which **C8 is 75 pages from ONE component line**. ⚠ **AC-a's freeze amendment is STALE UPWARD** — the freeze lifted 08-25, so publication becomes required, not owed (**G-5's inverse: a criterion that now under-claims**). ⚠ `/vaults` reads **40.96** as a list-shape artifact (3 of 223 twins) → `gate-48` shape guard. ⚠ Tier divergence declared at the OPEN: mission says `fable`, this session ran **`opus`**. ⛩ **HALT until the operator signs the guide + the amendment.** Authored: `what/doctrine/doctrine_site_voice.md` (`proposed`).
last_edited_by: agent_rosetta
grounded_in: ["P4.5a — claim_register.md §8.1 R-111, §8.5 R-120/R-121, §9.1 R-125, §9.3 R-124 deferral, §9.7 R-111 narrowing", "P4.5a — p2_replan.md ⊳ D-A (:243-267) + ⊳ D-C (:280-291) + §2 scope block (:195-217)", "P4.5b — H10 quantified (FKGL 12–17.9 ×6)", "P4.5b — Berthier standing finding (3 campaigns; 'a writing problem wearing a design problem's clothes'; sequence LAST)", "P4.5b — clinician jargon list (verbatim)", "P4.5b — anti-pattern 7.6 (one new term/paragraph)", "P4.5b — skill_dual_audience_review", "P4.5b — ADR-048 voice seed"]
vitruvius_dimensions: [D6, D1, D7]
decade_theme: craft
webforge_patterns: []
patterns_to_author: []
depends_on: [mission_haussmann_p0_1_positioning, mission_haussmann_p2_2_ia_consolidation, mission_haussmann_p2_6_midscore]
depends_on_note: "⚠ DIVERGENCE RESOLVED IN FAVOUR OF THE CHARTER, 2026-08-20. The charter's P4 table (campaign_haussmann.md:215) gives P4.5a `deps: P0.1` only; this field lists three. Read literally the P2.6 dependency would block the ruled FIRST mission of Decade 2, because P2.6 is `in_progress` behind ⛩ O0b. Both DP6 and p2_replan.md:506 state O0b/P2.6 do NOT block Decade 2. Operative reading: P4.5a depends on P0.1 only (positioning is ratified, ADR-048 accepted at DP2). P4.5b keeps all three — its voice guide genuinely needs P2.2's settled IA and P2.6's re-score. Recorded rather than left as two files disagreeing."
blocks: []
acceptance_criteria:
  - "P4.5a — R-120 resolved: the homepage 30-second zone no longer tells a first-time reader that their context both stays on their machine and is shared in the open; the referent of every promise in that paragraph is unambiguous read literally, which is how a stranger reads it"
  - "P4.5a — R-125 (⊳ D-C) resolved: 'Lattice Protocol' absent from the hero on ALL FOUR surfaces that share the HomeHero component (/, /network, /commons, /vaults), replaced with term-free phrasing that keeps the path to the spec; the cut is reversible at D-8 and gate-anchored so it cannot silently revert while the embargo stands"
  - "P4.5a — R-111 resolved on its live scope (/canonical-properties, per §9.7): the Rare Archive row carries the related-party disclosure its two sibling pages already carry, so a reader comparing the three pages finds no conflict the site itself supplied"
  - "P4.5a — R-121 resolved: /learn/what-is-adna no longer presents an unsourced hypothetical (200 files, three days) under a 'Before and after' heading as though observed"
  - "P4.5a — R-124 dispositioned IN WRITING rather than fixed or dropped: deferred with its reasoning recorded (§9.3), because routing it requires authoring a clinical posture and that is a positioning decision nobody has taken"
  - "P4.5a — every shipped row gate-anchored and RED-PROVEN by mutation; suite green with zero xfail; live probe red against production before the deploy and green after; register §9.6 tally restated against what actually shipped, not assumed forward"
  - "P4.5b — A voice guide IN THE TREE (registers + the transition rule between lyric and technical strata + tense discipline + the one-new-term law), verified against a local preview, with PUBLICATION NAMED AS OWED and its unblock condition (freeze release) on this mission's face — NEVER CLAIMED. ⛩ AMENDED BY THE FREEZE SWEEP 2026-08-24 (artifacts/p4_3/freeze_sweep.md): the original said 'A published voice guide', the FOURTH sighting of a criterion requiring a deploy under a freeze that lifts on another machine (P4.2 AC3 · P4.4 AC2 · P4.3 AC5 · this). ⚠ G-10 ROUTED TO THIS MISSION'S OWN PRE-BUILD GATE, NOT RESOLVED HERE: the original also called this 'the D6 anchor-5 item', but D6 anchor 5 has THREE conjuncts [D] — 'a published voice guide, a claim register maintained as an artifact, and agent-authorship disclosure' — so two of them are gated by no criterion. Unlike P4.3's G-8 this is NOT a ceiling overclaim: the claim register already exists as a living artifact (evidence/claims/claim_register.md), and agent-authorship disclosure is UNVERIFIED — a 3-phrase grep over site/src/pages/** only returned no hits, which is a statement about that grep and not about the site (conventions 16 + 17)."
  - "P4.5b — Top-20 pages rewritten to targets: FKGL ≤ 10 on first-contact surfaces (home, get-started, what-is-adna, community), ≤ 12 on reference intros; every proprietary term glossary-linked at first use"
  - "P4.5b — The clinician's verbatim confusion list resolved item-by-item (each phrase rewritten, defined-in-place, or cut)"
  - "P4.5b — reading_level.mjs thresholds wired as a non-blocking CI report (trend visible); skill_dual_audience_review passed on every rewritten page"
verification_method: "P4.5a — live probe red-proven against production pre-deploy then green post-deploy; each new gate assertion mutation-proven (mutate → observe fail → revert); register tallies re-derived by script at close. P4.5b — reading-level deltas + dual-audience review records + synthetic cold-read re-test + ranker"
human_gate: true   # ⚠ SCOPED 2026-08-20. This flag was inherited from the UNSPLIT mission, where the gate was O0's voice-guide sign-off — an O0 that P4.5a does not have, and no DP is attached to P4.5a. It belongs to P4.5b. P4.5a's operator gate is the outward-acts GO (deploy + push), given at planning 2026-08-20.
tags: [plan, haussmann, p4, voice, jargon, copy_increment]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> **This file carries TWO increments** (⛩ DP6 ⊳ D-A). **P4.5a runs FIRST in Decade 2**; **P4.5b runs LAST.**
> They are one mission because `mission_count: 27` sits inside ratified §7.7 text and a split increment is
> not a new mission — option (i), which would have amended that text, was explicitly the operator's to take
> and they declined it. Read the increment you are executing; do not read them as one sequence.

---

# P4.5a — the early copy increment (RUNS FIRST IN DECADE 2)

## Why this increment exists, and why it jumped the queue

Four register rows sit in copy, and copy's nearest owner is P4.5, which runs last. One of them — **R-120** —
is an **S2 self-contradiction in the homepage's 30-second zone**: the site promises *"nothing leaves your
machine"* and, two sentences later, that your context is *"shared in the open"*. The grammatical subject of
the second is **"Your context"**. Read literally — how a first-time reader reads — the site promises your
notes stay local and are published, in consecutive sentences. A clinician cold-reader called the pair
**disqualifying on its own** for anyone holding patient notes.

⊳ D-A ruled that increment to the **front of the whole decade** rather than leave the contradiction live
through eleven missions. **The sequencing law was bent once, deliberately, and in writing** — the law exists
so voice is rewritten *after* structure settles, and four surgical corrections to demonstrably-wrong
sentences do not depend on structure settling. The law's purpose survives; its literal ordering does not.

## Scope — five rows in, one row out

| Row | Sev | Surface | What is wrong |
|---|---|---|---|
| **R-120** | S2 | `/` hero paragraph | The local-vs-public contradiction, two sentences apart in the 30-second zone |
| **R-125** | S2 | `HomeHero` — `/`, `/network`, `/commons`, `/vaults` | *"Lattice Protocol"* named in the fold, **defined nowhere**; the counsel embargo forbids defining it, so it is **cut, not explained** (⊳ D-C) |
| **R-111** | S2 | `/canonical-properties` | The Rare Archive filed under *"not ours"* / *"not controlled by it"* with **no related-party disclosure** — while `/about` and `/state-of-the-network` both carry one |
| **R-121** | S3 | `/learn/what-is-adna` | An unsourced hypothetical (*200 files*, *three days*) under a **"Before and after"** heading |
| ~~R-124~~ | S3 | `/privacy` + `/security` | **DEFERRED OUT at execution** — see below |

**R-124 is deferred, and that is a deliverable, not an omission.** The re-plan attached an escape hatch:
it *"needs an audience decision before it needs copy"*, and must not be *"silently fixed with copy that
presumes an answer nobody has given."* Assessed at execution: §8.5 frames the defect as *"routing, not
policy"*, but routing needs a destination and **no page on the site answers the question**, so any fix must
**author** the posture. Authoring it answers *"is this site for clinicians handling patient data?"* — a
positioning claim on ADR-048 / P0.1 ground. It leaves the increment **open at S3** with the reasoning
recorded at `claim_register.md` §9.3.

**Two rows deliberately NOT in scope**: R-122 and R-123 (the contribution-funnel 404s and the unlicensed
docs repo) belong to **P3.5**, the next mission in the ruled order. A planning-time probe re-verified both
against the live GitHub API and is logged in the session file so P3.5 inherits evidence rather than
repeating the probe.

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O-A | Register the ⊳ D-C hero finding — it was held back at O0c-a pending the DP6 ruling and had **no register row**. Re-probe at execution, assign severity, supersede the "not registered" paragraph, re-derive counts by script | register §9 | — |
| O-B | Author this increment's spec — P4.5a had none; this file's body was 100% P4.5b | this section | — |
| O-C | Execute the four rows; disposition R-124 in writing | site changes | — |
| O-D | Gate-anchor + red-prove each row; suite green zero xfail; axe 0 both themes; live probe red-proven pre-deploy | gates + probe | — |
| O-E | Deploy, changelog, push | live site | ⛩ operator GO |
| O-F | Restate the register tally against what shipped; AAR | AAR | — |

## Constraints

- **The counsel embargo binds the hero cut** (campaign convention 9): *"Lattice Protocol"* is **removed,
  never defined and never linked to protocol material**. The cut is reversible the moment counsel rules at
  D-8 — which is why it is gate-anchored rather than merely deleted.
- **Claims move DOWN only** (convention 1). This increment removes and qualifies; it authors no new claim.
- **Same-diff law, ADR-057** (convention 7): each fix lands with its gate assertion in the same commit —
  and after removing a defect, **grep the *rendered* output for what the defect claimed**, not just for the
  artifact that claimed it. R-118/R-119 is the cautionary instance: a fabricated transcript was cut while
  the identical false mechanism stayed asserted twice in surrounding prose.
- **`gate-23` is coupled to R-125 and must be INVERTED, not deleted.** It currently *requires* the exact
  sentence being cut (`.hero-trust-links` must contain *"opening progressively"*). Its second half is the
  regression guard on **R-14**, a resolved FALSE claim — deleting the test to make the cut pass would
  silently drop that guard.

## Definition of done

A stranger reading the first screen is told one thing about where their files live, not two contradictory
things; no term in the fold is unexplainable; the page that exists to prove the site is honest is itself
honest about the operator's affiliations; and nothing on the site presents an invention as an observation.
Every one of those is asserted by a gate that has been proven to fail without the fix.

## Session opening prompt

> You are Rosetta in `~/aDNA/aDNA.aDNA`. Execute **P4.5a** — the copy increment of
> `mission_haussmann_p4_5_voice_rewrite.md`, the **first mission of Decade 2** (⛩ DP6 ⊳ D-A; **not P3.1** —
> phase order is no longer claim order). Open this mission + campaign `CLAUDE.md` + `claim_register.md`
> §8.1/§8.5/§9. Rows: **R-120 · R-125 · R-111 · R-121**; **R-124 is deferred** — do not fix it with copy.
> Cut *"Lattice Protocol"* from all four `HomeHero` surfaces with term-free replacement phrasing; **invert
> gate-23, never delete it**. Red-prove every assertion. Outward acts are operator-gated.

## Progress

**P4.5a COMPLETE 2026-08-20**, one session, commits `615b2c8 → e4f0d65`, **pushed** `a8cc707..e4f0d65`
(gitleaks clean). **Deployed** `deploy_record: 2026-08-20T20:05:44Z mode=prod tree=bb00464` — 221 pages,
headers **4/4 live, no drift**.

| O | Result |
|---|---|
| O-A | ✅ `615b2c8` — R-125 registered (S2); R-111 **narrowed** to `/canonical-properties` alone; R-124 deferred in writing; counts re-derived; three stale derived figures corrected |
| O-B | ✅ `2deedf0` — this spec, which did not exist; stale session-prompt index repaired |
| O-C | ✅ `0c13f03` — four rows fixed |
| O-D | ✅ `0c13f03` — suite **487 → 495** green zero xfail; axe **0** on 6 surfaces × both themes, 0 console errors; every new assertion **red-proven** by mutation; live probe **red-proven 12/14 pre-deploy** |
| O-E | ✅ `bb00464` + `e4f0d65` — changelog written deliberately; **R-126 found and fixed**; deployed; live probe **26 PASS / 0 FAIL**; pushed |
| O-F | ✅ this record |

**Acceptance criteria: 6 of 6 met.** R-124's criterion was *"dispositioned in writing rather than fixed or
dropped"* — met by deferral with reasoning (register §9.3), which is what the criterion asked for.

## AAR — P4.5a increment (SO#5)

> The **mission** AAR is still owed and lives below; P4.5 cannot reach `completed` until P4.5b closes.
> This is the increment record.

**Worked.** Re-probing every inherited row at execution instead of quoting it forward. It cost minutes and
changed the mission twice: R-111 shrank from two surfaces to one, and R-124 left the scope entirely. The
red-prove-before-deploy discipline also paid twice over — the pre-deploy probe was **12 PASS / 14 FAIL**,
and the 12 passes are what make it an instrument rather than a thing that fails at everything.

**Didn't.** The ratified budget (~70–110 kT) was wrong before the session began, because neither the
missing spec nor the unregistered R-125 was known when it was set. Revising it in-field was right, but the
deeper miss is that **DP6 ratified a budget for a mission whose spec nobody had checked existed** — the
split was recorded in three places and implemented in none.

**Finding.** *The same-diff law has a mirror nobody had written down: a gate can be coupled to the defect.*
`gate-23` **required** the exact sentence ⊳ D-C ruled must be cut. The obvious repair — delete the failing
test — would have silently removed its second half, the regression guard on **R-14**, a resolved FALSE
claim. The gate had to be **inverted, not deleted**. Same-diff says *update the gate that hardcodes what
you changed*; this adds: **check what else that gate was holding up.**

**Change.** Two, both landed. Gate-23's hero assertion is now an absence check across all four HomeHero
routes with the R-14 guard split into its own test, so neither can take the other down. And
`session_prompts_haussmann.md` carries a standing warning that it is ordered by mission number and **not**
by execution order — the index that told this session to run "deliberately last" was the second recurrence
of *the index believed over the artifact*.

**Follow-up.** (1) **R-124** needs an audience decision before any copy — operator to route. (2) **The
vendored tour page publishes protocol material** the counsel embargo covers, through a pipeline no copy
review sees by construction; not a copy fix, so routed rather than actioned (register §9.1). (3) **gate-26
cannot express "a retired claim must stay gone"** for a row that was never FALSE — filed for P4.4. (4) The
register's row-count **parse is undocumented**; two defensible readings differ by 2 rows — also P4.4.

**Budget.** Estimated ~120–170 kT after in-field revision (ratified figure was ~70–110). Actual **≈195 kT**
by content load — over the revised estimate by ~15%, over the ratified one by ~1.8×, which stays inside
SO#11's 2× retrospective trigger. The overrun is O-A + O-B (register + spec) plus R-126, none of which the
ratified number covered. Recorded, not absorbed.

## AAR (SO#5) — the MISSION

*(before the MISSION reaches `completed` — which requires P4.5b as well)*

---

# P4.5b — the voice rewrite (DELIBERATELY LAST)

## Why this increment exists

The standing cognitive-accessibility finding, now quantified (FKGL 12–17.9 on every key page) with verbatim reader casualties `[D sweep/coldreads]`. It runs LAST by explicit HQ sequencing: rewriting before the claim purge, IA, and positioning would mean rewriting twice. *(⊳ D-A bent this once, for P4.5a's four surgical rows only — the full rewrite's position is unchanged, and that ordering is what the sequencing rule actually protects.)*

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | Voice guide (from ADR-048 seed + the honest-register house style already proven on /about) | guide | ⛩ operator |
| O1 | Rewrite pass 1: first-contact surfaces (home/get-started/what-is-adna/community) to targets; glossary-link first uses | rewrites | — |
| O2 | Rewrite pass 2: top-20 remainder + the clinician-list closure | rewrites | — |
| O3 | CI reading-report + dual-audience reviews + synthetic re-test + ranker; AAR | evidence + AAR | — |

## Constraints

The lyric register is not banned — it is *placed* (the transition rule); claims never round up during rewrite (editorial gate watches); the glossary is the single canonical definition home (D4.7).

## Definition of done

A newcomer reads the first screen without a dictionary; a developer still finds the precision; the measured grade levels prove it.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + ADR-048 + `evidence/sweep/reading_level.md` + the clinician cold-read. Execute O0 (halt for guide sign-off), then O1–O3.

## Progress

### ⏸ O0 — OPEN AT THE ⛩ PRE-BUILD GATE, 2026-08-25. Nothing is built; the budget is not re-ratified.

Session `session_stanley_20260825_223916_haussmann_p4_5b_o0`. **P4.5b is next in convention 11's ruled
order** (`… → P4.4 → P4.3 → **P4.5b** → P5.1 → P5.2`), confirmed by the operator at the session open —
against a `MEMORY.md` handoff reading `NEXT = P5.1`, which is the *precondition* sense (G-11 went green
when the freeze lifted), not the order. **P5.1's own `depends_on` names P4.5 and P4.4, both
`in_progress`**, and P4.5b rewrites the exact surfaces P5.1's panellists cold-read — so running P5.1
first buys transcripts about copy scheduled for replacement, **G-11's own defect class in slow motion.**

**Convention 13's pass ran COMPLETE at 22/22 with its coverage recorded** (16 AC×V + 6 AC×AC) →
[[ac_amendment_proposal]] (`artifacts/p4_5b/`, **`proposed`**). Verdict: **3 failures · 2 structural
gaps · 1 stale amendment · 4 premise corrections.** Five ACs proposed (AC-e new), V2 amended, V5 added,
budget **~280–400 kT / 2–3 sessions**. **Fifth consecutive mission where this pass has paid for itself.**

⭐⭐ **THE PASS RAN IN BOTH DIRECTIONS AND ONLY THE REVERSE ONE FOUND THE WORST DEFECT.** Every previous
sighting was AC→V (*a criterion whose stated method cannot move its stated test*). Here **AC-a is
covered by ZERO verification limb** — all four V limbs measure **rendered pages**; AC-a's deliverable is
a **governance document**. A one-paragraph voice guide, never applied to a sentence, passes AC-a and
leaves V1–V4 unmoved — **and nothing binds the rewrite to the guide at all**, so AC-b/AC-c could be met
by any rewrite. This is **P4.1's structural gap inverted** (*"all four ACs could pass with zero slots
built"* → *a criterion covered by no limb*). ⇒ **The matrix must be read AC→V and V→AC; the same 16
cells answer two different questions.** Remedy binds the guide to work already required rather than
adding a reviewer: **V2's records must cite the guide rule each decision applied.**

⭐⭐ **G-10 IS MEASURED, AND IT IS NOT ABSENT — IT IS MISPLACED, WHICH IS A DIFFERENT FIX.** The AC
called agent-authorship disclosure *"UNVERIFIED — a 3-phrase grep over `site/src/pages/**` … a statement
about that grep and not about the site."* **That caution was right.** Surface: `dist/**/*.html`, tree
`6675442` — **41 pages name a persona; 4 disclose that personas are AI; the one page saying *"tended
by"* WITHOUT disclosing is `/`.** The source grep could never have found them: the disclosures render
from content collections and components. **Third instance in this campaign of a negative result narrower
than its conclusion** (F-e's `find` · convention 16's own `grep` · this). ⇒ new **AC-e**.

⭐⭐ **AND THE SAME SHAPE APPEARS AGAIN IN THE CLINICIAN LIST — TWICE, CONVERGING ON ONE PAGE.**
*"ancient DNA"* is addressed on **4** pages, all deep reference/concept routes, **none of them `/`,
`/learn`, `/get-started` or `/about`** — the disclosure sits three-to-four clicks below the point of
confusion, exactly like the persona one. ⇒ **Two of the ten items are not missing content; they are
content in the wrong place.** Both converge on the homepage, which is *also* the worst-measuring
first-contact surface (**13.90** against a target of 10). **Three independent instruments — a coherence
gap, a cold-read, and a reading-level measurement — point at the same page.**

⭐ **The charter's own FKGL figure could not serve as the mission's *before*, and `V1` says "deltas".**
[[reading_level_p4_5b_baseline]] re-measures over P3.1's **`.md` twins** — a committed build artifact —
because the 08-16 corpus was a session scratchpad, **verified absent today**; it is ~11 missions stale
(`/learn/what-is-adna` was 1301 words, is now 944 — two texts, not a delta); and **it never measured
`/`**, which AC-b names. ⇒ *P3.1's twins solved an extraction problem nobody had connected them to.*

⭐ **The top-20 is DERIVED and it contradicts AC-b's own list.** Ranked by inbound internal links across
the 226 built pages: **exactly 20 routes are linked from every page** (226), then a **cliff to 141**. It
landed on 20 without being chosen. But **`/learn/what-is-adna` is rank 21** — `/learn` is in the nav, its
child is not — so AC-b asks for the top-20 rewritten *and* names a target outside it. Operative scope
**21 routes = top-20 ∪ the four named**, stated rather than silently resolved either way.

⭐ **Re-probing shrank the scope for the fourth consecutive mission.** `/get-started` measures **9.69**
and **already meets AC-b** (it was 15.85 at 08-16). **Three of the clinician's ten items are dead** —
*"3 Conformance Levels"* · *"Production Tidy pt08"* (retired by P1.3's leak purge) · *"org vault
pending"* — so AC-c executed as written would resolve three phrases that do not exist. Live scope: **7**.

⭐ **C8 is 75 pages from ONE line** (`VaultRelationshipBlock.astro:30`) — the highest-leverage item on
the list, and P3.4's *"a THIRD copy … from one shared data line"* recurring.

⚠ **AC-a's freeze amendment is now STALE IN THE UPWARD DIRECTION, and that is a class worth naming.**
It was amended 08-24 to *"publication NAMED AS OWED … NEVER CLAIMED"*; **the freeze lifted 08-25** and
prod carries the backlog. **G-5 caught criteria that could not go green; this is a criterion that now
under-claims.** ⇒ *a criterion amended around a temporary condition must be re-read when the condition
expires.* Publication becomes required (deploy takes its own ⛩ GO, push first per the ancestry guard).

⚠ **`/vaults` will read 40.96 forever and it is not prose** — 77 sentence-endings collapse to 3 detected
sentences on a card list. Blast radius measured across **all 223 twins: 3 pages**. `gate-48` carries a
shape guard and reports them **excluded with the reason**, never silently dropped.

⚠ **Executor tier declared at the OPEN, not discovered at the AAR.** The mission declares `fable`; **this
session ran `opus`.** P4.1's AAR: *a declared tier nobody honours is worse than none.* Proposed per
increment — `opus` for O0–O1 (judgment), `fable` for O2's remainder.

**Authored this objective:** [[doctrine_site_voice]] (`what/doctrine/`, **`proposed`**) ·
[[ac_amendment_proposal]] (`artifacts/p4_5b/`, **`proposed`**) · [[reading_level_p4_5b_baseline]]
(`evidence/sweep/`) · the 08-16 baseline annotated **superseded, retained** (SO-6).

⛩ **HALT — O0d's gate. The operator signs the voice guide AND the AC amendment before O1 rewrites a
single sentence.** `human_gate: true` on this mission is scoped to exactly this. **Queued behind the
gate:** O4 — delivery of the three staged Vitruvius memos, ⛩ GO'd at the session open, to be shown
before sending.
