/**
 * Gate 43 — OFF-SITE CTA TARGET  (HAUSSMANN P4.4a A2, rows R-122 / R-123)
 *
 * Criterion: every governance door this site advertises actually opens, and every repository it
 * tells people to clone is licensed.
 *
 * ⭐ A REGRESSION GUARD, NOT A DISCOVERY INSTRUMENT — and the mission says so in as many words.
 * R-122 (the CTA pointed at a repo with no CONTRIBUTING/CoC) and R-123 (that repo was unlicensed)
 * were both CLOSED by P3.5 on 2026-08-20 and verified live. This gate exists so they cannot quietly
 * re-open. P2.6's re-baseline is the argument: **every gate in this suite asserts against the built
 * site, and none of them had ever probed the repos the site's primary CTA sends people to.** A
 * defect can be entirely outside the artifact under test and still be entirely ours.
 *
 * ⚠ THE TARGET SET IS DERIVED FROM THE BUILD, NEVER TYPED. `deploy_probe_p3_5.mjs` hardcodes the
 * three repo/file pairs it checks, which was right for a one-shot probe and wrong for a standing
 * gate: a typed list is F-c's exact class — a figure written down while the thing it counts moves
 * away from it. If the site's CTA is repointed at a different repo tomorrow, a hardcoded gate keeps
 * checking the old one and stays green about a door nobody uses.
 *
 * ⚠ WHY NOT SIMPLY GATE EVERY OFF-SITE LINK. The build publishes 128 unique `aDNA-Network` URLs,
 * ~95 of them per-page "edit this page" links. Probing all of them on every run would be slow and
 * reliably rate-limited, and `check_external_links.mjs` already records what that costs: *"gating on
 * that would train everyone to ignore a red build, which is worse than not checking."* So this gate
 * takes the narrow set that R-122/R-123 were actually about — the governance doors and the clone
 * destination — and the broad sweep stays with the non-blocking checker. **The narrowing is stated
 * here rather than silently applied**; a bounded scope that goes unmentioned reads as full coverage.
 *
 * ⚠ TWO FAILURE MODES, NEVER CONFLATED (⛩ operator ruling, 2026-08-24; campaign lesson 4). A 404 is
 * OUR defect and fails this gate. An unreachable host, a timeout, or a 429 is a PRECONDITION failure
 * — it is reported as such, in its own vocabulary, and explicitly not as a verdict about the repos.
 * This campaign has already misread three precondition failures as subject failures (a held Docker
 * port, a clean-tree guard, a regex matching no test); each time the instrument was correct and was
 * briefly believed broken.
 *
 * Red-proven by `scripts/offsite_cta_redtest.sh`.
 */
import { test, expect } from '@playwright/test';
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = join(process.cwd(), 'dist');
const ORG = 'aDNA-Network';

/** Basenames that make a URL a governance door. Case-insensitive: this org uses both
 *  `CODE_OF_CONDUCT.md` (in the code repos) and `code_of_conduct.md` (in community-policies), and a
 *  case-sensitive rule would silently drop half the set. */
const GOVERNANCE_DOC = /\/(CONTRIBUTING|CODE_OF_CONDUCT|LICEN[CS]E|SECURITY|PRIVACY|TERMS|GOVERNANCE)(\.md)?$/i;

/** Floors. 6 governance doors and 1 clone destination are published today. These catch a COLLAPSED
 *  extraction — a changed link shape, a moved dist — not an ordinary editorial change. */
const GOVERNANCE_FLOOR = 4;
const CLONE_FLOOR = 1;

function builtHtml(): string[] {
  if (!existsSync(DIST)) throw new Error(`no build output at ${DIST} — run \`npx astro build\` first`);
  const files: string[] = [];
  (function walk(dir: string) {
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const p = join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name.endsWith('.html')) files.push(p);
    }
  })(DIST);
  if (files.length === 0) throw new Error('walked dist/ and found no HTML — refusing to report green');
  return files;
}

/** Governance-door URLs the site publishes, under our own org only. Third-party repos stay with
 *  check_external_links.mjs: we cannot fix someone else's missing CoC, and failing the build over it
 *  is the "ignore the red" trap. Everything under our org, we own. */
function governanceUrls(): string[] {
  const out = new Set<string>();
  const re = new RegExp(`https://github\\.com/${ORG}/[A-Za-z0-9_./-]+`, 'g');
  for (const f of builtHtml()) {
    for (const m of readFileSync(f, 'utf8').matchAll(re)) {
      const url = m[0].replace(/[.,)]+$/, '');
      if (GOVERNANCE_DOC.test(url)) out.add(url);
    }
  }
  return [...out].sort();
}

/** Repos the site tells a reader to clone — R-123's class. Derived from the install command the
 *  site actually prints, so it tracks the instructions rather than a memory of them. */
function cloneRepos(): string[] {
  const out = new Set<string>();
  const re = new RegExp(`git clone https://github\\.com/(${ORG}/[A-Za-z0-9_.-]+?)(?:\\.git)?(?=[\\s"'<&]|$)`, 'g');
  for (const f of builtHtml()) {
    for (const m of readFileSync(f, 'utf8').matchAll(re)) out.add(m[1]);
  }
  return [...out].sort();
}

type Verdict =
  | { url: string; kind: 'ok'; status: number }
  | { url: string; kind: 'missing'; status: number }
  | { url: string; kind: 'precondition'; detail: string };

/** Probe with retries. The classification is the point: an HTTP answer is evidence about the repo;
 *  no answer at all is evidence about the network, and the two must never be spoken in the same
 *  vocabulary. 429/5xx are the host declining to answer, not the file being absent. */
async function probe(url: string, attempts = 3): Promise<Verdict> {
  let last = '';
  for (let i = 0; i < attempts; i++) {
    if (i) await new Promise((r) => setTimeout(r, 800 * i));
    try {
      const res = await fetch(url, { redirect: 'follow', signal: AbortSignal.timeout(15_000) });
      if (res.status === 429 || res.status >= 500) { last = `HTTP ${res.status}`; continue; }
      if (res.status === 404) return { url, kind: 'missing', status: 404 };
      if (res.ok) return { url, kind: 'ok', status: res.status };
      last = `HTTP ${res.status}`;
    } catch (e: any) {
      last = e?.name === 'TimeoutError' ? 'timeout after 15s' : String(e?.message ?? e);
    }
  }
  return { url, kind: 'precondition', detail: last || 'no response' };
}

function reportPreconditions(vs: Verdict[]) {
  const pre = vs.filter((v): v is Extract<Verdict, { kind: 'precondition' }> => v.kind === 'precondition');
  expect(
    pre.map((p) => `${p.url} — ${p.detail}`),
    `⚠ PRECONDITION FAILURE — ${pre.length} target(s) could not be reached after retries (network ` +
      `egress, DNS, or GitHub rate-limiting). THIS IS NOT A VERDICT ABOUT THE REPOS: nothing here ` +
      `says a governance file is missing. Re-run when the host is reachable; if CI egress is ` +
      `permanently blocked, that is an infrastructure decision, not a site defect.`,
  ).toEqual([]);
}

test.describe('gate-43 — off-site CTA target', () => {
  test.setTimeout(3 * 60 * 1000);

  test('G43a: the target set was actually derived from the build (coverage floor, not > 0)', () => {
    const gov = governanceUrls();
    const clones = cloneRepos();

    expect(
      gov.length,
      `derived ${gov.length} governance-door URL(s) from dist/, below the floor of ` +
        `${GOVERNANCE_FLOOR}. Zero targets trivially all resolve — an empty derivation must never ` +
        `read as "every door opens". Most likely the link shape changed or dist/ is stale.`,
    ).toBeGreaterThanOrEqual(GOVERNANCE_FLOOR);

    expect(
      clones.length,
      `derived ${clones.length} clone destination(s) from the built install instructions, below ` +
        `${CLONE_FLOOR}. R-123 was about the repo the site tells people to take; if that command ` +
        `is no longer extractable, this gate is checking nothing.`,
    ).toBeGreaterThanOrEqual(CLONE_FLOOR);
  });

  test('G43b: every governance door the site advertises resolves', async () => {
    const urls = governanceUrls();
    const verdicts = await Promise.all(urls.map((u) => probe(u)));

    reportPreconditions(verdicts);

    const missing = verdicts.filter((v) => v.kind === 'missing').map((v) => v.url);
    expect(
      missing,
      `${missing.length} advertised governance door(s) 404. This is R-122 exactly: the site tells a ` +
        `prospective contributor where the rules live, and the link does not open. Either restore ` +
        `the file in the target repo or stop advertising it — a dead governance link is worse than ` +
        `an absent one, because it reads as a commitment that was kept.`,
    ).toEqual([]);
  });

  test('G43c: every repository the site tells people to clone is licensed', async () => {
    const repos = cloneRepos();

    // Try the conventional spellings on the default branch. A repo is licensed if ANY resolves —
    // asserting one exact filename would fail correct repos, and a gate that fires on a correct
    // state is how a suite stops being read.
    const results = await Promise.all(
      repos.map(async (repo) => {
        const candidates = ['LICENSE', 'LICENSE.md', 'LICENSE.txt', 'COPYING'].map(
          (f) => `https://raw.githubusercontent.com/${repo}/main/${f}`,
        );
        const vs = await Promise.all(candidates.map((u) => probe(u)));
        return { repo, vs };
      }),
    );

    // Preconditions first: "unlicensed" must never be inferred from an unanswered request.
    reportPreconditions(results.flatMap((r) => r.vs));

    const unlicensed = results.filter((r) => !r.vs.some((v) => v.kind === 'ok')).map((r) => r.repo);
    expect(
      unlicensed,
      `${unlicensed.length} repo(s) advertised with \`git clone\` carry no LICENSE on the default ` +
        `branch. This is R-123: telling people to take code while leaving the terms unstated. ` +
        `Probed spellings: LICENSE, LICENSE.md, LICENSE.txt, COPYING.`,
    ).toEqual([]);
  });
});
