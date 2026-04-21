/// <reference types="node" />

import { defineConfig, devices } from '@playwright/test';
import { EnvUtils } from './utils/envUtils';
import path from 'path';

/**
 * Playwright configuration for production-ready test execution.
 */
const runId = new Date().getTime();
const STORAGE_STATE = path.join(__dirname, 'playwright/.auth/user.json');

export default defineConfig({
  
  testDir: './tests',
  fullyParallel: false,
  workers: 1,
  retries: 0,
  timeout: 180000,
  expect: {
    timeout: 60000,
  },
  outputDir: 'test-results/run-' + runId,
  reporter: [['html', { outputFolder: 'playwright-report/run-' + runId }]],
  
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});