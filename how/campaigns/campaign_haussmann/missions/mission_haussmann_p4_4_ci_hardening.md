---
plan_id: mission_haussmann_p4_4_ci_hardening
type: plan
title: "P4.4 — CI hardening: visual regression, live-header watch, field p75, the whole-site sweep"
campaign: campaign_haussmann
phase: P4
decade: 2
owner: stanley
status: queued   # ⛩ DP6 RATIFIED 2026-08-19 — activated. RESCOPED UP: adds THREE gate classes for the blindness the re-baseline exposed (487 assertions green while 8 claim rows are open, ZERO overlap) — a zero-console-error gate (F20 shipped through 487 assertions unseen) · an off-site CTA-target gate (probe the repos the CTAs point at for CONTRIBUTING/CoC/LICENSE; R-122/R-123 were invisible because every gate asserts against the BUILT SITE) · a hub-substance floor (F19). Also owns ⊳ D-E: mirror lighthouse_profiles.json into how/federation/webforge/ (0 hits vault-wide today, so campaign convention 4 is unfollowable and every gate-19 bar is transcribed); amend the convention ONLY if Vitruvius declines.
mission_class: build
executor_tier: sonnet
token_budget_estimated: "~220–330 kT across 1–2 sessions: toHaveScreenshot baselines (container) + reg reports + Unlighthouse periodic + field-p75 via Speed Insights + CWV ratchet + budget wiring, PLUS three new gate classes (zero-console-error · off-site CTA-target · hub-substance floor) and the ⊳ D-E lighthouse_profiles.json mirror. Raised from ~180–280 kT at ⛩ DP6 2026-08-19 (ADR-016/SO#11)"
token_budget_actual:
created: 2026-08-16
last_edited_by: agent_rosetta
grounded_in: ["toolkit A2 (container baselines solve the old deferral; Lost Pixel archived — avoid) / A3 (Unlighthouse) / A8 (Speed Insights as p75; CrUX null; keyless PSI dead)", "idea_visual_regression_gate (deferred for exactly the noise this solves)", "N12 (no field instrument)", "P0.2 header check (extend)", "webforge P3 (class-keyed bars, ratchet law)"]
vitruvius_dimensions: [D12, D5]
decade_theme: craft
webforge_patterns: [P3]
patterns_to_author: []
depends_on: [mission_haussmann_p0_2_deploy_hardening, mission_haussmann_p2_6_midscore]
blocks: []
acceptance_criteria:
  - "Visual-regression gate live: Playwright toHaveScreenshot on ~12 key templates × 2 themes, baselines GENERATED IN THE CI CONTAINER (the dev-Mac-vs-CI noise fix); reg-actions-style diff report on PRs; the old deferral formally closed"
  - "Field-p75 instrument decided + live (Vercel Speed Insights recommended; operator enables in dashboard) — D12's field gate becomes measurable"
  - "Unlighthouse whole-site sweep on a schedule (weekly/pre-release), budget-failing; fixtures remain the per-route gate"
  - "CWV budgets adopt the WebForge class-keyed + ratchet discipline (read from profiles, never transcribed)"
verification_method: "red-tests (deliberate visual diff; deliberate budget breach) + one scheduled sweep run + field data flowing"
human_gate: true
tags: [plan, haussmann, p4, ci, visual_regression, cwv]
---

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_haussmann/CLAUDE.md`.
> The classes of defect this campaign found by hand become classes a machine finds forever.

## Why this mission exists

The S1 mobile defect shipped because nothing looks at pixels; headers drifted because nothing watches production; the review instrument demands field p75 that no current instrument provides `[D N3/N12]`. The vault deferred visual regression over cross-machine noise — container-generated baselines resolve exactly that objection `[toolkit A2]`.

## Objectives

| # | Objective | Output | Gate |
|---|---|---|---|
| O0 | Visual-regression lane (containerized baselines; masked dynamic regions; 12 templates × 2 themes); red-test with a deliberate diff | gate + red-test | — |
| O1 | Field instrument: enable Speed Insights (operator dashboard action) + wire the reading into the measurement records; CrUX trial with a free key (expect nulls, record) | field data | ⛩ operator (enable) |
| O2 | Unlighthouse scheduled sweep + budget config; WebForge-bar adoption for the per-route gates | sweep + budgets | — |
| O3 | Close `idea_visual_regression_gate` (resolved) + runbook updates + AAR | records + AAR | — |

## Inherited follow-ups — routed here by earlier missions, and owed

> **Read this section before scoping O0–O3.** These were routed to P4.4 by the P4.5a, P3.5, P3.1
> **and P3.2** AARs — plus **F-k, the first row here that is an ⛩ operator ruling rather than a
> mission's leftover** — and most of them existed **only inside those AARs** until 2026-08-20. A
> follow-up recorded in the artifact that produced it and nowhere else is a follow-up nobody will act
> on — the P4.5a AAR named this exact failure (*"the split was recorded in three places and
> implemented in none"*), and it recurred. Each row below cites its source so the reasoning can be
> re-read rather than re-derived.
>
> ⚠ **This section is growing faster than the mission that has to discharge it, and that is now worth
> saying out loud.** It has taken rows from every Decade-2 mission so far. Derive the count before
> quoting it — `grep -cE '^\| \*\*F-[a-z]\*\*'` — never type it; and when P4.4 is finally scoped,
> **re-read every row against the live tree first**, because three of these have already shrunk or
> changed purpose on a re-probe (R-122 narrowed, the CTA gate flipped from discovery to regression
> guard, F-b became allowlist evidence rather than a bug). The budget above predates F-i, F-j, F-k
> and F-l and has **not** been re-raised for them; that is a live under-estimate, flagged here rather
> than silently absorbed (ADR-016/SO#11).

| # | Item | Source | Note |
|---|---|---|---|
| **F-a** | **The gate suite is blind to everything axe classes `best-practice`.** `gate-4` filters `.withTags(['wcag2a','wcag2aa'])`, so a real `empty-table-header` on `/community/proposals/aep-1/` **passed a fully green 512-assertion suite** and was caught only by the T0 sweep (`scripts/visual_capture.mjs --axe`, which uses axe's default ruleset). P3.5 added the routes to gate-4 — that locks WCAG AA on them and **does not close this class**; the scope limit is stated in-file at `gate-4-a11y.spec.ts` | P3.5 AAR | Decide deliberately: widening `gate-4` to best-practice across all ~23 pages will surface pre-existing violations, so it is a scoping decision, not a one-line change |
| **F-b** | **`gitleaks` false positive**: `how/campaigns/campaign_haussmann/artifacts/webforge_pattern_register.md:23` trips `generic-api-key` on the phrase *"DTCG **token** pipeline"*. Public since 2026-08-16, not a secret. The pre-push hook scans **outgoing changes only** so it stays clean, but a full-history `gitleaks detect` always reports `leaks found: 1` | P3.5 AAR | Allowlist it. A scanner that always cries once is a scanner whose output stops being read — which is the failure mode that matters before any host move (Git-Ops §7) |
| **F-c** | **Wire `artifacts/p3_5/derive_register_counts.py` into the suite.** It pins the claim register's looser, §8.6-comparable parse, but still has to be **run and pasted by hand**. A gate that fails when a published count disagrees with the derived one is the other half | P3.5 AAR (§9.5 opened it) | Closes the "undocumented derivation" item: two defensible parses of the same table differ by 2 rows |
| **F-d** | **`gate-26` cannot express "a retired claim must stay gone"** for a row that was never `FALSE` | P4.5a AAR | The R-125 class — an `unsupported → cut` row has no regression guard today |
| **F-e** | **⊳ D-E — mirror `lighthouse_profiles.json`** into `how/federation/webforge/`, or amend campaign convention 4. Already in this mission's frontmatter; repeated here so it is visible where the work is scoped | ⛩ DP6 | `find . -name lighthouse_profiles.json` → **0 hits** vault-wide, so every gate-19 bar is currently a transcription |
| **F-f** | **`check_live_headers.mjs` compares header NAMES, not VALUES.** P3.1 hardened it to assert `res.ok` + same-origin (it had been reading `vercel.com`'s login page and printing `OK — no drift`), but a **correct-name / wrong-value** drift still passes on prod today. The fix is a field-by-field comparison against `vercel.json`'s `/(.*)`  block — a bigger change to a shared deploy tool than P3.1 should have made mid-mission | P3.1 AAR | The instrument now refuses when it cannot reach the target; it still cannot tell you the CSP it read is *yours*. Convention 14 is the general rule this row implements |
| **F-g** | **`stripHtmlComments()`'s second root is inert.** It walks both `dist` and `.vercel/output/static`, and its comment claims the dual walk means "the strip cannot be defeated by hook ordering." Measured at P3.1: **the adapter copies AFTER `astro:build:done`**, so at hook time that path holds either nothing or the *previous* build. The strip is safe — because the adapter copies the already-stripped `dist` afterwards, a different mechanism than the one documented | P3.1 AAR | Not broken; the comment misleads the next person who relies on it. Same ordering fact means **an Astro endpoint cannot read build output** — that is why the llms-full corpus is appended post-build |
| **F-h** | **⚠ Re-read P0.2's header evidence against the alias.** P0.2 built header hardening *on preview deploys only* and verified it with the instrument in F-f — before either of its defects was known. Its header claims should be re-verified against `https://adna.network` before being relied on at launch | P3.1 AAR | Flagged, not acted on, at P3.1: P0.2 is not that mission's lane. This is an **evidence re-read**, not a rebuild — the headers may well be correct; what is missing is a verification that reached them |
| **F-i** | **gate-27 leak-lint scans `.html` and `.md` only — `.json` is invisible to it.** `scanTargets()` (`gate-27-leak-lint.spec.ts:136`) filters on those two extensions, so the P3.2 registry endpoints (`/vaults.json`, `/api/registry.v1.json` — 81 KB of published surface, 74 rows of registry prose) are **unlinted**. This is the *identical* hole P3.1 found when 221 `.md` twins arrived unseen, recurring one mission later in a new extension. Fix: add `.json` to the scan, and **scope-allowlist the machine enums** (`org_graph`, `tbd_at_p0`, `genesis_stub`) to those routes and those keys — a JSON field named `class` whose value is `org_graph` is an API contract, not jargon in a sentence — so every *other* leak class (internal paths, mission ids, codenames) still applies in full | P3.2 AAR | The allowlist fixture already supports exactly this shape (`surface` glob + `pattern` + `tokens` + `rationale` + `date` + `reviewed_by`). **Do not skip the gate for JSON; scope it.** |
| **F-j** | **`astro check` has a 26-error pre-existing baseline, so it cannot gate anything.** Measured at P3.2 `[D]`: 26 errors across 7 files — `src/pages/index.astro` (10), `src/pages/vaults/index.astro` (10, all in the client `<script>`), `vaults/graph.astro` (2), `HomeHero.astro`, `Header.astro`, and 2 gate specs. All are DOM typing in inline scripts (`Element.dataset`, `Element.hidden`, implicit `any`) — **none introduced by P3.2**, whose own files check clean. Consequence: P3.2 added `schema-dts` typing to every JSON-LD builder (red-tested — it catches `licence` for `license`), but that safety is **authoring-time only**; a new type error would land in a 26-error wash and CI cannot assert zero | P3.2 AAR | Cheap to fix (cast the query results, type the callbacks) and it converts an existing tool into a real gate. Until then, **do not cite `npm run check` as passing** — it does not |
| **F-k** | **⛩ RULED OURS: `.adna/` has no pre-push secret-scanning hook at all** — verdict `FAIL_NONE`, the worst state, on a tree carrying a live origin (`github.com/aDNA-Network/adna-legacy`). Grace Hopper found it and correctly refused to patch it: Standing Rule 1 makes `.adna/` do-not-modify, and the only sanctioned path is a `skill_template_release` fire **from this vault**. Operator ruled the gate **ours to carry**, `2026-08-21T23:51:27Z` (Decade-2 SITREP composite → `approve`). The fail-closed skeleton v2 (`a1288f73…`) is already row 9 of Git.aDNA's pending batch; §2 makes it ten | Hopper memo §2 (2026-08-20) + ⛩ operator composite | Ships in the **next `skill_template_release`** — an operator-opened gate, so no date is pinned here on purpose. ⚠ **Two constraints from Hopper that change what we ship, not just when**: (a) *shipping v2 into the template does not deploy it* — **one live installation fleet-wide**, so a release note saying "the standard now carries a fail-closed gate" would be read as "the fleet is covered" and would be **false**; the existing-vault sweep is a separate act with a separate owner. (b) any conformance check must resolve **what git actually runs**, not what `.git/hooks/pre-push` appears to contain — `ScienceStanley.aDNA` reads PASS while running the no-op, and `Archive.aDNA/lattice-labs` points `core.hooksPath` at a defunct path outside the workspace |
| **F-l** | **The redaction idiom this campaign uses in its own notes does not redact.** `${VAR:+SET}${VAR:-UNSET}` leaks the value whenever the var **is** set: `:+` emits `SET`, then `:-` emits **the value** (it falls back to `UNSET` only when *unset*), so the two concatenate to `SET<value>`. Run against `SS_VERCEL_TOKEN` at the P3.2-deploy session open, it printed the live token into the transcript. The credential is the known throwaway test-account token whose rotation the operator explicitly de-prioritized (E4 c159, 2026-06-07), so this is **not an incident** — but the idiom is recorded in campaign memory *as the redaction pattern*, and it leaks every time it is applied to a set variable | P3.2-deploy session `[D]` 2026-08-21 | Fix the recorded idiom: **`[ -n "$VAR" ] && echo SET \|\| echo UNSET`**, or `${VAR:+SET}` alone with nothing concatenated after it. ⚠ Same *outcome* as the 2026-06-04 incident (`session_stanley_20260604T160140Z_v8_m510_e1_reskin_deploy`, where the `vercel` CLI printed the same token) by a **different mechanism** — that one was a tool printing a secret, this one is our own probe. Worth a `doctrine_credential_handling` note: the ≤6-char-prefix rule (§428) governs how a leaked value is *referenced afterwards*; nothing governs the probes that produce one |
| **F-m** | **`what/decisions/adr_index.md` is twelve ADRs behind, and nothing notices.** Measured at P3.3 O0 `[D]`: the index reads `updated: 2026-07-02`, tallies **41 ADRs**, and its highest row is **046** — while **047–058 exist as files on disk**, every one of them Haussmann-era (048 positioning, 049 IA, 050 deploy, 051 URL canonicalisation, 052 registry tiers, 055 proposal process, **056 the agentic-surface contract this mission's siblings keep amending**, 057 same-diff gate law, 058 installer). An index that is the documented way in to the decision record, silently missing the decisions the current campaign is making | P3.3 O0 `[D]` | Same family as **F-c**: a published tally that disagrees with the derived one should fail a gate rather than wait to be noticed by someone opening the file for another reason. Cheap derivation: count `adr_*.md` in `what/decisions/`, compare to the index's tally and to its highest row. ⚠ Note the numbering hole is legitimate — **015 and 018–021 were never assigned** (F-CHM-206) — so the check compares *presence*, not contiguity |
| **F-n** | **No check compares a vault's `MANIFEST.updated` against its `STATE.updated`** — and a peer measured the consequence across the fleet before we did. Ilmarinen (`coord_2026_08_21_ilmarinen_to_hestia_rosetta_manifest_pull_was_staler`) sampled 12 vaults: **8 are 34–52 days behind**, including **this one at 45 days**. Their own case is the sharp one — `Forgejo.aDNA`'s MANIFEST denied in prose ("*no deployment, no infra, no install*") a service that had been in production for two weeks and is now the fleet's container registry and git host. Root cause is structural, not sloppiness: the startup checklist reads `CLAUDE.md` → `STATE.md` → campaign → `what/context/`, and **`MANIFEST.md` is in none of them**, so nothing ever brings a reader back to it | Ilmarinen memo §1–§3 `[D]`, intaken at P3.3 O0 | A two-line gate (compare the two `updated:` fields, fail past a threshold) closes it for this vault. ⚠ **The fleet-wide half is not ours** — Ilmarinen offers it to Hestia as a *staleness floor* on any registry pull, and registry data is pt19/Hestia's lane. What P4.4 can own is the local check. Recorded here so a peer's measured finding is **dispositioned rather than merely mentioned** — Berthier's own §3 lesson from the same week |
| **F-o** | **`machine_eye` item 11's text-search probe has gone NOISY, and a future re-run will misread it as moved.** The genesis probe had two halves — fetch the endpoints, and text-search the site for `mcp`. On 2026-08-16 the text half returned **0** hits outside one vault description. Re-measured live at P3.3 O3 `[D]`: **5** hits in `llms-full.txt`, and **not one is a capability claim** — Playwright MCP named as a tool in `/doctrine/visual-inspection` (×2), `.mcp.json` gitignore advice aimed at the reader (×2), and the original Warp.aDNA vault description. Nothing changed but the corpus: P3.1 grew `llms-full.txt` from 2 KB to 950 KB and swept the mentions in. ⇒ **A future `grep -c mcp` scores 5 and concludes item 11 moved. It has not.** Fix: the probe must separate *the site mentions MCP* from *the site offers an MCP server* — only the endpoint half can decide that, and the text half needs a negative filter or retirement. *(Convention 15's staleness class through a side door: the probe did not change and the site did not lie — the corpus underneath the probe changed, and the probe's meaning changed with it.)* |
| **F-p** | **Gate-17 G15's skip guard tests for the wrong thing, so the documented workflow leaves it guaranteed-red.** G15 asserts one `Vary`-carrying negotiation route per twin against `.vercel/output/config.json`. Its guard is `test.skip(!existsSync(configPath), 'run npx astro build …')`. But that file exists as soon as **any** post-build inject step has run — so following convention 6's own out-of-deploy instruction (`node scripts/inject_redirects.mjs .`) creates the file **without** the routes G15 asserts on, leaving the gate **unskipped and certain to fail on a perfectly good tree** (observed at P3.3 O3 `[D]`; fixed by running `inject_negotiation.mjs`, **no code changed**). Two defects: the guard checks for the *file* rather than the *routes*, and its skip message names a remedy — a bare `astro build` — that **does not inject at all**, which is the exact thing convention 6 exists to warn about. Fix: guard on the presence of `x-adna-twin` routes, and correct the message to name `inject_negotiation.mjs`. |
| **F-q** | **The "expect exactly 1 known gitleaks FP" baseline is SELF-DEFEATING — documenting the false positive creates another one.** Observed live at P3.3 O3 `[D]`: the by-hand scan read **855 commits / 1 leak** before the session's commits and **857 / 2** after. The new finding was in **the session file that documented the first one**, because the record quoted the FP's matched text verbatim to identify it. Both findings share a single literal — `measured+gating`, prose about **design tokens** in `webforge_pattern_register.md:23` — so there is no secret and never was. ⚠ **But the campaign uses "expect exactly 1" as a go/no-go signal before every push, and that number now ratchets upward every time an agent honestly records why the scan was clean.** A baseline that rises when you document it cannot be used as a tripwire: within a few sessions a real leak would arrive as "3 instead of the expected 2" and read as more of the same. **Fix (pick one, P4.4's call):** a `.gitleaksignore` entry or an allowlist regex scoped to that exact literal, so the FP is counted **zero** times rather than N; **or** a rule that records the FP by *fingerprint/commit* and never by matched text. **Do NOT just raise the expected number** — that re-arms the same trap one notch higher. ⇒ **The general shape, and it is the third instrument-defect this session: an instrument whose OUTPUT changes its own INPUT cannot hold a baseline.** *(Related but distinct from **F-o**, where the corpus grew under a static probe; here the probe's own audit trail feeds it.)* |

**F-b recurred at P3.1** (2026-08-21). `gitleaks detect --source .` was run by hand at every push point
— because the pre-push hook is the retired v1 no-op (Hopper's census: **14 vaults**, not one) — and it
reported `leaks found: 1` on the same `measured+gating` phrase every time. Recurrence is evidence for
the allowlist, not a new row: a scanner that always cries once is a scanner whose output stops being
read, which is precisely the state it is in.

**⚠ One scope item in the frontmatter has changed meaning.** The **off-site CTA-target gate** was
rescoped in at DP6 to *discover* the R-122/R-123 defects. **P3.5 closed both** (2026-08-20, verified
live). The gate is therefore now a **regression guard**, not a discovery instrument — build it to fail if
`CONTRIBUTING.md` / `CODE_OF_CONDUCT.md` / `LICENSE` ever stop resolving in the repos the site's CTAs
point at. The reusable probe already exists: `artifacts/p3_5/deploy_probe_p3_5.mjs` ends with exactly
that check.

## Constraints

Baselines only ever regenerate deliberately (reviewed diff); no third-party SaaS beyond the Vercel platform already in use; budgets ratchet-only (WebForge law); scheduled jobs must fail loudly somewhere a human looks.

## Definition of done

A pixel regression, a header drift, a budget breach, or a field-CWV red each fail something visibly — without a human remembering to check.

## Session opening prompt

> Open this mission + campaign CLAUDE.md + the toolkit table (plan §Inspection-toolkit) + `idea_visual_regression_gate.md`. Execute O0, O2; O1 needs the operator's dashboard action; then O3.

## Progress

*(at execution)*

## AAR (SO#5)

*(before completed)*
