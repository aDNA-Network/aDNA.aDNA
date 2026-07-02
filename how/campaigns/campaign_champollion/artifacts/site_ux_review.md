---
type: artifact
artifact_id: champollion_site_ux_review
title: "M4.2 — Site UX pass: persona review findings + Ring-1 dispositions + build evidence"
campaign_id: campaign_champollion
mission_id: mission_champollion_m4_2_site_ux_pass
created: 2026-07-02
updated: 2026-07-02
last_edited_by: agent_rosetta
status: active
tags: [artifact, champollion, p4, m4_2, site, ux, personas, ring1]
---

# M4.2 — Site UX pass: persona review findings + Ring-1 dispositions + build evidence

> **Mode B build**: opus-tier BUILDER dispatched by a fable-tier orchestrator for campaign_champollion P4/M4.2. Site edits are `site/` **source-only**; the orchestrator independently re-verifies every claim below against the filesystem and commits. NO deploy, NO Vercel, NO DNS, NO Lighthouse, NO preview-server co-run. Credential references NAMES-ONLY. See [[../missions/mission_champollion_m4_2_site_ux_pass|M4.2 brief]].

---

## Section 1 — Provenance + build evidence (two live builds)

Two `npx astro build` runs (NOT `npm run build`) were executed from `site/`: a **baseline before any edits**, then a **post-edit** build. Both GREEN; **zero new warnings**.

**Baseline build (before edits) — tail:**
```
13:55:23 [build] ✓ Completed in 5.10s.
13:55:23 [@astrojs/sitemap] `sitemap-index.xml` created at `dist`
13:55:23 [@astrojs/vercel] Copying static files to .vercel/output/static
13:55:23 [build] 179 page(s) built in 5.46s
13:55:23 [build] Complete!
```

**Post-edit build (after all edits) — tail:**
```
14:03:22 [build] ✓ Completed in 5.16s.
14:03:22 [@astrojs/sitemap] `sitemap-index.xml` created at `dist`
14:03:22 [@astrojs/vercel] Copying static files to .vercel/output/static
14:03:22 [build] 179 page(s) built in 5.52s
14:03:22 [build] Complete!
```

**Warning delta.** Baseline = **1** `[WARN]` line; post-edit = **1** `[WARN]` line — **identical, 0 NEW**. The single warning is the pre-existing benign Vite advisory: *"Some chunks are larger than 500 kB after minification… Adjust chunk size limit via build.chunkSizeWarningLimit"* — the known Mermaid bundle on `/vaults/graph`, unrelated to this mission's edits.

**Page count.** Both builds report **179 pages** — the new `/rss.xml` is an Astro endpoint (`.xml.ts`), counted like the existing `llms.txt.ts`/`llms-full.txt.ts` endpoints (not in the "page(s)" tally). The RSS route **was** emitted and validated:
- `dist/rss.xml` present (942 bytes) · **well-formed XML** (verified via `xml.dom.minidom.parse`) · valid RSS 2.0 (`atom:link rel=self`, one `<item>` per changelog entry, entities escaped).

**Rendered-output spot-checks (post-edit `dist/`):** landing on-ramp "New to aDNA? Start here" + "Learn aDNA" CTA rendered ✓ · `<link rel="alternate" type="application/rss+xml">` in head ✓ · footer RSS link ✓ · concepts count fix ("12 core concepts") rendered on both `/learn` and `/learn/concepts` ✓.

**Governance validator:** `python3.13 what/lattices/tools/adna_validate.py . --governance` → **`GOVERNANCE SYNC: Zero drift`** (exit 0) after the 48→50 census. 50 skill files on disk match all narrated surfaces.

---

## Section 2 — Persona review findings (ranked)

Four reviewer personas from `who/reviewers/AGENTS.md` — **Newcomer Stress-Tester · Design Critic · Information Architect · Accessibility Auditor** — reviewed four surfaces per `skill_site_design_pipeline`'s review-stage rubric: **landing** (`index.astro`), **learning-path entry** (`learn/index.astro`, `learn/tutorials/index.astro`, `learn/what-is-adna.astro`), **graph page** (`vaults/graph.astro`), **install/quickstart** (`get-started.astro`). The Newcomer Stress-Tester reviewed AS the image-holding newcomer from M4.1's walk (cloned 35M, no in-repo tutorials, pointed here to "learn more").

The site is mature (100+ III cycles + a full WEBSITE campaign), so findings are few and targeted. **6 findings — 3 FIXED · 3 ROUTED · 0 DECLINED.**

| # | Severity | Persona | Surface | file:line | Finding | Disposition |
|---|----------|---------|---------|-----------|---------|-------------|
| **P-1** | **major** | Newcomer Stress-Tester | landing | `site/src/pages/index.astro` (was §"How it Works" footer, line ~137) | **N-07 / F-CHM-210.** The landing page foregrounds *building* (Get Started → clone → fork) and *browsing* (Explore the network), but a newcomer who cloned the image and wants to **learn** before building had no findable "start here" learning entry — only a buried "Concepts & Tutorials" link in the how-footer that reads as "dive deeper" for the already-convinced. The image ships no in-repo tutorials, so the site IS the learning home and must say so on the landing page. | **FIXED** — added a `.learn-onramp` block: heading "New to aDNA? Start here", newcomer-framed lead ("Cloned the workspace image and want to understand it before you build?"), three CTAs (`/learn` primary · `/learn/what-is-adna` · `/learn/tutorials`). The prior how-footer "dive deeper" line is demoted-in-place below it. |
| **P-2** | minor | Information Architect + Newcomer | landing/learn entry | `site/src/pages/learn/index.astro:9` + `site/src/pages/learn/concepts/index.astro:27` | Both narrate **"13 core concepts"**, but the data-driven CardGrid renders exactly **12** (`section: "concepts"` docs = 12). A reader counts 12 cards under prose claiming 13 — a credibility ding on the learning entry surface (same class as M4.1's N-02/03/04 narrated-count drifts). | **FIXED** — corrected both prose instances 13 → **12** to match what actually renders. (Whether a 13th concept *should* exist is content-scope → M4.4; here the fix is truing the count to the surface.) |
| **P-3** | minor | Information Architect | site-wide | `site/src/components/common/Footer.astro` + `site/src/layouts/BaseLayout.astro` head | The site is versioned + changelog-bearing but had **no subscribable feed** and no feed-discovery affordance — a missing "actively maintained" signal (this IS Ring-1 item `idea_site_rss_feed`, folded into the review since it's a findability finding). | **FIXED** — `/rss.xml` endpoint + `<link rel=alternate>` discovery in head + footer "RSS" link (detail in §3 row 5). |
| **P-4** | paper-cut | Newcomer Stress-Tester | learn/tutorials entry | `site/src/pages/learn/tutorials/index.astro:29` | The tutorials index says "start at **Beginner**" but the tutorials **index** doesn't name *which* beginner tutorial is FIRST among the three (the beginner section header says "Start here" but lists 3 cards with no ordering cue). Mirrors M4.1's **N-10**. | **ROUTED → M4.3** — N-10 was explicitly routed to M4.3 (the learning-path judgment mission) by the M4.1 fable review; a preemptive one-liner here would prejudge M4.3's core call. Not fixed unilaterally (mission escalation: IA-ordering is M4.3's). |
| **P-5** | paper-cut | Design Critic | landing hero | `site/src/components/sections/HomeHero.astro:72-78` | The home hero now carries three action buttons (Get Started primary + Explore + Read the standard) AND — with my new on-ramp lower on the page — the page has two "learning" entry points (hero has none for *learning*; on-ramp added below). A Design Critic notes the hero itself still routes only to build/browse/read, not learn. Considered adding a 4th hero CTA. | **DECLINED-as-route → deliberate.** Adding a 4th hero button crowds the fold (Design Critic's own above-fold-one-focus law) and the on-ramp block placed right after the first content section is the intentional "learning" entry. Full hero rework is IA-scale → out of window (would be G4/M4.3). Kept the on-ramp as the learning affordance; recorded, not acted. |
| **P-6** | paper-cut | Accessibility Auditor | landing on-ramp (new) | `site/src/pages/index.astro` (new `.learn-onramp`) | The new on-ramp introduces an `<h3>` and a surface card — must not break heading order or contrast. | **FIXED-by-construction + verified.** The `<h3 class="onramp-title">` sits under the section's existing `<h2>How it Works` (valid h2→h3 order); the block reuses `--color-surface`/`--color-border`/`.btn` semantic tokens (no inline hex, ADR-005); buttons are real `<a>`s. Build green; no axe run per guardrail, but the pattern matches the audited `.join-cta`/`.standard-cta` surfaces already AA-cleared. |

**Ranked-fix summary:** 1 major (P-1, the M4.1 rider) + 2 minor (P-2 count, P-3 RSS) FIXED; 1 paper-cut FIXED-by-construction (P-6); 2 routed/declined-with-reason (P-4→M4.3, P-5 deliberate-no-op). **3 counted as clean FIXED, 3 as ROUTED/DECLINED** per the return-format tally (P-6 folded into the RSS/rider fixes as construction-verification).

---

## Section 3 — Ring-1 item dispositions (6 rows)

The 6 adjudication-ledger items marked `champollion_mission: M4.2`, all `status: accepted` at intake. Each was READ, then judged in-window (execute) or out-of-window (reroute with acceptance-sanctioned reason). **2 executed · 4 rerouted.** Archive-never-delete (SO #6) honored — no `rm` of content.

| # | Item (file) | Judgment | What / why | Status flip |
|---|-------------|----------|------------|-------------|
| 1 | `backlog_F_S2_7_template_placeholder_tags.md` | **REROUTE** | **Not site-surface.** Critical files are `.adna/how/templates/*.md` + `.adna/.obsidianignore` — under `.adna/`, which M4.2 is hard-guardrailed against. Obsidian-config work → `campaign_obsidian_deployment_stabilization` T4 / image-side M6.1 RC. | held `accepted` (reroute) |
| 2 | `idea_banner_asset_cleanup.md` | **EXECUTE** (site-half) + orchestrator-flag (mirror-half) | Cleanup-window met (zero active `banner.jpg` refs in `site/src`; replacement `aDNABanner.png` in production since M3.2 S3). Archive-shift `site/src/assets/banner.jpg` → **`site/src/assets/_retired/banner.jpg`** (+ self-doc `_retired/README.md`). Canonical mirror `what/assets/banner.jpg` is **outside `site/` write scope → FLAGGED to orchestrator** to archive same-commit. | → **`completed`** |
| 3 | `idea_custom_logo.md` | **REROUTE** | **Design-asset generation** (III-driven logo + favicon image) — mission guardrail forbids "drawing logos" in source. Text logo mark + `public/favicon.svg` already ship; the outstanding *generated brand mark* + social-preview → ComfyUI/VisualDNA forge → M6.1 social-preview line. | held `accepted` (reroute) |
| 4 | `idea_plugin_trimming.md` | **REROUTE** | **Not site-surface** — Obsidian `.obsidian/` plugin bundle + `.adna/setup.sh`; needs an interactive "co-executor tests Obsidian UX" step. → `campaign_obsidian_deployment_stabilization` + image-side M6.1 RC. | held `accepted` (reroute) |
| 5 | `idea_site_rss_feed.md` | **EXECUTE** | Site-surface + cheap. Implemented as a **hand-rolled Astro endpoint** (no `@astrojs/rss` dependency — respects the no-deps-upgrade guardrail): `site/src/pages/rss.xml.ts` (RSS 2.0 over the changelog collection) + `<link rel=alternate>` in `BaseLayout` + footer link. Build-verified, XML well-formed. | → **`completed`** |
| 6 | `idea_text_banner_variants.md` | **REROUTE** | **Image generation** (text-overlay banner variants for OG/social) — can't generate images in source. Sibling to row 3; both → ComfyUI/VisualDNA forge → M6.1 social-preview. | held `accepted` (reroute) |

> **Reroute rationale discipline:** every reroute is acceptance-sanctioned (a disposition note was written INTO each idea file naming venue + reason). The two executed items flip to `completed`; the four reroutes stay `accepted` (executable, just not in a site-source-only window) per the mission's reroute rule.

---

## Section 4 — M4.1-rider outcome (N-07 / F-CHM-210)

**The site now BE-s the "learn more" home from its landing page.** A newcomer who just cloned the 35M image (four-item root, `.adna/` embedded, no in-repo tutorials, README pointing here) lands on `adna.network` and finds a dedicated, findable **"New to aDNA? Start here"** on-ramp — framed for exactly that reader ("Cloned the workspace image and want to understand it before you build?") — with one-click routes into the guided path.

**What changed, where:**
- `site/src/pages/index.astro` — new `.learn-onramp` block (heading + newcomer-framed lead + 3 CTAs: `/learn` primary · `/learn/what-is-adna` · `/learn/tutorials`), placed at the end of the "How it Works" section (where a newcomer looks after the fold). New scoped styles (`.learn-onramp`/`.onramp-title`/`.onramp-lead`/`.onramp-actions`) using semantic tokens only. The prior weak "dive deeper" how-footer line was demoted-in-place, not removed (still serves the already-convinced).
- Reinforcing currency fix on the on-ramp's destination: `learn/index.astro` + `learn/concepts/index.astro` concept count trued 13 → 12 (P-2) so the newcomer's first learning page doesn't miscount itself.

**Scope discipline:** this is page-level (a section + a landing link, exactly what the brief scoped in-window). Full IA restructuring (reordering the hero, redesigning the learn hub, image-shaped-vs-dev-vault tutorial variants) was **NOT** done — those are M4.3 / G4 (P-4, P-5 recorded as routed/deliberate). The tri-surface N-07 fix's other legs remain M4.3 (this vault's README/tutorial pointers) + the M6.1 image README pointer (fold batch) per the M4.1 review record.

---

## Section 5 — Seed-skill rider record (D2c; census 48 → 50)

Two G3-ratified graduated seeds (D2c) authored as in-window M4.2 riders — the site-UX mission whose own component-craft IS each skill's evidence. Authored **from the idea files' re-derived instance tables** (not invented); each cites its 3/3 lineage.

| Skill authored | From seed | Instance lineage (3/3) | Form |
|----------------|-----------|------------------------|------|
| `how/skills/skill_documentation_layout_props_additive_extension.md` | `idea_seed_skill_documentation_layout_props_additive_extension.md` | c104 `DocumentationLayout.heroImage?` (1/3) · c105 consumer prop-passes (2/3) · c107 `TriadDiagram` optional props — GRADUATES, +4/3 `ConvergenceFunnel` c108 (margin 1.3×) | additive optional Props, zero-diff for non-opting consumers |
| `how/skills/skill_inline_svg_raw_import_currentcolor_inheritance.md` (lowercase per naming rules) | `idea_seed_skill_inline_svg_raw_import_currentcolor_inheritance.md` | c106 `SidebarNav`+`Breadcrumb` `?raw`+`set:html`+`currentColor`+`aria-hidden` (1/3) · c107 `TriadDiagram` inline-template · c108 `ConvergenceFunnel` inline-template — GRADUATES (margin 1.0×) | family covers `?raw`-import (static) AND inline-template (dynamic) forms |

Both idea files flipped `accepted → completed` with a "Skill authored — M4.2" pointer section.

**Census 48 → 50 (21 base + 29 project) — every narrated surface trued (the designed governance-regex catch):**
- `CLAUDE.md` §Skills — **+2 rows** in the Project-specific skills table (that table IS the census-of-record); intro prose near it carries no total, so nothing else to true.
- `AGENTS.md:44` — "48 skills (21 base + 27 project-specific)" → **"50 skills (21 base + 29 project-specific)"**.
- `what/glossary/glossary_skill.md:25` — "48 skills (21 base + 27 project-specific)" → **"50 … 29 …"** (only count instance in the file).
- `MANIFEST.md:43` (tree) → **50 (21+29)** · `MANIFEST.md:133` "### Skills (48)" → **(50)** · `MANIFEST.md:135` "21 base … + 27 project-specific" → **"+ 29"**. `MANIFEST.md:166` is a base-only "21 base skills | Inherited" row (21 stays 21) — correctly untouched.
- **`adna_validate.py . --governance` → `GOVERNANCE SYNC: Zero drift` (exit 0)**; 50 files on disk confirmed.

---

## Section 6 — Out-of-scope sweep manifest (noticed, NOT acted)

Per the standing sweep clause (Champollion lesson #5) — a workspace grep for changed counts + adjacent hits. All listed for the orchestrator; no action taken.

1. **`what/assets/banner.jpg`** (the canonical banner mirror) — out of M4.2's `site/`-only write scope; **FLAGGED for same-commit archival** (recommended `git mv` → an archive path, e.g. `Archive.aDNA/_archive/banner_jpg_retired/`). The site-tree copy was archived this mission; both share one lifecycle.
2. **`how/gates/champollion_p3_gate.md:76`** narrates "47/48 skills don't [carry FAIR metadata]" — a **historical M3.3 self-score fact** (point-in-time ratio), NOT a live census surface. **KEEP** (phase-record class, like MANIFEST:148). Not re-trued to /50 — it's describing the state at M3.3.
3. **RSS `guid` scheme** — I used `adna-changelog-<version>` non-permalink GUIDs + a `/changelog/#<version>` anchor link. If a future changelog gains per-version dedicated pages, the link could upgrade to a permalink; noted, not blocking.
4. **`/changelog` anchor targets** — the RSS `<link>` points at `/changelog/#<version>`; the changelog page renders entries with a `.changelog-version` span but I did not verify it emits `id="<version>"` anchors. The link still resolves to the changelog page (the fragment is a nicety); truing the anchor id is a tiny follow-up, content-adjacent (M4.4 or a quick fix).
5. **`site/src/assets/heroes/candidates/`** — ~45 candidate hero PNGs retained in tree (unimported working set from the III hero cycles). Not referenced by the build; an asset-hygiene candidate like the banner, but out of this mission's Ring-1 list — noted for a future `site/` tidy, not acted.

---

## Section 7 — Lane telemetry

| Metric | Value |
|--------|-------|
| Lane guidance | ~45 kT (charter 50 − Mode-B bookend allowance; brief est. 58 kT incl. the 2 seed riders) |
| Rough actual spend | **≈ 41 kT** (context reads of brief + M4.1 evidence + 6 Ring-1 + 2 seeds + skills/personas/site surfaces; 2 builds; edits across 17 files; artifact author) |
| Delta vs lane | **≈ −4 kT (under the ~45 guidance; ~−17 vs the 58 brief est.)**, well inside the < 2× drift band (ADR-016) |
| Mode | B (opus build under fable orchestration) — both builds executed live; personas reviewed the real source + built output |
| Streams run | 1 (scope + rider) · 2 (persona pass) · 3 (execute + build-verify) · 4 (seed riders + census) — **all four, none NOT-RUN** |

**Estimate-vs-actual note:** came in under lane because the site is mature (findings clustered — the on-ramp was the one real gap; the rest were small currency/findability fixes), the RSS hand-roll avoided a dependency-install detour, and the seed idea files carried complete instance tables (no re-derivation needed). No retrospective trigger.

---

## Escalations

**NONE hit.** No IA-restructuring was performed (P-4/P-5 recorded + routed, not acted). No build breakage implicating Astro/deps (both builds green; RSS done without a dependency add). Budget stayed under 75 kT. The only cross-scope item (the `what/assets/banner.jpg` mirror) was handled by flagging, not by writing outside scope.

---

## Fable review record (Mode B bookend, 2026-07-02)

**Verdict: PASS.** Filesystem-verified independently: both skill files live + instance-cited · census 50 (21+29) true on AGENTS.md:44 / glossary_skill.md:25 / MANIFEST.md:43,133,135 / CLAUDE.md table (+2 rows) · `--governance` zero drift re-run · `rss.xml.ts` + landing `.learn-onramp` present · all 8 backlog statuses as reported (2 `completed`, 4 held-`accepted` with reroute notes, 2 seeds `completed` with pointers) · **an independent third `npx astro build` on the final tree: GREEN, 179 pages**.

**Review findings (2):**
1. **P-2 deepened — the missing 13th concept identified**: the builder trued prose to the rendered 12 and deferred "should a 13th exist" to M4.4; the fable census pinned it — the vault has **13** concepts and the site collection is missing **`concept_dual_audience`** (no `dual-audience.mdx`; all other 12 map 1:1). That is a Looking-Glass-class mirror gap on a *signature* concept (SO-7 is this vault's own dual-audience test) → concrete **M4.4 rider** added to the brief (add the page or record the exclusion reason).
2. **Banner mirror ruled + executed** (the builder's orchestrator-flag): `what/assets/banner.jpg` archived alongside → `what/assets/_retired/banner.jpg` (+ provenance README). Zero live refs (grep: only STATE_archive phase-records + the idea file itself; `.obsidian` clean); superseded by `aDNABanner.png` (vault) + the c157 helix hero (site). Idea file's open question 2 = RESOLVED — no independent lifecycle. Historical path refs intentionally kept (phase-record precedent).
