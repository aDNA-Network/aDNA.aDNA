---
type: state
created: 2026-04-13
updated: 2026-05-08
status: active
last_edited_by: agent_stanley
tags: [state, governance]
---
<!-- updated 2026-05-08 — campaign_adna_v2_infrastructure M01 Stage 2 Session 4 closed: 10 of 11 M01 objectives complete (Obj 6 semver ADR + version-bump checklist, Obj 7 repo review/audit + ADR-009 naming-convention draft); 4 sibling artifacts ready for M03/M05/M06/M07 consumption; Daedalus signed coord memo at 21:03:45Z — both vaults flipped to completed; M05 publish-skill family ship is unblocked; new finding TC-1 surfaced (adna_standard.md line 1483 stale v2.0 footer → v2.2 fix delegated to M07); ADR-011 (semver discipline) forward-referenced for M06 ratification at v7.0 tag -->


# Operational State

Dynamic operational snapshot for cold-start orientation. Updated each session.

## Current Phase

**Two campaigns in this vault:**

1. **`campaign_adna_v2_infrastructure`** — **NEW (planning, P0 active)**. Seeded 2026-05-07; Stage 1 review/refinement of M01 completed 2026-05-08; Stage 2 Session 1 closed 2026-05-08 (ADR-004 + ADR-005 promoted to `accepted`; Obj 0 + Obj 1 deliverables); Stage 2 Session 2 closed 2026-05-08 (ADR-006 + ADR-007 drafted as `proposed`; Obj 2 migration runbook + Obj 3 node.aDNA design landed); Stage 2 Session 2.5 (Campaign Amendment Session) closed 2026-05-08 — folded airlock + naming/repo convention into M03 + M07 mission scope (ADR-008 + ADR-009 slots); seeded successor campaign `campaign_adna_v3_ecosystem_compliance/` as planned stub. Stage 2 Session 3 closed 2026-05-08 — Obj 4 + Obj 5 deliverables landed (publish-skill family rewrite specs, dual-vault Daedalus airlock-exemplar coord memo, GitHub minimalism + naming-convention audit). **Stage 2 Session 4 closed 2026-05-08T21:29:34Z** — Obj 6 + Obj 7 deliverables landed (semver discipline ADR recommendation + Governance v7.0 version-bump checklist; repo review audit findings + ADR-009 naming-convention draft); ADR-011 (semver discipline) forward-referenced for M06 ratification at v7.0 tag; Daedalus signed Spacemacs mirror at 21:03:45Z, Rosetta-side coord memo flipped to completed; M05 publish-skill family ship is unblocked; new finding TC-1 surfaced (`adna_standard.md` line 1483 stale `*End of aDNA Universal Standard v2.0*` footer → fix to v2.2 delegated to M07). **10 of 11 M01 objectives complete**; estimated effort holds at **6–7 sessions** for M01 (1 session remaining: S2 S5 covers Obj 8 + Obj 9; S2 S6 covers Obj 10 + Obj 11 + M01 AAR). Targets aDNA Governance v7.0 (repo flatten, `node.aDNA/` bootstrap, publish-skill rewrite, **airlock template integration**, **naming/repo convention codification**, LatticeScope.aDNA seeding). **Affects 19 active ecosystem vaults** (full inventory in `m01_obj0_ecosystem_matrix.md`). External operators confirmed: Wilhelm Foundation (RareArchive + WilhelmAI), TAPP Strategic Intelligence (strategic_interface_protocol JV), Super League Enterprise (SuperLeague engagement). M08a scope expanded to public announcement + GitHub release coordination.
2. **Operation Rosetta** — **Phases 0-7 complete (M35 done 2026-04-26). Phase 8 queued.** 89 vault content files + 117-page live site. Phase 7: 100-cycle III loop across 10 themed decadals, ranker 4.35→5.00 (+0.65). Ceiling reached D9, held D10. Campaign AAR filed: `missions/artifacts/aar_phase7_campaign_closeout.md`. Phase 8 opening priorities: Researcher Findability (spec citations + dataset cross-refs), Educator interactive demo/workshop kit page.

## Active Campaigns

### `campaign_adna_v2_infrastructure` (P0, planning)

`how/campaigns/campaign_adna_v2_infrastructure/` — aDNA v2 Infrastructure (Governance v7.0 target). Strategic intent: the next major template version, addressing repo structure, local node governance, publish workflow, and observability tooling. Phase order (locked at Stage 1): M02 ecosystem matrix → **M08a pre-flatten upgrade guide** → M03 repo flatten → M04 `node.aDNA/` bootstrap → M05 publish-skill rewrite (with Spacemacs/Daedalus coord memo) → M06 minimalism + Governance v7.0 tag → M07 review/simplify → **M08b post-flatten propagation receipts** → M09 token audit → checkpoint → M10 LatticeScope.aDNA planning → M11 close-out. Estimated 5–6 sessions to complete M01; total campaign ~25–35 sessions across 5 phases.

Stage 1 (refinement) outputs: refined M01 mission file, refined campaign doc, ADR-004, ADR-005, `m01_refinement_log.md`.

Stage 2 Session 1 outputs (2026-05-08): **ADR-004 + ADR-005 promoted to `accepted`**; `m01_obj0_ecosystem_matrix.md` (19-vault inventory + 5×4 compatibility matrix + external-operators expansion + verbatim spot-check log); `m01_obj1_current_state.md` (repo structure ASCII diagram + 14-skill inventory table + 22-template freshness table + backlog overlap scan + 14-issue prioritized list + self-reference note).

Stage 2 Session 2 outputs (2026-05-08): **ADR-006 drafted (`proposed`)** — GitHub repo rename `Agentic-DNA` → `adna` (URL-slug only; display name unchanged; redirect-via-GitHub-rename non-breaking). **ADR-007 drafted (`proposed`)** — outer `adna/CLAUDE.md` becomes `template_workspace_claude.md` (NEW; fills v5.7-CHANGELOG-documented but missing template slot). `m01_obj2_migration_runbook.md` (3 existing-operator paths + fresh-bootstrap path + vault-only path + 13-check verification harness + 11-check skill_project_fork regression test + rollback procedures + M03 sequencing notes). `m01_obj3_node_adna_design.md` (full Hestia persona spec with 7 paired personas, complete `node.aDNA/` directory structure with new `inventory/` + `identity/` entity types, first-run detection block for `lattice/CLAUDE.md` Step 0 before project routing, template `.adna/CLAUDE.md` cross-project routing hook, workspace router Project Discovery row insertion, 10-dim compliance pre-check predicting **42/50 = 84%**). Both ADRs await operator ratification at start of M03 execution.

Stage 2 Session 2.5 (Campaign Amendment Session) outputs (2026-05-08): edited campaign master (6 edits — Strategic Intent paragraph, Scope table 2 new rows, ADRs section restructured into Accepted/Proposed/Drafted-in-remaining-objectives, Cross-vault references with 4 airlock pointers + successor pointer, New projects seeded table + 1 row); edited M01 mission spec (9 edits — Obj 2/4/5/7/8/11 scope notes, deliverables table rows 20–22, effort recalibration 5–6 → 6–7 sessions); seeded successor campaign stub at `aDNA.aDNA/how/campaigns/campaign_adna_v3_ecosystem_compliance/` (campaign master + CLAUDE.md + missions/.gitkeep — `status: planned`, `phase: -1`, opens at v2 P3 phase gate, M11 finalizes the preliminary 7-mission tree M01-EC through M07-EC); produced amendment log artifact (`m01_amendment_log.md`). New ADR slots opened: **ADR-008** (Airlock template stub — drafted by M03, ratified at M03 phase gate) + **ADR-009** (`<name>.aDNA/` ↔ `<name>.aDNA.git` naming convention — drafted by M07, ratified at M07 close).

Stage 2 Session 3 outputs (2026-05-08): **Obj 4 deliverables (5)** — `m01_obj4_publish_naming_adr.md` (publish-naming recommendation: KEEP `skill_lattice_publish.md` unchanged + CREATE new `skill_vault_publish.md`; recommends ADR-010 draft for M05); `skill_lattice_publish_rewrite_spec.md` (publish-skill family spec covering 5-skill v7.0 family — kept lattice-publish + new vault-publish + new git-remote-setup + sketch publish-tarball + sketch deploy); `skill_git_remote_setup_spec.md` (NEW first-time-remote skill spec; 8 implementation steps; naming-convention lint with ADR-009 forward-reference; 4 grandfathered + 7 no-remote + 1 LP-path-style exceptions documented); `pre_push_hook_spec.md` (LAYER_CONTRACT §4 v0.1 — 7 sanitization rules, ~80-line bash outline, --self-test mode); **dual-vault Daedalus coord memo** at `who/coordination/coord_2026_05_08_publish_rewrite.md` (Rosetta-side, co-signed) + `Spacemacs.aDNA/who/coordination/coord_2026_05_08_adna_publish_rewrite.md` (Daedalus-side mirror, **co-signed by Daedalus 2026-05-08T21:03:45Z; both vaults flipped to status: completed at S2 S4 close**). **The coord memo is the first cross-graph airlock-pattern exercise from `aDNA.aDNA/`** — adopts III airlock schema (header → request → handshake → response → co-sign) with cross-links to III canonical + VideoForge reference + CanvasForge worked example + III v0.2 findings. **Obj 5 deliverable (1)** — `m01_obj5_github_minimalism_audit.md` (10 sections, 6 dimensions, 21 findings, naming-convention b.1 amendment discharged: all 4 canonical template docs confirmed conformant; high-priority M03 actions: G-1 create template `.gitignore` / P-1 move `prepare_for_onboarding.sh` / W-1 update workflow URLs / D-1 update `deploy_manifest.yaml` sync_includes; high-priority M07 actions: F-1 `adna.md` disposition / N-3 ADR-009 template-repo-exception). Issue mitigations from Obj 1 §5: **I-3, I-6, I-7, I-9, I-11, I-13** all covered.

Stage 2 Session 4 outputs (2026-05-08): **Obj 6 deliverables (2)** — `m01_obj6_semver_discipline_adr.md` (ADR recommendation; 9 sections; codifies two-track Major.Minor-only policy verbatim from CHANGELOG lines 9-27; v7.0 = Major Governance bump per flatten + repo rename; Standard track unchanged at v2.2; ADR-011 forward-referenced for M06 ratification at v7.0 tag; surfaces stale `*End of aDNA Universal Standard v2.0*` footer at adna_standard.md line 1483 → §2-D delegates fix to M07); `m01_obj6_version_bump_checklist.md` (M06 runbook; 10 sections; 6 §0 preconditions; pre-populated CHANGELOG v7.0 entry skeleton with Added/Changed/Deprecated/Removed/Fixed/Security sourced from M01 Obj 0/1/2/4/5/6 inputs; frontmatter version flip `6.0`→`7.0`; Standard track verification + line-1483 fix; MANIFEST has no version field — verified; annotated git tag command; GH release notes template; §7 post-tag verification scripts; §8 8 failure-mode recoveries). **Obj 7 deliverables (2)** — `m01_obj7_repo_review_audit_findings.md` (audit findings; 13 sections; 8 sub-checks (a)–(h); 38 findings (S-1 to S-11, NC-1 to NC-4, ND-1 to ND-3, TC-1 to TC-5, DL-1 to DL-3, PS-1 to PS-4, AL-1 to AL-5, AP-1 to AP-3); 2 high-severity (S-1 skill_workspace_upgrade rewrite + TC-1 Standard footer fix — both M03/M07-bound); 4 patterns 10-dim scored (node.aDNA 42/50, skill_git_remote_setup 32/35, publish-skill family 33/35, LatticeScope.aDNA 33/50 floor); D7 Federation extended with airlock-presence sub-check; Obj 1 §5 issues I-2/I-4/I-8/I-10/I-12/I-14 addressed); `what/decisions/adr_009_aDNA_naming_convention.md` (ADR-009 draft; status: proposed; 11 sections; codifies `<name>.aDNA/` ↔ `<name>.aDNA.git` isomorphism + snake_case `<name>`; 4 grandfathered exception classes (hyphen-flat × 4 + no-remote × 7 + path-style × 1 + template-repo × 1); §4 going-forward enforcement on 5 touchpoints; §5 application scope: forced for new vaults, operator-discretionary for existing; ratifies at M07 close per amendment). **Daedalus coord memo flip**: Rosetta-side `coord_2026_05_08_publish_rewrite.md` flipped to `status: completed` after discovering Spacemacs mirror Daedalus signature 2026-05-08T21:03:45Z. M05 publish-skill family ship now unblocked. Next: Stage 2 Session 5 (Obj 8 upgrade guide + per-vault coord memo template + Obj 9 token measurement protocol; Obj 10 LatticeScope vault scope-stretch).

### Pending Campaigns (post-v2 successors — seeded but not yet open)

#### `campaign_adna_v3_ecosystem_compliance` (planned successor — seeded 2026-05-08)

`how/campaigns/campaign_adna_v3_ecosystem_compliance/` — applies v7.0 changes per-vault to the 19 active aDNA ecosystem vaults. Strategic intent: bring the lattice into full v7.0 compliance after the standard codifies it. Preliminary phase structure: P0 planning + P1 audit + P2 bulk skill upgrade + P3 git remote setup + GitHub naming standardization + P4 airlock adoption + workspace router resync + P5 final ecosystem audit + AAR. Preliminary mission outline: M01-EC (per-vault audit) → M02-EC (bulk skill upgrade) → M03-EC (git remote setup) → M04-EC (GitHub repo rename) → M05-EC (airlock adoption) → M06-EC (workspace router resync) → M07-EC (final audit + AAR). Estimated 12–20 sessions (recalibrated by M01-EC). Persona: Rosetta continues. **Opens at v2 P3 phase gate** (post-M03 flatten + M08a/M08b shipped); M11 of v2 finalizes the mission tree before this campaign opens.

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

**Primary track — `campaign_adna_v2_infrastructure` Stage 2 Session 4** (next):
1. Execute M01 Session 4 — **Obj 6 (Governance v7.0 version bump design + semver discipline ADR draft → deliverable 11)** + **Obj 7 (general repo review + 10-dim audit + ADR-009 naming-convention draft per amendment + airlock-presence audit per amendment → audit findings table)**. **Obj 8 (upgrade guide draft + per-vault coord memo template + airlock + naming sections → deliverables 12-13)** is **scope-stretch** — fold in if S2 S4 has budget; defer to S2 S5 otherwise.
2. Read first: [[how/campaigns/campaign_adna_v2_infrastructure/missions/mission_adna_infra_planning_01.md|mission spec]] §Obj 6 (lines 398–447) + §Obj 7 (lines 449–513 — full audit checklist including amendment subsections (g) ADR-009 draft + (h) airlock-presence audit); [[how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj5_github_minimalism_audit.md|m01_obj5_github_minimalism_audit.md]] §7 (naming-convention findings N-1/N-2/N-3/N-4 — feeds ADR-009 directly); [[how/campaigns/campaign_adna_v2_infrastructure/missions/artifacts/m01_obj0_ecosystem_matrix.md|m01_obj0_ecosystem_matrix.md]] §1 + §5 (the grandfathered exception list — ADR-009 cites verbatim).
3. Key Obj 6 deliverables: `m01_obj6_semver_discipline_adr.md` (recommendation artifact analogous to S2 S3's `m01_obj4_publish_naming_adr.md`) + `m01_obj6_version_bump_checklist.md` (CHANGELOG v7.0 entry skeleton + frontmatter version field flip + git tag command + GitHub release notes template).
4. Key Obj 7 deliverables: `m01_obj7_repo_review_audit_findings.md` (10-dim compliance audit + skill-freshness pass + template-completeness pass + dead-link scan + prose-simplification candidates). The ADR-009 draft itself becomes `what/decisions/adr_009_aDNA_naming_convention.md` with `status: proposed` (M07-bound; ratified at M07 close).
5. Sequencing reminder: Obj 6 + Obj 7 produce **specs + ADR drafts**, not implementations. M06 + M07 execute the specs after operator ratification.

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

## Last Session (2026-05-08 — Stage 2 Session 4, M01 Obj 6 + Obj 7)

Design session — produced 4 artifacts (semver discipline ADR recommendation + Governance v7.0 version-bump checklist + repo review audit findings + ADR-009 naming-convention draft) and flipped the Daedalus coord memo to completed. **10 of 11 M01 objectives now complete.**

**Obj 6 (2 deliverables)**: `m01_obj6_semver_discipline_adr.md` is the ADR recommendation (analogous to S2 S3's `m01_obj4_publish_naming_adr.md` for ADR-010). Codifies aDNA's two-track Major.Minor-only versioning policy verbatim from `adna/.adna/CHANGELOG.md` lines 9-27 — already practiced, never ADR-codified. Six concerns documented (no top-level ADR / informal bump triggers / implicit no-patch / implicit two-track independence / first major-bump test / stale Standard-footer surface). Recommends ADR-011 drafted at M06 start, ratified to `accepted` when v7.0 tag lands. Documents v7.0 as Major Governance (flatten + repo rename are breaking) per §5 classification matrix; Standard stays at v2.2. Six edge-case rules including hotfix-as-Minor-with-Fixed-category, immutable-tag rule, out-of-band-bump-forbidden. New finding surfaced: `adna/.adna/what/docs/adna_standard.md` line 1483 carries stale `*End of aDNA Universal Standard v2.0*` footer (canonical title at line 3 reads v2.2) — fix delegated to M07 as recommendation §2-D + Obj 7 finding TC-1. `m01_obj6_version_bump_checklist.md` is the M06 runbook covering: 6 §0 preconditions; pre-populated CHANGELOG v7.0 entry skeleton with all six Keep-a-Changelog sections (Added 14 items + Changed 9 + Deprecated 3 + Removed 3 + Fixed 4 + Security 1) sourced from M01 Obj 0/1/2/4/5/6 inputs; frontmatter version flip `version: "6.0"` → `"7.0"` + `last_edited_by` + line-10 doc-comment; Standard track verification (line-3 title canonical at v2.2; line-1483 footer fix); MANIFEST has no version field — verified empty; annotated git tag command with full release-notes message; GitHub release-notes template in operator-facing dual-audience prose (with explicit "Governance only" call-out so operators know whether to re-read spec); §7 post-tag verification (4 grep checks + fresh-clone smoke test); §8 8 failure-mode recoveries.

**Obj 7 (2 deliverables)**: `m01_obj7_repo_review_audit_findings.md` is the comprehensive audit (13 sections covering 8 sub-checks (a)–(h)). Findings: 38 total — 2 high-severity (S-1 skill_workspace_upgrade.md symlink-step removal + body rewrite for v7.0 flat layout per ADR-007 + I-2 missing CLAUDE.md row; TC-1 stale Standard footer one-line fix), 11 medium-severity (S-3/4/5/6/7/8 skill freshness updates; AL-2 aDNA.aDNA skills table 13/18 incomplete; PS-1/3 prose simplification 8-12% achievable; AP-2 aDNA.aDNA airlock-as-directory deferred to v3 successor; DL-3 forward-reference wikilinks resolve as ADRs 008/010/011 ship), 25 low-severity (mostly informational confirmations: NC-1 to NC-4 naming consistency clean, ND-1 to ND-3 drift-free in extended scope, TC-2 to TC-5 templates clean, AL-1/3/4/5 aDNA.aDNA local clean). 4 patterns 10-dim scored: node.aDNA 42/50 (84%, sourced from m01_obj3 pre-check); skill_git_remote_setup 32/35 (91%, sourced from spec); publish-skill family 33/35 (94%, sourced from ADR-010 + family spec); LatticeScope.aDNA 33/50 (66% floor, M10 produces final design). All ≥ 3 on every applicable dimension — no M07-blocking. D7 Federation extended with airlock-presence sub-check per amendment 2026-05-08. Obj 1 §5 issues I-2/I-4/I-8/I-10/I-12/I-14 all addressed. `what/decisions/adr_009_aDNA_naming_convention.md` is the ADR-009 draft (status: proposed). Codifies `<name>.aDNA/` directory ↔ `<name>.aDNA.git` GitHub repo isomorphism + snake_case `<name>` rule + display-name unconstrained + path-style remotes permitted. 4 grandfathered exception classes: §3.1 hyphen-flat repos (4 — science-stanley-adna / wga-adna / context-commons-adna / LAStartupLattice); §3.2 no-remote vaults (7 — Spacemacs / VideoForge / III / VAASLattice / zeta / RareHarness / strategic_interface_protocol); §3.3 path-style local remote (1 — LPWhitepaper); §3.4 template-repo exception (1 — Agentic-DNA → adna per ADR-006). §4 going-forward enforcement on 5 touchpoints (skill_project_fork warns; skill_git_remote_setup lints; skill_workspace_upgrade references; skill_lattice_publish references; 10-dim D7 audit checks). §5 application scope: FORCED for new vaults; OPERATOR-DISCRETIONARY for existing 19 ecosystem vaults; PARTNER-DISCRETIONARY for external orgs (Wilhelm Foundation et al.); v3 successor's M04-EC handles per-vault rename application. Ratifies at M07 close per amendment.

**Daedalus coord memo flip (Phase 4)**: Discovered during reading pass that Spacemacs mirror was already signed at 2026-05-08T21:03:45Z (~10 min after S2 S3 close); Daedalus accepted all three commitments unconditionally; backlog idea `idea_skill_publish_lattice_git_fix.md` flipped to `status: in_progress` at co-sign. Edited Rosetta-side `coord_2026_05_08_publish_rewrite.md`: frontmatter `status: open → completed` + added `last_edited_by: agent_stanley` + co-sign timestamp annotation; §6 Daedalus block updated with verbatim signature confirmation + 4 commitment items; §9 Status flipped to Completed with M05-unblocked notation + Spacemacs migration sequencing + backlog idea status note. **M05 publish-skill family ship is now unblocked.**

Operation Rosetta Phase 8 stays queued — no work this session.

## Next Session Prompt

> Resume `campaign_adna_v2_infrastructure` in `aDNA.aDNA/`. **Stage 2 Session 4 closed 2026-05-08T21:29:34Z** — Obj 6 + Obj 7 complete. M01 now **10 of 11 objectives complete** (Obj 0/1/2/3/4/5/6/7 closed; Obj 8/9/10/11 remaining). The 4 sibling artifacts from S2 S4 (semver ADR + version-bump checklist + repo review audit findings + ADR-009 draft) are ready for M03/M05/M06/M07 consumption. The Daedalus coord memo flipped to `status: completed` (Rosetta-side caught up with Spacemacs-side; M05 publish-skill family ship is unblocked). Open **Stage 2 Session 5** — M01 **Objective 8 (upgrade guide v6→v7 + per-vault coord memo template + airlock + naming sections per amendment → original deliverables 12-13 in mission spec, renumbered to deliverable 23 to avoid collision with Obj 7's deliverables 12a/12b) + Objective 9 (context/token optimization audit → deliverable 14)**. Obj 10 (LatticeScope.aDNA vault design + Prometheus persona + sub-campaign doc draft → deliverables 15-17) is **scope-stretch** — fold in if S2 S5 has budget; defer to S2 S6 otherwise. Read in order: (1) **`how/campaigns/campaign_adna_v2_infrastructure/missions/mission_adna_infra_planning_01.md`** §Obj 8 (lines 515–593 — upgrade guide design + M08a/M08b mapping + amendment subsections airlock + naming) + §Obj 9 (lines 593–639 — token measurement protocol + baseline measurement) + §Obj 10 (lines 641–722 — LatticeScope vault design + Prometheus + sub-campaign); (2) **`m01_obj6_version_bump_checklist.md`** §1 — pre-populated v7.0 CHANGELOG entry; the upgrade guide narrates this for operators; (3) **`m01_obj7_repo_review_audit_findings.md`** §11 action summary — feeds the upgrade guide's "what changes" list; (4) `m01_obj0_ecosystem_matrix.md` §3 (external operators) + §4 (per-change blast radius narrative) — feeds per-vault coord memo template; (5) `who/coordination/coord_2026_05_08_publish_rewrite.md` — pattern source for per-vault coord memo template (airlock structure: header → request → handshake → response → co-sign); (6) `III.aDNA/how/airlock/AIRLOCK.md` + `VideoForge.aDNA/how/airlock/AIRLOCK.md` — airlock-pattern references for upgrade guide §"Optional: adopt airlock pattern" section per amendment. Then **Obj 8** — author `m01_obj8_upgrade_guide_v6_to_v7.md` (the upgrade guide draft — destination at M08a is `adna/.adna/how/docs/upgrade_v6_to_v7.md` after flatten) covering overview (3 paragraphs, dual-audience), breaking changes (repo flatten + skill_lattice_publish family rewrite), new patterns (node.aDNA + LatticeScope.aDNA), non-breaking changes (v7.0 tag + repo rename + deploy_manifest move), validation runbook, optional airlock-pattern adoption section + naming-convention going-forward section per amendment. Then `m01_obj8_per_vault_coord_memo_template.md` (template for the ~17 per-vault coord memos M08a delivers). Then **Obj 9** — author `m01_obj9_token_measurement_protocol.md` (baseline measurement methodology + instrumentation + per-mission-class budget targets + 19-vault baseline plan + optimization opportunity catalog). **Daedalus mirror status: already flipped this session.** Both `coord_2026_05_08_publish_rewrite.md` (Rosetta-side) and Spacemacs mirror show `status: completed`. **New finding to track**: `adna/.adna/what/docs/adna_standard.md` line 1483 stale `*End of aDNA Universal Standard v2.0*` footer (canonical title at line 3 is v2.2). Captured as Obj 6 §2-D + Obj 7 TC-1 (high severity, one-line fix). M07 absorbs. Operation Rosetta Phase 8 still queued — do not start Phase 8 work until v2 infrastructure campaign completes its current phase or operator routes you there explicitly.
