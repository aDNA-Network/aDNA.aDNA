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
2. **[SUB-GATE] Ratify the execution model + 2 design rulings** (operator). — ✅ **RATIFIED 2026-07-03:**
   (A) execution model = **HYBRID** · (B) Canvas convention = **B2 `canvas_<capability>/`** · (C) literatureforge =
   **DELETE both**. The sweep (Objectives 3–5) is now unblocked (CakeHealth still pending Berthier's co-sign).
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

## Decisions — RATIFIED at the sub-gate (2026-07-03)
- **A — execution model = HYBRID.** Rosetta+Hestia directly sweep the 3 low-sensitivity infra/co-owned vaults
  (Home [Hestia, local-only], Astro, ContextCommons); the 5 persona/brand/org vaults (ScienceStanley, Videos,
  ZenZachary, PercySleep, CakeHealth) land via co-signed memo/dispatch (Standing Order 3 / Rule 10). CakeHealth
  (Berthier) + PercySleep (Hypnos) are the most Rule-10-sensitive; the CakeHealth co-sign memo is already sent.
- **B — Canvas N→1 convention = B2 `canvas_<capability>/`.** Rename the 9 Canvas-federating wrappers to
  capability-scoped names under the merged producer, confirming each capability from its `source_lattice` at sweep
  time: **`canvasforge → canvas`** (generic/base) · **`graphicnovelforge → canvas_comic`** (lattice_comic_canvas) ·
  **`presentationforge → canvas_deck`** (lattice_presentation_canvas). No collisions (ZenZachary: canvas +
  canvas_comic + canvas_deck; ScienceStanley: canvas_comic + canvas_deck). Codifies the merged-producer wrapper
  convention — flag to Rosetta's upstream lane + Mondrian (worth an ADR/spec note in `spec_forge_ecosystem`).
- **C — literatureforge = DELETE both** (ScienceStanley, ZenZachary). Dead producer (LiteratureForge wound down →
  Archive 2026-06-08), never went live; the writing capability is a Canvas *scavenge quarry*, not a live producer.

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

## Execution log — W2 sweep session 1 (2026-07-04)
**Push:** aDNA.aDNA W2 commits (`d25ce20`+`1473a5a`) pushed `857f083..1473a5a` → origin (gitleaks clean). A concurrent
Berthier memo `2893834` (Jupyter elevation, "Local, no push") had landed on top → **excluded** from the push (pushed
`1473a5a:main`, not HEAD); stays local per its annotation.

**Hybrid-direct sweep:**
- **Home.aDNA ✅** (`a5c2dab`, local-only per Rule 4): `siteforge→astro` · `canvasforge→canvas`. No root symlinks.
  Live-routing self-refs + the 3 CLAUDE.md ISS-skill rows updated; historical (`campaign_siteforge_iss`, ADR-004
  placement, CanvasForge merge narration) KEPT per §6.5.
- **Astro.aDNA — SKIPPED (disposition correction).** Both wrappers carry `FROZEN.md` ("Do not edit") — **Operation
  Atelier** carve-outs (2026-06-25): canonical already at `WebForge.aDNA/{canvas,comfyui}/`, these frozen duplicates
  scheduled for deletion at that campaign's "Campaign A" (ledger `Astro.aDNA/how/migrations/freeze_ledger_websites_carve.md`).
  **F4 residue here is already owned by Operation Atelier → defer; do not rename/delete.** (Astro also has NO root
  symlinks — pre-flight was wrong.)
- **ContextCommons.aDNA ✅** (`d8538a3`, local, unpushed): `moleculeforge→molecules` · `videoforge→videos` ·
  `websites→webforge` (+content fix `source_vault: Websites.aDNA→WebForge.aDNA` ×2) · `presentationforge→canvas_deck`
  (B2; lattice internal paths repointed to `canvas_deck/what/context/`). No root symlinks / no `siteforge` alias
  (pre-flight was wrong on both). Not frozen. Self-ID + functional refs fixed; historical/upstream KEPT
  (`MoleculeForge.aDNA`, `moleculeforge_siteforge_p4` adapter, `Videos.aDNA/videoforge/` upstream code path, other
  vaults' not-yet-renamed `moleculeforge/` wrappers). **Follow-on (non-breaking): descriptive sibling-list prose +
  footer cross-refs currency in `molecules/CLAUDE.md`.**

**Process learning:** the Explore pre-flight was **unreliable on mechanics** — it claimed 6 root symlinks (Astro 2 +
CC 4) + a CC `siteforge→websites` alias (actual = 0 across the board) and **missed Astro's FROZEN.md**. Direct
per-vault verification (SO1 patience) caught both. Trust filesystem probes over agent-summarized mechanics.

**Deferred to W2-close (next session):** persona-vault dispatch memos (ScienceStanley/Videos/ZenZachary/PercySleep;
CakeHealth already memo'd) — **each must FROZEN-check its wrappers first** (Astro lesson) · literatureforge deletes ·
Home-side topology close (`build_topology_canvas.py` dict + `topology_relationships.yaml` + regen) · CC descriptive
follow-on · mission AAR. Sweep commits (Home `a5c2dab`, CC `d8538a3`) + this session's aDNA.aDNA doc commit + Berthier
`2893834` all UNPUSHED.

## Execution log — W2 sweep session 2 (2026-07-04) — direct persona sweeps
Operator ratified **direct-sweep** of the persona vaults (override of Hybrid memo-dispatch).

**Swept + PUSHED (3):**
- **Videos.aDNA** ✅ `d634a96` → Codeberg: `presentationforge→canvas_deck` (B2); root symlink repointed.
- **PercySleep.aDNA** ✅ `c33c693` → GitHub (master): `tappinterface→tappprotocol` · `taskforge→operations`. KEPT the
  `taskforge-bridge` / `skill_taskforge_setup.md` / `taskforge-deploy.md` names (stay until Operations Layer 2) +
  MANIFEST Oneiros narrative; descriptive `TaskForge.aDNA` producer-prose = follow-on.
- **ZenZachary.aDNA** ✅ `97840a4` → GitHub: 6 renames (`canvasforge→canvas`, `comfyforge→comfyui`,
  `graphicnovelforge→canvas_comic`, `presentationforge→canvas_deck`, `speechforge→oration`, `videoforge→videos`) +
  **`literatureforge` DELETED**; in-vault sibling cross-refs = follow-on. Complements the vault's own C1
  `siteforge→webforge` (`38c91b4`).
- (ContextCommons `d8538a3` from session 1 also pushed to GitHub.)

**Deferred (3 tails — W2 NOT fully closed):**
- **ScienceStanley — SKIPPED (SO1 concurrent-work).** Its `dev` branch is **diverged + actively worked**: local
  `36b6cfa` already renamed its own `siteforge→webforge` (SS is self-handling F4) + `55241b2` web-canon (Slipway A2);
  13 unpushed / 4 behind. Sweeping would collide + can't FF-push. **Defer to SS's own session/owner.**
- **CakeHealth — DEFERRED** (Berthier ack; `tappinterface→tappprotocol`; heads-up memo already sent).
- **Home-side topology close — DEFERRED** (budget; cleanest run once, after SS + CakeHealth land): update
  `build_topology_canvas.py` dirname→vault dict + prune `topology_relationships.yaml` + regen `topology.canvas` (local-only).

**Process learning (reinforced):** verify per-vault on disk — recon flaked repeatedly on symlinks (Videos symlink grep
returned empty, then confirmed present); the SO1 divergence-check caught SS's active concurrent work **before** a collision.

**W2 status: SUBSTANTIALLY COMPLETE** — swept 5/8 real F4 vaults (Home · ContextCommons · Videos · PercySleep ·
ZenZachary) + literatureforge deleted (ZenZachary; SS's pending); Astro = Operation-Atelier-owned (defer). Tail = SS
(concurrent-work) + CakeHealth (Berthier) + Home-topology. **Mission stays `active`** — final AAR + scorecard F4 close
+ phase P2→P3 fire when the tail lands.

## AAR (Worked / Didn't / Finding / Change / Follow-up)
*Fill at `status: completed` (mandatory AAR per Standing Order #5) — after the SS/CakeHealth/Home-topology tail.
Token budget: est. ≈180–250 kT · actual TBD (W2 spans sessions).*
