---
session_id: session_stanley_20260907_213837_v8_10_template_release
type: session
tier: 2
status: active
created: 2026-09-07
updated: 2026-09-07
operator: stanley
persona: rosetta
campaign: campaign_v8_10_release
mission: null
executor_tier: opus
token_budget_estimated: 120-190
token_budget_actual:
tags: [session, campaign_v8_10_release, template_release, v8_10, tier2]
---

# Session — v8.10 template release (Operation Lantern)

## Intent

Rule the prepared `skill_template_release` gate's six questions, then **fire the release and its
deploy tail together**, before `P5.1` recruitment opens.

## Derived at open — never carried

| Fact | Value | How |
|---|---|---|
| `main` CI (convention 19) | ✅ green at `a0d1b94`, run `34097259237` | `gh run list --workflow=gates.yml --branch main -L 5` |
| unpushed | **1** (`54b5c8d`) — **never through CI** | `git log origin/main..HEAD` |
| prod alias | `010cc4f`, 2026-09-07T07:41Z | `/.well-known/adna-build.json` |
| site bytes since prod | **EMPTY** ⇒ nothing owed to production before this release | `git diff 010cc4f..HEAD -- site/src site/public astro.config.mjs vercel.json` |
| ADRs | **0 `proposed`** (53 accepted · 1 amended · 1 inactive) ⇒ **no ADR awaits ratification** | `grep -h '^status:' what/decisions/adr_*.md \| sort \| uniq -c` |
| `.adna/` hook · `Git.aDNA` hook | **4.0.1** · **4.3.0** | `grep LAYER_CONTRACT_VERSION`, both sides |
| `.adna/` working tree | **clean** — Standing Rule 1 intact | `git -C .adna status --porcelain` |
| open missions | `P2.6` (⛩ O0b) · `P5.1` (human) · `P5.2` (queued) | each file's own `status:` |
| clock | UTC **2026-09-07 21:38**, local **14:38 PDT** — stamped UTC | `date -u` |

## ⛩ Rulings taken at the gate

Q1 **v8.10** · Q2 **P1/P4 first** · Q3 **fold P6 + stage two memos** · Q4 **ship the fixture** ·
Q5 **release + deploy tail together, before recruitment** · Q6 **deliver the Hopper finding**.
Reasoning: [[campaign_v8_10_release]] §2.

## Scope declaration (Tier 2)

**Writes**: `how/campaigns/campaign_v8_10_release/**` · `how/sessions/active/` (this file) ·
`.adna/**` (via **rsync from the shipped clone only**, never hand-edited) · `site/src/data/
tour_manifest.json` + a changelog entry · `site/tests/__screenshots__/` (`home` re-baseline) ·
`STATE.md` + `MANIFEST.md` at the close · two **staged** memos in `who/coordination/`.

**Conflict scan**: `how/sessions/active/` held **no other session** at open. `.adna/` clean.

## Findings

1. ⛔ **P6's ledger path resolved from nobody's root** — real path is
   `.adna/how/templates/template_node_adna_exemplar/HOME.md.template:54`; the row dropped a
   directory segment.
2. ⛔ **P6's blast radius was understated and is LIVE** — the promise renders today at
   `Home.aDNA/HOME.md:45` and `Network.aDNA/HOME.md` ⇒ two memos owed (Rule 10).
3. ⭐ **The dropped `Spec:` pointer was DANGLING in `.adna/` all along** — it resolves only in
   `aDNA.aDNA` `[D]`, so every forked vault shipped a hook header pointing at a spec absent from
   their tree. The ledger classified it *"pre-existing — not introduced"*, which measured **whether
   it was NEW** when the question was **whether it RESOLVES**. Removal is a fix; repointing is owed.

## Findings (cont.)

4. ⛔⛔ **`control_confidential.md` existed NOWHERE — not in `.adna/`, not in the public image, not
   in `Git.aDNA`** `[D]`. The ledger's P4 table presented it as an existing *control*; it was
   authored by the dry run and never shipped. ⇒ **P4 ships TWO fixtures, not one.**
5. ⭐⭐ **And the true finding is broader than the ledger's.** The image's own
   `test_fixtures/README.md:28` reads `| R5 … | ⏳ deferred | not in M05 S2 fixture set |`. ⇒ it is
   **not** that the extension allowlist went unexercised — **R5 had no fixture of any kind, and the
   image documented that as deferred.** The whole rule shipped untested in every downstream vault.
   Both fixtures are therefore load-bearing: without the `.md` control, a future run cannot
   distinguish *"R5 is dead"* from *"the extension allowlist is back."*
6. ⛔ **R3's coverage row is a FALSE ✅ in every clone.** `dirty/config/.env` matches the repo's own
   `.gitignore:24 .env`; `git ls-files` → **0** `[D]`. R5 was *honestly* marked deferred; **R3 is
   marked covered and is not**, which is the worse of the two. **Named, not fixed** — the repair is
   a decision (gitignore exception vs renamed fixture), and unforced widening at a sitting's tail is
   this campaign's most-repeated defect.
7. ⛔ **A trap in the fixture label convention, proven with a control.** The frontmatter reader
   skips blank lines and `>` preamble before the opening `---`, but **exits on `#`**. A YAML comment
   where an author would naturally put it (line 1) yields *no frontmatter* ⇒ R5 never fires ⇒ **a
   fixture that reads as coverage and is not** — the exact defect the pair exists to close. Control
   run: same bytes with one `#` line prepended → parser returns **empty**. Label sits below the
   closing fence, and the README now says why.
8. ⚠ **My own measurement was wrong before its subject.** I read `$?` after a `| tail` pipeline and
   nearly filed *"`--self-test` exits 0 on failure"* as a hook defect. Re-measured without the pipe:
   **exit 0 on pass, exit 1 on fail — the hook is correct.** *A zero meaning "the command failed"*,
   this campaign's own class, in the instrument doing the measuring.
9. ⚠ **C2 caught a leak token that was MINE.** The v8.10 `CLAUDE.md` comment named a **peer vault's
   internal finding ID** (`F-P7b-as`) — the same class the header de-narration removed 15 of, and I
   reintroduced it in the sibling file minutes later. ⭐ **Caught by the control, not by vigilance.**

## Controls — all green in the assembled tree

| Control | Result |
|---|---|
| **C1** candidate exec vs 4.3.0 | ✅ **BYTE-IDENTICAL** — de-narration changed zero executable lines |
| **C2** leak tokens, 16 patterns, whole diff | ✅ **0** — after catching finding 9 |
| **C3** `bash -n` | ✅ parses |
| `--self-test` @ 4.3.0 | ✅ **PASSED, exit 0**; both R5 fixtures caught; clean fixtures still clean |
| **Red-proof** @ 4.0.1, byte-identical fixtures | ✅ **FAILED, exit 1** — `❌ test_confidential.yaml — NO findings (rule miss)`; the `.md` control still caught ⇒ **exactly one assertion flips, attributable to the extension and nothing else** |
| `gitleaks` | ✅ no leaks (18 commits, 21.81 MB) |
| `adna_validate --governance` (py3.13) | ✅ **GOVERNANCE SYNC: Zero drift** — **filed as a prediction** in the charter before the run |
| New fixtures not `.gitignore`d | ✅ both `??`, not ignored — the check R3's defect teaches |

## Progress

- [x] Convention 19 + open derivations
- [x] Re-verify every ledger row against disk (C1/C2/C3 + P1/P3/P5/P8 + the placement rider)
- [x] Open `campaign_v8_10_release/` + this session file
- [x] Stage P6 at the corrected path
- [x] Assemble the throwaway clone; all controls green; **10 paths, no extras ⇒ not a NO-GO**
- [x] Five version surfaces → 8.10 (incl. the clone-only root README badge, stale at v8.6 *and* v8.7)
- [x] Commit in the clone — `3dec601`, **NOT tagged, NOT pushed**
- [ ] ⛩ **HALTED HERE** — push `aDNA-Network/aDNA` + tag `v8.10` is an outward, irreversible act
- [ ] rsync `.adna/`; tour manifest; changelog entry; ⛩ push + ⛩ deploy `aDNA.aDNA`
- [ ] `gate-49` `home` re-baseline
- [ ] Stage the two Q3 memos; deliver the Q6 Hopper finding
- [ ] Close cascade: suite after record edits, `MANIFEST.md`, `STATE.md`

## Files touched

_(recorded at close)_
