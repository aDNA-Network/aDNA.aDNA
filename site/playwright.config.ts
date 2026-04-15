import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/gates',
  fullyParallel: false,
  retries: 0,
  reporter: 'list',
  use: {
    baseURL: 'http://localhost:4321',
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
  ],
  webServer: {
    command: 'npm run preview',
    port: 4321,
    reuseExistingServer: true,
    timeout: 30_000,
  },
});
