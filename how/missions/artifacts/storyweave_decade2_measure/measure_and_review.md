---
type: review_findings
artifact_class: measured_baseline + review_delta
created: 2026-07-09
mission: mission_decade2_replan
objective: "O1 (measure) + O2 (focused review)"
persona: agent_rosetta
instrument: "scripts/visual_capture.mjs --base https://adna.network --axe (headless T0, doctrine_visual_inspection)"
status: draft
tags: [storyweave, decade2, measure, review, verify-live, o1, o2]
---

# Decade-2 measure + focused review — live adna.network (2026-07-09)

> Instrument: the headless **T0 harness** against **live adna.network** — 14 surfaces × {mobile-lg, desktop} × {dark, light} + `--axe`. Screens: `./screens/` holds the **4 cited surfaces** (the full 14×2×2 capture set is reproducible via the `instrument:` command in the frontmatter — pruned to keep this public repo lean). Raw report (all 14 surfaces' measured data): `./capture_report.json`. Axe-rule detail (registry + vault-detail): `scratchpad/axe_detail.mjs`.

## Part A — measured baseline (all surfaces healthy; loads sub-1.1s; zero console errors)

| Surface | HTTP | load (ms) | axe (dark) | bodyLen | h2 | Decade-2 read |
|---|:-:|:-:|:-:|:-:|:-:|---|
| `/` (home) | 200 | 776 | **0** | 6565 | 5 | Decade-1 hero live + healthy |
| `/about` | 200 | 1003 | **0** | 3979 | 5 | Decade-1 P1 credibility surface — solid |
| `/network` | 200 | 694 | **0** | 4536 | 5 | image-led; Axis-4 cohesion candidate |
| `/commons` | 200 | 658 | **0** | 5781 | 4 | real subnetworks — the honest proof surface |
| `/vaults` (registry) | 200 | 763 | **3** | 3190 | 14 | **B6** — cards = name+persona+status only; no purpose/search/publish |
| `/vaults/Operations.aDNA` | 200 | 911 | **3** | 884 | 1 | **EV4/B12** — the nested-`<main>` bug (below) |
| `/vaults/Molecules.aDNA` | 200 | 643 | **3** | 993 | 1 | same bug (generalizes to ~40 pages) |
| `/get-started` | 200 | 738 | **0** | 3977 | 3 | **B7** — prereq callout present now (partially addressed) |
| `/community` | 200 | 807 | **0** | 3472 | 4 | **B10** — ladder → wire to actions |
| `/use-cases` | 200 | 874 | **0** | 1622 | 0 | **B9 + B10 + EV2** — mid-word excerpt truncation; fictional personas |
| `/learn` (index) | 200 | 1057 | **0** | **798** | 0 | **B8** — near-empty hub (798 chars); ordered path missing |
| `/learn/what-is-adna` | 200 | 638 | **0** | 8492 | 7 | **B8** — the long/dense page → trim ~35% + sticky TOC |
| `/reference` | 200 | 782 | **0** | 2482 | 1 | **B8** — lead-with-spec + version stamp (EV6) |
| `/adopters` | 200 | 776 | **0** | 2233 | 3 | **B6** — archetype cards, not real-adopter proof |

**Headline:** 11/14 surfaces are **axe-0**; the *only* a11y debt on the whole set is the **3-violation nested-`<main>` bug** on the registry + vault-detail pages. No console errors anywhere. All loads < 1.1 s. Decade-1's shipped surfaces (home/about/network/commons) are healthy — nothing regressed.

## Part B — the standout finding: EV4/B12 is ONE bug, not ~120 violations

The 3 axe violations on `/vaults` **and** every `/vaults/[slug]` (sampled 2, generalizes to ~40) are identical, in **both** themes:

- `landmark-main-is-top-level` — *Main landmark should not be contained in another landmark*
- `landmark-no-duplicate-main` — *Document should not have more than one main landmark*
- `landmark-unique` — *Landmarks need a unique role/label*

**Root cause (single):** the layout shell already renders `<main id="main-content">`, and the page components **also** render their own `<main class="vaults-index">` / `<main class="vault-detail">` → a **nested, duplicate `<main>`**. **One structural edit** (inner `<main>` → `<div>`/`<section>` in the two components) clears all 3 violations across all ~40 pages at once. → **B12's headline item is trivial**, and because it also hits `/vaults`, the P3 registry mission (M3.1) should fix it inline.

## Part C — focused review-delta (which backlog items still hold)

> The first red-team reached its verdict *without opening the conversion surfaces* (completeness-critic). This pass opened them. Verdicts vs. the o6 backlog:

- **B6 — registry actionability + `/adopters` reconcile → CONFIRMED, high-value (P3).** Screenshot-verified: registry cards carry **name + persona + status only** — no one-line purpose (a stranger can't tell what "Caddy"/"Nebula" *does*), **no search/filter** (the `platform` group alone is 30 cards), **no adopt/publish rail**. `/adopters` is **fictional archetype cards** ("A freelance developer juggling 3–4 client projects…"), not real-adopter proof. Both verbatim as B6.
- **B7 — onboarding → PARTIALLY ADDRESSED (severity ↓).** The buried prereq is now a **callout above Step 1** (not literally "Step 0", but surfaced); mobile `/get-started` is long but shows **no glaring horizontal overflow** at 375px. Re-scope B7 to: verify code/ASCII overflow at build; consider a literal Step-0 prereq; the north-star bridge exists in "Next steps." Smaller than at review time.
- **B8 — docs IA + de-jargon → CONFIRMED (P4).** `/learn` index is a **near-empty hub (798 chars, no `<h2>`)** — no ordered path; `/learn/what-is-adna` is **8492 chars / 7 h2** (the trim + sticky-TOC target); `/reference` is spec-light (2482 chars, 1 h2) — lead-with-spec + version stamp (EV6) still open.
- **B9 — craft/excerpt sweep → CONFIRMED live (P5).** `/use-cases` excerpts **truncate mid-word** ("documentation, archit…", "She p…", "Com…", "person's u…"). The exact defect O5 flagged.
- **B10 — wire the on-ramps → CONFIRMED (P3).** `/use-cases` and `/community` are present but **browse-only** — no "start like X" + outcomes, no ladder-rung → action wiring.
- **B11 — design-system hardening → carry (P5), not re-measured this pass** (needs a code-level hex/token audit, not a live capture).
- **B12 — a11y/perf/reach → CONFIRMED but DE-RISKED (P5).** The axe headline (EV4) is the one nested-`<main>` fix (Part B). Perf: Decade-1 `/` is Perf 1.00 / LCP 489 ms / CLS 0 (P1.6 AAR); a full per-surface Lighthouse/CWV sweep is a P5 task, not a re-plan blocker. i18n + low-bandwidth + legal/privacy = still plan-only.
- **B13 — deferred long-tail → carry (P5, folded).** Not re-measured; disposition unchanged.

**New / notable (not previously itemized):**
- **EV2 not fully closed — honesty flag for P3.** `/use-cases` still uses **fictional named personas** (Sam/Alex/Maya/Jordan/Sarah/Kai). Decade-1 EV2 ("swap fictional use-cases → real subnetworks") landed the real subnetworks on **`/commons`** but left `/use-cases` fictional. Decade-2 must **decide the split deliberately**: keep `/use-cases` as clearly-labelled *illustrative* archetypes (and lean on `/commons` for real proof), or replace with real stories. Register guardrail (Movement-Skeptic) gates this.
- The docs surfaces share a **left-sidebar shell** (`/adopters`, `/use-cases`, `/reference`, `/learn`) with a slightly divergent nav (the "reconcile the two navs" B8 item) — visible on both `/adopters` and `/use-cases` captures.

## Part D — P1.6 held follow-ups (disposition)

1. **Per-vault deep-links on hero node-click** (hero currently → `/vaults`) → **fold into P3/M3.1** (it's registry-actionability: the hero should doorway into individual vault pages, which also need the per-card purpose line).
2. **Cross-surface graph-language cohesion (Axis 4)** — apply the orb+arc language to `/network` + home `NetworkDiagram` → **provisional P5 craft/cohesion** (or a P3 stretch); `/network` is image-led today (measured healthy). Not urgent; brand-cohesion polish.
3. **T1/T3 comps as tier-decision record** → **archival**, no action.
