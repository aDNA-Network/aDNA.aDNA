---
type: roadmap
title: "aDNA vNext roadmap — v8.9 governance batch vs v2.6 standard window"
owner: stanley
persona: rosetta
status: accepted        # RATIFIED at Refit G2 / DP9 (2026-07-24, Stanley) — v8.9 batch = successor release queue; surface_composition_graph = v2.6 candidate (charted, not built); stub materialized. Record: ratification_record_refit_g2.md
campaign_id: campaign_refit
campaign_phase: 3
mission_id: mission_refit_5_vnext_triage
created: 2026-07-24
updated: 2026-07-24
last_edited_by: agent_rosetta
tags: [roadmap, vnext, v8_9, v2_6, governance, standard, triage, refit, release_planning]
---

# aDNA vNext roadmap — the chart for the next release

**One sentence:** the ~30 open improvement ideas in [[mission_refit_5_vnext_triage|this vault's backlog]] have been
read and sorted into three buckets — *ship next as a governance release (v8.9)*, *hold for a normative standard window
(v2.6)*, or *deferred with a named trigger* — so the next release fires from a plan instead of a pile.

> **Plain-language version (for a newcomer):** aDNA ships in two kinds of updates. A **governance release** (like
> v8.6/8.7/8.8) improves the *template, skills, and doctrine* every vault inherits — it changes how the standard is
> *packaged and taught*, but not the standard's own rules, so its version number moves (8.8 → 8.9) while the
> **standard** number stays put (v2.5). A **standard window** (a v2.5 → v2.6 bump) is the rarer, heavier kind: it
> changes a *normative rule* — a new entity type, a base-ontology change, a conformance requirement — the things a
> vault must obey to *be* aDNA. This roadmap decides which improvements go in which kind. Most go in the governance
> release; only two touch the standard itself, and neither is being built yet.

> **✅ RATIFIED at Refit G2 / DP9 (2026-07-24, Stanley):** "Ratify all as recommended" — the v8.9 governance batch is
> the accepted successor release queue; the `surface_composition_graph` subtype is slotted **v2.6-candidate (charted,
> not built)**; the successor campaign is materialized at `how/campaigns/campaign_v8_9_release/` (`status: planned`).
> Record: [[ratification_record_refit_g2]]. *(Original authoring note, preserved:)*
>
> **Status discipline (self-reference, SO-8):** this document was authored `status: proposed`. It is a *chart*, not a ruling —
> exactly the pattern the vault's own [[ratification_record_refit_g1|G1 ceremony record]] models: agents author, the
> operator ratifies (§7.7). Every disposition below ratifies at **G2 / DP9**; until then, no item here is committed,
> and **no normative surface ships in Operation Refit** (standard stays v2.5, governance stays 8.8). The successor
> release campaign — [[stub_campaign_v8_9_release|`campaign_v8_9_release`]] — is *seeded* here and *fired later* via
> `skill_template_release`, per the v8.6/8.7/8.8 lineage.

## The split, in one table

| Bucket | What it means | Version effect | Count |
|--------|---------------|----------------|-------|
| **v8.9 governance** | Template / skills / doctrine only — how the standard is packaged & taught | governance **8.8 → 8.9**; standard **v2.5 unchanged** | 7 items |
| **v2.6 standard window** | Normative — a rule a vault must obey to *be* aDNA | standard **v2.5 → v2.6** (a future window; NOT opened here) | 2 candidates |
| **Closed-as-shipped** | Already delivered in a prior release; backlog just hadn't caught up | — | 2 items |
| **Deferred-with-trigger** | Real, but not this release; each names the event that reactivates it | — | 21 items |

---

## v8.9 governance batch — the ship-next queue

Governance-layer only: no normative schema, ontology, or conformance change, so it ships as its own release campaign
with **governance 8.8 → 8.9, standard v2.5 held** (the v8.6/8.7/8.8 precedent exactly). Sequenced by weight —
the anchor first, then the cheap doctrine/authoring touches, then the release-process hardening.

| # | Item | Ships as | Source idea | Evidence | Est |
|---|------|----------|-------------|----------|-----|
| 1 | **STATE.md graduation doctrine** *(ANCHOR — priority HIGH)* | new `skill_state_graduation` (**+1 skill**) · template `STATE_history.md` seed + `state_history:` pointer · S-series **>100 KB auto-graduate tripwire** in the base health check · frontmatter-as-a-graduation-class (5 faces) · CHANGELOG variant rides same | [[idea_upstream_state_history_graduation]] | Clear Hearth: 19 files / 17 vaults, **5.2 MB → 968 KB**, byte-exact loss-checked; compaction-without-guard re-bloats (Home 73 KB → 348 KB / month); this vault's own `STATE.md` refuses Reads at ~60 KB | ~1 mission |
| 2 | **STATE-convention family** | `mission:` frontmatter key (3rd sibling to the shipped `phase:`/`campaigns:`) + the `P<n>[/<count>]` phase-display grammar + `+adna-normalize-phase` render convention — authoring guidance in the base CLAUDE.md/STATE seed | [[idea_upstream_mission_frontmatter_key]] · [[idea_upstream_phase_display_grammar]] | `mission:` verified ABSENT in `.adna/STATE.md` (genuine gap); grammar live on Emacs.aDNA since Camera Lucida M-CL6; C-009 measured the bare-numeral ambiguity | ~small |
| 3 | **Path-convention doctrine** | doctrine line in `.adna/CLAUDE.md` (`~/aDNA/` in prose · absolute in execution) + optional S-series probe | [[idea_upstream_path_convention_doctrine]] | Clear Hearth P0: ~18% nonconforming (2,917 abs / 13,021 tilde); absolute prose paths *hide* dangling refs (6+ found) | ~small |
| 4 | **Fork-kit AGENTS enforcement** | `skill_project_fork` 4-file-kit completion gate + AGENTS.md seed (`agent_init`) + genesis-stub carve-out + census hook | [[idea_upstream_fork_kit_agents_enforcement]] | Clear Hearth: **26/73 vaults lacked AGENTS.md** (10 active); same-era forks diverged by path, not policy; Wave E hand-backfilled 10 | ~small |
| 5 | **Codename-collision authoring note** | "grep the codename before setting it" note in order/campaign templates | [[idea_upstream_codename_collision_grep_order_templates]] | M1-routed; low-risk template touch | ~trivial |
| 6 | **Release-process leak hardening** | codify the full outbound link/path grep + dev-vault-name scan into `skill_template_release`'s DE-LINK step | [[idea_upstream_dev_vault_name_leak_sweep]] | the v8.5 near-miss (21 private wikilinks nearly shipped); reinforces Refit hard-constraint 5 | ~small |
| 7 | **`compliance_checker.py` hardening** | output hygiene + content-type scoring + runtime-dep note on the base template tool | [[idea_tool_compliance_checker_hardening]] | dev-tool quality; bundles with the `adna_validate` tooling lane | ~small |

**Count impact:** **+1 skill** (`skill_state_graduation`, 32 → 33); possibly **+1 template** (the `STATE_history.md`
seed) — confirmed at release-authoring time. Items 2–7 are convention/doctrine/skill-hardening with no count bump.

**Sequencing:** the batch is one release campaign, but item 1 (the graduation doctrine) is the load-bearing piece and
should be authored + self-reviewed first; items 2–5 are cheap authoring touches that can co-land; items 6–7 harden the
release/tooling machinery and can land last. Rough total: **~1 authoring mission + a release-fire mission** (the
v8.7/v8.8 shape).

---

## v2.6 standard window — normative candidates (charted, NOT opened)

These touch a **normative rule** — the standard's own version must move (v2.5 → v2.6). **Neither is being built in
Operation Refit** (hard-constraint 3); both are charted here as *candidates* for a future standard window, and the
operator rules their slotting at G2.

| Candidate | Why it's normative | Fixed fact / status | Promotion trigger |
|-----------|--------------------|--------------------|-------------------|
| **The `task` entity** (Operations' coordination category) | Adds a base entity type / coordination category — a base-ontology change every conformant vault would reckon with | **G1/DP2 (fixed): "candidate for the v2.6 standard window; NOT in motion for v8.9 or any near-term governance batch — re-card M44."** The B1 memo transmits this to Operations (M1). This roadmap may *refine* (candidate → committed/declined) but must **never contradict** the transmitted answer without a follow-up memo (G1 §3 no-contradiction invariant). | Operations' `task` ontology stabilizes + the operator opens a v2.6 window |
| **`surface_composition_graph` Platform subtype** | Mints a new ecosystem-taxonomy subtype (same normative class as `software_deployment_graph` / ADR-037) | proposed; the ADR text can be *authored* dev-side anytime (an aDNA.aDNA decision), but the subtype becomes normative only when the ecosystem taxonomy updates | Dashboards.aDNA reference instance matures enough to anchor the coinage | 
| — source: [[idea_surface_composition_graph_subtype_adr]] | | | |

---

## Closed-as-shipped (backlog reconciliation — factual, no G2 decision)

Both already delivered in a prior release; the backlog simply hadn't been marked. Flipped `proposed → resolved` this
session (truth-restoration, not a ruling):

- [[idea_upstream_state_frontmatter_phase_campaign_keys]] — the `phase:`/`campaigns:` STATE keys **shipped at v8.7**
  (item 2); verified live in `.adna/STATE.md`. (Its `mission:` extension carries forward — v8.9 item 2 above.)
- [[idea_upstream_visual_inspection_doctrine]] — the headless-first visual-inspection doctrine **shipped at v8.7**
  (item 5); verified live in `.adna/CLAUDE.md` §"Visual inspection (headless-first)."

---

## Deferred-with-trigger (real, but not this release)

Defer-with-trigger is a first-class disposition — each names the event that reactivates it and an owner, so nothing is
silently dropped. **Proposed defers (were `proposed`, disposition = defer):**

| Idea | Trigger | Owner |
|------|---------|-------|
| [[idea_upstream_node_manifest_interview_emission]] | Home ratifies ADR-006 (node_manifest v0) + Hestia hands off the shape | Hestia → Rosetta |
| [[idea_fleet_pattern_agentic_dashboard_surface]] | Rosetta's own tempo (dev-side pattern mint; ships nothing normative) | Rosetta |
| [[idea_campaign_execution_automation]] | operator opens a dedicated campaign-execution-automation initiative (own campaign) | operator + Rosetta |

**Confirmed defers (already `deferred`; light-sweep reaffirmed + trigger/owner assigned):** 18 ideas —
`campaign_operator_interaction_patterns_unification` (OIP campaign) · `cross_vault_coord_stewardship` (ack-debt
acute; the ADR-022 lesson) · `default_terminal_harness_standard_touch` (operator-gated) · `diagram_missions_herb`
(Herb) · `fleet_defects_retro_cleanup` (Drydock M03 arms) · `iii_campaign_pattern` + `iii_code_domain_pack_subsumes_simplify`
(III.aDNA) · `iss_hestia_persona_token` + `sis_sentinel_naming_doc_fix` (RemoteControl/ISS) ·
`keystone_existing_graph_retrofit` (Lighthouse cohort) · `plugin_trimming` (Obsidian.aDNA) · `startup_optimization`
(this vault) · `telemetry_wrapper_rollout` (deployment-graph cohort) · `upstream_build_vaults_data_obsidian_emit`
(ADR-023 generator) · `upstream_jupyterlab_theme_reads_branding_json` (Jupyter.aDNA) ·
[[idea_upstream_vault_card_edge_population]] (**feeds Refit M6 E2** — vault-graph edge enrichment) · `vaults_graph_ssr`
(A-06 site follow-on) · `visual_regression_gate` (gate-suite hardening). Full trigger/owner stamps in each file.

---

## What v8.9 explicitly does NOT carry

Naming the exclusions is half the value of a roadmap — it stops scope creep at release-authoring time:

- **No normative / standard change.** The `task` entity and the `surface_composition_graph` subtype are v2.6
  candidates, not v8.9 cargo. v8.9 moves governance 8.8 → 8.9; the standard stays v2.5.
- **No node_manifest fork-emission** — gated on Home's ADR-006 (not ours to ship until Hestia hands off the shape).
- **Neither Storyweave in-person deferred item** — the hero-letterbox re-cut and the R1 demo screencast are
  operator-held dev-rel work (Refit hard-constraint 2); they do not enter a template release.
- **No campaign-execution runner** — that is its own campaign, far larger than a release batch.
- **None of the 18 cross-vault / site follow-ons** — each is owned elsewhere or triggers on a different vault's work.

---

## The G2 ask (DP9)

At G2 the operator rules **DP9**: (a) ratify the **v8.9 governance batch** (items 1–7) as the successor release
queue; (b) confirm the **v2.6 candidates** stay *candidates* (charted, not opened) — or elect to open a v2.6 window;
(c) rule any per-idea escalation (the `surface_composition_graph` subtype slotting is the one genuine judgment call);
(d) approve seeding the stub [[stub_campaign_v8_9_release]] on disk at `status: planned`. On sign, the stub directory
`how/campaigns/campaign_v8_9_release/` is materialized and Refit advances to P4 (M6 dev-readiness).

## Provenance

Authored at Refit **M5 vNext triage** ([[mission_refit_5_vnext_triage]]), P3 Chart, against the G1-ratified rulings
([[ratification_record_refit_g1]] — esp. DP2's task-entity fixed fact). All 32 open backlog ideas carry a dated
`## Disposition — Refit M5` stamp; this roadmap is their synthesis. Ratifies at G2 / DP9. Successor:
[[stub_campaign_v8_9_release]].
