---
type: mission
mission_id: mission_fleet_reseed_p2_wrapper_residue
campaign: campaign_fleet_reseed
title: "P2 (W2) — federation-wrapper rename-residue sweep (closes F4)"
created: 2026-07-03
updated: 2026-07-03
status: active   # Objective 1 (triage) COMPLETE 2026-07-03; sub-gate pending (execution model + 2 design rulings) — do not auto-advance to the sweep
last_edited_by: agent_rosetta
persona: rosetta   # owner lead (standard/federation-currency leg); per-vault sweeps adopt the host vault's persona (guest visits)
co_persona: hestia   # node/inventory leg + Home-side topology close
token_budget_estimated: "≈180–250 kT across ~3 sessions (spans the 80–200 / ≥200 band). Triage session (this one) ≈ 60–90 kT (enumerate + read/grep ~25 wrappers, author mission+artifact+memo). 1:1 rename sweep ≈ 80–100 kT over ~2 sessions (8 vaults, per-vault commit). Canvas N→1 convention + literatureforge disposition + Home-side topology close + AAR ≈ 50–70 kT."
tags: [mission, fleet_reseed, p2, w2, federation, wrapper, rename_residue, f4, f8, rosetta, hestia, berthier]
---

# Mission P2 (W2) — Federation-Wrapper Rename-Residue Sweep

> The real defect wave of Fleet Re-Seed. Closes **F4** (stale-named `how/federation/<oldname>/` wrapper directories
> = Berthier's "OBE rename-residue" defect class, F8). Rosetta-led (standard/federation-currency); per-vault sweeps
> are guest visits governed by the host vault's CLAUDE.md + persona. Ratified to open at the **P0 gate** (2026-07-03,
> split-depth). **Triage-first** (operator, 2026-07-03): Objective 1 is read-only and commits to nothing irreversible;
> the execution model + two design rulings are chosen at the post-triage **sub-gate**.

## Objectives
1. **Audit + triage the fleet's federation wrappers (read-only). — ✅ COMPLETE 2026-07-03.** Enumerate every
   `how/federation/*` wrapper across the F4-flagged vaults; grep `source_vault:` to separate dir-name residue from
   content residue; classify **keep / rename / delete**; resolve the unconfirmed counts + producer mappings. Output:
   `artifacts/fleet_reseed_w2_wrapper_disposition.md` (the disposition table). **Findings summarized in §Triage below.**
2. **[SUB-GATE] Ratify the execution model + 2 design rulings** (operator). Execution model: direct central sweep /
   coord-memo dispatch / hybrid. Design ruling B: the Canvas N→1 naming convention. Design ruling C: literatureforge
   delete-vs-repoint. **The sweep (Objectives 3–5) does not start until this gate clears.**
3. **Sweep Class-A wrappers (1:1 rename).** Per host vault, one vault at a time: `git mv how/federation/<old> <new>`,
   fix the paired root back-compat symlink (ADR-045), fix any content self-references to the old dir name, **one
   per-vault commit**. Class-A names (unambiguous): `comfyforge→comfyui · moleculeforge→molecules · videoforge→videos
   · speechforge→oration · siteforge→astro · tappinterface→tappprotocol · taskforge→operations · websites→webforge`
   (websites also needs the `source_vault: Websites.aDNA → WebForge.aDNA` content fix).
4. **Sweep Class-B (Canvas N→1) per the ruling** + **Class-C (literatureforge) per the ruling.**
5. **Home-side topology close.** After the sweeps land, prune the stale forge-name edges from
   `Home.aDNA/what/canvas/topology_relationships.yaml` (federation block: siteforge/canvasforge/comfyforge/
   speechforge/moleculeforge/literatureforge) and regenerate `topology.canvas`; confirm counts move only by the
   removed stale edges. Home commit **local-only** (Rule 4).
6. **Close.** Mission AAR (Standing Order #5) + token estimate-vs-actual (Rule 11); scorecard F4 row → closed;
   campaign phase row P2→done / P3→next.

## Triage (Objective 1 result — 2026-07-03)
Ground truth from disk (`how/federation/*` across the flagged vaults) + `source_vault:` grep. Full table:
`artifacts/fleet_reseed_w2_wrapper_disposition.md`.

- **Scope corrected: 25 stale-named wrapper dirs across 8 vaults** (not ≥10). **WebForge is a FALSE POSITIVE** — its
  13 wrappers (astro/canvas/comfyui/d3/react/tailwind/threejs/typescript/vercel/visualdna/feedback/git/iii) are **all
  current-named** (fresh composer-forge, built clean). ZenZachary's 7 confirmed.
- **The residue is overwhelmingly the DIRECTORY NAME, not the content.** 22/25 wrappers already carry a current
  `source_vault:` (the fleet re-federation happened 2026-04-29 M-R1-01b for Canvas + at each rename). So Class-A is a
  near-mechanical `git mv` + symlink + self-ref fix, **not** a content rewrite.
- **3 exceptions:** (1) `ContextCommons/websites` still points to `Websites.aDNA` (content fix + rename → webforge);
  (2)+(3) `literatureforge` ×2 (SS, ZenZachary) point to the **wound-down** `LiteratureForge.aDNA` (→ Archive
  2026-06-08; both wrappers forward-looking, never went live) → **delete-or-repoint** (Class C).
- **The N→1 Canvas collision (Class B) is the one non-mechanical part:** `canvasforge` + `graphicnovelforge` +
  `presentationforge` all now federate **Canvas.aDNA** (via different lattices — canvas/comic/presentation). Renaming
  all to `canvas/` collides within ZenZachary (3→1) and ScienceStanley (2→1). Needs a convention ruling.

## Decisions pending (surfaced at the sub-gate)
- **A — execution model.** Recommend **hybrid**: Rosetta+Hestia sweep the infra/co-owned vaults directly (Home
  [Hestia, local-only], Astro, ContextCommons); persona-brand/org vaults (ScienceStanley, ZenZachary, Videos,
  PercySleep, CakeHealth) get a co-signed direct sweep or a coord-memo dispatch per the host persona (Rule 10 /
  Standing Order 3). CakeHealth (Berthier, partner-clinical) + PercySleep (Hypnos, Org-Graph) are the most
  Rule-10-sensitive.
- **B — Canvas N→1 naming convention.** Options: **(B1)** consolidate to a single `canvas/` wrapper per vault with
  multi-lattice refs (cleanest per ADR-045 `<producer>` convention; but merges distinct capability governance —
  comic vs deck standing orders); **(B2)** capability-scoped `canvas_comic/` · `canvas_deck/` (preserves scoping,
  non-standard); **(B3)** leave as documented exception (works today; contradicts F4). This is a Rosetta (standard) +
  Mondrian (Canvas producer) ruling. *Rosetta lean: B2 — preserves the rich per-capability governance, current
  content already points to Canvas.aDNA; codify `canvas_<capability>/` as the merged-producer wrapper convention.*
- **C — literatureforge disposition.** Recommend **delete** (both wrappers never went live; producer wound down; the
  writing capability is a Canvas *scavenge quarry*, not a live producer). Repoint-to-Canvas only if SS/ZenZachary
  declare an active writing-composition need — a consumer decision, deferrable.

## Method / Guardrails (campaign Standing Orders)
Per-vault `git pull` + read host CLAUDE.md/STATE.md/coordination before any touch. **Never cross-vault bulk-commit**
— one per-vault commit per vault. Home.aDNA local-only (Rule 4), explicit-path staging. Co-sign cross-graph memos for
persona/partner vaults (Standing Order 3, workspace Rule 10). Genesis-stub restraint (n/a here — all 8 are Tier-A).
External-org veto: none of the 8 are external-org (RareArchive/WilhelmAI/SuperLeague absent from F4). Node hygiene:
`pgrep -x git` before any lock touch; verify tool output before a delete; `GIT_OPTIONAL_LOCKS=0` on sandboxed reads.

## Deliverables
- ✅ `artifacts/fleet_reseed_w2_wrapper_disposition.md` (per-wrapper disposition table).
- ✅ `who/coordination/coord_2026_07_03_rosetta_to_berthier_w2_wrapper_residue_headsup.md` (Berthier F4/F8 heads-up).
- Per-vault rename commits (Objectives 3–4, post-sub-gate); Home-side topology regen (Objective 5, local-only).
- Mission AAR + SITREP; scorecard F4 row closed; campaign phase row P2→done.

## AAR (Worked / Didn't / Finding / Change / Follow-up)
*Fill at `status: completed` (mandatory AAR per Standing Order #5). Token budget: est. ≈180–250 kT · actual TBD.*
