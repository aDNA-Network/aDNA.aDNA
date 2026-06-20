/**
 * Gate 17 — Agentic readiness (WEBSITE TOOLING-PROMOTION gates **G10** + **G11**)
 *
 *   - G10 (llms.txt presence + freshness): /llms.txt is served, is text/plain, and carries the
 *     canonical install one-liner + current standard version + canonical repo + publisher. Because
 *     the endpoint composes from the single-source data (install_truth.json / standard.ts /
 *     canonical.ts / vaults.json), presence of these facts == freshness (they can't drift).
 *   - G11 (no-JS reachability): the flagship topology (/vaults/graph) is reachable WITHOUT
 *     JavaScript — the server-rendered keyboard node-twin lists every vault as a real anchor.
 *
 * Both are permanent (untagged) gates — they run in `test:gates` and `test:gates:fast`.
 */
import { test, expect } from '@playwright/test';

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
      // No drifted/legacy identity may leak into the agent index.
      expect(body, `${path}: no legacy publisher`).not.toContain('LatticeProtocol');
      expect(body, `${path}: no dead dev-vault repo`).not.toContain('aDNA-Network/aDNA.aDNA');
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
