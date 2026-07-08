---
type: review_findings
artifact_class: redteam_ranker_matrix
created: 2026-07-07
mission: mission_site_story_review_charter
objective: O4
persona: agent_rosetta
status: draft
method: "Headless per-surface persona-cluster red-team — 11 surface subagents (16 reviewers + 16 adopters, clustered per skill_site_design_pipeline Stage-7 routing) + 2 skeptic-brief passes. Reused Run-1 T0 screenshots (no Chrome, per doctrine_visual_inspection). 11 ranker dims 1-5; disagreement ladder applied. Every finding screenshot-cited."
tags: [review, redteam, ranker_matrix, storyweave, o4, personas]
---

# O4 — Persona red-team ranker matrix (headless)

> Adopter ranker = the hard gate (threshold 4.0); reviewer scorecard = parallel (flags → priority queue); skeptics = adversarial outside-view. **Fleet is below the 4.0 bar (avg ≈ 3.45, 1 PASS / 10 WATCH / 0 FAIL)** — exactly the "mature site, deliberate best-in-class refresh" thesis, not a rescue.

## A. Per-surface scorecard

| Surface | Avg | Verdict | The headline (screenshot-cited) |
|---|:-:|:-:|---|
| get-started | **3.9** | WATCH | strongest onboarding (real commands) — but code/ASCII **clips on desktop** + cramps mobile; prereq install buried at page-bottom; drops the north-star thread |
| network | **3.8** | WATCH | clear local-vs-federate story + real node-operator on-ramp (trust 4.5) — but the "show the network" diagram is a faint asterisk that **contradicts its own "not decorative" headline** |
| community | **3.8** | WATCH | best-in-class honesty + clear participation ladder — but under-converts (CTAs buried, no rung wired to its action); "Community" scent overpromises vs what's live |
| commons | **3.7** | **PASS** | best-in-class trust/craft, show-don't-preach held — held short only by a **developer-gated on-ramp** (no non-coder way in) + a copy typo ("before you back you") |
| home | **3.6** | WATCH | distinctive, honest, adoptable — but the thesis never becomes **visible** (faint concept diagram), **concrete** (no "you already do X"), or **proven above the fold** (insider stats where "68 vaults" belongs) |
| learn | **3.5** | WATCH | pleasant routing hub — but **clips on mobile** (all 4 cards truncate); two mismatched nav models; no recommended sequence |
| reference | **3.4** | WATCH | authoritative + honest — but spec-not-first, **no version stamp**, 6/10 cards excerpt-defect (dangling colons, raw markdown), hero letterbox bars |
| use-cases | **3.2** | WATCH† | relatable persona coverage — but cards **truncate mid-word**, no outcome, no CTA/link affordance, plainest craft on the site, archetypal names/no real adopters |
| what-is-adna | **3.0** | WATCH | credible explainer of the **standard** that under-delivers the **vision** — jargon epicenter (cognitive-load "C+"), sells project-file-org not the network/commons, ~35% redundant, no TOC |
| vaults | **3.0** | WATCH | honest, distinctive registry undercut by **purpose-less cards** (no "what-for"), **no search**, platform(30) monotony + 9991px scroll, browse-only dead-end (no adopt/publish path) |
| vaults-graph | **3.0** | WATCH | **A-06 confirmed** — the real graph is an illegible strip (53 unconnected vaults crush the real 15-node/14-edge story), sub-AA in light, abandoned on mobile |

† use-cases = borderline-FAIL on actionability + delight.

**Weakest dimensions fleet-wide:** `visual_clarity` (diagrams/graph), `actionability` (dead-end cards/CTAs), `cognitive_load` + `conciseness` (jargon/redundancy), `delight` (plain surfaces). **Strongest:** `trust` (surface-level honesty), `relevance`, `findability`. **Disagreement ladder:** adopters consistently rate *higher* (they can complete tasks → surfaces are "adoptable," they win the gate) while reviewers rate *lower* on craft (→ priority queue). The **skeptics** surface strategic gaps neither fully caught.

## B. The two skeptics (adversarial outside-view) — both ON-THE-FENCE

**They converge, independently, on the site's deepest gaps** — these outrank any surface polish:

1. **"Network of one" / no real humans.** Every vault is "tended by" an AI-persona code-name (Rosetta, Argus, Hestia, Hygieia…); a diligence-minded outsider finds **no accountable named person, team, or leadership**. To a funder it reads "beautiful manifesto by anonymous agents"; to an engineer, "one laptop cosplaying as a network" (all 68 vaults trace to one workspace, zero external adopters).
2. **"Democracy" contradicted by "Founding Architect stewardship."** The home manifesto ("self-governed context democracy… for the good of all") directly contradicts the `reference` Governance card's single-BDFL model. The central claim was *declared, not earned*. **→ RESOLVED 2026-07-07 (operator):** progressive-decentralization roadmap (FA → trusted stewards → steward-led/public) — see `governance_and_mission_resolution.md`.
3. **Load-bearing claims asserted, not shown.** "Lattice Protocol (the open coordination protocol underneath)" is a tagline with **no linked spec/code**; "public good" has **no impact case / outcomes**; the "open standard" **hard-depends on one proprietary CLI** (`@anthropic-ai/claude-code`).
4. **Illustration persuades; the real artifact is broken/absent** (see Theme T1) — "the AI illustration does the persuading while the real graph is illegible."

**Both skeptics' convergent "one move":** ship a **"who's behind this + what it changed" surface** — real named people (Stanley + the Wilhelm Foundation tie: Helene & Mikk Cederroth), **one concrete impact case** (Rare Archive / a family served), a **governance roadmap** (Founding-Architect → multi-stakeholder), and one honest sentence on **what the Lattice Protocol actually is** + a real recorded `git clone && claude` walkthrough. This single surface answers gaps 1–3 at once.

**Both say KEEP:** the radical-honesty voice ("honest topology," "the horizon… not built yet") = the site's single best trust asset; the real Wilhelm partner; the genuinely substantive spec set (pull `reference` forward).

## C. Cross-cutting themes (the synthesis — these organize the O6 backlog)

- **T1 — "Show the real artifact, not the illustration" (dominant visual theme).** The gorgeous SS-Ghibli illustrations carry the emotional load while the **real data-visualizations are broken or absent**: home concept diagram = faint asterisk; network diagram = faint asterisk contradicting "not decorative"; `/vaults/graph` = illegible strip. **A-06 generalized to a site-wide pattern.** One shared fix: a **legible, interactive, high-contrast graph component** (split connected from unconnected; responsive; tied to its legend) reused across all three.
- **T2 — "Earn the thesis to an outsider" (dominant strategic theme).** The real-humans + real-proof + honest-governance gap (§B). The highest-stakes theme — it's about whether the north-star is *credible*, and it's largely a **narrative/content** fix (an about/impact/governance surface), not a rebuild.
- **T3 — "Collapse the abstraction + hold the north-star thread" (J1/S2).** No "you already do X" reframe anywhere; the network/democracy/public-good thread is *dropped* on the doc + onboarding surfaces (what-is-adna sells project-file-org; get-started goes local-private-only).
- **T4 — "Stop the browse-only dead-ends" (actionability).** vaults (purpose-less, no search, no adopt/publish), use-cases (no outcome/CTA), community (rungs not wired), commons (dev-gated) — surfaces *describe* but don't let you *act*.
- **T5 — Card-excerpt + mobile-reflow + code-overflow craft-debt (mechanical, low-effort).** Truncation/excerpt defects (reference 6/10, use-cases mid-word, learn mobile), code-block clip (get-started desktop+mobile), hero letterbox (reference), 13,451px pages. Plus copy typos (commons "before you back you"; reference raw markdown).
- **T6 — Jargon / cognitive-load "C+" (standing weakness, confirmed).** Epicenter what-is-adna; also home, network, commons connect-section. De-jargon + progressive-disclosure + inline gloss.
- **T7 — Proof-of-life placement (S5).** Home hero shows insider metrics; "68 vaults" + named subnetworks belong hero-adjacent.

## D. Priority-queue preview (severity × impact × effort → for O6)

| # | Item | Theme | Impact | Effort | Traces to |
|---|---|---|:-:|:-:|---|
| 1 | **Legible interactive graph component** (graph + home + network diagrams) | T1 | ★★★ | M–H | A-06 · vaults-graph · home · network · both skeptics |
| 2 | **"Who's behind this + what it changed" surface** (real humans · impact case · governance roadmap · what-is-Lattice-Protocol) | T2 | ★★★ | M | both skeptics |
| 3 | **Home hero: reframe line + proof-of-life promotion + 1+1 CTA** | T3·T7 | ★★★ | L | home · O2 S2/S5 |
| 4 | **Registry actionability**: one-line purpose per card · search/filter · adopt/publish rail | T4 | ★★★ | M | vaults |
| 5 | **Excerpt/truncation/overflow craft sweep** (reference · use-cases · learn · get-started · hero letterbox) + typo fixes | T5 | ★★ | L | 5 surfaces |
| 6 | **North-star thread + de-jargon pass** (what-is-adna reframe·trim 35%·gloss; get-started bridge; network anchor) | T3·T6 | ★★ | M | what-is-adna · get-started · network |
| 7 | **Wire the CTAs / on-ramps** (community ladder rungs · use-cases "start like X" · commons non-dev "follow along") | T4 | ★★ | L | community · use-cases · commons |
| 8 | **Reference/learn IA** (lead-with-spec + version stamp · reconcile navs · group by genre · mobile reflow) | T4·T5 | ★★ | L–M | reference · learn |

**Note for O8 (operator decisions):** items **1** (graph vs illustration register — reconcile ADR-032) and **2** (real-humans vs persona-as-public-face — a deliberate identity choice) are **not** unilateral fixes; they're strategic calls for the operator at ratification. Everything else is conventional refinement.

**Update 2026-07-07 (operator):** priority item #2's **governance-roadmap** half is now in hand — **progressive decentralization** (FA → trusted stewards → steward-led/public) resolves the democracy-vs-FA contradiction (`governance_and_mission_resolution.md`), and a new **core mission area — biodiversity protection** — joins rare-disease + undiagnosed-disease for steward recruitment. Still an O8 call: item #2's *other* half, **personas-vs-real-humans-forward**.
