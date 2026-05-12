---
type: mission
mission_id: mission_lwx_02_lattice_obsidian_vault
campaign: campaign_lattice_workspace_ux
campaign_phase: 1
status: planned
mission_class: implementation
created: 2026-05-12
updated: 2026-05-12
last_edited_by: agent_stanley
opens_at: mini_campaign_open  # operator-gated; opens when v2 M04b is closed AND operator authorizes mini-campaign open
opens_session: TBD
spec_completeness: stub
estimated_sessions: "2"  # S1 config + HOME.md authoring + .obsidianignore + Step 0.5 router; S2 polish + AAR
prerequisite_missions: []  # parallel-eligible with M-LWX-01; M04b close is the only upstream gate
prerequisite_artifacts:
  - m04b_obj3_lattice_obsidian_vault_spec.md  # the Obsidian-vault setup spec this mission implements
prerequisite_adrs:
  - adr_005_three_way_vault_boundary  # accepted; vault-in-vault discipline informs .obsidianignore design
  - adr_007_outer_adna_claude_md_disposition  # accepted; workspace CLAUDE.md is customizable (Step 0.5 lands here)
ships_to: mission_lwx_03_integration_test_and_closeout
parallel_eligible_with: mission_lwx_01_dynamic_bootstrap_interview
d5_disposition: local  # all M-LWX-02 outputs land at ~/lattice/; nothing upstreamed
external_dependencies:
  - ~/lattice/ (workspace root; target of .obsidian/ + HOME.md + .obsidianignore creation)
  - ~/lattice/CLAUDE.md (workspace router; target of Step 0.5 addition)
  - node.aDNA/what/inventory/inventory_vaults.yaml (read-only data source for HOME.md Bases gallery)
  - Obsidian app (operator's installation; M-LWX-02 confirms Bases schema against installed version)
tags: [mission, planned, lwx_02, obsidian_vault, home_page, gallery, vault_in_vault, bases, marketplace_link, local_d5, m_lwx_02, stub]
---

# Mission M-LWX-02 — `~/lattice/` Obsidian Vault Setup

**Phase**: P1 — Implementation. M-LWX-02 implements the Obsidian-vault setup spec
authored at v2 M04b Obj 3 ([[../../campaign_adna_v2_infrastructure/missions/artifacts/m04b_obj3_lattice_obsidian_vault_spec.md|`m04b_obj3_lattice_obsidian_vault_spec.md`]]).
All outputs land **local** at `~/lattice/` (workspace-scope, not template-scope).

**Class**: implementation. Independent of M-LWX-01 (upstream vs. local; no shared
files); parallel-eligible.

---

## Strategic Intent

`~/lattice/` is currently not an Obsidian vault (verified absent `.obsidian/` at
workspace root). The operator wants minimal Obsidian configuration so they can open
`~/lattice/` as a vault and use the UI + integrated terminal to manage the full
context lattice — including a HOME.md gallery of context graphs (reading from
`node.aDNA/what/inventory/inventory_vaults.yaml` as the source of truth) + a link to
the LP marketplace + a documented sub-vault opening pattern for the 21 inner
`.aDNA/` vaults.

After M-LWX-02 ships, the operator can run `obsidian ~/lattice/` (or open the folder
via Obsidian's File → Open Vault) and see the gallery immediately. Inner vaults stay
excluded from the outer indexer via `.obsidianignore` (no FSEvents conflicts).

---

## Hard constraints

- **Spec-faithful implementation**: M-LWX-02 implements [[../../campaign_adna_v2_infrastructure/missions/artifacts/m04b_obj3_lattice_obsidian_vault_spec.md|Obj 3 spec]] verbatim — 5 `.obsidian/` config files + HOME.md + .obsidianignore + Step 0.5 in workspace router.
- **D5 = local** (all outputs): nothing upstreamed to `.adna/` template. The Obsidian-vault setup is workspace-scope, not template-scope; future operators may or may not want it.
- **No M04 / M04b output mutation**: `node.aDNA/` data (especially `inventory_vaults.yaml`) is read-only; M04b spec artifacts are read-only references.
- **No partner-vault touches**: inner `.aDNA/` vaults retain their own `.obsidian/` configs; M-LWX-02 does NOT edit any inner-vault Obsidian state.
- **`.obsidianignore` enforces vault-in-vault**: `*.aDNA/` glob + 11 named-project directory exclusions + build artifacts + system files. Verify by triggering a file event inside an inner `.aDNA/` after install — outer indexer must not pick it up.
- **Bases-gallery fallback**: if Bases schema differs from Obj 3 spec's illustration (Bases evolves quickly), M-LWX-02 generates a markdown-table fallback at HOME.md write time, regenerable via `skill_inventory_refresh.md`. Don't block on Bases compatibility.
- **Marketplace URL placeholder OK**: if `lattice-protocol.com/marketplace` is not yet live at M-LWX-02 entry, the link defaults to a `[TBD per LP marketplace launch]` placeholder with a note in HOME.md §Maintenance.

---

## Objectives (skeleton — full Read/Produce blocks authored at mission open)

### Obj 1 — Author 5 `.obsidian/` config files

Per Obj 3 §1: `app.json` + `appearance.json` + `core-plugins.json` + `community-plugins.json` (empty array) + `workspace.json` (HOME.md open by default). Each per the content sketches in the spec.

### Obj 2 — Author `~/lattice/HOME.md` gallery

Per Obj 3 §2: header + identity + Context Graphs Bases gallery (with markdown-table fallback) + Named Projects Bases gallery + Marketplace link + Tools & quick nav. Reads `node.aDNA/MANIFEST.md` for hostname/operator and `inventory_vaults.yaml` for the gallery data.

### Obj 3 — Author `~/lattice/.obsidianignore`

Per Obj 3 §3: full pattern (inner `*.aDNA/` glob + 11 named projects + working/build directories + external deps + archive + hidden/git/system). Total ~30 patterns.

### Obj 4 — Add Step 0.5 to workspace router

Per Obj 3 §5: new Step 0.5 (Obsidian Vault Detection) in `~/lattice/CLAUDE.md` after Step 0.4. Detect mechanism + PRESENT branch + MISSING-offer branch.

### Obj 5 — Smoke test on this node

Open `~/lattice/` in Obsidian; verify HOME.md renders, gallery displays, inner `.aDNA/` excluded, marketplace link present. Capture screenshot or text report at `missions/artifacts/mlwx_02_obj5_smoke_results.md`.

### Obj 6 — AAR + mission close

Lightweight 5-line AAR + status flips + STATE.md update for next mission opening (M-LWX-03 if M-LWX-01 also closed, or wait).

---

## Deliverables forecast

| # | Deliverable | Path | Session |
|---|---|---|---|
| 1-5 | 5 `.obsidian/` config files | `~/lattice/.obsidian/{app,appearance,core-plugins,community-plugins,workspace}.json` | S1 |
| 6 | `HOME.md` gallery | `~/lattice/HOME.md` | S1 |
| 7 | `.obsidianignore` | `~/lattice/.obsidianignore` | S1 |
| 8 | Workspace router Step 0.5 | `~/lattice/CLAUDE.md` | S1 |
| 9 | Smoke test results | `missions/artifacts/mlwx_02_obj5_smoke_results.md` | S2 |
| 10 | M-LWX-02 AAR | `missions/artifacts/aar_mlwx_02_lattice_obsidian_vault.md` | S2 |

**Total: 10 deliverables.** Estimated 2 sessions.

---

## Acceptance criteria (forecast — full table at mission open)

- [ ] 5 `.obsidian/` config files present at `~/lattice/.obsidian/` with content matching Obj 3 §1 sketches
- [ ] `HOME.md` renders header + 2 gallery sections (Context Graphs + Named Projects) + Marketplace link + Tools & quick nav
- [ ] `.obsidianignore` excludes `*.aDNA/` glob + 11 named projects + build artifacts + system files
- [ ] Workspace router Step 0.5 lands in `~/lattice/CLAUDE.md`
- [ ] Outer vault opens cleanly in Obsidian (no errors)
- [ ] Inner `.aDNA/` subfolders not visible in outer file explorer
- [ ] Bases gallery renders OR markdown fallback active
- [ ] Marketplace link present (real URL or placeholder)
- [ ] Smoke results captured
- [ ] M-LWX-02 AAR landed
- [ ] Mission file `status: in_progress → completed`
- [ ] Side-campaign master M-LWX-02 row flipped to `completed`
- [ ] No M04 / M04b / partner-vault / inner-vault Obsidian-config mutations

---

## Status

**Mission planned. Stub authored 2026-05-12 by v2 M04b S1 Obj 4.** Opens at operator
discretion after mini-campaign opens. Parallel-eligible with M-LWX-01.
