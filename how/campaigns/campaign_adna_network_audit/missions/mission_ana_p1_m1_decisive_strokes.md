---
mission_id: mission_ana_p1_m1_decisive_strokes
type: mission
title: "P1.M1 — Execute audit roadmap (decisive strokes + quick-wins + Phase-1b verification)"
campaign_id: campaign_adna_network_audit
phase: 1
mission_number: 1.1
slug: decisive_strokes
status: planning
created: 2026-06-08
updated: 2026-06-08
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

> Populated from the P0 audit roadmap (`audit_adna_network_2026_06.md` §6-7). **Awaiting the P0→P1 operator gate** to confirm scope + which items (if any) ship-now vs ride the E5-close deploy. Commit-only by default.

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

## Verification (per objective)
`cd site && npm run build && npm run test:gates` + Lighthouse + axe (both modes) green; cite the closed finding; SITREP + lightweight AAR per session.

## Exit Gate (P1 → P2)
- [ ] Agreed roadmap items shipped (committed; gates/axe/Lighthouse green) or explicitly deferred.
- [ ] Phase-1b sweep complete; audit report updated with the closed coverage gaps.
- [ ] Findings log annotated with resolution status; campaign-tier items handed to P2/E5.

## Completion Summary
*Fill at close.*

## AAR
*Fill at close.*
