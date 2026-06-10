/**
 * Gate 12: Install Truth
 * Criterion: every public surface that teaches the install flow renders the canonical
 * commands from src/data/install_truth.json VERBATIM, and no legacy form survives
 * (~/lattice root, Agentic-DNA.git repo name, clone-as-my-project flows that land in
 * the template's refused state — audit gap #16; and, since ADR-034 2026-06-10, the
 * pre-image forms: the LatticeProtocol/aDNA clone slug and the cp-router bootstrap step).
 *
 * Canonical face (ADR-034): github.com/aDNA-Network/aDNA — clone-and-run workspace image,
 * 1-command flow. Predecessor archived as aDNA-Network/adna-legacy (old URLs redirect).
 *
 * The fixture is emitted by scripts/build_install_truth.mjs, which verifies the
 * referenced standard-tree files exist in the local .adna checkout (CI asserts the
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
    // Pre-image legacy forms (ADR-034): the old template-repo clone slug (any case; the
    // slash distinguishes it from the LatticeProtocol.aDNA vault name) and the dead
    // copy-the-router bootstrap step. Old URLs redirect to aDNA-Network/adna-legacy.
    expect(body).not.toMatch(/LatticeProtocol\/adna/i);
    expect(body).not.toMatch(/cp \.adna\/how\/templates\/template_workspace_claude\.md/);
  });
}

test('G12 Install truth: fixture integrity (canonical repo + all template paths verified)', () => {
  expect(installTruth.canonical_repo_https).toBe('https://github.com/aDNA-Network/aDNA');
  expect(installTruth.canonical_repo_git).toBe('https://github.com/aDNA-Network/aDNA.git');
  expect(installTruth.legacy_repo_https).toBe('https://github.com/aDNA-Network/adna-legacy');
  expect(installTruth.workspace_root).toBe('~/aDNA');
  expect(installTruth.embedded_standard).toBe('.adna');
  for (const [rel, present] of Object.entries(installTruth.verified_paths)) {
    expect(present, `template path must exist at generation time: ${rel}`).toBe(true);
  }
  // The one-liner must be exactly the chained step commands (no drift between forms).
  for (const cmd of Object.values(installTruth.commands)) {
    expect(installTruth.one_liner).toContain(cmd);
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

test('G12 Install truth: legacy archive is reachable (old-URL redirect target)', async ({ request }) => {
  let resp;
  try {
    resp = await request.get(installTruth.legacy_repo_https, { maxRedirects: 5 });
  } catch {
    test.skip(true, 'network unavailable — reachability check skipped');
    return;
  }
  expect(resp.status(), 'legacy archive URL must not 404/redirect-loop').toBeLessThan(400);
});
