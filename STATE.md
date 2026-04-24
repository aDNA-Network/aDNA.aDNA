---
type: state
created: 2026-04-13
updated: 2026-04-24
status: active
last_edited_by: agent_rosetta

tags: [state, governance]
---

# Operational State

Dynamic operational snapshot for cold-start orientation. Updated each session.

## Current Phase

**Phase 7 active — D7 complete (cycles 61-70), D8 queued behind phase gate.** Phases 0-6 complete (89 vault content files + 117-page live site). Phase 7 executing: 100-cycle III loop across 10 themed decadals. D1→4.35. D2→4.70. D3→4.83. D4→4.91. D5→4.94. D6→**4.96** (+0.02). D7 (SEO & Discoverability, 2026-04-24) closed →**4.97** (+0.01). **D7 changes**: JSON-LD coverage 55%→97% (16 missing index pages + HowTo for tutorials + BreadcrumbList via @graph bundle), heading hierarchy 45 violations→0 (CardGrid `<h3>`→`<p>` + 33 Pathway-2 MDX H1 strips), concept→tutorial cross-links (6 added), Patterns a11y 98→100. New `seo.ts` builders: `buildCollectionPageJsonLD`, `buildHowToJsonLD`, `buildBreadcrumbListJsonLD`. Gate-6-meta updated for @graph shape. Playwright 47/47. D7 AAR filed; M31 completed. D8 (Interaction Depth, cycles 71-80) opens on user command — **phase gate pending**.

## Active Campaign

**Operation Rosetta** (`how/campaigns/campaign_rosetta/`) — build the self-referential aDNA context graph.

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

- **M32: D8 Interaction Depth** — **Pending** (cycles 71-80). **Phase gate: awaiting user command to open.** Priority queue: replace "Demo coming soon" placeholders, add interactive code examples to tutorials, embed architecture diagrams on concept pages, "Try this in Claude Code" CTAs, progressive disclosure for glossary.

### Persona Ranker Summary

| Decadal | Close Score | Delta |
|---------|------------|-------|
| D1 (Accessibility) | 4.35 | +0.35 |
| D2 (Content Clarity) | 4.70 | +0.35 |
| D3 (Navigation & IA) | 4.83 | +0.13 |
| D4 (Visual Identity) | 4.91 | +0.08 |
| D5 (Mobile Experience) | 4.94 | +0.03 |
| D6 (Performance & Loading) | 4.96 | +0.02 |
| D7 (SEO & Discoverability) | **4.97** | **+0.01** |

**D7 dimension breakdown**: Findability 4.99 (+0.01) · Comprehension 5.00 (0) · Actionability 4.98 (+0.01) · Trust 5.00 (0) · Relevance 5.00 (0) · Delight 4.83 (+0.02)

## What's Working

- Full documentation site live at https://adna-docs.vercel.app — **117 pages**
- Lighthouse 100/100/100/100 desktop + **98-100 mobile Performance** across all tested pages (target ≥90 exceeded)
- Playwright **47/47** gates pass (gate-10-perf.spec.ts added D6)
- Homepage: plain-language hero-lead ("the genome of your project"), Problem→Shape→Win How it Works arc, dual-audience hero-subtitle
- `/learn/what-is-adna` expanded to ~700 words — before/after example, 3-question test, live vault self-reference
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

1. **D8 phase gate** — user opens D8 (Interaction Depth, cycles 71-80). Priority queue from D7 AAR: replace media placeholders, add interactive code examples, embed architecture diagrams, "Try this in Claude Code" CTAs, progressive disclosure for glossary.
2. **Verification tags (user action)** — register adna-docs.vercel.app at Google Search Console + Bing Webmaster Tools, obtain verification codes, add `<meta name="google-site-verification">` + `<meta name="msvalidate.01">` to `SEOHead.astro`.
3. **Deploy D7 to Vercel** — `cd site && vercel --prod` to push D7 changes to production.
4. **D9-D10** — Narrative Onboarding (Reviewer Lens Pass mandatory), Hardening & Closeout.

## Pending Manual Actions

- **GitHub social preview**: Upload `site/public/images/og-default.png` at github.com/LatticeProtocol/aDNA.aDNA > Settings > Social preview
- **Vercel Git integration**: Connect repo at vercel.com > adna-docs > Settings > Git for auto-deploy (currently manual via `vercel --prod`)
- **Vercel deploy (D7)**: Run `cd site && vercel --prod` to push D7 changes to production
- **Google Search Console**: Register adna-docs.vercel.app, obtain verification code, add `<meta name="google-site-verification" content="...">` to `SEOHead.astro`
- **Bing Webmaster Tools**: Register adna-docs.vercel.app, obtain verification code, add `<meta name="msvalidate.01" content="...">` to `SEOHead.astro`

## Last Session (2026-04-24 — D7 complete)

D7 closed at ranker **4.97** (+0.01). All 10 cycles (61-70) passed build and Playwright gates (47/47). Key D7 changes: JSON-LD coverage raised from 55% to 97% — CollectionPage on 16 missing index pages, HowTo on 5 tutorial pages, BreadcrumbList on 12 slug pages via @graph bundle pattern; heading hierarchy 45 violations → 0 (CardGrid `<h3>`→`<p>`, 33 Pathway-2 MDX H1 strips); Patterns a11y 98→100; 6 concept→tutorial cross-links added. New `seo.ts` builders: `buildCollectionPageJsonLD`, `buildHowToJsonLD`, `buildBreadcrumbListJsonLD`. SEOHead supports @graph bundle (array of schemas → one `<script>` tag). Gate-6-meta updated to accept both `@type` and `@graph` JSON-LD shapes. M31 marked completed. D8 phase gate pending.

## Next Session Prompt

> Resume Operation Rosetta in `aDNA.aDNA/`. D7 complete — ranker 4.97. **Open D8: Interaction Depth (cycles 71-80).** Priority queue from D7 AAR (`how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d7.md`): (1) Replace "Demo coming soon" media placeholders with real content — this is the primary Delight and Actionability ceiling for Educator persona, (2) Add interactive code examples or clipboard-copy to tutorial pages, (3) Embed architecture diagram (SVG/mermaid) on concept pages for visual learners, (4) Add "Try this in Claude Code" deep-link CTAs at tutorial completion, (5) Progressive disclosure for glossary entries. Before starting: deploy D7 to Vercel (`cd site && vercel --prod`). Create mission file M32 and begin cycle 71. Remember to add a gate before implementing any D8 feature (track placeholder count or demo count so progress is measurable).
