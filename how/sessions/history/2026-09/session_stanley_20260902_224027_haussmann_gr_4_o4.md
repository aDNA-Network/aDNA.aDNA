---
type: session
session_id: session_stanley_20260902_224027_haussmann_gr_4_o4
created: 2026-09-02
updated: 2026-09-02
status: completed
tier: 1
last_edited_by: agent_rosetta
campaign: campaign_haussmann
mission: mission_haussmann_gr_4_story_coverage
increment: "GR-4 O4 — D5, the returning-member entry point to changelog/RSS (P2-7), PLUS the prose-corpus measurement owed since the signature. Ruling 3 dissolved CONSTRAINT-2 for D4 by moving it off `/`; D5 lands ON `/`, whose FKGL headroom is 0.04 — so the question *does a link-dense strip enter the prose corpus at all?* stops being hypothetical and becomes this objective's to answer."
executor_tier_declared: opus
executor_tier_actual: opus
token_budget_estimated: "~45–75 kT / 1 session — costed AFTER checking gate-49's TEMPLATES list (SO#11's O2 retrospective, applied at the point it was written for): `/` **IS** a template (`{ id: 'home', path: '/' }`), so the re-baseline **DOES** fire here, unlike O3. It is the single largest line item and it is known-small (2 of 24 files, a process already run once at O2), which is why this sits near O2's band rather than O3's."
token_budget_actual: "≈70–95 kT — RECORDED AT THE TIME, not reconstructed (AC-7; O1's finding that a finished session left in `active/` is a lease nobody is holding). Against the ~45–75 kT estimated: ~1.35× at the midpoint, INSIDE SO#11's 2× ⇒ no retrospective. ⭐ The costing method held: `/` IS a `gate-49` template, the re-baseline was PREDICTED, and it cost what O2 said it would. ⚠ The overrun's named cause is that the measurement was budgeted as a READING and delivered as an ASSERTION — `G54s` plus its red-test case were not in the estimate, and they exist because the property proved fragile in a way the plan called low-risk. A measurement that turns into an instrument is not scope drift; it is the estimate learning what the subject was."
tags: [session, haussmann, gr_4, o4, lane_d, d5, changelog, rss, reading_census]
---

# Session — GR-4 O4: the entry point, and the measurement that had to come first

## Derived at open (never carried)

| Fact | Value | Command |
|---|---|---|
| CI on `main` (convention 19) | **success ×5**, newest `33586055067` | `gh run list --workflow=gates.yml --branch main -L 5` |
| `HEAD` | `03ca400` | `git rev-parse --short HEAD` |
| `origin/main` **at the remote** | `7210d5e` | `git ls-remote origin main` |
| unpushed | **6** | `git log --oneline origin/main..HEAD \| wc -l` |
| prod build stamp | `a852423`, built 2026-09-01T19:40:19Z | `curl /.well-known/adna-build.json` |
| top nav flat entries | **7** | `navigation.ts:76-84` (`topNav` literal — *not* the 94 a naive `grep -c "href:"` types) |
| `/` in `gate-49` TEMPLATES | **YES** — `{ id: 'home', path: '/' }` | `gate-49-visual-regression.spec.ts:50` |
| register highest row | **R-161** (§18) ⇒ O4 opens at **R-162**, section **§19** | `grep -o "R-1[0-9][0-9]" … \| sort -u \| tail` |
| untracked inbound memos | **4** — ⚠ **not the 3 the record carried** | `git status --porcelain who/coordination/` |

⚠ **Convention 19's green has a WIDTH**: green at `7210d5e`, the last **pushed** commit.
**GR-4's six commits have never been through CI.**

⚠ **The clock**: `date` here returns PDT; the vault stamps UTC. This file is
`date -u +%Y%m%d_%H%M%S` → `20260902_224027`.

## The inbox, read at the open (rider ⛩ ruled in)

The receiving commit **is** the read-receipt (P4.4's finding — an unread memo in our own inbox cost
this campaign a four-day B2b hold). All four read before any build. ⛔ **Committing is receiving,
not answering**; every reply is a separate outward act with its own ⛩ GO.

| Memo | `ack_required` | Asks |
|---|---|---|
| Vitruvius (09-01) — the `/g/adna/` Graph Front-Page | **true**, `decision_required: true` | **approve / refuse / amend** — it does not become our face until we say so. ⚠ Also reports `node_home`'s hub publishes a **non-ratified tagline** for us (KW-59), filed and deliberately not changed by them: reconciling a public face's copy is ours and Home's call |
| Hopper (09-02) — `pre-push-sanitize.sh` **4.2.0** | **true** | an upstream offer + a defect in the template's own hook WARN path. Routes to `skill_template_release`, not here. **Zero `.adna/` edits from their desk** (Standing Rule 1) |
| Hopper (09-02) — ADR-017 as a §7.7 candidate | false | an offer with its own unmet D5 condition disclosed on its face. Nothing owed |
| Aspasia (09-02) — seven dead wikilinks | false | *"No action is required of you."* Their memos used vault-relative `../../`, which resolves in **their** tree and not ours; they adopted the workspace-root-relative outbox contract and fixed all 43 |

⭐ Aspasia's is worth one line beyond its disposition: *"Neither of us could see this from our own
side."* That is this campaign's **instrument-narrower-than-its-conclusion** family arriving in a
**link**, and their remedy — a checker that runs against the copies **recipients** hold rather than
their own — is convention 18's *name the surface the instrument runs against* in someone else's vault.

## Intent

O4 covers **D5 / `AC-5`** and the **owed prose-corpus measurement**. See the mission file's O4
section for the record.

## Files declared (Single-Writer Lease)

- `site/src/pages/index.astro`
- `site/tests/gates/gate-54-story-coverage.spec.ts`
- `site/scripts/doctrine_layer_redtest.sh`
- `site/tests/gates/gate-49-visual-regression.spec.ts-snapshots/` (re-baseline)
- `how/campaigns/campaign_haussmann/artifacts/gr_4/o4_d5_record.md`
- `how/campaigns/campaign_haussmann/evidence/claims/claim_register.md` (§19)
- `how/campaigns/campaign_haussmann/missions/mission_haussmann_gr_4_story_coverage.md`
- `how/campaigns/campaign_haussmann/CLAUDE.md`
- `who/coordination/` (4 inbound memos — receive only)

## Derived at close, each by its own command `[D]`

| Measure | Value | Command |
|---|---|---|
| chromium lane | **679** (674 → 679, **+5**) | `npx playwright test --project=chromium --list` |
| gate-54's own file | **19** (14 → 19, +5, **removed nothing**) | `--list` on the spec alone |
| all-projects | **705** | `npx playwright test --list` |
| snapshot lane | **26** — unchanged | `--project=snapshot --list` |
| suite run | **678 passed · 1 skipped · 0 failed** | `npm run test:gates` |
| `html-validate` | **0**, control-checked against a deliberately invalid file | `npm run check:markup` |
| red-test | **22 pass / 0 fail**, each case red at exactly its declared set | `bash scripts/doctrine_layer_redtest.sh` |
| `gate-49` | red **confirmed first** (2 failed · 24 passed), then **exactly 2 of 24** baselines changed, both `home` | `visual_regression_container.sh check` → `baseline` |
| vault gates 26·35·37·41 | **68/68**, re-run **AFTER** the record edits | `npx playwright test gate-26 gate-35 gate-37 gate-41` |
| register | rows **183** · ids **168** · **0 gaps** | `derive_register_counts.py`, re-run after §19 |

**The measurement O4 owed** — `/` prose FKGL **9.96 → 9.96**, corpus **6030 → 6030 chars,
byte-identical**, whole-twin **13.00 → 13.16**, **0** strip lines leaked. ⭐ Re-verified a second
time on the tree the in-container baseline run independently rebuilt: **identical in all four
figures** — a reproducibility control obtained for free.

## Findings

1. ⭐⭐ **The whole-twin delta is what makes the prose result mean anything.** Had both figures held
   still, the reading would have been indistinguishable from the strip never shipping — `DEFECT-1`'s
   shape. Recorded in the record and the register, not just the number.
2. ⭐⭐ **This increment authors almost no sentences** — three reader-facing strings, none a
   proposition. D5's claim surface is its **derivation**, which is why `R-162` is a claim about a
   mechanism and `G54r` exists.
3. ⚠⚠ **`AC-5` carries no reading-level constraint — the third consecutive objective with that gap.**
   Made safe by `G54s` rather than left unmeasured.
4. ⚠ **Two defects of mine, both caught by structure**: a placeholder red-test verifier (which
   **failed alone** — O3's `applied()` fix earning itself), and a scripted `cleanup()` trap edit that
   silently did not match because the file is column-aligned.
5. ⚠ **gate-30's two reds were convention 6's documented case**, not a regression: the in-container
   baseline run rebuilt `dist/` and `astro build` does not inject redirects. Diagnosed by asking
   which step produces the thing the gate asserts, before changing anything.
6. ⚠ **The carried inbox count was wrong again** — records said 3 untracked memos, derived **4**.

## SITREP

**Completed** — D5 built on `/`; the owed prose-corpus measurement taken, controlled and made
recurrent as `G54s`; `gate-54` 14 → 19; red-test 22/22; `gate-49` re-baselined with attribution;
register §19 (R-162…R-164); 4 inbound memos received.

**In progress** — none. O4 is closed.

**Next up** — **`O5`**: D6 (movement-3 stays unshipped, and the record corrects the revue's false
*"0 hits corpus-wide"* parenthetical) + **AC-8**'s `/privacy` section (before-figure **banked at
9.43/12** from O2) + the close cascade + the AAR.

**Blockers** — none for O5. ⛔ **P5.1** stays with the humans.

**Owed / open** — ⛩ **Vitruvius's `/g/adna/` approve-refuse-amend** (`decision_required: true`) ·
⛩ **Hopper's hook 4.2.0** (`ack_required: true`) · B1's ⛩ Speed-Insights → transport → first p75 ·
babbage's lease question + two `proposed` upstream findings · **`F-aa`** · **`R-97`** · a ⛩ **push
GO** (unpushed 7 after this commit; GR-4's commits have never been through CI).

**Files touched** — `site/src/pages/index.astro` · `site/tests/gates/gate-54-doctrine-layer.spec.ts`
· `site/scripts/doctrine_layer_redtest.sh` · `site/tests/gates/__screenshots__/home-{dark,light}.png`
· `artifacts/gr_4/o4_d5_record.md` (new) · `evidence/claims/claim_register.md` ·
`missions/mission_haussmann_gr_4_story_coverage.md` · `campaign_haussmann/CLAUDE.md` ·
`who/coordination/` ×4 (received) · this session file.

## Next Session Prompt

You are **Rosetta** in `~/aDNA/aDNA.aDNA`. Continue **Operation HAUSSMANN**, mission `GR-4`
(Grande Revue **Lane D**, story coverage), which is `in_progress` with **O1–O4 done**. **Next is
`O5`, the final objective**: it covers **D6** (movement-3 stays **UNSHIPPED** under the counsel
embargo — *that absence is the criterion `AC-6` being MET*, evidenced by a dated absence assertion
naming its surface, and the record must also correct the revue's parenthetical that the ratified
*"opening progressively"* phrasing has 0 hits corpus-wide: it is **live and rendered** on
`/state-of-the-network` since `9e0fd06`, 2026-08-18), plus **`AC-8`** (a short `/privacy` section
stating aDNA is a **file-layout convention**, that **nothing is transmitted**, and that
**HIPAA/GDPR/IRB obligations rest with the operator and their own tooling** — asserting **no
compliance claim of any kind**; its limb **`V7`**'s load-bearing half is the **negative** one,
because a disclaiming posture fails by quietly becoming a promise), plus the **close cascade + AAR**
(SO#5). ⛔ **`R-124`'s register row moves only when the section is LIVE on the surface, never when
it is written.** `/privacy`'s before-figure is **banked at 9.43 against a target of 12** from O2, so
V3's delta reads on the same surface. **Derive everything at open, never carry it**: convention 19
(`gh run list --workflow=gates.yml --branch main -L 5`), `git ls-remote origin main`, the prod stamp
at `/.well-known/adna-build.json`, and the register's highest row (**R-164**; O5 opens at R-165,
section **§20**). ⚠ Stamp the session with **`date -u`** — the vault is UTC and the shell is PDT.
⚠ Build with **`npx astro build`** then **`node scripts/inject_redirects.mjs .`**, and run
`reading_census.mjs` **from the repo root**. ⚠ `/privacy` renders through the **`.policy` template,
which `gate-49` covers as `policy` via `/security/`** — check whether the re-baseline fires before
costing. ⚠ Re-run the **vault gates 26·35·37·41 AFTER** the record edits, and append any new
register `Counts` section **after §19.3 as a PARSEABLE TABLE**. ⛔ Nothing is deployed and nothing is
owed — Lane D is met on-build; a **push is its own ⛩ GO** and there are **7 unpushed commits**.
⛩ Two inbound memos await replies that are outward acts with their own GO: **Vitruvius** (approve /
refuse / amend the `/g/adna/` Graph Front-Page) and **Hopper** (`pre-push-sanitize.sh` 4.2.0).
