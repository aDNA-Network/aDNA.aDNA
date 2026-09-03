---
type: session
session_id: session_stanley_20260903_210742_haussmann_deploy_gr4
created: 2026-09-03
updated: 2026-09-03
status: completed
tier: 1
last_edited_by: agent_rosetta
campaign: campaign_haussmann
mission: null   # ⛩ OPERATOR-RULED ROUTING SITTING, not a mission increment. GR-4 is `completed` and the Grande Revue's ratified Gate-1 order is complete; nothing agent-reachable is queued in the backbone. This sitting performs the ⛩ DEPLOY GO the campaign has owed since GR-4's O1, plus two operator-elected residue items. It opens no mission and closes none.
increment: "⛩ DEPLOY GO — publish the five increments of GR-4 public copy that are built and unseen (two doctrine pages · `/commons` · `/network` · `/`'s latest-strip · `/privacy`), then discharge `R-124` at its ruled condition (LIVE, never written). Riders, operator-elected: the stale `P4.4b B3` pointer repair, and `F-aa`."
executor_tier_declared: opus
executor_tier_actual: opus
token_budget_estimated: "~90–150 kT / 1 session. Costed AFTER reading `gate-49`'s TEMPLATES list (SO#11's O2 retrospective, applied at costing time for the fourth consecutive sitting): ⚠ `/` **IS** a template (`gate-49:50`), and the owed changelog entry moves the homepage strip's rendered dates ⇒ **a `home` re-baseline DOES fire**, O4's shape rather than O5's. Bands: changelog entry + re-baseline ~25–40 · probe authored + red-proven + green ~25–40 · the deploy itself ~10–15 · R-124 discharge + register §21 ~10–20 · the two riders ~10–20 · close cascade + suite re-run ~10–15."
token_budget_actual: "≈115–150 kT — RECORDED AT THE TIME, not reconstructed (O1's finding that a finished session left in `active/` is a lease nobody is holding). Against the ~90–150 kT estimated: inside the band at the top edge ⇒ no SO#11 retrospective. ⭐ The costing method held where it was aimed — `gate-49`'s TEMPLATES list was read BEFORE costing, `/` was correctly predicted to re-baseline and `/network`+`/privacy` correctly predicted not to, and the snapshot lane moved exactly the 2 files predicted. ⚠ The named overrun cause is the probe: budgeted as author-and-run, it cost two defect cycles (the footer-matching false greens caught in the red run, then the scoped-attribute false red caught after the deploy). That is an instrument learning what its subject is, not scope drift — and it is the same shape as O4's overrun."
tags: [session, haussmann, deploy, gr_4, r_124, f_aa, routing, prod]
---

# Session — the ⛩ deploy GO: five increments that were built and unseen

## Derived at the open (convention 12 — recon-at-execution; nothing below is carried)

| Fact | Value | Command |
|---|---|---|
| **Clock** | **2026-09-03 20:57 UTC** (local reads `2026-09-03 13:57 PDT`) | `date -u` |
| `main` CI (**convention 19**) | ✅ **green** — run `33708987835`, `success`, 2026-09-03T02:47:59Z | `gh run list --workflow=gates.yml --branch main -L 5` |
| …**its width** | ⭐ green **at `8eb6955`, which IS `origin/main`'s tip**. Unlike every GR-4 sitting, the lane is green at the exact commit this deploy will publish — GR-4's coda push closed that gap. | `git ls-remote origin main` |
| `origin/main` | `8eb6955` — derived **at the remote**, never at a tracking ref | `git ls-remote origin main` |
| Unpushed | **0** | `git log origin/main..HEAD \| wc -l` |
| Production | **`a852423`**, built `2026-09-01T19:40:19.817Z`, `mode=prod` | `curl /.well-known/adna-build.json` |
| Ancestry guard | `a852423` **is** an ancestor of HEAD ⇒ the guard passes on its own terms; **no override flag is needed or will be used** | `git merge-base --is-ancestor a852423 HEAD` |
| Unshipped | **26 commits**; `site/src` = **6 files, +409 lines** | `git diff --stat a852423..HEAD -- site/src` |
| Newest changelog entry | **2026-08-28** ⇒ an entry is **owed**, and the date-keyed cadence prompt **will** fire | `ls src/content/changelog` |
| Active sessions | **none** (this file is the first) | `ls how/sessions/active/` |

## Why a deploy, and why now — the reasoning, not the wish

The deploy has been named as *owed* at the close of every GR mission. It is not merely owed; it is
**on the critical path to the campaign's endgame**, and that was derived at this open rather than
assumed:

- **`R-124` cannot discharge without it.** ⛩ Ruling 1's condition is exact — the register row moves
  when the section is **LIVE**, never when it is written (register §20.4). `/privacy`'s section is
  written and not live.
- **`P5.1`'s `AC-P`/`V1`** require each filed artifact's recorded stamp to be *ancestor-of-HEAD **and**
  contain the closed missions' work*. `a852423` is an ancestor ✅ and contains **none** of GR-4's copy.
  A panel run against it cold-reads `/` with no strip, `/commons` with no disambiguation, `/network`
  with no local-models band, `/privacy` with no disclaimer ⇒ **G-11 exactly**, the defect that forced
  P4.5b to run before P5.1.
- **`P5.2`** carries a hard precondition that predecessors be **DEPLOYED, not `completed`**.

## ⚠ A stale pointer found at the open, verified at the object

`GR-4`'s close block, the campaign `CLAUDE.md` and `MEMORY.md` all read *"NEXT: `P4.4b B3`, or the
campaign's endgame."* **B3 shipped 2026-09-02 (`4bbbe01`)** and
`mission_haussmann_p4_4_ci_hardening.md` reads **`status: completed`, both halves**, AAR filed. ⇒ the
*index-vs-artifact* class **in three surfaces at once**, and in the usual direction: the artifact moved
and the pointers did not. ⭐ Note where it was caught — not by re-reading the pointers against each
other (all three **agree**, which is exactly why it survived), but by opening the mission file the
pointer names. **Three agreeing indexes are not a corroboration; they are one claim copied twice.**

Repair is an operator-elected rider on this sitting.

## Objectives

| # | Objective | State |
|---|---|---|
| 1 | Session open + derived-at-open facts | ✅ |
| 2 | The owed changelog entry (`2026-09-03`) | ✅ ⚠ refused first on `title` 70 vs 73 |
| 3 | `deploy_probe_gr_4.mjs` authored + **proven RED** (15 PASS / 22 FAIL) | ✅ |
| 4 | `gate-49` `home` re-baseline — red confirmed first, exactly 2 of 24 changed | ✅ |
| 5 | ⛩ push GO then ⛩ deploy GO — `tree=7cef6e0`, no override flags | ✅ |
| 6 | Post-deploy probe **38 PASS / 0 FAIL** ⚠ after a FALSE RED, script modified | ✅ ⚠ |
| 7 | `R-124` → `gap → fixed`, register §21.1, counts 189/174/0 derived | ✅ |
| 8 | Rider: stale `P4.4b B3` struck in all three surfaces | ✅ |
| 9 | Rider: `F-aa` corrected to §2.1's binding; control re-measured → 0 | ✅ |
| 10 | Close cascade; suite re-run AFTER the record edits | ✅ |

## Log

- **2026-09-03 20:57 UTC** — session opened. Facts above derived, none carried. Routing call put to
  the operator (SO#1) and ruled: **deploy first**, with the pointer repair and `F-aa` as riders;
  `P5.1`, `R-97`, `F-w`, Speed-Insights, and the Vitruvius/Hopper/babbage replies explicitly **out of
  scope**.
- **21:15 UTC** — changelog entry authored; `description` measured at 151/160 **before building**.
  ⚠ The build then **refused it**: `title` capped at **70**, draft **73**. The title's length had
  been *printed and compared to nothing* — GR-1's *"a schema-limit check that measured one field and
  assumed its sibling"*, in the sitting citing GR-1. Both limits now **derived** from
  `src/content.config.ts`.
- **21:20 UTC** — probe authored; **RED run 17 PASS / 20 FAIL**. Reading it line by line found **two
  assertions green against a site with no strip** (matching the *footer*). Scoped to the strip's own
  markup → **15 PASS / 22 FAIL**, all controls green.
- **21:25 UTC** — `gate-49` red **confirmed first** (2 failed / 24 passed), then regenerated
  in-container: **exactly 2 of 24 changed**, 22 untouched. No mask, no tolerance raised.
- **21:30 UTC** — chromium **683 passed / 1 skipped**; committed `7cef6e0`.
- **21:35 UTC** — ⛩ **push GO** granted and taken (`8eb6955..7cef6e0`), gitleaks clean on the
  outgoing range, verified **at the remote**.
- **21:37 UTC** — ⛩ **deploy GO** taken. `deploy_record: 2026-09-03T21:37:31Z mode=prod tree=7cef6e0`.
  No override flags; ancestry guard passed on its own terms; live headers 4/4 by value.
- **21:39 UTC** — post-deploy probe **33 PASS / 4 FAIL — A FALSE RED.** Astro's `data-astro-cid-*`
  emptied the strip extraction. Verified at the object with `curl`, fixed the extraction (⛔ not by
  reverting to the whole-page match, which would have restored the vacuity removed an hour earlier).
  Re-run: **38 PASS / 0 FAIL**.
- **21:45 UTC** — `R-124` → `gap → fixed` (register §21.1); counts re-derived by the script
  **after** §21 was written: **189 / 174 / 0, unchanged** — correct, because §21 adds no row.
- **21:50 UTC** — riders: `F-aa` corrected; the stale `P4.4b B3` pointer struck in all three surfaces.
- **21:55 UTC** — suite re-run **AFTER** the record edits: chromium **684 passed / 0 failed** ·
  snapshot **26** · all-projects **710** · fast lane **566** — each by its own command.
  `html-validate` **0**, **control-checked** (a deliberately invalid file exits 1).

## SITREP

**Completed** — The ⛩ deploy GO. Five increments of GR-4 public copy are **live** at
`adna.network` (`tree=7cef6e0`): the doctrine layer on `/patterns/mission-decomposition` +
`/learn/tutorials/design-a-mission` · `/commons`'s name note · `/network`'s local-models band ·
`/`'s *What's new* strip · `/privacy#regulated-data`. `R-124` **discharged** at its ⛩-ruled
condition. The owed changelog entry shipped. Both riders done. Probe red-proven then green.

**In progress** — none. Nothing is half-built.

**Next up** — ⛩ **an operator routing call again, and this time the honest answer is that the
backbone is human-gated.** `P5.1` needs five recruited cold readers, a fresh macOS account, and the
operator running the funnel as an outsider; `P5.2` waits on it. ⭐ `P5.1`'s `AC-P` is **satisfiable
for the first time** — production now contains the closed missions' work. Agent-reachable work that
remains is all small and none of it is in the ratified sequence: `R-97`'s gate · `F-w`'s second lens
→ next `skill_template_release` · the ⛩ Vitruvius `/g/adna/` decision and Hopper 4.2.0 ack (each an
outward act) · babbage's lease question + two `proposed` upstream findings.

**Blockers** — none technical. The campaign's remaining critical path is **human**, not agentic.

**Files touched** — `site/src/content/changelog/2026-09-03.md` (new) ·
`site/tests/gates/__screenshots__/home-{dark,light}.png` · `artifacts/gr_4/deploy_probe_gr_4.mjs`
(new) · `artifacts/gr_4/probe_{predeploy_red,postdeploy_green}.md` (new) ·
`evidence/claims/claim_register.md` (§21 + R-124's row) · `campaign_haussmann/CLAUDE.md` ·
`STATE.md` · `what/glossary/glossary_model_tiered_execution.md` · `site/scripts/deploy_log.txt` ·
this file.

**Next Session Prompt** — You are Rosetta in `~/aDNA/aDNA.aDNA`. Operation HAUSSMANN's Grande Revue
is complete and its five increments are **deployed** (`tree=7cef6e0`, 2026-09-03; re-probe the alias
at `/.well-known/adna-build.json`, never quote it forward). `R-124` is `gap → fixed`. **Nothing
agent-reachable remains in the ratified backbone**: `P5.1` is held on three human acts and `P5.2`
waits on it, so the next move is an ⛩ operator routing call between *handing off `P5.1`'s
recruitment brief* (`artifacts/p5_1/recruitment_brief.md`, `ready_for_operator` — and its `AC-P` is
now satisfiable for the first time) and *a small-debt sitting* (`R-97`'s gate · `F-w` → next
`skill_template_release` · the ⛩ Vitruvius `/g/adna/` decision, which carries
`decision_required: true` · Hopper's 4.2.0 ack · babbage's lease question). Read
`how/campaigns/campaign_haussmann/CLAUDE.md`'s last block and `STATE.md`'s ⏭ QUEUED banner first,
and **resolve any "next" pointer at the mission file it names** — this sitting found the carried
pointer stale in three agreeing surfaces at once.
