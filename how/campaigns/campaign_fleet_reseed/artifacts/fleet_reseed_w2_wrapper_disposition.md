---
type: artifact
artifact_class: disposition_table
campaign: campaign_fleet_reseed
mission: mission_fleet_reseed_p2_wrapper_residue
created: 2026-07-03
updated: 2026-07-03
status: active
last_edited_by: agent_rosetta
tags: [artifact, disposition, fleet_reseed, w2, p2, federation, wrapper, rename_residue, f4, read_only]
---

# Fleet Re-Seed W2 — Federation-Wrapper Disposition Table

**Read-only triage, 2026-07-03.** Ground truth from disk (`~/aDNA/<vault>.aDNA/how/federation/*`) + a `source_vault:`
grep across every flagged wrapper. **No vault was modified.** Closes Objective 1 of
`mission_fleet_reseed_p2_wrapper_residue`; feeds the sub-gate.

## Headline corrections to the P0 scorecard
- **Scope: 25 stale-named wrapper dirs across 8 vaults** (P0 said "≥10 vaults" — WebForge cleared).
- **WebForge = FALSE POSITIVE.** Its 13 wrappers (`astro canvas comfyui d3 feedback git iii react tailwind threejs
  typescript vercel visualdna`) are **all current-named** — a freshly-renamed composer-forge built clean. **0 F4 debt.**
- **ZenZachary's 7 confirmed:** canvasforge, comfyforge, graphicnovelforge, literatureforge, presentationforge,
  speechforge, videoforge.
- **The residue is the DIRECTORY NAME, not the content.** 22/25 wrappers already carry a current `source_vault:`
  (fleet re-federation landed 2026-04-29 M-R1-01b for Canvas + at each rename date). Only 3 have a deeper issue.

## Disposition classes
| Class | Meaning | Count | Work |
|---|---|---|---|
| **A** | 1:1 rename — unambiguous single producer; content already current | 14 | `git mv` + root-symlink fix + self-ref fix; per-vault commit |
| **B** | N→1 Canvas merge — federates `Canvas.aDNA`; target name pending convention ruling | 9 | rename per **ruling B** (B1 consolidate / B2 `canvas_<cap>/` / B3 leave) |
| **C** | dead producer — `LiteratureForge.aDNA` wound down → Archive; wrapper never went live | 2 | **delete** (rec.) or repoint-to-Canvas-quarry per **ruling C** |

## Per-wrapper table
| Vault | Wrapper dir | `source_vault:` (content) | Content status | Producer now | Class | Disposition |
|---|---|---|---|---|---|---|
| Astro | `comfyforge` | ComfyUI.aDNA | ✅ current | ComfyUI.aDNA | A | → `comfyui` |
| Astro | `canvasforge` | Canvas.aDNA | ✅ current | Canvas.aDNA | B | per ruling B |
| CakeHealth | `tappinterface` | TappProtocol.aDNA | ✅ current | TappProtocol.aDNA | A | → `tappprotocol` |
| ContextCommons | `moleculeforge` | Molecules.aDNA | ✅ current | Molecules.aDNA | A | → `molecules` |
| ContextCommons | `videoforge` | Videos.aDNA | ✅ current | Videos.aDNA | A | → `videos` |
| ContextCommons | `websites` | **Websites.aDNA** | ❌ **stale** | WebForge.aDNA | A | → `webforge` **+ content fix** |
| ContextCommons | `presentationforge` | Canvas.aDNA | ✅ current | Canvas.aDNA | B | per ruling B |
| Home | `siteforge` | Astro.aDNA | ✅ current | Astro.aDNA | A | → `astro` (commit **local-only**, Rule 4) |
| Home | `canvasforge` | Canvas.aDNA | ✅ current | Canvas.aDNA | B | per ruling B (local-only) |
| PercySleep | `tappinterface` | TappProtocol.aDNA | ✅ current | TappProtocol.aDNA | A | → `tappprotocol` |
| PercySleep | `taskforge` | Operations.aDNA | ✅ current | Operations.aDNA | A | → `operations` |
| ScienceStanley | `moleculeforge` | Molecules.aDNA | ✅ current | Molecules.aDNA | A | → `molecules` |
| ScienceStanley | `speechforge` | Oration.aDNA | ✅ current | Oration.aDNA | A | → `oration` |
| ScienceStanley | `videoforge` | Videos.aDNA | ✅ current | Videos.aDNA | A | → `videos` |
| ScienceStanley | `graphicnovelforge` | Canvas.aDNA | ✅ current | Canvas.aDNA | B | per ruling B *(2→1 collision w/ presentationforge)* |
| ScienceStanley | `presentationforge` | Canvas.aDNA | ✅ current | Canvas.aDNA | B | per ruling B *(collision)* |
| ScienceStanley | `literatureforge` | LiteratureForge.aDNA | ⚠ dead producer | (wound down → Archive) | C | **delete** (rec.) |
| Videos | `presentationforge` | Canvas.aDNA | ✅ current | Canvas.aDNA | B | per ruling B |
| ZenZachary | `comfyforge` | ComfyUI.aDNA | ✅ current | ComfyUI.aDNA | A | → `comfyui` |
| ZenZachary | `speechforge` | Oration.aDNA | ✅ current | Oration.aDNA | A | → `oration` |
| ZenZachary | `videoforge` | Videos.aDNA | ✅ current | Videos.aDNA | A | → `videos` |
| ZenZachary | `canvasforge` | Canvas.aDNA | ✅ current | Canvas.aDNA | B | per ruling B *(3→1 collision)* |
| ZenZachary | `graphicnovelforge` | Canvas.aDNA | ✅ current | Canvas.aDNA | B | per ruling B *(collision)* |
| ZenZachary | `presentationforge` | Canvas.aDNA | ✅ current | Canvas.aDNA | B | per ruling B *(collision)* |
| ZenZachary | `literatureforge` | LiteratureForge.aDNA | ⚠ dead producer | (wound down → Archive) | C | **delete** (rec.) |

**Tally:** 14 A · 9 B · 2 C = **25**. Canvas-federating (B) collisions: ZenZachary (3), ScienceStanley (2).

## Per-vault ownership (for the execution-model decision — Rule 10 / Standing Order 3)
| Vault | Persona / class | Rule-10 sensitivity | Suggested execution |
|---|---|---|---|
| Home | Hestia · node vault (Rule 4 local-only) | low (campaign co-owner) | **direct** (Hestia); commit local-only |
| Astro | Forge (site-builder; no distinct persona) | low (infra) | **direct** (Rosetta) |
| ContextCommons | Community-literacy program (no distinct persona) | low (infra) | **direct** (Rosetta) |
| ScienceStanley | Content Architect · SS brand (operator's own) | medium | co-signed direct or memo |
| Videos | Iris · forge | medium | co-signed direct or memo |
| ZenZachary | Pygmalion · Zach Sekar's brand | **high** (partner person's brand) | memo / co-sign |
| PercySleep | Hypnos · Org-Graph (outside org) | **high** | memo / co-sign |
| CakeHealth | Berthier · Org-Graph, partner-clinical (private LP repo) | **high** | memo / co-sign |

*None of the 8 are external-org veto vaults (RareArchive/WilhelmAI/SuperLeague absent from F4). Standing Order 3
requires a co-signed memo for the persona/partner vaults regardless of direct-vs-dispatch.*

## Sub-gate rulings — RATIFIED 2026-07-03
- **Execution model = HYBRID** — Rosetta+Hestia sweep Home · Astro · ContextCommons directly; the 5 persona vaults
  (ScienceStanley, Videos, ZenZachary, PercySleep, CakeHealth) via co-signed memo/dispatch (CakeHealth co-sign
  already sent to Berthier).
- **Canvas convention = B2 `canvas_<capability>/`** — `canvasforge→canvas` · `graphicnovelforge→canvas_comic` ·
  `presentationforge→canvas_deck` (capability confirmed per-wrapper from `source_lattice` at sweep). No collisions.
  Codify the merged-producer convention upstream (`spec_forge_ecosystem` note; Rosetta+Mondrian).
- **literatureforge = DELETE both** (ScienceStanley, ZenZachary) — dead producer, never went live.

Sequence the Canvas-convention (B) renames alongside Class-A per vault; the ruling sets the target names.

## Sweep session-1 corrections (2026-07-04)
- **Astro = FROZEN, not a rename target.** Both Astro wrappers (`canvasforge`, `comfyforge`) carry `FROZEN.md`
  ("Do not edit") — **Operation Atelier** carve-outs (canonical already at `WebForge.aDNA/{canvas,comfyui}/`;
  deletion-scheduled at that campaign's "Campaign A"; ledger `Astro.aDNA/how/migrations/freeze_ledger_websites_carve.md`).
  **Reclassify: F4 residue here is owned by Operation Atelier → defer, do not rename/delete.** Astro's rows above are
  superseded — the effective sweep scope is **7 vaults, not 8** (Astro drops out).
- **No root symlinks anywhere.** The pre-flight claimed 6 root symlinks (Astro 2, CC 4) + a CC `siteforge→websites`
  alias; **direct verification found ZERO** across all three direct vaults. No symlink repointing was needed. Treat
  the pre-flight's symlink/FROZEN claims as unreliable — **verify on disk per vault**.
- **Persona-vault sweeps must FROZEN-check each wrapper first** (the Astro lesson) before renaming.
- **Done:** Home ✅ (`a5c2dab`, local-only) · ContextCommons ✅ (`d8538a3`, local). **Deferred:** the 5 persona vaults +
  literatureforge deletes + Home topology close.

## Execution notes (for Objectives 3–5)
- Each rename may have a **paired root-level back-compat symlink** (`<vault>/<old> → how/federation/<old>`, ADR-045) —
  update or remove it in the same commit; the wrapper convention keeps the symlink only during a shim window.
- **No Class-A target-name collisions detected** (e.g., ScienceStanley already has a current `webforge/` but its
  stale set doesn't include `websites`; ContextCommons has `websites` but no `webforge` yet — clean rename).
- After sweeps: prune stale forge-edges from `Home.aDNA/what/canvas/topology_relationships.yaml` + regen
  `topology.canvas` (Objective 5).
