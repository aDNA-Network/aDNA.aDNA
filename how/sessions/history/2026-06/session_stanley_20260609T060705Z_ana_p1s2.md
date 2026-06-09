---
type: session
session_id: session_stanley_20260609T060705Z_ana_p1s2
created: 2026-06-09
updated: 2026-06-09
status: completed
tier: 2
agent: agent_stanley
persona: rosetta
mission: mission_ana_p1_m1_decisive_strokes
campaign: campaign_adna_network_audit
tags: [session, audit, adna_network, p1, conversion, cta]
---

# Session — campaign_adna_network_audit P1-S2: Get Started CTA + /commons link normalize

## Intent
Close the audit's **D4** finding (no path to *building* — home's CTAs all routed to reading/browsing; a build CTA existed only as a footer text link) by adding a persistent **Get Started** CTA to the header + home hero, and normalize the `/commons` "Read the standard" link to the canonical `/reference/specification`. Commit-only (mirrors the E5 deploy freeze).

## Done (this session)
- **Header (sitewide) — `components/common/Header.astro`:** added a compact `btn btn-primary` **Get Started** → `/get-started` as the first item in `.header-actions`; new scoped `.header-cta` rule (compact padding/font, reuses the global `.btn-primary` tokens + its AA-tuned dark-mode variant + `:focus-visible` ring). Persistent build CTA now on **every** page (verified: home, /commons, /get-started, deep pages).
- **Home hero — `components/sections/HomeHero.astro`:** added opt-in `showGetStarted` (default **false**) + `getStartedHref`/`getStartedLabel` props. When set, **Get Started** leads as the single `btn-primary` and "Explore the network" + "Read the standard" demote to `btn-secondary` (one clear primary, build-first). `pages/index.astro` opts in via `showGetStarted`.
- **`/commons` design preserved:** `commons.astro` is the *other* `HomeHero` consumer with a bespoke primary ("Meet the subnetworks" → `#featured`). Opt-in default keeps Get Started **out** of the /commons hero — its primary is untouched. Verified in built HTML.
- **`/commons` link normalized — `pages/commons.astro:42`:** `secondaryHref="/reference/"` → `"/reference/specification"` (matches the home hero's canonical spec target).

## Verify
- `npm run build` ✓ (163 pages). `npm run test:gates` → **97/97 pass**, incl. G4 a11y [light]+[dark] on `/get-started` (0 WCAG AA violations) and G9 responsive **no horizontal overflow at 375px** on Commons/Vault-detail → the new header CTA does **not** crowd the mobile header.
- Built-HTML evidence: home hero = `Get Started`(primary)/`Explore the network`(secondary)/`Read the standard`(secondary); `.header-cta` present on home + commons + get-started; /commons hero primary = "Meet the subnetworks" (NOT hijacked); /commons secondary → `/reference/specification`.
- **Finding D4 closed** (gap-register #1, conversion). Commit-only — no deploy.

## Finding (carry to S4) — vault-count drift 37 → 40
The prebuild (`build_vaults_data.mjs`) regenerated `vaults.json` to **`vault_count: 40`** (committed artifact was stale at 37; `source_inventory_sha` d3f3bc3→05305b0) — Home.aDNA inventory grew (new records incl. `Canvas.aDNA`, `Git`, …). This is exactly **S4 Obj-10** (the audit's 40/37/38 reconciliation, gap-register #3). **Reverted the regenerated `vaults.json` + `vaults_graph.mmd` to HEAD** to keep S2 focused; S4 will confirm the true count against the registry-of-record, sanitizer-check the new notes, and ensure home/`/vaults`/`/network` all derive from `vault_count`.

## SITREP
**Completed** — P1-S2 (Obj 7): Get Started CTA (header + hero) + /commons link normalize; build + 97/97 gates green; D4 closed; committed (no deploy). Note: Obj 6 (`/vaults` contrast) was already shipped in S1.
**In progress** — none.
**Next up** — S4 housekeeping batch (Obj 9–13; incl. the 37→40 vault-count reconciliation surfaced here), then S3 Phase-1b verification sweep (run last, against final state), then the P1→P2 human gate.
**Blockers** — none. Deploy posture: commit-only by default; operator may flag the Get Started CTA as a ship-now (pending question at session close).
**Files touched** — `site/src/components/common/Header.astro`, `site/src/components/sections/HomeHero.astro`, `site/src/pages/index.astro`, `site/src/pages/commons.astro`; this session record; `mission_ana_p1_m1_decisive_strokes.md`.

## Next Session Prompt
Continue `mission_ana_p1_m1_decisive_strokes` **S4 (housekeeping batch, Obj 9–13)**: (9) introduce one shared version constant (`site/src/data/standard.ts`) referenced by home + `/reference/specification` + comparison-doc footers so v2.2 can't re-drift; (10) **reconcile the vault count — now 40** (the prebuild regen showed `vault_count: 40` vs the committed 37; confirm against the Home.aDNA inventory-of-record `Home.aDNA/what/inventory/inventory_vaults.yaml`, sanitizer-check the new vault notes via `publicNote()`, ensure home CTA / `/vaults` title+desc / `/network` all *derive* from `vault_count` with no hardcodes); (11) public `display_name` for `Harness.aDNA` (RareHarness = clinical vertical, `RareHarnessOld` = legacy); (12) scope `SidebarNav.astro` to the current top-level section (active group expanded, others behind a switcher) + promote Glossary/Guides into Reference/footer; (13) reader-orientation banner atop `/reference/specification` + a "now build one" CTA back to `/get-started`, and JSON-LD on `/vaults` index + `vaults/[slug]` (reuse `src/utils/seo.ts` `buildWebPageJsonLD`). Verify each with `cd site && npm run build && npm run test:gates` (both modes). Commit-only. Then **S3 Phase-1b verification sweep** (light-mode axe + score the ~25 un-scored routes + 404, mobile/Mermaid checks, RSS/search/print decisions; append to `audit_adna_network_2026_06.md`) — run last so it covers S2+S4. Then the **P1→P2 gate** (operator), then **P2** (`mission_ana_p2_closeout_realign`).
