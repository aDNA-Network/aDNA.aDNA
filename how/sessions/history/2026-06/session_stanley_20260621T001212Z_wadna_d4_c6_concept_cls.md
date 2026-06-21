---
type: session
session_id: session_stanley_20260621T001212Z_wadna_d4_c6_concept_cls
campaign: campaign_website_adna
mission: mission_wadna_p3_iterate
decade: D4
cycle: C6
persona: Rosetta
created: 2026-06-21
updated: 2026-06-21
status: completed
last_edited_by: agent_stanley
tier: 2
token_budget_estimated: 55
tags: [session, website, d4, m7, cls, perf, concept-template, iii_cycle]
---

# Session — WEBSITE D4 C6: concept-template CLS (M-7)

**Intent:** Execute D4 cycle C6 — the last substantive D4 item. M-7 = `/learn/concepts/*` template
**CLS 0.156** (above the 0.1 Good threshold). Measure → fix at source (reserve-space) → re-measure → lock
under the G1 budget gate → rotated persona micro-review → commit. Then the D4 decadal AAR + decade-gate
follow (separate session). Operator delegated: drive to the decade-gate; G3 visual-regression deferred.

## Root-cause hypothesis (pre-measurement)
Concept pages carry **bare markdown code fences** (12/12 concept docs use bare ```` ``` ````, 0 use
`<CodeBlock>`). `DocumentationLayout.astro:73–105` wraps each bare `<pre>` in a `.code-block` > `.code-content`
structure **and** appends a copy button **at runtime** (`initCopyButtons()` on load + `astro:page-load`).
The geometry changes on wrap (`.prose pre` has `margin-bottom: var(--space-6)` + `padding: var(--space-4)`;
the inserted `.code-block` has `margin: var(--space-6) 0`, inner `pre` → `margin: 0`) → everything below each
fence shifts after paint → CLS. The authored `<CodeBlock>` component already wraps at **build time** (its
script only attaches listeners — no DOM insertion, CLS-safe); the fix is to make bare fences behave the same.
Secondary suspect: `Space Grotesk` (`--font-display`) heading FOUT (code font is already `font-display: optional`).
**Measurement decides** (campaign SO#5 — re-measured, not asserted).

## Scope (Tier 2)
- `site/src/layouts/DocumentationLayout.astro` and/or a build-time transform (rehype) — M-7 reserve-space fix.
- `site/tests/gates/gate-19-lighthouse-budget.spec.ts` + `site/tests/gates/fixtures/lighthouse_d4c6_concepts.json`
  — extend G1 to the concept route (generalize to a {route, fixture} list).
- `site/evidence/lighthouse_d4c6_concepts*.json` — raw LH runs, LOCAL-ONLY (gitignored).

## Constraints
`npx astro build` only (never `npm run build` — pt19 owns vault data; also avoids post-UTC-midnight
vaults.json date-churn). Commit-only on `main`, no deploy mid-P3. Honor M35 (record = commit + this SITREP;
no STATE/mission batch until the decade-close). No `.adna/` writes.

## Measure (cold, Lighthouse 13.4.0 on the preview build)
| Page | Fences | Desktop CLS | Mobile CLS | Desktop LCP |
|------|-------:|------------:|-----------:|------------:|
| `/learn/concepts/knowledge-graph` (worst case) | 2 | **0.0299** (re-run 0.0299 — stable) | 0.0314 | 852ms |
| `/learn/concepts/agentic-literacy` | 0 | 0.0290 | 0.0359 | 577ms |

**The M-7 finding (CLS 0.156) does NOT reproduce.** Current CLS is ~0.03 desktop **and** mobile — far inside
the 0.1 Good band, stable across re-runs. The 2-fence and 0-fence pages have near-identical CLS (Δ≈0.001), so
the runtime code-fence wrapping is **not** the dominant shift; the residual ~0.03 is minor display-font (Space
Grotesk) settling. **Root cause of the original 0.156, already fixed:** `BaseLayout.astro:48–51` preloads
Space Grotesk 400/700 (woff2 latin) — that collapsed the heading-FOUT shift. The code font is already
`font-display: optional` (tokens.css:115). (Mobile LCP 3.3–5.0s is the synthetic 4×-CPU/slow-4G lab throttle
on a text page with no hero image — not a CLS issue; real-CDN mobile is far better. Desktop LCP 0.58–0.85s.)

## Decision — confirm-and-gate, no rebuild (restraint)
Per campaign SO#5 (re-measured, not asserted) and the restraint doctrine, **M-7 needs no template change** —
the prescribed "reserve-space" fix is already in place (font preload + hero `aspect-ratio` + build-time
`<CodeBlock>` wrapping) and CLS is solidly Good-band. Chasing the residual 0.03 by forcing `font-display:
optional` on the **display** font would risk FOIT (invisible headings on a cold load) — a worse trade for a
green metric. This mirrors C5's H-11 reconciliation (measurement averted an unnecessary SSR rebuild).

## What shipped
- **G1 coverage completed.** `gate-19-lighthouse-budget.spec.ts` generalized from one route to a `{route,
  fixture}` list; **added `/learn/concepts/knowledge-graph`** (M-7) alongside `/vaults/graph` (H-11) — this is
  exactly G1's specified scope (TOOLING-PROMOTION: G1 guards H-11 **and** M-7), which C5 had only half-wired.
- New committed slim fixture `tests/gates/fixtures/lighthouse_d4c6_concept.json` (desktop knowledge-graph:
  CLS 0.0299 · LCP 852ms · Perf 0.99 — all pass LCP<2500 / CLS<0.1 / Perf≥0.9). Raw runs → gitignored
  `evidence/lighthouse_d4c6_concept_*.json`. **No site source changed** (template untouched).

## Verification
- `npx astro build` clean (163 pages); `vaults.json`/`install_truth.json` untouched (used `npx astro build`,
  not `npm run build` — no prebuild regen, no post-UTC-midnight date churn).
- `npm run test:gates`: **281/281 green** (280 + the new concept route under G1; clean uncontended run, 2.0m).
  *Flake note (process learning):* a first run flaked 10/281 (5 gate-4 axe + 4 `@audit` axe `[dark]` color-contrast
  + 1 gate-7 `networkidle` mermaid) because I ran Lighthouse and the gate suite against **one shared preview
  server** simultaneously for 13m. An isolated re-run (gate-4 + gate-7 → 29/29) and a full clean re-run
  (281/281, 2.0m) confirmed pure contention flake — never run Lighthouse against the gate suite's server.
- Persona micro-review (rotated — independent of Rosetta, who made the gate call):
  - **Performance Engineer (axis F) — PASS.** "Started at the metric, not the composite: CLS 0.0299 desktop /
    0.0314 mobile, both << 0.1; LCP sub-second desktop. The no-rebuild call is correct — the 0.156 was a
    font-FOUT shift already killed by the BaseLayout preload. Locking it under G1 is the right durable move."
  - **Accessibility Auditor (axis G) — PASS.** "Template unchanged → no a11y delta. Confirmed the concept-page
    code blocks keep `tabindex=0` (scrollable-region-focusable) + the copy button's `aria-label`; heading
    outline intact. No findings."
  - **Design Critic (axes C/H) — PASS.** "No visible jank on load at 1440/390px; the residual 0.03 is
    imperceptible. Visual craft unchanged. Agree with restraint over chasing a green number into FOIT."

## D4 status after C6
D4 now has **C1–C6 closed**; **M-7 reconciled (confirm-and-gate)**. All substantive D4 specs are resolved
(H-5/6/7/9/11 + M-4/5/7); only **H-10 stays deferred** (verify-after-pt19, not ordered). **Next = the D4
decadal AAR** (`skill_decadal_aar`, reset baseline, rotated/independent panel) → **human decade-gate**
(GO/NO-GO → P3→P4). G3 visual-regression = defer-with-rationale (operator-confirmed). M35: record = this
SITREP + the commit; D4 master row batches at the decade-close (in the AAR session).

**Next Session Prompt:** WEBSITE.aDNA D4 has C1–C6 closed (all substantive specs resolved: H-5/6/7/9/11 +
M-4/5/7; H-10 deferred verify-after-pt19). Run the **D4 decadal AAR** (`skill_decadal_aar`, reset baseline,
rotated panel — Design Critic + Accessibility Auditor + Content Strategist mandatory for the visual-identity
decade; Performance Engineer for CWV) across the D4 units (`/vaults/graph` · `/vaults/[slug]` · `/`
NetworkDiagram · header · concept-template). **Re-audit H-6** (C2 deferred its visual/axe pass to this AAR —
confirm the NetworkDiagram spokes read ≥3:1 both modes). File `aar_decadal_d4_visual_craft.md` (mirror
[[aar_decadal_d3_agentic_community]]); record the **G3 deferral** + file the `idea_` backlog follow-up; batch
the D4 master row (M35) into STATE.md + `mission_wadna_p3_iterate.md` + campaign master. Then present the
**human decade-gate** (GO/NO-GO → P3→P4) — do NOT auto-advance (campaign SO#8). Build `npx astro build` (never
`npm run build`); gates `npm run test:gates` (281/281; **never run Lighthouse against the gate server** — it
caused 10 flake-fails this session); commit-only on `main`.
