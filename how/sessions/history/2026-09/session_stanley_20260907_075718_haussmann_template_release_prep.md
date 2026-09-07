---
type: session
session_id: session_stanley_20260907_075718_haussmann_template_release_prep
created: 2026-09-07   # stamped `date -u` (07:57:18 UTC); local is 2026-09-07 00:57 PDT. GR-4's clock finding — a local stamp sorts before sessions that already happened.
updated: 2026-09-07
status: completed   # closed 2026-09-07 at the ⛩ gate; filed to history in the same commit.
tier: 1
campaign: campaign_haussmann
mission: "no mission — the ⛩ `skill_template_release` gate PREP. The campaign backbone is human-gated at P5.1; this is an owed-list item, deliberately chosen because it ships to `.adna/` and the public image and NEVER to `adna.network`, so it cannot collide with P5.1's stimulus pin."
objective: "Prepare the template-release gate up to but NOT through the ⛩ GO: derive the true hook delta (4.0.1 → 4.3.0), red-prove the R5/R6 fail-open in both directions, scope F-w across both vendored sites, author the staging ledger, dry-run the assembly in a throwaway clone, then HALT."
executor_tier: opus
last_edited_by: agent_rosetta
token_budget_estimated: "~180–260 kT. ⛔ **No mission band applies** — this is an operator-ruled owed-list increment on the R-97 / course-deploy precedent. Delta derivation ~30–45 (three semantic versions, and the diff direction is backport-then-delta, not a straight copy) · the R5/R6 red-proof ~45–70 (**two sites**, both directions, with controls — this is the evidence the whole gate rests on and it is the item most likely to overrun) · F-w scoping ~15–25 · staging ledger ~35–50 · throwaway-clone dry-run + five version surfaces + gitleaks + `adna_validate` ~40–60 · session close ~15–20. ⚠ ~40 kT of any HAUSSMANN sitting is the campaign `CLAUDE.md`, auto-loaded — inside this band, not beside it. ⚠ **Costed against this desk's standing count of twelve instruments wrong before their subjects**, per the previous session's own AAR instruction: the red-proof is budgeted for being written *correctly*, not merely written."
token_budget_actual: "≈150–190 kT — **RECORDED AT THE TIME**, not reconstructed (the P4.3-class defect this campaign has hit four times). Against ~180–260 kT estimated ⇒ **UNDER the band at ≈0.7–0.8×**, and the reason is attributable rather than lucky: the two items costed as most likely to overrun both came in cheap. The red-proof (~45–70) used the hook's **own `--self-test`** instead of an authored harness — *the control already existed and the budget had assumed one would be written*. The delta derivation (~30–45) collapsed once the 15 ours-only lines turned out to be **entirely replaced content**, so the anticipated backport-then-delta reconciliation never had to happen. ⚠ **An under-run is a mis-estimate too, and the lesson is the inverse of the last session's**: that one costed for *writing* an instrument and paid for writing it *correctly*; this one costed for writing an instrument that **should never have been written at all**. ⇒ *check for an existing control before costing one.* No SO#11 retrospective (well inside 2×)."
tags: [session, haussmann, template_release, pre_push_sanitize, f_p7b_as, f_w, hook_430, gate_prep]
---

# The template-release gate prep — and the offer we acked had already moved

## Derived at open — never carried (conventions 19 + 16)

| Fact | Value |
|---|---|
| UTC stamp | `2026-09-07 07:57:18` (local `2026-09-07 00:57 PDT`) |
| HEAD | `a0d1b94` |
| unpushed | **0** |
| `main` CI | ✅ **green** at `a0d1b94`, run `34097259237`, 7m26s |
| ⚠ CI width | **none** — unpushed is 0, so the green covers HEAD exactly |
| `how/sessions/active/` | **empty** at open ⇒ Single-Writer Lease clear, no peer session |
| ADRs `proposed` | **0** — nothing awaits ratification |
| Prod alias | `010cc4f` (2026-09-07 transport deploy) — **untouched by this session by design** |
| ⛩ `P5.1` recruitment | **NOT scheduled** ⇒ deploy hold **inactive**; irrelevant here regardless (no site bytes) |

## ⛩ Two rulings taken at this session's planning gate (SO#1 — none taken here)

| # | Ruling |
|---|---|
| 1 | **Prep the `skill_template_release` gate**, up to but not through the ⛩ GO |
| 2 | **`P5.1` recruitment is NOT scheduled** ⇒ the deploy window is open; this session uses none of it |

## ⛔ Three corrections found while grounding the plan — all `[D]`, none carried

### A. The gap is THREE versions, not two — and the offer superseded itself

The handoff, `MEMORY.md` and my own reference note all said `4.0.1 → 4.2.0`. **`Git.aDNA`'s source
of record is at `4.3.0`** (`Git.aDNA/how/standard/hooks/pre-push-sanitize.sh:10`, file dated
2026-09-07 00:35 — hours old). Hopper's memo of 2026-09-02 offered **4.2.0**, and our ack of
2026-09-07 acked **4.2.0**; their file moved past its own offer in between.

⭐ **This is convention 15 live, and from the side that usually goes unobserved** — *a memo that
pins a mutable version states the pin AND its supersession condition*. Theirs did not, and the pin
lapsed between the offer and the ack.

⭐⭐ **Their header already records the skew and cites our ack**, having corrected their own standing
premise that `.adna/` was at 4.1.0: *"Neither desk could see this alone — we read our source of
record, she reads her vendored copy, and the skew is only visible from the consumer's tree."*

### B. The queue's stated first item is the cosmetic one; the security item is unranked

`F-P7b-as` is **real and verified** at `.adna/how/standard/hooks/pre-push-sanitize.sh:347`. But by
Hopper's own analysis it yields **the right verdict for the wrong reason** — it still exits 1; only
the operator-facing message never prints. No push has ever been wrongly allowed by it.

**`4.3.0`'s R5/R6 repair is a different class.** Verified at the object in our vendored 4.0.1:

| site | line | predicate |
|---|---|---|
| push-time R5/R6 | `288` | `[[ "$f" == *.md ]] \|\| continue` |
| `--self-test` (reimplements R1–R6) | `106` | `if [[ "$f" == *.md ]]; then` |

⇒ a node flagged `confidential: true` / `private: true` in **any non-`.md` file** is pushed
**UNSCANNED**, by the rule whose whole job is to stop that — in the hook **every aDNA vault
installs**. Inbound from Hermes (Exchange.aDNA) 2026-09-06; class origin is Venus's 09-03 memo §5a
(a `.tsv` past a list holding `.csv`).

⭐ The correct predicate was already ~60 lines below in R2 (`file --mime … charset=binary` — scan
unless *provably binary*). **Not new engineering: making R5/R6 use what R2 already uses.**

⇒ **Recommended to the gate: rank `4.3.0`'s R5/R6 first.** `F-P7b-as` rides it (already repaired
in their 4.3.0 at `:660` as `if ! ( : < /dev/tty ) 2>/dev/null` — testing the *act*, not a property
inferred about it).

### C. This node has no root `README.md` — the fifth version surface is clone-only

Governance-version surfaces: `.adna/CLAUDE.md` frontmatter `version` (`"8.9"`, `:3`) · its header
comment · `CHANGELOG.md` · `.adna/README.md` badge (`:10`) · **the image's root `README.md` badge**.
`~/aDNA/README.md` is **MISSING** on this node `[D]` and is not image-synced.

⚠ **This is precisely where v8.6 *and* v8.7 both shipped a stale badge**, caught only at post-fire
smoke. It must be bumped **inside the throwaway clone**, not looked for locally and concluded
absent. ⭐ Recording it here because *a negative result is only as wide as the command that produced
it* — a local `ls` proving no root README is a true statement about this node and says nothing
about the image.

### D. `F-w` has a second site nobody has recorded

GR-1 filed `F-w` as the `skill_onboarding` instance only. Measured `[D]`:

| site | text |
|---|---|
| `.adna/how/skills/skill_onboarding.md:208` | *"The marketplace is coming soon."* |
| `.adna/how/templates/template_node_adna_exemplar/HOME.md.template:54` | *"coming soon, via the Lighthouse network"* |

⛔ **Surfaced at the gate as a scope question, not silently absorbed** — unforced widening at a
sitting's tail is this campaign's most-repeated defect.

## Progress

### O1 — the delta is derived, and it splits CODE from NARRATIVE `[D]`

| | `.adna/` 4.0.1 | `Git.aDNA` 4.3.0 |
|---|---|---|
| total lines | 362 | 701 |
| comment/blank | 115 | 363 |
| **executable** | **247** | **338** |

**Raw diff: 15 ours-only · 354 theirs-only. Executable-only diff: 11 ours-only · 102 theirs-only**
(+91 net executable). ⇒ the file nearly doubles, but **~248 of the ~339 added lines are comment**.

#### ⭐ The v8.7 backport hazard does NOT apply here, and that was measured rather than assumed

All **15** ours-only lines are the version stamp or a line 4.3.0 deliberately replaces: both
fail-open sites (`:106`, `:288`), the dead tty guard + its never-printing message (`:347-348`), the
two inlined `awk` frontmatter extractions (now the shared `sanitize_frontmatter`), the inlined
binary tests (now `sanitize_is_text`), and the single success count (now per-rule coverage).
⇒ **zero dev-side content would be regressed; this is a clean straight-fold, not backport-then-delta.**
⭐ Worth stating because the v8.7 lesson makes *backport-first* the default expectation, and the
default was wrong here — *the direction of a fold is a measurement, not a policy*.

#### ⛔⛔ THE FOLD CANNOT BE VERBATIM — the narrative would publish a peer's exposure

`.adna/` is vendored to the **public** image *and* to the trust page. Measured, shipped-4.0.1 vs
their-4.3.0 `[D]`:

| token | in shipped 4.0.1 | in 4.3.0 | folding verbatim would |
|---|---|---|---|
| `mesh overlay` | **0** | **1** | ⛔ **publish that `Git.aDNA` exposed a mesh overlay address 31× across 13 files** |
| `F-P7b-*` | 0 | 15 | introduce peer internal finding IDs |
| `Git.aDNA` | 0 | 6 | name the peer vault |
| `ADR-016` | 0 | 3 | cite a peer's internal ADR |
| `Hermes` | 0 | 3 | name Exchange.aDNA's desk |
| `Venus` | 0 | 1 | name Network.aDNA's desk |
| `how/campaigns` | **1** | 1 | ⊘ **pre-existing — NOT introduced by this fold** |

⭐⭐ **The sharpest item is `:499`.** The header explains R8's necessity by disclosing that
*"Git.aDNA published a mesh overlay address 31 times across 13 files… The material was
reconnaissance in a class the owning graph's MANIFEST rules unpublishable."* Folded verbatim into
a **public GitHub repo**, that ships a peer's reconnaissance-class exposure **as documentation** —
***the exact defect the paragraph narrates, committed by the act of shipping its fix***, and the
same class as Venus's 2026-09-07 disclosure to this vault. ⛔ Not a reason to decline the fold; a
reason to scope it.

⚠ **The DECLARED-DRIFT block (`:12-40`) is self-invalidating on ship.** It says the drift *"closes
when Rosetta ships these via `skill_template_release`"* — so the moment it ships, it describes a
state that no longer exists. **A drift statement that still described 4.1.0 is the class Git.aDNA
names in that very block**, and shipping it unedited commits it.

⇒ ⛩ **Recommended scoping for the gate: fold the 338 executable lines; RE-AUTHOR the header.** The
peer's narrative is a *provenance* record written for their desk; the public template needs a
*contract* comment — what each rule does and why, with no fleet-internal identifiers. **The
distinction is the deliverable**, and it generalises v8.5's DE-LINK rule from wikilinks to prose.

### O2 — the fail-open is RED-PROVEN in both directions, with a control that attributes

⭐ **No instrument was authored.** The hook's own `--self-test` with its `clean/`/`dirty/` fixture
dirs is the control that already existed — conventions 15/16/17 rule against authoring one at a
sitting's tail, and *the harness this needed was already in the file*. Both hook versions were run
against a **byte-identical fixture set** in the scratchpad; ⛔ **`.adna/` was never written to**
(Standing Rule 1).

| fixture | 4.0.1 (shipped) | 4.3.0 | role |
|---|---|---|---|
| `control_confidential.md` — `.md`, `confidential: true` | ✅ caught `R5` | ✅ caught `R5` | **control** — R5 alive in both; a miss here is a HARNESS BUG, not a finding |
| **`test_confidential.yaml`** — *identical frontmatter*, non-`.md` | ❌ **NO findings** | ✅ **caught `R5`** | **the subject** |
| `draft_post.md` (R6) | ✅ | ✅ | control — R6 unaffected |
| `fake_with_secret.md` (R2) | ✅ | ✅ | control — other rules unaffected |
| 2 × `clean/` | 0 findings | 0 findings | control — **the fix introduces no false positives** |

⇒ **Exactly one assertion changes state — R5 on a non-`.md` file — and every control holds.** That
is `F-z`'s clause satisfied by construction: *a demonstration is only worth what it can attribute*.
The two fixtures differ **only** in file extension, so nothing else can explain the flip.

#### ⭐⭐ THE FINDING: THE RULE WAS BLIND, THE HARNESS NEVER WAS — WHAT WAS MISSING WAS ONE FIXTURE

4.0.1's **own self-test printed the miss** the instant a fixture existed:
`❌ test_confidential.yaml — NO findings (rule miss; expected at least one R1-R7 finding)`. The
harness could always have caught this. For the entire life of the defect, **`dirty/` held only
`.md` files**, so the extension allowlist was never exercised — *coverage that reads as coverage
and is not*, and convention 14's family (*an instrument is not believed until demonstrated to
fail*) with the demonstration available and never asked for.

#### ⛔⛔ AND UPSTREAM FIXED THE CODE WITHOUT SHIPPING A FIXTURE — THE REPAIR IS UNGUARDED

Measured `[D]`: `Git.aDNA`'s `test_fixtures/` is **identical to ours** — the only non-`.md` file in
either `dirty/` is `large_binary.bin`, which exercises **R4 (size)**, not R5/R6. ⇒ **no fixture
anywhere in the fleet exercises the case 4.3.0 was written to fix**, so the repair ships
**unguarded** and a future reinstatement of an extension test would go unnoticed exactly as the
original did.

⇒ ⛩ **Recommended addition to the payload: ship the FIXTURE, not only the code** —
`test_fixtures/dirty/test_confidential.yaml`, five lines, converting an unguarded repair into a
guarded one. ⛔ **Not folded unilaterally**; it is a payload scope question for the gate.
⇒ ⛩ **And a finding is owed back to Hopper** — their fix is correct and its self-test cannot see
it. Staged as a memo, delivery its own outward act.

### O3 — `F-w` needs no same-diff hand-edit, and it has a second site

**The published hash is DERIVED, not typed** `[D]`: `build_tour_files.mjs:194` computes
`sha256(raw)` at build time, and `:239` already carries a **STALE guard**. The vendored tour copy is
**byte-identical** to its source — `md5(site/src/data/tour/skill-onboarding.txt)` ==
`md5(.adna/how/skills/skill_onboarding.md)` == `4e3bec8d9a1caa101698b692bdceb2e2`. ⇒ fixing the
sentence and re-running the generator carries the hash automatically; **no hand-edited hash, no
same-diff churn.** ⭐ The generator reads `../../.adna/` **read-only**, honouring Standing Rule 1 in
code.

**Second site confirmed** (`.adna/how/templates/template_node_adna_exemplar/HOME.md.template:54`,
*"coming soon, via the Lighthouse network"*). ⚠ It is **not** in the vendored tour set (4 files:
`skill-onboarding` · `skill-project-fork` · `standard-governance` · `workspace-router`), so it is
**shipped-but-not-published** — a real instance with a *different* blast radius from GR-1's.
⛩ Payload scope question, not absorbed.

### ⛔⛔ O3's REAL FINDING — I WAS WRONG THAT THIS RELEASE IS DEPLOY-HOLD-SAFE, AND THE PLAN SAID SO

My approved plan asserts the release *"ships to `.adna/` and the public image, **never** to
`adna.network`, so it cannot collide with `P5.1`'s deploy hold."* **True of the fold; incomplete
about its consequence.** Measured `[D]`:

`sourceRef` is derived from `.adna/CLAUDE.md`'s own `version:` (`:135`, GR-1's O4 fix), and the
manifest currently pins `source_ref: v8.9` · `local_sync_sha: 0364d85`. The generator flags STALE
on **three** independent conditions: a content sha change, a `source_ref` change, **and** a
`local_sync_sha` change.

⇒ **A template release invalidates the trust page's manifest BY CONSTRUCTION** — at minimum on
`source_ref` and `local_sync_sha`, before F-w changes a single byte. Restoring it is a `site/`
change, and making it *publicly true* needs a **deploy**.

⇒ ⭐⭐ **The release has a DEPLOY TAIL, and it lands on the trust page.** If the release fires and
the deploy does not follow, `/get-started/what-your-agent-reads/` publishes **v8.9 provenance for a
standard that has moved** — a stale claim on **the one surface built to be checked**, which is
***F-w's own class, produced by the act of shipping F-w's fix***. The same shape as the mesh-overlay
item above: the defect narrated by the thing being shipped.

⇒ ⛩ **This makes the release/recruitment ordering a real operator decision, not a non-question.**
Recruitment is unscheduled today, so the window is open — but it must be **stated**: fire the
release *and its deploy tail* before recruitment opens, or hold the whole release until after the
panel. **Firing the release and deferring the deploy is the one combination that leaves a false
claim live.**

### O4 — the assembly is DRY-RUN GREEN in a throwaway clone, and HALTED at the ⛩ GO

Clone of `aDNA-Network/aDNA` at `b94ec45`. ⛔ **Nothing committed, tagged or pushed.**

#### ✅ Correction C confirmed at the object — and the image ships the fail-open

The five surfaces, **derived** by grepping every `8.9` in the image, not remembered:

| # | surface | line |
|---|---|---|
| 1 | **root `README.md`** badge — ⚠ **clone-only; absent on this node** | `:7` |
| 2 | `.adna/README.md` badge | `:10` |
| 3 | `.adna/CLAUDE.md` frontmatter `version: "8.9"` | `:3` |
| 4 | `.adna/CLAUDE.md` header HTML comment `<!-- v8.9 \| … -->` | `:10` |
| 5 | `.adna/CHANGELOG.md` — new entry | `:31-47` |

Each badge carries **3** spots (alt-text · shields URL · `/releases/tag/`), so surfaces 1–2 are **6
edit points**, not 2. ⚠ **The image's hook reads `LAYER_CONTRACT_VERSION=4.0.1`** — confirming the
public image currently ships the fail-open to every consumer.

#### ⭐⭐ P2 built, and the de-narration is CONTROLLED

The candidate replaces the 94-line provenance header with a **contract** header and surgically
strips fleet-internal identifiers from four body blocks. **Three controls, all green:**

| control | result |
|---|---|
| **C1 — executable content vs 4.3.0** | ✅ **BYTE-IDENTICAL** — de-narration changed **zero** executable lines |
| **C2 — leak tokens** | ✅ **0** across 13 patterns (incl. `mesh overlay`, `F-P7b-*`, `Git.aDNA`, `Hermes`, `Venus`, `ADR-0*`, `origin/master`, `how/campaigns`) |
| **C3 — `bash -n`** | ✅ parses |
| **functional** | ✅ candidate `--self-test` catches `test_confidential.yaml`, all controls hold |

⭐ **C1 is the load-bearing one**: it separates *"I rewrote the prose"* from *"I changed the
program"*, which no amount of reading the diff would establish. 701 → 690 lines.

⚠ **Two de-narration defects caught by the controls, not by vigilance** — the first substitution
pass left **`ADR-011` ×4** and **`origin/master` ×1**. ⭐⭐ The `ADR-011` hits are the sharper find:
they cite **`Git.aDNA`'s** ADR-011 (instrument discipline), but **this vault's ADR-011 is *semver
discipline***, so a forked vault would resolve the citation against the wrong document. **That is
the campaign's own *"always qualify which vault's ADR-025"* collision, one number over** — and it
would have shipped as a confident, wrong cross-reference into every fork.

#### ✅ NO-GO check + verification suite

`git status` in the clone shows **exactly 3 paths, all under `.adna/`, all payload**:

```
 M .adna/how/skills/skill_onboarding.md              (P5 — F-w (a))
 M .adna/how/standard/hooks/pre-push-sanitize.sh     (P1/P2/P3)
?? .adna/how/standard/hooks/test_fixtures/dirty/test_confidential.yaml   (P4)
```

**No extras ⇒ not a NO-GO.** | `--self-test` in the assembled tree: **PASSED**, P4's fixture caught
· `gitleaks`: **no leaks found** (5 commits, 16.29 MB) · `adna_validate --governance` (python3.13):
**`GOVERNANCE SYNC: Zero drift`**.

⭐ Zero drift **before** any version bump is the *expected* result and was predicted: the payload
adds **no skill and no template**, so no count moves — the v8.7 precedent (*"NO count bump… zero-drift
out of the box"*) holding. **Stated as a prediction met, not banked as a pass.**

⛔ **P7 (version surfaces) deliberately NOT applied** — `Q1` (v8.10 vs v9.0) is unruled, and
pre-empting it would be exactly the class this vault gates. ⛔ **P6** (F-w's second site) likewise
held as a scope question.

⏭ **HALTED AT THE ⛩ GO.** Nothing committed to the image, no tag, no push.

### ⚠ O4 rider — a disclosure-gate FIXTURE is a file that trips the gate it tests

Staging the fixtures into this vault raised a hazard I had created and had not costed: both carry
`confidential: true` **by design**, which is precisely what `R5` refuses.

**Measured before assuming `[D]`:**
- `control_confidential.md` → `.md` + `confidential: true` ⇒ **`R5` fires even at 4.0.1**.
- `test_confidential.yaml` → non-`.md` ⇒ **does not fire at 4.0.1** — ⭐ *the defect under repair is
  what currently protects it*, and it **will** fire once a vault upgrades to 4.3.0.

⭐ **The risk is NOT live here, and the reason is worth recording rather than assuming.** This
vault's installed `.git/hooks/pre-push` is **`pre-push-secret-scan.sh` (Network.aDNA / Venus)** — a
gitleaks-only gate — **not** `pre-push-sanitize.sh`. So `R1`–`R8` never run on our pushes and
neither fixture can block one today. ⚠ **That is a property of this node's hook installation, not of
the files**, so it holds only until `skill_deploy` installs the sanitize hook here.

⭐ **The precedent already answers it, and I checked instead of inventing:** `draft_post.md`
(`status: draft` ⇒ `R6`) and `what/local/notes.md` (⇒ `R1`) have been committed and pushed in both
`.adna/` and the public image for months. **There is no fixture-path exemption in the hook** — the
arrangement works because the repos carrying the fixtures do not run the sanitize hook on
themselves. ⇒ **P4 ships safely by the same precedent it follows.**

⛔ **Both fixtures KEPT, not quietly deleted** — the red-proof's reproducibility is the load-bearing
evidence for the whole gate, and deleting the control would leave a claim with no way to re-run it.
**The trap is named instead**, with its mitigation: if this vault ever installs
`pre-push-sanitize.sh`, `artifacts/template_release/staged/test_fixtures_dirty/` must be exempted or
moved. ⇒ *A fixture that cannot be distinguished from the thing it tests is correct; where it lives
is the design decision.*

## SITREP

**Completed** — the `skill_template_release` gate is **prepared and halted at the ⛩ GO**.
`artifacts/template_release/release_staging_ledger.md` (`proposed`) is the decision surface, with
candidates staged at `artifacts/template_release/staged/`. Delta derived · fail-open red-proven both
directions with controls · header de-narrated under a byte-identity control · assembly dry-run green
in a throwaway clone · **6 questions carried to the gate**.

**In progress** — nothing. The session ends at a gate by design.

**Next up** — ⛩ **the operator gate.** `Q1` version (**v8.10 vs v9.0**) · `Q2` re-rank the queue
(**recommended: the fail-open ahead of `F-P7b-as`**) · `Q3` F-w's second site · `Q4` ship the
fixture · **`Q5` the deploy tail vs `P5.1` recruitment** · `Q6` the memo owed back to Hopper.

**Blockers** — none. ⛔ **Not blocked, deliberately halted**: `P7` (version surfaces) and `P6` wait
on rulings, and pre-empting either is what this vault gates.

**Files touched** — `how/sessions/active/…` (this) · `artifacts/template_release/release_staging_ledger.md`
(new) · `artifacts/template_release/staged/` (4 new). ⛔ **`.adna/` untouched** (Standing Rule 1) ·
**no image commit, tag or push** · **no `adna.network` deploy**.

### What this sitting actually found — five things, none of them the thing it was sent for

1. ⭐⭐ **The offer we acked had superseded itself.** `Git.aDNA` is at **4.3.0**, not the **4.2.0**
   their 09-02 memo offered and our 09-07 ack acked. **Convention 15 from the receiving side** — a
   memo pinning a mutable version must state its supersession condition; theirs did not.
2. ⛔⛔ **The ratified queue is ranked wrong.** `F-P7b-as` is *the right verdict for the wrong
   reason* — **no push has ever been wrongly allowed by it**. The R5/R6 fail-open **does** wrongly
   allow pushes, in the hook every vault installs.
3. ⭐⭐ **The rule was blind; the harness never was.** 4.0.1's own self-test printed the miss the
   instant a fixture existed. For the defect's entire life `dirty/` held only `.md` files ⇒
   *coverage that reads as coverage and is not.* **And upstream fixed the code without shipping a
   fixture**, so the repair ships **unguarded**.
4. ⛔⛔ **The fold cannot be verbatim** — it would publish a peer's reconnaissance-class exposure as
   documentation on a public repo: *the defect the paragraph narrates, committed by shipping its
   fix.*
5. ⛔⛔ **I was wrong that this release is deploy-hold-safe, and the approved plan said so.** A
   release invalidates the trust page's manifest **by construction**. ⇒ **firing the release and
   deferring the deploy is the one combination that leaves a false claim live.**

⭐ **The through-line: four of the five are the same shape** — *a claim verified in the prose that
carried it rather than at the object.* The version, the ranking, the fixture coverage and my own
plan's deploy-safety assertion were each true-sounding, carried forward, and false at the object.

⚠ **Two defects of mine, caught by controls rather than vigilance** — the de-narration's first pass
left `ADR-011` ×4 (citing a **peer's** ADR-011 while this vault's is a *different subject*, so every
fork would resolve it wrongly) and `origin/master` ×1 (also factually wrong for a template shipped
to `main` vaults). **The standing streak is why C1/C2/C3 were written before the edit, not after.**

## Next Session Prompt

> Open `how/campaigns/campaign_haussmann/artifacts/template_release/release_staging_ledger.md`
> (`proposed`) and the campaign `CLAUDE.md`. The `skill_template_release` gate is **prepared and
> halted at the ⛩ GO**; candidates are staged at `artifacts/template_release/staged/`
> (`pre-push-sanitize.sh.candidate` — de-narrated 4.3.0, executable byte-identical to
> `Git.aDNA`'s source of record; `skill_onboarding.md.candidate` — F-w (a); and the two red-proof
> fixtures). The dry-run was green in a throwaway clone: exactly 3 payload paths, gitleaks clean,
> `adna_validate --governance` zero drift, self-test passing with the new fixture caught.
> **Nothing is committed, tagged or pushed, and `.adna/` is untouched.**
>
> **Take the six ⛩ questions in §3 first — nothing else proceeds without them.** The load-bearing
> two: **`Q2`**, re-rank the queue so the R5/R6 fail-open precedes `F-P7b-as` (the fail-open wrongly
> allows pushes; `F-P7b-as` never has); and **`Q5`**, the deploy tail — a release invalidates the
> trust page's manifest by construction, so **fire the release and its deploy together, or hold
> both**; firing without the deploy publishes `v8.9` provenance for a standard that has moved.
> `P5.1` recruitment was unscheduled as of 2026-09-07, so the window is open — **re-derive that at
> the object before relying on it.**
>
> ⚠ Re-verify every ledger row against disk before firing (rows are hypotheses). The five version
> surfaces include the **root `README.md` badge, which exists only in the clone** — this node has no
> root README, and v8.6 *and* v8.7 both shipped it stale. `main` was green at `a0d1b94` with
> unpushed 0; re-derive with `gh run list --workflow=gates.yml --branch main -L 5`.
