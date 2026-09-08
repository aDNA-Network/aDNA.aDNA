---
campaign_id: campaign_v8_10_release
type: campaign
title: "v8.10 governance release (Operation Lantern) — ship the R5/R6 fail-open repair, its fixture, and F-w's two sites to the public template image"
codename: "Operation Lantern"        # proposed, operator-chosen per the Palimpsest precedent; renameable at G1
owner: stanley
persona: rosetta
status: completed        # ✅ v8.10 SHIPPED 2026-09-08 — 3dec601 + tag v8.10 on aDNA-Network/aDNA; local .adna synced 6f8f3d2; site deployed tree=a2ad53b. Gov 8.9→8.10, standard v2.5 held, counts unmoved. Campaign CLOSED — do NOT re-open.
phase: P1/1              # ✅ FIRE complete 2026-09-08 — single-phase by design — the payload was authored, staged and dry-run GREEN under HAUSSMANN before this campaign existed
opened_when: "2026-09-07 — operator ruled Q1–Q6 at the prepared gate; the campaign dir is created AT the gate, once the version is ruled"
governance_bump: "8.9 → 8.10"
standard_version: "v2.5 (held — no normative change)"
seeded_by: campaign_haussmann / template_release staging ledger
source_ledger: how/campaigns/campaign_haussmann/artifacts/template_release/release_staging_ledger.md
ratified_at: "⛩ template-release gate, 2026-09-07 — Q1–Q6 ruled; see §2"
executor_tier: opus
token_budget_estimated: 120-190
created: 2026-09-07
updated: 2026-09-08
last_edited_by: agent_rosetta
tags: [campaign, v8_10, lantern, release, template_release, governance, pre_push_sanitize, f_w, completed, shipped]
---

# Campaign: v8.10 governance release — Operation Lantern

> **`status: completed` — OPENED 2026-09-07 at the ⛩ gate, SHIPPED 2026-09-08 (see §7).** This campaign is **unusual in its lineage
> and the difference matters to anyone reading it later**: v8.6–v8.9 each ran a P0→P3 arc that
> *authored* its payload. **This one's payload was authored, staged, and dry-run GREEN under
> HAUSSMANN before this campaign existed** — the ledger
> (`campaign_haussmann/artifacts/template_release/release_staging_ledger.md`) is its charter, and the
> campaign dir is created **at the gate, once the version is ruled**, on the `course_deploy` / `r97`
> precedent for operator-ruled increments. ⇒ **a single FIRE phase**, not a four-phase build.
>
> Codename **Operation Lantern** — proposed here, **operator-chosen and renameable at G1** per the
> Palimpsest precedent. The anchor is the payload's own finding: ⭐ *the rule was blind; the harness
> never was.* `4.0.1`'s `--self-test` printed `❌ test_confidential.yaml — NO findings (rule miss)`
> **the instant a fixture existed** — for the whole life of the defect `dirty/` held only `.md`
> files, so the extension allowlist was never exercised. *Coverage that reads as coverage and is not.*

## §1 · What ships

| # | Item | Ships to |
|---|---|---|
| **P1** | Hook `4.0.1 → 4.3.0` — **executable only** (crosses 4.1.0 · 4.2.0 · 4.3.0) | `.adna/how/standard/hooks/pre-push-sanitize.sh` |
| **P2** | Re-authored header — **a contract, not provenance** | same file |
| **P3** | `F-P7b-as`, the dead tty guard — **rides P1** (`:660` in theirs, re-derived exact) | same file |
| **P4** | ⭐ **TWO** fixtures — `dirty/control_confidential.md` + `dirty/test_confidential.yaml`. ⚠ The row said *one*; §3 finding 3 is why | `.adna/…/test_fixtures/dirty/` |
| **P5** | `F-w` (a) — `skill_onboarding.md:208`, the marketplace promise | `.adna/how/skills/` |
| **P6** | `F-w` (b) — the HOME exemplar template, **at the corrected path** (§3) | `.adna/how/templates/template_node_adna_exemplar/` |
| **P7** | Five version surfaces → `8.10` | `.adna/` + the clone |
| **P8** | Tour manifest regen + **site deploy** — the deploy tail | `site/` → `adna.network` |

⛔ **P8 is not optional and that is the whole of Q5.** `sourceRef` derives from `.adna/CLAUDE.md`'s
`version:`, so **a release invalidates the trust page's manifest by construction** — on `source_ref`
+ `local_sync_sha` alone, before `F-w` changes a byte. Fire the release and defer the deploy and
`/get-started/what-your-agent-reads/` publishes **v8.9 provenance for a standard that has moved**:
*`F-w`'s own class, produced by shipping `F-w`'s fix.*

## §2 · ⛩ The six rulings (2026-09-07)

| # | Question | Ruling |
|---|---|---|
| **Q1** | Version | **`v8.10`** — per **ADR-011 §3** (Major is scoped to breaking changes in *vault structure / CLAUDE.md format / frontmatter schema*; this payload touches none) and **§2** (*hotfixes are Minor bumps*). ⚠ The counter-argument was heard, not buried: a vault installing 4.3.0 has pushes **refused** that 4.0.1 allowed — consumer-visible, but not one of the three Major categories. **Standard holds at v2.5.** |
| **Q2** | Queue rank | **P1/P4 first**, `F-P7b-as` rides along. It yields *the right verdict for the wrong reason* — still exits 1, only the message never prints, **no push was ever wrongly allowed by it**. The fail-open **was**. |
| **Q3** | Fold P6? | **YES — and stage two memos.** See §3; the ledger row was wrong twice. |
| **Q4** | Ship the fixture? | **YES.** Without it the repair is unguarded in every downstream vault. |
| **Q5** | Deploy tail | **Fire the release AND its deploy tail together, before recruitment opens.** |
| **Q6** | The Hopper finding | **Deliver**, pin dated with its supersession condition on its face. |

## §3 · ⛔ Two ledger rows failed re-verification at the object — corrected here

The ledger's banner says *"rows are hypotheses; re-verify every row against disk before firing."*
**It earned itself on the first re-read**, which is why this section exists rather than a silent fix.

1. **P6's path resolved from nobody's root.** The row read
   `.adna/how/templates/HOME.md.template:54`. **That file does not exist.** The real path is
   `.adna/how/templates/template_node_adna_exemplar/HOME.md.template:54` — line number correct,
   **directory missing a segment**. Same class as the Hopper memo's own path defect, caught the same
   way: by opening the file instead of trusting the row.
2. **P6's blast radius was understated, and it is LIVE.** The ledger called it *"shipped but not
   published … blast radius differs from GR-1's"* — true about the trust page, and it reads as
   *dormant*. Measured `[D]`: the promise renders **today, on this node**, at `Home.aDNA/HOME.md:45`
   and `Network.aDNA/HOME.md` — the cold-start splash an operator sees. ⚠ And it is **not "five
   characters of edit"**: it is an HTML `<span>` carrying an `<a href>` and an `<em>` promise clause.
   ⇒ **two memos are owed** (Hestia, Venus), because fixing `.adna/` fixes **future renders only** and
   the two live instances are peer vaults (Rule 10: memo, never a direct edit).

### ⭐ A third finding, and it upgrades the ledger's own classification

P2's table listed `how/campaigns` as **`⊘ pre-existing — NOT introduced`**, i.e. harmless, ignore.
Measured: the candidate **drops** it, and the reason is stronger than de-narration. The line is
`# Spec: how/campaigns/campaign_adna_v2_infrastructure/…/pre_push_hook_spec.md`, and that path is
**DANGLING in `.adna/`** — it resolves only in `aDNA.aDNA`, the dev vault `[D]`. ⇒ **every forked
vault has shipped a hook whose header points at a spec that does not exist in their tree.**
**Removing it is a fix, not merely a de-narration**, and the ledger's "pre-existing, not introduced"
classification measured the wrong property — *whether it was NEW*, when the question was *whether it
RESOLVES*. ⛔ **Repointing it at a public URL is NOT taken here** — unforced widening at a sitting's
tail is HAUSSMANN's most-repeated defect; named as owed instead.

## §4 · Controls — green at the dry run, and re-run because that proves nothing about today's tree

| Control | Status (re-derived 2026-09-07, this sitting) |
|---|---|
| **C1** candidate executable vs 4.3.0 | ✅ **BYTE-IDENTICAL** — de-narration changed **zero** executable lines |
| **C2** leak tokens | ✅ **0** across 13 patterns (`mesh overlay` · `F-P7b` · `Git.aDNA` · `ADR-016` · `ADR-011` · `Hermes` · `Venus` · `origin/master` · `Exchange.aDNA` …) |
| **C3** `bash -n` | ✅ parses |
| **P1 line counts** | ✅ **362 → 701 total · 247 → 338 exec**; candidate 690/338 — the ledger's figures re-derive exactly |
| **P3 `:660`** | ✅ exact — `if ! ( : < /dev/tty ) 2>/dev/null; then` |
| **P5 diff** | ✅ exactly one line changed |
| **P8 pins** | ✅ `source_ref: v8.9` · `local_sync_sha: 0364d85` · `source_commit_date: 2026-07-24` |
| **Fixture placement rider** | ✅ this vault installs `pre-push-secret-scan.sh` (gitleaks-only, Venus), **not** the sanitize hook ⇒ P4 ships safely by the `draft_post.md` precedent |

⭐ **C1 is the load-bearing one**: it separates *"the prose was rewritten"* from *"the program was
changed"*, which reading the diff could never establish.

⚠ **Zero drift on `adna_validate --governance` is a PREDICTION, not a hope** — the payload adds no
skill and no template, so no count moves (the v8.7 precedent). **A non-zero result means something
unintended is in the clone.**

## §5 · Fire sequence

1. Re-verify every row against disk. ✅ **DONE — §3 and §4 are its output.**
2. Stage P6 at the **corrected** path.
3. Assemble in a **throwaway clone**; `git status` shows **exactly** the ratified paths — **any extra
   is NO-GO**.
4. Re-run all six controls **in the assembled tree**, incl. the hook's **own `--self-test`** with
   P4's fixture **caught**, `gitleaks`, and `adna_validate --governance` (**python3.13**).
5. Five version surfaces → `8.10`, **including the clone-only root `README.md` badge** — this node
   has no root README, so it cannot be checked locally, and **v8.6 *and* v8.7 both shipped it
   stale**. ⛔ Leave `Standard v2.5` / `standard-v2.5` alone.
6. rsync local sync `-a -c --delete --exclude .git`. **Tags only; never move a pushed tag.**
7. Regenerate the tour manifest; write the changelog entry (⚠ `title ≤ 70` / `description ≤ 160`,
   **DERIVED from `src/content.config.ts`**, never remembered).
8. ⛩ **push GO**, then ⛩ **deploy GO** — in that order (`inject_build_stamp.mjs:83` stamps HEAD and
   nothing checks HEAD is public).
9. Re-run the suite **AFTER** the record edits (`gate-41` reads governance frontmatter); re-review
   `MANIFEST.md` genuinely, never date-bump.

## §6 · What this campaign does NOT do

- ⛔ **No `P5.1` recruitment.** That is the operator's, and it opens **after** this deploy — `AC-1`
  pins the panel stimulus to a build stamp, so **the deploy hold goes live the moment recruitment
  does**.
- ⛔ **No standard-track change.** v2.5 holds; nothing normative moves.
- ⛔ **No `jsonld_census` instrument.** It is the one remaining agent-reachable build and it gets
  **its own sitting**, with a red-proof and controls — conventions 15/16/17 each ruled against
  authoring an instrument at a sitting's tail, and this desk's standing count of later-defective
  instruments is the argument.
- ⛔ **No repoint of the dangling `Spec:` pointer** (§3) — named as owed, not folded in.


---

## §7 · ✅ SHIPPED — the record (2026-09-08)

| | |
|---|---|
| public image | `b94ec45..3dec601` on `main`, **tag `v8.10`** — verified **at the remote** (`git ls-remote`), releases page **200** |
| local `.adna` | synced + committed **`6f8f3d2`**; **0 residual content differences** against the image; self-test **PASSED** |
| site | `deploy_record: 2026-09-08T03:37:42Z mode=prod tree=a2ad53b`; live headers **4/4 by name AND value**; no override flags |
| post-deploy probe | **7 PASS / 0 FAIL** on the **alias** |
| suite | chromium **698 passed / 1 skipped / 0 failed** · snapshot **26** · `html-validate` **0** |
| governance | **8.9 → 8.10** · standard **v2.5 HELD** · counts **unmoved** (predicted, then met) |

⭐⭐ **The probe's green is ATTRIBUTABLE BY MEASUREMENT, not by inference.** The probe was not run
pre-deploy, so instead the previously-deployed tree was read back: `010cc4f` genuinely carried
`source_ref: v8.9`, the marketplace promise **×1**, and the old changelog title. ⇒ **every assertion
was red on the tree that was live** — the difference between *"the probe passes"* and *"the probe
detects something."*

⚠ **`gate-27` caught `"Operation Lantern"` reaching public copy and was RIGHT TO.** The token is
allowlisted at the ratified surface (`get-started/what-your-agent-reads/**` · `op_codename`), and the
**procedural finding** is recorded in the entry itself: the 2026-08-19 rationale had routed *"fixing
the image's carriage of internal codenames"* forward to *"the next template release"* — **this one** —
and it was read **at the gate, after the tag**. Past the tag the fix is unavailable, because the
manifest publishes the immutable tag URL beside a sha256, so editing `.adna/CLAUDE.md` afterwards
would make vendored content disagree with the tag it cites. ⇒ ***a forward-routed editorial item must
be a PRE-TAG checklist line in `skill_template_release`, not a note in an allowlist rationale, which is
only read once the gate has already gone red.*** Carried as owed.

## §8 · Owed, and deliberately not folded in

- **`sweep/jsonld_census.md` has no instrument** — the only remaining agent-reachable build; **its own
  sitting**, with a red-proof and controls.
- **R3's fixture** — a false ✅ in every clone. Named at both ends (ours and Hopper's); the repair is a
  decision (gitignore exception vs renamed fixture), not a mechanical edit.
- **The dangling `# Spec:` pointer** — removed from the shipped header because it resolved nowhere in
  `.adna/`; **repointing it at a public URL is not taken here.**
- **The pre-tag checklist line** for forward-routed editorial items (above).
- **Two Q3 memos STAGED, not sent** — Hestia (`Home.aDNA/HOME.md:45`), Venus (`Network.aDNA/HOME.md:47`).
