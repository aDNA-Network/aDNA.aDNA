---
type: exemplar_site
site: crates.io
functional_role: registry at 100k+ scale
tonal_revolutionary: 30
created: 2026-08-16
updated: 2026-08-16
inspected: 2026-08-16
inspected_lens: craft-reference (Haussmann B.7 dossier)
added_by: campaign_haussmann
persona: rosetta
status: active
last_edited_by: agent_rosetta
hero_word_count: ~6 [I] (registry-as-hero; stats + search)
section_count: 7 (per the summary API data model)
above_fold_focus: search + registry stats
nav_model: slim utility (browse/docs/account) [I]
density_band: dense (list-forward)
demo_as_proof: live totals (317,613 crates · 401B downloads) + per-crate download counts
needs_operator_capture: [rendered_ui_visuals]
tags: [exemplar_site, cratesio, registry, facets, quality_signals, haussmann_b11]
---

# site_cratesio — crates.io

> **The registry at six-digit scale** — 317,613 crates / 401B downloads kept navigable by facets + freshness + per-item quality signals. **Method note:** the site is an Ember SPA whose HTML shell carries no content — inspected via its **public JSON API** (`/api/v1/summary`, `/api/v1/crates/serde`), which *is* the homepage/item data model; visual judgments are [I] (outside the 5-capture budget).

## Captured (rubric)

- **Homepage = 6 data sections + stats** (the summary API's exact shape): **new crates · most downloaded · most recently downloaded · just updated · popular keywords · popular categories** — three freshness lenses and one all-time lens on the same corpus, plus headline totals.
- **Facets:** full-text search; **categories with counts** (Development tools 30,414 · CLI utilities 29,174 · …); **keywords** (cli, ai, async, tui, agent…) — a coarse curated taxonomy plus a folksonomy.
- **Per-item quality signals (crate page, e.g. serde):** all-time downloads (1.27B) **and** recent_downloads (268M) · max stable version · num_versions (316) · **license (MIT OR Apache-2.0)** · crate_size · rust_version/edition compat · docs/repo/homepage links · categories + keywords.
- **Named humans:** `published_by` = **name + GitHub avatar + profile** (David Tolnay) on every version — maintainer identity is a first-class trust signal, plus ownership/team lists.
- **Machine surface:** the JSON API is the same dataset the UI renders — registry-as-data, like [[site_python_peps]]'s twin.
- **The failure mode:** the HTML shell is *empty without JS* — invisible to no-JS readers, crawlers, and WebFetch-class agents.

## Lift for aDNA

- **The one thing to steal: the dual-clock signal — every item shows an all-time metric AND a recency metric.** For aDNA's vault/graph registry: total federation refs *and* last-updated/recent activity; freshness sections (new · just updated · trending) on the registry home. Aliveness at any scale without claiming scale.
- **License + version + maintainer-identity on every row** — the minimum quality-signal triple for registry cards (extends [[site_replicate]]'s executable-proven-social).
- **Category counts as honest inventory** — counts describe the shelf, not the applause.

## Avoid

- **The SPA shell** — content that requires JS to *exist* is the anti-pattern for an agent-native property; aDNA renders registry content statically with the JSON twin alongside (the exact opposite seam).
- Utility-only chrome: crates.io spends nothing on register/voice; aDNA's registry still carries the house register.

## Related

- [[_reference_set]] · [[site_huggingface]] (registry-as-hero at 2M scale) · [[site_replicate]] (live-affordance entries) · [[site_python_peps]] (machine-readable twin)
