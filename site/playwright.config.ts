import { defineConfig } from '@playwright/test';

// HAUSSMANN P1.3: port 4321 is contended on this node (WebForge's archetype suite and sibling
// vault dev servers claim it — campaign convention 6). With the old `reuseExistingServer: true`
// the suite silently ADOPTED whatever was listening and tested a stranger's site (observed live:
// 304 bogus failures against a ScienceStanley dev server squatting 4321). Fail-loud instead:
// never reuse a server this run didn't start, and dodge a contended port via GATE_PORT.
const PORT = Number(process.env.GATE_PORT || 4321);

export default defineConfig({
  testDir: './tests/gates',
  fullyParallel: false,
  retries: 0,
  reporter: 'list',
  use: {
    baseURL: `http://localhost:${PORT}`,
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
  webServer: {
    command: `npm run preview -- --port ${PORT}`,
    port: PORT,
    reuseExistingServer: false,
    timeout: 30_000,
  },
});
