---
type: state
created: 2026-04-13
updated: 2026-04-23
status: active
last_edited_by: agent_stanley
tags: [state, governance]
---

# Operational State

Dynamic operational snapshot for cold-start orientation. Updated each session.

## Current Phase

**Phase 7 active — M27 (D3: Navigation & IA) 6/10 cycles complete; cycle 27 next. UI/UX expansion plan approved 2026-04-23; Workstreams A (UX heuristic audit) + B (new `reviewer` entity type) complete; Workstream C next.** Phases 0-6 complete (89 vault content files + 116-page live site). Phase 6 deployed to Vercel 2026-04-16. Phase 7 executing: 100-cycle III loop across 10 themed decadals. D1 + D2 closed 2026-04-17 — persona ranker 4.0 → 4.70 across D2 (Δ +0.70, first pre/post delta in Phase 7). D3 kickoff 2026-04-18: breadcrumb trail shipped site-wide and D3 ranker baseline recorded (4.70 = D2 close, by construction). Cycle 22 (2026-04-19): pattern-page `## Next Steps` CardGrids. Cycle 23 (2026-04-19): global `## Related Elsewhere` CardGrid rolled below Next Steps on all 29 content pages. Cycle 24 (2026-04-21): `← Back to {section}` back-to-index link + sidebar nav audit. Cycle 25 (2026-04-21): `GlossaryTooltip.astro` rollout across all 12 concept MDX files — 23 new tooltips. **Cycle 26 (2026-04-22, bundled): (a) `GlossaryTooltip.astro` rollout across tutorial MDX files — 13 new tooltips across 6 newly-wired files (7/9 tutorials wired; 2 tutorials intentionally 0-wrap under "do not invent content" rule — `build-a-lattice.mdx` + `federate-a-vault.mdx` have no glossary-backed prose first-mentions). (b) Theme-persistence fix — IIFE moved to `<head>`, idempotent `classList.toggle`, `astro:page-load` + `prefers-color-scheme` listeners; FOUC closed and `ClientRouter` persistence restored. (c) Homepage hero tagline replaced with user-directed "aDNA is an integrated standard for knowledge graph driven context engineering." + plain-language sub-gloss on hero-subtitle (dual-audience posture).** Lighthouse held 100/100/100/100 on all 5 sample pages across all six cycles.

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
| Phase 6: Website v2 | **Complete** | M19 | How section live: 11 new pages + 4 index pages, MDX escaping fixes |
| Phase 7: 100-Cycle III Loop | **Active** | M24-M35 | D1 + D2 complete (cycles 1-20); D3 in progress (cycles 21-26 complete, 27-30 pending); D4-D10 pending |

## Phase 7 Progress

- **M24: Baseline** — Complete (97.4/98.4/100/100 average across 5 sample pages).
- **M25: D1 Accessibility Perfection** — **Complete** (cycles 1-10). All 5 sample pages 100/100/100/100. Extended axe-core across 15 additional pages: 0 violations. AAR: [aar_phase7_d1.md](how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d1.md).
- **M26: D2 Content Clarity Sprint** — **Complete** (cycles 11-20). Persona ranker 4.0 → **4.70** (Δ +0.70 — first pre/post delta). 4 new persona landings (`/educators`, `/enterprise`, `/compliance`, `/startup-first-hour`) — every D1 persona-gap item closed. 21 content files (13 concepts + 8 patterns) brought to rule-#6 compliance; 21 files (12 concepts + 9 tutorials) converted to `## Next Steps` CardGrid. AAR: [aar_phase7_d2.md](how/campaigns/campaign_rosetta/missions/artifacts/aar_phase7_d2.md).
- **M27: D3 Navigation & IA** — **Active** (cycles 21-30; 6/10 complete). Mission scaffolded 2026-04-18 ([mission_m27_d3_navigation_ia.md](how/campaigns/campaign_rosetta/missions/mission_m27_d3_navigation_ia.md)); 10 objectives mapped from D2 AAR priority queue. **Cycle 21 ✅ 2026-04-18** — D3 ranker baseline (4.70); `Breadcrumb.astro` shipped site-wide. **Cycle 22 ✅ 2026-04-19** — `## Next Steps` + `<CardGrid columns={2}>` on all 8 pattern MDX files. **Cycle 23 ✅ 2026-04-19** — `## Related Elsewhere` CardGrids on all 29 content pages (116 lateral edges). **Cycle 24 ✅ 2026-04-21** — `← Back to {section}` link + sidebar audit (5 dead hrefs + 2 orphans closed). **Cycle 25 ✅ 2026-04-21** — `GlossaryTooltip.astro` rollout across 11 new concept MDX files (12th retained as pre-wired demo); 23 new tooltips. **Cycle 26 ✅ 2026-04-22 (bundled)** — (a) `GlossaryTooltip.astro` rollout across tutorial MDX files: 13 new tooltips on 6 newly-wired files (`design-a-mission`, `extend-the-ontology`, `navigate-a-vault`, `question-test`, `run-a-campaign`, `write-a-context-file`); `first-claude-md.mdx` = retained demo; `build-a-lattice.mdx` + `federate-a-vault.mdx` = intentionally 0-wrap (no glossary-backed prose first-mentions, "do not invent content" rule). (b) Theme-persistence fix in `site/src/layouts/BaseLayout.astro`: IIFE moved to `<head>`, idempotent `classList.toggle('dark', dark)`, `astro:page-load` + `prefers-color-scheme change` listeners added; FOUC closed, `ClientRouter` persistence restored — closes `how/backlog/idea_theme_persistence_bug.md`. (c) Homepage hero tagline replaced at user direction with "aDNA is an integrated standard for knowledge graph driven context engineering." + plain-language sub-gloss ("A shared folder layout and metadata spec so AI agents land oriented — no re-learning your project every time.") on `hero-subtitle` to preserve dual-audience on-ramp (Standing Order #7). Lighthouse held 100/100/100/100 on all 5 sample pages across all six cycles; 30/30 gates pass.

### Persona Ranker (D2 close, 2026-04-17)

| Dimension | D1 close | D2 start | D2 close | Δ (D2 start→close) |
|-----------|----------|----------|----------|---------------------|
| Findability | 4.0 | 4.0 | 4.6 | +0.6 |
| Comprehension | 3.8 | 3.8 | 4.8 | +1.0 |
| Actionability | 3.6 | 3.6 | 5.0 | +1.4 |
| Trust | 4.8 | 4.8 | 5.0 | +0.2 |
| Relevance | 3.6 | 3.6 | 4.8 | +1.2 |
| Delight | 4.0 | 4.0 | 4.0 | 0 |
| **Overall** | **4.0** | **4.0** | **4.70** | **+0.70** |

## What's Working

- Full documentation site live at https://adna-docs.vercel.app — 116 pages
- Homepage: branded aDNA banner, plain-language lede, Operational Ontology section, Context Engineering section, all with sub-glosses (D2 cycle 11)
- All three triad legs on site plus 4 persona-targeted landings: `/educators`, `/enterprise`, `/compliance`, `/startup-first-hour`
- 89 vault content files + 116 site pages
- Rule #6 (plain-language opening) satisfied on all 13 concepts and 8 patterns
- `## Next Steps` CardGrid standard on all 12 concept pages + 9 tutorial pages (D2 cycle 16)
- `GlossaryTooltip.astro` component rolled across all 12 concept pages + 7 of 9 tutorial pages — 39 tooltips total site-wide (concept jargon + tutorial first-mentions self-define inline with `aria-describedby` + keyboard focus); 2 tutorials intentionally 0-wrap under "do not invent content" rule (`build-a-lattice.mdx`, `federate-a-vault.mdx`)
- Light/dark theme: no FOUC on cold load; `.dark` class persists across `ClientRouter` navigation; `prefers-color-scheme` change tracked live mid-session (cycle 26)
- Homepage hero leads with "aDNA is an integrated standard for knowledge graph driven context engineering." + plain-language sub-gloss (cycle 26)
- `scripts/reading_level.mjs` available for ongoing FKGL measurement
- Full keyboard accessibility + WCAG 2.1 AA across the site — 20+ pages tested, zero violations
- Lighthouse 100/100/100/100 on all 5 sample pages held through D2 close (no regression across 10 cycles of content work)

## UI/UX Expansion Plan (approved 2026-04-23)

Four-workstream plan interleaved into Phase 7 (not a parallel Phase 8). Details: `/Users/stanley/.claude/plans/please-read-the-claude-md-vivid-hinton.md`.

- **Workstream A — UX heuristic audit** ✅ complete 2026-04-23. Artifact: `how/campaigns/campaign_rosetta/missions/artifacts/ux_audit_2026_04_23.md`. 10 findings ranked High/Med/Low, each routed to a decadal. Headline: hero-lead jargon (F-01), under-sized canonical explainer (F-02), "Why/How" crispness gap (F-03) are the three highest-leverage defects. Feeds cycle 27+, D4, D8, D9.
- **Workstream B — `reviewer` entity type** ✅ complete 2026-04-23. 11th Rosetta ontology extension live. Files created: `who/reviewers/AGENTS.md`, `how/templates/template_reviewer.md`, and 5 reviewer personas (`reviewer_design_critic.md` — Delight/Visual Clarity; `reviewer_accessibility_auditor.md` — Comprehension/Cognitive Load; `reviewer_content_strategist.md` — Comprehension+Findability; `reviewer_information_architect.md` — Findability/Onboarding Scent; `reviewer_newcomer_stress_tester.md` — Actionability/Onboarding Scent). Each persona 651–783 words, 6–7 wikilinks (exceeds rule #10), self-references concrete audit findings (F-01, F-02, F-03, F-05, F-07, F-08, F-09, F-10) per standing rule #8. Project `CLAUDE.md` Extended Ontology table + Project Map updated (count 10→11, WHO 2→3). `how/templates/AGENTS.md` template index updated (Extension Templates Rosetta 10→11). New dimensions (Visual Clarity, Cognitive Load, Onboarding Scent) named but await definition in Workstream C (`skill_decadal_aar` Step 4b); 6-dim × 5-adopter ranker remains the hard gate.
- **Workstream C — Skill + tracker updates** (next session). Add Step 4b Reviewer Lens Pass to `skill_decadal_aar.md` (mandatory on D4/D8/D9; optional elsewhere) including explicit definitions of Visual Clarity, Cognitive Load, Onboarding Scent. Add pointer to reviewer lens in `skill_iii_cycle.md` Step 3 (target selection) for design-adjacent cycles. Rename D4 → "Visual Identity & First-Contact", D8 → "Interaction, Motion & Empty States", D9 → "Persona-Driven Polish & Narrative Coherence" in `iii_cycle_tracker.md` + `campaign_rosetta.md` M28/M32/M33 descriptions. Insert "UX audit 2026-04-23" reference row above cycle 27 in the tracker. Update `mission_m27_d3_navigation_ia.md` O7 preamble to note UX audit findings feed cycle 27+.
- **Workstream D — Resume cycle 27** informed by audit. F-06 (self-reference on explainer/get-started) + trimmed F-02 (worked example on `/learn/what-is-adna`) ride cycle 27 if scope permits.

## Active Blockers

None. The theme-persistence bug flagged for cycle 26 open was fixed in cycle 26 and the backlog idea marked `status: resolved`.

## Next Steps

1. **Workstream C (next session)** — update `skill_decadal_aar.md` (Step 4b — Reviewer Lens Pass with explicit definitions of Visual Clarity / Cognitive Load / Onboarding Scent, mandatory on D4/D8/D9, optional elsewhere, preservation clause for 6-dim gate), `skill_iii_cycle.md` (pointer to reviewer lens in Step 3 for design-adjacent cycles), `iii_cycle_tracker.md` (D4/D8/D9 theme renames + "UX audit 2026-04-23" reference row above cycle 27), `campaign_rosetta.md` (M28/M32/M33 short descriptions to match new themes), `mission_m27_d3_navigation_ia.md` (O7 preamble note: "UX audit findings 2026-04-23 feed cycle 27+ persona landing decisions").
2. **Workstream D / Cycle 27 (after C)** — M27 O7 researcher persona landing. Informed by UX audit findings F-02/F-06 (self-reference + worked example edits bundled if scope allows).
3. **Cycles 28-30** — remaining M27 objectives: tutorial-ordering + adopter decision tree (O8), reference-section linkage (O9), D3 ranker close + decadal AAR (O10). D3 AAR will reference UX audit as a D4 charter input.
4. **Cycle 31 (D4 open)** — first invocation of Reviewer Lens Pass (Step 4b); first parallel reviewer scorecard against the 5-reviewer bench.

## Pending Manual Actions

- **GitHub social preview**: Upload `site/public/images/og-default.png` at github.com/LatticeProtocol/aDNA.aDNA > Settings > Social preview
- **Vercel Git integration**: Connect repo at vercel.com > adna-docs > Settings > Git for auto-deploy (currently manual via `vercel --prod`)

## Last Session (2026-04-23 — Workstream B, `reviewer` entity type)

11th Rosetta ontology extension scaffolded via `skill_new_entity_type`. **Created**: `who/reviewers/AGENTS.md` (format spec + load/skip decision + new-dimension table — Visual Clarity, Cognitive Load, Onboarding Scent with preservation clause), `how/templates/template_reviewer.md` (frontmatter schema: `primary_lens` / `secondary_lens` / `domain`; 6-section skeleton: Background → What They Evaluate → Critique Prompts → Primary Ranker Lens → Example Audit Finding → Related; compliance comment covering rules #10, #8, #6, #7), and 5 reviewer personas totaling 3,534 words (avg 707, all within 400–800 target): `reviewer_design_critic.md` (Delight / Visual Clarity — owns F-01, F-05, F-07, F-10), `reviewer_accessibility_auditor.md` (Comprehension / Cognitive Load — owns F-01, "newcomer-cognitive a11y: C+" headline), `reviewer_content_strategist.md` (Comprehension + Findability, no new secondary — owns F-02, F-06), `reviewer_information_architect.md` (Findability / Onboarding Scent — owns F-07, F-09), `reviewer_newcomer_stress_tester.md` (Actionability / Onboarding Scent — owns F-01, F-03, F-08). **Edited**: project `CLAUDE.md` (Extended Ontology table gained `reviewer` row as 11th extension; Project Map gained `who/reviewers/` bullet; extension count header 10→11, WHO 2→3) and `how/templates/AGENTS.md` (Extension Templates — Rosetta section 10→11, `template_reviewer.md` row inserted). **Verification**: every reviewer file has 6–7 wikilinks (rule #10 requires ≥2); every file cites a specific UX audit finding ID with file path + line number (rule #8 self-reference); all 5 files link to `ux_audit_2026_04_23` + `skill_decadal_aar` + at least one adopter + at least one concept/pattern/tutorial. Wikilink targets verified against actual filenames (two early references corrected: `concept_convergence_model` → `concept_convergence`, `pattern_agents_md_directory_index` → `pattern_agents_md`). `git status site/` clean — vault-only session by design. Files touched: 7 created (AGENTS.md, template, 5 personas, session file) + 2 edited (project CLAUDE.md, templates/AGENTS.md) + STATE.md.

## Previous Session (2026-04-23 — UX audit, Workstream A)

UI/UX expansion plan approved (`/Users/stanley/.claude/plans/please-read-the-claude-md-vivid-hinton.md`) — interleave into Phase 7 rather than open a parallel Phase 8; add `reviewer` as a new entity type; preserve 6-dim ranker as hard gate. **Workstream A executed**: 4-path UX heuristic audit (`/`, `/learn/what-is-adna`, `/get-started`, `/learn/tutorials/first-claude-md`) against built site `dist/` (HTML-weight + word count + DOM density + 60s what/why/how test + generic-AI-aesthetic scan). 10 findings produced, severity-ranked, each routed to a decadal (M27 residual / D4 / D8 / D9). **Three High-severity findings**: F-01 homepage hero-lead is jargon-dense (violates campaign rule #6 plain-language), F-02 `/learn/what-is-adna` is ~130 author words — under-delivers on the homepage CTA's promise, F-03 Why/How crispness fails on the 60-second test (mechanism abstracted; pain state not stated on homepage). Automated a11y remains perfect (0 WCAG violations); newcomer-cognitive a11y scored C+. Artifact: `how/campaigns/campaign_rosetta/missions/artifacts/ux_audit_2026_04_23.md` (evidence-only, dual-audience, self-referencing, 10 findings + scorecard + decadal routing table + "answers to the three headline questions" section). Files touched: new artifact + session file + STATE.md. No site files edited this session (audit is read-only by design).

## Earlier Session (2026-04-22 — cycle 26)

Phase 7 D3 O6 executed plus two bundled polish items at user direction. **(1) Tutorial tooltip rollout**: wrapped `GlossaryTooltip.astro` across 6 newly-wired tutorial MDX files in `site/src/content/guides/` — `design-a-mission.mdx` (1 wrap: session), `extend-the-ontology.mdx` (3: agents-md, question-test, triad), `navigate-a-vault.mdx` (3: agents-md, session, governance-file), `question-test.mdx` (1: triad; self-referential question-test wrap skipped per cycle-25 governance-files precedent), `run-a-campaign.mdx` (2: mission, session), `write-a-context-file.mdx` (3: context-library, frontmatter, agents-md). `first-claude-md.mdx` retained as pre-existing 2-wrap demo. `build-a-lattice.mdx` + `federate-a-vault.mdx` intentionally 0-wrap (no glossary-backed prose first-mentions — "lattice"/"federation"/"FAIR" absent from the 25-entry `/glossary/`; cycle-25 "do not invent content to force a wrap" rule honored). Total: 13 new tooltips on 7/9 tutorials. **(2) Theme-persistence fix** (`site/src/layouts/BaseLayout.astro`): moved the theme-apply IIFE from end-of-`<body>` into `<head>` (same `is:inline` pattern as the `no-js` remove script); rewrote as idempotent `document.documentElement.classList.toggle('dark', dark)` (both add- and remove-dark branches fire); added `document.addEventListener('astro:page-load', applyTheme)` so `ClientRouter` navigation re-evaluates theme; added `matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme)` for live OS-theme tracking. Stale end-of-`<body>` script block removed. Closes `how/backlog/idea_theme_persistence_bug.md`. **(3) Homepage hero tagline** (`site/src/pages/index.astro:89-90`): `hero-lead` replaced with "aDNA is an integrated standard for knowledge graph driven context engineering." (user-directed verbatim); `hero-subtitle` rewritten as "A shared folder layout and metadata spec so AI agents land oriented — no re-learning your project every time." (plain-language sub-gloss, preserves dual-audience on-ramp per Standing Order #7). Validation: `npm run build` 116 pages / 2.44s / 0 errors; `npm run test:gates` 30/30 pass (G4 axe-core WCAG 2.1 AA zero violations on homepage (new hero), concept, tutorial (tooltip-bearing), pattern, 404); Lighthouse 100/100/100/100 on all 5 sample pages after cache warm-up (desktop preset — matches cycles 21-25 methodology); theme-smoke structural check via built `dist/index.html` confirms 4× `applyTheme` references in `<head>`, 0× in `<body>`, all three listeners wired, `ClientRouter` intact. Evidence: `site/evidence/cycle26/lh_{homepage,concept,tutorial,glossary,adopter}.json`. Files touched: 6 tutorial MDX files + `site/src/layouts/BaseLayout.astro` + `site/src/pages/index.astro` + `iii_cycle_tracker.md` (cycle 26 entry + D3 schedule row 6/10) + `mission_m27_d3_navigation_ia.md` (O6 checkboxes + progress 6/10) + `STATE.md` + `how/backlog/idea_theme_persistence_bug.md` (status: resolved) + 5 new Lighthouse JSON artifacts + session file.

## Next Session Prompt

> Resume Operation Rosetta in `aDNA.aDNA/`. UI/UX expansion plan (approved 2026-04-23, `/Users/stanley/.claude/plans/please-read-the-claude-md-vivid-hinton.md`): Workstreams A (UX audit) + B (`reviewer` entity type) ✅ complete. **Open Workstream C — Skill + Tracker Updates.** Four edits, all vault-only, no site touch:
> 1. **`how/skills/skill_decadal_aar.md`** — insert **Step 4b: Reviewer Lens Pass** between existing Step 4 and Step 5 (or wherever the 4→5 handoff lives — read the skill first to confirm step structure). Step 4b content: (a) mandatory on D4 (Visual Identity & First-Contact), D8 (Interaction, Motion & Empty States), D9 (Persona-Driven Polish & Narrative Coherence); optional on all other decadals; (b) procedure: load `who/reviewers/` AGENTS.md + all 5 reviewer files, walk each critique prompt against the target artifact, produce 5 qualitative critique sections + a parallel scorecard on Visual Clarity / Cognitive Load / Onboarding Scent (1–5 each); (c) **explicit definitions** of the 3 new dimensions — Visual Clarity (typographic distinctiveness, palette cohesion, section rhythm, generic-AI-aesthetic absence), Cognitive Load (reading-level parity, jargon density, working-memory budget, sentence-break integrity), Onboarding Scent (per-click scent — does the landed page match the promise of the link that led to it?); (d) **preservation clause** — the original 6-dim × 5-adopter ranker matrix remains the hard gate for cycle advancement (4.0 threshold); the reviewer scorecard is parallel reporting only and never modifies the 6-dim deltas.
> 2. **`how/skills/skill_iii_cycle.md`** — add a short pointer in Step 3 (target selection) noting that for design-adjacent cycles, the reviewer bench (`who/reviewers/`) can inform target priority; link to `skill_decadal_aar` Step 4b.
> 3. **`how/campaigns/campaign_rosetta/missions/artifacts/iii_cycle_tracker.md`** — rename D4 "Visual Polish" → "Visual Identity & First-Contact", D8 "Component & Interaction" → "Interaction, Motion & Empty States", D9 "Persona-Driven Polish" → "Persona-Driven Polish & Narrative Coherence". Insert a reference row above cycle 27 pointing to the UX audit artifact (one-line note: "UX audit 2026-04-23 — 10 findings feed D3-residual / D4 / D8 / D9; see `ux_audit_2026_04_23.md`").
> 4. **`how/campaigns/campaign_rosetta/campaign_rosetta.md`** — update M28, M32, M33 short descriptions to match new theme names.
> 5. **`how/campaigns/campaign_rosetta/missions/mission_m27_d3_navigation_ia.md`** — add a one-line note in O7 preamble: "UX audit findings 2026-04-23 feed cycle 27+ persona landing decisions (see `ux_audit_2026_04_23.md` for F-02, F-06 targeting `/learn/what-is-adna`)."
>
> **Validation**: dry-pass `skill_decadal_aar` Step 4b against the existing D1 or D2 AAR data — the new procedure should produce useful qualitative critique without inflating the existing 6-dim deltas. `grep "reviewer" how/campaigns/campaign_rosetta/campaign_rosetta.md` returns updated M28/M32/M33 lines. **Do not** touch site files. **Do not** invoke the reviewers against any real cycle yet — first live invocation is cycle 31 (D4 open) per the approved sequencing. After Workstream C lands, Workstream D resumes M27 cycle 27 (researcher landing). Reviewers currently on disk: `who/reviewers/{AGENTS,reviewer_design_critic,reviewer_accessibility_auditor,reviewer_content_strategist,reviewer_information_architect,reviewer_newcomer_stress_tester}.md`.
