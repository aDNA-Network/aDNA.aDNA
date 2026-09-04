#!/usr/bin/env node
/**
 * flake_rate_measure.mjs — the rate harness (HAUSSMANN GR-5 O1 · AC-1).
 *
 * ⛩ WHY THIS EXISTS. `F-ab` (register §21.2, extended §22.4) is the finding that four gate families
 * pass and fail on identical bytes. Every observation of it so far has been a RUN — a single red, a
 * single rerun-green, a 3/5-vs-2/5 pair — and this mission's headline is that
 *
 *     ⇒ A CONTROL IS A RATE, NOT A RUN.
 *
 * This file is the instrument that turns runs into rates. It measures; it fixes nothing and it
 * changes no gate. `AC-3`'s pin and `AC-2`'s mechanism verdict both consume what this produces.
 *
 * ────────────────────────────────────────────────────────────────────────────────────────────────
 * WHAT THE CONVENTION-13 PASS REQUIRED OF THIS FILE, and where each requirement lives
 * ────────────────────────────────────────────────────────────────────────────────────────────────
 *
 * DEFECT-1 — PARAMETERISED BY TREE **AND** CONFIG FROM THE FIRST LINE. `AC-2` consumes this same
 *   instrument pointed at a MODIFIED config (`reducedMotion` on/off). A harness hard-wired to one
 *   tree and one config forces a second instrument to be authored at a sitting's tail, which is this
 *   campaign's most-repeated defect — six of this desk's instruments have shipped wrong under exactly
 *   those conditions. ⇒ `--tree` and `--config-override`, both here from the start, both exercised by
 *   the self-test.
 *
 * DEFECT-4 — `n` IS NAMED AND ITS POWER IS STATED, NEVER IMPLIED. The criterion this file serves was
 *   itself defective: its method said "≥N runs" and its test said "reports a rate", with N never
 *   named. At §22.4's measured 40–60 % flake, **n=5 cannot separate 40 % from 60 %** — so an
 *   instrument that prints `2/5 = 40 %` emits a number that LOOKS like a rate and licenses
 *   conclusions it cannot support. ⇒ every family reports its Wilson 95 % interval, the harness
 *   computes and prints `n_required`, and an interval that spans the hypothesis band is reported
 *   **INCONCLUSIVE**, never as a rate. ⭐ That is this mission's own headline arriving one level up,
 *   inside the criterion written to fix it.
 *
 * GR-3's ATTRIBUTION CLAUSE — *a demonstration is only worth what it can attribute.* A family-level
 *   rate that cannot say WHICH assertion failed is the same defect as a red-test case that reds via
 *   the wrong assertion. ⇒ results are collected PER TEST TITLE from Playwright's JSON reporter and
 *   aggregated upward, so any family rate can be decomposed after the fact without re-running.
 *
 * CONVENTION 18 — STATE THE SURFACE, AND WHETHER IT IS THE SURFACE THE CLAIM IS ABOUT. The `g49home`
 *   family is **refused on the host** rather than run and caveated: on this Mac, against container
 *   baselines, EVERY screenshot diffs on font rasterisation, so a host run measures rasterisation and
 *   reports it as flake. It is routed through the existing `visual_regression_container.sh` — the
 *   instrument that already owns that surface — never re-implemented here.
 *
 * ⭐ ONE THING THIS HARNESS DOES THAT NO CRITERION ASKED FOR, and the reason it is free.
 *   `F-ab`'s stated mechanism is that these assertions are *"bets on how busy the machine is"* —
 *   a hypothesis the campaign has **asserted and never tested**. `os.loadavg()` and the run's own
 *   wall-clock are recorded BEFORE AND AFTER EVERY RUN, so the load↔failure relationship is
 *   measurable from this same data set. ⛔ It is recorded, NOT concluded from: a correlation over
 *   n=20 on one machine is an observation, and the report says so. This adds no second instrument
 *   (conventions 15/16/17 all ruled against authoring one at a sitting's tail) — it adds two numbers
 *   to a record that was already being written.
 *
 * ────────────────────────────────────────────────────────────────────────────────────────────────
 * USAGE (from site/)
 * ────────────────────────────────────────────────────────────────────────────────────────────────
 *   node scripts/flake_rate_measure.mjs --n 20
 *   node scripts/flake_rate_measure.mjs --n 20 --families g47 --label baseline
 *   node scripts/flake_rate_measure.mjs --n 20 --families g47 --label reduced \
 *        --config-override reducedMotion=reduce                       # AC-2's second arm
 *   node scripts/flake_rate_measure.mjs --n 10 --tree 3889c29 --label control
 *   node scripts/flake_rate_measure.mjs --self-test                   # convention 14
 *
 * ⚠ BUILD DISCIPLINE (campaign convention 6): the gates run against `dist/` via `astro preview`.
 *   This harness does NOT build for you on the working tree — it asserts `dist/` exists and tells you
 *   the two commands, because `npm run build` regenerates committed data and `astro build` alone
 *   leaves gate-30's redirect assertions red on a perfectly good tree. For `--tree` it builds the
 *   worktree itself, with exactly those two commands.
 */
import { execFileSync, spawnSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, rmSync, unlinkSync, writeFileSync } from 'node:fs';
import { availableParallelism, loadavg, tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

/* ────────────────────────────────────────────────────────────────────────────────────────────────
 * THE FAMILY FRAME — derived from `F-ab`, and asserted rather than assumed.
 *
 * `AMENDMENT 1` took the surface count 3 → 4. The frame is pinned here with a floor so that a
 * family silently disappearing (a renamed test title, a deleted spec) reads as an ERROR and not as
 * a clean measurement — `G53c`'s lesson: a coverage floor goes stale the moment its subject grows,
 * so it is raised in the commit that grows it.
 * ────────────────────────────────────────────────────────────────────────────────────────────────*/
const FAMILY_FLOOR = 4;

const FAMILIES = {
  g39: {
    id: 'g39',
    label: 'gate-39 · figure typeset floor (netdiagram-svg)',
    project: 'chromium',
    grep: 'G39 figure-typeset',
    surface: 'local `astro preview` over dist/',
    why: 'F-ab(a)+(b): the 7.9px pin came from a local run CI does not reproduce (CI read 7.4). DATUM 1: pass 33917725977 / fail 33918391804 on byte-identical bytes.',
  },
  g42b: {
    id: 'g42b',
    label: 'gate-42 · G42b console clean',
    project: 'chromium',
    grep: 'G42b',
    surface: 'local `astro preview` — ⚠ NO vercel.json headers, so no CSP (convention 18, and gate-42\'s own known blindness)',
    why: 'F-ab: failed-then-passed on retry in the 09-03 post-addendum run. GR-3 fixed a drain race here and stated the residual: a page that goes quiet and THEN fires can still be raced.',
  },
  g47: {
    id: 'g47',
    label: 'gate-47 · keyboard traversal (incl. Shift+Tab walks back)',
    project: 'chromium',
    grep: 'G47 keyboard',
    surface: 'local `astro preview` over dist/',
    why: 'F-ab extended §22.4: Shift+Tab fails IN ISOLATION, control 3/5 vs changed 2/5 — so the increment was not implicated and n=5 could not say more.',
  },
  g49home: {
    id: 'g49home',
    label: 'gate-49 · home (visual regression, zero tolerance)',
    project: 'snapshot',
    grep: 'home',
    container: true,
    surface: 'IN-CONTAINER only (mcr.microsoft.com/playwright:v1.59.1-noble) — the host surface measures font rasterisation, not flake',
    why: 'AMENDMENT 1: 17px dark / 19px light with no size change, measured inside the container the AC1 amendment specifies — falsifying playwright.config.ts\'s own stated premise for maxDiffPixels: 0.',
  },
};

/* ────────────────────────────────────────────────────────────────────────────────────────────────
 * STATISTICS — Wilson score interval, and the honest verdict rule.
 *
 * Wilson rather than the normal approximation on purpose: at k=0 or k=n (which n=5 produces
 * constantly) the normal interval collapses to zero width and would report a 0 % or 100 % rate with
 * NO uncertainty — precisely the false confidence DEFECT-4 exists to prevent.
 * ────────────────────────────────────────────────────────────────────────────────────────────────*/
const Z = 1.959963985; // 95 %

function wilson(k, n) {
  if (n === 0) return { lo: 0, hi: 1 };
  const p = k / n;
  const z2 = Z * Z;
  const denom = 1 + z2 / n;
  const centre = (p + z2 / (2 * n)) / denom;
  const half = (Z * Math.sqrt((p * (1 - p)) / n + z2 / (4 * n * n))) / denom;
  return { lo: Math.max(0, centre - half), hi: Math.min(1, centre + half) };
}

/* n needed for a 95 % interval's HALF-WIDTH to fall below half the hypothesis band, at the
 * worst case p=0.5 (widest interval). This is the number DEFECT-4 asked for and nobody had computed:
 * for the 40–60 % band it comes out at ~96, which is why "n=5 cannot separate 40 % from 60 %" is a
 * statement about arithmetic rather than a matter of taste. */
function nRequired(lo, hi) {
  const halfBand = (hi - lo) / 2;
  if (halfBand <= 0) return Infinity;
  return Math.ceil((Z * Z * 0.25) / (halfBand * halfBand));
}

/* ⛔ THE VERDICT RULE, and it is deliberately conservative.
 *
 * INCONCLUSIVE when the interval CONTAINS the whole hypothesis band — i.e. the measurement cannot
 * discriminate anywhere inside the range it was convened to discriminate within. AC-1's words:
 * "an interval that spans the hypothesis is reported as inconclusive, NEVER as a rate."
 *
 * STABLE / ALWAYS-FAILS are claimed only when the interval EXCLUDES the band entirely — a clean
 * separation — and even then the point estimate is printed beside the interval, never instead of it. */
function verdict(k, n, band) {
  const ci = wilson(k, n);
  const spansHypothesis = ci.lo <= band.lo && ci.hi >= band.hi;
  if (n === 0) return { code: 'NO-DATA', ci, note: 'no runs completed' };
  if (spansHypothesis) {
    return {
      code: 'INCONCLUSIVE',
      ci,
      note: `95% interval [${pct(ci.lo)}, ${pct(ci.hi)}] contains the whole hypothesis band [${pct(band.lo)}, ${pct(band.hi)}] — this n cannot discriminate inside it`,
    };
  }
  if (ci.hi < band.lo) {
    return { code: k === 0 ? 'STABLE' : 'BELOW-BAND', ci, note: `95% upper bound ${pct(ci.hi)} is below the band` };
  }
  if (ci.lo > band.hi) {
    return { code: 'ABOVE-BAND', ci, note: `95% lower bound ${pct(ci.lo)} is above the band` };
  }
  return { code: 'FLAKY', ci, note: `interval overlaps the band but does not span it` };
}

const pct = (x) => `${(x * 100).toFixed(1)}%`;

/* ────────────────────────────────────────────────────────────────────────────────────────────────
 * ARGUMENTS
 * ────────────────────────────────────────────────────────────────────────────────────────────────*/
function parseArgs(argv) {
  const a = {
    n: 20,
    families: ['g39', 'g42b', 'g47'],
    tree: null,
    configOverride: null,
    band: { lo: 0.4, hi: 0.6 }, // register §22.4's measured range
    port: Number(process.env.GATE_PORT || 4321),
    json: null,
    label: 'default',
    selfTest: false,
  };
  for (let i = 0; i < argv.length; i++) {
    const v = argv[i];
    const next = () => argv[++i];
    if (v === '--n') a.n = Number(next());
    else if (v === '--families') a.families = next().split(',').map((s) => s.trim()).filter(Boolean);
    else if (v === '--tree') a.tree = next();
    else if (v === '--config-override') a.configOverride = next();
    else if (v === '--hypothesis') { const [lo, hi] = next().split(',').map(Number); a.band = { lo, hi }; }
    else if (v === '--port') a.port = Number(next());
    else if (v === '--json') a.json = next();
    else if (v === '--label') a.label = next();
    else if (v === '--self-test') a.selfTest = true;
    else if (v === '--help' || v === '-h') { usage(); process.exit(0); }
    else { console.error(`✗ unknown argument: ${v}`); usage(); process.exit(2); }
  }
  return a;
}

function usage() {
  console.log(readFileSync(new URL(import.meta.url), 'utf8').split('*/')[0].replace(/^\/\*\*?/, '').replace(/^ \* ?/gm, ''));
}

/* ────────────────────────────────────────────────────────────────────────────────────────────────
 * CONFIG PARAMETERISATION (DEFECT-1, half 1)
 *
 * A temp TS config that SPREADS the base and patches exactly one project's `use` block. Written
 * beside playwright.config.ts because `testDir: './tests/gates'` is relative to the config's own
 * location — a temp config in /tmp resolves to nothing and would report "0 tests ran" as a pass,
 * which is the vacuous-green shape this campaign keeps finding.
 * ────────────────────────────────────────────────────────────────────────────────────────────────*/
function writeOverrideConfig(override, project) {
  const [key, raw] = override.split('=');
  if (!key || raw === undefined) {
    console.error(`✗ --config-override must be key=value (got: ${override})`);
    process.exit(2);
  }
  const value = raw === 'true' ? 'true' : raw === 'false' ? 'false' : Number.isFinite(Number(raw)) ? raw : JSON.stringify(raw);
  const path = resolve('playwright.flake.config.ts');
  writeFileSync(
    path,
    `// GENERATED by scripts/flake_rate_measure.mjs — GR-5 AC-1's config parameterisation (DEFECT-1).\n` +
      `// Deleted on exit. If you are reading this in a commit, something crashed: it is not source.\n` +
      `import base from './playwright.config';\n` +
      `const patched = { ...base, projects: (base.projects ?? []).map((p: any) =>\n` +
      `  p.name === ${JSON.stringify(project)} ? { ...p, use: { ...(p.use ?? {}), ${key}: ${value} } } : p) };\n` +
      `export default patched;\n`,
    'utf8',
  );
  return path;
}

/* ────────────────────────────────────────────────────────────────────────────────────────────────
 * TREE PARAMETERISATION (DEFECT-1, half 2)
 *
 * `git worktree add --detach` rather than checkout/stash: the working tree may be dirty (it is, on
 * this node, routinely), and a harness that mutates the operator's tree to take a measurement is a
 * worse defect than the one it measures. node_modules is symlinked — same platform, same host, so
 * unlike the container case there is no arch mismatch to guard against.
 * ────────────────────────────────────────────────────────────────────────────────────────────────*/
function setupWorktree(ref) {
  const sha = execFileSync('git', ['rev-parse', ref], { encoding: 'utf8' }).trim();
  const dir = mkdtempSync(join(tmpdir(), 'gr5-flake-'));
  const wt = join(dir, 'tree');
  console.log(`⛩ --tree ${ref} → ${sha.slice(0, 12)}; building a detached worktree at ${wt}`);
  execFileSync('git', ['worktree', 'add', '--detach', wt, sha], { stdio: 'inherit' });
  const site = join(wt, 'site');
  execFileSync('ln', ['-s', resolve('node_modules'), join(site, 'node_modules')]);
  // convention 6, verbatim: astro build (never `npm run build`, which regenerates committed data),
  // THEN inject_redirects, or gate-30 reds on a perfectly good tree.
  execFileSync('npx', ['astro', 'build'], { cwd: site, stdio: 'inherit' });
  execFileSync('node', ['scripts/inject_redirects.mjs', '.'], { cwd: site, stdio: 'inherit' });
  return { sha, dir, site };
}

/* ────────────────────────────────────────────────────────────────────────────────────────────────
 * RUN CLASSIFICATION — a PURE function over the parsed report, so the measurement path itself can be
 * demonstrated to fail (convention 14) without spawning anything.
 *
 * ⭐ This is GR-2's `freshnessStateFrom(probe)` shape, and it is here for the same reason: the
 * interesting logic was originally buried inside the function that shells out, where the only way to
 * test it is to reproduce the condition in the world. A harness whose own classification cannot be
 * red-proven is the thing this mission was convened about.
 *
 * ⛔ THE THREE STATES ARE NOT TWO. `pass` / `fail` / **`harness-error`** — and the third exists
 * because a run that exercised NOTHING must never be counted as a pass. That is the vacuous-green
 * shape this campaign has now found in a corpus excision, a coverage floor, a `grep -c` exiting 1,
 * and a red-test's own `failing_set()`.
 * ────────────────────────────────────────────────────────────────────────────────────────────────*/
export function classifyRun(tests, readError = null) {
  if (readError) return { harnessError: readError, failed: false, failedTitles: [], testCount: 0 };
  if (!Array.isArray(tests) || tests.length === 0) {
    return {
      harnessError: 'the grep matched ZERO tests — the frame is stale, this is not a green',
      failed: false, failedTitles: [], testCount: 0,
    };
  }
  const failedTitles = tests.filter((t) => !t.ok).map((t) => t.title);
  return { harnessError: null, failed: failedTitles.length > 0, failedTitles, testCount: tests.length };
}

/* ────────────────────────────────────────────────────────────────────────────────────────────────
 * ONE RUN
 * ────────────────────────────────────────────────────────────────────────────────────────────────*/
function runOnce(fam, { cwd, port, configPath, index, n }) {
  const jsonOut = join(tmpdir(), `gr5-pw-${process.pid}-${fam.id}-${index}.json`);
  const args = ['playwright', 'test', `--project=${fam.project}`, '--grep', fam.grep, '--reporter=json'];
  if (configPath) args.push('--config', configPath);

  const loadBefore = loadavg()[0];
  const t0 = Date.now();
  const r = spawnSync('npx', args, {
    cwd,
    encoding: 'utf8',
    env: { ...process.env, GATE_PORT: String(port), PLAYWRIGHT_JSON_OUTPUT_NAME: jsonOut },
    maxBuffer: 64 * 1024 * 1024,
  });
  const wallMs = Date.now() - t0;
  const loadAfter = loadavg()[0];

  // Per-test attribution (GR-3's clause). Playwright's JSON reporter writes the file even on
  // failure; if it is missing the run itself broke, which is a HARNESS condition, not a red.
  const tests = [];
  let readError = null;
  try {
    const report = JSON.parse(readFileSync(jsonOut, 'utf8'));
    const walk = (suites) => {
      for (const s of suites ?? []) {
        for (const spec of s.specs ?? []) {
          const st = spec.tests?.[0]?.results?.[0]?.status ?? 'unknown';
          tests.push({ title: spec.title, ok: spec.ok === true, status: st });
        }
        walk(s.suites);
      }
    };
    walk(report.suites);
  } catch (e) {
    readError = `could not read the JSON report (${e.message})`;
  } finally {
    try { unlinkSync(jsonOut); } catch { /* already gone */ }
  }

  const c = classifyRun(tests, readError);
  return {
    index: index + 1,
    of: n,
    exitCode: r.status,
    wallMs,
    loadBefore,
    loadAfter,
    ...c,
    stderrTail: c.harnessError ? (r.stderr ?? '').split('\n').slice(-6).join('\n') : undefined,
  };
}

function runOnceContainer(fam, { cwd, index, n }) {
  /* Delegated, never re-implemented (skill_cross_skill_primitive_composition): the container script
   * already owns the image pin, the vault mount and the node_modules volume, and each of those was a
   * finding when it was got wrong. It runs the WHOLE snapshot lane; the per-test attribution below
   * recovers `home` from its output, so the cost is wall-clock, not correctness. */
  const loadBefore = loadavg()[0];
  const t0 = Date.now();
  const r = spawnSync('bash', ['scripts/visual_regression_container.sh', 'check'], {
    cwd, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024,
  });
  const wallMs = Date.now() - t0;
  const out = `${r.stdout ?? ''}${r.stderr ?? ''}`;
  const homeLines = out.split('\n').filter((l) => /home/i.test(l) && /[✘✓]/.test(l));
  const failed = homeLines.some((l) => l.includes('✘'));
  return {
    index: index + 1, of: n, exitCode: r.status, wallMs,
    loadBefore, loadAfter: loadavg()[0],
    testCount: homeLines.length,
    failedTitles: failed ? homeLines.filter((l) => l.includes('✘')).map((l) => l.trim()) : [],
    failed,
    harnessError: homeLines.length === 0 ? 'no `home` line found in the container output — attribution failed, this is not a green' : null,
  };
}

/* ────────────────────────────────────────────────────────────────────────────────────────────────
 * SELF-TEST (convention 14 — this harness is not believed until it has been demonstrated to fail)
 * ────────────────────────────────────────────────────────────────────────────────────────────────*/
function selfTest() {
  const cases = [];
  const ok = (name, cond, detail) => cases.push({ name, pass: !!cond, detail });

  // Wilson: k=0,n=5 must NOT report a zero-width interval (the normal approximation's failure).
  const w05 = wilson(0, 5);
  ok('W1 Wilson at k=0,n=5 has real width (normal approx would give 0)', w05.hi > 0.3, `hi=${pct(w05.hi)}`);

  // The arithmetic DEFECT-4 rests on.
  const nreq = nRequired(0.4, 0.6);
  ok('W2 n_required for the 40–60% band is ~96 (so n=5 provably cannot separate)', nreq >= 90 && nreq <= 100, `n_required=${nreq}`);

  // The verdict rule must call n=5 @ 2 failures INCONCLUSIVE — this is §22.4's actual reading, and
  // the whole reason the criterion was amended.
  const v5 = verdict(2, 5, { lo: 0.4, hi: 0.6 });
  ok('W3 §22.4\'s own 2/5 reads INCONCLUSIVE, not "40%"', v5.code === 'INCONCLUSIVE', `verdict=${v5.code}`);

  // ...and a large clean run must NOT be called inconclusive, or the rule is vacuous in the other
  // direction (a verdict that is always INCONCLUSIVE certifies nothing).
  const v0 = verdict(0, 200, { lo: 0.4, hi: 0.6 });
  ok('W4 a clean n=200 reads STABLE (the rule is not vacuously inconclusive)', v0.code === 'STABLE', `verdict=${v0.code}`);

  const vHigh = verdict(200, 200, { lo: 0.4, hi: 0.6 });
  ok('W5 an always-failing n=200 reads ABOVE-BAND', vHigh.code === 'ABOVE-BAND', `verdict=${vHigh.code}`);

  // The family frame's own floor (G53c's lesson).
  ok('W6 the family frame carries all four F-ab surfaces', Object.keys(FAMILIES).length >= FAMILY_FLOOR, `${Object.keys(FAMILIES).length} families`);

  // Convention 18: the container family must be flagged so it can never silently run on the host.
  ok('W7 g49home is marked container-only (convention 18)', FAMILIES.g49home.container === true, '');

  /* ⛩ THE MEASUREMENT PATH ITSELF, RED-PROVEN. W1–W7 test the statistics; without W8–W11 this
   * harness would be believed on the strength of its arithmetic while the part that decides what a
   * "failure" IS had never been demonstrated to fail. That is convention 13's "a correct instrument
   * applied partially, reporting like a complete one", and it is the shape GR-3 found inside the
   * red-test harness whose whole job was enforcing convention 14 on everything else. */
  const zero = classifyRun([]);
  ok('W8 a grep matching ZERO tests is a HARNESS ERROR, never a pass', zero.harnessError !== null && zero.failed === false, zero.harnessError ?? '');

  const oneRed = classifyRun([{ title: 'G39 …(dark)', ok: false }, { title: 'G39 …(light)', ok: true }]);
  ok('W9 a failing test reads failed:true AND is attributable by title (GR-3)', oneRed.failed === true && oneRed.failedTitles.length === 1 && oneRed.harnessError === null, oneRed.failedTitles.join(','));

  const allGreen = classifyRun([{ title: 'a', ok: true }, { title: 'b', ok: true }]);
  ok('W10 an all-green run reads failed:false with no harness error', allGreen.failed === false && allGreen.harnessError === null && allGreen.testCount === 2, '');

  const unreadable = classifyRun([{ title: 'a', ok: true }], 'could not read the JSON report (boom)');
  ok('W11 an unreadable report is a HARNESS ERROR even when tests were parsed', unreadable.harnessError !== null && unreadable.failed === false, '');

  console.log('\n⛩ flake_rate_measure self-test — the harness demonstrated to fail before it is believed\n');
  for (const c of cases) console.log(`  ${c.pass ? '✓' : '✘'} ${c.name}${c.detail ? `  [${c.detail}]` : ''}`);
  const bad = cases.filter((c) => !c.pass).length;
  console.log(`\n  ${cases.length - bad} passed · ${bad} failed\n`);
  return bad === 0 ? 0 : 1;
}

/* ────────────────────────────────────────────────────────────────────────────────────────────────
 * MAIN
 * ────────────────────────────────────────────────────────────────────────────────────────────────*/
function main() {
  const a = parseArgs(process.argv.slice(2));
  if (a.selfTest) process.exit(selfTest());

  const unknown = a.families.filter((f) => !FAMILIES[f]);
  if (unknown.length) { console.error(`✗ unknown families: ${unknown.join(', ')}. Known: ${Object.keys(FAMILIES).join(', ')}`); process.exit(2); }

  // Convention 18, enforced rather than documented.
  for (const f of a.families) {
    if (FAMILIES[f].container && !existsSync('scripts/visual_regression_container.sh')) {
      console.error(`✗ ${f} is container-only and scripts/visual_regression_container.sh is missing.`); process.exit(2);
    }
  }

  let cwd = process.cwd();
  let treeLabel = 'WORKTREE';
  let treeSha = execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
  let worktree = null;
  if (a.tree) { worktree = setupWorktree(a.tree); cwd = worktree.site; treeLabel = a.tree; treeSha = worktree.sha; }

  if (!existsSync(join(cwd, 'dist', 'index.html'))) {
    console.error(`✗ ${join(cwd, 'dist')} has no index.html — the gates run against dist/ via astro preview.`);
    console.error('  Build it first, in this order (campaign convention 6):');
    console.error('    npx astro build            # NEVER `npm run build` — prebuild regenerates committed data');
    console.error('    node scripts/inject_redirects.mjs .   # or gate-30 reds on a perfectly good tree');
    process.exit(2);
  }

  let configPath = null;
  const cleanup = () => {
    if (configPath) { try { unlinkSync(configPath); } catch { /* fine */ } }
    if (worktree) {
      try { execFileSync('git', ['worktree', 'remove', '--force', join(worktree.dir, 'tree')], { stdio: 'ignore' }); } catch { /* fine */ }
      try { rmSync(worktree.dir, { recursive: true, force: true }); } catch { /* fine */ }
    }
  };
  process.on('exit', cleanup);
  process.on('SIGINT', () => { cleanup(); process.exit(130); });

  const started = new Date().toISOString();
  const nreq = nRequired(a.band.lo, a.band.hi);

  console.log('');
  console.log('════════════════════════════════════════════════════════════════════════════════');
  console.log('  GR-5 · AC-1 — FLAKE RATE MEASUREMENT');
  console.log('════════════════════════════════════════════════════════════════════════════════');
  console.log(`  started        ${started}`);
  console.log(`  arm label      ${a.label}`);
  console.log(`  tree           ${treeLabel} @ ${treeSha.slice(0, 12)}${a.tree ? '' : '  (working tree — may be dirty; see the report)'}`);
  console.log(`  config         ${a.configOverride ? `playwright.config.ts + override {${a.configOverride}}` : 'playwright.config.ts (unmodified)'}`);
  console.log(`  n per family   ${a.n}`);
  console.log(`  hypothesis     [${pct(a.band.lo)}, ${pct(a.band.hi)}]  (register §22.4's measured range)`);
  console.log(`  host           ${availableParallelism()} cores · load1 at open ${loadavg()[0].toFixed(2)}`);
  console.log('');
  console.log(`  ⛔ POWER, STATED BEFORE ANY NUMBER IS PRODUCED (AC-1 / DEFECT-4):`);
  console.log(`     to resolve a rate to within the ±${pct((a.band.hi - a.band.lo) / 2)} half-band at 95%, n must be ≥ ${nreq}.`);
  console.log(`     n=${a.n} ${a.n >= nreq ? 'MEETS' : 'DOES NOT MEET'} that. ${a.n >= nreq ? '' : 'Families whose interval spans the band will report INCONCLUSIVE — that is the correct'}`);
  if (a.n < nreq) console.log(`     result, not a shortfall to be talked around.`);
  console.log('');

  const results = [];
  for (const fid of a.families) {
    const fam = FAMILIES[fid];
    if (a.configOverride && !fam.container) configPath = writeOverrideConfig(a.configOverride, fam.project);

    console.log('────────────────────────────────────────────────────────────────────────────────');
    console.log(`  ${fam.label}`);
    console.log(`  surface: ${fam.surface}`);
    const invocation = fam.container
      ? `bash scripts/visual_regression_container.sh check   (cwd: ${cwd})`
      : `npx playwright test --project=${fam.project} --grep '${fam.grep}'${configPath ? ` --config ${configPath}` : ''}   (GATE_PORT=${a.port}, cwd: ${cwd})`;
    console.log(`  invocation (verbatim, V2's requirement): ${invocation}`);
    console.log('');

    const runs = [];
    for (let i = 0; i < a.n; i++) {
      const r = fam.container
        ? runOnceContainer(fam, { cwd, index: i, n: a.n })
        : runOnce(fam, { cwd, port: a.port, configPath, index: i, n: a.n });
      runs.push(r);
      const mark = r.harnessError ? '⚠' : r.failed ? '✘' : '✓';
      const detail = r.harnessError
        ? `HARNESS: ${r.harnessError}`
        : r.failed ? `failed: ${r.failedTitles.join(' | ').slice(0, 110)}` : `${r.testCount} tests ok`;
      console.log(`    ${mark} run ${String(i + 1).padStart(3)}/${a.n}  ${(r.wallMs / 1000).toFixed(1)}s  load1 ${r.loadBefore.toFixed(2)}→${r.loadAfter.toFixed(2)}  ${detail}`);
    }

    /* ⛔ HARNESS-ERROR RUNS ARE EXCLUDED FROM THE DENOMINATOR AND COUNTED SEPARATELY.
     * Folding them into `n` would let a broken harness read as a low flake rate — the exact
     * "a zero meaning the command failed, not the string is absent" defect from GR-4's own sitting. */
    const valid = runs.filter((r) => !r.harnessError);
    const broken = runs.length - valid.length;
    const k = valid.filter((r) => r.failed).length;
    const v = verdict(k, valid.length, a.band);

    // Per-test attribution, so a family rate can be decomposed without re-running (GR-3).
    const perTitle = {};
    for (const r of valid) for (const t of r.failedTitles) perTitle[t] = (perTitle[t] ?? 0) + 1;

    const walls = valid.map((r) => r.wallMs).sort((x, y) => x - y);
    const median = walls.length ? walls[Math.floor(walls.length / 2)] : 0;

    console.log('');
    console.log(`    n (valid)      ${valid.length}${broken ? `   ⚠ ${broken} run(s) EXCLUDED as harness errors — not counted as passes` : ''}`);
    console.log(`    failures       ${k}`);
    console.log(`    point rate     ${valid.length ? pct(k / valid.length) : 'n/a'}   ⚠ never quote this without the interval`);
    console.log(`    95% interval   [${pct(v.ci.lo)}, ${pct(v.ci.hi)}]`);
    console.log(`    VERDICT        ${v.code} — ${v.note}`);
    console.log(`    wall-clock     median ${(median / 1000).toFixed(1)}s · min ${(walls[0] / 1000 || 0).toFixed(1)}s · max ${((walls.at(-1) ?? 0) / 1000).toFixed(1)}s`);
    if (Object.keys(perTitle).length) {
      console.log(`    attribution    (which assertion actually failed — GR-3's clause)`);
      for (const [t, c] of Object.entries(perTitle).sort((x, y) => y[1] - x[1])) console.log(`                     ${String(c).padStart(3)}× ${t}`);
    }

    /* The load observation — recorded, explicitly not concluded from. */
    const failLoad = valid.filter((r) => r.failed).map((r) => r.loadBefore);
    const passLoad = valid.filter((r) => !r.failed).map((r) => r.loadBefore);
    const mean = (xs) => (xs.length ? xs.reduce((s, x) => s + x, 0) / xs.length : null);
    if (failLoad.length && passLoad.length) {
      console.log(`    load1 (obs)    mean at failure ${mean(failLoad).toFixed(2)} · mean at pass ${mean(passLoad).toFixed(2)}`);
      console.log(`                   ⛔ an OBSERVATION on one machine, not a test of F-ab's load hypothesis`);
    }
    console.log('');

    results.push({
      family: fam.id, label: fam.label, surface: fam.surface, why: fam.why, invocation,
      n: valid.length, harnessErrors: broken, failures: k,
      pointRate: valid.length ? k / valid.length : null,
      ci95: v.ci, verdict: v.code, verdictNote: v.note,
      wallMs: { median, min: walls[0] ?? null, max: walls.at(-1) ?? null, all: valid.map((r) => r.wallMs) },
      attribution: perTitle,
      loadObservation: failLoad.length && passLoad.length ? { meanLoadAtFailure: mean(failLoad), meanLoadAtPass: mean(passLoad) } : null,
      runs,
    });

    if (configPath) { try { unlinkSync(configPath); } catch { /* fine */ } configPath = null; }
  }

  const report = {
    _instrument: 'site/scripts/flake_rate_measure.mjs — GR-5 O1 / AC-1',
    _provenance: `n=${a.n} per family, hypothesis band [${a.band.lo}, ${a.band.hi}], n_required=${nreq}, tree ${treeLabel}@${treeSha}, config ${a.configOverride ?? 'unmodified'}, started ${started}`,
    label: a.label,
    tree: { ref: treeLabel, sha: treeSha, dirty: a.tree ? false : execFileSync('git', ['status', '--porcelain'], { encoding: 'utf8' }).trim().length > 0 },
    config: { base: 'playwright.config.ts', override: a.configOverride },
    n: a.n, hypothesisBand: a.band, nRequired: nreq,
    host: { cores: availableParallelism(), loadAtOpen: loadavg()[0] },
    families: results,
    finishedAt: new Date().toISOString(),
  };

  if (a.json) { writeFileSync(a.json, JSON.stringify(report, null, 2)); console.log(`  → machine-readable report: ${a.json}\n`); }

  console.log('════════════════════════════════════════════════════════════════════════════════');
  for (const r of results) console.log(`  ${r.verdict.padEnd(13)} ${r.label}   ${r.failures}/${r.n}${r.harnessErrors ? ` (+${r.harnessErrors} harness)` : ''}  95% [${pct(r.ci95.lo)}, ${pct(r.ci95.hi)}]`);
  console.log('════════════════════════════════════════════════════════════════════════════════\n');

  /* ⛔ EXIT 0 ON A MEASUREMENT. This is an instrument, not a gate: a flaky family is the FINDING,
   * not a failure of this run. It exits non-zero only when it could not measure — a harness error —
   * because that is the case where a silent 0 would be mistaken for a clean result. */
  const unmeasurable = results.filter((r) => r.n === 0 || r.harnessErrors > 0);
  process.exit(unmeasurable.length ? 1 : 0);
}

main();
