/**
 * Red-test for adna-mcp-server.
 *
 * Campaign convention 14: "A verification instrument is not believed until it has
 * been demonstrated to fail, and it must assert it reached the thing it claims to
 * check." `check_live_headers.mjs` printed "live-headers OK — no drift" having
 * read Vercel's SSO login page. P3.1 red-proved 13 assertions by mutation and
 * found three of its own new assertions were wrong.
 *
 * This file mutates the world under the server and asserts the assertions FIRE.
 * Part A drives each source-layer guard directly. Part B runs the entire smoke
 * suite against a decoy origin and requires it to exit non-zero — proving the
 * suite discriminates rather than always passing.
 */

import http from 'node:http';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Client } from '@modelcontextprotocol/client';
import { StdioClientTransport, getDefaultEnvironment } from '@modelcontextprotocol/client/stdio';

const here = dirname(fileURLToPath(import.meta.url));
const SERVER = join(here, '..', 'dist', 'index.js');
const SMOKE = join(here, 'smoke.mjs');

let passed = 0;
const failures = [];

function check(name, condition, detail = '') {
  if (condition) {
    passed += 1;
    console.log(`  ✓ ${name}`);
  } else {
    failures.push(`${name}${detail ? ` — ${detail}` : ''}`);
    console.log(`  ✗ ${name}${detail ? ` — ${detail}` : ''}`);
  }
}

const textOf = (r) => (r.content ?? []).filter((c) => c.type === 'text').map((c) => c.text).join('\n');

/** A decoy origin that answers every request the same wrong way. */
function startDecoy({ status = 200, contentType = 'text/html; charset=utf-8', body = '<!doctype html><html><body>404 — not found</body></html>' }) {
  return new Promise((resolve) => {
    const server = http.createServer((_req, res) => {
      res.writeHead(status, { 'content-type': contentType });
      res.end(body);
    });
    server.listen(0, '127.0.0.1', () => {
      const { port } = server.address();
      resolve({
        origin: `http://127.0.0.1:${port}`,
        close: () => new Promise((r) => server.close(r)),
      });
    });
  });
}

async function withServerAt(origin, fn) {
  const transport = new StdioClientTransport({
    command: process.execPath,
    args: [SERVER],
    env: { ...getDefaultEnvironment(), ADNA_ORIGIN: origin },
  });
  const client = new Client({ name: 'adna-mcp-redtest', version: '0.0.0' });
  await client.connect(transport);
  try {
    return await fn(client);
  } finally {
    await client.close();
  }
}

async function main() {
  /* ---- A1: 200 with the WRONG content-type — the exact F-f failure mode ---- */
  console.log('\n[A1] 200 OK carrying text/html — the failure mode that made a login page look like success');
  {
    const decoy = await startDecoy({ status: 200, contentType: 'text/html; charset=utf-8' });
    await withServerAt(decoy.origin, async (client) => {
      for (const [tool, args] of [
        ['search_docs', { query: 'anything' }],
        ['fetch_page', { path: '/glossary' }],
        ['query_registry', { vault: 'operations' }],
        ['lookup_spec_glossary', { term: 'lattice' }],
      ]) {
        const r = await client.callTool({ name: tool, arguments: args });
        const t = textOf(r);
        check(`${tool} rejects a 200 with the wrong content-type`, r.isError === true, t.slice(0, 160));
        check(`${tool} names the content-type mismatch`, /content-type is "text\/html/.test(t), t.slice(0, 160));
        check(`${tool} returns no decoy body`, !/not found<\/body>/.test(t));
      }
    });
    await decoy.close();
  }

  /* ---- A2: non-200 ---- */
  console.log('\n[A2] 503 — the res.ok assertion');
  {
    const decoy = await startDecoy({ status: 503, contentType: 'text/plain' });
    await withServerAt(decoy.origin, async (client) => {
      const r = await client.callTool({ name: 'fetch_page', arguments: { path: '/glossary' } });
      const t = textOf(r);
      check('fetch_page rejects a 503', r.isError === true);
      check('the failure names the status', /HTTP 503/.test(t), t.slice(0, 160));
    });
    await decoy.close();
  }

  /* ---- A3: right type, unparseable corpus ---- */
  console.log('\n[A3] 200 text/plain with no page headers — the empty-corpus guard');
  {
    const decoy = await startDecoy({ status: 200, contentType: 'text/plain; charset=utf-8', body: 'plausible but headerless\n' });
    await withServerAt(decoy.origin, async (client) => {
      const r = await client.callTool({ name: 'search_docs', arguments: { query: 'anything' } });
      const t = textOf(r);
      check('search_docs refuses a corpus it could not parse', r.isError === true);
      check('the failure says zero page headers parsed', /zero page headers parsed/.test(t), t.slice(0, 200));
      check('it does NOT report "no pages matched"', !/No pages matched/.test(t));
    });
    await decoy.close();
  }

  /* ---- A4: right type, wrong shape ---- */
  console.log('\n[A4] 200 application/json without a vaults array — the shape guard');
  {
    const decoy = await startDecoy({ status: 200, contentType: 'application/json; charset=utf-8', body: '{"ok":true}' });
    await withServerAt(decoy.origin, async (client) => {
      const r = await client.callTool({ name: 'query_registry', arguments: {} });
      const t = textOf(r);
      check('query_registry refuses a payload with no vaults array', r.isError === true);
      check('the failure says the shape changed', /has no `vaults` array/.test(t), t.slice(0, 200));
    });
    await decoy.close();
  }

  /* ---- A5: malformed JSON ---- */
  console.log('\n[A5] 200 application/json that is not JSON — the parse guard');
  {
    const decoy = await startDecoy({ status: 200, contentType: 'application/json', body: '{ not json' });
    await withServerAt(decoy.origin, async (client) => {
      const r = await client.callTool({ name: 'query_registry', arguments: {} });
      check('query_registry refuses unparseable JSON', r.isError === true);
      check('the failure says not parseable', /not parseable JSON/.test(textOf(r)));
    });
    await decoy.close();
  }

  /* ---- B: the whole smoke suite must go red against a decoy ---- */
  console.log('\n[B] the smoke suite itself, run against a decoy origin — it must FAIL');
  {
    const decoy = await startDecoy({ status: 200, contentType: 'text/html; charset=utf-8' });
    const result = await new Promise((resolve) => {
      const child = spawn(process.execPath, [SMOKE], {
        env: { ...process.env, ADNA_ORIGIN: decoy.origin },
        stdio: ['ignore', 'pipe', 'pipe'],
      });
      let out = '';
      child.stdout.on('data', (d) => (out += d));
      child.stderr.on('data', (d) => (out += d));
      child.on('close', (code) => resolve({ code, out }));
    });
    await decoy.close();

    check('smoke exits non-zero against a decoy origin', result.code !== 0, `exit code ${result.code}`);
    check('smoke reports SMOKE FAILED', /SMOKE FAILED|SMOKE ERRORED/.test(result.out));

    // Read the tally off the suite's own summary line rather than counting ✗
    // marks — those appear twice per failure (inline, then re-listed), and a
    // doubled count is exactly the typed-rather-than-derived defect KW-14 names.
    const tally = /SMOKE FAILED — (\d+) passed, (\d+) failed/.exec(result.out);
    const failedCount = tally ? Number(tally[2]) : 0;
    const passedCount = tally ? Number(tally[1]) : 0;
    check('smoke reports specific failed assertions', failedCount > 0, `${failedCount} failed`);
    console.log(`     (decoy run: ${failedCount} of ${failedCount + passedCount} smoke assertions went red)`);
  }

  console.log(`\n${'='.repeat(60)}`);
  if (failures.length > 0) {
    console.log(`RED-TEST FAILED — ${passed} passed, ${failures.length} failed.`);
    console.log('An assertion that cannot be made to fail is not an assertion:');
    for (const f of failures) console.log(`  ✗ ${f}`);
    process.exit(1);
  }
  console.log(`RED-TEST PASSED — ${passed} mutations, every one caught.`);
  console.log('The smoke suite has now been demonstrated able to fail. Its green may be believed.');
}

main().catch((err) => {
  console.error('\nRED-TEST ERRORED:', err?.stack ?? err);
  process.exit(1);
});
