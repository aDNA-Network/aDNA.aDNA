---
type: session
session_id: session_stanley_20260824_213413_haussmann_p4_4_ci_hardening
tier: 1
campaign: campaign_haussmann
mission: mission_haussmann_p4_4_ci_hardening
phase: P4
persona: rosetta
operator: stanley
created: 2026-08-24
updated: 2026-08-24
status: completed
executor_tier: opus
token_budget_estimated: "~60–90 kT — pre-build only: register re-read (19 rows), lease design, convention-13 pass, amendment proposal. NO build."
token_budget_actual: "~55–70 kT content-load, one session — inside estimate."
last_edited_by: agent_rosetta
tags: [session, haussmann, p4_4, ci_hardening, convention_13, register, deploy_lease]
---

# Session — HAUSSMANN P4.4 open (pre-build gate)

> Resumed after a context crash. Plan ratified this session:
> `~/.claude/plans/please-read-the-claude-md-greedy-candy.md`.

## Intent

Open **P4.4** at its **pre-build gate**, not at O0's build. Three deliverables, then ⛩ HALT:

1. **O0-prep** — re-read all 19 inherited F-rows against the live tree (the mission's own ⚠ instruction).
2. **O0 design + O1** — the production-alias single-writer lease (**F-u**, promoted to a first-class
   objective by operator ruling this session), and a **complete** convention-13 pass with recorded coverage.
3. **O2** — the AC amendment proposal carrying the **P4.4a / P4.4b split** and a re-raised budget.

Rationale: P4.1's SO#11 retrospective ruled that **convention 13 runs BEFORE a DP ratifies a budget**.
P4.4's declared `~220–330 kT` predates F-i…F-u and the mission says so on its face.

## Session-open verifications `[D]` 2026-08-24T21:34Z

| Check | Result |
|---|---|
| P4.4 claimed from its **own `status:`** (not the index line) | `queued` ✅ — the ruled successor per convention 11 |
| ⛔⛔ **Deploy freeze** — `git cat-file -t 30c8163` / `f4fa9c5` | **both fail** → lemur has not pushed → **FREEZE HOLDS** |
| Unpushed commits | **8** (`origin/main..HEAD`) — a push is a per-action ⛩ GO |
| Active peer sessions | none (`how/sessions/active/` held only `.gitkeep`) |
| `who/coordination/` untracked sweep (the wind-down lesson) | **clean** — 209 memos, none untracked |
| Register count, **derived** (`grep -cE '^\| \*\*F-[a-z]\*\*'`) | **19** (a–u, less withdrawn `F-s`/`F-t`) |

**Inbound read, not actioned:** `coord_2026_08_24_mondrian_to_rosetta_census_erratum.md` (`ack_required:
false`, `action_required: none — read before you rule on memo #9`). It is a **v2 superseding a same-day
v1**, and its own correction is this campaign's class: memo #9 called 196 template canvases
"standard-blind"; **196/196 carry a `_reserved` block**, written one level too high
(`metadata._reserved` vs the canonical `metadata.frontmatter._reserved`), so the validator reads nothing
and reports plain `core`. **Changes no F-row.** Mondrian #9 stays an owed ruling, out of P4.4's scope.

## Scope declaration (files this session may write)

- `how/campaigns/campaign_haussmann/missions/mission_haussmann_p4_4_ci_hardening.md` (register + progress)
- `how/campaigns/campaign_haussmann/artifacts/p4_4/**` (new)
- this session file

⛔ **No `site/` source. No deploy. No push without a per-action GO.**

## Progress

All four objectives complete. **No build started; no `site/` source touched.**

| # | Objective | Output |
|---|---|---|
| O0-prep | register re-read at the object | `artifacts/p4_4/register_reread_20260824.md` — 19 rows probed |
| O0 | F-u guard **design** | `artifacts/p4_4/f_u_alias_guard_design.md` — premise corrected |
| O1 | convention-13 pass | `artifacts/p4_4/convention_13_pass.md` — 30/30, coverage recorded |
| O2 | amendment proposal | `artifacts/p4_4/ac_amendment_proposal.md` — ⛩ `proposed` |

## SITREP

### Completed

- **P4.4 opened at its pre-build gate and halted there**, per P4.1's SO#11 ruling that convention 13
  runs *before* a budget is ratified.
- **Register re-read, 19 rows, count derived.** **3 DISCHARGED** (`F-b` · `F-h` · `F-q`) · 1 narrowed
  (`F-l`) · **4 worsened** (`F-k` `F-m` `F-n` `F-o`) · 11 unchanged. Live count is **16**, of which one
  is documentation-only.
- **`F-b` + `F-q` closed at the object**, not cited: `gitleaks detect --source .` → **881 commits, no
  leaks**. **`F-h` discharged** by doing the re-read it asks for — 4/4 header **values** match the alias.
- **F-u's premise corrected**: a single-writer lease would **not** have prevented F-s. Ancestry guard
  designed, with a 7-case red-test matrix including two passing controls.
- **Convention-13 pass complete**: 20 (AC×V) + 10 (AC×AC) = **30/30**, every `n/a` recorded so the pass
  is legible as complete. **Zero of five criteria executable as written.**
- **Convention-16 habit discharged**: alias re-probed read-only — 5/5 surfaces **200**, `install.sh`
  still pins `0.3.1` (the known post-restore state). No new deploy from either checkout.

### Blockers

- ⛩ **Operator signature on `ac_amendment_proposal.md`.** Work halts here by design.
- ⛔⛔ **Deploy freeze holds** — `30c8163` + `f4fa9c5` both absent; **lemur must push**. Outside this
  node's control. P4.1 + P4.2 remain built-not-deployed. Proposed **AC2 is unreachable until this lifts.**
- ⊳ **D-E / F-e** needs **Vitruvius** (peer vault, memo staged and undelivered) before AC4's method exists.

### Files touched

**Created** — `artifacts/p4_4/{register_reread_20260824,f_u_alias_guard_design,convention_13_pass,ac_amendment_proposal}.md` · this session file.
**Modified** — `missions/mission_haussmann_p4_4_ci_hardening.md` (Progress only; **frontmatter and ACs
deliberately unchanged** — the amendment is `proposed`, not applied).

### Token budget

`token_budget_actual` ≈ **55–70 kT** content-load, one session — inside the ~60–90 kT estimate.

### Next Session Prompt

> Persona **Rosetta**. Open `how/campaigns/campaign_haussmann/CLAUDE.md` and
> `missions/mission_haussmann_p4_4_ci_hardening.md`. **P4.4 is halted at an operator gate**: read
> `artifacts/p4_4/ac_amendment_proposal.md` and check its `status:` — if still `proposed`, the halt
> stands and nothing builds. **If signed**: apply the amended criteria to the mission frontmatter, split
> the mission into P4.4a/P4.4b in-file (`mission_count` holds at 27, P4.5a/b precedent), strike
> `F-b`/`F-h`/`F-q` from the register with the evidence in `register_reread_20260824.md`, re-word `F-u`
> to *ancestry guard* (**struck, not deleted**), then open **P4.4a at AC0** — implement the
> `/.well-known/adna-build.json` stamp and the ancestry refusal in `site/scripts/deploy_adna.sh`, and
> red-prove it against the 7-case matrix in `f_u_alias_guard_design.md` **including its two controls**.
> ⛔ **Re-verify the freeze at open** (`git cat-file -t 30c8163 f4fa9c5` must both fail). ⛩ 8+ commits
> unpushed — a push is a per-action GO. Suite baseline **571/571**; run `npx astro build` then
> `node scripts/inject_redirects.mjs .` before gates outside a deploy (convention 6).

---

## Closure note (added 2026-08-24, next session)

⚠ **This session's context crashed after its SITREP was written and after its work committed
(`2284208`).** Nothing was lost: the four artifacts, the mission Progress edit and this file were all
in the commit. **The only casualty was the file move** — the session sat in `active/` with
`status: active` until the next session opened, which would have read to a cold agent as a live peer
session holding a scope lock on the P4.4 mission file.

⇒ **A session's status field is written before its last act, so a crash leaves it lying.** Same shape
as convention 16's *"a verification with no recurrence is a claim about the past wearing the grammar
of the present"* — one level down, on our own bookkeeping. The `active/` sweep at session open is
what catches it, and it did.
