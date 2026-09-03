---
type: session
session_id: session_stanley_20260903_210742_haussmann_deploy_gr4
created: 2026-09-03
updated: 2026-09-03
status: active
tier: 1
last_edited_by: agent_rosetta
campaign: campaign_haussmann
mission: null   # ⛩ OPERATOR-RULED ROUTING SITTING, not a mission increment. GR-4 is `completed` and the Grande Revue's ratified Gate-1 order is complete; nothing agent-reachable is queued in the backbone. This sitting performs the ⛩ DEPLOY GO the campaign has owed since GR-4's O1, plus two operator-elected residue items. It opens no mission and closes none.
increment: "⛩ DEPLOY GO — publish the five increments of GR-4 public copy that are built and unseen (two doctrine pages · `/commons` · `/network` · `/`'s latest-strip · `/privacy`), then discharge `R-124` at its ruled condition (LIVE, never written). Riders, operator-elected: the stale `P4.4b B3` pointer repair, and `F-aa`."
executor_tier_declared: opus
executor_tier_actual: opus
token_budget_estimated: "~90–150 kT / 1 session. Costed AFTER reading `gate-49`'s TEMPLATES list (SO#11's O2 retrospective, applied at costing time for the fourth consecutive sitting): ⚠ `/` **IS** a template (`gate-49:50`), and the owed changelog entry moves the homepage strip's rendered dates ⇒ **a `home` re-baseline DOES fire**, O4's shape rather than O5's. Bands: changelog entry + re-baseline ~25–40 · probe authored + red-proven + green ~25–40 · the deploy itself ~10–15 · R-124 discharge + register §21 ~10–20 · the two riders ~10–20 · close cascade + suite re-run ~10–15."
token_budget_actual: ""
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
| 2 | The owed changelog entry (`2026-09-03`), ≤160-char `description` | ⏳ |
| 3 | `deploy_probe_gr_4.mjs` authored + **proven RED against prod** | ⏳ |
| 4 | `gate-49` `home` re-baseline (predicted, confirmed-red-first) | ⏳ |
| 5 | ⛩ the deploy | ⏳ |
| 6 | Post-deploy: same probe GREEN, alias stamp re-read | ⏳ |
| 7 | `R-124` discharged — **only once live** | ⏳ |
| 8 | Rider: stale `P4.4b B3` pointers, strike-not-delete | ⏳ |
| 9 | Rider: `F-aa` — the glossary's tier ordering is backwards | ⏳ |
| 10 | Close cascade, suite re-run **after** the record edits | ⏳ |

## Log

- **2026-09-03 20:57 UTC** — session opened. Facts above derived, none carried. Routing call put to
  the operator (SO#1) and ruled: **deploy first**, with the pointer repair and `F-aa` as riders;
  `P5.1`, `R-97`, `F-w`, Speed-Insights, and the Vitruvius/Hopper/babbage replies explicitly **out of
  scope**.
