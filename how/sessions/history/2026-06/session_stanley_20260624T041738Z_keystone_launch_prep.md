---
type: session
session_id: session_stanley_20260624T041738Z_keystone_launch_prep
created: 2026-06-23
status: completed
agent: agent_stanley
persona: rosetta
campaign: campaign_operation_adna
mission: "(program-level keystone DP2 — launch prep: pt19 LANDED, ran dp2_keystone_launch_runbook §2 steps 1-6 [regen vault data, verify keeper-set names + fix the rename-cascade edge regression, gates, build], HELD at step 7 for operator DP2 GO; no deploy, no push)"
token_budget_estimated: "50-80 kT (content-load)"
token_budget_actual: "~upper band of 50-80 kT — extra spend on the duplicate-key root-cause + operator-authorized cross-vault source fix, the 17→8 edge-regression diagnosis + overlay rename-cascade rebuild, and the build/gates re-verify"
plan_ref: "~/.claude/plans/please-read-the-claude-md-tranquil-seahorse.md"
tags: [session, operation_adna, keystone, dp2, launch_prep, pt19, sync_vaults, network_edges, gates, hold, cross_vault]
---

# Session — Operation aDNA: keystone DP2 launch prep (pt19 landed → steps 1-6, held at GO)

## Intent
Continue Operation aDNA at the keystone joined launch (DP2). The plan opened as "stand-by / confirm-hold"
(pt19 believed not-landed), but a fresh **source-of-truth read falsified that premise**: a concurrent
**Hestia / Home.aDNA** session ("continue the campaign" on the Production-Tidy side) had **landed pt19** —
`campaign_production_tidy.md` P7 row + mission row both ✅ **DONE 2026-06-23** (commits `d00c401`→`6d584c2`),
`Home.aDNA/STATE.md` Current Phase = "PT P7 pt19 DERIVED-PROJECTION REGEN ✅ … P6 → P7 advanced." The
headline keystone blocker was therefore **cleared**; only **operator DP2 GO** remained. Surfaced this;
operator chose **"Launch prep, hold at GO."** Ran `dp2_keystone_launch_runbook.md` §2 **steps 1-6** (all
reversible) and **HELD at step 7**. No deploy (step 8), no push (step 11).

## Work log
- **Step 1 — pt19-landed (received by detection).** Verified at source (above). aDNA.aDNA HEAD unchanged
  `9e843a6`; pt19 lives in Home.aDNA's own repo — no shared-tree collision.
- **Step 2 — branch sync.** `git fetch origin`; `merge-base --is-ancestor origin/main main` → **FF-OK**;
  ahead 2 / behind 0 (peer `f35bbbc` + verify-hold `9e843a6`, push held). No divergence.
- **Step 3 — regen vault data → BLOCKED then fixed.** `sync:vaults` aborted with a YAML `DUPLICATE_KEY`:
  Home `inventory_vaults.yaml` `Molecules.aDNA` entry had **two `note:` keys** (the only dup in 69 entries,
  confirmed by an awk scan). PyYAML (Home generators) tolerates it (last-wins) so pt19 ran `--check`-clean;
  the site's strict JS `yaml` parser (ADR-023 projection) correctly rejects it. **The site's parser caught
  a real defect pt19's tooling masked** → fix belongs at source, not site-tolerance. Surfaced to operator;
  operator authorized the direct cross-vault fix. Removed the redundant first `note:` (rename housekeeping),
  kept the descriptive one (**zero change to Home's outputs** — PyYAML already used it); bumped
  `updated: 2026-06-23` + `last_edited_by: agent_rosetta`; prepended a changelog entry. Concurrency-guarded
  (`pgrep` clean; only `.obsidian` UI-state + a concurrent `pt20_close` session file dirty in Home — both
  left untouched). Re-ran `sync:vaults` → clean: **vaults.json 54 vaults / vaults_graph.mmd / subnetworks.json**;
  `sync:install` → install_truth.json unchanged (4 paths verified).
- **Step 4 — verify keeper-set names + fix rename-cascade edge regression.** Data-level audit: all 54
  vaults carry **keeper-set names — STALE-IDENT FLAGS: NONE** (Operations not TaskForge, Astro not SiteForge,
  Molecules not MoleculeForge, Context not aDNAScope, Terminal not Cmux, TappProtocol not TappInterface,
  Canvas not CanvasForge, …). **Found a 17→8 edge regression:** `network_edges.yaml` (the federation-edge
  overlay) still used **pre-rename names**, which no longer resolve against the renamed registry
  (`resolveSlug` → null), silently dropping 9 edges. Propagated the PT rename cascade through the overlay
  (SiteForge→Astro · MoleculeForge→Molecules · SpeechForge→Oration · aDNAScope→Context · VAASLattice→VAAS ·
  TappInterface→TappProtocol; archived targets LatticeLabs/ContextCompass/RareHarnessOld **dropped** per the
  overlay's honesty discipline). Re-synced → **edges 8→14, all endpoints resolve** (14 = honest current; the
  prior 17 included now-archived relationships). Also repointed 2 hardcoded homepage slugs in `index.astro`
  (`CanvasForge.aDNA`→`canvas`, `TaskForge.aDNA`→`Operations.aDNA` — they were silently dropping from the
  curated registry slice). Build-time surfaces verified **CLEAN**: `/llms.txt`, `/llms-full.txt`, and the
  `/vaults/graph` no-JS Mermaid labels carry no pre-rename slugs; renamed vault-detail pages build.
- **Step 6 — build (run before gates; preview serves dist/).** `npx astro build` → **177 pages / 0 errors**.
  **NEW baseline** (was 163; **+14 = the 14 added vault-detail pages** from the 40→54 vault expansion;
  123 non-vault + 54 vault = 177).
- **Step 5 — gates.** `:4321` probed free (no foreign-server collision this session). `npm run test:gates`
  → **281 passed (1.5m)** incl. all @audit. No rebaselining needed — gates robust to the data expansion.
- **Step 7 — HELD.** No deploy, no push. Site data regenerated + committed commit-only; awaiting operator
  DP2 GO.

## SITREP

**Completed**
- pt19-landed detected (concurrent Hestia session); surfaced; operator chose launch-prep-hold-at-GO.
- Ran runbook §2 **steps 1-6 GREEN**: regen (**54 vaults**) · keeper-set names CLEAN · edges restored
  **8→14** · build **177**/0 err · gates **281/281** incl @audit.
- **Operator-authorized cross-vault source fix** to Home `inventory_vaults.yaml` (duplicate `note:` key on
  Molecules.aDNA) — committed in Home.aDNA's repo; coord memo to Hestia staged.
- Fixed the **17→8 edge regression** (overlay rename cascade) + 2 hardcoded homepage slugs — site-side.
- Recorded: runbook §1 readiness snapshot + step-6 baseline (163→177); STATE running-log; coordination
  ledger pt19 seam (landed + prep-executed); this session record.
- Committed **commit-only by explicit path** in both repos (aDNA.aDNA site data + records + session;
  Home.aDNA inventory fix). **No push, no deploy.**

**In progress** — none.

**Next up (the ONLY remaining keystone gate)**
1. **Operator DP2 GO** → run `dp2_keystone_launch_runbook.md` §2 **steps 7-13**: `vercel --prebuilt --prod`
   (VERCEL_TOKEN from SS_VERCEL_TOKEN, redact) → on-live cold-3sec Lighthouse verdict (`/commons` 404 cleared,
   BP 92→100) → live verify (keeper-set names, proof-links 200-unauth, `/llms.txt`) → **authorized push**
   (`git push origin main` carries the accumulated commit-only work + standing-watch `gh run watch`) → close
   DP2 in records. The step-3 regen is already done + committed; the GO session's re-run is idempotent
   (modulo a one-line `generated_at` date bump).

**Blockers** — none in-vault. DP2 is operator-gated only (pt19 cleared).

**Findings**
- **The site's strict YAML parser is a de-facto integrity check on Home's inventory** — it caught a
  duplicate-key defect PyYAML silently masked. Site-tolerance (`uniqueKeys:false`) was rejected for that
  reason; fixed at source. Optional upstream: a dup-key guard in Home's generators / health check.
- **Rename cascades must propagate to the site's `network_edges.yaml` overlay** — the overlay resolves
  targets by name, so pt-rename names silently drop edges. New "verify-after-pt19" class, same family as C-4.
- **Page baseline shifted 163→177** (legitimate: +14 vault-detail pages from 40→54). Gate baseline holds
  at **281** (the @audit sweep tests a fixed representative page set, not all vault-detail pages).
- **Slug-form inconsistency persists** (some `vault_slug` full-name `X.aDNA`, some lowercased `x`) — a known
  pre-existing issue; internally consistent (same slug for routes + edges), navigation works. Not fixed here.
- **Concurrency:** a Hestia `pt20_close` session (PT P8 close) is live in Home.aDNA; I touched only
  `inventory_vaults.yaml` by explicit path, leaving its session file + UI-state untouched.

**Files touched**
- aDNA.aDNA (committed, explicit path): `site/src/data/{vaults.json,vaults_graph.mmd,subnetworks.json}`
  (regen) · `site/src/data/network_edges.yaml` (rename cascade) · `site/src/pages/index.astro` (2 slugs) ·
  `how/campaigns/campaign_operation_adna/dp2_keystone_launch_runbook.md` (§1 snapshot + step-6 baseline) ·
  `how/campaigns/campaign_operation_adna/coordination_ledger.md` (pt19 seam) · `STATE.md` (running-log) ·
  `who/coordination/coord_2026_06_23_rosetta_to_hestia_inventory_dupkey_fix.md` (new) · this session file.
- Home.aDNA (committed in Home's repo, explicit path): `what/inventory/inventory_vaults.yaml` (dup-key fix).
- Build artifacts (`dist/`, `.vercel/`) — gitignored, not committed.
- Not committed: the plan file (`~/.claude/plans/…tranquil-seahorse.md`, outside the vault).

**Token budget** — est. 50-80 kT; actual ~upper band (root-cause + cross-vault fix + edge-regression rebuild).

## Next Session Prompt
Operation aDNA (program umbrella, `aDNA.aDNA`) is at the **keystone joined launch (DP2)** with **only one
gate left: operator DP2 GO**. pt19 LANDED 2026-06-23 (Hestia/Home.aDNA Production-Tidy P7) and **launch prep
(runbook §2 steps 1-6) is DONE and GREEN, commit-only**: vault data regenerated off the 54-vault inventory
(`npm run sync:vaults` + `sync:install`), keeper-set names verified CLEAN on all surfaces, the overlay
edge-regression fixed (`network_edges.yaml` rename cascade → **14 edges**), build **177 pages / 0 err** (new
baseline, was 163), gates **281/281** incl @audit. On operator GO, run
`how/campaigns/campaign_operation_adna/dp2_keystone_launch_runbook.md` **§2 steps 7-13**: `vercel --prebuilt
--prod` (VERCEL_TOKEN from SS_VERCEL_TOKEN, redact) → on-live cold-3sec Lighthouse verdict → live-site verify
(keeper-set names, proof-links 200-unauth, `/llms.txt`) → **authorized push** `git push origin main`
(carries the accumulated commit-only work incl. peer `f35bbbc`; confirm with operator what ships) +
standing-watch `GH_TOKEN="$(gh auth token)" gh run watch` → close DP2 in records (coordination_ledger,
campaign_operation_adna §Decision Points, STATE). Gotchas (runbook §4): `npx astro build` not `npm run build`;
probe `lsof -nP -iTCP:4321 -sTCP:LISTEN` before gates (a sibling vault's `astro dev` hijacks via
`reuseExistingServer:true`); don't co-run Lighthouse with the gate preview server. `main` is ahead of origin
(commit-only); shared tree takes concurrent peer commits — `git fetch` + FF-verify before push, stage own
files by explicit path. The Home inventory dup-key fix is committed in Home.aDNA's repo (coord memo to
Hestia filed); a concurrent Hestia `pt20_close` session is wrapping Production Tidy.
