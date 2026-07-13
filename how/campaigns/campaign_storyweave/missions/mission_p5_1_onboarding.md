---
plan_id: mission_p5_1_onboarding
type: plan
title: "P5.1 — Onboarding: hero install one-liner + license eyebrow (+ gated demo-as-proof)"
campaign: campaign_storyweave
phase: P5
decade: 2
owner: stanley
status: active        # M5.1a SHIPPED + LIVE 2026-07-12 (adna.network; deploy dpl_72iABbW) — O0–O2 ✅; O3/O4 (R1 demo-as-proof) GATED behind the ≥6-exemplar reference pass (own session); O5 (adjacents) / O6 (close) follow
mission_class: build
executor_tier: opus       # R1 art-direction/honesty + the ≥6-exemplar reference pass = judgment; M5.1a's R2/R3 are mechanical single-sourcing → sonnet-eligible if ever split out
token_budget_estimated: "~80–120 kT for M5.1a (R2 hero-install + R3 eyebrow: build + gates + T0/T1 + home Lighthouse + ship-gate) in ~1 session; a SEPARATE pass for the R1 reference-inspection gate (O3) + the M5.1b demo build (O4) once ratified; M5.1c/close fold into the increments they ride with"
created: 2026-07-12
last_edited_by: agent_rosetta
grounded_in: how/campaigns/campaign_storyweave/p5_replan.md
tags: [plan, storyweave, decade2, p5, onboarding, install, demo-as-proof, active]
---

# Mission: P5.1 — Onboarding: hero install one-liner + license eyebrow

> **Read cold.** Persona **Rosetta**. Campaign governance: `how/campaigns/campaign_storyweave/CLAUDE.md`. Decade-2, phase 5 (the **capstone**) — authorized 2026-07-12 at the O4 gate of [[mission_p5_replan]] (re-plan `status: accepted`; [[p5_replan]] §M5.1 is the ratified scope). **This is a BUILD mission** — `site/` edits happen here, shipped live per increment behind operator gates. **P5 is an onboarding + craft phase, NOT a remediation one** — the live measure found home **Perf 99 / CLS 0 / TBT 0** and **axe-0** on every surface; the gap is that a newcomer landing on the hero has nothing to *start with*. Sequenced **cheap-and-safe first, highest-risk last.** Start at **O0**.

## Why this mission exists

The operator-surfaced onboarding review (an inspection of the Nous **Hermes** agent landing page at the P4 wind-down) and the live post-P4 measure ([[measure_summary]], 2026-07-12) agree on one gap: **the home hero gives a newcomer nothing to *do*.** The single-sourced install one-liner lives only in `/get-started`; the MIT / open-standard trust signal is meta-/footer-only; and there is no demo anywhere (only static ASCII step-mocks in `home.ts`). This mission operationalizes [[front_page_doctrine]]'s already-ratified-but-**unbuilt** "one demo" clause plus the candidate onboarding rules **R1–R5** ([[synthesis_onboarding_guidance]], provenance-tagged) against that measured gap. *(Charter Phase 5; [[p5_replan]] §M5.1; grounded in [[synthesis_onboarding_guidance]] + [[measure_summary]].)*

**The durable-doctrine sub-decision is already ratified** ([[mission_p5_replan]] O4): **R2 + R3 ship now** on the current basis (they only surface existing single-sourced data more prominently — uncontroversial UX, no doctrine bet); **R1 (the demo) waits** behind a lightweight **≥6-exemplar install-forward reference pass** ([[skill_reference_inspection]]) that de-risks the demo *format* and promotes the candidate rules → durable front-page doctrine before any hero-asset is committed.

## Where we are (measured 2026-07-12 — screenshot + metric grounded)

- **Home hero has no install path.** `HomeHero.astro` renders CTAs (`.hero-actions`) + a `.hero-trust-links` meta row + the stat strip — but **no install command and no copy button.** The one-liner (`install_truth.json` `one_liner` = `git clone …/aDNA.git ~/aDNA && cd ~/aDNA && claude`) is consumed only by `/get-started` + `/network`. *(measure: `storyweave_p5_measure/capture_report.json` notes "install one-liner absent from hero".)*
- **MIT is a hardcoded meta span, not single-sourced.** `.hero-trust-links` carries a literal `<span>MIT-licensed</span>`; the single source `standard.ts` `STANDARD_LICENSE='MIT'` exists (it's already a home *stat*) but the hero eyebrow/trust row doesn't consume it — a latent drift.
- **No demo/video anywhere** — only the static ASCII step-mocks (`home.ts` `steps[].demo`). This is exactly [[front_page_doctrine]]'s unbuilt "one demo."
- **The perf budget is tight and green.** Home **Perf 99 / LCP 1.8 s / CLS 0 / TBT 0** (fresh 2026-07-12); P3 baseline holds 99–100 elsewhere. → R1's demo is the campaign's **single highest-risk item**; the home Lighthouse budget is a **hard gate** on the onboarding increment.
- **a11y is already 100** (axe-0 both themes, all 6 measured surfaces). → P5 is **not** an axe-remediation phase.
- **gate-12 does not cover home `/` today** (`SURFACES = ['/get-started/','/network/']`). A hero one-liner ships **un-gated** unless `/` is added — so M5.1a extends the gate as well as the hero.

Everything else P3/P4 owned is confirmed shipped. The one live data gap (`zeta.aDNA` purpose line, 67/68) is a **Hestia** `headline_mission` currency item — non-blocking, out of scope here.

## The onboarding rules (R1–R5, provenance-tagged — from [[synthesis_onboarding_guidance]])

Candidate-basis (1 primary exemplar = Hermes; below the [[skill_reference_inspection]] ≥6-exemplar bar to emit *durable* doctrine — hence the R1 gate). Each rule carries its provenance:

- **R1 — Demo-as-proof: a real screencast of the agent working** *(priority; GATED).* Prov: Hermes leads with a "HERMES DESKTOP — BETA PREVIEW" panel (agent drafts release notes → commits → opens a PR); [[front_page_doctrine]] "one demo." Gap: adna.network has **zero** video/GIF.
- **R2 — Hero-level install prominence** *(priority; SHIPS NOW).* Prov: Hermes puts install + a copy field **in the hero**. Gap: adna's one-liner is `/get-started`-only. Build: single-sourced `one_liner` + copy-button in the hero; keep `Get Started` secondary.
- **R3 — License-forward trust in the hero** *(SHIPS NOW).* Prov: Hermes hero eyebrow "OPEN SOURCE • MIT LICENSE." Gap: adna's MIT is meta-/footer-only. Build: an **"Open standard · MIT"** eyebrow single-sourced from `STANDARD_LICENSE` (drift-proof, like the `Standard v2.5` stamp shipped in M4.2).
- **R4 — Feature-imagery only where a real mark out-scans prose/ASCII** *(M5.1c, low).* Prov: Hermes pairs duotone imagery per feature. Nuance: **keep ASCII where a terminal IS the honest surface** — don't over-image.
- **R5 — "Pick your path" clarity, adapted** *(M5.1c, footnote).* Prov: Hermes's Mac/Windows/Linux download cards. Adaptation: aDNA is **clone-and-run** → **no download cards**; the honest analog is a one-line prereq note.

## The increments (ship-per-increment, [[p5_replan]] §M5.1)

### M5.1a — Hero install (R2) + license eyebrow (R3)  *(this session; ship first; LOW risk)*
1. **Add optional props to `HomeHero.astro`** (`installOneLiner?`, `licenseLabel?`/`showLicenseEyebrow?`) with falsy defaults — the documented **additive-optional-prop** discipline (like `reframe`/`heroGraph`), so `/network` + `/commons` stay **zero-diff**.
2. **Install copy-pill in the hero** — reuse the `TryInClaudeCode.astro` `.cta-install / .cta-cmd / .cta-copy` markup + inline copy-script, rendering `{installOneLiner}` (from `install_truth.json` `one_liner`), placed in/under `.hero-actions` as a tertiary "or clone it now" affordance — **does not replace `Get Started`**. CLS-safe (static), copy handler is an Astro-bundled deferred script (gate-10 safe).
3. **"Open standard · MIT" eyebrow above `<h1>`** (does not touch `.hero-lead` → **gate-23 safe**), "MIT" from `STANDARD_LICENSE`; **also single-source the existing** `.hero-trust-links` "MIT-licensed" span (kills the latent drift).
4. **Wire from `index.astro` only** — `import installTruth` + `import { STANDARD_LICENSE }`; pass `installOneLiner={installTruth.one_liner}` + `licenseLabel={STANDARD_LICENSE}`.
5. **Extend gate-12** — add `'/'` to `SURFACES`, broaden the home locator to `pre, code`; the `one_liner` contains each `commands.*` verbatim (fixture-integrity guarantees it), so verbatim + no-legacy checks pass → the hero install is **drift-protected**, not un-gated.
6. **No hardcoding** (gate-12); **token discipline by hand** (no automated hex gate — AA contrast verified both themes on the new eyebrow/pill).

### M5.1b — Demo-as-proof (R1)  *(GATED behind O3; highest-risk in the campaign)*
A real **~30–60 s screencast** — *clone → `claude` → the agent orients from `STATE.md` + does one real task* — on home + `/get-started`, replacing the static ASCII mock as the honest poster/fallback. Files: new asset + a lazy-loaded player component in `HomeHero`/`home.ts` "How it Works". **Hard gates:** hold home **CLS 0 / TBT 0 / Perf ≥ 99** (lazy-load + `poster` + **no autoplay-with-sound**; optimized GIF / `<video muted playsinline>` / `asciinema` cast); no-JS + a11y (captions/controls; ASCII mock = honest fallback); a **real recording, never staged** (Movement-Skeptic). **Waits for O3.**

### M5.1c — adjacents (R4 / R5)  *(LOW; rides a later increment)*
Feature-imagery only where a real mark out-scans prose (keep ASCII where a terminal is the honest surface); a one-line prereq note (git + Claude Code; macOS/Linux/Windows) — **no download cards** (aDNA is clone-and-run). Honesty-bounded, cosmetic.

## Objectives (phased — operator gates as marked)

| # | Objective | Output | Gate |
|---|-----------|--------|------|
| **O0** | Re-orient: read this + [[p5_replan]] + [[synthesis_onboarding_guidance]] + [[measure_summary]]; open `HomeHero.astro` + `index.astro` + `TryInClaudeCode.astro` + `install_truth.json` + `standard.ts` + `gate-12`; author this mission | shared understanding + mission spec | — |
| **O1** | **M5.1a build** — hero install copy-pill (single-sourced `one_liner`) + "Open standard · MIT" eyebrow (single-sourced) + dedupe the hardcoded MIT span + extend gate-12 to `/` | the hero install increment | — |
| **O2** | **M5.1a gate + ship** — `npm run test:gates` green (axe-0 both themes on `/` · gate-23 lead intact · gate-11/10 hero image · gate-9 no overflow) · T0 headless before/after (both themes) · `p3_interactions` 21/21 · **home Lighthouse held (Perf ≥99 / CLS 0 / TBT 0)** · `/network`+`/commons` zero-diff · ranker ≥ 4.0 (Newcomer + Adopter + Movement-Skeptic) → operator ship-gate → deploy | M5.1a live | ⛩ operator |
| **O3** | **R1 gate — the ≥6-exemplar install-forward reference pass** ([[skill_reference_inspection]]): curate **Val Town · Raycast · Bun · Vercel · Astro** (+ Hermes = 6; both tonal poles + functional spread) → inspect each to the fixed rubric (Tier-A fully populated, esp. `demo_as_proof` + install/hero treatment) → synthesize range+clustering → **promote R1–R5 → durable [[front_page_doctrine]]** with provenance. **Own session.** | 6× `site_<name>.md` + refreshed `_reference_set` + doctrine diff | ⛩ operator |
| **O4** | **M5.1b build + gate + ship** — the ~30–60 s demo screencast (format chosen by O3); **hard** perf/CLS gate + no-JS/a11y baseline + real-recording (Movement-Skeptic) → operator ship-gate → deploy | M5.1b live | ⛩ operator |
| **O5** | **M5.1c adjacents** — prereq note + honesty-bounded imagery; rides an increment's ship | adjacents live | ⛩ operator |
| **O6** | Phase-increment AAR (SO#5) + STATE baton → M5.2 (craft/design-system) | M5.1 close | — |

> **Progress (2026-07-12):** **O0–O2 ✅** — mission authored; **M5.1a built + shipped + LIVE** on adna.network (deploy `dpl_72iABbW`, aliased 200; operator GO'd the O2 ship-gate). Hero now carries the single-sourced install copy-pill (`install_truth.json` one-liner) + the "Open standard · MIT" eyebrow (`STANDARD_LICENSE`); the hardcoded `MIT-licensed` trust span is deduped to the same const; **gate-12 extended to `/`** (home install now drift-protected). Measured: **315/315 gates** (incl. gate-12 home verbatim+no-legacy, gate-23 hero phrases intact, gate-4 axe-0 both themes), T0 home **axe 0**, `p3_interactions` **21/21**, Lighthouse home **Perf 100 / CLS 0 / TBT 0**; `/network`+`/commons` zero rendered-diff; ranker ≈ **4.3** (Newcomer 4.4 · Adopter 4.4 · Design-Critic 4.2 · Movement-Skeptic PASS). Evidence (reproducible): `scripts/visual_capture.mjs --base http://localhost:4321 --routes /,/get-started --axe`. **Next = O3** (the R1 ≥6-exemplar reference pass — a separate session) or M5.1c/M5.2 at operator direction.

## Constraints & gates (honor; renegotiate only with operator sign-off)

- **Instrument = headless T0 harness** (`scripts/visual_capture.mjs` + `--axe` + Lighthouse), run **from the repo root** per [[doctrine_visual_inspection]] — never assume Chrome; every visual claim screenshot-cited.
- **`site/` gate-suite** (`npx astro build` → `npm run test:gates`) green each deployable increment; **a11y gate-4** (0 axe both themes on `/` — the new eyebrow/pill hold AA contrast, no second `<main>`); **the hero blockers** stay green — **gate-23** (`.hero-lead` keeps the A-11/A-12 phrases verbatim; the eyebrow sits *above* `<h1>`, the pill *below* the CTAs), **gate-11** (`img.hero-stage-img` present/16:9/AVIF+WebP), **gate-10** (image `sizes`/`srcset`; no render-blocking script), **gate-9** (320–1440, no overflow), **gate-16** (no codenames in hero copy), **gate-13 + `p3_interactions` H1** (§5 CTAs + `nav.hero-graph-nodelist` twin unbroken).
- **Perf is MANUAL for home** — gate-19 covers only `/vaults/graph` + a concept page. **Run `npx lighthouse` on `/` yourself** (foreground, explicit `PATH` incl. `/opt/homebrew/bin`, absolute `node`/`npx`, one surface — dodges the exit-127 node-shell flake) and hold **Perf ≥99 / CLS 0 / TBT 0** vs the 2026-07-12 baseline.
- **Single-source everything** — install string from `install_truth.json`, "MIT" from `STANDARD_LICENSE`; **never hardcode** (gate-12). **Additive-extension discipline** — new props are optional, zero-diff for `/network`+`/commons`, never a fork. Design tokens only in any scoped style (no automated hex gate → verify by hand).
- **Register:** warm · calm · honest (~55/45); the Movement-Skeptic gates every copy change — the remedy is *more proof + more honesty*, never hype. Preserve the SS-Ghibli / Tokyo-Night identity — steal Hermes's confidence, **not** its palette. **R1 = a real recording, never staged.**
- **Ship per increment** + operator ship-gate (SO#1); **deploy recipe** `npx astro build` → `VERCEL_TOKEN=$SS_VERCEL_TOKEN vercel --prebuilt --prod` (redact the token) → live T0 re-capture.
- **Routed (non-blocking):** data-currency (`headline_mission`, `zeta.aDNA`) → Hestia (Home.aDNA); deploy-layer perf/BP → Vitruvius (WebForge.aDNA). Staged coord memos, never silent cross-vault writes.
- **Git:** local-first, explicit-path staging, `pgrep -x git` guard, gitleaks pre-push, push operator-gated (SO-11).
- **AAR at increment close** (SO#5); token budget above (SO#11); per-increment persona-ranker ≥ 4.0 → **capstone ranker ≥ 4.95** graduates the campaign.

## Definition of done

The home hero gives a newcomer something to *start with*: a single-sourced install one-liner + copy-button (drift-protected by an extended gate-12) and an "Open standard · MIT" eyebrow single-sourced from `STANDARD_LICENSE`, with the latent hardcoded-MIT span deduped — all **CLS-safe**, **axe-0 both themes**, and **holding the home Lighthouse budget (Perf ≥99 / CLS 0 / TBT 0)**, `/network`+`/commons` unchanged. Then (gated) the demo-as-proof lands once the ≥6-exemplar reference pass promotes the onboarding rules to durable doctrine and de-risks the format. Each increment ships live behind an operator ship-gate with gates green; per-increment ranker ≥ 4.0 building to the **capstone ≥ 4.95**.

## AAR (SO#5) — M5.1a close, 2026-07-12

- **Worked.** The additive-optional-prop discipline paid off exactly as designed: two optional props (`installOneLiner`, `showLicenseEyebrow`) fed only from `index.astro` gave home the install pill + eyebrow while `/network`+`/commons` render **zero rendered-diff** (verified in `dist/` — only harmless unused scoped CSS ships). Single-sourcing was clean — the one-liner from `install_truth.json`, "MIT" from `STANDARD_LICENSE` (which also deduped the latent hardcoded trust-row span). Reused the `TryInClaudeCode` copy pattern rather than a new component. **315/315 gates**, home **Perf 100 / CLS 0 / TBT 0**, ranker ≈ 4.3. Shipped + live first attempt.
- **Didn't (well, a trap avoided).** The first `npm run test:gates` reported a puzzling **169 passed** — a **stale `astro preview` server** from a prior session was squatting on :4321 and `reuseExistingServer: true` bound the run to it. Killing the stale server + re-running gave the true **315/315**. Also chose to **wrap** the install command (`pre-wrap`) rather than horizontal-scroll it, specifically to dodge the `scrollable-region-focusable` axe class the P4 AAR flagged — the right call, confirmed axe-0.
- **Finding.** **gate-12 didn't cover home `/`** — a hero install one-liner would have shipped un-gated. Extending `SURFACES` to `/` (with a `pre, code` locator scoped to home so the other surfaces stay strict) made the home install drift-protected; the `one_liner` contains each `commands.*` verbatim, so it passed cleanly. General lesson: when you surface single-sourced data on a *new* surface, extend the gate that guards it, don't just trust the source.
- **Change (for next time).** **Kill any stray `:4321` preview before a gate run** (`lsof -ti:4321 | xargs kill`) — `reuseExistingServer` will otherwise silently bind a stale build and give a false/partial count. Add to the pre-gate checklist alongside the `pgrep -x git` guard.
- **Follow-up.** (1) **O3 = the R1 ≥6-exemplar reference pass** (Val Town·Raycast·Bun·Vercel·Astro + Hermes) — a separate session; gates M5.1b. (2) Craft note (operator-flagged, non-blocking): "MIT" now appears 3× in the hero (eyebrow / trust-row / stat) — deliberately license-forward, trimmable if a later craft pass (M5.2) wants it. (3) M5.1c adjacents (prereq note) unbuilt by choice — isolated M5.1a for a clean measure.
- **Token / tier.** `executor_tier: opus` as planned (R2/R3 were mechanical single-sourcing, but the gate-12 extension + the wrap-vs-scroll a11y call + the ship-gate judgment kept it opus-worthy; no drop needed). Budget: est. ~80–120 kT for M5.1a; **actual ≈ 1 session**, within envelope.
