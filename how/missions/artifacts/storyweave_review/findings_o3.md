---
type: review_findings
artifact_class: dimension_review
created: 2026-07-07
mission: mission_site_story_review_charter
objective: O3
persona: agent_rosetta
status: draft   # first-pass (Rosetta lens); the 16-reviewer × 16-adopter bench is O4
method: "Playwright live capture (adna.network == committed HEAD) — 11 surfaces × 3 viewports × 2 themes = 66 screenshots + capture_report.json. Rosetta viewed 7 key shots; all findings cite a screenshot in ../screens/."
tags: [review, findings, storyweave, o3, dimension_review]
---

# O3 — Comprehensive dimension review (first-pass) + live walkthrough

> **Instrument note.** Chrome MCP was unavailable this run (extension not connected). The mission's sanctioned 2nd screenshot instrument (Playwright, `site/tests/gates/`) was used against **live adna.network** (== committed HEAD; `git log d687f4a..HEAD -- site/` empty). 66 full-page screenshots captured (`../screens/<surface>__<viewport>__<theme>.png`); all 11 surfaces **HTTP 200, zero console errors**, load 741–1616 ms. The **live persona walkthrough + GIFs of the hero/nav/get-started flows** (Chrome MCP) is deferred to O4 — reconnect the extension before the red-team.

## A. What works — do NOT "fix" (record so the campaign preserves it)

1. **Distinctive, cohesive visual identity.** The SS-Ghibli / Tokyo-Night register is genuinely distinctive (not templated) — the home DNA-helix-over-retro-computers hero, the `/vaults/graph` glowing-island-village, the `/commons` terraced-gardens. `home__desktop__dark.png`, `commons__desktop__dark.png`, `vaults-graph__desktop__dark.png`.
2. **Best-in-class honest/credible copy** — the site *shows restraint the way Signal/OWID do*: "53 vaults carry no cited relationship yet, so they sit unconnected here — that is honest topology, not missing data" (`vaults-graph`); "There is no activity feed here yet… the registry and the open governance record you are reading are the social layer" + a "The horizon" caveat (`commons`). This is a real asset — the strongest credibility signal on the site.
3. **`get-started` onboarding is strong** (S4 satisfied): real copy-paste commands with copy buttons (`git clone … ~/aDNA`, `cd ~/aDNA && claude`), a simulated terminal, the scaffold tree, "the whole flow, one command." `get-started__desktop__dark.png`.
4. **`/commons` is concrete, not preachy** — 4 real subnetworks (WGA · Context Commons · WilhelmAI · Rare Archive) each with SERVES / STEWARDED-BY / OPEN-GOVERNANCE-record + Visit/Connect. Borrowed-trust done well (S5). `commons__desktop__dark.png`.
5. **Clean, fast, accessible render** — 200/0-errors on every surface; good light/dark parity on home. `home__desktop__light.png`.

## B. 18-dimension first-pass scorecard (Rosetta lens; 1–5)

| # | Dimension | Score | Headline (screenshot) |
|---|-----------|:-:|---|
| 1 | Story & message | 3.5 | Manifesto strong + honest; **missing the "you already do X" reframe** (S2) — biggest lever. `home__desktop__dark` |
| 2 | Visual design & craft | 3.5 | Illustrations excellent; **data-viz weak** — graph SVG illegible, concept diagram faint. `vaults-graph`, `home__*` |
| 3 | Professionalism & polish | 4 | Cohesive, intentional; a few craft-debt tells (below). `home__desktop__dark` |
| 4 | Content & copy | 4 | Clear, restrained, dual-audience; some density. `commons`, `get-started` |
| 5 | Persona red-teaming | — | **O4** (16×16 bench) — not scored here |
| 6 | IA & navigation | 3.5 | 8-item top nav at ceiling (A-08); breadcrumbs/prev-next good. `vaults-graph` |
| 7 | Onboarding & conversion | 4 | `get-started` real commands (S4 ✅); hero CTA count over doctrine (below). `get-started` |
| 8 | Accessibility (incl. cognitive) | 3 | Automated AA strong; **cognitive "C+"** — jargon density is the standing weakness. `what-is-adna` |
| 9 | Performance | 4 | Static, fast (≤1.6 s), 0 console errors; A-07/A-09 deploy-layer (Vitruvius). `capture_report.json` |
| 10 | Credibility & trust | 4.5 | Honest topology + horizon caveats = a strength; deepen with proof-of-life placement (S5). `vaults-graph`, `commons` |
| 11 | SEO/meta/agent-discovery | 4 | Titles/descriptions present + specific on all 11; `llms.txt` exists; verify OG imagery in O4. `capture_report.json` |
| 12 | Technical & design-system health | 3 | Craft debt: hardcoded hex, 2 card tiers, no `/design-system` page (dossier §2). source-level |
| 13 | Ecosystem completeness / missing surfaces | 3.5 | Strong surface set; candidates: `/design-system`, a "show-the-file" surface, adopters proof page (S3/S5). O6 |
| 14 | Competitive/reference benchmarking | 4 | O2 done — 9 exemplars → storytelling doctrine deltas. `reference/*` |
| 15 | Mobile / responsive | 3 | Home stacks OK; **"How it Works" code/ASCII panels risk cramping at 375px** — verify O4. `home__mobile__dark` |
| 16 | Motion & delight | — | Not captured (static screenshots); needs Chrome-MCP live pass (O4). deferred |
| 17 | Brand & voice coherence | 4.5 | Warm, calm-confident, consistent; the 55/45 dial is realized well. `home`, `commons` |
| 18 | Completeness-critic | — | **O6** synthesis pass |

## C. Top findings (first-pass, ranked; each screenshot-cited)

1. **[Visual/Craft · High] The real relationship-graph SVG is nearly illegible.** On `/vaults/graph` the actual rendered graph ("cross-vault federation topology") is a **thin horizontal strip of tiny boxes** — the site's central "show the network" artifact is its *weakest* visual, sitting under a gorgeous illustration that carries the emotional load instead. Confirms deferred **A-06** (graph craft-polish). `vaults-graph__desktop__dark.png`. → build-campaign: a legible, possibly interactive graph layout (Obsidian/atproto S3 lesson).
2. **[Story · High] No "you already do X" reframe (S2).** The manifesto is abstract-beautiful but nothing collapses "federated context graph" into the familiar. → draft a reframe line ("your context is just the knowledge you already keep — now shared and co-owned") in O5. `home__desktop__dark.png`.
3. **[Visual/Craft · Med-High] Home "What a context democracy is" diagram is a faint asterisk.** Low-contrast thin-line spokes; near-invisible in light mode. The prime concept moment shows no real artifact. `home__desktop__dark.png` + `home__desktop__light.png`. → replace with a real (mini) graph or a stronger diagram.
4. **[Credibility/Proof · Med] Proof-of-life mis-placed on home (S5).** Hero stat strip shows insider metrics (`16 Entity Types · 3 Conformance Levels · v2.5 · MIT`) but **not** the compelling `68 vaults` (that lives mid-page in "The living registry"). atproto/OWID put the number high. `home__desktop__dark.png`.
5. **[Mobile · Med] "How it Works" code/ASCII panels risk cramping at 375px.** The Structure/Orient/Execute monospace panels + tree diagrams are dense; verify horizontal overflow on mobile. `home__mobile__dark.png`. (Also check `get-started` terminal blocks on mobile.)
6. **[IA · Low-Med] 8-item top nav at the doctrine ceiling (A-08).** Network·Vaults·Commons·Learn·Patterns·Use Cases·Community·Reference. Matrix's lesson: ≤5 keeps one front door obvious. `vaults-graph__desktop__dark.png`.
7. **[Onboarding · Low] Hero CTA count over doctrine.** Home hero = 1 primary (Get Started) + **2** secondary (Explore the network · Read the standard); doctrine §1 says max 1+1. `home__desktop__dark.png`.
8. **[Cognitive-a11y · Med, standing] Jargon density ("C+").** triad / lattice / vault / forge / persona / federation arrive fast; the standing weakness across 3 prior campaigns. Score per the Newcomer + Accessibility-Auditor personas in O4. `what-is-adna` (bodyLen 8.3k, 7×h2).
9. **[Design-system health · Med] Craft debt (source-level, dossier §2).** Hardcoded hex past tokens (badges, Mermaid vars, hero scrim), two card tiers (VaultCard vs RegistryCard), no `/design-system` reference page, uneven font-weight. → a design-system-hardening phase in the charter.
10. **[Visual rhythm · Low] Registry monotony.** `/vaults` "platform (30)" is a long block of near-identical "genesis" cards; consider grouping/rhythm. `vaults__desktop__dark.png`.

## D. Per-surface one-liners (11 surfaces; full bench = O4)

- **home** — strong hero + manifesto; fix concept-diagram + proof-of-life placement + reframe line. `home__*`
- **what-is-adna** — thorough explainer (8.3k body, 7×h2); watch cognitive load / length. `what-is-adna__*`
- **get-started** — best onboarding surface; verify mobile monospace. `get-started__*`
- **learn** — thin hub (671 body, 0×h2) — a routing page; confirm it earns its click. `learn__*`
- **vaults** — good proof-of-life (68/13/14 up top); dense-but-scannable; rhythm note. `vaults__*`
- **vaults-graph** — excellent copy + illustration; **the real graph SVG is the weak link (A-06)**. `vaults-graph__*`
- **network** — clear "aDNA computer" framing (4.4k body); verify diagram legibility. `network__*`
- **commons** — strong, concrete, honest public-good surface. `commons__*`
- **community** — roles/paths (3.3k body); verify it converts. `community__*`
- **use-cases** — thin hub (1.5k, 0×h2) — a directory; ensure persona scent. `use-cases__*`
- **reference** — spec/docs hub (2.3k); credibility surface. `reference__*`

## E. Reconciliation with prior findings (dossier §3)

- **A-06** `/vaults/graph` design polish — **CONFIRMED still open** (SSR/no-JS shipped; the *design* legibility is the finding above). 
- **A-08** 8-item nav — CONFIRMED (within ceiling; story-cost noted).
- **A-11** hero "concrete-then-ethos" rework — still relevant (S2 reframe is the concrete lever).
- **A-13** problem-statement redundancy / **A-17** educator rubric / **A-18** node-operator path / **A-19** SPDX — carry into O6 synthesis.
- **Cognitive-a11y "C+"** — CONFIRMED as the top standing weakness; O4 must score it per persona.

## F. Threads for O4 / O5

- **O4 (red-team):** dims 5, 15, 16 + cognitive-a11y need the persona bench + a **live Chrome-MCP walkthrough** (motion/GIF/mobile-interaction) — reconnect the extension first.
- **O5 (storytelling):** the S2 reframe line, the S3 hero-artifact-vs-ADR-032 tension, and proof-of-life placement (S5) are the three narrative levers.
- **O6 (synthesis):** fold C1–C10 + prior deferred long-tail into the prioritized (severity×impact×effort) backlog; name missing surfaces (`/design-system`, a show-the-file surface, an adopters proof page).
