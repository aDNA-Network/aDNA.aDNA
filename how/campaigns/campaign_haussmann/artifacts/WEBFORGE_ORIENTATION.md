---
type: artifact
artifact_type: orientation_note
campaign_id: campaign_haussmann
title: "HAUSSMANN Phase A.1 — host-vault orientation: schema extracted, conventions recorded, gaps listed"
created: 2026-08-16
updated: 2026-08-16
status: active
last_edited_by: agent_rosetta
agent_authored: true
tags: [haussmann, orientation, phase_a, schema, conventions]
---

# WEBFORGE_ORIENTATION — Phase A.1 working note

> **Provenance**: every claim here is `[D]` — extracted by direct read of the named files during the
> genesis planning pass, 2026-08-16. Directive reference: [[COWORK_DIRECTIVE_operation_haussmann_genesis]]
> §3 A.1. Filename kept in the directive's own casing for traceability; vault naming convention
> (lowercase underscores) governs all *new* artifacts this campaign creates.

## 1. Campaign file schema — extracted by example

Source exemplars: [[campaign_storyweave]] (build/refresh shape) + `campaign_website_adna.md` (quality-audit shape). A **rebuild** wants Storyweave's spine with website_adna's scorecard + named-deliverable discipline.

- **Directory**: `how/campaigns/campaign_<name>/` containing `campaign_<name>.md` (charter) · `CLAUDE.md` (campaign promoter/governance) · `missions/` · `artifacts/` (+ this campaign adds `directives/` + `evidence/`).
- **Charter frontmatter** (union of both exemplars): `campaign_id · type: campaign · title · owner · persona · status · phase_count · mission_count · estimated_sessions · calibrated_sessions · estimation_class (content-novel for this campaign) · executor_tier (charter-altitude; rationale comment) · priority · target_site · predecessor_campaigns · activated · closed · created · updated · last_edited_by · tags`.
- **Ratification**: a §7.7 blockquote directly under the H1 — `Decision · Ratified-by (operator, never the agent) · Date · Status`. Charter is authored at `status: planning` with ratification `proposed`; only the operator flips it (Gate C).
- **Body sections**: Goal · Context · Scope {In / Out (routed/deferred) / Subsumes} · North-star + measurable success criteria · Phases & Missions (per-phase mission table + `**Phase exit gate (operator)**` line) · Decision Points (table `| # | When | Decision | Status |`) · Risk Register · Verification Strategy {per-mission / per-phase / campaign} · Timeline · Notes · Completion Summary · Campaign AAR.
- **Storyweave devices to reuse**: the **decade-framing blockquote** (Decade 1 committed / Decade 2 provisional, re-planned after a measure gate); design-spike missions producing interactive HTML comps; per-objective `⛩ operator` gates; re-plan artifacts (`p*_replan.md`) at measure gates.

## 2. Mission file schema — extracted by example

Source: the 11 Storyweave mission files (e.g. `mission_p5_2_craft_design_system.md`).

- **Frontmatter**: `plan_id: mission_* · type: plan · title · campaign · phase · decade · owner · status (with long inline close-comment: deploy ID, gate count, ranker, commit range, baton) · mission_class (enum freely extended: planning/build/design_spike/design_excellence) · executor_tier (+ rationale comment) · token_budget_estimated ("prose kT sentence", ADR-016) · created · last_edited_by · grounded_in · tags`.
- **HAUSSMANN additive fields** (directive §5 C.3, merged in): `vitruvius_dimensions: [] · webforge_patterns: [] · patterns_to_author: [] · depends_on: [] · blocks: [] · acceptance_criteria: [] · verification_method: · human_gate:`.
- **Body**: `> **Read cold.**` blockquote (persona + governance pointer) → Why this mission exists → Where we are (verified on disk DATE) → [Core decisions/axes] → Scope → **Objectives table** `| # | Objective | Output | Gate |` with `⛩ operator` marks → Constraints & gates → Definition of done (one dense paragraph) → Progress → AAR (SO#5: Worked/Didn't/Finding/Change/Follow-up + Token/tier line).
- Every mission **context-window-sized**; each also gets a paste-ready **session opening prompt** (directive C.3).

## 3. Session / git / governance conventions

- **Sessions**: Tier-1 default; Tier-2 (this session) adds `scope:` + `heartbeat:` + conflict scan. File in `how/sessions/active/` → on close `status: completed` → move to `how/sessions/history/2026-08/` (bucket created by this session — first August session in the vault).
- **Git**: pull at start; commit per artifact batch with **explicit paths** (never `git add -A` — Keystone shared-tree incident class); push + all outward actions operator-gated; gitleaks pre-push hook active.
- **ADRs**: agent authors at `status: proposed`; operator ratifies (template_ratification_record: "An agent MUST NOT unilaterally set accepted"). Numbering continues from ADR-047.
- **Budgets/tiers**: ADR-016 Clause A (`token_budget_estimated` mandatory) + Clause B (heavy-file offset reads ≥50 kT/200 KB — applies to WebForge's `module_registry.md` 84 KB + `known_weaknesses_register.md` 62 KB + aDNALabs STATE 377 KB). `executor_tier` per ADR-025 resolution chain.
- **Paths**: prose uses `~/aDNA/…`; machine-consumed fields use absolute (path doctrine, CLAUDE.md §Working with Content).
- **Visual work**: [[doctrine_visual_inspection]] T0→T1→T2 ladder; T0 `scripts/visual_capture.mjs` is the standing instrument; naming Chrome MCP as mandatory is a doctrine violation.

## 4. Gaps found (Phase A ledger — each becomes campaign work or a routed memo)

| # | Gap | Disposition |
|---|-----|-------------|
| G1 | **No `how/federation/webforge/` wrapper** — the site consumes zero WebForge patterns; aDNA.aDNA is an unregistered "straggler" (a class WebForge itself flags at LatticeProtocol). Directive rule: consumer-not-fork. | Campaign P0 mission (WebForge intake) |
| G2 | `template_campaign.md` lacks `executor_tier_default:` — open Berthier ask (`coord_2026_08_06_berthier_to_rosetta_campaign_template_tier_default.md`; 12/18 fleet campaigns render `⊘ refuse:no-tier`). | HAUSSMANN charter carries the field anyway; template ratification = separate Rosetta lane |
| G3 | Mission/plan naming blur (`plan_id:` on `mission_*` files) — accepted convention, not fixed here. | Follow convention as-is |
| G4 | No session opened in this vault since July (no `history/2026-08/`). | This session creates the bucket at close |
| G5 | No inbox-scan mechanism (Prometheus §0 finding: `dispatched` ≠ delivered; 131 memos, zero Context-originated ever arrived). | Noted for campaign coordination design; upstream idea exists in Network.aDNA |
| G6 | `who/governance/AGENTS.md` describes files that don't exist (`governance_roles.md` etc.). | Recorded; out of campaign scope |
| G7 | Berthier's memo cites `idea_docs_deploy_hardening` "open since 2026-06-10" — **file does not exist** in `how/backlog/`. | The P0 deploy-hardening mission becomes its record |
| G8 | STATE.md was ~3 weeks stale vs git (August = inbox-filing only). | Fixed by this session's genesis banner |

## 5. Reconciliation note — the Berthier 2026-08-11 ruling

`coord_2026_08_11_berthier_to_rosetta_site_build_wave.md` ruled **against** chartering a new review campaign ("what is missing is not analysis, it is a wave") and enumerated 6 open Storyweave findings + a deploy hazard. The operator's 2026-08-16 directive postdates it and governs. **HAUSSMANN absorbs rather than relitigates**: every wave item lands as a named P0/P1 mission (deploy hardening = P0 precondition; graph SSR = P1 flagship; jargon rewrite = last, per the memo's own sequencing); the charter carries an explicit reconciliation section; a courtesy memo to Berthier is staged at Phase C. The memo's analysis stands as evidence — it is cited, not redone.

## Related

[[campaign_storyweave]] · [[doctrine_visual_inspection]] · [[adr_016_context_budget]] · `campaign_haussmann/directives/` (both operator directives) · [[webforge_pattern_register]] (A.2 sibling) · [[dependency_map]] (A.3) · [[instrument_ingestion]] (A.4)
