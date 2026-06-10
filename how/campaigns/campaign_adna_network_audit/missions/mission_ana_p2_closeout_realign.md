---
mission_id: mission_ana_p2_closeout_realign
type: mission
title: "P2 — Wind-down / AAR + realign main campaign → resume E5"
campaign_id: campaign_adna_network_audit
phase: 2
mission_number: 2.1
slug: closeout_realign
status: completed
created: 2026-06-08
updated: 2026-06-10
closed_at: 2026-06-10
actual_sessions: 1
last_edited_by: agent_stanley
owner: stanley
persona: rosetta
mission_class: closeout
spec_completeness: complete
estimated_sessions: "1"
token_budget_estimated: "~60-100 kT (final AAR + realignment edits)"
prerequisite_missions: [mission_ana_p1_m1_decisive_strokes]
prerequisite_artifacts:
  - how/campaigns/campaign_adna_network_audit/missions/artifacts/audit_adna_network_2026_06.md
  - how/campaigns/campaign_adna_network_audit/missions/artifacts/aar_audit_p0_p1s1.md
tags: [mission, campaign_adna_network_audit, phase2, closeout, realign]
---

# P2 — Wind-down / AAR + realign main campaign

> Runs after P1 (S2/S3/S4). Closes the side campaign and hands control back to `campaign_adna_serious_tool_readiness` at E5. The mid-campaign AAR (`aar_audit_p0_p1s1.md`) already holds the gap register; P2 extends it to a **final** AAR (covering P1-S2/S3/S4) and executes the realign.

## Goal
Final campaign AAR + **realign the main campaign** so its remaining E5 work absorbs the audit's campaign-tier findings — then resume E5 at c162.

## Objectives
1. **Final campaign AAR** — extend `aar_audit_p0_p1s1.md` (or a closing AAR) to cover P1-S2/S3/S4; append the 5-line AAR to the campaign master; set campaign `status: completed`.
2. **Realign into E5 — the concrete C1–C5 → cycle map** (fold the campaign-tier redesign items into the remaining E5 cycles; edit `m512_e5_public_good_commons_design_spec.md` per-cycle objectives + the E5 mission):
   - **C4** closing-CTA partials + the deferred **Connect affordance** → **E5 c162** (already the connect-affordance cycle).
   - **C3** nav/orphan surfacing — `/commons` nav entry + audience pages + unify secondary nav + mobile SidebarNav disclosure → **E5 c164** (homepage §5 hand-off + nav entry).
   - **C1** home-hero **concrete-then-ethos** + How-it-Works promotion (surface the existing `/learn/what-is-adna`) → an **E5 homepage cycle** (slot in 164–168).
   - **C2** **terminology/object-model spine** (node/aDNA-computer/vault/network) → **E5 165–168** MAX-III copy pass.
   - **C5** ADR-010 Wilhelm co-sign clear → **coordinated HEAD deploy** of `/commons` + the accumulated fixes → **E5-close deploy (c169)**.
3. **Doctrine + process** — add a "credibility hygiene" note to `front_page_doctrine.md` if warranted (no internal/private state in public surfaces; canonical-link discipline); resolve the two backlog ideas (`idea_deploy_cadence` → establish a cadence; `idea_upstream_public_projection_sanitizer` → file upstream per `skill_upstream_contribution`).
4. **STATE + memory + resume handoff** — update the main vault `STATE.md` (record audit outcome + **lift the E5 pause**; heavy file — offset/limit edits), update memory ([[project_site_redesign_ss_ghibli]] + [[project_adna_network_audit]]), and confirm E5 is unpaused at **c162** with the carry-ins tracked in the design spec.

## Scope expansion (operator-ratified at the 2026-06-09/10 plan gate — executed with the base objectives)

The operator's portal directives ("comprehensive plans to III the website + docs + install flow; easy install from
GitHub + an install page on adna.network; improve the context-graph pages; add/improve missions") expanded P2 with:

5. **E6/M5.13 authoring** — new decadal `mission_adna_str_p5_m513_e6_onboarding_install_portal` (Onboarding &
   Install Portal, c170–179, full RLP); capstone renumbered **E6→E7**; theme set annotated (Track H row, cadence
   D17·E1·E3·E5·E6·E7-final, exit-gate amendment, cycle ledger).
6. **Cycle re-map** — c162 = **context-graph experience** (inserted; executes this session as the E5 resume);
   original c162–164 objectives shift right; MAX-III 4→3 cycles (P1-S3 pre-closed its sweep scope).
7. **Install-truth foundation (E6-O2 carry-down)** — `build_install_truth.mjs` + `install_truth.json` + gate-12 +
   `/get-started`/`/network`/README truth rewrites; ships via the cadence hotfix path (operator-flagged).
8. **Upstream PR** — README workspace-default flip staged (`m513_upstream_pr_staging/`) + filed against
   `LatticeProtocol/aDNA` from a throwaway clone (operator-authorized; `.adna/` untouched).
9. **Docs-III routing** — D16 carry-ins block (freshness sweep · gate-14 · print/PDF · link-graph crawl ·
   terminology conformance) annotated in the theme set; D16 mission file authors at its open (c180).

## Exit Gate (campaign close)
- [x] AAR filed (final form of `aar_audit_p0_p1s1.md`); campaign master Completion Summary + AAR filled; `status: completed`.
- [x] Main campaign STATE/spec/memory updated; E5 pause lifted; resume point unambiguous (c162, realigned design spec).
- [x] Any unshipped roadmap items tracked: gap register rows 1–18 all DONE / routed-with-owner / decided (zero orphans).

## Completion Summary
Executed 2026-06-10 in the combined P1-S3+P2 session. **O1:** gap-register AAR extended to FINAL (13/13 scorecard;
rows #16–18 added; final dispositions on all 18). **O2:** C1–C5 folded into the realigned E5 c162–169 (design-spec
per-cycle table rewritten; c162 context-graph inserted; mission pause banner → resumed). **O3:** doctrine §9
"Credibility Hygiene" added; `idea_deploy_cadence` RESOLVED (decadal-close + hotfix path; candidate SO #21);
`idea_upstream_public_projection_sanitizer` upstream filing batched → E6 O4. **O4:** STATE + memory updated; E5
unpaused at c162. **Expansion 5–9:** E6/M5.13 authored (capstone→E7); install-truth foundation built + hotfix-deployed;
upstream PR staged + filed; D16 carry-ins annotated; Hestia memo (Obj-11 carry) filed; 3 backlog ideas created
(`idea_upstream_install_script` · `idea_upstream_skill_workspace_path_migration` · `idea_site_rss_feed`) + 1 updated
(workspace-default: PR vehicle + sweep-mangled-diff warning).

## AAR
- **Worked:** Expanding P2 in-flight under an operator-ratified gate bundle — the realign absorbed the new portal
  directives without a second planning round; the gap register as single integration ledger meant zero orphans at close.
- **Didn't:** The WS-5 path sweep had mangled the workspace-default idea's own ready-to-PR diff (`~/lattice` swept
  out of the *quoted-before* strings) — caught only because the PR was reconstructed from upstream content.
- **Finding:** Sweeps treat quoted-old-path-as-data like live refs; diff tables and migration docs need KEEP-PROSE
  marking *before* a sweep runs, not after.
- **Change:** Flagged to aDNALabs (session SITREP) — sweep blind-spot class for the WS-5 AAR's gap list; PR staging
  now always reconstructs from target-repo content, never from vault-side diff quotes.
- **Follow-up:** Hestia memo ack → regen + ride next deploy; PR review/merge → E6 O4; E5 c163 next; D16 mission
  file at c180.
