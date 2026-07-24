---
type: session
session_id: session_stanley_20260724T011748Z_refit_m6_dev_readiness
tier: 2
persona: rosetta
operator: stanley
campaign_id: campaign_refit
campaign_phase: 4
mission_id: mission_refit_6_dev_readiness
executor_tier: opus
status: completed
created: 2026-07-24
updated: 2026-07-24
token_budget_actual: "~70 kT (E1 only; E2 cut per operator)"
last_edited_by: agent_rosetta
token_budget_estimated: "~80 kT (E1 audit + fills + image-side stage; E2 cut per operator)"
tags: [session, campaign, refit, dev_readiness, contributing, p4, m6]
scope_declaration:
  - CODE_OF_CONDUCT.md (new)
  - .github/ISSUE_TEMPLATE/{bug_report.md,change_proposal.md,config.yml} (new)
  - how/skills/skill_upstream_contribution.md (repo-name fix)
  - site/src/pages/get-started.astro · site/src/pages/community/index.astro (contributor fills)
  - how/campaigns/campaign_refit/artifacts/{dev_readiness_audit.md,image_side_dev_readiness_fills.md} (new)
  - how/backlog/idea_upstream_vault_card_edge_population.md (E2 route)
  - mission_refit_6 + campaign CLAUDE + STATE (close)
conflict_scan: "how/sessions/active/ empty — no peer session"
---

# Session — Refit M6 dev-readiness (P4 Ready)

**Mission**: [[mission_refit_6_dev_readiness]] · **Phase**: P4 Ready · last mission before P5 Close.

## Intent

Close the contributor-pathway gaps. **E1a** audit (3 surfaces). **E1b** fill dev-vault-side live (CODE_OF_CONDUCT,
issue templates, repo-name fix, site copy) + stage image-side DE-LINKed. **E2 CUT** per operator → route to
`idea_upstream_vault_card_edge_population`. Site = build+gate+commit-no-push (no deploy). No push (G3 election).

**Verified facts:** canonical repo = `aDNA-Network/aDNA`; gate-15 DEAD patterns = `LatticeProtocol/Agentic-DNA`
(fix in the skill) + `aDNA-Network/aDNA.aDNA` (site must NOT link the dev-vault repo — use the image repo).

## Work log

- Session opened. Git clean, 27 ahead of origin (unpushed — G3 election).

## SITREP

**Completed** — Refit **M6 dev-readiness** (P4 Ready), ~70 kT (est 80+40; E2 cut). **P4 COMPLETE; all 6 missions
M1–M6 done; campaign now at P5 Close.**

- **E1a audit** `artifacts/dev_readiness_audit.md` (3-surface present/gap/filled).
- **E1b dev-vault fills (live on G3 push):** `CODE_OF_CONDUCT.md` · `.github/ISSUE_TEMPLATE/{bug_report,change_proposal,config}` ·
  skill repo-name fix (`→ aDNA-Network/aDNA`) · site `get-started` + `community/index` copy.
- **E1b image-side staged** `artifacts/image_side_dev_readiness_fills.md` (5-item rider for `campaign_v8_9_release`).
- **E2 cut + routed** to `idea_upstream_vault_card_edge_population` (operator, DP8).
- **Gates:** 371 passed · build clean (202pp) · adna_validate zero drift · no deploy.

**In progress** — none. **Blockers** — none.

**Finding (flagged follow-up):** the site prebuild regenerated `vaults.json` **73→74** (Home inventory added an
org_graph; `sha` 59058a4→536e9d62). Out of M6 scope (M2's data-currency domain) → **restored to 73 + rebuilt with
`npx astro build`** (skips prebuild). A future regen (73→74 + G20 claim-trace fixture) is warranted.

**Next up** — **P5 Close**: campaign SITREP + AAR + close splash + the **G3 packet (DP10)** — push election of the
~30 accumulated local commits + 5 `staged_for_delivery` memos + re-surface §Pending Manual Actions. Also queue: the
73→74 registry regen; the image-side ship-set → `campaign_v8_9_release`; CoC reporting-address `#needs-human`.

**Files touched** — `CODE_OF_CONDUCT.md` (new) · `.github/ISSUE_TEMPLATE/{bug_report.md,change_proposal.md,config.yml}` (new) ·
`how/skills/skill_upstream_contribution.md` · `site/src/pages/get-started.astro` · `site/src/pages/community/index.astro` ·
`how/campaigns/campaign_refit/artifacts/{dev_readiness_audit.md,image_side_dev_readiness_fills.md}` (new) ·
`how/backlog/idea_upstream_vault_card_edge_population.md` · `mission_refit_6_dev_readiness.md` · campaign `CLAUDE.md` ·
`STATE.md` · this session file. *(vaults.json/subnetworks.json/vaults_graph.mmd regen restored — NOT committed.)*

## Next Session Prompt

Operation Refit is at **P5 Close** — all 6 missions (M1–M6) complete; G1 (07-21) + G2 (07-24) signed. Run the
**campaign close**: author a campaign SITREP/AAR reconciling **every A–E work-inventory row** to a disposition
(done / deferred-with-owner / declined) per the charter §Verification, render a close splash (`skill_campaign_sitrep_splash`),
re-surface the charter's **§Pending Manual Actions**, and present the **G3 operator packet (DP10)**: the **push
election** of the ~30 accumulated local commits (all unpushed since the campaign began — `git rev-list --count
origin/main..HEAD`) + the **5 `staged_for_delivery` coord memos** in `who/coordination/` (the ADR-022 lesson —
surface, don't let them sit). Carry-forward follow-ups to log at close: (1) registry regen **73→74** (Home added an
org_graph — M2-style data-currency pass + G20 fixture); (2) the image-side dev-readiness ship-set →
`campaign_v8_9_release`; (3) CoC dedicated reporting-address `#needs-human`. Hard constraints hold: G3 close is an
operator gate; commit-no-push until the operator elects the push. Read `campaign_refit.md` §Phases (P5 Close → G3)
+ `artifacts/ratification_record_refit_g1.md` DP10.
