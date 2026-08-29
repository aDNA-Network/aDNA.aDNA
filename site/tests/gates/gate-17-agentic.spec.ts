/**
 * Gate 17 — Agentic readiness (WEBSITE TOOLING-PROMOTION gates **G10** + **G11**, plus
 * **G12–G15** added at HAUSSMANN P3.1 for the ADR-056 agentic-surface contract)
 *
 *   - G10 (llms.txt presence + freshness): /llms.txt is served, is text/plain, and carries the
 *     canonical install one-liner + current standard version + canonical repo + publisher. Because
 *     the endpoint composes from the single-source data (install_truth.json / standard.ts /
 *     canonical.ts / vaults.json), presence of these facts == freshness (they can't drift).
 *   - G11 (no-JS reachability): the flagship topology (/vaults/graph) is reachable WITHOUT
 *     JavaScript — the server-rendered keyboard node-twin lists every vault as a real anchor.
 *   - G12 (markdown twins resolve): every path in twin_manifest.json is served as markdown and
 *     front-loads the llms.txt pointer block.
 *   - G13 (twins are discoverable): the string "llms" reaches the rendered HTML, and every page
 *     with a twin advertises it via <link rel=alternate type=text/markdown>.
 *   - G14 (llms-full.txt is a corpus): substantial, sectioned, and free of the corpus marker.
 *   - G15 (negotiation is wired): structural assertions on the built Vercel route table.
 *
 * All are permanent (untagged) gates — they run in `test:gates` and `test:gates:fast`.
 *
 * WHAT G12–G15 CAN AND CANNOT SEE, stated rather than implied. The gate suite runs against
 * `astro preview`, which serves `dist/` and knows nothing about `.vercel/output/config.json`. So
 * twin resolution, the pointer block, discoverability and the corpus are all genuinely exercised
 * here, but CONTENT NEGOTIATION IS NOT — no local server applies the `has: accept` routes. G15
 * therefore asserts the route table structurally and says so; the live behaviour (a markdown body
 * and a DIFFERENT ETag on the HTML URL) is proven by the machine-eye re-probe after deploy, which
 * is where item 4 was measured in the first place. A gate that claimed to test negotiation here
 * would pass against a site that does not negotiate — the failure mode this campaign has already
 * been bitten by once (a probe that PASSED two checks against a site without the feature).
 */
import { test, expect } from '@playwright/test';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const manifest: { twins: string[] } = JSON.parse(
  readFileSync(join(process.cwd(), 'src', 'data', 'twin_manifest.json'), 'utf8'),
);

/** Fixtures derive from the build snapshot, never from a hand-typed route list (KW-8 / FR-K). */
const TWINS = manifest.twins;

/** A representative slice for the per-path tests — the full set is asserted in bulk in G12. */
const SAMPLE = [
  '/', '/get-started', '/about', '/network', '/glossary', '/vaults',
  '/learn/what-is-adna', '/reference/specification',
  '/learn/concepts/triad', '/vaults/iii',
];

test.describe('G10 — llms.txt agentic index', () => {
  for (const path of ['/llms.txt', '/llms-full.txt']) {
    test(`G10: ${path} served as text/plain`, async ({ request }) => {
      const res = await request.get(path);
      expect(res.status(), `${path} status`).toBe(200);
      expect(res.headers()['content-type'] ?? '', `${path} content-type`).toContain('text/plain');
      const body = await res.text();
      expect(body, `${path} starts with an H1`).toMatch(/^# aDNA/);
      // Canonical facts must be present (single-sourced → presence == freshness).
      expect(body, `${path}: canonical install one-liner`).toContain(
        'git clone https://github.com/aDNA-Network/aDNA.git ~/aDNA && cd ~/aDNA && claude',
      );
      expect(body, `${path}: canonical repo`).toContain('https://github.com/aDNA-Network/aDNA');
      expect(body, `${path}: standard version`).toMatch(/Version:\s*v\d+\.\d+/);
      expect(body, `${path}: publisher`).toContain('Published by: aDNA Network');

      // No drifted/legacy identity may leak into the agent index — asserted against the AUTHORED
      // HEADER only, not the inlined page bodies.
      //
      // Rescoped at P3.1, and the reason matters: these two assertions were written when
      // llms-full.txt was a 2 KB index, where "the file" and "what this endpoint authors" were the
      // same thing. Now that it inlines all 221 pages they are not, and both strings appear
      // LEGITIMATELY in the corpus — `/canonical-properties` lists `aDNA-Network/aDNA.aDNA` as a
      // genuine canonical repository (that is the page's entire job), and `LatticeProtocol.aDNA`
      // is a real vault in the registry. Left unscoped, this gate would have demanded the site
      // stop naming things it correctly names.
      //
      // The page bodies are not going ungoverned: each is guarded on its own page by gate-27
      // (leak-lint) and gate-16 (public meta). This gate owns the header it authors.
      const header = body.split(/^## https:\/\/adna\.network/m)[0];
      expect(header, `${path}: no legacy publisher in the authored header`).not.toContain('LatticeProtocol');
      expect(header, `${path}: no dead dev-vault repo in the authored header`).not.toContain('aDNA-Network/aDNA.aDNA');
      // P3.1 / WebForge FR-N N2: a machine surface narrating live-sounding counts must date itself.
      expect(body, `${path}: build-time snapshot honesty line`).toMatch(
        /State is a build-time snapshot generated \d{4}-\d{2}-\d{2} \(UTC\); nothing here is live\./,
      );
    });
  }
});

test.describe('G11 — no-JS reachability', () => {
  test.use({ javaScriptEnabled: false });
  test('G11: /vaults/graph flagship topology is reachable without JS', async ({ page }) => {
    await page.goto('/vaults/graph/', { waitUntil: 'domcontentloaded' });
    // The server-rendered keyboard node-twin is the no-JS path to every vault.
    const nodeLinks = await page.locator('.graph-node-list a').count();
    expect(nodeLinks, 'no-JS node-twin must list the vaults as real anchors').toBeGreaterThan(10);
    await expect(page.locator('.vaults-graph-hero .lede').first(), 'lede visible without JS').toBeVisible();
  });
});

test.describe('G12 — markdown twins resolve', () => {
  test('G12: the manifest is non-trivial and covers the machine-eye probe set', () => {
    // The probes that scored D10 at 3/5. All ten 404'd; all ten are bespoke .astro pages, which
    // is why collections-only twin generation would have left this gate red (P3.1 O0 finding).
    const probes = [
      '/learn/what-is-adna', '/reference/specification', '/get-started',
      '/vaults', '/network', '/glossary', '/about',
    ];
    for (const p of probes) {
      expect(TWINS, `machine_eye probe ${p} must have a twin`).toContain(p);
    }
    expect(TWINS.length, 'manifest should cover the whole site').toBeGreaterThan(150);
  });

  test('G12: every manifest twin is served as markdown with a pointer block', async ({ request }) => {
    const failures: string[] = [];
    for (const path of TWINS) {
      const url = path === '/' ? '/index.md' : `${path}.md`;
      const res = await request.get(url);
      if (res.status() !== 200) { failures.push(`${url} → ${res.status()}`); continue; }
      const ct = res.headers()['content-type'] ?? '';
      if (!ct.includes('markdown')) { failures.push(`${url} → content-type ${ct}`); continue; }
      const body = await res.text();
      if (!body.startsWith('> Markdown twin of ')) { failures.push(`${url} → no pointer block`); continue; }
      if (!body.includes('/llms.txt')) failures.push(`${url} → pointer block does not name llms.txt`);
      // Swept across ALL twins, not just the sample: this leak was found on 24 files at once, and
      // a sample of ten would have caught it only by luck.
      if (body.includes('{/*')) failures.push(`${url} → leaks an MDX comment ({/* … */})`);
    }
    expect(failures, `twin failures:\n${failures.join('\n')}`).toEqual([]);
  });

  for (const path of SAMPLE) {
    test(`G12: ${path}.md carries real content, not just its pointer block`, async ({ request }) => {
      const res = await request.get(path === '/' ? '/index.md' : `${path}.md`);
      expect(res.status()).toBe(200);
      const body = await res.text();
      const withoutPointer = body.replace(/^(?:>.*(?:\n|$))+\s*/, '').trim();

      // 200, not 300. The first draft used 300 and `/vaults/iii.md` failed at 273 B — correctly,
      // because III's registry entry really is that sparse. The twin was faithful and the
      // assertion was wrong: raising a floor until sparse-but-honest data passes is how a gate
      // starts demanding the site inflate itself. 200 still catches an empty or pointer-only twin.
      expect(withoutPointer.length, `${path}.md body length`).toBeGreaterThan(200);

      // An h1 near the top, not necessarily on line 1: a tier-C twin may legitimately open with
      // the hero image's alt text and a badge line, which are content — the page really does lead
      // with them, and cutting them for a tidier assertion would make the twin less faithful.
      expect(withoutPointer.split('\n').slice(0, 8).join('\n'), `${path}.md has an h1 near the top`)
        .toMatch(/^#\s+\S/m);
      // Scoped to the first two lines, where a leftover envelope line would land — NOT swept over
      // the whole body. The first draft swept, and `/reference/specification.md` failed on its own
      // `> **Scan**:` section summaries: legitimate blockquotes in the page's content. A markdown
      // document may contain blockquotes anywhere; only the envelope is this gate's business.
      expect(withoutPointer.split('\n').slice(0, 2).join('\n'), `${path}.md retains a stray pointer line`)
        .not.toMatch(/^>\s/m);

      // The H13 leak class must not re-enter through the machine surface. MDX comments render to
      // nothing in HTML but survive a naive body copy; 24 twins carried them on the first run,
      // holding ADR ids and version history the site deliberately does not publish.
      expect(withoutPointer, `${path}.md must not leak MDX comments`).not.toContain('{/*');
      // The chrome a twin must not inherit: <main> on this site also holds the section sidebar
      // and its mobile <details> twin, which is how /get-started.md first came out opening with
      // a seven-link nav before reaching a sentence.
      expect(withoutPointer, `${path}.md must not carry section nav chrome`).not.toContain('In this section');
    });
  }
});

test.describe('G18 — twin FIDELITY: the twin says what the page says', () => {
  /**
   * ⛩ HAUSSMANN GR-1 O3 / AC-3 · V3 — THE ASSERTION NO GATE PERFORMED.
   *
   * ⭐⭐ G12 CHECKS TWIN *SHAPE* AND NEVER TWIN *CONTENT*, and that is how P1-4 shipped behind a
   * green suite. `/get-started.md` served `ls ~/aDNA/.aDNA/what` and "Replace `` with whatever you
   * called your project" — the quickstart's own verification commands, corrupted, on the surface
   * the machine door advertises — while every G12 assertion passed: 200, text/markdown, pointer
   * block present, an h1 near the top, >200 bytes, no MDX leak, no nav chrome. **Every one of those
   * is a property of the twin alone.** Nothing ever compared it to the page.
   *
   * That is campaign convention 18 (ratified at this mission's signature): an instrument can run
   * correctly, pass honestly, and be pointed at a LOCAL PROXY for the property actually claimed.
   * The emitter's own header promises "no drift channel"; only a comparison can hold it to that.
   *
   * WHAT THIS ASSERTS, NARROWLY AND ON PURPOSE. Placeholders of the `<name>` class — angle-bracket
   * tokens inside a `<code>` element — are the one construct where HTML escaping and markdown
   * plain-text collide, and they are load-bearing: they appear in commands a reader is told to run.
   * If the page shows one, the twin must contain it. This does NOT attempt general prose
   * equivalence (a tier-C twin is deliberately rougher than its page — that is the declared price
   * of deriving it from the artifact) and it is not a diff.
   *
   * ⚠ COVERAGE FLOOR, NOT `> 0` (P4.2's lesson). "No corrupted placeholders" is also what you get
   * from a walk that read nothing, so the corpus size and the placeholder count are both asserted.
   *
   * Red-proven by `scripts/twin_fidelity_redtest.sh`.
   */
  const PLACEHOLDER_FLOOR = 3;

  test('G18: every <code> placeholder on a page survives into its twin', () => {
    const dist = join(process.cwd(), 'dist');
    if (!existsSync(dist)) throw new Error(`no build output at ${dist} — run \`npx astro build\` first`);

    const pairs: { route: string; html: string; twin: string }[] = [];
    (function walk(dir: string) {
      for (const e of readdirSync(dir, { withFileTypes: true })) {
        const fp = join(dir, e.name);
        if (e.isDirectory()) { walk(fp); continue; }
        if (e.name !== 'index.html') continue;
        const rel = fp.slice(dist.length + 1).replace(/index\.html$/, '');
        // Tier-C twins are emitted as a SIBLING `<route>.md`, which is the advertised convention.
        const twinPath = join(dist, rel.replace(/\/$/, '') + '.md');
        if (rel && existsSync(twinPath)) {
          pairs.push({ route: '/' + rel, html: readFileSync(fp, 'utf8'), twin: readFileSync(twinPath, 'utf8') });
        }
      }
    })(dist);

    expect(pairs.length, 'no page/twin pairs found — the walk collapsed, and a collapsed walk '
      + 'reports a clean result for a corpus it never read').toBeGreaterThanOrEqual(10);

    // `&lt;word&gt;` inside a <code> element: the escaped placeholder as the page really emits it.
    const CODE_PLACEHOLDER = /<code[^>]*>([\s\S]*?)<\/code>/gi;
    const TOKEN = /&lt;([a-z][a-z0-9_-]*)&gt;/gi;

    let found = 0;
    const missing: string[] = [];
    for (const { route, html, twin } of pairs) {
      const tokens = new Set<string>();
      for (const m of html.matchAll(CODE_PLACEHOLDER)) {
        for (const t of m[1].matchAll(TOKEN)) tokens.add(t[1]);
      }
      for (const t of tokens) {
        found += 1;
        if (!twin.includes(`<${t}>`)) {
          missing.push(`${route}: page shows <${t}> inside <code>, its twin does not contain it`);
        }
      }
    }

    expect(found, `only ${found} <code> placeholder(s) found across ${pairs.length} page/twin pairs — `
      + 'below the floor, so a clean result here would say nothing about the emitter')
      .toBeGreaterThanOrEqual(PLACEHOLDER_FLOOR);

    expect(missing,
      `${missing.length} placeholder(s) present on the page and MISSING from its twin. The emitter `
      + 'decoded an escaped placeholder into a live-looking tag and a later blind `stripInline` ate '
      + 'it — see `protect()`/`restoreProtected()` in scripts/emit_bespoke_twins.mjs. This is a '
      + 'content-fidelity defect, not a formatting one: the twin is advertised as saying what the '
      + 'page says, and these are commands a reader is told to run.').toEqual([]);
  });
});

test.describe('G13 — the machine surfaces are discoverable from the page', () => {
  // machine_eye item 12: the literal string "llms" appeared ZERO times across all 8 saved HTML
  // pages. The artifacts worked; nothing on the site said they existed.
  for (const path of ['/', '/get-started/', '/about/']) {
    test(`G13: ${path} names llms.txt in its rendered HTML`, async ({ request }) => {
      const html = await (await request.get(path)).text();
      expect(html, `${path} must reference llms.txt`).toContain('/llms.txt');
    });
  }

  test('G13: every page with a twin advertises it, and pages without one stay silent', async ({ request }) => {
    const advertised: string[] = [];
    for (const path of SAMPLE) {
      const html = await (await request.get(path === '/' ? '/' : `${path}/`)).text();
      const expected = path === '/' ? '/index.md' : `${path}.md`;
      if (!html.includes(`<link rel="alternate" type="text/markdown" href="${expected}">`)) {
        advertised.push(`${path} → missing rel=alternate for ${expected}`);
      }
    }
    expect(advertised, advertised.join('\n')).toEqual([]);

    // A pointer to a 404 is worse than no pointer. These three routes have no twin by decision
    // (an error page, a live token grid, and SVG geometry whose keyboard twin is /vaults).
    for (const path of ['/design-system/', '/vaults/graph/']) {
      const html = await (await request.get(path)).text();
      expect(html, `${path} must not advertise a twin it does not have`).not.toContain('type="text/markdown"');
    }
  });
});

test.describe('G14 — llms-full.txt is a corpus, not an index', () => {
  test('G14: the corpus is substantial and sectioned', async ({ request }) => {
    const body = await (await request.get('/llms-full.txt')).text();
    // The defect: "2,018 B … a '-full' name promises deep-ingestion content it doesn't deliver."
    expect(body.length, 'corpus byte length').toBeGreaterThan(100_000);
    const sections = body.match(/^## https:\/\/adna\.network/gm) ?? [];
    expect(sections.length, 'one section per twin').toBe(TWINS.length);
    // If the post-build append never ran, the header ships alone wearing the corpus name again.
    expect(body, 'corpus marker must have been replaced').not.toContain('corpus pending:');
  });

  test('G14: the corpus keeps the index it replaced', async ({ request }) => {
    const body = await (await request.get('/llms-full.txt')).text();
    // Nothing was dropped in the rewrite — the old route list, taxonomy and legend became the
    // table of contents rather than being cut.
    expect(body, 'route list').toContain('## Key routes');
    expect(body, 'vault taxonomy').toMatch(/## Vault taxonomy \(\d+ vaults\)/);
    expect(body, 'edge legend').toMatch(/## Edge types \(\d+ cited relationships\)/);
  });
});

test.describe('G15 — content negotiation is wired into the deploy surface', () => {
  // STRUCTURAL ONLY, and deliberately so — see the file header. `astro preview` does not apply
  // the Vercel route table, so this reads the built config rather than pretending to probe.
  const configPath = join(process.cwd(), '.vercel', 'output', 'config.json');

  /* ⛩ HAUSSMANN P4.4a A1 / F-p — THE SKIP GUARDS TESTED FOR THE WRONG THING.
   *
   * Both G15 tests used to guard on `!existsSync(configPath)`. But the Astro Vercel adapter
   * writes config.json AT BUILD TIME, before any injector runs — so after a bare
   * `npx astro build`, or after `inject_redirects.mjs` alone (convention 6's own out-of-deploy
   * instruction), the file EXISTS while the routes these tests assert on DO NOT. The guard
   * never fired, the tests ran unskipped, and they were CERTAIN TO FAIL on a perfectly good
   * tree. Observed live at P3.3 O3 and again at P3.4; fixed by running the missing injector,
   * with no code changed either time. And the skip message named `npx astro build` — a remedy
   * that does not inject at all, which is precisely what convention 6 exists to warn about.
   *
   * ⇒ Guard on THE ROUTES EACH TEST ASSERTS ON, and name the step that produces them.
   *
   * ⚠ WHY THIS IS NOT A FAIL-OPEN, since "skip when the thing is missing" usually is.
   * `inject_negotiation.mjs` is FAIL-CLOSED: having injected, it re-counts and `die()`s if the
   * total is not exactly `twins × 2` (inject_negotiation.mjs:145). So an injector that RAN and
   * produced nothing cannot exist — it would have exited non-zero and taken the build with it.
   * Absent twin routes therefore has exactly one reachable cause: THE INJECTOR DID NOT RUN.
   * That is a workflow state, correctly skipped. If that fail-closed check is ever weakened,
   * this guard becomes a fail-open and must be revisited with it.
   */
  const loadConfig = (): any | null =>
    existsSync(configPath) ? JSON.parse(readFileSync(configPath, 'utf8')) : null;
  const twinRoutesOf = (cfg: any): any[] =>
    (cfg?.routes ?? []).filter((r: any) => r?.headers?.['x-adna-twin']);
  const redirectRoutesOf = (cfg: any): any[] =>
    (cfg?.routes ?? []).filter(
      (r: any) => [301, 302, 307, 308].includes(r?.status) && r?.headers?.Location,
    );

  const NO_CONFIG = 'no .vercel/output/config.json — run `npx astro build` first';
  const NO_NEGOTIATION =
    'config.json carries no x-adna-twin routes — run `node scripts/inject_negotiation.mjs .`. ' +
    'A bare `npx astro build` WRITES this file but injects nothing, and `inject_redirects.mjs` ' +
    'does not add negotiation routes either (campaign CLAUDE.md convention 6).';
  const NO_REDIRECTS =
    'config.json carries no redirect routes — run `node scripts/inject_redirects.mjs .`. ' +
    'With none present this assertion would pass vacuously, which is not the same as passing.';

  test('G15: one Vary-carrying negotiation route per twin, all before the filesystem boundary', () => {
    const cfg = loadConfig();
    test.skip(!cfg, NO_CONFIG);
    test.skip(twinRoutesOf(cfg).length === 0, NO_NEGOTIATION);
    const routes: any[] = cfg.routes ?? [];
    const twinRoutes = twinRoutesOf(cfg);

    // TWO routes per twin: the Accept-conditioned form, and the naive-append `/path/.md` form an
    // agent produces by following llms.txt literally against a canonical URL that ends in a slash.
    // The live re-probe scored item 3 at 7/10 on exactly that shape before the second form existed.
    expect(twinRoutes.length, 'two routes per twin: negotiated + naive-append').toBe(TWINS.length * 2);

    const handleIdx = routes.findIndex((r) => r?.handle);
    const lastNeg = routes.map((r, i) => [r, i] as const).filter(([r]) => r?.headers?.['x-adna-twin']).pop();
    expect(handleIdx, 'filesystem boundary exists').toBeGreaterThan(-1);
    expect(lastNeg![1], 'negotiation must precede handle: filesystem or the HTML wins first').toBeLessThan(handleIdx);

    const negotiated = twinRoutes.filter((r) => Array.isArray(r.has));
    const naiveAppend = twinRoutes.filter((r) => !Array.isArray(r.has));
    expect(negotiated.length, 'one Accept-conditioned route per twin').toBe(TWINS.length);
    expect(naiveAppend.length, 'one /path/.md route per twin').toBe(TWINS.length);

    for (const r of negotiated) {
      expect(r.headers.Vary, `${r.src} must Vary: Accept`).toBe('Accept');
      expect(r.has?.[0]?.key, `${r.src} must key on the accept header`).toBe('accept');
      expect(r.has?.[0]?.value, `${r.src} must match text/markdown`).toContain('text/markdown');
      expect(r.dest, `${r.src} must point at a .md twin`).toMatch(/\.md$/);
    }
    for (const r of naiveAppend) {
      expect(r.src, `${r.src} must match the /path/.md shape`).toMatch(/\/\\\.md\$$/);
      expect(r.dest, `${r.src} must point at a .md twin`).toMatch(/\.md$/);
      // No Vary here on purpose: one URL, one representation. Declaring Vary would claim a
      // variance that does not exist, which is the same overclaim in miniature that this
      // campaign spends its time removing.
      expect(r.headers.Vary, `${r.src} must not claim a Vary it does not have`).toBeUndefined();
    }
  });

  test('G15: negotiation did not displace the redirects', () => {
    const cfg = loadConfig();
    test.skip(!cfg, NO_CONFIG);
    // This one guards on REDIRECTS, not on twin routes — it is an assertion about where the
    // redirects sit, so its precondition is that redirects exist. Guarding it on negotiation
    // instead would let it pass vacuously in the one state it is meant to catch.
    test.skip(redirectRoutesOf(cfg).length === 0, NO_REDIRECTS);
    const routes: any[] = cfg.routes ?? [];
    const handleIdx = routes.findIndex((r) => r?.handle);
    const stranded = routes
      .map((r, i) => [r, i] as const)
      .filter(([r, i]) => [301, 302, 307, 308].includes(r?.status) && r?.headers?.Location && i > handleIdx);
    expect(stranded.map(([r]) => r.src), 'redirects pushed past the filesystem boundary').toEqual([]);
  });
});

/* ── G16–G17 — HAUSSMANN P3.2 · ADR-056 clauses 3 + 4 ────────────────────────────────────────
 *
 * G16 covers the registry JSON endpoint, G17 the structured-data layer.
 *
 * Every count below is READ FROM THE BUILD, never pinned to a literal (KW-8 / FR-K). `vault_count`
 * is asserted against the length of the array beside it and against what the page renders, so the
 * assertion survives the registry growing — which it will, the moment Hestia's data pass lands the
 * 77-vs-74 admission ruling. A gate that hardcoded 74 would go red on correct data.
 */

const CANONICAL_JSON = '/vaults.json';
const VERSIONED_JSON = '/api/registry.v1.json';

test.describe('G16 — the registry is available as data', () => {
  test('G16: both endpoints serve JSON', async ({ request }) => {
    for (const path of [CANONICAL_JSON, VERSIONED_JSON]) {
      const res = await request.get(path);
      expect(res.status(), `${path} must be served`).toBe(200);
      expect(
        res.headers()['content-type'] ?? '',
        `${path} must declare application/json`,
      ).toContain('application/json');
    }
  });

  test('G16: the versioned twin is byte-identical to the canonical path', async ({ request }) => {
    const [a, b] = await Promise.all([
      request.get(CANONICAL_JSON).then((r) => r.text()),
      request.get(VERSIONED_JSON).then((r) => r.text()),
    ]);
    // One producer, two routes. A pin that silently diverges from the canonical payload is worse
    // than no pin, because the consumer cannot tell it has drifted.
    expect(b, 'the pinnable URL must serve the same bytes as the canonical one').toBe(a);
  });

  test('G16: counts are derived from the payload, not asserted about it', async ({ request }) => {
    const d = await request.get(CANONICAL_JSON).then((r) => r.json());
    expect(Array.isArray(d.vaults), 'vaults must be an array').toBe(true);
    expect(Array.isArray(d.edges), 'edges must be an array').toBe(true);
    expect(d.vault_count, 'vault_count must equal the rows it counts').toBe(d.vaults.length);
    expect(d.edge_count, 'edge_count must equal the edges it counts').toBe(d.edges.length);
    expect(d.vaults.length, 'a registry with no rows is a build failure, not a thin registry')
      .toBeGreaterThan(0);
  });

  test('G16: the payload states its own contract', async ({ request }) => {
    const d = await request.get(CANONICAL_JSON).then((r) => r.json());
    expect(d.schema_version, 'consumers pin on schema_version').toBeTruthy();
    expect(d.about?.canonical_url, 'the payload must name its canonical URL').toContain(CANONICAL_JSON);
    expect(d.about?.versioned_url, 'the payload must name its pinnable URL').toContain(VERSIONED_JSON);
    expect(d.about?.versioning, 'clause 7 requires a stated deprecation policy').toMatch(/\d+\s*days/i);
    // The self-declaration caveat is the single most important thing on this surface (ADR-052
    // §tiers.2) and must travel WITH the data, not sit on an HTML page a machine never fetches.
    expect(d.caveat, 'the self-declared caveat must ship in the payload').toMatch(/self-declared/i);
    // Two clocks, not one — a stale registry must not be able to look as fresh as the last deploy.
    expect(d.built_at, 'built_at must be present').toBeTruthy();
    expect(d.generated_at, 'generated_at must be present').toBeTruthy();
  });

  test('G16: field_coverage counts match a recount of the rows', async ({ request }) => {
    const d = await request.get(CANONICAL_JSON).then((r) => r.json());
    const coverage = d.field_coverage ?? {};
    expect(Object.keys(coverage).length, 'field_coverage must describe the fields').toBeGreaterThan(0);

    for (const [field, stat] of Object.entries<any>(coverage)) {
      const recount = d.vaults.filter((v: any) => {
        const raw = v[field];
        if (typeof raw === 'boolean') return true;
        if (raw == null) return false;
        if (Array.isArray(raw)) return raw.length > 0;
        return String(raw).trim() !== '';
      }).length;
      expect(stat.of, `${field}: coverage denominator must be the row count`).toBe(d.vaults.length);
      expect(stat.populated, `${field}: coverage is narrated, not derived`).toBe(recount);
    }
  });

  test('G16: rows listed with a minimal card leak nothing beyond the DP4 set', async ({ request }) => {
    const d = await request.get(CANONICAL_JSON).then((r) => r.json());
    const minimal = d.vaults.filter((v: any) => v.listing === 'minimal');
    // The DP4 ruling (ADR-052 §admission) is an operator decision about three named vaults. If the
    // suppression ever stops reaching this surface, the gate must fail rather than the endpoint
    // quietly publishing engagement detail — so a zero-length set is itself a failure.
    expect(minimal.length, 'the minimal-card set vanished — suppression may have stopped applying')
      .toBeGreaterThan(0);

    const SUPPRESSED = [
      'note', 'tagline', 'current_phase', 'canonical_governance',
      'github_url', 'docs_site_url', 'headline_mission', 'headline_mission_state',
    ];
    for (const v of minimal) {
      for (const field of SUPPRESSED) {
        expect(v[field], `${v.vault_slug}.${field} must stay suppressed on a minimal card`).toBeNull();
      }
      for (const field of ['headline_adrs', 'recent_closed']) {
        expect(v[field], `${v.vault_slug}.${field} must stay empty on a minimal card`).toEqual([]);
      }
      // Suppressed and empty must be distinguishable from the outside.
      expect(v.listing_note, `${v.vault_slug} must say WHY it is thin`).toMatch(/minimal card/i);
    }
  });

  test('G16: the endpoint is advertised where an agent will look', async ({ request }) => {
    const llms = await request.get('/llms.txt').then((r) => r.text());
    expect(llms, '/llms.txt must name the registry endpoint').toContain(CANONICAL_JSON);
    expect(llms, '/llms.txt must name the pinnable endpoint').toContain(VERSIONED_JSON);

    // An endpoint nobody can find fails machine_eye item 8's intent while returning 200.
    const page = await request.get('/vaults/').then((r) => r.text());
    expect(page, '/vaults must link the JSON endpoint').toContain(CANONICAL_JSON);
  });

  test('G16: every advertised row URL resolves', async ({ request }) => {
    const d = await request.get(CANONICAL_JSON).then((r) => r.json());
    // Spot-check rather than all 74 — this is a link-integrity smoke test, and gate-31 owns the
    // exhaustive sweep. A pointer into a 404 is worse than no pointer (clause 1's own finding).
    for (const v of d.vaults.slice(0, 5)) {
      const url = new URL(v.url).pathname;
      const md = new URL(v.markdown_url).pathname;
      expect((await request.get(url)).status(), `${url} (row url) must resolve`).toBe(200);
      expect((await request.get(md)).status(), `${md} (row markdown_url) must resolve`).toBe(200);
    }
  });
});

test.describe('G17 — structured data', () => {
  /** JSON-LD blocks on a page, flattened through any `@graph` wrapper. */
  async function blocksOn(request: any, path: string): Promise<any[]> {
    const html = await request.get(path).then((r: any) => r.text());
    const raw = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
    const out: any[] = [];
    const walk = (o: any) => {
      if (Array.isArray(o)) return o.forEach(walk);
      if (o && typeof o === 'object') {
        if (o['@graph']) return o['@graph'].forEach(walk);
        out.push(o);
      }
    };
    for (const m of raw) walk(JSON.parse(m[1]));
    return out;
  }

  test('G17: the registry declares itself a Dataset pointing at the endpoint', async ({ request }) => {
    const blocks = await blocksOn(request, '/vaults/');
    const dataset = blocks.find((b) => b['@type'] === 'Dataset');
    expect(dataset, '/vaults must carry a Dataset block').toBeTruthy();
    expect(dataset.distribution?.['@type'], 'Dataset needs a DataDownload distribution').toBe('DataDownload');
    expect(dataset.distribution?.encodingFormat).toBe('application/json');
    // The half that makes it useful: page and endpoint must reference each other.
    expect(dataset.distribution?.contentUrl, 'the distribution must point at the real endpoint')
      .toContain(CANONICAL_JSON);
    expect((await request.get(new URL(dataset.distribution.contentUrl).pathname)).status()).toBe(200);
  });

  test('G17: every block carries a publisher Organization with sameAs', async ({ request }) => {
    // machine_eye item 9 read "0 Organization blocks" because it counted TOP-LEVEL @type only;
    // the Organization is nested as `publisher` and has carried sameAs since P1.2. This asserts
    // the thing that is actually true, so the next census cannot mistake nesting for absence.
    for (const path of ['/', '/vaults/', '/learn/what-is-adna/', '/privacy/', '/security/']) {
      const blocks = await blocksOn(request, path);
      expect(blocks.length, `${path} must carry at least one JSON-LD block`).toBeGreaterThan(0);
      const org = blocks.map((b) => b.publisher).find(Boolean);
      expect(org?.['@type'], `${path} must name a publisher Organization`).toBe('Organization');
      expect(Array.isArray(org?.sameAs) && org.sameAs.length, `${path} publisher must carry sameAs`)
        .toBeTruthy();
    }
  });

  test('G17: no Astro-rendered page ships without JSON-LD', async ({ request }) => {
    // The three pages the P3.2 census found bare. `404` and `install.html` are excluded BY
    // DECISION and named in ADR-056 clause 4: describing a page that does not exist is a claim,
    // and install.html is a static public/ asset owned by the installer lane.
    for (const path of ['/design-system/', '/privacy/', '/security/']) {
      const blocks = await blocksOn(request, path);
      expect(blocks.length, `${path} has no JSON-LD`).toBeGreaterThan(0);
    }
  });
});
