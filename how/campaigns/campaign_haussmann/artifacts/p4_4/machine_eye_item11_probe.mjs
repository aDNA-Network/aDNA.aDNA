#!/usr/bin/env node
/* ============================================================================
 * machine_eye_item11_probe.mjs — decide machine-eye item 11 ("MCP server")
 * without letting the site's own prose vote.
 *
 * THE DEFECT THIS RETIRES (HAUSSMANN F-o):
 *
 *   Item 11's genesis probe (2026-08-16) had two halves — fetch the endpoints,
 *   and text-search the corpus for "mcp". The text half returned 0 then. It
 *   returns 11 now. NOTHING ABOUT THE SITE'S MCP CAPABILITY CHANGED: P3.1 grew
 *   llms-full.txt from 2 KB to ~950 KB and swept in incidental mentions
 *   (Playwright MCP named as a tool in /doctrine/visual-inspection, .mcp.json
 *   gitignore advice aimed at the reader, one vault description). A future
 *   `grep -c mcp` scores 11 and concludes item 11 MOVED. It has not.
 *
 *   The corpus changed underneath a static probe, and the probe's MEANING
 *   changed with it. Neither the probe nor the site did anything wrong.
 *
 * ⭐ WHY THE TEXT LIMB IS RETIRED RATHER THAN FILTERED — MEASURED 2026-08-24,
 *    AND IT IS NOT WHAT F-o's ROW PREDICTED.
 *
 *   The row offered "a negative filter or retirement". The obvious repair is to
 *   stop counting the substring "mcp" and count instead the tokens only a REAL
 *   MCP offering would emit — `adna-mcp-server`, `/.well-known/mcp.json`,
 *   `npx adna-mcp`. That was measured. `/.well-known/mcp.json` — the single most
 *   specific of them — returns 1 HIT ON A SITE THAT HAS NO MCP SERVER, because
 *   the changelog's "What is not here" section says, in as many words:
 *
 *     "There is no MCP server. One exists, it works, and it is not published —
 *      so nothing on this site mentions one, and `/.well-known/mcp.json`
 *      returns 404 rather than describing software you cannot install."
 *
 *   ⇒ A CAPABILITY-TOKEN PROBE HAS THE IDENTICAL DEFECT ONE LEVEL UP. This
 *   site's honesty stratum (campaign convention 1) guarantees it NAMES ITS OWN
 *   ABSENT CAPABILITIES IN PROSE. So every text probe for a capability token
 *   finds the site's disclosure OF THAT CAPABILITY'S ABSENCE and scores it as
 *   presence. The better the site's honesty, the more false the text limb —
 *   and a filter cannot fix a probe whose signal and noise are the same string.
 *
 *   The text limb is therefore ADVISORY ONLY. It is printed, because corpus
 *   drift is worth watching, and it CANNOT MOVE THE VERDICT.
 *
 * THE DECISION RULE: only the endpoint limb decides. A capability is something
 * the site OFFERS, not something it MENTIONS, and only a request can tell them
 * apart.
 *
 * EXIT CODES — the distinction is load-bearing (AC0's discipline, same reason):
 *   0  ABSENT       endpoints 404 — item 11 stands as recorded 2026-08-16
 *   1  MOVED        an endpoint answered — item 11 has genuinely changed
 *   2  UNREACHABLE  could not reach the target — WE DO NOT KNOW, and that is
 *                   reported as not-knowing, never as ABSENT.
 *
 *   Splitting 2 from 0 is the check_live_headers.mjs lesson (convention 14):
 *   that instrument printed "OK — no drift" for four months having read
 *   Vercel's SSO login page. An unreachable target must never be scored as a
 *   clean result. Redirects are NOT followed, for the same reason.
 *
 * WHY THE BASE URL IS A PLAIN ARGUMENT, unlike AC0's guarded --stamp-url:
 *   AC0 confines its URL override to --dry-run because check_alias_ancestry.mjs
 *   sits in a path that can PUBLISH, so an unguarded override would be a
 *   standing bypass. This probe reads and reports; it has no publish path and
 *   no side effect, so there is nothing for an override to bypass. Stated
 *   rather than left as an apparent inconsistency between two sibling scripts.
 *
 * Usage: node machine_eye_item11_probe.mjs [base-url] [corpus-path]
 *        base-url    default https://adna.network
 *        corpus-path default site/dist/llms-full.txt (advisory limb; optional)
 * ==========================================================================*/

import { readFileSync, existsSync } from 'node:fs';

const ABSENT = 0, MOVED = 1, UNREACHABLE = 2;

const base = (process.argv[2] || 'https://adna.network').replace(/\/$/, '');
const corpus = process.argv[3] || 'site/dist/llms-full.txt';

/* The endpoints a real MCP offering would answer on. Both are checked; either
 * one answering moves the item. */
const ENDPOINTS = ['/.well-known/mcp.json', '/mcp'];

/* Advisory only. Kept so corpus drift is visible, NEVER consulted for the
 * verdict — see the header. */
const ADVISORY_TOKENS = ['mcp', 'adna-mcp-server', '/.well-known/mcp.json'];

// -- endpoint limb (DECISIVE) -------------------------------------------------
const results = [];
for (const path of ENDPOINTS) {
  const url = `${base}${path}`;
  let res;
  try {
    res = await fetch(url, { redirect: 'manual', signal: AbortSignal.timeout(15000) });
  } catch (err) {
    console.error(`\n⛔ UNREACHABLE — ${url}\n${err.message}`);
    console.error('\nThis is NOT evidence that item 11 is absent. It is evidence of nothing.\n');
    process.exit(UNREACHABLE);
  }
  /* A redirect is not an answer and it is not a 404 either. We refuse to
   * interpret it, for the reason in the header. */
  if (res.status >= 300 && res.status < 400) {
    console.error(`\n⛔ UNREACHABLE — ${url} redirected (${res.status} → ${res.headers.get('location')})`);
    console.error('Redirects are not followed: a login wall is indistinguishable from an answer.\n');
    process.exit(UNREACHABLE);
  }
  results.push({ url, status: res.status });
}

// -- text limb (ADVISORY — printed, never decisive) ---------------------------
let advisory = null;
if (existsSync(corpus)) {
  const text = readFileSync(corpus, 'utf8').toLowerCase();
  advisory = ADVISORY_TOKENS.map((t) => {
    const n = text.split(t.toLowerCase()).length - 1;
    return `${t} = ${n}`;
  }).join(' · ');
}

// -- verdict ------------------------------------------------------------------
const answered = results.filter((r) => r.status >= 200 && r.status < 300);

console.log('\nmachine-eye item 11 — MCP server');
console.log('─'.repeat(62));
console.log('ENDPOINT LIMB (decisive):');
for (const r of results) console.log(`  ${String(r.status).padEnd(4)} ${r.url}`);
if (advisory !== null) {
  console.log(`ADVISORY LIMB (corpus drift, NOT a vote): ${advisory}`);
  console.log('  ⚠ a non-zero count here means the site MENTIONS MCP, which is not');
  console.log('    the same claim as offering one, and includes the changelog');
  console.log('    sentence disclosing that it does NOT offer one.');
} else {
  console.log(`ADVISORY LIMB: skipped — no corpus at ${corpus}`);
}
console.log('─'.repeat(62));

if (answered.length > 0) {
  console.log(`⭐ VERDICT: MOVED — ${answered.map((r) => r.url).join(', ')} answered.`);
  console.log('   Item 11 has genuinely changed. Update machine_eye.md.\n');
  process.exit(MOVED);
}

console.log('✅ VERDICT: ABSENT — no endpoint answers. Item 11 stands as recorded 2026-08-16.\n');
process.exit(ABSENT);
