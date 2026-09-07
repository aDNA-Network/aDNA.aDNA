---
type: artifact
artifact_id: release_staging_ledger_template_release_prep
title: "Template-release staging ledger — the hook fold (4.0.1 → 4.3.0), F-w, and the deploy tail nobody had named"
campaign: campaign_haussmann
created: 2026-09-07
updated: 2026-09-07
status: proposed          # ⛩ NOT ratified. Every row is a HYPOTHESIS to be re-verified against disk at fire time.
last_edited_by: agent_rosetta
session: session_stanley_20260907_075718_haussmann_template_release_prep
tags: [artifact, template_release, ledger, pre_push_sanitize, f_w, f_p7b_as, gate]
---

# Template-release staging ledger

> ⛩ **This is a decision surface, not a plan of record.** Nothing here is ratified, nothing is
> built, and no `.adna/` byte has been touched (Standing Rule 1). The release campaign directory
> (`campaign_vX_Y_release/`) is created **at the gate, once the version is ruled** — until then this
> ledger lives under HAUSSMANN, whose owed list it discharges, on the `course_deploy` / `r97`
> precedent for operator-ruled increments.
>
> ⚠ **Ledger rows are hypotheses.** v8.6 reverted a wrong `cp` because a ledger row claimed work that
> disk showed already done; v8.8 caught a false pointer in the flagship `CLAUDE.md` at fire time.
> **Re-verify every row against disk before firing.**

## §0 · Derived at authoring — never carried

| Fact | Value | How |
|---|---|---|
| `.adna/` hook version | **4.0.1** | `grep LAYER_CONTRACT_VERSION` |
| `Git.aDNA` hook version | **4.3.0** | same, at their source of record |
| Governance version | **8.9** | `.adna/CLAUDE.md:3` `version: "8.9"` |
| Tour manifest pins | `source_ref: v8.9` · `local_sync_sha: 0364d85` | `site/src/data/tour_manifest.json` |
| `main` CI | ✅ green at `a0d1b94`, run `34097259237` | convention 19 |
| unpushed | **0** | ⇒ the green covers HEAD exactly |

## §1 · The payload

| # | Item | Source of record | Ships to | Status |
|---|---|---|---|---|
| **P1** | Hook `4.0.1 → 4.3.0` — **executable only** | `Git.aDNA/how/standard/hooks/pre-push-sanitize.sh` | `.adna/how/standard/hooks/` | proposed |
| **P2** | Re-authored hook header (contract, not provenance) | authored here | same file | proposed |
| **P3** | `F-P7b-as` — the dead tty guard | rides P1 (`:660` in theirs) | same file | proposed |
| **P4** | ⭐ **Fixture** `dirty/test_confidential.yaml` | authored here, red-proven | `.adna/…/test_fixtures/dirty/` | proposed |
| **P5** | `F-w` (a) — `skill_onboarding.md:208` | authored here | `.adna/how/skills/` | proposed |
| **P6** | `F-w` (b) — `HOME.md.template:54` | authored here | `.adna/how/templates/…` | ⛩ **scope question** |
| **P7** | Five version surfaces | — | `.adna/` + the clone | proposed |
| **P8** | Tour manifest regen + **site deploy** | `build_tour_files.mjs` | `site/` → `adna.network` | ⛩ **the deploy tail** |

### P1 — the fold is CODE, and the direction was measured

362 → 701 lines, but **executable 247 → 338 (+91 net)**; ~248 of the ~339 added lines are comment.
**All 15 ours-only lines are the version stamp or a line 4.3.0 deliberately replaces** ⇒ zero
dev-side regression, a clean straight-fold. ⭐ The v8.7 *backport-first* default **did not apply**,
and that was measured rather than assumed — *the direction of a fold is a measurement, not a policy*.

Crosses three semantic versions: **4.1.0** (R8 content deny list) · **4.2.0** (R8 scoped to the lines
a push would ADD, per their ADR-016 D4 fix-forward) · **4.3.0** (R5/R6 predicate · per-rule coverage ·
first shared predicates `sanitize_is_text` / `sanitize_frontmatter`).

### P2 — ⛔ the header CANNOT be folded verbatim

`.adna/` is vendored to a **public** GitHub repo *and* to the trust page. Measured, shipped-4.0.1 vs
their-4.3.0:

| token | 4.0.1 | 4.3.0 | verbatim fold would |
|---|---|---|---|
| `mesh overlay` | 0 | 1 | ⛔ **publish that `Git.aDNA` exposed a mesh overlay address 31× across 13 files** |
| `F-P7b-*` | 0 | 15 | introduce peer internal finding IDs |
| `Git.aDNA` | 0 | 6 | name the peer vault |
| `ADR-016` | 0 | 3 | cite a peer's internal ADR |
| `Hermes` / `Venus` | 0 | 3 / 1 | name Exchange.aDNA's and Network.aDNA's desks |
| `how/campaigns` | **1** | 1 | ⊘ **pre-existing — NOT introduced** |

⭐⭐ `:499` discloses a peer's **reconnaissance-class exposure**. Shipping it publicly as
documentation is **the exact defect the paragraph narrates, committed by the act of shipping its
fix** — and the same class as Venus's 2026-09-07 disclosure to this vault.

⚠ The **DECLARED-DRIFT block (`:12-40`) is self-invalidating on ship** — it says the drift *"closes
when Rosetta ships these"*, so shipping it unedited publishes a statement that is false on arrival.

⇒ **Fold the executable; re-author the header as a CONTRACT** — what each rule does and why, with no
fleet-internal identifiers. Generalises v8.5's DE-LINK rule from wikilinks to prose.

### P4 — ⭐ the repair is UNGUARDED upstream, and the fixture is the fix

Red-proof, both versions against a **byte-identical** fixture set, using the hook's **own**
`--self-test` (no instrument authored — conventions 15/16/17):

| fixture | 4.0.1 | 4.3.0 | role |
|---|---|---|---|
| `control_confidential.md` | ✅ caught `R5` | ✅ caught `R5` | control — a miss is a HARNESS BUG |
| **`test_confidential.yaml`** *(identical frontmatter, non-`.md`)* | ❌ **NO findings** | ✅ **caught `R5`** | the subject |
| `draft_post.md` / `fake_with_secret.md` | ✅ / ✅ | ✅ / ✅ | controls — R6/R2 unaffected |
| 2 × `clean/` | 0 | 0 | control — **no false positives introduced** |

**Exactly one assertion changes state**; the two fixtures differ only in extension, so nothing else
explains the flip (`F-z`: *a demonstration is only worth what it can attribute*).

⭐⭐ **The rule was blind; the harness never was.** 4.0.1's own self-test printed
`❌ test_confidential.yaml — NO findings (rule miss)` the instant a fixture existed. For the whole
life of the defect `dirty/` held **only `.md` files**, so the extension allowlist was never
exercised — *coverage that reads as coverage and is not*.

⛔⛔ **`Git.aDNA`'s fixture set is identical to ours** — the only non-`.md` file in either `dirty/` is
`large_binary.bin`, which exercises **R4 (size)**, not R5/R6. ⇒ **no fixture in the fleet exercises
the case 4.3.0 exists to fix**; the repair ships unguarded and a future reinstatement would go
unnoticed exactly as the original did. **P4 is five lines of YAML that close that.**

### P5/P6 — `F-w`, and no hand-edited hash

The published `sha256` is **derived** (`build_tour_files.mjs:194`) with a STALE guard at `:239`; the
vendored copy is byte-identical to source (`md5 4e3bec8d…` both sides). ⇒ fix the sentence, re-run
the generator, the hash carries itself. **No same-diff churn.**

⛩ **P6 is a scope question.** The second site is **shipped but not published** (not among the 4
vendored tour files), so its blast radius differs from GR-1's. Surfaced, not absorbed — unforced
widening at a sitting's tail is this campaign's most-repeated defect.

## §2 · ⛔ P8 — THE DEPLOY TAIL, and it corrects this session's own approved plan

The plan asserted the release *"ships to `.adna/` and the public image, **never** to `adna.network`,
so it cannot collide with `P5.1`'s deploy hold."* **True of the fold; incomplete about its
consequence.**

`sourceRef` derives from `.adna/CLAUDE.md`'s `version:` (`:135`), and the manifest STALE-checks on
**three** conditions: content sha, `source_ref`, `local_sync_sha`. ⇒ **a release invalidates the
trust page's manifest by construction**, on `source_ref` + `local_sync_sha` alone, before `F-w`
changes a byte. Restoring it is a `site/` change; making it publicly true needs a **deploy**.

⇒ ⭐⭐ **If the release fires and the deploy does not follow, `/get-started/what-your-agent-reads/`
publishes `v8.9` provenance for a standard that has moved** — a stale claim on **the one surface
built to be checked**. *`F-w`'s own class, produced by shipping `F-w`'s fix.*

## §3 · ⛩ Questions carried to the gate

| # | Question | Recommendation |
|---|---|---|
| **Q1** | **Version: `v8.10` or `v9.0`?** | Governed by ADR-011's two-track policy; **the operator's call.** Item P1 is a *semantic* change to a security-relevant gate, which argues for **v9.0**. The standard itself holds at **v2.5** either way. |
| **Q2** | **Rank the queue.** The ratified order puts `F-P7b-as` first. | ⛩ **Recommend re-ranking: P1/P4 (the fail-open) first.** `F-P7b-as` yields *the right verdict for the wrong reason* — it still exits 1; only the message never prints. **No push has ever been wrongly allowed by it.** The R5/R6 fail-open **does** wrongly allow pushes, in the hook every vault installs. |
| **Q3** | **P6 — fold `F-w`'s second site?** | **Recommend yes, and say so on the record**: it is the same false promise, five characters of edit, and leaving it makes the next census re-find it. But it is genuinely out of GR-1's filed scope, so it is the operator's to add. |
| **Q4** | **P4 — ship the fixture?** | **Recommend yes.** Without it the repair is unguarded in every downstream vault. |
| **Q5** | **⛔ The deploy tail (P8) vs `P5.1` recruitment.** | Recruitment is **unscheduled today**, so the window is open. **Recommend: fire the release AND its deploy tail together, before recruitment opens.** ⛔ **Firing the release and deferring the deploy is the one combination that leaves a false claim live.** |
| **Q6** | **A finding is owed back to Hopper** — their fix is correct and its self-test cannot see it. | Staged memo; ⛩ delivery is its own outward act. Their 4.2.0 offer had also **superseded itself** before our 09-07 ack — convention 15 from the receiving side. |

## §3a · Dry-run outcome — ✅ GREEN, halted at the ⛩ GO (2026-09-07)

Assembled in a throwaway clone of `aDNA-Network/aDNA` at `b94ec45`. ⛔ **Nothing committed, tagged
or pushed.** Candidates staged at `artifacts/template_release/staged/`.

| check | result |
|---|---|
| `git status` in the clone | ✅ **exactly 3 paths, all under `.adna/`, all payload — no extras ⇒ not a NO-GO** |
| C1 — candidate executable vs 4.3.0 | ✅ **BYTE-IDENTICAL** (de-narration changed **zero** executable lines) |
| C2 — leak tokens | ✅ **0** across 13 patterns |
| C3 — `bash -n` | ✅ parses |
| `--self-test` in the assembled tree | ✅ **PASSED**; P4's fixture **caught** |
| `gitleaks` | ✅ **no leaks found** (5 commits, 16.29 MB) |
| `adna_validate --governance` (python3.13) | ✅ **`GOVERNANCE SYNC: Zero drift`** |

⭐ **Zero drift *before* any version bump was PREDICTED, not discovered** — the payload adds no skill
and no template, so no count moves (the v8.7 precedent: *"NO count bump… zero-drift out of the
box"*). Recorded as a prediction met.

⭐ **C1 is the load-bearing control**: it separates *"the prose was rewritten"* from *"the program
was changed"*, which reading the diff could never establish.

⚠ **Two de-narration defects were caught by the controls, not by vigilance** — the first pass left
`ADR-011` ×4 and `origin/master` ×1. ⭐⭐ The `ADR-011` hits are the sharper one: they cite
**`Git.aDNA`'s** ADR-011 (instrument discipline) while **this vault's ADR-011 is *semver
discipline***, so every forked vault would resolve the citation against the wrong document — the
campaign's own *"always qualify which vault's ADR-025"* collision, one number over, and it would
have shipped as a confident wrong cross-reference into every fork.

⛔ **NOT applied, deliberately**: **P7** (version surfaces — `Q1` unruled; pre-empting it is exactly
what this vault gates) and **P6** (F-w's second site — `Q3` unruled).

⚠ **Fixture-placement rider.** Both fixtures carry `confidential: true` **by design**. Measured:
`control_confidential.md` fires `R5` even at 4.0.1; `test_confidential.yaml` does not fire at 4.0.1
(*the defect under repair is what protects it*) and **will** at 4.3.0. **Not live here** — this
vault's installed hook is `pre-push-secret-scan.sh` (gitleaks-only), not the sanitize hook. **P4
ships safely by the same precedent as `draft_post.md`/`notes.md`**, which have been committed and
pushed in both `.adna/` and the image for months with no fixture-path exemption anywhere in the
hook. ⛔ If this vault ever installs `pre-push-sanitize.sh`, `staged/test_fixtures_dirty/` must be
exempted or moved.

## §4 · Fire-time checklist (not yet run)

- [ ] Re-verify **every §1 row against disk** — rows are hypotheses (v8.6/v8.8 precedent).
- [ ] Assemble in a **throwaway clone**; `git status` shows **exactly** the ratified N paths under
      `.adna/` — any extra is **NO-GO**.
- [ ] **Five version surfaces**, including the **clone-only root `README.md` badge** — this node has
      no root README, so it cannot be checked locally; v8.6 *and* v8.7 both shipped it stale.
      Leave `Standard v2.5` / `standard-v2.5` alone.
- [ ] `gitleaks` clean; `adna_validate --governance` (**python3.13**) to **Zero drift**.
- [ ] Re-run the **self-test** in the assembled tree — P4's fixture must be caught.
- [ ] rsync local sync `-a -c --delete --exclude .git`.
- [ ] Regenerate the tour manifest; ⛩ **deploy** (P8).
- [ ] Tags-only; **never move a pushed tag** — a miss ships as a follow-up commit to `main`.
- [ ] Re-run the vault suite **after** the record edits (`gate-41` reads governance frontmatter);
      re-review `MANIFEST.md` genuinely, never date-bump.
