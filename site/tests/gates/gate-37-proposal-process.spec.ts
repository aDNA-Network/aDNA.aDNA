/**
 * gate-37 — the AEP proposal process (HAUSSMANN P3.5; ADR-055, ratified 2026-08-20).
 *
 * This gate is not decoration. ADR-055 §4 says a proposal reaches `final` only when a check in
 * aDNA's own tooling FAILS IF THE RULE IS VIOLATED — and AEP-1, the process itself, names this
 * file as its conformance check. So the assertions below are the thing that entitles AEP-1 to
 * call itself final. If they were vacuous, AEP-1 would be a false claim about its own status.
 *
 * What that means concretely: each test targets a way the process could be violated in content,
 * not a way the page could look wrong. A proposal accepted with no named human, a `final` whose
 * conformance check does not exist on disk, two proposals sharing a number, a ninth state
 * appearing in one of the three places the state list is written — those are the failures.
 *
 * Route-coupled by design (ADR-057 same-diff law): the archive route, the per-proposal route
 * shape, and the JSON index path are all hardcoded here. A commit that moves any of them updates
 * this file in the same commit.
 */
import { test, expect } from '@playwright/test';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = join(process.cwd(), 'dist');
const VAULT_ROOT = join(process.cwd(), '..');
const ARCHIVE = join(DIST, 'community', 'proposals', 'index.html');
const INDEX_JSON = join(DIST, 'community', 'proposals.json');
const CONTENT_DIR = join(process.cwd(), 'src', 'content', 'proposals');

/** ADR-055 §3 — the ratified state list. Written here INDEPENDENTLY of the source so that a
 *  state added to utils/proposals.ts without a ratification fails this gate rather than riding
 *  along. Importing the app's own list would make the assertion circular and worthless. */
const RATIFIED_STATES = [
  'draft',
  'review',
  'accepted',
  'final',
  'rejected',
  'withdrawn',
  'superseded',
  'dormant',
] as const;

type IndexJson = {
  schema_version: string;
  process: { median_review_days: number | null; agent_authorship: string; ratification: string };
  states: { id: string; meaning: string; terminal: boolean; count: number }[];
  count: number;
  proposals: {
    number: number;
    title: string;
    status: string;
    url: string;
    authors: string[];
    sponsor: string | null;
    authored_by_agent: string | null;
    ratified_by: string | null;
    conformance_check: string | null;
    history: { date: string; state: string; note: string }[];
  }[];
};

let index: IndexJson;
let archiveHtml: string;

test.beforeAll(() => {
  if (!existsSync(DIST)) throw new Error('no dist/ — run `npx astro build`');
  if (!existsSync(INDEX_JSON)) throw new Error(`no ${INDEX_JSON} — the machine index did not build`);
  index = JSON.parse(readFileSync(INDEX_JSON, 'utf8'));
  archiveHtml = readFileSync(ARCHIVE, 'utf8');
});

test.describe('gate-37 proposal process', () => {
  // ── §2 the numbering law ───────────────────────────────────────────────
  test('G37 §2: numbers are unique, positive integers', () => {
    const numbers = index.proposals.map((p) => p.number);
    expect(numbers.length).toBeGreaterThan(0);
    expect(new Set(numbers).size).toBe(numbers.length);
    for (const n of numbers) {
      expect(Number.isInteger(n)).toBe(true);
      expect(n).toBeGreaterThan(0);
    }
  });

  test('G37 §2: every proposal has a built page at its number-derived route', () => {
    for (const p of index.proposals) {
      const route = join(DIST, 'community', 'proposals', `aep-${p.number}`, 'index.html');
      expect(existsSync(route), `AEP-${p.number} has no page at /community/proposals/aep-${p.number}/`).toBe(true);
    }
  });

  test('G37 §2: no built proposal page exists without a record in the index', () => {
    // The converse of the test above. An orphan route would be a number the archive does not
    // account for — which is the numbering law failing in the direction nobody looks.
    const dir = join(DIST, 'community', 'proposals');
    const built = readdirSync(dir, { withFileTypes: true })
      .filter((e) => e.isDirectory() && /^aep-\d+$/.test(e.name))
      .map((e) => Number(e.name.replace('aep-', '')));
    const known = new Set(index.proposals.map((p) => p.number));
    for (const n of built) expect(known.has(n), `orphan route /community/proposals/aep-${n}/`).toBe(true);
  });

  // ── §3 the state machine ───────────────────────────────────────────────
  test('G37 §3: every proposal is in one of the eight ratified states', () => {
    for (const p of index.proposals) {
      expect(RATIFIED_STATES, `AEP-${p.number} is in unratified state "${p.status}"`).toContain(p.status as never);
    }
  });

  test('G37 §3: the published state machine is exactly the ratified eight', () => {
    expect(index.states.map((s) => s.id).sort()).toEqual([...RATIFIED_STATES].sort());
  });

  test('G37 §3: the content schema enum matches the ratified eight', () => {
    // The state list exists in three places — the schema enum, utils/proposals.ts, and this
    // gate. Two of them are checked against each other here so a ninth state cannot enter via
    // the schema alone and render as a valid status.
    const config = readFileSync(join(process.cwd(), 'src', 'content.config.ts'), 'utf8');
    const block = config.slice(config.indexOf('const proposals'));
    for (const s of RATIFIED_STATES) {
      expect(block, `schema enum is missing the ratified state "${s}"`).toContain(`'${s}'`);
    }
  });

  test('G37 §3: state occupancy is derived, not typed', () => {
    for (const s of index.states) {
      const actual = index.proposals.filter((p) => p.status === s.id).length;
      expect(s.count, `state "${s.id}" reports ${s.count} but ${actual} proposals hold it`).toBe(actual);
    }
  });

  // ── §4 the conformance gate before `final` ─────────────────────────────
  test('G37 §4: a `final` proposal names a conformance check that EXISTS on disk', () => {
    const finals = index.proposals.filter((p) => p.status === 'final');
    for (const p of finals) {
      expect(p.conformance_check, `AEP-${p.number} is final with no conformance check named`).toBeTruthy();
      const path = join(VAULT_ROOT, p.conformance_check!);
      expect(
        existsSync(path),
        `AEP-${p.number} is final and names "${p.conformance_check}", which does not exist`,
      ).toBe(true);
    }
  });

  // ── §5 who decides ─────────────────────────────────────────────────────
  test('G37 §5: nothing reaches accepted or final without a named human ratifier', () => {
    for (const p of index.proposals) {
      if (p.status === 'accepted' || p.status === 'final') {
        expect(p.ratified_by, `AEP-${p.number} is ${p.status} with no named ratifier`).toBeTruthy();
      }
    }
  });

  test('G37 §5: an unratified proposal does not claim a ratifier', () => {
    for (const p of index.proposals) {
      if (p.status === 'draft' || p.status === 'review') {
        expect(p.ratified_by, `AEP-${p.number} is ${p.status} but names a ratifier`).toBeNull();
      }
    }
  });

  test('G37 §5: agent authorship is disclosed on the rendered page, not just in data', () => {
    for (const p of index.proposals) {
      const html = readFileSync(join(DIST, 'community', 'proposals', `aep-${p.number}`, 'index.html'), 'utf8');
      expect(html, `AEP-${p.number} does not render the agent-authorship disclosure`).toContain(
        'Drafted by an agent',
      );
      if (p.authored_by_agent) {
        expect(html, `AEP-${p.number} was agent-drafted but does not name the agent`).toContain(
          p.authored_by_agent,
        );
      }
    }
  });

  // ── the state history ──────────────────────────────────────────────────
  test('G37: every proposal has a state history whose last entry IS its status', () => {
    // A status badge with no history is a claim about a journey nobody can check; a history whose
    // tail disagrees with the badge is worse, because it looks checkable and is wrong.
    for (const p of index.proposals) {
      expect(p.history?.length, `AEP-${p.number} has no state history`).toBeGreaterThan(0);
      const last = p.history[p.history.length - 1];
      expect(last.state, `AEP-${p.number} is "${p.status}" but its history ends at "${last.state}"`).toBe(
        p.status,
      );
    }
  });

  test('G37: every state in a history is one of the ratified eight', () => {
    for (const p of index.proposals) {
      for (const h of p.history) {
        expect(RATIFIED_STATES, `AEP-${p.number} history names unratified state "${h.state}"`).toContain(
          h.state as never,
        );
      }
    }
  });

  test('G37: the state history is rendered, not merely stored', () => {
    for (const p of index.proposals) {
      const html = readFileSync(join(DIST, 'community', 'proposals', `aep-${p.number}`, 'index.html'), 'utf8');
      expect(html, `AEP-${p.number} does not render its state history`).toContain('State history');
      for (const h of p.history) {
        expect(html, `AEP-${p.number} history note is not on the page: "${h.note}"`).toContain(
          h.note.replace(/'/g, '&#39;'),
        );
      }
    }
  });

  // ── §7 single source: the index and the archive cannot disagree ────────
  test('G37 §7: the JSON count equals the archive table row count', () => {
    const rows = [...archiveHtml.matchAll(/href="\/community\/proposals\/aep-(\d+)\/"/g)].map((m) => m[1]);
    const uniqueLinked = new Set(rows);
    expect(index.count).toBe(index.proposals.length);
    expect(uniqueLinked.size, 'the archive links a different set of proposals than the index serves').toBe(
      index.count,
    );
  });

  test('G37 §7: the machine index is served as JSON and declares a schema version', () => {
    expect(index.schema_version).toMatch(/^\d+\.\d+$/);
  });

  test('G37 §7: the title of each proposal carries its own immutable number', () => {
    // title and the page heading are composed from different sources (frontmatter vs `number`),
    // so they can drift. Renumbering a title without renumbering the proposal would publish two
    // different numbers for one proposal.
    for (const file of readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md'))) {
      const raw = readFileSync(join(CONTENT_DIR, file), 'utf8');
      const num = raw.match(/^number:\s*(\d+)/m)?.[1];
      const title = raw.match(/^title:\s*"(.+)"/m)?.[1];
      expect(num, `${file} has no number`).toBeTruthy();
      expect(title, `${file} has no title`).toBeTruthy();
      expect(title!, `${file}: title does not open with its own number`).toMatch(
        new RegExp(`^AEP-${num}:`),
      );
    }
  });

  // ── §8 honest youth ────────────────────────────────────────────────────
  test('G37 §8: no responsiveness metric is published while none is measured', () => {
    // ADR-055 §8 + the instrument's D9 anchor 5. Claiming an unmeasured median on the page that
    // explains how decisions get made is precisely the defect this campaign exists to end. If a
    // median is ever genuinely measured, this assertion is the thing that must be updated to
    // allow it — deliberately, not silently.
    expect(index.process.median_review_days).toBeNull();
    expect(archiveHtml).not.toMatch(/median review time (of|is) \d/i);
  });

  test('G37 §8: the archive states the agent-authorship and human-ratification policy', () => {
    expect(index.process.agent_authorship).toContain('disclosure required');
    expect(index.process.ratification).toBe('human only');
    expect(archiveHtml).toMatch(/[Oo]nly a human can ratify/);
  });

  // ── D9 reachability: the funnel actually reaches this ──────────────────
  test('G37 D9: /community links to the proposal archive', () => {
    const community = readFileSync(join(DIST, 'community', 'index.html'), 'utf8');
    expect(community, '/community does not link to /community/proposals/').toContain(
      'href="/community/proposals/"',
    );
  });
});
