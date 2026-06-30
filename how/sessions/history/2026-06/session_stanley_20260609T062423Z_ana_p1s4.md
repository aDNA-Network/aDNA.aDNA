---
type: session
session_id: session_stanley_20260609T062423Z_ana_p1s4
created: 2026-06-09
updated: 2026-06-09
status: completed
tier: 2
agent: agent_stanley
persona: rosetta
mission: mission_ana_p1_m1_decisive_strokes
campaign: campaign_adna_network_audit
tags: [session, audit, adna_network, p1, housekeeping, s4]
last_edited_by: agent_stanley
---

# Session — campaign_adna_network_audit P1-S4: housekeeping batch (Obj 9–13)

## Intent
Ship the audit roadmap's housekeeping tier (gap-register #2–6 / mission Obj 9–13): single-source the standard facts, reconcile the vault count, scope the sidebar, and add the spec orientation banner + JSON-LD. Commit-only.

## Done (this session)
- **Obj 9 — version/standard single-sourcing (H1b).** New `site/src/data/standard.ts` exports `STANDARD_VERSION`/`ENTITY_TYPE_COUNT`/`CONFORMANCE_LEVELS`/`STANDARD_LICENSE`. Wired the two prominent consumers: `home.ts` stats + `index.astro` "The Standard" meta-tags now read from the constant (was where the v2.0/v2.1/v2.2 drift lived). Verified: home renders `v2.2` + `14` from the constant. *(MDX prose mentions of v2.2 left literal — consistent post-S1; inline MDX interpolation is brittle/low-value, noted as a deferred refinement.)*
- **Obj 10 — vault-count reconciliation (H2).** The registry-of-record (Home.aDNA `inventory_vaults.yaml`, sha `05305b0`) now holds **40** vaults (committed artifact was stale at 37). Regenerated `vaults.json` (40; **0 sanitizer leaks** — new records incl. `Canvas`/`Git`/`Terminal`/`Obsidian` platform vaults are leak-clean) + `vaults_graph.mmd`. Counts on home / `/vaults` / `/network` already **derive** from `vault_count` (no hardcodes) → all now show 40 ("40 vaults across 14 classes", "See all 40 vaults"). No stray 37/38 literals in built prose.
- **Obj 12 — SidebarNav scoping (H4).** `SidebarNav.astro` now renders a compact **section switcher** (all 7 top-level sections, one click away; active highlighted) + only the **active section's** link tree (was all 7 groups / ~100 links on every doc page). Verified on `/learn/concepts/triad`: 1 `nav-group` + 7 switcher links. Promoted **Glossary + Guides** into the footer (`Footer.astro`) for a layout-independent entry (present on non-doc pages too).
- **Obj 13 — spec orientation + JSON-LD (H5).** Reader-orientation banner atop `/reference/specification` only ("For implementers and evaluators. New to aDNA? Start with What is aDNA →" + "Ready to build one? Get started →") — gated on `ref.id === 'specification'` (verified present on specification, absent on design-rationale). JSON-LD added: `/vaults` index → `CollectionPage`, `/vaults/[slug]` → `WebPage` (reuse `seo.ts` builders).

## Deferred — Obj 11 (Harness display split) → Home.aDNA / Hestia
`display_name` is sourced **only** from Home.aDNA (vault card → inventory; generator `build_vaults_data.mjs:113`), with no site-side override seam (`network_edges.yaml` overlays edges/relationships only). Harness.aDNA renders "RareHarness" because that is what the registry-of-record says. Correcting it (Harness.aDNA → "Harness" platform; RareHarnessOld → legacy) is a **Home.aDNA vault-card frontmatter edit** (Hestia's domain; Rule 4 local-by-default/sensitive) followed by a regen — not a site-side, commit-only audit change. Per the established pattern (P1-S1 fixed *projection* in the generator, never Home.aDNA content), **deferred to a Home.aDNA coordination item** (carry to P2 / flag to Hestia). Gap-register #4 reassigned: H3 → Home.aDNA, not site.

## Verify
- `npm run build` ✓ (163 pages, 40 vaults). `npm run test:gates` → **97/97 pass** (G4 a11y both modes incl. `/vaults`, `/get-started`, `/reference/specification` 0 WCAG AA violations; G9 responsive no overflow all viewports). Built-HTML evidence cited per objective above. Commit-only — no deploy.

## SITREP
**Completed** — P1-S4 (Obj 9, 10, 12, 13): version single-sourcing, vault-count 37→40, sidebar scoping + footer promotion, spec banner + JSON-LD. **Deferred** — Obj 11 (Home.aDNA display_name; Hestia coordination). **Remaining in P1** — S3 (Phase-1b verification sweep — run last, covers S2+S4). Then the **P1→P2 human gate**, then **P2** closeout/realign.
**Blockers** — none. Deploy posture: commit-only (rides E5-close deploy).
**Files touched** — `site/src/data/standard.ts` (new), `site/src/data/home.ts`, `site/src/pages/index.astro`, `site/src/pages/vaults/index.astro`, `site/src/pages/vaults/[slug].astro`, `site/src/pages/reference/[...slug].astro`, `site/src/components/sections/SidebarNav.astro`, `site/src/components/common/Footer.astro`, `site/src/data/vaults.json` + `vaults_graph.mmd` (regen, 40); this session record; `mission_ana_p1_m1_decisive_strokes.md`.

## Next Session Prompt
Run `mission_ana_p1_m1_decisive_strokes` **S3 — Phase-1b verification sweep** (Obj 8), now last so it covers S2+S4. Re-run axe + screenshots in **light mode** on key routes; score the **~25 un-scored in-scope routes** (patterns, use-cases, glossary, changelog, adopters, how/*, the 4 audience pages — researchers/educators/enterprise/startup-first-hour) + the **404** page; axe-sample generated detail pages (concepts/tutorials/comparisons/glossary terms); qualitatively review **mobile** (vaults catalog, Mermaid graph, spec sidebar — note the new section-switcher); verify the Mermaid graph keyboard/no-JS state; decide RSS/search/newsletter/print gaps (recommend → E5/backlog or defer). **Append results to `missions/artifacts/audit_adna_network_2026_06.md`** + annotate the findings log with resolution status. Verify with `cd site && npm run build && npm run test:gates`. Commit-only. Then the **P1→P2 gate** (operator confirms all P1 fixes shipped/deferred incl. the Obj-11 Home.aDNA carry), then **P2** (`mission_ana_p2_closeout_realign`): final AAR + fold C1–C5 into E5 c162–169 + lift the E5 pause + resume at c162.
