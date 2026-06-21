---
type: governance
subtype: campaign_claude
created: 2026-06-17
updated: 2026-06-21
last_edited_by: agent_rosetta
tags: [governance, campaign, website, frontier_grade]
---

# CLAUDE.md — Campaign: WEBSITE.aDNA

> **Promoter file.** This document governs every session in `campaign_website_adna`. Nobody acts in their own name; every order issues from here. Read it before touching a single unit of the site.

## Campaign Identity

| Field | Value |
|-------|-------|
| Campaign | `campaign_website_adna` |
| Title | WEBSITE.aDNA — Frontier-Grade Site Quality |
| Owner | stanley (operator / commander) |
| Chartered by | Operator, 2026-06-17 |
| Planned by | Berthier (chief of staff; holds the ecosystem-site charter, coord 2026-06-03) |
| Executed by | Rotating persona cell; **Rosetta** is resident site agent for `aDNA.aDNA/site/` |
| Status | active (activated 2026-06-18 — Operator Decision 1) |
| Current Phase | **Phase 4: Whole-Site Coherence & Sign-Off** (P0–P3 ✅; all 4 decades CLOSED GO; Decision 5 approved 2026-06-21 → P4 active — cohesion pass · cold-3sec + Skeptical Frontier Engineer verdict · final sweep vs frozen baseline · `CAMPAIGN-REPORT` · standing-watch · Decision 6 close) |
| Target | `https://aDNA.network` — source `aDNA.aDNA/site/` (Astro SSG → Vercel, direct deploy) |

## Mission (WHAT)

Bring `aDNA.network` to a standard where a senior engineer at a frontier lab (Anthropic, Stripe, Vercel, Linear, NVIDIA) lands on it and registers the same instinctive trust they would on those sites: **concise, beautiful, compelling, and credibly real.** Every page, image, and component is inspected, introspected, and improved across many cycles until it holds ≥4 on every quality axis with no open Critical or High finding.

## Method (HOW)

A multi-session campaign of **read-only audit → research-grounded critique → planned improvement → verified re-audit**, anchored entirely inside the `aDNA.aDNA` context graph and reconciled against every live campaign and every recent change to the aDNA standard. The improvement engine is **inherited, not rebuilt**: `skill_iii_cycle` (7-step), `skill_decadal_aar` (5-persona × 6-dimension ranker gate), the `who/reviewers/` bench, the `@audit` route sweep, and the site's Playwright gates + axe + Lighthouse. Baseline ranker is **reset** at Phase 0 per Operation Rosetta's M35 finding (the incremental surface is exhausted; only structural moves raise the bar now).

## Cell (WHO)

A rotating cell of specialized inspection-and-improvement personas, each carrying a distinct context slice and toolchain. **No single agent owns the verdict; quality emerges from adversarial overlap.** Each persona writes findings independently before seeing the others', then a synthesis pass reconciles. On re-verification, rotate which personas review so a unit is never rubber-stamped by the persona that designed its fix.

---

## DOCTRINE — read before Phase 0

Four findings from how frontier technical organizations present themselves. **Constraints, not suggestions.**

1. **Demonstrate, don't claim.** The strongest infrastructure sites prove their defining quality in the hero rather than asserting it (Vercel's build log, Linear's motion, Supabase's real SQL). aDNA's defining qualities are **federation, rigor, and patient-led provenance.** Show them — live topology, real artifacts, actual standard files — never adjective them.
2. **Restraint is the differentiator.** In a category drowning in dark-mode/neon/gradient sameness, seriousness reads through near-monochrome canvases, one disciplined accent, generous whitespace, editorial typography, and a banned-vocabulary list. The locked brand register (ADR-032: Tokyo Night / Science-Stanley Ghibli-pixel) already encodes this. Honor it.
3. **Scientific credibility has its own grammar.** A research-infrastructure site earns trust through machinery consumer-SaaS ignores: **FAIR signals, reproducibility, named institutional relationships shown with weight not vanity, explicit governance and licensing, citable identifiers, and an honest open/closed boundary.** Absence of this grammar reads as "marketing site," not "infrastructure."
4. **The floor is automated; the ceiling is human judgment.** Lighthouse/axe/Playwright catch ~30–40% of real defects — mechanical violations only. They are the always-on floor. The *compelling / beautiful / trustworthy* verdict is structurally beyond them and requires persona-driven manual passes. Both layers are mandatory; neither substitutes for the other. Run Lighthouse 13.3+'s **Agentic Browsing** category — agents are site visitors now.

**Standing finding inherited from `campaign_adna_network_audit` (load-bearing):** *Credibility leakage — not performance — is the failure mode for a young standard.* Private state in public meta, a named client, 404 links, a broken install flow all sat behind green performance 100s. Score credibility before you admire speed.

---

## QUALITY DIMENSIONS — the A–K scorecard

Every unit (page / image / component) is scored **1–5 on each axis** at baseline and at verified-done. A unit is not done until it holds **≥4 on all axes with no open Critical or High finding.**

| Axis | Name | What it measures |
|------|------|------------------|
| **A** | First-Impression Trust | 3-second test. Product/purpose registers? Frontier lab or template? Would a skeptical CTO take it seriously before reading a word? |
| **B** | Narrative Clarity | WHO/WHAT/WHY legible to a rare-disease clinician, an ML engineer, and a funder — without dumbing down or jargon-walling. One clear sentence in the hero. |
| **C** | Visual Craft | Type hierarchy/rhythm; spacing-scale discipline; single-accent restraint; deliberate color; no AI-default exuberance. Motion proves a quality or it is cut. |
| **D** | Demonstration Density | Ratio of **shown to claimed.** Live topology, real artifacts, actual standard files, working examples vs. adjectives and stock abstraction. *(New emphasis — the D1–D10 surface under-weighted this.)* |
| **E** | Scientific & Institutional Credibility | FAIR signals; reproducibility; governance/licensing explicit; relationships shown with gravity not vanity; honest open/closed boundary; citable identifiers. *(New emphasis.)* |
| **F** | Performance (Core Web Vitals) | LCP < 2.5s · INP < 200ms · CLS < 0.1. Thresholds beat composite score. |
| **G** | Accessibility (WCAG 2.2 AA) + Agentic | axe floor + manual ceiling (keyboard, focus order, landmarks, real screen-reader pass, contrast, touch targets) + well-formed a11y tree / WebMCP form annotation. |
| **H** | Responsive Integrity | Full-page screenshot matrix across the viewport range; no overflow, no broken nav, adequate touch targets at the smallest target; "feels right" at mobile. |
| **I** | Content & Microcopy | Banned-vocabulary scan; tense/voice consistency; honest, specific, confident-without-hype. Every word an order; none idle. |
| **J** | Standard Fidelity & Currency | Every claim, diagram, filename, naming convention, and architectural statement matches the **current** aDNA standard and the outputs of other live campaigns. No stale terms; rebrand fully propagated. *(New emphasis — the J-axis is the Standard Archivist's domain.)* |
| **K** | Community & Collaboration Legibility | Is the network *shown* to be a living, self-governed commons that humans **and agents** build together — real attribution, visible governance, honest federation, an honest shipped/roadmap boundary? Asserted-not-shown scores low. *(Ratified 2026-06-17 — the fourth-axis owner; extends D + E + B. Only real `last_edited_by`/AAR data may be surfaced.)* |

### Crosswalk — A–K ↔ inherited D1–D10 ↔ persona ↔ tooling

| A–K | Inherited D-dimension (Rosetta) | Lead persona | Primary tooling |
|-----|--------------------------------|--------------|-----------------|
| A First-Impression Trust | D4 Visual Identity & First-Contact | Skeptical Frontier Engineer *(new)* | 3-sec cold test; benchmark side-by-side |
| B Narrative Clarity | D2 Content Clarity · D9 Narrative Onboarding | Rare-Disease Clinician *(≈ Newcomer Stress-Tester)* | manual; `front_page_doctrine` |
| C Visual Craft | D4 Visual Identity | Design Purist *(≈ Design Critic)* | brand gate G8; visual-regression |
| D Demonstration Density | D10 Teach-by-Example · D8 Interaction Depth | Skeptical Frontier Engineer *(new)* | shown-vs-claimed count |
| E Sci/Inst. Credibility | *(under-covered)* | Funder / Program Officer *(new)* | FAIR/governance audit; honesty doctrine |
| F Performance | D6 Performance & Loading | Performance Engineer *(new)* | Lighthouse CWV; waterfall |
| G Accessibility + Agentic | D1 Accessibility | Accessibility & Agent Advocate *(≈ Accessibility Auditor)* | axe-core (both modes); Lighthouse Agentic Browsing |
| H Responsive Integrity | D5 Mobile Experience | Design Purist | screenshot matrix; overflow checks |
| I Content & Microcopy | D2 Content Clarity | Content Strategist *(bench)* | banned-vocab scan; `writing-guidelines` |
| J Standard Fidelity | D3 Nav/IA · D7 SEO *(partial)* | Standard Archivist *(new)* | RECONCILIATION.aDNA.md; grep hit-list |
| K Community & Collab. Legibility | extends D8 Interaction · D10 Teach-by-Example *(net-new)* | Movement Skeptic + Brand Strategist + Funder/Program Officer | demonstration-density count; honesty-line lint; manual persona pass |

> Information Architect (bench) supports B/J across the whole journey. D3 (Nav/IA) and D7 (SEO/Discoverability) ride under B and J rather than standing alone — they were largely closed by Rosetta and the network audit. The *(new)* labels mean new-**or**-extending: Standard Archivist and Performance Engineer are genuinely new lenses; Skeptical Frontier Engineer and Funder/Program Officer sharpen existing trust lenses (Movement Skeptic, Brand Strategist) and are reconciled in Phase 1, never re-authored blind. **Axis K** (Community & Collaboration Legibility, ratified 2026-06-17) extends D + E + B and is owned by Movement Skeptic + Brand Strategist + the Funder/Program Officer; it scores whether the commons, its governance, and the collaborative-agentic-creation story are *shown* (real attribution, audit trail, honest federation) — never asserted.

---

## PERSONA ROSTER — the rotating cell

Each cycle, a unit is reviewed by **at least three** personas. The vault already runs a battle-tested **14-reviewer bench** (`who/reviewers/`) plus a **16-persona adopter bench** (`who/adopters/`); Phase 1 maps the prompt's seven personas onto them and authors **only the genuinely uncovered lenses.**

**Inherited bench (`who/reviewers/`):**
- **Design Critic** → fills *Design Purist* (Linear/Stripe sensibility; hunts AI-default exuberance, accent sprawl, motion-for-motion's-sake, weak type hierarchy).
- **Accessibility Auditor** → fills *Accessibility & Agent Advocate* (keyboard + screen-reader user, plus the AI agent crawling the site; focus order, landmarks, contrast, a11y-tree wellness).
- **Content Strategist** (banned-vocabulary, tense/voice, microcopy).
- **Information Architect** (nav coherence, funnel, internal linking, orphan pages).
- **Newcomer Stress-Tester** → seeds *Rare-Disease Clinician* (time-poor, non-technical, mission-aligned; "do I understand what this does for my patients in 30 seconds?").

Plus **nine more reviewers** already on the bench — Visual Designer · Infographic Specialist · Anti-Bloat Editor · UX Writer · Diagram Reviewer (visual / clarity) and Brand Strategist · Motion Designer · Conversion/Growth Specialist · Movement Skeptic (ecosystem: trust / delight / conversion). A **16-persona adopter bench** (`who/adopters/`) supplies audience lenses (the *Rare-Disease Clinician* is an audience lens — likely an adopter, not a reviewer). Several of these already cover trust / credibility / conversion — so **Phase 1 reconciles before it authors.**

**New / uncovered lenses — reconcile against the 14-reviewer + 16-adopter benches in Phase 1, then author only what is missing:**
- **The Skeptical Frontier Engineer** — has shipped at Anthropic/Vercel-tier orgs. Default stance: *"template until proven otherwise."* Hunts the tell that breaks the illusion of being real. **Delivers the final verdict.** Asks: would I trust my data/compute to whoever built this? *(Extends Movement Skeptic + Brand Strategist — sharpen, don't duplicate.)*
- **The Funder / Program Officer** (OS4LS / CZI lens) — evaluating credibility for a grant or partnership. Governance? Licensing? Reproducibility? Is the open/closed boundary honest? Are named relationships real and load-bearing? *(Extends Movement Skeptic + an adopter lens — likely a new adopter.)*
- **The Standard Archivist** — lives in `aDNA.aDNA/` and every adjacent campaign directory. Sole job: catch drift between what the site says and what the standard **currently is.** Owns axis J and `RECONCILIATION.aDNA.md`. *(Genuinely new — no existing reviewer owns axis J.)*
- **The Performance Engineer** — owns the CWV numbers and the waterfall. Starts at the failing Core Web Vital, never the composite. *(Genuinely new — no perf reviewer on the bench.)*

---

## TOOLCHAIN — the instruments

**Automated floor — run every cycle, every page** (all present in `site/`; gaps promoted in Phase 2):
- **Lighthouse 13.3+** via CLI/CI — Performance, Accessibility, Best Practices, SEO, **Agentic Browsing**. Capture LCP/INP(TBT proxy)/CLS/FCP/TTFB as numbers, not composite. *Promotion task: archive-only → automated budget/gate.*
- **Playwright** (Chromium via CDP) — orchestration spine; hosts Lighthouse on a remote-debugging port; runs the full-page screenshot matrix and interaction-state checks. 10 gates exist (`site/tests/gates/`).
- **axe-core** (`@axe-core/playwright`) — mechanical WCAG floor on every page, **both light and dark modes**, every run.
- **`@audit` sweep** (`audit-p1s3-sweep.spec.ts`) — full-route × both-modes. *Promotion task: findings-only → regression gate in `test:gates`.*
- **Visual-regression** — semantic diff (not naive pixel diff) so OS font rendering doesn't generate noise. *New: baseline per page per viewport.*

**Manual / persona ceiling — structurally beyond automation:**
- Keyboard-only full traversal; real screen-reader pass (VoiceOver/NVDA), navigating by landmark and heading.
- The 3-second trust test, run cold by each persona.
- Demonstration-density audit (shown vs. claimed, counted).
- Banned-vocabulary and microcopy scan.
- **Benchmark side-by-side**: open the page next to a frontier reference and name every dimension where aDNA loses.

**Context — the ground truth:**
- The `aDNA.aDNA/` graph is the source of truth for every factual, architectural, and terminological claim.
- All sibling campaign directories — read their current state before scoring axis J.

---

## Key Files

| File | Purpose |
|------|---------|
| `campaign_website_adna.md` | Master campaign doc — phases, missions, gates, Integration & Reconciliation Map |
| `missions/mission_wadna_p0_recon_reconcile.md` | Phase 0 spec (pre-seeded with reconnaissance findings) |
| `missions/mission_wadna_p1_critique.md` | Phase 1 spec (rubric dossiers, persona sweep, FINDINGS) |
| `missions/mission_wadna_p2_design.md` | Phase 2 spec (improvement design, tooling promotion) |
| `missions/mission_wadna_p3_iterate.md` | Phase 3 spec (decadal improvement loops — the bulk) |
| `missions/mission_wadna_p4_signoff.md` | Phase 4 spec (coherence + sign-off) |
| `missions/artifacts/` | RECONCILIATION · SITEMAP · FINDINGS · CAMPAIGN-REPORT · AARs |

## Standing Orders (campaign-specific)

1. **Ground truth is the graph.** Every factual claim on the site traces to `aDNA.aDNA/` or a sibling campaign's current output. No invented capability; no aspirational tense presented as present fact.
2. **Honesty over polish.** The open/closed boundary, the relationships, the maturity of each system — stated truthfully. **Claim no institutional partner (Dell, NVIDIA, Mayo, Stanford, CZI, UCLA, …) without graph-traceable evidence.** A funder catching one inflated claim discredits the whole site. Credibility is the asset; never spend it for a nicer sentence.
3. **Restraint is mandatory.** When in doubt: less. One accent. More whitespace. Cut the adjective. Kill the animation that doesn't prove something. Do not re-set the ADR-032 brand or the ~55/45 sleek/revolutionary dial.
4. **The floor never substitutes for the ceiling.** A green Lighthouse run is necessary and nowhere near sufficient.
5. **Every cycle ends in a re-audit.** No change is done on assertion. It is done when re-measured and re-reviewed — verify the intent, not just the metric.
6. **Coverage is Step-A, not a follow-up.** Full-route × both-modes × generated-detail-sample is the floor (inherited audit AAR). Class-facts (install commands, version, counts) get fixtures + gates, never prose.
7. **Stay in lane.** The site *renders* the network; it does not author org/network/membership/rename decisions (Berthier-upstream domain). Design against stable seeds (`vaults.json`, schemas) behind the adaptation seam — rebind, not rebuild.
8. **Phase gates are human gates.** Never auto-advance between phases without operator approval. Commit-only by default; deploy only on an explicit ship-now flag or at a deploy gate.

## Context Loading

| Source | When |
|--------|------|
| `what/decisions/adr_032*` (brand), `adr_033*` (network edges), `adr_034*` (repo rename) | always |
| `what/design/` — `front_page_doctrine`, `writing-guidelines`, `visual-identity-v2`, `narrative_ethos_public_good` | always |
| `site/branding.json` (token authority) + `site/src/styles/tokens.css` | always |
| `how/campaigns/campaign_adna_network_audit/missions/artifacts/audit_adna_network_2026_06.md` | Phase 0–1 (resolved baseline) |
| `how/skills/skill_iii_cycle.md`, `how/skills/skill_decadal_aar.md` | Phase 3 |
| `who/reviewers/` (bench) | Phase 1 onward |
| Current standard: `what/docs/adna_standard.md` (v2.2), glossary | axis-J scoring |

## Delegation Notes

This campaign **consolidates** website-quality work previously split across three campaigns (see master doc §Integration & Reconciliation Map). At activation it **subsumes** STR's outstanding website decadals (E5 commons, E6 install portal) and carries Operation Rosetta's Phase-8 intent (already absorbed into STR P5). It does **not** redo `campaign_adna_network_audit` (completed; its audit is the resolved baseline). Inherit the III machinery as-is; reset the baseline ranker. Pursue **structural and frontier moves** (axes D, E, J + agentic-browsing), not another round of D1–D10 incremental polish — Rosetta's ranker already maxed at 5.00 on that surface.
