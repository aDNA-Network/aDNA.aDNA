---
type: artifact
artifact_class: rubric_dossier
campaign_id: campaign_website_adna
mission_id: mission_wadna_p1_critique
title: "rubrics_a_k — frontier-grade rubric dossiers for the A–K scorecard"
created: 2026-06-18
updated: 2026-06-18
status: draft   # → operator review at Decision 3 (P1 critique → P2 design)
last_edited_by: agent_stanley
tags: [artifact, rubric, scorecard, phase1, frontier_grade, a_k, dual_audience]
---

# rubrics_a_k — Frontier-Grade Rubric Dossiers

> **What this is.** One scoring dossier per axis of the [[../../CLAUDE.md|campaign A–K scorecard]] (11 axes). The scorecard *names* each axis; this file says **what a 5 looks like for `aDNA.network` specifically** — a federated, rare-disease research platform whose credibility is the asset. Each dossier is four parts: (1) **frontier-grade-for-us** (what excellence means on this axis for *this* kind of site, not in general); (2) a **1–5 anchor scale**; (3) **benchmark exemplars** (positive, from [[SITEMAP.aDNA]] §6) + a "template-tier" negative; (4) the **lead persona + primary signal**. Companions: [[SITEMAP.aDNA]] (the units these rubrics score) · [[RECONCILIATION.aDNA]] (axis-J ground truth) · [[RESEARCH-IMPROVEMENT-PLAN.aDNA]] (§3.2/§3.3 exemplar grammar + axis-K anchors).
>
> **Dual-audience read.** Developer: this is the per-axis acceptance bar for the persona sweep — a unit is done at **≥4 on all eleven with zero open Crit/High**. Newcomer: this is the rubric a tough reviewer keeps in their head when they ask, page by page, *"is this actually good, and is it actually real?"*

---

## A — First-Impression Trust

1. **Frontier-grade for us.** In the 3-second cold test, a skeptical research-platform CTO must register *"serious infrastructure for federated rare-disease science"* — not a docs template, not a crypto landing page, not a hackathon project. The brand register (ADR-032 Tokyo Night / Ghibli-pixel, near-monochrome, one accent) does the work; restraint reads as seriousness in a category drowning in neon sameness.
2. **Anchors.** **1** — reads as a generic template/AI-default landing; CTO bounces. **3** — clean and professional but anonymous; could be any dev-tool. **5** — instantly legible as a real research platform; the visual gravity earns a second read before a word is parsed.
3. **Exemplars.** Positive: **Anthropic** (calm authority, citation-forward restraint) · **NVIDIA** (serious-infrastructure register). Negative: a Bootstrap-default hero with a stock-abstract gradient and three equal-weight CTAs.
4. **Lead persona + signal.** **Skeptical Frontier Engineer** (P1 extension of [[../../who/reviewers/reviewer_movement_skeptic|Movement Skeptic]] + [[../../who/reviewers/reviewer_brand_strategist|Brand Strategist]]); signal = the 3-second cold verdict and benchmark side-by-side ("template until proven otherwise").

## B — Narrative Clarity

1. **Frontier-grade for us.** WHO/WHAT/WHY must land in one hero sentence for **three** readers at once — a rare-disease clinician, an ML engineer, and a funder — without dumbing down or jargon-walling. The hard part is tri-audience: the clinician needs the patient stakes, the engineer needs the architecture, the funder needs the public-good thesis, and no one is condescended to.
2. **Anchors.** **1** — jargon-dense lead, abstractions stacked (the old hero's "knowledge-graph-driven context engineering"). **3** — clear to a developer, opaque to a clinician/funder. **5** — one sentence all three parse on first read; the next click is predictable for each.
3. **Exemplars.** Positive: **Stripe docs** (layered depth — skim or dive) · **ethereum.org** (multi-audience on-ramp). Negative: a standards-document hero that lists features and assumes the reader already knows the category.
4. **Lead persona + signal.** **Rare-Disease Clinician** (audience lens, ≈ [[../../who/reviewers/reviewer_newcomer_stress_tester|Newcomer Stress-Tester]]); signal = the `front_page_doctrine` plain-language test + the "30-second understanding" pass.

## C — Visual Craft

1. **Frontier-grade for us.** Type hierarchy and spacing-scale discipline, single-accent restraint, deliberate color, zero AI-default exuberance. Motion must *prove a quality* (federation, rigor) or be cut. For a research platform, polish is not decoration — sloppy craft reads as "they won't be careful with my data either."
2. **Anchors.** **1** — accent sprawl, off-scale spacing, weak hierarchy, motion-for-motion's-sake. **3** — competent but inconsistent (header-casing drift, two fighting accents on one surface). **5** — every spacing value on-scale, one disciplined accent, editorial type rhythm; the two under-designed flagships (`/vaults/graph`, `/community`, both baselined C=3) hold their own beside the rest.
3. **Exemplars.** Positive: **Linear** (motion proves speed; product confidence) · **Stripe** (density discipline). Negative: a gradient-heavy, multi-accent SaaS page where every section shouts.
4. **Lead persona + signal.** **Design Purist** (≈ [[../../who/reviewers/reviewer_design_critic|Design Critic]]); signal = brand gate G8 + visual-regression diff + spacing/hierarchy manual pass.

## D — Demonstration Density

1. **Frontier-grade for us.** The ratio of **shown to claimed**. aDNA's defining qualities (federation, self-reference, patient-led provenance) must be *demonstrated* — live topology built from `vaults.json`, real artifacts pulled from the graph, actual standard files — not adjectived. The self-referential promise is the whole pitch: a site about a context standard that does not pull from its own context graph is its own counter-evidence.
2. **Anchors.** **1** — pure assertion + stock abstraction (today's homepage fabricated `my-project/`/`climate-pipeline` blocks; shown:claimed ≈ 1:5). **3** — some real artifacts, but the flagship claims still ride on static SVGs and prose. **5** — claims are carried by demos (the `/learn/what-is-adna` real-CLAUDE.md embed is the proven bar — propagate it); a reader can click into the evidence.
3. **Exemplars.** Positive: **Vercel** (the hero *is* a live build log) · **Hugging Face** (real artifacts, live registry density). Negative: a "powerful / scalable / composable" feature grid with hand-drawn diagrams and no working example.
4. **Lead persona + signal.** **Skeptical Frontier Engineer**; signal = the shown-vs-claimed count on every surface (delivers the final verdict).

## E — Scientific & Institutional Credibility

1. **Frontier-grade for us.** The grammar consumer-SaaS skips and research-infrastructure lives or dies on: **FAIR signals** (license/creators/keywords/identifier/provenance), **reproducibility** (clear inputs→outputs→execution context), **explicit governance + licensing**, named relationships shown with gravity not vanity, citable identifiers, and — load-bearing — an **honest open/closed boundary** (what is shipped vs. what is roadmap, stated plainly). One inflated claim a funder catches discredits the whole site; honesty *is* the credibility (ADR-033).
2. **Anchors.** **1** — marketing-site register; no FAIR/governance/reproducibility grammar; maturity oversold (genesis/stub vaults inflating a "40-vault" headline). **3** — FAIR/governance present but described in prose, open/closed boundary fuzzy. **5** — governance browsable, licensing explicit, FAIR blocks rendered, the open/closed line drawn honestly with a phase ladder; named affiliations are real and load-bearing (the internal subnetworks — WGA · ContextCommons · WilhelmAI · RareArchive — not an unsupported logo wall).
3. **Exemplars.** Positive: a **FAIR / data-commons portal** (re3data / Dataverse — citable identifiers, reproducibility grammar) · **ethereum.org** (power-disclaimer: "does not control or lead… one part of a larger ecosystem"). Negative: a "trusted by [Dell · NVIDIA · Mayo]" logo wall with no graph-traceable evidence (all verified unsupported in-graph — must not appear).
4. **Lead persona + signal.** **Funder / Program Officer** (OS4LS / CZI lens; P1 extension of Movement Skeptic + an adopter); signal = FAIR/governance/reproducibility audit + honesty-doctrine line check.

## F — Performance (Core Web Vitals)

1. **Frontier-grade for us.** **Thresholds beat composite:** LCP < 2.5s · INP < 200ms · CLS < 0.1, captured as numbers from the waterfall, never read off a green "100." For a site that courts AI agents and time-poor clinicians, the flagship that carries the headline claim (the topology graph) cannot be the slowest page.
2. **Anchors.** **1** — a CWV in the red on a flagship (baseline `/vaults/graph` LCP 4.06s / Perf 83 from client-side Mermaid). **3** — composite green but a real CLS shift hides under it (`/learn/concepts/*` CLS 0.156 live). **5** — every flagship inside all three CWV thresholds, the graph prerendered, and the deploy-layer cap understood (live Best-Practices 92 on every route = a Vercel headers/source-maps issue, not source).
3. **Exemplars.** Positive: **Vercel** / **Linear** (instant LCP, motion that never costs CLS). Negative: an image-heavy hero with a late-mounting JS widget that reflows the fold.
4. **Lead persona + signal.** **Performance Engineer**; signal = the failing Core Web Vital first, then the waterfall — never the composite score.

## G — Accessibility (WCAG 2.2 AA) + Agentic

1. **Frontier-grade for us.** The axe floor (zero AA violations, both light and dark modes) **plus** the manual ceiling — keyboard-only traversal, focus order, landmarks, a real screen-reader pass, contrast, touch targets — **plus** a well-formed a11y tree and WebMCP/form annotation, because AI agents are a named visitor class now. A standard whose thesis is "agents can navigate context" must itself be navigable by an agent (a content-first reading order, `llms.txt`, no-JS reachability of the topology).
2. **Anchors.** **1** — content-after-nav reading order (the ~107-link serialization above every secondary `<h1>`); no `llms.txt`; graph invisible to no-JS agents. **3** — axe-clean but the a11y tree reads nav-first and the agentic entry-file is missing. **5** — axe-clean both modes, content-first tree, keyboard/screen-reader pass clean, `llms.txt` shipped, flagship topology reachable without JS.
3. **Exemplars.** Positive: a **FAIR portal** / **ethereum.org** (semantic structure, real landmark order). Negative: a div-soup SPA that renders nothing meaningful without JS.
4. **Lead persona + signal.** **Accessibility & Agent Advocate** (≈ [[../../who/reviewers/reviewer_accessibility_auditor|Accessibility Auditor]]); signal = axe-core both modes + manual keyboard/SR pass + a11y-tree/no-JS/`llms.txt` check. *(Tooling note: installed Lighthouse 13.4.0 exposes no "Agentic Browsing" category — the agentic half is measured manually, per [[RECONCILIATION.aDNA]] §D.)*

## H — Responsive Integrity

1. **Frontier-grade for us.** A full-page screenshot matrix across the viewport range with no overflow, no broken nav, adequate touch targets at the smallest target, and a genuine "feels right" at mobile — for clinicians and reviewers who will open this on a phone between patients.
2. **Anchors.** **1** — overflow / broken nav / sub-44px targets at small widths (the doc-sidebar section-switcher failing at 375px). **3** — no overflow but mobile feels like a shrunk desktop, not a designed surface. **5** — every breakpoint deliberate; touch targets, line length, and density all designed for the small screen.
3. **Exemplars.** Positive: **Stripe** / **Linear** (mobile reads as designed, not reflowed). Negative: a desktop-first grid that horizontally scrolls and hides the nav behind a broken hamburger at 375px.
4. **Lead persona + signal.** **Design Purist**; signal = the screenshot matrix + overflow/touch-target checks across the viewport range.

## I — Content & Microcopy

1. **Frontier-grade for us.** A banned-vocabulary scan (no "fast/scalable/reliable" filler, no hype), tense/voice consistency, and copy that is honest, specific, and confident-without-hype — every word an order, none idle. For a research platform the line between "specific and earned" and "marketing adjective" is the credibility line.
2. **Anchors.** **1** — slogan-density, generic adjectives, tense drift, header-casing inconsistency ("How it Works" beside sentence-case neighbors). **3** — clean voice but some idle words and an occasional unearned adjective. **5** — every sentence specific and load-bearing; maturity stated honestly (no "40-vault registry" gloss over genesis/stub vaults); voice consistent surface-to-surface.
3. **Exemplars.** Positive: **Anthropic** (specificity over sentiment) · **Stripe** (precise, calm microcopy). Negative: a "blazing-fast, infinitely-scalable, enterprise-grade" header stack.
4. **Lead persona + signal.** **Content Strategist** (bench: [[../../who/reviewers/reviewer_content_strategist|Content Strategist]]); signal = banned-vocab scan + `writing-guidelines` tense/voice lint.

## J — Standard Fidelity & Currency

1. **Frontier-grade for us.** Every claim, diagram, filename, naming convention, and architectural statement on the site matches the **current** aDNA standard (v2.2) and the live outputs of sibling campaigns — no stale terms, rebrand fully propagated, the brand-vs-substrate line held ("the aDNA network runs on the **Lattice Protocol**"; never "aDNA Protocol"). Drift here is silent and crawler-visible: it reads as "they don't know their own standard." Discipline is the **two-class owner split** — `website-owned` fixes vs. `pt19-owned` flags (vault rename/merge/count/edge currency, never hand-fixed).
2. **Anchors.** **1** — stale repo/brand in crawler-visible metadata, pre-migration names rendering as current. **3** — prose is current but structured data / footer / branding token still drift. **5** — JSON-LD, footer, branding token, and copy all current; the pre-migration vault data is correctly *flagged* for the pt19 regen, not silently wrong.
3. **Exemplars.** Positive: **Rust RFC** / **W3C** (a maturity ladder makes "how settled" legible — currency shown, not assumed). Negative: a site whose own credibility-hygiene rule cites the stale repo it forbids (the M1-class self-contradiction).
4. **Lead persona + signal.** **Standard Archivist** (owns this axis + [[RECONCILIATION.aDNA]]); signal = the reconciliation diff + grep hit-list. Concrete open ground truth: the **2 Crit `github.com/LatticeProtocol` JSON-LD URLs** (`seo.ts:48`/`:100` → `aDNA-Network/aDNA`), the `branding.json` `social.github` stale token, and the strict website-owned vs pt19-owned split.

## K — Community & Collaboration Legibility

1. **Frontier-grade for us.** Is the network *shown* to be a living, self-governed commons that humans **and agents** build together — real attribution, visible governance, honest federation, and an honest **shipped/early-access/planned** boundary? Asserted-not-shown scores low. The novel, credibility-bearing angle is collaborative-agentic creation: vaults carry real `last_edited_by` / session / AAR provenance, so "agents are contributors here" is a *true* differentiator when shown with rigor — and reads as the opposite (gimmick) when it is myth-persona flavor text, which is exactly why credibility caps today. The honesty line is non-negotiable: build the social-layer MVP on existing graph data now; show the full social layer (profiles/follows/cross-node feeds/governance voting) only as Venus-gated *planned*, never shipped. Only real `last_edited_by`/AAR data may be surfaced.
2. **Anchors** (§3.3 verbatim-grounded). **1** — pure prose claim, zero live signal (today's `/community`, baselined D=1/E=3). **3** — some real attribution/links, but governance and federation are still *described*. **5** — the commons is demonstrated: real contributors/agents, audit-trail provenance, a "this vault / the federation" surface, a public phase ladder; reads as a **credible invitation, never hype**.
3. **Exemplars** (§3.2 grammar). Positive: **ethereum.org** (Foundation **power-disclaimer** — subordinating your own org to the network is the highest-trust federated move; persona-routed "Get Involved") · **Rust** (browsable governance — named teams, real people, walked-into not described) · **Bluesky** (a shipped/early-access/planned **phase ladder** + portability guarantee — the exact mechanism for the Venus-gated honesty line) · **Hugging Face** (**attribution-as-edge**: `base_model:` auto-renders a clickable lineage edge — provenance *is* the UI) · **Wikipedia** (the public **audit trail** — edit history + open consensus — as the trust mechanism; aDNA already has the substrate in sessions/AARs/ADRs). Negative: a "join our community" CTA over a Discord badge with no visible governance, attribution, or roadmap honesty.
4. **Lead persona + signal.** **Movement Skeptic** + **Brand Strategist** + the new **Funder / Program Officer**; signal = demonstration-density count on community surfaces + honesty-line lint (no "shipped" language on Venus-gated features) + manual persona pass.

---

## Scoring discipline (applies to every axis)

- **Done = ≥4 on all eleven, zero open Critical or High.** A 5 on ten axes and a 2 on one is not done.
- **Score credibility before speed.** The inherited standing finding: *credibility leakage, not performance, is the failure mode for a young standard* — a green CWV 100 never buys an A/E/J/K pass.
- **The floor never substitutes for the ceiling.** axe/Lighthouse/Playwright are the always-on floor (~30–40% of defects); the compelling/credible/legible verdict is the persona ceiling. Both mandatory.
- **Show, don't claim** is the spine of D, E, and K — every assertion on these axes is scored on whether the evidence is one click away in the graph.

## Provenance

Authored 2026-06-18 for `mission_wadna_p1_critique`. Axis definitions: [[../../CLAUDE.md|campaign promoter §A–K scorecard]] + the 2026-06-17 axis-K amendment. Exemplar grammar + axis-K 1–5 anchors: [[RESEARCH-IMPROVEMENT-PLAN.aDNA]] §3.2/§3.3. Benchmark set + per-flagship baseline: [[SITEMAP.aDNA]] §5/§6. Axis-J ground truth: [[RECONCILIATION.aDNA]]. Persona owners: [[../../who/reviewers/AGENTS.md|who/reviewers/]] bench + the four P1 lenses (two new files — [[../../who/reviewers/reviewer_standard_archivist|Standard Archivist]], [[../../who/reviewers/reviewer_performance_engineer|Performance Engineer]] — two sharpened briefs).
