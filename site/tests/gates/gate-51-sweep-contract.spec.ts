/**
 * Gate 51: Unlighthouse sweep contract (HAUSSMANN P4.4b B2a, AC3/V3).
 *
 * AC3 (as amended ×2, signed 2026-08-26): the sweep runs over the CI-built artifact,
 * weekly, FAILING LOUDLY into CI, and the AC1×AC3 co-run prohibition is ENFORCED, NOT
 * STATED — the sweep workflow joins gates.yml's `concurrency:` group. A contract that
 * lives only in workflow comments can rot in silence; these assertions read the two
 * workflow files as data, so every clause reds under mutation
 * (scripts/unlighthouse_sweep_redtest.sh).
 *
 *   G51a — the sweep workflow exists, is scheduled weekly, and is hand-runnable
 *   G51b — co-run prohibition ENFORCED: identical concurrency group string to gates.yml,
 *          and the sweep QUEUES (cancel-in-progress false) rather than cancelling gates
 *   G51c — fails loudly: no continue-on-error anywhere; runner version-pinned; and the
 *          budget default is DERIVED-EQUAL to gate-19's standing bar (transcription
 *          drift detector — if gate-19's bar moves, this forces the sweep's to move
 *          in the same diff; provenance beyond that is B2b's owed work, F-e)
 *   G51d — build discipline: `npx astro build`, never `npm run build` (convention 6)
 */
import { test, expect } from '@playwright/test';
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';

const SITE_ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const WF_DIR = join(SITE_ROOT, '..', '.github', 'workflows');
const SWEEP_PATH = join(WF_DIR, 'unlighthouse-sweep.yml');
const GATES_PATH = join(WF_DIR, 'gates.yml');
const CONFIG_PATH = join(SITE_ROOT, 'unlighthouse.config.ts');
const GATE19_PATH = join(SITE_ROOT, 'tests', 'gates', 'gate-19-lighthouse-budget.spec.ts');

function loadSweep(): { raw: string; doc: any } {
  const raw = readFileSync(SWEEP_PATH, 'utf-8');
  return { raw, doc: parse(raw) };
}

test('G51a Sweep contract: workflow exists, scheduled weekly, hand-runnable', () => {
  expect(existsSync(SWEEP_PATH), 'unlighthouse-sweep.yml must exist').toBe(true);
  const { doc } = loadSweep();

  const on = doc.on ?? doc[true]; // yaml 1.1 parsers read bare `on` as boolean true
  expect(on, 'workflow must declare triggers').toBeTruthy();
  const schedule = on.schedule;
  expect(Array.isArray(schedule) && schedule.length >= 1, 'a schedule: trigger must exist').toBe(true);

  const cron: string = schedule[0].cron;
  const fields = cron.trim().split(/\s+/);
  expect(fields.length, `cron "${cron}" must have 5 fields`).toBe(5);
  // Weekly = a specific day-of-week, not every day.
  expect(fields[4], `cron "${cron}" must pin a day-of-week (weekly, AC3)`).not.toBe('*');
  expect(fields[2], `cron "${cron}" must not also pin a day-of-month`).toBe('*');

  expect('workflow_dispatch' in on, 'workflow_dispatch must exist (red-proof + on-demand runs)').toBe(true);
});

test('G51b Sweep contract: co-run prohibition ENFORCED via gates.yml’s own group', () => {
  const { doc } = loadSweep();
  const gates = parse(readFileSync(GATES_PATH, 'utf-8'));

  const gatesGroup = gates.concurrency?.group;
  const sweepGroup = doc.concurrency?.group;
  expect(gatesGroup, 'gates.yml must carry the concurrency group this contract cites').toBeTruthy();
  expect(
    sweepGroup,
    'the sweep must declare a concurrency group — without one it co-runs freely',
  ).toBeTruthy();
  expect(
    sweepGroup,
    `the sweep must JOIN gates.yml's group (${gatesGroup}), never declare its own — the enforcement IS the shared string`,
  ).toBe(gatesGroup);

  expect(
    doc.concurrency?.['cancel-in-progress'],
    'the sweep must QUEUE behind a running gate lane (cancel-in-progress: false), not cancel it',
  ).toBe(false);
});

test('G51c Sweep contract: fails loudly — no continue-on-error, pinned runner, bar derived-equal to gate-19', () => {
  const { raw, doc } = loadSweep();

  expect(
    raw.match(/^\s*continue-on-error\s*:/m),
    'continue-on-error anywhere in the sweep converts a red budget into a green run — forbidden',
  ).toBeNull();

  const steps: Array<{ run?: string }> = doc.jobs?.sweep?.steps ?? [];
  const sweepStep = steps.find((s) => s.run?.includes('unlighthouse-ci'));
  expect(sweepStep, 'a step must run unlighthouse-ci').toBeTruthy();
  expect(
    sweepStep!.run,
    'the runner must be version-pinned (@unlighthouse/cli@x.y.z) — a floating tag is not reproducible',
  ).toMatch(/@unlighthouse\/cli@\d+\.\d+\.\d+/);

  // Transcription drift detector: the config's default bar must equal gate-19's standing
  // bar (perfMin × 100). If gate-19's budget moves, this gate forces the sweep's bar to
  // move in the same diff (ADR-057's same-diff law, applied to a transcribed number).
  const config = readFileSync(CONFIG_PATH, 'utf-8');
  const configBar = config.match(/UNLIGHTHOUSE_BUDGET_PERF\s*\?\?\s*(\d+)/)?.[1];
  expect(configBar, 'unlighthouse.config.ts must carry a numeric default perf bar').toBeTruthy();
  const gate19 = readFileSync(GATE19_PATH, 'utf-8');
  const perfMin = gate19.match(/perfMin:\s*([\d.]+)/)?.[1];
  expect(perfMin, 'gate-19 must carry perfMin (the standing bar this sweep transcribes)').toBeTruthy();
  expect(
    Number(configBar),
    `sweep bar (${configBar}) must equal gate-19's perfMin × 100 (${Number(perfMin) * 100}) — it is a TRANSCRIPTION and must not drift (provenance itself is B2b/F-e, owed)`,
  ).toBe(Number(perfMin) * 100);
  expect(
    config.includes('gate-19'),
    'the config must name the source it transcribed from (convention 4 interim clause)',
  ).toBe(true);
});

test('G51d Sweep contract: builds with npx astro build, never npm run build', () => {
  const { doc } = loadSweep();
  const steps: Array<{ run?: string }> = doc.jobs?.sweep?.steps ?? [];
  const buildStep = steps.find((s) => s.run?.includes('astro build'));
  expect(buildStep, 'a build step must exist').toBeTruthy();
  expect(buildStep!.run).toContain('npx astro build');
  const anyNpmBuild = steps.some((s) => s.run?.includes('npm run build'));
  expect(
    anyNpmBuild,
    'npm run build regenerates committed data from sibling vaults absent in CI (convention 6) — forbidden',
  ).toBe(false);
});
