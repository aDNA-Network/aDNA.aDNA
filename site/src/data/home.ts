/**
 * Home page data — surfaced via site/src/pages/index.astro.
 *
 * Extracted from index.astro frontmatter at M5.4 D12 cycle 113
 * (data-driven persona-card iteration; consolidated all 3 home arrays
 * for single-import consumer ergonomics; TS module preserves multi-line
 * template literals for step demos).
 *
 * Edit copy here; index.astro is the layout.
 */

import { STANDARD_VERSION, ENTITY_TYPE_COUNT, CONFORMANCE_LEVELS, STANDARD_LICENSE } from './standard';
// Proof-of-life leads the hero stat strip (Storyweave J3): the registry size is
// the site's most compelling number, so it sits first — sourced from vaults.json
// (never hardcoded; gate-20 claim-trace: vault-count → vaults.json vault_count).
import vaultsData from './vaults';

export interface HomeStep {
  number: string;
  title: string;
  description: string;
  demo: string; // raw HTML rendered via <Fragment set:html={step.demo} />
}

export interface HomePersona {
  title: string;
  summary: string;
  href: string;
}

export interface HomeStat {
  value: string;
  label: string;
  /**
   * HAUSSMANN P4.5b O2 — clinician item C4. Optional, and purely additive: a stat with no
   * `href` renders exactly as before. Two of the five first-screen counters are terms of
   * art — the cold-reader called "16 Entity Types" and "3 Conformance Levels"
   * "first-screen counters that mean nothing to a newcomer" — while "74 Vaults",
   * "v2.5 Current Version" and "MIT Licensed" explain themselves.
   *
   * ⭐ Both terms ARE defined on this site, and neither definition was reachable from the
   * number. That is the THIRD sighting of one shape in this mission, after the persona
   * disclosure and the ancient-DNA collision: content that exists, below the point of
   * confusion. So the fix is the same one — make it reachable — rather than deleting a
   * true, derived number or trading a precise term for an approximate plain-English one.
   */
  href?: string;
}

export interface HomeAudience {
  label: string;
  href: string;
}

export const steps: HomeStep[] = [
  {
    number: '01',
    title: 'Structure',
    description: 'Every agent session starts from scratch — agents relearn your project by rummaging through files. aDNA ends that. Three directories (what you know, how you work, who\'s involved) give any agent instant orientation.',
    demo: `<div class="step-demo">
  <div class="step-demo-bar">
    <span class="demo-dots"><span></span><span></span><span></span></span>
    <span class="demo-filename">aDNA.aDNA/</span>
  </div>
  <pre class="step-demo-pre">aDNA.aDNA/
├── CLAUDE.md       ← agent operating protocol
├── STATE.md        ← current phase, blockers
├── what/           ← what the project knows
│   ├── context/      typed context library
│   └── decisions/    architecture records
├── how/            ← how it operates
│   ├── campaigns/    strategic initiatives
│   └── missions/     decomposed work
└── who/            ← who&#39;s involved
    └── governance/   roles &amp; policy</pre>
</div>`,
  },
  {
    number: '02',
    title: 'Orient',
    description: 'Without a map, agents blast through irrelevant files or ask you to re-explain the project. Agents read your CLAUDE.md and <a href="/glossary/glossary-agents-md/">AGENTS.md</a> first, then pull typed context at exactly the depth they need — not your entire repo, not a blank slate.',
    demo: `<div class="step-demo">
  <div class="step-demo-bar">
    <span class="demo-dots"><span></span><span></span><span></span></span>
    <span class="demo-filename">aDNA.aDNA/CLAUDE.md</span>
  </div>
  <pre class="step-demo-pre"># CLAUDE.md — aDNA.aDNA

## Identity &amp; Personality
You are Rosetta — named after the Rosetta
Stone. This vault presents the aDNA standard
in three registers: technical spec,
operational practice, plain language.

## Standing Orders
1. Phase gates are human gates.
2. Destructive actions require confirmation.</pre>
</div>`,
  },
  {
    number: '03',
    title: 'Execute',
    description: 'Context windows close and wipe progress — the next agent starts over. aDNA decomposes work into sessions, missions, and campaigns — context-sized chunks that fit a single agent window. What one agent learns, the next inherits.',
    demo: `<div class="step-demo">
  <div class="step-demo-bar">
    <span class="demo-dots"><span></span><span></span><span></span></span>
    <span class="demo-filename">mission_wadna_p3_iterate.md</span>
  </div>
  <pre class="step-demo-pre">mission_id: mission_wadna_p3_iterate
phase: 3
status: in_progress

## Decade backbone
D1 Credibility-integrity — active
D2 Navigation &amp; docs — queued
D3 Agentic + community — queued
D4 Visual craft — queued</pre>
</div>`,
  },
];

export const personas: HomePersona[] = [
  {
    title: 'Solo Developer',
    summary: 'Freelancers and indie hackers using aDNA as a personal knowledge backbone.',
    href: '/use-cases/solo-developer',
  },
  {
    title: 'Enterprise Team',
    summary: 'Cross-functional teams embedding aDNA into existing codebases and workflows.',
    href: '/use-cases/enterprise-team',
  },
  {
    title: 'Educator',
    summary: 'Teachers and professors structuring course materials for student-agent collaboration.',
    href: '/use-cases/educator',
  },
  {
    title: 'Startup',
    summary: 'Fast-moving teams using aDNA to preserve institutional knowledge as they scale.',
    href: '/use-cases/startup',
  },
  {
    title: 'Researcher',
    summary: 'Labs and research groups tracking protocols, datasets, and experiments.',
    href: '/use-cases/research-lab',
  },
];

// §5 "Join the network" audience pathways (E5 c165; audit C3 orphan surfacing).
//
// HAUSSMANN P2.2 / ADR-049 Option A: this used to be a second, hand-maintained copy of the
// audience link set, pointing at the /researchers-style landings — "two different surfaces",
// as the old comment here admitted. Those landings retired into their /use-cases/ twin, so
// the array is now DERIVED from `personas` above. One source: the two surfaces can no longer
// drift apart, and gate-13 keeps deriving its assertions instead of hardcoding routes
// (WebForge KW-8/FR-K).
//
// Trailing slash is appended because the site builds in `directory` format — every canonical
// URL here ends in one, and ADR-051 made that the site's slug law.
export const audiences: HomeAudience[] = personas.map((p) => ({
  label: p.title,
  href: `${p.href}/`,
}));

// Loud, not silent. A curated list that derives to nothing is the failure mode this campaign
// has now hit twice — P2.1's `card.vault_slug` silent drop, then the P2.1 probe's own `slug`
// guess reproducing it inside the verification instrument. An empty §5 would render as a
// missing section rather than an error, so refuse to build instead.
if (audiences.length === 0) {
  throw new Error(
    'home.ts: `audiences` derived from `personas` but came out empty — §5 "Join the network" ' +
      'would render with no pathways. Check that `personas` is populated.',
  );
}

// Storyweave J3 (proof-of-life placement): "68 Vaults" leads — the real, growing
// registry size is the number a stranger can check — and the insider standard facts
// (entity types, conformance levels, version, license) follow it, not the reverse.
export const stats: HomeStat[] = [
  { value: String(vaultsData.vault_count), label: 'Vaults' },
  { value: String(ENTITY_TYPE_COUNT), label: 'Entity Types', href: '/learn/what-is-adna#entity-types' },
  { value: String(CONFORMANCE_LEVELS), label: 'Conformance Levels', href: '/glossary/glossary-conformance-level/' },
  { value: STANDARD_VERSION, label: 'Current Version' },
  { value: STANDARD_LICENSE, label: 'Licensed' },
];
