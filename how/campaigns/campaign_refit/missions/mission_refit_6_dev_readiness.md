---
plan_id: mission_refit_6_dev_readiness
type: plan
title: "Refit M6 — Dev-readiness: contributor pathway complete (+ graph-edge stretch)"
owner: stanley
status: completed          # 2026-07-24 — E1 audit + dev-vault fills (live) + image-side staged; E2 cut+routed per operator; 371 gates green, zero drift
campaign_id: campaign_refit
campaign_phase: 4
campaign_mission_number: 6
mission_class: implementation
executor_tier: opus        # public-repo surfaces = highest blast radius in the campaign
token_budget_estimated: "~80 kT + 40 stretch (audit 3 surfaces · author CONTRIBUTING/process docs · stage image-side · E2 edge derivation)"
token_budget_actual: "~70 kT (E1 only; E2 cut per operator, so no stretch spend; 3 Explore agents + fills + gates)"
created: 2026-07-21
updated: 2026-07-24
last_edited_by: agent_rosetta
tags: [plan, campaign, refit, dev_readiness, contributing, community, graph_edges]
---

# Mission: Refit M6 — Dev-readiness

**Campaign**: [[campaign_refit]] · **Phase**: P4 — Ready · **Mission**: 6 of 6

## Goal

Close the "ready for development" gap: a would-be contributor arriving at either public repo
(`aDNA-Network/aDNA` image · `aDNA-Network/aDNA.aDNA` dev vault) or the site's community/get-started surfaces
finds a complete pathway — how to propose a change to the standard, how to contribute a vault/pattern/idea,
where discussion happens — with anything image-side staged DE-LINKed for the next release, never edited direct.

## Exit Gate

Contributor-pathway audit artifact complete (per-surface: present / gap / filled) + dev-vault-side gaps filled +
image-side fills staged DE-LINKed in `artifacts/` + site gates green if site surfaces changed + (stretch) E2
edges derived data-driven with gate-21/22 green — or E2 explicitly cut with a line of reasoning.

## Objectives

### 1. E1a — Audit the three surfaces
- **Status**: planned
- **Description**: Audit contributor-pathway coverage across: (a) `aDNA-Network/aDNA` (image repo — README,
  CONTRIBUTING?, issue templates?, change-proposal process?); (b) `aDNA-Network/aDNA.aDNA` (this repo's public
  mirror — same set); (c) the site (`/community`, `/get-started`, `/commons` — does any surface tell a
  developer HOW to propose a change to the standard? The upstream-contribution skill exists vault-side
  [[skill_upstream_contribution]] — is it surfaced publicly?). Produce the audit artifact with a per-surface
  verdict.
- **Files**: `how/campaigns/campaign_refit/artifacts/dev_readiness_audit.md`
- **Depends on**: none

### 2. E1b — Fill the gaps
- **Status**: planned
- **Description**: Dev-vault-side: author what's missing (e.g. `CONTRIBUTING.md` for `aDNA.aDNA`; a
  change-proposal ("propose an upstream idea") doc; site copy edits). **Image-side: staged DE-LINKed artifacts
  only** (hard constraint 5) — they ship via the successor release campaign. Site edits ride the gates
  (gate-24 copy; Movement-Skeptic honesty — no invented community).
- **Files**: `CONTRIBUTING.md` (dev vault) · site community/get-started surfaces · staged image-side artifacts
  in `artifacts/`
- **Depends on**: 1

### 3. E2 (stretch, per DP8) — Graph-edge enrichment
- **Status**: planned
- **Description**: Derive additional vault-graph edges from `federation_ref` blocks across the fleet in
  `scripts/build_vaults_data.mjs` (current graph: 14 edges / 73 vaults). **Data-driven only** (no hand-authored
  edges); regen; gate-21 + gate-22 (graph SSR) green; visual T0 spot-check of `/vaults/graph`. **First cut on
  overrun.**
- **Files**: `scripts/build_vaults_data.mjs` · `site/src/data/vaults.json` (+ graph siblings)
- **Depends on**: M2 complete (baseline @73)

## Campaign Context

**Previous mission outputs**: M2's @73 baseline; M5's roadmap (E1 docs should point contributors at the *real*
proposal channel the roadmap formalizes).
**Next mission inputs**: P5 close — this mission's audit artifact is the "ready for development" evidence row.

## Notes

Highest-blast-radius mission: public-repo surface changes stay staged-not-pushed; the push (and any deploy) is
a G3 operator election.

## Completion Summary

**Completed 2026-07-24 (opus, ~70 kT).** Contributor-pathway "ready for development" bar met dev-side + site-side;
image gap chartered as a release rider.

- **E1a audit** — `artifacts/dev_readiness_audit.md` (3-surface present/gap/filled verdict). Dev vault: complete
  apparatus but 3 self-created defects. Image: materially thinner (broken CONTRIBUTING promises). Site:
  get-started contributor dead-end.
- **E1b fills (dev-vault-side, live on G3 push):** (1) `CODE_OF_CONDUCT.md` (Contributor Covenant v2.1) — closes
  the CONTRIBUTING+VISION promise; (2) `.github/ISSUE_TEMPLATE/{bug_report,change_proposal,config}` — closes the
  404 + adds the standard-change-proposal intake mirroring `skill_upstream_contribution`; (3) repo-name fix in
  `skill_upstream_contribution.md` (`LatticeProtocol/Agentic-DNA` → `aDNA-Network/aDNA`, a gate-15 dead pattern);
  (4) site: `get-started.astro` "Ready to shape it" next-step (dead-end fixed) + `community/index.astro` CTA lead
  sharpened. Honest copy (Movement-Skeptic); no invented community.
- **E1b image-side (staged DE-LINKed):** `artifacts/image_side_dev_readiness_fills.md` — 5-item ship-set
  (CoC · issue templates · the skill · README Contributing · minimal ladder-referenced governance/community docs);
  candidate rider for `campaign_v8_9_release`; release cautions recorded (DE-LINK grep; CoC reporting-contact `#needs-human`).
- **E2 CUT + ROUTED** (operator ruling, DP8) → `idea_upstream_vault_card_edge_population` (the clean vault-card
  path over a fleet-walk hairball); reasoning recorded on the idea + the audit.
- **Gates:** `npm run test:gates` **371 passed** · `npx astro build` clean (202pp) · `adna_validate --governance`
  **zero drift** · no normative/image surface shipped (v2.5/8.8 hold) · no deploy (G3 election).

## AAR

*Mandatory before `status: completed` (SO-5). Include `token_budget_actual` (SO-11).*

- **Worked**: Three parallel Explore agents (contributor docs · site surfaces · E2 feasibility) mapped all three
  surfaces + the graph-edge mechanics in one pass, so the fills were precise and the E2 cut was evidence-based
  (150+ derivable edges vs the curated 14 — a real trade-off, not a guess). E2-cut-per-operator kept the mission
  at ~70 kT (under the 80 firm; no stretch spend).
- **Didn't**: Deliberately did NOT sweep the ~9 residual stale `LatticeProtocol/Agentic-DNA` refs in historical/
  quest/CHANGELOG files — out of the contributor-pathway scope; they belong to the deferred vault-wide currency
  sweep. Did not commit the +1-vault registry drift (below).
- **Finding**: **The site prebuild regenerated `vaults.json` to 74 vaults** (Home inventory drifted 73→74, a new
  org_graph, `source_inventory_sha` 59058a4→536e9d62) since M2 pinned 73. This is data-currency (M2's domain),
  NOT M6 scope — restored to 73 + rebuilt with `npx astro build` (skips the prebuild) to keep the mission clean.
  The drift is real and will recur → a follow-up regen is warranted. Also: CONTRIBUTING links its issue templates
  at the *image* repo, so closing that specific 404 is inherently image-side (staged), even though the templates
  are authored dev-side and serve the dev-vault repo too.
- **Change**: When a copy-only site mission triggers the prebuild, use `npx astro build` (not `npm run build`)
  after restoring generated data — the prebuild's Home-derived regen is out of scope for anything but a
  data-currency mission. (Extends the M2/Storyweave "restore date-churn" gotcha to "restore *any* out-of-scope
  regen.")
- **Follow-up**: (1) **Registry regen 73→74** — a future M2-style data-currency pass (new org_graph vault + G20
  claim-trace fixture). (2) Image-side ship-set rides `campaign_v8_9_release`. (3) CoC dedicated reporting-address
  `#needs-human`. Token actual ~70 kT (est 80+40; well under — E2 cut). `executor_tier: opus` held.
