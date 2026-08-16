---
type: evidence
created: 2026-08-16
updated: 2026-08-16
status: active
last_edited_by: agent_rosetta
tags: [campaign_haussmann, evidence_packet_b3, automated_sweep]
---

# Evidence Packet B3 — Automated Sweep

**Campaign**: Operation HAUSSMANN · **Repo**: `aDNA.aDNA` · **Site source**: `site/`
**Run date**: 2026-08-16 · **Build**: `npx astro build` (no `npm run build` — prebuild-regeneration avoided per pt19)
**Provenance**: every finding below is `[D]` — directly observed by the automated tool named in its row, this run, on this machine.

## Summary table

| # | Tool | Result | Key numbers | Failure classes | Raw output |
|---|------|--------|-------------|------------------|------------|
| 1 | `npx astro build` | PASS | **203 pages** built in 5.85s, 0 errors, 2 non-fatal Vite warnings (chunk-size + JSON-import-attribute consistency) | — | `sweep/raw/../astro_build` not persisted (console only); warnings quoted below |
| 2 | `npm run test:gates` (full Playwright gate suite, 22 spec files incl. `@audit`) | **PASS** | **371 / 371 passed**, 0 failed, 1.5 min | none | `raw/gates_output.txt` |
| 3 | `npm run audit:p1s3` (P1-S3 audit sweep, standalone) | **PASS** | **118 / 118 passed**, 0 failed, 1.5 min | none (audit tests are findings-not-regressions by design; this run found none) | `raw/audit_output.txt` |
| 4 | Lighthouse 13.4.0 × 5 routes × {mobile, desktop} = 10 runs, **local preview build** | PASS (near-perfect) | perf 97–100, a11y **100/100 all 10**, best-practices **100/100 all 10**, SEO **100/100 all 10**; LCP 0.4–0.5s desktop / 2.0–2.3s mobile; CLS ≤0.001; TBT 0ms | none (perf 97 floor on mobile home is the only sub-100) | `raw/lighthouse/lh_*.json`, digested → `lighthouse_summary.md` |
| 5 | linkinator (internal-link crawl, preview server) | **FAIL** | 412 links scanned, **29 broken** (11 unique targets) | stale `.md`/snake_case reference links (see finding 1) | `raw/linkinator_output.txt` |
| 6 | html-validate 11.4.0 (`dist/**/*.html`, recommended config) | **FAIL** | **964 errors across all 203/203 pages** (every built page has ≥1) | aria-label-misuse 245 · unique-landmark 238 · no-implicit-button-type 203 · valid-id 152 · void-style 105 · no-redundant-role 17 · prefer-native-element 3 · long-title 1 | `raw/htmlvalidate_output.txt` |
| 7 | JSON-LD census (custom script over `dist/**/index.html`) | MIXED | 202 pages scanned (excl. `404.html`); **199/202 have ≥1 JSON-LD block**, 0 parse failures; types: BreadcrumbList 97 · TechArticle 93 · WebPage 79 · CollectionPage 16 · HowTo 10 · WebSite 1; **`Organization` type: 0 instances anywhere on the site** | 3 pages with zero JSON-LD: `/design-system/`, `/privacy/`, `/security/` | `jsonld_census.md` |
| 8a | Security headers — live `curl -sI` on `adna.network` | **DRIFT** | Configured in `site/vercel.json`: CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy. **Live response on `/` and `/get-started/` carries NONE of the four** — only `strict-transport-security` (not in vercel.json; Vercel platform default) is present. Confirmed on both a plain HEAD and a cache-busted GET. | 4/4 configured headers absent from production | `raw/security_headers.txt` |
| 8b | MDN HTTP Observatory v2 API scan | Recorded | **Grade C, score 50**, 7/10 tests passed, 3/10 failed | consistent with 8a | `raw/observatory_scan_initial.json` — see hostname note below |
| 9 | `node scripts/reading_level.mjs` on 6 key pages (extracted `<main>` text from built HTML, script/style/comments stripped) | **FAIL (all 6)** | FKGL: what-is-adna 14.38 · get-started 15.85 · specification 17.91 · community 12.05 · commons 14.53 · network 15.62 — **all 6 exceed the script's own Grade-10 flag threshold** | see methodology caveat below | `reading_level.md` |

Build warnings (verbatim, non-fatal):
```
[WARN] [vite] Module "src/data/home.ts" tried to import "src/data/vaults.json" with "type": "json" attributes, but it was already imported elsewhere with no attributes.
[WARN] [vite] (chunk size) Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
```

### Methodology notes (read before citing numbers downstream)

- **Lighthouse (row 4) ran against the local preview build** (`http://localhost:4321`), not production `adna.network`. It validates the *current working tree*, not what's live. Security-header rows (8a/8b) are the opposite: live-production only. Don't conflate the two.
- **Reading-level extraction (row 9)**: `reading_level.mjs` is a markdown-oriented stripper (frontmatter/code/tables/tags) and 4 of the 6 target pages (what-is-adna, get-started, network, commons) are `.astro` pages with no markdown source in `src/content/` — so text was pulled from the **built HTML's `<main>` element**, with `<script>`/`<style>`/HTML-comment blocks removed first (otherwise inlined JSON-LD payloads and CSS would have been counted as "prose" and wrecked the score). Nav/sidebar/TOC/prev-next link chrome inside `<main>` was **not** removed — a regex can't safely strip nested `<aside>`/`<nav>` blocks without a real DOM parser, and none was available without adding a dependency to the tracked `site/` project. This means avg-words-per-sentence (16.6–34.6) is inflated by unpunctuated nav link runs merging into artificially long "sentences," so the **absolute FKGL numbers read as an upper bound, not a precision measurement** — but the qualitative finding (every key page reads above grade 10) is directionally solid at this margin.
- **MDN Observatory hostname**: the task-supplied host `observatory-api.mdn.mozilla.org` does not resolve (NXDOMAIN, confirmed against a working general network path). The correct current v2 host is `observatory-api.mdn.mozilla.net` (`.net`, not `.org`) — confirmed via the [mdn-http-observatory README](https://github.com/mdn/mdn-http-observatory/blob/main/README.md). Used the corrected host for the scan in row 8b. The v2 API's POST `/api/v2/scan` is summary-only (grade/score/pass-fail counts) — there is no documented GET endpoint for the per-test breakdown; that detail lives only at the human-facing `details_url` (`https://developer.mozilla.org/en-US/observatory/analyze?host=adna.network`), which is not fetched here.
- **Gate suite (row 2) already includes the audit sweep**: `test:gates` runs all 22 spec files with no `@audit` exclusion (that exclusion is what `test:gates:fast` is for), so the 118 audit-sweep assertions are counted once inside the 371 and then re-run standalone in row 3 per the task's explicit two-step instruction — the two numbers overlap by design, not a discrepancy.

## Top 10 findings

1. **[D] 29 broken internal links, concentrated in `/reference/*` pages** — `linkinator` crawl of the local build found `/reference/reading-guide`, `/reference/agent-first-guide`, `/reference/migration-guide`, `/reference/design-rationale`, and `/glossary/glossary-content-as-code` all link to a stale naming scheme that 404s: `reference/adna_standard.md`, `reference/adna_design.md`, `reference/migration_guide.md`, `reference/agent_first_guide.md`, `reference/projects_folder_pattern.md`, `reference/adna_bridge_patterns.md`, `reference/01_adna_standard.md`, `how/skills/AGENTS.md`, `patterns/content-as-code`, `reference/template_bare/`, `/README.md`. Reads like a leftover snake_case/`.md`-suffixed link convention from before these pages got kebab-case slugs — several pages (e.g. `/reference/migration-guide`) link to what looks like their own pre-migration filename. 11 unique broken targets, 29 link instances. `raw/linkinator_output.txt`.
2. **[D] Zero `Organization` JSON-LD anywhere on the site.** The audit asked to check whether the `Organization` block has `sameAs` — there is no `Organization` block to check, on any of the 202 pages scanned. This is a structured-data gap, not a sameAs-specific one: no page identifies the org to search engines/agents via schema.org. `jsonld_census.md`.
3. **[D] Live production is missing 4 of its 5 intended security headers.** `site/vercel.json` configures CSP, X-Frame-Options, X-Content-Type-Options, and Referrer-Policy for every route. The live site (`adna.network/` and `/get-started/`, both HEAD and cache-busted GET) sends **none** of them — only HSTS, which isn't even in vercel.json (Vercel's own default for a verified custom domain). Root cause not established here (candidates: stale deployment predating effective header wiring under `output: 'static'` + `@astrojs/vercel`, or an edge-cache layer serving a pre-header-config artifact) — flagging as drift, not diagnosing further. `raw/security_headers.txt`.
4. **[D] MDN HTTP Observatory grades the live site C / 50, 3 of 10 tests failing** — consistent with finding 3. `raw/observatory_scan_initial.json`.
5. **[D] 964 html-validate errors, present on all 203/203 built pages** — no page is clean. Top classes: `aria-label-misuse` (245, "aria-label" used where the rule says it shouldn't be), `unique-landmark` (238, landmark regions without a unique accessible name), `no-implicit-button-type` (203 — essentially one per page, smells like a single shared header/nav component missing `type="button"`), `valid-id` (152 — numbered-heading anchor IDs like `id="1-create-in-your-vault"` that start with a digit), `void-style` (105 — `<hr/>` self-closing XML syntax instead of HTML5 `<hr>`). This is in tension with finding 6 (clean axe/Lighthouse a11y) — different rulesets catch different things; html-validate is markup-correctness, axe/Lighthouse is WCAG-rule-focused, and they disagree here. `raw/htmlvalidate_output.txt`.
6. **[D] Automated accessibility scores are clean everywhere it was checked.** Full gate suite 371/371, standalone audit 118/118 (axe scans in both color modes across every previously-unscored route class), and Lighthouse a11y = 100/100 on all 10 local runs. Read alongside finding 5: the site passes every axe-based check it's been given, but fails hundreds of stricter markup/ARIA-correctness lint rules. Both are real; they measure different things.
7. **[D] Lighthouse performance is excellent on the local build** — 97–100 across the board, LCP 0.4–0.5s desktop / 2.0–2.3s mobile, CLS effectively 0, TBT 0ms, for all 5 sampled routes (`/`, `/get-started`, `/learn/what-is-adna`, `/vaults`, `/vaults/graph`) in both form factors. No perf budget concern surfaced by this sweep. `lighthouse_summary.md`.
8. **[D] All 6 sampled key pages exceed grade-10 reading level** (FKGL 12.05–17.91; specification intro is highest at 17.91, community page lowest at 12.05) — see the methodology caveat above on why these read as an upper bound, not a precise number. Directionally, every page checked is denser than the script's own grade-10 flag threshold. `reading_level.md`.
9. **[D] 3 pages ship zero JSON-LD**: `/design-system/`, `/privacy/`, `/security/`. All other template classes (vault-detail ×74, learn ×22, reference ×11, tutorial ×10, patterns ×9, community ×5, plus singletons) have 100% coverage — these 3 are the only gaps, all in the "other" URL-shape bucket (meta/legal pages). `jsonld_census.md`.
10. **[D] Build is clean and fast**: 203 pages in 5.85s, zero build errors. Only two non-fatal Vite warnings (a JSON import-attribute inconsistency between two modules importing `vaults.json` differently, and a chunk-size advisory). Neither blocks or degrades the shipped output. Worth a cheap fix (align the import attributes) but not a finding of consequence.

## File index

```
sweep/
├── sweep_summary.md          (this file)
├── jsonld_census.md
├── lighthouse_summary.md
├── reading_level.md
└── raw/                      (gitignored — evidence/.gitignore: sweep/raw/)
    ├── gates_output.txt
    ├── audit_output.txt
    ├── htmlvalidate_output.txt
    ├── linkinator_output.txt
    ├── security_headers.txt
    ├── observatory_scan_initial.json
    ├── preview_server.log
    └── lighthouse/
        ├── lh_home_{mobile,desktop}.json
        ├── lh_get-started_{mobile,desktop}.json
        ├── lh_what-is-adna_{mobile,desktop}.json
        ├── lh_vaults_{mobile,desktop}.json
        └── lh_vaults-graph_{mobile,desktop}.json
```
