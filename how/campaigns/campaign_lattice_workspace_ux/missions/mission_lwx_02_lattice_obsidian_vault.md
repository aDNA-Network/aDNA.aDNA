---
type: mission
mission_id: mission_lwx_02_lattice_obsidian_vault
campaign: campaign_lattice_workspace_ux
campaign_phase: 1
status: completed
mission_class: implementation
created: 2026-05-12
updated: 2026-05-12
last_edited_by: agent_stanley
opened_at: 2026-05-12T22:18:33Z  # opened at operator discretion (mini-campaign open) under reframed Option C scope
opens_session: session_stanley_20260512_221833_mlwx02_s1
closed_at: 2026-05-12T22:35:00Z  # single-session execution
closed_session: session_stanley_20260512_221833_mlwx02_s1
sessions_actual: 1  # matched lower-bound estimate (estimated_sessions: "1-2"); single-session shape per M02 + M04b precedent
spec_completeness: complete  # full Read/Produce blocks authored under Option C scope at this session per M02/M04/M04b first-execution-session pattern
estimated_sessions: "1-2"  # S1: governance flips + HOME.md + workspace.json + ADR-001 + README; actual: 1 session
scope_reframe:
  from: "~/aDNA/ as outer Obsidian vault (5 .obsidian/ config files + HOME.md + .obsidianignore at workspace root + Step 0.5 in workspace router) per M04b Obj 3 spec"
  to: "node.aDNA/ role expansion as integrated lattice-home Obsidian vault (HOME.md + workspace.json + ADR-001 + README section); no ~/aDNA/ mutations; no rename"
  rationale: "Operator architectural review during plan-mode (5-option analysis converged on Option C). Eliminates vault-in-vault problem, keeps ~/aDNA/ clean, preserves scope-based naming pattern across the ecosystem, and reduces deliverables 8→5."
  plan_file: /Users/stanley/.claude/plans/please-read-the-claude-md-composed-wigderson.md
prerequisite_missions: []  # parallel-eligible with M-LWX-01; M04b close is the only upstream gate
prerequisite_artifacts:
  - m04b_obj3_lattice_obsidian_vault_spec.md  # the Obsidian-vault setup spec; reframed under Option C (HOME.md/Bases content sketches still authoritative; placement moves from ~/aDNA/ to node.aDNA/)
prerequisite_adrs:
  - adr_005_three_way_vault_boundary  # accepted; vault-in-vault discipline becomes moot under Option C (sibling .aDNA/ vaults aren't nested inside any outer vault)
  - adr_007_outer_adna_claude_md_disposition  # accepted; workspace CLAUDE.md untouched this mission (no Step 0.5 needed under Option C)
ships_to: mission_lwx_03_integration_test_and_closeout
parallel_eligible_with: mission_lwx_01_dynamic_bootstrap_interview
d5_disposition: local  # all M-LWX-02 outputs land inside node.aDNA/; nothing upstreamed
external_dependencies:
  - node.aDNA/ (target of HOME.md + workspace.json + ADR-001 + README section authoring)
  - node.aDNA/what/inventory/inventory_vaults.yaml (read-only data source for HOME.md gallery; intra-vault relative path)
  - node.aDNA/MANIFEST.md (read-only; hostname/operator/persona fill HOME.md header)
  - Obsidian app (operator's installation; confirms Bases schema against installed version; Tokyo Night + Rebecca Purple theme already configured)
tags: [mission, in_progress, lwx_02, node_vault_role_expansion, integrated_home_vault, option_c, no_rename, home_md, gallery, bases, marketplace_link, local_d5, m_lwx_02, adr_001]
---

# Mission M-LWX-02 — `node.aDNA/` Role Expansion as Integrated Lattice-Home Obsidian Vault (Option C, no rename)

**Phase**: P1 — Implementation. M-LWX-02 implements the *intent* of the
Obsidian-vault setup spec authored at v2 M04b Obj 3
([[../../campaign_adna_v2_infrastructure/missions/artifacts/m04b_obj3_lattice_obsidian_vault_spec.md|`m04b_obj3_lattice_obsidian_vault_spec.md`]])
— gallery, marketplace link, Bases-or-fallback, default-open file — but reframes
the placement from outer workspace vault (`~/aDNA/`) to additive role
expansion of the existing per-node operational vault (`node.aDNA/`). All
outputs land **local** to `node.aDNA/` (vault-scope, not workspace-scope, not
template-scope).

**Class**: implementation. Independent of M-LWX-01 (upstream vs. local; no shared
files); parallel-eligible.

> **Scope reframed 2026-05-12T22:18Z+** under Option C (no rename) per operator
> architectural review during plan-mode (5-option analysis converged on Option C
> + reasoned rejection of `node.aDNA/` → `home.aDNA/` rename). The original
> M04b Obj 3 spec stays the design input for HOME.md content + gallery shape;
> placement moves from `~/aDNA/` (outer workspace vault) to `node.aDNA/`
> (additive role expansion of the existing per-node operational vault).
> See plan at `/Users/stanley/.claude/plans/please-read-the-claude-md-composed-wigderson.md`.

---

## Strategic Intent

`node.aDNA/` already has its own `.obsidian/` (inherited from `.adna/` template
fork at HEAD `6282680`, with Tokyo Night theme + Rebecca Purple accent + 15
community plugins + 10 Templater folder mappings + 2 CSS snippet bundles + a
`workspace.default.json` referencing `Home.md`). It is *already* an Obsidian
vault when opened directly. M-LWX-02's job under Option C is to **expand its
role**: add a HOME.md gallery at vault root (reading
`./what/inventory/inventory_vaults.yaml` as a same-vault relative path),
promote the default workspace state to open HOME.md on launch, document the
role expansion in `adr_001_node_vault_role_expansion.md` (the first node-scope
ADR), and add a short README section explaining the Obsidian-opening
workflow.

`~/aDNA/` stays untouched. Sibling `.aDNA/` vaults open as separate vaults
when the operator needs to do project work there. No outer-workspace-vault
layer is created; the vault-in-vault problem is avoided by not having an outer
vault at all.

---

## Hard constraints

- **No rename**: `node.aDNA/` stays named `node.aDNA/`. ADR-001 captures the rationale (scope-based naming consistency across the ecosystem + multi-node future).
- **No `~/aDNA/` mutations**: no `.obsidian/` at workspace root; no `HOME.md` at workspace root; no `.obsidianignore` at workspace root; no Step 0.5 added to `/Users/stanley/aDNA/CLAUDE.md`.
- **No upstream `.adna/` mutations**: HEAD `e3b3bcc` stands; no graceful fallback needed.
- **No partner-vault touches**: sibling `.aDNA/` vaults retain their own Obsidian configs untouched.
- **No M04 / M04b output mutation**: `node.aDNA/{CLAUDE,MANIFEST,STATE,CHANGELOG,README,AGENTS}.md` content unchanged; M04b spec artifacts are read-only references. README.md gets one additive section (Obsidian-opening guidance); CLAUDE.md is NOT modified.
- **Node-scope ADR-001**: ADR numbering at `node.aDNA/what/decisions/` is local `adr_001+`, NOT coupled to `aDNA.aDNA/`'s `adr_009+` series. This mission produces `adr_001` for the node-vault role expansion.
- **D5 = local** to `node.aDNA/`: all outputs land inside the node vault; nothing upstreamed.
- **Bases-gallery fallback**: if Bases schema differs from the M04b Obj 3 spec illustration (Bases evolves quickly), HOME.md generates a markdown-table fallback at write time, regenerable via `skill_inventory_refresh.md`.
- **Marketplace URL placeholder OK**: if `lattice-protocol.com/marketplace` is not yet live at mission entry, the link uses a `[TBD per LP marketplace launch]` placeholder with a note.

---

## Objectives

### Obj 1 — Governance flips

Open the mini-campaign master (`phase: -1 → 1`; `status: planned → executing`).
Flip this mission file to `status: in_progress`; populate `opened_at` +
`opens_session`; record the scope reframe in frontmatter. **(Done at session
open; this objective complete by the time the spec is read.)**

### Obj 2 — Author `node.aDNA/HOME.md` (gallery at vault root)

Author per the M04b Obj 3 §2 spec adapted to intra-vault placement:

- Frontmatter (type, identity, governance link, updated)
- Header (operator + node + persona + counts)
- Context Graphs gallery — Bases block sourcing `./what/inventory/inventory_vaults.yaml` (extract `vaults`), grouped by `class`. Markdown-table fallback included statically so the gallery still renders if the operator's Obsidian build lacks Bases or schema differs.
- Named Projects gallery — Bases block sourcing same file (`named_projects` extract), grouped by `type`. Markdown-table fallback included.
- Drift section — surface the 3 drift entries from `inventory_vaults.yaml` (`strategic_interface_protocol.aDNA`, `SuperLeague.aDNA`, `adna/` stale router ref) as a small status panel so the operator sees them at a glance.
- Marketplace link — `https://lattice-protocol.com/marketplace` with `[TBD per LP marketplace launch]` note if not live.
- Tools & quick nav — links to Hestia (this vault's CLAUDE.md), Rosetta (aDNA.aDNA), Berthier (lattice-labs); skill invocation hints (health check, update all, inventory refresh, credentials audit); maintenance note (re-run `skill_inventory_refresh.md` to refresh data).

Target: ~120-160 lines including 2 Bases blocks + 2 markdown-table fallbacks + drift section + tools section.

### Obj 3 — Promote `workspace.default.json` to open HOME.md on launch

Update `node.aDNA/.obsidian/workspace.default.json` so `home-leaf` file
reference is `HOME.md` (currently `Home.md` — the actual file doesn't exist
yet at vault root). Also create a parallel `workspace.json` (gitignored
per repo `.gitignore` line 17) for this operator's current Obsidian session,
referencing HOME.md.

### Obj 4 — Author ADR-001 (node-vault role expansion)

Author `node.aDNA/what/decisions/adr_001_node_vault_role_expansion.md`:

- Status: `accepted` (ratified at this session per Standing Order #5 phase-gate; operator approved via plan-mode ExitPlanMode)
- Scope: `node`
- Decision: Expand `node.aDNA/` role to include lattice-home gallery (HOME.md) + Obsidian default workspace pointing at HOME.md, **additive** to the existing per-node operational scope (M01 Obj 3 design intent unchanged).
- Rationale:
  - Why expand the role: operator's intended UX is one integrated control plane for the lattice on this node; the per-node operational vault is the natural home for it.
  - Why NOT rename to `home.aDNA/`: scope-based naming consistency across the ecosystem (every `.aDNA/` vault in the workspace is named after what it IS, not what role it plays); multi-node future (each node gets its own `node.aDNA/`; `home.aDNA/` doesn't carry that nuance); Hestia persona already encodes the hearth/home semantics; migration cost (~15+ files + upstream commit + graceful fallback) for a cosmetic gain.
  - Why NOT outer-workspace-vault layer at `~/aDNA/`: vault-in-vault problem (inner `.aDNA/` vaults each have their own `.obsidian/`; outer indexer would collide); cross-vault wikilink degradation; clutter at `~/aDNA/` root.
- Consequences: HOME.md at vault root; workspace.default.json opens HOME.md; future v8.0+ may upstream the role-expansion pattern to `.adna/` template, but this mission keeps it local.
- Alternatives considered (5 options A-E from plan-mode analysis): A status-quo / B symlinks / **C this decision** / D rename + retain outer vault / E thin outer + rich inner.

### Obj 5 — README.md Obsidian section

Append a short "Opening this vault in Obsidian" section to `node.aDNA/README.md`
between the "How to use" and "Origin" sections. Cover:

- File → Open Vault → `~/aDNA/node.aDNA/` (or `obsidian://open?vault=node.aDNA`)
- HOME.md is the default open file (per workspace.default.json)
- Gallery shows installed vaults + named projects + drift
- Refresh data via `skill_inventory_refresh.md`

Keep to ~20-30 lines.

### Obj 6 — Smoke test + AAR + mission close + STATE.md

Manual smoke (operator on this machine): open `node.aDNA/` in Obsidian;
HOME.md is the default file; gallery renders (Bases or fallback OK); links
navigate. Capture results in `missions/artifacts/mlwx_02_obj6_smoke_results.md`.
Lightweight 5-line AAR at `missions/artifacts/aar_mlwx_02_node_vault_role_expansion.md`.
Mission file `status: in_progress → completed`; populate `closed_at` +
`closed_session` + `sessions_actual`. Mini-campaign master M-LWX-02 row
flipped to `completed`. STATE.md update for next-session prompt (M-LWX-01
or M-LWX-03 next, per operator).

---

## Deliverables

| # | Deliverable | Path | Session |
|---|---|---|---|
| 1 | Governance flips (mini-campaign + mission) | `campaign_lattice_workspace_ux.md` + this file | S1 |
| 2 | `HOME.md` at vault root | `node.aDNA/HOME.md` | S1 |
| 3a | `workspace.default.json` updated to reference HOME.md | `node.aDNA/.obsidian/workspace.default.json` | S1 |
| 3b | `workspace.json` (gitignored per-device state) opening HOME.md | `node.aDNA/.obsidian/workspace.json` | S1 |
| 4 | ADR-001 (node-vault role expansion) | `node.aDNA/what/decisions/adr_001_node_vault_role_expansion.md` | S1 |
| 5 | README.md Obsidian-opening section | `node.aDNA/README.md` (additive section) | S1 |
| 6 | Smoke test results | `missions/artifacts/mlwx_02_obj6_smoke_results.md` | S1 or S2 |
| 7 | M-LWX-02 AAR | `missions/artifacts/aar_mlwx_02_node_vault_role_expansion.md` | S1 or S2 |
| 8 | STATE.md update for next-session prompt | `aDNA.aDNA/STATE.md` | S1 or S2 |

**Total: 8 deliverables (reduced from 10 in original Option A spec).** Estimated 1-2 sessions.

---

## Acceptance criteria

- [ ] Mini-campaign master `phase: -1 → 1` and `status: planned → executing`
- [ ] M-LWX-02 mission file `status: planned → in_progress` (then → completed at close); `spec_completeness: stub → complete`; full Read/Produce blocks under Option C
- [ ] `node.aDNA/HOME.md` exists at vault root; renders header + Context Graphs gallery + Named Projects gallery + Drift section + Marketplace link + Tools & quick nav
- [ ] HOME.md gallery shows 21 `.aDNA` vaults + 11 named projects + 3 drift entries from `inventory_vaults.yaml` (Bases or markdown fallback — either OK)
- [ ] `node.aDNA/.obsidian/workspace.default.json` opens HOME.md on launch (file reference updated from `Home.md` to `HOME.md`)
- [ ] `node.aDNA/.obsidian/workspace.json` (per-device, gitignored) opens HOME.md
- [ ] `node.aDNA/what/decisions/adr_001_node_vault_role_expansion.md` exists and is `status: accepted`
- [ ] ADR-001 captures: rename rejection rationale (multi-node + scope-based naming + cost), outer-vault rejection rationale (vault-in-vault + wikilink degradation + clutter), Hestia hearth/home alignment
- [ ] `node.aDNA/README.md` has new "Opening this vault in Obsidian" section
- [ ] Obsidian opens `node.aDNA/` cleanly (manual smoke; HOME.md default; no error toasts)
- [ ] No `~/aDNA/` workspace-root mutations (`ls ~/aDNA/` shows no new files; `~/aDNA/CLAUDE.md` unchanged)
- [ ] No upstream `.adna/` mutations (`git -C ~/aDNA/.adna log --oneline -1` still at `e3b3bcc`)
- [ ] No partner-vault touches (only `node.aDNA/` and `aDNA.aDNA/` modified)
- [ ] No M04 audit output mutation (M04 mission file + AAR + 10-dim audit + 22 S2 artifacts preserved)
- [ ] No M04b output mutation (M04b mission file + AAR + 3 design artifacts preserved)
- [ ] M-LWX-02 AAR landed (lightweight 5-line + optional findings)
- [ ] Mission file frontmatter `status: in_progress → completed`; `closed_at` + `closed_session` + `sessions_actual` populated
- [ ] Mini-campaign master M-LWX-02 row flipped to `completed`
- [ ] STATE.md Next Session Prompt names next mission (M-LWX-01 or M-LWX-03)

---

## Status

**Mission in_progress.** Scope reframed under Option C (no rename) at
`session_stanley_20260512_221833_mlwx02_s1`. Original Option A spec
(outer-workspace-vault) preserved at `m04b_obj3_lattice_obsidian_vault_spec.md`
as design input; this mission implements the intent (lattice-home gallery +
Obsidian default workspace) at the inner-vault scope where it naturally
belongs. Parallel-eligible with M-LWX-01.
