---
mission_id: mission_ana_p1_m1_decisive_strokes
type: mission
title: "P1.M1 — Execute audit roadmap (decisive strokes + quick-wins + Phase-1b verification)"
campaign_id: campaign_adna_network_audit
phase: 1
mission_number: 1.1
slug: decisive_strokes
status: completed
created: 2026-06-08
updated: 2026-06-10
closed_at: 2026-06-10
actual_sessions: 4
last_edited_by: agent_stanley
owner: stanley
persona: rosetta
mission_class: implementation
spec_completeness: complete
estimated_sessions: "2-4"
token_budget_estimated: "S1 ~80-140 kT (credibility quick-wins); S2 ~100-160 kT (a11y + conversion); S3 ~120-200 kT (Phase-1b verification sweep)"
prerequisite_missions: [mission_ana_p0_planning_audit]
prerequisite_artifacts:
  - how/campaigns/campaign_adna_network_audit/missions/artifacts/audit_adna_network_2026_06.md
  - how/campaigns/campaign_adna_network_audit/missions/artifacts/audit_adna_network_2026_06_results.json
target_adr: "none (vault-detail sanitizer may touch the ADR-023 registry generator — recommend, don't ratify)"
tags: [mission, campaign_adna_network_audit, phase1, implementation, decisive_strokes, quick_wins]
---

# P1.M1 — Execute audit roadmap

> Populated from the P0 audit roadmap (`audit_adna_network_2026_06.md` §6-7). Operator gate (2026-06-09): **Full P1** + **ship-now the live Criticals**.
>
> **✅ Session 1 DONE + DEPLOYED LIVE (commits `c0b41a6` + this).** All Critical/High credibility-privacy-naming-a11y-SEO fixes shipped to adna.network via a targeted prebuilt deploy that **excludes the ADR-010-embargoed `/commons`** (verified live: `/commons` → 404; CakeHealth → 0 "Genentech"; GitHub → canonical `/aDNA`; robots → adna.network; nav → "Vaults"; `/vaults` axe 0 both modes). Build 159pp (deploy) / 160pp (HEAD); gates 97/97. Token redacted (no leak); SS_VERCEL_TOKEN = throwaway test acct (no rotation flag).
>
> **✅ Session 2 DONE (commit-only).** Obj 7 shipped: persistent **Get Started** `btn-primary` in `Header.astro` `.header-actions` (sitewide) + opt-in third home-hero CTA (leads as the single primary; Explore/Read demote to secondary; `/commons` keeps its own primary via `showGetStarted` default-off); `/commons` `secondaryHref` `/reference/`→`/reference/specification`. Build 163pp; gates **97/97** (incl. `/get-started` axe 0 both modes; 375px no-overflow). **D4 closed** (gap-register #1). Obj 6 (`/vaults` contrast) was already shipped in S1. Session: `session_stanley_20260609T060705Z_ana_p1s2.md`. **Finding → S4:** prebuild regen showed `vault_count: 40` (committed 37) — folded into Obj 10.
>
> **✅ Session 4 DONE (commit-only).** Obj 9/10/12/13 shipped: (9) `site/src/data/standard.ts` single-sources version + entity/conformance counts (home stats + meta-tags); (10) vault-count reconciled **37→40** — regenerated `vaults.json`/`vaults_graph.mmd` (0 sanitizer leaks; counts already derive); (12) `SidebarNav.astro` scoped to the active section + 7-link switcher, Glossary+Guides promoted to footer; (13) `/reference/specification` orientation banner (gated) + JSON-LD on `/vaults` index (`CollectionPage`) + `/vaults/[slug]` (`WebPage`). Build 163pp/40 vaults; gates **97/97**. Session: `session_stanley_20260609T062423Z_ana_p1s4.md`.
> **⏸ Obj 11 (Harness display split) DEFERRED → Home.aDNA / Hestia.** `display_name` is sourced only from Home.aDNA (generator `build_vaults_data.mjs:113`); no site-side override seam. Fixing Harness.aDNA's display ("RareHarness"→"Harness" platform; RareHarnessOld→legacy) is a Home.aDNA vault-card edit (Rule 4; Hestia), not a site/commit-only change. Carry to P2 as a coordination item.
>
> **✅ Session 3 DONE (commit-only) — Phase-1b verification sweep (2026-06-10).** Obj 8 shipped: reusable `@audit` harness (`site/tests/gates/audit-p1s3-sweep.spec.ts`, `npm run audit:p1s3`, excluded from `test:gates`) scoring **37 previously-unscored routes × axe both modes** + 375px overflow + S4-switcher/Mermaid-keyboard/no-JS probes → **115/115** after fixing the 3 findings it surfaced (what-is-adna `scrollable-region-focusable`; light `--color-success` token 40%→26%; 2 coupled hardcoded greens 28%→24%). robots/sitemap verified live-correct. RSS→backlog · search+newsletter→E6 · print/PDF+link-graph-crawl→D16. Full results: audit report **§9**; gates re-run **97/97**. Session: `session_stanley_20260610T145133Z_ana_p1s3_p2_e5c162.md`.

## Goal
Ship the audit's **decisive strokes + copy-paste quick-wins** (the cross-cutting credibility / naming / accessibility / SEO fixes) and run the **Phase-1b verification sweep** the completeness critic requires. The **campaign-tier** redesign items (home-hero concrete-then-ethos, terminology spine, nav/orphan surfacing incl. `/commons` nav entry, closing-CTA partials, coordinated deploy) are **routed into the remaining E5 cycles at P2** (they overlap E5 c162/c164 directly) — see `mission_ana_p2_closeout_realign`.

## Scope division (what ships here vs folds into E5)
- **P1 (here):** broken/redirecting GitHub links · `The Lattice`→`Vaults` rename · vault-detail meta sanitization + the **CakeHealth named-client privacy scrub** · robots.txt dead-domain fix · version/count single-sourcing · `/vaults` contrast + gate coverage · a persistent **Get Started** CTA · Phase-1b verification.
- **→ E5 realign (P2):** home-hero rework · terminology/object-model spine · surfacing `/commons` + audience pages in nav (E5 c164) · closing-CTA partials + the deferred `/commons` "Connect" affordance (E5 c162) · coordinated HEAD deploy after the ADR-010 Wilhelm co-sign clears.

## Objectives

### Session 1 — Critical credibility fixes (candidate ship-now; quick-wins)
1. **Repo links (Critical).** Repoint `get-started.astro:51` (`aDNA-aDNA` 404) and all `Agentic-DNA` (301) hrefs — `Header.astro:37`, `Footer.astro:12`, `HomeHero.astro:32`, `index.astro:143`, `get-started.astro:29` clone — to canonical `https://github.com/LatticeProtocol/aDNA`; single-source the URL. Add the canonical URL to the linkcheck gate.
2. **`The Lattice` → `Vaults` (Critical naming).** Rename nav item, `/vaults` `<title>`/H1, and vault-detail back-links to one noun (`Vaults`); reserve `Lattice`/`Lattice Protocol` for the protocol only. Align home ("See all N vaults") + /network ("Browse the vaults").
3. **Vault-detail meta sanitization (Critical) + CakeHealth privacy scrub (Critical).** Add a public `tagline` per vault; use it for `<meta>`/`og:description` (stop falling back to internal `note`). **Scrub the CakeHealth vault page** (named client + employer + "Private LP repo") — and any other vault note exposing private/partner identity. Add a publish-time guard in the ADR-023 registry generator rejecting public descriptions matching `/Campaign [A-Z]|CHARTERED|DG-[A-Z]|\d{4}-\d{2}-\d{2}|consumer wrappers/` and a private-identity check.
4. **robots.txt dead domain (High).** `public/robots.txt` Sitemap `https://adna.dev/...` → `https://adna.network/sitemap-index.xml`; verify the sitemap emits + lists the right routes.
5. **Version + count single-sourcing (High/Med housekeeping).** `specification.mdx:1479` v2.0→v2.2; `open-standard.mdx:22,40` + 5 `adna-vs-*.mdx` + design-rationale/governance-model v2.1→v2.2 via a shared constant. Derive every vault count from `vaults.json.vault_count` (home CTA, /vaults title/desc, /network) and reconcile 37-vs-38-vs-40 against the registry-of-record. **Do NOT change `open-standard.mdx:95` (verified non-issue: "10 extensions + 14 base").**

### Session 2 — Accessibility + conversion
6. **`/vaults` contrast (Critical a11y).** Dark text token on the green status pill (1.15:1→AA); raise persona (`#555`) + class-count (`#666`) to ≥4.5:1 on `#1a1b26` (`VaultCard.astro:19-29`). **Add `/vaults` + `/vaults/[slug]` to the axe gate** (closes the gate-coverage hole that let this through).
7. **Get Started CTA (High conversion).** Add a `btn-primary` "Get Started"→`/get-started` in `Header.astro` header-actions + as a third home-hero CTA; normalize `/commons` "Read the standard" `/reference/`→`/reference/specification`.

### Session 3 — Phase-1b verification sweep (completeness-critic gaps)
8. **Coverage + parity sweep.** Re-run axe + screenshots in **light mode** on key pages; score the **~25 un-scored in-scope routes** (patterns, use-cases, glossary, changelog, adopters, how, the 4 remaining audience pages) + the **404 page**; axe-sample generated detail pages (concepts/tutorials/comparisons/glossary terms); qualitatively review **mobile** (vaults catalog, Mermaid graph, spec sidebar); verify the Mermaid graph's keyboard/no-JS state; decide on RSS/search/newsletter/print gaps (recommend or defer). Append results to the audit report.

### Session 4 — Housekeeping batch (audit roadmap H1b–H5; gap register #2–6)
9. **Version shared-constant.** The v2.x→v2.2 string sweep shipped in S1; introduce one shared version constant (e.g. `src/data/standard.ts`) referenced by home + spec + comparison-doc footers so it can't re-drift.
10. **Vault-count reconciliation.** Reconcile `vaults.json.vault_count` (37) against the registry-of-record (Home.aDNA inventory; seed says 38) — confirm the true count, add the missing record if 37 is wrong; ensure home CTA / `/vaults` title+desc / `/network` all derive from `vault_count` (no hardcodes).
11. **Harness display split.** ⏸ **DEFERRED → Home.aDNA (Hestia).** Public `display_name` for `Harness.aDNA`; label RareHarness as the clinical vertical and `RareHarnessOld` as legacy. `display_name` is Home.aDNA-sourced (no site override seam) → this is a Home.aDNA vault-card edit, not a site change. Carried to P2 coordination.
12. **SidebarNav scoping.** Scope SidebarNav to the current top-level section (active group expanded; others behind a switcher) instead of ~100 links on every doc page; promote Glossary + Guides into Reference/footer for a layout-independent entry.
13. **Spec orientation + JSON-LD.** Reader-orientation banner atop `/reference/specification` ("For implementers and evaluators. New to aDNA? Start with What is aDNA →") + a "now build one" CTA back to `/get-started`; JSON-LD on the `/vaults` index + vault-detail pages.

## Verification (per objective)
`cd site && npm run build && npm run test:gates` + Lighthouse + axe (both modes) green; cite the closed finding; SITREP + lightweight AAR per session.

## Exit Gate (P1 → P2)
- [x] Agreed roadmap items shipped (committed; gates/axe/Lighthouse green) or explicitly deferred (Obj 11 → Home.aDNA/Hestia, P2 coordination).
- [x] Phase-1b sweep complete; audit report updated with the closed coverage gaps (§9).
- [x] Findings log annotated with resolution status; campaign-tier items handed to P2/E5.

> **P1→P2 GATE: PASSED 2026-06-10.** Pre-approved by operator at plan ratification (2026-06-09/10 gate bundle, conditional on S3 landing green — condition met: sweep 115/115, gates 97/97). Evidence: audit report §9 + `site/evidence/p1s3/`.

## Completion Summary
All four sessions shipped. **S1** (deployed live): 10 Criticals — canonical repo links, `The Lattice`→`Vaults`, vault-meta sanitizer + CakeHealth privacy scrub, robots.txt domain fix, version sweep, `/vaults` contrast + gate coverage, targeted deploy excluding embargoed `/commons`. **S2** (commit-only): persistent Get Started CTA (header + opt-in home-hero primary) + `/commons` CTA normalize. **S4** (commit-only): `standard.ts` single-sourcing, vault-count 37→40 regen (0 leaks), SidebarNav scoping + footer promotion, spec orientation banner + JSON-LD. **S3** (commit-only, run last): Phase-1b sweep closed every §8 completeness-critic gap — 37 routes × both modes axe (0 violations after 3 fixes), mobile + keyboard + no-JS probes, robots/sitemap live-verified, feature-gap decisions routed (RSS→backlog, search+newsletter→E6, print/PDF+link-crawl→D16). Deferred: Obj 11 Harness display (Home.aDNA/Hestia, P2 coordination memo). Final: build 163pp/40 vaults, gates 97/97, sweep 115/115.

## AAR
- **Worked:** Running S3 last so it re-verified S2+S4 surfaces; the `@audit`-tagged harness pattern (reusable sweep without polluting `test:gates`); root-cause token fix over per-component patches.
- **Didn't:** The light `--color-success` darkening silently broke 3 downstream hardcoded greens — two found only because gate-4/sweep covered those routes; constants coupled to token tints are invisible dependencies.
- **Finding:** Token-coupled hardcoded colors are a recurring class (3 instances, 2 files commented "for WCAG AA" against the *old* token) — exactly what a consistency gate should catch.
- **Change:** Carry a "token-coupled constants move with the token" check into gate-14 (docs-freshness/consistency, D16).
- **Follow-up:** Obj-11 Hestia memo (P2); RSS backlog idea (P2); search/newsletter into M5.13 O5; print/PDF + full link-graph crawl into D16 carry-ins.
