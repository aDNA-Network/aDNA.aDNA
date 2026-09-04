---
type: session
session_id: session_stanley_20260904_202940_haussmann_four_rulings
created: 2026-09-04
updated: 2026-09-04
status: active
tier: 2
last_edited_by: agent_rosetta
campaign: campaign_haussmann
mission: null   # ⛩ OPERATOR-RULED PLANNING GATE, executed. Four rulings taken at one sitting; this session records them into their instruments, clears `main`'s red, and OPENS `GR-5` with a signed budget. Opens no mission of its own.
increment: "⛩⛩ Four rulings discharged in one gate — (1) `gate-39` pin = re-derive in CI + auto-fallback rider · (2) ADR-056 ratified with a debt rider · (3) `gate-49 doc-hub` re-baseline ruled MECHANICAL and permitted to this desk · (4) the TTFS runner folded into the P5.1 recruitment. Plus the charter drift the count-derivation exposed."
executor_tier_declared: opus
executor_tier_actual: opus
token_budget_estimated: "~90–150 kT (recon + remote reconciliation ~20 [SPENT] · gate-49 control + re-baseline + CI ~30–50 · the four ruling records ~25–45 · charter/STATE drift ~15–25 · handoff ~10). ⚠ Costed AFTER reading `gate-49`'s TEMPLATES list per SO#11's O2 retrospective, seventh consecutive sitting: **no re-baseline of `home` fires** — this sitting ships no copy and no changelog entry. `doc-hub` re-baselines for a reason already diagnosed, and that is the work, not a side effect of it."
token_budget_actual:
tags: [session, haussmann, rulings, adr_056, gr_5, gate_49, p5_1, tier2]
scope_declaration:
  - STATE.md
  - how/campaigns/campaign_haussmann/campaign_haussmann.md
  - how/campaigns/campaign_haussmann/missions/mission_haussmann_gr_5_flaky_gates.md
  - how/campaigns/campaign_haussmann/missions/mission_haussmann_p2_6_midscore.md
  - how/campaigns/campaign_haussmann/missions/mission_haussmann_p5_1_human_evidence.md
  - what/decisions/adr_056_agentic_surface_contract.md
  - what/decisions/adr_index.md
  - site/tests/gates/__screenshots__/doc-hub-{dark,light}.png
conflict_scan: "one peer session file present at open — `session_stanley_20260904_155111_haussmann_deploy_gr5.md`, SITREP complete, both its ⛩ GOs discharged. Closed by this session (O0). No live git process, no `.git/index.lock`, no peer writer. `[D]`"
---

# Session — the gate that was four rulings, and the divergence that was a branch

## Derived at the open (convention 12 — recon-at-execution; nothing below is carried)

| Fact | Value | Command |
|---|---|---|
| **Clock** | **2026-09-04 20:29 UTC** | `date -u` |
| HEAD | `6d10611` — **on `main`** | `git rev-parse HEAD` |
| `origin/main` | **`6d10611`** — derived **at the remote** | `git ls-remote origin main` |
| Ahead / behind | **0 / 0** — in sync | `git rev-list --left-right --count` |
| `main` CI (**convention 19**) | ❌ **`failure`** at `6d10611`, run `33895141586`, 7m17s | `gh run list` |
| …**its width** | **exactly one step** — `gate-49` visual regression. Everything else passed. | `gh run view --json jobs` |
| Production | **`2a72efe`**, built 2026-09-04T16:08:57Z, `mode=prod` | `curl /.well-known/adna-build.json` |
| Feature branch | **`course/slice-b` = `58292eb`** — unmerged, 5 lesson files, **not** a conflict | `git branch -vv` |
| Dirty tree | `.obsidian/*`, `.astro/`, one capture report — **all outside** the deploy guard's scope | `git status --porcelain` |
| Docker | daemon up, `28.2.2` — the in-container re-baseline is performable | `docker info` |

## ⭐ FINDING 1 — the "diverged remote" was a BRANCH, and the plan named two cases when there were three

The planning gate recorded `origin/main = 6d10611` as *"not present in this tree"* and `58292eb` as
*"unpushed"*, and set A1 up to choose between **fast-forward** and **rebase**. Both were wrong,
and the third case is the mundane one:

| The plan said | Derived at the object `[D]` |
|---|---|
| `6d10611` unknown to this tree | It **is** `main`, and `main` is **in sync with origin** (0/0) |
| `58292eb` unpushed, possibly diverged | It is the tip of a deliberate feature branch **`course/slice-b`**, unmerged **by design** |
| "a second writer landed mid-sitting" | A peer session ran `git checkout main` at **16:50:05 UTC**; it is now **20:29 UTC** — nearly four hours, no live git process, no `index.lock` |

⇒ **Nothing was owed, no rebase was needed, and no coordination was required.** ⭐ The reason the
planning desk got it wrong is worth naming: it read `git log origin/main..HEAD` against a
**stale local tracking ref** and treated the answer as a fact about the remote. `git ls-remote`
was run — correctly — but the *second* command was not, so a fresh remote fact was compared
against a stale local one and the mismatch was read as divergence. **This is `F-u`'s family
again** (a claim asserted more confidently than it was checked), and the falsifying command is
one `git branch -vv`.

⚠ **What WAS real: HEAD moved under this desk mid-sitting.** `git rev-parse HEAD` returned
`58292eb` at 16:47 and `6d10611` at 20:29. That is the shared-tree hazard, and it is the reason
this session declares Tier 2 and a scope block. It is **not** live now, and the check that says
so is `pgrep` + `index.lock`, not an assumption.

## ⭐ FINDING 2 — ruling 3 is CONFIRMED at the object, and its limit is stated rather than assumed

Ruling 3 permitted this desk to re-baseline `gate-49 doc-hub` on the ground that the change is
**mechanical**. Checked before acting on it, not after `[D]` — `git show b2e943b -- site/src/pages/learn/index.astro`:

- a **hardcoded** `CardGrid` card (`href: '/learn/course'`) — **not** derived from the `course`
  collection, and
- two heading renumbers, `2 · Practice with a tutorial` → `3 ·` and `3 · Compare` → `4 ·`.

⇒ **Two consequences, and the second is the one that mattered to sequencing:**

1. **The ruling holds.** No layout or IA judgment is embedded; nothing about the course's lesson
   content renders on this page.
2. ⭐ **Because the card is hardcoded, lessons 3–7 landing will NOT re-red this baseline.**
   `learn/index.astro` is **byte-identical on `main` and `course/slice-b`** `[D]`, and `/learn/course/`
   is not one of the 12 pinned templates. ⇒ **the re-baseline is done once, on `main`, now** — it
   does not have to wait for the merge and will not be invalidated by it. *(Had the card been
   collection-derived, this sitting would have had to re-baseline twice, and doing it now would
   have been the wrong order.)*

⚠ **The limit, recorded on its face:** the new baseline **does** certify the rendered typography of
the new section's own paragraph copy, because that copy is on this page. It certifies **nothing**
about lessons 1–7, which are not. Convention 4 is satisfied at that boundary and not beyond it.

## O0 — session hygiene

Peer session `session_stanley_20260904_155111_haussmann_deploy_gr5.md` closed and moved to
`how/sessions/history/2026-09/`. Its SITREP was complete and both its ⛩ GOs discharged.

## O1 — ⛩ ruling 3: the `gate-49 doc-hub` re-baseline

**Verdict recorded in §O1 result below.**

## O2 — ⛩ ruling 1: `GR-5`'s gate signed

## O3 — ⛩ ruling 2: ADR-056 ratified with its debt rider

## O4 — ⛩ ruling 4: the TTFS runner folded into P5.1's recruitment

## O5 — charter + STATE drift

## SITREP

*(filed at close)*
