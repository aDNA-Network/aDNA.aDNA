/**
 * Fresh-client smoke for adna-mcp-server.
 *
 * The builder never self-certifies (campaign convention 4): this spawns the built
 * server as a separate process and drives it over stdio with the official MCP
 * client, exactly as Claude Code would. It performs a real `initialize` handshake
 * and one real call per tool against the live site.
 *
 * Green here is not believed until `redtest.mjs` has shown each assertion able to
 * fail (convention 14).
 */

import { Client } from '@modelcontextprotocol/client';
import { StdioClientTransport, getDefaultEnvironment } from '@modelcontextprotocol/client/stdio';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const SERVER = join(here, '..', 'dist', 'index.js');

// Honoured so redtest.mjs can run this exact suite against a decoy origin and
// prove the assertions discriminate. Absent, the suite hits the live site.
const childEnv = { ...getDefaultEnvironment() };
if (process.env.ADNA_ORIGIN) childEnv.ADNA_ORIGIN = process.env.ADNA_ORIGIN;

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

const textOf = (result) =>
  (result.content ?? [])
    .filter((c) => c.type === 'text')
    .map((c) => c.text)
    .join('\n');

async function main() {
  const transport = new StdioClientTransport({ command: process.execPath, args: [SERVER], env: childEnv });
  const client = new Client({ name: 'adna-mcp-smoke', version: '0.0.0' });

  console.log('\n[1] initialize handshake');
  await client.connect(transport);
  const info = client.getServerVersion?.();
  check('handshake completed', true);
  check(
    'server identifies as adna-mcp-server',
    info?.name === 'adna-mcp-server',
    `got ${JSON.stringify(info?.name)}`,
  );

  console.log('\n[2] tool listing');
  const { tools } = await client.listTools();
  const names = tools.map((t) => t.name).sort();
  const expected = ['fetch_page', 'lookup_spec_glossary', 'query_registry', 'search_docs'];
  check(
    `exposes exactly the four declared tools (${names.join(', ')})`,
    JSON.stringify(names) === JSON.stringify(expected),
    `expected ${expected.join(', ')}`,
  );
  check(
    'every tool carries a description',
    tools.every((t) => typeof t.description === 'string' && t.description.length > 0),
  );
  check(
    'no tool description claims a hosted endpoint',
    !tools.some((t) => /https?:\/\/\S*\/mcp\b/i.test(t.description ?? '')),
  );

  console.log('\n[3] search_docs');
  const search = await client.callTool({ name: 'search_docs', arguments: { query: 'context graph', limit: 5 } });
  const searchText = textOf(search);
  check('search_docs did not error', search.isError !== true, searchText.slice(0, 200));
  check('search_docs returned matches', /pages matched/.test(searchText));
  check('search_docs returned page paths', /^path: \//m.test(searchText));
  check('search_docs carries the provenance block', /--- provenance/.test(searchText));
  check('provenance names the site build date', /site built_at:\s+\S+/.test(searchText));

  console.log('\n[4] fetch_page');
  const page = await client.callTool({ name: 'fetch_page', arguments: { path: '/glossary' } });
  const pageText = textOf(page);
  const pageOk = page.isError !== true;
  check('fetch_page did not error', pageOk, pageText.slice(0, 200));
  // Each content assertion requires the call to have SUCCEEDED. Without that
  // conjunct a negative assertion ("no HTML present") passes vacuously on an
  // error string — the vacuous-pass class P3.1 found in three of its own new
  // assertions. Verified by redtest: these must go red against a decoy.
  check('fetch_page returned markdown, not HTML', pageOk && !/<!doctype|<html/i.test(pageText));
  check('fetch_page returned the twin pointer block', pageOk && /Markdown twin of/.test(pageText));
  check('fetch_page normalised the path', pageOk && /^# \/glossary$/m.test(pageText));

  console.log('\n[5] query_registry');
  const reg = await client.callTool({
    name: 'query_registry',
    arguments: { vault: 'operations', include_edges: true },
  });
  const regText = textOf(reg);
  check('query_registry did not error', reg.isError !== true, regText.slice(0, 200));
  check('query_registry found the operations vault', /Operations\.aDNA/.test(regText));
  check('query_registry reports a derived match count', /\d+ of \d+ vaults matched/.test(regText));
  check('query_registry rendered relationships', /## Relationships \(\d+ of \d+\)/.test(regText));
  check('query_registry surfaces last_synced per row', /last_synced:\s+\S+/.test(regText));
  check('query_registry carries the provenance block', /--- provenance/.test(regText));

  console.log('\n[6] lookup_spec_glossary');
  const term = await client.callTool({ name: 'lookup_spec_glossary', arguments: { term: 'lattice' } });
  const termText = textOf(term);
  check('lookup_spec_glossary did not error', term.isError !== true, termText.slice(0, 200));
  check(
    'lookup_spec_glossary resolved to glossary or reference material',
    /Exact match in (the glossary|the reference)|candidate\(s\) from/.test(termText),
  );
  check('lookup_spec_glossary carries the provenance block', /--- provenance/.test(termText));

  console.log('\n[7] failure path — a route with no twin must fail loudly');
  const missing = await client.callTool({ name: 'fetch_page', arguments: { path: '/design-system' } });
  const missingText = textOf(missing);
  check('fetch_page on a twin-less route reports isError', missing.isError === true);
  check('the failure names the assertion that caught it', /Source assertion failed/.test(missingText));
  check('the failure does not return page content', !/<!doctype|<html/i.test(missingText));

  await client.close();

  console.log(`\n${'='.repeat(60)}`);
  if (failures.length > 0) {
    console.log(`SMOKE FAILED — ${passed} passed, ${failures.length} failed:`);
    for (const f of failures) console.log(`  ✗ ${f}`);
    process.exit(1);
  }
  console.log(`SMOKE PASSED — ${passed} assertions, 0 failures.`);
  console.log('Not believed until redtest.mjs shows these assertions able to fail.');
}

main().catch((err) => {
  console.error('\nSMOKE ERRORED:', err?.stack ?? err);
  process.exit(1);
});
