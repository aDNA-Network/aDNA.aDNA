---
type: artifact
artifact_class: decadal_theme_set
created: 2026-05-25
updated: 2026-05-25
mission: mission_adna_str_p5_m50_p5_entry_planning
campaign: campaign_adna_serious_tool_readiness
phase: 5
mission_number: 5.0
session: session_stanley_20260525T195508Z_v8_m50_s1
persona: rosetta
last_edited_by: agent_stanley
status: ratified
decadal_count: 10
cycle_count: 100
naming_continuity: extends_rosetta_d1_d10
total_personas_in_bench: 21
total_dimensions: 10   # 6 primary (Findability + Comprehension + Actionability + Trust + Relevance + Delight per Rosetta) + 4 secondary (Visual_Clarity + Cognitive_Load + Conciseness + Explanation_Quality per operator priorities)
related_persona_bench: aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_persona_bench_expansion.md
related_visual_methodology: aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/m50_visual_inspection_methodology.md
tags: [decadal_theme_set, d11_d20, m50, v8, p5, public_readiness, 100_iii_cycles, visual_inspection, clarity_conciseness_anti_bloat, rosetta_d_naming_continuity_d11_d20_extends_d1_d10, gemini_imagen_4_ultra_integration, iii_modular_system_adr_025_026_integration]
---

# M5.0 D3 — 10-Decadal Theme Set (D11-D20)

> ⚠️ **D16–D20 UNDER RE-SCOPE at M5.7 (operator pivot 2026-05-30).** D11–D15 are complete and unchanged. The undone docs-polish decadals **D16–D20 are PAUSED-but-resumable** pending the M5.7 "aDNALabs Site Expansion Planning" mission, which re-scopes the campaign around the aDNA-forward brand pivot (this site becomes the forward face of **aDNALabs**: docs + context-graph marketplace/registry + community/labs/org + the **aDNANetwork**, at **aDNA.network**). D16–D20 will be reviewed/resequenced/expanded and the Phase-5 exit gate amended (operator-ratified). This artifact is preserved as-is (archive-never-delete); the re-scope is recorded in [[m57_adnalabs_expansion_seed_brief]] + the M5.7 stub. The text below remains the pre-pivot baseline.

> 100-cycle improvement program for the aDNA site + GitHub readme/repo, organized into 10 thematic decadals (D11-D20; extends Rosetta D1-D10 naming continuity). Each decadal = 10 cycles + 1 decadal AAR. Operator priorities (visual style + clarity + conciseness + anti-bloat + explanation quality) map to specific decadals per the priority-decadal cross-reference table below. Filed at M5.0 close 2026-05-25.

## Decadal Index (D11-D20)

| Decadal | Mission | Cycles | Theme | Primary outputs | Per-decadal personas (3-5; full 21 at AAR) | Reviewer Lens Pass? |
|---|---|---|---|---|---|---|
| **D11** | M5.3 | 1-10 | **Visual Identity v2 + Image Regen** | Fresh OG card set (6 cards regen via Gemini) + hero variants + 6 section icons + diagram component library | Design Critic + Visual Designer + Newcomer Stress-Tester + Accessibility Auditor | **YES (1st of 4)** |
| **D12** | M5.4 | 11-20 | **Clarity & Conciseness** | Top-10 pages reduced 30-50% (no content loss); README streamline 872 → ~400 lines | Anti-Bloat Editor + Content Strategist + Newcomer + UX Writer | NO |
| **D13** | M5.5 | 21-30 | **Infographic Generation** | 5-8 production infographics (what-is-adna, lattice composition, federation, III loop, agent-as-context-graph-operator) + thumbnail variants | Infographic Specialist + Educator + Researcher + Diagram Reviewer | NO |
| **D14** | M5.5 | 31-40 | **README + First-Contact Polish** | README restructured (problem-first → persona-led; <400 lines; 5+ visual callouts; visual hierarchy + icons) | OSS Maintainer + Indie Hacker + Newcomer + Content Strategist | **YES (2nd of 4)** |
| **D15** | M5.5 | 41-50 | **Persona Page Consolidation** | 5 pages (educators/researchers/enterprise/startup-first-hour/compliance; 150-270 lines each) → shared `<PersonaPage>` component; consistent visual language | Information Architect + Solo Dev + Educator + Enterprise Architect | NO |
| **D16** | M5.5 | 51-60 | **Reference + Glossary Streamline** | YAML-driven card data (40+ glossary terms moved to YAML); reference index.astro reduced 176 → <60 lines | Framework Docs Expert + Researcher + Information Architect + UX Writer | NO |
| **D17** | M5.5 | 61-70 | **Cross-Page Narrative Coherence** | Onboarding journey map (persona-by-persona) + cross-page narrative coherence improvements | Community Organizer + Newcomer + Educator + Solo Dev | **YES (3rd of 4)** |
| **D18** | M5.5 | 71-80 | **Visual Hierarchy + Typography v2** | Color accent system + 20+ inline icons + refined typography + code-block styling + callouts | Design Critic + Visual Designer + Accessibility Auditor + UX Writer | NO |
| **D19** | M5.5 | 81-90 | **Mobile + Responsive v2** | Mobile-validated images + responsive layout refinements (revisit Rosetta D5 with new visual layer) | Newcomer + Accessibility Auditor + Solo Dev + Dev-Tools Designer | NO |
| **D20** | M5.5 | 91-100 | **Performance + Hardening + Adversarial Capstone** | Image weight audit + load-time pass + adversarial review (skeptic + external-validator) + P6 readiness assessment | **All 21 personas at full ranker pass** | **YES (4th of 4; final)** |

## Operator Priority → Decadal Cross-Reference

| Operator priority | Primary decadals | Supporting decadals |
|---|---|---|
| **Visual style** | D11 (Visual Identity v2 + Image Regen) + D18 (Visual Hierarchy + Typography v2) | D13 (Infographic Generation) + D19 (Mobile + Responsive v2) |
| **Clarity** | D12 (Clarity & Conciseness) + D14 (README + First-Contact Polish) | D17 (Cross-Page Narrative Coherence) |
| **Conciseness** | D12 (Clarity & Conciseness) + D15 (Persona Page Consolidation) + D16 (Reference + Glossary Streamline) | D14 (README streamline) |
| **Anti-bloat** | D12 + D15 + D16 (combined: 30-50% size reduction across top-10 pages without content loss) | D20 (Performance + Hardening) |
| **Explanation quality** | D13 (Infographic Generation) + D17 (Cross-Page Narrative Coherence) | D14 (README + First-Contact Polish) + D20 (Adversarial Capstone) |

## Per-Cycle 7-Step Structure

Each of the 100 cycles follows this canonical 7-step structure:

1. **Capture state** — Playwright screenshot of target page (current; pre-change baseline); inventory current images/assets touched; note current line count
2. **Persona Q&A** — Draw 3-5 personas from the decadal allocation (per Decadal Index table); ask 5-question protocol per visual inspection methodology D5 (Visual style + Clarity + Conciseness + Bloat + Explanation quality); ~5 min per persona = 15-25 min total
3. **Generate or regen images** — Invoke Gemini Imagen 4 Ultra via CanvasForge `canvas_core/image_generation.py` substrate-neutral ImageRequest Protocol when cycle involves visual asset creation/regeneration; use `SS_GEMINI_API_KEY` from ScienceStanley.aDNA Keychain; auto-log to ADR-003 training corpus at `CanvasForge.aDNA/what/artifacts/image_gen_dataset/{YYYY-MM}/`
4. **Implement** — Apply code/content/asset changes to target page(s); commit at end of cycle (single binary commit per cycle preferred; multi-file allowed if changes are tightly coupled)
5. **Re-capture** — Playwright screenshot of target page (post-change); compare to pre-change baseline
6. **Validate** — Playwright tests (visual regression + accessibility + responsive); persona scoring (3-5 personas score the page on the 10 dimensions; record per-dimension scores 0.00-5.00)
7. **Record III result** — Persist cycle result at `aDNA.aDNA/what/measurement/iii_results/{YYYY-MM}/cycle_{NNN}_{decadal}_{slug}.json` per ADR-025+026 contracts; include persona scores + reviewer notes + cycle delta + Playwright validation status + commit SHA

**Cycle cadence**: 1 cycle ~= 30-60 min (15-25 min Q&A + 5-10 min image gen + 5-15 min implementation + 5 min validation + 2-5 min recording). 10 cycles per decadal ~= 5-10 hours = ~1-2 sessions per decadal.

## Per-Decadal AAR Cadence

Every 10 cycles produces a **decadal AAR** at `aDNA.aDNA/how/campaigns/campaign_adna_serious_tool_readiness/missions/artifacts/aar_decadal_d{N}_{slug}.md` mirroring Rosetta D1-D10 AAR shape:

1. **Ranker scorecard** — 6 primary + 4 secondary dimensions × 2 baselines (prior decadal + close) + delta per dimension
2. **Persona ranker matrix** — Per-decadal personas (3-5) × 10 dimensions + averages
3. **Cycle log summary** — 10 rows (one per cycle in decadal) with item descriptions + gate status + commit SHA
4. **Reviewer Lens Pass** (mandatory at D11/D14/D17/D20 = every 3rd decadal + final) — design critique + accessibility audit + content strategy + IA review + newcomer stress-test
5. **Priority queue** — P1-P5 findings ranked by severity; seeded for next decadal
6. **What Worked / What Didn't / Finding / Change / Follow-up** — lightweight 5-line retrospective per project SO #5

**Reviewer Lens Pass deeper structure** (D11/D14/D17/D20 only):
- Design Critic verdict (visual_clarity dimension primary lens): grade A-F + 3-5 bullet observations + 2-3 priority recommendations
- Accessibility Auditor verdict (comprehension + cognitive_load lens): WCAG 2.1 AA compliance check + 3-5 bullet observations + priority recommendations
- Content Strategist verdict (comprehension + findability lens): narrative arc check + 3-5 bullet observations + priority recommendations
- Information Architect verdict (onboarding_scent lens): persona-journey check + 3-5 bullet observations + priority recommendations
- Newcomer Stress-Tester verdict (cognitive_load lens): first-30-seconds experience + 3-5 bullet observations + priority recommendations
- **NEW visual personas verdicts at D11/D18** (Visual Designer + Infographic Specialist + Diagram Reviewer): persona-specific lens applied

## Per-Decadal Goal Detail

### D11 — Visual Identity v2 + Image Regen (M5.3; cycles 1-10)

**Goal**: Refresh aDNA site visual identity using Gemini Imagen 4 Ultra. Regenerate 6 stale OG cards (Apr 16, 68 days old at v8 P5 open); generate hero variants for section pages; generate 6 section icons (learn / how / patterns / reference / community / use-cases); establish diagram component library for D13 consumption.

**Primary outputs**:
- 6 new OG cards (1200×630 PNG; section-specific colors per visual designer persona input)
- 4-6 hero variants (section-specific imagery for landing pages)
- 6 section icons (consistent style; usable in nav + section heroes + breadcrumbs)
- Diagram component library skeleton at `site/src/components/diagrams/` (for D13 consumption)

**Per-cycle assignments**:
- Cycle 1-2: OG card regen (3 cards per cycle)
- Cycle 3-4: Hero variants (2-3 per cycle)
- Cycle 5-6: Section icons (3 per cycle)
- Cycle 7-8: Diagram component library skeleton + first 2 reusable components
- Cycle 9: Visual identity guidelines documented at `site/src/content/_meta/visual_identity_v2.md`
- Cycle 10: D11 AAR + Reviewer Lens Pass (1st of 4)

**Reviewer Lens Pass at D11** (mandatory; cycle 10): Design Critic + Visual Designer + Newcomer + Accessibility Auditor verdicts on the new visual identity system + 5-cycle priority queue seeded for D12.

### D12 — Clarity & Conciseness (M5.4; cycles 11-20)

**Goal**: Anti-bloat audit of top-10 largest pages (697-line index, 272-line compliance, 267-line enterprise, 237-line startup-first-hour, 177-line educators, 176-line glossary, 134-line what-is-adna, 128-line researchers, 102-line tutorials template, 95-line vaults page). Target: 30-50% line reduction per page without content loss. README streamline 872 → ~400 lines.

**Primary outputs**:
- Top-10 pages reduced 30-50% (no content loss; componentization + redundancy removal)
- README streamline (872 → ~400 lines; problem-first → persona-led ordering; visual hierarchy + callouts)
- "Conciseness contract" documented at `site/src/content/_meta/conciseness_contract.md` (per-page max line guideline; per-section purpose constraint)

**Per-cycle assignments**:
- Cycle 11: README streamline (single biggest win; 872 → ~400 lines target)
- Cycle 12-13: index.astro 697 → ~350 lines (Hero component extraction + persona card iteration)
- Cycle 14: compliance/index.astro 272 → ~150 lines
- Cycle 15: enterprise/index.astro 267 → ~150 lines
- Cycle 16: startup-first-hour/index.astro 237 → ~150 lines
- Cycle 17: educators/index.astro 177 → ~120 lines + researchers/index.astro 128 → ~100 lines (combined)
- Cycle 18: glossary/index.astro 176 → ~80 lines (move to YAML data)
- Cycle 19: what-is-adna.astro 134 → ~100 lines + tutorials template + vaults page (combined)
- Cycle 20: D12 AAR (no Reviewer Lens Pass; lightweight 5-line AAR)

### D13 — Infographic Generation (M5.5; cycles 21-30)

**Goal**: Generate 5-8 production infographics for top concepts using Gemini Imagen 4 Ultra. Targets: what-is-adna (lattice composition diagram); lattice composition (modules + datasets + lattices); federation (multi-vault coord); III loop (Inspect → Introspect → Improve); agent-as-context-graph-operator; FAIR metadata; convergence model; OODA cascade.

**Primary outputs**:
- 5-8 production infographics (1200×800 PNG or SVG; consistent style with D11 visual identity)
- Thumbnail variants (480×320) for cross-page reuse
- Infographic placement guidelines at `site/src/content/_meta/infographic_placement.md`

**Per-cycle assignments**:
- Cycle 21-22: what-is-adna lattice composition infographic + thumbnail (~2 cycles for spec + gen + integration)
- Cycle 23-24: lattice composition infographic + III loop infographic
- Cycle 25-26: federation infographic + agent-as-context-graph-operator infographic
- Cycle 27-28: FAIR metadata infographic + convergence model infographic
- Cycle 29: OODA cascade infographic + placement guidelines
- Cycle 30: D13 AAR (no Reviewer Lens Pass; lightweight 5-line AAR)

### D14 — README + First-Contact Polish (M5.5; cycles 31-40)

**Goal**: Polish README from technical-spec-style to first-contact-polished. Persona reorder (problem → personas in first 50 lines); visual hierarchy + callouts + icons; scan-affordances (table of contents + section markers); inline image placement (banner + key infographics from D13).

**Primary outputs**:
- README v3 (<400 lines; persona-led; 5+ visual callouts; inline images; scan-affordance ToC)
- README style guide at `aDNA.aDNA/.github/README_STYLE_GUIDE.md`

**Per-cycle assignments**:
- Cycle 31-32: README structural reorganization (problem → personas → solution; <400 lines)
- Cycle 33-34: Visual callouts + icon integration (5+ callouts; inline icons from D11 section icons)
- Cycle 35-36: Inline image placement (banner + 2-3 D13 infographics integrated)
- Cycle 37: Scan-affordance ToC + section markers
- Cycle 38: README style guide
- Cycle 39: Cross-vault README pattern (does this README shape generalize to other aDNA vaults? Document as upstream-promotion candidate)
- Cycle 40: D14 AAR + **Reviewer Lens Pass (2nd of 4)** — OSS Maintainer + Indie Hacker + Newcomer + Content Strategist verdicts on new README

### D15 — Persona Page Consolidation (M5.5; cycles 41-50)

**Goal**: Consolidate 5 persona pages (educators/researchers/enterprise/startup-first-hour/compliance; 150-270 lines each) into shared `<PersonaPage>` component. Establish consistent visual language across all 5 pages. Reduce total persona-page line count by ~50% via componentization.

**Primary outputs**:
- New `<PersonaPage>` component at `site/src/components/PersonaPage.astro`
- 5 persona pages refactored to use component (each reduced 30-50% via componentization + content trimming)
- Persona page style guide at `site/src/content/_meta/persona_page_style.md`

**Per-cycle assignments**:
- Cycle 41-42: `<PersonaPage>` component design + first integration (educators)
- Cycle 43: researchers page refactor
- Cycle 44: enterprise page refactor
- Cycle 45: startup-first-hour page refactor
- Cycle 46: compliance page refactor
- Cycle 47: Cross-page consistency audit (visual language + tone + structure)
- Cycle 48: Persona page style guide documentation
- Cycle 49: Persona page component upstream-promotion to `.adna/` template candidate (for v8 P6 propagation; doctrinal addition)
- Cycle 50: D15 AAR (no Reviewer Lens Pass; lightweight 5-line AAR)

### D16 — Reference + Glossary Streamline (M5.5; cycles 51-60)

**Goal**: Move reference + glossary card data to YAML. Reduce index.astro line counts (glossary/index 176 → <60; reference/index ~80 → <40). Improve term scan + cross-linking + search-affordance.

**Primary outputs**:
- Glossary terms in YAML at `site/src/content/glossary_terms.yaml` (40+ terms)
- Reference cards in YAML at `site/src/content/reference_cards.yaml`
- Updated index.astro pages using `getCollection()` + YAML data
- Cross-linking improvements (term → tutorial; term → concept; term → pattern)

**Per-cycle assignments**:
- Cycle 51-52: Glossary YAML migration (40+ terms)
- Cycle 53: Reference YAML migration
- Cycle 54: index.astro pages refactor (data-driven)
- Cycle 55: Cross-linking audit + implementation (term → tutorial/concept/pattern)
- Cycle 56: Search-affordance improvements (search box + term filtering)
- Cycle 57: Term page consistency (all terms render via same template; 0 inline overrides)
- Cycle 58: Term aliases + synonyms support
- Cycle 59: Term YAML schema documentation + upstream-promotion candidate
- Cycle 60: D16 AAR (no Reviewer Lens Pass; lightweight 5-line AAR)

### D17 — Cross-Page Narrative Coherence (M5.5; cycles 61-70)

**Goal**: Onboarding journey map per persona (Solo Dev, Educator, Enterprise, Researcher, Startup). Cross-page narrative coherence — does the story flow from persona-landing → concept → tutorial → pattern → use-case → community? Identify breaks + fix.

**Primary outputs**:
- Onboarding journey map at `site/src/content/_meta/onboarding_journey.yaml` (per-persona 5-7 step journeys)
- Cross-page narrative coherence improvements (linking + transitions + recap blocks)
- Persona-journey landing pages updated with explicit "next step" CTAs

**Per-cycle assignments**:
- Cycle 61: Onboarding journey map authoring (5 personas × 5-7 steps)
- Cycle 62-63: Solo Dev journey implementation (audit existing pages + add transitions)
- Cycle 64: Educator journey implementation
- Cycle 65: Enterprise journey implementation
- Cycle 66: Researcher journey implementation
- Cycle 67: Startup journey implementation
- Cycle 68: Cross-journey audit (do journeys overlap? where? where do they diverge?)
- Cycle 69: Journey-aware navigation (breadcrumb + sidebar + footer)
- Cycle 70: D17 AAR + **Reviewer Lens Pass (3rd of 4)** — Community Organizer + Newcomer + Educator + Solo Dev verdicts on journey coherence

### D18 — Visual Hierarchy + Typography v2 (M5.5; cycles 71-80)

**Goal**: Refined visual hierarchy + typography pass. Color accent system (primary + secondary + tertiary); 20+ inline icons (consistent style across site); callouts (info, warning, success, danger); refined code-block styling (syntax highlight + line numbers + copy button).

**Primary outputs**:
- Color accent system in `site/src/styles/_colors.css`
- Icon library at `site/src/components/icons/` (20+ icons; consistent style)
- Callout components at `site/src/components/callouts/` (info, warning, success, danger)
- Code-block styling refinements (syntax + line numbers + copy)

**Per-cycle assignments**:
- Cycle 71-72: Color accent system + design tokens
- Cycle 73-74: Icon library (10 icons cycle 73; 10 more cycle 74)
- Cycle 75-76: Callout components (4 components)
- Cycle 77: Code-block styling refinements
- Cycle 78: Typography refinements (heading hierarchy + line-height + letter-spacing)
- Cycle 79: Visual hierarchy + typography style guide
- Cycle 80: D18 AAR (no Reviewer Lens Pass; lightweight 5-line AAR)

### D19 — Mobile + Responsive v2 (M5.5; cycles 81-90)

**Goal**: Mobile-validated responsive layout pass (revisit Rosetta D5 with new visual layer from D11+D13+D18). Mobile-validated images (responsive variants); responsive layout refinements (breakpoints + container queries); mobile-specific navigation.

**Primary outputs**:
- Mobile-validated images (responsive variants for all images from D11+D13+D18)
- Responsive layout refinements (breakpoints + container queries; tested at 320px / 375px / 414px / 768px / 1024px / 1280px / 1920px)
- Mobile-specific navigation improvements

**Per-cycle assignments**:
- Cycle 81: Mobile audit (Playwright at all breakpoints; identify regressions)
- Cycle 82-83: Responsive image variants (all images get 3-5 size variants)
- Cycle 84: Layout breakpoint refinements
- Cycle 85: Mobile navigation
- Cycle 86: Container queries adoption
- Cycle 87: Mobile-specific image variants (where needed)
- Cycle 88: Mobile typography pass
- Cycle 89: Mobile-validated cross-page narrative (journey works on mobile)
- Cycle 90: D19 AAR (no Reviewer Lens Pass; lightweight 5-line AAR)

### D20 — Performance + Hardening + Adversarial Capstone (M5.5; cycles 91-100)

**Goal**: Performance pass (image weight + load time + Core Web Vitals); adversarial review (skeptic + external-validator); P6 readiness assessment.

**Primary outputs**:
- Image weight audit + optimization (lossless compression; format selection; lazy loading)
- Load-time pass (Lighthouse 100/100 target across all pages)
- Adversarial review report (skeptic + external-validator perspectives)
- P6 readiness assessment (campaign close + v8.0 tag readiness)

**Per-cycle assignments**:
- Cycle 91-92: Image weight audit + optimization
- Cycle 93: Load-time pass (Lighthouse audit + fixes)
- Cycle 94-95: Adversarial review — skeptic perspective (what would a critic say about this site?)
- Cycle 96-97: Adversarial review — external-validator perspective (what would a senior dev/designer/educator validate or push back on?)
- Cycle 98: P6 readiness assessment
- Cycle 99: Final ranker pass with all 21 personas across 10 dimensions
- Cycle 100: D20 AAR + **Reviewer Lens Pass (4th of 4; final)** — All 21 personas verdicts on final state + Phase 5 exit gate readiness

## Phase 5 Exit Gate Check (at D20 cycle 100 close)

| Criterion | Target | Verification |
|---|---|---|
| Ranker score (mean of 10 dimensions) | ≥ 4.95 across SITE | All 21 personas score the site at D20 close; mean ≥ 4.95 |
| Ranker score (mean of 10 dimensions) | ≥ 4.95 across REPO (README + repo metadata) | All 21 personas score the repo at D20 close; mean ≥ 4.95 |
| D11-D20 all closed | All 10 decadals have AARs filed | `ls missions/artifacts/aar_decadal_d{1[1-9],20}_*.md \| wc -l` = 10 |
| Reviewer Lens Pass clean at D11/D14/D17/D20 | All 4 Reviewer Lens Passes show no P1 unresolved findings | Manual review of 4 AARs |
| 21-persona bench live | 11 NEW persona files exist (6 P5-planned + 5 visual) | `ls who/reviewers/reviewer_*.md` ≥ 10 + `ls who/adopters/persona_*.md` ≥ 11 (or similar; per M5.2 persona authoring outputs) |
| Community-readiness criteria | Onboarding journey + value-prop clarity + technical depth + community pathways all green | Subjective operator review at D20 close |
| Image generation budget honored | Cumulative Gemini Imagen 4 spend ≤ $50 budget | Auto-log at CanvasForge `image_gen_dataset/` |

## Notes

- **Decadal cycle granularity**: 1 cycle ≈ 30-60 min × 100 cycles = 50-100 hours total execution time. At 2-4 sessions per decadal × 10 decadals = 20-40 sessions. Within v8 P5 estimate (15-23 sessions ahead) at upper bound; may compress via batch execution of similar cycles.
- **Reviewer Lens Pass cadence**: 4 passes (D11/D14/D17/D20 = every 3rd decadal + final). Matches Rosetta precedent (D4 + D7 + D10 in Rosetta cycle).
- **Persona bench at decadal AAR**: full 21-persona bench scores ranker at decadal AAR ranker pass; per-decadal allocation (3-5 personas) drives per-cycle Q&A only.
- **III result persistence**: `aDNA.aDNA/what/measurement/iii_results/{YYYY-MM}/cycle_{NNN}_{decadal}_{slug}.json` per modular III P6 contract; queryable by future decadal AARs + cross-vault III-decadal coord per ADR-025 Clause A.
- **Gemini API spend forecast**: ~50-100 image generations across D11 + D13 + D18 = $2-4 actual at $0.04/call (well under $50 budget; auto-log to CanvasForge corpus for reuse).
- **D11-D20 naming continuity**: Rosetta D1-D10 owned cycles 1-100 (4.00 → 5.00 ceiling); v8 P5 D11-D20 owns cycles 101-200 (expanded scope across SITE + REPO with 21-persona bench across 10 dimensions).
- **D20 as P6 entry-gate readiness check**: D20 includes "P6 readiness assessment" — Phase 5 exit gate is also implicit Phase 6 entry-gate; operator-decisioned per Campaign SO #19.

---

**Theme set status**: ratified at M5.0 close 2026-05-25. M5.3 executes D11 cycles 1-10; M5.4 executes D12 cycles 11-20; M5.5 executes D13-D20 cycles 21-100.
