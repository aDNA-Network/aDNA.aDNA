---
type: state
created: 2026-04-13
updated: 2026-05-08
status: active
last_edited_by: agent_stanley
tags: [state, governance]
---
<!-- updated 2026-05-08 — campaign_adna_v2_infrastructure M01 Stage 2 Session 1 closed: ADR-004 + ADR-005 promoted to accepted; Obj 0 + Obj 1 deliverables landed -->


# Operational State

Dynamic operational snapshot for cold-start orientation. Updated each session.

## Current Phase

**Two campaigns in this vault:**

1. **`campaign_adna_v2_infrastructure`** — **NEW (planning, P0 active)**. Seeded 2026-05-07; Stage 1 review/refinement of M01 completed 2026-05-08; **Stage 2 Session 1 closed 2026-05-08** with ADR-004 + ADR-005 promoted to `accepted` and Obj 0 + Obj 1 deliverables landed. Targets aDNA Governance v7.0 (repo flatten, `node.aDNA/` bootstrap, publish-skill rewrite, LatticeScope.aDNA seeding). **Affects 19 active ecosystem vaults** (corrected from ~17 — full inventory in `m01_obj0_ecosystem_matrix.md`; 2 vaults previously undocumented in `lattice/CLAUDE.md`). External operators confirmed: Wilhelm Foundation (RareArchive + WilhelmAI), TAPP Strategic Intelligence (strategic_interface_protocol JV), Super League Enterprise (SuperLeague engagement). M08a scope expanded to public announcement + GitHub release coordination.
2. **Operation Rosetta** — **Phases 0-7 complete (M35 done 2026-04-26). Phase 8 queued.** 89 vault content files + 117-page live site. Phase 7: 100-cycle III loop across 10 themed decadals, ranker 4.35→5.00 (+0.65). Ceiling reached D9, held D10. Campaign AAR filed: `missions/artifacts/aar_phase7_campaign_closeout.md`. Phase 8 opening priorities: Researcher Findability (spec citations + dataset cross-refs), Educator interactive demo/workshop kit page.

## Active Campaigns

### `campaign_adna_v2_infrastructure` (P0, planning)

`how/campaigns/campaign_adna_v2_infrastructure/` — aDNA v2 Infrastructure (Governance v7.0 target). Strategic intent: the next major template version, addressing repo structure, local node governance, publish workflow, and observability tooling. Phase order (locked at Stage 1): M02 ecosystem matrix → **M08a pre-flatten upgrade guide** → M03 repo flatten → M04 `node.aDNA/` bootstrap → M05 publish-skill rewrite (with Spacemacs/Daedalus coord memo) → M06 minimalism + Governance v7.0 tag → M07 review/simplify → **M08b post-flatten propagation receipts** → M09 token audit → checkpoint → M10 LatticeScope.aDNA planning → M11 close-out. Estimated 5–6 sessions to complete M01; total campaign ~25–35 sessions across 5 phases.

Stage 1 (refinement) outputs: refined M01 mission file, refined campaign doc, ADR-004, ADR-005, `m01_refinement_log.md`.

Stage 2 Session 1 outputs (2026-05-08): **ADR-004 + ADR-005 promoted to `accepted`**; `m01_obj0_ecosystem_matrix.md` (19-vault inventory + 5×4 compatibility matrix + external-operators expansion + verbatim spot-check log); `m01_obj1_current_state.md` (repo structure ASCII diagram + 14-skill inventory table + 22-template freshness table + backlog overlap scan + 14-issue prioritized list + self-reference note). **Surprises captured**: 7 vaults have no git remote (not just Spacemacs — ecosystem-wide pattern); `skill_workspace_upgrade.md` missing from `.adna/CLAUDE.md` Skills inventory table (drift); `skill_lattice_publish.md` is about latlab registry not the rsync workaround (campaign-trigger imprecision now refined); 2 vaults missing from `lattice/CLAUDE.md` discovery table. Next: Stage 2 Session 2 (Obj 2 repo structure ADRs + Obj 3 `node.aDNA/` design + Hestia + 10-dim pre-check).

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

**Primary track — `campaign_adna_v2_infrastructure` Stage 2 Session 2** (next):
1. Execute M01 Session 2 — **Obj 2 (repo structure simplification + Decision A repo rename ADR + Decision B outer CLAUDE.md disposition ADR)** + **Obj 3 (`node.aDNA/` design + Hestia persona + 10-dimension compliance pre-check)**. Produces deliverables 3–6 of M01 (repo structure ADR draft, migration runbook draft, `node.aDNA/` design doc + Hestia persona spec, 10-dim pre-check for `node.aDNA/`).
2. Read first: [[how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj0_ecosystem_matrix.md|m01_obj0_ecosystem_matrix.md]] + [[how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj1_current_state.md|m01_obj1_current_state.md]] for the baseline that Stage 2 Session 1 produced; carry the 14-issue prioritized list (§5 of Obj 1) into Obj 2 + Obj 3 mitigation work where it lands.
3. Sequencing reminder: Obj 2 produces ADR drafts only (decision-pending); operator gate ratifies them at the start of M03 execution per Standing Order #1 (phase gates are human gates).

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

## Last Session (2026-05-08 — Stage 2 Session 1 of M01 + campaign_adna_v2_infrastructure)

Stage 2 execution session. Promoted ADR-004 + ADR-005 from `proposed` → `accepted` at session start (operator gate). Inventoried all 20 `.aDNA` directories on disk (19 active + 1 superseded ComicForge); spot-checked all 19 active for `git remote -v` (verbatim log captured); confirmed external-operator status across three classes (Wilhelm Foundation × 2 vaults; TAPP Strategic Intelligence; Super League Enterprise). Produced Obj 0 deliverable (`m01_obj0_ecosystem_matrix.md`) — vault inventory, 5×4 compatibility matrix, external-ops scope expansion, blast-radius narrative, verbatim spot-check log. Produced Obj 1 deliverable (`m01_obj1_current_state.md`) — ASCII structure diagram, 14-skill inventory + 3 NEW v7.0 skills, 22-template audit, backlog overlap scan (8 aDNA + 6 Spacemacs), 14-issue prioritized list, self-reference §6. Surprises: 7 of 19 active vaults have no git remote (Spacemacs is one instance of an ecosystem-wide pattern, not unique); skill_workspace_upgrade missing from `.adna/CLAUDE.md` Skills table; campaign-trigger imprecision (skill_lattice_publish is about latlab registry, not the rsync workaround — refined into M05 ADR scope); 2 active vaults missing from `lattice/CLAUDE.md` discovery table. Operation Rosetta Phase 8 stays queued — no work this session.

## Next Session Prompt

> Resume `campaign_adna_v2_infrastructure` in `aDNA.aDNA/`. **Stage 2 Session 1 closed 2026-05-08.** Open **Stage 2 Session 2** — M01 Objective 2 (repo structure simplification + Decision A repo rename ADR + Decision B outer CLAUDE.md disposition ADR) + Objective 3 (`node.aDNA/` design + Hestia persona spec + 10-dimension compliance pre-check). Read in order: (1) `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/mission_adna_infra_planning_01.md` (canonical mission spec); (2) `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj0_ecosystem_matrix.md` + `m01_obj1_current_state.md` (Stage 2 Session 1 baseline; carry the 14-issue prioritized list into mitigation work); (3) `aDNA.aDNA/what/decisions/adr_004_campaign_home_stays_in_adna_adna.md` + `adr_005_three_way_vault_boundary.md` (now `accepted` — vault boundary basis for Obj 3); (4) `lattice/CLAUDE.md` Workspace Layout section + Project Discovery table (target of M03 router update). Then Obj 2 — produce ADR drafts for Decision A (GitHub repo rename `Agentic-DNA` → `adna`; provide redirect rationale) and Decision B (outer `adna/CLAUDE.md` disposition; likely Option 2 — convert to `how/docs/workspace_setup_guide.md`); produce migration runbook draft (`rm lattice/.adna && mv lattice/adna lattice/.adna && git -C lattice/.adna remote set-url origin <new-url>` + alternate clean-clone path). Then Obj 3 — design `node.aDNA/` directory structure (per M01 §Obj 3); author Hestia persona spec (goddess of the hearth; dependable, inventory-focused, escalates clearly; pairs with Daedalus/Hygieia/Prometheus); 10-dim compliance pre-check (D1-D10 scored 0-5 each); add forward-reference to `aDNA.aDNA/how/campaigns/` per ADR-004; design first-run detection block for `lattice/CLAUDE.md` bootstrap. Deliver to `aDNA.aDNA/how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/`: `m01_obj2_repo_structure_adrs.md` (ADR drafts A + B) + `m01_obj2_migration_runbook.md` (M03-bound runbook) + `m01_obj3_node_adna_design.md` (vault design + Hestia spec + 10-dim pre-check). Carry the I-1 (workspace router gap) + I-8 (outer CLAUDE.md content overlap) + I-13 (deploy_manifest move) issues from Obj 1 §5 into Obj 2 mitigation. Promote ADR drafts to `proposed` (operator ratifies at start of M03 execution per Standing Order #1). Operation Rosetta Phase 8 still queued — do not start Phase 8 work until v2 infrastructure campaign completes its current phase or operator routes you there explicitly.
