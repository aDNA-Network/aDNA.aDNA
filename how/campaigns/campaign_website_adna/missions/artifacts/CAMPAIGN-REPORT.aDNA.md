---
type: artifact
artifact_class: campaign_report
campaign_id: campaign_website_adna
mission_id: mission_wadna_p4_signoff
title: "CAMPAIGN-REPORT.aDNA — WEBSITE.aDNA Frontier-Grade Site Quality: before/after, sign-off, residuals, standing watch"
created: 2026-06-21
updated: 2026-06-21
status: complete
verdict: "GO (build-verified) — frontier-grade; live launch + on-live verdict = keystone follow-up"
last_edited_by: agent_rosetta
tags: [artifact, campaign_report, phase4, signoff, before_after, standing_watch, skeptical_frontier_engineer, decision_6]
---

# CAMPAIGN-REPORT.aDNA — WEBSITE.aDNA

> The sign-off record for `campaign_website_adna` (Operation aDNA, Track A). Mission: bring `aDNA.network` to a standard where a senior engineer at a frontier lab registers instinctive trust — concise, beautiful, compelling, **credibly real**. Method: read-only audit → research-grounded critique → planned improvement → verified re-audit, across four decades (P3) closed by decadal AARs, then this whole-site coherence pass + final sweep (P4). **Commit-only**; the live launch is the program keystone (joined with Hearthstone v8.0 + pt19).

## Verdict — **GO (build-verified)**

The site reads as **one organization with one voice** and clears the bar on the production build: every unit ≥4 on every A–K axis, **zero open Critical/High**, axe clean in both modes site-wide, CWV in the Good band on the flagships (desktop), and the credibility grammar a frontier-infra site needs (real proof-links, real artifacts, honest governance, FAIR/licensing, demonstrated-not-claimed). The **Skeptical Frontier Engineer signs off on the build** (§4). The one thing standing between this and a flawless *live* verdict is the **keystone deploy** — the full improved site (D2–D4 + cycles c162–c165) is committed but not yet live; the on-live re-confirmation is the named keystone follow-up.

---

## 1. Before → After — metric delta (final sweep vs the frozen P0 baseline)

Lighthouse 13.4.0, **mobile** form factor (matching the frozen baseline `site/evidence/wadna_baseline_2026_06/`), local production build. Before = P0 (2026-06-18, pre-improvement); After = P4 (2026-06-21). Single-run lab numbers (±150–300ms mobile-throttle variance on LCP).

| Page | Perf | A11y | Best-Pract. | SEO | LCP (ms) | CLS |
|------|:----:|:----:|:-----------:|:---:|:--------:|:---:|
| `/` (home) | 98→98 | 100→100 | 100→100 | 100→100 | 2105→2253 | 0→0 |
| `/network` | 98→98 | 100→100 | 100→100 | 100→100 | 2104→2254 | 0→0 |
| `/learn/what-is-adna` | 99→98 | 100→100 | 100→100 | 100→100 | 1956→2104 | 0→0 |
| `/get-started` | 98→99 | 100→100 | 100→100 | 100→100 | 2103→2104 | 0→0 |
| `/vaults` | 100→100 | 100→100 | 100→100 | 100→100 | 1653→1653 | 0→0 |
| `/vaults/graph` | **83→88** | 100→100 | 100→**96** | 100→100 | **4057→3539** | 0.0002→0.0002 |
| `/community` | 100→99 | 100→100 | 100→100 | 100→100 | 1503→1804 | 0→0 |
| concept (rep) | 94→87 | 100→100 | 100→100 | 100→100 | 1957→**3540** | **0.1343→0.0671** |
| adopters / glossary / patterns / reference / use-cases (rep) | 99→99 | 100→100 | 100→100 | 100→100 | ~1955 (flat) | 0→0 |

**Reading the delta.** Accessibility **100** and SEO **100** held on every page; Best-Practices held at 100 everywhere but `/vaults/graph` (→96). Performance held 98–100 on 12 of 14 pages. The two real movers:
- **`/vaults/graph` improved** — Perf 83→88, LCP 4057→3539ms (D4 H-9/H-11 work).
- **concept-template CLS 0.1343→0.0671** — the **M-7 finding quantified and resolved**: the P0 baseline literally carried the ~0.13 mobile CLS; it's now inside the Good band. (This is why C6 was confirm-and-gate, not rebuild — the BaseLayout font preload had already collapsed the heading-FOUT.)

**Honest soft spots (residual watch, not blockers — see §6):** concept-rep **mobile LCP rose 1957→3540ms** (the 12+ concept Mermaid diagrams now *render* post the c154 fix — a feature that adds client load; **desktop LCP stays Good** at ~0.6–0.9s, and the campaign's CWV gate G1 is desktop); `/vaults/graph` **mobile BP 96** (one best-practices item under client-Mermaid). Both are mobile-lab, single-run, client-render tradeoffs consistent with the H-11 "client Mermaid is fine" decision.

## 2. Per-unit A–K scorecard (brought to bar across the decades)

Every A–K axis was driven to ≥4 with zero open Critical/High, verified by the four decadal AARs (rotated panels):

| Decade | Units | Lead axes | Panel (verified-done) | AAR |
|--------|-------|-----------|----------------------|-----|
| **D1** Credibility-integrity | `/` · `/learn/what-is-adna` · `<head>` · `/network` | A·D·E·J | A4 · D5 · E4 · J5 | [[aar_decadal_d1_credibility_integrity]] |
| **D2** Nav-serialization | all docs-layout pages | G (a11y/structure) | G5 | [[aar_decadal_d2_nav_serialization]] |
| **D3** Agentic + community | sitewide · `/vaults/graph` · `/community` · `/get-started` | G·K·E | G5 · K5 · E5 | [[aar_decadal_d3_agentic_community]] |
| **D4** Visual craft · perf | `/vaults/graph` · `/vaults/[slug]` · `/` diagram · header · concept | C·F·G·H | C4 · F5 · G5 · H4.5 | [[aar_decadal_d4_visual_craft]] |

Axes **B** (Narrative) and **I** (Microcopy) were carried throughout (Content Strategist / front_page_doctrine / writing-guidelines) and confirmed in the cohesion pass (§3). **All 11 axes ≥4 site-wide.**

## 3. Full-site cohesion pass (one voice end-to-end)

Traversed the site as one journey against the shared substrate (`tokens.css`, `BaseLayout`, `global.css`, `Header`/footer, `ClosingCTA`, `front_page_doctrine`, `writing-guidelines`). Coherence is **structurally enforced** — type/spacing/colour/motion flow from tokens; the ≤2-accent register (cyan `--color-link` + purple `--color-primary`, ADR-032) holds; one shared layout/nav/footer/CTA.

**One coherence defect surfaced and fixed** (the only change permitted in P4): `VaultClassFacet.astro` (the class facet-chips on `/vaults`) carried hardcoded `#f0f0f0`/`#333` (light-only — broke the dark-first default into light blobs) plus a **rogue `#4a86e8` blue hover** (a third accent). It slipped the mechanical floor because axe scores contrast, not theme-coherence, and `/vaults`-index wasn't a direct decade unit. **Tokenized** to the theme-aware brand surface (`--color-bg-alt`/`--color-text`/`--color-border`) with the cyan `--color-link` accent on hover (no new hue), matching the site's bordered-pill convention. Other hex hits triaged as legitimate (Mermaid's theme API requires hex strings; the hero scrim uses brand values in `color-mix`; difficulty badges are documented contrast-verified semantic colors). The `transition:all` (C-8) and a few `!important` are the known, held LOW items.

## 4. Cold 3-second test + Skeptical Frontier Engineer's final verdict

Run cold on the production build (the improved site as it will deploy):

> **Skeptical Frontier Engineer — "frontier lab, not template." GO (on the build).** Default stance is *template until proven otherwise*; the tells that usually break the illusion are absent. The hero **demonstrates** (live federation topology, real vault registry, actual standard files) rather than adjectives it. Credibility is intact end-to-end: proof-links resolve, the homepage code is real, JSON-LD publisher is correct, the network diagram is genuinely data-driven, governance/licensing/FAIR are shown, the open/closed boundary is honest, and the site practices what it preaches for agents (`llms.txt`, no-JS reachability, graph JSON-LD). The register is disciplined — near-monochrome, one accent, generous whitespace, no AI-default exuberance. **The remaining reservation is not on the page, it's on the wire:** the full improved site isn't live yet (only D1 shipped; D2–D4 are keystone-gated), so the *live* verdict and the cold-3-sec on the deployed site are deferred to the joined launch. On the build, this reads as infrastructure I'd trust my data to."

Persona cold-3-sec (build): Newcomer / Rare-Disease Clinician — "I get what this does in 3s"; Funder/Program Officer — "governance + licensing + honest boundary present"; Accessibility & Agent Advocate — "keyboard + SR + agent paths all clean." No new Critical/High.

## 5. Gates & standing watch

**Floor:** `npm run test:gates` = **281/281** (clean). Coverage: G1 Lighthouse-budget (graph + concept fixtures), G2 `@audit` full-route × both-modes (blocking), gate-4 axe **both modes**, single-source (G5), public-meta sanitizer (G7), link-graph/canonical (G6), no-JS reachability (G11), llms.txt freshness (G10), categorical-colour (G9), brand/responsive/perf/hero/install/nav. Gate baseline grew 140 → **281** across the campaign.

**Standing watch — WIRED (GitHub Actions).** `.github/workflows/gates.yml` runs `npx astro build` + `npm run test:gates` (Chromium) on every push to `main` and every PR to `aDNA-Network/aDNA.aDNA` — the always-on floor that fails loudly on credibility/craft/perf/a11y drift. CI-safe (posture-safe `npx astro build` skips the sibling-dependent prebuild; committed `src/data/*`). It activates when pushing resumes (the campaign has been commit-only; the workflow file is committed and ready). *Recommended local complement (not auto-installed):* a `pre-push` hook running `npm run test:gates:fast` —
```sh
# .git/hooks/pre-push  (chmod +x)
cd site && npm run test:gates:fast || { echo "gates failed — push aborted (override: --no-verify)"; exit 1; }
```

## 6. Residual backlog

**Keystone-gated** (ship only at the joined launch — SP-9; commit-only until then):
- **M-6** live Best-Practices 92 (Vercel headers/source-maps) · **M-8** `/commons` 404 live (page exists in source; undeployed) · **MENU-1** desktop-hamburger fix (c165, undeployed) · **C-1 stage-2** (proof-links → Hearthstone's polished base) · the undeployed cycles c162–c165 + all of D2/D3/D4.

**pt19-owned** (verify-after, no hand-edit): **H-10** vault names/count/edges on `/vaults`·`/network`·`/vaults/graph`·`/` (data-layer; inherits pt19's corrections automatically).

**Perf watch (P4 sweep):** concept-template **mobile** LCP (~3.5s — the now-rendering client Mermaid diagrams; desktop Good) · `/vaults/graph` mobile BP 96. Both are the accepted client-render tradeoff (H-11). Candidate future work: build-time diagram prerender / a mobile perf pass — slots behind the keystone.

**Held / in-tolerance:** C-7 (hero lead length) · C-8 (`transition:all`) · C-9 (pill drift) · A11Y-DUP (dual sidebar, sound under media-queries). **Deferred-with-rationale:** G3 visual-regression gate ([[idea_visual_regression_gate]]).

## 7. What shipped, by decade (commit-only on `main`)

- **D1 Credibility-integrity** — SP-1 canonical source; C-1 proof-links repointed + prose reconciled; C-2 real homepage code; C-3 publisher = "aDNA Network"; C-4 data-driven diagram; gates G4/G5/G6/G7. **Deployed-live** (operator hotfix — stopped the leak). `045d661`·`21789cb`·`6009003`·`4704af3`.
- **D2 Nav-serialization** — content-first DOM + `grid-template-areas`; G2 @audit → blocking. `faa7a73`.
- **D3 Agentic + community** — `/llms.txt` + `/llms-full.txt` endpoints (single-sourced); graph CollectionPage JSON-LD; no-JS reachability gate; `/community` axis-K (real ladder/governance/honest horizon); gates G10/G11. `5d3e41c`.
- **D4 Visual craft · perf** — graph colour-restraint (Option A, ≤2 accents); NetworkDiagram edge contrast; `/vaults/[slug]` hierarchy; graph mobile node-list; perf (no-SSR); M-7 concept-CLS reconciled (no-rebuild); gates G1/G9. `9bb3ea8`·`ac6bf0c`·`fd13a27`·`36054d6`·`da5517a`·`c881dbd`.
- **P4 Sign-off** — cohesion fix (VaultClassFacet tokenized); final sweep; standing-watch workflow; this report.

## 8. Campaign AAR

- **Worked:** the credibility-first ordering was right — *credibility leakage, not performance, was the gap* (the site sat behind green 100s with dead links, fabricated code, private state in meta). Fixing content-truth (D1) before aesthetics (D4) is what moved the trust needle. The inherited III engine (decade cycles + decadal AARs + rotated panels) scaled cleanly across 4 decades.
- **Didn't:** the mechanical floor missed two *visual-coherence* defects (the VaultClassFacet light-chip/rogue-accent here; the E4 vault-detail jargon earlier) — axe scores contrast, not theme-coherence or voice. The whole-site cohesion pass is the necessary human backstop.
- **Finding:** *measure before you fix.* Twice in D4 the prescribed fix was unnecessary because the goal was already met (H-11 no-SSR; M-7 no-rebuild — the P0 CLS 0.134 had already fallen to ~0.06 via an earlier font preload). Restraint, grounded in measurement, beat reflexive building.
- **Change:** never co-run Lighthouse against the gate suite's preview server (a contended run flaked 10/281). Standing-watch + measurement run sequentially.
- **Follow-up:** the keystone joined launch (live deploy + on-live verdict); the perf-watch items (concept/graph mobile); G3 visual-regression (deferred); H-10 verify-after-pt19.

## 9. Open — Decision 6 (campaign close) + the keystone

P4 sign-off is **complete and build-verified.** What remains is **external**: the program **keystone** — the coordinated joined launch (WEBSITE Criticals shipped ✓ + Hearthstone v8.0 base released + pt19 regen landed) — which deploys the full improved site, clears `/commons` 404 + BP 92 + MENU-1, upgrades C-1 to stage-2, and is where the *on-live* cold-3-sec + final verdict are re-confirmed.

**Decision 6 (operator):** (a) **close the campaign now** — sign-off done, with the live launch + on-live verdict as the named keystone follow-up; or (b) **keystone-hold** — keep the campaign open until the joined live-launch. On close: append the campaign AAR to STATE, realign/resume STR (the engine track).
