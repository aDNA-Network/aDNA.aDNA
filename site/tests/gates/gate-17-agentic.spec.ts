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
import { readFileSync, existsSync } from 'node:fs';
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

  test('G15: one Vary-carrying negotiation route per twin, all before the filesystem boundary', () => {
    test.skip(
      !existsSync(configPath),
      'no .vercel/output/config.json — run `npx astro build` (a bare build does not inject; see campaign CLAUDE.md convention 6)',
    );
    const cfg = JSON.parse(readFileSync(configPath, 'utf8'));
    const routes: any[] = cfg.routes ?? [];
    const twinRoutes = routes.filter((r) => r?.headers?.['x-adna-twin']);

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
    test.skip(!existsSync(configPath), 'no .vercel/output/config.json — run `npx astro build`');
    const cfg = JSON.parse(readFileSync(configPath, 'utf8'));
    const routes: any[] = cfg.routes ?? [];
    const handleIdx = routes.findIndex((r) => r?.handle);
    const stranded = routes
      .map((r, i) => [r, i] as const)
      .filter(([r, i]) => [301, 302, 307, 308].includes(r?.status) && r?.headers?.Location && i > handleIdx);
    expect(stranded.map(([r]) => r.src), 'redirects pushed past the filesystem boundary').toEqual([]);
  });
});
