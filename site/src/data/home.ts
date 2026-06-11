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
    <span class="demo-filename">project/</span>
  </div>
  <pre class="step-demo-pre">my-project/
├── CLAUDE.md       ← agent master context
├── what/           ← what the project knows
│   └── context/      typed context files
├── how/            ← how it operates
│   └── missions/     decomposed work plans
└── who/            ← who&#39;s involved
    └── governance/   roles &amp; rules</pre>
</div>`,
  },
  {
    number: '02',
    title: 'Orient',
    description: 'Without a map, agents blast through irrelevant files or ask you to re-explain the project. Agents read your CLAUDE.md and AGENTS.md first, then pull typed context at exactly the depth they need — not your entire repo, not a blank slate.',
    demo: `<div class="step-demo">
  <div class="step-demo-bar">
    <span class="demo-dots"><span></span><span></span><span></span></span>
    <span class="demo-filename">CLAUDE.md</span>
  </div>
  <pre class="step-demo-pre"># CLAUDE.md — climate-pipeline

You are working on climate-pipeline.
A data pipeline for surface temperature
records (1990–present).

## Priority Rules
1. Never overwrite raw sensor data
2. All outputs need uncertainty ranges
3. Ingestion changes need peer review</pre>
</div>`,
  },
  {
    number: '03',
    title: 'Execute',
    description: 'Context windows close and wipe progress — the next agent starts over. aDNA decomposes work into sessions, missions, and campaigns — context-sized chunks that fit a single agent window. What one agent learns, the next inherits.',
    demo: `<div class="step-demo">
  <div class="step-demo-bar">
    <span class="demo-dots"><span></span><span></span><span></span></span>
    <span class="demo-filename">mission_schema_v2.md</span>
  </div>
  <pre class="step-demo-pre">plan_id: mission_schema_v2
status: active

## Objective 1 — Migrate schema
- Status: ✓ complete
- Files: data/schema.py

## Objective 2 — Backfill validation
- Status: in_progress
- Depends on: [1]</pre>
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
// These link the role landing pages (PersonaPage surfaces), not the /use-cases/*
// narratives the `personas` array above points at — two different surfaces.
export const audiences: HomeAudience[] = [
  { label: 'Researchers', href: '/researchers/' },
  { label: 'Educators', href: '/educators/' },
  { label: 'Enterprise', href: '/enterprise/' },
  { label: 'Compliance', href: '/compliance/' },
  { label: 'Startups', href: '/startup-first-hour/' },
  { label: 'Adopters', href: '/adopters/' },
];

export const stats: HomeStat[] = [
  { value: String(ENTITY_TYPE_COUNT), label: 'Entity Types' },
  { value: String(CONFORMANCE_LEVELS), label: 'Conformance Levels' },
  { value: STANDARD_VERSION, label: 'Current Version' },
  { value: STANDARD_LICENSE, label: 'Licensed' },
];
