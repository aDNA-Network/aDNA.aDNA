---
type: mission
mission_id: mission_meridian_m9_certification
campaign: campaign_meridian
status: completed
executor_tier: opus
token_budget_estimated: 60
token_budget_actual: 54
created: 2026-07-06
updated: 2026-07-06
last_edited_by: agent_rosetta
tags: [mission, meridian, p3, gates, build]
---

# M9 — Production-deploy certification (DP2 evidence pack)

Certify the `site/` tree as the **DP2 deploy candidate**. Refresh the pt19-owned claim-trace fixture to the
committed inventory, author the two new DP1 gates (hero claims 11–12 + audit route 13), run the full gate +
audit suites to green, capture the live-prod **before** baseline, and produce a frozen production build with
a dist spot-check. **EDIT gate/test files + RUN checks/build only — NO git ops, NO deploy** (the orchestrator
stages exactly the file set below). site/-only + this mission file + one artifacts file.

## Objectives

1. **Fixture refresh (Task 1)** — `site/tests/gates/fixtures/claim_trace_manifest.json` `vault-count` entry:
   expected `54`→**`68`** + claim text `54 vaults`→`68 vaults`. The schema carries NO per-entry note field, so
   an ignored-by-the-gate `_note` field was added to self-document the override: *"Ring-A (pt19-owned) expected
   refreshed 54→68 at Meridian M9 from the data-owner's committed inventory (source_inventory_sha
   9f4fd1d1a51e316d); fixture-currency refresh, not a hand-edit of pt19 data; drift flagged via
   coord_2026_07_06_rosetta_to_hestia_pt19_registry_regen; owner field UNCHANGED."* **Ownership-rule override
   documented.** `relationship-count` verified still `14` (matches `vaults.json` `edges.length: 14` — untouched). ✅
2. **New gates (Task 2)** — `site/tests/gates/gate-23-hero-claims.spec.ts` (3 tests, house `G-hero-claims:`
   convention, NOT @audit): (a) homepage `.hero-lead` contains the A-11 phrase `"open standard for organizing
   project knowledge"`; (b) `.hero-lead` contains the A-12 gloss `"the open coordination protocol underneath"`
   (both are HomeHero.astro `lead` defaults, NOT overridden by index.astro — verified); (c) the homepage
   `figure.netdiagram svg.netdiagram-svg` renders ≥6 real `<text>` labels with `javaScriptEnabled:false` +
   0 `<foreignObject>` (the NetworkDiagram is JS-armed but no-JS-safe by construction). ✅
3. **Audit list (Task 3)** — `/security` added to the `@audit` p1s3 sweep route array at
   `site/tests/gates/audit-p1s3-sweep.spec.ts:69` (near the other utility pages). Adds 3 swept tests
   (axe dark + axe light + mobile-overflow). ✅
4. **Checks (Task 4)** — (a) `npx astro check`: **3 errors, ALL pre-existing** (`Header.astro:88`,
   `graph.astro:222`, `graph.astro:278`), **0 new** — matches the M8 baseline; my test-spec additions aren't
   type-checked by astro check and I touched no `.astro`/`src` files. (b) `npm run test:gates:fast`: **195
   passed** (incl. gate-23 ×3 + gate-20 vault-count now `68` + gate-22 graph-SSR); ran twice, both 195/0 —
   non-flaky. (c) `npm run audit:p1s3`: **118 passed** in 1.5 min (incl. the 3 new `/security` tests); full
   sweep ran once, clean. (d) no reruns needed — no failures to re-confirm. ✅
5. **Live baseline (Task 5)** — `../artifacts/live_baseline_20260706.md`. Lighthouse 13.4.0 ran locally. Live
   is the OLD 2026-06-21 build. **A-07**: `/` perf 1.00 / CLS **0** / LCP 0.4 s; `/learn/concepts/knowledge-graph`
   perf 1.00 / CLS **0.031** / LCP 0.5 s (the task's `context-graph` route 404s live — used the real
   `knowledge-graph`). **A-09** best-practices: `/` **0.92**, content route **0.92**. Live spec claim **v2.3** +
   **"54 vaults"** (the drift this deploy fixes). Undeployed-route probe: `/rss.xml` 404 + new
   `/learn/concepts/dual-audience` 404 (land with deploy); **`/security` + `/org-context-graphs` return 200 on
   live — already shipped, contra the task's stated 404 assumption** (documented in the artifact). ✅
6. **Production build (Task 6)** — `npm run build`: **195 pages, clean**. `git status --porcelain` after build:
   **ONLY the 4 intended files, ZERO data-file churn** — the prebuild regen is fully idempotent (M7 holds; no
   restore needed). Dist spot-check: (a) `security/index.html` ✅, `org-context-graphs/index.html` ✅,
   `rss.xml` ✅, `learn/concepts/dual-audience/index.html` ✅ (the task's `dual-audience-writing` slug is wrong —
   the built route is `dual-audience`, from the mdx filename); (b) `dist/vaults/graph/index.html` carries inline
   `<svg id="vaultsGraph"` + **0** client mermaid mounts ✅; (c) A-11 phrase on 4 pages (homepage=1), A-12 gloss
   on exactly 1 page (homepage) ✅; (d) **68 vaults** on homepage + `vaults/index.html` + llms.txt, **0** pages
   with stale "54 vaults" ✅; (e) dist total **29M** / 195 HTML. ✅
7. **Freeze (Task 7)** — see below. ✅

## Evidence-pack summary

| Check | Result |
|---|---|
| `npx astro check` | 3 errors (all pre-existing: Header.astro:88, graph.astro:222, :278) · 0 new |
| `npm run test:gates:fast` | **195 passed** / 0 failed (2 runs, non-flaky) |
| `npm run audit:p1s3` | **118 passed** / 0 failed (1.5 min; +3 new `/security` tests) |
| Live baseline (A-07) | `/` CLS 0 · LCP 0.4s · perf 1.00 ; concept CLS 0.031 · LCP 0.5s · perf 1.00 |
| Live baseline (A-09) | `/` BP 0.92 ; content route BP 0.92 |
| Live drift fingerprint | v2.3 + "54 vaults" (deploy → v2.5 + 68) |
| `npm run build` | 195 pages · clean · **0 data churn** in git status |
| Dist spot-check | all 5 (routes / graph-SVG / hero+gloss / 68-count / 29M) PASS |
| Fixture override | `vault-count` 54→68, `_note` documented, owner UNCHANGED |

### File set (orchestrator stages exactly these)
- **modified**: `site/tests/gates/fixtures/claim_trace_manifest.json` · `site/tests/gates/audit-p1s3-sweep.spec.ts`
- **created**: `site/tests/gates/gate-23-hero-claims.spec.ts` · `how/campaigns/campaign_meridian/artifacts/live_baseline_20260706.md` · this mission file
- **NOT staged**: `dist/` (build output — the deploy candidate, not a repo commit)

## Freeze

**FREEZE START 2026-07-06 (post-M9-run).** The build in `site/dist/` (195 pages, 29M, built from the M9-certified
source) is the **DP2 deploy candidate**. No further `site/` edits until the deploy — any source change invalidates
this frozen dist and requires a re-build + re-certification. The three certified test-file changes above are staged
but do not alter rendered output (fixture/gate only), so they do not break the freeze.

## AAR

- **Worked**: The tree certified cleanly on the first pass — 195/195 gates + 118/118 audit + a byte-idempotent
  build (0 data churn). Reading HomeHero.astro + index.astro *before* writing gate-23 confirmed the `lead`/`title`
  defaults render un-overridden, so the exact-substring assertions were safe. The pre-existing 3-error astro-check
  baseline (from M8) let me certify "0 new" with confidence.
- **Didn't**: The task's route assumptions were stale in three places — `/learn/concepts/context-graph` (404;
  real route is `knowledge-graph`), the `dual-audience-writing` build slug (real: `dual-audience`), and the claim
  that `/security` + `/org-context-graphs` 404 on live (both 200 — already shipped). None blocked certification;
  all documented rather than papered over.
- **Finding (marquee)**: the claim-trace fixture schema has no per-entry provenance field, so the Ring-A override
  had nowhere native to record *why* a pt19-owned expected was hand-touched. Adding an ignored `_note` field
  (the gate destructures only known keys) is a clean, self-documenting override channel — candidate to formalize
  in the manifest `_doc` if Ring-A refreshes recur.
- **Change**: no scope deviation. Task 5's baseline gained a "corrections to the task's route assumptions" section
  it wasn't scoped for, because faking the expected 404s would have produced misleading before/after evidence.
- **Follow-up**: (1) post-deploy, re-run the four lighthouse commands + confirm v2.5/68/new-routes per the
  artifact's re-capture checklist. (2) The 3 pre-existing astro-check errors (Header.astro:88 `.focus()` on
  `Element`; graph.astro:222 implicit-any + :278 possibly-null) are cosmetic type-noise, not deploy blockers —
  worth a future typing cleanup, out of M9's box. (3) If Ring-A fixture refreshes recur, formalize the `_note`
  override channel in the manifest `_doc`.

**Delivered 2026-07-06** — CERTIFIED. GO for deploy. No git ops (orchestrator stages the file set above).
