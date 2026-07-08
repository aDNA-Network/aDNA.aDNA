---
type: review_findings
artifact_class: prioritized_backlog
created: 2026-07-07
mission: mission_site_story_review_charter
objective: O6
persona: agent_rosetta
status: draft
tags: [review, synthesis, backlog, completeness_critic, storyweave, o6]
---

# O6 — Completeness-critic + synthesis → the prioritized backlog

> De-duplicates **O2** (storytelling doctrine S1–S7) · **O3** (18-dim first-pass) · **O4** (ranker matrix + 2 skeptics, themes T1–T7) · **O5** (story audit) · the **governance + humanization resolutions** · the completeness-critic gaps · the **prior deferred long-tail** (dossier §3) into one prioritized, traceable backlog. Scores: **Sev** (user-impact severity) × **Imp** (thesis-impact) × **Eff** (effort). This is the O7 charter's raw material.

## Part 1 — Completeness-critic disposition (what the review MISSED → new work)

> **⚡ EXECUTED 2026-07-08** — the read-only evidence pass completed this disposition: see **[[evidence_completion]]** (12 surfaces opened + axe-measured; 2 DD walks — technical repo-walk + persona-hub evaluator; **EV1–EV8**; **T2 improved** → cautiously-positive-on-the-standard). The items below are now evidence-grounded; the EV-series folds into the charter phases.

The static, 11-surface review left real gaps. The campaign **must** address these before its strategic verdict is final:

- **T8 (NEW) — Un-reviewed conversion surfaces + a live orphan.** The **6 persona hubs** (`/enterprise` · `/security` · `/compliance` · `/researchers` · `/educators` · `/startup-first-hour`) + the **825-line `/org-context-graphs`** landing page were **never opened** — yet they are the exact surfaces that carry the T2 "convince an outsider" verdict. **`/org-context-graphs` is a TRUE ORPHAN** (0 inbound links — invisible to every visitor). `/how/*` (publishing · workshops · lattice-examples) + ~40 `/vaults/[slug]` detail pages also unreviewed. → **the T2 verdict rests on unreviewed evidence; a surface-audit + link-graph crawl is P0.**
- **Reconcile, don't "add," `/adopters`** — it **already exists** (8 inbound refs). O5 §4 called an "adopters/proof page" a *missing* surface; correction: it's live but is persona-*archetype* cards, not real-adopter *proof*. → upgrade archetype→proof (ties to T2 humanization), don't duplicate.
- **"Verify-live" measured pass (NEW workstream)** — static screenshots couldn't capture: **motion/reveal animations**, **dark/light toggle** behavior (FOUC/persistence), **live interactivity** (mobile hamburger · `/vaults/graph` scripts · copy-to-clipboard · Mermaid client-render), **real Lighthouse/CWV** (perf was scored off wall-clock only — CLS is a live risk), an **actual axe + screen-reader** run (AA was *asserted*, not run), **SEO/OG-image** rendering, **404/error** states, and **link-graph integrity** (the orphan proves it was never audited). → a measured pass (now trivially runnable via the headless T0 harness + `--axe` + Lighthouse) gates the evidence.
- **Claims to spot-check:** install command vs `src/data/install_truth.json` fixture; the **version-stamp inconsistency** (home shows v2.5, `/reference` flagged "no version stamp"); whether "68 vaults" *reflects reality* (the skeptics' "network of one" is verifiable on the `/vaults/[slug]` detail sample).
- **7 perspectives the bench missed** (add as build-phase review lenses): **i18n/non-English** (a global-public-good thesis on an English-only site), **low-bandwidth** (heavy hero PNGs vs. the rare-disease/biodiversity/global-south communities named as the mission), a **real screen-reader** pass, the **site's own legal/privacy** posture (cookie/localStorage/analytics/GDPR — distinct from `/compliance` content), a **hostile/bad-faith** reader, a **technical investor DD** (walk the real GitHub repo + the `@anthropic-ai/claude-code` CLI-lock-in), and the **returning user** (what's-new/upgrade path).

## Part 2 — The prioritized backlog (de-duplicated, traceable)

| # | Item | Theme | Sev | Imp | Eff | Traces to |
|---|---|---|:-:|:-:|:-:|---|
| **B1** | **Surface-audit + link-graph crawl** — open the 6 persona hubs + `/org-context-graphs` + `/how/*` + a `/vaults/[slug]` sample; crawl for orphans; **re-confirm the T2 verdict on real evidence**; fix/retire the `/org-context-graphs` orphan | T8 | ★★★ | ★★★ | L–M | completeness-critic #1 |
| **B2** | **"Verify-live" measured pass** — Lighthouse/CWV + axe + motion/toggle/interactivity + OG-render + install-truth diff + 404 (headless T0 `--axe` + Lighthouse) | verify-live | ★★ | ★★★ | L | completeness-critic §2–3 |
| **B3** | **The legible graph component** — split connected(15/14) from unconnected(53); interactive (pan/zoom/hover/click-open); AA-contrast; responsive (no mobile drop); reused on `/vaults/graph` + home concept-diagram + `/network` diagram | T1 | ★★★ | ★★★ | M–H | A-06 · vaults-graph · home · network · both skeptics |
| **B4** | **"Who's behind this" credibility surface** — real FA + Wilhelm partner + one Rare-Archive **impact case** + the **progressive-decentralization governance roadmap** + **progressive-humanization** framing + "what the Lattice Protocol *is*" | T2 | ★★★ | ★★★ | M | both skeptics · governance+humanization resolutions |
| **B5** | **Home hero** — the S2 **"you already do X" reframe** line + **proof-of-life promotion** (68 vaults + subnetworks hero-adjacent, ahead of insider metrics) + 1-primary/1-secondary CTA | T3·T7 | ★★★ | ★★★ | L | home · O2 S2/S5 |
| **B6** | **Registry actionability** — one-line purpose per vault card · search/filter · adopt/publish rail · "active vaults" strip; and **reconcile `/adopters`** archetype→proof | T4 | ★★★ | ★★ | M | vaults · use-cases · completeness (/adopters) |
| **B7** | **Onboarding hardening** — get-started code/ASCII **overflow** (desktop clip + mobile) · promote the buried prereq to Step 0 · bridge back to the north-star | T3·T5 | ★★ | ★★ | L | get-started |
| **B8** | **Docs IA + de-jargon** — what-is-adna (reframe top · trim ~35% · sticky TOC · inline gloss/progressive-disclosure of the 16-entity table) · `/reference` (lead-with-spec + **version stamp** · group by genre) · `/learn` (reconcile the two navs · mobile reflow · ordered path) | T3·T6 | ★★ | ★★ | M | what-is-adna · reference · learn |
| **B9** | **Craft + excerpt sweep** — excerpt/truncation defects (reference 6/10 · use-cases mid-word · learn mobile) · hero letterbox (reference) · **copy typos** ("before you back you"; raw-markdown dashes) · card-grid mobile reflow | T5 | ★★ | ★ | L | reference · use-cases · learn · commons |
| **B10** | **Wire the on-ramps** — community ladder rungs → actions · use-cases "start like X" + outcomes · commons non-dev "follow along" · the N-pillar payoff (S7) on home §1 | T4·T3 | ★★ | ★★ | L | community · use-cases · commons · home |
| **B11** | **Design-system hardening** — a `/design-system` page · kill hardcoded hex (badges/Mermaid/scrim) · harmonize the two card tiers (VaultCard/RegistryCard) · font-weight discipline · image-palette build check | T5·design-debt | ★ | ★ | M | dossier §2 craft debt · design-critic |
| **B12** | **A11y + perf + reach hardening** — real axe remediation · keyboard/focus/screen-reader · CLS/perf budget · OG imagery · **i18n + low-bandwidth** posture (at least a plan) · site legal/privacy notice | a11y·perf·reach | ★★ | ★ | M–H | completeness §2·§4 · A-07 |
| **B13** | **Deferred long-tail reconcile** (dossier §3) — A-08 nav-span (≤5 aspiration vs 8) · A-13 problem-statement redundancy · A-17 educator rubric · A-18 node-operator path · A-19 SPDX · A-11 "concrete-then-ethos" hero rework (now B5) | mixed | ★ | ★ | L–M | dossier §3 |

## Part 3 — Missing surfaces (named)
- **"Who's behind this + impact case" surface** → **B4** (now fully buildable — both strategic calls resolved).
- **"Show-the-file" moment** (a real vault `CLAUDE.md`/YAML + copy, near the hero) → into **B5/B3** (S3 J2).
- **`/adopters`** — exists; **upgrade** archetype→real-proof → **B6**.
- **`/org-context-graphs`** — exists but **orphaned**; link it into IA **or** retire it → **B1**.

## Part 4 — Register guardrail (carry into every item)
Warm · calm · **honest**. The site's radical-honesty voice is its #1 trust asset (both skeptics). Every copy/design change stays in the ~55/45 dial; the fixes are *more* proof and *more* honesty (real people, real numbers, real governance truth, a legible real graph), **never** hype, invented people, or inflated community. Preserve the distinctive SS-Ghibli identity.

## Part 5 — Handoff to O7
Phase the backlog: **P0** evidence-completion (B1+B2) → **P1** storytelling core (B4+B5+B10) → **P2** the graph component (B3) → **P3** actionability (B6+B7) → **P4** docs/onboarding/de-jargon (B8) → **P5** craft + a11y/perf/reach (B9+B11+B12) + B13 folded where it fits. Each phase: per-phase persona gate (ranker ≥4.0 → capstone) + III-cycle + `site/` gate-suite + deploy cadence + operator phase-gate. Scope boundaries: Hestia (data currency: vaults.json/install_truth/"68-reflects-reality") · Vitruvius·WebForge (deploy-perf) · deferred (full i18n · the social layer = Venus horizon).
