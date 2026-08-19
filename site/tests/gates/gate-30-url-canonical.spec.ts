/**
 * gate-30 — URL canonicalization (HAUSSMANN P2.1 / ADR-051).
 *
 * One casing scheme, and nothing that can quietly reintroduce a second one.
 *
 * The defect this locks out: `build_vaults_data.mjs` resolved a vault's route as
 * `card.vault_slug || slugOf(slug)`, so a vault_card that declared its own slug won.
 * 24 of 74 cards declared the raw vault name, giving `/vaults/Operations.aDNA/` next
 * to `/vaults/git/` — two URL shapes from one registry. On a case-sensitive host the
 * wrong casing is a hard 404 with no recovery, so every one of those was a permanent
 * source of dead external links.
 *
 * Assertions are derived from the build snapshot and the registry, never from a typed
 * list (WebForge KW-8/FR-K) — a gate that hardcodes the 24 stops being true the moment
 * a 75th vault arrives.
 */
import { test, expect } from '@playwright/test';
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, resolve } from 'node:path';

const SITE_ROOT = process.cwd();          // playwright runs from site/ (sibling gates use the same idiom)
const REPO_ROOT = resolve(SITE_ROOT, '..');
const DIST = join(SITE_ROOT, 'dist');

const registry = JSON.parse(readFileSync(join(SITE_ROOT, 'src/data/vaults.json'), 'utf8'));

/** The law, stated once here so the gate is not merely agreeing with the code it tests. */
const canonical = (v: string) =>
  String(v).toLowerCase().replace(/\.adna$/, '').replace(/[^a-z0-9_-]/g, '_');

test.describe('gate-30 URL canonicalization', () => {
  test('every built vault route directory is canonical', () => {
    const vaultsDir = join(DIST, 'vaults');
    expect(existsSync(vaultsDir), 'dist/vaults must exist — run the build first').toBe(true);

    const dirs = readdirSync(vaultsDir).filter((d) => statSync(join(vaultsDir, d)).isDirectory());
    const offenders = dirs.filter((d) => d !== canonical(d));
    expect(
      offenders,
      `built vault routes must be lowercase with no .aDNA suffix; offenders: ${offenders.join(', ')}`,
    ).toEqual([]);
    // Sanity floor: if the vault pages stopped building entirely, the check above passes vacuously.
    expect(dirs.length, 'expected the vault detail pages to be built').toBeGreaterThan(50);
  });

  test('the accessor law and the generator law are the same law', () => {
    const gen = readFileSync(join(REPO_ROOT, 'scripts/build_vaults_data.mjs'), 'utf8');
    const acc = readFileSync(join(SITE_ROOT, 'src/data/vaults.ts'), 'utf8');
    // Both must fold case, drop the .adna suffix, and sanitize to the same character class.
    const shape = /toLowerCase\(\)[\s\S]{0,40}replace\(\/\\\.adna\$\/[\s\S]{0,30}replace\(\/\[\^a-z0-9_-\]\/g/;
    expect(shape.test(gen), 'build_vaults_data.mjs slugOf() no longer matches the canonical shape').toBe(true);
    expect(shape.test(acc), 'vaults.ts canonicalVaultSlug() no longer matches the canonical shape').toBe(true);
  });

  test('the generator cannot let a card override the route slug', () => {
    const gen = readFileSync(join(REPO_ROOT, 'scripts/build_vaults_data.mjs'), 'utf8');
    expect(
      gen.includes('vault_slug: card.vault_slug || slugOf(slug)'),
      'the card-override form is back — a vault_card can once again declare a non-canonical route slug',
    ).toBe(false);
    expect(gen.match(/vault_slug: slugOf\(card\.vault_slug \|\| slug\)/g)?.length ?? 0).toBe(2);
  });

  test('site source reaches the registry only through the normalizing accessor', () => {
    const walk = (dir: string, out: string[] = []): string[] => {
      for (const e of readdirSync(dir, { withFileTypes: true })) {
        const p = join(dir, e.name);
        if (e.isDirectory()) { if (e.name !== 'node_modules') walk(p, out); }
        else if (/\.(ts|astro|mjs|js)$/.test(e.name)) out.push(p);
      }
      return out;
    };
    const offenders = walk(join(SITE_ROOT, 'src'))
      .filter((f) => !f.endsWith(join('src', 'data', 'vaults.ts')))
      .filter((f) => /from\s+'[^']*vaults\.json'/.test(readFileSync(f, 'utf8')))
      .map((f) => f.replace(SITE_ROOT + '/', ''));
    expect(
      offenders,
      `these import vaults.json directly and so bypass slug normalization: ${offenders.join(', ')}`,
    ).toEqual([]);
  });

  test('every legacy vault slug has a redirect declared', () => {
    const cfg = readFileSync(join(SITE_ROOT, 'astro.config.mjs'), 'utf8');
    const legacy = registry.vaults
      .map((v: any) => String(v.vault_slug))
      .filter((s: string) => s !== canonical(s));
    const missing = legacy.filter((s: string) => !cfg.includes(`'/vaults/${s}'`));
    expect(
      missing,
      `legacy slugs with no redirect — these are live URLs that would start hard-404ing: ${missing.join(', ')}`,
    ).toEqual([]);
  });

  test('redirect routes answer both slash forms, and never catch a canonical URL', () => {
    const cfgPath = join(SITE_ROOT, '.vercel/output/config.json');
    test.skip(!existsSync(cfgPath), 'no .vercel/output/config.json — adapter output not built');
    const cfg = JSON.parse(readFileSync(cfgPath, 'utf8'));
    const redirects = cfg.routes.filter((r: any) => [301, 302, 307, 308].includes(r.status) && r.src);
    expect(redirects.length, 'expected redirect routes in the adapter output').toBeGreaterThan(0);

    // Widened by scripts/inject_redirects.mjs. Unwidened routes 404 on the trailing-slash
    // form — the shape every canonical URL on this site uses. Verified live 2026-08-18.
    const narrow = redirects.filter((r: any) => !r.src.endsWith('/?$') && !r.src.endsWith('/$'));
    expect(
      narrow.map((r: any) => r.src),
      'redirect(s) match only one slash form — run scripts/inject_redirects.mjs',
    ).toEqual([]);

    // A canonical destination must not itself be caught by a redirect, or the fix loops.
    const canonicalUrls = registry.vaults.map((v: any) => `/vaults/${canonical(v.vault_slug)}/`);
    const looping = canonicalUrls.filter((u: string) =>
      redirects.some((r: any) => new RegExp(r.src).test(u)),
    );
    expect(looping, `canonical URLs caught by a redirect (loop risk): ${looping.join(', ')}`).toEqual([]);
  });

  // HAUSSMANN P2.2 / ADR-049 Option A (⛩ DP5). The 11 IA-consolidation redirects live here
  // rather than in a navigation spec because the gate suite runs against `npm run preview`,
  // which does not serve the adapter layer at all (P2.1 doctrine §3.2) — a preview-side
  // redirect assertion fails in a way indistinguishable from a real bug. This reads the
  // emitted routes instead. The live proof is the post-deploy probe matrix.
  test('IA consolidation: every retired audience route has a redirect to its destination', () => {
    const cfgPath = join(SITE_ROOT, '.vercel/output/config.json');
    test.skip(!existsSync(cfgPath), 'no .vercel/output/config.json — adapter output not built');
    const cfg = JSON.parse(readFileSync(cfgPath, 'utf8'));
    const redirects = cfg.routes.filter((r: any) => [301, 302, 307, 308].includes(r.status) && r.src);

    const expected: Record<string, string> = {
      '/adopters': '/use-cases/',
      '/adopters/adopter-researcher': '/use-cases/research-lab/',
      '/adopters/adopter-educator': '/use-cases/educator/',
      '/adopters/adopter-enterprise-team': '/use-cases/enterprise-team/',
      '/adopters/adopter-startup': '/use-cases/startup/',
      '/adopters/adopter-solo-developer': '/use-cases/solo-developer/',
      '/researchers': '/use-cases/research-lab/',
      '/educators': '/use-cases/educator/',
      '/enterprise': '/use-cases/enterprise-team/',
      '/startup-first-hour': '/use-cases/startup/',
      '/compliance': '/provenance-audit/',
    };

    const broken: string[] = [];
    for (const [from, to] of Object.entries(expected)) {
      // Both slash forms, because inject_redirects.mjs widens `$` to `/?$` and trailing-slash
      // is the shape every canonical URL on this site emits.
      for (const probe of [from, `${from}/`]) {
        const hit = redirects.find((r: any) => new RegExp(r.src).test(probe));
        if (!hit) {
          broken.push(`${probe} → (no redirect matches)`);
        } else if (hit.headers?.Location !== to) {
          broken.push(`${probe} → ${hit.headers?.Location} (expected ${to})`);
        }
      }
    }
    expect(broken, `retired audience routes without a working redirect:\n  ${broken.join('\n  ')}`).toEqual([]);
  });

  // The destinations must actually exist. A redirect to a 404 is worse than a 404 — it looks
  // deliberate. Checked against the build snapshot, not a hardcoded list (WebForge KW-8/FR-K).
  test('IA consolidation: every redirect destination built a page', () => {
    const distDir = join(SITE_ROOT, 'dist');
    test.skip(!existsSync(distDir), 'no dist/ — site not built');
    const destinations = [
      '/use-cases/',
      '/use-cases/research-lab/',
      '/use-cases/educator/',
      '/use-cases/enterprise-team/',
      '/use-cases/startup/',
      '/use-cases/solo-developer/',
      '/provenance-audit/',
    ];
    const missing = destinations.filter(
      (d) => !existsSync(join(distDir, d.replace(/^\/|\/$/g, ''), 'index.html')),
    );
    expect(missing, `redirect destinations that built no page: ${missing.join(', ')}`).toEqual([]);
  });
});
