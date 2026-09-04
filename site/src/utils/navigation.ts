/**
 * Sidebar navigation data structure matching the site IA.
 *
 * Group order mirrors the header nav for the shared sections
 * (Learn · Patterns · Use Cases · Community · Reference) with the
 * doc-only groups (Glossary · Guides) appended — one top-level model
 * across BaseLayout and DocumentationLayout (network-audit C3
 * secondary-nav unification, E5 c165).
 *
 * The "For you" group and its ordering constraint are gone as of
 * HAUSSMANN P2.2 / ADR-049 Option A: the /adopters branch retired, so
 * nothing prefix-matches the Community group's persona pages any more
 * and SidebarNav's first-match scoping is no longer load-bearing here.
 */

import { referenceIA } from '../data/reference-ia';

export interface NavItem {
  label: string;
  href: string;
  order: number;
}

export interface NavSubgroup {
  label: string;
  items: NavItem[];
}

export interface NavGroup {
  label: string;
  items: (NavItem | NavSubgroup)[];
}

function isSubgroup(item: NavItem | NavSubgroup): item is NavSubgroup {
  return 'items' in item;
}

export { isSubgroup };

/**
 * Persistent top-level (header) nav model — Storyweave P4 M4.2. The header previously
 * hand-maintained its own array (Header.astro), which drifted from this file: Glossary,
 * Guides, and the persona pages were absent from the header entirely. Header.astro now
 * renders THIS model — seven flat entries + a "More" disclosure that surfaces the doc-only
 * sections — so the two navs can't re-diverge. Marketing pages (Network / Vaults / Commons)
 * live only here; the full doc-section tree lives in `navigation` below.
 */
export interface TopNavChild {
  label: string;
  href: string;
}

export interface TopNavEntry {
  label: string;
  /** flat entries carry an href; the "More" disclosure carries children instead */
  href?: string;
  children?: TopNavChild[];
}

/**
 * Primary nav — 7 flat items, no disclosure (HAUSSMANN P2.2 / ADR-049 Option A, ⛩ DP5).
 *
 * The ceiling is ≤7 with no load-bearing "More". The previous 8-item row failed on both
 * counts: it carried an 8th item AND parked Reference + Glossary — load-bearing by any
 * reading — behind a disclosure. The fold that made 7 possible:
 *
 *   Standard  ← absorbs /reference/* + /glossary/* (the /reference hub already lists both)
 *   Learn     ← absorbs /patterns/* + /how/* (Guides); /learn already cards Patterns
 *   Use Cases ← the single audience surface; the "For you" group is dissolved
 *
 * Order follows ADR-048's positioning sentence — "the standard, its docs, and the registry" —
 * so Standard leads. `href: '/reference'` rather than a new /standard route: the rename was
 * outside the ratified 11-redirect budget, so the hub is retitled "The Standard" instead
 * (site/src/pages/reference/index.astro) and no inbound link breaks.
 */
export const topNav: TopNavEntry[] = [
  { label: 'Standard', href: '/reference' },
  { label: 'Learn', href: '/learn' },
  { label: 'Vaults', href: '/vaults' },
  { label: 'Network', href: '/network' },
  { label: 'Commons', href: '/commons' },
  { label: 'Use Cases', href: '/use-cases' },
  { label: 'Community', href: '/community' },
];

// Reference sidebar group — derived from the single-source referenceIA
// (site/src/data/reference-ia.ts) so the sidebar's genre grouping + order match the /reference
// index and can't re-diverge (the old flat list had drifted to 8 vs the collection's 10).
// Mirrors the Learn group shape: a flat lead item (Specification) + one subgroup per genre.
const [refSpecGenre, ...refOtherGenres] = referenceIA;
const referenceGroupItems: (NavItem | NavSubgroup)[] = [
  {
    label: refSpecGenre.items[0].label,
    href: `/reference/${refSpecGenre.items[0].id}`,
    order: 1,
  },
  ...refOtherGenres.map((g): NavSubgroup => ({
    label: g.genre,
    items: g.items.map((it, i): NavItem => ({
      label: it.label,
      href: `/reference/${it.id}`,
      order: i + 1,
    })),
  })),
];

export const navigation: NavGroup[] = [
  {
    label: 'Learn',
    items: [
      { label: 'What is aDNA?', href: '/learn/what-is-adna', order: 1 },
      {
        label: 'Concepts',
        items: [
          { label: 'The Triad', href: '/learn/concepts/triad', order: 2 },
          { label: 'The Ontology', href: '/learn/concepts/ontology', order: 3 },
          { label: 'The Knowledge Graph', href: '/learn/concepts/knowledge-graph', order: 4 },
          { label: 'Governance Files', href: '/learn/concepts/governance-files', order: 5 },
          { label: 'Token Selection', href: '/learn/concepts/token-selection', order: 6 },
          { label: 'The Convergence Model', href: '/learn/concepts/convergence', order: 7 },
          { label: 'Context Optimization', href: '/learn/concepts/context-optimization', order: 8 },
          { label: 'Lattice Composition', href: '/learn/concepts/lattice-composition', order: 9 },
          { label: 'Open Standard', href: '/learn/concepts/open-standard', order: 10 },
          { label: 'Agentic Literacy', href: '/learn/concepts/agentic-literacy', order: 11 },
          { label: 'Context Commons', href: '/learn/concepts/context-commons', order: 12 },
          { label: 'FAIR Metadata', href: '/learn/concepts/fair-metadata', order: 13 },
        ],
      },
      // Slots into the unused `order: 14` between Concepts (…13) and Tutorials (15…), so the course
      // sits where a newcomer meets it — after the ideas, before the hands-on tutorials — without
      // renumbering a single existing entry.
      { label: 'Intro Course', href: '/learn/course', order: 14 },
      {
        label: 'Tutorials',
        items: [
          { label: 'Create Your First CLAUDE.md', href: '/learn/tutorials/first-claude-md', order: 15 },
          { label: 'Navigate an aDNA Vault', href: '/learn/tutorials/navigate-a-vault', order: 16 },
          { label: 'Apply the Question Test', href: '/learn/tutorials/question-test', order: 17 },
          { label: 'Write a Context File', href: '/learn/tutorials/write-a-context-file', order: 18 },
          { label: 'Design a Mission', href: '/learn/tutorials/design-a-mission', order: 19 },
          { label: 'Extend the Ontology', href: '/learn/tutorials/extend-the-ontology', order: 20 },
          { label: 'Build a Lattice', href: '/learn/tutorials/build-a-lattice', order: 21 },
          { label: 'Run a Campaign', href: '/learn/tutorials/run-a-campaign', order: 22 },
          { label: 'Federate a Vault', href: '/learn/tutorials/federate-a-vault', order: 23 },
        ],
      },
      {
        label: 'Comparisons',
        items: [
          { label: 'aDNA vs. PARA', href: '/learn/comparisons/adna-vs-para', order: 24 },
          { label: 'aDNA vs. Zettelkasten', href: '/learn/comparisons/adna-vs-zettelkasten', order: 25 },
          { label: 'aDNA vs. Notion', href: '/learn/comparisons/adna-vs-notion', order: 26 },
          { label: 'aDNA vs. Johnny.Decimal', href: '/learn/comparisons/adna-vs-johnny-decimal', order: 27 },
          { label: 'aDNA vs. Plain Markdown', href: '/learn/comparisons/adna-vs-plain-markdown', order: 28 },
        ],
      },
    ],
  },
  {
    label: 'Patterns',
    items: [
      { label: 'The Question Test', href: '/patterns/question-test', order: 1 },
      { label: 'AGENTS.md Routing', href: '/patterns/agents-md', order: 2 },
      { label: 'Dual-Audience Writing', href: '/patterns/dual-audience-writing', order: 3 },
      { label: 'Base/Extension', href: '/patterns/base-extension', order: 4 },
      { label: 'Context Recipe', href: '/patterns/context-recipe', order: 5 },
      { label: 'FAIR Envelope', href: '/patterns/fair-envelope', order: 6 },
      { label: 'Mission Decomposition', href: '/patterns/mission-decomposition', order: 7 },
      { label: 'Federation Readiness', href: '/patterns/federation-readiness', order: 8 },
    ],
  },
  {
    label: 'Use Cases',
    items: [
      { label: 'Solo Developer', href: '/use-cases/solo-developer', order: 1 },
      { label: 'Startup', href: '/use-cases/startup', order: 2 },
      { label: 'Research Lab', href: '/use-cases/research-lab', order: 3 },
      { label: 'Enterprise Team', href: '/use-cases/enterprise-team', order: 4 },
      { label: 'Educator', href: '/use-cases/educator', order: 5 },
      { label: 'Open Source Project', href: '/use-cases/open-source-project', order: 6 },
    ],
  },
  {
    label: 'Community',
    items: [
      { label: 'Roles & Progression', href: '/community/community-roles', order: 1 },
      { label: 'Processes', href: '/community/community-processes', order: 2 },
      { label: 'Context Commons', href: '/community/community-context-commons', order: 3 },
      { label: 'Contribution Standards', href: '/community/community-contribution-standards', order: 4 },
      // The "Adopter Personas" subgroup was removed at HAUSSMANN P2.2 / ADR-049 Option A: it
      // listed the same five audiences a second time, under /adopters/adopter-*, which now
      // 301 to their /use-cases/ twin. The Use Cases group above is the single audience surface.
    ],
  },
  {
    label: 'Reference',
    items: referenceGroupItems,
  },
  {
    label: 'Glossary',
    items: [
      {
        label: 'Core Architecture',
        items: [
          { label: 'aDNA', href: '/glossary/glossary-adna', order: 1 },
          { label: 'Triad', href: '/glossary/glossary-triad', order: 2 },
          { label: 'what/', href: '/glossary/glossary-what', order: 3 },
          { label: 'how/', href: '/glossary/glossary-how', order: 4 },
          { label: 'who/', href: '/glossary/glossary-who', order: 5 },
          { label: 'Question Test', href: '/glossary/glossary-question-test', order: 6 },
          { label: 'Bare Triad', href: '/glossary/glossary-bare-triad', order: 7 },
          { label: 'Embedded Triad', href: '/glossary/glossary-embedded-triad', order: 8 },
          { label: 'Deployment Form', href: '/glossary/glossary-deployment-form', order: 9 },
          { label: 'Ontology Extension', href: '/glossary/glossary-ontology-extension', order: 10 },
        ],
      },
      {
        label: 'Governance & Metadata',
        items: [
          { label: 'Governance File', href: '/glossary/glossary-governance-file', order: 11 },
          { label: 'AGENTS.md', href: '/glossary/glossary-agents-md', order: 12 },
          { label: 'README.md', href: '/glossary/glossary-readme-md', order: 13 },
          { label: 'Frontmatter', href: '/glossary/glossary-frontmatter', order: 14 },
          { label: 'Conformance Level', href: '/glossary/glossary-conformance-level', order: 15 },
          { label: 'Conformant Instance', href: '/glossary/glossary-conformant-instance', order: 16 },
        ],
      },
      {
        label: 'Operations',
        items: [
          { label: 'Session', href: '/glossary/glossary-session', order: 17 },
          { label: 'SITREP', href: '/glossary/glossary-sitrep', order: 18 },
          { label: 'Mission', href: '/glossary/glossary-mission', order: 19 },
          { label: 'Template', href: '/glossary/glossary-template', order: 20 },
          { label: 'Skill', href: '/glossary/glossary-skill', order: 21 },
          { label: 'Content-as-Code', href: '/glossary/glossary-content-as-code', order: 22 },
        ],
      },
      {
        label: 'Knowledge & Coordination',
        items: [
          { label: 'Context Library', href: '/glossary/glossary-context-library', order: 23 },
          { label: 'Coordination Note', href: '/glossary/glossary-coordination-note', order: 24 },
          { label: 'Collision Prevention', href: '/glossary/glossary-collision-prevention', order: 25 },
        ],
      },
    ],
  },
  {
    label: 'Guides',
    items: [
      // Rehomed from the retired "For you" group at HAUSSMANN P2.2 — an operational
      // walkthrough, not an audience page (ADR-048 renamed /compliance for exactly that reason).
      { label: 'Provenance & audit', href: '/provenance-audit', order: 0 },
      {
        label: 'Publishing',
        items: [
          { label: 'Vault-to-Site Pipeline', href: '/how/publishing/vault-to-site', order: 1 },
          { label: 'Content Mapping', href: '/how/publishing/content-mapping', order: 2 },
          { label: 'Social Sharing', href: '/how/publishing/social-sharing', order: 3 },
        ],
      },
      {
        label: 'Workshops',
        items: [
          { label: 'Vault Exploration', href: '/how/workshops/vault-exploration', order: 1 },
          { label: 'Build Your First Vault', href: '/how/workshops/build-your-first-vault', order: 2 },
          { label: 'Lattice Design', href: '/how/workshops/lattice-design', order: 3 },
          { label: 'Facilitation Guide', href: '/how/workshops/facilitation-guide', order: 4 },
        ],
      },
      {
        label: 'Lattice Examples',
        items: [
          { label: 'Content Pipeline', href: '/how/lattice-examples/lattice-content-pipeline', order: 1 },
          { label: 'Campaign Execution', href: '/how/lattice-examples/lattice-campaign-execution', order: 2 },
          { label: 'Context Serving', href: '/how/lattice-examples/lattice-context-serving', order: 3 },
          { label: 'Dual Audience Review', href: '/how/lattice-examples/lattice-dual-audience-review', order: 4 },
        ],
      },
    ],
  },
  // The "For you" group was removed at HAUSSMANN P2.2 / ADR-049 Option A. It held the five
  // audience landings + the /adopters hub — the third of four copies of the same link set.
  // Four of those five retired into their /use-cases/ twin (their reading paths folded into
  // the destination first, so nothing was dropped); the fifth, /compliance, became the topic
  // page /provenance-audit and moved to Guides below, which also closes the charter's
  // "Enterprise Architect routing gap" — it was previously unreachable from either
  // disclosure surface.
];
