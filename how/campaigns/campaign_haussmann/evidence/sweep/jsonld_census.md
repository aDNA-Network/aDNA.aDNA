# JSON-LD Census

Generated: 2026-09-09T00:17:36.974Z

> **Instrument**: `scripts/jsonld_census.mjs` (red-proofed; `--self-test` covers the
> parsers and all four guards). Regenerate with `npx astro build` then
> `node scripts/jsonld_census.mjs`.
>
> **Surface** (convention 18): `~/aDNA/aDNA.aDNA/site/dist/**/*.html` — the BUILT OUTPUT.
> Git `HEAD` = `7666184`; last commit touching `site/` = `a2ad53b`.
> `site/` has 1 uncommitted file(s), NAMED so you can judge
> whether the build corresponds to a commit rather than take a boolean for it:
> - `site/scripts/deploy_log.txt`
>
> JSON-LD is a property of the document, so HTML is the surface the claim is about —
> not the `.md` twin, which is the correct surface only for reader-facing claims.
>
> **Denominator**: `404.html` is EXCLUDED. `dist/` holds one more
> `.html` file than `astro build` reports pages, and that file is the 404. Stated rather
> than left to whatever the glob returned.

- Total pages scanned: 229
- Pages WITH >=1 JSON-LD block: 228
- Pages WITHOUT any JSON-LD block: 1
- Total JSON-LD blocks found: 228
- Parse failures: 0

## Change since the previous census

Previous run: 2026-08-16T17:01:00.569Z. **Derived by parsing the report this run
replaced**, not typed — so the delta stays true after every future regeneration.

| | was → now |
|---|---|
| Pages scanned | 202 → 229 (+27) |
| With JSON-LD | 199 → 228 (+29) |
| Without | 3 → 1 (-2) |
| Blocks | 199 → 228 (+29) |
| Parse failures | 0 → 0 (unchanged) |

## @type census

| @type | count |
|---|---|
| BreadcrumbList | 123 |
| TechArticle | 113 |
| WebPage | 85 |
| CollectionPage | 17 |
| HowTo | 12 |
| Dataset | 1 |
| WebSite | 1 |

## Organization sameAs check

- Organization blocks found: 0
- Organization blocks MISSING sameAs (or empty): 0

## Parse failures

None.

## Template coverage (by URL-shape classification)

| template class | pages | pages w/ JSON-LD | pages missing |
|---|---|---|---|
| vault-detail | 74 | 74 | 0 |
| other | 58 | 57 | 1 |
| reference | 33 | 33 | 0 |
| learn | 25 | 25 | 0 |
| tutorial | 11 | 11 | 0 |
| patterns | 9 | 9 | 0 |
| community | 8 | 8 | 0 |
| get-started | 6 | 6 | 0 |
| commons | 1 | 1 | 0 |
| home | 1 | 1 | 0 |
| network | 1 | 1 | 0 |
| vaults-graph | 1 | 1 | 0 |
| vaults-index | 1 | 1 | 0 |

> **Class vocabulary moved since the committed report** (parsed from it, never
> transcribed). New classes are reported, not thrown on — `other` is a designed
> catch-all, so a throw would make every new top-level route a false failure.
> GONE: researchers

## Sample of pages WITHOUT any JSON-LD (first 40)

- install.html
