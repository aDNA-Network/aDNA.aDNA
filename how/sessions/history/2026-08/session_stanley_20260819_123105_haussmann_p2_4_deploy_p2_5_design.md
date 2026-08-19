---
type: session
session_id: session_stanley_20260819_123105_haussmann_p2_4_deploy_p2_5_design
created: 2026-08-19
updated: 2026-08-19
status: completed
tier: 1
operator: stanley
agent: agent_rosetta
campaign: campaign_haussmann
mission: mission_haussmann_p2_5_onboarding_paths
executor_tier: opus
token_budget_estimated: "~120–180 kT — P2.4 prod deploy + live probe + changelog backfill, then P2.5 O0 design to the ⛩ pick"
token_budget_actual: "~95 kT"
tags: [session, haussmann, p2_4, deploy, p2_5, onboarding]
---

# Session — HAUSSMANN: deploy P2.4, then open P2.5 to the pick

Opened on "continue the campaign". P2.4 was complete, gated 472/472, committed **and pushed** — and
never deployed. Production still ran `tree=97561c0` (P2.3), which meant the silent drop P2.4 fixed
was still live on `/commons/`.

## Opening probe — what production actually looked like

Probed **before** touching anything (campaign law: probe production before designing) `[D]`:

| Surface | Live state at session open |
|---|---|
| `/commons/` freshness line | **`"member records last synced ."`** — empty date, dangling full stop, one sentence before the page promises *"honest activity, today, is exactly this: the dates above and the relationships each vault declares."* |
| `/commons/` relationships | WilhelmAI **0 of 3** declared, RareArchive **0 of 1** |
| `/vaults/` | **no** tier vocabulary — no `in use` / `chartered` / `planned` |

## ⛩ Operator decisions (in-chat, session open)

| # | Decision | Ruling |
|---|---|---|
| 1 | Deploy P2.4 to prod | **GO** (per-action, ADR-050 / campaign §6) |
| 2 | Session scope | **Deploy + P2.5 O0, halt at the pick** — O1/O2/O3 next session |

## Pre-deploy collision check (08-16 class)

`git fetch origin` → `origin/main...HEAD` = **0 / 0**; `git diff origin/main -- site/scripts/deploy_log.txt`
**empty**; newest record still `2026-08-19T17:19:00Z … tree=97561c0`. **No peer deploy landed.** Safe to proceed. `[D]`

## Two instrument false-positives, caught and discarded

While probing the registry I twice believed I had found a description-truncation regression
(`the root llama.` and `seam: git.`). Both were **my own regex matching a mid-string period**, not
truncation — the built strings read in full (`llama.cpp (build-with face; the root llama.cpp external
dep is the upstream).` and `seam: Git.aDNA/Hopper keeps the provider contract).`). Recorded because the
campaign's own law is *verify the instrument before believing a surprising red*, and a plan carrying a
phantom finding would have sent the next session hunting a defect that does not exist. The `(.` class
the engineer cold-read complained about is genuinely gone: **0 occurrences** in `dist/vaults/index.html`. `[D]`

## Progress

### 🚀 P2.4 DEPLOYED — `2026-08-19T19:37:04Z mode=prod tree=d42ee68`

```
deploy_record: 2026-08-19T19:37:04Z mode=prod
url=https://adna-docs-aiutnpigx-science-stanleys-projects.vercel.app
token=SS_VERCEL_TOKEN (interim — migrate to VERCEL_TOKEN_ADNA when brokered) tree=d42ee68
```

216 pages · headers **4/4 verified live, no drift** · redirects **42/42 widened** to both slash
forms · installer routes 51 (idempotent re-run confirmed). `VERCEL_TOKEN_ADNA` still unset, so the
script fell back to `SS_VERCEL_TOKEN` — the unbrokered gap, unchanged.

### Live probe — 37 PASS / 0 FAIL

`artifacts/p2_4/deploy_probe_p2_4.mjs`, run from `site/` against `https://adna.network`. `[D]`

**Red-proven BEFORE the deploy**, against production carrying the defect: **17 PASS / 17 FAIL**, and
all 17 failures were P2.4 deliverables — the empty `"last synced ."`, 0 of 2 owed relationship
blocks, no tier narration, no `#tier-*` anchors, 0 of 3 jump-chips, no badges on any of the three
sampled detail pages, 30 non-canonical vault links. It was not uniformly red (17 assertions already
held), so it discriminates rather than simply failing. The empty-derivation guard was separately
mutation-tested: **all four empty forms refused** (`[]`, `null`, `0`, `undefined`).

Verified by eye as well as by script — the headline fix, live: `[D]`

| Before (tree=97561c0) | After (tree=d42ee68) |
|---|---|
| `member records last synced .` | renders the real sync date |
| WilhelmAI **0 of 3** relationships | `umbrellas RareArchive · federates Astro, III` |
| RareArchive **0 of 1** | `under the WilhelmAI umbrella` |
| `/vaults/` no tier vocabulary | `7 are being worked in today, 10 are chartered, and 57 are named places…` |

### One probe correction — it was asserting the wrong layer

The first live run came back **36/1**, failing on 11 raw `data-slug` values. That is the recorded,
deferred generator item (`scripts/build_graph_svg.mjs` writes raw ids into the committed hero SVG) —
but the assertion was wrong *in kind*, not merely inconvenient: `HomeHero.astro` canonicalizes those
values **on read**, and the SVG is `role="img"`, non-interactive to AT. **No reader path consumes the
raw attribute.** The hard contract is the emitted `href`, and 0 of 109 scanned links were
non-canonical. Split accordingly: the href assertion stays hard, the generator item prints under
**KNOWN-OPEN** with its four sample values and its reason. Reported by name, not silenced, not green.

### Changelog backfill — and what it surfaced

`site/src/content/changelog/2026-08-19.md` covered **P2.1 and P2.2 only**. **P2.3 shipped to
production earlier today with no changelog entry at all.** The deploy script's cadence prompt is
non-blocking by design, printed its nudge, and was skipped — which is precisely the decay its own
comment says it exists to prevent (*"the changelog decayed to a single April entry precisely because
nobody was ever asked"*). Asking is not the same as being answered. `[D]`

Extended (date-keyed, so one entry) to cover the spec pagination, the dated pages, the tier-first
registry, and the `/commons` drop — the last named plainly, at length, because that page promises
honest activity and for a while was showing none.

**Counts derived, not typed** (KW-14): **114** pages carry a rendered `Last updated` marker in `dist`
— STATE and the P2.3 record both said 113, and the derived figure is what shipped. `7/10/57` read off
the rendered split sentence. 20 spec sections + `full` counted from `dist/reference/specification/`.
The four dateless prose pages are **stated in the entry** rather than left for "114 pages carry a
date" to read as *all* of them — `/provenance-audit/` among them, verified at 0 occurrences, which is
the page that explains how to check this site's claims.

The content-collection schema **rejected my first description at 213 characters** (limit 160). Caught
by the gate, at the layer that should catch it; re-cut to 153 and re-verified by measurement.

### P2.5 O0 — designed, ⛩ halted at the pick

Deliverable: `artifacts/p2_5/design_zero_install_path.md`.

Three variants costed. **Recommended: A now (annotated tour of the real files) · B at O3 (a real
recorded session, produced as a by-product of O2's clean-machine run) · C not at all** (an animated
replay would cost the site's no-JS baseline and axe-0 record for motion the static transcript already
carries — and its no-JS twin would *be* variant B).

A and B are not competitors; they answer **different objections**. A answers *"can I trust this before
I run it?"* — the objection that actually produced the refusal. B answers *"does it work?"*, which that
reader was already guardedly willing to believe (*"the downside is a wasted evening"*).

The refusing cold-read did not merely decline the CTA — **it wrote down the path it wanted instead**
(read `CLAUDE.md` and `.adna/` in the browser → clone to a scratch dir, not `~/aDNA` → read
`skill_onboarding.md` before running `claude`). O0's design makes that route first-class rather than
inventing a different one.

Also delivered: **"first success" defined observably** (five runnable assertions plus the behavioural
half — a *new* agent session in the project greets you already holding its governance); a **cost
statement** for above the one-liner that retires two live contradictions (the *"any tool can support"*
claim, and the absent uninstall path); and a **reusable TTFS kit** — clock starts at the *entry URL*,
not the first command, because reading the page is where the refusal happened, and an empty friction
log is reported as **suspect, not excellent**.

### 🔎 F-P2.5-1 → R-118

Registered in the claim register (`unsupported → fix at O1`, S3) rather than held for O1, because it is
a live defect on a shipped page, not new copy. Deferring a known-false depiction to a later objective is
the pattern this campaign keeps catching.

## SITREP

**Completed**
- **P2.4 deployed and proven live** — `tree=d42ee68`, 216 pages, headers 4/4, redirects 42/42, probe **37/0**
- Probe **red-proven 17/17 before** the deploy; empty-derivation guard mutation-tested 4/4
- Probe assertion **corrected in kind** (href = hard contract; raw `data-slug` = KNOWN-OPEN, named not silenced)
- Changelog backfilled for P2.3 + P2.4, counts derived (**114**, not the recorded 113)
- **P2.5 O0** designed; **R-118** registered; mission `queued → in_progress`
- Gate suite **472/472**, zero xfail, post-change

**In progress** — P2.5. O0 done; O1 blocked on the pick.

**Next up** — ⛩ **the P2.5 pick (4 questions)**, then O1 build → O2 clean-machine TTFS run (⛩ machine)
→ O3. Then **P2.6 / ⛩ DP6**, where the D6/D7 re-score deferred at the P1 gate comes due.

**Blockers** — none technical. Two ⛩ operator items: the P2.5 pick, and a **push GO** (3 new commits;
per-action, does not carry forward).

**Open, carried** — 77-vs-74 (Hestia) · the 740 mechanism (deferred, recorded UNMET) ·
`build_graph_svg.mjs` raw `data-slug` · P0.4 Aspasia ack · Vitruvius owed-back note staged-not-delivered
· `VERCEL_TOKEN_ADNA` unbrokered, **C01 rotation before 2026-08-27 — 8 days** · four dateless prose pages.

**Files touched** — `site/src/content/changelog/2026-08-19.md` · `site/scripts/deploy_log.txt` ·
`artifacts/p2_4/deploy_probe_p2_4.mjs` (new) · `artifacts/p2_5/design_zero_install_path.md` (new) ·
`evidence/claims/claim_register.md` · `missions/mission_haussmann_p2_5_onboarding_paths.md` · `STATE.md` ·
this session file.

**Token** — ~95 kT against ~120–180 kT estimated.

## Next Session Prompt

> Open `how/campaigns/campaign_haussmann/CLAUDE.md`, `STATE.md` (top banner), the P2.5 mission
> (`missions/mission_haussmann_p2_5_onboarding_paths.md`), and the O0 design
> (`artifacts/p2_5/design_zero_install_path.md`). **P2.4 is shipped and live** (`tree=d42ee68`, probe
> 37/0) — do not redeploy it. **P2.5 O0 is complete and halted at a 4-question operator pick** (§7 of
> the design): which zero-install variant O1 builds, what happens to the invented `/get-started/`
> terminal block (**R-118**, recommended: delete now, ship a *labelled* gap), whether the cost-statement
> copy ships as drafted, and whether the first-success definition is accepted as O2's stop-condition.
> Take the pick, then build O1 — and note that **O2 needs a clean machine, which is a separate ⛩**.
> Three commits are **unpushed**; a push is its own per-action GO. Before any deploy: `git fetch` and
> diff `site/scripts/deploy_log.txt` first. Do not author any timing claim — R-34 and R-63 are
> discharged by O2's measurement or revised down then, never by a design.
