---
type: mission
mission_id: mission_fleet_reseed_p1_router_inventory
campaign: campaign_fleet_reseed
title: "P1 (W1) — router resync + Home-inventory refresh (closes F3 + F6)"
created: 2026-07-03
updated: 2026-07-03
status: completed
last_edited_by: agent_rosetta
persona: hestia   # owner lead (node/inventory leg); Rosetta co-executes the router-resync leg
co_persona: rosetta
token_budget_estimated: "50–80 kT (inventory refresh reads ~70 vault CHANGELOGs + regenerates canvas/cards/HOME counts; router table edit; mission authoring + close)"
tags: [mission, fleet_reseed, p1, w1, router, inventory, hestia, rosetta, f3, f6]
---

# Mission P1 (W1) — Router Resync + Home-Inventory Refresh

> The cheap, mechanical first wave of Fleet Re-Seed. Closes **F3** (router gaps + BusinessIntelligence→Dashboards
> rename residue) and **F6** (Home inventory drift). Hestia-led (node/inventory); Rosetta co-executes the router edit.
> Ratified to open at the **P0 gate** (2026-07-03, split-depth · held). Refresh ground truth FIRST — state drifts.

## Objectives
1. **Refresh the Home inventory to disk truth (closes F6).** Run `Home.aDNA/how/skills/skill_inventory_refresh.md`
   as Hestia. Reconcile the recorded `vault_count: 66` (2026-06-30) against the current disk truth (70 real
   non-symlink `*.aDNA` dirs). Detect + classify NEW vaults (`APScheduler`, `Prefect`, `Dashboards`, `Regenesis`,
   the web-stack cohort, …), REMOVED, and VERSION_DRIFT.
2. **Regenerate the inventory-derived surfaces.** Per skill Steps 9.5/9.6 (with `python`, not `python3`):
   retarget `topology_relationships.yaml` for the **BusinessIntelligence.aDNA → Dashboards.aDNA rename drift**,
   rebuild the Dashboards curation card + delete the orphaned BusinessIntelligence card, rebuild `topology.canvas`
   (count drift from the new vaults), and rebuild the `HOME.md` band-chip counts. `--check` clean.
3. **Resync the workspace router (closes F3).** Reconcile `~/aDNA/CLAUDE.md` Project Discovery + Workspace Layout
   against the refreshed `inventory_vaults.yaml` (Standing Rule 7 — routing identity only). Fix the
   BusinessIntelligence→Dashboards residue; add missing Tier-A/promoted rows; carry genesis-stub cohorts as
   grouped light-touch rows (not one row per stub).
4. **Per-vault close.** Home.aDNA commit LOCAL-ONLY (Rule 4, explicit paths); router edit audited via this mission
   (root is not a git repo); mission AAR + SITREP; campaign phase row P1→done / P2→next. aDNA.aDNA push operator-gated.

## Method
Ordered, persona-scoped, one-vault-at-a-time. **Inventory refresh is authoritative for classifications** — router
rows are authored *from* the refreshed inventory, not hand-guessed. Disk-vs-router diff at session open:

- **On disk, no router row** (23): `APScheduler, Prefect, D3, Dashboards, DataRoom, Datasets, MagnaPetra, React,
  Regenesis, Store, Tailwind, ThreeJS, Vercel` + the 10 Keystone-cohort stubs (already covered by the cohort row)
  + `WGS` (named-project quarry, intentionally uncounted).
- **Rename residue to fix**: `BusinessIntelligence.aDNA` (now a shim → `Dashboards.aDNA`) still listed as the real
  vault. Archived/merged `→`-arrow rows (CanvasForge, ComfyForge, LatticeLabs, LPWhitepaper, RareHarnessOld, …) are
  correct — leave them.

**Guardrails** (campaign Standing Orders): per-vault `git pull` + read host CLAUDE.md/STATE.md before any touch;
never cross-vault bulk-commit; Home.aDNA local-only (Rule 4); explicit-path staging (leave the 3 untracked Berthier
memos in Home.aDNA); genesis-stub restraint (Tier-B = router + inventory only); stay in W1's lane (no W2 wrapper
renames, no W3 git-remotes).

## Decisions (applied at plan gate 2026-07-03, operator-approved)
1. Genesis-stub cohorts → grouped light-touch router rows (web-stack; orchestration), not individual rows.
2. `APScheduler` + `Prefect` (net-new since the P0 scorecard) are included as light-touch stubs + flagged for
   classification — W1's job is to reconcile drift.
3. Router change is not git-committed at the root (root isn't a repo); audited via this mission record.

## Deliverables
- Refreshed `Home.aDNA/what/inventory/inventory_vaults.{md,yaml}` + `inventory_system.{md,yaml}`.
- Regenerated `Home.aDNA/what/canvas/{topology.canvas, topology_relationships.yaml}` + Dashboards curation card
  (− BusinessIntelligence card) + `HOME.md` band-chips + Home `STATE.md` counts.
- Resynced `~/aDNA/CLAUDE.md` (F3 closed).
- This mission's AAR + the session SITREP; campaign phase row updated.

## AAR (Worked / Didn't / Finding / Change / Follow-up)
- **Worked:** "refresh ground truth FIRST" paid off immediately — the disk-vs-inventory diff caught **2 net-new vaults** (APScheduler/Prefect, not in the P0 scorecard) **+ a second rename residue** (Websites→WebForge) the audit missed. Surgical diff-and-patch (not a lossy full rebuild) preserved the 903-line inventory's rich per-vault metadata. The canvas rebuild finally executed the long-deferred "→ pt19" derived regen (94→108 nodes) — a currency win, not churn (both pretty-printed; +14 nodes / 0 removed).
- **Didn't:** the full **D10 `skill_node_health_check` was NOT run** (deferred as planned — W1 is inventory+router only; it stays the documented cross-check follow-up). `inventory_system` (tool/machine) left as-is — refreshed 2026-07-02, no material 1-day drift.
- **Finding:** rename-residue is **pervasive across three surfaces**, not just federation wrappers — router (BI→Dashboards active; Websites→WebForge already fixed router-side but not inventory-side) **+ an unregistered §C shim** (Websites→WebForge, an SR-9 S13-class gap the pass caught + back-registered). Previews the F4/W2 target: `topology_relationships.yaml` still carries stale forge-name edges (MoleculeForge/ComfyForge/SiteForge/SpeechForge).
- **Change:** used **grouped light-touch cohort rows** (web-stack · orchestration · domain stubs) instead of individual rows — honors Standing Rule 7 anti-bloat + the ratified genesis-stub-light-touch posture + the router's own "full rows land at each graph's genesis" convention. No re-bloat.
- **Follow-up:** **W2** (federation-wrapper rename-residue sweep) is next — gate-pending (operator). Courtesy heads-up to **Berthier** (the router is his routing surface, per Home CLAUDE.md). Full health-check remains the deferred cross-check. Home.aDNA committed local-only (`93310e1`, Rule 4); aDNA.aDNA push operator-gated.

**Token budget:** est. 50–80 kT · actual ≈ mid-range (surgical edits + 2 generator runs; no full-file rebuilds). Within band.
