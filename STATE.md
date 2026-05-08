---
type: state
created: 2026-04-13
updated: 2026-05-08
status: active
last_edited_by: agent_stanley
tags: [state, governance]
---
<!-- updated 2026-05-08 — campaign_adna_v2_infrastructure M01 Stage 2 Session 2 closed: ADR-006 + ADR-007 drafted (proposed); m01_obj2_migration_runbook.md + m01_obj3_node_adna_design.md landed (4 deliverables; M01 deliverables 3,4,5,6) -->


# Operational State

Dynamic operational snapshot for cold-start orientation. Updated each session.

## Current Phase

**Two campaigns in this vault:**

1. **`campaign_adna_v2_infrastructure`** — **NEW (planning, P0 active)**. Seeded 2026-05-07; Stage 1 review/refinement of M01 completed 2026-05-08; Stage 2 Session 1 closed 2026-05-08 (ADR-004 + ADR-005 promoted to `accepted`; Obj 0 + Obj 1 deliverables); **Stage 2 Session 2 closed 2026-05-08** (ADR-006 + ADR-007 drafted as `proposed`; Obj 2 migration runbook + Obj 3 node.aDNA design landed). 6 of 11 M01 objectives complete; 5 of expected 6 sessions remaining. Targets aDNA Governance v7.0 (repo flatten, `node.aDNA/` bootstrap, publish-skill rewrite, LatticeScope.aDNA seeding). **Affects 19 active ecosystem vaults** (full inventory in `m01_obj0_ecosystem_matrix.md`). External operators confirmed: Wilhelm Foundation (RareArchive + WilhelmAI), TAPP Strategic Intelligence (strategic_interface_protocol JV), Super League Enterprise (SuperLeague engagement). M08a scope expanded to public announcement + GitHub release coordination.
2. **Operation Rosetta** — **Phases 0-7 complete (M35 done 2026-04-26). Phase 8 queued.** 89 vault content files + 117-page live site. Phase 7: 100-cycle III loop across 10 themed decadals, ranker 4.35→5.00 (+0.65). Ceiling reached D9, held D10. Campaign AAR filed: `missions/artifacts/aar_phase7_campaign_closeout.md`. Phase 8 opening priorities: Researcher Findability (spec citations + dataset cross-refs), Educator interactive demo/workshop kit page.

## Active Campaigns

### `campaign_adna_v2_infrastructure` (P0, planning)

`how/campaigns/campaign_adna_v2_infrastructure/` — aDNA v2 Infrastructure (Governance v7.0 target). Strategic intent: the next major template version, addressing repo structure, local node governance, publish workflow, and observability tooling. Phase order (locked at Stage 1): M02 ecosystem matrix → **M08a pre-flatten upgrade guide** → M03 repo flatten → M04 `node.aDNA/` bootstrap → M05 publish-skill rewrite (with Spacemacs/Daedalus coord memo) → M06 minimalism + Governance v7.0 tag → M07 review/simplify → **M08b post-flatten propagation receipts** → M09 token audit → checkpoint → M10 LatticeScope.aDNA planning → M11 close-out. Estimated 5–6 sessions to complete M01; total campaign ~25–35 sessions across 5 phases.

Stage 1 (refinement) outputs: refined M01 mission file, refined campaign doc, ADR-004, ADR-005, `m01_refinement_log.md`.

Stage 2 Session 1 outputs (2026-05-08): **ADR-004 + ADR-005 promoted to `accepted`**; `m01_obj0_ecosystem_matrix.md` (19-vault inventory + 5×4 compatibility matrix + external-operators expansion + verbatim spot-check log); `m01_obj1_current_state.md` (repo structure ASCII diagram + 14-skill inventory table + 22-template freshness table + backlog overlap scan + 14-issue prioritized list + self-reference note).

Stage 2 Session 2 outputs (2026-05-08): **ADR-006 drafted (`proposed`)** — GitHub repo rename `Agentic-DNA` → `adna` (URL-slug only; display name unchanged; redirect-via-GitHub-rename non-breaking). **ADR-007 drafted (`proposed`)** — outer `adna/CLAUDE.md` becomes `template_workspace_claude.md` (NEW; fills v5.7-CHANGELOG-documented but missing template slot). `m01_obj2_migration_runbook.md` (3 existing-operator paths + fresh-bootstrap path + vault-only path + 13-check verification harness + 11-check skill_project_fork regression test + rollback procedures + M03 sequencing notes). `m01_obj3_node_adna_design.md` (full Hestia persona spec with 7 paired personas, complete `node.aDNA/` directory structure with new `inventory/` + `identity/` entity types, first-run detection block for `lattice/CLAUDE.md` Step 0 before project routing, template `.adna/CLAUDE.md` cross-project routing hook, workspace router Project Discovery row insertion, 10-dim compliance pre-check predicting **42/50 = 84%**). Both ADRs await operator ratification at start of M03 execution. Next: Stage 2 Session 3 (Obj 4 publish-skill rewrite + skill_git_remote_setup spec + pre-push hook spec + Daedalus coord memo + Obj 5 GitHub minimalism).

### Operation Rosetta (Phase 8 queued)

`how/campaigns/campaign_rosetta/` — build the self-referential aDNA context graph.

| Phase | Status | Missions | Content |
|-------|--------|----------|---------|
| Phase 0: Scaffold | Complete | M00 | 0 content, 10 AGENTS.md, 10 templates, 2 skills |
| Phase 1: Core Content | **Complete** | M01-M05 | 26/26 (13 concepts, 8 patterns, 5 comparisons) |
| Phase 2: Human Path | **Complete** | M06-M08 | 15/15 (9 tutorials, 6 use cases) |
| Phase 3: Website v1 | **Complete** | M09-M12 | 60-page site live on Vercel |
| Phase 4: The Who | **Complete** | M13-M15 | 37/37 (25 glossary + 1 index, 3 governance, 3 community, 5 adopters) |
| Phase 4.5: III Site Improvements | **Complete** | M20-M23 | Hero redesign, 37 new pages, components, OG images |
| Phase 5: The How | **Complete** | M16-M18 | 11/11 (3 publishing, 4 workshops, 4 lattice YAMLs) |
| Phase 6: Website v2 | **Complete** | M19 | How section live: 11 new pages + 4 index pages |
| Phase 7: 100-Cycle III Loop | **Active** | M24-M35 | D1-D7 complete (cycles 1-70, ranker 4.97); D8 pending phase gate (cycles 71-80) |

## Phase 7 Progress

- **M24: Baseline** — Complete.
- **M25: D1 Accessibility Perfection** — **Complete** (cycles 1-10). Ranker close: 4.35. AAR: [aar_phase7_d1.md](how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d1.md).
- **M26: D2 Content Clarity Sprint** — **Complete** (cycles 11-20). Ranker 4.35→**4.70** (Δ +0.35). AAR: [aar_phase7_d2.md](how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d2.md).
- **M27: D3 Navigation & IA** — **Complete** (cycles 21-30). Ranker 4.70→**4.83** (Δ +0.13). AAR: [aar_phase7_d3.md](how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d3.md).
- **M28: D4 Visual Identity & First-Contact** — **Complete** (cycles 31-40). Ranker 4.83→**4.91** (Δ +0.08). AAR: [aar_phase7_d4.md](how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d4.md).
- **M29: D5 Mobile Experience** — **Complete** (cycles 41-50). Ranker 4.91→**4.94** (Δ +0.03). Delight 4.50→4.71 (+0.21). AAR: [aar_phase7_d5.md](how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d5.md).

- **M30: D6 Performance & Loading** — **Complete** (cycles 51-60). Ranker 4.94→**4.96** (Δ +0.02). Delight 4.71→4.81 (+0.10). Mobile LH 98-100. AAR: [aar_phase7_d6.md](how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d6.md).

- **M31: D7 SEO & Discoverability** — **Complete** (cycles 61-70, 2026-04-24). Ranker 4.96→**4.97** (Δ +0.01). JSON-LD 55%→97%, heading hierarchy 45 violations→0, Patterns a11y 98→100, 6 concept→tutorial cross-links. AAR: [aar_phase7_d7.md](how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d7.md).

- **M32: D8 Interaction Depth** — **Complete** (cycles 71-80, 2026-04-24). Ranker 4.97→**4.99** (Δ +0.02). Delight 4.83→4.99 (+0.16). All 9 priority items done. AAR: [aar_phase7_d8.md](how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d8.md).

- **M33: D9 Narrative Onboarding** — **Complete** (cycles 81-90, 2026-04-24). Ranker 4.99→**5.00** (Δ +0.01). Pain statement above fold, `/get-started` callouts, trust links in hero, problem-first steps. Educator Actionability 4.93→4.98. AAR: [aar_phase7_d9.md](how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d9.md).

- **M34: D10 Teach-by-Example** — **Complete** (cycles 91-100, 2026-04-26). Ranker 5.00→**5.00** (ceiling held). `.hero-problem` restyle, `what-is-adna` ~1000 words (F-02+F-06 resolved), get-started terminal output, nav "How"→"Guides", hero parenthetical. Educator Actionability 4.98→4.99, Delight 4.98→4.99. AAR: [aar_phase7_d10.md](how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d10.md).

- **M35: Phase 7 Campaign AAR** — **Complete** (2026-04-26). Campaign-level AAR synthesizing 100 cycles, 10 decadals, 4.35→5.00 (+0.65). Phase arc Phases 0-7 documented. Phase 8 seeded. AAR: [aar_phase7_campaign_closeout.md](how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_campaign_closeout.md).

### Persona Ranker Summary

| Decadal | Close Score | Delta |
|---------|------------|-------|
| D1 (Accessibility) | 4.35 | +0.35 |
| D2 (Content Clarity) | 4.70 | +0.35 |
| D3 (Navigation & IA) | 4.83 | +0.13 |
| D4 (Visual Identity) | 4.91 | +0.08 |
| D5 (Mobile Experience) | 4.94 | +0.03 |
| D6 (Performance & Loading) | 4.96 | +0.02 |
| D7 (SEO & Discoverability) | 4.97 | +0.01 |
| D8 (Interaction Depth) | 4.99 | +0.02 |
| D9 (Narrative Onboarding) | 5.00 | +0.01 |
| D10 (Teach-by-Example) | **5.00** | **0.00** |

**D10 dimension breakdown**: Findability 4.99 (0) · Comprehension 5.00 (0) · Actionability 5.00 (0) · Trust 5.00 (0) · Relevance 5.00 (0) · Delight 5.00 (0) · **Phase 7 total: 4.35→5.00 (+0.65)**

## What's Working

- Full documentation site live at https://adna-docs.vercel.app — **117 pages**
- Lighthouse 100/100/100/100 desktop + **98-100 mobile Performance** across all tested pages (target ≥90 exceeded)
- Playwright **47/47** gates pass (gate-10-perf.spec.ts added D6)
- Homepage: plain-language hero-lead ("the genome of your project (a structured, persistent context layer)"), pain statement as plain hero text (no box), Problem→Shape→Win How it Works arc, dual-audience hero-subtitle
- `/learn/what-is-adna` expanded to ~1000 words — triad diagram, 14-entity table, CLAUDE.md snippet, "This site IS an aDNA vault" self-reference with 4 GitHub links (F-02 + F-06 resolved)
- 6 persona landings: `/educators`, `/enterprise`, `/compliance`, `/startup-first-hour`, `/researchers` (new D3), `/adopters` (with decision tree)
- Breadcrumbs site-wide + Related Elsewhere CardGrids on all 29 content pages + Back-to-index links + tooltip rollout (39 tooltips total)
- Tutorial index: difficulty-tiered with time estimates and per-tier guidance
- Reference section: inbound links from 4 most spec-adjacent concept pages
- Reviewer bench live: 5 reviewer personas (`who/reviewers/`) + `skill_decadal_aar.md` Step 4b wired
- 89 vault content files + 117 site pages
- Light/dark theme: no FOUC, persists across `ClientRouter` navigation
- Hero banner: AVIF format (110kB→10kB at 480px, 91% compression), WebP fallback
- Prefetch: hover strategy on all nav links, PrevNextNav, and homepage CTAs
- Font preloads: Inter 400 + Space Grotesk 400+700 latin in every page `<head>`
- JSON-LD structured data: 97% coverage (35/36 Astro pages) — CollectionPage, TechArticle, HowTo, BreadcrumbList, WebPage, WebSite schemas
- Heading hierarchy: 0 violations (CardGrid `<h3>`→`<p>`, 33 Pathway-2 MDX files H1-stripped)
- Patterns a11y: 100/100 Lighthouse (was 98 pre-D7)
- Concept→tutorial cross-links: 6 targeted cross-links added (concepts and patterns link to their hands-on tutorials)

## Active Blockers

None.

## Next Steps

**Primary track — `campaign_adna_v2_infrastructure` Stage 2 Session 3** (next):
1. Execute M01 Session 3 — **Obj 4 (publish-skill rewrite + `skill_git_remote_setup` spec + pre-push hook spec + Daedalus cross-graph coord memo)** + **Obj 5 (GitHub minimalism — `.github/workflows/` audit, `deploy_manifest.yaml` move verification, `setup.sh` + `prepare_for_onboarding.sh` assessment, `.gitignore` completeness, GitHub repo surface area check)**. Produces deliverables 7–10 of M01 (publish-skill rewrite spec, git_remote_setup spec, pre-push hook spec, GitHub minimalism + workflow audit notes).
2. Read first: [[how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj1_current_state.md|m01_obj1_current_state.md]] §5 Issues I-3, I-4, I-6, I-7, I-9, I-11, I-13 (the M05 + M06-bound issues); [[how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj0_ecosystem_matrix.md|m01_obj0_ecosystem_matrix.md]] §3 (per-class externality for the Daedalus coord memo authoring); the actual current `skill_lattice_publish.md` content + Spacemacs.aDNA's `.publish-clone/` directory structure.
3. Key M05 ADR to draft: **publish-skill naming** — keep `skill_lattice_publish.md` for latlab-registry publishing OR rename to `skill_lattice_registry_publish.md` + create new `skill_vault_publish.md` for the GitHub-vault-publish flow. This decision was deferred from S2 S2 to S2 S3 per Issue I-6.
4. Cross-graph coord memo to author at `aDNA.aDNA/who/coordination/coord_<DATE>_publish_rewrite.md` + mirror at `Spacemacs.aDNA/who/coordination/coord_<DATE>_adna_publish_rewrite.md`. Co-sign by Rosetta (this vault) + Daedalus (Spacemacs vault) confirming the design Daedalus expected matches what M05 will ship.
5. Sequencing reminder: Obj 4 + Obj 5 produce **specs**, not implementations. M05 + M06 execute the specs after operator ratification.

**Secondary track — Operation Rosetta Phase 8 (queued, no active sessions until v2 infrastructure completes its current phase):**
1. **Phase 8 kickoff** — Open with new baseline persona ranker and P0 spec citation pass (add `adna_standard.md` section references to all 13 concept pages). Assign M36.
2. **Verification tags (user action)** — Register adna-docs.vercel.app at Google Search Console + Bing Webmaster Tools, obtain verification codes, add meta tags to `SEOHead.astro`.
3. **Educator interactive demo** — Live workshop kit page or in-browser demo (Educator Actionability 4.99 ceiling resolution).
4. **Researcher dataset cross-links** — Cross-link concept pages to aDNA-annotated datasets.

## Pending Manual Actions

- **GitHub social preview**: Upload `site/public/images/og-default.png` at github.com/LatticeProtocol/aDNA.aDNA > Settings > Social preview
- **Vercel Git integration**: Connect repo at vercel.com > adna-docs > Settings > Git for auto-deploy (currently manual via `vercel --prod`)
- **Vercel deploy**: D7+D8 deployed to production 2026-04-24 ✅
- **Vercel deploy**: D9 deployed to production 2026-04-26 ✅
- **Vercel deploy**: D10 deployed to production 2026-04-26 ✅
- **Vercel deploy**: Wind-down (M35 AAR, campaign closeout) deployed to production 2026-04-26 ✅
- **Google Search Console**: Register adna-docs.vercel.app, obtain verification code, add `<meta name="google-site-verification" content="...">` to `SEOHead.astro`
- **Bing Webmaster Tools**: Register adna-docs.vercel.app, obtain verification code, add `<meta name="msvalidate.01" content="...">` to `SEOHead.astro`

## Last Session (2026-05-08 — Stage 2 Session 2 of M01 + campaign_adna_v2_infrastructure)

Stage 2 execution session. Drafted **ADR-006** (Decision A: GitHub repo rename `Agentic-DNA` → `adna` — URL-slug-only patch aligning with v6.0's URI-lowercase convention; GitHub redirect makes it non-breaking) and **ADR-007** (Decision B: outer `adna/CLAUDE.md` becomes `template_workspace_claude.md` — fills the v5.7-CHANGELOG-documented but missing template slot; chose Option 4 over mission's stated Options 2/3 after content audit confirmed unique workspace-router behavior worth salvaging as installable template). Both ADRs at status `proposed`; operator ratifies at M03 start. Produced **migration runbook** (`m01_obj2_migration_runbook.md`) covering 3 existing-operator paths (in-place rename / clean re-clone / parallel-keep), fresh-bootstrap path, vault-only-operator path, 13-check post-migration verification harness, 11-check `skill_project_fork.md` regression test (catching that fork must explicitly exclude `.git/`, `.github/`, `README.md`, `LICENSE`, `setup.sh`, `prepare_for_onboarding.sh` post-flatten), rollback procedures per path, M03 sequencing notes. Produced **`node.aDNA/` design** (`m01_obj3_node_adna_design.md`) with full Hestia persona spec (mythological grounding + 6 operating principles + 7 paired-persona table + greeting prose), complete directory structure introducing 2 new entity types (`inventory/` + `identity/`) requiring upstream contribution, first-run detection block for `lattice/CLAUDE.md` Step 0 before project routing, template `.adna/CLAUDE.md` cross-project routing hook, workspace router Project Discovery row + Workspace Layout addition + new Standing Rule 5 (local-by-default), 10-dim compliance pre-check predicting **42/50 = 84%** (D1-D3 inherit max from template; D5+D7+D8 capped by intentional design — node.aDNA is local-only by default). Operation Rosetta Phase 8 stays queued — no work this session.

## Next Session Prompt

> Resume `campaign_adna_v2_infrastructure` in `aDNA.aDNA/`. **Stage 2 Session 2 closed 2026-05-08.** 6 of 11 M01 objectives complete; ADRs 006 + 007 await operator ratification at M03 start. Open **Stage 2 Session 3** — M01 Objective 4 (publish-skill rewrite spec + `skill_git_remote_setup` spec + pre-push hook spec + Daedalus cross-graph coord memo) + Objective 5 (GitHub minimalism: `.github/workflows/` audit, `deploy_manifest.yaml` move verification, `setup.sh` + `prepare_for_onboarding.sh` assessment, `.gitignore` completeness, GitHub repo surface area). Read in order: (1) `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/mission_adna_infra_planning_01.md` §Obj 4 + §Obj 5 (canonical specs); (2) S2 S1/S2 baseline — `m01_obj0_ecosystem_matrix.md` §3 (externality classes for Daedalus + per-vault impact for the publish-skill rewrite) + `m01_obj1_current_state.md` §5 Issues I-3, I-4, I-6, I-7, I-9, I-11, I-13 (the M05 + M06-bound issues); (3) `aDNA.aDNA/what/decisions/adr_006_*` + `adr_007_*` (Stage 2 Session 2 ADR drafts at `proposed`; will be `accepted` post-M03 ratification); (4) the actual current `adna/.adna/how/skills/skill_lattice_publish.md` (latlab CLI registry skill — for renaming decision) + `adna/.adna/how/skills/skill_l1_upgrade.md` (only other rsync-mentioning skill — confirm no conflicts); (5) `Spacemacs.aDNA/.publish-clone/` directory structure (the workaround M05 supersedes — 5.0M of vault snapshot, gitignored) + `Spacemacs.aDNA/.gitignore` (referenced `skill_deploy` operator-intent precedent); (6) `Spacemacs.aDNA/how/backlog/idea_skill_publish_lattice_git_fix.md` (downstream trigger for the cross-graph coord memo). Then **Obj 4** — author the M05 publish-skill-naming ADR (recommend: keep `skill_lattice_publish.md` for latlab registry; create NEW `skill_vault_publish.md` for vault-to-GitHub flow); produce `skill_lattice_publish_rewrite_spec.md` (or wherever the M05-naming ADR lands the rewrite); produce `skill_git_remote_setup_spec.md`; produce `pre_push_hook_spec.md`; author the cross-graph coord memo at `aDNA.aDNA/who/coordination/coord_<DATE>_publish_rewrite.md` + mirror at `Spacemacs.aDNA/who/coordination/coord_<DATE>_adna_publish_rewrite.md` (co-signed by Rosetta + Daedalus). Then **Obj 5** — produce `m01_obj5_github_minimalism_audit.md` covering: workflow audit (read each `.github/workflows/` file; flag deprecated path references; apply `/simplify` discipline), `deploy_manifest.yaml` post-M03 location verification, setup.sh + prepare_for_onboarding.sh value-assessment (recommend retain or fold into `skill_deploy`), `.gitignore` completeness (verify deploy/, what/local/, how/local/, who/operators/, dist/, .publish-clone/, *.dryrun.log all present), GitHub repo surface area check (post-flatten visitor experience). Carry the I-3 (no-remote ecosystem pattern), I-4 (LPWhitepaper non-standard remote), I-6 (skill naming refinement), I-7 (skill_deploy NEW), I-11 (idea closure dependency), I-13 (deploy_manifest move) issues from Obj 1 §5 into Obj 4 + Obj 5 mitigation. Operation Rosetta Phase 8 still queued — do not start Phase 8 work until v2 infrastructure campaign completes its current phase or operator routes you there explicitly.
