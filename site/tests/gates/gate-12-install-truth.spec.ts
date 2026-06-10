/**
 * Gate 12: Install Truth
 * Criterion: every public surface that teaches the install flow renders the canonical
 * commands from src/data/install_truth.json VERBATIM, and no legacy form survives
 * (~/lattice root, Agentic-DNA.git repo name, clone-as-my-project flows that land in
 * the template's refused state — audit gap #16).
 *
 * The fixture is emitted by scripts/build_install_truth.mjs, which verifies the
 * referenced template files exist in the local .adna checkout (CI asserts the
 * committed fixture — ADR-023 Clause-A semantics, same as vaults.json).
 */
import { test, expect } from '@playwright/test';
import installTruth from '../../src/data/install_truth.json' with { type: 'json' };

const SURFACES = ['/get-started/', '/network/'];

for (const route of SURFACES) {
  test(`G12 Install truth: ${route} renders the canonical commands verbatim`, async ({ page }) => {
    await page.goto(route, { waitUntil: 'networkidle' });
    const codeText = (await page.locator('pre').allTextContents()).join('\n').replace(/\s+/g, ' ');
    for (const [step, cmd] of Object.entries(installTruth.commands)) {
      expect(codeText, `${route} must render the "${step}" command`).toContain(
        cmd.replace(/\s+/g, ' '),
      );
    }
  });

  test(`G12 Install truth: ${route} carries no legacy install form`, async ({ page }) => {
    await page.goto(route, { waitUntil: 'networkidle' });
    const body = (await page.locator('body').textContent()) ?? '';
    expect(body).not.toMatch(/Agentic-DNA\.git/);
    expect(body).not.toMatch(/~\/lattice\b/);
    expect(body).not.toMatch(/clone .* my-(project|node)/);
  });
}

test('G12 Install truth: fixture integrity (canonical repo + all template paths verified)', () => {
  expect(installTruth.canonical_repo_https).toBe('https://github.com/LatticeProtocol/aDNA');
  expect(installTruth.canonical_repo_git).toBe('https://github.com/LatticeProtocol/aDNA.git');
  expect(installTruth.workspace_root).toBe('~/aDNA');
  for (const [rel, present] of Object.entries(installTruth.verified_paths)) {
    expect(present, `template path must exist at generation time: ${rel}`).toBe(true);
  }
  // The one-liner must be exactly the chained step commands (no drift between forms).
  for (const cmd of Object.values(installTruth.commands)) {
    expect(installTruth.one_liner.replace('--depth 1 ', '')).toContain(cmd);
  }
});

test('G12 Install truth: canonical repo is reachable', async ({ request }) => {
  let resp;
  try {
    resp = await request.get(installTruth.canonical_repo_https, { maxRedirects: 5 });
  } catch {
    test.skip(true, 'network unavailable — reachability check skipped');
    return;
  }
  expect(resp.status(), 'canonical repo URL must not 404/redirect-loop').toBeLessThan(400);
});
