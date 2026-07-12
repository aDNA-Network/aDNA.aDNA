#!/usr/bin/env node
// Summarize a directory of Lighthouse JSON reports (lh_*.json) into a compact scores + CWV table.
// Storyweave P3 measure — pre-seeds P5's per-surface perf budget. Reusable.
//   node scripts/lh_summarize.mjs [dir]   (default: how/missions/artifacts/storyweave_p3_measure/lighthouse)
import { readdirSync, readFileSync } from 'node:fs';
const dir = process.argv[2] || 'how/missions/artifacts/storyweave_p3_measure/lighthouse';
const pct = (x) => (x && x.score != null ? Math.round(x.score * 100) : '?');
const files = readdirSync(dir).filter((f) => f.startsWith('lh_') && f.endsWith('.json')).sort();
const rows = [];
for (const f of files) {
  try {
    const j = JSON.parse(readFileSync(`${dir}/${f}`, 'utf8'));
    const c = j.categories, a = j.audits;
    rows.push({
      surface: f.replace(/^lh_|\.json$/g, ''),
      url: (j.finalDisplayedUrl || j.finalUrl || '').replace('https://adna.network', ''),
      perf: pct(c.performance), a11y: pct(c.accessibility), bp: pct(c['best-practices']), seo: pct(c.seo),
      LCP: a['largest-contentful-paint']?.displayValue || '?',
      CLS: a['cumulative-layout-shift']?.displayValue || '?',
      TBT: a['total-blocking-time']?.displayValue || '?',
      FCP: a['first-contentful-paint']?.displayValue || '?',
    });
  } catch (e) { rows.push({ surface: f, err: e.message.slice(0, 80) }); }
}
// Markdown table
const cols = ['surface', 'url', 'perf', 'a11y', 'bp', 'seo', 'LCP', 'CLS', 'TBT', 'FCP'];
console.log('| ' + cols.join(' | ') + ' |');
console.log('|' + cols.map(() => '---').join('|') + '|');
for (const r of rows) console.log('| ' + cols.map((c) => (r[c] ?? (r.err ? 'ERR' : '?'))).join(' | ') + ' |');
console.log('\nJSON:\n' + JSON.stringify(rows, null, 2));
