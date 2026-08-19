---
type: session
session_id: session_stanley_20260819_202459_haussmann_p2_5_o1_zero_install
created: 2026-08-19
updated: 2026-08-19
status: completed
tier: 1
operator: stanley
agent: agent_rosetta
campaign: campaign_haussmann
mission: mission_haussmann_p2_5_onboarding_paths
executor_tier: opus
token_budget_estimated: "~150–250 kT — O1 build: tour generator + collection + hub/detail pages + /get-started/ rework + same-diff gate coupling + verification"
token_budget_actual: "~100 kT"
tags: [session, haussmann, p2_5, o1, onboarding, zero_install]
---

# Session — HAUSSMANN P2.5 O1: build the zero-install path

Opened on "continue the campaign". P2.5 O0 was complete and **halted at a 4-question operator pick**.
The pick was taken at session open; O1 builds against it.

## ⛩ Operator pick (in-chat, session open) — all four as recommended

| # | Question | Ruling |
|---|---|---|
| 1 | Which zero-install variant does O1 build? | **A now + B at O3** |
| 2 | The invented transcript at `/get-started/` (R-118) | **Delete now, ship a labelled gap** |
| 3 | Cost statement (design §5) ships as drafted? | **As drafted** |
| 4 | First-success definition as O2's stop-condition? | **Yes** |

## Grounding findings — taken BEFORE building, and they changed the build

The design was costed against the idea of the files. Reading the actual code first surfaced three
things, two of which would have shipped a defect. `[D]`

### 1. Vendoring the workspace router from this node would publish the private fleet

O0 says the tour renders "the workspace `CLAUDE.md` router." This node's `~/aDNA/CLAUDE.md` names five
vaults **the router itself marks local-only, NO remote** — `GOTFN`, `Bearly`, `CakeHealth`,
`aiLP-Dataroom`, `RareGraph`. The image's router,
`.adna/how/templates/template_workspace_claude.md`, greps **zero** for all five — and is the honest
source regardless, because it is the router a clone actually ships. The node's router is this node's
private state; it was never the artifact under discussion.

### 2. `install_truth.json`'s `template_sha` is not a usable pin

It reads `fd32fc7`. `.adna` HEAD is `0364d85` across 139 commits, and `git cat-file -t fd32fc7` →
**"not a valid object name."** The field went stale by two mechanisms compounding: the generator's own
idempotency guard (`scripts/build_install_truth.mjs:136`) holds the committed byte form when only
`generated`+`template_sha` would churn, and `.adna`'s origin was repointed to `adna-legacy`, so the old
object is simply gone.

It reaches **no rendered surface** today — grepped `src/` and `tests/`, only the JSON itself. So it is
latent, not a live false claim. But Variant A's entire honesty mechanism is *"pinned commit shown on
the page,"* and reusing this field would have rendered an unresolvable commit id on the one page built
to answer *"can I trust this?"* The tour therefore derives **its own** pin and refuses to emit against
one that does not resolve.

### 3. R-118's mechanism error is asserted twice more, in prose

Deleting the fabricated block alone would have left the same false mechanism on the page. `get-started.astro`
also asserts it at **line 51** (*"scaffolded for you by the onboarding interview"*) and **line 78**
(*"The interview scaffolds…"*). Independently confirmed against the image router: the fresh-workspace
path routes to `skill_project_fork.md` (`template_workspace_claude.md:86`); `skill_onboarding.md`
appears only in the Home-fork path at line 72.

This is the same-diff hazard class that no route grep finds — the defect lives in prose, not in a route
or a count. Registered as its own claim row rather than folded into R-118.

## Pre-flight state

`git log origin/main..HEAD` = **4 unpushed commits** (was 3 at last session close + the P2.5 O0 commit).
A push remains its own per-action ⛩ GO. No deploy in this session's scope.

## Progress

### The tour — `/get-started/what-your-agent-reads/`

Hub plus one page per vendored file, on the **P2.3 spec-split shape**: generated projection ·
committed output · drift gate. Four files from `.adna` at a pinned, verified commit.

**The shape changed once, for a reason worth recording.** The plan called for an MDX content
collection. The vendor set carries **39 brace constructs** (`{project_name}`, `{{VARS}}`) and **28
angle constructs** (`<name>.aDNA`); MDX evaluates the first as JS and parses the second as JSX, so
the build would either die or **silently mangle the exact bytes the page exists to show** — a worse
defect than the invented transcript it replaces. So the files ship as `.txt`, rendered into a
`<pre>`. That is also, exactly, what the refusing reader asked for: *"read `CLAUDE.md` and `.adna/`
**raw** in the browser."* `[D]`

### `/get-started/` — reworked

Cost statement above the first command (§5 as drafted), placed there rather than beside the
one-liner at the foot of the page: the objection it answers is formed before running anything.
Fabricated block cut to a **labelled** gap. Both prose instances corrected. First success published
as five runnable assertions plus the behavioural half. Troubleshooting. Uninstall.

**No timing claim authored.** R-34/R-63 stay for O2 to discharge or revise down.

### 🔎 R-119 — the same-diff hazard no route grep finds

Cutting the block left the identical false mechanism standing in **two prose sentences** (lines 51,
78). Found by grepping the built output for the mechanism's own words *after* the deletion. ADR-057's
sweep is route/slug/count-coupled and structurally cannot see a defect that lives in a sentence.
Registered separately from R-118 because it is a different assertion in a different place.

### ✏️ A correction to our own finding

R-118 said the interview *"does not fire here."* The vendored files say otherwise: the router states
it triggers after creation (`template_workspace_claude.md:102`) and the fork **offers** it
(`skill_project_fork.md:216`). It fires — second, invited by the fork. The page's error was **agency
and order**, not the interview's existence. Fabrication finding unchanged (depicted strings still
zero-hit). Register corrected, and the copy now describes what actually happens rather than merely
avoiding what does not. A claim of ours that outruns its evidence is the same defect as one of the
site's. `[D]`

### Verification `[D]`

| Check | Result |
|---|---|
| Gate suite | **487 / 487, zero xfail** (was 472; +9 gate-36, +6 sweep) |
| Drift gate red-proof | byte mutation → **exit 1**; clean → **exit 0** |
| Byte-exactness through the full pipeline | **4/4** extracted from `dist`, unescaped, compared |
| The five published assertions | **5/5 pass**, run as written |
| axe | **0 violations**, both themes × 3 surfaces × 3 viewports |
| Private-vault names in vendored bytes | **0** |

**Two gate failures diagnosed, neither a regression.** gate-30's redirect tests need
`inject_redirects.mjs`, which runs in `deploy_adna.sh` and not in `npx astro build` — the gate's own
message says so; running it returned 10/10. gate-27 flagged **7 leaks, all on tour pages, all the
standard's own words** → **allowlist**, reviewed and dated and token-scoped, **never the baseline**
(the gate's own instruction).

**One instrument false-positive, corrected rather than believed.** The first private-vault assertion
swept all of `dist` and failed on **nine legitimate pages**. Those vaults have public registry
records by design under **pt19** — their *names* are not the secret; a wrong *source* is. Re-scoped
to the tour, plus a site-wide check on router-only markers (`local-only NO remote`,
`Node Vault Detection`) that a bare name match could never distinguish. Recorded because the
campaign's law is *verify the instrument before believing a surprising red*, and this one was mine.

**One visual fix the capture caught.** The verbatim block first shipped `white-space: pre`; the
mobile capture showed every prose line running off the edge, so auditing the standard on a phone
meant scrolling right on every line. Now `pre-wrap`, per this funnel's own H-8 rule. DOM text
unchanged — byte-exactness untouched.

### 📌 Observation, not acted on

`ls -d ~/aDNA/*.aDNA` returns **95** top-level vaults against 74 published and the 77 recorded in
the carried Hestia item. A wider gap than the one on file. Registry data is Hestia's lane under
**pt19** and this campaign fixes projection *code*, so it is logged here and nowhere else.

## SITREP

**Completed**
- **⛩ pick taken** — all four as recommended; recorded in the mission and STATE
- **The tour built and shipping in-tree** — generator + 4 vendored files + hub + 4 detail pages + **gate-36** (9 assertions)
- **`/get-started/` reworked** — cost statement · labelled gap · first success · troubleshooting · uninstall
- **R-118 discharged**, **R-119 found and fixed**, R-118's own mechanism claim corrected
- **487/487 zero xfail**; drift gate red-proven; byte-exactness proven end-to-end; axe-0 both themes

**In progress** — P2.5. O0 ✅, O1 ✅. Mission stays `in_progress`; **no AAR yet** (SO#5 — AAR lands when the mission completes at O3).

**Next up** — **⛩ O2 needs a clean machine** (fresh VM or user account). It produces the real
transcript as a by-product of the TTFS run; O3 folds it in as variant B and retires the labelled gap.

**Blockers** — none technical. Two ⛩ operator items: the **clean machine for O2**, and a **push GO**
(5 unpushed commits; per-action, does not carry forward). **Nothing deployed this session.**

**Open, carried** — 77-vs-74, now observed as **95**-vs-74 on disk (Hestia) · the 740 mechanism
(recorded UNMET) · `build_graph_svg.mjs` raw `data-slug` · P0.4 Aspasia ack · Vitruvius owed-back
note staged-not-delivered · four dateless prose pages · **`VERCEL_TOKEN_ADNA` unbrokered, C01
rotation before 2026-08-27 — 8 days** · **new**: `install_truth.json`'s `template_sha` is an
unresolvable pin (latent; renders nowhere) · **new**: the shipped image's `.adna/CLAUDE.md` carries
internal codenames + `idea_upstream_` ids — an editorial finding for the next template release,
unfixable from here (Standing Rule 1).

**Files touched** — `site/scripts/build_tour_files.mjs` (new) · `site/src/data/tour/*.txt` (new, 4) ·
`site/src/data/tour_manifest.json` (new) · `site/src/data/tour_annotations.ts` (new) ·
`site/src/pages/get-started/what-your-agent-reads/{index,[...slug]}.astro` (new) ·
`site/src/pages/get-started.astro` · `site/src/utils/contentSource.ts` · `site/package.json` ·
`site/tests/gates/gate-36-tour-provenance.spec.ts` (new) · `site/tests/gates/audit-p1s3-sweep.spec.ts` ·
`site/tests/gates/fixtures/leak_allowlist.json` · `evidence/claims/claim_register.md` ·
`missions/mission_haussmann_p2_5_onboarding_paths.md` · `STATE.md` · this session file.

**Token** — ~100 kT against ~150–250 kT estimated.

## Next Session Prompt

> Open `how/campaigns/campaign_haussmann/CLAUDE.md`, `STATE.md` (top banner), and the P2.5 mission
> (`missions/mission_haussmann_p2_5_onboarding_paths.md`). **O0 and O1 are complete and gated
> 487/487** — the zero-install tour is built and in the tree at
> `/get-started/what-your-agent-reads/`, and `/get-started/` carries the cost statement, a labelled
> gap where the fabricated transcript was, a published first-success definition, troubleshooting and
> uninstall. **Nothing is deployed and nothing is pushed** — 5 commits are unpushed, and both a push
> and a deploy are separate per-action ⛩ GOs. Before any deploy: `git fetch` and diff
> `site/scripts/deploy_log.txt` first, and note that `npx astro build` alone does **not** inject
> redirects — `deploy_adna.sh` does, and gate-30 goes red without it. **O2 is the next objective and
> it needs a clean machine (fresh VM or user account) — that is its own ⛩ operator gate.** O2 runs
> the TTFS instrument from `artifacts/p2_5/design_zero_install_path.md` §6 and produces the real
> transcript as a by-product; O3 folds it in as variant B and retires the labelled gap. **Do not
> author any timing claim** — R-34 and R-63 are discharged by O2's measurement or revised down then,
> never by copy. If the tour is ever re-vendored, `npm run sync:tour` regenerates and gate-36 proves
> it; the generator refuses to emit against an unresolvable pin or a dirty standard checkout.
