---
type: session
session_id: session_stanley_20260824_170854_haussmann_p4_2_o0_o1
tier: 1
created: 2026-08-24
updated: 2026-08-24
status: in_progress
last_edited_by: agent_rosetta
persona: rosetta
campaign: campaign_haussmann
mission: mission_haussmann_p4_2_craft_floor
objective: O0+O1
executor_tier: opus
token_budget_estimated: "~140–210 kT for O0+O1 of a mission budgeted ~230–340 kT across 2 sessions. ⚠ The mission's declared `executor_tier: sonnet` is diverging at execution: this session runs **opus**, because O0's first act is a convention-13 judgment pass and O0c must author a by-reference checker seam. Recorded rather than left silent — P4.1's SO#11 retrospective found four sessions running opus under `executor_tier: fable` with nobody noticing."
token_budget_actual:
tags: [session, haussmann, p4, p4_2, o0, o1, craft_floor, lock_coverage, html_validate]
---

# Session — HAUSSMANN P4.2 O0+O1: the craft floor declared, the markup debt measured

## Intent

Run **O0** (lock-coverage declaration) and **O1** (markup debt + html-validate in CI) of
`mission_haussmann_p4_2_craft_floor`. O2 and O3 are session 2 — stated here so the split is on the
record rather than discovered at the close.

⛔ **No deploy.** The freeze stands (below). This mission gates green and does not ship.

## State at open (2026-08-24T17:08:54Z)

| Fact | Value |
|---|---|
| HEAD | `4b3858d` — P4.1 close |
| origin/main | **2 behind local** — `9608820` + `4b3858d` unpushed; push is a per-action outward GO, not pre-asked |
| Deploy freeze | ⛔ **STANDS.** `git cat-file -t 30c8163` and `f4fa9c5` both → *"Not a valid object name"* `[D]` — lemur's two commits still absent. Release condition = P4.4 row **F-u** |
| Coordination sweep (open) | **clean** — `git status --porcelain who/coordination/` empty `[D]` |
| Mission status | `queued` → `in_progress` this session |

## Operator rulings taken at open (2026-08-24)

| Question | Ruling |
|---|---|
| Three ACs wrong at their premises, on a `human_gate: false` mission | **Amendment, operator-signed** — full convention-13 pass, then a written amendment proposal, **halt for signature before any build**. The P4.1 shape. `human_gate: false` is why the halt matters, not why it can be skipped |
| `no-inline-style` (3,251 errors) disposition | **Diagnose, then rule** — TEST the Shiki-4.0.2 `[I]` hypothesis before touching 61 pages; return with the cause plus a costed fix-vs-exception choice. The F20 discipline |
| Session scope | **O0 + O1**; O2 + O3 deferred to session 2 |

## Recon at open — convention 12 (`grounded_in:` re-verified on disk)

Five findings, all `[D]` unless marked. Full write-up in the plan file; the load-bearing ones:

- **R1 — the lock count is 60, not 57.** `lock_coverage.yaml` → `lock_count_invariant: 60`,
  `locks: list[60]`, ids `A1…N3` **plus `O1 O2 Q1`**. AC1 types "57" ⇒ executed as written the
  declaration lands **3 locks short of the floor it declares**. KW-14. Live census also moved:
  **452 enforced / 387 na / 1 gap** over 840 cells at `census_round: R1` (register says 447/351/0 at R5).
- **R2 — WebForge's `site` surface row is their OWN self-site and is full** (28 enforced / 32 na, `by:`
  anchors are WebForge repo paths). P0.3's *"whose `site` is this"* ask is still pending their side ⇒
  the declaration must be **consumer-side**, in this vault (Rule 10; convention 4).
- **R3 — `check_lock_coverage.py` cannot validate a consumer file as-is** (`YAML_PATH`/`VAULT`/
  `surface_dir()` all bind to WebForge's tree; CLI is `--surface/--all/--log` only) ⇒ the P4.1 O1
  precedent: **import by reference, substitute only the resolver seam**.
- **R4 — the markup debt is 4,444, not ~964, and the dominant class is absent from AC2.** Measured
  today twice (bare defaults *and* explicit `html-validate:recommended`, **identical**), so config is
  ruled out. `no-inline-style` **0 → 3,251**. Page-level control: `/learn/tutorials/build-a-lattice`
  was in the 08-19 sweep at 5 errors, zero inline-style; today **171**. The page existed then ⇒ this
  is not new pages. **~3,251 inline styles entered the built output after 08-19 and no gate saw it.**
- **R6 — `/design-system` is hand-authored (506 lines); there is no generator.** AC3's *"regenerated"*
  names a mechanism that does not exist — and the campaign CLAUDE.md's protective warning about a
  regeneration overwriting the Illustration-slots section presupposes the same absent generator. The
  real hazard is a manual rewrite.

## Progress

### O0a — convention-13 pass ✅ COMPLETE, coverage recorded

**30/30 pairs** — 5 method-bearing criteria × 4 test-bearing methods (20 AC×V) + all 10 AC×AC. Written
into the mission body under `## Convention-13 pass`, with the pair table, so an incomplete pass would
be legible as incomplete (the P3.3 amendment's second obligation, which P3.3 itself missed).

**12 findings. Three ACs wrong at their premises; two ACs tested by nothing.**

| ID | Finding |
|---|---|
| F-1 | AC1 types `57`; the floor is **60**, triple-confirmed |
| F-2 | AC1's `site surface` is WebForge's own row (full, passing); V1's checker cannot read a consumer file |
| F-3 | **AC2's method cannot make V2 green** — 11 classes / 4,444 errors, dominant class not among "the 5" |
| F-4 | AC3's `regenerated` names a generator that does not exist |
| F-5 | V3 (captures) cannot verify AC3's token-conformance claim |
| F-6 | **AC4 tested by no method** |
| F-7 | **AC5 tested by no method** |
| F-8 | V4's 20-component sample frame undefined ⇒ self-certification by selection |
| F-9 | AC1's html-validate cells must be written after AC2 |
| F-10 | AC2 precedes AC3's sample |
| F-11 | AC3 and AC4 collide on `/design-system` — the protected section is at risk from **both** |
| F-12 | **AC4 is partly met already** by P4.1 O2; only the *diagram* half is genuinely absent |

⭐ **The pass paid for itself twice over.** F-3 is convention 13's own question — *can the stated method
satisfy the stated test?* — answered **no**, and it would have shipped a truthful-sounding `964 → 0`
against a site with 4,444 errors. F-12 is the opposite saving: **work the mission would have redone**,
on the one section the campaign explicitly protects.

⭐ **And the re-measurement found something nobody was looking for.** `/learn/tutorials/build-a-lattice`
was in the 08-19 sweep at 5 errors, **zero** inline-style; today **171**. The page existed then ⇒ not
new pages. **~3,251 inline `style=` attributes entered the built output after 2026-08-19 and no gate
saw it.** Convention 16's class exactly — a true measurement going false with no event to mark it —
but in the *build output* rather than on the live alias. `[I]` cause hypothesis: Shiki 4.0.2's
default-output change riding P3.2's lockfile touch (`31b8b53`). **Untested. O1 tests it.**

⚠ **Two controls kept me honest on the way.** The 964-vs-4,444 gap looked like a config difference —
re-running under an **explicit** `html-validate:recommended` returned **identical 4,444**, ruling that
out. And "the pages are new" looked obvious (203 → 226 pages) until a **page-level control** showed a
page present in *both* runs moving 5 → 171. Neither conclusion survived its first check in the form I
first had it.

### O0b — AC amendment ⛩ STAGED, AWAITING SIGNATURE

`artifacts/p4_2/ac_amendment_proposal.md`, `status: proposed`, **not applied**. AC1 replace · AC2
replace · AC3 replace · AC4 narrow · AC5 unchanged · **AC6 added** (closes the F-6/F-7/F-8 gaps) ·
`verification_method` replace. Ordering constraints F-9/F-10/F-11 recorded as execution facts, not AC
changes. Budget **flagged as a live under-estimate, not re-ratified** (operator declined the bundle).

⛔ **HALTED HERE. No build has started.**

## SITREP

*(at close)*
