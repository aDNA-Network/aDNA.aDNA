---
type: session
session_id: session_stanley_20260902_210850_haussmann_gr_4_o3
created: 2026-09-02
updated: 2026-09-02
status: completed
tier: 1
last_edited_by: agent_rosetta
campaign: campaign_haussmann
mission: mission_haussmann_gr_4_story_coverage
increment: "GR-4 O3 — D3, the local-models story. \u26e9 Ruling 2's destination did not exist as described: the recon sent D3 to 'where the L0\u2013L3 ladder actually lives', and that ladder is a HOMONYM. Re-ruled at the open onto `/network`, on corrected reasoning. Ship a *planned*-framed local-models section, with the presence assertion AC-3 never carried."
executor_tier_declared: opus
executor_tier_actual: opus
token_budget_estimated: "~45\u201365 kT / 1 session \u2014 costed AFTER checking gate-49's TEMPLATES (SO#11's O2 retrospective): `/network` is NOT a template, so O2's dominant cost (the re-baseline) does not fire here."
token_budget_actual: "≈60–80 kT — RECORDED AT THE TIME, not reconstructed (AC-7; O1's finding that a finished session left in `active/` is a lease nobody is holding). Against the ~45–65 kT estimated: ~1.2× at the midpoint, INSIDE SO#11's 2× ⇒ no retrospective. ⭐ The overrun has one named cause and it is not scope drift: TWO defects were found that the estimate did not contain — the genesis/planned vocabulary defect (found by the AC-7 enumeration) and the R-64-class over-promise the new band contradicted — each requiring a same-diff correction across three files plus a re-derivation. ⚠ The estimate was right about the BUILD, which was already done; it could not have been right about what verifying the build would surface."
tags: [session, haussmann, gr_4, o3, lane_d, d3, local_models, network]
---

# Session — GR-4 O3: D3 lands where the measurement survives

## Derived at open (never carried)

| Fact | Value | Command |
|---|---|---|
| CI on `main` (convention 19) | **success \u00d75**, newest `33586055067` | `gh run list --workflow=gates.yml --branch main -L 5` |
| `origin/main` at the remote | `7210d5e` | `git ls-remote origin main` |
| unpushed | **5** \u2014 \u26a0 **not the 4 carried forward**; `526faa9` was uncounted | `git log --oneline origin/main..HEAD | wc -l` |
| prod build stamp | `a852423`, built 2026-09-01T19:40:19Z | `curl /.well-known/adna-build.json` |
| register highest row | **R-152** (\u00a717) \u21d2 O3 opens at **R-153** | `grep -o "R-1[0-9][0-9]" ... | sort -u | tail` |

\u26a0 **Convention 19's green has a WIDTH**: green at `7210d5e`, the last **pushed** commit.
**GR-4's five commits have never been through CI.**

## Intent

O3 covers **D3 \u2014 local models**. See the mission file's O3 section for the record.


## Derived at close, each by its own command `[D]`

| Lane | Command | Before | After |
|---|---|---|---|
| chromium | `--project=chromium --list` | 670 | **674** |
| chromium **without** gate-54 | `--grep-invert "gate-54"` | — | **660** |
| gate-54's own file | `--list <spec>` | 10 | **14** |
| all-projects | `--list` | 696 | **700** |
| snapshot | `--project=snapshot --list` | 26 | **26** |

`674 − 660 = 14` = the file's own total ⇒ **+4, removed nothing.**
Run: **673 passed · 1 skipped · 0 failed** · `check:markup` **0**, control-checked against a
deliberately invalid file that produced exactly 1 error · red-test **17 pass / 0 fail**, every case
red at exactly its declared set · `/network` prose FKGL **11.56 → 8.89** (same instrument both ends).

## SITREP

**Completed** — `AC-3` ✅ · `V2` ✅ (`AC-7` ◐ mission-level, per the O2 correction at `526faa9`).
D3 ships as Band 4b on `/network`. `gate-54` gains **G54k/l/m/n**; red-test gains **cases 12–15**.
Two claim-truth defects found and corrected **before shipping**; **9 register rows** (R-153…R-161);
AC-3 corrected strike-not-delete same-diff with the build.

**Findings**
1. ⛩ **The ruled destination did not exist** — `L0–L3` is a **homonym** (literacy ladder, not
   compute), and the compute ladder's only site-wide home is **byte-vendored**. *A shared notation is
   not a shared referent.*
2. ⭐⭐ **The copy named a word the registry does not publish** — `genesis` in the data, **`planned`**
   on the two cards it links to. `G54m`'s marker list carried `'genesis'`, so **the limb was green on
   the source's own word while the copy misdirected the reader.**
3. ⭐⭐ **The new band contradicted a pre-existing over-promise 40 lines above it** — `R-64`'s class
   on a **second** surface, its P0.5 remedy having reached **one of three**. Scoped (**R-161**);
   the homepage's third instance **named, not touched**.
4. ⚠ **The gate header's own FKGL pair was stale** (`8.93/2.63` → **`8.89/2.67`**) because a copy
   correction moved the prose after the figure was taken. Corrected in the commit that quotes it.
5. ⚠ **A red-test harness defect that had already fired** — `applied()` did not restore before
   returning, so one stale grep produced **four false HARNESS BUGs and a red final control**.
   *A case that cannot apply must fail alone.*

6. ⭐⭐ **The close itself turned `G41b` red** — §18's tally shipped as prose, not the parseable
   `Counts` table. **§17.5's warning was followed exactly and governed POSITION while the failure was
   FORMAT.** Caught **only** by re-running the suite after the record edits ⇒ *convention 16 one step
   after quoting it*, and **P5.1's finding verbatim**. Register re-derived: rows **180** · ids
   **165** · `R-11…R-161` · **0 gaps**. Final suite **673 / 1 skipped / 0 failed**.

**In progress** — none. O3 is closed.

**Next up** — **O4** (D5 + the owed prose-corpus measurement), then **O5** (D6 + AC-8 + close +
AAR).

**Blockers** — none for O3. ⛔ **P5.1** stays with the humans.

**Files touched** — `site/src/pages/network.astro` · `site/tests/gates/gate-54-doctrine-layer.spec.ts` ·
`site/scripts/doctrine_layer_measure.mjs` · `site/scripts/doctrine_layer_redtest.sh` ·
`how/campaigns/campaign_haussmann/artifacts/gr_4/o3_d3_record.md` (new) ·
`.../evidence/claims/claim_register.md` · `.../missions/mission_haussmann_gr_4_story_coverage.md` ·
`.../CLAUDE.md` · this session file.

⛔ **Nothing deployed, nothing owed** — met on-build. ⛔ **No push** — its own ⛩ GO.

## Next Session Prompt

Continue **Operation HAUSSMANN, GR-4 (Lane D), objective O4** in `~/aDNA/aDNA.aDNA`. Read
`how/campaigns/campaign_haussmann/CLAUDE.md` (conventions 1–19) and
`missions/mission_haussmann_gr_4_story_coverage.md`. O1/O2/O3 are closed and committed; **nothing is
deployed and nothing is owed** (Lane D is met on-build; prod serves `a852423` — **re-probe, never
quote**). O4 covers **D5**: a returning-member entry point to changelog/RSS above the footer
(**AC-5**), with the top-level nav still holding **exactly 7 flat entries** derived from
`navigation.ts`, never typed. ⚠ **O4 also owes the prose-corpus measurement the signature deferred**:
does a link-dense strip enter the reading corpus at all? P4.5b measured that link-dense lines *leave*
it, so measure before assuming either direction — `/`'s FKGL headroom is **0.04**, the tightest on
the site. ⚠ **`V4` red-proves ONE MUTATION PER ASSERTION**, each naming the assertion it reds via; a
red through the wrong one is a **HARNESS BUG** (DEFECT-4 spent `F-z` forward). **Check `gate-49`'s 12
`TEMPLATES` before costing** — `/` **is** one, so unlike O3 a re-baseline **will** fire. Node quirks:
stamp with `date -u`; `npx astro build` then `node scripts/inject_redirects.mjs .`;
`reading_census.mjs` runs **from the repo root**; `grep -c` exits 1 on zero; `git mv` stages the
pre-edit blob. Derive `main`'s CI status at open (convention 19) — it is green at **`7210d5e`**, the
last **pushed** commit, and **GR-4's commits have never been through CI**.
