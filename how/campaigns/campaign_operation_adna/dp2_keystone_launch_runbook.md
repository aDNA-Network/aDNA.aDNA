---
type: artifact
artifact_class: runbook
campaign_id: campaign_operation_adna
title: "DP2 keystone launch runbook — the coordinated public launch"
created: 2026-06-22
updated: 2026-06-22
status: active
last_edited_by: agent_rosetta
tags: [runbook, keystone, dp2, launch, deploy, pt19, operation_adna, cross_vault]
---

# DP2 Keystone Launch Runbook

> **What this is.** The single, self-contained, ordered checklist for executing Operation aDNA's
> **keystone joined launch (DP2)** — the coordinated public deploy of the improved aDNA.network site.
> It consolidates the launch handshake that was previously scattered across [[coordination_ledger]]
> (seam rows ★), [[campaign_operation_adna]] (§Program gates / DP2), and
> [[coord_2026_06_18_wadna_pt19_dependency]]. A fresh agent should be able to run the launch from this
> file alone.
>
> **When to use.** Only when **both** remaining gates have cleared: pt19 has landed (Hestia pings) **and**
> the operator has given DP2 GO. Until then this is reference; do not execute §2.
>
> **Posture.** Commit-only is the default everywhere else in the program; **the keystone is the one
> authorized deploy + push**, and only on the operator's explicit DP2 GO. Honor pt19 — never run
> `sync:vaults` or hand-edit `vaults.json` before pt19 lands.

Site lives at `aDNA.aDNA/site/`. All commands below run from there unless noted.

---

## §1 — Preconditions (all must be GREEN before §2)

The keystone gate ([[campaign_operation_adna]] §Program gates) requires **three conditions to land
together** so the site's "clone and inspect" pitch is true the day it ships. Current status as of
2026-06-22:

| # | Condition | Owner | Status (2026-06-22) |
|---|-----------|-------|---------------------|
| 1 | **WEBSITE credibility-fixes shipped** — C-1..C-4 cleared; proof-links resolve under `aDNA-Network/aDNA` | Rosetta · operator | 🟢 **ready** — D1 credibility deployed-live 2026-06-20; C-1 stage-2 + 14→16/v2.3 currency + Tier-2 spec-mirror port all **staged commit-only**; full improved-site deploy is §2 step 8 |
| 2 | **Hearthstone v8.0 base image released** — fresh clone offers a polished Hestia Home | Berthier · Rosetta | 🟢 **GREEN** — shipped 2026-06-19 to `aDNA-Network/aDNA` @ `adae20c` (`.adna/` @ `ad72979`; 13/13 smoke GREEN) |
| 3 | **pt19 vault-data regen landed** — `/vaults` · `/network` · `/vaults/graph` show keeper-set names | Hestia / `Home.aDNA` (Production Tidy P7) | 🔴 **PENDING** — behind pt17 (W-NET), itself gated on Network.aDNA/Venus Phase 6 (~1wk out). Registered: [[coord_2026_06_18_wadna_pt19_dependency]] |
| — | **Payload builds green** | Rosetta | 🟢 verified 2026-06-22: `npx astro build` → 163 pages; gates **281/281** |
| — | **Operator DP2 GO** | operator | 🔴 **PENDING** — the launch authorization |

**Launch is blocked until rows #3 and operator-GO flip green.** Rows #1, #2, and build-green require no
further in-vault work.

> **Readiness snapshot (2026-06-22b — verify-and-hold + tidy session).** Re-confirmed in a standalone hold
> session: payload **re-verified green** (`npx astro build` → 163 pages / 0 err; `npm run test:gates` →
> **281/281** incl. @audit; `site/src/data/` untouched — pt19 honored). pt19 **re-verified `pending`** at
> source (`Home.aDNA/.../campaign_production_tidy.md` P7 row; the day's `inventory_vaults.yaml` touches are
> Free Harbor origin-recordings, not the pt19 derived-projection regen). Operator DP2 GO not yet given.
> **No change to go/no-go since 2026-06-22a** — rows #3 + operator-GO remain the only blockers; the payload
> stays staged and ready to fire §2. *(Also this session: the 2 inbound Canvas Salon-P3 memos committed as
> receipt — non-program-relevant, not a keystone seam.)*

The deploy **payload** (what ships at step 8): the full improved site (D2–D4 + cycles c162–c165) + clears
`/commons` 404 + live Best-Practices 92→100 + MENU-1 + **C-1 stage-2** (proofs fixed→exemplary) + the
**14→16 / v2.3 entity-count currency** reconciliation + the **Tier-2 spec-mirror v2.3 port**. Residual
register: [[CAMPAIGN-REPORT]] §residual backlog. Traceability: [[keystone_credibility_traceability_20260622]].

---

## §2 — Launch sequence (execute in order, only after §1 is fully GREEN)

**1. Receive the pt19-landed ping from Hestia.** The coordinated regen has landed when
`Home.aDNA/.../inventory_vaults.yaml` is reconciled to the keeper-set (incl. the CakeProtocol +1 drift)
**and** the `vault_card` overlays are reconciled. Per [[coord_2026_06_18_wadna_pt19_dependency]], Hestia
pings this campaign; no cross-vault write into Home.aDNA is needed from the site side. **Fold the
vault-card public-fields regen** ([[coordination_ledger]] vault-card seam) into this same handshake — do
not run a separate `sync:vaults`.

**2. Sync the branch (concurrent-peer guard).** Other agents share `main`.
```bash
git -C /Users/stanley/aDNA/aDNA.aDNA fetch origin
git -C /Users/stanley/aDNA/aDNA.aDNA merge-base --is-ancestor origin/main main && echo "FF-OK (origin is an ancestor)" || echo "DIVERGED — reconcile before deploy"
```
If origin advanced, integrate first. Commit only your own files by explicit path; never `git add -A`.

**3. Regenerate vault data from the reconciled inventory.** From `site/`:
```bash
npm run sync:vaults     # = node ../scripts/build_vaults_data.mjs → src/data/{vaults.json, vaults_graph.mmd}
npm run sync:install     # = node ../scripts/build_install_truth.mjs → install_truth.json (verified_paths)
```
**Never run these before pt19** (a partial sync mixes current inventory names with stale card overlays).
Date-only churn from `build_vaults_data.mjs` after UTC midnight is a known false diff — but post-pt19
this run is *expected* to carry real inventory drift, so keep it.

**4. Verify axis-J vault-name correctness (post-pt19).** Confirm keeper-set names (no pre-rename slugs)
on the 5 pt19-owned surfaces:
- `/vaults`, `/network`, `/vaults/graph` vault-name correctness
- home `NetworkDiagram` hardcodes
- **`/llms.txt` + `/llms-full.txt` link targets** and **`/vaults/graph` no-JS (noscript Mermaid) labels** —
  both showed pre-rename slugs pre-pt19 (verify-after-pt19, same class as C-4). `llms.txt` is an **Astro
  endpoint** (`src/pages/llms.txt.ts`), not a static file — re-check its emitted output, not a fixture.

Fix any stale slugs surfaced. These are the units [[coord_2026_06_18_wadna_pt19_dependency]] sequenced to
post-pt19.

**5. Re-run the full gate suite.**
```bash
npm run test:gates       # = playwright test — ALL 281 incl. @audit (G2 @audit is BLOCKING)
```
Expect **281/281** (or a new baseline if step 4 added gates — record it). Do **not** co-run Lighthouse
with the gate preview server (known port-contention flake — 10 spurious fails in one session; isolate).

**6. Build the production bundle.**
```bash
npx astro build          # NOT `npm run build` — that triggers the prebuild regen (steps 3) again
```
Expect **163 pages, 0 errors**.

**7. ⛔ Operator DP2 GO.** Confirm the operator's explicit go for the coordinated public launch
([[campaign_operation_adna]] DP2). Do not proceed without it.

**8. Deploy to production.**
```bash
VERCEL_TOKEN="$SS_VERCEL_TOKEN" vercel --prebuilt --prod    # redact the token from any echoed output
```
`SS_VERCEL_TOKEN` is the throwaway test account (no rotation flag needed); keep safe-deploy discipline —
never let the CLI echo the token.

**9. On-live cold-3sec verdict.** Run Lighthouse against the **live** URL (isolated — not alongside any
local preview server). Confirm: Best-Practices 92→**100**, `/commons` no longer 404, Perf/A11y/SEO held.
*(Note: Lighthouse 13.4.0 has no "Agentic-Browsing" category — don't look for one.)*

**10. Post-deploy verification on the LIVE site.**
- Vault-name correctness on `/vaults` · `/network` · `/vaults/graph` (the step-4 surfaces, now live)
- All proof-links resolve **200-unauth** (C-1: they point at `aDNA-Network/aDNA` public-image paths)
- `/llms.txt` + `/llms-full.txt` serve
- `install_truth.json.verified_paths` — probe the listed root paths **live** (they map to files under
  `.adna/` in the public image)

**11. Push (operator-authorized at launch).**
```bash
git -C /Users/stanley/aDNA/aDNA.aDNA push origin main
GH_TOKEN="$(gh auth token)" gh run watch    # standing-watch .github/workflows/gates.yml
```
This is the one authorized push; it carries the accumulated commit-only work on `main` (the keystone
payload **plus** any peer-track staged commits riding the branch — confirm with the operator what ships).

**12. Schedule the Hearthstone "catch-up release" (F1).** The public `aDNA-Network/aDNA` image's
`adna_standard.md` §5 body still reads **14 types**; the v2.3 §5 `inventory`/`identity` prose was authored
in the dev standard ([[keystone_credibility_traceability_20260622]] §Tier-2) and is **staged for the next
gated `skill_template_release`**. Coordinate with Hestia / aDNALabs (Berthier) to fire that catch-up
release so the public image's spec body matches the site. *(Not a launch blocker — the site reads v2.3/16 standalone.)* **PREPPED 2026-06-22 — one-authorization-ready:** turnkey package [[f1_catchup_release_prep]] (verified 4-line §5 delta · image tag v8.1 · `skill_template_release` params, `dry_run` first · 8-row smoke · rollback), handed to Berthier ([[coord_2026_06_22_rosetta_to_berthier_f1_catchup_release]]). **Operator timing decision (DP3):** post-keystone as sequenced here, **or (recommended) launch-coupled** — fire just before step 8 so the published standard reads 16/v2.3 the moment the site goes live (credibility-complete day one; quality bar #5). Default unchanged pending the operator's call.

**13. Close DP2 in the records.**
- [[coordination_ledger]] — flip the ★ rows (C-1, improved-site deploy, Tier-2) → **shipped**; close pt19.
- [[campaign_operation_adna]] — DP2 → done (§Decision Points row + §Program gates readiness).
- `STATE.md` — record the launch; clear the keystone-hold "Next Steps".
- Program **DP4** (program close + cross-track AAR) is a *separate* later gate — not DP2. Run the
  program AAR only when all tracks reach terminal gates.

---

## §3 — Rollback

- **Deploy rollback:** Vercel retains prior production deployments. Re-promote the last-good one
  (`vercel rollback <previous-deployment-url>` or promote via the Vercel dashboard). The site is static —
  rollback is instant and safe.
- **Source rollback:** the pre-launch HEAD is recoverable from git; nothing is force-pushed.
- **Secret hygiene (Git-Ops):** the `gitleaks` pre-push hook runs on push; a full-history scan is a hard
  gate only before a *host move* (not a normal deploy) — see the `git/` Git-Ops doctrine.

---

## §4 — Gotchas (load-bearing)

- **`npx astro build`, never `npm run build`** — the latter's `prebuild` re-runs `build_vaults_data.mjs`
  + `build_install_truth.mjs`, regenerating data you don't want regenerated outside the step-3 handshake.
- **Honor pt19** — never `sync:vaults` / hand-edit `vaults.json` before pt19 lands; a partial sync mixes
  current names with stale overlays.
- **VERCEL_TOKEN** comes from `SS_VERCEL_TOKEN` (test account); **redact it** from output; don't flag it
  for rotation (operator de-prioritized).
- **`llms.txt` is an Astro endpoint** (`src/pages/llms.txt.ts`) — verify emitted output, not a static file.
- **Don't co-run Lighthouse with the gate preview server** — port contention → spurious gate failures.
- **`git fetch` + verify fast-forward before any push**; commit only your own files by explicit path
  (shared `main` takes concurrent peer commits mid-session).
- **`gh` in non-TTY** needs `GH_TOKEN="$(gh auth token)"` (keyring 401 otherwise).
- **`build_vaults_data.mjs` date-only churn** after UTC midnight is a false diff — restore, don't commit —
  *except* the post-pt19 step-3 run, which is expected to carry real drift.

---

## §5 — Quick command reference

```bash
# from aDNA.aDNA/site/  (post-pt19, on operator GO)
npm run sync:vaults && npm run sync:install     # 3 — regen data (post-pt19 only)
# 4 — manually verify vault-name correctness on /vaults, /network, /vaults/graph, llms.txt, graph no-JS
npm run test:gates                               # 5 — 281/281 (incl. @audit)
npx astro build                                  # 6 — 163 pages
# 7 — operator DP2 GO
VERCEL_TOKEN="$SS_VERCEL_TOKEN" vercel --prebuilt --prod   # 8 — deploy (redact token)
# 9 — Lighthouse cold-3sec on live (isolated); 10 — live verify
git -C /Users/stanley/aDNA/aDNA.aDNA push origin main      # 11 — authorized push
GH_TOKEN="$(gh auth token)" gh run watch                   # 11 — standing-watch
```

---

## Sources
- [[campaign_operation_adna]] §Program gates / keystone · §Decision Points (DP2)
- [[coordination_ledger]] — ★ seam rows (pt19, skill_template_release, C-1, improved-site deploy, Tier-2)
- [[coord_2026_06_18_wadna_pt19_dependency]] — the pt19 handshake registration
- [[keystone_credibility_traceability_20260622]] — claims-traceable site ↔ shipped-base audit (C-1, Tier-2)
- [[CAMPAIGN-REPORT]] (Track A close) — before/after, residual backlog, standing-watch setup
