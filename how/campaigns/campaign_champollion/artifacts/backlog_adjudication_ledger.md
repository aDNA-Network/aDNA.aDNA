---
type: artifact
artifact_id: champollion_backlog_adjudication_ledger
title: "Operation Champollion — backlog adjudication ledger (91 items + 3 stale ADRs; DRAFT dispositions for G0 ratification) [Lane 1, opus]"
campaign_id: campaign_champollion
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
status: active   # RATIFIED at G0 2026-07-02 (D2, as drafted); M1.1 executes exactly this set
ratified: "G0 2026-07-02 — D2 RATIFIED AS DRAFTED; record: how/gates/champollion_p0_gate.output.md"
executor_tier: opus
tags: [artifact, champollion, backlog, adjudication, ledger, dispositions, lane_report]
---

> ✅ **RATIFIED AT G0 (2026-07-02, as drafted — now decided law; record: `how/gates/champollion_p0_gate.output.md` D2). [[../campaign_champollion|M1.1]] executes exactly this set; deviations require a new gate.** Prepared by evidence Lane 1 (opus tier) from a full read of all 91 `how/backlog/*.md` + the 3 stale-`proposed` ADRs; reviewed at fable tier. Counts: **27 ALREADY-DISCHARGED · 31 ACCEPT→template-fold · 14 ACCEPT→immediate-fix/mission · 17 DEFER · 2 DECLINE-stale**; rings: **9 Ring-1 · 34 Ring-2 · 48 post-launch**. Cross-refs: [[order_of_battle|Order of Battle]] §6 · [[findings_ledger|F-CHM-012]].

# Lane 1 — Backlog Adjudication Prep (Operation Champollion Phase 0)

Vault: `/Users/stanley/aDNA/aDNA.aDNA` · Prepared: 2026-07-01 · Scope: all 91 `how/backlog/*.md` items (excl. `AGENTS.md`) + 3 stale ADRs. Read fully (no file >235 lines). Vault was read-only; only this file written.

> **How to read a disposition.** ALREADY-DISCHARGED = shipped/resolved (body verified). ACCEPT→template-fold = stage into next `skill_template_release` candidate (operator-gated). ACCEPT→immediate-fix/mission = aDNA.aDNA-owned edit, low ceremony. DEFER = owner + trigger named. DECLINE-stale = superseded; do not execute as written. Ring-1 = launch-critical spine · Ring-2 = compressible · post-launch = after DP4.

---

## 1. Header — counts

### By current frontmatter status (91 items)
| status | n |
|---|---|
| proposed | 34 |
| open | 23 |
| accepted | 6 |
| resolved | 9 |
| completed | 4 |
| planned | 4 |
| idea | 3 |
| graduating | 2 |
| ratified_local | 2 |
| pending_v8_p6_batch | 1 |
| filed (informational) | 1 |
| active | 1 |
| stub_bootstrapped (custom) | 1 |

### By draft disposition (91 items; primary disposition — some items are hybrid e.g. ACCEPT-with-refresh)
| disposition | n |
|---|---|
| ALREADY-DISCHARGED | 27 |
| ACCEPT→template-fold | 31 |
| ACCEPT→immediate-fix / mission | 14 |
| DEFER | 17 |
| DECLINE-stale | 2 |

### By launch ring (91 items)
| ring | n |
|---|---|
| Ring-1 (launch-critical) | 9 |
| Ring-2 (compressible) | 34 |
| post-launch | 48 |

**Headline findings.** (a) ~29 items are effectively done — a large fraction carry a stale `open`/`proposed`/`accepted`/`graduating` status while the body or the fleet proves delivery (the "status lies" list below). (b) The single biggest live cluster is **first-contact/install + Obsidian**, and it is *mostly discharged* — the 8 `backlog_F_S2_*` findings + the Obsidian `idea_upstream_*` set were resolved via the **Cornerstone v8.1 seed bundle** + the `skill_obsidian_*`/`skill_verification_handoff` skills that now exist. (c) A coherent **Hestia Production-Tidy/Spring-Clean upstream cluster** (~11 items: archive/rename/merge/second-genesis/spring-clean skills + shim/health-check/recon disciplines) is evidence-backed and template-fold-ready — batch it. (d) The **operator-interaction-web-gate** trio (interactive_decision_surface + operator_web_gate + partial OIP) is discharged by the **ISS system** (skill_create_iss + ADR-028/029, Standing Rule 8). (e) Two items are actively **wrong/stale**: `latticehome_rename_pattern` (promotes "LatticeHome", reverted to "Home") and `v8_p6_propagation_airlock_streamlined` (superseded STR cycle + renamed/merged wrappers).

**Status-lies (body/fleet contradicts frontmatter status):** `idea_campaign_visualdna_adna_framework` (status "stub_bootstrapped" — vault is forked & at genesis-P3-closed), `idea_interactive_decision_surface` + `idea_operator_web_gate_ui_pattern` (status proposed — shipped as ISS), `idea_upstream_identity_entity_type` + `idea_upstream_inventory_entity_type` (status accepted — materialized to template at Hearthstone P5 per CLAUDE.md), `idea_upstream_install_script` + `idea_upstream_skill_workspace_path_migration` (status idea — superseded by clone-and-run image / now a base skill), `idea_awsbootstrap_lighthouse_cohort_reconciliation` (status graduating — ADR-043 accepted 2026-06-30), + the 7 discharged `backlog_F_S2_*` findings (status open).

---

## 2. Cluster sections

### Cluster A — First-contact / install UX (fork → first-open → node bootstrap)

#### backlog_F_S2_1_setup_sh_fork_propagation.md
- **status now**: open
- **what**: `skill_project_fork` strips `setup.sh` but then tells the user to run it — forked vaults arrive with no plugin installer.
- **draft disposition**: ALREADY-DISCHARGED (fixed via `idea_upstream_fork_obsidian_reseed` → skill_project_fork keeps setup.sh; shipped Cornerstone v8.1, adr_038).
- **launch relevance**: Ring-2
- **rationale**: The defect that produced binary-stripped forks; the v8.1 seed bundle resolved it. Body status `open` is stale — recommend flip to resolved.

#### backlog_F_S2_2_config_binary_asymmetry.md
- **status now**: open
- **what**: `community-plugins.json` enabled-list ≠ installed binaries → silent empty-nav failure.
- **draft disposition**: ALREADY-DISCHARGED (batteries-included seed + donor-copy materialization shipped v8.1 via `obsidian_seed_canonicalization` + `obsidian_setup_sh_reseed_from_committed_binaries`).
- **launch relevance**: Ring-2
- **rationale**: The asymmetry is closed at fork-time by the v8.1 fold-in seed. Stale `open`.

#### backlog_F_S2_3_agent_vs_operator_smoke_handoff.md
- **status now**: open
- **what**: agent-side smoke ≠ runtime smoke; needs an explicit verification-handoff skill/topology.
- **draft disposition**: ALREADY-DISCHARGED (`skill_verification_handoff` exists in the vault's skills inventory; ADR-014 slot was its forecast).
- **launch relevance**: post-launch
- **rationale**: The load-bearing LWX finding; the skill it forecast now exists. Verify ADR-014 status, then close.

#### backlog_F_S2_4_obsidian_workspace_clobber.md
- **status now**: open
- **what**: Obsidian first-open destructively rewrites `workspace.json`, losing the shipped layout.
- **draft disposition**: ALREADY-DISCHARGED (`--reset-layout` flag + first-open runbook folded into the v8.1 bundle via `setup_sh_reset_layout_flag`).
- **launch relevance**: Ring-2
- **rationale**: Resolved at v8.1. Stale `open`.

#### backlog_F_S2_5_obsidian_json_normalization.md
- **status now**: open
- **what**: Obsidian normalizes tracked `.obsidian/*.json` on open (benign drift).
- **draft disposition**: ALREADY-DISCHARGED (`skill_obsidian_canonicalize` exists — the T4 canonicalization skill this forecast).
- **launch relevance**: post-launch
- **rationale**: Skill exists; drift is documented-and-manageable. Close.

#### backlog_F_S2_6_nn_data_json_not_shipped.md
- **status now**: open
- **what**: Notebook Navigator per-vault `data.json` (triad colors) not shipped by setup.sh.
- **draft disposition**: ALREADY-DISCHARGED (full-schema NN `data.json` now in the v8.1 seed bundle).
- **launch relevance**: post-launch
- **rationale**: Cosmetic; resolved by the seed fold-in.

#### backlog_F_S2_7_template_placeholder_tags.md
- **status now**: open
- **what**: `<project_slug>` literal placeholder tags in `template_prd/rfc.md` leak into the Obsidian tag index.
- **draft disposition**: ACCEPT→immediate-fix (add `how/templates/` to `.obsidianignore` and/or Templater syntax) — the one F-S2 finding with no confirmed v8.1 discharge; verify against current seed before closing.
- **launch relevance**: Ring-2
- **rationale**: Cosmetic template-hygiene defect; cheap. Likely still genuinely open (no Cornerstone triage annotation found).

#### backlog_F_S2_8_agent_driven_obsidian_inspection.md
- **status now**: open
- **what**: agent can't drive/inspect Obsidian without operator; add Local REST API + MCP + inspection skill.
- **draft disposition**: ALREADY-DISCHARGED (`skill_obsidian_agent_inspect` exists; the opt-in REST/MCP pattern is tracked by `obsidian_local_rest_api_seed`, SURVIVES-low).
- **launch relevance**: post-launch
- **rationale**: The inspection skill shipped. Stale `open`.

#### idea_demo_gif.md
- **status now**: planned (high)
- **what**: 30-sec terminal GIF (clone→cd→claude→onboarding) for the root README.
- **draft disposition**: ACCEPT→mission (record a clean onboarding, capture GIF, embed in README).
- **launch relevance**: **Ring-1**
- **rationale**: The README is the literal GitHub first-contact at a public launch; the 5-reader panel named this the strongest single remaining visual. Needs a real recorded session.

#### idea_plugin_trimming.md
- **status now**: planned (high)
- **what**: ship ~1.5MB essential plugins (of 13MB / 15 plugins); document the rest optional.
- **draft disposition**: ACCEPT-with-refresh (re-derive the "essential set" against the Obsidian-stabilization UX investment — trimming NN/Advanced-Canvas would regress the first-open UX the F-S2 work bought).
- **launch relevance**: Ring-2
- **rationale**: Clone weight is a first-open/perception item, but the naive-trim goal now tensions with the batteries-included seed. Re-evaluate before cutting; flag the tension.

#### idea_upstream_install_script.md
- **status now**: idea (medium)
- **what**: one-command install path (documented inline one-liner, not `install.sh`).
- **draft disposition**: ALREADY-DISCHARGED / SUPERSEDED (the clone-and-run image `aDNA-Network/aDNA` lands users in `~/aDNA` by construction; install_truth.json + gate-12 + 4-command flow shipped). The one-liner in-file is stale (`LatticeProtocol/aDNA`).
- **launch relevance**: **Ring-1** (verification only)
- **rationale**: The install approach shipped a simpler model; remaining work = confirm README ↔ adna.network install commands agree for launch (part of Top-12 #3).

#### idea_upstream_onboarding_workspace_default_adna.md
- **status now**: resolved
- **what**: flip new-user onboarding default `~/lattice` → `~/aDNA`.
- **draft disposition**: ALREADY-DISCHARGED (PR #7 merged; fully subsumed by the clone-and-run image / ADR-034).
- **launch relevance**: Ring-1 (already done)
- **rationale**: Body has a full disposition confirming closure. Clean.

#### idea_upstream_home_claude_template.md
- **status now**: accepted (high)
- **what**: ship `template_home_claude.md` so a fresh node's `Home.aDNA/` gets Hestia governance, not generic Berthier.
- **draft disposition**: ACCEPT→template-fold (accepted at Hearthstone P0; scheduled to land `.adna/` at Hearthstone P2/P5 — **verify delivery** at next release, may be materialized).
- **launch relevance**: Ring-2
- **rationale**: Fresh-node bootstrap correctness; part of the Hearthstone Home-bootstrap trio. Secondary to the workspace-clone path.

#### idea_upstream_router_node_vault_detection.md
- **status now**: accepted (high)
- **what**: add "Node Vault Detection / offer to bootstrap Home" step to the workspace-router template.
- **draft disposition**: ACCEPT→template-fold (accepted; Hearthstone P2/P5 — **verify delivery**; the reference logic already lives in this workspace's root CLAUDE.md Step 0).
- **launch relevance**: Ring-2
- **rationale**: Router-side offer that makes Home discoverable on a fresh clone. Trio with home_claude_template + project_fork_exemplar.

#### idea_upstream_node_exemplar_template.md
- **status now**: accepted (medium)
- **what**: upstream the themed generator-driven exemplar HOME bundle (`template_node_adna_exemplar/`).
- **draft disposition**: ACCEPT→template-fold (accepted; Hearthstone P3/P5 — **verify delivery + the "callout-fold profile" renderer wiring** the M3.4 update flags as load-bearing).
- **launch relevance**: Ring-2
- **rationale**: Node HOME polish; pairs with project_fork_exemplar. The renderer wiring caveat means delivery may be partial.

#### idea_upstream_project_fork_exemplar_invocation.md
- **status now**: accepted (medium)
- **what**: wire the exemplar-HOME invocation (`--exemplar-home` + interview Topic 6) into the bootstrap skills.
- **draft disposition**: ACCEPT→template-fold / near-ALREADY-DISCHARGED (dev-graph wiring **landed 2026-06-19**; ships `.adna/` at Hearthstone P5 — verify).
- **launch relevance**: Ring-2
- **rationale**: Body says proposals (1)+(2) implemented in the dev graph; only the template ship remains.

#### idea_upstream_credential_broker_template_inheritance.md
- **status now**: proposed (medium; target v8.0)
- **what**: fold the `### Credential routing (broker = Home.aDNA)` snippet into `.adna/CLAUDE.md` for fork-time inheritance.
- **draft disposition**: ACCEPT→template-fold (explicitly referenced in workspace **Standing Rule 6** as the pending upstream adoption; refresh `node.aDNA`→`Home.aDNA` in the snippet, then ship).
- **launch relevance**: Ring-2
- **rationale**: Ready (verbatim snippet + acceptance test); overdue vs its own v8.0 target; named in governance.

#### idea_upstream_fork_obsidian_reseed.md
- **status now**: resolved (high)
- **what**: close the `skill_project_fork` strip-then-reseed self-contradiction.
- **draft disposition**: ALREADY-DISCHARGED (skill_project_fork now keeps setup.sh; v8.1, adr_038; whole held stack now public per 2026-07-01 push).
- **launch relevance**: Ring-2
- **rationale**: Body + Cornerstone triage confirm. Resolves F-S2-1.

#### idea_upstream_fork_orphan_id_lint.md
- **status now**: open (low)
- **what**: fork-time lint rejecting a `community-plugins.json` id with no matching `plugins/<id>/` folder.
- **draft disposition**: ACCEPT→template-fold (borrow Obsidian.aDNA health_check HC2/HC3; Cornerstone triage = SURVIVES-low, carry as-is).
- **launch relevance**: post-launch
- **rationale**: Small fork-hygiene lint; independent; low.

#### idea_upstream_obsidian_seed_canonicalization.md
- **status now**: resolved (high)
- **what**: adopt the rich-canonical batteries-included `.obsidian/` seed into `.adna`.
- **draft disposition**: ALREADY-DISCHARGED (fold-in bundle shipped v8.1 / ADR-034 standalone image).
- **launch relevance**: Ring-2
- **rationale**: The "biggest-value" Obsidian move; resolves F-S2-2/6. Confirmed.

#### idea_upstream_obsidian_setup_sh_reseed_from_committed_binaries.md
- **status now**: resolved (low)
- **what**: prefer committed/donor `plugins/*` binaries over GitHub re-download (offline-capable).
- **draft disposition**: ALREADY-DISCHARGED (folded into the v8.1 bundle: binary materialization + retained installer).
- **launch relevance**: post-launch
- **rationale**: Confirmed by Cornerstone triage.

#### idea_upstream_obsidian_core_plugins_sync_neutral.md
- **status now**: resolved (low)
- **what**: flip template `core-plugins.json` to `sync:false` (a neutral seed shouldn't assert a paid feature).
- **draft disposition**: ALREADY-DISCHARGED (sync-neutral applied, shipped v8.1).
- **launch relevance**: Ring-2
- **rationale**: Fixed a real clinical-data-safety concern (Sync-on drift on CakeHealth). Confirmed.

#### idea_upstream_setup_sh_reset_layout_flag.md
- **status now**: resolved (medium)
- **what**: adopt the `--reset-layout` flag + first-open runbook into `.adna/setup.sh`.
- **draft disposition**: ALREADY-DISCHARGED (folded into v8.1 bundle + setup.sh delta).
- **launch relevance**: Ring-2
- **rationale**: Resolves F-S2-4. Confirmed.

#### idea_upstream_obsidian_local_rest_api_seed.md
- **status now**: open (low; IF-gated)
- **what**: adopt the `obsidian-local-rest-api` opt-in pattern (plugin + per-vault security contract), never default-seeded.
- **draft disposition**: ACCEPT→template-fold (opt-in pattern doc + override-manifest example; Cornerstone = SURVIVES-low) OR DEFER until the template ships agent-driven Obsidian infra.
- **launch relevance**: post-launch
- **rationale**: Advanced opt-in feature; design work done (ADR-011 + M05 doc). Low.

#### idea_upstream_obsidian_payload_doc_refresh.md
- **status now**: open (high)
- **what**: one doc-sweep of `.adna/.obsidian/README.md` + `OBSIDIAN_CLAUDE.md` + `adr_001` to the canonical 14-plugin roster.
- **draft disposition**: ACCEPT→template-fold (Cornerstone triage = REFRAMED, **explicitly NOT in v8.1** — genuinely open; do NOT re-add `settings-search`; document roster as shipped).
- **launch relevance**: **Ring-1** (see Top-12 #4)
- **rationale**: A real correctness defect in shipped template docs (phantom plugins, orphan `advanced-canvas` id, wrong counts) that a new user cloning the image reads. High-priority, not yet shipped.

#### idea_upstream_lattice_home_pattern.md
- **status now**: proposed (medium)
- **what**: promote the terminal cold-start 5-block ASCII splash pattern upstream (pattern + install skill + render template + setup.sh prompt).
- **draft disposition**: ACCEPT→template-fold (local artifacts exist — `skill_lattice_home_install` + `pattern_lattice_home` + `template_lattice_home_render`; refresh stale refs Cmux→Terminal, LatticeHome→Home, SiteForge→Astro etc.).
- **launch relevance**: Ring-2
- **rationale**: Terminal first-contact polish; part of the "vault-portable UX layer" cluster. Stale vault names + stale upstream URL need refresh.

#### idea_default_terminal_harness_standard_touch.md
- **status now**: proposed
- **what**: name Terminal.aDNA × Harness.aDNA the recommended-default access point (spec note + node-bootstrap hook + entry doc).
- **draft disposition**: partial ACCEPT (piece 1, the "recommended-not-required" spec note, is safe) + DEFER pieces 2-3 (owner: Terminal/Berthier + Rosetta; trigger: Terminal EP5 missions `ex_20`/`ex_23` + the access-point threat-model mission).
- **launch relevance**: post-launch
- **rationale**: Network-facing promotion is explicitly gated on unwritten Terminal missions + a threat model; only the paper spec note can land now.

#### idea_inner_readme_iii.md
- **status now**: planned (medium)
- **what**: 10 III cycles on `.adna/README.md` (870 lines, never III-reviewed).
- **draft disposition**: ACCEPT→mission (III cycles) OR DEFER (owner: Rosetta; trigger: post-launch docs pass).
- **launch relevance**: Ring-2
- **rationale**: The inner template README is what a workspace-image cloner browses; secondary to the root README (already polished). Compressible.

---

### Cluster B — Site / UX (adna.network LIVE, launch-gated)

#### idea_theme_persistence_bug.md
- **status now**: resolved (high)
- **what**: fix light/dark FOUC + view-transition theme persistence in `BaseLayout.astro`.
- **draft disposition**: ALREADY-DISCHARGED (shipped Phase-7 D3 cycle 26; build 116pp/0err, gates 30/30, Lighthouse 100).
- **launch relevance**: Ring-1 (already done)
- **rationale**: Full resolution section; body matches status.

#### idea_deploy_cadence.md
- **status now**: resolved (high)
- **what**: establish an adna.network deploy cadence (scheduled decadal + hotfix path + embargo + drift guard).
- **draft disposition**: ALREADY-DISCHARGED (ratified at audit P2; candidate Campaign SO #21). **Sub-item note:** the "drift guard" (live-matches-HEAD vault-count/version check) routed to E7 capstone — verify it's wired for launch.
- **launch relevance**: Ring-2 (drift-guard sub-item Ring-1-adjacent)
- **rationale**: Cadence + hotfix + embargo ratified; the automated drift guard is the one piece worth confirming before launch.

#### idea_site_rss_feed.md
- **status now**: idea (low)
- **what**: `@astrojs/rss` feed over the changelog collection ("actively-maintained" signal).
- **draft disposition**: ACCEPT→immediate-fix (small `@astrojs/rss` add) opportunistically.
- **launch relevance**: Ring-2
- **rationale**: Cheap credibility signal for tool-evaluators; low first-hour impact (changelog has 1 entry). E6 O5 / E7.

#### idea_vaults_graph_ssr.md
- **status now**: open (Looking Glass A-06, High/craft; DP3-deferred)
- **what**: SSR-prerender `/vaults/graph` to static SVG (drop ~1.3MB client JS; fix worst-page perf + no-JS a11y).
- **draft disposition**: DEFER (owner: Rosetta + Websites.aDNA; trigger: dedicated craft cycle / Websites build pass) — or ACCEPT→mission if the launch quality bar demands the site's worst page.
- **launch relevance**: Ring-2
- **rationale**: Live-site's Perf laggard (LCP ~4.06s) + a11y no-JS gap on one page; operator already deferred as lowest fidelity-impact/effort. Honor pt19 + Websites carve.

#### idea_visual_regression_gate.md
- **status now**: open (low; WEBSITE G3, deferred at D4)
- **what**: semantic visual-regression gate (platform-stable baselines, no OS-font flake).
- **draft disposition**: DEFER (owner: Rosetta/Astro/III; trigger: a craft regression slips past wired gates, or container-pinned infra at standing-watch).
- **launch relevance**: post-launch
- **rationale**: Surface already covered by gates 4/9/18/19; naive baselines flake. Needs real infra. Candidate upstream to Astro/III.

#### idea_upstream_public_projection_sanitizer.md
- **status now**: open (high)
- **what**: public-projection sanitizer in the ADR-023 registry generator (`build_vaults_data.mjs`) — private `Home.aDNA` inventory → public `vaults.json`.
- **draft disposition**: ACCEPT→mission (harden `publicNote()` to ALL projected fields; prefer an explicit public `tagline` over sanitizing private prose; document the Rule-4 private→public boundary in the generator spec).
- **launch relevance**: **Ring-1** (Top-12 #1)
- **rationale**: The instance fix shipped (a named client + employer + private repo had leaked to the live CakeHealth page). The systematic boundary (all fields) is open — a regression republishes private data on the live public site. aDNA.aDNA-owned.

#### idea_text_banner_variants.md
- **status now**: proposed (low)
- **what**: "aDNA" text-overlay banner variants for OG image / social preview / HuggingFace.
- **draft disposition**: ACCEPT→mission (small; batch with `custom_logo` into one launch-branding-polish task).
- **launch relevance**: Ring-2
- **rationale**: Social card shareability at launch; overlaps custom_logo.

#### idea_custom_logo.md
- **status now**: proposed (medium)
- **what**: III-driven logo + favicon; GitHub social preview + npm badge.
- **draft disposition**: ACCEPT→mission (III-driven; batch with text_banner_variants).
- **launch relevance**: Ring-2 (favicon + GitHub social preview matter for launch shareability)
- **rationale**: Small but real first-impression polish; the repo goes public at launch.

#### idea_diagram_missions_herb.md
- **status now**: proposed (high)
- **what**: Herb-commissioned figures for aDNA key concepts via the text-prompt + mermaid dual method.
- **draft disposition**: ACCEPT-with-refresh / DEFER (owner: Rosetta + Canvas/Mondrian; trigger: post-launch visual-layer push) — refs are stale (Herb/CanvasForge → Canvas/Mondrian; target "Phase 7 D8 / Phase 8" — Operation Rosetta is complete).
- **launch relevance**: post-launch
- **rationale**: Substantial cross-vault production effort; concept pages already function with prose+mermaid. Reroute + retarget before scheduling.

---

### Cluster C — Vault hygiene / token economy

#### idea_banner_asset_cleanup.md
- **status now**: open (low)
- **what**: archive the two dormant predecessor `banner.jpg` files (`git mv` to `_archive/`).
- **draft disposition**: ACCEPT→immediate-fix (grep-zero-refs verify, then `git mv`; ≤0.25 session).
- **launch relevance**: post-launch
- **rationale**: The new PNG is long stable; the revert-fallback window elapsed. Trivial tidy.

#### idea_fleet_defects_retro_cleanup.md
- **status now**: open (medium; Drydock M03 / ADR-042)
- **what**: deferred existing-instance cleanup arms — retro-strip 45 vaults of the completed `campaign_adna_workspace_upgrade` (arm B) + OBE rename-residue sweep (arm C). Arm A ✅ landed v8.2.
- **draft disposition**: DEFER (owner: operator, per-vault; trigger: post-launch standard-maintenance mission) — each a separate SO-7-weighted operator call.
- **launch relevance**: post-launch
- **rationale**: Cross-vault (touches 45 vaults incl. aDNA.aDNA's own inherited copy); flag-not-fix by design. Not launch-blocking.

#### idea_startup_optimization.md
- **status now**: proposed (low)
- **what**: consolidate CLAUDE.md/MANIFEST.md cold-start overlap (~400-900 token saving).
- **draft disposition**: DEFER / ACCEPT-with-refresh (owner: Rosetta; trigger: post-launch efficiency pass) — the specific proposal is stale (vault grew); the concern (cold-start cost) is more acute now (STATE.md 545KB).
- **launch relevance**: post-launch
- **rationale**: Agent-facing token cost, not user-visible first-hour. Compressible into a broader token pass.

#### idea_upstream_claude_md_prune.md
- **status now**: proposed (medium)
- **what**: prune `.adna/CLAUDE.md` (~5,560 tokens loaded into every session of every vault); conservative + aggressive paths, M01 lessons folded.
- **draft disposition**: ACCEPT→template-fold (via skill_template_release; well-specified, lessons landed; mechanism changed PR→release-skill).
- **launch relevance**: Ring-2
- **rationale**: High cumulative token cost across the fleet; a leaner template helps every user. Ready to draft.

#### idea_upstream_state_md_read_hint.md
- **status now**: proposed (medium; target v8.0)
- **what**: add a Heavy-File Read Convention (offset+limit on files ≥50kT/200KB) to the `.adna/AGENTS.md` template.
- **draft disposition**: ACCEPT→template-fold (7-line AGENTS.md section; local instance proven; matches the workspace's own heavy-file memory).
- **launch relevance**: Ring-2
- **rationale**: Acute — this vault's STATE.md is now 545KB. Helps every fork's agents. Stale acceptance-test URL (LatticeProtocol→aDNA-Network).

#### idea_upstream_workspace_router_row_discipline.md
- **status now**: proposed (medium; GH issue #4)
- **what**: bake "router rows = routing identity only / CLAUDE.md = governance, STATE.md = state" into the standard.
- **draft disposition**: ACCEPT→template-fold (bake into template_workspace_claude.md + skill_workspace_upgrade Step 3 + skill_project_fork; local **Standing Rule 7** already proves it).
- **launch relevance**: Ring-2
- **rationale**: Bloat-prevention discipline; already local Rule 7 (which cites this idea as the upstream proposal). GH issue #4 was on the now-archived repo — mechanism is skill_template_release.

#### idea_currency_sweep_flagged_followons.md
- **status now**: completed
- **what**: 6 broader-than-currency drift items flagged by the vault-wide sweep.
- **draft disposition**: ALREADY-DISCHARGED (CLOSED by mission_currency_followon_closeout; all 6 dispositioned, gates 304/304).
- **launch relevance**: Ring-2 (done)
- **rationale**: Full resolution table in body; matches status.

#### idea_vault_wide_currency_sweep.md
- **status now**: completed
- **what**: sweep out-of-slice version/URL drift (v2.1/v2.2→v2.3; LatticeProtocol/Agentic-DNA→aDNA-Network/aDNA).
- **draft disposition**: ALREADY-DISCHARGED (CLOSED; 29 files swept, gates 304/304, 6 items spun to the flagged-followons item above, also closed).
- **launch relevance**: Ring-2 (done)
- **rationale**: Body confirms; clean close with honesty guardrails.

---

### Cluster D — Standard-completion / upstream-folds

#### idea_upstream_per_class_frontmatter_profiles.md
- **status now**: proposed (medium)
- **what**: §7.2 per-class frontmatter profiles (`status` optional for `directory_index`+`coordination`) + validator nested-instance exclusion; upstream twin of ADR-044.
- **draft disposition**: ACCEPT→template-fold (**the explicitly-named remaining upstream thread** per session memory — ADR-044 accepted locally 2026-06-30; carry §7.2/§5.5 text + public-image validator parity at next release).
- **launch relevance**: **Ring-1** (Top-12 #5)
- **rationale**: Stops every conformant fork from failing its own validator; ready reference impl in-vault. The one open frontmatter-arc thread.

#### idea_upstream_identity_entity_type.md
- **status now**: accepted (medium)
- **what**: add `identity` (WHO) base entity type.
- **draft disposition**: ALREADY-DISCHARGED (ADR-035 accepted; "materialized to the public template at Hearthstone P5" per aDNA.aDNA CLAUDE.md; standard v2.3/2.4).
- **launch relevance**: post-launch
- **rationale**: Status "accepted" understates it — delivered. Close.

#### idea_upstream_inventory_entity_type.md
- **status now**: accepted (medium)
- **what**: add `inventory` (WHAT) base entity type.
- **draft disposition**: ALREADY-DISCHARGED (ADR-035; materialized to template at Hearthstone P5).
- **launch relevance**: post-launch
- **rationale**: Same as identity — delivered. Close.

#### idea_upstream_lip_0006_network_category_addition.md
- **status now**: pending_v8_p6_batch
- **what**: propagate the Network.aDNA 6th-category addition (ADR-017 Clause A / LIP-0006) to the `.adna` base-category table.
- **draft disposition**: ACCEPT→template-fold (**verify** whether the v8.x Hearthstone batch already carried Network.aDNA into `.adna/adna_standard.md`; STR's v8-P6 owner is closed/reorganized — reroute to skill_template_release).
- **launch relevance**: Ring-2
- **rationale**: Standard-completeness (the standard should name its 6th category). Delivery-status uncertain; stale STR M6.x routing.

#### idea_upstream_network_node_mirror_entity_type.md
- **status now**: ratified_local
- **what**: `network_node_mirror` entity-type (namespace `network_`) — v8 P6 → base ontology.
- **draft disposition**: ACCEPT→template-fold (ratified_local; verify template materialization; refresh LatticeNetwork→Network). Part of the Network batch (with lip_0006 + permission_edge).
- **launch relevance**: post-launch
- **rationale**: Network-federation infra type; awaiting the same template batch as lip_0006.

#### idea_upstream_permission_edge_entity_type.md
- **status now**: ratified_local
- **what**: `permission_edge` entity-type (namespace `network_`, 10-field schema) — v8 P6 → base ontology.
- **draft disposition**: ACCEPT→template-fold (ratified_local; sibling parallel-discharge with network_node_mirror; verify materialization; refresh LatticeNetwork→Network).
- **launch relevance**: post-launch
- **rationale**: Same Network batch. Ratified locally; template fold pending.

#### idea_upstream_skill_project_archive.md
- **status now**: proposed (high)
- **what**: `skill_project_archive` — canonical archive flow for superseded vaults (8 steps; 5-event evidence).
- **draft disposition**: ACCEPT→template-fold (anchor of the lifecycle-skills cluster; fills the fork[birth]↔archive[death] gap; ready).
- **launch relevance**: Ring-2
- **rationale**: Evidence-backed, referenced by second_genesis P1 + archive_category. Batch with the cluster.

#### idea_upstream_graph_rename_recipe.md
- **status now**: proposed (high)
- **what**: `skill_graph_rename` — canonical rename + ref-sweep recipe (7 steps; 7-rename evidence; wrapper surface undercounted ~3×).
- **draft disposition**: ACCEPT→template-fold — **note overlap**: a narrower `skill_project_rename` already exists (self-references only); decide fold-into-existing vs new superset skill.
- **launch relevance**: Ring-2
- **rationale**: Highest-blast-radius routine op; evidence-backed. Reconcile with the existing skill before authoring.

#### idea_upstream_graph_merge_recipe.md
- **status now**: proposed (high)
- **what**: `skill_graph_merge` — canonical merge flow (7 steps; 3-merge evidence incl. a deliberate "proof" merge first).
- **draft disposition**: ACCEPT→template-fold (evidence-backed; sibling to project_archive + graph_rename).
- **launch relevance**: Ring-2
- **rationale**: Ready. Batch with the lifecycle cluster.

#### idea_upstream_skill_second_genesis.md
- **status now**: proposed (high)
- **what**: `skill_second_genesis` — re-genesize a stale vault (dossier + operator brief + re-genesis campaign); reference impl installed at Home.aDNA.
- **draft disposition**: ACCEPT→template-fold (reference impl + dossier template exist; proven on a 6-vault cohort where 2 criteria correctly FAILED).
- **launch relevance**: Ring-2
- **rationale**: Fills the fork↔version-migration middle case. Depends on skill_project_archive (P1). Ready.

#### idea_upstream_skill_workspace_spring_clean.md
- **status now**: proposed (medium)
- **what**: `skill_workspace_spring_clean` — audit-first houseclean, ONE operator gate, tiered waves (proven twice).
- **draft disposition**: ACCEPT→template-fold (SNAPSHOT→RECON→ONE GATE→WAVES→CLOSE + disposition-ledger template; proven).
- **launch relevance**: Ring-2
- **rationale**: Workspace-agnostic; pairs with archive + second_genesis + shim discipline.

#### idea_upstream_skill_workspace_path_migration.md
- **status now**: idea (medium)
- **what**: upstream `skill_workspace_path_migration` + `migrate_workspace_root.sh` (the ~/lattice→~/aDNA kit).
- **draft disposition**: ALREADY-DISCHARGED / verify (`skill_workspace_path_migration` is listed as a **base skill** in the current CLAUDE.md inventory — appears already upstreamed to the template).
- **launch relevance**: post-launch
- **rationale**: If it's a base/template skill now, the fold happened. Verify the shell companion rode along; else ACCEPT→template-fold.

#### idea_upstream_shim_window_discipline.md
- **status now**: proposed (high)
- **what**: shim-window discipline (register-at-creation, conjunctive retirement, pre-authorized waves, health-check enforcement).
- **draft disposition**: ACCEPT→template-fold (proven & running locally; forward-cited by workspace **Standing Rule 9** + S13 health-check; ready).
- **launch relevance**: Ring-2
- **rationale**: Node-agnostic; companion to archive_category + archive_ledger_schema + health_check_precision.

#### idea_upstream_archive_category.md
- **status now**: proposed (medium)
- **what**: name the `Archive.aDNA/` holder as a first-class workspace concept (root object, not a vault; census exception).
- **draft disposition**: ACCEPT→template-fold (evidence: 10 archived graphs; ready).
- **launch relevance**: Ring-2
- **rationale**: Prevents per-node "is Archive.aDNA a vault?" re-derivation. Part of the archive cluster.

#### idea_upstream_archive_ledger_schema.md
- **status now**: proposed (medium)
- **what**: canonical shim/archive ledger row schema + ~12-class shim taxonomy.
- **draft disposition**: ACCEPT→template-fold (evidence: 44-row live registry; ready).
- **launch relevance**: Ring-2
- **rationale**: The row-schema half of shim_window_discipline (which supplies the "register every shim" rule).

#### idea_upstream_health_check_precision.md
- **status now**: proposed (high)
- **what**: health-check census must be allowlist-based (flag the unknown), not pattern-based.
- **draft disposition**: ACCEPT→template-fold (locally proven S15 Clean-Root Allowlist Check; ~2.3G had accumulated unseen).
- **launch relevance**: Ring-2
- **rationale**: "A census flags the unrecognized, it does not bless the recognized." Companion to archive_category + shim disciplines.

#### idea_upstream_recon_at_execution_discipline.md
- **status now**: proposed (high)
- **what**: "recon-beats-the-charter" discipline (full-grep + re-verify governance + surface deltas + record).
- **draft disposition**: ACCEPT→template-fold (the keystone the rename/merge/archive/health-check ideas all cite; evidence from pt09/pt11/pt12/clean-root).
- **launch relevance**: Ring-2
- **rationale**: Generalizes the per-playbook "estimates lie" rules into one standing discipline. Foundation of the Hestia cluster.

#### idea_upstream_planning_light_substrate_recon.md
- **status now**: proposed (medium; target v8.0)
- **what**: add a "Pre-flight Substrate Recon" section to the planning-light charter template (verify substrate assertions at M00).
- **draft disposition**: ACCEPT→template-fold (verbatim ~12-line section + acceptance test; two empirical incidents; refresh node→Home).
- **launch relevance**: Ring-2
- **rationale**: Cheap high-value process discipline (1P-tier + load_secrets.sh misreads cost hours). "Cheap pre-flight" cluster.

#### idea_upstream_single_writer_lease_for_inventory.md
- **status now**: proposed (medium; target v8.0)
- **what**: single-writer-lease discipline for inventory/credential/identity edits (pre-flight session scan).
- **draft disposition**: ACCEPT→template-fold (3 additive changes: CLAUDE.md safety rule + AGENTS.md + skill pre-flight; codified locally at doctrine §8; refresh node→Home).
- **launch relevance**: Ring-2
- **rationale**: Prevents the M05 dual-session collision class. "Cheap pre-flight" cluster.

#### idea_upstream_askuserquestion_operator_resolution_discipline.md
- **status now**: proposed (medium)
- **what**: codify AskUserQuestion-as-operator-resolution discipline at standard level (governance doctrine).
- **draft disposition**: ACCEPT→template-fold (governance-doctrine section; stale origin ContextCompass→Context, but doctrine general; pairs with template_ratification_record).
- **launch relevance**: Ring-2
- **rationale**: Turns silent agent unilateral resolution into an operator-attested governance event.

#### idea_upstream_template_ratification_record.md
- **status now**: proposed (medium)
- **what**: author `template_ratification_record.md` (multi-ADR-at-once ratification ceremony).
- **draft disposition**: ACCEPT→template-fold (based on CC p4_ratification.md; stale origin but pattern general; lower urgency — wants a 3rd instance).
- **launch relevance**: post-launch
- **rationale**: Useful for future genesis campaigns' ratification ceremonies. Batch with askuserquestion (same CC review origin).

#### idea_upstream_readme_first_contact_pattern.md
- **status now**: proposed (medium)
- **what**: promote the README first-contact discipline (content-class taxonomy + persona-led structure + scan-affordance ToC) upstream.
- **draft disposition**: ACCEPT→template-fold (local `.github/README_STYLE_GUIDE.md` exists; ship a `readme_style_guide.md` to `.adna/what/docs/`; refresh stale vault names).
- **launch relevance**: Ring-2
- **rationale**: The standard's own README is already polished; this is fleet propagation. "Vault-portable UX layer" cluster.

#### idea_upstream_platform_spec_refresh.md
- **status now**: proposed
- **what**: refresh the stale Active-Platforms table in `spec_platform_ecosystem.md` (lists RareHarness/LatticeTerminal/LatticeAgent/Cmux/RareHarnessNeo as active) + the framework-spec III wrapper count (claims 6, ~15 live).
- **draft disposition**: ACCEPT→immediate-fix / mission (rebuild from STATE.md ground truth + add the software-deployment-graph cohort; aDNA.aDNA-owned).
- **launch relevance**: **Ring-1** (Top-12 #7)
- **rationale**: The launching standard's own ecosystem specs cite archived/renamed vaults — a credibility/correctness issue. Companion to terminal_harness_contract_reanchor.

#### idea_upstream_build_vaults_data_obsidian_emit.md
- **status now**: open (medium-high)
- **what**: add an Obsidian-artifact emit (`.canvas` + graph note) to the ADR-023 generator behind an opt-in flag.
- **draft disposition**: DEFER (owner: Hestia/Home; trigger: reconcile against v8.0 topology-canvas — Cornerstone triage already DEFERRED it to the Hearthstone lane; may be partly superseded).
- **launch relevance**: post-launch
- **rationale**: Opt-in, CI-fallback-safe (no site-build impact). Half exists (site-side vaults.json + mermaid).

#### idea_upstream_vault_card_edge_population.md
- **status now**: open (high)
- **what**: migrate the `network_edges.yaml` curated overlay (18 edges) into Home.aDNA vault-card relationship fields (execute ADR-033's retirement path).
- **draft disposition**: DEFER (owner: Hestia/Home + Rosetta; trigger: Hearthstone lane — Cornerstone triage = DEFERRED).
- **launch relevance**: post-launch
- **rationale**: The overlay renders 18 edges today (functional); this moves them to their durable home. Not net-new data.

#### idea_upstream_jupyterlab_theme_reads_branding_json.md
- **status now**: proposed (low)
- **what**: refactor `@latlab/theme-latlab-dark` to read `~/.latlab/branding.json` (multi-tenant Lab branding).
- **draft disposition**: DEFER (owner: Lab.aDNA/Galileo + latlab; trigger: first non-purple partner Lab deployment).
- **launch relevance**: post-launch
- **rationale**: A latlab/Lab.aDNA product-surface item filed here; canonical purple works; only matters for partner deployments. Stale refs (LatticeNetwork→Network).

#### idea_iii_code_domain_pack_subsumes_simplify.md
- **status now**: proposed (low)
- **what**: advisory to III — add a `code_simplification` INSPECT pack subsuming `/simplify` heuristics.
- **draft disposition**: DEFER→III (owner: III.aDNA/Argus; trigger: III roadmap discretion) — or relocate to `III.aDNA/how/backlog/` (the file itself suggests this).
- **launch relevance**: post-launch
- **rationale**: Advisory only; origin ContextCompass is archived→Context. Not aDNA.aDNA's to execute.

#### idea_v8_p6_propagation_airlock_streamlined.md
- **status now**: active
- **what**: composite 45→75-cell placeholder for v8 P6 propagation of airlock-streamlined + modular-III primitives across 5 consumer wrappers.
- **draft disposition**: DECLINE-stale (tied to the superseded STR v8-P6 cycle + renamed/merged wrappers: SiteForge→Astro, VideoForge→Videos, CanvasForge→merged-Canvas, LPWhitepaper→merged-LatticeProtocol; the "airlock" III-federation mechanism's status is uncertain post-Feedback-Loop).
- **launch relevance**: post-launch
- **rationale**: STR is closed; v8 shipped via Hearthstone. If the airlock primitives still warrant propagation, re-derive against current names + skill_template_release — do not execute this matrix. Flag to III.aDNA/Argus if airlock is still live.

---

### Cluster E — Governance / process discipline

#### idea_campaign_reopen_reconciliation_protocol.md
- **status now**: proposed (medium; created 2026-07-01)
- **what**: reopen-reconciliation protocol — diff a dormant campaign's terminal target vs the release CHANGELOG before resuming (candidate `how/campaigns/AGENTS.md` §reopen touch).
- **draft disposition**: ACCEPT→template-fold / immediate-fix (a §reopen clause in `how/campaigns/AGENTS.md` OR a small `skill_campaign_reopen_reconciliation`).
- **launch relevance**: **Ring-1** (Top-12 #9)
- **rationale**: Fresh, well-specified, and directly relevant to the pre-launch campaign churn (STR's reopen produced exactly this lesson — a 60-80-session resume collapsed to a ~2-session closeout). Cheap, aDNA.aDNA-owned.

#### idea_upstream_self_reference_exemption.md
- **status now**: open
- **what**: amend Rosetta SO#8 (self-reference mandatory) to admit a documented-exemption branch for concepts that don't apply to a docs/standard vault.
- **draft disposition**: ACCEPT→immediate-fix (amend SO#8 + `skill_self_reference_check`; aDNA.aDNA-owned governance edit).
- **launch relevance**: Ring-2
- **rationale**: A real doctrine gap surfaced by feedback_loop M2. Low blast radius.

#### idea_cross_vault_coord_stewardship.md
- **status now**: open (medium)
- **what**: detection mechanism for inbound cross-vault coord memos (ack-debt risk); hook + AGENTS.md scan-on-entry.
- **draft disposition**: DEFER (owner: Rosetta + Home/Hestia; trigger: 3rd instance / process review) — Home already shipped a node-local interim detector (skill_node_health_check S14). Reroute stale `campaign_adna_serious_tool_readiness` (closed).
- **launch relevance**: Ring-2
- **rationale**: Pattern-graduation rubric wants 3 instances (had 2; the peer `b2f0709` Berthier inbound is arguably a 3rd). Stale STR routing; references LatticeAgent/LatticeNetwork.

#### idea_campaign_operator_interaction_patterns_unification.md
- **status now**: planned (P1)
- **what**: "Operation Concord" — unify operator-interaction patterns (CLI/dialog/AskUserQuestion/Canvas/terminal-sidebar/web) into one doctrine.
- **draft disposition**: DEFER (owner: Rosetta/operator, high bar; trigger: post-launch) — **partially discharged** (the web-gate leg shipped as ISS); refs badly stale (CanvasForge→Canvas, LatticeTerminal/LatticeAgent archived, node→Home, LatticeNetwork→Network).
- **launch relevance**: post-launch
- **rationale**: Big multi-session P1 campaign; entry-trigger vaults are archived/renamed. Needs a full re-scope. The ISS work already delivered its web-gate portion.

#### idea_interactive_decision_surface.md
- **status now**: proposed (medium-high)
- **what**: agent-authored web forms for heavy operator-gate interactions (aDNA-core skill + optional SiteForge skin).
- **draft disposition**: ALREADY-DISCHARGED (shipped as the **ISS system**: `skill_create_iss` + ADR-028/029, workspace Standing Rule 8; iss wrappers live).
- **launch relevance**: post-launch
- **rationale**: Status "proposed" is a status-lie — the pattern shipped. Stale STR routing.

#### idea_operator_web_gate_ui_pattern.md
- **status now**: proposed (medium)
- **what**: agent-generated standalone HTML decision-gate UI (OIP-Web); MoleculeForge live demo.
- **draft disposition**: ALREADY-DISCHARGED (same ISS system as interactive_decision_surface).
- **launch relevance**: post-launch
- **rationale**: Sibling of the above; ISS is the standardized web-gate. Stale (STR closed; MoleculeForge→Molecules).

#### idea_deferred_session_coord_frontmatter_backfill.md
- **status now**: completed
- **what**: backfill non-status base-6 fields into ~150 historical session + coord records.
- **draft disposition**: ALREADY-DISCHARGED (RESOLVED 2026-06-30; 148 records backfilled; `adna_validate` 293→0 exit 0).
- **launch relevance**: post-launch (done)
- **rationale**: Body + session memory confirm. Clean.

#### idea_pattern_graduation_skill_authoring.md
- **status now**: completed
- **what**: author the 3 graduation-ready pattern skills (cross-skill composition / forward-reference stub / substrate-inversion-with-ADR).
- **draft disposition**: ALREADY-DISCHARGED (RESOLVED 2026-06-30; all 3 authored; inventory 45→48; validator zero-drift). 2 seeds remain at 1/3 (tracked elsewhere).
- **launch relevance**: post-launch (done)
- **rationale**: All 3 skills present in CLAUDE.md inventory. Clean.

#### idea_iii_campaign_pattern.md
- **status now**: graduating
- **what**: the "III campaign" pattern (strategic-scale III that builds its own driving context/personas).
- **draft disposition**: DEFER→III (owner: III.aDNA/Argus; trigger: Argus opens `campaign_h`) — handed off via coord memo; the aDNA.aDNA-side work (Looking Glass pilot + pattern packet) is done.
- **launch relevance**: post-launch
- **rationale**: Ball is in III's court; closes when III opens the campaign. Looking Glass is COMPLETE.

---

### Cluster F — Other (cross-vault reconciliation / brand-vault seeds)

#### idea_awsbootstrap_lighthouse_cohort_reconciliation.md
- **status now**: graduating
- **what**: reconcile AWSBootstrap ↔ Lighthouse ↔ the `<Software>.aDNA` cohort (three-layer split ADR).
- **draft disposition**: ALREADY-DISCHARGED (authored as ADR-043; **ADR-043 accepted 2026-06-30** per session memory; closes when ADR-043 accepted).
- **launch relevance**: post-launch
- **rationale**: Status "graduating" lags — ADR-043 is accepted (co-sign from Hestia + Lighthouse-P0 still pending → seams non-operative, but the idea itself closes). Flip to closed.

#### idea_keystone_existing_graph_retrofit.md
- **status now**: proposed (campaign_keystone)
- **what**: retrofit existing software-surface Platforms (Lab/Harness/ComfyUI/Obsidian/Terminal/Warp/Spacemacs) with the 4 deployment-graph wrappers.
- **draft disposition**: DEFER (owner: operator + per-vault personas; trigger: operator greenlight per vault; Lab arm gated on Lab M-L13.6 deploy).
- **launch relevance**: post-launch
- **rationale**: Cross-vault fleet standardization; enumeration-only (staged coord memos, no batch-write). Keystone core is complete; this is follow-on.

#### idea_telemetry_wrapper_rollout.md
- **status now**: open (campaign_feedback_loop)
- **what**: `feedback/` wrapper rollout sequencing across the deployment-graph cohort (SEED via template, ENRICH via skill).
- **draft disposition**: DEFER (owner: per-vault personas + Keystone; trigger: per-graph genesis/enrich missions; prove on Lab first).
- **launch relevance**: post-launch
- **rationale**: campaign_feedback_loop is CLOSED; this is the cross-vault adoption tracker (no write into other vaults from this backlog). Complementary to keystone_retrofit.

#### idea_campaign_visualdna_adna_framework.md
- **status now**: stub_bootstrapped_awaiting_pilot_aar_then_activation
- **what**: seed for forking `VisualDNA.aDNA` as a Framework.aDNA (visual-DNA-per-entity standard).
- **draft disposition**: ALREADY-DISCHARGED (VisualDNA.aDNA is a **live vault, Pygmalion, 6 consumer wrappers, genesis P3-closed** per workspace CLAUDE.md — the seed was activated well past genesis).
- **launch relevance**: post-launch
- **rationale**: Status field is a status-lie ("awaiting activation" — it's activated and mature). Close the seed.

#### idea_iss_hestia_persona_token.md
- **status now**: open (low)
- **what**: add `persona_hestia.css` to the ISS token set (currently uses `tokyo` fallback).
- **draft disposition**: DEFER (owner: Astro.aDNA persona; trigger: operator greenlight / when Home needs native hestia ISS).
- **launch relevance**: post-launch
- **rationale**: Small cross-vault ISS enhancement; refs stale (SiteForge→Astro, node→Home). Low.

#### idea_sis_sentinel_naming_doc_fix.md
- **status now**: open (low; docs)
- **what**: SIS sentinel filename doc mismatch (docs say `<gate>.html.pending`, runtime writes `<gate>.pending`).
- **draft disposition**: DEFER→Astro/Home (owner: Astro.aDNA + Home siteforge wrapper; trigger: opportunistic) — a 1-line doc fix in ANOTHER vault, not aDNA.aDNA.
- **launch relevance**: post-launch
- **rationale**: Trivial doc fix; refs stale (SiteForge→Astro, node→Home). Not aDNA.aDNA-owned.

#### idea_terminal_harness_contract_reanchor.md
- **status now**: proposed
- **what**: re-anchor `spec_terminal_harness_contract.md` clause sources → rehomed Harness.aDNA paths; refresh §7 adoption table to post-consolidation names; optionally ratify ADR-027.
- **draft disposition**: ACCEPT→immediate-fix (path-only re-anchor, SHAs unchanged, SO-7 archive pointers retained; aDNA.aDNA owns the edit) + bundle ADR-027 ratification (see stale-ADR section).
- **launch relevance**: **Ring-1** (Top-12 #6)
- **rationale**: The standard's 5th ecosystem spec cites ARCHIVED vaults (LatticeTerminal/LatticeAgent) — the ecosystem's own precedent forbids this. Terminal×Harness co-development is live (Operation Gateway). Well-specified.

#### idea_upstream_latticehome_rename_pattern.md
- **status now**: filed (informational)
- **what**: document the node→LatticeHome rename pattern upstream; recommends `project_name = LatticeHome` as the v8.0+ default.
- **draft disposition**: DECLINE-stale / SUPERSEDED (the "LatticeHome" name it promotes was itself reverted to **"Home"** on 2026-06-11; recommendation is now actively WRONG). The general rename-doctrine value is better captured by `graph_rename_recipe` + `node_vault_bare_role_rename` (RESOLVED).
- **launch relevance**: post-launch
- **rationale**: Contradiction: recommends LatticeHome, but Home is canonical (workspace CLAUDE.md: "corrected LatticeHome → Home 2026-06-11 — the stale value forked a misnamed LatticeHome.aDNA/ on fresh nodes"). OBE.

---

## 3. Stale-ADR adjudication (3 ADRs at `status: proposed`)

#### adr_003_system_configuration_as_context_topic.md (proposed since 2026-03-27, agent_aria)
- **draft disposition**: **RATIFY** (flip proposed→accepted).
- **rationale**: The decision is fully implemented and stable for ~15 months — `what/context/claude_code/` exists, `governance_agent_protocol.md` + `skill_orchestration_tiers` + `skill_sqlite_persistence` all exist (in the CLAUDE.md skills inventory), and the `claude_code.lattice.yaml` context_graph shipped. Leaving it "proposed" is a bookkeeping lag, not a live question; nothing depends on re-opening it.

#### adr_012_ecosystem_spec_extraction.md (proposed since 2026-05-20, 3 co-signers)
- **draft disposition**: **RATIFY** (flip proposed→accepted).
- **rationale**: Implemented and already co-signed by Hestia + Rosetta + Berthier — all four extracted specs (`spec_forge_ecosystem` / `spec_platform_ecosystem` / `spec_framework_ecosystem` / `spec_org_pattern_ecosystem`) exist and are cited fleet-wide; the router carries the pointer stubs. Co-signers + shipped decision = de-facto ratified; just close it.

#### adr_027_terminal_harness_contract_canonicalization.md (proposed since 2026-05-25)
- **draft disposition**: **RATIFY-WITH-REFRESH** (bundle with `idea_terminal_harness_contract_reanchor`; refresh archived-vault names in the ADR + co-signed spec, then accept).
- **rationale**: The decision is architecturally sound and still needed (multi-terminal generalization + arms-length process-isolation license stance for live Terminal×Harness co-dev), but the ADR body names pre-consolidation vaults (LatticeTerminal/LatticeAgent archived; Cmux→Terminal; RareHarnessNeo→Harness). The reanchor idea itself offers ratification as a bundle option ("ratification closes their Open Item #1s in one stroke"). Do the path-only re-anchor first/with, then ratify — not a bare accept.

---

## 4. Top 12 for Ring-1 (launch-critical spine, ranked)

1. **idea_upstream_public_projection_sanitizer** — harden the ADR-023 generator's private→public boundary to ALL projected fields; a regression republishes private client data on the LIVE site. aDNA.aDNA-owned. (mission)
2. **idea_upstream_install_script** (verify) — confirm the README ↔ adna.network install command agree under the clone-and-run image; the literal first command a new user runs. (verification)
3. **idea_demo_gif** — record + embed the 30-sec onboarding GIF in the root README; the GitHub first-contact at a public launch. (mission)
4. **idea_upstream_obsidian_payload_doc_refresh** — sweep `.adna/.obsidian` docs to the canonical 14-plugin roster (phantom plugins / orphan id / wrong counts); a new-user-facing template-doc defect, explicitly not-yet-shipped. (template-fold)
5. **idea_upstream_per_class_frontmatter_profiles** — the named remaining upstream fold (ADR-044 §7.2/§5.5 + validator parity); makes every fork pass its own conformance. (template-fold)
6. **idea_terminal_harness_contract_reanchor (+ADR-027)** — the standard's 5th ecosystem spec cites ARCHIVED vaults; standard-integrity for a launching standard. (immediate-fix + ratify)
7. **idea_upstream_platform_spec_refresh** — `spec_platform_ecosystem` + framework wrapper count cite archived/stale vaults; standard-integrity. (immediate-fix)
8. **idea_campaign_reopen_reconciliation_protocol** — cheap process discipline directly relevant to pre-launch campaign churn (prevents wasted stale-plan resumes). (§reopen fold)
9. **idea_custom_logo** — favicon + GitHub social-preview image; launch shareability when the public link is posted. (mission; batch with text_banner_variants)
10. **idea_deploy_cadence** (drift-guard sub-item) — verify the live-matches-HEAD vault-count/version drift guard is wired before launch (the rest is ratified). (verification)
11. **idea_upstream_home_claude_template + idea_upstream_router_node_vault_detection** — verify the Hearthstone fresh-node Home-bootstrap governance/offer actually materialized to `.adna/`. (template-fold verify)
12. **idea_plugin_trimming** (re-eval) — clone weight / first-open; re-derive the essential plugin set against the batteries-included seed investment (flag the trim-vs-UX tension before cutting). (mission)

> Ring-1 count in the header (9) reflects the strict launch-critical items; the Top-12 spine additionally pulls in three high-value Ring-2 items (#9 custom_logo, #11 Home-bootstrap verify, #12 plugin_trimming) that an operator would reasonably want inside the launch window.
