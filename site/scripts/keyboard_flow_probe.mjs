/**
 * keyboard_flow_probe.mjs — the keyboard-only manual pass (HAUSSMANN P4.3 O1, AC2).
 *
 * gate-47 asserts the PROPERTIES of a tab walk (ring, order, no trap, not obscured). This probe
 * exercises the FLOWS: it drives each primary journey with the keyboard alone and records what
 * happened, because "every primary flow traversed" is a claim about journeys completing, not about
 * focus rectangles. Its output is the evidence behind artifacts/p4_3/keyboard_traversal_record.md.
 *
 * It is a RECORD PRODUCER, not a gate: it reports, it does not assert. Anything it finds that should
 * hold forever becomes an assertion in gate-47 rather than a green line here.
 *
 * Usage:  node scripts/keyboard_flow_probe.mjs http://localhost:4321
 */
import { chromium } from '@playwright/test';

const BASE = process.argv[2] || 'http://localhost:4321';
const results = [];
const record = (flow, step, outcome, detail = '') =>
  results.push({ flow, step, outcome, detail });

const browser = await chromium.launch();
const newPage = async () => {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  return { ctx, page: await ctx.newPage() };
};

/** Tab until `pred` matches the focused element, up to `max` presses. Returns steps or -1. */
const tabTo = async (page, pred, max = 80) => {
  for (let i = 1; i <= max; i++) {
    await page.keyboard.press('Tab');
    if (await page.evaluate(pred)) return i;
  }
  return -1;
};
const focusInfo = (page) =>
  page.evaluate(() => {
    const el = document.activeElement;
    if (!el || el === document.body) return { tag: 'BODY' };
    return {
      tag: el.tagName.toLowerCase(),
      cls: String(el.className || '').slice(0, 40),
      text: (el.textContent || '').trim().slice(0, 40),
      id: el.id || null,
    };
  });

// ── FLOW A — bypass: skip link is reachable, visible, and actually moves focus into main ───────
{
  const { ctx, page } = await newPage();
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  await page.evaluate(() => document.activeElement?.blur());
  await page.keyboard.press('Tab');
  const first = await focusInfo(page);
  record('A bypass', 'first Tab focuses the skip link', first.cls.includes('skip-link') ? 'PASS' : 'FAIL', `${first.tag}.${first.cls} "${first.text}"`);
  await page.keyboard.press('Enter');
  await page.waitForTimeout(300);
  const after = await page.evaluate(() => {
    const el = document.activeElement;
    const main = document.querySelector('main, #main, [role="main"]');
    return {
      hash: location.hash,
      inMain: !!(main && el && (main.contains(el) || main === el)),
      active: el ? `${el.tagName.toLowerCase()}#${el.id || ''}` : 'none',
    };
  });
  record('A bypass', 'Enter moves focus past the nav', after.inMain ? 'PASS' : 'PARTIAL', `hash=${after.hash} focus=${after.active}`);
  await ctx.close();
}

// ── FLOW B — the header "More" disclosure, keyboard only ──────────────────────────────────────
// ⚠ The first run of this flow reported FAIL "not reachable in 80 presses". It is not a keyboard
// defect: the control DOES NOT RENDER. `Header.astro:38` emits `<details class="nav-more">` only
// when a topNav entry has `children`, and `navigation.ts:76-84` has SEVEN FLAT ENTRIES AND NONE
// WITH CHILDREN — so `moreEntry` is undefined and the disclosure is never built (`grep -c nav-more
// dist/index.html` → 0). Reported as ABSENT rather than as unreachable, because the two have
// different remedies and only one of them is an accessibility problem.
{
  const { ctx, page } = await newPage();
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  const present = await page.evaluate(() => document.querySelectorAll('.nav-more').length);
  if (!present) {
    record('B disclosure', 'the header "More" disclosure renders at all', 'ABSENT', 'topNav has 7 flat entries, none with children — the <details> branch never runs. Not a keyboard defect; dead CSS + two source comments that describe a control the build does not ship. /glossary and /how remain reachable from the footer on every page, so nothing is stranded.');
  }
  await page.evaluate(() => document.activeElement?.blur());
  const steps = present
    ? await tabTo(page, () => document.activeElement?.classList?.contains('nav-more-summary'))
    : -1;
  if (present) record('B disclosure', 'reachable by Tab', steps > 0 ? 'PASS' : 'FAIL', `${steps} presses`);
  if (steps > 0) {
    await page.keyboard.press('Enter');
    await page.waitForTimeout(200);
    const open = await page.evaluate(() => document.querySelector('.nav-more')?.hasAttribute('open'));
    record('B disclosure', 'Enter opens the panel', open ? 'PASS' : 'FAIL', `open=${open}`);
    const next = await tabTo(page, () => !!document.activeElement?.closest('.nav-more'), 4);
    record('B disclosure', 'Tab enters the opened panel', next > 0 ? 'PASS' : 'FAIL', (await focusInfo(page)).text);
    await page.keyboard.press('Escape');
    await page.waitForTimeout(150);
    const stillOpen = await page.evaluate(() => document.querySelector('.nav-more')?.hasAttribute('open'));
    record('B disclosure', 'Escape closes the panel', stillOpen ? 'NOTE' : 'PASS', stillOpen ? 'still open — native <details> does not close on Escape' : 'closed');
  }
  await ctx.close();
}

// ── FLOW C — theme toggle by keyboard ─────────────────────────────────────────────────────────
{
  const { ctx, page } = await newPage();
  await page.goto(BASE + '/', { waitUntil: 'networkidle' });
  await page.evaluate(() => document.activeElement?.blur());
  const before = await page.evaluate(() => document.documentElement.className);
  const steps = await tabTo(page, () => document.activeElement?.classList?.contains('dark-mode-toggle'));
  record('C theme', 'toggle reachable by Tab', steps > 0 ? 'PASS' : 'FAIL', `${steps} presses`);
  if (steps > 0) {
    await page.keyboard.press('Enter');
    await page.waitForTimeout(250);
    const after = await page.evaluate(() => document.documentElement.className);
    record('C theme', 'Enter flips the theme', before !== after ? 'PASS' : 'FAIL', `"${before}" → "${after}"`);
    const stillFocused = await page.evaluate(() => document.activeElement?.classList?.contains('dark-mode-toggle'));
    record('C theme', 'focus is retained after activation', stillFocused ? 'PASS' : 'NOTE', stillFocused ? '' : 'focus moved — a keyboard user loses their place');
  }
  await ctx.close();
}

// ── FLOW D — registry: search + filter chips, keyboard only ───────────────────────────────────
{
  const { ctx, page } = await newPage();
  await page.goto(BASE + '/vaults', { waitUntil: 'networkidle' });
  await page.evaluate(() => document.activeElement?.blur());
  const steps = await tabTo(page, () => document.activeElement?.matches('input[type="search"], input[type="text"], .vaults-search input'));
  record('D registry', 'search field reachable by Tab', steps > 0 ? 'PASS' : 'FAIL', `${steps} presses`);
  if (steps > 0) {
    const before = await page.evaluate(() => document.querySelector('.vaults-result-count')?.textContent?.trim());
    await page.keyboard.type('zzzznomatch');
    await page.waitForTimeout(350);
    const after = await page.evaluate(() => document.querySelector('.vaults-result-count')?.textContent?.trim());
    record('D registry', 'typing changes the result count', before !== after ? 'PASS' : 'FAIL', `"${before}" → "${after}"`);
    record('D registry', 'zero-state is announced in words, not just a number', /nothing matched|no /i.test(after || '') ? 'PASS' : 'NOTE', `"${after}"`);
    // Clear, then reach a filter chip and operate it.
    for (let i = 0; i < 11; i++) await page.keyboard.press('Backspace');
    await page.waitForTimeout(250);
    // ⚠ The first run looked for `.chip-group` and reported "no chip within 12 presses". The site's
    // chips are `.filter-chip` inside `.vaults-filter-chips` (and `.facet-chip`) — the probe's
    // selector was wrong, not the page. Measured at the object from the built markup.
    // ⚠ …and the SECOND run landed on the chip that was ALREADY ACTIVE ("All 74"), then reported
    // "Enter changed nothing" — correct behaviour read as a defect. Skip active chips.
    const chipSteps = await tabTo(
      page,
      () => {
        const el = document.activeElement;
        const isChip = !!el?.closest('.vaults-filter-chips, .facet-chips') || !!el?.classList?.contains('filter-chip');
        return isChip && !el?.classList?.contains('is-active');
      },
      12,
    );
    const chipInfo = await focusInfo(page);
    record('D registry', 'a filter control is reachable from the search field', chipSteps > 0 ? 'PASS' : 'NOTE', chipSteps > 0 ? `${chipSteps} presses → ${chipInfo.tag} "${chipInfo.text}"` : 'no chip within 12 presses');
    if (chipSteps > 0) {
      const cBefore = await page.evaluate(() => document.querySelector('.vaults-result-count')?.textContent?.trim());
      await page.keyboard.press('Enter');
      await page.waitForTimeout(300);
      const cAfter = await page.evaluate(() => document.querySelector('.vaults-result-count')?.textContent?.trim());
      record('D registry', 'Enter on the filter changes the set', cBefore !== cAfter ? 'PASS' : 'NOTE', `"${cBefore}" → "${cAfter}"`);
    }
  }
  await ctx.close();
}

// ── FLOW E — /get-started: reach and activate a copy button ───────────────────────────────────
{
  const { ctx, page } = await newPage();
  await ctx.grantPermissions(['clipboard-read', 'clipboard-write']).catch(() => {});
  await page.goto(BASE + '/get-started', { waitUntil: 'networkidle' });
  await page.evaluate(() => document.activeElement?.blur());
  const steps = await tabTo(page, () => document.activeElement?.classList?.contains('copy-btn'));
  record('E install', 'copy button reachable by Tab', steps > 0 ? 'PASS' : 'FAIL', `${steps} presses`);
  if (steps > 0) {
    // ⚠ The first run compared `textContent` and reported "" → "" — the button is an icon with an
    // `aria-hidden` SVG and NO text, so that comparison could never move. The feedback the handler
    // actually gives is an `aria-label` swap to "Copied!" for 2s, and it only fires AFTER
    // `navigator.clipboard.writeText` resolves (hence the granted permission above).
    const read = () =>
      page.evaluate(() => {
        const b = document.activeElement;
        return { aria: b?.getAttribute('aria-label'), cls: String(b?.className || ''), live: !!document.querySelector('.code-block [aria-live]') };
      });
    const before = await read();
    await page.keyboard.press('Enter');
    await page.waitForTimeout(400);
    const after = await read();
    record('E install', 'activation changes the accessible name', before.aria !== after.aria ? 'PASS' : 'FAIL', `aria-label "${before.aria}" → "${after.aria}"`);
    record(
      'E install',
      'the confirmation is announced by a live region',
      after.live ? 'PASS' : 'NOTE',
      after.live ? '' : 'no aria-live near the code block: the ONLY confirmation is an aria-label swap on the focused button, which screen readers announce inconsistently. ⛩ O2 listening item. Also: if writeText REJECTS, the setAttribute never runs and there is no feedback at all.',
    );
  }
  await ctx.close();
}

// ── FLOW F — the graph keyboard twin: reach a node and follow it ──────────────────────────────
{
  const { ctx, page } = await newPage();
  await page.goto(BASE + '/vaults/graph/', { waitUntil: 'networkidle' });
  await page.evaluate(() => document.activeElement?.blur());
  const steps = await tabTo(page, () => !!document.activeElement?.closest('.graph-node-list, .hero-graph-nodelist'), 60);
  const info = await focusInfo(page);
  record('F graph twin', 'a graph node is reachable by Tab', steps > 0 ? 'PASS' : 'FAIL', steps > 0 ? `${steps} presses → "${info.text}"` : 'not reached in 60');
  if (steps > 0) {
    await page.keyboard.press('Enter');
    await page.waitForLoadState('networkidle').catch(() => {});
    await page.waitForTimeout(300);
    const url = page.url();
    record('F graph twin', 'Enter follows the node to its vault page', /\/vaults\/[^/]+\/?$/.test(url) ? 'PASS' : 'NOTE', url.replace(BASE, ''));
  }
  await ctx.close();
}

await browser.close();

const w = { flow: 14, step: 52, outcome: 8 };
console.log('\n' + 'FLOW'.padEnd(w.flow) + 'STEP'.padEnd(w.step) + 'OUTCOME'.padEnd(w.outcome) + 'DETAIL');
console.log('-'.repeat(120));
for (const r of results) {
  console.log(r.flow.padEnd(w.flow) + r.step.padEnd(w.step) + r.outcome.padEnd(w.outcome) + r.detail);
}
const fails = results.filter((r) => r.outcome === 'FAIL');
const notes = results.filter((r) => r.outcome === 'NOTE' || r.outcome === 'PARTIAL');
console.log(
  `\n${results.length} steps across 6 flows — ${results.filter((r) => r.outcome === 'PASS').length} PASS · ${notes.length} NOTE/PARTIAL · ${fails.length} FAIL`,
);
