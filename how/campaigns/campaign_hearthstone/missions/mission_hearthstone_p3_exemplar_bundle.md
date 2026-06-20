---
plan_id: mission_hearthstone_p3_exemplar_bundle
type: plan
title: "P3 M4 — Upstream template_node_adna_exemplar/ into the dev graph; finalize CanvasForge→Canvas; canvas_std prereq + Decision 3"
owner: stanley
status: in_progress
campaign_id: campaign_hearthstone
campaign_phase: 3
campaign_mission_number: 4
mission_class: implementation
status_note: "deliverables complete + verified 2026-06-19 (cross-lane Hestia session, operator-authorized 'Full M4'); status flips → completed on operator P3 exit gate (Decision 4)"
created: 2026-06-19
updated: 2026-06-19
last_edited_by: agent_rosetta
token_budget_estimated: "~40 kT (copy-in of an already-staged bundle + genericization verify + smoke render + record updates)"
token_budget_actual: "~60 kT (recon-heavy entry: 5 exploration agents + git-HEAD reconciliation; the build itself was light — a 3-edit repoint + a verified byte-identical copy-in)"
tags: [plan, campaign, hearthstone, p3, exemplar_bundle, canvasforge_canvas_repoint, canvas_std_prereq, operation_adna_track_b]
---

# Mission: P3 M4 — node exemplar bundle → dev graph (`template_node_adna_exemplar/`)

**Campaign**: [[how/campaigns/campaign_hearthstone/campaign_hearthstone|campaign_hearthstone]] (Track B under [[how/campaigns/campaign_operation_adna/campaign_operation_adna|campaign_operation_adna]])
**Phase**: 3 — Exemplar template bundle · **Mission**: 4 of ~7

> **Cross-lane execution.** This Rosetta-lane mission was executed from a `Home.aDNA`/Hestia session per the operator's **"Full M4 (cross-lane)"** authorization (the operator has been driving both lanes from this node). Vault-persona attribution kept as `agent_rosetta`; origin is recorded here and in the commit trailer.

## Goal

Upstream the polished node **exemplar bundle** (`template_node_adna_exemplar/`) from its `Home.aDNA` reference into the `aDNA.aDNA` dev graph, with the **CanvasForge→Canvas.aDNA** drift resolved, the `canvas_std` plugin prerequisite documented, and Decision 3 (ship-with-dep vs optional-degrade) framed — so the bundle is release-ready for `skill_template_release` to ship to `.adna/` at P5.

## Gate situation (entry) — both P3 gates CLEARED

P3 was charter-gated on **CanvasForge→Canvas** + **PT P5**. Both are satisfied as of session start (verified against the live files, correcting a stale "still gated" note):
- **CanvasForge→Canvas merge** ✅ — governance merge done (PT pt09, 2026-06-17); substrate path fixed by Canvas.aDNA **ADR-004** (Mondrian, 2026-06-19) + the substrate-path reply memo.
- **PT P5** ✅ — pt12–pt16 closed 2026-06-18.
- **Non-blocking nuance**: the producer code (`canvas_core`) has **not** physically landed at `Canvas.aDNA/what/production/` yet (Canvas ADR-004 still *Proposed*; only `brief_consumer/` is present). The topology generator's **fallthrough resolver** (`CANVAS_CORE_HOME` → deprecated `CANVASFORGE_CODE` → `Canvas.aDNA/what/production` *if `canvas_core/` present* → `CanvasForge.aDNA` archive) renders today from the archive and auto-flips at landing — so the not-yet-landed code is **not** a blocker.

## Exit Gate (mission-level)

- [x] Bundle copied into `aDNA.aDNA/how/templates/template_node_adna_exemplar/` (fresh copy-in; `diff -r` byte-identical to the Home reference; 32 files).
- [x] `python smoke_render.py` → **0 leftover `{{`**, every var catalogued (source + copy, exit 0).
- [x] `python smoke_render.py --parity` → skeleton parity vs the reference `HOME.md` passes (run from the Home reference; parity is reference-node-only by design).
- [x] All `canvasforge` references read as **interim-archive** (owner = Canvas.aDNA, ADR-004); the only retained `canvasforge` literals are the interim shim + the (P5-repointed) wrapper-dir name.
- [x] `canvas_std` / `adna-canvas-std` prereq documented (ADR-004 §4 silent-render trap) — README / ONBOARDING / SUBSTITUTIONS / `canvasforge/CLAUDE.md.template`.
- [x] Decision 3 framed — recommended **optional-degrade**; final ratification = operator at P3 exit.

## Guardrails

- **No `.adna/` writes** (Standing Rule 1; `.adna/` ships only at P5 via `skill_template_release`).
- **M4 scope = CanvasForge→Canvas only.** The other wrapper renames (SiteForge→Astro, ComfyForge→ComfyUI, SpeechForge→Oration, MoleculeForge→Molecules, ContextCompass→Context) are a **separate coordinated refresh (NB pt19)** — flag, do **not** fold into M4.
- **Do not touch** `Home.aDNA/what/canvas/topology.canvas` (dirty from concurrent non-Hestia work; live regen deferred).
- Surgical, per-path commits; verify HEAD before each shared-file mutation (parallel sessions are operator-intentional on this node).

## Objectives

### 1. Stage the Home-side reference — ✅ done (Home commit `2ccda9f`)
Repointed the LIVE `Home.aDNA/what/code/build_topology_canvas.py` `canvasforge → Canvas.aDNA` at parity with the bundle's already-staged copy (+ NB pt19 comment; + 2 docstring substrate renames CanvasForge→`canvas_core`). The fallthrough resolver + `canvas_std` sys.path were already staged at Home commit `4592eab` (Mondrian ADR-004). Verified via `--check`: substrate resolves (archive shim, pre-P5), `schema OK · no overlaps`, `canvasforge/` wrappers now resolve to `Canvas.aDNA`; remaining unresolved endpoints are pt19-scoped only.

### 2. Copy the bundle into the dev graph
Fresh copy `Home.aDNA/how/templates/template_node_adna_exemplar/` → `aDNA.aDNA/how/templates/template_node_adna_exemplar/`.

### 3. Verify genericization + CanvasForge references
Confirm zero site-specific leakage (bundle is `{{var}}`-parametrized); the bundled generator carries `canvasforge → Canvas.aDNA`; the `what/canvasforge/CLAUDE.md.template` + `what/canvas/AGENTS.md` + docs name Canvas.aDNA as owner with the `CanvasForge.aDNA` archive as the interim shim (ADR-004).

### 4. Document the `canvas_std` plugin prerequisite (ADR-004 §4)
`canvas_core` hard-imports `canvas_std` (a separate lib); `adna-canvas-std` must be importable or the topology canvas **silently never renders** on a fresh node. Confirm/crisp the failure-mode note in `README.md` + `SUBSTITUTIONS.md`.

### 5. Frame Decision 3 — ship-with-dep vs optional-degrade
**Recommended: optional-degrade.** The resolver already degrades cleanly — it falls through path candidates and the `ImportError` guard exits gracefully ("skip the topology canvas (optional)"). A fresh public clone has neither `Canvas.aDNA` nor the archive, so the topology canvas is skipped while the rest of the home renders. This is the correct posture for a public template. Final ratification = operator at the P3 exit gate.

### 6. Smoke-verify the upstreamed copy
Run both smoke modes from the dev-graph copy; capture output for the SITREP.

## Campaign Context

- **Previous (P2)**: shipped `template_home_claude.md` + the Step-0 router block + the `skill_project_fork` Home-class branch (dev graph).
- **Next (P4 + P5)**: P4 wires the exemplar invocation (interview theming vars + the callout-fold `>`-prefix profile in Step 9 + `--exemplar-home` overlay); P5 `skill_template_release` ships this bundle to `.adna/how/templates/template_node_adna_exemplar/` (source-map row 8).

## Notes

- **Stale-gate correction**: the node memory + a prior STATE pointer read "P3 gated on CanvasForge→Canvas + PT P5"; both cleared before this session. Recorded here so the campaign record reflects the live state.
- **Why the bundle was ~75% staged already**: prior Home-side substrate-staging sessions (Mondrian ADR-004 actioned 2026-06-19) updated the bundle's own generator copy; M4 finishes the LIVE node generator (Obj 1) + performs the dev-graph copy-in (Obj 2).

## Completion Summary

*Deliverables complete + verified 2026-06-19; mission `status` flips → `completed` on the operator P3 exit gate (Decision 4).*

### Deliverables
- LIVE `Home.aDNA/what/code/build_topology_canvas.py` — `canvasforge→Canvas.aDNA` repoint (+ NB pt19 comment + 2 docstring substrate renames `CanvasForge`→`canvas_core`); resolver + `canvas_std` sys.path already staged at `4592eab`. **Home commit `2ccda9f`.**
- `aDNA.aDNA/how/templates/template_node_adna_exemplar/` — fresh copy-in (32 files), **byte-identical** to the Home reference (`diff -r` clean).
- `mission_hearthstone_p3_exemplar_bundle.md` (this mission) · `campaign_hearthstone.md` (P3 row + banner + Decision 3 = recommended optional-degrade + Risk Register CanvasForge = resolved) · `how/templates/AGENTS.md` (new "Fork-Skeleton Bundles (1)" subsection). **aDNA commit `3d0c3f9`.**

### Descoped
- No `.adna/` writes (P5). Other wrapper renames (SiteForge→Astro · ComfyForge→ComfyUI · SpeechForge→Oration · MoleculeForge→Molecules · ContextCompass→Context) = the **pt19** coordinated refresh, deliberately out of M4.
- LIVE `Home.aDNA/what/canvas/topology.canvas` regen deferred (dirty from concurrent work; a regen after that commits will pick up both the reformat and the `canvasforge→Canvas.aDNA` edge).

### Key Findings
- **Bundle was ~75% pre-staged**: the resolver + the bundle's own generator repoint landed in prior Home substrate-staging (Mondrian ADR-004, `4592eab`). The genuine LIVE-generator delta was **3 small edits**, not the ~17 the entry recon implied (that read a pre-`4592eab` state).
- **Both P3 gates were already cleared** before this session (CanvasForge→Canvas merge pt09 + PT P5 pt12–16) — the "still gated" note in node memory/STATE was stale; corrected in the campaign record.
- **`canvas_std` prereq already crisply documented** (ADR-004 §4) — so Objective 4 was confirm-present, **no edit**, keeping the copy byte-identical to the reference (parity preserved).

## AAR

- **Worked**: diffing the LIVE generator against the already-staged bundle copy gave the exact minimal repoint scope (avoided re-doing `4592eab`'s resolver work); `smoke_render.py` + `diff -r` were objective copy-fidelity + brace gates.
- **Didn't**: the entry recon over-stated the remaining work ("LIVE generator lacks the staged resolver", ~17 refs) — it read a pre-`4592eab` snapshot; git HEAD corrected it.
- **Finding**: for a partially-staged artifact, a direct `diff` against the canonical reference beats trusting a prose recon of "what's left."
- **Change**: when a recon says "X is missing," verify against git HEAD + a direct diff before scoping edits — doubly so across concurrent sessions on this node.
- **Follow-up**: (1) operator P3 exit gate (Decision 4) + Decision 3 ratification; (2) LIVE `topology.canvas` regen once the concurrent reformat commits; (3) P4 wires `--exemplar-home` + interview theming; (4) **pt19** wrapper-rename refresh (SiteForge→Astro et al.) in both generators.
