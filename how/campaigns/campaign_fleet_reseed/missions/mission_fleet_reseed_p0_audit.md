---
type: mission
mission_id: mission_fleet_reseed_p0_audit
campaign: campaign_fleet_reseed
title: "P0 — charter + read-only fleet audit → compliance/version scorecard"
created: 2026-07-03
updated: 2026-07-03
status: completed
last_edited_by: agent_rosetta
persona: rosetta
token_budget_estimated: "< 50 kT (read-only audit + charter authoring)"
tags: [mission, fleet_reseed, p0, audit, scorecard, read_only, completed]
---

# Mission P0 — Fleet Re-Seed audit + charter

## Objectives
1. ✅ Charter the campaign (successor to `campaign_adna_v3_ecosystem_compliance`, rebased to v8.4/v8.5).
2. ✅ Read-only fleet audit across all `~/aDNA/*.aDNA` → `artifacts/fleet_reseed_scorecard.md`.
3. ✅ Tier-classify (A mature / B genesis-stub / C skip) + surface cross-cutting findings F1–F8.
4. ⏳ P0 gate — operator confirms tiers + depth + wave order (pending).

## Method
Disk-truth audit script (governance version · git-remote · clean-status · router registration · airlock · federation wrappers · unpushed-commit count) across 69 real vault dirs (15 symlinks + Archive + WGS skipped), cross-referenced with `Home.aDNA/what/inventory/inventory_vaults.yaml`. No vault modified. Raw table: `scratchpad/fleet_audit_raw.txt`.

## Deliverables
- `artifacts/fleet_reseed_scorecard.md` — the P0 scorecard (tiers + F1–F8 + recommended waves W1–W4).
- `campaign_fleet_reseed.md` + `CLAUDE.md` — charter + delegation guide.

## AAR (Worked / Didn't / Finding / Change / Follow-up)
- **Worked:** a single scripted disk-truth pass produced the whole scorecard cheaply (read-only, no context bloat from 69 CLAUDE.mds); reused Hestia's existing inventory rather than rebuilding discovery.
- **Didn't:** the "~19 vaults" framing was stale — disk shows **69** (inventory itself drifted to 66); the full `skill_node_health_check` (23k) was **not** run this pass (deferred to P1-entry cross-check; disk audit covers its core dimensions).
- **Finding:** the fleet is far more fragmented than the routing assumed — **no vault at v8.x**, a **v6→v8 migration-script gap**, pervasive stale-named federation wrappers (rename residue), and the standard's **own vault self-drifted to gov v6.0**. Compliance-conformance and governance-version-adoption are genuinely different-effort problems and should gate separately.
- **Change:** split the campaign into cheap-mechanical waves (router/inventory, rename-residue, git-hygiene) vs. an expensive, separately-gated governance-doctrine wave — don't bundle them.
- **Follow-up:** P0 gate (5 decisions) → P1 (W1 router+inventory, Hestia). Fix aDNA.aDNA self-drift first at W4 (dogfood).
