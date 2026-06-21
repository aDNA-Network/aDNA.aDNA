---
type: mission
mission_id: mission_adna_str_p5_m513_e6_onboarding_install_portal
campaign: campaign_adna_serious_tool_readiness
phase: 5
mission_number: 5.13
decadal: E6   # inserted 2026-06-10 (operator-ratified at the audit-campaign P2 gate bundle); capstone renumbered E6→E7
slug: e6_onboarding_install_portal
created: 2026-06-10
updated: 2026-06-18   # SUBSUMED into campaign_website_adna (Phase 3 decadals) 2026-06-18; was planning (BUILD was to open at c170)
opens_at: 2026-06-10   # authored at the audit P2; BUILD opens at c170 (E5 close); O2 install-truth foundation pre-staged 2026-06-10 as the audit-P2 carry-down
status: subsumed
subsumed_by: campaign_website_adna   # Operator Decision 1, 2026-06-18 — E6 onboarding/install-portal work continues as WEBSITE.aDNA Phase 3 decadals; install_truth.json fixture carried as resolved input; WEBSITE closed GO 2026-06-21 (Decision 6) — E6 DELIVERED-via-WEBSITE (install-truth + /get-started)
estimated_sessions: 3-4
persona: rosetta
last_edited_by: agent_stanley
spec_completeness: full
mission_class: implementation   # enters site/ code + the prebuild data layer + the upstream template repo (via PR, never ~/aDNA/.adna)
verification_surface: build   # Astro build + gate suite (incl. NEW gate-12 install-truth) + Lighthouse + a literal fresh-machine install walkthrough + RLP
token_budget_estimated: "design (c170) ~40-70 kT; build cycles c171-178 ~80-200 kT each; c179 30-persona RLP Workflow ~400-520 kT (per E1/E4/E5 lens-Workflow spends)"
reviewer_lens_pass: true   # E6 takes a full RLP (cadence amended 2026-06-10: D17·E1·E3·E5·E6·E7-final); mandatory lenses: Newcomer · Conversion/Growth · Skeptical Senior Engineer · Framework Docs Expert · Community Lead
prerequisite_missions:
  - mission_adna_str_p5_m512_e5_public_good_commons   # E5 closes the c-counter at 169; E6 runs c170-179
  - mission_ana_p1_m1_decisive_strokes   # audit gap register #16 (install-truth drift) + #13 (search/newsletter) seed this mission
prerequisite_artifacts:
  - aDNA.aDNA/how/campaigns/campaign_adna_network_audit/missions/artifacts/aar_audit_p0_p1s1.md   # the gap register (final form) — rows #13/#16 route here
  - aDNA.aDNA/how/backlog/idea_upstream_onboarding_workspace_default_adna.md   # the canonical-flow truth source + upstream PR status
  - aDNA.aDNA/site/src/data/install_truth.json   # the install-truth fixture (pre-staged 2026-06-10)
  - aDNA.aDNA/what/design/front_page_doctrine.md
  - aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m57_eseries_ecosystem_theme_set.md   # E6 row + amended RLP cadence
tags: [mission, m5_13, e6, v8, p5, implementation, onboarding, install_portal, get_started, install_truth, funnel, conversion, reviewer_lens_pass, ecosystem_site, max_iii]
---

# Mission M5.13 / E6 — Onboarding & Install Portal

> **The conversion decadal:** the GitHub↔site install funnel made *true*, then made *delightful*. The audit
> (gap #16) found the live `/get-started` teaching an **invalid flow** — `git clone …/aDNA.git my-project && claude`
> lands in the template's own refused state (`role: template` → onboarding declined, no workspace router above
> it) — and three surfaces (upstream template README · vault README · site) disagreeing on the canonical flow.
> The truth fixes shipped at the audit P2 (2026-06-10, E6-O2 carry-down). E6 builds the rest: the portal deep
> treatment, the funnel that routes every audience page to it, on-site search, and the upstream follow-through —
> so that **"install your own aDNA workspace from GitHub or from adna.network" is a five-minute, zero-dead-end path.**
> Directly serves the operator north-star ([[project_adna_lattice_ux_goal]]): *an easy and fluid way to
> build/operate/utilize context graphs* — this is the front door to that.

## The canonical flow (the truth this mission defends)

```bash
mkdir -p ~/aDNA && cd ~/aDNA                                      # workspace root (post-Homecoming default)
git clone https://github.com/LatticeProtocol/aDNA.git .adna        # the standard, as a hidden template clone
cp .adna/how/templates/template_workspace_claude.md CLAUDE.md      # bootstrap the workspace router
claude                                                             # first run: onboarding scaffolds your first <name>.aDNA/ project
```

Single-sourced in `site/src/data/install_truth.json` (emitted by `scripts/build_install_truth.mjs` reading the
local `.adna` checkout, ADR-023 Clause-A semantics: CI falls back to the committed copy). **gate-12** asserts
every public surface renders these commands verbatim and rejects the legacy forms (`~/lattice`,
`Agentic-DNA.git`, `clone … my-project`).

## Objectives

1. **O1 — Stages 0–4 design spec** *(c170)*: portal IA (keep `/get-started` as the single canonical URL; add an `/install` alias/redirect), the GitHub↔site funnel map (README → site → first `claude` session → first vault → `/startup-first-hour`), per-OS treatment, troubleshooting register, search placement. Deliverable: `m513_e6_onboarding_install_portal_design_spec.md`. **Gate: operator Stage-0 sign-off.**
2. **O2 — Install-truth data layer** ✅ **PRE-STAGED 2026-06-10** (audit-P2 carry-down): `scripts/build_install_truth.mjs` + `site/src/data/install_truth.json` + **gate-12-install-truth** + `/get-started` + `/network` + vault `README.md` truth fixes, shipped via the operator-flagged credibility deploy. *(c171 verifies + extends: fixture fields for per-OS variants if O1 calls for them.)*
3. **O3 — Portal build** *(c172–173)*: `/get-started` deep treatment — copy-paste blocks per OS, troubleshooting Callouts, "what you'll have" outcome framing, hero band, the optional one-liner (documented inline, **no `install.sh`** — `curl|bash` contradicts the local-first trust posture; see `idea_upstream_install_script` for the upstream-candidate debate), Obsidian-optional path, `/install` alias.
4. **O4 — Upstream follow-through** *(c174)*: verify/merge the README-flip PR (filed 2026-06-10 from the audit P2; staging at `missions/artifacts/m513_upstream_pr_staging/`); reconcile `.adna`'s `setup.sh` story; upstream `skill_workspace_path_migration` + the one-liner candidate per `skill_upstream_contribution` (operator approval per filing). **Never edits `~/aDNA/.adna` locally** (workspace Standing Rule 1).
5. **O5 — Funnel III + search** *(c175–177)*: every audience page + home CTA routes to the portal (closing-CTA partials from E5 c163 reused); **on-site search ships or is explicitly deferred with evidence** (audit gap #13 routing: search → E6); newsletter/contact decision (single capture surface or explicit defer); docs cross-link sweep; **Participation-Scent** dimension pass on the whole funnel.
6. **O6 — Measure** *(c178)*: Lighthouse + full gate suite + light/dark + mobile on all funnel pages; **a literal fresh-machine install walkthrough** (clean VM or temp HOME) following only the public instructions — the funnel's end-to-end truth test.
7. **O7 — RLP + decadal close** *(c179)*: full 30-persona Reviewer Lens Pass (mandatory: **Newcomer · Conversion/Growth · Skeptical Senior Engineer · Framework Docs Expert · Community Lead**) with the fresh-install walkthrough as evidence; 11-section decadal AAR; STATE/STR close cascade; **close-deploy** per the deploy cadence (`idea_deploy_cadence` resolution: deploy at every decadal close).

## Hard constraints

- **Truth before delight:** no install instruction ships that gate-12 cannot verify against the template checkout. The fixture is the single source; pages render from it, never hardcode.
- **Zero dead ends:** every documented path must land a new user in a working state or a named troubleshooting branch. The O6 fresh-machine walkthrough is the arbiter.
- **Local-first trust posture:** no `curl|bash` installer; the one-liner is documented inline (auditable, zero remote execution). Honest about prerequisites (git, Claude Code, optionally Obsidian).
- **Upstream via PR only** — `~/aDNA/.adna` is never modified locally; staged artifacts + throwaway clone + `gh pr create` (mechanics: `m513_upstream_pr_staging/pr_mechanics.md`).
- **Doctrine compliance:** Tokyo-Night dark-first; reuse `DocumentationLayout`/`Callout`/`CodeBlock`/`TryInClaudeCode`/`HomeHero` patterns; AVOID register on all copy; existing hero/candidate assets only.
- Engine files unedited; archive-never-delete; rename nothing.

## Lightweight/decadal AAR (filled at decadal close)

> Full decadal AAR (11-section + §11 30-persona RLP): `aar_decadal_e6_onboarding_install_portal` (authored at c179).

- **Worked**: _(fill at close)_
- **Didn't**: _(fill at close)_
- **Finding**: _(fill at close)_
- **Change**: _(fill at close)_
- **Follow-up**: _(fill at close)_

## See also

- [[m57_eseries_ecosystem_theme_set]] — E6 row · amended RLP cadence · Track H
- [[aar_audit_p0_p1s1]] — the gap register (rows #13/#16 seed this mission)
- [[idea_upstream_onboarding_workspace_default_adna]] — canonical-flow truth source + PR vehicle
- [[idea_upstream_install_script]] · [[idea_upstream_skill_workspace_path_migration]] — upstream candidates this mission carries
- [[mission_adna_str_p5_m512_e5_public_good_commons]] — the preceding decadal (closes the c-counter at 169)
