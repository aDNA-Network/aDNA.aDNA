---
plan_id: mission_champollion_m4_3_first_contact_learning_path
type: plan
title: "M4.3 — README first-contact pattern + learning path walked beginner→advanced + community launch readiness"
owner: stanley
status: completed
campaign_id: campaign_champollion
campaign_phase: 4
campaign_mission_number: 3
mission_class: implementation
executor_tier: opus
token_budget_estimated: "46 kT (charter 40 + Mode-B bookend allowance ~+15% per G3 D4)"
token_budget_actual: "~50 kT (opus builder ~40 + fable bookends ~10, incl. the N-02 retraction cascade the review triggered) vs 46 est — +9%, inside band"
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
tags: [plan, campaign, champollion, p4, readme, learning_path, community, f_chm_207, m4_3]
---

# Mission M4.3 — First-contact docs + learning path + community readiness

**Campaign**: [[../campaign_champollion|campaign_champollion]] · **Executor: opus (build) with fable bookends** · **Ring 1** · **Mode B**.

## Objective

Make the vault's **first-contact reading path** launch-ready: (1) the README applies a coherent first-contact pattern (what this is → why it matters → your first 10 minutes → where to go by reader type — dual-audience, SO-7); (2) the **learning path walks end-to-end** — every tutorial step from beginner to advanced actually executes as written against the current tree (v2.5, current counts, current repo refs); (3) **F-CHM-207 lands here**: `how/workshops/workshop_build_your_first_vault.md` clone instructions re-anchored to the canonical `aDNA-Network/aDNA` clone-and-run flow, and the exercise flow itself re-walked; (4) `who/community/` reflects launch reality (roles/contribution paths current, no placeholder rot).

## Work

1. Ingest M4.1's (b)-routes marked M4.3 (the newcomer walk's doc findings — run M4.1 first if possible).
   > **M4.1 riders (landed 2026-07-02, fable-finalized; evidence [[../artifacts/newcomer_stress_test|newcomer_stress_test]])**:
   > - **N-05 / F-CHM-207 upgraded**: the old workshop URL does **not 404** — it **301-redirects to frozen `adna-legacy` @ `74cb761`**, so the taught clone *silently succeeds* with a stale pre-v8 vault. The work-item-4 fix stands, but the re-walk MUST verify the new flow end-to-end (silent-success is the failure mode to kill).
   > - **N-06**: `tutorial_navigate_a_vault.md:44-56` narrates the DEV vault (concepts/13 · patterns/8 · comparisons · 41 templates) — none in the newcomer's image (27 templates, no such dirs). Reframe: state which vault it walks, or provide an image-shaped variant/branch.
   > - **N-07 vault-half / F-CHM-210**: this vault's docs face (README pass, work item 2 + tutorials index) must carry explicit "start here" pointers a newcomer can actually reach from the image; image-side pointer line rides [[../../../backlog/idea_image_newcomer_currency_fixes|the M6.1 fold batch]], NOT this mission.
   > - **N-10 (fable-ruled here from (a))**: designate the FIRST tutorial in `what/tutorials/AGENTS.md` — three files carry `level: beginner` (navigate_a_vault · first_claude_md · question_test); the learning-path walk (work item 3) decides which leads and marks it.
2. **README pass**: restructure to the first-contact pattern; verify every command/path/count it states (census rule — never inherit); keep it dual-audience.
3. **Learning-path walk**: execute each tutorial/workshop step in order (beginner → advanced) against a scratch copy where steps mutate state; log every step that fails, lies, or drifts; fix in place (content fixes) or route (template-image → `fold_batch: champollion_m6_1_rc` stub; site → M4.2/M4.4).
4. **F-CHM-207 fix**: workshop Materials + Exercise 1 → `git clone https://github.com/aDNA-Network/aDNA.git ~/aDNA && cd ~/aDNA && claude` flow; re-walk the exercise; update the findings ledger row → FIXED.
5. **Community surfaces**: `who/community/` roles/contribution paths current; cross-check with the site's community page claims if any.
6. Standing sweep clause: out-of-scope hits → manifest.

## Acceptance criteria

- [x] README passes the first-contact pattern + dual-audience test; all stated facts census-verified. *(First-10-minutes table + reader-type router; 10 facts censused, 2 corrected [skills 13→26 · v2.4→v2.5].)*
- [x] Learning path walked end-to-end with a walk log in the mission artifact; zero steps that fail as written (fixed or explicitly routed). *(13 surfaces: 9 tutorials + 4 workshops; 4 files fixed-then-pass, 0 left failing; first tutorial designated = `tutorial_navigate_a_vault` [no prerequisites].)*
- [x] F-CHM-207 → FIXED in the findings ledger (workshop re-anchored + re-walked). *(Canonical flow + NAMED silent-301 warning; scratch re-walk PASS.)*
- [x] `who/community/` current; fable review passed; `adna_validate` FULL PASS; explicit-path commit. *(Review PASS; marquee = the N-02 retraction: M4.3's different-method census collided with M4.1's file-counts → F-CHM-212 + semantic-census corollary in the counting standard.)*

## Guardrails

Content/docs edits in this vault only · `.adna/` untouched (image-side doc fixes = fold stubs) · the walk is honest — a step that fails is logged as failing, then fixed; never narrated around · wikilinks resolve (SO-10) · no push (batches at G4).

## Verification surface

`python3.13 what/lattices/tools/adna_validate.py .`; the walk log (per-step PASS/FIXED/ROUTED); fable bookend spot-walks ≥2 fixed steps.

## Escalation triggers

- The learning path needs re-sequencing (structural, not content) → G4 input with a proposed order, do not restructure unilaterally.
- A tutorial teaches something v2.5 changed normatively → verify against the live standard text; if the standard itself is ambiguous, F-CHM-2xx ledger row.
- Budget > 60 kT → halt and report.
