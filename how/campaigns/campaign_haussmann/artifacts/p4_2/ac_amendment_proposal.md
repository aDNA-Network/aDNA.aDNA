---
type: artifact
artifact_type: ac_amendment_proposal
campaign_id: campaign_haussmann
mission_id: mission_haussmann_p4_2_craft_floor
status: proposed          # ⛩ awaiting operator signature — authored 2026-08-24, NOT applied
created: 2026-08-24
updated: 2026-08-24
last_edited_by: agent_rosetta
tags: [haussmann, p4_2, acceptance_criteria, amendment, convention_13, craft_floor]
---

# P4.2 acceptance-criteria amendment — proposed

> ⛩ **Operator ruled 2026-08-24: amend, and sign it.** This is the draft; it is **not applied**.
> Authored under §7.7 — agents author, operators ratify. **No build has started.**

## Why this exists at all, on a `human_gate: false` mission

P4.2 is the **only P4 mission with `human_gate: false`** — nothing in its own definition would ever
stop and ask. The convention-13 pass (**30/30 pairs**, coverage recorded in the mission body) found
**three of its five criteria wrong at their premises**, plus two criteria that **no verification method
tests at all**. On a gated mission that surfaces at the gate. Here it surfaces only if someone chooses
to raise it. ⇒ **`human_gate: false` is the reason this halt matters, not a reason to skip it.**

Underneath all three premise failures is one cause, and it is the campaign's own recurring finding:
**the mission was written on 2026-08-16 against evidence measured on 2026-08-16 and 2026-08-19, and
every one of those numbers has moved.** Convention 12 says re-verify `grounded_in:` at execution; this
is what that produces when it is actually done.

---

## The amendment

### AC1 — **REPLACE**

> **Was:** *"A lock-coverage declaration exists for the site (all **57 locks** × **the site surface**:
> enforced-by/na-reason/gap — the WebForge census mechanic), with every `gap` dispositioned"*

**Two defects (F-1, F-2).**

**The count is 60, not 57** — triple-confirmed, and the checker cross-validates all three sources:
`lock_coverage.yaml` → `lock_count_invariant: 60`; actual yaml rows → **60** (`A1…N3` **plus
`O1 O2 Q1`**); `doctrine_web_surface_craft_floor.md:11` → `craft_floor_index: 60`. `[D]` Executed as
written the declaration is **3 locks short of the floor it claims to declare**. *(WebForge hit this
exact class themselves — `check_lock_coverage.py:566` carries the comment "count actual yaml entries,
never the `lock_count_invariant` scalar (F-9)". KW-14 is not a local weakness.)*

**And `the site surface` names a row that is not ours.** WebForge's `site` row is **their own
self-site, already full and passing** — 60/60 cells, 28 enforced / 32 na, `by:` anchors pointing into
*their* repo; `check_lock_coverage.py --surface site` returns `Gate 4f PASS [site]`. `[D]` P0.3 staged
the *"whose `site` is this row"* clarification to Vitruvius and **it is still pending on their side**.
Writing into their file is forbidden regardless (Rule 10; convention 4 *consumer, never fork*).

> **Proposed:** *"A lock-coverage declaration exists for this site as its **own consumer-side surface**
> (`adna_site`), covering **all 60 locks** of the craft floor at its live count — derived from
> `lock_count_invariant` / `craft_floor_index`, **never typed** — with `enforced` cells carrying
> grep-verifiable `by:` + `anchor:` that survive the census mechanic's rung test, `na` cells carrying
> an enum `reason:`, and **every `gap` dispositioned** with `sequenced:` or `accepted_by:`. The
> checker consumes WebForge's `check_lock_coverage` **by reference**, substituting only the resolver
> seam — the P4.1 O1 precedent — and the divergence is pinned in `how/federation/webforge/CLAUDE.md`."*

### AC2 — **REPLACE**

> **Was:** *"The **5** html-validate error classes fixed at their component loci (**~964 errors → 0**,
> or documented per-class exceptions); html-validate joins CI"*

**The stated method cannot satisfy the stated test (F-3)** — convention 13's own question, answered no.
Measured today against the current `dist/` (226 pages), **twice**, bare defaults *and* explicit
`html-validate:recommended`, **identical 4,444 both ways** (so config is ruled out as the explanation):

| class | sweep 2026-08-19 | today |
|---|---|---|
| **`no-inline-style`** | **0** | **3,251** |
| `aria-label-misuse` | 245 | 285 |
| `unique-landmark` | 238 | 278 |
| `no-implicit-button-type` | 203 | 227 |
| `valid-id` | 152 | 226 |
| `void-style` | 105 | 125 |
| `no-trailing-whitespace` | 0 | 24 |
| `no-redundant-role` | 17 | 23 |
| `prefer-native-element` | 3 | 3 |
| `no-dup-id` | 0 | 1 |
| `long-title` | 1 | 1 |
| **total** | **964** | **4,444** |

**11 classes, not 5. 4,444 errors, not ~964. And the dominant class is not among the five.** Fixing
"the 5" leaves **3,251+ errors standing**, so *"html-validate CI green"* cannot be reached while AC2
is satisfied as written — and the mission would report `964 → 0` **truthfully**, against a number that
no longer describes the site. That is the campaign's anti-pattern 7.5 arriving through an acceptance
criterion instead of through copy.

⭐ **The measurement also surfaced an unremarked build-output regression.**
`/learn/tutorials/build-a-lattice` **was in the 08-19 sweep** at 5 errors and **zero** inline-style;
today it has **171**. The page existed then, so this is not new pages. **~3,251 inline `style=`
attributes entered the built output after 2026-08-19 and no gate saw it** — on 61 content pages
carrying code blocks, emitting `style="background-color:#24292e;color:#e1e4e8"`: Shiki `github-dark`,
hardcoded hex, **one dark theme rendered in both appearances**. `[I]` untested hypothesis: the Shiki
4.0.2 default-output change riding P3.2's lockfile touch (`31b8b53`, 08-21).

> **Proposed:** *"The html-validate error field is **re-measured at execution** (count derived, command
> and config recorded on the artifact's face) and driven to **zero-or-documented-exception across
> every class**, fixed at component loci rather than per page. Each exception is expressed **in the
> committed config with its reason**, so it is enforced and legible rather than remembered.
> `no-inline-style` is **diagnosed before it is dispositioned** — the cause is tested, not assumed —
> and its ruling is the operator's. html-validate joins CI as a **real `site/` devDependency** plus a
> workflow step, not an ambient `npx`."*

*(⛩ The `no-inline-style` disposition was ruled **diagnose-then-return** on 2026-08-24. This AC does not
pre-decide it.)*

### AC3 — **REPLACE**

> **Was:** *"Design-system page **regenerated** + verified against the P4.1 tokens (20-component sample
> conformance check per the directive)"*

**Two defects (F-4, F-5).** `/design-system` is a **hand-authored 506-line `.astro` page**; no
generator exists in `site/scripts/` or `scripts/`. `[D]` ⇒ *"regenerated"* names a mechanism that
cannot fire — **and so does the campaign CLAUDE.md's protective warning built on it**, which guards
against a regeneration overwriting the Illustration-slots section while the hazard that *can* happen,
a manual rewrite, goes unnamed.

And **V3 cannot see what AC3 claims**: the criterion asks for *"verified against the P4.1 tokens"*,
the verification method offers **T0 captures**. A capture is a picture — it shows the page renders,
never that a value came from a token. The instruments that can are `token_aa_check.py` and
gate-25/**G25b**. Same shape as P4.1's *"AC2's verification cannot see AC2."*

> **Proposed:** *"The design-system page is **refreshed in place** — hand-authored, **never
> regenerated** — and its conformance to the P4.1 tokens is verified by `token_aa_check.py` +
> gate-25/G25b, with T0 captures as visual evidence rather than as the conformance test. The
> **20-component sample frame is declared and derived before sampling** (see AC6). ⛔ P4.1 O2's
> Illustration-slots section is **ADR-053-governed content and survives intact**."*

### AC4 — **NARROW**

> **Was:** *"Diagram/illustration construction rules published (so contributors can extend the
> language) — the D5 anchor-5 item"*

**Partly met already, by P4.1 O2 (F-12).** `/design-system#illustration` **already** ships the
five-slot containment table, the *"a page may not invent a sixth slot"* amendment rule, and **four
contributor rules** for applying `empty_state`. `[D]` That is the **illustration** half. The
**diagram** half is genuinely absent — nothing states how to draw a conformant diagram for the
existing set (`ConvergenceFunnel.astro`, `TriadDiagram.astro`, `MermaidDiagram.astro`,
`NetworkDiagram.astro`, `hero_graph.svg`, `vaults_graph.svg`, 6 category icons).

Re-deriving the published half would be duplicated work landing on a protected section — the precise
hazard F-11 names, since **AC3 and AC4 write the same file**.

> **Proposed:** *"The **diagram** construction rules are published — stroke weight, palette source,
> grid, dual-theme behaviour, and the accessible-equivalent requirement — **extending** the
> illustration rules P4.1 O2 already published at `/design-system#illustration` rather than replacing
> them, and derived from the existing diagram set. AC4's completion is checked by a gate assertion, not
> by the word 'published' (see AC6)."*

### AC5 — **unchanged**

> *"Thin hubs (F13) brought to the section budget or honestly merged"*

Sound as written. Recording the current measurement so it is not re-derived: `/reference/specification`
(h2 **0**, bodyLen 1,504 — **created by P2.3's own split**), `/how` (0 / 1,149), `/patterns`
(0 / 2,007), `/use-cases` (1 / 2,030). **F13's instance count is 4, not 3.**

### AC6 — **ADD** (closes the two structural gaps)

**AC4 and AC5 are tested by nothing (F-6, F-7).** Neither is matched by any member of
`verification_method:`. This is P4.1's structural gap **inverted** — there, work was covered by no
criterion; here, criteria are covered by no method. And **V4's sample frame is undefined (F-8)**:
*"20 sampled components"* with no stated frame lets the sample be chosen, after the fact, from
components already known to conform — self-certification by selection, which is the exact failure the
census mechanic exists to retire.

> **Proposed AC6:** *"Every criterion in this mission has a verification method that can move: the
> 20-component sample frame is **declared and derived** before sampling; AC4's rules are checked by a
> gate assertion that they are present and reachable from `/design-system`; and AC5's thin-hub
> treatment is verified by the P2.6 measurement (h2 count + bodyLen per hub), re-run after the fix."*

### `verification_method:` — **REPLACE**

> **Was:** *"lock-coverage checker + html-validate CI green + T0 design-system captures + 20-component
> sample audit"*

> **Proposed:** *"consumer-side lock-coverage checker (**red-proven by planted mutations** before its
> green is believed — convention 14) + html-validate CI green-or-documented-exception + token
> conformance via `token_aa_check.py`/G25b + declared-frame 20-component sample audit + a gate
> assertion for the diagram rules + the P2.6 thin-hub measurement re-run."*

---

## Ordering constraints this pass found (F-9, F-10, F-11) — not AC changes, execution facts

1. **AC1's html-validate-enforced cells are written last.** A cell cannot cite a CI step that does not
   yet exist.
2. **AC2 precedes AC3's sample.** Markup fixes change `/design-system`'s own rendered output; a sample
   taken first measures a page about to change.
3. **AC3 and AC4 collide on one file.** Both write `/design-system`. The Illustration-slots section is
   protected from **both**.

---

## Budget

**Not re-ratified here.** The scope grew materially (60 locks not 57; a 4,444-error field not 964;
an inline-style diagnosis that did not exist as work). The mission's `~230–340 kT across 2 sessions`
is now a **live under-estimate**, flagged rather than silently exceeded — P4.1 overran its ratified
estimate ≈2.36× and the SO#11 retrospective ruled the remedy was *this pass, run before the budget*,
not a larger number. This pass has now run. **A re-ratification is available if wanted; the operator
declined to bundle it with this amendment.**

---

## Ratification block

| Field | Value |
|---|---|
| **Decision** | Amend P4.2's acceptance criteria as proposed above (AC1 replace · AC2 replace · AC3 replace · AC4 narrow · AC5 unchanged · **AC6 added** · `verification_method` replace) |
| **Ratified by** | *(operator — unsigned)* |
| **Date** | *(pending)* |
| **Status** | `proposed` |
